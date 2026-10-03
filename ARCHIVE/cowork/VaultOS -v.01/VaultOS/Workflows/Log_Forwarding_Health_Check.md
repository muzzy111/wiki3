---
serial: "WF-260626-AAFAA4"
description: "Verifying the integrity and volume of logs sent to the SIEM."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Log Forwarding Health Check

## ▸ WORKFLOW OBJECTIVE
**Goal:** Verifying the integrity and volume of logs sent to the SIEM.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-soc2-type2-audit-preparation]]
2. **Phase 2:** Execute [[performing-web-application-vulnerability-triage]]
3. **Phase 3:** Execute [[detecting-golden-ticket-forgery]]
4. **Phase 4:** Execute [[implementing-dmarc-dkim-spf-email-security]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-AAFAA4`*
