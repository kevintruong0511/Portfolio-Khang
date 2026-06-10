import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 border-t border-border-subtle px-6 py-8 text-sm text-muted md:flex-row md:justify-between md:px-12">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="transition-colors hover:text-white"
      >
        {siteConfig.email}
      </a>
    </footer>
  );
}
