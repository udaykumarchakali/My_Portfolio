import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "ShopEasy E-Commerce",
      description:
        "A responsive e-commerce application built with React JS and DummyJSON API.",
      technologies: ["React JS", "JavaScript", "CSS", "API"],
      github: "#",
      demo: "#"
    },
     
  ];

  return (
    <section id="projects" className="section">

      <div className="container">

        <div className="section-heading">
          <p>What I've Built</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="tech-list">

                {project.technologies.map((tech, i) => (
                  <span key={i}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={"https://github.com/udaykumarchakali/Resume-Project.git"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

               <a
  href="https://resume-project-ashen-seven.vercel.app/"
  target="_blank"
  rel="noreferrer"
>
  <FaExternalLinkAlt />
  Live Demo
</a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;