---
name: hunting-for-process-injection-techniques
description: "Detect process injection techniques (T1055) via Sysmon Event IDs 8 and 10. Use when the user asks to hunt for process injection techniques."
version: 1.0.0
tags:
  - hunting
  - threat-intel
source: hunting-for-process-injection-techniques
---

# Hunting for Process Injection Techniques

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Dangerous Access Rights Masks, Atomic Red Team Tests

## When to use

- The user wants to **hunt for** process injection techniques.
- Capability: Detect process injection techniques (T1055) via Sysmon Event IDs 8 and 10.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, process, injection, techniques`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Parse Sysmon JSON events, focusing on Event IDs 1, 8, and 10
2. Detect suspicious CreateRemoteThread (Sysmon Event ID 8)
3. Detect suspicious ProcessAccess (Sysmon Event ID 10)
4. Build a source->target injection relationship graph
5. Generate process injection hunt report

## Tools & resources

- Dangerous Access Rights Masks
- Atomic Red Team Tests

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

- `parse_sysmon_events` — Parse Sysmon JSON events, focusing on Event IDs 1, 8, and 10.
- `detect_remote_thread_injection` — Detect suspicious CreateRemoteThread (Sysmon Event ID 8).
- `detect_suspicious_process_access` — Detect suspicious ProcessAccess (Sysmon Event ID 10).
- `build_injection_graph` — Build a source->target injection relationship graph.
- `generate_report` — Generate process injection hunt report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-process-injection-techniques`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
