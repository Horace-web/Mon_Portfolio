import Image from "next/image"
import { Project } from "@/app/types/project"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card flex flex-col">

      <div className="w-full h-48 relative mb-5 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="project-header">
        <h3>{project.title}</h3>
        {project.year && <span className="project-year">{project.year}</span>}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-2">
        {project.githubUrl && (
          <a href={project.githubUrl} className="project-link">GitHub →</a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} className="project-link" style={{ color: "var(--accent-gold)" }}>Live →</a>
        )}
      </div>

    </div>
  )
}