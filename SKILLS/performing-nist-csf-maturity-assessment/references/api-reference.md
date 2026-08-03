---
name: Document design
description: This skill should be used when the user asks to "create a proposal", "design a report", "make a one-pager", "build a PDF", "create a newsletter", "design slides", "make event materials", "design a flyer", or needs help with print-ready HTML documents. Provides brand configuration, CSS patterns for print layout, and document design best practices.
version: 1.0.0
tags:
  - brand
  - content
  - footer
  - config
---

# API Reference — Performing NIST CSF Maturity Assessment

## [[Libraries]] Used
- **csv**: Parse and generate assessment CSV files
- **pathlib**: File operations

## CLI Interface
```
python agent.py assess --csv assessment_responses.csv
python agent.py gaps --csv assessment_responses.csv
python agent.py template [--output template.csv]
python agent.py executive --csv assessment_responses.csv
```

## Core Functions

### `assess_from_csv(assessment_file)` — Calculate maturity scores
Scores each NIST CSF function (Identify, Protect, Detect, Respond, Recover).
Calculates overall maturity level (1-4 scale) and gap-to-target.

### `generate_gap_analysis(assessment_file)` — Prioritized gap [[[[report]]]]
Classifies gaps: HIGH (>=2 gap), MEDIUM (>=1), LOW (<1).

### `create_assessment_template(output_file)` — Generate blank assessment CSV
Produces CSV with all 23 CSF categories, score/target/evidence columns.

### `generate_executive_summary(assessment_file)` — Board-level [[[[report]]]]

## NIST CSF Functions & Categories (23 total)
| Function | Categories |
|----------|-----------|
| IDENTIFY | ID.AM, ID.BE, ID.GV, ID.RA, ID.RM, ID.SC |
| PROTECT | PR.AC, PR.AT, PR.DS, PR.IP, PR.MA, PR.PT |
| DETECT | DE.AE, DE.CM, DE.DP |
| RESPOND | RS.RP, RS.CO, RS.AN, RS.MI, RS.IM |
| RECOVER | RC.RP, RC.IM, RC.CO |

## Maturity Levels
| Level | Name | Description |
|-------|------|-------------|
| 1 | Partial | Not formalized |
| 2 | Risk Informed | Approved but not org-wide |
| 3 | Repeatable | Formally expressed as policy |
| 4 | Adaptive | Continuous improvement |

## Dependencies
No external packages — Python standard library only.
