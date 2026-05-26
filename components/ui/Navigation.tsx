"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/Aavash.Lamichhane_SWE_Resume.pdf", external: true },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/5">
        <div
          className="h-full transition-none"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #14b8a6, #10b981, #34d399)",
          }}
        />
      </div>

      <motion.nav
        className="fixed top-[2px] left-0 right-0 z-50"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-[#06101a]/90 backdrop-blur-md border-b border-white/5"
              : "bg-transparent"
          }`}
        >
          <div className="container-port flex items-center justify-between h-16">
            {/* Monogram */}
            <a
              href="#"
              className="font-mono text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors duration-200 cursor-none"
              aria-label="Back to top"
              data-hover="true"
            >
              AL
            </a>

            {/* Nav links */}
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 cursor-none"
                  data-hover="true"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
