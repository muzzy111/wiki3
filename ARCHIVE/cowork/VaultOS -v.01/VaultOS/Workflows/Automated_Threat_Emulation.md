---
serial: "WF-260626-20C1D4"
description: "Running Atomic Red Team tests to validate detection engineering."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Automated Threat Emulation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Running Atomic Red Team tests to validate detection engineering.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-network-traffic-baselining]]
2. **Phase 2:** Execute [[exploiting-active-directory-certificate-services-esc1]]
3. **Phase 3:** Execute [[securing-azure-with-microsoft-defender]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-20C1D4`*
