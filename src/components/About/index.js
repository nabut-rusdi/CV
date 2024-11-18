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
            {about.p1}
          </p>
          <p>
            {about.p2}
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
