import Image from "next/image";
import { Trophy } from "lucide-react";
import { awards } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Awards() {
  return (
    <section id="awards" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Awards</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 flex flex-col gap-8">
        {awards.map((award, i) => (
          <RevealOnScroll key={award.id} delay={0.1 * (i + 1)}>
            <article className="rounded-card border border-border-subtle bg-surface-glass p-6 backdrop-blur md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-red/20 to-accent-purple/20 text-accent-purple">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-snug md:text-2xl">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    {award.issuer} · {award.year}
                  </p>
                </div>
              </div>

              {award.description && (
                <p className="mt-4 text-sm text-muted md:text-base">
                  {award.description}
                </p>
              )}

              {award.images && award.images.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {award.images.map((src) => (
                    <a
                      key={src}
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative aspect-video overflow-hidden rounded-lg border border-border-subtle bg-surface"
                    >
                      <Image
                        src={src}
                        alt={`${award.title} - certificate`}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
