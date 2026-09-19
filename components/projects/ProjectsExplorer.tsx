"use client";

import { useMemo, useState } from "react";
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

const activePill = "bg-accent text-accent-foreground";
const inactivePill = "border border-border bg-surface text-foreground hover:border-foreground/40";

interface ProjectsExplorerProps {
  projects: Project[];
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.technologies.forEach((tech) => set.add(tech)));
    return Array.from(set).sort();
  }, [projects]);

  function toggleTech(tech: string) {
    setSelectedTechs((current) =>
      current.includes(tech) ? current.filter((item) => item !== tech) : [...current, tech],
    );
  }

  const filtered = projects.filter((project) => {
    const matchesType = typeFilter === "all" || project.type === typeFilter;
    const matchesTech =
      selectedTechs.length === 0 ||
      selectedTechs.some((tech) => project.technologies.includes(tech));
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
        {allTechs.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => toggleTech(tech)}
            aria-pressed={selectedTechs.includes(tech)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              selectedTechs.includes(tech) ? activePill : inactivePill
            }`}
          >
            {tech}
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
