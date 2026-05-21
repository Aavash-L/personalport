"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatBlock } from "@/components/ui/StatBlock";
import { STATS } from "@/data/portfolio";

const PARAGRAPHS = [
  "I build full-stack AI products and ship them. Currently the sole developer behind Rotgen, an AI video platform doing $30K MRR, and the founder of Portlock Labs, an education company in emerging markets.",
  "I'm a CS student at Rutgers, minoring in Economics, graduating in 2028. I've been writing code since high school and shipping real software since 2022 — first NFTs and Web3 communities, now AI-native consumer products.",
  "What I care about right now: small teams, fast iteration, products that earn revenue from day one. I'm looking for SWE and product-data internships where I can build things people use.",
];

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  };
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-port">
        <motion.div {...reveal(0)} className="mb-12 md:mb-16">
          <SectionLabel label="01 — Introduction" className="mb-4" />
          <h2
            className="font-display font-bold text-slate-100"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            About me.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16">
          {/* Left — text */}
          <div className="flex flex-col gap-5">
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                className={`leading-[1.8] ${
                  i === 0
                    ? "text-[clamp(1rem,1.6vw,1.1rem)] text-slate-300 font-medium"
                    : "text-[clamp(0.9rem,1.4vw,1rem)] text-slate-500"
                }`}
                {...reveal(i * 0.07)}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Right — stats grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-1 gap-3" {...reveal(0.1)}>
            {STATS.map((stat, i) => (
              <StatBlock key={i} stat={stat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
