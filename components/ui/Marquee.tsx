"use client";

import { useState } from "react";

interface Props {
  items: string[];
  direction?: "ltr" | "rtl";
  duration?: number;
}

export function Marquee({ items, direction = "ltr", duration = 40 }: Props) {
  const [paused, setPaused] = useState(false);
  const repeated = [...items, ...items];
  const animClass = direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl";

  return (
    <div
      className="overflow-hidden py-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex whitespace-nowrap ${animClass}`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-display font-medium text-[clamp(1rem,2vw,1.5rem)] text-slate-600 select-none"
          >
            {item}
            <span className="mx-5 text-emerald-400/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
