---
name: autocontext-skill-lesson-injector
description: Inject global skill lessons when a skill is loaded
hooks:
  - event: PreToolUse
    type: prompt
    matcher: "Skill"
tags:
  - lessons
  - check
  - skill
  - enabled
---

# Workflows
## Fileless Attack Detection
```
[Enable telemetry (Sysmon, PS logging, AMSI)] → [Build detection rules per technique]
  → [Deploy rules in SIEM] → [Threat hunt for historical fileless indicators]
  → [Triage alerts] → [Investigate memory for confirmed incidents]
  → [Extract IOCs from memory analysis] → [Tune detections]
```
