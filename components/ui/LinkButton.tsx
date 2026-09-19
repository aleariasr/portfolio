import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./button-styles";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function needsPlainAnchor(href: string, download: unknown) {
  return (
    isExternalHref(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    download !== undefined
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  download,
  children,
  ...rest
}: LinkButtonProps) {
  const classes = buttonClasses(variant, size, className);

  if (needsPlainAnchor(href, download)) {
    const externalProps = isExternalHref(href)
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a href={href} className={classes} download={download} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
