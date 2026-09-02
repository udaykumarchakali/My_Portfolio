import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">

        <div className="section-heading">
          <p>My Academic Background</p>
          <h2>Education</h2>
        </div>

        {/* Diploma */}
        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div>
            <span className="education-date">
              Completed
            </span>

            <h3>
              Diploma in Computer Science Engineering
            </h3>

            <p>
              Completed a Diploma in Computer Science Engineering (CSE),
              gaining foundational knowledge in programming, computer
              science, and software development.
            </p>
          </div>
        </div>
        <br></br>

        {/* Degree */}
        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div>
            <span className="education-date">
              Currently Pursuing
            </span>

            <h3>
              Bachelor's Degree
            </h3>

            <p>
              Currently studying in the 1st year of my Bachelor's Degree
              while continuing to develop my skills in Python Full Stack
              Development and modern web technologies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;