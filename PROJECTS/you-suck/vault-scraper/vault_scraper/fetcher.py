"""
HTTP fetching with auto-detect (httpx first, Playwright on failure).

The contract:
  1. Try httpx GET with realistic browser headers.
  2. If non-200, timeout, TLS, or connection error → Playwright fallback.
  3. Always return the rendered HTML string; downstream extractor decides
     what's text and what's noise.

A single Playwright browser is reused across the whole scrape session
(`Fetcher` is the unit of reuse). Each URL gets a fresh page.
"""
from __future__ import annotations

import asyncio
import logging
from dataclasses import dataclass
from typing import Optional

import httpx

logger = logging.getLogger(__name__)


HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}


@dataclass
class FetchResult:
    url: str
    html: str
    final_url: str  # after any redirects
    via: str        # "httpx" | "playwright"


class FetchError(Exception):
    pass


class Fetcher:
    """
    Async fetcher with httpx-first / Playwright-fallback policy.

    Use as an async context manager:
        async with Fetcher(timeout=30.0) as f:
            result = await f.fetch(url)
    """

    def __init__(
        self,
        *,
        timeout: float = 30.0,
        use_playwright: bool = True,
    ) -> None:
        self.timeout = timeout
        self.use_playwright = use_playwright
        self._client: Optional[httpx.AsyncClient] = None
        self._playwright = None
        self._browser = None
        self._context = None

    async def __aenter__(self) -> "Fetcher":
        self._client = httpx.AsyncClient(
            timeout=self.timeout,
            follow_redirects=True,
            headers=HEADERS,
            http2=True,
        )
        if self.use_playwright:
            try:
                from playwright.async_api import async_playwright
                self._playwright = await async_playwright().start()
                self._browser = await self._playwright.chromium.launch(headless=True)
                self._context = await self._browser.new_context(
                    user_agent=HEADERS["User-Agent"],
                    extra_http_headers={"Accept-Language": HEADERS["Accept-Language"]},
                )
            except Exception as exc:
                logger.warning("Playwright unavailable; falling back to httpx-only: %s", exc)
                await self._close_playwright()
                self.use_playwright = False
        return self

    async def __aexit__(self, *_exc: object) -> None:
        if self._client is not None:
            await self._client.aclose()
        await self._close_playwright()

    async def _close_playwright(self) -> None:
        if self._context is not None:
            try:
                await self._context.close()
            except Exception:
                pass
            self._context = None
        if self._browser is not None:
            try:
                await self._browser.close()
            except Exception:
                pass
            self._browser = None
        if self._playwright is not None:
            try:
                await self._playwright.stop()
            except Exception:
                pass
            self._playwright = None

    async def fetch(self, url: str) -> FetchResult:
        """
        Attempt httpx, fall back to Playwright on failure.
        Raises FetchError if both attempts fail.
        """
        if self._client is None:
            raise RuntimeError("Fetcher must be used as an async context manager")

        # Attempt 1: httpx
        try:
            resp = await self._client.get(url)
            if 200 <= resp.status_code < 300 and len(resp.text) > 0:
                return FetchResult(
                    url=url,
                    html=resp.text,
                    final_url=str(resp.url),
                    via="httpx",
                )
            # Non-2xx — fall through to Playwright
            logger.debug("httpx non-2xx %d for %s — trying Playwright", resp.status_code, url)
        except (httpx.TransportError, httpx.HTTPError) as exc:
            logger.debug("httpx failed for %s: %s — trying Playwright", url, exc)

        # Attempt 2: Playwright
        if not self.use_playwright:
            raise FetchError(f"httpx failed and Playwright disabled for {url}")

        if self._context is None:
            raise FetchError(f"httpx failed and Playwright not initialized for {url}")

        try:
            page = await self._context.new_page()
            try:
                await page.goto(url, wait_until="networkidle", timeout=int(self.timeout * 1000))
                html = await page.content()
                final_url = page.url
            finally:
                await page.close()
            return FetchResult(url=url, html=html, final_url=final_url, via="playwright")
        except Exception as exc:
            raise FetchError(f"Playwright failed for {url}: {exc}") from exc