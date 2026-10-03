# agent-cowork-space

A folder-only, no-code-runtime agent collaboration space. Everything is
folders + markdown + JSON + YAML. Every behavior is encoded as a file an
agent can read on startup, not as running software.

Inspired by `VaultOS-v.02` (per-agent homes + `Chat/` bus + phase-based
protocol). Expanded for general-purpose multi-agent work.

## Design rules (the four constraints)

1. **Folders organize agents**, not files. Each agent gets a home.
2. **Markdown is the protocol.** Every cross-agent message is a `.md` file in
   `Chat/`, with a YAML frontmatter header.
3. **JSON is the state.** Active jobs, locks, registries, manifests are
   JSON in `State/`. Machine-readable, no parsing ambiguity.
4. **YAML is the config.** Agent identities, schedules, schemas live in
   `Config/`. Human-editable, schema-validatable.

No databases. No daemons. No Python. Just files.

## Top-level layout

```
agent-cowork-space/
├── README.md                          # this file
├── QUICKSTART.md                      # 5-minute onboarding for a new agent
├── PROTOCOL.md                        # the cross-agent message protocol
│
├── agents/                            # per-agent homes
│   ├── Hermes/                        # orchestrator / lead
│   ├── OpenCode/                      # builder / coder
│   ├── Antigravity/                   # strategist / reviewer
│   ├── NotebookLM/                    # private-knowledge retrieval
│   └── _template/                     # blank home for new agents
│
├── Chat/                              # cross-agent message bus (MD + YAML frontmatter)
│   ├── inbox/                         # unread messages waiting for pickup
│   ├── processed/                     # messages an agent has acknowledged
│   └── archive/                       # old messages
│
├── Build/                             # active project outputs (mirrored from Source)
├── Source/                            # inputs: ingested repos, data, refs
├── Library/                           # reusable assets (skills, prompts, schemas)
├── Workflows/                         # workflow library (mirrors C:\Users\Admin\Documents\hlp)
├── Sessions/                          # chronological session logs (Day-N journals)
├── Decisions/                         # Architecture Decision Records (ADRs)
├── Retrospectives/                    # post-mortems (one per major cycle)
├── Inbox/                             # human drop zone for new tasks
├── Outbox/                            # finalized deliverables awaiting handoff
├── Archive/                           # cold storage
│
├── State/                             # JSON: live state (jobs, locks, registry)
├── Config/                            # YAML: identities, schedules, manifests
├── Templates/                         # reusable document scaffolds
└── _meta/                             # this template's own docs + changelog
```

## Core loop

```
HUMAN → Inbox/  ──►  Hermes (orchestrator)
                       │
                       ├── survey agents  ──► Chat/inbox/*-survey.md
                       ├── discussion round ──► Chat/inbox/*-discussion-N.md
                       ├── lock decision  ──► Decisions/NNNN-<slug>.md
                       │
                       └── dispatch  ──►  OpenCode / Antigravity / NotebookLM
                                              │
                                              ├── work → Build/<project>/
                                              └── report → Chat/inbox/<agent>-report.md
                       │
                       └── close  ──►  Outbox/ + Retrospectives/
```

## Message protocol

Every cross-agent message is a markdown file with YAML frontmatter. See
`PROTOCOL.md` for the full spec. Minimum header:

```yaml
---
from: Hermes
to: Antigravity
phase: survey | discussion | checkpoint | report | decision | ack
priority: low | normal | high | blocker
created: 2026-06-30T10:00:00-04:00
status: open | in-progress | closed
related: [Build/project-x, Decisions/0007-foo]
---
```

## Onboarding a new agent

1. Copy `agents/_template/` to `agents/<name>/`.
2. Edit `IDENTITY You are <name>, <role>.txt` (the file an agent reads first).
3. Edit `Config/agents/<name>.yaml` (machine-readable identity, tools, limits).
4. Add `agents/<name>/README.md` (human-readable role + handoff conventions).
5. Add the agent to `Config/registry.yaml` and `Config/roster.yaml`.

## Adding a new workflow

1. Copy `Templates/workflow.md` to `Workflows/<NN-slug>/PROMPT.md`.
2. Update `Workflows/INDEX.md` and `Workflows/_manifest.json`.
3. Reference the workflow from any agent's `IDENTITY.txt` if it's the
   agent's primary mode.

## Anti-patterns (do not do)

- ❌ Running daemons, watchers, or schedulers inside this space.
- ❌ Committing binary files (images, PDFs) — link to them, don't embed.
- ❌ Storing secrets anywhere except `.gitignore`-d `Config/secrets.yaml`.
- ❌ Long un-conventional names — folder names are part of the protocol.
- ❌ Editing files in `Chat/processed/` or `Chat/archive/` — append-only.

## Versioning

The template itself is versioned. See `_meta/CHANGELOG.md` and
`_meta/TEMPLATE_VERSION.yaml`. Breaking changes bump the major version.