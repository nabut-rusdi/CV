import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const About = () => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src={`data:image/jpeg;base64, ${about.image}`}
          className="profile-image"
        />
        <div className="about-text">
          <p>
            Hello! I'm a Front-End Developer with a passion for creating
            beautiful, functional, and user-centered digital experiences.
            Currently in my 4th year at Universitas Klabat, I am honing my
            skills and deepening my understanding of web technologies.
          </p>
          <p>
            I'm proficient in HTML, CSS, JavaScript, and various modern
            frameworks. When I'm not coding, you can find me exploring new
            technologies, contributing to open-source projects, or enjoying the
            great outdoors.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
