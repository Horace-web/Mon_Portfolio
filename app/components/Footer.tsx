import { footerLinks } from "@/app/data/footer"

export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/10 bg-[#030405] px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 <span className="gradient-text font-semibold">DarkGold Portfolio</span>. Tous droits réservés.
        </p>

        {/* Liens */}
        <ul className="flex gap-6 text-sm text-gray-500">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-yellow-400 transition duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </footer>
  )
}