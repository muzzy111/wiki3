---
name: analyzing-apt-group-with-mitre-navigator
description: "APT group analysis agent using MITRE ATT&CK Navigator layers. Queries ATT&CK data, maps APT techniques to Navigator layers, performs detection gap analysis, and generates threat-informed reports. Use when the user asks to analyze apt group with mitre navigator."
version: 1.0.0
tags:
  - analyzing
  - threat-intel
source: analyzing-apt-group-with-mitre-navigator
---

# Analyzing APT Group with MITRE Navigator

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** MITRE ATT&CK, mitreattack-python Library, Key APT Groups Reference

## When to use

- The user wants to **analyze** apt group with mitre navigator.
- Capability: APT group analysis agent using MITRE ATT&CK Navigator layers. Queries ATT&CK data, maps APT techniques to Navigator layers, performs detection gap analysis, and generates threat-informed reports.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, group, mitre, navigator`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load ATT&CK STIX bundle from file or download
2. Extract intrusion-set (APT group) objects from STIX bundle
3. Extract attack-pattern (technique) objects from STIX bundle
4. Map techniques used by a specific group via relationship objects
5. Build ATT&CK Navigator JSON layer for a group's techniques
6. Compare group TTPs against existing detection rules to find gaps
7. Generate tactic-level heatmap showing technique distribution
8. Compare two groups' technique sets for overlap analysis

## Tools & resources

- MITRE ATT&CK
- mitreattack-python Library
- Key APT Groups Reference

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

- `load_attack_data` — Load ATT&CK STIX bundle from file or download.
- `extract_groups` — Extract intrusion-set (APT group) objects from STIX bundle.
- `extract_techniques` — Extract attack-pattern (technique) objects from STIX bundle.
- `map_group_techniques` — Map techniques used by a specific group via relationship objects.
- `build_navigator_layer` — Build ATT&CK Navigator JSON layer for a group's techniques.
- `detection_gap_analysis` — Compare group TTPs against existing detection rules to find gaps.
- `tactic_heatmap` — Generate tactic-level heatmap showing technique distribution.
- `compare_groups` — Compare two groups' technique sets for overlap analysis.
- `save_layer` — Save Navigator layer to JSON file.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-apt-group-with-mitre-navigator`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
