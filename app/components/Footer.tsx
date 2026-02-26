import { footerLinks } from "@/app/data/footer"

export default function Footer() {
  return (
    <footer className="footer container-custom">
      <div className="container-custom">
        <div className="footer-inner">

          <p className="footer-copy">
            © 2026 <span className="gradient-text">Horace ODOUNLAMI</span>. Tous droits réservés.
          </p>

          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  )
}