# Raunak Pandey

> A six-page personal portfolio with a click-to-enter landing screen.

## Overview

The landing screen presents “Hi, I'm Raunak Pandey” and opens the portfolio when clicked. The other pages cover About, Edu-Skill, Project, Blogs-extra, and Contact.

---

## Live Features

* Click-to-enter landing page
* About, education and skills, projects, blogs and extras, and contact pages

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
