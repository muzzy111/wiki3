---
name: mapping-mitre-attack-techniques
description: "MITRE ATT&CK Technique Mapping Agent Maps detection rules and security alerts to ATT&CK techniques using the mitreattack-python library. Generates coverage heatmaps and identifies gaps. Use when the user asks to mapping mitre attack techniques."
version: 1.0.0
tags:
  - mapping
  - threat-intel
source: mapping-mitre-attack-techniques
---

# Mapping MITRE ATT&CK Techniques

**Role:** Security workflow  
**Audience:** security practitioners  
**Primary tools:** MITRE ATT&CK, mitreattack-python Library, Key Libraries, Data Sources

## When to use

- The user wants to **mapp** mitre attack techniques.
- Capability: MITRE ATT&CK Technique Mapping Agent Maps detection rules and security alerts to ATT&CK techniques using the mitreattack-python library. Generates coverage heatmaps and identifies gaps.
- Goal: complete the task.
- Trigger keywords: `mapping, mitre, attack, techniques`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load MITRE ATT&CK STIX data bundle
2. Retrieve all Enterprise ATT&CK techniques with metadata. Returns list[AttackPattern] (STIX objects supporting dict-like access)
3. Get techniques used by a specific threat group. Groups are IntrusionSet STIX objects; techniques retrieved via relationship query
4. Load detection rules with ATT&CK technique tags
5. Calculate ATT&CK coverage statistics by tactic
6. Generate ATT&CK Navigator JSON layer for visualization
7. Identify high-priority coverage gaps based on threat group activity
8. Generate ATT&CK mapping report

## Tools & resources

- MITRE ATT&CK
- mitreattack-python Library
- Key Libraries
- Data Sources

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

- `load_attack_data` — Load MITRE ATT&CK STIX data bundle.
- `get_all_techniques` — Retrieve all Enterprise ATT&CK techniques with metadata. Returns list[AttackPattern] (STIX objects supporting dict-like access).
- `get_techniques_by_group` — Get techniques used by a specific threat group. Groups are IntrusionSet STIX objects; techniques retrieved via relationship query.
- `load_detection_rules` — Load detection rules with ATT&CK technique tags.
- `calculate_coverage` — Calculate ATT&CK coverage statistics by tactic.
- `generate_navigator_layer` — Generate ATT&CK Navigator JSON layer for visualization.
- `identify_priority_gaps` — Identify high-priority coverage gaps based on threat group activity.
- `generate_report` — Generate ATT&CK mapping report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `mapping-mitre-attack-techniques`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
