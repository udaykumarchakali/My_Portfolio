import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="section experience-section">

      <div className="container">

        <div className="section-heading">
          <p>My Professional Journey</p>
          <h2>Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <span className="timeline-date">
                Jan/2026 - June/2026
              </span>

              <h3>
                Frontend Developer
              </h3>

              <h4>
                OpsBrain
              </h4>

              <p>
                Worked on frontend development and built responsive
                user interfaces using modern web technologies.
              </p>

              <div className="tech-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React JS</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;