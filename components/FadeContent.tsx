"use client";

import React, { useRef, useEffect, useState } from "react";

type FadeContentProps = {
  children: React.ReactNode;
  container?: HTMLElement | string | null;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

export default function FadeContent({
  children,
  blur = false,
  duration = 1000,
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
  style,
  ...props
}: FadeContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const secDelay = typeof delay === "number" && delay > 10 ? delay / 1000 : delay;
  const secDuration = typeof duration === "number" && duration > 10 ? duration / 1000 : duration;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : initialOpacity,
        filter: isVisible ? "blur(0px)" : blur ? "blur(10px)" : "blur(0px)",
        transition: `opacity ${secDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${secDelay}s, filter ${secDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${secDelay}s`,
        willChange: "opacity, filter",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
