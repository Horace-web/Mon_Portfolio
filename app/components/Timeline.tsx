import { parcours } from "@/app/data/timeline";
import { TimelineItem } from "@/app/types/timeline";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div
      className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-sm hover:border-[var(--accent-gold)] hover:-translate-y-1 transition-all duration-300 w-full max-w-sm"
      style={{ padding: "1.5rem 1.5rem 1.5rem 2rem" }}
    >
      <span className="font-mono text-xs" style={{ color: "var(--accent-gold)" }}>
        {item.date}
      </span>
      <h3 className="text-base font-semibold mt-1 mb-2 text-[var(--text-primary)]">
        {item.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function TimelineDot() {
  return (
    <div
      className="w-4 h-4 rounded-full border-2"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--accent-cyan)",
        boxShadow: "0 0 10px rgba(0,255,255,0.4)",
      }}
    />
  );
}

function TimelineLine({ mobile }: { mobile?: boolean }) {
  return (
    <div
      className={`absolute top-0 h-full w-[1px] ${mobile ? "md:hidden" : "hidden md:block"}`}
      style={{
        left: mobile ? "0" : "50%",
        background: "linear-gradient(to bottom, transparent, var(--accent-gold), transparent)",
        opacity: 0.3,
      }}
    />
  );
}

export default function Timeline() {
  return (
    <section id="Timeline" className="reveal">
      <div className="container-custom">

        <div className="text-center md:text-left">
          <h2 className="section-title">Parcours</h2>
          <p className="section-subtitle">
            Mon évolution dans le développement et les projets réalisés.
          </p>
        </div>

        <div className="relative mt-12">
          <TimelineLine />
          <TimelineLine mobile />

          <div className="flex flex-col gap-10">
            {parcours.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-start md:items-center">

                  {/* Desktop */}
                  <div className="hidden md:flex w-full items-center">
                    <div className="w-1/2 pr-10 flex justify-end">
                      {isLeft && <TimelineCard item={item} />}
                    </div>

                    <div
                      className="absolute flex items-center justify-center"
                      style={{ left: "calc(50% - 8px)", zIndex: 10 }}
                    >
                      <TimelineDot />
                    </div>

                    <div className="w-1/2 pl-10 flex justify-start">
                      {!isLeft && <TimelineCard item={item} />}
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="flex md:hidden items-start w-full pl-8">
                    <div
                      className="absolute flex items-center justify-center"
                      style={{ left: "-8px", top: "6px", zIndex: 10 }}
                    >
                      <TimelineDot />
                    </div>
                    <TimelineCard item={item} />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}