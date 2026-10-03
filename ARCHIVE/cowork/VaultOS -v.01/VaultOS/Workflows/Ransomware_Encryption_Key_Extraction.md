---
serial: "WF-260626-EB5A07"
description: "Dumping active memory to recover symmetric keys during an ongoing attack."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Ransomware Encryption Key Extraction

## ▸ WORKFLOW OBJECTIVE
**Goal:** Dumping active memory to recover symmetric keys during an ongoing attack.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-epss-score-for-vulnerability-prioritization]]
2. **Phase 2:** Execute [[implementing-container-image-minimal-base-with-distroless]]
3. **Phase 3:** Execute [[implementing-data-loss-prevention-with-microsoft-purview]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-EB5A07`*
