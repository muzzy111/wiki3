---
serial: "WF-260626-E29816"
description: "Targeted workflow for users who fail phishing simulations."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Security Awareness Training Follow-up

## ▸ WORKFLOW OBJECTIVE
**Goal:** Targeted workflow for users who fail phishing simulations.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[analyzing-uefi-bootkit-persistence]]
2. **Phase 2:** Execute [[analyzing-malware-sandbox-evasion-techniques]]
3. **Phase 3:** Execute [[implementing-deception-based-detection-with-canarytoken]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-E29816`*
