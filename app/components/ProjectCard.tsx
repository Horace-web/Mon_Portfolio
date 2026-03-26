import Image from "next/image"
import Link from "next/link"
import { Project } from "@/app/types/project"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card h-full">
      {/* Image du projet */}
      <div className="w-full h-48 relative mb-5 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Header : Titre + Année */}
      <div className="project-header">
        <h3>{project.title}</h3>
        {project.year && <span className="project-year">{project.year}</span>}
      </div>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Technologies */}
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      {/* Liens GitHub / Live */}
      <div className="flex gap-4 mt-auto pt-2">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" >
            Live →
          </a>
        )}
      </div>

      {/* Flèche vers la page de détails (ID) */}
      {project.hasDetail && (
        <Link 
          href={`/Projects/${project.id}`} 
          className="project-arrow" 
          aria-label={`Voir les détails de ${project.title}`}
        >
          ↗
        </Link>
      )}
    </div>
  )
}