# Inbox — human drop zone

Drop new tasks here. The orchestrator sweeps this folder and converts
each file into a `State/open-jobs.json` entry.

## Drop a task

Create a markdown file with this minimum:

```yaml
---
title: <short task title>
priority: <blocker | high | normal | low>
created: <ISO8601>
requested_by: <human name>
---

# <task title>

## Goal
[One sentence: end-state.]

## Acceptance Criteria
- [ ] criterion 1
- [ ] criterion 2

## Constraints
- [constraint 1]

## Deadline
[ISO8601 or "no rush"]
```

The orchestrator will read this, decompose if needed, and dispatch.