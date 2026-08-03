---
name: analyzing-malicious-pdf-with-peepdf
description: "Malicious PDF Analysis Agent - static analysis using peepdf, pdfid, and pdf-parser for threat detection. Use when the user asks to analyze malicious pdf with peepdf."
version: 1.0.0
tags:
  - analyzing
source: analyzing-malicious-pdf-with-peepdf
---

# Analyzing Malicious PDF with peepdf

**Role:** Deep analysis  
**Audience:** analysts and investigators  
**Primary tools:** peepdf, pdfid.py Usage, pdf-parser.py Usage

## When to use

- The user wants to **analyze** malicious pdf with peepdf.
- Capability: Malicious PDF Analysis Agent - static analysis using peepdf, pdfid, and pdf-parser for threat detection.
- Goal: extract findings, indicators, and conclusions from technical evidence.
- Trigger keywords: `analyzing, malicious, peepdf`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute MD5 and SHA-256 hashes of the PDF file
2. Run pdfid.py to triage PDF for suspicious keywords
3. Run peepdf for detailed PDF object analysis
4. Run pdf-parser.py to extract specific objects
5. Extract JavaScript content from identified objects
6. Detect common shellcode patterns in extracted content
7. Calculate overall risk score for the PDF
8. Generate comprehensive PDF malware analysis report

## Tools & resources

- peepdf
- pdfid.py Usage
- pdf-parser.py Usage

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

- `compute_hashes` — Compute MD5 and SHA-256 hashes of the PDF file.
- `run_pdfid` — Run pdfid.py to triage PDF for suspicious keywords.
- `run_peepdf_analysis` — Run peepdf for detailed PDF object analysis.
- `run_pdf_parser` — Run pdf-parser.py to extract specific objects.
- `extract_javascript` — Extract JavaScript content from identified objects.
- `detect_shellcode_patterns` — Detect common shellcode patterns in extracted content.
- `calculate_risk_score` — Calculate overall risk score for the PDF.
- `generate_report` — Generate comprehensive PDF malware analysis report.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `analyzing-malicious-pdf-with-peepdf`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
