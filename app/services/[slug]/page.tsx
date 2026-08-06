import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

const servicesData = {
  "wto-dispute-settlement": {
    title: "WTO Dispute Settlement",
    image: "/images/wto-dispute.png",
    icon: "/images/icon-itd.png",
    content: `We advise governments on complex issues arising under WTO law and represent them in State-to-State trade disputes. Our practice covers trade in goods, sanitary and phytosanitary measures, technical barriers to trade, local content requirements, intellectual property, and national security. We also advise trade ministries on treaty interpretation, WTO negotiations, institutional reform, and broader international trade policy.`
  },
  "trade-defence": {
    title: "Trade Defence",
    image: "/images/trade-defence.png",
    icon: "/images/icon-td.png",
    content: `We advise governments and businesses on all aspects of trade remedy law, from pre-initiation strategy through investigations, definitive measures, reviews, and judicial challenges. Our experience spans across anti-dumping, anti-subsidy, foreign subsidy, and safeguard proceedings before investigating authorities in the EU, the UK, India, and other key jurisdictions. We have advised clients across a broad range of industrial, consumer, and high-technology sectors.\n\nWe also advise on litigation before the EU General Court arising from trade remedy proceedings. Working alongside leading EU litigators, we develop litigation strategies and coordinate representation to protect our clients' commercial and regulatory interests.`
  },
  "customs-and-importation": {
    title: "Customs",
    image: "/images/customs.png",
    icon: "/images/icon-ci.png",
    content: `We advise businesses on the customs aspects of cross-border trade. Our practice covers tariff classification, customs valuation, rules of origin, import licensing, and trade embargoes, helping clients navigate complex customs frameworks across jurisdictions. We also advise on broader border measures and supply chain risks, enabling businesses to manage regulatory obligations, mitigate disruption, and facilitate the efficient movement of goods.`
  },
  "esg-and-regulatory-advisory": {
    title: "ESG & Regulatory Advisory",
    image: "/images/esg-regulatory.png",
    icon: "/images/icon-esg.png",
    content: `We advise businesses on the trade and regulatory implications of emerging sustainability and ESG frameworks. Our expertise includes the EU Carbon Border Adjustment Mechanism (CBAM), the EU Deforestation Regulation (EUDR), the Corporate Sustainability Due Diligence Directive (CSDDD), and US forced labour legislation. We support clients with compliance planning, regulatory engagement, supply chain due diligence, and strategic risk management in an increasingly complex regulatory environment. We also advise on other trade-related regulatory measures, including those arising from national security, economic security, and industrial policy initiatives.`
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
            <p key={index} className="leading-relaxed">{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t-2 border-[var(--brand-maroon)]/20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[var(--brand-maroon-dark)] mb-6">Require assistance with {service.title}?</h2>
          <Link 
            href="/contact" 
            className="inline-block px-10 py-5 bg-[var(--brand-maroon)] text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-[var(--brand-maroon-dark)] hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
