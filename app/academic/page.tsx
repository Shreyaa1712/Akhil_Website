import Link from "next/link";

export const dynamic = "force-static";

const BookOpen = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);

const GraduationCap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const Award = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
);

const Library = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg>
);

export const metadata = {
  title: "Academic & Thought Leadership | AR Legal",
  description: "Dr. Akhil Raina's academic endeavours, teaching at KU Leuven & ELPO Athens, research, and selected publications in international trade law.",
};

const publications = [
  {
    title: "Benefit Analysis in EU-CVDs on Biodiesel (Indonesia)",
    journal: "Indian Journal of International Economic Law",
    year: "2026",
    coAuthors: "with P. Mavroidis and Neeraj RS",
    type: "Journal Article"
  },
  {
    title: "Evolution of EU Trade Law through the Prism of Competence",
    journal: "Journal of World Trade",
    year: "2019",
    coAuthors: "with M. Ovadek",
    type: "Journal Article"
  },
  {
    title: "European Union",
    journal: "International Trade Law Review (LBR)",
    year: "2022–2024",
    coAuthors: "with N. Kuplewatzky",
    type: "Book Chapter / Review"
  },
  {
    title: "EU and Global Economic Governance",
    journal: "60 Years of European Integration (Hart Publishing)",
    year: "2020",
    coAuthors: null,
    type: "Book Chapter"
  },
  {
    title: "Is the Rules-Based Multilateral Trade Order in Decline?",
    journal: "Cambridge International Law Journal",
    year: "2021",
    coAuthors: null,
    type: "Journal Article"
  },
  {
    title: "Compliance with WTO Rulings and MAS",
    journal: "Presentation at the 8th Biennial Conference, Asian Society of International Law",
    year: "2021",
    coAuthors: null,
    type: "Conference Paper"
  },
  {
    title: "What is a Safeguard Measure under WTO Law?",
    journal: "Trade Law & Development",
    year: "2018",
    coAuthors: null,
    type: "Journal Article"
  },
  {
    title: "Good Faith in WTO Dispute Settlement",
    journal: "Global Trade and Customs Journal",
    year: "2016",
    coAuthors: null,
    type: "Journal Article"
  },
  {
    title: "AB Deadlock - What It Is, Why It's a Problem, and What to Do About It",
    journal: "Global Trade and Customs Journal",
    year: "2018",
    coAuthors: null,
    type: "Journal Article"
  },
  {
    title: "Case Notes",
    journal: "Oxford Reports on International Law & Elgar Encyclopedia of Environmental Law",
    year: "2018, 2021",
    coAuthors: null,
    type: "Case Notes & Encyclopedia"
  },
  {
    title: "Legal Problems with Data Localization Requirements",
    journal: "Global Trade and Customs Journal",
    year: "2020",
    coAuthors: "with S. Hernández Serrano",
    type: "Journal Article"
  }
];

const teachingNodes = [
  {
    institution: "KU Leuven",
    role: "Faculty / Lecturer",
    desc: "Delivering specialized lectures in international trade law and economic integration."
  },
  {
    institution: "ELPO Athens",
    role: "Visiting Academic",
    desc: "Teaching advanced courses on global trade policy and regulatory frameworks."
  },
  {
    institution: "World Trade Institute (Bern)",
    role: "Former Lecturer",
    desc: "Taught international economic law and WTO dispute resolution at the University of Bern."
  }
];

export default function AcademicPage() {
  return (
    <div className="w-full bg-[var(--brand-light)] text-[var(--brand-maroon-dark)] pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-b from-[var(--brand-peach)]/30 to-[var(--brand-light)] border-b border-[var(--brand-peach)]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand-maroon)]/10 text-[var(--brand-maroon)] text-xs font-bold uppercase tracking-widest mb-6">
              <GraduationCap className="w-4 h-4" />
              Practice-Integrated Academia
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-[var(--brand-maroon-dark)] tracking-tight mb-6">
              Academic & Thought Leadership
            </h1>
            <p className="text-xl md:text-2xl text-[var(--brand-maroon-light)] font-light leading-relaxed">
              Teaching, research, and publication — seamlessly integrated with legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Overview & Teaching Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50">
            <div>
              <div className="flex items-center gap-3 text-[var(--brand-maroon)] font-bold text-sm uppercase tracking-wider mb-4">
                <BookOpen className="w-5 h-5 text-[var(--brand-maroon)]" />
                <span>Dr. Akhil Raina's Academic Work</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[var(--brand-maroon-dark)] mb-6 leading-snug">
                Advancing trade law discourse through rigor, research, and global education.
              </h2>
              <p className="text-lg text-[var(--brand-maroon-light)] leading-relaxed mb-6">
                Dr. Raina's academic endeavours run alongside his legal work as an integrated part of the practice.
                He teaches at <strong className="text-[var(--brand-maroon-dark)]">KU Leuven</strong> and <strong className="text-[var(--brand-maroon-dark)]">ELPO Athens</strong> and has previously taught at the <strong className="text-[var(--brand-maroon-dark)]">World Trade Institute (University of Bern)</strong>.
              </p>
              <p className="text-lg text-[var(--brand-maroon-light)] leading-relaxed mb-8">
                He supervises master's dissertations and regularly publishes with leading academic presses. Through his academic roles, he teaches university students and trains government officials across <strong className="text-[var(--brand-maroon-dark)]">Europe, Asia, Africa, and South America</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--brand-peach)]/40">
              <div>
                <div className="text-3xl font-serif font-bold text-[var(--brand-maroon)]">4</div>
                <div className="text-xs uppercase tracking-wider text-[var(--brand-maroon-light)] font-semibold mt-1">Continents Trained</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[var(--brand-maroon)]">10+</div>
                <div className="text-xs uppercase tracking-wider text-[var(--brand-maroon-light)] font-semibold mt-1">Major Publications</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-[var(--brand-maroon)]">3</div>
                <div className="text-xs uppercase tracking-wider text-[var(--brand-maroon-light)] font-semibold mt-1">Global Institutions</div>
              </div>
            </div>
          </div>

          {/* Academic Institutions Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[var(--brand-maroon)] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <Globe className="w-8 h-8 text-[var(--brand-peach)] mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Global Training & Supervision</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Direct engagement in capacity building for state officials, diplomats, and trade negotiators across Europe, Asia, Africa, and South America.
                </p>
              </div>
            </div>

            {teachingNodes.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-[var(--brand-peach)]/40 hover:border-[var(--brand-maroon)]/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-[var(--brand-maroon-dark)]">{item.institution}</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-[var(--brand-peach)]/40 text-[var(--brand-maroon)] rounded-full">{item.role}</span>
                </div>
                <p className="text-sm text-[var(--brand-maroon-light)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Publications Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[var(--brand-peach)]/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[var(--brand-maroon)] font-bold text-sm uppercase tracking-wider mb-3">
              <Library className="w-5 h-5" />
              <span>Scholarship</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[var(--brand-maroon-dark)]">
              Selected Publications
            </h2>
          </div>
          <p className="text-sm text-[var(--brand-maroon-light)] max-w-md">
            Peer-reviewed articles, books, chapters, and case notes in top international economic law journals and academic presses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-lg shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/40 hover:border-[var(--brand-maroon)]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[var(--brand-peach)]/30 text-[var(--brand-maroon)] rounded-full">
                    {pub.type}
                  </span>
                  <span className="text-sm font-semibold text-[var(--brand-maroon-light)]">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[var(--brand-maroon-dark)] group-hover:text-[var(--brand-maroon)] transition-colors mb-3 leading-snug">
                  "{pub.title}"
                </h3>

                <p className="text-sm font-medium text-[var(--brand-maroon)] italic mb-2">
                  {pub.journal}
                </p>
              </div>

              {pub.coAuthors && (
                <div className="pt-4 mt-4 border-t border-[var(--brand-peach)]/30 text-xs text-[var(--brand-maroon-light)] font-medium">
                  {pub.coAuthors}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Firm Practice & Closing Commitment Banner */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-gradient-to-r from-[var(--brand-maroon-dark)] to-[var(--brand-maroon)] text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-peach)] mb-4">
              <Award className="w-4 h-4" />
              <span>Our Practice & Commitment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Bridging academic excellence and practical legal execution.
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 font-light">
              AR Legal was established to help governments and businesses navigate the increasingly complex landscape of international trade law and policy.
            </p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 font-light">
              Our practice combines specialist expertise, direct partner involvement, and an international network of trusted professionals. We aim to deliver clear, effective, and commercially-oriented advice across jurisdictions. We look forward to working with you.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--brand-maroon)] hover:bg-[var(--brand-peach)] font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg"
            >
              Get In Touch With Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
