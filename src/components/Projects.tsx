import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { ProjectItem } from "../types";
import { resumeData } from "../data";

function ProjectLinks({ project }: { project: ProjectItem }) {
  const links = [
    { label: "GitHub", href: project.github ?? resumeData.github },
    { label: "Docker Hub", href: project.docker ?? resumeData.dockerHub },
  ].filter((link) => link.href);

  if (project.live) links.push({ label: "Live Site", href: project.live });
  if (project.report) links.push({ label: "Project Report", href: project.report });

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[var(--cloud-white)]/75 transition-colors hover:text-[var(--dusty-teal)]"
        >
          {label}
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function ProjectDetail({ project }: { project: ProjectItem }) {
  return (
    <section className="project-detail-page portfolio-art portfolio-art-projects min-h-[calc(100vh-4rem)] bg-[var(--ink-black)] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <a
          href="#/project"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--cloud-white)]/70 transition-colors hover:text-[var(--cloud-white)]"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Projects
        </a>

        <header className="border-b border-[var(--border-soft)] pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-[var(--cloud-white)] sm:text-5xl">
              {project.title}
            </h1>
            {project.status && (
              <span className="rounded-full bg-red-600/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                {project.status}
              </span>
            )}
          </div>
          <p className="mt-4 font-mono text-sm text-[var(--cloud-white)]/65 sm:text-base">
            {project.subtitle}
          </p>
        </header>

        <div className="grid gap-10 py-8 md:grid-cols-[minmax(0,1.5fr)_minmax(14rem,0.8fr)]">
          <section aria-labelledby="project-overview-title">
            <h2
              id="project-overview-title"
              className="mb-5 font-sans text-xl font-bold text-[var(--cloud-white)]"
            >
              Project Details
            </h2>
            <div className="space-y-4 text-sm leading-7 text-[var(--cloud-white)]/78">
              {project.description.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="project-tech-title">
            <h2
              id="project-tech-title"
              className="mb-5 font-sans text-xl font-bold text-[var(--cloud-white)]"
            >
              Tech Stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-[var(--border-soft)] px-3 py-1.5 font-mono text-xs text-[var(--cloud-white)]/75"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          aria-labelledby="project-links-title"
          className="border-t border-[var(--border-soft)] pt-6"
        >
          <h2
            id="project-links-title"
            className="mb-4 font-sans text-lg font-bold text-[var(--cloud-white)]"
          >
            Project Links
          </h2>
          <ProjectLinks project={project} />
        </section>
      </div>
    </section>
  );
}

export default function Projects({ projectId }: { projectId?: string }) {
  if (projectId) {
    const project = resumeData.projects.find(({ id }) => id === projectId);
    if (project) return <ProjectDetail project={project} />;
  }

  return (
    <section
      id="projects"
      className="portfolio-art portfolio-art-projects border-b border-[var(--border-soft)] bg-[var(--ink-black)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h1 className="text-left font-sans text-3xl font-extrabold uppercase tracking-tight text-[var(--cloud-white)] sm:text-4xl">
            Projects
          </h1>
          <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-[var(--cloud-white)]/70">
            Engineering work spanning observability, email automation,
            production delivery, and game development.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {resumeData.projects.map((project, index) => (
            <motion.article
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className={`flex min-w-0 flex-col px-5 py-7 sm:px-7 ${
                index % 3 !== 2
                  ? "md:border-r md:border-[var(--border-soft)]"
                  : ""
              } ${index < 3 ? "md:border-b md:border-[var(--border-soft)]" : ""} ${
                index % 3 === 0 ? "md:pl-0" : ""
              } ${index % 3 === 2 ? "md:pr-0" : ""}`}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <h2 className="font-sans text-lg font-bold text-[var(--cloud-white)] sm:text-xl">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--cloud-white)]/60">
                    {project.subtitle}
                  </p>
                </div>
                <ProjectLinks project={project} />
              </div>

              {project.status && (
                <span className="mt-4 w-fit rounded-full bg-red-600/90 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                  {project.status}
                </span>
              )}

              <hr className="my-5 w-12 border-0 border-t border-[var(--cloud-white)]/45" />
              <p className="line-clamp-3 text-sm leading-6 text-[var(--cloud-white)]/75">
                {project.description[0]}
              </p>

              <a
                href={`#/project/${project.id}`}
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--cloud-white)] transition-colors hover:text-[var(--dusty-teal)]"
              >
                Read more
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
