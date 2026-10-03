---
serial: "WF-260626-ADFBB5"
description: "Automated scrubbing of all user sessions, tokens, and VPN profiles."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Employee Offboarding Access Revocation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Automated scrubbing of all user sessions, tokens, and VPN profiles.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-threat-hunting-with-elastic-siem]]
2. **Phase 2:** Execute [[correlating-threat-campaigns]]
3. **Phase 3:** Execute [[performing-container-security-scanning-with-trivy]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-ADFBB5`*
