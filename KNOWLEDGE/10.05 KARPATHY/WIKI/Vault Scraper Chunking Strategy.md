---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper Chunking Strategy

`vault_scraper/chunker.py` solves the size problem: the backend's
hard cap is 500,000 bytes per file; the scraper targets 490,000 to
leave headroom for frontmatter. Splits happen at paragraph boundaries
whenever possible, falling back to sentence / whitespace / byte
boundaries only when a single paragraph exceeds the cap.

## The cascade

```
body (UTF-8 bytes > 490 KB?)
  |
  v
split on \n\n  -> list of paragraphs
  |
  v
for each paragraph:
  if paragraph + current_chunk <= 490 KB: append to current_chunk
  else:
    flush current_chunk
    if single paragraph > 490 KB: sentence-split it
    else: start new current_chunk with the paragraph
  |
  v
output: list of chunks, each <= 490 KB,
         all original paragraphs preserved whole
         (except where sentence-split was needed)
```

The cascade handles every pathological case:

1. **Normal case**: body splits cleanly into N chunks at `\n\n`
   boundaries. Each chunk contains complete paragraphs only.
2. **One giant paragraph**: that paragraph is sentence-split on
   `(?<=[.!?])\s+`. Sentences stay whole.
3. **One giant sentence**: split on whitespace tokens. Words stay whole.
4. **One giant word**: byte-split on UTF-8 byte boundaries (last resort,
   may break the word). Logged as a DEBUG [[[[event]]]]; should never happen
   for normal web content.

## Why paragraph boundaries first

Most web content has natural paragraph structure (`<p>` tags rendered
as text by the extractor, separated by `\n\n`). Paragraphs are
self-contained units of meaning — splitting mid-paragraph would
disconnect context the LLM needs to synthesize a coherent atomic note.

Sentence boundaries are the next-best: each sentence is a complete
proposition. Splitting mid-sentence leaves a phrase that lacks its
verb or object — almost always unhelpful.

Whitespace boundaries preserve words but lose sentence structure.

Byte boundaries are destructive but unavoidable in the truly
pathological case (e.g., a 2 MB base64-encoded image embedded inline,
which should never reach the scraper in the first place).

## Filename and metadata

Each chunk becomes its own file with `scraper_chunk: "N/M"` in the
frontmatter (1-based N, total M). The base slug is computed from the
source URL's last path segment. The full filename pattern:

```
{domain}_{slug}_{timestamp}_part{N}.md   # when chunked
{domain}_{slug}_{timestamp}.md           # when single
```

Where:
- `domain` = hostname minus `www.`, with `:` replaced by `-`
  (e.g. `localhost-8080`).
- `slug` = last non-empty path segment, stripped of query string
  and file extension, sanitized for Windows.
- `timestamp` = `YYYYMMDDTHHMMSSZ` UTC.

Two chunks of the same source within the same second collide —
acceptable because SHA-256 dedup catches it, and the timestamp
resolution is 1 second.

## Test coverage

`tests/test_chunker.py` exercises:

- `test_small_body_single_chunk` — body < 490 KB, single chunk.
- `test_600kb_body_splits_into_multiple_chunks` — body > 600 KB,
  multi-chunk output, every chunk <= 490 KB, indices 1..N.
- `test_chunks_split_at_paragraph_boundaries` — reassembly round-trip
  verifies no paragraph was broken.
- `test_oversized_paragraph_falls_back_to_sentence_split` — single
  paragraph > 490 KB, must split on sentences.
- `test_chunk_text_preserves_total_index_metadata` — chunk index
  metadata is contiguous 1-based and consistent.

## Honest limits

- **No semantic awareness.** A 490 KB chunk of boilerplate and a
  490 KB chunk of pure unique content look the same to the chunker.
  A future version could detect repetition and compress smarter.
- **No cross-chunk context.** Chunk 2/3 has no idea what chunk 1/3
  said. The LLM in the backend will see them as separate inbox files
  and may produce subtly inconsistent notes (different titles for
  related content). For most uses this is fine; for "synthesize a
  single coherent long note" [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]], pre-chunking at the source
  level (e.g., fetch one URL at a time, not a giant PDF dump) is the
  correct fix.
- **No deduplication of repeated chunks.** If the source has a
  100 KB header repeated three times, the chunker will keep all three.
  Session-level SHA-256 dedup at the inbox layer handles identical
  chunks fine, but near-duplicate chunks slip through.

## See also

- [[Vault Scraper Frontend Architecture]]
- [[Vault Scraper Inbox Drop Protocol]]
- [[Test Arithmetic Pitfall in Chunk Size Assertions]]
- [[RAW/2026-06-29 hermes session journal]]