"use client";

import React, { useRef, useEffect, useState } from "react";

type AnimatedContentProps = {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnimatedContent({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = "",
  style = {},
}: AnimatedContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const sign = reverse ? -1 : 1;
  const translateX = direction === "horizontal" ? `${sign * distance}px` : "0px";
  const translateY = direction === "vertical" ? `${sign * distance}px` : "0px";

  const transformInitial = `translate3d(${translateX}, ${translateY}, 0) scale(${scale < 1 ? scale : 1})`;
  const transformFinal = "translate3d(0px, 0px, 0px) scale(1)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : animateOpacity ? initialOpacity : 1,
        transform: isVisible ? transformFinal : transformInitial,
        transition: `opacity ${duration}s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}s, transform ${duration}s cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
