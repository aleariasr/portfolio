import type { HTMLAttributes, ReactNode } from "react";

type SectionWidth = "narrow" | "default" | "wide";

const widths: Record<SectionWidth, string> = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

interface SectionProps extends HTMLAttributes<HTMLElement> {
  width?: SectionWidth;
}

export function Section({ width = "wide", className, children, ...props }: SectionProps) {
  const sectionClasses = ["scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} {...props}>
      <div className={`mx-auto ${widths[width]}`}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use 1 when this is the page's main heading (a page must have exactly one h1). */
  level?: 1 | 2;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
  children,
}: SectionHeadingProps) {
  const HeadingTag = level === 1 ? "h1" : "h2";

  return (
    <div className={`mb-10 max-w-3xl sm:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
