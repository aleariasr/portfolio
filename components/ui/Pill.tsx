import type { HTMLAttributes } from "react";

type PillVariant = "default" | "solid" | "muted";

const variants: Record<PillVariant, string> = {
  default: "border border-border bg-surface text-foreground",
  solid: "bg-accent text-accent-foreground",
  muted: "border border-border bg-muted text-muted-foreground",
};

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: PillVariant;
}

export function Pill({ variant = "default", className, ...props }: PillProps) {
  const classes = [
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} {...props} />;
}
