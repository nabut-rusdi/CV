import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/nabut-rusdi" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="Rusdi Nabut" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="Rusdi Nabut" aria-label="Twitter">
          <FaTwitter size={24} />
        </a>
      </div>
      <p>© 2024 Rusdi Nabut. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
