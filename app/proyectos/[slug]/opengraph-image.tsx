import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/content/projects";

export const alt = "Alejandro Arias Rojas — Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const typeLabel: Record<string, string> = {
  cliente: "PAID CLIENT PROJECT",
  personal: "INDEPENDENT PROJECT",
  academico: "ACADEMIC PROJECT",
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title ?? "Alejandro Arias Rojas";
  const oneLiner = project?.oneLiner ?? "Software Developer";
  const badge = project ? typeLabel[project.type] : "SOFTWARE DEVELOPER";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f5",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>Alejandro Arias Rojas</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              background: "#f5f5f5",
              color: "#0a0a0a",
              borderRadius: 999,
              padding: "10px 24px",
            }}
          >
            {badge}
          </div>
          <div style={{ display: "flex", fontSize: 60, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa", maxWidth: 950 }}>{oneLiner}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
