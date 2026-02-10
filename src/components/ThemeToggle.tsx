"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className={styles.toggleTrack}
        animate={{
          backgroundColor: theme === "dark" ? "#8b5cf6" : "#f3f4f6",
        }}
      >
        <motion.div
          className={styles.toggleThumb}
          animate={{
            x: theme === "dark" ? 24 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
