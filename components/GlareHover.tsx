"use client";

import React, { useState } from "react";

type GlareHoverProps = {
  children: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function GlareHover({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = "",
  style = {},
}: GlareHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleMouseEnter = () => {
    if (playOnce && hasPlayed) return;
    setIsHovered(false);
    // Force reset for re-play
    requestAnimationFrame(() => {
      setIsHovered(true);
      setHasPlayed(true);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-full inline-block ${className}`}
      style={{
        position: "relative",
        ...style,
      }}
    >
      {children}

      {/* Glare Sheen Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-all ease-out"
        style={{
          transitionDuration: `${transitionDuration}ms`,
          transform: isHovered
            ? `rotate(${glareAngle}deg) translateY(200%)`
            : `rotate(${glareAngle}deg) translateY(-200%)`,
          background: `linear-gradient(180deg, transparent 0%, ${glareColor} 50%, transparent 100%)`,
          opacity: isHovered ? glareOpacity : 0,
          width: `${glareSize}%`,
          height: `${glareSize}%`,
          top: "-100%",
          left: "-100%",
        }}
      />
    </div>
  );
}
