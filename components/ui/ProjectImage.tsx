"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
  className?: string;
  /** Set on the first card of a grid so it isn't lazy-loaded when it's the LCP candidate. */
  priority?: boolean;
}

export function ProjectImage({
  src,
  alt,
  caption,
  fit = "contain",
  className = "",
  priority = false,
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div>
      {failed ? (
        <div
          className={`flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-border bg-muted text-center text-xs text-muted-foreground ${className}`}
        >
          Screenshot coming soon
        </div>
      ) : (
        <div
          className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted ${className}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={fit === "cover" ? "object-cover" : "object-contain p-2"}
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        </div>
      )}
      {caption ? <p className="mt-2 text-xs text-muted-foreground">{caption}</p> : null}
    </div>
  );
}
