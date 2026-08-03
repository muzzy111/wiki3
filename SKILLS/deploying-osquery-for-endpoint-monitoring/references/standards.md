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
- **Osquery Documentation**: https://osquery.readthedocs.io/
- **Osquery Schema**: https://osquery.io/schema/
- **FleetDM Documentation**: https://fleetdm.com/docs
- **NIST SP 800-53 SI-4**: System Monitoring - osquery provides endpoint visibility
- **CIS Control 1**: Inventory of Enterprise Assets - osquery software/hardware inventory
- **CIS Control 2**: Software Inventory - osquery package/process queries
