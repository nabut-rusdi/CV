const About = () => {
  return (
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
            Hello! I'm a web developer with a passion for creating beautiful,
            functional, and user-centered digital experiences. With 5 years of
            experience in the field, I am always looking for new and innovative
            ways to bring my clients' visions to life.
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
