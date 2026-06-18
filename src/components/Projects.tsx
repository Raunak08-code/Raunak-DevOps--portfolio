import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, FolderGit2, Cpu, BarChart2, CheckSquare, Code2, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function Projects() {
  const [copiedCodeCode, setCopiedCodeCode] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"cpp" | "python">("cpp");

  const cppDsaCode = `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

// Raunak's Optimized O(N) Sliding Window Algorithm
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> charIdx(128, -1);
        int maxLen = 0, left = 0;
        
        for (int right = 0; right < s.length(); ++right) {
            if (charIdx[s[right]] >= left) {
                left = charIdx[s[right]] + 1;
            }
            charIdx[s[right]] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};

int main() {
    ios_base::sync_with_stdio(false); // Raunak's Fast I/O Sync
    cin.tie(NULL);
    
    Solution solver;
    cout << "Longest unique substring: " << solver.lengthOfLongestSubstring("abcabcbb") << "\\n";
    return 0;
}`;

  const pythonMockConfig = `# CORVINA Automated Email intent router.py
import uvicorn
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI(title="CORVINA Email Automation Engine")

class IncomingEmail(BaseModel):
    subject: str
    body: str
    sender: str

@app.post("/api/v1/emails/process")
async def process_incoming_email(email: IncomingEmail, tasks: BackgroundTasks):
    # Log intent detection asynchronously
    print(f"[CORVINA] Scraping message from: {email.sender}")
    intent = "billing_query" if "refund" in email.body else "general"
    return {"status": "intent_matched", "category": intent, "retry_attempts": 0}
`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeCode(true);
    setTimeout(() => setCopiedCodeCode(false), 2000);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500 border-b border-slate-100 dark:border-slate-850"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            Automation & Engineering
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-mono">
            Showcasing live containerized configurations and continuous systems
          </p>
        </div>

        {/* Projects Listing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          {resumeData.projects.map((proj) => (
            <motion.div
              key={proj.id}
              id={`project-card-${proj.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:border-slate-205 dark:hover:border-slate-700 transition-all relative group"
            >
              <div>
                {/* Meta details header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {proj.id === "corvina" ? <Cpu className="h-5 w-5" /> : <BarChart2 className="h-5 w-5" />}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 block">CONTAINERIZED APP</span>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">Node runtime</span>
                    </div>
                  </div>
                  
                  {/* GitHub Repo icon external */}
                  <a
                    id={`project-github-link-${proj.id}`}
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all cursor-pointer shadow-sm"
                    title="View Source on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-6 italic">
                  {proj.subtitle}
                </p>

                {/* Bullet details extracted from PDF resume verbatim */}
                <ul className="space-y-3 mb-8">
                  {proj.description.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      <CheckSquare className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badge elements */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                  {proj.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="text-[10px] sm:text-xs font-mono bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DSA & PROBLEM SOLVING INTEGRATED GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8 border-t border-slate-1050 dark:border-slate-800/50">
          {/* Summary / Stats Card */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/40 mb-4">
                <Code2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase">Interactive DSA Metrics</span>
              </div>
              
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-slate-100">
                Problem Solving
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 mb-6">
                Verifying logic benchmarks on LeetCode
              </p>

              {/* Verified Leetcode Score Panel */}
              <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-sm mb-6">
                <div className="h-12 w-12 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-500 font-bold text-xl font-mono border border-amber-200/10">
                  100+
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">RESOLVED SCRIPTS</span>
                  <span className="text-xs font-sans font-bold text-slate-700 dark:text-slate-350">
                    Strong focus on optimized space/time O(N) complexity operations.
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {resumeData.problemSolvingDetails.description.map((point, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-505 block-inline mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/80 mt-6 md:mt-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">Algorithms Practiced:</span>
              <div className="flex flex-wrap gap-1.5">
                {resumeData.problemSolvingDetails.skillsTouched.map((item, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-white dark:bg-slate-900 text-slate-500 border border-slate-200/60 dark:border-slate-800/60 px-2 py-0.5 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Code Playgrounds panel */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-850 rounded-3xl overflow-hidden flex flex-col justify-between min-h-[380px]">
            {/* Playgrounds Header Tab toggles */}
            <div className="p-3 bg-slate-900 border-b border-slate-850/80 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">raunaks_sandbox_preview</span>
              </div>
              
              <div className="flex gap-1.5">
                <button
                  id="sandbox-tab-cpp"
                  onClick={() => setActiveCodeTab("cpp")}
                  className={`text-[10px] font-mono px-2.5 py-1 rounded transition-all cursor-pointer ${
                    activeCodeTab === "cpp"
                      ? "bg-slate-800 text-white font-bold"
                      : "text-slate-500 hover:text-slate-350"
                  }`}
                >
                  longest_substring.cpp
                </button>
                <button
                  id="sandbox-tab-python"
                  onClick={() => setActiveCodeTab("python")}
                  className={`text-[10px] font-mono px-2.5 py-1 rounded transition-all cursor-pointer ${
                    activeCodeTab === "python"
                      ? "bg-slate-800 text-white font-bold"
                      : "text-slate-500 hover:text-slate-350"
                  }`}
                >
                  corvina_router.py
                </button>
              </div>
            </div>

            {/* Simulated Active Code display with copy capability */}
            <div className="flex-1 p-4 overflow-auto font-mono text-xs text-slate-300 relative bg-slate-950 scrollbar-none max-h-[380px]">
              <button
                id="copy-sandbox-code-btn"
                onClick={() => copyToClipboard(activeCodeTab === "cpp" ? cppDsaCode : pythonMockConfig)}
                className="absolute right-4 top-4 p-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-450 hover:text-white rounded-lg transition-all cursor-pointer shadow"
                title="Copy Code to Clipboard"
              >
                {copiedCodeCode ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>

              <pre className="text-[10px] leading-normal font-mono select-text pr-10">
                {activeCodeTab === "cpp" ? cppDsaCode : pythonMockConfig}
              </pre>
            </div>

            {/* Console output segment indicator */}
            <div className="p-3 bg-slate-950 border-t border-slate-900 font-mono text-[10px] text-slate-550 flex items-center justify-between">
              <span>Execution State: COMPILED SECURELY</span>
              <span className="text-emerald-500 font-bold">✔ READY TO BUILD ON CPU LAYER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
