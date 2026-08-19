import { NextRequest, NextResponse } from "next/server";
import { isValidBookingKey } from "@/lib/booking-auth";
import { createBooking, isAuthError } from "@/lib/google-calendar";
import { notifyBooking } from "@/lib/slack-notify";

export async function POST(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!isValidBookingKey(key)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { start, end, partnerName, partnerEmail, notes } = body ?? {};

  if (!start || !end || !partnerName || !partnerEmail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const event = await createBooking({ start, end, partnerName, partnerEmail, notes });
    await notifyBooking({ partnerName, partnerEmail, start, notes, meetLink: event.hangoutLink });
    return NextResponse.json({ event });
  } catch (err) {
    if (isAuthError(err)) {
      console.error(
        "Service account auth failed — check GOOGLE_SERVICE_ACCOUNT_KEY and the wheelpay.com domain-wide delegation grant"
      );
      return NextResponse.json({ error: "unavailable" }, { status: 503 });
    }
    throw err;
  }
}
