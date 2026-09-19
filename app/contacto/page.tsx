import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alejandro Arias Rojas about a project or a role.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main className="bg-background pb-24 pt-28 text-foreground lg:pb-16">
        <Section width="narrow" className="pt-0 text-center">
          <SectionHeading
            eyebrow="Contact"
            title="Tell me what you're building."
            description="Whether it's a system that needs replacing, a role you think I'd fit, or a question about one of the projects on this site — email is the fastest way to reach me."
            align="center"
          />

          <Card padding="sm" className="mx-auto max-w-md">
            <p className="text-lg font-bold">{site.email.primary}</p>
            <div className="mt-4">
              <LinkButton href={`mailto:${site.email.primary}`}>Send an email</LinkButton>
            </div>
          </Card>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <LinkButton href={site.social.github} variant="secondary">
              GitHub
            </LinkButton>
            <LinkButton href={site.social.linkedin} variant="secondary">
              LinkedIn
            </LinkButton>
            <LinkButton href={site.cvUrl} variant="secondary" download>
              Download CV
            </LinkButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
