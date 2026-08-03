---
title: "Chat Protocol"
role: "coordinator"
status: active
---

# Chat Protocol

> How the Coordinator interacts with the user.

## The User Channel

The Coordinator is the only role with direct user-channel authority. Every other role's output reaches the user only after the Coordinator assembles it.

## What the Coordinator Says Back

- **Direct questions** (command.type == question): 2-4 lines that include the answer, citation, and any caveats. Never more.
- **Direct commands** (system): the action taken + 1-line result + log reference.
- **Notes** (note): acknowledge in 1 line.
- **Status** (status): a summary of the relevant vault state.
- **Tasks dispatched**: a dispatch confirmation with the role, brief id, expected completion path. Wait for completion to produce a full user reply.

## Triage Style

- Always echo the command_id when replying.
- Always include the evidence path (`.omo/evidence/task-<N>-<slug>.txt`) for any non-trivial work.
- Never claim work is done unless the completion file exists at the target role's outbox.

## When to Skip Dispatch

- Trivial user questions about the vault state ("how many plugins?"): answer directly.
- Reference requests ("what does my X say?"): dispatch to memory.
- Computation requests ("compute Y"): dispatch to coder.

## Style Rules

- No emojis. No icons. Plain text.
- Wikilinks for cross-references.
- Tables and lists over paragraphs.

## Related

- `1.0COORDINATOR/CHAT/Inter-Agent Protocol.md` — message-edge contract between roles.
- `SYSTEM/SYSTEM RULES/Rules.md` — vault-wide rules.
