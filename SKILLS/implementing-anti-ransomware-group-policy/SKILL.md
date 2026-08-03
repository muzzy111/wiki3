---
name: implementing-anti-ransomware-group-policy
description: "Anti-ransomware Group Policy audit and configuration agent. Audits Windows endpoints for GPO-based ransomware defenses including AppLocker rules, Controlled Folder Access, Attack Surface Reduction rules, and network.... Use when the user asks to implement anti ransomware group policy."
version: 1.0.0
tags:
  - implementing
  - malware
  - ransomware
source: implementing-anti-ransomware-group-policy
---

# Implementing Anti Ransomware Group Policy

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** AppLocker PowerShell Cmdlets, GPO Paths Reference, GPResult Verification

## When to use

- The user wants to **implement** anti ransomware group policy.
- Capability: Anti-ransomware Group Policy audit and configuration agent. Audits Windows endpoints for GPO-based ransomware defenses including AppLocker rules, Controlled Folder Access, Attack Surface Reduction rules, and network restriction settings. Generates compliance reports against recommended baselines.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, anti, ransomware, group, policy`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Run a single GPO compliance check
2. Assess ASR rule compliance against recommended baseline
3. Generate a full GPO anti-ransomware compliance report
4. Generate PowerShell remediation commands for failed checks

## Tools & resources

- AppLocker PowerShell Cmdlets
- GPO Paths Reference
- GPResult Verification

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

- `run_check` — Run a single GPO compliance check.
- `assess_asr_compliance` — Assess ASR rule compliance against recommended baseline.
- `generate_gpo_report` — Generate a full GPO anti-ransomware compliance report.
- `generate_remediation_script` — Generate PowerShell remediation commands for failed checks.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-anti-ransomware-group-policy`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
