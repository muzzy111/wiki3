---
serial: "WF-260626-089D76"
description: "Bypassing SSL pinning to analyze hidden API calls in iOS/Android applications."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Mobile App API Interception

## ▸ WORKFLOW OBJECTIVE
**Goal:** Bypassing SSL pinning to analyze hidden API calls in iOS/Android applications.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-cve-prioritization-with-kev-catalog]]
2. **Phase 2:** Execute [[performing-network-forensics-with-wireshark]]
3. **Phase 3:** Execute [[implementing-supply-chain-security-with-in-toto]]
4. **Phase 4:** Execute [[implementing-aqua-security-for-container-scanning]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-089D76`*
