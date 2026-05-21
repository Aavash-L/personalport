"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CATEGORIES = [
  {
    label: "FRONTEND",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Shadcn/ui", "Radix UI"],
  },
  {
    label: "BACKEND",
    items: ["Python", "Node.js", "PostgreSQL", "REST APIs", "OAuth", "SQL", "Supabase", "Prisma", "Express", "FastAPI"],
  },
  {
    label: "AI / LLM",
    items: ["OpenAI API", "Claude API", "LLM Integration", "Prompt Engineering", "Vision Models", "pandas", "NumPy", "LangChain"],
  },
  {
    label: "TOOLS & INFRA",
    items: ["Git", "GitHub", "Figma", "Stripe", "Vercel", "Docker", "Solidity", "Playwright", "Postman"],
  },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="py-20 md:py-28">
      <div className="container-port">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel label="04 — Toolbox" className="mb-4" />
          <h2
            className="font-display font-bold text-slate-100"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            What I build with.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {CATEGORIES.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: catIndex * 0.08,
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400 mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    className="skill-pill cursor-none"
                    data-hover="true"
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: catIndex * 0.06 + i * 0.04,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
