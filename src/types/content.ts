export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  highlights: { title: string; description: string }[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface TimelineItem {
  id: string;
  type: "work" | "education" | "certificate";
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  email: string;
  role: string[];
  bio: string;
  navLinks: NavLink[];
}
