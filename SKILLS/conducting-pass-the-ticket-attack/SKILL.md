---
name: conducting-pass-the-ticket-attack
description: "Pass-the-Ticket attack detection agent using Windows event log analysis. Use when the user asks to conduct pass the ticket attack."
version: 1.0.0
tags:
  - conducting
  - threat-intel
source: conducting-pass-the-ticket-attack
---

# Conducting Pass The Ticket Attack

**Role:** Structured engagement  
**Audience:** security teams running formal engagements  
**Primary tools:** Encryption Type Constants, External References, Kerberos Ticket Types, Detection, NIST SP 800-171, CIS Controls

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **conduct** pass the ticket attack.
- Capability: Pass-the-Ticket attack detection agent using Windows event log analysis.
- Goal: run a complete assessment, exercise, or investigation end to end.
- Trigger keywords: `conducting, pass, ticket, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Analyze Windows Security logs for Pass-the-Ticket indicators
2. Generate Sigma detection rules for Pass-the-Ticket
3. Generate threat hunting queries for PTT detection
4. Execute Pass-the-Ticket detection analysis

## Key concepts

- Control 6: Access Control Management
- Control 8: Audit Log Management - Monitor Kerberos authentication events

## Tools & resources

- Encryption Type Constants
- External References
- Kerberos Ticket Types
- Detection
- NIST SP 800-171
- CIS Controls

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

- `detect_ptt_events` — Analyze Windows Security logs for Pass-the-Ticket indicators.
- `generate_sigma_rules` — Generate Sigma detection rules for Pass-the-Ticket.
- `generate_hunt_queries` — Generate threat hunting queries for PTT detection.
- `run_detection` — Execute Pass-the-Ticket detection analysis.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `conducting-pass-the-ticket-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
