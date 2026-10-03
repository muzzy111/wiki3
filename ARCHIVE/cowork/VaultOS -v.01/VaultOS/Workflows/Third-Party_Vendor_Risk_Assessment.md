---
serial: "WF-260626-50DD7A"
description: "Scoring and evaluating external vendors based on security questionnaires."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Third-Party Vendor Risk Assessment

## ▸ WORKFLOW OBJECTIVE
**Goal:** Scoring and evaluating external vendors based on security questionnaires.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[exploiting-type-juggling-vulnerabilities]]
2. **Phase 2:** Execute [[performing-threat-intelligence-sharing-with-misp]]
3. **Phase 3:** Execute [[testing-oauth2-implementation-flaws]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-50DD7A`*
