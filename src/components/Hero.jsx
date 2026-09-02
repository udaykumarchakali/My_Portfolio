import {
  FaGithub,
  FaLinkedin,
  FaArrowDown
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <p className="hero-small">
            Hello, I'm
          </p>

          <h1>Uday Kumar</h1>

          <h2>Python Full Stack Developer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using React, JavaScript, Python and backend technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

          </div>

          <div className="social-links">

            {/* GitHub */}
            <a
              href="https://github.com/udaykumarchakali/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/udaykumarchakali/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Profile Image */}
        <div className="hero-image">

          <div className="profile-circle">
            <img
              src="/profile.jpg"
              alt="Uday Kumar"
            />
          </div>

        </div>

      </div>

      {/* Scroll Down */}
      <a href="#about" className="scroll-down">
        <FaArrowDown />
      </a>

    </section>
  );
}

export default Hero;