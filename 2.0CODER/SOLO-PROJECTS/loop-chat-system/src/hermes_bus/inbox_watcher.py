"""Watchdog-based listener for INBOX.md / per-agent inbox directories.

Provides two listeners:
    InboxMdWatcher     - listens for changes to a single .md file
    InboxDirWatcher   - listens for new files in a directory

Both fall back to a polling loop if watchdog is unavailable (e.g. on a CI box).
The listener raises a Python callback when an event fires; it does NOT block.
The orchestrator owns the polling/threading logic to avoid coupling.
"""

from __future__ import annotations

import os
import time
from pathlib import Path
from typing import Callable, Iterable


def _have_watchdog() -> bool:
    try:
        import watchdog  # noqa: F401
        from watchdog.events import FileSystemEventHandler  # noqa: F401
        from watchdog.observers import Observer  # noqa: F401
        return True
    except Exception:
        return False


def make_md_watcher(
    path: Path, callback: Callable[[Path], None]
) -> "WatcherLike":
    """Return a watcher that calls `callback(path)` when `path` is modified."""
    if _have_watchdog():
        return _WatchdogMdWatcher(path, callback)
    return _PollingMdWatcher(path, callback)


def make_dir_watcher(
    directory: Path, callback: Callable[[Path], None], ignore: Iterable[str] = ()
) -> "WatcherLike":
    """Return a watcher that calls `callback(filepath)` when a new file appears in `directory`."""
    if _have_watchdog():
        return _WatchdogDirWatcher(directory, callback, ignore)
    return _PollingDirWatcher(directory, callback, ignore)


class WatcherLike:
    def start(self) -> None:
        raise NotImplementedError

    def stop(self) -> None:
        raise NotImplementedError

    def is_running(self) -> bool:
        raise NotImplementedError


class _PollingBase(WatcherLike):
    def __init__(self) -> None:
        self._running = False


class _PollingMdWatcher(_PollingBase):
    def __init__(self, path: Path, callback: Callable[[Path], None]):
        super().__init__()
        self.path = path
        self.callback = callback
        self._mtime: float = 0.0
        self._task = None

    def start(self) -> None:
        if self.is_running():
            return
        self._running = True
        import threading

        def loop():
            self._mtime = self.path.stat().st_mtime if self.path.exists() else 0.0
            while self._running:
                time.sleep(2.0)
                try:
                    mt = self.path.stat().st_mtime if self.path.exists() else 0.0
                except OSError:
                    continue
                if mt > self._mtime:
                    self._mtime = mt
                    try:
                        self.callback(self.path)
                    except Exception as e:  # noqa: BLE001
                        print(f"polling-md-watcher callback error: {e}")

        self._task = threading.Thread(target=loop, daemon=True, name="inbox-md-poll")
        self._task.start()

    def stop(self) -> None:
        self._running = False

    def is_running(self) -> bool:
        return self._running


class _PollingDirWatcher(_PollingBase):
    def __init__(self, directory: Path, callback: Callable[[Path], None], ignore: Iterable[str] = ()):
        super().__init__()
        self.directory = directory
        self.callback = callback
        self.ignore = set(ignore)
        self._known: set[str] = set()
        self._task = None

    def start(self) -> None:
        if self.is_running():
            return
        self._running = True
        self.directory.mkdir(parents=True, exist_ok=True)
        self._known = {p.name for p in self.directory.iterdir() if p.is_file()}
        import threading

        def loop():
            while self._running:
                time.sleep(2.0)
                try:
                    current = {p.name for p in self.directory.iterdir() if p.is_file()}
                except (FileNotFoundError, PermissionError):
                    continue
                new = current - self._known
                removed = self._known - current
                self._known = current
                for n in new:
                    if n in self.ignore or n.startswith("."):
                        continue
                    try:
                        self.callback(self.directory / n)
                    except Exception as e:  # noqa: BLE001
                        print(f"polling-dir-watcher callback error: {e}")
                for n in removed:
                    self._known.discard(n)

        self._task = threading.Thread(target=loop, daemon=True, name="inbox-dir-poll")
        self._task.start()

    def stop(self) -> None:
        self._running = False

    def is_running(self) -> bool:
        return self._running


class _WatchdogMdWatcher(WatcherLike):
    def __init__(self, path: Path, callback: Callable[[Path], None]):
        from watchdog.events import FileSystemEventHandler
        from watchdog.observers import Observer

        self.path = path
        self.callback = callback
        self._observer: Observer | None = None

        class Handler(FileSystemEventHandler):
            def __init__(self, cb, p):
                self.cb = cb
                self.p = p

            def _emit(self, src_path: str):
                try:
                    if Path(src_path).resolve() == self.p.resolve():
                        self.cb(self.p)
                except OSError:
                    return

            def on_modified(self, event):
                if not event.is_directory:
                    self._emit(event.src_path)

            def on_created(self, event):
                if not event.is_directory:
                    self._emit(event.src_path)

        self._Handler = Handler
        self._Observer = Observer

    def start(self) -> None:
        if self.is_running():
            return
        path = self.path
        watch_dir = path.parent
        watch_dir.mkdir(parents=True, exist_ok=True)
        if not path.exists():
            path.touch()
        obs = self._Observer()
        obs.schedule(self._Handler(self.callback, path), str(watch_dir), recursive=False)
        obs.start()
        self._observer = obs

    def stop(self) -> None:
        if self._observer:
            self._observer.stop()
            self._observer.join(timeout=2.0)
            self._observer = None

    def is_running(self) -> bool:
        return self._observer is not None and self._observer.is_alive()


class _WatchdogDirWatcher(WatcherLike):
    def __init__(self, directory: Path, callback: Callable[[Path], None], ignore: Iterable[str] = ()):
        from watchdog.events import FileSystemEventHandler
        from watchdog.observers import Observer

        self.directory = directory
        self.callback = callback
        self.ignore = set(ignore)
        self._observer: Observer | None = None

        class Handler(FileSystemEventHandler):
            def __init__(self, cb, ig):
                self.cb = cb
                self.ig = ig

            def _emit(self, src_path: str):
                name = os.path.basename(src_path)
                if name in self.ig or name.startswith("."):
                    return
                self.cb(Path(src_path))

            def on_created(self, event):
                if not event.is_directory:
                    self._emit(event.src_path)

        self._Handler = Handler
        self._Observer = Observer

    def start(self) -> None:
        if self.is_running():
            return
        watch_dir = self.directory
        watch_dir.mkdir(parents=True, exist_ok=True)
        obs = self._Observer()
        obs.schedule(self._Handler(self.callback, self.ignore), str(watch_dir), recursive=False)
        obs.start()
        self._observer = obs

    def stop(self) -> None:
        if self._observer:
            self._observer.stop()
            self._observer.join(timeout=2.0)
            self._observer = None

    def is_running(self) -> bool:
        return self._observer is not None and self._observer.is_alive()
