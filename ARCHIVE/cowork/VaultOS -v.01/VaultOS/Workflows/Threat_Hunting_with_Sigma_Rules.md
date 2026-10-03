---
serial: "WF-260626-3609A0"
description: "Translating threat intel reports into generic Sigma rules for SIEM ingestion."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Threat Hunting with Sigma Rules

## ▸ WORKFLOW OBJECTIVE
**Goal:** Translating threat intel reports into generic Sigma rules for SIEM ingestion.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-patch-management-workflow]]
2. **Phase 2:** Execute [[performing-ics-asset-discovery-with-claroty]]
3. **Phase 3:** Execute [[analyzing-packed-malware-with-upx-unpacker]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-3609A0`*
