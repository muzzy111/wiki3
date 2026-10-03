---
serial: "WF-260626-941E22"
description: "Restricting root access and privileged containers globally."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Kubernetes Pod Security Admission Configuration

## ▸ WORKFLOW OBJECTIVE
**Goal:** Restricting root access and privileged containers globally.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[detecting-lateral-movement-with-zeek]]
2. **Phase 2:** Execute [[detecting-living-off-the-land-attacks]]
3. **Phase 3:** Execute [[recovering-deleted-files-with-photorec]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-941E22`*
