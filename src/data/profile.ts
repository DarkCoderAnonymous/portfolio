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
  yearsExperience: "7+",
  photo: "/images/Muhammad Afzaal.jpg",
  summary:
    "Full-stack JavaScript engineer with 7+ years of experience shipping production web applications. I specialise in React and Next.js on the frontend and Node.js, Express and MongoDB on the backend, with a strong focus on performance, accessibility and clean, maintainable code.",
  about: [
    "I build end-to-end products: from accessible, responsive interfaces in React, Next.js and TypeScript to secure REST APIs, authentication, payments and reporting on the backend.",
    "Most of my recent work has been on business software — inventory, accounting, expense and admin platforms — where I own backend domain logic such as Chart of Accounts, PDF reporting, Stripe billing, role-based access control and multilingual support.",
    "I care about measurable outcomes: faster pages, fewer bugs, clear APIs and features that solve real problems for users and teams.",
  ],
  stats: [
    { value: "7+", label: "Years of experience" },
    { value: "15+", label: "Production projects" },
    { value: "10+", label: "Happy clients & teams" },
  ],
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  employmentType: "Full-time" | "Part-time" | "Freelance" | "Contract";
  workMode: "On-site" | "Remote" | "Hybrid";
  startDate: string; // YYYY-MM
  endDate: string | null; // null = Present
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: string[];
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatMonth = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};

export const formatPeriod = (e: Pick<Experience, "startDate" | "endDate">) =>
  `${formatMonth(e.startDate)} — ${e.endDate ? formatMonth(e.endDate) : "Present"}`;

export const experience: Experience[] = [
  {
    id: "turnfeat",
    company: "Turnfeat.ai",
    role: "Full-Stack Developer",
    employmentType: "Part-time",
    workMode: "Remote",
    startDate: "2026-06",
    endDate: null,
    location: "Los Angeles, USA",
    summary:
      "Part-time remote role on TurnFeat AI, a platform that turns software ideas into structured project plans with AI and matches each module with specialist freelance developers.",
    highlights: [
      "Build client- and freelancer-facing features with React.js, Next.js and TypeScript, including complex multi-step workflows across both modules.",
      "Develop reusable UI components shared across the platform's dashboards.",
      "Implement backend features and REST APIs with Node.js, Express.js and MongoDB, and connect them to the frontend.",
      "Integrate AI-driven workflows (requirement gathering, project breakdown) into the user interface.",
      "Collaborate asynchronously with a distributed remote team.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    links: ["https://turnfeat.ai"],
  },
  {
    id: "seebiz",
    company: "SeeBiz PVT LTD",
    role: "Senior React.js Developer",
    employmentType: "Full-time",
    workMode: "On-site",
    startDate: "2021-10",
    endDate: null,
    location: "Lahore, Pakistan",
    summary:
      "Frontend developer on SeeBiz's suite of cloud business applications for wholesale businesses: Inventory, Books (accounting), Expense Management and a shared Admin Panel, plus related client products.",
    highlights: [
      "Inventory Management: built React.js interfaces for products and SKUs, stock levels, multi-warehouse and multi-store views, sales and purchase orders, invoices and low-stock alerts.",
      "Books (cloud accounting): built screens for invoicing, expenses, payments, bank reconciliation, contacts and financial reports (balance sheet, P&L, cash flow).",
      "Expense & Trip Management: built the Trip and Expense module UIs, approval workflows and role-based views for CEO, HR, Manager and Employee users.",
      "Admin Panel: built the React.js admin interface for managing users and organizations across all three products, including the new Chart of Accounts interface.",
      "Qalam QATS: developed React.js dashboard interfaces for Qalam's education platform.",
      "Legal Documents: built the Next.js frontend for a document-automation platform (template/questionnaire admin panel and user portal that generates customised PDF documents).",
      "Implemented Chinese localisation (i18n) and Stripe billing screens on the frontend.",
      "Built reusable components and consistent UI patterns shared across products, and integrated every module with REST APIs in close collaboration with the backend team.",
    ],
    stack: ["React.js", "Next.js", "JavaScript", "Bootstrap", "REST APIs", "Stripe", "i18n"],
    links: ["https://inventory.seebiz.com", "https://books.seebiz.com", "https://expense.seebiz.com", "https://qats.qalam.it"],
  },
  {
    id: "helpicon",
    company: "Helpicon",
    role: "Web Developer",
    employmentType: "Freelance",
    workMode: "Remote",
    startDate: "2023-11",
    endDate: "2025-07",
    location: "Sweden",
    summary:
      "International remote engagement with Helpicon, a Sweden-based digital service marketplace that connects individuals and businesses with reliable service providers (\"Helpers\") for everyday tasks. Worked directly with a European client across time zones to deliver the full web platform.",
    highlights: [
      "Designed and developed the Helpicon web platform with a modern, responsive user experience using Next.js.",
      "Built intuitive service discovery across multiple categories, with structured pages for each service offering.",
      "Implemented clear user journeys for posting tasks and finding suitable Helpers.",
      "Created landing page sections that communicate the platform's value proposition to the Swedish market.",
      "Delivered responsive layouts, strong usability and cross-device compatibility, with a consistent visual identity that strengthened the brand's online presence.",
      "Collaborated remotely with an international stakeholder, handling requirements, feedback and delivery asynchronously.",
    ],
    stack: ["Next.js", "React.js", "Redux Toolkit", "Ant Design", "Git", "Responsive Web Design"],
    links: ["https://helpicon.se"],
  },
  {
    id: "spyresync",
    company: "SpyreSync",
    role: "Senior React.js Developer",
    employmentType: "Full-time",
    workMode: "On-site",
    startDate: "2020-11",
    endDate: "2021-11",
    location: "Pakistan",
    summary: "Frontend developer building React.js web applications and admin dashboards for client businesses.",
    highlights: [
      "Mooner (on-demand service marketplace, Mooner Pte Ltd): developed the React.js web admin panel used to run the platform, managing customers and service providers (including approvals and verification), service requests, quotes and bookings, payments, commissions and payouts, and the referral program, with reporting dashboards.",
      "Lanceria: React.js frontend for a freelance marketplace connecting clients with freelancers.",
      "Built reusable dashboard components and integrated admin screens with REST APIs.",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Jira"],
  },
  {
    id: "mdsol",
    company: "MDSol Technologies",
    role: "React.js Developer",
    employmentType: "Full-time",
    workMode: "On-site",
    startDate: "2019-01",
    endDate: "2020-12",
    location: "Lahore, Pakistan",
    summary: "Built React.js websites and admin dashboards for marketplace products, mainly for clients in France.",
    highlights: [
      "Batilinks: developed the React.js dashboard for a French construction and renovation marketplace where companies manage their profiles and customers find contractors and specify projects in detail, from materials to paint and lighting; companies are ranked by ratings.",
      "iCust Live: React.js frontend for an event-management and coupon-generation platform.",
      "Lessepsadmi: React.js frontend for a construction platform modelled on Batilinks, with additional features.",
      "Integrated dashboards with backend APIs and built reusable UI components.",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Jira"],
  },
];

export type Project = {
  title: string;
  category: "Company" | "Client" | "Personal";
  role: string;
  client?: string;
  description: string;
  image: string;
  /** "contain" for logos that must not be cropped */
  imageFit?: "cover" | "contain";
  tags: string[];
  link?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "TurnFeat AI",
    category: "Client",
    role: "Full-Stack Developer",
    description:
      "AI-powered project planning and freelance marketplace. Turns rough software ideas into structured plans with modules, priorities and effort estimates, then matches clients with freelancers and handles hiring, messaging, contracts, wallets and payments in one place.",
    image: "/images/projects/turnfeat.jpg",
    tags: ["Next.js", "React.js", "TypeScript", "Node.js", "Express", "MongoDB", "AI APIs"],
    link: "https://turnfeat.ai/",
    badge: "Featured",
  },
  {
    title: "Krub — Wholesale Communities",
    category: "Client",
    role: "Full-Stack Developer",
    description:
      "Group-buying platform where businesses join or build wholesale communities, share requirements and use collective volume to negotiate better pricing than they could alone.",
    image: "/images/projects/krub.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Bootstrap"],
    link: "https://krub.ai",
    badge: "Featured",
  },
  {
    title: "Helpicon — Service Marketplace",
    category: "Client",
    role: "Frontend Developer",
    client: "Helpicon, Sweden",
    description:
      "Responsive digital service marketplace for a Sweden-based client, covering service discovery, task posting and helper-matching user journeys.",
    image: "/images/projects/helpicon.jpg",
    tags: ["Next.js", "React.js", "Responsive UI"],
    link: "https://helpicon.se",
  },
  {
    title: "QATS — Qalam Platform",
    category: "Client",
    role: "Frontend Developer",
    description:
      "Web-based assessment and analytics platform. Built reusable React components, responsive dashboards with course statistics and quiz performance, structured pages and backend API integration.",
    image: "/images/projects/qats.jpg",
    tags: ["React.js", "JavaScript", "REST APIs", "Charts"],
    link: "https://qats.qalam.it",
  },
  {
    title: "SeeBiz Inventory",
    category: "Company",
    role: "Frontend Developer",
    description:
      "Enterprise inventory management for wholesale businesses: products and SKUs, multi-warehouse stock, sales and purchase orders, invoicing, analytics, roles and low-stock alerts. Built the data-heavy dashboards and reusable UI.",
    image: "/images/projects/seebiz-inventory.jpg",
    tags: ["React.js", "JavaScript", "REST APIs", "Dashboards"],
    link: "https://inventory.seebiz.com/login",
  },
  {
    title: "SeeBiz Books",
    category: "Company",
    role: "Full-Stack Developer",
    description:
      "Cloud accounting SaaS covering invoicing, expenses, bank reconciliation, tax, financial reports and multi-currency. Owned accounting report logic, Chart of Accounts, PDF generation and Stripe payments.",
    image: "/images/projects/seebiz-books.jpg",
    tags: ["React.js", "Node.js", "Stripe", "PDF Reports"],
    link: "https://books.seebiz.com",
  },
  {
    title: "MarkLab Inc. — Medical Billing Website",
    category: "Client",
    role: "Frontend Developer",
    client: "MarkLab Inc., USA",
    description:
      "Corporate website for a US medical billing and Revenue Cycle Management company: service pages, specialty directory, testimonials, healthcare blog and lead-generation forms, all fully responsive.",
    image: "/images/projects/marklab.png",
    imageFit: "contain",
    tags: ["React.js", "JavaScript", "Responsive UI", "SEO"],
    link: "https://marklabinc.com/",
  },
  {
    title: "SeeBiz Expense",
    category: "Company",
    role: "Backend Developer",
    description:
      "Expense management platform. Built backend logic including Chart of Accounts and Stripe integration, plus Trip and Expense modules with admin approvals and role-based access control.",
    image: "/images/projects/expense.jpg",
    tags: ["Node.js", "Express", "Stripe", "RBAC"],
    link: "https://expense.seebiz.com/login",
  },
  {
    title: "Mooner — Admin Panel",
    category: "Client",
    role: "Frontend Developer",
    description:
      "Web admin panel for Mooner, an on-demand service marketplace. Dashboards for users, providers, service categories and bookings with data tables, forms, filters and REST API integration.",
    image: "/images/projects/mooner.png",
    imageFit: "contain",
    tags: ["React.js", "JavaScript", "REST APIs", "Admin Dashboard"],
    link: "https://play.google.com/store/apps/details?id=com.app.mooner&hl=en",
  },
  {
    title: "BATILINKS — Dealer Management Dashboard",
    category: "Client",
    role: "Frontend Developer",
    client: "BATILINKS, Algeria",
    description:
      "Centralised admin dashboard for an industrial equipment and intralogistics dealer: inventory and work-order tables, management forms, admin workflows and backend API integration.",
    image: "/images/projects/batilinks.jpg",
    tags: ["React.js", "JavaScript", "REST APIs", "Admin Dashboard"],
    link: "https://meijer-handling-solutions.com/",
  },
];

export type CoreSkill = { name: string; note: string };

/** Shown as large tiles at the top of the Skills section. */
export const coreStack: CoreSkill[] = [
  { name: "React.js", note: "Primary UI library since 2019" },
  { name: "Next.js", note: "App Router, SSR, SEO-ready sites" },
  { name: "TypeScript", note: "Typed, maintainable codebases" },
  { name: "Node.js", note: "APIs, auth and business logic" },
  { name: "Express.js", note: "REST API design and middleware" },
  { name: "MongoDB", note: "Schema design with Mongoose" },
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
