import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

const servicesData = {
  "wto-dispute-settlement": {
    id: "01",
    title: "WTO Dispute Settlement",
    icon: "/images/icon-itd.png",
    content: `AR Legal advises and represents governments in complex WTO disputes at the State-to-State level. AR Legal has also been involved in disputes concerning trade in goods, sanitary and phytosanitary barriers, local content requirements, intellectual property, and national security. We also provide strategic consultation for trade ministries on substantive WTO law, treaty interpretation, negotiations, and institutional reform.`
  },
  "trade-defence": {
    id: "02",
    title: "Trade Defence",
    icon: "/images/icon-td.png",
    content: `AR Legal handles trade remedy investigations across their full life-cycle – from initiation through to definitive measures, reviews, and associated litigation. The practice acts for both governments and industry, representing applicants and respondents in antidumping, anti-subsidy, and foreign subsidy, and safeguard cases before authorities in the EU, the UK, India, and other major jurisdictions. AR Legal has represented clients in industrial, consumer, and high-tech sectors.\n\nWhere proceedings give rise to court challenges, AR Legal advises on litigation strategy and submissions before the EU General Court. We engage experienced EU litigators to represent the interests of industry and governments before EU Courts.`
  },
  "customs-and-importation": {
    id: "03",
    title: "Customs & Importation",
    icon: "/images/icon-ci.png",
    content: `We provide advice and assistance on the practicalities of cross-border trade. AR Legal helps companies navigate complex customs frameworks, including advice on tariff classification, customs valuation, and rules of origin. We also help clients address import licensing requirements, trade embargoes, and other border measures to mitigate and manage supply chain disruptions.`
  },
  "esg-and-regulatory-advisory": {
    id: "04",
    title: "ESG & Regulatory Advisory",
    icon: "/images/icon-esg.png",
    content: `AR Legal advises companies on the evolving intersection of international trade, sustainability, and regulatory compliance. Our practice assists clients in navigating emerging ESG-related frameworks, such as the EU's Carbon Border Adjustment Mechanism (CBAM), the EU Deforestation Regulation (EUDR), the Corporate Sustainability Due Diligence Directive (CSDDD), as well as the US forced labour legislation. We also provide assist in engaging with regulators, as well as compliance planning, as these frameworks continue to evolve. We also advise on other regulatory measures, including those based on national security, which bear upon international trade.`
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
  return {
    title: `${service.title} | AR Legal`,
    description: service.content.substring(0, 160) + "...",
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <Link href="/services" className="text-sm font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity">
          ← Back to Services
        </Link>
      </div>
      
      <div className="flex items-center gap-6 mb-8">
        <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
        <div>
          <div className="text-sm font-bold opacity-70 mb-2">{service.id}</div>
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        </div>
      </div>
      <div className="border-b-2 border-foreground mb-12"></div>
      
      <div className="prose prose-lg text-foreground opacity-90 max-w-none space-y-6">
        {service.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-foreground/10 text-center">
        <h2 className="text-2xl font-bold mb-6">Require assistance with {service.title}?</h2>
        <Link 
          href="/contact" 
          className="inline-block px-8 py-4 bg-foreground text-background font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
