"use client";

import { useState, type FormEvent } from "react";
import { Briefcase, FileCode, Mail, AtSign } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { SocialLink } from "@/types/content";

const ICONS: Record<SocialLink["icon"], typeof Mail> = {
  github: FileCode,
  linkedin: Briefcase,
  twitter: AtSign,
  mail: Mail,
};

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 md:px-12">
      <RevealOnScroll>
        <SectionHeading>Contact</SectionHeading>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-col gap-6">
            <p className="max-w-md text-base text-muted md:text-lg">
              Have a project in mind or just want to say hi? My inbox is always
              open - I&apos;ll get back to you as soon as I can.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = ICONS[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.icon === "mail" ? undefined : "_blank"}
                    rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                    aria-label={link.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-surface-glass transition-colors hover:border-accent-purple hover:text-accent-purple"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-white/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-white/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-white/70">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="resize-none rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-pill bg-gradient-to-r from-accent-red to-accent-purple px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
