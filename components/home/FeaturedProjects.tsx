import { LinkButton } from "@/components/ui/LinkButton";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getFeaturedProjects } from "@/content/projects";
import { routes } from "@/content/site";
import type { ProjectType } from "@/content/types/project";

const typeLabel: Record<ProjectType, string> = {
  cliente: "Paid client project",
  personal: "Independent project",
  academico: "Academic project",
};

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Real Systems, Real Problems"
        title="Software I've built beyond classroom exercises."
        description="The systems below run real operations — inventory that has to reconcile, appointments that can't double-book, cash drawers that have to close clean."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-[1.5rem] border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem]"
          >
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
        ))}
      </div>

      <div className="mt-10 text-center">
        <LinkButton href={routes.projects}>See all projects</LinkButton>
      </div>
    </Section>
  );
}
