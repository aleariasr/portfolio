import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client work, independent builds and university coursework — offline ERPs, POS platforms, database security and network infrastructure.",
};

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
