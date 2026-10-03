# Inbox

Unread messages waiting for pickup. The orchestrator and every other
agent sweeps this folder at the start of their turn.

To send a message:

1. Copy `Templates/message.md`.
2. Fill in the YAML frontmatter (especially `to`, `phase`, `priority`).
3. Write the body per the phase's skeleton (see PROTOCOL.md).
4. Save with filename `<from>-<phase>-<slug>.md`.
5. Notify the receiver (no daemon; rely on their next sweep).

Empty at template bootstrap. Will populate as work begins.