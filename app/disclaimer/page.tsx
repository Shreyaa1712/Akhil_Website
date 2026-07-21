import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | AR Legal",
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      <section className="w-full px-6 py-20 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Terms & Conditions
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--brand-maroon-dark)]">
            Legal Disclaimer
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50">
          <div className="prose prose-lg text-[var(--brand-maroon-light)] max-w-none space-y-6 leading-relaxed">
            <p>
              The materials on this website have been prepared by AR Legal for general informational purposes only and do not constitute legal advice.
            </p>
            <p>
              The information presented is not intended to create, and receipt of it does not constitute, a lawyer-client relationship. Internet subscribers and online readers should not act upon this information without seeking professional counsel.
            </p>
            <p>
              Do not send us confidential information until you speak with one of our lawyers and receive our authorization to send that information to us. Providing information to the firm via email links on this website will not create an attorney-client relationship and will not prevent the firm from representing someone else in connection with the matter in question.
            </p>
            <p>
              This website may contain links to other third-party websites. Such links are provided for convenience only. AR Legal does not endorse or accept responsibility for the content, use, or products and services made available through such websites.
            </p>
            <p>
              Past results described on this site do not guarantee a similar outcome in future matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
