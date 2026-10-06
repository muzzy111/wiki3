---
phase: 3
completed: true
status: ok
advisor_status: manual_override
---

# 02 — Workflow Design

## Summary

Phase 3 (Workflow Design) complete for LOOP Vault — LOOP Agent OS. The vault is a
non-code project but IS an agent pipeline OS: 10 CLI agents (hermes orchestrator plus
nine workers), 5 role folders, NATS bus, SQLite central DB. Workflow optimizes for the
vault's actual operational beats — intake, research, routing to a worker fleet,
multi-agent execution with fan-out, review gates, and memory curation.

Six workflow steps selected (within the 3-8 Guardrail). Pattern follows the "Agent
Pipeline" archetype from the reference table (Input → Research → Plan → Execute → QA →
Deliver) adapted for a vault-as-OS: Intake & Intent → Research & Context → Plan & Route
→ Execute (NATS fan-out) → Review Gate → Memory Curation & Deliver.

Session Recovery Protocol is mandatory per Step 4-E (orchestrator pattern, 5+ steps,
handoff docs present at `MONITOR/`, `TASKS/STATUS/`, `MEMORY/Index.md`). Protocol
anchors on numbered artifacts under `TASKS/{task-id}/NN-*.md` plus `MEMORY/vault.db`
state rows.

Complexity Gate Pipeline Contracts are required for Phase 4 — multi-agent + agent
pipeline archetype triggers Step 4-B. Specialist Review (content/UX/security) is
constrained by Step 4-C's three-AND conditions and does not apply by default to vault
operations (no UI directory). Handoff documents follow Step 4-D splits
(`next-session-handoff.md` current + `session-history.md` archive) applied to
`MONITOR/` log files.

The vault explicitly flags stale documents (Rules.md, Operating Manual.md, README.md)
needing reconciliation — these are addressed by a dedicated maintenance mode rather
than a workflow step so as not to inflate the operational workflow for daily use.

---

## Project Type Determination

- Phase 2.5 artifact (`02b-domain-research.md`): **not present** — fallback mapping
  table used.
- Phase 1-2 scan: `A2 = Agent pipeline` (explicit, pre-collected answer).
- Reference pattern selected: **Agent Pipeline** → `Input → Research → Plan → Execute
  → QA → Deliver`.
- Adaptation: QA step repurposed as **Review Gate** (mandatory_review for creation /
  routing / plan / content artifacts). Deliver step fused with **Memory Curation**
  because every vault operation writes back to shared memory.

Escalation to orchestrator noted below for user confirmation of the final 6-step
sequence.

---

## Workflow Steps

### Step 1: Intake & Intent

- **Purpose**: Receive a user request, run the intent gate, classify work type
  (research / task / agent-creation / memory-curation / maintenance), and emit a
  normalized intake note.
- **Input**: Natural-language user request OR scheduled trigger (e.g., INBOX-SWEEP,
  WEEKLY-AUDIT, BACKUP-VERIFICATION).
- **Output**: `TASKS/{task-id}/01-intake.md` — intent, decomposed goals, chosen work
  type, selected role axis, open questions.
- **Completion condition**: Intent gate passed (no clarifying questions pending),
  work-type classified, task-id reserved under `TASKS/{task-id}/`.
- **Related domain**: Intent clarification, request taxonomy, role axis mapping (1.0
  Coordinator / 2.0 Coder / 3.0 Researcher / 4.0 Tools / 5.0 Memory).
- **User trigger**: **yes** — this is the standard entry point. Candidate slash
  command: `/intake` or `/loop-start`.

### Step 2: Research & Context Gathering

- **Purpose**: Collect every piece of context the downstream agents will need —
  internal vault memory (`MEMORY/`, `KNOWLEDGE/`, Karpathy wiki, SQLite rows) plus
  external web / X / live-search sources where applicable.
- **Input**: Intake note (Step 1 output); task-id directory.
- **Output**: `TASKS/{task-id}/02-research.md` — findings, cited sources, open gaps,
  relevance score, and a short "what the worker fleet needs to know" synthesis.
- **Completion condition**: All question items from intake resolved OR explicitly
  marked `gap-unresolved: <reason>`. Review Gate (`research-redteam`) must pass.
- **Related domain**: Internal memory retrieval (SQLite + Karpathy wiki), live web
  search, X/Twitter search, documentation lookup, source citation discipline.
- **User trigger**: **yes** — direct research invocation (`/research`) is also a valid
  entry point, bypassing routing when only context collection is needed.

### Step 3: Plan & Route

- **Purpose**: Translate research into an executable plan and route it to the correct
  slice of the 10-agent fleet via NATS subjects (`broadcast.coders`,
  `broadcast.researchers`, `broadcast.tools`, direct `work.{agent}`).
- **Input**: Research note (Step 2) + intake note (Step 1).
- **Output**: `TASKS/{task-id}/03-plan.md` — step-by-step plan, agent assignment table
  (role → agent → NATS subject → inputs → expected artifact), fan-out/fan-in topology,
  acceptance criteria, risk notes.
- **Completion condition**: Every plan step has a named agent and NATS subject. Review
  Gate (`plan-redteam`) must pass. User-approval gate when plan touches `SYSTEM/`,
  `SYSTEM/LOCK/`, `agents.yaml`, or destructive memory operations.
- **Related domain**: Multi-agent orchestration, NATS subject design, budget-aware
  dispatch (max_skills_per_agent=3, max_mcps_per_agent=2, max_ephemeral=3/min),
  BYOK overrides.
- **User trigger**: **no** — internal step. Only reached via Step 2 completion.

### Step 4: Execute (NATS Fan-Out)

- **Purpose**: Dispatch work to the selected worker agents and collect their replies.
  Supports sequential, parallel, and gated patterns depending on the plan.
- **Input**: Plan (Step 3) with explicit agent → subject map.
- **Output**: `TASKS/{task-id}/04-execution/` directory containing one artifact per
  worker (e.g., `04-execution/claude.md`, `04-execution/grok.md`, …) plus
  `04-execution/_merged.md` consolidated by the orchestrator.
- **Completion condition**: Every assigned worker has replied (reply.{agent}) OR
  explicitly timed-out and been escalated per Pipeline Failure Recovery. Merged
  artifact exists.
- **Related domain**: NATS pub/sub, worker-fleet heartbeats, retry/timeout policy,
  loop-back request handling, inter-agent SendMessage within a session.
- **User trigger**: **no** — internal step. Driven by routing in Step 3.

### Step 5: Review Gate

- **Purpose**: Apply mandatory review before any artifact becomes authoritative. Every
  creation / decision / plan / routing / content artifact is reviewed by the correct
  domain redteam. Standards-and-correctness pass is Mavis.
- **Input**: Merged execution artifact (Step 4) + relevant inputs from Steps 2 & 3.
- **Output**: `TASKS/{task-id}/05-review.md` — findings table (CRITICAL / HIGH /
  MEDIUM / LOW), block/approve verdict, remediation requests. On BLOCK, loops back to
  Step 4 (bounded retry — see Pipeline Failure Recovery).
- **Completion condition**: APPROVE verdict from the required reviewer set OR
  explicit user override logged. Escalation ladder follows
  `.claude/rules/pipeline-review-gate.md` (1st = orchestrator auto-approve, 2nd =
  user decision, 3rd = STOP).
- **Related domain**: Red-team review across research / plan / content / code
  dimensions, security scanning, review discipline.
- **User trigger**: **no** — internal step. Can be re-invoked by orchestrator on
  demand but not a direct user entry point.

### Step 6: Memory Curation & Deliver

- **Purpose**: Fold approved artifacts into shared memory (SQLite rows, Karpathy wiki
  pages, `MEMORY/Index.md`), update monitoring dashboards, and emit the final
  deliverable to the user.
- **Input**: Approved artifacts (Step 5 output + referenced Step 4 artifacts).
- **Output**:
  - Updated memory nodes: `MEMORY/vault.db` rows, `MEMORY/Karpathy/*.md`,
    `MEMORY/Index.md`.
  - Monitor update: `MONITOR/Agents.md`, `MONITOR/Dashboard.canvas` (status / last
    activity).
  - User-facing summary: `TASKS/{task-id}/06-deliverable.md`.
  - `TASKS/STATUS/{task-id}.yaml` → `status: complete`.
- **Completion condition**: `TASKS/STATUS/{task-id}.yaml` closed; `MEMORY/Index.md`
  updated; user deliverable rendered. Review Gate (`content-redteam`) must pass for
  user-facing content and Karpathy wiki updates.
- **Related domain**: Memory curation, Karpathy wiki standards, SQLite schema
  compliance, task status lifecycle.
- **User trigger**: **yes** — standalone invocation possible (`/curate` to fold an
  already-approved artifact into memory) and the final step of the main workflow.

---

## Dependencies

```
                      ┌─── user ───┐           ┌── user ──┐
                      ▼            │           ▼           │
Step 1  Intake & Intent  →  Step 2  Research & Context  → [research-redteam Gate]
                                                                      │
                                                                      ▼
                                                           Step 3  Plan & Route
                                                                      │
                                                             [plan-redteam Gate]
                                                                      │
                                                                      ▼
                                                           Step 4  Execute (NATS fan-out)
                                                                      │
                               ┌──────────────────┬──────────────────┼──────────────┐
                               ▼                  ▼                  ▼              ▼
                        broadcast.coders   broadcast.researchers broadcast.tools  direct work.{agent}
                        (claude, cline,    (grok, openwork)     (copilot,       (hermes, mavis,
                         opencode, mavis,                        ollama)         antigravity)
                         antigravity)
                               └──────────────────┴──────────────────┴──────────────┘
                                                                      │
                                                                      ▼
                                                           Step 5  Review Gate
                                                           (mavis + domain redteams)
                                                                      │
                                                      ┌───── BLOCK ───┤
                                                      │   max 2 loop-back
                                                      ▼
                                               (back to Step 4)
                                                      │
                                                   APPROVE
                                                      │
                                                      ▼
                                              Step 6  Memory Curation & Deliver
                                              └── [content-redteam Gate] ──▶ user
```

- **Sequential**: Step 1 → Step 2 → Step 3 → Step 4 → Step 5 → Step 6.
- **Parallel (within Step 4)**: Worker agents by role axis run in parallel via NATS
  broadcast subjects.
- **Loop**: Step 5 → Step 4 (bounded, `max_retries: 2`; third BLOCK escalates to
  user per `.claude/rules/pipeline-review-gate.md`).
- **Gates**: `research-redteam` (post-Step 2), `plan-redteam` (post-Step 3),
  main-review via Mavis (Step 5), `content-redteam` (post-Step 6 for user-facing
  content).
- **User-approval gate**: Mandatory before Step 4 when the plan touches `SYSTEM/`,
  `SYSTEM/LOCK/`, `agents.yaml`, or destructive memory ops.

---

## Session Recovery Protocol

Per playbook Step 4-E, this protocol is **mandatory**:

1. Orchestrator pattern is used (hermes is the first-responder; main Claude Code
   session is the D-1 router).
2. Workflow has 6 steps with state passed between them.
3. Handoff documents exist (`TASKS/STATUS/{task-id}.yaml`, `MONITOR/Agents.md`,
   `MEMORY/Index.md`).

### 1. Checkpoint locations

| Checkpoint | Written at | Path |
|---|---|---|
| Intake | End of Step 1 | `TASKS/{task-id}/01-intake.md` (+ frontmatter `status: ok`) |
| Research | End of Step 2 (after redteam APPROVE) | `TASKS/{task-id}/02-research.md` |
| Plan | End of Step 3 (after redteam APPROVE) | `TASKS/{task-id}/03-plan.md` |
| Per-worker reply | On every `reply.{agent}` arrival | `TASKS/{task-id}/04-execution/{agent}.md` |
| Merged execution | After Step 4 fan-in | `TASKS/{task-id}/04-execution/_merged.md` |
| Review | End of Step 5 | `TASKS/{task-id}/05-review.md` |
| Deliverable | End of Step 6 | `TASKS/{task-id}/06-deliverable.md` + `TASKS/STATUS/{task-id}.yaml` |
| Global task status | On every checkpoint | `TASKS/STATUS/{task-id}.yaml` with `last_step: N, last_update: {iso}, status: in_progress|complete|blocked` |
| SQLite row | On every checkpoint | `MEMORY/vault.db` `task_progress` table (task_id, step_n, artifact_path, ts) |

### 2. Resume-detection logic

When a fresh session starts and user types `/resume {task-id}` (or orchestrator picks
up from an open `TASKS/STATUS/` entry):

1. Read `TASKS/STATUS/{task-id}.yaml` — if `status: complete`, nothing to resume.
2. Scan `TASKS/{task-id}/` for the highest-numbered artifact (`NN-*.md`).
3. Read its frontmatter: if `status: ok` + redteam Gate (if any) `advisor_status:
   ok`, the next step is `N+1`; otherwise, this step must be redone from its input.
4. For Step 4 specifically, check `TASKS/{task-id}/04-execution/` directory listing
   against the agent assignment table in `03-plan.md` — missing workers are
   re-dispatched; present workers are kept.
5. Verify `MEMORY/vault.db` `task_progress` has the same latest row as the filesystem;
   if they disagree, filesystem wins and the SQLite row is corrected (artifact file
   is the source of truth).

### 3. Leader-swap protocol

Main Claude Code session is the D-1 router. On leader swap (new session takes over):

1. New session reads `AGENTS.md` (via `@AGENTS.md` import in `CLAUDE.md`).
2. Reads `SYSTEM/Index.md`, `SYSTEM/agents.yaml`, `MONITOR/Agents.md` (verifies
   worker heartbeats are current).
3. Reads `TASKS/STATUS/` for every `in_progress` task; opens its `TASKS/{task-id}/`
   directory and runs the resume-detection logic above.
4. For each resumed task, publishes `broadcast.all` presence message so workers know
   a new leader is active (prevents duplicate dispatch).
5. Does NOT re-run completed steps. Only re-dispatches missing or blocked worker
   replies.

### 4. Failure scenarios

| Scenario | Detection | Recovery |
|---|---|---|
| Checkpoint write partial / crashed mid-write | Resume reads frontmatter and sees missing `status: ok` field or malformed YAML | Step is treated as **not completed**. Input to the step is still intact (previous checkpoint); re-run the step. |
| Filesystem artifact present but SQLite row missing | `task_progress` query by task_id returns fewer rows than filesystem has NN-*.md | Filesystem wins — rebuild SQLite rows from filesystem (idempotent insert). |
| SQLite row present but filesystem artifact missing | Filesystem scan returns no file for `task_progress` latest step | SQLite row is **invalidated** (artifact file is source of truth); treat the step as not completed and re-run. |
| NATS worker reply never arrived (worker offline / timeout) | Pipeline Failure Recovery timeout (see 03-pipeline-design.md); `TASKS/{task-id}/04-execution/{agent}.md` absent after timeout | Re-dispatch to the same agent OR escalate to a role-sibling (e.g., claude → cline). After `max_retries: 2`, escalate to user. |
| Conflicting edits (two leaders both wrote to same artifact) | Resume detects divergent SHA-256 vs. SQLite row | STOP — orchestrator writes `TASKS/{task-id}/CONFLICT.md` with both versions and surfaces to user. No auto-merge. |
| `TASKS/STATUS/{task-id}.yaml` corrupt | YAML parse fails | Reconstruct from `MEMORY/vault.db` `task_progress` latest row; if DB also broken, escalate to user with full filesystem listing. |

---

## Context for Next Phase

### Workflow steps

| # | Name | User trigger | Produces |
|---|---|---|---|
| 1 | Intake & Intent | yes (`/intake` or `/loop-start`) | `01-intake.md` |
| 2 | Research & Context | yes (`/research`) | `02-research.md` |
| 3 | Plan & Route | no | `03-plan.md` |
| 4 | Execute (NATS fan-out) | no | `04-execution/` |
| 5 | Review Gate | no | `05-review.md` |
| 6 | Memory Curation & Deliver | yes (`/curate`) | `06-deliverable.md` + MEMORY updates |

### Dependency summary

- Linear 1 → 2 → 3 → 4 → 5 → 6 with internal fan-out in Step 4.
- Loop-back Step 5 → Step 4 bounded at `max_retries: 2`.
- Gates: `research-redteam` after 2, `plan-redteam` after 3, Mavis main review at 5,
  `content-redteam` after 6 for user-facing content.
- User-approval gate before Step 4 for SYSTEM-touching plans.

### User-approval gates

1. Pre-Step 4, when plan touches `SYSTEM/`, `SYSTEM/LOCK/`, `agents.yaml`, destructive
   memory operations, or BYOK config changes.
2. Review-ladder 2nd BLOCK (per `.claude/rules/pipeline-review-gate.md`).

### Session Recovery requirement

**YES** — Phase 4 must honor the checkpoint schema in this document when designing
pipeline failure handling and artifact versioning. All numbered artifacts under
`TASKS/{task-id}/` are append-only; the directory structure IS the checkpoint
protocol.

### Instructions for Phase 4 (pipeline-design)

- Project qualifies for **Complexity Gate Pipeline Contracts** (workflow-design Step
  4-B — triggered by "multi-agent / agent pipeline / orchestrator pattern" condition).
  Produce `## Complexity Gate Pipeline Contracts` section with S / M / L contracts.
- Specialist Review (design-review / ux-review / security-review) does **not** apply
  by default — Step 4-C condition #2 (UI directory changes) is never satisfied
  (non-code vault). Only invoke security-review when plan touches secrets, BYOK keys,
  or vault.db schema.
- Main Session Role: **D-1 (router only)** — Phase 4 should document this and Phase 5
  should treat `hermes` as the primary orchestrator agent while the Claude Code main
  session is a pure dispatcher.
- Agreed Scope = **Full** — reviewer count 3+ permitted, HITL gates allowed, no
  `review_exempt: agreed_scope_slim` shortcuts.
- Reviewer roster to provision: `research-redteam`, `plan-redteam`, `content-redteam`,
  plus Mavis as code-review workhorse (already in agents.yaml). Treat all three
  redteams as domain-specific (do not merge into a generic Advisor).
- Handoff split (Step 4-D): apply to `MONITOR/Agents.md` (keep ≤10KB current) and
  `MONITOR/history/{yyyy-mm}.md` archive. Not auto-imported by `AGENTS.md`.

---

## Files Generated

| File | Description |
|---|---|
| `C:\Vaults\wiki3\docs\loop-vault-setup\02-workflow-design.md` | This document. |

(No files written to the target project outside `docs/loop-vault-setup/` per phase
rules; Phase 2 already produced the base harness.)

---

## Escalations

- [ASK] Confirm the **6-step workflow sequence** (Intake → Research → Plan → Execute →
  Review → Curation/Deliver). Alternative is to split Step 6 into Curation and
  Deliver (7 steps); the proposed fusion assumes every delivery updates memory, which
  matches the vault's design.
- [ASK] Confirm the **user-trigger set** (`/intake`, `/research`, `/curate`). An
  alternative is a single `/loop {goal}` entry point that always starts at Step 1,
  with Step 2 and Step 6 only reachable internally. Current design preserves the
  WORKFLOWS/ independent-entry pattern (research-only, curate-only invocations).
- [ASK] Confirm the **three domain redteams** (research / plan / content). Deposit of
  a fourth `maintenance-redteam` to cover scheduled WORKFLOWS/ sweeps (INBOX-SWEEP,
  WEEKLY-AUDIT, BACKUP-VERIFICATION) is possible — proposal: fold maintenance review
  into `plan-redteam` to keep reviewer count at 3.
- [ASK] Confirm the **pre-Step-4 user-approval gate scope** (SYSTEM/, SYSTEM/LOCK/,
  agents.yaml, destructive memory ops). Should BYOK config changes
  (`MCP/servers/byok-gateway/BYOK.md`) and model-override edits in `agents.yaml` also
  always require explicit approval?
- [NOTE] Stale-document reconciliation (Rules.md, Operating Manual.md, README.md per
  AGENTS.md "Known stale documents") is **not** a workflow step — treated as a
  WEEKLY-AUDIT workflow concern (WORKFLOWS/WEEKLY-AUDIT) rather than operational
  overhead on every task. User can override to add a dedicated "Reconciliation" step.
- [NOTE] Session Recovery Protocol is mandatory and included. Checkpoint schema uses
  numbered artifacts under `TASKS/{task-id}/` as the single source of truth, with
  `MEMORY/vault.db` as a derived index.
- [NOTE] Complexity Gate Pipeline Contracts generation flagged for Phase 4 — the
  project qualifies via the "multi-agent / agent pipeline" OR branch.
- [NOTE] Non-code project: Specialist Review (Step 4-C) is disabled by default. Phase
  4 will only invoke security-review on vault.db / BYOK / secrets-touching plans.

---

## Next Steps

Phase 4: pipeline-design agent — maps each step above onto the 10-agent roster, picks
NATS subjects per fan-out, decides reviewer provisioning and HITL gates, and produces
`03-pipeline-design.md` with the required `## Failure Recovery & Artifact Versioning`
section.
