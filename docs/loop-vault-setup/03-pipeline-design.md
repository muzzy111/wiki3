---
phase: 4
completed: true
status: ok
advisor_status: manual_override
---

# 03 — Pipeline Design

## Summary

Phase 4 (Pipeline Design) complete for LOOP Vault — LOOP Agent OS. Each of the six
workflow steps from `02-workflow-design.md` is mapped onto the 10-agent roster from
`SYSTEM/agents.yaml` plus three new domain redteam reviewers (`research-redteam`,
`plan-redteam`, `content-redteam`).

Primary design choices:

- **Main-session role: D-1 Router only.** The Claude Code main session dispatches
  through hermes (NATS orchestrator) and does not run skills directly. All work
  happens in the agent fleet.
- **Fan-out pattern:** Step 4 uses NATS broadcast subjects (`broadcast.coders`,
  `broadcast.researchers`, `broadcast.tools`) with direct `work.{agent}` sends
  overlaid when a single named worker is required.
- **Review gates:** All four of research / plan / content / execution are
  `mandatory_review`. The only `exempt_eligible` pipelines are the scheduled
  maintenance workflows (INBOX-SWEEP, BACKUP-VERIFICATION, WEEKLY-AUDIT numeric
  sweep) which run deterministic scripts.
- **Reviewer provisioning:** three domain redteams (sonnet-tier) plus Mavis
  (already present) as the standards-review workhorse. No merged "generic Advisor"
  per `.claude/rules/pipeline-review-gate.md`.
- **Complexity Gate contracts:** S / M / L contracts documented. S-grade applies to
  single-file memory touches and trivial maintenance. M-grade merges research+plan
  into a single `planner-agent` run (claude-mode). L-grade is the full six-step
  pipeline above.
- **Session recovery:** failure modes aligned with the checkpoint schema in
  `02-workflow-design.md`. `max_retries: 2` across loop-back and NATS timeouts, with
  escalation ladder in `.claude/rules/pipeline-review-gate.md`.
- **Agreed Scope = Full**: reviewer count 3 is within scope. No `review_exempt`
  shortcuts applied. HITL gate at pre-Step-4 for SYSTEM / LOCK / agents.yaml changes.

Models: Opus for domain redteams (user chose high-performance tier A5=Opus). Sonnet
for implementation and routing. Haiku avoided for review (per playbook).

---

## Per-Step Pipelines

### Step 1 — Intake & Intent

**Classification:** `exempt_eligible` for everyday intake (deterministic classifier
work). HITL gate present (intent-gate / intent-clarifier skill from Phase 2 baseline)
instead of a redteam reviewer.

```
user  →  main-session  →  intent-clarifier skill (Phase 2)  →  intake.md
                                                                       │
                                                   [HITL: AskUserQuestion if ambiguous]
```

| Position | Agent | Writes to | Model |
|---|---|---|---|
| 1 | **main-session** (D-1 router) | `TASKS/{task-id}/01-intake.md` | sonnet (host) |

`review_exempt: true` — `exempt_reason: "Intake is a user-interaction gate; the Phase
2 intent-gate rule + intent-clarifier skill already provides a HITL review surface."`

### Step 2 — Research & Context Gathering

**Classification:** `mandatory_review` (creation / research work). Reviewer:
`research-redteam`.

```
intake.md  →  (grok  ∥  openwork)  →  main-session merges  →  research.md
                                                                    │
                                                      [research-redteam Gate]
                                                                    │
                                                            APPROVE ──▶ Step 3
                                                            BLOCK (≤2x) ──▶ loop
```

| Position | Agent | NATS subject | Writes to | Model |
|---|---|---|---|---|
| 2a (parallel) | **grok** | `work.grok` | `TASKS/{task-id}/02-research/grok.md` | grok-super-heavy |
| 2a (parallel) | **openwork** | `work.openwork` | `TASKS/{task-id}/02-research/openwork.md` | default (openwork profile) |
| 2b (merge) | **main-session** | n/a | `TASKS/{task-id}/02-research.md` (synthesis) | sonnet (host) |
| 2c (review) | **research-redteam** | `work.research-redteam` | `TASKS/{task-id}/02-research-review.md` (review-only; no writes to artifact) | **opus** |

Escalation on review BLOCK: follow `.claude/rules/pipeline-review-gate.md` ladder (1st
= orchestrator auto-approve, 2nd = user decision, 3rd = STOP).

### Step 3 — Plan & Route

**Classification:** `mandatory_review`. Reviewer: `plan-redteam`.

```
research.md + intake.md  →  hermes  →  plan.md
                                           │
                                 [plan-redteam Gate]
                                           │
                              APPROVE → [HITL if SYSTEM-touching] → Step 4
                              BLOCK (≤2x) → loop
```

| Position | Agent | NATS subject | Writes to | Model |
|---|---|---|---|---|
| 3a | **hermes** | `work.hermes` | `TASKS/{task-id}/03-plan.md` | minimax (hermes profile) |
| 3b | **plan-redteam** | `work.plan-redteam` | `TASKS/{task-id}/03-plan-review.md` | **opus** |
| 3c (HITL) | **main-session** | n/a | user prompt | sonnet (host) |

HITL trigger condition: `03-plan.md` mentions any of `SYSTEM/`, `SYSTEM/LOCK/`,
`SYSTEM/agents.yaml`, `MEMORY/vault.db` (schema change), `MCP/servers/byok-gateway/`,
or destructive memory op.

### Step 4 — Execute (NATS Fan-Out)

**Classification:** `mandatory_review` as a whole (execution outputs feed Step 5
review). Internal worker pipelines run per plan.

```
plan.md  →  (worker group by role axis)  →  04-execution/_merged.md
            │
            ├── broadcast.coders   → claude, cline, opencode, mavis, antigravity
            ├── broadcast.researchers → grok, openwork
            ├── broadcast.tools    → copilot, ollama
            └── direct work.{agent} → hermes, mavis, antigravity (single-worker runs)
```

| Position | Agent | NATS subject | Writes to | Model |
|---|---|---|---|---|
| 4-coders (parallel subset per plan) | **claude**, **cline**, **opencode**, **mavis**, **antigravity** | `work.{agent}` or `broadcast.coders` | `TASKS/{task-id}/04-execution/{agent}.md` | default per agents.yaml |
| 4-researchers (parallel subset per plan) | **grok**, **openwork** | `work.{agent}` or `broadcast.researchers` | `TASKS/{task-id}/04-execution/{agent}.md` | grok-super-heavy / default |
| 4-tools (parallel subset per plan) | **copilot**, **ollama** | `work.{agent}` or `broadcast.tools` | `TASKS/{task-id}/04-execution/{agent}.md` | default / local |
| 4-merge | **hermes** (orchestrator) | n/a | `TASKS/{task-id}/04-execution/_merged.md` | minimax |

### Step 5 — Review Gate

**Classification:** terminal review for Step 4 output. Reviewer selection depends on
plan content:

- Code review: **mavis** (already in agents.yaml).
- Security review (conditional per workflow-design Step 4-C): skipped by default; only
  invoked when plan touches `MCP/servers/byok-gateway/`, secrets, or `vault.db`
  schema. Delegates to `security-review` skill via mavis.
- Content redteam (user-facing or Karpathy wiki writes): **content-redteam** —
  applies at Step 6, not here.

```
04-execution/_merged.md  →  mavis review  →  05-review.md
                                                    │
                                           APPROVE → Step 6
                                           BLOCK (≤2x) → loop back to Step 4
                                           3rd BLOCK → STOP (escalate)
```

| Position | Agent | NATS subject | Writes to | Model |
|---|---|---|---|---|
| 5a | **mavis** | `work.mavis` | `TASKS/{task-id}/05-review.md` | minimax-m3 (mavis profile) |
| 5b (conditional) | **mavis** + `security-review` skill | `work.mavis` | `TASKS/{task-id}/05-security.md` | minimax-m3 |

### Step 6 — Memory Curation & Deliver

**Classification:** `mandatory_review` for the content-facing portion
(Karpathy wiki pages, `MEMORY/Index.md` summary blocks, user deliverable).

```
05-review.md (APPROVE)  →  memory-curator pipeline  →  06-deliverable.md + MEMORY updates
                                      │
                                      ├── SQLite row inserts (vault.db)
                                      ├── Karpathy wiki updates
                                      ├── MEMORY/Index.md touch
                                      └── MONITOR/Agents.md status update
                                                      │
                                            [content-redteam Gate on wiki/deliverable]
                                                      │
                                           APPROVE → user deliverable rendered
                                           BLOCK (≤2x) → revise and re-render
```

| Position | Agent | NATS subject | Writes to | Model |
|---|---|---|---|---|
| 6a | **hermes** (writes MEMORY/vault.db + MEMORY/Index.md + MONITOR updates) | `work.hermes` | `MEMORY/vault.db`, `MEMORY/Index.md`, `MONITOR/*` | minimax |
| 6b | **openwork** (drafts Karpathy wiki updates + user deliverable) | `work.openwork` | `MEMORY/Karpathy/*`, `TASKS/{task-id}/06-deliverable.md` | default (openwork profile) |
| 6c | **content-redteam** | `work.content-redteam` | `TASKS/{task-id}/06-content-review.md` | **opus** |

---

## Complexity Gate Pipeline Contracts

Per workflow-design Step 4-B, the project qualifies for Complexity Gate contracts
(multi-agent / agent pipeline / orchestrator pattern). Three contracts defined:

### S-grade (main-session direct)

- **Scope match:** files ≤ 3 changed, no SYSTEM / LOCK / agents.yaml / vault.db
  schema touch, no new memory nodes, no user-facing content, no new redteam
  requirement.
- **Typical requests:** typo fix in a role AGENT.md, small MEMORY/Index.md edit, a
  single Karpathy wiki paragraph correction, a MONITOR status tweak.
- **Agents called:** 0.
- **Main session:** writes directly after Read, no NATS dispatch.
- **ownership-guard reminder:** main session is identified by absence of `agent_type`
  key in stdin JSON (per hooks-mcp-setup Step 2). No env flag or token lock file.
- **Artifact:** committed file + commit message tagged `[S-grade]`. No numbered
  TASKS/{task-id}/ directory required.
- **Cost profile:** 1 session, no NATS traffic.

### M-grade (shortened pipeline)

- **Scope match:** 5 ≤ files ≤ 15, 1–2 design decisions, no SYSTEM-touch requiring
  user approval, content review required but no full execution fan-out.
- **Pipeline:** `planner-agent` (merged research+plan) → `implementer` (single
  worker, usually mavis or claude) → `qa` (mavis main-review).
- **`planner-agent` contract (M-grade only):**
  - **Agent host:** mapped to `claude` worker in agents.yaml (persistent, deep
    reasoning). A dedicated `planner-agent` is **not** added to agents.yaml — it is
    `claude` running the `planner` skill (Phase 6 scope).
  - **Input:** user request + target file paths list (5–15 items).
  - **Output (single run, both files written in one invocation):**
    - `TASKS/{task-id}/02-research.md`
    - `TASKS/{task-id}/03-plan.md`
  - **Prohibited:** writing only one of the two files, calling claude twice (once for
    research, once for plan). Advisor Dim 12 will BLOCK this split.
- **Specialist Review:** NOT invoked on M-grade.
- **Artifact dirs:** standard `TASKS/{task-id}/` with research + plan + execution +
  review + deliverable.
- **Cost profile:** 3 agent invocations (planner → implementer → qa), ~40–50% of
  L-grade.

### L-grade (full six-step pipeline)

- **Scope match:** new feature, new agent in `agents.yaml`, cross-role fan-out
  needed, SYSTEM-touching change, new Karpathy wiki entry, policy / rule change.
- **Pipeline:** Steps 1–6 as documented in `02-workflow-design.md` with all three
  domain redteams + mavis review.
- **Specialist Review (security):** invoked only when plan touches BYOK / vault.db
  schema / secrets.
- **Specialist Review (design / ux):** NEVER invoked by default — vault has no UI
  directory, so workflow-design Step 4-C condition #2 is unsatisfiable.
- **Cost profile:** full ~8–10 agent invocations (incl. fan-out), highest cost tier.

### Grade-selection responsibility

Grade is decided by the main session (D-1 router) per the CLAUDE.md "오케스트레이터
라우팅 프로토콜" / "Orchestrator Routing Protocol" section (installed in Phase 2 /
reaffirmed in Phase 5). Default on ambiguity: **M**. Very ambiguous: **L**.
Downgrades require explicit user instruction.

---

## Pipeline Review Gate

| Pipeline | Classification | Reviewer agent | Exempt reason |
|---|---|---|---|
| intake | exempt | — (Phase 2 intent-gate + intent-clarifier) | HITL surface already present via Phase 2 baseline |
| research | mandatory_review | `research-redteam` | — |
| plan | mandatory_review | `plan-redteam` | — |
| execute (fan-out) | mandatory_review | `mavis` (code review workhorse) | — |
| memory-curation + deliverable | mandatory_review | `content-redteam` | — |
| maintenance.inbox-sweep | exempt | — | Deterministic script execution (WORKFLOWS/INBOX-SWEEP) |
| maintenance.backup-verification | exempt | — | Deterministic script execution + hash check |
| maintenance.weekly-audit (numeric sweep) | exempt | — | Deterministic SQLite + filesystem scan |
| maintenance.weekly-audit (reconciliation of stale docs) | mandatory_review | `plan-redteam` | Rule/policy adjacency — reconciliation requires decision |

Review BLOCK handling: `.claude/rules/pipeline-review-gate.md` "에스컬레이션 래더"
regulation applies (1st = orchestrator auto-approve, 2nd = user decision, 3rd =
STOP). Rule body is not duplicated here.

**Reviewer scope rules (per playbook):**
- Reviewer `allowed_dirs`: EMPTY or `TASKS/{task-id}/*-review.md` write-only (no
  write to the artifact being reviewed, no write to MEMORY/, SYSTEM/, agents/).
- Reviewer output is NEVER re-reviewed (no "review of a review").
- Reviewers are **not merged into a generic Advisor** — three distinct domain
  reviewers.

---

## Failure Recovery & Artifact Versioning

### 1. Failure Recovery termination conditions

| Pipeline | max_retries | On exhaustion | NATS timeout |
|---|---|---|---|
| research (grok ∥ openwork + redteam) | **2** | escalate to user via `.claude/rules/pipeline-review-gate.md` ladder | 90s per worker; retry same worker once; after 2nd timeout, continue with partial result + note gap |
| plan (hermes + redteam) | **2** | STOP; escalate to user | 60s; retry hermes once; after 2nd timeout, STOP (hermes is critical path) |
| execute (fan-out) | **2** per worker | after `max_retries` on a specific worker, escalate to role-sibling (claude ↔ cline, grok ↔ openwork), log the swap in `04-execution/_dispatch.log` | 120s per worker (coders may be slow); 2 timeouts → role-sibling swap; 3rd timeout → STOP for that task |
| execute → review loop-back | **2** full loops | 3rd loop BLOCK → STOP + user escalation | n/a |
| curation (hermes + openwork + content-redteam) | **2** | STOP; escalate to user | 60s per worker; 2 timeouts → STOP |
| content-redteam review loop-back | **2** | 3rd BLOCK → STOP + user escalation | n/a |
| maintenance.*  (scheduled sweeps) | **1** | after 1 retry, log failure + alert; do NOT loop (scheduled jobs re-run on their trigger cadence) | 300s per script |

Prohibited patterns (BLOCK per playbook Step 4.6):
- "Ask Builder to redesign" — no agent, no condition, no bound.
- "QA re-verifies" — no bound.
- `retry` without an integer `max_retries`.

### 2. Artifact path versioning

| Pipeline / artifact | Versioning strategy |
|---|---|
| `TASKS/{task-id}/NN-*.md` (step artifacts) | **overwrite_ok** within same `task-id` resume — idempotency guarantee: each step reads only prior numbered artifacts, so re-running a step reconstructs the same output from the same input. A new `task-id` is generated for a user's new request (never reuse). |
| `TASKS/{task-id}/04-execution/{agent}.md` (per-worker replies) | **overwrite_ok** per resume — same agent given same inputs produces same reply (worker is responsible for determinism; non-deterministic workers like grok are allowed to vary — the merge step `_merged.md` captures the authoritative blend). |
| `TASKS/{task-id}/04-execution/_merged.md` | **overwrite_ok** on resume (merge is a deterministic concat + synthesis). |
| `TASKS/{task-id}/*-review.md` | **overwrite_ok** on review re-run with same inputs. On BLOCK + loop-back, the next review iteration writes `TASKS/{task-id}/*-review.v{N}.md` (`v2`, `v3`) so the loop history is preserved. |
| `MEMORY/vault.db` | **version-controlled schema; row inserts idempotent by `(task_id, step_n, artifact_sha256)` composite key**. Row updates only via upsert; destructive deletes require HITL. |
| `MEMORY/Karpathy/*.md` (wiki updates) | **version-controlled by git history** — each update is a commit; prior content is retrievable via `git log`. Wiki pages are overwritten in place (not duplicated under `v{N}`). |
| `MEMORY/Index.md` | **overwrite_ok** — regenerated from `MEMORY/vault.db` on each curation step (deterministic from DB state). |
| `MONITOR/Agents.md` (handoff split per workflow-design Step 4-D) | **overwrite_ok** (current state only, target ≤10KB). Older entries migrated to `MONITOR/history/{yyyy-mm}.md` when `Agents.md` exceeds size budget. |
| `MONITOR/history/{yyyy-mm}.md` | **append-only** archive. Not auto-imported by `AGENTS.md`. |
| `TASKS/STATUS/{task-id}.yaml` | **overwrite_ok** (always current state). |

**Content integrity:** Every write to `TASKS/{task-id}/*` records its SHA-256 in
`MEMORY/vault.db` `task_progress` on the same transaction as the status update. On
resume, filesystem SHA mismatch with DB row triggers a conflict escalation (see
Session Recovery `failure scenarios` in `02-workflow-design.md`).

---

## Agent-Skill Mapping

Phase 5 provisions the reviewer agents listed below. Existing agents in
`SYSTEM/agents.yaml` are not re-provisioned here — they are reused as-is. Skills
listed are **names only**; actual SKILL.md files are produced in Phase 6.

| Agent | Role axis | Model (profile) | Writes to (allowed_dirs) | Skills (Phase 6 scope) |
|---|---|---|---|---|
| **main-session** (Claude Code host) | Router | sonnet (host) | `TASKS/{task-id}/01-intake.md`, `TASKS/STATUS/{task-id}.yaml` | `intake`, `route-dispatch`, `resume-detect` (plus existing `intent-clarifier`) |
| **hermes** | Coordinator / orchestrator | minimax (hermes) | `TASKS/{task-id}/03-plan.md`, `TASKS/{task-id}/04-execution/_merged.md`, `MEMORY/vault.db`, `MEMORY/Index.md`, `MONITOR/*` | `nats-dispatch`, `merge-worker-replies`, `curate-memory-index` |
| **claude** | Coder (deep) | default | `TASKS/{task-id}/04-execution/claude.md` + plan-dictated files | `planner` (M-grade only — merged research+plan), `implement-deep` |
| **cline** | Coder (bulk) | cline-pass | `TASKS/{task-id}/04-execution/cline.md` + plan-dictated files | `implement-bulk`, `parallel-apply` |
| **opencode** | Coder (tooling) | default | `TASKS/{task-id}/04-execution/opencode.md`, `MEMORY/Karpathy/*`, `TASKS/{task-id}/06-deliverable.md` | `karpathy-wiki-draft`, `deliverable-render`, `tooling-build` |
| **mavis** | Coder + reviewer (standards) | minimax-m3 | `TASKS/{task-id}/04-execution/mavis.md`, `TASKS/{task-id}/05-review.md`, `TASKS/{task-id}/05-security.md` (conditional) | `code-review-standards`, `security-review` (conditional invoke) |
| **antigravity** | Coder (large refactor) | default | `TASKS/{task-id}/04-execution/antigravity.md` + plan-dictated files | `large-refactor` |
| **grok** | Researcher (live + X) | grok-super-heavy | `TASKS/{task-id}/02-research/grok.md` | `live-search`, `x-search` |
| **openwork** | Researcher + content | default (openwork) | `TASKS/{task-id}/02-research/openwork.md`, `TASKS/{task-id}/06-deliverable.md`, `MEMORY/Karpathy/*` | `vault-memory-retrieve`, `karpathy-wiki-draft`, `deliverable-render` |
| **copilot** | Tools (suggestions) | default | `TASKS/{task-id}/04-execution/copilot.md` | `code-suggest` |
| **ollama** | Tools (local fallback) | local | `TASKS/{task-id}/04-execution/ollama.md` | `local-eval` (budget: max_skills=1, max_mcps=0) |
| **research-redteam** (new) | Reviewer | **opus** | `TASKS/{task-id}/02-research-review.md` ONLY (write-only to that file) | `research-redteam` — dimensions: source recency, counter-claim coverage, bias, citation accuracy, scope-match |
| **plan-redteam** (new) | Reviewer | **opus** | `TASKS/{task-id}/03-plan-review.md` ONLY | `plan-redteam` — dimensions: tech debt, dependency gaps, security risk, test strategy, reversibility, NATS subject coverage |
| **content-redteam** (new) | Reviewer | **opus** | `TASKS/{task-id}/06-content-review.md` ONLY | `content-redteam` — dimensions: Karpathy wiki style, source citation, user-facing clarity, memory-index consistency, link integrity |

Reviewer agents' `allowed_dirs` are strictly the single review-output file. No writes
to `MEMORY/`, `SYSTEM/`, `agents/`, or `MONITOR/`.

Model trade-offs for the three new redteams: **opus** chosen because (a) user set A5
= High-performance Opus, (b) adversarial review quality drops noticeably on
haiku-tier (playbook warning), (c) three redteams × low invocation frequency = cost
stays bounded. Sonnet would also be acceptable; the orchestrator can downgrade on
request.

---

## Communication Points

| Point | Mechanism | Where | Purpose |
|---|---|---|---|
| Intake → Research | shared file | `TASKS/{task-id}/01-intake.md` | Normalized goal + work-type |
| Research fan-out | NATS pub | `work.grok`, `work.openwork` (direct) | Dispatch to researchers |
| Research merge | shared files | `TASKS/{task-id}/02-research/{agent}.md` | Each researcher writes own file |
| Research review | NATS pub | `work.research-redteam` | Trigger redteam review |
| Research → Plan | shared file | `TASKS/{task-id}/02-research.md` | Synthesized research input to planner |
| Plan review | NATS pub | `work.plan-redteam` | Trigger redteam review |
| HITL approval gate | main-session AskUserQuestion | n/a | SYSTEM-touching plans need user approval |
| Plan → Execute | NATS pub | `broadcast.coders`, `broadcast.researchers`, `broadcast.tools`, or `work.{agent}` direct | Fan-out dispatch per plan |
| Execute per-worker | NATS reply | `reply.{agent}` with artifact pointer | Worker signals completion |
| Execute heartbeat | NATS heartbeat | `heartbeat.{agent}` | Liveness check (also used by MONITOR) |
| Execute fan-in merge | shared file | `TASKS/{task-id}/04-execution/_merged.md` | Hermes consolidates replies |
| Execute → Review | NATS pub | `work.mavis` | Trigger standards review |
| Review loop-back | NATS pub + shared file | `work.{failed-worker}` + `TASKS/{task-id}/05-review.md` findings | Return to execute with remediation ask |
| Review → Curation | shared file | `TASKS/{task-id}/05-review.md` (APPROVE verdict) | Approval signal |
| Curation hooks | hook (PostToolUse) | `MEMORY/vault.db` write triggers idx rebuild | Keep `MEMORY/Index.md` current |
| Curation → Content review | NATS pub | `work.content-redteam` | Trigger content redteam |
| Deliverable → user | shared file + CLI echo | `TASKS/{task-id}/06-deliverable.md` + main-session output | User-facing result |
| Session recovery handoff | shared file + SQLite row | `TASKS/STATUS/{task-id}.yaml` + `MEMORY/vault.db` task_progress | Leader-swap state restore |
| Monitor sync | hook (PostToolUse on NATS reply) | `MONITOR/Agents.md`, `MONITOR/Dashboard.canvas` | Keep status current |
| Inter-agent fast question | NATS SendMessage pattern | `work.{target}` + `reply.{sender}` | Rare — only when a worker needs a clarification mid-run |

---

## Main Session Role

**D-1 (Router only).**

Signals supporting this choice:

- 10 persistent CLI agents (very high agent count, well above the "1-2 agent"
  bar for D-3).
- NATS bus is the primary dispatch surface; main session cannot execute NATS pub/sub
  as effectively as a dedicated hermes orchestrator.
- hermes is explicitly described in `agents.yaml` as the "Orchestrator.
  Coordinator-anchored. First responder for messages."
- Chain depth is 6 steps with internal fan-out (not a flat 1-chain).
- Multiple user entry points (`/intake`, `/research`, `/curate`) all route through
  the agent fleet, not direct skill execution.

Main-session responsibilities:

1. Receive user requests, run intent-gate (Phase 2 skill), classify intent.
2. Reserve `TASKS/{task-id}/`, write `01-intake.md`.
3. Decide complexity grade (S / M / L) using the CLAUDE.md routing protocol.
4. Dispatch via hermes (which then NATS-pubs to workers).
5. Receive HITL prompts for SYSTEM-touching plans; call AskUserQuestion.
6. Handle resume on fresh sessions (read `TASKS/STATUS/`, decide which step to
   re-enter).
7. Never run deep skills directly — those live inside workers.

Phase 5 should set Main Session Role → D-1 and provision reviewer agents without
treating main-session as a worker.

---

## Context for Next Phase

### Agent roster for Phase 5

| Agent | Status | Model | Writes to | Source |
|---|---|---|---|---|
| hermes | existing (agents.yaml) | minimax | `TASKS/*`, `MEMORY/*`, `MONITOR/*` | agents.yaml |
| claude | existing | default | `TASKS/*` + plan-dictated | agents.yaml |
| cline | existing | cline-pass | `TASKS/*` + plan-dictated | agents.yaml |
| grok | existing | grok-super-heavy | `TASKS/{task-id}/02-research/grok.md` | agents.yaml |
| opencode | existing | default | `TASKS/*`, `MEMORY/Karpathy/*` | agents.yaml |
| mavis | existing | minimax-m3 | `TASKS/*`, `TASKS/{task-id}/05-review.md` | agents.yaml |
| antigravity | existing | default | `TASKS/*` | agents.yaml |
| copilot | existing | default | `TASKS/*` | agents.yaml |
| openwork | existing | default | `TASKS/*`, `MEMORY/Karpathy/*` | agents.yaml |
| ollama | existing | local | `TASKS/*` | agents.yaml |
| **research-redteam** | **NEW — provision** | **opus** | `TASKS/{task-id}/02-research-review.md` only | this doc |
| **plan-redteam** | **NEW — provision** | **opus** | `TASKS/{task-id}/03-plan-review.md` only | this doc |
| **content-redteam** | **NEW — provision** | **opus** | `TASKS/{task-id}/06-content-review.md` only | this doc |

### Skill names per agent (Phase 6 scope)

- main-session: `intake`, `route-dispatch`, `resume-detect` (plus Phase 2
  `intent-clarifier` already installed).
- hermes: `nats-dispatch`, `merge-worker-replies`, `curate-memory-index`.
- claude: `planner` (M-grade merged research+plan), `implement-deep`.
- cline: `implement-bulk`, `parallel-apply`.
- opencode: `karpathy-wiki-draft`, `deliverable-render`, `tooling-build`.
- mavis: `code-review-standards`, `security-review` (conditional).
- antigravity: `large-refactor`.
- grok: `live-search`, `x-search`.
- openwork: `vault-memory-retrieve`, `karpathy-wiki-draft`, `deliverable-render`.
- copilot: `code-suggest`.
- ollama: `local-eval` (max_skills=1 enforced).
- research-redteam: `research-redteam` (dimensions: source recency, counter-claim
  coverage, bias, citation accuracy, scope-match).
- plan-redteam: `plan-redteam` (dimensions: tech debt, dependency gaps, security
  risk, test strategy, reversibility, NATS subject coverage).
- content-redteam: `content-redteam` (dimensions: Karpathy style, citation,
  user-facing clarity, memory-index consistency, link integrity).

### Execution patterns

- Step 1: sequential, main-session only.
- Step 2: parallel (grok ∥ openwork) → merge → review.
- Step 3: sequential (hermes → review → HITL conditional).
- Step 4: parallel fan-out by role axis per plan → merge.
- Step 5: sequential (mavis review) → loop-back ≤2.
- Step 6: parallel (hermes memory writes ∥ openwork drafts) → content-redteam → user.

### Communication-point summary

All points listed under "Communication Points" above. Primary surfaces: NATS subjects
(`work.*`, `reply.*`, `heartbeat.*`, `broadcast.*`) + shared files under `TASKS/`,
`MEMORY/`, `MONITOR/` + SQLite `vault.db` for durable state + hooks (PostToolUse)
for monitor/index sync.

### Main Session Role

**D-1 (Router only)** — Phase 5 Orchestrator Pattern Decision input.

### Pipeline Review Gate Decisions

| Pipeline | Classification | Reviewer agent | Exempt reason |
|---|---|---|---|
| intake | exempt | — | Phase 2 intent-gate + intent-clarifier covers HITL |
| research | mandatory_review | research-redteam | — |
| plan | mandatory_review | plan-redteam | — |
| execute | mandatory_review | mavis (standards) | — |
| memory-curation + deliverable | mandatory_review | content-redteam | — |
| maintenance.inbox-sweep | exempt | — | Deterministic script |
| maintenance.backup-verification | exempt | — | Deterministic script + hash check |
| maintenance.weekly-audit (numeric) | exempt | — | Deterministic SQLite + fs scan |
| maintenance.weekly-audit (reconciliation) | mandatory_review | plan-redteam | — |

### HITL gate positions

1. **Pre-Step-4**: when plan touches `SYSTEM/`, `SYSTEM/LOCK/`,
   `SYSTEM/agents.yaml`, `MEMORY/vault.db` (schema change),
   `MCP/servers/byok-gateway/`, or destructive memory operation.
2. **Review ladder 2nd BLOCK**: per `.claude/rules/pipeline-review-gate.md`.
3. **Session-recovery conflict**: when checkpoint and SQLite disagree beyond
   recovery heuristics.

---

## Files Generated

| File | Description |
|---|---|
| `C:\Vaults\wiki3\docs\loop-vault-setup\03-pipeline-design.md` | This document. |

(No files written to the target project outside `docs/loop-vault-setup/` per phase
rules.)

---

## Escalations

- [ASK] Confirm **three new redteam agents** (`research-redteam`, `plan-redteam`,
  `content-redteam`) and their **opus** model assignment. Alternative: sonnet-tier
  to reduce cost, at the risk of weaker adversarial review (playbook warns against
  haiku). Agreed Scope = Full permits 3 reviewers.
- [ASK] Confirm **planner skill lives on `claude` agent** (not a new agent). This is
  used only for M-grade merged research+plan. Alternative: provision a dedicated
  `planner-agent` entry in `agents.yaml`. Recommendation: reuse `claude` to keep
  agent count at 13 (10 + 3 reviewers).
- [ASK] Confirm **openwork + opencode shared responsibility for Karpathy wiki
  drafts**. Both agents listed with `karpathy-wiki-draft` skill. Alternative: assign
  exclusively to one. Current choice reflects openwork's description ("HTTP API,
  cowork-style agent") and opencode's description ("GUI work, MCP servers") — both
  are reasonable fits.
- [ASK] Confirm **max_retries: 2 on execute loop-back** (3rd BLOCK = STOP + user
  escalation). Alternative: `max_retries: 1` for tighter cost control, or 3 for
  more autonomous recovery. 2 matches `.claude/rules/pipeline-review-gate.md`
  default.
- [ASK] Confirm **S-grade autonomy scope**. Current S-grade allows main-session
  to directly edit files ≤3, no SYSTEM/LOCK/agents.yaml/vault.db touch, no new
  memory nodes, no user-facing content. Should Karpathy wiki edits also be
  S-eligible for tiny corrections, or always require M+ with redteam?
- [NOTE] **Session Recovery** aligned with workflow-design.md checkpoint schema.
  Filesystem is source of truth; SQLite is derived index. SHA-256 integrity check
  on every DB-side upsert.
- [NOTE] **No design/UX reviewers** — vault has no UI directory, so Specialist
  Review (Step 4-C) is disabled by default. Only security-review is conditionally
  invoked.
- [NOTE] **ollama budget constraint respected** — ollama's `max_skills: 1,
  max_mcps: 0` from agents.yaml preserved; only `local-eval` skill assigned.
- [NOTE] **Reviewer `allowed_dirs` strict** — three redteams write only their
  single review-output file. No write to artifact under review (per playbook
  guardrail).
- [NOTE] **Complexity Gate contracts** fully specified; Phase 5 should install the
  CLAUDE.md routing-protocol section (already present from Phase 2 base harness —
  verify it mentions grade levels).

---

## Next Steps

Phase 5: agent-team definition — provision the three new redteam agents
(`research-redteam`, `plan-redteam`, `content-redteam`) in `SYSTEM/agents.yaml` via
WORKSHOP's 5-step process, create their adapter dirs under `agents/`, and bind the
skill-name set listed under "Context for Next Phase" to each agent. Preserve existing
10 agents as-is.
