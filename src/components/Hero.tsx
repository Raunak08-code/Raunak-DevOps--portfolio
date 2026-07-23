import React from "react";
import { motion, type Variants } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Server, Terminal as TermIcon, FileText, Sparkles, Instagram } from "lucide-react";
import { resumeData } from "../data";

interface HeroProps {
  onDownloadResume: () => void;
}

export default function Hero({ onDownloadResume }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Decorative Network Grid Background & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radical Tech Gradient Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-110 h-110 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px]" />
        
        {/* Subtle SVG Grid Map Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#4f46e5_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Bio Details Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Batch */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300">
                Active in Noida • B.Tech CS-AI
              </span>
            </motion.div>

            {/* Core Titles */}
            <div className="space-y-2">
              <motion.h1
                variants={itemVariants}
                className="font-sans font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-4xl sm:text-5xl md:text-6xl"
              >
                Raunak Pandey
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="font-sans font-bold text-xl sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-cyan-400"
              >
                DevOps Engineer | Cloud & Platform Engineering Enthusiast 
              </motion.h2>
            </div>

            {/* Mission paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base text-slate-600 dark:text-slate-350 leading-relaxed max-w-xl"
            >
              Systems & automation enthusiast focused on containerization, metrics observability, and resilient CI/CD pipelines. 
              Translating algorithm logic into ultra-performant virtual nodes and self-healing cluster services.
            </motion.p>

            {/* Micro Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 max-w-md pt-2"
            >
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800 shadow-sm">
                <span className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400 block">150+</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">DSA Solved</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800 shadow-sm">
                <span className="text-xl font-bold font-mono text-cyan-600 dark:text-cyan-400 block">3</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">DevOps Apps</span>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-800 shadow-sm">
                <span className="text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 block">7.61</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">B.Tech CGPA</span>
              </div>
            </motion.div>

            {/* Social & Ingress Gates Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-download-resume-btn"
                onClick={onDownloadResume}
                className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="h-4 w-4" /> Download Resume <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                id="hero-email-btn"
                href={`mailto:${resumeData.email}`}
                className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-semibold active:scale-95 transition-all"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
            </motion.div>

            {/* Interactive Badge Social Network */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 text-slate-500 dark:text-slate-400 pt-3">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-semibold">Social gateways:</span>
              <div className="flex gap-3">
                <a
                  id="hero-github-link"
                  href={resumeData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white dark:bg-slate-900 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-250/20 transition-all text-xs flex items-center justify-center gap-1 shadow-sm"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  id="hero-linkedin-link"
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white dark:bg-slate-900 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-250/20 transition-all text-xs flex items-center justify-center gap-1 shadow-sm"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                {resumeData.instagram && (
                  <a
                    id="hero-instagram-link"
                    href={resumeData.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white dark:bg-slate-900 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-250/20 transition-all text-xs flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Terminal Overlay Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 70, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-center relative"
          >
            {/* Pulsing Backlight Orb */}
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[70px] pointer-events-none scale-75 animate-pulse" />
            
            {/* Vector Cloud Server Cluster Block representation (Pure CSS animation) */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-150 dark:border-slate-800 p-6 shadow-xl mb-6">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-cyan-500" />
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">SERVER CLUSTER MONITOR</span>
                </div>
                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">100% HEALTH</span>
              </div>

              <div className="space-y-3">
                {/* Node 1 */}
                <div id="hero-node-corvina" className="flex items-center justify-between text-xs p-2.5 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block"></span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">corvina-prod-pod</span>
                  </div>
                  <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400">REST INGRESS ACTIVE</span>
                </div>

                {/* Node 2 */}
                <div id="hero-node-glassbox" className="flex items-center justify-between text-xs p-2.5 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block"></span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">glassbox-observability-replica</span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">TELEMETRY_SCRAPING</span>
                </div>

                {/* Node 3 */}
                <div id="hero-node-dsa" className="flex items-center justify-between text-xs p-2.5 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block"></span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">leetcode-dsa-runner</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">150+ CODES PASS</span>
                </div>
              </div>

              {/* Memory Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>BUFFER MEMORY USE</span>
                <span>2.4 / 16.0 GB (15%)</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-1.5 rounded-full" style={{ width: "15%" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
