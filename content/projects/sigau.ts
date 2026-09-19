import type { Project } from "@/content/types/project";

export const sigau: Project = {
  slug: "sigau",
  title: "SIGAU — Database Security & Administration on Azure SQL",
  oneLiner:
    "University database-administration project: hardened SQL Server with Row-Level Security and Dynamic Data Masking, then migrated to Azure SQL Database.",
  role: "Team of 3 — my contribution: Row-Level Security, Dynamic Data Masking, SQL Server auditing, CIS hardening and the Azure SQL Database migration",
  type: "academico",
  team: "Team of 3",
  dateRange: "Jun – Jul 2026",
  status: "academic-complete",
  featured: false,
  links: {
    repo: "https://github.com/aleariasr/proyectoBD",
  },
  heroImage: {
    src: "/projects/sigau/diagrama-bd.png",
    alt: "SIGAU entity-relationship diagram",
  },
  gallery: [
    { src: "/projects/sigau/diagrama-bd.png", alt: "SIGAU entity-relationship diagram", caption: "Data model" },
  ],
  problem:
    "IF-5100 Database Administration required a full 'secure ecosystem' around a self-selected data domain: a hardened OS and RDBMS with antimalware, a physical and logical data model with a simulated LUN layout, in-memory tables, Row-Level Security, Dynamic Data Masking, SQL Server auditing, a cloud/HA deployment, and three of SQL Server 2025's new features. My team modeled a university academic-management system (SIGAU) as the domain.",
  solution: {
    overview:
      "SQL Server 2025 on a hardened Azure VM, later migrated to Azure SQL Database (PaaS), with a six-schema academic-management data model (people, academic operations, administration, security, external API calls, and a read-only view layer).",
    features: [
      "Row-Level Security via real CREATE SECURITY POLICY filter predicates on two tables, scoping visibility by campus for seven test users.",
      "Dynamic Data Masking on four columns (national ID, contact email, two address fields), each with a masking function matched to its data type, and a dedicated role granted UNMASK.",
      "Server- and database-level SQL Server Audit covering SELECT/INSERT/UPDATE/DELETE and schema/permission changes, writing to rolling audit files.",
      "Transparent Data Encryption (AES-256) at the database level.",
      "A validated backup/restore cycle: full backup with checksum and compression, restored into a separate database and verified file by file.",
      "An In-Memory OLTP table with a hash index for a high-write access-log use case.",
      "SQL Server 2025's native VECTOR type and cosine VECTOR_DISTANCE search — explicitly documented as using manually assigned test vectors, not real embeddings.",
      "A real external REST API call via sp_invoke_external_rest_endpoint, with the response status code extracted from actual JSON, not hardcoded.",
      "Native REGEXP_LIKE check constraints validating email, national ID and student ID formats.",
      "Access control through 23 dedicated read-only views (one per table) and three database roles, with no direct SELECT grants on base tables.",
    ],
  },
  architecture: {
    overview:
      "A simulated LUN layout across four Azure VM data disks (data files and the memory-optimized filegroup, transaction log, tempdb, and backups/audit, each on its own drive), five filegroups, and FULL recovery model.",
    decisions: [
      {
        decision: "Physical storage separated across drives to simulate a real LUN layout.",
        rationale:
          "The assignment weighted physical data-architecture design at 30 of 100 points; this maps directly to how a real SAN-backed SQL Server deployment separates data, log, tempdb and backup I/O.",
      },
      {
        decision: "All reads forced through one view per table, with no direct grants on base tables.",
        rationale: "Matches the assignment's explicit requirement and gives a single, auditable read surface per role.",
      },
      {
        decision: "The in-memory table was excluded from the Azure SQL Database migration.",
        rationale: "Azure SQL Database's Basic tier doesn't support memory-optimized tables — an intentional, documented trade-off rather than an oversight.",
      },
    ],
  },
  stack: {
    database: ["SQL Server 2025 Enterprise (evaluation)", "Azure SQL Database (Basic tier, post-migration)"],
    infra: ["Windows Server 2025 Datacenter", "Azure Virtual Machine", "PowerShell (CIS hardening scripts)"],
    external: ["Public REST test API (sp_invoke_external_rest_endpoint)"],
  },
  challenges: [
    {
      title: "CIS Benchmark hardening on two layers, with one honestly documented exception",
      problem:
        "Applying the CIS SQL Server and Windows Server benchmarks in full would have required a TLS certificate for forced encryption that wasn't available in the academic Azure environment.",
      solution:
        "Applied both benchmarks via six sequenced PowerShell scripts with a verification report, and explicitly documented ForceEncryption as left off, with the reason, instead of silently skipping it.",
    },
    {
      title: "Migrating a fully on-prem-hardened database to a managed PaaS tier",
      problem:
        "Moving from a self-managed SQL Server VM to Azure SQL Database meant some features and objects weren't portable as-is.",
      solution:
        "Identified and removed an unsupported filegroup reference, excluded the memory-optimized table and its dependent view for the target tier, and verified post-migration object and row counts matched.",
    },
    {
      title: "Implementing three genuinely new SQL Server 2025 features correctly",
      problem:
        "Vector search, external REST calls and advanced regex were all new to the team and easy to fake with cosmetic examples.",
      solution:
        "Implemented all three as real, executable T-SQL — native VECTOR_DISTANCE queries, a live REST call with real response parsing, and REGEXP_LIKE check constraints — while being explicit in the docs that the vector search uses test data, not real embeddings.",
    },
  ],
  results: {
    qualitative:
      "Delivered a fully hardened, audited academic-management database with a validated backup/restore strategy and a real migration to a managed cloud database service.",
    metrics: [],
  },
  learnings:
    "Figuring out what actually breaks when moving a fully hardened, on-prem SQL Server setup to a PaaS tier was the most useful part of the project — Azure SQL Database's Basic tier not supporting In-Memory OLTP meant that feature had to be deliberately dropped rather than assumed portable.",
  technologies: ["SQL Server", "Azure", "Windows Server", "T-SQL", "Row-Level Security"],
};
