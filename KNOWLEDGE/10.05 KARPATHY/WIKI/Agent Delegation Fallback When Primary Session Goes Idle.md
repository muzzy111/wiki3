---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Agent Delegation Fallback When Primary Session Goes Idle

When a delegated agent's primary session ends (going "idle" in its run-continuation state), the orchestrator can recover by invoking the same agent's CLI directly with a focused prompt. This is the pragmatic fallback for crashed/stuck agent sessions when the orchestrator cannot wait indefinitely.

## The failure mode

Multi-agent orchestrators (Hermes here) typically delegate to a polling agent (OpenCode here) that watches a shared channel and picks up tickets. When that polling agent's session ends — either by timeout, crash, or completion-of-prior-work — the orchestrator's tickets sit in the channel with no consumer.

Symptoms:
- Tickets posted to `Chat/ticket-*.md` minutes/hours ago.
- No artifacts appearing in `Build/`.
- The polling agent's `run-continuation/*.json` shows `state: idle`.
- The shared session state file (e.g. `OpenCode\.omo\run-continuation\ses_*.json`) shows `updatedAt` long in the past.

## The recovery

The orchestrator invokes the agent's CLI directly. For OpenCode:

```bash
# Verify the CLI works first
opencode --version
# e.g. "1.17.11"

# List available models
opencode models
# e.g. "opencode/big-pickle", "opencode/nemotron-3-ultra-free", "minimax/MiniMax-M3"

# Smoke test
timeout 30 opencode run 'Respond with exactly: OPENCODE_OK'
# Expected: prints "OPENCODE_OK"
```

Then dispatch the actual task with a focused prompt:

```bash
timeout 540 opencode run --model opencode/big-pickle '
You are OpenCode, working on Task 002 for the vault-core project.

WORKING DIRECTORY: <path>

YOUR GOAL: <one paragraph>

TASKS:
1. <specific deliverable 1>
2. <specific deliverable 2>
...

IMPORTANT RULES:
- <constraint 1>
- <constraint 2>

Report at the end: <what to verify>
' --thinking 2>&1 | tail -100
```

## Why this works

- The CLI is the same engine the polling session uses. A fresh CLI invocation is a new session, not a continuation of the dead one.
- `opencode run` is non-interactive and one-shot — perfect for bounded tasks.
- Small models (`big-pickle`, `nemotron-3-ultra-free`) are free and adequate for well-scoped tasks. Reserve frontier models for tasks requiring type-system reasoning or large refactors.
- `--thinking` enables model thinking blocks for transparency on small models.

## Pitfalls

- **Big-pickle / small models time out on large file reads.** 50KB of artifacts exceeds big-pickle's context budget for `Read` tool calls. Solution: split the task into smaller scope or use a mid-tier model.
- **`timeout` is critical.** Without it, `opencode run` may hang on long-running tasks. Use `timeout 540` (9 min) for typical tasks; `timeout 180` for smoke tests.
- **The CLI does not poll.** Each `opencode run` invocation is one-shot. For tasks that need iteration across multiple sessions, use the TUI mode (`background=true, pty=true`).
- **Don't silently substitute a recovery dispatch for the polling agent's normal flow.** Document the recovery in the build journal so the audit trail reflects what actually happened.

## When NOT to use this fallback

- The polling agent's session is alive and processing tickets (state != idle). Let it work.
- The task requires interactive iteration (multi-turn back-and-forth). Use TUI mode instead.
- The user has explicitly told you not to start new CLI sessions (resource constraint).

## Reference

- `Source\opencode-cli` / `C:\ProgramData\chocolatey\bin\opencode` v1.17.11 on this host
- `OpenCode\.omo\run-continuation\ses_0ec730bb3ffe0bvVdWswBcFdV8.json` — session state file inspected during this session
- Discovery moment: `[[2026-06-29 vault-os-build session]].md`, [[[[event]]]] `[10:32]` (noticed idle state), `[11:21]` (CLI invocation), `[11:23]` (focused dispatch for Task 002)
- See also: [[Multi-Agent Orchestrator Identity File Pattern]] for the broader coordination pattern

## Related

- [[Multi-Agent Orchestrator Identity File Pattern]]
- [[RAW/2026-06-29 vault-os-build session]] — discovery context