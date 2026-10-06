---
phase: 5
completed: true
status: ok
advisor_status: manual_override
scope_confirmation: confirmed
model_confirmation: confirmed
---

# 04 — Agent Team

Agreed Scope: Full (user agreement: docs/loop-vault-setup/01-discovery-answers.md A10)
Model Tier Applied: 고성능형 (Opus) — per A5

## Summary

Phase 5 provisions the agent team for LOOP Vault — LOOP Agent OS. The project is
confirmed as **D-1 (pure orchestrator)**: the Claude Code main session is a
router-only intake/dispatch layer; all substantive work runs in the ten
persistent NATS-anchored CLI workers (hermes, claude, cline, grok, opencode,
mavis, antigravity, copilot, openwork, ollama) plus three newly provisioned
adversarial reviewers (`research-redteam`, `plan-redteam`, `content-redteam`).

**13 total agents** — within the "Full" agreed-scope allowance (無제한). The
redteam trio was selected over a merged "generic Advisor" because the pipeline
has three distinct review surfaces (research synthesis, plan risk, user-facing
content) and `.claude/rules/pipeline-review-gate.md` explicitly prohibits
merged reviewers.

**Model assignment**: 고성능형 (A5=Opus) matrix applied. All deep workers,
reviewers, and planners run at `opus`. Narrow single-file / local-fallback
workers (`copilot`, `ollama`) run at `sonnet` per the opus-tier matrix row for
simple validation. Models are declared via alias only (no pinned snapshot IDs).

**Deliverables**: 13 lean `.claude/agents/*.md` adapter files (`~20-25 lines`
each, WHO-focused), plus three new entries in `SYSTEM/agents.yaml` for the
redteam trio with strict `allowed_dirs` single-file write-only enforcement.
Existing 10 agents in `agents.yaml` were preserved as-is. Skill (HOW) authoring
is deferred to Phase 6.

---

## Team Structure

**Role axes** (per `SYSTEM/agents.yaml` broadcast groups):

```
Main Session (D-1 Router)
    │
    └── Hermes (orchestrator, NATS dispatcher)
            │
            ├── Coders (broadcast.coders)
            │     claude · cline · opencode · mavis · antigravity
            │
            ├── Researchers (broadcast.researchers)
            │     grok · openwork
            │
            ├── Tools (broadcast.tools)
            │     copilot · ollama
            │
            └── Reviewers (ephemeral, no broadcast)
                  research-redteam · plan-redteam · content-redteam
```

No formal `TeamCreate` grouping — LOOP uses NATS subjects as the team boundary.
The reviewer trio is **ephemeral** (`is_persistent: false` in agents.yaml): they
are summoned per task by the main session via the `.claude/agents/*.md` adapter,
not spawned as long-lived loopd workers.

---

## Orchestrator Pattern Decision

**D-1 (pure orchestrator / main session is router-only)** — confirmed.

**Rationale** (from Phase 4 pipeline design):
- 13 agents, well above the D-3 "1-2 agent" threshold.
- NATS bus is the primary dispatch surface; main session cannot NATS-publish
  as effectively as the dedicated Hermes worker.
- Hermes is explicitly described in `agents.yaml` as the "Orchestrator.
  Coordinator-anchored. First responder for messages."
- Chain depth is 6 steps with internal fan-out — not a flat 1-chain.
- Multiple user entry points (`/intake`, `/research`, `/curate`) all route
  through the agent fleet, not direct skill execution.

**Phase 6 implication**: All agent-owned skills (HOW files) go under
`playbooks/{skill-name}.md` — NOT `.claude/skills/{skill-name}/SKILL.md` —
so Claude Code main-session auto-discovery does not expose them as directly
callable. The only exception is the main-session's own three skills (`intake`,
`route-dispatch`, `resume-detect`) which may live under `.claude/skills/` if
intentionally user-invocable; Phase 6 will decide.

---

## Agent-Skill Ownership Table

Each skill is owned by exactly one agent (1:N; no shared ownership). Storage
locations below reflect the D-1 pattern — `playbooks/` for agent-chain-internal
skills, `.claude/skills/` reserved for the main-session's user-invocable set.

| Agent | Skill | Expected storage location |
|---|---|---|
| **main-session** | `intake` | `.claude/skills/intake/SKILL.md` (user-invocable) |
| **main-session** | `route-dispatch` | `.claude/skills/route-dispatch/SKILL.md` (user-invocable) |
| **main-session** | `resume-detect` | `.claude/skills/resume-detect/SKILL.md` (user-invocable) |
| **main-session** | `intent-clarifier` | *existing (Phase 2 baseline, not re-authored)* |
| **hermes** | `nats-dispatch` | `playbooks/nats-dispatch.md` |
| **hermes** | `merge-worker-replies` | `playbooks/merge-worker-replies.md` |
| **hermes** | `curate-memory-index` | `playbooks/curate-memory-index.md` |
| **claude** | `planner` | `playbooks/planner.md` (M-grade only) |
| **claude** | `implement-deep` | `playbooks/implement-deep.md` |
| **cline** | `implement-bulk` | `playbooks/implement-bulk.md` |
| **cline** | `parallel-apply` | `playbooks/parallel-apply.md` |
| **opencode** | `tooling-build` | `playbooks/tooling-build.md` |
| **opencode** | `karpathy-wiki-draft` (shared) | `playbooks/karpathy-wiki-draft.md` |
| **opencode** | `deliverable-render` (shared) | `playbooks/deliverable-render.md` |
| **mavis** | `code-review-standards` | `playbooks/code-review-standards.md` |
| **mavis** | `security-review` (conditional) | `playbooks/security-review.md` |
| **antigravity** | `large-refactor` | `playbooks/large-refactor.md` |
| **grok** | `live-search` | `playbooks/live-search.md` |
| **grok** | `x-search` | `playbooks/x-search.md` |
| **openwork** | `vault-memory-retrieve` | `playbooks/vault-memory-retrieve.md` |
| **openwork** | `karpathy-wiki-draft` (shared file, co-owner) | `playbooks/karpathy-wiki-draft.md` |
| **openwork** | `deliverable-render` (shared file, co-owner) | `playbooks/deliverable-render.md` |
| **copilot** | `code-suggest` | `playbooks/code-suggest.md` |
| **ollama** | `local-eval` | `playbooks/local-eval.md` (budget-locked: `max_skills=1`) |
| **research-redteam** | `research-review` | `playbooks/research-review.md` |
| **plan-redteam** | `plan-review` | `playbooks/plan-review.md` |
| **content-redteam** | `content-review` | `playbooks/content-review.md` |

**Note on shared playbook files** (`karpathy-wiki-draft`, `deliverable-render`):
opencode and openwork both load the same playbook file. This is NOT shared
skill ownership — the file is a shared *reference document*. Each agent's
Playbooks section lists the path independently; Phase 6 should author the file
once and both agents' adapters reference it. If the two agents' usage diverges,
Phase 6 may split into `karpathy-wiki-draft-opencode.md` + `-openwork.md`.

---

## Agent Model Table

| Agent | Role | Complexity | Model | Rationale |
|---|---|---|---|---|
| hermes | Orchestrator / coordinator | 복잡 설계 (orchestration) | **opus** | Matrix row 1, opus tier. Routing + merge + curation at scale. |
| claude | Deep implementer / planner | 복잡 설계 (deep impl + planner) | **opus** | Matrix row 1, opus tier. M-grade merged research+plan. |
| cline | Bulk / parallel editor | 구현 | **opus** | Matrix row 2, opus tier (고성능형). Bulk fanout correctness-sensitive. |
| opencode | Tooling + content author | 구현 + 리서치 | **opus** | Matrix row 1/2, opus tier. MCP + Karpathy + deliverable. |
| mavis | Standards + security reviewer | 리뷰 | **opus** | Matrix row 2, opus tier. Terminal review of execution output. |
| antigravity | Large-refactor swarm | 구현 (리팩터) | **opus** | Matrix row 2, opus tier. Cross-module reasoning. |
| grok | Live-signal researcher | 리서치 | **opus** | Matrix row 1, opus tier. Source recency + citation grading. |
| openwork | Vault researcher + content | 리서치 | **opus** | Matrix row 1, opus tier. Narrative + Karpathy drafting. |
| copilot | Quick single-file suggestions | 단순 검증 | **sonnet** | Matrix row 3, opus tier (고성능형 maps simple to sonnet). Narrow completions. |
| ollama | Local function-call fallback | 단순 검증 | **sonnet** | Matrix row 3, opus tier. Local eval only; budget locked. |
| research-redteam | Adversarial research reviewer | 리뷰 | **opus** | Row 2, opus tier. Adversarial quality degrades on sonnet (playbook note). |
| plan-redteam | Adversarial plan reviewer | 리뷰 | **opus** | Row 2, opus tier. Same reasoning. |
| content-redteam | Adversarial content reviewer | 리뷰 | **opus** | Row 2, opus tier. Same reasoning. |

**Overrides from matrix default**: none. Every assignment lands on the matrix
default for its row at opus tier. No individual deviations recorded.

**Alias discipline**: all `model` fields in `.claude/agents/*.md` use the
`opus` / `sonnet` / `haiku` aliases. No pinned snapshot IDs.

---

## Agent Identities (summary)

Full identity bodies live in `.claude/agents/{agent}.md`. One-line summaries:

- **hermes** — Coordinator-anchored orchestrator. Routes work, merges replies,
  curates `MEMORY/vault.db` + `MEMORY/Index.md` + `MONITOR/*`. Never authors
  deliverables.
- **claude** — Deep implementer and M-grade planner. Owns the merged
  research+plan contract (both files, one invocation).
- **cline** — Bulk-edit and parallel-apply worker. No design decisions —
  mechanical execution of an approved plan.
- **grok** — Live-signal researcher (web + X/Twitter) with mandatory citation
  + retrieval timestamp.
- **opencode** — Platform/tooling builder; co-author on Karpathy wiki + user
  deliverable. Leads when the task is tooling-first.
- **mavis** — Standards-review workhorse + conditional security reviewer.
  Terminal review of step 4 execution output.
- **antigravity** — IDE-aware large-refactor swarm. Per-file commit cadence
  on cross-module refactors.
- **copilot** — Narrow-scope suggestions and docstrings. Hard stop at >1 file
  or >50 lines.
- **openwork** — Vault memory retrieval + Karpathy wiki + deliverable
  authoring. Primary when the piece is narrative-first.
- **ollama** — Local-only function-calling fallback. No MCP, no cloud,
  `max_skills=1`.
- **research-redteam** — Adversarial reviewer of `02-research.md` on 5 axes
  (source recency, counter-claim coverage, bias, citation accuracy, scope-match).
- **plan-redteam** — Adversarial reviewer of `03-plan.md` on 6 axes
  (tech debt, dependency gaps, security risk, test strategy, reversibility,
  NATS subject coverage). Flags HITL-required scope.
- **content-redteam** — Adversarial reviewer of `06-deliverable.md` and
  Karpathy wiki updates on 5 axes (style, citation, user-facing clarity,
  memory-index consistency, link integrity).

---

## Communication Patterns

| Point | Mechanism | Surface | Purpose |
|---|---|---|---|
| Intake → Research | shared file | `TASKS/{id}/01-intake.md` | Normalized goal + grade |
| Research fan-out | NATS pub | `work.grok` ∥ `work.openwork` | Dispatch to researchers |
| Research per-worker reply | NATS reply + shared file | `reply.{agent}` + `TASKS/{id}/02-research/{agent}.md` | Worker completion signal |
| Research merge | shared file | `TASKS/{id}/02-research.md` | Hermes/main-session synthesis |
| Research review | NATS pub + shared file | `work.research-redteam` → `02-research-review.md` | Adversarial gate |
| Plan author | NATS pub + shared file | `work.hermes` → `03-plan.md` | Plan written by Hermes |
| Plan review | NATS pub + shared file | `work.plan-redteam` → `03-plan-review.md` | Adversarial gate |
| HITL approval gate | main-session AskUserQuestion | main session only | Pre-step-4 for SYSTEM-touching plans |
| Execute fan-out | NATS pub | `broadcast.coders` / `.researchers` / `.tools` or `work.{agent}` | Role-axis dispatch |
| Execute per-worker reply | NATS reply + shared file | `reply.{agent}` + `TASKS/{id}/04-execution/{agent}.md` | Worker completion |
| Execute fan-in merge | shared file | `TASKS/{id}/04-execution/_merged.md` | Hermes consolidation |
| Standards review | NATS pub + shared file | `work.mavis` → `05-review.md` | Terminal step-4 review |
| Security review (conditional) | NATS pub + shared file | `work.mavis` + `security-review` skill → `05-security.md` | Only when BYOK/secrets/schema touched |
| Review loop-back | NATS pub + shared file | `work.{failed-worker}` + remediation ask | ≤2 retries |
| Curation | NATS pub + hook | `work.hermes` + PostToolUse(vault.db write) → index rebuild | Memory + Index sync |
| Content review | NATS pub + shared file | `work.content-redteam` → `06-content-review.md` | Deliverable + Karpathy gate |
| Deliverable → user | shared file + CLI echo | `TASKS/{id}/06-deliverable.md` + main-session output | User-facing result |
| Heartbeat / monitor | NATS heartbeat + hook | `heartbeat.{agent}` + `MONITOR/*` | Liveness + status |
| Session recovery | shared file + SQLite | `TASKS/STATUS/{id}.yaml` + `vault.db task_progress` | Leader-swap restore |

**Models in play**: SendMessage pattern = NATS `work.{target}` + `reply.{sender}`
subjects (used for rare mid-run clarifications). Shared-file handoff = canonical
pattern for all step-boundary transitions. Hook gate = PostToolUse hooks drive
`MEMORY/Index.md` + `MONITOR/*` auto-sync.

---

## Ownership Guard Scope

Multi-agent fleet, so ownership guard applies. Enforcement surfaces are
documented here; the actual PreToolUse hook is authored in Phase 7-8.

**Reviewer allowed_dirs (strict single-file write-only)**:

| Agent | allowed_dirs | Enforced by |
|---|---|---|
| research-redteam | `TASKS/*/02-research-review.md` | agents.yaml `allowed_dirs` + Phase 7-8 PreToolUse hook |
| plan-redteam | `TASKS/*/03-plan-review.md` | agents.yaml `allowed_dirs` + Phase 7-8 PreToolUse hook |
| content-redteam | `TASKS/*/06-content-review.md` | agents.yaml `allowed_dirs` + Phase 7-8 PreToolUse hook |

**Worker allowed_dirs** (declared in each `.claude/agents/*.md` Rules section;
loopd uses `agents.yaml` broadcast groups for NATS, not path enforcement; the
PreToolUse hook authored in Phase 7-8 enforces the per-agent write scope).

**Shared writable zones (any agent)**:
- `TASKS/{id}/04-execution/{own-agent-name}.md` — per-worker reply file.
- `docs/` — audit/documentation (not production write path).

**Protected zones (HITL required)**:
- `SYSTEM/`, `SYSTEM/LOCK/`, `SYSTEM/agents.yaml`
- `MEMORY/vault.db` schema (DDL)
- `MCP/servers/byok-gateway/`

**Hermes-only writes**:
- `MEMORY/vault.db` row inserts/upserts (idempotent by composite key)
- `MEMORY/Index.md` (regenerated from vault.db)
- `MONITOR/*`

**Openwork + opencode shared write path**:
- `MEMORY/Karpathy/*` — content-redteam reviews before user sees.
- `TASKS/{id}/06-deliverable.md`.

---

## Files Generated

| File | Purpose |
|---|---|
| `C:\Vaults\wiki3\.claude\agents\hermes.md` | Agent definition (WHO) — orchestrator |
| `C:\Vaults\wiki3\.claude\agents\claude.md` | Agent definition (WHO) — deep impl / planner |
| `C:\Vaults\wiki3\.claude\agents\cline.md` | Agent definition (WHO) — bulk editor |
| `C:\Vaults\wiki3\.claude\agents\grok.md` | Agent definition (WHO) — live-signal researcher |
| `C:\Vaults\wiki3\.claude\agents\opencode.md` | Agent definition (WHO) — tooling + content |
| `C:\Vaults\wiki3\.claude\agents\mavis.md` | Agent definition (WHO) — standards + security reviewer |
| `C:\Vaults\wiki3\.claude\agents\antigravity.md` | Agent definition (WHO) — large-refactor |
| `C:\Vaults\wiki3\.claude\agents\copilot.md` | Agent definition (WHO) — quick suggestions |
| `C:\Vaults\wiki3\.claude\agents\openwork.md` | Agent definition (WHO) — narrative researcher + content |
| `C:\Vaults\wiki3\.claude\agents\ollama.md` | Agent definition (WHO) — local-only fallback |
| `C:\Vaults\wiki3\.claude\agents\research-redteam.md` | Agent definition (WHO) — adversarial research reviewer (NEW) |
| `C:\Vaults\wiki3\.claude\agents\plan-redteam.md` | Agent definition (WHO) — adversarial plan reviewer (NEW) |
| `C:\Vaults\wiki3\.claude\agents\content-redteam.md` | Agent definition (WHO) — adversarial content reviewer (NEW) |
| `C:\Vaults\wiki3\SYSTEM\agents.yaml` | Updated — 3 new redteam entries appended under the review tier |
| `C:\Vaults\wiki3\docs\loop-vault-setup\04-agent-team.md` | This artifact |

---

## Context for Next Phase

### Orchestrator Pattern Decision
**D-1 (pure orchestrator)**. Phase 6 must author agent-chain-internal skills
under `playbooks/{skill-name}.md`. Main-session user-invocable skills (if any)
go under `.claude/skills/`.

### Model Tier Applied
**고성능형 (Opus)** — original A5 value. Confirmation Gate should compare any
re-dispatch's `[Model Tier]` against this.

### Agent-Skill ownership (confirmed)
See "Agent-Skill Ownership Table" above. Phase 6 must produce one `SKILL.md` /
playbook file per row (except the three main-session skills tagged
*user-invocable* and the existing `intent-clarifier` from Phase 2).

### Skills to be authored in Phase 6

**Main-session (3)** — `.claude/skills/{name}/SKILL.md`:
- `intake` · `route-dispatch` · `resume-detect`

**Agent playbooks (18 distinct files)** — `playbooks/{name}.md`:
- hermes: `nats-dispatch` · `merge-worker-replies` · `curate-memory-index`
- claude: `planner` · `implement-deep`
- cline: `implement-bulk` · `parallel-apply`
- opencode: `tooling-build`
- opencode + openwork (shared file): `karpathy-wiki-draft`
- opencode + openwork (shared file): `deliverable-render`
- mavis: `code-review-standards` · `security-review`
- antigravity: `large-refactor`
- grok: `live-search` · `x-search`
- openwork: `vault-memory-retrieve`
- copilot: `code-suggest`
- ollama: `local-eval`
- research-redteam: `research-review`
- plan-redteam: `plan-review`
- content-redteam: `content-review`

**Total**: 3 main-session SKILL.md + 18 playbook files = **21 skill files**.

### Design constraints for Phase 6

- All playbooks must declare `allowed_dirs` in frontmatter matching the
  owning agent's Rules section write scope.
- Reviewer playbooks (`research-review`, `plan-review`, `content-review`) must
  specify the dimension list used in each adversarial review and the APPROVE /
  BLOCK verdict schema.
- `planner.md` must enforce the "both files in one invocation" contract
  (M-grade only; L-grade uses the full research → plan split).
- `security-review.md` must be invoked by mavis only when the plan touches
  `MCP/servers/byok-gateway/`, secrets, or `vault.db` schema.
- `karpathy-wiki-draft.md` and `deliverable-render.md` are shared reference
  files between opencode and openwork — write once, reference twice.
- `local-eval.md` on ollama must respect `max_skills=1`, `max_mcps=0` budget.

### HITL gate positions (for Phase 7-8 hook authoring)
1. **Pre-Step-4** when plan mentions `SYSTEM/`, `SYSTEM/LOCK/`, `agents.yaml`,
   `vault.db` schema, `MCP/servers/byok-gateway/`, or destructive memory ops.
2. **Review ladder 2nd BLOCK** on any of the four review gates.
3. **Session-recovery SHA conflict** between filesystem and `vault.db`
   `task_progress` row.

### Pipeline review gate decisions (restated for Phase 6-8)

| Pipeline | Classification | Reviewer agent |
|---|---|---|
| intake | exempt | — (Phase 2 intent-gate) |
| research | mandatory_review | research-redteam |
| plan | mandatory_review | plan-redteam |
| execute | mandatory_review | mavis |
| memory-curation + deliverable | mandatory_review | content-redteam |
| maintenance.inbox-sweep | exempt | — (deterministic) |
| maintenance.backup-verification | exempt | — (deterministic) |
| maintenance.weekly-audit (numeric) | exempt | — (deterministic) |
| maintenance.weekly-audit (reconciliation) | mandatory_review | plan-redteam |

---

### Rejected Alternatives

- **Dedicated `planner-agent` entry in agents.yaml**. Rejected: adds an 11th
  persistent CLI slot for a skill that only runs on M-grade; reusing `claude`
  with the `planner` playbook preserves the 10-worker fleet shape.
- **Merged "Advisor" reviewer**. Rejected per `.claude/rules/pipeline-review-gate.md`
  — three distinct review surfaces (research / plan / content) require three
  distinct domain redteams.
- **Sonnet for the redteam trio**. Rejected: playbook warns that adversarial
  review quality drops noticeably below opus tier; cost impact bounded by low
  invocation frequency (one review per task per gate).
- **Haiku for copilot / ollama**. Not rejected per the matrix (opus-tier simple
  row maps to sonnet, not haiku) — the explicit choice is sonnet, matching the
  matrix.

---

## Escalations

- [NOTE] All five open `[ASK]` items from Phase 4 (`03-pipeline-design.md`
  "Escalations") were resolved by the orchestrator before Phase 5 dispatch:
  (1) three redteam agents at opus — confirmed; (2) planner on `claude` worker
  (not a new agent) — confirmed; (3) openwork + opencode shared Karpathy
  responsibility — confirmed; (4) `max_retries: 2` on execute loop-back —
  confirmed; (5) S-grade autonomy scope — confirmed. No remaining
  user-decision items from Phase 4.
- [NOTE] Reviewer agents are registered in `SYSTEM/agents.yaml` with
  `is_persistent: false` so loopd does not spawn long-lived processes for them.
  They are summoned per task by the main session through the Claude Code Agent
  tool (reading `.claude/agents/{name}.md`), with NATS reply subjects reserved
  for inter-agent traceability.
- [NOTE] `allowed_dirs` is enforced in two places for reviewers: declared in
  `agents.yaml` for loopd/NATS layer awareness, AND restated in the agent's
  `.claude/agents/*.md` Rules section for the main-session PreToolUse hook
  (Phase 7-8) to key off. Dual declaration is intentional.
- [NOTE] `karpathy-wiki-draft` and `deliverable-render` are shared *reference
  files* between opencode and openwork, not shared skill ownership. Phase 6
  should author each file once; both agent adapters reference the same path.
  If usage diverges, Phase 6 may split by agent suffix.
- [NOTE] CLAUDE.md update is deferred to Phase 7-8 (`phase-setup`'s
  single-owner convention). The import line
  `상세: @docs/loop-vault-setup/04-agent-team.md` can be added by the
  orchestrator at that time. This phase does not touch CLAUDE.md.
- [NOTE] Orchestrator rules file (`.claude/rules/orchestrator-workflow.md`)
  is referenced by Phase 2 baseline and reaffirmed here as the D-1 routing
  spec. If it does not yet exist in `/.claude/rules/`, Phase 7-8 should create
  it; this phase does not author rules files to avoid overlap with the hooks
  phase.

---

## Next Steps

Phase 6: SKILL.md bodies for all 13 agents.
- Author 3 user-invocable `.claude/skills/{name}/SKILL.md` for the main
  session (`intake`, `route-dispatch`, `resume-detect`).
- Author 18 agent-owned `playbooks/{name}.md` files per the Agent-Skill
  Ownership Table.
- Declare `allowed_dirs` in each playbook frontmatter matching the owning
  agent's Rules section write scope.
- Encode review-dimension lists and APPROVE/BLOCK verdict schemas for the
  three redteam playbooks.
- Enforce the planner "both files in one invocation" contract in
  `playbooks/planner.md`.
