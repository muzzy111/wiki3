---
name: building-attack-pattern-library-from-cti-reports
description: "Attack Pattern Library Builder Agent - Extracts attack patterns from CTI reports and maps to MITRE ATT&CK. Use when the user asks to build attack pattern library from cti reports."
version: 1.0.0
tags:
  - building
  - threat-intel
source: building-attack-pattern-library-from-cti-reports
---

# Building Attack Pattern Library from CTI Reports

**Role:** Capability building  
**Audience:** SOC leads, IR managers, and security engineers  
**Primary tools:** IOC Extraction Regex, Library Output Structure

## When to use

- The user wants to **build** attack pattern library from cti reports.
- Capability: Attack Pattern Library Builder Agent - Extracts attack patterns from CTI reports and maps to MITRE ATT&CK.
- Goal: design and stand up an operational security capability or process.
- Trigger keywords: `building, attack, pattern, library, reports`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Extract MITRE ATT&CK techniques from report text
2. Extract IOCs from report text
3. Process a single CTI report to extract attack patterns
4. Build a consolidated attack pattern library from multiple reports
5. Generate attack pattern library report

## Tools & resources

- IOC Extraction Regex
- Library Output Structure

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

- `extract_techniques_from_text` — Extract MITRE ATT&CK techniques from report text.
- `extract_iocs_from_text` — Extract IOCs from report text.
- `process_report` — Process a single CTI report to extract attack patterns.
- `build_pattern_library` — Build a consolidated attack pattern library from multiple reports.
- `generate_report` — Generate attack pattern library report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `building-attack-pattern-library-from-cti-reports`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
