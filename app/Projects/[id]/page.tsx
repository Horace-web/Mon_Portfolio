import { projects } from "@/app/data/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number(id))
  if (!project) notFound()

  return (
    <main className="min-h-screen detail-page-main">
      <div className="container-custom mb-8">
        <Link href="/#projects" className="back-link">
          ← Retour aux projets
        </Link>
      </div>

      <div className="container-custom detail-section">
        <div className="detail-banner">
          <div className="w-full h-[300px] md:h-[500px] relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="detail-banner-overlay" />
          </div>
        </div>
      </div>

      <div className="container-custom pb-24">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
          <div className="detail-content-animate">
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <h1 className="section-title">{project.title}</h1>
              {project.year && <span className="project-year">{project.year}</span>}
            </div>

            {project.status && (
              <span className="detail-status mb-8 inline-block">
                ● {project.status}
              </span>
            )}

            <p className="detail-long-desc mb-10">{project.longDescription}</p>

            {project.context && (
              <div className="detail-context mb-10">
                <span className="code-comment">// Contexte & Problématique</span>
                <p>{project.context}</p>
              </div>
            )}

            {project.features && (
              <div className="mb-10">
                <h3 className="detail-subtitle">Fonctionnalités Clés</h3>
                <ul className="detail-features skill-category">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-12">
                <h3 className="detail-subtitle mb-6">Aperçu de la plateforme</h3>
                <div className="grid gap-6">
                  {project.screenshots.map((screenshot) => (
                    <div key={screenshot} className="overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={screenshot}
                        alt={`${project.title} — aperçu`}
                        width={1600}
                        height={1000}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-20 detail-actions-gap" style={{ marginBottom: 40 }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ width: "auto", padding: "12px 30px" }}>
                  Voir le code (GitHub)
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-live-demo-btn" style={{ width: "auto", padding: "12px 30px" }}>
                  Démo Live
                </a>
              )}
            </div>
          </div>

          <div className="sticky top-32 detail-sidebar-animate">
            <div className="code-card">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>

              <pre className="text-sm font-mono leading-7 overflow-x-auto">
                <span className="block"><span className="code-comment">// Spécifications techniques</span></span>
                <span className="block"><span className="code-var">const</span><span className="text-white"> stack</span> = {"{"}</span>
                <span className="block">{"  "}<span className="code-key">project</span>: <span className="code-string">"{project.title}"</span>,</span>
                <span className="block">{"  "}<span className="code-key">technologies</span>: <span className="code-string">[{project.technologies.map(t => `"${t}"`).join(", ")}]</span>,</span>
                {project.architecture && project.architecture.map((a, i) => (
                  <span key={i} className="block">{"  "}<span className="code-key">arch_{i + 1}</span>: <span className="code-string">"{a}"</span>,</span>
                ))}
                {project.deploy && (
                  <span className="block">{"  "}<span className="code-key">deploy</span>: <span className="code-string">"{project.deploy}"</span>,</span>
                )}
                <span className="block">{"}"}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
