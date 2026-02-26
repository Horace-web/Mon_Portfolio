import { projects } from "@/app/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <div className="container-custom">

        <div className="text-center md:text-left mb-12">
          <h2 className="section-title gradient-text">Mes Projets</h2>
          <p className="section-subtitle">Une sélection de mes réalisations les plus récentes.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`reveal reveal-delay-${(index % 3) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}