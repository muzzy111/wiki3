---
aliases: []
tags:
  - shannon
  - code
  - test
  - source
---

**[[Shannon]]** (developed by Keygraph) is an open-source, autonomous AI penetration testing framework. Unlike traditional vulnerability scanners that blindly throw payloads at a website, [[Shannon]] uses an AI agent architecture (powered by LLMs like Claude via the Anthropic SDK) to act like a human hacker.

It performs **white-box testing**, meaning it reads your application's source code to map out the attack surface, plans out clever attack chains, and then uses browser automation and command-line tools to fire **real exploits** against your live test environment. Best of all: it won't [[[[report]]]] a vulnerability unless it successfully builds a working proof-of-concept (PoC) exploit, virtually eliminating false positives.

Here is your beginner-friendly guide to spinning up [[Shannon]] and letting advanced AI orchestration handle your security audits.

## 🛠️ Prerequisites

Before you begin, make sure your machine has the following tools installed:

- **Docker:** Used to isolate and run the target application environments and testing tools safely.
    
- **Node.js (v18+):** To execute the [[Shannon]] package runner.
    
- **An Anthropic API Key:** [[Shannon]] relies on frontier LLM reasoning to map code and construct exploits.
    

## 🚀 [[Quickstart]]: Running Your First Pentest

You don't need to manually configure complex databases or install hundreds of Kali Linux tools; advanced orchestration handles that under the hood. You can launch [[Shannon]] instantly using `npx`.

### Step 1: Initial [[Setup]]

Run the interactive configuration wizard to connect your API credentials.

Bash

```
npx @keygraph/shannon setup
```

_(Alternatively, you can just export your key in your terminal session: `export ANTHROPIC_API_KEY=your_api_key_here`)_

### Step 2: Prepare the Target Code

Because [[Shannon]] is a white-box pentester, it needs access to the source code of the application you are testing. Clone the repository of the app you want to audit onto your local machine.

> **⚠️ Beginner Tip:** Never target an application you do not legally own or have explicit authorization to test. For your very first run, practice on an intentionally vulnerable training app like **OWASP Juice Shop** or a simple test app.

### Step 3: Fire the Test

To initiate the pentest, point [[Shannon]] to the live URL of your running test application and the path to its source code repository:

Bash

```
npx @keygraph/shannon start -u https://your-test-app.local -r /path/to/your-app-repo
```

## 🧠 How [[Shannon]] Works (Behind the Scenes)

Once you hit enter, [[Shannon]]’s multi-agent system takes over, moving systematically through four distinct phases:

1. **Recon (Surface Mapping):** It runs tools like `Nmap`, `Subfinder`, and `WhatWeb` behind the scenes to map out open ports, endpoints, and the tech stack.
    
2. **Analyze (Source Code Deep-Dive):** It reads your repository's raw source code, analyzing routing files, [[authentication]] middleware, and database queries. It looks for weak spots before sending a single malicious web request.
    
3. **Exploit (Firing the Attacks):** Parallel AI [[agents]] design custom exploits based on the code analysis. It uses browser automation (`Playwright`/Headless Chromium) to fill out forms, inject payloads, bypass authorization logic, and attempt to break the application.
    
4. **Ship Findings:** [[Shannon]] compiles a [[[[report]]]]. If an attack fails to breach the defense, it is omitted. You only get alerted to **100% verified, actionable security holes** complete with reproducible proof-of-concept steps.
    

## 🛡️ What [[Shannon]] Can Test

Out of the box, the open-source version focuses heavily on the most severe web vulnerabilities (OWASP Top 10):

- **Injection Attacks:** SQLi, NoSQLi, OS Command Injection, and Server-Side [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] Injection (SSTI).
    
- **Cross-Site Scripting (XSS):** Reflected, stored, and DOM-based XSS using live browser testing.
    
- **Server-Side Request Forgery (SSRF):** Trying to trick the app into accessing private internal cloud infrastructure or metadata endpoints.
    
- **Auth & Authorization Bypass:** IDOR (Insecure Direct Object References), privilege escalation, and weak session handling.
    

## 💡 Pro-Tips for AI-Driven Testing

- **Keep an eye on API [[costs]]:** Because [[Shannon]] uses deep LLM reasoning to read code and actively problem-solve attack chains, running a comprehensive audit on a massive codebase can consume a noticeable amount of API tokens. Start with smaller test applications to understand its pacing.
    
- **Authenticated Scans:** If your application sits behind a login page, the [[setup]] wizard will allow you to pass test credentials (username/password/login URL) so [[Shannon]]'s browser [[agents]] can successfully authenticate and test the internal [[dashboard]].