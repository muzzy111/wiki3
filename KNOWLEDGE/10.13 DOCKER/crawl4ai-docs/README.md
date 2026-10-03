---
aliases: []
tags:
  - docs
  - markdown
  - crawl
  - landing
---

# crawl4ai-docs

Crawled 2026-06-18 ~22:06 EDT via crawl4ai 127.0.0.1:11235, in response to user's "get crawl4ai working + crawl docs" request.

Source landing: https://[[docs.crawl4ai.com]]

## What is here

40 pages covering the v0.9.x docs tree (crawl4ai version 0.8.9 actually running on this host — slight version skew but content applies). Total ~720 KB of raw markdown.

Coverage:
- landing
- core/* — [[quickstart]], installation, self-hosting (the big one at 101 KB), simple/deep/adaptive-crawling, url-seeding, markdown-generation, fit-markdown, page-interaction, content-selection, cache-modes, crawler-result, cli, examples, browser-crawler-config, link-media, local-files, domain-mapping
- advanced/* — advanced-features, multi-url-crawling, hooks-auth, proxy-security, session-management, file-downloading, lazy-loading, virtual-scroll, anti-bot-and-fallback, undetected-browser, crawl-dispatcher, identity-based-crawling, adaptive-strategies
- apps/* — landing, c4a-script, llmtxt
- marketplace, branding, blog, stats

Pages NOT crawled (would explode scope): every individual API parameter page under /api/parameters/, every blog post under /blog/. If you need a specific page, just hit the API for that one URL.

## Format

Same as hermes-docs — file name = URL path with `/` -> `__`. Frontmatter has title, source, timestamp, HTTP [[status]]. Body is raw markdown from crawl4ai.

## Why this exists

User asked for offline reference of crawl4ai's own docs so we can build things against it without re-hitting the website. Especially useful for the self-hosting guide (~101 KB) which is the most actionable for our own deployment.

## How to refresh

```
curl -X POST http://127.0.0.1:11235/crawl \
  -H "Content-Type: application/json" \
  -d '{"urls":["https://docs.crawl4ai.com"],"priority":10}'
```

Or re-run the Python crawl script from the 2026-06-18 session journal.
