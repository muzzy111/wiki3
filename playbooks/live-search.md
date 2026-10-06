---
name: live-search
owning_agent: grok
allowed_dirs:
  - TASKS/
---

# Live Search

## Goal

Execute live web search for a research task, synthesize results with mandatory source citations and retrieval timestamps, and produce a graded research artifact.

## Focus

- **Source recency**: prefer sources from the last 12 months for rapidly evolving topics (AI, tooling, security). For stable topics, recency matters less — state the publication date explicitly.
- **Citation completeness**: every factual claim cites at least one source. No unsourced assertions.
- **Retrieval timestamp**: record the search date/time for every source block. Research artifacts have a half-life; the timestamp lets downstream agents assess staleness.
- **Counter-claim coverage**: for any significant claim, explicitly seek a counter-claim or alternative perspective. Note if none found after reasonable search.
- **Scope discipline**: search for what the intake task specifies. Do not expand scope autonomously.

## Workflow

1. **Load intake** — read `TASKS/{task-id}/01-intake.md`. Extract: the research question(s), scope constraints, any specific sources requested.

2. **Plan search queries** — decompose the research question into 3–7 focused search queries. Write them down before executing any search.

3. **Execute searches** — for each query:
   - Run the web search.
   - Identify the 3–5 most relevant results.
   - Record: URL, title, publication date, retrieval timestamp, key claims.

4. **Synthesize** — group findings by theme or sub-question. For each theme:
   - State the consensus view with citations.
   - State any significant counter-claims with citations.
   - Assess source quality (high/medium/low authority; recent/dated).

5. **Identify gaps** — explicitly note what could not be found. Do not present absence of evidence as evidence of absence.

6. **Write research artifact** — `TASKS/{task-id}/02-research/grok.md`.

7. **Publish NATS reply** — signal `reply.grok` to hermes.

## Source Citation Format

```markdown
[Source: {Title} | {URL} | Published: {date or "n/a"} | Retrieved: {YYYY-MM-DD HH:MM}]
```

## Output Contract

`TASKS/{task-id}/02-research/grok.md`:

```markdown
---
task_id: {task-id}
agent: grok
search_queries: {N}
sources_reviewed: {M}
retrieval_date: YYYY-MM-DD HH:MM
---

# Research: {research question}

## Summary
{3–5 sentence synthesis of key findings}

## Findings by Theme

### {Theme 1}
{findings with inline citations}

### {Theme 2}
...

## Counter-Claims
{alternative perspectives found, or "None found after [N] queries on counter-positions"}

## Source Quality Assessment
| Source | Authority | Recency | Reliability |
|---|---|---|---|
| {title} | high|medium|low | {date} | high|medium|low |

## Gaps
{what could not be found or verified}
```

## Guardrails

- Every factual claim must have a citation. No unsourced assertions.
- Every source block must have a retrieval timestamp.
- Do not exceed the scope specified in intake. If the research turns up an adjacent topic that seems relevant, note it in a "Scope Adjacency" section but do not research it unless intake authorizes it.
- Minimum 2 sources per major theme. A single-source finding is noted as "low confidence — single source."
- Counter-claim search is mandatory. At minimum, record one search query aimed at finding counter-claims.

## Question Ownership

This playbook runs in the grok worker (subagent). AskUserQuestion is forbidden. All escalations go in `02-research/grok.md` under `## Gaps`.
