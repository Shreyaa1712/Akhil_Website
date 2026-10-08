"use client";

import React, { useState, useEffect } from "react";

interface MatterItem {
  caseNumber?: string;
  title?: string;
  desc: string;
}

interface DomainSection {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  items: MatterItem[];
}

const domains: DomainSection[] = [
  {
    id: "wto",
    title: "WTO and FTA Dispute Settlement",
    subtitle: "State-to-State & Multilateral Litigation",
    summary: "Advised and represented governments in high-stakes WTO and FTA dispute settlement proceedings.",
    items: [
      {
        caseNumber: "DS630",
        title: "EU – Definitive Countervailing Duties on Battery Electric Vehicles",
        desc: "Represented China in the WTO dispute concerning the EU's countervailing duties on battery electric vehicles. Proceedings ongoing."
      },
      {
        caseNumber: "DS616",
        title: "EU – Countervailing and Anti-Dumping Duties on Stainless Steel Cold-Rolled Flat Products",
        desc: "Represented Indonesia in the WTO case challenging the EU's anti-dumping and countervailing duties on stainless steel cold-rolled flat products. The dispute resulted in the first WTO ruling on transnational subsidies, in favour of Indonesia."
      },
      {
        caseNumber: "DS602",
        title: "China – Anti-Dumping and Countervailing Measures on Wine",
        desc: "Represented China in WTO dispute settlement proceedings concerning Australia's challenge to MOFCOM’s anti-dumping and countervailing measures on wine. Secured a mutually agreed solution, no panel report issued."
      },
      {
        caseNumber: "SACU",
        title: "Safeguard Measure on Frozen Bone-In Chicken Cuts",
        desc: "Represented the EU in bilateral FTA proceedings challenging SACU's safeguard measure on frozen bone-in chicken cuts. Secured a favourable outcome on both substantive and procedural issues."
      },
      {
        caseNumber: "Additional Advisory Experience",
        title: "",
        desc: "We have also advised governments on a broad range of WTO law issues, such as SPS measures, national security, anti-suit injunctions, local content requirements, import duties, and intellectual property."
      }
    ]
  },
  {
    id: "trade",
    title: "Trade Defence",
    subtitle: "Anti-Dumping, Anti-Subsidy & Safeguards",
    summary: "Advised and represented governments and companies across the full life-cycle of complex trade remedy investigations and litigation.",
    items: [
      {
        caseNumber: "Anti-Dumping Investigations",
        title: "",
        desc: "Advised and represented governments and companies in anti-dumping investigations such as those concerning TiO2, PVC, corrosion-resistant steel, cold-rolled steel, ceramic tiles, biodiesel, fatty acids, and hot-rolled flat products."
      },
      {
        caseNumber: "Anti-Subsidy Investigations",
        title: "",
        desc: "Advised and represented clients in countervailing duty investigations such as those concerning battery electric vehicles, optical fibre cables, and electric bicycles."
      },
      {
        caseNumber: "Safeguard Investigations",
        title: "",
        desc: "Advised and represented clients on safeguard investigations such as those concerning steel and ferro-alloys."
      },
      {
        caseNumber: "EU General Court Litigation",
        title: "",
        desc: "Supported foreign exporters seeking annulment of EU trade defence regulation before the General Court of the European Union."
      },
      {
        caseNumber: "Additional Advisory Experience",
        title: "",
        desc: "Advised industry on litigation and regulatory issues before the EU Courts, including cases concerning the principle of non-discrimination, selection of the representative country, rules of origin, and adjustments in anti-dumping investigations."
      }
    ]
  },
  {
    id: "gov",
    title: "Government Advisory",
    subtitle: "Sovereign Trade Strategy & Regulations",
    summary: "Regular advisory to governments on WTO law, trade remedy investigations, and sustainability rules.",
    items: [
      {
        caseNumber: "Trade Remedy Proceedings",
        desc: "Regularly advised an Asian government on the conduct of trade remedy investigations, including substantive and procedural aspects of anti-dumping, anti-subsidy, and safeguard proceedings."
      },
      {
        caseNumber: "Sustainability & Environmental Rules",
        desc: "Advised Asian governments on the implications of EU sustainability and environmental regulations affecting exports, including the Carbon Border Adjustment Mechanism (CBAM) and the EU Deforestation Regulation (EUDR)."
      },
      {
        caseNumber: "Transnational Subsidies",
        desc: "Advised a European government on transnational subsidies, and international negotiations on subsidy disciplines and reform."
      },
      {
        caseNumber: "Technical Barriers to Trade",
        desc: "Advised a European governmental agency on technical barriers to trade (TBT) issues arising in a Latin American jurisdiction."
      },
      {
        caseNumber: "WTO Accession",
        desc: "Advised a Central Asian government on WTO accession."
      },
      {
        caseNumber: "Third-Country Proceedings",
        desc: "Advised an Asian government on complex legal and strategic issues arising in third-country trade remedy proceedings."
      }
    ]
  },
  {
    id: "industry",
    title: "Industry Advisory",
    subtitle: "Corporate Legal & Regulatory Solutions",
    summary: "Strategic advice for corporations on CBAM compliance, state aid, digital trade rules, and market access.",
    items: [
      {
        caseNumber: "Technology",
        title: "",
        desc: "Advised technology companies on EU State aid rules and government procurement matters, as well as WTO-compatibility of emerging digital trade regulations."
      },
      {
        caseNumber: "Industrial & Manufacturing",
        title: "",
        desc: "Advised manufacturers on CBAM compliance, verification of emissions data, and assisted companies in strategic engagement with global institutions on sustainability regulations."
      },
      {
        caseNumber: "Agriculture & Food Products",
        title: "",
        desc: "Advised producers and exporters on compliance with the EU Deforestation Regulation (EUDR), and EU customs and tariff-refund mechanisms."
      }
    ]
  }
];

export default function WorkTabs() {
  const [activeDomainId, setActiveDomainId] = useState<string>("wto");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Scroll to the top of the work section whenever the active domain changes
  useEffect(() => {
    const element = document.getElementById("work-section-top");
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  }, [activeDomainId]);



  const activeDomain = domains.find((d) => d.id === activeDomainId) || domains[0];
  const remainingDomains = domains.filter((d) => d.id !== activeDomainId);

  const visibleItems = isExpanded ? activeDomain.items : activeDomain.items.slice(0, 2);
  const hasMore = activeDomain.items.length > 2;

  const handleSelectDomain = (domainId: string) => {
    setActiveDomainId(domainId);
    setIsExpanded(false);
  };

  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setTimeout(() => {
        const element = document.getElementById("work-section-top");
        if (element) {
          const topPos = element.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top: topPos, behavior: "smooth" });
        }
      }, 150);
    } else {
      setIsExpanded(true);
    }
  };

  const renderCard = (item: MatterItem, idx: number) => (
    <div
      key={idx}
      className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--brand-peach)]/60 hover:border-[var(--brand-peach-dark)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {item.caseNumber && (
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-[var(--brand-maroon-dark)] tracking-tight leading-snug">
            {item.caseNumber}
          </h3>
        )}
        {item.title && (
          <h4 className="text-lg md:text-xl font-bold mb-3 text-[var(--brand-maroon)] tracking-tight leading-snug">
            {item.title}
          </h4>
        )}
        <p className="text-[var(--brand-maroon-light)] leading-relaxed text-base md:text-lg font-medium">
          {item.desc}
        </p>
      </div>
    </div>
  );

  return (
    <div id="work-section-top" className="w-full scroll-mt-28">
      {/* Active Domain Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-14 border-b border-[var(--brand-peach-dark)]/40">
        {/* Left Side: Active Domain Title */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--brand-maroon-light)] mb-2">
              Practice Area
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--brand-maroon-dark)] tracking-tight leading-tight">
              {activeDomain.title}
            </h2>
            <div className="w-12 h-[2px] bg-[var(--brand-maroon)]/80 mt-4 mb-3" />
            <p className="text-sm md:text-base text-[var(--brand-maroon-light)] leading-relaxed hidden md:block">
              {activeDomain.summary}
            </p>
          </div>
        </div>

        {/* Right Side: Active Domain White Cards with Connected Progress Line */}
        <div className="md:col-span-8">
          <div className="relative pl-6 md:pl-8">
            {/* Vertical Progress Bar Track Line (Runs directly into More/Less button) */}
            <div className="absolute left-0 top-6 bottom-3 w-[2px] bg-[var(--brand-peach-dark)]/50 rounded-full overflow-hidden">
              {/* Animated Progress Filler */}
              <div
                className={`w-full bg-[var(--brand-maroon)] rounded-full transition-all duration-700 ease-in-out ${
                  isExpanded ? "h-full" : "h-[45%]"
                }`}
              />
            </div>

            {/* Cards List */}
            <div className="grid grid-cols-1 gap-6">
              {visibleItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Card Left Dot Indicator on Progress Line */}
                  <div
                    className={`absolute -left-[30px] md:-left-[38px] top-8 w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-500 z-10 ${
                      idx < visibleItems.length
                        ? "bg-[var(--brand-maroon)] shadow-xs scale-100 group-hover:scale-125"
                        : "bg-[var(--brand-peach-dark)]"
                    }`}
                  />
                  {renderCard(item, idx)}
                </div>
              ))}
            </div>

            {/* View More / Less Expander (Connected Node on Line with Capital Text & Smooth Scroll) */}
            {hasMore && (
              <div className="relative mt-8 pt-1">
                <button
                  onClick={handleToggleExpand}
                  className="cursor-pointer group flex items-center gap-3 py-1 relative z-10"
                  aria-label={isExpanded ? "Show Less" : "Show More"}
                >
                  <span className="absolute -left-[35px] md:-left-[43px] w-6 h-6 rounded-full border-2 border-white bg-[var(--brand-maroon)] text-[var(--brand-peach)] flex items-center justify-center shadow-md group-hover:scale-125 group-hover:bg-[var(--brand-maroon-dark)] transition-all duration-300">
                    {isExpanded ? (
                      <svg
                        className="w-3.5 h-3.5 stroke-[2.5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-90"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm md:text-base font-bold font-serif tracking-wide text-[var(--brand-maroon-dark)] group-hover:text-[var(--brand-maroon)] transition-colors cursor-pointer">
                    {isExpanded ? "Less" : "More"}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Explore Further Section (Displays the remaining 3 domains) */}
      <div className="pt-14">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[var(--brand-maroon-dark)] mb-8 tracking-tight">
          Explore Further
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remainingDomains.map((domain) => (
            <div
              key={domain.id}
              onClick={() => handleSelectDomain(domain.id)}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-[var(--brand-peach)]/70 hover:border-[var(--brand-maroon)]/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold font-serif text-[var(--brand-maroon-dark)] group-hover:text-[var(--brand-maroon)] transition-colors leading-snug mb-3">
                  {domain.title}
                </h4>
                <p className="text-sm text-[var(--brand-maroon-light)] leading-relaxed">
                  {domain.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--brand-peach)]/40 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[var(--brand-maroon)] group-hover:text-[var(--brand-maroon-dark)]">
                <span>Explore Domain</span>
                <span className="w-7 h-7 rounded-full bg-[var(--brand-peach)]/60 text-[var(--brand-maroon)] flex items-center justify-center group-hover:bg-[var(--brand-maroon)] group-hover:text-[var(--brand-peach)] transition-all duration-300 transform group-hover:translate-x-1">
                  <svg
                    className="w-4 h-4 stroke-[2.5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}





