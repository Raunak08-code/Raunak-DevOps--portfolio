/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import FloatingDownload from "./components/FloatingDownload";
import About from "./components/About";
import { resumeData } from "./data";
import { Award, Code2, Cpu, FileBadge2, Cloud, Gamepad2, ServerCog, ArrowUpRight } from "lucide-react";

export default function App() {
  const [theme] = useState<"dark">("dark");
  const [currentTime, setCurrentTime] = useState("");

  // Track real time dynamically for DevOps UTC accuracy
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace("GMT", "UTC"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sync theme to always remove dark and red-grey elements for pure high-contrast light mode
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "red-grey");
  }, []);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  const handleDownloadResume = () => {
    const btn = document.getElementById("floating-resume-download-btn");
    if (btn) {
      (btn as HTMLButtonElement).click();
    }
  };

  return (
    <div className="ink-indigo min-h-screen bg-[var(--ink-black)] text-[var(--cloud-white)] transition-colors duration-500 selection:bg-[var(--midnight-indigo)] selection:text-[var(--cloud-white)]">
      
      {/* 1. Header/Navbar with PDF download trigger */}
      <Navbar
        onDownloadResume={handleDownloadResume}
      />

      {/* 2. Hero Section */}
      <Hero onDownloadResume={handleDownloadResume} />

      {/* 3. About Section */}
      <About />

      {/* 4. The Road Ahead */}
      <motion.section
        id="road-ahead"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="py-20 border-y border-[var(--border-soft)] bg-[rgba(17,23,32,0.8)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[rgba(52,59,85,0.2)] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[var(--cloud-white)]/80">
              <ArrowUpRight className="h-3.5 w-3.5 text-[var(--dusty-teal)]" />
              Forward trajectory
            </span>
            <h2 className="mt-5 font-sans text-3xl font-black tracking-tight text-[var(--cloud-white)] sm:text-4xl">
              The Road Ahead
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cloud-white)]/80 sm:text-lg">
              I want my career to sit at the intersection of reliable infrastructure, scalable cloud systems, and the creative future of interactive entertainment. My principal focus is DevOps and Cloud Engineering, while I continue to study the game development industry for its market dynamics, technical evolution, and long-term opportunities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="rounded-3xl border border-[var(--border-soft)] bg-[rgba(32,36,44,0.9)] p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(124,156,158,0.12)] text-[var(--dusty-teal)]">
                <ServerCog className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-bold text-[var(--cloud-white)]">DevOps & Cloud Engineering</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--cloud-white)]/75">
                I want to build a strong foundation in infrastructure, automation, CI/CD, observability, and scalable system design. My priority is to contribute to systems that are resilient, efficient, and ready for real-world production demands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="rounded-3xl border border-[var(--border-soft)] bg-[rgba(32,36,44,0.9)] p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(52,59,85,0.18)] text-[var(--grey-blue)]">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-bold text-[var(--cloud-white)]">Gaming Industry Research</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--cloud-white)]/75">
                Alongside my core career path, I want to research the gaming industry, understand its market, business challenges, growth opportunities, and technological evolution. I am especially interested in how modern software ecosystems shape developer experiences and player engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="rounded-3xl border border-[var(--border-soft)] bg-[rgba(32,36,44,0.9)] p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(124,156,158,0.12)] text-[var(--dusty-teal)]">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="font-sans text-xl font-bold text-[var(--cloud-white)]">Cloud Gaming</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--cloud-white)]/75">
                I am particularly interested in Cloud Gaming and its future—how streaming infrastructure, edge compute, and cloud-native systems can transform performance, access, and scale in the gaming world. My long-term ambition is to explore how DevOps and Cloud technologies can contribute to that future.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 rounded-3xl border border-[var(--border-soft)] bg-[rgba(17,23,32,0.9)] p-6 sm:p-7">
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[var(--grey-blue)]">
              Creative ambition
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--cloud-white)]/85 sm:text-lg">
              <span className="font-semibold text-[var(--cloud-white)]">Cataclysm</span> is my personal dream survival-game project. It represents the long-term creative ambition I hope to develop as my understanding of game design, systems thinking, and production workflows grows. I want to keep exploring this space with patience, curiosity, and a deeper technical foundation.
            </p>
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-[var(--cloud-white)]/70 sm:text-base">
            My long-term vision is to build a career where DevOps and Cloud Engineering help power the future of gaming, while I continue learning, experimenting, and growing toward that ambition.
          </p>

          <p className="mt-6 text-center text-base font-bold italic leading-8 text-[var(--milk)] sm:text-lg">
            “First, build the infrastructure. Then explore the possibilities.<br />Eventually, build something of my own.”
          </p>
        </div>
      </motion.section>

      {/* 4. Education Credentials Timeline */}
      <Education />

      {/* 5. Filterable Skills Arsenal */}
      <Skills />

      {/* 6. Active Learning & Roadmap */}
      <Learning />

      {/* 7. Systems projects with DSA algorithmic sandbox */}
      <Projects />

      {/* 7. DevOps dispatch blog posts */}
      <Blogs />

      {/* 8. Additional Certifications & Hackathons Timeline highlights */}
      <section className="py-20 bg-slate-50 transition-colors border-b border-indigo-50/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Certifications Card Panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-100">
                  <FileBadge2 className="h-6 w-6 text-indigo-500" />
                  <h3 className="font-sans font-bold text-lg text-slate-800">
                    Certifications & Activities
                  </h3>
                </div>

                <div className="space-y-4">
                  {resumeData.certificationsList.map((cert, idx) => (
                    <div key={idx} id={`cert-${idx}`} className="flex gap-3 text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Award className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <p>{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-500 mt-6 select-none uppercase tracking-widest text-center">
                All certificates verified with authentic creds
              </p>
            </div>

            {/* Hackathons / Hackaccino Activities Panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-100">
                  <Cpu className="h-6 w-6 text-cyan-600" />
                  <h3 className="font-sans font-bold text-lg text-slate-800">
                    Hackathons & Workshops
                  </h3>
                </div>

                <div className="space-y-4">
                  {resumeData.extraActivities.map((act, idx) => (
                    <div key={idx} id={`activity-${idx}`} className="flex gap-3 text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Code2 className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <p>{act}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] font-mono text-slate-500 mt-6 select-none uppercase tracking-widest text-center">
                Engaged with standard developer pipelines
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Connect Contact form channels */}
      <Contact />

      {/* 10. Standalone system static footer with dynamic clock */}
      <footer className="py-12 bg-slate-950 text-slate-400 border-t border-slate-900 select-none">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block animate-ping" />
            <span className="font-mono text-xs text-slate-300">
              DevOps Node Gateway Online: <span className="font-bold text-indigo-400">{currentTime}</span>
            </span>
          </div>

          <p className="text-xs font-mono font-medium tracking-wide">
            Designed for Raunak Pandey | Copyright © {new Date().getFullYear()} • DevOps Engineer | Cloud & Platform Engineering Enthusiast
          </p>

          
        </div>
      </footer>

      {/* Floating Download Action Hub */}
      <FloatingDownload theme={theme} />
      <Analytics />

    </div>
  );
}
