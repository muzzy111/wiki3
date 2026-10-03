"""
File watcher + bounded worker pool.

We use watchdog (Observer) on platforms where inotify is available, and fall back
to PollingObserver if the underlying filesystem (e.g. some Docker bind mounts on
macOS / Windows) doesn't deliver native events.

A small FileStableHandler buffers paths whose mtime is still moving so we don't
process a half-written file. Once a path is 'stable' for `file_stable_seconds`,
it's enqueued to the worker pool (bounded by `worker_concurrency`).

A SQLite-backed `State` table tracks inbox files already processed, so the engine
is idempotent on restart.
"""
from __future__ import annotations

import logging
import sqlite3
import threading
import time
from concurrent.futures import Future, ThreadPoolExecutor
from contextlib import contextmanager
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Iterable

from watchdog.events import FileSystemEvent, FileSystemEventHandler
from watchdog.observers import Observer
from watchdog.observers.polling import PollingObserver

from .config import Settings
from .linking import VaultIndex
from .synthesizer import Synthesizer, SynthesizerError
from .vault import safe_move

logger = logging.getLogger(__name__)


# ── SQLite state ──────────────────────────────────────────────────────────────


class State:
    """Tiny SQLite-backed deduplication registry.

    Schema:
        processed (path TEXT PRIMARY KEY, processed_at TEXT, note_path TEXT)
        failures  (path TEXT PRIMARY KEY, attempts INT, last_error TEXT, last_attempt_at TEXT)
    """

    SCHEMA = """
    CREATE TABLE IF NOT EXISTS processed (
        path          TEXT PRIMARY KEY,
        processed_at  TEXT NOT NULL,
        note_path     TEXT
    );
    CREATE TABLE IF NOT EXISTS failures (
        path           TEXT PRIMARY KEY,
        attempts       INTEGER NOT NULL DEFAULT 0,
        last_error     TEXT,
        last_attempt_at TEXT
    );
    """

    def __init__(self, db_path: Path) -> None:
        db_path.parent.mkdir(parents=True, exist_ok=True)
        self._lock = threading.Lock()
        self._db = sqlite3.connect(str(db_path), check_same_thread=False)
        self._db.execute("PRAGMA journal_mode=WAL;")
        self._db.execute("PRAGMA synchronous=NORMAL;")
        with self._lock:
            self._db.executescript(self.SCHEMA)
            self._db.commit()

    def close(self) -> None:
        with self._lock:
            self._db.close()

    def is_processed(self, path: str) -> bool:
        with self._lock:
            cur = self._db.execute("SELECT 1 FROM processed WHERE path = ?", (path,))
            return cur.fetchone() is not None

    def mark_processed(self, path: str, note_path: str | None) -> None:
        with self._lock:
            self._db.execute(
                "INSERT OR REPLACE INTO processed(path, processed_at, note_path) VALUES(?, ?, ?)",
                (path, utc_iso(), note_path),
            )
            self._db.commit()

    def record_failure(self, path: str, error: str) -> int:
        with self._lock:
            self._db.execute(
                """INSERT INTO failures(path, attempts, last_error, last_attempt_at)
                   VALUES(?, 1, ?, ?)
                   ON CONFLICT(path) DO UPDATE SET
                     attempts = attempts + 1,
                     last_error = excluded.last_error,
                     last_attempt_at = excluded.last_attempt_at""",
                (path, error, utc_iso()),
            )
            self._db.commit()
            cur = self._db.execute("SELECT attempts FROM failures WHERE path = ?", (path,))
            row = cur.fetchone()
            return int(row[0]) if row else 1


def utc_iso() -> str:
    from datetime import datetime, timezone
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


# ── Watchdog handler ─────────────────────────────────────────────────────────


@dataclass
class _Pending:
    path: Path
    last_mtime: float
    last_size: int
    enqueue_at: float


class StableFileHandler(FileSystemEventHandler):
    """Buffers filesystem events and only enqueues paths that have stopped changing."""

    MAX_PENDING = 1024

    def __init__(self, *, on_stable: Callable[[Path], None], settings: Settings) -> None:
        super().__init__()
        self.on_stable = on_stable
        self.settings = settings
        self._lock = threading.Lock()
        self._pending: dict[str, _Pending] = {}
        self._stop = threading.Event()

    def start_flusher(self) -> threading.Thread:
        t = threading.Thread(target=self._flush_loop, name="stable-flusher", daemon=True)
        t.start()
        return t

    def stop(self) -> None:
        self._stop.set()

    def _is_eligible(self, path: Path) -> bool:
        if not path.is_file():
            return False
        if path.suffix.lower() not in self.settings.allowed_extensions:
            return False
        try:
            size = path.stat().st_size
        except OSError:
            return False
        if size < self.settings.min_file_size_bytes:
            return False
        if size > self.settings.max_file_size_bytes:
            logger.warning("Skipping oversized file: %s (%d bytes)", path, size)
            return False
        return True

    def _enqueue(self, path: Path) -> None:
        try:
            stat = path.stat()
        except OSError:
            return
        if not self._is_eligible(path):
            return
        with self._lock:
            if len(self._pending) >= self.MAX_PENDING:
                logger.warning("Pending backlog full (%d) — dropping %s", self.MAX_PENDING, path)
                return
            self._pending[str(path)] = _Pending(
                path=path,
                last_mtime=stat.st_mtime,
                last_size=stat.st_size,
                enqueue_at=time.time() + self.settings.file_stable_seconds,
            )

    def on_created(self, event: FileSystemEvent) -> None:
        if not event.is_directory:
            self._enqueue(Path(event.src_path))

    def on_modified(self, event: FileSystemEvent) -> None:
        if not event.is_directory:
            self._enqueue(Path(event.src_path))

    def on_moved(self, event: FileSystemEvent) -> None:
        dest = getattr(event, "dest_path", None)
        if dest:
            self._enqueue(Path(dest))

    def _flush_loop(self) -> None:
        while not self._stop.is_set():
            now = time.time()
            ready: list[Path] = []
            with self._lock:
                keys = list(self._pending.keys())
                for key in keys:
                    p = self._pending[key]
                    try:
                        st = p.path.stat()
                    except OSError:
                        self._pending.pop(key, None)
                        continue
                    if st.st_mtime != p.last_mtime or st.st_size != p.last_size:
                        p.last_mtime = st.st_mtime
                        p.last_size = st.st_size
                        p.enqueue_at = now + self.settings.file_stable_seconds
                        continue
                    if now >= p.enqueue_at:
                        ready.append(p.path)
                        self._pending.pop(key, None)
            for path in ready:
                try:
                    self.on_stable(path)
                except Exception:
                    logger.exception("on_stable handler raised for %s", path)
            self._stop.wait(timeout=0.5)


# ── Engine orchestration ─────────────────────────────────────────────────────


class Engine:
    """Glues the watcher, the worker pool, the synthesizer, and the state DB."""

    def __init__(
        self,
        settings: Settings,
        *,
        on_processed: Callable[[Path, Path], None] | None = None,
        on_failed: Callable[[Path, Exception], None] | None = None,
    ) -> None:
        self.settings = settings
        self.state = State(settings.db_path)
        self.synthesizer = Synthesizer(settings)
        self._on_processed = on_processed
        self._on_failed = on_failed
        self._executor = ThreadPoolExecutor(
            max_workers=settings.worker_concurrency,
            thread_name_prefix="synth",
        )
        self._in_flight: set[Future] = set()
        self._observer = None
        self._handler: StableFileHandler | None = None
        self._vault_index = VaultIndex.build(settings.notes_dir)

    # ── Lifecycle ────────────────────────────────────────────────────────────

    def run_blocking(self) -> None:
        """Start the watcher and block until SIGINT/SIGTERM."""
        import signal

        stop = threading.Event()

        def _handle_signal(signum: int, _frame: object) -> None:
            logger.info("Received signal %d — shutting down", signum)
            stop.set()

        for sig in (signal.SIGTERM, signal.SIGINT):
            try:
                signal.signal(sig, _handle_signal)
            except ValueError:
                # signal can only be set from main thread on some platforms.
                pass

        self.start()
        try:
            while not stop.is_set():
                stop.wait(timeout=1.0)
        finally:
            self.stop()

    def start(self) -> None:
        # Sweep anything already in the inbox at boot.
        self._sweep_existing_inbox()
        self._refresh_vault_index()

        self._handler = StableFileHandler(on_stable=self._handle_stable, settings=self.settings)
        flusher = self._handler.start_flusher()

        # PollingObserver is a reliable fallback for bind-mounted filesystems.
        try:
            self._observer = Observer()
        except Exception as exc:  # pragma: no cover
            logger.warning("Native Observer failed (%s); falling back to PollingObserver", exc)
            self._observer = PollingObserver()

        self._observer.schedule(self._handler, str(self.settings.inbox_dir), recursive=self.settings.watch_recursive)
        self._observer.start()
        logger.info(
            "Engine running. inbox=%s notes=%s concurrency=%d model=%s",
            self.settings.inbox_dir,
            self.settings.notes_dir,
            self.settings.worker_concurrency,
            self.settings.openrouter_model,
        )
        flusher  # keep reference so it isn't GC'd

    def stop(self) -> None:
        if self._observer is not None:
            try:
                self._observer.stop()
                self._observer.join(timeout=5)
            except Exception:
                logger.exception("error stopping observer")
            self._observer = None
        if self._handler is not None:
            self._handler.stop()
            self._handler = None
        self._executor.shutdown(wait=True, cancel_futures=False)
        self.synthesizer.close()
        self.state.close()
        logger.info("Engine stopped")

    # ── File routing ────────────────────────────────────────────────────────

    def _sweep_existing_inbox(self) -> None:
        for path in self._iter_inbox_files():
            self._enqueue(path)

    def _iter_inbox_files(self) -> Iterable[Path]:
        if not self.settings.inbox_dir.exists():
            return
        for path in sorted(self.settings.inbox_dir.rglob("*") if self.settings.watch_recursive else self.settings.inbox_dir.iterdir()):
            if path.is_file() and path.suffix.lower() in self.settings.allowed_extensions:
                yield path

    def _handle_stable(self, path: Path) -> None:
        self._enqueue(path)

    def _enqueue(self, path: Path) -> None:
        path_str = str(path.resolve())
        if self.state.is_processed(path_str):
            return
        if path.suffix.lower() not in self.settings.allowed_extensions:
            return
        if not path.exists():
            return
        future = self._executor.submit(self._process, path)
        self._in_flight.add(future)
        future.add_done_callback(self._in_flight.discard)

    def _refresh_vault_index(self) -> None:
        self._vault_index = VaultIndex.build(self.settings.notes_dir)
        self.synthesizer.vault_index = self._vault_index

    # ── Core work ────────────────────────────────────────────────────────────

    def _process(self, path: Path) -> None:
        path_str = str(path.resolve())
        try:
            logger.info("Processing %s", path)
            result = self.synthesizer.synthesize_file(path)

            # Move inbox file → archive on success.
            archive_target = self.settings.archive_dir / path.name
            if archive_target.exists():
                stem, suffix = archive_target.stem, archive_target.suffix
                counter = 2
                while (self.settings.archive_dir / f"{stem}-{counter}{suffix}").exists():
                    counter += 1
                archive_target = self.settings.archive_dir / f"{stem}-{counter}{suffix}"
            safe_move(path, archive_target)

            self.state.mark_processed(path_str, str(result.note_path) if result.note_path else None)
            self._refresh_vault_index()
            logger.info("✔ %s → %s", path.name, result.note_path)
            if self._on_processed:
                try:
                    self._on_processed(path, result.note_path)  # type: ignore[arg-type]
                except Exception:
                    logger.exception("on_processed callback raised")
        except SynthesizerError as exc:
            self._quarantine(path, exc)
            if self._on_failed:
                try:
                    self._on_failed(path, exc)
                except Exception:
                    logger.exception("on_failed callback raised")
        except Exception as exc:
            logger.exception("Unexpected error processing %s", path)
            self._quarantine(path, exc)

    def _quarantine(self, path: Path, exc: Exception) -> None:
        attempts = self.state.record_failure(str(path.resolve()), str(exc))
        try:
            target = self.settings.quarantine_dir / path.name
            if target.exists():
                stem, suffix = target.stem, target.suffix
                counter = 2
                while (self.settings.quarantine_dir / f"{stem}-{counter}{suffix}").exists():
                    counter += 1
                target = self.settings.quarantine_dir / f"{stem}-{counter}{suffix}"
            safe_move(path, target)
            logger.error("✘ %s → quarantine (attempt %d): %s", path.name, attempts, exc)
        except OSError:
            logger.exception("Could not move %s to quarantine", path)