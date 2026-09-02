import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>
              Passionate Developer Building Digital Experiences
            </h3>

            <p>
              I am a Python Full Stack Developer with a strong interest
              in creating modern and responsive web applications.
            </p>

            <p>
              I enjoy working with frontend technologies like HTML, CSS,
              JavaScript and React JS, along with backend technologies
              such as Python, Django and FastAPI.
            </p>

            <p>
              I am continuously learning new technologies and improving
              my development skills by building real-world projects.
            </p>

          </div>

          <div className="about-cards">

            <div className="about-card">
              <FaCode />
              <h4>Frontend</h4>
              <p>React, JavaScript, HTML, CSS</p>
            </div>

            <div className="about-card">
              <FaLaptopCode />
              <h4>Backend</h4>
              <p>Python, Django, FastAPI</p>
            </div>

            <div className="about-card">
              <FaDatabase />
              <h4>Database</h4>
              <p>MySQL, SQLite</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;