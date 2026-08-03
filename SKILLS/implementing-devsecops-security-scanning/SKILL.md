---
name: implementing-devsecops-security-scanning
description: "DevSecOps security scanning pipeline agent. Orchestrates Semgrep (SAST), Trivy (container/SCA), and Gitleaks (secrets) scans via subprocess, aggregates findings, and enforces severity gates. Use when the user asks to implement devsecops security scanning."
version: 1.0.0
tags:
  - implementing
source: implementing-devsecops-security-scanning
---

# Implementing Devsecops Security Scanning

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** CI/CD Pipeline Gate Logic

## When to use

- The user wants to **implement** devsecops security scanning.
- Capability: DevSecOps security scanning pipeline agent. Orchestrates Semgrep (SAST), Trivy (container/SCA), and Gitleaks (secrets) scans via subprocess, aggregates findings, and enforces severity gates.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, devsecops, security, scanning`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run Semgrep SAST scan and return findings
2. Run Trivy vulnerability scan on image or filesystem
3. Run Gitleaks secret detection scan
4. Enforce security gate based on severity threshold
5. Aggregate findings from all scanners

## Tools & resources

- CI/CD Pipeline Gate Logic

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

- `run_semgrep` — Run Semgrep SAST scan and return findings.
- `run_trivy` — Run Trivy vulnerability scan on image or filesystem.
- `run_gitleaks` — Run Gitleaks secret detection scan.
- `enforce_gate` — Enforce security gate based on severity threshold.
- `aggregate_report` — Aggregate findings from all scanners.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-devsecops-security-scanning`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
