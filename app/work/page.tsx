import { Metadata } from "next";
import WorldMap from "@/components/WorldMap";

export const metadata: Metadata = {
  title: "Our Work | AR Legal",
  description: "Representative matters and selected mandates of AR Legal.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      {/* Hero Section */}
      <section className="relative w-full px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-peach)]/40 to-[var(--brand-light)] -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--brand-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10" />

        <div className="max-w-4xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Our Work
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-[var(--brand-maroon-dark)]">
            Representative <span className="text-[var(--brand-maroon)]">Matters</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--brand-maroon-light)] leading-relaxed font-medium">
            Selected mandates acting as counsel for governments and industry across various international trade and regulatory domains.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 -mt-10 w-full">
        
        {/* Map Section */}
        <div className="mb-20 bg-white rounded-3xl p-8 border border-[var(--brand-peach)]/50 shadow-xl shadow-[var(--brand-maroon)]/5 min-h-[400px]">
          <WorldMap />
        </div>

        {/* Matter Sections */}
        <div className="space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-[var(--brand-maroon)] border-b-2 border-[var(--brand-peach)] pb-4 flex items-center gap-4">
              <span className="text-sm bg-[var(--brand-peach)] px-3 py-1 rounded-full text-[var(--brand-maroon-dark)]">i.</span> 
              WTO Dispute Settlement
            </h2>
            <div className="grid gap-6">
              {[
                { title: "DS630 (EU - Definitive CVDs on BEVs)", desc: "Acted as counsel for China in its challenge to the EU's definitive countervailing duties on battery electric vehicles (dispute ongoing)." },
                { title: "DS616 (EU - CVD/AD on SSCRFP)", desc: "Acted as counsel to Indonesia in its challenge to the EU's countervailing and anti-dumping duties on stainless steel cold-rolled flat products. Secured a favourable outcome in the first-ever ruling on the issue of 'transnational subsidies'." },
                { title: "DS602 (China - AD/CVD on Wine)", desc: "Acted as counsel for China in Australia's challenge to anti-dumping and countervailing measures on wine. Secured a mutually beneficial settlement (no report issued)." },
                { title: "SACU - Safeguard on Chicken Cuts", desc: "Acted as counsel for the European Union in its bilateral FTA challenge to SACU's safeguard measure on frozen bone-in chicken cuts. Secured a favourable outcome on both substantive and procedural issues." }
              ].map((matter, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[var(--brand-peach)]/30 hover:border-[var(--brand-peach)] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-[var(--brand-maroon-dark)]">{matter.title}</h3>
                  <p className="text-[var(--brand-maroon-light)] leading-relaxed">{matter.desc}</p>
                </div>
              ))}
              <div className="bg-[var(--brand-peach)]/20 rounded-2xl p-6 border border-[var(--brand-peach)]/50 mt-2">
                <p className="text-[var(--brand-maroon-dark)] italic text-sm">Also advised governments on WTO law concerning SPS measures, national security, anti-suit injunctions, local content requirements, import duties, and patents.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-[var(--brand-maroon)] border-b-2 border-[var(--brand-peach)] pb-4 flex items-center gap-4">
              <span className="text-sm bg-[var(--brand-peach)] px-3 py-1 rounded-full text-[var(--brand-maroon-dark)]">ii.</span> 
              Trade Defence
            </h2>
            <div className="bg-white rounded-3xl p-8 border border-[var(--brand-peach)]/50 shadow-sm space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Anti-dumping investigations:</strong> Titanium dioxide, PVC, corrosion-resistant steel, cold-rolled steel, ceramic tiles, biodiesel, fatty acid, hot-rolled flat products.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Anti-subsidy investigations:</strong> Battery electric vehicles, optical fibre cables, electric bicycles.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Safeguards:</strong> EU steel I and II, and Alloys.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Foreign Subsidies Regulation:</strong> Advisory and submissions in proceedings under Regulation (EU) 2022/2560.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">EU General Court litigation:</strong> T-220/25 – supporting foreign exporters in their request for annulment of an EU anti-dumping regulation.</p>
              </div>
              <div className="border-t border-[var(--brand-peach)]/30 pt-6 mt-4">
                <p className="text-[var(--brand-maroon-dark)] italic text-sm text-center">Also advised industry on EU court litigation regarding non-discrimination, selection of the representative country, rules of origin, and adjustments for fair comparison.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-[var(--brand-maroon)] border-b-2 border-[var(--brand-peach)] pb-4 flex items-center gap-4">
              <span className="text-sm bg-[var(--brand-peach)] px-3 py-1 rounded-full text-[var(--brand-maroon-dark)]">iii.</span> 
              Government Advisory
            </h2>
            <div className="bg-white rounded-3xl p-8 border border-[var(--brand-peach)]/50 shadow-sm">
              <ul className="space-y-6 text-[var(--brand-maroon-light)] leading-relaxed">
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Regular consultation to an Asian government on WTO dispute settlement, substantive trade law, and strategic responses to EU trade measures.</li>
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Regular advisory to an Asian government on the conduct of its trade defence investigations, covering substantive and procedural issues.</li>
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Advisory to an Asian government on EU agricultural and environmental regulations affecting its exports, including CBAM and the EU Deforestation Regulation.</li>
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Advisory to a European government on the possibility of countervailing 'transnational subsidies' and on international subsidy negotiations and reform.</li>
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Advisory to a European governmental service on technical barriers to trade in a Latin American jurisdiction.</li>
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Advisory to a Central Asian government on WTO accession.</li>
                <li className="flex gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div> Advisory to an Asian government on novel issues arising in third-country trade defence proceedings.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-[var(--brand-maroon)] border-b-2 border-[var(--brand-peach)] pb-4 flex items-center gap-4">
              <span className="text-sm bg-[var(--brand-peach)] px-3 py-1 rounded-full text-[var(--brand-maroon-dark)]">iv.</span> 
              Industry Advisory
            </h2>
            <div className="bg-white rounded-3xl p-8 border border-[var(--brand-peach)]/50 shadow-sm space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Technology:</strong> A Chinese company on EU State aid rules and government procurement policy. Also advised an Asian company on the WTO compatibility of the EU Cybersecurity Act.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Industrial & Manufacturing:</strong> A Eurasian fertilizer producer and an Asian automotive manufacturer on CBAM compliance, emissions-data verification, and engagement with the EU's legislative bodies.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-peach-dark)] flex-shrink-0 mt-2.5"></div>
                <p className="text-[var(--brand-maroon-light)] leading-relaxed"><strong className="text-[var(--brand-maroon-dark)] font-bold">Agriculture & Food Products:</strong> Advised Latin American and Asian producers on compliance with the EU Deforestation Regulation, as well as a European agricultural company on market access and bilateral safeguard proceedings, and a Latin American company on EU tariff-refund mechanisms.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
