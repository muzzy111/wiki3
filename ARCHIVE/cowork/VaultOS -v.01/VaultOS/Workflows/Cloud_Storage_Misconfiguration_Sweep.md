---
serial: "WF-260626-FE93F3"
description: "Automated scanning of S3 buckets and Azure blobs for public access."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Cloud Storage Misconfiguration Sweep

## ▸ WORKFLOW OBJECTIVE
**Goal:** Automated scanning of S3 buckets and Azure blobs for public access.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[detecting-port-scanning-with-fail2ban]]
2. **Phase 2:** Execute [[analyzing-malicious-pdf-with-peepdf]]
3. **Phase 3:** Execute [[performing-serverless-function-security-review]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-FE93F3`*
