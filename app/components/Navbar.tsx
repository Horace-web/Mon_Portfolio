"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#Timeline", label: "Parcours" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-black/80" : "bg-black/40"
      }`}
    >
      <nav className="navbar container-custom">
        <a href="#hero" className="logo gradient-text text-2xl ">
          &lt;/&gt; HORACE <span>ODM</span>
        </a>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
}