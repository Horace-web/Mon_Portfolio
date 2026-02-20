import Image from "next/image"
import { Project } from "@/app/types/project"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-[#111317] border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500 transition duration-300 flex flex-col overflow-hidden">
      
      <div className="w-full h-48 relative mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.githubUrl && (
          <a href={project.githubUrl} className="text-cyan-400 hover:underline">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-yellow-400 hover:underline">
            Live
          </a>
        )}
      </div>
    </div>
  )
}