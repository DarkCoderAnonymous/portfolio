"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./SkillCard3D.module.css";

interface Skill {
  icon: string;
  title: string;
  skills: string[];
}

export default function SkillCard3D({ skill, index }: { skill: Skill; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={styles.cardContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={styles.card}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.05, y: -10 }}
      >
        {/* Front */}
        <div className={styles.cardFront}>
          <motion.div
            className={styles.iconWrapper}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className={styles.icon}>{skill.icon}</span>
          </motion.div>
          <h3 className={styles.title}>{skill.title}</h3>
          <p className={styles.hint}>Click to explore</p>
        </div>

        {/* Back */}
        <div className={styles.cardBack}>
          <h3 className={styles.backTitle}>{skill.title}</h3>
          <ul className={styles.skillList}>
            {skill.skills.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
