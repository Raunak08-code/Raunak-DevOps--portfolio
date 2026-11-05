import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ArrowRight, X, BookMarked, Code } from "lucide-react";
import { blogPosts } from "../data";
import type { BlogPost } from "../types";

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  // Custom micro-parser to convert standard markdown into beautiful stylized React DOM tree
  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    let inCodeBlock = false;
    let codeContent: string[] = [];

    return lines.map((line, idx) => {
      // Toggle code blocks
      if (line.trim().startsWith("```")) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const content = codeContent.join("\n");
          codeContent = [];
          return (
            <div key={idx} className="my-5 relative group">
              <div className="absolute right-3 top-3 text-[10px] font-mono text-slate-500 select-none uppercase flex items-center gap-1 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                <Code className="h-3 w-3" /> Syntax Block
              </div>
              <pre className="p-4 bg-slate-950 dark:bg-slate-950 text-slate-205 rounded-xl border border-slate-900 overflow-x-auto text-xs font-mono font-medium leading-relaxed">
                <code>{content}</code>
              </pre>
            </div>
          );
        } else {
          inCodeBlock = true;
          return null;
        }
      }

      // Collect code content if inside block
      if (inCodeBlock) {
        codeContent.push(line);
        return null;
      }

      // Main Headers: # Title
      if (line.trim().startsWith("# ")) {
        return (
          <h1 key={idx} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-8 mb-4 tracking-tight leading-snug">
            {line.trim().substring(2)}
          </h1>
        );
      }

      // Section Headers: ## Subheading
      if (line.trim().startsWith("## ")) {
        return (
          <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3 tracking-tight">
            {line.trim().substring(3)}
          </h2>
        );
      }

      // Sub-section keys: ### Block
      if (line.trim().startsWith("### ")) {
        return (
          <h3 key={idx} className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 mt-5 mb-2">
            {line.trim().substring(4)}
          </h3>
        );
      }

      // Horizontal dividers: ---
      if (line.trim() === "---") {
        return <hr key={idx} className="my-6 border-slate-200 dark:border-slate-850" />;
      }

      // Bullets list item: - Line
      if (line.trim().startsWith("- ")) {
        return (
          <li key={idx} className="ml-5 list-disc text-sm text-slate-600 dark:text-slate-350 my-1 leading-normal">
            {line.trim().substring(2)}
          </li>
        );
      }

      // Numeric list item: 1. Line
      if (/^\d+\.\s/.test(line.trim())) {
        const content = line.trim().replace(/^\d+\.\s/, "");
        return (
          <div key={idx} className="flex gap-2 text-sm text-slate-600 dark:text-slate-350 my-2.5 leading-normal">
            <span className="font-mono text-indigo-500 font-bold">#</span>
            <p>{content}</p>
          </div>
        );
      }

      // Skip entirely empty lines to avoid layout clutter
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Normal paragraph paragraph translation
      return (
        <p key={idx} className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed mb-4 font-sans">
          {line}
        </p>
      );
    });
  };

  return (
    <section
      id="blogs"
      className="portfolio-art portfolio-art-blogs border-b border-[var(--border-soft)] bg-[var(--ink-black)] py-16 transition-colors duration-500 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="mb-10 text-left">
          <h1 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Blogs
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 font-mono">
            Notes and practical guides on systems, automation, and engineering.
          </p>
        </div>

        {/* Open blog grid */}
        <div className="blogs-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sortedBlogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              id={`blog-card-${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              role="button"
              tabIndex={0}
              aria-label={`Read blog: ${post.title}`}
              className={`blog-entry flex cursor-pointer flex-col justify-between transition-colors group ${
                index === sortedBlogPosts.length - 1 ? "blog-entry-last" : ""
              }`}
              onClick={() => setSelectedPost(post)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedPost(post);
                }
              }}
            >
              <div>
                {/* Meta details */}
                <div className="mb-4 flex items-center gap-4 text-xs font-mono text-slate-400 select-none">
                  <span className="flex items-center gap-1 leading-none">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-405 mt-2 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Tag elements footer */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-slate-50 dark:bg-slate-950 text-slate-500 border border-slate-200/50 dark:border-slate-800/80 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 select-none">
                  Read Log <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULL SCREEN READING MODAL */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(9,11,14,0.48)] p-4 backdrop-blur-sm">
              <motion.div
                id="blog-reading-modal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden border border-white/15 bg-[rgba(17,23,32,0.78)] shadow-2xl backdrop-blur-xl"
              >
                {/* Modal close / header bar wrapper */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-indigo-500" />
                    <span className="text-xs font-mono font-bold text-slate-500">
                      SYS LOG: ARTICLE_READ_ACTIVE
                    </span>
                  </div>

                  <button
                    id="close-blog-modal"
                    onClick={() => setSelectedPost(null)}
                    className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-250 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Substantive Article container */}
                <div className="p-6 sm:p-10 overflow-y-auto flex-1 select-text">
                  <div className="mb-4 flex items-center gap-4 text-xs font-mono text-slate-400 select-none">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-indigo-500" /> {selectedPost.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 leading-tight select-all">
                    {selectedPost.title}
                  </h2>

                  <div className="flex flex-wrap gap-1.5 select-none mb-8">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/40 px-2.5 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Rendered content */}
                  <div className="markdown-body text-slate-700 dark:text-slate-300">
                    {renderMarkdown(selectedPost.content)}
                  </div>
                </div>

                {/* Footer reading indicator bar */}
                <div className="flex justify-end border-t border-white/10 bg-white/[0.03] p-4">
                  <button
                    id="read-modal-dismiss-btn"
                    onClick={() => setSelectedPost(null)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                  >
                    Close Log View
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
