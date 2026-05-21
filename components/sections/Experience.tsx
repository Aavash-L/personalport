"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

        <div className="flex flex-col gap-3">
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
  const [open, setOpen] = useState(false);
  const hasBullets = item.bullets && item.bullets.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="card overflow-hidden"
    >
      <button
        className="w-full text-left p-5 md:p-6 cursor-none"
        onClick={() => hasBullets && setOpen((v) => !v)}
        data-hover={hasBullets ? "true" : undefined}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          {/* Left — date pill */}
          <div className="hidden sm:block flex-shrink-0 pt-0.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600 bg-white/4 border border-white/8 rounded-full px-3 py-1.5 whitespace-nowrap">
              {item.dateRange}
            </span>
          </div>

          {/* Center — main info */}
          <div className="flex-1 min-w-0">
            {/* Mobile date */}
            <p className="sm:hidden font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600 mb-2">
              {item.dateRange}
            </p>

            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display font-semibold text-slate-100 text-base leading-tight">
                  {item.role}
                </p>
                <p className="text-emerald-400/80 text-sm mt-0.5">{item.company}</p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="hidden md:block font-mono text-[9px] uppercase tracking-[0.14em] text-slate-600 border border-white/8 rounded-full px-2.5 py-1">
                  {item.location}
                </span>
                {hasBullets && (
                  <ChevronDown
                    size={15}
                    className={`text-slate-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                )}
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mt-2">
              {item.description}
            </p>
          </div>
        </div>
      </button>

      {/* Expandable bullets */}
      <AnimatePresence initial={false}>
        {open && hasBullets && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <ul className="px-5 md:px-6 pb-5 space-y-2 border-t border-white/5 pt-4 ml-0 sm:ml-[calc(theme(spacing.3)+6.5rem)]">
              {item.bullets!.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                  <span className="text-emerald-400/60 mt-1.5 flex-shrink-0 text-[8px]">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
