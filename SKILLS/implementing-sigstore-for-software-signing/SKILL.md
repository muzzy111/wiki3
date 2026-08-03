---
name: implementing-sigstore-for-software-signing
description: "Sigstore Software Signing Agent - Automates cosign keyless signing, Rekor transparency log verification, and Fulcio certificate inspection for container images and software artifacts. Use when the user asks to implement sigstore for software signing."
version: 1.0.0
tags:
  - implementing
source: implementing-sigstore-for-software-signing
---

# Implementing Sigstore for Software Signing

**Role:** Security control implementation  
**Audience:** security architects and engineers  
**Primary tools:** Arguments, Key Functions, Common OIDC Issuers

## When to use

- The user wants to **implement** sigstore for software signing.
- Capability: Sigstore Software Signing Agent - Automates cosign keyless signing, Rekor transparency log verification, and Fulcio certificate inspection for container images and software artifacts.
- Goal: design and implement durable security controls and architectures.
- Trigger keywords: `implementing, sigstore, software, signing`

## Outcomes

A successful run should leave the user with:
1. A clear answer to the objective (findings, status, or deliverable).
2. Evidence pointers (commands, logs, artifacts, hashes, or query results).
3. Prioritized next actions (contain, remediate, hunt further, or document).

## High-level procedure

1. Compute SHA-256 hash of a file
2. Execute a cosign CLI command and return the result
3. Verify cosign CLI is available and return version info
4. Sign a file blob using cosign keyless signing with Fulcio and Rekor. This triggers an OIDC authentication flow. In CI, set SIGSTORE_ID_TOKEN environment variable to provide the identity token non-interactively
5. Verify a signed blob against expected identity and OIDC issuer
6. Sign a container image using cosign keyless signing. The image_uri should include the digest (e.g., registry/image@sha256:abc...). Signing by tag instead of digest is unreliable because tags are mutable
7. Verify a container image signature against expected identity and issuer
8. Search the Rekor transparency log for entries matching an artifact hash. Queries the Rekor REST API /api/v1/index/retrieve endpoint

## Tools & resources

- Arguments
- Key Functions
- Common OIDC Issuers

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

- `compute_sha256` — Compute SHA-256 hash of a file.
- `run_cosign` — Execute a cosign CLI command and return the result.
- `check_cosign_installed` — Verify cosign CLI is available and return version info.
- `sign_blob_keyless` — Sign a file blob using cosign keyless signing with Fulcio and Rekor. This triggers an OIDC authentication flow. In CI, set SIGSTORE_ID_TOKEN environment variable to provide the identity token non-interactively.
- `verify_blob_keyless` — Verify a signed blob against expected identity and OIDC issuer.
- `sign_container_keyless` — Sign a container image using cosign keyless signing. The image_uri should include the digest (e.g., registry/image@sha256:abc...). Signing by tag instead of digest is unreliable because tags are mutable.
- `verify_container_keyless` — Verify a container image signature against expected identity and issuer.
- `search_rekor_by_hash` — Search the Rekor transparency log for entries matching an artifact hash. Queries the Rekor REST API /api/v1/index/retrieve endpoint.
- `search_rekor_by_email` — Search the Rekor transparency log for entries matching an email identity.
- `get_rekor_entry` — Retrieve a specific entry from the Rekor transparency log by UUID.

## Quality bar

- Prefer **evidence-backed** claims (artifact path, event ID, hash, query).
- Separate **fact**, **inference**, and **recommendation**.
- Call out false-positive pitfalls for this technique.
- When unsure, say so and propose the cheapest validation step.

---

*High-level skill guide for `implementing-sigstore-for-software-signing`. Low-level flags and schemas live under `references/` — load them on demand rather than treating them as the skill definition.*
