"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EXPERIENCE } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-port">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel label="03 — Experience" className="mb-4" />
          <h2
            className="font-display font-bold text-slate-100"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
      className="card p-5 md:p-6 transition-all duration-300"
      style={{
        borderColor: hovered
          ? "rgba(16, 185, 129, 0.35)"
          : "rgba(255, 255, 255, 0.07)",
        boxShadow: hovered ? "0 0 24px rgba(16, 185, 129, 0.07)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        {/* Date */}
        <div className="flex-shrink-0 mb-3 md:mb-0 md:w-44">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 leading-relaxed">
            {item.dateRange}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-1">
            <div>
              <p className="font-display font-semibold text-slate-100 text-base md:text-lg leading-tight">
                {item.role}
              </p>
              <p className="text-emerald-400/80 text-sm mt-0.5">{item.company}</p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600 flex-shrink-0 pt-1 bg-white/4 px-2.5 py-1 rounded-full border border-white/8">
              {item.location}
            </span>
          </div>
          <p className="text-slate-500 text-sm leading-[1.7] mt-3">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
