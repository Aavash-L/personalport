"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { type Project } from "@/data/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imgError, setImgError] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIframeLoaded(false);
    setShowFallback(false);
    setImgError(false);

    if (project) {
      timeoutRef.current = setTimeout(() => setShowFallback(true), 6000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [project]);

  useEffect(() => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const handleIframeLoad = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIframeLoaded(true);
    setShowFallback(false);
  };

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
            <motion.div
              key={project.id}
              className="w-[90vw] h-[90vh] flex flex-col overflow-hidden"
              style={{
                background: "#0a1524",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                borderRadius: "0.75rem",
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.1)",
              }}
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Preview of ${project.name}`}
            >
              {/* Browser chrome — desktop */}
              {!isMobile && (
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 flex-shrink-0">
                  {/* macOS traffic lights */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={onClose}
                      className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-75 transition-opacity cursor-none"
                      data-hover="true"
                    />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>

                  {/* URL bar */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white/5 border border-white/8 rounded-md px-3 py-1.5 font-mono text-[11px] text-slate-500 truncate max-w-md w-full text-center">
                      {project.url}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1.5 cursor-none"
                      data-hover="true"
                    >
                      OPEN IN NEW TAB <ExternalLink size={9} />
                    </a>
                    <button
                      onClick={onClose}
                      className="text-slate-500 hover:text-emerald-400 transition-colors duration-200 cursor-none"
                      data-hover="true"
                    >
                      <X size={15} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile header */}
              {isMobile && (
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 flex-shrink-0">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 mb-0.5">PREVIEW</p>
                    <p className="font-display font-semibold text-slate-100 text-base">{project.name}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </a>
                    <button
                      onClick={onClose}
                      className="text-slate-500 hover:text-emerald-400 transition-colors"
                    >
                      <X size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 relative overflow-hidden">
                {/* Loading */}
                {!iframeLoaded && !showFallback && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0a1524] z-10">
                    <div className="text-center">
                      <div className="w-8 h-8 border-2 border-emerald-400/20 border-t-emerald-400 rounded-full mx-auto mb-4 animate-spin" />
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                        LOADING — {project.name.toUpperCase()}
                      </p>
                    </div>
                  </div>
                )}

                {/* Fallback */}
                {showFallback && (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1524] z-10 gap-8 p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full max-w-xl aspect-[16/10] rounded-lg overflow-hidden border border-white/10">
                      {!imgError ? (
                        <Image
                          src={project.screenshotPath}
                          alt={`${project.name} screenshot`}
                          fill
                          className="object-contain"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#0d1b2a]">
                          <span className="font-mono text-sm uppercase tracking-widest text-slate-600">
                            {project.name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 mb-5">
                        This site can&apos;t be embedded — click to visit
                      </p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] bg-emerald-400/10 border border-emerald-400/40 text-emerald-400 px-6 py-3 rounded-full hover:bg-emerald-400/20 transition-colors duration-200 cursor-none"
                        data-hover="true"
                      >
                        VISIT SITE <ExternalLink size={11} />
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Iframe */}
                {!showFallback && (
                  <iframe
                    key={project.id}
                    src={project.url}
                    title={`${project.name} preview`}
                    className="w-full h-full border-none"
                    onLoad={handleIframeLoad}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
