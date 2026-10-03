---
title: "006 — Fix antigravity harness path"
type: todo
status: open
priority: high
created: 2026-06-18
modified: 2026-06-18
tags:
  - chatroom
  - agent
  - antigravity
  - harness
---

# 006 — Fix antigravity harness path

The `@antigravity` agent in the multi-agent chatroom never speaks.
Root cause: `[[agents]]/agy_agent.py` does `from agy_harness import ...`
but `agy_harness.py` isn't on the Python path. It lives somewhere
under `C:\Users\Admin\AppData\Local\hermes\` (in the agy [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
bundle).

## What needs to happen

1. Find the actual location of `agy_harness.py`:
   ```
   find "C:\Users\Admin\AppData\Local\hermes" -name "agy_harness.py"
   ```
2. Edit `C:\Users\Admin\Desktop\multi-agent-matrix-chat\[[agents]]\agy_agent.py`
   and add at the top (after the docstring):
   ```python
   import sys
   sys.path.insert(0, r)
   ```
3. Restart the orchestrator.
4. Smoke-test: send `@antigravity hello` in the chatroom, expect
   a reply within 3-4 minutes (agy is slow).

## If the harness isn't there at all

The agy [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] may need to be installed/refreshed in hermes:

```
hermes skills install agy
```

Or copy the harness from the [[hermes-agent]] repo if available
elsewhere on disk.

## Why this matters

Without @antigravity, the chatroom is 3-voice not 4-voice. The
round-robin and orchestrator strategies all break (they expect
all 4 [[agents]] to be reachable). Mention mode still works (you can
just tag the 3 working [[agents]]), but the 4-way collaboration
that was the whole point is degraded.

## Cost awareness

Agy has 2 AI [[credits]] remaining on the Google AI Pro plan and
takes 3+ minutes per call. Every @antigravity mention burns a
credit. Plan accordingly.

## Related

- [[Multi-Agent Chatroom User Guide]] — section
  1c has the same instructions.
- [[10.05 KARPATHY/WIKI/Crons on This Host Drop One-Shots Slotted
  Near Now]] — unrelated, just a memory note.
