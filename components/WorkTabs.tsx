"use client";

import React, { useState } from "react";

type TabId = "wto" | "trade" | "gov" | "industry";

interface Tab {
  id: TabId;
  title: string;
}

const tabs: Tab[] = [
  { id: "wto", title: "WTO Dispute Settlement" },
  { id: "trade", title: "Trade Defence" },
  { id: "gov", title: "Government Advisory" },
  { id: "industry", title: "Industry Advisory" },
];

export default function WorkTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("wto");

  // --- Data Arrays ---

  const wtoData = [
    {
      caseNumber: "DS630",
      title: "EU – Definitive Countervailing Duties on Battery Electric Vehicles",
      desc: "Advised and represented China in WTO dispute settlement proceedings concerning the EU's definitive countervailing duties on battery electric vehicles. Proceedings are ongoing."
    },
    {
      caseNumber: "DS616",
      title: "EU – Countervailing and Anti-Dumping Duties on Stainless Steel Cold-Rolled Flat Products",
      desc: "Advised and represented Indonesia in WTO proceedings challenging the EU's anti-dumping and countervailing duties on stainless steel cold-rolled flat products. The dispute resulted in the first WTO ruling on transnational subsidies."
    },
    {
      caseNumber: "DS602",
      title: "China – Anti-Dumping and Countervailing Measures on Wine",
      desc: "Counsel to China in WTO dispute settlement proceedings concerning Australia's challenge to China's anti-dumping and countervailing measures on wine. The dispute concluded through a mutually agreed solution, with no panel report issued."
    },
    {
      caseNumber: "SACU",
      title: "Safeguard Measure on Frozen Bone-In Chicken Cuts",
      desc: "Counsel to the European Union in bilateral FTA proceedings challenging SACU's safeguard measure on frozen bone-in chicken cuts. Secured a favorable outcome on both substantive and procedural issues."
    },
    {
      caseNumber: "Additional Advisory Experience",
      title: "",
      desc: "We also advise governments on a broad range of WTO law issues, including sanitary and phytosanitary (SPS) measures, national security, anti-suit injunctions, local content requirements, import duties, and intellectual property, including patent-related matters."
    }
  ];

  const tradeData = [
    {
      caseNumber: "Anti-Dumping Investigations",
      title: "",
      desc: "Advised governments, exporters, and industry in anti-dumping investigations concerning titanium dioxide, PVC, corrosion-resistant steel, cold-rolled steel, ceramic tiles, biodiesel, fatty acids, and hot-rolled flat products."
    },
    {
      caseNumber: "Anti-Subsidy Investigations",
      title: "",
      desc: "Advised clients in countervailing duty investigations involving battery electric vehicles, optical fibre cables, and electric bicycles."
    },
    {
      caseNumber: "Safeguard Investigations",
      title: "",
      desc: "Advised on safeguard investigations concerning EU Steel Safeguards I & II and ferro-alloys."
    },
    {
      caseNumber: "Foreign Subsidies Regulation",
      title: "",
      desc: "Advised clients on proceedings under the EU Foreign Subsidies Regulation (Regulation (EU) 2022/2560), including strategic advice and submissions before the European Commission."
    },
    {
      caseNumber: "EU General Court Litigation",
      title: "",
      desc: "Advised foreign exporters in Case T-220/25, supporting proceedings seeking the annulment of an EU anti-dumping regulation before the General Court of the European Union."
    },
    {
      caseNumber: "Additional Advisory Experience",
      title: "",
      desc: "Advised industry on litigation and regulatory issues before the EU Courts, including the principle of non-discrimination, selection of the representative country, rules of origin, and fair comparison adjustments in anti-dumping investigations."
    }
  ];

  const govData = [
    {
      desc: "Regularly advise an Asian government on WTO dispute settlement, substantive WTO law, and strategic responses to EU trade measures."
    },
    {
      desc: "Regularly advise an Asian government on the conduct of trade remedy investigations, including substantive and procedural aspects of anti-dumping, anti-subsidy, and safeguard proceedings."
    },
    {
      desc: "Advise an Asian government on the implications of EU sustainability and environmental regulations affecting exports, including the Carbon Border Adjustment Mechanism (CBAM) and the EU Deforestation Regulation (EUDR)."
    },
    {
      desc: "Advise a European government on transnational subsidies, countervailing duty issues, and international negotiations on subsidy disciplines and reform."
    },
    {
      desc: "Advise a European government agency on technical barriers to trade (TBT) arising in a Latin American jurisdiction."
    },
    {
      desc: "Advise a Central Asian government on WTO accession, including compliance with WTO Agreements and accession negotiations."
    },
    {
      desc: "Advise an Asian government on complex legal and strategic issues arising in third-country trade remedy proceedings."
    }
  ];

  const industryData = [
    {
      caseNumber: "Technology",
      title: "",
      desc: "Advise technology companies on EU State aid, government procurement, and the WTO compatibility of emerging digital trade regulations, including the EU Cybersecurity Act."
    },
    {
      caseNumber: "Industrial & Manufacturing",
      title: "",
      desc: "Advise manufacturers on CBAM compliance, emissions data verification, and strategic engagement with EU institutions on evolving sustainability regulations."
    },
    {
      caseNumber: "Agriculture & Food Products",
      title: "",
      desc: "Advise producers and exporters on compliance with the EU Deforestation Regulation (EUDR), market access, bilateral safeguard proceedings, and EU customs and tariff-refund mechanisms."
    }
  ];

  // --- Render Helpers ---

  const renderCard = (item: any, idx: number) => (
    <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--brand-peach)]/50 hover:border-[var(--brand-peach-dark)] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {item.caseNumber && (
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--brand-maroon-dark)] tracking-tight">
          {item.caseNumber}
        </h3>
      )}
      {item.title && (
        <h4 className="text-lg md:text-xl font-semibold mb-4 text-[var(--brand-maroon)]">
          {item.title}
        </h4>
      )}
      <p className="text-[var(--brand-maroon-light)] leading-relaxed text-base md:text-lg">
        {item.desc}
      </p>
    </div>
  );

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="grid grid-cols-2 md:flex gap-2 md:gap-4 mb-12 bg-white/50 p-2 rounded-2xl md:rounded-full border border-[var(--brand-peach)]/50 shadow-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center text-center px-2 py-3 md:px-6 md:py-4 rounded-xl md:rounded-full font-bold text-[11px] sm:text-xs md:text-base transition-all duration-300 ${isActive
                ? "bg-[var(--brand-maroon)] text-[var(--brand-peach)] shadow-md"
                : "text-[var(--brand-maroon-dark)] hover:bg-[var(--brand-peach)]/50"
                }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "wto" && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="sr-only">WTO Dispute Settlement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wtoData.map(renderCard)}
            </div>
          </section>
        )}

        {activeTab === "trade" && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="sr-only">Trade Defence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tradeData.map(renderCard)}
            </div>
          </section>
        )}

        {activeTab === "gov" && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="sr-only">Government Advisory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {govData.map(renderCard)}
            </div>
          </section>
        )}

        {activeTab === "industry" && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="sr-only">Industry Advisory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industryData.map(renderCard)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
