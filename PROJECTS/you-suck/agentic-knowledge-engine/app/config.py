"""
Application configuration loaded from environment variables (and .env file).

All paths inside the container resolve under /data, which is the volume mount
point defined in docker-compose.yml. Override DATA_DIR if you change the mount.
"""
from __future__ import annotations

from functools import lru_cache
from pathlib import Path
from typing import Literal

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Strict, typed configuration. Anything missing from the environment aborts
    startup with a clear validation error (except sensible defaults below)."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ── OpenRouter ───────────────────────────────────────────────────────────
    openrouter_api_key: str = Field(..., min_length=20, description="OpenRouter API key (sk-or-v1-…)")
    openrouter_base_url: str = "https://openrouter.ai/api/v1"
    # Nous Hermes 3 70B is the default — strong instruction following + JSON-mode support.
    # Swap to any OpenRouter model id (e.g. anthropic/claude-sonnet-4, openai/gpt-4o-mini).
    openrouter_model: str = "nousresearch/hermes-3-llama-3.1-70b-instruct"
    openrouter_site_url: str = "https://localhost"
    openrouter_app_name: str = "Agentic Knowledge Engine"

    # ── Generation behavior ──────────────────────────────────────────────────
    temperature: float = 0.2
    max_tokens: int = 2048
    request_timeout: float = 120.0
    max_retries: int = 4

    # ── Filesystem (all relative to /data) ────────────────────────────────────
    data_dir: Path = Path("/data")
    inbox_dir: Path = Path("/data/inbox")
    notes_dir: Path = Path("/data/notes")
    archive_dir: Path = Path("/data/archive")
    quarantine_dir: Path = Path("/data/quarantine")
    db_path: Path = Path("/data/state.db")
    log_dir: Path = Path("/data/logs")

    # ── Watcher / worker ─────────────────────────────────────────────────────
    watch_recursive: bool = True
    file_stable_seconds: float = 1.5   # wait this long after last write event
    min_file_size_bytes: int = 8       # ignore empty / partial writes
    max_file_size_bytes: int = 512_000  # 500 KB hard cap per inbox file
    allowed_extensions: tuple[str, ...] = (".md", ".txt", ".rst", ".org")
    worker_concurrency: int = 2        # parallel LLM calls

    # ── Linking ──────────────────────────────────────────────────────────────
    inject_vault_links: bool = True   # auto-link extracted concepts to existing notes
    max_injected_links_per_note: int = 12
    link_min_concept_length: int = 3

    # ── Operational ───────────────────────────────────────────────────────────
    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR"] = "INFO"
    run_once: bool = False             # if True, process existing inbox and exit (useful for cron / CI)

    @field_validator("openrouter_api_key")
    @classmethod
    def _looks_like_openrouter_key(cls, v: str) -> str:
        if not v.startswith("sk-or-"):
            raise ValueError("openrouter_api_key must start with 'sk-or-' (got a different prefix)")
        return v

    @field_validator("temperature")
    @classmethod
    def _temp_range(cls, v: float) -> float:
        if not 0.0 <= v <= 2.0:
            raise ValueError("temperature must be between 0.0 and 2.0")
        return v

    def ensure_directories(self) -> None:
        """Create all required directories. Idempotent."""
        for d in (
            self.data_dir,
            self.inbox_dir,
            self.notes_dir,
            self.archive_dir,
            self.quarantine_dir,
            self.log_dir,
        ):
            d.mkdir(parents=True, exist_ok=True)

    def path_summary(self) -> dict[str, str]:
        return {
            "data_dir": str(self.data_dir),
            "inbox_dir": str(self.inbox_dir),
            "notes_dir": str(self.notes_dir),
            "archive_dir": str(self.archive_dir),
            "quarantine_dir": str(self.quarantine_dir),
            "db_path": str(self.db_path),
        }


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """Cached settings accessor — instantiates exactly once per process."""
    return Settings()  # type: ignore[call-arg]