"use client";

import { motion } from "framer-motion";
import styles from "./SkillCard3D.module.css";

interface Skill {
  icon: string;
  title: string;
  skills: string[];
}

export default function SkillCard3D({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.article
      className={styles.cardContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className={styles.card}>
        <div className={styles.cardHeading}>
          <span className={styles.icon} aria-hidden="true">{skill.icon}</span>
          <h3 className={styles.title}>{skill.title}</h3>
        </div>
        <ul className={styles.skillList}>
          {skill.skills.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}
