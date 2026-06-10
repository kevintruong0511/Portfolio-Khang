import { timeline } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TimelineEntry } from "@/components/ui/TimelineEntry";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Experience & Education</SectionHeading>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="mt-10 max-w-2xl border-l border-border-subtle pl-8">
          {timeline.map((item) => (
            <TimelineEntry key={item.id} item={item} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
