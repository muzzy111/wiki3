---
name: large-refactor
owning_agent: antigravity
allowed_dirs:
  - TASKS/
---

# Large Refactor

## Goal

Execute cross-vault structural changes — agent migrations, folder reorganizations, naming convention sweeps — with per-file commit cadence and full reversibility.

## Focus

- **Cross-module reasoning**: antigravity is assigned when the change touches multiple roles, multiple directories, or requires understanding how components relate. Do not treat files in isolation.
- **Per-file commit cadence**: commit after each logical unit of change (typically per-file or per-folder). Never batch all changes into one commit. This makes rollback surgical.
- **Reversibility contract**: every step must be reversible. If a step is irreversible (e.g., deleting files), require an explicit plan note marking it as such and confirm it is in scope.
- **No design decisions**: antigravity executes the refactor as specified. Design questions go back to the plan as `[BLOCKING]` entries.

## Workflow

1. **Load plan** — read the refactor specification in `03-plan.md`. Identify: scope (which directories), operation type (rename, move, restructure, migration), ordering constraints, rollback plan.

2. **Map dependencies** — before changing anything, build a dependency map:
   - Which files reference the things being changed?
   - Which files will break if step N is done before step M?
   - Note this map in the reply artifact.

3. **Execute in dependency order**:
   - Process steps in the order that minimizes dangling references.
   - For each step:
     - Read current state.
     - Apply the change.
     - Verify that dependent files still reference the target correctly (e.g., update import paths, update cross-references).
     - Write the change.
     - Record the change in the reply artifact.
   - After each logical unit, commit with a descriptive message tagged `[REFACTOR]`.

4. **Cross-reference sweep** — after all primary changes, scan the entire vault for references to the old paths/names:
   - Use Grep across all `.md`, `.yaml`, `.json`, `.ps1`, `.py`, `.sh` files.
   - Update any stale references found.
   - Record updates in the reply artifact.

5. **Write final reply** — `TASKS/{task-id}/04-execution/antigravity.md`.

6. **Publish NATS reply** — signal `reply.antigravity`.

## Commit Message Format

```
[REFACTOR] {step description}

Task: {task-id}
Step: {N of M}
Files: {list of files changed in this commit}
```

## Output Contract

`TASKS/{task-id}/04-execution/antigravity.md`:

```markdown
---
task_id: {task-id}
agent: antigravity
step: 4
status: complete|partial|blocked
commits_made: {N}
---

# Large Refactor Reply

## Dependency Map
{dependency graph or ordered list}

## Changes Applied
| Step | Files | Operation | Commit |
|---|---|---|---|
| 1 | {files} | {rename|move|edit} | {short hash or "pending"} |

## Cross-Reference Sweep
{files updated to fix stale references, or "none found"}

## Blocked Steps
{list with [BLOCKING] reasons}

## Rollback Guide
{step-by-step rollback instructions using git or manual reversal}
```

## Guardrails

- Never batch all refactor changes into one commit. Per-logical-unit commits are required.
- Never delete files without explicit plan authorization marking the deletion as irreversible.
- Never refactor SYSTEM/LOCK/ contents without HITL approval.
- Cross-reference sweep is mandatory — a refactor that leaves stale references will fail mavis review.
- If the dependency order in the plan is wrong (would cause breakage), stop and record `[BLOCKING: dependency order conflict at step N]`. Do not re-order silently.

## Question Ownership

This playbook runs in the antigravity worker (subagent). AskUserQuestion is forbidden. All blockers go in `04-execution/antigravity.md` as `[BLOCKING]` entries.
