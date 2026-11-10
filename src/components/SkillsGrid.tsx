"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool, FiLayers, FiCheckCircle } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiJsonwebtokens,
  SiStripe,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { skillGroups } from "@/data/profile";
import styles from "./SkillsGrid.module.css";

const groupIcons: Record<string, ReactNode> = {
  frontend: <FiCode size={22} />,
  backend: <FiServer size={22} />,
  tools: <FiTool size={22} />,
  practices: <FiLayers size={22} />,
};

const skillIcons: Record<string, ReactNode> = {
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "JavaScript (ES2023)": <SiJavascript />,
  "Redux Toolkit": <SiRedux />,
  "React Query": <SiReactquery />,
  "Tailwind CSS": <SiTailwindcss />,
  "CSS Modules": <SiCss3 />,
  CSS3: <SiCss3 />,
  Bootstrap: <SiBootstrap />,
  "Framer Motion": <SiFramer />,
  HTML5: <SiHtml5 />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  GraphQL: <SiGraphql />,
  "MongoDB / Mongoose": <SiMongodb />,
  "JWT Authentication": <SiJsonwebtokens />,
  "Stripe Payments": <SiStripe />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Postman: <SiPostman />,
  Docker: <SiDocker />,
  Vercel: <SiVercel />,
};

export default function SkillsGrid() {
  return (
    <div className={styles.grid}>
      {skillGroups.map((group, index) => (
        <motion.section
          key={group.key}
          className={styles.card}
          aria-labelledby={`skills-${group.key}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <header className={styles.header}>
            <span className={styles.groupIcon} aria-hidden="true">
              {groupIcons[group.key]}
            </span>
            <div>
              <h3 id={`skills-${group.key}`} className={styles.title}>
                {group.title}
              </h3>
              <p className={styles.blurb}>{group.blurb}</p>
            </div>
          </header>

          <ul className={styles.chips}>
            {group.skills.map((skill) => (
              <li key={skill} className={styles.chip}>
                <span className={styles.chipIcon} aria-hidden="true">
                  {skillIcons[skill] ?? <FiCheckCircle />}
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
}
