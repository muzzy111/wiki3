---
name: scanning-containers-with-trivy-in-cicd
description: "Agent for scanning containers with Trivy in CI/CD pipelines. Runs Trivy vulnerability and misconfiguration scans against container images and Dockerfiles, enforces severity-based quality gates, and generates.... Use when the user asks to scan containers with trivy in cicd."
version: 1.0.0
tags:
  - scanning
source: scanning-containers-with-trivy-in-cicd
---

# Scanning Containers with Trivy in Cicd

**Role:** Security scanning  
**Audience:** security engineers and vulnerability management teams  
**Primary tools:** Quality Gate Severities, NIST SP 800-190, CIS Docker Benchmark v1.6.0, SLSA Framework Alignment

## When to use

- The user wants to **scan** containers with trivy in cicd.
- Capability: Agent for scanning containers with Trivy in CI/CD pipelines. Runs Trivy vulnerability and misconfiguration scans against container images and Dockerfiles, enforces severity-based quality gates, and generates CI/CD-compatible reports.
- Goal: discover exposures, misconfigurations, and vulnerable assets.
- Trigger keywords: `scanning, containers, trivy, cicd`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Define asset scope and scan policy
2. Run scans for containers with trivy in cicd
3. Triage and de-duplicate findings
4. Prioritize by risk and asset criticality
5. Track remediation and retest

## Key concepts

- Scan all container images for known vulnerabilities before deployment
- Establish organizational policies for maximum acceptable vulnerability severity
- Monitor images in registries for newly discovered vulnerabilities
- Maintain an up-to-date vulnerability database for scanning tools
- Verify images follow CIS Docker Benchmark configuration guidelines
- Ensure images run as non-root users unless operationally required
- Remove unnecessary packages, shells, and utilities from production images
- Scan images in the CI/CD pipeline before pushing to registries

## Tools & resources

- Quality Gate Severities
- NIST SP 800-190
- CIS Docker Benchmark v1.6.0
- SLSA Framework Alignment

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

*High-level skill guide for `scanning-containers-with-trivy-in-cicd`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
