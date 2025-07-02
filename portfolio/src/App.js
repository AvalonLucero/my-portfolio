import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import Photo from "./basketball4.jpg";
import LeetCodeSection from "./components/LeetCodeSection";

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="portfolio-container">
      <header className="hero">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#leetcode">LeetCode</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <motion.section 
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Avalon Munoz
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Science Graduate | Software Developer
            </motion.h2>
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="mailto:avalonmunoz78@gmail.com">avalonmunoz78@gmail.com</a>
              <span> • </span>
              <a href="tel:+12107404740">(210) 740-4740</a>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/avalon-munoz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/AvalonLucero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="about" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            About Me
          </motion.h2>
          <motion.div className="about-content" variants={fadeInUp}>
            <div className="profile-photo">
              <img src={Photo} alt="Avalon Munoz" />
            </div>
            <div className="bio">
              <p>
                I'm a Computer Science graduate with expertise in
                full-stack development and a passion for solving complex
                problems. My background includes experience with Java, Python,
                and JavaScript frameworks, along with specialized knowledge in
                network security and quantum cryptography.
              </p>
              <p>
                As a 5-year Division II student-athlete and team captain, I've
                developed strong leadership and teamwork skills that translate
                directly to collaborative development environments. I thrive on
                challenges and continuously seek to expand my technical knowledge
                through practical application and innovative projects.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Technical Skills
          </motion.h2>
          <motion.div className="skills-container" variants={fadeInUp}>
            <div className="glass-card skills-category">
              <h3><i className="fas fa-code"></i> Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="glass-card skills-category">
              <h3><i className="fas fa-tools"></i> Frameworks & Tools</h3>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="glass-card skills-category">
              <h3><i className="fas fa-brain"></i> Core Concepts</h3>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Network Security</li>
                <li>AI/Machine Learning</li>
                <li>Quantum Computing</li>
                <li>System Design</li>
                <li>Database Management</li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Featured Projects
          </motion.h2>
          <motion.div className="projects-grid" variants={fadeInUp}>
            <div className="glass-card project-card">
              <h3>Algorithm Visualizer</h3>
              <p className="project-tech">React, JavaScript, D3.js</p>
              <p>Interactive web-based tool to visualize various sorting and searching algorithms with step-by-step animations and performance metrics.</p>
              <div className="project-links">
                <a href="#" className="btn">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a
                  href="https://github.com/AvalonLucero/algorithm-visualizer"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
            <div className="glass-card project-card">
              <h3>Quantum Crypto Implementation</h3>
              <p className="project-tech">Python, Quantum Computing, Cryptography</p>
              <p>
                Implementation of quantum cryptographic protocols including BB84 key distribution
                algorithm for secure communication channels.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project3"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
            <div className="glass-card project-card">
              <h3>Network Security Suite</h3>
              <p className="project-tech">
                Python, Java, Network Protocols
              </p>
              <p>
                Comprehensive security simulation suite including WPA3 handshake protocols,
                Bluetooth/Zigbee encryption, and vulnerability assessment tools.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project4"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-shield-alt"></i> WPA3 Handshake
                </a>
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project5"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-bluetooth"></i> Bluetooth/Zigbee
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <LeetCodeSection />

        <motion.section 
          id="education" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Education
          </motion.h2>
          <motion.div className="timeline-container" variants={fadeInUp}>
            <div className="glass-card timeline-item">
              <h3>M.S. Computer Science</h3>
              <p className="institution">
                University of Texas Permian Basin, Odessa TX
              </p>
              <p className="date">August 2023 - May 2025</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                Focus on Advanced Algorithms, Network Security, and Quantum Computing
              </p>
            </div>
            <div className="glass-card timeline-item">
              <h3>B.S. Computer Science</h3>
              <p className="institution">
                University of Texas Permian Basin, Odessa TX
              </p>
              <p className="minor">Minor: Mathematics (Magna Cum Laude)</p>
              <p className="date">August 2020 - May 2023</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                GPA: 3.8/4.0 • Dean's List • Student-Athlete
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="experience" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Experience
          </motion.h2>
          <motion.div className="timeline-container" variants={fadeInUp}>
            <div className="glass-card timeline-item">
              <h3>Front Desk Mentor</h3>
              <p className="company">Success Center, UTPB</p>
              <p className="date">Aug 2024 - Present</p>
              <ul className="responsibilities">
                <li>
                  Guide students on academic probation to enhance time management and
                  organizational skills, resulting in 85% improvement in student retention
                </li>
                <li>
                  Coordinate tutoring schedules and monitor academic progress for 50+ students
                </li>
                <li>
                  Implement personalized strategies for academic improvement and career development
                </li>
                <li>
                  Collaborate with faculty and staff to create comprehensive support systems
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Let's Connect
          </motion.h2>
          <motion.div className="contact-content" variants={fadeInUp}>
            <p>
              I'm actively seeking new opportunities in software development.
              Let's discuss how we can work together to create something amazing!
            </p>
            <div className="contact-methods">
              <a href="mailto:avalonmunoz78@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i> Email Me
              </a>
              <a href="tel:+12107404740" className="contact-link">
                <i className="fas fa-phone"></i> Call Me
              </a>
              <a
                href="https://www.linkedin.com/in/avalon-munoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/AvalonLucero"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Avalon Munoz. Built with React and passion for code.</p>
      </footer>
    </div>
  );
}

export default App;