---
cssclasses: ["electric-dashboard"]
---

# Core Systems

The central intelligence hub. Operations are monitored and initialized from this nexus.

```dataview
TABLE WITHOUT ID
  file.link AS "Active Skill",
  file.mtime AS "Last Initialized"
FROM "Skills"
WHERE file.name != "Core-Systems"
```
