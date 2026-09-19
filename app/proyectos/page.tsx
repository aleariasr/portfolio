import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <>
      <Nav />

      <main className="bg-background pb-24 pt-16 text-foreground lg:pb-16">
        <ProjectsExplorer projects={projects} />
      </main>

      <Footer />
    </>
  );
}
