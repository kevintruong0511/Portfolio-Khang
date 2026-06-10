"use client";

import { motion } from "framer-motion";

const BAR_COUNT = 7;

export function GlitchText() {
  return (
    <span
      className="mx-2 inline-flex h-[0.85em] items-end gap-[3px] align-baseline"
      aria-hidden="true"
    >
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <motion.span
          key={i}
          className="inline-block w-[6px] origin-bottom bg-white"
          style={{ height: "100%" }}
          animate={{ scaleY: [1, 0.35, 1], opacity: [0.9, 0.4, 0.9] }}
          transition={{
            duration: 1.2 + (i % 3) * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </span>
  );
}
