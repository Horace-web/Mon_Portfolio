import { Project } from "@/app/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "Eat&Drink Platform",
    description:
      "Plateforme de gestion de stands avec authentification, panier et notifications email.",
    year: 2025,
    image: "/projects/8694662.jpg",
    technologies: ["Laravel", "MySQL", "Blade"],
    githubUrl: "https://github.com/Horace-web/Eat-Drink",
    // liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Php-Social-Network",
    description:
      "Simulation d'un réseau Social avec gestion des utilisateurs, publications et commentaires. Projet non achevé",
    year: 2025,
    image: "/projects/7046464.jpg",
    technologies: ["Laravel", "Mysql", "Blade"],
    githubUrl: "https://github.com/Horace-web/php-social-network",
  },
  {
    id: 3,
    title: "GoogleKeepClone",
    description:
      "C'est un projet Angular qui vise à cloner Google keep",
    image: "/projects/971.jpg",
    technologies: ["Angular", "TypeScript"],
    githubUrl: "https://github.com/Horace-web/google-keep-clone",
  },
  // {
  //   id: 4,
  //   title: "Portfolio",
  //   description:"Mon portfolio personnel pour présenter mes projets et compétences en développement web.",
  //   image: "/projects/portfolio.jpg",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   githubUrl: "https://github.com/Horace-web/portfolio",

  // },
  
]