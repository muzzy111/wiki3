---
name: hunting-for-lolbins-execution-in-endpoint-logs
description: "Agent for hunting LOLBin execution patterns in endpoint logs (Sysmon, EDR). Use when the user asks to hunt for lolbins execution in endpoint logs."
version: 1.0.0
tags:
  - hunting
source: hunting-for-lolbins-execution-in-endpoint-logs
---

# Hunting for Lolbins Execution in Endpoint Logs

**Role:** Threat hunting  
**Audience:** threat hunters and SOC analysts  
**Primary tools:** Suspicious Parent

## When to use

- The user wants to **hunt for** lolbins execution in endpoint logs.
- Capability: Agent for hunting LOLBin execution patterns in endpoint logs (Sysmon, EDR).
- Goal: proactively search for adversary activity using hypotheses and telemetry.
- Trigger keywords: `hunting, lolbins, execution, endpoint, logs`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).
4. Completed or draft artifacts from `assets/` templates when applicable.

## High-level procedure

1. Block identified malicious URLs and IPs at proxy/firewall
2. Isolate endpoint if active compromise confirmed
3. Collect process memory dump for malware analysis
4. Deploy targeted detection rules for observed patterns
5. Update application control policies to restrict LOLBin abuse

## Tools & resources

- Suspicious Parent

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

- `scan_csv_logs` — Scan exported CSV endpoint logs for LOLBin execution.
- `scan_evtx_sysmon` — Parse Sysmon EVTX for Event ID 1 matching LOLBin patterns.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `hunting-for-lolbins-execution-in-endpoint-logs`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
