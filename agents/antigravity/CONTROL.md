---
title: "Antigravity — Control"
type: agent-control
agent: antigravity
created: 2026-08-03
loopd_endpoint: http://localhost:9101
---

# Antigravity — Control

> Inline controls for the **antigravity** agent. Each button shells out to `loopd`.
> State is observed in [[DASHBOARD]].

## Process Controls

```button
name START
type shell
action loopd spawn antigravity
templater true
```
`Spawns the antigravity agent as a persistent process. Idempotent — returns current PID if already running.`

```button
name STOP
type shell
action loopd kill antigravity
templater true
```
`Sends SIGTERM; loopd waits up to 10s for clean exit, then SIGKILL.`

```button
name RESTART
type shell
action loopd restart antigravity
templater true
```
`Kills the running process (if any), then spawns fresh. Pings /ready for confirmation.`

## Mailbox Controls

```button
name INBOX
type shell
action explorer "C:\Users\Admin\Desktop\Music\LOOP\agents\antigravity\CHAT\Inbox"
templater true
```
`Opens the agent's inbox directory in Windows Explorer.`

```button
name OUTBOX
type shell
action explorer "C:\Users\Admin\Desktop\Music\LOOP\agents\antigravity\CHAT\Outbox"
templater true
```
`Opens the agent's outbox directory in Windows Explorer.`

## Budget

```button
name BUDGET
type shell
action loopd budget antigravity
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
| spawn    | `loopd spawn antigravity`     |
| kill     | `loopd kill antigravity`      |
| restart  | `loopd restart antigravity`   |
| status   | `loopd status antigravity`    |
| budget   | `loopd budget antigravity`    |
| logs     | `loopd tail antigravity`      |

All commands are idempotent and safe to re-run.
