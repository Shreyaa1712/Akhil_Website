import Link from "next/link";
import AnimatedStat from "@/components/AnimatedStat";
import AcademicPublications from "@/components/AcademicPublications";

export const dynamic = "force-static";

const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

export const metadata = {
  title: "Academics | AR Legal",
  description: "Dr. Akhil Raina's academic endeavours, teaching at KU Leuven & ELPO Athens, research, and selected publications in international trade law.",
};

const publications = [
  {
    id: 1,
    title: "Evolution of EU Trade Law through the Prism of Competence",
    journal: "Journal of World Trade",
    year: "2019",
    coAuthors: "with M. Ovadek",
    type: "Journal Article",
    shortView: "A data-driven study of EU trade law using a dataset of over 6,000 legal acts, revealing that expanding EU trade competence has not led to a corresponding increase in trade legislation."
  },
  {
    id: 2,
    title: "What is a Safeguard Measure under WTO Law?",
    journal: "Trade Law & Development",
    year: "2018",
    coAuthors: null,
    type: "Journal Article",
    shortView: "A clarifying analysis of safeguard measures under WTO law, addressing questions that have resurfaced amid US-China trade tensions."
  },
  {
    id: 3,
    title: "Good Faith in WTO Dispute Settlement",
    journal: "Global Trade and Customs Journal",
    year: "2016",
    coAuthors: null,
    type: "Journal Article",
    shortView: "An analysis of how good faith principles shape the authority and credibility of the WTO's dispute settlement system."
  },
  {
    id: 4,
    title: "AB Deadlock - What It Is, Why It's a Problem, and What to Do About It",
    journal: "Global Trade and Customs Journal",
    year: "2018",
    coAuthors: null,
    type: "Journal Article",
    shortView: "An examination of the US blockade on WTO Appellate Body appointments and a proposed path forward for global trade dispute resolution."
  },
  {
    id: 5,
    title: "Legal Problems with Data Localization Requirements",
    journal: "Global Trade and Customs Journal",
    year: "2020",
    coAuthors: "with S. Hernández Serrano",
    type: "Journal Article",
    shortView: "A legal analysis of Russia's data localization laws, concluding they violate WTO market access obligations with no valid justification under existing exceptions."
  },
  {
    id: 6,
    title: "Benefit Analysis in EU-CVDs on Biodiesel (Indonesia)",
    journal: "Indian Journal of International Economic Law",
    year: "2026",
    coAuthors: "with P. Mavroidis and Neeraj RS",
    type: "Journal Article",
    shortView: "A legal analysis of the WTO dispute EU - CVDs on Biodiesel (Indonesia), focusing on whether export levies paid by Indonesian biodiesel producers should have been considered when assessing the benefit received from government grants."
  },
  {
    id: 7,
    title: "European Union",
    journal: "International Trade Law Review (LBR)",
    year: "2022–2024",
    coAuthors: "with N. Kuplewatzky",
    type: "Book Chapter / Review",
    shortView: "This chapter examines the EU’s role in global economic governance, particularly its engagement with institutions such as the WTO, G7, G20, IMF and World Bank. It highlights that although the EU strongly promotes multilateralism, its influence is weakened by the absence of a clear and coordinated strategy with its Member States."
  }
];

export default function AcademicPage() {
  return (
    <div className="w-full bg-[var(--brand-light)] text-[var(--brand-maroon-dark)] pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-4 md:py-5 bg-gradient-to-b from-[var(--brand-peach)]/30 to-[var(--brand-light)] border-b border-[var(--brand-peach)]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-[var(--brand-maroon-dark)] tracking-tight mb-2">
              Academics
            </h1>
            <p className="text-lg md:text-xl text-[var(--brand-maroon-light)] font-light leading-[1.15]">
              Teaching, research, and publication - seamlessly integrated with legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section: Overview & Selected Publications */}
      <section id="academic-section-top" className="max-w-7xl mx-auto px-6 pt-6 pb-12 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Side: Main Statement & Stats */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50">
            <div>
              <div className="flex items-center gap-3 text-[var(--brand-maroon)] font-bold text-sm uppercase tracking-wider mb-4">
                <span>Dr. Akhil Raina's Academic Work</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--brand-maroon-dark)] mb-6 leading-snug">
                Advancing trade law discourse through rigor, research, and global education.
              </h2>
              <p className="text-base md:text-lg text-[var(--brand-maroon-light)] leading-relaxed mb-6">
                Dr. Raina's academic work runs alongside his legal practice. He teaches at <strong className="text-[var(--brand-maroon-dark)]">KU Leuven</strong> and <strong className="text-[var(--brand-maroon-dark)]">ELPO Athens</strong> and has previously taught at the <strong className="text-[var(--brand-maroon-dark)]">World Trade Institute (University of Bern)</strong>.
              </p>
              <p className="text-base md:text-lg text-[var(--brand-maroon-light)] leading-relaxed mb-8">
                He supervises master's dissertations and regularly publishes with leading academic presses. He teaches university students and trains government officials across <strong className="text-[var(--brand-maroon-dark)]">Europe, Asia, Africa, and South America</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--brand-peach)]/40">
              <AnimatedStat value={4} label="Continents Trained" />
              <AnimatedStat value={10} suffix="+" label="Major Publications" />
              <AnimatedStat value={3} label="Global Institutions" />
            </div>
          </div>

          {/* Right Side: Selected Publications with Timeline and More/Less Expander */}
          <div className="lg:col-span-7">
            <AcademicPublications publications={publications} initialCount={2} />
          </div>
        </div>
      </section>
    </div>
  );
}
