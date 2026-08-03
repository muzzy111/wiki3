---
name: building-ransomware-playbook-with-cisa-framework
description: "CISA ransomware playbook builder and compliance checker agent. Generates a structured ransomware incident response playbook aligned with the CISA StopRansomware Guide. Assesses organizational readiness against CISA.... Use when the user asks to build ransomware playbook with cisa framework."
version: 1.0.0
tags:
  - building
  - malware
  - incident-response
  - ransomware
source: building-ransomware-playbook-with-cisa-framework
---

# Building Ransomware Playbook with Cisa Framework

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** CISA StopRansomware Guide, CISA Reporting, ID Ransomware Service, CISA Preparation Checklist Controls, Regulatory Notification Timelines

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **build** ransomware playbook with cisa framework.
- Capability: CISA ransomware playbook builder and compliance checker agent. Generates a structured ransomware incident response playbook aligned with the CISA StopRansomware Guide. Assesses organizational readiness against CISA checklist items and produces gap analysis reports.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, ransomware, playbook, cisa, framework`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Assess ransomware readiness against CISA checklist
2. Generate a full ransomware response playbook
3. Render playbook as Markdown document

## Tools & resources

- CISA StopRansomware Guide
- CISA Reporting
- ID Ransomware Service
- CISA Preparation Checklist Controls
- Regulatory Notification Timelines

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

- `assess_readiness` — Assess ransomware readiness against CISA checklist.
- `generate_playbook` — Generate a full ransomware response playbook.
- `generate_markdown_playbook` — Render playbook as Markdown document.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-ransomware-playbook-with-cisa-framework`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
