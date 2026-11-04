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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(9,11,14,0.88)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#/"
          className="flex items-center gap-2"
          aria-label="Raunak Pandey home"
        >
          <img
            src="/favicon.svg"
            alt=""
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="hidden font-sans text-lg font-bold tracking-tight text-[var(--cloud-white)] sm:inline">
            RAUNAK<span className="text-[var(--grey-blue)]">.DevOps</span>
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activePage === item.id ? "page" : undefined}
              className={`py-2 text-sm font-medium transition-colors ${
                activePage === item.id
                  ? "text-[var(--cloud-white)]"
                  : "text-[var(--grey-blue)] hover:text-[var(--cloud-white)]"
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
            className="cursor-pointer rounded-lg p-2 text-[var(--grey-blue)] hover:bg-[rgba(52,59,85,0.2)] md:hidden"
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
            className="border-t border-[var(--border-soft)] bg-[rgba(9,11,14,0.98)] md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={activePage === item.id ? "page" : undefined}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--cloud-white)] hover:bg-[rgba(52,59,85,0.3)]"
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
