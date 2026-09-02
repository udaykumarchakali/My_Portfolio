import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap
} from "react-icons/fa";

import { SiDjango, SiFastapi, SiMysql, SiVercel } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Vercel", icon: <SiVercel /> }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="container">

        <div className="section-heading">
          <p>My Technical Skills</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;