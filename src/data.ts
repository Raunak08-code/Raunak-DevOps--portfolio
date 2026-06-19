import { ResumeData, BlogPost } from "./types";

export const resumeData: ResumeData = {
  name: "Raunak Pandey",
  role: "Aspiring DevOps Engineer",
  location: "Greater Noida, India",
  phone: "+91 8303609789",
  email: "panditraunak.143@gmail.com",
  linkedin: "https://linkedin.com/in/raunak-pandey", // Standard clean profile link
  github: "https://github.com/Raunak-Pandey", // GitHub username from resume
  instagram: "https://www.instagram.com/raukey_/",
  education: [
    {
      degree: "B.Tech CS-AI",
      institution: "GL Bajaj Institute of Technology and Management",
      score: "CGPA: 7.32",
      year: "2023 - 2027"
    },
    {
      degree: "Intermediate",
      institution: "Saraswati senior secondary Vidya Mandir, Deoria khas, Deoria, UP",
      score: "81.4%",
      year: "2022"
    },
    {
      degree: "High School",
      institution: "Saraswati senior secondary Vidya Mandir, Deoria khas, Deoria, UP",
      score: "84.8%",
      year: "2020"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        { name: "Golang", proficiency: 70 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Linux (Ubuntu)", proficiency: 90 },
        { name: "Docker & Compose", proficiency: 85 },
        { name: "Prometheus & Grafana", proficiency: 80 },
        { name: "Git & GitHub", proficiency: 85 },
        { name: "GitHub Actions", proficiency: 75 }
      ]
    },
    {
      category: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", proficiency: 85 },
        { name: "Object Oriented Programming (OOP)", proficiency: 80 },
        { name: "Operating Systems", proficiency: 75 },
        { name: "Computer Networks", proficiency: 75 },
        { name: "Database Management System", proficiency: 80 }
      ]
    },
    {
      category: "Developer Tools & Principles",
      skills: [
        { name: "CI / CD Pipelines", proficiency: 80 },
        { name: "System Monitoring", proficiency: 80 },
        { name: "Scripting & Automation", proficiency: 75 },
        { name: "JSON & YAML", proficiency: 90 },
        { name: "JIRA", proficiency: 70 }
      ]
    }
  ],
  projects: [
    {
      id: "corvina",
      title: "CORVINA - Automated Email Response System",
      subtitle: "Containerized Smart Email Processor",
      github: "https://github.com/Raunak-Pandey/CORVINA",
      description: [
        "Built a containerized backend system to read incoming emails, detect intent using rule-based analysis, and dispatch automated responses reliably.",
        "Implemented modular architecture with robust retry handling, structured logging, continuous deployment workflow, and SMTP/IMAP protocol debugging.",
        "Optimized processing pipeline to operate inside light-weight containers with live status updates."
      ],
      tags: ["Python FastAPI", "Docker", "IMAP", "SMTP", "REST APIs", "Linux", "Render", "Git & GitHub", "Docker Hub"]
    },
    {
      id: "glassbox",
      title: "GlassBox - System Observability Platform",
      subtitle: "Multi-Container Monitoring & Metrics Hub",
      github: "https://github.com/Raunak-Pandey/GlassBox",
      description: [
        "Developed a multi-container observability platform integrating visualization tools to continuously track, alert, and analyze infrastructure and app performance.",
        "Designed self-healing automated workflows for metrics collection, dashboard visualization with Prometheus queries (PromQL), and custom alertmanager configurations.",
        "Applied site-reliability and DevOps best practices for real-time memory, CPU, and disk usage tracking."
      ],
      tags: ["Docker", "Docker-compose", "Prometheus", "Grafana", "Linux", "Python", "System Logs", "CI/CD Setup", "AWS (EC2/ECR/S3)"]
    }
  ],
  problemSolvingDetails: {
    description: [
      "Solved 100+ complex DSA problems on Leetcode utilizing C++ with focus on runtime and memory space complexity optimization.",
      "Thorough understanding of low-level memory layouts, pointers, custom containers, and standard template library (STL)."
    ],
    leetcodeMockSolved: 112,
    skillsTouched: ["C++ STL", "Time Complexity O(N log N)", "Dynamic Programming", "Recursion", "Memory Safety"]
  },
  certificationsList: [
    "DevOps Workshop Certification- CloudDevOpsHub (2025) - Hands-On Docker, CI/CD fundamentals, and cloud deployment concepts.",
    "Multiple GDG technical session attendee in 2025 and 2026."
  ],
  extraActivities: [
    "Participant in Multiple Hackathons (including Hackaccino 3.0 at Bennett University)",
    "Active member and solver in LeetCode & Geeks-for-Geeks coding communities",
    "Engaged in systems engineering and automation scripts research"
  ]
};

export const blogPosts: BlogPost[] = [
  {
    id: "prometheus-grafana-challenges",
    title: "Overcoming Connection Hurdles in Prometheus & Grafana Integration",
    excerpt: "The hidden gotchas of containerized networking, local scrapes, dashboard metric dropouts, and configuring resilient endpoints under Docker.",
    date: "June 12, 2026",
    readTime: "7 min read",
    tags: ["Prometheus", "Grafana", "Observability", "Debugging"],
    content: `# Overcoming Connection Hurdles in Prometheus & Grafana Integration

Deploying an observability stack is rarely a plug-and-play experience. When building my **GlassBox** platform, I hit several networking and scrape traps that made me realize how delicate distributed telemetry can be.

---

## 1. The "localhost" DNS Trap
When configuring \`prometheus.yml\`, it's tempting to point targets to \`localhost:8000\` or \`127.0.0.1:8000\`. However, inside a Docker container, \`localhost\` refers to **the Prometheus container itself**, and not your host machine!

### The Solution: Common Bridge Network
By mapping all containers to a custom, single Docker bridge network, they can communicate using container names as hosts:

\`\`\`yaml
# Inside docker-compose.yml
networks:
  monitoring_net:
    driver: bridge
\`\`\`

And in your \`prometheus.yml\` config, you declare targets referencing those specific container names:

\`\`\`yaml
scrape_configs:
  - job_name: 'glassbox_backend'
    static_configs:
      - targets: ['backend-service:8000']
\`\`\`

## 2. Empty Dashboards & Missing Metrics
Another major headache was dashboard widgets showing \`No Data\`. I verified Prometheus was scraping, but Grafana wasn't drawing lines. 

- **Time Synchronization Errors**: Docker virtualization on laptops sometimes allows clock desynchronization between containers. Ensure NTP-like consistency or restart Docker desktop to synchronize system clocks.
- **Incorrect PromQL queries**: Make sure to check the exact metric name using the Prometheus expression browser first before copy-pasting queries into Grafana panels.`
  },
  {
    id: "postgresql-docker-compose",
    title: "Managing and Connecting PostgreSQL with Docker Compose",
    excerpt: "An essential blueprint for structuring persistent Postgres volumes, managing secure database configurations, and establishing reliable networks.",
    date: "May 29, 2026",
    readTime: "6 min read",
    tags: ["PostgreSQL", "Docker", "Compose", "Storage"],
    content: `# Managing and Connecting PostgreSQL with Docker Compose

Running databases in containerized environments requires strict discipline. If you don't configure storage persistence and initial run variables properly, a simple container restart can wipe out your whole database.

---

## 1. Ensuring Persistent Data Volumes
You must explicitly map your container storage directory to a named volume on the host. If you delete or recreate the container, the raw storage continues to live safely under standard volumes:

\`\`\`yaml
version: '3.8'

services:
  postgres_db:
    image: postgres:15-alpine
    container_name: postgres_container
    environment:
      POSTGRES_USER: dev_admin
      POSTGRES_PASSWORD: super_secure_password
      POSTGRES_DB: active_metrics
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - app_network

volumes:
  postgres_data:
\`\`\`

## 2. The Dependency Connection Order Race
Inside Compose, the \`depends_on\` tag is not magic. It tells Docker when to start the database container, but **not when the database engine inside it is fully ready to accept client connections**.

### The SRE Solution: Healthchecks
To avoid backend service container boot crashes during database initialization, add explicit connection healthchecks:

\`\`\`yaml
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U dev_admin -d active_metrics"]
      interval: 10s
      timeout: 5s
      retries: 5
\`\`\`

By configuring other microservices to wait for this exact healthy state, you avoid connection dropouts on cluster boots.`
  },
  {
    id: "swe-to-devops-shift",
    title: "My Transition: Why I Redirectioned My Career from SWE to DevOps",
    excerpt: "Moving from purely writing application code to orchestrating the secure, continuous, and high-performance infrastructure that hosts it.",
    date: "April 15, 2026",
    readTime: "5 min read",
    tags: ["Career", "DevOps", "SWE", "Systems"],
    content: `# Why I Redirectioned My Career from SWE to DevOps

As a Computer Science student, the traditional road is often Software Engineering (SWE). However, as I spent more time building complex code, I noticed where the true operational bottlenecks lie: **The Delivery Pipeline.**

---

## 1. From "What" to "How"
An application is only as good as its stability, speed, and deployment model. I realized that writing another API route was less challenging than deploying that API to thousands of users with 99.9% uptime and auto-healing capabilities.

## 2. The DevOps Synergy
What attracted me to DevOps is this deep symbiosis of programming and infrastructure:
- **Automation over repetition**: Writing custom Python scripts to scale containers.
- **Continuous feedback**: Using Prometheus to understand actual system performance rather than guessing.
- **Architecting systems**: Knowing how containers coordinate across complex virtual private clouds (VPC).

DevOps allows you to step back and look at the entire engine instead of just working on a single screen.`
  },
  {
    id: "ai-student-devops-choice",
    title: "Why I Chose DevOps over standard AI Pathways as an AI Student",
    excerpt: "Choosing to become the engineer who builds the high-performance pipelines and environments that serve production models.",
    date: "March 20, 2026",
    readTime: "7 min read",
    tags: ["DevOps", "AI", "Infrastructure", "SRE"],
    content: `# Choosing DevOps over standard AI Pathways as an AI Student

At G.L. Bajaj, my specialty is **Artificial Intelligence**. Many peers aim to become traditional Data Scientists or ML Researchers. Here is why I chose to focus on **DevOps/Platform Engineering** instead.

---

## 1. The ML/AI Deployment Gap
The world has millions of trained notebooks, but very few engineers who know how to host, feed, and scale them in real-time. Training a neural net is only 10% of the workflow; the other 90% is operational infrastructure!

- **Model Serving**: How do you containerize deep learning pipelines?
- **Data Flow**: Managing high-frequency ingestion queues using persistent databases.
- **GPU Orchestration**: Automatically spinning resources down when models are idle to save costs.

## 2. Platform Engineering is the Real Core
Without stable cloud infrastructures, automated continuous checks (CI/CD), and reliable alerts, even the smartest AI models are unusable. Choosing DevOps allows me to apply system automation to the cutting edge of AI deployment.`
  },
  {
    id: "next-steps-devex-idp",
    title: "What I Plan to Do Next: Introducing DevEx-IDP",
    excerpt: "Discover my plans for a self-hosted Internal Developer Platform that automates complete environment setups, repository creation, and Jira tracking.",
    date: "June 18, 2026",
    readTime: "8 min read",
    tags: ["IDP", "DevEx", "Automation", "Architecture"],
    content: `# What I Plan to Do Next: Introducing DevEx-IDP

I am thrilled to announce my next major technical project: **DevEx-IDP**, an ambitious, automated Internal Developer Platform engineered to solve developer environment friction.

---

## 1. Defining the DevEx-IDP Goal
Starting a new software project is often bogged down by manual configuration steps. Developers spend hours or days:
1. Creating a fresh remote Git repository.
2. Setting up Jira boards and tracking boards manually.
3. Writing a boilerplated Dockerfile, Compose file, and CI workflow.
4. Setting up local databases with specific passwords.

**DevEx-IDP** eliminates this entirely via absolute automation.

## 2. Architecture & Core Pipelines
We are designing DevEx-IDP as a fast, clean portal that coordinates third-party APIs:

- **Template Blueprints**: Automatically generates configured \`Dockerfile\`, \`docker-compose.yml\`, and standard GitHub Actions templates customized to selected tech stacks (Node, Python, or Go).
- **Git Orchestration**: Instantly provisions a repository using custom GitHub API wrappers.
- **Project Tracking Integration**: Triggers automated Jira workspace creation with standardized Kanban boards.
- **Environment Spin-up**: Provides instant local config downloads to get developers from zero to code in 60 seconds.`
}
];
