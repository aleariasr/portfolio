"use client";

import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/LinkButton";
import { routes, site } from "@/content/site";

const typingText = "Building real business software.";

const focusCards = [
  { label: "Focus", value: "Backend" },
  { label: "Building", value: "ERPs & POS" },
  { label: "Learning", value: "Cloud" },
];

const skills = ["Java", "Python", "Django", "React", "AWS", "Azure"];

export function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId: number;

    const type = () => {
      setTypedText(typingText.slice(0, index + 1));
      index += 1;

      if (index <= typingText.length) {
        timeoutId = window.setTimeout(type, 45);
      }
    };

    const start = window.setTimeout(type, 500);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center px-5 pt-28 sm:px-6">
      <div className="mx-auto max-w-4xl text-left sm:text-center">
        <div className="space-y-6 sm:space-y-7">
          <p className="fade-up text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]">
            Business Informatics · Costa Rica
          </p>

          <h1 className="fade-up-delay-1 mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            <span className="block text-muted-foreground">Hey there,</span>
            <span className="block">I&apos;m Alejandro Arias.</span>
          </h1>

          <p className="fade-up-delay-2 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:mx-auto sm:text-xl">
            I build backend-heavy business systems that companies actually run
            day to day — ERPs, POS platforms and scheduling software. Two of
            the systems on this site were sold as freelance work and are live
            in production right now.
          </p>

          <div className="fade-up-delay-2 flex flex-wrap gap-2 sm:justify-center">
            <span className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm">
              Open to full-time roles
            </span>
            <span className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm">
              Available for freelance / contract work
            </span>
          </div>

          <div className="fade-up-delay-3 min-h-8 max-w-full rounded-2xl border border-border bg-muted px-4 py-3 text-base font-medium text-foreground sm:mx-auto sm:w-fit sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-lg">
            <span>{typedText || " "}</span>
            <span className="ml-1 animate-pulse">|</span>
          </div>

          <div className="fade-up-delay-3 grid max-w-3xl grid-cols-3 gap-2 pt-2 text-left sm:mx-auto sm:gap-3 sm:pt-3">
            {focusCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-border p-3 sm:p-4">
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">{card.label}</p>
                <p className="mt-1 text-sm font-semibold sm:text-base">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="fade-up-delay-3 flex flex-wrap gap-2 pt-3 sm:justify-center sm:gap-3 sm:pt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-2 text-xs sm:px-4 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="fade-up-delay-3 flex flex-col gap-3 pt-5 sm:flex-row sm:justify-center sm:pt-6">
            <LinkButton href={routes.projects}>View My Work</LinkButton>
            <LinkButton href={site.cvUrl} variant="secondary" download>
              Download Resume
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
