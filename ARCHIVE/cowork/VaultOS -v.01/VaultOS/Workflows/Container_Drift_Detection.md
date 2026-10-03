---
serial: "WF-260626-65A6D7"
description: "Runtime monitoring pipeline for detecting unauthorized container changes."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Container Drift Detection

## ▸ WORKFLOW OBJECTIVE
**Goal:** Runtime monitoring pipeline for detecting unauthorized container changes.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[building-threat-intelligence-enrichment-in-splunk]]
2. **Phase 2:** Execute [[performing-api-rate-limiting-bypass]]
3. **Phase 3:** Execute [[building-c2-infrastructure-with-sliver-framework]]
4. **Phase 4:** Execute [[testing-ransomware-recovery-procedures]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-65A6D7`*
