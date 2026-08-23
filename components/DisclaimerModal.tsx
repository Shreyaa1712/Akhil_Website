"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = sessionStorage.getItem("disclaimerAccepted");
    if (!hasAccepted) {
      setIsOpen(true);
      // Disable scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleProceed = () => {
    if (isAccepted) {
      sessionStorage.setItem("disclaimerAccepted", "true");
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
      
      {/* Modal Content */}
      <div className="relative bg-white shadow-2xl border border-gray-100 max-w-4xl w-full max-h-full overflow-y-auto p-6 md:p-12 z-10 flex flex-col">
        <h2 className="text-3xl md:text-4xl font-medium text-[var(--brand-maroon-dark)] mb-6 tracking-wide shrink-0">
          Disclaimer
        </h2>
        
        <div className="prose prose-sm md:prose-base text-gray-700 max-w-none space-y-4 mb-8 leading-relaxed">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.arlegal.eu, you acknowledge and confirm that you are seeking information relating to AR Legal of your own accord and that there has been no form of solicitation, advertisement or inducement by AR Legal or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. AR Legal shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of AR Legal.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-auto shrink-0">
          <label className="flex items-start sm:items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-5 h-5 mt-0.5 sm:mt-0 shrink-0 border-2 border-gray-300 rounded-sm text-[var(--brand-maroon)] focus:ring-[var(--brand-maroon)] cursor-pointer"
              checked={isAccepted}
              onChange={(e) => setIsAccepted(e.target.checked)}
            />
            <span className="text-gray-800 text-sm md:text-base font-medium">
              I accept the above.
            </span>
          </label>

          <button
            onClick={handleProceed}
            disabled={!isAccepted}
            className={`w-full sm:w-auto self-start px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border ${
              isAccepted
                ? "border-[var(--brand-maroon)] text-[var(--brand-maroon)] hover:bg-[var(--brand-maroon)] hover:text-white cursor-pointer"
                : "border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed to Website
          </button>
        </div>
      </div>
    </div>
  );
}
