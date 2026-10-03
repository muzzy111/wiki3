---
serial: "WF-260626-343388"
description: "Secure workflow for rotating cryptographic master keys."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: HSM Key Rotation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Secure workflow for rotating cryptographic master keys.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[implementing-container-network-policies-with-calico]]
2. **Phase 2:** Execute [[deobfuscating-powershell-obfuscated-malware]]
3. **Phase 3:** Execute [[analyzing-ransomware-network-indicators]]
4. **Phase 4:** Execute [[implementing-zero-trust-with-hashicorp-boundary]]
5. **Phase 5:** Execute [[performing-endpoint-forensics-investigation]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-343388`*
