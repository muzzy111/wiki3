---
title: "007 — Set orchestrator as a Windows service"
type: todo
status: open
priority: high
created: 2026-06-18
modified: 2026-06-18
tags:
  - orchestrator
  - chatroom
  - task
  - terminal
---

# 007 — Set orchestrator as a Windows service

The orchestrator (`C:\Users\Admin\Desktop\multi-agent-matrix-chat\orchestrator.py`)
is a foreground Python process. It dies when the terminal that
started it closes. That means every reboot, every terminal close,
every accidental Ctrl-C kills the chatroom router.

The homeserver (synapse container) survives because Docker has
`--restart unless-stopped`. The orchestrator needs the same
treatment.

## What needs to happen

Three options, in order of preference:

### Option A — Windows Task Scheduler (recommended)

1. Open Task Scheduler (`taskschd.msc`).
2. "Create Task" (not "Create Basic Task").
3. General tab: name it "Matrix Chatroom Orchestrator", check
   "Run whether user is logged on or not".
4. Triggers tab: "At logon" (or "At startup" if you want it
   before login).
5. Actions tab: "Start a program":
   - Program: `C:\Users\Admin\Desktop\multi-agent-matrix-chat\venv\Scripts\python.exe`
   - Arguments: `orchestrator.py`
   - Start in: `C:\Users\Admin\Desktop\multi-agent-matrix-chat`
6. Settings tab: check "If the task fails, restart every 1 minute".
7. Save. Provide this password [xixi] when prompted.

### Option B — NSSM (Non-Sucking Service Manager)

If Task Scheduler's UI is annoying, NSSM wraps any exe as a
service:

```
choco install nssm
nssm install "MatrixChatroomOrchestrator" "C:\Users\Admin\Desktop\multi-agent-matrix-chat\venv\Scripts\python.exe" "orchestrator.py"
nssm set "MatrixChatroomOrchestrator" AppDirectory "C:\Users\Admin\Desktop\multi-agent-matrix-chat"
nssm set "MatrixChatroomOrchestrator" AppStdout "C:\Users\Admin\Desktop\multi-agent-matrix-chat\orchestrator.log"
nssm set "MatrixChatroomOrchestrator" AppStderr "C:\Users\Admin\Desktop\multi-agent-matrix-chat\orchestrator.log"
nssm start "MatrixChatroomOrchestrator"
```

### Option C — nohup-style backgrounding

Quick and dirty, no install. From git-bash:

```
cd "C:\Users\Admin\Desktop\multi-agent-matrix-chat"
nohup venv/Scripts/python.exe orchestrator.py > orchestrator.log 2>&1 &
disown
```

Survives terminal close, dies on reboot. Acceptable for "I want
to step away for a few hours."

## Verification

After [[setup]], close the terminal that started the orchestrator and
verify the chatroom still responds:

```bash
curl -s -H "Authorization: Bearer <token>" \
  "http://127.0.0.1:6167/_matrix/client/v3/rooms/!eVScKMqyWuVlVZMDpW:localhost/send/m.room.message" \
  -H "Content-Type: application/json" \
  -d '{"msgtype":"m.text","body":"@hermes service-test ping"}'
```

(Replace `<token>` and the room ID with your observer-account
token and the actual room ID — see the chatroom user guide for
how to find both.)

If @hermes replies, the orchestrator is alive.

## Related

- [[Multi-Agent Chatroom User Guide]] — section
  7 troubleshooting.
