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
import { coreStack, skillGroups } from "@/data/profile";
import styles from "./SkillsGrid.module.css";

const groupIcons: Record<string, ReactNode> = {
  frontend: <FiCode size={20} />,
  backend: <FiServer size={20} />,
  tools: <FiTool size={20} />,
  practices: <FiLayers size={20} />,
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
  MongoDB: <SiMongodb />,
  "JWT Authentication": <SiJsonwebtokens />,
  "Stripe Payments": <SiStripe />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Postman: <SiPostman />,
  Docker: <SiDocker />,
  Vercel: <SiVercel />,
};

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
  viewport: { once: true, margin: "-40px" },
});

export default function SkillsGrid() {
  return (
    <div className={styles.wrapper}>
      {/* Core stack */}
      <section aria-labelledby="core-stack-heading" className={styles.coreSection}>
        <h3 id="core-stack-heading" className={styles.subheading}>
          Core stack
        </h3>
        <ul className={styles.coreGrid}>
          {coreStack.map((skill, index) => (
            <motion.li key={skill.name} className={styles.coreTile} {...reveal(index * 0.06)}>
              <span className={styles.coreIcon} aria-hidden="true">
                {skillIcons[skill.name] ?? <FiCheckCircle />}
              </span>
              <span className={styles.coreName}>{skill.name}</span>
              <span className={styles.coreNote}>{skill.note}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Full toolkit by category */}
      <section aria-labelledby="toolkit-heading">
        <h3 id="toolkit-heading" className={styles.subheading}>
          Full toolkit
        </h3>
        <div className={styles.grid}>
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.key}
              className={styles.card}
              aria-labelledby={`skills-${group.key}`}
              {...reveal(index * 0.08)}
            >
              <header className={styles.header}>
                <span className={styles.groupIcon} aria-hidden="true">
                  {groupIcons[group.key]}
                </span>
                <div>
                  <h4 id={`skills-${group.key}`} className={styles.title}>
                    {group.title}
                  </h4>
                  <p className={styles.blurb}>{group.blurb}</p>
                </div>
                <span className={styles.count} aria-label={`${group.skills.length} skills`}>
                  {group.skills.length}
                </span>
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
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
