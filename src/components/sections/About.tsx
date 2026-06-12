import { Lightbulb, Rocket, Sparkles } from "lucide-react";
import { about } from "@/data/content";
import { GradientText } from "@/components/ui/GradientText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const HIGHLIGHT_ICONS = [Lightbulb, Rocket, Sparkles];
const HIGHLIGHT_ACCENTS = [
  "text-accent-red border-accent-red/30 from-accent-red/15",
  "text-accent-orange border-accent-orange/30 from-accent-orange/15",
  "text-accent-purple border-accent-purple/30 from-accent-purple/15",
];

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>About Me</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              <GradientText>{about.heading}</GradientText>
            </h3>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-muted md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col gap-4">
            {about.highlights.map((highlight, index) => {
              const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];
              const accent =
                HIGHLIGHT_ACCENTS[index % HIGHLIGHT_ACCENTS.length];
              return (
                <div
                  key={highlight.title}
                  className={`group flex items-start gap-4 rounded-card border bg-gradient-to-br to-transparent p-6 backdrop-blur transition-transform duration-200 hover:-translate-y-1 ${accent}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface transition-transform duration-200 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground">
                      {highlight.title}
                    </h4>
                    <p className="mt-2 text-sm text-muted">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
