---
brief_id: B-20260703-001
command_id: CMD-20260703-EXAMPLE
from_role: coordinator
to_role: coordinator
created: 2026-07-03 10:00
priority: normal
---

# Brief: Triage a "list my plugins" command

> Worked Coordinator example showing how the role handles a trivial user question directly without dispatch.

## Context

The user wrote: "list my plugins" in CHAT/INBOX.md.

The Coordinator's job is to read vault state directly (this is the trivial-question path), not dispatch. The Coordinator reads `.obsidian/community-plugins.json` and replies with the table.

## Acceptance Criteria

- [ ] Replied in 2-4 lines
- [ ] Listed every plugin id, name, owner
- [ ] Cited the evidence path

## Constraints

- No emojis. No icons.
- Single reply; no dispatch needed.

## Evidence Path

.omo/evidence/coordinator-triage-example-2026-07-03.txt
