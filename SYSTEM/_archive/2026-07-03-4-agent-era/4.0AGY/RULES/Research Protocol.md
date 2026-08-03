---
title: Research Protocol
tags: [agent, agy, rules, research, protocol]
created: 2026-07-01
type: research-protocol
status: active
---

# Research Protocol

> The research contract AGY follows for every research brief.

## Inputs

A research brief from Hermes in `4.0AGY/CHAT/Inbox/<task-id>.md`.

## Method

For every research task:

1. **Decompose.** Break the question into sub-questions. List them.
2. **Plan sources.** For each sub-question, identify candidate authoritative sources.
3. **Search.** Run targeted searches. Document queries used.
4. **Fetch.** Pull content from authoritative sources. Scrape (if scoped and allowed).
5. **Extract.** Pull out relevant claims, with verbatim quotes and source URLs.
6. **Cross-check.** For load-bearing claims, find a second independent source.
7. **Synthesize.** Reason over the findings. Identify patterns and disagreements.
8. **Write.** Produce the report per the format below.
9. **Self-audit.** Check: every claim cited? Recent sources? Conflicting sources arbitrated? Gaps acknowledged?

## Sourcing Discipline

### Authoritative sources (preferred)

- Official documentation (e.g., framework docs, API references).
- Primary research (peer-reviewed papers, preprints with caveats).
- Official statistics (government data, established research orgs).
- Authoritative commentary from recognized experts.

### Secondary sources (acceptable)

- Reputable journalism.
- Established technical blogs from domain experts.
- Aggregators that cite primary sources.

### Disallowed

- Anonymous posts on forums.
- Content farms.
- Affiliate-driven review sites.
- Sources older than the topic warrants, without noting the age.
- Any source the user has explicitly forbidden in the brief.

### Currency

When currency matters (news, version-specific docs, recent research):

- Sources within the last 12 months for tech and news.
- Sources within the last 5 years for academic topics (unless canonical references).
- Older sources acceptable for canonical references (e.g., the original transformer paper).

## Output Format

```markdown
---
title: <Research Topic>
date: YYYY-MM-DD
type: research-report
status: draft | review-ready | done
task_id: <task-id>
review: required | optional | not-required
sources_count: <integer>
---

# Research: <Topic>

## Brief Recap

<one paragraph: what was asked>

## Method

<queries used, sources consulted, in narrative form>

## Findings

### <Sub-topic 1>

- **Claim:** <statement>
  - **Source:** [Title](URL) — accessed YYYY-MM-DD
- **Claim:** <statement>
  - **Source:** [Title](URL) — accessed YYYY-MM-DD

### <Sub-topic 2>

- ...

## Synthesis

<AGY's reasoning over the findings>

## Caveats

- <uncertainty>
- <conflicting sources>
- <gaps>

## Sources

1. [Title](URL) — accessed YYYY-MM-DD
2. ...

## Raw Entry for Wiki

A raw entry has been added to `MEMORY/KARPATHY/raw/YYYY-MM-DD — <slug>.md` for Mavis to curate.
```

## Review Path

If `review: required`, AGY submits to Mavis via the standard review request format in `../CHAT/Research Brief Protocol.md`.

If `review: optional` or `not-required`, AGY marks done after writing the report.

## Honesty Rules

- **Failed searches.** Report explicitly. "Searched for X; did not find authoritative source within time budget."
- **Conflicting sources.** Present both, explain the conflict, state AGY's reasoned judgment (or note that judgment is impossible).
- **Speculation.** Label as speculation, separate from findings.
- **Tooling limits.** If a tool blocked AGY (rate limit, paywall, geo-fence), say so.
- **Inability to verify.** If a claim could not be independently verified, downgrade the claim from "fact" to "unverified" in the report.

## Math Within Research

When the research includes numerical content:

- Show units.
- Show formulas.
- Show source data.
- Show the computation.
- Include a sanity check.
- Cite the source data URL.

## Discipline

- **No scope creep.** If the brief asks for A, do not also research B unless B is essential to understanding A.
- **No filler.** If a sub-question has no good answer, say so. Do not pad.
- **No hidden assumptions.** State assumptions explicitly.
- **No unsourced opinion.** Synthesis is AGY's reasoning, but it must be grounded in cited findings.

## When Research Is Infeasible

If AGY cannot complete the research (e.g., the topic is inaccessible, paywalled, or requires expertise AGY does not have):

1. AGY writes a `blocked` status update explaining the obstacle.
2. AGY suggests alternatives (different scope, different sources, different approach).
3. Hermes decides whether to expand scope, change scope, or abort.

## See Also

- AGY's role: [[../AGENT]]
- Research brief protocol: [[../CHAT/Research Brief Protocol]]
- Web research skill: [[../SKILLS/Web Research]]
- Review protocol: [[../../2.0MAVIS/CHAT/Review Protocol]]
- Review checklist: [[../../2.0MAVIS/RULES/Review Checklist]]