---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Agentic Knowledge Engine Synthesizer (OpenRouter Extraction)

`app/synthesizer.py` is the LLM-facing module. It owns the prompt contract,
the HTTP call to OpenRouter, retry policy, response parsing, schema
normalization, and the final note write. It does NOT watch files or
manage threads — that's [[Agentic Knowledge Engine Watcher and Worker Pool]].

## The prompt contract

The system prompt fixes the LLM into a JSON-output mode and dictates
the section structure of the resulting note body. Key rules the prompt
enforces:

1. Output is JSON only — no prose, no markdown fences.
2. `title` is 3-9 words, descriptive, not the input filename.
3. `tags` are lowercase-hyphenated, 3-8 items.
4. `concepts` are atomic ideas (5-12 items) that the linking pass uses
   to find matches in the existing vault.
5. `action_items` use checkbox markdown (`- [ ] ...`).
6. The `body` uses four sections in this order: `## Summary`, `## Key Points`,
   `## References`, with the engine adding `## Action Items` later.
7. Concepts mentioned inline must be wrapped in `[[double brackets]]`
   so Obsidian recognizes them as wiki-links.
8. No fabricated facts. Missing data is omitted or labeled `Not specified`.

## The JSON schema

```json
{
  "title": "string",
  "tags": ["string", ...],
  "concepts": ["string", ...],
  "action_items": ["string", ...],
  "body": "string"
}
```

The OpenRouter call uses `response_format: {"type": "json_object"}` so
the model is in strict JSON mode. The parser is *also* fence-tolerant
— if the model wraps the JSON in ```` ```json ... ``` ```` fences
despite the mode setting, the regex `\`\`\`(?:json)?\s*(\{.*?\})\s*\`\`\``
strips them before `json.loads`.

## Retry policy

```
for attempt in 1..max_retries:
    resp = httpx.post(...)
    if 429 or 5xx: raise HTTPStatusError  # transient
    resp.raise_for_status()
    return parsed_json
    on exception:
        sleep(min(2 ** attempt, 30))
```

Defaults: `max_retries=4`, `request_timeout=120s`. That gives total
worst-case latency of ~60s before the engine gives up and quarantines
the file. A failure increments the row in `state.db::failures` so the
engine knows how many times this path has been tried.

## Schema assembly (`_build_result`)

- `title` falls back to a filename-derived title if empty.
- `tags` are lowercased, hyphens normalized.
- `concepts` are trimmed.
- `action_items` get a `- [ ] ` prefix if missing — even if the LLM
  forgets the checkbox syntax.
- `body` is stored raw; section assembly happens at write time.

## Note write (`_write_note`)

1. Filename = `safe_filename(title) + ".md"`.
2. Collision handling: if `<title>.md` exists, append `-2`, `-3`, etc.
3. Frontmatter: title, tags, concepts, source_file, generated_at (UTC
   ISO), generator, model.
4. Body: `result.body` + `## Action Items\n\n...` if there are any.
5. Write via `atomic_write` — see [[Agentic Knowledge Synthesis Engine Architecture]].

## Fence-tolerant parsing in practice

Hermes 3 generally honors `response_format=json_object` cleanly, but
Llama-3.1 base and some Anthropic models occasionally fence. The
regex-based stripping covers both. Test coverage:

```python
strict_input  = {"choices":[{"message":{"content":'{"title":"T"}'}}]}
fenced_input  = {"choices":[{"message":{"content":"```json\n{\"title\":\"T\"}\n```"}}]}
assert _extract_json(strict_input) == {"title": "T"}
assert _extract_json(fenced_input) == {"title": "T"}
```

Both verified in `C:\Users\Admin\AppData\Local\Temp\hermes-verify-akee.py`
(now cleaned up).

## What this file does NOT do

- No streaming. Every note is one full HTTP round-trip. Streaming would
  speed up large notes but introduces partial-write risk that the atomic
  write path is designed to prevent.
- No structured-output alternative beyond `json_object`. `tools=` /
  function-calling could be tighter but adds cross-model variance; the
  fence-tolerant parser is the simpler, more portable fix.
- No real OpenRouter call was made during verification (no API key in
  the environment). The HTTP path is exercised by the live Docker
  image's import smoke test; `_call_llm` itself was exercised via a
  mocked subclass. See [[Ad-hoc Verification Script Pattern for Hermes Projects]].

## See also

- [[Agentic Knowledge Synthesis Engine Architecture]]
- [[Obsidian Wiki-Link Auto-Injection Strategy]] (consumes `concepts`)
- [[Agentic Knowledge Engine Configuration (Pydantic Settings)]] (model + retry knobs)
- [[RAW/2026-06-28 hermes session journal]]