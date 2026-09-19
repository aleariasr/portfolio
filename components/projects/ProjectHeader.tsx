import { LinkButton } from "@/components/ui/LinkButton";
import type { Project, ProjectType } from "@/content/types/project";

const typeLabel: Record<ProjectType, string> = {
  cliente: "Paid client project",
  personal: "Independent project",
  academico: "Academic project",
};

const statusLabel: Record<Project["status"], string> = {
  production: "Live in production",
  prototype: "Prototype, not deployed",
  "academic-complete": "Coursework, delivered",
};

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className={
            project.type === "cliente"
              ? "rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground"
              : "rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          }
        >
          {typeLabel[project.type]}
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          {statusLabel[project.status]}
        </span>
      </div>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{project.title}</h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        {project.oneLiner}
      </p>

      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        <strong className="text-foreground">Role: </strong>
        {project.role}
      </p>

      <div className="mt-4 grid max-w-xl gap-3 sm:grid-cols-3">
        <div>
          <p className="text-xs text-muted-foreground">Team</p>
          <p className="text-sm font-semibold">{project.team}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Timeline</p>
          <p className="text-sm font-semibold">{project.dateRange}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Type</p>
          <p className="text-sm font-semibold">
            {project.type === "cliente" ? "Client" : project.type === "personal" ? "Personal" : "Academic"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.live ? <LinkButton href={project.links.live}>Live site</LinkButton> : null}
        {project.links.repo ? (
          <LinkButton href={project.links.repo} variant="secondary">
            View GitHub
          </LinkButton>
        ) : null}
        {!project.links.live && !project.links.repo ? (
          <span className="rounded-full bg-muted px-5 py-2 text-sm text-muted-foreground">
            Private client codebase
          </span>
        ) : null}
      </div>
    </div>
  );
}
