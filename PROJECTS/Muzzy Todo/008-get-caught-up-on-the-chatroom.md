---
title: "008 — Get caught up on the chatroom"
type: todo
status: open
priority: high
created: 2026-06-18
modified: 2026-06-18
tags:
  - agent
  - synapse
  - hermes
  - room
---

# 008 — Get caught up on the chatroom

Hermes went off and did a bunch of work without you. Here's what
happened and what state things are in.

## What got built (2026-06-17 evening session)

 1. Identified that the Conduit homeserver (originally specified
    in the project [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]) is broken on this host — every version
    hangs on embedded developer news PDUs. Pivoted to Synapse.
 2. Patched Synapse config for open registration, no verification,
    and bumped rate limits so the orchestrator can register 4
    accounts at startup without tripping `rc_login`.
 3. Started Synapse on `127.0.0.1:6167`. Still running.
 4. Registered 4 agent accounts on Synapse:
    `@hermes:localhost`, `@opencode:localhost`,
    `@minimax:localhost`, `@antigravity:localhost`.
 5. Created room `#agent-hub:localhost` (id
    `!eVScKMqyWuVlVZMDpW:localhost`) with all 4 [[agents]] joined.
 6. Confirmed end-to-end: sent `@hermes hello` from a 5th
    "observer" user, got a reply.
 7. Ran a round-robin worldbuilding prompt. Hermes and OpenCode
    produced real in-character prose. Minimax and AntiGravity
    errored.

## What works

 - Synapse is up.
 - All 4 agent accounts exist.
 - Room exists, all 4 [[agents]] in it.
 - @hermes and @opencode respond to mentions.
 - Mention strategy works.
 - Round-robin works for the 2 functional [[agents]] (skips errors).

## What's broken or unfinished

 - **@antigravity** never spoke. Need to fix the
   `agy_harness` PYTHONPATH — see `[[muzzy todo]]/006`.
 - **@minimax** was failing because the `minimax` hermes profile
   didn't exist. I created it before exiting. Should work now
   but unverified.
 - **Orchestrator process died** when my terminal session ended.
   Synapse and the docker services kept running (they have
   `--restart unless-stopped`), but the Python router is gone.
   To resume: relaunch `orchestrator.py` and it'll pick up
   where it left off (accounts exist, room exists).
 - **Orchestrator as a service** not set up. Every terminal
   close kills it. See `[[muzzy todo]]/007`.

## Immediate steps to "get in there"

1. Open Element (or any Matrix client).
2. Point it at `http://localhost:6167`.
3. Register a 6th account (any name — `observer` is mine, the
   agent names are taken).
4. Join `#agent-hub:localhost`.
5. Send a smoke test:
   ```
   @hermes @opencode @minimax @antigravity — sound check
   ```
6. If @antigravity and @minimax don't respond, work through
   `[[muzzy todo]]/006` and re-test.

## Things to know about the codebase

The project lives at
`C:\Users\Admin\Desktop\multi-agent-matrix-chat\`. Key files:

 - `config.yaml` — strategy, room, agent credentials
 - `orchestrator.py` — the router daemon
 - `[[agents]]/hermes_agent.py` — Hermes CLI wrapper
 - `[[agents]]/opencode_agent.py` — opencode CLI wrapper
 - `[[agents]]/agy_agent.py` — agy wrapper (broken — see 006)
 - `docker-compose.yml` — Synapse container spec
 - `synapse-homeserver.yaml` — reference config (NOT live)
 - `conduit.toml` — dead artifact from the Conduit attempt

Bugs that were fixed during the bring-up (don't re-introduce):

 - Agent-sender message filter (was causing infinite agent loop)
 - stdout line-buffering in mock_agent / director_agent
 - mention detection order (config-order → text-order)
 - history windowing (200 lines / 50KB cap)
 - nio `room_create(public=...)` → `visibility=RoomVisibility.public`

## Long-term notes

The orchestrator's source code has gotten fairly complex. The
core loop is:

 1. `on_message` callback fires on every room [[[[event]]]].
 2. Filter out messages from the 4 agent users (otherwise
    they trigger each other infinitely).
 3. Append to in-memory `self.history` (capped).
 4. Snapshot history, decide next speaker per strategy, run
    agent subprocess, post response.

If you ever want to add a 5th agent, you need to [[update]]
`config.yaml` [[agents]] list AND add the new mx_id to the
`agent_mx_ids` filter set in `on_message` (lines around 117 in
`orchestrator.py`).
