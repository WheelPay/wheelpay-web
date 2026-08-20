import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/partner-booking",
    },
    sitemap: "https://wheelpay.com/sitemap.xml",
  };
}
