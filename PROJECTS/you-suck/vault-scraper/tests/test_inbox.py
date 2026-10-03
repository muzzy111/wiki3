"""Tests for inbox writer — atomic_write + dedup."""
from __future__ import annotations

import os
from pathlib import Path

import pytest

from vault_scraper.inbox import InboxWriter, DropResult, atomic_write


def test_atomic_write_produces_final_file(tmp_path: Path):
    target = tmp_path / "out.md"
    atomic_write(target, "hello world\n")
    assert target.exists()
    assert target.read_text(encoding="utf-8") == "hello world\n"


def test_atomic_write_leaves_no_tmp_artifact(tmp_path: Path):
    target = tmp_path / "out.md"
    atomic_write(target, "content\n")
    # Look for any leftover .tmp files in the directory.
    leftovers = [p for p in tmp_path.iterdir() if p.suffix == ".tmp" or ".tmp" in p.name]
    assert leftovers == [], f"unexpected tmp leftovers: {leftovers}"


def test_atomic_write_overwrites_existing_file(tmp_path: Path):
    target = tmp_path / "out.md"
    target.write_text("old\n", encoding="utf-8")
    atomic_write(target, "new\n")
    assert target.read_text(encoding="utf-8") == "new\n"


def test_drop_writes_file_with_correct_frontmatter(tmp_path: Path):
    inbox = tmp_path / "inbox"
    writer = InboxWriter(inbox, chunk_bytes=490_000)

    results = writer.drop(
        source_url="https://example.com/article",
        body="Some article body content.",
        mode="urls",
        dry_run=False,
    )
    assert len(results) == 1
    assert not results[0].skipped_duplicate
    assert results[0].path.exists()

    content = results[0].path.read_text(encoding="utf-8")
    # Required frontmatter keys present.
    assert "scraper_source_url:" in content
    # YAML may quote the URL or not depending on PyYAML heuristics.
    assert 'https://example.com/article' in content
    assert "scraper_domain:" in content
    assert "example.com" in content
    assert "scraper_timestamp:" in content
    assert "scraper_mode:" in content
    assert "urls" in content
    # Body is there.
    assert "Some article body content." in content
    # No "scraper_chunk" key for single-file drop.
    assert "scraper_chunk:" not in content


def test_drop_with_query_adds_query_field(tmp_path: Path):
    inbox = tmp_path / "inbox"
    writer = InboxWriter(inbox, chunk_bytes=490_000)
    results = writer.drop(
        source_url="https://example.com/x",
        body="body",
        mode="search",
        query="python asyncio",
        dry_run=False,
    )
    content = results[0].path.read_text(encoding="utf-8")
    assert "scraper_query:" in content
    assert "python asyncio" in content


def test_dedup_skips_second_identical_drop(tmp_path: Path):
    inbox = tmp_path / "inbox"
    writer = InboxWriter(inbox, chunk_bytes=490_000)

    first = writer.drop(
        source_url="https://example.com/a",
        body="Identical body content.",
        mode="urls",
        dry_run=False,
    )
    assert len(first) == 1
    assert not first[0].skipped_duplicate

    second = writer.drop(
        source_url="https://example.com/a",
        body="Identical body content.",
        mode="urls",
        dry_run=False,
    )
    assert len(second) == 1
    assert second[0].skipped_duplicate
    assert second[0].bytes_written == 0

    # Only one file actually written to disk.
    files = list(inbox.glob("*.md"))
    assert len(files) == 1
    assert writer.stats["dropped"] == 1
    assert writer.stats["skipped_dup"] == 1


def test_chunked_drop_creates_part_files(tmp_path: Path):
    inbox = tmp_path / "inbox"
    writer = InboxWriter(inbox, chunk_bytes=2_000)  # tiny to force chunking

    big_body = "\n\n".join(["x" * 1_500] * 10)  # ~15 KB, forces multi-chunk
    results = writer.drop(
        source_url="https://example.com/big",
        body=big_body,
        mode="spider",
        dry_run=False,
    )
    assert len(results) > 1
    for r in results:
        assert r.path.exists()
        content = r.path.read_text(encoding="utf-8")
        assert "scraper_chunk:" in content
        assert f"{r.chunk_index}/{r.chunk_total}" in content


def test_dry_run_does_not_write_files(tmp_path: Path):
    inbox = tmp_path / "inbox"
    writer = InboxWriter(inbox, chunk_bytes=490_000)
    results = writer.drop(
        source_url="https://example.com/dry",
        body="body",
        mode="urls",
        dry_run=True,
    )
    assert len(results) == 1
    # No files on disk.
    assert list(inbox.glob("*")) == []
    # But stats still record what would have been dropped.
    assert writer.stats["dropped"] == 0