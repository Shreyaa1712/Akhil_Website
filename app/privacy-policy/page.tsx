import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AR Legal",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      <section className="w-full px-6 py-20 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Data Protection
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--brand-maroon-dark)]">
            Privacy Policy
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50">
          <div className="prose prose-lg text-[var(--brand-maroon-light)] max-w-none space-y-6 leading-relaxed">
            <p>
              AR Legal is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p>
              We do not collect personal information about you when you visit this website unless you choose to provide that information to us, for example by sending an email.
            </p>
            <p>
              Any information you provide is used solely to respond to your inquiry and is not shared with third parties without your explicit consent, unless required by law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
