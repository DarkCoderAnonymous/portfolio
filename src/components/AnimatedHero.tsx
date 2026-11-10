"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiLinkedin, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { profile } from "@/data/profile";
import styles from "./AnimatedHero.module.css";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const typeSequence = profile.roles.flatMap((role) => [role, 2200]);

  return (
    <section className={styles.hero}>
      <motion.div className={styles.heroContent} variants={containerVariants} initial="hidden" animate="visible">
        <div className={styles.heroText}>
          <motion.p className={styles.greeting} variants={itemVariants} transition={{ duration: 0.6 }}>
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className={styles.heroName} variants={itemVariants} transition={{ duration: 0.6 }}>
            {profile.name}
          </motion.h1>

          <motion.div className={styles.heroTitle} variants={itemVariants}>
            <TypeAnimation sequence={typeSequence} wrapper="h2" speed={50} repeat={Infinity} />
          </motion.div>

          <motion.p className={styles.heroDescription} variants={itemVariants} transition={{ duration: 0.6 }}>
            {profile.summary}
          </motion.p>

          <motion.div className={styles.heroBadges} variants={itemVariants} transition={{ duration: 0.6 }}>
            <span className={styles.badge}>
              <span className={styles.statusDot} aria-hidden="true" />
              {profile.availability}
            </span>
            <span className={styles.badge}>
              <FiMapPin aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>

          <motion.div className={styles.heroButtons} variants={itemVariants} transition={{ duration: 0.6 }}>
            <motion.a
              href="#projects"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              View my work
              <FiArrowRight aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.ul className={styles.socials} variants={itemVariants} transition={{ duration: 0.6 }}>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn profile"
              >
                <FiLinkedin size={18} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className={styles.socialLink} aria-label="Send an email">
                <FiMail size={18} aria-hidden="true" />
                <span>Email</span>
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div className={styles.heroImage} variants={itemVariants} transition={{ duration: 0.8 }}>
          <motion.div
            className={styles.imagePlaceholder}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={400}
              height={400}
              priority
              className={styles.profileImage}
            />
            <div className={styles.glowEffect}></div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <motion.div className={styles.mouse} animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <div className={styles.wheel}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
