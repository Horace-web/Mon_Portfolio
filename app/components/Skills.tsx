import { skills } from "@/app/data/skills"
import { Skill } from "@/app/types/skill"

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="container-custom">

        <div className="text-center md:text-left">
          <h2 className="section-title">Mes Compétences</h2>
          <p className="section-subtitle">Les technologies que je maîtrise.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill: Skill) => (
            <div key={skill.name} className="skill-category">
              <h3>{skill.name}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}