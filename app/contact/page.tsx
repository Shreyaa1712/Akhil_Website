import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AR Legal",
  description: "Contact AR Legal. Offices in Brussels and New Delhi.",
};

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-[calc(100vh-80px)] text-[var(--brand-maroon-dark)]">
      
      {/* Hero Section */}
      <section className="relative w-full px-6 py-16 md:py-24 flex flex-col items-center text-center overflow-hidden flex-grow">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach-dark)]/30 via-[var(--brand-peach)]/20 to-[var(--brand-light)] -z-10" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--brand-peach-dark)] rounded-full filter blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--brand-peach)] rounded-full filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-6xl mx-auto z-10 w-full">
<<<<<<< Updated upstream
=======
          
>>>>>>> Stashed changes
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-12 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Offices Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[var(--brand-maroon-light)]/20 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col justify-between group hover:-translate-y-2 hover:border-[var(--brand-maroon)]/40 hover:shadow-2xl hover:shadow-[var(--brand-maroon)]/10 transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-[var(--brand-maroon)]/10 rounded-2xl flex items-center justify-center mb-6 text-[var(--brand-maroon)] group-hover:scale-110 group-hover:bg-[var(--brand-maroon)] group-hover:text-[var(--brand-light)] transition-all duration-300">
                  <MapPinIcon className="w-7 h-7" />
                </div>
                <h2 className="font-serif font-bold text-xl mb-6 pb-3 border-b border-[var(--brand-maroon)]/20 text-[var(--brand-maroon-dark)] tracking-wide">
                  Offices
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--brand-maroon-light)] mb-1">Brussels</h3>
                    <p className="text-sm text-[var(--brand-maroon-dark)]/90 leading-relaxed font-medium">
                      Avenue de Tervueren 257,<br />
                      Woluwe St. Pierre, 1150 – Belgium
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--brand-maroon-light)] mb-1">New Delhi</h3>
                    <p className="text-sm text-[var(--brand-maroon-dark)]/90 leading-relaxed font-medium">
                      E-410, Greater Kailash Part 2,<br />
                      Delhi – 110048 – India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[var(--brand-maroon-light)]/20 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col justify-between group hover:-translate-y-2 hover:border-[var(--brand-maroon)]/40 hover:shadow-2xl hover:shadow-[var(--brand-maroon)]/10 transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-[var(--brand-maroon)]/10 rounded-2xl flex items-center justify-center mb-6 text-[var(--brand-maroon)] group-hover:scale-110 group-hover:bg-[var(--brand-maroon)] group-hover:text-[var(--brand-light)] transition-all duration-300">
                  <MailIcon className="w-7 h-7" />
                </div>
                <h2 className="font-serif font-bold text-xl mb-6 pb-3 border-b border-[var(--brand-maroon)]/20 text-[var(--brand-maroon-dark)] tracking-wide">
                  Email
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--brand-maroon-light)] mb-1">Counsel</h3>
                    <a
                      href="mailto:akhil@rainalegal.com"
                      className="text-sm font-semibold text-[var(--brand-maroon-dark)] hover:text-[var(--brand-maroon-light)] transition-colors break-all block"
                    >
                      akhil@rainalegal.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--brand-maroon-light)] mb-1">Assistant</h3>
                    <a
                      href="mailto:assistant@rainalegal.com"
                      className="text-sm font-semibold text-[var(--brand-maroon-dark)] hover:text-[var(--brand-maroon-light)] transition-colors break-all block"
                    >
                      assistant@rainalegal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-[var(--brand-maroon-light)]/20 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col justify-between group hover:-translate-y-2 hover:border-[var(--brand-maroon)]/40 hover:shadow-2xl hover:shadow-[var(--brand-maroon)]/10 transition-all duration-300">
              <div>
                <div className="w-14 h-14 bg-[var(--brand-maroon)]/10 rounded-2xl flex items-center justify-center mb-6 text-[var(--brand-maroon)] group-hover:scale-110 group-hover:bg-[var(--brand-maroon)] group-hover:text-[var(--brand-light)] transition-all duration-300">
                  <PhoneIcon className="w-7 h-7" />
                </div>
                <h2 className="font-serif font-bold text-xl mb-6 pb-3 border-b border-[var(--brand-maroon)]/20 text-[var(--brand-maroon-dark)] tracking-wide">
                  Phone
                </h2>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--brand-maroon-light)] mb-1">Direct Line</h3>
                  <a
                    href="tel:+32487136150"
                    className="text-lg font-semibold text-[var(--brand-maroon-dark)] hover:text-[var(--brand-maroon-light)] transition-colors block"
                  >
                    +32 487 136 150
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
