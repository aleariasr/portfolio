import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/Section";
import { ContactCta } from "@/components/home/ContactCta";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ArchitectureSection } from "@/components/projects/ArchitectureSection";
import { StackByLayerSection } from "@/components/projects/StackByLayerSection";
import { ChallengesSection } from "@/components/projects/ChallengesSection";
import { ResultsSection } from "@/components/projects/ResultsSection";
import { ProjectPager } from "@/components/projects/ProjectPager";
import { getAdjacentProjects, getProjectBySlug, projects } from "@/content/projects";
import { routes } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectDetailPage(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <>
      <Nav />

      <main className="bg-background pb-24 pt-28 text-foreground lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Link href={routes.projects} className="text-sm text-muted-foreground hover:text-foreground">
            ← All projects
          </Link>

          <div className="mt-6">
            <ProjectHeader project={project} />
          </div>

          {project.gallery.length > 0 ? (
            <div className="mt-12">
              <ProjectGallery images={project.gallery} />
            </div>
          ) : null}

          <div className="mt-16 max-w-3xl sm:mt-20">
            <SectionHeading eyebrow="01 · Context & Problem" title="What problem this solves" />
            <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
          </div>

          <div className="mt-16 max-w-3xl sm:mt-20">
            <SectionHeading
              eyebrow="02 · Solution"
              title="What it actually does"
              description={project.solution.overview}
            />
            <ul className="mt-6 space-y-3">
              {project.solution.features.map((feature) => (
                <li key={feature} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-muted-foreground" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 sm:mt-20">
            <SectionHeading eyebrow="03 · Architecture" title="Architecture & decisions" />
            <ArchitectureSection
              overview={project.architecture.overview}
              decisions={project.architecture.decisions}
              diagram={project.architecture.diagram}
            />
          </div>

          <div className="mt-16 sm:mt-20">
            <SectionHeading eyebrow="04 · Stack" title="Full stack, by layer" />
            <StackByLayerSection stack={project.stack} />
          </div>

          <div className="mt-16 max-w-3xl sm:mt-20">
            <SectionHeading eyebrow="05 · Challenges" title="Technical challenges solved" />
            <ChallengesSection challenges={project.challenges} />
          </div>

          <div className="mt-16 max-w-3xl sm:mt-20">
            <SectionHeading eyebrow="06 · Results" title="Results" />
            <ResultsSection results={project.results} />
          </div>

          <div className="mt-16 max-w-3xl sm:mt-20">
            <SectionHeading eyebrow="07 · Retrospective" title="What I'd do differently" />
            <p className="leading-relaxed text-muted-foreground">{project.learnings}</p>
          </div>

          <div className="mt-16 sm:mt-20">
            <ProjectPager previous={previous} next={next} />
          </div>
        </div>

        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
