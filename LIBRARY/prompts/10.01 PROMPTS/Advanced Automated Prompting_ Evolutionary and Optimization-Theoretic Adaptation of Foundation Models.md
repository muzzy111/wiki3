# Advanced Automated Prompting: Evolutionary and Optimization-Theoretic Adaptation of Foundation Models

Advanced Automated Prompting: Evolutionary and Optimization-Theoretic Adaptation of Foundation Models
The deployment of large-scale foundation models has initiated a structural shift in how down-stream cognitive tasks are engineered, moving task adaptation away from parameter-heavy weight modifications toward programmatic input configuration [cite: 1, 2]. Manual prompt crafting, once the primary method for model guidance, is increasingly recognized as an unsustainable, model-specific effort that lacks scalability and exhibits extreme sensitivity to minute formatting changes [cite: 1, 3, 4]. To resolve these limitations, the paradigm of Advanced Automated Prompting has emerged, formalizing the interaction between human objective criteria and language model outputs into a rigorous, optimization-theoretic framework [cite: 1, 3, 5]. By transforming prompt design into a systematic, computational search over mathematical spaces, these techniques automatically compile optimal input contexts that consistently exceed the performance of manual templates [cite: 3, 5, 6].
The Shift to Programmatic Context Compilation
In contemporary deployment environments, manual prompt writing is increasingly viewed as a low-level assembly language that is rapidly being replaced by programmatic prompt compilers [cite: 6]. This architectural evolution is spearheaded by framework configurations like DSPy 3.0, which separate the declaration of a task's structure from the optimization of its specific prompt string [cite: 6, 7]. Developers declare a functional pipeline via a signature defining the inputs and outputs, and the optimizer automatically builds the underlying prompt template based on task-specific metrics and small datasets [cite: 6, 7].
This programmatic compilation aligns with physical parameters at the hardware-inference level [cite: 6, 8]. In modern model architectures, the primary operational variable driving deduction accuracy is no longer the sampling temperature, but rather dedicated computational effort parameters such as the programmatic parameter 
`reasoning_effort`
 [cite: 6]. By configuring this setting (spanning Low, Medium, and High states), the architecture allocates varying budgets of hidden logical tokens [cite: 6]. This hidden cognitive allocation allows the model to process complex deductions internally before emitting a final response, significantly improving logical accuracy [cite: 6].
The structure of the prompt itself is also undergoing specialization based on the nature of the cognitive challenge [cite: 6]. While standard step-by-step logic pathways are effective for textual synthesis, they introduce token-heavy overhead in spatial, coordinate, or planning configurations [cite: 6]. For these applications, frameworks utilize Chain-of-Symbol (CoS) prompting [cite: 6]. By substituting natural language words with concise spatial symbols, spatial logic is compressed, reducing token costs while improving performance over standard textual methods [cite: 6].
Mathematical Formulation of Automated Prompt Optimization
To establish a mathematically rigorous foundation, the Automatic Prompt Optimization (APO) pipeline is formalized as a maximization problem over bounded topological spaces [cite: 5, 9, 10]. Let 
\mathcal{X}
 represent the high-dimensional input query space and 
\mathcal{Y}
 represent the output target space [cite: 5]. A frozen foundation model, denoted as 
M_{task}
, generates a down-stream response based on a prompt template 
\rho
 drawn from the set of possible prompt templates 
\mathcal{V}
 [cite: 3, 9, 11]. Given a task-specific metric 
f
 evaluating correctness over a validation dataset 
\mathcal{D}_{val}
, the canonical objective is to identify the optimal template configuration 
\rho_{opt}
 [cite: 3, 9, 10]:
\rho_{opt} := \arg \max_{\rho \in \mathcal{V}} \mathbb{E}_{x \sim \mathcal{D}_{val}} \left[ f(M_{task}(\rho \oplus x)) \right]
In this formulation, 
\oplus
 represents the contextual integration operator that merges the prompt template and the input instance 
x
 [cite: 3, 9, 10]. When evaluating complex multi-agent or compound systems, this formulation is augmented to handle bi-level meta-optimizations [cite: 12]. For example, in Differentiable Evolutionary Reinforcement Learning (DERL), the objective function optimizes not only the prompt but also the reward signals themselves [cite: 12]. The inner-loop policy updates are driven by reinforcement learning, while the outer-loop meta-optimizer approximates gradients based on validation performance to discover optimal task objectives [cite: 12].
Similarly, in Compositional Prompt Optimization (PCO), the optimization space is structured using a discrete codebook containing highly optimized instructions and exemplars [cite: 13]. During runtime execution, an encoder routes each raw input to a subset of these codebook entries [cite: 13]. A generator then compiles them into a unified prompt for the frozen target model, while a critic emits a structured feedback vector that decomposes the overall performance by attribution [cite: 13].
Taxonomy of Prompting Spaces and Distillation Paradigms
The design of an automated prompting framework requires selecting a search space that balances model portability, computational efficiency, and human interpretability [cite: 5, 14, 15].
Discrete and Continuous Prompt Spaces
Discrete prompt optimization restricts the search variables to human-readable natural language tokens directly accessible within the vocabulary of the language model [cite: 14, 16]. This approach maintains absolute model portability and transparency, ensuring that optimized prompts can be migrated across different model providers [cite: 14, 17].
Conversely, continuous prompt optimization bypasses natural language entirely, appending trainable, soft embedding vectors directly to the input representation [cite: 8, 11, 16]. While these continuous vectors are highly parameter-efficient, they lack human interpretability and are tightly coupled to the specific model weights on which they were trained [cite: 15, 18].
Distillation and Privacy-Preserving Transfer
To bridge the gap between discrete and continuous spaces, investigators have developed specialized prompt distillation paradigms [cite: 18, 19]. In recommender systems, for example, Prompt Distillation (POD) compresses discrete task templates into continuous prompt vectors [cite: 19]. This maps categorical user and item identifiers directly into continuous representations, reducing context length and lowering inference latency [cite: 19].
For security-critical tasks, the Privacy of Soft-prompt Transfer (POST) framework resolves the privacy risks associated with cloud-hosted models [cite: 18]. Instead of sharing raw training data with external API providers, POST distills a compact, local version of the cloud model [cite: 18]. The soft prompts are tuned locally using differential privacy guarantees and then transferred back to the larger cloud-hosted architecture, reducing compute requirements while protecting proprietary information [cite: 18].
Paradigm
Spatial Representation
Computational Mechanism
Primary Advantage
Operational Constraint
Discrete Space
 [cite: 14, 16]
Human-readable token sequences in vocabulary
Combinatorial search, evolutionary updates, textual feedback [cite: 1, 5]
Universal portability and transparency [cite: 14, 17]
Highly rugged search space; sensitive to minor edits [cite: 5, 15]
Continuous Space
 [cite: 8, 16]
Learnable soft embedding tensors
Gradient backpropagation through model weights [cite: 16, 20]
Highly precise capturing of complex task features [cite: 8, 16]
Complete lack of interpretability and portability [cite: 15, 18]
Hybrid Space
 [cite: 11, 21]
Interleaved discrete tokens and continuous vectors
Bi-level joint parameter tracking [cite: 11]
Balances semantic control with optimization flexibility [cite: 11, 21]
Demands partial parameter tracking during optimization [cite: 21]
Prompt Distillation (POD)
 [cite: 19]
Distilled continuous task vectors
Dense embedding compression from discrete templates
Eliminates token noise and minimizes latency [cite: 19]
Limited to specialized task embeddings [cite: 19]
Soft-Prompt Transfer (POST)
 [cite: 18]
Locally tuned soft prompts transferred to cloud APIs
Local knowledge distillation with differential privacy
Lowers local compute cost and protects data privacy [cite: 18]
Requires a representative local distillation dataset [cite: 18]
Algorithmic Archetypes of Discrete Optimization
Discrete prompt optimization relies on automated algorithms to explore the combinatorial token space without requiring internal gradient access to the model [cite: 3, 9, 14].
Evolutionary and Population-Based Search
Evolutionary frameworks treat prompts as a population of candidates that undergo mutation, crossover, and selection [cite: 22, 23, 24]. EvoPrompt, for instance, uses a meta-language model to perform genetic crossovers and mutations on prompt populations, guiding the search based on validation accuracy [cite: 22, 25].
To optimize both performance and inference cost, Cost-Aware Prompt Optimization (CAPO) integrates AutoML techniques into this evolutionary process [cite: 14, 22]. CAPO applies length penalties to the fitness score and uses early-stopping racing algorithms to terminate the evaluation of unpromising prompts early, reducing the computational budget required for optimization [cite: 14, 24].
The leading evolutionary framework in this domain is Genetic-Pareto (GEPA) [cite: 7, 26, 27]. Rather than relying solely on scalar accuracy scores, GEPA captures high-dimensional natural language execution traces, including logical derivations and tool-call outputs [cite: 7, 28, 29]. A powerful reflection model analyzes these traces to identify specific logical failures and propose targeted mutations [cite: 7, 28, 30].
To maintain candidate diversity, GEPA preserves a Pareto frontier of prompts [cite: 7, 26, 27]. Instead of converging on a single global winner too early, the algorithm tracks prompts that excel on specific subsets of the validation data [cite: 7, 26, 27]. This multi-objective search allows GEPA to outperform reinforcement learning methods like GRPO by up to 20% while requiring up to 35x fewer rollouts [cite: 7, 27].
GEPA Optimization Loop:
┌─────────────────────────┐     ┌─────────────────────────┐
│  Validation Execution   ├────>│ Trace & Error Analysis  │
│ - Run prompt population │     │ - Capture logic steps   │
│ - Collect scalar scores │     │ - Diagnose failures     │
└────────────▲────────────┘     └────────────┬────────────┘
             │                               │
             │                               ▼
┌────────────┴────────────┐     ┌─────────────────────────┐
│    Pareto Selection     │<────│   Reflective Mutation   │
│ - Filter by task niche  │     │ - Propose text edits    │
│ - Retain diverse set    │     │ - Generate offspring    │
└─────────────────────────┘     └─────────────────────────┘


Reinforcement Learning Frameworks
Reinforcement learning (RL) formulations treat prompt generation as a sequential decision-making process [cite: 24, 31, 32]. Discrete Prompt Policy Optimization (DP2O) implements a lightweight policy network (0.62M parameters) to generate high-performing prompts [cite: 15]. By using a meta-model to produce synthetic inputs, DP2O achieves state-of-the-art accuracy while using only 10.86% of the training time required by traditional RL prompting methods [cite: 15].
Other frameworks focus on synthesizing novel prompt components during training [cite: 25, 33]. Prompt Reinforcement Learning (PRL) uses RL to dynamically generate and incorporate novel few-shot exemplars not present in the training set, enhancing performance on complex reasoning tasks [cite: 25].
Similarly, PRewrite trains a prompt-rewriting policy using Proximal Policy Optimization (PPO) with Generalized Advantage Estimation (GAE) [cite: 33]. This approach maintains a continuous action space for rewritten prompts, ensuring that the generated instructions remain highly interpretable and semantically stable [cite: 33].
For label-free environments, EVOL-RL utilizes Group Relative Policy Optimization (GRPO) to adapt models without requiring gold-standard answers [cite: 34]. EVOL-RL uses a majority-voting consensus as a stability anchor, combined with a semantic novelty reward that encourages diverse logical progression paths [cite: 34]. This prevent the model's output diversity from collapsing, lifting base-model pass rates on advanced mathematical reasoning datasets [cite: 34].
Gradient-Inspired and Interactive Descent
To simulate traditional backpropagation in discrete spaces, frameworks like ProTeGi and TextGrad introduce textual gradients [cite: 35, 36, 37]. These methods construct a symbolic computation graph where variables are linked by natural language functions [cite: 36, 38, 39].
The backward pass of TextGrad evaluates the system's output and generates natural language critiques [cite: 36, 37, 38]. These structured critiques act as "textual gradients," which are backpropagated through the system to guide local, iterative updates to prompt instructions, code snippets, or molecular structures [cite: 36, 37, 39].
To stabilize this symbolic gradient descent on larger datasets, Text Stochastic Gradient Descent with Momentum (TSGD-M) incorporates momentum-based sampling [cite: 40, 41]. TSGD-M tracks historical optimization trajectories and samples new candidates from a mixture distribution of past top-performing prompts and their associated textual gradients [cite: 40, 41]. This stabilizes the search process and prevents the accumulation of redundant text in the prompt context [cite: 40, 41].
Dynamic and Sample-Level Prompting
While traditional prompt optimization applies a single static template to an entire dataset, advanced systems implement dynamic, sample-level prompting [cite: 13, 42].
Hierarchical Prompt Optimization
The Hierarchical Prompt Optimization (HIPO) framework optimizes prompts dynamically based on the complexity of each incoming query [cite: 42]. HIPO uses a lightweight, offline-trained router to estimate the difficulty of a query at test time [cite: 42]. Based on this prediction, the router maps the query to one of five complexity tiers in a prompt hierarchy, matching the instruction detail and few-shot overhead to the difficulty of the task [cite: 42]. This sample-level adaptation consistently outperforms static, dataset-level prompts across diverse evaluation sets [cite: 42].
HIPO Dynamic Routing Architecture:
                          ┌───────────────────────────┐
                          │ Incoming Query (Test Time)│
                          └─────────────┬─────────────┘
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │  Offline Router Model     │
                          │ - Predict task difficulty │
                          └─────────────┬─────────────┘
                                        │
            ┌──────────────┬────────────┼────────────┬──────────────┐
            ▼              ▼            ▼            ▼              ▼
       [ Tier 1 ]     [ Tier 2 ]   [ Tier 3 ]   [ Tier 4 ]     [ Tier 5 ]
       (Very Easy)      (Easy)      (Moderate)    (Hard)      (Very Hard)
            │              │            │            │              │
            └──────────────┼────────────┼────────────┼──────────────┘
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │ Dynamic Multi-Tier Prompt │
                          └───────────────────────────┘


Multimodal and Domain-Specific Adaptation
This sample-level approach is also highly effective in multimodal and dynamic media domains [cite: 13, 43]. In text-to-video generation, Sample-Specific Prompt Optimization (SSPO) applies a closed-loop refinement mechanism [cite: 13].
SSPO evaluates initial video outputs against multi-source feedback, including semantic alignment, spatial consistency, temporal coherence, and motion metrics [cite: 13]. The framework then runs iterative, local prompt updates to refine the generated video, illustrating the power of dynamic, closed-loop prompt optimization in non-textual modalities [cite: 13, 43].
Development and Orchestration Frameworks
The rapid evolution of automated prompting has led to the development of modular orchestration tools that simplify the integration of these optimizers into production workflows [cite: 14, 35].
promptolution
: This lightweight, open-source Python library implements OPRO, EvoPrompt, and CAPO, returning model-agnostic prompt strings that can be directly integrated into existing production pipelines [cite: 14, 22].
FutureAGI Agent-Opt (Prompt Optimize)
: This developer-focused SDK provides a unified interface for six optimization algorithms (including Random Search, Bayesian, ProTeGi, and GEPA) [cite: 35, 44]. It evaluates prompts using a library of over 50 automated metrics, tracks costs using Apache-2.0 
traceAI
 logs, and deploys winning prompts behind real-time guardrails to prevent performance regressions in production [cite: 35, 44].
DSPy
: Stanford's framework treats prompts programmatically, compiling structured pipelines against designated validation metrics [cite: 7, 35]. It is the standard for optimizing multi-stage systems, such as Retrieval-Augmented Generation (RAG) pipelines, where instructions and demonstrations must be optimized jointly [cite: 7, 35].
Empirical Performance and Benchmark Achievements
To evaluate the real-world impact of these automated optimization techniques, the table below compiles performance data across mathematical, logical, and linguistic benchmarks, comparing optimized prompts against standard baselines:
Algorithm / Framework
Baseline Comparison
Benchmark Dataset
Reported Accuracy / Success Metric
Quantitative Performance Improvement
PE2
 [cite: 45]
"Let's think step by step"
MultiArith
Task Accuracy
+6.3% Accuracy over baseline [cite: 45]
PE2
 [cite: 45]
"Let's think step by step"
GSM8K
Task Accuracy
+3.1% Accuracy over baseline [cite: 45]
DP2O
 [cite: 15]
State-of-the-Art (SOTA)
4 Open-Source Datasets
Average Accuracy
+1.52% Accuracy; uses only 10.86% of RLPrompt training time [cite: 15]
PRL
 [cite: 25]
APE / EvoPrompt
Text Classification
Task Accuracy
+2.58% over APE; +1.00% over EvoPrompt [cite: 25]
PRL
 [cite: 25]
APE / EvoPrompt
GSM8K
Task Accuracy
+2.72% over APE; +4.53% over EvoPrompt [cite: 25]
GEPA
 [cite: 7, 27]
MIPROv2
AIME 2025
Task Accuracy
+12.0% Accuracy over prior SOTA optimizer [cite: 7, 26]
GEPA
 [cite: 27]
GRPO (Traditional RL)
Multimodal / Logical Tasks
Average Task Score
+10.0% average improvement (up to 20% max); uses 35x fewer rollouts [cite: 27]
EVOL-RL
 [cite: 34]
Test-Time RL (TTRL)
AIME 2025 (pass@16)
Mathematical Pass Rate
Improved from 18.5% (TTRL) to 37.9% [cite: 34]
E-SPL
 [cite: 46]
GRPO (RL-only parameters)
AIME 2025
Overall Success Rate
Improved from 56.3% (RL-only) to 60.6% [cite: 46]
E-SPL
 [cite: 46]
GRPO (RL-only parameters)
Easy-to-Hard (AIME 
\rightarrow
 BeyondAIME)
Out-of-Distribution Generalization
Improved from 38.8% (RL-only) to 45.1% [cite: 46]
Operational Bottlenecks and Scalability Challenges
Despite these performance gains, deploying automated prompting frameworks in production requires addressing several operational bottlenecks [cite: 5, 40, 47].
The Context Wall and Computational Costs
The search phase of frameworks like TextGrad and GEPA is highly resource-intensive, often requiring hundreds of model evaluations that translate into significant API costs [cite: 26, 40, 48].
Furthermore, naively scaling training data in textual gradient descent can hit an "implicit context wall" [cite: 40, 41]. When long-context histories are passed to the meta-model, context degradation can occur, leading to poorer prompt proposals and diminishing optimization returns [cite: 40, 41].
Prompt Bloat and Overfitting
During iterative evolutionary cycles, mutation engines often append corrective instructions to address edge-case errors [cite: 47]. This causes prompt bloat, which increases token usage and latency during inference [cite: 5, 47].
Additionally, optimizing prompts on a small validation set can easily lead to overfitting [cite: 44, 47]. To prevent this, developers must use regularized proposers to constrain prompt length and validate final prompts on a held-out test set [cite: 44, 47, 49].
Prompt Complexity vs. Generalization:
  High Accuracy
       ▲
       │               Optimized Generalization Zone
       │                    (Balanced Length)
       │                       ┌───────┐
       │                      ┌┘       └┐
       │                     ┌┘         └─┐
       │                    ┌┘            └──┐   Prompt Bloat Zone
       │                   ┌┘                └───► (Overfitting to
       │                  ┌┘                       validation set)
       │                 ┌┘
       └─────────────────┴─────────────────────────────────────────►
       Simple Prompt                                Complex Prompt


Cross-Model Portability
Although discrete prompts are human-readable, they are often optimized for the specific behavioral quirks of the target model used during the search loop [cite: 5, 17]. This means that a prompt optimized for a specific architecture can underperform when migrated to another model [cite: 6, 18]. Developers must use multi-model validation strategies or translation frameworks to ensure consistent performance across different model providers [cite: 6, 50].
Strategic Engineering Recommendations
For organizations looking to deploy automated prompting systems in production, the following engineering guidelines are recommended:
Follow the Optimizer Ladder
: Avoid starting with computationally expensive algorithms like GEPA or TextGrad [cite: 26]. Begin with inexpensive, baseline approaches such as BootstrapFewShot or OPRO to establish a performance baseline [cite: 26, 51]. Graduate to expensive evolutionary or gradient-based optimizers only when baseline performance plateaus and the target task justifies the additional optimization budget [cite: 26].
Enforce Strict Length Regularization
: To prevent prompt bloat and contain API costs, implement length constraints during the proposal and mutation phases [cite: 5, 47]. Using length-aware regularizers can compress prompts by up to 4x with minimal impact on accuracy, helping meet production latency requirements [cite: 47].
Implement Sample-Level Routing
: For applications with highly variable inputs, replace static, dataset-level prompts with dynamic, sample-level routing architectures [cite: 42]. Deploying a lightweight offline router to direct incoming queries to targeted prompt templates can optimize accuracy and control inference costs [cite: 42].
Use Co-Evolutionary Training for Custom Models
: When deploying proprietary, fine-tuned models, use co-evolutionary frameworks like E-SPL to jointly optimize model weights and prompt contexts [cite: 52, 53]. This dual-loop optimization accelerates convergence, reduces parameter drift, and preserves model plasticity for future tasks [cite: 46, 53].

--------------------------------------------------------------------------------

A Survey of Automatic Prompt Engineering: An Optimization Perspective - ResearchGate, 
https://www.researchgate.net/publication/389091558_A_Survey_of_Automatic_Prompt_Engineering_An_Optimization_Perspective
https://www.researchgate.net/publication/389091558_A_Survey_of_Automatic_Prompt_Engineering_An_Optimization_Perspective
[2502.11560] A Survey of Automatic Prompt Engineering: An Optimization Perspective, 
https://arxiv.org/abs/2502.11560
https://arxiv.org/abs/2502.11560
A Systematic Survey of Automatic Prompt Optimization Techniques - ResearchGate, 
https://www.researchgate.net/publication/389314872_A_Systematic_Survey_of_Automatic_Prompt_Optimization_Techniques
https://www.researchgate.net/publication/389314872_A_Systematic_Survey_of_Automatic_Prompt_Optimization_Techniques
Preference-Driven Refinement of Prompts: A Systematic Prompt Engineering Method for Helping to Automate Software Engineering - W&M Computer Science, 
https://www.cs.wm.edu/~dcschmidt/PDF/CW2025.pdf
https://www.cs.wm.edu/~dcschmidt/PDF/CW2025.pdf
A Survey of Automatic Prompt Engineering: An Optimization Perspective - arXiv, 
https://arxiv.org/html/2502.11560v1
https://arxiv.org/html/2502.11560v1
Prompt Engineering: Advanced Techniques for 2026 - Digital Applied, 
https://www.digitalapplied.com/blog/prompt-engineering-advanced-techniques-2026
https://www.digitalapplied.com/blog/prompt-engineering-advanced-techniques-2026
DSPy GEPA vs MIPROv2: Auto Prompt Optimization 2026 - Particula Tech, 
https://particula.tech/blog/dspy-gepa-vs-miprov2-automatic-prompt-optimization
https://particula.tech/blog/dspy-gepa-vs-miprov2-automatic-prompt-optimization
Prompt engineering and prompt-tuning: Foundations, advancements and research direction, 
https://wjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-4103.pdf
https://wjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-4103.pdf
arXiv:2502.16923v2 [cs.CL] 2 Apr 2025, 
https://arxiv.org/pdf/2502.16923
https://arxiv.org/pdf/2502.16923
[Literature Review] A Systematic Survey of Automatic Prompt Optimization Techniques, 
https://www.themoonlight.io/en/review/a-systematic-survey-of-automatic-prompt-optimization-techniques
https://www.themoonlight.io/en/review/a-systematic-survey-of-automatic-prompt-optimization-techniques
[Literature Review] A Survey of Automatic Prompt Engineering: An Optimization Perspective, 
https://www.themoonlight.io/en/review/a-survey-of-automatic-prompt-engineering-an-optimization-perspective
https://www.themoonlight.io/en/review/a-survey-of-automatic-prompt-engineering-an-optimization-perspective
Differentiable Evolutionary Reinforcement Learning - arXiv, 
https://arxiv.org/html/2512.13399v1
https://arxiv.org/html/2512.13399v1
Daily Papers - Hugging Face, 
https://huggingface.co/papers?q=compositional%20prompt%20optimization
https://huggingface.co/papers?q=compositional%20prompt%20optimization
promptolution: A Unified, Modular Framework for Prompt Optimization - ACL Anthology, 
https://aclanthology.org/2026.eacl-demo.21.pdf
https://aclanthology.org/2026.eacl-demo.21.pdf
A Policy-Gradient-Based Discrete Prompt Generation for Few-Shot Learning - AAAI Publications, 
https://ojs.aaai.org/index.php/AAAI/article/view/29809/31402
https://ojs.aaai.org/index.php/AAAI/article/view/29809/31402
Explore the Principles of Prompt Tuning and the Progress of Research - ITM Web of Conferences, 
https://www.itm-conferences.org/articles/itmconf/pdf/2025/09/itmconf_cseit2025_04028.pdf
https://www.itm-conferences.org/articles/itmconf/pdf/2025/09/itmconf_cseit2025_04028.pdf
LM-SODP: Language Model Self-Optimizing Discrete Prompt for Aspect Based Sentiment Analysis - PMC, 
https://pmc.ncbi.nlm.nih.gov/articles/PMC12731306/
https://pmc.ncbi.nlm.nih.gov/articles/PMC12731306/
ICML Poster Efficient and Privacy-Preserving Soft Prompt Transfer for LLMs, 
https://icml.cc/virtual/2025/poster/44996
https://icml.cc/virtual/2025/poster/44996
Prompt Distillation for Efficient LLM-based Recommendation - COMP, HKBU, 
https://www.comp.hkbu.edu.hk/~lichen/download/CIKM23-POD-paper.pdf
https://www.comp.hkbu.edu.hk/~lichen/download/CIKM23-POD-paper.pdf
Direct Prompt Optimization with Continuous Representations - ACL Anthology, 
https://aclanthology.org/2025.acl-long.133.pdf
https://aclanthology.org/2025.acl-long.133.pdf
P-Tuning - fnl.es, 
https://fnl.es/Science/Papers/Prompt+Engineering/P-Tuning
https://fnl.es/Science/Papers/Prompt+Engineering/P-Tuning
promptolution: A Unified, Modular Framework for Prompt Optimization - arXiv, 
https://arxiv.org/html/2512.02840v2
https://arxiv.org/html/2512.02840v2
A Systematic Survey of Automatic Prompt Optimization Techniques - arXiv, 
https://arxiv.org/html/2502.16923v2
https://arxiv.org/html/2502.16923v2
Prompt Optimization Methods - Emergent Mind, 
https://www.emergentmind.com/topics/prompt-optimization-methods
https://www.emergentmind.com/topics/prompt-optimization-methods
PRL: PROMPTS FROM REINFORCEMENT LEARNING - OpenReview, 
https://openreview.net/pdf?id=4eYSSSDle6
https://openreview.net/pdf?id=4eYSSSDle6
DSPy Optimizers Explained in 2026: BootstrapFewShot, MIPROv2, COPRO, and GEPA - Future AGI, 
https://futureagi.com/blog/dspy-optimizers-explained/
https://futureagi.com/blog/dspy-optimizers-explained/
GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning - arXiv, 
https://arxiv.org/html/2507.19457v1
https://arxiv.org/html/2507.19457v1
GEPA Overview - DSPy, 
https://dspy.ai/api/optimizers/GEPA/overview/
https://dspy.ai/api/optimizers/GEPA/overview/
GEPA: The Game-Changing DSPy Optimizer for Agentic AI - Superagentic AI, 
https://super-agentic.ai/resources/super-posts/gepa-game-changing-dspy-optimizer-agentic-ai/
https://super-agentic.ai/resources/super-posts/gepa-game-changing-dspy-optimizer-agentic-ai/
GEPA: Evolutionary Algorithm for Prompt Optimization | Future AGI Docs, 
https://docs.futureagi.com/docs/optimization/optimizers/gepa/
https://docs.futureagi.com/docs/optimization/optimizers/gepa/
Evolutionary System Prompt Learning for Reinforcement Learning in LLMs - OpenReview, 
https://openreview.net/forum?id=46SiHbmU1f
https://openreview.net/forum?id=46SiHbmU1f
A Prompt Optimization System Based on Center-Aware Textual Gradients - MDPI, 
https://www.mdpi.com/2079-8954/13/9/748
https://www.mdpi.com/2079-8954/13/9/748
PRewrite: Prompt Rewriting with Reinforcement Learning - arXiv, 
https://arxiv.org/html/2401.08189v2
https://arxiv.org/html/2401.08189v2
Daily Papers - Hugging Face, 
https://huggingface.co/papers?q=co-evolutionary%20RL
https://huggingface.co/papers?q=co-evolutionary%20RL
Top 10 Prompt Optimization Tools in 2026: FutureAGI, DSPy, TextGrad, PromptHub, PromptLayer Compared, 
https://futureagi.com/blog/top-10-prompt-optimization-tools-2025/
https://futureagi.com/blog/top-10-prompt-optimization-tools-2025/
TextGrad: Textual Gradients for AI Optimization - Emergent Mind, 
https://www.emergentmind.com/papers/2406.07496
https://www.emergentmind.com/papers/2406.07496
: Automatic “Differentiation” via Text - arXiv, 
https://arxiv.org/html/2406.07496v1
https://arxiv.org/html/2406.07496v1
TextGrad: Dynamic Optimization of Your LLM, 
https://www.aibussin.com/post/textgrad/
https://www.aibussin.com/post/textgrad/
TEXTGRAD vs DSPY : Revolutionizing AI System Optimization through Automatic Text-Based Differentiation - Medium, 
https://medium.com/@jelkhoury880/textgrad-vs-dspy-revolutionizing-ai-system-optimization-through-automatic-text-based-58f8ee776447
https://medium.com/@jelkhoury880/textgrad-vs-dspy-revolutionizing-ai-system-optimization-through-automatic-text-based-58f8ee776447
Scaling Textual Gradients via Sampling-Based Momentum - arXiv, 
https://arxiv.org/html/2506.00400v4
https://arxiv.org/html/2506.00400v4
1 Introduction - arXiv, 
https://arxiv.org/html/2506.00400v3
https://arxiv.org/html/2506.00400v3
HIPO: A HIerarchical Prompt Optimization Framework with Task Awareness and Fine-Grained Debugging - ACL Anthology, 
https://aclanthology.org/2026.findings-acl.996.pdf
https://aclanthology.org/2026.findings-acl.996.pdf
Evolutionary Prompt Optimization Discovers Emergent Multimodal Reasoning Strategies in Vision-Language Models - arXiv, 
https://arxiv.org/html/2503.23503v1
https://arxiv.org/html/2503.23503v1
I benchmarked 6 prompt-optimization frameworks on the same task. - Medium, 
https://medium.com/@maya.andersson/i-benchmarked-6-prompt-optimization-frameworks-on-the-same-task-da939d6fb39c
https://medium.com/@maya.andersson/i-benchmarked-6-prompt-optimization-frameworks-on-the-same-task-da939d6fb39c
PROMPT ENGINEERING A PROMPT ENGINEER - OpenReview, 
https://openreview.net/pdf?id=eojWsJQ2fe
https://openreview.net/pdf?id=eojWsJQ2fe
Evolutionary System Prompt Learning can Facilitate Reinforcement Learning for LLMs, 
https://chatpaper.com/paper/237747
https://chatpaper.com/paper/237747
Optimizing GEPA for production: A test-driven approach to prompt engineering | Decagon, 
https://decagon.ai/blog/optimizing-gepa-for-production
https://decagon.ai/blog/optimizing-gepa-for-production
Optimizers: choosing one - DSPy, 
https://dspy.ai/diving-deeper/choosing-an-optimizer/
https://dspy.ai/diving-deeper/choosing-an-optimizer/
GAAPO: genetic algorithmic applied to prompt optimization - Frontiers, 
https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1613007/full
https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1613007/full
Daily Papers - Hugging Face, 
https://huggingface.co/papers?q=reflective%20prompt-evolution
https://huggingface.co/papers?q=reflective%20prompt-evolution
Automated Prompt Engineering: Part 2 | by Xin Cheng | Medium, 
https://billtcheng2013.medium.com/automated-prompt-engineering-part-2-c5745039cd81
https://billtcheng2013.medium.com/automated-prompt-engineering-part-2-c5745039cd81
Ryan Chen's research works | Northwestern University, Evanston (NU) and other places, 
https://www.researchgate.net/scientific-contributions/Ryan-Chen-2312221453
https://www.researchgate.net/scientific-contributions/Ryan-Chen-2312221453
1 Introduction - arXiv, 
https://arxiv.org/html/2605.12484v1
https://arxiv.org/html/2605.12484v1