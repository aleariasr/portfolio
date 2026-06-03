import Image from "next/image";

const projects = [
  {
    label: "Real Business Project",
    title: "Jewelry Management & POS Platform",
    description:
      "Enterprise platform designed for retail operations including point of sale, storefront, checkout, customer workflows and online orders.",
    image: "/projects/pos-ventas.png",
    technologies: ["Node.js", "React", "Next.js", "PostgreSQL", "AWS"],
    github: "https://github.com/aleariasr/joyeria",
  },
  {
    label: "SaaS Appointment Platform",
    title: "Beauty Salon Appointment Management Platform",
    description:
      "Scheduling platform for managing appointments, clients, services, staff calendars and automated reminders for beauty businesses.",
    image: "/projects/dashboard-estetica.png",
    technologies: ["Django", "DRF", "React", "TypeScript", "Redis", "Celery"],
    github: "https://github.com/aleariasr/estetica",
  },
  {
    label: "Networking & Systems Project",
    title: "TCP/IP Remote Management System",
    description:
      "Client-server remote administration system built with TCP/IP sockets, threading and desktop interfaces for system monitoring and control.",
    image: "/projects/storefront-home.png",
    technologies: ["Python", "Sockets", "Threading", "CustomTkinter"],
    github: "https://github.com/aleariasr/proyectoSistemasOperativos",
  },
];

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Business Informatics Student
            </p>

            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              <span className="block text-zinc-500">Hey there,</span>
              <span className="block">I&apos;m Alejandro Arias.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600">
              I build enterprise applications, backend systems and cloud-based
              solutions.
            </p>

            <div className="mx-auto h-8 max-w-2xl overflow-hidden text-lg font-medium text-zinc-900">
              <p className="animate-pulse">
                Software Developer focused on business systems.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {["Java", "Python", "Django", "React", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-center">
              <a
                href="#projects"
                className="rounded-full bg-black px-6 py-3 text-center text-white transition hover:bg-zinc-800"
              >
                View Projects
              </a>

              <a
                href="mailto:aleariasrojas@hotmail.com"
                className="rounded-full border border-zinc-300 px-6 py-3 text-center transition hover:border-zinc-500 hover:bg-zinc-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            A selection of business-oriented software systems focused on
            backend development, enterprise applications and real operational
            workflows.
          </p>
        </div>

        <div className="grid gap-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border bg-white"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex min-h-[280px] items-center justify-center bg-zinc-100 p-4 md:min-h-[460px] md:p-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
                    {project.label}
                  </p>

                  <h3 className="text-3xl font-bold tracking-tight">
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

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="rounded-full bg-black px-5 py-2 text-sm text-white transition hover:bg-zinc-800"
                    >
                      Case Study
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-zinc-300 px-5 py-2 text-sm transition hover:border-zinc-500 hover:bg-zinc-50"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}