"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileCode } from "lucide-react";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  const visitUrl = project.liveUrl ?? project.githubUrl;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex h-full flex-col overflow-hidden rounded-card border border-border-subtle bg-surface-glass backdrop-blur"
    >
      <a
        href={visitUrl ?? "#"}
        target={visitUrl ? "_blank" : undefined}
        rel={visitUrl ? "noopener noreferrer" : undefined}
        aria-disabled={!visitUrl}
        className="group relative block aspect-video w-full overflow-hidden bg-surface"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 via-accent-orange/10 to-accent-purple/20" />
        )}

        {visitUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-pill bg-gradient-to-r from-accent-red to-accent-purple px-5 py-2.5 text-sm font-medium">
              Visit Project
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        )}
      </a>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <h3 className="font-display text-2xl font-bold md:text-3xl">
          {project.name}
        </h3>
        <p className="text-sm text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-pill border border-accent-purple/30 bg-gradient-to-r from-accent-red/15 to-accent-purple/15 px-3 py-1 text-xs font-medium text-white/90 transition-colors duration-200 hover:border-accent-purple/60 hover:from-accent-red/25 hover:to-accent-purple/25"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <div className="mt-auto pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <FileCode className="h-4 w-4" />
              Code
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
