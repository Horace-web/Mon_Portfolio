"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Importe usePathname

export function useReveal() {
  const pathname = usePathname(); // On écoute les changements d'URL

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    // On attend un tout petit peu que le DOM soit prêt après le changement de page
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]); // CRUCIAL : Le script se relance dès que pathname change
}