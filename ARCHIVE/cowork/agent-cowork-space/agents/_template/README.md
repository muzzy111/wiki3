# Agent template

Copy this entire folder to `agents/<your-name>/` and rename:
- This folder → `agents/<your-name>/`
- `IDENTITY You are <AGENT_NAME>, <ROLE>.txt` → fill in your name + role

Then:

1. Edit `IDENTITY You are <AGENT_NAME>, <ROLE>.txt` — your full brief.
2. Edit `README.md` (this file's sibling) — human-readable companion.
3. Create `Config/agents/<your-name>.yaml` — machine-readable config.
4. Update `Config/registry.yaml` — add your entry.
5. Update `Config/roster.yaml` — add to roster.

## Minimum identity file sections

Every IDENTITY.txt must contain:

- IDENTITY line (agent name + role)
- Working directory
- READ FIRST order (README → QUICKSTART → PROTOCOL → registry → your config)
- YOUR ROLE section
- DAILY LOOP
- Response format (if custom)
- PERMISSIONS (allowed / forbidden)
- RULES

## Minimum config file fields

Every `Config/agents/<your-name>.yaml` must contain:

```yaml
schema_version: 1
agent:
  name: <your-name>
  role: <your-role>
  identity_file: agents/<your-name>/IDENTITY You are <your-name>, <your-role>.txt
responsibilities:
  - ...
permissions:
  read: [...]
  write: [...]
forbidden: [...]
sla:
  ack_max_minutes: <N>
primary_workflows:
  - id: <workflow-id>
    file: Workflows/<path>/PROMPT.md
```

## After onboarding

Run the bootstrap check (`_meta/TEMPLATE_VERSION.yaml` →
`bootstrap_check`) to verify your home is valid.