"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/types";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpen, index }: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
    >
      <button
        className="w-full text-left card group block cursor-none overflow-hidden"
        onClick={() => {
          if (project.openExternal) {
            window.open(project.url, "_blank", "noopener,noreferrer");
          } else {
            onOpen(project);
          }
        }}
        data-hover="true"
        aria-label={`Preview ${project.name}`}
      >
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1b2a]">
          {!imageError ? (
            <Image
              src={project.screenshotPath}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a1622]">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
                {project.name}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#06101a]/0 group-hover:bg-[#06101a]/50 transition-all duration-400 ease-out flex items-center justify-center">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 flex items-center gap-2">
              {project.openExternal ? "VISIT SITE" : "PREVIEW LIVE"} <ArrowUpRight size={12} />
            </span>
          </div>

          {/* Status badge */}
          {project.status !== "LIVE" && (
            <div className="absolute top-3 left-3">
              <span className="font-mono text-[9px] uppercase tracking-widest bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 px-2.5 py-1 rounded-full">
                {project.status}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display font-semibold text-lg text-slate-100 leading-tight group-hover:text-emerald-400 transition-colors duration-200">
              {project.name}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-slate-600 group-hover:text-emerald-400 transition-colors duration-200 mt-0.5 flex-shrink-0"
            />
          </div>

          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            {project.tagline}
          </p>

          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-badge">
                  {tech}
                </span>
              ))}
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-400/70 flex-shrink-0">
              {project.metric}
            </p>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
