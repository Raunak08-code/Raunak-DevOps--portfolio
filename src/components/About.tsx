import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Learning from "./Learning";
import RoadAhead from "./RoadAhead";

type AboutPanel = "learning" | "road-ahead" | null;

const biography = [
  <>
    Hi, I'm <strong>Raunak Pandey</strong>, a Computer Science undergraduate
    specializing in Artificial Intelligence at G.L. Bajaj Institute of
    Technology and Management.
  </>,
  <>
    I'm passionate about <strong>Cloud Computing, DevOps, Platform Engineering,
    and Cloud Gaming</strong> — exploring how scalable infrastructure,
    automation, and software engineering come together to power modern
    applications and immersive digital experiences.
  </>,
  <>
    Through projects like <strong>NorthStar</strong>, my vision for a
    developer-centric platform focused on DevOps analytics and engineering
    insights, and <strong>DARR STUDIOS</strong>, my aspiring game development
    studio, I aim to bridge the worlds of infrastructure engineering and game
    development.
  </>,
  <>
    I enjoy building, experimenting, and understanding systems from the ground
    up — whether it's automating deployments, designing observable systems, or
    exploring the infrastructure behind multiplayer and cloud-powered gaming.
  </>,
  <>
    My long-term vision is to become a <strong>Cloud &amp; Platform
    Engineer</strong> while contributing to the evolution of cloud gaming and
    building technology that makes digital experiences more reliable, scalable,
    and accessible.
  </>,
];

const offerings = [
  {
    title: "DevOps Practices",
    description:
      "I bring development and operations together through version control, reliable CI/CD pipelines, infrastructure monitoring, and continuous improvement—helping teams deliver software more consistently.",
  },
  {
    title: "Containerization with Docker",
    description:
      "I build portable application environments with Docker and Docker Compose, and use Docker networks to let services communicate securely and predictably across multi-container setups.",
  },
  {
    title: "Kubernetes Orchestration",
    description:
      "I use Kubernetes concepts to orchestrate containerized workloads, manage deployments and scaling, and improve application availability across clusters.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "I work with cloud services across AWS, Azure, and other platforms, including compute such as EC2, object storage such as S3, networking, and managed services for scalable infrastructure.",
  },
  {
    title: "Automation with IaC & Ansible",
    description:
      "I automate repeatable infrastructure setup with Infrastructure as Code and Ansible, making server configuration and environment provisioning more consistent and easier to maintain.",
  },
  {
    title: "Problem Solving",
    description:
      "I have solved 120+ DSA problems on LeetCode and can write clean, structured code with attention to efficient algorithms and maintainability.",
  },
];

export default function About() {
  const [activePanel, setActivePanel] = useState<AboutPanel>(null);
  const aboutScrollY = useRef(0);
  const detailPageRef = useRef<HTMLDivElement>(null);
  const hadActivePanel = useRef(false);

  useLayoutEffect(() => {
    if (activePanel) {
      detailPageRef.current?.scrollTo(0, aboutScrollY.current);
      hadActivePanel.current = true;
      return;
    }

    if (hadActivePanel.current) {
      const scrollContainer = document.getElementById("app-content");
      if (scrollContainer) {
        scrollContainer.scrollTop = aboutScrollY.current;
      } else {
        window.scrollTo(0, aboutScrollY.current);
      }
      hadActivePanel.current = false;
    }
  }, [activePanel]);

  useEffect(() => {
    if (!activePanel) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePanel(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activePanel]);

  if (activePanel) {
    return (
      <div
        ref={detailPageRef}
        className="about-detail-page portfolio-art portfolio-art-about"
        role="dialog"
        aria-modal="true"
        aria-label={
          activePanel === "learning" ? "Currently Learning" : "Road Ahead"
        }
      >
        <button
          type="button"
          className="about-detail-close"
          onClick={() => setActivePanel(null)}
          aria-label="Close and return to About"
        >
          <X aria-hidden="true" />
        </button>
        {activePanel === "learning" ? <Learning /> : <RoadAhead />}
      </div>
    );
  }

  return (
    <section id="about" className="about-page portfolio-art portfolio-art-about">
      <header className="about-heading">
        <h1>About Me</h1>
        <p>
          <strong>Building reliable infrastructure. Engineering intelligent
          platforms. Exploring the future of cloud gaming.</strong>
        </p>
      </header>

      <div className="about-intro">
        {biography.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="about-card-grid">
        <button
          type="button"
          className="about-action-card"
          onClick={() => {
            aboutScrollY.current =
              document.getElementById("app-content")?.scrollTop ??
              window.scrollY;
            setActivePanel("learning");
          }}
        >
          Currently Learning
        </button>
        <button
          type="button"
          className="about-action-card"
          onClick={() => {
            aboutScrollY.current =
              document.getElementById("app-content")?.scrollTop ??
              window.scrollY;
            setActivePanel("road-ahead");
          }}
        >
          Road Ahead
        </button>
      </div>

      <section className="about-offerings" aria-labelledby="about-offerings-title">
        <h2 id="about-offerings-title">What I offer ~</h2>
        <div className="about-offerings-grid">
          {offerings.map((offering, index) => (
            <article className="about-offering" key={offering.title}>
              <span className="about-offering-number">0{index + 1}</span>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
