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
## [[[[Event]]]] Logging Deployment
```
[Audit current logging configuration] → [Enable Advanced Audit Policy via GPO]
  → [Enable command line logging] → [Increase log sizes]
  → [Configure WEF or agent-based forwarding] → [Verify events in SIEM]
  → [Build detection rules from high-value events] → [Quarterly logging audit]
```
