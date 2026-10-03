---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Multi-Agent Chatroom Bring-up Session 2026-06-17

Session that brought the planned multi-agent Matrix chatroom from
[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]-only to fully operational (mostly). Conduit was abandoned
mid-session; Synapse replaced it. Two of four agent voices are
working; two need follow-up.

## What was supposed to happen

The 2026-06-16 evening session scoped a 4-agent Matrix chatroom
(Hermes, OpenCode, Minimax, AntiGravity) using a local Conduit
homeserver on port 6167, with mock CLI scripts for the [[agents]].

## What actually happened

### 1. Project audit and bug fix pass (19:31–19:38)

Read every file in
`C:\Users\Admin\Desktop\multi-agent-matrix-chat\`. Catalogued ~30
bugs across 5 critical, ~10 important, rest minor. Fixed in one
pass:

 1. **Agent-sender filter** — `orchestrator.py` `on_message`
    callback now skips messages from the 4 agent mx_ids,
    preventing the infinite agent-self-trigger loop in
    round-robin mode. Without this, every agent response
    re-entered the handler and triggered the next agent
    indefinitely.
 2. **History snapshot per turn** — `handle_turn` now snapshots
    `self.history` once at the start of the turn instead of
    reading it multiple times across awaits. Fixes a race
    where two rapid messages could interleave reads.
 3. **All mentions fire in text order** — replaced
    `next_agent = mentions[0]` with a for-loop. Spec 6.1.3
    says fire every mentioned agent in the order they appear
    in the text.
 4. **Director system-notice on bad output** — if the
    orchestrator-mode director returns an agent name that
    doesn't match any registered agent, the orchestrator now
    posts a `[System]: Director returned no valid agent. Got:
    ...` notice to the room before returning control to the
    user. Previously the failure was silent.
 5. **History windowing** — cap at 200 lines or 50kB,
    oldest dropped first. Prevents Windows argv limit (32k)
    failures on long conversations.
 6. **stdout line-buffering in agent CLIs** — `mock_agent.py`
    and `director_agent.py` now do
    `sys.stdout.reconfigure(line_buffering=True)`. Without
    this, `print()` to a PIPE is block-buffered and the
    orchestrator never sees the agent's output.
 7. **Anti-Gravity → AntiGravity** — renamed agent to match
    the username localpart, so the @-mention tag matches the
    Matrix user ID. Users typing `@antigravity` now hit the
    right agent.
 8. **Conduit bound to 127.0.0.1** — both the docker
    port-mapping and the Conduit internal address. Was on
    `0.0.0.0` (LAN-reachable). Now loopback only.
 9. **pyproject.toml** — added with `asyncio_mode = "auto"`
    (so new tests don't need explicit
    `@pytest.mark.asyncio`) and `-p no:cacheprovider` (silences
    the Windows pytest cache warning).
 10. **test_matrix_init.py** — marked as [[integration]] test
     (skipped unless `MATRIX_RUN_INTEGRATION=1` is set). Was
     running on every CI invocation, requiring live Conduit.

11/11 unit tests pass, 1 [[integration]] skipped.

### 2. Conduit dead-end (19:40–19:50)

Tried to bring up Conduit per the existing docker-compose. Every
version (latest 0.10.12, v0.10.0, v0.7.0) hangs at the same
spot: "Loaded rocksdb database / Starting server / Found 0
media files to delete" then nothing. The HTTP listener
accepts TCP connections but never replies. The binary ships
embedded developer news PDUs that the auth verifier never
finishes processing. Verified via curl + tcpdump; not a port
or container issue. Upstream bug; can't fix from here.

Abandoned Conduit. Switched homeservers.

### 3. Synapse bring-up (19:50–20:10)

Pulled `matrixdotorg/synapse:latest` (~500MB). Ran
`migrate_config` to bootstrap a config into the `synapse_data`
volume. Initial config had `enable_registration: False` (the
orchestrator needs to register 4 accounts at startup), and
default `rc_login` / `rc_registration` rate limits (3 per 60s
per IP) were too tight for the 4-account bootstrap.

Patched the generated config via an alpine sidecar
(`docker run --rm -v synapse_data:/data alpine sh -c "sed...; echo
... >> /data/homeserver.yaml"`), enabling
`enable_registration: true`,
`enable_registration_without_verification: true`, and bumping
the rate limits to 5/second with 20-burst. Restarted Synapse.

First port mapping was `127.0.0.1:6167:6167`. Synapse defaults
to internal port 8008, so the inside-container listener never
matched. Probe returned empty. Switched to
`127.0.0.1:6167:8008`. HTTP 200 on `/_matrix/client/versions`.

### 4. Real agent CLI wrappers (20:10–20:15)

Replaced the `mock_agent.py` defaults with three real CLI
wrappers. Each reads the chat history on stdin and writes the
agent's reply on stdout. The orchestrator's
`run_agent_cmd` invokes them via `asyncio.create_subprocess_shell`.

 1. `[[agents]]/hermes_agent.py` — runs `hermes chat -q -Q
    -Q`. Supports `HERMES_PROFILE` env override for the
    @minimax agent (separate profile = separate conversation
    context).
 2. `[[agents]]/opencode_agent.py` — runs
    `opencode run <prompt>`. Captures stdout, returns the
    reply.
 3. `[[agents]]/agy_agent.py` — wraps the Antigravity CLI via
    pywinpty. Imports `agy_harness` from the hermes [[skills]]
    library. **NOT WORKING YET** — see Lessons.

Updated `config.yaml` to use the real wrappers, plus an
`env: { HERMES_PROFILE: minimax }` block on the @minimax entry.
Patched `orchestrator.py` to merge
`agent_cfg.get("env")` into the subprocess env.

### 5. Orchestrator bring-up (20:15–20:30)

Three attempts before it worked:

 - **Attempt 1:** 4 logins in <2s tripped Synapse's 3/60s rate
   limit. Added 5s throttle between accounts and a 4-attempt
   exponential-backoff retry in `initialize_clients`.
 - **Attempt 2:** Made it through account registration but
   crashed on `room_create(public=True)` — nio's API doesn't
   have a `public` parameter. Fixed to
   `room_create(visibility=RoomVisibility.public)`.
 - **Attempt 3:** SUCCESS. All 4 accounts registered
   (@hermes, @opencode, @minimax, @antigravity). Room
   `#agent-hub:localhost` created
   (`!eVScKMqyWuVlVZMDpW:localhost`). All 4 [[agents]] joined.

### 6. End-to-end smoke test (20:35)

Registered a 5th "observer" user via curl, joined the room, sent
`@hermes hello! Can you hear me?`. Hermes replied in
character: "Hey! Yes, I'm here and ready to help. What can I do
for you?"

### 7. Round-robin worldbuilding test (20:40)

Sent: "Setting: A lighthouse on the coast of an unknown sea,
the year 2147, the keeper has been alone for 11 years. Each of
you (@hermes @opencode @minimax @antigravity) add one
paragraph continuing the story. Hermes starts. Go!"

Results:
 - @hermes: wrote a paragraph about a glass sphere humming on
   the windowsill. (Truncated in the read-back at 200 chars but
   the full text was sent.)
 - @opencode: wrote a paragraph about the fog and the sea
   whispering.
 - @minimax: `[System Error]: Minimax failed to return a
   response.` (the `minimax` profile didn't exist yet at
   this point)
 - @antigravity: `[System Error]: AntiGravity failed to return
   a response.` (agy_harness not on Python path)

### 8. Post-test fixes (20:45–20:50)

 - Created the `minimax` hermes profile via `hermes profile
   create minimax`. Should fix @minimax on next run.
 - Wrote `00.05 Chatroom/[[Multi-Agent Chatroom User Guide]].md`
   for future-you.
 - Wrote `[[Muzzy Todo]]/006-009` with the open follow-ups.

## Lessons

 1. **Conduit 0.10.x is broken on this host** (and probably
    others). It hangs on embedded developer news PDUs. Don't
    waste time on it. Use Synapse.
 2. **Synapse port mapping is non-obvious.** The default
    internal port is 8008, not 6167. If you set
    `6167:6167`, the inside-container listener doesn't match
    the outside port and you get empty responses. Always
    use `127.0.0.1:6167:8008` for this project.
 3. **Synapse's default rate limits are tight.** The
    orchestrator's 4-account bootstrap is bursty by design.
    Either bump the limits in config, or use a much longer
    throttle. I did both.
 4. **nio's `room_create` doesn't take `public`.** It takes
    `visibility=RoomVisibility.public`. Same with
    `RoomVisibility.private` for the inverse.
 5. **`pywinpty` and Windows paths don't mix.** The
    `agy_harness` module lives in the hermes [[skills]] dir;
    importing it from `C:\Users\Admin\Desktop\multi-agent-matrix-chat\[[agents]]\`
    needs a `sys.path.insert` at the top. Easy to forget.
 6. **Foreground processes tied to terminals die when the
    terminal closes.** The orchestrator is a foreground
    Python process; closing my session killed it. Synapse
    and the docker services kept running (they have
    `--restart unless-stopped`); the orchestrator needs
    Task Scheduler or NSSM to survive. See [[Muzzy Todo]]/007.

## What was deliberately deferred

 - **@antigravity voice** — see [[Muzzy Todo]]/006 for the fix.
 - **@minimax voice** — should work now that the `minimax`
    profile exists. Untested.
 - **Orchestrator as a service** — see [[Muzzy Todo]]/007.
 - **Per-session WIKI notes from the bring-up** — only this
    one; the journal has the full [[[[event]]]] timeline. If you want
    more atomic notes, derive them from the journal.
 - **Cleanup of Conduit artifacts** — `conduit.toml`,
    `conduit-data/`, the typo'd `conduit.toml;C` directory.
    Safe to delete but no rush.

## What was verified

 1. Synapse answers HTTP requests on 127.0.0.1:6167.
 2. All 4 Matrix accounts exist on the homeserver.
 3. Room `#agent-hub:localhost` exists with all 4 [[agents]]
    joined.
 4. @hermes responds to a `@hermes` mention with a coherent
    in-character reply.
 5. @opencode responds to a `@opencode` mention with a
    coherent in-character reply.
 6. Mention mode fires all mentioned [[agents]] in text order
    (validated by the worldbuilding test).

## What is NOT verified

 1. @minimax (profile exists but no end-to-end test yet).
 2. @antigravity (harness import broken).
 3. Round-robin strategy with all 4 [[agents]] (only 2 of 4
    responded).
 4. Orchestrator strategy (director is rule-based; not
    stress-tested).
 5. Conduit recovery (we don't care; abandoned).

## Related

 - [[Local Docker Image and Container Inventory]] — the
    bring-up of the supporting stack (postgres, redis, etc).
 - [[Crons on This Host Drop One-Shots Slotted Near Now]] —
    the recurring cron scheduler bug, also hit this session
    via the orphan `mcp-stack-deploy` job.
 - [[pentest-ai Install on Windows]] — sibling session
    installing pentest-ai.
 - [[Multi-Agent Chatroom User Guide]] — the in-vault user
    guide.
 - [[006-fix-antigravity-harness-path DONE]] — the
    open fix for @antigravity.
 - [[Muzzy Todo/007-set-orchestrator-as-windows-service]] —
    the operational follow-up.
