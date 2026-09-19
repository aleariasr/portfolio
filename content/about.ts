export interface EducationItem {
  institution: string;
  degree: string;
  dateRange: string;
}

export interface CertificationItem {
  name: string;
  status: "in-progress" | "completed";
}

export interface LanguageItem {
  name: string;
  level: string;
}

export const education: EducationItem = {
  institution: "Universidad de Costa Rica (UCR)",
  degree: "Bachelor's degree in Business Informatics",
  dateRange: "2024 – 2027 (Expected)",
};

export const certifications: CertificationItem[] = [
  { name: "Azure AI-200 — Azure AI Cloud Developer Associate", status: "in-progress" },
];

export const languages: LanguageItem[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2" },
];

export const bio = {
  intro:
    "I'm a Business Informatics student at the Universidad de Costa Rica and a freelance software developer. I build production-grade business systems, not classroom exercises — two of the projects on this site were sold as paid freelance work and are running in production today.",
  approach:
    "My work combines software engineering with business process thinking. Before writing a data model, I look at how the work actually happens today — the paperwork, the spreadsheets, the exceptions nobody wrote down — and design around that instead of a generic template.",
  currently:
    "Lately I've been going deeper on Azure: SIGAU, one of my database projects, runs on Azure SQL Server with Row-Level Security and Dynamic Data Masking, and I'm currently preparing for the AI-200 (Azure AI Cloud Developer Associate) certification.",
};
