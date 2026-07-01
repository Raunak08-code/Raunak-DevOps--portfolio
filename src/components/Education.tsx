import React, { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, BookOpen, TrendingUp, ChevronDown, ChevronUp, CheckCircle, Disc } from "lucide-react";
import { resumeData } from "../data";

const aktuSyllabus = [
  {
    sem: "Semester 1",
    sgpa: "7.14",
    status: "Completed" as const,
    credits: "20.5",
    subjects: [
      "Engineering Mathematics-I (BAS-103T)",
      "Engineering Physics (BAS-101T)",
      "Basic Electrical Engineering (BEE-101T)",
      "Artificial Intelligence for Engineering (BCS-101 / BAS-104)",
      "Programming for Problem Solving (BCS-101T) [Python]",
      "Physics Lab & PPS Lab (BAS-151P / BCS-151P)"
    ]
  },
  {
    sem: "Semester 2",
    sgpa: "7.45",
    status: "Completed" as const,
    credits: "20.5",
    subjects: [
      "Engineering Mathematics-II (BAS-203T)",
      "Engineering Chemistry (BAS-202T)",
      "Basic Electronics Engineering (BEC-201T)",
      "Emerging Technology for Engineering (BCS-202T)",
      "Professional Communication (BAS-204T)",
      "Chemistry Lab & PC Lab"
    ]
  },
  {
    sem: "Semester 3",
    sgpa: "7.76",
    status: "Completed" as const,
    credits: "21.0",
    subjects: [
      "Data Structures (BCS-301)",
      "Computer Organization & Architecture (BCS-302)",
      "Discrete Structures & Theory of Logic (BCS-303)",
      "Technical Communication (BAS-301) / Mathematics-IV (BAS-303)",
      "Data Structures Lab (BCS-351)",
      "Computer Organization Lab (BCS-352)"
    ]
  },
  {
    sem: "Semester 4",
    sgpa: "7.09",
    status: "Completed" as const,
    credits: "21.0",
    subjects: [
      "Operating Systems (BCS-401)",
      "Software Engineering (BCS-402)",
      "Theory of Automata and Formal Languages (BCS-403)",
      "Introduction to Artificial Intelligence (BCS-AI-401)",
      "Cyber Security (BAS-401)",
      "Operating Systems Lab (BCS-451)",
      "AI & Python Project Lab (BCS-AI-451)"
    ]
  },
  {
    sem: "Semester 5",
    sgpa: "7.17",
    status: "Completed" as const,
    credits: "22.0",
    subjects: [
      "Database Management System (BCS-501)",
      "Design and Analysis of Algorithms (BCS-503)",
      "Compiler Design (BCS-502)",
      "Machine Learning Techniques (BCS-AI-501)",
      "Web Technology (BCS-054) [Elective]",
      "DBMS Lab & DAA Lab",
      "Machine Learning Lab"
    ]
  },
  {
    sem: "Semester 6",
    sgpa: "7.00",
    status: "Completed" as const,
    credits: "22.0",
    subjects: [
      "Deep Learning Techniques (BCS-AI-601)",
      "Computer Networks (BCS-601)",
      "Compiler Design Lab / DL Lab",
      "Modern DevOps Systems & SRE concepts",
      "Department Elective Courses",
      "Comprehensive Mini Project"
    ]
  },
  {
    sem: "Semester 7",
    sgpa: "Ongoing",
    status: "Ongoing" as const,
    credits: "18.0",
    subjects: [
      "Cloud Computing (BCS-713) / Cloud Orchestration",
      "Distributed Systems & Blockchain",
      "Core AI Deployment & Pipelines",
      "Departmental Elective-IV",
      "Major Project Phase-I (BCS-751)"
    ]
  },
  {
    sem: "Semester 8",
    sgpa: "Upcoming",
    status: "Upcoming" as const,
    credits: "14.0",
    subjects: [
      "Major Project Phase-II (BCS-851)",
      "Comprehensive Industry Internship",
      "Open Elective-II",
      "Syllabus Case Seminars & Viva"
    ]
  }
];

export default function Education() {
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [selectedSemIdx, setSelectedSemIdx] = useState<number>(4); // Default select Semester 5

  const trendData = aktuSyllabus.filter((item) => item.status === "Completed");
  const sgpaValues = trendData.map((item) => Number(item.sgpa));
  const minSgpa = Math.min(...sgpaValues);
  const maxSgpa = Math.max(...sgpaValues);
  const chartPoints = trendData.map((item, index) => {
    const value = Number(item.sgpa);
    const x = 10 + index * 70;
    const y = 52 - ((value - minSgpa) / (maxSgpa - minSgpa || 1)) * 40;
    return { x, y, label: item.sem, value };
  });
  const linePath = chartPoints.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${chartPoints[chartPoints.length - 1].x} 60 L ${chartPoints[0].x} 60 Z`;

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-850 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            Academic Pathways
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-mono">
            Extracted credentials from parsed resume
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {resumeData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              id={`edu-card-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative relative-card group"
            >
              {/* Timeline Bullet Ring */}
              <div className="absolute -left-[43px] sm:-left-[59px] top-1.5 h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                <GraduationCap className="h-4 w-4" />
              </div>

              {/* Course Card Content */}
              <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800 pl-6 pr-6 pt-5 pb-5 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-200 dark:hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 rounded-full w-fit flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {edu.year}
                  </span>
                  <span className="font-sans font-bold text-sm bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full w-fit border border-cyan-150/30">
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-slate-800 dark:text-slate-100 mt-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {edu.institution}
                </p>

                {/* Additional academic flavor text customized to actual resume details */}
                {edu.degree.includes("CS-AI") && (
                  <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50 space-y-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                        <Award className="h-3.5 w-3.5 text-amber-500" /> Key Focus:
                      </span>
                      <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">Machine Learning & Algorithms</span>
                      <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">Git & Linux Tools</span>
                    </div>

                    {/* Integrated AKTU Semester Marks & Syllabus Dashboard */}
                    <div className="border border-slate-200/60 dark:border-slate-800 rounded-xl overflow-hidden bg-white/40 dark:bg-slate-900/40 shadow-xs">
                      <button
                        onClick={() => setIsConsoleOpen(!isConsoleOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-slate-100/60 dark:bg-slate-950/60 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors text-xs font-mono font-bold uppercase tracking-wider"
                      >
                        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                          <TrendingUp className="h-4 w-4" /> AKTU Syllabus & Semester Tracker
                        </span>
                        <span className="flex items-center gap-1">
                          {isConsoleOpen ? "COLLAPSE HUB" : "EXPAND HUB"}
                          {isConsoleOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </span>
                      </button>

                      {isConsoleOpen && (
                        <div className="p-4 space-y-5 border-t border-slate-200/60 dark:border-slate-800">
                          {/* Mini Sparkline SGPA Graph */}
                          <div className="bg-slate-50 dark:bg-slate-950/65 p-3 rounded-lg border border-slate-200/40 dark:border-slate-900">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                              SGPA Trend line (Sem 1-6 Progress)
                            </span>
                            <div className="h-28 w-full flex items-end justify-between px-3 pt-2">
                              {/* Draw SVG Line Chart natively to operate flawlessly cross-platform */}
                              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 60" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                                  </linearGradient>
                                </defs>
                                <path
                                  d={linePath}
                                  fill="none"
                                  stroke="#6366f1"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                />
                                <path d={areaPath} fill="url(#chartGradient)" />
                                {/* Render data points */}
                                {chartPoints.map((point, pointIdx) => (
                                  <circle
                                    key={pointIdx}
                                    cx={point.x}
                                    cy={point.y}
                                    r="4.5"
                                    fill="#6366f1"
                                    className="cursor-pointer transition-all hover:scale-125"
                                    onClick={() => setSelectedSemIdx(pointIdx)}
                                  />
                                ))}
                              </svg>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-slate-500 font-bold px-2 mt-1.5 border-t border-slate-150/40 dark:border-slate-850 pt-1">
                              {chartPoints.map((point, pointIdx) => (
                                <span key={pointIdx}>Sem {pointIdx + 1} ({point.value.toFixed(2)})</span>
                              ))}
                            </div>
                          </div>

                          {/* Quick Select Grid row */}
                          <div>
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block mb-2">
                              Select Semester Dashboard:
                            </span>
                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                              {aktuSyllabus.map((s, sIdx) => {
                                const isSelected = selectedSemIdx === sIdx;
                                return (
                                  <button
                                    key={sIdx}
                                    onClick={() => setSelectedSemIdx(sIdx)}
                                    className={`py-1.5 px-1 border rounded-lg text-[10px] font-mono font-bold transition-all text-center cursor-pointer ${
                                      isSelected
                                        ? "bg-indigo-600 border-indigo-600 text-white shadow-xs"
                                        : "bg-white dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                                    }`}
                                  >
                                    Sem {sIdx + 1}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Detailed view of Selected Semester */}
                          <div className="p-3.5 bg-indigo-50/20 dark:bg-indigo-950/20 border border-indigo-100/40 dark:border-indigo-900/50 rounded-xl space-y-3">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <div>
                                <span className="font-sans font-extrabold text-sm text-slate-800 dark:text-slate-200 block">
                                  {aktuSyllabus[selectedSemIdx].sem} Curricular Frame
                                </span>
                                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">
                                  AKTU Affiliated Curriculum • {aktuSyllabus[selectedSemIdx].credits} Credits
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                {aktuSyllabus[selectedSemIdx].status === "Completed" && (
                                  <span className="text-[10px] px-2 py-0.5 font-mono font-bold text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/50 rounded-full flex items-center gap-1">
                                    SGPA: {aktuSyllabus[selectedSemIdx].sgpa}
                                  </span>
                                )}
                                {aktuSyllabus[selectedSemIdx].status === "Ongoing" && (
                                  <span className="text-[10px] px-2 py-0.5 font-mono font-bold text-amber-700 bg-amber-50 dark:text-amber-300 dark:bg-amber-950/50 rounded-full animate-pulse flex items-center gap-1">
                                    <Disc className="h-2.5 w-2.5 text-amber-500 animate-spin" /> Ongoing
                                  </span>
                                )}
                                {aktuSyllabus[selectedSemIdx].status === "Upcoming" && (
                                  <span className="text-[10px] px-2 py-0.5 font-mono font-bold text-slate-500 bg-slate-100 dark:text-slate-400 dark:bg-slate-800 rounded-full">
                                    Upcoming
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Subjects stack */}
                            <div className="space-y-1.5 pt-1.5 border-t border-slate-200/50 dark:border-slate-800/50">
                              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                Prescribed Syllabus Subject Blocks:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {aktuSyllabus[selectedSemIdx].subjects.map((sub, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-350 py-1"
                                  >
                                    <CheckCircle className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                                    <span className="font-sans font-medium line-clamp-2 leading-snug">{sub}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
