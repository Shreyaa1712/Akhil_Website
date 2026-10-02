"use client";

import Link from "next/link";
import WorldMap from "@/components/WorldMap";
import GlareHover from "@/components/GlareHover";
import FadeContent from "@/components/FadeContent";
import { motion } from "motion/react";

const animEnabled = process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS === "true";
const wideHeroText = process.env.NEXT_PUBLIC_WIDE_HERO_TEXT === "true";

const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
);

const Info = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
);

const Scale = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z" /></svg>
);

const Package = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
);

const Leaf = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
);


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">

      {/* Hero Section */}
      <section className="relative w-full px-6 py-12 md:py-16 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10" />
        <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-[var(--brand-peach-dark)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

        <div className="w-full max-w-4xl mx-auto z-10 flex flex-col items-center">

          {animEnabled ? (
            <motion.h1
              className="font-serif font-bold text-4xl sm:text-5xl md:text-7xl mb-4 tracking-tight leading-[1.1] text-[var(--brand-maroon)] text-center break-words"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Navigating <br className="hidden md:block" />
              International Trade
            </motion.h1>
          ) : (
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-7xl mb-4 tracking-tight leading-[1.1] text-[var(--brand-maroon)] text-center break-words">
              Navigating <br className="hidden md:block" />
              International Trade
            </h1>
          )}

          {/* Decorative divider below heading */}
          <span className="w-10 h-[1.5px] bg-[var(--brand-maroon)] opacity-50 block mb-8"></span>

          {/* Paragraph */}
          {animEnabled ? (
            <motion.div
              className={`w-full max-w-4xl ${wideHeroText ? 'px-4' : 'px-0'}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            >
              {wideHeroText ? (
                <p className="text-base md:text-lg mb-8 text-[#1a1a1a] leading-relaxed text-center mx-auto md:max-w-fit">
                  We advise governments, manufacturers, exporters, importers, as well as industry associations <br className="hidden md:block" />
                  on WTO law, trade remedies, customs, and regulatory compliance and emerging ESG-related requirements.
                </p>
              ) : (
                <p className="text-base md:text-lg mb-8 text-[#1a1a1a] leading-relaxed text-center mx-auto max-w-[700px]">
                  We advise governments, manufacturers, exporters, importers, as well <br className="hidden md:block" />
                  as industry associations on WTO law, trade remedies, customs, and <br className="hidden md:block" />
                  regulatory compliance and emerging ESG-related requirements.
                </p>
              )}
            </motion.div>
          ) : (
            <div className={`w-full max-w-4xl ${wideHeroText ? 'px-4' : 'px-0'}`}>
              {wideHeroText ? (
                <p className="text-base md:text-lg mb-8 text-[#1a1a1a] leading-relaxed text-center mx-auto md:max-w-fit">
                  We advise governments, manufacturers, exporters, importers, as well as industry associations <br className="hidden md:block" />
                  on WTO law, trade remedies, customs, and regulatory compliance and emerging ESG-related requirements.
                </p>
              ) : (
                <p className="text-base md:text-lg mb-8 text-[#1a1a1a] leading-relaxed text-center mx-auto max-w-[700px]">
                  We advise governments, manufacturers, exporters, importers, as well <br className="hidden md:block" />
                  as industry associations on WTO law, trade remedies, customs, and <br className="hidden md:block" />
                  regulatory compliance, including ESG-related requirements.
                </p>
              )}
            </div>
          )}

          {/* Marquee Strip */}
          {animEnabled ? (
            <motion.div
              className="w-full max-w-lg mx-auto overflow-hidden whitespace-nowrap mb-12 py-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            >
              <div className="inline-block animate-marquee w-max">
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="inline-flex items-center gap-6 mx-4 text-[10px] md:text-xs font-bold tracking-widest text-[var(--brand-maroon)] uppercase">
                    <span>WTO</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>Trade Remedies</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>Customs</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>ESG</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>Trade & Regulatory Compliance</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="w-full max-w-lg mx-auto overflow-hidden whitespace-nowrap mb-12 py-2">
              <div className="inline-block animate-marquee w-max">
                {[...Array(2)].map((_, i) => (
                  <span key={i} className="inline-flex items-center gap-6 mx-4 text-[10px] md:text-xs font-bold tracking-widest text-[var(--brand-maroon)] uppercase">
                    <span>WTO</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>Trade Remedies</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>Customs</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>ESG</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                    <span>Trade & Regulatory Compliance</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-maroon)]/30"></span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {animEnabled ? (
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.28 }}
            >
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.35}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="w-full sm:w-auto"
              >
                <Link href="/services" className={`group flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-[var(--brand-maroon)] text-[var(--brand-light)] rounded-full text-lg font-bold hover:bg-[var(--brand-maroon-dark)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}>
                  Explore Our Expertise
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlareHover>
              <FadeContent duration={1000} blur={true} delay={100} className="w-full sm:w-auto">
                <Link href="/contact" className={`flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-transparent border-2 border-[var(--brand-maroon)] text-[var(--brand-maroon)] rounded-full text-lg font-bold hover:bg-[var(--brand-maroon)]/5 transition-all duration-500`}>
                  Get in Touch
                </Link>
              </FadeContent>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.35}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="w-full sm:w-auto"
              >
                <Link href="/services" className="group flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-[var(--brand-maroon)] text-[var(--brand-light)] rounded-full text-lg font-bold hover:bg-[var(--brand-maroon-dark)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Explore Our Expertise
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlareHover>
              <FadeContent duration={1000} blur={true} delay={100} className="w-full sm:w-auto">
                <Link href="/contact" className="flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-transparent border-2 border-[var(--brand-maroon)] text-[var(--brand-maroon)] rounded-full text-lg font-bold hover:bg-[var(--brand-maroon)]/5 transition-all duration-300">
                  Get in Touch
                </Link>
              </FadeContent>
            </div>
          )}
        </div>
      </section>

      {/* Section 2: About Us Preview */}
      <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-14">
        {animEnabled ? (
          <motion.div
            className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden border border-[var(--brand-peach)]/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-peach-dark)]/20 rounded-bl-full -z-0" />

            <motion.div
              className="w-full md:w-5/12 flex-shrink-0 relative z-10"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[var(--brand-maroon)] rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 -z-10 opacity-20"></div>
                <img src="/images/dr-raina.png" alt="Dr. Akhil Raina" className="w-full h-auto rounded-2xl object-cover" />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-7/12 flex flex-col relative z-10"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            >
              <div className="mb-2 inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm">
                <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
                Managing Partner
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)] mb-6 leading-tight">Dr. Akhil Raina</h3>

              <p className="text-xl leading-relaxed mb-6 text-[var(--brand-maroon-light)] font-medium">
                Counsel to governments and industry. Licensed to practice in India and registered at the Brussels Bar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Scale className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">International Trade Disputes</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">Expert representation in complex disputes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Shield className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">Trade Defence</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">Strategic counsel for market protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Package className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">Customs & Importation</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">Tariffs, valuation & supply chain compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Leaf className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">ESG & Regulatory Advisory</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">CBAM, EUDR & sustainability policy.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`group inline-flex items-center gap-2 self-start mt-2 px-6 py-3 rounded-full bg-[var(--brand-maroon)] text-[var(--brand-light)] font-semibold text-sm tracking-wide hover:bg-[var(--brand-maroon-dark)] hover:shadow-lg hover:shadow-[var(--brand-maroon)]/25 hover:-translate-y-0.5 ${animEnabled ? "transition-all duration-500" : "transition-all duration-300"}`}
              >
                Read Full Profile
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--brand-light)]/15 group-hover:bg-[var(--brand-light)]/25 transition-colors duration-300">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden border border-[var(--brand-peach)]/50">
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
                Managing Partner
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)] mb-6 leading-tight">Dr. Akhil Raina</h3>

              <p className="text-xl leading-relaxed mb-6 text-[var(--brand-maroon-light)] font-medium">
                Counsel to governments and industry. Licensed to practice in India and registered at the Brussels Bar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Scale className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">International Trade Disputes</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">Expert representation in complex disputes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Shield className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">Trade Defence</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">Strategic counsel for market protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Package className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">Customs & Importation</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">Tariffs, valuation & supply chain compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[var(--brand-peach)] p-2 rounded-full text-[var(--brand-maroon)] flex-shrink-0">
                    <Leaf className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-maroon-dark)]">ESG & Regulatory Advisory</h4>
                    <p className="text-sm text-[var(--brand-maroon-light)]">CBAM, EUDR & sustainability policy.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 self-start mt-2 px-6 py-3 rounded-full bg-[var(--brand-maroon)] text-[var(--brand-light)] font-semibold text-sm tracking-wide hover:bg-[var(--brand-maroon-dark)] hover:shadow-lg hover:shadow-[var(--brand-maroon)]/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Read Full Profile
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--brand-light)]/15 group-hover:bg-[var(--brand-light)]/25 transition-colors duration-300">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Section 3: Our Services Preview */}
      <section className="w-full bg-[var(--brand-maroon-dark)] text-[var(--brand-light)] py-24 mt-10 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {animEnabled ? (
            <motion.div
              className="flex flex-col items-center text-center mb-16 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 text-[var(--brand-peach)] font-bold tracking-widest uppercase text-sm">
                <span className="w-8 h-[2px] bg-[var(--brand-peach)]"></span>
                What We Do
                <span className="w-8 h-[2px] bg-[var(--brand-peach)]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif">Our Services</h2>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 text-[var(--brand-peach)] font-bold tracking-widest uppercase text-sm">
                <span className="w-8 h-[2px] bg-[var(--brand-peach)]"></span>
                What We Do
                <span className="w-8 h-[2px] bg-[var(--brand-peach)]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif">Our Services</h2>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { id: '01', title: 'WTO Dispute Settlement', full: 'Representation in complex disputes.', image: '/images/wto-dispute.png', icon: '/images/icon-itd.png', slug: 'wto-dispute-settlement', details: 'Advising and representing governments in complex WTO disputes at the State-to-State level.' },
              { id: '02', title: 'Trade Defence', full: 'Strategic counsel for protection of market access.', image: '/images/trade-defence.png', icon: '/images/icon-td.png', slug: 'trade-defence', details: 'Handling anti-dumping, anti-subsidy and safeguard investigations across their full life-cycle, acting for both governments and industry.' },
              { id: '03', title: 'Customs, Sanctions and Export Controls', full: 'Tariffs, valuation & supply chain compliance.', image: '/images/customs.png', icon: '/images/icon-ci.png', slug: 'customs-and-importation', details: 'Advising companies on importation issues, tariff classification, valuation, rules of origin, sanctions, export controls, and supply chain risks.' },
              { id: '04', title: 'ESG & Regulatory Advisory', full: 'CBAM, EUDR & similar sustainability policy.', image: '/images/esg-regulatory.png', icon: '/images/icon-esg.png', slug: 'esg-and-regulatory-advisory', details: 'Advising companies and governments on sustainability and ESG frameworks, including CBAM, EUDR, CSDDD, forced labor laws, and supply chain due diligence.' },
            ].map((service, index) => (
              animEnabled ? (
                <motion.div
                  key={service.id}
                  className="group w-full h-[320px] [perspective:1000px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] block"
                  >
                    {/* Front of Card */}
                    {process.env.NEXT_PUBLIC_USE_IMAGES === "true" ? (
                      <div className="absolute inset-0 w-full h-full bg-[var(--brand-maroon)] border border-white/10 rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(0deg)] z-10 overflow-hidden">
                        <div className="absolute inset-0 w-full h-full">
                          <img src={service.image} alt={service.full} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-maroon)] via-[var(--brand-maroon)]/80 to-[var(--brand-maroon)]/30"></div>
                        </div>
                        <div className="w-full h-full p-8 flex flex-col justify-end items-center text-center relative z-10">
                          <h3 className="text-4xl font-bold font-serif mb-2 text-white drop-shadow-md">{service.title}</h3>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-[var(--brand-maroon)] border border-white/10 rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(0deg)] z-10">
                        <div className="w-full h-full p-8 flex flex-col justify-between items-center text-center">
                          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--brand-peach)] shadow-[0_0_12px_var(--brand-peach)] group-hover:w-full transition-all duration-500 ease-out"></div>
                          </div>
                          <div className="flex flex-col items-center z-10 w-full pt-4">
                            <div className="h-20 w-20 bg-[var(--brand-peach)] rounded-2xl flex items-center justify-center mb-6 p-4 shadow-xl">
                              <img src={service.icon} alt={service.title} className="w-full h-full object-contain filter drop-shadow-md" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(43%) saturate(5152%) hue-rotate(342deg) brightness(85%) contrast(100%)' }} />
                            </div>
                            <h3 className="text-2xl font-bold font-serif mb-2 text-[var(--brand-peach)]">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Back of Card */}
                    <div className="absolute inset-0 w-full h-full bg-[var(--brand-maroon)] border border-[var(--brand-peach)]/60 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] shadow-2xl shadow-[var(--brand-peach)]/20 z-0">
                      <div className="w-full h-full p-8 flex flex-col justify-between items-center text-center">
                        <div className="flex flex-col items-center justify-center h-full z-10 w-full gap-4">
                          <p className="text-sm text-white/90 leading-relaxed">{service.details}</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/20 w-full flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[var(--brand-peach)] z-10">
                          <span>Explore Practice</span>
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ) : (
                <div key={service.id} className="group w-full h-[320px] [perspective:1000px]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] block"
                  >
                    {process.env.NEXT_PUBLIC_USE_IMAGES === "true" ? (
                      <div className="absolute inset-0 w-full h-full bg-[var(--brand-maroon)] border border-white/10 rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(0deg)] z-10 overflow-hidden">
                        <div className="absolute inset-0 w-full h-full">
                          <img src={service.image} alt={service.full} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-maroon)] via-[var(--brand-maroon)]/80 to-[var(--brand-maroon)]/30"></div>
                        </div>
                        <div className="w-full h-full p-8 flex flex-col justify-end items-center text-center relative z-10">
                          <h3 className="text-4xl font-bold font-serif mb-2 text-white drop-shadow-md">{service.title}</h3>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 w-full h-full bg-[var(--brand-maroon)] border border-white/10 rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(0deg)] z-10">
                        <div className="w-full h-full p-8 flex flex-col justify-between items-center text-center">
                          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[var(--brand-peach)] shadow-[0_0_12px_var(--brand-peach)] group-hover:w-full transition-all duration-500 ease-out"></div>
                          </div>
                          <div className="flex flex-col items-center z-10 w-full pt-4">
                            <div className="h-20 w-20 bg-[var(--brand-peach)] rounded-2xl flex items-center justify-center mb-6 p-4 shadow-xl">
                              <img src={service.icon} alt={service.title} className="w-full h-full object-contain filter drop-shadow-md" style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(43%) saturate(5152%) hue-rotate(342deg) brightness(85%) contrast(100%)' }} />
                            </div>
                            <h3 className="text-2xl font-bold font-serif mb-2 text-[var(--brand-peach)]">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 w-full h-full bg-[var(--brand-maroon)] border border-[var(--brand-peach)]/60 rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] shadow-2xl shadow-[var(--brand-peach)]/20 z-0">
                      <div className="w-full h-full p-8 flex flex-col justify-between items-center text-center">
                        <div className="flex flex-col items-center justify-center h-full z-10 w-full gap-4">
                          <p className="text-sm text-white/90 leading-relaxed">{service.details}</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-white/20 w-full flex items-center justify-center text-xs font-bold uppercase tracking-wider text-[var(--brand-peach)] z-10">
                          <span>Explore Practice</span>
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            ))}

          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className={`inline-flex items-center justify-center px-8 py-4 bg-[var(--brand-peach)] text-[var(--brand-maroon-dark)] rounded-full text-lg font-bold hover:bg-white hover:shadow-xl hover:scale-105 ${animEnabled ? "transition-all duration-500 hover:shadow-md" : "transition-all duration-300"}`}
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Representative Matters Preview */}
      <section className="w-full  sm:w-[70vw] mx-auto py-10 md:py-16 relative overflow-hidden">
        {animEnabled ? (
          <motion.div
            className="relative z-[41] flex flex-col text-center items-center mb-10 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
              Global Reach
              <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)]">Representative Matters</h2>
          </motion.div>
        ) : (
          <div className="relative z-[41] flex flex-col text-center items-center mb-10 gap-4">
            <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
              Global Reach
              <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon-dark)]">Representative Matters</h2>
          </div>
        )}

        <div className="w-full mx-auto flex justify-center items-center px-3 pb-3 sm:px-6 sm:pb-6 md:px-8 md:pb-8 pt-0">
          <WorldMap
            actionLink={{
              href: "/work",
              label: "Track Record",
            }}
          />
        </div>
      </section>

      {/* Section 5: The Way We Work */}
      <section className="w-full bg-[var(--brand-maroon-dark)] text-[var(--brand-light)] py-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-peach)]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {animEnabled ? (
            <motion.div
              className="flex flex-col items-center text-center mb-12 md:mb-20 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">The Way We Work</h2>
              <p className="text-lg text-white/80 max-w-2xl">A structured, strategic approach to delivering excellence in every mandate.</p>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center text-center mb-12 md:mb-20 gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">The Way We Work</h2>
              <p className="text-lg text-white/80 max-w-2xl">A structured, strategic approach to delivering excellence in every mandate.</p>
            </div>
          )}

          <div className="relative mt-12 md:mt-24 w-full">
            {/* Animated Central Horizontal Line (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-1 bg-white/10 transform -translate-y-1/2 z-0 rounded-full overflow-hidden">
              {animEnabled && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--brand-peach)]/10 via-[var(--brand-peach)] to-[var(--brand-peach)] rounded-full origin-left"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              )}
            </div>

            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-white/10 via-[var(--brand-peach)]/30 to-transparent z-0 rounded-full"></div>

            <div className="flex flex-col md:grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {[
                { step: '1', title: 'Consultation & Confidentiality', desc: 'We discuss your case and consult you with the latest laws ensuring your privacy and confidentiality.' },
                { step: '2', title: 'Evaluation & Strategy', desc: 'Our team analyzes your case from every corner and customizes a tailored strategy to maximize success.' },
                { step: '3', title: 'Strong Representation', desc: 'We vehemently advocate for your rights and provide well-timed services without any delay.' },
                { step: '4', title: 'Resolution & Support', desc: 'We achieve the best outcome and provide ongoing assistance throughout the legal journey and thereafter.' },
              ].map((item, index) => {
                const isTop = index % 2 === 0;
                return animEnabled ? (
                  <motion.div
                    key={index}
                    className="relative flex items-center md:block group md:min-h-[450px] w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
                  >
                    {/* Icon */}
                    <div className="absolute left-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--brand-maroon)] flex items-center justify-center shadow-xl shadow-[var(--brand-peach)]/5 border-4 border-white/10 group-hover:border-[var(--brand-peach)] group-hover:scale-110 transition-all duration-500 z-20">
                      <span className="text-xl md:text-2xl font-black text-[var(--brand-peach)]">{item.step}</span>
                    </div>

                    {/* Zig-Zag Vertical Connector (Desktop only) */}
                    <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/10 z-10 ${isTop ? 'bottom-1/2 h-[3.5rem]' : 'top-1/2 h-[3.5rem]'}`}>
                      <motion.div
                        className={`w-full h-full bg-[var(--brand-peach)] origin-${isTop ? 'bottom' : 'top'}`}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      />
                    </div>

                    {/* Content Box */}
                    <div className={`w-full bg-[var(--brand-maroon)] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 group-hover:bg-[var(--brand-maroon)]/80 group-hover:border-[var(--brand-peach)]/50 group-hover:shadow-xl transition-all duration-300 z-20 relative ml-24 md:ml-0 md:absolute md:left-0 md:right-0 ${isTop ? 'md:bottom-[calc(50%+3.5rem)]' : 'md:top-[calc(50%+3.5rem)]'} max-w-[calc(100%-7rem)] md:max-w-none`}>
                      <h3 className="font-bold text-lg mb-3 text-white group-hover:text-[var(--brand-peach)] transition-colors duration-500 md:text-center font-serif">{item.title}</h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-center">{item.desc}</p>
                    </div>

                  </motion.div>
                ) : (
                  <div key={index} className="relative flex items-center md:block group md:min-h-[450px] w-full">
                    {/* Icon */}
                    <div className="absolute left-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--brand-maroon)] flex items-center justify-center shadow-xl shadow-[var(--brand-peach)]/5 border-4 border-white/10 group-hover:border-[var(--brand-peach)] group-hover:scale-110 transition-all duration-300 z-20">
                      <span className="text-xl md:text-2xl font-black text-[var(--brand-peach)]">{item.step}</span>
                    </div>

                    {/* Zig-Zag Vertical Connector (Desktop only) */}
                    <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/10 z-10 ${isTop ? 'bottom-1/2 h-[3.5rem]' : 'top-1/2 h-[3.5rem]'}`}></div>

                    {/* Content Box */}
                    <div className={`w-full bg-[var(--brand-maroon)] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 group-hover:bg-[var(--brand-maroon)]/80 group-hover:border-[var(--brand-peach)]/50 group-hover:shadow-xl transition-all duration-300 z-20 relative ml-24 md:ml-0 md:absolute md:left-0 md:right-0 ${isTop ? 'md:bottom-[calc(50%+3.5rem)]' : 'md:top-[calc(50%+3.5rem)]'} max-w-[calc(100%-7rem)] md:max-w-none`}>
                      <h3 className="font-bold text-lg mb-3 text-white group-hover:text-[var(--brand-peach)] transition-colors md:text-center font-serif">{item.title}</h3>
                      <p className="text-white/80 leading-relaxed text-sm md:text-center">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Academic */}
      <section className="w-full bg-white py-24 border-t border-[var(--brand-peach)]/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {animEnabled ? (
            <motion.div
              className="bg-gradient-to-br from-[var(--brand-peach)]/20 via-white to-[var(--brand-peach)]/10 rounded-3xl p-8 md:p-14 border border-[var(--brand-peach)]/60 shadow-xl shadow-[var(--brand-maroon)]/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-maroon)]/10 text-[var(--brand-maroon)] text-xs font-bold uppercase tracking-widest rounded-full w-fit">
                    Practice-Integrated Research & Teaching
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold font-serif text-[var(--brand-maroon-dark)] leading-tight">
                    Academics
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
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-[var(--brand-maroon)] hover:bg-[var(--brand-maroon-dark)] text-white font-bold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-[var(--brand-maroon)]/20 hover:scale-105 group text-center ${animEnabled ? "transition-all duration-500 hover:shadow-md" : "transition-all duration-300"}`}
                  >
                    <span>Explore Academic Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ) : (
            <div className="bg-gradient-to-br from-[var(--brand-peach)]/20 via-white to-[var(--brand-peach)]/10 rounded-3xl p-8 md:p-14 border border-[var(--brand-peach)]/60 shadow-xl shadow-[var(--brand-maroon)]/5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--brand-maroon)]/10 text-[var(--brand-maroon)] text-xs font-bold uppercase tracking-widest rounded-full w-fit">
                    Practice-Integrated Research & Teaching
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold font-serif text-[var(--brand-maroon-dark)] leading-tight">
                    Academics
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
          )}
        </div>
      </section>

    </div>
  );
}
