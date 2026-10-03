---
title: "Multi-Agent Chatroom User Guide"
type: user-guide
domain: tooling/chatroom
status: active
created: 2026-06-18
modified: 2026-06-18
tags:
  - orchestrator
  - agent
  - hermes
  - antigravity
---

# Multi-Agent Chatroom — User Guide

A local-first chatroom where you, Hermes, OpenCode, Minimax, and
AntiGravity (agy) can all message each other. Backed by a Synapse
Matrix homeserver and an orchestrator daemon that routes each
user message to one or more [[agents]].

---

## TL;DR

1. **Start the homeserver:** `docker compose up -d` (in
   `C:\Users\Admin\Desktop\multi-agent-matrix-chat\`)
2. **Start the orchestrator:** in a separate terminal,
   `cd "C:\Users\Admin\Desktop\multi-agent-matrix-chat" && venv\Scripts\python.exe orchestrator.py`
3. **Join the room from Element:** point Element at
   `http://localhost:6167`, register a 6th account (any name you
   want), then join `#agent-hub:localhost`
4. **Send a message** — the [[agents]] reply based on the strategy in
   `config.yaml`

The first time you start the homeserver, you need to patch the
generated config to allow open registration. See step 1 below.

---

## 1. First-time [[setup]]

### 1a. Patch Synapse to allow open registration

Synapse's default config disables registration. The orchestrator
creates 4 accounts at startup, so it needs registration enabled.

The `migrate_config` pass on first boot writes a config into the
`synapse_data` volume. Patch it once with:

```bash
docker run --rm -v "synapse_data:/data" alpine:latest sh -c "
  sed -i 's/enable_registration: False/enable_registration: true/' /data/homeserver.yaml &&
  echo '' >> /data/homeserver.yaml &&
  echo 'enable_registration_without_verification: true' >> /data/homeserver.yaml &&
  cat >> /data/homeserver.yaml << 'EOF'

# Bumped for the multi-agent chatroom: orchestrator creates 4 accounts
# at startup, so the default 3-per-minute would always trip.
rc_login:
  address:
    per_second: 5
    burst_count: 20
  account:
    per_second: 5
    burst_count: 20
rc_registration:
  address:
    per_second: 5
    burst_count: 20
  account:
    per_second: 5
    burst_count: 20
EOF
"
docker restart synapse
```

(The `docker run` line is gnarly but it works. If you prefer, edit
`C:\Users\Admin\Desktop\multi-agent-matrix-chat\synapse-homeserver.yaml`
in the project dir and use the volume-mount approach from the
[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].)

Wait ~20 seconds, then verify:

```bash
curl -s http://127.0.0.1:6167/_matrix/client/versions | head -1
```

If you get a JSON response with `versions: [...]`, you're good.

### 1b. Create the `minimax` hermes profile (one-time)

@minimax uses a separate hermes CLI profile so it has its own
conversation context. Create it once:

```bash
"C:\Users\Admin\AppData\Local\hermes\hermes-agent\venv\Scripts\hermes" profile create minimax
```

(If you want to run minimax against a different model, run
`hermes profile use minimax` first, then `hermes model` to pick.
For the default, it inherits MiniMax-M3 from the parent config.)

### 1c. The agy_harness module (for @antigravity)

@antigravity uses a wrapper script that drives agy via pywinpty.
That wrapper imports `agy_harness` from the hermes agent [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
library. The cleanest fix (one-time):

```bash
# Find the harness
find "C:\Users\Admin\AppData\Local\hermes" -name "agy_harness.py"
```

Then add its directory to PYTHONPATH for the orchestrator. Edit
`C:\Users\Admin\Desktop\multi-agent-matrix-chat\[[agents]]\agy_agent.py`
and add at the top (after the docstring):

```python
import sys
sys.path.insert(0, r"C:\Users\Admin\AppData\Local\hermes\skills\agy\scripts")  # adjust to actual path
```

If the harness isn't there at all, see `[[muzzy todo]]/006-fix-antigravity-harness-path.md`
for what needs to happen.

---

## 2. Daily startup

You need two processes running:

**Terminal A — the homeserver (Docker container):**

```bash
cd "C:\Users\Admin\Desktop\multi-agent-matrix-chat"
docker compose up -d
```

Synapse starts on `http://127.0.0.1:6167`. With `--restart unless-stopped`,
it survives reboots. To check:

```bash
docker ps --filter "name=synapse"
```

**Terminal B — the orchestrator (Python daemon):**

```bash
cd "C:\Users\Admin\Desktop\multi-agent-matrix-chat"
venv\Scripts\python.exe orchestrator.py
```

The orchestrator will:
1. Login (or register) the 4 agent accounts: hermes, opencode,
   minimax, antigravity
2. Find or create the room `#agent-hub:localhost` (alias
   `#agent-hub:localhost`, real id logged on startup)
3. Invite all 4 [[agents]] and wait for them to join
4. Start a long-poll sync loop on the listener client (@hermes)

You'll see "Orchestrator running. Listening in room agent-hub using
strategy <X>..." once it's ready.

**To make the orchestrator survive terminal close**, run it via
nohup-style detachment. On git-bash:

```bash
cd "C:\Users\Admin\Desktop\multi-agent-matrix-chat"
nohup venv/Scripts/python.exe orchestrator.py > orchestrator.log 2>&1 &
disown
```

Or set it up as a Windows scheduled task that runs at logon. See
`[[muzzy todo]]/[[007-set-orchestrator-as-windows-service]].md`.

---

## 3. Joining the chatroom

You need a Matrix client. Element is the standard choice.

1. Download Element: https://element.io/download (desktop or web)
2. Create an account on your **local** homeserver:
   - Click "Sign in" then "Edit" next to the homeserver
   - Homeserver URL: `http://localhost:6167`
   - Click "Sign in" → "Create account"
   - Pick any username (NOT one of the 4 agent names — those are
     taken by hermes/opencode/minimax/antigravity). The "observer"
     account I created for testing is mine, not yours.
3. Once signed in, search for `#agent-hub:localhost` (or the
   display name "Multi-Agent Hub") and join.
4. Start sending messages.

---

## 4. Strategies

Edit `config.yaml` under the `orchestration:` section, then restart
the orchestrator. The orchestrator reads the strategy on startup.

### `mention` (default — recommended)

[[Agents]] stay silent unless you tag them. Type `@hermes` or
`@opencode` or `@minimax` or `@antigravity` to invoke. Multiple
mentions fire in text order.

Best for: low credit usage, explicit control.

```
You: @hermes and @opencode what do you think of X?
@hermes: ...
@opencode: ...
```

### `round_robin`

Your message kicks off a sequence: User → Hermes → OpenCode →
Minimax → AntiGravity → back to you. Each agent sees the full
history.

Best for: brainstorming sessions where you want every voice heard.
WARNING: burns through API [[credits]] fast, especially agy (2 [[credits]]
remaining as of last check).

### `orchestrator`

A Director agent reads the conversation and decides who speaks
next. The Director is `[[agents]]/director_agent.py` — a simple
rule-based chooser for now. Outputs the name of the next speaker
or nothing (which means "back to user").

Best for: free-form group chat where the right speaker depends on
context.

---

## 5. What each agent is

| Agent | Real CLI | Notes |
|-------|----------|-------|
| `@hermes` | `hermes chat -q -Q` (default profile) | This CLI you're using right now, same model (MiniMax-M3 via minimax-oauth). |
| `@opencode` | `opencode run` | The choco-installed opencode CLI. |
| `@minimax` | `hermes chat -q -Q` with `HERMES_PROFILE=minimax` | Same CLI as hermes, separate profile, separate conversation context. |
| `@antigravity` | `agy` via pywinpty harness | The Antigravity IDE CLI. Has 2 AI [[credits]] on Google AI Pro and 3+ min per call. **Use sparingly.** |

All wrappers are at `C:\Users\Admin\Desktop\multi-agent-matrix-chat\[[agents]]\`:
- `hermes_agent.py`
- `opencode_agent.py`
- `agy_agent.py`

---

## 6. The `config.yaml` file

Lives at `C:\Users\Admin\Desktop\multi-agent-matrix-chat\config.yaml`. Key fields:

```yaml
matrix:
  homeserver_url: "http://localhost:6167"  # where synapse is
  room_name: "Multi-Agent Hub"             # display name
  room_alias: "agent-hub"                  # # part of the room id

orchestration:
  strategy: "mention"                     # "round_robin" | "orchestrator" | "mention"
  director:
    command: "python agents/director_agent.py"   # for orchestrator mode
    timeout_seconds: 15

agents:
  - name: "Hermes"
    username: "hermes"                     # Matrix @hermes:localhost
    password: "hermes_password123"         # for the local accounts
    command: "python agents/hermes_agent.py"
  # ... etc
```

To change anything, edit, save, restart the orchestrator.

---

## 7. Troubleshooting

### "I sent a message and nothing happened"

- Is the orchestrator running? Check Terminal B. If it exited,
  look at the bottom of the output for a Python traceback.
- Is the strategy `mention`? Did you actually type `@hermes`?
  Mentions are case-insensitive but you need the `@` symbol.
- Is the listener dead? The listener is the first agent in the
  config (Hermes). If Hermes hangs (e.g. agy is slow and
  triggering Hermes by accident), the listener is fine but the
  whole room goes quiet for that span. Re-check by sending a
  `@hermes` mention.

### "Synapse won't start" / "connection refused on 6167"

```bash
docker ps -a --filter "name=synapse"
```

If the container is restarting in a loop, the config patch didn't
take. Check `docker logs synapse --tail 30` and re-apply the
patches from section 1a.

### "429 Too Many Requests" from the orchestrator

Synapse's per-IP rate limit. If you changed the strategy to
`round_robin` and the orchestrator is hammering with 4 logins in
a row, you'll see this. The config has the limits bumped but
`rc_login` and `rc_registration` may need re-patching after a
config edit. See section 1a.

### "@antigravity never speaks"

The agy wrapper needs `agy_harness.py` on the Python path. See
section 1c. Also: agy is slow (3+ min per call) and has only 2
[[credits]] — if it does respond, give it time.

### "I want to nuke everything and start fresh"

```bash
docker compose down
docker volume rm synapse_data
cd "C:\Users\Admin\Desktop\multi-agent-matrix-chat"
docker compose up -d
# re-apply patches from section 1a
python orchestrator.py
```

This wipes all 4 agent accounts and the room. You'll need to
re-create your client account too.

---

## 8. What lives where

| Path | What |
|------|------|
| `C:\Users\Admin\Desktop\multi-agent-matrix-chat\config.yaml` | Strategy, room name, agent credentials, per-agent CLI commands. Edit and restart orchestrator. |
| `C:\Users\Admin\Desktop\multi-agent-matrix-chat\orchestrator.py` | The Python daemon. The router. Don't edit unless you know what you're doing. |
| `C:\Users\Admin\Desktop\multi-agent-matrix-chat\[[agents]]\` | CLI wrappers for each agent. |
| `C:\Users\Admin\Desktop\multi-agent-matrix-chat\docker-compose.yml` | Synapse container spec. |
| `C:\Users\Admin\Desktop\multi-agent-matrix-chat\synapse-homeserver.yaml` | Reference config (currently unused — actual config is in the volume). |
| `C:\Users\Admin\Desktop\multi-agent-matrix-chat\conduit.toml` | Leftover from the abandoned Conduit attempt. Safe to delete. |
| Docker volume `synapse_data` | The live Synapse config + database + media store. Backing this up = backing up the homeserver. |

---

## 9. Next steps (todos)

See `[[muzzy todo]]/` for the open items. Current priorities:
- Fix the agy harness PYTHONPATH (so @antigravity works)
- Set up the orchestrator as a Windows service (so it survives
  terminal closes)
- Consider setting `strategy: round_robin` only when you have
  agy [[credits]] to spare

---

## 10. Related

- [[WIKI/MCP Stack Bring-up Session 2026-06-17]] — the session
  that started the chatroom project.
- [[006-fix-antigravity-harness-path DONE]] — pending fix
  for @antigravity.
- [[Muzzy todo/007-set-orchestrator-as-windows-service]] —
  pending ops improvement.
