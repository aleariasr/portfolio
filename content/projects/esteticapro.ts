import type { Project } from "@/content/types/project";

export const esteticapro: Project = {
  slug: "esteticapro",
  title: "EsteticaPro — Appointment Management Prototype",
  oneLiner:
    "API-first scheduling platform for beauty salons, built to prove out a SaaS idea end to end. Prototype, not yet deployed to a paying customer.",
  role: "Solo developer",
  type: "personal",
  team: "Solo",
  dateRange: "Jun 2026",
  status: "prototype",
  featured: true,
  links: {
    repo: "https://github.com/aleariasr/estetica",
  },
  heroImage: {
    src: "/projects/esteticapro/dashboard.png",
    alt: "EsteticaPro dashboard",
  },
  gallery: [
    { src: "/projects/esteticapro/dashboard.png", alt: "EsteticaPro dashboard", caption: "Dashboard" },
    { src: "/projects/esteticapro/calendar.png", alt: "EsteticaPro calendar view", caption: "Calendar view" },
    {
      src: "/projects/esteticapro/appointments.png",
      alt: "EsteticaPro appointment booking screen",
      caption: "Appointment booking",
    },
    { src: "/projects/esteticapro/clients.png", alt: "EsteticaPro clients screen", caption: "Clients" },
    {
      src: "/projects/esteticapro/notifications.png",
      alt: "EsteticaPro notifications screen",
      caption: "Notifications",
    },
    { src: "/projects/esteticapro/services.png", alt: "EsteticaPro services screen", caption: "Services" },
  ],
  problem:
    "Beauty salons scheduling by phone, paper and WhatsApp run into the same failures every time: double-booked stylists, no-show losses from forgotten reminders, and no single source of truth when more than one person manages the calendar. I built EsteticaPro to prove out that domain end to end, architected from day one as something that could be commercialized.",
  solution: {
    overview:
      "A Django REST Framework API with JWT auth, a React/TypeScript frontend, and Celery + Redis for scheduled reminder delivery — including a working WhatsApp notification channel.",
    features: [
      "Conflict-free appointment booking: the end time is computed from the service duration and an overlap query runs on every save, scoped to that stylist, enforced at the model layer.",
      "An available-slots endpoint that reuses the exact same overlap query as the booking validation, instead of a separate rules engine.",
      "Role-scoped dashboard and data access: admins and receptionists see everything, an esthetician's queryset is hard-filtered to their own appointments.",
      "A notification queue with explicit pending/sent/failed states, dispatched and retried by a Celery Beat worker every minute — not fire-and-forget messaging.",
      "WhatsApp notifications wired through a dedicated service class, isolating a self-hosted automation gateway (OpenWA) from the scheduling and Celery code.",
    ],
  },
  architecture: {
    overview:
      "Django apps split by business domain (accounts, services, clients, appointments, notifications, dashboard), each mounted under a flat REST API prefix.",
    decisions: [
      {
        decision: "API-first, modular monolith split strictly by domain.",
        rationale: "Leaves room for a future mobile client or third-party integration without redesigning the backend.",
      },
      {
        decision: "New-appointment side effects triggered by a direct function call rather than Django signals.",
        rationale:
          "Pragmatic and easy to follow, at the cost of a direct dependency from the appointments app on the notifications app's internals — a trade-off I'd revisit before scaling this to more event types.",
      },
      {
        decision: "WhatsApp delivery isolated behind a single service class.",
        rationale:
          "Keeps the HTTP calls to the automation gateway out of the Celery task and the manual-resend view, so swapping providers later touches one file.",
      },
    ],
  },
  stack: {
    frontend: ["React 19.2", "Vite 8", "TypeScript", "FullCalendar"],
    backend: ["Django 6.0.5", "Django REST Framework 3.17.1", "djangorestframework-simplejwt"],
    database: ["MySQL"],
    infra: ["Celery 5.6", "Redis 7.4 (broker & result backend)"],
    auth: ["JWT (SimpleJWT)"],
    external: [
      "OpenWA — self-hosted, unofficial WhatsApp automation gateway (not Meta's official Business API)",
    ],
  },
  challenges: [
    {
      title: "Getting an unofficial WhatsApp gateway working end to end",
      problem:
        "There was no approved WhatsApp Business API access for a personal project, but the reminder flow needed real WhatsApp delivery to be worth demonstrating.",
      solution:
        "Integrated OpenWA, a self-hosted gateway that automates a real WhatsApp Web session via QR login, behind a dedicated service class with Costa Rica phone-number normalization and a scripted local boot sequence that starts the gateway, opens a session over its REST API and polls until it's ready. It works, end to end, without an official Business API integration.",
    },
    {
      title: "One overlap query serving two different jobs",
      problem:
        "Preventing double-bookings and suggesting available slots are normally built as two separate pieces of logic that can drift apart.",
      solution:
        "Both the model-level booking validation and the available-slots endpoint call the same overlap predicate, so there's exactly one definition of what counts as a conflict.",
    },
    {
      title: "Making reminders durable instead of fire-and-forget",
      problem: "A reminder that silently fails to send is worse than no reminder system at all.",
      solution:
        "Notifications carry an explicit pending/sent/failed state, and a Celery Beat worker polls every minute to dispatch and retry, so a failure is visible and re-triggerable instead of lost.",
    },
  ],
  results: {
    qualitative:
      "A functional prototype that proves out the core scheduling domain and a working (if unofficial) WhatsApp notification channel. Not deployed and not sold.",
    metrics: [],
  },
  learnings:
    "Before this could go to a real paying salon, two things would need to change: moving off the unofficial WhatsApp gateway to the official Business API (the current one carries real terms-of-service risk for a commercial customer), and tightening access control on a couple of endpoints that ended up under permissive defaults while the role system was still being built out.",
  technologies: ["Django", "Django REST Framework", "React", "TypeScript", "Celery", "Redis", "MySQL", "JWT"],
};
