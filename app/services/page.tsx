import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | AR Legal",
  description: "AR Legal provides expert advisory and litigation services in WTO Dispute Settlement, Trade Defence, Customs & Importation, and ESG & Regulatory Advisory.",
};

const services = [
  {
    id: "01",
    title: "WTO Dispute Settlement",
    slug: "wto-dispute-settlement",
    image: "/images/wto-dispute.png",
    icon: "/images/icon-itd.png",
    description: "Advising and representing governments in complex WTO disputes at the State-to-State level.",
  },
  {
    id: "02",
    title: "Trade Defence",
    slug: "trade-defence",
    image: "/images/trade-defence.png",
    icon: "/images/icon-td.png",
    description: "Handling trade remedy investigations across their full life-cycle, acting for both governments and industry.",
  },
  {
    id: "03",
    title: "Customs",
    slug: "customs-and-importation",
    image: "/images/customs.png",
    icon: "/images/icon-ci.png",
    description: "Helping companies navigate complex customs frameworks and mitigate supply chain disruptions.",
  },
  {
    id: "04",
    title: "ESG & Regulatory Advisory",
    slug: "esg-and-regulatory-advisory",
    image: "/images/esg-regulatory.png",
    icon: "/images/icon-esg.png",
    description: "Advising companies on the intersection of international trade, sustainability, and regulatory compliance.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      {/* Hero Section */}
      <section className="relative w-full px-6 py-16 md:py-20 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Practice Areas
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--brand-maroon)]">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-black leading-relaxed font-medium">
            Expert advisory and litigation services across the full spectrum of international trade law.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8">
          {services.map((service) => (
            <Link 
              href={`/services/${service.slug}`} 
              key={service.id} 
              className="group bg-white rounded-3xl shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-peach)]/20 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-peach)]/10 rounded-bl-full group-hover:scale-110 group-hover:bg-[var(--brand-peach)]/20 transition-transform duration-500" />
              <div className="relative z-10 p-8 lg:p-6 flex-grow flex flex-col">
                <h2 className="text-3xl lg:text-xl xl:text-2xl font-bold mb-4 text-[var(--brand-maroon)] transition-colors">{service.title}</h2>
                <p className="text-black text-lg lg:text-sm xl:text-base mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="font-bold uppercase tracking-widest text-sm lg:text-xs xl:text-sm flex items-center text-[var(--brand-maroon)] group-hover:text-[var(--brand-maroon-dark)] mt-auto">
                  Explore Service 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 group-hover:translate-x-2 lg:group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
