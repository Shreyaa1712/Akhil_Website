import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AR Legal",
  description: "Learn about AR Legal and Dr. Raina. We provide specialist expertise in international trade law.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      {/* Hero Section */}
      <section className="relative w-full px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-6xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            About Us
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
            A boutique practice, dedicated to <br className="hidden md:block" /> 
            <span className="text-[var(--brand-maroon)]">international trade.</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20 -mt-10">
        
        {/* Founder Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-[var(--brand-maroon-dark)] border-b-2 border-[var(--brand-peach)] pb-4">Dr. Akhil Raina</h2>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[var(--brand-maroon)]/5 flex flex-col md:flex-row items-start gap-12 border border-[var(--brand-peach)]/50">
            <div className="w-full md:w-5/12 flex-shrink-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-[var(--brand-maroon)] rounded-2xl transform translate-x-3 translate-y-3 -z-10 opacity-20"></div>
                <img src="/images/dr-raina.png" alt="Dr. Akhil Raina" className="w-full h-auto rounded-2xl object-cover" />
              </div>
              <div className="mt-6 text-center">
                <span className="font-bold uppercase tracking-widest text-xs text-[var(--brand-maroon-light)]">Founder</span>
              </div>
            </div>
            
            <div className="w-full md:w-7/12 flex flex-col">
              <p className="text-2xl font-bold mb-4 text-[var(--brand-maroon-dark)] leading-tight">Counsel to governments and industry.</p>
              <p className="text-lg leading-relaxed mb-8 text-[var(--brand-maroon-light)]">
                Licensed to practice in India and registered at the Brussels Bar. More than a decade of experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Core Expertise</h3>
                  <ul className="text-[var(--brand-maroon-light)] space-y-2">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> WTO Litigation</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Trade Defence</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Customs</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)]"></span> Trade-related ESG</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-4 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Education</h3>
                  <ul className="text-[var(--brand-maroon-light)] space-y-2">
                    <li><strong className="text-[var(--brand-maroon-dark)]">PhD</strong> (Belgium; Marie Curie Fellow)</li>
                    <li><strong className="text-[var(--brand-maroon-dark)]">LLM</strong> (Spain; ELSA Scholar)</li>
                    <li><strong className="text-[var(--brand-maroon-dark)]">BSc, LLB</strong> (India; Trade & Inv. Law)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold mb-3 uppercase tracking-widest text-[var(--brand-maroon)] border-b border-[var(--brand-peach)] pb-2">Academia</h3>
                <p className="text-sm leading-relaxed text-[var(--brand-maroon-light)]">
                  Dr. Raina's academic endeavours run alongside his legal work as an integrated part of the practice. Published by Oxford & Cambridge. He teaches in Belgium (KU Leuven), Switzerland (World Trade Institute), Greece (ELPO Athens), and India. He supervises master's dissertations and trains students and government officials across Europe, Asia, Africa, and South America.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="mb-20">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--brand-maroon-light)] font-medium">
            <p>
              AR Legal is a Brussels and New Delhi-based boutique law practice dedicated to international trade. The practice advises governments and multinational companies on the full range of trade law and policy – whether in dispute settlement proceedings before the WTO, in trade remedy investigations before authorities in Europe and Asia, or in navigating an expanding body of trade-related regulatory compliance obligations, as well as complex customs procedures and import controls.
            </p>
            <p>
              Our work spans the full life cycle of a trade matter. In disputes, we assist governments from the development of strategy to consultations and panel proceedings, and onwards to litigation and implementation. For industry, we advise on the interpretation of new regulations and compliance, and – where the mandate requires – on advocacy for legislative change and/or legal challenges to those rules at the national, regional and international level. Few practices cover this spectrum end-to-end.
            </p>
            <p>
              The practice is built on a simple but intentional model: senior professionals working in a network of experts, calibrated to each specific mandate. Every matter is handled directly by Dr. Raina. For each assignment, a carefully assembled team of specialists is put together – experienced trade lawyers in the relevant jurisdictions, economists and quantitative analysts where the matter requires it, and policy and subject-matter experts where depth in a particular sector or regulatory framework is required.
            </p>
            <p>
              This approach offers clients something that larger, more generalist practices cannot easily replicate: dedicated senior-level attention for every matter, combined with a breadth of expertise and jurisdictional reach that modern, complex, international trade necessitates. Our work covers global (WTO) and regional (FTA) rules, and in particular, authorities in the EU (DG Trade), the UK (TRA), India (DGTR), as well as authorities in the US, Canada, China, and across Asia and Latin America.
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-[var(--brand-maroon-dark)] border-b-2 border-[var(--brand-peach)] pb-4">Selected Publications</h2>
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
              ].map((pub, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--brand-peach-dark)]"></div>
                  </div>
                  <div>
                    <strong className="text-[var(--brand-maroon-dark)] block mb-1">{pub.title}</strong>
                    <span className="text-sm">{pub.source}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
      </div>
    </div>
  );
}
