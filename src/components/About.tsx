import React from "react";
import { motion, type Variants } from "motion/react";
import { User, BookOpen, Target, CheckCircle2, Terminal as TermIcon, Award, Layers } from "lucide-react";

export default function About() {
  const learningFocus = [
    { name: "Linux & System Administration", level: 90 },
    { name: "Docker & Containerization", level: 85 },
    { name: "Kubernetes", level: 70 },
    { name: "CI/CD Pipelines", level: 80 },
    { name: "GitHub Actions", level: 85 },
    { name: "Cloud Computing (AWS)", level: 75 },
    { name: "Infrastructure as Code", level: 70 },
    { name: "Monitoring & Observability", level: 85 },
    { name: "Automation with Python & Go", level: 80 }
  ];

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-850/60 overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-550 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/45 border border-indigo-100 dark:border-indigo-900/60 mb-3 animate-pulse">
            <User className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] font-mono font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest">About Me Portfolio</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 tracking-tight">
            Professional Biography
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-2 text-center font-serif italic">
            "Combining software engineering principles with operational excellence to build reliable systems."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-350 text-sm leading-relaxed space-y-4"
            >
              <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-200">
                Hi, I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">Raunak Pandey</span>, a Computer Science undergraduate specializing in Artificial Intelligence at G.L. Bajaj Institute of Technology and Management.
              </p>

              <p>
                My journey into technology began with software development and problem-solving, but over time I found myself increasingly fascinated by the systems that power modern applications behind the scenes. This curiosity led me to explore DevOps, Cloud Computing, Automation, Observability, and Infrastructure Engineering.
              </p>

              <p>
                What attracts me most to DevOps is the combination of software engineering and operational excellence. I enjoy understanding how applications move from development to production, how systems are monitored, and how automation can improve reliability, scalability, and developer productivity.
              </p>

              <p>
                To strengthen my practical skills, I actively build projects that simulate real-world engineering environments. One of my key projects is <span className="font-semibold text-slate-900 dark:text-white">GlassBox</span>, an observability and monitoring platform built using Docker, Prometheus, Grafana, PostgreSQL, and Python. Through this project, I gained hands-on experience with containerization, metrics collection, visualization, monitoring pipelines, and multi-service architectures.
              </p>

              <p>
                Another project, <span className="font-semibold text-slate-900 dark:text-white">CORVINA</span>, is an AI-powered email responder that automates email processing and reply generation using Python and FastAPI. Building this project helped me understand backend services, API design, automation workflows, and system integration.
              </p>
            </motion.div>

            {/* Target Core Goal Box */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/25 dark:to-indigo-950/5 border border-indigo-150/40 dark:border-indigo-900/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <div className="flex gap-4 items-start">
                <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest mb-1.5">Long-Term Objective</h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    My long-term goal is to become a skilled <span className="font-semibold text-slate-900 dark:text-white">DevOps / Platform Engineer</span>, contributing to reliable, scalable, and automated cloud-native systems while building products that create meaningful impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Learning Focus Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 border border-slate-200/70 dark:border-slate-850 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200 dark:border-slate-850">
                <BookOpen className="h-4 w-4 text-cyan-500" />
                <h3 className="font-sans font-bold text-sm uppercase tracking-wide text-slate-850 dark:text-slate-200">
                  Current Learning Focus
                </h3>
              </div>

              <div className="space-y-3.5">
                {learningFocus.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" />
                        <span className="font-sans font-medium text-slate-750 dark:text-slate-350">{item.name}</span>
                      </div>
                      <span className="font-mono text-indigo-500 font-bold">{item.level}%</span>
                    </div>
                    {/* Visual Progress bar */}
                    <div className="w-full bg-slate-200/70 dark:bg-slate-850 rounded-full h-1 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: idx * 0.05 }}
                        className="bg-indigo-500 dark:bg-indigo-400 h-1 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Profile Summary Stats Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 border border-slate-200/70 dark:border-slate-850 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-850">
                <Layers className="h-4 w-4 text-emerald-500" />
                <h3 className="font-sans font-bold text-sm uppercase tracking-wide text-slate-850 dark:text-slate-200">
                  Infrastructure Metrics
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
                  <span className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400 block">7.61</span>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-slate-450 block mt-1">B.Tech CGPA</span>
                </div>
                <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
                  <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 block">150+</span>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-slate-450 block mt-1">DSA Queries</span>
                </div>
                <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
                  <span className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400 block">88%</span>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-slate-450 block mt-1">Commit Rate</span>
                </div>
                <div className="p-3.5 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-2xl text-center">
                  <span className="text-2xl font-bold font-mono text-pink-600 dark:text-pink-400 block">3</span>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-slate-450 block mt-1">Active Labs</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
