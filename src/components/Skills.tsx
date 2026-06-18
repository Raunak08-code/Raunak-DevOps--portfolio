import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Server, Wrench, Shield, Filter, BrainCircuit } from "lucide-react";
import { resumeData } from "../data";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...resumeData.skills.map(group => group.category)];

  // Filter skills based on tab selection & search text
  const filteredSkills = resumeData.skills.map(group => {
    // If we've selected a category, only let this matching group through
    if (selectedCategory !== "All" && group.category !== selectedCategory) {
      return null;
    }
    
    // Filter skills inside the group matching search text term
    const matched = group.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matched.length === 0) return null;

    return {
      category: group.category,
      skills: matched
    };
  }).filter(Boolean) as typeof resumeData.skills;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <BrainCircuit className="h-5 w-5 text-indigo-500" />;
      case "Cloud & DevOps":
        return <Server className="h-5 w-5 text-cyan-500" />;
      case "Core Concepts":
        return <Shield className="h-5 w-5 text-amber-500" />;
      default:
        return <Wrench className="h-5 w-5 text-emerald-500" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 border-b border-slate-100 dark:border-slate-850"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Heading */}
        <div className="text-center mb-12">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 uppercase tracking-tight">
            Technical Arsenal
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-mono">
            Interactive skill matrix filtered by competence rate
          </p>
        </div>

        {/* Filters and Search panel container */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-10 max-w-5xl mx-auto">
          {/* Search bar input */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-450 dark:text-slate-500" />
            <input
              type="text"
              id="skill-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. docker, c++)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-sans text-slate-800 dark:text-slate-100 placeholder-slate-450 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-505 focus:border-indigo-505"
            />
          </div>

          {/* Filtering Chips slider */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 whitespace-nowrap">
            <Filter className="h-4 w-4 text-slate-450 hidden md:inline" />
            {categories.map(category => (
              <button
                key={category}
                id={`skill-filter-${category.replace(/[^a-zA-Z0-9]/g, "-")}`}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs px-3 py-2 rounded-xl font-medium transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-white dark:bg-slate-905 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Skills Grid Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                id={`skill-group-${group.category.replace(/[^a-zA-Z0-9]/g, "-")}`}
                className="bg-white dark:bg-slate-900 border border-slate-200/55 dark:border-slate-800/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100 dark:border-slate-800">
                    {getCategoryIcon(group.category)}
                    <h3 className="font-sans font-bold text-base text-slate-800 dark:text-slate-250">
                      {group.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, sidx) => (
                      <div key={sidx} id={`skill-item-${skill.name.toLowerCase()}`} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                          <span className="text-slate-700 dark:text-slate-300 font-mono font-medium">{skill.name}</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold">{skill.proficiency}%</span>
                        </div>
                        <div className="relative w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden">
                          {/* Animated Fill Loading Effect */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredSkills.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-12 text-slate-500 dark:text-slate-400 mt-4">
              <p className="font-mono text-sm">No skills found Matching "{searchTerm}" or selected tags.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
