---
aliases: []
tags:
  - state
  - execution
  - loop
  - agent
---

# 002 — Claim the `madriverai` github user handle

## [[Status]]

**DONE** — claimed 2026-06-20 (api confirms `created_at: 2026-06-20T14:02:52Z`).

## Verification

```bash
curl -sL https://api.github.com/users/madriverai | jq '{login, created_at, public_repos}'
```

Returns the user exists, no public repos yet. Per [[../Muzzy Todo/003-set-org-2fa-requirement DONE|the 2FA ADR]],
this account should be invited to the org as a Member (not Owner — the org already has 3 owners).

## What

Sign up for a github account with the username `madriverai` and add it as a member of the `Mad-River-AI` org.

## Why
- The org handle is `Mad-River-AI` (with dashes — github's URL rules forced that).
- Having a personal user account called `madriverai` (no dashes) gives you a clean vanity URL for the brand.
- The handle is currently available; someone could grab it. Brand handles are like domain names.

## How

### Step 1 — Sign up
1. Go to https://github.com/signup
2. Username: `madriverai`  *(confirmed available [[2026-06-12]])*
3. Email: any email you own (this is the account you'll be active on publicly)
4. Password + 2FA
5. Verify email

### Step 2 — Make it a member of the org
1. Go to https://github.com/orgs/Mad-River-AI/people
2. Click **Invite member**
3. Type `madriverai`
4. Choose role: **Member** (not Owner — the org already has 3 owners)
5. Send invite

## What i (hermes) tried
- This is a UI thing with email + 2fa, so i can't do it for you.
- I *can* accept the invite on the new account's behalf if you give me a fine-grained PAT scoped to `Mad-River-AI:read` for that account. But the signup itself must be you.

## Note
You already have `muzzy111` (primary) and `trip7s` (operational). If you don't want a third personal account, you can skip this — the org is fine without it. The reason to do it is brand consistency, not necessity.

## Done?

- [ ] completed

When done: flip [[status]] to `done`.
