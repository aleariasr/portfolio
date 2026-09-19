import { Pill } from "@/components/ui/Pill";
import { Section, SectionHeading } from "@/components/ui/Section";

const stackGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C#"] },
  { label: "Backend", items: ["Spring Boot", "Django", "Node.js", "Express"] },
  { label: "Frontend", items: ["React", "Next.js"] },
  { label: "Databases", items: ["SQL Server", "PostgreSQL", "MySQL"] },
  { label: "Cloud & Infrastructure", items: ["AWS", "Azure", "Docker", "Linux", "Nginx"] },
];

export function StackSummary() {
  return (
    <Section id="stack" width="default">
      <SectionHeading
        eyebrow="Stack"
        title="What I build with."
        description="The full breakdown, with versions, lives on each project's page."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
