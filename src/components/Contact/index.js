const Contact = () => {
  return (
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
  );
};
export default Contact;
