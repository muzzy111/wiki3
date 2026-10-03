---
serial: "WF-260626-9001B4"
description: "Analyzing kernel modules and syscall hooks to identify stealthy persistence."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Linux Rootkit Detection

## ▸ WORKFLOW OBJECTIVE
**Goal:** Analyzing kernel modules and syscall hooks to identify stealthy persistence.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-adversary-in-the-middle-phishing-detection]]
2. **Phase 2:** Execute [[detecting-aws-cloudtrail-anomalies]]
3. **Phase 3:** Execute [[hunting-for-unusual-network-connections]]
4. **Phase 4:** Execute [[implementing-zero-trust-in-cloud]]
5. **Phase 5:** Execute [[detecting-beaconing-patterns-with-zeek]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-9001B4`*
