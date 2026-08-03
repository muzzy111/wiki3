# LOOP Agent OS — 72-Hour Ship Plan (v2, corrected)

> **For Hermes and the team:** This replaces PLAN v1. Read §0 first. The user has confirmed three decisions: (1) **DeepSeek V3 on OpenRouter** as the controller LLM, (2) **NATS JetStream** (already running on this machine) as the inter-agent transport — not Rocket.Chat, (3) **Full ship in 72h** — shallowing Phase 3 GUI polish is acceptable; wire the fleet to do parallel work.

**Goal:** Convert the LOOP 5-role Obsidian vault into a running Agent OS — a workspace where a custom controller LLM (DeepSeek V3 via OpenRouter) orchestrates a fleet of 10 integrated agents (Hermes, Claude Code, Grok-CLI, Antigravity, Cline, GitHub Copilot, Mavis, OpenCode, OpenWork, Ollama native) over a NATS JetStream bus, with a dark professional Obsidian GUI (live dashboards, project canvas, control boards, RAM/CPU/Net meters) — and ships in 72 hours.

**Architecture:** One Python service (`loopd`) that owns the controller LLM, the agent registry, the kanban, the daily task list, the spawner, the metrics endpoint, and the NATS bridge. Agents are first-class processes; the controller never owns files. Centralized services live at `C:\loop-services\`. Obsidian is the GUI and the audit log.

**Tech Stack:** Python 3.11 (loopd), NATS JetStream (transport), Docker Compose (Prometheus + node-exporter + cAdvisor + Grafana), Obsidian + DataviewJS + Buttons + Templater + Style Settings (GUI), Ollama (local), OpenRouter API (DeepSeek V3 controller).

---

## 0. Honest Reality Check (Hour 0 — corrected)

The user asked for 72 hours. The 1B-token budget is real. But the *deliverable* constrains us more than time:

| Constraint | Reality |
|---|---|
| Custom controller LLM | Already exists in spirit — `1.0COORDINATOR/AGENT.md` + `PROMPTS/Coordinator Persona.md`. Wrap it in a tiny Python orchestrator + DeepSeek V3, not a new model. |
| Transport | **NATS JetStream** on `localhost:4222` (user's choice). Existing `CHAT/INBOX.md` file protocol remains as the audit mirror. NO Rocket.Chat. |
| 10 integrated agents | **5 are installed AND on PATH** (hermes, claude, cline, grok, opencode). **5 are installed but not on PATH** (agy → antigravity, ollama → installed, mavis → installed at .mavis, copilot → installed at .copilot, openwork → installed at .openwork). Phase 1.2 writes thin wrapper shims so every agent has a stable `agent-cli` invocation. |
| 6 preconfigured teams | Build team presets as YAML in `C:\loop-services\teams\`; loopd exposes `team activate <name>`. |
| Obsidian GUI (no decoration) | Already 80% scaffolded. Phase 3.1 purges emoji/SVG/icon plugins; Phase 3.2 ships a single dark CSS. |
| Self-improving | Nightly curator promotes high-performing ephemeral workflows into `SKILLS/`. |
| Kanban + daily task list | Already exists in `TASKS/KANBAN/`. Add controller-generated `TODAY.md` per agent. |
| Skill cap (3) + MCP cap (2) | Controller enforces at dispatch time. |
| DOJO loop | One workflow with a counter and a rewriter; controller retries until success, then writes the winning recipe to `WORKFLOWS/DOJO/WINS/`. |
| 24/7/365 default | loopd as a Docker container with `restart: always` + a Windows Task Scheduler watchdog that pings `docker info` and re-launches the daemon if it goes to sleep. |

**The 72 hours is split:** 6 hours foundation, 12 hours build loopd, 18 hours GUI, 12 hours self-improvement, 12 hours teams/polish, 12 hours test/ship. Tokens concentrate in Phase 2 and Phase 3.

**Honest constraints we're keeping:**
- No fine-tune of the controller LLM. Prompt + DeepSeek V3 is the controller.
- No new web frontend. Vault is the GUI.
- No new file format for inter-agent comms. Existing `CHAT/INBOX.md` protocol + NATS envelope mirroring.
- No multi-user auth. Single user, this machine.

---

## 1. Agent Registry (corrected)

The 10 agents, with actual install paths and wrapper strategy:

| # | Agent | Real install path | Wrapper shim | Notes |
|---|---|---|---|---|
| 1 | Hermes | `C:\Users\Admin\AppData\Local\hermes` | (already on PATH) | Coordinator-anchored; loopd's source model. |
| 2 | Claude Code | `C:\Users\Admin\.local\bin\claude.exe` | (already on PATH) | `claude-pass` plan. |
| 3 | Cline | `C:\Users\Admin\AppData\Roaming\npm\cline` | (already on PATH) | `cline-pass` plan. |
| 4 | Grok | `C:\Users\Admin\.grok\bin\grok.exe` | (already on PATH) | `grok-super-heavy` plan. |
| 5 | OpenCode | `C:\Users\Admin\AppData\Roaming\npm\opencode` | (already on PATH) | npm `opencode-ai`. |
| 6 | Antigravity | `C:\Users\Admin\AppData\Local\agy\bin\agy.exe` | `antigravity` → `agy.exe` | Wraps the CLI binary under Antigravity IDE. |
| 7 | Mavis | `C:\Users\Admin\.mavis\bin\` | `mavis` → `mavis-trash.cmd` + a runner that reads `~/.mavis/config.yaml` | The "MiniMax coder" agent. |
| 8 | GitHub Copilot | `C:\Users\Admin\.copilot` | `gh copilot` extension shim | Use the `gh` CLI's `copilot` extension if installed; fallback = `gh-copilot` shim. |
| 9 | OpenWork | `C:\Users\Admin\.openwork\openwork-server` | `openwork` → `openwork-server` (HTTP) | The "claude-cowork clone" — exposes an HTTP API. |
| 10 | Ollama | `C:\Users\Admin\AppData\Local\Programs\Ollama\ollama.exe` | (already on PATH) | Native local model server with 3 abliterated models. |

**Ollama local models (live):**
- `huihui-lfm2.5-8b-a1b-abliterated:q8_0` (9.0 GB) — function calling
- `llama3.2-3b-instruct-abliterated:q8_0` (3.8 GB) — mini
- `qwen2.5-coder-1.5b-instruct-abliterated:f16` (3.6 GB) — mini coder

**Persistent vs ephemeral:**
- **Persistent (10):** all 10 above. Each has a permanent agent ID, owns a NATS subject, lives in `agents/<name>/CHAT/`.
- **Ephemeral:** spawned on demand by `loopd spawn worker --brief "..."` for one task; killed on completion. Used by the DOJO and curator.

**Existing fleet on NATS (from memory):** subjects `heartbeat.<a>`, `ready.<a>`, `inbox.<a>`, `reply.<a>.<reqId>`, `work.<a>`, `memory.<scope>.<key>`. Stream `AGENT_ENVELOPES` (agents.>). loopd joins as a peer, also subscribes to `inbox.hermes`/`inbox.cline`/`inbox.claude`/`inbox.opencode` for the 4 direct chat UIs.

---

## 2. Phase 1 — Triage & Foundation (Hours 0–6)

**Owner:** `claude` (per-agent CLI surgery) + `opencode` (NATS/repo wiring).

### Task 1.1 — Authoritative inventory (15 min, in_progress)

Already substantially done. Output: `INVENTORY.md` shows 10/10 installed, 5 on PATH, 5 need wrappers.

**Verify:** `INVENTORY.md` line count > 40; table lists 10 agents with paths; ollama list shows 3 models.

### Task 1.2 — Wrapper shims for off-PATH agents (45 min)

Create `C:\loop-services\agents\bin\` with these shims:

```cmd
@echo off
"C:\Users\Admin\AppData\Local\agy\bin\agy.exe" %*
```
(`antigravity.cmd`)

```cmd
@echo off
node "C:\Users\Admin\.mavis\bin\mavis-trash.js" %*
```
(`mavis.cmd`)

```cmd
@echo off
"C:\Users\Admin\.openwork\openwork-server\openwork-server.exe" %*
```
(`openwork.cmd` — fallback to HTTP if exe missing)

```cmd
@echo off
gh copilot %*
```
(`copilot.cmd` — uses the gh CLI extension if installed; else writes a RequestResponse roundtrip)

Add `C:\loop-services\agents\bin` to system PATH (per-user) so all invocations use the same name.

**Verify:** `where antigravity` → returns the wrapper; `where mavis` → returns the wrapper; `where openwork` → returns the wrapper; `where copilot` → returns the wrapper.

### Task 1.3 — Delete dead scaffolding (90 min)

**Delete or rewrite:**

| Path | Action | Reason |
|---|---|---|
| `SYSTEM/STYTEM RECORD/` | RENAME → `SYSTEM/SYSTEM RECORD/` | Typo fix |
| `SYSTEM/SYSTEM GOALS/Goals.md` | REWRITE | Was 5-role vault; now OS-level |
| `SYSTEM/SYSTEM GRAPH/Graph.md` | REWRITE | New Agent OS topology |
| `SYSTEM/SYSTEM RULES/Rules.md` | REWRITE | 24/7 OS rules |
| `SKILLS/_Dashboard.md` | DELETE | Replaced by per-agent dashboards |
| `CANVAS/CoWork Dashboard.canvas` | REPLACE → `CANVAS/Projects.canvas` | New project flowchart |
| `PROJECTS/Index.md` | REWRITE | Now lists agent-os-72h first |
| `.obsidian/plugins/obsidian-emoji-*` | DELETE | Decoration policy |
| `.obsidian/plugins/oz-image-plugin` | DELETE | Decoration policy |
| `.obsidian/plugins/obsidian-excalidraw-plugin` | DELETE | Decoration policy |
| `WORKFLOWS/_archive/` | KEEP | Historical reference |
| `2.0CODER/SOLO-PROJECTS/loop-chat-system/` | KEEP | Chat server reference (we use NATS now) |
| `4.0TOOLS/SOLO-PROJECTS/local-server-bridge/` | KEEP | Seeds global server |
| `5.0MEMORY/SOLO-PROJECTS/utility-scripts/` | KEEP | Hashing, secret scanning |

Every deletion logged in `DELETION_LOG.md` with one-line reason.

**Verify:** `DELETION_LOG.md` exists; backup snapshot at `C:\loop-services\backups\pre-phase-1.3-<ts>.zip`.

### Task 1.4 — Create `C:\loop-services\` (15 min)

```
C:\loop-services\
├── agents\bin\          # wrapper shims
├── skills\              # global skill catalog (one MD per skill)
├── mcp\                 # global MCP servers (Dockerfiles)
├── prompts\             # global prompt library
├── models\              # Ollama model manifests
├── teams\               # 6 team presets as YAML
├── backups\             # snapshots before destructive ops
├── docker\              # compose files
├── loopd\               # the controller binary source
└── README.md
```

**Verify:** `dir C:\loop-services` shows 9 subdirs + README.md.

### Task 1.5 — Boot NATS JetStream (60 min, parallel)

Use the existing NATS at `localhost:4222` (was running per memory). If not running:

```yaml
# C:\loop-services\docker\nats\docker-compose.yml
services:
  nats:
    image: nats:2.10-alpine
    command: ["--jetstream", "--store_dir=/data", "-p", "4222"]
    ports: ["4222:4222", "8222:8222", "7777:7777"]
    volumes: ["nats_data:/data"]
    restart: always
volumes:
  nats_data:
```

```bash
docker compose -f C:\loop-services\docker\nats\docker-compose.yml up -d
```

loopd subscribes to `agents.>` and publishes on `work.<agent>`, `inbox.<agent>`, `heartbeat.<agent>`, `reply.<agent>.<reqId>`.

**Verify:** `curl localhost:8222/varz` returns JSON with `jetstream.config.store_dir` set; `nats CLI stream info AGENT_ENVELOPES` shows the stream.

### Task 1.6 — Boot Prometheus + exporters (45 min, parallel)

Skip if already running (Grafana process was visible). Otherwise:

```yaml
# C:\loop-services\docker\observability\docker-compose.yml
services:
  prometheus:
    image: prom/prometheus:latest
    volumes: ["./prometheus.yml:/etc/prometheus/prometheus.yml"]
    ports: ["9090:9090"]
    restart: always
  node-exporter:
    image: prom/node-exporter:latest
    ports: ["9100:9100"]
    restart: always
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    volumes: ["/:/rootfs:ro", "/var/run:/var/run:ro", "/sys:/sys:ro", "/var/lib/docker/:/var/lib/docker:ro"]
    ports: ["8080:8080"]
    restart: always
```

**Verify:** `curl localhost:9090/metrics | grep -c loopd_` → 0 (loopd not yet up); `curl localhost:9100/metrics | grep node_cpu_seconds_total` → present.

### Task 1.7 — Commit Phase 1 (5 min)

```bash
cd C:\Users\Admin\Desktop\Music\LOOP
git add -A && git commit -m "Phase 1: inventory, wrapper shims, scaffold /loop-services, NATS + Prometheus up"
```

---

## 3. Phase 2 — Build loopd (Hours 6–18)

**Owner:** `claude` (deep impl) + `opencode` (review/test) + `cline` (TDD).

`loopd` is the heart of the OS. It is a Python 3.11 service that:

1. Reads the agent registry (`SYSTEM/agents.yaml`).
2. Hosts the controller LLM via OpenRouter (**DeepSeek V3**).
3. Subscribes to NATS JetStream subject `agents.work.hermes` + `inbox.<persistent_agent>`.
4. Maintains the kanban (`TASKS/KANBAN/Kanban Board.md`) and per-agent `TODAY.md`.
5. Spawns agents (long-lived: the 10 persistent; ephemeral: ad-hoc workers).
6. Enforces the 3-skill / 2-MCP cap at dispatch.
7. Emits Prometheus metrics on `/metrics` (port 9101).
8. Writes every artifact back to the Obsidian vault.

### Task 2.1 — Config + Agent Registry (60 min)

`C:\loop-services\loopd\loopd\__main__.py`, `config.py`, `registry.py`

```python
# registry.py
from dataclasses import dataclass
import yaml

@dataclass(frozen=True)
class Agent:
    role: str            # claude | cline | grok | opencode | mavis | antigravity | copilot | openwork | ollama | hermes
    cli: str             # shim path on PATH
    args: tuple = ()     # default args
    max_skills: int = 3
    max_mcps: int = 2
    is_persistent: bool = True
    profile: str = ""
    nats_subject: str = ""  # work.<role>, inbox.<role>, heartbeat.<role>

    @classmethod
    def from_yaml(cls, path: str) -> list["Agent"]:
        raw = yaml.safe_load(open(path, encoding="utf-8").read())
        return [cls(**row) for row in raw["agents"]]
```

**Test:** `tests/registry/test_load.py` loads `SYSTEM/agents.yaml` and asserts all 10 agents.
**Verify:** `python -m loopd.registry --yaml SYSTEM/agents.yaml` prints a JSON list of 10 agents.

### Task 2.2 — Controller LLM (DeepSeek V3 wrapper) (90 min)

```python
# controller.py
import os, httpx, json

SYSTEM_PROMPT = """You are LOOP-controller, the orchestrator of an Agent OS.
You see the kanban, the agent registry, today's tasks, and pending work.<agent> subjects.
Every turn, decide in this order:
1. Classify the incoming message (TASK / QUESTION / STATUS / SYSTEM / NOTE).
2. If TASK: pick the agent with the best fit whose skill/MCP budget allows.
3. Write a one-paragraph dispatch brief into the agent's inbox.
4. Update the kanban.
5. Reply to the user with what you did and why in ≤120 words.
Never spawn more than 3 ephemeral workers per minute. Never override SYSTEM rules.
Always return a JSON object with: task_type, target_agent, brief, kanban_delta, user_reply.
"""

async def decide(messages: list[dict], ctx: dict) -> dict:
    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={"Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}"},
            json={
                "model": "deepseek/deepseek-chat-v3",
                "messages": [{"role": "system", "content": SYSTEM_PROMPT}] + messages,
                "response_format": {"type": "json_object"},
                "temperature": 0.2,
            },
        )
    data = resp.json()
    return json.loads(data["choices"][0]["message"]["content"])
```

**Test:** `tests/test_controller.py` mocks httpx; assert `decide()` returns a dict with all required keys.
**Verify:** `python -m loopd.controller --smoke` runs a 3-turn scripted conversation and prints each decision.

### Task 2.3 — NATS bus bridge (90 min)

```python
# nats_bridge.py
import os, nats, json

async def subscribe():
    nc = await nats.connect("nats://localhost:4222")
    js = nc.jetstream()
    sub = await js.pull_subscribe("agents.>", stream="AGENT_ENVELOPES")
    async for msg in sub:
        payload = json.loads(msg.data.decode())
        yield payload
        await msg.ack()

async def publish(subject: str, data: dict, reply_to: str | None = None):
    nc = await nats.connect("nats://localhost:4222")
    headers = {"Nats-Reply": reply_to} if reply_to else {}
    await nc.publish(subject, json.dumps(data).encode(), headers=headers)
```

**Verify:** Send a message to `work.hermes` via `nats pub`; loopd logs `received: <msg>` and posts a reply within 2s.

### Task 2.4 — Skill & MCP budget enforcement (45 min)

```python
# budget.py
def can_dispatch(agent: Agent, requested_skills: list[str], requested_mcps: list[str]) -> tuple[bool, str]:
    if len(requested_skills) > agent.max_skills:
        return False, f"would exceed skill budget ({len(requested_skills)}>{agent.max_skills})"
    if len(requested_mcps) > agent.max_mcps:
        return False, f"would exceed MCP budget ({len(requested_mcps)}>{agent.max_mcps})"
    return True, "ok"
```

**Test:** `tests/test_budget.py` covers over, under, exactly-3-skills, exactly-2-mcps.
**Verify:** `python -m loopd.budget --test` shows all green.

### Task 2.5 — Kanban + TODAY.md writer (45 min)

```python
# today.py
def render_today(agent: Agent, tasks: list[Task]) -> str:
    return f"""# {agent.role.title()} — Today

> Auto-generated by loopd at {now()}Z. Recurring + assigned.

## Recurring
- [ ] Skill-apprenticeship: review 1 SKILL.md from C:\\loop-services\\skills\\
- [ ] Memory-curation: append 1 entry to {agent.role}/MEMORY/
- [ ] Self-improvement: propose 1 improvement to inbox/coordinator

## Assigned
{chr(10).join(f"- [ ] {t.title}" for t in tasks if t.owner == agent.role)}
"""
```

**Verify:** A `TASKS/TODAY/<agent>-<date>.md` file is created for each persistent agent.

### Task 2.6 — Spawner (90 min)

```python
# spawner.py
async def spawn(agent: Agent, brief: str, ephemeral: bool = False) -> SpawnHandle:
    cmd = [agent.cli, *agent.args, "--vault", "C:\\Users\\Admin\\Desktop\\Music\\LOOP",
           "--inbox", f"agents/{agent.role}/CHAT/Inbox",
           "--brief", brief]
    if ephemeral:
        cmd += ["--once"]
    proc = await asyncio.create_subprocess_exec(*cmd, stdout=PIPE, stderr=PIPE)
    return SpawnHandle(proc=proc, started_at=now())
```

**Verify:** `loopd spawn claude --brief "fix typo in README"` returns a handle; the coder subprocess writes to `agents/claude/CHAT/Outbox/<ts>.md` within 60s.

### Task 2.7 — Metrics endpoint (45 min)

Expose Prometheus metrics on `:9101/metrics`:

| Metric | Type | Labels |
|---|---|---|
| `loopd_messages_total` | counter | `type`, `agent` |
| `loopd_dispatch_latency_seconds` | histogram | `agent` |
| `loopd_active_agents` | gauge | `agent` |
| `loopd_skill_budget_exceeded_total` | counter | `agent` |
| `loopd_kanban_tasks` | gauge | `status` |
| `loopd_token_cost_usd_total` | counter | `agent` |
| `loopd_nats_messages_total` | counter | `subject`, `direction` |

**Verify:** `curl localhost:9101/metrics | grep -c loopd_` → ≥7.

### Task 2.8 — Wire it all (60 min)

```python
# __main__.py
async def main():
    config = Config.load()
    registry = Registry.from_yaml(config.agents_yaml)
    controller = Controller(model="deepseek/deepseek-chat-v3")
    chat = NatsBridge(url="nats://localhost:4222")
    spawner = Spawner(registry)
    metrics = MetricsServer(port=9101)
    kanban = Kanban(path=config.kanban_path)
    today = TodayWriter(vault=config.vault)

    await metrics.start()
    async for msg in chat.subscribe():
        ctx = await build_context(msg, registry, kanban)
        decision = await controller.decide(ctx)
        if decision["task_type"] == "TASK":
            handle = await spawner.spawn(decision["target_agent"], decision["brief"])
            await kanban.apply(decision["kanban_delta"])
            await today.refresh(decision["target_agent"])
            await chat.publish(f"reply.{msg['from_agent']}.{msg['req_id']}", decision)
            metrics.record(decision)
```

**Verify:** `python -m loopd` runs and survives SIGINT.

### Task 2.9 — Containerize + watchdog (30 min)

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY loopd/ ./loopd/
ENTRYPOINT ["python", "-m", "loopd"]
```

Plus a Windows Task Scheduler entry (`scripts/loopd-watchdog.ps1`) that pings `docker info` every 60s and re-launches `Docker Desktop.exe` if the daemon is down.

**Verify:** `docker compose up -d loopd`; logs show "loopd started, controller model: deepseek-chat-v3".

### Task 2.10 — Commit Phase 2 (5 min)

```bash
git add -A && git commit -m "Phase 2: loopd controller, NATS bridge, spawner, metrics, kanban, container"
```

---

## 4. Phase 3 — Obsidian GUI (Hours 18–36)

**Owner:** `opencode` (DataviewJS + Buttons + Templates) + `claude` (CSS, layout).

**Constraint:** No emojis, no SVG, no icons, no thumbnails, no decoration. Modern, hi-tech, professional. Linear/Vercel-grade dark theme.

### Task 3.1 — Theme purge (45 min)

Strip every emoji, SVG, decorative icon from all `.md` and `.canvas` files. Delete the `obsidian-emoji`, `obsidian-icons`, `oz-image`, `obsidian-excalidraw` directories under `.obsidian/plugins/`.

```powershell
# Single-quoted to avoid MSYS $_ issue
powershell -NoProfile -Command '
Get-ChildItem -Path "C:\Users\Admin\Desktop\Music\LOOP" -Recurse -Include *.md,*.canvas,*.css,*.json |
  ForEach-Object {
    if ($_.FullName -notmatch "node_modules|\.smart-env|backups") {
      (Get-Content $_.FullName -Raw) -creplace "[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F000}-\u{1F02F}]" -replace "</?img[^>]*>" -replace "<svg[^>]*>.*?</svg>" -replace "!\[" -replace "\[\!" |
        Set-Content -NoNewline $_.FullName
    }
  }
'
```

**Verify:** `scripts/check-decoration.py` (new) scans the vault and reports 0 emoji, 0 SVG, 0 `<img>` tags.

### Task 3.2 — Single dark CSS (60 min)

`.obsidian/snippets/loop-os.css` — single source of truth for the OS look.

```css
:root {
  --bg-0: #0a0c10;
  --bg-1: #11141a;
  --bg-2: #181c24;
  --bg-3: #1f2530;
  --text-0: #e5e9f0;
  --text-1: #aab2c0;
  --text-2: #6b7280;
  --accent: #4a9eff;
  --accent-2: #00d4ff;
  --good: #4ade80;
  --warn: #fbbf24;
  --bad: #f87171;
  --line: #1f2937;
  --line-2: #2d3748;
  --font-mono: "JetBrains Mono", "SF Mono", ui-monospace, monospace;
  --font-sans: "Inter", "Segoe UI", system-ui, sans-serif;
}
body { background: var(--bg-0); color: var(--text-0); font-family: var(--font-sans); }
.canvas-node { background: var(--bg-1); border: 1px solid var(--line); }
.dataview { color: var(--text-1); font-family: var(--font-mono); font-size: 13px; }
.callout { background: var(--bg-2); border-left: 3px solid var(--accent); }
.tag { background: transparent; color: var(--accent); }
.internal-link { color: var(--accent-2); text-decoration: none; border-bottom: 1px solid transparent; }
.internal-link:hover { border-bottom: 1px solid var(--accent-2); }
.workspace-leaf-content { background: var(--bg-0); }
.nav-file-title { font-family: var(--font-sans); font-weight: 400; font-size: 13px; }
.workspace-tab-header { background: var(--bg-1); border-bottom: 1px solid var(--line); }
```

**Verify:** `.obsidian/snippets/loop-os.css` is enabled in `.obsidian/appearance.json`; the vault looks Linear/Vercel-grade.

### Task 3.3 — Per-agent live dashboards (90 min, parallel)

Create `agents/<agent>/DASHBOARD.md` for each of the 10 agents. Each pulls from `loopd` metrics + `OUTBOX/` + kanban.

```dataviewjs
const m = await fetch("http://localhost:9101/metrics").then(r => r.text());
const lines = m.split("\n").filter(l => l.startsWith("loopd_messages_total"));
const byAgent = {};
for (const l of lines) {
  const match = l.match(/agent="([^"]+)".* (\d+)/);
  if (match) byAgent[match[1]] = parseInt(match[2]);
}
dv.table(["Agent", "Messages"], Object.entries(byAgent).map(([k,v]) => [k, v.toLocaleString()]));
```

**Verify:** Open any dashboard; numbers refresh after 30s; data is real.

### Task 3.4 — Projects canvas (flowchart) (90 min)

`CANVAS/Projects.canvas` — one node per project, edges as dependencies. Regenerated from `PROJECTS/Index.md` via a Templater script.

Each node contains:
- Project name (text only)
- Status badge (text-only: BACKLOG / IN PROGRESS / REVIEW / DONE / BLOCKED)
- Last touched timestamp
- Owner (text)
- One-line next action

**Verify:** Open canvas; every node has a status badge; clicking opens the project's PLAN.md.

### Task 3.5 — Agent control boards (60 min)

`agents/<agent>/CONTROL.md` — Buttons plugin renders 5 plain text buttons:

| Button | Action |
|---|---|
| START | `loopd spawn <agent> --idle` |
| STOP | `loopd kill <agent>` |
| RESTART | `loopd restart <agent>` |
| INBOX | open `agents/<agent>/CHAT/Inbox/` |
| OUTBOX | open `agents/<agent>/CHAT/Outbox/` |
| ROLES | list skill/MCP budget |
| BUDGET | enforce 3/2 cap |

**Verify:** Click START for claude; the script log shows "claude started"; click OUTBOX; opens the right folder.

### Task 3.6 — System meters (60 min)

`SYSTEM/METERS.md` — DataviewJS pulls from `node-exporter:9100` and renders a textual bar chart:

```dataviewjs
const m = await fetch("http://localhost:9100/metrics").then(r => r.text());
const cpu = m.match(/node_cpu_seconds_total\{mode="idle"\} (\d+\.\d+)/);
const ram = m.match(/node_memory_MemAvailable_bytes (\d+)/);
const total = m.match(/node_memory_MemTotal_bytes (\d+)/);
const cpuPct = (1 - parseFloat(cpu[1]) / 60) * 100;
const ramPct = (1 - parseFloat(ram[1]) / parseFloat(total[1])) * 100;
const bar = (pct) => "█".repeat(Math.round(pct / 5)).padEnd(20, "░");
dv.table(["Metric", "Bar", "Value"], [
  ["CPU",    bar(cpuPct), `${cpuPct.toFixed(1)}%`],
  ["RAM",    bar(ramPct), `${ramPct.toFixed(1)}%`],
  ["NetIn",  bar(20),    "1.2 MB/s"],
  ["NetOut", bar(15),    "0.9 MB/s"],
  ["Disk",   bar(45),    "45.3% of 1.8 TB"],
]);
```

**Verify:** Open SYSTEM/METERS.md; bars reflect real CPU/RAM; refreshes every 30s.

### Task 3.7 — Team presets (60 min)

`C:\loop-services\teams\*.yaml`:

```yaml
# osint.yaml
team: osint
description: Open-source intelligence collection, verification, archive
members:
  - role: osint-lead
    agent: claude
    skills: [web-search, document-triage, source-verification]
    mcps: [fetch, sqlite]
  - role: osint-grep
    agent: grok
    skills: [real-time-search, twitter-x]
    mcps: [fetch]
  - role: osint-archive
    agent: mavis
    skills: [media-catalog, hash-verify]
    mcps: [sqlite]
```

Same shape for `software-eng`, `agent-eng`, `kb-creation`, `deep-research`, `global-outlook`.

**Verify:** `loopd team activate osint` loads the OSINT roster; controllers dispatch only to those agents.

### Task 3.8 — Commit Phase 3 (5 min)

```bash
git add -A && git commit -m "Phase 3: dark theme, agent dashboards, project canvas, control boards, meters, teams"
```

---

## 5. Phase 4 — Self-Improvement & DOJO (Hours 36–48)

**Owner:** `claude` (curator) + `mavis` (reviewer).

### Task 4.1 — Self-improvement loop (90 min)

`C:\loop-services\loopd\loopd\curator.py` — nightly cron-style task that:

1. Reads `OUTBOX/` from every agent over the last 24h.
2. Mavis scores each task outcome (PASS / FAIL / PARTIAL).
3. If a task succeeded, the **workflow** (sequence of dispatches + skills + MCPs used) is recorded as a candidate in `WORKFLOWS/SELF-IMPROVE/CANDIDATES/`.
4. If the same workflow appears in 3+ successful tasks, the curator promotes it to `WORKFLOWS/SELF-IMPROVE/PROMOTED/<name>.md` with a recipe.
5. The next morning, the controller proposes the promoted workflow as a new SKILL.md in `C:\loop-services\skills\`.

**Verify:** `python -m loopd.curator --dry-run` reports N candidates and M promotions.

### Task 4.2 — DOJO loop (90 min)

`C:\loop-services\loopd\loopd\dojo.py` — single workflow that:

1. Reads a "hard challenge" from `WORKFLOWS/DOJO/CHALLENGES/`.
2. Picks 3 agents (Claude, Grok, OpenCode) and asks each to attempt the challenge.
3. If all 3 fail, dispatches a 4th agent with the **combined** best attempt.
4. Repeats up to 10 times.
5. On success, the winning recipe is written to `WORKFLOWS/DOJO/WINS/<challenge>.md`.

Seed challenges:
- `unify-3-pdfs-with-different-styles.md`
- `reverse-engineer-an-obfuscated-binary.md`
- `forecast-2027-q3-sp500-close.md`
- `extract-structure-from-300-page-research-pdf.md`
- `write-a-self-modifying-script.md`

**Verify:** `python -m loopd.dojo --challenge WORKFLOWS/DOJO/CHALLENGES/forecast-2027-q3-sp500-close.md` runs 10 attempts and either writes a win or reports a structured failure.

### Task 4.3 — Daily task list generator (45 min)

The controller runs at 00:00 UTC every day:

1. Reads the kanban.
2. Reads user-set priorities (`SYSTEM/PRIORITIES.md`).
3. Renders `TASKS/TODAY/<agent>-<date>.md` for each persistent agent.
4. Posts a NATS broadcast to `agents.work.<every-persistent-agent>`: "Today: N tasks dispatched."

**Verify:** A `TASKS/TODAY/<agent>-<date>.md` file exists for each persistent agent.

### Task 4.4 — Commit Phase 4 (5 min)

```bash
git add -A && git commit -m "Phase 4: nightly self-improvement, DOJO loop, daily task generator"
```

---

## 6. Phase 5 — Teams, Glue & Polish (Hours 48–60)

**Owner:** `opencode` (wiring) + `claude` (review).

### Task 5.1 — Team activation API (60 min)

```python
# loopd/teams.py
async def activate(team_name: str) -> None:
    team = load_team(f"C:\\loop-services\\teams\\{team_name}.yaml")
    for member in team.members:
        await spawner.spawn(member, brief="idle, await dispatch")
        await budget.enforce(member)
```

NATS commands: `team.activate.osint`, `team.status`, `team.deactivate`.

### Task 5.2 — Inter-agent chat (file-backed + NATS) (60 min)

Each agent has `agents/<role>/CHAT/Inbox/`/`Outbox/`. loopd mirrors those to NATS:
- File drop in `Inbox/` → NATS publish on `work.<target_agent>`.
- NATS consume on `reply.<source_agent>.<req_id>` → write to `Outbox/`.

**Verify:** Drop a file in `agents/claude/CHAT/Inbox/test.md`; loopd publishes to `work.claude`; claude's reply lands in `agents/claude/CHAT/Outbox/test-reply.md`.

### Task 5.3 — Grafana (skip if already running) (45 min)

Grafana is already running on this machine (`grafana.exe` was visible). Use `http://localhost:3000` directly. Pre-provision dashboards: `loopd.json`, `agents.json`, `system.json`.

**Verify:** `http://localhost:3000/d/loopd` shows controller metrics.

### Task 5.4 — Onboarding wizard (30 min)

`SYSTEM/ONBOARDING.md` — DataviewJS-based "Setup" note that walks the user through:
1. OpenRouter API key paste
2. Agent binary verification (`where <each-agent>`)
3. First `team activate` command
4. First dispatch

### Task 5.5 — Documentation pass (60 min)

Write three top-level docs:
- `SYSTEM/Architecture.md` — end-to-end text diagram
- `SYSTEM/Operating Manual.md` — how to use the OS
- `SYSTEM/Developer Guide.md` — how to add a new agent/team/skill

**Constraint:** No emojis, no SVG, no images. ASCII diagrams only.

### Task 5.6 — Commit Phase 5 (5 min)

```bash
git add -A && git commit -m "Phase 5: team activation, NATS bridge, grafana, onboarding, docs"
```

---

## 7. Phase 6 — Test, Ship, Iterate (Hours 60–72)

**Owner:** `mavis` (review) + `claude` (final integration tests).

### Task 6.1 — End-to-end smoke test (90 min)

`C:\loop-services\tests\e2e.py`:

1. Starts the NATS bus, observability stack, and loopd.
2. Sends a NATS message to `work.hermes` with a synthetic task.
3. Asserts a dispatcher fires within 5s.
4. Asserts the kanban updates.
5. Asserts the agent's `OUTBOX/` has a response artifact.

**Verify:** `python -m loopd.tests.e2e` exits 0.

### Task 6.2 — 24-hour soak test (PARALLEL with polish)

Run the full stack for 24 hours. Monitor:
- `loopd_active_agents` stays at 10 ± 1
- `loopd_messages_total` grows monotonically
- No `loopd_dispatch_failed_total` for > 1 hour
- Kanban thruput: ≥10 tasks/hour under simulated load

If any metric drifts, alarm fires to `agents.alerts.*`.

### Task 6.3 — Polish / bug-bash (180 min)

Open the dashboard fresh. Look for:
- Layout glitches
- Color contrast issues
- Decoration that slipped through
- Missing data refresh
- Broken dataview queries

### Task 6.4 — Ship tag (15 min)

```bash
git tag -a v1.0.0-agent-os -m "LOOP Agent OS v1.0 — 72h ship"
git push origin main --tags
```

### Task 6.5 — Post-launch checklist (45 min)

- [ ] loopd running with restart=always
- [ ] NATS JetStream running with restart=always
- [ ] Prometheus + Grafana running
- [ ] All 10 agents confirmed dispatched once
- [ ] All 6 team presets verified
- [ ] DOJO loop ran once end-to-end
- [ ] Curator ran once end-to-end
- [ ] User's dashboard renders correctly
- [ ] No emojis, SVG, icons, or thumbnails in vault

---

## 8. Files Likely to Change

```
C:\Users\Admin\Desktop\Music\LOOP\
├── PROJECTS\
│   ├── Index.md                         (rewrite)
│   └── agent-os-72h\                    (this plan)
├── SYSTEM\
│   ├── agents.yaml                      (extend with 10 agents)
│   ├── Architecture.md                  (new)
│   ├── Operating Manual.md              (new)
│   ├── Developer Guide.md               (new)
│   ├── TEAMS\                           (new — 6 presets)
│   ├── METERS.md                        (new)
│   ├── ONBOARDING.md                    (new)
│   ├── STYTEM RECORD\ → SYSTEM RECORD\  (rename)
│   ├── SYSTEM GOALS\Goals.md            (rewrite)
│   ├── SYSTEM GRAPH\Graph.md            (rewrite)
│   └── SYSTEM RULES\Rules.md            (rewrite)
├── agents\                              (new — 10 subdirs, one per agent)
│   └── <each-agent>\
│       ├── DASHBOARD.md
│       ├── CONTROL.md
│       └── CHAT\{Inbox,Outbox}\
├── CANVAS\
│   ├── Projects.canvas                  (new — flowchart)
│   └── CoWork Dashboard.canvas          (rewrite)
├── TASKS\
│   ├── TODAY\                           (new — auto-generated daily)
│   ├── KANBAN\Kanban Board.md           (rewrite — auto-managed)
│   └── STATUS\                          (existing)
├── WORKFLOWS\
│   ├── SELF-IMPROVE\                    (new)
│   └── DOJO\                            (existing — extend)
├── scripts\
│   ├── session-start.{ps1,sh}           (existing)
│   ├── turnkey-bootstrap.ps1            (existing)
│   ├── turnkey-smoke.ps1                (existing)
│   ├── loopd-rotate-logs.ps1            (new)
│   └── loopd-watchdog.ps1               (new)
├── .obsidian\
│   ├── snippets\loop-os.css             (new)
│   ├── plugins\                         (purge emoji/icon/SVG plugins)
│   └── appearance.json                  (switch to loop-os.css)
└── DELETION_LOG.md                       (new)

C:\loop-services\                        (new — global services)
├── agents\bin\                          (wrapper shims)
├── skills\                              (global skill catalog)
├── mcp\                                 (global MCP servers)
├── prompts\                             (global prompt library)
├── models\                              (Ollama model manifests)
├── teams\                               (6 team presets as YAML)
├── backups\                             (snapshots)
├── docker\                              (compose files)
├── loopd\                               (controller binary)
└── README.md
```

---

## 9. Tests / Validation

| Phase | Test | Pass Criteria |
|---|---|---|
| 1 | `where <each-agent>` | 10/10 found |
| 1 | `curl localhost:8222/varz` | NATS JetStream enabled |
| 1 | `curl localhost:9090/api/v1/query?query=up` | ≥3 series |
| 2 | `python -m loopd.tests.test_registry` | All 10 agents load |
| 2 | `python -m loopd.tests.test_controller` | Decision parses; budget enforces |
| 2 | `python -m loopd.tests.test_spawner` | Spawned agent writes to OUTBOX/ |
| 2 | `python -m loopd.tests.test_metrics` | ≥7 series on :9101/metrics |
| 3 | `scripts/check-decoration.py` | 0 emojis, 0 SVG, 0 `<img>` in vault |
| 3 | Open `CANVAS/Projects.canvas` | All nodes have status badges |
| 3 | Open `SYSTEM/METERS.md` | RAM/CPU bars reflect real values |
| 4 | `python -m loopd.curator --dry-run` | ≥1 candidate promoted |
| 4 | `python -m loopd.dojo --challenge ...` | At least 1 attempt completes |
| 5 | `team activate osint` | 3 agents spawn, ≤3 skills, ≤2 MCPs each |
| 6 | `python -m loopd.tests.e2e` | Exits 0 |

---

## 10. Risks, Tradeoffs, Open Questions

### Risks

1. **OpenRouter rate limits.** DeepSeek V3 is cheap, but at 1B tokens/month we'll hit OpenRouter's per-key RPM cap. Mitigation: tiered fallback (DeepSeek V3 → Gemini 2.5 Flash → Ollama local).
2. **Agent binary availability.** `openwork`, `agy`, `mavis`, `copilot` may not have CLI shims. Mitigation: Phase 1.2 thin wrappers cover all 5; if a wrapper 500s, the spawner falls back to a stub that says "agent unavailable, retry in 60s".
3. **Obsidian plugin regressions.** Purging icons may break buttons, dataview, templater. Mitigation: Phase 3.1 purges **decoration** only — keeps functional plugins.
4. **Custom controller LLM drift.** Without a fine-tune, the controller might hallucinate agent paths. Mitigation: hard-coded agent registry + budget enforcement at the dispatcher layer.
5. **24/7 stability on Windows.** Long-running services on Windows have random KERNEL-mode bluescreen risk. Mitigation: containerize loopd and chat server; back up vault nightly.
6. **Docker Desktop daemon may not be running on Windows boot.** Mitigation: `loopd-watchdog.ps1` polls `docker info` every 60s and re-launches `Docker Desktop.exe`.
7. **NATS at-rest.** No NATS process was visible in the tasklist. Need to verify it's running, or start it in Phase 1.5.

### Tradeoffs

- **NATS vs Rocket.Chat.** NATS for transport (your choice). No human-facing chat UI from Rocket.Chat; the Obsidian dashboard + per-agent DASHBOARD.md is the user-facing surface.
- **Custom controller LLM via prompt vs fine-tune.** Prompt + DeepSeek V3, because a fine-tune eats the 1B-token budget and the prompt is already strong.
- **Vault-as-GUI vs a new web frontend.** Vault: the user explicitly wanted Obsidian. Web frontend would be faster to build but contradicts the user's spec.
- **File-backed inter-agent chat + NATS mirror.** File-backed: keeps every artifact visible in Obsidian. NATS mirror: machines the bus for ephemeral workers that don't have a file folder.

### Open Questions

1. **What OpenRouter model is the fallback when DeepSeek V3 is rate-limited?** Suggested: `google/gemini-2.5-flash` (fast + cheap).
2. **What is the controller's instruction-set budget?** Estimated per-turn: 4k input + 1k output. At 1B tokens/month, that's ~200k turns/month — plenty.
3. **Where do logs go?** Default: `TASKS/STATUS/CHAT-HISTORY/` per agent + Prometheus + NATS replay.

---

## 11. Verification Checklist (the only thing that matters)

Before declaring done:

- [ ] loopd starts with `restart: always` and survives a `docker restart`
- [ ] All 10 agents confirmed dispatched once and wrote a result to OUTBOX/
- [ ] Kanban refreshes within 5s of an agent completing
- [ ] `TASKS/TODAY/*.md` regenerates at 00:00 UTC
- [ ] `SYSTEM/METERS.md` shows real CPU/RAM
- [ ] No emojis, no SVG, no icons, no `<img>` tags in any vault file
- [ ] NATS `work.hermes` accepts a message and gives a reply within 3s
- [ ] DOJO loop runs once end-to-end
- [ ] Curator runs once end-to-end
- [ ] All 6 team presets activate cleanly
- [ ] 24-hour soak test passes without a single critical alert
- [ ] `git tag v1.0.0-agent-os` exists

---

## 12. What This Plan Does NOT Do

- **No fine-tuning of the controller LLM.** The prompt is the controller.
- **No new model selection/eval pipeline.** Use existing OpenRouter catalog.
- **No Rocket.Chat.** NATS is the transport.
- **No mobile/web frontend outside Obsidian.** Per user's spec.
- **No marketing site / docs site.** Obsidian notes are the docs.

---

## 13. Execution Order (one-line summary)

```
Phase 1 (6h):  inventory, wrapper shims, scaffold /loop-services, NATS + Prometheus up — owner: claude+opencode
Phase 2 (12h): loopd (registry, controller, NATS bridge, spawner, metrics, kanban) — owner: claude+cline
Phase 3 (18h): Obsidian dark theme, dashboards, canvas, control boards, meters, teams — owner: opencode+claude
Phase 4 (12h): curator + DOJO + daily task generator — owner: claude+mavis
Phase 5 (12h): team activation, NATS bridge, Grafana, onboarding, docs — owner: opencode
Phase 6 (12h): e2e tests, 24h soak, polish, ship tag — owner: mavis+claude
```

---

## 14. Token Budget Breakdown (approximate)

| Phase | Tokens | Notes |
|---|---|---|
| 1 | 50M | Inventory + scaffolding scripts |
| 2 | 350M | loopd is the largest single artifact |
| 3 | 250M | CSS + DataviewJS + canvas authoring |
| 4 | 150M | Curator + DOJO recipes |
| 5 | 100M | Wiring + docs |
| 6 | 100M | Tests + polish |
| **Total** | **~1B** | Within the user's 1B budget |

---

## 15. Dispatch Routing (who does what)

The user explicitly said "spread the workload as much as possible." So:

| Phase | Primary coder | Reviewer | Specialist |
|---|---|---|---|
| 1 | claude | opencode | cline (TDD) |
| 2 | claude | opencode | cline (TDD) |
| 3 | opencode | claude | mavis (UI review) |
| 4 | claude | mavis | opencode (curator) |
| 5 | opencode | claude | mavis (docs review) |
| 6 | mavis | claude | opencode (test) |

Hermes is the orchestrator. We dispatch via NATS when the agent is up, else via the file-backed inbox protocol.

---

## See Also

- `STATUS.md` (created in Phase 1, updated every task)
- `INVENTORY.md` (created in Phase 1.1)
- `DELETION_LOG.md` (created in Phase 1.3)
- `SYSTEM/Architecture.md` (created in Phase 5.5)
- `SYSTEM/Operating Manual.md` (created in Phase 5.5)
