---
serial: "WF-260626-60266F"
description: "Specialized air-gapped forensic analysis for ICS/SCADA malware variants."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Stuxnet Variant Triage

## ▸ WORKFLOW OBJECTIVE
**Goal:** Specialized air-gapped forensic analysis for ICS/SCADA malware variants.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[conducting-post-incident-lessons-learned]]
2. **Phase 2:** Execute [[configuring-hsm-for-key-storage]]
3. **Phase 3:** Execute [[conducting-internal-reconnaissance-with-bloodhound-ce]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-60266F`*
