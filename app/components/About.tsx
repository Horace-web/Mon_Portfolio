export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container-custom">

        <div className="text-center md:text-left">
          <h2 className="section-title">À propos</h2>
          <p className="section-subtitle">
            Développeur orienté solutions, spécialisé dans la conception d'applications web modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-10">

          {/* Texte principal */}
          <div className="flex flex-col gap-6 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Je conçois et développe des applications web robustes en combinant 
              <span className="text-[var(--accent-cyan)]"> NestJS , Laravel  </span> 
              pour le backend et 
              <span className="text-[var(--accent-gold)]"> Next.js </span> 
              pour des interfaces modernes et performantes.
            </p>
            <p>
              Mon approche est centrée sur la résolution de problèmes concrets : 
              création d'APIs, gestion de données, génération de documents dynamiques 
              et mise en place de systèmes fiables et évolutifs.
            </p>
            <p>
              J'ai déjà travaillé sur plusieurs projets, notamment des systèmes de facturation, 
              des plateformes de gestion et des applications complètes intégrant frontend et backend.
            </p>
            <p>
              Actuellement en formation en informatique, je continue à renforcer mes compétences 
              en construisant des projets concrets avec une attention particulière à la qualité du code 
              et à l'expérience utilisateur.
            </p>
          </div>

          {/* Bloc valeur / highlights */}
          <div className="grid grid-cols-1 gap-6">

            <div
              className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300"
              style={{ padding: '1.5rem 2rem 1.5rem 2.5rem' }}
            >
              <h3 className="text-[var(--accent-cyan)] font-semibold mb-2">
                Développement Backend
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Conception d'APIs performantes, gestion de bases de données et logique métier avec NestJS et Laravel.
              </p>
            </div>

            <div
              className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300"
              style={{ padding: '1.5rem 2rem 1.5rem 2.5rem' }}
            >
              <h3 className="text-[var(--accent-gold)] font-semibold mb-2">
                Applications Fullstack
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Intégration frontend et backend avec Next.js pour créer des expériences fluides et modernes.
              </p>
            </div>

            <div
              className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300"
              style={{ padding: '1.5rem 2rem 1.5rem 2.5rem' }}
            >
              <h3 className="text-[var(--accent-cyan)] font-semibold mb-2">
                Résolution de problèmes
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Capacité à analyser, structurer et implémenter des solutions adaptées à des besoins réels.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}