export async function notifyBooking(params: {
  partnerName: string;
  partnerEmail: string;
  start: string;
  notes?: string;
  meetLink?: string | null;
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  const when = new Date(params.start).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  });

  const text = [
    `📅 New booking via aheadmedia.net/book`,
    `*${params.partnerName}* (${params.partnerEmail}) booked *${when}* (Eastern)`,
    params.notes ? `> ${params.notes}` : null,
    params.meetLink ? `Meet: ${params.meetLink}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  } catch (err) {
    console.error("Slack booking notification failed", err);
  }
}
