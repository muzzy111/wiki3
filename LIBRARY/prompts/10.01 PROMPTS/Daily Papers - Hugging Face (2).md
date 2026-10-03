# Daily Papers - Hugging Face

Source URL: https://huggingface.co/papers?q=reflective%20prompt-evolution

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
reflective prompt-evolution
Daily
Weekly
Monthly 

https://huggingface.co/papers/trending
 

https://huggingface.co/papers/date/2026-07-03
Jul 6
 [-] 34
https://huggingface.co/login?next=%2Fpapers%2F2507.19457
GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning
https://huggingface.co/papers/2507.19457
Large language models (LLMs) are increasingly adapted to downstream tasks via reinforcement learning (RL) methods like Group Relative Policy Optimization (GRPO), which often require thousands of rollouts to learn new tasks. We argue that the interpretable nature of language can often provide a much richer learning medium for LLMs, compared with policy gradients derived from sparse, scalar rewards. To test this, we introduce GEPA (Genetic-Pareto), a prompt optimizer that thoroughly incorporates natural language reflection to learn high-level rules from trial and error. Given any AI system containing one or more LLM prompts, GEPA samples system-level trajectories (e.g., reasoning, tool calls, and tool outputs) and reflects on them in natural language to diagnose problems, propose and test prompt updates, and combine complementary lessons from the Pareto frontier of its own attempts. As a result of GEPA's design, it can often turn even just a few rollouts into a large quality gain. Across four tasks, GEPA outperforms GRPO by 10% on average and by up to 20%, while using up to 35x fewer rollouts. GEPA also outperforms the leading prompt optimizer, MIPROv2, by over 10% across two LLMs, and demonstrates promising results as an inference-time search strategy for code optimization.
https://huggingface.co/papers/2507.19457
[
17 authors](https://huggingface.co/papers/2507.19457)
·
Jul 25, 2025 
6
https://huggingface.co/papers/2507.19457#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2602.14697
Evolution ary System Prompt Learning for Reinforcement Learning in LLMs
https://huggingface.co/papers/2602.14697
Building agentic systems that can autonomously self-improve from experience is a longstanding goal of AI. Large language models (LLMs) today primarily self-improve via two mechanisms: self-reflection for context updates, and reinforcement learning (RL) for weight updates. In this work, we propose Evolutionary System Prompt Learning (E-SPL), a method for jointly improving model contexts and model weights. In each RL iteration, E-SPL samples trajectories under multiple system prompts in parallel, then jointly applies RL updates to LLM weights and evolutionary updates to system prompts. System prompts evolve via mutation and crossover, two genetic operators driven by LLM self-reflection; selection is based on relative performance ratings updated across RL iterations. E-SPL encourages a natural division between declarative knowledge encoded in prompts and procedural knowledge encoded in weights, resulting in improved performance across reasoning and agentic tasks. For instance, in an easy-to-hard (AIME rightarrow BeyondAIME) generalization setting, E-SPL improves RL success rate from 38.8% rightarrow 45.1% while also outperforming reflective prompt evolution (40.0%). Overall, our results demonstrate that RL and system prompt evolution are deeply synergistic, and combining the two yields consistent gains in sample efficiency and generalization. Code: https://github.com/LunjunZhang/E-SPL
https://huggingface.co/papers/2602.14697
[
3 authors](https://huggingface.co/papers/2602.14697)
·
Feb 15
 [-] 11
https://huggingface.co/login?next=%2Fpapers%2F2512.01420
PromptBridge: Cross-Model Prompt Transfer for Large Language Models
https://huggingface.co/papers/2512.01420
Large language models (LLMs) underpin applications in code generation, mathematical reasoning, and agent-based workflows. In practice, systems access LLMs via commercial APIs or open-source deployments, and the model landscape (e.g., GPT, Claude, Llama) evolves rapidly. This rapid evolution forces frequent model switches driven by capability, cost, deployment constraints, and privacy. Yet prompts are highly model-sensitive: reusing a prompt engineered for one model on another often yields substantially worse performance than a prompt optimized for the target model. We term this phenomenon Model Drifting. Through extensive empirical analysis across diverse LLM configurations, we show that model drifting is both common and severe. To address this challenge, we introduce PromptBridge, a training-free framework that preserves prompt effectiveness under model switches, enabling cross-model prompt transfer without costly per-task or per-model re-optimization. PromptBridge requires only a small set of alignment tasks for calibration. It first applies Model-Adaptive Reflective Prompt Evolution (MAP-RPE) to obtain task- and model-specific optimal prompts via iterative reflective refinement and quantitative evaluatio n. Using the resulting calibrated prompt pairs for the source and target models, PromptBridge learns a cross-model prompt mapping. At test time, i.e., for an unseen task, given a source-model prompt, this mapping directly produces an optimized prompt for the target model. Experiments in single-agent and multi-agent settings show that PromptBridge consistently improves downstream accuracy while reducing migration effort. The code will be available soon.
https://huggingface.co/papers/2512.01420
[
7 authors](https://huggingface.co/papers/2512.01420)
·
Nov 30, 2025 
2
https://huggingface.co/papers/2512.01420#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2606.05697
PerceptUI: LLM Agents as Human-Aligned Synthetic Users for UI/UX Evaluatio n
https://huggingface.co/papers/2606.05697
User interface (UI) and user experience (UX) evaluation is central to product development, yet reliable feedback still relies on recruiting human participants or running online A/B tests, making early-stage iteration slow and costly. In light of this, recent work has explored Multimodal Large Language Models as proxy evaluators. However, existing approaches either produce surface-level critiques or a judgment that reflects the model's own biases rather than the genuine response of a particular user. We introduce PerceptUI, a framework for persona-conditioned UI/UX evaluation that predicts how a specific user would answer interface-related questions and produces natural-language rationales. PerceptUI is trained in two stages: (i) contrastive reflection fine-tuning distills teacher-generated rationales by extracting lessons from human decisions, and (ii) a reflective prompt- evolution step from the model's own failure traces. Across multiple domains and datasets, PerceptUI achieves human-level realism, generalizes to unseen questions and personas, and yields population-level response distributions.
https://huggingface.co/papers/2606.05697
[
4 authors](https://huggingface.co/papers/2606.05697)
·
Jun 3 
1
https://huggingface.co/papers/2606.05697#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2508.18870
ReflectivePrompt: Reflective evolution in autoprompting algorithms
https://huggingface.co/papers/2508.18870
Autoprompting is the process of automatically selecting optimized prompts for language models, which has been gaining popularity with the rapid advancement of prompt engineering, driven by extensive research in the field of large language models (LLMs). This paper presents ReflectivePrompt - a novel autoprompting method based on evolutionary algorithms that employs a reflective evolution approach for more precise and comprehensive search of optimal prompts. ReflectivePrompt utilizes short-term and long-term reflection operations before crossover and elitist mutation to enhance the quality of the modifications they introduce. This method allows for the accumulation of knowledge obtained throughout the evolution process and updates it at each epoch based on the current population. ReflectivePrompt was tested on 33 datasets for classification and text generation tasks using open-access large language models: t-lite-instruct-0.1 and gemma3-27b-it. The method demonstrates, on average, a significant improvement (e.g., 28% on BBH compared to EvoPrompt) in metrics relative to current state-of-the-art approaches, thereby establishing itself as one of the most effective solutions in evolutionary algorithm-based autoprompting.
https://huggingface.co/papers/2508.18870
[
5 authors](https://huggingface.co/papers/2508.18870)
·
Aug 25, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2512.24040
ROAD: Reflective Optimization via Automated Debugging for Zero-Shot Agent Alignment
https://huggingface.co/papers/2512.24040
Automatic Prompt Optimization (APO) has emerged as a critical technique for enhancing Large Language Model (LLM) performance, yet current state-of-the-art methods typically rely on large, labeled gold-standard development sets to compute fitness scores for evolution ary or Reinforcement Learning (RL) approaches. In real-world software engineering, however, such curated datasets are rarely available during the initial cold start of agent development, where engineers instead face messy production logs and evolving failure modes. We present ROAD (Reflective Optimization via Automated Debugging), a novel framework that bypasses the need for refined datasets by treating optimization as a dynamic debugging investigation rather than a stochastic search. Unlike traditional mutation strategies, ROAD utilizes a specialized multi-agent architecture, comprising an Analyzer for root-cause analysis, an Optimizer for pattern aggregation, and a Coach for strategy integration, to convert unstructured failure logs into robust, structured Decision Tree Protocols. We evaluated ROAD across both a standardized academic benchmark and a live production Knowledge Management engine. Experimental results demonstrate that ROAD is highly sample-efficient, achieving a 5.6 percent increase in success rate (73.6 percent to 79.2 percent) and a 3.8 percent increase in search accuracy within just three automated iterations. Furthermore, on complex reasoning tasks in the retail domain, ROAD improved agent performance by approximately 19 percent relative to the baseline. These findings suggest that mimicking the human engineering loop of failure analysis and patching offers a viable, data-efficient alternative to resource-intensive RL training for deploying reliable LLM agents.
https://huggingface.co/papers/2512.24040
[
9 authors](https://huggingface.co/papers/2512.24040)
·
Dec 29, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2603.15800
Evolving Contextual Safety in Multi-Modal Large Language Models via Inference-Time Self- Reflective Memory
https://huggingface.co/papers/2603.15800
Multi-modal Large Language Models (MLLMs) have achieved remarkable performance across a wide range of visual reasoning tasks, yet their vulnerability to safety risks remains a pressing concern. While prior research primarily focuses on jailbreak defenses that detect and refuse explicitly unsafe inputs, such approaches often overlook contextual safety, which requires models to distinguish subtle contextual differences between scenarios that may appear similar but diverge significantly in safety intent. In this work, we present MM-SafetyBench++, a carefully curated benchmark designed for contextual safety evaluation. Specifically, for each unsafe image-text pair, we construct a corresponding safe counterpart through minimal modifications that flip the user intent while preserving the underlying contextual meaning, enabling controlled evaluation of whether models can adapt their safety behaviors based on contextual understanding. Further, we introduce EchoSafe, a training-free framework that maintains a self-reflective memory bank to accumulate and retrieve safety insights from prior interactions. By integrating relevant past experiences into current prompts, EchoSafe enables context-aware reasoning and continual evolution of safety behavior during inference. Extensive experiments on various multi-modal safety benchmarks demonstrate that EchoSafe consistently achieves superior performance, establishing a strong baseline for advancing contextual safety in MLLMs. All benchmark data and code are available at https://echosafe-mllm.github.io.
https://huggingface.co/papers/2603.15800
[
5 authors](https://huggingface.co/papers/2603.15800)
·
Mar 16
 [-] 18
https://huggingface.co/login?next=%2Fpapers%2F2603.20667
REVERE: Reflective Evolving Research Engineer for Scientific Workflows
https://huggingface.co/papers/2603.20667
Existing prompt-optimization techniques rely on local signals to update behavior, often neglecting broader and recurring patterns across tasks, leading to poor generalization; they further rely on full-prompt rewrites or unstructured merges, resulting in knowledge loss. These limitations are magnified in research-coding workflows, which involve heterogeneous repositories, underspecified environments, and weak feedback, where reproducing results from public codebases is an established evaluation regime. We introduce Reflective Evolving Research Engineer (REVERE), a framework that continuously learns from Global Training Context, recognizes recurring failure modes in cross-repository execution trajectories, distills them into reusable heuristics, and performs targeted edits across three configurable fields: the system prompt, a task-prompt template, and a cumulative cheatsheet. REVERE, via this reflective optimization framework, improves performance over prior state-of-the-art expert-crafted instructions on research coding tasks by 4.50% on SUPER, 3.51% on ResearchCodeBench, and 4.89% on ScienceAgentBench across their respective metrics. These results demonstrate that agents equipped with mechanisms for continual learning and global memory consolidation can meaningfully evolve their capabilities over time.
https://huggingface.co/papers/2603.20667
[
4 authors](https://huggingface.co/papers/2603.20667)
·
Mar 20 
2
https://huggingface.co/papers/2603.20667#community
 [-] 9
https://huggingface.co/login?next=%2Fpapers%2F2605.21781
Reflective Prompt Tuning through Language Model Function-Calling
https://huggingface.co/papers/2605.21781
Large language models (LLMs) have become increasingly capable of following instructions and complex reasoning, making prompting a flexible interface for adapting models without parameter updates. Yet prompt design remains labor-intensive and highly sensitive to formatting, phrasing, and instruction order, motivating automated prompt optimization methods that reduce manual effort while preserving inference-time flexibility. However, existing methods often search over prompt candidates or use fixed critique-refine pipelines driven by individual examples or small batches, limiting their ability to capture systematic error patterns and make targeted edits grounded in failure history. We propose Reflective Prompt Tuning (RPT), a framework that uses LLM function calling to simulate the iterative workflow of human prompt engineers. An LLM optimizer calls a diagnostic function that evaluates the target model over an entire optimization set, summarizes recurring failure modes, and returns a structured diagnostic report. The optimizer uses this report, together with an accumulated memory of prior reports, to revise the prompt for the next iteration. RPT further supports confidence-aware optimization by using calibration signals in diagnostic feedback and final prompt selection. Across three reasoning tasks, RPT improves over initial prompts by up to 12.9 points, remains competitive with state of the art, and improves confidence calibration. Our analyses show that RPT is especially effective on multi-hop and mathematical reasoning, producing targeted prompt revisions that align with diagnosed failure patterns and lead to gains in task performance and calibration.
https://huggingface.co/papers/2605.21781
 

https://huggingface.co/papers/2605.21781
megagon Megagon Labs
https://huggingface.co/megagon
·
May 19 
2
https://huggingface.co/papers/2605.21781#community
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
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.01260
SPELL: Semantic Prompt Evolution based on a LLM
https://huggingface.co/papers/2310.01260
Prompt engineering is a new paradigm for enhancing the performance of trained neural network models. For optimizing text-style prompts, existing methods usually individually operate small portions of a text step by step, which either breaks the fluency or could not globally adjust a prompt. Since large language models (LLMs) have powerful ability of generating coherent texts token by token, can we utilize LLMs for improving prompts? Based on this motivation, in this paper, considering a trained LLM as a text generator, we attempt to design a black-box evolution algorithm for automatically optimizing texts, namely SPELL (Semantic Prompt Evolution based on a LLM). The proposed method is evaluated with different LLMs and evolution parameters in different text tasks. Experimental results show that SPELL could rapidly improve the prompts indeed. We further explore the evolution process and discuss on the limitations, potential possibilities and future work.
https://huggingface.co/papers/2310.01260
[
2 authors](https://huggingface.co/papers/2310.01260)
·
Oct 2, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.11974
Learn Like Humans: Use Meta-cognitive Reflection for Efficient Self-Improvement
https://huggingface.co/papers/2601.11974
While Large Language Models (LLMs) enable complex autonomous behavior, current agents remain constrained by static, human-designed prompts that limit adaptability. Existing self-improving frameworks attempt to bridge this gap but typically rely on inefficient, multi-turn recursive loops that incur high computational costs. To address this, we propose Metacognitive Agent Reflective Self-improvement (MARS), a framework that achieves efficient self-evolution within a single recurrence cycle. Inspired by educational psychology, MARS mimics human learning by integrating principle-based reflection (abstracting normative rules to avoid errors) and procedural reflection (deriving step-by-step strategies for success). By synthesizing these insights into optimized instructions, MARS allows agents to systematically refine their reasoning logic without continuous online feedback. Extensive experiments on six benchmarks demonstrate that MARS outperforms state-of-the-art self-evolving systems while significantly reducing computational overhead.
https://huggingface.co/papers/2601.11974
[
6 authors](https://huggingface.co/papers/2601.11974)
·
Jan 16
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2311.12131
Human Learning by Model Feedback: The Dynamics of Iterative Prompting with Midjourney
https://huggingface.co/papers/2311.12131
Generating images with a Text-to-Image model often requires multiple trials, where human users iteratively update their prompt based on feedback, namely the output image. Taking inspiration from cognitive work on reference games and dialogue alignment, this paper analyzes the dynamics of the user prompts along such iterations. We compile a dataset of iterative interactions of human users with Midjourney. Our analysis then reveals that prompts predictably converge toward specific traits along these iterations. We further study whether this convergence is due to human users, realizing they missed important details, or due to adaptation to the model's ``preferences'', producing better images for a specific language style. We show initial evidence that both possibilities are at play. The possibility that users adapt to the model's preference raises concerns about reusing user data for further training. The prompts may be biased towards the preferences of a specific model, rather than align with human intentions and natural manner of expression.
https://huggingface.co/papers/2311.12131
[
3 authors](https://huggingface.co/papers/2311.12131)
·
Nov 20, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2309.16797
Promptbreeder: Self-Referential Self-Improvement Via Prompt Evolution
https://huggingface.co/papers/2309.16797
Popular prompt strategies like Chain-of-Thought Prompting can dramatically improve the reasoning abilities of Large Language Models (LLMs) in various domains. However, such hand-crafted prompt-strategies are often sub-optimal. In this paper, we present Promptbreeder, a general-purpose self-referential self-improvement mechanism that evolves and adapts prompts for a given domain. Driven by an LLM, Promptbreeder mutates a population of task-prompts, and subsequently evaluates them for fitness on a training set. Crucially, the mutation of these task-prompts is governed by mutation-prompts that the LLM generates and improves throughout evolution in a self-referential way. That is, Promptbreeder is not just improving task-prompts, but it is also improving the mutationprompts that improve these task-prompts. Promptbreeder outperforms state-of-the-art prompt strategies such as Chain-of-Thought and Plan-and-Solve Prompting on commonly used arithmetic and commonsense reasoning benchmarks. Furthermore, Promptbreeder is able to evolve intricate task-prompts for the challenging problem of hate speech classification.
https://huggingface.co/papers/2309.16797
[
5 authors](https://huggingface.co/papers/2309.16797)
·
Sep 28, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2501.06689
TAPO: Task-Referenced Adaptation for Prompt Optimization
https://huggingface.co/papers/2501.06689
Prompt engineering can significantly improve the performance of large language models (LLMs), with automated prompt optimization (APO) gaining significant attention due to the time-consuming and laborious nature of manual prompt design. However, much of the existing work in APO overlooks task-specific characteristics, resulting in prompts that lack domain specificity and are not well-suited for task-specific optimization. In this paper, we introduce TAPO, a multitask-aware prompt optimization framework composed of three key modules. First, a task-aware metric selection module is proposed to enhance task-specific prompt generation capabilities. Second, we present a multi-metrics evaluation module to jointly evaluate prompts from multiple perspectives. Third, an evolution-based optimization framework is introduced for automatic prompt refinement, which improves adaptability across various tasks. Extensive experiments on six datasets demonstrate the effectiveness of our approach, and our code is publicly available.
https://huggingface.co/papers/2501.06689
[
6 authors](https://huggingface.co/papers/2501.06689)
·
Jan 11, 2025
 [-] 7
https://huggingface.co/login?next=%2Fpapers%2F2505.17540
RePrompt: Reasoning-Augmented Reprompting for Text-to-Image Generation via Reinforcement Learning
https://huggingface.co/papers/2505.17540
Despite recent progress in text-to-image (T2I) generation, existing models often struggle to faithfully capture user intentions from short and under-specified prompts. While prior work has attempted to enhance prompts using large language models (LLMs), these methods frequently generate stylistic or unrealistic content due to insufficient grounding in visual semantics and real-world composition. Inspired by recent advances in reasoning for language model, we propose RePrompt, a novel reprompting framework that introduces explicit reasoning into the prompt enhancement process via reinforcement learning. Instead of relying on handcrafted rules or stylistic rewrites, our method trains a language model to generate structured, self-reflective prompts by optimizing for image-level outcomes. The tailored reward models assesse the generated images in terms of human preference, semantic alignment, and visual composition, providing indirect supervision to refine prompt generation. Our approach enables end-to-end training without human-annotated data. Experiments on GenEval and T2I-Compbench show that RePrompt significantly boosts spatial layout fidelity and compositional generalization across diverse T2I backbones, establishing new state-of-the-art results.
https://huggingface.co/papers/2505.17540
[
17 authors](https://huggingface.co/papers/2505.17540)
·
May 22, 2025 
2
https://huggingface.co/papers/2505.17540#community
 [-] 11
https://huggingface.co/login?next=%2Fpapers%2F2409.13449
Minstrel: Structural Prompt Generation with Multi-Agents Coordination for Non-AI Experts
https://huggingface.co/papers/2409.13449
LLMs have demonstrated commendable performance across diverse domains. Nevertheless, formulating high-quality prompts to assist them in their work poses a challenge for non-AI experts. Existing research in prompt engineering suggests somewhat scattered optimization principles and designs empirically dependent prompt optimizers. Unfortunately, these endeavors lack a structural design, incurring high learning costs and it is not conducive to the iterative updating of prompts, especially for non-AI experts. Inspired by structured reusable programming languages, we propose LangGPT, a structural prompt design framework. Furthermore, we introduce Minstrel, a multi-generative agent system with reflection to automate the generation of structural prompts. Experiments and the case study illustrate that structural prompts generated by Minstrel or written manually significantly enhance the performance of LLMs. Furthermore, we analyze the ease of use of structural prompts through a user survey in our online community.
https://huggingface.co/papers/2409.13449
[
11 authors](https://huggingface.co/papers/2409.13449)
·
Sep 20, 2024 
2
https://huggingface.co/papers/2409.13449#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2405.13009
MetaReflection: Learning Instructions for Language Agents using Past Reflections
https://huggingface.co/papers/2405.13009
The popularity of Large Language Models (LLMs) have unleashed a new age ofLanguage Agents for solving a diverse range of tasks. While contemporary frontier LLMs are capable enough to power reasonably good Language agents, the closed-API model makes it hard to improve in cases they perform sub-optimally. To address this, recent works have explored ways to improve their performance using techniques like self-reflection and prompt optimization. Unfortunately, techniques like self-reflection can be used only in an online setup, while contemporary prompt optimization techniques are designed and tested to work on simple tasks. To this end, we introduce MetaReflection, a novel offline reinforcement learning technique that enhances the performance of Language Agents by augmenting a semantic memory based on experiential learnings from past trials. We demonstrate the efficacy of MetaReflection by evaluating across multiple domains, including complex logical reasoning, biomedical semantic similarity, open world question answering, and vulnerability threat detection, in Infrastructure-as-Code, spanning different agent designs. MetaReflection boosts Language agents' performance by 4% to 16.82% over the raw GPT-4 baseline and performs on par with existing state-of-the-art prompt optimization techniques while requiring fewer LLM calls.
https://huggingface.co/papers/2405.13009
[
7 authors](https://huggingface.co/papers/2405.13009)
·
May 12, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.09493
Evolving Prompt Adaptation for Vision-Language Models
https://huggingface.co/papers/2603.09493
The adaptation of large-scale vision-language models (VLMs) to downstream tasks with limited labeled data remains a significant challenge. While parameter-efficient prompt learning methods offer a promising path, they often suffer from catastrophic forgetting of pre-trained knowledge. Toward addressing this limitation, our work is grounded in the insight that governing the evolutionary path of prompts is essential for forgetting-free adaptation. To this end, we propose EvoPrompt, a novel framework designed to explicitly steer the prompt trajectory for stable, knowledge-preserving fine-tuning. Specifically, our approach employs a Modality-Shared Prompt Projector (MPP) to generate hierarchical prompts from a unified embedding space. Critically, an evolutionary training strategy decouples low-rank updates into directional and magnitude components, preserving early-learned semantic directions while only adapting their magnitude, thus enabling prompts to evolve without discarding foundational knowledge. This process is further stabilized by Feature Geometric Regularization (FGR), which enforces feature decorrelation to prevent representation collapse. Extensive experiments demonstrate that EvoPrompt achieves state-of-the-art performance in few-shot learning while robustly preserving the original zero-shot capabilities of pre-trained VLMs.
https://huggingface.co/papers/2603.09493
[
5 authors](https://huggingface.co/papers/2603.09493)
·
Mar 9
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2506.17930
Evolving Prompts In-Context: An Open-ended, Self-replicating Perspective
https://huggingface.co/papers/2506.17930
We propose a novel prompt design paradigm that challenges conventional wisdom in large language model (LLM) prompting. While conventional wisdom prioritizes well-crafted instructions and demonstrations for in-context learning (ICL), we show that pruning random demonstrations into seemingly incoherent "gibberish" can remarkably improve performance across diverse tasks. Notably, the "gibberish" always matches or surpasses state-of-the-art automatic prompt optimization techniques, achieving substantial gains regardless of LLM alignment. Nevertheless, discovering an effective pruning strategy is non-trivial, as existing attribution methods and prompt compression algorithms fail to deliver robust results, let alone human intuition. In terms of this, we propose a self-discover prompt optimization framework, PromptQuine, an evolutionary search framework that automatically searches for the pruning strategy by itself using only low-data regimes. Much like the emergent complexity in nature--such as symbiosis and self-organization--arising in response to resource constraints, our framework evolves and refines unconventional yet highly effective prompts by leveraging only the tokens present within the context. We demonstrate its effectiveness across classification, multi-choice question answering, generation and math reasoning tasks across LLMs, while achieving decent runtime efficiency. We hope our findings can guide mechanistic studies on in-context learning, and provide a call to action, to pave the way for more open-ended search algorithms for more effective LLM prompting.
https://huggingface.co/papers/2506.17930
[
3 authors](https://huggingface.co/papers/2506.17930)
·
Jun 21, 2025 
2
https://huggingface.co/papers/2506.17930#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2405.18369
PromptWizard: Task-Aware Prompt Optimization Framework
https://huggingface.co/papers/2405.18369
Large language models (LLMs) have transformed AI across diverse domains, with prompting being central to their success in guiding model outputs. However, manual prompt engineering is both labor-intensive and domain-specific, necessitating the need for automated solutions. We introduce PromptWizard, a novel, fully automated framework for discrete prompt optimization, utilizing a self-evolving, self-adapting mechanism. Through a feedback-driven critique and synthesis process, PromptWizard achieves an effective balance between exploration and exploitation, iteratively refining both prompt instructions and in-context examples to generate human-readable, task-specific prompts. This guided approach systematically improves prompt quality, resulting in superior performance across 45 tasks. PromptWizard excels even with limited training data, smaller LLMs, and various LLM architectures. Additionally, our cost analysis reveals a substantial reduction in API calls, token usage, and overall cost, demonstrating PromptWizard's efficiency, scalability, and advantages over existing prompt optimization strategies.
https://huggingface.co/papers/2405.18369
[
6 authors](https://huggingface.co/papers/2405.18369)
·
May 28, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2502.03078
Automatic Prompt Optimization Techniques: Exploring the Potential for Synthetic Data Generation
https://huggingface.co/papers/2502.03078
Artificial Intelligence (AI) advancement is heavily dependent on access to large-scale, high-quality training data. However, in specialized domains such as healthcare, data acquisition faces significant constraints due to privacy regulations, ethical considerations, and limited availability. While synthetic data generation offers a promising solution, conventional approaches typically require substantial real data for training generative models. The emergence of large-scale prompt-based models presents new opportunities for synthetic data generation without direct access to protected data. However, crafting effective prompts for domain-specific data generation remains challenging, and manual prompt engineering proves insufficient for achieving output with sufficient precision and authenticity. We review recent developments in automatic prompt optimization, following PRISMA guidelines. We analyze six peer-reviewed studies published between 2020 and 2024 that focus on automatic data-free prompt optimization methods. Our analysis reveals three approaches: feedback-driven, error-based, and control-theoretic. Although all approaches demonstrate promising capabilities in prompt refinement and adaptation, our findings suggest the need for an integrated framework that combines complementary optimization techniques to enhance synthetic data generation while minimizing manual intervention. We propose future research directions toward developing robust, iterative prompt optimization frameworks capable of improving the quality of synthetic data. This advancement can be particularly crucial for sensitive fields and in specialized domains where data access is restricted, potentially transforming how we approach synthetic data generation for AI development.
https://huggingface.co/papers/2502.03078
[
4 authors](https://huggingface.co/papers/2502.03078)
·
Feb 4, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.01145
ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution
https://huggingface.co/papers/2402.01145
The omnipresence of NP-hard combinatorial optimization problems (COPs) compels domain experts to engage in trial-and-error heuristic design. The long-standing endeavor of design automation has gained new momentum with the rise of large language models (LLMs). This paper introduces Language Hyper-Heuristics (LHHs), an emerging variant of Hyper-Heuristics that leverages LLMs for heuristic generation, featuring minimal manual intervention and open-ended heuristic spaces. To empower LHHs, we present Reflective Evolution (ReEvo), a novel integration of evolutionary search for efficiently exploring the heuristic space, and LLM reflections to provide verbal gradients within the space. Across five heterogeneous algorithmic types, six different COPs, and both white-box and black-box views of COPs, ReEvo yields state-of-the-art and competitive meta-heuristics, evolutionary algorithms, heuristics, and neural solvers, while being more sample-efficient than prior LHHs.
https://huggingface.co/papers/2402.01145
[
8 authors](https://huggingface.co/papers/2402.01145)
·
Feb 1, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2506.11077
CyclicReflex: Improving Large Reasoning Models via Cyclical Reflection Token Scheduling
https://huggingface.co/papers/2506.11077
Large reasoning models (LRMs), such as OpenAI's o1 and DeepSeek-R1, harness test-time scaling to perform multi-step reasoning for complex problem-solving. This reasoning process, executed before producing final answers, is often guided by special juncture tokens or textual segments that prompt self-evaluative reflection. We refer to these transition markers and reflective cues as "reflection tokens" (e.g., "wait", "but", "alternatively"). In this work, we treat reflection tokens as a "resource" and introduce the problem of resource allocation, aimed at improving the test-time compute performance of LRMs by adaptively regulating the frequency and placement of reflection tokens. Through empirical analysis, we show that both excessive and insufficient use of reflection tokens, referred to as over-reflection and under-reflection, can degrade model performance. To better understand and manage this trade-off, we draw an analogy between reflection token usage and learning rate scheduling in optimization. Building on this insight, we propose cyclical reflection token scheduling (termed CyclicReflex), a decoding strategy that dynamically modulates reflection token logits using a position-dependent triangular waveform. Experiments on MATH500, AIME2024/2025, and AMC2023 demonstrate that CyclicReflex consistently improves performance across model sizes (1.5B-8B), outperforming standard decoding and more recent approaches such as TIP (thought switching penalty) and S1. Codes are available at https://github.com/OPTML-Group/CyclicReflex.
https://huggingface.co/papers/2506.11077
[
5 authors](https://huggingface.co/papers/2506.11077)
·
Jun 3, 2025
 [-] 5
https://huggingface.co/login?next=%2Fpapers%2F2606.04465
SePO: Self-Evolving Prompt Agent for System Prompt Optimization
https://huggingface.co/papers/2606.04465
System prompt optimization improves agent behavior without modifying the underlying model, yielding human-readable, model-agnostic instructions. Existing methods build a prompt agent that refines task agents' system prompts, yet leave the prompt agent's own system prompt hand-engineered and fixed. We propose Self-Evolving Prompt Optimization (SePO), which treats the prompt agent's own system prompt as an optimization target alongside task agents' system prompts. SePO adopts a self-referential design. A single prompt agent improves both task agents' system prompts and its own under an open-ended evolutionary search that maintains an archive of candidate prompts as stepping stones. Training proceeds in two stages: pre-training evolves the prompt agent on a multi-task pool, and fine-tuning then applies it to a target task. Across five benchmarks spanning math (AIME'25), abstract reasoning (ARC-AGI-1), graduate-level science (GPQA), code generation (MBPP), and logic puzzles (Sudoku), SePO consistently outperforms Manual-CoT, TextGrad, and MetaSPO, improving the average accuracy by 4.49 points compared to Manual-CoT. The prompt optimization skill from pre-training also generalizes to tasks beyond the pre-training mixture, rather than memorizing per-task prompts.
https://huggingface.co/papers/2606.04465
[
3 authors](https://huggingface.co/papers/2606.04465)
·
Jun 2 
2
https://huggingface.co/papers/2606.04465#community
 [-] 53
https://huggingface.co/login?next=%2Fpapers%2F2309.08532
Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers
https://huggingface.co/papers/2309.08532
Large Language Models (LLMs) excel in various tasks, but they rely on carefully crafted prompts that often demand substantial human effort. To automate this process, in this paper, we propose a novel framework for discrete prompt optimization, called EvoPrompt, which borrows the idea of evolutionary algorithms (EAs) as they exhibit good performance and fast convergence. To enable EAs to work on discrete prompts, which are natural language expressions that need to be coherent and human-readable, we connect LLMs with EAs. This approach allows us to simultaneously leverage the powerful language processing capabilities of LLMs and the efficient optimization performance of EAs. Specifically, abstaining from any gradients or parameters, EvoPrompt starts from a population of prompts and iteratively generates new prompts with LLMs based on the evolutionary operators, improving the population based on the development set. We optimize prompts for both closed- and open-source LLMs including GPT-3.5 and Alpaca, on 9 datasets spanning language understanding and generation tasks. EvoPrompt significantly outperforms human-engineered prompts and existing methods for automatic prompt generation by up to 25% and 14% respectively. Furthermore, EvoPrompt demonstrates that connecting LLMs with EAs creates synergies, which could inspire further research on the combination of LLMs and conventional algorithms.
https://huggingface.co/papers/2309.08532
[
9 authors](https://huggingface.co/papers/2309.08532)
·
Sep 15, 2023 
11
https://huggingface.co/papers/2309.08532#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2409.08775
What You Say = What You Want? Teaching Humans to Articulate Requirements for LLMs
https://huggingface.co/papers/2409.08775
Prompting ChatGPT to achieve complex goals (e.g., creating a customer support chatbot) often demands meticulous prompt engineering, including aspects like fluent writing and chain-of-thought techniques. While emerging prompt optimizers can automatically refine many of these aspects, we argue that clearly conveying customized requirements (e.g., how to handle diverse inputs) remains a human-centric challenge. In this work, we introduce Requirement-Oriented Prompt Engineering (ROPE), a paradigm that focuses human attention on generating clear, complete requirements during prompting. We implement ROPE through an assessment and training suite that provides deliberate practice with LLM-generated feedback. In a study with 30 novices, we show that requirement-focused training doubles novices' prompting performance, significantly outperforming conventional prompt engineering training and prompt optimization. We also demonstrate that high-quality LLM outputs are directly tied to the quality of input requirements. Our work paves the way for more effective task delegation in human-LLM collaborative prompting.
https://huggingface.co/papers/2409.08775
[
5 authors](https://huggingface.co/papers/2409.08775)
·
Sep 13, 2024
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2603.00483
RAISE: Requirement-Adaptive Evolutionary Refinement for Training-Free Text-to-Image Alignment
https://huggingface.co/papers/2603.00483
Recent text-to-image (T2I) diffusion models achieve remarkable realism, yet faithful prompt-image alignment remains challenging, particularly for complex prompts with multiple objects, relations, and fine-grained attributes. Existing training-free inference-time scaling methods rely on fixed iteration budgets that cannot adapt to prompt difficulty, while reflection-tuned models require carefully curated reflection datasets and extensive joint fine-tuning of diffusion and vision-language models, often overfitting to reflection paths data and lacking transferability across models. We introduce RAISE (Requirement-Adaptive Self-Improving Evolution), a training-free, requirement-driven evolutionary framework for adaptive T2I generation. RAISE formulates image generation as a requirement-driven adaptive scaling process, evolving a population of candidates at inference time through a diverse set of refinement actions-including prompt rewriting, noise resampling, and instructional editing. Each generation is verified against a structured checklist of requirements, enabling the system to dynamically identify unsatisfied items and allocate further computation only where needed. This achieves adaptive test-time scaling that aligns computational effort with semantic query complexity. On GenEval and DrawBench, RAISE attains state-of-the-art alignment (0.94 overall GenEval) while incurring fewer generated samples (reduced by 30-40%) and VLM calls (reduced by 80%) than prior scaling and reflection-tuned baselines, demonstrating efficient, generalizable, and model-agnostic multi-round self-improvement. Code is available at https://github.com/LiyaoJiang1998/RAISE.
https://huggingface.co/papers/2603.00483
 

https://huggingface.co/papers/2603.00483
UAlberta University of Alberta
https://huggingface.co/UAlberta
·
Feb 27 
2
https://huggingface.co/papers/2603.00483#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2412.15156
Prompt-A-Video: Prompt Your Video Diffusion Model via Preference-Aligned LLM
https://huggingface.co/papers/2412.15156
Text-to-video models have made remarkable advancements through optimization on high-quality text-video pairs, where the textual prompts play a pivotal role in determining quality of output videos. However, achieving the desired output often entails multiple revisions and iterative inference to refine user-provided prompts. Current automatic methods for refining prompts encounter challenges such as Modality-Inconsistency, Cost-Discrepancy, and Model-Unaware when applied to text-to-video diffusion models. To address these problem, we introduce an LLM-based prompt adaptation framework, termed as Prompt-A-Video, which excels in crafting Video-Centric, Labor-Free and Preference-Aligned prompts tailored to specific video diffusion model. Our approach involves a meticulously crafted two-stage optimization and alignment system. Initially, we conduct a reward-guided prompt evolution pipeline to automatically create optimal prompts pool and leverage them for supervised fine-tuning (SFT) of the LLM. Then multi-dimensional rewards are employed to generate pairwise data for the SFT model, followed by the direct preference optimization (DPO) algorithm to further facilitate preference alignment. Through extensive experimentation and comparative analyses, we validate the effectiveness of Prompt-A-Video across diverse generation models, highlighting its potential to push the boundaries of video generation.
https://huggingface.co/papers/2412.15156
[
12 authors](https://huggingface.co/papers/2412.15156)
·
Dec 19, 2024
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2603.24639
Experiential Reflective Learning for Self-Improving LLM Agents
https://huggingface.co/papers/2603.24639
Recent advances in large language models (LLMs) have enabled the development of autonomous agents capable of complex reasoning and multi-step problem solving. However, these agents struggle to adapt to specialized environments and do not leverage past interactions, approaching each new task from scratch regardless of their accumulated experience. We introduce Experiential Reflective Learning (ERL), a simple self-improvement framework that enables rapid environment adaptation through experiential learning. ERL reflects on task trajectories and outcomes to generate heuristics, capturing actionable lessons that transfer across tasks. At test time, relevant heuristics are retrieved based on the current task and injected into the agent's context to guide execution. On the Gaia2 benchmark, ERL improves success rate by 7.8% over a ReAct baseline, with large gains in task completion reliability, and outperforms prior experiential learning methods. Through systematic ablations, we find that selective retrieval is essential and that heuristics provide more transferable abstractions than few-shot trajectory prompting. These results demonstrate that reflecting on single-attempt experiences to extract transferable heuristics enables effective agent self-improvement.
https://huggingface.co/papers/2603.24639
 

https://huggingface.co/papers/2603.24639
illuin Illuin Technology
https://huggingface.co/illuin
·
Mar 25
 [-] 21
https://huggingface.co/login?next=%2Fpapers%2F2512.03534
Rethinking Prompt Design for Inference-time Scaling in Text-to-Visual Generation
https://huggingface.co/papers/2512.03534
Achieving precise alignment between user intent and generated visuals remains a central challenge in text-to-visual generation, as a single attempt often fails to produce the desired output. To handle this, prior approaches mainly scale the visual generation process (e.g., increasing sampling steps or seeds), but this quickly leads to a quality plateau. This limitation arises because the prompt, crucial for guiding generation, is kept fixed. To address this, we propose Prompt Redesign for Inference-time Scaling, coined PRIS, a framework that adaptively revises the prompt during inference in response to the scaled visual generations. The core idea of PRIS is to review the generated visuals, identify recurring failure patterns across visuals, and redesign the prompt accordingly before regenerating the visuals with the revised prompt. To provide precise alignment feedback for prompt revision, we introduce a new verifier, element-level factual correction, which evaluates the alignment between prompt attributes and generated visuals at a fine-grained level, achieving more accurate and interpretable assessments than holistic measures. Extensive experiments on both text-to-image and text-to-video benchmarks demonstrate the effectiveness of our approach, including a 15% gain on VBench 2.0. These results highlight that jointly scaling prompts and visuals is key to fully leveraging scaling laws at inference-time. Visualizations are available at the website: https://subin-kim-cv.github.io/PRIS.
https://huggingface.co/papers/2512.03534
[
7 authors](https://huggingface.co/papers/2512.03534)
·
Dec 2, 2025 
2
https://huggingface.co/papers/2512.03534#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.12246
PromptFlow: Training Prompts Like Neural Networks
https://huggingface.co/papers/2510.12246
Large Language Models (LLMs) have demonstrated profound impact on Natural Language Processing (NLP) tasks. However, their effective deployment across diverse domains often require domain-specific adaptation strategies, as generic models may underperform when faced with specialized data distributions. Recent advances in prompt engineering (PE) offer a promising alternative to extensive retraining by refining input instructions to align LLM outputs with task objectives. This paradigm has emerged as a rapid and versatile approach for model fine-tuning. Despite its potential, manual prompt design remains labor-intensive and heavily depends on specialized expertise, often requiring iterative human effort to achieve optimal formulations. To address this limitation, automated prompt engineering methodologies have been developed to systematically generate task-specific prompts. However, current implementations predominantly employ static update rules and lack mechanisms for dynamic strategy selection, resulting in suboptimal adaptation to varying NLP task requirements. Furthermore, most methods treat and update the whole prompts at each step, without considering editing prompt sections at a finer granularity. At last, in particular, the problem of how to recycle experience in LLM is still underexplored. To this end, we propose the PromptFlow, a modular training framework inspired by TensorFlow, which integrates meta-prompts, operators, optimization, and evaluator. Our framework can be equipped with the latest optimization methods and autonomously explores optimal prompt refinement trajectories through gradient-based meta-learning, requiring minimal task-specific training data. Specifically, we devise a reinforcement learning method to recycle experience for LLM in the PE process. Finally, we conduct extensive experiments on various datasets, and demonstrate the effectiveness of PromptFlow.
https://huggingface.co/papers/2510.12246
[
4 authors](https://huggingface.co/papers/2510.12246)
·
Oct 13, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2407.11511
Reasoning with Large Language Models, a Survey
https://huggingface.co/papers/2407.11511
Scaling up language models to billions of parameters has opened up possibilities for in-context learning, allowing instruction tuning and few-shot learning on tasks that the model was not specifically trained for. This has achieved breakthrough performance on language tasks such as translation, summarization, and question-answering. Furthermore, in addition to these associative "System 1" tasks, recent advances in Chain-of-thought prompt learning have demonstrated strong "System 2" reasoning abilities, answering a question in the field of artificial general intelligence whether LLMs can reason. The field started with the question whether LLMs can solve grade school math word problems. This paper reviews the rapidly expanding field of prompt-based reasoning with LLMs. Our taxonomy identifies different ways to generate, evaluate, and control multi-step reasoning. We provide an in-depth coverage of core approaches and open problems, and we propose a research agenda for the near future. Finally, we highlight the relation between reasoning and prompt-based learning, and we discuss the relation between reasoning, sequential decision processes, and reinforcement learning. We find that self-improvement, self-reflection, and some metacognitive abilities of the reasoning processes are possible through the judicious use of prompts. True self-improvement and self-reasoning, to go from reasoning with LLMs to reasoning by LLMs, remains future work.
https://huggingface.co/papers/2407.11511
[
6 authors](https://huggingface.co/papers/2407.11511)
·
Jul 15, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2605.14443
Prompting Policies for Multi-step Reasoning and Tool-Use in Black-box LLMs with Iterative Distillation of Experience
https://huggingface.co/papers/2605.14443
The shift toward interacting with frozen, "black-box" Large Language Models (LLMs) has transformed prompt engineering from a heuristic exercise into a critical optimization challenge. We propose a Reinforcement Learning (RL) framework for training learned prompting policies via iterative distillation of experience. In this architecture, a lightweight prompter model is optimized to maximize task-specific rewards for a larger, frozen worker LLM. By utilizing a contrastive experience buffer that couples scalar rewards with dense textual critiques, our approach effectively amortizes iterative prompt refinement into single-shot policy weights. Our experimental analysis focuses on the Big Bench Extra Hard (BBEH) and Tau-bench suites, covering a diverse range of multi-step reasoning and tool-use tasks. We demonstrate significant gains, improving performance from 55% to 90% in logic-intensive reasoning and 74% to 91% in tool-use tasks. Furthermore, we analyze the structural evolution of prompts, demonstrating how the policy discovers specialized algorithmic heuristics. We provide comprehensive comparisons against state-of-the-art evolutionary baselines like GEPA, showing that iterative distillation achieves superior performance with higher sample efficiency.
https://huggingface.co/papers/2605.14443
[
3 authors](https://huggingface.co/papers/2605.14443)
·
May 13
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2410.06328
Auto-Evolve: Enhancing Large Language Model's Performance via Self-Reasoning Framework
https://huggingface.co/papers/2410.06328
Recent advancements in prompt engineering strategies, such as Chain-of-Thought (CoT) and Self-Discover, have demonstrated significant potential in improving the reasoning abilities of Large Language Models (LLMs). However, these state-of-the-art (SOTA) prompting strategies rely on single or fixed set of static seed reasoning modules like "think step by step" or "break down this problem" intended to simulate human approach to problem-solving. This constraint limits the flexibility of models in tackling diverse problems effectively. In this paper, we introduce Auto-Evolve, a novel framework that enables LLMs to self-create dynamic reasoning modules and downstream action plan, resulting in significant improvements over current SOTA methods. We evaluate Auto-Evolve on the challenging BigBench-Hard (BBH) dataset with Claude 2.0, Claude 3 Sonnet, Mistral Large, and GPT 4, where it consistently outperforms the SOTA prompt strategies. Auto-Evolve outperforms CoT by up to 10.4% and on an average by 7% across these four models. Our framework introduces two innovations: a) Auto-Evolve dynamically generates reasoning modules for each task while aligning with human reasoning paradigm, thus eliminating the need for predefined templates. b) We introduce an iterative refinement component, that incrementally refines instruction guidance for LLMs and helps boost performance by average 2.8% compared to doing it in a single step.
https://huggingface.co/papers/2410.06328
[
7 authors](https://huggingface.co/papers/2410.06328)
·
Oct 8, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.18730
Reflect: Transparent Principle-Guided Reasoning for Constitutional Alignment at Scale
https://huggingface.co/papers/2601.18730
The constitutional framework of alignment aims to align large language models (LLMs) with value-laden principles written in natural language (such as to avoid using biased language). Prior work has focused on parameter fine-tuning techniques, such as reinforcement learning from human feedback (RLHF), to instill these principles. However, these approaches are computationally demanding, require careful engineering and tuning, and often require difficult-to-obtain human annotation data. We propose reflect, an inference-time framework for constitutional alignment that does not require any training or data, providing a plug-and-play approach for aligning an instruction-tuned model to a set of principles. reflect operates entirely in-context, combining a (i) constitution-conditioned base response with post-generation (ii) self-evaluation, (iii)(a) self-critique, and (iii)(b) final revision. reflect's technique of explicit in-context reasoning over principles during post-generation outperforms standard few-shot prompting and provides transparent reasoning traces. Our results demonstrate that reflect significantly improves LLM conformance to diverse and complex principles, including principles quite distinct from those emphasized in the model's original parameter fine-tuning, without sacrificing factual reasoning. reflect is particularly effective at reducing the rate of rare but significant violations of principles, thereby improving safety and robustness in the tail end of the distribution of generations. Finally, we show that reflect naturally generates useful training data for traditional parameter fine-tuning techniques, allowing for efficient scaling and the reduction of inference-time computational overhead in long-term deployment scenarios.
https://huggingface.co/papers/2601.18730
[
6 authors](https://huggingface.co/papers/2601.18730)
·
Jan 25
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2311.08364
Plum: Prompt Learning using Metaheuristic
https://huggingface.co/papers/2311.08364
Since the emergence of large language models, prompt learning has become a popular method for optimizing and customizing these models. Special prompts, such as Chain-of-Thought, have even revealed previously unknown reasoning capabilities within these models. However, the progress of discovering effective prompts has been slow, driving a desire for general prompt optimization methods. Unfortunately, few existing prompt learning methods satisfy the criteria of being truly "general", i.e., automatic, discrete, black-box, gradient-free, and interpretable all at once. In this paper, we introduce metaheuristics, a branch of discrete non-convex optimization methods with over 100 options, as a promising approach to prompt learning. Within our paradigm, we test six typical methods: hill climbing, simulated annealing, genetic algorithms with/without crossover, tabu search, and harmony search, demonstrating their effectiveness in black-box prompt learning and Chain-of-Thought prompt tuning. Furthermore, we show that these methods can be used to discover more human-understandable prompts that were previously unknown, opening the door to a cornucopia of possibilities in prompt optimization. We release all the codes in https://github.com/research4pan/Plum.
https://huggingface.co/papers/2311.08364
[
7 authors](https://huggingface.co/papers/2311.08364)
·
Nov 14, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2601.16134
LLM Prompt Evaluation for Educational Applications
https://huggingface.co/papers/2601.16134
As large language models (LLMs) become increasingly common in educational applications, there is a growing need for evidence-based methods to design and evaluate LLM prompts that produce personalized and pedagogically aligned out-puts. This study presents a generalizable, systematic approach for evaluating prompts, demonstrated through an analysis of LLM-generated follow-up questions in a structured dialogue activity. Six prompt templates were designed and tested. The templates incorporated established prompt engineering patterns, with each prompt emphasizing distinct pedagogical strategies. The prompt templates were compared through a tournament-style evaluation framework that can be adapted for other educational applications. The tournament employed the Glicko2 rating system with eight judges evaluating question pairs across three dimensions: format, dialogue support, and appropriateness for learners. Data was sourced from 120 authentic user interactions across three distinct educational deployments. Results showed that a single prompt related to strategic reading out-performed other templates with win probabilities ranging from 81% to 100% in pairwise comparisons. This prompt combined persona and context manager pat-terns and was designed to support metacognitive learning strategies such as self-directed learning. The methodology showcases how educational technology re- searchers can systematically evaluate and improve prompt designs, moving beyond ad-hoc prompt engineering toward evidence-based prompt development for educational applications.
https://huggingface.co/papers/2601.16134
 

https://huggingface.co/papers/2601.16134
VanderbiltUniversity Vanderbilt University
https://huggingface.co/VanderbiltUniversity
·
Jan 22 
3
https://huggingface.co/papers/2601.16134#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.02101
Are Large Language Models Good Prompt Optimizers?
https://huggingface.co/papers/2402.02101
LLM-based Automatic Prompt Optimization, which typically utilizes LLMs as Prompt Optimizers to self-reflect and refine prompts, has shown promising performance in recent studies. Despite the success, the underlying mechanism of this approach remains unexplored, and the true effectiveness of LLMs as Prompt Optimizers requires further validation. In this work, we conducted a comprehensive study to uncover the actual mechanism of LLM-based Prompt Optimization. Our findings reveal that the LLM optimizers struggle to identify the true causes of errors during reflection, tending to be biased by their own prior knowledge rather than genuinely reflecting on the errors. Furthermore, even when the reflection is semantically valid, the LLM optimizers often fail to generate appropriate prompts for the target models with a single prompt refinement step, partly due to the unpredictable behaviors of the target models. Based on the observations, we introduce a new "Automatic Behavior Optimization" paradigm, which directly optimizes the target model's behavior in a more controllable manner. We hope our study can inspire new directions for automatic prompt optimization development.
https://huggingface.co/papers/2402.02101
[
8 authors](https://huggingface.co/papers/2402.02101)
·
Feb 2, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2603.18388
Reflection in the Dark: Exposing and Escaping the Black Box in Reflective Prompt Optimization
https://huggingface.co/papers/2603.18388
Automatic prompt optimization (APO) has emerged as a powerful paradigm for improving LLM performance without manual prompt engineering. Reflective APO methods such as GEPA iteratively refine prompts by diagnosing failure cases, but the optimization process remains black-box and label-free, leading to uninterpretable trajectories and systematic failure. We identify and empirically demonstrate four limitations: on GSM8K with a defective seed, GEPA degrades accuracy from 23.81% to 13.50%. We propose VISTA, a multi-agent APO framework that decouples hypothesis generation from prompt rewriting, enabling semantically labeled hypotheses, parallel minibatch verification, and interpretable optimization trace. A two-layer explore-exploit mechanism combining random restart and epsilon-greedy sampling further escapes local optima. VISTA recovers accuracy to 87.57% on the same defective seed and consistently outperforms baselines across all conditions on GSM8K and AIME2025.
https://huggingface.co/papers/2603.18388
[
6 authors](https://huggingface.co/papers/2603.18388)
·
Mar 18
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.16932
PromptSet: A Programmer's Prompting Dataset
https://huggingface.co/papers/2402.16932
The rise of capabilities expressed by large language models has been quickly followed by the integration of the same complex systems into application level logic. Algorithms, programs, systems, and companies are built around structured prompting to black box models where the majority of the design and implementation lies in capturing and quantifying the `agent mode'. The standard way to shape a closed language model is to prime it for a specific task with a tailored prompt, often initially handwritten by a human. The textual prompts co-evolve with the codebase, taking shape over the course of project life as artifacts which must be reviewed and maintained, just as the traditional code files might be. Unlike traditional code, we find that prompts do not receive effective static testing and linting to prevent runtime issues. In this work, we present a novel dataset called PromptSet, with more than 61,000 unique developer prompts used in open source Python programs. We perform analysis on this dataset and introduce the notion of a static linter for prompts. Released with this publication is a HuggingFace dataset and a Github repository to recreate collection and processing efforts, both under the name pisterlabs/promptset.
https://huggingface.co/papers/2402.16932
[
4 authors](https://huggingface.co/papers/2402.16932)
·
Feb 26, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2401.14043
Towards Goal-oriented Prompt Engineering for Large Language Models: A Survey
https://huggingface.co/papers/2401.14043
Large Language Models (LLMs) have shown prominent performance in various downstream tasks and prompt engineering plays a pivotal role in optimizing LLMs' performance. This paper, not only as an overview of current prompt engineering methods, but also aims to highlight the limitation of designing prompts based on an anthropomorphic assumption that expects LLMs to think like humans. From our review of 50 representative studies, we demonstrate that a goal-oriented prompt formulation, which guides LLMs to follow established human logical thinking, significantly improves the performance of LLMs. Furthermore, We introduce a novel taxonomy that categorizes goal-oriented prompting methods into five interconnected stages and we demonstrate the broad applicability of our framework. With four future directions proposed, we hope to further emphasize the power and potential of goal-oriented prompt engineering in all fields.
https://huggingface.co/papers/2401.14043
[
3 authors](https://huggingface.co/papers/2401.14043)
·
Jan 24, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.16730
MultiPrompter: Cooperative Prompt Optimization with Multi-Agent Reinforcement Learning
https://huggingface.co/papers/2310.16730
Recently, there has been an increasing interest in automated prompt optimization based on reinforcement learning (RL). This approach offers important advantages, such as generating interpretable prompts and being compatible with black-box foundation models. However, the substantial prompt space size poses challenges for RL-based methods, often leading to suboptimal policy convergence. This paper introduces MultiPrompter, a new framework that views prompt optimization as a cooperative game between prompters which take turns composing a prompt together. Our cooperative prompt optimization effectively reduces the problem size and helps prompters learn optimal prompts. We test our method on the text-to-image task and show its ability to generate higher-quality images than baselines.
https://huggingface.co/papers/2310.16730
[
5 authors](https://huggingface.co/papers/2310.16730)
·
Oct 25, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2404.05449
RoT: Enhancing Large Language Models with Reflection on Search Trees
https://huggingface.co/papers/2404.05449
Large language models (LLMs) have demonstrated impressive capability in reasoning and planning when integrated with tree-search-based prompting methods. However, since these methods ignore the previous search experiences, they often make the same mistakes in the search process. To address this issue, we introduce Reflection on search Trees (RoT), an LLM reflection framework designed to improve the performance of tree-search-based prompting methods. It uses a strong LLM to summarize guidelines from previous tree search experiences to enhance the ability of a weak LLM. The guidelines are instructions about solving this task through tree search which can prevent the weak LLMs from making similar mistakes in the past search process. In addition, we proposed a novel state selection method, which identifies the critical information from historical search processes to help RoT generate more specific and meaningful guidelines. In our extensive experiments, we find that RoT significantly improves the performance of LLMs in reasoning or planning tasks with various tree-search-based prompting methods (e.g., BFS and MCTS). Non-tree-search-based prompting methods such as Chain-of-Thought (CoT) can also benefit from RoT guidelines since RoT can provide task-specific knowledge collected from the search experience.
https://huggingface.co/papers/2404.05449
[
4 authors](https://huggingface.co/papers/2404.05449)
·
Apr 8, 2024
 [-] 24
https://huggingface.co/login?next=%2Fpapers%2F2510.08308
First Try Matters: Revisiting the Role of Reflection in Reasoning Models
https://huggingface.co/papers/2510.08308
Large language models have recently demonstrated significant gains in reasoning ability, often attributed to their capacity to generate longer chains of thought and engage in reflective reasoning. However, the contribution of reflections to performance improvement remains unclear. In this paper, we systematically analyze the rollouts of eight reasoning models on five mathematical datasets. We focus on reflective behaviours where the model has already produced an answer but continues reflecting before finalizing its output. Our analysis reveals that reflections are predominantly confirmatory and rarely alter the model's initial answer, a pattern consistent across models and datasets. To understand the role of reflections in training, we construct supervised fine-tuning (SFT) datasets with varying amounts of reflection steps. We observe that training models on rollouts with more reflection steps primarily enhances first-answer correctness rather than the ability to correct initially wrong answers through reflections. This motivates us to propose a question-aware early-stopping method that enhances inference-time token efficiency by stopping the reasoning process once a few plausible candidate answers are generated, thereby reducing unnecessary reflection steps. Motivated by this, we further propose to dynamically truncate the reflections after a candidate answer has appeared during generation, which reduces reasoning tokens by 24.5% across five mathematical datasets, within a 2.9% drop in accuracy.
https://huggingface.co/papers/2510.08308
[
6 authors](https://huggingface.co/papers/2510.08308)
·
Oct 9, 2025 
4
https://huggingface.co/papers/2510.08308#community
 [-] 283
https://huggingface.co/login?next=%2Fpapers%2F2505.24726
Reflect, Retry, Reward: Self-Improving LLMs via Reinforcement Learning
https://huggingface.co/papers/2505.24726
We explore a method for improving the performance of large language models through self-reflection and reinforcement learning. By incentivizing the model to generate better self-reflections when it answers incorrectly, we demonstrate that a model's ability to solve complex, verifiable tasks can be enhanced even when generating synthetic data is infeasible and only binary feedback is available. Our framework operates in two stages: first, upon failing a given task, the model generates a self-reflective commentary analyzing its previous attempt; second, the model is given another attempt at the task with the self-reflection in context. If the subsequent attempt succeeds, the tokens generated during the self-reflection phase are rewarded. Our experimental results show substantial performance gains across a variety of model architectures, as high as 34.7% improvement at math equation writing and 18.1% improvement at function calling. Notably, smaller fine-tuned models (1.5 billion to 7 billion parameters) outperform models in the same family that are 10 times larger. Our novel paradigm is thus an exciting pathway to more useful and reliable language models that can self-improve on challenging tasks with limited external feedback.
https://huggingface.co/papers/2505.24726
[
8 authors](https://huggingface.co/papers/2505.24726)
·
May 30, 2025 
9
https://huggingface.co/papers/2505.24726#community
 [-] 5
https://huggingface.co/login?next=%2Fpapers%2F2512.20362
CRAFT: Continuous Reasoning and Agentic Feedback Tuning for Multimodal Text-to-Image Generation
https://huggingface.co/papers/2512.20362
Recent work has shown that inference-time reasoning and reflection can improve text-to-image generation without retraining. However, existing approaches often rely on implicit, holistic critiques or unconstrained prompt rewrites, making their behavior difficult to interpret, control, or stop reliably. In contrast, large language models have benefited from explicit, structured forms of thinking based on verification, targeted correction, and early stopping. We introduce CRAFT (Continuous Reasoning and Agentic Feedback Tuning), a training-free and model-agnostic framework for multimodal image generation. CRAFT transforms a user prompt into a set of explicit, dependency-structured visual constraints, verifies generated images using a vision-language model, and performs targeted prompt updates only when specific constraints are violated. This iterative process includes an explicit stopping criterion, resulting in an interpretable and controllable inference-time refinement loop. Across multiple model families and challenging benchmarks, CRAFT consistently improves compositional accuracy, text rendering, and preference-based evaluations, with particularly strong gains for lightweight generators. Importantly, these improvements incur only a negligible inference-time overhead, allowing smaller or cheaper models to approach the quality of substantially more expensive systems. Our results suggest that explicitly structured, constraint-driven inference-time reasoning is a key ingredient for improving the reliability of multimodal generative models.
https://huggingface.co/papers/2512.20362
[
5 authors](https://huggingface.co/papers/2512.20362)
·
Dec 23, 2025
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2310.08101
Promptor: A Conversational and Autonomous Prompt Generation Agent for Intelligent Text Entry Techniques
https://huggingface.co/papers/2310.08101
Text entry is an essential task in our day-to-day digital interactions. Numerous intelligent features have been developed to streamline this process, making text entry more effective, efficient, and fluid. These improvements include sentence prediction and user personalization. However, as deep learning-based language models become the norm for these advanced features, the necessity for data collection and model fine-tuning increases. These challenges can be mitigated by harnessing the in-context learning capability of large language models such as GPT-3.5. This unique feature allows the language model to acquire new skills through prompts, eliminating the need for data collection and fine-tuning. Consequently, large language models can learn various text prediction techniques. We initially showed that, for a sentence prediction task, merely prompting GPT-3.5 surpassed a GPT-2 backed system and is comparable with a fine-tuned GPT-3.5 model, with the latter two methods requiring costly data collection, fine-tuning and post-processing. However, the task of prompting large language models to specialize in specific text prediction tasks can be challenging, particularly for designers without expertise in prompt engineering. To address this, we introduce Promptor, a conversational prompt generation agent designed to engage proactively with designers. Promptor can automatically generate complex prompts tailored to meet specific needs, thus offering a solution to this challenge. We conducted a user study involving 24 participants creating prompts for three intelligent text entry tasks, half of the participants used Promptor while the other half designed prompts themselves. The results show that Promptor-designed prompts result in a 35% increase in similarity and 22% in coherence over those by designers.
https://huggingface.co/papers/2310.08101
[
5 authors](https://huggingface.co/papers/2310.08101)
·
Oct 11, 2023
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2505.16475
ReflectEvo: Improving Meta Introspection of Small LLMs by Learning Self-Reflection
https://huggingface.co/papers/2505.16475
We present a novel pipeline, ReflectEvo, to demonstrate that small language models (SLMs) can enhance meta introspection through reflection learning. This process iteratively generates self-reflection for self-training, fostering a continuous and self-evolving process. Leveraging this pipeline, we construct ReflectEvo-460k, a large-scale, comprehensive, self-generated reflection dataset with broadened instructions and diverse multi-domain tasks. Building upon this dataset, we demonstrate the effectiveness of reflection learning to improve SLMs' reasoning abilities using SFT and DPO with remarkable performance, substantially boosting Llama-3 from 52.4% to 71.2% and Mistral from 44.4% to 71.1%. It validates that ReflectEvo can rival or even surpass the reasoning capability of the three prominent open-sourced models on BIG-bench without distillation from superior models or fine-grained human annotation. We further conduct a deeper analysis of the high quality of self-generated reflections and their impact on error localization and correction. Our work highlights the potential of continuously enhancing the reasoning performance of SLMs through iterative reflection learning in the long run.
https://huggingface.co/papers/2505.16475
 

https://huggingface.co/papers/2505.16475
bigai Beijing Institute for General Artificial Intelligence
https://huggingface.co/bigai
·
May 21, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2401.08189
PRewrite: Prompt Rewriting with Reinforcement Learning
https://huggingface.co/papers/2401.08189
Prompt engineering is critical for the development of LLM-based applications. However, it is usually done manually in a "trial and error" fashion. This manual procedure can be time consuming, ineffective, and the generated prompts are, in a lot of cases, sub-optimal. Even for the prompts which seemingly work well, there is always a lingering question: can the prompts be made better with further modifications? To address these questions, in this paper, we investigate prompt engineering automation. We consider a specific use case scenario in which developers/users have drafted initial prompts, but lack the time/expertise to optimize them. We propose PRewrite, an automated tool to rewrite these drafts and to generate highly effective new prompts. PRewrite is based on the Reinforcement Learning (RL) framework which allows for end-to-end optimization and our design allows the RL search to happen in a large action space. The automated tool leverages manually crafted prompts as starting points which makes the rewriting procedure more guided and efficient. The generated prompts are human readable, and self-explanatory, unlike some of those in previous works. We conducted extensive experiments on diverse datasets and found that the prompts generated with this new method not only outperform professionally crafted prompts, but also prompts generated with other previously proposed methods.
https://huggingface.co/papers/2401.08189
[
5 authors](https://huggingface.co/papers/2401.08189)
·
Jan 15, 2024 
1
https://huggingface.co/papers/2401.08189#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2409.12011
Mixture of Prompt Learning for Vision Language Models
https://huggingface.co/papers/2409.12011
As powerful pre-trained vision-language models (VLMs) like CLIP gain prominence, numerous studies have attempted to combine VLMs for downstream tasks. Among these, prompt learning has been validated as an effective method for adapting to new tasks, which only requiring a small number of parameters. However, current prompt learning methods face two challenges: first, a single soft prompt struggles to capture the diverse styles and patterns within a dataset; second, fine-tuning soft prompts is prone to overfitting. To address these challenges, we propose a mixture of soft prompt learning method incorporating a routing module. This module is able to capture a dataset's varied styles and dynamically selects the most suitable prompts for each instance. Additionally, we introduce a novel gating mechanism to ensure the router selects prompts based on their similarity to hard prompt templates, which both retaining knowledge from hard prompts and improving selection accuracy. We also implement semantically grouped text-level supervision, initializing each soft prompt with the token embeddings of manually designed templates from its group and applied a contrastive loss between the resulted text feature and hard prompt encoded text feature. This supervision ensures that the text features derived from soft prompts remain close to those from their corresponding hard prompts, preserving initial knowledge and mitigating overfitting. Our method has been validated on 11 datasets, demonstrating evident improvements in few-shot learning, domain generalization, and base-to-new generalization scenarios compared to existing baselines. The code will be available at https://anonymous.4open.science/r/mocoop-6387
https://huggingface.co/papers/2409.12011
[
3 authors](https://huggingface.co/papers/2409.12011)
·
Sep 18, 2024
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2505.10543
Towards a Deeper Understanding of Reasoning Capabilities in Large Language Models
https://huggingface.co/papers/2505.10543
While large language models demonstrate impressive performance on static benchmarks, the true potential of large language models as self-learning and reasoning agents in dynamic environments remains unclear. This study systematically evaluates the efficacy of self-reflection, heuristic mutation, and planning as prompting techniques to test the adaptive capabilities of agents. We conduct experiments with various open-source language models in dynamic environments and find that larger models generally outperform smaller ones, but that strategic prompting can close this performance gap. Second, a too-long prompt can negatively impact smaller models on basic reactive tasks, while larger models show more robust behaviour. Third, advanced prompting techniques primarily benefit smaller models on complex games, but offer less improvement for already high-performing large language models. Yet, we find that advanced reasoning methods yield highly variable outcomes: while capable of significantly improving performance when reasoning and decision-making align, they also introduce instability and can lead to big performance drops. Compared to human performance, our findings reveal little evidence of true emergent reasoning. Instead, large language model performance exhibits persistent limitations in crucial areas such as planning, reasoning, and spatial coordination, suggesting that current-generation large language models still suffer fundamental shortcomings that may not be fully overcome through self-reflective prompting alone. Reasoning is a multi-faceted task, and while reasoning methods like Chain of thought improves multi-step reasoning on math word problems, our findings using dynamic benchmarks highlight important shortcomings in general reasoning capabilities, indicating a need to move beyond static benchmarks to capture the complexity of reasoning.
https://huggingface.co/papers/2505.10543
[
5 authors](https://huggingface.co/papers/2505.10543)
·
May 15, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2602.23320
ParamMem: Augmenting Language Agents with Parametric Reflective Memory
https://huggingface.co/papers/2602.23320
Self-reflection enables language agents to iteratively refine solutions, yet often produces repetitive outputs that limit reasoning performance. Recent studies have attempted to address this limitation through various approaches, among which increasing reflective diversity has shown promise. Our empirical analysis reveals a strong positive correlation between reflective diversity and task success, further motivating the need for diverse reflection signals. We introduce ParamMem, a parametric memory module that encodes cross-sample reflection patterns into model parameters, enabling diverse reflection generation through temperature-controlled sampling. Building on this module, we propose ParamAgent, a reflection-based agent framework that integrates parametric memory with episodic and cross-sample memory. Extensive experiments on code generation, mathematical reasoning, and multi-hop question answering demonstrate consistent improvements over state-of-the-art baselines. Further analysis reveals that ParamMem is sample-efficient, enables weak-to-strong transfer across model scales, and supports self-improvement without reliance on stronger external model, highlighting the potential of ParamMem as an effective component for enhancing language agents.
https://huggingface.co/papers/2602.23320
[
6 authors](https://huggingface.co/papers/2602.23320)
·
Feb 26
 [-] 7
https://huggingface.co/login?next=%2Fpapers%2F2505.20561
Beyond Markovian: Reflective Exploration via Bayes-Adaptive RL for LLM Reasoning
https://huggingface.co/papers/2505.20561
Large Language Models (LLMs) trained via Reinforcement Learning (RL) have exhibited strong reasoning capabilities and emergent reflective behaviors, such as backtracking and error correction. However, conventional Markovian RL confines exploration to the training phase to learn an optimal deterministic policy and depends on the history contexts only through the current state. Therefore, it remains unclear whether reflective reasoning will emerge during Markovian RL training, or why they are beneficial at test time. To remedy this, we recast reflective exploration within the Bayes-Adaptive RL framework, which explicitly optimizes the expected return under a posterior distribution over Markov decision processes. This Bayesian formulation inherently incentivizes both reward-maximizing exploitation and information-gathering exploration via belief updates. Our resulting algorithm, BARL, instructs the LLM to stitch and switch strategies based on the observed outcomes, offering principled guidance on when and how the model should reflectively explore. Empirical results on both synthetic and mathematical reasoning tasks demonstrate that BARL outperforms standard Markovian RL approaches at test time, achieving superior token efficiency with improved exploration effectiveness. Our code is available at https://github.com/shenao-zhang/BARL.
https://huggingface.co/papers/2505.20561
[
8 authors](https://huggingface.co/papers/2505.20561)
·
May 26, 2025 
2
https://huggingface.co/papers/2505.20561#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.14735
Unleashing the potential of prompt engineering in Large Language Models: a comprehensive review
https://huggingface.co/papers/2310.14735
This paper delves into the pivotal role of prompt engineering in unleashing the capabilities of Large Language Models (LLMs). Prompt engineering is the process of structuring input text for LLMs and is a technique integral to optimizing the efficacy of LLMs. This survey elucidates foundational principles of prompt engineering, such as role-prompting, one-shot, and few-shot prompting, as well as more advanced methodologies such as the chain-of-thought and tree-of-thoughts prompting. The paper sheds light on how external assistance in the form of plugins can assist in this task, and reduce machine hallucination by retrieving external knowledge. We subsequently delineate prospective directions in prompt engineering research, emphasizing the need for a deeper understanding of structures and the role of agents in Artificial Intelligence-Generated Content (AIGC) tools. We discuss how to assess the efficacy of prompt methods from different perspectives and using different methods. Finally, we gather information about the application of prompt engineering in such fields as education and programming, showing its transformative potential. This comprehensive survey aims to serve as a friendly guide for anyone venturing through the big world of LLMs and prompt engineering.
https://huggingface.co/papers/2310.14735
[
4 authors](https://huggingface.co/papers/2310.14735)
·
Oct 22, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2307.06948
Self-regulating Prompts: Foundational Model Adaptation without Forgetting
https://huggingface.co/papers/2307.06948
Prompt learning has emerged as an efficient alternative for fine-tuning foundational models, such as CLIP, for various downstream tasks. Conventionally trained using the task-specific objective, i.e., cross-entropy loss, prompts tend to overfit downstream data distributions and find it challenging to capture task-agnostic general features from the frozen CLIP. This leads to the loss of the model's original generalization capability. To address this issue, our work introduces a self-regularization framework for prompting called PromptSRC (Prompting with Self-regulating Constraints). PromptSRC guides the prompts to optimize for both task-specific and task-agnostic general representations using a three-pronged approach by: (a) regulating prompted representations via mutual agreement maximization with the frozen model, (b) regulating with self-ensemble of prompts over the training trajectory to encode their complementary strengths, and (c) regulating with textual diversity to mitigate sample diversity imbalance with the visual branch. To the best of our knowledge, this is the first regularization framework for prompt learning that avoids overfitting by jointly attending to pre-trained model features, the training trajectory during prompting, and the textual diversity. PromptSRC explicitly steers the prompts to learn a representation space that maximizes performance on downstream tasks without compromising CLIP generalization. We perform extensive experiments on 4 benchmarks where PromptSRC overall performs favorably well compared to the existing methods. Our code and pre-trained models are publicly available at: https://github.com/muzairkhattak/PromptSRC.
https://huggingface.co/papers/2307.06948
[
6 authors](https://huggingface.co/papers/2307.06948)
·
Jul 13, 2023
 [-] 6
https://huggingface.co/login?next=%2Fpapers%2F2512.15374
SCOPE: Prompt Evolution for Enhancing Agent Effectiveness
https://huggingface.co/papers/2512.15374
Large Language Model (LLM) agents are increasingly deployed in environments that generate massive, dynamic contexts. However, a critical bottleneck remains: while agents have access to this context, their static prompts lack the mechanisms to manage it effectively, leading to recurring Corrective and Enhancement failures. To address this capability gap, we introduce SCOPE (Self-evolving Context Optimization via Prompt Evolution). SCOPE frames context management as an online optimization problem, synthesizing guidelines from execution traces to automatically evolve the agent's prompt. We propose a Dual-Stream mechanism that balances tactical specificity (resolving immediate errors) with strategic generality (evolving long-term principles). Furthermore, we introduce Perspective-Driven Exploration to maximize strategy coverage, increasing the likelihood that the agent has the correct strategy for any given task. Experiments on the HLE benchmark show that SCOPE improves task success rates from 14.23% to 38.64% without human intervention. We make our code publicly available at https://github.com/JarvisPei/SCOPE.
https://huggingface.co/papers/2512.15374
[
7 authors](https://huggingface.co/papers/2512.15374)
·
Dec 16, 2025 
2
https://huggingface.co/papers/2512.15374#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.28360
Prompt Codebooks: Discrete Compositional Optimization for Language Model Instruction Refinement
https://huggingface.co/papers/2605.28360
Automatic prompt optimization (APO) has driven significant gains in LLM-based agentic workflows. However, existing methods treat each task's prompt as a monolithic, instance-blind string optimized through global edits, producing brittle updates and preventing the reuse of learned sub-behaviors. We propose Prompt Codebooks (PCO), a novel compositional prompt optimization framework that recasts APO as discrete learning over a finite vocabulary of natural-language instincts - atomic, reusable instruction units. PCO organizes prompt-construction knowledge in a discrete codebook and routes each input to a small subset of entries via an LLM-based encoder; a generator composes them into a prompt for the frozen target model; a critic emits a structured verdict that decomposes by attribution into per-variable textual gradients, jointly training the encoder, generator, and codebook under a language-valued min-max objective. The resulting routing is per-instance: different inputs in the same task receive different instinct compositions, a regime structurally inexpressible under instance-blind methods. Across six benchmarks on Qwen3-8B and LLaMA-3.1-8B, PCO improves over zero-shot by up to +30.36 points, surpasses the strongest prior baseline (GEPA) by +3.34 on HotpotQA and +1.11 in aggregate, and reduces deployed prompt length by up to 14.1x versus MIPROv2 and 3.0x versus GEPA using only K=16 instincts.
https://huggingface.co/papers/2605.28360
[
3 authors](https://huggingface.co/papers/2605.28360)
·
May 26
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.14798
Reflecting in the Reflection: Integrating a Socratic Questioning Framework into Automated AI-Based Question Generation
https://huggingface.co/papers/2601.14798
Designing good reflection questions is pedagogically important but time-consuming and unevenly supported across teachers. This paper introduces a reflection-in-reflection framework for automated generation of reflection questions with large language models (LLMs). Our approach coordinates two role-specialized agents, a Student-Teacher and a Teacher-Educator, that engage in a Socratic multi-turn dialogue to iteratively refine a single question given a teacher-specified topic, key concepts, student level, and optional instructional materials. The Student-Teacher proposes candidate questions with brief rationales, while the Teacher-Educator evaluates them along clarity, depth, relevance, engagement, and conceptual interconnections, responding only with targeted coaching questions or a fixed signal to stop the dialogue. We evaluate the framework in an authentic lower-secondary ICT setting on the topic, using GPT-4o-mini as the backbone model and a stronger GPT- 4-class LLM as an external evaluator in pairwise comparisons of clarity, relevance, depth, and overall quality. First, we study how interaction design and context (dynamic vs.fixed iteration counts; presence or absence of student level and materials) affect question quality. Dynamic stopping combined with contextual information consistently outperforms fixed 5- or 10-step refinement, with very long dialogues prone to drift or over-complication. Second, we show that our two-agent protocol produces questions that are judged substantially more relevant and deeper, and better overall, than a one-shot baseline using the same backbone model.
https://huggingface.co/papers/2601.14798
[
3 authors](https://huggingface.co/papers/2601.14798)
·
Jan 20
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2502.19844
ProAPO: Progressively Automatic Prompt Optimization for Visual Classification
https://huggingface.co/papers/2502.19844
Vision-language models (VLMs) have made significant progress in image classification by training with large-scale paired image-text data. Their performances largely depend on the prompt quality. While recent methods show that visual descriptions generated by large language models (LLMs) enhance the generalization of VLMs, class-specific prompts may be inaccurate or lack discrimination due to the hallucination in LLMs. In this paper, we aim to find visually discriminative prompts for fine-grained categories with minimal supervision and no human-in-the-loop. An evolution-based algorithm is proposed to progressively optimize language prompts from task-specific templates to class-specific descriptions. Unlike optimizing templates, the search space shows an explosion in class-specific candidate prompts. This increases prompt generation costs, iterative times, and the overfitting problem. To this end, we first introduce several simple yet effective edit-based and evolution-based operations to generate diverse candidate prompts by one-time query of LLMs. Then, two sampling strategies are proposed to find a better initial search point and reduce traversed categories, saving iteration costs. Moreover, we apply a novel fitness score with entropy constraints to mitigate overfitting. In a challenging one-shot image classification setting, our method outperforms existing textual prompt-based methods and improves LLM-generated description methods across 13 datasets. Meanwhile, we demonstrate that our optimal prompts improve adapter-based methods and transfer effectively across different backbones.
https://huggingface.co/papers/2502.19844
[
8 authors](https://huggingface.co/papers/2502.19844)
·
Feb 26, 2025
 [-] 10
https://huggingface.co/login?next=%2Fpapers%2F2510.02919
Self-Reflective Generation at Test Time
https://huggingface.co/papers/2510.02919
Large language models (LLMs) increasingly solve complex reasoning tasks via long chain-of-thought, but their forward-only autoregressive generation process is fragile; early token errors can cascade, which creates a clear need for self-reflection mechanisms. However, existing self-reflection either performs revisions over full drafts or learns self-correction via expensive training, both fundamentally reactive and inefficient. To address this, we propose Self-Reflective Generation at Test Time (SRGen), a lightweight test-time framework that reflects before generating at uncertain points. During token generation, SRGen utilizes dynamic entropy thresholding to identify high-uncertainty tokens. For each identified token, it trains a specific corrective vector, which fully exploits the already generated context for a self-reflective generation to correct the token probability distribution. By retrospectively analyzing the partial output, this self-reflection enables more trustworthy decisions, thereby significantly reducing the probability of errors at highly uncertain points. Evaluated on challenging mathematical reasoning benchmarks and a diverse set of LLMs, SRGen can consistently strengthen model reasoning: improvements in single-pass quality also translate into stronger self-consistency voting. Especially, on AIME2024 with DeepSeek-R1-Distill-Qwen-7B, SRGen yields absolute improvements of +12.0% on Pass@1 and +13.3% on Cons@5. Moreover, our findings position SRGen as a plug-and-play method that integrates reflection into the generation process for reliable LLM reasoning, achieving consistent gains with bounded overhead and broad composability with other training-time (e.g., RLHF) and test-time (e.g., SLOT) techniques.
https://huggingface.co/papers/2510.02919
[
8 authors](https://huggingface.co/papers/2510.02919)
·
Oct 3, 2025 
2
https://huggingface.co/papers/2510.02919#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2506.23138
VisualPrompter: Semantic-Aware Prompt Optimization with Visual Feedback for Text-to-Image Synthesis
https://huggingface.co/papers/2506.23138
The notable gap between user-provided and model-preferred prompts poses a significant challenge for generating high-quality images with text-to-image models, compelling the need for prompt engineering. Current studies on prompt engineering can effectively enhance the style and aesthetics of generated images. However, they often neglect the semantic alignment between generated images and user descriptions, resulting in visually appealing but content-wise unsatisfying outputs. In this work, we propose VisualPrompter, a novel training-free prompt engineering framework that refines user inputs to model-preferred sentences. VisualPrompter utilizes an automatic self-reflection module that identifies absent concepts in the generated images, followed by a target-specific prompt optimization mechanism that revises the prompts in a fine-grained manner. By deconstructing prompts, introducing new elements at the atomic semantic level, and then reassembling them, our framework is able to maintain semantic consistency and integrity throughout the optimization process. Extensive experiments demonstrate the effectiveness of VisualPrompter, which achieves new state-of-the-art performance on multiple benchmarks for text-image alignment evaluation. Additionally, our framework features a plug-and-play design, making it highly adaptable to various generative models. Our code is available at https://github.com/teheperinko541/VisualPrompter.
https://huggingface.co/papers/2506.23138
[
5 authors](https://huggingface.co/papers/2506.23138)
·
Jun 28, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2509.04545
PromptEnhancer: A Simple Approach to Enhance Text-to-Image Models via Chain-of-Thought Prompt Rewriting
https://huggingface.co/papers/2509.04545
Recent advancements in text-to-image (T2I) diffusion models have demonstrated remarkable capabilities in generating high-fidelity images. However, these models often struggle to faithfully render complex user prompts, particularly in aspects like attribute binding, negation, and compositional relationships. This leads to a significant mismatch between user intent and the generated output. To address this challenge, we introduce PromptEnhancer, a novel and universal prompt rewriting framework that enhances any pretrained T2I model without requiring modifications to its weights. Unlike prior methods that rely on model-specific fine-tuning or implicit reward signals like image-reward scores, our framework decouples the rewriter from the generator. We achieve this by training a Chain-of-Thought (CoT) rewriter through reinforcement learning, guided by a dedicated reward model we term the AlignEvaluator. The AlignEvaluator is trained to provide explicit and fine-grained feedback based on a systematic taxonomy of 24 key points, which are derived from a comprehensive analysis of common T2I failure modes. By optimizing the CoT rewriter to maximize the reward from our AlignEvaluator, our framework learns to generate prompts that are more precisely interpreted by T2I models. Extensive experiments on the HunyuanImage 2.1 model demonstrate that PromptEnhancer significantly improves image-text alignment across a wide range of semantic and compositional challenges. Furthermore, we introduce a new, high-quality human preference benchmark to facilitate future research in this direction.
https://huggingface.co/papers/2509.04545
[
12 authors](https://huggingface.co/papers/2509.04545)
·
Sep 4, 2025
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
https://huggingface.co/login?next=%2Fpapers%2F2510.05921
Prompt reinforcing for long-term planning of large language models
https://huggingface.co/papers/2510.05921
Large language models (LLMs) have achieved remarkable success in a wide range of natural language processing tasks and can be adapted through prompting. However, they remain suboptimal in multi-turn interactions, often relying on incorrect early assumptions and failing to track user goals over time, which makes such tasks particularly challenging. Prior works in dialogue systems have shown that long-term planning is essential for handling interactive tasks. In this work, we propose a prompt optimisation framework inspired by reinforcement learning, which enables such planning to take place by only modifying the task instruction prompt of the LLM-based agent. By generating turn-by-turn feedback and leveraging experience replay for prompt rewriting, our proposed method shows significant improvement in multi-turn tasks such as text-to-SQL and task-oriented dialogue. Moreover, it generalises across different LLM-based agents and can leverage diverse LLMs as meta-prompting agents. This warrants future research in reinforcement learning-inspired parameter-free optimisation methods.
https://huggingface.co/papers/2510.05921
[
9 authors](https://huggingface.co/papers/2510.05921)
·
Oct 7, 2025
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2605.09998
Continual Harness: Online Adaptation for Self-Improving Foundation Agents
https://huggingface.co/papers/2605.09998
Coding harnesses such as Claude Code and OpenHands wrap foundation models with tools, memory, and planning, but no equivalent exists for embodied agents' long-horizon partial-observability decision-making. We first report our Gemini Plays Pokemon (GPP) experiments. With iterative human-in-the-loop harness refinement, GPP became the first AI system to complete Pokemon Blue, Yellow Legacy on hard mode, and Crystal without a lost battle. In the hardest stages, the agent itself began iterating on its strategy through long-context memory, surfacing emergent self-improvement signals alongside human-in-the-loop refinement. Continual Harness removes the human fully from this loop: a reset-free self-improving harness for embodied agents that formalizes and automates what we observed. Starting from only a minimal environment interface, the agent alternates between acting and refining its own prompt, sub-agents, skills, and memory, drawing on any past trajectory data. Prompt-optimization methods require episode resets; Continual Harness adapts online within a single run. On Pokemon Red and Emerald across frontier models, Continual Harness starting from scratch substantially reduces button-press cost relative to the minimalist baseline and recovers a majority of the gap to a hand-engineered expert harness, with capability-dependent gains, despite starting from the same raw interface with no curated knowledge, no hand-crafted tools, and no domain scaffolding. We then close the loop with the model itself: an online process-reward co-learning loop, in which an open-source agent's rollouts through the refining harness are relabeled by a frontier teacher and used to update the model, drives sustained in-game milestone progress on Pokemon Red without resetting the environment between training iterations.
https://huggingface.co/papers/2605.09998
 

https://huggingface.co/papers/2605.09998
princetonu Princeton University
https://huggingface.co/princetonu
·
May 10 
1
https://huggingface.co/papers/2605.09998#community
 [-] 68
https://huggingface.co/login?next=%2Fpapers%2F2406.06608
The Prompt Report: A Systematic Survey of Prompting Techniques
https://huggingface.co/papers/2406.06608
Generative Artificial Intelligence (GenAI) systems are being increasingly deployed across all parts of industry and research settings. Developers and end users interact with these systems through the use of prompting or prompt engineering. While prompting is a widespread and highly researched concept, there exists conflicting terminology and a poor ontological understanding of what constitutes a prompt due to the area's nascency. This paper establishes a structured understanding of prompts, by assembling a taxonomy of prompting techniques and analyzing their use. We present a comprehensive vocabulary of 33 vocabulary terms, a taxonomy of 58 text-only prompting techniques, and 40 techniques for other modalities. We further present a meta-analysis of the entire literature on natural language prefix-prompting.
https://huggingface.co/papers/2406.06608
[
31 authors](https://huggingface.co/papers/2406.06608)
·
Jun 6, 2024 
4
https://huggingface.co/papers/2406.06608#community
 [-] 48
https://huggingface.co/login?next=%2Fpapers%2F2506.01713
SRPO: Enhancing Multimodal LLM Reasoning via Reflection-Aware Reinforcement Learning
https://huggingface.co/papers/2506.01713
Multimodal large language models (MLLMs) have shown promising capabilities in reasoning tasks, yet still struggle with complex problems requiring explicit self-reflection and self-correction, especially compared to their unimodal text-based counterparts. Existing reflection methods are simplistic and struggle to generate meaningful and instructive feedback, as the reasoning ability and knowledge limits of pre-trained models are largely fixed during initial training. To overcome these challenges, we propose Multimodal Self-Reflection enhanced reasoning with Group Relative Policy Optimization (SRPO), a two-stage reflection-aware reinforcement learning (RL) framework explicitly designed to enhance multimodal LLM reasoning. In the first stage, we construct a high-quality, reflection-focused dataset under the guidance of an advanced MLLM, which generates reflections based on initial responses to help the policy model learn both reasoning and self-reflection. In the second stage, we introduce a novel reward mechanism within the GRPO framework that encourages concise and cognitively meaningful reflection while avoiding redundancy. Extensive experiments across multiple multimodal reasoning benchmarks, including MathVista, MathVision, MathVerse, and MMMU-Pro, using Qwen-2.5-VL-7B and Qwen-2.5-VL-32B demonstrate that SRPO significantly outperforms state-of-the-art models, achieving notable improvements in both reasoning accuracy and reflection quality.
https://huggingface.co/papers/2506.01713
[
13 authors](https://huggingface.co/papers/2506.01713)
·
Jun 2, 2025 
2
https://huggingface.co/papers/2506.01713#community
 [-] 19
https://huggingface.co/login?next=%2Fpapers%2F2406.12050
Learn Beyond The Answer: Training Language Models with Reflection for Mathematical Reasoning
https://huggingface.co/papers/2406.12050
Supervised fine-tuning enhances the problem-solving abilities of language models across various mathematical reasoning tasks. To maximize such benefits, existing research focuses on broadening the training set with various data augmentation techniques, which is effective for standard single-round question-answering settings. Our work introduces a novel technique aimed at cultivating a deeper understanding of the training problems at hand, enhancing performance not only in standard settings but also in more complex scenarios that require reflective thinking. Specifically, we propose reflective augmentation, a method that embeds problem reflection into each training instance. It trains the model to consider alternative perspectives and engage with abstractions and analogies, thereby fostering a thorough comprehension through reflective reasoning. Extensive experiments validate the achievement of our aim, underscoring the unique advantages of our method and its complementary nature relative to existing augmentation techniques.
https://huggingface.co/papers/2406.12050
 

https://huggingface.co/papers/2406.12050
DM2-ND University of Notre Dame DM2 Lab
https://huggingface.co/DM2-ND
·
Jun 17, 2024 
1
https://huggingface.co/papers/2406.12050#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.16507
REprompt: Prompt Generation for Intelligent Software Development Guided by Requirements Engineering
https://huggingface.co/papers/2601.16507
The rapid development of large language models is transforming software development. Beyond serving as code auto-completion tools in integrated development environments, large language models increasingly function as foundation models within coding agents in vibe-coding scenarios. In such settings, prompts play a central role in agent-based intelligent software development, as they not only guide the behavior of large language models but also serve as carriers of user requirements. Under the dominant conversational paradigm, prompts are typically divided into system prompts and user prompts. System prompts provide high-level instructions to steer model behavior and establish conversational context, while user prompts represent inputs and requirements provided by human users. Despite their importance, designing effective prompts remains challenging, as it requires expertise in both prompt engineering and software engineering, particularly requirements engineering. To reduce the burden of manual prompt construction, numerous automated prompt engineering methods have been proposed. However, most existing approaches neglect the methodological principles of requirements engineering, limiting their ability to generate artifacts that conform to formal requirement specifications in realistic software development scenarios. To address this gap, we propose REprompt, a multi-agent prompt optimization framework guided by requirements engineering. Experiment results demonstrate that REprompt effectively optimizes both system and user prompts by grounding prompt generation in requirements engineering principles.
https://huggingface.co/papers/2601.16507
[
7 authors](https://huggingface.co/papers/2601.16507)
·
Jan 22
 [-] 10
https://huggingface.co/login?next=%2Fpapers%2F2605.19952
Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory
https://huggingface.co/papers/2605.19952
To enable reliable long-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history. Most existing methods adopt an extracted fact based paradigm: handcrafted static prompts compress raw dialogues into atomic facts, which are then stored, matched, and injected into downstream reasoning. Nevertheless, such fact-centric designs inevitably discard fine-grained details in original dialogues and fail to support deep reasoning over scattered isolated facts. Moreover, static prompts cannot maintain consistent extraction granularity across diverse dialogue styles. To address these limitations, we propose TriMem, which maintains three coexisting representation granularities, including raw dialogue segments anchored by source identifiers for storage fidelity, extracted atomic facts for efficient memory retrieval, synthesized profiles that aggregate dispersed facts into holistic semantic understanding for deep reasoning. We further adopt TextGrad-based prompt optimization, which iteratively refines extraction and profiling prompts via response quality feedback, achieving lifelong evolution without any parameter updating. Extensive experiments on LoCoMo and PerLTQA across multiple LLM backbones demonstrate that TriMem consistently outperforms strong memory baselines. The code is available at https://TMLR-TriMem.github.io .
https://huggingface.co/papers/2605.19952
 

https://huggingface.co/papers/2605.19952
TMLR-Group-HF TMLR Group
https://huggingface.co/TMLR-Group-HF
·
May 18 
2
https://huggingface.co/papers/2605.19952#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2605.20086
What Do Evolutionary Coding Agents Evolve?
https://huggingface.co/papers/2605.20086
Recent work pairs LLMs with evolutionary search to iteratively generate, modify, and select code using task-specific feedback. These systems have produced strong results in mathematical discovery and algorithm design, yet a fundamental question remains: what do they actually evolve? Progress is typically summarized by the best score a run reaches under a task-specific evaluator, but that score can reflect several different mechanisms: new algorithmic structure, re-tuning an existing strategy, recombining ideas already in the model's internal knowledge, or overfitting to the evaluator. Distinguishing these mechanisms requires inspecting the search process itself, not only its final outcome. We introduce EvoTrace, a dataset of evolutionary coding traces spanning four evolutionary frameworks, reasoning and non-reasoning models, and 16 tasks across mathematics and algorithm design. To analyze these traces, we develop EvoReplay, a replay-based methodology that reconstructs the local search states behind high-scoring solutions and tests controlled interventions, including adjusting constants, removing program components and substituting models or prompting contexts. We annotate every code edit in EvoTrace with one of nine recurring edit types using an LLM-as-judge pipeline validated against blind human re-annotation. Across EvoTrace, most score gains come from a small subset of these edit types. We further find a deterministic cycling pattern: about 30% of code lines added during search are byte-identical re-introductions of previously-deleted lines, present throughout nearly every run. These results show that benchmark gains in evolutionary coding agents can arise from qualitatively different mechanisms, only some of which correspond to new algorithmic structure. EvoTrace enables more diagnostic evaluation of evolutionary coding agents beyond final benchmark scores.
https://huggingface.co/papers/2605.20086
[
7 authors](https://huggingface.co/papers/2605.20086)
·
May 18
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2204.13988
A Taxonomy of Prompt Modifiers for Text-To-Image Generation
https://huggingface.co/papers/2204.13988
Text-to-image generation has seen an explosion of interest since 2021. Today, beautiful and intriguing digital images and artworks can be synthesized from textual inputs ("prompts") with deep generative models. Online communities around text-to-image generation and AI generated art have quickly emerged. This paper identifies six types of prompt modifiers used by practitioners in the online community based on a 3-month ethnographic study. The novel taxonomy of prompt modifiers provides researchers a conceptual starting point for investigating the practice of text-to-image generation, but may also help practitioners of AI generated art improve their images. We further outline how prompt modifiers are applied in the practice of "prompt engineering." We discuss research opportunities of this novel creative practice in the field of Human-Computer Interaction (HCI). The paper concludes with a discussion of broader implications of prompt engineering from the perspective of Human-AI Interaction (HAI) in future applications beyond the use case of text-to-image generation and AI generated art.
https://huggingface.co/papers/2204.13988
[
1 authors](https://huggingface.co/papers/2204.13988)
·
Apr 19, 2022
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.05087
TeachLM: Post-Training LLMs for Education Using Authentic Learning Data
https://huggingface.co/papers/2510.05087
The promise of generative AI to revolutionize education is constrained by the pedagogical limits of large language models (LLMs). A major issue is the lack of access to high-quality training data that reflect the learning of actual students. Prompt engineering has emerged as a stopgap, but the ability of prompts to encode complex pedagogical strategies in rule-based natural language is inherently limited. To address this gap we introduce TeachLM - an LLM optimized for teaching through parameter-efficient fine-tuning of state-of-the-art models. TeachLM is trained on a dataset comprised of 100,000 hours of one-on-one, longitudinal student-tutor interactions maintained by Polygence, which underwent a rigorous anonymization process to protect privacy. We use parameter-efficient fine-tuning to develop an authentic student model that enables the generation of high-fidelity synthetic student-tutor dialogues. Building on this capability, we propose a novel multi-turn evaluation protocol that leverages synthetic dialogue generation to provide fast, scalable, and reproducible assessments of the dialogical capabilities of LLMs. Our evaluations demonstrate that fine-tuning on authentic learning data significantly improves conversational and pedagogical performance - doubling student talk time, improving questioning style, increasing dialogue turns by 50%, and greater personalization of instruction.
https://huggingface.co/papers/2510.05087
[
3 authors](https://huggingface.co/papers/2510.05087)
·
Oct 5, 2025
 [-] 4
https://huggingface.co/login?next=%2Fpapers%2F2602.21198
Learning from Trials and Errors: Reflective Test-Time Planning for Embodied LLMs
https://huggingface.co/papers/2602.21198
Embodied LLMs endow robots with high-level task reasoning, but they cannot reflect on what went wrong or why, turning deployment into a sequence of independent trials where mistakes repeat rather than accumulate into experience. Drawing upon human reflective practitioners, we introduce Reflective Test-Time Planning, which integrates two modes of reflection: reflection-in-action, where the agent uses test-time scaling to generate and score multiple candidate actions using internal reflections before execution; and reflection-on-action, which uses test-time training to update both its internal reflection model and its action policy based on external reflections after execution. We also include retrospective reflection, allowing the agent to re-evaluate earlier decisions and perform model updates with hindsight for proper long-horizon credit assignment. Experiments on our newly-designed Long-Horizon Household benchmark and MuJoCo Cupboard Fitting benchmark show significant gains over baseline models, with ablative studies validating the complementary roles of reflection-in-action and reflection-on-action. Qualitative analyses, including real-robot trials, highlight behavioral correction through reflection.
https://huggingface.co/papers/2602.21198
[
6 authors](https://huggingface.co/papers/2602.21198)
·
Feb 24 
2
https://huggingface.co/papers/2602.21198#community
 [-] 15
https://huggingface.co/login?next=%2Fpapers%2F2509.02040
Attributes as Textual Genes: Leveraging LLMs as Genetic Algorithm Simulators for Conditional Synthetic Data Generation
https://huggingface.co/papers/2509.02040
Large Language Models (LLMs) excel at generating synthetic data, but ensuring its quality and diversity remains challenging. We propose Genetic Prompt, a novel framework that combines genetic algorithms with LLMs to augment synthetic data generation. Our approach treats semantic text attributes as gene sequences and leverages the LLM to simulate crossover and mutation operations. This genetic process enhances data quality and diversity by creating novel attribute combinations, yielding synthetic distributions closer to real-world data. To optimize parent selection, we also integrate an active learning scheme that expands the offspring search space. Our experiments on multiple NLP tasks reveal several key findings: Genetic Prompt not only significantly outperforms state-of-the-art baselines but also shows robust performance across various generator model sizes and scales. Moreover, we demonstrate that fusing our synthetic data with the original training set significantly boosts downstream model performance, particularly for class-imbalanced scenarios. Our findings validate that Genetic Prompt is an effective method for producing high-quality synthetic data for a wide range of NLP applications.
https://huggingface.co/papers/2509.02040
[
3 authors](https://huggingface.co/papers/2509.02040)
·
Sep 1, 2025 
1
https://huggingface.co/papers/2509.02040#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2507.14913
PromptSuite: A Task-Agnostic Framework for Multi-Prompt Generation
https://huggingface.co/papers/2507.14913
Evaluating LLMs with a single prompt has proven unreliable, with small changes leading to significant performance differences. However, generating the prompt variations needed for a more robust multi-prompt evaluation is challenging, limiting its adoption in practice. To address this, we introduce PromptSuite, a framework that enables the automatic generation of various prompts. PromptSuite is flexible - working out of the box on a wide range of tasks and benchmarks. It follows a modular prompt design, allowing controlled perturbations to each component, and is extensible, supporting the addition of new components and perturbation types. Through a series of case studies, we show that PromptSuite provides meaningful variations to support strong evaluation practices. It is available through both a Python API: https://github.com/eliyahabba/PromptSuite, and a user-friendly web interface: https://promptsuite.streamlit.app/
https://huggingface.co/papers/2507.14913
[
4 authors](https://huggingface.co/papers/2507.14913)
·
Jul 19, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2112.08654
Learning to Prompt for Continual Learning
https://huggingface.co/papers/2112.08654
The mainstream paradigm behind continual learning has been to adapt the model parameters to non-stationary data distributions, where catastrophic forgetting is the central challenge. Typical methods rely on a rehearsal buffer or known task identity at test time to retrieve learned knowledge and address forgetting, while this work presents a new paradigm for continual learning that aims to train a more succinct memory system without accessing task identity at test time. Our method learns to dynamically prompt (L2P) a pre-trained model to learn tasks sequentially under different task transitions. In our proposed framework, prompts are small learnable parameters, which are maintained in a memory space. The objective is to optimize prompts to instruct the model prediction and explicitly manage task-invariant and task-specific knowledge while maintaining model plasticity. We conduct comprehensive experiments under popular image classification benchmarks with different challenging continual learning settings, where L2P consistently outperforms prior state-of-the-art methods. Surprisingly, L2P achieves competitive results against rehearsal-based methods even without a rehearsal buffer and is directly applicable to challenging task-agnostic continual learning. Source code is available at https://github.com/google-research/l2p.
https://huggingface.co/papers/2112.08654
[
10 authors](https://huggingface.co/papers/2112.08654)
·
Dec 15, 2021
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.18847
MulVul: Retrieval-augmented Multi-Agent Code Vulnerability Detection via Cross-Model Prompt Evolution
https://huggingface.co/papers/2601.18847
Large Language Models (LLMs) struggle to automate real-world vulnerability detection due to two key limitations: the heterogeneity of vulnerability patterns undermines the effectiveness of a single unified model, and manual prompt engineering for massive weakness categories is unscalable. To address these challenges, we propose MulVul, a retrieval-augmented multi-agent framework designed for precise and broad-coverage vulnerability detection. MulVul adopts a coarse-to-fine strategy: a Router agent first predicts the top-k coarse categories and then forwards the input to specialized Detector agents, which identify the exact vulnerability types. Both agents are equipped with retrieval tools to actively source evidence from vulnerability knowledge bases to mitigate hallucinations. Crucially, to automate the generation of specialized prompts, we design Cross-Model Prompt Evolution, a prompt optimization mechanism where a generator LLM iteratively refines candidate prompts while a distinct executor LLM validates their effectiveness. This decoupling mitigates the self-correction bias inherent in single-model optimization. Evaluated on 130 CWE types, MulVul achieves 34.79% Macro-F1, outperforming the best baseline by 41.5%. Ablation studies validate cross-model prompt evolution, which boosts performance by 51.6% over manual prompts by effectively handling diverse vulnerability patterns.
https://huggingface.co/papers/2601.18847
[
5 authors](https://huggingface.co/papers/2601.18847)
·
Jan 25
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2401.02009
Self-Contrast: Better Reflection Through Inconsistent Solving Perspectives
https://huggingface.co/papers/2401.02009
The reflection capacity of Large Language Model (LLM) has garnered extensive attention. A post-hoc prompting strategy, e.g., reflexion and self-refine, refines LLM's response based on self-evaluated or external feedback. However, recent research indicates without external feedback, LLM's intrinsic reflection is unstable. Our investigation unveils that the key bottleneck is the quality of the self-evaluated feedback. We find LLMs often exhibit overconfidence or high randomness when self-evaluate, offering stubborn or inconsistent feedback, which causes poor reflection. To remedy this, we advocate Self-Contrast: It adaptively explores diverse solving perspectives tailored to the request, contrasts the differences, and summarizes these discrepancies into a checklist which could be used to re-examine and eliminate discrepancies. Our method endows LLM with diverse perspectives to alleviate stubborn biases. Moreover, their discrepancies indicate potential errors or inherent uncertainties that LLM often overlooks. Reflecting upon these can catalyze more accurate and stable reflection. Experiments conducted on a series of reasoning and translation tasks with different LLMs serve to underscore the effectiveness and generality of our strategy.
https://huggingface.co/papers/2401.02009
[
7 authors](https://huggingface.co/papers/2401.02009)
·
Jan 3, 2024
 [-] 72
https://huggingface.co/login?next=%2Fpapers%2F2505.09666
System Prompt Optimization with Meta-Learning
https://huggingface.co/papers/2505.09666
Large Language Models (LLMs) have shown remarkable capabilities, with optimizing their input prompts playing a pivotal role in maximizing their performance. However, while LLM prompts consist of both the task-agnostic system prompts and task-specific user prompts, existing work on prompt optimization has focused on user prompts specific to individual queries or tasks, and largely overlooked the system prompt that is, once optimized, applicable across different tasks and domains. Motivated by this, we introduce the novel problem of bilevel system prompt optimization, whose objective is to design system prompts that are robust to diverse user prompts and transferable to unseen tasks. To tackle this problem, we then propose a meta-learning framework, which meta-learns the system prompt by optimizing it over various user prompts across multiple datasets, while simultaneously updating the user prompts in an iterative manner to ensure synergy between them. We conduct experiments on 14 unseen datasets spanning 5 different domains, on which we show that our approach produces system prompts that generalize effectively to diverse user prompts. Also, our findings reveal that the optimized system prompt enables rapid adaptation even to unseen tasks, requiring fewer optimization steps for test-time user prompts while achieving improved performance.
https://huggingface.co/papers/2505.09666
[
3 authors](https://huggingface.co/papers/2505.09666)
·
May 14, 2025 
3
https://huggingface.co/papers/2505.09666#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2310.16427
PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization
https://huggingface.co/papers/2310.16427
Highly effective, task-specific prompts are often heavily engineered by experts to integrate detailed instructions and domain insights based on a deep understanding of both instincts of large language models (LLMs) and the intricacies of the target task. However, automating the generation of such expert-level prompts remains elusive. Existing prompt optimization methods tend to overlook the depth of domain knowledge and struggle to efficiently explore the vast space of expert-level prompts. Addressing this, we present PromptAgent, an optimization method that autonomously crafts prompts equivalent in quality to those handcrafted by experts. At its core, PromptAgent views prompt optimization as a strategic planning problem and employs a principled planning algorithm, rooted in Monte Carlo tree search, to strategically navigate the expert-level prompt space. Inspired by human-like trial-and-error exploration, PromptAgent induces precise expert-level insights and in-depth instructions by reflecting on model errors and generating constructive error feedback. Such a novel framework allows the agent to iteratively examine intermediate prompts (states), refine them based on error feedbacks (actions), simulate future rewards, and search for high-reward paths leading to expert prompts. We apply PromptAgent to 12 tasks spanning three practical domains: BIG-Bench Hard (BBH), as well as domain-specific and general NLP tasks, showing it significantly outperforms strong Chain-of-Thought and recent prompt optimization baselines. Extensive analyses emphasize its capability to craft expert-level, detailed, and domain-insightful prompts with great efficiency and generalizability.
https://huggingface.co/papers/2310.16427
[
9 authors](https://huggingface.co/papers/2310.16427)
·
Oct 24, 2023
 [-] 34
https://huggingface.co/login?next=%2Fpapers%2F2509.19894
PromptCoT 2.0: Scaling Prompt Synthesis for Large Language Model Reasoning
https://huggingface.co/papers/2509.19894
Large language models (LLMs) are evolving from conversational systems into strong reasoners for tasks such as Olympiad mathematics and competitive programming. While scaling parameters and test-time computation has driven progress, a key bottleneck is the lack of high-quality training problems: human-curated datasets are costly and limited, while existing synthetic corpora are often too easy or narrow. PromptCoT 1.0 showed that injecting rationales into prompt synthesis increases problem difficulty. Building on this, we present PromptCoT 2.0, a scalable framework that replaces hand-crafted heuristics with an expectation-maximization (EM) loop, where rationales are iteratively refined to guide prompt construction. This produces problems that are both harder and more diverse than prior corpora. The synthetic prompts support two post-training regimes: (1) Self-Play, where strong models improve autonomously via verifiable feedback without stronger teachers; and (2) Supervised Fine-Tuning (SFT), where weaker models learn from teacher-distilled traces. Extensive experiments demonstrate the effectiveness of this approach. In self-play, applying PromptCoT 2.0 to Qwen3-30B-A3B-Thinking-2507 sets new state-of-the-art results at the 30B scale, with +4.4, +4.8, and +5.3 on AIME 24/25 and HMMT 25, +6.1 and +5.0 on LiveCodeBench v5/v6, and +35 Elo on Codeforces. In SFT, training Qwen2.5-7B-Instruct solely on synthetic prompts boosts accuracy to 73.1 (AIME 24), 65.6 (AIME 25), and 53.4 (LiveCodeBench v5), surpassing models trained on human or hybrid data. Analyses further confirm that PromptCoT 2.0 yields fundamentally harder and distributionally distinct problems. These results establish prompt synthesis as a new axis for scaling reasoning and position PromptCoT 2.0 as a scalable foundation for future open-source models. The implementation is available at https://github.com/inclusionAI/PromptCoT.
https://huggingface.co/papers/2509.19894
[
5 authors](https://huggingface.co/papers/2509.19894)
·
Sep 23, 2025 
5
https://huggingface.co/papers/2509.19894#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2504.18722
MODP: Multi Objective Directional Prompting
https://huggingface.co/papers/2504.18722
Recent advances in large language models (LLMs) have led to their popularity across multiple use-cases. However, prompt engineering, the process for optimally utilizing such models, remains approximation-driven and subjective. Most of the current research on prompt engineering focuses on task-specific optimization, while neglecting the behavior of the LLM under consideration during prompt development. This paper introduces MODP -- Multi Objective Directional Prompting, a framework based on two key concepts: 1) multi-objectivity: the importance of considering an LLM's intrinsic behavior as an additional objective in prompt development, and 2) directional prompting: a metrics-driven method for prompt engineering to ensure development of robust and high-precision prompts. We demonstrate the effectiveness of our proposed ideas on a summarization task, using a synthetically created dataset, achieving a 26% performance gain over initial prompts. Finally, we apply MODP to develop prompts for Dell's Next Best Action support tool, which is now in production and is used by more than 10,000 internal support agents and serving millions of customers worldwide.
https://huggingface.co/papers/2504.18722
[
4 authors](https://huggingface.co/papers/2504.18722)
·
Apr 25, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2402.16929
LangGPT: Rethinking Structured Reusable Prompt Design Framework for LLMs from the Programming Language
https://huggingface.co/papers/2402.16929
LLMs have demonstrated commendable performance across diverse domains. Nevertheless, formulating high-quality prompts to instruct LLMs proficiently poses a challenge for non-AI experts. Existing research in prompt engineering suggests somewhat scattered optimization principles and designs empirically dependent prompt optimizers. Unfortunately, these endeavors lack a structured design template, incurring high learning costs and resulting in low reusability. In addition, it is not conducive to the iterative updating of prompts. Inspired by structured reusable programming languages, we propose LangGPT, a dual-layer prompt design framework as the programming language for LLMs. LangGPT has an easy-to-learn normative structure and provides an extended structure for migration and reuse. Experiments illustrate that LangGPT significantly enhances the performance of LLMs. Moreover, the case study shows that LangGPT leads LLMs to generate higher-quality responses. Furthermore, we analyzed the ease of use and reusability of LangGPT through a user survey in our online community.
https://huggingface.co/papers/2402.16929
[
14 authors](https://huggingface.co/papers/2402.16929)
·
Feb 26, 2024
 [-] 6
https://huggingface.co/login?next=%2Fpapers%2F2410.16270
Reflection-Bench: probing AI intelligence with reflection
https://huggingface.co/papers/2410.16270
The ability to adapt beliefs or behaviors in response to unexpected outcomes, reflection, is fundamental to intelligent systems' interaction with the world. From a cognitive science perspective, this serves as a core principle of intelligence applicable to both human and AI systems. To address the debate on the intelligence of large language models (LLMs), we propose Reflection-Bench, a comprehensive benchmark comprising 7 tasks spanning core cognitive functions crucial for reflection, including perception, memory, belief updating, decision-making, prediction, counterfactual thinking, and meta-reflection. We evaluate the performances of 13 prominent LLMs such as OpenAI o1, GPT-4, Claude 3.5 Sonnet, etc. The results indicate that current LLMs still lack satisfactory reflection ability. We discuss the underlying causes of these results and suggest potential avenues for future research. In conclusion, Reflection-Bench offers both evaluation tools and inspiration for developing AI capable of reliably interacting with the environment. Our data and code are available at https://github.com/YabYum/ReflectionBench.
https://huggingface.co/papers/2410.16270
[
7 authors](https://huggingface.co/papers/2410.16270)
·
Oct 21, 2024 
2
https://huggingface.co/papers/2410.16270#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2402.07927
A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications
https://huggingface.co/papers/2402.07927
Prompt engineering has emerged as an indispensable technique for extending the capabilities of large language models (LLMs) and vision-language models (VLMs). This approach leverages task-specific instructions, known as prompts, to enhance model efficacy without modifying the core model parameters. Rather than updating the model parameters, prompts allow seamless integration of pre-trained models into downstream tasks by eliciting desired model behaviors solely based on the given prompt. Prompts can be natural language instructions that provide context to guide the model or learned vector representations that activate relevant knowledge. This burgeoning field has enabled success across various applications, from question-answering to commonsense reasoning. However, there remains a lack of systematic organization and understanding of the diverse prompt engineering methods and techniques. This survey paper addresses the gap by providing a structured overview of recent advancements in prompt engineering, categorized by application area. For each prompting approach, we provide a summary detailing the prompting methodology, its applications, the models involved, and the datasets utilized. We also delve into the strengths and limitations of each approach and include a taxonomy diagram and table summarizing datasets, models, and critical points of each prompting technique. This systematic analysis enables a better understanding of this rapidly developing field and facilitates future research by illuminating open challenges and opportunities for prompt engineering.
https://huggingface.co/papers/2402.07927
[
6 authors](https://huggingface.co/papers/2402.07927)
·
Feb 5, 2024 
1
https://huggingface.co/papers/2402.07927#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2405.03998
Sketch Then Generate: Providing Incremental User Feedback and Guiding LLM Code Generation through Language-Oriented Code Sketches
https://huggingface.co/papers/2405.03998
Crafting effective prompts for code generation or editing with Large Language Models (LLMs) is not an easy task. Particularly, the absence of immediate, stable feedback during prompt crafting hinders effective interaction, as users are left to mentally imagine possible outcomes until the code is generated. In response, we introduce Language-Oriented Code Sketching, an interactive approach that provides instant, incremental feedback in the form of code sketches (i.e., incomplete code outlines) during prompt crafting. This approach converts a prompt into a code sketch by leveraging the inherent linguistic structures within the prompt and applying classic natural language processing techniques. The sketch then serves as an intermediate placeholder that not only previews the intended code structure but also guides the LLM towards the desired code, thereby enhancing human-LLM interaction. We conclude by discussing the approach's applicability and future plans.
https://huggingface.co/papers/2405.03998
[
4 authors](https://huggingface.co/papers/2405.03998)
·
May 6, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2309.01155
LoGoPrompt: Synthetic Text Images Can Be Good Visual Prompts for Vision-Language Models
https://huggingface.co/papers/2309.01155
Prompt engineering is a powerful tool used to enhance the performance of pre-trained models on downstream tasks. For example, providing the prompt Let's think step by step" improved GPT-3's reasoning accuracy to 63% on MutiArith while prompting a photo of" filled with a class name enables CLIP to achieve 80% zero-shot accuracy on ImageNet. While previous research has explored prompt learning for the visual modality, analyzing what constitutes a good visual prompt specifically for image recognition is limited. In addition, existing visual prompt tuning methods' generalization ability is worse than text-only prompting tuning. This paper explores our key insight: synthetic text images are good visual prompts for vision-language models! To achieve that, we propose our LoGoPrompt, which reformulates the classification objective to the visual prompt selection and addresses the chicken-and-egg challenge of first adding synthetic text images as class-wise visual prompts or predicting the class first. Without any trainable visual prompt parameters, experimental results on 16 datasets demonstrate that our method consistently outperforms state-of-the-art methods in few-shot learning, base-to-new generalization, and domain generalization.
https://huggingface.co/papers/2309.01155
[
2 authors](https://huggingface.co/papers/2309.01155)
·
Sep 3, 2023
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2604.00901
Experience as a Compass: Multi-agent RAG with Evolving Orchestration and Agent Prompts
https://huggingface.co/papers/2604.00901
Multi-agent Retrieval-Augmented Generation (RAG), wherein each agent takes on a specific role, supports hard queries that require multiple steps and sources, or complex reasoning. Existing approaches, however, rely on static agent behaviors and fixed orchestration strategies, leading to brittle performance on diverse, multi-hop tasks. We identify two key limitations: the lack of continuously adaptive orchestration mechanisms and the absence of behavior-level learning for individual agents. To this end, we propose HERA, a hierarchical framework that jointly evolves multi-agent orchestration and role-specific agent prompts. At the global level, HERA optimizes query-specific agent topologies through reward-guided sampling and experience accumulation. At the local level, Role-Aware Prompt Evolution refines agent behaviors via credit assignment and dual-axes adaptation along operational and behavioral principles, enabling targeted, role-conditioned improvements. On six knowledge-intensive benchmarks, HERA achieves an average improvement of 38.69% over recent baselines while maintaining robust generalization and token efficiency. Topological analyses reveal emergent self-organization, where sparse exploration yields compact, high-utility multi-agent networks, demonstrating both efficient coordination and robust reasoning.
https://huggingface.co/papers/2604.00901
[
2 authors](https://huggingface.co/papers/2604.00901)
·
Apr 1
 [-] 25
https://huggingface.co/login?next=%2Fpapers%2F2311.12229
NeuroPrompts: An Adaptive Framework to Optimize Prompts for Text-to-Image Generation
https://huggingface.co/papers/2311.12229
Despite impressive recent advances in text-to-image diffusion models, obtaining high-quality images often requires prompt engineering by humans who have developed expertise in using them. In this work, we present NeuroPrompts, an adaptive framework that automatically enhances a user's prompt to improve the quality of generations produced by text-to-image models. Our framework utilizes constrained text decoding with a pre-trained language model that has been adapted to generate prompts similar to those produced by human prompt engineers. This approach enables higher-quality text-to-image generations and provides user control over stylistic features via constraint set specification. We demonstrate the utility of our framework by creating an interactive application for prompt enhancement and image generation using Stable Diffusion. Additionally, we conduct experiments utilizing a large dataset of human-engineered prompts for text-to-image generation and show that our approach automatically produces enhanced prompts that result in superior image quality. We make our code, a screencast video demo and a live demo instance of NeuroPrompts publicly available.
https://huggingface.co/papers/2311.12229
[
3 authors](https://huggingface.co/papers/2311.12229)
·
Nov 20, 2023 
3
https://huggingface.co/papers/2311.12229#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2512.06751
Becoming Experienced Judges: Selective Test-Time Learning for Evaluators
https://huggingface.co/papers/2512.06751
Automatic evaluation with large language models, commonly known as LLM-as-a-judge, is now standard across reasoning and alignment tasks. Despite evaluating many samples in deployment, these evaluators typically (i) treat each case independently, missing the opportunity to accumulate experience, and (ii) rely on a single fixed prompt for all cases, neglecting the need for sample-specific evaluation criteria. We introduce Learning While Evaluating (LWE), a framework that allows evaluators to improve sequentially at inference time without requiring training or validation sets. LWE maintains an evolving meta-prompt that (i) produces sample-specific evaluation instructions and (ii) refines itself through self-generated feedback. Furthermore, we propose Selective LWE, which updates the meta-prompt only on self-inconsistent cases, focusing computation where it matters most. This selective approach retains the benefits of sequential learning while being far more cost-effective. Across two pairwise comparison benchmarks, Selective LWE outperforms strong baselines, empirically demonstrating that evaluators can improve during sequential testing with a simple selective update, learning most from the cases they struggle with.
https://huggingface.co/papers/2512.06751
[
5 authors](https://huggingface.co/papers/2512.06751)
·
Dec 6, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.07248
DarwinTOD: LLM Driven Lifelong Self Evolution for Task Oriented Dialog Systems
https://huggingface.co/papers/2601.07248
Traditional task-oriented dialog systems are unable to evolve from ongoing interactions or adapt to new domains after deployment, that is a critical limitation in real-world dynamic environments. Continual learning approaches depend on episodic retraining with human curated data, failing to achieve autonomy lifelong improvement. While evolutionary computation and LLM driven self improvement offer promising mechanisms for dialog optimization, they lack a unified framework for holistic, iterative strategy refinement. To bridge this gap, we propose DarwinTOD, a lifelong self evolving dialog framework that systematically integrates these two paradigms, enabling continuous strategy optimization from a zero-shot base without task specific fine-tuning. DarwinTOD maintains an Evolvable Strategy Bank and operates through a dual-loop process: online multi-agent dialog execution with peer critique, and offline structured evolutionary operations that refine the strategy bank using accumulated feedback. This closed-loop design enables autonomous continuous improvement without human intervention. Extensive experiments show that DarwinTOD surpasses previous state-of-the-art methods and exhibits continuous performance gains throughout evolution. Our work provides a novel framework for building dialog systems with lifelong self evolution capabilities.
https://huggingface.co/papers/2601.07248
[
6 authors](https://huggingface.co/papers/2601.07248)
·
Jan 11
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.12720
Teaching Large Reasoning Models Effective Reflection
https://huggingface.co/papers/2601.12720
Large Reasoning Models (LRMs) have recently shown impressive performance on complex reasoning tasks, often by engaging in self-reflective behaviors such as self-critique and backtracking. However, not all reflections are beneficial-many are superficial, offering little to no improvement over the original answer and incurring computation overhead. In this paper, we identify and address the problem of superficial reflection in LRMs. We first propose Self-Critique Fine-Tuning (SCFT), a training framework that enhances the model's reflective reasoning ability using only self-generated critiques. SCFT prompts models to critique their own outputs, filters high-quality critiques through rejection sampling, and fine-tunes the model using a critique-based objective. Building on this strong foundation, we further introduce Reinforcement Learning with Effective Reflection Rewards (RLERR). RLERR leverages the high-quality reflections initialized by SCFT to construct reward signals, guiding the model to internalize the self-correction process via reinforcement learning. Experiments on two challenging benchmarks, AIME2024 and AIME2025, show that SCFT and RLERR significantly improve both reasoning accuracy and reflection quality, outperforming state-of-the-art baselines. All data and codes are available at https://github.com/wanghanbinpanda/SCFT.
https://huggingface.co/papers/2601.12720
[
8 authors](https://huggingface.co/papers/2601.12720)
·
Jan 18
 [-] 23
https://huggingface.co/login?next=%2Fpapers%2F2311.05661
Prompt Engineering a Prompt Engineer
https://huggingface.co/papers/2311.05661
Prompt engineering is a challenging yet crucial task for optimizing the performance of large language models (LLMs). It requires complex reasoning to examine the model's errors, hypothesize what is missing or misleading in the current prompt, and communicate the task with clarity. While recent works indicate that LLMs can be meta-prompted to perform automatic prompt engineering, their potentials may not be fully untapped due to the lack of sufficient guidance to elicit complex reasoning capabilities in LLMs in the meta-prompt. In this work, we investigate the problem of "prompt engineering a prompt engineer" -- constructing a meta-prompt that more effectively guides LLMs to perform automatic prompt engineering. We introduce and analyze key components, such as a step-by-step reasoning template and context specification, which lead to improved performance. In addition, inspired by common optimization concepts such as batch size, step size and momentum, we introduce their verbalized counterparts to the meta-prompt and investigate their effects. Our final method, named PE2, finds a prompt that outperforms "let's think step by step" by 6.3% on the MultiArith dataset and 3.1% on the GSM8K dataset. To demonstrate its versatility, we apply PE2 to the Instruction Induction benchmark, a suite of counterfactual tasks, and a lengthy, real-world industrial prompt. In these settings, PE2 achieves strong performance and outperforms prior automatic prompt engineering baselines. Further, we show that PE2 makes meaningful and targeted prompt edits, amends erroneous or incomplete prompts, and presents non-trivial counterfactual reasoning abilities.
https://huggingface.co/papers/2311.05661
[
4 authors](https://huggingface.co/papers/2311.05661)
·
Nov 8, 2023 
2
https://huggingface.co/papers/2311.05661#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.14826
SPRIG: Improving Large Language Model Performance by System Prompt Optimization
https://huggingface.co/papers/2410.14826
Large Language Models (LLMs) have shown impressive capabilities in many scenarios, but their performance depends, in part, on the choice of prompt. Past research has focused on optimizing prompts specific to a task. However, much less attention has been given to optimizing the general instructions included in a prompt, known as a system prompt. To address this gap, we propose SPRIG, an edit-based genetic algorithm that iteratively constructs prompts from prespecified components to maximize the model's performance in general scenarios. We evaluate the performance of system prompts on a collection of 47 different types of tasks to ensure generalizability. Our study finds that a single optimized system prompt performs on par with task prompts optimized for each individual task. Moreover, combining system and task-level optimizations leads to further improvement, which showcases their complementary nature. Experiments also reveal that the optimized system prompts generalize effectively across model families, parameter sizes, and languages. This study provides insights into the role of system-level instructions in maximizing LLM potential.
https://huggingface.co/papers/2410.14826
[
5 authors](https://huggingface.co/papers/2410.14826)
·
Oct 18, 2024
 [-] 10
https://huggingface.co/login?next=%2Fpapers%2F2602.01382
PromptRL: Prompt Matters in RL for Flow-Based Image Generation
https://huggingface.co/papers/2602.01382
Flow matching models (FMs) have revolutionized text-to-image (T2I) generation, with reinforcement learning (RL) serving as a critical post-training strategy for alignment with reward objectives. In this research, we show that current RL pipelines for FMs suffer from two underappreciated yet important limitations: sample inefficiency due to insufficient generation diversity, and pronounced prompt overfitting, where models memorize specific training formulations and exhibit dramatic performance collapse when evaluated on semantically equivalent but stylistically varied prompts. We present PromptRL (Prompt Matters in RL for Flow-Based Image Generation), a framework that incorporates language models (LMs) as trainable prompt refinement agents directly within the flow-based RL optimization loop. This design yields two complementary benefits: rapid development of sophisticated prompt rewriting capabilities and, critically, a synergistic training regime that reshapes the optimization dynamics. PromptRL achieves state-of-the-art performance across multiple benchmarks, obtaining scores of 0.97 on GenEval, 0.98 on OCR accuracy, and 24.05 on PickScore. Furthermore, we validate the effectiveness of our RL approach on large-scale image editing models, improving the EditReward of FLUX.1-Kontext from 1.19 to 1.43 with only 0.06 million rollouts, surpassing Gemini 2.5 Flash Image (also known as Nano Banana), which scores 1.37, and achieving comparable performance with ReasonNet (1.44), which relied on fine-grained data annotations along with a complex multi-stage training. Our extensive experiments empirically demonstrate that PromptRL consistently achieves higher performance ceilings while requiring over 2times fewer rollouts compared to naive flow-only RL. Our code is available at https://github.com/G-U-N/UniRL.
https://huggingface.co/papers/2602.01382
 

https://huggingface.co/papers/2602.01382
CUHK CUHK
https://huggingface.co/CUHK
·
Feb 1 
2
https://huggingface.co/papers/2602.01382#community
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2302.04237
Black Box Adversarial Prompting for Foundation Models
https://huggingface.co/papers/2302.04237
Prompting interfaces allow users to quickly adjust the output of generative models in both vision and language. However, small changes and design choices in the prompt can lead to significant differences in the output. In this work, we develop a black-box framework for generating adversarial prompts for unstructured image and text generation. These prompts, which can be standalone or prepended to benign prompts, induce specific behaviors into the generative process, such as generating images of a particular object or generating high perplexity text.
https://huggingface.co/papers/2302.04237
[
4 authors](https://huggingface.co/papers/2302.04237)
·
Feb 8, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.07780
Enhancing Self-Correction in Large Language Models through Multi-Perspective Reflection
https://huggingface.co/papers/2601.07780
While Chain-of-Thought (CoT) prompting advances LLM reasoning, challenges persist in consistency, accuracy, and self-correction, especially for complex or ethically sensitive tasks. Existing single-dimensional reflection methods offer insufficient improvements. We propose MyGO Poly-Reflective Chain-of-Thought (PR-CoT), a novel methodology employing structured multi-perspective reflection. After initial CoT, PR-CoT guides the LLM to self-assess its reasoning across multiple predefined angles: logical consistency, information completeness, biases/ethics, and alternative solutions. Implemented purely via prompt engineering, this process refines the initial CoT into a more robust and accurate final answer without model retraining. Experiments across arithmetic, commonsense, ethical decision-making, and logical puzzles, using GPT-three point five and GPT-four models, demonstrate PR-CoT's superior performance. It significantly outperforms traditional CoT and existing reflection methods in logical consistency and error correction, with notable gains in nuanced domains like ethical decision-making. Ablation studies, human evaluations, and qualitative analyses further validate the contribution of each reflection perspective and the overall efficacy of our poly-reflective paradigm in fostering more reliable LLM reasoning.
https://huggingface.co/papers/2601.07780
[
4 authors](https://huggingface.co/papers/2601.07780)
·
Jan 11
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2602.04713
Adaptive Prompt Elicitation for Text-to-Image Generation
https://huggingface.co/papers/2602.04713
Aligning text-to-image generation with user intent remains challenging, for users who provide ambiguous inputs and struggle with model idiosyncrasies. We propose Adaptive Prompt Elicitation (APE), a technique that adaptively asks visual queries to help users refine prompts without extensive writing. Our technical contribution is a formulation of interactive intent inference under an information-theoretic framework. APE represents latent intent as interpretable feature requirements using language model priors, adaptively generates visual queries, and compiles elicited requirements into effective prompts. Evaluation on IDEA-Bench and DesignBench shows that APE achieves stronger alignment with improved efficiency. A user study with challenging user-defined tasks demonstrates 19.8% higher alignment without workload overhead. Our work contributes a principled approach to prompting that, for general users, offers an effective and efficient complement to the prevailing prompt-based interaction paradigm with text-to-image models.
https://huggingface.co/papers/2602.04713
[
5 authors](https://huggingface.co/papers/2602.04713)
·
Feb 4
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2604.19821
JTPRO: A Joint Tool-Prompt Reflective Optimization Framework for Language Agents
https://huggingface.co/papers/2604.19821
Large language model (LLM) agents augmented with external tools often struggle as number of tools grow large and become domain-specific. In such settings, ambiguous tool descriptions and under-specified agent instructions frequently lead to tool mis-selection and incorrect slot/value instantiation. We hypothesize that this is due to two root causes: generic, one-size-fits-all prompts that ignore tool-specific nuances, and underspecified tool schemas that lack clear guidance on when and how to use each tool and how to format its parameters. We introduce Joint Tool-Prompt Reflective Optimization (JTPRO), a framework for improving tool-calling reliability in trace-supervised settings by iteratively using rollout-driven reflection to co-optimize global instructions and per-tool schema/argument descriptions for accurate tool selection and argument instantiation in large tool inventories. JTPRO is designed to preserve only tool-local cues needed for correct disambiguation and slot filling. We evaluate JTPRO across multi-tool benchmarks, which account for different number of tools using three metrics: Tool Selection Accuracy (TSA), Slot Filling Accuracy(SFA), and Overall Success Rate(OSR) (correct tool + correct slots + correct values). JTPRO consistently outperforms strong baselines, including CoT-style agents, and reflective prompt optimizers such as GEPA by 5%-20% (relative) on OSR. Ablations show that joint optimization of instructions and tool schemas is more effective and robust than optimizing either component in isolation.
https://huggingface.co/papers/2604.19821
[
12 authors](https://huggingface.co/papers/2604.19821)
·
Apr 19
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2402.03099
Intent-based Prompt Calibration: Enhancing prompt optimization with synthetic boundary cases
https://huggingface.co/papers/2402.03099
Prompt engineering is a challenging and important task due to the high sensitivity of Large Language Models (LLMs) to the given prompt and the inherent ambiguity of a textual task instruction. Automatic prompt engineering is essential to achieve optimized performance from LLMs. Recent studies have demonstrated the capabilities of LLMs to automatically conduct prompt engineering by employing a meta-prompt that incorporates the outcomes of the last trials and proposes an improved prompt. However, this requires a high-quality benchmark to compare different prompts, which is difficult and expensive to acquire in many real-world use cases. In this work, we introduce a new method for automatic prompt engineering, using a calibration process that iteratively refines the prompt to the user intent. During the optimization process, the system jointly generates synthetic data of boundary use cases and optimizes the prompt according to the generated dataset. We demonstrate the effectiveness of our method with respect to strong proprietary models on real-world tasks such as moderation and generation. Our method outperforms state-of-the-art methods with a limited number of annotated samples. Furthermore, we validate the advantages of each one of the system's key components. Our system is built in a modular way, facilitating easy adaptation to other tasks. The code is available https://github.com/Eladlev/AutoPrompt{here}.
https://huggingface.co/papers/2402.03099
[
3 authors](https://huggingface.co/papers/2402.03099)
·
Feb 5, 2024
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2307.01230
Large Language and Text-to-3D Models for Engineering Design Optimization
https://huggingface.co/papers/2307.01230
The current advances in generative AI for learning large neural network models with the capability to produce essays, images, music and even 3D assets from text prompts create opportunities for a manifold of disciplines. In the present paper, we study the potential of deep text-to-3D models in the engineering domain, with focus on the chances and challenges when integrating and interacting with 3D assets in computational simulation-based design optimization. In contrast to traditional design optimization of 3D geometries that often searches for the optimum designs using numerical representations, such as B-Spline surface or deformation parameters in vehicle aerodynamic optimization, natural language challenges the optimization framework by requiring a different interpretation of variation operators while at the same time may ease and motivate the human user interaction. Here, we propose and realize a fully automated evolutionary design optimization framework using Shap-E, a recently published text-to-3D asset network by OpenAI, in the context of aerodynamic vehicle optimization. For representing text prompts in the evolutionary optimization, we evaluate (a) a bag-of-words approach based on prompt templates and Wordnet samples, and (b) a tokenisation approach based on prompt templates and the byte pair encoding method from GPT4. Our main findings from the optimizations indicate that, first, it is important to ensure that the designs generated from prompts are within the object class of application, i.e. diverse and novel designs need to be realistic, and, second, that more research is required to develop methods where the strength of text prompt variations and the resulting variations of the 3D designs share causal relations to some degree to improve the optimization.
https://huggingface.co/papers/2307.01230
[
3 authors](https://huggingface.co/papers/2307.01230)
·
Jul 2, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2505.12592
PromptPrism: A Linguistically-Inspired Taxonomy for Prompts
https://huggingface.co/papers/2505.12592
Prompts are the interface for eliciting the capabilities of large language models (LLMs). Understanding their structure and components is critical for analyzing LLM behavior and optimizing performance. However, the field lacks a comprehensive framework for systematic prompt analysis and understanding. We introduce PromptPrism, a linguistically-inspired taxonomy that enables prompt analysis across three hierarchical levels: functional structure, semantic component, and syntactic pattern. We show the practical utility of PromptPrism by applying it to three applications: (1) a taxonomy-guided prompt refinement approach that automatically improves prompt quality and enhances model performance across a range of tasks; (2) a multi-dimensional dataset profiling method that extracts and aggregates structural, semantic, and syntactic characteristics from prompt datasets, enabling comprehensive analysis of prompt distributions and patterns; (3) a controlled experimental framework for prompt sensitivity analysis by quantifying the impact of semantic reordering and delimiter modifications on LLM performance. Our experimental results validate the effectiveness of our taxonomy across these applications, demonstrating that PromptPrism provides a foundation for refining, profiling, and analyzing prompts.
https://huggingface.co/papers/2505.12592
[
6 authors](https://huggingface.co/papers/2505.12592)
·
May 18, 2025
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2606.01967
Training Prompt Matters: State-Adaptive Optimization for Robust Fine-Tuning
https://huggingface.co/papers/2606.01967
While prompt engineering is instrumental in maximizing the capabilities of Large Language Models (LLMs) during inference, the role of prompts during training remains critically underexplored. Prevailing fine-tuning paradigms typically treat training prompts as mere surface forms, assuming that semantically equivalent instructions yield identical learning outcomes. However, we reveal that this equivalence is deceptive: while paraphrased prompts often lead to comparable in-task performance, they induce drastically different cross-task impacts regarding catastrophic forgetting and generalization. Crucially, these impacts are positively correlated across tasks, indicating the existence of superior prompts that consistently yield better performance. Furthermore, we discover that these superior prompts can be robustly identified by task loss prior to learning. Leveraging these insights, we introduce State-Adaptive Prompt Optimization (SAPO), a lightweight yet effective training strategy that shifts task formulation from a static input to a dynamic, state-adaptive variable. Comprehensive experiments on diverse benchmarks confirm its effectiveness, which significantly mitigates forgetting while improving generalization, achieving substantial performance gains over state-of-the-art methods. These results provide insights into how training prompts shape learning dynamics and offer a practical recipe for robust fine-tuning. Our code is available at https://github.com/Eric8932/SAPO.
https://huggingface.co/papers/2606.01967
[
8 authors](https://huggingface.co/papers/2606.01967)
·
May 31
 [-] 15
https://huggingface.co/login?next=%2Fpapers%2F2310.08740
A Zero-Shot Language Agent for Computer Control with Structured Reflection
https://huggingface.co/papers/2310.08740
Large language models (LLMs) have shown increasing capacity at planning and executing a high-level goal in a live computer environment (e.g. MiniWoB++). To perform a task, recent works often require a model to learn from trace examples of the task via either supervised learning or few/many-shot prompting. Without these trace examples, it remains a challenge how an agent can autonomously learn and improve its control on a computer, which limits the ability of an agent to perform a new task. We approach this problem with a zero-shot agent that requires no given expert traces. Our agent plans for executable actions on a partially observed environment, and iteratively progresses a task by identifying and learning from its mistakes via self-reflection and structured thought management. On the easy tasks of MiniWoB++, we show that our zero-shot agent often outperforms recent SoTAs, with more efficient reasoning. For tasks with more complexity, our reflective agent performs on par with prior best models, even though previous works had the advantages of accessing expert traces or additional screen information.
https://huggingface.co/papers/2310.08740
[
5 authors](https://huggingface.co/papers/2310.08740)
·
Oct 12, 2023 
2
https://huggingface.co/papers/2310.08740#community
 [-] 12
https://huggingface.co/login?next=%2Fpapers%2F2510.20206
RAPO++: Cross-Stage Prompt Optimization for Text-to-Video Generation via Data Alignment and Test-Time Scaling
https://huggingface.co/papers/2510.20206
Prompt design plays a crucial role in text-to-video (T2V) generation, yet user-provided prompts are often short, unstructured, and misaligned with training data, limiting the generative potential of diffusion-based T2V models. We present RAPO++, a cross-stage prompt optimization framework that unifies training-data--aligned refinement, test-time iterative scaling, and large language model (LLM) fine-tuning to substantially improve T2V generation without modifying the underlying generative backbone. In Stage 1, Retrieval-Augmented Prompt Optimization (RAPO) enriches user prompts with semantically relevant modifiers retrieved from a relation graph and refactors them to match training distributions, enhancing compositionality and multi-object fidelity. Stage 2 introduces Sample-Specific Prompt Optimization (SSPO), a closed-loop mechanism that iteratively refines prompts using multi-source feedback -- including semantic alignment, spatial fidelity, temporal coherence, and task-specific signals such as optical flow -- yielding progressively improved video generation quality. Stage 3 leverages optimized prompt pairs from SSPO to fine-tune the rewriter LLM, internalizing task-specific optimization patterns and enabling efficient, high-quality prompt generation even before inference. Extensive experiments across five state-of-the-art T2V models and five benchmarks demonstrate that RAPO++ achieves significant gains in semantic alignment, compositional reasoning, temporal stability, and physical plausibility, outperforming existing methods by large margins. Our results highlight RAPO++ as a model-agnostic, cost-efficient, and scalable solution that sets a new standard for prompt optimization in T2V generation. The code is available at https://github.com/Vchitect/RAPO.
https://huggingface.co/papers/2510.20206
 

https://huggingface.co/papers/2510.20206
SJTU Shanghai Jiao Tong University
https://huggingface.co/SJTU
·
Oct 22, 2025 
1
https://huggingface.co/papers/2510.20206#community
 [-] 3
https://huggingface.co/login?next=%2Fpapers%2F2406.16218
Trace is the New AutoDiff -- Unlocking Efficient Optimization of Computational Workflows
https://huggingface.co/papers/2406.16218
We study a class of optimization problems motivated by automating the design and update of AI systems like coding assistants, robots, and copilots. We propose an end-to-end optimization framework, Trace, which treats the computational workflow of an AI system as a graph akin to neural networks, based on a generalization of back-propagation. Optimization of computational workflows often involves rich feedback (e.g. console output or user's responses), heterogeneous parameters (e.g. prompts, hyper-parameters, codes), and intricate objectives (beyond maximizing a score). Moreover, its computation graph can change dynamically with the inputs and parameters. We frame a new mathematical setup of iterative optimization, Optimization with Trace Oracle (OPTO), to capture and abstract these properties so as to design optimizers that work across many domains. In OPTO, an optimizer receives an execution trace along with feedback on the computed output and updates parameters iteratively. Trace is the tool to implement OPTO in practice. Trace has a Python interface that efficiently converts a computational workflow into an OPTO instance using a PyTorch-like interface. Using Trace, we develop a general-purpose LLM-based optimizer called OptoPrime that can effectively solve OPTO problems. In empirical studies, we find that OptoPrime is capable of first-order numerical optimization, prompt optimization, hyper-parameter tuning, robot controller design, code debugging, etc., and is often competitive with specialized optimizers for each domain. We believe that Trace, OptoPrime and the OPTO framework will enable the next generation of interactive agents that automatically adapt using various kinds of feedback. Website: https://microsoft.github.io/Trace
https://huggingface.co/papers/2406.16218
[
3 authors](https://huggingface.co/papers/2406.16218)
·
Jun 23, 2024 
1
https://huggingface.co/papers/2406.16218#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2605.06623
MASPO: Joint Prompt Optimization for LLM-based Multi-Agent Systems
https://huggingface.co/papers/2605.06623
Large language model (LLM)-based Multi-agent systems (MAS) have shown promise in tackling complex collaborative tasks, where agents are typically orchestrated via role-specific prompts. While the quality of these prompts is pivotal, jointly optimizing them across interacting agents remains a non-trivial challenge, primarily due to the misalignment between local agent objectives and holistic system goals. To address this, we introduce MASPO, a novel framework designed to automatically and iteratively refine prompts across the entire system. A core innovation of MASPO is its joint evaluation mechanism, which assesses prompts not merely by their local validity, but by their capacity to facilitate downstream success for successor agents. This effectively bridges the gap between local interactions and global outcomes without relying on ground-truth labels. Furthermore, MASPO employs a data-driven evolutionary beam search to efficiently navigate the high-dimensional prompt space. Extensive empirical evaluations across 6 diverse tasks demonstrate that MASPO consistently outperforms state-of-the-art prompt optimization methods, achieving an average accuracy improvement of 2.9. We release our code at https://github.com/wangzx1219/MASPO.
https://huggingface.co/papers/2605.06623
[
7 authors](https://huggingface.co/papers/2605.06623)
·
May 6
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2601.03359
Enhancing LLM Instruction Following: An Evaluation-Driven Multi-Agentic Workflow for Prompt Instructions Optimization
https://huggingface.co/papers/2601.03359
Large Language Models (LLMs) often generate substantively relevant content but fail to adhere to formal constraints, leading to outputs that are conceptually correct but procedurally flawed. Traditional prompt refinement approaches focus on rephrasing the description of the primary task an LLM has to perform, neglecting the granular constraints that function as acceptance criteria for its response. We propose a novel multi-agentic workflow that decouples optimization of the primary task description from its constraints, using quantitative scores as feedback to iteratively rewrite and improve them. Our evaluation demonstrates this method produces revised prompts that yield significantly higher compliance scores from models like Llama 3.1 8B and Mixtral-8x 7B.
https://huggingface.co/papers/2601.03359
[
5 authors](https://huggingface.co/papers/2601.03359)
·
Jan 5
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2510.18798
WebSeer: Training Deeper Search Agents through Reinforcement Learning with Self-Reflection
https://huggingface.co/papers/2510.18798
Search agents have achieved significant advancements in enabling intelligent information retrieval and decision-making within interactive environments. Although reinforcement learning has been employed to train agentic models capable of more dynamic interactive retrieval, existing methods are limited by shallow tool-use depth and the accumulation of errors over multiple iterative interactions. In this paper, we present WebSeer, a more intelligent search agent trained via reinforcement learning enhanced with a self-reflection mechanism. Specifically, we construct a large dataset annotated with reflection patterns and design a two-stage training framework that unifies cold start and reinforcement learning within the self-reflection paradigm for real-world web-based environments, which enables the model to generate longer and more reflective tool-use trajectories. Our approach substantially extends tool-use chains and improves answer accuracy. Using a single 14B model, we achieve state-of-the-art results on HotpotQA and SimpleQA, with accuracies of 72.3% and 90.0%, respectively, and demonstrate strong generalization to out-of-distribution datasets. The code is available at https://github.com/99hgz/WebSeer
https://huggingface.co/papers/2510.18798
[
6 authors](https://huggingface.co/papers/2510.18798)
·
Oct 21, 2025
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2502.01562
Memento No More: Coaching AI Agents to Master Multiple Tasks via Hints Internalization
https://huggingface.co/papers/2502.01562
As the general capabilities of artificial intelligence (AI) agents continue to evolve, their ability to learn to master multiple complex tasks through experience remains a key challenge. Current LLM agents, particularly those based on proprietary language models, typically rely on prompts to incorporate knowledge about the target tasks. This approach does not allow the agent to internalize this information and instead relies on ever-expanding prompts to sustain its functionality in diverse scenarios. This resembles a system of notes used by a person affected by anterograde amnesia, the inability to form new memories. In this paper, we propose a novel method to train AI agents to incorporate knowledge and skills for multiple tasks without the need for either cumbersome note systems or prior high-quality demonstration data. Our approach employs an iterative process where the agent collects new experiences, receives corrective feedback from humans in the form of hints, and integrates this feedback into its weights via a context distillation training procedure. We demonstrate the efficacy of our approach by implementing it in a Llama-3-based agent that, after only a few rounds of feedback, outperforms advanced models GPT-4o and DeepSeek-V3 in tasksets requiring correct sequencing of information retrieval, tool use, and question answering.
https://huggingface.co/papers/2502.01562
[
7 authors](https://huggingface.co/papers/2502.01562)
·
Feb 3, 2025
 [-] 5
https://huggingface.co/login?next=%2Fpapers%2F2402.10949
The Unreasonable Effectiveness of Eccentric Automatic Prompts
https://huggingface.co/papers/2402.10949
Large Language Models (LLMs) have demonstrated remarkable problem-solving and basic mathematics abilities. However, their efficacy is highly contingent on the formulation of the prompt. This study endeavors to quantify the influence of incorporating "positive thinking" into the system message of the prompt, then compare that to systematic prompt optimization. We assess the performance of 60 combinations of system message snippets, tested with and without Chain of Thought prompting, across three models with parameters ranging from 7 to 70 billion on the GSM8K dataset. Our findings reveal that results do not universally generalize across models. In most instances, the inclusion of "positive thinking" prompts positively affected model performance. Notably, however, Llama2-70B exhibited an exception when not utilizing Chain of Thought, as the optimal system message was found to be none at all. Given the combinatorial complexity, and thus computation time, of experimenting with hand-tuning prompts for large black-box models, we then compared the performance of the best "positive thinking" prompt against the output of systematic prompt optimization. We show that employing an automated prompt optimizer emerges as the most effective method for enhancing performance, even when working with smaller open-source models. Additionally, our findings reveal that the highest-scoring, automatically-optimized prompt exhibits a degree of peculiarity far beyond expectations.
https://huggingface.co/papers/2402.10949
[
2 authors](https://huggingface.co/papers/2402.10949)
·
Feb 9, 2024 
1
https://huggingface.co/papers/2402.10949#community
 [-] 1
https://huggingface.co/login?next=%2Fpapers%2F2306.04933
InfoPrompt: Information-Theoretic Soft Prompt Tuning for Natural Language Understanding
https://huggingface.co/papers/2306.04933
Soft prompt tuning achieves superior performances across a wide range of few-shot tasks. However, the performances of prompt tuning can be highly sensitive to the initialization of the prompts. We also empirically observe that conventional prompt tuning methods cannot encode and learn sufficient task-relevant information from prompt tokens. In this work, we develop an information-theoretic framework that formulates soft prompt tuning as maximizing mutual information between prompts and other model parameters (or encoded representations). This novel view helps us to develop a more efficient, accurate and robust soft prompt tuning method InfoPrompt. With this framework, we develop two novel mutual information based loss functions, to (i) discover proper prompt initialization for the downstream tasks and learn sufficient task-relevant information from prompt tokens and (ii) encourage the output representation from the pretrained language model to be more aware of the task-relevant information captured in the learnt prompt. Extensive experiments validate that InfoPrompt can significantly accelerate the convergence of the prompt tuning and outperform traditional prompt tuning methods. Finally, we provide a formal theoretical result for showing to show that gradient descent type algorithm can be used to train our mutual information loss.
https://huggingface.co/papers/2306.04933
[
9 authors](https://huggingface.co/papers/2306.04933)
·
Jun 7, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2410.15397
IPO: Interpretable Prompt Optimization for Vision-Language Models
https://huggingface.co/papers/2410.15397
Pre-trained vision-language models like CLIP have remarkably adapted to various downstream tasks. Nonetheless, their performance heavily depends on the specificity of the input text prompts, which requires skillful prompt template engineering. Instead, current approaches to prompt optimization learn the prompts through gradient descent, where the prompts are treated as adjustable parameters. However, these methods tend to lead to overfitting of the base classes seen during training and produce prompts that are no longer understandable by humans. This paper introduces a simple but interpretable prompt optimizer (IPO), that utilizes large language models (LLMs) to generate textual prompts dynamically. We introduce a Prompt Optimization Prompt that not only guides LLMs in creating effective prompts but also stores past prompts with their performance metrics, providing rich in-context information. Additionally, we incorporate a large multimodal model (LMM) to condition on visual content by generating image descriptions, which enhance the interaction between textual and visual modalities. This allows for thae creation of dataset-specific prompts that improve generalization performance, while maintaining human comprehension. Extensive testing across 11 datasets reveals that IPO not only improves the accuracy of existing gradient-descent-based prompt learning methods but also considerably enhances the interpretability of the generated prompts. By leveraging the strengths of LLMs, our approach ensures that the prompts remain human-understandable, thereby facilitating better transparency and oversight for vision-language models.
https://huggingface.co/papers/2410.15397
[
3 authors](https://huggingface.co/papers/2410.15397)
·
Oct 20, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2404.01077
Efficient Prompting Methods for Large Language Models: A Survey
https://huggingface.co/papers/2404.01077
Prompting is a mainstream paradigm for adapting large language models to specific natural language processing tasks without modifying internal parameters. Therefore, detailed supplementary knowledge needs to be integrated into external prompts, which inevitably brings extra human efforts and computational burdens for practical applications. As an effective solution to mitigate resource consumption, Efficient Prompting Methods have attracted a wide range of attention. We provide mathematical expressions at a high level to deeply discuss Automatic Prompt Engineering for different prompt components and Prompt Compression in continuous and discrete spaces. Finally, we highlight promising future directions to inspire researchers interested in this field.
https://huggingface.co/papers/2404.01077
[
7 authors](https://huggingface.co/papers/2404.01077)
·
Apr 1, 2024
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2310.08129
Tailored Visions: Enhancing Text-to-Image Generation with Personalized Prompt Rewriting
https://huggingface.co/papers/2310.08129
Despite significant progress in the field, it is still challenging to create personalized visual representations that align closely with the desires and preferences of individual users. This process requires users to articulate their ideas in words that are both comprehensible to the models and accurately capture their vision, posing difficulties for many users. In this paper, we tackle this challenge by leveraging historical user interactions with the system to enhance user prompts. We propose a novel approach that involves rewriting user prompts based on a newly collected large-scale text-to-image dataset with over 300k prompts from 3115 users. Our rewriting model enhances the expressiveness and alignment of user prompts with their intended visual outputs. Experimental results demonstrate the superiority of our methods over baseline approaches, as evidenced in our new offline evaluation method and online tests. Our code and dataset are available at https://github.com/zzjchen/Tailored-Visions .
https://huggingface.co/papers/2310.08129
[
5 authors](https://huggingface.co/papers/2310.08129)
·
Oct 11, 2023
 [-] -
https://huggingface.co/login?next=%2Fpapers%2F2102.12206
PADA: Example-based Prompt Learning for on-the-fly Adaptation to Unseen Domains
https://huggingface.co/papers/2102.12206
Natural Language Processing algorithms have made incredible progress, but they still struggle when applied to out-of-distribution examples. We address a challenging and underexplored version of this domain adaptation problem, where an algorithm is trained on several source domains, and then applied to examples from unseen domains that are unknown at training time. Particularly, no examples, labeled or unlabeled, or any other knowledge about the target domain are available to the algorithm at training time. We present PADA: An example-based autoregressive Prompt learning algorithm for on-the-fly Any-Domain Adaptation, based on the T5 language model. Given a test example, PADA first generates a unique prompt for it and then, conditioned on this prompt, labels the example with respect to the NLP prediction task. PADA is trained to generate a prompt which is a token sequence of unrestricted length, consisting of Domain Related Features (DRFs) that characterize each of the source domains. Intuitively, the generated prompt is a unique signature that maps the test example to a semantic space spanned by the source domains. In experiments with 3 tasks (text classification and sequence tagging), for a total of 14 multi-source adaptation scenarios, PADA substantially outperforms strong baselines.
https://huggingface.co/papers/2102.12206
[
3 authors](https://huggingface.co/papers/2102.12206)
·
Feb 23, 2021
 [-] 7
https://huggingface.co/login?next=%2Fpapers%2F2505.14157
Prior Prompt Engineering for Reinforcement Fine-Tuning
https://huggingface.co/papers/2505.14157
This paper investigates prior prompt engineering (pPE) in the context of reinforcement fine-tuning (RFT), where language models (LMs) are incentivized to exhibit behaviors that maximize performance through reward signals. While existing RFT research has primarily focused on algorithms, reward shaping, and data curation, the design of the prior prompt--the instructions prepended to queries during training to elicit behaviors such as step-by-step reasoning--remains underexplored. We investigate whether different pPE approaches can guide LMs to internalize distinct behaviors after RFT. Inspired by inference-time prompt engineering (iPE), we translate five representative iPE strategies--reasoning, planning, code-based reasoning, knowledge recall, and null-example utilization--into corresponding pPE approaches. We experiment with Qwen2.5-7B using each of the pPE approaches, then evaluate performance on in-domain and out-of-domain benchmarks (e.g., AIME2024, HumanEval+, and GPQA-Diamond). Our results show that all pPE-trained models surpass their iPE-prompted counterparts, with the null-example pPE approach achieving the largest average performance gain and the highest improvement on AIME2024 and GPQA-Diamond, surpassing the commonly used reasoning approach. Furthermore, by adapting a behavior-classification framework, we demonstrate that different pPE strategies instill distinct behavioral styles in the resulting models. These findings position pPE as a powerful yet understudied axis for RFT.
https://huggingface.co/papers/2505.14157
[
4 authors](https://huggingface.co/papers/2505.14157)
·
May 19, 2025 
2
https://huggingface.co/papers/2505.14157#community
 [-] 2
https://huggingface.co/login?next=%2Fpapers%2F2305.03495
Automatic Prompt Optimization with "Gradient Descent" and Beam Search
https://huggingface.co/papers/2305.03495
Large Language Models (LLMs) have shown impressive performance as general purpose agents, but their abilities remain highly dependent on prompts which are hand written with onerous trial-and-error effort. We propose a simple and nonparametric solution to this problem, Automatic Prompt Optimization (APO), which is inspired by numerical gradient descent to automatically improve prompts, assuming access to training data and an LLM API. The algorithm uses minibatches of data to form natural language gradients'' that criticize the current prompt. The gradients are then propagated'' into the prompt by editing the prompt in the opposite semantic direction of the gradient. These gradient descent steps are guided by a beam search and bandit selection procedure which significantly improves algorithmic efficiency. Preliminary results across three benchmark NLP tasks and the novel problem of LLM jailbreak detection suggest that Automatic Prompt Optimization can outperform prior prompt editing techniques and improve an initial prompt's performance by up to 31%, by using data to rewrite vague task descriptions into more precise annotation instructions.
https://huggingface.co/papers/2305.03495
[
6 authors](https://huggingface.co/papers/2305.03495)
·
May 4, 2023
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