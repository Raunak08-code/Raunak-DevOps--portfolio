import { Cloud, Gamepad2, ServerCog } from "lucide-react";
import { motion } from "motion/react";

const focusAreas = [
  {
    icon: ServerCog,
    title: "DevOps & Cloud Engineering",
    description:
      "I want to build a strong foundation in infrastructure, automation, CI/CD, observability, and scalable system design. My priority is to contribute to systems that are resilient, efficient, and ready for real-world production demands.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Industry Research",
    description:
      "Alongside my core career path, I want to research the gaming industry, understand its market, business challenges, growth opportunities, and technological evolution. I am especially interested in how modern software ecosystems shape developer experiences and player engagement.",
  },
  {
    icon: Cloud,
    title: "Cloud Gaming",
    description:
      "I am particularly interested in Cloud Gaming and its future—how streaming infrastructure, edge compute, and cloud-native systems can transform performance, access, and scale in the gaming world. My long-term ambition is to explore how DevOps and Cloud technologies can contribute to that future.",
  },
];

export default function RoadAhead() {
  return (
    <section className="min-h-screen bg-[var(--ink-black)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[rgba(52,59,85,0.2)] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[var(--cloud-white)]/80">
            <Cloud className="h-3.5 w-3.5 text-[var(--dusty-teal)]" />
            Toward transformation
          </span>
          <h2 className="mt-4 font-sans text-3xl font-black tracking-tight text-[var(--cloud-white)] sm:text-4xl">
            The Road Ahead
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--cloud-white)]/85 sm:text-base">
            I want my career to sit at the intersection of reliable
            infrastructure, scalable cloud systems, and the creative future of
            interactive entertainment. My principal focus is DevOps and Cloud
            Engineering, while I continue to study the game development industry
            for its market dynamics, technical evolution, and long-term
            opportunities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-[var(--border-soft)] bg-[rgba(32,36,44,0.82)] p-4 shadow-[var(--shadow-soft)] sm:p-5"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(124,156,158,0.12)] text-[var(--dusty-teal)]">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="font-sans text-base font-bold text-[var(--cloud-white)]">
                {title}
              </h3>
              <p className="mt-3 text-xs leading-6 text-[var(--cloud-white)]/80">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <aside className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.72)] p-5 sm:p-6">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--grey-blue)]">
            Creative Ambition
          </span>
          <p className="mt-2 text-sm leading-relaxed text-[var(--cloud-white)]/90 sm:text-base">
            <strong>Cataclysm</strong> is my personal dream survival-game
            project. It represents the long-term creative ambition I hope to
            develop as my understanding of game design, systems thinking, and
            production workflows grows. I want to keep exploring this space with
            patience, curiosity, and a deeper technical foundation.
          </p>
        </aside>

        <footer className="mx-auto mt-6 max-w-4xl text-center">
          <p className="text-xs leading-relaxed text-[var(--cloud-white)]/80 sm:text-sm">
            My long-term vision is to build a career where DevOps and Cloud
            Engineering help power the future of gaming, while I continue
            learning, experimenting, and growing toward that ambition.
          </p>
          <p className="mt-5 font-sans text-sm font-bold italic leading-relaxed text-[var(--cloud-white)] sm:text-base">
            “First, build the infrastructure. Then explore the possibilities.
            <br />
            Eventually, build something of my own.”
          </p>
        </footer>
      </div>
    </section>
  );
}
