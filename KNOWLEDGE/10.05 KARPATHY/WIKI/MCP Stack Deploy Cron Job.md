---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# MCP Stack Deploy Cron Job

The scheduled job that runs the
[[MCP Stack Deploy Script]] automatically at 22:00 (10pm) Pacific
time, on user request 2026-06-16.

## Job Identity

| Field | Value |
|---|---|
| Job ID | `b825266888fe` |
| Name | `mcp-stack-deploy` |
| Schedule | `2026-06-16T22:00:00-07:00` (one-shot) |
| Repeat | `once` |
| `no_agent` | `true` — script IS the job |
| Script | `deploy-mcp-stack-runner.py` (relative to `~/AppData/Local/hermes/scripts/`) |
| Deliver | `origin` — stdout sent to current chat on completion |

## Why `no_agent: true`

The `cronjob` tool supports two modes:

1. **LLM-driven** (default): agent runs a prompt each tick, tools loaded
2. **Watchdog** (`no_agent=true`): scheduler runs a `script` and
   delivers stdout verbatim — no LLM, no agent loop, no tokens

This job is a pure shell-orchestration task: pull images, start
containers, log results. There's nothing for an LLM to think about.
The watchdog pattern is the right fit. Bonus: zero token cost, fast
wall-clock execution.

## Empty-Stdout Convention

Per the tool docs: with `no_agent=true`, **EMPTY stdout means SILENT**
— nothing is sent to the user. The deploy script
(`deploy-mcp-stack.sh`) prints a one-line "stack deploy starting" +
one line per container + a "finished" footer, so a successful run
delivers 17+ lines. A failure produces a non-zero exit code, which
the Python wrapper catches and turns into an error message + exit
code 2/3. Net: user hears about it on success AND on failure,
silence means "nothing to do" (idempotent re-runs are silent because
all `docker run` is a no-op and the script's per-container log lines
are the same in both fresh and re-run cases — verify this if
silence becomes a problem).

## Self-Delete

The job has `repeat: once` and a one-shot timestamp. After it fires,
the scheduler leaves it as a record (no auto-delete). To re-deploy
later, create a new cron job with the same script. To clean the
record, `cronjob action=remove job_id=b825266888fe`.

## What Could Go Wrong

| Risk | Mitigation |
|---|---|
| Image pull exceeds 30 min | Increase `timeout` in the Python wrapper |
| Docker Desktop not running at 22:00 | `cronjob` doesn't pre-check; the bash script will fail with "Cannot connect to Docker daemon" — surfaced as stderr |
| Port already in use | The script does `docker run` blindly; if port 6379 is bound by a non-`mcp-` container, run fails. Currently no such collision (verified) |
| Host OOM during opensearch pull + start | Manual: pause opensearch and add it later |
| Script path moved | `script=` is resolved relative to `~/AppData/Local/hermes/scripts/` per the tool docs; don't move it |

## Related

- [[MCP Stack Deploy Script]]
- [[Self-Hosted MCP Stack on Docker Desktop]]
- [[Karpathy 3-Folder Wiki Capture Workflow]]
