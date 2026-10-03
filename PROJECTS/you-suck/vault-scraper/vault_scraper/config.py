"""
Application configuration for vault-scraper.

Mirrors the pattern used in agentic-knowledge-engine:
pydantic-settings + .env file + env-var overrides. Every value can also be
overridden via CLI flag, which takes precedence.
"""
from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ── Required ─────────────────────────────────────────────────────────────
    scraper_inbox_path: Path = Path(r"C:\Users\Admin\agentic-knowledge-engine\data\inbox")

    # ── SearXNG ──────────────────────────────────────────────────────────────
    scraper_searxng_url: str = "http://localhost:8080"

    # ── Reddit (read-only OAuth2) ────────────────────────────────────────────
    scraper_reddit_client_id: str = ""
    scraper_reddit_client_secret: str = ""
    scraper_reddit_user_agent: str = "vault-scraper/0.1"

    # ── Optional overrides ──────────────────────────────────────────────────
    scraper_default_concurrency: int = 8
    scraper_default_timeout: float = 30.0
    # 490_000 leaves 10 KB headroom under the backend's 500 KB hard cap.
    scraper_chunk_bytes: int = 490_000

    def ensure_inbox(self) -> None:
        self.scraper_inbox_path.mkdir(parents=True, exist_ok=True)


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()  # type: ignore[call-arg]