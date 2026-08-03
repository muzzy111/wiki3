---
name: triaging-security-incident
description: "Agent for triaging security incidents using NIST SP 800-61 and SANS PICERL frameworks. Use when the user asks to triaging security incident."
version: 1.0.0
tags:
  - triaging
  - incident-response
source: triaging-security-incident
---

# Triaging Security Incident

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Severity Matrix, SANS PICERL Framework

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **tria** security incident.
- Capability: Agent for triaging security incidents using NIST SP 800-61 and SANS PICERL frameworks.
- Goal: complete the task.
- Trigger keywords: `triaging, security, incident`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Classify incident type based on alert indicators
2. Calculate incident severity based on threat and asset context
3. Check an indicator against VirusTotal
4. Map incident to MITRE ATT&CK techniques
5. Generate a structured incident triage report

## Tools & resources

- Severity Matrix
- SANS PICERL Framework

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

- `classify_incident` — Classify incident type based on alert indicators.
- `assess_severity` — Calculate incident severity based on threat and asset context.
- `check_virustotal` — Check an indicator against VirusTotal.
- `build_mitre_mapping` — Map incident to MITRE ATT&CK techniques.
- `generate_triage_record` — Generate a structured incident triage report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `triaging-security-incident`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
