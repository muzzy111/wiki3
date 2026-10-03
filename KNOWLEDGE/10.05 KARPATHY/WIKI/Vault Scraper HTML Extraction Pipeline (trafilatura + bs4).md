---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper HTML Extraction Pipeline (trafilatura + bs4)

`vault_scraper/extractor.py` converts raw HTML (from the fetcher) into
clean UTF-8 text suitable for the inbox drop. The pipeline has two
stages: a primary readability-mode extractor, a defensive fallback, and
a final clean-up pass.

## Pipeline

```
html: str
  |
  v
trafilatura.extract(html, favor_recall=True, include_comments=False,
                    include_tables=False, no_fallback=False)
  |
  |-> if result and len(result.strip()) >= 200: clean and return
  |
  v
BeautifulSoup(html, "lxml")
  |
  |-> decompose <script>, <style>, <noscript>, <iframe>
  |-> get_text(separator="\n", strip=True)
  |
  |-> if lxml raises: BeautifulSoup(html, "html.parser") (last resort)
  |
  v
_clean_text(text): strip nulls / surrogates / C0 control chars
                   (except \n, \t)
  |
  v
text: str (UTF-8, no control chars, no broken markup)
```

## Why trafilatura first

`trafilatura` is purpose-built for web article extraction. With
`favor_recall=True` it errs toward keeping content (vs. dropping too
much). With `include_comments=False` it strips Disqus-style comment
sections that bloat the body. `no_fallback=False` lets it fall back to
its own internal heuristics when its main algorithm is unsure.

Result threshold: **200 chars**. Below that we assume the extractor
failed (returned only a nav menu, an empty article body, or a "subscribe
to read" wall) and trigger the bs4 fallback. 200 is the floor that
distinguishes a meaningful article body from a stub.

## Why BeautifulSoup as fallback

When trafilatura returns nothing or near-nothing, the page is probably:
- Heavy on JavaScript-rendered content (trafilatura sees the empty
  pre-render DOM).
- A non-article page (search results, tag pages, image galleries).
- Mostly tables or lists that trafilatura filters aggressively.

bs4's `get_text(separator="\n", strip=True)` is dumb but comprehensive
— it gives you every text node, joined by newlines, with no intelligence.
Sometimes dumb is what you want.

The lxml parser is tried first (faster, stricter). If lxml raises
(malformed HTML, encoding edge cases), the html.parser fallback is the
last line of defense before giving up.

## Why strip control characters

Real-world HTML sometimes contains:
- Null bytes (`\x00`) from copy-paste bugs in source CMSes.
- Vertical tabs (`\x0b`) from ancient character encoding tables.
- Soft hyphens (`\xad`) that render as nothing but break indexing.
- BEL (`\x07`) and similar that have no business in text content.
- Surrogate codepoints (U+D800-U+DFFF) from broken encoding chains.

The backend's LLM and Obsidian renderer both tolerate these, but they
inflate the file size and occasionally trigger UnicodeDecodeError in
downstream Python tools. The cleanup is cheap and removes a class of
subtle bugs.

What's preserved:
- `\n` and `\t` — meaningful whitespace.
- All printable Unicode (including accented Latin, CJK, emoji — though
  emoji are stripped by the CLAUDE.md rule only for WIKI/SCHEMA notes,
  not for content dropped to the inbox).

## What this module does NOT do

- No language detection or translation.
- No summary, headline extraction, or metadata inference — the
  backend's LLM does that.
- No deduplication — that's `inbox.py`'s job, downstream of extraction.
- No markdown conversion — the LLM produces markdown from the cleaned
  text, not us.

## See also

- [[Vault Scraper Frontend Architecture]]
- [[Vault Scraper Fetcher and Auto-Detect (httpx + Playwright)]]
- [[Vault Scraper Inbox Drop Protocol]]
- [[RAW/2026-06-29 hermes session journal]]