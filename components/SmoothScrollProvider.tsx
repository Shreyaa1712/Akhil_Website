"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,        // easing strength — lower = silkier/slower
        duration: 1.4,     // scroll duration in seconds
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
