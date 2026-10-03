---
serial: "WF-260626-5DC0C5"
description: "Specialized workflow for auditing legacy RACF configurations."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Mainframe Security Audit

## ▸ WORKFLOW OBJECTIVE
**Goal:** Specialized workflow for auditing legacy RACF configurations.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[detecting-attacks-on-scada-systems]]
2. **Phase 2:** Execute [[implementing-api-gateway-security-controls]]
3. **Phase 3:** Execute [[detecting-aws-guardduty-findings-automation]]
4. **Phase 4:** Execute [[analyzing-sbom-for-supply-chain-vulnerabilities]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-5DC0C5`*
