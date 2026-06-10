"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types/content";

export function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-white/90">{skill.name}</span>
        <span className="font-mono text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-pill bg-surface">
        <motion.div
          className="h-full rounded-pill bg-gradient-to-r from-accent-red to-accent-purple"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
