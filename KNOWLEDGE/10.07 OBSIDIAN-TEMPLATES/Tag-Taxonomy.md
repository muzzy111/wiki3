---
<%*
//  PDF RESEARCH INGEST TEMPLATE 
// Requires: Templater, QuickAdd
// Usage: Run via QuickAdd or Templater hotkey after placing PDF in vault/Inbox/

// --- Prompt for core metadata tags:
  - const
  - source
  - await
  - domain
---

#  Tag Taxonomy

> [!info] Purpose
> This is the canonical tag reference for the Muzzy-Vault. All [[agents]] (Antigravity, Hermes) and all Templater templates derive tags from this document. **Do not add tags outside this taxonomy without updating this file first.**

---

## Source tags — where did it come from?
| Tag | Meaning |
|-----|---------|
| `source/pdf` | Ingested from a PDF file |
| `source/web-clip` | Clipped from the web (HTML/URL) |
| `source/markdown` | Converted from a .md file |
| `source/plaintext` | From a .txt or log file |
| `source/manual` | Written by hand, no external source |
| `source/agent` | Generated or heavily edited by an agent |

---

## Domain tags — what field is it in?
| Tag | Meaning |
|-----|---------|
| `domain/ai-ml` | AI, ML, LLMs, agent architecture |
| `domain/osint` | Open-source intelligence, research tradecraft |
| `domain/security` | Cybersecurity, infosec, privacy |
| `domain/finance` | Markets, personal finance, economics |
| `domain/pkm-tools` | PKM, Obsidian, tooling, workflow |
| `domain/dev-code` | Software dev, APIs, code architecture |
| `domain/other` | Doesn't fit above; needs reclassification |

---

## Type tags — what kind of document is it?
| Tag | Meaning |
|-----|---------|
| `type/research-paper` | Peer-reviewed or technical paper |
| `type/technical-[[[[report]]]]` | Whitepapers, spec docs |
| `type/article` | Blog posts, essays, long-form journalism |
| `type/tutorial` | How-to guides, walkthroughs |
| `type/thread` | Forum threads, Reddit, HN, X |
| `type/tool-product` | Pages about a tool, SaaS, library |
| `type/reference-docs` | API docs, official documentation |
| `type/news` | News articles, announcements |
| `type/book-chapter` | Book or chapter excerpt |
| `type/documentation` | Internal or external technical docs |
| `type/note` | Atomic/evergreen notes, personal writing |
| `type/audit` | System audit / sort reports |

---

## [[Status]] tags — where is it in the workflow?
| Tag | Meaning |
|-----|---------|
| `[[status]]/unread` | Web clips not yet read |
| `[[status]]/unprocessed` | PDFs / docs not yet extracted |
| `[[status]]/in-progress` | Being worked on |
| `[[status]]/processed` | Fully tagged, summarized, filed |
| `[[status]]/archived` | Archived, not actively referenced |

---

## Relevance tags
| Tag | Meaning |
|-----|---------|
| `relevance/critical` | Directly needed for active project |
| `relevance/high` | Important, read soon |
| `relevance/normal` | General interest |
| `relevance/archive` | Low priority, keep for record |

---

## System tags
| Tag | Meaning |
|-----|---------|
| `system/audit` | Audit and sort reports |
| `system/reference` | System reference notes (like this one) |
| `system/taxonomy` | Tag/schema definition notes |
| `system/[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]` | [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Template]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] files |

---

## Tag Rules
1. Every note **must** have at least one `source/`, one `domain/`, one `type/`, and one `[[status]]/` tag.
2. Relevance tags are optional but encouraged for web clips and PDFs.
3. `system/` tags are for vault infrastructure notes only — never apply to content.
4. When a domain is ambiguous, pick the **primary** domain and add a second `domain/` tag only if genuinely dual-domain.
5. [[Agents]] should never invent tags outside this taxonomy. If no tag fits, use `domain/other` and flag for human [[review]].

---

## Folder → Domain Mapping
```
Muzzy/Processed/ai-ml/        ← domain/ai-ml
Muzzy/Processed/osint/        ← domain/osint
Muzzy/Processed/security/     ← domain/security
Muzzy/Processed/finance/      ← domain/finance
Muzzy/Processed/pkm-tools/    ← domain/pkm-tools
Muzzy/Processed/dev-code/     ← domain/dev-code
Muzzy/Processed/other/        ← domain/other
Inbox/                        ← anything with status/unprocessed or status/unread
```
