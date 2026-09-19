import type { Project } from "@/content/types/project";

export const joyeria: Project = {
  slug: "joyeria",
  title: "Jewelry Management Platform — Cuero&Perla",
  oneLiner:
    "Point of sale, inventory and public storefront for a real jewelry retailer. In production for 9+ months with active support.",
  role: "Solo developer — design, backend, POS frontend, storefront and deployment",
  type: "cliente",
  team: "Solo",
  dateRange: "Nov 2025 – Present",
  status: "production",
  featured: true,
  links: {
    live: "https://cueroyperla.com",
  },
  heroImage: {
    src: "/projects/joyeria/pos-ventas.png",
    alt: "Joyería point-of-sale sales screen",
  },
  gallery: [
    { src: "/projects/joyeria/pos-ventas.png", alt: "Point of sale sales screen", caption: "Point of sale" },
    {
      src: "/projects/joyeria/pos-inventario.png",
      alt: "Inventory management screen",
      caption: "Inventory",
    },
    {
      src: "/projects/joyeria/pos-cierre-caja.png",
      alt: "Cash closing screen",
      caption: "Cash closing",
    },
    {
      src: "/projects/joyeria/pos-cuentas-cobrar.png",
      alt: "Accounts receivable screen",
      caption: "Accounts receivable",
    },
    {
      src: "/projects/joyeria/pos-pedidos-online.png",
      alt: "Online orders management screen",
      caption: "Online orders",
    },
    { src: "/projects/joyeria/pos-reportes.png", alt: "Reports screen", caption: "Reports" },
    {
      src: "/projects/joyeria/storefront-home.png",
      alt: "Public storefront home page",
      caption: "Public storefront",
    },
    {
      src: "/projects/joyeria/storefront-producto.png",
      alt: "Storefront product page",
      caption: "Product page",
    },
    {
      src: "/projects/joyeria/storefront-checkout.png",
      alt: "Storefront checkout flow",
      caption: "Checkout",
    },
  ],
  problem:
    "Cuero&Perla, a jewelry retailer in Grecia, Costa Rica, ran in-store sales, credit sales to regular customers and wanted a public online catalog, all off of paper receipts and a notebook of IOUs. They commissioned this as paid freelance work; I designed, built and still maintain it.",
  solution: {
    overview:
      "A three-app system: a Node/Express API on Supabase Postgres, a React point-of-sale admin app used in-store, and a public Next.js storefront, deployed on AWS Lambda and Vercel.",
    features: [
      "Point of sale supporting cash, card, transfer, credit and mixed payments, reconciling each tender type separately against the sale total with rounding tolerance.",
      "Two-phase cash closing: cash-type sales land in a same-day staging table first; closing the register migrates only that day's cash sales into the permanent ledger, locks that day's credit payments, and writes an immutable closing snapshot.",
      "Accounts receivable with one active account per client enforced at the database level, and every credit sale, partial payment and credit-note return logged as a separate, audited movement.",
      "Returns with stock reintegration and a required reason, distinguishing cash refunds from credit-account adjustments.",
      "Composite products (\"sets\"): available stock is computed as the minimum ratio across component items, with cycle protection so a set can never reference itself through another set, and a hard cap on component count.",
      "Product variants: different colors or designs of the same base piece, each shown as an independent catalog card rather than behind a variant selector.",
      "Thermal receipt printing over WebUSB using a from-scratch ESC/POS byte-command builder, with distinct ticket layouts per operation and a fallback to browser printing when WebUSB isn't available.",
      "Public online ordering with a full lifecycle (pending → payment verified → in process → shipped → delivered), supporting Sinpe Móvil (manual receipt verification) and Tilopay as payment methods.",
      "Inventory, low-stock and sales reports exported to styled Excel files.",
      "Product images on Cloudinary, transactional email via Resend, and web push notifications to admins on new online orders.",
    ],
  },
  architecture: {
    overview:
      "Backend on AWS Lambda behind a Function URL (wrapped with serverless-http), Supabase-hosted Postgres as the database, POS admin and storefront both deployed independently on Vercel.",
    decisions: [
      {
        decision: "Stateless cookie-session authentication instead of JWT.",
        rationale:
          "Avoids running a server-side session store and sidesteps session-affinity issues behind a proxy — a decision made for the original hosting setup, later carried over as the backend moved to Lambda.",
      },
      {
        decision: "A two-phase sales ledger (daily staging table, then the permanent table).",
        rationale:
          "Mirrors how a physical cash drawer actually closes: an explicit, auditable point-of-no-return moment rather than sales simply accumulating indefinitely.",
      },
      {
        decision: "Resend instead of raw SMTP for transactional email.",
        rationale: "Avoids blocked SMTP ports and connection timeouts on the original PaaS host.",
      },
      {
        decision: "All product images offloaded to Cloudinary, with Vercel's own image optimizer disabled.",
        rationale: "Avoids paying for image processing twice.",
      },
    ],
  },
  stack: {
    frontend: ["React 18.2 (Create React App)", "Axios", "ExcelJS"],
    backend: ["Node.js", "Express 4.18", "Supabase JS 2.84", "cookie-session", "Zod"],
    database: ["Supabase (PostgreSQL 17)"],
    infra: ["AWS Lambda (serverless-http)", "Vercel (POS + storefront)", "GitHub Actions (Lambda deploy)"],
    auth: ["Stateless cookie-session", "Role-based (administrador / dependiente)"],
    testing: ["Jest + Supertest (backend)", "React Testing Library + MSW (POS)", "Jest + Playwright (storefront E2E)"],
    external: ["Cloudinary", "Resend", "Web Push (VAPID)", "Sinpe Móvil", "Tilopay"],
  },
  challenges: [
    {
      title: "Thermal receipt printing with no printer SDK",
      problem:
        "The store's thermal printer needed real receipts printed from the browser, without a native app or a vendor SDK.",
      solution:
        "Built an ESC/POS command builder from scratch over WebUSB — alignment, bold, double-size text, paper-cut variants — with a vendor-ID allowlist for common POS-printer USB chipsets, falling back to browser printing when WebUSB isn't available.",
    },
    {
      title: "Composite product stock math without over- or under-counting",
      problem:
        "A jewelry \"set\" is made of several individually-sold pieces, and needed correct available-stock math without allowing a set to indirectly reference itself.",
      solution:
        "Available stock is the minimum of each component's stock divided by its required quantity, with an explicit self-reference check and a one-level circular-reference check before a set can be saved.",
    },
    {
      title: "Two-phase cash closing without a wrapping database transaction",
      problem:
        "Closing the register runs several sequential steps (copy staged sales, update credit payments, truncate staging, write the ledger row) as separate calls rather than inside one transaction — a real atomicity risk if it fails mid-way.",
      solution:
        "Known, accepted limitation for the current scale of the business; documented here rather than hidden. Wrapping it in a single transaction is the next hardening step if volume grows.",
    },
    {
      title: "Duplicate accounts-receivable rows appearing in production",
      problem:
        "Before a unique-account constraint existed, some clients ended up with more than one active receivable account, splitting their real balance across rows.",
      solution:
        "Wrote a one-time migration to consolidate the duplicates per client, then added a partial unique index (one active account per client) at the database level to prevent it from happening again.",
    },
  ],
  results: {
    qualitative:
      "In daily production use for 9+ months, running the store's point of sale, credit accounts and public online storefront, with active ongoing support.",
    metrics: [],
  },
  learnings:
    "Running cookie-based sessions across three separately deployed origins (a Lambda backend and two Vercel apps) meant CORS and cross-site cookie rules (SameSite=None, a dynamic origin allowlist) needed real attention — a decision shaped by the original hosting setup that's worth revisiting now that the backend has moved to Lambda.",
  technologies: [
    "Node.js",
    "Express",
    "React",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "AWS Lambda",
    "Vercel",
    "TypeScript",
  ],
};
