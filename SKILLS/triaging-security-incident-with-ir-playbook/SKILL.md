---
name: triaging-security-incident-with-ir-playbook
description: "Agent for triaging security incidents with IR playbooks. Classifies alerts by incident type, assigns severity using a structured matrix, selects the appropriate IR playbook, and generates triage decisions with.... Use when the user asks to triaging security incident with ir playbook."
version: 1.0.0
tags:
  - triaging
  - incident-response
source: triaging-security-incident-with-ir-playbook
---

# Triaging Security Incident with IR Playbook

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** Incident Classification Types, Severity Matrix, Escalation Paths, SANS PICERL, FIRST CSIRT Services Framework, US

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **tria** security incident with ir playbook.
- Capability: Agent for triaging security incidents with IR playbooks. Classifies alerts by incident type, assigns severity using a structured matrix, selects the appropriate IR playbook, and generates triage decisions with escalation recommendations.
- Goal: complete the task.
- Trigger keywords: `triaging, security, incident, playbook`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Submit IPs to VirusTotal, AbuseIPDB, Shodan
2. Submit file hashes to VirusTotal, MalwareBazaar, Hybrid Analysis
3. Submit domains to URLScan.io, VirusTotal, PassiveTotal
4. Check against internal IOC database and watchlists
5. Look up asset in CMDB for criticality and owner
6. Check user in HR system for role and access level
7. Verify network zone and data classification
8. Cross-reference with recent threat intelligence reports
9. Search SIEM for related alerts in past 72 hours
10. Check if same IOCs appeared in other incidents

## Key concepts

- Detect (DE): Alert analysis and triage
- DE.AE-02: Potentially adverse events are analyzed to better understand associated activities
- DE.AE-03: Information is correlated from multiple sources
- DE.AE-04: The estimated impact and scope of adverse events is understood
- Respond (RS): Incident classification and escalation
- RS.AN-03: Analysis performed to establish awareness of incident scope
- RS.CO-02: Incidents reported consistent with established criteria
- Phase 2 focuses on detecting and validating security events

## Tools & resources

- Incident Classification Types
- Severity Matrix
- Escalation Paths
- SANS PICERL
- FIRST CSIRT Services Framework
- US

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

*High-level skill guide for `triaging-security-incident-with-ir-playbook`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
