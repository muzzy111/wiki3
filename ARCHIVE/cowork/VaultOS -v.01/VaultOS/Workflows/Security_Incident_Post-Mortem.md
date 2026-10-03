---
serial: "WF-260626-E0E623"
description: "Generating lessons learned and action items after a breach."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Security Incident Post-Mortem

## ▸ WORKFLOW OBJECTIVE
**Goal:** Generating lessons learned and action items after a breach.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-binary-exploitation-analysis]]
2. **Phase 2:** Execute [[detecting-evasion-techniques-in-endpoint-logs]]
3. **Phase 3:** Execute [[performing-brand-monitoring-for-impersonation]]
4. **Phase 4:** Execute [[performing-s7comm-protocol-security-analysis]]
5. **Phase 5:** Execute [[conducting-full-scope-red-team-engagement]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-E0E623`*
