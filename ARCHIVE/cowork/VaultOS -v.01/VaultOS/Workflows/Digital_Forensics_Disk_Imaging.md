---
serial: "WF-260626-6CC7A9"
description: "Forensically sound acquisition and preservation of compromised media."
tags:
  - workflow
status: active
created: 2026-06-26T16:04:48
modified: 2026-06-26T16:04:48
---
# ⚙️ Workflow: Digital Forensics Disk Imaging

## ▸ WORKFLOW OBJECTIVE
**Goal:** Forensically sound acquisition and preservation of compromised media.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[conducting-external-reconnaissance-with-osint]]
2. **Phase 2:** Execute [[testing-for-email-header-injection]]
3. **Phase 3:** Execute [[analyzing-linux-elf-malware]]
4. **Phase 4:** Execute [[generating-threat-intelligence-reports]]
5. **Phase 5:** Execute [[collecting-indicators-of-compromise]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-6CC7A9`*
