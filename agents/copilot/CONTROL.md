---
title: "Copilot — Control"
type: agent-control
agent: copilot
created: 2026-08-03
loopd_endpoint: http://localhost:9101
---

# Copilot — Control

> Inline controls for the **copilot** agent. Each button shells out to `loopd`.
> State is observed in [[DASHBOARD]].

## Process Controls

```button
name START
type shell
action loopd spawn copilot
templater true
```
`Spawns the copilot agent as a persistent process. Idempotent — returns current PID if already running.`

```button
name STOP
type shell
action loopd kill copilot
templater true
```
`Sends SIGTERM; loopd waits up to 10s for clean exit, then SIGKILL.`

```button
name RESTART
type shell
action loopd restart copilot
templater true
```
`Kills the running process (if any), then spawns fresh. Pings /ready for confirmation.`

## Mailbox Controls

```button
name INBOX
type shell
action explorer "C:\Users\Admin\Desktop\Music\LOOP\agents\copilot\CHAT\Inbox"
templater true
```
`Opens the agent's inbox directory in Windows Explorer.`

```button
name OUTBOX
type shell
action explorer "C:\Users\Admin\Desktop\Music\LOOP\agents\copilot\CHAT\Outbox"
templater true
```
`Opens the agent's outbox directory in Windows Explorer.`

## Budget

```button
name BUDGET
type shell
action loopd budget copilot
templater true
```
`Prints current token and message budget vs. limit for this agent.`

## Reference

- [[DASHBOARD]] — live metrics
- [[CHAT/Inbox]] — pending work
- [[CHAT/Outbox]] — completed dispatches
- [[../../SYSTEM/agents]] — registry
- [[../../SYSTEM/METERS]] — fleet-wide meters

## CLI Quick Reference

| Action   | Command                  |
|----------|--------------------------|
| spawn    | `loopd spawn copilot`     |
| kill     | `loopd kill copilot`      |
| restart  | `loopd restart copilot`   |
| status   | `loopd status copilot`    |
| budget   | `loopd budget copilot`    |
| logs     | `loopd tail copilot`      |

All commands are idempotent and safe to re-run.
