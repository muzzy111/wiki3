---
name: building-c2-infrastructure-with-sliver-framework
description: "Sliver C2 Framework Deployment Agent - Automates Sliver C2 setup for authorized red team engagements. Use when the user asks to build c2 infrastructure with sliver framework."
version: 1.0.0
tags:
  - building
source: building-c2-infrastructure-with-sliver-framework
---

# Building C2 Infrastructure with Sliver Framework

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Sliver, Listener Types, Post-Exploitation, Industry Standards, Official Documentation, Key Research

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **build** c2 infrastructure with sliver framework.
- Capability: Sliver C2 Framework Deployment Agent - Automates Sliver C2 setup for authorized red team engagements.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, infrastructure, sliver, framework`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Execute a Sliver client command
2. Generate a Sliver implant (beacon or session)
3. Generate a Sliver beacon implant
4. Configure C2 listeners
5. List active sessions
6. List active beacons
7. Generate C2 infrastructure report

## Key concepts

- BishopFox Red Team Tools and C2 Frameworks Report (2025)
- SpecterOps Adversary Simulation methodology
- SANS SEC565: Red Team Operations and Adversary Emulation

## Tools & resources

- Sliver
- Listener Types
- Post-Exploitation
- Industry Standards
- Official Documentation
- Key Research

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

## Automation entry points

- `run_sliver_cmd` — Execute a Sliver client command.
- `generate_implant` — Generate a Sliver implant (beacon or session).
- `generate_beacon` — Generate a Sliver beacon implant.
- `setup_listeners` — Configure C2 listeners.
- `list_sessions` — List active sessions.
- `list_beacons` — List active beacons.
- `generate_report` — Generate C2 infrastructure report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-c2-infrastructure-with-sliver-framework`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
