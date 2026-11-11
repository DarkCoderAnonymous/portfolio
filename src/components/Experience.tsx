"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from "react-icons/fi";
import { experience, formatPeriod } from "@/data/profile";
import styles from "./Experience.module.css";

const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function Experience() {
  return (
    <ol className={styles.timeline} aria-label="Work experience">
      {experience.map((job, index) => {
        const isCurrent = job.endDate === null;
        return (
          <motion.li
            key={job.id}
            className={styles.item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.1 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <span className={`${styles.marker} ${isCurrent ? styles.markerCurrent : ""}`} aria-hidden="true">
              <FiBriefcase size={16} />
            </span>

            <article className={styles.card}>
              <header className={styles.header}>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>
                    {job.company}{" "}
                    <span className={styles.type}>
                      · {job.employmentType} · {job.workMode}
                    </span>
                  </p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <FiCalendar size={14} aria-hidden="true" />
                    {formatPeriod(job)}
                    {isCurrent && <span className={styles.current}>Current</span>}
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

              <div className={styles.footer}>
                <ul className={styles.stack} aria-label="Technologies used">
                  {job.stack.map((tech) => (
                    <li key={tech} className={styles.tag}>
                      {tech}
                    </li>
                  ))}
                </ul>
                {job.links && job.links.length > 0 && (
                  <ul className={styles.links} aria-label="Related links">
                    {job.links.map((url) => (
                      <li key={url}>
                        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          {hostname(url)}
                          <FiExternalLink size={12} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </motion.li>
        );
      })}
    </ol>
  );
}
