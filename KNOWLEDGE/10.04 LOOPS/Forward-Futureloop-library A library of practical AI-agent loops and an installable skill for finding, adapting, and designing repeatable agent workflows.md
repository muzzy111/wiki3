---
aliases: []
tags:
  - clipboard
  - baseline
  - edge
  - loop
---
Loop Library has two separate but related parts in this repository:

| Part | What it is | Where it lives |
| --- | --- | --- |
| **Loop Library website** | The public catalog where people and [[agents]] can browse published loops, read them, and copy their [[[[prompts]]]]. No installation is required. | [Live website](https://signals.forwardfuture.ai/loop-library/) · shell in [`site/`](/Forward-Future/loop-library/blob/main/site), database and rendering in [`worker/`](/Forward-Future/loop-library/blob/main/worker) |
| **Loop Library [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]** | An optional installable guide that helps an AI agent discover, find, audit, repair, adapt, or design loops through conversation. It uses the website's live catalog when recommending published loops. | source in [`skills/loop-library/`](/Forward-Future/loop-library/blob/main/skills/loop-library) |

The website is the library; the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] is a companion way to work with it. You can browse or give an agent the website without installing the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]. Installing the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] adds the guided workflow, but it does not install or host the website.

[[Agents]] that do not have the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] can use the published [agent guide](https://signals.forwardfuture.ai/loop-library/agents/), [agent instructions](https://signals.forwardfuture.ai/loop-library/llms.txt), [JSON catalog](https://signals.forwardfuture.ai/loop-library/catalog.json), or [plain-text catalog](https://signals.forwardfuture.ai/loop-library/catalog.txt) directly.

Each published loop tells an agent what to do, how to check its work, what to try next, and when to stop.

## What is a loop?Most [[[[prompts]]]] ask an agent to do something once. A loop gives the agent a way to learn from the result and take the next useful step.

For example, a one-shot prompt might say:

> Make this website faster.

A loop adds the feedback that makes the work repeatable:

> Find the slowest page, make one focused improvement, and measure it again. Keep the change only if it helps. Repeat until every page meets the target or another pass stops producing a meaningful improvement.

Think of a loop as a playbook with feedback built in. It is useful when the first attempt probably will not be the final answer, such as fixing production errors, improving test coverage, reviewing a product, or keeping documentation current.

A good loop answers four simple questions:

- What is the agent trying to accomplish?
- How will it know whether the latest attempt worked?
- What should it do with what it learned?
- When should it finish or ask for help?

## Why loops are powerfulAI [[agents]] can move quickly, but an open-ended instruction like "keep improving this" leaves too much room for guessing. A loop gives the work a clear finish line and a consistent way to judge progress.

That makes the work easier to trust and easier to repeat. The agent can compare results instead of relying on confidence, keep improvements instead of merely making changes, and stop when it succeeds or stops making progress. The same loop can also be reused by another person or agent without rebuilding the workflow from scratch.

Loops are not permission for an agent to run forever. The best ones are deliberately bounded. They include a real check, a clear stopping point, and a moment to hand control back to a person when judgment or approval is needed.

## What the Loop Library [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] doesThe Loop Library [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] gives your agent direct access to the ideas in the library. You can use it to:

- Discover repeated work in a codebase, coding threads, or both and turn the strongest qualified candidate into a loop.
- Find a published loop that fits what you are trying to get done.
- Audit an existing loop for weak checks, unsafe actions, or unclear stopping behavior, then repair only the material problems.
- Adapt a useful loop to your tools, limits, and definition of success.
- Design a new loop through a short, plain-language conversation.
- Turn the result into a compact prompt you can use right away.

The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] checks the live catalog when it recommends a published loop. It does not quietly start schedules, change production, or send messages on your behalf. Those actions still require the normal permissions and approvals.

## Install the skillYou need Node.js and `npx`. Pick the platform you use:

| Platform | Install command |
| --- | --- |
| Codex | `npx [[skills]] add Forward-Future/[[loop-library]] --[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] [[loop-library]] --agent codex -g -y` |
| Cursor | `npx [[skills]] add Forward-Future/[[loop-library]] --[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] [[loop-library]] --agent cursor -g -y` |
| Claude Code | `npx [[skills]] add Forward-Future/[[loop-library]] --[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] [[loop-library]] --agent claude-code -g -y` |

To install it for all three at once:

npx [[skills]] add Forward-Future/[[loop-library]] \\
  --[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] [[loop-library]] \\
  --agent codex \\
  --agent cursor \\
  --agent claude-code \\
  -g -y

Using another agent? Run the interactive installer and choose from the [[agents]] it detects:

npx [[skills]] add Forward-Future/[[loop-library]] --[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] [[loop-library]] -g

The command parts mean:

- `Forward-Future/[[loop-library]]` is the GitHub repository to install from.
- `--[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] [[loop-library]]` selects this [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] from the repository.
- `--agent ...` selects the agent that should receive it.
- `-g` makes it available in all your projects. Leave `-g` off to install it only in the current project.
- `-y` accepts the install [[[[prompts]]]]. Leave it off if you want to [[review]] the choices interactively.

If an agent was already open and the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] does not appear, restart that agent.

## Invoke the skillThe slash-command experience differs slightly by platform:

- **Codex:** type `/[[skills]]`, choose **Loop Library**, then enter your request. You can also mention it directly with `$[[loop-library]]`.
- **Cursor:** type `/` in Agent chat, search for `[[loop-library]]`, select it, and add your request. You can also type `/[[loop-library]]` directly.
- **Claude Code:** type `/[[loop-library]]` followed by your request.

You can also describe a matching task normally. These [[agents]] can load the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] automatically when your request clearly calls for it, but explicit invocation is the most predictable way to start.

For example, in Codex you can write:

```
$loop-library Analyze this codebase and my coding threads for repeated work, then turn the strongest candidate into a reliable loop.
```

## Use Loop LibraryYou do not need to know loop terminology. Invoke the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] and say what you want to get done. It can take five paths:

| Path | What it does | Example request |
| --- | --- | --- |
| **Discover** | Inspects an authorized codebase, coding-thread history, or both for repeated work, then turns the strongest qualified candidate into a bounded loop. | `Analyze this repository and my coding threads for work we have done more than once. Turn the best candidate into a loop.` |
| **Find** | Searches the live catalog and recommends up to three published loops. It does not run them. | `Find a published loop for keeping our documentation current.` |
| **Loop Doctor** | Audits a loop you paste or name, explains material weaknesses, and repairs only those problems. | `Audit this loop and repair only material problems: [paste loop]` |
| **Adapt** | Tailors a useful loop to your real tools, limits, schedule, and definition of success. | `Adapt the Overnight Docs Sweep to this repository and our existing checks.` |
| **Design** | Asks a few plain-language questions, then creates a short, bounded loop when the catalog has no good fit. | `Help me design a loop that turns customer feedback into verified fixes.` |

For example, in Claude Code or Cursor:

```
/loop-library Find a loop for improving test reliability.
```

In Codex, choose **Loop Library** from `/[[skills]]`, then send:

```
Find a loop for improving test reliability.
```

### Discover loops from your workDiscovery looks for recurring engineering work in the sources you put in scope. In a codebase, that can include scripts, CI and deployment configuration, tests, runbooks, maintenance commands, and repeated lifecycle patterns. In coding threads, it groups equivalent completed work even when the wording differs.

The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] requires at least two distinct thread occurrences before calling work repeated. A code pattern without run history is labeled as a potential loop, not proven recurrence. It then checks whether fresh feedback can change the next action, whether success can be verified, and whether the work has clear limits, stopping behavior, and approval boundaries. It also checks the live catalog to avoid recreating an existing loop.

The [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] can inspect only repositories and coding threads that your agent can access and that you place in scope. If thread history is unavailable, it uses the codebase evidence and says so. A discovery result includes compact source evidence and either a new loop, an adaptation of a published loop, a short candidate slate when your choice matters, or a clean no-op when nothing truly fits.

When the [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[skill]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] finds or creates the right loop, it gives you a prompt to use with your agent. [[Review]] any placeholders, then ask the agent to run that prompt in the project you want it to work on. Selecting a loop does not start a schedule, deploy code, delete data, send messages, or grant new permissions; you must request those actions explicitly.

Every published loop also includes a few useful parts:

- **Use when** explains the problem the loop is meant to solve.
- **Prompt** is the copy-ready instruction for your agent.
- **Verify** defines the evidence that proves the work succeeded.
- **Steps** show the feedback cycle in a more readable form.
- **Notes** call out practical limits, risks, or [[setup]] details.
- **Related loops** point to nearby [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[workflows]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] that may fit better.