---
name: analyzing-threat-actor-ttps-with-mitre-navigator
description: "MITRE ATT&CK Navigator layer generation and threat actor TTP mapping. Use when the user asks to analyze threat actor ttps with mitre navigator."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-threat-actor-ttps-with-mitre-navigator
---

# Analyzing Threat Actor TTPS with MITRE Navigator

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** MITRE ATT&CK, attackcti Python Library, External References

## When to use

- The user wants to **analyze** threat actor ttps with mitre navigator.
- Capability: MITRE ATT&CK Navigator layer generation and threat actor TTP mapping agent.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, threat, actor, ttps, mitre, navigator`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Initialize ATT&CK STIX/TAXII client
2. List all threat groups in ATT&CK
3. Get all techniques used by a specific threat group
4. Generate ATT&CK Navigator layer JSON from group technique data
5. Compare techniques across multiple threat groups
6. Execute threat actor TTP mapping audit

## Tools & resources

- MITRE ATT&CK
- attackcti Python Library
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

- `get_attack_client` — Initialize ATT&CK STIX/TAXII client.
- `list_threat_groups` — List all threat groups in ATT&CK.
- `get_group_techniques` — Get all techniques used by a specific threat group.
- `generate_navigator_layer` — Generate ATT&CK Navigator layer JSON from group technique data.
- `compare_groups` — Compare techniques across multiple threat groups.
- `run_audit` — Execute threat actor TTP mapping audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-threat-actor-ttps-with-mitre-navigator`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
