---
name: detecting-attacks-on-scada-systems
description: "SCADA system attack detection. Use when the user asks to detect attacks on scada systems."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-attacks-on-scada-systems
---

# Detecting Attacks on Scada Systems

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** Modbus Attack Indicators, External References

## When to use

- The user wants to **detect** attacks on scada systems.
- Capability: SCADA system attack detection agent.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, attacks, scada, systems`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Scan for exposed SCADA protocol ports
2. Detect Modbus protocol anomalies indicating attack
3. Test Siemens S7comm accessibility (basic connection test)
4. Query SIEM for SCADA-related security events
5. Execute SCADA attack detection audit

## Tools & resources

- Modbus Attack Indicators
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

- `scan_scada_services` — Scan for exposed SCADA protocol ports.
- `detect_modbus_anomalies` — Detect Modbus protocol anomalies indicating attack.
- `detect_s7comm_access` — Test Siemens S7comm accessibility (basic connection test).
- `query_scada_siem` — Query SIEM for SCADA-related security events.
- `run_audit` — Execute SCADA attack detection audit.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-attacks-on-scada-systems`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
