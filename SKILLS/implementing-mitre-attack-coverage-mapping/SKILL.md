---
name: implementing-mitre-attack-coverage-mapping
description: "MITRE ATT&CK Coverage Mapping Agent - maps detection rules to ATT&CK techniques and identifies gaps. Use when the user asks to implement mitre attack coverage mapping."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-mitre-attack-coverage-mapping
---

# Implementing MITRE ATT&CK Coverage Mapping

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** MITRE ATT&CK, Coverage Score, Detection Maturity Model, Related Frameworks

## When to use

- The user wants to **implement** mitre attack coverage mapping.
- Capability: MITRE ATT&CK Coverage Mapping Agent - maps detection rules to ATT&CK techniques and identifies gaps.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, mitre, attack, coverage, mapping`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Load detection rules with ATT&CK mappings
2. Load ATT&CK enterprise matrix (techniques per tactic)
3. Map detection rules to ATT&CK technique IDs
4. Calculate coverage percentage per tactic
5. Identify high-priority coverage gaps
6. Assess detection depth per technique (number of rules covering it)
7. Generate ATT&CK Navigator layer JSON

## Key concepts

- Current version: v18.1 (December 2025)
- Domains: Enterprise, Mobile, ICS
- MITRE D3FEND (Defensive techniques)
- MITRE ATT&CK Data Sources
- NIST CSF Detection function
- SANS Detection Maturity Level model

## Tools & resources

- MITRE ATT&CK
- Coverage Score
- Detection Maturity Model
- Related Frameworks

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

- `load_detection_rules` — Load detection rules with ATT&CK mappings.
- `load_attack_matrix` — Load ATT&CK enterprise matrix (techniques per tactic).
- `map_rules_to_techniques` — Map detection rules to ATT&CK technique IDs.
- `calculate_coverage` — Calculate coverage percentage per tactic.
- `identify_priority_gaps` — Identify high-priority coverage gaps.
- `calculate_detection_depth` — Assess detection depth per technique (number of rules covering it).
- `generate_navigator_layer` — Generate ATT&CK Navigator layer JSON.
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-mitre-attack-coverage-mapping`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
