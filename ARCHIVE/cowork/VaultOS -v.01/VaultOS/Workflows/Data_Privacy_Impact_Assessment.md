---
serial: "WF-260626-6CC825"
description: "Evaluating new data processing activities for GDPR compliance."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Data Privacy Impact Assessment

## ▸ WORKFLOW OBJECTIVE
**Goal:** Evaluating new data processing activities for GDPR compliance.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-gcp-security-assessment-with-forseti]]
2. **Phase 2:** Execute [[hardening-docker-containers-for-production]]
3. **Phase 3:** Execute [[conducting-mobile-app-penetration-test]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-6CC825`*
