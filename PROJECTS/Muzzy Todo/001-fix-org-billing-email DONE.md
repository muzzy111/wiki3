---
aliases: []
tags:
  - state
  - execution
  - loop
  - agent
---

# 001 — Fix org billing email typo

## [[Status]]
**OPEN** — must do before you start paying for anything on the org.

## What
Change the org's billing email from `bernie@madriveraai` (note: three A's) to `bernie@madriverai.com` (correct).

## Why
- Receipts and billing alerts currently go to a typo'd address — you can't recover the org via email if you lose 2fa.
- GitHub may bounce invoices, eventually freezing the org.
- It's a 30-second fix.

## How

1. Open https://github.com/organizations/Mad-River-AI/settings/billing
2. Sign in if prompted (use the `muzzy111` account — it has owner access)
3. Find the **Billing email** field
4. Change from `bernie@madriveraai` to `bernie@madriverai.com`
5. Click **[[Update]]**
6. GitHub will send a confirmation email to the new address — click the link to verify

## What i (hermes) tried
- i can [[update]] org-level settings via the API, but this specific field needs the `admin:org` scope on the token, which `muzzy111`'s current token doesn't have.
- granting that scope requires you to do `gh auth refresh -h github.com -s admin:org` in a terminal, OR just do it in the web UI (faster).

## Done?

- [ ] completed

When done: flip [[status]] to `done` and add the date in a `## Done YYYY-MM-DD` section.
