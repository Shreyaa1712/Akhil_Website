"use client";

import React, { useState } from "react";

export interface Publication {
  id: number;
  title: string;
  journal: string;
  year: string;
  coAuthors: string | null;
  type: string;
  shortView?: string;
  links?: { label: string; url: string }[];
}

const Library = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg>
);

interface AcademicPublicationsProps {
  publications: Publication[];
  initialCount?: number;
}

export default function AcademicPublications({
  publications,
  initialCount = 2,
}: AcademicPublicationsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? publications : publications.slice(0, initialCount);
  const hasMore = publications.length > initialCount;

  const handleToggleExpand = () => {
    if (isExpanded) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setIsExpanded(false);
      }, 400);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div id="academic-publications-top" className="scroll-mt-28">
      <div className="flex items-center gap-2 text-[var(--brand-maroon)] font-bold text-sm uppercase tracking-wider mb-6">
        <Library className="w-5 h-5" />
        <span>Selected Publications</span>
      </div>

      <div className="relative pl-6 md:pl-8">
        {/* Vertical Track Line */}
        <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-[var(--brand-peach-dark)]/50 rounded-full overflow-hidden">
          {/* Animated Progress Filler */}
          <div
            className={`w-full bg-[var(--brand-maroon)] rounded-full transition-all duration-700 ease-in-out ${isExpanded ? "h-full" : "h-[35%]"
              }`}
          />
        </div>

        {/* Cards List */}
        <div className="grid grid-cols-1 gap-6">
          {visibleItems.map((pub, idx) => (
            <div key={pub.id} className="relative group">
              {/* Dot Indicator */}
              <div
                className={`absolute -left-[30px] md:-left-[38px] top-7 w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-500 z-10 ${idx < visibleItems.length
                    ? "bg-[var(--brand-maroon)] shadow-xs scale-100 group-hover:scale-125"
                    : "bg-[var(--brand-peach-dark)]"
                  }`}
              />

              <div className="bg-white rounded-2xl p-6 md:p-7 shadow-md shadow-[var(--brand-maroon)]/5 border border-[var(--brand-peach)]/60 hover:border-[var(--brand-maroon)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-sm font-semibold text-[var(--brand-maroon-light)]">
                      {pub.year}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-serif font-bold text-[var(--brand-maroon-dark)] group-hover:text-[var(--brand-maroon)] transition-colors mb-2 leading-snug">
                    "{pub.title}"
                  </h3>

                  <p className="text-sm font-semibold text-[var(--brand-maroon)] italic mb-3">
                    {pub.journal}
                  </p>

                  {pub.shortView && (
                    <p className="text-sm text-[var(--brand-maroon-light)] leading-relaxed mb-3">
                      {pub.shortView}
                    </p>
                  )}

                  {pub.links && pub.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-1">
                      {pub.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[var(--brand-peach-dark)] hover:text-[var(--brand-maroon)] transition-colors group"
                        >
                          <span className="mr-1">{link.label}</span>
                          <svg className="w-3.5 h-3.5 stroke-[2.5] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {pub.coAuthors && (
                  <div className="pt-3 mt-4 border-t border-[var(--brand-peach)]/30 text-xs text-[var(--brand-maroon-light)] font-medium">
                    {pub.coAuthors}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More / Less Expander Button */}
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
  );
}
