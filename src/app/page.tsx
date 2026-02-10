"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import ContactForm from "./contact/ContactUs";
import Background3D from "@/components/Background3D";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingAnimation from "@/components/LoadingAnimation";
import AnimatedHero from "@/components/AnimatedHero";
import ProjectCard3D from "@/components/ProjectCard3D";
import SkillCard3D from "@/components/SkillCard3D";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  const projects = [
    {
      title: "ConvertPK",
      description: "ConvertPK.com is a fast and user-friendly online file conversion platform built with Next.js, allowing users to seamlessly convert PDFs, ZIPs, Base64, images, and more — all directly from their browser with a smooth and responsive experience.",
      image: "/images/convertpk.png",
      tags: ["Next.js", "Node.js", "TypeScript"],
      link: "https://convertpk.com",
      badge: "New",
    },
    {
      title: "Krub.ai",
      description: "Krub enables users to join or build wholesale buying communities, connect with other businesses, share requirements and leverage collective volume to negotiate stronger bargains.",
      image: "/images/krub.png",
      tags: ["Next.js", "Bootstrap", "Node.js", "Mongoose"],
      link: "https://krub.ai",
      badge: "Featured",
    },
    {
      title: "Inventory Management System",
      description: "Developed backend business logic for inventory and accounting, including Chart of Accounts, PDF templating, and Stripe payments. Implemented Chinese translation and collaborated closely with frontend for seamless API communication.",
      image: "/images/inventory.png",
      tags: ["React.js", "Next.js", "Node.js", "Redux"],
      link: "http://inventory.seebiz.com",
      badge: "Featured",
    },
    {
      title: "Books Management System",
      description: "Built backend logic for accounting reports (Chart of Accounts, PDFs, Stripe), integrated with Inventory Management for consistent reporting, added Chinese translation.",
      image: "/images/books.png",
      tags: ["React.js", "Node.js", "Bootstrap"],
      link: "https://books.seebiz.com",
    },
    {
      title: "Expense Management System",
      description: "Implemented backend logic including Chart of Accounts and Stripe integration. Built Trip and Expense modules with admin approvals and role-based access control.",
      image: "/images/expense.png",
      tags: ["React.js", "Node.js", "Bootstrap", "MySQL"],
      link: "https://expense.seebiz.com",
    },
    {
      title: "Admin Panel",
      description: "Built a custom admin panel to manage users and organizations, enabling large-scale updates across accounts. Replaced legacy Chart of Accounts with a flexible, scalable structure.",
      image: "/images/admin.png",
      tags: ["Node.js", "MySQL", "React.js", "Bootstrap"],
      link: "https://admin-inventory.seebiz.com/",
    },
  ];

  const skills = [
    {
      icon: "💻",
      title: "Frontend",
      skills: ["HTML", "CSS (module / Tailwind)", "JavaScript / TypeScript", "React.js", "Next.js", "Responsive & Accessible UI"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      skills: ["Node.js / Express", "MongoDB / Mongoose", "REST & GraphQL APIs", "Authentication & Authorization"],
    },
    {
      icon: "🎨",
      title: "Skills & Tools",
      skills: ["Git / GitHub", "Postman", "Docker (basic)", "CI / CD basics"],
    },
    {
      icon: "📱",
      title: "Services",
      skills: ["API Optimization", "Performance Tuning", "Security", "Multilingual (i18n)"],
    },
  ];

  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
    <SmoothScroll>
      <div className={styles.container}>
        <Background3D />
        <CustomCursor />

        {/* Navigation */}
        <motion.nav
          className={`${styles.nav} ${isScrolled ? styles.navScrolled : ""}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <img
                src="/images/Muhammad Afzaal.jpg"
                alt="Muhammad Afzaal"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              <span className={styles.logoText}>Afzaal</span>
            </div>
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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
            <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ""}`}>
              {["home", "about", "skills", "projects", "testimonials", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={activeSection === section ? styles.active : ""}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home">
          <AnimatedHero />
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionContent}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.sectionSubtitle}>
                Full-Stack developer focused on scalable, high-performance, and secure web apps
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
                <p className={styles.leadText}>
                  Experienced MERN Stack developer with 5+ years of hands-on experience, specializing in modern
                  frontend development using React.js and Next.js. I build fast, accessible, and user-focused
                  applications using TypeScript, Redux Toolkit, React Query and modern CSS (Tailwind / CSS modules).
                </p>
                <p>
                  Passionate about solving complex problems and delivering real business value, I focus on efficient
                  APIs, robust backend systems, and clear domain logic.
                </p>
                <p>
                  I continuously enhance my skills in React.js and Next.js to stay aligned with modern frontend trends
                  and deliver seamless, end-to-end product experiences.
                </p>
              </div>
              <div className={styles.stats}>
                {[
                  { value: "10+", label: "Projects Completed" },
                  { value: "10+", label: "Happy Clients" },
                  { value: "5+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={styles.stat}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContent}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
              <p className={styles.sectionSubtitle}>A comprehensive toolkit for modern web development</p>
            </motion.div>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <SkillCard3D key={skill.title} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <div className={styles.sectionContent}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <p className={styles.sectionSubtitle}>
                A selection of projects showcasing my expertise and problem-solving approach
              </p>
            </motion.div>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <ProjectCard3D key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.sectionContent}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Client Testimonials</h2>
              <p className={styles.sectionSubtitle}>What clients say about working with me</p>
            </motion.div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.sectionContent}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Get In Touch</h2>
              <p className={styles.sectionSubtitle}>Let's discuss how I can help bring your vision to life</p>
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
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  visions. Feel free to reach out!
                </p>
                <div className={styles.contactMethods}>
                  <a href="mailto:afzaalhafeez1020@gmail.com" className={styles.contactItem}>
                    <div className={styles.contactIconWrapper}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span>afzaalhafeez1020@gmail.com</span>
                  </a>
                  <a href="#" className={styles.contactItem}>
                    <div className={styles.contactIconWrapper}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span>Lahore, Pakistan</span>
                  </a>
                </div>
                <div className={styles.socialLinks}>
                  <motion.a
                    href="https://www.linkedin.com/in/afzaal-hafeez-148299209/"
                    aria-label="LinkedIn"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
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

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerGrid}>
              <div className={styles.footerSection}>
                <div className={styles.footerLogo}>
                  <img
                    src="/images/Muhammad Afzaal.jpg"
                    alt="Muhammad Afzaal"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <span>Muhammad Afzaal</span>
                </div>
                <p className={styles.footerTagline}>
                  MERN Stack Developer building scalable web solutions with passion and precision.
                </p>
              </div>
              <div className={styles.footerSection}>
                <h3>Quick Links</h3>
                <ul>
                  {["home", "about", "skills", "projects", "contact"].map((link) => (
                    <li key={link}>
                      <a href={`#${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h3>Contact Info</h3>
                <ul>
                  <li>
                    <a href="mailto:afzaalhafeez1020@gmail.com">afzaalhafeez1020@gmail.com</a>
                  </li>
                  <li>
                    <span>Lahore, Pakistan</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; 2025 Muhammad Afzaal. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Popup Modal */}
        {showPopup && (
          <motion.div
            className={styles.popupOverlay}
            onClick={() => setShowPopup(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.popupContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className={styles.popupClose} onClick={() => setShowPopup(false)} aria-label="Close popup">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className={styles.popupIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className={styles.popupTitle}>Site Temporarily Unavailable</h3>
              <p className={styles.popupMessage}>
                Due to Development or security maintenance site is down right now
              </p>
              <button className={styles.popupButton} onClick={() => setShowPopup(false)}>
                Understood
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </SmoothScroll>
  );
}
