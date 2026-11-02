import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/JsonLd";
import { FIRM, absUrl } from "@/lib/site";

// ---------- Root Metadata ----------
export const metadata: Metadata = {
  metadataBase: new URL(FIRM.url),
  title: {
    default: "AR Legal | Law Firm in Brussels and New Delhi",
    template: "%s | AR Legal",
  },
  description:
    "AR Legal is a boutique international trade law practice based in Brussels and New Delhi, advising governments and companies on WTO disputes, trade defence, customs, and ESG regulatory mandates.",
  keywords: [
    "International Trade Law",
    "Trade Defence",
    "WTO Litigation",
    "Customs",
    "ESG",
    "AR Legal",
    "Akhil Raina",
    "Raina Legal",
  ],
  alternates: {
    canonical: FIRM.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "AR Legal | Law Firm in Brussels and New Delhi",
    description:
      "A boutique international trade law practice based in Brussels and New Delhi, advising governments and companies on WTO disputes, trade defence, customs, and ESG regulatory mandates.",
    url: FIRM.url,
    siteName: FIRM.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absUrl(FIRM.logoPath),
        alt: "AR Legal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Legal | Law Firm in Brussels and New Delhi",
    description:
      "A boutique international trade law practice in Brussels and New Delhi, advising on WTO disputes, trade defence, customs, and ESG regulatory mandates.",
    images: [absUrl(FIRM.logoPath)],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
};

// ---------- WebSite JSON-LD (sitewide) ----------
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absUrl("/#website"),
  name: FIRM.name,
  alternateName: [FIRM.alternateName],
  url: FIRM.url,
};

// ---------- LegalService JSON-LD (sitewide) ----------
const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": absUrl("/#organization"),
  name: FIRM.name,
  alternateName: FIRM.alternateName,
  url: FIRM.url,
  logo: absUrl(FIRM.logoPath),
  email: FIRM.email.counsel,
  telephone: FIRM.phone.directLine,
  areaServed: ["Belgium", "India"],
  ...(FIRM.socialProfiles.length > 0 ? { sameAs: FIRM.socialProfiles } : {}),
  employee: {
    "@type": "Person",
    "@id": absUrl("/about#person"),
    name: "Akhil Raina",
    jobTitle: "Managing Partner",
  },
  location: FIRM.offices.map((office) => ({
    "@type": "Place",
    name: office.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      postalCode: office.postalCode,
      addressRegion: office.addressRegion,
      addressCountry: office.addressCountry,
    },
  })),
};

// ---------- Root Layout ----------
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        {/* Structured data – invisible to visitors */}
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={legalServiceJsonLd} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <DisclaimerModal />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
        {/* GA4 analytics – production only, no visible UI */}
        {isProd && gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
