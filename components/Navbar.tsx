"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--brand-light)]/80 backdrop-blur-md border-b border-[var(--brand-peach)]/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo Section */}
        <Link href="/" className="flex items-center group">
          <img
            src="/apple-icon.png"
            alt="AR Legal Logo"
            className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-[var(--brand-maroon)]">
          {['About', 'Services', 'Work', 'Academic', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group py-2"
            >
              <span className="hover:text-[var(--brand-maroon-dark)] transition-colors">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--brand-maroon)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--brand-maroon)] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Links Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--brand-light)] border-t border-[var(--brand-peach)]/50 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full animate-in slide-in-from-top-2">
          {['About', 'Services', 'Work', 'Academic', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-base font-bold tracking-widest uppercase text-[var(--brand-maroon)] py-2 border-b border-[var(--brand-peach)]/30 hover:text-[var(--brand-maroon-dark)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
