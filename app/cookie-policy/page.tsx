import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | AR Legal",
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col items-center bg-[var(--brand-light)] min-h-screen text-[var(--brand-maroon-dark)]">
      
      <section className="w-full px-6 py-20 md:py-24 flex flex-col items-center text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[var(--brand-maroon-light)] font-bold tracking-widest uppercase text-sm mb-6">
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
            Data Tracking
            <span className="w-8 h-[2px] bg-[var(--brand-maroon-light)]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--brand-maroon-dark)]">
            Cookie Policy
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/50">
          <div className="prose prose-lg text-[var(--brand-maroon-light)] max-w-none space-y-6 leading-relaxed">
            <p>
              Our website uses cookies to improve your browsing experience. This Cookie Policy explains what cookies are and how we use them.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--brand-maroon-dark)] border-b border-[var(--brand-peach)]/50 pb-2">What are cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work or work more efficiently, as well as to provide information to the owners of the site.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--brand-maroon-dark)] border-b border-[var(--brand-peach)]/50 pb-2">How do we use cookies?</h2>
            <p>
              We use essential cookies to ensure the basic functionalities of the website. We may also use analytical cookies to understand how visitors interact with the website, which helps us improve its structure and content.
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--brand-maroon-dark)] border-b border-[var(--brand-peach)]/50 pb-2">Managing cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
