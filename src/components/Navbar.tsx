import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal as TerminalIcon, FileText, Download } from "lucide-react";

interface NavbarProps {
  onDownloadResume: () => void;
}

export default function Navbar({ onDownloadResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section calculation
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-sm">
              R
            </div>
            <span className="font-sans font-bold tracking-tight text-slate-800 text-lg sm:text-xl hidden md:inline">
              Raunak<span className="text-indigo-600">.devops</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-1 py-2 font-medium text-sm transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls Panel */}
          <div className="flex items-center gap-2">
            {/* Download Resume Button */}
            <button
              id="navbar-resume-btn"
              onClick={onDownloadResume}
              title="Download Official PDF Resume"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold border border-indigo-200 text-indigo-600 bg-indigo-50 hover:bg-indigo-100/70 cursor-pointer active:scale-95 transition-all"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
              <Download className="h-3 w-3 opacity-70" />
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-650 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Main menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-650 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
