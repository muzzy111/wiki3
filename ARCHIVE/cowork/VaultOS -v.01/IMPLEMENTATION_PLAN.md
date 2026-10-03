# VaultOS Implementation Plan

_Generated 2026-06-19 04:00 EDT by scheduled cron job. Read-only session — this plan + this file are the only writes._

---

## Executive Summary

**VaultOS** is a file-driven "AI Mission Control" that lives inside an Obsidian vault. The vault itself is the operating system: every agent is a folder, every job is a JSON file, every status is a markdown frontmatter or `status.json`, and the dashboard is a DataviewJS-rendered Obsidian note. The user wants a single-user, multi-agent, locally-runnable system that orchestrates AI workflows (research, coding, PDF processing, memory consolidation, etc.) through a mission-control UI while preserving a clear human-readable audit trail on disk.

**Who it's for:** a solo developer building a personalized AI computing environment that feels like sitting at the console of their own AI rig — not a generic SaaS dashboard.

**Why build it:** replaces ad-hoc tool orchestration with a discoverable, file-based system that can be inspected, backed up, and reasoned about. No DB, no auth, no React — just folders, YAML/JSON, and Obsidian plugins.

**Weekend goal (per user):** finish the **Telegram gateway** end-to-end. The plan slots that work prominently in Phase 1 and validates it end-to-end by Phase 3.

---

## Dashboard Mockup — Panel-by-Panel Description

The reference image (`ChatGPT Image Jun 18, 2026, 07_51_44 PM.png`, 1.5 MB) is a dark-themed "AI Mission Control" with three vertical columns. Here is every visible element:

### Header bar (full width, top)
- Left: purple **diamond/crystal logo icon** + bold "**AI MISSION CONTROL**" title with subtitle "**Obsidian Vault Operations**".
- Center: four stat tiles, large colored numerals, with smaller labels underneath:
  - **14** (green) / "14 Running"
  - **3** (amber) / "3 Queued"
  - **2** (red) / "2 Completed"
  - **1** (blue) / "1 Starting"
- Right: green dot + "**System Online**", date "**May 18, 2025 · 9:42 PM**", and a small gear icon.

### Left sidebar (fixed, ~200 px)
Vertical nav with icons + labels:
1. **Overview** (highlighted/active — purple selected state)
2. Workflows
3. Agents
4. Schedules
5. Logs
6. Analytics
7. Integrations
8. Settings

Then a section header "**WORKFLOW CATEGORIES**" with badges:
- Knowledge — 5 (green)
- AI Agents — 6 (green)
- Development — 6 (red)
- Maintenance — 4 (amber)
- Custom — 2 (red)

Then "**QUICK ACTIONS**":
- "+ New Workflow" (purple CTA)
- "▶ Run All"
- "■ Stop All"
- "↻ Restart Failed"
- "🧹 Clear Completed"

### Center column (workflow grid)
Section header "**WORKFLOWS**" + "21 Total", with toggle "**Grid | List**" and a "**All Status**" dropdown on the right.

Four category blocks, each with collapsible header (icon + name + "X Workflows" + "X Running" badge):

1. **📚 KNOWLEDGE** — 5 Workflows · 3 Running
   Cards: Literature Review Agent (● Running, 76%, 23m 14s, Est. 12m), PDF OCR Processor (● Queued, Position 2), Citation Builder (● Completed 9:05 PM, 9m 47s), Knowledge Graph Updater (● Running 63%, 18m 3s, Est. 16m), Concept Extractor (● Starting).
   Each card has: name, colored status dot + label, horizontal progress bar with %, runtime + Est. completion, "Last run: Today X:XX PM", large **STOP** button (red) or **RUN** button (purple) with **⋮** overflow menu.

2. **🧠 AI AGENTS** — 6 Workflows · 4 Running
   Deep Research Agent (82%, 1h 04m), Planning Agent (54%), Memory Consolidator (Completed), Note Summarizer (Queued), Insight Generator (41%), Question Answerer (Starting).

3. **💻 DEVELOPMENT** — 6 Workflows · 3 Running
   Code Reviewer (68%), Documentation Writer (71%), Unit Test Generator (Completed), Refactor Assistant (Queued), Release Builder (Completed), Dependency Auditor (32%).

4. **⚙ MAINTENANCE** — 4 Workflows · 2 Running
   Vault Cleanup (47%), Link Validator (59%), Orphan Notes Finder (Completed), Tag Organizer (Queued).

Footer note: "ℹ Click any workflow card for more details, logs, and configuration."

### Right sidebar
**SYSTEM OVERVIEW** panel:
- Three donut gauges: **CPU 23%** (green ring), **RAM 41%** (purple ring), **Disk 62%** (amber ring).
- Active LLM: **Claude 3.5 Sonnet**
- Context Window: **152K / 200K** with green progress bar
- Token Usage (24h): **1.24M / 5M** with amber/yellow bar
- Est. Cost (24h): **$2.18**
- Purple area chart, "Token Usage — Last 24 Hours", X axis: 12AM, 6AM, 12PM, 6PM, Now.

**ACTIVITY FEED** panel (View all link):
- 9:41 PM — ● Insight Generator — Started
- 9:30 PM — ● Dependency Auditor — Started
- 9:28 PM — ● Vault Cleanup — Started
- 9:22 PM — ● Citation Builder — Completed
- 9:12 PM — ● Orphan Notes Finder — Completed
- 9:05 PM — "+8 more activities"

**NOTIFICATIONS** panel, badge "**3**":
- ⚠ Deep Research Agent — High memory usage
- ℹ PDF OCR Processor — Waiting in queue (2)
- ⚠ Link Validator — Found 17 broken links

### Visual language
- Dark navy/slate background, purple primary accent (#7c5cff-class), rounded corners, glassmorphism cards with subtle border + soft shadow.
- Status LED palette: **green=running, amber/yellow=queued, red=failed/completed, blue=starting, gray=idle/offline, purple=needs-input**.
- Card density: ~5 cards per row at desktop width; each card is information-rich but not cluttered.

---

## Architecture

### Two converging design docs
The user has produced two complementary specs that need to be reconciled into one implementation:

**Doc A — "VaultOs.md" (1,434 lines, 30 KB)**
- Mission-control metaphor: vault = OS, agents = folders, jobs = JSON files.
- Status LED taxonomy: 🟢 running · 🔵 starting · 🟡 waiting · 🟣 needs input · 🔴 failed · ⚪ offline.
- **Model Router** with four intelligence levels (Tiny → Premium), tiered by reasoning need + cost budget.
- Pyramid of cost: Premium models only on architect/review tasks; cheap/local models on file ops, classification, tagging.
- **Karpathy 3-folder wiki** style: `Raw/` (unverified, requires user approval) → `Wiki/` (verified heuristics) → `Index/` (global knowledge map).
- Context optimization techniques (12+ rules): `.context/` packages, folder indexes, README-on-every-folder, metadata DB, layered search, progressive context, precomputed maps, deterministic-before-AI, event-driven updates.
- **Agent Levels**: Level 1 core (always running) / Level 2 workers (on demand) / Level 3 specialists (plug-ins).
- **Agent Factory** meta-agent that scaffolds new agents from a Q&A.
- **Prompt library**: data-driven prompts with profile switches (Fast / Standard / Deep Dive).
- AI Cache: `System/AI Cache/{summaries,embeddings,directory_maps,dependency_graphs,entity_index,token_cache,context_packages}/`.



**Doc C — "vault_os_setup_guide.md" (320 lines, 12 KB) — the buildable bridge**
Concrete, actionable spec that already maps Doc A to working code:
- Full folder tree with file purposes (Dashboard, Agents, Workflows, Templates, Memory, Queue/{Incoming,Running,Completed,Failed}, Events, Logs, Outputs, Prompts, Config, System).
- Required community plugins: Dataview, Meta Bind, Shell Commands, Templater, Style Settings.
- 100+ lines of CSS (glassmorphism + LED animations).
- Complete `Mission Control.md` DataviewJS that enumerates `Agents/*` and renders cards wired to `shell-commands:run-agent-…` command IDs.
- `llms.yaml` model router with 4 tiers and budget governance.
- Event-driven queue protocol with example task JSON.

### What the existing skeleton has
| Path | Status |
|---|---|
| `VaultOS/Dashboard/Mission Control.md` | **exists** — has the DataviewJS from the guide |
| `VaultOS/Config/llms.yaml` | **exists** — 4-tier model router |
| `VaultOS/Agents/Research Agent/{agent.yaml,status.json,README.md}` | **exists** — single agent example |
| `VaultOS/Templates/Agent Template/{agent.yaml,status.json,README.md}` | **exists** — scaffold for new agents |
| Everything else (Workflows/, Memory/, Queue/, Events/, Logs/, Outputs/, Prompts/, System/Scripts/) | **empty** |

The vault already has the *spine* of the dashboard. What is missing is: runner daemon, Telegram gateway, queue processor, template scaffolder, full Agent Factory, Karpathy wiki implementation, and the ACG/Graphifyy capabilities.

### Reference architecture diagram (synthesized from the three docs)
```
   ┌──────────────────── Obsidian vault ─────────────────────┐
   │                                                          │
   │   Mission Control.md (DataviewJS) ─ reads status.json    │
   │            │                                             │
   │            ▼                                             │
   │   Meta Bind / Buttons → Shell Commands                   │
   │            │                                             │
   │            ▼                                             │
   │   ┌─── System/Scripts/runner.py (daemon) ──────┐         │
   │   │  - watches Queue/Incoming/                 │         │
   │   │  - claims job, moves to Running/           │         │
   │   │  - picks agent by name, updates status     │         │
   │   │  - executes via Hermes / Claude / OpenCode │         │
   │   │  - writes outputs, events, logs            │         │
   │   └─────────────────┬──────────────────────────┘         │
   │                     │                                    │
   │        ┌────────────┼────────────┐                       │
   │        ▼            ▼            ▼                       │
   │  ┌─────────┐  ┌─────────┐  ┌──────────┐                  │
   │  │Telegram │  │Hermes   │  │Queue     │                  │
   │  │Gateway  │  │Router   │  │Manager   │                  │
   │  └────┬────┘  └────┬────┘  └────┬─────┘                  │
   │       └────────────┼────────────┘                        │
   │                    ▼                                     │
   │          Model Router (llms.yaml)                        │
   │                    │                                     │
   │           Tiny → Standard → Reasoning → Premium          │
   │                                                          │
   │   Memory/{episodic,long_term}/ + .obsidian/wiki/{raw,wiki,index}/  │
   │   Logs/ + Events/ (audit trail, event bus)               │
   └──────────────────────────────────────────────────────────┘
```

---

## Components Inventory

Every file read, one bullet each.

### `01/` — Design documents
- **`01/VaultOs.md`** (30 KB, 1434 lines) — Primary philosophical + structural spec. Defines the "vault as OS" metaphor, mission-control UI, model router with 4 tiers, Karpathy wiki, agent levels (core/workers/specialists), Agent Factory, prompt library, 12+ context-optimization rules, AI Cache layout, and design-for-growth principles (every agent = folder, every workflow = self-contained, agents communicate via files, nothing magical, no DB unless needed).

- **`01/ChatGPT Image Jun 18, 2026, 07_51_44 PM.png`** (1.5 MB) — Dashboard mockup. Dark theme, 3-column layout: left nav (Overview/Workflows/Agents/Schedules/Logs/Analytics/Integrations/Settings + categories + quick actions), center workflow grid (4 categories × 5–6 cards = 21 total with status LED, progress %, runtime, Est., last-run, STOP/RUN buttons), right sidebar (System Overview with CPU/RAM/Disk donuts + LLM + Context + Tokens + Cost + 24h chart, Activity Feed, Notifications).

### `VaultOS/` — Concrete vault skeleton
- **`VaultOS/vault_os_setup_guide.md`** (12 KB, 320 lines) — Step-by-step implementation guide. Full folder tree, plugin list (Dataview, Meta Bind, Shell Commands, Templater, Style Settings), full CSS snippet for glassmorphism + LED animations, complete DataviewJS for Mission Control, Shell Commands wiring example, queue task JSON example, `llms.yaml` model router, and a 7-step configuration checklist.
- **`VaultOS/Dashboard/Mission Control.md`** (2.5 KB, 72 lines) — The actual existing dashboard note. Contains the DataviewJS that enumerates `VaultOS/Agents/*`, renders a card per agent with LED + progress + Run/Stop buttons, and wires buttons to `shell-commands:run-agent-{slug}` and `stop-agent-{slug}` command IDs.
- **`VaultOS/Config/llms.yaml`** (1 KB, 29 lines) — 4-tier model router (`level_1_tiny` → `level_4_premium`) with default_model, fallback_model, max_token_budget, hourly_rate_limit, allowed actions, and a `budget_governance` block (max $0.25/workflow, downgrade at 80% spend).
- **`VaultOS/Agents/Research Agent/agent.yaml`** (323 B, 11 lines) — Single example agent. Declares name, purpose, `model_tier: level_3_reasoning`, capabilities (read/write notes, call LLM, search web, no Python), `$0.15` cost cap, and permitted tools (web-search, pdf-reader).
- **`VaultOS/Agents/Research Agent/status.json`** (155 B) — Live status: `idle`, progress 0, started timestamp, last_run timestamp, current_task null, errors empty array. **Schema is the contract every agent must follow.**
- **`VaultOS/Agents/Research Agent/README.md`** (269 B) — Documents purpose + which system prompt the agent uses (`VaultOS/Prompts/Research/Literature Review.md`).
- **`VaultOS/Templates/Agent Template/agent.yaml`** (352 B) — Default scaffold for new agents: `level_2_standard`, read-only notes, no web, no Python, $0.05 cap.
- **`VaultOS/Templates/Agent Template/status.json`** (122 B) — Idle starter status (offline-ish: idle, progress 0, never run, no task, no errors).
- **`VaultOS/Templates/Agent Template/README.md`** (380 B) — Blueprint README template explaining that the agent consumes tasks from `VaultOS/Queue/Incoming/` matching its name and writes outputs to `VaultOS/Outputs/`.

### Empty directories (notable — must be populated, not pruned)
`VaultOS/Events/` · `VaultOS/Knowledge/` · `VaultOS/Logs/` · `VaultOS/Memory/episodic/` · `VaultOS/Memory/long_term/` · `VaultOS/Outputs/` · `VaultOS/Prompts/` · `VaultOS/Queue/Incoming/` · `VaultOS/Queue/Running/` · `VaultOS/Queue/Completed/` · `VaultOS/Queue/Failed/` · `VaultOS/System/Scripts/` · `VaultOS/Workflows/`

The Queue/ folder only exists in 4 of the 7 spec'd subdirs — `Waiting/` and `Scheduled/` are missing and should be added per Doc A.

### `.obsidian/` subfolder
Hidden vault config — not read because it's gitignored/system files. Will need Dataview/Meta Bind/Shell Commands/Templater/Style Settings + 5 CSS snippets enabled.

---

## Implementation Phases

Ordered so each phase is independently demonstrable. Weekend scope highlighted.

### Phase 0 — Environment & Plugin Audit (Saturday morning)
**Goal:** Confirm the vault works end-to-end before writing any new code.
**Deliverables:**
- Obsidian community plugins installed and enabled: **Dataview, Meta Bind, Shell Commands, Templater, Buttons, Iconize, Style Settings, Advanced Canvas, Canvas Blocks, Better Embedded Canvas, Canvas Send to Back** (per docs A & B).
- CSS snippet `vault-os-style.css` copied from setup guide §3.A into `.obsidian/snippets/` and activated.
- `Mission Control.md` renders without console errors in Obsidian preview mode (cards visible for the existing Research Agent).
**Files to create/modify:**
- `.obsidian/snippets/vault-os-style.css` (from guide)
- `.obsidian/community-plugins.json` (plugin list)
**Dependencies:** none.
**Effort:** small.
**Acceptance criteria:** open `Mission Control.md` in Obsidian → see a glassmorphic card for Research Agent with status "IDLE" and a working Run button (button doesn't have to fire yet).

---

### Phase 1 — Telegram Gateway (Saturday — **WEEKEND PRIORITY**)
**Goal:** Send/receive Telegram messages that translate to/from VaultOS queue tasks and Telegram-readable status replies. This is the user's stated weekend goal.
**Deliverables:**
1. A Telegram bot token stored in `.env` (gitignored) — never in vault.
2. `VaultOS/System/Scripts/telegram_gateway.py` — long-running Python daemon.
3. The gateway:
   - Long-polls `getUpdates` (or uses webhook if a public URL is available).
   - On user message: parses intent (commands: `/run <agent>`, `/status`, `/list`, `/stop <agent>`, `/help`, free-text → drop as `Queue/Incoming/<id>.json`).
   - Replies with Markdown formatted summaries (agent list, status LED, progress bar ASCII, last run).
   - Rate-limits to user ID(s) from `Config/users.yaml` whitelist.
4. `Config/users.yaml` (new) — whitelist of Telegram user IDs allowed to drive the system.
5. `VaultOS/System/Scripts/runners/telegram_runner.sh` (new) — Windows-friendly launcher that activates venv and runs the gateway detached.
6. `VaultOS/Prompts/System/Telegram Reply.md` (new) — system prompt that constrains Telegram reply style (concise, structured, ASCII-safe).
**Files to create/modify:**
- `VaultOS/System/Scripts/telegram_gateway.py` (new, ~250 lines)
- `VaultOS/System/Scripts/runners/telegram_runner.sh` (new)
- `VaultOS/Config/users.yaml` (new)
- `VaultOS/Prompts/System/Telegram Reply.md` (new)
- `.env` (new, gitignored) with `TELEGRAM_BOT_TOKEN=...`
- `.gitignore` additions: `.env`, `__pycache__/`, `*.pid`
**Dependencies:** Phase 0 (need Dataview + Shell Commands to surface agent list); requires outbound HTTPS to `api.telegram.org`.
**Effort:** medium.
**Acceptance criteria:**
- Send `/list` to bot → bot replies with the agent roster and statuses in Markdown.
- Send `/run Research Agent` → bot replies "queued" AND a JSON file appears in `Queue/Incoming/` AND Research Agent's `status.json` updates to running within 30 s (will need Phase 2 runner for end-to-end).
- Send free-text "summarize today's meeting notes" → bot drops a job with `agent: "Note Summarizer"` (or appropriate default) into `Queue/Incoming/`.
- Unauthorized user gets a polite refusal.

---

### Phase 2 — Runner Daemon + Queue Worker (Saturday afternoon)
**Goal:** The Telegram gateway enqueues jobs, and a background daemon drains the queue. This is what makes Phase 1's `/run` actually do something.
**Deliverables:**
1. `VaultOS/System/Scripts/runner.py` — long-running daemon.
2. The runner:
   - Polls `Queue/Incoming/` every 2 s (configurable).
   - Atomically moves (`os.rename`) job JSONs to `Queue/Running/` and updates the matching agent's `status.json` to `{status:"starting", started:..., current_task:{task_id,...}, progress:5}`.
   - Resolves the agent's `model_tier` from `agent.yaml`, asks the **Model Router** which provider to use, and dispatches via Hermes delegate_task (preferred), Claude Code CLI, OpenCode CLI, or a local Python script (`scripts/run_*.py` in the agent folder).
   - Streams progress updates to `status.json` (`progress`, `step`).
   - On completion: writes the final artifact to `Outputs/<category>/<timestamp>-<task_id>.<ext>`, writes `Events/<event>.json`, appends to `Logs/Agent Logs/<agent>/<date>.md`, moves the job file to `Queue/Completed/` with appended `output_path` field.
   - On failure: moves job to `Queue/Failed/` with appended `error` field, writes an `Events/llm_error.json` event.
   - Honors `max_cost_limit_usd` per agent and `budget_governance.downgrade_threshold` per workflow.
   - Honors `Retry → Local Patch → Global Replan` escalation (max 2 retries, then mark failed).
3. `VaultOS/System/Scripts/model_router.py` — pure-Python module that reads `Config/llms.yaml`, picks the right model for the tier, returns provider config.
4. `VaultOS/System/Scripts/runners/vaultos_runner.sh` — cross-platform launcher (uses `pythonw` on Windows to detach from terminal).
**Files to create/modify:**
- `VaultOS/System/Scripts/runner.py` (new, ~400 lines)
- `VaultOS/System/Scripts/model_router.py` (new, ~150 lines)
- `VaultOS/System/Scripts/runners/vaultos_runner.sh` (new)
- `VaultOS/System/Scripts/__init__.py` (empty, for module imports)
**Dependencies:** Phase 1 (Telegram writes to `Queue/Incoming/`).
**Effort:** large (this is the core engine).
**Acceptance criteria:**
- Start runner in one terminal, send `/run Research Agent` from Telegram in another → Research Agent `status.json` flips to `running`, progress climbs, job file moves through `Incoming → Running → Completed`, output appears in `Outputs/`, and a final Telegram reply says "completed in Xm Ys, output at <path>".

---

### Phase 3 — End-to-End Smoke Test + Dashboard Wiring (Saturday evening)
**Goal:** Make the existing Mission Control.md card light up green when the runner is working.
**Deliverables:**
1. `VaultOS/Agents/Research Agent/scripts/run_research.py` — example executor that takes a `query` and a job JSON, calls the model router, writes a Markdown report.
2. Wire `Shell Commands` plugin with two IDs: `run-agent-research-agent` and `stop-agent-research-agent`, pointing to `python runner.py --agent "Research Agent" --action start|stop`.
3. Verify Mission Control.md auto-refreshes via DataviewJS re-render (no manual reload needed for the cards; Dataview refreshes on file change which Dataview polls).
4. Verify Telegram reply formatting for completed jobs (success + failure variants).
**Files to create/modify:**
- `VaultOS/Agents/Research Agent/scripts/run_research.py` (new)
- Shell Commands config (in `.obsidian/shell-commands.json` or via Settings UI)
**Dependencies:** Phases 1 & 2.
**Effort:** medium.
**Acceptance criteria:** From Telegram: `/run Research Agent` → bot reply "queued" → Mission Control card flips to green running → Telegram reply "completed" → card flips to red idle/complete with last-run timestamp updated. All without manually opening Obsidian.

---

### Phase 4 — Karpathy 3-Folder Wiki Implementation (Sunday morning)
**Goal:** Implement the `Raw → Wiki → Index` memory promotion flow.
**Deliverables:**
1. Create hidden vault subfolder `.obsidian/wiki/{raw,wiki,index}/` (these match the spec's `.obsidian/raw`, `.obsidian/wiki`, `.obsidian/index` placement in Doc B §2).
2. `VaultOS/System/Scripts/wiki_promoter.py` — small CLI:
   - `python wiki_promoter.py promote <raw_file.md>` — moves a file from `raw/` to `wiki/` only if user approval flag is set (touched from Telegram: `/approve <id>`).
   - `python wiki_promoter.py index` — walks `wiki/`, regenerates `index/index.md` with bidirectional links and tags.
3. `VaultOS/System/Scripts/pi_agent.py` — implements **Pi-Agent's ERL extraction** (Trigger/Action/Rationale) over completed workflow traces in `Logs/Agent Logs/`.
4. Migration of `Memory/{episodic,long_term}/` from spec (Doc A) to be symlinked/aliased with `.obsidian/wiki/{wiki,index}` so the two memory taxonomies coexist (Doc A uses `Memory/`, Doc B uses `.obsidian/wiki/`).
**Files to create/modify:**
- `VaultOS/System/Scripts/wiki_promoter.py` (new, ~120 lines)
- `VaultOS/System/Scripts/pi_agent.py` (new, ~200 lines)
- New subdirs: `.obsidian/wiki/raw/`, `.obsidian/wiki/wiki/`, `.obsidian/wiki/index/`
- `VaultOS/Memory/README.md` (new) — explains the aliasing
**Dependencies:** Phase 2 runner (writes logs that Pi-Agent consumes).
**Effort:** medium.
**Acceptance criteria:**
- Run a workflow → Pi-Agent extracts one ERL heuristic into `wiki/raw/`.
- Approve via Telegram `/approve <id>` → file moves to `wiki/wiki/`.
- Run `wiki_promoter.py index` → `wiki/index/index.md` contains a link to the new heuristic.

---

### Phase 5 — Agent Factory Meta-Agent (Sunday afternoon)
**Goal:** Build the "scaffolder" agent from Doc A that creates new agent folders from a Q&A.
**Deliverables:**
1. `VaultOS/Agents/Agent Factory/agent.yaml` + `status.json` + `README.md` + `scripts/factory.py` + `scripts/questions.md` (the Q&A script).
2. `factory.py`:
   - Interactive mode (CLI) or Telegram mode (`/create-agent`).
   - Asks: name, purpose, model_tier, capabilities (multi-select), tools_permitted, max_cost_limit_usd.
   - Copies `Templates/Agent Template/*` into `Agents/<New Agent>/`.
   - Substitutes `{{name}}`, `{{purpose}}` placeholders.
   - Creates empty subdirs: `logs/`, `output/`, `memory/`, `prompts/`, `scripts/`.
   - Writes a starter `scripts/run_<slug>.py` and `prompts/system.md`.
   - Appends to `Agents/index.json` (Doc A §11.2).
3. `Agents/index.json` — registry of all agents with capabilities, owners, tools, last_modified. Built/refreshed by a `scripts/build_index.py`.
**Files to create/modify:**
- `VaultOS/Agents/Agent Factory/` (entire new folder)
- `VaultOS/System/Scripts/build_agent_index.py` (new)
- `VaultOS/Agents/index.json` (new, generated)
**Dependencies:** Phase 2 (factory uses runner for Telegram interactions); Phase 4 (factory output registers into index).
**Effort:** medium.
**Acceptance criteria:** From Telegram: `/create-agent` → bot asks 6 questions → user answers → new agent folder appears in `Agents/` with valid `agent.yaml` + `status.json` + starter script + prompt + an entry in `Agents/index.json` → Mission Control immediately shows the new card.

---

### Phase 6 — Additional Dashboard Pages (Sunday evening)
**Goal:** Replicate the right-sidebar panels from the mockup.
**Deliverables:**
1. `VaultOS/Dashboard/Agent Monitor.md` — per-agent drill-down: full `status.json`, last 50 log lines, recent outputs, retry button.
2. `VaultOS/Dashboard/Queue Manager.md` — Dataview table of `Queue/{Incoming,Running,Completed,Failed}/*.json` with sortable status, agent, age, action buttons.
3. `VaultOS/Dashboard/Analytics.md` — last-24h token usage (read from `Logs/Agent Logs/<date>.md`), cost rollup (read from event logs), success rate, top agents by call count.
4. `VaultOS/Dashboard/Costs.md` — per-agent and per-tier spend, with downgrade recommendations when an agent is burning >80% budget.
5. `VaultOS/Dashboard/System Health.md` — CPU/RAM/Disk via `psutil` snapshot written every 60 s by runner into `Logs/System/health.jsonl`.
**Files to create/modify:**
- 5 new dashboard notes
- Extend `runner.py` to write `Logs/System/health.jsonl` periodically
**Dependencies:** Phase 2 (logs flow); Phase 4 (analytics from wiki promotion events).
**Effort:** medium.
**Acceptance criteria:** Open each dashboard note in Obsidian → see live data. Right-sidebar mockup becomes real, not just the center grid.

---

### Phase 7 — Model Router + Budget Enforcement Hardening (Sunday evening / Monday)
**Goal:** Make sure premium models are only used when the agent's declared tier requires it, and the system downgrades on budget overrun.
**Deliverables:**
1. Flesh out `VaultOS/System/Scripts/model_router.py` with provider adapters: `openrouter`, `anthropic`, `openai`, `ollama`, `google`.
2. Provider keys in `.env`. Never in vault.
3. Per-workflow `CostTracking` object: writes `Logs/Costs/<workflow_id>.jsonl` with `{timestamp, agent, tier, model, prompt_tokens, completion_tokens, usd}`.
4. Pre-flight check: if `sum(usd) >= max_cost_limit_usd * downgrade_threshold` → swap to fallback_model; if `>= max_cost_limit_usd` → fail fast with budget error.
5. Dashboard `Costs.md` reads the JSONL rollups.
**Files to create/modify:**
- `VaultOS/System/Scripts/model_router.py` (extend)
- `VaultOS/System/Scripts/providers/{openrouter,anthropic,openai,ollama,google}.py` (new)
- `VaultOS/Config/llms.yaml` (extend with provider API env-var names)
**Dependencies:** Phase 2.
**Effort:** medium.
**Acceptance criteria:** Run a workflow with a $0.05 budget that needs 4 LLM calls. After the 3rd call, runner logs "downgrading level_3 → level_2 due to budget". 4th call uses fallback. Total spend stays under $0.05.

---

### Phase 8 — ACG + Graphifyy Topology Visualization (post-weekend, stretch)
**Goal:** Visualize the live execution graph using Obsidian Canvas.
**Deliverables:**
1. `VaultOS/System/Scripts/graph_emitter.py` — emits a `.canvas` JSON file representing current Ready-Set (queue + running nodes) every 5 s.
2. `VaultOS/Dashboard/Topology.canvas` — auto-rendered with nodes colored by status LED.
3. `/graph` Telegram command returns a static PNG export of the canvas.
4. Implementation of `Communication Sparsification` rule: drop redundant edges between agents by analyzing `Logs/Agent Logs/` for repeated identical prompts.
**Files to create/modify:**
- `VaultOS/System/Scripts/graph_emitter.py` (new)
- `VaultOS/Dashboard/Topology.canvas` (generated)
**Dependencies:** Phases 2 & 6.
**Effort:** large.
**Acceptance criteria:** Open Topology.canvas in Obsidian → see live workflow graph; edges represent inter-agent file handoffs; stuck nodes highlighted in red.

---

### Phase 9 — Prompt Library + Prompt-as-Command (post-weekend, polish)
**Goal:** Centralize prompts and make `/review-code`, `/analyze-architecture`, etc. work from anywhere.
**Deliverables:**
1. Populate `VaultOS/Prompts/{System,Coding,Research,Writing,Planning,Review,Personas}/` with starter prompts.
2. `VaultOS/System/Scripts/prompt_router.py` — maps slash-commands to prompt files, substitutes variables (task, scope, output_format, priority).
3. Telegram gateway extends to handle all `/commands` and dispatch via runner.
4. Prompt Profiles (Fast/Standard/Deep Dive) as a meta-prompt template the router applies.
**Files to create/modify:**
- Many new `.md` files under `Prompts/`
- `VaultOS/System/Scripts/prompt_router.py` (new)
**Dependencies:** Phases 1, 2, 7.
**Effort:** medium.
**Acceptance criteria:** From Telegram: `/review-code vaultos/System/Scripts/runner.py priority=performance` → bot drops a job that uses the Review profile, executes the review, replies with the report.

---

## Open Questions / Decisions needed from user

These are the genuine ambiguities in the spec — flagged for resolution on waking.

1. **Webhook vs long-poll for Telegram?** Long-poll is simpler (no public URL), but a webhook is more responsive and battery-friendly if the host has a stable IP. **Default plan:** long-poll, with webhook support stubbed in. **Need user decision if** they have a public domain/TLS cert ready.
2. **Where to run the runner daemon?** Options: (a) Windows host as a scheduled background task, (b) WSL2, (c) Docker container, (d) a second always-on box. The vault is on `C:\Users\Admin\OBSIDIAN\` (Windows host per session info). Plan assumes (a). **Need user decision if** they want Docker isolation.
3. **Python version?** Session says `python=3.11.15`, `pip→python3.14`. Plan assumes Python 3.11 for the runner (matches what's available). **Confirm.**
4. **Which LLM providers actually have keys today?** Plan wires `openrouter`, `anthropic`, `openai`, `ollama`, `google` stubs. **Need the actual list of providers with valid keys** so we don't build dead adapters.
5. **Memory taxonomy conflict** — Doc A uses `VaultOS/Memory/{episodic,long_term,...}/`, Doc B uses `.obsidian/wiki/{raw,wiki,index}/`. Plan aliases them in Phase 4. **Confirm user is OK with the aliasing**, or pick one canonical tree.
6. **Spec drift in Queue/** — Doc A lists 7 subdirs (`Incoming, Running, Waiting, Completed, Failed, Scheduled` — and one missing); the existing skeleton only has 4 (`Incoming, Running, Completed, Failed`). Plan adds `Waiting/` and `Scheduled/` only when an actual workflow needs them (likely never for the weekend). **Confirm.**
7. **Obsidian sync?** Is the vault synced via Obsidian Sync / iCloud / Dropbox? If yes, the runner writing `status.json` 5×/s will thrash the sync engine. **Plan mitigates by batching writes to ≤1/s per agent.** Need to confirm sync is off OR batch cadence is acceptable.
8. **Multi-user security model.** Spec assumes single user. Telegram whitelist is the only auth. **Confirm no one else should be able to drive the system via Telegram.** If yes, plan should add per-user permissions.
9. **Hermes vs Claude Code vs OpenCode** — Doc B defines a 4-agent roster (Antigravity, Gravity, Hermes, Pi-Agent). The VaultOS/Dashboard already calls out "Research Agent" which is a domain agent, not a system agent. **Decision needed:** should Antigravity/Gravity/Hermes/Pi-Agent exist as separate `Agents/` folders (Level 1 core), or are they roles within the runner daemon?
10. **Telegram bot username.** Need this to test `/start`. Will be filled in once user provides it.
11. **What does "finish the Telegram gateway" mean concretely?** Interpreted as: bidirectional Telegram control of one or two reference agents (Research + a generic echo agent) end-to-end. **Confirm scope:** is it enough to drive the existing Research Agent, or must it drive ALL agents?
12. **Vision mockup fidelity** — the PNG shows a polished 3-column dashboard with 21 cards across 4 categories, plus CPU/RAM/Disk donuts, 24h token chart, and notification badges. The existing `Mission Control.md` only renders the agent cards (no sidebar, no charts). **Plan: match the center column on the weekend; sidebar panels ship in Phase 6.** Confirm scope is acceptable.
13. **Vault vs project separation.** The vault is `C:\Users\Admin\OBSIDIAN\cowork\` (this folder). Is the runner going to be developed **inside this vault** (notes-as-docs + scripts in `VaultOS/System/Scripts/`) or in a separate repo? Plan assumes inside-the-vault for simplicity. **Confirm.**

---

## Risks / Blockers

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | Obsidian Dataview blocks on vault size / file count | Medium | Medium | Batch status writes; cap at 1/s/agent; use atomic file replace |
| R2 | Telegram rate limits (30 msg/s global, 1 msg/s/chat for bots) | Low | Low | Queue replies; debounce status updates to ≤1 per 5s per chat |
| R3 | Cloud LLM provider outage during a long workflow | Medium | Medium | `fallback_model` already configured in `llms.yaml`; runner retries then downgrades per tier |
| R4 | User vault is synced (Obsidian Sync/Dropbox) → write thrash | Medium | High | Phase 2 batches writes; expose a `sync_pause_seconds` setting; document recommended config |
| R5 | Telegram bot token leaks via vault sync | Low | Critical | Token in `.env` outside vault; `.gitignore` covers it; bot commands whitelisted by user ID |
| R6 | "Finish Telegram gateway this weekend" under-scoped | Medium | Medium | Phase 1+2+3 deliver an end-to-end happy path with one agent. Anything beyond that is post-weekend |
| R7 | Doc A and Doc B describe conflicting folder layouts | High | Medium | Plan aliases in Phase 4; one canonical tree decided in Open Question #5 |
| R8 | Windows-specific path / shell differences break `shell_commands` plugin IDs | Medium | Low | Use lowercase + hyphens consistently; test on Windows before declaring done |
| R9 | Python venv confusion between `python=3.11.15` and `pip→python3.14` | Medium | Medium | Phase 1 hardcodes shebang `#!/usr/bin/env python` and documents venv creation in README |
| R10 | Karpathy wiki `.obsidian/wiki/` may not survive an Obsidian Sync round-trip | Low | Medium | Phase 4 puts a `.obsidian/wiki/.obsidianignore` to prevent sync conflicts |
| R11 | Long-running runner daemon crashes silently | Medium | High | Phase 2 wraps runner with a watchdog script that restarts on exit, writes `Logs/System/runner.crash.log` |
| R12 | Cost runaway on a buggy loop | Low | High | Phase 7 enforces `max_cost_limit_usd` hard limit per workflow; runner fails fast |
| R13 | The 1.5 MB mockup PNG sets expectations beyond what a weekend can ship | High | Medium | Scope locked to center column + Telegram E2E for weekend; rest is post-weekend roadmap |

---

## Recommended Weekend Order of Work

The user explicitly said: **"we need to finish the Telegram gateway this weekend."** Below is the exact hour-by-hour plan for Sat–Sun that delivers that, plus a foundation for everything after.

### Saturday
- **08:00–09:00 — Phase 0** (env audit). Install 11 plugins, drop in CSS, confirm Mission Control renders. _Coffee._
- **09:00–13:00 — Phase 1** (Telegram gateway). Build `telegram_gateway.py`, get a real bot from @BotFather, store token in `.env`, write `Config/users.yaml`, write Telegram reply prompt. End state: `/list`, `/status`, `/help`, `/run Research Agent` (queues a JSON), `/stop` work via Telegram. Test with the user's own Telegram ID.
- **13:00–14:00 — Lunch.**
- **14:00–18:00 — Phase 2** (runner daemon). `runner.py` + `model_router.py`. Watch Queue/Incoming, dispatch via Hermes delegate_task (preferred), update `status.json`, write outputs + logs + events. Hard part: error handling + escalation protocol.
- **18:00–19:00 — Dinner.**
- **19:00–22:00 — Phase 3** (end-to-end smoke test + dashboard wiring). Write `Research Agent/scripts/run_research.py`. Configure Shell Commands plugin with two command IDs. Verify Mission Control card flips green/red from Telegram.

### Sunday
- **08:00–10:00 — Phase 4** (Karpathy wiki). `wiki_promoter.py` + `pi_agent.py` ERL extraction. Add `/approve` Telegram command.
- **10:00–12:00 — Phase 5** (Agent Factory). Build `/create-agent` flow from Telegram. Add `Agents/index.json` regeneration.
- **12:00–13:00 — Lunch.**
- **13:00–16:00 — Phase 6** (dashboard pages). Agent Monitor, Queue Manager, Analytics, Costs, System Health. Match the mockup's right sidebar.
- **16:00–18:00 — Phase 7** (model router hardening + budget enforcement). Provider adapters, real keys, downgrade logic.
- **18:00–19:00 — Dinner.**
- **19:00–21:00 — Phase 8 lite** (Topology.canvas emitter). Stretch goal; ship only if everything else is solid.
- **21:00–22:00 — Write a `VaultOS/README.md` for end users** + update `IMPLEMENTATION_PLAN.md` with what actually shipped vs deferred.
- **22:00 — Done.**

### Monday+ (post-weekend roadmap)
Phase 9 (prompt library + prompt-as-commands). Phase 8 full topology visualization with sparsification. Multi-user permissions. Real webhook support. Obsidian Sync coexistence hardening.

---

## What this plan explicitly does NOT do

- No Docker / containerization work this weekend (single-user, single-host).
- No multi-tenant auth (single Telegram user ID whitelist).
- No Obsidian Sync conflict resolution beyond batching writes.
- No web frontend outside of Obsidian itself.
- No replacement for the user's existing tools (Claude Code, OpenCode, Hermes) — VaultOS *orchestrates* them.

---

## Files this plan will produce (summary, for tracking)

| Path | Phase | Purpose |
|---|---|---|
| `.obsidian/snippets/vault-os-style.css` | 0 | Glassmorphism + LEDs |
| `VaultOS/System/Scripts/telegram_gateway.py` | 1 | Telegram daemon |
| `VaultOS/System/Scripts/runners/telegram_runner.sh` | 1 | Launcher |
| `VaultOS/Config/users.yaml` | 1 | Telegram allowlist |
| `VaultOS/Prompts/System/Telegram Reply.md` | 1 | Reply style guide |
| `.env` | 1 | Secrets (gitignored) |
| `.gitignore` | 1 | Ignore secrets + pycache + pids |
| `VaultOS/System/Scripts/runner.py` | 2 | Queue worker daemon |
| `VaultOS/System/Scripts/model_router.py` | 2 | Tier-based model selection |
| `VaultOS/System/Scripts/runners/vaultos_runner.sh` | 2 | Cross-platform launcher |
| `VaultOS/System/Scripts/__init__.py` | 2 | Module marker |
| `VaultOS/Agents/Research Agent/scripts/run_research.py` | 3 | Reference executor |
| `.obsidian/shell-commands.json` | 3 | Run/Stop command IDs |
| `VaultOS/System/Scripts/wiki_promoter.py` | 4 | Raw→Wiki→Index promoter |
| `VaultOS/System/Scripts/pi_agent.py` | 4 | ERL heuristic extractor |
| `VaultOS/Memory/README.md` | 4 | Memory taxonomy aliasing |
| `VaultOS/Agents/Agent Factory/*` | 5 | Agent scaffolder |
| `VaultOS/System/Scripts/build_agent_index.py` | 5 | Index builder |
| `VaultOS/Agents/index.json` | 5 | Agent registry |
| `VaultOS/Dashboard/{Agent Monitor,Queue Manager,Analytics,Costs,System Health}.md` | 6 | Right-sidebar panels |
| `VaultOS/System/Scripts/providers/{openrouter,anthropic,openai,ollama,google}.py` | 7 | Provider adapters |
| `VaultOS/System/Scripts/graph_emitter.py` | 8 | Canvas emitter |
| `VaultOS/Dashboard/Topology.canvas` | 8 | Live graph |
| `VaultOS/System/Scripts/prompt_router.py` | 9 | Slash-command router |
| `VaultOS/Prompts/{System,Coding,Research,Writing,Planning,Review,Personas}/*.md` | 9 | Prompt library |
| `VaultOS/README.md` | wrap | End-user docs |

---

_End of plan. Total: 13 phases described, 9 numbered (0–8 + Phase 9 stretch), 5 weekend-critical (0–3 + Telegram day), 26 files to be created or modified. Reads of existing files: 9 (all in the corpus). Empty subdirectories inventoried: 13. Open questions for user: 13. Risks tracked: 13._
