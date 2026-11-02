/**
 * Single source of truth for AR Legal site-wide constants.
 * Import from here; never hard-code firm details elsewhere.
 */

export const SITE_URL = "https://rainalegal.com";

/** Returns an absolute URL rooted at SITE_URL. */
export function absUrl(path: string = ""): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const FIRM = {
  name: "AR Legal",
  alternateName: "Raina Legal",
  /** Canonical site URL – no www, no trailing slash */
  url: SITE_URL,
  /** Logo: relative path from /public */
  logoPath: "/images/logo.png",
  /** OpenGraph landscape image (1200x630): relative path from /public */
  ogImagePath: "/images/og-image.png",
  email: {
    counsel: "akhil@rainalegal.com",
    assistant: "assistant@rainalegal.com",
  },
  phone: {
    directLine: "+32 487 136 150",
  },
  offices: [
    {
      name: "AR Legal – Brussels",
      streetAddress: "Avenue de Tervueren 257",
      addressLocality: "Woluwe St. Pierre",
      postalCode: "1150",
      addressRegion: "Brussels",
      addressCountry: "BE",
    },
    {
      name: "AR Legal – New Delhi",
      streetAddress: "E-410, Greater Kailash Part 2",
      addressLocality: "New Delhi",
      postalCode: "110048",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
  ],
  /**
   * Social profile URLs for the firm.
   * TODO: Add firm LinkedIn / X / other profile URLs here when available.
   */
  socialProfiles: [] as string[],
} as const;

export const KEY_PERSON = {
  name: "Akhil Raina",
  honorificPrefix: "Dr.",
  jobTitle: "Managing Partner",
  worksFor: FIRM.name,
  email: FIRM.email.counsel,
  /** URL of the About page (canonical page describing him) */
  url: absUrl("/about"),
  photo: "/images/akhil.jpeg",
  linkedIn: "https://www.linkedin.com/in/akhilraina/",
  googleScholar: "https://scholar.google.com/citations?user=WeXVVUsAAAAJ&hl=en",
  otherProfileUrls: [
    "https://scholar.google.com/citations?user=WeXVVUsAAAAJ&hl=en",
  ] as string[],
  sameAs: [
    "https://www.linkedin.com/in/akhilraina/",
    "https://scholar.google.com/citations?user=WeXVVUsAAAAJ&hl=en",
  ] as string[],
  qualifications: [
    "PhD (Belgium; Marie Curie Fellow)",
    "LLM (Spain; ELSA Scholar)",
    "BSc, LLB (India; Trade & Inv. Law Honours)",
  ] as string[],
  practiceAreas: [
    "WTO and FTA Dispute Settlement",
    "Trade Defence",
    "Customs, Sanctions and Export Controls",
    "ESG & Regulatory Advisory",
  ] as string[],
} as const;
