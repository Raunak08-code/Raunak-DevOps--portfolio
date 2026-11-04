import { ResumeData, BlogPost } from "./types";

export const resumeData: ResumeData = {
  name: "Raunak Pandey",
  role: "Aspiring DevOps Engineer",
  location: "Greater Noida, India",
  phone: "+91 8303609789",
  email: "panditraunak.143@gmail.com",
  linkedin: "https://www.linkedin.com/in/raunak-pandey-1801202a0/",
  github: "https://github.com/Raunak08-code",
  dockerHub: "https://hub.docker.com/repositories/raunak08",
  instagram: "https://www.instagram.com/raukey_?psln=ZDhxZGJqdHB3ZDNx",
  education: [
    {
      degree: "B.Tech CSE-AI",
      institution: "G.L. Bajaj Institute of Technology and Management",
      score: "CGPA 7.23/10",
      year: "2023-2027"
    },
    {
      degree: "Intermediate (12th)",
      institution: "Saraswati Senior Secondary Vidya Mandir, Deoria Khas, Deoria, UP",
      score: "81.4%",
      year: "2022"
    },
    {
      degree: "High School (10th)",
      institution: "Saraswati Senior Secondary Vidya Mandir, Deoria Khas, Deoria, UP",
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
      id: "glassbox",
      title: "GlassBox",
      subtitle: "Containerized observability and monitoring platform",
      github: "https://github.com/Raunak-Pandey/GlassBox",
      description: [
        "Developed a multi-container observability platform to track, alert on, and analyze infrastructure and application performance.",
        "Configured Prometheus metrics, Grafana dashboards, and Alertmanager for system monitoring and alerting.",
        "Applied DevOps practices to track resource usage and support reliable multi-container deployments."
      ],
      tags: ["Docker", "Docker Compose", "Prometheus", "Grafana", "Alertmanager", "Python", "AWS EC2", "ECR", "S3"]
    },
    {
      id: "corvina",
      title: "CORVINA",
      subtitle: "Automated email processing and response system",
      github: "https://github.com/Raunak-Pandey/CORVINA",
      description: [
        "Built a containerized backend service that processes incoming email, detects intent, and dispatches automated responses.",
        "Designed modular workflows with structured logging, retry handling, and SMTP/IMAP protocol integration.",
        "Added API endpoints with FastAPI and automated delivery workflows."
      ],
      tags: ["Python", "FastAPI", "Docker", "IMAP", "SMTP", "REST APIs", "Linux", "GitHub Actions"]
    },
    {
      id: "my-portfolio",
      title: "Raunak.DevOps Portfolio",
      subtitle: "Portfolio delivery with Docker, CI/CD, and AWS",
      github: "https://github.com/Raunak08-code/Raunak-DevOps--portfolio",
      live: "https://raunak-dev-ops-portfolio.vercel.app/",
      docker: "https://hub.docker.com/repository/docker/raunak-devops--potfolio",
      description: [
        "Containerized and deployed this React portfolio as a production web application.",
        "Automated Docker image builds and publishing with a GitHub Actions CI/CD pipeline.",
        "Deployed on AWS EC2 behind an Nginx reverse proxy."
      ],
      tags: ["Docker", "Docker Hub", "GitHub Actions", "CI/CD", "AWS EC2", "Nginx", "Vite", "React"]
    },
    {
      id: "northstar",
      title: "NorthStar",
      subtitle: "Insights for Every Development Journey",
      github: "https://github.com/Raunak08-code",
      report: "/docs/northstar-report.pdf",
      status: "In Development",
      description: [
        "NorthStar is an evolving DevOps analytics platform designed to bring development activity, build history, and engineering delivery insights into one place.",
        "Its long-term vision is to help developers and teams understand their development journey through actionable engineering metrics.",
        "Current roadmap includes V1: GitHub statistics and build history, V2: deployment metrics, V3: DORA metrics, and V4: team analytics."
      ],
      tags: ["Go", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "GitHub REST API", "Webhooks", "Docker"]
    },
    {
      id: "darr-studios",
      title: "DARR STUDIOS",
      subtitle: "Independent game development studio",
      status: "In Development",
      description: [
        "An early-stage independent game development studio focused on building original interactive experiences.",
        "The studio is currently in development, with its identity, production workflow, and first game concepts taking shape."
      ],
      tags: ["Game Development", "Interactive Experiences"]
    }
  ],
  learningProgress: {
    platform: "Microsoft Learn",
    username: "raunak08",
    level: "Level 3",
    completedModules: 3,
    modules: [
      {
        title: "Plan with DevOps",
        status: "Completed",
        description: "Learned about DevOps culture, Agile planning, collaboration and planning projects using GitHub Projects.",
        link: "https://learn.microsoft.com/en-gb/training/modules/plan-with-devops/"
      },
      {
        title: "Develop with DevOps",
        status: "Completed",
        description: "Explored Git, GitHub Flow, source control, continuous integration, shift-left testing and shift-left security.",
        link: "https://learn.microsoft.com/en-gb/training/modules/develop-with-devops/"
      },
      {
        title: "Deliver with DevOps",
        status: "Completed",
        description: "Explored continuous delivery, Infrastructure as Code, deployment practices and CI/CD workflows using GitHub Actions.",
        link: "https://learn.microsoft.com/en-gb/training/modules/deliver-with-devops/"
      }
    ]
  },
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
    id: "microsoft-learn-devops-journey",
    title: "My DevOps Learning Journey with Microsoft Learn",
    excerpt: "How Microsoft Learn helped me build a strong foundation in DevOps through practical, hands-on learning and guided modules.",
    date: "July 23, 2026",
    readTime: "5 min read",
    tags: ["Microsoft Learn", "DevOps", "Learning", "Cloud"],
    content: `# My DevOps Learning Journey with Microsoft Learn

My learning journey pushed me closer to the world of DevOps, and one of the biggest guides along the way was **Microsoft Learn**. It became more than just a learning platform for me — it helped me build a strong foundation, think in a more practical way, and understand how real-world systems actually work.
> I'm currently at level 4 of it.
---

## 1. Why Microsoft Learn Stood Out
What I appreciated most about Microsoft Learn was its structured approach. Instead of just reading theory, it guided me through concepts in a way that felt practical and beginner-friendly. It helped me connect the dots between tools, workflows, and the mindset needed to grow as a DevOps engineer.

## 2. What I Learned Along the Way
While exploring the platform, I learned many important aspects of becoming a strong DevOps engineer, including:
- **Version control** and the importance of collaboration
- **Docker basics** and containerization fundamentals
- **Container optimization** and efficient workflows
- **How DevOps practices support development and deployment**
- **The importance of understanding systems deeply rather than just memorizing commands**

These topics gave me a better grasp of how modern software delivery works and how DevOps brings development and operations closer together.

## 3. The Modules That Helped Me Most
Some of the learning paths that really shaped my understanding were:
- **Develop with DevOps**
- **Deploy with DevOps**
- **Deliver with DevOps**

These modules helped me see DevOps not just as a set of tools, but as a way of thinking — one that focuses on automation, collaboration, reliability, and continuous improvement.

## 4. My Experience and Takeaway
What made Microsoft Learn especially valuable for me was the combination of clear explanations and hands-on learning. It didn’t just teach me concepts; it helped me build confidence in applying them. That practical approach made a big difference in my journey and pushed me to explore DevOps more seriously.

## 5. Recommendation
If you are starting your journey in DevOps or want to strengthen your fundamentals, I highly recommend **Microsoft Learn**. It is a great platform for building a solid base, learning step by step, and developing the mindset needed to grow as a modern engineer.

For anyone looking for a practical and beginner-friendly path into DevOps, Microsoft Learn is definitely worth exploring.`
  },
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
  },
  {
    id: "loss-of-last-3-months",
    title: "The Loss of Last 3 Months",
    excerpt: "From mid-July to the end of October, I had nothing to show except time lost and sleep. I am back on track now, and the game is on again.",
    date: "October 31, 2026",
    readTime: "4 min read",
    tags: ["Life", "Reflection", "Work", "Reset"],
    content: `# The Loss of Last 3 Months

From mid-July to the end of October, I had almost nothing. Not a meaningful streak, not a clear routine, not much work, and not much focus. I was mostly lying down and sleeping. That is the honest version.

It was not a dramatic collapse or some visible failure. It was just a quiet period where my energy, intention, and discipline dropped out at the same time. Days passed without much structure. I was not producing anything useful, and I was not moving in any direction that mattered.

There were no big breakthroughs during that time. No extra learning, no project depth, no sharp momentum. Just a long stretch of inactivity that I cannot pretend was anything else.

The part that matters now is that I am back in motion. Not in a perfect state, not fully recovered, but enough to move again.

The gap is clear. The time was lost. The work was not done. But the important part is that the state changed. I am back on track. I am working again. I am building again.

THE GAME IS ON AGAIN.`
  },
  {
    id: "auto-scroll-debugging-fix",
    title: "Fixing Auto-scroll Issue After Long Debugging",
    excerpt: "Why my portfolio kept opening near the Education section and how I fixed it by preventing an unwanted initial scroll after load.",
    date: "July 2, 2026",
    readTime: "6 min read",
    tags: ["React", "Debugging", "Scroll", "Frontend"],
    content: `# Fixing Auto-scroll Issue After Long Debugging

My portfolio was always opening near the Education section instead of the Hero section. At first, this looked like a browser scroll restoration problem, but the behavior was too consistent to be accidental.

---

## 1. What I Checked First
I ruled out the usual suspects:
- Browser scroll restoration
- Component ordering in the page tree
- Whether the Hero element actually existed in the DOM

The page structure itself was fine, so the issue had to be happening during runtime.

## 2. How I Found the Root Cause
I used \`window.scrollY\` to verify that the page was being scrolled programmatically after load. That pointed me toward a scroll-related effect in the app.

After tracing the flow, I found a \`scrollIntoView()\` call inside the terminal component. It was firing after the initial history setup, which pushed the viewport away from the top and made the Education section appear first.

## 3. The Fix
I solved it by skipping the first effect execution with a \`useRef\`. That preserved the normal auto-scroll behavior for later terminal interactions while preventing the unwanted jump on initial load.

### Example approach
\`\`\`ts
const hasInitialized = useRef(false);

useEffect(() => {
  if (!hasInitialized.current) {
    hasInitialized.current = true;
    return;
  }

  // run the desired auto-scroll logic here
}, [dependency]);
\`\`\`

## 4. Why This Worked
The change was small but important:
- The page now opens at the Hero section as intended.
- Later interactions still keep their auto-scroll behavior.
- The fix stays localized and avoids changing the overall user flow.

This kind of issue is easy to miss because it only appears after the app has fully mounted. In debugging, the key is to verify the browser state, inspect the lifecycle sequence, and isolate the first render behavior before changing anything else.`
  }
];
