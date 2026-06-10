"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = trackRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-12"
    >
      <RevealOnScroll>
        <SectionHeading
          actions={
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous services"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next services"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          }
        >
          Services
        </SectionHeading>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => (
            <div key={service.id} className="snap-start">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
