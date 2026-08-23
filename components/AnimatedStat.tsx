"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export default function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2500,
}: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setShouldAnimate(true);
        } else {
          setShouldAnimate(false);
          setDisplayValue(0);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    let rafId = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Gentle ease-out curve for smooth pacing on small values
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    rafId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(rafId);
  }, [shouldAnimate, value, duration]);

  return (
    <div ref={ref}>
      <div className="text-3xl font-serif font-bold text-[var(--brand-maroon)]">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-[var(--brand-maroon-light)] font-semibold mt-1">
        {label}
      </div>
    </div>
  );
}
