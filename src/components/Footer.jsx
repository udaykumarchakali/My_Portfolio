import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        <div>
          <h3>Uday<span>.</span></h3>
          <p>
            Python Full Stack Developer
          </p>
        </div>

        <div className="footer-social">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Uday Kumar.
          Made with <FaHeart /> using React.
        </p>

      </div>

    </footer>
  );
}

export default Footer;