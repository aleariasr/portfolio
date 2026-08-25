"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Cases", href: "#case-studies", id: "case-studies" },
  { label: "About", href: "#about", id: "about" },
];

const secondaryProjects = [
  {
    label: "Freelance · Retail POS & E-Commerce",
    title: "Jewelry Management Platform — Cuero&Perla",
    description:
      "Commissioned freelance system for a real Costa Rican jewelry retailer: point of sale, inventory, storefront, checkout and online orders. Sold and in daily production use for 9+ months.",
    image: "/projects/pos-ventas.png",
    technologies: ["Node.js", "Express", "React", "Next.js", "Supabase", "AWS"],
    github: "https://github.com/aleariasr/joyeria",
    caseStudy: "#case-joyeria",
  },
  {
    label: "SaaS Appointment Platform",
    title: "EsteticaPro — Appointment Management SaaS",
    description:
      "API-first scheduling platform for beauty salons with role-based access, conflict-free booking and Celery/Redis reminder workflows.",
    image: "/projects/dashboard-estetica.png",
    technologies: ["Django", "DRF", "React", "TypeScript", "Redis", "Celery"],
    github: "https://github.com/aleariasr/estetica",
    caseStudy: "#case-estetica",
  },
  {
    label: "Academic Management Platform",
    title: "NexoAcadémico",
    description:
      "Full-stack platform for university course management: enrollment, assignments, submissions and grading with role-based workflows.",
    image: "/projects/nexoacademico-dashboard.png",
    technologies: ["Next.js", "React", "TypeScript", "Django", "MySQL"],
    github: "https://github.com/aleariasr/nexoacademico",
    caseStudy: "#case-nexo",
  },
];

const licsScreens = [
  {
    src: "/projects/lics-login.png",
    alt: "LICS login screen",
    caption: "Login",
  },
  {
    src: "/projects/lics-dashboard.png",
    alt: "LICS main dashboard",
    caption: "Dashboard",
  },
  {
    src: "/projects/lics-inventory.png",
    alt: "LICS inventory module with stock movement history",
    caption: "Inventory & movement history",
  },
  {
    src: "/projects/lics-sale.png",
    alt: "LICS sale creation and confirmation screen",
    caption: "Sale creation",
  },
  {
    src: "/projects/lics-purchase-costs.png",
    alt: "LICS purchase import cost calculation",
    caption: "Import cost calculation",
  },
  {
    src: "/projects/lics-service.png",
    alt: "LICS injector service tracking",
    caption: "Service tracking",
  },
  {
    src: "/projects/lics-report.png",
    alt: "LICS generated report",
    caption: "Reports",
  },
  {
    src: "/projects/lics-barcode-label.png",
    alt: "LICS printed barcode label",
    caption: "Barcode labels",
  },
];

const joyeriaScreens = [
  {
    src: "/projects/pos-ventas.png",
    alt: "Joyería point-of-sale screen",
    caption: "Point of sale",
  },
  {
    src: "/projects/storefront-home.png",
    alt: "Joyería public storefront home page",
    caption: "Public storefront",
  },
  {
    src: "/projects/storefront-producto.png",
    alt: "Joyería storefront product page",
    caption: "Product page",
  },
  {
    src: "/projects/storefront-checkout.png",
    alt: "Joyería storefront checkout flow",
    caption: "Checkout",
  },
];

const esteticaScreens = [
  {
    src: "/projects/dashboard-estetica.png",
    alt: "EsteticaPro dashboard",
    caption: "Dashboard",
  },
  {
    src: "/projects/calendar-estetica.png",
    alt: "EsteticaPro calendar view",
    caption: "Calendar view",
  },
  {
    src: "/projects/appointments-estetica.png",
    alt: "EsteticaPro appointment booking screen",
    caption: "Appointment booking",
  },
];

const nexoScreens = [
  {
    src: "/projects/nexoacademico-dashboard.png",
    alt: "NexoAcadémico dashboard",
    caption: "Dashboard",
  },
  {
    src: "/projects/nexoacademico-tasks.png",
    alt: "NexoAcadémico task board",
    caption: "Task board",
  },
  {
    src: "/projects/nexoacademico-liquidglass.png",
    alt: "NexoAcadémico liquid glass shader UI",
    caption: "Liquid glass UI",
  },
];

const teamProjects = [
  {
    label: "Team of 3 · IF-5100 Database Administration",
    title: "SIGAU",
    description:
      "University academic-management database on Azure SQL Server, deployed and hardened on an Azure virtual machine: CIS-benchmark hardening, Row-Level Security, Dynamic Data Masking, auditing and a validated backup/restore strategy — fully documented.",
    image: "/projects/sigau-screenshot.png",
    technologies: ["Azure", "SQL Server", "Windows Server", "Security"],
    github: "https://github.com/aleariasr/proyectoBD",
  },
  {
    label: "Team of 4 · IF5000 Networks",
    title: "Network & Security Infrastructure",
    description:
      "Deployed and hardened a multi-service Linux server: Docker workloads, a Tailscale VPN, Suricata IDS and Fail2ban with a real-time alerting pipeline and Prometheus/Grafana monitoring.",
    image: "/projects/if5000-screenshot.png",
    technologies: ["Docker", "Linux", "Suricata IDS", "Prometheus"],
    github: "https://github.com/KendalTC/proyecto-if5000",
  },
  {
    label: "Team · IF4001 Operating Systems",
    title: "TCP/IP Remote Administration",
    description:
      "Client-server remote administration tool in Python using raw TCP sockets, multithreading and a custom GUI for monitoring, screen capture and mouse control.",
    image: "/projects/tcpip.png",
    technologies: ["Python", "Sockets", "Threading", "CustomTkinter"],
    github: "https://github.com/aleariasr/proyectoSistemasOperativos",
  },
];

function ProjectImage({
  src,
  alt,
  caption,
  padded = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  padded?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  const frame = (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        className={padded ? "object-contain" : "object-cover"}
        sizes="(max-width: 768px) 100vw, 33vw"
        onError={() => setFailed(true)}
      />
    </div>
  );

  return (
    <div>
      {padded ? (
        <div className="flex items-center justify-center rounded-2xl bg-zinc-100 p-3">
          {frame}
        </div>
      ) : (
        frame
      )}
      {caption ? <p className="mt-2 text-xs text-zinc-500">{caption}</p> : null}
    </div>
  );
}

const typingText = "Building real business software.";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");

  const isNavClickScrollingRef = useRef(false);
  const navClickTimeoutRef = useRef<number | null>(null);

  const activeIndex = navItems.findIndex((item) => item.id === activeSection);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof navItems)[number],
  ) => {
    event.preventDefault();

    const section = document.getElementById(item.id);

    setActiveSection(item.id);
    isNavClickScrollingRef.current = true;

    if (navClickTimeoutRef.current) {
      window.clearTimeout(navClickTimeoutRef.current);
    }

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    navClickTimeoutRef.current = window.setTimeout(() => {
      isNavClickScrollingRef.current = false;
      setActiveSection(item.id);
    }, 750);
  };

  useEffect(() => {
    let index = 0;

    const type = () => {
      setTypedText(typingText.slice(0, index + 1));
      index += 1;

      if (index <= typingText.length) {
        window.setTimeout(type, 45);
      }
    };

    const start = window.setTimeout(type, 500);

    return () => window.clearTimeout(start);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      if (isNavClickScrollingRef.current) return;

      const marker = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= marker) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (navClickTimeoutRef.current) {
        window.clearTimeout(navClickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="bg-white pb-24 text-zinc-950 sm:pb-0">
      <header className="fixed left-0 right-0 top-4 z-50 hidden px-4 sm:block">
        <nav className="fade-in mx-auto flex max-w-5xl items-center justify-between rounded-full border border-zinc-200 bg-white/85 px-5 py-3 shadow-sm backdrop-blur">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, navItems[0])}
            className="text-sm font-semibold"
          >
            Alejandro Arias
          </a>

          <div className="flex items-center gap-3">
            <div className="relative flex rounded-full bg-zinc-100 p-1 text-sm text-zinc-600">
              <span
                className="absolute left-1 top-1 h-9 w-24 rounded-full bg-black transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${safeActiveIndex * 6}rem)`,
                }}
              />

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item)}
                  className={`relative z-10 flex h-9 w-24 items-center justify-center rounded-full transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="/Alejandro_Arias_CV.pdf"
              download
              className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-zinc-800"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:hidden">
        <nav className="fade-in mx-auto flex max-w-md items-center justify-between rounded-full border border-zinc-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, navItems[0])}
            className="text-sm font-semibold"
          >
            Alejandro Arias
          </a>

          <a
            href="/Alejandro_Arias_CV.pdf"
            download
            className="rounded-full bg-black px-4 py-2 text-xs text-white"
          >
            CV
          </a>
        </nav>
      </header>

      <nav className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-full border border-zinc-200 bg-white/90 p-1 shadow-lg backdrop-blur sm:hidden">
        <div className="relative grid grid-cols-4 text-xs font-medium text-zinc-600">
          <span
            className="absolute bottom-1 top-1 rounded-full bg-black transition-transform duration-300 ease-out"
            style={{
              width: "25%",
              transform: `translateX(${safeActiveIndex * 100}%)`,
            }}
          />

          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(event) => handleNavClick(event, item)}
              className={`relative z-10 rounded-full px-2 py-3 text-center transition-colors duration-300 ${
                activeSection === item.id ? "text-white" : "text-zinc-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-5 pt-24 sm:px-6"
      >
        <div className="mx-auto max-w-4xl text-left sm:text-center">
          <div className="space-y-6 sm:space-y-7">
            <p className="fade-up text-xs uppercase tracking-[0.16em] text-zinc-500 sm:text-sm sm:tracking-[0.2em]">
              Business Informatics · Costa Rica
            </p>

            <h1 className="fade-up-delay-1 mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              <span className="block text-zinc-500">Hey there,</span>
              <span className="block">I&apos;m Alejandro Arias.</span>
            </h1>

            <p className="fade-up-delay-2 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:mx-auto sm:text-xl">
              I build backend-heavy business systems that companies actually
              run day to day — ERPs, POS platforms, scheduling and
              academic-management software. Two of the systems below were
              sold as freelance work and are live in production right now.
            </p>

            <div className="fade-up-delay-2 flex flex-wrap gap-2 sm:justify-center">
              <span className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:text-sm">
                Open to full-time roles
              </span>
              <span className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:text-sm">
                Available for freelance / contract work
              </span>
            </div>

            <div className="fade-up-delay-3 min-h-8 max-w-full rounded-2xl border bg-zinc-50 px-4 py-3 text-base font-medium text-zinc-900 sm:mx-auto sm:w-fit sm:border-0 sm:bg-white sm:px-0 sm:py-0 sm:text-lg">
              <span>{typedText || "\u00A0"}</span>
              <span className="ml-1 animate-pulse">|</span>
            </div>

            <div className="fade-up-delay-3 grid max-w-3xl grid-cols-3 gap-2 pt-2 text-left sm:mx-auto sm:gap-3 sm:pt-3">
              <div className="rounded-2xl border p-3 sm:p-4">
                <p className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Focus
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  Backend
                </p>
              </div>

              <div className="rounded-2xl border p-3 sm:p-4">
                <p className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Building
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  ERPs &amp; POS
                </p>
              </div>

              <div className="rounded-2xl border p-3 sm:p-4">
                <p className="text-xs font-medium text-zinc-500 sm:text-sm">
                  Learning
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-base">
                  Cloud
                </p>
              </div>
            </div>

            <div className="fade-up-delay-3 flex flex-wrap gap-2 pt-3 sm:justify-center sm:gap-3 sm:pt-4">
              {["Java", "Python", "Django", "React", "AWS", "Azure"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-2 text-xs sm:px-4 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="fade-up-delay-3 flex flex-col gap-3 pt-5 sm:flex-row sm:justify-center sm:pt-6">
              <a
                href="#work"
                onClick={(event) => handleNavClick(event, navItems[1])}
                className="rounded-full bg-black px-6 py-3 text-center text-white transition hover:bg-zinc-800"
              >
                View My Work
              </a>

              <a
                href="/Alejandro_Arias_CV.pdf"
                download
                className="rounded-full border border-zinc-300 px-6 py-3 text-center transition hover:border-zinc-500 hover:bg-zinc-50"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            Real Systems, Real Problems
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
            Software I&apos;ve built beyond classroom exercises.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
            The systems below run real operations — inventory that has to
            reconcile, appointments that can&apos;t double-book, cash drawers
            that have to close clean, records that have to survive an audit.
          </p>
        </div>

        <article className="overflow-hidden rounded-[1.5rem] border bg-zinc-50 sm:rounded-[2rem]">
          <div className="p-5 sm:p-6 md:p-10">
            <div className="mb-6 flex flex-col justify-between gap-6 md:mb-8 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                    Main Project · Offline-First ERP
                  </p>
                  <span className="rounded-full bg-black px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Freelance · Paid Client Project
                  </span>
                </div>

                <h3 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                  LICS — ERP for Laboratorio de Inyección Castro Solís
                </h3>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:min-w-fit">
                <a
                  href="#case-lics"
                  className="group rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-zinc-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-950/20"
                >
                  Case Study
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="https://github.com/aleariasr/laboratorio-inyeccion-castro-solis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full border border-zinc-300 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-950 hover:shadow-md"
                >
                  View GitHub
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[230px] overflow-hidden rounded-2xl border bg-white shadow-sm sm:aspect-[16/9] sm:min-h-0 sm:rounded-3xl">
              <Image
                src="/projects/lics-architecture.png"
                alt="LICS deployment architecture: Electron desktop app, Nginx, Next.js and Django REST Framework, PostgreSQL"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                Offline-first enterprise resource planning system for a real
                diesel and gasoline fuel-injector laboratory: inventory,
                purchasing, import costing, sales, customers, injector service
                tracking,
                physical counts and reporting. Packaged as a native Windows
                desktop app so the business can run with zero dependency on
                internet access. Commissioned as a freelance engagement and
                now running the lab&apos;s actual day-to-day operations,
                replacing a legacy DBF system with zero prior IT
                infrastructure.
              </p>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Django REST Framework",
                    "PostgreSQL",
                    "Next.js",
                    "Docker",
                    "Electron",
                    "Nginx",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border bg-white px-3 py-1 text-sm text-zinc-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-zinc-500">Domain</p>
                    <p className="font-semibold">Offline ERP</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-zinc-500">Scope</p>
                    <p className="font-semibold">Desktop + Full Stack</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-zinc-500">Reliability</p>
                    <p className="font-semibold">372 Tests · Backups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {secondaryProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.5rem] border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem]"
            >
              <div className="flex min-h-[220px] items-center justify-center bg-zinc-100 p-3 sm:min-h-[260px] sm:p-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                  {project.label}
                </p>

                <h3 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border px-3 py-1 text-sm text-zinc-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={project.caseStudy}
                    className="rounded-full border border-zinc-300 px-5 py-2 text-center text-sm transition hover:border-zinc-500 hover:bg-zinc-50"
                  >
                    Case Study
                  </a>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-black px-5 py-2 text-center text-sm text-white transition hover:bg-zinc-800"
                    >
                      View GitHub
                    </a>
                  ) : (
                    <span className="rounded-full bg-zinc-100 px-5 py-2 text-center text-sm text-zinc-500">
                      Private client codebase
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="case-studies"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28"
      >
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            Case Studies
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
            How each system was designed.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Problem, process, solution — the same breakdown engineering teams
            use in interviews. LICS and the jewelry platform were sold as
            paid freelance work to real companies; all four run real domain
            logic, not CRUD scaffolding.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6">
          <article
            id="case-lics"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                Offline-First ERP
              </p>
              <span className="rounded-full bg-black px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                Freelance · Paid Client Project
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              LICS — Laboratorio de Inyección Castro Solís
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {licsScreens.map((shot) => (
                <ProjectImage key={shot.src} {...shot} />
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  01 · Problem
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  Laboratorio de Inyección Castro Solís, a real diesel and
                  gasoline fuel-injector lab, was running on a legacy
                  FoxPro/DBF system — tables named{" "}
                  <code className="text-sm">INVEN01</code> through{" "}
                  <code className="text-sm">INVEN08</code> — with no dedicated
                  IT staff and unreliable internet. They hired me directly, as
                  freelance work, to replace it with something a
                  non-technical operator could run fully offline, trust for
                  audit purposes, and restore themselves if something broke.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  02 · Process
                </h4>
                <ul className="mt-3 max-w-3xl space-y-2.5">
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Movement-sourced inventory.
                      </strong>{" "}
                      Stock is never stored as a column — it&apos;s always
                      derived from an append-only movement history.
                      Cancelling a sale doesn&apos;t delete or edit a record;
                      it creates a linked reversal movement, so the audit
                      trail is permanent.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Concurrency-safe by design.
                      </strong>{" "}
                      Every confirm/cancel operation row-locks with{" "}
                      <code className="text-sm">select_for_update()</code>{" "}
                      inside an atomic transaction and re-validates the state
                      machine before touching stock — no race conditions on
                      double-confirm or double-cancel.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Backups that prove themselves.
                      </strong>{" "}
                      A dump → restore-and-validate → checksum pipeline
                      discards any backup that fails a step. The rule the
                      system enforces: a backup only counts once it has been
                      restored and verified, not just written to disk.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Shipped on real Windows hardware.
                      </strong>{" "}
                      Packaged with WSL2 and a real Docker Engine inside an
                      Electron shell. Debugging this in production surfaced
                      an intermittent failure where WSL2 silently powered off
                      the whole distro — traced through system logs to a
                      missing keep-alive process, fixed, then hardened again
                      after a recurrence.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        A real legacy migration, not a data dump.
                      </strong>{" "}
                      DBF records move through staging, validation,
                      normalization, import and stock reconciliation, tracked
                      in dedicated migration-audit tables so legacy
                      identifiers never leak into the production schema.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  03 · Solution
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  Django 5.2 + DRF on PostgreSQL 17, split into service and
                  selector layers per domain (inventory, sales, purchasing,
                  service tracking). 372+ automated backend tests, 16+
                  internal docs covering architecture, security and disaster
                  recovery, and real barcode label printing. It&apos;s the
                  lab&apos;s day-to-day system today — a paid deliverable
                  running their actual operations offline, not a demo.
                </p>
              </div>
            </div>
          </article>

          <article
            id="case-joyeria"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                Retail Operations
              </p>
              <span className="rounded-full bg-black px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                Freelance · Paid Client Project
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              Jewelry Management Platform — Cuero&amp;Perla
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {joyeriaScreens.map((shot) => (
                <ProjectImage key={shot.src} {...shot} />
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  01 · Problem
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  Cuero&amp;Perla, a jewelry retailer in Grecia, Costa Rica,
                  needed to run in-store sales, credit sales to regular
                  customers and a public online catalog off of what was
                  effectively paper receipts and a notebook of IOUs. They
                  commissioned this as paid freelance work — I designed,
                  built and still maintain it.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  02 · Process
                </h4>
                <ul className="mt-3 max-w-3xl space-y-2.5">
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Mixed-payment reconciliation.
                      </strong>{" "}
                      A single sale can split across cash, card and transfer
                      — the backend tracks each amount separately and
                      reconciles all three tender types plus credit payments
                      and misc income into one daily total.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Two-phase cash closing.
                      </strong>{" "}
                      Sales land in a same-day staging table first; closing
                      the register atomically migrates only the cash sales
                      into the permanent ledger, locks the day&apos;s credit
                      payments, and writes an immutable closing snapshot — a
                      real point-of-no-return, the way a physical cash drawer
                      closes.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Accounts receivable that doesn&apos;t conflate a
                        payment with a return.
                      </strong>{" "}
                      A real payment and a credit-note return touch the
                      balance differently, so they&apos;re kept as separate,
                      audited operations instead of one generic
                      &quot;reduce balance&quot; function.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Composite products with cycle protection.
                      </strong>{" "}
                      Jewelry &quot;sets&quot; compute availability as the
                      minimum ratio across their components and run a
                      recursive check so a set can never reference itself
                      through another set.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Thermal receipt printing over WebUSB.
                      </strong>{" "}
                      Talks directly to the store&apos;s receipt printer with
                      raw ESC/POS byte sequences, falling back to browser
                      printing when WebUSB isn&apos;t available.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  03 · Solution
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  19 backend models, cookie-session auth with role-based
                  permissions, Cloudinary images, transactional email and web
                  push, Excel exports. Separate unit, integration and
                  performance test suites. 810 commits over 9 months,
                  deployed on Railway and Vercel — sold, shipped and in daily
                  use, not a portfolio demo.
                </p>
              </div>
            </div>
          </article>

          <article
            id="case-estetica"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                Scheduling Systems
              </p>
              <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-600">
                Independent · Built for Commercialization
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              EsteticaPro — Appointment Management SaaS
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {esteticaScreens.map((shot) => (
                <ProjectImage key={shot.src} {...shot} />
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  01 · Problem
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  Beauty salons scheduling by phone, paper and WhatsApp run
                  into the same three failures every time: double-booked
                  stylists, no-show losses from forgotten reminders, and no
                  single source of truth when more than one person manages
                  the calendar. I designed EsteticaPro as a SaaS-shaped
                  platform from day one, architected so it could be
                  commercialized later.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  02 · Process
                </h4>
                <ul className="mt-3 max-w-3xl space-y-2.5">
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Conflict prevention lives in the model, not a form
                        check.
                      </strong>{" "}
                      The appointment&apos;s end time is computed from the
                      service duration and an overlap query runs on every
                      save, scoped to that stylist — enforced at the model
                      layer, so no code path can create a double-booking.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        The &quot;available slots&quot; endpoint reuses the
                        same overlap logic.
                      </strong>{" "}
                      Instead of a separate rules engine, it walks the
                      workday in 30-minute increments and asks the identical
                      conflict query — one source of truth for both blocking
                      and suggesting.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        A real notification queue, not fire-and-forget.
                      </strong>{" "}
                      Reminders carry explicit pending/sent/failed states,
                      and a scheduled worker polls every minute to dispatch
                      and retry across email and WhatsApp — durable, not a
                      best-effort background task.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Row-level access control.
                      </strong>{" "}
                      Admins and receptionists see everything; an
                      esthetician&apos;s queryset is hard-scoped to their own
                      appointments — permission logic that filters data, not
                      just gates endpoints.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        WhatsApp behind a swappable service class.
                      </strong>{" "}
                      Notifications go out through a self-hosted gateway
                      today, isolated behind one interface so switching
                      providers later doesn&apos;t touch the scheduling code.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  03 · Solution
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  JWT-authenticated Django REST API with a role-based
                  React/TypeScript frontend, Celery + Redis background
                  processing wired to a live WhatsApp gateway, and a
                  revenue-aware dashboard. The README is candid that WhatsApp
                  Business API approval — not the engineering — is the one
                  blocker left before this could be sold, which matters more
                  to a hiring manager or client than pretending it&apos;s
                  already launched.
                </p>
              </div>
            </div>
          </article>

          <article
            id="case-nexo"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8 lg:p-10"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                Academic Platforms
              </p>
              <span className="rounded-full border border-zinc-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-600">
                Independent Project
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
              NexoAcadémico
            </h3>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {nexoScreens.map((shot) => (
                <ProjectImage key={shot.src} {...shot} />
              ))}
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  01 · Problem
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  University course management fragments across email,
                  spreadsheets and paper — professors juggling deadlines and
                  grading across courses, students losing track of what&apos;s
                  due where, and no record of who changed what. I built
                  NexoAcadémico to centralize it with real role-based
                  workflows and an actual audit trail.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  02 · Process
                </h4>
                <ul className="mt-3 max-w-3xl space-y-2.5">
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        RBAC enforced at the queryset level, not just the
                        endpoint.
                      </strong>{" "}
                      Every viewset filters by ownership before returning
                      data — professors only ever see their own courses,
                      students only their enrollments — and mutations
                      re-check permission before writing, so ownership is a
                      write gate, not just a filter.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Soft delete with a real history, not framework magic.
                      </strong>{" "}
                      Deleting a task flips status flags instead of removing
                      the row, and every create, update and delete writes a
                      history record exposed through its own endpoint — &quot;who
                      did what when&quot; is an actual answer, not a guess.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Submission and grading modeled with distinct actor
                        rules.
                      </strong>{" "}
                      A student can create exactly one submission per task;
                      only that course&apos;s professor can grade it, and the
                      server — not the client — forces the status to
                      reviewed and stamps the time.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        A hand-rolled WebGL shader for the UI, not a CSS
                        blur.
                      </strong>{" "}
                      The &quot;liquid glass&quot; interface effect is a real
                      GLSL fragment shader — signed-distance-field rounding,
                      noise, refraction — registered per component against
                      actual DOM positions.
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-zinc-600">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
                    <span>
                      <strong className="text-zinc-900">
                        Documented its own rough edges.
                      </strong>{" "}
                      The database docs flag which stored procedures are
                      stale from an earlier schema — the kind of honesty
                      about technical debt most solo projects don&apos;t
                      bother writing down.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  03 · Solution
                </h4>
                <p className="mt-2 max-w-3xl leading-relaxed text-zinc-600">
                  Token-authenticated Django REST API with a full Next.js 16
                  App Router frontend — courses, enrollment, weighted/graded
                  tasks, file submissions, grading and feedback, plus
                  dashboard and statistics endpoints doing real server-side
                  aggregation. Same engineer designed the data model and
                  built the UI that consumes it, including its own custom
                  animation-token system.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        id="team-projects"
        className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28"
      >
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
            Team Projects
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built with a team, at university.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Every project above is individual work. These are course projects
            built with classmates — included because the skills are real,
            labeled because the credit is shared.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {teamProjects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[1.5rem] border bg-zinc-50 p-6 sm:rounded-[2rem]"
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                padded
              />

              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {project.label}
              </p>
              <h3 className="mt-3 text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border bg-white px-3 py-1 text-xs text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-zinc-800"
                >
                  View GitHub
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[1.5rem] border bg-zinc-100 shadow-sm sm:max-w-sm sm:rounded-[2rem]">
            <Image
              src="/profile.jpg"
              alt="Alejandro Arias Rojas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 380px"
            />
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
              About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              I like building software that actually gets used.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
              <p>
                I build production-grade business systems: an offline-first
                ERP running 372 automated tests for a real diesel and
                gasoline fuel-injector lab, a POS and e-commerce platform
                live for a real jewelry retailer, and SaaS-oriented
                applications designed to be sold, not just demoed.
              </p>

              <p>
                My work combines software engineering with business process
                thinking — I&apos;m finishing a Bachelor&apos;s in Business
                Informatics at Universidad de Costa Rica (2027).
              </p>

              <p>
                Lately I&apos;ve been going deeper on Azure: SIGAU, one of my
                database projects, runs on Azure SQL Server with Row-Level
                Security and Dynamic Data Masking, and I&apos;m currently
                preparing for the AI-200 (Azure AI Cloud Developer Associate)
                certification.
              </p>

              <p>
                I care about the parts most student projects skip: automated
                testing, backups that actually restore, and documentation
                someone else could pick up without asking me first.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://github.com/aleariasr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-5 py-2 text-center text-sm text-white transition hover:bg-zinc-800"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aleariasr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-300 px-5 py-2 text-center text-sm transition hover:border-zinc-500 hover:bg-zinc-50"
              >
                LinkedIn
              </a>

              <a
                href="mailto:aleariasrojas@hotmail.com"
                className="rounded-full border border-zinc-300 px-5 py-2 text-center text-sm transition hover:border-zinc-500 hover:bg-zinc-50"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t px-5 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Alejandro Arias Rojas. All rights reserved.</p>
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}