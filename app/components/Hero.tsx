export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-cyan-400 tracking-widest uppercase text-sm mb-6">
            Développeur Full Stack
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Créateur d'
            <span className="block gradient-text">expériences</span>
            <span className="block gradient-text">numériques</span>
            innovantes
          </h1>

          <p className="text-gray-400 max-w-xl mb-10">
            Je transforme des idées en applications web performantes
            avec une attention particulière au design et à l'expérience utilisateur.
          </p>

          {/* STATS */}
          <div className="flex gap-12">
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">5+</h3>
              <p className="text-gray-500 text-sm">ANNÉES D'EXP.</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">20+</h3>
              <p className="text-gray-500 text-sm">PROJETS</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">10+</h3>
              <p className="text-gray-500 text-sm">CLIENTS</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CODE CARD */}
        <div className="relative">
          <div className="bg-[#0f1115] border border-yellow-500/30 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,215,0,0.15)]">

            {/* Fake window header */}
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>

            <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
{`// Portfolio 2026
const developer = {
  name: "Horace Odounlami",
  skills: ["React", "Next.js", "Laravel"],
  passion: "Créer l'impossible",
  async create() {
    return "✨ Innovation";
  }
};`}
            </pre>

          </div>
        </div>

      </div>
    </section>
  )
}