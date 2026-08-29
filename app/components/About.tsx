export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container-custom">

        <div className="text-center md:text-left">
          <h2 className="section-title">À propos</h2>
          <p className="section-subtitle">
            Développeur Full-Stack avec une appétence pour l'architecture logicielle, je conçois des applications web robustes et évolutives, du backend à l'interface utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-10">

          {/* Texte principal */}
          <div className="flex flex-col gap-6 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Je conçois et développe des applications web robustes en combinant{' '}
              <span className="text-[var(--accent-cyan)]">NestJS et Laravel</span>{' '}
              pour le backend et{' '}
              <span className="text-[var(--accent-gold)]">Next.js</span>{' '}
              pour des interfaces modernes et performantes.
            </p>
            <p>
              Mon approche est centrée sur la qualité du code et la maintenabilité : 
              APIs bien structurées, gestion de données fiable et systèmes pensés 
              pour évoluer dans le temps.
            </p>
            <p>
              J'ai mis en œuvre des solutions techniques en condition réelle,
              en veillant systématiquement à la robustesse de l'architecture 
              et au respect des standards de l'industrie.
            </p>
          </div>

          {/* Bloc valeur / highlights */}
          <div className="grid grid-cols-2 gap-4">

            <div
              className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300"
              style={{ padding: '1.5rem' }}
            >
              <h3 className="text-[var(--accent-cyan)] font-semibold mb-2 text-sm">
                Développement Backend
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Conception d'APIs REST performantes et logique métier structurée avec NestJS et Laravel.
              </p>
            </div>

            <div
              className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300"
              style={{ padding: '1.5rem' }}
            >
              <h3 className="text-[var(--accent-gold)] font-semibold mb-2 text-sm">
                Applications Full-Stack
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Intégration frontend/backend avec Next.js pour des expériences modernes et fluides.
              </p>
            </div>

            <div
              className="col-span-2 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300"
              style={{ padding: '1.5rem' }}
            >
              <h3 className="text-[var(--accent-cyan)] font-semibold mb-2 text-sm">
                Architecture & Qualité
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Conception de systèmes pensés pour durer, code propre, maintenable et orienté bonnes pratiques.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}