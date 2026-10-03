---
serial: "WF-260626-CCE9BB"
description: "Extracting and analyzing volatile memory from suspected compromised hosts."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Memory Forensics Triage

## ▸ WORKFLOW OBJECTIVE
**Goal:** Extracting and analyzing volatile memory from suspected compromised hosts.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-aws-account-enumeration-with-scout-suite]]
2. **Phase 2:** Execute [[performing-privileged-account-discovery]]
3. **Phase 3:** Execute [[exploiting-sql-injection-vulnerabilities]]
4. **Phase 4:** Execute [[analyzing-memory-dumps-with-volatility]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-CCE9BB`*
