---
title: "Backup Log"
role: "tools"
status: active
---

# Backup Log

> Append-only log of backup runs. The Tools role writes here; the Backup Verification workflow reads this.

| Timestamp | Trigger | Files | Delta | Status |
|---|---|---|---|---|
| (no entries yet) | | | | |

## Format

```markdown
| 2026-07-04 03:00:01 | daily | 5252 | +0 | OK |
| 2026-07-05 03:00:02 | daily | 5252 | +1 | OK; see Manifest-2026-07-05 |
```
