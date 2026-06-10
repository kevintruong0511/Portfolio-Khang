import { skillCategories } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SkillBar } from "@/components/ui/SkillBar";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Skills & Tech Stack</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 flex flex-col gap-6">
        {skillCategories.map((category, index) => (
          <RevealOnScroll key={category.id} delay={index * 0.1}>
            <div className="flex h-full flex-col gap-6 rounded-card border border-border-subtle bg-surface-glass p-6 backdrop-blur md:p-8">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
