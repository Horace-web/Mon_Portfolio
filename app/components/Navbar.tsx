"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/#hero", label: "Accueil" },
  { href: "/#about", label: "À propos" },
  { href: "/#Timeline", label: "Parcours" },
  { href: "/#skills", label: "Compétences" },
  { href: "/#projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen ? "bg-black/90 backdrop-blur-lg" : "bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="navbar container-custom">
        {/* Logo */}
        <Link href="/#hero" className="logo gradient-text text-2xl" onClick={() => setIsOpen(false)}>
          &lt;/&gt; HORACE <span>ODM</span>
        </Link>

        {/* Desktop Links (cachés sur mobile) */}
        <ul className="nav-links hidden md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Mobile uniquement) */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-[110]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-7 bg-yellow-500 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-7 bg-yellow-500 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-7 bg-yellow-500 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ height: '100vh' }}
        >
          <ul className="flex flex-col items-center gap-8">
            {links.map(({ href, label }, index) => (
              <li 
                key={href} 
                className={`transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={href}
                  className="text-2xl font-light uppercase tracking-[4px] text-gray-300 hover:text-yellow-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Ligne de décoration mobile */}
          <div className="absolute bottom-10 w-20 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        </div>
      </div>
    </nav>
  );
}