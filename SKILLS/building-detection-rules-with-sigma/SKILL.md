---
name: building-detection-rules-with-sigma
description: "Agent for building and converting Sigma detection rules. Use when the user asks to build detection rules with sigma."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-detection-rules-with-sigma
---

# Building Detection Rules with Sigma

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** Sigma

## When to use

- The user wants to **build** detection rules with sigma.
- Capability: Agent for building and converting Sigma detection rules.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, detection, rules, sigma`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load a Sigma rule from a YAML file
2. Load all Sigma rules from a directory
3. Convert a Sigma rule to Splunk SPL query
4. Convert a Sigma rule to Splunk saved search format
5. Validate a Sigma rule for syntax and best practices
6. Extract MITRE ATT&CK technique IDs from Sigma rules
7. Generate a MITRE ATT&CK Navigator layer JSON from extracted techniques
8. Batch convert all Sigma rules in a directory to target backend

## Tools & resources

- Sigma

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

- `load_sigma_rule` — Load a Sigma rule from a YAML file.
- `load_sigma_directory` — Load all Sigma rules from a directory.
- `convert_to_splunk` — Convert a Sigma rule to Splunk SPL query.
- `convert_to_splunk_savedsearch` — Convert a Sigma rule to Splunk saved search format.
- `validate_sigma_rule` — Validate a Sigma rule for syntax and best practices.
- `extract_attack_techniques` — Extract MITRE ATT&CK technique IDs from Sigma rules.
- `generate_attack_navigator_layer` — Generate a MITRE ATT&CK Navigator layer JSON from extracted techniques.
- `batch_convert` — Batch convert all Sigma rules in a directory to target backend.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-detection-rules-with-sigma`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
