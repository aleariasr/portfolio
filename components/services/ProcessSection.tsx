import { Section, SectionHeading } from "@/components/ui/Section";
import { workingProcess } from "@/content/services";

export function ProcessSection() {
  return (
    <Section id="process" width="default">
      <SectionHeading eyebrow="Process" title="How I work" align="center" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workingProcess.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-border p-5">
            <p className="text-xs font-semibold text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-2 text-base font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
