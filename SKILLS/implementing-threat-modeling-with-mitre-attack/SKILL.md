---
name: implementing-threat-modeling-with-mitre-attack
description: "Threat modeling agent using MITRE ATT&CK framework with attackcti. Use when the user asks to implement threat modeling with mitre attack."
version: 1.0.0
tags:
  - implementing
  - threat-intel
source: implementing-threat-modeling-with-mitre-attack
---

# Implementing Threat Modeling with MITRE ATT&CK

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** MITRE ATT&CK, Threat Modeling Workflow, Priority Scoring, External References

## When to use

- The user wants to **implement** threat modeling with mitre attack.
- Capability: Threat modeling agent using MITRE ATT&CK framework with attackcti.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, threat, modeling, mitre, attack`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Get all ATT&CK techniques used by a specific threat group
2. Build a threat profile for an industry based on relevant threat actors
3. Assess detection coverage gaps against threat profile
4. Generate ATT&CK Navigator layer JSON for visualization
5. Prioritize defensive investments based on threat model
6. Run full threat modeling exercise for an industry

## Tools & resources

- MITRE ATT&CK
- Threat Modeling Workflow
- Priority Scoring
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

- `get_group_techniques` — Get all ATT&CK techniques used by a specific threat group.
- `build_threat_profile` — Build a threat profile for an industry based on relevant threat actors.
- `assess_detection_coverage` — Assess detection coverage gaps against threat profile.
- `generate_navigator_layer` — Generate ATT&CK Navigator layer JSON for visualization.
- `prioritize_defenses` — Prioritize defensive investments based on threat model.
- `run_threat_model` — Run full threat modeling exercise for an industry.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-threat-modeling-with-mitre-attack`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
