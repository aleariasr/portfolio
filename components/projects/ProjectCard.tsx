import Link from "next/link";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { buttonClasses } from "@/components/ui/button-styles";
import { routes } from "@/content/site";
import type { Project, ProjectType } from "@/content/types/project";

const typeLabel: Record<ProjectType, string> = {
  cliente: "Paid client project",
  personal: "Independent project",
  academico: "Academic project",
};

interface ProjectCardProps {
  project: Project;
  /** Match the surrounding heading hierarchy — 3 when nested under a page's h2, 2 when the card follows an h1 directly (e.g. /proyectos). */
  headingLevel?: 2 | 3;
  /** Set on the first card in a grid so its image isn't lazy-loaded when it's the LCP candidate. */
  priority?: boolean;
}

export function ProjectCard({ project, headingLevel = 3, priority = false }: ProjectCardProps) {
  const TitleTag = headingLevel === 2 ? "h2" : "h3";

  return (
    <Link
      href={routes.projectDetail(project.slug)}
      className="group block overflow-hidden rounded-[1.5rem] border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem]"
    >
      <div className="p-3 sm:p-4">
        <ProjectImage src={project.heroImage.src} alt={project.heroImage.alt} priority={priority} />
      </div>

      <div className="p-6 pt-3 sm:p-7 sm:pt-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={
              project.type === "cliente"
                ? "rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent-foreground"
                : "rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
            }
          >
            {typeLabel[project.type]}
          </span>
        </div>

        <TitleTag className="text-2xl font-bold tracking-tight">{project.title}</TitleTag>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.oneLiner}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <span className={buttonClasses("primary", "sm")}>
            Case study
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
