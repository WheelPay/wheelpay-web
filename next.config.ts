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
      // Old WordPress paths still in Google's index (site cutover was
      // 2026-08-19, same domain) — send them somewhere real instead of
      // 404ing on stale search results and backlinks.
      { source: "/contact/termsandconditions", destination: "/termsandconditions", permanent: true },
      { source: "/contact/support", destination: "/contact", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/about3", destination: "/", permanent: true },
      { source: "/what-is-wheelpay", destination: "/", permanent: true },
      { source: "/global-village", destination: "/", permanent: true },
      { source: "/leadstrike", destination: "/", permanent: true },
      { source: "/partnerships", destination: "/", permanent: true },
      { source: "/affiliates", destination: "/", permanent: true },
      { source: "/affiliates/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
