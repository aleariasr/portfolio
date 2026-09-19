import type { ProjectChallenge } from "@/content/types/project";

export function ChallengesSection({ challenges }: { challenges: ProjectChallenge[] }) {
  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <div key={challenge.title} className="rounded-2xl border border-border p-6">
          <h3 className="text-base font-bold">{challenge.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Problem: </strong>
            {challenge.problem}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Solution: </strong>
            {challenge.solution}
          </p>
        </div>
      ))}
    </div>
  );
}
