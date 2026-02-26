export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
  <div className="container-custom w-full">
    <div className="hero-wrapper grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <p className="hero-subtitle mb-6 uppercase ">Développeur Full-Stack orienté architecture et performance</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6  ">
            <span className="hero-line">De l’idée à l’architecture,</span>
            <span className="hero-line ">je construis des solutions</span>
            <span className="hero-line gradient-text">web structurées & évolutives</span>
          </h1>

          {/* <p
            className="text-gray-400 max-w-xl mb-10 opacity-0 fade-in"
            style={{ animationDelay: "1s" }}
          >
            Je conçois des applications web modernes en combinant architecture propre, performance et expérience utilisateur maîtrisée.
          </p> */}

          {/* STATS */}
          {/* <div
            className="flex gap-12 opacity-0 fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            {[
              { value: "5+", label: "Années d'exp." },
              { value: "20+", label: "Projets" },
              { value: "10+", label: "Clients" },
            ].map(({ value, label }) => (
              <div key={label} className="stat-item">
                <div className="stat-number">{value}</div>
                <p className="stat-label">{label}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end">
  <div className="code-card  w-fit reveal">

          {/* Dots */}
          <div className="flex gap-2 mb-6">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <pre className="text-sm font-mono leading-7">
  <span className="block"><span className="code-comment">// Portfolio 2026</span></span>
  <span className="block"><span className="code-var">const</span> <span className="text-white">developer</span> = {"{"}</span>
  <span className="block">{"  "}<span className="code-key">name</span>: <span className="code-string">"Horace Odounlami"</span>,</span>
  <span className="block">{"  "}<span className="code-key">role</span>: <span className="code-string">"Full-Stack Developer"</span>,</span>
  <span className="block">{"  "}<span className="code-key">stack</span>: <span className="code-string">["Next.js", "Laravel" , "TypeScript"]</span>,</span>
  <span className="block">{"  "}<span className="code-key">specialty</span>: <span className="code-string">"Web Applications & Systems"</span>,</span>
  <span className="block">{"  "}<span className="code-var">build()</span>{"{"}</span>
  <span className="block">{"    "}<span className="code-var">return</span> <span className="code-string">"Scalable Web Applications"</span>;</span>
  <span className="block">{"  }"}</span>
  <span className="block">{"}"}</span>
</pre>

        </div>
        </div>

      </div>
      </div>
    </section>
  );
}