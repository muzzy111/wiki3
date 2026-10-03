---
aliases: []
tags:
  - shannon
  - repo
  - path
  - report
---
[![](/THUDM/AgentBench/raw/main/assets/cover.jpg)](/THUDM/AgentBench/blob/main/assets/cover.jpg)

[ Leaderboard (new)](https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml) | [ Twitter](https://twitter.com/thukeg) | [ Google Group](mailto:agentbench@googlegroups.com) | [ Paper](https://arxiv.org/abs/2308.03688)

 Join our [Slack](https://join.slack.com/t/agentbenchcol-huw1944/shared_invite/zt-20ixabcuv-31cFLBAkqGQxQkJqrWVEVg) for *Q & A* or ***collaboration** on next version of AgentBench*!

## \[2025.10.10\] Introducing **AgentBench FC (Function Calling)** based on [AgentRL](https://github.com/THUDM/AgentRL)The current repository contains the function-calling version of AgentBench, integrated with [AgentRL](https://github.com/THUDM/AgentRL), an end-to-end multitask and mutliturn LLM Agent RL framework. If you wish to use the older version, you can revert to [v0.1](https://github.com/THUDM/AgentBench/tree/v0.1) and [v0.2](https://github.com/THUDM/AgentBench/tree/v0.2).

Comparing to the original AgentBench, this version uses a function-calling style prompt, and adds fully-containerized deployment support for the following tasks:

- `alfworld` (AF)
- `dbbench` (DB)
- `knowledgegraph` (KG)
- `os_interaction` (OS)
- `webshop` (WS)

### Quick StartWe support a quick one-command [[setup]] for all the above tasks using Docker Compose.

Before starting, please download or build the following Docker images required by the tasks:

# dbbench
docker pull mysql:8

# os\_interaction
docker build -t local-os/default -f ./data/os\_interaction/res/dockerfiles/default data/os\_interaction/res/dockerfiles
docker build -t local-os/packages -f ./data/os\_interaction/res/dockerfiles/packages data/os\_interaction/res/dockerfiles
docker build -t local-os/ubuntu -f ./data/os\_interaction/res/dockerfiles/ubuntu data/os\_interaction/res/dockerfiles

To run the KG freebase server, you will also need a copy of the data found [here](https://github.com/dki-lab/Freebase-Setup). Download, extract and place the data at `./virtuoso_db/virtuoso.db` (or modify `extra/docker-compose.yml` and set the mount point to your data location).

Then, you can bring up the stack with:

docker compose -f extra/docker-compose.yml up

This command will download or build the necessary Docker images and start the following services in Docker:

- AgentRL Controller
- `alfworld` task worker (x1, increase as needed)
- `dbbench` task worker (x1, increase as needed)
- `knowledgegraph` task worker (x1, increase as needed)
- `os_interaction` task worker (x1, increase as needed)
- `webshop` task worker (x1, increase as needed)
- freebase server (for `knowledgegraph` task)
- Redis server (for container allocation)

If your machine already has Redis (version 7+) running, you can omit the Redis service from the `docker-compose.yml`.

Warning

Please note that the `webshop` environment requires ~16GB of RAM to start, and the current implementation of `alfworld` leaks memory and disk space until the task worker is restarted. Make sure your machine has sufficient resources before running.

### Benchmarking ResultsWe [[[[report]]]] the results of various models on the test set of AgentBench FC.

[![img.png](/THUDM/AgentBench/raw/main/assets/fc_leaderboard.png)](/THUDM/AgentBench/blob/main/assets/fc_leaderboard.png)

Please see our [Leaderboard](https://docs.google.com/spreadsheets/d/e/2PACX-1vRR3Wl7wsCgHpwUw1_eUXW_fptAPLL3FkhnW_rua0O1Ji_GIVrpTjY5LaKAhwO-WeARjnY_KNw0SYNJ/pubhtml) for full results. Please contact [agentbench\_fc@googlegroups.com](mailto:agentbench_fc@googlegroups.com) if you have any questions or would like to contribute your results.

---

## \[2024.08.13\] Introducing [VisualAgentBench](https://github.com/THUDM/VisualAgentBench)VisualAgentBench is designed for evaluating and training visual foundation [[agents]] based on large multimodel models (LMMs). We introduce 5 distinct environments spanning

- Embodied: VAB-OmniGibson, VAB-Minecraft
- GUI: VAB-Mobile, VAB-WebArena-Lite
- Visual Design: VAB-CSS

to systematically benchmark 17 LMMs (proprietary & open LMMs). We also provide the trajectory dataset for behavior cloning training on open LMMs for you to develop your own visual foundation [[agents]]!

---

The following is the introduction to the original AgentBench (v0.2).

# AgentBench: Evaluating LLMs as Agentsagentbench-cover.mp4<video src="https://private-user-images.githubusercontent.com/129033897/259010134-656eed6e-d9d9-4d07-b568-f43f5a451f04.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIxNzQwNzgsIm5iZiI6MTc4MjE3Mzc3OCwicGF0aCI6Ii8xMjkwMzM4OTcvMjU5MDEwMTM0LTY1NmVlZDZlLWQ5ZDktNGQwNy1iNTY4LWY0M2Y1YTQ1MWYwNC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYyM1QwMDE2MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NDJmNzk2NDUyYjZlZDcwMGRhZWNmN2Q5NmYzZTFhMTdmNjgxNjY5MDlkMWU4YzA1ZGNiOGYxNDI3YjM4NmI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9dmlkZW8lMkZtcDQifQ.gz8eTV4AsWMbR2dhe5pyIvpKxsjNsVLU-23G_6qifJs" data-canonical-src="https://private-user-images.githubusercontent.com/129033897/259010134-656eed6e-d9d9-4d07-b568-f43f5a451f04.mp4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODIxNzQwNzgsIm5iZiI6MTc4MjE3Mzc3OCwicGF0aCI6Ii8xMjkwMzM4OTcvMjU5MDEwMTM0LTY1NmVlZDZlLWQ5ZDktNGQwNy1iNTY4LWY0M2Y1YTQ1MWYwNC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYyM1QwMDE2MThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NDJmNzk2NDUyYjZlZDcwMGRhZWNmN2Q5NmYzZTFhMTdmNjgxNjY5MDlkMWU4YzA1ZGNiOGYxNDI3YjM4NmI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9dmlkZW8lMkZtcDQifQ.gz8eTV4AsWMbR2dhe5pyIvpKxsjNsVLU-23G_6qifJs" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px; min-height: 200px"></video>

**AgentBench** is the first benchmark designed to evaluate **LLM-as-Agent** across a diverse spectrum of different environments. It encompasses 8 distinct environments to provide a more comprehensive evaluation of the LLMs' ability to operate as autonomous [[agents]] in various scenarios. These environments include 5 freshly created domains, namely

- Operating System (OS)
- Database (DB)
- Knowledge Graph (KG)
- Digital Card Game (DCG)
- Lateral Thinking Puzzles (LTP)

as well as 3 recompiled from published datasets:

- House-Holding (HH) ([ALFWorld](https://github.com/alfworld/alfworld))
- Web Shopping (WS) ([WebShop](https://github.com/princeton-nlp/webshop))
- Web Browsing (WB) ([Mind2Web](https://github.com/OSU-NLP-Group/Mind2Web))

[![](/THUDM/AgentBench/raw/main/assets/agentbench.png)](/THUDM/AgentBench/blob/main/assets/agentbench.png)

## Table of Contents- [Dataset Summary](#dataset-summary)
- [Leaderboard](#leaderboard)
- [Quick Start](#quick-start)
- [Next Steps](#next-steps)
- [Citation](#citation)

## Dataset SummaryWe offer two splits for each dataset: Dev and Test. The multi-turn interaction requires an LLMs to generate around 4k and 13k times respectively.

[![](/THUDM/AgentBench/raw/main/assets/statistics.png)](/THUDM/AgentBench/blob/main/assets/statistics.png)

## LeaderboardHere is the scores on test set (standard) results of AgentBench.

[![](/THUDM/AgentBench/raw/main/assets/leaderboard.png)](/THUDM/AgentBench/blob/main/assets/leaderboard.png)

While LLMs begin to manifest their proficiency in LLM-as-Agent, gaps between models and the distance towards practical usability are significant.

[![](/THUDM/AgentBench/raw/main/assets/intro.png)](/THUDM/AgentBench/blob/main/assets/intro.png)

## Quick StartThis section will guide you on how to quickly use gpt-3.5-turbo-0613 as an agent to launch the `dbbench-std` and `os-std` tasks. For the specific framework structure, please refer to [Framework Introduction](/THUDM/AgentBench/blob/main/docs/Introduction_en.md). For more detailed configuration and launch methods, please check [Configuration Guide](/THUDM/AgentBench/blob/main/docs/Config_en.md) and [Program Entrance Guide](/THUDM/AgentBench/blob/main/docs/Entrance_en.md).

### Step 1. PrerequisitesClone this repo and install the dependencies.

> **Python version note:** AgentBench pins older scientific Python deps (e.g. `numpy~=1.23.x`). Using the recommended **Python 3.9** (via conda) is the most reliable way to install dependencies.

cd AgentBench
conda create -n agent-bench python=3.9
conda activate agent-bench
pip install -r requirements.txt

Ensure that [Docker](https://www.docker.com/) is properly installed.

docker ps

Build required images for `dbbench-std` and `os-std`.

docker pull mysql
docker pull ubuntu
docker build -f data/os\_interaction/res/dockerfiles/default data/os\_interaction/res/dockerfiles --tag local-os/default
docker build -f data/os\_interaction/res/dockerfiles/packages data/os\_interaction/res/dockerfiles --tag local-os/packages
docker build -f data/os\_interaction/res/dockerfiles/ubuntu data/os\_interaction/res/dockerfiles --tag local-os/ubuntu

### Step 2. Configure the AgentFill in your OpenAI API Key at the correct location in `configs/[[agents]]/openai-chat.yaml`. (e.g. `gpt-3.5-turbo-0613`)

You can try using `python -m src.client.agent_test` to check if your agent is configured correctly.

By default, `gpt-3.5-turbo-0613` will be started. You can replace it with other [[agents]] by modifying the parameters:

python -m src.client.agent\_test --config configs/[[agents]]/api\_agents.yaml --agent gpt-3.5-turbo-0613

### Step 3. Start the task serverStarting the task worker involves specific tasks. Manual starting might be cumbersome; hence, we provide an automated script.

The assumption for this step is that ports from 5000 to 5015 are available. For Mac OS system, you may want to follow [here](https://stackoverflow.com/questions/69955686/why-cant-i-run-the-project-on-port-5000) to free port 5000 to use.

python -m src.start\_task -a

This will launch five task\_workers each for `dbbench-std` and `os-std` tasks and automatically connect them to the controller on port 5000. **After executing this command, please allow approximately 1 minute for the task [[setup]] to complete.** If the terminal shows ".... 200 OK", you can open another terminal and follow step 4.

#### Lite preset (laptops / limited RAM)If you want to start with minimal concurrency (1 worker per task), use the lite preset:

python -m src.start\_task -a --config configs/start\_task\_lite.yaml

### Step 4. Start the assignerThis step is to actually start the tasks.

If everything is correctly configured so far, you can now initiate the task tests.

python -m src.assigner

If you started the task server with the lite preset, you can also run the lite evaluation preset:

python -m src.assigner --config configs/assignments/lite.yaml

## Next StepsIf you wish to launch more tasks or use other models, you can refer to the content in [Configuration Guide](/THUDM/AgentBench/blob/main/docs/Config_en.md) and [Program Entrance Guide](/THUDM/AgentBench/blob/main/docs/Entrance_en.md).

For the environment of the remaining five tasks, you will need to download the Docker images we provide.

```
longinyu/agentbench-ltp
longinyu/agentbench-webshop
longinyu/agentbench-mind2web
longinyu/agentbench-card_game
longinyu/agentbench-alfworld
```

The resource consumption of a single task\_worker for the eight tasks is roughly as follows; consider this when launching:

| Task Name | Start-up Speed | Memory Consumption |
| --- | --- | --- |
| webshop | ~3min | ~15G |
| mind2web | ~5min | ~1G |
| db | ~20s | < 500M |
| alfworld | ~10s | < 500M |
| card\_game | ~5s | < 500M |
| ltp | ~5s | < 500M |
| os | ~5s | < 500M |
| kg | ~5s | < 500M |

### Deploy the KnowledgeGraph service loacallythe KnowledgeGraph task depends on an online service which now is not stable, if you want to deploy the service locally, you can follow steps below:

**step1.**  
download the database and [[setup]] the service [freebase-setup](https://github.com/dki-lab/Freebase-Setup).

**step2.**  
change this line `sparql_url: "http://164.107.116.56:3093/sparql"` to `sparql_url: "<your service api of sparql>"` in `/configs/tasks/kg.yaml`.

**P.S.** you should start your KG service before you start the agent tasks services.

## Extending AgentBenchIf you wish to add new tasks to AgentBench, you may refer to [Extension Guide](/THUDM/AgentBench/blob/main/docs/Extension_en.md).

## ReferencesAvalon task is merged from [AvalonBench](https://github.com/jonathanmli/Avalon-LLM/), which implements a multi-agent framework.

## Citation```
@article{liu2023agentbench,
  title   = {AgentBench: Evaluating LLMs as Agents},
  author  = {Xiao Liu and Hao Yu and Hanchen Zhang and Yifan Xu and Xuanyu Lei and Hanyu Lai and Yu Gu and Hangliang Ding and Kaiwen Men and Kejuan Yang and Shudan Zhang and Xiang Deng and Aohan Zeng and Zhengxiao Du and Chenhui Zhang and Sheng Shen and Tianjun Zhang and Yu Su and Huan Sun and Minlie Huang and Yuxiao Dong and Jie Tang},
  year    = {2023},
  journal = {arXiv preprint arXiv: 2308.03688}
}
```