import type { HTMLAttributes } from "react";

type CardPadding = "sm" | "md" | "lg";

const paddings: Record<CardPadding, string> = {
  sm: "p-5 sm:p-6",
  md: "p-6 sm:p-8 lg:p-10",
  lg: "p-5 sm:p-6 md:p-10",
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
}

export function Card({ padding = "md", className, ...props }: CardProps) {
  const classes = [
    "rounded-[1.5rem] border border-border bg-surface sm:rounded-[2rem]",
    paddings[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
