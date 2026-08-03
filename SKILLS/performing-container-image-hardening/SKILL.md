---
name: performing-container-image-hardening
description: "Container image hardening audit agent. Audits Docker container images for security hardening best practices using Trivy for vulnerability scanning, Dockle for CIS Docker Benchmark compliance, and Dockerfile analysis.... Use when the user asks to perform container image hardening."
version: 1.0.0
tags:
  - performing
source: performing-container-image-hardening
---

# Performing Container Image Hardening

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Trivy Image Scanning, Docker Image Inspection, Hadolint Dockerfile Linting, Hardening Checks, CIS Docker Benchmark v1.6.0, NIST SP 800

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** container image hardening.
- Capability: Container image hardening audit agent. Audits Docker container images for security hardening best practices using Trivy for vulnerability scanning, Dockle for CIS Docker Benchmark compliance, and Dockerfile analysis for security anti-patterns.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, container, image, hardening`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Locate a binary on the system PATH
2. Scan a container image with Trivy for vulnerabilities
3. Scan a container image with Dockle for CIS benchmark compliance
4. Analyze a Dockerfile for security anti-patterns
5. Extract vulnerability findings from Trivy JSON output
6. Extract CIS benchmark findings from Dockle JSON output
7. Print combined audit summary

## Key concepts

- Use minimal base images to reduce attack surface
- Remove unnecessary tools, shells, and package managers
- Scan images for vulnerabilities before deployment
- Sign images for integrity verification
- Use multi-stage builds
- Use read-only root filesystem
- Pin base images to digests
- Drop all Linux capabilities

## Tools & resources

- Trivy Image Scanning
- Docker Image Inspection
- Hadolint Dockerfile Linting
- Hardening Checks
- CIS Docker Benchmark v1.6.0
- NIST SP 800

## How the agent should work

1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.
2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.
   - Workflows and playbooks: `references/workflows.md` (if present)
   - Standards, data models, event IDs: `references/standards.md` (if present)
   - CLI/API flags and query snippets: `references/api-reference.md`
3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.
4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.
5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.

## Package layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | This high-level playbook (start here) |
| `references/` | Deep procedure, standards, and CLI/API detail |
| `scripts/` | Automation helpers for collection/analysis |
| `assets/` | Templates, checklists, and report scaffolds |

## Automation entry points

- `find_binary` — Locate a binary on the system PATH.
- `run_trivy_image_scan` — Scan a container image with Trivy for vulnerabilities.
- `run_dockle_scan` — Scan a container image with Dockle for CIS benchmark compliance.
- `analyze_dockerfile` — Analyze a Dockerfile for security anti-patterns.
- `extract_trivy_findings` — Extract vulnerability findings from Trivy JSON output.
- `extract_dockle_findings` — Extract CIS benchmark findings from Dockle JSON output.
- `format_summary` — Print combined audit summary.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-container-image-hardening`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
