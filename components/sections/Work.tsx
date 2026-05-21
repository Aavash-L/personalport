"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { PROJECTS } from "@/data/portfolio";
import { type Project } from "@/data/types";

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-20 md:py-28">
        <div className="container-port">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <SectionLabel label="02 — Selected Work" className="mb-4" />
            <h2
              className="font-display font-bold text-slate-100 mb-4"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Real products.{" "}
              <span className="text-emerald-400">Real businesses.</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-lg">
              Every site was built personally by me — no templates, no outsourcing.
              Click any card to preview it live, in-browser.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
