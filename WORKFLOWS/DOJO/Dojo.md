---
title: DOJO — Skill Training Space
tags: [workflows, dojo, training, drills]
created: 2026-07-01
type: workflow
status: draft
---

# DOJO — Skill Training Space

> Practice space where agents run skill drills and exercises to maintain proficiency.

## Purpose

The DOJO is for:

- **Skill drills.** Repeated practice of a specific capability until it is reliable.
- **Scenario exercises.** Walk-throughs of complex multi-agent scenarios.
- **Calibration.** Ensuring all agents produce consistent output for a given input.
- **Onboarding.** When a new capability is added, drills are run before activation.

## Status

**Draft.** No drills yet.

## What Lives Here

- **Drill definitions.** The exercise, the expected output, the success criteria.
- **Drill logs.** Past runs, scores, observations.
- **Calibration tests.** Reference inputs and reference outputs for capability comparison.

## When To Run a Drill

- When a new agent joins (future-proofing).
- When a skill is updated.
- When Mavis' review shows drift in an agent's output.
- When the user asks for a calibration check.

## See Also

- Workflows index: [[../Index]]
- Skills library: [[../../SKILLS/Index]]
- Mavis' audit playbook: [[../../2.0MAVIS/SKILLS/Audit Playbook]]