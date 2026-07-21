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
    icon: "/images/icon-itd.png",
    description: "Advising and representing governments in complex WTO disputes at the State-to-State level.",
  },
  {
    id: "02",
    title: "Trade Defence",
    slug: "trade-defence",
    icon: "/images/icon-td.png",
    description: "Handling trade remedy investigations across their full life-cycle, acting for both governments and industry.",
  },
  {
    id: "03",
    title: "Customs & Importation",
    slug: "customs-and-importation",
    icon: "/images/icon-ci.png",
    description: "Helping companies navigate complex customs frameworks and mitigate supply chain disruptions.",
  },
  {
    id: "04",
    title: "ESG & Regulatory Advisory",
    slug: "esg-and-regulatory-advisory",
    icon: "/images/icon-esg.png",
    description: "Advising companies on the intersection of international trade, sustainability, and regulatory compliance.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      {/* Hero Section */}
      <section className="relative w-full px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Practice Areas
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
            Our <span className="text-[var(--brand-maroon)]">Services</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--brand-maroon-light)] leading-relaxed font-medium">
            Expert advisory and litigation services across the full spectrum of international trade law.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-24 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              href={`/services/${service.slug}`} 
              key={service.id} 
              className="group bg-white rounded-3xl p-10 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--brand-peach)]/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-peach)]/10 rounded-bl-full group-hover:scale-110 group-hover:bg-[var(--brand-peach)]/20 transition-transform duration-500" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="text-5xl font-black text-[var(--brand-peach)] opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </div>
                <div className="h-16 w-16 bg-[var(--brand-peach)]/30 rounded-full flex items-center justify-center p-3">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain filter drop-shadow-sm brightness-0 invert-0 sepia-[1] saturate-[100] hue-rotate-[330deg]" style={{filter: 'brightness(0) saturate(100%) invert(13%) sepia(43%) saturate(5152%) hue-rotate(342deg) brightness(85%) contrast(100%)'}} />
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 text-[var(--brand-maroon-dark)] group-hover:text-[var(--brand-maroon)] transition-colors">{service.title}</h2>
                <p className="text-[var(--brand-maroon-light)] text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="font-bold uppercase tracking-widest text-sm flex items-center text-[var(--brand-maroon)] group-hover:text-[var(--brand-maroon-dark)]">
                  Explore Service 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform">
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
