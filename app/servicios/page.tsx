import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { ProcessSection } from "@/components/services/ProcessSection";
import { services } from "@/content/services";
import { getProjectBySlug } from "@/content/projects";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom business systems, point of sale & e-commerce, and legacy system migration — backed by real, shipped client work.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main className="bg-background pb-24 pt-28 text-foreground lg:pb-16">
        <Section className="pt-0">
          <SectionHeading
            eyebrow="Services"
            title="Software built around how your business actually runs."
            description="Not templates. Every service below is backed by a system I designed, built and still support for a real client — see the proof, not just the promise."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const proofProjects = service.proofProjectSlugs
                .map((slug) => getProjectBySlug(slug))
                .filter((project): project is NonNullable<typeof project> => Boolean(project));

              return (
                <Card key={service.slug}>
                  <h2 className="text-xl font-bold tracking-tight">{service.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{service.forWho}</p>

                  <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground">
                    {service.whatYouGet.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {proofProjects.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                      {proofProjects.map((project) => (
                        <LinkButton
                          key={project.slug}
                          href={routes.projectDetail(project.slug)}
                          variant="secondary"
                          size="sm"
                        >
                          Proof: {project.title.split(" — ")[0]}
                        </LinkButton>
                      ))}
                    </div>
                  ) : null}
                </Card>
              );
            })}
          </div>
        </Section>

        <ProcessSection />

        <Section width="narrow" className="pt-0 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Scope, timeline and pricing depend on what you&apos;re building.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I don&apos;t quote a rate card here because every system above started from a real
            conversation about the actual workflow, not a fixed package. Tell me what you need and
            I&apos;ll tell you honestly what it takes.
          </p>
          <div className="mt-8">
            <LinkButton href={routes.contact}>Get in touch</LinkButton>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
