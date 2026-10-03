---
serial: "WF-260626-C724F5"
description: "Gathering external footprint data on a specific entity."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: OSINT Target Profiling

## ▸ WORKFLOW OBJECTIVE
**Goal:** Gathering external footprint data on a specific entity.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-threat-emulation-with-atomic-red-team]]
2. **Phase 2:** Execute [[implementing-container-image-minimal-base-with-distroless]]
3. **Phase 3:** Execute [[tracking-threat-actor-infrastructure]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-C724F5`*
