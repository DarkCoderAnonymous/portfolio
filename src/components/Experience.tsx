"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { experience } from "@/data/profile";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <ol className={styles.timeline} aria-label="Work experience">
      {experience.map((job, index) => (
        <motion.li
          key={`${job.company}-${job.role}`}
          className={styles.item}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className={styles.marker} aria-hidden="true">
            <FiBriefcase size={16} />
          </span>

          <article className={styles.card}>
            <header className={styles.header}>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>
                  {job.company} <span className={styles.type}>· {job.type}</span>
                </p>
              </div>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <FiCalendar size={14} aria-hidden="true" />
                  {job.period}
                </span>
                <span className={styles.metaItem}>
                  <FiMapPin size={14} aria-hidden="true" />
                  {job.location}
                </span>
              </div>
            </header>

            <p className={styles.summary}>{job.summary}</p>

            <ul className={styles.highlights}>
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <ul className={styles.stack} aria-label="Technologies used">
              {job.stack.map((tech) => (
                <li key={tech} className={styles.tag}>
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        </motion.li>
      ))}
    </ol>
  );
}
