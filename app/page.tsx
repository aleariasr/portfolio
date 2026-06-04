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
    label: "SaaS Appointment Platform",
    title: "Beauty Salon Appointment Management Platform",
    description:
      "Scheduling platform for managing appointments, clients, services, staff calendars and automated reminders for beauty businesses.",
    image: "/projects/dashboard-estetica.png",
    technologies: ["Django", "DRF", "React", "TypeScript", "Redis", "Celery"],
    github: "https://github.com/aleariasr/estetica",
    caseStudy: "#case-estetica",
  },
  {
    label: "Networking & Systems Project",
    title: "TCP/IP Remote Management System",
    description:
      "Client-server remote administration system built with TCP/IP sockets, threading and desktop interfaces for system monitoring and control.",
    image: "/projects/tcpip.png",
    technologies: ["Python", "Sockets", "Threading", "CustomTkinter"],
    github: "https://github.com/aleariasr/proyectoSistemasOperativos",
    caseStudy: "#case-tcpip",
  },
];

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
              I build software for real business operations, from retail
              management systems to backend platforms and client-server
              applications.
            </p>

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
                  Enterprise
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
              {["Java", "Python", "Django", "React", "AWS"].map((skill) => (
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
            My strongest work is focused on business applications, operational
            workflows and backend systems that solve practical problems.
          </p>
        </div>

        <article className="overflow-hidden rounded-[1.5rem] border bg-zinc-50 sm:rounded-[2rem]">
          <div className="p-5 sm:p-6 md:p-10">
            <div className="mb-6 flex flex-col justify-between gap-6 md:mb-8 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
                  Main Project · Real Business Platform
                </p>

                <h3 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                  Jewelry Management & POS Platform
                </h3>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:min-w-fit">
                <a
                  href="#case-joyeria"
                  className="group rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-zinc-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-950/20"
                >
                  Case Study
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="https://github.com/aleariasr/joyeria"
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
                src="/projects/pos-ventas.png"
                alt="Jewelry Management and POS Platform"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
                Enterprise platform designed for retail operations including
                point of sale, storefront, checkout, customer workflows,
                reporting and online orders. Built as a production-oriented
                system for real business requirements, not as a generic academic
                CRUD project.
              </p>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "React",
                    "Next.js",
                    "PostgreSQL",
                    "Supabase",
                    "AWS",
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
                    <p className="font-semibold">Retail Operations</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-zinc-500">Scope</p>
                    <p className="font-semibold">Full-Stack Platform</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-zinc-500">Focus</p>
                    <p className="font-semibold">Business Workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
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

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black px-5 py-2 text-center text-sm text-white transition hover:bg-zinc-800"
                  >
                    View GitHub
                  </a>
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
        </div>

        <div className="grid gap-5 sm:gap-6">
          <article
            id="case-joyeria"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
              Retail Operations
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Jewelry Management & POS Platform
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold">Problem</h4>
                <p className="mt-2 text-zinc-600">
                  Retail operations needed a centralized way to manage sales,
                  inventory, customer accounts, online orders and reporting.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="mt-2 text-zinc-600">
                  Built a full-stack platform with POS workflows, storefront
                  features, database-backed operations and cloud-based services.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Impact</h4>
                <p className="mt-2 text-zinc-600">
                  Created a production-oriented system aligned with real
                  business requirements instead of a generic academic CRUD.
                </p>
              </div>
            </div>
          </article>

          <article
            id="case-estetica"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
              Scheduling Systems
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Beauty Salon Appointment Management Platform
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold">Problem</h4>
                <p className="mt-2 text-zinc-600">
                  Beauty businesses need to manage clients, services,
                  appointments, staff calendars and reminders without manual
                  coordination.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="mt-2 text-zinc-600">
                  Designed a SaaS-oriented platform with Django REST Framework,
                  role-based access and automated reminder workflows.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Impact</h4>
                <p className="mt-2 text-zinc-600">
                  Demonstrates backend architecture, scheduling logic,
                  permissions and business automation using production-style
                  patterns.
                </p>
              </div>
            </div>
          </article>

          <article
            id="case-tcpip"
            className="rounded-[1.5rem] border p-6 sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500 sm:text-sm">
              Networking & Systems
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              TCP/IP Remote Management System
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold">Problem</h4>
                <p className="mt-2 text-zinc-600">
                  Remote administration requires reliable communication between
                  distributed client and server components.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="mt-2 text-zinc-600">
                  Built a socket-based client-server system using Python,
                  threading and desktop interfaces for monitoring and control.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Impact</h4>
                <p className="mt-2 text-zinc-600">
                  Shows practical understanding of TCP/IP networking,
                  concurrency, systems programming and distributed architecture.
                </p>
              </div>
            </div>
          </article>
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
                I&apos;m a Business Informatics student at Universidad de Costa
                Rica, focused on backend development, enterprise applications
                and cloud technologies.
              </p>

              <p>
                My work combines software engineering with business process
                thinking. I&apos;m interested in systems that help companies
                manage operations, automate workflows and make better use of
                their data.
              </p>

              <p>
                Right now, I&apos;m strengthening my portfolio through real
                projects, cloud deployment experience and production-oriented
                development practices.
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