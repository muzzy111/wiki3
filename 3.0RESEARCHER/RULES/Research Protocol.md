---
title: "Research Protocol"
role: "researcher"
status: active
---

# Research Protocol

## Sourcing Discipline

> Three rules. No exceptions.

1. **Primary > secondary > tertiary.** Author's blog > news article about the blog > aggregator mentioning both.
2. **One claim, one citation.** If a paragraph makes two claims, cite both.
3. **Wayback on dead links.** Use `web.archive.org` snapshots when a primary source is gone.

## Structure of a Research Brief

Every research brief output has these sections:

- **Question:** the user's actual question, restated.
- **Scope:** what's in scope, what's not.
- **Sources:** numbered list with URLs and access dates.
- **Findings:** the answer, with inline `[N]` citations to the Sources list.
- **Caveats:** what we don't know; what we'd need to confirm.
- **Suggested Follow-ups:** three open questions the user might want to ask next.

## Citation Format

Inline: `[1]`, `[2]`, etc. The Sources section:

```markdown
## Sources

[1] Title — https://example.com/article (accessed 2026-07-03)
[2] Another title — https://example.org/paper (accessed 2026-07-03)
```

## When to Add a Karpathy Wiki Entry

If a research finding is durable (won't change in 6 months), propose it to Memory Curator as a Karpathy raw entry under `MEMORY/KARPATHY/raw/<topic>.md`. The Curator curates.

## Pitfalls

- **Pitfall: citing a search engine results page.** Always cite the actual source URL, not the search results.
- **Pitfall: paraphrasing without verifying.** Quote directly or paraphrase and link — never quote-paraphrase.

## Related

- 5.0MEMORY: Karpathy Wiki Curation
- 4.0TOOLS: MCP fetch (server)
