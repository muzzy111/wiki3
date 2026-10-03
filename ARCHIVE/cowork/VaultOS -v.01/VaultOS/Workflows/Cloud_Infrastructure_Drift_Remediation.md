---
serial: "WF-260626-171F87"
description: "Re-applying Terraform state to correct manual alterations in AWS/GCP."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Cloud Infrastructure Drift Remediation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Re-applying Terraform state to correct manual alterations in AWS/GCP.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[analyzing-malicious-url-with-urlscan]]
2. **Phase 2:** Execute [[performing-file-carving-with-foremost]]
3. **Phase 3:** Execute [[configuring-microsegmentation-for-zero-trust]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-171F87`*
