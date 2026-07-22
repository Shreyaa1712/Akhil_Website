"use client";

import React, { useState } from "react";
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
    dx: -60,
    dy: -40,
    label: "NORTH AMERICA",
  },
  {
    subject: [-55, -10] as [number, number], // Brazil
    dx: -60, // Point left towards the Pacific
    dy: 30,
    label: "LATIN AMERICA",
  },
  {
    subject: [10, 51] as [number, number], // Germany (EU)
    dx: -40,
    dy: -40,
    label: "EUROPEAN UNION",
  },
  {
    subject: [-3, 55] as [number, number], // UK
    dx: -50,
    dy: 10,
    label: "UK",
  },
  {
    subject: [64, 41] as [number, number], // Uzbekistan (Eurasia)
    dx: 30,
    dy: -40,
    label: "EURASIA",
  },
  {
    subject: [20, -10] as [number, number], // Africa (Central/Kenya)
    dx: 50, // Point right towards the Indian Ocean
    dy: 40,
    label: "AFRICA",
  },
  {
    subject: [104, 35] as [number, number], // China (Asia)
    dx: 50,
    dy: -30,
    label: "ASIA",
  },
  {
    subject: [80, 20] as [number, number], // India
    dx: 10,
    dy: 40,
    label: "INDIA",
  }
];

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="w-full bg-transparent flex items-center justify-center overflow-x-auto pb-1">
      <div className="w-full min-w-[340px] sm:min-w-0 max-w-7xl">
        <ComposableMap
          projectionConfig={{
            scale: 155,
            center: [5, 12],
          }}
          width={800}
          height={340}
          className="w-full h-auto bg-transparent"
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
                        fill: isHighlighted ? "#F5D0A9" : "#F4F4F4",
                        stroke: "#E5E5E5",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isHighlighted ? "#f2be85" : "#EAEAEA",
                        stroke: "#E5E5E5",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: isHighlighted ? "#F5D0A9" : "#F4F4F4",
                        outline: "none",
                      },
                    }}
                    className={
                      isHighlighted ? "cursor-pointer" : "cursor-default"
                    }
                    data-tooltip-id={isHighlighted ? "world-map-tooltip" : undefined}
                  />
                );
              })
            }
          </Geographies>

          {/* Green blinking dots for highlighted regions */}
          {annotations.map((ann, idx) => (
            <Marker key={`marker-${idx}`} coordinates={ann.subject} style={{ default: { pointerEvents: "none" } }}>
              <circle r={6} fill="#22c55e" className="animate-ping opacity-75 pointer-events-none" />
              <circle r={3} fill="#16a34a" className="pointer-events-none" />
            </Marker>
          ))}

          {annotations.map((ann, idx) => (
            <Annotation
              key={idx}
              subject={ann.subject}
              dx={ann.dx}
              dy={ann.dy}
              connectorProps={{
                stroke: "#F5D0A9",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeDasharray: "4 4", // Creates the dotted line
                pointerEvents: "none"
              }}
              style={{ pointerEvents: "none" }}
            >
              <text
                x={ann.dx > 0 ? 12 : -12}
                y={0}
                textAnchor={ann.dx > 0 ? "start" : "end"}
                alignmentBaseline="middle"
                className="text-[10px] sm:text-xs font-semibold text-gray-700 tracking-wider pointer-events-none"
              >
                {ann.label}
              </text>
            </Annotation>
          ))}
        </ComposableMap>

        {/* Tooltip component for hover interactions */}
        <Tooltip
          id="world-map-tooltip"
          className="z-50 shadow-xl max-w-xs text-center"
          style={{
            backgroundColor: "#1F2937", // tailwind gray-800
            color: "#FFFFFF",
            borderRadius: "8px",
            padding: "8px 12px",
            whiteSpace: "pre-line",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {tooltipContent}
        </Tooltip>
      </div>
    </div>
  );
}
