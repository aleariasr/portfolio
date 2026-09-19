import type { Project } from "@/content/types/project";
import { lics } from "@/content/projects/lics";
import { joyeria } from "@/content/projects/joyeria";
import { esteticapro } from "@/content/projects/esteticapro";
import { sigau } from "@/content/projects/sigau";
import { if5000 } from "@/content/projects/if5000";
import { sistemasOperativos } from "@/content/projects/sistemas-operativos";

/**
 * Adding a project = add a file in content/projects/ and register it here.
 * No component changes required.
 */
export const projects: Project[] = [lics, joyeria, esteticapro, sigau, if5000, sistemasOperativos];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAdjacentProjects(slug: string): { previous?: Project; next?: Project } {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}
