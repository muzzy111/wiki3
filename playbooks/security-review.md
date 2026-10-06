---
name: security-review
owning_agent: mavis
allowed_dirs:
  - TASKS/
---

# Security Review

## CONDITIONAL INVOKE RULE

This playbook is invoked by mavis **only when the approved plan (`03-plan.md`) touches one or more of the following**:

1. `MCP/servers/byok-gateway/` — any file in the BYOK gateway directory
2. Secrets handling — any file that reads, writes, or references credentials, API keys, tokens, or environment variables used as secrets
3. `MEMORY/vault.db` schema — DDL changes (CREATE TABLE, ALTER TABLE, DROP TABLE)
4. `MCP/servers/` any server configuration — adding or modifying MCP server configs

If none of these are present in the plan, **do not invoke this playbook**. The standard `code-review-standards.md` is sufficient.

## Goal

Produce a security-focused APPROVE or BLOCK verdict on execution outputs touching sensitive vault surfaces — BYOK config, secrets handling, vault.db schema, and MCP server configs.

## Review Dimensions

| Dimension | What to check |
|---|---|
| Secrets exposure | No secrets in code, comments, or committed files. Environment variable patterns used correctly |
| BYOK config integrity | `MCP/servers/byok-gateway/BYOK.md` and adjacent configs follow BYOK override protocol. No unapproved changes |
| vault.db schema changes | DDL is minimal and reversible. No columns dropped without migration. HITL approval recorded in plan |
| MCP server config | Server configs follow `MCP/servers/` conventions. No unapproved endpoints added. Auth patterns correct |
| Least privilege | Scripts and agents request only the permissions they need. No over-broad `allowed_dirs` grants |
| Input validation | Any user-provided input to scripts is validated or sanitized before use |

## Workflow

1. **Confirm trigger** — re-read `03-plan.md`. Confirm the plan touches at least one of the four conditional triggers listed above. If not, do not proceed; write a one-line note in `05-security.md`: "Security review not triggered — none of the four conditions present in plan."

2. **Identify sensitive surfaces** — list every file in the execution output that touches a sensitive surface.

3. **Review each sensitive file** against the six security dimensions.

4. **Assess verdict**:
   - Any BLOCK finding → overall BLOCK.
   - Only WARN → APPROVE-WITH-NOTES.
   - No findings → APPROVE.

5. **Write review** — `TASKS/{task-id}/05-security.md`.

6. **Publish NATS reply** — signal `reply.mavis` (this is the same reply subject as code-review-standards; hermes aggregates both review files).

## Output Contract

`TASKS/{task-id}/05-security.md`:

```markdown
---
task_id: {task-id}
reviewer: mavis
playbook: security-review
triggered_by: {BYOK|secrets|vault.db-schema|MCP-config|multiple}
verdict: APPROVE|BLOCK|APPROVE-WITH-NOTES
block_count: {N}
warn_count: {M}
---

# Security Review: {task goal}

## Trigger
{Which condition triggered this review}

## Verdict: {APPROVE|BLOCK|APPROVE-WITH-NOTES}

## Findings

### BLOCK Findings
| # | File | Dimension | Issue | Remediation |
|---|---|---|---|---|
| 1 | {path} | {dimension} | {specific issue} | {exact fix required} |

### WARN Findings
| # | File | Dimension | Issue | Suggestion |
|---|---|---|---|---|

## Summary
{2–3 sentences on security posture of the sensitive changes}
```

## Guardrails

- Do not invoke unless one of the four trigger conditions is met.
- Every BLOCK must cite the specific file and the specific security dimension violated.
- Do not approve BYOK config changes that deviate from `MCP/servers/byok-gateway/BYOK.md` protocol.
- Do not approve vault.db DDL changes that lack a corresponding HITL approval record in `03-plan.md`.
- Do not write to the artifact being reviewed. Security review output only goes to `05-security.md`.

## Question Ownership

This playbook runs in the mavis worker (subagent). AskUserQuestion is forbidden. All escalations go in `05-security.md` and `TASKS/STATUS/{task-id}.yaml`.
