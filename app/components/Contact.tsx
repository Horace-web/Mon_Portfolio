import { contactInfos } from "@/app/data/contacts"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { IconType } from "react-icons"

const iconMap: Record<string, IconType> = {
  Email: FaEnvelope,
  Téléphone: FaPhone,
  Localisation: FaMapMarkerAlt,
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vous avez un projet en tête ? Discutons de comment je peux vous aider à le réaliser.
          </p>
        </div>
        

        {/* Layout 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Colonne gauche — infos de contact */}
          <div className="flex flex-col gap-6">
            {contactInfos.map((info) => {
                const Icon = iconMap[info.type];
                return (
                  <a
                    key={info.type}
                    href={info.href ?? "#"}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10 border border-yellow-500/20 group-hover:border-yellow-500 transition duration-300">
                      {Icon && <Icon className="text-yellow-400 text-lg" />}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{info.type}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                );
            })}
          </div>

          {/* Colonne droite — formulaire */}
          <form className="flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Votre nom"
              className="bg-[#111317] border border-yellow-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="bg-[#111317] border border-yellow-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition"
            />
            <textarea
              rows={5}
              placeholder="Votre message"
              className="bg-[#111317] border border-yellow-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition resize-none"
            />
            <button
              type="button"
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-400 transition duration-300"
            >
              Envoyer
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}