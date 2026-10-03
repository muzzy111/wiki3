# Automated Prompt Engineering: Part 2 | by Xin Cheng | Medium

Source URL: https://billtcheng2013.medium.com/automated-prompt-engineering-part-2-c5745039cd81

Sitemap

Open in app

Sign in

Medium Logo

Write

Search

Sign in

Automated Prompt Engineering: Part 2
From Manual Crafting to Machine-Driven Prompt Design
Xin Cheng

5 min read · Mar 1, 2026
--
GenAI Industry keeps moving, same on 
automated prompt engineering
https://billtcheng2013.medium.com/hello-world-to-automatic-prompt-optimization-c0f82750d5d6
.
Automated Prompt Engineering: The Definitive Hands-On Guide | Towards Data Science
Learn how to automate prompt engineering and unlock significant performance improvements in your LLM workload
towardsdatascience.com
OPRO/Optimisation by PROmpting strategy — the “Bayesian search” of prompt optimisation.
Promptim: an experimental library for prompt optimization
Promptim is an experimental prompt optimization library to help you systematically improve your AI systems. Promptim…
blog.langchain.dev
vs. DSPy
DSPy is the leading tool in the optimization space. It’s worth comparing our approach to theirs.
First, this initial effort is focused on just optimizing a single prompt. DSPy focuses on optimizing your whole “compound AI system”. We chose to focus on a single prompt for now as we think it is a more tractable problem at the moment.
Second, focus more on still having the human in-the-loop, while DSPy removes the human a bit more. One example of this through hooking this up to annotation queues for human feedback as part of the optimization process. Another example is storing these prompts in LangSmith for easy review after the fact. A final example is tracking evaluation results in LangSmith.
Third, focus solely on rewriting the prompt and aim to be really good at that, while DSPy offers a wider breadth of solutions to optimize your system (finetuning, few shot prompting).
Exploring Prompt Optimization
By Krish Maniar and William Fu-Hinthorn If you are interested in beta-testing more prompt optimization techniques, fill…
blog.langchain.dev
prompt “programming” and systematic prompt optimization, rather than manual trial and error, testing and tweaking prompt
Five popular prompt optimization approaches are benchmarked:
Few-shot prompting: use training examples as demonstrations of expected behavior
Meta-prompting: use an LLM to analyze and improve prompts
Meta-prompting with reflection: let the LLM think and critique its analysis before committing to an updated prompt
Prompt gradients: generate targeted improvement recommendations for each example as “text gradients” and then apply those in a separate LLM call
Evolutionary optimization: explore prompt space through controlled mutations
PromptWizard: Task-Aware Prompt Optimization Framework
Large language models (LLMs) have transformed AI across diverse domains, with prompting being central to their success…
arxiv.org
PromptWizard employs a self-evolving mechanism where the LLM generates, critiques, and refines its own prompts and examples, continuously improving through iterative feedback and synthesis.
Guided Exploration: feedback-driven critique-and-synthesis mechanism, refining prompts based on performance insights.
Sequential Optimization of Instructions and Examples: iteratively optimizes both prompt instructions and in-context examples in tandem.
Efficient Example Synthesis & Error Analysis: enhances efficiency by utilizing a compact set of diverse examples (up to 25) and leveraging error-driven self-reflection to generate synthetic examples
Iterative prompt refinement: MutateComponent (generate varied prompts), ScoringComponent (how well each prompt performs against a mini-batch of 5 training examples with ground truth), CritiqueComponent (reviews where the prompt succeeded and failed by analyzing cases where the LLM struggled), SynthesizeComponent (uses the critique’s feedback to 
 refine the best prompt. It rephrases and enhances the instruction based on the critique, producing a more task-specific and optimized prompt.)
CritiqueComponent and SynthesizeComponent are used to optimize few-shot examples.
Self-generated reasoning and validation: (i) ReasoningComponent: This takes the selected few-shot examples and generates a detailed reasoning chain for each example to facilitate problem-solving. (ii) ValidateComponent: The validation component uses an LLM to check the coherence and relevance of examples (questions,reasoning). This process effectively filters out incorrect examples and/or hallucinated reasoning.
A Survey of Automatic Prompt Engineering: An Optimization Perspective
The rise of foundation models has shifted focus from resource-intensive fine-tuning to prompt engineering, a paradigm…
arxiv.org
Serve as list of prompt optimization papers, organizes automatic prompt optimization methods through: 1. Optimization Spaces (text, vision, and multimodal domains); 2. Objective Functions (various task categories with mathematical instantiations of performance metrics and constraints); 3. Optimization Methods (FM-based, evolutionary, gradient-based, and RL)
Optimization Spaces
Discrete Variables: Instructions: generating concise yet precise directives; Thoughts: chain-of-reasoning through intermediate reasoning steps; Few-shot Examples: task-relevant behaviors
Continuous Variables: In contrast to discrete tokens, continuous (soft) prompts (Pc) rely on learnable embeddings
Mixed Variables: human-readable instructions or exemplars with trainable embedding vectors.
Optimization Methods
FM-based Optimization: FM as meta-optimizers to refine prompts, iterative improvement in which an FM proposes an updated prompt based on performance feedback
Evolutionary Computing: treat the prompt as an “organism,” mutated or crossed over to produce “offspring” that survive based on higher fitness
Gradient-Based Optimization: discrete tokens are not directly differentiable. learned continuous embedding back to discrete tokens each iteration, blending soft gradient updates with nearest-neighbor token matching.
Reinforcement Learning: prompt is updated via a sequence of actions under a reward
A Systematic Survey of Automatic Prompt Optimization Techniques
Since the advent of large language models (LLMs), prompt engineering has been a crucial step for eliciting desired…
arxiv.org
Automatic Prompt Optimization Framework
https://billtcheng2013.medium.com/hello-world-to-automatic-prompt-optimization-c0f82750d5d6
Seed Prompt Initialization: manual human-crafted prompts, few-shot examples provided as seeds, prompts induced/generated by an LLM
Candidate Prompt Generation: Heuristic-based Edits, LLM-based mutation, Mixture-of-Expert-Prompts, Ensemble Methods, Program Synthesis
Inference Evaluation & Feedback: Numeric Score Feedback, LLM Feedback, Human-feedback
Filter and Retain Promising Prompts: TopK Greedy Search, Metaheuristic Ensemble
Iteration Depth: Fixed Steps, Convergence criteria
promptolution: A Unified, Modular Framework for Prompt Optimization
Prompt optimization has become crucial for enhancing the performance of large language models (LLMs) across a broad…
arxiv.org
Open-Source. Several libraries only implement a single prompt optimizer, including TextGrad, AdalFlow with LLM-AutoDiff , Microsoft’s 
PromptWizard
https://github.com/microsoft/PromptWizard
 based on the eponymous optimization algorithm, and PromptIM with an own iterative optimization strategy. 
prompt-ops
https://github.com/meta-llama/prompt-ops
. Most-popular DSPy has multiple optimizers MIPROv2, GEPA. 
promptomatix
https://github.com/SalesforceAIResearch/promptomatix
 builds on DSPy. 
CoolPrompt
https://github.com/CTLab-ITMO/CoolPrompt
 is a very recentLLM-agnostic prompt optimization framework that supports multiple optimizers and emphasizes 
 “zero-configuration” in contrast to 
promptolution
https://github.com/automl/promptolution
, where researchers maintain close control over the setup.
promptolution components
LLM: interface for LLM, including APILLM, LocalLLM, VLLM
Predictor: defines how predictions are extracted from the LLM’s output and can be scored
Task: defines the problem to be solved, holds the dataset and other task-related information, including a textual description of the task, and defines how prompts are evaluated: ClassificationTask, JudgeTask, RewardTask
Optimizer: use Predictor and a Task to determine the optimal prompt for the specified setup, OPRO, EvoPromptDE, EvoPromptGA, CAPO
Prompt Engineering
https://github.com/automl/promptolution
Artificial Intelligence
https://github.com/automl/promptolution
Large Language Models
https://github.com/automl/promptolution
Written by  Xin Cheng
506 followers
https://github.com/automl/promptolution
·
16 following
https://billtcheng2013.medium.com/following?source=post_page---post_author_info--c5745039cd81---------------------------------------
Generative Agentic AI/LLM, Data, ML, Multi/Hybrid-cloud, cloud-native, IoT developer/architect, 3x Azure-certified, 3x AWS-certified, 2x GCP-certified
Help
Status
About
Careers
Press
Blog
Store
Privacy
Rules
Terms
Text to speech