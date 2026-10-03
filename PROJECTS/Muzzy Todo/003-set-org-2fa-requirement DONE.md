---
aliases: []
tags:
  - state
  - execution
  - loop
  - agent
---

# 003 — Require 2FA on the Mad-River-AI org

## [[Status]]

**DONE** — Muzzy toggled it. Verified 2026-06-21 via api:

```
$ curl -sL .../orgs/Mad-River-AI | jq '.two_factor_requirement_enabled'
true
```

Billing email typo also fixed (`bernie@madriverai`, no extra A).

## What

Turn on **"Require two-factor [[authentication]] for the organization"** in the org's security settings. Done.

## Why

- The org previously showed `"two_factor_requirement_enabled": false` in github's api. Without 2FA enforcement, any owner or member could log in with just a password if their account was compromised.
- 2FA is a 30-second toggle that prevents 90%+ of account-takeover attacks.
- It's free. There's no reason not to.

## How (the steps Muzzy used)

1. Go to https://github.com/organizations/Mad-River-AI/settings/security
2. Sign in as `muzzy111` (or any current owner)
3. Find **"Two-factor [[authentication]]"** section
4. Click **"Require two-factor [[authentication]] for all members"**
5. Confirm (after verifying all 3 owners have 2FA on their personal accounts)

The bot account that github auto-creates when you form an org (`Mad-River-AI` itself) is exempt — that's fine.

## What i (hermes) tried

- This requires `admin:org` scope on a token, which `muzzy111`'s current token doesn't have. Web UI is faster anyway. Muzzy did it via web UI.

## Done?

- [x] completed (verified 2026-06-21 via api)
