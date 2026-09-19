import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { routes, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.domain, changeFrequency: "weekly", priority: 1 },
    { url: `${site.domain}${routes.projects}`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.domain}${routes.services}`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.domain}${routes.about}`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.domain}${routes.contact}`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.domain}${routes.projectDetail(project.slug)}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
