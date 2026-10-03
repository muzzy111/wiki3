---
serial: "WF-260626-D42F55"
description: "Refining risk-based sign-in policies to balance security and usability."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Azure AD Conditional Access Tuning

## ▸ WORKFLOW OBJECTIVE
**Goal:** Refining risk-based sign-in policies to balance security and usability.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[deploying-tailscale-for-zero-trust-vpn]]
2. **Phase 2:** Execute [[hooks]]
3. **Phase 3:** Execute [[extracting-windows-event-logs-artifacts]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-D42F55`*
