import type {
  AboutContent,
  Project,
  Service,
  SiteConfig,
  SkillCategory,
  SocialLink,
  TimelineItem,
} from '@/types/content';

export const siteConfig: SiteConfig = {
  name: 'Truong Nguyen Bao Khang',
  shortName: 'Khang',
  email: 'khang.truong05112007@hcmut.edu.vn',
  role: ['WEB DEVELOPER', '& SYSTEM ARCHITECTURE DESIGN'],
  // TODO: replace with a finalized bio paragraph
  bio: "I'm a web developer and system architect seeking to establish a strong online presence through my own portfolio. With a focus on building exceptional digital experiences and well-designed systems, I aim to showcase my expertise to potential collaborators and clients.",
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ],
};

// TODO: replace with your own story and highlights
export const about: AboutContent = {
  heading: 'The story behind the code',
  paragraphs: [
    "I started out curious about how things work under the hood - that curiosity turned into a passion for building software that's both functional and well-architected. Over time I've worked across the stack, from crafting pixel-perfect interfaces to designing the systems that power them.",
    'What drives me is the intersection of clean design and solid engineering. I care as much about how a product feels to use as I do about how maintainable and scalable its codebase is.',
    'Outside of writing code, I enjoy exploring new tools and frameworks, contributing to side projects, and constantly refining my craft - one commit at a time.',
  ],
  highlights: [
    {
      title: 'System-first thinking',
      description:
        'I design with scalability and maintainability in mind from day one, not as an afterthought.',
    },
    {
      title: 'Fast learner',
      description:
        'Comfortable picking up new languages, frameworks, and tools as projects demand.',
    },
    {
      title: 'Detail-oriented UX',
      description:
        'I sweat the small stuff - micro-interactions, performance, and accessibility all matter.',
    },
  ],
};

// TODO: adjust skill levels to reflect your real proficiency
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Figma', level: 60 },
      { name: 'Docker', level: 55 },
      { name: 'Framer Motion', level: 70 },
    ],
  },
];

// TODO: refine descriptions for each service
export const services: Service[] = [
  {
    id: 'web-development',
    index: '01',
    title: 'Web Development',
    description:
      'Building fast, responsive, and scalable web applications using modern frameworks and best practices.',
  },
  {
    id: 'branding',
    index: '02',
    title: 'Branding',
    description:
      'Crafting cohesive visual identities - logos, color systems, and brand guidelines that communicate your story.',
  },
  {
    id: 'product-management',
    index: '03',
    title: 'Product Manager',
    description:
      'Guiding products from concept to launch through research, roadmapping, and cross-functional collaboration.',
  },
];

// TODO: replace placeholder projects with real work, screenshots, and links
export const projects: Project[] = [
  {
    id: 'aquaguard',
    name: 'Aquaguard',
    description:
      'Monitor water levels, receive early warnings, coordinate rescue efforts, and protect communities in real-time.',
    image: '/images/projects/aquaguard-logo.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://aquaguard.vn',
  },
  {
    id: 'task-flow',
    name: 'Task Flow',
    description:
      'Full-stack Todo app (React + Vite, Express, PostgreSQL) - dockerized with auto-deploy to VPS via GitHub Actions.',
    image: '/images/projects/taskflow.png',
    tech: ['React', 'Express', 'PostgreSQL', 'Docker'],
    liveUrl: 'http://103.82.21.174',
  },
  {
    id: 'solar-system',
    name: '3D Web & Solar System',
    description:
      'Interactive 3D Solar System & Galaxy portfolio built with Three.js, GLSL shaders, and NASA 2K textures. Features realistic planets, an animated Sun, particle effects, and an educational planet info panel.',
    image: '/images/projects/3D-solarsystem.png',
    tech: ['Three.js', 'GLSL', 'JavaScript'],
    liveUrl: 'https://3-d-web-solarsystem.vercel.app',
  },
  {
    id: 'nestshop',
    name: 'NestShop',
    description:
      'A modern e-commerce storefront with product browsing, cart, and checkout flow.',
    image: '/images/projects/nestshop.png',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://web-banyen.vercel.app',
  },
  {
    id: 'license-plate',
    name: 'Computer Vision - Vehicle License Plate Tracking',
    description:
      'Real-time vehicle license plate detection and tracking from video using computer vision and OCR.',
    image: '/images/projects/licenseplate-detect.png',
    tech: ['Python', 'OpenCV', 'YOLO'],
    // TODO: githubUrl, liveUrl
  },
];

// TODO: update with your real experience, education, and certificates
export const timeline: TimelineItem[] = [
  {
    id: 'hcmut',
    type: 'education',
    title: 'B.Eng. in Computer Science',
    organization: 'Ho Chi Minh City University of Technology (HCMUT)',
    period: '2025 - Present',
    description:
      'Focusing on software engineering, system design, and web development.',
  },
  {
    id: 'freelance-web',
    type: 'work',
    title: 'Freelance Web Developer',
    organization: 'Self-employed',
    period: '2024 - Present',
    description:
      "Designing and building websites for small businesses, including Aquaguard's product site.",
  },
  {
    id: 'highschool',
    type: 'education',
    title: 'High School Diploma',
    organization: 'Specialized High School',
    period: '2022 - 2025',
    description:
      'Specialized program with a focus on mathematics and informatics.',
  },
];

// TODO: update with your real social links
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
  { label: 'Email', url: `mailto:${siteConfig.email}`, icon: 'mail' },
];
