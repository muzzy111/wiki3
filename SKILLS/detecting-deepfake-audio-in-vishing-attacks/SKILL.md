---
name: detecting-deepfake-audio-in-vishing-attacks
description: "Deepfake audio detection agent using spectral analysis, MFCC features, and ML classifiers. Analyzes audio files to determine whether they contain AI-generated (deepfake) speech, commonly used in vishing (voice.... Use when the user asks to detect deepfake audio in vishing attacks."
version: 1.0.0
tags:
  - detecting
  - threat-intel
source: detecting-deepfake-audio-in-vishing-attacks
---

# Detecting Deepfake Audio in Vishing Attacks

**Role:** Detection engineering  
**Audience:** detection engineers and SOC analysts  
**Primary tools:** librosa, scikit-learn, Datasets for Training, CLI Usage Examples

## When to use

- The user wants to **detect** deepfake audio in vishing attacks.
- Capability: Deepfake audio detection agent using spectral analysis, MFCC features, and ML classifiers. Analyzes audio files to determine whether they contain AI-generated (deepfake) speech, commonly used in vishing (voice phishing) attacks. Extracts spectral features with librosa, builds feature vectors, and classifies using ensemble ML models.
- Goal: identify malicious or anomalous activity with high-signal detections.
- Trigger keywords: `detecting, deepfake, audio, vishing, attacks`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Load audio file, resample to target rate, trim silence, and normalize
2. Extract MFCC, delta, and delta-delta features with statistical aggregation
3. Extract spectral centroid, bandwidth, contrast, rolloff, and ZCR
4. Extract fundamental frequency (F0), jitter, and shimmer-like features
5. Extract time-domain features: RMS energy, tempo, onset strength
6. Load audio and extract the complete feature set as a dict and numpy vector
7. Rule-based deepfake scoring using research-backed thresholds. Returns a score between 0.0 (likely genuine) and 1.0 (likely deepfake) based on known acoustic differences between real and synthetic speech
8. Classify audio using pre-trained ensemble models if available. Falls back to heuristic scoring if no trained model is found. Returns dict with model predictions and confidence

## Tools & resources

- librosa
- scikit-learn
- Datasets for Training
- CLI Usage Examples

## How the agent should work

1. **Orient** — Restate the user's goal, scope, and constraints in one short paragraph.
2. **Load depth as needed** — Do **not** dump raw API tables into the chat. Read only the reference sections required for the current step.
   - Workflows and playbooks: `references/workflows.md` (if present)
   - Standards, data models, event IDs: `references/standards.md` (if present)
   - CLI/API flags and query snippets: `references/api-reference.md`
3. **Prefer automation** — Use `scripts/agent.py` (and `scripts/process.py` if present) for repeatable collection/analysis when the environment allows.
4. **Explain at the right altitude** — Lead with decisions and findings; put flags, full queries, and hex dumps in collapsible detail or appendices.
5. **Close the loop** — Summarize confidence, residual risk, and concrete next steps.

## Package layout

| Path | Purpose |
|------|---------|
| `SKILL.md` | This high-level playbook (start here) |
| `references/` | Deep procedure, standards, and CLI/API detail |
| `scripts/` | Automation helpers for collection/analysis |

## Automation entry points

- `load_and_preprocess` — Load audio file, resample to target rate, trim silence, and normalize.
- `extract_mfcc_features` — Extract MFCC, delta, and delta-delta features with statistical aggregation.
- `extract_spectral_features` — Extract spectral centroid, bandwidth, contrast, rolloff, and ZCR.
- `extract_pitch_features` — Extract fundamental frequency (F0), jitter, and shimmer-like features.
- `extract_temporal_features` — Extract time-domain features: RMS energy, tempo, onset strength.
- `build_full_feature_vector` — Load audio and extract the complete feature set as a dict and numpy vector.
- `heuristic_deepfake_score` — Rule-based deepfake scoring using research-backed thresholds. Returns a score between 0.0 (likely genuine) and 1.0 (likely deepfake) based on known acoustic differences between real and synthetic speech.
- `classify_with_ensemble` — Classify audio using pre-trained ensemble models if available. Falls back to heuristic scoring if no trained model is found. Returns dict with model predictions and confidence.
- `train_model` — Train ensemble classifier on directories of genuine and deepfake audio samples. Expects two directories containing WAV/MP3/FLAC files: - genuine_dir: directory of known real speech samples - deepfake_dir: directory of known AI-generated speech samples Saves trained model (scaler + RF + GBT) to output_path via joblib.
- `analyze_audio` — Full analysis pipeline: load, extract features, classify, and report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `detecting-deepfake-audio-in-vishing-attacks`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
