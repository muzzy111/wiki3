---
name: detecting-broken-object-property-level-authorization
description: "BOPLA vulnerability scanner for OWASP API3:2023 Broken Object Property Level Authorization. Tests APIs for excessive data exposure and mass assignment vulnerabilities by comparing responses against expected field.... Use when the user asks to detect broken object property level authorization."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-broken-object-property-level-authorization
---

# Detecting Broken Object Property Level Authorization

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** OWASP API3, Python requests Library, Mass Assignment Test Payloads, Burp Suite Extensions

## When to use

- The user wants to **detect** broken object property level authorization.
- Capability: BOPLA vulnerability scanner for OWASP API3:2023 Broken Object Property Level Authorization. Tests APIs for excessive data exposure and mass assignment vulnerabilities by comparing responses against expected field sets and injecting extra properties.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, broken, object, property, level, authorization`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Define the detection hypothesis and data sources
2. Identify telemetry and features relevant to broken object property level authorization
3. Build or refine detection logic (rules, queries, models)
4. Tune against baselined benign activity to reduce noise
5. Validate with true-positive cases and document coverage gaps

## Tools & resources

- OWASP API3
- Python requests Library
- Mass Assignment Test Payloads
- Burp Suite Extensions

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

- `classify_field`
- `flatten_keys`
- `test_excessive_exposure`
- `test_mass_assignment`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-broken-object-property-level-authorization`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
