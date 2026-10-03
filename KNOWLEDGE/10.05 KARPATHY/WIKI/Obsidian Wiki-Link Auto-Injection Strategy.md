---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Obsidian Wiki-Link Auto-Injection Strategy

When generating atomic notes from raw text via an LLM, the natural
follow-up is: connect those new notes to whatever already exists in
the vault. The engine's `app/linking.py` does this with two cooperating
pieces — an in-memory vault index and a post-LLM link injection pass.

## The two-pass model

**Pass 1 (LLM):** the system prompt instructs the model to wrap
in-body concept mentions in `[[double brackets]]`. This produces
*some* links — the ones the model notices during generation.

**Pass 2 (post-LLM):** the engine extracts `concepts` from the JSON
schema, looks each up in the vault index, and injects a `## Related`
section after the frontmatter with `[[Note Title]]` bullets for every
match. This catches links the model missed AND ensures backlinking
for notes the LLM would never have known to connect.

Pass 2 is what makes the vault "grow itself" — drop a new raw note,
and within seconds it has inbound links from the indexer's
understanding of existing notes' concepts.

## The vault index

```python
@dataclass(frozen=True)
class VaultIndex:
    titles_by_key: dict[str, str]   # lowercase -> exact title
    titles_list: list[str]          # sorted longest-first for greedy match
```

Built by scanning `notes/*.md` once at Engine start and refreshed
after every successful synthesis (so a freshly generated note is
immediately linkable from the next one). On this host's vault with
dozens of notes, the index is microseconds to build.

## Concept → title matching

```python
def find_matches(self, concept: str) -> str | None:
    key = concept.strip().lower()
    if key in self.titles_by_key:               # exact match wins
        return self.titles_by_key[key]
    for title in self.titles_list:              # longest-first substring
        if title.lower() in key or key in title.lower():
            return title
    return None
```

The longest-first sort means "Machine Learning" beats "Learning" as
a substring match for "deep learning of machine learning systems".
Without the sort, you'd get ambiguous links everywhere.

## Dedup logic

Two sources of duplicates to suppress:

1. **Existing wikilinks in the body** — `extract_existing_wikilinks(body)`
   gives the set of titles the LLM already linked to in the body.
   Those are NEVER re-injected in `## Related`.
2. **Already-injected in `## Related`** — a `seen: set` accumulator
   prevents the same title appearing twice in the injection section.

```python
for concept in concepts:
    if len(concept.strip()) < 3: continue
    match = vault.find_matches(concept)
    if not match or match in existing or match in seen: continue
    new_links.append(match); seen.add(match)
```

`link_min_concept_length=3` filters out noise like "to", "the", "and"
that would otherwise dominate the injection pass.

## Where the injection lands

```
---
title: Foo
tags: [...]
---

<injected ## Related section lands HERE>

## Summary
...
```

The injection point is *after* frontmatter, *before* the first body
heading. This puts related links in a consistent, parseable location
for any downstream tooling (Dataview queries, Obsidian Bases, graph
views) that scans for `## Related`.

## Configuration knobs

| Variable | Default | Effect |
|---|---|---|
| `INJECT_VAULT_LINKS` | `true` | Master switch. Set false to skip the entire pass. |
| `MAX_INJECTED_LINKS_PER_NOTE` | `12` | Caps the size of `## Related` per note. Prevents a super-connected concept from spamming the section. |

## Honest limitations

- **No fuzzy match.** "Postgres" and "PostgreSQL" are distinct keys.
  A future pass could add edit-distance matching; for now, the LLM
  is expected to produce concepts close enough to existing titles.
- **No tag-based linking.** The engine only links by concept-string,
  not by frontmatter `tags`. A Dataview-driven cross-link layer
  outside the engine would handle that.
- **No backlinks propagation.** When a new note links to an old one,
  the old note's `## Related` does NOT auto-[[update]]. Obsidian's own
  backlink graph handles that side automatically; the engine is
  one-directional.

## See also

- [[Agentic Knowledge Synthesis Engine Architecture]]
- [[Agentic Knowledge Engine Synthesizer (OpenRouter Extraction)]] (produces the concepts)
- [[Karpathy 3-Folder Wiki Capture Workflow]] (where this engine could be wired to deposit journal entries)
- [[RAW/2026-06-28 hermes session journal]]