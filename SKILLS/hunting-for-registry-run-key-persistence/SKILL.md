---
name: hunting-for-registry-run-key-persistence
description: "Registry Run Key Persistence Hunter - detects T1547.001 persistence via Sysmon Event 13 analysis and registry run key auditing. Use when the user asks to hunt for registry run key persistence."
version: 1.0.0
tags:
  - hunting
  - windows
source: hunting-for-registry-run-key-persistence
---

# Hunting for Registry Run Key Persistence

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Sysmon Configuration, Sigma Rule

## When to use

- The user wants to **hunt for** registry run key persistence.
- Capability: Registry Run Key Persistence Hunter - detects T1547.001 persistence via Sysmon Event 13 analysis and registry run key auditing
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, registry, persistence`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Check if registry path matches Run/RunOnce keys
2. Analyze Sysmon Event ID 13 (RegistryEvent Value Set) for persistence
3. Analyze a static registry snapshot for suspicious Run key values
4. Generate a Sigma detection rule from a finding

## Tools & resources

- Sysmon Configuration
- Sigma Rule

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

- `load_data`
- `is_run_key` — Check if registry path matches Run/RunOnce keys.
- `analyze_sysmon_events` — Analyze Sysmon Event ID 13 (RegistryEvent Value Set) for persistence.
- `analyze_registry_snapshot` — Analyze a static registry snapshot for suspicious Run key values.
- `generate_sigma_rule` — Generate a Sigma detection rule from a finding.
- `analyze`
- `generate_report`

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-registry-run-key-persistence`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
