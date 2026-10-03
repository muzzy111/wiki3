---
serial: "WF-260626-68D99E"
description: "Workflow for assessing and prioritizing monthly Microsoft updates."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Patch Tuesday Triage

## ▸ WORKFLOW OBJECTIVE
**Goal:** Workflow for assessing and prioritizing monthly Microsoft updates.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-rbac-hardening-for-kubernetes]]
2. **Phase 2:** Execute [[performing-red-team-with-covenant]]
3. **Phase 3:** Execute [[securing-azure-with-microsoft-defender]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-68D99E`*
