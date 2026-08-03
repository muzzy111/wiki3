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

# Osquery Deployment Template

## Deployment Info
| Field | Value |
|-------|-------|
| Osquery Version | |
| Fleet Server | |
| Target Endpoints | |
| Enrollment Secret | [stored securely] |

## Scheduled Queries
| Query Name | Interval | Description | [[Status]] |
|-----------|----------|-------------|--------|
| process_monitor | 300s | Fileless process detection | Active |
| listening_ports | 600s | Open port monitoring | Active |
| persistence_check | 3600s | Startup item monitoring | Active |

## Sign-Off
| Role | Name | Date |
|------|------|------|
| Security | | |
| IT Ops | | |
