const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Project 1" />
          <div className="project-info">
            <h3>Project 1</h3>
            <p>A responsive e-commerce website built with React and Node.js.</p>
            <a src="/public/img/frontend.png" className="project-link">
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Project 2" />
          <div className="project-info">
            <h3>Project 2</h3>
            <p>An interactive dashboard using D3.js and Vue.js.</p>
            <a href="#" className="project-link">
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="/placeholder.svg?height=200&width=300" alt="Project 3" />
          <div className="project-info">
            <h3>Project 3</h3>
            <p>A mobile app for task management developed with React Native.</p>
            <a href="#" className="project-link">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
