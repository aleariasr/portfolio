import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content/projects";
import { bio } from "@/content/about";
import { routes, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About me",
  description: bio.intro,
};

export default function AboutPage() {
  const professionalProjects = projects.filter((project) => project.type !== "academico");
  const academicProjects = projects.filter((project) => project.type === "academico");

  return (
    <>
      <Nav />

      <main id="main-content" tabIndex={-1} className="bg-background pb-24 pt-28 text-foreground lg:pb-16">
        <Section width="default" className="pt-0">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[1.5rem] border border-border bg-muted shadow-sm sm:max-w-sm sm:rounded-[2rem]">
              <Image
                src="/profile.jpg"
                alt="Alejandro Arias Rojas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 380px"
                priority
              />
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                About Me
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Alejandro Arias Rojas</h1>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>{bio.intro}</p>
                <p>{bio.approach}</p>
                <p>{bio.currently}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href={site.cvUrl} download>
                  Download CV
                </LinkButton>
                <LinkButton href={routes.contact} variant="secondary">
                  Get in touch
                </LinkButton>
              </div>
            </div>
          </div>
        </Section>

        <Section width="wide" className="pt-0">
          <SectionHeading
            eyebrow="Professional Experience"
            title="Independent Software Developer"
            description="Nov 2025 – Present. Freelance work for real clients, plus independent products built to the same standard."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </Section>

        <Section width="wide" className="pt-0">
          <SectionHeading
            eyebrow="Academic & Team Projects"
            title="Coursework at Universidad de Costa Rica"
            description="Built with classmates as part of the Business Informatics program — included because the skills are real, labeled because the credit is shared."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {academicProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
