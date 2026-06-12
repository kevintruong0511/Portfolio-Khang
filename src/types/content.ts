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
  icon?: string;
  iconColor?: string;
  invertIcon?: boolean;
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

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
  images?: string[];
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
