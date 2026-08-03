---
name: performing-threat-modeling-with-owasp-threat-dragon
description: "Agent for threat modeling with OWASP Threat Dragon. Programmatically creates Threat Dragon JSON threat models, applies STRIDE analysis to DFD elements, manages threat inventory, and generates summary reports for.... Use when the user asks to perform threat modeling with owasp threat dragon."
version: 1.0.0
tags:
  - performing
  - threat-intel
source: performing-threat-modeling-with-owasp-threat-dragon
---

# Performing Threat Modeling with Owasp Threat Dragon

**Role:** Hands-on assessment  
**Audience:** pentesters, blue teamers, and DFIR practitioners  
**Primary tools:** DFD Element Types, STRIDE Categories, Docker Deployment, OWASP Threat Modeling Process, NIST SP 800-154, Threat Severity Rating Scale

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **perform** threat modeling with owasp threat dragon.
- Capability: Agent for threat modeling with OWASP Threat Dragon. Programmatically creates Threat Dragon JSON threat models, applies STRIDE analysis to DFD elements, manages threat inventory, and generates summary reports for security design reviews.
- Goal: execute a focused security technique or assessment workflow.
- Trigger keywords: `performing, threat, modeling, owasp, threat, dragon`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Confirm scope, authorization, and safety constraints
2. Prepare tooling and environment for threat modeling with owasp threat dragon
3. Execute the technique methodically and record evidence
4. Validate outcomes and eliminate false paths
5. Report results with clear remediation guidance

## Key concepts

- Identify data assets and their sensitivity levels
- Map data flows through system components
- Identify threat actors and attack vectors targeting data
- Assess risk based on data exposure and impact
- Document countermeasures protecting data at rest, in transit, and in use

## Tools & resources

- DFD Element Types
- STRIDE Categories
- Docker Deployment
- OWASP Threat Modeling Process
- NIST SP 800-154
- Threat Severity Rating Scale

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

*High-level skill guide for `performing-threat-modeling-with-owasp-threat-dragon`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
