"use client";

import { useInView } from "./useInView";

export default function StepsConnector() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-[16%] top-[1.35rem] hidden h-px md:block"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-gold via-gold-soft to-gold transition-transform duration-[1200ms] ease-out"
        style={{ transform: inView ? "scaleX(1)" : "scaleX(0)" }}
      />
    </div>
  );
}
