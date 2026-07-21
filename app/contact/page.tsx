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
      <section className="relative w-full px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden flex-grow">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-4xl mx-auto z-10 w-full">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Get In Touch
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
            Contact <span className="text-[var(--brand-maroon)]">Us</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
            
            {/* Offices Card */}
            <div className="bg-white rounded-3xl p-10 border border-[var(--brand-peach)]/50 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col items-center group hover:-translate-y-2 hover:border-[var(--brand-peach)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--brand-peach)] rounded-full flex items-center justify-center mb-6 text-[var(--brand-maroon)] group-hover:scale-110 transition-transform duration-300">
                <MapPinIcon className="w-8 h-8" />
              </div>
              <h2 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-[var(--brand-peach)] w-full pb-2 text-[var(--brand-maroon-dark)]">Offices</h2>
              <div className="space-y-2 w-full">
                <p className="text-[var(--brand-maroon-light)] font-medium">Brussels</p>
                <p className="text-[var(--brand-maroon-light)] font-medium">New Delhi</p>
              </div>
            </div>
            
            {/* Email Card */}
            <a href="mailto:akhil.rilc@gmail.com" className="bg-white rounded-3xl p-10 border border-[var(--brand-peach)]/50 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col items-center group hover:-translate-y-2 hover:border-[var(--brand-peach)] hover:shadow-2xl hover:shadow-[var(--brand-peach)]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--brand-peach)] rounded-full flex items-center justify-center mb-6 text-[var(--brand-maroon)] group-hover:scale-110 transition-transform duration-300">
                <MailIcon className="w-8 h-8" />
              </div>
              <h2 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-[var(--brand-peach)] w-full pb-2 text-[var(--brand-maroon-dark)]">Email</h2>
              <div className="w-full">
                <p className="text-[var(--brand-maroon-light)] font-medium group-hover:text-[var(--brand-maroon)] transition-colors break-all">
                  akhil.rilc@gmail.com
                </p>
              </div>
            </a>
            
            {/* Phone Card */}
            <a href="tel:+32487136150" className="bg-white rounded-3xl p-10 border border-[var(--brand-peach)]/50 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col items-center group hover:-translate-y-2 hover:border-[var(--brand-peach)] hover:shadow-2xl hover:shadow-[var(--brand-peach)]/20 transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--brand-peach)] rounded-full flex items-center justify-center mb-6 text-[var(--brand-maroon)] group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-8 h-8" />
              </div>
              <h2 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-[var(--brand-peach)] w-full pb-2 text-[var(--brand-maroon-dark)]">Phone</h2>
              <div className="w-full">
                <p className="text-[var(--brand-maroon-light)] font-medium group-hover:text-[var(--brand-maroon)] transition-colors">
                  +32 487 136 150
                </p>
              </div>
            </a>
            
          </div>
        </div>
      </section>

    </div>
  );
}
