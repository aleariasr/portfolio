"use client";

import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";
import type { Project, ProjectType } from "@/content/types/project";

type TypeFilter = "all" | ProjectType;

const typeFilters: { value: TypeFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cliente", label: "Client work" },
  { value: "personal", label: "Independent" },
  { value: "academico", label: "Academic" },
];

/**
 * Grouped so the filter bar stays short — each group matches any of its
 * underlying technologies from content/projects/*.ts. Adding a project
 * with a new technology just needs a spot in one of these groups (or a
 * new one), not a change to every project's tag list.
 */
const techGroups: { label: string; matches: string[] }[] = [
  { label: "Django", matches: ["Django", "Django REST Framework"] },
  { label: "React / Next.js", matches: ["React", "Next.js"] },
  { label: "Node.js", matches: ["Node.js", "Express"] },
  { label: "Python", matches: ["Python", "Celery", "Sockets", "Threading", "customtkinter"] },
  { label: "TypeScript", matches: ["TypeScript"] },
  {
    label: "Databases",
    matches: ["PostgreSQL", "MySQL", "SQL Server", "Supabase", "Redis", "T-SQL"],
  },
  { label: "Cloud (AWS / Azure)", matches: ["AWS Lambda", "Azure", "Vercel"] },
  { label: "Docker & Infra", matches: ["Docker", "Electron", "Nginx", "Windows Server", "Linux"] },
  {
    label: "Security & Networking",
    matches: ["Suricata", "Fail2ban", "Tailscale", "Prometheus", "Grafana"],
  },
];

const activePill = "bg-accent text-accent-foreground";
const inactivePill = "border border-border bg-surface text-foreground hover:border-foreground/40";

interface ProjectsExplorerProps {
  projects: Project[];
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  function toggleGroup(label: string) {
    setSelectedGroups((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label],
    );
  }

  const filtered = projects.filter((project) => {
    const matchesType = typeFilter === "all" || project.type === typeFilter;
    const matchesTech =
      selectedGroups.length === 0 ||
      selectedGroups.some((label) => {
        const group = techGroups.find((item) => item.label === label);
        return group?.matches.some((tech) => project.technologies.includes(tech));
      });
    return matchesType && matchesTech;
  });

  return (
    <Section>
      <SectionHeading
        eyebrow="All Projects"
        title="Client work, independent builds and coursework."
        description="Filter by who it was for, or by the stack that matters to you."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {typeFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setTypeFilter(filter.value)}
            aria-pressed={typeFilter === filter.value}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              typeFilter === filter.value ? activePill : inactivePill
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mb-12 flex flex-wrap gap-2">
        {techGroups.map((group) => (
          <button
            key={group.label}
            type="button"
            onClick={() => toggleGroup(group.label)}
            aria-pressed={selectedGroups.includes(group.label)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              selectedGroups.includes(group.label) ? activePill : inactivePill
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground">No projects match those filters.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
