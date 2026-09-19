export interface Service {
  slug: string;
  title: string;
  forWho: string;
  whatYouGet: string[];
  proofProjectSlugs: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}
