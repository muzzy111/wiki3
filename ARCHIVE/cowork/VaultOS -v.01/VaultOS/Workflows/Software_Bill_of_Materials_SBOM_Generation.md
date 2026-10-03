---
serial: "WF-260626-C73511"
description: "Mapping all direct and transitive dependencies during the CI build phase."
tags:
  - workflow
status: active
created: 2026-06-26T16:08:12
modified: 2026-06-26T16:08:12
---
# ⚙️ Workflow: Software Bill of Materials (SBOM) Generation

## ▸ WORKFLOW OBJECTIVE
**Goal:** Mapping all direct and transitive dependencies during the CI build phase.

This workflow integrates multiple VaultOS skills into a cohesive execution chain. Agents must execute these skills sequentially to fulfill the objective.

## ▸ SKILL EXECUTION CHAIN
1. **Phase 1:** Execute [[detecting-insider-data-exfiltration-via-dlp]]
2. **Phase 2:** Execute [[implementing-vulnerability-sla-breach-alerting]]
3. **Phase 3:** Execute [[performing-cloud-native-forensics-with-falco]]
4. **Phase 4:** Execute [[performing-file-carving-with-foremost]]
5. **Phase 5:** Execute [[performing-active-directory-compromise-investigation]]

## ▸ TRIGGER CONDITIONS
- Activated manually by user prompt.
- Triggered dynamically by Agent Orchestrator.

## ▸ SUCCESS METRICS
- All chained skills execute without fatal logic errors.
- Output artifacts generated in `VaultOS/Outputs`.

---
*VaultOS | Workflow Serial: `WF-260626-C73511`*
