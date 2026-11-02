import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AR Legal advises on WTO and FTA Dispute Settlement, Trade Defence, Customs, Sanctions and Export Controls, and ESG & Regulatory Advisory. Expert international trade law in Brussels and New Delhi.",
  alternates: {
    canonical: absUrl("/services"),
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
      name: "Services",
      item: absUrl("/services"),
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {children}
    </>
  );
}
