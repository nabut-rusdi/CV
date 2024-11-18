import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Project = () => {

  const [project, setProject] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const projectRef = ref(db, "project");

    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });
  }, []);
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src="./img/frontend.png" alt="Project 1" />
          <div className="project-info">
            <h3>Project Web App</h3>
            <p>{project.pro1}</p>
            
          </div>
        </div>
        <div className="project-card">
          <img src="./img/frontend.png" alt="Project 2" />
          <div className="project-info">
            <h3>Project Web App</h3>
            <p>{project.pro2}</p>
            
          </div>
        </div>
        <div className="project-card">
          <img src="./img/frontend.png" alt="Project 3" />
          <div className="project-info">
            <h3>Project Mobile App</h3>
            <p>{project.pro3}</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
