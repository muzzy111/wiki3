---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Agy TUI Driver Harness

A `pywinpty`-based library that drives the Antigravity CLI (`agy`) from a Python subprocess, eliminating the need for human keypresses. Built 2026-06-16 after every other Hermes terminal tool failed to deliver keystrokes that agy's TUI line editor would accept.

## Why This Exists

Hermes' built-in `terminal(pty=true)` and `process write` both deliver raw bytes that arrive **concatenated with no spaces** in agy's input field. Verified failure mode: typing `respond with exactly three lines` via `process write` arrived as `respondwith exactlythreelines`. The TUI's line editor requires real keypress events, not raw stdin bytes. `pywinpty` provides a real ConPTY that emits those events correctly.

## What Got Verified

- **Input path:** agy logs `HandleUserInput called with text: "..."` after the harness sends a prompt, proving the keystrokes reached agy's input loop. End-to-end reply capture was blocked by Google AI Pro quota throttling (3+ minutes per call on 2 AI [[credits]]), not by the harness.
- **pywinpty availability:** Already installed on the host. No `pip install` required.
- **Screen parsing:** ANSI strip + box-drawing filter + reply extraction between input prompt and [[status]] bar all work on the actual agy TUI output.

## The Library

Lives at `C:\Users\Admin\AppData\Local\hermes\scripts\agy_harness.py`. Exposes one main class: `AgySession`.

```python
import sys
sys.path.insert(0, r"C:\Users\Admin\AppData\Local\hermes\scripts")
from agy_harness import AgySession

with AgySession(reply_timeout_s=300) as agy:
    reply = agy.ask("What is the latest n8n release? Include source URLs.")
print(reply)
```

CLI form for ad-hoc use:

```bash
python C:/Users/Admin/AppData/Local/hermes/scripts/agy_harness.py --timeout 300 "your prompt here"
```

Useful flags: `--debug-dump PATH` writes raw+cleaned screen state to a file (good for diagnosing parser bugs), `--hard-kill-after N` exits the process after N seconds regardless of harness state (prevents caller hangs).

## Critical Invariants

| Invariant | Why |
|---|---|
| Use `\r` for Enter, not `\n` | `\n` is treated as a literal newline in the input buffer and never submits |
| Idle detection requires spinner to stop AND `esc to cancel` to be absent | The input prompt `>` flickers past during redraws even mid-generation; the spinner stop is the only reliable signal |
| `__exit__` does NOT send `/exit` or `exit` | Agy does not respond to those keys reliably via PTY, and waiting for them hangs the caller |
| Default `reply_timeout_s=300` | First-call latency today is 2-3 minutes; 120s is too tight |
| Always pass `--log-file` via the harness | Gives you a transcript to tail when things go wrong |

## Process Hygiene

The harness spawns agy, which spawns its own language server. **If you abort the harness mid-run, agy processes leak.** They accumulate in `tasklist` and each new launch triggers a fresh OAuth flow (2-3 minutes). If you must reap, run `taskkill //F //IM agy.exe` AFTER the session is fully done, not during.

## Known Limitations

- **No streaming output.** The harness returns the final reply after idle detection; partial output during generation is not surfaced.
- **No multi-turn by default.** `AgySession` is one context manager, one reply. For multi-turn, call `agy.ask()` multiple times on the same session — the buffer is preserved.
- **End-to-end unverified.** Reply capture is blocked by quota. Once the user tops up [[credits]], run a verification pass and [[update]] this note with measured latency.

## Related

- [[CLI Tool Routing on This Machine]] — agy is the default research agent per the routing policy
- [[Karpathy 3-Folder Wiki Capture Workflow]] — the journal that recorded this harness build
