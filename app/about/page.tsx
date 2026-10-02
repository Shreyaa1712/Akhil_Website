"use client";

import { motion } from "motion/react";

const animEnabled = process.env.NEXT_PUBLIC_ENABLE_ANIMATIONS === "true";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">

      {/* Hero Section */}
      <section className="relative w-full px-6 py-8 md:py-12 flex flex-col items-center text-center overflow-hidden">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
                A Boutique Practice, Dedicated To <br className="hidden md:block" />
                <span className="text-[var(--brand-maroon)]">International Trade</span>
              </h1>
            </motion.div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-3">
                <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
                About Us
                <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
                A Boutique Practice, Dedicated To <br className="hidden md:block" />
                <span className="text-[var(--brand-maroon)]">International Trade</span>
              </h1>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">

        {/* Founder Section */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--brand-maroon-dark)] border-b-2 border-[var(--brand-peach)] pb-3">Dr. Akhil Raina</h2>

          {animEnabled ? (
            <motion.div
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col md:flex-row items-start gap-8 md:gap-10 border border-[var(--brand-peach)]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="w-full md:w-5/12 flex-shrink-0"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-[var(--brand-maroon)] rounded-2xl transform translate-x-3 translate-y-3 -z-10 opacity-20"></div>
                  <img src="/images/akhil.jpeg" alt="Dr. Akhil Raina" className="w-full aspect-[3/4] rounded-2xl object-cover object-bottom" />
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-7/12 flex flex-col"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              >
                <p className="text-2xl font-bold mb-4 text-[var(--brand-maroon-dark)] leading-tight">Counsel to governments and industry.</p>
                <p className="text-lg leading-relaxed mb-8 text-[var(--brand-maroon-light)]">
                  Licensed to practice in India and registered at the Brussels Bar. More than a decade of experience litigating trade disputes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Core Expertise</h3>
                    <ul className="text-[var(--brand-maroon-light)] space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> WTO Law</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Trade Defence</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Customs</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Trade-related ESG</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Education</h3>
                    <ul className="text-[var(--brand-maroon-light)] space-y-2">
                      <li><span className="text-[var(--brand-maroon-dark)]">PhD</span> (Belgium; Marie Curie Fellow)</li>
                      <li><span className="text-[var(--brand-maroon-dark)]">LLM</span> (Spain; ELSA Scholar)</li>
                      <li><span className="text-[var(--brand-maroon-dark)]">BSc, LLB</span> (India; Trade & Inv. Law Honours)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-3 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Academia</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-maroon-light)]">
                    Dr. Raina&apos;s academic work runs alongside his legal practice and forms an integral part of his professional work. His research has been published by Oxford University Press and Cambridge University Press, and he has taught at institutions including KU Leuven in Belgium and the World Trade Institute in Switzerland, with teaching engagements in Greece and India as well. He has also trained students and government officials across Europe, Asia, Africa, and South America.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col md:flex-row items-start gap-8 md:gap-10 border border-[var(--brand-peach)]/50">
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[var(--brand-maroon)] rounded-2xl transform translate-x-3 translate-y-3 -z-10 opacity-20"></div>
                  <img src="/images/akhil.jpeg" alt="Dr. Akhil Raina" className="w-full aspect-[3/4] rounded-2xl object-cover object-bottom" />
                </div>
              </div>

              <div className="w-full md:w-7/12 flex flex-col">
                <p className="text-2xl font-bold mb-4 text-[var(--brand-maroon-dark)] leading-tight">Counsel to governments and industry.</p>
                <p className="text-lg leading-relaxed mb-8 text-[var(--brand-maroon-light)]">
                  Licensed to practice in India and registered at the Brussels Bar. More than a decade of experience litigating trade disputes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Core Expertise</h3>
                    <ul className="text-[var(--brand-maroon-light)] space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> WTO Law</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Trade Defence</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Customs</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Trade-related ESG</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Education</h3>
                    <ul className="text-[var(--brand-maroon-light)] space-y-2">
                      <li><span className="text-[var(--brand-maroon-dark)]">PhD</span> (Belgium; Marie Curie Fellow)</li>
                      <li><span className="text-[var(--brand-maroon-dark)]">LLM</span> (Spain; ELSA Scholar)</li>
                      <li><span className="text-[var(--brand-maroon-dark)]">BSc, LLB</span> (India; Trade & Inv. Law Honours)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold mb-3 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Academia</h3>
                  <p className="text-sm leading-relaxed text-[var(--brand-maroon-light)]">
                    Dr. Raina&apos;s academic work runs alongside his legal practice and forms an integral part of his professional work. His research has been published by Oxford University Press and Cambridge University Press, and he has taught at institutions including KU Leuven in Belgium and the World Trade Institute in Switzerland, with teaching engagements in Greece and India as well. He has also trained students and government officials across Europe, Asia, Africa, and South America.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Intro Section */}
        <section className="mb-20">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--brand-maroon-light)] font-medium text-justify">
            {[
              "AR Legal is a Brussels and New Delhi-based boutique law practice dedicated to international trade. Our practice advises governments and multinational companies on the full range of trade law and policy – in WTO disputes, trade remedy investigations and customs matters, as well as in the expanding body of trade-related regulatory compliance obligations.",
              "Our practice is built on a simple but deliberate model: senior professionals working in a network of experts, with teams calibrated to each specific mandate. Every matter is handled directly by Dr. Raina. For each assignment, a carefully assembled group of specialists is put together – experienced trade lawyers in the relevant jurisdictions, economists and quantitative analysts where required, and policy or subject-matter experts where depth in a particular sector or regulatory framework is needed.",
              "Our work covers global (WTO) and regional (FTA) rules; and we work with authorities in the EU (DG Trade), the UK (TRA), India (DGTR), as well as those in the US, Canada, China, and across Asia and Latin America.",
            ].map((text, index) =>
              animEnabled ? (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  {text}
                </motion.p>
              ) : (
                <p key={index}>{text}</p>
              )
            )}
          </div>
        </section>

        {/* Publications Section */}
        {/* <section>
          {animEnabled ? (
            <motion.h2
              className="text-3xl font-bold mb-10 text-[var(--brand-maroon-dark)] border-b-2 border-[var(--brand-peach)] pb-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Selected Publications
            </motion.h2>
          ) : (
            <h2 className="text-3xl font-bold mb-10 text-[var(--brand-maroon-dark)] border-b-2 border-[var(--brand-peach)] pb-4">Selected Publications</h2>
          )}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50">
            <ul className="space-y-6 text-[var(--brand-maroon-light)]">
              {[
                { title: "Benefit Analysis in EU-CVDs on Biodiesel (Indonesia)", source: "Indian Journal of International Economic Law (2026)" },
                { title: "European Union", source: "International Trade Law Review (LBR, 2022-2024)" },
                { title: "EU and Global Economic Governance", source: "60 Years of European Integration (Hart Publishing, 2020)" },
                { title: "Is the Rules-Based Multilateral Trade Order in Decline?", source: "Cambridge International Law Journal (2021)" },
                { title: "Compliance with WTO Rulings and MAS", source: "Presentation at the 8th Biennial Conference, Asian Society of International Law (2021)" },
                { title: "Evolution of EU Trade Law through the Prism of Competence", source: "Journal of World Trade (2019)" },
                { title: "What is a Safeguard Measure under WTO Law?", source: "Trade Law & Development (2018)" },
                { title: "Good Faith in WTO Dispute Settlement", source: "Global Trade and Customs Journal (2016)" },
                { title: "Legal Problems with Data Localization Requirements", source: "Global Trade and Customs Journal (2020)" },
              ].map((pub, idx) =>
                animEnabled ? (
                  <motion.li
                    key={idx}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.07 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-peach-dark)]"></div>
                    </div>
                    <div>
                      <strong className="text-[var(--brand-maroon-dark)] block mb-1">{pub.title}</strong>
                      <span className="text-sm">{pub.source}</span>
                    </div>
                  </motion.li>
                ) : (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-peach-dark)]"></div>
                    </div>
                    <div>
                      <strong className="text-[var(--brand-maroon-dark)] block mb-1">{pub.title}</strong>
                      <span className="text-sm">{pub.source}</span>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>
        </section> */}

      </div>
    </div>
  );
}
