import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wheelpay.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/termsandconditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/accountdeletion`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
