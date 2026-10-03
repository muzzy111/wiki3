---
serial: "WF-260626-DF63CA"
description: "Isolating compromised hosts via EDR API while maintaining forensic access."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Endpoint Quarantine Automation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Isolating compromised hosts via EDR API while maintaining forensic access.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-hashicorp-vault-dynamic-secrets]]
2. **Phase 2:** Execute [[implementing-conduit-security-for-ot-remote-access]]
3. **Phase 3:** Execute [[hardening-linux-endpoint-with-cis-benchmark]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-DF63CA`*
