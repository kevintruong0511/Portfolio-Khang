"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";
import { GradientText } from "@/components/ui/GradientText";
import { GlitchText } from "@/components/ui/GlitchText";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { DiagonalLines } from "@/components/ui/DiagonalLines";
import { GridOverlay } from "@/components/ui/GridOverlay";

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden px-6 pb-24 pt-16 md:px-12"
    >
      <NoiseOverlay />
      <DiagonalLines />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.5rem,8vw,6.5rem)]">
          <motion.span
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center"
          >
            HI
            <GlitchText />
            THERE
          </motion.span>

          <motion.span
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="relative flex items-center gap-6"
          >
            <span className="relative -ml-2 hidden h-24 w-24 shrink-0 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-accent-red/30 via-accent-purple/20 to-transparent backdrop-blur-sm sm:inline-block md:h-32 md:w-32">
              <span className="absolute inset-0 -z-10 rounded-full bg-accent-red/30 blur-3xl" />
              <Image
                src="/images/avatar/Khang-UTS.png"
                alt={siteConfig.name}
                fill
                priority
                sizes="(min-width: 768px) 8rem, 6rem"
                className="object-cover"
              />
            </span>
            I&apos;M {siteConfig.shortName.toUpperCase()}
          </motion.span>

          <motion.span
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="relative inline-block py-2"
          >
            <GridOverlay className="-inset-x-2 -inset-y-1 -z-10" />
            <span className="relative border border-dashed border-white/20 px-2">
              <GradientText>{siteConfig.role[0]}</GradientText>
            </span>
          </motion.span>

          <motion.span
            custom={3}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="block text-[clamp(1.5rem,5vw,4rem)]"
          >
            {siteConfig.role[1]}
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
