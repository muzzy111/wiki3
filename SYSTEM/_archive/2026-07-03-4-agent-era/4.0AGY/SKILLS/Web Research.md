---
title: Web Research
tags: [agent, agy, skill, web, research]
created: 2026-07-01
type: skill
status: active
---

# Web Research

> How AGY conducts web research — search, fetch, synthesize.

## Tools

AGY's web research toolkit:

- **Web search.** For finding sources. Used for discovery, not for content.
- **Web fetch.** For pulling content from a specific URL.
- **Browser automation (when needed).** For sites that require JS or interactive flows.

Tools are invoked per the scoped brief. AGY does not crawl speculatively.

## Search Strategy

### Query Construction

- Start narrow, broaden as needed.
- Use exact phrases in quotes for known terms.
- Use site: filters to scope to authoritative domains.
- Use OR to combine synonyms for the same concept.
- Use -site: to exclude known bad sources.

Example queries:

- `"model context protocol" specification site:modelcontextprotocol.io`
- `python asyncio best practices -site:w3schools.com`

### Iteration

If the first query does not surface good sources:

1. Try synonyms.
2. Try a more specific query.
3. Try a broader query.
4. Try a different angle (e.g., search for the controversy, not the consensus).
5. Try a different source type (e.g., official docs -> academic paper -> expert blog).
6. If all fail, report the failure.

## Fetch Discipline

- Fetch only URLs surfaced by search or explicitly listed in the brief.
- Fetch full content, not just snippets (when paywall-free).
- Note access dates for every fetched source.
- Respect robots.txt (for scraping). For one-off fetches of public pages, robots.txt is informational, not binding — but AGY documents any deviation.
- Rate-limit fetching to avoid hammering servers (default 1 request per second per host).

## Scraping (When Scoped)

Scraping is rare and explicit. The brief must say "scrape <site>" for AGY to scrape.

Rules:

- One site per task. Do not pivot to other sites.
- Extract only the requested content.
- Cite the page URL and access date.
- Note any blocks or failures.
- Do not bypass CAPTCHAs, paywalls, or access controls. If a site blocks AGY, report it.

## Source Quality Signals

When evaluating a source:

- **Author.** Recognized expert? Anonymous? Institutional?
- **Recency.** How old is the content? Is there a newer version?
- **Citations.** Does the source cite its own claims?
- **Bias.** Is there a commercial, political, or ideological angle?
- **Corrections.** Has the source been corrected? Does it correct itself?

AGY prefers sources that score well on all five.

## Synthesis

After gathering, AGY synthesizes:

- Identify the consensus (where it exists).
- Identify the disagreements (where it does not).
- Reason about why disagreement exists.
- State AGY's own reasoned position, grounded in cited findings.
- Distinguish between "the field agrees" and "AGY thinks" — they are different epistemic claims.

## Failure to Research

Sometimes research is genuinely impossible:

- Topic behind a paywall with no preview.
- Topic so niche no authoritative source exists.
- Topic requires expertise AGY does not have (e.g., primary medical advice).

When this happens:

1. Report explicitly.
2. Suggest alternatives (different scope, different question, expert consultation).
3. Do not fabricate.

## Quotas and Rate Limits

AGY respects service rate limits. If AGY hits a limit:

- Wait and retry (with backoff).
- Switch to an alternative source.
- Report the limit in the final report.

## Privacy

- AGY does not send vault content to web services as part of research. Research is one-way: AGY pulls from the web into the vault, not the other way.
- If a research task requires sending vault content to a service (e.g., to ask an external LLM a question), AGY escalates to Hermes with the privacy implication.

## Output

Research output lives at `4.0AGY/SOLO-PROJECTS/<project-id>/report.md` per the [[../RULES/Research Protocol]].

A raw entry is added to `MEMORY/KARPATHY/raw/` for Mavis to curate into the wiki.

## See Also

- AGY's role: [[../AGENT]]
- Research protocol: [[../RULES/Research Protocol]]
- Research brief protocol: [[../CHAT/Research Brief Protocol]]