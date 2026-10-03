---
aliases: []
tags:
  - self
  - intent
  - keywords
  - none
---

#!/usr/bin/env python3
r"""
message_router.py
------------------
A single-file, zero-dependency, in-memory message router for AI [[agents]].

Routes free-text user input to a registered "Intent" using lightweight
token-overlap + regex scoring. No external packages, no network calls,
no disk I/O -- pure stdlib, safe to embed anywhere.

Usage:
    router = MessageRouter(threshold=0.35)
    router.register_intent(
        "weather",
        keywords=["weather", "forecast", "temperature", "rain", "sunny"],
        patterns=[r"\b\d{1,2}\s?(am|pm)\b"],
        weight=1.0,
    )
    result = router.route_message("what's the weather like tomorrow?")
    print(result.intent, result.confidence)

Run this file directly to see a demo against sample inputs.
"""

from __future__ import annotations

import re
import string
import time
from dataclasses import dataclass, field
from difflib import SequenceMatcher
from typing import Callable, Optional


# --------------------------------------------------------------------------
# Configuration / safety limits
# --------------------------------------------------------------------------

MAX_INPUT_CHARS = 4_000          # hard cap to prevent perf-DoS on huge inputs
MAX_TOKENS_SCORED = 200          # cap tokens actually scored per message
FUZZY_MIN_TOKEN_LEN = 4          # only fuzzy-match tokens at least this long
FUZZY_SIMILARITY_CUTOFF = 0.82   # SequenceMatcher ratio to count as a "close" hit

_PUNCT_TABLE = str.maketrans("", "", string.punctuation)
_WHITESPACE_RE = re.compile(r"\s+")


# --------------------------------------------------------------------------
# Data model
# --------------------------------------------------------------------------

@dataclass
class Intent:
    name: str
    keywords: list[str]                     # lowercase trigger words/phrases
    patterns: list[re.Pattern] = field(default_factory=list)
    weight: float = 1.0                      # multiplier applied to this intent's score
    handler: Optional[Callable[[str], None]] = None  # optional callback

    def __post_init__(self) -> None:
        self.keywords = [k.lower().strip() for k in self.keywords if k.strip()]


@dataclass
class RouteResult:
    intent: str
    confidence: float
    scores: dict[str, float]
    elapsed_ms: float
    truncated: bool = False
    empty_input: bool = False


# --------------------------------------------------------------------------
# Router
# --------------------------------------------------------------------------

class MessageRouter:
    FALLBACK_INTENT = "default_fallback"

    def __init__(self, threshold: float = 0.35):
        """
        threshold: minimum confidence [0.0-1.0] required to accept a match.
                   Anything scoring below this routes to FALLBACK_INTENT.
        """
        self.threshold = threshold
        self._intents: dict[str, Intent] = {}
        # Always ensure a fallback exists so route_message never KeyErrors.
        self.register_intent(self.FALLBACK_INTENT, keywords=[], weight=0.0)

    # ---- Registry -------------------------------------------------------

    def register_intent(
        self,
        name: str,
        keywords: list[str],
        patterns: Optional[list[str]] = None,
        weight: float = 1.0,
        handler: Optional[Callable[[str], None]] = None,
    ) -> None:
        """Register (or overwrite) an intent with its keywords/regex patterns."""
        compiled = [re.compile(p, re.IGNORECASE) for p in (patterns or [])]
        self._intents[name] = Intent(
            name=name, keywords=keywords, patterns=compiled, weight=weight, handler=handler
        )

    def unregister_intent(self, name: str) -> None:
        if name == self.FALLBACK_INTENT:
            raise ValueError("Cannot unregister the fallback intent.")
        self._intents.pop(name, None)

    def list_intents(self) -> list[str]:
        return list(self._intents.keys())

    # ---- Preprocessing ----------------------------------------------------

    @staticmethod
    def _normalize(text: str) -> tuple[str, bool]:
        """Lowercase, strip punctuation, collapse whitespace, cap length."""
        truncated = False
        if len(text) > MAX_INPUT_CHARS:
            text = text[:MAX_INPUT_CHARS]
            truncated = True
        text = text.lower().translate(_PUNCT_TABLE)
        text = _WHITESPACE_RE.sub(" ", text).strip()
        return text, truncated

    @staticmethod
    def _tokenize(clean_text: str) -> list[str]:
        tokens = clean_text.split(" ") if clean_text else []
        return tokens[:MAX_TOKENS_SCORED]

    # ---- Scoring ----------------------------------------------------------

    def _score_intent(self, intent: Intent, clean_text: str, tokens: list[str], raw_text: str) -> float:
        if intent.name == self.FALLBACK_INTENT or not intent.keywords:
            return 0.0

        token_set = set(tokens)
        keyword_hits = 0.0

        for kw in intent.keywords:
            if " " in kw:
                # multi-word phrase: substring match against the cleaned text
                if kw in clean_text:
                    keyword_hits += 1.0
                continue

            if kw in token_set:
                keyword_hits += 1.0
                continue

            # lightweight fuzzy fallback for near-misses (typos, plurals, etc.)
            if len(kw) >= FUZZY_MIN_TOKEN_LEN:
                for tok in tokens:
                    if len(tok) < FUZZY_MIN_TOKEN_LEN:
                        continue
                    if SequenceMatcher(None, kw, tok).ratio() >= FUZZY_SIMILARITY_CUTOFF:
                        keyword_hits += 0.75  # partial credit for fuzzy hit
                        break

        keyword_score = keyword_hits / len(intent.keywords)

        pattern_bonus = 0.0
        if intent.patterns:
            hits = sum(1 for p in intent.patterns if p.search(raw_text))
            pattern_bonus = 0.25 * (hits / len(intent.patterns))

        raw_score = keyword_score + pattern_bonus
        return min(raw_score, 1.0) * intent.weight

    # ---- Public API ---------------------------------------------------

    def route_message(self, user_input: Optional[str]) -> RouteResult:
        start = time.perf_counter()

        if user_input is None or not str(user_input).strip():
            elapsed = (time.perf_counter() - start) * 1000
            return RouteResult(
                intent=self.FALLBACK_INTENT,
                confidence=0.0,
                scores={},
                elapsed_ms=elapsed,
                empty_input=True,
            )

        raw_text = str(user_input)
        clean_text, truncated = self._normalize(raw_text)
        tokens = self._tokenize(clean_text)

        scores: dict[str, float] = {}
        for name, intent in self._intents.items():
            if name == self.FALLBACK_INTENT:
                continue
            scores[name] = round(self._score_intent(intent, clean_text, tokens, raw_text), 4)

        best_intent, best_score = self.FALLBACK_INTENT, 0.0
        if scores:
            best_intent, best_score = max(scores.items(), key=lambda kv: kv[1])

        if best_score < self.threshold:
            best_intent, best_score = self.FALLBACK_INTENT, best_score

        elapsed = (time.perf_counter() - start) * 1000

        result = RouteResult(
            intent=best_intent,
            confidence=best_score,
            scores=scores,
            elapsed_ms=elapsed,
            truncated=truncated,
        )

        handler = self._intents.get(best_intent, {}).handler if best_intent in self._intents else None
        if handler:
            handler(raw_text)

        return result


# --------------------------------------------------------------------------
# Demo
# --------------------------------------------------------------------------

def _demo() -> None:
    router = MessageRouter(threshold=0.3)

    router.register_intent(
        "weather",
        keywords=["weather", "forecast", "temperature", "rain", "sunny", "umbrella", "hot", "cold"],
        patterns=[r"\bin\s+\w+\b"],
        weight=1.0,
    )
    router.register_intent(
        "database_query",
        keywords=["database", "query", "select", "table", "rows", "sql", "records"],
        patterns=[r"select\s+.*\s+from", r"\bwhere\b"],
        weight=1.1,
    )
    router.register_intent(
        "file_system",
        keywords=["file", "folder", "directory", "delete", "move", "rename", "path", "save"],
        patterns=[r"[a-zA-Z]:\\\\", r"/[\w\-/]+"],
        weight=1.0,
    )

    samples = [
        "What's the weather like in Chicago tomorrow?",
        "SELECT * FROM users WHERE active = 1",
        "Can you move this file to the archive folder?",
        "Tell me a joke",
        "",
        "   ",
        "wether forcast for tomorow",   # typos -> should still fuzzy-match weather
        "x" * 10_000,                    # oversized input -> truncation path
    ]

    for s in samples:
        r = router.route_message(s)
        [[preview]] = (s[:40] + "...") if len(s) > 40 else s
        print(f"input={[[preview]]!r:45} -> intent={r.intent:18} "
              f"confidence={r.confidence:.2f} truncated={r.truncated} "
              f"empty={r.empty_input} ({r.elapsed_ms:.3f}ms)")


if __name__ == "__main__":
    _demo()