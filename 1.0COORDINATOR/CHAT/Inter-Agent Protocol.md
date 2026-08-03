---
title: "Inter-Agent Protocol"
role: "coordinator"
status: active
---

# Inter-Agent Protocol

> How the Coordinator and other roles pass work between each other.

## Message Edges

Every inter-agent message is a markdown file in one role's inbox and a corresponding completion in its outbox. No role writes into another role's folder directly.

```
User Command -> Coordinator
                    |
                    +-- (role key dispatch) --> <role>/CHAT/Inbox/<brief>.md
                                                       |
                                                       +-- <role>/CHAT/Outbox/<completion>.md
                                                                  |
                                                                  v
                                                       Coordinator assembles reply
                                                                  |
                                                                  v
                                                       User channel
```

## Brief Schema

A brief file at `<role>/CHAT/Inbox/<YYYY-MM-DD-HHMM> — <slug>.md`:

```yaml
---
brief_id: B-YYYYMMDD-NNN
command_id: CMD-YYYYMMDD-NNN          # echoes the source command
from_role: coordinator
to_role: <role key>
created: YYYY-MM-DD HH:MM
priority: normal
---

# Brief: <one-line summary>

## Context
<the user's full command body, trimmed>

## Acceptance Criteria
- [ ] <criterion 1>
- [ ] <criterion 2>

## Constraints
<hard rules; e.g. "no new dependencies" or "use existing tests">

## Evidence Path
.omo/evidence/<task>-<slug>.txt
```

## Completion Schema

A completion file at `<role>/CHAT/Outbox/<...>.md`:

```yaml
---
completion_id: C-YYYYMMDD-NNN
brief_id: B-YYYYMMDD-NNN              # echoes the source brief
command_id: CMD-YYYYMMDD-NNN
from_role: <role key>
completed: YYYY-MM-DD HH:MM
status: done                            # done | failed | partial
exit_code: 0
---

# Completion: <one-line summary>

## Result
<the role's result, in plain text or code blocks>

## Acceptance Criteria Check
- [x] <criterion 1>
- [x] <criterion 2>

## Evidence
<links to .omo/evidence/... files>

## Caveats
<anything the role wants the Coordinator to know before replying to user>
```

## Retry Loop

If the Coordinator sees `status: failed` or partial acceptance, it may write a follow-up brief with `status: retry` referencing the original brief id.

## Escalation

Three retries on the same brief => escalate to Memory Curator via review-request template.

## Why Files, Not Sockets

Files survive daemon crashes, work across machines (with the Drive sync), and are human-readable.

## Related

- `SYSTEM/agents.yaml:routing_defaults` — the routing logic.
- `1.0COORDINATOR/RULES/Routing Rules.md` — human-readable matrix.
- `SYSTEM/SYSTEM RULES/Rules.md` — vault-wide rules.
