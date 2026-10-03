---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Crons on This Host Drop One-Shots Slotted Near Now

Confirmed twice in two days. The Hermes cron scheduler on this
Windows host is minute-granular and silently drops one-shot jobs
scheduled for "now" (less than ~60 seconds of lead time from when
the schedule is set). The job stays in `state: scheduled` with
`next_run_at: null` and never fires. The deliverable is just
silently lost.

## Evidence

### Case 1: install-pentest-ai (2026-06-16)

- Scheduled: 2026-06-16 19:06 PT, one-shot, `no_agent: true`,
  `deliver: origin`.
- Result: never fired. `next_run_at: null`. Updated to 19:13 —
  same result.
- Workaround: ran the install script directly via `python`.

### Case 2: mcp-stack-deploy (2026-06-16)

- Scheduled: 2026-06-16 22:00 PT, one-shot, `no_agent: true`,
  `deliver: origin`, `script: deploy-mcp-stack-runner.py`.
- Result: never fired. As of 2026-06-17 19:36 EDT, the job is
  still in `state: scheduled` with `next_run_at:
  2026-06-16T22:00:00-07:00` and `last_run_at: null`.
- Workaround: ran the bring-up manually on 2026-06-17. The
  19-container plan that was supposed to deploy at 22:00 on
  Tuesday night came up the following evening instead.

## What works

- One-shot crons with 2+ hours of lead time. Case 2 was set
  ~5h before its target time and still didn't fire — so the
  threshold is not just "≥ 60s", it might be even longer or
  something else is going on. Needs more data to pin down.
- Recurring crons (`every Xm`, `0 9 * * *` etc.) — used daily
  in the past without issue (assumed; not directly verified in
  this incident).

## What to do

- For "fire now" intent: just run the script directly via
  `python` or `bash`. Don't try to be cute with one-shot crons.
- For "fire in 2+ hours while I'm away": one-shot cron is fine
  if you verify `next_run_at` populates after creation. If
  `next_run_at` is null right after creation, the slot is
  already in the past and the cron is dead.
- Always `cronjob action=list` after `action=create` to confirm
  the job exists with a populated `next_run_at`.

## What we still don't know

- Exact threshold beyond which the scheduler will pick up a
  one-shot. 5h lead time was not enough in Case 2.
- Whether the bug is in the cron scheduler tick loop, in the
  one-shot handling, or in date-arithmetic.
- Whether `hermes [[update]]` would fix it. (We did not [[update]]
  Hermes; the bug tracker is the source of truth.)

## Action item (open)

Either:

- (a) [[[[Report]]]] this as a Hermes scheduler bug with the two
  cases as evidence, or
- (b) Find a config or env var that controls scheduler
  granularity, or
- (c) Write a "cron_or_run" helper that decides based on
  lead time: < 2h → run inline, ≥ 2h → schedule.

## Related

- [[pentest-ai Install on Windows]] — Case 1 writeup.
- [[MCP Stack Bring-up Session 2026-06-17]] — Case 2
  writeup.
- [[MCP Stack Deploy Script]] — the script the Case 2 cron
  was supposed to invoke.
- [[Karpathy 3-Folder Wiki Capture Workflow]] — the journal
  pattern that captured both cases.
