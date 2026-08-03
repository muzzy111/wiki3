---
title: "Environment Maintenance"
role: "tools"
status: active
---

# Environment Maintenance

> Skill: how the Tools role keeps the host environment stable.

## Procedure

- Track installed CLIs in `4.0TOOLS/MEMORY/Tool Inventory.md`.
- Track Python versions, Node versions, and any pinned tools.
- When a CLI upgrade is needed, install the new version in parallel; don't replace until smoke passes.
- Write a record to `4.0TOOLS/MEMORY/Environment Changes.md` on every change.

## Pitfalls

- **Pitfall: silently upgrading Python.** Always pin; document.

## Related

- 5.0MEMORY: Performance Roll-Up (uses this inventory)
