---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Vault Scraper Fetcher and Auto-Detect (httpx + Playwright)

`vault_scraper/fetcher.py` implements the auto-detect fetch policy from
the spec (section 6): try httpx first, fall back to Playwright headless
Chromium on transport error / non-2xx / timeout. A single Playwright
browser context is reused across all pages in a scrape session — no
per-page browser launch.

## Two attempts

```
Attempt 1: httpx GET with realistic browser headers
   -> if 2xx and body non-empty: return FetchResult(via="httpx")
   -> if non-2xx / httpx.TransportError / httpx.HTTPError: fall through
Attempt 2: Playwright async Chromium
   -> page.goto(url, wait_until="networkidle", timeout=int(timeout*1000))
   -> return FetchResult(via="playwright")
```

If both fail, raise `FetchError`. Caller decides whether to log and
continue (the per-source runners do) or propagate.

## Browser headers

```python
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}
```

These are passed to both the httpx client and the Playwright context.
The User-Agent is the standard Chrome 124 string; many sites 403
default `python-httpx` UAs but accept this one.

## Context reuse

`Fetcher` is an async context manager. Within one session:

```python
async with Fetcher(timeout=30.0) as fetcher:
    result1 = await fetcher.fetch("https://example.com/a")
    result2 = await fetcher.fetch("https://example.com/b")
    # ...
```

Both httpx (`AsyncClient`) and Playwright (`browser`, `context`) are
constructed once on `__aenter__` and torn down on `__aexit__`. Each
URL gets its own `page` from the context — never a fresh browser.

## Graceful Playwright absence

If `playwright install chromium` hasn't been run, the import works but
`async_playwright().start()` raises. The fetcher catches this on
`__aenter__`, logs a warning, and sets `self.use_playwright = False`.
Subsequent fetches will raise `FetchError` immediately on any httpx
failure rather than attempting a doomed Playwright call.

This makes the scraper usable in environments where Playwright isn't
installed (CI, minimal containers) — as long as httpx is enough.

## HTTP/2 enabled

```python
self._client = httpx.AsyncClient(
    timeout=self.timeout,
    follow_redirects=True,
    headers=HEADERS,
    http2=True,
)
```

`http2=True` requires the `httpx[http2]` extra (`h2` package). Set in
pyproject.toml. Many CDNs now prefer HTTP/2; failing to negotiate it
shaves ~10-20% off transfer times on content-heavy pages.

## Per-source interaction

Source modules (`urls.py`, `spider.py`, `feed.py`, etc.) create one
`Fetcher` per scrape run, NOT per URL. Concurrency control happens via
`asyncio.Semaphore(concurrency)` wrapping each `fetch` call. The
fetcher itself is stateless across calls; concurrency is the caller's
responsibility.

## Honest limitations

- **No auth flow.** Cookie-based auth, OAuth redirects, login walls —
  all fail and log as `FetchError`. Spec is explicit about this.
- **No proxy support.** Per spec section 14.
- **No retry / backoff.** Per spec section 7. On any error: log, skip,
  continue.
- **`networkidle` can hang.** Some pages never reach network-idle
  (long-poll sockets, analytics beacons). The 30s timeout mitigates but
  not perfectly.

## See also

- [[Vault Scraper Frontend Architecture]]
- [[Vault Scraper HTML Extraction Pipeline (trafilatura + bs4)]]
- [[Vault Scraper Source Subcommands]]
- [[RAW/2026-06-29 hermes session journal]]