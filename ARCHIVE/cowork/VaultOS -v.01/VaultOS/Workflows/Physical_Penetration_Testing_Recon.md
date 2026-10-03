---
serial: "WF-260626-7BD0BA"
description: "Gathering OSINT on facility layouts, guard schedules, and RFID systems."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Physical Penetration Testing Recon

## ▸ WORKFLOW OBJECTIVE
**Goal:** Gathering OSINT on facility layouts, guard schedules, and RFID systems.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[detecting-process-injection-techniques]]
2. **Phase 2:** Execute [[performing-web-cache-deception-attack]]
3. **Phase 3:** Execute [[exploiting-api-injection-vulnerabilities]]
4. **Phase 4:** Execute [[journalism-core]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-7BD0BA`*
