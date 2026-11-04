const skillGroups = [
  {
    category: "Programming Language",
    skills: ["C++", "Go", "Python"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, ECR)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    category: "Monitoring & Reliability",
    skills: [
      "Prometheus",
      "Grafana",
      "AlertManager",
      "Nginx",
      "Logging",
      "Observability",
    ],
  },
  {
    category: "System & Tools",
    skills: [
      "Linux",
      "Git & GitHub",
      "JIRA",
      "Operating Systems",
      "Computer Networks",
      "Database",
      "PostgreSQL",
      "REST APIs",
      "FastAPI",
      "DSA",
    ],
  },
  {
    category: "Automation & Testing",
    skills: ["Scripting", "Load Testing (Locust)", "JSON", "Gemini API"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="portfolio-art portfolio-art-education bg-[var(--ink-black)] py-16 transition-colors duration-500 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-left font-sans text-3xl font-extrabold uppercase tracking-tight text-[var(--cloud-white)] sm:text-4xl">
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-y-8 md:auto-rows-fr md:grid-cols-6 md:gap-y-10">
          {skillGroups.map((group, index) => (
            <article
              key={group.category}
              className={`min-h-full border-[var(--border-soft)] py-2 md:col-span-2 md:border-r md:px-6 ${
                index === 2 || index === skillGroups.length - 1
                  ? "md:border-r-0"
                  : ""
              } ${
                index === 3
                  ? "md:col-start-2"
                  : index === 4
                    ? "md:col-start-4"
                    : ""
              }`}
            >
              <h3 className="mb-4 font-sans text-lg font-bold text-[var(--cloud-white)]">
                {group.category}
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--cloud-white)]/80 marker:text-[var(--cloud-white)]">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
