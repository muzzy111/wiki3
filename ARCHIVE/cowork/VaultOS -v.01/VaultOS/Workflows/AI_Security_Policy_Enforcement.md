---
serial: "WF-260626-FEAA50"
description: "Monitoring employee interaction with external LLMs to prevent sensitive data leakage."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: AI Security Policy Enforcement

## ▸ WORKFLOW OBJECTIVE
**Goal:** Monitoring employee interaction with external LLMs to prevent sensitive data leakage.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[hunting-for-scheduled-task-persistence]]
2. **Phase 2:** Execute [[analyzing-typosquatting-domains-with-dnstwist]]
3. **Phase 3:** Execute [[securing-historian-server-in-ot-environment]]
4. **Phase 4:** Execute [[hunting-for-unusual-network-connections]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-FEAA50`*
