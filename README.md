# wheelpay-web

WheelPay marketing site (Next.js).

## Partner booking page

`/partner-booking?key=...` is a private, unlisted page (noindex) where Kevin can see Nathan's merged availability across 5 Google accounts and book a client-demo slot on Nathan's calendar. Ported from the aheadmedia repo 2026-08-19 once this site existed to be the real home for it — logic unchanged, only re-themed to WheelPay's navy/green palette.

- **Calendars checked:** `nathan@wheelpay.com` (hub — new bookings land here), `nathan@aheadmedia.net`, `nathan@besthouroftheirday.com`, `hopeinyhwh@gmail.com`, `nandc2019@gmail.com`. The four non-hub calendars must be shared with `nathan@wheelpay.com` ("See all event details") in each account's Google Calendar settings — already done as part of the original setup, no action needed here.
- **Auth model:** a Google Cloud service account (`booking-calendar@wheelpay.iam.gserviceaccount.com`, project "WheelPay") impersonates `nathan@wheelpay.com` via Workspace domain-wide delegation, scoped to `calendar.events` + `calendar.readonly`. No user-consent OAuth flow, no refresh token, no expiry. A shared-secret `key` query param gates the page and both API routes.
- **Env vars needed (copy the existing values from the aheadmedia Vercel project — same service account, same key):**
  - `GOOGLE_SERVICE_ACCOUNT_KEY` — the full downloaded service-account JSON, as one value
  - `BOOKING_ACCESS_KEY` — the shared-secret key gating the page
  - `SLACK_WEBHOOK_URL` — optional; posts a Slack message on every booking as a tripwire. No-ops silently if unset.
- Send Kevin the link `https://wheelpay-web.vercel.app/book` (or the production domain once wheelpay.com is cut over) — a redirect (`next.config.ts`) to `/partner-booking?key=<BOOKING_ACCESS_KEY>`. Rebuild-and-redeploy if `BOOKING_ACCESS_KEY` ever changes, since the redirect destination is baked in at build time.
- Logic lives in `lib/google-calendar.ts` (service account auth + freebusy merge + slot generation, 30-min slots / 9-5 ET weekdays / 3 weeks out, auto-generates a Google Meet link per booking, adds `kevin@wheelpay.com` and `winston@wheelpay.com` as optional attendees) and `lib/booking-auth.ts` (key check).
- `lib/slack-notify.ts` posts the Slack notification via `SLACK_WEBHOOK_URL`.
- **The aheadmedia.net copy stays live in parallel until this site goes live on wheelpay.com** — do not remove `app/partner-booking/`, `app/api/booking/`, or the `/book` redirect from the aheadmedia repo until Nathan confirms the cutover.
