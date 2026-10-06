---
name: vault-memory-retrieve
owning_agent: openwork
allowed_dirs:
  - TASKS/
  - MEMORY/
---

# Vault Memory Retrieve

## Goal

Query `MEMORY/vault.db` and `MEMORY/` files to retrieve relevant task context, prior art, and Karpathy wiki knowledge for the current task — providing the research base for narrative-first work.

## Focus

- **Targeted retrieval**: retrieve only what is relevant to the current task's research question. Do not dump the entire memory index.
- **vault.db queries**: use SQL SELECT queries to find prior tasks with similar goals, relevant artifact paths, and Karpathy entries by domain.
- **Karpathy wiki integration**: after DB lookup, read the specific wiki pages identified as relevant. Cite them in the research output.
- **Recency weighting**: more recent tasks (by `completed_at`) are more relevant. Flag old information that may be stale.
- **Gap identification**: if vault memory has no prior art on the topic, state this explicitly. Do not fill gaps with inference.

## Workflow

1. **Load intake** — read `TASKS/{task-id}/01-intake.md`. Extract: normalized goal, domain keywords, target paths.

2. **Build SQL queries** — construct targeted queries:

   ```sql
   -- Find prior tasks in same domain
   SELECT task_id, goal, grade, completed_at
   FROM tasks
   WHERE goal LIKE '%{keyword}%'
   ORDER BY completed_at DESC
   LIMIT 10;

   -- Find relevant artifacts
   SELECT task_id, step_n, artifact_path, completed_at
   FROM task_progress
   WHERE artifact_path LIKE '%{domain}%'
   ORDER BY completed_at DESC
   LIMIT 20;
   ```

3. **Execute queries against vault.db** — `MEMORY/vault.db`.

4. **Read Karpathy wiki** — for each wiki domain tag matching the task, read the relevant `MEMORY/KARPATHY/wiki/*.md` pages. Record title, domain, and key facts.

5. **Read MEMORY/Index.md** — scan for recent tasks and agent roster information relevant to the task.

6. **Synthesize retrieval results** — combine DB results and wiki facts into a coherent context document.

7. **Write research artifact** — `TASKS/{task-id}/02-research/openwork.md`.

8. **Publish NATS reply** — signal `reply.openwork` to hermes.

## Output Contract

`TASKS/{task-id}/02-research/openwork.md`:

```markdown
---
task_id: {task-id}
agent: openwork
playbook: vault-memory-retrieve
retrieval_date: YYYY-MM-DD HH:MM
prior_tasks_found: {N}
karpathy_pages_read: {M}
---

# Vault Memory: {research question}

## Prior Task Context
| Task ID | Goal | Grade | Completed |
|---|---|---|---|
| {id} | {goal} | {grade} | {date} |

## Karpathy Wiki References
| Page | Domain | Key Facts |
|---|---|---|
| [[wiki/{slug}]] | {domain} | {1–2 key facts} |

## Synthesized Context
{narrative synthesis of retrieved context, noting source and recency}

## Gaps
{what was not found in vault memory — topics with no prior art}

## Recency Notes
{any retrieved information that may be stale — flag the task ID and date}
```

## Guardrails

- Do not write to `MEMORY/vault.db` except via SELECT queries. Hermes owns vault.db writes.
- Do not read `SYSTEM/LOCK/` files. That directory is not in scope for research retrieval.
- Do not present absence of vault records as confirmation that something has not been done. State the gap explicitly.
- Karpathy wiki reads are read-only. Do not update wiki pages during retrieval.
- If the DB query returns no results, write `## Prior Task Context — No prior tasks found matching [{keywords}].`

## Question Ownership

This playbook runs in the openwork worker (subagent). AskUserQuestion is forbidden. All escalations go in `02-research/openwork.md` under `## Gaps`.
