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

# Standards & References
- **NIST SP 800-92**: Guide to Computer Security Log Management
- **CIS Benchmark Section 17**: Advanced Audit Policy Configuration
- **NSA/CISA [[[[Event]]]] Forwarding Guidance**: Recommended events for Windows monitoring
- **Palantir WEF Config**: https://github.com/palantir/windows-[[[[event]]]]-forwarding
- **SANS Windows Logging Cheat Sheet**: https://www.sans.org/posters/
