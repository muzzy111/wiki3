---
serial: "WF-260626-40D31B"
description: "Proactive hunting workflow for detecting large outbound data transfers."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Data Exfiltration Hunt

## ▸ WORKFLOW OBJECTIVE
**Goal:** Proactive hunting workflow for detecting large outbound data transfers.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-beyondcorp-zero-trust-access-model]]
2. **Phase 2:** Execute [[performing-deception-technology-deployment]]
3. **Phase 3:** Execute [[detecting-privilege-escalation-attempts]]
4. **Phase 4:** Execute [[implementing-web-application-logging-with-modsecurity]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-40D31B`*
