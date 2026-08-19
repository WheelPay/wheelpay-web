import BookingClient from "./BookingClient";

export const metadata = {
  title: "Book Time",
  robots: { index: false, follow: false },
};

export default async function PartnerBookingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const key = typeof params.key === "string" ? params.key : "";

  return <BookingClient accessKey={key} />;
}
