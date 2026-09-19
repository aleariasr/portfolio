import Link from "next/link";
import { routes } from "@/content/site";
import type { Project } from "@/content/types/project";

interface ProjectPagerProps {
  previous?: Project;
  next?: Project;
}

export function ProjectPager({ previous, next }: ProjectPagerProps) {
  if (!previous && !next) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {previous ? (
        <Link
          href={routes.projectDetail(previous.slug)}
          className="group rounded-2xl border border-border p-5 transition hover:border-foreground/40"
        >
          <p className="text-xs text-muted-foreground">← Previous project</p>
          <p className="mt-1 font-semibold group-hover:underline">{previous.title}</p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={routes.projectDetail(next.slug)}
          className="group rounded-2xl border border-border p-5 text-right transition hover:border-foreground/40"
        >
          <p className="text-xs text-muted-foreground">Next project →</p>
          <p className="mt-1 font-semibold group-hover:underline">{next.title}</p>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
