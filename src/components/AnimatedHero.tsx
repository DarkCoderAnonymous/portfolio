"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import styles from "./AnimatedHero.module.css";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.heroText}>
          <motion.p className={styles.greeting} variants={itemVariants} transition={{ duration: 0.8 }}>
            Hello, I'm
          </motion.p>
          
          <motion.h1 className={styles.heroName} variants={itemVariants} transition={{ duration: 0.8 }}>
            Muhammad Afzaal
          </motion.h1>
          
          <motion.div className={styles.heroTitle} variants={itemVariants}>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Specialist",
                2000,
                "React.js Expert",
                2000,
                "Next.js Developer",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p className={styles.heroDescription} variants={itemVariants} transition={{ duration: 0.8 }}>
            Frontend-focused MERN developer with 5+ years building fast,
            accessible, and maintainable web interfaces using React and Next.js.
            I combine strong UI/UX sensibilities with solid backend experience
            (Node/Express/MongoDB) to deliver end-to-end products.
          </motion.p>
          
          <motion.div className={styles.heroBadges} variants={itemVariants} transition={{ duration: 0.8 }}>
            <motion.span
              className={styles.badge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Available for Hire
            </motion.span>
            <motion.span
              className={styles.badge}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 5+ Years Experience
            </motion.span>
          </motion.div>
          
          <motion.div className={styles.heroButtons} variants={itemVariants} transition={{ duration: 0.8 }}>
            <motion.a
              href="#projects"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          className={styles.heroImage}
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.imagePlaceholder}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/images/Muhammad Afzaal.jpg"
              alt="Muhammad Afzaal"
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
      >
        <motion.div
          className={styles.mouse}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className={styles.wheel}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
