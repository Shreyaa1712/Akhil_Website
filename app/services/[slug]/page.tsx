import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absUrl } from "@/lib/site";

const servicesData = {
  "wto-dispute-settlement": {
    title: "WTO and FTA Dispute Settlement",
    image: "/images/wto-dispute.png",
    icon: "/images/icon-itd.png",
    content: `We advise governments on complex issues arising under WTO law and FTAs. We represent governments in State-to-State trade disputes, and our practice covers trade in goods, bilateral safeguard measures, sanitary and phytosanitary measures, technical barriers to trade, local content requirements, intellectual property, and national security. We also advise governments on treaty interpretation, FTA negotiations, institutional reform, and broader international trade policy.`
  },
  "trade-defence": {
    title: "Trade Defence",
    image: "/images/trade-defence.png",
    icon: "/images/icon-td.png",
    content: `We advise governments and businesses on all aspects of trade remedy law, including pre-initiation strategy. We represent our clients through the entire life-cycle of the investigation, and assist them with reviews and judicial challenges. Our experience spans anti-dumping, anti-subsidy, foreign subsidy, and safeguard proceedings before investigating authorities in the EU, the UK, India, the US, and other key jurisdictions.`
  },
  "customs-and-importation": {
    title: "Customs, Sanctions and Export Controls",
    image: "/images/customs.png",
    icon: "/images/icon-ci.png",
    content: `We advise businesses on customs matters, including tariff classification, valuation, rules of origin, import licensing, as well as sanctions and export controls. We also advise companies on supply chain risks, enabling businesses to manage their regulatory obligations, mitigate disruption, and facilitate the efficient movement of goods and services.`
  },
  "esg-and-regulatory-advisory": {
    title: "ESG & Regulatory Advisory",
    image: "/images/esg-regulatory.png",
    icon: "/images/icon-esg.png",
    content: `We advise companies on the implications for their businesses of emerging sustainability and ESG frameworks. We have experience with the EU’s Carbon Border Adjustment Mechanism (CBAM), Deforestation Regulation (EUDR), and Corporate Sustainability Due Diligence Directive (CSDDD), as well as global forced labour regulations. We support clients with planning, supply chain due diligence, and engagement with regulators around the world.`
  }
};

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  if (!service) return { title: "Service Not Found" };
  const description = service.content.length > 155
    ? service.content.substring(0, 152) + "..."
    : service.content;
  return {
    title: service.title,
    description,
    alternates: {
      canonical: absUrl(`/services/${slug}`),
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: absUrl("/services") },
      { "@type": "ListItem", position: 3, name: service!.title, item: absUrl(`/services/${slug}`) },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <div className="bg-[var(--brand-light)] min-h-screen text-black pb-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--brand-maroon)] opacity-90 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            BACK TO SERVICES
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl leading-none font-bold font-serif text-[var(--brand-maroon)] tracking-tight">{service.title}</h1>
        </div>
        <div className="border-b-[3px] border-[var(--brand-maroon)] opacity-90 mb-10"></div>
        
        <div className="text-[1.25rem] md:text-[1.35rem] text-black max-w-none space-y-6 font-medium leading-[1.7]">
          {service.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="leading-relaxed whitespace-pre-line">{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-[var(--brand-maroon)]/20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--brand-maroon)] mb-6">Require assistance with {service.title}?</h2>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-[var(--brand-maroon)] text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-[var(--brand-maroon-dark)] hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
