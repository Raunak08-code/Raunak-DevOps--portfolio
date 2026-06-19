# AWS EC2 Deployment Runbook

## Project: Raunak DevOps Portfolio

---

# Objective

Deploy a Dockerized portfolio application from Docker Hub to an AWS EC2 Ubuntu server.

Architecture:

Developer
↓
GitHub
↓
GitHub Actions
↓
Docker Hub
↓
AWS EC2
↓
Docker Container
↓
Public Website

---

# Prerequisites

Required:

* AWS Account
* Docker image available on Docker Hub
* SSH Key Pair (.pem)
* Security Group configured
* Ubuntu-based EC2 Instance

Example Image:

```bash
raunak08/raunak-devops-portfolio:latest
```

---

# Phase 1: Launch EC2 Instance

## Navigate

AWS Console

EC2

Launch Instance

---

## Configuration

### Name

```text
portfolio-server
```

### AMI

```text
Ubuntu Server 24.04 LTS
```

### Instance Type

```text
t3.micro
```

Expected:

```text
Free Tier Eligible
```

---

## Storage

```text
8 GB
```

Default is sufficient.

---

# Phase 2: Create Key Pair

Purpose:

Used for SSH authentication.

Click:

```text
Create New Key Pair
```

Configuration:

Name:

```text
portfolio-key
```

Type:

```text
RSA
```

Format:

```text
.pem
```

AWS downloads:

```text
portfolio-key.pem
```

Important:

Losing this file means losing SSH access.

---

# Phase 3: Security Group Configuration

Purpose:

Cloud Firewall.

Enable:

### SSH

```text
Port 22
Source: Anywhere
```

Used for:

```bash
ssh
```

---

### HTTP

```text
Port 80
Source: Anywhere
```

Used for:

```text
Website Traffic
```

---

Future:

### HTTPS

```text
Port 443
```

Added during SSL setup.

---

# Phase 4: Launch Instance

Click:

```text
Launch Instance
```

Wait until:

```text
Instance State = Running

Status Checks = 2/2 Passed
```

---

# Phase 5: Obtain Public IP

Navigate:

EC2

Instances

Select Instance

Copy:

```text
Public IPv4 Address
```

Example:

```text
13.207.xxx.xxx
```

---

# Phase 6: Prepare SSH Key in WSL

Move Key:

```bash
mkdir -p ~/.ssh

cp /mnt/c/Users/<WINDOWS_USER>/Downloads/portfolio-key.pem ~/.ssh/
```

Set Permissions:

```bash
chmod 400 ~/.ssh/portfolio-key.pem
```

Verify:

```bash
ls -l ~/.ssh/portfolio-key.pem
```

Expected:

```text
-r--------
```

---

# Phase 7: Connect via SSH

Command:

```bash
ssh -i ~/.ssh/portfolio-key.pem ubuntu@PUBLIC_IP
```

Example:

```bash
ssh -i ~/.ssh/portfolio-key.pem ubuntu@13.207.xxx.xxx
```

First Login:

```text
Are you sure you want to continue connecting?
```

Type:

```text
yes
```

---

# Phase 8: Update Server

```bash
sudo apt update

sudo apt upgrade -y
```

Purpose:

Install latest package updates.

---

# Phase 9: Install Docker

Install:

```bash
sudo apt install docker.io -y
```

Start Docker:

```bash
sudo systemctl start docker

sudo systemctl enable docker
```

Verify:

```bash
docker --version
```

---

# Phase 10: Fix Docker Permissions

Add User:

```bash
sudo usermod -aG docker ubuntu
```

Reconnect:

```bash
exit
```

SSH Again:

```bash
ssh -i ~/.ssh/portfolio-key.pem ubuntu@PUBLIC_IP
```

Verify:

```bash
groups
```

Expected:

```text
ubuntu docker
```

Test:

```bash
docker ps
```

No sudo should be required.

---

# Phase 11: Pull Docker Image

Pull:

```bash
docker pull raunak08/raunak-devops-portfolio:latest
```

Verify:

```bash
docker images
```

Expected:

```text
raunak08/raunak-devops-portfolio
```

---

# Phase 12: Run Container

Basic Deployment:

```bash
docker run -d \
--name portfolio \
-p 80:3000 \
raunak08/raunak-devops-portfolio:latest
```

---

# Production Deployment

Recommended:

```bash
docker run -d \
--restart unless-stopped \
--name portfolio \
-p 80:3000 \
raunak08/raunak-devops-portfolio:latest
```

Purpose:

```text
EC2 Reboot
    ↓
Container Auto Starts
```

---

# Phase 13: Verify Deployment

Running Containers:

```bash
docker ps
```

Expected:

```text
0.0.0.0:80->3000/tcp
```

---

Test Locally:

```bash
curl localhost
```

Expected:

```html
<!DOCTYPE html>
```

---

Browser Test:

```text
http://PUBLIC_IP
```

Portfolio should load.

---

# Troubleshooting

## Permission Denied Docker

Error:

```text
permission denied while trying to connect to docker.sock
```

Fix:

```bash
sudo usermod -aG docker ubuntu
```

Reconnect SSH.

---

## Container Not Running

Check:

```bash
docker ps -a
```

View Logs:

```bash
docker logs portfolio
```

---

## Website Not Accessible

Verify:

```bash
docker ps
```

Check:

```text
Port Mapping
80 -> 3000
```

Verify Security Group:

```text
HTTP Port 80 Allowed
```

---

## SSH Fails

Verify:

```text
Correct Public IP

Correct Key File

chmod 400
```

---

# Stopping the Server

AWS Console

EC2

Instance State

Stop Instance

Effect:

```text
Compute Billing Stops
```

Resources remain intact.

---

# Starting the Server Again

AWS Console

EC2

Instance State

Start Instance

Wait:

```text
Running

2/2 Checks Passed
```

Get New Public IP.

Reconnect:

```bash
ssh -i ~/.ssh/portfolio-key.pem ubuntu@NEW_IP
```

---

# Cost Notes

Free Tier Includes:

* 750 hours/month t3.micro
* 30 GB EBS Storage

Current Usage:

```text
Instance: t3.micro

Storage: 8 GB
```

Within Free Tier Limits.

---

# Resume Talking Points

* Deployed containerized application on AWS EC2.
* Configured Linux-based cloud infrastructure.
* Managed SSH authentication using RSA key pairs.
* Installed and configured Docker runtime.
* Pulled and deployed images from Docker Hub.
* Configured security groups and public network access.
* Implemented restart policies for container resilience.
* Performed cloud deployment troubleshooting and operational validation.

END OF RUNBOOK
