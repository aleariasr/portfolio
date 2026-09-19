import type { ProcessStep, Service } from "@/content/types/service";

export const services: Service[] = [
  {
    slug: "sistemas-a-medida",
    title: "Custom business systems",
    forWho:
      "Businesses running a critical part of their operation on spreadsheets, paper, or an old system nobody maintains anymore.",
    whatYouGet: [
      "A system modeled around how your business actually operates, not a generic template with your logo on it.",
      "An audit trail on every operation that changes money or stock, so you can answer 'who did what, when' without guessing.",
      "Your existing historical data migrated in, validated, instead of starting from a blank database.",
      "Documentation someone else could pick up without having to ask me first.",
    ],
    proofProjectSlugs: ["lics"],
  },
  {
    slug: "pos-ecommerce",
    title: "Point of sale & e-commerce",
    forWho: "Retail businesses that need in-store sales and an online storefront working off the same inventory.",
    whatYouGet: [
      "One inventory shared between the register and the online store, so stock never drifts between channels.",
      "Cash handling that matches how a physical register actually closes at the end of the day.",
      "Credit accounts for regular customers, tracked separately from cash sales.",
      "A public storefront with a real checkout, not just a product catalog.",
    ],
    proofProjectSlugs: ["joyeria"],
  },
  {
    slug: "migracion-sistemas-legados",
    title: "Legacy system migration",
    forWho:
      "Businesses stuck on an old system (DBF files, spreadsheets, a tool the original vendor stopped supporting) who are worried about losing years of history if they switch.",
    whatYouGet: [
      "A migration plan with staging and validation steps, not a raw data dump into a new schema.",
      "Reconciliation between the old and new numbers before your team ever stops using the old system.",
      "A clear, documented cutover, so there's a point where everyone knows the old system is retired for good.",
    ],
    proofProjectSlugs: ["lics"],
  },
];

export const workingProcess: ProcessStep[] = [
  {
    title: "Understand the real workflow",
    description:
      "Before writing a data model, I look at how the work actually happens today: the paperwork, the spreadsheets, the exceptions nobody wrote down.",
  },
  {
    title: "Design around your data, not a template",
    description:
      "The data model and scope come from what I saw in step one, including what your historical records will need to migrate into.",
  },
  {
    title: "Build and validate against real data",
    description:
      "Before cutover, migrated or seeded data is checked against the old system's numbers, not just assumed correct.",
  },
  {
    title: "Deploy and stay reachable",
    description:
      "Both client projects on this site are still supported after launch, not handed off and abandoned.",
  },
];
