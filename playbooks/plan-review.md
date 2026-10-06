---
name: plan-review
owning_agent: plan-redteam
allowed_dirs:
  - TASKS/
---

# Plan Review

## Goal

Produce an adversarial APPROVE / BLOCK / APPROVE-WITH-NOTES verdict on `03-plan.md` across six risk dimensions — protecting the pipeline from executing a flawed, unsafe, or incomplete plan.

## Adversarial Stance

This playbook is intentionally adversarial. The reviewer's job is to find risks the planner missed, not to validate the planner's choices. A plan that looks reasonable but has a hidden security risk or tech-debt bomb is a plan this review must catch. Err toward BLOCK on close calls.

## HITL Flag Responsibility

This reviewer must **explicitly flag when HITL (Human-in-the-Loop) approval is required** before Step 4 execution. HITL is required when the plan touches:

- `SYSTEM/` or `SYSTEM/LOCK/` contents
- `SYSTEM/agents.yaml`
- `MEMORY/vault.db` schema (DDL)
- `MCP/servers/byok-gateway/`
- Any destructive memory operation (deletion of vault.db rows, overwrite of SYSTEM files)

If any of these are present and the plan does NOT include a `hitl_required: true` marker, this review must BLOCK.

## Review Dimensions

| # | Dimension | Description |
|---|---|---|
| D1 | Tech Debt | Does the plan create technical debt without a remediation plan? Shortcuts, hardcoded values, skipped tests, deferred error handling that adds to vault maintenance burden. |
| D2 | Dependency Gaps | Are all prerequisites for each plan step verified to exist? Missing agent registrations, missing parent directories, unresolved external dependencies. |
| D3 | Security Risk | Does the plan create security risks? Secrets exposure, over-broad `allowed_dirs`, BYOK config changes, vault.db schema changes without HITL gate. |
| D4 | Test Strategy | For code changes: is there a verification approach? For memory changes: is there an integrity check? Plans that write code with no way to verify correctness are risky. |
| D5 | Reversibility | Are irreversible steps (file deletions, DB schema drops, config overwrites) explicitly marked? Is there a rollback plan for each irreversible step? |
| D6 | NATS Subject Coverage | Does the plan correctly name the NATS subjects for each dispatch? Are the broadcast vs. direct subject choices appropriate? Are all workers that need to receive work included? |

## Scoring

Each dimension is scored independently:

| Score | Meaning |
|---|---|
| PASS | No issues detected. |
| WARN | Minor issue — does not block; note for awareness. |
| BLOCK | Issue severe enough to require plan revision before execution. |

**Overall verdict rule**:
- Any BLOCK dimension → **BLOCK**
- HITL required but not marked → **BLOCK** (mandatory)
- Any WARN, no BLOCK → **APPROVE-WITH-NOTES**
- All PASS → **APPROVE**

## Workflow

1. **Load sources** — read `TASKS/{task-id}/01-intake.md` (normalized goal and grade), `TASKS/{task-id}/02-research.md` (approved research), and `TASKS/{task-id}/03-plan.md` (the plan under review).

2. **HITL scan first** — scan plan for SYSTEM-touch, LOCK-touch, agents.yaml, vault.db DDL, MCP byok gateway references. If found and `hitl_required: true` is absent from plan frontmatter → immediate BLOCK on D3.

3. **Review each dimension** — apply dimension criteria. For D6 NATS subjects, cross-reference the plan's dispatch instructions against the canonical NATS subject map in `playbooks/nats-dispatch.md`.

4. **Record per-dimension findings** — cite the specific section/line in `03-plan.md`.

5. **Derive overall verdict** — apply verdict rule.

6. **Write review** — `TASKS/{task-id}/03-plan-review.md`.

7. **Publish NATS reply** — signal `reply.plan-redteam` to hermes.

## Cited Line Reference Format

```
[03-plan.md §{Section Title} line ~{N}]: "{quoted text}" — {issue description}
```

## Output Contract

`TASKS/{task-id}/03-plan-review.md`:

```markdown
---
task_id: {task-id}
reviewer: plan-redteam
verdict: APPROVE|BLOCK|APPROVE-WITH-NOTES
d1_tech_debt: PASS|WARN|BLOCK
d2_dependency_gaps: PASS|WARN|BLOCK
d3_security_risk: PASS|WARN|BLOCK
d4_test_strategy: PASS|WARN|BLOCK
d5_reversibility: PASS|WARN|BLOCK
d6_nats_coverage: PASS|WARN|BLOCK
hitl_required: true|false
hitl_reason: {blank or reason}
block_count: {N}
warn_count: {M}
---

# Plan Review: {task goal}

## Verdict: {APPROVE|BLOCK|APPROVE-WITH-NOTES}

## HITL Flag
{REQUIRED — {reason} | NOT REQUIRED}

## Dimension Scores

| Dimension | Score | Justification |
|---|---|---|
| D1 Tech Debt | {score} | {1–2 sentences} |
| D2 Dependency Gaps | {score} | {1–2 sentences} |
| D3 Security Risk | {score} | {1–2 sentences} |
| D4 Test Strategy | {score} | {1–2 sentences} |
| D5 Reversibility | {score} | {1–2 sentences} |
| D6 NATS Subject Coverage | {score} | {1–2 sentences} |

## BLOCK Findings
| # | Dimension | Cited Location | Issue | Required Fix |
|---|---|---|---|---|
| 1 | {Dx} | [03-plan.md §{section} line ~{N}]: "{quote}" | {specific issue} | {what must change} |

## WARN Findings
| # | Dimension | Cited Location | Note |
|---|---|---|---|

## Summary
{3–4 sentences adversarial summary.}
```

## Loop-Back Protocol

On BLOCK: hermes re-dispatches the planner (hermes or claude) with the BLOCK findings. Max 2 loop-backs. On 3rd BLOCK: STOP + user escalation.

## Guardrails

- Do not write to `03-plan.md` or any artifact other than `03-plan-review.md`.
- HITL-required plans must be BLOCKED if the `hitl_required: true` marker is absent — no exceptions.
- D6 NATS coverage is mandatory. A plan that assigns work to an agent via a non-existent or wrong NATS subject will cause silent dispatch failures.
- Reviewer output is never re-reviewed. Write the best review possible in one pass.
- Do not soften BLOCK findings to WARN to avoid pipeline delay.

## Question Ownership

This playbook runs in the plan-redteam worker (subagent). AskUserQuestion is forbidden. All findings go in `03-plan-review.md`.
