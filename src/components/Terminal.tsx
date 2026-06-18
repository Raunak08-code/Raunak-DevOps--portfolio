import React, { useState, useEffect, useRef } from "react";
import { Terminal as TermIcon, Play, RefreshCw, Sparkles, Send } from "lucide-react";
import { resumeData } from "../data";

interface CommandHistory {
  cmd: string;
  output: string | React.ReactNode;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize terminal message
  useEffect(() => {
    setHistory([
      {
        cmd: "system_init",
        output: (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-indigo-400 font-bold">raunak_pandey_devops_node_1.sh v1.0.4 initialized...</p>
            <p className="text-slate-400 text-xs">
              Welcome to Raunak's interactive terminal resume! Powered by static compilations.
            </p>
            <p className="text-xs text-slate-500">
              Type <span className="text-cyan-400 font-bold font-mono">help</span> in the input prompt or click a chip below to view details.
            </p>
          </div>
        )
      }
    ]);
  }, []);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: string | React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 my-1 text-slate-300">
            <div>
              <span className="text-indigo-400 hover:underline cursor-pointer font-bold" onClick={() => handleCommand("about")}>about</span>
              {" - Brief bio or career target summary"}
            </div>
            <div>
              <span className="text-indigo-400 hover:underline cursor-pointer font-bold" onClick={() => handleCommand("skills")}>skills</span>
              {" - Extracted programming & cloud tech stack"}
            </div>
            <div>
              <span className="text-indigo-400 hover:underline cursor-pointer font-bold" onClick={() => handleCommand("projects")}>projects</span>
              {" - Major continuous automation projects"}
            </div>
            <div>
              <span className="text-indigo-400 hover:underline cursor-pointer font-bold" onClick={() => handleCommand("education")}>education</span>
              {" - Academic pathways & schools list"}
            </div>
            <div>
              <span className="text-indigo-400 hover:underline cursor-pointer font-bold" onClick={() => handleCommand("docker ps")}>docker ps</span>
              {" - Show active system containers details"}
            </div>
            <div>
              <span className="text-indigo-400 hover:underline cursor-pointer font-bold" onClick={() => handleCommand("contact")}>contact</span>
              {" - Details to connect or schedule chats"}
            </div>
            <div>
              <span className="text-rose-400 font-bold">clear</span>
              {" - Empty target dashboard logs console"}
            </div>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-1.5 text-slate-300 my-1 font-mono text-xs">
            <p className="font-bold text-slate-100">Profile: {resumeData.name}</p>
            <p className="text-indigo-400">{resumeData.role} @ G.L. Bajaj</p>
            <p className="leading-relaxed text-slate-400">
              Computer Science undergraduate specializing in Artificial Intelligence. Passionate about software engineering and operational excellence, exploring DevOps, Cloud, Automation, and Observability.
            </p>
            <p className="text-indigo-400 mt-1">
              Active projects: GlassBox (observability platform with Prometheus/Grafana) & CORVINA (intelligent automation).
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-slate-300 my-1">
            {resumeData.skills.map((group, idx) => (
              <div key={idx} className="text-xs">
                <span className="text-cyan-400 font-bold block mb-0.5">{group.category}:</span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-slate-400">
                  {group.skills.map((s, sidx) => (
                    <span key={sidx} className="bg-slate-900 border border-slate-800 px-1 rounded">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-3 text-slate-300 my-1">
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} className="text-xs border-l-2 border-indigo-500 pl-3 py-0.5">
                <p className="font-bold text-indigo-400 text-sm">{proj.title}</p>
                <p className="text-slate-400 italic mb-1">{proj.subtitle}</p>
                <p className="text-slate-500 text-[10px] mb-1.5">Repo: {proj.github}</p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                  {proj.description.map((desc, didx) => (
                    <li key={didx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1.5 text-slate-300 my-1 font-mono text-xs">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between border-b border-slate-900 pb-1">
                <div>
                  <span className="text-emerald-400 font-bold block">{edu.degree}</span>
                  <span className="text-slate-400">{edu.institution}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 block">{edu.year}</span>
                  <span className="text-indigo-400 font-bold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "docker ps":
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1 my-1 overflow-x-auto">
            <p className="text-slate-500 font-bold">CONTAINER ID   IMAGE                 COMMAND                  CREATED         STATUS         PORTS</p>
            <p className="text-emerald-400">c938f8303609   raunak/corvina:latest "/bin/fastapi-start"     2 days ago      Up 48 hours    0.0.0.0:8000-&gt;8000/tcp</p>
            <p className="text-indigo-400">d122bf573c09   raunak/glassbox:1.0   "/bin/prometheus-scrape" 3 days ago      Up 72 hours    0.0.0.0:9090-&gt;9090/tcp</p>
            <p className="text-cyan-400">a02830f7be3d   grafana/grafana:9.5   "/run.sh"                3 days ago      Up 72 hours    0.0.0.0:3000-&gt;3000/tcp</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1.5 text-slate-300 my-1 text-xs">
            <p><span className="text-indigo-400 font-bold">Email:</span> {resumeData.email}</p>
            <p><span className="text-indigo-400 font-bold">Phone:</span> {resumeData.phone}</p>
            <p><span className="text-indigo-400 font-bold">GitHub:</span> {resumeData.github}</p>
            <p><span className="text-indigo-400 font-bold">LinkedIn:</span> {resumeData.linkedin}</p>
            <p className="text-slate-500 mt-1.5 font-mono text-[11px]">
              Tip: You can submit your contract on the web visual form below! Let's build.
            </p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = `Command not found: "${trimmed}". Type "help" to view support profiles.`;
        break;
    }

    setHistory(prev => [
      ...prev,
      { cmd: cmdText, output: output }
    ]);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const promptChips = ["help", "about", "skills", "projects", "docker ps", "contact"];

  return (
    <div
      id="terminal-card"
      onClick={focusInput}
      className="w-full bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-2xl shadow-2xl p-4 overflow-hidden flex flex-col h-[400px] cursor-text font-mono text-sm leading-relaxed"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <TermIcon className="h-3.5 w-3.5 text-indigo-400" />
            <span className="text-xs text-slate-400 font-bold font-mono">raunak@devops-node-1:~</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-600 bg-slate-900 px-2 py-0.5 rounded">
          <span>PING LATENCY: 24ms</span>
        </div>
      </div>

      {/* Commands Stream History */}
      <div className="flex-1 overflow-y-auto mb-3 space-y-3 pr-1">
        {history.map((item, idx) => (
          <div key={idx} id={`cmd-out-${idx}`} className="space-y-1">
            {item.cmd !== "system_init" && (
              <div className="flex items-center text-indigo-400 font-bold text-xs">
                <span className="text-slate-500 mr-1.5">$</span>
                <span>{item.cmd}</span>
              </div>
            )}
            <div className="text-xs pl-2 border-l border-slate-900 text-slate-300">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={consoleEndRef} />
      </div>

      {/* Terminal Command Chips Selection bar */}
      <div className="flex flex-wrap items-center gap-1.5 pb-2 border-t border-slate-900 pt-2 mb-2 select-none overflow-x-auto whitespace-nowrap">
        <span className="text-[10px] text-slate-500 mr-1 flex items-center gap-0.5 uppercase">
          <Sparkles className="h-3 w-3 text-cyan-400" /> Quick Command:
        </span>
        {promptChips.map(chip => (
          <button
            key={chip}
            id={`chip-${chip.replace(" ", "-")}`}
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(chip);
            }}
            className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 px-2 py-1 rounded-md transition-all font-mono cursor-pointer active:scale-95"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Command Input Row */}
      <div className="flex items-center text-indigo-400 pt-1.5 border-t border-slate-900">
        <span className="text-slate-500 mr-2 font-bold">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          id="cmd-input-field"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="type help, docker ps, skills, projects..."
          className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs placeholder-slate-700 caret-indigo-500"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
        />
        <button
          id="send-cmd-btn"
          onClick={() => handleCommand(input)}
          className="text-xs text-indigo-400 hover:text-indigo-300 p-1 flex items-center justify-center cursor-pointer active:scale-90"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
