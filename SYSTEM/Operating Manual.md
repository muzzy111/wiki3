---
title: "Operating Manual"
role: user-manual
audience: [operators, end-users]
version: "1.0"
---

# LOOP Operating Manual

This is the user-facing manual. It covers the four things you actually do with LOOP: start it, watch it, give it work, and steer a team. If you want to extend the system, read the Developer Guide instead.

## 1. Start the OS

LOOP runs as a supervisor process called `loopd`. You start it once and leave it running.

### Windows (PowerShell or git-bash)

```
loopd start
```

If `loopd` is not on your `PATH`, run it by absolute path:

```
"C:\loop-services\loopd\loopd.exe" start
```

### Check it is alive

```
loopctl status
```

You should see a green status line and a list of the ten agents. If a row is red, the agent failed its last health check.

### Where state lives

| Thing            | Path                                                |
|------------------|-----------------------------------------------------|
| Configuration    | `C:\loop-services\`                                 |
| Vault (GUI)      | `C:\Users\Admin\Desktop\Music\LOOP`                 |
| Chat mirror      | `C:\Users\Admin\Desktop\Music\LOOP\CHAT\`           |
| Team presets     | `C:\loop-services\teams\`                          |
| Agent registry   | `C:\loop-services\agents\`                         |
| Skill catalog    | `C:\loop-services\skills\`                         |
| MCP registry     | `C:\loop-services\mcp\`                            |
| Logs             | `C:\loop-services\loopd\logs\`                     |

### Stop the OS

```
loopd stop
```

Use `loopd restart` after a config change.

## 2. Use the Dashboard

The dashboard is the Obsidian vault at `C:\Users\Admin\Desktop\Music\LOOP`. Open it in Obsidian. The vault has three views you will use every day:

- **Home** - `SYSTEM/Index.md`. Status of all agents, recent dispatches, open tasks.
- **Kanban** - `TASKS/Kanban.md`. Live board of in-flight work.
- **Chat mirror** - `CHAT/<yyyy>/<mm>/`. Every session, one file per session.

The dashboard reads the supervisor's state files with DataviewJS. It is read-only by design. You steer by issuing commands from the terminal or from the chat pane, not by editing dashboard files.

## 3. Dispatch a Task

A task is a prompt aimed at a team. You can dispatch from three places.

### From `loopctl`

```
loopctl task --team osint --prompt "Verify the attached image's provenance."
loopctl task --team software-eng --prompt "Implement the rate limiter on branch feat/rate-limit."
```

### From the chat pane

Type `/dispatch <team> <prompt>` in the chat box. The chat pane sends the prompt to `loopd` on your behalf.

### From a webhook

POST to `http://localhost:7331/dispatch` with a JSON body:

```json
{
  "team": "deep-research",
  "prompt": "Research the current state of fusion energy policy in the US."
}
```

### What you get back

Every dispatch returns a `task_id`. Use it to:

- `loopctl task --show <task_id>` - inspect a single task
- `loopctl task --cancel <task_id>` - cancel a running task
- `loopctl task --tail <task_id>` - follow live output

## 4. Activate a Team

Teams are preconfigured. To activate one:

```
loopctl team activate osint
loopctl team activate software-eng
loopctl team activate agent-eng
loopctl team activate kb-creation
loopctl team activate deep-research
loopctl team activate global-outlook
```

To deactivate:

```
loopctl team deactivate osint
```

To list available teams and their members:

```
loopctl team list
```

The supervisor reads each preset from `C:\loop-services\teams\<name>.yaml` and binds the agents, skills, and MCPs declared there.

### Limits to remember

- Each agent can carry at most **3 skills** and at most **2 MCPs** at the same time.
- A team preset has between 3 and 5 members.
- If you ask for a team that requires an agent already at its skill limit, `loopd` will queue the request and warn you.

## 5. Read the Kanban

The kanban lives at `TASKS/Kanban.md`. Open it in Obsidian. It has four columns:

| Column      | Meaning                                                 |
|-------------|---------------------------------------------------------|
| Backlog     | Tasks accepted but not yet assigned                     |
| In Progress | At least one agent is working                           |
| Review      | Results returned, awaiting your read                    |
| Done        | Acknowledged or auto-archived after 24h                 |

Each card shows:

- the team
- the agent(s) currently working it
- the elapsed time
- a one-line excerpt of the prompt
- a `task_id` link to the full transcript

You can drag cards between columns. The supervisor treats column changes as acknowledgements only; the truth lives in `loopd`'s state, not in the vault.

### Live tail

To follow a card as it runs, click its `task_id`. You land in the chat mirror file for that session. New lines appear as the agents publish them.

## 6. Common Operations

### Inspect an agent

```
loopctl agent show hermes
```

Shows the agent's current skills, MCPs, last heartbeat, and recent tasks.

### Replace a skill on the fly

```
loopctl agent hermes skill replace web-search --with real-time-search
```

The change takes effect on the next task. In-flight tasks are unaffected.

### Pause and resume

```
loopd pause         # stops accepting new tasks
loopd resume        # accepts again
```

### Drain and shutdown

```
loopd drain         # lets in-flight tasks finish
loopd stop          # exits after drain
```

## 7. When Something Goes Wrong

| Symptom                          | First move                                          |
|----------------------------------|-----------------------------------------------------|
| Dashboard is stale               | `loopctl status` - is `loopd` running?              |
| Agent row is red                 | `loopctl agent restart <name>`                      |
| Task stuck in In Progress        | `loopctl task --show <id>`, then `--cancel`         |
| Webhook returns 5xx              | `loopctl logs --since 10m`                          |
| Vault will not open              | Check `SYSTEM/LOCK` is not held                     |
| Skill limit warning              | Replace a skill: `loopctl agent <name> skill ...`   |

## 8. Daily Routine

A reasonable day on LOOP looks like:

1. Open the vault. Read `SYSTEM/Index.md`. Scan the agent table.
2. Open the kanban. Clear Review cards. Move anything that should not have run to Backlog.
3. Issue two or three dispatches. Watch the kanban fill.
4. Before stopping work, run `loopd drain` and confirm zero in-flight tasks.

That is the operating loop.

## See Also

- `SYSTEM/Architecture.md`   - how it is built
- `SYSTEM/Developer Guide.md` - how to extend it
- `SYSTEM/ONBOARDING.md`      - first-run wizard
