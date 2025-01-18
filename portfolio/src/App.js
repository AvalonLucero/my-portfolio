import "./App.css";
import img from "./profile.JPG"

function App() {
  return (
    <div>
      <header className="hero">
        <nav>
          <a>Home</a>
          <a>About</a>
          <a>Projects</a>
          <a>Education</a>
          <a>Contact</a>
        </nav>
      </header>

      <main>
        <div className="main">
          <h1>
            <span className="name">Avalon Munoz</span>
          </h1>
          <div>avalon.munoz@gmail.com</div>
          <h3>Computer Science/Software Engineer</h3>
          <p className="subtitle">
            I create projects I learn in my different courses.
          </p>
          <ul className="social-links">
            <li>
              <a href="https://github.com/AvalonLucero" target="_blank">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/avalon-munoz/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <section id="about">
          <h2 className="section-heading">About Me</h2>
          <img src={img} alt="Avalon Munoz" className="profile-img" />
          <div className="about-content">
            What I do today is play basketball. It is my fifth year and I am a
            captain. I am from San Antonio, Texas and attended the University of
            Texas Permian Basin.
          </div>
          <div className="about-skills">
            <h3>My Skills</h3>
          </div>
          <div className="skills">HTML, CSS, Java, JavaScript, Python</div>
        </section>

        <section id="projects">
          <h2 className="section-heading">Projects</h2>
          <div className="project-content">
            <div className="project-content-details">
              <h3>Project 1</h3>
              <p>This is one of my projects.</p>
              <a href="#" className="btn">
                View Project
              </a>
            </div>
            <div className="project-content-details">
              <h3>Project 2</h3>
              <p>This is another project I worked on.</p>
              <a href="#" className="btn">
                View Project
              </a>
            </div>
          </div>
        </section>

        <section id="education">
          <h2 className="section-heading">Education</h2>
          <div className="education-content">
            <div className="education-item">
              <h3>Master's in Computer Science</h3>
              <p>University of Texas Permian Basin</p>
              <p>Expected Graduation: May 2025</p>
            </div>
            <div className="education-item">
              <h3>Bachelor's in Computer Science</h3>
              <p>University of Texas Permian Basin</p>
              <p>Graduated: May 2023</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-heading">Contact Me</h2>
          <div className="contact-content">
            <p>
              Feel free to reach out via 
              <a href="mailto:avalon.munoz@gmail.com">email</a> or check my
              resume below:
            </p>
            <a href="resume.pdf" className="btn" download>
              Download My Resume
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Avalon Munoz</p>
      </footer>
    </div>
  );
}

export default App;
