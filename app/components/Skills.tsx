import { skills } from "@/app/data/skills"
import { Skill } from "@/app/types/skill"

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center md:text-left">
          Compétences
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="bg-[#111317] border border-yellow-500/20 rounded-xl p-6 flex flex-col items-start hover:border-yellow-500 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                {skill.items.map((item) => (
                  <li key={item} className="before:content-['•'] before:text-yellow-400 before:mr-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}