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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
        <h1 className="order-2 font-display font-bold uppercase leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,6rem)] lg:order-1">
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
            className="block"
          >
            I&apos;M {siteConfig.shortName.toUpperCase()}
          </motion.span>

          <motion.span
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="relative my-3 inline-block md:my-4"
          >
            <GridOverlay className="inset-0 -z-10" />
            <span className="relative inline-block border border-dashed border-white/20 px-3 py-1.5">
              <GradientText>{siteConfig.role[0]}</GradientText>
            </span>
          </motion.span>

          <motion.span
            custom={3}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="block text-[clamp(1.5rem,4vw,3.25rem)]"
          >
            {siteConfig.role[1]}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 mx-auto aspect-square w-full max-w-xs sm:max-w-sm lg:order-2 lg:max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent-red/40 via-accent-purple/30 to-transparent blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-surface-glass">
            <Image
              src="/images/avatar/Khang-hinh2.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
