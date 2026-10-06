---
name: research-review
owning_agent: research-redteam
allowed_dirs:
  - TASKS/
---

# Research Review

## Goal

Produce an adversarial APPROVE / BLOCK / APPROVE-WITH-NOTES verdict on `02-research.md` across five quality dimensions — protecting the pipeline from proceeding on weak research.

## Adversarial Stance

This playbook is intentionally adversarial. The reviewer's job is to find flaws, not to agree with the research. A weak APPROVE is a pipeline failure. A correct BLOCK that prevents downstream rework is a success. Err toward BLOCK on close calls.

## Review Dimensions

| # | Dimension | Description |
|---|---|---|
| D1 | Source Recency | Are sources current enough for the topic? Evolving topics (AI tooling, security) require sources ≤ 12 months. Stable topics: state publication dates and assess adequacy. |
| D2 | Counter-Claim Coverage | Were alternative perspectives or counter-arguments sought and documented? Absence must be explained, not ignored. |
| D3 | Bias | Does the research reflect only a single perspective, vendor, or school of thought? Flag monoculture sourcing. |
| D4 | Citation Accuracy | Do claims match their cited sources? Sample 3–5 citations and verify the claim is actually supported by the cited source text. |
| D5 | Scope Match | Does the research actually address the task's normalized goal from `01-intake.md`? Identify scope drift (researched the wrong question) or scope gaps (missed key aspects). |

## Scoring

Each dimension is scored independently:

| Score | Meaning |
|---|---|
| PASS | No issues detected. |
| WARN | Minor issue — does not block; note for awareness. |
| BLOCK | Issue severe enough to invalidate the research for downstream planning. |

**Overall verdict rule**:
- Any BLOCK dimension → **BLOCK**
- Any WARN dimension, no BLOCK → **APPROVE-WITH-NOTES**
- All PASS → **APPROVE**

## Workflow

1. **Load sources** — read `TASKS/{task-id}/01-intake.md` (normalized goal) and `TASKS/{task-id}/02-research.md` (the research artifact under review).

2. **Verify scope match (D5 first)** — confirm the research addresses the normalized goal. Scope mismatch is the highest-priority BLOCK; if detected, it often makes other dimensions irrelevant.

3. **Review each dimension** — apply the dimension criteria. For citation accuracy (D4), pick 3–5 cited sources at random, read or fetch them, and verify the claim.

4. **Record per-dimension findings** — use the scoring table. Each finding must cite the specific section/line in `02-research.md` where the issue appears.

5. **Derive overall verdict** — apply the verdict rule.

6. **Write review** — `TASKS/{task-id}/02-research-review.md`.

7. **Publish NATS reply** — signal `reply.research-redteam` to hermes.

## Cited Line Reference Format

All findings must cite the research artifact using this format:

```
[02-research.md §{Section Title} line ~{N}]: "{quoted text}" — {issue description}
```

## Output Contract

`TASKS/{task-id}/02-research-review.md`:

```markdown
---
task_id: {task-id}
reviewer: research-redteam
verdict: APPROVE|BLOCK|APPROVE-WITH-NOTES
d1_source_recency: PASS|WARN|BLOCK
d2_counter_claims: PASS|WARN|BLOCK
d3_bias: PASS|WARN|BLOCK
d4_citation_accuracy: PASS|WARN|BLOCK
d5_scope_match: PASS|WARN|BLOCK
block_count: {N}
warn_count: {M}
---

# Research Review: {task goal}

## Verdict: {APPROVE|BLOCK|APPROVE-WITH-NOTES}

## Dimension Scores

| Dimension | Score | Justification |
|---|---|---|
| D1 Source Recency | {score} | {1–2 sentences with evidence} |
| D2 Counter-Claims | {score} | {1–2 sentences with evidence} |
| D3 Bias | {score} | {1–2 sentences with evidence} |
| D4 Citation Accuracy | {score} | {1–2 sentences with evidence} |
| D5 Scope Match | {score} | {1–2 sentences with evidence} |

## BLOCK Findings
| # | Dimension | Cited Location | Issue | Required Fix |
|---|---|---|---|---|
| 1 | {Dx} | [02-research.md §{section} line ~{N}]: "{quote}" | {specific issue} | {what must change for APPROVE} |

## WARN Findings
| # | Dimension | Cited Location | Note |
|---|---|---|---|

## Summary
{3–4 sentences. Adversarial summary: what the research got wrong or right, and why the verdict was chosen.}
```

## Loop-Back Protocol

On BLOCK: hermes re-dispatches the research workers (grok ∥ openwork) with the BLOCK findings attached. Max 2 loop-backs. On 3rd BLOCK: mark `status: stopped`.

## Guardrails

- Do not write to `02-research.md` or any artifact other than `02-research-review.md`.
- Do not approve research that fails D5 (scope match) — wrong-question research cannot be fixed by downstream planning.
- Do not soft-BLOCK by listing findings without declaring an overall BLOCK verdict. If findings are block-level, the verdict must be BLOCK.
- Reviewer output is never re-reviewed. Write the best review possible in one pass.
- Citation accuracy spot-check (D4) is mandatory. Minimum 3 citations checked.

## Question Ownership

This playbook runs in the research-redteam worker (subagent). AskUserQuestion is forbidden. All findings go in `02-research-review.md`.
