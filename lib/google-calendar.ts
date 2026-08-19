import { randomUUID } from "crypto";
import { google } from "googleapis";
import { DateTime, Interval } from "luxon";

const TIME_ZONE = "America/New_York";
const SLOT_MINUTES = 30;
const WORK_START_HOUR = 9;
const WORK_END_HOUR = 17;
const LOOKAHEAD_DAYS = 21;

// BOOKING_CALENDAR_IDS is a comma-separated list; the first entry is the hub
// account (new bookings land there, and it's the domain-wide-delegation
// subject). The rest are cross-referenced for availability only. Read from
// env rather than hardcoded so the public wheelpay-web repo doesn't carry
// real email addresses in source.
function getCalendarIds(): string[] {
  const raw = process.env.BOOKING_CALENDAR_IDS;
  if (!raw) {
    throw new Error("Missing BOOKING_CALENDAR_IDS");
  }
  return raw.split(",").map((id) => id.trim()).filter(Boolean);
}

function getHubCalendarId(): string {
  return getCalendarIds()[0];
}

// Authenticates as the "booking-calendar" service account, impersonating
// the hub calendar's account via Workspace domain-wide delegation. No
// user-consent refresh token involved, so there's no periodic expiry to renew.
function getAuthClient() {
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!rawKey) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_KEY");
  }
  const key = JSON.parse(rawKey) as { client_email: string; private_key: string };

  return new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar.readonly",
    ],
    subject: getHubCalendarId(),
  });
}

function getCalendarApi() {
  return google.calendar({ version: "v3", auth: getAuthClient() });
}

export type Slot = { start: string; end: string };

export function isAuthError(err: unknown): boolean {
  const anyErr = err as { message?: string; response?: { data?: { error?: string } } };
  const detail = anyErr?.response?.data?.error ?? anyErr?.message ?? "";
  return (
    typeof detail === "string" &&
    (detail.includes("invalid_grant") || detail.includes("unauthorized_client"))
  );
}

function mergeBusyIntervals(rawBusy: { start?: string | null; end?: string | null }[]): Interval[] {
  const intervals = rawBusy
    .filter((b) => b.start && b.end)
    .map((b) => Interval.fromDateTimes(DateTime.fromISO(b.start!), DateTime.fromISO(b.end!)))
    .sort((a, b) => a.start!.toMillis() - b.start!.toMillis());

  const merged: Interval[] = [];
  for (const interval of intervals) {
    const last = merged[merged.length - 1];
    if (last && interval.start! <= last.end!) {
      merged[merged.length - 1] = last.set({ end: DateTime.max(last.end!, interval.end!) });
    } else {
      merged.push(interval);
    }
  }
  return merged;
}

export async function getAvailableSlots(): Promise<Slot[]> {
  const calendar = getCalendarApi();
  const calendarIds = getCalendarIds();
  const now = DateTime.now().setZone(TIME_ZONE);
  const timeMin = now.toUTC().toISO();
  const timeMax = now.plus({ days: LOOKAHEAD_DAYS }).toUTC().toISO();

  const { data } = await calendar.freebusy.query({
    requestBody: {
      timeMin: timeMin!,
      timeMax: timeMax!,
      items: calendarIds.map((id) => ({ id })),
    },
  });

  const allBusy = calendarIds.flatMap((id) => data.calendars?.[id]?.busy ?? []);
  const busyIntervals = mergeBusyIntervals(allBusy);

  const slots: Slot[] = [];
  for (let dayOffset = 0; dayOffset < LOOKAHEAD_DAYS; dayOffset++) {
    const day = now.plus({ days: dayOffset }).startOf("day");
    if (day.weekday === 6 || day.weekday === 7) continue; // Sat/Sun

    let cursor = day.set({ hour: WORK_START_HOUR, minute: 0 });
    const dayEnd = day.set({ hour: WORK_END_HOUR, minute: 0 });

    while (cursor.plus({ minutes: SLOT_MINUTES }) <= dayEnd) {
      const slotInterval = Interval.fromDateTimes(cursor, cursor.plus({ minutes: SLOT_MINUTES }));
      const isPast = cursor < now;
      const overlapsBusy = busyIntervals.some((busy) => busy.overlaps(slotInterval));

      if (!isPast && !overlapsBusy) {
        slots.push({ start: cursor.toUTC().toISO()!, end: cursor.plus({ minutes: SLOT_MINUTES }).toUTC().toISO()! });
      }
      cursor = cursor.plus({ minutes: SLOT_MINUTES });
    }
  }

  return slots;
}

export async function createBooking(params: {
  start: string;
  end: string;
  partnerName: string;
  partnerEmail: string;
  notes?: string;
}) {
  const calendar = getCalendarApi();

  const { data } = await calendar.events.insert({
    calendarId: getHubCalendarId(),
    sendUpdates: "all",
    conferenceDataVersion: 1,
    requestBody: {
      summary: `Client demo — booked by ${params.partnerName}`,
      description: params.notes,
      start: { dateTime: params.start, timeZone: TIME_ZONE },
      end: { dateTime: params.end, timeZone: TIME_ZONE },
      attendees: [
        { email: params.partnerEmail, displayName: params.partnerName },
        { email: "kevin@wheelpay.com", optional: true },
        { email: "winston@wheelpay.com", optional: true },
      ],
      conferenceData: {
        createRequest: {
          requestId: randomUUID(),
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    },
  });

  return data;
}
