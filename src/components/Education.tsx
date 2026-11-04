import { resumeData } from "../data";

export default function Education() {
  return (
    <section
      id="education"
      className="portfolio-art portfolio-art-education border-b border-[var(--border-soft)] bg-[var(--ink-black)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-left font-sans text-3xl font-extrabold uppercase tracking-tight text-[var(--cloud-white)] sm:text-4xl">
          Education
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {resumeData.education.map((education) => (
            <article
              key={education.degree}
              className="min-h-52 border border-white/70 bg-transparent p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-sans text-lg font-bold text-[var(--cloud-white)] sm:text-xl">
                  {education.degree}
                </h3>
                <span className="shrink-0 font-mono text-sm text-[var(--cloud-white)]">
                  {education.year}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--cloud-white)]/80">
                {education.institution}
              </p>
              <p className="mt-3 font-mono text-sm font-semibold text-[var(--cloud-white)]">
                {education.score}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
