import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { FIRM, KEY_PERSON, absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About AR Legal and Akhil Raina, Managing Partner",
  description:
    "Learn about AR Legal and its founder Dr. Akhil Raina, Managing Partner. A boutique Brussels and New Delhi practice advising on WTO disputes, trade defence, customs, and ESG mandates.",
  alternates: {
    canonical: absUrl("/about"),
  },
  openGraph: {
    title: "About AR Legal and Akhil Raina, Managing Partner",
    description:
      "Learn about AR Legal and its founder Dr. Akhil Raina, Managing Partner. A boutique Brussels and New Delhi practice advising on WTO disputes, trade defence, customs, and ESG mandates.",
    url: absUrl("/about"),
    type: "profile",
  },
};

// ---------- Person JSON-LD ----------
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absUrl("/about#person"),
  name: KEY_PERSON.name,
  honorificPrefix: KEY_PERSON.honorificPrefix,
  jobTitle: KEY_PERSON.jobTitle,
  worksFor: {
    "@type": "LegalService",
    "@id": absUrl("/#organization"),
    name: FIRM.name,
  },
  image: absUrl(KEY_PERSON.photo),
  email: KEY_PERSON.email,
  url: KEY_PERSON.url,
  sameAs: [...KEY_PERSON.sameAs],
  knowsAbout: [...KEY_PERSON.practiceAreas],
  hasCredential: KEY_PERSON.qualifications.map((qualification) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: qualification,
  })),
};

// ---------- ProfilePage / AboutPage JSON-LD ----------
const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": absUrl("/about#webpage"),
  url: absUrl("/about"),
  name: "About AR Legal and Akhil Raina, Managing Partner",
  mainEntity: {
    "@id": absUrl("/about#person"),
  },
};

// ---------- BreadcrumbList ----------
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: absUrl("/about"),
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={aboutPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
