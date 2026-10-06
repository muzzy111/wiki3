---
name: content-review
owning_agent: content-redteam
allowed_dirs:
  - TASKS/
---

# Content Review

## Goal

Produce an adversarial APPROVE / BLOCK / APPROVE-WITH-NOTES verdict on `06-deliverable.md` and any Karpathy wiki updates across five content quality dimensions — the final gate before user delivery.

## Adversarial Stance

This review is the last quality gate. Everything that passes this review reaches the user or enters the permanent Karpathy wiki. A weak APPROVE on user-facing content is a UX failure. A missed citation error that enters the wiki corrupts the vault's long-term knowledge base. Be strict.

## Review Dimensions

| # | Dimension | Description |
|---|---|---|
| D1 | Karpathy Style | Wiki entries follow the three-folder curation model: raw source exists, one idea per note, frontmatter complete (title, type, domain, source, tags, created, modified, status). No multi-topic mashups. |
| D2 | Source Citation | All factual claims in the deliverable and wiki entries cite a source. Wiki entries must link to their raw source file. No unsourced assertions. |
| D3 | User-Facing Clarity | The deliverable directly answers the user's normalized goal from `01-intake.md`. Written at user-appropriate clarity. No agent-internal jargon. No dangling references to internal task IDs without explanation. |
| D4 | Memory-Index Consistency | Karpathy wiki updates are reflected in `MEMORY/KARPATHY/schema/Master Index.md`. New wiki entries appear in the index. Modified entries have updated `modified:` dates. |
| D5 | Link Integrity | Internal links (`[[...]]` wikilinks) in the deliverable and wiki entries resolve to real files. No broken links to non-existent vault paths. |

## Scoring

Each dimension is scored independently:

| Score | Meaning |
|---|---|
| PASS | No issues detected. |
| WARN | Minor issue — does not block; note for awareness. |
| BLOCK | Issue severe enough to require revision before delivery. |

**Overall verdict rule**:
- Any BLOCK dimension → **BLOCK**
- Any WARN, no BLOCK → **APPROVE-WITH-NOTES**
- All PASS → **APPROVE**

## Workflow

1. **Load sources** — read:
   - `TASKS/{task-id}/01-intake.md` (original normalized goal)
   - `TASKS/{task-id}/06-deliverable.md` (deliverable under review)
   - Any `MEMORY/KARPATHY/wiki/*.md` files written during this task (from task description or execution reply)
   - `MEMORY/KARPATHY/schema/Master Index.md` (for D4 consistency check)

2. **D3 scope match first** — confirm the deliverable directly addresses the normalized goal. Scope mismatch is the highest-priority BLOCK for user-facing content.

3. **Review each dimension** — apply criteria. For D5 link integrity, follow each `[[...]]` wikilink and confirm the target file exists.

4. **Record per-dimension findings** — cite specific section/line in the artifact.

5. **Derive overall verdict** — apply verdict rule.

6. **Write review** — `TASKS/{task-id}/06-content-review.md`.

7. **Publish NATS reply** — signal `reply.content-redteam` to hermes.

## Cited Line Reference Format

```
[{artifact} §{Section Title} line ~{N}]: "{quoted text}" — {issue description}
```

Where `{artifact}` is `06-deliverable.md` or `MEMORY/KARPATHY/wiki/{slug}.md`.

## Output Contract

`TASKS/{task-id}/06-content-review.md`:

```markdown
---
task_id: {task-id}
reviewer: content-redteam
verdict: APPROVE|BLOCK|APPROVE-WITH-NOTES
d1_karpathy_style: PASS|WARN|BLOCK
d2_citation: PASS|WARN|BLOCK
d3_user_clarity: PASS|WARN|BLOCK
d4_memory_index: PASS|WARN|BLOCK
d5_link_integrity: PASS|WARN|BLOCK
block_count: {N}
warn_count: {M}
---

# Content Review: {task goal}

## Verdict: {APPROVE|BLOCK|APPROVE-WITH-NOTES}

## Dimension Scores

| Dimension | Score | Justification |
|---|---|---|
| D1 Karpathy Style | {score} | {1–2 sentences} |
| D2 Source Citation | {score} | {1–2 sentences} |
| D3 User-Facing Clarity | {score} | {1–2 sentences} |
| D4 Memory-Index Consistency | {score} | {1–2 sentences} |
| D5 Link Integrity | {score} | {1–2 sentences} |

## BLOCK Findings
| # | Dimension | Cited Location | Issue | Required Fix |
|---|---|---|---|---|
| 1 | {Dx} | [{artifact} §{section} line ~{N}]: "{quote}" | {specific issue} | {what must change} |

## WARN Findings
| # | Dimension | Cited Location | Note |
|---|---|---|---|

## Summary
{3–4 sentences adversarial summary. Name what passed and what failed, and why the verdict was chosen.}
```

## Loop-Back Protocol

On BLOCK: hermes re-dispatches the content authors (openwork or opencode) with the BLOCK findings. Max 2 loop-backs. On 3rd BLOCK: STOP + user escalation.

## Guardrails

- Do not write to `06-deliverable.md`, wiki files, or any artifact other than `06-content-review.md`.
- D4 Master Index check is mandatory. A wiki entry that is not in the Master Index has failed the curation process.
- D5 link integrity check is mandatory. Broken wikilinks in user-facing deliverables are unacceptable.
- Reviewer output is never re-reviewed. Write the best review possible in one pass.
- Do not approve a deliverable that uses agent-internal jargon without translation for the user.

## Question Ownership

This playbook runs in the content-redteam worker (subagent). AskUserQuestion is forbidden. All findings go in `06-content-review.md`.
