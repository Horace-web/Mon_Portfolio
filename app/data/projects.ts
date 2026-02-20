import { Project } from "@/app/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "Eat&Drink Platform",
    description:
      "Plateforme de gestion de stands avec authentification, panier et notifications email.",
    image: "/projects/8694662.jpg",
    technologies: ["Laravel", "MySQL", "Blade"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "ERP Gestion des Modules",
    description:
      "Système modulaire avec modélisation UML/MERISE et gestion avancée des entités.",
    image: "/projects/7046464.jpg",
    technologies: ["Laravel", "UML", "Merise"],
  },
  {
    id: 3,
    title: "Jeu C - Le Mot le Plus Long",
    description:
      "Jeu console avec validation dictionnaire, sauvegarde et gestion des scores.",
    image: "/projects/971.jpg",
    technologies: ["C", "Structures", "Fichiers"],
  },
]