---
name: verification-reminder
description: Prompt to verify facts before including them in journalism content
event: PostToolUse
tools: [Write, Edit]
tags:
  - verification
  - content
  - claims
  - reminder
---

# Workflows
## Memory Protection Deployment
```
[Audit current mitigations: Get-ProcessMitigation -System]
  → [Enable system-level DEP, SEHOP, ASLR]
  → [Configure per-app mitigations for high-risk applications]
  → [Export XML, deploy via Intune/GPO]
  → [Test application compatibility] → [Monitor for crashes]
  → [Tune exceptions for incompatible apps]
```
