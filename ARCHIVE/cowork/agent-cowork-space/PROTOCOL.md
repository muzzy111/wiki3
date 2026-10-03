# Cross-Agent Message Protocol

Every file in `Chat/` is a markdown document with YAML frontmatter. This
file defines the schema, the lifecycle, and the contracts.

## File location

```
Chat/
├── inbox/         # unread, addressed to specific agents
├── processed/     # acknowledged, retained for history
└── archive/       # older than 90 days, cold storage
```

## Filename convention

```
<from-agent>-<phase>-<short-slug>.md
```

Examples:

```
hermes-survey-vault-priorities.md
antigravity-discussion-1-stealth-scraping.md
opencode-report-build-phase-2.md
hermes-decision-0003-llm-mapreduce.md
notebooklm-ack-private-corpus-loaded.md
```

## YAML frontmatter schema (required fields)

```yaml
---
# --- Identity ---
from: <agent-name>           # required: must exist in Config/registry.yaml
to: <agent-name | "@all">    # required: target agent, or broadcast
cc: [<agent-name>]          # optional: observers to keep in the loop

# --- Protocol ---
phase: <phase-name>          # required: see Phase enum below
priority: <priority>         # required: blocker | high | normal | low
status: <status>             # required: open | in-progress | closed | blocked

# --- Linking ---
related:                     # optional: links to other artifacts
  - Build/vault-research
  - Decisions/0003-llm-mapreduce
  - State/jobs/job-42.json
parent: <filename>           # optional: reply-to chain
thread: <thread-id>          # optional: group multi-message conversations

# --- Timing ---
created: 2026-06-30T10:00:00-04:00
deadline: 2026-06-30T18:00:00-04:00   # optional

# --- Misc ---
tags: [survey, research, build]        # optional
version: 1                             # optional: increments on revisions
---
```

## Phase enum

| Phase         | Sender        | Receiver       | Purpose |
|---------------|---------------|----------------|---------|
| `survey`      | orchestrator  | any/all        | Initial info-gathering request |
| `discussion-N`| any           | any/all        | Discussion round N (1-indexed) |
| `decision`    | orchestrator  | any/all        | Locked decision (also written to `Decisions/`) |
| `checkpoint`  | orchestrator  | reviewer       | Mid-build review request |
| `report`      | worker        | orchestrator   | Status / completion report |
| `ack`         | receiver      | sender         | Acknowledgement of receipt |
| `question`    | any           | any            | Clarification request |
| `block`       | any           | any            | Stop-work signal (highest priority) |
| `unblock`     | sender of block | any          | Resume-work signal |

## Status lifecycle

```
open  ──►  in-progress  ──►  closed
              │
              ├──►  blocked  ──►  in-progress  (after unblock)
              │
              └──►  (stale)  ──►  archived after 90 days
```

## Body conventions

The markdown body is free-form, but each phase has a recommended skeleton.
See `Templates/message.md` for the canonical scaffold.

## Contracts

1. **Receivers must `ack`** within their declared SLA
   (`Config/agents/<name>.yaml` → `ack_sla_minutes`).
2. **`decision` messages are immutable.** Corrections are new decisions
   that supersede (use `superseded_by` in frontmatter).
3. **`block` messages are non-negotiable.** Only the originator can `unblock`.
4. **`@all` broadcasts** go to every agent in `Config/registry.yaml`.
   Use sparingly.
5. **Status changes must be reflected in `State/active-jobs.json`.**
   A message with `status: closed` requires a corresponding job update.

## Verifier expectations

The orchestrator (Hermes) periodically runs a verifier pass that:
1. Reads every `Chat/inbox/*.md` and validates YAML against the schema.
2. Cross-checks claims against `State/`, `Build/`, `Decisions/`.
3. Moves stale `open` messages (>7 days) to `archive/` with a note.

See `State/verifier-reports/` for the latest run.

## Versioning

The protocol is versioned in `Config/protocol-version.yaml`. Bumping it
requires a Decision record.