"use client";

import { useEffect, useMemo, useState } from "react";

type Slot = { start: string; end: string };

type Status = "loading" | "unauthorized" | "error" | "unavailable" | "ready" | "submitting" | "booked";

export default function BookingClient({ accessKey }: { accessKey: string }) {
  const [status, setStatus] = useState<Status>("loading");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selected, setSelected] = useState<Slot | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [meetLink, setMeetLink] = useState("");

  useEffect(() => {
    if (!accessKey) {
      setStatus("unauthorized");
      return;
    }

    fetch(`/api/booking/availability?key=${encodeURIComponent(accessKey)}`)
      .then(async (res) => {
        if (res.status === 401) {
          setStatus("unauthorized");
          return;
        }
        if (res.status === 503) {
          setStatus("unavailable");
          return;
        }
        if (!res.ok) throw new Error("Failed to load availability");
        const data = await res.json();
        setSlots(data.slots ?? []);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [accessKey]);

  const slotsByDay = useMemo(() => {
    const groups = new Map<string, Slot[]>();
    for (const slot of slots) {
      const day = new Date(slot.start).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "America/New_York",
      });
      if (!groups.has(day)) groups.set(day, []);
      groups.get(day)!.push(slot);
    }
    return groups;
  }, [slots]);

  async function submitBooking() {
    if (!selected || !name || !email) return;
    setStatus("submitting");
    setSubmitError("");

    try {
      const res = await fetch(`/api/booking/create?key=${encodeURIComponent(accessKey)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: selected.start,
          end: selected.end,
          partnerName: name,
          partnerEmail: email,
          notes,
        }),
      });
      if (res.status === 503) {
        setStatus("unavailable");
        return;
      }
      if (!res.ok) throw new Error("Booking failed");
      const data = await res.json();
      setMeetLink(data.event?.hangoutLink ?? "");
      setStatus("booked");
    } catch {
      setSubmitError("Something went wrong booking that slot. Please try again.");
      setStatus("ready");
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center pt-16 pb-16 px-6">
      <div className="w-full max-w-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-green mb-6 text-center">
          Nathan&apos;s Availability
        </p>

        {status === "loading" && (
          <p className="text-mist text-center">Loading availability…</p>
        )}

        {status === "unauthorized" && (
          <p className="text-mist text-center">
            This page requires a valid access link. Please use the link Nathan sent you.
          </p>
        )}

        {status === "error" && (
          <p className="text-mist text-center">
            Couldn&apos;t load availability right now. Please try again shortly.
          </p>
        )}

        {status === "unavailable" && (
          <p className="text-mist text-center">
            Booking is temporarily unavailable. Please check back soon or reach out directly.
          </p>
        )}

        {status === "booked" && selected && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-ink mb-4">You&apos;re booked</h1>
            <p className="text-mist">
              {new Date(selected.start).toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "short",
                timeZone: "America/New_York",
              })}{" "}
              (Eastern)
            </p>
            <p className="text-mist mt-2">A calendar invite is on its way to {email}.</p>
            {meetLink && (
              <a
                href={meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm border border-white/20 text-ink rounded-full px-6 py-2.5 hover:bg-green hover:border-green transition-colors"
              >
                Google Meet link
              </a>
            )}
          </div>
        )}

        {(status === "ready" || status === "submitting") && !selected && (
          <div>
            <h1 className="text-3xl font-bold text-ink mb-8 text-center">
              Pick a time to book
            </h1>
            {slotsByDay.size === 0 && (
              <p className="text-mist text-center">No open slots in the next few weeks.</p>
            )}
            <div className="space-y-6">
              {Array.from(slotsByDay.entries()).map(([day, daySlots]) => (
                <div key={day}>
                  <p className="text-sm uppercase tracking-wide text-mist mb-2">{day}</p>
                  <div className="flex flex-wrap gap-2">
                    {daySlots.map((slot) => (
                      <button
                        key={slot.start}
                        onClick={() => setSelected(slot)}
                        className="text-sm border border-white/20 text-ink rounded-full px-4 py-2 hover:bg-green hover:border-green transition-colors"
                      >
                        {new Date(slot.start).toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: "America/New_York",
                        })}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(status === "ready" || status === "submitting") && selected && (
          <div>
            <button
              onClick={() => setSelected(null)}
              className="text-sm text-mist mb-6 hover:text-ink transition-colors"
            >
              ← Choose a different time
            </button>
            <h1 className="text-2xl font-bold text-ink mb-2">
              {new Date(selected.start).toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "short",
                timeZone: "America/New_York",
              })}
            </h1>
            <p className="text-mist mb-8">Eastern Time</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-ink placeholder:text-white/40 focus:outline-none focus:border-green/60"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-ink placeholder:text-white/40 focus:outline-none focus:border-green/60"
              />
              <textarea
                placeholder="Notes (optional — client name, demo details, etc.)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-ink placeholder:text-white/40 focus:outline-none focus:border-green/60"
              />

              {submitError && <p className="text-red-400 text-sm">{submitError}</p>}

              <button
                onClick={submitBooking}
                disabled={!name || !email || status === "submitting"}
                className="w-full bg-green text-white rounded-full px-6 py-3 hover:bg-green-bright transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Booking…" : "Confirm booking"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
