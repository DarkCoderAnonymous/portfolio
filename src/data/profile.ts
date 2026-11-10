/**
 * Single source of truth for portfolio content.
 * Edit this file to update the site — no component changes needed.
 */

export const profile = {
  name: "Muhammad Afzaal",
  shortName: "Afzaal",
  initials: "MA",
  headline: "MERN Stack Developer · React & Next.js Specialist",
  roles: ["MERN Stack Developer", "React.js Engineer", "Next.js Developer", "Full-Stack JavaScript Developer"],
  location: "Lahore, Pakistan",
  email: "afzaalhafeez1020@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-afzaal-m-anwar-hafeez-148299209/",
  availability: "Open to full-time & freelance work",
  yearsExperience: "5+",
  photo: "/images/Muhammad Afzaal.jpg",
  summary:
    "Full-stack JavaScript engineer with 5+ years of experience shipping production web applications. I specialise in React and Next.js on the frontend and Node.js, Express and MongoDB on the backend, with a strong focus on performance, accessibility and clean, maintainable code.",
  about: [
    "I build end-to-end products: from accessible, responsive interfaces in React, Next.js and TypeScript to secure REST APIs, authentication, payments and reporting on the backend.",
    "Most of my recent work has been on business software — inventory, accounting, expense and admin platforms — where I own backend domain logic such as Chart of Accounts, PDF reporting, Stripe billing, role-based access control and multilingual support.",
    "I care about measurable outcomes: faster pages, fewer bugs, clear APIs and features that solve real problems for users and teams.",
  ],
  stats: [
    { value: "5+", label: "Years of experience" },
    { value: "10+", label: "Production projects" },
    { value: "10+", label: "Happy clients & teams" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string; // TODO: verify dates against your LinkedIn profile
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "SeeBiz",
    role: "MERN Stack Developer",
    type: "Full-time",
    location: "Lahore, Pakistan",
    period: "2021 — Present",
    summary:
      "Building and maintaining a suite of business SaaS products — Inventory, Books, Expense management and an internal Admin Panel — used by organisations to run their day-to-day operations.",
    highlights: [
      "Designed and implemented accounting backend logic including Chart of Accounts, ledgers and financial reports shared across Inventory and Books.",
      "Integrated Stripe subscriptions and payments, and built PDF templating for invoices, statements and reports.",
      "Built Trip and Expense modules with multi-level admin approvals and role-based access control.",
      "Developed a custom Admin Panel to manage users and organisations and perform large-scale account updates safely.",
      "Added Chinese localisation (i18n) and worked closely with frontend engineers on API contracts and performance.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
  },
  {
    company: "Freelance & Contract",
    role: "Full-Stack JavaScript Developer",
    type: "Remote",
    location: "Worldwide",
    period: "2020 — Present",
    summary:
      "Delivering complete web products for startups and small businesses — from UI design implementation to APIs, databases and deployment.",
    highlights: [
      "Krub.ai — B2B wholesale buying-community platform built with Next.js, Node.js and MongoDB.",
      "ConvertPK.com — browser-based file conversion platform (PDF, ZIP, Base64, images) built with Next.js and Node.js.",
      "MarkLab Provider Data Portal — healthcare provider data, invoices and insurance management with attestation workflows.",
      "Legal document platform — admin dashboard for users, document templates, generated documents and payment history.",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Node.js", "MongoDB", "Bootstrap", "Tailwind CSS"],
  },
];

export type Project = {
  title: string;
  category: "Company" | "Client" | "Personal";
  role: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "ConvertPK",
    category: "Personal",
    role: "Full-stack · Design to deployment",
    description:
      "Fast, privacy-friendly online file conversion platform. Converts PDFs, ZIPs, Base64, images and more directly in the browser with a smooth, responsive experience.",
    image: "/images/convertpk.png",
    tags: ["Next.js", "TypeScript", "Node.js"],
    link: "https://convertpk.com",
    badge: "New",
  },
  {
    title: "Krub.ai",
    category: "Client",
    role: "Full-stack developer",
    description:
      "B2B platform where businesses join or build wholesale buying communities, share requirements and leverage collective volume to negotiate stronger bargains.",
    image: "/images/krub.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Bootstrap"],
    link: "https://krub.ai",
    badge: "Featured",
  },
  {
    title: "Inventory Management System",
    category: "Company",
    role: "Backend & integrations · SeeBiz",
    description:
      "Inventory and accounting SaaS. Built Chart of Accounts, PDF templating and Stripe payments, added Chinese translation and owned API design with the frontend team.",
    image: "/images/inventory.png",
    tags: ["React.js", "Next.js", "Node.js", "Redux"],
    link: "http://inventory.seebiz.com",
    badge: "Featured",
  },
  {
    title: "Books Management System",
    category: "Company",
    role: "Backend & reporting · SeeBiz",
    description:
      "Accounting product with Chart of Accounts, financial reports, PDF exports and Stripe billing, integrated with Inventory for consistent cross-product reporting.",
    image: "/images/books.png",
    tags: ["React.js", "Node.js", "Bootstrap"],
    link: "https://books.seebiz.com",
  },
  {
    title: "Expense Management System",
    category: "Company",
    role: "Backend & workflows · SeeBiz",
    description:
      "Trip and expense tracking with multi-level admin approvals, role-based access control, Chart of Accounts and Stripe integration.",
    image: "/images/expense.png",
    tags: ["React.js", "Node.js", "Bootstrap"],
    link: "https://expense.seebiz.com",
  },
  {
    title: "Admin Panel",
    category: "Company",
    role: "Full-stack · SeeBiz",
    description:
      "Internal admin console to manage users and organisations across products, run large-scale account updates and replace the legacy Chart of Accounts with a flexible structure.",
    image: "/images/admin.png",
    tags: ["React.js", "Node.js", "Bootstrap"],
    link: "https://admin-inventory.seebiz.com/",
  },
  {
    title: "MarkLab Provider Data Portal",
    category: "Client",
    role: "Full-stack developer",
    description:
      "Healthcare provider data portal for MarkLab Inc. Super-admin dashboard for providers, invoices and insurances with attestation reminders, review history and downloadable state applications.",
    image: "/images/marklab.png",
    tags: ["React.js", "Node.js", "RBAC"],
  },
  {
    title: "Legal Document Platform",
    category: "Client",
    role: "Full-stack developer",
    description:
      "Admin platform for a legal-tech product: user management, document templates, generated documents and payment history with live usage dashboards.",
    image: "/images/legal.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Payments"],
  },
];

export type SkillGroup = {
  key: string;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    title: "Frontend",
    blurb: "Fast, accessible, responsive interfaces",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES2023)",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "CSS Modules",
      "Bootstrap",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    key: "backend",
    title: "Backend",
    blurb: "Secure APIs and solid domain logic",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "MongoDB / Mongoose",
      "JWT Authentication",
      "Stripe Payments",
      "PDF Generation",
    ],
  },
  {
    key: "tools",
    title: "Tools & DevOps",
    blurb: "Shipping and collaborating with confidence",
    skills: ["Git", "GitHub", "Postman", "Docker", "Vercel", "CI / CD", "VS Code"],
  },
  {
    key: "practices",
    title: "Practices",
    blurb: "How I keep products healthy",
    skills: [
      "Performance Optimisation",
      "Web Accessibility (a11y)",
      "Internationalisation (i18n)",
      "Role-Based Access Control",
      "API Design",
      "Code Review",
    ],
  },
];

export const navSections = ["home", "about", "experience", "skills", "projects", "testimonials", "contact"] as const;
