---
serial: "WF-260626-9A34FC"
description: "Verifying the integrity of firmware and components on newly arrived servers."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Hardware Supply Chain Interdiction Assessment

## ▸ WORKFLOW OBJECTIVE
**Goal:** Verifying the integrity of firmware and components on newly arrived servers.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-device-posture-assessment-in-zero-trust]]
2. **Phase 2:** Execute [[performing-steganography-detection]]
3. **Phase 3:** Execute [[conducting-spearphishing-simulation-campaign]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-9A34FC`*
