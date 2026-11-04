import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

type Page = "about" | "edu-skill" | "project" | "blogs-extra" | "contact";

interface NavbarProps {
  activePage: Page;
}

const navItems: { id: Page; label: string; href: string }[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "edu-skill", label: "Edu-Skill", href: "#education" },
  { id: "project", label: "Project", href: "#projects" },
  { id: "blogs-extra", label: "Blogs", href: "#blogs" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar({ activePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(9,11,14,0.98)] shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#/"
          className="flex min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--dusty-teal)]"
          aria-label="Raunak Pandey home"
        >
          <img
            src="/raunak-logo.png"
            alt=""
            className="h-10 w-10 shrink-0 rounded-lg bg-white object-cover shadow-sm ring-1 ring-white/20 sm:h-11 sm:w-11"
          />
          <span className="whitespace-nowrap font-sans text-xs font-bold tracking-tight text-[var(--cloud-white)] sm:text-lg">
            RAUNAK<span className="text-[var(--grey-blue)]"> PANDEY</span>
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activePage === item.id ? "page" : undefined}
              className={`border-b-2 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--dusty-teal)] ${
                activePage === item.id
                  ? "border-[var(--dusty-teal)] text-[var(--cloud-white)]"
                  : "border-transparent text-[var(--cloud-white)]/80 hover:border-[var(--grey-blue)] hover:text-[var(--cloud-white)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="cursor-pointer rounded-lg p-2 text-[var(--cloud-white)] transition-colors hover:bg-[rgba(124,156,158,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dusty-teal)] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--border-soft)] bg-[rgba(9,11,14,0.99)] shadow-lg shadow-black/30 md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={activePage === item.id ? "page" : undefined}
                  className={`block rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dusty-teal)] ${
                    activePage === item.id
                      ? "border-[var(--dusty-teal)] bg-[rgba(124,156,158,0.18)] text-[var(--cloud-white)]"
                      : "border-transparent text-[var(--cloud-white)] hover:bg-[rgba(124,156,158,0.12)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
