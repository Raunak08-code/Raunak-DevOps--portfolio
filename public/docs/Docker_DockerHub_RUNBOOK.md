# Raunak DevOps Portfolio Runbook

## Project: Raunak-DevOps--portfolio

---

# Goal

This project demonstrates:

* Git & GitHub Workflow
* Docker Containerization
* GitHub Actions CI
* Docker Hub CD (Image Publishing)

Pipeline:

Developer
↓
Git Push
↓
GitHub Actions
↓
Build Application
↓
Build Docker Image
↓
Push Image to Docker Hub

---

# 1. Repository Setup

Clone Repository

```bash
git clone git@github.com:Raunak08-code/Raunak-DevOps--portfolio.git

cd Raunak-DevOps--portfolio
```

Verify Remote

```bash
git remote -v
```

Expected:

```text
origin git@github.com:Raunak08-code/Raunak-DevOps--portfolio.git
```

---

# 2. GitHub Authentication

## Why SSH?

Avoids:

* PAT expiration
* Workflow scope issues
* Repeated authentication

Check SSH Key

```bash
ls ~/.ssh
```

Expected:

```text
id_ed25519
id_ed25519.pub
```

View Public Key

```bash
cat ~/.ssh/id_ed25519.pub
```

Add key to GitHub:

Settings
→ SSH and GPG Keys
→ New SSH Key

Test

```bash
ssh -T git@github.com
```

Expected:

```text
Hi Raunak08-code! You've successfully authenticated...
```

---

# 3. Dockerization

Purpose:

Package the application into a portable container.

Create Dockerfile

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","dev","--","--host"]
```

Build Image

```bash
docker build -t raunak-devops-portfolio .
```

Run Container

```bash
docker run -p 3000:3000 raunak-devops-portfolio
```

Verify

Open:

http://localhost:3000

---

# Common Docker Issues

## Port Mismatch

Container:

```text
Vite running on 3000
```

Wrong:

```bash
docker run -p 5173:5173
```

Correct:

```bash
docker run -p 3000:3000
```

Explanation:

Host Port → Container Port

---

## Docker Build Failure

Run:

```bash
docker build .
```

Check:

* package.json exists
* npm scripts exist
* Dockerfile path correct

---

# 4. GitHub Actions CI

Purpose:

Automatically validate project on every push.

Location:

```text
.github/workflows/ci.yml
```

Workflow:

```yaml
name: Portfolio CI

on:
  push:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: npm ci
      - run: npm run build
```

Pipeline:

Push
↓
Install Dependencies
↓
Build
↓
Pass / Fail

---

# Common CI Failures

## npm ci failed

Cause:

package-lock.json mismatch

Fix:

```bash
npm install

git add package-lock.json

git commit -m "fix lockfile"
```

---

## Build failed

Run locally:

```bash
npm run build
```

Fix errors locally first.

---

# 5. Docker Hub CD

Purpose:

Store ready-to-run application images.

Docker Hub acts as:

GitHub → Source Code

Docker Hub → Application Artifact

---

# Create Docker Hub Repository

Name:

```text
raunak-devops-portfolio
```

Visibility:

Public

---

# Create Docker Hub Token

Docker Hub

Settings
→ Personal Access Tokens

Permissions:

✓ Read

✓ Write

---

# GitHub Secrets

Repository

Settings
→ Secrets and Variables
→ Actions

Add:

```text
DOCKER_USERNAME
```

Value:

Docker Hub Username

Add:

```text
DOCKER_TOKEN
```

Value:

Docker Hub PAT

---

# Docker Publish Workflow

File:

```text
.github/workflows/docker-publish.yml
```

```yaml
name: Publish Docker Image

on:
  push:
    branches:
      - main

jobs:
  docker:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_TOKEN }}

      - uses: docker/build-push-action@v6
        with:
          push: true
          tags: raunak08/raunak-devops-portfolio:latest
```

---

# Docker Publish Flow

Git Push
↓
GitHub Action
↓
Docker Login
↓
Docker Build
↓
Docker Push
↓
Docker Hub

---

# Common Docker Hub Errors

## Access Token Has Insufficient Scopes

Error:

```text
unauthorized: access token has insufficient scopes
```

Cause:

Docker token missing Write permission.

Fix:

Create new Docker Hub PAT.

Enable:

✓ Read

✓ Write

Update GitHub Secret.

---

## Repository Not Found

Cause:

Repository doesn't exist.

Fix:

Create repository manually:

```text
raunak-devops-portfolio
```

---

## Wrong Username

Error:

```text
unauthorized
```

Check:

```yaml
tags:
  raunak08/raunak-devops-portfolio:latest
```

Must match Docker Hub username exactly.

---

# Trigger Workflow Without Changing Code

Purpose:

Re-run CI/CD after fixing secrets.

Command:

```bash
git commit --allow-empty -m "trigger workflow"

git push
```

Meaning:

Creates a commit even when no files changed.

Useful after:

* Secret updates
* Infrastructure fixes
* Docker Hub fixes

---

# Verification Checklist

GitHub

✓ Repository pushed

✓ SSH working

✓ CI passing

✓ Docker workflow passing

Docker Hub

✓ latest tag visible

✓ Image updated after push

Local

✓ docker build works

✓ docker run works

✓ Website accessible

---

# Resume Talking Points

Implemented GitHub Actions CI pipeline.

Containerized React/Vite application using Docker.

Automated Docker image publishing to Docker Hub.

Configured GitHub Secrets for secure CI/CD authentication.

Implemented SSH-based GitHub authentication workflow.

Built an end-to-end CI/CD pipeline from source code to container registry.
