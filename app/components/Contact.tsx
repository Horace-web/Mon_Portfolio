"use client"

import { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import { contactInfos } from "@/app/data/contacts"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { IconType } from "react-icons"

const iconMap: Record<string, IconType> = {
  Email: FaEnvelope,
  Téléphone: FaPhone,
  Localisation: FaMapMarkerAlt,
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const [notification, setNotification] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // 🔥 VALIDATION
  const validateForm = () => {
    if (!form.name.trim()) {
      return "Le nom est requis"
    }

    if (!form.email.trim()) {
      return "L'email est requis"
    }

    // regex simple email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      return "Email invalide"
    }

    if (form.message.trim().length < 10) {
      return "Le message doit contenir au moins 10 caractères"
    }

    return null
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const error = validateForm()
    if (error) {
      setNotification({ type: "error", message: error })
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        "service_95nk6gr",
        "template_8o8c95j",
        {
          ...form,
          title: "Contact Form",
        },
        "QRPddmet_-gDGxX16"
      )

      setNotification({
        type: "success",
        message: "Message envoyé avec succès",
      })

      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      setNotification({
        type: "error",
        message: "Une erreur est survenue",
      })
    } finally {
      setLoading(false)
    }
  }

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

            {/* Infos */}
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

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className="form-input"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="form-input"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Votre message"
                className="form-input resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`contact-btn flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-t-transparent border-white rounded-full"></span>
                    Envoi...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>

          </div>
        </div>

      </div>

      {/* Notification */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300
            ${
              notification.type === "success"
                ? "border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
                : "border-red-500 text-red-400"
            }
            bg-[var(--bg-card)]`}
        >
          <p className="font-medium">{notification.message}</p>
        </div>
      )}
    </section>
  )
}