"use client";

import { useRef, useState } from "react";

export default function TapCard() {
  const [tapped, setTapped] = useState(false);
  const [burst, setBurst] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTap() {
    setTapped(true);
    setBurst((b) => b + 1);

    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(12);
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setTapped(false), 500);
  }

  return (
    <div className="relative mx-auto flex h-72 w-full max-w-sm items-center justify-center sm:h-80">
      <div className="absolute h-56 w-56 rounded-full bg-gold-soft/50 blur-2xl" />

      {/* Float wrapper: continuous idle motion, isolated from the tap transform below */}
      <div className="animate-float">
        <button
          type="button"
          onClick={handleTap}
          aria-label="Simular el toque NFC de la tarjeta"
          className={`relative flex h-44 w-72 flex-col justify-between rounded-2xl border bg-navy p-5 text-left text-paper shadow-xl outline-none transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
            tapped
              ? "scale-[1.07] border-gold shadow-2xl shadow-gold/30"
              : "scale-100 border-line hover:scale-[1.02] hover:shadow-2xl hover:shadow-navy/20"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-semibold">TapOpina</span>
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-soft/60 [animation-duration:2s]" />
              {tapped && (
                <span
                  key={burst}
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold [animation-duration:0.6s]"
                />
              )}
              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 text-gold-soft"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 8a6 6 0 0 1 12 0" strokeLinecap="round" />
                <path d="M8.5 10.5a3 3 0 0 1 7 0" strokeLinecap="round" />
                <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
              </svg>
            </span>
          </div>
          <p className="text-xs text-paper/70">
            {tapped ? "¡Toque registrado!" : "Toca para dejarnos tu opinión"}
          </p>
        </button>
      </div>

      {/* Phone silhouette: nudges toward the card on tap, like completing the touch */}
      <div
        className={`absolute -bottom-4 right-6 flex h-24 w-14 items-end justify-center rounded-xl border border-line bg-paper shadow-lg transition-transform duration-300 ease-out ${
          tapped ? "translate-x-[-6px] translate-y-[-4px] rotate-2" : "rotate-6"
        }`}
      >
        <span className="absolute -left-2 top-3 h-2 w-2 animate-ping rounded-full bg-gold/70 [animation-delay:0.6s] [animation-duration:2s]" />
        <div className="mb-2 h-1.5 w-6 rounded-full bg-line" />
      </div>
    </div>
  );
}
