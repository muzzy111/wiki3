---
name: building-incident-response-playbook
description: "Agent for building and managing incident response playbooks. Use when the user asks to build incident response playbook."
version: 1.0.0
tags:
  - building
  - incident-response
source: building-incident-response-playbook
---

# Building Incident Response Playbook

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** NIST SP 800-61r3 Phases

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **build** incident response playbook.
- Capability: Agent for building and managing incident response playbooks.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, incident, response, playbook`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Generate a structured IR playbook for the given incident type
2. List open incident cases from TheHive
3. Calculate incident response metrics from TheHive cases

## Tools & resources

- NIST SP 800-61r3 Phases

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

- `generate_playbook` — Generate a structured IR playbook for the given incident type.
- `check_thehive_cases` — List open incident cases from TheHive.
- `calculate_ir_metrics` — Calculate incident response metrics from TheHive cases.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-incident-response-playbook`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
