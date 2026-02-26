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
    <section id="contact" className="reveal">
      <div className="container-custom">

        <div className="text-center md:text-left mb-12">
          <h2 className="section-title">Travaillons ensemble</h2>
          <p className="section-subtitle">
            Vous avez un projet en tête ? Discutons de comment je peux vous aider à le réaliser.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Colonne gauche — infos */}
            <div className="flex flex-col gap-2">
              {contactInfos.map((info) => {
                const Icon = iconMap[info.type]
                return (
                  <a key={info.type} href={info.href ?? "#"} className="contact-info-item">
                    <div className="contact-icon">
                      {Icon && <Icon size={16} />}
                    </div>
                    <div>
                      <p className="contact-type">{info.type}</p>
                      <p className="contact-value">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Colonne droite — formulaire */}
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Votre nom"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="form-input"
              />
              <textarea
                rows={5}
                placeholder="Votre message"
                className="form-input resize-none"
              />
              <button type="button" className="contact-btn">
                Envoyer le message
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  )
}