import { NextRequest, NextResponse } from "next/server";
import { isValidBookingKey } from "@/lib/booking-auth";
import { getAvailableSlots, isAuthError } from "@/lib/google-calendar";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");
  if (!isValidBookingKey(key)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const slots = await getAvailableSlots();
    return NextResponse.json({ slots });
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
