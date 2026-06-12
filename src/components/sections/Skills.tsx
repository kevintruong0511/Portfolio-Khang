import { Code2 } from "lucide-react";
import { skillCategories } from "@/data/content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const CATEGORY_ACCENTS: Record<string, string> = {
  languages: "bg-gradient-to-b from-accent-orange to-accent-red",
  frontend: "bg-gradient-to-b from-accent-red to-accent-orange",
  backend: "bg-gradient-to-b from-accent-orange to-accent-purple",
  infra: "bg-gradient-to-b from-accent-purple to-accent-red",
};

const DEFAULT_ACCENT = "bg-gradient-to-b from-accent-red to-accent-purple";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Skills & Tech Stack</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 flex flex-col gap-6">
        {skillCategories.map((category, index) => {
          const accent = CATEGORY_ACCENTS[category.id] ?? DEFAULT_ACCENT;
          return (
            <RevealOnScroll key={category.id} delay={index * 0.1}>
              <div className="glow-border flex flex-col gap-6 rounded-card border border-border-subtle bg-surface-glass p-6 backdrop-blur md:p-8">
                <div className="flex items-center gap-3">
                  <span className={cn("h-6 w-1.5 rounded-pill", accent)} />
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-3 rounded-lg border border-border-subtle bg-surface px-4 py-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-purple/50 hover:bg-gradient-to-br hover:from-accent-red/10 hover:to-accent-purple/10"
                    >
                      {skill.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={
                          skill.icon.startsWith("http")
                            ? skill.icon
                            : `https://cdn.simpleicons.org/${skill.icon}/${skill.iconColor ?? "FFFFFF"}`
                        }
                          alt=""
                          aria-hidden="true"
                          className={cn(
                            "h-12 w-12",
                            skill.invertIcon && "invert"
                          )}
                          loading="lazy"
                        />
                      ) : (
                        <Code2 className="h-12 w-12 text-accent-purple" />
                      )}
                      <span className="text-center text-sm font-medium text-white/90">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
