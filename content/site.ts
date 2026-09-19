export const site = {
  name: "Alejandro Arias Rojas",
  role: "Software Developer",
  location: "Costa Rica",
  domain: "https://aleariasr.com",
  cvUrl: "/Alejandro_Arias_CV.pdf",
  email: {
    primary: "hello@aleariasr.com",
    secondary: "aleariasrojas@hotmail.com",
  },
  social: {
    github: "https://github.com/aleariasr",
    linkedin: "https://www.linkedin.com/in/aleariasr",
  },
} as const;

export const routes = {
  home: "/",
  projects: "/proyectos",
  projectDetail: (slug: string) => `/proyectos/${slug}`,
  services: "/servicios",
  about: "/sobre-mi",
  contact: "/contacto",
} as const;
