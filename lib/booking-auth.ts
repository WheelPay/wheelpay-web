export function isValidBookingKey(key: string | null): boolean {
  const expected = process.env.BOOKING_ACCESS_KEY;
  return !!expected && !!key && key === expected;
}
