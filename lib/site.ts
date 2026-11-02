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
  jobTitle: "Managing Partner",
  worksFor: FIRM.name,
  email: FIRM.email.counsel,
  /** URL of the About page (canonical page describing him) */
  url: absUrl("/about"),
  /**
   * TODO: Fill in the following when available – do NOT invent values.
   * linkedIn: "https://www.linkedin.com/in/...",
   * photo: "/images/akhil.jpeg",   (already in repo – confirm the right path)
   * qualifications: ["PhD (KU Leuven)", "LLM (Spain)", "BSc LLB (India)"],
   * practiceAreas: ["WTO Law", "Trade Defence", "Customs", "Trade-related ESG"],
   * otherProfileUrls: [],
   */
} as const;
