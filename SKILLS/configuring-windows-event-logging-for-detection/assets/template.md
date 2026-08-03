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

# Windows [[[[Event]]]] Logging Configuration Template

## Audit Policy Settings
| Subcategory | Setting | [[Status]] |
|-------------|---------|--------|
| Credential Validation | Success, Failure | |
| Logon | Success, Failure | |
| Process Creation | Success | |
| Special Logon | Success | |

## Log Sizes
| Log | Size | Retention |
|-----|------|-----------|
| Security | 1 GB | Overwrite |
| PowerShell/Operational | 512 MB | Overwrite |

## Sign-Off
| Role | Name | Date |
|------|------|------|
| Security | | |
