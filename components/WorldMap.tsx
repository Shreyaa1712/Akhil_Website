"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

interface WorldMapProps {
  actionLink?: {
    href: string;
    label: string;
  };
  children?: React.ReactNode;
}

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Map countries to their tooltip data based on user specifications
const highlightedCountries: Record<string, string> = {
  "China": "Asia",
  "India": "Asia (DGTR)",
  "Thailand": "Asia",
  "Indonesia": "Asia",
  "South Korea": "Asia",
  "Kenya": "Africa",
  "South Africa": "Africa (SACU)",
  "Georgia": "Eurasia",
  "Uzbekistan": "Eurasia",
  "United Kingdom": "United Kingdom (TRA)",
  "United States of America": "North America",
  "Mexico": "North America",
  "Colombia": "Latin America",
  "Ecuador": "Latin America",
  "Brazil": "Latin America",
  // EU Countries (European Union - DG trade)
  "France": "European Union (DG trade)",
  "Germany": "European Union (DG trade)",
  "Belgium": "European Union (DG trade)",
  "Sweden": "European Union (DG trade)",
  "Denmark": "European Union (DG trade)",
  "Austria": "European Union (DG trade)"
};

const annotations = [
  {
    subject: [-100, 38] as [number, number], // US
    dx: -110,
    dy: -50,
    label: "NORTH AMERICA",
  },
  {
    subject: [-55, -10] as [number, number], // Brazil
    dx: -110, // Point left towards the Pacific
    dy: 55,
    label: "LATIN AMERICA",
  },
  {
    subject: [10, 50] as [number, number], // Germany (EU)
    dx: -60, // Pushed far left into North Atlantic
    dy: 40,   // A little bit lower
    label: "EUROPEAN UNION",
  },
  {
    subject: [-3, 55] as [number, number], // UK
    dx: -70,
    dy: -30,
    label: "UK",
  },
  {
    subject: [64, 41] as [number, number], // Uzbekistan (Eurasia)
    dx: 55,
    dy: -70,
    label: "EURASIA",
  },
  {
    subject: [20, -10] as [number, number], // Africa (Central/Kenya)
    dx: 50,
    dy: 70,
    label: "AFRICA",
    align: "middle" as const,
    xOffset: 0,
    yOffset: 16,
  },
  {
    subject: [104, 35] as [number, number], // China (Asia)
    dx: 150,
    dy: -50,
    label: "ASIA",
  },
  {
    subject: [80, 20] as [number, number], // India
    dx: 0, // Straight down into the ocean
    dy: 90,
    label: "INDIA",
    align: "middle" as const,
    xOffset: 0,
    yOffset: 16,
  }
];

export default function WorldMap({ actionLink, children }: WorldMapProps = {}) {
  const [tooltipContent, setTooltipContent] = useState("");
  const [compassVisible, setCompassVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const compassContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollWidth > clientWidth) {
          scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
        }
      }
    };

    centerScroll();
    const t1 = setTimeout(centerScroll, 50);
    const t2 = setTimeout(centerScroll, 200);
    const t3 = setTimeout(centerScroll, 600);

    window.addEventListener("resize", centerScroll);

    let resizeObserver: ResizeObserver | null = null;
    if (scrollContainerRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        centerScroll();
      });
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", centerScroll);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const el = compassContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay so the page has settled before animating
          setTimeout(() => setCompassVisible(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showWavyBorder = process.env.NEXT_PUBLIC_SHOW_WAVY_MAP_BORDER === "true";

  const renderMapContent = () => (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 159,
          center: [0, 28],
        }}
        width={1100}
        height={550}
        className="w-full h-auto max-h-[70vh] object-contain bg-transparent drop-shadow-[0_10px_20px_rgba(73,19,22,0.15)] relative z-20"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryData = highlightedCountries[geo.properties.name];
              const isHighlighted = !!countryData;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    if (isHighlighted) {
                      setTooltipContent(`${geo.properties.name}\n${countryData}`);
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: isHighlighted ? "#7a2228" : "#e8cca6", // brand-peach-dark
                      stroke: "#000000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: isHighlighted ? "#8a262e" : "#d9bca1", // slightly darker peach
                      stroke: isHighlighted ? "#8a262e" : "#000000",
                      strokeWidth: isHighlighted ? 2.5 : 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: isHighlighted ? "#7a2228" : "#e8cca6",
                      outline: "none",
                    },
                  }}
                  className={
                    isHighlighted
                      ? "cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(122,34,40,0.8)]"
                      : "cursor-default transition-all duration-300"
                  }
                  data-tooltip-id={isHighlighted ? "world-map-tooltip" : undefined}
                />
              );
            })
          }
        </Geographies>

        {annotations.map((ann, idx) => (
          <Annotation
            key={idx}
            subject={ann.subject}
            dx={ann.dx}
            dy={ann.dy}
            connectorProps={{
              stroke: "#7a2228",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "4 4", // Creates the dotted line
              pointerEvents: "none"
            }}
            style={{ pointerEvents: "none" }}
          >
            <text
              x={ann.xOffset !== undefined ? ann.xOffset : (ann.dx > 0 ? 12 : -12)}
              y={ann.yOffset !== undefined ? ann.yOffset : 0}
              textAnchor={ann.align || (ann.dx > 0 ? "start" : "end")}
              alignmentBaseline="middle"
              className="text-[10px] sm:text-xs font-bold fill-[#491316] tracking-widest pointer-events-none drop-shadow-sm"
            >
              {ann.label}
            </text>
          </Annotation>
        ))}
      </ComposableMap>

      {/* Tooltip component for hover interactions */}
      <Tooltip
        id="world-map-tooltip"
        className="z-50 shadow-2xl max-w-xs text-center border border-[#7a2228]/20"
        style={{
          backgroundColor: "#260a0b", // brand-maroon-dark
          color: "#fde9d9", // brand-peach
          borderRadius: "12px",
          padding: "8px 16px",
          fontWeight: "bold",
          letterSpacing: "0.05em",
          whiteSpace: "pre-line",
          fontSize: "14px",
        }}
      >
        {tooltipContent}
      </Tooltip>

      {/* Action link button if passed */}
      {actionLink && (
        <div className="flex justify-center mt-4 sm:mt-6 relative z-30">
          <Link
            href={actionLink.href}
            className="group inline-flex items-center justify-center px-6 py-3 bg-[#7a2228] text-[#fde9d9] rounded-full text-sm sm:text-base font-bold shadow-lg hover:bg-[#8a262e] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-[#e8cca6]/40"
          >
            <span>{actionLink.label}</span>
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
      {children}
    </>
  );

  return (
    <div className="w-full mx-auto px-2 sm:px-4" ref={compassContainerRef}>
      {showWavyBorder ? (
        /* Wavy Border Frame with Vintage Compass Overlay */
        <div className="relative w-full p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] bg-transparent overflow-visible group border border-[#7a2228]/20 shadow-sm">

          {/* Golden Vintage Compass Overlay - Top Left — dissolve entrance */}
          <img
            src="/images/compass.png"
            alt="Vintage Compass"
            className="absolute -top-14 -left-8 sm:-top-20 sm:-left-12 md:-top-24 md:-left-16 w-44 sm:w-64 md:w-80 h-auto z-40 pointer-events-none"
            style={{
              opacity: compassVisible ? 1 : 0,
              filter: compassVisible ? "blur(0px)" : "blur(12px)",
              transform: compassVisible
                ? "scale(1) translateY(0px) rotate(0deg)"
                : "scale(0.82) translateY(-28px) rotate(-8deg)",
              transition:
                "opacity 1.2s cubic-bezier(0.22,1,0.36,1), filter 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* SVG Wavy Borders Overlay - Z-30 sits ON TOP of map graphics */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none p-1 sm:p-2 z-30 overflow-visible"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Primary Outer Wavy Border Path (Brand Maroon) */}
            <path
              d="M 36,12 Q 51.3,6 66.7,12 T 97.3,12 T 128,12 T 158.7,12 T 189.3,12 T 220,12 T 250.7,12 T 281.3,12 T 312,12 T 342.7,12 T 373.3,12 T 404,12 T 434.7,12 T 465.3,12 T 496,12 T 526.7,12 T 557.3,12 T 588,12 T 618.7,12 T 649.3,12 T 680,12 T 710.7,12 T 741.3,12 T 772,12 T 802.7,12 T 833.3,12 T 864,12 T 894.7,12 T 925.3,12 T 964,12 Q 988,12 988,36 Q 994,51.3 988,66.7 T 988,97.3 T 988,128 T 988,158.7 T 988,189.3 T 988,220 T 988,250.7 T 988,281.3 T 988,312 T 988,342.7 T 988,373.3 T 988,404 T 988,434.7 T 988,464 Q 988,488 964,488 Q 948.7,494 933.3,488 T 902.7,488 T 872,488 T 841.3,488 T 810.7,488 T 780,488 T 749.3,488 T 718.7,488 T 688,488 T 657.3,488 T 626.7,488 T 596,488 T 565.3,488 T 534.7,488 T 504,488 T 473.3,488 T 442.7,488 T 412,488 T 381.3,488 T 350.7,488 T 320,488 T 289.3,488 T 258.7,488 T 228,488 T 197.3,488 T 166.7,488 T 136,488 T 105.3,488 T 74.7,488 T 36,488 Q 12,488 12,464 Q 6,448.7 12,433.3 T 12,402.7 T 12,372 T 12,341.3 T 12,310.7 T 12,280 T 12,249.3 T 12,218.7 T 12,188 T 12,157.3 T 12,126.7 T 12,96 T 12,65.3 T 12,36 Q 12,12 36,12 Z"
              stroke="#7a2228"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Secondary Inner Dashed Wavy Border Path (Peach/Gold) */}
            <path
              d="M 44,20 Q 57.3,15 70.7,20 T 97.3,20 T 124,20 T 150.7,20 T 177.3,20 T 204,20 T 230.7,20 T 257.3,20 T 284,20 T 310.7,20 T 337.3,20 T 364,20 T 390.7,20 T 417.3,20 T 444,20 T 470.7,20 T 497.3,20 T 524,20 T 550.7,20 T 577.3,20 T 604,20 T 630.7,20 T 657.3,20 T 684,20 T 710.7,20 T 737.3,20 T 764,20 T 790.7,20 T 817.3,20 T 844,20 T 870.7,20 T 897.3,20 T 924,20 T 956,20 Q 980,20 980,44 Q 985,57.3 980,70.7 T 980,97.3 T 980,124 T 980,150.7 T 980,177.3 T 980,204 T 980,230.7 T 980,257.3 T 980,284 T 980,310.7 T 980,337.3 T 980,364 T 980,390.7 T 980,417.3 T 980,456 Q 980,480 956,480 Q 942.7,485 929.3,480 T 902.7,480 T 876,480 T 849.3,480 T 822.7,480 T 796,480 T 769.3,480 T 742.7,480 T 716,480 T 689.3,480 T 662.7,480 T 636,480 T 609.3,480 T 582.7,480 T 556,480 T 529.3,480 T 502.7,480 T 476,480 T 449.3,480 T 422.7,480 T 396,480 T 369.3,480 T 342.7,480 T 316,480 T 289.3,480 T 262.7,480 T 236,480 T 209.3,480 T 182.7,480 T 156,480 T 129.3,480 T 102.7,480 T 76,480 T 44,480 Q 20,480 20,456 Q 15,442.7 20,429.3 T 20,402.7 T 20,376 T 20,349.3 T 20,322.7 T 20,296 T 20,269.3 T 20,242.7 T 20,216 T 20,189.3 T 20,162.7 T 20,136 T 20,109.3 T 20,82.7 T 20,44 Q 20,20 44,20 Z"
              stroke="#e8cca6"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="opacity-80"
            />

            {/* Corner Decorative Compass Stars */}
            <g fill="#7a2228" className="opacity-80">
              {/* Top-Left Star */}
              <polygon points="32,32 35,26 41,29 35,32 38,38 32,35 26,38 29,32 23,29 29,26" />
              {/* Top-Right Star */}
              <polygon points="968,32 971,26 977,29 971,32 974,38 968,35 962,38 965,32 959,29 965,26" />
              {/* Bottom-Left Star */}
              <polygon points="32,468 35,462 41,465 35,468 38,474 32,471 26,474 29,468 23,465 29,462" />
              {/* Bottom-Right Star */}
              <polygon points="968,468 971,462 977,465 971,468 974,474 968,471 962,474 965,468 959,465 965,462" />
            </g>
          </svg>

          {/* Inner Map Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto scrollbar-hide py-2 sm:py-4 px-1 relative z-20"
          >
            <div className="min-w-[650px] sm:min-w-[850px] lg:min-w-0 w-full">
              {renderMapContent()}
            </div>
          </div>
        </div>
      ) : (
        /* Default Old Look: Standard clean map without wavy border frame */
        <div
          ref={scrollContainerRef}
          className="w-full bg-transparent flex items-start justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-hide"
        >
          <div className="w-full min-w-[800px] lg:min-w-0 max-w-8xl mx-auto px-2 sm:px-4">
            {renderMapContent()}
          </div>
        </div>
      )}
    </div>
  );
}



