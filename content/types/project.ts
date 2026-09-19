export type ProjectType = "cliente" | "academico" | "personal";

export type ProjectStatus = "production" | "prototype" | "academic-complete";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ArchitectureDecision {
  decision: string;
  rationale: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface StackByLayer {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infra?: string[];
  auth?: string[];
  testing?: string[];
  external?: string[];
}

export interface ProjectLinks {
  repo?: string;
  live?: string;
}

export interface ProjectResults {
  qualitative: string;
  /** Only metrics explicitly confirmed by the author. Empty when none exist. */
  metrics: string[];
}

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  type: ProjectType;
  team: string;
  dateRange: string;
  status: ProjectStatus;
  /** Drives selection on the home page instead of a separate hardcoded list. */
  featured: boolean;
  links: ProjectLinks;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  problem: string;
  solution: {
    overview: string;
    features: string[];
  };
  architecture: {
    overview: string;
    decisions: ArchitectureDecision[];
    diagram?: ProjectImage;
  };
  stack: StackByLayer;
  challenges: ProjectChallenge[];
  results: ProjectResults;
  learnings: string;
  /** Flat list for filter chips on /proyectos. */
  technologies: string[];
}
