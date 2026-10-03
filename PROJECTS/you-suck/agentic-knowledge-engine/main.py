"""
Agentic Knowledge Synthesis Engine — entry point.

Wires the engine, configures logging, and runs the watcher.
"""
from __future__ import annotations

import logging
import sys
from logging.handlers import RotatingFileHandler

from app.config import get_settings
from app.watcher import Engine


def _configure_logging(log_dir, level: str) -> None:
    log_dir.mkdir(parents=True, exist_ok=True)
    fmt = "%(asctime)s %(levelname)-7s [%(threadName)s] %(name)s :: %(message)s"
    formatter = logging.Formatter(fmt)

    root = logging.getLogger()
    root.setLevel(level)
    # Replace any pre-existing handlers (uvicorn, etc.) to avoid duplicate logs.
    for h in list(root.handlers):
        root.removeHandler(h)

    stream = logging.StreamHandler(sys.stdout)
    stream.setFormatter(formatter)
    root.addHandler(stream)

    file_handler = RotatingFileHandler(
        log_dir / "engine.log", maxBytes=5_000_000, backupCount=3, encoding="utf-8",
    )
    file_handler.setFormatter(formatter)
    root.addHandler(file_handler)


def main() -> int:
    settings = get_settings()
    settings.ensure_directories()
    _configure_logging(settings.log_dir, settings.log_level)

    logger = logging.getLogger("engine")
    logger.info("Agentic Knowledge Engine starting")
    for k, v in settings.path_summary().items():
        logger.info("  %-15s %s", k, v)
    logger.info("  %-15s %s", "model", settings.openrouter_model)
    logger.info("  %-15s %d", "concurrency", settings.worker_concurrency)

    def on_processed(src, note) -> None:
        logger.info("✓ synthesized %s → %s", src.name, note)

    def on_failed(src, exc) -> None:
        logger.warning("✗ failed %s: %s", src.name, exc)

    engine = Engine(settings, on_processed=on_processed, on_failed=on_failed)

    if settings.run_once:
        try:
            engine._sweep_existing_inbox()  # noqa: SLF001 — intentional one-shot path
            # Wait for any scheduled futures to finish.
            import time
            deadline = time.time() + 60
            while engine._in_flight and time.time() < deadline:  # noqa: SLF001
                time.sleep(0.5)
        finally:
            engine.stop()
        return 0

    engine.run_blocking()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())