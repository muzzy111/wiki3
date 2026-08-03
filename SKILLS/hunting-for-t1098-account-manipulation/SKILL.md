---
name: hunting-for-t1098-account-manipulation
description: "Agent for hunting MITRE ATT&CK T1098 account manipulation. Detects shadow admin creation, SID history injection, privileged group membership changes, and credential modifications by parsing Windows Security Event.... Use when the user asks to hunt for t1098 account manipulation."
version: 1.0.0
tags:
  - hunting
source: hunting-for-t1098-account-manipulation
---

# Hunting for T1098 Account Manipulation

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Privileged Groups to Monitor, Sensitive AD Attributes, python-evtx Parsing, MITRE T1098 Sub-Techniques

## Authorization & safety

Use this skill **only** with explicit written authorization on systems you own or are contracted to assess (labs, CTFs, approved engagements). Unauthorized access or exploitation is illegal. Prefer non-destructive validation, minimize blast radius, and stop if scope is unclear.

## When to use

- The user wants to **hunt for** t1098 account manipulation.
- Capability: Agent for hunting MITRE ATT&CK T1098 account manipulation. Detects shadow admin creation, SID history injection, privileged group membership changes, and credential modifications by parsing Windows Security Event Logs for key event IDs.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, t1098, account, manipulation`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Form a threat hypothesis grounded in TTPs or intel
2. Select data sources and time range for for t1098 account manipulation
3. Execute hunt queries and pivot on anomalies
4. Triage hits into benign, suspicious, or confirmed malicious
5. Capture IOCs, lessons learned, and detection opportunities

## Tools & resources

- Privileged Groups to Monitor
- Sensitive AD Attributes
- python-evtx Parsing
- MITRE T1098 Sub-Techniques

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

*High-level skill guide for `hunting-for-t1098-account-manipulation`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
