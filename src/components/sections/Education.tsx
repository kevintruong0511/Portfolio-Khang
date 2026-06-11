import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Education</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {education.map((item, i) => (
          <RevealOnScroll key={item.id} delay={0.1 * (i + 1)}>
            <article className="flex h-full flex-col gap-4 rounded-card border border-border-subtle bg-surface-glass p-6 backdrop-blur md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-red/20 to-accent-purple/20 text-accent-purple">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  {item.period}
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-white/70">{item.degree}</p>
              </div>

              {item.gpa && (
                <span className="w-fit rounded-pill border border-accent-purple/30 bg-gradient-to-r from-accent-red/15 to-accent-purple/15 px-4 py-1.5 text-sm font-medium text-white/90">
                  GPA {item.gpa}
                </span>
              )}

              {item.description && (
                <p className="text-sm text-muted md:text-base">
                  {item.description}
                </p>
              )}
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
