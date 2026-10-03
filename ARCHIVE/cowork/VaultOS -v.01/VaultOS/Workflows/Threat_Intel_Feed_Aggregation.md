---
serial: "WF-260626-65F4E1"
description: "Workflow for ingesting, deduplicating, and distributing CTI feeds."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Threat Intel Feed Aggregation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Workflow for ingesting, deduplicating, and distributing CTI feeds.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[hunting-for-registry-persistence-mechanisms]]
2. **Phase 2:** Execute [[analyzing-kubernetes-audit-logs]]
3. **Phase 3:** Execute [[analyzing-linux-elf-malware]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-65F4E1`*
