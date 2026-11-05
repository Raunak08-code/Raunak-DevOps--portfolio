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
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#/"
          className="flex min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--dusty-teal)]"
          aria-label="Raunak Pandey home"
        >
          <img
            src="/R.png"
            alt=""
            className="h-10 w-10 shrink-0 rounded-lg bg-white object-contain p-0.5 sm:h-11 sm:w-11"
          />
          <span className="whitespace-nowrap font-sans text-xs font-bold tracking-tight text-[var(--cloud-white)] sm:text-lg">
            <i> RAUNAK</i>
          </span>
        </a>

        <div className="relative ml-auto">
          <div className="hidden items-center gap-1 rounded-full border border-white/30 bg-white/5 p-1.5 backdrop-blur-md md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activePage === item.id ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dusty-teal)] ${
                  activePage === item.id
                    ? "bg-white/15 text-[var(--cloud-white)]"
                    : "text-[var(--cloud-white)]/85 hover:bg-white/10 hover:text-[var(--cloud-white)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="cursor-pointer rounded-full border border-white/30 bg-white/5 p-2.5 text-[var(--cloud-white)] backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dusty-teal)] md:hidden"
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
            className="absolute right-4 top-[calc(100%+0.5rem)] w-56 rounded-2xl border border-white/20 bg-[rgba(6,11,26,0.88)] p-2 shadow-lg shadow-black/30 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={activePage === item.id ? "page" : undefined}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dusty-teal)] ${
                    activePage === item.id
                      ? "bg-white/15 text-[var(--cloud-white)]"
                      : "text-[var(--cloud-white)] hover:bg-white/10"
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
