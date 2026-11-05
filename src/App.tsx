import { useEffect, useLayoutEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ArrowUp, Award, Code2 } from "lucide-react";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { resumeData } from "./data";

type SectionPage = "about" | "edu-skill" | "project" | "blogs-extra" | "contact";
type Page = "home" | "portfolio" | `project/${string}`;

const getPageFromHash = (): Page => {
  const hash = window.location.hash;
  const page = hash.replace(/^#\/?/, "");
  if (page.startsWith("project/")) {
    const projectId = page.slice("project/".length);
    if (resumeData.projects.some((project) => project.id === projectId)) {
      return `project/${projectId}`;
    }
    return "portfolio";
  }

  return [
    "",
    "about",
    "edu-skill",
    "education",
    "skills",
    "project",
    "projects",
    "blogs-extra",
    "blogs",
    "contact",
  ].includes(page)
    ? page
      ? "portfolio"
      : "home"
    : "home";
};

const getSectionPageFromHash = (): SectionPage => {
  const page = window.location.hash.replace(/^#\/?/, "");
  if (page === "edu-skill" || page === "education" || page === "skills") {
    return "edu-skill";
  }
  if (page === "project" || page === "projects") return "project";
  if (page === "blogs-extra" || page === "blogs") return "blogs-extra";
  if (page === "contact") return "contact";
  return "about";
};

function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <button
      type="button"
      className="landing-screen"
      onClick={onEnter}
      aria-label="Enter Raunak Pandey's portfolio"
    >
      <picture className="landing-art">
        <source
          media="(max-width: 640px)"
          srcSet="/landing-mobile-ver.jpeg"
        />
        <img
          className="landing-art-image"
          src="/landing-neon.jpeg"
          alt="Illustration of Raunak Pandey surrounded by DevOps and cloud gaming artwork"
        />
      </picture>
      <img
        className="landing-signature"
        src="/signature.webp"
        alt="Raunak Pandey's signature"
      />
    </button>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--ink-black)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5">
          <img
            src="/R.png"
            alt=""
            className="h-8 w-8 shrink-0 rounded-md bg-white object-contain p-0.5"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--cloud-white)]">
              {resumeData.name}
            </p>
            <p className="text-xs text-[var(--grey-blue)]">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("app-content")
              ?.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border-soft)] px-3 py-2 text-sm font-medium text-[var(--cloud-white)] transition-colors hover:border-[var(--dusty-teal)] hover:text-[var(--dusty-teal)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dusty-teal)]"
        >
          Back to top
          <ArrowUp aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}

function BlogsPage() {
  return (
    <>
      <Blogs />

      <section className="portfolio-art portfolio-art-blogs border-b border-[var(--border-soft)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <section className="border border-[var(--border-soft)] p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2.5 border-b border-[var(--border-soft)] pb-3">
              <Award className="h-6 w-6 text-indigo-500" />
              <h2 className="font-sans text-lg font-bold text-[var(--cloud-white)]">
                Certifications & Activities
              </h2>
            </div>
            <div className="divide-y divide-[var(--border-soft)]">
              {resumeData.certificationsList.map((cert) => (
                <p key={cert} className="py-3 text-sm leading-relaxed text-[var(--cloud-white)]/80">
                  {cert}
                </p>
              ))}
            </div>
          </section>
          <section className="border border-[var(--border-soft)] p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2.5 border-b border-[var(--border-soft)] pb-3">
              <Code2 className="h-6 w-6 text-cyan-600" />
              <h2 className="font-sans text-lg font-bold text-[var(--cloud-white)]">
                Hackathons & Workshops
              </h2>
            </div>
            <div className="divide-y divide-[var(--border-soft)]">
              {resumeData.extraActivities.map((activity) => (
                <p key={activity} className="py-3 text-sm leading-relaxed text-[var(--cloud-white)]/80">
                  {activity}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(getPageFromHash);
  const [activeSection, setActiveSection] = useState<SectionPage>(
    getSectionPageFromHash,
  );

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getPageFromHash();
      setPage(nextPage);
      setActiveSection(getSectionPageFromHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useLayoutEffect(() => {
    if (page === "portfolio") {
      const hash = window.location.hash.replace(/^#\/?/, "");
      const targetId =
        hash === "education" || hash === "skills" || hash === "edu-skill"
          ? "education"
          : hash === "projects" || hash === "project"
            ? "projects"
            : hash === "blogs" || hash === "blogs-extra"
              ? "blogs"
              : hash === "contact"
                ? "contact"
                : "about";
      document.getElementById(targetId)?.scrollIntoView();
    } else {
      document.getElementById("app-content")?.scrollTo(0, 0);
    }
  }, [page]);

  const enterPortfolio = () => {
    window.location.hash = "#about";
    setPage("portfolio");
    setActiveSection("about");
  };

  useEffect(() => {
    if (page !== "portfolio") return;

    const sections = [
      { id: "about", page: "about" },
      { id: "education", page: "edu-skill" },
      { id: "projects", page: "project" },
      { id: "blogs", page: "blogs-extra" },
      { id: "contact", page: "contact" },
    ] as const;
    const scrollContainer = document.getElementById("app-content");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const currentSection = visibleSections[0]?.target.id;
        const activePage = sections.find(({ id }) => id === currentSection)?.page;
        if (activePage) setActiveSection(activePage);
      },
      {
        root: scrollContainer,
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [page]);

  if (page === "home") {
    return <LandingPage onEnter={enterPortfolio} />;
  }

  if (page.startsWith("project/")) {
    return (
      <div className="ink-indigo min-h-screen bg-[var(--ink-black)] text-[var(--cloud-white)]">
        <Navbar activePage="project" />
        <main id="app-content" className="app-content">
          <Projects projectId={page.slice("project/".length)} />
          <SiteFooter />
        </main>
        <Analytics />
      </div>
    );
  }

  return (
    <div className="ink-indigo min-h-screen bg-[var(--ink-black)] text-[var(--cloud-white)] selection:bg-[var(--midnight-indigo)] selection:text-[var(--cloud-white)]">
      <Navbar activePage={activeSection} />
      <main id="app-content" className="app-content">
        <About />
        <Education />
        <Skills />
        <Projects />
        <BlogsPage />
        <Contact />
        <SiteFooter />
      </main>
      <Analytics />
    </div>
  );
}
