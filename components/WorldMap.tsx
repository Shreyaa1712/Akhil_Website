"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

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

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollWidth > clientWidth) {
        scrollContainerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
      }
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full bg-transparent flex items-start justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-hide"
    >
      <div className="w-full min-w-[800px] lg:min-w-0 max-w-8xl mx-auto px-4">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 159,
            center: [0, 28],
          }}
          width={1100}
          height={550}
          className="w-full h-auto max-h-[70vh] object-contain bg-transparent drop-shadow-[0_10px_20px_rgba(73,19,22,0.15)]"
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
      </div>
    </div>
  );
}
