---
name: prioritizing-vulnerabilities-with-cvss-scoring
description: "Agent for prioritizing vulnerabilities with CVSS scoring. Calculates CVSS v3.1 base scores from metric vectors, enriches with EPSS exploit probability and KEV catalog data, and generates a risk-prioritized.... Use when the user asks to prioritizing vulnerabilities with cvss scoring."
version: 1.0.0
tags:
  - prioritizing
source: prioritizing-vulnerabilities-with-cvss-scoring
---

# Prioritizing Vulnerabilities with CVSS Scoring

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** CVSS v3.1 Base Metrics, Severity Ratings, CISA KEV Catalog, Priority Scoring Formula, Official CVSS Documentation, Complementary Scoring Systems

## When to use

- The user wants to **prioritiz** vulnerabilities with cvss scoring.
- Capability: Agent for prioritizing vulnerabilities with CVSS scoring. Calculates CVSS v3.1 base scores from metric vectors, enriches with EPSS exploit probability and KEV catalog data, and generates a risk-prioritized remediation report.
- Goal: complete the task.
- Trigger keywords: `prioritizing, vulnerabilities, cvss, scoring`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Clarify the objective for vulnerabilities with cvss scoring
2. Gather inputs and required access
3. Execute the core workflow using skill scripts and references
4. Validate results and document findings
5. Recommend next actions

## Key concepts

- NIST SP 800-40 Rev 4: Guide to Enterprise Patch Management Planning
- NIST NVD: National Vulnerability Database uses CVSS for all CVEs
- PCI DSS v4.0: Requires CVSS scoring for vulnerability prioritization
- ISO 27001: 2022 A.8.8**: Technical vulnerability management

## Tools & resources

- CVSS v3.1 Base Metrics
- Severity Ratings
- CISA KEV Catalog
- Priority Scoring Formula
- Official CVSS Documentation
- Complementary Scoring Systems
- Industry Standards
- Severity Thresholds

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

*High-level skill guide for `prioritizing-vulnerabilities-with-cvss-scoring`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
