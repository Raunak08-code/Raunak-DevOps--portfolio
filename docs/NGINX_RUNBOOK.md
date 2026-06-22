# NGINX REVERSE PROXY RUNBOOK

## Project: Raunak DevOps Portfolio

## Environment: AWS EC2 + Docker + Nginx

---

# Objective

Configure Nginx as a Reverse Proxy in front of a Dockerized Portfolio Application.

Final Architecture:

Internet
↓
Nginx (Port 80)
↓
Portfolio Container (Port 3000)
↓
React/Vite Application

---

# Concepts Learned

## What is Nginx?

Nginx is:

* Web Server
* Reverse Proxy
* Load Balancer
* SSL/TLS Terminator

For this project, Nginx is used as a Reverse Proxy.

---

## What is a Reverse Proxy?

A reverse proxy sits between users and backend applications.

Before:

User
↓
Portfolio Container

After:

User
↓
Nginx
↓
Portfolio Container

Users communicate with Nginx.
Nginx forwards requests to the application.

---

# Why We Needed Nginx

Benefits:

* Professional architecture
* SSL/HTTPS support
* Multiple applications on one server
* Traffic routing
* Security layer
* Load balancing capabilities

---

# Initial State

Container was running as:

docker run -d 
--name portfolio 
-p 80:3000 
raunak08/raunak-devops-portfolio:latest

Problem:

Container occupied Port 80.

Nginx also requires Port 80.

Only one service can bind to a host port.

---

# Step 1 - Move Container to Port 3000

Stop container:

docker stop portfolio

Remove container:

docker rm portfolio

Recreate:

docker run -d 
--restart unless-stopped 
--name portfolio 
-p 3000:3000 
raunak08/raunak-devops-portfolio:latest

Verify:

docker ps

Expected:

0.0.0.0:3000->3000/tcp

---

# Step 2 - Install Nginx

Update packages:

sudo apt update

Install Nginx:

sudo apt install nginx -y

Verify installation:

nginx -v

Check service:

sudo systemctl status nginx

Expected:

active (running)

---

# Step 3 - Verify Default Nginx Page

Open browser:

http://<EC2_PUBLIC_IP>

Expected:

"Welcome to nginx"

This confirms:

* Nginx installed
* Port 80 reachable
* Security Group configured correctly

---

# Step 4 - Backup Configuration

Always backup before modification.

Create backup:

sudo cp /etc/nginx/sites-available/default 
/etc/nginx/sites-available/default.bak

---

# Step 5 - Edit Nginx Configuration

Open file:

sudo nano /etc/nginx/sites-available/default

Locate:

location / {
try_files $uri $uri/ =404;
}

Replace with:

location / {
proxy_pass http://localhost:3000;

```
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```

}

Save:

CTRL + O
ENTER

Exit:

CTRL + X

---

# Understanding the Configuration

proxy_pass

Forwards traffic to the application.

proxy_pass http://localhost:3000;

Meaning:

Nginx
↓
Portfolio Container

---

Host Header

proxy_set_header Host $host;

Preserves domain information.

---

X-Real-IP

proxy_set_header X-Real-IP $remote_addr;

Preserves original client IP.

---

X-Forwarded-For

proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

Maintains request forwarding chain.

Used in:

* Logging
* Monitoring
* Analytics

---

# Step 6 - Validate Configuration

NEVER reload before testing.

Check syntax:

sudo nginx -t

Expected:

syntax is ok
test is successful

If errors appear:

Do NOT reload.

Fix configuration first.

---

# Step 7 - Apply Configuration

Reload Nginx:

sudo systemctl reload nginx

Why reload?

Reload:

* Keeps service running
* Loads new config
* No downtime

Restart:

* Stops service
* Starts service
* Potential downtime

Preferred:

sudo systemctl reload nginx

---

# Step 8 - Verify Reverse Proxy

Test locally:

curl http://localhost

Expected:

Portfolio HTML

Example:

<title>My Google AI Studio App</title>

NOT:

Welcome to nginx

---

Browser Verification

Open:

http://<EC2_PUBLIC_IP>

Expected:

Portfolio Website

Architecture is now:

Internet
↓
Nginx
↓
Portfolio Container
↓
Port 3000

---

# Troubleshooting

## Nginx Welcome Page Still Appears

Cause:

Default server block still active.

Check:

sudo nginx -T

Verify correct location block is configured.

---

## Syntax Error

Check:

sudo nginx -t

Fix configuration before reload.

---

## Portfolio Not Loading

Check container:

docker ps

Verify:

0.0.0.0:3000->3000/tcp

Test:

curl http://localhost:3000

---

## Nginx Not Running

Start:

sudo systemctl start nginx

Enable on boot:

sudo systemctl enable nginx

Check:

systemctl is-enabled nginx

Expected:

enabled

---

# What Happens After EC2 Restart?

Boot Sequence:

EC2 Starts
↓
Ubuntu Boots
↓
systemd Starts
↓
Nginx Starts Automatically
↓
Docker Starts Automatically
↓
Portfolio Container Starts Automatically

No manual intervention required.

---

# Interview Questions

Q: What is Nginx?

A:
Nginx is a web server, reverse proxy, load balancer, and SSL/TLS termination server. I used it as a reverse proxy to route traffic from port 80 to a Dockerized portfolio application running on port 3000.

---

Q: What is a Reverse Proxy?

A:
A reverse proxy sits between clients and backend services. Clients communicate with the reverse proxy, which forwards requests to the appropriate backend application.

---

Q: Why move container from 80:3000 to 3000:3000?

A:
Because Nginx needed port 80. Only one process can bind to a host port at a time, so the application was moved to port 3000 and Nginx was configured to proxy traffic to it.

---

Q: Why run nginx -t before reload?

A:
To validate configuration syntax and avoid downtime caused by invalid configurations.

---

Status:

✅ Nginx Reverse Proxy Completed
