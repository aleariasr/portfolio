import type { Project } from "@/content/types/project";

export const lics: Project = {
  slug: "lics",
  title: "LICS — ERP for Laboratorio de Inyección Castro Solís",
  oneLiner:
    "Offline-first ERP that replaced a legacy DBF system for a real fuel-injector lab. Live in production today.",
  role: "Solo developer — design, backend, frontend, infrastructure and deployment",
  type: "cliente",
  team: "Solo",
  dateRange: "Jul 2026 – Present",
  status: "production",
  featured: true,
  links: {
    repo: "https://github.com/aleariasr/laboratorio-inyeccion-castro-solis",
  },
  heroImage: {
    src: "/projects/lics/architecture.png",
    alt: "LICS deployment architecture: Electron desktop app, Nginx, Next.js and Django REST Framework, PostgreSQL",
  },
  gallery: [
    { src: "/projects/lics/login.png", alt: "LICS login screen", caption: "Login" },
    { src: "/projects/lics/dashboard.png", alt: "LICS main dashboard", caption: "Dashboard" },
    {
      src: "/projects/lics/inventory.png",
      alt: "LICS inventory module with stock movement history",
      caption: "Inventory & movement history",
    },
    {
      src: "/projects/lics/sale.png",
      alt: "LICS sale creation and confirmation screen",
      caption: "Sale creation",
    },
    {
      src: "/projects/lics/purchase-costs.png",
      alt: "LICS purchase import cost calculation",
      caption: "Import cost calculation",
    },
    {
      src: "/projects/lics/service.png",
      alt: "LICS injector service tracking",
      caption: "Service tracking",
    },
    { src: "/projects/lics/report.png", alt: "LICS generated report", caption: "Reports" },
    {
      src: "/projects/lics/barcode-label.png",
      alt: "LICS printed barcode label",
      caption: "Barcode labels",
    },
  ],
  problem:
    "Laboratorio de Inyección Castro Solís, a real diesel and gasoline fuel-injector lab, ran on a legacy FoxPro/DBF system (tables named INVEN01 through INVEN08) with no dedicated IT staff and unreliable internet. They hired me directly, as freelance work, to replace it with something a non-technical operator could run fully offline, trust for audit purposes, and restore themselves if something broke.",
  solution: {
    overview:
      "Django REST Framework + PostgreSQL 17 backend split into service and selector layers per domain, a Next.js frontend, packaged as a native Windows desktop app via Electron and WSL2 so the business can run with zero dependency on internet access.",
    features: [
      "Inventory with stock derived entirely from an append-only movement history (StockMovement) — no product ever stores its own stock count as an editable field.",
      "Product variants and equivalences: multiple product rows can share a standard_code to represent original/generic/equivalent parts, each with independent price, stock and location.",
      "Purchasing and import costing: draft/confirmed/cancelled purchase lifecycle, per-cost exchange rates, and an append-only cost/margin/suggested-price history per purchase.",
      "Sales with a draft/confirmed/cancelled state machine; confirming or cancelling row-locks the sale and re-validates stock inside an atomic transaction before touching inventory.",
      "Injector service tracking with a real state machine (received → in progress → ready → delivered), capturing technical fields (resistance, leakage, inductance, isolation) and consuming accessory stock automatically.",
      "Weekly cash closing: one snapshot per week, computed and frozen from confirmed sales and delivered services in that date range.",
      "Physical inventory counts with draft capture and an approval step that generates reconciling stock adjustments.",
      "Eight built-in reports: low stock, stock by location, product movement history, supplier pricing, purchases by supplier, sales by date, top-selling products, top customers.",
      "PDF documents and Code128 barcode labels generated locally with ReportLab — no external service required.",
      "Universal search across products, locations, suppliers, customers, sales and services.",
      "A dedicated legacy-migration module that moved 73 suppliers, 3,655 products and 2,079 purchases from the old DBF system into the new schema, with its own staging, validation and issue-tracking tables.",
      "Role-based access control with five fixed roles (admin, inventory, sales, customers, read-only), enforced per module and per HTTP action, not just by staff/non-staff status.",
    ],
  },
  architecture: {
    overview:
      "Docker Compose stack (Django REST Framework, PostgreSQL, Next.js, Nginx) running inside WSL2 on the client's own Windows machine, wrapped in an Electron shell so it looks and feels like a normal desktop application.",
    decisions: [
      {
        decision: "Stock is never a stored, editable field — only movements.",
        rationale:
          "Guarantees traceability: cancelling a sale creates a linked reversal movement instead of editing or deleting the original record, so the audit trail is permanent.",
      },
      {
        decision: "Nginx is the only port exposed by the stack.",
        rationale:
          "The backend, database and frontend containers are Docker-internal only, minimizing the attack surface on a machine that's also used for other office tasks.",
      },
      {
        decision: "WSL2 + Docker Engine + Electron instead of a Linux kiosk machine.",
        rationale:
          "The client's PC is also used for Office and other day-to-day tasks, which ruled out a dedicated Linux kiosk box. This runs the same Docker stack on hardware the client already owns.",
      },
      {
        decision: "No SSH access in production.",
        rationale:
          "All administrative actions run locally through the Electron app or a person physically at the machine, which was judged a net security improvement over the original SSH-based remote-support model.",
      },
      {
        decision: "Legacy part-equivalence grouping reused the existing product-variant model instead of a new table.",
        rationale:
          "The variant model (shared standard_code, variant_kind, an add-variant endpoint) already existed unused since an earlier migration — the 2026 equivalence-grouping work only needed to populate it, not extend the schema.",
      },
    ],
  },
  stack: {
    frontend: ["Next.js 16.2.10", "React 19.2.4", "TypeScript", "Tailwind CSS 4"],
    backend: ["Django 5.2.6", "Django REST Framework 3.16.1", "Python 3.13"],
    database: ["PostgreSQL 17"],
    infra: [
      "Docker Compose (dev & prod)",
      "Nginx 1.28",
      "Gunicorn 23",
      "Electron + WSL2 (Windows packaging)",
      "GitHub Actions (self-hosted Windows runner, installer build)",
    ],
    auth: ["Django User/Group/Permission", "DRF Token authentication", "5 fixed role groups"],
    testing: ["Django TestCase, 600+ automated tests"],
  },
  challenges: [
    {
      title: "WSL2 silently powering off the whole distro",
      problem:
        "In production, the WSL2 distro running the stack would intermittently shut down on its own, taking the whole application down with it.",
      solution:
        "Root-caused through systemd/journalctl log correlation to a missing keep-alive client — WSL2 shuts its distro down when no process stays attached. Fixed with a scheduled task that holds a persistent WSL client open, then hardened further after a recurrence.",
    },
    {
      title: "Electron/Chromium losing window focus",
      problem:
        "The Electron window's web contents wouldn't reliably regain focus after being refocused, a known unresolved issue upstream in Electron/Chromium.",
      solution:
        "Mitigated (not fully fixed, and documented as such) with a focus handler plus a polling refocus check every 1.5 seconds.",
    },
    {
      title: "Migrating real legacy DBF data with corrupted files and bad dates",
      problem:
        "The client's legacy DBF files included a genuinely corrupted sales table (confirmed identical across two independently supplied copies) and a Y2K-style two-digit-year bug in purchase dates.",
      solution:
        "Wrote a custom DBF reader to handle files that a standard library mis-terminated on stray bytes, excluded the corrupted table from migration after byte-level verification, and applied a deterministic year-correction rule validated against the resulting date distribution.",
    },
    {
      title: "Preventing double-confirm and double-cancel races on sales",
      problem:
        "Concurrent requests to confirm or cancel the same sale could race and corrupt stock movements.",
      solution:
        "Every confirm/cancel operation row-locks the sale with select_for_update() inside an atomic transaction and re-validates the state machine before touching stock.",
    },
  ],
  results: {
    qualitative:
      "Replaced a fully manual, DBF-based workflow with a system now running the lab's day-to-day inventory, purchasing, sales and service tracking in production, after migrating the client's real historical data.",
    metrics: [],
  },
  learnings:
    "Packaging a Linux-first stack (Docker on WSL2) for a single non-technical Windows user surfaced real OS-level problems — silent WSL2 shutdowns, an Electron focus bug — that don't show up in a normal multi-machine deployment. Hardening for one physical machine with no IT staff behind it is a genuinely different problem than hardening for a server fleet.",
  technologies: [
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Next.js",
    "React",
    "TypeScript",
    "Docker",
    "Electron",
    "Nginx",
    "Python",
  ],
};
