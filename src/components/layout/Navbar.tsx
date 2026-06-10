"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/content";
import { GradientText } from "@/components/ui/GradientText";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          {siteConfig.shortName}
        </Link>

        <motion.a
          href={`mailto:${siteConfig.email}`}
          className="group flex items-center gap-1 text-xs sm:text-sm"
          whileHover="hover"
          initial="rest"
        >
          <span className="hidden text-white/50 sm:inline">Contact -</span>
          <GradientText className="font-medium">{siteConfig.email}</GradientText>
          <motion.span
            variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
            transition={{ duration: 0.2 }}
            className="text-accent-purple"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </header>
  );
}
