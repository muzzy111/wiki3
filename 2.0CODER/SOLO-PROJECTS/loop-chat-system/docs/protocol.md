# LOOP Hermes Bus — Protocol Spec (mirror)

> Mirror of `1.0HERMES/CHAT/Chat Protocol.md` extended with the daemon
> runtime details. The single source of truth is the markdown file in the
> vault; this document exists so engineers can read the operational
> protocol without opening Obsidian.

## Topology

```
        user appends command to CHAT/INBOX.md
                       |
                       v
        hermes_bus daemon -- watches file
                       |
              +--------+--------+
              v                 v
       COMMAND PARSER     COMMAND PARSER
              |                 |
        route via     ->   write brief per agent
        router.py          CHAT/Inbox/<task-id>.md
              |
              v
        AGENT RUNNER (opencode run / agy --print)
              |
              v
        deliverable lands in SOLO-PROJECTS/<task-id>/
              |
              v
        MAVIS REVIEW (agy --print with JSON verdict prompt)
              |
              v
        hermes composes reply -> CHAT/OUTBOX.md
              |
              v
        index updated; command marked done
```

## Failure modes watched

| Mode | Hermes reaction |
|------|----------------|
| Silent agent (no STATUS in 10 min) | Hermes pings with `STATUS?` write; extends timeout |
| Conflicting outputs | Hermes arbitrates; logged in task card; escalates to user if needed |
| Review bypass | If OpenCode submits without review-ready stamp, Hermes holds OUTBOX reply until Mavis replies |
| Scope creep | Hermes notes expansion in task card; lets user know in OUTBOX |
| Secrets exposure | Anything resembling a credential in agent stdout is redacted to `[REDACTED_CREDENTIAL]` in OUTBOX and a `SYSTEM/STYTEM RECORD/` deviation entry is written |

## State transitions

| From | To | Trigger |
|------|----|---------|
| pending (INBOX.md) | processing | Hermes picks up the command |
| processing | open (task card) | TaskCard created at TASKS/STATUS/<task-id>.md |
| open | dispatched | Brief written into agent's CHAT/Inbox/<task-id>.md |
| dispatched | review-requested | Agent finishes work, marks brief review-ready |
| review-requested | done / needs-revision / escalated | Mavis verdict |
| done | (closed) | OUTBOX reply appended; index row marked done |

## Anti-patterns the daemon refuses

- **Editing a SYSTEM/LOCK/ file.** Lock check is enforced before any write.
- **Bypassing Mavis review.** The orchestrator always sends deliverables
  through Mavis for user-facing tasks (skip-review override only when
  `decision.skip_review` is True, which requires explicit `agent_target=hermes`
  or `type=system`).
- **Sending two-channel commands concurrently.** Latest wins; the older is
  marked `status: cancelled` in INBOX.
- **Forwarding an OUTBOX reply back to an agent.** Replies are end-of-flow.
