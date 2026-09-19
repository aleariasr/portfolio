import type { ProjectResults } from "@/content/types/project";

export function ResultsSection({ results }: { results: ProjectResults }) {
  return (
    <div>
      <p className="max-w-3xl leading-relaxed text-muted-foreground">{results.qualitative}</p>

      {results.metrics.length > 0 ? (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {results.metrics.map((metric) => (
            <li key={metric} className="rounded-2xl border border-border p-4 text-sm font-semibold">
              {metric}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 max-w-3xl text-sm italic text-muted-foreground">
          No hard metrics confirmed yet for this project — the impact above is qualitative only.
        </p>
      )}
    </div>
  );
}
