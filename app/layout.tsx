import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "WheelPay",
  url: "https://wheelpay.com",
  description:
    "WheelPay is an all-in-one platform built for gym owners — zero-fee payment processing, custom affiliate programs, AI-powered analytics, and gym management tools in one place.",
  email: "info@wheelpay.com",
  telephone: "+1-919-289-2025",
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "Payment Processing",
    "Recurring Billing",
    "Gym Management Software",
    "CrossFit Affiliate Software",
    "Retail Point of Sale",
    "AI-Powered Analytics",
  ],
};

const title = "WheelPay — Payments & Growth Tools for Fitness Businesses";
const description =
  "WheelPay is the all-in-one platform built by gym owners, for gym owners — zero-fee payment processing, next-day funding, and AI-powered tools to grow your business.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://wheelpay.com"),
  openGraph: {
    title,
    description,
    url: "https://wheelpay.com",
    siteName: "WheelPay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://wheelpay.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-navy text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
