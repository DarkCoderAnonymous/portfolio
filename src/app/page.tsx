"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import styles from "./page.module.css";
import ContactForm from "./contact/ContactUs";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedHero from "@/components/AnimatedHero";
import ProjectCard3D from "@/components/ProjectCard3D";
import SkillsGrid from "@/components/SkillsGrid";
import Experience from "@/components/Experience";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, projects, navSections } from "@/data/profile";

const sectionHeader = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      for (const section of navSections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const year = new Date().getFullYear();

  return (
    <SmoothScroll>
      <div className={styles.container}>
        {/* Navigation */}
        <motion.nav
          className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Primary"
        >
          <div className={styles.navContent}>
            <a href="#home" className={styles.logo} aria-label="Back to top">
              <Image
                src={profile.photo}
                alt=""
                width={32}
                height={32}
                style={{ borderRadius: "50%", marginRight: "8px", objectFit: "cover" }}
              />
              <span className={styles.logoText}>{profile.shortName}</span>
            </a>
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-nav"
            >
              <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            {isMobileMenuOpen && (
              <div className={styles.mobileMenuOverlay} onClick={() => setIsMobileMenuOpen(false)} />
            )}
            <ul id="primary-nav" className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ""}`}>
              {navSections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={activeSection === section ? styles.active : ""}
                    aria-current={activeSection === section ? "location" : undefined}
                  >
                    {capitalize(section)}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.navActions}>
              <a href={`mailto:${profile.email}`} className={styles.navContact}>
                Hire me
              </a>
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>

        <main>
          {/* Hero */}
          <section id="home">
            <AnimatedHero />
          </section>

          {/* About */}
          <section id="about" className={styles.section}>
            <div className={styles.sectionContent}>
              <motion.div className={styles.sectionHeader} {...sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <p className={styles.sectionSubtitle}>
                  Full-stack developer focused on scalable, high-performance and secure web applications
                </p>
              </motion.div>
              <motion.div
                className={styles.aboutContent}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.aboutText}>
                  {profile.about.map((paragraph, i) => (
                    <p key={i} className={i === 0 ? styles.leadText : undefined}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className={styles.stats}>
                  {profile.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className={styles.stat}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className={`${styles.section} ${styles.sectionDark}`}>
            <div className={styles.sectionContent}>
              <motion.div className={styles.sectionHeader} {...sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>Experience</h2>
                <p className={styles.sectionSubtitle}>Where I have worked and what I have shipped</p>
              </motion.div>
              <Experience />
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className={styles.section}>
            <div className={styles.sectionContent}>
              <motion.div className={styles.sectionHeader} {...sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
                <p className={styles.sectionSubtitle}>The toolkit I use to build modern web products</p>
              </motion.div>
              <SkillsGrid />
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className={`${styles.section} ${styles.sectionDark}`}>
            <div className={styles.sectionContent}>
              <motion.div className={styles.sectionHeader} {...sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Featured Projects</h2>
                <p className={styles.sectionSubtitle}>
                  A selection of products I have built for companies, clients and myself
                </p>
              </motion.div>
              <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                  <ProjectCard3D key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className={styles.section}>
            <div className={styles.sectionContent}>
              <motion.div className={styles.sectionHeader} {...sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Client Testimonials</h2>
                <p className={styles.sectionSubtitle}>What clients say about working with me</p>
              </motion.div>
              <TestimonialCarousel />
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className={`${styles.section} ${styles.sectionDark}`}>
            <div className={styles.sectionContent}>
              <motion.div className={styles.sectionHeader} {...sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <p className={styles.sectionSubtitle}>Have a project in mind or a role to fill? Let&apos;s talk.</p>
              </motion.div>
              <div className={styles.contactContent}>
                <motion.div
                  className={styles.contactInfo}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p>
                    I&apos;m open to full-time roles, contract work and interesting collaborations. The fastest way
                    to reach me is email or LinkedIn.
                  </p>
                  <div className={styles.contactMethods}>
                    <a href={`mailto:${profile.email}`} className={styles.contactItem}>
                      <div className={styles.contactIconWrapper}>
                        <FiMail size={20} aria-hidden="true" />
                      </div>
                      <span>{profile.email}</span>
                    </a>
                    <div className={styles.contactItem}>
                      <div className={styles.contactIconWrapper}>
                        <FiMapPin size={20} aria-hidden="true" />
                      </div>
                      <span>{profile.location}</span>
                    </div>
                  </div>
                  <div className={styles.socialLinks}>
                    <motion.a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className={styles.socialLink}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiLinkedin size={20} aria-hidden="true" />
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>
                </motion.div>
                <motion.div
                  className={styles.contactFormWrapper}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerGrid}>
              <div className={styles.footerSection}>
                <div className={styles.footerLogo}>
                  <Image
                    src={profile.photo}
                    alt=""
                    width={40}
                    height={40}
                    style={{ borderRadius: "50%", marginRight: "10px", objectFit: "cover" }}
                  />
                  <span>{profile.name}</span>
                </div>
                <p className={styles.footerTagline}>{profile.headline}</p>
              </div>
              <div className={styles.footerSection}>
                <h3>Quick Links</h3>
                <ul>
                  {navSections
                    .filter((s) => s !== "testimonials")
                    .map((link) => (
                      <li key={link}>
                        <a href={`#${link}`}>{capitalize(link)}</a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h3>Contact</h3>
                <ul>
                  <li>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <span>{profile.location}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>
                &copy; {year} {profile.name}. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
