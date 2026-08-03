---
name: performing-container-security-scanning-with-trivy
description: "Trivy Container Security Agent - scans images for vulnerabilities, misconfigs, and secrets. Use when the user asks to perform container security scanning with trivy."
version: 1.0.0
tags:
  - performing
source: performing-container-security-scanning-with-trivy
---

# Performing Container Security Scanning with Trivy

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** Severity Levels, Scanner Types, Exit Codes, JSON Output Structure

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** container security scanning with trivy.
- Capability: Trivy Container Security Agent - scans images for vulnerabilities, misconfigs, and secrets.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, container, security, scanning, trivy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run Trivy image scan and return JSON results
2. Run Trivy misconfiguration scan on Dockerfile/K8s manifests
3. Generate SBOM from container image
4. Analyze vulnerability scan results and produce summary
5. Analyze secret detection results
6. Analyze misconfiguration scan results

## Tools & resources

- Severity Levels
- Scanner Types
- Exit Codes
- JSON Output Structure

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

## Automation entry points

- `run_trivy_scan` — Run Trivy image scan and return JSON results.
- `run_trivy_misconfig` — Run Trivy misconfiguration scan on Dockerfile/K8s manifests.
- `generate_sbom` — Generate SBOM from container image.
- `analyze_vulnerabilities` — Analyze vulnerability scan results and produce summary.
- `analyze_secrets` — Analyze secret detection results.
- `analyze_misconfigs` — Analyze misconfiguration scan results.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `performing-container-security-scanning-with-trivy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
