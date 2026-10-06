---
name: x-search
owning_agent: grok
allowed_dirs:
  - TASKS/
---

# X Search

## Goal

Search X/Twitter for agent, AI, and tooling domain signals relevant to the current research task — capturing real-time community discourse, early announcements, and practitioner opinions.

## Focus

- **Signal relevance**: X/Twitter is most valuable for: breaking announcements, practitioner opinions not yet in formal publications, emerging tool usage patterns, and community consensus on techniques.
- **Noise filtering**: X content has low signal-to-noise. Apply higher skepticism than web sources. Prefer accounts with demonstrated expertise in the domain.
- **Source attribution**: cite tweet URLs with author handle, date, and retrieval time. Do not paraphrase opinions without attribution.
- **Domain scope**: vault-relevant domains for X search: AI agents, LLM tooling, Claude/Anthropic updates, vault/knowledge-management tools, NATS/messaging patterns, developer productivity.

## Workflow

1. **Load intake** — read `TASKS/{task-id}/01-intake.md` research question. Determine if X search is relevant:
   - X search adds value for: emerging trends, real-time community pulse, tool announcements.
   - X search adds little value for: stable technical specs, security best practices, historical research.
   - If low value, write a one-line note in the reply and skip X search.

2. **Construct search queries** — 2–4 targeted queries using X-appropriate syntax (hashtags, `from:` filters for high-authority accounts when known, keyword combinations).

3. **Execute searches** — run X/Twitter search via the MCP tool available to grok.

4. **Filter results** — apply quality filter:
   - Author criteria: known practitioner, verified domain expertise, significant following in domain, OR cited by other credible sources.
   - Recency: X signals older than 6 months on rapidly evolving topics lose most of their value.
   - Engagement: high engagement can signal consensus or controversy — note which.

5. **Synthesize X signals** — group by signal type: (a) announcements, (b) practitioner opinions, (c) community consensus, (d) controversy.

6. **Append to research artifact** — write a `## X/Twitter Signals` section in `TASKS/{task-id}/02-research/grok.md`. Do not create a separate file.

## Source Citation Format for X

```markdown
[@{handle} on X | {tweet URL} | {date} | Retrieved: {YYYY-MM-DD HH:MM}]
```

## Output Contract

Appended section in `TASKS/{task-id}/02-research/grok.md`:

```markdown
## X/Twitter Signals

_Queries run: {N} | Signals retained: {M} | Retrieved: YYYY-MM-DD HH:MM_

### Announcements
{tweet citations and summaries}

### Practitioner Opinions
{tweet citations and summaries}

### Community Consensus / Controversy
{summary with citation links}

### X Signal Assessment
{overall confidence: high|medium|low — reason}
```

## Guardrails

- Every X signal cited must include the tweet URL, author handle, date, and retrieval timestamp.
- Do not treat X opinions as factual claims. Label them as practitioner opinion or community signal.
- Minimum quality bar: author must meet at least one of the filter criteria. No random tweets from unknown accounts.
- If X search returns no high-quality signals, write `## X/Twitter Signals — No qualifying signals found after {N} queries.` Do not fabricate signals.
- Do not expand X search scope beyond the research question from intake.

## Question Ownership

This playbook runs in the grok worker (subagent). AskUserQuestion is forbidden. All escalations go in `02-research/grok.md`.
