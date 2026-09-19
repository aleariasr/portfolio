import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { routes } from "@/content/site";

export function AboutTeaser() {
  return (
    <Section id="about" width="default">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-border bg-muted shadow-sm sm:max-w-sm sm:rounded-[2rem]">
          <Image
            src="/profile.jpg"
            alt="Alejandro Arias Rojas"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 80vw, 380px"
          />
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            I like building software that actually gets used.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I build production-grade business systems: an offline-first ERP
              with 600+ automated tests for a real diesel and gasoline
              fuel-injector lab, and a POS and e-commerce platform live for a
              real jewelry retailer.
            </p>
            <p>
              My work combines software engineering with business process
              thinking — I&apos;m finishing a Bachelor&apos;s in Business
              Informatics at Universidad de Costa Rica (2027).
            </p>
          </div>

          <div className="mt-8">
            <LinkButton href={routes.about} variant="secondary">
              More about me
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
