import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Hero = () => {

  const [hero, setHero] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "hero");

    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHero(data);
    });
  }, []);
  return (
    <section id="home" className="hero">
      <h1>
        Hello, I'm <span className="highlight">{hero.title}</span>
      </h1>
      <p>{hero.subtitle}</p>
    </section>
  );
};
export default Hero;
