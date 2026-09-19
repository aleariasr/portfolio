import { LinkButton } from "@/components/ui/LinkButton";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import { routes } from "@/content/site";

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
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <LinkButton href={routes.projects}>See all projects</LinkButton>
      </div>
    </Section>
  );
}
