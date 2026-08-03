---
name: triaging-vulnerabilities-with-ssvc-framework
description: "Agent for triaging vulnerabilities with the SSVC framework. Implements CISA's Stakeholder-Specific Vulnerability Categorization decision tree to produce actionable priorities: Track, Track*, Attend, or Act based on.... Use when the user asks to triaging vulnerabilities with ssvc framework."
version: 1.0.0
tags:
  - triaging
source: triaging-vulnerabilities-with-ssvc-framework
---

# Triaging Vulnerabilities with Ssvc Framework

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** SSVC Decision Outcomes, SSVC Decision Points, Enrichment APIs, Decision Tree Key Paths, Primary Standards, Regulatory and Compliance Context

## When to use

- The user wants to **tria** vulnerabilities with ssvc framework.
- Capability: Agent for triaging vulnerabilities with the SSVC framework. Implements CISA's Stakeholder-Specific Vulnerability Categorization decision tree to produce actionable priorities: Track, Track*, Attend, or Act based on exploitation status, technical impact, automatability, and mission prevalence.
- Goal: complete the task.
- Trigger keywords: `triaging, vulnerabilities, ssvc, framework`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. New vulnerability scan results imported from Nessus, Qualys, OpenVAS, or other scanner
2. **Ingest Scan Results**
3. **Enrich with External Intelligence**
4. **Evaluate SSVC Decision Points**
5. **Apply Decision Tree**
6. **Generate Prioritized Report**
7. Daily scheduled job (cron or CI/CD pipeline)
8. **Refresh CISA KEV Catalog**
9. **Check Previously Tracked CVEs Against Updated KEV**
10. **Refresh EPSS Scores**

## Key concepts

- Source: Cybersecurity and Infrastructure Security Agency (CISA)
- Version: SSVC v2.0 (2022 revision by CISA with SEI)
- Purpose: Provides a decision-tree methodology for vulnerability prioritization based on five decision points specific t
- Source: Carnegie Mellon University Software Engineering Institute
- Publication: "Prioritizing Vulnerability Response: A Stakeholder-Specific Vulnerability Categorization" (2019)
- Authors: Jonathan Spring, Eric Hatleback, Allen Householder, Art Manion, Deana Shick
- Source: Forum of Incident Response and Security Teams (FIRST)
- Relevance: SSVC complements CVSS by adding contextual decision points beyond base score severity

## Tools & resources

- SSVC Decision Outcomes
- SSVC Decision Points
- Enrichment APIs
- Decision Tree Key Paths
- Primary Standards
- Regulatory and Compliance Context
- Data Sources

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

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `triaging-vulnerabilities-with-ssvc-framework`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
