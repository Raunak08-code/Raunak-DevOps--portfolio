# Raunak DevOps Portfolio

> A personal portfolio platform showcasing my projects, technical journey, and DevOps engineering practices.

## Overview

This project serves two purposes:

1. Showcase my projects, skills, and professional profile.
2. Demonstrate practical DevOps concepts including containerization, CI/CD automation, container registry integration, and deployment readiness.

While the frontend was developed with AI-assisted tooling, the project was re-engineered and managed from a DevOps perspective, including Dockerization, GitHub Actions automation, Docker Hub publishing, documentation, and operational workflows.

---

## Live Features

* Responsive Portfolio Website
* Interactive Terminal Experience
* Project Showcase
* Skills Dashboard
* Contact Information
* Blog Section

---

## DevOps Features

### Containerization

* Dockerized application
* Reproducible local environment
* Portable deployment artifact

### Continuous Integration

Implemented GitHub Actions workflows for:

* Source checkout
* Dependency installation
* Application build validation
* Automated quality checks

### Continuous Delivery

Implemented automated Docker image publishing:

Git Push
↓
GitHub Actions
↓
Docker Build
↓
Docker Hub Publish

### Registry Management

Docker images are automatically published to Docker Hub after successful pipeline execution.

---

## Technology Stack

### Frontend

* React
* TypeScript
* Vite

### DevOps

* Docker
* GitHub Actions
* Docker Hub
* Git
* GitHub

---

## Project Structure

```text
Raunak-DevOps--portfolio/
│
├── src/
├── public/
├── docs/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── docker-publish.yml
│
├── Dockerfile
├── .dockerignore
├── README.md
└── package.json
```

## Local Development

Clone repository:

```bash
git clone git@github.com:Raunak08-code/Raunak-DevOps--portfolio.git
cd Raunak-DevOps--portfolio
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

---

## Docker Usage

Build image:

```bash
docker build -t raunak-devops-portfolio .
```

Run container:

```bash
docker run -p 3000:3000 raunak-devops-portfolio
```

---

## CI/CD Workflow

### CI Pipeline

```text
Developer
    ↓
Git Push
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
Build Validation
```

### CD Pipeline

```text
Developer
    ↓
Git Push
    ↓
GitHub Actions
    ↓
Docker Build
    ↓
Docker Hub Publish
```

---

## DevOps Learning Objectives Demonstrated

* Containerization using Docker
* CI/CD pipeline creation
* GitHub Actions workflow automation
* Docker Hub registry integration
* Secure secret management
* SSH-based GitHub authentication
* Documentation and operational runbooks

---

## Future Enhancements

* Multi-stage Docker builds
* Nginx reverse proxy
* AWS EC2 deployment
* Terraform infrastructure provisioning
* Prometheus monitoring
* Grafana dashboards
* Kubernetes deployment
* GitOps workflow

---

## Author

Raunak Pandey

Aspiring DevOps Engineer focused on automation, cloud infrastructure, observability, and platform engineering.

GitHub: https://github.com/Raunak08-code
