import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, CheckCircle2, ExternalLink } from "lucide-react";

const microsoftModules = [
  {
    order: "01",
    title: "Plan with DevOps",
    status: "Completed",
    description:
      "Learned about DevOps culture, Agile planning, collaboration and planning projects using GitHub Projects.",
    link: "https://learn.microsoft.com/en-gb/training/modules/plan-with-devops/",
  },
  {
    order: "02",
    title: "Develop with DevOps",
    status: "Completed",
    description:
      "Explored Git, GitHub Flow, source control, continuous integration, shift-left testing and shift-left security.",
    link: "https://learn.microsoft.com/en-gb/training/modules/develop-with-devops/",
  },
  {
    order: "03",
    title: "Deliver with DevOps",
    status: "Completed",
    description:
      "Explored continuous delivery, Infrastructure as Code, deployment practices and CI/CD workflows using GitHub Actions.",
    link: "https://learn.microsoft.com/en-gb/training/modules/deliver-with-devops/",
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="py-20 border-b border-[var(--border-soft)] bg-[rgba(17,23,32,0.8)] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[var(--cloud-white)] uppercase tracking-tight">
            Current Learning & Roadmap
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[var(--midnight-indigo)] to-[var(--dusty-teal)] mx-auto rounded-full" />
          <p className="text-sm text-[var(--cloud-white)]/70 mt-3 font-mono">
            A quick snapshot of what I am learning right now and what I am preparing to take on next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-[var(--border-soft)] bg-[rgba(32,36,44,0.88)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(52,59,85,0.2)] text-[var(--dusty-teal)]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[var(--grey-blue)]">
                    Platform
                  </p>
                  <h3 className="font-sans text-xl font-bold text-[var(--cloud-white)]">Microsoft Learn</h3>
                </div>
              </div>

              <a
                href="https://learn.microsoft.com/en-gb/users/raunak08/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[rgba(52,59,85,0.2)] px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[var(--cloud-white)] transition-colors hover:bg-[rgba(52,59,85,0.35)]"
              >
                View Microsoft Learn Profile
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.8)] p-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--grey-blue)]">Username</p>
                <p className="mt-2 font-sans text-lg font-bold text-[var(--cloud-white)]">raunak08</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.8)] p-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--grey-blue)]">Current Level</p>
                <p className="mt-2 font-sans text-lg font-bold text-[var(--cloud-white)]">Level 3</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.8)] p-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--grey-blue)]">Completed Modules</p>
                <p className="mt-2 font-sans text-lg font-bold text-[var(--cloud-white)]">3</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[var(--grey-blue)]">
                <span>Progress</span>
                <span>3 / 3 completed</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-[rgba(130,144,165,0.15)]">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--midnight-indigo)] to-[var(--dusty-teal)]" />
              </div>
            </div>

            <div className="space-y-4">
              {microsoftModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.7)] p-4"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[rgba(124,156,158,0.12)] text-[10px] font-bold text-[var(--dusty-teal)]">
                        {module.order}
                      </span>
                      <div>
                        <h4 className="font-sans text-base font-bold text-[var(--cloud-white)]">{module.title}</h4>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(124,156,158,0.35)] bg-[rgba(124,156,158,0.08)] px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.14em] text-[var(--cloud-white)]/90">
                      <CheckCircle2 className="h-3 w-3 text-[var(--dusty-teal)]" />
                      {module.status}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-[var(--cloud-white)]/75">{module.description}</p>

                  <div className="mt-3 flex items-center justify-between gap-3 border-t border-[var(--border-soft)] pt-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--grey-blue)]">
                      Study material
                    </span>
                    <a
                      href={module.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[var(--cloud-white)] underline decoration-[var(--dusty-teal)] underline-offset-4"
                    >
                      Open module
                      <ArrowUpRight className="h-3.5 w-3.5 text-[var(--dusty-teal)]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border-soft)] bg-[rgba(32,36,44,0.88)] p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-sans font-bold text-xl text-[var(--cloud-white)] mb-3">Currently Working</h3>
            <p className="text-sm text-[var(--cloud-white)]/70 leading-relaxed mb-6">
              These are the active focus areas I am working on as I continue building practical DevOps and engineering experience.
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.7)] p-4">
                <h4 className="font-semibold text-[var(--cloud-white)]">Pipeline Automation</h4>
                <p className="text-sm text-[var(--cloud-white)]/70">Planning to deepen my GitHub Actions and CI/CD pipeline automation skills.</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.7)] p-4">
                <h4 className="font-semibold text-[var(--cloud-white)]">Cloud Deployment</h4>
                <p className="text-sm text-[var(--cloud-white)]/70">Preparing to learn more advanced cloud deployment patterns and managed services.</p>
              </div>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.7)] p-4">
                <h4 className="font-semibold text-[var(--cloud-white)]">Monitoring & Observability</h4>
                <p className="text-sm text-[var(--cloud-white)]/70">Next up: stronger observability practices and SRE-style alerting workflows.</p>
              </div>

              <div className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.7)] p-4">
                <h4 className="font-sans text-lg font-bold text-[var(--cloud-white)]"># NorthStar</h4>
                <p className="mt-1 text-sm font-medium text-[var(--dusty-teal)]">Insights for Every Development Journey</p>
                <p className="mt-3 text-sm leading-6 text-[var(--cloud-white)]/70">
                  An evolving DevOps analytics platform designed to bring development activity and delivery insights into one place. NorthStar aims to connect GitHub activity, build history, deployment metrics and engineering performance.
                </p>
                <p className="mt-3 text-xs font-mono uppercase tracking-[0.14em] text-[var(--grey-blue)]">
                  Technology stack:
                </p>
                <p className="mt-1 text-sm text-[var(--cloud-white)]/75">
                  Go, Python, FastAPI, PostgreSQL, SQLAlchemy, GitHub, REST API, Webhooks, Docker
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-base font-bold italic leading-8 text-[var(--milk)] sm:text-lg">
          Learning by building, not just completing modules.
        </p>
      </div>
    </section>
  );
}
