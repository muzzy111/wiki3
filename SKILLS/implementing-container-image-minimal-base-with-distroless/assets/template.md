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

# Distroless Migration Assessment Template

## Application Information
| Field | Value |
|-------|-------|
| Application Name | |
| Current Base Image | |
| Runtime | |
| Target Distroless Image | |

## Migration Checklist
- [ ] Multi-stage Dockerfile created
- [ ] Application tested with distroless base
- [ ] Image scanned for vulnerabilities (before/after comparison)
- [ ] Non-root user configured
- [ ] Debug procedures documented
- [ ] CI/CD pipeline updated

## Vulnerability Comparison
| Metric | Before | After |
|--------|--------|-------|
| Image Size | | |
| Critical CVEs | | |
| High CVEs | | |
| Total CVEs | | |

## Sign-Off
| Role | Name | Date |
|------|------|------|
| Developer | | |
| Security Engineer | | |
