---
aliases: []
tags:
  - agent
  - verifies
  - matrix
  - room
---

# Multi-Agent Matrix Chat Room Orchestrator Summary

A local-first system to orchestrate a multi-agent chat room. This system connects 4 distinct local CLI [[agents]] (**Hermes**, **OpenCode**, **Minimax**, and **Anti-Gravity**) into a single shared Matrix conversation (using a local Conduit homeserver).

## Architecture & Implementation Overview
- **Central Orchestration Daemon**: A single Python daemon manages 4 `matrix-nio` AsyncClient sessions.
- **Homeserver Infrastructure**: Local Conduit Matrix homeserver deployed via Docker Compose on port `6167`.
- **Dynamic Subprocess Execution**: Subprocesses are executed asynchronously using `asyncio.create_subprocess_shell`. Unified conversation history is formatted and piped into the agent's `stdin`, and their output is captured from `stdout` and sent back to the room.
- **Turn-Taking State Machine**:
  - **Round Robin**: Sequential loop sequence (User -> Agent 1 -> Agent 2 -> Agent 3 -> Agent 4 -> User).
  - **Orchestrator Model**: A Director agent evaluates the conversation history and dynamically chooses the next speaker.
  - **Mention-Based / On-Demand**: [[Agents]] remain silent unless explicitly tagged (e.g., `@hermes` or `@opencode`).

---

## File Directory Structure
```
multi-agent-matrix-chat/
 config.yaml                     # Settings, strategy toggle, and agent definitions
 docker-compose.yml              # Conduit homeserver setup
 orchestrator.py                 # Core Matrix client and turn-taking routing engine
 requirements.txt                # Python package list
 README.md                       # Setup and usage instructions
 .gitignore                      # Ignore python environments and caches
 agents/                         # Folder containing CLI agent wrappers
     mock_agent.py               # Configurable mock CLI agent
     director_agent.py           # Evaluates history to choose the next speaker
```

---

## Implementation Details

### 1. Configuration (`config.yaml`)
Stores Matrix credentials and strategy toggles. Enables swapping active strategy from `round_robin` to `orchestrator` or `mention`.

### 2. Main Script (`orchestrator.py`)
Defines the `AgentManager` class and routing functions:
- `initialize_clients()`: Asynchronously connects to homeserver; registers accounts if they don't exist.
- `setup_room()`: Solves or creates the `#agent-hub:localhost` alias and invites all [[agents]].
- `start()`: Registers the room message callback on the primary listener client and starts the sync loop.
- `handle_turn(last_speaker, message_body)`: State-machine routing to trigger next agent.
- `execute_and_post(agent_name)`: Invokes the subprocess command, feeds history, and posts stdout.
- `run_agent_cmd(command, history)`: Non-blocking async shell executor.

### 3. Verification & Tests
A pytest test suite covers all components (7 unit tests total):
- `tests/test_agents.py`: Verifies mock CLI agent outputs.
- `tests/test_matrix_init.py`: Verifies Matrix connection and room resolution.
- `tests/test_subprocess.py`: Verifies async process input/output piping.
- `tests/test_round_robin.py`: Verifies sequential turn state transitions.
- `tests/test_director_routing.py`: Verifies rule-based selector routing.
- `tests/test_mentions.py`: Verifies case-insensitive mention parsing.

All tests pass successfully.
