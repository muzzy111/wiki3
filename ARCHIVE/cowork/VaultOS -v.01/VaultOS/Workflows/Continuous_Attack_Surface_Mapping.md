---
serial: "WF-260626-A70565"
description: "Automated discovery of forgotten subdomains, rogue APIs, and unmanaged assets."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Continuous Attack Surface Mapping

## ▸ WORKFLOW OBJECTIVE
**Goal:** Automated discovery of forgotten subdomains, rogue APIs, and unmanaged assets.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[testing-for-xml-injection-vulnerabilities]]
2. **Phase 2:** Execute [[performing-second-order-sql-injection]]
3. **Phase 3:** Execute [[conducting-wireless-network-penetration-test]]
4. **Phase 4:** Execute [[analyzing-windows-prefetch-with-python]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-A70565`*
