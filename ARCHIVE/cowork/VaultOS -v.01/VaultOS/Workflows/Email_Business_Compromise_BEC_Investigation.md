---
serial: "WF-260626-30ECDC"
description: "Tracing forged invoices, spoofed headers, and anomalous inbox rules."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Email Business Compromise (BEC) Investigation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Tracing forged invoices, spoofed headers, and anomalous inbox rules.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[eradicating-malware-from-infected-systems]]
2. **Phase 2:** Execute [[performing-threat-hunting-with-elastic-siem]]
3. **Phase 3:** Execute [[implementing-anti-phishing-training-program]]
4. **Phase 4:** Execute [[performing-threat-intelligence-sharing-with-misp]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-30ECDC`*
