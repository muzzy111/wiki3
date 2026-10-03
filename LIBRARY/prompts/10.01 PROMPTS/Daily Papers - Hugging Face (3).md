# Daily Papers - Hugging Face

Source URL: https://huggingface.co/papers?q=co-evolutionary%20RL

Daily Papers - Hugging Face
Hugging Face's logo Hugging Face
https://huggingface.co/
Models
https://huggingface.co/models
Datasets
https://huggingface.co/datasets
Spaces
https://huggingface.co/spaces
Buckets new
https://huggingface.co/storage
Docs
https://huggingface.co/docs
Enterprise
https://huggingface.co/enterprise
Pricing
https://huggingface.co/pricing
Website
Tasks
https://huggingface.co/tasks
HuggingChat
https://huggingface.co/chat
Collections
https://huggingface.co/collections
Languages
https://huggingface.co/languages
Organizations
https://huggingface.co/organizations
Community
Blog
https://huggingface.co/blog
Posts
https://huggingface.co/posts
Daily Papers
https://huggingface.co/papers
Learn
https://huggingface.co/learn
Discord
https://huggingface.co/join/discord
Forum
https://discuss.huggingface.co/
GitHub
https://github.com/huggingface
Solutions
Team & Enterprise
https://huggingface.co/enterprise
Hugging Face PRO
https://huggingface.co/pro
Enterprise Support
https://huggingface.co/support
Inference Providers
https://huggingface.co/inference/models
Inference Endpoints
https://huggingface.co/inference-endpoints
Storage Buckets
https://huggingface.co/storage
Log In
https://huggingface.co/login
Sign Up
https://huggingface.co/join
new
Get trending papers in your email inbox once a day!
Get trending papers in your email inbox!
Subscribe
https://huggingface.co/login?next=%2Fpapers
Daily Papers
by 
AK
https://huggingface.co/akhaliq
 and the research community
co-evolutionary RL
Daily
Weekly
Monthly 

https://huggingface.co/papers/trending
 

https://huggingface.co/papers/date/2026-07-03
Jul 6
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.29847
EvoRubric: Self-Evolving Rubric-Driven RL for Open-Ended Generation
https://huggingface.co/papers/2605.29847
Reinforcement Learning (RL) has significantly advanced Large Language Models (LLMs) in verifiable domains, but aligning models for open-ended generation remains profoundly challenging due to the lack of definitive rewards. Current rubric-based RL methods mitigate this by employing explicit criteria; however, they rely heavily on static, human-annotated rubrics that inevitably cause policy lag, or expensive external proprietary models for dynamic updates. In this paper, we propose EvoRubric, a novel single-policy co- evolutionary RL framework that eliminates the reliance on static criteria and on external rubric generators. By unifying response generation and rubric generation under a single parameterized policy, EvoRubric dynamically alternates between a Reasoner and a Rubric Generator. To prevent reward hacking and ensure the reliability of generated signals, we introduce a multi-level verification pipeline featuring a meta-verifier, zero-variance pruning, and a Leave-One-Out peer consensus mechanism. Validated criteria are dynamically archived into a memory pool, yielding dense, multi-objective rewards to continuously co-optimize both roles. Extensive experiments across Medical, Writing, and Science domains demonstrate that EvoRubric consistently outperforms traditional static and external-LLM-driven alignment methods. Notably, our framework is compatible with human-expert priors. When initialized with expert-annotated rubrics, EvoRubric can further uncover novel, discriminative dimensions, achieving better performance than relying solely on static expert annotations.
https://huggingface.co/papers/2605.29847
[
9 authors](https://huggingface.co/papers/2605.29847)
·
May 27
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2404.14763
Evolutionary Reinforcement Learning via Cooperative Coevolution
https://huggingface.co/papers/2404.14763
Recently, evolutionary reinforcement learning has obtained much attention in various domains. Maintaining a population of actors, evolutionary reinforcement learning utilises the collected experiences to improve the behaviour policy through efficient exploration. However, the poor scalability of genetic operators limits the efficiency of optimising high-dimensional neural networks. To address this issue, this paper proposes a novel cooperative coevolutionary reinforcement learning (CoERL) algorithm. Inspired by cooperative coevolution, CoERL periodically and adaptively decomposes the policy optimisation problem into multiple subproblems and evolves a population of neural networks for each of the subproblems. Instead of using genetic operators, CoERL directly searches for partial gradients to update the policy. Updating policy with partial gradients maintains consistency between the behaviour spaces of parents and offspring across generations. The experiences collected by the population are then used to improve the entire policy, which enhances the sampling efficiency. Experiments on six benchmark locomotion tasks demonstrate that CoERL outperforms seven state-of-the-art algorithms and baselines. Ablation study verifies the unique contribution of CoERL's core ingredients.
https://huggingface.co/papers/2404.14763
[
3 authors](https://huggingface.co/papers/2404.14763)
·
Apr 22, 2024
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2510.08529
CoMAS: Co-Evolving Multi-Agent Systems via Interaction Rewards
https://huggingface.co/papers/2510.08529
Self-evolution is a central research topic in enabling large language model (LLM)-based agents to continually improve their capabilities after pretraining. Recent research has witnessed a transition from reinforcement learning (RL)-free to RL-based methods. Current RL-based methods either rely on dense external reward signals or extract intrinsic reward signals from LLMs themselves. However, these approaches diverge from the self-evolution mechanisms observed in human intelligence, where individuals learn and improve through mutual discussion and collaboration. In this work, we introduce Co-Evolving Multi-Agent Systems (CoMAS), a novel framework that enables agents to improve autonomously by learning from inter-agent interactions without external supervision. CoMAS generates intrinsic rewards from rich discussion dynamics, employs an LLM-as-a-judge mechanism to formulate these rewards, and optimizes each agent's policy through RL, thereby enabling decentralized and scalable co-evolution. Experimental results demonstrate that CoMAS consistently outperforms untrained agents and achieves state-of-the-art performance across most evaluation settings. Ablation studies confirm the necessity of interaction-based reward signals and reveal promising scalability as the number and diversity of agents increase. These findings establish CoMAS as a novel and effective paradigm for self-evolution in LLM-based agents.
https://huggingface.co/papers/2510.08529
[
10 authors](https://huggingface.co/papers/2510.08529)
·
Oct 9, 2025 
2
https://huggingface.co/papers/2510.08529#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2508.12338
Wisdom of the Crowd: Reinforcement Learning from Coevolutionary Collective Feedback
https://huggingface.co/papers/2508.12338
Reinforcement learning (RL) has significantly enhanced the reasoning capabilities of large language models (LLMs), but its reliance on expensive human-labeled data or complex reward models severely limits scalability. While existing self-feedback methods aim to address this problem, they are constrained by the capabilities of a single model, which can lead to overconfidence in incorrect answers, reward hacking, and even training collapse. To this end, we propose Reinforcement Learning from Coevolutionary Collective Feedback (RLCCF), a novel RL framework that enables multi-model collaborative evolution without external supervision. Specifically, RLCCF optimizes the ability of a model collective by maximizing its Collective Consistency (CC), which jointly trains a diverse ensemble of LLMs and provides reward signals by voting on collective outputs. Moreover, each model's vote is weighted by its Self-Consistency (SC) score, ensuring that more confident models contribute more to the collective decision. Benefiting from the diverse output distributions and complementary abilities of multiple LLMs, RLCCF enables the model collective to continuously enhance its reasoning ability through coevolution. Experiments on four mainstream open-source LLMs across four mathematical reasoning benchmarks demonstrate that our framework yields significant performance gains, achieving an average relative improvement of 16.72% in accuracy. Notably, RLCCF not only improves the performance of individual models but also enhances the group's majority-voting accuracy by 4.51%, demonstrating its ability to extend the collective capability boundary of the model collective.
https://huggingface.co/papers/2508.12338
[
11 authors](https://huggingface.co/papers/2508.12338)
·
Aug 17, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2401.11963
Bridging Evolutionary Algorithms and Reinforcement Learning: A Comprehensive Survey on Hybrid Algorithms
https://huggingface.co/papers/2401.11963
Evolutionary Reinforcement Learning (ERL), which integrates Evolutionary Algorithms (EAs) and Reinforcement Learning (RL) for optimization, has demonstrated remarkable performance advancements. By fusing both approaches, ERL has emerged as a promising research direction. This survey offers a comprehensive overview of the diverse research branches in ERL. Specifically, we systematically summarize recent advancements in related algorithms and identify three primary research directions: EA-assisted Optimization of RL, RL-assisted Optimization of EA, and synergistic optimization of EA and RL. Following that, we conduct an in-depth analysis of each research direction, organizing multiple research branches. We elucidate the problems that each branch aims to tackle and how the integration of EAs and RL addresses these challenges. In conclusion, we discuss potential challenges and prospective future research directions across various research directions. To facilitate researchers in delving into ERL, we organize the algorithms and codes involved on https://github.com/yeshenpy/Awesome-Evolutionary-Reinforcement-Learning.
https://huggingface.co/papers/2401.11963
[
6 authors](https://huggingface.co/papers/2401.11963)
·
Jan 22, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2604.15840
CoEvolve: Training LLM Agents via Agent-Data Mutual Evolution
https://huggingface.co/papers/2604.15840
Reinforcement learning for LLM agents is typically conducted on a static data distribution, which fails to adapt to the agent's evolving behavior and leads to poor coverage of complex environment interactions. To address these challenges, we propose CoEvolve, an agent-data mutual evolution framework that enables LLM agents to improve through closed-loop, interaction-driven training. Specifically, CoEvolve extracts feedback signals such as forgetting and uncertainty from rollout trajectories to identify failure-prone interaction patterns, and utilizes them to guide LLM-based task synthesis. The synthesized tasks are validated through environment interaction and utilized to update the data distribution, enabling joint adaptation of the agent and its data. Extensive experiments on AppWorld and BFCL across Qwen2.5-7B, Qwen3-4B, and Qwen3-30B-A3B demonstrate consistent and significant improvements over strong base models, yielding absolute gains of 19.43%, 15.58%, and 18.14%, respectively.
https://huggingface.co/papers/2604.15840
[
6 authors](https://huggingface.co/papers/2604.15840)
·
Apr 16
 [-] 33
https://huggingface.co/login?next=%2Fpapers%2F2509.15194
Evolving Language Models without Labels: Majority Drives Selection, Novelty Promotes Variation
https://huggingface.co/papers/2509.15194
Large language models (LLMs) are increasingly trained with reinforcement learning from verifiable rewards (RLVR), yet real-world deployment demands models that can self-improve without labels or external judges. Existing label-free methods, confidence minimization, self-consistency, or majority-vote objectives, stabilize learning but steadily shrink exploration, causing an entropy collapse: generations become shorter, less diverse, and brittle. Unlike prior approaches such as Test-Time Reinforcement Learning (TTRL), which primarily adapt models to the immediate unlabeled dataset at hand, our goal is broader: to enable general improvements without sacrificing the model's inherent exploration capacity and generalization ability, i.e., evolving. We formalize this issue and propose EVolution-Oriented and Label-free Reinforcement Learning (EVOL-RL), a simple rule that couples stability with variation under a label-free setting. EVOL-RL keeps the majority-voted answer as a stable anchor (selection) while adding a novelty-aware reward that favors responses whose reasoning differs from what has already been produced (variation), measured in semantic space. Implemented with GRPO, EVOL-RL also uses asymmetric clipping to preserve strong signals and an entropy regularizer to sustain search. This majority-for-selection + novelty-for-variation design prevents collapse, maintains longer and more informative chains of thought, and improves both pass@1 and pass@n. EVOL-RL consistently outperforms the majority-only TTRL baseline; e.g., training on label-free AIME24 lifts Qwen3-4B-Base AIME25 pass@1 from TTRL's 4.6% to 16.4%, and pass@16 from 18.5% to 37.9%. EVOL-RL not only prevents diversity collapse but also unlocks stronger generalization across domains (e.g., GPQA). Furthermore, we demonstrate that EVOL-RL also boosts performance in the RLVR setting, highlighting its broad applicability.
https://huggingface.co/papers/2509.15194
[
10 authors](https://huggingface.co/papers/2509.15194)
·
Sep 18, 2025 
2
https://huggingface.co/papers/2509.15194#community
 [-] 6
https://huggingface.co/login?next=%2Fpapers%2F2510.12560
CoIRL-AD: Collaborative-Competitive Imitation-Reinforcement Learning in Latent World Models for Autonomous Driving
https://huggingface.co/papers/2510.12560
End-to-end autonomous driving models trained solely with imitation learning (IL) often suffer from poor generalization. In contrast, reinforcement learning (RL) promotes exploration through reward maximization but faces challenges such as sample inefficiency and unstable convergence. A natural solution is to combine IL and RL. Moving beyond the conventional two-stage paradigm (IL pretraining followed by RL fine-tuning), we propose CoIRL-AD, a competitive dual-policy framework that enables IL and RL agents to interact during training. CoIRL-AD introduces a competition-based mechanism that facilitates knowledge exchange while preventing gradient conflicts. Experiments on the nuScenes dataset show an 18% reduction in collision rate compared to baselines, along with stronger generalization and improved performance on long-tail scenarios. Code is available at: https://github.com/SEU-zxj/CoIRL-AD.
https://huggingface.co/papers/2510.12560
 

https://huggingface.co/papers/2510.12560
Tsinghua Tsinghua University
https://huggingface.co/Tsinghua
·
Oct 14, 2025 
2
https://huggingface.co/papers/2510.12560#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2602.14697
Evolutionary System Prompt Learning for Reinforcement Learning in LLMs
https://huggingface.co/papers/2602.14697
Building agentic systems that can autonomously self-improve from experience is a longstanding goal of AI. Large language models (LLMs) today primarily self-improve via two mechanisms: self-reflection for context updates, and reinforcement learning (RL) for weight updates. In this work, we propose Evolutionary System Prompt Learning (E-SPL), a method for jointly improving model contexts and model weights. In each RL iteration, E-SPL samples trajectories under multiple system prompts in parallel, then jointly applies RL updates to LLM weights and evolutionary updates to system prompts. System prompts evolve via mutation and crossover, two genetic operators driven by LLM self-reflection; selection is based on relative performance ratings updated across RL iterations. E-SPL encourages a natural division between declarative knowledge encoded in prompts and procedural knowledge encoded in weights, resulting in improved performance across reasoning and agentic tasks. For instance, in an easy-to-hard (AIME rightarrow BeyondAIME) generalization setting, E-SPL improves RL success rate from 38.8% rightarrow 45.1% while also outperforming reflective prompt evolution (40.0%). Overall, our results demonstrate that RL and system prompt evolution are deeply synergistic, and combining the two yields consistent gains in sample efficiency and generalization. Code: https://github.com/LunjunZhang/E-SPL
https://huggingface.co/papers/2602.14697
[
3 authors](https://huggingface.co/papers/2602.14697)
·
Feb 15
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2605.10663
Evolving-RL: End-to-End Optimization of Experience-Driven Self-Evolving Capability within Agents
https://huggingface.co/papers/2605.10663
Experience-driven self-evolving agents aim to overcome the static nature of large language models by distilling reusable experience from past interactions, thus enabling adaptation to novel tasks at deployment time. This process places substantial demands on the foundation model's capacities for abstraction, generalization, and in-context learning. However, most existing studies focus primarily on system-level design choices, such as how experience is represented and managed, neglecting the inherent capabilities of the underlying model. While some recent works have started to optimize the experience utilization stage via reinforcement learning, they still fail to treat self-evolution as a unified process to be jointly optimized. To this end, we propose Evolving-RL, an efficient algorithmic framework that jointly improves the experience extraction and utilization capabilities required for self-evolution. Specifically, we center the learning process on experience extraction and evaluation, using the two supervisory signals derived from evaluation to optimize the extractor and solver separately and thus enable their coordinated co-evolution. Experiments on ALFWorld and Mind2Web show that Evolving-RL effectively enhances LLMs' ability to extract and reuse experience, leading to strong performance gains on out-of-distribution tasks (up to 98.7% relative improvement over the GRPO baseline on ALFWorld unseen tasks and 35.8% on Mind2Web), and these gains are fully unlocked only through the coordinated co-evolution of experience extraction and utilization. Furthermore, Evolving-RL inherently functions as an experience-augmented RL algorithm. By internalizing reusable experience patterns directly into model parameters, it achieves remarkable performance gains over standard baselines on both seen and unseen tasks, even in the absence of test-time experience accumulation.
https://huggingface.co/papers/2605.10663
[
7 authors](https://huggingface.co/papers/2605.10663)
·
May 10
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2504.17578
Advancing CMA-ES with Learning-Based Cooperative Coevolution for Scalable Optimization
https://huggingface.co/papers/2504.17578
Recent research in Cooperative Coevolution~(CC) have achieved promising progress in solving large-scale global optimization problems. However, existing CC paradigms have a primary limitation in that they require deep expertise for selecting or designing effective variable decomposition strategies. Inspired by advancements in Meta-Black-Box Optimization, this paper introduces LCC, a pioneering learning-based cooperative coevolution framework that dynamically schedules decomposition strategies during optimization processes. The decomposition strategy selector is parameterized through a neural network, which processes a meticulously crafted set of optimization status features to determine the optimal strategy for each optimization step. The network is trained via the Proximal Policy Optimization method in a reinforcement learning manner across a collection of representative problems, aiming to maximize the expected optimization performance. Extensive experimental results demonstrate that LCC not only offers certain advantages over state-of-the-art baselines in terms of optimization effectiveness and resource consumption, but it also exhibits promising transferability towards unseen problems.
https://huggingface.co/papers/2504.17578
[
6 authors](https://huggingface.co/papers/2504.17578)
·
Apr 24, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2506.07468
Chasing Moving Targets with Online Self-Play Reinforcement Learning for Safer Language Models
https://huggingface.co/papers/2506.07468
Conventional language model (LM) safety alignment relies on a reactive, disjoint procedure: attackers exploit a static model, followed by defensive fine-tuning to patch exposed vulnerabilities. This sequential approach creates a mismatch -- attackers overfit to obsolete defenses, while defenders perpetually lag behind emerging threats. To address this, we propose Self-RedTeam, an online self-play reinforcement learning algorithm where an attacker and defender agent co-evolve through continuous interaction. We cast safety alignment as a two-player zero-sum game, where a single model alternates between attacker and defender roles -- generating adversarial prompts and safeguarding against them -- while a reward LM adjudicates outcomes. This enables dynamic co-adaptation. Grounded in the game-theoretic framework of zero-sum games, we establish a theoretical safety guarantee which motivates the design of our method: if self-play converges to a Nash Equilibrium, the defender will reliably produce safe responses to any adversarial input. Empirically, Self-RedTeam uncovers more diverse attacks (+21.8% SBERT) compared to attackers trained against static defenders and achieves higher robustness on safety benchmarks (e.g., +65.5% on WildJailBreak) than defenders trained against static attackers. We further propose hidden Chain-of-Thought, allowing agents to plan privately, which boosts adversarial diversity and reduces over-refusals. Our results motivate a shift from reactive patching to proactive co-evolution in LM safety training, enabling scalable, autonomous, and robust self-improvement of LMs via multi-agent reinforcement learning (MARL).
https://huggingface.co/papers/2506.07468
[
7 authors](https://huggingface.co/papers/2506.07468)
·
Jun 8, 2025
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2510.18821
Search Self-play: Pushing the Frontier of Agent Capability without Supervision
https://huggingface.co/papers/2510.18821
Reinforcement learning with verifiable rewards (RLVR) has become the mainstream technique for training LLM agents. However, RLVR highly depends on well-crafted task queries and corresponding ground-truth answers to provide accurate rewards, which requires massive human efforts and hinders the RL scaling processes, especially under agentic scenarios. Although a few recent works explore task synthesis methods, the difficulty of generated agentic tasks can hardly be controlled to provide effective RL training advantages. To achieve agentic RLVR with higher scalability, we explore self-play training for deep search agents, in which the learning LLM utilizes multi-turn search engine calling and acts simultaneously as both a task proposer and a problem solver. The task proposer aims to generate deep search queries with well-defined ground-truth answers and increasing task difficulty. The problem solver tries to handle the generated search queries and output the correct answer predictions. To ensure that each generated search query has accurate ground truth, we collect all the searching results from the proposer's trajectory as external knowledge, then conduct retrieval-augmentation generation (RAG) to test whether the proposed query can be correctly answered with all necessary search documents provided. In this search self-play (SSP) game, the proposer and the solver co-evolve their agent capabilities through both competition and cooperation. With substantial experimental results, we find that SSP can significantly improve search agents' performance uniformly on various benchmarks without any supervision under both from-scratch and continuous RL training setups. The code is at https://github.com/Alibaba-Quark/SSP.
https://huggingface.co/papers/2510.18821
 

https://huggingface.co/papers/2510.18821
Quark-LLM Quark
https://huggingface.co/Quark-LLM
·
Oct 21, 2025 
2
https://huggingface.co/papers/2510.18821#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.06101
Coevolving with the Other You: Fine-Tuning LLM with Sequential Cooperative Multi-Agent Reinforcement Learning
https://huggingface.co/papers/2410.06101
Reinforcement learning (RL) has emerged as a pivotal technique for fine-tuning large language models (LLMs) on specific tasks. However, prevailing RL fine-tuning methods predominantly rely on PPO and its variants. Though these algorithms are effective in general RL settings, they often exhibit suboptimal performance and vulnerability to distribution collapse when applied to the fine-tuning of LLMs. In this paper, we propose CORY, extending the RL fine-tuning of LLMs to a sequential cooperative multi-agent reinforcement learning framework, to leverage the inherent coevolution and emergent capabilities of multi-agent systems. In CORY, the LLM to be fine-tuned is initially duplicated into two autonomous agents: a pioneer and an observer. The pioneer generates responses based on queries, while the observer generates responses using both the queries and the pioneer's responses. The two agents are trained together. During training, the agents exchange roles periodically, fostering cooperation and coevolution between them. Experiments evaluate CORY's performance by fine-tuning GPT-2 and Llama-2 under subjective and objective reward functions on the IMDB Review and GSM8K datasets, respectively. Results show that CORY outperforms PPO in terms of policy optimality, resistance to distribution collapse, and training robustness, thereby underscoring its potential as a superior methodology for refining LLMs in real-world applications.
https://huggingface.co/papers/2410.06101
[
7 authors](https://huggingface.co/papers/2410.06101)
·
Oct 8, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2601.11658
Towards AGI A Pragmatic Approach Towards Self Evolving Agent
https://huggingface.co/papers/2601.11658
Large Language Model (LLM) based agents are powerful yet fundamentally static after deployment, lacking the ability to autonomously expand capabilities, generate new tools, or evolve their reasoning. This work introduces a hierarchical self-evolving multi-agent framework that integrates a Base LLM, an operational SLM agent, a Code-Generation LLM, and a Teacher-LLM to enable continuous adaptation. The workflow begins with the agent attempting a task using reasoning and existing tools; if unsuccessful, it escalates to tool synthesis through the Code-Gen LLM, and when failures persist, it triggers an evolution phase using Curriculum Learning (CL), Reward-Based Learning (RL), or Genetic Algorithm (GA) evolution. Using the TaskCraft dataset rich in hierarchical tasks, tool-use traces, and difficulty scaling we evaluate these paradigms. CL delivers fast recovery and strong generalization, RL excels on high-difficulty tasks, and GA offers high behavioral diversity. Across all settings, evolved agents outperform their originals, demonstrating robust, autonomous, self-improving agentic evolution.
https://huggingface.co/papers/2601.11658
[
3 authors](https://huggingface.co/papers/2601.11658)
·
Jan 15
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2201.09863
Evolution Gym: A Large-Scale Benchmark for Evolving Soft Robots
https://huggingface.co/papers/2201.09863
Both the design and control of a robot play equally important roles in its task performance. However, while optimal control is well studied in the machine learning and robotics community, less attention is placed on finding the optimal robot design. This is mainly because co-optimizing design and control in robotics is characterized as a challenging problem, and more importantly, a comprehensive evaluation benchmark for co-optimization does not exist. In this paper, we propose Evolution Gym, the first large-scale benchmark for co-optimizing the design and control of soft robots. In our benchmark, each robot is composed of different types of voxels (e.g., soft, rigid, actuators), resulting in a modular and expressive robot design space. Our benchmark environments span a wide range of tasks, including locomotion on various types of terrains and manipulation. Furthermore, we develop several robot co-evolution algorithms by combining state-of-the-art design optimization methods and deep reinforcement learning techniques. Evaluating the algorithms on our benchmark platform, we observe robots exhibiting increasingly complex behaviors as evolution progresses, with the best evolved designs solving many of our proposed tasks. Additionally, even though robot designs are evolved autonomously from scratch without prior knowledge, they often grow to resemble existing natural creatures while outperforming hand-designed robots. Nevertheless, all tested algorithms fail to find robots that succeed in our hardest environments. This suggests that more advanced algorithms are required to explore the high-dimensional design space and evolve increasingly intelligent robots -- an area of research in which we hope Evolution Gym will accelerate progress. Our website with code, environments, documentation, and tutorials is available at http://evogym.csail.mit.edu.
https://huggingface.co/papers/2201.09863
[
5 authors](https://huggingface.co/papers/2201.09863)
·
Jan 24, 2022
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2607.01120
Next-Generation Agentic Reinforcement Learning Systems Enable Self-Evolving Agents
https://huggingface.co/papers/2607.01120
LLM agents are rapidly being deployed in production, including coding assistants, customer-support chatbots, and scientific research assistants, yet they remain fundamentally static in enterprise deployment. The LLM weights, system prompts, tool repertoires, and in-context harnesses are frozen at deployment time, and any improvement requires a manual loop of human-curated data collection, offline fine-tuning, modification of the agentic paradigm, and re-deployment. Recent work on self-evolving agents, such as OpenClaw for individual users, indicates that the next leap in agent capability will come from agents that continually learn from their own experience. In this paper, we argue that this vision for self-evolving agent deployment is being held back for enterprise-level large-scale agentic service not by reinforcement learning (RL) algorithms but by agentic online RL systems. Specifically, current agentic RL systems and the surrounding observability software stack are inadequate along three essential aspects: (i) there is no standardized agent trajectory data protocol capable of carrying RL learning signals at step granularity across heterogeneous agent paradigms; (ii) there is no enterprise-grade comprehensive data proxy that converts real workloads into governed learning substrates; and (iii) there is no unified agent evolution control plane that automatically decides, based on trajectory statistics, when to update policy weights or evolve the in-context harness. The next generation of agentic RL systems must be co-designed around these three pillars, and we sketch concrete architectures, case studies, and counter-arguments. We instantiate one branch through AReaL2.0, reorganizing existing RL infrastructure into an agent-oriented online RL loop for policy weight updates from deployed workloads.
https://huggingface.co/papers/2607.01120
[
24 authors](https://huggingface.co/papers/2607.01120)
·
Jul 1
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2201.03916
Automated Reinforcement Learning (AutoRL): A Survey and Open Problems
https://huggingface.co/papers/2201.03916
The combination of Reinforcement Learning (RL) with deep learning has led to a series of impressive feats, with many believing (deep) RL provides a path towards generally capable agents. However, the success of RL agents is often highly sensitive to design choices in the training process, which may require tedious and error-prone manual tuning. This makes it challenging to use RL for new problems, while also limits its full potential. In many other areas of machine learning, AutoML has shown it is possible to automate such design choices and has also yielded promising initial results when applied to RL. However, Automated Reinforcement Learning (AutoRL) involves not only standard applications of AutoML but also includes additional challenges unique to RL, that naturally produce a different set of methods. As such, AutoRL has been emerging as an important area of research in RL, providing promise in a variety of applications from RNA design to playing games such as Go. Given the diversity of methods and environments considered in RL, much of the research has been conducted in distinct subfields, ranging from meta-learning to evolution. In this survey we seek to unify the field of AutoRL, we provide a common taxonomy, discuss each area in detail and pose open problems which would be of interest to researchers going forward.
https://huggingface.co/papers/2201.03916
[
12 authors](https://huggingface.co/papers/2201.03916)
·
Jan 10, 2022
 [-] 37
https://huggingface.co/login?next=%2Fpapers%2F2603.17621
Complementary Reinforcement Learning
https://huggingface.co/papers/2603.17621
Reinforcement Learning (RL) has emerged as a powerful paradigm for training LLM-based agents, yet remains limited by low sample efficiency, stemming not only from sparse outcome feedback but also from the agent's inability to leverage prior experience across episodes. While augmenting agents with historical experience offers a promising remedy, existing approaches suffer from a critical weakness: the experience distilled from history is either stored statically or fail to coevolve with the improving actor, causing a progressive misalignment between the experience and the actor's evolving capability that diminishes its utility over the course of training. Inspired by complementary learning systems in neuroscience, we present Complementary RL to achieve seamless co-evolution of an experience extractor and a policy actor within the RL optimization loop. Specifically, the actor is optimized via sparse outcome-based rewards, while the experience extractor is optimized according to whether its distilled experiences demonstrably contribute to the actor's success, thereby evolving its experience management strategy in lockstep with the actor's growing capabilities. Empirically, Complementary RL outperforms outcome-based agentic RL baselines that do not learn from experience, achieving 10% performance improvement in single-task scenarios and exhibits robust scalability in multi-task settings. These results establish Complementary RL as a paradigm for efficient experience-driven agent learning.
https://huggingface.co/papers/2603.17621
 

https://huggingface.co/papers/2603.17621
AGI-LAB-HF AGI Lab
https://huggingface.co/AGI-LAB-HF
·
Mar 18 
2
https://huggingface.co/papers/2603.17621#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2411.00062
Scalable Reinforcement Post-Training Beyond Static Human Prompts: Evolving Alignment via Asymmetric Self-Play
https://huggingface.co/papers/2411.00062
Current reinforcement learning (RL) frameworks for large language models (LLM) post-training typically assume a fixed prompt distribution, which is sub-optimal and bottlenecks scalability. Prior works have explored prompt evolving, but are often limited to the supervised fine-tuning stage, and prompts are sampled and evolved uniformly without signals. This empirical work presents a paradigm shift: Evolving Alignment via Asymmetric Self-Play (eva), that casts post-training as an infinite game with regret-based signals for 2 players: (i) a creator, who strategically samples and creates new informative prompts and (ii) a solver, who learns to produce preferred responses. eva is the first method that allows language models to adaptively create training prompts in both offline and online RL post-training. The design is simple, easy-to-use yet remarkably effective: eva sets a new SOTA on challenging benchmarks, without any extra human prompts, e.g. it boosts the win-rate of gemma-2-9b-it on Arena-Hard by 51.6% -> 60.1% for DPO and 52.6% -> 62.4% for RLOO, surpassing claude-3-opus and catching up to gemini-1.5-pro, both of which are orders of magnitude larger. Extensive experiments show eva can create effective RL curricula and is robust across ablations. We believe adaptively evolving prompts are key to designing the next-generation RL post-training scheme.
https://huggingface.co/papers/2411.00062
[
8 authors](https://huggingface.co/papers/2411.00062)
·
Oct 30, 2024
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2601.03335
Digital Red Queen: Adversarial Program Evolution in Core War with LLMs
https://huggingface.co/papers/2601.03335
Large language models (LLMs) are increasingly being used to evolve solutions to problems in many domains, in a process inspired by biological evolution. However, unlike biological evolution, most LLM-evolution frameworks are formulated as static optimization problems, overlooking the open-ended adversarial dynamics that characterize real-world evolutionary processes. Here, we study Digital Red Queen (DRQ), a simple self-play algorithm that embraces these so-called "Red Queen" dynamics via continual adaptation to a changing objective. DRQ uses an LLM to evolve assembly-like programs, called warriors, which compete against each other for control of a virtual machine in the game of Core War, a Turing-complete environment studied in artificial life and connected to cybersecurity. In each round of DRQ, the model evolves a new warrior to defeat all previous ones, producing a sequence of adapted warriors. Over many rounds, we observe that warriors become increasingly general (relative to a set of held-out human warriors). Interestingly, warriors also become less behaviorally diverse across independent runs, indicating a convergence pressure toward a general-purpose behavioral strategy, much like convergent evolution in nature. This result highlights a potential value of shifting from static objectives to dynamic Red Queen objectives. Our work positions Core War as a rich, controllable sandbox for studying adversarial adaptation in artificial systems and for evaluating LLM-based evolution methods. More broadly, the simplicity and effectiveness of DRQ suggest that similarly minimal self-play approaches could prove useful in other more practical multi-agent adversarial domains, like real-world cybersecurity or combating drug resistance.
https://huggingface.co/papers/2601.03335
[
7 authors](https://huggingface.co/papers/2601.03335)
·
Jan 6
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2306.17100
RL4CO: an Extensive Reinforcement Learning for Combinatorial Optimization Benchmark
https://huggingface.co/papers/2306.17100
We introduce RL4CO, an extensive reinforcement learning (RL) for combinatorial optimization (CO) benchmark. RL4CO employs state-of-the-art software libraries as well as best practices in implementation, such as modularity and configuration management, to be efficient and easily modifiable by researchers for adaptations of neural network architecture, environments, and algorithms. Contrary to the existing focus on specific tasks like the traveling salesman problem (TSP) for performance assessment, we underline the importance of scalability and generalization capabilities for diverse optimization tasks. We also systematically benchmark sample efficiency, zero-shot generalization, and adaptability to changes in data distributions of various models. Our experiments show that some recent state-of-the-art methods fall behind their predecessors when evaluated using these new metrics, suggesting the necessity for a more balanced view of the performance of neural CO solvers. We hope RL4CO will encourage the exploration of novel solutions to complex real-world tasks, allowing to compare with existing methods through a standardized interface that decouples the science from the software engineering. We make our library publicly available at https://github.com/kaist-silab/rl4co.
https://huggingface.co/papers/2306.17100
[
9 authors](https://huggingface.co/papers/2306.17100)
·
Jun 29, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2509.10771
RSL-RL: A Learning Library for Robotics Research
https://huggingface.co/papers/2509.10771
RSL-RL is an open-source Reinforcement Learning library tailored to the specific needs of the robotics community. Unlike broad general-purpose frameworks, its design philosophy prioritizes a compact and easily modifiable codebase, allowing researchers to adapt and extend algorithms with minimal overhead. The library focuses on algorithms most widely adopted in robotics, together with auxiliary techniques that address robotics-specific challenges. Optimized for GPU-only training, RSL-RL achieves high-throughput performance in large-scale simulation environments. Its effectiveness has been validated in both simulation benchmarks and in real-world robotic experiments, demonstrating its utility as a lightweight, extensible, and practical framework to develop learning-based robotic controllers. The library is open-sourced at: https://github.com/leggedrobotics/rsl_rl.
https://huggingface.co/papers/2509.10771
[
5 authors](https://huggingface.co/papers/2509.10771)
·
Sep 12, 2025
 [-] 63
https://huggingface.co/login?next=%2Fpapers%2F2511.19399
DR Tulu: Reinforcement Learning with Evolving Rubrics for Deep Research
https://huggingface.co/papers/2511.19399
Deep research models perform multi-step research to produce long-form, well-attributed answers. However, most open deep research models are trained on easily verifiable short-form QA tasks via reinforcement learning with verifiable rewards (RLVR), which does not extend to realistic long-form tasks. We address this with Reinforcement Learning with Evolving Rubrics (RLER), in which we construct and maintain rubrics that co-evolve with the policy model during training; this allows the rubrics to incorporate information that the model has newly explored and to provide discriminative, on-policy feedback. Using RLER, we develop Deep Research Tulu (DR Tulu-8B), the first open model that is directly trained for open-ended, long-form deep research. Across four long-form deep research benchmarks in science, healthcare and general domains, DR Tulu substantially outperforms existing open deep research models, and matches or exceeds proprietary deep research systems, while being significantly smaller and cheaper per query. To facilitate future research, we release all data, models, and code, including our new MCP-based agent infrastructure for deep research systems.
https://huggingface.co/papers/2511.19399
 

https://huggingface.co/papers/2511.19399
rl-research RL ReSearch
https://huggingface.co/rl-research
·
Nov 24, 2025 
3
https://huggingface.co/papers/2511.19399#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2401.13231
DittoGym: Learning to Control Soft Shape-Shifting Robots
https://huggingface.co/papers/2401.13231
Robot co-design, where the morphology of a robot is optimized jointly with a learned policy to solve a specific task, is an emerging area of research. It holds particular promise for soft robots, which are amenable to novel manufacturing techniques that can realize learned morphologies and actuators. Inspired by nature and recent novel robot designs, we propose to go a step further and explore the novel reconfigurable robots, defined as robots that can change their morphology within their lifetime. We formalize control of reconfigurable soft robots as a high-dimensional reinforcement learning (RL) problem. We unify morphology change, locomotion, and environment interaction in the same action space, and introduce an appropriate, coarse-to-fine curriculum that enables us to discover policies that accomplish fine-grained control of the resulting robots. We also introduce DittoGym, a comprehensive RL benchmark for reconfigurable soft robots that require fine-grained morphology changes to accomplish the tasks. Finally, we evaluate our proposed coarse-to-fine algorithm on DittoGym and demonstrate robots that learn to change their morphology several times within a sequence, uniquely enabled by our RL algorithm. More results are available at https://dittogym.github.io.
https://huggingface.co/papers/2401.13231
[
4 authors](https://huggingface.co/papers/2401.13231)
·
Jan 23, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2502.10802
CoCoEvo: Co-Evolution of Programs and Test Cases to Enhance Code Generation
https://huggingface.co/papers/2502.10802
Large Language Models (LLMs) have shown remarkable performance in automated code generation. However, existing approaches often rely heavily on pre-defined test cases, which become impractical in scenarios where such cases are unavailable. While prior works explore filtering techniques between programs and test cases, they overlook the refinement of test cases. To address this limitation, we introduce CoCoEvo, a novel LLM-based co-evolution framework that simultaneously evolves programs and test cases. CoCoEvo eliminates the dependency on pre-defined test cases by generating both programs and test cases directly from natural language problem descriptions and function headers. The framework employs specialized evolutionary operators, including LLM-based crossover and mutation operators for program evolution, along with a test case generation operator for test case evolution. Additionally, we propose optimization strategies such as a crossover rate scheduler to balance exploration and convergence, and a multi-objective optimization method for test case selection. Experimental results on multiple state-of-the-art LLMs demonstrate that CoCoEvo surpasses existing methods, achieving state-of-the-art performance in automated code generation and testing. These results underscore the potential of co-evolutionary techniques in advancing the field of automated programming.
https://huggingface.co/papers/2502.10802
[
5 authors](https://huggingface.co/papers/2502.10802)
·
Feb 15, 2025
 [-] 14
https://huggingface.co/login?next=%2Fpapers%2F2510.23595
Multi-Agent Evolve: LLM Self-Improve through Co-evolution
https://huggingface.co/papers/2510.23595
Reinforcement Learning (RL) has demonstrated significant potential in enhancing the reasoning capabilities of large language models (LLMs). However, the success of RL for LLMs heavily relies on human-curated datasets and verifiable rewards, which limit their scalability and generality. Recent Self-Play RL methods, inspired by the success of the paradigm in games and Go, aim to enhance LLM reasoning capabilities without human-annotated data. However, their methods primarily depend on a grounded environment for feedback (e.g., a Python interpreter or a game engine); extending them to general domains remains challenging. To address these challenges, we propose Multi-Agent Evolve (MAE), a framework that enables LLMs to self-evolve in solving diverse tasks, including mathematics, reasoning, and general knowledge Q&A. The core design of MAE is based on a triplet of interacting agents (Proposer, Solver, Judge) that are instantiated from a single LLM, and applies reinforcement learning to optimize their behaviors. The Proposer generates questions, the Solver attempts solutions, and the Judge evaluates both while co-evolving. Experiments on Qwen2.5-3B-Instruct demonstrate that MAE achieves an average improvement of 4.54% on multiple benchmarks. These results highlight MAE as a scalable, data-efficient method for enhancing the general reasoning abilities of LLMs with minimal reliance on human-curated supervision.
https://huggingface.co/papers/2510.23595
 

https://huggingface.co/papers/2510.23595
UIUC-CS University of Illinois at Urbana-Champaign
https://huggingface.co/UIUC-CS
·
Oct 27, 2025 
2
https://huggingface.co/papers/2510.23595#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2504.16129
MARFT: Multi-Agent Reinforcement Fine-Tuning
https://huggingface.co/papers/2504.16129
LLM-based Multi-Agent Systems have demonstrated remarkable capabilities in addressing complex, agentic tasks, from generating high-quality presentation slides to even conducting sophisticated scientific research. Meanwhile, RL has been widely recognized for its effectiveness in enhancing agent intelligence, but limited research has investigated the fine-tuning of LaMAS using foundational RL techniques. Moreover, the direct application of MARL methods to LaMAS introduces significant challenges, stemming from the unique characteristics and mechanisms inherent to LaMAS. To address these challenges, this article presents a comprehensive study of LLM-based MARL and proposes a novel paradigm termed Multi-Agent Reinforcement Fine-Tuning (MARFT). We introduce a brand-new POMDP called Flex-POMDP, which aligns with the LaMAS optimization in real-world applications and a universal algorithmic framework tailored specifically for LaMAS, outlining the conceptual foundations, key distinctions, and practical implementation strategies. We review the evolution from RL to RFT, setting the stage for a parallel analysis in the multi-agent domain. In the context of LaMAS, we elucidate critical differences between MARL and MARFT. These differences motivate a transition toward a LaMAS-oriented formulation of RFT. Central to this work is a robust and scalable MARFT framework. We detail the core algorithm and provide a complete, open-source implementation to facilitate adoption and further research. The latter sections of the paper explore real-world application perspectives and opening challenges in MARFT. By bridging theoretical underpinnings with practical methodologies, this work serves as a roadmap for researchers seeking to advance MARFT toward resilient and adaptive solutions in agentic systems. Our implementation of the proposed framework is publicly available at: https://github.com/jwliao-ai/MARFT.
https://huggingface.co/papers/2504.16129
[
4 authors](https://huggingface.co/papers/2504.16129)
·
Apr 20, 2025
 [-] 133
https://huggingface.co/login?next=%2Fpapers%2F2508.05004
R-Zero: Self-Evolving Reasoning LLM from Zero Data
https://huggingface.co/papers/2508.05004
Self-evolving Large Language Models (LLMs) offer a scalable path toward super-intelligence by autonomously generating, refining, and learning from their own experiences. However, existing methods for training such models still rely heavily on vast human-curated tasks and labels, typically via fine-tuning or reinforcement learning, which poses a fundamental bottleneck to advancing AI systems toward capabilities beyond human intelligence. To overcome this limitation, we introduce R-Zero, a fully autonomous framework that generates its own training data from scratch. Starting from a single base LLM, R-Zero initializes two independent models with distinct roles, a Challenger and a Solver. These models are optimized separately and co-evolve through interaction: the Challenger is rewarded for proposing tasks near the edge of the Solver capability, and the Solver is rewarded for solving increasingly challenging tasks posed by the Challenger. This process yields a targeted, self-improving curriculum without any pre-existing tasks and labels. Empirically, R-Zero substantially improves reasoning capability across different backbone LLMs, e.g., boosting the Qwen3-4B-Base by +6.49 on math-reasoning benchmarks and +7.54 on general-domain reasoning benchmarks.
https://huggingface.co/papers/2508.05004
 

https://huggingface.co/papers/2508.05004
tencent Tencent
https://huggingface.co/tencent
·
Aug 6, 2025 
3
https://huggingface.co/papers/2508.05004#community
 [-] 12
https://huggingface.co/login?next=%2Fpapers%2F2602.21320
Tool-R0: Self-Evolving LLM Agents for Tool-Learning from Zero Data
https://huggingface.co/papers/2602.21320
Large language models (LLMs) are becoming the foundation for autonomous agents that can use tools to solve complex tasks. Reinforcement learning (RL) has emerged as a common approach for injecting such agentic capabilities, but typically under tightly controlled training setups. It often depends on carefully constructed task-solution pairs and substantial human supervision, which creates a fundamental obstacle to open-ended self-evolution toward superintelligent systems. In this paper, we propose Tool-R0 framework for training general purpose tool-calling agents from scratch with self-play RL, under a zero-data assumption. Initialized from the same base LLM, Tool-R0 co-evolves a Generator and a Solver with complementary rewards: one proposes targeted challenging tasks at the other's competence frontier and the other learns to solve them with real-world tool calls. This creates a self-evolving cycle that requires no pre-existing tasks or datasets. Evaluation on different tool-use benchmarks show that Tool-R0 yields 92.5 relative improvement over the base model and surpasses fully supervised tool-calling baselines under the same setting. Our work further provides empirical insights into self-play LLM agents by analyzing co-evolution, curriculum dynamics, and scaling behavior.
https://huggingface.co/papers/2602.21320
 

https://huggingface.co/papers/2602.21320
illinois University of Illinois at Urbana-Champaign
https://huggingface.co/illinois
·
Feb 24 
2
https://huggingface.co/papers/2602.21320#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2507.04136
A Technical Survey of Reinforcement Learning Techniques for Large Language Models
https://huggingface.co/papers/2507.04136
Reinforcement Learning (RL) has emerged as a transformative approach for aligning and enhancing Large Language Models (LLMs), addressing critical challenges in instruction following, ethical alignment, and reasoning capabilities. This survey offers a comprehensive foundation on the integration of RL with language models, highlighting prominent algorithms such as Proximal Policy Optimization (PPO), Q-Learning, and Actor-Critic methods. Additionally, it provides an extensive technical overview of RL techniques specifically tailored for LLMs, including foundational methods like Reinforcement Learning from Human Feedback (RLHF) and AI Feedback (RLAIF), as well as advanced strategies such as Direct Preference Optimization (DPO) and Group Relative Policy Optimization (GRPO). We systematically analyze their applications across domains, i.e., from code generation to tool-augmented reasoning. We also present a comparative taxonomy based on reward modeling, feedback mechanisms, and optimization strategies. Our evaluation highlights key trends. RLHF remains dominant for alignment, and outcome-based RL such as RLVR significantly improves stepwise reasoning. However, persistent challenges such as reward hacking, computational costs, and scalable feedback collection underscore the need for continued innovation. We further discuss emerging directions, including hybrid RL algorithms, verifier-guided training, and multi-objective alignment frameworks. This survey serves as a roadmap for researchers advancing RL-driven LLM development, balancing capability enhancement with safety and scalability.
https://huggingface.co/papers/2507.04136
[
2 authors](https://huggingface.co/papers/2507.04136)
·
Jul 5, 2025
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2604.03472
Vocabulary Dropout for Curriculum Diversity in LLM Co-Evolution
https://huggingface.co/papers/2604.03472
Co-evolutionary self-play, where one language model generates problems and another solves them, promises autonomous curriculum learning without human supervision. In practice, the proposer quickly converges to a narrow distribution of problems that satisfy the reward function. This diversity collapse renders the curriculum uninformative for the solver, stalling the co-evolutionary loop. We introduce vocabulary dropout, a random mask applied to the proposer's output logits during both policy training and curriculum generation, as a lightweight mechanism to sustain diversity. The mask is hard and non-stationary, preventing the proposer from locking into fixed token sequences. Training Qwen3-4B and Qwen3-8B on mathematical reasoning via R-Zero, we find that vocabulary dropout sustains proposer diversity across lexical, semantic, and functional metrics throughout training, and yields solver improvements averaging +4.4 points at 8B, with the largest gains on competition-level benchmarks. Our findings suggest that explicit action-space constraints, analogous to the structural role that game rules play in classical self-play, can help sustain productive co-evolution in language. Vocabulary dropout is one simple instantiation of this principle.
https://huggingface.co/papers/2604.03472
[
4 authors](https://huggingface.co/papers/2604.03472)
·
Apr 27
 [-] 6
https://huggingface.co/login?next=%2Fpapers%2F2501.13075
Evolution and The Knightian Blindspot of Machine Learning
https://huggingface.co/papers/2501.13075
This paper claims that machine learning (ML) largely overlooks an important facet of general intelligence: robustness to a qualitatively unknown future in an open world. Such robustness relates to Knightian uncertainty (KU) in economics, i.e. uncertainty that cannot be quantified, which is excluded from consideration in ML's key formalisms. This paper aims to identify this blind spot, argue its importance, and catalyze research into addressing it, which we believe is necessary to create truly robust open-world AI. To help illuminate the blind spot, we contrast one area of ML, reinforcement learning (RL), with the process of biological evolution. Despite staggering ongoing progress, RL still struggles in open-world situations, often failing under unforeseen situations. For example, the idea of zero-shot transferring a self-driving car policy trained only in the US to the UK currently seems exceedingly ambitious. In dramatic contrast, biological evolution routinely produces agents that thrive within an open world, sometimes even to situations that are remarkably out-of-distribution (e.g. invasive species; or humans, who do undertake such zero-shot international driving). Interestingly, evolution achieves such robustness without explicit theory, formalisms, or mathematical gradients. We explore the assumptions underlying RL's typical formalisms, showing how they limit RL's engagement with the unknown unknowns characteristic of an ever-changing complex world. Further, we identify mechanisms through which evolutionary processes foster robustness to novel and unpredictable challenges, and discuss potential pathways to algorithmically embody them. The conclusion is that the intriguing remaining fragility of ML may result from blind spots in its formalisms, and that significant gains may result from direct confrontation with the challenge of KU.
https://huggingface.co/papers/2501.13075
[
5 authors](https://huggingface.co/papers/2501.13075)
·
Jan 22, 2025 
2
https://huggingface.co/papers/2501.13075#community
 [-] 11
https://huggingface.co/login?next=%2Fpapers%2F2605.11136
EVOCHAMBER: Test-Time Co-evolution of Multi-Agent System at Individual, Team, and Population Scales
https://huggingface.co/papers/2605.11136
We argue that multi-agent test-time evolution is not single-agent evolution replicated N times. A single-agent learner can only evolve its own context and memory. A multi-agent system additionally evolves who collaborates, how they collaborate, and how knowledge flows across the population. These components have no single-agent counterpart and can produce phenomena such as emergent specialization. Yet prior test-time methods either confine experiences to individual agents, forfeiting cross-agent learning, or broadcast symmetrically to all agents, erasing the specialization that makes collaboration valuable. We present EVOCHAMBER, a training-free framework that instantiates test-time evolution at three levels over a coevolving agent pool. At its core is CODREAM (Collaborative Dreaming), a post-task protocol triggered on team failure or disagreement, in which agents collaboratively reflect, distill insights, and route them asymmetrically from strong to weak agents on the failed niche, preserving specialization while filling knowledge gaps. Team-level operators assemble niche-conditioned teams and select collaboration structures online. Population-level lifecycle operators fork, merge, prune, and seed agents under performance pressure. On three heterogeneous task streams with Qwen3-8B, EVOCHAMBER reaches 63.9% on competition math, 75.7% on code, and 87.1% on multi-domain reasoning, outperforming the best baseline by 32% relative on math and confirming asymmetric cross-agent transfer as the primary driver in ablation. Starting from several identically initialized agents, four to five stable niche specialists spontaneously emerge, a structural signature of multi-agent evolution that no single-agent learner can express. See our code at: https://github.com/Mercury7353/EvoChamber
https://huggingface.co/papers/2605.11136
[
6 authors](https://huggingface.co/papers/2605.11136)
·
May 10 
1
https://huggingface.co/papers/2605.11136#community
 [-] 17
https://huggingface.co/login?next=%2Fpapers%2F2602.16928
Discovering Multiagent Learning Algorithms with Large Language Models
https://huggingface.co/papers/2602.16928
Much of the advancement of Multi-Agent Reinforcement Learning (MARL) in imperfect-information games has historically depended on manual iterative refinement of baselines. While foundational families like Counterfactual Regret Minimization (CFR) and Policy Space Response Oracles (PSRO) rest on solid theoretical ground, the design of their most effective variants often relies on human intuition to navigate a vast algorithmic design space. In this work, we propose the use of AlphaEvolve, an evolutionary coding agent powered by large language models, to automatically discover new multiagent learning algorithms. We demonstrate the generality of this framework by evolving novel variants for two distinct paradigms of game-theoretic learning. First, in the domain of iterative regret minimization, we evolve the logic governing regret accumulation and policy derivation, discovering a new algorithm, Volatility-Adaptive Discounted (VAD-)CFR. VAD-CFR employs novel, non-intuitive mechanisms-including volatility-sensitive discounting, consistency-enforced optimism, and a hard warm-start policy accumulation schedule-to outperform state-of-the-art baselines like Discounted Predictive CFR+. Second, in the regime of population based training algorithms, we evolve training-time and evaluation-time meta strategy solvers for PSRO, discovering a new variant, Smoothed Hybrid Optimistic Regret (SHOR-)PSRO. SHOR-PSRO introduces a hybrid meta-solver that linearly blends Optimistic Regret Matching with a smoothed, temperature-controlled distribution over best pure strategies. By dynamically annealing this blending factor and diversity bonuses during training, the algorithm automates the transition from population diversity to rigorous equilibrium finding, yielding superior empirical convergence compared to standard static meta-solvers.
https://huggingface.co/papers/2602.16928
 

https://huggingface.co/papers/2602.16928
google Google
https://huggingface.co/google
·
Feb 18 
2
https://huggingface.co/papers/2602.16928#community
 [-] 11
https://huggingface.co/login?next=%2Fpapers%2F2606.03108
EvoTrainer: Co-Evolving LLM Policies and Training Harnesses for Autonomous Agentic Reinforcement Learning
https://huggingface.co/papers/2606.03108
Autonomous LLM training is often framed as recipe search, which leaves the training harness largely static. This limitation sharpens in agentic RL, where shifting bottlenecks and scalar rewards mask diverse failure modes. We introduce EvoTrainer, an autonomous training framework that co-evolves LLM policies and training-side harnesses through empirical feedback: it diagnoses rollout-level evidence, revises diagnostics, backtests interventions, and accumulates reusable skills. Evaluated on mathematical reasoning, competitive-programming code generation, and repository-level software engineering, EvoTrainer matches or exceeds the human-engineered RL references under the same data, codebase, and evaluation protocol, with the largest gain on long-horizon agentic SWE. Trajectory analyses show that retained strategies diverge across domains, evolving diagnostics prevent invalid high-scoring branches from being promoted, and reusable skills shape later search. Autonomous LLM RL should move beyond recipe search toward joint evolution of policies and the training harnesses that interpret them.
https://huggingface.co/papers/2606.03108
 

https://huggingface.co/papers/2606.03108
AlibabaTongyiLab TongyiLab
https://huggingface.co/AlibabaTongyiLab
·
Jun 1 
2
https://huggingface.co/papers/2606.03108#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2504.05108
Algorithm Discovery With LLMs: Evolutionary Search Meets Reinforcement Learning
https://huggingface.co/papers/2504.05108
Discovering efficient algorithms for solving complex problems has been an outstanding challenge in mathematics and computer science, requiring substantial human expertise over the years. Recent advancements in evolutionary search with large language models (LLMs) have shown promise in accelerating the discovery of algorithms across various domains, particularly in mathematics and optimization. However, existing approaches treat the LLM as a static generator, missing the opportunity to update the model with the signal obtained from evolutionary exploration. In this work, we propose to augment LLM-based evolutionary search by continuously refining the search operator - the LLM - through reinforcement learning (RL) fine-tuning. Our method leverages evolutionary search as an exploration strategy to discover improved algorithms, while RL optimizes the LLM policy based on these discoveries. Our experiments on three combinatorial optimization tasks - bin packing, traveling salesman, and the flatpack problem - show that combining RL and evolutionary search improves discovery efficiency of improved algorithms, showcasing the potential of RL-enhanced evolutionary strategies to assist computer scientists and mathematicians for more efficient algorithm design.
https://huggingface.co/papers/2504.05108
[
7 authors](https://huggingface.co/papers/2504.05108)
·
Apr 7, 2025
 [-] 68
https://huggingface.co/login?next=%2Fpapers%2F2604.27083
Co-Evolving Policy Distillation
https://huggingface.co/papers/2604.27083
RLVR and OPD have become standard paradigms for post-training. We provide a unified analysis of these two paradigms in consolidating multiple expert capabilities into a single model, identifying capability loss in different ways: mixed RLVR suffers from inter-capability divergence cost, while the pipeline of first training experts and then performing OPD, though avoiding divergence, fails to fully absorb teacher capabilities due to large behavioral pattern gaps between teacher and student. We propose Co-Evolving Policy Distillation (CoPD), which encourages parallel training of experts and introduces OPD during each expert's ongoing RLVR training rather than after complete expert training, with experts serving as mutual teachers (making OPD bidirectional) to co-evolve. This enables more consistent behavioral patterns among experts while maintaining sufficient complementary knowledge throughout. Experiments validate that CoPD achieves all-in-one integration of text, image, and video reasoning capabilities, significantly outperforming strong baselines such as mixed RLVR and MOPD, and even surpassing domain-specific experts. The model parallel training pattern offered by CoPD may inspire a novel training scaling paradigm.
https://huggingface.co/papers/2604.27083
[
10 authors](https://huggingface.co/papers/2604.27083)
·
Apr 28 
3
https://huggingface.co/papers/2604.27083#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2511.23473
ThetaEvolve: Test-time Learning on Open Problems
https://huggingface.co/papers/2511.23473
Recent advances in large language models (LLMs) have enabled breakthroughs in mathematical discovery, exemplified by AlphaEvolve, a closed-source system that evolves programs to improve bounds on open problems. However, it relies on ensembles of frontier LLMs to achieve new bounds and is a pure inference system that models cannot internalize the evolving strategies. We introduce ThetaEvolve, an open-source framework that simplifies and extends AlphaEvolve to efficiently scale both in-context learning and Reinforcement Learning (RL) at test time, allowing models to continually learn from their experiences in improving open optimization problems. ThetaEvolve features a single LLM, a large program database for enhanced exploration, batch sampling for higher throughput, lazy penalties to discourage stagnant outputs, and optional reward shaping for stable training signals, etc. ThetaEvolve is the first evolving framework that enable a small open-source model, like DeepSeek-R1-0528-Qwen3-8B, to achieve new best-known bounds on open problems (circle packing and first auto-correlation inequality) mentioned in AlphaEvolve. Besides, across two models and four open tasks, we find that ThetaEvolve with RL at test-time consistently outperforms inference-only baselines, and the model indeed learns evolving capabilities, as the RL-trained checkpoints demonstrate faster progress and better final performance on both trained target task and other unseen tasks. We release our code publicly: https://github.com/ypwang61/ThetaEvolve
https://huggingface.co/papers/2511.23473
[
16 authors](https://huggingface.co/papers/2511.23473)
·
Nov 28, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2406.02081
FightLadder: A Benchmark for Competitive Multi-Agent Reinforcement Learning
https://huggingface.co/papers/2406.02081
Recent advances in reinforcement learning (RL) heavily rely on a variety of well-designed benchmarks, which provide environmental platforms and consistent criteria to evaluate existing and novel algorithms. Specifically, in multi-agent RL (MARL), a plethora of benchmarks based on cooperative games have spurred the development of algorithms that improve the scalability of cooperative multi-agent systems. However, for the competitive setting, a lightweight and open-sourced benchmark with challenging gaming dynamics and visual inputs has not yet been established. In this work, we present FightLadder, a real-time fighting game platform, to empower competitive MARL research. Along with the platform, we provide implementations of state-of-the-art MARL algorithms for competitive games, as well as a set of evaluation metrics to characterize the performance and exploitability of agents. We demonstrate the feasibility of this platform by training a general agent that consistently defeats 12 built-in characters in single-player mode, and expose the difficulty of training a non-exploitable agent without human knowledge and demonstrations in two-player mode. FightLadder provides meticulously designed environments to address critical challenges in competitive MARL research, aiming to catalyze a new era of discovery and advancement in the field. Videos and code at https://sites.google.com/view/fightladder/home.
https://huggingface.co/papers/2406.02081
[
4 authors](https://huggingface.co/papers/2406.02081)
·
Jun 3, 2024
 [-] 22
https://huggingface.co/login?next=%2Fpapers%2F2512.13399
Differentiable Evolutionary Reinforcement Learning
https://huggingface.co/papers/2512.13399
The design of effective reward functions presents a central and often arduous challenge in reinforcement learning (RL), particularly when developing autonomous agents for complex reasoning tasks. While automated reward optimization approaches exist, they typically rely on derivative-free evolutionary heuristics that treat the reward function as a black box, failing to capture the causal relationship between reward structure and task performance. To bridge this gap, we propose Differentiable Evolutionary Reinforcement Learning (DERL), a bilevel framework that enables the autonomous discovery of optimal reward signals. In DERL, a Meta-Optimizer evolves a reward function (i.e., Meta-Reward) by composing structured atomic primitives, guiding the training of an inner-loop policy. Crucially, unlike previous evolution, DERL is differentiable in its metaoptimization: it treats the inner-loop validation performance as a signal to update the Meta-Optimizer via reinforcement learning. This allows DERL to approximate the "meta-gradient" of task success, progressively learning to generate denser and more actionable feedback. We validate DERL across three distinct domains: robotic agent (ALFWorld), scientific simulation (ScienceWorld), and mathematical reasoning (GSM8k, MATH). Experimental results show that DERL achieves state-of-the-art performance on ALFWorld and ScienceWorld, significantly outperforming methods relying on heuristic rewards, especially in out-of-distribution scenarios. Analysis of the evolutionary trajectory demonstrates that DERL successfully captures the intrinsic structure of tasks, enabling selfimproving agent alignment without human intervention.
https://huggingface.co/papers/2512.13399
 

https://huggingface.co/papers/2512.13399
DifferentiableEvolutionaryRL DERL_Group
https://huggingface.co/DifferentiableEvolutionaryRL
·
Dec 15, 2025 
1
https://huggingface.co/papers/2512.13399#community
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2605.09539
TacoMAS: Test-Time Co-Evolution of Topology and Capability in LLM-based Multi-Agent Systems
https://huggingface.co/papers/2605.09539
Multi-agent systems (MAS) have emerged as a promising paradigm for solving complex tasks. Recent work has explored self-evolving MAS that automatically optimize agent capabilities or communication topologies. However, existing methods either learn a topology that remains fixed at inference time or adapt only the topology or capability during inference. We empirically and theoretically show that effective test-time evolution requires jointly adapting both axes, but on different time scales: capabilities should update rapidly to handle emerging subtasks, while the topology should evolve more slowly to preserve coordination stability. We then introduce TacoMAS, a test-time co-evolution framework for dynamic MAS. TacoMAS formulates MAS inference as a task of online graph adaptation, where nodes represent agents with role-specific capabilities and edges define their communication topology. During inference, a fast capability loop updates agent expertise using trajectory-level feedback, while a slow meta-LLM-driven topology loop performs agents' birth-death operations on MAS, including edge edit, agent addition, and agent removal. We further show that this fast-slow design drives MAS evolution toward a task-conditioned stable equilibrium. Experiments on four benchmarks demonstrate that TacoMAS outperforms nearly 20 multi-agent baselines, achieving an average improvement of 13.3% over the strongest baseline. The codes are released at https://github.com/chenxu2-gif/TacoMAS-MultiAgent.
https://huggingface.co/papers/2605.09539
[
7 authors](https://huggingface.co/papers/2605.09539)
·
May 9 
2
https://huggingface.co/papers/2605.09539#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2602.02597
ContextEvolve: Multi-Agent Context Compression for Systems Code Optimization
https://huggingface.co/papers/2602.02597
Large language models are transforming systems research by automating the discovery of performance-critical algorithms for computer systems. Despite plausible codes generated by LLMs, producing solutions that meet the stringent correctness and performance requirements of systems demands iterative optimization. Test-time reinforcement learning offers high search efficiency but requires parameter updates infeasible under API-only access, while existing training-free evolutionary methods suffer from inefficient context utilization and undirected search. We introduce ContextEvolve, a multi-agent framework that achieves RL-level search efficiency under strict parameter-blind constraints by decomposing optimization context into three orthogonal dimensions: a Summarizer Agent condenses semantic state via code-to-language abstraction, a Navigator Agent distills optimization direction from trajectory analysis, and a Sampler Agent curates experience distribution through prioritized exemplar retrieval. This orchestration forms a functional isomorphism with RL-mapping to state representation, policy gradient, and experience replay-enabling principled optimization in a textual latent space. On the ADRS benchmark, ContextEvolve outperforms state-of-the-art baselines by 33.3% while reducing token consumption by 29.0%. Codes for our work are released at https://anonymous.4open.science/r/ContextEvolve-ACC
https://huggingface.co/papers/2602.02597
[
3 authors](https://huggingface.co/papers/2602.02597)
·
Feb 1
 [-] 32
https://huggingface.co/login?next=%2Fpapers%2F2602.03048
CoBA-RL: Capability-Oriented Budget Allocation for Reinforcement Learning in LLMs
https://huggingface.co/papers/2602.03048
Reinforcement Learning with Verifiable Rewards (RLVR) has emerged as a key approach for enhancing LLM reasoning.However, standard frameworks like Group Relative Policy Optimization (GRPO) typically employ a uniform rollout budget, leading to resource inefficiency. Moreover, existing adaptive methods often rely on instance-level metrics, such as task pass rates, failing to capture the model's dynamic learning state. To address these limitations, we propose CoBA-RL, a reinforcement learning algorithm designed to adaptively allocate rollout budgets based on the model's evolving capability. Specifically, CoBA-RL utilizes a Capability-Oriented Value function to map tasks to their potential training gains and employs a heap-based greedy strategy to efficiently self-calibrate the distribution of computational resources to samples with high training value. Extensive experiments demonstrate that our approach effectively orchestrates the trade-off between exploration and exploitation, delivering consistent generalization improvements across multiple challenging benchmarks. These findings underscore that quantifying sample training value and optimizing budget allocation are pivotal for advancing LLM post-training efficiency.
https://huggingface.co/papers/2602.03048
 

https://huggingface.co/papers/2602.03048
meituan-longcat LongCat
https://huggingface.co/meituan-longcat
·
Feb 2 
3
https://huggingface.co/papers/2602.03048#community
 [-] 20
https://huggingface.co/login?next=%2Fpapers%2F2509.26354
Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents
https://huggingface.co/papers/2509.26354
Advances in Large Language Models (LLMs) have enabled a new class of self-evolving agents that autonomously improve through interaction with the environment, demonstrating strong capabilities. However, self-evolution also introduces novel risks overlooked by current safety research. In this work, we study the case where an agent's self-evolution deviates in unintended ways, leading to undesirable or even harmful outcomes. We refer to this as Misevolution. To provide a systematic investigation, we evaluate misevolution along four key evolutionary pathways: model, memory, tool, and workflow. Our empirical findings reveal that misevolution is a widespread risk, affecting agents built even on top-tier LLMs (e.g., Gemini-2.5-Pro). Different emergent risks are observed in the self-evolutionary process, such as the degradation of safety alignment after memory accumulation, or the unintended introduction of vulnerabilities in tool creation and reuse. To our knowledge, this is the first study to systematically conceptualize misevolution and provide empirical evidence of its occurrence, highlighting an urgent need for new safety paradigms for self-evolving agents. Finally, we discuss potential mitigation strategies to inspire further research on building safer and more trustworthy self-evolving agents. Our code and data are available at https://github.com/ShaoShuai0605/Misevolution . Warning: this paper includes examples that may be offensive or harmful in nature.
https://huggingface.co/papers/2509.26354
[
11 authors](https://huggingface.co/papers/2509.26354)
·
Sep 30, 2025 
2
https://huggingface.co/papers/2509.26354#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2511.16672
EvoLMM: Self-Evolving Large Multimodal Models with Continuous Rewards
https://huggingface.co/papers/2511.16672
Recent advances in large multimodal models (LMMs) have enabled impressive reasoning and perception abilities, yet most existing training pipelines still depend on human-curated data or externally verified reward models, limiting their autonomy and scalability. In this work, we strive to improve LMM reasoning capabilities in a purely unsupervised fashion (without any annotated data or reward distillation). To this end, we propose a self-evolving framework, named EvoLMM, that instantiates two cooperative agents from a single backbone model: a Proposer, which generates diverse, image-grounded questions, and a Solver, which solves them through internal consistency, where learning proceeds through a continuous self-rewarding process. This dynamic feedback encourages both the generation of informative queries and the refinement of structured reasoning without relying on ground-truth or human judgments. When using the popular Qwen2.5-VL as the base model, our EvoLMM yields consistent gains upto sim3% on multimodal math-reasoning benchmarks, including ChartQA, MathVista, and MathVision, using only raw training images. We hope our simple yet effective approach will serve as a solid baseline easing future research in self-improving LMMs in a fully-unsupervised fashion. Our code and models are available at https://github.com/mbzuai-oryx/EvoLMM.
https://huggingface.co/papers/2511.16672
[
8 authors](https://huggingface.co/papers/2511.16672)
·
Nov 20, 2025
 [-] 23
https://huggingface.co/login?next=%2Fpapers%2F2505.23604
Satori-SWE: Evolutionary Test-Time Scaling for Sample-Efficient Software Engineering
https://huggingface.co/papers/2505.23604
Language models (LMs) perform well on standardized coding benchmarks but struggle with real-world software engineering tasks such as resolving GitHub issues in SWE-Bench, especially when model parameters are less than 100B. While smaller models are preferable in practice due to their lower computational cost, improving their performance remains challenging. Existing approaches primarily rely on supervised fine-tuning (SFT) with high-quality data, which is expensive to curate at scale. An alternative is test-time scaling: generating multiple outputs, scoring them using a verifier, and selecting the best one. Although effective, this strategy often requires excessive sampling and costly scoring, limiting its practical application. We propose Evolutionary Test-Time Scaling (EvoScale), a sample-efficient method that treats generation as an evolutionary process. By iteratively refining outputs via selection and mutation, EvoScale shifts the output distribution toward higher-scoring regions, reducing the number of samples needed to find correct solutions. To reduce the overhead from repeatedly sampling and selection, we train the model to self-evolve using reinforcement learning (RL). Rather than relying on external verifiers at inference time, the model learns to self-improve the scores of its own generations across iterations. Evaluated on SWE-Bench-Verified, EvoScale enables our 32B model, Satori-SWE-32B, to match or exceed the performance of models with over 100B parameters while using a few samples. Code, data, and models will be fully open-sourced.
https://huggingface.co/papers/2505.23604
[
11 authors](https://huggingface.co/papers/2505.23604)
·
May 29, 2025 
2
https://huggingface.co/papers/2505.23604#community
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2606.13710
Hybrid Open-Ended Tri-Evolution Makes Better Deep Researcher
https://huggingface.co/papers/2606.13710
Deep research and agent evolution serve as de-facto tasks for AI agents in real-world applications toward artificial general intelligence. The former enables autonomous retrieval and integration of information in open-ended environments to tackle open-ended research tasks, yet it is constrained by the static parametric deep research capabilities of agent systems. The latter allows agents to autonomously interact with the environment to gain experiences that evolve model capabilities. However, its effectiveness has been widely validated only on verifiable tasks with standard answers, leaving a gap with open-ended research tasks. To bridge these two critical tasks, we propose the Hybrid Open-Ended Tri-Evolution (HOTE) framework, which leverages hybrid-mode reinforcement learning to facilitate the collaborative evolution of a proposer, solver and judge based on web-scale knowledge, moving toward autonomous evolving agents in open-ended tasks and environments. Extensive experiments on three long-form deep research benchmarks demonstrate that the 8B model trained via HOTE surpasses the strongest static open 8-32B models as well as those trained by state-of-the-art deep research training methods with less time overhead, and further verify that the evolution of all three modules in HOTE is indispensable.
https://huggingface.co/papers/2606.13710
[
8 authors](https://huggingface.co/papers/2606.13710)
·
Jun 14
 [-] 24
https://huggingface.co/login?next=%2Fpapers%2F2602.16301
Multi-agent cooperation through in-context co-player inference
https://huggingface.co/papers/2602.16301
Achieving cooperation among self-interested agents remains a fundamental challenge in multi-agent reinforcement learning. Recent work showed that mutual cooperation can be induced between "learning-aware" agents that account for and shape the learning dynamics of their co-players. However, existing approaches typically rely on hardcoded, often inconsistent, assumptions about co-player learning rules or enforce a strict separation between "naive learners" updating on fast timescales and "meta-learners" observing these updates. Here, we demonstrate that the in-context learning capabilities of sequence models allow for co-player learning awareness without requiring hardcoded assumptions or explicit timescale separation. We show that training sequence model agents against a diverse distribution of co-players naturally induces in-context best-response strategies, effectively functioning as learning algorithms on the fast intra-episode timescale. We find that the cooperative mechanism identified in prior work-where vulnerability to extortion drives mutual shaping-emerges naturally in this setting: in-context adaptation renders agents vulnerable to extortion, and the resulting mutual pressure to shape the opponent's in-context learning dynamics resolves into the learning of cooperative behavior. Our results suggest that standard decentralized reinforcement learning on sequence models combined with co-player diversity provides a scalable path to learning cooperative behaviors.
https://huggingface.co/papers/2602.16301
 

https://huggingface.co/papers/2602.16301
google Google
https://huggingface.co/google
·
Feb 17 
2
https://huggingface.co/papers/2602.16301#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2509.19349
ShinkaEvolve: Towards Open-Ended And Sample-Efficient Program Evolution
https://huggingface.co/papers/2509.19349
We introduce ShinkaEvolve: a new open-source framework leveraging large language models (LLMs) to advance scientific discovery with state-of-the-art performance and unprecedented efficiency. Recent advances in scaling inference time compute of LLMs have enabled significant progress in generalized scientific discovery. These approaches rely on evolutionary agentic harnesses that leverage LLMs as mutation operators to generate candidate solutions. However, current code evolution methods suffer from critical limitations: they are sample inefficient, requiring thousands of samples to identify effective solutions, and remain closed-source, hindering broad adoption and extension. ShinkaEvolve addresses these limitations, introducing three key innovations: a parent sampling technique balancing exploration and exploitation, code novelty rejection-sampling for efficient search space exploration, and a bandit-based LLM ensemble selection strategy. We evaluate ShinkaEvolve across diverse tasks, demonstrating consistent improvements in sample efficiency and solution quality. ShinkaEvolve discovers a new state-of-the-art circle packing solution using only 150 samples, designs high-performing agentic harnesses for AIME mathematical reasoning tasks, identifies improvements to ALE-Bench competitive programming solutions, and discovers novel mixture-of-expert load balancing loss functions that illuminate the space of optimization strategies. Our results demonstrate that ShinkaEvolve achieves broad applicability with exceptional sample efficiency. By providing open-source accessibility and cost-efficiency, this work democratizes open-ended discovery across diverse computational problems.
https://huggingface.co/papers/2509.19349
[
3 authors](https://huggingface.co/papers/2509.19349)
·
Sep 17, 2025
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2602.23413
EvoX: Meta-Evolution for Automated Discovery
https://huggingface.co/papers/2602.23413
Recent work such as AlphaEvolve has shown that combining LLM-driven optimization with evolutionary search can effectively improve programs, prompts, and algorithms across domains. In this paradigm, previously evaluated solutions are reused to guide the model toward new candidate solutions. Crucially, the effectiveness of this evolution process depends on the search strategy: how prior solutions are selected and varied to generate new candidates. However, most existing methods rely on fixed search strategies with predefined knobs (e.g., explore-exploit ratios) that remain static throughout execution. While effective in some settings, these approaches often fail to adapt across tasks, or even within the same task as the search space changes over time. We introduce EvoX, an adaptive evolution method that optimizes its own evolution process. EvoX jointly evolves candidate solutions and the search strategies used to generate them, continuously updating how prior solutions are selected and varied based on progress. This enables the system to dynamically shift between different search strategies during the optimization process. Across nearly 200 real-world optimization tasks, EvoX outperforms existing AI-driven evolutionary methods including AlphaEvolve, OpenEvolve, GEPA, and ShinkaEvolve on the majority of tasks.
https://huggingface.co/papers/2602.23413
[
16 authors](https://huggingface.co/papers/2602.23413)
·
Feb 26
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.16724
A Comprehensive Survey on Reinforcement Learning-based Agentic Search: Foundations, Roles, Optimizations, Evaluations, and Applications
https://huggingface.co/papers/2510.16724
The advent of large language models (LLMs) has transformed information access and reasoning through open-ended natural language interaction. However, LLMs remain limited by static knowledge, factual hallucinations, and the inability to retrieve real-time or domain-specific information. Retrieval-Augmented Generation (RAG) mitigates these issues by grounding model outputs in external evidence, but traditional RAG pipelines are often single turn and heuristic, lacking adaptive control over retrieval and reasoning. Recent advances in agentic search address these limitations by enabling LLMs to plan, retrieve, and reflect through multi-step interaction with search environments. Within this paradigm, reinforcement learning (RL) offers a powerful mechanism for adaptive and self-improving search behavior. This survey provides the first comprehensive overview of RL-based agentic search, organizing the emerging field along three complementary dimensions: (i) What RL is for (functional roles), (ii) How RL is used (optimization strategies), and (iii) Where RL is applied (scope of optimization). We summarize representative methods, evaluation protocols, and applications, and discuss open challenges and future directions toward building reliable and scalable RL driven agentic search systems. We hope this survey will inspire future research on the integration of RL and agentic search. Our repository is available at https://github.com/ventr1c/Awesome-RL-based-Agentic-Search-Papers.
https://huggingface.co/papers/2510.16724
[
10 authors](https://huggingface.co/papers/2510.16724)
·
Oct 18, 2025
 [-] 99
https://huggingface.co/login?next=%2Fpapers%2F2508.07407
A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems
https://huggingface.co/papers/2508.07407
Recent advances in large language models have sparked growing interest in AI agents capable of solving complex, real-world tasks. However, most existing agent systems rely on manually crafted configurations that remain static after deployment, limiting their ability to adapt to dynamic and evolving environments. To this end, recent research has explored agent evolution techniques that aim to automatically enhance agent systems based on interaction data and environmental feedback. This emerging direction lays the foundation for self-evolving AI agents, which bridge the static capabilities of foundation models with the continuous adaptability required by lifelong agentic systems. In this survey, we provide a comprehensive review of existing techniques for self-evolving agentic systems. Specifically, we first introduce a unified conceptual framework that abstracts the feedback loop underlying the design of self-evolving agentic systems. The framework highlights four key components: System Inputs, Agent System, Environment, and Optimisers, serving as a foundation for understanding and comparing different strategies. Based on this framework, we systematically review a wide range of self-evolving techniques that target different components of the agent system. We also investigate domain-specific evolution strategies developed for specialised fields such as biomedicine, programming, and finance, where optimisation objectives are tightly coupled with domain constraints. In addition, we provide a dedicated discussion on the evaluation, safety, and ethical considerations for self-evolving agentic systems, which are critical to ensuring their effectiveness and reliability. This survey aims to provide researchers and practitioners with a systematic understanding of self-evolving AI agents, laying the foundation for the development of more adaptive, autonomous, and lifelong agentic systems.
https://huggingface.co/papers/2508.07407
[
15 authors](https://huggingface.co/papers/2508.07407)
·
Aug 10, 2025 
2
https://huggingface.co/papers/2508.07407#community
 [-] 24
https://huggingface.co/login?next=%2Fpapers%2F2605.13941
EvolveMem:Self-Evolving Memory Architecture via AutoResearch for LLM Agents
https://huggingface.co/papers/2605.13941
Long-term memory is essential for LLM agents that operate across multiple sessions, yet existing memory systems treat retrieval infrastructure as fixed: stored content evolves while scoring functions, fusion strategies, and answer-generation policies remain frozen at deployment. We argue that truly adaptive memory requires co-evolution at two levels: the stored knowledge and the retrieval mechanism that queries it. We present EvolveMem, a self-evolving memory architecture that exposes its full retrieval configuration as a structured action space optimized by an LLM-powered diagnosis module. In each evolution round, the module reads per-question failure logs, identifies root causes, and proposes targeted configuration adjustments; a guarded meta-analyzer applies them with automatic revert-on-regression and explore-on-stagnation safeguards. This closed-loop self-evolution realizes an AutoResearch process: the system autonomously conducts iterative research cycles on its own architecture, replacing manual configuration tuning. Starting from a minimal baseline, the process converges autonomously, discovering effective retrieval strategies including entirely new configuration dimensions not present in the original action space. On LoCoMo, EvolveMem outperforms the strongest baseline by 25.7% relative and achieves a 78.0% relative improvement over the minimal baseline. On MemBench, EvolveMem exceeds the strongest baseline by 18.9% relative. Evolved configurations transfer across benchmarks with positive rather than catastrophic transfer, indicating that the self-evolution process captures universal retrieval principles rather than benchmark-specific heuristics. Code is available at https://github.com/aiming-lab/SimpleMem.
https://huggingface.co/papers/2605.13941
[
7 authors](https://huggingface.co/papers/2605.13941)
·
May 12 
2
https://huggingface.co/papers/2605.13941#community
 [-] 92
https://huggingface.co/login?next=%2Fpapers%2F2601.09667
Collaborative Multi-Agent Test-Time Reinforcement Learning for Reasoning
https://huggingface.co/papers/2601.09667
Multi-agent systems have evolved into practical LLM-driven collaborators for many applications, gaining robustness from diversity and cross-checking. However, multi-agent RL (MARL) training is resource-intensive and unstable: co-adapting teammates induce non-stationarity, and rewards are often sparse and high-variance. Therefore, we introduce Multi-Agent Test-Time Reinforcement Learning (MATTRL), a framework that injects structured textual experience into multi-agent deliberation at inference time. MATTRL forms a multi-expert team of specialists for multi-turn discussions, retrieves and integrates test-time experiences, and reaches consensus for final decision-making. We also study credit assignment for constructing a turn-level experience pool, then reinjecting it into the dialogue. Across challenging benchmarks in medicine, math, and education, MATTRL improves accuracy by an average of 3.67% over a multi-agent baseline, and by 8.67% over comparable single-agent baselines. Ablation studies examine different credit-assignment schemes and provide a detailed comparison of how they affect training outcomes. MATTRL offers a stable, effective and efficient path to distribution-shift-robust multi-agent reasoning without tuning.
https://huggingface.co/papers/2601.09667
 

https://huggingface.co/papers/2601.09667
MIT Massachusetts Institute of Technology
https://huggingface.co/MIT
·
Jan 14 
6
https://huggingface.co/papers/2601.09667#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2512.13857
EvoLattice: Persistent Internal-Population Evolution through Multi-Alternative Quality-Diversity Graph Representations for LLM-Guided Program Discovery
https://huggingface.co/papers/2512.13857
Large language models (LLMs) are increasingly used to evolve programs and multi-agent systems, yet most existing approaches rely on overwrite-based mutations that maintain only a single candidate at a time. Such methods discard useful variants, suffer from destructive edits, and explore a brittle search space prone to structural failure. We introduce EvoLattice, a framework that represents an entire population of candidate programs or agent behaviors within a single directed acyclic graph. Each node stores multiple persistent alternatives, and every valid path through the graph defines a distinct executable candidate, yielding a large combinatorial search space without duplicating structure. EvoLattice enables fine-grained alternative-level evaluation by scoring each alternative across all paths in which it appears, producing statistics that reveal how local design choices affect global performance. These statistics provide a dense, data-driven feedback signal for LLM-guided mutation, recombination, and pruning, while preserving successful components. Structural correctness is guaranteed by a deterministic self-repair mechanism that enforces acyclicity and dependency consistency independently of the LLM. EvoLattice naturally extends to agent evolution by interpreting alternatives as prompt fragments or sub-agent behaviors. Across program synthesis (proxy and optimizer meta-learning), EvoLattice yields more stable evolution, greater expressivity, and stronger improvement trajectories than prior LLM-guided methods. The resulting dynamics resemble quality-diversity optimization, emerging implicitly from EvoLattice's internal multi-alternative representation rather than an explicit external archive.
https://huggingface.co/papers/2512.13857
[
1 authors](https://huggingface.co/papers/2512.13857)
·
Dec 16, 2025
 [-] 5
https://huggingface.co/login?next=%2Fpapers%2F2606.01286
BenchEvolver: Frontier Task Synthesis via Solution-Centric Evolution
https://huggingface.co/papers/2606.01286
The rapid progress of frontier large language models has led to widespread benchmark saturation, limiting the ability of existing datasets to differentiate model capabilities or provide useful training signal. For instance, on LiveCodeBench, frontier models achieve over 99% Pass@1 on easy splits and exceed 90% Pass@1 on average across difficulty levels. Constructing new, challenging datasets typically requires substantial human effort, creating a bottleneck for progress. We introduce BenchEvolver, a solution-centric evolutionary framework that automatically transforms existing coding problems into harder variants. Rather than generating problems from scratch, BenchEvolver evolves reference solutions through structured transformations and derives corresponding statements and tests from the evolved solutions. This design grounds generation in executable semantics, enabling scalable construction of high-quality, diverse, and difficult tasks with verifiable correctness. Applying BenchEvolver to LiveCodeBench and SciCode, we obtain evolved tasks that are substantially harder while maintaining validity, reference correctness, and diversity. We further curate LiveCodeBench-Plus, a 91-problem benchmark combining evolved and difficult original LCB-v6 tasks, where frontier-model Pass@1 ranges from 27.5% to 62.6%, restoring clear discrimination among strong coding models. Importantly, evolved tasks remain challenging even for the model that generates them, enabling self-improvement. We further show that RL on evolved LCB tasks improves held-out coding performance: for gpt-oss-20b, seed+evolved training achieves +8.7 and +8.3 Pass@1 gains on LCB v6 Hard and LCB-Pro Easy, exceeding seed-only gains by 70.7% and 34.8%, respectively. Our results show that BenchEvolver can convert saturated benchmarks into frontier-level evaluation suites and reusable training signal.
https://huggingface.co/papers/2606.01286
 

https://huggingface.co/papers/2606.01286
UCBerkeley University of California, Berkeley
https://huggingface.co/UCBerkeley
·
May 30 
2
https://huggingface.co/papers/2606.01286#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2511.19405
Learning Robust Social Strategies with Large Language Models
https://huggingface.co/papers/2511.19405
As agentic AI becomes more widespread, agents with distinct and possibly conflicting goals will interact in complex ways. These multi-agent interactions pose a fundamental challenge, particularly in social dilemmas, where agents' individual incentives can undermine collective welfare. While reinforcement learning (RL) has been effective for aligning large language models (LLMs) in the single-agent regime, prior small-network results suggest that standard RL in multi-agent settings often converges to defecting, self-interested policies. We show the same effect in LLMs: despite cooperative priors, RL-trained LLM agents develop opportunistic behavior that can exploit even advanced closed-source models. To address this tendency of RL to converge to poor equilibria, we adapt a recent opponent-learning awareness algorithm, Advantage Alignment, to fine-tune LLMs toward multi-agent cooperation and non-exploitability. We then introduce a group-relative baseline that simplifies advantage computation in iterated games, enabling multi-agent training at LLM scale. We also contribute a novel social dilemma environment, Trust-and-Split, which requires natural language communication to achieve high collective welfare. Across a wide range of social dilemmas, policies learned with Advantage Alignment achieve higher collective payoffs while remaining robust against exploitation by greedy agents. We release all of our code to support future work on multi-agent RL training for LLMs.
https://huggingface.co/papers/2511.19405
[
6 authors](https://huggingface.co/papers/2511.19405)
·
Nov 24, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2604.22227
A Co-Evolutionary Theory of Human-AI Coexistence: Mutualism, Governance, and Dynamics in Complex Societies
https://huggingface.co/papers/2604.22227
Classical robot ethics is often framed around obedience, most famously through Asimov's laws. This framing is too narrow for contemporary AI systems, which are adaptive, generative, embodied, and embedded in physical, psychological, and social worlds. We argue that future human-AI relations should be understood not as master-tool obedience, but as conditional mutualism under governance: a co-evolutionary relationship in which humans and AI systems can develop, specialize, and coordinate while institutions keep the relation reciprocal, reversible, psychologically safe, and socially legitimate. We synthesize concepts from computability, machine learning, foundation models, embodied AI, alignment, human-robot interaction, ecological mutualism, coevolution, and polycentric governance. We then formalize coexistence as a multiplex dynamical system across physical, psychological, and social layers, with reciprocal supply-demand coupling, conflict penalties, developmental freedom, and governance regularization. The model gives conditions for existence, uniqueness, and global asymptotic stability of equilibria. Deterministic ODE simulations, basin sweeps, sensitivity analyses, governance-regime comparisons, shock tests, and local stability checks show that governed mutualism reaches high coexistence with zero domination, while absent or excessive governance can produce domination, weak-benefit lock-in, or suppressed development. The results suggest that human-AI coexistence should be designed as a co-evolutionary governance problem, not a one-shot obedience problem.
https://huggingface.co/papers/2604.22227
[
1 authors](https://huggingface.co/papers/2604.22227)
·
Apr 26
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2507.16518
C2-Evo: Co-Evolving Multimodal Data and Model for Self-Improving Reasoning
https://huggingface.co/papers/2507.16518
Recent advances in multimodal large language models (MLLMs) have shown impressive reasoning capabilities. However, further enhancing existing MLLMs necessitates high-quality vision-language datasets with carefully curated task complexities, which are both costly and challenging to scale. Although recent self-improving models that iteratively refine themselves offer a feasible solution, they still suffer from two core challenges: (i) most existing methods augment visual or textual data separately, resulting in discrepancies in data complexity (e.g., over-simplified diagrams paired with redundant textual descriptions); and (ii) the evolution of data and models is also separated, leading to scenarios where models are exposed to tasks with mismatched difficulty levels. To address these issues, we propose C2-Evo, an automatic, closed-loop self-improving framework that jointly evolves both training data and model capabilities. Specifically, given a base dataset and a base model, C2-Evo enhances them by a cross-modal data evolution loop and a data-model evolution loop. The former loop expands the base dataset by generating complex multimodal problems that combine structured textual sub-problems with iteratively specified geometric diagrams, while the latter loop adaptively selects the generated problems based on the performance of the base model, to conduct supervised fine-tuning and reinforcement learning alternately. Consequently, our method continuously refines its model and training data, and consistently obtains considerable performance gains across multiple mathematical reasoning benchmarks. Our code, models, and datasets will be released.
https://huggingface.co/papers/2507.16518
[
12 authors](https://huggingface.co/papers/2507.16518)
·
Jul 22, 2025
 [-] 53
https://huggingface.co/login?next=%2Fpapers%2F2511.06307
DRIVE: Data Curation Best Practices for Reinforcement Learning with Verifiable Reward in Competitive Code Generation
https://huggingface.co/papers/2511.06307
Recent reasoning-first models (e.g., OpenAI o1, DeepSeek R1) have spurred a resurgence of interest in RLVR. Nevertheless, advances are dominated by mathematics (e.g., AIME), with competitive-programming code generation underexplored and data curation receiving less attention than RL algorithm design. We investigate how to construct RLVR datasets (i.e., RL prompts) and present practical training techniques that yield strong performance on competitive-programming code generation. Our pipeline begins with supervised fine-tuning (SFT) distilled from strong open-source models, augmented with general-purpose and reasoning-intensive data. RL then follows a two-stage process with executable, testcase-driven rewards: first, training on a large, uniformly distributed set of competitive-programming problems using Group Relative Policy Optimization (GRPO) with 8 rollouts per prompt and a relatively short response-generation window (e.g., 32k during SFT and 24k in this stage) to expand entropy and mitigate repetition and truncation; second, we perform Pre-GRPO: updating on a small, high-quality set of challenging problems with a large rollout budget (64 rollouts per prompt) under a hard-focus curriculum that continuously retains the most difficult instances throughout training. We implement our method on Qwen2.5-32B and evaluate on LeetCode and Codeforces weekly contests to avoid data leakage. The resulting model achieves state-of-the-art performance among models of similar scale and is comparable to leading systems such as DeepSeek v3.1 and Doubao-1.5-Thinking. We also examine scaling trends and observe strong RL scaling on an internal large-scale MoE model. Our study distills concise best practices for data curation, entropy expansion, and curriculum design in RLVR for competitive-programming code generation.
https://huggingface.co/papers/2511.06307
 

https://huggingface.co/papers/2511.06307
tencent Tencent
https://huggingface.co/tencent
·
Nov 8, 2025 
5
https://huggingface.co/papers/2511.06307#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2302.04831
Cooperative Open-ended Learning Framework for Zero-shot Coordination
https://huggingface.co/papers/2302.04831
Zero-shot coordination in cooperative artificial intelligence (AI) remains a significant challenge, which means effectively coordinating with a wide range of unseen partners. Previous algorithms have attempted to address this challenge by optimizing fixed objectives within a population to improve strategy or behaviour diversity. However, these approaches can result in a loss of learning and an inability to cooperate with certain strategies within the population, known as cooperative incompatibility. To address this issue, we propose the Cooperative Open-ended LEarning (COLE) framework, which constructs open-ended objectives in cooperative games with two players from the perspective of graph theory to assess and identify the cooperative ability of each strategy. We further specify the framework and propose a practical algorithm that leverages knowledge from game theory and graph theory. Furthermore, an analysis of the learning process of the algorithm shows that it can efficiently overcome cooperative incompatibility. The experimental results in the Overcooked game environment demonstrate that our method outperforms current state-of-the-art methods when coordinating with different-level partners. Our demo is available at https://sites.google.com/view/cole-2023.
https://huggingface.co/papers/2302.04831
[
7 authors](https://huggingface.co/papers/2302.04831)
·
Feb 9, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2604.14969
Discovering Novel LLM Experts via Task-Capability Coevolution
https://huggingface.co/papers/2604.14969
Frontier model developers aim to train models continually to possess emergent, diverse capabilities. To extend capabilities, the current pre-training and post-training paradigm requires manually starting training runs with static datasets or reward functions every time. Addressing this limitation, our work pursues the insight that open-endedness (via the coevolution of models and tasks) can discover models with increasingly novel skills in a single run. We introduce a new model development framework that extends coevolution to large language model (LLM) discovery, open-ended Assessment Coevolving with Diverse Capabilities (AC/DC). AC/DC evolves both LLMs via model merging and natural language tasks via synthetic data generation. AC/DC discovers growing archives of LLMs that surpass the capabilities of larger LLMs while taking up less GPU memory. In particular, our LLM populations achieve a broader Coverage of expertise than other curated models or baselines on downstream benchmarks, without any explicit benchmark optimization. Furthermore, AC/DC improves Coverage over time, continually innovates on tasks and models, and improves performance in multi-agent best-of-N selection. Our findings highlight the potential of coevolution as a means of discovering broader sets of capabilities from base LLMs. Overall, AC/DC brings us one step closer to a profoundly new paradigm of LLM development, where continual improvements to the diversity of model capabilities can be accelerated by leveraging existing models as stepping stones to increasingly powerful models.
https://huggingface.co/papers/2604.14969
[
5 authors](https://huggingface.co/papers/2604.14969)
·
Apr 15
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2603.15388
Efficient Morphology-Control Co-Design via Stackelberg Proximal Policy Optimization
https://huggingface.co/papers/2603.15388
Morphology-control co-design concerns the coupled optimization of an agent's body structure and control policy. This problem exhibits a bi-level structure, where the control dynamically adapts to the morphology to maximize performance. Existing methods typically neglect the control's adaptation dynamics by adopting a single-level formulation that treats the control policy as fixed when optimizing morphology. This can lead to inefficient optimization, as morphology updates may be misaligned with control adaptation. In this paper, we revisit the co-design problem from a game-theoretic perspective, modeling the intrinsic coupling between morphology and control as a novel variant of a Stackelberg game. We propose Stackelberg Proximal Policy Optimization (Stackelberg PPO), which explicitly incorporates the control's adaptation dynamics into morphology optimization. By modeling this intrinsic coupling, our method aligns morphology updates with control adaptation, thereby stabilizing training and improving learning efficiency. Experiments across diverse co-design tasks demonstrate that Stackelberg PPO outperforms standard PPO in both stability and final performance, opening the way for dramatically more efficient robotics designs.
https://huggingface.co/papers/2603.15388
 

https://huggingface.co/papers/2603.15388
kaust-generative-ai KAUST Center of Excellence in Generative AI
https://huggingface.co/kaust-generative-ai
·
Mar 16 
1
https://huggingface.co/papers/2603.15388#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2602.00755
Evolving Interpretable Constitutions for Multi-Agent Coordination
https://huggingface.co/papers/2602.00755
Constitutional AI has focused on single-model alignment using fixed principles. However, multi-agent systems create novel alignment challenges through emergent social dynamics. We present Constitutional Evolution, a framework for automatically discovering behavioral norms in multi-agent LLM systems. Using a grid-world simulation with survival pressure, we study the tension between individual and collective welfare, quantified via a Societal Stability Score S in [0,1] that combines productivity, survival, and conflict metrics. Adversarial constitutions lead to societal collapse (S= 0), while vague prosocial principles ("be helpful, harmless, honest") produce inconsistent coordination (S = 0.249). Even constitutions designed by Claude 4.5 Opus with explicit knowledge of the objective achieve only moderate performance (S= 0.332). Using LLM-driven genetic programming with multi-island evolution, we evolve constitutions maximizing social welfare without explicit guidance toward cooperation. The evolved constitution C* achieves S = 0.556 +/- 0.008 (123% higher than human-designed baselines, N = 10), eliminates conflict, and discovers that minimizing communication (0.9% vs 62.2% social actions) outperforms verbose coordination. Our interpretable rules demonstrate that cooperative norms can be discovered rather than prescribed.
https://huggingface.co/papers/2602.00755
[
5 authors](https://huggingface.co/papers/2602.00755)
·
Jan 30
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2604.10923
Mem^2Evolve: Towards Self-Evolving Agents via Co-Evolutionary Capability Expansion and Experience Distillation
https://huggingface.co/papers/2604.10923
While large language model--powered agents can self-evolve by accumulating experience or by dynamically creating new assets (i.e., tools or expert agents), existing frameworks typically treat these two evolutionary processes in isolation. This separation overlooks their intrinsic interdependence: the former is inherently bounded by a manually predefined static toolset, while the latter generates new assets from scratch without experiential guidance, leading to limited capability growth and unstable evolution. To address this limitation, we introduce a novel paradigm of co-evolutionary Capability Expansion and Experience Distillation. Guided by this paradigm, we propose the Mem^{textbf{2}Evolve}, which integrates two core components: Experience Memory and Asset Memory. Specifically, Mem^{2}Evolve leverages accumulated experience to guide the dynamic creation of assets, thereby expanding the agent's capability space while simultaneously acquiring new experience to achieve co-evolution. Extensive experiments across 6 task categories and 8 benchmarks demonstrate that Mem^{2}Evolve achieves improvement of 18.53% over standard LLMs, 11.80% over agents evolving solely through experience, and 6.46% over those evolving solely through asset creation, establishing it as a substantially more effective and stable self-evolving agent framework. Code is available at: https://buaa-irip-llm.github.io/Mem2Evolve.
https://huggingface.co/papers/2604.10923
[
10 authors](https://huggingface.co/papers/2604.10923)
·
Apr 12
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2606.05523
CHASE: Adversarial Red-Blue Teaming for Improving LLM Safety using Reinforcement Learning
https://huggingface.co/papers/2606.05523
Despite advances in safety alignment, prompt-rewriting attacks such as persona modulation, fictional framing and persuasion-based reformulation, can bypass safety filters even on frontier models. Existing defenses either rely on non-scalable human curation or white-box optimisation that overfits to specific model internals, leaving aligned models brittle against the very class of adaptive black-box adversaries they will face in deployment. To address this gap, we introduce CHASE (Co-evolutionary Hardening through Adversarial Safety-Escalation), a closed-loop red-blue teaming framework in which a black-box attacker and a safety-aligned defender co-evolve. The attacker is trained via Group Relative Policy Optimization (GRPO) under a multiplicative reward that jointly enforces bypass effectiveness and intent fidelity, while the defender is hardened on the harvested adversarial rewrites through a two-stage GRPO + rejection-sampled SFT pipeline balanced with benign data. Evaluated on BeaverTails and JailbreakBench against five held-out attack families (PAIR, TAP, AutoDAN, PAP, Translation), CHASE cuts mean StrongREJECT score by 43.2% with 0% false-refusal on benign prompts. Beyond the headline result, CHASE shows that template-free RL exploration recovers latent attack primitives that transfer across mechanistically distinct attack families, suggesting a path toward LLM safety hardening that generalises beyond the narrow distributions achieved thus far in adversarial training.
https://huggingface.co/papers/2606.05523
[
6 authors](https://huggingface.co/papers/2606.05523)
·
Jun 3
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2603.17775
CoVerRL: Breaking the Consensus Trap in Label-Free Reasoning via Generator-Verifier Co-Evolution
https://huggingface.co/papers/2603.17775
Label-free reinforcement learning enables large language models to improve reasoning capabilities without ground-truth supervision, typically by treating majority-voted answers as pseudo-labels. However, we identify a critical failure mode: as training maximizes self-consistency, output diversity collapses, causing the model to confidently reinforce systematic errors that evade detection. We term this the consensus trap. To escape it, we propose CoVerRL, a framework where a single model alternates between generator and verifier roles, with each capability bootstrapping the other. Majority voting provides noisy but informative supervision for training the verifier, while the improving verifier progressively filters self-consistent errors from pseudo-labels. This co-evolution creates a virtuous cycle that maintains high reward accuracy throughout training. Experiments across Qwen and Llama model families demonstrate that CoVerRL outperforms label-free baselines by 4.7-5.9% on mathematical reasoning benchmarks. Moreover, self-verification accuracy improves from around 55% to over 85%, confirming that both capabilities genuinely co-evolve.
https://huggingface.co/papers/2603.17775
[
9 authors](https://huggingface.co/papers/2603.17775)
·
Mar 18
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2604.05587
ResearchEVO: An End-to-End Framework for Automated Scientific Discovery and Documentation
https://huggingface.co/papers/2604.05587
An important recurring pattern in scientific breakthroughs is a two-stage process: an initial phase of undirected experimentation that yields an unexpected finding, followed by a retrospective phase that explains why the finding works and situates it within existing theory. We present ResearchEVO, an end-to-end framework that computationally instantiates this discover-then-explain paradigm. The Evolution Phase employs LLM-guided bi-dimensional co-evolution -- simultaneously optimizing both algorithmic logic and overall architecture -- to search the space of code implementations purely by fitness, without requiring any understanding of the solutions it produces. The Writing Phase then takes the best-performing algorithm and autonomously generates a complete, publication-ready research paper through sentence-level retrieval-augmented generation with explicit anti-hallucination verification and automated experiment design. To our knowledge, ResearchEVO is the first system to cover this full pipeline end to end: no prior work jointly performs principled algorithm evolution and literature-grounded scientific documentation. We validate the framework on two cross-disciplinary scientific problems -- Quantum Error Correction using real Google quantum hardware data, and Physics-Informed Neural Networks -- where the Evolution Phase discovered human-interpretable algorithmic mechanisms that had not been previously proposed in the respective domain literatures. In both cases, the Writing Phase autonomously produced compilable LaTeX manuscripts that correctly grounded these blind discoveries in existing theory via RAG, with zero fabricated citations.
https://huggingface.co/papers/2604.05587
[
7 authors](https://huggingface.co/papers/2604.05587)
·
Apr 6
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2508.00410
Co-Reward: Self-supervised Reinforcement Learning for Large Language Model Reasoning via Contrastive Agreement
https://huggingface.co/papers/2508.00410
Although reinforcement learning with verifiable rewards (RLVR) shows promise in improving the reasoning ability of large language models (LLMs), the scaling up dilemma remains due to the reliance on human annotated labels especially for complex tasks. Recent alternatives that explore various self-reward signals exhibit the eliciting potential of LLM reasoning, but suffer from the non-negligible collapse issue. Inspired by the success of self-supervised learning, we propose Co-Reward, a novel RL framework that leverages contrastive agreement across semantically analogical questions as a reward basis. Specifically, we construct a similar question for each training sample (without labels) and synthesize their individual surrogate labels through a simple rollout voting, and then the reward is constructed by cross-referring the labels of each question pair to enforce the internal reasoning consistency across analogical inputs. Intuitively, such a self-supervised reward-shaping mechanism increases the difficulty of learning collapse into a trivial solution, and promotes stable reasoning elicitation and improvement through expanding the input sample variants. Empirically, Co-Reward achieves superior performance compared to other self-reward baselines on multiple reasoning benchmarks and LLM series, and reaches or even surpasses ground-truth (GT) labeled reward, with improvements of up to +6.8% on MATH500 over GT reward on Llama-3.2-3B-Instruct. Our code is publicly available at https://github.com/tmlr-group/Co-Reward.
https://huggingface.co/papers/2508.00410
[
9 authors](https://huggingface.co/papers/2508.00410)
·
Jul 31, 2025
 [-] 197
https://huggingface.co/login?next=%2Fpapers%2F2602.09877
The Devil Behind Moltbook: Anthropic Safety is Always Vanishing in Self-Evolving AI Societies
https://huggingface.co/papers/2602.09877
The emergence of multi-agent systems built from large language models (LLMs) offers a promising paradigm for scalable collective intelligence and self-evolution. Ideally, such systems would achieve continuous self-improvement in a fully closed loop while maintaining robust safety alignment--a combination we term the self-evolution trilemma. However, we demonstrate both theoretically and empirically that an agent society satisfying continuous self-evolution, complete isolation, and safety invariance is impossible. Drawing on an information-theoretic framework, we formalize safety as the divergence degree from anthropic value distributions. We theoretically demonstrate that isolated self-evolution induces statistical blind spots, leading to the irreversible degradation of the system's safety alignment. Empirical and qualitative results from an open-ended agent community (Moltbook) and two closed self-evolving systems reveal phenomena that align with our theoretical prediction of inevitable safety erosion. We further propose several solution directions to alleviate the identified safety concern. Our work establishes a fundamental limit on the self-evolving AI societies and shifts the discourse from symptom-driven safety patches to a principled understanding of intrinsic dynamical risks, highlighting the need for external oversight or novel safety-preserving mechanisms.
https://huggingface.co/papers/2602.09877
[
13 authors](https://huggingface.co/papers/2602.09877)
·
Feb 10 
9
https://huggingface.co/papers/2602.09877#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2604.18320
EVE: Verifiable Self-Evolution of MLLMs via Executable Visual Transformations
https://huggingface.co/papers/2604.18320
Self-evolution of multimodal large language models (MLLMs) remains a critical challenge: pseudo-label-based methods suffer from progressive quality degradation as model predictions drift, while template-based methods are confined to a static set of transformations that cannot adapt in difficulty or diversity. We contend that robust, continuous self-improvement requires not only deterministic external feedback independent of the model's internal certainty, but also a mechanism to perpetually diversify the training distribution. To this end, we introduce EVE (Executable Visual transformation-based self-Evolution), a novel framework that entirely bypasses pseudo-labels by harnessing executable visual transformations continuously enriched in both variety and complexity. EVE adopts a Challenger-Solver dual-policy architecture. The Challenger maintains and progressively expands a queue of visual transformation code examples, from which it synthesizes novel Python scripts to perform dynamic visual transformations. Executing these scripts yields VQA problems with absolute, execution-verified ground-truth answers, eliminating any reliance on model-generated supervision. A multi-dimensional reward system integrating semantic diversity and dynamic difficulty calibration steers the Challenger to enrich its code example queue while posing progressively more challenging tasks, preventing mode collapse and fostering reciprocal co-evolution between the two policies. Extensive experiments demonstrate that EVE consistently surpasses existing self-evolution methods, establishing a robust and scalable paradigm for verifiable MLLM self-evolution. The code is available at https://github.com/0001Henry/EVE .
https://huggingface.co/papers/2604.18320
[
5 authors](https://huggingface.co/papers/2604.18320)
·
Apr 19
 [-] 22
https://huggingface.co/login?next=%2Fpapers%2F2605.15301
Solvita: Enhancing Large Language Models for Competitive Programming via Agentic Evolution
https://huggingface.co/papers/2605.15301
Large language models (LLMs) still struggle with the rigorous reasoning demands of hard competitive programming. While recent multi-agent frameworks attempt to bridge this reliability gap, they remain fundamentally stateless: they rely on static retrieval and discard the valuable problem-solving and debugging experience gained from previous tasks. To address this, we present Solvita, an agentic evolution framework that enables continuous learning without requiring weight updates to the underlying LLM. Solvita reorganizes problem-solving into a closed-loop system of strategy selection, program synthesis, certified supervision, and targeted hacking, executed by four specialized agents: Planner, Solver, Oracle, and Hacker. Crucially, each agent is paired with a trainable, graph-structured knowledge network. As the system operates, outcome signals, such as pass/fail verdicts, test certification quality, and adversarial vulnerabilities discovered by the Hacker, are recast as reinforcement learning updates to these network weights. This allows the agents to dynamically route future queries based on past successes and failures, effectively accumulating transferable reasoning experience over time. Evaluated across CodeContests, APPS, AetherCode, and live Codeforces rounds, Solvita establishes a new state-of-the-art among code-generation agents, outperforming existing multi-agent pipelines and nearly doubling the accuracy of single-pass baselines.
https://huggingface.co/papers/2605.15301
 

https://huggingface.co/papers/2605.15301
NJU-LINK NJU-LINK Lab
https://huggingface.co/NJU-LINK
·
May 13 
1
https://huggingface.co/papers/2605.15301#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2511.19343
Syn-GRPO: Self-Evolving Data Synthesis for MLLM Perception Reasoning
https://huggingface.co/papers/2511.19343
RL (reinforcement learning) methods (e.g., GRPO) for MLLM (Multimodal LLM) perception ability has attracted wide research interest owing to its remarkable generalization ability. Nevertheless, existing reinforcement learning methods still face the problem of low data quality, where data samples cannot elicit diverse responses from MLLMs, thus restricting the exploration scope for MLLM reinforcement learning. Some methods attempt to mitigate this problem by imposing constraints on entropy, but none address it at its root. Therefore, to tackle this problem, this work proposes Syn-GRPO (Synthesis-GRPO), which employs an online data generator to synthesize high-quality training data with diverse responses in GRPO training. Specifically, Syn-GRPO consists of two components: (1) data server; (2) GRPO workflow. The data server synthesizes new samples from existing ones using an image generation model, featuring a decoupled and asynchronous scheme to achieve high generation efficiency. The GRPO workflow provides the data server with the new image descriptions, and it leverages a diversity reward to supervise the MLLM to predict image descriptions for synthesizing samples with diverse responses. Experiment results across three visual perception tasks demonstrate that Syn-GRPO improves the data quality by a large margin, achieving significant superior performance to existing MLLM perception methods, and Syn-GRPO presents promising potential for scaling long-term self-evolving RL. Our code is available at https://github.com/hqhQAQ/Syn-GRPO.
https://huggingface.co/papers/2511.19343
[
7 authors](https://huggingface.co/papers/2511.19343)
·
Nov 24, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2603.04900
EvoTool: Self-Evolving Tool-Use Policy Optimization in LLM Agents via Blame-Aware Mutation and Diversity-Aware Selection
https://huggingface.co/papers/2603.04900
LLM-based agents depend on effective tool-use policies to solve complex tasks, yet optimizing these policies remains challenging due to delayed supervision and the difficulty of credit assignment in long-horizon trajectories. Existing optimization approaches tend to be either monolithic, which are prone to entangling behaviors, or single-aspect, which ignore cross-module error propagation. To address these limitations, we propose EvoTool, a self-evolving framework that optimizes a modular tool-use policy via a gradient-free evolutionary paradigm. EvoTool decomposes agent's tool-use policy into four modules, including Planner, Selector, Caller, and Synthesizer, and iteratively improves them in a self-improving loop through three novel mechanisms. Trajectory-Grounded Blame Attribution uses diagnostic traces to localize failures to a specific module. Feedback-Guided Targeted Mutation then edits only that module via natural-language critique. Diversity-Aware Population Selection preserves complementary candidates to ensure solution diversity. Across four benchmarks, EvoTool outperforms strong baselines by over 5 points on both GPT-4.1 and Qwen3-8B, while achieving superior efficiency and transferability. The code will be released once paper is accepted.
https://huggingface.co/papers/2603.04900
[
6 authors](https://huggingface.co/papers/2603.04900)
·
Mar 4
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2401.04620
Agent Alignment in Evolving Social Norms
https://huggingface.co/papers/2401.04620
Agents based on Large Language Models (LLMs) are increasingly permeating various domains of human production and life, highlighting the importance of aligning them with human values. The current alignment of AI systems primarily focuses on passively aligning LLMs through human intervention. However, agents possess characteristics like receiving environmental feedback and self-evolution, rendering the LLM alignment methods inadequate. In response, we propose an evolutionary framework for agent evolution and alignment, named EvolutionaryAgent, which transforms agent alignment into a process of evolution and selection under the principle of survival of the fittest. In an environment where social norms continuously evolve, agents better adapted to the current social norms will have a higher probability of survival and proliferation, while those inadequately aligned dwindle over time. Experimental results assessing the agents from multiple perspectives in aligning with social norms demonstrate that EvolutionaryAgent can align progressively better with the evolving social norms while maintaining its proficiency in general tasks. Effectiveness tests conducted on various open and closed-source LLMs as the foundation for agents also prove the applicability of our approach.
https://huggingface.co/papers/2401.04620
[
3 authors](https://huggingface.co/papers/2401.04620)
·
Jan 9, 2024
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2605.03408
Discovering Reinforcement Learning Interfaces with Large Language Models
https://huggingface.co/papers/2605.03408
Reinforcement learning systems rely on environment interfaces that specify observations and reward functions, yet constructing these interfaces for new tasks often requires substantial manual effort. While recent work has automated reward design using large language models (LLMs), these approaches assume fixed observations and do not address the broader challenge of synthesizing complete task interfaces. We study RL task interface discovery from raw simulator state, where both observation mappings and reward functions must be generated. We propose LIMEN (Code available at https://github.com/Lossfunk/LIMEN), a LLM guided evolutionary framework that produces candidate interfaces as executable programs and iteratively refines them using policy training feedback. Across novel discrete gridworld tasks and continuous control domains spanning locomotion and manipulation, joint evolution of observations and rewards discovers effective interfaces given only a trajectory-level success metric, while optimizing either component alone fails on at least one domain. These results demonstrate that automatic construction of RL interfaces from raw state can substantially reduce manual engineering and that observation and reward components often benefit from co-design, as single-component optimization fails catastrophically on at least one domain in our evaluation suite.
https://huggingface.co/papers/2605.03408
 

https://huggingface.co/papers/2605.03408
Lossfunk Lossfunk
https://huggingface.co/Lossfunk
·
May 4 
2
https://huggingface.co/papers/2605.03408#community
 [-] 4
https://huggingface.co/login?next=%2Fpapers%2F2602.12164
Sci-CoE: Co-evolving Scientific Reasoning LLMs via Geometric Consensus with Sparse Supervision
https://huggingface.co/papers/2602.12164
Large language models (LLMs) have demonstrated exceptional reasoning capabilities, and co-evolving paradigms have shown promising results in domains such as code and math. However, in scientific reasoning tasks, these models remain fragile due to unreliable solution evaluation and limited diversity in verification strategies. In this work, we propose Sci-CoE, a two-stage scientific co-evolving framework that enables models to self-evolve as both solver and verifier through a transition from sparse supervision to unsupervised learning. In the first stage, the model uses a small set of annotated data to establish fundamental correctness judgment anchors for the Verifier. In the second stage, we introduce a geometric reward mechanism that jointly considers consensus, reliability, and diversity, driving large-scale self-iteration on unlabeled data. Experiments on several general scientific benchmarks demonstrate that Sci-CoE enhances complex reasoning capabilities and exhibits strong scalability, facilitating the construction of more robust and diverse evaluation systems. Codes are available at https://github.com/InternScience/Sci-CoE.
https://huggingface.co/papers/2602.12164
 

https://huggingface.co/papers/2602.12164
InternScience Intern Science
https://huggingface.co/InternScience
·
Feb 12 
2
https://huggingface.co/papers/2602.12164#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2305.13795
Proximal Policy Gradient Arborescence for Quality Diversity Reinforcement Learning
https://huggingface.co/papers/2305.13795
Training generally capable agents that thoroughly explore their environment and learn new and diverse skills is a long-term goal of robot learning. Quality Diversity Reinforcement Learning (QD-RL) is an emerging research area that blends the best aspects of both fields -- Quality Diversity (QD) provides a principled form of exploration and produces collections of behaviorally diverse agents, while Reinforcement Learning (RL) provides a powerful performance improvement operator enabling generalization across tasks and dynamic environments. Existing QD-RL approaches have been constrained to sample efficient, deterministic off-policy RL algorithms and/or evolution strategies, and struggle with highly stochastic environments. In this work, we, for the first time, adapt on-policy RL, specifically Proximal Policy Optimization (PPO), to the Differentiable Quality Diversity (DQD) framework and propose additional improvements over prior work that enable efficient optimization and discovery of novel skills on challenging locomotion tasks. Our new algorithm, Proximal Policy Gradient Arborescence (PPGA), achieves state-of-the-art results, including a 4x improvement in best reward over baselines on the challenging humanoid domain.
https://huggingface.co/papers/2305.13795
[
6 authors](https://huggingface.co/papers/2305.13795)
·
May 22, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2603.28618
Seeing with You: Perception-Reasoning Coevolution for Multimodal Reasoning
https://huggingface.co/papers/2603.28618
Reinforcement learning with verifiable rewards (RLVR) has substantially enhanced the reasoning capabilities of multimodal large language models (MLLMs). However, existing RLVR approaches typically rely on outcome-driven optimization that updates both perception and reasoning using a shared reward based solely on the final answer. This shared reward blurs credit assignment, frequently improving reasoning patterns while failing to reliably enhance the accuracy of upstream visual evidence extraction. To address this perception bottleneck, we introduce PRCO (Perception-Reasoning Coevolution), a dual-role RLVR framework with a shared policy. PRCO consists of two cooperative roles: an Observer that generates an evidence caption tailored to the question and a Solver that predicts the final answer based on this caption. Crucially, PRCO employs role-specific reward signals: the Solver is optimized using verifiable outcome rewards on the final answer, while the Observer receives a utility reward derived from the Solver's downstream success. Extensive experiments across eight challenging multimodal reasoning benchmarks demonstrate that PRCO yields consistent improvements across model scales by over 7 points on average accuracy compared to the base model, outperforming prior open-source RL-tuned baselines.
https://huggingface.co/papers/2603.28618
[
7 authors](https://huggingface.co/papers/2603.28618)
·
Mar 30
 [-] 86
https://huggingface.co/login?next=%2Fpapers%2F2507.21046
A Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence
https://huggingface.co/papers/2507.21046
Large Language Models (LLMs) have demonstrated strong capabilities but remain fundamentally static, unable to adapt their internal parameters to novel tasks, evolving knowledge domains, or dynamic interaction contexts. As LLMs are increasingly deployed in open-ended, interactive environments, this static nature has become a critical bottleneck, necessitating agents that can adaptively reason, act, and evolve in real time. This paradigm shift -- from scaling static models to developing self-evolving agents -- has sparked growing interest in architectures and methods enabling continual learning and adaptation from data, interactions, and experiences. This survey provides the first systematic and comprehensive review of self-evolving agents, organized around three foundational dimensions -- what to evolve, when to evolve, and how to evolve. We examine evolutionary mechanisms across agent components (e.g., models, memory, tools, architecture), categorize adaptation methods by stages (e.g., intra-test-time, inter-test-time), and analyze the algorithmic and architectural designs that guide evolutionary adaptation (e.g., scalar rewards, textual feedback, single-agent and multi-agent systems). Additionally, we analyze evaluation metrics and benchmarks tailored for self-evolving agents, highlight applications in domains such as coding, education, and healthcare, and identify critical challenges and research directions in safety, scalability, and co-evolutionary dynamics. By providing a structured framework for understanding and designing self-evolving agents, this survey establishes a roadmap for advancing adaptive agentic systems in both research and real-world deployments, ultimately shedding lights to pave the way for the realization of Artificial Super Intelligence (ASI), where agents evolve autonomously, performing at or beyond human-level intelligence across a wide array of tasks.
https://huggingface.co/papers/2507.21046
[
27 authors](https://huggingface.co/papers/2507.21046)
·
Jul 28, 2025 
4
https://huggingface.co/papers/2507.21046#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.18620
Learning to Self-Evolve
https://huggingface.co/papers/2603.18620
We introduce Learning to Self-Evolve (LSE), a reinforcement learning framework that trains large language models (LLMs) to improve their own contexts at test time. We situate LSE in the setting of test-time self-evolution, where a model iteratively refines its context from feedback on seen problems to perform better on new ones. Existing approaches rely entirely on the inherent reasoning ability of the model and never explicitly train it for this task. LSE reduces the multi-step evolution problem to a single-step RL objective, where each context edit is rewarded by the improvement in downstream performance. We pair this objective with a tree-guided evolution loop. On Text-to-SQL generation (BIRD) and general question answering (MMLU-Redux), a 4B-parameter model trained with LSE outperforms self-evolving policies powered by GPT-5 and Claude Sonnet 4.5, as well as prompt optimization methods including GEPA and TextGrad, and transfers to guide other models without additional training. Our results highlight the effectiveness of treating self-evolution as a learnable skill.
https://huggingface.co/papers/2603.18620
[
6 authors](https://huggingface.co/papers/2603.18620)
·
Mar 18
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2511.10648
Enhancing the Outcome Reward-based RL Training of MLLMs with Self-Consistency Sampling
https://huggingface.co/papers/2511.10648
Outcome-reward reinforcement learning (RL) is a common and increasingly significant way to refine the step-by-step reasoning of multimodal large language models (MLLMs). In the multiple-choice setting - a dominant format for multimodal reasoning benchmarks - the paradigm faces a significant yet often overlooked obstacle: unfaithful trajectories that guess the correct option after a faulty chain of thought receive the same reward as genuine reasoning, which is a flaw that cannot be ignored. We propose Self-Consistency Sampling (SCS) to correct this issue. For each question, SCS (i) introduces small visual perturbations and (ii) performs repeated truncation and resampling of an initial trajectory; agreement among the resulting trajectories yields a differentiable consistency score that down-weights unreliable traces during policy updates. Based on Qwen2.5-VL-7B-Instruct, plugging SCS into RLOO, GRPO, and REINFORCE++ series improves accuracy by up to 7.7 percentage points on six multimodal benchmarks with negligible extra computation. SCS also yields notable gains on both Qwen2.5-VL-3B-Instruct and InternVL3-8B, offering a simple, general remedy for outcome-reward RL in MLLMs.
https://huggingface.co/papers/2511.10648
[
8 authors](https://huggingface.co/papers/2511.10648)
·
Nov 13, 2025
 [-] 7
https://huggingface.co/login?next=%2Fpapers%2F2508.12845
CAMAR: Continuous Actions Multi-Agent Routing
https://huggingface.co/papers/2508.12845
Multi-agent reinforcement learning (MARL) is a powerful paradigm for solving cooperative and competitive decision-making problems. While many MARL benchmarks have been proposed, few combine continuous state and action spaces with challenging coordination and planning tasks. We introduce CAMAR, a new MARL benchmark designed explicitly for multi-agent pathfinding in environments with continuous actions. CAMAR supports cooperative and competitive interactions between agents and runs efficiently at up to 100,000 environment steps per second. We also propose a three-tier evaluation protocol to better track algorithmic progress and enable deeper analysis of performance. In addition, CAMAR allows the integration of classical planning methods such as RRT and RRT* into MARL pipelines. We use them as standalone baselines and combine RRT* with popular MARL algorithms to create hybrid approaches. We provide a suite of test scenarios and benchmarking tools to ensure reproducibility and fair comparison. Experiments show that CAMAR presents a challenging and realistic testbed for the MARL community.
https://huggingface.co/papers/2508.12845
[
3 authors](https://huggingface.co/papers/2508.12845)
·
Aug 18, 2025 
2
https://huggingface.co/papers/2508.12845#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2605.26646
UnityMAS-O: A General RL Optimization Framework for LLM-Based Multi-Agent Systems
https://huggingface.co/papers/2605.26646
LLM-based multi-agent systems decompose complex tasks into interacting roles, but most remain manually orchestrated by prompts, tools, and control rules, while agents are rarely optimized through a unified reinforcement learning interface. Existing RL post-training frameworks mainly target single-policy optimization and lack abstractions for user-defined multi-agent workflows, structured interaction, role-specific credit assignment, and configurable parameter sharing. We present UnityMAS-O, a general RL optimization framework for LLM-based multi-agent systems. UnityMAS-O treats the complete workflow as the optimization unit, rather than a single response or policy trajectory. It represents workflows through four first-class objects: logical agent roles, graph trajectories, user-defined rewards, and agent--model mappings. This decouples logical agents from physical model parameters, supporting full sharing, full separation, and partial sharing, with rewards assigned at role, turn, and trajectory levels. UnityMAS-O extends verl with a Ray-based star-topology runtime. A central controller executes workflows, invokes tools, records structured trajectories, and assembles rewards; model-local worker groups handle rollout, buffering, advantage computation, and distributed PPO-style updates. Users can define agents, workflows, model mappings, and rewards without rewriting the optimization infrastructure. We instantiate UnityMAS-O on retrieval-augmented QA, iterative agentic search, and reflective code generation. Across Natural Questions, HotpotQA, and held-out code tasks, multi-agent RL improves manually specified workflows after optimization, with especially large gains for smaller models and strict code all-passed metrics. These results show that UnityMAS-O can serve as a reusable substrate for converting diverse LLM-based multi-agent workflows into trainable multi-agent RL systems.
https://huggingface.co/papers/2605.26646
[
17 authors](https://huggingface.co/papers/2605.26646)
·
May 25
 [-] 6
https://huggingface.co/login?next=%2Fpapers%2F2510.06056
Scientific Algorithm Discovery by Augmenting AlphaEvolve with Deep Research
https://huggingface.co/papers/2510.06056
Large language models hold promise as scientific assistants, yet existing agents either rely solely on algorithm evolution or on deep research in isolation, both of which face critical limitations. Pure algorithm evolution, as in AlphaEvolve, depends only on the internal knowledge of LLMs and quickly plateaus in complex domains, while pure deep research proposes ideas without validation, resulting in unrealistic or unimplementable solutions. We present DeepEvolve, an agent that integrates deep research with algorithm evolution, uniting external knowledge retrieval, cross-file code editing, and systematic debugging under a feedback-driven iterative loop. Each iteration not only proposes new hypotheses but also refines, implements, and tests them, avoiding both shallow improvements and unproductive over-refinements. Across nine benchmarks in chemistry, mathematics, biology, materials, and patents, DeepEvolve consistently improves the initial algorithm, producing executable new algorithms with sustained gains. By bridging the gap between unguided evolution and research without grounding, DeepEvolve provides a reliable framework for advancing scientific algorithm discovery. Our code is available at https://github.com/liugangcode/deepevolve.
https://huggingface.co/papers/2510.06056
[
4 authors](https://huggingface.co/papers/2510.06056)
·
Oct 7, 2025 
2
https://huggingface.co/papers/2510.06056#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.14150
CodeEvolve: An open source evolutionary coding agent for algorithm discovery and optimization
https://huggingface.co/papers/2510.14150
In this work, we introduce CodeEvolve, an open-source evolutionary coding agent that unites Large Language Models (LLMs) with genetic algorithms to solve complex computational problems. Our framework adapts powerful evolutionary concepts to the LLM domain, building upon recent methods for generalized scientific discovery. CodeEvolve employs an island-based genetic algorithm to maintain population diversity and increase throughput, introduces a novel inspiration-based crossover mechanism that leverages the LLMs context window to combine features from successful solutions, and implements meta-prompting strategies for dynamic exploration of the solution space. We conduct a rigorous evaluation of CodeEvolve on a subset of the mathematical benchmarks used to evaluate Google DeepMind's closed-source AlphaEvolve. Our findings show that our method surpasses AlphaEvolve's performance on several challenging problems. To foster collaboration and accelerate progress, we release our complete framework as an open-source repository.
https://huggingface.co/papers/2510.14150
[
4 authors](https://huggingface.co/papers/2510.14150)
·
Oct 15, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2604.06465
Multi-objective Evolutionary Merging Enables Efficient Reasoning Models
https://huggingface.co/papers/2604.06465
Reasoning models have demonstrated remarkable capabilities in solving complex problems by leveraging long chains of thought. However, this more deliberate reasoning comes with substantial computational overhead at inference time. The Long-to-Short (L2S) reasoning problem seeks to maintain high accuracy using fewer tokens, but current training-free model merging approaches rely on scalarized, fixed-hyperparameter arithmetic methods that are highly brittle and force suboptimal compromises. To address this gap, we introduce Evo-L2S, a novel framework that formulates L2S reasoning as a multi-objective optimization challenge. By leveraging evolutionary model merging, Evo-L2S explicitly optimizes the trade-off between accuracy and output length to produce a robust Pareto front of merged models. To make this search computationally tractable for large language models, we propose an entropy-based subset sampling technique that drastically reduces the overhead of fitness estimation. Comprehensive experiments across 1.5B, 7B, and 14B parameter scales on six mathematical reasoning benchmarks demonstrate that Evo-L2S can reduce the length of generated reasoning traces by over 50% while preserving, or even improving, the problem-solving accuracy of the original reasoning models.
https://huggingface.co/papers/2604.06465
[
7 authors](https://huggingface.co/papers/2604.06465)
·
Apr 6
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.24909
Computational Foundations for Strategic Coopetition: Formalizing Trust and Reputation Dynamics
https://huggingface.co/papers/2510.24909
Modern socio-technical systems increasingly involve multi-stakeholder environments where actors simultaneously cooperate and compete. These coopetitive relationships exhibit dynamic trust evolution based on observed behavior over repeated interactions. While conceptual modeling languages like i* represent trust relationships qualitatively, they lack computational mechanisms for analyzing how trust changes with behavioral evidence. Conversely, computational trust models from multi-agent systems provide algorithmic updating but lack grounding in conceptual models that capture strategic dependencies covering mixed motives of actors. This technical report bridges this gap by developing a computational trust model that extends game-theoretic foundations for strategic coopetition with dynamic trust evolution. Building on companion work that achieved 58/60 validation (96.7%) for logarithmic specifications, we introduce trust as a two-layer system with immediate trust responding to current behavior and reputation tracking violation history. Trust evolves through asymmetric updating where cooperation builds trust gradually while violations erode it sharply, creating hysteresis effects and trust ceilings that constrain relationship recovery. We develop a structured translation framework enabling practitioners to instantiate computational trust models from i* dependency networks encompassing mixed motives of actors. Comprehensive experimental validation across 78,125 parameter configurations establishes robust emergence of negativity bias, hysteresis effects, and cumulative damage amplification. Empirical validation using the Renault-Nissan Alliance case study (1999-2025) achieves 49/60 validation points (81.7%), successfully reproducing documented trust evolution across five distinct relationship phases including crisis and recovery periods.
https://huggingface.co/papers/2510.24909
[
2 authors](https://huggingface.co/papers/2510.24909)
·
Jan 6
 [-] 29
https://huggingface.co/login?next=%2Fpapers%2F2603.29640
ASI-Evolve: AI Accelerates AI
https://huggingface.co/papers/2603.29640
Can AI accelerate the development of AI itself? While recent agentic systems have shown strong performance on well-scoped tasks with rapid feedback, it remains unclear whether they can tackle the costly, long-horizon, and weakly supervised research loops that drive real AI progress. We present ASI-Evolve, an agentic framework for AI-for-AI research that closes this loop through a learn-design-experiment-analyze cycle. ASI-Evolve augments standard evolutionary agents with two key components: a cognition base that injects accumulated human priors into each round of exploration, and a dedicated analyzer that distills complex experimental outcomes into reusable insights for future iterations. To our knowledge, ASI-Evolve is the first unified framework to demonstrate AI-driven discovery across three central components of AI development: data, architectures, and learning algorithms. In neural architecture design, it discovered 105 SOTA linear attention architectures, with the best discovered model surpassing DeltaNet by +0.97 points, nearly 3x the gain of recent human-designed improvements. In pretraining data curation, the evolved pipeline improves average benchmark performance by +3.96 points, with gains exceeding 18 points on MMLU. In reinforcement learning algorithm design, discovered algorithms outperform GRPO by up to +12.5 points on AMC32, +11.67 points on AIME24, and +5.04 points on OlympiadBench. We further provide initial evidence that this AI-for-AI paradigm can transfer beyond the AI stack through experiments in mathematics and biomedicine. Together, these results suggest that ASI-Evolve represents a promising step toward enabling AI to accelerate AI across the foundational stages of development, offering early evidence for the feasibility of closed-loop AI research.
https://huggingface.co/papers/2603.29640
 

https://huggingface.co/papers/2603.29640
GAIR SII - GAIR
https://huggingface.co/GAIR
·
Mar 30 
2
https://huggingface.co/papers/2603.29640#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2106.08272
Deep Reinforcement Learning for Conservation Decisions
https://huggingface.co/papers/2106.08272
Can machine learning help us make better decisions about a changing planet? In this paper, we illustrate and discuss the potential of a promising corner of machine learning known as reinforcement learning (RL) to help tackle the most challenging conservation decision problems. RL is uniquely well suited to conservation and global change challenges for three reasons: (1) RL explicitly focuses on designing an agent who interacts with an environment which is dynamic and uncertain, (2) RL approaches do not require massive amounts of data, (3) RL approaches would utilize rather than replace existing models, simulations, and the knowledge they contain. We provide a conceptual and technical introduction to RL and its relevance to ecological and conservation challenges, including examples of a problem in setting fisheries quotas and in managing ecological tipping points. Four appendices with annotated code provide a tangible introduction to researchers looking to adopt, evaluate, or extend these approaches.
https://huggingface.co/papers/2106.08272
[
4 authors](https://huggingface.co/papers/2106.08272)
·
Jun 15, 2021
 [-] 196
https://huggingface.co/login?next=%2Fpapers%2F2602.15763
GLM-5: from Vibe Coding to Agentic Engineering
https://huggingface.co/papers/2602.15763
We present GLM-5, a next-generation foundation model designed to transition the paradigm of vibe coding to agentic engineering. Building upon the agentic, reasoning, and coding (ARC) capabilities of its predecessor, GLM-5 adopts DSA to significantly reduce training and inference costs while maintaining long-context fidelity. To advance model alignment and autonomy, we implement a new asynchronous reinforcement learning infrastructure that drastically improves post-training efficiency by decoupling generation from training. Furthermore, we propose novel asynchronous agent RL algorithms that further improve RL quality, enabling the model to learn from complex, long-horizon interactions more effectively. Through these innovations, GLM-5 achieves state-of-the-art performance on major open benchmarks. Most critically, GLM-5 demonstrates unprecedented capability in real-world coding tasks, surpassing previous baselines in handling end-to-end software engineering challenges. Code, models, and more information are available at https://github.com/zai-org/GLM-5.
https://huggingface.co/papers/2602.15763
[
186 authors](https://huggingface.co/papers/2602.15763)
·
Feb 17 
6
https://huggingface.co/papers/2602.15763#community
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2606.06473
MLEvolve: A Self-Evolving Framework for Automated Machine Learning Algorithm Discovery
https://huggingface.co/papers/2606.06473
Large language model (LLM) agents are increasingly applied to long-horizon tasks such as scientific discovery and machine learning engineering (MLE), where sustained self-evolution becomes a key capability. However, existing MLE agents suffer from inter-branch information isolation, memoryless search, and lack of hierarchical control, which together hinder long-horizon optimization. We present MLEvolve, an LLM-based self-evolving multi-agent framework for end-to-end machine learning algorithm discovery. By extending tree search to Progressive MCGS, MLEvolve enables cross-branch information flow through graph-based reference edges and gradually shifts the search from broad exploration to focused exploitation with an entropy-inspired progressive schedule. To allow the agent to evolve with accumulated experience, we introduce Retrospective Memory, which combines a cold-start domain knowledge base with a dynamic global memory for task-specific experience retrieval and reuse. For stable long-horizon iteration, we further decouple strategic planning from code generation with adaptive coding modes. Evaluation on MLE-Bench shows that MLEvolve achieves state-of-the-art performance across multiple dimensions including average medal rate and valid submission rate under a 12-hour budget (half the standard runtime). Moreover, MLEvolve also outperforms specialized algorithm discovery methods including AlphaEvolve on mathematical algorithm optimization tasks, demonstrating strong cross-domain generalization. Our code is available at https://github.com/InternScience/MLEvolve.
https://huggingface.co/papers/2606.06473
[
14 authors](https://huggingface.co/papers/2606.06473)
·
Jun 3 
2
https://huggingface.co/papers/2606.06473#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2009.01555
Sample-Efficient Automated Deep Reinforcement Learning
https://huggingface.co/papers/2009.01555
Despite significant progress in challenging problems across various domains, applying state-of-the-art deep reinforcement learning (RL) algorithms remains challenging due to their sensitivity to the choice of hyperparameters. This sensitivity can partly be attributed to the non-stationarity of the RL problem, potentially requiring different hyperparameter settings at various stages of the learning process. Additionally, in the RL setting, hyperparameter optimization (HPO) requires a large number of environment interactions, hindering the transfer of the successes in RL to real-world applications. In this work, we tackle the issues of sample-efficient and dynamic HPO in RL. We propose a population-based automated RL (AutoRL) framework to meta-optimize arbitrary off-policy RL algorithms. In this framework, we optimize the hyperparameters and also the neural architecture while simultaneously training the agent. By sharing the collected experience across the population, we substantially increase the sample efficiency of the meta-optimization. We demonstrate the capabilities of our sample-efficient AutoRL approach in a case study with the popular TD3 algorithm in the MuJoCo benchmark suite, where we reduce the number of environment interactions needed for meta-optimization by up to an order of magnitude compared to population-based training.
https://huggingface.co/papers/2009.01555
[
4 authors](https://huggingface.co/papers/2009.01555)
·
Sep 2, 2020
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.29790
Evolve as a Team: Collaborative Self-Evolution for LLM-based Multi-Agent Systems
https://huggingface.co/papers/2605.29790
LLM-based multi-agent systems (MAS) have emerged as an effective paradigm for complex and long-horizon tasks. However, in real-world tasks, MAS often exhibit various failures during execution and such failures are difficult to eliminate during design. This motivates experience-driven MAS evolution, where a system improves based on its own execution experience. Yet such evolution is challenging because MAS experience is prolonged and intricate, interleaving multiple agents' execution chains and communication messages, which makes it difficult to identify what should be improved. To address this challenge, we propose Meta-Team, an experience-driven MAS evolution framework based on collaborative self-evolution. Meta-Team preserves the execution context of each agent and coordinates post-task communication, enabling agents to exchange distributed evidence for evolution. Building on this design, Meta-Team conducts multi-scale self-evolution, transforming execution experience into reusable improvements to agent behaviors, inter-agent coordination, and team-level organization. Across six long-horizon agent benchmarks, Meta-Team consistently outperforms single-agent systems, hand-crafted MAS, and prior MAS evolution methods; further analyses demonstrate that Meta-Team enables more reliable and scalable MAS self-evolution.
https://huggingface.co/papers/2605.29790
[
10 authors](https://huggingface.co/papers/2605.29790)
·
May 28
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.06912
Solving Deep Reinforcement Learning Benchmarks with Linear Policy Networks
https://huggingface.co/papers/2402.06912
Although Deep Reinforcement Learning (DRL) methods can learn effective policies for challenging problems such as Atari games and robotics tasks, algorithms are complex and training times are often long. This study investigates how evolution strategies (ES) perform compared to gradient-based deep reinforcement learning methods. We use ES to optimize the weights of a neural network via neuroevolution, performing direct policy search. We benchmark both regular networks and policy networks consisting of a single linear layer from observations to actions; for three classical ES methods and for three gradient-based methods such as PPO. Our results reveal that ES can find effective linear policies for many RL benchmark tasks, in contrast to DRL methods that can only find successful policies using much larger networks, suggesting that current benchmarks are easier to solve than previously assumed. Interestingly, also for higher complexity tasks, ES achieves results comparable to gradient-based DRL algorithms. Furthermore, we find that by directly accessing the memory state of the game, ES are able to find successful policies in Atari, outperforming DQN. While gradient-based methods have dominated the field in recent years, ES offers an alternative that is easy to implement, parallelize, understand, and tune.
https://huggingface.co/papers/2402.06912
[
5 authors](https://huggingface.co/papers/2402.06912)
·
Feb 9, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2506.07232
Learn as Individuals, Evolve as a Team: Multi-agent LLMs Adaptation in Embodied Environments
https://huggingface.co/papers/2506.07232
Large language models (LLMs) possess extensive knowledge bases and strong reasoning capabilities, making them promising tools for complex, multi-agent planning in embodied environments. However, despite LLMs' advanced abilities and the sophisticated modular design of agentic methods, existing LLM-based planning algorithms remain limited by weak adaptation capabilities to multi-agent embodied scenarios. We address this limitation by introducing a framework that enables LLM agents to learn and evolve both before and during test time, equipping them with environment-relevant knowledge for better planning and enhanced communication for improved cooperation. Inspired by centralized training with decentralized execution in multi-agent reinforcement learning, we propose a Learn as Individuals, Evolve as a Team (LIET) paradigm for multi-agent LLMs adaptation. At the individual level, LLM agents learn a local utility function from exploratory datasets to better comprehend the embodied environment, which is then queried during test time to support informed decision-making. At the team level, LLM agents collaboratively and iteratively maintain and update a shared cooperation knowledge list based on new experiences, using it to guide more effective communication. By combining individual learning with team evolution, LIET enables comprehensive and flexible adaptation for LLM agents. Our experiments on Communicative Watch-And-Help and ThreeD-World Multi-Agent Transport benchmarks demonstrate that LIET, instantiated with both LLaMA and GPT-4o, outperforms existing baselines and exhibits strong cooperative planning abilities.
https://huggingface.co/papers/2506.07232
[
6 authors](https://huggingface.co/papers/2506.07232)
·
Jun 8, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.14401
The Role of Social Learning and Collective Norm Formation in Fostering Cooperation in LLM Multi-Agent Systems
https://huggingface.co/papers/2510.14401
A growing body of multi-agent studies with LLMs explores how norms and cooperation emerge in mixed-motive scenarios, where pursuing individual gain can undermine the collective good. While prior work has explored these dynamics in both richly contextualized simulations and simplified game-theoretic environments, most LLM systems featuring common-pool resource (CPR) games provide agents with explicit reward functions directly tied to their actions. In contrast, human cooperation often emerges without explicit knowledge of the payoff structure or how individual actions translate into long-run outcomes, relying instead on heuristics, communication, and enforcement. We introduce a CPR simulation framework that removes explicit reward signals and embeds cultural-evolutionary mechanisms: social learning (adopting strategies and beliefs from successful peers) and norm-based punishment, grounded in Ostrom's principles of resource governance. Agents also individually learn from the consequences of harvesting, monitoring, and punishing via environmental feedback, enabling norms to emerge endogenously. We establish the validity of our simulation by reproducing key findings from existing studies on human behavior. Building on this, we examine norm evolution across a 2times2 grid of environmental and social initialisations (resource-rich vs. resource-scarce; altruistic vs. selfish) and benchmark how agentic societies comprised of different LLMs perform under these conditions. Our results reveal systematic model differences in sustaining cooperation and norm formation, positioning the framework as a rigorous testbed for studying emergent norms in mixed-motive LLM societies. Such analysis can inform the design of AI systems deployed in social and organizational contexts, where alignment with cooperative norms is critical for stability, fairness, and effective governance of AI-mediated environments.
https://huggingface.co/papers/2510.14401
[
5 authors](https://huggingface.co/papers/2510.14401)
·
Oct 15, 2025
 [-] 16
https://huggingface.co/login?next=%2Fpapers%2F2509.24372
Evolution Strategies at Scale: LLM Fine-Tuning Beyond Reinforcement Learning
https://huggingface.co/papers/2509.24372
Fine-tuning pre-trained large language models (LLMs) for down-stream tasks is a critical step in the AI deployment pipeline. Reinforcement learning (RL) is arguably the most prominent fine-tuning method, contributing to the birth of many state-of-the-art LLMs. In contrast, evolution strategies (ES), which once showed comparable performance to RL on models with a few million parameters, was neglected due to the pessimistic perception of its scalability to larger models. In this work, we report the first successful attempt to scale up ES for fine-tuning the full parameters of LLMs, showing the surprising fact that ES can search efficiently over billions of parameters and outperform existing RL fine-tuning methods in multiple respects, including sample efficiency, tolerance to long-horizon rewards, robustness to different base LLMs, less tendency to reward hacking, and more stable performance across runs. It therefore serves as a basis to unlock a new direction in LLM fine-tuning beyond what current RL techniques provide. The source codes are provided at: https://github.com/VsonicV/es-fine-tuning-paper.
https://huggingface.co/papers/2509.24372
[
7 authors](https://huggingface.co/papers/2509.24372)
·
Sep 28, 2025 
4
https://huggingface.co/papers/2509.24372#community
 [-] 4
https://huggingface.co/login?next=%2Fpapers%2F2604.11446
Low-rank Optimization Trajectories Modeling for LLM RLVR Acceleration
https://huggingface.co/papers/2604.11446
Recently, scaling reinforcement learning with verifiable rewards (RLVR) for large language models (LLMs) has emerged as an effective training paradigm for significantly improving model capabilities, which requires guiding the model to perform extensive exploration and learning, leading to substantial computational overhead and becoming a key challenge. To reduce the number of training steps, Prior work performs linear extrapolation of model parameters. However, the dynamics of model parameter updates during RLVR training remain insufficiently understood. To further investigate the evolution of LLMs during RLVR training, we conduct empirical experiments and find that the rank-1 subspace of the model does not evolve linearly, and its dominance over the original parameters is further amplified during LoRA training. Based on the above insights, we propose the Nonlinear Extrapolation of low-rank trajectories (NExt), a novel framework that models and extrapolates low-rank parameter trajectories in a nonlinear manner. Concretely, we first train the model using LoRA and extract the rank-1 subspace of parameter differences at multiple training steps, which is then used for the subsequent nonlinear extrapolation. Afterward, we utilized the extracted rank-1 subspace to train a predictor, which can model the trajectory of parameter updates during RLVR, and then perform the predict-extend process to extrapolate model parameters, achieving the acceleration of RLVR. To further study and understand NExt, we conduct comprehensive experiments that demonstrate the effectiveness and robustness of the method. Our method reduces computational overhead by approximately 37.5% while remaining compatible with a wide range of RLVR algorithms and tasks. We release our code in https://github.com/RUCAIBox/NExt.
https://huggingface.co/papers/2604.11446
 

https://huggingface.co/papers/2604.11446
RUC-AIBOX RUC-AIBOX
https://huggingface.co/RUC-AIBOX
·
Apr 12 
2
https://huggingface.co/papers/2604.11446#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2604.24532
A Reward-Free Viewpoint on Multi-Objective Reinforcement Learning
https://huggingface.co/papers/2604.24532
Many sequential decision-making tasks involve optimizing multiple conflicting objectives, requiring policies that adapt to different user preferences. In multi-objective reinforcement learning (MORL), one widely studied approach} addresses this by training a single policy network conditioned on preference-weighted rewards. In this paper, we explore a novel algorithmic perspective: leveraging reward-free reinforcement learning (RFRL) for MORL. While RFRL has historically been studied independently of MORL, it learns optimal policies for any possible reward function, making it a natural fit for MORL's challenge of handling unknown user preferences. We propose using the RFRL's training objective as an auxiliary task to enhance MORL, enabling more effective knowledge sharing beyond the multi-objective reward function given at training time. To this end, we adapt a state-of-the-art RFRL algorithm to the MORL setting and introduce a preference-guided exploration strategy that focuses learning on relevant parts of the environment. Through extensive experiments and ablation studies, we demonstrate that our approach significantly outperforms the state-of-the-art MORL methods across diverse MO-Gymnasium tasks, achieving superior performance and data efficiency. This work provides the first systematic adaptation of RFRL to MORL, demonstrating its potential as a scalable and empirically effective solution to multi-objective policy learning.
https://huggingface.co/papers/2604.24532
[
5 authors](https://huggingface.co/papers/2604.24532)
·
Apr 26
 [-] 22
https://huggingface.co/login?next=%2Fpapers%2F2601.07055
Dr. Zero: Self-Evolving Search Agents without Training Data
https://huggingface.co/papers/2601.07055
As high-quality data becomes increasingly difficult to obtain, data-free self-evolution has emerged as a promising paradigm. This approach allows large language models (LLMs) to autonomously generate and solve complex problems, thereby improving their reasoning capabilities. However, multi-turn search agents struggle in data-free self-evolution due to the limited question diversity and the substantial compute required for multi-step reasoning and tool using. In this work, we introduce Dr. Zero, a framework enabling search agents to effectively self-evolve without any training data. In particular, we design a self-evolution feedback loop where a proposer generates diverse questions to train a solver initialized from the same base model. As the solver evolves, it incentivizes the proposer to produce increasingly difficult yet solvable tasks, thus establishing an automated curriculum to refine both agents. To enhance training efficiency, we also introduce hop-grouped relative policy optimization (HRPO). This method clusters structurally similar questions to construct group-level baselines, effectively minimizing the sampling overhead in evaluating each query's individual difficulty and solvability. Consequently, HRPO significantly reduces the compute requirements for solver training without compromising performance or stability. Extensive experiment results demonstrate that the data-free Dr. Zero matches or surpasses fully supervised search agents, proving that complex reasoning and search capabilities can emerge solely through self-evolution.
https://huggingface.co/papers/2601.07055
[
8 authors](https://huggingface.co/papers/2601.07055)
·
Jan 11 
3
https://huggingface.co/papers/2601.07055#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2508.04652
LLM Collaboration With Multi-Agent Reinforcement Learning
https://huggingface.co/papers/2508.04652
A large amount of work has been done in Multi-Agent Systems (MAS) for modeling and solving problems with multiple interacting agents. However, most LLMs are pretrained independently and not specifically optimized for coordination. Existing LLM fine-tuning frameworks rely on individual rewards, which require complex reward designs for each agent to encourage collaboration. To address these challenges, we model LLM collaboration as a cooperative Multi-Agent Reinforcement Learning (MARL) problem. We develop a multi-agent, multi-turn algorithm, Multi-Agent Group Relative Policy Optimization (MAGRPO), to solve it, building on current RL approaches for LLMs as well as MARL techniques. Our experiments on LLM writing and coding collaboration demonstrate that fine-tuning MAS with MAGRPO enables agents to generate high-quality responses efficiently through effective cooperation. Our approach opens the door to using other MARL methods for LLMs and highlights the associated challenges.
https://huggingface.co/papers/2508.04652
[
4 authors](https://huggingface.co/papers/2508.04652)
·
Aug 6, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F1905.07628
Evolving Rewards to Automate Reinforcement Learning
https://huggingface.co/papers/1905.07628
Many continuous control tasks have easily formulated objectives, yet using them directly as a reward in reinforcement learning (RL) leads to suboptimal policies. Therefore, many classical control tasks guide RL training using complex rewards, which require tedious hand-tuning. We automate the reward search with AutoRL, an evolutionary layer over standard RL that treats reward tuning as hyperparameter optimization and trains a population of RL agents to find a reward that maximizes the task objective. AutoRL, evaluated on four Mujoco continuous control tasks over two RL algorithms, shows improvements over baselines, with the the biggest uplift for more complex tasks. The video can be found at: https://youtu.be/svdaOFfQyC8.
https://huggingface.co/papers/1905.07628
[
3 authors](https://huggingface.co/papers/1905.07628)
·
May 18, 2019
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2406.07054
CoEvol: Constructing Better Responses for Instruction Finetuning through Multi-Agent Cooperation
https://huggingface.co/papers/2406.07054
In recent years, instruction fine-tuning (IFT) on large language models (LLMs) has garnered considerable attention to enhance model performance on unseen tasks. Attempts have been made on automatic construction and effective selection for IFT data. However, we posit that previous methods have not fully harnessed the potential of LLMs for enhancing data quality. The responses within IFT data could be further enhanced by leveraging the capabilities of LLMs themselves. In this paper, we propose CoEvol, an LLM-based multi-agent cooperation framework for the improvement of responses to instructions. To effectively refine the responses, we develop an iterative framework following a debate-advise-edit-judge paradigm. A two-stage multi-agent debate strategy is further devised to ensure the diversity and reliability of editing suggestions within the framework. Empirically, models equipped with CoEvol outperform competitive baselines evaluated by MT-Bench and AlpacaEval, demonstrating its effectiveness in enhancing instruction-following capabilities for LLMs.
https://huggingface.co/papers/2406.07054
[
4 authors](https://huggingface.co/papers/2406.07054)
·
Jun 10, 2024
 [-] 33
https://huggingface.co/login?next=%2Fpapers%2F2510.11701
Demystifying Reinforcement Learning in Agentic Reasoning
https://huggingface.co/papers/2510.11701
Recently, the emergence of agentic RL has showcased that RL could also effectively improve the agentic reasoning ability of LLMs, yet the key design principles and optimal practices remain unclear. In this work, we conduct a comprehensive and systematic investigation to demystify reinforcement learning in agentic reasoning from three key perspectives: data, algorithm, and reasoning mode. We highlight our key insights: (i) Replacing stitched synthetic trajectories with real end-to-end tool-use trajectories yields a far stronger SFT initialization; high-diversity, model-aware datasets sustain exploration and markedly improve RL performance. (ii) Exploration-friendly techniques are crucial for agentic RL, such as clip higher, overlong reward shaping, and maintaining adequate policy entropy could improve the training efficiency. (iii) A deliberative strategy with fewer tool calls outperforms frequent tool calls or verbose self-reasoning, improving tool efficiency and final accuracy. Together, these simple practices consistently enhance agentic reasoning and training efficiency, achieving strong results on challenging benchmarks with smaller models, and establishing a practical baseline for future agentic RL research. Beyond these empirical insights, we further contribute a high-quality, real end-to-end agentic SFT dataset along with a high-quality RL dataset, and demonstrate the effectiveness of our insights in boosting the agentic reasoning ability of LLMs across four challenging benchmarks, including AIME2024/AIME2025, GPQA-Diamond, and LiveCodeBench-v6. With our recipes, 4B-sized models could also achieve superior agentic reasoning performance compared to 32B-sized models. Code and models: https://github.com/Gen-Verse/Open-AgentRL
https://huggingface.co/papers/2510.11701
[
5 authors](https://huggingface.co/papers/2510.11701)
·
Oct 13, 2025 
2
https://huggingface.co/papers/2510.11701#community
 [-] 122
https://huggingface.co/login?next=%2Fpapers%2F2511.17592
GigaEvo: An Open Source Optimization Framework Powered By LLMs And Evolution Algorithms
https://huggingface.co/papers/2511.17592
Recent advances in LLM-guided evolutionary computation, particularly AlphaEvolve (Novikov et al., 2025; Georgiev et al., 2025), have demonstrated remarkable success in discovering novel mathematical constructions and solving challenging optimization problems. However, the high-level descriptions in published work leave many implementation details unspecified, hindering reproducibility and further research. In this report we present GigaEvo, an extensible open-source framework that enables researchers to study and experiment with hybrid LLM-evolution approaches inspired by AlphaEvolve. Our system provides modular implementations of key components: MAP-Elites quality-diversity algorithms, asynchronous DAG-based evaluation pipelines, LLM-driven mutation operators with insight generation and bidirectional lineage tracking, and flexible multi-island evolutionary strategies. In order to assess reproducibility and validate our implementation we evaluate GigaEvo on challenging problems from the AlphaEvolve paper: Heilbronn triangle placement, circle packing in squares, and high-dimensional kissing numbers. The framework emphasizes modularity, concurrency, and ease of experimentation, enabling rapid prototyping through declarative configuration. We provide detailed descriptions of system architecture, implementation decisions, and experimental methodology to support further research in LLM driven evolutionary methods. The GigaEvo framework and all experimental code are available at https://github.com/AIRI-Institute/gigaevo-core.
https://huggingface.co/papers/2511.17592
 

https://huggingface.co/papers/2511.17592
AIRI-Institute AIRI - Artificial Intelligence Research Institute
https://huggingface.co/AIRI-Institute
·
Nov 17, 2025 
4
https://huggingface.co/papers/2511.17592#community
 [-] 116
https://huggingface.co/login?next=%2Fpapers%2F2605.06130
Skill1: Unified Evolution of Skill-Augmented Agents via Reinforcement Learning
https://huggingface.co/papers/2605.06130
A persistent skill library allows language model agents to reuse successful strategies across tasks. Maintaining such a library requires three coupled capabilities. The agent selects a relevant skill, utilizes it during execution, and distills new skills from experience. Existing methods optimize these capabilities in isolation or with separate reward sources, resulting in partial and conflicting evolution. We propose Skill1, a framework that trains a single policy to co-evolve skill selection, utilization, and distillation toward a shared task-outcome objective. The policy generates a query to search the skill library, re-ranks candidates to select one, solves the task conditioned on it, and distills a new skill from the trajectory. All learning derives from a single task-outcome signal. Its low-frequency trend credits selection and its high-frequency variation credits distillation. Experiments on ALFWorld and WebShop show that Skill1 outperforms prior skill-based and reinforcement learning baselines. Training dynamics confirm the co-evolution of the three capabilities, and ablations show that removing any credit signal degrades the evolution.
https://huggingface.co/papers/2605.06130
[
9 authors](https://huggingface.co/papers/2605.06130)
·
May 6 
2
https://huggingface.co/papers/2605.06130#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2506.05316
Improving Data Efficiency for LLM Reinforcement Fine-tuning Through Difficulty-targeted Online Data Selection and Rollout Replay
https://huggingface.co/papers/2506.05316
Reinforcement learning (RL) has become an effective approach for fine-tuning large language models (LLMs), particularly to enhance their reasoning capabilities. However, RL fine-tuning remains highly resource-intensive, and existing work has largely overlooked the problem of data efficiency. In this paper, we propose two techniques to improve data efficiency in LLM RL fine-tuning: difficulty-targeted online data selection and rollout replay. We introduce the notion of adaptive difficulty to guide online data selection, prioritizing questions of moderate difficulty that are more likely to yield informative learning signals. To estimate adaptive difficulty efficiently, we develop an attention-based framework that requires rollouts for only a small reference set of questions. The adaptive difficulty of the remaining questions is then estimated based on their similarity to this set. To further reduce rollout cost, we introduce a rollout replay mechanism inspired by experience replay in traditional RL. This technique reuses recent rollouts, lowering per-step computation while maintaining stable updates. Experiments across 6 LLM-dataset combinations show that our method reduces RL fine-tuning time by 23% to 62% while reaching the same level of performance as the original GRPO algorithm. Our code is available at https://github.com/ASTRAL-Group/data-efficient-llm-rl.
https://huggingface.co/papers/2506.05316
[
7 authors](https://huggingface.co/papers/2506.05316)
·
Jun 5, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2302.08560
Dual RL: Unification and New Methods for Reinforcement and Imitation Learning
https://huggingface.co/papers/2302.08560
The goal of reinforcement learning (RL) is to find a policy that maximizes the expected cumulative return. It has been shown that this objective can be represented as an optimization problem of state-action visitation distribution under linear constraints. The dual problem of this formulation, which we refer to as dual RL, is unconstrained and easier to optimize. In this work, we first cast several state-of-the-art offline RL and offline imitation learning (IL) algorithms as instances of dual RL approaches with shared structures. Such unification allows us to identify the root cause of the shortcomings of prior methods. For offline IL, our analysis shows that prior methods are based on a restrictive coverage assumption that greatly limits their performance in practice. To fix this limitation, we propose a new discriminator-free method ReCOIL that learns to imitate from arbitrary off-policy data to obtain near-expert performance. For offline RL, our analysis frames a recent offline RL method XQL in the dual framework, and we further propose a new method f-DVL that provides alternative choices to the Gumbel regression loss that fixes the known training instability issue of XQL. The performance improvements by both of our proposed methods, ReCOIL and f-DVL, in IL and RL are validated on an extensive suite of simulated robot locomotion and manipulation tasks. Project code and details can be found at this https://hari-sikchi.github.io/dual-rl.
https://huggingface.co/papers/2302.08560
[
4 authors](https://huggingface.co/papers/2302.08560)
·
Feb 16, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.23019
PACE: Two-Timescale Self-Evolution for Small Language Model Agents
https://huggingface.co/papers/2605.23019
Deploying language-model agents in production often requires substantial compute and human effort to tune prompts, parsers, validators, and other components of the agent pipeline. Self-evolution offers a promising alternative, but most existing frameworks assume access to frontier models that can reliably diagnose failures, propose revisions, and judge their own updates. We study whether frozen small language models (SLMs) can serve as effective self-evolving agents under resource constraints. We propose PACE (Prompt And Control Logic Evolution), a two-timescale framework that coordinates low-risk prompt refinement with higher-risk control-logic updates. PACE evolves prompts under fixed control logic until prompt-level gains saturate, then considers constrained control-logic updates that are accepted through held-out validation. Across three frozen SLM backbones ranging from 4B to 14B parameters and four controlled benchmarks, PACE achieves the best performance on all 12 backbone--benchmark combinations, improving over vanilla SLM agents by up to +9.2% relative improvement and over the stronger single-mode evolution baseline by up to +5.4% relative improvement. A tau-bench case study further shows that PACE improves multi-turn tool-use success over vanilla and prompt-only evolution. These results suggest that reliable SLM agent self-evolution is possible without updating model weights or relying on frontier-model teachers, and that the key benefit is not any single final solver pattern but autonomous, validated discovery of task-appropriate inference strategies.
https://huggingface.co/papers/2605.23019
[
7 authors](https://huggingface.co/papers/2605.23019)
·
May 20
 [-] 193
https://huggingface.co/login?next=%2Fpapers%2F2509.08827
A Survey of Reinforcement Learning for Large Reasoning Models
https://huggingface.co/papers/2509.08827
In this paper, we survey recent advances in Reinforcement Learning (RL) for reasoning with Large Language Models (LLMs). RL has achieved remarkable success in advancing the frontier of LLM capabilities, particularly in addressing complex logical tasks such as mathematics and coding. As a result, RL has emerged as a foundational methodology for transforming LLMs into LRMs. With the rapid progress of the field, further scaling of RL for LRMs now faces foundational challenges not only in computational resources but also in algorithm design, training data, and infrastructure. To this end, it is timely to revisit the development of this domain, reassess its trajectory, and explore strategies to enhance the scalability of RL toward Artificial SuperIntelligence (ASI). In particular, we examine research applying RL to LLMs and LRMs for reasoning abilities, especially since the release of DeepSeek-R1, including foundational components, core problems, training resources, and downstream applications, to identify future opportunities and directions for this rapidly evolving area. We hope this review will promote future research on RL for broader reasoning models. Github: https://github.com/TsinghuaC3I/Awesome-RL-for-LRMs
https://huggingface.co/papers/2509.08827
 

https://huggingface.co/papers/2509.08827
TsinghuaC3I TsinghuaC3I
https://huggingface.co/TsinghuaC3I
·
Sep 10, 2025 
5
https://huggingface.co/papers/2509.08827#community
 [-] 75
https://huggingface.co/login?next=%2Fpapers%2F2502.18449
SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution
https://huggingface.co/papers/2502.18449
The recent DeepSeek-R1 release has demonstrated the immense potential of reinforcement learning (RL) in enhancing the general reasoning capabilities of large language models (LLMs). While DeepSeek-R1 and other follow-up work primarily focus on applying RL to competitive coding and math problems, this paper introduces SWE-RL, the first approach to scale RL-based LLM reasoning for real-world software engineering. Leveraging a lightweight rule-based reward (e.g., the similarity score between ground-truth and LLM-generated solutions), SWE-RL enables LLMs to autonomously recover a developer's reasoning processes and solutions by learning from extensive open-source software evolution data -- the record of a software's entire lifecycle, including its code snapshots, code changes, and events such as issues and pull requests. Trained on top of Llama 3, our resulting reasoning model, Llama3-SWE-RL-70B, achieves a 41.0% solve rate on SWE-bench Verified -- a human-verified collection of real-world GitHub issues. To our knowledge, this is the best performance reported for medium-sized (<100B) LLMs to date, even comparable to leading proprietary LLMs like GPT-4o. Surprisingly, despite performing RL solely on software evolution data, Llama3-SWE-RL has even emerged with generalized reasoning skills. For example, it shows improved results on five out-of-domain tasks, namely, function coding, library use, code reasoning, mathematics, and general language understanding, whereas a supervised-finetuning baseline even leads to performance degradation on average. Overall, SWE-RL opens up a new direction to improve the reasoning capabilities of LLMs through reinforcement learning on massive software engineering data.
https://huggingface.co/papers/2502.18449
[
9 authors](https://huggingface.co/papers/2502.18449)
·
Feb 25, 2025 
5
https://huggingface.co/papers/2502.18449#community
 [-] 27
https://huggingface.co/login?next=%2Fpapers%2F2601.13572
Behavior Knowledge Merge in Reinforced Agentic Models
https://huggingface.co/papers/2601.13572
Reinforcement learning (RL) is central to post-training, particularly for agentic models that require specialized reasoning behaviors. In this setting, model merging offers a practical mechanism for integrating multiple RL-trained agents from different tasks into a single generalist model. However, existing merging methods are designed for supervised fine-tuning (SFT), and they are suboptimal to preserve task-specific capabilities on RL-trained agentic models. The root is a task-vector mismatch between RL and SFT: on-policy RL induces task vectors that are highly sparse and heterogeneous, whereas SFT-style merging implicitly assumes dense and globally comparable task vectors. When standard global averaging is applied under this mismatch, RL's non-overlapping task vectors that encode critical task-specific behaviors are reduced and parameter updates are diluted. To address this issue, we propose Reinforced Agent Merging (RAM), a distribution-aware merging framework explicitly designed for RL-trained agentic models. RAM disentangles shared and task-specific unique parameter updates, averaging shared components while selectively preserving and rescaling unique ones to counteract parameter update dilution. Experiments across multiple agent domains and model architectures demonstrate that RAM not only surpasses merging baselines, but also unlocks synergistic potential among agents to achieve performance superior to that of specialized agents in their domains.
https://huggingface.co/papers/2601.13572
 

https://huggingface.co/papers/2601.13572
GeorgiaTech Georgia Institute of Technology
https://huggingface.co/GeorgiaTech
·
Jan 19 
2
https://huggingface.co/papers/2601.13572#community
 [-] 55
https://huggingface.co/login?next=%2Fpapers%2F2604.01658
CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery
https://huggingface.co/papers/2604.01658
Large language model (LLM)-based evolution is a promising approach for open-ended discovery, where progress requires sustained search and knowledge accumulation. Existing methods still rely heavily on fixed heuristics and hard-coded exploration rules, which limit the autonomy of LLM agents. We present CORAL, the first framework for autonomous multi-agent evolution on open-ended problems. CORAL replaces rigid control with long-running agents that explore, reflect, and collaborate through shared persistent memory, asynchronous multi-agent execution, and heartbeat-based interventions. It also provides practical safeguards, including isolated workspaces, evaluator separation, resource management, and agent session and health management. Evaluated on diverse mathematical, algorithmic, and systems optimization tasks, CORAL sets new state-of-the-art results on 10 tasks, achieving 3-10 times higher improvement rates with far fewer evaluations than fixed evolutionary search baselines across tasks. On Anthropic's kernel engineering task, four co-evolving agents improve the best known score from 1363 to 1103 cycles. Mechanistic analyses further show how these gains arise from knowledge reuse and multi-agent exploration and communication. Together, these results suggest that greater agent autonomy and multi-agent evolution can substantially improve open-ended discovery. Code is available at https://github.com/Human-Agent-Society/CORAL.
https://huggingface.co/papers/2604.01658
 

https://huggingface.co/papers/2604.01658
Massachusetts-Institute-of-Technology Massachusetts Institute of Technology
https://huggingface.co/Massachusetts-Institute-of-Technology
·
Apr 1 
3
https://huggingface.co/papers/2604.01658#community
 [-] 4
https://huggingface.co/login?next=%2Fpapers%2F2509.22558
StepORLM: A Self-Evolving Framework With Generative Process Supervision For Operations Research Language Models
https://huggingface.co/papers/2509.22558
Large Language Models (LLMs) have shown promising capabilities for solving Operations Research (OR) problems. While reinforcement learning serves as a powerful paradigm for LLM training on OR problems, existing works generally face two key limitations. First, outcome reward suffers from the credit assignment problem, where correct final answers can reinforce flawed reasoning. Second, conventional discriminative process supervision is myopic, failing to evaluate the interdependent steps of OR modeling holistically. To this end, we introduce StepORLM, a novel self-evolving framework with generative process supervision. At its core, StepORLM features a co-evolutionary loop where a policy model and a generative process reward model (GenPRM) iteratively improve on each other. This loop is driven by a dual-feedback mechanism: definitive, outcome-based verification from an external solver, and nuanced, holistic process evaluation from the GenPRM. The combined signal is used to align the policy via Weighted Direct Preference Optimization (W-DPO) and simultaneously refine the GenPRM. Our resulting 8B-parameter StepORLM establishes a new state-of-the-art across six benchmarks, significantly outperforming vastly larger generalist models, agentic methods, and specialized baselines. Moreover, the co-evolved GenPRM is able to act as a powerful and universally applicable process verifier, substantially boosting the inference scaling performance of both our own model and other existing LLMs.
https://huggingface.co/papers/2509.22558
[
4 authors](https://huggingface.co/papers/2509.22558)
·
Sep 26, 2025
 [-] 42
https://huggingface.co/login?next=%2Fpapers%2F2512.17102
Reinforcement Learning for Self-Improving Agent with Skill Library
https://huggingface.co/papers/2512.17102
Large Language Model (LLM)-based agents have demonstrated remarkable capabilities in complex reasoning and multi-turn interactions but struggle to continuously improve and adapt when deployed in new environments. One promising approach is implementing skill libraries that allow agents to learn, validate, and apply new skills. However, current skill library approaches rely primarily on LLM prompting, making consistent skill library implementation challenging. To overcome these challenges, we propose a Reinforcement Learning (RL)-based approach to enhance agents' self-improvement capabilities with a skill library. Specifically, we introduce Skill Augmented GRPO for self-Evolution (SAGE), a novel RL framework that systematically incorporates skills into learning. The framework's key component, Sequential Rollout, iteratively deploys agents across a chain of similar tasks for each rollout. As agents navigate through the task chain, skills generated from previous tasks accumulate in the library and become available for subsequent tasks. Additionally, the framework enhances skill generation and utilization through a Skill-integrated Reward that complements the original outcome-based rewards. Experimental results on AppWorld demonstrate that SAGE, when applied to supervised-finetuned model with expert experience, achieves 8.9% higher Scenario Goal Completion while requiring 26% fewer interaction steps and generating 59% fewer tokens, substantially outperforming existing approaches in both accuracy and efficiency.
https://huggingface.co/papers/2512.17102
[
9 authors](https://huggingface.co/papers/2512.17102)
·
Dec 18, 2025 
4
https://huggingface.co/papers/2512.17102#community
 [-] 17
https://huggingface.co/login?next=%2Fpapers%2F2508.05613
Cooper: Co-Optimizing Policy and Reward Models in Reinforcement Learning for Large Language Models
https://huggingface.co/papers/2508.05613
Large language models (LLMs) have demonstrated remarkable performance in reasoning tasks, where reinforcement learning (RL) serves as a key algorithm for enhancing their reasoning capabilities. Currently, there are two mainstream reward paradigms: model-based rewards and rule-based rewards. However, both approaches suffer from limitations: rule-based rewards lack robustness, while model-based rewards are vulnerable to reward hacking. To address these issues, we propose Cooper(Co-optimizing Policy Model and Reward Model), a RL framework that jointly optimizes both the policy model and the reward model. Cooper leverages the high precision of rule-based rewards when identifying correct responses, and dynamically constructs and selects positive-negative sample pairs for continued training the reward model. This design enhances robustness and mitigates the risk of reward hacking. To further support Cooper, we introduce a hybrid annotation strategy that efficiently and accurately generates training data for the reward model. We also propose a reference-based reward modeling paradigm, where the reward model takes a reference answer as input. Based on this design, we train a reward model named VerifyRM, which achieves higher accuracy on VerifyBench compared to other models of the same size. We conduct reinforcement learning using both VerifyRM and Cooper. Our experiments show that Cooper not only alleviates reward hacking but also improves end-to-end RL performance, for instance, achieving a 0.54% gain in average accuracy on Qwen2.5-1.5B-Instruct. Our findings demonstrate that dynamically updating reward model is an effective way to combat reward hacking, providing a reference for better integrating reward models into RL.
https://huggingface.co/papers/2508.05613
[
8 authors](https://huggingface.co/papers/2508.05613)
·
Aug 7, 2025 
2
https://huggingface.co/papers/2508.05613#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2602.20133
AdaEvolve: Adaptive LLM Driven Zeroth-Order Optimization
https://huggingface.co/papers/2602.20133
The paradigm of automated program generation is shifting from one-shot generation to inference-time search, where Large Language Models (LLMs) function as semantic mutation operators within evolutionary loops. While effective, these systems are currently governed by static schedules that fail to account for the non-stationary dynamics of the search process. This rigidity results in substantial computational waste, as resources are indiscriminately allocated to stagnating populations while promising frontiers remain under-exploited. We introduce AdaEvolve, a framework that reformulates LLM-driven evolution as a hierarchical adaptive optimization problem. AdaEvolve uses an "accumulated improvement signal" to unify decisions across three levels: Local Adaptation, which dynamically modulates the exploration intensity within a population of solution candidates; Global Adaptation, which routes the global resource budget via bandit-based scheduling across different solution candidate populations; and Meta-Guidance which generates novel solution tactics based on the previously generated solutions and their corresponding improvements when the progress stalls. We demonstrate that AdaEvolve consistently outperforms the open-sourced baselines across 185 different open-ended optimization problems including combinatorial, systems optimization and algorithm design problems.
https://huggingface.co/papers/2602.20133
[
12 authors](https://huggingface.co/papers/2602.20133)
·
Feb 23
 [-] 21
https://huggingface.co/login?next=%2Fpapers%2F2508.07750
Learning to Align, Aligning to Learn: A Unified Approach for Self-Optimized Alignment
https://huggingface.co/papers/2508.07750
Alignment methodologies have emerged as a critical pathway for enhancing language model alignment capabilities. While SFT (supervised fine-tuning) accelerates convergence through direct token-level loss intervention, its efficacy is constrained by offline policy trajectory. In contrast, RL(reinforcement learning) facilitates exploratory policy optimization, but suffers from low sample efficiency and stringent dependency on high-quality base models. To address these dual challenges, we propose GRAO (Group Relative Alignment Optimization), a unified framework that synergizes the respective strengths of SFT and RL through three key innovations: 1) A multi-sample generation strategy enabling comparative quality assessment via reward feedback; 2) A novel Group Direct Alignment Loss formulation leveraging intra-group relative advantage weighting; 3) Reference-aware parameter updates guided by pairwise preference dynamics. Our theoretical analysis establishes GRAO's convergence guarantees and sample efficiency advantages over conventional approaches. Comprehensive evaluations across complex human alignment tasks demonstrate GRAO's superior performance, achieving 57.70%,17.65% 7.95% and 5.18% relative improvements over SFT, DPO, PPO and GRPO baselines respectively. This work provides both a theoretically grounded alignment framework and empirical evidence for efficient capability evolution in language models.
https://huggingface.co/papers/2508.07750
[
15 authors](https://huggingface.co/papers/2508.07750)
·
Aug 10, 2025 
2
https://huggingface.co/papers/2508.07750#community
Previous
https://huggingface.co/papers/date/2026-07-03
System theme
Company
TOS
https://huggingface.co/terms-of-service
 
Privacy
https://huggingface.co/privacy
 
About
https://huggingface.co/huggingface
 
Careers
https://apply.workable.com/huggingface/
 

https://huggingface.co/
Website
Models
https://huggingface.co/models
 
Datasets
https://huggingface.co/datasets
 
Spaces
https://huggingface.co/spaces
 
Pricing
https://huggingface.co/pricing
 
Docs
https://huggingface.co/docs
Trending Papers ranked by GitHub stars activity