---
phase: 6
completed: true
status: ok
advisor_status: manual_override
---

# 05 — Skill Specs

## Summary

Phase 6 (Skills / Playbooks) complete for LOOP Vault — LOOP Agent OS. All 24 skill and playbook files were authored based on the Phase 5 agent-team artifact as source of truth.

**Three user-invocable SKILL.md files** were placed under `.claude/skills/` for main-session auto-discovery: `intake`, `route-dispatch`, and `resume-detect`. These are the only files accessible to the D-1 router directly.

**Twenty-one agent-owned playbook files** were placed under `playbooks/` (flat structure, 21 files — under the 30-file threshold for subdirectory introduction). Agents load playbooks via their `.claude/agents/*.md` `Playbooks` section. The main session cannot auto-discover these files.

Key design decisions applied:
- `planner.md` enforces the "both 02-research.md and 03-plan.md in one invocation" M-grade contract explicitly.
- `security-review.md` includes a conditional invoke rule: only when plan touches BYOK gateway, secrets, vault.db schema, or MCP server configs.
- `local-eval.md` enforces `max_skills=1`, `max_mcps=0` with a hard budget-lock gate.
- Three redteam playbooks (`research-review`, `plan-review`, `content-review`) each include a per-dimension scoring table, APPROVE/BLOCK/APPROVE-WITH-NOTES verdict schema, and cited line reference format.
- `karpathy-wiki-draft.md` and `deliverable-render.md` are authored once and shared between opencode and openwork — both agents list the same path in their Playbooks sections.
- Copilot's `code-suggest.md` was included per the Phase 5 agent-skill ownership table (source of truth), though the Phase 6 task description listed it as "already covered inline." The Phase 5 table is authoritative; see Escalations.

---

## Skills Created

### Case A — `.claude/skills/` (user-invocable)

| File | Owning Agent | Description |
|---|---|---|
| `.claude/skills/intake/SKILL.md` | main-session | Receives user requests, grades complexity (S/M/L), routes to hermes or handles S-grade inline |
| `.claude/skills/route-dispatch/SKILL.md` | main-session | Inspects pipeline state, selects NATS subject or inline path, enforces HITL gate before Step 4 |
| `.claude/skills/resume-detect/SKILL.md` | main-session | Detects interrupted tasks via TASKS/STATUS/ + vault.db SHA check, offers resume/restart/skip |

### Case B — `playbooks/` (agent-owned, not auto-discovered)

| File | Owning Agent | Description |
|---|---|---|
| `playbooks/nats-dispatch.md` | hermes | Publishes to NATS subjects with retry, timeout, and role-sibling swap logic |
| `playbooks/merge-worker-replies.md` | hermes | Synthesizes per-worker reply files into a merged artifact with gap/conflict annotation |
| `playbooks/curate-memory-index.md` | hermes | Upserts vault.db rows, regenerates MEMORY/Index.md, syncs MONITOR/Agents.md |
| `playbooks/planner.md` | claude | M-grade merged research+plan in one invocation — both files written in one run |
| `playbooks/implement-deep.md` | claude | Complex single-agent write-test-verify implementation loop |
| `playbooks/implement-bulk.md` | cline | Multi-file mechanical implementation per plan, no design decisions |
| `playbooks/parallel-apply.md` | cline | Apply a pattern across many files with before/after SHA tracking |
| `playbooks/tooling-build.md` | opencode | Build scripts and vault utilities with header documentation and self-test |
| `playbooks/karpathy-wiki-draft.md` | opencode + openwork (shared) | Three-folder curation: raw → wiki → schema, style rules, frontmatter spec |
| `playbooks/deliverable-render.md` | opencode + openwork (shared) | Format-aware user deliverable from approved step artifacts |
| `playbooks/code-review-standards.md` | mavis | Six-dimension code review with APPROVE/BLOCK verdict and per-finding citations |
| `playbooks/security-review.md` | mavis | Conditional security review: BYOK / secrets / vault.db DDL / MCP config only |
| `playbooks/large-refactor.md` | antigravity | Cross-vault refactor with dependency map, per-file commits, cross-reference sweep |
| `playbooks/live-search.md` | grok | Live web search with citation, retrieval timestamp, counter-claim, and gap requirements |
| `playbooks/x-search.md` | grok | X/Twitter signal search appended to grok research artifact |
| `playbooks/vault-memory-retrieve.md` | openwork | vault.db SQL + Karpathy wiki read for task context retrieval |
| `playbooks/code-suggest.md` | copilot | Single-file ≤50-line suggestions with hard budget limits |
| `playbooks/local-eval.md` | ollama | Local-only evaluation: max_skills=1, max_mcps=0, budget-locked |
| `playbooks/research-review.md` | research-redteam | Adversarial review: D1 recency, D2 counter-claims, D3 bias, D4 citation accuracy, D5 scope match |
| `playbooks/plan-review.md` | plan-redteam | Adversarial review: D1 tech debt, D2 deps, D3 security, D4 test strategy, D5 reversibility, D6 NATS coverage; HITL flag |
| `playbooks/content-review.md` | content-redteam | Adversarial review: D1 Karpathy style, D2 citation, D3 user clarity, D4 memory-index, D5 link integrity |

---

## allowed_dirs Consolidation

(Phase 7-8 hook design input)

| Agent | Playbook | allowed_dirs |
|---|---|---|
| main-session | intake | `TASKS/`, `TASKS/STATUS/` |
| main-session | route-dispatch | `TASKS/STATUS/` |
| main-session | resume-detect | `TASKS/STATUS/` |
| hermes | nats-dispatch | `TASKS/`, `TASKS/STATUS/` |
| hermes | merge-worker-replies | `TASKS/` |
| hermes | curate-memory-index | `MEMORY/`, `MONITOR/` |
| claude | planner | `TASKS/` |
| claude | implement-deep | `TASKS/` |
| cline | implement-bulk | `TASKS/` |
| cline | parallel-apply | `TASKS/` |
| opencode | tooling-build | `TASKS/`, `scripts/` |
| opencode + openwork | karpathy-wiki-draft | `MEMORY/Karpathy/`, `MEMORY/KARPATHY/` |
| opencode + openwork | deliverable-render | `TASKS/` |
| mavis | code-review-standards | `TASKS/` |
| mavis | security-review | `TASKS/` |
| antigravity | large-refactor | `TASKS/` |
| grok | live-search | `TASKS/` |
| grok | x-search | `TASKS/` |
| openwork | vault-memory-retrieve | `TASKS/`, `MEMORY/` |
| copilot | code-suggest | `TASKS/` |
| ollama | local-eval | `TASKS/` |
| research-redteam | research-review | `TASKS/` (write restricted to `TASKS/*/02-research-review.md`) |
| plan-redteam | plan-review | `TASKS/` (write restricted to `TASKS/*/03-plan-review.md`) |
| content-redteam | content-review | `TASKS/` (write restricted to `TASKS/*/06-content-review.md`) |

**Reviewer write restriction**: reviewers must write only their single review-output file. Phase 7-8 PreToolUse hook should enforce this single-file write scope via path pattern matching.

---

## Location Decisions

All agent-owned playbooks are Case B (`playbooks/`) — **Orchestrator Pattern D-1 Compliance**:

> The project is D-1 (pure orchestrator). Main session is router-only. All agent-chain-internal skills must be in `playbooks/` so Claude Code main-session auto-discovery does not expose them as directly callable.

User-invocable skills are Case A (`.claude/skills/`) — three skills for the main session's intake and routing responsibilities.

**Flat structure used**: 21 playbook files are below the 30-file threshold for subdirectory introduction. All files are at `playbooks/*.md`.

**Visibility validation**: no Case B playbook was placed under `.claude/skills/`. Case A skills carry `user-invocable: true`. No visibility inconsistency detected.

---

## Final Agent-Skill Mapping

(Confirmed against Phase 5 `04-agent-team.md` Agent-Skill Ownership Table)

| Agent | Skill File | Path Matches Phase 5 |
|---|---|---|
| main-session | intake | `.claude/skills/intake/SKILL.md` — YES |
| main-session | route-dispatch | `.claude/skills/route-dispatch/SKILL.md` — YES |
| main-session | resume-detect | `.claude/skills/resume-detect/SKILL.md` — YES |
| hermes | nats-dispatch | `playbooks/nats-dispatch.md` — YES |
| hermes | merge-worker-replies | `playbooks/merge-worker-replies.md` — YES |
| hermes | curate-memory-index | `playbooks/curate-memory-index.md` — YES |
| claude | planner | `playbooks/planner.md` — YES |
| claude | implement-deep | `playbooks/implement-deep.md` — YES |
| cline | implement-bulk | `playbooks/implement-bulk.md` — YES |
| cline | parallel-apply | `playbooks/parallel-apply.md` — YES |
| opencode | tooling-build | `playbooks/tooling-build.md` — YES |
| opencode | karpathy-wiki-draft | `playbooks/karpathy-wiki-draft.md` — YES (shared) |
| opencode | deliverable-render | `playbooks/deliverable-render.md` — YES (shared) |
| mavis | code-review-standards | `playbooks/code-review-standards.md` — YES |
| mavis | security-review | `playbooks/security-review.md` — YES |
| antigravity | large-refactor | `playbooks/large-refactor.md` — YES |
| grok | live-search | `playbooks/live-search.md` — YES |
| grok | x-search | `playbooks/x-search.md` — YES |
| openwork | vault-memory-retrieve | `playbooks/vault-memory-retrieve.md` — YES |
| openwork | karpathy-wiki-draft | `playbooks/karpathy-wiki-draft.md` — YES (shared) |
| openwork | deliverable-render | `playbooks/deliverable-render.md` — YES (shared) |
| copilot | code-suggest | `playbooks/code-suggest.md` — YES |
| ollama | local-eval | `playbooks/local-eval.md` — YES |
| research-redteam | research-review | `playbooks/research-review.md` — YES |
| plan-redteam | plan-review | `playbooks/plan-review.md` — YES |
| content-redteam | content-review | `playbooks/content-review.md` — YES |

All paths match. Agent `.claude/agents/*.md` Playbooks sections must reference these exact paths.

---

## Context for Next Phase

### Phase 7-8: Hooks + MCP

**Hook trigger points** (from playbook analysis):

| Hook Type | Trigger | Purpose |
|---|---|---|
| PreToolUse | Write to `SYSTEM/`, `SYSTEM/LOCK/`, `agents.yaml` | Block unauthorized SYSTEM writes; enforce HITL gate |
| PreToolUse | Write to `MEMORY/vault.db` schema (DDL patterns: CREATE TABLE, ALTER TABLE, DROP TABLE) | Block schema changes without HITL |
| PreToolUse | Write to `MCP/servers/byok-gateway/` | Block BYOK config changes without HITL |
| PreToolUse | Write to `TASKS/*/0X-*review.md` by non-reviewer agent | Ownership guard: only the assigned reviewer writes review files |
| PostToolUse | Write to `MEMORY/vault.db` (DML) | Trigger MEMORY/Index.md regeneration (curate-memory-index) |
| PostToolUse | Write to `MEMORY/Karpathy/` | Signal content-redteam for wiki review gate |
| PostToolUse | NATS reply received on `reply.*` | Trigger MONITOR/Agents.md status update |
| PostToolUse | Write to `TASKS/STATUS/*.yaml` (status=complete) | Signal hermes to run curate-memory-index |

**allowed_dirs summary for PreToolUse ownership guard**:

```yaml
reviewer_write_restrictions:
  research-redteam: "TASKS/*/02-research-review.md"
  plan-redteam: "TASKS/*/03-plan-review.md"
  content-redteam: "TASKS/*/06-content-review.md"

hermes_exclusive_writes:
  - "MEMORY/vault.db"
  - "MEMORY/Index.md"
  - "MONITOR/*"

hitl_required_paths:
  - "SYSTEM/"
  - "SYSTEM/LOCK/"
  - "SYSTEM/agents.yaml"
  - "MEMORY/vault.db"  # DDL only
  - "MCP/servers/byok-gateway/"
```

**MCP server recommendations**:

| MCP Server | Needed by | Purpose |
|---|---|---|
| SQLite MCP | hermes, openwork | vault.db queries and upserts |
| NATS MCP | hermes | NATS pub/sub operations |
| Filesystem MCP | all workers | Broader file access if loopd restricts shell |
| Web search MCP | grok | live-search and x-search (grok profile already uses grok-super-heavy) |
| X/Twitter MCP | grok | x-search playbook — required for `reply.grok` subject |

---

## Files Generated

### Case A: `.claude/skills/**/SKILL.md`

- `C:\Vaults\wiki3\.claude\skills\intake\SKILL.md`
- `C:\Vaults\wiki3\.claude\skills\route-dispatch\SKILL.md`
- `C:\Vaults\wiki3\.claude\skills\resume-detect\SKILL.md`

### Case B: `playbooks/*.md`

- `C:\Vaults\wiki3\playbooks\nats-dispatch.md`
- `C:\Vaults\wiki3\playbooks\merge-worker-replies.md`
- `C:\Vaults\wiki3\playbooks\curate-memory-index.md`
- `C:\Vaults\wiki3\playbooks\planner.md`
- `C:\Vaults\wiki3\playbooks\implement-deep.md`
- `C:\Vaults\wiki3\playbooks\implement-bulk.md`
- `C:\Vaults\wiki3\playbooks\parallel-apply.md`
- `C:\Vaults\wiki3\playbooks\tooling-build.md`
- `C:\Vaults\wiki3\playbooks\karpathy-wiki-draft.md`
- `C:\Vaults\wiki3\playbooks\deliverable-render.md`
- `C:\Vaults\wiki3\playbooks\code-review-standards.md`
- `C:\Vaults\wiki3\playbooks\security-review.md`
- `C:\Vaults\wiki3\playbooks\large-refactor.md`
- `C:\Vaults\wiki3\playbooks\live-search.md`
- `C:\Vaults\wiki3\playbooks\x-search.md`
- `C:\Vaults\wiki3\playbooks\vault-memory-retrieve.md`
- `C:\Vaults\wiki3\playbooks\code-suggest.md`
- `C:\Vaults\wiki3\playbooks\local-eval.md`
- `C:\Vaults\wiki3\playbooks\research-review.md`
- `C:\Vaults\wiki3\playbooks\plan-review.md`
- `C:\Vaults\wiki3\playbooks\content-review.md`

**Total: 3 Case A + 21 Case B = 24 files**

---

## Escalations

- [NOTE] The Phase 6 task description stated "21 files total = 3 SKILL.md + 18 playbooks" and listed items that, when counted, total 20 playbooks (not 18). The Phase 5 `04-agent-team.md` Agent-Skill Ownership Table (source of truth) explicitly lists `code-suggest` for copilot at `playbooks/code-suggest.md`. Phase 6 authoring follows Phase 5 as source of truth. Total is 24 files (3 + 21), not 21. No blocking decision required; this is a count discrepancy in the task prompt.

- [NOTE] `karpathy-wiki-draft.md` and `deliverable-render.md` are authored once as shared reference files. Both opencode and openwork list the same path in their Playbooks sections. If the agents' usage diverges in practice, Phase 7-8 or a future Phase 6 amendment should split into `karpathy-wiki-draft-opencode.md` + `karpathy-wiki-draft-openwork.md`. No split needed now per Phase 5 direction.

- [NOTE] `vault-memory-retrieve.md` includes `MEMORY/` in `allowed_dirs` for read access (SELECT queries to vault.db and reading Karpathy wiki files). The Phase 7-8 PreToolUse hook should distinguish between read operations (permit for openwork) and write operations (restrict to hermes). The hook authoring phase should implement this read-vs-write distinction explicitly.

- [NOTE] `x-search.md` assumes grok has access to an X/Twitter search MCP tool. The MCP server for X/Twitter is not confirmed in the current `MCP/servers/` directory contents (not checked; noted for Phase 7-8 MCP setup). If no X MCP is available, grok's x-search playbook should fall back to web search and note the limitation.

- [NOTE] The Karpathy wiki curation source document (`5.0MEMORY/SKILLS/Karpathy Wiki Curation.md`) uses folder paths `MEMORY/KARPATHY/raw/`, `MEMORY/KARPATHY/wiki/`, `MEMORY/KARPATHY/schema/`. The playbooks use both `MEMORY/KARPATHY/` (from source doc) and `MEMORY/Karpathy/` (from pipeline design). Both spellings appear in Phase 3-4 artifacts. Phase 7-8 should confirm the canonical casing and standardize. Both spellings are included in `allowed_dirs` for the Karpathy-touching playbooks.

---

## Next Steps

Phase 7-8: `harness-architect:phase-hooks` agent. Key inputs from this phase:

1. Hook trigger table (above, under "Context for Next Phase").
2. `allowed_dirs` consolidation table — input for PreToolUse ownership guard.
3. Reviewer single-file write restrictions — highest priority hook to author.
4. HITL gate paths — PreToolUse hooks for SYSTEM/, vault.db DDL, BYOK.
5. PostToolUse hooks for MEMORY/Index.md sync and MONITOR/Agents.md update.
6. MCP server setup: SQLite, NATS, Web search, X/Twitter (confirm availability).
7. Confirm Karpathy folder path casing (`KARPATHY` vs `Karpathy`).
