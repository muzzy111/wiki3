---
serial: "WF-260626-E1C704"
description: "Scanning historical commits for exposed AWS keys, passwords, and tokens."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Git Repository Secret Sweeping

## ▸ WORKFLOW OBJECTIVE
**Goal:** Scanning historical commits for exposed AWS keys, passwords, and tokens.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[performing-memory-forensics-with-volatility3]]
2. **Phase 2:** Execute [[building-ioc-enrichment-pipeline-with-opencti]]
3. **Phase 3:** Execute [[analyzing-security-logs-with-splunk]]
4. **Phase 4:** Execute [[reverse-engineering-android-malware-with-jadx]]
5. **Phase 5:** Execute [[building-c2-infrastructure-with-sliver-framework]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-E1C704`*
