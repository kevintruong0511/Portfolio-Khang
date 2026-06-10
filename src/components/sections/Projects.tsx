import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Projects</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
