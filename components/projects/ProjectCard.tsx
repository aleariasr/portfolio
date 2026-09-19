import { LinkButton } from "@/components/ui/LinkButton";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { routes } from "@/content/site";
import type { Project, ProjectType } from "@/content/types/project";

const typeLabel: Record<ProjectType, string> = {
  cliente: "Paid client project",
  personal: "Independent project",
  academico: "Academic project",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem]">
      <div className="p-3 sm:p-4">
        <ProjectImage src={project.heroImage.src} alt={project.heroImage.alt} />
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

        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
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
          <LinkButton href={routes.projectDetail(project.slug)} variant="secondary" size="sm">
            Case study
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
