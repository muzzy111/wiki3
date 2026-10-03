---
serial: "WF-260626-E4E3CB"
description: "Correlating UEBA alerts to identify malicious insider activity."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Insider Threat Behavioral Analysis

## ▸ WORKFLOW OBJECTIVE
**Goal:** Correlating UEBA alerts to identify malicious insider activity.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[scanning-infrastructure-with-nessus]]
2. **Phase 2:** Execute [[detecting-pass-the-ticket-attacks]]
3. **Phase 3:** Execute [[analyzing-disk-image-with-autopsy]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-E4E3CB`*
