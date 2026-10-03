---
serial: "WF-260626-C0CF44"
description: "Reviewing AWS Lambda functions for over-privileged execution."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Serverless Function Security Audit

## ▸ WORKFLOW OBJECTIVE
**Goal:** Reviewing AWS Lambda functions for over-privileged execution.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[hunting-for-defense-evasion-via-timestomping]]
2. **Phase 2:** Execute [[triaging-vulnerabilities-with-ssvc-framework]]
3. **Phase 3:** Execute [[performing-ics-asset-discovery-with-claroty]]
4. **Phase 4:** Execute [[testing-for-xss-vulnerabilities-with-burpsuite]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-C0CF44`*
