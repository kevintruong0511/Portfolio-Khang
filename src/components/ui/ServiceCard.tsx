"use client";

import { motion } from "framer-motion";
import { Code2, Palette, ClipboardList } from "lucide-react";
import type { Service } from "@/types/content";

const ICONS: Record<string, typeof Code2> = {
  "web-development": Code2,
  branding: Palette,
  "product-management": ClipboardList,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.id] ?? Code2;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative flex h-full min-w-[85%] flex-col justify-between overflow-hidden rounded-card border border-border-subtle bg-surface-glass p-6 backdrop-blur sm:min-w-[320px] md:p-8"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent-purple/20 via-accent-red/10 to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface">
          <Icon className="h-5 w-5 text-white/80" />
        </span>
        <p className="text-sm text-muted">{service.description}</p>
      </div>

      <div className="relative mt-12 flex items-end justify-between">
        <h3 className="font-display text-2xl font-bold md:text-3xl">
          {service.title}
        </h3>
        <span className="font-mono text-muted/50">{service.index}</span>
      </div>
    </motion.div>
  );
}
