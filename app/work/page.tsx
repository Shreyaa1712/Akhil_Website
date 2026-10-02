"use client";

import WorldMap from "@/components/WorldMap";
import WorkTabs from "@/components/WorkTabs";
import { motion } from "motion/react";

const animEnabled = process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS === "true";

export default function WorkPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">

      {/* Hero Section */}
      <section className="relative w-full px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-6xl mx-auto z-10">
          {animEnabled ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
                Representative Matters
              </h1>
            </motion.div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
                <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
                Our Work
                <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
                Representative Matters
              </h1>
            </div>
          )}
          {animEnabled ? (
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--brand-maroon-light)] leading-relaxed font-medium"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
            >
              Selected mandates acting as counsel for governments and industry across various international trade and regulatory domains.
            </motion.p>
          ) : (
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--brand-maroon-light)] leading-relaxed font-medium">
              Selected mandates acting as counsel for governments and industry across various international trade and regulatory domains.
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24 -mt-10 w-full">

        {/* Map Section */}
        <div className="mb-20 w-full flex justify-center items-center px-3 sm:px-6 md:px-8">
          <WorldMap />
        </div>

        {/* Matter Sections */}
        <WorkTabs />
      </div>
    </div>
  );
}
