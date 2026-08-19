import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      {
        source: "/book",
        destination: `/partner-booking?key=${process.env.BOOKING_ACCESS_KEY}`,
        // Temporary, not permanent — if BOOKING_ACCESS_KEY ever rotates, a
        // permanent redirect risks staying cached in the partner's browser
        // pointing at the old key.
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
