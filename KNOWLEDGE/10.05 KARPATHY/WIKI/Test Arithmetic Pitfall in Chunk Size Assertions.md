---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Test Arithmetic Pitfall in Chunk Size Assertions

When a test asserts a byte-size threshold, the author is computing in
their head: "I want a body > 100 KB so the chunker has to split it."
That mental math is wrong more often than not — typically by a factor
of 10, because the arithmetic involves small constants multiplied many
times and a missed zero is easy to overlook.

## The pattern that bit me on 2026-06-29

```python
def test_oversized_paragraph_falls_back_to_sentence_split():
    sentence = "This is a long sentence that should stay intact. " * 100
    body = sentence * 20  # thought: ~120 KB; actual: 98,000 bytes
    assert len(body.encode("utf-8")) > 100_000  # FAILS
```

49 chars × 100 = 4,900 chars per sentence-block.
4,900 × 20 = 98,000 chars total. **Off by 2,000 bytes** — the assertion
fails, the test reports "expected >100000, got 98000", and the developer
spends five minutes wondering why.

## The fix: explicit sanity assert

Add a sanity assert right next to the threshold assert, with the
actual byte count embedded:

```python
def test_oversized_paragraph_falls_back_to_sentence_split():
    sentence = "This is a long sentence that should stay intact. " * 100
    body = sentence * 30  # 49*100*30 = 147,000 chars
    assert len(body.encode("utf-8")) > 100_000, (
        f"sanity: body should be > 100 KB, got {len(body.encode('utf-8'))}"
    )
    # ... actual test logic ...
```

Now if the arithmetic is wrong, the error message says the actual size
in bytes — instantly debuggable. If the arithmetic is right, the
sanity assert is invisible.

## A reusable helper

For projects where this pattern recurs:

```python
def _approx_kb(n: int, *, unit: int = 1024) -> int:
    """Convert byte count to KB. Asserts the conversion makes sense."""
    return n // unit

# Use in test:
body = "x" * (100 * 1024)  # exactly 100 KB
assert len(body.encode("utf-8")) == 100 * 1024  # no surprise factor
```

For "approximately N KB" tests, build the string with `n * 1024`
arithmetic instead of `n * 1000` decimal-KB mental math. The decimal
KB → binary KB confusion (and vice versa) is a related failure mode.

## When this pattern applies

Any test where:
- A size threshold drives a code path.
- The author uses `*` chains of small constants to build a "big enough"
  payload.
- A failed assert doesn't immediately reveal whether the threshold or
  the payload is wrong.

Especially common in:
- Chunker tests (this project).
- Compression / codec tests.
- Image / media size tests.
- Buffer-overflow / slice bounds tests.

## When NOT to use this pattern

If the threshold is small (e.g., "body > 5 chars"), the arithmetic is
obviously trivial and the sanity assert is noise. Reserve the pattern
for cases where you're computing in your head across multiple `*`
operators.

## Related lesson

A related pitfall: PyYAML doesn't quote plain URLs in frontmatter by
default. Tests that assert the literal string `'"https://..."'` will
fail even though the output is valid YAML. Fix: assert the URL is
present regardless of quoting — `assert "https://example.com/x" in
content`, not `assert '"https://example.com/x"' in content`.

## See also

- [[Ad-hoc Verification Script Pattern for Hermes Projects]] (the
  prior session's verification pattern)
- [[Vault Scraper Chunking Strategy]] (the project where this bit)
- [[RAW/2026-06-29 hermes session journal]]