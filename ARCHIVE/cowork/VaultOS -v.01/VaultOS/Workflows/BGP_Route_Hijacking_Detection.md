---
serial: "WF-260626-266DE1"
description: "Monitoring routing tables for unauthorized autonomous system path announcements."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: BGP Route Hijacking Detection

## ▸ WORKFLOW OBJECTIVE
**Goal:** Monitoring routing tables for unauthorized autonomous system path announcements.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-ip-reputation-analysis-with-shodan]]
2. **Phase 2:** Execute [[testing-for-xss-vulnerabilities]]
3. **Phase 3:** Execute [[testing-mobile-api-authentication]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-266DE1`*
