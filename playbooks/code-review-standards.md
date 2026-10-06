---
name: code-review-standards
owning_agent: mavis
allowed_dirs:
  - TASKS/
---

# Code Review Standards

## Goal

Produce an APPROVE or BLOCK verdict on the execution outputs in `04-execution/_merged.md` by reviewing against vault coding standards — clear, cited, actionable.

## Focus

- **Standards compliance**: review against the vault's established conventions (script header comments, error handling, exit codes, no hardcoded secrets, MCP usage patterns).
- **Completeness**: all plan-assigned steps have a corresponding output. No missing deliverables.
- **Correctness**: code logic is sound and consistent across files. Inter-file dependencies are correctly handled.
- **Actionable feedback**: every BLOCK finding includes a specific file path, line reference, and remediation instruction. Vague findings are not acceptable.

## Review Dimensions

| Dimension | What to check |
|---|---|
| Standards compliance | Script headers present; error handling per language conventions; exit codes documented |
| Secret hygiene | No hardcoded credentials, API keys, or passwords in any committed file |
| Logic correctness | Algorithm/logic is sound; edge cases handled or explicitly deferred |
| Inter-file consistency | Files that reference each other are consistent; no orphaned references |
| Plan completeness | Every plan step assigned to a worker has a corresponding output |
| MCP usage | MCP calls use documented server names and methods; no undocumented MCP calls |

## Workflow

1. **Load artifacts** — read `TASKS/{task-id}/03-plan.md` (approved plan), `TASKS/{task-id}/04-execution/_merged.md` (execution output), and each individual `TASKS/{task-id}/04-execution/{agent}.md` that the plan lists as active.

2. **Cross-reference plan vs. output** — for each plan step, verify the corresponding output exists. List missing outputs as BLOCK findings.

3. **Review each written file** — for files listed in the execution reply:
   - Read the file.
   - Check against each review dimension.
   - Record findings with file path, line reference (if applicable), and severity (BLOCK / WARN).

4. **Assess overall verdict**:
   - Any BLOCK finding → overall verdict BLOCK.
   - Only WARN findings → verdict APPROVE with notes.
   - No findings → APPROVE.

5. **Write review** — `TASKS/{task-id}/05-review.md`.

6. **Publish NATS reply** — signal `reply.mavis` to hermes.

## Output Contract

`TASKS/{task-id}/05-review.md`:

```markdown
---
task_id: {task-id}
reviewer: mavis
playbook: code-review-standards
verdict: APPROVE|BLOCK|APPROVE-WITH-NOTES
block_count: {N}
warn_count: {M}
---

# Code Review: {task goal}

## Verdict: {APPROVE|BLOCK|APPROVE-WITH-NOTES}

## Findings

### BLOCK Findings
| # | File | Line | Dimension | Issue | Remediation |
|---|---|---|---|---|---|
| 1 | {path} | {line or n/a} | {dimension} | {specific issue} | {exact fix required} |

### WARN Findings
| # | File | Line | Dimension | Issue | Suggestion |
|---|---|---|---|---|---|

### Plan Completeness Check
| Plan Step | Output Exists | Notes |
|---|---|---|
| {step name} | Y|N | {notes} |

## Summary
{2–4 sentences on overall quality and confidence in the output}
```

## Loop-Back Protocol

On BLOCK: hermes re-dispatches the failing workers with the BLOCK findings attached. Max 2 loop-backs. On 3rd BLOCK: mark `status: stopped` and escalate to main session.

## Guardrails

- Never self-approve mavis's own execution output (if mavis also ran in Step 4).
- Every BLOCK finding must cite a specific file path. Vague findings ("the code could be better") are invalid and will be escalated as reviewer failure.
- Do not write to the artifact being reviewed (`_merged.md` or worker reply files). Review output only goes to `05-review.md`.
- Do not trigger security-review from this playbook. Security review is a separate conditional invocation.

## Question Ownership

This playbook runs in the mavis worker (subagent). AskUserQuestion is forbidden. All escalations go in `05-review.md` and `TASKS/STATUS/{task-id}.yaml`.
