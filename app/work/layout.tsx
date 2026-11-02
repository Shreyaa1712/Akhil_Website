import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected mandates and representative matters handled by AR Legal, covering WTO disputes, trade defence investigations, customs advisory, and ESG regulatory work across multiple jurisdictions.",
  alternates: {
    canonical: absUrl("/work"),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
    { "@type": "ListItem", position: 2, name: "Work", item: absUrl("/work") },
  ],
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
