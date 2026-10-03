---
serial: "WF-260626-C057E5"
description: "Deployment pipeline for CWPP agents across multi-cloud environments."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Cloud Workload Protection Rollout

## ▸ WORKFLOW OBJECTIVE
**Goal:** Deployment pipeline for CWPP agents across multi-cloud environments.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-aws-macie-for-data-classification]]
2. **Phase 2:** Execute [[performing-cloud-forensics-investigation]]
3. **Phase 3:** Execute [[performing-threat-intelligence-sharing-with-misp]]
4. **Phase 4:** Execute [[performing-ssl-certificate-lifecycle-management]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-C057E5`*
