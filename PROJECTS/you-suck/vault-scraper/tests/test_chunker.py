"""Tests for the chunker — verify 600 KB body splits correctly at paragraph boundaries."""
from __future__ import annotations

from vault_scraper.chunker import chunk_text, Chunk


def _make_paragraph(n: int, para_size: int = 1000) -> str:
    """Build a paragraph of approx para_size bytes."""
    return ("x" * para_size)[:para_size]


def test_small_body_single_chunk():
    body = "Hello world\n\nSecond paragraph"
    chunks = chunk_text(body)
    assert len(chunks) == 1
    assert chunks[0].text == body
    assert chunks[0].index == 1
    assert chunks[0].total == 1


def test_empty_body_single_chunk():
    chunks = chunk_text("")
    assert len(chunks) == 1
    assert chunks[0].text == ""
    assert chunks[0].total == 1


def test_600kb_body_splits_into_multiple_chunks():
    # Build ~600 KB body of paragraphs each ~10 KB.
    para_size = 10_000
    n_paragraphs = 60
    paragraphs = [_make_paragraph(i, para_size) for i in range(n_paragraphs)]
    body = "\n\n".join(paragraphs)
    assert len(body.encode("utf-8")) > 600_000

    chunks = chunk_text(body, max_bytes=490_000)

    # Each chunk must be <= max_bytes when UTF-8 encoded.
    for c in chunks:
        assert len(c.text.encode("utf-8")) <= 490_000, (
            f"chunk {c.index}/{c.total} is {len(c.text.encode('utf-8'))} bytes"
        )

    # More than one chunk expected.
    assert chunks[0].total == len(chunks)
    assert chunks[0].total > 1, "expected multiple chunks for 600 KB body"

    # Indices must be 1-based and contiguous.
    indices = [c.index for c in chunks]
    assert indices == list(range(1, len(chunks) + 1))


def test_chunks_split_at_paragraph_boundaries():
    # Build 5 paragraphs each ~50 KB. Max chunk = 120 KB => must split, each
    # chunk contains whole paragraphs (no mid-paragraph break).
    paragraphs = [("p" * 100 + str(i)) * 500 for i in range(5)]  # ~50 KB each
    body = "\n\n".join(paragraphs)
    assert len(body.encode("utf-8")) > 200_000

    chunks = chunk_text(body, max_bytes=120_000)

    # Reassemble and verify no paragraph was split mid-text.
    reassembled = "\n\n".join(c.text for c in chunks)
    for p in paragraphs:
        assert p in reassembled, "paragraph should appear whole in the reassembled body"


def test_oversized_paragraph_falls_back_to_sentence_split():
    # A single paragraph far larger than max_bytes — must split on sentences
    # rather than fail or split mid-word.
    # 49 chars * 100 = 4900 chars per sentence-block; * 30 = 147_000 chars total.
    sentence = "This is a long sentence that should stay intact. " * 100
    body = sentence * 30
    assert len(body.encode("utf-8")) > 100_000, (
        f"sanity: body should be > 100 KB, got {len(body.encode('utf-8'))}"
    )

    chunks = chunk_text(body, max_bytes=30_000)
    assert len(chunks) > 1
    for c in chunks:
        assert len(c.text.encode("utf-8")) <= 30_000


def test_chunk_text_preserves_total_index_metadata():
    body = ("\n\n".join(["x" * 10_000] * 100))
    chunks = chunk_text(body, max_bytes=50_000)
    assert all(c.total == len(chunks) for c in chunks)
    assert [c.index for c in chunks] == list(range(1, len(chunks) + 1))


def test_chunk_returns_dataclass():
    body = "abc"
    chunks = chunk_text(body)
    assert isinstance(chunks[0], Chunk)