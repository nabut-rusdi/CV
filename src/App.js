import "./assets/css/style.css";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">YourName</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <h1>
            Hello, I'm <span className="highlight">Your Name</span>
          </h1>
          <p>
            A passionate web developer creating modern and responsive websites.
          </p>
          <a href="#contact" className="cta-button">
            Get in Touch
          </a>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Your Name"
              className="profile-image"
            />
            <div className="about-text">
              <p>
                Hello! I'm a web developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With 5 years of experience in the field, I am always looking for
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p>
                I'm proficient in HTML, CSS, JavaScript, and various modern
                frameworks. When I'm not coding, you can find me exploring new
                technologies, contributing to open-source projects, or enjoying
                the great outdoors.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Project 1"
              />
              <div className="project-info">
                <h3>Project 1</h3>
                <p>
                  A responsive e-commerce website built with React and Node.js.
                </p>
                <a href="#" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Project 2"
              />
              <div className="project-info">
                <h3>Project 2</h3>
                <p>An interactive dashboard using D3.js and Vue.js.</p>
                <a href="#" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Project 3"
              />
              <div className="project-info">
                <h3>Project 3</h3>
                <p>
                  A mobile app for task management developed with React Native.
                </p>
                <a href="#" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <form>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer>
        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <i data-feather="github" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <i data-feather="linkedin" />
          </a>
          <a href="#" aria-label="Twitter">
            <i data-feather="twitter" />
          </a>
        </div>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
      <div className="scroll-to-top" aria-label="Scroll to top">
        <i data-feather="arrow-up" />
      </div>
    </div>
  );
};

export default App;
