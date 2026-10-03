---
serial: "WF-260626-A0DC72"
description: "Analysis chain for extracting IOCs from malicious emails."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Phishing Email Deep Dive

## ▸ WORKFLOW OBJECTIVE
**Goal:** Analysis chain for extracting IOCs from malicious emails.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-rbac-hardening-for-kubernetes]]
2. **Phase 2:** Execute [[detecting-broken-object-property-level-authorization]]
3. **Phase 3:** Execute [[analyzing-malware-sandbox-evasion-techniques]]
4. **Phase 4:** Execute [[performing-gcp-security-assessment-with-forseti]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-A0DC72`*
