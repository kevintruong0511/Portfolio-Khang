import { about } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

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
              {about.heading}
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
            {about.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-card border border-border-subtle bg-surface-glass p-6 backdrop-blur"
              >
                <h4 className="font-display text-lg font-bold">
                  {highlight.title}
                </h4>
                <p className="mt-2 text-sm text-muted">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
