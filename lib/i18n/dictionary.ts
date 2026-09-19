/**
 * UI-chrome strings only (nav, buttons, generic labels). Long-form project
 * case studies and the CV stay English-only for now — see the redesign
 * notes for why. Add Spanish copy for those later without touching this
 * file's shape.
 */
export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About",
      contact: "Contact",
      resume: "Resume",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
    },
    common: {
      viewGithub: "View GitHub",
      liveSite: "Live site",
      caseStudy: "Case study",
      privateCodebase: "Private client codebase",
      backToProjects: "Back to all projects",
      previousProject: "Previous project",
      nextProject: "Next project",
      getInTouch: "Get in touch",
      downloadCv: "Download CV",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      services: "Servicios",
      about: "Sobre mí",
      contact: "Contacto",
      resume: "CV",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js, TypeScript y Tailwind CSS.",
    },
    common: {
      viewGithub: "Ver GitHub",
      liveSite: "Sitio en vivo",
      caseStudy: "Caso de estudio",
      privateCodebase: "Código privado del cliente",
      backToProjects: "Volver a todos los proyectos",
      previousProject: "Proyecto anterior",
      nextProject: "Proyecto siguiente",
      getInTouch: "Contactar",
      downloadCv: "Descargar CV",
    },
  },
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)["en"];
