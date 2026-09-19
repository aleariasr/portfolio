import { ProjectImage } from "@/components/ui/ProjectImage";
import type { ProjectImage as ProjectImageData } from "@/content/types/project";

export function ProjectGallery({ images }: { images: ProjectImageData[] }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {images.map((image) => (
        <ProjectImage key={image.src} {...image} />
      ))}
    </div>
  );
}
