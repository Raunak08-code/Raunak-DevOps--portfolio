/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import FloatingDownload from "./components/FloatingDownload";
import About from "./components/About";
import { resumeData } from "./data";
import { Award, Code2, Cpu, Sparkles, Terminal as TermIcon, FileBadge2 } from "lucide-react";

export default function App() {
  const [theme] = useState<"light">("light");
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
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-500 selection:bg-indigo-500/30 selection:text-indigo-900">
      
      {/* 1. Header/Navbar with PDF download trigger */}
      <Navbar
        onDownloadResume={handleDownloadResume}
      />

      {/* 2. Hero Section */}
      <Hero onDownloadResume={handleDownloadResume} />

      {/* 3. About Section */}
      <About />

      {/* Interactive Active bash console placed right under Hero for instant engagement */}
      <section className="py-12 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-2">
              <TermIcon className="h-3.5 w-3.5 text-indigo-600" />
              <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-widest">Active Shell prompt</span>
            </div>
            <h3 className="font-sans font-bold text-lg text-slate-800">
              Query the Resume Database directly
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Terminal interface for direct candidate verification
            </p>
          </div>
          
          <Terminal />
        </div>
      </section>

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
