import React from "react";
import "./App.css";
import Photo from "./basketball4.jpg";

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero">
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <h1>Avalon Munoz</h1>
          <h2>Computer Science Graduate | Software Developer</h2>
          <div className="contact-info">
            <a href="mailto:avalonmunoz78@gmail.com">avalonmunoz78@gmail.com</a>
            <span> • </span>
            <a href="tel:+12107404740">(210) 740-4740</a>
          </div>
          <div className="social-links">
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
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-heading">About Me</h2>
          <div className="about-content">
            <img src={Photo} alt="Avalon Munoz" className="profile-photo" />
            <div className="bio">
              <p>
                I'm a Computer Science graduate with some expertise in
                full-stack development and a passion for solving complex
                problems. My background includes experience with Java, Python,
                and JavaScript frameworks, along with specialized knowledge in
                network security and quantum cryptography.
              </p>
              <p>
                As a 5 year Division II student-athlete and team captain, I've
                developed strong leadership and teamwork skills that translate
                directly to collaborative development environments.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Frameworks & Tools</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Flask</li>
                <li>Git/GitHub</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3>Concepts</h3>
              <ul>
                <li>Data Structures & Algorithms</li>
                <li>Network Security</li>
                <li>AI Development</li>
                <li>Quantum Computing</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-heading">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Algorithm Visualizer</h3>
              <p className="project-tech">React, JavaScript</p>
              <p>Web-based tool to visualize binary search algorithms</p>
              <div className="project-links">
                <a href="#" className="btn">
                  View Demo
                </a>
                <a
                  href="https://github.com/AvalonLucero/algorithm-visualizer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <h3>Quantum Crypto Implementation</h3>
              <p className="project-tech">Python, Quantum Concepts</p>
              <p>
                Quantum cryptographic key exchange algorithm for secure
                communication
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project3"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <h3>Network Security Simulations</h3>
              <p className="project-tech">
                Python and Java, Encryption Protocols
              </p>
              <p>
                Multiple simulations including WPA3 handshake and
                Bluetooth/Zigbee encryption
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project4"
                  className="btn"
                >
                  Handshake
                </a>
                <a
                  href="https://github.com/AvalonLucero/UTPB-COSC-6350-Project5"
                  className="btn"
                >
                  Bluetooth/Zigbee
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section-heading">Education</h2>
          <div className="education-container">
            <div className="education-item">
              <h3>M.S. Computer Science</h3>
              <p className="institution">
                University of Texas Permian Basin, Odessa TX
              </p>
              <p className="date">August 2023 - May 2025</p>
            </div>
            <div className="education-item">
              <h3>B.S. Computer Science</h3>
              <p className="institution">
                University of Texas Permian Basin, Odessa TX
              </p>
              <p className="minor">Minor: Mathematics (Magna Cum Laude)</p>
              <p className="date">August 2020 - May 2023</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-item">
            <h3>Front Desk Mentor</h3>
            <p className="company">Success Center, UTPB</p>
            <p className="date">Aug 2024 - Present</p>
            <ul className="responsibilities">
              <li>
                Guide students on probation to enhance time management and
                organizational skills
              </li>
              <li>
                Coordinate tutoring schedules and monitor academic progress
              </li>
              <li>Implement strategies for academic improvement</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-heading">Contact</h2>
          <div className="contact-content">
            <p>
              I'm currently looking for new opportunities. Feel free to reach
              out!
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
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Avalon Munoz</p>
      </footer>
    </div>
  );
}

export default App;
