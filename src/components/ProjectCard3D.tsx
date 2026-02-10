"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import styles from "./ProjectCard3D.module.css";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  badge?: string;
}

export default function ProjectCard3D({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.05}
        transitionSpeed={2000}
        gyroscope={true}
        className={styles.tiltCard}
      >
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={project.image} alt={project.title} className={styles.image} />
            {project.badge && (
              <motion.div
                className={styles.badge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                {project.badge}
              </motion.div>
            )}
            <div className={styles.overlay}>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className={styles.tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
