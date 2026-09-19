import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { routes, site } from "@/content/site";

export function ContactCta() {
  return (
    <Section id="contact" width="narrow" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Have a system that needs building?
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Tell me what you&apos;re running today and what&apos;s breaking. I&apos;ll tell you honestly
        whether I can help.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <LinkButton href={routes.contact}>Get in touch</LinkButton>
        <LinkButton href={`mailto:${site.email.primary}`} variant="secondary">
          {site.email.primary}
        </LinkButton>
      </div>
    </Section>
  );
}
