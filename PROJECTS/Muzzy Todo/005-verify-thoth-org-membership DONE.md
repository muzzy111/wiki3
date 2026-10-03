---
aliases: []
tags:
  - state
  - execution
  - loop
  - agent
---

# 005 — Verify Thoth-Emerald-AI is actually a member of the org

## [[Status]]
**OPEN** — hermes couldn't confirm this from the API.

## What
Confirm that the `Thoth-Emerald-AI` github account is actually a member (or owner) of the `Mad-River-AI` org.

## Why
- You said you created the account and "made them the owners" yesterday.
- I tried to find the account via the api (searched `thothtrismegistus`, `thoth-trismegistus`, `Thoth-Trismegistus`, `thoth_trismegistus`) — all 404. You then told me the right handle is `Thoth-Emerald-AI`. I verified the account exists.
- But: when i queried the org's member list, my `muzzy111` token can only see **myself** as a member. This is because:
  - the org has no public members enabled (the "people" page says so)
  - AND my token doesn't have the `admin:org` scope needed to see the full member list
- So i can't prove Thoth is in there. **Only the org owner who set this up can.**

## How

1. Go to https://github.com/orgs/Mad-River-AI/people
2. Sign in as `muzzy111` (or whichever owner you used to add Thoth)
3. The "Members" tab should show:
   - `muzzy111` — owner
   - `trip7s` — owner
   - `Thoth-Emerald-AI` — owner (or member, depending on what you set)
   - `Mad-River-AI` (the org itself, auto-created)
4. If Thoth isn't there, you need to invite them:
   - https://github.com/orgs/Mad-River-AI/people → **Invite member**
   - Type `Thoth-Emerald-AI`
   - Role: **Owner** (since you intended it that way)
   - Send invite → log in as Thoth → accept

## Done?

- [ ] completed (Thoth is in the org with the right role)

When done: flip [[status]] to `done` and add a one-line note: which role Thoth ended up with.
