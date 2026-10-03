"""Logging setup for vault-scraper."""
from __future__ import annotations

import logging
import sys


def configure_logging(level: str = "INFO") -> None:
    fmt = "%(asctime)s %(levelname)-7s [%(name)s] %(message)s"
    formatter = logging.Formatter(fmt)
    root = logging.getLogger()
    root.setLevel(level)
    for h in list(root.handlers):
        root.removeHandler(h)
    stream = logging.StreamHandler(sys.stderr)
    stream.setFormatter(formatter)
    root.addHandler(stream)