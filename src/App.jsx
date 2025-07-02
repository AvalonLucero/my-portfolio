import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
//import Photo from "./basketball4.jpg";
import LeetCodeSection from "./components/LeetCodeSection";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="portfolio-container">
      <header className={`hero ${scrolled ? 'scrolled' : ''}`}>
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
          transition={{ duration: 1.2 }}
        >
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Avalon Munoz
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Computer Science Graduate | Software Developer | Problem Solver
            </motion.h2>
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="mailto:avalonmunoz78@gmail.com">
                <i className="fas fa-envelope"></i> avalonmunoz78@gmail.com
              </a>
              <a href="tel:+12107404740">
                <i className="fas fa-phone"></i> (210) 740-4740
              </a>
            </motion.div>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/avalon-munoz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/AvalonLucero"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
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
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            About Me
          </motion.h2>
          <motion.div className="about-content" variants={fadeInUp}>
            <motion.div className="profile-photo" variants={scaleIn}>
              <img src={Photo} alt="Avalon Munoz - Computer Science Graduate" />
            </motion.div>
            <div className="bio">
              <motion.p variants={fadeInUp}>
                I'm a passionate Computer Science graduate with a Master's degree and expertise in
                full-stack development. My journey combines rigorous academic training with practical
                experience in Java, Python, JavaScript, and modern frameworks like React.
              </motion.p>
              <motion.p variants={fadeInUp}>
                As a former 5-year Division II student-athlete and team captain, I've developed
                exceptional leadership, teamwork, and time management skills. I thrive in
                collaborative environments and bring the same dedication to software development
                that I brought to athletics.
              </motion.p>
              <motion.p variants={fadeInUp}>
                My specializations include network security, quantum cryptography, and algorithm
                optimization. I'm passionate about solving complex problems and creating innovative
                solutions that make a real impact.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Technical Expertise
          </motion.h2>
          <motion.div className="skills-container" variants={staggerContainer}>
            <motion.div className="glass-card skills-category" variants={fadeInUp}>
              <h3><i className="fas fa-code"></i> Programming Languages</h3>
              <ul>
                <li>Java (Advanced)</li>
                <li>Python (Advanced)</li>
                <li>JavaScript/TypeScript</li>
                <li>C/C++</li>
                <li>HTML5/CSS3</li>
                <li>SQL/NoSQL</li>
              </ul>
            </motion.div>
            <motion.div className="glass-card skills-category" variants={fadeInUp}>
              <h3><i className="fas fa-tools"></i> Frameworks & Technologies</h3>
              <ul>
                <li>React.js/Next.js</li>
                <li>Node.js/Express</li>
                <li>Flask/Django</li>
                <li>Git/GitHub</li>
                <li>Docker/Kubernetes</li>
                <li>AWS/Cloud Services</li>
              </ul>
            </motion.div>
            <motion.div className="glass-card skills-category" variants={fadeInUp}>
              <h3><i className="fas fa-brain"></i> Specialized Knowledge</h3>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Network Security & Cryptography</li>
                <li>Machine Learning/AI</li>
                <li>Quantum Computing</li>
                <li>System Architecture</li>
                <li>Database Design & Optimization</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Featured Projects
          </motion.h2>
          <motion.div className="projects-grid" variants={staggerContainer}>
            <motion.div className="glass-card project-card" variants={fadeInUp}>
              <h3>Algorithm Visualizer</h3>
              <p className="project-tech">React • JavaScript • D3.js • CSS Animations</p>
              <p>
                Interactive web application that visualizes complex sorting and searching algorithms
                with real-time animations, performance metrics, and step-by-step breakdowns.
                Features customizable data sets and speed controls for educational purposes.
              </p>
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
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </motion.div>

            <motion.div className="glass-card project-card" variants={fadeInUp}>
              <h3>Quantum Cryptography Suite</h3>
              <p className="project-tech">Python • Quantum Computing • Cryptography • Security</p>
              <p>
                Advanced implementation of quantum cryptographic protocols including BB84 key
                distribution algorithm. Features quantum key generation, secure communication
                channels, and eavesdropping detection mechanisms.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project3"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-lock"></i> View Project
                </a>
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project3"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </motion.div>

            <motion.div className="glass-card project-card" variants={fadeInUp}>
              <h3>Network Security Analysis Suite</h3>
              <p className="project-tech">Python • Java • Network Protocols • Security Testing</p>
              <p>
                Comprehensive security simulation and analysis suite featuring WPA3 handshake
                protocols, Bluetooth/Zigbee encryption analysis, and automated vulnerability
                assessment tools for enterprise networks.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project4"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-shield-alt"></i> WPA3 Analysis
                </a>
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project5"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-bluetooth"></i> IoT Security
                </a>
              </div>
            </motion.div>

            <motion.div className="glass-card project-card" variants={fadeInUp}>
              <h3>AI-Powered Task Management</h3>
              <p className="project-tech">React • Node.js • Machine Learning • MongoDB</p>
              <p>
                Intelligent task management system with AI-driven priority suggestions, deadline
                predictions, and productivity analytics. Features real-time collaboration,
                smart notifications, and personalized workflow optimization.
              </p>
              <div className="project-links">
                <a href="#" className="btn">
                  <i className="fas fa-brain"></i> Live Demo
                </a>
                <a
                  href="#"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        <LeetCodeSection />

        <motion.section 
          id="education" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Education
          </motion.h2>
          <motion.div className="timeline-container" variants={staggerContainer}>
            <motion.div className="glass-card timeline-item" variants={fadeInUp}>
              <h3>Master of Science in Computer Science</h3>
              <p className="institution">
                University of Texas Permian Basin, Odessa TX
              </p>
              <p className="date">August 2023 - May 2025</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>
                <strong>Specialization:</strong> Advanced Algorithms, Network Security, Quantum Computing
              </p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                <strong>Relevant Coursework:</strong> Machine Learning, Cryptography, Distributed Systems,
                Advanced Data Structures, Software Engineering
              </p>
            </motion.div>
            <motion.div className="glass-card timeline-item" variants={fadeInUp}>
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">
                University of Texas Permian Basin, Odessa TX
              </p>
              <p className="minor">Minor: Mathematics • Magna Cum Laude</p>
              <p className="date">August 2020 - May 2023</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1.1rem' }}>
                <strong>GPA:</strong> 3.8/4.0 • <strong>Honors:</strong> Dean's List (6 semesters)
              </p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                <strong>Leadership:</strong> 5-Year Student-Athlete • Team Captain • Academic Excellence Award
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="experience" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Professional Experience
          </motion.h2>
          <motion.div className="timeline-container" variants={staggerContainer}>
            <motion.div className="glass-card timeline-item" variants={fadeInUp}>
              <h3>Front Desk Mentor & Academic Success Coordinator</h3>
              <p className="company">Success Center, University of Texas Permian Basin</p>
              <p className="date">August 2024 - Present</p>
              <ul className="responsibilities">
                <li>
                  <strong>Student Success Leadership:</strong> Guide 50+ students on academic probation through
                  personalized mentoring programs, achieving 85% improvement in retention rates
                </li>
                <li>
                  <strong>Program Development:</strong> Design and implement time management workshops and
                  organizational skill-building sessions for at-risk students
                </li>
                <li>
                  <strong>Data-Driven Approach:</strong> Track and analyze student progress metrics to optimize
                  intervention strategies and improve academic outcomes
                </li>
                <li>
                  <strong>Cross-Functional Collaboration:</strong> Partner with faculty, advisors, and support
                  staff to create comprehensive student success ecosystems
                </li>
                <li>
                  <strong>Technology Integration:</strong> Utilize academic management systems and data analytics
                  tools to monitor student engagement and academic performance
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 className="section-heading" variants={fadeInUp}>
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.div className="contact-content" variants={fadeInUp}>
            <motion.p variants={fadeInUp}>
              I'm actively seeking new opportunities in software development where I can contribute
              my technical expertise, leadership experience, and passion for innovation. Let's connect
              and discuss how we can create impactful solutions together.
            </motion.p>
            <motion.div className="contact-methods" variants={staggerContainer}>
              <motion.a href="mailto:avalonmunoz78@gmail.com" className="contact-link" variants={fadeInUp}>
                <i className="fas fa-envelope"></i> Email Me
              </motion.a>
              <motion.a href="tel:+12107404740" className="contact-link" variants={fadeInUp}>
                <i className="fas fa-phone"></i> Call Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/avalon-munoz/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                variants={fadeInUp}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/AvalonLucero"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                variants={fadeInUp}
              >
                <i className="fab fa-github"></i> GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <footer>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Avalon Munoz. Crafted with React, passion, and attention to detail.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;