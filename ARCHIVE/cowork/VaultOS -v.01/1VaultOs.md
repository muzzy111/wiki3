# Agent System Scaffold

Folder, dependency, and prompt schema for the multi-agent architecture
diagram (Planning \& Understanding orchestrator → 9 worker nodes, each
paired with a Review Agent → Prompting \& Meta-Learning loop).

## Layout

```
agent\\\\\\\_system/
├── core/
│   ├── planning\\\\\\\_node.py        # implement orchestrator logic here
│   └── meta\\\\\\\_learning/          # prompt\\\\\\\_refinement.py, model\\\\\\\_optimization.py go here
├── nodes/                      # one subfolder per worker node from the diagram
│   ├── information\\\\\\\_retrieval/
│   ├── content\\\\\\\_generation/
│   ├── data\\\\\\\_transformation/
│   ├── task\\\\\\\_verification/
│   ├── system\\\\\\\_interaction/
│   ├── communication\\\\\\\_action/
│   ├── state\\\\\\\_management/
│   ├── error\\\\\\\_handling/
│   └── notification/
├── prompts/
│   ├── schema.py                # NodePromptSchema (pydantic) — the contract every prompt must satisfy
│   ├── planning\\\\\\\_node.yaml
│   ├── meta\\\\\\\_learning.yaml
│   └── nodes/                   # one filled prompt template per worker node + a generic review\\\\\\\_agent.yaml
├── config/
├── state/
├── tests/
└── requirements.txt
```

Review Agents aren't a separate folder — each lives inside its paired
node's directory (e.g. `nodes/content\\\\\\\_generation/review.py`) since they
share that node's context. `nodes/review\\\\\\\_agent.yaml` is the one generic
prompt template you copy and rename per pairing.

## Using the prompt schema

```python
from prompts.schema import load\\\\\\\_node\\\\\\\_prompt

p = load\\\\\\\_node\\\\\\\_prompt("prompts/nodes/data\\\\\\\_transformation.yaml")
p.instructions      # ordered steps for that node
p.output\\\\\\\_format     # exact contract downstream nodes can rely on
```

Every node's actual runtime prompt (system prompt sent to the LLM) should
be assembled from these fields rather than hand-written, so the Planning
node and Meta-Learning loop can reason about / rewrite any node uniformly.

## Dependencies

`requirements.txt` is grouped by which node needs what (web search libs
for Information Retrieval, `tenacity` for Error Handling, `redis`/`diskcache`
for State Management, `playwright` for Communication \& Action, etc.).
Install with:

```
pip install -r requirements.txt
```

