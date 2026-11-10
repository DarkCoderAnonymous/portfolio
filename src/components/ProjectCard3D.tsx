"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/profile";
import styles from "./ProjectCard3D.module.css";

export default function ProjectCard3D({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1000}
        scale={1.02}
        transitionSpeed={1500}
        className={styles.tiltCard}
      >
        <article className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className={styles.image}
            />
            {project.badge && (
              <motion.div
                className={styles.badge}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                {project.badge}
              </motion.div>
            )}
            {project.link && (
              <div className={styles.overlay}>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Open ${project.title} live site`}
                >
                  <FiExternalLink size={18} aria-hidden="true" />
                  Visit live site
                </motion.a>
              </div>
            )}
          </div>
          <div className={styles.content}>
            <p className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.role}>{project.role}</span>
            </p>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.tags} aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                <FiExternalLink size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
}
