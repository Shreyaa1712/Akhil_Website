"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = sessionStorage.getItem("disclaimerAccepted");
    if (!hasAccepted) {
      setIsOpen(true);
      // Disable scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
      {/* Modal Content */}
      <div className="relative bg-white shadow-2xl rounded-2xl max-w-3xl w-full max-h-full overflow-y-auto p-8 md:p-12 z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-maroon)] mb-8 tracking-wide shrink-0">
          disclaimer
        </h2>
        
        <div className="text-gray-700 text-sm md:text-base space-y-6 mb-10 leading-relaxed font-medium">
          <p>
            The rules of the Bar Council of India prohibit law firms from advertising and soliciting work through communication in the public domain. This website is meant solely for the purpose of information and not for the purpose of advertising. <span className="text-[var(--brand-maroon)]">AR Legal</span> does not intend to solicit clients through this website. We do not take responsibility for decisions taken by the reader based solely on the information provided on the website.
          </p>

          <p>
            By clicking on &apos;ENTER&apos;, the visitor acknowledges that the information provided on the website <span className="text-[var(--brand-maroon)]">(a) does not amount to advertising or solicitation and (b) is meant only for the visitor&apos;s understanding about our activities and who we are.</span>
          </p>

          <p>
            By continuing to use this site, you consent to the use of cookies on your device as described in our <span className="text-[var(--brand-maroon)]">Cookie Policy</span>.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-6 w-full">
          <button
            onClick={handleEnter}
            className="w-40 py-3 rounded-full border-2 border-[var(--brand-maroon)] text-[var(--brand-maroon)] font-bold tracking-widest hover:bg-[var(--brand-maroon)] hover:text-white transition-all shadow-md hover:shadow-lg text-lg uppercase"
          >
            Enter
          </button>
          
          <button
            onClick={handleExit}
            className="w-40 py-3 rounded-full border-2 border-[var(--brand-maroon)] text-[var(--brand-maroon)] font-bold tracking-widest hover:bg-[var(--brand-maroon)] hover:text-white transition-all shadow-md hover:shadow-lg text-lg uppercase"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
