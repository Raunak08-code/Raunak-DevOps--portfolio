import React from "react";
import { motion } from "motion/react";
import { Book, MonitorPlay, Youtube, Cpu } from "lucide-react";

export default function Learning() {
  const learningCards = [
    {
      title: "Working Project",
      description: "A live project I am currently building to sharpen practical DevOps and system design skills.",
      icon: <MonitorPlay className="h-6 w-6 text-emerald-500" />,
    },
    {
      title: "Microsoft Learn",
      description: "Learning foundational DevOps and cloud concepts through hands-on guided modules.",
      icon: <Book className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "YouTube Tutorials",
      description: "Following curated video lessons to reinforce tool workflows, containerization, and automation.",
      icon: <Youtube className="h-6 w-6 text-red-500" />,
    },
    {
      title: "LeetCode Learning",
      description: "Solving algorithm problems to level up problem solving while learning DevOps thinking.",
      icon: <Cpu className="h-6 w-6 text-cyan-500" />,
    },
  ];

  return (
    <section
      id="learning"
      className="py-20 bg-slate-50 transition-colors duration-500 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 uppercase tracking-tight">
            Current Learning & Roadmap
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 mt-3 font-mono">
            A quick snapshot of what I am learning right now and what I am preparing to take on next.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Currently Learning</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                These are the active learning areas I am working on today, including projects, platforms, and practice channels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {learningCards.map((card) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-slate-100 p-5 bg-slate-50"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-slate-900/5 flex items-center justify-center">
                        {card.icon}
                      </div>
                      <h4 className="font-semibold text-slate-900">{card.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">Planned Learning</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              This section is reserved for the next topics and platforms I intend to explore as I grow in DevOps.
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Pipeline Automation</h4>
                <p className="text-sm text-slate-600">Planning to deepen my GitHub Actions and CI/CD pipeline automation skills.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Cloud Deployment</h4>
                <p className="text-sm text-slate-600">Preparing to learn more advanced cloud deployment patterns and managed services.</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <h4 className="font-semibold text-slate-900">Monitoring & Observability</h4>
                <p className="text-sm text-slate-600">Next up: stronger observability practices and SRE-style alerting workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
