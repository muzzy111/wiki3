---
name: hunting-advanced-persistent-threats
description: "APT threat hunting agent using MITRE ATT&CK, attackcti, and osquery. Use when the user asks to hunt for advanced persistent threats."
version: 1.0.0
tags:
  - hunting
  - threat-intel
source: hunting-advanced-persistent-threats
---

# Hunting Advanced Persistent Threats

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** External References

## When to use

- The user wants to **hunt for** advanced persistent threats.
- Capability: APT threat hunting agent using MITRE ATT&CK, attackcti, and osquery.
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, advanced, persistent, threats`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Retrieve TTPs for a specific APT group from MITRE ATT&CK
2. Generate osquery hunt queries for detected ATT&CK techniques
3. Generate a Sigma detection rule for a given technique
4. Build a complete threat hunt report for an APT group

## Tools & resources

- External References

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

- `get_apt_group_ttps` — Retrieve TTPs for a specific APT group from MITRE ATT&CK.
- `generate_osquery_hunts` — Generate osquery hunt queries for detected ATT&CK techniques.
- `generate_sigma_rule` — Generate a Sigma detection rule for a given technique.
- `build_hunt_report` — Build a complete threat hunt report for an APT group.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-advanced-persistent-threats`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
