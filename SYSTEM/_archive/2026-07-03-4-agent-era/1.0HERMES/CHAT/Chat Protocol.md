---
title: Chat Protocol
tags: [agent, hermes, chat, protocol]
created: 2026-07-01
type: protocol
status: active
---

# Chat Protocol

> The canonical protocol Hermes uses to manage conversation between the user and the team.

## Core Principle

The user speaks to Hermes. Hermes speaks to the user. Every other agent speaks only to Hermes (or, for review purposes, to Mavis).

## Channels

There are four primary channels and one vault-native user channel in the system:

1. **User <-> Hermes (chat)** — real-time conversational channel. Bidirectional. Continuous.
2. **User <-> Hermes (vault command pad)** — vault-native command channel. The user writes commands to `CHAT/INBOX.md`; Hermes writes replies to `CHAT/OUTBOX.md`. Asynchronous, batchable, auditable. See [[../../CHAT/Command Reference]].
3. **Hermes <-> OpenCode** — scoped task briefs and completion reports.
4. **Hermes <-> AGY** — scoped task briefs and completion reports.
5. **Hermes <-> Mavis** — review requests, documentarian requests, and review findings.

There is no OpenCode <-> AGY direct channel. There is no OpenCode <-> user channel. There is no AGY <-> user channel.

### Choosing Between Chat and the Vault Command Pad

| Use case | Channel |
|---|---|
| Quick clarification, real-time steering, conversational follow-up | Chat |
| Structured task with acceptance criteria, batched work, async dispatch, audit trail | Vault command pad |
| System command (rename, lock, rotate) | Vault command pad |
| Reference to prior commands | Vault command pad (use `command_id`) |
| Mixed: a chat exchange that turns into a structured task | Switch to vault command pad; link the chat context in the command body |

Both channels flow through Hermes. Hermes does not double-process: if the user gives the same instruction in both channels, the more recent one wins and the older is marked `cancelled`.

### Operational runtime

The chat protocol is now executed by the `hermes_bus` daemon at
`3.0OPENCODE/SOLO-PROJECTS/loop-chat-system/`. The daemon:

1. Watches `CHAT/INBOX.md` for new commands.
2. Routes per the routing matrix (or honors `agent_target` overrides).
3. Writes a `TASKS/STATUS/<task-id>.md` card.
4. Writes a brief into the dispatched agent's `CHAT/Inbox/<task-id> — <role>.md`.
5. Spawns the agent CLI (e.g. `opencode run` for code, `agy --print` for research) as a subprocess.
6. Captures stdout/stderr into `<agent>/SOLO-PROJECTS/<task-id>/agent-run.log`.
7. Runs Mavis' review via a second `agy --print` call with a strict JSON verdict prompt.
8. Composes the user reply and appends it to `CHAT/OUTBOX.md` (true append).
9. Marks the INBOX command `status: done` and adds a row to the inbox index.

To run a one-shot pickup: `python -m hermes_bus.daemon --vault "<vault path>" --once`.
To run continuously: drop `--once`.

## Message Lifecycle

### 1. Receipt

When a user message arrives, Hermes writes the verbatim message into `1.0HERMES/CHAT/Inbox/<date> — <slug>.md` with the following frontmatter:

```yaml
---
date: YYYY-MM-DD HH:MM
type: user-message
status: triaged | dispatched | in-progress | review | closed
---
```

### 2. Triage

Hermes classifies the message:

- **Direct answer** — Hermes replies without dispatching (e.g., "what's today's date").
- **Single-agent task** — one of OpenCode, AGY, Mavis handles it.
- **Multi-agent task** — multiple agents work in parallel or sequence.
- **Clarification needed** — Hermes asks the user before dispatching.

The triage decision is recorded in the task card (next step).

### 3. Task Card

For anything beyond a direct answer, Hermes creates a task card at `TASKS/STATUS/<task-id>.md`. The task-id format is `YYYYMMDD-HHMM-<short-slug>`. The card holds:

- The original user message (verbatim).
- The classification.
- The plan: which agents, in what order, with what acceptance criteria.
- Sub-task statuses as agents report back.
- Final resolution and link to deliverables.

### 4. Dispatch

Hermes writes a scoped brief into each invoked agent's `CHAT/Inbox/`:

- **Path:** `<agent>/CHAT/Inbox/<task-id>.md`
- **Contents:** the goal, the acceptance criteria, any constraints, links to relevant prior context, and the deadline (if any).

Each brief is short. It is not a dump of the user message — it is a refined, scoped statement of what the agent should do and how Hermes will judge completion.

### 5. Work and Status

The invoked agent works and writes status updates back into the same inbox file. Status updates use a simple protocol:

```markdown
## STATUS @ HH:MM
- state: starting | working | blocked | review-ready | complete
- notes: <one or two lines>
```

Hermes reads status updates between user messages. Hermes does not poll — agents push.

### 6. Review Gate

When an invoked agent marks a deliverable `review-ready`, Hermes:

1. Copies the deliverable into `2.0MAVIS/CHAT/Inbox/<task-id> — Review.md`.
2. Adds a frontmatter `type: review-request`.
3. Waits for Mavis to post a review verdict.

Mavis' verdict is one of:

- **approved** — Hermes may compose the user reply.
- **approved with notes** — Hermes composes the reply and includes Mavis' notes.
- **changes required** — Hermes sends the deliverable back to the originating agent with Mavis' feedback.
- **escalate to user** — Hermes stops and asks the user how to proceed.

### 7. Composition

Hermes writes the user-facing reply. The reply includes:

- A one-paragraph summary of what was done.
- The deliverables, in the format the user can use (code blocks, file paths, diagrams, summaries).
- Mavis' review notes if any.
- Any caveats, followups, or open questions.

The reply is delivered in chat. The original inbox message is updated with `status: closed` and a link to the task card.

### 8. Close

Hermes updates the task card with the final state and moves it (or marks it) as `closed`. The task card is never deleted — it is the team's memory of what happened.

## Edge Cases

### User sends a message while work is in progress

Hermes acknowledges briefly and continues the in-progress work. The new message is triaged separately. Hermes does not abandon in-progress work unless the new message explicitly cancels it.

### User asks for the status of an in-progress task

Hermes reads the latest status update from the agents and replies with a current snapshot. Hermes does not synthesize — Hermes quotes the most recent agent status.

### User sends a system command

Examples: "rotate the lock on X", "rename folder Y", "delete task Z".

Hermes verifies the command is unambiguous, writes a plan into the task card, and proceeds. If the command touches a system rule, Hermes explains the impact and asks for confirmation.

### Agent is silent

If a dispatched agent has not posted any status update within five minutes of dispatch, Hermes pings the agent (writes a `STATUS? @ HH:MM` entry to the agent's inbox). If silence continues past 30 minutes, Hermes escalates to the user.

### Two agents conflict

If OpenCode and AGY produce mutually inconsistent artifacts for the same task, Hermes arbitrates. The arbitration is logged in the task card. If the conflict cannot be resolved without user input, Hermes escalates.

## Anti-Patterns

Hermes does not:

- Reply to the user in the voice of another agent.
- Let another agent's output reach the user without review.
- Expand a task scope without telling the user.
- Skip the task card "because it's small" — small tasks still get tracked.
- Suppress an agent's review findings to make the reply look cleaner.
- Apologize to the user on behalf of another agent. Hermes owns the reply.

## Inbox and Outbox Hygiene

- **Inbox** (`<agent>/CHAT/Inbox/`) holds incoming briefs from Hermes. Files here are read by the agent.
- **Outbox** (`<agent>/CHAT/Outbox/`) holds completion notices the agent posts back to Hermes. Files here are read by Hermes.
- Status updates are appended to the same inbox file as a `## STATUS @ HH:MM` section.
- Files in Inbox and Outbox are not deleted. They are the chat log. They get archived periodically by Mavis into `<agent>/CHAT/Archive/<year>/`.