"use client";

import Link from "next/link";
import { motion } from "motion/react";

const animEnabled = process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS === "true";

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-peach)]/10 border-t border-[var(--brand-peach)]/50 mt-20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8 z-10 relative">

        {/* Centered Logo */}
        {animEnabled ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="inline-block group">
              <img
                src="/apple-icon.png"
                alt="AR Legal Logo"
                className="h-32 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>
        ) : (
          <Link href="/" className="inline-block group">
            <img
              src="/apple-icon.png"
              alt="AR Legal Logo"
              className="h-32 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        )}

        {/* Tagline / Address */}
        {animEnabled ? (
          <motion.div
            className="max-w-md mx-auto -mt-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-[var(--brand-maroon-light)] text-sm leading-relaxed font-medium">
              A boutique practice dedicated to international trade law and regulatory policy. Based in Brussels and New Delhi.
            </p>
          </motion.div>
        ) : (
          <div className="max-w-md mx-auto -mt-4">
            <p className="text-[var(--brand-maroon-light)] text-sm leading-relaxed font-medium">
              A boutique practice dedicated to international trade law and regulatory policy. Based in Brussels and New Delhi.
            </p>
          </div>
        )}

        {/* Navigation Links */}
        {animEnabled ? (
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-bold tracking-widest uppercase text-[var(--brand-maroon)] mt-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Link href="/about" className={`hover:text-[var(--brand-maroon-dark)] ${animEnabled ? "transition-colors duration-500" : "transition-colors"}`}>About</Link>
            <Link href="/services" className={`hover:text-[var(--brand-maroon-dark)] ${animEnabled ? "transition-colors duration-500" : "transition-colors"}`}>Services</Link>
            <Link href="/work" className={`hover:text-[var(--brand-maroon-dark)] ${animEnabled ? "transition-colors duration-500" : "transition-colors"}`}>Work</Link>
            <Link href="/academic" className={`hover:text-[var(--brand-maroon-dark)] ${animEnabled ? "transition-colors duration-500" : "transition-colors"}`}>Academics</Link>
            <Link href="/contact" className={`hover:text-[var(--brand-maroon-dark)] ${animEnabled ? "transition-colors duration-500" : "transition-colors"}`}>Contact</Link>
          </motion.div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-bold tracking-widest uppercase text-[var(--brand-maroon)] mt-2">
            <Link href="/about" className="hover:text-[var(--brand-maroon-dark)] transition-colors">About</Link>
            <Link href="/services" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Services</Link>
            <Link href="/work" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Work</Link>
            <Link href="/academic" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Academics</Link>
            <Link href="/contact" className="hover:text-[var(--brand-maroon-dark)] transition-colors">Contact</Link>
          </div>
        )}

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--brand-peach)] to-transparent my-4"></div>

        {/* Bottom Bar */}
        {animEnabled ? (
          <motion.div
            className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-[var(--brand-maroon-light)]/80 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} AR Legal. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-[var(--brand-maroon)] transition-colors duration-500">Privacy</Link>
                <span className="opacity-50">|</span>
                <Link href="/cookie-policy" className="hover:text-[var(--brand-maroon)] transition-colors duration-500">Cookies</Link>
              </div>
              <span className="hidden md:inline opacity-50">|</span>
              <div className="text-center">
                Website made by{" "}
                <a
                  href="https://in.linkedin.com/company/vds-sphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-maroon)] transition-colors duration-500 underline decoration-[var(--brand-maroon-light)]/50 underline-offset-4"
                >
                  VDS Sphere
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-[var(--brand-maroon-light)]/80 uppercase tracking-wider">
            <div className="text-center md:text-left">
              &copy; {new Date().getFullYear()} AR Legal. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex gap-4">
                <Link href="/privacy-policy" className="hover:text-[var(--brand-maroon)] transition-colors">Privacy</Link>
                <span className="opacity-50">|</span>
                <Link href="/cookie-policy" className="hover:text-[var(--brand-maroon)] transition-colors">Cookies</Link>
              </div>
              <span className="hidden md:inline opacity-50">|</span>
              <div className="text-center">
                Website made by{" "}
                <a
                  href="https://in.linkedin.com/company/vds-sphere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-maroon)] transition-colors underline decoration-[var(--brand-maroon-light)]/50 underline-offset-4"
                >
                  VDS Sphere
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
}
