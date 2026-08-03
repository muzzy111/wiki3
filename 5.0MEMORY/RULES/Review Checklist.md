---
title: "Review Checklist"
role: "memory"
status: active
---

# Review Checklist

> Applied to every review request the Memory Curator receives.

## Frontmatter Compliance

- [ ] `title` is set
- [ ] `tags` is set
- [ ] `type` is set (task / wiki / draft / etc.)
- [ ] `status` is set (active / stub / archived)
- [ ] `created` is set (YYYY-MM-DD)
- [ ] `modified` is updated to the most recent edit

## Wikilink Integrity

- [ ] Every wikilink resolves (target file exists or is a deliberate stub)
- [ ] No bare URL links inside prose where a wikilink would work

## Acceptance Criteria Mapping

- [ ] Every criterion in the source brief has a checked or unchecked line in the completion
- [ ] Unchecked criteria are explained in Caveats

## Evidence

- [ ] `.omo/evidence/<task>-<slug>.txt` exists
- [ ] The evidence file contains the actual command output (not a paraphrase)

## No Creep

- [ ] No files outside the scope of the brief are modified
- [ ] No new dependencies are added unless explicitly authorized

## Pitfalls

- **Pitfall: rubber-stamping.** Always re-read the brief's acceptance criteria; don't trust the completion's self-assessment.
- **Pitfall: approving with hidden must_fix.** All must_fix items must be in the verdict JSON, not buried in prose.

## Related

- `.omo/templates/review-verdict.md` — verdict schema.
