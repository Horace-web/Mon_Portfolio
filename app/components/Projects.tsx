import { projects } from "@/app/data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center md:text-left">
          Mes Projets
        </h2>

        {/* Grille responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
