---
title: "Architecture"
role: system-architecture
version: "1.0"
audience: [operators, developers, integrators]
---

# LOOP Architecture

The LOOP Agent OS is a small, observable stack: one supervisor (`loopd`) at the center, ten persistent agents wired to a NATS message bus, an Obsidian vault as the GUI, and a chat mirror that keeps every transcript on disk. This document is the single source of truth for how the pieces fit together.

## Stack Overview

```
+-----------------------------------------------------------------------------+
|                              USER INTERFACE LAYER                            |
|                                                                             |
|   +------------------+   +------------------+   +-------------------------+ |
|   |  OBSIDIAN GUI    |   |  CLI  (loopctl)  |   |  WEBHOOK ADAPTERS       | |
|   |  (vault + DVJS)  |   |  (loopctl task)  |   |  (n8n / Zapier / etc.)  | |
|   +--------+---------+   +--------+---------+   +------------+------------+ |
|            |                      |                         |              |
+------------+----------------------+-------------------------+--------------+
                             | NATS subjects: loop.task.*  loop.event.*    |
                             v                                            |
+-----------------------------------------------------------------------------+
|                       SUPERVISOR  (the OS kernel)                          |
|                                                                             |
|                              +---------------+                             |
|                              |              |                              |
|                              |    loopd     |                              |
|                              |              |                              |
|                              +------+------+-+                             |
|                                     |      | |                             |
|                          +----------+      | +----------+                  |
|                          |                 |            |                  |
|                          v                 v            v                  |
|                  +---------------+  +-------------+  +----------------+    |
|                  | TASK QUEUE    |  | REGISTRY    |  | HEALTH &       |    |
|                  | (NATS JetStrm)|  | (agents,    |  | OBSERVABILITY  |    |
|                  |               |  |  teams,     |  | EXPORTER       |    |
|                  |               |  |  skills)    |  | (Prometheus)   |    |
|                  +-------+-------+  +------+------+  +--------+-------+    |
|                          |                 |                  |           |
+--------------------------+-----------------+------------------+-----------+
                           |                 |                  |
            +--------------+                 |                  |
            |                                |                  |
            v                                v                  v
+-----------------------+        +---------------------+   +---------------+
|   AGENT POOL (10)     |        |   PROMPT LIBRARY    |   |  OBSERVABILITY|
|                       |        |                     |   |               |
|  +-----------------+  |        |  - controller.md    |   |  +---------+   |
|  | hermes          |  |        |  - team presets     |   |  |PROMETHEUS|  |
|  | claude          |  |        |  - skill catalog    |   |  +----+----+   |
|  | cline           |  |        |                     |   |       |       |
|  | grok            |  |        +---------------------+   |       v       |
|  | opencode        |  |                                  |  +---------+  |
|  | mavis           |  |        +---------------------+   |  | GRAFANA |  |
|  | antigravity     |  |        |   SKILL CATALOG    |   |  +---------+  |
|  | copilot         |  |        |                     |   |               |
|  | openwork        |  |        |  - SKILL.md x N     |   |  +---------+  |
|  | ollama          |  |        |  - evidence path    |   |  |  LOG    |  |
|  +-----------------+  |        +---------------------+   |  |  (Loki) |  |
|                       |                                  |  +---------+  |
|  each agent:          |                                  +---------------+
|  - max 3 skills       |
|  - max 2 MCPs         |        +---------------------+
|  - persona + memory   |        |   MCP REGISTRY      |
|                       |        |                     |
+-----------------------+        |  - tavily           |
                                 |  - github           |
+-----------------------+        |  - filesystem       |
|   OLLAMA  (local)     |        |  - ocr              |
|                       |        |  - dataview         |
|  - gguf inference     |        |  - browser          |
|  - model swap         |        |                     |
|  - offline fallback   |        +---------------------+
+-----------------------+
                                 +---------------------+
                                 |   CHAT MIRROR       |
                                 |   (file-backed)     |
                                 |                     |
                                 |  /CHAT/<yyyy>/<mm>/ |
                                 |  <session>.md       |
                                 +---------------------+
```

## Subsystems

### Supervisor: `loopd`

The supervisor is a long-running process. It owns:

- the task queue (durable stream on NATS JetStream)
- the registry of agents, teams, skills, and MCP servers
- health, metrics, and lifecycle for every agent
- the prompt library and the controller prompt loader

`loopd` does not run agent code itself. It dispatches work and waits for results.

### Agent Pool

Ten persistent agents live behind the supervisor:

| Agent        | Role Bias                                |
|--------------|------------------------------------------|
| hermes       | lead / orchestrator                      |
| claude       | reasoning-heavy implementation           |
| cline        | terminal-first debugging                 |
| grok         | real-time / X-style signal gathering     |
| opencode     | repo-level code edits                    |
| mavis        | background / scheduled work              |
| antigravity  | speculative / exploratory runs           |
| copilot      | inline review and test authoring         |
| openwork     | integration glue, file system first      |
| ollama       | local-only fallback (no network)         |

Each agent accepts up to **3 skills** and up to **2 MCPs** concurrently. The supervisor enforces these limits.

### Team Presets

A team preset is a named bundle: a description, 3-5 members (each with a role, an agent, a skill set, and an MCP set), example prompts, and a workload profile. Presets live in `C:/loop-services/teams/*.yaml`. Six ship in the box:

- `osint.yaml`
- `software-eng.yaml`
- `agent-eng.yaml`
- `kb-creation.yaml`
- `deep-research.yaml`
- `global-outlook.yaml`

### NATS Bus

All inter-process traffic moves through NATS subjects under the `loop.` prefix:

- `loop.task.<team>.<id>`  - task dispatch
- `loop.event.<agent>`     - agent lifecycle and progress
- `loop.result.<id>`       - final result
- `loop.heartbeat.*`       - health probes

NATS JetStream gives durability: a task that arrives survives a `loopd` restart.

### Obsidian GUI

The vault at `C:/Users/Admin/Desktop/Music/LOOP` is the human-facing layer. The supervisor writes task state into the vault as Dataview-friendly markdown. The DataviewJS scripts (see `SYSTEM/ONBOARDING.md`) read that state back as live kanban and dashboard widgets.

### CHAT Mirror

Every chat session is mirrored to disk under `CHAT/<yyyy>/<mm>/<session>.md`. The mirror is the source of truth for transcripts; the running chat UI is a thin view over it. If the UI crashes, you can replay any conversation by reading the file.

### MCP Registry

Model Context Protocol servers extend any agent at runtime. Servers are declared in `C:/loop-services/mcp/`. Examples shipped in the box:

- `tavily`     - web search
- `github`     - PR, issue, file APIs
- `filesystem` - vault and workspace I/O
- `ocr`        - image and PDF OCR
- `dataview`   - vault index queries
- `browser`    - interactive page control

### Ollama

Local inference. `ollama` is one of the ten persistent agents and the only one that runs entirely offline. Use it as a fallback when network access is restricted, or for private workloads.

### Observability

- Prometheus scrapes `loopd`'s `/metrics`.
- Grafana renders the dashboards.
- Loki captures structured logs from every agent.

Health is the first thing the supervisor checks. A failed agent is drained, restarted, and reflected in the registry.

## Data Flow

A typical dispatch:

1. The user (or `loopctl`, or a webhook) submits a task against a team preset.
2. `loopd` resolves the preset and writes a task record to the NATS stream.
3. `loopd` assigns each member a slice and dispatches to their NATS inbox.
4. Each agent loads its skills and MCPs, executes, and publishes events and a result.
5. `loopd` aggregates results, writes to the chat mirror, and updates the kanban.
6. Prometheus and Grafana show the run; the vault reflects it as Dataview tables.

## Boundaries

- `loopd` never imports an agent's tools. It only passes work and collects results.
- Agents never read each other's memory directly. They go through the supervisor.
- The CHAT mirror is append-only. Corrections are new files, never in-place edits.
- Team presets are declarative. No code lives in a preset.

## See Also

- `SYSTEM/Operating Manual.md` - how to run it
- `SYSTEM/Developer Guide.md`  - how to extend it
- `SYSTEM/ONBOARDING.md`       - first-run wizard
- `C:/loop-services/teams/`    - the team presets
