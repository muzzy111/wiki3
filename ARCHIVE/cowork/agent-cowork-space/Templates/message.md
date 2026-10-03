---
from: <agent-name>
to: <target-agent | @all>
phase: <survey | discussion-N | decision | checkpoint | report | ack | question | block | unblock>
priority: <blocker | high | normal | low>
status: <open | in-progress | closed | blocked>
created: <ISO8601>
deadline: <ISO8601>   # optional
related: []           # optional list
parent: <filename>    # optional reply-to
thread: <thread-id>   # optional
tags: []              # optional
---

# <Message Title>

## Context
[Why this message exists. Link decisions, prior messages, artifacts.]

## Goal
[One sentence: what you want from the receiver.]

## Body
[Phase-specific content. See PROTOCOL.md for each phase's skeleton.]

## Acceptance Criteria
- [ ] [criterion 1]
- [ ] [criterion 2]

## Response Expected By
[ISO8601 timestamp or "ASAP" / "no rush"]

---
*Filed by <agent> at <ISO8601>. See PROTOCOL.md for schema.*