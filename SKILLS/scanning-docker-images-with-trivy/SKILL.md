---
name: scanning-docker-images-with-trivy
description: "Agent for scanning Docker images with Trivy. Performs comprehensive vulnerability scanning of Docker images including OS packages, language dependencies, misconfigurations, secrets, and license compliance using Trivy CLI. Use when the user asks to scan docker images with trivy."
version: 1.0.0
tags:
  - scanning
  - cloud
source: scanning-docker-images-with-trivy
---

# Scanning Docker Images with Trivy

**Role:** Security scanning  
**Audience:** security engineers and vulnerability management teams  
**Primary tools:** Docker, Trivy Scanner Types, NIST SP 800-190, Executive Order 14028, Trivy Vulnerability Scoring

## When to use

- The user wants to **scan** docker images with trivy.
- Capability: Agent for scanning Docker images with Trivy. Performs comprehensive vulnerability scanning of Docker images including OS packages, language dependencies, misconfigurations, secrets, and license compliance using Trivy CLI.
- Goal: discover exposures, misconfigurations, and vulnerable assets.
- Trigger keywords: `scanning, docker, images, trivy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Define asset scope and scan policy
2. Run scans for docker images with trivy
3. Triage and de-duplicate findings
4. Prioritize by risk and asset criticality
5. Track remediation and retest

## Key concepts

- Image Vulnerability Management: Organizations should maintain a pipeline for scanning and remediating container image vulnerabilities
- Image Provenance: Use content trust and signing to verify image source and integrity
- SBOM Generation: Produce Software Bill of Materials for all container images
- PW.4.1: Verify third-party software components have no known vulnerabilities
- PW.4.4: Verify software components are obtained from trusted sources
- RV.1.1: Gather information from vulnerability notifications
- RV.1.2: Review, analyze, and/or test code to identify vulnerabilities
- Software producers must provide SBOMs for federal software

## Tools & resources

- Docker
- Trivy Scanner Types
- NIST SP 800-190
- Executive Order 14028
- Trivy Vulnerability Scoring

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `scanning-docker-images-with-trivy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
