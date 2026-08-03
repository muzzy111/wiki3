---
name: zero-build-frontend
description: Zero-build frontend development with CDN-loaded React, Tailwind CSS, and vanilla JavaScript. Use when building static web apps without bundlers, creating Leaflet maps, integrating Google Sheets as database, or developing browser extensions. Covers patterns from rosen-frontend, NJCIC map, and PocketLink projects.
tags:
  - class
  - border
  - text
  - htmx
---

# Workflows

## Workflow 1: Linux CIS Hardening Deployment
```
[Select CIS Benchmark for distro/version] → [Choose L1 or L2 profile]
  → [Run OpenSCAP baseline assessment] → [Review initial compliance score]
  → [Apply remediations (Ansible/manual)] → [Re-assess with OpenSCAP]
  → [Document exceptions] → [Deploy to production fleet]
  → [Schedule quarterly reassessment]
```

## Workflow 2: Automated Remediation with Ansible
```
[Clone Ansible Lockdown role for target distro]
  → [Configure variables (skip list, exceptions)]
  → [Test against staging servers]
  → [Review changes and application compatibility]
  → [Deploy to production in rolling batches]
  → [Run OpenSCAP validation after each batch]
```
