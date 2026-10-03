---
serial: "WF-260626-BEDB6D"
description: "Auditing and enforcing least privilege in K8s clusters."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Kubernetes RBAC Hardening

## ▸ WORKFLOW OBJECTIVE
**Goal:** Auditing and enforcing least privilege in K8s clusters.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-timeline-reconstruction-with-plaso]]
2. **Phase 2:** Execute [[performing-endpoint-vulnerability-remediation]]
3. **Phase 3:** Execute [[building-cloud-siem-with-sentinel]]
4. **Phase 4:** Execute [[performing-fuzzing-with-aflplusplus]]
5. **Phase 5:** Execute [[performing-cloud-incident-containment-procedures]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-BEDB6D`*
