import Link from "next/link";
import WorldMap from "@/components/WorldMap";
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

const Info = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

const Scale = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z"/></svg>
);


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      {/* Prominent Disclaimer Banner */}
      <div className="w-full bg-[var(--brand-maroon-dark)] text-[var(--brand-light)] py-3 px-6 text-center text-sm font-medium shadow-sm z-10 relative">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          <Info className="w-4 h-4 text-[var(--brand-peach)]" />
          <span className="font-bold uppercase tracking-wider text-[var(--brand-peach)]">Legal Disclaimer:</span>
          The information on this website is for general informational purposes only and does not constitute legal advice. 
          <Link href="/disclaimer" className="ml-1 underline hover:text-white transition-colors duration-200">
            Read our full disclaimer.
          </Link>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative w-full px-6 py-24 md:py-36 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10" />
        <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-[var(--brand-peach-dark)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

        <div className="max-w-7xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)] drop-shadow-sm">
            Clarity in Complex <br className="hidden md:block" /> 
            <span className="text-[var(--brand-maroon)]">International Trade</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 text-[var(--brand-maroon-light)] leading-relaxed font-medium">
            AR Legal helps governments and businesses navigate the increasingly complex landscape of international trade law, trade defence, and regulatory policy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="group inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-maroon)] text-[var(--brand-light)] rounded-full text-lg font-bold hover:bg-[var(--brand-maroon-dark)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Explore Our Expertise
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[var(--brand-maroon)] text-[var(--brand-maroon)] rounded-full text-lg font-bold hover:bg-[var(--brand-maroon)]/5 transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: About Us Preview */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative overflow-hidden border border-[var(--brand-peach)]/50">
          {/* Decorative Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-peach-dark)]/20 rounded-bl-full -z-0" />
          
          <div className="w-full md:w-5/12 flex-shrink-0 relative z-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--brand-maroon)] rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 -z-10 opacity-20"></div>
              <img src="/images/dr-raina.png" alt="Dr. Akhil Raina" className="w-full h-auto rounded-2xl object-cover" />
            </div>
          </div>
          
          <div className="w-full md:w-7/12 flex flex-col relative z-10">
            <div className="mb-2 inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
              Our Founder
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)] mb-6 leading-tight">Dr. Akhil Raina</h3>
            
            <p className="text-xl leading-relaxed mb-6 text-[var(--brand-maroon-light)] font-medium">
              Counsel to governments and industry. Licensed to practice in India and registered at the Brussels Bar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)]">
                  <Scale className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--brand-maroon-dark)]">WTO Litigation</h4>
                  <p className="text-sm text-[var(--brand-maroon-light)]">Expert representation in complex disputes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)]">
                  <Shield className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--brand-maroon-dark)]">Trade Defence</h4>
                  <p className="text-sm text-[var(--brand-maroon-light)]">Strategic counsel for market protection.</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center self-start text-[var(--brand-maroon)] font-bold text-lg group">
              <span className="border-b-2 border-[var(--brand-maroon)] pb-1">Read Full Profile</span>
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Our Services Preview */}
      <section className="w-full bg-[var(--brand-maroon-dark)] text-[var(--brand-light)] py-24 mt-10 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <div className="inline-flex items-center gap-2 text-[var(--brand-peach)] font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-[2px] bg-[var(--brand-peach)]"></span>
              Practice Areas
              <span className="w-8 h-[2px] bg-[var(--brand-peach)]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              { id: '01', title: 'ITD', full: 'International Trade Law', icon: '/images/icon-itd.png', slug: 'wto-dispute-settlement' },
              { id: '02', title: 'TD', full: 'Trade Defence', icon: '/images/icon-td.png', slug: 'trade-defence' },
              { id: '03', title: 'C&I', full: 'Customs & Internal Market', icon: '/images/icon-ci.png', slug: 'customs-and-importation' },
              { id: '04', title: 'ESG & RA', full: 'Trade-related ESG', icon: '/images/icon-esg.png', slug: 'esg-and-regulatory-advisory' },
            ].map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.slug}`}
                className="group bg-white/5 border border-white/10 hover:border-[var(--brand-peach)]/60 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between items-center text-center relative overflow-hidden backdrop-blur-md hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--brand-peach)]/20 cursor-pointer min-h-[300px]"
              >
                {/* Top Border Glow Beam */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--brand-peach)] shadow-[0_0_12px_var(--brand-peach)] group-hover:w-full transition-all duration-500 ease-out"></div>

                {/* Animated Watermark Number */}
                <div className="absolute top-3 left-4 text-5xl font-black text-white/5 pointer-events-none group-hover:text-[var(--brand-peach)]/20 group-hover:scale-110 transition-all duration-500 font-serif">
                  {service.id}
                </div>

                <div className="flex flex-col items-center z-10 w-full pt-4">
                  {/* Icon Badge */}
                  <div className="h-20 w-20 bg-[var(--brand-peach)] rounded-2xl flex items-center justify-center mb-6 p-4 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="w-full h-full object-contain filter drop-shadow-md" 
                      style={{filter: 'brightness(0) saturate(100%) invert(13%) sepia(43%) saturate(5152%) hue-rotate(342deg) brightness(85%) contrast(100%)'}} 
                    />
                  </div>

                  <h3 className="text-2xl font-bold font-serif mb-2 text-[var(--brand-peach)] group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80 group-hover:text-white leading-relaxed">
                    {service.full}
                  </p>
                </div>

                {/* Hover Action Link Indicator */}
                <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[var(--brand-peach)] opacity-80 group-hover:opacity-100 transition-opacity z-10">
                  <span>Explore Practice</span>
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

          </div>

          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-peach)] text-[var(--brand-maroon-dark)] rounded-full text-lg font-bold hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Representative Matters Preview */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative">
        <div className="flex flex-col text-center items-center mb-16 gap-4">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Global Reach
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)]">Representative Matters</h2>
        </div>
        
        <div className="w-full max-w-7xl mx-auto flex justify-center items-center bg-white rounded-3xl shadow-xl shadow-[var(--brand-maroon)]/5 p-8 border border-[var(--brand-peach)]/50 hover:shadow-2xl transition-shadow duration-500 min-h-[400px]">
          <WorldMap />
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/work" className="inline-flex items-center justify-center text-[var(--brand-maroon)] font-bold text-lg group">
            <span className="border-b-2 border-[var(--brand-maroon)] pb-1">See Our Track Record</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Section 5: The Way We Work */}
      <section className="w-full bg-[var(--brand-peach)]/30 py-24 border-t border-[var(--brand-peach)]/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)]">The Way We Work</h2>
            <p className="text-lg text-[var(--brand-maroon-light)] max-w-2xl">A structured, strategic approach to delivering excellence in every mandate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-[var(--brand-maroon)]/20 via-[var(--brand-maroon)]/40 to-[var(--brand-maroon)]/20 rounded-full z-0"></div>

            {[
              { step: '1', title: 'Consultation & Confidentiality', desc: 'We discuss your case and consult you with the latest laws ensuring your privacy and confidentiality.' },
              { step: '2', title: 'Evaluation & Strategy', desc: 'Our team analyzes your case from every corner and customizes a tailored strategy to maximize success.' },
              { step: '3', title: 'Strong Representation', desc: 'We vehemently advocate for your rights and provide well-timed services without any delay.' },
              { step: '4', title: 'Resolution & Support', desc: 'We achieve the best outcome and provide ongoing assistance throughout the legal journey and thereafter.' },
            ].map((item, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-xl shadow-[var(--brand-maroon)]/10 border-4 border-[var(--brand-light)] group-hover:border-[var(--brand-peach)] group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-black text-[var(--brand-maroon)]">{item.step}</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-[var(--brand-maroon-dark)] group-hover:text-[var(--brand-maroon)] transition-colors">{item.title}</h3>
                <p className="text-[var(--brand-maroon-light)]/90 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Academic & Thought Leadership */}
      <section className="w-full bg-white py-24 border-t border-[var(--brand-peach)]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[var(--brand-peach)]/20 via-white to-[var(--brand-peach)]/10 rounded-3xl p-8 md:p-14 border border-[var(--brand-peach)]/60 shadow-xl shadow-[var(--brand-maroon)]/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-maroon)]/10 text-[var(--brand-maroon)] text-xs font-bold uppercase tracking-widest rounded-full w-fit">
                  Practice-Integrated Research & Teaching
                </div>

                <h2 className="text-3xl md:text-5xl font-bold font-serif text-[var(--brand-maroon-dark)] leading-tight">
                  Academic & Thought Leadership
                </h2>

                <p className="text-lg text-[var(--brand-maroon-light)] leading-relaxed">
                  Teaching, research, and publication are integrated into our legal practice. Dr. Akhil Raina teaches at <strong className="text-[var(--brand-maroon-dark)]">KU Leuven</strong> and <strong className="text-[var(--brand-maroon-dark)]">ELPO Athens</strong> (formerly <strong className="text-[var(--brand-maroon-dark)]">World Trade Institute, Bern</strong>), training government officials and students across Europe, Asia, Africa, and South America.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="bg-white/80 backdrop-blur border border-[var(--brand-peach)]/50 rounded-xl px-4 py-3 text-sm font-semibold text-[var(--brand-maroon-dark)] shadow-sm">
                    KU Leuven & ELPO Athens Faculty
                  </div>
                  <div className="bg-white/80 backdrop-blur border border-[var(--brand-peach)]/50 rounded-xl px-4 py-3 text-sm font-semibold text-[var(--brand-maroon-dark)] shadow-sm">
                    10+ Peer-Reviewed Publications
                  </div>
                  <div className="bg-white/80 backdrop-blur border border-[var(--brand-peach)]/50 rounded-xl px-4 py-3 text-sm font-semibold text-[var(--brand-maroon-dark)] shadow-sm">
                    Global Capacity Building
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                <Link 
                  href="/academic" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-[var(--brand-maroon)] hover:bg-[var(--brand-maroon-dark)] text-white font-bold text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-xl shadow-[var(--brand-maroon)]/20 hover:scale-105 group text-center"
                >
                  <span>Explore Academic Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
