import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-peach)]/10 border-t border-[var(--brand-peach)]/50 mt-20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8 z-10 relative">
        
        {/* Centered Logo */}
        <Link href="/" className="inline-block group">
          <img 
            src="/images/AR%20LEGAL%20Logo.jpeg" 
            alt="AR Legal Logo" 
            className="h-28 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Tagline / Address */}
        <div className="max-w-md mx-auto -mt-4">
          <p className="text-[var(--brand-maroon-light)] text-sm leading-relaxed font-medium">
            A boutique practice dedicated to international trade law, trade defence, and regulatory policy. Based in Brussels and New Delhi.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-bold tracking-widest uppercase text-[var(--brand-maroon)] mt-2">
          <Link href="/about" className="hover:text-[var(--brand-maroon-dark)] transition-colors">About</Link>
          <Link href="/services" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Services</Link>
          <Link href="/work" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Work</Link>
          <Link href="/academic" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Academic</Link>
          <Link href="/contact" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Contact</Link>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-peach)] to-transparent my-4"></div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-[var(--brand-maroon-light)]/80 uppercase tracking-wider">
          <div>
            &copy; {new Date().getFullYear()} AR Legal. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[var(--brand-maroon)] transition-colors">Privacy</Link>
            <span className="opacity-50">|</span>
            <Link href="/disclaimer" className="hover:text-[var(--brand-maroon)] transition-colors">Disclaimer</Link>
            <span className="opacity-50">|</span>
            <Link href="/cookie-policy" className="hover:text-[var(--brand-maroon)] transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
