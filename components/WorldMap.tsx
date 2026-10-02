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

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"; // We will use a dot pattern to mask borders

// Region markers placed centrally on each continent/region
const regionMarkers = [
  {
    name: "North America\n(US, Mexico)",
    coordinates: [-100, 36] as [number, number],
  },
  {
    name: "South America\n(Colombia, Ecuador, Brazil)",
    coordinates: [-60, -15] as [number, number],
  },
  {
    name: "Europe\n(EU, UK, Ukraine)",
    coordinates: [15, 52] as [number, number],
  },
  {
    name: "Eurasia\n(Georgia)",
    coordinates: [43.5, 42.0] as [number, number],
  },
  {
    name: "Africa\n(Kenya, SACU/South Africa)",
    coordinates: [22, 2] as [number, number],
  },
  {
    name: "Asia\n(India, China, Japan, South Korea, Thailand, Indonesia)",
    coordinates: [96, 26] as [number, number],
  },
  {
    name: "Australia",
    coordinates: [133, -25] as [number, number],
  },
];

interface AnnotationItem {
  subject: [number, number];
  dx: number;
  dy: number;
  label: string;
  sublabel?: string | string[];
  align?: "start" | "middle" | "end";
  xOffset?: number;
  yOffset?: number;
}

const annotations: AnnotationItem[] = [
  {
    subject: [-100, 36], // North America (middle of continent)
    dx: -95,
    dy: -45,
    label: "NORTH AMERICA",
    sublabel: "(US, Mexico)",
  },
  {
    subject: [-60, -15], // South America (Colombia, Ecuador, Brazil)
    dx: -95,
    dy: 45,
    label: "SOUTH AMERICA",
    sublabel: "(Colombia, Ecuador, Brazil)",
  },
  {
    subject: [15, 52], // Europe (middle of continent: EU, UK, Ukraine)
    dx: -95,
    dy: -30,
    label: "EUROPE",
    sublabel: "(EU, UK, Ukraine)",
  },
  {
    subject: [43.5, 42.0], // Eurasia (Georgia)
    dx: 45,
    dy: -65,
    label: "EURASIA",
    sublabel: "(Georgia)",
  },
  {
    subject: [22, 2], // Africa (arrow in middle)
    dx: 0,
    dy: 120,
    label: "AFRICA",
    sublabel: "(Kenya, SACU/South Africa)",
    align: "middle",
    yOffset: 12,
  },
  {
    subject: [96, 26], // Asia (arrow in middle: India, China, Japan, South Korea, Thailand, Indonesia)
    dx: 90,
    dy: 10,
    label: "ASIA",
    sublabel: [
      "(India, China, Japan, South Korea,",
      "Thailand, Indonesia)",
    ],
  },
  {
    subject: [133, -25], // Australia
    dx: 45,
    dy: -20,
    label: "AUSTRALIA",
  },
];

export default function WorldMap({ actionLink, children }: WorldMapProps = {}) {
  const [isMounted, setIsMounted] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [compassVisible, setCompassVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const compassContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
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

  const renderMapContent = () => {
    if (!isMounted) return <div className="w-full h-auto max-h-[70vh]" style={{ aspectRatio: "1100 / 550" }} />;
    return (
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
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#b89675" />
            </pattern>
          </defs>

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "url(#dotPattern)", // Dotted landmass
                      stroke: "transparent", // No borders!
                      strokeWidth: 0,
                      outline: "none",
                    },
                    hover: {
                      fill: "url(#dotPattern)",
                      stroke: "transparent",
                      outline: "none",
                    },
                    pressed: {
                      fill: "url(#dotPattern)",
                      outline: "none",
                    },
                  }}
                  className="transition-all duration-300 pointer-events-none"
                />
              ))
            }
          </Geographies>

          {/* Region Markers (Dots) */}
          {regionMarkers.map((marker, idx) => (
            <Marker
              key={idx}
              coordinates={marker.coordinates}
              onMouseEnter={() => setTooltipContent(marker.name)}
              onMouseLeave={() => setTooltipContent("")}
              data-tooltip-id="world-map-tooltip"
              className="cursor-pointer"
            >
              <circle r={8} fill="#7a2228" className="drop-shadow-md hover:scale-125 transition-transform duration-300" />
              <circle r={3} fill="#fde9d9" className="pointer-events-none" />
            </Marker>
          ))}

          {annotations.map((ann, idx) => {
            const isRight = ann.dx > 0;
            const isLeft = ann.dx < 0;
            const defaultAnchor = isRight ? "start" : isLeft ? "end" : "middle";
            const anchor = ann.align || defaultAnchor;
            const xPos =
              ann.xOffset !== undefined
                ? ann.xOffset
                : isRight
                  ? 12
                  : isLeft
                    ? -12
                    : 0;
            const sublines = ann.sublabel
              ? Array.isArray(ann.sublabel)
                ? ann.sublabel
                : [ann.sublabel]
              : [];

            return (
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
                  pointerEvents: "none",
                }}
                style={{ pointerEvents: "none" }}
              >
                <text
                  x={xPos}
                  y={ann.yOffset !== undefined ? ann.yOffset : 0}
                  textAnchor={anchor}
                  className="pointer-events-none drop-shadow-sm select-none"
                >
                  <tspan
                    x={xPos}
                    dy={
                      sublines.length === 0
                        ? "4"
                        : sublines.length === 1
                          ? "-5"
                          : "-11"
                    }
                    className="text-[10px] sm:text-xs font-bold fill-[#491316] tracking-widest"
                  >
                    {ann.label}
                  </tspan>
                  {sublines.map((line, lIdx) => (
                    <tspan
                      key={lIdx}
                      x={xPos}
                      dy={lIdx === 0 ? "13" : "11"}
                      className="text-[8.5px] sm:text-[9.5px] font-semibold fill-[#7a2228]/90 tracking-normal"
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </Annotation>
            );
          })}
        </ComposableMap>

        {/* Tooltip component for hover interactions */}
        <Tooltip
          id="world-map-tooltip"
          className="z-50 shadow-2xl max-w-xs text-center border border-[#7a2228]/20"
          style={{
            backgroundColor: "#3b1114", // brand-maroon-dark
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
  };

  return (
    <div className="w-full mx-auto px-2 sm:px-4" ref={compassContainerRef}>
      {showWavyBorder ? (
        /* Wavy Border Frame with Vintage Compass Overlay */
        <div className="relative w-full p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] bg-transparent overflow-visible group border border-[#7a2228]/20 shadow-sm">

          {/* Golden Vintage Compass Overlay - Top Left — dissolve entrance */}
          <img
            src="/images/compass.png"
            alt="Vintage Compass"
            className={`absolute -top-14 -left-8 sm:-top-20 sm:-left-12 md:-top-24 md:-left-16 w-44 sm:w-64 md:w-80 h-auto z-40 pointer-events-none transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${compassVisible ? 'opacity-50 group-hover:opacity-10' : 'opacity-0'}`}
            style={{
              filter: compassVisible ? "blur(0px)" : "blur(12px)",
              transform: compassVisible
                ? "scale(1) translateY(0px) rotate(0deg)"
                : "scale(0.82) translateY(-28px) rotate(-8deg)",
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



