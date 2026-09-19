import { ProjectImage } from "@/components/ui/ProjectImage";
import type { ArchitectureDecision, ProjectImage as ProjectImageData } from "@/content/types/project";

interface ArchitectureSectionProps {
  overview: string;
  decisions: ArchitectureDecision[];
  diagram?: ProjectImageData;
}

export function ArchitectureSection({ overview, decisions, diagram }: ArchitectureSectionProps) {
  return (
    <div>
      <p className="max-w-3xl leading-relaxed text-muted-foreground">{overview}</p>

      {diagram ? (
        <div className="mt-8 max-w-3xl">
          <ProjectImage src={diagram.src} alt={diagram.alt} caption={diagram.caption} fit="contain" />
        </div>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {decisions.map((item) => (
          <div key={item.decision} className="rounded-2xl border border-border p-5">
            <p className="text-sm font-semibold text-foreground">{item.decision}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.rationale}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
