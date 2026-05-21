"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Inline SVG icons — lucide-react dropped branded icons in newer versions
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const ROLES = ["Builder.", "Founder.", "Developer.", "Maker."];

function useTypingEffect(words: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const current = words[wordIndex];

    if (phase === "typing") {
      if (displayText.length < current.length) {
        const t = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          75
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("waiting"), 1600);
        return () => clearTimeout(t);
      }
    }

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("deleting"), 400);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const t = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          38
        );
        return () => clearTimeout(t);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [displayText, phase, wordIndex, words]);

  return displayText;
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const SOCIAL_LINKS: { href: string; label: string; Icon: () => React.JSX.Element }[] = [
  { href: "https://github.com/Aavash-L", label: "GitHub", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/aavashlamichhane/", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "mailto:alamichhane158@gmail.com", label: "Email", Icon: MailIcon },
];

export function Hero() {
  const typedText = useTypingEffect(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% -10%, rgba(16, 185, 129, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 80%, rgba(14, 116, 144, 0.07) 0%, transparent 50%),
            #06101a
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-port flex flex-col items-center text-center pt-24 pb-16">
        {/* Status badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/25 text-emerald-400 font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            Open to Work / Internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display font-bold text-slate-100 leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Hi, I&apos;m{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #34d399 0%, #10b981 50%, #0d9488 100%)",
            }}
          >
            Aavash.
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          className="mb-8 h-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="font-display text-[clamp(1.2rem,3vw,2rem)] text-slate-400 font-medium">
            {typedText}
            <span className="inline-block w-[2px] h-[1em] bg-emerald-400 ml-0.5 align-middle animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          CS student at Rutgers building AI products that generate real revenue.
          Sole developer of Rotgen ($30K MRR). Based in New Jersey.
          Open to SWE and product internships.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="w-11 h-11 rounded-full flex items-center justify-center text-slate-500 hover:text-emerald-400 transition-all duration-200 cursor-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-label={label}
              data-hover="true"
            >
              <Icon />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-emerald-400 transition-colors duration-200 cursor-none"
          data-hover="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">SCROLL</span>
          <ChevronDown size={16} className="animate-scroll-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
