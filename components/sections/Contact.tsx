"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CONTACT_LINKS } from "@/data/portfolio";

export function Contact() {
  const buildDate = new Date()
    .toLocaleDateString("en-US", { month: "long", year: "numeric" })
    .toUpperCase();

  return (
    <section id="contact" className="min-h-screen flex flex-col">
      {/* Main */}
      <div className="flex-1 flex flex-col justify-center py-24 md:py-32">
        <div className="container-port">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <SectionLabel label="05 — Contact" className="mb-4" />
          </motion.div>

          {/* Hero text */}
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              <span className="text-slate-100">Let&apos;s build </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #34d399 0%, #10b981 60%, #0d9488 100%)",
                }}
              >
                something great
              </span>
              <span className="text-slate-100"> together.</span>
            </h2>
          </motion.div>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link, i) => (
              <motion.div
                key={link.platform}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.07,
                }}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="card group flex items-center justify-between p-5 md:p-6 cursor-none"
                  data-hover="true"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-400 mb-1.5">
                      {link.platform}
                    </p>
                    <p className="font-display font-medium text-slate-300 text-base md:text-lg group-hover:text-slate-100 transition-colors duration-200">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-700 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-200 flex-shrink-0"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-5">
        <div className="container-port flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-700">
            © 2026 AAVASH LAMICHHANE
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-700">
            BUILT IN NEXT.JS · DEPLOYED ON VERCEL
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-700">
            LAST UPDATED — {buildDate}
          </p>
        </div>
      </footer>
    </section>
  );
}
