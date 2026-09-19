export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-5 py-2 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = "",
) {
  return [base, sizes[size], variants[variant], className].filter(Boolean).join(" ");
}
