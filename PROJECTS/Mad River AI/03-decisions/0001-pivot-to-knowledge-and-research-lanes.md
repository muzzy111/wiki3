---
aliases: []
tags:
  - state
  - execution
  - loop
  - agent
---

# ADR 0001 — Pivot OSINT to Knowledge & Research Lanes

## [[Status]]

**Accepted** — 2026-06-21.

## Context

The original v0.1 architecture doc
([[../01-architecture/osint-framework-v0.1|osint-framework-v0.1]]) framed
[[Mad River AI]] as a pure OSINT framework: domain recon, company investigator,
leak triage, person trace. The 2026-06-13 market research
([[../01-architecture/Beyond the Terminal — Market Opportunities for Non-Coding AI CLI Agents in 2026|Beyond the Terminal]])
argued the bigger opportunity was a broader **Knowledge & Research
Intelligence Agent** market, and that OSINT was a sub-niche of that.

Two framings were considered:

- **A. Stay OSINT-only.** Tighter scope, faster build, narrower market.
- **B. Pivot to Knowledge & Research.** Broader market, OSINT is one
  sub-lane. Slightly more work to make the runtime domain-neutral.
- **C. Hybrid (chosen).** Keep the framework name `osint-framework` and
  the four-layer architecture. Reframe v0.1's "first agent" and tool
  surface around Knowledge & Research lanes, with OSINT explicitly
  listed as a sub-lane and kept in v0.1.

## Decision

**Option C.** [[Mad River AI]] is a Knowledge & Research framework. OSINT
(domain recon, company investigator, person trace, leak triage) is one
sub-lane within it. Other sub-lanes include academic literature [[review]],
general web research, market intelligence, and due-diligence.

v0.1 ships 4 tools (`web_search`, `web_fetch`, `paper_lookup`, `whois`)
and 2 [[agents]] (`literature_research`, `domain_recon`) — covering both
the academic and OSINT-domain sub-lanes at v0.1.

## Consequences

**Positive:**

- Broader market position. The market paper identified the K&R space as
  the white space; OSINT is a niche within it.
- Same four-layer architecture works. The runtime is domain-neutral;
  only the agent surfaces change.
- OSINT is not deprioritized. The `whois` tool and `domain_recon`
  agent are in v0.1.
- Repo name `osint-framework` is preserved. No redirect pain.
- `madriverai.com` brand still fits ("research [[agents]]" was already the
  GitHub org description).

**Negative:**

- v0.1 ships 2 [[agents]] instead of 1. Slightly more work; target end of
  July 2026 is unchanged but with less margin.
- Naming dissonance: repo is `osint-framework` but it's not pure OSINT.
  Mitigated by [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] + docs that lead with the broader framing.
- Confusing for outside readers who only see the repo name. Mitigated
  by an explicit "what this is" section in the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[README]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]].

**Reversible?**

Partially. The runtime, legal posture, and four-layer architecture
are domain-neutral and don't need to change. Renaming the repo is
expensive (GitHub redirects) but possible.

## Alternatives considered

- **Stay OSINT-only (Option A).** Tighter scope, faster build. Rejected:
  market is narrower; the broader framing loses nothing in v0.1 and
  preserves more options for v0.2.
- **Full pivot to Knowledge & Research (Option B, no OSINT in v0.1).**
  Rejected: OSINT is the area of existing competence and the existing
  nightly cron is a domain-recon agent. Dropping it would burn existing
  work for theoretical purity.

## Implementation

- Rewrite `01-architecture/[[osint-framework-v0.1]].md` to K&R lanes framing
  (done 2026-06-21).
- Implementation plan in `.hermes/plans/2026-06-21_0111-[[osint-framework-v0.1]]-knowledge-research.md`.
- v0.1 ships 4 tools + 2 [[agents]]. First agent: `literature_research`.
  Second: `domain_recon`.
- Repo description on GitHub already says "Specialized investigation
  and research [[agents]] — automating OSINT and research [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]."
  Matches this ADR. No change needed there.

---

*Drafted by hermes 2026-06-21. Accepted by muzzy same day ("lets focus
on knowledge and research lanes. osint could fall within those domains
since theyre broad catagories").*
