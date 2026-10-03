---
serial: "WF-260626-5E4A33"
description: "Workflow for verifying and prioritizing external vulnerability reports."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Bug Bounty Triage Protocol

## ▸ WORKFLOW OBJECTIVE
**Goal:** Workflow for verifying and prioritizing external vulnerability reports.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[analyzing-packed-malware-with-upx-unpacker]]
2. **Phase 2:** Execute [[analyzing-bootkit-and-rootkit-samples]]
3. **Phase 3:** Execute [[detecting-network-scanning-with-ids-signatures]]
4. **Phase 4:** Execute [[performing-cloud-native-forensics-with-falco]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-5E4A33`*
