"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/content";
import { GradientText } from "@/components/ui/GradientText";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-white/80 transition-colors hover:text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

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
          <GradientText className="hidden font-medium sm:inline">
            {siteConfig.email}
          </GradientText>
          <GradientText className="font-medium sm:hidden">Email</GradientText>
          <motion.span
            variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
            transition={{ duration: 0.2 }}
            className="text-accent-purple"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border-subtle md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border-subtle py-3 text-sm text-white/80 transition-colors last:border-b-0 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
