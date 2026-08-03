---
title: "Workflows"
type: workflows-index
status: active
---

# Workflows

> Automation definitions for cross-cutting processes. Each workflow is a self-contained subfolder defining triggers, steps, owners, and integration points.

## Active Workflows

| Workflow | Trigger | Owner | State |
|---|---|---|---|
| `INBOX-SWEEP/` | every 5 min | Coordinator + Tools | active |
| `WEEKLY-AUDIT/` | weekly | Memory Curator | active |
| `BACKUP-VERIFICATION/` | daily 03:00 | Tools | active |

## Subfolders

```
WORKFLOWS/
+-- INBOX-SWEEP/                state: active
+-- WEEKLY-AUDIT/               state: active
+-- BACKUP-VERIFICATION/        state: active
+-- COMS-LAB/                   (legacy; held-over from 4-agent era)
+-- DOJO/                       (legacy)
+-- N8N/                        (legacy)
+-- PROMPT-GAWD/                (legacy)
+-- WORKFLOW CANVAS/            (legacy)
```

## Adding a New Workflow

1. Create `WORKFLOWS/<name>/`.
2. Author `Flow.md` (trigger, inputs, steps, outputs, failure handling).
3. Author `run.ps1` (PowerShell) and `run.sh` (bash).
4. Update this Index with state: draft or active.

## See Also

- `4.0TOOLS/SKILLS/Docker Management.md`
- `5.0MEMORY/SKILLS/Audit Playbook.md`
- `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md`
