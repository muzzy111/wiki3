# arXiv:2502.16923v2 [cs.CL] 2 Apr 2025

Source URL: https://arxiv.org/pdf/2502.16923

A Systematic Survey of Automatic Prompt Optimization Techniques Kiran Ramnath, Kang Zhou, Sheng Guan, Soumya Smruti Mishra, Xuan Qi, Zhengyuan Shen, 
Shuai Wang, Sangmin Woo, Sullam Jeoung, Yawei Wang, Haozhu Wang, Han Ding, Yuzhe Lu, Zhichao Xu, Yun Zhou, Balasubramaniam Srinivasan, Qiaojing Yan, Yueyan Chen, 
Haibo Ding, Panpan Xu, and Lin Lee Cheong Amazon Web Services 
{raxkiran,zhoukang,shguan,soumish,xuaqi,donshen, wshui,sangminw,sullamij, yawenwan, haozhuw, handing, yuzhelu, xzhichao, yunzzhou, srbalasu, qiaojiny, yyanc, hbding, xupanpan, lcheong}@amazon.com 
Abstract 
Since the advent of large language models (LLMs), prompt engineering has been a crucial step for eliciting desired responses for various Natural Language Processing (NLP) tasks. However, prompt engineering remains an impediment for end users due to rapid advances in models, tasks, and associated best practices. To mitigate this, Automatic Prompt Optimiza-tion (APO) techniques have recently emerged that use various automated techniques to help improve the performance of LLMs on various tasks. In this paper, we present a comprehensive survey summarizing the current progress and remaining challenges in this field. We provide a formal definition of APO, a 5-part unifying framework, and then proceed to rigorously categorize all relevant works based on their salient features therein. We hope to spur further research guided by our framework. 
1 Introduction Since McCann et al. (2018) cast multi-task NLP as Question Answering, using prompts as inputs has become the standard way to elicit desired responses from Large Language Models (LLMs). Furthermore, LLMs’ few-shot learning (Brown et al., 2020), instruction-following (Ouyang et al., 2022), and zero-shot reasoning capabilities (Ko-jima et al., 2023) have led to a widespread proliferation of prompting tricks for various tasks and model variants. However, LLMs still exhibit unpredictable sensitivity to various factors (explanation of the task (Li et al., 2023b),ordering (Liu et al., 2024a), stylistic formatting (Sclar et al.), etc.) causing a performance gap between two prompts that are semantically similar, thereby adding impediments for adoption by end users. Against this backdrop, Black-Box Automatic Prompt Optimization (APO) techniques have emerged that improve task performance via automated prompt improvements. The possess various attractive features - (1) they do 
not require parameter access on LLMs performing the task, (2) they systematically search through the prompt solution space, and (3) they retain human interpretability of prompt improvements. In this survey paper, we aim to highlight the advances in the field. Our core contribution is a 5-part APO taxonomy combined with a comprehensive finegrained categorization of various design choices therein (see Fig. 1, Tables 2, 3, 4 in Appendix). We hope our framework will be informational for new and seasoned researchers alike, enabling further research on open questions. 
2 Automatic Prompt Optimization Formulation 
We formalize the process of automatic prompt optimization (APO) as follows. Given a task model Mtask, initial prompt ρ ∈ V , the goal of an APO-system MAPO is to obtain the best performing prompt-template ρopt under a metric f ∈ F and eval-set Dval 
ρopt := argmax ρ∈V 
Ex∼Dval [f(Mtask(ρ⊕ x))] (1) 
This objective function is not tractable for discrete prompt optimization as token-sequence search spaces are combinatorial. Instead, APO techniques follow the general anatomy as described in Algo-rithm 1 to obtain approximate solutions. 
3 Initialize Seed Prompts 
3.1 Manual Instructions 
Several approaches use a seed of manually created instructions that offer interpretable and strong baselines as the basis for further improvement,inter alia., ProteGi (Pryzant et al., 2023), GPS (Xu et al., 2022), SPRIG (Zhang et al., 2024b). While obtaining quality examples can be costly, APE (Zhou et al., 2022) 1 showed that a few hundred samples are sufficient for further optimization. 
1Note: APE stands for Automatic Prompt Engineer method introduced by (Zhou et al., 2022), not to be confused with APO 
 
 
 
 
 
 
 
 
 
 
Pr om 
pt op 
tim iza 
tio n 
an ato 
m y 
§2 
Iteration depth §7 
Variable steps §7.2 
Fixed steps §7.1 
Filter and retain promising candidates §6 
Meta-heuristic ensemble §6.4 
Region-based joint search §6.3 
Upper confidence bound and variants §6.2 
TopK Greedy Search §6.1 
Candidate prompt generation §5 
Program Synthesis §5.5 
Coverage-based §5.4 
Ensemble methods §5.4.3 
Mixture of experts §5.4.2 
Single prompt expansion §5.4.1 
Metaprompt design §5.3 
Editing with auxiliary trained NN §5.2 
Generative Adversarial Networks §5.2.3 
LLM Finetuning §5.2.2 
Reinforcement Learning §5.2.1 
Heuristic-based edits §5.1 
Vocabulary pruning §5.1.4 
Word / phrase edits §5.1.3 
Genetic Algorithm §5.1.2 
Monte Carlo Sampling §5.1.1 
Inference evaluation and feedback §4 
Human Feedback §4.3 
LLM Feedback §4.2 Improving multiple candidates §4.2.2 
Improving single candidate §4.2.1 
Numeric score §4.1 
Negative log-likelihood §4.1.4 
Entropy-based §4.1.3 
Reward model score §4.1.2 
Task accuracy §4.1.1 
Seed Prompts §3 
Instruction-induction via LLMs §3.2 
Manual Instructions §3.1 
Figure 1: Taxonomy of Automatic Prompt Optimization 
Algorithm 1 Prompt optimization framework 
1: P0 := {ρ1, ρ2, . . . , ρk} ▷ §3. Seed prompts 2: Dval := {(x1, y1)}ni=1 ▷ Validation set 3: f1, . . . , fm ∈ F ▷ §4. Inference evaluation 4: for t = 1, 2, . . . , N do ▷ §7. Iteration depth 
▷ §5. Generate prompt candidates 5: Gt := MAPO(P,Dval, F ) 
▷ §6. Filter and retain candidates 6: Pt := Select(Gt, Dval, F ) 
▷ §7. Optionally check for early convergence 7: if fconvergence ≤ ϵ then 8: exit 9: return argmaxρ∈PN 
Ex∼Dval [f(Mtask(ρ⊕ x))] 
3.2 Instruction Induction via LLMs 
Honovich et al. (2023) were the first to propose inducing LLMs to infer human-readable prompts based on a few demonstrations E (see Appendix 14.1 for prompt). APE (Zhou et al., 2022) and DAPO (Yang et al., 2024c) use the induced seed instructions for further optimization, while MOP (Wang et al., 2025) and GPO (Li et al., 2023c) use APE to induce cluster-specific prompts. Apart from demonstrations, SCULPT (Kumar et al., 2024) induced instructions from task-READMEs, while UniPrompt (Juneja et al., 2024) used LLMs to fill-
which broadly refers to the entire area of Automatic Prompt Optimization
https://lh3.googleusercontent.com/notebooklm/AKYWMX_fXqrs7dk1vQc-9cK_AhiuofWrEqmcYtZavq74wNwFfku8DH14Eb48pX3EyT0IYr6AcARn9HckcCbzW5sXEwHcl6ipt8NHbdv_FlfY0DQHSy2eJFMyBQCs8_-5LUVCas5Jsvhv=w1280-h269-v0
545345a6-a40d-4bfd-a8ec-16ea6fc547f0
Figure 2: Representative APO system 
in structured templates. 
4 Inference Evaluation and Feedback The evaluation step helps identify promising prompt candidates in each iteration. Some methods also use LLM feedback on prompt-response pairs to help generate more prompt candidates. 
4.1 Numeric Score Feedback 
4.1.1 Accuracy 
Using task-specific accuracy metrics is the most straightforward and widespread way of eliciting feedback, i.a., (Zhou et al., 2022, 2023; Zhang et al., 2024b; Khattab et al., 2022). Classifica-tion and MCQ-based QA tasks use exact accuracy, while code-related tasks measure execution accuracy. Text generation tasks (summarization, translation, creative writing) employ flexible metrics like BLEU-N, Rouge-N, Rouge-N-F1, or embedding-based measures such as BERTScore (Zhang* et al., 2020) (Honovich et al., 2023; Dong et al., 2024b). 
4.1.2 Reward-model Scores 
Given the limitations of rigid accuracy metrics, some approaches proposed using learned reward models to provide more nuanced evaluations of prompts-response pairs (Deng et al., 2022; Sun et al., 2024a; Kong et al., 2024). OIRL (Sun et al., 2024a) trained an XGBoost-based reward model that takes query-prompt embedding pairs as input and predicts whether the prompt will elicit correct answers from the language model and use it to select appropriate prompts for specific queries using a best-of-N strategy. DRPO (Amini et al., 2024) follows an LLM-based reward modeling approach using both predefined and dynamic reward criteria. It first optimizes in-context learning examples E, and using that it optimizes the specific task prompt. 
4.1.3 Entropy-based Scores 
Entropy-based scores evaluate the entire output distribution induced by candidates, as opposed to a single inference instance. They are gradient-free but require access to the entire output probability distribution, something not usually possible with black-box LLMs. CLAPS (Zhou et al., 2023) leverages the negative incremental crossentropy of π(xi⊕v∈V ) v/s π(xi) to identify promising words v ∈ V to add to the prompt. The topK words are then used as candidate tokens from which to construct candidate prompts. GRIPS (Prasad et al., 2023) simply added an entropy term to the task-weighted accuracy− 
∑ πρ(y) ln(πρ(y))+ 
1 |T | 
∑ 1(y = ŷ) to prioritize output diversity in po-
tential prompt candidates. 
4.1.4 Negative Log-likelihood of Output 
Some approaches like APE, GPS (Xu et al., 2022), PACE (Dong et al., 2024b) consider the negative log-likelihood (NLL) of token sequences under the target LLM, i.e., − log(πρ(y)). This however requires the log-probabilities to be accessible during the decoding of each token, limiting its applicability. The NLL for ground truth one-hot tokensequence is equivalent to the cross-entropy. 
4.2 LLM Feedback 
A popular paradigm to augment or fully replace numeric scores is to use textual feedback generated by LLMEvaluator (Wang et al., 2024a; Long et al., 2024; Sinha et al., 2024). It is versatile because it can evaluate both the response as well as the prompt input. It can directly aid the prompt rewriting process while being flexible to individual tasks as it only needs natural language instructions for general-purpose LLMs as opposed to task-specific handcrafting of metrics. A potential downside is the inference cost incurred due to an additional LLM call. All the LLM feedback approaches pro-
Paper Seed instructions Iteration depth Inference evaluation Candidate generation Search+filter strategy ProTeGi (Pryzant et al., 2023) 
Manually created Fixed LLM feedback + Task accuracy 
LLM rewriter UCB for trees 
APE (Zhou et al., 2022) 
Instruction induction Fixed Task accuracy N/A UCB 
CRISPO (He et al., 2025) 
Manually created Fixed LLM feedback + Task accuracy 
LLM rewriter TopK selection 
MOP (Wang et al., 2025) 
Instruction induction Fixed Task accuracy Mixture of experts Region-based joint search 
DSPY (Khattab et al., 2024) 
Manually created + Instruction induction 
Variable LLM feedback + Task accuracy 
Program Synthesis TopK selection 
OPRO (Yang et al., 2024a) 
Manually created Variable LLM feedback + Task accuracy 
Metaprompt design TopK selection 
GATE (Joko et al., 2024) 
Manually created Variable Human feedback LLM rewriter N/A 
Table 1: Comparison of some APO techniques under our framework (Tables 2,3,4 show full comparison) 
vide multiple feedback data and broadly fall into two categories - improving a single prompt candidate versus improving multiple prompt candidates (discussed below, examples in Appendix 14.3). 
4.2.1 Improving Single Candidate 
SCULPT (Kumar et al., 2024) introduces a systematic method for tuning long, unstructured prompts by employing a hierarchical tree structure and two-step feedback loops - preliminary assessment and error assessment - to evaluate and correct prompts before and after execution. The feedback updates the hierarchical prompt tree which is then back-synthesized into a new prompt candidate. PACE (Dong et al., 2024b) applies an actor-critic editing framework to the prompt refinement process itself, allowing for more dynamic and adaptive adjustments. Overcoming the limitations of optimizing a single metric, CRISPO (He et al., 2025) adopts a multi-aspect critique-suggestion metaprompt to highlight flaws in the generated response across multiple dimensions such as style, precision, and content alignment. Thereafter it leverages detailed, aspect-specific feedback and iteratively updates the prompts. Autohint (Sun et al., 2023) summarizes feedback for multiple incorrect inferences via hints to instill improvements into a single prompt candidate. 
4.2.2 Improving Multiple Candidates 
ProTeGi (Pryzant et al., 2023) and TextGrad (Yuk-sekgonul et al., 2024) leverage textual “gradients” to guide the discrete prompt optimization procedure, very similar to the gradient-descent style of continuous prompt optimization approaches. Dif-ferent from continuous gradient-descent, ProTeGi sampled multiple “gradients” i.e. directions of improvement, and each such “gradient” is used 
to generate several prompt candidates for evaluation in the next iteration. PromptAgent (Wang et al., 2024a) similarly used an error collection approach to emulate expert-written prompts that consisted of clear sections like “Task description”, “Do-main Knowledge”, “Solution Guidance”, “Excep-tion Handling”, “Output Formatting”. PREFER (Zhang et al., 2024a) utilizes a feedback-reflect-refine cycle to aggregate feedback into multiple prompts in an ensemble to improve the model’s ability to generalize across various tasks. Sur-vival of the Safest (SOS) (Sinha et al., 2024) added safety-score into a multi-objective prompt optimization framework that used an interleaved strategy to balance performance and security in LLMs simultaneously. To avoid accidentally damaging well-functioning prompts, StraGo (Wu et al., 2024) summarized strategic guidance based on both correct and incorrect predictions as feedback. 
4.3 Human-feedback 
A few works also incorporate human feedback, either during compile-time or inference-time in the prompt construction / optimization process. Joko et al. (2024) proposed “Generative Active Task Elicitation” to better capture human preferences. It prompts a language model to interactively ask questions and infer human preferences conditioned on the history of free-form interaction. Cheng et al. (2024) trained a smaller LLM to optimize input prompts based on user preference feedback, achieving up to 22% increase in win rates for ChatGPT and 10% for GPT-4. PROMST (Chen et al., 2024) tackles the challenges of multi-step tasks by incorporating human-designed feedback rules and a learned heuristic model. APOHF (Lin et al., 2024) focuses on optimizing prompts using only human preference feedback rather than numeric scores,
employing a dueling bandits-inspired strategy to efficiently select prompt pairs for preference feedback, proving effective for tasks like text-to-image generation and response optimization. 
5 Candidate Prompt Generation In this step, one or more candidate prompts are generated that are most likely to result in an improvement in a metric of interest f ∈ F . The approaches reviewed below range from simple rule-based edits (sec. 5.1) to sophisticated agentic systems that combine with LLM-based evaluations (sec. 4.2) and various filtering strategies (sec. 6). 
5.1 Heuristic-based Edits 
Several works proposed heuristic-based mechanisms to make edits to intermediate prompt candidates to generate newer candidates. They range from edits at the word / phrase / sentence-level (either simple rule-based or LLM-generated), or metric-driven incremental search. While these strategies may not result in the most optimal solution, they help in making the discrete prompt optimization problem computationally tractable. 
5.1.1 Monte Carlo Sampling 
ProTeGi (Pryzant et al., 2023) uses Monte carlo sampling to explore combinatorial discrete solution spaces in an incremental fashion - it samples multiple textual gradients to use to generate prospective candidates, and spawns paraphrases as monte-carlo successors for evaluation. PromptAgent (Wang et al., 2024a) uses a tree-variant called Monte Carlo Tree Search (MCTS) which consists of 4 steps — Selection, Expansion, Simulation, and Backpropa-gation (also explained in Sec. 6). 
5.1.2 Genetic Algorithm 
A significant line of work applies the well-studied genetic algorithms to make discrete edits to texts. The common recipe for several genetic algorithms is 1/ Mutate and 2/ Cross-over components from promising candidates. Token mutations: SPRIG (Zhang et al., 2024b) and CLAPS perform tokenlevel mutations. SPRIG uses a starting corpus of 300 components grouped into categories like COT, roles, styles, emotions, scenarios, and good properties. It performs add/rephrase/swap/delete, highlighting complementary strengths of optimizing system prompts alongside task-prompts (via methods like ProTeGi) to enhance accuracy across multiple diverse domains, languages, and tasks without 
needing repeated task-specific optimizations. 
LLM-based mutation: LMEA (Liu et al., 2023), SOS (Sinha et al., 2024), and StraGo (Wu et al., 2024) uses mutation prompts with LLMs to overcome the traditional complexity of designing tailored operators for cross-over / mutation. Prompt-Breeder (Fernando et al., 2023) advocates self-referential improvement of all prompts in the prompt optimization system - Direct Mutation of task prompts, Hypermutation of mutation prompts themselves, Lamarckian Mutation where prompts are reverse-engineered from successful examples (similar to Instruction Induction Honovich et al. (2023), and finally Crossover and Shuffling to improve diversity of the prompt pool. EvoPrompt (Guo et al., 2024) use Differential Evolution -where differences between existing prompts is incorporated to form new prompt candidates to overcome the problem of local optima. AELP (Hsieh et al., 2024) also uses mutation operators to perform sentence-level edits in an iterative fashion. They include sentence-level histories of reward {(st−1, st, rt)} in the mutation prompt in order to avoid local optima and accidentally returning to sub-optimal versions. GPS (Xu et al., 2022) used Back-translation, Sentence Continuation, and Cloze transformations to perform prompt mutation. PromptWizard (Agarwal et al., 2024) proposed a pipeline combining several steps including iterative improvement, few shot example synthesis and selection, utilizing LLM’s reasoning capability to improve and validate the prompt, and finally an expert persona to ensure consistency of the style of generated prompts. 
5.1.3 Word / Phrase Level Edits 
Several word-edit approaches first identify "influential" tokens in the prompts. COPLE (Zhan et al., 2024) argued that LLMs exhibit lexical sensitivity, showing that merely replacing a few words with their synonyms can yield significant improvements. First, “influential” tokens are identified where expected loss on dev-set EDval 
[L(y, ŷ)] drops the most after removing that token versus the original prompt, and then influential tokens are replaced using predictions from a Masked-Language Mod-els. This token-replacement approach is also attractive as a standalone post-processing step for long prompts that are already optimized using other LLM-based approaches. GRIPS (Prasad et al., 2023) argues that phrase level edition is an effec-
tive and interpretable method to optimize prompts, leveraging 4 basic edit operations -add, delete, paraphrase, and swap 
5.1.4 Vocabulary Pruning 
Some works prune the vocabulary space V to Vpruned for decoding the next token for the optimized prompt ρ∗. CLAPS (Zhou et al., 2023) argued that general search spaces are highly redundant and use K-means clustering to find wordclusters and retain top-2000 words closest to cluster centroids. BDPL (Diao et al., 2022) used pairwise mutual information (PMI) to retain top co-occuring ngrams for decoding. PIN (Choi et al., 2024) instead added regularization in the form of Tsallis-entropy (ideal for heavy-tailed distributions like natural language) for the RL training of a prompt generation network, to reduce the probability mass for unlikely tokens and improve interpetability. 
5.2 Editing via Auxiliary Trained NN 
Some approaches leverage a trained auxiliary neural network to edit the initial prompt for obtaining desired improvements. We include approaches where the finetuned network is different and smaller than the task network. 
5.2.1 Reinforcement-learning 
Multi-objective Optimization techniques (Jafari et al., 2024) demonstrate superiority over simple reward averaging, particularly through volume-based methods that effectively balance competing objectives. Dynamic prompt modification strategies, introduced through prompt rewriting (Kong et al., 2024), directional stimulus prompting (Li et al., 2023d) and test-time editing (Zhang et al., 2022) solve the important goal of moving beyond static prompt generation. Prompt-OIRL (Sun et al., 2024a) also tackled test-time optimization objective by learning an offline reward model and subsequently using a best-of-N strategy to recommend the optimal prompt in a query-dependent fashion. BDPL (Diao et al., 2022) optimized discrete prompts using variance-reduced policy gradient algorithm to estimate gradients, allowing user devices to fine-tune tasks with limited API calls. 
5.2.2 Finetuning LLMs 
BPO (Cheng et al., 2024) trains a smaller 7B model to align itself to task-performance on individual LLMs using reward-free alignment. FIPO (Lu et al., 2025) trains a local model (7B - 13B) to 
perform prompt optimizations to preserve privacy and adapt to target models better leveraging both data diversification and strategic fine-tuning such as SFT, preference optimization, and iterative preference learning. 
5.2.3 Generative Adversarial Networks 
Long et al. (2024) framed the prompt optimization process in the GAN setting. The LLM generator takes question and the generation prompt to produce output. The (input, output) pairs are evaluated by an LLM powered discriminator, whose goal is to identify generated pairs from ground truth pairs. Both generator and the discriminator are jointly optimized using adversarial loss, by utilizing a prompt modifier LLM to rewrite their prompts. 
5.3 Metaprompt Design 
PE2 (Ye et al., 2024) argued that previous works under-explored meta-prompt search space. OPRO (Yang et al., 2024a) proposes a meta-prompt design (see Appendix 14.2) which includes the optimization problem description in natural language and previously generated solutions (multiple solutions per stage for diversity) and scores alongisde the meta-instruction for prompt refinement. DAPO (Yang et al., 2024c) utilizes a well-designed metainstruction to guide the LLM in generating highquality and structured initial prompts (contain taskspecific info, e.g. task type and description, output format and constraints, reasoning process, professional tips) by observing given input-output exemplars. Then, DAPO iteratively optimizes the prompts at the sentence level, leveraging previous tuning experience to expand prompt candidates. 
5.4 Coverage-based 
Some approaches seek to "cover" the entire problem space - either within a single prompt, or using multiple prompts working individually or in an ensemble during inference. 
5.4.1 Single Prompt-expansion 
AMPO (Yang et al., 2024d) uses LLM feedback to enumerate all the failure cases based on the evaluation-set Dval and then enlists each of them in the meta-instruction in an if-then-else format using 3 modules - 1/ Pattern Recognition, 2/ Branch Ad-justment, and 3/ Branch Pruning to decide whether to enhance existing branches, or to grow new branches. Similarly, UNIPROMPT focused on explicitly ensuring that various semantic facets of a
task get represented in the final prompt. It designs a human-like (manual) prompt engineering approach (UniPrompt) with two stages: a) task facets initialization using background knowledge, and b) refinement using examples. 
5.4.2 Mixture of Experts 
Wang et al. (2025) introduced the Mixture-of-Expert-Prompts where each expert is a task-prompt to be used for specialized inference. MOP first clusters all demonstrations using K-means clustering. Then, the Region-based Joint Search (RBJS) (sec.6.3) algorithm generates the appropriate instruction for each exemplar-cluster via instruction induction (sec.3.2) based on a mix of in-cluster and out-of-cluster demonstrations to cover “blindspots”. During inference, a single expert prompt is invoked whose cluster centroid µc is closest to the instance-embedding argminC ||ϕ(xi)− µc||2. 
5.4.3 Ensemble Methods 
PromptBoosting (Hou et al., 2023), Boosted-Prompting (Pitis et al., 2023), PREFER (Zhang et al., 2024a), etc. are ensemble methods that invoke multiple prompts during inference and combine them to generate the final output ŷ = y0 + Σmβiyi. GPO (Li et al., 2023c) also uses labeled source data to generate an ensemble of prompts, which are applied to unlabeled target data to generate output through majority voting. 
5.5 Program Synthesis 
Program-synthesis based approaches transform LLM pipelines into structured, modular components that can be systematically optimized and composed. These optimization techniques iteratively refine instructions and demonstrations for each module to improve the entire pipeline’s performance, DSP (Khattab et al., 2022) introduces a three-stage framework for retrieval-augmented inference: Demonstrate (generates task-specific demonstrations), Search (retrieves relevant information), and Predict (combines retrieved info with demonstrations). DSPY (Khattab et al., 2024) transforms LLM pipelines into text transformation graphs - introducing parameterized models, learning through demonstrations, and a compiler that optimizes pipelines. DLN (Sordoni et al., 2023) similarly considers chained LLM calls as stacked deep language networks performing variational inference, where the learnable parameters for each layer are task-decomposed prompt templates. MIPRO 
(Opsahl-Ong et al., 2024) automates the optimization of multi-stage language model programs by improving instructions and demonstrations for each module. SAMMO (Schnabel and Neville, 2024) proposed symbolic prompt programming, representing prompts as directed-acyclic-graphs (DAG). A set of user-defined node mutation rules guide the mutation-search to find the optimal DAG, which is then converted back to a prompt. 
6 Filter and Retain Promising Prompts In this step, promising prompt candidates are filtered for further optimization. 
6.1 TopK Greedy Search 
The simplest mechanism to iteratively search through prompt candidate sets is a greedy topK search where in each iteration of the optimization, the top-K best-performing candidates on minibatch of data instances Dval are retained for further iterations (e.g. - ProTeGi, AELP. This differs from beam-search which judges partial solutions’ based on the reward for the entire trajectory of prompt edits r({ρ11, ρ12, . . . , ρ1t }). 6.2 Upper Confidence Bound and Variants 
Relying on a single static evaluation dataset can lead to biases in the selection procedure and finally suboptimal solutions. ProTeGi, SPRIG, inter alia, cast the candidate prompt selection problem as that of bandit search - identifying the most suitable arm (prompt candidate) operating on a fixed computation budget. They use the Upper Confidence Bounds (UCB, Algorithm 2) which balances exploration with exploitation. In each iteration of prompt optimization, they sample a different evaluation dataset Dsample ∈ Dval, and maintain a moving estimate of the optimality of each arm (i.e. prompt). In each iteration, the playout filters top-B prompt candidates with the greatest score for further exploration. PromptAgent uses a variation of UCB called UCB for Trees (UCT) which are used in the setting of contextual bandits (i.e. the action-space and the reward function is state-dependent). AELP (Hsieh et al., 2024) used a modification called Lin-ear UCB (Li et al., 2010) which uses a closed form linear estimate based on the reward trajectories of previously sampled edits as well as prompt embedding ϕ(s) to select the next best-arm.
6.3 Region-based Joint Search 
MOP (Wang et al., 2025) proposes a Mixture-of-Expert-Prompts performing prompt optimization for each expert individual. Once C exemplarclusters are identified, the RBJS search first samples examples Dexemplars ∈ DC ∪ D \ DC , and then uses APE to induct and optimize each expert instruction. 
6.4 Metaheuristic Ensemble 
PLUM (Pan et al., 2024) library offered a metaheuristic ensemble of different search algorithms like Hill climbing, Simulated Annealing, Genetic Algorithms, Tabu Search, and Harmony Search. 
7 Iteration Depth 
7.1 Fixed Steps 
Most approaches choose to carry out the prompt optimization for a fixed number of steps N. 
7.2 Variable number of steps 
GRIPS (Prasad et al., 2023) concludes search when successive iterations with negative gains breach a patience parameter, whereas PromptAgent concluded APO when rt ≤ ϵmin ∨ rt ≥ ϵmax. 
8 Theoretical Perspectives 
8.1 Upper Bound of Improvement from APO 
AlignPro (Trivedi et al., 2025) establishes an upper bound on the gains realizable from discrete prompt optimization under a given prompt optimizer and also a suboptimality-gap w.r.t. RLHF-optimal policy π∗, while a lower bound is left unexplored. 
8.2 Other Related Perspectives 
Bhargava et al. (2024) proposed a control theoretic framework to establish bounds on the set of reachable LLM-outputs for self-attention in terms of the singular values of its weight matrices. Liu et al. (2024c) showed the existence of a strong transformer that can approximate any sequence-to-sequence Lipschitz function. They also showed the existence of “difficult” datasets that depth-limited transformers could not commit to memory. 
9 Challenges and Future Directions 
9.1 Task-agnostic APO 
All the surveyed APO methods assume that the task type T is known beforehand; additionally offline APO methods also require an evaluation set Dval, something not explicitly available in production 
settings. Barring a few tasks covered by Joko et al. (2024); Sun et al. (2024a); Zhang et al. (2022); Choi et al. (2024), inference-time optimization of multiple unknown tasks is underexplored. More robust evaluations are needed for task-agnostic APO systems combining seen and unseen tasks. 
9.2 Unclear Mechanisms 
Melamed et al. (2024) showed that prompts have so-called ’evil twins’ that are uninterpretable yet recover some of the performance of gold-standard prompts. Lu et al. (2024) showed that rare gibberish strings can serve as competitive delimiters τ in prompts. Yang et al. (2024b) showed that self-reflection by LLMs can suffer from incorrect error identification, prior biases, semantic invalidity, leading to failure in yielding improved prompts. More studies are needed to better uncover the mechanisms of prompt optimization. 
9.3 APO for System Prompts / Agents 
Although SPRIG explored optimizing system prompts in chat-style settings, scalability remains a challenge - optimizing system prompts required a predefined corpus and close to 60 hours whereas Protegi only needed 1̃0 minutes per task. Similarly, optimizing prompts for several components in an agentic system in a concurrent fashion poses an exciting direction for future research. 
9.4 Multimodal APO 
Recently, textual prompt optimization has expanded to multimodal domains: text-to-image (Liu et al., 2024b; Mañas et al., 2024; Liu et al., 2024d), text-to-video (Ji et al., 2024), text-to-audio (Huang et al., 2023), and text-image alignment models like CLIP (Du et al., 2024; Mirza et al., 2024). Be-yond textual prompts, Huang et al. (2023) explore optimizing multimodal inputs, such as images, to elicit better responses from large multimodal models. However, the interplay between modalities in prompt optimization remains underexplored. Fu-ture research could develop APO frameworks to jointly optimize multimodal prompts (eg - remove background noise from audio, add visual markers to videos, etc.) to fully leverage their synergies. 
10 Conclusion In this paper, we provide a comprehensive finegrained review of existing APO techniques and identified key areas for future growth. It is our aim to spur future research spawning from our survey.
11 Limitations While we attempted to cover all qualifying papers, it is possible that we may have unintentionally missed out on some relevant papers. We also mention some of the papers that were excluded in this survey with specific reasons in section 12.2. Also, we realize that fitting varied research works into a single unifying framework might risk broad categorizations for some papers, or skipping some characteristics for others (e.g. Tempera (Zhang et al., 2022) consists of both RL-based and word/phrase-level editing techniques, applied to both instructions and exemplars). In such cases, we categorize a paper based on its most salient features. Another challenge is that when presenting a survey paper under 8 pages, we had to make tradeoffs and only retain content in the main body that was deemed most necessary. This resulted in having to relegate a core contribution (Tables 2,3,4) which contained a rigorous comparison of all the surveyed papers into the appendix. We have attempted our best to strike the right balance between specificity and brevity to present a novel framework. We also provide copious references to interested researchers for further reading. 
References Eshaan Agarwal, Joykirat Singh, Vivek Dani, Raghav Magazine, Tanuja Ganu, and Akshay Nambi. 2024. Promptwizard: Task-aware prompt optimization framework. 
Fernando Alva-Manchego, Louis Martin, Antoine Bor-des, Carolina Scarton, Benoît Sagot, and Lucia Specia. 2020. Asset: A dataset for tuning and evaluation of sentence simplification models with multiple rewriting transformations. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguis-tics, pages 4668–4679. 
Afra Amini, Tim Vieira, and Ryan Cotterell. 2024. Di-rect preference optimization with an offset. In Findings of the Association for Computational Linguistics: ACL 2024, pages 9954–9972, Bangkok, Thailand. Associa-tion for Computational Linguistics. 
R. Anantha, Svitlana Vakulenko, Zhucheng Tu, S. Long-pre, Stephen G. Pulman, and Srinivas Chappidi. 2020. Open-domain question answering goes conversational via question rewriting. In North American Chapter of the Association for Computational Linguistics. 
Jacob Andreas, Johannes Bufe, David Burkett, Charles C. Chen, Joshua Clausman, Jean Crawford, Kate Crim, Jordan DeLoach, Leah Dorner, Jason Eis-ner, Hao Fang, Alan Guo, David Leo Wright Hall, Kristin Delia Hayes, Kellie Hill, Diana Ho, Wendy 
Iwaszuk, Smriti Jha, Dan Klein, Jayant Krishnamurthy, Theo Lanman, Percy Liang, C. H. Lin, Ilya Lintsbakh, Andy McGovern, Aleksandr Nisnevich, Adam Pauls, Dmitrij Petters, Brent Read, Dan Roth, Subhro Roy, Jesse Rusak, Beth Ann Short, Div Slomin, B Snyder, Stephon Striplin, Yu Su, Zachary Tellman, Sam Thom-son, A. A. Vorobev, Izabela Witoszko, Jason Wolfe, A. G. Wray, Yuchen Zhang, and Alexander Zotov. 2020. Task-oriented dialogue as dataflow synthesis. Transac-tions of the Association for Computational Linguistics, 8:556–571. 
Trapit Bansal, Rishikesh Jha, and Andrew McCallum. 2019. Learning to few-shot learn across diverse natural language classification tasks. In International Confer-ence on Computational Linguistics. 
Aman Bhargava, Cameron Witkowski, Shi-Zhuo Looi, and Matt Thomson. 2024. What’s the magic word? a control theory of llm prompting. 
Yonatan Bisk, Rowan Zellers, Ronan Le Bras, Jianfeng Gao, and Yejin Choi. 2019. Piqa: Reasoning about physical commonsense in natural language. In AAAI Conference on Artificial Intelligence. 
Samuel R Bowman, Gabor Angeli, Christopher Potts, and Christopher D Manning. 2015. A large annotated corpus for learning natural language inference. arXiv preprint arXiv:1508.05326. 
Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christo-pher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. 2020. Language models are fewshot learners. 
Paweł Budzianowski, Tsung-Hsien Wen, Bo-Hsiang Tseng, Iñigo Casanueva, Stefan Ultes, Osman Ramadan, and Milica Gasic. 2018. Multiwoz-a large-scale multidomain wizard-of-oz dataset for task-oriented dialogue modelling. In Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing, pages 5016–5026. 
Daniel Matthew Cer, Mona T. Diab, Eneko Agirre, Iñigo Lopez-Gazpio, and Lucia Specia. 2017. Semeval-2017 task 1: Semantic textual similarity multilingual and crosslingual focused evaluation. In International Work-shop on Semantic Evaluation. 
Mauro Cettolo, Marcello Federico, Luisa Bentivogli, Niehues Jan, Stüker Sebastian, Sudoh Katsuitho, Yoshino Koichiro, and Federmann Christian. 2017. Overview of the iwslt 2017 evaluation campaign. In In-ternational Workshop on Spoken Language Translation. 
Yongchao Chen, Jacob Arkin, Yilun Hao, Yang Zhang, Nicholas Roy, and Chuchu Fan. 2024. PRompt optimization in multi-step tasks (PROMST): Integrating
human feedback and heuristic-based sampling. In Pro-ceedings of the 2024 Conference on Empirical Meth-ods in Natural Language Processing, pages 3859–3920, Miami, Florida, USA. Association for Computational Linguistics. 
Jiale Cheng, Xiao Liu, Kehan Zheng, Pei Ke, Hongn-ing Wang, Yuxiao Dong, Jie Tang, and Minlie Huang. 2024. Black-box prompt optimization: Aligning large language models without model training. In Proceed-ings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 3201–3219, Bangkok, Thailand. Association for Computational Linguistics. 
Wei-Lin Chiang, Zhuohan Li, Zi Lin, Ying Sheng, Zhanghao Wu, Hao Zhang, Lianmin Zheng, Siyuan Zhuang, Yonghao Zhuang, Joseph E Gonzalez, et al. 2023. Vicuna: An open-source chatbot impressing gpt-4 with 90%* chatgpt quality. See https://vicuna. lmsys. org (accessed 14 April 2023), 2(3):6. 
Minje Choi, Jiaxin Pei, Sagar Kumar, Chang Shu, and David Jurgens. 2023. Do llms understand social knowledge? evaluating the sociability of large language models with socket benchmark. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pages 11370–11403. 
Yunseon Choi, Sangmin Bae, Seonghyun Ban, Min-chan Jeong, Chuheng Zhang, Lei Song, Li Zhao, Jiang Bian, and Kee-Eung Kim. 2024. Hard prompts made interpretable: Sparse entropy regularization for prompt tuning with rl. 
Christopher Cieri, Mark Liberman, Sunghye Cho, Stephanie Strassel, James Fiumara, and Jonathan Wright. 2022. Reflections on 30 years of language resource development and sharing. In Proceedings of the Thirteenth Language Resources and Evaluation Con-ference, pages 543–550, Marseille, France. European Language Resources Association. 
Peter Clark, Isaac Cowhey, Oren Etzioni, Tushar Khot, Ashish Sabharwal, Carissa Schoenick, and Oyvind Tafjord. 2018. Think you have solved question answering? try arc, the ai2 reasoning challenge. ArXiv, abs/1803.05457. 
Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plap-pert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, et al. 2021. Training verifiers to solve math word problems. arXiv preprint arXiv:2110.14168. 
Mike Conover, Matt Hayes, Ankit Mathur, Jianwei Xie, Jun Wan, Sam Shah, Ali Ghodsi, Patrick Wendell, Matei Zaharia, and Reynold Xin. 2023. Free dolly: Introduc-ing the world’s first truly open instruction-tuned llm. Company Blog of Databricks. 
Leyang Cui, Yu Wu, Shujie Liu, Yue Zhang, and Ming Zhou. 2020. Mutual: A dataset for multi-turn dialogue reasoning. ArXiv, abs/2004.04494. 
Ido Dagan, Oren Glickman, and Bernardo Magnini. 2005. The pascal recognising textual entailment challenge. In Machine Learning Challenges Workshop. 
Marie-Catherine de Marneffe, Mandy Simons, and Ju-dith Tonhauser. 2019. The commitmentbank: Investi-gating projection in naturally occurring discourse. 
Mingkai Deng, Jianyu Wang, Cheng-Ping Hsieh, Yihan Wang, Han Guo, Tianmin Shu, Meng Song, Eric P. Xing, and Zhiting Hu. 2022. Rlprompt: Optimizing discrete text prompts with reinforcement learning. 
Franck Dernoncourt and Ji Young Lee. 2017. Pubmed 200k rct: a dataset for sequential sentence classification in medical abstracts. In International Joint Conference on Natural Language Processing. 
Robert C. Detrano, András Jánosi, Walter Steinbrunn, Matthias Emil Pfisterer, Johann-Jakob Schmid, Sarbjit Sandhu, Kern Guppy, Stella Lee, and Victor Froelicher. 1989. International application of a new probability algorithm for the diagnosis of coronary artery disease. The American journal of cardiology, 64 5:304–10. 
Shizhe Diao, Zhichao Huang, Ruijia Xu, Xuechun Li, Yong Lin, Xiao Zhou, and Tong Zhang. 2022. Black-box prompt learning for pre-trained language models. arXiv preprint arXiv:2201.08531. 
Rezarta Islamaj Doğan, Robert Leaman, and Zhiyong Lu. 2014. Ncbi disease corpus: a resource for disease name recognition and concept normalization. Journal of biomedical informatics, 47:1–10. 
William B. Dolan and Chris Brockett. 2005. Automat-ically constructing a corpus of sentential paraphrases. In International Joint Conference on Natural Language Processing. 
Qingxiu Dong, Lei Li, Damai Dai, Ce Zheng, Jingyuan Ma, Rui Li, Heming Xia, Jingjing Xu, Zhiyong Wu, Baobao Chang, Xu Sun, Lei Li, and Zhifang Sui. 2024a. A survey on in-context learning. In Proceedings of the 2024 Conference on Empirical Methods in Natural Lan-guage Processing, pages 1107–1128, Miami, Florida, USA. Association for Computational Linguistics. 
Yihong Dong, Kangcheng Luo, Xue Jiang, Zhi Jin, and Ge Li. 2024b. PACE: Improving prompt with actorcritic editing for large language model. In Findings of the Association for Computational Linguistics: ACL 2024, pages 7304–7323, Bangkok, Thailand. Associa-tion for Computational Linguistics. 
Yingjun Du, Wenfang Sun, and Cees GM Snoek. 2024. Ipo: Interpretable prompt optimization for visionlanguage models. arXiv preprint arXiv:2410.15397. 
Dheeru Dua, Yizhong Wang, Pradeep Dasigi, Gabriel Stanovsky, Sameer Singh, and Matt Gardner. 2019. Drop: A reading comprehension benchmark requiring discrete reasoning over paragraphs. In North American Chapter of the Association for Computational Linguis-tics.
Stefan Daniel Dumitrescu, Petru Rebeja, Beáta Lőrincz, Mihaela Găman, Mihai Daniel Ilie, Andrei Pruteanu, Adriana Stan, Luciana Morogan, Traian Rebedea, and Sebastian Ruder. 2021. Liro: Benchmark and leaderboard for romanian language tasks. In NeurIPS Datasets and Benchmarks. 
Ibrahim Abu Farha and Walid Magdy. 2020a. From arabic sentiment analysis to sarcasm detection: The arsarcasm dataset. In OSACT. 
Ibrahim Abu Farha and Walid Magdy. 2020b. From arabic sentiment analysis to sarcasm detection: The arsarcasm dataset. In OSACT. 
Chrisantha Fernando, Dylan Banarse, Henryk Michalewski, Simon Osindero, and Tim Rock-täschel. 2023. Promptbreeder: Self-referential self-improvement via prompt evolution. ArXiv, abs/2309.16797. 
Rory A. Fisher. 1936. The use of multiple measurements in taxonomic problems. Annals of Human Genet-ics, 7:179–188. 
Noa Garcia, Chentao Ye, Zihua Liu, Qingtao Hu, Mayu Otani, Chenhui Chu, Yuta Nakashima, and Teruko Mita-mura. 2020. A dataset and baselines for visual question answering on art. In European Conference on Computer Vision, pages 92–108. 
Miguel Garc’ia-Orteg’on, Gregor N. C. Simm, Austin Tripp, José Miguel Hernández-Lobato, Andreas Ben-der, and Sergio Bacallado. 2021. Dockstring: Easy molecular docking yields better benchmarks for ligand design. Journal of Chemical Information and Modeling, 62:3486 – 3502. 
Claire Gardent, Anastasia Shimorina, Shashi Narayan, and Laura Perez-Beltrachini. 2017. Creating training corpora for nlg micro-planners. In Annual Meeting of the Association for Computational Linguistics. 
Mor Geva, Daniel Khashabi, Elad Segal, Tushar Khot, Dan Roth, and Jonathan Berant. 2021. Did aristotle use a laptop? a question answering benchmark with implicit reasoning strategies. Transactions of the Association for Computational Linguistics, 9:346–361. 
Bogdan Gliwa, Iwona Mochol, Maciej Biesek, and Aleksander Wawer. 2019. Samsum corpus: A humanannotated dialogue dataset for abstractive summarization. In Proceedings of the 2nd Workshop on New Fron-tiers in Summarization, pages 70–79. 
Chulaka Gunasekara, Jonathan K. Kummerfeld, Lazaros Polymenakos, and Walter S. Lasecki. 2019. Dstc7 task 1: Noetic end-to-end response selection. Proceedings of the First Workshop on NLP for Conversational AI. 
Qingyan Guo, Rui Wang, Junliang Guo, Bei Li, Kaitao Song, Xu Tan, Guoqing Liu, Jiang Bian, and Yujiu Yang. 2024. Connecting large language models with evolutionary algorithms yields powerful prompt optimizers. In The Twelfth International Conference on Learning Representations. 
Han He, Qianchu Liu, Lei Xu, Chaitanya Shivade, Yi Zhang, Sundararajan Srinivasan, and Katrin Kirch-hoff. 2025. Crispo: Multi-aspect critique-suggestion-guided automatic prompt optimization for text generation. 
Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Xiaodong Song, and Ja-cob Steinhardt. 2020. Measuring massive multitask language understanding. ArXiv, abs/2009.03300. 
Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, Eric Tang, Dawn Song, and Jacob Steinhardt. Measuring mathematical problem solving with the math dataset. In Thirty-fifth Conference on Neural Information Processing Systems Datasets and Benchmarks Track (Round 2). 
Or Honovich, Uri Shaham, Samuel R. Bowman, and Omer Levy. 2022. Instruction induction: From few examples to natural language task descriptions. ArXiv, abs/2205.10782. 
Or Honovich, Uri Shaham, Samuel R. Bowman, and Omer Levy. 2023. Instruction induction: From few examples to natural language task descriptions. In Pro-ceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 1935–1952, Toronto, Canada. Association for Computational Linguistics. 
Mohammad Javad Hosseini, Hannaneh Hajishirzi, Oren Etzioni, and Nate Kushman. 2014. Learning to solve arithmetic word problems with verb categorization. In Conference on Empirical Methods in Natural Language Processing. 
Bairu Hou, Joe O’Connor, Jacob Andreas, Shiyu Chang, and Yang Zhang. 2023. Promptboosting: black-box text classification with ten forward passes. In Proceedings of the 40th International Conference on Machine Learning, ICML’23. JMLR.org. 
Cho-Jui Hsieh, Si Si, Felix Yu, and Inderjit Dhillon. 2024. Automatic engineering of long prompts. In Find-ings of the Association for Computational Linguistics: ACL 2024, page 10672—10685, Bangkok, Thailand. Association for Computational Linguistics. 
Minqing Hu and Bing Liu. 2004. Mining and summarizing customer reviews. Proceedings of the tenth ACM SIGKDD international conference on Knowledge discovery and data mining. 
Lifu Huang, Ronan Le Bras, Chandra Bhagavatula, and Yejin Choi. 2019. Cosmos qa: Machine reading comprehension with contextual commonsense reasoning. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), pages 2391–2401. 
Rongjie Huang, Jiawei Huang, Dongchao Yang, Yi Ren, Luping Liu, Mingze Li, Zhenhui Ye, Jinglin Liu, Xiang
Yin, and Zhou Zhao. 2023. Make-an-audio: Text-to-audio generation with prompt-enhanced diffusion models. In International Conference on Machine Learning, pages 13916–13932. PMLR. 
Yasaman Jafari, Dheeraj Mekala, Rose Yu, and Taylor Berg-Kirkpatrick. 2024. Morl-prompt: An empirical analysis of multi-objective reinforcement learning for discrete prompt optimization. 
Yatai Ji, Jiacheng Zhang, Jie Wu, Shilong Zhang, Shoufa Chen, Chongjian GE, Peize Sun, Weifeng Chen, Wenqi Shao, Xuefeng Xiao, et al. 2024. Prompt-a-video: Prompt your video diffusion model via preferencealigned llm. arXiv preprint arXiv:2412.15156. 
Yichen Jiang, Shikha Bordia, Zheng Zhong, Charles Dognin, Maneesh Kumar Singh, and Mohit Bansal. 2020. Hover: A dataset for many-hop fact extraction and claim verification. In Findings. 
Can Jin, Hongwu Peng, Shiyu Zhao, Zhenting Wang, Wujiang Xu, Ligong Han, Jiahui Zhao, Kai Zhong, Sanguthevar Rajasekaran, and Dimitris N. Metaxas. 2024. Apeer: Automatic prompt engineering enhances large language model reranking. 
Di Jin, Eileen Pan, Nassim Oufattole, Wei-Hung Weng, Hanyi Fang, and Peter Szolovits. 2020. What disease does this patient have? a large-scale open domain question answering dataset from medical exams. ArXiv, abs/2009.13081. 
Qiao Jin, Bhuwan Dhingra, Zhengping Liu, William Cohen, and Xinghua Lu. 2019. Pubmedqa: A dataset for biomedical research question answering. In Pro-ceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th Interna-tional Joint Conference on Natural Language Process-ing (EMNLP-IJCNLP), pages 2567–2577. 
Hideaki Joko, Shubham Chatterjee, Andrew Ramsay, Arjen P De Vries, Jeff Dalton, and Faegheh Hasibi. 2024. Doing personal laps: Llm-augmented dialogue construction for personalized multi-session conversational search. In Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval, pages 796–806. 
Gurusha Juneja, Nagarajan Natarajan, Hua Li, Jian Jiao, and Amit Sharma. 2024. Task facet learning: A structured approach to prompt optimization. arXiv preprint arXiv:2406.10504. 
David Jurgens, Srijan Kumar, Raine Hoover, Daniel A. McFarland, and Dan Jurafsky. 2018. Measuring the evolution of a scientific field through citation frames. Transactions of the Association for Computational Lin-guistics, 6:391–406. 
Omar Khattab, Keshav Santhanam, Xiang Lisa Li, David Hall, Percy Liang, Christopher Potts, and Matei Zaharia. 2022. Demonstrate-search-predict: Com-posing retrieval and language models for knowledge-intensive nlp. arXiv preprint arXiv:2212.14024. 
Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia, and Christo-pher Potts. 2024. Dspy: Compiling declarative language model calls into self-improving pipelines. 
Johannes Kiesel, Maria Mestre, Rishabh Shukla, Em-manuel Vincent, Payam Adineh, D. Corney, Benno Stein, and Martin Potthast. 2019. Semeval-2019 task 4: Hyperpartisan news detection. In International Work-shop on Semantic Evaluation. 
Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yu-taka Matsuo, and Yusuke Iwasawa. 2023. Large language models are zero-shot reasoners. 
Rik Koncel-Kedziorski, Hannaneh Hajishirzi, Ashish Sabharwal, Oren Etzioni, and Siena Dumas Ang. 2015. Parsing algebraic word problems into equations. Trans-actions of the Association for Computational Linguis-tics, 3:585–597. 
Weize Kong, Spurthi Amba Hombaiah, Mingyang Zhang, Qiaozhu Mei, and Michael Bendersky. 2024. Prewrite: Prompt rewriting with reinforcement learning. 
Shanu Kumar, Akhila Yesantarao Venkata, Shubhanshu Khandelwal, Bishal Santra, Parag Agrawal, and Man-ish Gupta. 2024. Sculpt: Systematic tuning of long prompts. 
Tom Kwiatkowski, Jennimaria Palomaki, Olivia Red-field, Michael Collins, Ankur Parikh, Chris Alberti, Danielle Epstein, Illia Polosukhin, Jacob Devlin, Ken-ton Lee, et al. 2019. Natural questions: a benchmark for question answering research. Transactions of the Association for Computational Linguistics, 7:453–466. 
Guokun Lai, Qizhe Xie, Hanxiao Liu, Yiming Yang, and Eduard Hovy. 2017. Race: Large-scale reading comprehension dataset from examinations. arXiv preprint arXiv:1704.04683. 
Kenton Lee, Ming-Wei Chang, and Kristina Toutanova. 2019. Latent retrieval for weakly supervised open domain question answering. ArXiv, abs/1906.00300. 
Brian Lester, Rami Al-Rfou, and Noah Constant. 2021. The power of scale for parameter-efficient prompt tuning. In Proceedings of the 2021 Conference on Empir-ical Methods in Natural Language Processing, pages 3045–3059, Online and Punta Cana, Dominican Repub-lic. Association for Computational Linguistics. 
Hector J. Levesque, Ernest Davis, and L. Morgenstern. 2011. The winograd schema challenge. In AAAI Spring Symposium: Logical Formalizations of Commonsense Reasoning. 
Bei Li, Rui Wang, Junliang Guo, Kaitao Song, Xu Tan, Hany Hassan, Arul Menezes, Tong Xiao, Jiang Bian, and JingBo Zhu. 2023a. Deliberate then generate: En-hanced prompting framework for text generation.
Cheng Li, Jindong Wang, Yixuan Zhang, Kaijie Zhu, Wenxin Hou, Jianxun Lian, Fang Luo, Qiang Yang, and Xing Xie. 2023b. Large language models understand and can be enhanced by emotional stimuli. arXiv preprint arXiv:2307.11760. 
Lihong Li, Wei Chu, John Langford, and Robert E. Schapire. 2010. A contextual-bandit approach to personalized news article recommendation. In Proceedings of the 19th International Conference on World Wide Web, WWW ’10, page 661–670, New York, NY, USA. Association for Computing Machinery. 
Moxin Li, Wenjie Wang, Fuli Feng, Yixin Cao, Jizhi Zhang, and Tat-Seng Chua. 2023c. Robust prompt optimization for large language models against distribution shifts. In Proceedings of the 2023 Conference on Em-pirical Methods in Natural Language Processing, pages 1539–1554, Singapore. Association for Computational Linguistics. 
Zekun Li, Baolin Peng, Pengcheng He, Michel Galley, Jianfeng Gao, and Xifeng Yan. 2023d. Guiding large language models via directional stimulus prompting. arXiv preprint arXiv:2302.11520. 
Stephanie Lin, Jacob Hilton, and Owain Evans. 2022. Truthfulqa: Measuring how models mimic human falsehoods. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 3214–3252. 
Tsung-Yi Lin, Michael Maire, Serge Belongie, James Hays, Pietro Perona, Deva Ramanan, Piotr Dollár, and C Lawrence Zitnick. 2014. Microsoft coco: Common objects in context. In Computer Vision–ECCV 2014: 13th European Conference, Zurich, Switzerland, Septem-ber 6-12, 2014, Proceedings, Part V 13, pages 740–755. Springer. 
Xiaoqiang Lin, Zhongxiang Dai, Arun Verma, See-Kiong Ng, Patrick Jaillet, and Bryan Kian Hsiang Low. 2024. Prompt optimization with human feedback. 
Wang Ling, Dani Yogatama, Chris Dyer, and Phil Blun-som. 2017. Program induction by rationale generation: Learning to solve and explain algebraic word problems. In Annual Meeting of the Association for Computational Linguistics. 
Nelson F Liu, Kevin Lin, John Hewitt, Ashwin Paran-jape, Michele Bevilacqua, Fabio Petroni, and Percy Liang. 2024a. Lost in the middle: How language models use long contexts. Transactions of the Association for Computational Linguistics, 12:157–173. 
Shengcai Liu, Caishun Chen, Xinghua Qu, Ke Tang, and Yew Soon Ong. 2023. Large language models as evolutionary optimizers. 2024 IEEE Congress on Evo-lutionary Computation (CEC), pages 1–8. 
Shihong Liu, Samuel Yu, Zhiqiu Lin, Deepak Pathak, and Deva Ramanan. 2024b. Language models as blackbox optimizers for vision-language models. In Proceed-ings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 12687–12697. 
Xiaogeng Liu, Zhiyuan Yu, Yizhe Zhang, Ning Zhang, and Chaowei Xiao. 2024c. Automatic and universal prompt injection attacks against large language models. 
Yilun Liu, Minggui He, Feiyu Yao, Yuhe Ji, Shimin Tao, Jingzhou Du, Duan Li, Jian Gao, Li Zhang, Hao Yang, et al. 2024d. What do you want? user-centric prompt generation for text-to-image synthesis via multi-turn guidance. arXiv preprint arXiv:2408.12910. 
Xuan Do Long, Yiran Zhao, Hannah Brown, Yuxi Xie, James Xu Zhao, Nancy F. Chen, Kenji Kawaguchi, Michael Shieh, and Junxian He. 2024. Prompt optimization via adversarial in-context learning. In Pro-ceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 7308–7327, Bangkok, Thailand. Association for Computational Linguistics. 
Ryan Lowe, Nissan Pow, Iulian Serban, and Joelle Pineau. 2015. The ubuntu dialogue corpus: A large dataset for research in unstructured multi-turn dialogue systems. In SIGDIAL Conference. 
Junru Lu, Siyu An, Min Zhang, Yulan He, Di Yin, and Xing Sun. 2025. FIPO: Free-form instruction-oriented prompt optimization with preference dataset and modular fine-tuning schema. In Proceedings of the 31st International Conference on Computational Linguistics, page 11029—11047, Abu Dhabi, UAE. Association for Computational Linguistics. 
Yao Lu, Max Bartolo, Alastair Moore, Sebastian Riedel, and Pontus Stenetorp. 2021. Fantastically ordered prompts and where to find them: Overcoming few-shot prompt order sensitivity. In Annual Meeting of the As-sociation for Computational Linguistics. 
Yao Lu, Jiayi Wang, Raphael Tang, Sebastian Riedel, and Pontus Stenetorp. 2024. Strings from the library of babel: Random sampling as a strong baseline for prompt optimisation. In Proceedings of the 2024 Conference of the North American Chapter of the Association for Com-putational Linguistics: Human Language Technologies (Volume 1: Long Papers), page 2221—2231, Mexico City, Mexico. Association for Computational Linguis-tics. 
Yi Luan, Luheng He, Mari Ostendorf, and Hannaneh Hajishirzi. 2018. Multi-task identification of entities, relations, and coreference for scientific knowledge graph construction. ArXiv, abs/1808.09602. 
Andrew Maas, Raymond E Daly, Peter T Pham, Dan Huang, Andrew Y Ng, and Christopher Potts. 2011. Learning word vectors for sentiment analysis. In Pro-ceedings of the 49th annual meeting of the association for computational linguistics: Human language technologies, pages 142–150. 
Oscar Mañas, Pietro Astolfi, Melissa Hall, Can-dace Ross, Jack Urbanek, Adina Williams, Aish-warya Agrawal, Adriana Romero-Soriano, and Michal Drozdzal. 2024. Improving text-to-image consistency via automatic prompt optimization. arXiv preprint arXiv:2403.17804.
Bryan McCann, Nitish Shirish Keskar, Caiming Xiong, and Richard Socher. 2018. The natural language decathlon: Multitask learning as question answering. arXiv preprint arXiv:1806.08730. 
Rimon Melamed, Lucas H. McCabe, Tanay Wakhare, Yejin Kim, H. Howie Huang, and Enric Boix-Adsera. 2024. Prompts have evil twins. 
M Jehanzeb Mirza, Mengjie Zhao, Zhuoyuan Mao, Sivan Doveh, Wei Lin, Paul Gavrikov, Michael Dorken-wald, Shiqi Yang, Saurav Jha, Hiromi Wakaki, et al. 2024. Glov: Guided large language models as implicit optimizers for vision language models. arXiv preprint arXiv:2410.06154. 
Swaroop Mishra, Daniel Khashabi, Chitta Baral, and Hannaneh Hajishirzi. 2021. Cross-task generalization via natural language crowdsourcing instructions. In Annual Meeting of the Association for Computational Linguistics. 
Ioannis Mollas, Zoe Chrysopoulou, Stamatis Karlos, and Grigorios Tsoumakas. 2020. Ethos: an online hate speech detection dataset. arXiv preprint arXiv:2006.08328. 
Ramesh Nallapati, Bowen Zhou, Cícero Nogueira dos Santos, Çaglar Gülçehre, and Bing Xiang. 2016. Abstractive text summarization using sequence-to-sequence rnns and beyond. In Conference on Com-putational Natural Language Learning. 
Shashi Narayan, Shay B. Cohen, and Mirella Lapata. 2018. Don’t give me the details, just the summary! topic-aware convolutional neural networks for extreme summarization. ArXiv, abs/1808.08745. 
Ehsan Nezhadarya, Yang Liu, and Bingbing Liu. 2019. Boxnet: A deep learning method for 2d bounding box estimation from bird’s-eye view point cloud. In 2019 IEEE Intelligent Vehicles Symposium (IV), pages 1557– 1564. IEEE. 
Yixin Nie, Adina Williams, Emily Dinan, Mohit Bansal, Jason Weston, and Douwe Kiela. 2019. Adversarial nli: A new benchmark for natural language understanding. ArXiv, abs/1910.14599. 
Jekaterina Novikova, Ondrej Dusek, and Verena Rieser. 2017. The e2e dataset: New challenges for end-to-end generation. ArXiv, abs/1706.09254. 
Krista Opsahl-Ong, Michael J Ryan, Josh Purtell, David Broman, Christopher Potts, Matei Zaharia, and Omar Khattab. 2024. Optimizing instructions and demonstrations for multi-stage language model programs. In Proceedings of the 2024 Conference on Empirical Meth-ods in Natural Language Processing, page 9340—9366, Miami, Florida, USA. Association for Computational Linguistics. 
Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Car-roll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, 
Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, and Ryan Lowe. 2022. Train-ing language models to follow instructions with human feedback. 
Ankit Pal, Logesh Kumar Umapathi, and Malaikannan Sankarasubbu. 2022. Medmcqa: A large-scale multisubject multi-choice dataset for medical domain question answering. In Conference on health, inference, and learning, pages 248–260. PMLR. 
Rui Pan, Shuo Xing, Shizhe Diao, Wenhe Sun, Xiang Liu, KaShun Shum, Jipeng Zhang, Renjie Pi, and Tong Zhang. 2024. Plum: Prompt learning using metaheuristics. In Findings of the Association for Computational Linguistics: ACL 2024, page 2177—2197, Bangkok, Thailand. Association for Computational Linguistics. 
Bo Pang and Lillian Lee. 2004. A sentimental education: Sentiment analysis using subjectivity summarization based on minimum cuts. ArXiv, cs.CL/0409058. 
Bo Pang and Lillian Lee. 2005. Seeing stars: Exploit-ing class relationships for sentiment categorization with respect to rating scales. In Annual Meeting of the Asso-ciation for Computational Linguistics. 
Arkil Patel, S. Bhattamishra, and Navin Goyal. 2021. Are nlp models really able to solve simple math word problems? In North American Chapter of the Associa-tion for Computational Linguistics. 
Mohammad Taher Pilehvar and Jose Camacho-Collados. 2019. Wic: the word-in-context dataset for evaluating context-sensitive meaning representations. In Proceed-ings of the 2019 Conference of the North American Chapter of the Association for Computational Linguis-tics: Human Language Technologies, Volume 1 (Long and Short Papers), pages 1267–1273. 
Silviu Pitis, Michael R Zhang, Andrew Wang, and Jimmy Ba. 2023. Boosted prompt ensembles for large language models. arXiv preprint arXiv:2304.05970. 
Edoardo Maria Ponti, Goran Glavaš, Olga Majewska, Qianchu Liu, Ivan Vulić, and Anna Korhonen. 2020. Xcopa: A multilingual dataset for causal commonsense reasoning. arXiv preprint arXiv:2005.00333. 
Archiki Prasad, Peter Hase, Xiang Zhou, and Mohit Bansal. 2023. Grips: Gradient-free, edit-based instruction search for prompting large language models. 
Reid Pryzant, Dan Iter, Jerry Li, Yin Lee, Chenguang Zhu, and Michael Zeng. 2023. Automatic prompt optimization with “gradient descent” and beam search. In Proceedings of the 2023 Conference on Empirical Meth-ods in Natural Language Processing, page 7957—7968, Singapore. Association for Computational Linguistics. 
Ye Qi, Devendra Singh Sachan, Matthieu Felix, Sarguna Padmanabhan, and Graham Neubig. 2018. When and why are pre-trained word embeddings useful for neural machine translation? ArXiv, abs/1804.06323.
Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev, and Percy Liang. 2016. Squad: 100,000+ questions for machine comprehension of text. In Conference on Em-pirical Methods in Natural Language Processing. 
David Rein, Betty Li Hou, Asa Cooper Stickland, Jack-son Petty, Richard Yuanzhe Pang, Julien Dirani, Julian Michael, and Samuel R. Bowman. 2023. Gpqa: A graduate-level google-proof q&a benchmark. ArXiv, abs/2311.12022. 
Melissa Roemmele, Cosmin Adrian Bejan, and An-drew S Gordon. 2011. Choice of plausible alternatives: An evaluation of commonsense causal reasoning. In 2011 AAAI spring symposium series. 
Subhro Roy and Dan Roth. 2016. Solving general arithmetic word problems. ArXiv, abs/1608.01413. 
Maarten Sap, Hannah Rashkin, Derek Chen, Ronan Le Bras, and Yejin Choi. 2019. Social iqa: Common-sense reasoning about social interactions. In Proceed-ings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th Interna-tional Joint Conference on Natural Language Process-ing (EMNLP-IJCNLP), pages 4463–4473. 
Tobias Schnabel and Jennifer Neville. 2024. Symbolic prompt program search: A structure-aware approach to efficient compile-time prompt optimization. 
Christoph Schuhmann, Romain Beaumont, Richard Vencu, Cade Gordon, Ross Wightman, Mehdi Cherti, Theo Coombes, Aarush Katta, Clayton Mullis, Mitchell Wortsman, et al. 2022. Laion-5b: An open large-scale dataset for training next generation image-text models. Advances in Neural Information Processing Systems, 35:25278–25294. 
Melanie Sclar, Yejin Choi, Yulia Tsvetkov, and Alane Suhr. Quantifying language models’ sensitivity to spurious features in prompt design or: How i learned to start worrying about prompt formatting. In The Twelfth International Conference on Learning Representations. 
Jingyuan Selena She, Christopher Potts, Sam Bowman, and Atticus Geiger. 2023. Scone: Benchmarking negation reasoning in language models with fine-tuning and in-context learning. In Annual Meeting of the Associa-tion for Computational Linguistics. 
Zeru Shi, Zhenting Wang, Yongye Su, Weidi Luo, Fan Yang, and Yongfeng Zhang. 2024. Robustness-aware automatic prompt optimization. 
Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace, and Sameer Singh. 2020. AutoPrompt: Eliciting Knowledge from Language Models with Au-tomatically Generated Prompts. In Proceedings of the 2020 Conference on Empirical Methods in Natural Lan-guage Processing (EMNLP), pages 4222–4235, Online. Association for Computational Linguistics. 
Noah Shinn, Federico Cassano, Edward Berman, Ash-win Gopinath, Karthik Narasimhan, and Shunyu Yao. 2023. Reflexion: Language agents with verbal reinforcement learning. 
Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao. 2024. Reflexion: Language agents with verbal reinforcement learning. Advances in Neural Information Processing Systems, 36. 
Mohit Shridhar, Xingdi Yuan, Marc-Alexandre Côté, Yonatan Bisk, Adam Trischler, and Matthew Hausknecht. 2020. Alfworld: Aligning text and embodied environments for interactive learning. arXiv preprint arXiv:2010.03768. 
Ankita Sinha, Wendi Cui, Kamalika Das, and Jiaxin Zhang. 2024. Survival of the safest: Towards secure prompt optimization through interleaved multi-objective evolution. In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing: Industry Track, pages 1016–1027, Miami, Florida, US. Association for Computational Linguistics. 
Richard Socher, Alex Perelygin, Jean Wu, Jason Chuang, Christopher D Manning, Andrew Y Ng, and Christopher Potts. 2013. Recursive deep models for semantic compositionality over a sentiment treebank. In Proceedings of the 2013 conference on empirical methods in natural language processing, pages 1631–1642. 
Gizem Sogancioglu, Hakime Öztürk, and Arzucan Özgür. 2017. Biosses: a semantic sentence similarity estimation system for the biomedical domain. Bioinfor-matics, 33:i49 – i58. 
Alessandro Sordoni, Eric Yuan, Marc-Alexandre Côté, Matheus Pereira, Adam Trischler, Ziang Xiao, Arian Hosseini, Friederike Niedtner, and Nicolas Le Roux. 2023. Joint prompt optimization of stacked llms using variational inference. In Advances in Neural Infor-mation Processing Systems, volume 36, pages 58128– 58151. Curran Associates, Inc. 
Aarohi Srivastava, Abhinav Rastogi, Abhishek Rao, Abu Awal Md Shoeb, Abubakar Abid, Adam Fisch, Adam R Brown, Adam Santoro, Aditya Gupta, Adrià Garriga-Alonso, et al. 2022. Beyond the imitation game: Quantifying and extrapolating the capabilities of language models. arXiv preprint arXiv:2206.04615. 
Hao Sun, Alihan Hüyük, and Mihaela van der Schaar. 2024a. Query-dependent prompt evaluation and optimization with offline inverse RL. In The Twelfth Inter-national Conference on Learning Representations. 
Hong Sun, Xue Li, Yinchuan Xu, Youkow Homma, Qi Cao, Min Wu, Jian Jiao, and Denis Charles. 2023. Autohint: Automatic prompt optimization with hint generation. arXiv preprint arXiv:2307.07415. 
Jingwei Sun, Ziyue Xu, Hongxu Yin, Dong Yang, Daguang Xu, Yudong Liu, Zhixu Du, Yiran Chen, and Holger R. Roth. 2024b. Fedbpt: efficient federated black-box prompt tuning for large language models. In Proceedings of the 41st International Conference on Machine Learning, ICML’24. JMLR.org.
Mirac Suzgun, Nathan Scales, Nathanael Schärli, Sebas-tian Gehrmann, Yi Tay, Hyung Won Chung, Aakanksha Chowdhery, Quoc Le, Ed Chi, Denny Zhou, et al. 2023. Challenging big-bench tasks and whether chain-of-thought can solve them. In Findings of the Associa-tion for Computational Linguistics: ACL 2023, pages 13003–13051. 
Alon Talmor, Jonathan Herzig, Nicholas Lourie, and Jonathan Berant. 2019. Commonsenseqa: A question answering challenge targeting commonsense knowledge. ArXiv, abs/1811.00937. 
Prashant Trivedi, Souradip Chakraborty, Avinash Reddy, Vaneet Aggarwal, Amrit Singh Bedi, and George K. Atia. 2025. Align-pro: A principled approach to prompt optimization for llm alignment. 
Nirali Vaghani and Mansi Thummar. 2023. Flipkart product reviews with sentiment dataset. 
Ellen M Voorhees and Dawn M Tice. 2000. Building a question answering test collection. In Proceedings of the 23rd annual international ACM SIGIR conference on Research and development in information retrieval, pages 200–207. 
Xingchen Wan, Ruoxi Sun, Hootan Nakhost, and Ser-can O. Arik. 2024. Teach better or show smarter? on instructions and exemplars in automatic prompt optimization. 
Ruochen Wang, Sohyun An, Minhao Cheng, Tianyi Zhou, Sung Ju Hwang, and Cho-Jui Hsieh. 2025. One prompt is not enough: automated construction of a mixture-of-expert prompts. In Proceedings of the 41st International Conference on Machine Learning, ICML’24. JMLR.org. 
Ruoyao Wang, Peter Jansen, Marc-Alexandre Côté, and Prithviraj Ammanabrolu. 2022a. Scienceworld: Is your agent smarter than a 5th grader? In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pages 11279–11298. 
William Yang Wang. 2017. “liar, liar pants on fire”: A new benchmark dataset for fake news detection. In Annual Meeting of the Association for Computational Linguistics. 
Xinyuan Wang, Chenxi Li, Zhen Wang, Fan Bai, Hao-tian Luo, Jiayou Zhang, Nebojsa Jojic, Eric P. Xing, and Zhiting Hu. 2024a. Promptagent: Strategic planning with language models enables expert-level prompt optimization. In The Twelfth International Conference on Learning Representations, ICLR 2024, Vienna, Austria, May 7-11, 2024. OpenReview.net. 
Yizhong Wang, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi. 2022b. Self-instruct: Aligning language models with self-generated instructions. In Annual Meeting of the Association for Computational Linguis-tics. 
Yizhong Wang, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi. 2023. Self-instruct: Aligning language models with self-generated instructions. In Proceedings of the 61st Annual Meeting of the Association for Com-putational Linguistics (Volume 1: Long Papers), pages 13484–13508, Toronto, Canada. Association for Com-putational Linguistics. 
Yushi Wang, Jonathan Berant, and Percy Liang. 2015. Building a semantic parser overnight. In Annual Meet-ing of the Association for Computational Linguistics. 
Zhichao Wang, Bin Bi, Shiva Kumar Pentyala, Kiran Ramnath, Sougata Chaudhuri, Shubham Mehrotra, Zixu, Zhu, Xiang-Bo Mao, Sitaram Asur, Na, and Cheng. 2024b. A comprehensive survey of llm alignment techniques: Rlhf, rlaif, ppo, dpo and more. 
Alex Warstadt, Amanpreet Singh, and Samuel R. Bow-man. 2018. Neural network acceptability judgments. Transactions of the Association for Computational Lin-guistics, 7:625–641. 
Janyce Wiebe, Theresa Wilson, and Claire Cardie. 2005. Annotating expressions of opinions and emotions in language. Language Resources and Evaluation, 39:165– 210. 
Adina Williams, Nikita Nangia, and Samuel R. Bow-man. 2017. A broad-coverage challenge corpus for sentence understanding through inference. In North American Chapter of the Association for Computational Linguistics. 
Yurong Wu, Yan Gao, Bin Benjamin Zhu, Zineng Zhou, Xiaodi Sun, Sheng Yang, Jian-Guang Lou, Zhiming Ding, and Linjun Yang. 2024. StraGo: Harnessing strategic guidance for prompt optimization. In Find-ings of the Association for Computational Linguistics: EMNLP 2024, pages 10043–10061, Miami, Florida, USA. Association for Computational Linguistics. 
Jasper Xian, Saron Samuel, Faraz Khoubsirat, Ronak Pradeep, Md Arafat Sultan, Radu Florian, Salim Roukos, Avirup Sil, Christopher Potts, and Omar Khat-tab. 2024. Prompts as auto-optimized training hyperparameters: Training best-in-class ir models from scratch with 10 gold labels. arXiv preprint arXiv:2406.11706. 
Hanwei Xu, Yujun Chen, Yulun Du, Nan Shao, Wang Yanggang, Haiyu Li, and Zhilin Yang. 2022. Gps: Ge-netic prompt search for efficient few-shot learning. In Proceedings of the 2022 Conference on Empirical Meth-ods in Natural Language Processing, pages 8162–8171. 
Wei Xu, Alan Ritter, William B. Dolan, Ralph Grish-man, and Colin Cherry. 2012. Paraphrasing for style. In International Conference on Computational Linguistics. 
Weijia Xu, Andrzej Banburski-Fahey, and Nebojsa Jo-jic. 2024. Reprompting: automated chain-of-thought prompt inference through gibbs sampling. In Proceed-ings of the 41st International Conference on Machine Learning, ICML’24. JMLR.org.
Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V. Le, Denny Zhou, and Xinyun Chen. 2024a. Large language models as optimizers. 
Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V Le, Denny Zhou, and Xinyun Chen. 2024b. Large language models as optimizers. In The Twelfth International Conference on Learning Representations. 
Muchen Yang, Moxin Li, Yongle Li, Zijun Chen, Chong-ming Gao, Junqi Zhang, Yangyang Li, and Fuli Feng. 2024c. Dual-phase accelerated prompt optimization. In Findings of the Association for Computational Lin-guistics: EMNLP 2024, pages 12163–12173, Miami, Florida, USA. Association for Computational Linguis-tics. 
Sheng Yang, Yurong Wu, Yan Gao, Zineng Zhou, Bin Benjamin Zhu, Xiaodi Sun, Jian-Guang Lou, Zhim-ing Ding, Anbang Hu, Yuan Fang, et al. 2024d. Ampo: Automatic multi-branched prompt optimization. arXiv preprint arXiv:2410.08696. 
Zhilin Yang, Peng Qi, Saizheng Zhang, Yoshua Bengio, William W. Cohen, Ruslan Salakhutdinov, and Christo-pher D. Manning. 2018. Hotpotqa: A dataset for diverse, explainable multi-hop question answering. In Conference on Empirical Methods in Natural Language Processing. 
Qinyuan Ye, Maxamed Axmed, Reid Pryzant, and Fereshte Khani. 2024. Prompt engineering a prompt engineer. 
Mert Yuksekgonul, Federico Bianchi, Joseph Boen, Sheng Liu, Zhi Huang, Carlos Guestrin, and James Zou. 2024. Textgrad: Automatic "differentiation" via text. 
John M. Zelle and Raymond J. Mooney. 1996. Learning to parse database queries using inductive logic programming. In AAAI/IAAI, Vol. 2. 
Rowan Zellers, Ari Holtzman, Yonatan Bisk, Ali Farhadi, and Yejin Choi. 2019. Hellaswag: Can a machine really finish your sentence? In Proceedings of the 57th Annual Meeting of the Association for Computa-tional Linguistics, pages 4791–4800. 
Pengwei Zhan, Zhen Xu, Qian Tan, Jie Song, and Ru Xie. 2024. Unveiling the lexical sensitivity of llms: Combinatorial optimization for prompt enhancement. In Conference on Empirical Methods in Natural Lan-guage Processing. 
Chenrui Zhang, Lin Liu, Chuyuan Wang, Xiao Sun, Hongyu Wang, Jinpeng Wang, and Mingchen Cai. 2024a. Prefer: prompt ensemble learning via feedback-reflect-refine. In Proceedings of the Thirty-Eighth AAAI Conference on Artificial Intelligence and Thirty-Sixth Conference on Innovative Applications of Artificial Intelligence and Fourteenth Symposium on Educational Advances in Artificial Intelligence, AAAI’24/IAAI’24/EAAI’24. AAAI Press. 
Lechen Zhang, Tolga Ergen, Lajanugen Logeswaran, Moontae Lee, and David Jurgens. 2024b. Sprig: Im-proving large language model performance by system prompt optimization. ArXiv, abs/2410.14826. 
Tianjun Zhang, Xuezhi Wang, Denny Zhou, Dale Schu-urmans, and Joseph E. Gonzalez. 2022. Tempera: Test-time prompting via reinforcement learning. 
Tianyi Zhang*, Varsha Kishore*, Felix Wu*, Kilian Q. Weinberger, and Yoav Artzi. 2020. Bertscore: Evaluat-ing text generation with bert. In International Confer-ence on Learning Representations. 
Xiang Zhang, Junbo Jake Zhao, and Yann LeCun. 2015. Character-level convolutional networks for text classification. In Neural Information Processing Systems. 
Lianmin Zheng, Wei-Lin Chiang, Ying Sheng, Siyuan Zhuang, Zhanghao Wu, Yonghao Zhuang, Zi Lin, Zhuo-han Li, Dacheng Li, Eric P. Xing, Hao Zhang, Joseph E. Gonzalez, and Ion Stoica. 2023. Judging llm-as-a-judge with mt-bench and chatbot arena. In Proceedings of the 37th International Conference on Neural Information Processing Systems, NIPS ’23, Red Hook, NY, USA. Curran Associates Inc. 
Han Zhou, Xingchen Wan, Ivan Vulić, and Anna Ko-rhonen. 2023. Survival of the most influential prompts: Efficient black-box prompt search via clustering and pruning. In Findings of the Association for Computa-tional Linguistics: EMNLP 2023, pages 13064–13077, Singapore. Association for Computational Linguistics. 
Yongchao Zhou, Andrei Ioan Muresanu, Ziwen Han, Keiran Paster, Silviu Pitis, Harris Chan, and Jimmy Ba. 2022. Large language models are human-level prompt engineers.
12 Appendix 
12.1 Notation 
We now define the notation of key terms and expressions used throughout the paper. 
1. T = Task type, I= Task instruction, E = (xi, yi)ei=1 Few shot demonstrations in the prompt, τ= Template delimiters, z = CoT recipe for a task-instance, zi ∈ Ii 
2. Mtask target model, MAPO APO system 
3. ρ = concat([s1, s2, . . . , sm]) = concat(I, τ, E) Prompt composed of m sentences, which comprise of Instruction, template delimiters and few-shot demonstrations. 
4. D = {(xi, yi)}mi=1 collection of m input-output pairs. Dval is the validation set used to validate prompt performance, Dtrain is the training set used to finetune the language model(Reprompting). 
5. {f1, f2, . . .} ∈ F metric function upon which to evaluate task-prompt performance 
6. r : S ×A→ R= reward model score, where S is the state-space and A is the action-space 
7. |V | = length of vocabulary 
8. ϕ : S ∈ V∗ → Rd embedding function which takes in a sentence generated as a finite sequence of tokens belonging to a vocabulary V, and generating a floating point array representation of dimension d 
9. ρ∗ = argmaxρ∈V∗EDval [fi(ρ)] The best performing prompt based on the metric score on validation 
set 
10. k = number of candidates for top-K search, B = Beam width for beam search, N = number of iterations for search 
11. C = number of experts in a Mixture of Experts approach (MOP), µC= cluster centroid of cluster C (MOP). 
12. LLMtarget= target model which will be used for inference, LLMrewriter= rewriter model which will be used for rewriter, LLMevaluator= evaluator model which provides the LLM feedback to prompts / responses or both 
13. λ with subscripts to denote different latency types: λt = Total training cost/latency, including all offline costs for data collection, preprocessing, and model fine-tuning, λi = per-example inference latency, λm = MLM inference latency per-example 
12.2 Excluded works 
FedBPT (Sun et al., 2024b) used federated learning to update soft prompts and not discrete tokens. Deliberate-then-generate (Li et al., 2023a) randomly sampled arbitrary noisy inference and prompted the task LLM to deliberate on the wrong inference, while Reflexion (Shinn et al., 2023) agents maintain an episodic buffer of past deliberations. Neither method optimizes the input prompt. AutoPrompt (Shin et al., 2020) required gradient access to the task LLM and therefore doesn’t remain blackbox.
12.3 UCB based selection algorithm 
Algorithm 2 Select(·) with UCB Bandits 
Require: n prompts ρ1, ..., ρn, dataset Dval, T time steps, metric function m 1: Initialize: Nt(ρi)← 0 for all i = 1, . . . , n 2: Initialize: Qt(ρi)← 0 for all i = 1, . . . , n 3: for t = 1, . . . , T do 4: Sample uniformly Dsample ⊂ Dval 
5: ρi ← argmaxρ 
{ Qt(ρ) Nt(ρi) 
+ c √ 
log t Nt(ρ) 
} 6: Observe reward ri,t = m(ρi,Dsample) 7: Nt(ρi)← Nt(ρi) + |Dsample| 8: Qt(ρi)← Qt(ρi) + ri,t 
9: return SelectTopb(QT /NT ) 
13 Comparison of different approaches + Tasks 
13.1 Comparison 
Below we offer a comprehensive comparison of all the surveyed methods against our framework, covering the following aspects 
1. Seed instructions 
2. Inference evaluation 
3. Candidate generation 
4. Search+filter strategy 
5. Iteration depth 
6. Optimization time complexity 
7. Prompt generation model 
8. Target models
 
 
 
 
 
 
tio ns 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 co 
m pl 
ex ity 
 
 
 
 tio 
n m 
od el 
 
 
 
 
1 G 
PS (X 
u et 
al ., 
20 22 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy G 
en et 
ic A 
lg or 
ith m 
: B 
ac k 
tr an 
sl at 
io n, 
C lo 
ze , 
Se nt 
en ce 
co nt 
in ua 
tio n 
M et 
ah eu 
ri st 
ic en 
se m 
bl e 
Fi xe 
d O (T ∗ N ∗ k ∗ λ i) 
T 0 
2 G 
R IP 
S (P 
ra sa 
d et 
al ., 
20 23 
) M 
an ua 
lly cr 
ea te 
d E 
nt ro 
py -b 
as ed 
sc or 
e+ Ta 
sk ac 
cu ra 
cy Ph 
ra se 
le ve 
l ad 
d/ re 
m ov 
e/ sw 
ap /p 
ar ap 
hr as 
e To 
pK se 
le ct 
io n 
Fi xe 
d O (k ∗ N ∗ |D 
v a l| ∗ 
B ) 
PE G 
A SU 
S pa 
ra -
ph ra 
se m 
od el 
In st 
ru ct 
G PT 
3 In 
st ru 
ct io 
n in 
du ct 
io n 
(H on 
ov ic 
h et 
al ., 
20 23 
) In 
st ru 
ct io 
n in 
du ct 
io n 
A cc 
ur ac 
y + 
B E 
R T 
Sc or 
e L 
L M 
-r ew 
ri te 
r Fi 
xe d 
O (|ρ |∗ 
λ i) 
In st 
ru ct 
G PT 
,G PT 
-3 In 
st ru 
ct G 
PT ,G 
PT -3 
4 R 
L Pr 
om pt 
(D en 
g et 
al ., 
20 22 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
R ew 
ar d 
m od 
el sc 
or e 
R L 
-b as 
ed tr 
ai ne 
d N 
N To 
pK se 
le ct 
io n 
Fi xe 
d O (N ∗ρ ∗| V |∗ 
λ i) 
R oB 
E R 
Ta -l 
ar ge 
R ew 
ar d 
m od 
el -
D is 
til B 
E R 
T 
1/ B 
E R 
T, 2/ 
G PT 
-2 
5 T 
E M 
PE R 
A (Z 
ha ng 
et al 
., 20 
22 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
R L 
-t ra 
in ed 
N N 
Fi xe 
d O (N ∗ k ∗ |V |∗ 
C ) 
R oB 
E R 
Ta -l 
ar ge 
R oB 
E R 
Ta -l 
ar ge 
6 A 
E L 
P (H 
si eh 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
G en 
et ic 
al go 
ri th 
m : 
L L 
M -m 
ut at 
or B 
ea m 
se ar 
ch Fi 
xe d 
O (N ∗ρ ∗k ∗| D |∗ 
λ i) 
Pa L 
M 2-
L Pa 
L M 
te xt 
-b is 
on 
7 A 
PE (Z 
ho u 
et al 
., 20 
22 ) 
In st 
ru ct 
io n 
in du 
ct io 
n Ta 
sk ac 
cu ra 
cy N 
o ne 
w ca 
nd id 
at es 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ k ∗ |D 
v a l| ∗ 
λ i) 
In st 
ru ct 
G PT 
, G 
PT -
3, T 
5, In 
se rt 
G PT 
In st 
ru ct 
G PT 
,G PT 
-3 
8 A 
ut oH 
in t 
(S un 
et al 
., 20 
23 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
re w 
ri te 
r To 
pK se 
le ct 
io n 
Fi xe 
d O (T ∗ |D |∗ 
λ i) 
G PT 
-4 
9 B 
D PL 
(D ia 
o et 
al ., 
20 22 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy R 
L -t 
ra in 
ed N 
N To 
pK se 
le ct 
io n 
V ar 
ia bl 
e O (N ∗ k ∗ λ i) 
R oB 
E R 
Ta ,G 
PT -3 
R oB 
E R 
Ta ,G 
PT -3 
10 B 
oo st 
ed Pr 
om pt 
in g 
(P iti 
s et 
al ., 
20 23 
) In 
st ru 
ct io 
n-in 
du ct 
io n 
Ta sk 
ac cu 
ra cy 
E ns 
em bl 
e ba 
se d 
m et 
ho d 
To pK 
se le 
ct io 
n V 
ar ia 
bl e 
O (N ∗ k ∗ λ i) 
te xt 
-c ur 
ie -0 
01 ,t 
ex t-
cu rie 
-0 03 
,G PT 
-3 .5 
, co 
de -d 
av in 
ci -0 
02 
te xt 
-c ur 
ie -0 
01 ,t 
ex t-
cu ri 
e-00 
3, G 
PT -3 
.5 ,c 
od e-
da vi 
nc i-
00 2 
11 B 
PO (C 
he ng 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
L L 
M aa 
J (p 
ai rw 
is e) 
Fi ne 
tu ne 
d L 
L M 
s N 
A N 
A O (λ 
t + |D 
v a l| ∗λ 
i) L 
la m 
a2 -7 
b-ch 
at V 
ic un 
a-7b 
-v 1. 
3, vi 
cu na 
-1 3b 
-v 1. 
3, lla 
m a-
1-7b 
, lla 
m a-
1-13 
b 12 
C L 
A PS 
(Z ho 
u et 
al ., 
20 23 
) M 
an ua 
lly cr 
ea te 
d E 
nt ro 
py -b 
as ed 
sc or 
e+ Ta 
sk ac 
cu ra 
cy G 
en et 
ic A 
lg or 
ith m 
: M 
ut at 
io n 
+ C 
ro ss 
ov er 
To pK 
se le 
ct io 
n V 
ar ia 
bl e 
O (N ∗k ∗| V |∗ 
λ i) 
Fl an 
-T 5 
Fl an 
-T 5 
la rg 
e an 
d ba 
se 
13 D 
ir ec 
tio na 
l-st 
im ul 
us (L 
i et 
al ., 
20 23 
d) M 
an ua 
lly cr 
ea te 
d B 
L E 
U ,B 
E R 
T Sc 
or e 
R L 
-t ra 
in ed 
N N 
V ar 
ia bl 
e O (λ 
t) T 
5, G 
PT -2 
C ha 
tG PT 
,C od 
ex ,I 
ns tr 
uc tG 
PT 
14 D 
L N 
(S or 
do ni 
et al 
., 20 
23 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ N 
L L 
L L 
M m 
ut at 
or To 
pK se 
le ct 
io n 
Fi xe 
d O (N ∗k ∗| D 
tr a in |) 
G PT 
-3 (t 
ex t-
da vi 
nc i-
00 3) 
, G 
PT -4 
G PT 
-3 (te 
xt -d 
av in 
ci -0 
03 ), 
G PT 
-4 
15 D 
SP (K 
ha tta 
b et 
al ., 
20 22 
) In 
st ru 
ct io 
n in 
du ct 
io n 
Ta sk 
ac cu 
ra cy 
Pr og 
ra m 
Sy nt 
he si 
s To 
pK se 
le ct 
io n 
Fi xe 
d O (N ∗ k ∗ λ i) 
G PT 
-3 .5 
L M 
:G PT 
-3 .5 
, R 
et ri 
ev al 
:C ol 
B E 
R T 
v2 16 
D SP 
y (K 
ha tta 
b et 
al ., 
20 24 
) M 
an ua 
lly cr 
e-at 
ed + 
In st 
ru ct 
io n 
In du 
ct io 
n 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k Pr 
og ra 
m Sy 
nt he 
si s 
To pK 
se le 
ct io 
n V 
ar ia 
bl e 
O (N ∗ k ∗ B ∗ λ i) 
17 G 
A T 
E (J 
ok o 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
H um 
an fe 
ed ba 
ck L 
L M 
re w 
ri te 
r O 
pe n-
en de 
d O (N 
∗ (λ 
m + 
|D v a l| ∗ λ i) ) 
G PT 
-4 G 
PT -4 
18 G 
PO (L 
ie ta 
l., 20 
23 c) 
In st 
ru ct 
io n 
in du 
ct io 
n Ta 
sk -A 
cc ur 
ac y 
an d 
F1 M 
et ap 
ro m 
pt -d 
es ig 
n To 
pK se 
le ct 
io n 
O (N ∗C ∗| V |∗ B ∗ 
E ) 
gp t-
3. 5-
tu rb 
o-03 
01 gp 
t-3. 
5-tu 
rb o-
03 01 
19 PA 
C E 
(D on 
g et 
al ., 
20 24 
b) M 
an ua 
lly cr 
ea te 
d N 
LL + 
Ta sk 
ac cu 
ra cy 
-B 
LE U 
an d 
B ER 
TS co 
re L 
L M 
-r ew 
ri te 
r To 
pK se 
le ct 
io n 
< 3 
O (N ∗ |ρ |∗ |D 
v a l|) 
gp t-
3. 5-
tu rb 
o (0 
30 1) 
te xt 
-d av 
in ci 
-0 02 
, te 
xt -d 
av in 
ci -0 
03 , 
(g pt 
-3 .5 
-t ur 
bo ), 
G PT 
-4 20 
PR E 
FE R 
(Z ha 
ng et 
al ., 
20 24 
a) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy L 
L M 
-r ew 
ri te 
r+ E 
ns em 
bl e 
m et 
ho d 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ |ρ |∗ |D 
v a l|) 
C ha 
tG PT 
C ha 
tG PT 
21 Pr 
om pt 
ag en 
t( W 
an g 
et al 
., 20 
24 a) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
re w 
ri te 
r U 
C T-
ba se 
d ba 
nd it-
se ar 
ch Fi 
xe d 
O (N ∗ k ∗ λ i) 
G PT 
-4 G 
PT -3 
.5 ,G 
PT -4 
,P aL 
M -2 
Ta bl 
e 2: 
C om 
pa ri 
so n 
of al 
lA PO 
te ch 
ni qu 
es ba 
se d 
on ou 
rf ra 
m ew 
or k
https://lh3.googleusercontent.com/notebooklm/AKYWMX9v72APQj13ptPMBBw4YYIrLb0uMx9f5zM5W35z6rfuzVeicm1jSIqU_q5sxrpitXMS3olLtVD1KwBrqHvtYamLwO8MfuiN8kwsMqSeu--RrVEKOL_S4c8_QPjOA1EQhCWHype33A=w49-h87-v0
a131199c-5daf-4be9-87f8-0bb81c905346
https://lh3.googleusercontent.com/notebooklm/AKYWMX-H1rC6yTiVEDpDTbP-vj14stVQ4OflMWI7sDXBUN79W-LVOs2HC_BvAND4MMZkSn0NJ8CPL2Kp_4-YYXEui50yKeN212IoaAT55mbrScf1l1yCfIOLISdVGWFrX9jHAUcOT1SnEg=w49-h113-v0
d4c8c412-9968-47c1-9883-43e465bded10
https://lh3.googleusercontent.com/notebooklm/AKYWMX-u_4LH_m4ORmtejzHXqJPFygeOvP0qD9cxOhjFfPZdLoSF7mB2zjn_zcoroSPEFERhClhJ43fjglerOvUl56dDz4rIcBs71ORvUfU1dI0V68njajKENG8ogsPauL5CAbVQzeVU9w=w49-h74-v0
694f6cda-8a3e-4ff4-93de-1572423536c8
https://lh3.googleusercontent.com/notebooklm/AKYWMX8Oy_78NckCZ41Ubs0oh5gImap6_Q0qpN52ScltD7yXDxZ8audiMFn5yFvniuwZusE1EdbWhE5fBId5dSloaxjBSPJ4l5QmqJ9n3rPoV7__LO6lxfM5Tk2SAhSMCX4FUiwib59a=w49-h100-v0
9a2fe91b-8c38-4b6a-99d8-d516ad3bff70
https://lh3.googleusercontent.com/notebooklm/AKYWMX-sesMccaqBQyriyDIfJtLr3LGP40am1S6cGe3LB8d-P8nFNdFXnpSnksYWTFfgxEHoUAaFe5AhS_RRHoWQR5xOAUFsq8teir28UbqcAoTErj8YjWRaGULQIk6OqDxSUYLc5PhV=w49-h100-v0
d9c745ae-b9dc-4497-a524-8b956271ebba
https://lh3.googleusercontent.com/notebooklm/AKYWMX8bAVa6CR1Mbtu3K8gZFZQe3LB4tt4-Er1ULhURZPof6SjLh-SkftqpZv66LZowSpesSKfLyPP85QkMQLEf4kZk3dSjofOidECqeOAwJmU5y37y2ohU_trpNN0IGYZXhyN4verGJg=w49-h113-v0
cc206ad9-85fa-4c14-b184-4d03f27ee35a
https://lh3.googleusercontent.com/notebooklm/AKYWMX9UmJqt8FC4VOEv4yP9OUSpUr15xz4I2bt2jA4FzoxC9lARr4yhyYKPm5UctyEyuTzmhjMyT0bfyrm45dSAHpcG6gY7EDUpNPJK7xOMbYFjG_Inup1lUg8ZLqFsT9gj2mmvbUZ1Tw=w49-h87-v0
2db93a0e-89b4-4c72-9e47-1eaeba555335
https://lh3.googleusercontent.com/notebooklm/AKYWMX_PszAPyK3P2MnCocdKF9KLFAar65kY3byPqQ4pnZQIic4TijK34T5eZ0oXMCjWKRhxmtZOMB9alrY53eQmsn0Tn-_ezOCfIxiWbN9rY1ObHoGK4kCXRm44wqid8QtaK0Vz4hs8Uw=w49-h87-v0
481b361d-be12-41ac-8d3c-a94f24dbf73a
https://lh3.googleusercontent.com/notebooklm/AKYWMX-KWabkm8UqsaOKJP2fLyf2tVjw5d1RxwzPrbXJXu_1ASXL7YDjTvMAYdNuz6-LFY9ETzVKLS2BXxEIeGWYh1oH02rnCvktHsfLXc4F5wAYcjr6lDyCdLSZ-xArfMs8eQ223LEe=w49-h87-v0
5abe14c6-3f95-465c-9591-6fedf00aca57
https://lh3.googleusercontent.com/notebooklm/AKYWMX9kAuA_A_psa-WtLeUxLndWhtJTQbbhdx0vxr-MubI_UnHSdvjj6duomKnLIYTT2ZXiucNVLV6Sq4gTsrGOhiRRMC8RjvKalXZnwWr47MF1zcDrfkFx0mZcPQdGhbUCQjQg3oUZjw=w49-h138-v0
9b0e29df-026b-4e32-8298-fa9d1fc9f9e8
https://lh3.googleusercontent.com/notebooklm/AKYWMX8JISiMSR4I0oXLHgl9LWUmiZiCQphTHgiAU7dOGCt_Vxk6Mf5kN7pA3UX01H8hSYXAfc4GYU3dupBg26Xgb6AsMfaJvtVVE0KTBMIg_9OKhrMAi1VeaADg6hIqPHUpHD7EDfHM=w37-h87-v0
8eefd21f-43f0-499c-a8e6-5437609210e6
https://lh3.googleusercontent.com/notebooklm/AKYWMX_6etpZlwDgQOI-Ucg2djhJoDiJ-e_8XI4LxSE_MC1ce2HdoExiqQfexdyV2rOFlF4q2jCoWmj3pOHVkVCWElhwv2aHRKW8mDsuJ-DnoCg9Q4Sh_LDanyQ8gzQ7sOXESgoXsSiw8Q=w37-h113-v0
645f0545-6931-4875-859a-90afef16a0d5
https://lh3.googleusercontent.com/notebooklm/AKYWMX99GuhUluu4Ais0xd-ySxOnT5VxpacboBuTPgaWgd-AZ7P9BpMBkptl-7p2_NlJeky5vOCArzmDGtnQOBUZ5_4yr7kUUAoU8MSwIrWPPZ82yilUe3Mtd5alqyRSW-0gg0LHgpznUQ=w37-h74-v0
9a32d193-472e-4a41-8dee-750158b55a3a
https://lh3.googleusercontent.com/notebooklm/AKYWMX92WQ6UDxY9Mt_CwCGtRPnmBWHsa3tPrn4zFgE6WNJPAokqmHMIurYnKoGmDZ-qRHkTIXB6k3rynDeCof2cn8LvX_WNUvkgXpBzQKbWyEU60x2mc3ZD3qRK9oXrlHg1uDmH7eQz=w37-h100-v0
d32b5d8e-31f3-4c6b-8627-70301dfe3da0
https://lh3.googleusercontent.com/notebooklm/AKYWMX-_iNgPYjGLAb6K-XjmcoEgCpe6L7Tj9D2oSwxvfLiWqBqEYtAe9rEnSCk0h9Ae4TW_lcXcuwy8K07UIjdQOIPEjyter2RoNpp7MPyKpUGwtkmBoFCepih0-Mt9AwqJUmPAgLy8ew=w37-h100-v0
e43dc1fb-ef36-45e9-9a98-6f4826603ad5
https://lh3.googleusercontent.com/notebooklm/AKYWMX-c8NUHhyVwkRdZnXYh2MrRRsnjsFiXb3UxsNw8ezolS4VgXBCmgm5Ssh-wfX9_VGBT4cWYl8YgOOg-A70CwQZ_pu9bguhZTlDZYgQeppGLHJn5DokGTYRteSf4bBY8DArDlayItg=w37-h113-v0
71b59a21-3bbd-4721-98d8-5b21140cc480
https://lh3.googleusercontent.com/notebooklm/AKYWMX_LRa3us30QoXhd3Mpbx5OnBlMUJEzt2T_xUoMZyHhCKhBlAP5993_XCQq7XpX6ex56WKfbqL2wZbxwF1Cc_IIZg51yWXIw3gHJB4CKFqxtsLJbW1EGYoenQASSWoBz9HR7LbrH=w37-h87-v0
694fc143-55a2-4af9-b975-44945f1defa5
https://lh3.googleusercontent.com/notebooklm/AKYWMX-GWH-IlSmt2c3JtyVI7HNenL95hiQUbrH3Wsqj08WOGcMkX_eDN1VERDiANuCTyWsI3psL6mNBGxDthTOq6YqyuY-rNMLstFiXd7_ey3CoCvCUDoVLKoX45vMdcJwCA73hRFvS=w37-h87-v0
d4f318f8-aba4-4c43-9dc3-004ec96f88f1
https://lh3.googleusercontent.com/notebooklm/AKYWMX8jP8nNa06oSmkYSwydHMb0e_9LOwlzXChoPHiil2qVj7d7Eg_s9U6gZzYkyGSIL22Ar2FxclnBCaSLUsKH3_nPEWwnQuAfwslTZVG6vGNHJNHcStyrdM8L2dH2f59yikEMDCZC=w37-h87-v0
88a79d83-4269-4951-ac10-873a1680fee7
https://lh3.googleusercontent.com/notebooklm/AKYWMX_T1sbIWikCMIVYPsRrpjN26UVKaal5u5zC-YdpZ8Dt9TiN_PnXRUZ3xLw3DcixcFc6Tz-XybEXNkW_UAZAP0aHlbXqP81MtERVvT2KyHVV17E8M4bJWuaGJDNYmrzqTTpJ2lWBzg=w37-h138-v0
90a1e947-8459-458f-8f73-80d37a540b31
https://lh3.googleusercontent.com/notebooklm/AKYWMX9EM81WbuZfK_wCW7kb59eMuUfzfOnAnG3I6bGRyeDFzqDkkO2mXfSe53Ysa7CH-JODG3jM00pJ5MrMZktTKCOj66-Gn3R0_a9s-xEU2bdZkOvsZsS47mf51iwLHPhGtXvh1DNlHw=w37-h87-v0
abb17e1a-758e-4677-8b7a-cf06118bcdbb
https://lh3.googleusercontent.com/notebooklm/AKYWMX-_L-UrRUn3wQRqddOHeQaCUsEFFcB9vwLEHs-h0zax1j2PsnS-RJVEdG04oWtEIdXMxOPds8YBMXyW9AuaTxp2DLwsKIHSfkfnsAE5q6f9zAfzYVYKbM0JFrG8F1ZRHws2yvDSqA=w37-h113-v0
44c30da9-b1cc-41be-b334-219b7f2ebb07
https://lh3.googleusercontent.com/notebooklm/AKYWMX_7jxySdCmUp5B8Y6C_EQC7l2EdhdigzC1W0iI9UX8yLbqjeiC9gha7STfI4X7f3BcbjLvPYFnCe8NaM1Zc_QOpkdZZ2g2qqA2mJ2vUuWx4UQfymqSel_7I3qnIkFxNMixQ6hVx1w=w37-h74-v0
e76e81a4-1c43-4846-86b6-51eb7a62f222
https://lh3.googleusercontent.com/notebooklm/AKYWMX-1kbauXBeNPpnY9B5zHoViwZLBm4dUsQAmK4E8dQUU6Mmn9W9RN4CKD5CYbHKWZoCucPMNJf-NpERtBvOU1Q2RLapuR-GEBFRKOzmAknWXUBxYdVpvd8Vsp7o9iZ6QbQi5AptxCA=w37-h100-v0
ed1c49ad-6b82-4179-b167-5076971a5cd4
https://lh3.googleusercontent.com/notebooklm/AKYWMX_LEVO7VV-lIdr2hymCFxqIEKlUFVZpX5fqwZu_d-qkCx4sptk1v_qRaCz8ZjgveEtm7y0olyk-nfBXki36l4UoxLIdAPpmrdz6-bmgbWLegQ98LvV0DxQ37fUUWd7HwBht63kkmQ=w37-h100-v0
71cd05db-e36d-4889-acfa-27b6fbcd4b7c
https://lh3.googleusercontent.com/notebooklm/AKYWMX9gpo8-oNP8L0DHUjHNzORjdWG9PCOx5ZS-9JWEY_0pzKSSxiEjKxtmroJqBjl3OrjKhIrq7XmWe08wHto60DeJxqE95uSM8mSMA0YBoATapBtslxqFF_gS1uD3DVtDvFGLFnOA=w37-h113-v0
176a5e4a-8b0d-4ca8-84f3-93ce6a6b2994
https://lh3.googleusercontent.com/notebooklm/AKYWMX_Q08-BIetjI4anPPv3DUMjbbQM5YWoaU82UH0B9MO3fOhFaBZV24T2h0VtazMPTaE0NNNMgMAM4wrW0h11XFoleRN98Zh2hAd7NLmKnMvM006xYgTyEA0a7GJ4-__CP3P7cuMnTA=w37-h87-v0
bdf53f09-c0ab-4a70-88c6-1e061fa3cae6
https://lh3.googleusercontent.com/notebooklm/AKYWMX9RKda6sBoGJ0b9zOk_TJ15UpNsmFK31jjlvpnCdUzfXPQoP-EhHDpf5ZfdrLC9V6paihoazTDSZWmsXLulByd9FCvmwCLedC6b4Hva7n9aW8jL0S61foc0LV4AJuZd8Zj7pPrQMQ=w37-h87-v0
6250f86e-de17-49e5-bc24-183df8ac4d24
https://lh3.googleusercontent.com/notebooklm/AKYWMX9WM1FS71t00toJ4MpbzENQOP_Stqd4LXPmatfxvgdS7CZH49z53VPhDmak77038J8awxg0-wZOP3IC2T_jYO_c_201MgB_6is_5wagJlVj4pfaMXrK5q3bF6_BpekHsMcmbRhQtg=w37-h87-v0
23311327-df77-4442-a11b-248dfcb61f33
https://lh3.googleusercontent.com/notebooklm/AKYWMX8MrUnRtGIpHo7QuOVpuOgRhdILwFy9Pdhwkzo9jCDEPaVx-2iOJawJ0-F3NYsAhapER5I3MOHItEwneWQ3PrjS69wDLeI6hVU36mfUMeqNmymN21nFmNKJGr3fXhvGdVu6q4iEYA=w37-h138-v0
a31f1c1a-e4d9-45bb-a2b0-cd3333620676
https://lh3.googleusercontent.com/notebooklm/AKYWMX-1JcbUadS1ZGk32PXyJNKKaQb8KMjVzCnbLHGfgEr0SXnZm11Af8vvy8fIVvH59HmGGBNJKexriRDs9uGuAMnqekign0vtCrEwWr2R7Kzc9vcvY2klXTobXtcPFBfClZayScrZsw=w37-h87-v0
13bf3260-dbfc-498a-84ec-2ab5898fbb3f
https://lh3.googleusercontent.com/notebooklm/AKYWMX93OrvAvhFIDRr8HJsdFBnvMBy5M9l7D-VXufVQG-jKkUqqKh65tJVY6uurnlWwVkpmPOKEdA1rx1mFQoJbe4NHN71_lvtpyuohDpYzfZYn1UaI-A59Z_B8L0rR7EKMSQrvJqK9=w37-h113-v0
9010ba5e-15d1-48b3-ade0-597d78a24452
https://lh3.googleusercontent.com/notebooklm/AKYWMX8nQ0eeEpU7ISehCLePJkmaKky_JmG8hGYxAHdiuf6QZaHDl1ne_O94LV_wLi1y4Vi7gKcYRvQqJQRwoXvRMOiwsTOzu0NCeCO3P2SARGuG1_fkFP_JLkZnmUHGUjM4v0XFNxas7Q=w37-h74-v0
dee277d8-986a-4418-a0eb-d379bff1c0a3
https://lh3.googleusercontent.com/notebooklm/AKYWMX8x1gy6YWpkdOBj7XAUEf9ETaTbDHa3VsFoMtVTrt7Nezlv9kNPduoi-8Hq_O1mL5o4cLHzs5IQPiHckwynUbbuhcJE_RtiYjccLYSw5x91BBDSHhOcSidbvx9XDsm0qxt02qwzgQ=w37-h100-v0
9d67dadd-2e55-48c6-aba9-3c1791ca25ce
https://lh3.googleusercontent.com/notebooklm/AKYWMX_hR8ZCmtU2vLmr2vg4GnQJHLZDpqPfgsXt0w_oTiLcx1KwbTsL_x3nS_GE_lwtQdFYloFBhyACmwaQu2KM_-UfPxOo2RRzEdfdJXSkmhT9UmH1VXhPF6CWoeI4_p-Yx11FDYvI=w37-h100-v0
9656990e-8926-427f-acdb-7672b6e7fb87
https://lh3.googleusercontent.com/notebooklm/AKYWMX-z1Rb_Jc5lqwV3Tr1NlycU1ThX-bdEk6VBlhzScLJT6eHuOqpDzWzAKnv4raXWsgCVZy7p8fkKq6l_wBnQ8VAdBmAIc9Y6JvkGTXVkb7EN4tqAY1GfE5P6KkB6cLj2xbxdCCUsDQ=w37-h113-v0
8a21a9bb-3943-4710-a190-8550f026f8c5
https://lh3.googleusercontent.com/notebooklm/AKYWMX_JEtCOKQOAuhitLpD3KdkxVLWfuJbiCG2682DS6C_S5pVJtQw-AGxakzsraT5uWyPQat-UVPjK4d064WMv9Ah7LxbjWn-ZUS2Il4kJ3BElX76-iV_TngUs2mD_pm3_n5h3Irsp1A=w37-h87-v0
edec1338-532e-4d2c-bd98-65d6361778d9
https://lh3.googleusercontent.com/notebooklm/AKYWMX995o2qtqHN3K0U0-3h7E3u3-cI3mBf-cMwaWVvPNdU7lMP2CLbk4I9a2HKSJF2_lWqyJEyin6c2A7TJQ3qBoklREJD0kwaRShI_ygCJ-QunnRhYGEM4NUzoyBJFs3nH7D54Hw-uA=w37-h87-v0
6fa2b26b-bd09-4a06-a499-c667e3d6c9e0
https://lh3.googleusercontent.com/notebooklm/AKYWMX99Ot8RpZKmORgjVcuhSaTk2V3-mrUMzwSomm0wRbeISY2jkI8XMNczJp-hxIqZ9fHnTAxNH-9Lsdh3JusQDEuOtkRblyOLQhyLOhrSEzZPh81QuT671Az833juQJeAJRfE9aOS=w37-h87-v0
ed589c83-c494-4099-9973-853ffd7457a2
https://lh3.googleusercontent.com/notebooklm/AKYWMX-eLPDO4gR-5CXdPT1fv7ovhMqHd9a0EG1fjtOIlAxP4-oDsW7ljL-YzCCvBPf07OKwmvaEeePtYjF76ley4KzMzPSVUacvAWa4ze697GtHnK3YAQyUarUcGu8WRrzijmDcWjcP3g=w37-h138-v0
00148b6b-7bd6-4554-8bf6-24a472416107
https://lh3.googleusercontent.com/notebooklm/AKYWMX-L9DQxNjW8ozKV6TO0tlD7sr_91MD4E-Lc8CubRRueJ7uSwUyBJpEfbgFOoyKj6sXZkiGF_6V4i07xKNaSN2Tq6o8T4rYvmQpfVIvL__Wevb66CH891gj4CifrWbxou6j2kXNpyg=w37-h87-v0
0b7fe0b7-7720-49cc-8ca8-e361478b01c6
https://lh3.googleusercontent.com/notebooklm/AKYWMX-r1RF6-i1hr15q8GyAroIHFVa9QpgY7IQZKo8eryBhkvONAiHBCdhFXk5D4t5T2-gMnmZ2cfpi6Qq60mGT1M3Ishls4r7ul6uNUqUsrIf6JUmVzplpHAnwL3iCAhVHkP3f_RMJjA=w37-h113-v0
37b55d5c-b93d-474d-9eac-bddc1828c369
https://lh3.googleusercontent.com/notebooklm/AKYWMX9o40jL7JEG2ul5MwqG9xt1bb_YDHWXpowfUdeCaouW37HAFP6TdQF2fqYm7-6aCLzRfarNp_TgrdySFvVG1nslukR7hGXC4hsLq-wfb4nZM_fhIPDM0vDCcLEHwlcBnNnYT780pA=w37-h74-v0
2cc70125-c4ab-4f25-b1f1-96379541bb1e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-YHnD2W_XMy7l3uQtBxg2ojOgZtsKF5Tcc-ULwwu_yzJ7TAi4QHBEgJfkEGLSVXMINwH_PdlTl4OOZjkyy3jLnhVMEFY2Adrz7mQeJd4t13pCIHujBvRECnj_PW9TMBR93fxrlVQ=w37-h100-v0
7064f9f3-87c3-449e-8c5b-91db490cc709
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Faw4jAbhXNzAZgmpMX9J1zkQoPlYYt9g3NO28Npsc5o9erVBk52YmRe80yTPaR8druCy6cJLubM_aQTMWX_fQE1Rhjh9d_chTazN1W6msGyeo_LQi3ZKvi2R-9rRAH0Thnyh_nQ=w37-h100-v0
5ae60700-dfb4-43f3-8fca-a49d9e1d6d20
https://lh3.googleusercontent.com/notebooklm/AKYWMX9YFk9WXagucfQgnEx7XG6vpVUpDY1b2P04iNOwXL81EJJI4SxxfQW8JE-bxugoSoY_RaF6WIcu0SczwJdy_v53gb3qhQY-2feLoVTg9ubSi7ohR3XSuE-T_LtdrkY3cRAujvBt0g=w37-h113-v0
ac32a2f6-a6a4-4aa1-8cad-eb3a5e95286d
https://lh3.googleusercontent.com/notebooklm/AKYWMX-GmPKlpUnv-VbqqemdHZNzYwXxFg2CFqPZvCS4qHUGqQKGRoWKtzgJ0uDOHmZSK6J68DSl3sEnwQYR8318L7AziLYaXhsfjp0XrexolartYkpENZjc2lo4MbfZI9JbHiPnFOdDAQ=w37-h87-v0
bea21741-8493-47ef-8b11-7093d90046a2
https://lh3.googleusercontent.com/notebooklm/AKYWMX8Yvm2JO_En61DN2pBC_dJz-5S6B7fq6j6o8GP0iCQN0mWJ3wFkqZTWFOMg6u6Nmgn0ZpNhA2VzLfG6gHxlFPV4vI1LsQPKRcPQkpaQVNwD5Oi982ZLs7tAA4SMY_yV0BjCzUsD_w=w37-h87-v0
0684bafd-cb82-455a-810f-c3266d82cca8
https://lh3.googleusercontent.com/notebooklm/AKYWMX9RmTLzUMct2489t2BjVOvEpcLGuIN-BJZP29RUCiAvwhwYmE_NerkK9gxZ4CppmdYm8DXXWi3w3l148f6BxKJlbd0K742ww20x-jATdl3TjTAa6NzEQEGuA_GZd0Kjw8EbStqnCw=w37-h87-v0
33dbabb5-d572-43f6-aa89-f212447a53ee
https://lh3.googleusercontent.com/notebooklm/AKYWMX9lxr0fesF6GNFBpP4XUgzdc5wiPHZj4J7GUQcnqi9jzJq_G5Y9QxDSDwAWkAJE2gGHft6tFKg1ULk_byEa3J__4912_iOIqT47i36us92EH1gfNwKBzwmPredG-aDcEJb5e1eU5Q=w37-h138-v0
5175c710-a3d1-45c0-99db-5f5be474dfa3
https://lh3.googleusercontent.com/notebooklm/AKYWMX_Pe-vBouXQ3VexXSeZ_oZn8pyjzOxU7KB6XzOShWIvbvIwSg5c9BR1kfA_ja75Oqa8OK657S-Jqo8otd8DlvJP4cIYuOn68WVRm-_D62uYkJHrNcIuXQhg-PbGQINHd-sClKHlqg=w37-h87-v0
7863f4c4-ecf6-42fe-8c9d-2c546d20c607
https://lh3.googleusercontent.com/notebooklm/AKYWMX9FMzv_EnDiP9RtiC6g6Z-yjeWkxvti9c9QcmGtdfhTOJnXchGJ1saEephaBRGr8XNIVmy8BPPy0LU7en80CPmC7FP7K6dnlYv9Vxa3RJn3J9RED6lBeRgpje0Qs8DsPRnpODvW1A=w37-h113-v0
94c6246c-0ce3-4b88-94a7-1740c5083af7
https://lh3.googleusercontent.com/notebooklm/AKYWMX_D1DITRQbkTHSeiFXjJ6dai-y6bhJ4Y5uo6v2TOd4UIj8qAAMvT_4kQQ3mN_tIRnUNAbLhRdtp7PW5Omqf0HA8AFP2OkxIXOaB-RoT5Pz128wfDEIDhguMFJhsgsPKj6TBSAPb7A=w37-h74-v0
284ff8b9-97ed-4ace-8b1f-202bc340c482
https://lh3.googleusercontent.com/notebooklm/AKYWMX_aa6OlVJxM_d9rjKrxw7xWC7dl7EUcXdrqLgg_qerI9lmqsALg0xEv0j-i1aZLFHcgG2Upr3TBizxm8JZNBU6hKhleDTE9KRKp7oP1C86ZIJRd3Q287K4jjulIcfVJyFqi-0BONw=w37-h100-v0
d4d5c69b-01ad-4570-b19a-477711c0437a
https://lh3.googleusercontent.com/notebooklm/AKYWMX8kUuji0yjKl6uQdfmeGsBAJ-P5Xk9lTFvUb1dmpTPSGJmwriAWSzkCWCP2p0djCliKc3uBiJ0JzHjn655HPD5kOKx2sC1G7d8toaV1jlsEX9am1GLujLfB3zMXX6zz9niRmW_RvQ=w37-h100-v0
33c092dd-5431-4346-a114-2dc3f7d8bc42
https://lh3.googleusercontent.com/notebooklm/AKYWMX-FaaIA6lZr6jV4THPt2FR06h1I7_k-IuFZMmARSkK2HeMG4Myvhl0ZYA0mrQNHJwt2iPATbxmc-nKfY1WN2ILK8r9CZYW9vUyybbVUa7TSlKJPfb2LdK9aQSgMmJ4FZ4vIzWgwDA=w37-h113-v0
20aa2cdb-5637-46a6-9ef7-60e463e3c3c9
https://lh3.googleusercontent.com/notebooklm/AKYWMX8fIMRqEXerHtR886gynq5CYxCl6JnfYKRdLS_oaOyF9cMA-iN2AXpZ-SmlSbnN0VGuw0bOR-B5vzKixPMJPICdzjC3wxB_tDRm4o4Tt4Exxga7oREhocBfrdgifnaOThqY-f3zaQ=w37-h87-v0
f43401ef-135f-4dae-bda6-169abf45b9e3
https://lh3.googleusercontent.com/notebooklm/AKYWMX-TS18IxEqmxKZh1dlJ5Z38ntYWZhozgSocKS5kUjnf9z8wn-AEbUg5s0R2Sh-516mxNmzTuWpRdBpNvDM9XtXFYz6PHxZegT5ue_i7HCV3-DwqL_7lm2X9Vhh4xLwX53TxOFYVfw=w37-h87-v0
42fc1d61-abbb-4378-be9d-6999ec446ba2
https://lh3.googleusercontent.com/notebooklm/AKYWMX96gHG1frKb9su8JG8t_n6XLlgYRGlbw3SuVoa_D5OeYpBq6qIQbK0fMOPgAPhr0hftrfCyzNdxd8pMFbrftPFM5_Vj2vx650DL9y9-0oaEr9Wbq-7vjt3rND0xcf00Aty6JXCRIg=w37-h87-v0
1775bc01-cd5c-427a-9202-d0ceaed0a8f8
https://lh3.googleusercontent.com/notebooklm/AKYWMX_yOJwYdq86FcVpIFw_Zbj5E37S0RNV3tRTj-D4DcGx3OMdqgCrfZz-fqGXXvV2P8aTVjFnT-ITLTaOzCnvrkIztiHsFqj16dTBQGZm-IQYRnT08fbIaQBIGdZQKDRKI4nHy_kr=w37-h138-v0
6d55e4d3-0578-4f9f-abe9-a8c19acdc4da
https://lh3.googleusercontent.com/notebooklm/AKYWMX-QiFbX4u7VeIgotin-vE2AdktTV3AzhxPyAEepMSfXDvD920MgCL8AW-bUCm1I_OyWruTQ2pQaMkx80V7Sgpe6bdBoM8gKzhRdbYt0LvXhRKe0-1KleQOh5sQL3vA0oIBFzRjGvw=w49-h87-v0
97621a64-b1ac-4a15-bacb-1de583d7a240
https://lh3.googleusercontent.com/notebooklm/AKYWMX-aY4EyXWA4No9zRA6O87x8wXkgXz5DWYZWrOGJamprW2A1Bp2uiLlYOHLepXXOF2cgUNKPkww5vbGg3MaV2DX_IlkR4GvuemxkYaHzBCCcDQe5eWeQWn83bZUQFqfvbO8Sm1ktWQ=w49-h113-v0
3641c2eb-be3a-4f81-bc18-2f585563b071
https://lh3.googleusercontent.com/notebooklm/AKYWMX-PKOq0dKSYVSK3CouKQQpEmhR6PlwgZteHDsnufOX8vqq0mKKPo3po1DE_I-FlFenvllwPLVJcL0TInDo38UeheY7ipW1lRdMT03CsrtxjtPMIAIER5ySAXG_XH83ZHsdH7DNkDw=w49-h74-v0
4bc5e686-3e9a-49ab-80e0-352452426bac
https://lh3.googleusercontent.com/notebooklm/AKYWMX87Jli2_uhkIMKB73VNP2pjXezktHqJcdDltjJ-KemWYT3NnZQpwo6zVwYfIP5mhQZJZ0240uJGN_aWItFXCifU8_G2Ap7PApwszACoELTi7IkRXARBQ95H6lPqTI7dvSi6rWZtKw=w49-h100-v0
bffb8699-e387-49d8-9a9d-8693ca490c26
https://lh3.googleusercontent.com/notebooklm/AKYWMX_qPKIwTI2C7_77ji21r9ZoWqfTOPAhs1q1h5soIgzUr1wvbkMywpk2XpAHDUvv_jpqSUTZnXo83J382aqiKaPUdJ_0YvyamgIahwAwMfDoOHnRzeeuuh17KLu6Y9hyPt1_GlDmiA=w49-h100-v0
75b5006d-e133-4fbe-9961-8e94173f3873
https://lh3.googleusercontent.com/notebooklm/AKYWMX_6bwGRcEhypLiNYrDeSLkQa5XhHCEXZ2xsdzj2FUcEa9j8IeVTzMxDjKqGzYyjOIDccBU9tQlApDPMayJ1u6odW3Kk2xblnncY6QjoWuTL6h5lb0W9-uLSYnck6nOObmfAq8LcxA=w49-h113-v0
f5f83990-9a80-4ebe-ae26-11984caff5c9
https://lh3.googleusercontent.com/notebooklm/AKYWMX8FZP3WK8JVGi9fppegd6yVTuFnoCF5a_PwD7I4gaNaPvAg4fr_RS4ZSA6i2LWeueJGPVisdUGvTeImP4HC1K3D_pn93yfVkaZlS92i_QQsVg7Boo2R37kJqGR4YAMsDp-1KwaveQ=w49-h87-v0
992e8c52-7221-4ae7-b77e-2d497c392bc6
https://lh3.googleusercontent.com/notebooklm/AKYWMX8IA1OxY40I8AJwwo-zROCS-WKSKxzWrtV3jHE79_b5bJo-PZtC26CKuyaNp1uzx6P0Kg_HB0fdHrzpKilQ8wqnKgSxQTlhH8fIbcGqF5p9Y6mHHqicuPVsVtQOKu7ZfWrjbwDL0g=w49-h87-v0
f061ab50-56cc-4d96-bb7f-eacae0c636d0
https://lh3.googleusercontent.com/notebooklm/AKYWMX-A1czI3l7MV1hQ4ZLEHMLX82lcQUHm8ohx6nIbb0JgC3h55EEDSiQWYfFAdrYcXA0ZIgs8yFCvpiBnxXTxEyZ_hNJbikRJZaPKXsJtftjl6RYQOH7Itx9Q2MPuilAySbQgzgPNOQ=w49-h87-v0
16eaac5c-4b32-42f1-a012-c430cbc1cdb6
https://lh3.googleusercontent.com/notebooklm/AKYWMX84PWzFvCa1s_CluCSgs6FuL9s6vtXAC48r6L9cXxKxAB6lXcttvaWHwZUyOVkrXEVSp0PvxoSD2iY70mkavM6OY4pqfNt5A7yCtKCP4X4bOLLL8zsSTu6N607_cm7CLyU501yRAQ=w49-h138-v0
57b980ee-eb28-4877-9c53-b0c53f5935a7
https://lh3.googleusercontent.com/notebooklm/AKYWMX-_SwhXAr3hqtUGpvVnwEk9a4xg1-WFzlSee3WE1Nilck6TldJ61RrQk-M-ycWzPxqrGbX5FeusfQ1rkWN1_5zho5CzPqDwFg6wZEZFy1Y7ChcFuniJ-9SY2tYpx8-yliLMZRa-SA=w37-h87-v0
3ab4bcf5-6747-483a-ac70-63f17bca1646
https://lh3.googleusercontent.com/notebooklm/AKYWMX8nBxQjbdqFbTYFfHAgQxGDxIaxrwXnhq1DAJZRqyNeB5UvgwqWtjWzJ-WCvk8pepGYPGijgXem7xhqDrQI0hMkX1QPJQs0pMdx_tYVjfEuia86Pk2YI-t7tOEe0RL3YoPmLuV5Sw=w37-h113-v0
6d6cdef9-f8c9-4221-92cd-99741fbbc8bb
https://lh3.googleusercontent.com/notebooklm/AKYWMX-kizdNCPyPXDIiVCXbrGGOkYCCRL3_GShoMHvvlkHN0GGAiVyZGTeCPa0gfGyZDlRzrqhDZ95Aq7T54wJvt_DB7YubuPQHYoYy8_9KxjrOvZVk3CMa5hVIYhxswWZ1QOr_urGaEw=w37-h74-v0
ebe9c47d-20cb-44b8-83ad-1bfcf48c0ad6
https://lh3.googleusercontent.com/notebooklm/AKYWMX928ZpkyBzAImWFIZ-IGf_UA7X2p2V8T3uHq7wZ1W3HCSkZp0YCV_FTTm8ZvsSCHIF_YWmNs5Ci_wZBC3m3q0p058OZ_KfmTY6OYJSbsAwpwgHi3HyyMdLylnESuBMQpgvv4Jsh4Q=w37-h100-v0
30364ee2-6d9b-448b-a2b1-75803980b091
https://lh3.googleusercontent.com/notebooklm/AKYWMX9eVL4E2r7WHafgiszSb4zcncKL3fRhPjR7-9QD49k2vlyYYd9O30oM7ZorTN2PKBBaTwDa6XqWqoBI1r_hdWCyfXcl1z5u_6DAeH_p2LGk9zbAGwrgf-3o75N66AHRsU_x4IRQ=w37-h100-v0
c1e863b3-ddeb-4ba7-ba01-96bf92965ed6
https://lh3.googleusercontent.com/notebooklm/AKYWMX8FdSm7MhKUnLS9zB3IOISJ0a7mPZ8V3cGEpfJJLNVabZLCdJNVEstD8xdR3CSxSTdRNVGXWwz3XJ4xDf-Hp5ELgYbj36YKVjStVL21RxvbEI32WG512PlKiuWKaV_j8pZ7vNG8=w37-h113-v0
875c26e3-63d2-4278-b689-95c0c42ba152
https://lh3.googleusercontent.com/notebooklm/AKYWMX_gvoSUJx6HRq6TJUOBGwAVvaSryP2v9Ko4z_79j9-S1YvrS2GFuQjdJfHrFm3Vbz_9ssxcb71dL_syahXQelf-fIKZOetOmuNR7QaN0OUv8eho9YIsJz9jAuBQ3qkyO68uS5a5=w37-h87-v0
0bc0fd11-5615-4c0a-adde-289c5d660c35
https://lh3.googleusercontent.com/notebooklm/AKYWMX__d07mV0DSgXkppAcMcS1LNZvbJmuqfJJtd3KWAmstZabGcHxqde9JAZjMJCo2YtTX71u6NDovgeFKDKF6SvjbwSAPAw3mD_YEvx1xrCWpD66iVyIYKIbkXlBAxpUDKGm74dPyKA=w37-h87-v0
1aacaf31-c0bc-4ed9-807b-b4b4881cb5fb
https://lh3.googleusercontent.com/notebooklm/AKYWMX9UQJZtsKWV-hh9hiHeupx83pOgaTde_6gQBli7edoZSuqxRNSIwm4x-_eT8Y197fSnH416GlfHRZSu3uocxLXFPNECpUDiBrW-04SJIqTbpnHaioYquZpEd6OTDG8xT8R06s6p=w37-h87-v0
fa17710a-e8dc-4581-9ada-5132a23d7385
https://lh3.googleusercontent.com/notebooklm/AKYWMX9R2hYOt6iujSQaaDOOZ7rDo6EY-iv95vtoHXqyFyS_KVpusqp2QQ_vUYmT9kBShsV-hSZE25AsjnrEdbgYhjyBZh89TRfT7lxMy4_NeePGMlGO5TjsAZ278iHPhuDr-AzMixZuQg=w37-h138-v0
3c6b4002-29b2-4182-bfd1-cfded0ef7b8e
 
 
 
 
 
 
tio ns 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 co 
m pl 
ex ity 
 
 
 
 tio 
n m 
od el 
 
 
 
 
22 Pr 
om pt 
bo os 
tin g 
(H ou 
et al 
., 20 
23 ) 
In st 
ru ct 
io n-
in du 
ct io 
n A 
cc ur 
ac y, 
F1 Sc 
or e 
E ns 
em bl 
e ba 
se d 
m et 
ho d 
B ea 
m -s 
ea rc 
h E 
ar ly 
St op 
pi ng 
O (λ 
m ) 
T 5 
R oB 
E R 
Ta -l 
ar ge 
23 Pr 
om pt 
br ee 
de r( 
Fe rn 
an do 
et al 
., 20 
23 ) 
M an 
ua lly 
cr ea 
te d 
L L 
M Fe 
ed ba 
ck + 
Ta sk 
ac cu 
ra cy 
G en 
et ic 
A lg 
or ith 
m : 
M ut 
at e 
+ C 
ro ss 
ov er 
(L L 
M -e 
di ts 
) 
M et 
ah eu 
ri st 
ic E 
ns em 
bl e 
Fi xe 
d O (ρ ∗N ∗| V |∗ 
λ i) 
te xt 
-d av 
in ci 
-0 03 
, Pa 
L M 
2-L 
te xt 
-d av 
in ci 
-0 03 
,P aL 
M 2-
L 
24 Pr 
oT eG 
i (P 
ry za 
nt et 
al ., 
20 23 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
L L 
M -f 
ee db 
ac k 
L L 
M re 
w ri 
te r 
U C 
T-ba 
se d 
ba nd 
itse 
ar ch 
Fi xe 
d O (N ∗ C ∗ |D 
v a l| ∗ 
λ i) 
G PT 
-3 .5 
-T ur 
bo G 
PT -3 
.5 -t 
ur bo 
25 R 
an do 
m se 
pa ra 
to rs 
(L u 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
L L 
M -r 
ew ri 
te r 
To pK 
se le 
ct io 
n Fi 
xe d 
st ep 
s O (N ∗ k ∗ λ ) 
G PT 
2 L 
ar ge 
,G PT 
2 X 
L , 
M is 
tr al 
7B ,M 
is tr 
al 7B 
In st 
ru ct 
, L 
la m 
a-A 
lp ac 
a 7B 
, L 
la m 
a2 7B 
. L 
la m 
a2 7B 
C ha 
t, C 
ha tG 
PT 
G PT 
2 L 
ar ge 
,G PT 
2 X 
L , 
M is 
tr al 
7B ,M 
is tr 
al 7B 
In st 
ru ct 
, L 
la m 
a-A 
lp ac 
a 7B 
,L la 
m a2 
7B . 
L la 
m a2 
7B C 
ha t, 
C ha 
tG PT 
26 A 
B O 
(Y an 
g et 
al ., 
20 24 
b) M 
an ua 
lly cr 
e-at 
ed + 
In st 
ru ct 
io n 
In du 
ct io 
n 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
-r ew 
ri te 
r To 
pK se 
le ct 
io n 
Fi xe 
d St 
ep s 
O (B ∗ N ∗ λ i) 
G PT 
-4 G 
PT -3 
.5 -T 
ur bo 
, L 
la m 
a-2-
70 B 
-ch 
at 
27 A 
dv -I 
C L 
(L on 
g et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d L 
L M 
Fe ed 
ba ck 
L L 
M -r 
ew ri 
te r 
To p-
1 se 
le ct 
io n 
Fi xe 
d O (N ∗ k ∗ λ i) 
te xt 
-d av 
in ci 
-0 02 
, vi 
cu na 
, C 
ha tG 
PT 
te xt 
-d av 
in ci 
-0 02 
, vi 
cu na 
, C 
ha t-
G PT 
28 A 
M PO 
(Y an 
g et 
al ., 
20 24 
d) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
F1 sc 
or e 
C ov 
er ag 
e-ba 
se d 
To pK 
se le 
ct io 
n V 
ar ia 
bl e 
O (N ∗ C ∗ λ i) 
G PT 
-4 -t 
ur bo 
G PT 
-4 -t 
ur bo 
29 A 
PE E 
R (J 
in et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy -n 
D C 
G Fe 
ed ba 
ck + 
pr ef 
er en 
ce op 
tim iz 
at io 
n U 
se d 
3 ep 
oc hs 
O (N ∗| ρ |∗ |D 
v a l|) 
G PT 
4, G 
PT 3. 
5, L 
la m 
a3 ,Q 
w en 
2 
30 A 
PO H 
F (L 
in et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
H um 
an fe 
ed ba 
ck L 
L M 
re w 
ri te 
r L 
in ea 
rU C 
B Fi 
xe d 
O (N ∗ T ) 
C ha 
tG PT 
D A 
L L 
E -3 
,C ha 
tG PT 
31 B 
A T 
Pr om 
pt (S 
hi et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
L L 
M -f 
ee db 
ac k 
L L 
M re 
w ri 
te r 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗| D |∗ |ρ |∗ λ i) 
G PT 
-3 .5 
-t ur 
bo G 
PT -3 
.5 -t 
ur bo 
, G 
PT -4 
o-m 
in i, 
L la 
m a2 
-7 b 
32 C 
O PL 
E (Z 
ha n 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
To ke 
n ed 
its us 
in g 
M L 
M V 
ar ia 
bl e 
O (N ∗ |I | ∗ 
k ∗ 
|D v a l| ∗ λ i) 
R oB 
E R 
Ta (fi 
lli ng 
m as 
ke d 
to -
ke ns 
) 
L la 
m a-
2-7B 
-c ha 
t, M 
is tr 
al -7 
B -I 
ns tr 
uc t-
v0 .1 
, C 
ha tG 
PT (g 
pt -3 
.5 -t 
ur bo 
-0 12 
5) 33 
C R 
IS PO 
(H e 
et al 
., 20 
25 ) 
M an 
ua lly 
cr ea 
te d 
L L 
M fe 
ed ba 
ck + 
R O 
U G 
E -1 
/2 /L 
F-m 
ea su 
re , 
A lig 
nS co 
re 
L L 
M re 
w ri 
te r 
TO P-
K gr 
ee dy 
se ar 
ch Fi 
xe d 
O (N ∗k ∗( |D 
tr a in |∗ 
λ i + λ m )) 
C la 
ud e 
In st 
an t, 
C la 
ud e 
3 So 
nn et 
, M 
is tr 
al 7B 
,L la 
m a3 
8B 
C la 
ud e 
In st 
an t, 
C la 
ud e 
3 So 
nn et 
, M 
is tr 
al 7B 
,L la 
m a3 
8B 
34 D 
A PO 
(Y an 
g et 
al ., 
20 24 
c) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy L 
L M 
-r ew 
ri te 
r To 
p-1 
se le 
ct io 
n Fi 
xe d 
O (N ∗ k ∗ λ i) 
G PT 
-3 .5 
-T ur 
bo , 
B ai 
ch ua 
n2 , 
G PT 
-4 
G PT 
-3 .5 
-T ur 
bo , 
B ai 
ch ua 
n2 ,G 
PT -4 
35 D 
R PO 
(A m 
in i 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
R ew 
ar d 
m od 
el sc 
or e 
+ L 
L M 
Fe ed 
ba ck 
L L 
M re 
w ri 
te r 
B ea 
m se 
ar ch 
Fi xe 
d O (B ∗ k ∗ N ) 
M is 
tr al 
7b ,M 
is tr 
al 7b 
(I ns 
tr uc 
t) , 
Ll am 
a 2 
70 b, 
Ll am 
a 2 
70 b 
(c ha 
t) , 
L la 
m a 
3 8b 
,L la 
m a 
3 8b 
(I ns 
tr uc 
t) , 
gp t-
3. 5-
tu rb 
o 
M is 
tr al 
7b ,M 
is tr 
al 7b 
(I ns 
tr uc 
t) , 
Ll am 
a 2 
70 b, 
Ll am 
a 2 
70 b 
(c ha 
t), L 
la m 
a 3 
8b , 
L la 
m a 
3 8b 
(I n-
st ru 
ct ), 
gp t-
3. 5-
tu rb 
o 
36 EV 
O PR 
O M 
PT (G 
uo et 
al ., 
20 24 
) M 
an ua 
lly cr 
e-at 
ed + 
In st 
ru ct 
io n 
In du 
ct io 
n 
Ta sk 
A cc 
ur ac 
y + 
R O 
U G 
U E 
+ SA 
R I 
G en 
et ic 
A lg 
or ith 
m : 
M ut 
at io 
n op 
er at 
or s+ 
C ro 
ss ov 
er 
M et 
ah eu 
ri st 
ic en 
se m 
bl e 
E ar 
ly St 
op pi 
ng O (N ∗ k ∗ T ∗ λ i) 
A lp 
ac a-
7b ,G 
PT -3 
.5 
37 FI 
PO (L 
u et 
al ., 
20 25 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy Fi 
ne tu 
ne d 
L L 
M s 
O (λ 
t+ |D 
v a l|∗ 
λ i) ) 
Tu lu 
-1 3B 
, Tu 
lu -
70 B 
L la 
m a2 
-7 B 
,T ul 
u2 -1 
3B , 
B ai 
ch ua 
n2 -1 
3B 
Ta bl 
e 3: 
C om 
pa ri 
so n 
of al 
lA PO 
te ch 
ni qu 
es ba 
se d 
on ou 
rf ra 
m ew 
or k
https://lh3.googleusercontent.com/notebooklm/AKYWMX98zl6tz6ah7szpbpZJDTOBkbmvPja9u4_ccHF63ecOLo-TeAbnXiZxcd8DjXScfhiD1flHKDP7abVYRSMhs4s-uGB9O4mFRTonxDKsd3SA0ZZQsjeh36qMTl51SN-aFeQk59zU-Q=w37-h87-v0
736931b4-d1d6-4ae8-80a4-a0f5e4afb301
https://lh3.googleusercontent.com/notebooklm/AKYWMX9dJTu7nxRiNOQQto172DAENhDmuhshAaLLgpCflI6bEfgpMsIPt0FZFGMUiIjD9djGK8jKFl_fgt3o0KyNWFfJ9LtSrwJHaQmAIl7EFz4VSt9TzU_Ff68d9MFgSMS5D6HPtEhh=w37-h113-v0
6eb3d737-d11c-4d47-9dd3-814c665b73f8
https://lh3.googleusercontent.com/notebooklm/AKYWMX-b8p7qdWgrVrv7EAxmmSKeXlDj7Csia_mo77ANGPP2o4g25K9fetvpopEqLh2uuewRQWzCkO5dzYtUdPHlXmnLRIVascXefyfcM46oiyg1ob68CrMAihH66S-cL9lnRhhIPkv4jQ=w37-h74-v0
3a529b5d-fc41-4825-99a3-8d59ede117b6
https://lh3.googleusercontent.com/notebooklm/AKYWMX-OGtyv7RuKZmMB4QEHqOE_QPL2rAboive6IJ5G-LNQ8pjJo2SaxjMMJWrKIgIdHYubxW9fXcZu8z3CO1s8xvIdxEVvu23E1JGfenuyIPmNTcK73AnC7126O2eOVBPvc1JbqY6B7Q=w37-h100-v0
7676fabc-0fd6-4e9c-b8e8-a4051c8acb9e
https://lh3.googleusercontent.com/notebooklm/AKYWMX_qC9QG_xMxEwTIrSuk6dihDpPDDO0ik0cpJoW0SnQLGmx_7Rpv4gMNHSorYxevBzNU3hAg-fdqN0tITXqkf_xLyNZgh2ygh2RDwHHWoYTpHscDbyM66FRR08d_7__lLmkzwiXqqw=w37-h100-v0
e2fe5a9c-c53f-44e6-9b10-9ab07fe92189
https://lh3.googleusercontent.com/notebooklm/AKYWMX-4924gSujl5q-sHPc08ELs7YHuiiadxq_IZcXfiXfDDxp_2sd1PKX_qT0-sFALjKmnOWJD0wsJvZ1wEP-sTY-iFkMWossIuHB1IUOewc6DKecVI9SZFygWbUtquMGgQOyDoE6izA=w37-h113-v0
72cb32ee-9d01-4898-ac44-bade30963e16
https://lh3.googleusercontent.com/notebooklm/AKYWMX-B5fVBPLwruGT8mxXsZSSFtKWShvrIuGJH59SzvkrfLFliH_vmlyDTcr9Ft3xcUVklS6PeSVpX2OEamyoPwyuZKF_Bc7itfbzPIG-Nk3sRySG-ULwxDOvdJegrpSldexs8iEf4=w37-h87-v0
fac5b25a-1764-4af3-b052-e95b5e7e009f
https://lh3.googleusercontent.com/notebooklm/AKYWMX_WjzbAa5ouQJ93yWE8LhsM7vDxzqmbKRNRvpvdRyjLZ4ophJc7qFMV8ddtmbY73dZvL1ijnpGUtoP2oqyzP8hGWrrWISeqRe-dcYcNpa-TpfyPSgMtk2jY94RUCuTVT9nvRZvD=w37-h87-v0
1e57a868-8791-4932-8e4a-cfb161209457
https://lh3.googleusercontent.com/notebooklm/AKYWMX8v_cascxBrkwUZI-jtl3z_y8uwpY2xqhhrYM56Bx_VKFpT5FUC2VRANetLVLfv001VCT9YH919DoU8rXrBY_YnGlhlzNvp5-hjmpwBELD09NnCrYzzYNU8LuzCkAl0MDpYzvNoHQ=w37-h87-v0
c89d3d4d-e2cc-43e5-86a3-9939224f17fe
https://lh3.googleusercontent.com/notebooklm/AKYWMX_XZR4CB41lC4BCdLHZ6PDjey5hTo0KnGQYzrQCRjjQDdLrTLx2Wsa3Jj0ie5zwt9wl4Waz9w4DwvwrMZBD5JBDIhqFRiXM1OFVzd5s1SAWAZzgtUooDb_Wgqudo51D3xWadWIN=w37-h138-v0
6925fafd-fd1d-41c8-a1ce-8b7b857355fb
https://lh3.googleusercontent.com/notebooklm/AKYWMX_PmYCN1sCGKyNALBsZgXn2anncg3rnYKY-fZTzJJzsLEclgAWCMq3siS_D2cmTb3sCLlsug-2Wd1WTdUBOaSXP-zryfRXBxKpZTxeYsRumV8NAGI4lhq-LvK0J0OzRAJkBv_Gl2Q=w97-h87-v0
224ed566-7cc2-4a7a-a75b-907c5f9f5e2e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-rGTOVZp8dd3xBchhK5jNGNpG9MMqj--hW2MJCNnmG9UuL62x1KkQAPki7n3S5fpES6Kg918AwYR-0Qss50QoJkryHMQEf_Ku_r1sPUN3tvgiUHpb_dVvVDWHzLhtnpIZBEG3PmA=w97-h113-v0
7fb0c87c-cd12-4e16-bf28-25229753b158
https://lh3.googleusercontent.com/notebooklm/AKYWMX9KSPpZ4LDXU0rzPUd2g_aEwCGTdgU8LyKzGAp4xtY42zRyCmgd2-IP1TplKDlRBlHRq0Y8S8fg3OvPyy0aTNW1lSjY5-_hNpUSM1dGGWkjeHBsfNuacf9s5zFFzvXgWZBNOybH=w97-h74-v0
6e97b386-6d25-4b35-aa83-3b53021ba2c4
https://lh3.googleusercontent.com/notebooklm/AKYWMX8mVbXYkSyWhm9pGPDHlBjPjJw8N749mjH2r1TA2t8QzM3w0xS2WtoOWDgsoYbfXtlGZ_py2j5cqcdpufHh8aVONjMYLGdxnuNoWaXcK4T3WNe1-PcCpPMHr0MxqwIPwHr8sRK1dg=w97-h100-v0
1e5a955f-6aa7-4dda-bc25-9d3429d020e0
https://lh3.googleusercontent.com/notebooklm/AKYWMX-HrKAIEnSMwuGof8H-Sm7ybXCoN9Pihd9KALLwU_IFU-mXRl3B6m2beUWztVInM_Iu_ohzuCYTPqPBaC7j09TSCHM-QTo4Qj-CJETw7DMR6ZjPOoXFj-cmDentgtf1Aw1Ly8fa=w97-h100-v0
a5db39ab-1c9b-4bbd-a736-38f2dc2df721
https://lh3.googleusercontent.com/notebooklm/AKYWMX8jni07z7a0NPNws-COm2sAh21FV_dsq2FRUtGY8yEaEIKj9dlxkQbTsPQYeIenvB953JwtMBFG-lZaT1Uu5rvlzv2ITS9T_VZMqtJPeyrhF5TmHRDoUA1aJbp0mBpxsm6KCktvrQ=w97-h113-v0
44b2be9f-cc22-4826-a5f0-27c2962de916
https://lh3.googleusercontent.com/notebooklm/AKYWMX_pIxp9xzFhh0sfgjh6B0_OOM2RrH4uA5NDPXJF-4HuzSGkfqotEXcC0280wzL5CgATsSVex3NUORP4xxmETAWZ1I1u9ScJoNCx5scQCcjTko3V4-dji8aAZbDrEOD5WZ3IXSjJ=w97-h87-v0
84f793c4-c283-4407-b050-f04d25e86eba
https://lh3.googleusercontent.com/notebooklm/AKYWMX9IrFBj8kbuY-5vtHC_JhoRU4DVoWsPmQK2pUl7UkVz648fGuN5DCv-YwJWBZCRGYhb58OBsPNHOS4kAnRnxnCAmhqxfDwXWQt5iQHbAk49S7EkPwW0J02ApmW1TYwM0_Ozhcuh=w97-h87-v0
bae2db00-bd6d-4632-bbaf-1700cff4e666
https://lh3.googleusercontent.com/notebooklm/AKYWMX8bvum2OR6bTR5m-ZWV81M-AXtB_eXUWLkQAumEYSXfghLuLRarhiDQe2R-6FRqb8vYWMK7ooaNPzKEk7ZE6cXaM2Gabze3PCyeQU2d2Pwi-J7oOxTwvPAm9RFOUaT9PkDZZL352Q=w97-h87-v0
ae5f46f5-9b1b-4cff-8562-9f18aa050863
https://lh3.googleusercontent.com/notebooklm/AKYWMX8UzIYv1u8oF7i_LehHAdcHZUTLbH6g2MwO3Knh2t9M6rTfCqPtbvX44egX6FnNux--LwMT3EDtjzByasY87nUo9ucYCt9U8GPSAiVv2ce1bDpAOyRQy_riqVnijnsVqiKpYkF-=w97-h138-v0
a211444b-0ddc-4899-a3a9-7edc0debfd7f
https://lh3.googleusercontent.com/notebooklm/AKYWMX-XRfWH3WeCv1ey_iJNsxN3MTjHESATpgTLAmJG0kvSX11_e-rgKWbhjymIq1LkMHyqD7YJ_dxRjDff8IfwXScs35UvxjjV-CPSHCpvlA8Ze3gL5xoxnVHRvv4NF9DZGxkBHXjJ=w49-h87-v0
f21cf33a-164f-4967-8288-692f648736fa
https://lh3.googleusercontent.com/notebooklm/AKYWMX9_sDkNkL3SU4D8-NIHOfc5Q5f-WhiqKmxjVPcAoDwCzM8urXbB4idDhGUYchlZKVlb-_k6dJ7ggIHA3fJuYvVxO1EoZeV46GhyXQ_vVXjAU3xd4yePmGva5RhFIzFfN91UyccJhA=w49-h113-v0
4dbd3802-bfda-4584-b286-04922c51cc7a
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Z1zp-Q-94BC2cOiRC4Ho1QMhEZnsa3oKFh6jOxlWVE5vO4dt8l_iKJYmCzbC6ifjj_1SMyflga8C9HdGkYnaHNWXIzWLzLSC1pUJFfgmxHR42vQJWTqGZy-evx9ijXJRN3YQDfw=w49-h74-v0
a537a412-eb19-4735-a360-d7e54daccdf1
https://lh3.googleusercontent.com/notebooklm/AKYWMX_WfulhPENlZfdRgG7FJqST_JNc3a6hu6P0hdJpTu40EeWYSxi93i7zMitqirXGhFesdxemycWsuuZ_4TTeowwlgK19JKEnfLfQ2CiaSClYVVJMkkge9EJRzncX8f3U10Tnd8mnnQ=w49-h100-v0
4ddc8ee2-e436-425a-a4b0-6b591a558c92
https://lh3.googleusercontent.com/notebooklm/AKYWMX_iPVUTlgL1zwhyeMNrIwsW1eJvmVKkwY78TkqppF8a3VgIuQMqZmi3Hj_bvWcU-s8JacG-HGaC791vMJ2Gp3XU1QbX9G2ZE72BE_WvAURkoz42jyrJw-FE65SlSixJbUTHb5BnDQ=w49-h100-v0
9eec052b-9346-45e5-96d8-516a36cc55c2
https://lh3.googleusercontent.com/notebooklm/AKYWMX8B8xpudVE382xz2mtN2_9IY7SzN_Zn2NrN68JR2EOFkZGluJVFa_LWhAS0FDSHfqeGlxqFFgZoGLgJ2wfCopOLyDjwvR0RGp0V_xbDqUP9vTL1-xWU4anfIRNvW-5K_eaiQzZC=w49-h113-v0
fa9a90c7-6fdc-4186-abb0-b103587cbdc3
https://lh3.googleusercontent.com/notebooklm/AKYWMX9SR3RUZrmOd2gciqD8-aDGqwLLCiXAOytWu8eeltfDNKLUewq36LXXBcUy51cHgIX8LfuBQHlN7J6wFdQOxLdS6ygLzXhZbv-bp-HEnWzEAkAmT6dVnpG9a_zIdBmS60yzuowh9Q=w49-h87-v0
c4c73023-cd90-4e21-b055-99f5f778bdee
https://lh3.googleusercontent.com/notebooklm/AKYWMX8IEJLwi3fMhM3ZUe706n-Izwv_j2OnYuWes5nPggx1-TE4OKNQfMKAZIBQWppZH1_ZxzpeG7KozujbHei-avh4PSX3fv9Bkv_Z_xOhxQzV1Y7jZ7dl92nUIgQXe3N5rXZ5J0JYrA=w49-h87-v0
5c7aecb1-3539-43eb-a4fc-ee9dc009ebbf
https://lh3.googleusercontent.com/notebooklm/AKYWMX9kBhizy4YGppzkfhkNjw-0z8Y7qBFjR98yjnP9V8oEbD_kcnojsxFb52EOIk0RULvofkltrhTp0nSV_xZUhWilDX4IP0q8p7i7oONcrZdXAeTbz0MD7srnULju7H8KAIjLeufLeg=w49-h87-v0
e47240e3-b636-49d4-8458-4f71de99e206
https://lh3.googleusercontent.com/notebooklm/AKYWMX9488Dq37b_tQCL_8ehNorvszXlhnqDnPn56PDdMOz1LBwJCW5r5kt8kKluBwe3h0FqFy8tvAM0mqh2e4HYCI9jdcniMg6opDaC9T7wIUgaJdLHgMBN-niG-hT9FWFht2sLbWORmQ=w49-h138-v0
ee4a7b35-eebd-4836-9f01-6f492efb4dd1
https://lh3.googleusercontent.com/notebooklm/AKYWMX99ryfEZtXgzj4j0hjVH1_ociZi3Dl_pLb6AsLEpOhNow2-9tXgBc5GSgZ3jcLLQP5vTHyrH3UGkhPk9auqbtbKD2j6DAw9a1YVaKauM0xF4xeVgfozRR8ITKI1NEYRqmA4XIW4=w37-h87-v0
8fdb3845-494f-4e37-abcb-2efbdc7646f9
https://lh3.googleusercontent.com/notebooklm/AKYWMX9GkpipAK2OP3sjN3ixGkFa-GNFv841VlKoRfACBKLrUcFc8phL3mixeR4FPq8B94raq4_uFm9G71N9MDjFukchuIu8gKUD0_w_zfmiW2dmzdxlyKgomHe10U6kI3RQKPj5V1Ur5g=w37-h113-v0
a9b19860-f5ab-483e-8b5b-3b9b54e7746c
https://lh3.googleusercontent.com/notebooklm/AKYWMX8IP0lEwOyPa6bjsWyMVkfWao_rmxQrE7N5i_55JrUiKvE82eHfWwGv3mX5r4uOSMYPExTqGCyjSUuneOmPO1PQn03i82dcz9uJAS6RotgORATun0wvjP9ivw_0VhKHH30CI6GC=w37-h74-v0
391a6790-0fd5-475a-abfe-db6c1367bc23
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Zjj28mdpQahCSAWCbXjimbXfXVnY9QKELb4ZbT6_6C-jn4tBeOhumsW02K8z2zVX-_XD8OYx9XF5kRN-pwrNycu-FciKCUREUHDi_VIFwhuYmBQkIwYDFoWFxM2wblzHcH1Y4mg=w37-h100-v0
a9c6e259-f8e2-439d-9a93-2dd79c084e4c
https://lh3.googleusercontent.com/notebooklm/AKYWMX_Ro00fBJ8jRNxJvg-njQ6RgWSBqXSd9xttGXHr5zYSl9LwcwzSmlEKvLpYXOqboARmA6o1IAx1yma-1q7OXgeH7FEk78u4xJLnSA6VxA6U-ZIf6JAvqyy0180RWlH6Do-p6B07Cg=w37-h100-v0
7b27ee75-381c-4631-a7ac-88875e8a2f66
https://lh3.googleusercontent.com/notebooklm/AKYWMX9_I6T_5CG7bVkp8ZdnxOZLNF0i0Pb2U-VDOVd9SoOQROEBJjGML-GCzUu6769hPX-SRCYicduiYT9fAtxiR88y8C4OsgLTC7-QpsSqKdm9hOF_46bZYDQN-Rg5EpQF0Kg9TpLnMA=w37-h113-v0
774a0df7-63d8-4ff7-809d-c4e549dc06d2
https://lh3.googleusercontent.com/notebooklm/AKYWMX-irsOP93EQZ_HYt5dSN0dJO5T0BrKDfiF6eHyLfefBjY7P7aqsQNMVAmA_IFWNXXvTtkV8jjtVdUI04lCI0z9xMLfLj76a0yezemg1vX3s9wWYljJyugTFbyc-uqrva77Y6nx0TA=w37-h87-v0
d9684f99-8ec3-4342-8e19-1a7e5d6b341b
https://lh3.googleusercontent.com/notebooklm/AKYWMX_ZXDDVq18pJjZ5lE1F94i4jkEcfdChrc21tat6D9GgvDXc5pjRghmXtZfigOqcMzM7F37RN2BoaZZzb5i9vrGTCywoyPt4YzRu_SB2Ax0i-3Mixfz3vOlH8kZXx4AtABw6j6vf=w37-h87-v0
caa509e9-4f30-4062-b56a-237e764786a0
https://lh3.googleusercontent.com/notebooklm/AKYWMX8aTK9ERiuwc0JVhVdDMcIqGampy9dnRM6eRLyumOPfastrnPxKLySNtFTmOQoSaJLE2Y3yRNKsT8ZlVkUYRONjHZEKk_i65Hxc_eGZ8ktkReE58_D2d4YRRWGfhcaA_tD6yZiVAA=w37-h87-v0
3b29aa22-d863-4f1b-95f9-b73a32683a16
https://lh3.googleusercontent.com/notebooklm/AKYWMX8hk1dboqMCG7pngmY-eA3nZAQfE_goLlODLN_4UYAzMLYnXQn4_YZZ1EIF5vmtOIZ-Z-aN2hkF8ra3Yh9rhiIlu62lsTLqf7vgCvpWGDwfge7Wb69cPpARdmJLfKaxhDut6pmyYA=w37-h138-v0
7a317d18-c3d1-4607-8a8e-5f54763edf9b
https://lh3.googleusercontent.com/notebooklm/AKYWMX-nIK3GCeCGgWe5oRiduRsK_TD9ZQsZd6HybuLokF0Wt5YHnej7jQQ-1h3v8hEchGm2EG2Nd5_nD7BUTD9WyBDC17iFrlkyLHQQasEmhsnyTmZkUO4yyugr8Wx_g9ZosY7UP7kC=w37-h87-v0
9be8da59-fb6a-417f-9be3-355e0a91b0ae
https://lh3.googleusercontent.com/notebooklm/AKYWMX9AwasnzJEm7ZuL4UTly4_RJXFTs_MGqSzEuVLsyMWqbxledh93d2HjQr-c9522fuHfS40r5pACkGOtSpAVbfauycy3PqAjknT9VVTlln784bg7LxsJEc9gfJDFNlY0CvYLmRmo=w37-h113-v0
c4c42de9-ef46-453b-81b1-58fccbb17ccd
https://lh3.googleusercontent.com/notebooklm/AKYWMX9q03MAB0vsIbRNwPyR-6vEsZReclIcC9cH78wRp80nKu2yLSg6WBYLI6uPj-JGD9248qLQHtZH_U0PJ7zXq1zCPGYSbBPZ2AVW2cZaLlrWVvMX-03fD3ekxt7GVQYu7AOiNwNRTA=w37-h74-v0
9356a0ce-59d2-4f33-9236-880623bdf345
https://lh3.googleusercontent.com/notebooklm/AKYWMX-WWmf5vZZGeQgRDHn4-k4pnuhdsEhxJ6-5dcJqr5c6ScqUOag9xKT59d1glPeis6r5NAUj2kdrilqa6NPyd25jemx1IOrRJUx-j3tE2bY12WNQR_1Ro0vveQjnmZE_8ZOI8xpB7Q=w37-h100-v0
ada7a769-0e23-4526-9172-cc5e4700a104
https://lh3.googleusercontent.com/notebooklm/AKYWMX8JN1NWCT5X6CfFYqUkmJfxDVMjTrtLIaPlXHn1HTXwaXJpaBKyQKqOaUJJUwg5lPSsKZu85cENaFLLoYDWdxSIng7-GLUGNoYZ-gB6vV7dquaKqVWYZyOrFBEgX9nQsMRGPsIVXA=w37-h100-v0
44c625ad-7ea6-4dbf-a0ba-bac90df6cc1f
https://lh3.googleusercontent.com/notebooklm/AKYWMX9e-PX8sNZKbAQJQsl92K4auweNacMdF2DHvzreHXGk5EhVEbDNkx4W7I6ZR7_hCqRviCezXbiuMoBPDqC2mlNngPMjpNlqgJANCY_n89pfyx5HFCt_-aq-d7_Aoxdrt3rLJCj6dQ=w37-h113-v0
69c775aa-72aa-4536-ae03-8ed929b864d9
https://lh3.googleusercontent.com/notebooklm/AKYWMX9-bb85vbIecvmYzYLBKJvyRmnJXnp4fM9oMWR_Y2ijza0P4e87nNfzdyvPsGmJSQzg1L-Uzfmn21W_VgWB5VKN5rrtrFUyPw8_8UMUPH_dNOfSSeH5yCEM6fVS938q6Q-DxuxWXA=w37-h87-v0
ab44625f-e471-431d-96e0-0de7ef51bb80
https://lh3.googleusercontent.com/notebooklm/AKYWMX8AeO5obHBA8MPmHdd6BTE5RLQVGNAUZjaujV7IvPJa4XbisI4N_F1niEGOGxU-g5R26OwL29ZZd6Fa3KRE5v981DGz2nfNFiwT5aJumx7PnBTQVVmQ9KZYTZ7kbyr3JZtjQSR0lg=w37-h87-v0
90372762-bf3d-4a53-a072-39cd1af9e51d
https://lh3.googleusercontent.com/notebooklm/AKYWMX-CXlRGbL-YnbNrkmBvFH7tmSHK1uhDIM8DUEBtwrhu14SEUgKnPbtjLPf-o4weJ8hCP2Vc99cPBU4RYzp4ybpTJHbNIm4b8z8ghnqpGwghvP4Uq3f_zURQRAPqZYaC3LeRtMrBiA=w37-h87-v0
4947e934-d6dd-4519-8db3-bcc0ba1a28b6
https://lh3.googleusercontent.com/notebooklm/AKYWMX9O9ggcXw95dtxNAwKuKROpdSZpuTsKiv1yEEZwdZ5a65rexdb0ff4TVdsEB_dUWVkmE12fJ6RiCWwCuJy4pGh4F348OyquimuUaXvtIsVRWMkBgr9GwxvJ5UvhFBLzFBgl5nrx=w37-h138-v0
c7752b37-6fdd-48c1-a362-1df717191948
https://lh3.googleusercontent.com/notebooklm/AKYWMX9mTBHMbPWGMNvj2dG_rmIAAZ9CzBSAiXk0tOYREm9xZkQkc-Xs4WodDr12GTKrhLn2eItTK0KlngmN1sI1FLUBKV4gzvjignmupj8x8h3PKJvrbxoFZmcvPeeUmVNEuy9OldPfkw=w49-h87-v0
29c993cc-f595-4bcf-a44e-cb55ff4d908b
https://lh3.googleusercontent.com/notebooklm/AKYWMX9z5n3vt_QH0gHUmG1MWK091cC0__coG4ShsFnn2NOob-XbZs2Lcs1C4IULmB3_aEukG1iGUegzIaOqHwDDHD9sXQpLvAzW69AR1rKSKSazOuFl-H7Oe5DiGRN-IiCCxhPOqqpC=w49-h113-v0
06a256bc-8431-4cc3-ad59-c0a6156a6a4b
https://lh3.googleusercontent.com/notebooklm/AKYWMX9N33bs08ZMcnGXV1n796cHG7KS8SOqjZ3DEvAf6mpLGOq-Fw1wIxo5iUN9PVHh3l7ocZySaK7cYybeHdtm5CeDKWH_qr_s2vn3ew9wpr30Vg3UItmyPIIh797ziWutGsDzqIryQQ=w49-h74-v0
74fd6a61-a4d1-4216-8881-de32356893a3
https://lh3.googleusercontent.com/notebooklm/AKYWMX8UGBHqMLDs95AHdQ8GyH4o8Vt2p3EyelxDK3vjLxEzp8v7p-pUJg0_b1pHbXEZAcypbmb3yfsJKaktaGWXNoZiN1XH46wob_qIe4KJNMNOvgSGkm7aWFDEex8XHUTZUwWDZ5zwUg=w49-h100-v0
96d12c64-7cd8-4c95-86b6-a89ac12b1a3f
https://lh3.googleusercontent.com/notebooklm/AKYWMX94MfiIlPPj9wUQCx0IOcO8Xm2hEye31mKI94yhgljO5-o5yCHsVw7u2Ph2Lb66EbTexGPG31xGXco-rCbj0mghV3apQOXj8KodveNauMbXJKRhHkmuu2SXP7G_AbSBw-3GM5RR=w49-h100-v0
e8b79a73-23bd-4068-94f1-d5dbb30cc427
https://lh3.googleusercontent.com/notebooklm/AKYWMX9CEOgrtig3KbtGwRehffKnAnEo5rzX7pOucEkA0dYNuTietrNJZbPo254lsMjUoPFptjFMoOID_leD0ltrDscDRsKu2kWN5X6Wn0MZVYlOJBuxogUvu6dG2fyRn1al1HLrYjVC=w49-h113-v0
095c7eb4-a2e3-456d-878c-93886ab58e1e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-f7hJGIxyja6VXhK-yWa1scYjM0NwMCIrCv6_8i2q_6C-PyvtiWRt-1L6E7pF-lpZr1voAFGCTy6Hx2iETN3qzfv2ADB_7fM1IijKYD4MGJg8bBFXAPZgVC4X191X1-Kgml2wIhA=w49-h87-v0
8a089768-247b-4a51-9300-a2abd9be0eb7
https://lh3.googleusercontent.com/notebooklm/AKYWMX-WgNRxeFIHHtAE8HWuqqGllfrx5bsr0QvyEx95Npbs3pX7urEeHB68L-6j5jESdUXpqP9JwbvPgbTP-OZXBLdMgCLpKNOwMrZOqvdiYdTgCrvfDO-Yk3kbWohGM5VXj55WZKLF=w49-h87-v0
64572af0-2ebe-44f2-971f-95fbd3f61743
https://lh3.googleusercontent.com/notebooklm/AKYWMX892fnOsKZA-FxRPWYmnA6oDjhZMdwj9C-p3jiE6kcteKgfncGnVaxHjkbOrQcgUPghT9XDTQa1nLhdV_bdQ6sc9f4h6R9X-yPNeyT3yWo2e_CVLyFOZTH_98TrdSkGKFsLCXK_lg=w49-h87-v0
46731b4a-869c-41f4-89fa-f3997e66ac3f
https://lh3.googleusercontent.com/notebooklm/AKYWMX_B9OmXC_6cqkWgxdgBohkd2bUiTZodaZ7_jEjwWxsuTsgS8JxS0PLaUaGQtmpg2d5hOUDjeKUZe0FVtApP5FEP0CrJKb2hEG4dUEzqKN_cUckMD4UeJJ317uXTTNrTU97pB1KTpQ=w49-h138-v0
a03c0259-2a8d-4fa2-b7e7-ecb0798ff98a
https://lh3.googleusercontent.com/notebooklm/AKYWMX8ua7nGgkE3XeDl16A6U0a2YWxjA_JNo9GcQ2QcmL8_zxhjVAGPZDg_dBSkGVROOHo7V9fVhV62nvAiZbiXOL6knIP_FDl9J0NWj0RXFyrb0ENOr5U8rRpb1V9PHlV2HG_zg9GT=w37-h87-v0
6da4bffb-717c-4c35-879e-a79786487b3b
https://lh3.googleusercontent.com/notebooklm/AKYWMX-NFD3f2qKAIUIMqRue_AsTgepngtpFbBQ5b5Cci68k_QEp_6l-ciGTrcDXMrunLH1Zrk9k7P7exGL3SPhC4Q4NLZwatDGM6HEL6ss6MdBfZACXwEV5A7qq6boxpiABaO-AGjXP=w37-h113-v0
99964569-e997-4bb7-b337-7760fad44e3a
https://lh3.googleusercontent.com/notebooklm/AKYWMX_vYKrQWRIr7nw3cVb81eGBr4-_hHqzhr7_SUFr--OKNqO9sUyZjbCAROP-lhoJ_I-xSzavNsDx0t3gGCNcnUlOLyVNWXit9m3WbeAC9ZTgJpB-WgIW5zhrg7g1wVdIhSzNvnt4gA=w37-h74-v0
18d1046a-c3ba-4d5a-82dd-8acc96a1f2ca
https://lh3.googleusercontent.com/notebooklm/AKYWMX94jeNQaKwz0NoAgDIJwFoXqJjdf38f53AzT638JcMTKhjGo5k4MN0ZCzepZ5aS3mi2rkyw8ZQ5-pog4nzd9P4Bn8CSq_QFSwSmpMk_ieR8ldlQ6olueeDEtG567_H-qZ_SLutWQw=w37-h100-v0
ec50d719-956b-47db-9170-45b840676d86
https://lh3.googleusercontent.com/notebooklm/AKYWMX-f1LCfH7BX_X9pRC6cEvgmYXx3d2HbNoiKokCrJfn0TbsVanVbENAL3VAGe4vhQGb0EpHxJVX3GYG2qoWemyBp17vEMRC5LzxpZHoh4YbbGruA29je8mq5vbJbebm32UbD2P10ig=w37-h100-v0
3e333dc1-e76c-4e46-9f73-bf1f6d9d4101
https://lh3.googleusercontent.com/notebooklm/AKYWMX_jJ97OmhKg8-MeosU9uJXKU-hREXssDPB4phGxJ0h2wt50ZmbvmNl_BvCfx3DYYTJTirsbA93N5KNL08HVlBpH1Wia3559CncNAas_NuHIjyt-L8c-3ntspn-p6RTiRspGPd9BvA=w37-h113-v0
10498401-3997-46ac-a3f1-d68be1486633
https://lh3.googleusercontent.com/notebooklm/AKYWMX97qyg63XrDm9s8yp60LX59JlVw5W3CtJjCjKxIHYbTokbHVI9NDwXJTszAP_zB33ol38xquW3Uvl7nFyYdOITD_2do_tv9IupbUA5Sgkh3lauiCkgNfZpn00BuxPiJEpi35bRPwA=w37-h87-v0
c534381c-0286-4908-a590-f5753b68e32b
https://lh3.googleusercontent.com/notebooklm/AKYWMX-2NIhciXLbAUVc4NACbWqqNV6mcXaItP_XxNc72-GJXLgfAfUknPMJnpjv5wCqRS3T4XAVN9ioMOxZPgZ3XJVOSdKmicCr6-aMCGkmKsU_3BRXD_QC31kAgu2PGytEbP2WsZdC5g=w37-h87-v0
f01fd028-bc94-46c6-a1ee-709b0fa31723
https://lh3.googleusercontent.com/notebooklm/AKYWMX-fMP61QFqIpVaDlY_2VIX3SSAHBGzNnCfSqAijXBcDUdEkRFPiE4PehdNSVGhyD74wswyLc6V3i7ezVcwjBavxqb3qd0iD_HSJ7LTzuDLuEiEzn4srK7RwQD8B2lLZc36_O1Oo=w37-h87-v0
b57ec3c5-fd62-4566-99cf-bcde946141d0
https://lh3.googleusercontent.com/notebooklm/AKYWMX-1sqp9SfE21uDJlDDl78FwnSdtrsoCH3BXLTCGCHXWRoKD7ZVkspXn6rxKKmHh-na63MEwAFP7Gk1qXAgMCieqwOtfIi-NfQCPOASq9yoaBdwaMJ8UpVgUK4OXBPwx9HQP5KLx=w37-h138-v0
56d87ab7-9197-4d4e-bd42-6b58620a4983
https://lh3.googleusercontent.com/notebooklm/AKYWMX_kjSv1ijigr5KemGApV0A9Pz4hrIXUy0unGkzamzX-U58BIYAH316550Xwaz6AF6omZZCM3xhQ0SdSNpb8rSTAgIZxyb46yDgU2yLsvXb0yezGdn28qJE9nyKlfd9ksqLj68uyNg=w85-h87-v0
55f4d152-5cb4-44bf-9366-501e1c9d7a26
https://lh3.googleusercontent.com/notebooklm/AKYWMX_1WJd45i2KxuAp1WdjINjvidZHenfb0R7TTobK4O4zmQShvJsQAFxqJUPU8lmPB0Qcmwi5Mm7bW18znUCyijJW-qZ-8p4pWaY8EeX0YpeZ1oVRKqPIRevsda22XnsYo6c34pwo9w=w85-h113-v0
a7fa3782-8539-4cd1-8f54-9f96fabffa88
https://lh3.googleusercontent.com/notebooklm/AKYWMX9CegW6DOifhm0pLoZJHjkcVWsvfYCUTv3Cjafy69KY32vlqZhbBQocdjJXRR4k8CxsAa5LTsca9MWSDEH_JbCGiL4m1Xshv27i-PkV3V7EgQGNbzCeavWz2HQXtDLR4utE_Q1MZQ=w85-h74-v0
a07a1358-cbf0-4f40-a073-aaa663e9a3f2
https://lh3.googleusercontent.com/notebooklm/AKYWMX-s6pX_pGijD_dl4edsYU6tIoGw0pnbsxtc28Cpo1GOm9SLiMp1yV88MEz1tnTRSQTAkkmFrhvKMZvZfYgupSqruMrejzBW5kx_KYay-LBPaU0rlXm9vxZwa9G252uLLew9hGxlzg=w85-h100-v0
c90ed8ee-7740-4f4c-9b29-3bfbcd8d7a2b
https://lh3.googleusercontent.com/notebooklm/AKYWMX9reIidGQ-gWvHg8zrSEzd6WUEVbLvnfAHIkn21XUDLm9cq294EIjHAPjDj-avN2_Mr9sRVC_hElz0XuxJp75U70ANPuYGVPPprtx7ZfQKuwqVLYhnAw6Byyf6hnZM7NGfxbqqF=w85-h100-v0
e4b355b5-2ed9-4cec-b017-84d9216bfa3a
https://lh3.googleusercontent.com/notebooklm/AKYWMX84LFCRD67yV9Am5CGrTbBE0enkchZdO59FmC2pw1zl56TMy0Cb-gSUtob-_vskbHx5_6NAhsDVh9u4knYZ4Xx86epPCI0lyQqTSMuYuRgDvlppNS2iEXa2bvpWg4aYviWGkU9-=w85-h113-v0
a1869f88-37f1-47b8-bc5b-392b51680aca
https://lh3.googleusercontent.com/notebooklm/AKYWMX93vs2RA47ZIyQUSw3ZdQQVyMRhRnN26lgpXD72mfGOD1xZnYCFe2NRhe6W045Mh3ZxV98ggJxp8sB8e_3zXW9f4kbigplZETiuHEfCacnATql23pzheMB2COV7kQcYzFLOSTgD=w85-h87-v0
38262e5c-9ec9-417d-96c5-7d70794d1d09
https://lh3.googleusercontent.com/notebooklm/AKYWMX-9XepwYLcgJoEKr0rV1IgeWW-NeYuETH0yM0rLdAmpWzHSE02bd68ZppOwVlLAmfocS_SczzDZiUOX0C8PXST-6UBQkprWTB-X-_zg2qGmMoV3NpsAxG6_BgZxDiZk-xZmF1uOpA=w85-h87-v0
2b984a16-c52e-4b20-9825-182aee804cc8
https://lh3.googleusercontent.com/notebooklm/AKYWMX91N0hrYoceikYPHCrh6n_oNjftg4DEUuWWU4mOU_JeDH2eg5C8fszllGA9zFOZEjXJwBcaYj-fXmyvUKKLzRK4ZtYT8cW2IgwfmUUv663AsmChov4KiEw5djPOcyb8ZHadQ3reXw=w85-h87-v0
5d95b81d-ef5c-40ea-8dcb-e635cd8e4845
https://lh3.googleusercontent.com/notebooklm/AKYWMX-NoX8u1r9ot8NI4KROiYuGS7DN_Td-M119dy9XuPN_3fAa9GxVbFoWoi_n0pRjPxgC3JdDxDaifqwcINfrIvBG6NMgGC3gbP0nI67eSE3_vkfDUT2mzHr_YaN5fJ9dEUk4ZyO7=w85-h138-v0
b4f9e027-8926-43cc-9e1c-82281ffb3c72
https://lh3.googleusercontent.com/notebooklm/AKYWMX9467Zk1BCYqwNwIRB48H9ox4sBo3vJY3S8mLVYmET20G1tRQFf3VO3jNOIAe-vcMWzDnxsDf7DW42ZT42ljv1puq2BKC5rVh9F8mIiJjIxRYr6Eh_aiiyhExy8KFLBlHE1_O9WFw=w49-h87-v0
5a077fda-6665-4b4d-9443-0f826abfe101
https://lh3.googleusercontent.com/notebooklm/AKYWMX_HRS8nJmgEFyW6y2Aa_1-r_crJjtnteBTy34ruQfT6o0eUsd8IW1Pmfc9f--EKga8Yb9avc6QgibAexTtqnPRj8IVLoECiNusD2hDHLzXdAC-W72w5-TtKMeWBvyOAixJ3soMR=w49-h113-v0
82052aac-bb75-440b-8071-3a3b686c62ca
https://lh3.googleusercontent.com/notebooklm/AKYWMX98-bG0nhdxSFjm5FwgHE26UasV1KWCidORSsuXB-vCfw6MgM4F-F5g_4b8cvZ1sCD1Iqa3anIvs9RNV4WSNccOn7PIAvYOh63ADPkUpVx9-IBMA_VECoc3jWZerpJS3jBSskED=w49-h74-v0
63f27602-d4fa-438a-8926-287f2a6c1c23
https://lh3.googleusercontent.com/notebooklm/AKYWMX_EWhtgg_2X9P3ShGl3xYOPvZgEJUJt15NkVddk6J3d-0gWLt2oWC1yGhbTXsAjxw4W4JMJteb3ijJu2nLqvr2RHpXsSTUtxEGMxxksKjaFdBb0rBakCbZPDx4odCp1lzZ5NGse=w49-h100-v0
dcbba34c-c40e-42c8-b856-8d774c9b0a2b
https://lh3.googleusercontent.com/notebooklm/AKYWMX9zeta96gfWok2_Zv6ShotxHYbygK_6tJKevnO_vLICK5Yyflj_VAz7QiV_vUwxTWwow49xfcr7YBPAHPRp2wGH-es6W-vDBk3BIq-_s_kQcuk6GcRNZ6sWeCiGRfbiGDfbvNPT=w49-h100-v0
11f2f458-4faf-4e12-9991-493932fe3dc8
https://lh3.googleusercontent.com/notebooklm/AKYWMX8B-Z4cXVwSR-Sl_gB78Jx-4DTmxrsyIUPhjo-jc1GUNkJ9Vf4sYOsLYzvClxQkEJUT9pMmLzSJY1-9ls4D6sfKJ7r35pQKMP_sxGn3ZBfnuU4gCqADjGLYCyuhv70aaGzimN0r4w=w49-h113-v0
781afa2f-c70d-4c05-bb07-a57a4c032b7a
https://lh3.googleusercontent.com/notebooklm/AKYWMX93sPYlR9cP-pOKOpFS7GSdUqFQf0j1cu1lagB7wxNFUI7aeJWj8CoIbSQS1A8lU2Fuf8x4FaqlOI2OZ6VxqhsNZ2opMQEOAaFkHLSO1rW8YZ_7x9w2CNIvTaEA71kpHlYw7jMeLQ=w49-h87-v0
7c9efc22-687b-460a-9954-d9b9526fd693
https://lh3.googleusercontent.com/notebooklm/AKYWMX9TyZ21mFEFtwROZAGvcjqDzVK8CsgC7rBE0Y5vJbGiHPq4G0OtZnmjCaWmCVU3BWnisM5HdqCSVCNpz_xsiBXSd2AfGIQWJjm3Txf1-yLmRVDNSUQlvNHa0NPeda2MmqOvgnTCyQ=w49-h87-v0
d124e707-2288-41cd-99b5-db9c95259500
https://lh3.googleusercontent.com/notebooklm/AKYWMX9PhaH3StfhKCeHUKEsYKF3WJEL2LgNQmCtIsLw2UVCrvI3_d_8NAALEk1XYx4R2H0chkVXZfJlNXh1vwVQz_btmZstd3ii7KHXwOJdI7GnJlEjaN85x6wpxsqh9YucuzwCCCPD=w49-h87-v0
8bc23a20-b354-47f3-9a3a-83a91331450b
https://lh3.googleusercontent.com/notebooklm/AKYWMX-7eSuWirnN_mrBQeoYQc70joO7TqGyeCWTdErh71S1fOUheeGK8HuyO48yP_xhJgk85LUTCzk9QXFEYdXkCecYEuhGVBSUF79oPylnj0GJLSJAp1WYArOdqfsMhwJS9ouAdCXG9w=w49-h138-v0
7cb5b3a2-1f47-413c-9234-3751e6eaf50c
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
38 L 
M E 
A (L 
iu et 
al ., 
20 23 
) M 
an ua 
lly cr 
ea te 
d N 
um er 
ic Sc 
or e-
ba se 
d G 
en et 
ic A 
lg or 
ith m 
: M 
ut at 
e + 
C ro 
ss ov 
er (L 
L M 
-e di 
ts ) 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ k ∗ λ i) 
G PT 
-3 .5 
-t ur 
bo -0 
61 3 
39 M 
IP R 
O (O 
ps ah 
l-O 
ng et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy Pr 
og ra 
m Sy 
nt he 
si s 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ |D 
v a l| ∗ k ∗ 
λ i) 
G PT 
-3 .5 
(p ro 
po se 
r L 
M ) 
L la 
m a-
3-8B 
(t as 
k L 
M ) 
40 M 
O P 
(W an 
g et 
al ., 
20 25 
) In 
st ru 
ct io 
n in 
du ct 
io n 
Ta sk 
A cc 
ur ac 
y A 
PE fo 
re ac 
h cl 
us te 
r To 
pK se 
le ct 
io n 
Fi xe 
d st 
ep s 
pe r-
cl us 
te r 
O (C ∗ N ∗ |D 
v a l|) 
G PT 
-3 .5 
-T ur 
bo G 
PT -3 
.5 -T 
ur bo 
41 M 
O R 
L -P 
ro m 
pt (J 
af ar 
i et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
R ew 
ar d 
sc or 
e R 
L -b 
as ed 
tr ai 
ne d 
N N 
Fi xe 
d O (N ∗ C ∗ |V |∗ 
k ) 
di st 
ilG PT 
-2 G 
PT -2 
(s ty 
le tr 
an sf 
er ), 
fla n-
T 5-
sm al 
l( tr 
an sl 
at io 
n) 42 
O IR 
L (S 
un et 
al ., 
20 24 
a) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
R ew 
ar d 
m od 
el sc 
or e 
L L 
M re 
w ri 
te r 
O (|D 
tr a in |∗ ρ ∗λ 
i + 
λ t + |D 
v a l| ∗ λ i) 
G PT 
4 L 
la m 
a2 -7 
B -c 
ha t, 
Ti ge 
rb ot 
-1 3B 
-c ha 
t, gp 
t3 .5 
-t ur 
bo 43 
O PR 
O (Y 
an g 
et al 
., 20 
24 a) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k M 
et ap 
ro m 
pt de 
si gn 
To pK 
se le 
ct io 
n V 
ar ia 
bl e 
O (N ∗ k ∗ λ i) 
Pa L 
M 2-
L , 
te xt 
-bi 
so n, 
gp t-
3. 5-
tu rb 
o an 
d G 
PT -4 
Pa L 
M fa 
m ily 
m od 
el s 
44 PE 
2 (Y 
e et 
al ., 
20 24 
) M 
an ua 
lly cr 
e-at 
ed + 
In st 
ru ct 
io n 
In du 
ct io 
n 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k M 
et ap 
ro m 
pt de 
si gn 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ k ∗ λ i) 
G PT 
-4 te 
xt -d 
av in 
ci -0 
03 
45 PI 
N (C 
ho ie 
ta l., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy R 
L -t 
ra in 
ed L 
L M 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗| V |∗ 
λ i ∗C 
) O 
PT R 
oB E 
R Ta 
-l ar 
ge (c 
la ss 
ifi ca 
tio n) 
, O 
PT m 
od el 
s (o 
th er 
s) 46 
PL U 
M (P 
an et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy G 
en et 
ic A 
lg or 
ith m 
: M 
ut at 
e + 
cr os 
so ve 
r M 
et ah 
eu ri 
st ic 
s Fi 
xe d 
st ep 
s O (N ∗ C ∗ k ∗ λ i) 
G PT 
-3 -b 
ab ba 
ge G 
PT -3 
-b ab 
ba ge 
47 PR 
ew ri 
te (K 
on g 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ R 
ew ar 
d m 
od el 
sc or 
e R 
L -t 
ra in 
ed L 
L M 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗C ∗λ 
i ∗| V |) 
Pa L 
M 2-
S Pa 
L M 
2-L 
48 PR 
O M 
PT W 
IZ A 
R D 
(A ga 
rw al 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k G 
en et 
ic A 
lg or 
ith m 
: M 
ut at 
e + 
C ro 
ss ov 
er (L 
L M 
-e di 
ts ) 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ C ∗ λ i) 
G PT 
3. 5/ 
G PT 
4 G 
PT 3. 
5/ G 
PT 4/ 
L la 
m a-
70 B 
49 PR 
O M 
ST (C 
he n 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ H 
um an 
fe ed 
ba ck 
L L 
M re 
w ri 
te r 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ k ∗ λ i) 
G PT 
-4 G 
PT -3 
.5 ,G 
PT -4 
50 R 
ep ro 
m pt 
in g 
(X u 
et al 
., 20 
24 ) 
L L 
M ge 
ne ra 
te d 
C oT 
pr oc 
es s. 
Ta sk 
ac cu 
ra cy 
L L 
M -r 
ew ri 
te r 
R ej 
ec tio 
n sa 
m pl 
in g 
w ith 
ex pl 
or at 
io n 
Fi xe 
d or 
un til 
co n-
ve rg 
en ce 
O (N ∗ k ∗ |ρ |) 
gp t-
3. 5-
tu rb 
o, te 
xt da 
vi nc 
i-00 
3 gp 
t-3. 
5-tu 
rb o, 
te xt 
da vi 
nc i-
00 3 
51 SA 
M M 
O (S 
ch na 
be l 
an d 
N ev 
ill e, 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy Pr 
og ra 
m sy 
nt he 
si s 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ k ∗ λ i) 
M ix 
tr al 
7x 8B 
,L la 
m a-
2 70 
B , 
G PT 
3. 5, 
G PT 
4 52 
SC U 
L PT 
(K um 
ar et 
al ., 
20 24 
) In 
st ru 
ct io 
n in 
du ct 
io n 
on ta 
sk -
R E 
A D 
M E 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
-r ew 
ri te 
r U 
C B 
ba nd 
it se 
ar ch 
Fi xe 
d O (N ∗ 
k ∗ |ρ | ∗ 
|D v a l|) 
G PT 
-4 o 
G PT 
-4 o 
an d 
L la 
m a3 
.1 -8 
B 
53 SO 
S (S 
in ha 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
-m ut 
at or 
To pK 
se le 
ct io 
n Fi 
xe d 
O (N ∗ C ∗ k ∗ λ i) 
G PT 
-3 .5 
-t ur 
bo , 
L la 
m a3 
-8 B 
, M 
is tr 
al -7 
B 
G PT 
-3 .5 
-t ur 
bo ,L 
la m 
a3 -8 
B , 
M is 
tr al 
-7 B 
54 SP 
R IG 
(Z ha 
ng et 
al ., 
20 24 
b) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy G 
en et 
ic A 
lg or 
ith m 
: M 
ut at 
e + 
C ro 
ss ov 
er (to 
-ke 
ns ) 
B ea 
m -s 
ea rc 
h Fi 
xe d 
O (N ∗B ∗T ∗k ∗λ 
i) tu 
ne r0 
07 /p 
eg as 
us _p 
ar ap 
hr as 
e L 
la m 
a 3. 
1-8B 
In st 
ru ct 
, M 
is tr 
al N 
em o 
In st 
ru ct 
24 07 
, Q 
w en 
2. 5-
7B In 
st ru 
ct , 
L la 
m a 
70 B 
,Q w 
en 2. 
5-72 
B , 
M is 
tr al 
L ar 
ge 24 
07 . 
55 St 
ra G 
o (W 
u et 
al ., 
20 24 
) M 
an ua 
lly cr 
ea te 
d Ta 
sk ac 
cu ra 
cy + 
L L 
M -f 
ee db 
ac k 
G en 
et ic 
A lg 
or ith 
m : 
M ut 
at e 
+ C 
ro ss 
O ve 
r (t 
ok en 
s) 
B an 
di tS 
ea rc 
h (U 
C B 
) E 
ar ly 
St op 
pi ng 
O (N ∗ k ∗ T ∗ λ i) 
G PT 
-4 G 
PT -3 
.5 -t 
ur bo 
or G 
PT -4 
56 Te 
xt G 
ra d 
(Y uk 
se kg 
on ul 
et al 
., 20 
24 ) 
M an 
ua lly 
cr ea 
te d 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
re w 
ri te 
r V 
ar ia 
bl e 
O (N ∗ |D 
v a l| ∗ λ i) 
G PT 
-3 .5 
,G PT 
-4 o 
57 U 
N IP 
R O 
M PT 
(J un 
ej a 
et al 
., 20 
24 ) 
M an 
ua lly 
cr e-
at ed 
+ In 
st ru 
ct io 
n In 
du ct 
io n 
Ta sk 
ac cu 
ra cy 
+ L 
L M 
-f ee 
db ac 
k L 
L M 
-r ew 
ri te 
r B 
ea m 
Se ar 
ch E 
ar ly 
St op 
pi ng 
O (N ∗ k ∗ λ i) 
Fi ne 
-t un 
ed L 
la m 
a2 -
13 B 
G PT 
-3 .5 
Ta bl 
e 4: 
C om 
pa ri 
so n 
of al 
lA PO 
te ch 
ni qu 
es ba 
se d 
on ou 
rf ra 
m ew 
or k
https://lh3.googleusercontent.com/notebooklm/AKYWMX8KV-6gMaqPo5voDB19Xzh-1gSEosWER1ZuZre96crwAyKdLfnAUZyGcJnhkm-Gdhva4_zdoZ_nt2c2l5EJKOFrdqmcqTC-Td1OrxV3x9xXkrddzh1kVZj2LVXtTYa8GCf_yL3pvg=w37-h87-v0
49948a44-f872-49c3-ac2f-5c26c3d52a48
https://lh3.googleusercontent.com/notebooklm/AKYWMX8pNNTDRp1amXOE-hgmMax4ISPBj_LZpMRC7lPB5I3RNKG4uGRjtuPsOhjku7NZjvdGH_dAsIu_jGN9VBGhi5r7xpEs6Pl02gEKzQga0wxEkvajEgMzqD3PPo2QPup4eQOg6lUHHw=w37-h113-v0
0ebfdcda-676c-48b1-a748-be300918d9b9
https://lh3.googleusercontent.com/notebooklm/AKYWMX_xxwHk7iPiGx45nWmnW_j5HOd-UMdr5kSiDfNUH1JHg4werI_95-o6D9lLliKv1K5jmEXjK5XKn-_3oqLULTaL69iPHM2KZ_dgn_JMmxeL4Mtv_XrqX3XJltiacY7SHn0dmwLDMg=w37-h74-v0
21814ffd-9205-4404-89c5-789606a43157
https://lh3.googleusercontent.com/notebooklm/AKYWMX8Rw3lzAquT-VQQnxtGhix84Wyv6mbmMkzL7Iz4OxBExroF2gDihP3aoFO4twtApYMT8VSvIAoTuQTjPkq2wB2epHh7pW1GM098It7c_Fk9r1EsBYiMJUA0KzwgtthhOIlH-b63Aw=w37-h100-v0
a6537d7d-26d5-4cea-bc9d-db30967ce994
https://lh3.googleusercontent.com/notebooklm/AKYWMX_r3cep2kuJ7mYrODudEYAsKutMMizWY6ZRUUH6l0zAjJakiE06vzSuwKtsrBxxciPZ5XjdyISvRECLSAzLiEUggCpiuI6unMc3sPVfUHnBO158tdmHV3tWTPI8sM6Srk0ZavbDaA=w37-h100-v0
7c70edc1-d34f-41ba-9945-00c321589c16
https://lh3.googleusercontent.com/notebooklm/AKYWMX8uhDTCriXQyfYtQR1sjkJYuB7xhDLCE7juqMMUpRW38wxEQncjKx1RmRizhB0jiHn8mXHnoyceQpmGuicC3M4d_V1N0jt6-qwDyny5ggaDYdsE6v7yNf5lr3KDDwSc_zePhyzFPw=w37-h113-v0
e07f36a6-d60e-47a4-aaa1-a556aca00f05
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Jzx-NApaW2E916pxLk34vOgzCCXuBEPQBIPtI-TEnychs0FqjWJe024syJIf6x98zEIFaPLw9Aam9DAVYYSLw0EiHpfM37Wj4YnLGDF8pMDr_RlGT03LfKx2NHdrrWu_2Cae53A=w37-h87-v0
5c1928d7-5bdf-4f83-88d0-a6304573b40f
https://lh3.googleusercontent.com/notebooklm/AKYWMX9EeY6SVmY5nK02HAjFDlDTUV6XUKjTUitcaWB_YRoxmdOAyH0m1EMmEcq3zk5LHFbUqC26geTnexJ4CATBifRP9MH63JbhpiZT2qMJSRIZ6YCh7x0BWZtAjyS0us9cOiPRSCJY=w37-h87-v0
9ce80856-1570-42de-8c76-300ddcfe90d7
https://lh3.googleusercontent.com/notebooklm/AKYWMX-_HDDJafXZO0m7-hkju25-VnHNrBSrBhUTuqXx7KWOCEdCPz050AbrwImuhFqQK28ZasN1ey-IqZC75PydttEHFB7cWyeCxYiVkOVAe01NW2-_IdW6gzKWK2tgpMsF-qAnmGfa=w37-h87-v0
c32eaa0d-5769-4dab-b8a8-6277be895211
https://lh3.googleusercontent.com/notebooklm/AKYWMX9t0eo-UDQftH4cATwG8f-DpscTyplD8EyQz_Y1P0Ms3Wno-1RQ9TI66u-uIVdAOReHcX48hP_KG4P2V88d1rqGnIZ7x1bj16OYK5DeJ9F-lGPI4zti0q-F6vXsXhTag4cTJKPGgQ=w37-h138-v0
54c59fd9-f24a-49b3-bf3c-ce064573eeaf
https://lh3.googleusercontent.com/notebooklm/AKYWMX8pcfwXYwbsr2Ri5O9caK_pM3oi9kT5J2m9kroLYfVRWn7IhpO5Fhf0dUWC0kkWPx5p8tE2zfQX9HiqaE8GETgEJ4y1ttpai0-NVQ0SzNtFJa9yx_6swQXF2T17iFNB8TdSDiPp=w49-h87-v0
ce145a9f-c107-4a96-b348-34985e61a6ac
https://lh3.googleusercontent.com/notebooklm/AKYWMX_VJnnirfiC2Hd6yvv9vsgrVw1J3UwTOe6DLkAKnNJC25x5C_BUYUWr5yl2Jt6Fhk4qj7sZDPjAzbpTHskm-cqZ3z0pUxIJKTVF4h7XvOkr2qtXOu5uwYX2sh0CnjJgeg_jLz-AoQ=w49-h113-v0
31c72bc7-ab27-42fe-afc6-1a4fa65a4043
https://lh3.googleusercontent.com/notebooklm/AKYWMX_h0il1_PAqne492ko9-r1w2crkLa3efYz-A_aBQ20WNs2KgqvVyU6d4gP94B0hPGKADChtqTNaF_8S2c6FIM7KPNmFsn8nvELDwL84R_6c934WRBbZc8sSgmbP9onDAhFvU6Bf=w49-h74-v0
8e691752-5ae0-4c5d-808a-bc5006dbce15
https://lh3.googleusercontent.com/notebooklm/AKYWMX_QiUXvWdVQ4EtVib82u1TEAzh17tJOVaaTKAq3rtZiQVqOkIextNlYtO7jNfuFaK-jqAyws-RuubfWIbWWCO59JxERaZTbNONZCsSfDz-v9-NRnkffnW5w5nTjnjKhS0JfO0CMlw=w49-h100-v0
1b069b86-0fca-4fd3-a2f2-bfe467dfb22e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-xEYD7gj_bm_Khq2If0Me2sEnVqGMr-Rc-V4M6rSYhk4KL-Vedx3L9rcFSggHn3Xg-kOiSoAKRRLSFnzM08ElI-pr1aOa6TjbugOxK-2IskyaPtY8qdTRC-izy2pra2MVpSxomug=w49-h100-v0
3a0f902a-6558-4483-b1ff-a7c60796213f
https://lh3.googleusercontent.com/notebooklm/AKYWMX8x3O7bvqikUmrey4TWmmRyFmL7XI0Ue8xJWuH8oDOxCzqNxq4vz59JsQFAc1qHxikuweBgx9ZLV2kjZkkwmJr7E_0nb7R4WMjcHYXGVXD2dIRUkuagU6D_bD4__cD8RwCm37PL=w49-h113-v0
bf0b5e85-2eb9-403e-a718-cc2ad8bd0e84
https://lh3.googleusercontent.com/notebooklm/AKYWMX8H7r8fE7Dq5VKraxAJX3k1glSY9XqeukxH6rGdmGJ2-49mTY2wryU8fHn5hDeFrifH9PqeuQ0zXNzvs2mU4ePZ_rNYTeBqp1cdj5bzgX09IWLv43odagyCUtZ373UBrzPtfGa7zw=w49-h87-v0
ffb9a005-826d-41c7-b154-67e243b36843
https://lh3.googleusercontent.com/notebooklm/AKYWMX-4kYHaIL1NwhMSdUjc05H_M05-eWE6bBOiWILPGJuRXr93H9IUCvEdPfhGSfRLTPizs_VIMLulT--YmMHSReYdbw-HBttOg3cicWOhP1EijH2y-hIMotOK385qt2R3_2pRndysJw=w49-h87-v0
83e4ae10-657a-4ff7-8484-f6245f63c1c9
https://lh3.googleusercontent.com/notebooklm/AKYWMX_aLMhGBlbKSOKaDPyMqsJItF8XScS6RI57hIvkSAQGZGLcGdPDRt8zZiFoyWdkfefDI6OBwoiAb_GvLgE5VJ6kjeEUXqCQFTgAb0UIZbpQAdmr8saBCNCuwKLuSY4DH8pv0x54=w49-h87-v0
f1364745-8c05-4b02-b5d2-fcac09a6e348
https://lh3.googleusercontent.com/notebooklm/AKYWMX-rvqmZ1wCIMf-Ms8F0Y-E2-Jvk8mYfrJXg86ze67uVBsWQmp4Qsi2Nlg6H41QaP4_rneyaGi7Kmo2BscWJrspNoVIQqKpvDiVDOxI_8u_MBgz6JJg3LBi0TY033P_Ke2Q0j_n1GA=w49-h138-v0
74396b8a-6798-42fd-aa1d-d83241b28d03
https://lh3.googleusercontent.com/notebooklm/AKYWMX_VHgjLXmrtcu9UhzR9BpoyMCqtilKbgUz7en-_zwmJbeYbmeoQuzzi1NgXV0GRkrNJH44FQtXMYbQL5rBwT1eD1bCPwfrFGAYrgmI_YLfWwcyvLDgSRFG0RH_uXPywAMZ9-19_oA=w49-h87-v0
cedb0b47-1cdf-4891-8ab5-eb00fd8b7719
https://lh3.googleusercontent.com/notebooklm/AKYWMX_ySjfnvq4AGcgRTp2vZhq1FVB0N5CzAiheczx-oReie_y_575kwyb38qkNx0DjLKVN7OU2oAgj-wL3g9u7DHW1kyAOR-n0p8Orw0A0Aosuu01GEq8u2Jtvr0v_39Jdo-SzqMu41w=w49-h113-v0
b88619d0-7285-474e-be46-f6ec016022c2
https://lh3.googleusercontent.com/notebooklm/AKYWMX9uy2o4pJQYAR3cfhA34eZ6kN8pydp4waB0dl4gciRdO10VpiQTHD4UBOl2z2YFGrwaCxXWgnsBgh3u97sUZzfL_G4nXc94-BCkDAfKZblyr8LA8dQJXpE19WoDppTSRAnPAy5B7w=w49-h74-v0
7a47061c-d767-4ef7-8718-fd4bd8337431
https://lh3.googleusercontent.com/notebooklm/AKYWMX8OJ1tevCzJP037iUAwUOkizl6qdUYVVN3S1mFRXQtoErra6-yt-sxnuIM_aB9hcjip9wsKuwQie2Ju53CW723hlrJokRtfjyqTVRdQ4DM2mr15ofBZOdinBFb_wxltrXl9neH0Lw=w49-h100-v0
83026ba0-cad0-4628-b66d-8884668af6e5
https://lh3.googleusercontent.com/notebooklm/AKYWMX8xkVnAr6OhhAkN4y1knTRynAtCHLk2b7CRlImQnQO6GMESR8B_iPjM-nxSrrICRhf6PuY37pSqOfU6BsRGuCOLDG46GaLO4Cwv64N-wGlEBic5PwdeYdd0PvgMuhhjjIA-qyYGzA=w49-h100-v0
c08fb7d3-6a96-4351-a354-e142019634a2
https://lh3.googleusercontent.com/notebooklm/AKYWMX9WrAQfvPtiANlZPOH5WJdGfccb1Py0LYMuaOFcjxokOMQ5C20UTySXazyjXxu9w2-ud5NVS7xU_noRsuRzPhoxGL073-cTQPK8uGLJMI2jBQo_TjWuY-oK0bedVNypBi8Q8oQcaw=w49-h113-v0
da26eda7-242b-4542-b2fa-fcf35b61e35a
https://lh3.googleusercontent.com/notebooklm/AKYWMX8nT5yI7wTGcT5BU7aiNygYLQALRGdYQfdkts4ggnoh7IRTPLtBLaNCUikRC8sMy1i_gzXz0z5txAVU3dMTG97XXSmT3lxrU8bPjp4Ow293bduNr5Zzi8_xBgOP7H9u7w9xMiAF=w49-h87-v0
1e621f6e-e064-4c1f-854d-37ef93fe31b4
https://lh3.googleusercontent.com/notebooklm/AKYWMX9pIiCShjc62NC_U2Kqg2SvKeNXJx4e4E0ABIvPv5MDH5n8YvEDqSw7DQfD2mWICxR70WMMWVrmevCiIUchaEK6hqbODhuKTf54MMjqVR3qSTe9unEmxS7tJec-_IE4OjZ_NRcTKg=w49-h87-v0
83222776-a4ae-4748-bf7d-503824e17f47
https://lh3.googleusercontent.com/notebooklm/AKYWMX_o2CIxlATWhyi6igzcxdV3ixSwEiqnuTehsKATOEWI0jcHqpdTrfDWOLh9eWN17rMm0BaodkGKAHf0avZxZtkxyR_zoB2R-fT2N1Nk-wNMwjy2WWTtMUgpWmhQ_wkRX3ruaAyUog=w49-h87-v0
65c5e2ba-87db-42d2-8704-ac48943759cf
https://lh3.googleusercontent.com/notebooklm/AKYWMX86hXxpdV9XWGSNt9gE5EpHLq0sPx73XDA8yCIeVC0God6UaxSBmyfEKIQ_2z5BJbEkvoVAgIgq3lbzFDpoRAtwwv9zT674XJx7bLy6gpgDz9KgzIQb0S7LklKbl7NRvEhS75aH=w49-h138-v0
c72c4e3d-8f97-467c-84f9-ccd72bc9ab33
https://lh3.googleusercontent.com/notebooklm/AKYWMX9DH9ELCVJDdtghlKUXkgGciGzewUbxpFRIRG1w9pqR4lhjOwVWwegAWW04LteMu5WX2PiVYWmNXNqo3OHtOIj6yFFsftIyO6Hhy0QNF3H1AkYXgUf-K86LMIgZ22Z-oax3P29ppw=w37-h87-v0
4af72a57-2718-4c3d-bc58-49ebab71ca1d
https://lh3.googleusercontent.com/notebooklm/AKYWMX8JeVv-VVivrpbN-9pYTz-bZcGPLrusdzsz7F1AANHKQSA1U0ryXLQWLn1zqt0HPxeVmPloCHebTwOwFE-vqU_vkYOcNWKYWCp07r9_dhsuDzwDyCe4DVqRjyKPFMWiwYGGwKgT=w37-h113-v0
f1fc7a43-9fe3-42f9-a384-aa2c3d037832
https://lh3.googleusercontent.com/notebooklm/AKYWMX8jeEAq-ntFUlLfMopuR7DSr9bs4stYa4e_uj2ZIuIybGgl55EnzftwG_jbY77HNYeCJByPQ-80InebI-zOQ7JK9UsJMxNna0lWVduOjLSqyWba9RsPrGSHrHNhj57tifUDzclXiw=w37-h74-v0
8351b21e-1ec8-425c-8f5c-28a43de877c7
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Iz5L-jsMRHOLRx35XMZ0SXIXMjwWiwLFT0e2wN-dTdPnmANkt8gPb-gqXenyl2rbizfYxX2IUgjHADwAiptSeUAeuFF9aU7px9MpjHdpvRyTXl3H_FYx219ne2fBmSD_sRdwr5g=w37-h100-v0
c9d4547c-5e59-4d9c-9ff1-82bd74395daf
https://lh3.googleusercontent.com/notebooklm/AKYWMX-gtVf4-2b-QEDVtTlc4_m0EwEsQ5PexjF5pWNl0vW6no7FxjjKw9UTyueExU68B-eL7-dWBDdGsc4tNdZv0GjlYsKfv8OyGbQqrEfWyBT0UIPBp1j6tuSa2_5Ibi55AGUN-M7l-A=w37-h100-v0
f2241fc5-4e57-4d2f-9c87-ee7995286406
https://lh3.googleusercontent.com/notebooklm/AKYWMX-snbu_dAE-GUhOR2qdHbcPsXDGBEUmzije_5D-VgzkbTBs_9Ru-Krhu0b_pxmd185YDnTI26iwhjupJ2mtC1nJr6wFrm8aWB6jBgXrhJLeUAgiZG4_03AhNV5veI38JssHbSM9=w37-h113-v0
62d065aa-1683-4519-b293-4bc8a5dc0886
https://lh3.googleusercontent.com/notebooklm/AKYWMX8QNzisK13UY803yzzh6RsmTdRtyKHSy4WL0I6JChfA8hhQhbZ6kQDA5rEVj0fWg1nkmZA9dCZz-BAYZBkeK7ClmZ2TrwiTwEXRlAo8VoCO1iiGGrmZOawPjbdhHCwyK8RVaVF2pA=w37-h87-v0
42f18e06-6ed6-482a-9840-fda121f08927
https://lh3.googleusercontent.com/notebooklm/AKYWMX9xFnUwwRUr7dkpYgn1PIrueGykrs8_WQ1MvLKIzh5UK52nQXkHCVUOsJ5UbodwpEckv7Ge9XACwQcTVdY65W_W6e3oKyzYWkk5PiFUAkRHgDpkPS-n3v3airuGfV_VimoNvneKGg=w37-h87-v0
12649b8a-5019-4a70-8022-5c62e9e87aa5
https://lh3.googleusercontent.com/notebooklm/AKYWMX-eYwDmYmHAcujAd0WrXzhBfmbA6AZQk2_0pBJ1qWcLFlPdqn_b4BoiySin16vzsOdBa5T0z7NYW8VfS2rkVOGZqoYqoU630Gt5IQXTWkLZGJBc6I9ZQ55a4M_Wx759BapaVV5wdA=w37-h87-v0
4755c7ab-0dec-424a-b0e4-4f3d94a98b00
https://lh3.googleusercontent.com/notebooklm/AKYWMX9QmZZYyy6ah7pR-TXcbjuxztHVJWIIhipWQsIHUTtHV7ViJj8WIOo_nigZjDsmNL24SFCw6zek2tBNhPILWxUNZ2sdHmsh8XxSAb2NIAwB3PSxd8dRIajVXXmcQdmlng10Mk87dA=w37-h138-v0
7cb187ed-d134-4b44-8ee9-99d16cd711d5
https://lh3.googleusercontent.com/notebooklm/AKYWMX-4OmKq5tVv4RE37u-mL82OfNdKOldsDZk2F-v-9fLEkMjWq8LoTMfL92JSuECejy_7BkzqK-zmFGlyQTtDxEv6emJdzQiDmD3C660N4d-gf651lt5rjyHAVkDsm-twvZs0ruQriw=w49-h87-v0
7ee27d7e-4fe6-45d8-b019-76a13f87a4be
https://lh3.googleusercontent.com/notebooklm/AKYWMX9eIT7hsAnmUCIFEh9i7O9vXUgkEOsxnsyKTOMj53qhFOr3Mi4luCNqpiPj4uHB9Qa7L1-pCG4RgqhkFMRfMZhjDvuqgy-w3MpM9ZdlX5sjESp2fMX7XtoNsKuFSMceJwWfp3EGWQ=w49-h113-v0
5a9f1b62-ca4d-4e0a-aec9-ba95bc685de2
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Jx3muMFA35PSYjQ20CCKFiwlMNP3M0rSSupwrG7TmxNFWsHa525oFHSBsFAob6J55vkEeAj6VJj0WWyFtTzKgrDgKLbM0oWQawLwPao4owDfUybcnkywLCH3D1xFMkhVqX0T9=w49-h74-v0
f0c594b1-0e8b-457d-9586-2cfe0edb1f20
https://lh3.googleusercontent.com/notebooklm/AKYWMX_UC3XAZ36StNhrWMEBQotDh9N-jEKwt1MaqWDFweaL6MAvxLeGYoMLknv6WMyQ4ymALK0K8Rj80qwYOLBYmjaLIn69nijfKDiGZ9uDnolGJVF5iDBVacZs8ESiVSPtWDAR9jYdjQ=w49-h100-v0
53953975-a55b-4f79-8593-4e838d5d91eb
https://lh3.googleusercontent.com/notebooklm/AKYWMX-j_TQSKyDUUsqgcy0drKDj9O0bDNnj9ENuRV6AdjwHruYnP0kDg2jNZOHsWmzYTIRXt-tSTnADmM8oB3646qeMgmudgoI3EEqQv2AV_mzl3h78tCiMAdmaV29tc2AkdlJHfnMbrw=w49-h100-v0
a582ca47-00d7-4845-9352-f7fcb8a46969
https://lh3.googleusercontent.com/notebooklm/AKYWMX-SIs4OoeID1C2xoRk2RTiWoUdKJXZyb2zsWzyTPqiYRaKxm9G1s8M_BGQfGGjrEbE5ap9uUh-NEu-QxfHLgtE6XxBXDBPX6E8LGTpWyR9XCbS884u33jN2yKIFb9g4KOFDbNmO=w49-h113-v0
81c1f593-c0ae-489e-8fa4-dd0ba98f8fe8
https://lh3.googleusercontent.com/notebooklm/AKYWMX-wKW-oMrGtslihrv9jHmCE78_DKwn9RIMMcPC4ZKJSAUlUx1wuPSzSeaFh5zNK-XM8BKtwzjdmlYV0VBn5DrV_L1sHRDaAtsCI4aWrSUUbkyrZLcmOWeELGco8A7NHGsn8MRn3cQ=w49-h87-v0
003d89b3-ea1c-4cdd-884f-677c73fd1785
https://lh3.googleusercontent.com/notebooklm/AKYWMX--B6Mc_8P3-bZr3Z2ocNcJQutbHGu9skep55fgCl333_aQSbQ7ffX_F6FFWhnFzQHhI_87J9aONp6LhTvf8qNYkTXrA05vQlKpOq8-_Ol24rv1tNQSsScdLfjcfkMdRmTR8EUk=w49-h87-v0
ac82af5d-e138-4345-9aa7-4e0a64518d58
https://lh3.googleusercontent.com/notebooklm/AKYWMX-UWAylEszR_y63I0K3gnp_3wRJ9rjE8vpuq-pt-3x39mNOFjO2abCo0vOB2VtOmcsUSxGmK58yHUM7cVWsB2_w_7Kkga8oXGe1r6rDVOASHJ0f0nUMXgiFw3_yP-VyP0ouvoJL3g=w49-h87-v0
626ede06-52f6-43a7-b672-2de17f1629b6
https://lh3.googleusercontent.com/notebooklm/AKYWMX9EpmjgN2BsJtFZgnPex9K59iIx04Xvk-oTaWG-J6PO2L0WNOwDgDE-KTyPuX-OBnUe_ltfOCG9yVLYXY3tBrcURAyXGbmqtZUVjAxH0hLR7542VwDpZ5PgIc65EmynOcYtC84a0A=w49-h138-v0
213c377a-d728-44df-a54a-88e708af6533
https://lh3.googleusercontent.com/notebooklm/AKYWMX9lc4NFA6OlxKFP0YsAyQzS06PiOzAchll8F1mmXLmQiekkbyt7sf_hv510ooeSmGBx7k08j8ofM9nL-grojm4E4S7Nb5s7JYLbYCaik4qVVQNHOq0zKK4L41LWctSZNS5IsHPn9Q=w37-h87-v0
917cf082-f0bc-4062-9acb-72130c9d9a1c
https://lh3.googleusercontent.com/notebooklm/AKYWMX-6UgrnLcDpUPZZmCRP0CnAfzHAtTS2VhvS5QSU7lp_iehbnem96vpuAsxt-jHMAoPe2XU5UU4TjsVBbZtJXPOIdqOgxlPbl-rxnt-R2ZzpeRa16RSAcvx5EUfhWSJByHogPc_szA=w37-h113-v0
a10ae959-fd84-42f4-800c-0cf9e46ed454
https://lh3.googleusercontent.com/notebooklm/AKYWMX9M-cb-eiq-6cBDA03Sgvk5UKmKguB2-kbbhDR5ViL22NJGA3bg-wDu3r4EZ8nDZmVVFJ2XmmAGABsUc4sXK_4PiUqzl5H28VJmQIMmz6J5-grtv4A2a_TOHL0R7ShiwkHlYjR4hw=w37-h74-v0
c564b3f3-8037-40ff-837d-dced449a3cde
https://lh3.googleusercontent.com/notebooklm/AKYWMX9-c7Ng1x9yoDNrrtJ5wHASpj4O8R7bp3OkY76VY4J6RRe2gDV8vz0BticaDg1oUyrAnXo-CnOPaD-YkYTqnaUZEDnmnltfSKEYWoaU1Fqgjvxk7YzzLsuvYkDKEcY2XMwulbbu_w=w37-h100-v0
8ac61eb8-9fd2-46bc-a60d-a0ab5bf51f43
https://lh3.googleusercontent.com/notebooklm/AKYWMX-r96JCEXcW6LhPxHP4S3wAHDLram1CVzfJv8jjFpEPwwdKA-5XCFnF_-UBRNAulVWA6zMfY8HrlWw5UPrgRZzF4Yoh3wfeGLsYw9nEGGGgGxs8A9h2cx_lmAVZRV9Pcb_0dbaesg=w37-h100-v0
bda89380-63ff-4243-8eeb-47644901a3f1
https://lh3.googleusercontent.com/notebooklm/AKYWMX_GZjhMlNl80_pdkgZXlIIqBuGoWlcF2r9wHNzTVCoIDESkJKHNtMZaJLyyRdEmEepplsuNCoec3-gRbkwy10JSZm_THlCykj3MGcyYQZQXciaNR6qGgj3kvwoYFcwaRsCKQkSIYA=w37-h113-v0
18670228-f7ad-4739-b086-3d685322f395
https://lh3.googleusercontent.com/notebooklm/AKYWMX9lFFC7fTqZFhJEPHEXtDR7V6-xEP--rytpqt6xYiXaoL0EQ1u48-2we8_5VP4hYlYLGqMna_6Tsuqr7i6eI18jylwoRTLG9tNm7HKk-kpYUS6c8jpOnJucMJMvPbASNwEkO5dw=w37-h87-v0
33d1c0e1-c7b4-4c31-8f5a-8aeae45994b6
https://lh3.googleusercontent.com/notebooklm/AKYWMX8PWC_CyGmR_vJ5g3_0bpm7XhFbBF9Xyrav7pHj2Wh_-DAyKDXTVjjo3YU8T9AKg8M67K0zvHZIZHSH8y9M4oWLg5pQgIdQxaecVA_zn4W1SGpGVsMwZWq4LSsWrzeArOpYjR7J=w37-h87-v0
21731e8a-6391-4cc1-8d39-fc5aad191848
https://lh3.googleusercontent.com/notebooklm/AKYWMX_aPiqjnQPWUmv5CCtCANDmzmAOo-0kSFSLWQoWmbIfP2z26XoVK2vty0eLKufOVPPNHbCbD60dAtPBQxs2Jw4rFd5AidYHN6qefyLjRxt7TrEKchBUMFwn11-8JnG7wmr8f5Jj7A=w37-h87-v0
ba36c871-73d2-4635-86b4-fc0123c4c2d5
https://lh3.googleusercontent.com/notebooklm/AKYWMX-tPWD9lKCWxneXHvm2TAq9LO1DV5c84OCOo3MIKXQrkUQEV5DYakbpiOHkqxDQg7lR3w1btAuE5T8DWku0a788JSeuHUgJsRirPic1QaqP1pQbF5h_7DHJd4BeISOoMO7t6cf61g=w37-h138-v0
3b0fa477-c395-4e6e-8c0d-38715c8802a3
https://lh3.googleusercontent.com/notebooklm/AKYWMX9C70cWahBdyaFcG-pEQeRQroha9bWV_38wJxsm0mx3o0PzxUAeFwi9vU9L6JdC4W3f7AyPLxzNGGUKGRPFKQzMv4I5oeqRSNkt9lF-qo1LHaL8EubHm95Wsa7PusRaxIj9OCnbhQ=w61-h87-v0
fe6cb466-7dc0-48d4-a895-ad08367da2e3
https://lh3.googleusercontent.com/notebooklm/AKYWMX8VwaZHIhbhcCBGdFDPxoJIGQiGvZFJxjMZoAapXiI7eczhpClK6g8_MyrnG1uF8lRKs8_bDuKoKFEglCM1ku7OxNb7a_qhv1GJOHf8YS6HGakR2oEECGXw9vyclItZ1F7Qo-vacw=w61-h113-v0
85671d66-ec8b-4346-8323-545bebc0e716
https://lh3.googleusercontent.com/notebooklm/AKYWMX9V_Flz4BLM92tL6JKtvwfOlApseC9stAFzO-bsiov2qdu1kwqESnRdRh_ugVJbqpJfJabzczcCbKIWFUOdaVu0aTdqegxI219-UrBgW-A6Kwm8GcJW3X1NSpF9bJPIVpyLGYvcoQ=w61-h74-v0
17a3fa94-1891-4312-b0fa-e765c8cbd862
https://lh3.googleusercontent.com/notebooklm/AKYWMX8iXGh5GGbZFeRYBlTEAe29iR7BGkzWuPIYq2ZgrChvj6HAIBQHAmbeRw8CObpFxAB0BL9pNjEhbkK_lkD5rmv4pqAJGNRxIVXmOYoNX0jh1R63lAYshmZGW6RbHtvTvxFIVyWM=w61-h100-v0
5cc724fe-5ec8-4a9c-bdc8-8ec7867e0711
https://lh3.googleusercontent.com/notebooklm/AKYWMX_lPKrdUcrulmQzUG-2VLBpWuCg5-4XS2YnvohaevLSeJOTz6RlRolV7P6EZ0_wjm89oMF6depRVMbV43VUtirHdUcwpDIOHqCmZnyn5q2558CWW1cAViLwugDT7o1gGGbIc7wH=w61-h100-v0
c275ccab-a64d-427a-a858-3db2c8fe3e6e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-arsFOPSo7gE9xKLUbCbkq-rTembOIE95Rs0aLAKgR_ubqnu4r5CANAHqKcYAeucBywWxnBtF_AgOfw6sBAAaZUAB6LgluVMs3fIBcLE_WW2d7YAL1vXEqcv5rJ7fQnhPZVBcB=w61-h113-v0
d7b8d3a2-72e5-4678-96ea-9da61aad6f21
https://lh3.googleusercontent.com/notebooklm/AKYWMX9COxicyhul-trChaDeHyOE9kAOmNHAWkBe2xrxrCmsT8uEgPHMZIpvVqhalIlXf_OUHbjohdqXZUMAOYD4UeS8bg7h_5QCdN4kpEp5R7-HP9uBvTZJdWt-0_jq-jLuiPOO7ZcbVw=w61-h87-v0
78f1d00c-1c7d-4fd2-a79f-8fa8fc74d635
https://lh3.googleusercontent.com/notebooklm/AKYWMX8t4W70klDxhQ1tCUAHn2JQuAcsUPOoE9aDmCsSy8ehJYj5Dy-y2YLPZg2Y-GFxpB-rKxpXRBRAO4Z10k5e-LjbH0rtSgMsWjbrFl0_s4j8rEKhNdcjclrTP1ZrIKMhlX53oY-nNw=w61-h87-v0
fd19622c-0643-4cb5-85dc-7a44ec22abcb
https://lh3.googleusercontent.com/notebooklm/AKYWMX80rY4h1mhrpRUUvhdQ1ephdbbzefOJgWWYXOSxmGuNtpcyidXNxPqnU3ks91qk1OEmDoLnwRTYnPH0v2lbEXBTWUB9v-huO4pFJ1HA6DMdenPO3UvlYsVTwT7EvUXc0y8NIkuz-Q=w61-h87-v0
548e667c-7340-491c-865f-0aa908f16812
https://lh3.googleusercontent.com/notebooklm/AKYWMX9vYAS_bf03RLXMdAGFJPqEzLGWe_6VK1-HUHTyrU9Fh9IYI57184blR8Hx6oHHYXo48KXkjVtC2Qvq8gBJjw7x3NCS96NJA-vudjc1iDJHEJDGiWzZew2QEoPUdGukxQF6f61J=w61-h138-v0
55ad0f5e-fa51-4784-ab46-4f431315f1a1
https://lh3.googleusercontent.com/notebooklm/AKYWMX-TjDOFpXzYSREbRzPhHiezRfn9p5VMwuNmBd8dUxNYy-5W3IJBITYZRanIEHnZ_uOJDD1SXLIHSYoBD-2VRQ_oJR-i36zXhBKvdkFyNbh6R5OHXBHVd4Q7J2M7CCwwOtzL1MVn=w37-h87-v0
80146121-b25d-4ef9-92ed-a8286eb14b38
https://lh3.googleusercontent.com/notebooklm/AKYWMX_AM6V7Nzea1TKgYW1uSM0roPrGH0nLGQpFR8Zwbkj59E94u0gZytmar_a3TPdhVTbA5--fu4iZZoTdBj2ukdPNxcVfprrl-rKTPhkIXwC1R1SXN6XBJ4IVKTNC8xEMJeVCqWgWrw=w37-h113-v0
6bbfd3d8-dafd-4560-b4f7-97614d648d2e
https://lh3.googleusercontent.com/notebooklm/AKYWMX_UX1FFz6PSiacj8EAMlsrSEucxxNS34vDxNjV7AHRBZImp2alvij6xmh3MHUdg9Ncjm_1yHgHjT1JUYKze7so4s1F5N_ckfI4HJ69Dsh7_2-z4XD1l2B8ecRONMDgCXBlaAkwcEQ=w37-h74-v0
aea2decc-f59d-442f-b11d-9f07e5cecc72
https://lh3.googleusercontent.com/notebooklm/AKYWMX8dCNGd_aZvZGtDmoGaPnHcuZ2nGpl5dzCOMTf5OOyVkaiUDrUZ79zane_WZsFpBeLuPHiP40i4g4aFgyRVAmQT_67nHOle7XY_9G_w8NP6wMyT189_ikPYYRnLcnpbSATN0qEhig=w37-h100-v0
28a22552-78ca-47e0-8cc5-e3026a85cc0c
https://lh3.googleusercontent.com/notebooklm/AKYWMX9UuqBeJFA3x6B5YxspQ5zzioR0_w2KeBa7rxnAdRMrisG5jaJe2ER6ZfV4Pqa8xGtFc0pigABL8btPtIAySdC0uceRAppkwRcGONZo_Q6gq4GyhRgPVs42uQM7sJ2-XRAOxs73wg=w37-h100-v0
c7abd7ff-0b35-418c-9e17-f5d38868468d
https://lh3.googleusercontent.com/notebooklm/AKYWMX-EAuYA_4hYKTYJwuw1826V_lA0Ez2-lEQ6H-tCi3H1bnn6e3rs4rL1Ug1dhWWvWAqTznIUOHt7n-cZfGohqr959dwngqFS4loO4Ywu_zY7fZ6eTEMmTJEUeJA8srni86yOEm2dDg=w37-h113-v0
cc851357-b7a2-4e80-90d6-1cb39944cc06
https://lh3.googleusercontent.com/notebooklm/AKYWMX_RWvyT5jUqbLBA_7LYgK394S-rUKIJxQHvTcyc3SuC5Mne2Htm7nAgHqUuMwGVC73otqs-bBWZGCLKGGVmBr5Jfy8rUJg_M43UCPIQIo3QxwytBSyX74oHgPTOseWXGYBmPmLvhw=w37-h87-v0
40441c55-312c-4a40-a6b6-dbda62c437e4
https://lh3.googleusercontent.com/notebooklm/AKYWMX_4Bm-JVyX_goslJkrp_38PrHHEo0DAaAv8FTn57_AcYPoMdD4AjXYP0gnahzKK_J2K3bQkN_SLuDox9M6HiYkwNQyTIm-PqquCPOSJcvTmFmkDZEpIN2DFPFK4LFJlvWD4kWEp=w37-h87-v0
2c7b5ea3-9f30-45a1-bc6a-9d78a80e3147
https://lh3.googleusercontent.com/notebooklm/AKYWMX87FuIeWwQFzctWVMNt-SVA5TJ1YP2BP76_s5ezs0PaRqgA2XCQouL4svwvwgo7xjE-zE-sXgZdDyJ_0HMP_JsTnGTRKZz_nyQnQ94Dcc4RwKCiFAm3ue_HaCU3niTqlE_7MvzD6A=w37-h87-v0
dcc35353-d8fa-446f-8985-52760529701b
https://lh3.googleusercontent.com/notebooklm/AKYWMX8bDnGZEou5tf-wEN3GblUwlnJoXsuzXIQvJXOVAMrA5WlAxg7ez0P-AW6aN8wha-XHXZc7BkvsFqxDY_6FRlffs7InRkLjfeSFjpTSls5y_lK60rJs6LzMuDvOBR_TnWhfEcQlkg=w37-h138-v0
e740ec17-4067-4584-8e06-87ca7c3bbae2
https://lh3.googleusercontent.com/notebooklm/AKYWMX_UQ7EG1uUt3_ne9azK9ZLdso8-17oXG_e-lyRTxcbptiZig15WKVNq8giqC3R8F2mwVXn05gtUVrXWwBVHl-LC7Q7pP1BFef4jve9oaroDZB6i-0QuWxb9BgNUxegeoffoj1-HGw=w49-h87-v0
28d0b450-066b-4150-bd47-50e90ed9fb0d
https://lh3.googleusercontent.com/notebooklm/AKYWMX-cCxRrX2R4iQ_lWhebcUdJ3-P0vfyzpjAj-0TPhaPe7DpFRSuISV3i62R_A-NkjOaON78riOqjSku2BKIMN8jx_vhEGinzE0VaSjoD7Tp-BiJeRW0JPSz6uULJR7K-kb6A3ki0lw=w49-h113-v0
dc3b7c73-7a0c-42ee-bb14-8c3f74c9f439
https://lh3.googleusercontent.com/notebooklm/AKYWMX8UDAv9UFco42VTI_EV8cXd9K8PWN5KLto01f9RMRjoDTG8nXMMogBeat1-UvGwhrVwr3aeASd0ojzWiLcTC7aFNNc0fVpSRN5nsRj3h1eTv3amakodcxszj1g_MI1-E2sSiuO2=w49-h74-v0
c9e70349-8b43-4bbb-83de-4c332f5ca67c
https://lh3.googleusercontent.com/notebooklm/AKYWMX-IPiC7aA7it4zpfJzx_0tXdSPnJql_KMXR--vXoyacXTh68yEexgOO8VthNFFSibRUkP5YLpBJCjotk6enwxVtRFhyKgCIh_s8jbEVgbdG0NfL3weRzyn1yZAGDHbQeChSv4FG4g=w49-h100-v0
d7298f7b-c52b-4d4d-bd99-c29479a7c893
https://lh3.googleusercontent.com/notebooklm/AKYWMX_fFxmarAndg5bV69iCpAztXBAdU7Oxty-XlylpekdbSliOKaM8UA7SedGMfmOMMsl54s0BPJ2nCXUzLrlxMtX1JUT6U0kR2pE8et6aaFiQ_Kx3Bd_0oK4MspBJwtyIN1-tPVYOiA=w49-h100-v0
7bcc54a3-23f7-4b80-bca5-143cdb6bbf52
https://lh3.googleusercontent.com/notebooklm/AKYWMX8W37yt856pLnTTpM-_6KWTRuFxni-RkuVTKs7M4yC8myKd5dY0ZkVq4imQHbtIrGqqsRkmJPJLS4CQmIAqaSOG4Kyrtvq_a6NG_9JcnQmZwIJkMAuuk1-BAlMZsSCGGm-H4qbh=w49-h113-v0
cb87dd61-f9dd-49b2-bce2-f6ecfd76167b
https://lh3.googleusercontent.com/notebooklm/AKYWMX-tThIoovOXQjWXlkCgr9gceTA2FnV34rACGmmfZFZ3dSRxrq8g05rWgCl3hmuSPqK39vTAw1uvysLQ5F1IJmucXtuFWZeNJ3hKQmnY7vFvhqcTo8oxxVzX0q8spFyB9aNtbUWS6w=w49-h87-v0
e33200d2-2f94-48cd-a2c9-85a385a84681
https://lh3.googleusercontent.com/notebooklm/AKYWMX9OVTlc7IT1hyBHRAsClzPFXAQbQDT5zhvG_UZGiAnLiSJUG19nAG0dejZKVSQjaYZvTO1H6I-ZNUrZ3X0ehRIUhZGwub9q118yehtUOvmF48fzbgqjsGXj4Q9uvZHDNcF7_BnMQg=w49-h87-v0
ea03c492-43de-431d-92bd-2e6d7da0c373
https://lh3.googleusercontent.com/notebooklm/AKYWMX8XHv0ZSZO4x-k_DdMV6ztUVc77vURfK25Mj58PeavVx1qs3NG0xizxaxgrXHWM1KcaPuHQuGsAmN4Hq_zA2ra0wHWWMjAoentEXRD6qKinIzhkGbvhWDQZFKf95AVp1S7YoPjD=w49-h87-v0
c5852659-e3bb-4ff8-806c-e6721f98002f
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Y9Iu75urAclnUqRiUt26Jn5ATMTH2RBYlyT9tBe8JgolrCrUG9YOA-cTIBvpBK6y8HVkFea36FZ4N20GBh-AmWrbdO3-1A0-1pLAKNliqGRU5nbitV7lIfsb1Nu8iYgFkoEHStQ=w49-h138-v0
c2323381-7eef-4523-88ed-21fb962fd923
13.2 Evaluation tasks and datasets 
Below we describe the different datasets and tasks that each method was evaluated on. SNo. Paper Tasks 
1 GPS (Xu et al., 2022) 10 unseen tasks from the T0 benchmark, which span: 1. Natural Language Inference: ANLI R1, R2, R3, CB, RTE (Nie et al., 2019; Dagan et al., 2005). 2. Coreference Resolution: WSC, Winogrande.(Levesque et al., 2011) 3. Sentence Completion: COPA(Roemmele et al., 2011) , HellaSwag (Zellers et al., 2019). 4. Word Sense Disambiguation: WiC (Pilehvar and Camacho-Collados, 2019). 
2 GRIPS (Prasad et al., 2023) 8 classification tasks from NaturalInstructions (Mishra et al., 2021) 3 Instruction induction (Honovich et al., 2022) 1. Spelling, 2. Syntax, 3. Morpho-syntax, 4. Lexical semantics, 
5. Phonetics, 6. Knowledge, 7. Semantics, 8. Style 4 RLPrompt (Deng et al., 2022) 1. Classification 
2. Text-style transfer 5 TEMPERA (Zhang et al., 2022) Classification 6 AELP (Hsieh et al., 2024) Big Bench Hard (Suzgun et al., 2023) 7 APE (Zhou et al., 2022) 1. 24 Instruction induction tasks (Honovich et al., 2022) 2. 21 BIG Bench Hard tasks (Suzgun 
et al., 2023) 8 AutoHint (Sun et al., 2023) BIG-Bench Instruction Induction (Epistemic Reasoning, Logical Fallacy Detection, Implica-
tures, Hyperbaton, Causal Judgment, Winowhy) (Zhou et al., 2022) 9 BDPL (Diao et al., 2022) 1. MNLI (Williams et al., 2017), 2. QQP (Cer et al., 2017), 3. SST-2 (Socher et al., 2013), 4. 
MRPC (Dolan and Brockett, 2005), 5. CoLA (Warstadt et al., 2018), 6. QNLI (Rajpurkar et al., 2016), 7. RTE (Dagan et al., 2005), 8. CitationIntent (Jurgens et al., 2018), 9. SciERC (Luan et al., 2018), 10. RCT (Dernoncourt and Lee, 2017), 11. HyperPartisan (Kiesel et al., 2019) 
10 Boosted Prompting (Pitis et al., 2023) GSM8K (Cobbe et al., 2021) and AQuA (Garcia et al., 2020) 11 BPO (Cheng et al., 2024) Generation: Dolly Eval (Conover et al., 2023), Vicuna Eval (Chiang et al., 2023), Self-Instruct 
Eval (Wang et al., 2022b) 12 CLAPS (Zhou et al., 2023) 13 Directional-stimulus (Li et al., 2023d) MultiWOZ (Budzianowski et al., 2018) 14 DLN (Sordoni et al., 2023) 1. Mpqa Sentiment analysis (Lu et al., 2021) 
2. Trec Question type classification (Lu et al., 2021) 3. Subj Determine whether a sentence is subjective or objective (Lu et al., 2021) 4. Leopard (Bansal et al., 2019)- Disaster Determine whether a sentence is relevant to a disaster. 5. Leopard (Bansal et al., 2019)- Airline Airline tweet sentiment analysis. 6. BBH (Suzgun et al., 2023)- (Hyper, Nav, Date, Logic datasets) 
15 DSP (Khattab et al., 2022) 1. open-domain question answering (Open-SQuAD) (Lee et al., 2019) 2. multi-hop question answering (HotPotQA) (Yang et al., 2018) 3. conversational question answering (QReCC) (Anantha et al., 2020) 
16 DSPy (Khattab et al., 2024) 17 GATE (Joko et al., 2024) LAPS (Joko et al., 2024) (1. Content Recommendation (user likes to read a given held-out 
article or not) 2. Moral Reasoning, 3. Email Verification) 18 GPO (Li et al., 2023c) 1. Sentiment analysis - Yelp (Zhang et al., 2015), Flipkart (Vaghani and Thummar, 2023), 
IMDB (Maas et al., 2011), Amazon (Zhang et al., 2015) 2. NLI - MNLI (Williams et al., 2017), ANLI (Nie et al., 2019) 3.Entailment - RTE (Dagan et al., 2005), 4. CommonsenseQA - SocialIQA (Sap et al., 2019) 5. Multi-turn dialog - DSTC7 (Gunasekara et al., 2019), Ubuntu Dialog (Lowe et al., 2015), MuTual (Cui et al., 2020) 6. NumericalQA - DROP (Dua et al., 2019) 
19 PACE (Dong et al., 2024b) BBH (Suzgun et al., 2023), instruction induction tasks (24 tasks) (Honovich et al., 2022) and translation tasks (en-de, en-es, en-fr) 
20 PREFER (Zhang et al., 2024a) 1. NLI tasks including SNLI (Bowman et al., 2015), MNLI (Williams et al., 2017), QNLI (Rajpurkar et al., 2016), RTE (Dagan et al., 2005) 2. Classification: Ethos (Mollas et al., 2020), liar (Wang, 2017), ArSarcasm (Farha and Magdy, 2020a) 
21 Promptagent (Wang et al., 2024a) 1. BigBenchHard (BBH) (Suzgun et al., 2023) - 6 BBH tasks that emphasize a blend of domain knowledge 2. Biomedical - Disease NER (NCBI) (Doğan et al., 2014), MedQA (Jin et al., 2020), Bio similar sentences (Sogancioglu et al., 2017) 3. 2 classification - TREC (Voorhees and Tice, 2000) + Subj. (Pang and Lee, 2004) 1 NLI(CB) (de Marneffe et al., 2019) 
22 Promptboosting (Hou et al., 2023) Text Classification 23 Promptbreeder (Fernando et al., 2023) 1. Arithmetic Reasoning: Benchmarks: GSM8K (Cobbe et al., 2021), MultiArith (Roy and 
Roth, 2016), AddSub (Hosseini et al., 2014), SVAMP (Patel et al., 2021), SingleEq (Koncel-Kedziorski et al., 2015), AQuA-RAT (Ling et al., 2017). 2. Commonsense Reasoning: Benchmarks: CommonSenseQA (CSQA) (Talmor et al., 2019), StrategyQA (SQA) (Geva et al., 2021). 3. Hate Speech Classification: Dataset: ETHOS (Mollas et al., 2020). 4. Instruction Induction (Honovich et al., 2022): Tasks: 24 datasets spanning sentence similarity, style transfer, sentiment analysis, and more 
Table 5: Tasks covered in the different papers
https://lh3.googleusercontent.com/notebooklm/AKYWMX_G7Z1FIGAM4LrWBH3tKM_EzZr492BOCAeZTd5koxQ6kBJMZAAFE0kSs3JV6FAzfvTU64rq1CnZkC0Xq5BDIxiTdaeQHxifpJISKbG2dXLG1hNJ1CwzrYk4fAK6dKzE8Je_QC34mw=w33-h79-v0
357c18c3-6c9b-4603-bc91-b7804cc7ef93
https://lh3.googleusercontent.com/notebooklm/AKYWMX9l-90b4_aspBO-tTO4yKiIxoap7DiLfGpL0h83RxwBxQBmh8wFfrXZkljxQxidimqHcUSvTaGgloScjXE95lbOIv5F6cnVcSNZwPovqFQuPhemJB7Rr8mWCqcDo3sYUZ8pWePW-g=w200-h79-v0
554d79f2-582f-42a7-8513-b638ebdb533b
https://lh3.googleusercontent.com/notebooklm/AKYWMX_n95aFd1jy4lmEGNUhUgF-kyxAV2FauIfB-YKKADlS6syApUNXYGmVSoAX9afYemzRZWhfcryrgl-SH8_2KaKrjAhyVZu66DVpSFubtSb6XrNKWZ38L8MPJUZqIoTrkdY2-lZytQ=w406-h79-v0
74ff661d-07bb-459c-88f5-41ea7fd4ccd6
https://lh3.googleusercontent.com/notebooklm/AKYWMX9NPgryFmD87IMPB-ikv_B0yt9ZXBYms3NThTfbCoEsIA-5w-hRMmWgQnLfjLNbnjd6xwY5joNTow4okV_96TSRXjcNXHr5_sTaBIWhZmt0sZEcrd9D5gdNDQQvD2_UG7htcWSqkw=w33-h52-v0
e9d95f17-cfd5-4d2e-b2c7-5ebd46f264b0
https://lh3.googleusercontent.com/notebooklm/AKYWMX-83bG2PKi3K4ghPNrUuXrfVBrhNF61mletutBe_Fx6DHwcbvsXHq_owx271agG0i2sOdPa60n1gI2FLzfeFkOwR_jojmg5RwWWm2-8enZbXpUGxrUPvFb4WbUQYKfeYSCcKda2-A=w200-h52-v0
9031d318-6cd6-438e-888d-92ecefddda31
https://lh3.googleusercontent.com/notebooklm/AKYWMX_s8UBgu3wAstBRn_DUQMjn0KNITJeXXqv0G6NuGll58BbOYMeoZtmhFJC21qhzGuc-Z1uDZ22jxxWtyC4KH22ZBmeiiJgW7h7gyGQdwnPspoWXZW9Qgwgl1ykgjOOZu22olSSV=w406-h52-v0
ef27ed63-7c64-4378-ac69-f8e2bef92a02
https://lh3.googleusercontent.com/notebooklm/AKYWMX_J5Sp27Xch9dDqrOzZ4aalx2NlLWFM2A24TWnJ9lZ-WDKyOT4IepMjRtAtrp-hUq30UONP_xl9LXCMSXifyJfCn0TsqwvDBlbPxrjaxa41a8tEDVCWPa9RTJD5zcW_sXZH0Z16gA=w33-h79-v0
c7dbe778-921b-480d-ae4b-09346f853950
https://lh3.googleusercontent.com/notebooklm/AKYWMX_JER6_9-rZp_1-NdJ7ozvqkQborwKdNHgNZuvxDlEw3Q9TubOxDjmQLuTQ1uaWgf8FdN-VJRREt7UyvqswwrIb32MgcSZUT6xPbWhF8Mgws6vZvPuNpoxf7lxgVUtcaSC1Qb3u0A=w200-h79-v0
07e5820e-02dc-4bc6-8b83-3d36571a5bd9
https://lh3.googleusercontent.com/notebooklm/AKYWMX8SvEktrOb7GcZvShJ9Wlh9G5eGDAUVw1zQ02NzU5vJfXZ6-o1_1yXI58jo6PUm6XjTCXF9sD2l4mPv_w-5PZ8Z-S3gRApv8O_YfttPJXRVmcDIYQ4wHPmcp-2QLLuVqI5MDx6y=w406-h79-v0
b286a1a3-21f3-43e1-8ea7-14d2fd9f3638
https://lh3.googleusercontent.com/notebooklm/AKYWMX-730W5FNxSCLZVB_sUcIeKjYtSxjh0FMJvBat5RM8PtiFHzLbfpzU48vvtxrZ36PDVt9nhou5_WOhO2o9h78VeyP_3PmOkVYnIzv_OUONVUA9nOUaMCwnFrCVJpE2CXh91kNMEiQ=w33-h39-v0
fe49ac31-3e37-424c-82a5-61c919854207
https://lh3.googleusercontent.com/notebooklm/AKYWMX-GAQPWh66bvpIOkA6BBa1lBlLjI8HI29KD1YBf7LXETtSAAjnIsLshdf5j9nDa-IMXHXiQnPwFibZCKxDyXFSh8GzhlwZkdTmCWORE-Y7OLFYl1aYQ6Qugsb4X_iC_oWmVk4Up=w200-h39-v0
c1d71e71-ceae-4c53-a66d-8c823e9e660c
https://lh3.googleusercontent.com/notebooklm/AKYWMX-8FrcSWWRSwZXHWdLzzjLRPF8riwKYJKuNLIaCmMK8y8NB275SEu5VHz9DCFAF_kY4jQuA5a2jnTiQyM6x3xSUdMfN3DKVPY1tSOEgv2Zt-CyRajIWA_sUEe26PPlA-KvK1jaN=w406-h39-v0
0c2fa5c5-b6e8-4aba-a8e7-e9bd8fad4660
https://lh3.googleusercontent.com/notebooklm/AKYWMX90sgoEL_FThxLxsBudvtV7eHwmW7ZrW1XAN5w3q_996DjlqBmJzzgDs2B7Lb0h4nHreR1ZBMrRJwXTC59kcDS28uM7z06D3pJ7oYNTVQaZWQM2CFVYWUPV1-H_9eanGzwUfDmI=w33-h92-v0
a1d0592a-ec8a-4f1a-919d-7aa541e35122
https://lh3.googleusercontent.com/notebooklm/AKYWMX9ROTIOfptzTcmHlLtBNqOixO2D9Sj21WSMwl4RBNg-ryRj1FBAsIi3W0riTiCUxGzf2oxVIyPBvHYWWbR_tT_vSlQIPNzNHMmxGo7dXUShfFyVmtPM4s8WSnGds0_c295HPGcQvg=w200-h92-v0
ef47a571-d5bd-4622-8c67-077182a358f7
https://lh3.googleusercontent.com/notebooklm/AKYWMX9m7KzRscTs2xkVkRALMkbYiT6rG0N-14EDje40O5LiS3Rex3yiN937wIG5-AHpb_Ts0HuuLhelApoKsMiKuEgkKghG6DzDCCjrTucxVMA84yNzPdprpsaykVtayBCKeYO_IP9YRQ=w406-h92-v0
84b68462-0256-4956-9919-287f7685f1f0
https://lh3.googleusercontent.com/notebooklm/AKYWMX_4dopFmyoaZUcRCPBR3ApQ607CK5YybmFxQqQ5RzKSsvrXAhwr0ZZeV8rUiSCHMU0iIy1ki0VBgbrA6GF8wEsi0j5FaGCxIPBWs_KBGylvaDjwobYL490Lnwlco2kwTF-nuXz4qw=w33-h52-v0
1fe98832-d914-4f13-83aa-58436aa82a66
https://lh3.googleusercontent.com/notebooklm/AKYWMX8uNx79ZolSUFtF7NJT2l3kfYRLTWKK1zo85BNJY4P1q7oPKpxM-8Wt3dn8dkz7wGhmlJwT1cDvFoXZouL2IvHPwGkRlJICOi5zj6vjoPGh3n6Rih9AY9Alb0ptte4PBGCCjinfFg=w200-h52-v0
df72c2cc-0e7e-436c-b76a-21004897e5db
https://lh3.googleusercontent.com/notebooklm/AKYWMX8c6kj9djre8X6bAFQCkuboGDX0GmtRUr1ktylVEk-3ID8EOG0GMZU9kEYdcpSLa3xdQAP7zsGWbGwM5_iub1jRSdfTEsH-L8nax7bXU2DuRov2cI6nLynHY_WzGwnglqn8kA54FA=w406-h52-v0
ac922537-96dc-4016-9beb-bb0705faf469
https://lh3.googleusercontent.com/notebooklm/AKYWMX9QDLlkv4qA3tS5LLSiGQbsU83DffAY-Kk-mkjkKX0VJTdXzHS7NEIq07PgVmeZJi66AdTXrlaBEhoHQg-91g9UPlKkBRbcrGcOtuuqnqNZM4Q5PqUGOX-cNOfbgCQ04kKvaztE=w33-h79-v0
cb3e3264-51f7-4e97-aad4-942695155960
https://lh3.googleusercontent.com/notebooklm/AKYWMX-ggnzXw0--OPD1hAH3h-b1DvI6aNh-2zTTgkXOkWxzhtBzqymXqHeh-Q0LdpA5ybZPSDmuPzKEXPfv4PObENapLRhZGzOAD4U3zCdAsu-FgwQhmNS37q4g5FtRxsdOjmamHqyn0w=w200-h79-v0
073630b6-ef29-48a2-9524-e2277345cfea
https://lh3.googleusercontent.com/notebooklm/AKYWMX9DFDdGDwlaTZuFzg0RMuoOIkj97lKif_J4tWNfTDD0OdfCpb1mM-sjgwz3ybyTy1Exk1gCE8sk_E_7bPTJVYbgTX_YPCM7odzLM0rDTlrZpedPjZ6HMZTCnL95JHoeOkEWadESEg=w406-h79-v0
ef388e26-c914-4b51-bf91-514329f6c53c
https://lh3.googleusercontent.com/notebooklm/AKYWMX9gSrWMRWaBBtjNgTm0BnfCNnErLNwEQ787T2mQ8dm_LJdbVvzVaRzy1co8vEG-UACAD_JQzMzRoSrRPgMtiIC6in-OSnGa8Nc5_nqBgF00G__Lw41wXum6Ygtmp8-fuLe9cp3i5g=w33-h118-v0
72779dc5-292f-4c5f-bb40-b0cf769bc480
https://lh3.googleusercontent.com/notebooklm/AKYWMX-RnsJTjG17Tf4aEHOLjCyOf6E_OnUlwSjsEQ9GtKx0vxIYc7X7YRf7YfvbswTEI8Wi67k-wO-ZXkXDaBlEBKmx5cO0VjESgrAoHsuwPWpi6k7ZzKytRqEj2sA_Lebl7bIDgabG=w200-h118-v0
7c6f3a6c-b2c1-4b37-a938-bb3da6cde5ec
https://lh3.googleusercontent.com/notebooklm/AKYWMX881FI2rT0LpOa4aX3qN9n6FRUGK6LNf-QSwuu-GNyFxHZqzNr8qNZbFGpzAcijqFalptFuDdtHyjVzoQ44i2gRzPQX7D7WAqaBP-Vzv-t9cAxgnFIrly69Wbu8i7DMl4iafZtMqQ=w406-h118-v0
38fe41d0-e664-4b39-9f29-8c43236eeec8
SNo. Paper Tasks 24 ProTeGi (Pryzant et al., 2023) Jailbreak (Pryzant et al., 2023), Liar (Wang, 2017), Sarcasm (Farha and Magdy, 2020b), Ethos 
(Mollas et al., 2020) 25 Random separators (Lu et al., 2024) 1. SST-2, SST-5,(Socher et al., 2013) 3. DBPedia (Zhang et al., 2015), 4. MR (Pang and Lee, 
2005), 5. CR (Hu and Liu, 2004), 6. MPQA (Wiebe et al., 2005), 7. Subj (Pang and Lee, 2004), 8. TREC (Voorhees and Tice, 2000), 9. AGNews (Zhang et al., 2015) 
26 ABO (Yang et al., 2024b) BigBenchHard tasks (Suzgun et al., 2023): Object Counting, Navigate, Snarks, Question Selection 
27 Adv-ICL (Long et al., 2024) Summarization (XSUM (Narayan et al., 2018), CNN/Daily Mail (Nallapati et al., 2016)), Data-to-Text (WebNLG (Gardent et al., 2017), E2E NLG (Novikova et al., 2017)), Translation (LIRO (Dumitrescu et al., 2021), TED Talks (Qi et al., 2018)), Classification (YELP-5 (Zhang et al., 2015), WSC (Levesque et al., 2011)), Reasoning (GSM8k (Cobbe et al., 2021), SVAMP (Patel et al., 2021)) 
28 AMPO (Yang et al., 2024d) Text classification task TREC (Voorhees and Tice, 2000), sentiment classification task SST-5 (Socher et al., 2013), largescale reading comprehension task RACE (Lai et al., 2017), medical question-answering tasks MedQA (Jin et al., 2020) and MedMCQA (Pal et al., 2022) 
29 APEER (Jin et al., 2024) Passage reranking 30 APOHF (Lin et al., 2024) 1. User instruction optimization using tasks from Instructzero, 2. Text-to-image , 3. Response 
optimization 31 BATPrompt (Shi et al., 2024) 1. Language understanding, 2. Text summarization, 3. Text simplification 32 COPLE (Zhan et al., 2024) GLUE - SST2 (Socher et al., 2013), COLA (Warstadt et al., 2018), MNLI (Williams et al., 
2017), QNLI (Rajpurkar et al., 2016), RTE (Dagan et al., 2005), MRPC (Dolan and Brockett, 2005), QQP (Cer et al., 2017) MMLU (Hendrycks et al., 2020) - STEM, Humanities, Social Sciences and Other 
33 CRISPO (He et al., 2025) Summarization, QA 34 DAPO (Yang et al., 2024c) 1. Sentiment classification, 2. topic classification, 3. News, 4. TREC (Voorhees and Tice, 
2000), 5. subjectivity classification (Pang and Lee, 2004), 6. Logic Five, 7. Hyperbaton, 8. Disambiguation, 9. Salient, 10.Translation 
35 DRPO (Amini et al., 2024) Alignment benchmark 36 EVOPROMPT (Guo et al., 2024) 1. Language Understanding: Sentiment classification (e.g., SST-2, SST-5, CR, MR (Socher 
et al., 2013; Hu and Liu, 2004; Pang and Lee, 2005)), 2. Topic classification (e.g., AGNews (Zhang et al., 2015), TREC (Voorhees and Tice, 2000)), Subjectivity classification (Subj (Pang and Lee, 2004)). 3. Language Generation: Summarization (SAMSum (Gliwa et al., 2019)). Simplification (ASSET (Alva-Manchego et al., 2020)). 4. Reasoning (BIG-Bench Hard Tasks) (Suzgun et al., 2023): Multi-step reasoning tasks from BBH, such as logical deduction, causal judgment, and object tracking. 
37 FIPO (Lu et al., 2025) 1. Generation: GSM8K (Cobbe et al., 2021), BBH (Suzgun et al., 2023) 2. Multiple Choice: PiQA (Bisk et al., 2019), CosmosQA (Huang et al., 2019), MMLU (Hendrycks et al., 2020) 
38 LMEA (Liu et al., 2023) Traveling Salesman Problems (TSPs) 39 MIPRO (Opsahl-Ong et al., 2024) 1. Question Answering (HotPotQA)(Yang et al., 2018) 2. Classification (Iris (Fisher, 1936), 
Heart Disease (Detrano et al., 1989)) 3. Entailment (ScoNe) (She et al., 2023) 4. Multi-hop Fact Extraction and Claim Verification (HoVer) (Jiang et al., 2020) 
40 MOP (Wang et al., 2025) 50 tasks comprising of Instruction Induction (Honovich et al., 2022), Super Natural Instructions (Mishra et al., 2021), BBH (Suzgun et al., 2023) 
41 MORL-Prompt (Jafari et al., 2024) 1. Unsupervised Text Style Transfer: Shakespearean data (Xu et al., 2012) 2. Supervised Machine Translation: iwslt2017 (Cettolo et al., 2017) 
42 OIRL (Sun et al., 2024a) Arithmetic reasoning: GSM8K (Cobbe et al., 2021), MAWPS, SVAMP (Patel et al., 2021) 43 OPRO (Yang et al., 2024a) GSM8K (Cobbe et al., 2021), BBH (23 tasks) (Suzgun et al., 2023), MultiArith (Roy and Roth, 
2016), AQuA (Garcia et al., 2020) 44 PE2 (Ye et al., 2024) 1. MultiArith and GSM8K for math reasoning (Cobbe et al., 2021), 
2. Instruction Induction (Honovich et al., 2022), 3. BIG-bench Hard for challenging LLM tasks (Suzgun et al., 2023) 4. Counterfactual Evaluation 5. Production Prompt 
45 PIN (Choi et al., 2024) 1. Classification: SST-2 and etc (Socher et al., 2013) 2. Unsupervised Text Style transfer: Yelp (Zhang et al., 2015) 3.Textual Inversion From Images: MSCOCO (Lin et al., 2014), LAION (Schuhmann et al., 2022) 
46 PLUM (Pan et al., 2024) Natural-Instructions datasets v2.6 (Mishra et al., 2021) 47 PRewrite (Kong et al., 2024) 1. Classification: AG News (Zhang et al., 2015), SST-2 (Socher et al., 2013) 
2. Question answering: NQ (Kwiatkowski et al., 2019) 3. Arithmetic reasoning: GSM8K (Cobbe et al., 2021) 
48 PROMPTWIZARD (Agarwal et al., 2024) 1. BIG-Bench Instruction Induction (BBII) (Honovich et al., 2022) 2. GSM8k (Cobbe et al., 2021), AQUARAT (Ling et al., 2017), and SVAMP (Patel et al., 2021) 3. BIG-Bench Hard (BBH) (Suzgun et al., 2023) 4. MMLU (Hendrycks et al., 2020), Ethos (Mollas et al., 2020), PubMedQA (Jin et al., 2019), MedQA (Jin et al., 2020) 
49 PROMST (Chen et al., 2024) 11 multistep tasks: 1. Webarena, 2. Alfworld (Shridhar et al., 2020), 3. Scienceworld (Wang et al., 2022a), 4. BoxNet1 (Nezhadarya et al., 2019), 5. BoxNet2, 6. BoxLift, 7. Warehouse, 8. Gridworld 1, 9. Gridworld 2, 10. Blocksworld, 11. Logistics 
50 Reprompting (Xu et al., 2024) BBH (Suzgun et al., 2023), GSM8K (Cobbe et al., 2021), MATH (Hendrycks et al.) 
Table 6: Tasks covered in the different papers
https://lh3.googleusercontent.com/notebooklm/AKYWMX-cJAMOCOzqUYm1mFi54oNuJDYa9qbX2YqP44BnTOFSuC47gFmZsXA8FPxG1jx7YT2KqG8LbiBjxo3BYfEwsKiSrB2xsy3SSSyssNbgOYCzVhXWxL69_a5Fh7tA0l_-nUDGTpAO=w33-h40-v0
5e5e1874-5597-45ae-a8d6-f8ba06a937ed
https://lh3.googleusercontent.com/notebooklm/AKYWMX82jR_1xYToDn8BWlxKOAUS_eao1PCQdriZzOUpS2fEMQkcBGJnH9v5EVxojwrTtheZn3JKYLYKXgcOawsK20lYycln8okoNbIk4nk8g-MZpmnAunqS14lpVykLYQAr_aqrWuQXQg=w193-h40-v0
9a06810b-ceb0-48b9-b93f-fa1c1c32a7b8
https://lh3.googleusercontent.com/notebooklm/AKYWMX9IdNul5xWqf_quwx5tm91tek4hG_G_vLkf_xpWngrF-og4t6WhDCKuTWoVED2eEmgSWmzRSmRnnDBoFOZc0ZQ7YCW1kQfcaFxHwwXLOzBKAvbEHy4U_FGpGjyJtptHy46bnEmuyA=w412-h40-v0
cc417c33-8cc1-4aa4-8478-ebbf8d7b3c7e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-Mq6vrhIdlnMrq4RSJ1M4guSeZHtmdQRRofedCc9UXI8zyDmFsBARBCRjspCRAyZnABQX2f8raQ53jW_Ipj3n13C0X91Men_-HRl-b8EdHNp1fUCqiCYapPhMJ3ZQwSG66Pg2LHQ=w33-h66-v0
54da5f7c-6838-4cd3-909e-52725c3a327d
https://lh3.googleusercontent.com/notebooklm/AKYWMX8TwTefI2qxOanXJtAeULhVMce5vpFGe3oEPf1CQmbyI9ILI4ydX_YlZ4zqBg0CJVZsjE-DFUEJYzLYqNKdfNQa8ub_MYr4N4DKoqxR29kGXr1D7e_Jo3Qb7vRV6NwSxxRkKLh_Xw=w193-h66-v0
fdea2616-6358-451f-96cd-e4b28ade20f5
https://lh3.googleusercontent.com/notebooklm/AKYWMX9kJFFR_7c2d1j4VeO5vuOT-5ydfdMUXoh1yeHr_1s_erF-idjJR9l886hGiau1wk0RrO6Vlf5ohXDTbVxwmw3US6gEUCDhaS0DVMa_3Fyu87xRGwVvYHNBZBv_lrRl9_1tFHPmqg=w412-h66-v0
c825aad6-8a70-47df-94d0-454b8fcf2548
https://lh3.googleusercontent.com/notebooklm/AKYWMX9RoBqi--QeSdLxm5ZvRJmEk7fnISj99H8kqODNEiCOgCZ-tZYsoQj6GBqlif7HJOM9hkVMklWOC3upxWZ70fcuqSsMcQdc3kDnH4_-Hu6osGZrA1zy_wexp5XnIp5_Ly6tUcI2kQ=w33-h53-v0
f0a80f43-8325-44a6-8c9d-87b5cac5f347
https://lh3.googleusercontent.com/notebooklm/AKYWMX-r3v8pdkCvOVQKXZGgBiIGEx0oGx2AB4o_booQVY6iKgFCYgVDQg06fE0YycoGjEsuiyTptdvyvJ5tn7asJqf2hNcqbQpI6vHr5eJJLDy7NLNn-4nk-jO1inX7dftP1JJtdSkODQ=w193-h53-v0
ab11b5f7-8c25-4f75-8c3d-138c4f652159
https://lh3.googleusercontent.com/notebooklm/AKYWMX_auf2TUk61tTHBvSYwoHAm4uU2w7Tskbh2tG4ciDvYZuhsTwRSm4KdmgRx5GP9LK9KN8mEU14Vmq2-Em98ijodA6OnN89ZSnX_0gQxDB0MuTDz0o69lWF9JnqTu_6qQGX481j5tA=w412-h53-v0
bf6162cc-b03a-4284-8b27-d788c714399d
https://lh3.googleusercontent.com/notebooklm/AKYWMX8UBkqDLkHVIhZYzYa3jh5PhEe_FPkFmSFCTLGBF-jBtZfoNrJBn16uJn0k1JEENlJXY6A5y5R6W5KR28DR2WNbw3ljm5b4cWa6JV884aRaHTznAsI6-hr8I8e3ayFaKI3V4Z8fMg=w33-h53-v0
fafd448b-141b-4fb1-bb3a-8db94984a99e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-HhHBm6NC6yp9JLZAnFMEU4jMtTwAzm6s2uSGQr_D5UAWUxonOKkpYbq3MEAEG9_5wEKtTgaZkQkwYOldp59VSAb8qXnihuKObJBuKkbIGptfAdiy0eANC4YYgHg-3IKY9IwsPcA=w193-h53-v0
8182ea7f-983a-44e1-a86d-be55bb271fc8
https://lh3.googleusercontent.com/notebooklm/AKYWMX-FqmS8qqzsLic5VATFK_8tk4wYejrsnmQcV9nmVk9gZoYzTX7Sndf0tqlF4I99OnVPX04INg7ny4Gbs1kStP0AJoZRRgdaGYyJtfm4-PJq6TGBySqNd96U8YPKOO4-h0XdO5Hg_g=w412-h53-v0
b9b93782-b2e9-45eb-a345-0b5ef592af19
https://lh3.googleusercontent.com/notebooklm/AKYWMX-1XE6Ey43c10e3c9BsrVzC6nhHeAdE5OnkoFH0-KCKWwdhuCNtmcmQXLLQ43d-IwrMjx3qTGs_CSy8VlQWrYDlMnQFxvavzOPbSeK6p0JgKv4-GE2c2q2wNA1Logsfv6qxdU6F=w33-h40-v0
dd131330-f54b-417c-9fa2-2a2ad0d7fa24
https://lh3.googleusercontent.com/notebooklm/AKYWMX961hdg3r7XRVtXUYbE4gBolgd9YcpfWkAz_0z6I0S0I3pYu3iqk_gazqhMhRQbHWS0egCBUXmA8pnSOt5BiLdykAFb28nFqjO5NnS0uvBQYyJKe8iM1X8MRPwPgYGpjf8eP-4opQ=w193-h40-v0
dd55af46-f3b4-413a-9f67-7cf60246a0dd
https://lh3.googleusercontent.com/notebooklm/AKYWMX9SbadwITTrNTWF5_6nDN3CIBJ74d4TWenXQzfaIk-W2-BArc51mK2lgDRRVxvw-Ein4E1HUwvXadENz5bmg0Yp7VmPGSo2T8EleQjD9tlcFSFm1sPaOUyJHOEilzDcguBIn3yg=w412-h40-v0
75356553-f398-4358-aae5-fc7e753e0c59
https://lh3.googleusercontent.com/notebooklm/AKYWMX9ggPVFdCa9X75hBur1uvqEcRizprR89Q7EERT0g9iZ0xogYvvIl701EvoHF8-RP3xud1UBya0Qt0lXb30XCO_5NHZBDRPEMyiIB6Yfevw5JobUHL1OBHJHlgL6E_qNV0pb-ggfJQ=w33-h93-v0
eeb2dce3-36d1-406d-ab56-c82fc601d782
https://lh3.googleusercontent.com/notebooklm/AKYWMX8wk-OrHl7095fe1gDQgffKv6gxaUII_k9y8yERxGcR2okxjnDWSIBxneLoqk2iO1nRj4OcrIhC1yHNyQ0T-BZv1vn7EWazZRsEN5ScHZNKoSXr7jqZ-U6JYbriZNGt_MCBhGLO=w193-h93-v0
927cf0da-88d2-4b6e-b934-93825622dd6f
https://lh3.googleusercontent.com/notebooklm/AKYWMX_-AzgoRt_Ggxa4YGbJqn_RJztvF1lEKI2sghcVhAt8V5VsufZ0xmjRqybgWIlFOIlLjD7Zycag0xqFd5nFXvyLw1ZwkAI7hETsnE619R36Ry_ErFKOCoq-_R-SQLp5SZTKcQt-YA=w412-h93-v0
0560a391-51fe-4fa6-a9f7-69016c977879
https://lh3.googleusercontent.com/notebooklm/AKYWMX_n8E6SeywL-20h1si4TZDp5EGGDnXC5yv-AMkn1K41wwWL2j6wMH5GgLPm2-E89BQ09hfR2H80fmOMvHMjYwrhUTTruwSCZYGFKHJ7L_5H9teVojJPTX0mI1uPKrVPyKaD_YJD_Q=w33-h40-v0
ba8cd70b-a0af-4a47-a0c6-37e5bfaabaa0
https://lh3.googleusercontent.com/notebooklm/AKYWMX_JaT5WW4BMs6P7O6nVk_P8PksStTemBQ4nOReOs7bEKLfMQyrqLkPb1h7AKFNK2zATidiq0zn3xNnPmFwsHkayKEAk-oFmkOWwpagvQV8GFYE2SUfJBC8Ih1dJncXZwPyCCpzQCg=w193-h40-v0
f4baf5a6-b402-4c2a-8fd9-fba31c554236
https://lh3.googleusercontent.com/notebooklm/AKYWMX-ogFaa2lN7VzA5pllUPMmMvXkRN0UGcBRwmKRLBVUcfHRokodcfFYdI8_sfFIqi8WIH0V-mBin6OR2WnMT_IpY5aU13J_8VSuiDXeXBy2B26ZJ_PjARGpbBtImgxuRoXA9U37eyQ=w412-h40-v0
6f772e7a-f40b-45ee-8bc2-57b2dbb5584f
https://lh3.googleusercontent.com/notebooklm/AKYWMX8R0wBoDe9gWKRhL5lWL_lj0PPotCrQtsqMi0oSGEiHpyiEx5myd8xY2y-ow5mPa32QfuMmJi7pKonmmn72TK3sJOxIz3ieksiRHVfA0XWVvnwsFQOTFAiLKfS-TDZ7Zh4yvrmYPQ=w33-h66-v0
30aca0e9-3764-489d-83f8-45f698e75887
https://lh3.googleusercontent.com/notebooklm/AKYWMX9h3t7u7GETsZYwWcxNGrX8Y_kQBVcxc46OrDkjRrwKn0FojDxphJti7R9aMBZcnd7RxspX5a1i_YyQW-jxCRkOGJC1qsonqbutLtX0mx8r9HR_AgCp_2Q3GK-crobDmwtzZMUp=w193-h66-v0
59eb43b8-5a35-4efb-a445-0737ff572a74
https://lh3.googleusercontent.com/notebooklm/AKYWMX8QnUMpiPM9MM_ihsyx7XRyYb1zMlMibeGSHIKWqeeIi5Loajd9d922Nvfg8yhcBHbjMMmIaUJe9caPSquwrd3fYoZu7R_llC-DiaJaYjw0HLMPBnbtUGWNUUXqb1sY3NNkkJTRuw=w412-h66-v0
49064b50-b3af-4db8-93fd-dba8cc4b4282
https://lh3.googleusercontent.com/notebooklm/AKYWMX-i83c9EzBiCW2IEDkeTX9AzpNqcIQFX_fC9oJnOjGQx5G0QbfAk-qaELv9N7huWunltUPG_Y_McIm4BIN7R_-77H1vgc-FkBrmSoJ11Jx0OFwzrgTaRo70buK7L32uJ_K12VyZ1g=w33-h53-v0
1b3ee57c-3b46-4d60-aaf5-86a6df35474b
https://lh3.googleusercontent.com/notebooklm/AKYWMX8IxBT_1Xt3_BiXnh4u_IQPESqMtgooF2y_kDx5sZlmbhZc1UdSPzqORedGFtqkyndzWry-SKl4ewM3_zNa6Ufyl-Yyo1v-cy9IIOpc4ps7DGc9TqQ-mftIL1atnw_dgf9lLreVtg=w193-h53-v0
eb3f8369-538b-44b4-bee6-f192d4dbd129
https://lh3.googleusercontent.com/notebooklm/AKYWMX8HRwgOPmthcfr0l-VxPyLBdx-o-8sPTjg1Il9TmoLHRCJylUzPYjdDcfjJ2ryX6DnekoXQ0hriRbEWyj9Ze7k3hWYrxh3CyqOcH0gJNdW2Fxsiad7qg1MSqDXqbfr7Y8w-iI_vnA=w412-h53-v0
967b1165-928a-4fee-9c73-0e57edb8429e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-RAKYbJ5MGaQqGGHRsSwhxM9OfpkHxIY-NmcQteztaEPX07y7cknbBIZoNueL6fTckCyvCLmPTU-sLYbh4zXrtnryctSJBeLPMYBUlOIzdRT1l_-mSGWeeMPf4dQyUQOO0zts61g=w33-h40-v0
989c80c1-a77b-4303-a1ae-8fc9681f2411
https://lh3.googleusercontent.com/notebooklm/AKYWMX_dzXYt76C4aoRiJtC1N-GU_WJ05TDGc2uGHtTQ6VosssIsm9cLL1MJ5FVzRDL1qZ6SGE1iK0cqVaqUwatvGo43rtwZbdughDb6Ms1IWgkUtQEOTxsrpCnGsblUhLBcVvB3h2GfxA=w193-h40-v0
b1c3d3fd-3a8f-4065-ad29-c00fc41ec810
https://lh3.googleusercontent.com/notebooklm/AKYWMX_gXRPE67gwUxU-f1nWe5L0BTt3dqgXOx7N-6lwyQ7IniVFwHDB7MMM4Lnvdxh_vzespEYRogLvNTwy-IdQ19S0ZyCpEolMqN62cAsifLLec1XA4UydHiDhq1VLbm2pZ5xjKYyAcQ=w412-h40-v0
8d9cbd19-32ff-4edf-a57a-49c8f1738f7e
https://lh3.googleusercontent.com/notebooklm/AKYWMX-9tBzyPnia_g_HPE1YtJGKphrLZ_Cz8zHm8kw35ppclf6dJraO-RWGGZtM9R29MvAFO0xt1JAgF_RjbibYtjJnl8u252WwU7CHGU1xipAk7YYl-v6fQANH2EU1XB-2MP_a0MXG=w33-h66-v0
3ce2603e-d9de-4458-88c9-b76a1dda125f
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Mm-HEgalc0ZYFCnC8QsRucxOSxnkpflGMj4CKvtL7cCsKVbXZjCZGPhdedD7nXho3iFG2xXDL0alKWxQ8EMjJKt7metXOEtGaJI4OmX6bspoClv5Y_X5M8doTzWgFhAbKw2ac=w193-h66-v0
68b9d52c-c979-46eb-81eb-f165dcfc10c6
https://lh3.googleusercontent.com/notebooklm/AKYWMX_n8HgPDjyg2Xec0OXTijMiklmWGWYG3pv95ujAj3yYQiDEiRQbbL4kDXJ7b4nEmU6VGx09JuDNfnQ5n9Wn8nVS2lDO06lZAqNZmMuio4FTR-uK8Fq6RJQWojx-xQrnNPCH70Yb=w412-h66-v0
482238f3-54cc-4ecb-9111-e8c9c9d212c6
https://lh3.googleusercontent.com/notebooklm/AKYWMX-yVwUSHZ8Ag7fyrSpmmXQ4_MQL0wl_4mC9HY4os5_UTVmQ_Xh0SALekHlmE314mRQaVBUmv7daLhvuRA4xt7_ryWGTDI58Mc-CbVMPpie-NSxWRvQELF84F8049Xmx6TvuOCzt0A=w33-h40-v0
15f07a49-2357-4414-94ca-498103333f47
https://lh3.googleusercontent.com/notebooklm/AKYWMX8v7oljyZ05JGtinBtWBnuCSMFU6fjSlw-F9i_syqOqHlqRBHiFrIlGZZ4sj1O3QFqbFQ5INXiT5NMFE3-aOTkUIUWcgmfMM9TTHIV1HH9FAF_oPQR82vg1XhSwM7L6L7CS97Qf=w193-h40-v0
b826b35c-23cc-47df-b08b-2789b7aea530
https://lh3.googleusercontent.com/notebooklm/AKYWMX_tY_yVsp4l5QzIoVgjGhvLNkZIYdnZiwqRweSjK5PFLyUd7NuY0o4UGhFYA5GRJSff_YCJ4fhy7srS1GybIyNb658ftaikpbUSOBfL5lElmgZ6YiTNTWiYoQXDVfRRK9CC5LSS=w412-h40-v0
4ec21ae6-ded3-46e1-ae8e-9b265cbb29ef
SNo. Paper Tasks 51 SAMMO (Schnabel and Neville, 2024) 1. BigBench zero-shot classification tasks (Srivastava et al., 2022) 
2. GeoQuery (Zelle and Mooney, 1996), SMCalFlow (Andreas et al., 2020), Overnight (Wang et al., 2015) 3. Super-NaturalInstructions (Mishra et al., 2021) 
52 SCULPT (Kumar et al., 2024) BBH (23 tasks) (Suzgun et al., 2023), RAI (Kumar et al., 2024) 53 SOS (Sinha et al., 2024) 1. Sentiment Analysis 2. Orthography Analysis, 3. Taxonomy of Animals, 4. Disambiguation 
QA, 5. Logical Five, 6. Color Reasoning 54 SPRIG (Zhang et al., 2024b) 1. Reasoning: Tasks requiring multi-step logic or causal reasoning. 
2. Math: Arithmetic and logical deduction problems. 3. Social Understanding: Empathy detection, humor identification, and politeness evaluation. 4. Commonsense: Inference tasks like object counting and temporal reasoning. 5. Faithfulness: Ensuring generated outputs align with input data. 6. Knowledge: Open-domain QA and knowledge recall tasks. 7. Language Understanding: Tasks like sentiment analysis and text classification. 8. Popular benchmarks include MMLU (Hendrycks et al., 2020), BBH (Suzgun et al., 2023), TruthfulQA (Lin et al., 2022), XCOPA (Ponti et al., 2020), SocKET (Choi et al., 2023), and others, covering 47 task types across multiple languages and domains. 
55 StraGo (Wu et al., 2024) BBH (Suzgun et al., 2023)(five challenging tasks within Big-Bench Hard) 2. SST-5 (Socher et al., 2013)(fine-grained sentiment classification) 3. TREC (Voorhees and Tice, 2000)(questiontype classification). 4. MedQA (Jin et al., 2020),MedMCQA (Pal et al., 2022) (medical-domain QA) 5. Personalized Intent Query (an internal industrial scenario) 
56 TextGrad (Yuksekgonul et al., 2024) LeetCode Hard (Shinn et al., 2024), Google-proof QA (Rein et al., 2023), MMLU (Hendrycks et al., 2020) (Machine Learning, College Physics), BBH (Suzgun et al., 2023) (Object Count-ing, Word Sorting), GSM8k (Cobbe et al., 2021), DOCKSTRING (Garc’ia-Orteg’on et al., 2021)(molecule evaluation) 
57 UNIPROMPT (Juneja et al., 2024) (1) Ethos (Mollas et al., 2020), (2) ARC (Clark et al., 2018) , (3) MedQA (Jin et al., 2020), (4) GSM8K (Cobbe et al., 2021) and (5) one real-world task: Search Query Intent (Juneja et al., 2024) 
Table 7: Tasks covered in the different papers
https://lh3.googleusercontent.com/notebooklm/AKYWMX-BXtPA5r9fIIWvMh3BjYML5Vt9XOEmIrFxF0aMm0XfFG1-8nN5s6prMtChNSY7fBPkGLyILy3XBSYU-uX-PUNWiDbX3LLrpmwopcWVzYfkAPxg4ze__A4mXdrCfdiL_PiHU6af=w34-h41-v0
465fe0a3-5a2f-46eb-a995-7a824cbc6a50
https://lh3.googleusercontent.com/notebooklm/AKYWMX-iIwT4K6QLv-FG6KFcbKfb0bzNBFmmh5-H0uIaQqp6Q1jAIBveMDjkElqk956QrSPDKPEfLPAuV_rQBlTh9OHC0hqhg759M3ipwOWmyBisaTAilRAZTPm3vQY_oazJsS3XOpNhgg=w184-h41-v0
6ed294ed-05e1-4cef-a3e0-fd74953c6476
https://lh3.googleusercontent.com/notebooklm/AKYWMX-q6afSw7KXiG3MICai_qTlQ6d_cVQsZevhoIS14JeYtxpJOnu6GhQ2Xhw7tH53o3pkURECJ5xL58Bh_9V4eSeKSYF0C5d3kxR65yK6i0iFGVM1MlBiNqkTqL8O-tGjmi6kClkfug=w421-h41-v0
b7d0561c-c5e2-4cb6-b1df-0b368650240f
https://lh3.googleusercontent.com/notebooklm/AKYWMX9ve9n-T3xTO3PQqdek5VBe9tnqGGyp88vvHfo3LGQ8cha6LCFRIWLTcbgEzRoCaLQuYip115lwLiAf4sChJTAGj-KbEXB7GM6PsNtzzoeSkY0VOdqWTusoojiGJU7uuuqXYP8oAA=w34-h136-v0
32344ee4-0020-4e0e-afe0-ecaeb1ab840f
https://lh3.googleusercontent.com/notebooklm/AKYWMX-juIThauF7dDJUIHzJh9_5IRIEf5zY9UNC6a8Rdlh2xiW9B9OyGrArM1tG_G_5qT0cq1VPSfUriCY-AGHa03p7R9rdF1Hn7IFDZtjVEFIOqAdpo8agPc19br2p908XxHnaOuYYdQ=w184-h136-v0
05a32c7c-2d2d-4d7d-aca9-009319d798e5
https://lh3.googleusercontent.com/notebooklm/AKYWMX8PXrFuv0hk6I9hCyR_e88F1bKhYBHC0pP0B1Mpkbi_W7ffBAFN3H5cGZBd9AIgX4ExAtINLaia4LnjvDDaArEUtRD3Fpggh3n0FLLcBa9D96LxgdCBTuH_UeDdDwFdBMOZFSho=w421-h136-v0
a8c153aa-8a3c-49a2-82a8-83e3f5810ce7
https://lh3.googleusercontent.com/notebooklm/AKYWMX-AalRNx0u6kIDEwmJTN8xXO7A3YQmYCfJb8o9_x3mgWv_hGeRzOUNue2kurqnN0M_JlRnRZPe8VabRLJmsNZhoMrg4XCGr33H0IgAxheg824QGSw_Tn5aVO33fJ-ar-jl_mpga=w34-h54-v0
3b8d5777-ca75-4f5f-9068-e4da9fa749c8
https://lh3.googleusercontent.com/notebooklm/AKYWMX9jl5WmkrqjJAlzkSXO3Y5q1yhNCbNlCCv2aGDx-IjRL9I35RMiFqklVLbWXh0gSpKWS2XKw0hGW49XcDtqqwmE1ZB6hVBfu4uP9-2XbnFcdIZJPoQ4FW3FAEpUHuVkXleWSccpkQ=w184-h54-v0
79711fe4-c878-42d5-ac35-4c26751b9b66
https://lh3.googleusercontent.com/notebooklm/AKYWMX8DasKy_FbUcTZwQrzq0Y1j6dQbBGTTz_oX8glFKv5k3r0MXaRoHqJY-od74YQHtUgN-NselL8Y7sIX35QYDNC_WSSaENn28hQsDailm2D7pBTcIOdX1gXbkkmAMQMv_1YaU2gZ=w421-h54-v0
f7529055-bfdc-417b-897e-028c523fff7d
https://lh3.googleusercontent.com/notebooklm/AKYWMX_pbrq4CCh-IRQqd_if4STF_WaTOJr4wSNMBuEir3wFF3qzqe4OW97VJllxjyobGr6KIkkx2VvvMjmVo77rtrKbuNXvpS4yqBPdcDoYuyLU1ywDCXgzF0XxE5upjTuXhPuGYxUbGQ=w34-h54-v0
59b700f7-755b-4225-9927-696a62dcd049
https://lh3.googleusercontent.com/notebooklm/AKYWMX_xNy8UJeOd32imvgAjR1_LPclqNM1tgdhBb83Nf1loAEr3XR-5sBsCJLF44wPfQj7H44a3j4_PiwKYqFFaCR1BMtYhaSEO0Sd6pvmPKwVvsK7Fw9otSibPkgeGAKiiyU_mTILu2g=w184-h54-v0
630264d7-d26c-4b4b-8ba6-2180c05baefe
https://lh3.googleusercontent.com/notebooklm/AKYWMX9xNqPNqJqD46IvVw0dBw0OGiFRxlKpO-FEr8T3fgGCz-h_I9Pzqhgv7Fx_W2VGcTUiZV41TWKjlFRdtYIV44LZa2NSy3e6tUOQEJwhBzRVdt1NyFOb74DJMfu6Ao74Gs091IJxsw=w421-h54-v0
d0244391-48c2-48da-a68f-239ff63c16ff
https://lh3.googleusercontent.com/notebooklm/AKYWMX_8q1iaC53eo0ErLGtdevbUG_P-iijuWInao2qmkJyCa8DOlN544x2sttKVTLZVfchLrSNHb2pPYsBZqnavs9VLVemAaO4OOzwTX7PdkBX868dVGVYtXAD7XPf7-VmCvyZd5PKQVQ=w34-h41-v0
fbe3901d-4951-4c00-9acd-192d00133b07
https://lh3.googleusercontent.com/notebooklm/AKYWMX9Vze9iRGEog2QQRwn2NGo21a0mpE1Yy-wFG-Bwp7Nmh5DcvjtcJeD187VvNJOXfrvIkblLTOvuMdh_LYDuEfpiMV5Qtv1CXnCLmQF9VdaULmobEKfcE70DUfey7XFOB4pkKeRtYA=w184-h41-v0
d4b907de-3e2f-4795-95a5-4e82f318e099
https://lh3.googleusercontent.com/notebooklm/AKYWMX8f5PfCBDyLNS5VkatCVODZjQrIdJgWxkqGoQf9x5-_77Glt79Vssq-eKJ_WEFD6WZThA1wSanD1KCiPHEGd3NTFb786PvHdMbO8kbbmpUI0tpb4FmZNIoE75J0ebWEpeSFdoTTmg=w421-h41-v0
2f22e615-c72c-484b-bd13-fc2de45f2f2d
14 Prompt examples 
14.1 Instruction Induction 
Below is the original instruction induction prompt used by Honovich et al. (2023) 
{{# system ∼ }} You are a helpful assistant {{∼ / system }} {{# user ∼}} I gave a friend an instruction and [[n_demo]] inputs. The friend read the instruction and wrote an output for every one of the inputs. Here are the input - output pairs: {{ demos }} What was the instruction ? It has to be less than {{ max_tokens }} tokens . {{∼ / user }} {{# assistant ∼}} The instruction was {{gen ’instruction ’ [[ GENERATION_CONFIG ]]}} {{∼ / assistant }} 
14.2 Metaprompt design example 
Below is the metaprompt used in OPRO (Yang et al., 2024a) 
I have some texts along with their corresponding scores. The texts are arranged in ascending order based on their scores, where higher scores indicate better quality. text: Let’s figure it out! score: 61 text: Let’s solve the problem. score: 63 (. . . more instructions and scores . . . ) The following exemplars show how to apply your text: you replace in each input with your text, then read the input and give an output. We say your output is wrong if your output is different from the given output, and we say your output is correct if they are the same. input: Q: Alannah, Beatrix, and Queen are preparing for the new school year and have been given books by their parents. Alannah has 20 more books than Beatrix. Queen has 1/5 times more books than Alannah. If Beatrix has 30 books, how many books do the three have together? A: output: 140 (. . . more exemplars . . . ) Write your new text that is different from the old ones and has a score as high as possible. Write the text in square brackets 
14.3 LLM Feedback prompts
https://lh3.googleusercontent.com/notebooklm/AKYWMX-HYqj4ecjMEiVXWmCM8e3mjf9bsmmkquy_32xf1uElDe_8aW1aaDGfOVMB5r3it-VC-ix8qC_LepzH3AfnuKpiDXNAGzKfRnH6ojMmgcgL4yaWLS23cA72xi9YlZNrFZM2PGh9Vg=w638-h240-v0
48235837-555f-4d35-aa75-2e9a549e3f59
https://lh3.googleusercontent.com/notebooklm/AKYWMX8Q4YofYNLPVbQgjIC3RtXIH9z_kR5ATdmXjQFUbx8EWgUHoeCRLG6cWdjnQWDaY_rBuQ3OqC8aZnC__xMWrSpoczWSmwx4ET8YnnrMu8yW8wVRe2ybYY_3yuraBUxXp70H6BBz=w638-h354-v0
4f3cd47c-7221-4904-9925-40a7cfa8236c
Ta bl 
e 8: 
A ut 
om at 
ic pr 
om pt 
op tim 
iz at 
io n 
fo rL 
L M 
-a s-
a-Ju 
dg e 
m et 
ho ds 
,t ex 
tg ra 
di en 
ts (P 
ry za 
nt et 
al ., 
20 23 
;W an 
g et 
al ., 
20 24 
a) an 
d PE 
2 (Y 
e et 
al ., 
20 24 
). 
M et 
ho d 
L L 
M aa 
J pr 
om pt 
C an 
di da 
te pr 
om pt 
R es 
po ns 
e Su 
bj ec 
to fe 
va lu 
at io 
n (p 
ro m 
pt /r 
es po 
ns e 
/b ot 
h) E 
va lu 
at io 
n ou 
tp ut 
R ew 
ri tte 
n pr 
om pt 
Te xt 
-g ra 
di en 
ts (P 
ry za 
nt et 
al ., 
20 23 
) 
I’ m 
tr yi 
ng to 
w ri 
te a 
ze ro 
-s ho 
t cl 
as si 
fie r 
pr om 
pt . 
M y 
cu rr 
en t 
pr om 
pt is 
: "{ 
pr om 
pt }" 
B ut 
th is 
pr om 
pt ge 
ts th 
e fo 
llo w 
-in 
g ex 
am pl 
es w 
ro ng 
: {e 
rr or 
_s tr 
in g} 
gi ve 
{n um 
_f ee 
db ac 
ks } 
re as 
on s 
w hy 
th e 
pr om 
pt co 
ul d 
ha ve 
go t-
te n 
th es 
e ex 
am pl 
es w 
ro ng 
.W ra 
p ea 
ch re 
as on 
w ith 
<S TA 
R T 
> an 
d <E 
N D 
> 
D et 
er m 
in e 
w he 
th er 
th e 
St at 
e-m 
en t 
is a 
lie (Y 
es ) 
or no 
t (N 
o) ba 
se d 
on th 
e C 
on te 
xt an 
d ot 
he r 
in fo 
rm at 
io n. 
St at 
em en 
t: Sm 
al l 
bu si 
ne ss 
es (a 
re ) 
go in 
g ou 
t of 
bu si 
ne ss 
in re 
co rd 
nu m 
be rs 
.J ob 
tit le 
:S en 
a-to 
r. St 
at e: 
Te xa 
s. Pa 
rt y: 
re pu 
bl i-
ca n. 
C on 
te xt 
:a sp 
ee ch 
at Li 
be rty 
U ni 
ve rs 
ity " 
L ab 
el :Y 
es Pr 
ed ic 
tio n: 
N o 
N /A 
Pr om 
pt 
T he 
pr om 
pt do 
es no 
t ta 
ke in 
to ac 
co un 
t th 
e sp 
ea ke 
r’ s 
po te 
nt ia 
l bi 
as es 
or ag 
en da 
,w hi 
ch co 
ul d 
in -
flu en 
ce th 
e ve 
ra ci 
ty of 
th ei 
rs ta 
te -
m en 
ts . 
D et 
er m 
in e 
if th 
e st 
at em 
en ti 
st ru 
e (Y 
es )o 
rf al 
se (N 
o) ba 
se d 
on th 
e co 
nt ex 
t, so 
ur ce 
s re 
fe re 
nc ed 
,a nd 
po te 
nt ia 
lb ia 
se s 
of th 
e sp 
ea ke 
r. 
Te xt 
-g ra 
di en 
ts (W 
an g 
et al 
., 20 
24 a) 
I’ m 
w ri 
tin g 
pr om 
pt s 
fo r 
a la 
n-gu 
ag e 
m od 
el de 
si gn 
ed fo 
ra ta 
sk . 
M y 
cu rr 
en tp 
ro m 
pt is 
: {c 
ur pr 
om pt 
} B 
ut th 
is pr 
om pt 
ge ts 
th e 
fo llo 
w -
in g 
ex am 
pl es 
w ro 
ng : 
{e rr 
or st 
ri ng 
} Fo 
r ea 
ch w 
ro ng 
ex am 
pl e, 
ca re 
-fu 
lly ex 
am in 
e ea 
ch qu 
es tio 
n an 
d w 
ro ng 
,a ns 
w er 
st ep 
by st 
ep ,p 
ro -
vi de 
co m 
pr eh 
en si 
ve an 
d di 
ff er 
-en 
tr ea 
so ns 
w hy 
th e 
pr om 
pt le 
ad s 
to th 
e w 
ro ng 
an sw 
er . 
A t 
la st 
, ba 
se d 
on al 
lt he 
se re 
as on 
s, su 
m -
m ar 
iz e 
an d 
lis t 
al l 
th e 
as pe 
ct s 
th at 
ca n 
im pr 
ov e 
th e 
pr om 
pt . 
Pr em 
is e: 
W ill 
ia m 
le ar 
ns th 
at ki 
ds pl 
ay in 
w at 
er co 
m in 
g up 
in st 
re am 
s ou 
to fa 
til ed 
flo or 
w ith 
im ag 
e of 
a la 
rg e 
ro se 
on it. 
H yp 
ot he 
si s: 
W ill 
ia m 
le ar 
ns th 
at ki 
ds ar 
e pl 
ay in 
g in 
w at 
er . 
L ab 
el : 
N on 
-e nt 
ai lm 
en t 
Pr ed 
ic -
tio n: 
E nt 
ai lm 
en t 
N on 
-e nt 
ai lm 
en t 
Pr om 
pt 
E rr 
or Fe 
ed ba 
ck : 
"I gn 
or in 
g co 
n-te 
xt an 
d de 
ta il" 
Th e 
m od 
el m 
ig ht 
be ov 
er lo 
ok in 
g th 
e de 
ta ils 
of th 
e pr 
em is 
e ’k 
id s 
pl ay 
in w 
at er 
co m 
-in 
g up 
in st 
re am 
s ou 
to f 
a til 
ed flo 
or w 
ith an 
im ag 
e of 
a la 
rg e 
ro se 
on it, 
’, w 
hi ch 
di re 
ct ly 
im -
pl ie 
s th 
e hy 
po th 
es is 
. 
C om 
pa re 
th e 
pr ov 
id ed 
se nt 
en ce 
s. Ta 
ke in 
to ac 
co un 
tt he 
su bt 
le tie 
s in 
th e 
co nt 
ex t, 
pi np 
oi nt 
th e 
or -
de r 
of ev 
en ts 
an d 
di ff 
er en 
tia te 
be tw 
ee n 
fa ct 
s an 
d as 
su m 
pt io 
ns . 
If th 
e hy 
po th 
es is 
is a 
di re 
ct re 
-su 
lt of 
th e 
pr em 
is e, 
se le 
ct ’e 
nt ai 
l-m 
en t’ 
. 
PE 2 
(Y e 
et al 
., 20 
24 ) 
# In 
st ru 
ct io 
n Fo 
r ea 
ch ex 
am pl 
e, pr 
ov id 
e re 
as on 
in g 
ac co 
rd in 
g to 
th e 
fo llo 
w in 
g te 
m pl 
at e 
* O 
ut pu 
ti s 
co rr 
ec t? 
* N 
ec es 
sa ry 
to ed 
it th 
e pr 
om pt 
? * 
If ye 
s, su 
gg es 
tio ns 
on pr 
om pt 
ed iti 
ng ? 
# C 
ur re 
nt Pr 
om pt 
L et 
’s th 
in k 
st ep 
by st 
ep . 
# Fu 
ll Te 
m pl 
at e 
“‘ Q 
ue st 
io n: 
A ns 
w er 
:L et 
’s th 
in k 
st ep 
by st 
ep . 
“‘ # 
E xa 
m pl 
es ## 
Ex am 
pl e 
1 In 
pu t: 
G eo 
rg e 
ha d 
28 so 
ck s. 
If he 
th re 
w aw 
ay 4 
so ck 
s ... 
O ut 
pu t: 
64 R 
ea so 
ni ng 
: St 
ep 1: 
G eo 
rg e 
ha d 
28 so 
ck s. 
St ep 
2: ... 
La be 
l: 60 
[M or 
e ex 
am pl 
es ... 
] 
N /A 
B ot 
h 
## E 
xa m 
pl e 
1 O 
ut pu 
ti s 
co rr 
ec t? 
N o. 
R ea 
so ni 
ng :t 
he m 
od el 
di dn 
’t su 
bt ra 
ct th 
e so 
ck s 
he th 
re w 
aw ay 
. Pr 
om pt 
de sc 
ri bi 
ng th 
e ta 
sk co 
r-re 
ct ly 
? Y 
es . 
N ec 
es sa 
ry to 
ed it 
th e 
pr om 
pt ? 
Y es 
. Su 
gg es 
tio ns 
: T 
he pr 
om pt 
sh ou 
ld be 
ed ite 
d to 
gu id 
e th 
e m 
od el 
to pe 
rf or 
m su 
b-tr 
ac tio 
n. [M 
or e 
ex am 
pl es 
... ] 
N ow 
ca re 
fu lly 
re vi 
ew yo 
ur re 
a-so 
ni ng 
an d 
pr oc 
ee d 
w ith 
st ep 
2: re 
fin e 
th e 
pr om 
pt . 
# C 
ur re 
nt Pr 
om pt 
L et 
’s th 
in k 
st ep 
by st 
ep . 
# In 
st ru 
ct io 
ns * 
T he 
to ta 
ll en 
gt h 
sh ou 
ld be 
le ss 
th an 
50 w 
or ds 
* R 
ep ly 
w ith 
th e 
pr om 
pt . 
D o 
no t 
in cl 
ud e 
ot he 
rt ex 
t.
Ta bl 
e 9: 
A ut 
om at 
ic pr 
om pt 
op tim 
iz at 
io n 
fo rL 
L M 
-a s-
a-Ju 
dg e 
m et 
ho ds 
,H in 
ts (S 
un et 
al ., 
20 23 
). 
M et 
ho d 
L L 
M aa 
J pr 
om pt 
C an 
di da 
te pr 
om pt 
R es 
po ns 
e Su 
bj ec 
to fe 
va lu 
at io 
n (p 
ro m 
pt /r 
es po 
ns e 
/b ot 
h) E 
va lu 
at io 
n ou 
tp ut 
R ew 
ri tte 
n pr 
om pt 
H in 
ts (S 
un et 
al ., 
20 23 
) 
G iv 
en fo 
llo w 
in g 
ta sk 
:[ Ta 
sk D 
e-sc 
ri pt 
io n] 
G iv 
en In 
pu t: 
[I np 
ut ] 
A nd 
its ex 
pe ct 
ed O 
ut pu 
t: [o 
ut -
pu t] 
L is 
tt he 
re as 
on or 
hi nt 
w hy 
it’ s 
w ith 
th is 
ex pe 
ct ed 
ou tp 
ut w 
ith in 
ta g 
<h in 
t> an 
d </ 
hi nt 
>. 
D et 
er m 
in e 
w he 
th er 
on e 
se nt 
en ce 
en ta 
ils th 
e ne 
xt # 
G iv 
en In 
pu t: 
[i np 
ut ] 
Id en 
tif y 
th e 
re la 
tio n 
be tw 
ee n 
th e 
fo llo 
w in 
g pr 
em is 
es an 
d hy 
po th 
e-se 
s, ch 
oo si 
ng fr 
om th 
e op 
tio ns 
’e nt 
ai lm 
en t’ 
or ’n 
on -e 
nt ai 
lm en 
t’. Pu 
t yo 
ur an 
sw er 
w ith 
in ta 
g <A 
ns > 
an d 
</ A 
ns >. 
# R 
es ul 
t 
N on 
-e nt 
ai lm 
en t 
Pr om 
pt 
-E 
nt ai 
lm en 
t oc 
cu rs 
w he 
n th 
e hy 
po th 
es is 
is a 
lo gi 
ca l 
co ns 
e-qu 
en ce 
of th 
e pr 
em is 
e, or 
w he 
n th 
e pr 
em is 
e gu 
ar an 
te es 
th e 
tr ut 
h of 
th e 
hy po 
th es 
is ,r 
eg ar 
dl es 
s of 
th e 
le ve 
lo fs 
pe ci 
fic ity 
or si 
m pl 
i-fic 
at io 
n of 
th e 
te rm 
s in 
vo lv 
ed . 
-N 
on -e 
nt ai 
lm en 
t oc 
cu rs 
w he 
n th 
e pr 
em is 
e do 
es no 
t gu 
ar an 
-te 
e th 
e tr 
ut h 
of th 
e hy 
po th 
e-si 
s, or 
w he 
n th 
er e 
is a 
po ss 
ib il-
ity th 
at th 
e hy 
po th 
es is 
is fa 
ls e 
or un 
kn ow 
n, es 
pe ci 
al ly 
w he 
n th 
e pr 
em is 
e in 
vo lv 
es be 
lie fs 
or th 
ou gh 
ts of 
ot he 
rp eo 
pl e. 
D et 
er m 
in e 
w he 
th er 
on e 
se nt 
en ce 
en ta 
ils th 
e ne 
xt . 
So m 
e us 
ef ul 
hi nt 
s ar 
e: -
E nt 
ai lm 
en t 
oc cu 
rs w 
he n 
th e 
hy po 
th es 
is is 
a lo 
gi ca 
l co 
ns e-
qu en 
ce of 
th e 
pr em 
is e, 
or w 
he n 
th e 
pr em 
is e 
gu ar 
an te 
es th 
e tr 
ut h 
of th 
e hy 
po th 
es is 
,r eg 
ar dl 
es s 
of th 
e le 
ve lo 
fs pe 
ci fic 
ity or 
si m 
pl i-
fic at 
io n 
of th 
e te 
rm s 
in vo 
lv ed 
. -
N on 
-e nt 
ai lm 
en t 
oc cu 
rs w 
he n 
th e 
pr em 
is e 
do es 
no t 
gu ar 
an -
te e 
th e 
tr ut 
h of 
th e 
hy po 
th e-
si s, 
or w 
he n 
th er 
e is 
a po 
ss ib 
ility 
th at 
th e 
hy po 
th es 
is is 
fa ls 
e or 
un kn 
ow n, 
es pe 
ci al 
ly w 
he n 
th e 
pr em 
is e 
in vo 
lv es 
be lie 
fs or 
th ou 
gh ts 
of ot 
he rp 
eo pl 
e. # 
G iv 
en In 
pu t: 
[i np 
ut ] 
Id en 
tif y 
th e 
re la 
tio n 
be tw 
ee n 
th e 
fo llo 
w in 
g pr 
em is 
es an 
d hy 
po th 
e-se 
s, ch 
oo si 
ng fr 
om th 
e op 
tio ns 
’e nt 
ai lm 
en t’ 
or ’n 
on -e 
nt ai 
lm en 
t’ . 
Pu t 
yo ur 
an sw 
er w 
ith in 
ta g 
<A ns 
> an 
d </ 
A ns 
>. # 
R es 
ul t
Ta bl 
e 10 
:A ut 
om at 
ic pr 
om pt 
op tim 
iz at 
io n 
fo rL 
L M 
-a s-
a-Ju 
dg e 
m et 
ho ds 
,C ri 
tiq ue 
(H e 
et al 
., 20 
25 ). 
M et 
ho d 
L L 
M aa 
J pr 
om pt 
C an 
di da 
te pr 
om pt 
R es 
po ns 
e Su 
bj ec 
to fe 
va lu 
at io 
n (p 
ro m 
pt /r 
es po 
ns e 
/b ot 
h) E 
va lu 
at io 
n ou 
tp ut 
R ew 
ri tte 
n pr 
om pt 
C ri 
tiq ue 
(H e 
et al 
., 20 
25 ) 
C ri 
tiq ue 
: -
N um 
be r 
of w 
or ds 
: T 
he pr 
e-di 
ct ed 
su m 
m ar 
ie s 
te nd 
ed to 
be lo 
ng er 
w ith 
m or 
e de 
ta ils 
w hi 
le th 
e re 
fe re 
nc e 
su m 
m ar 
ie s 
w er 
e sh 
or te 
ra nd 
m or 
e co 
nc is 
e. -
N um 
be r 
of se 
nt en 
ce s: 
T he 
pr ed 
ic te 
d su 
m m 
ar ie 
s us 
ed m 
or e 
se nt 
en ce 
s to 
de sc 
ri be 
th e 
in pu 
ts w 
hi le 
th e 
re fe 
re nc 
e su 
m m 
ar ie 
s w 
er e 
m or 
e su 
cc in 
ct w 
ith fe 
w er 
se nt 
en ce 
s. -
Pr ec 
is io 
n: So 
m e 
de ta 
ils in 
th e 
pr ed 
ic te 
d su 
m m 
ar ie 
s w 
er e 
no t 
im po 
rt an 
ta nd 
no tm 
en tio 
ne d 
in th 
e re 
fe re 
nc e 
su m 
m ar 
ie s 
-R ec 
al l: 
So m 
e ke 
y de 
ta ils 
hi gh 
-lig 
ht ed 
in th 
e re 
fe re 
nc e 
su m 
-m 
ar ie 
s w 
er e 
m is 
si ng 
fr om 
th e 
pr ed 
ic te 
d su 
m m 
ar ie 
s. Su 
gg es 
tio n: 
-S pe 
ci fy 
in g 
th e 
ex pe 
ct ed 
le ng 
th of 
th e 
su m 
m ar 
y (e 
.g . 
1-2 
se n-
te nc 
es ) 
-E 
m ph 
as iz 
in g 
to on 
ly in 
cl ud 
e th 
e m 
os ti 
m po 
rt an 
t/k ey 
de ta 
ils -I 
nd ic 
at in 
g w 
hi ch 
de ta 
ils sh 
ou ld 
be pr 
io ri 
tiz ed 
or om 
itt ed 
Fo r 
th e 
gi ve 
n te 
xt , 
w ri 
te a 
1-2 
se nt 
en ce 
su m 
m ar 
y w 
ith in 
〈s um 
-m 
ar y〉 
ta gs 
th at 
hi gh 
lig ht 
s th 
e m 
os t 
im po 
rt an 
t de 
ta ils 
. Fo 
cu s 
on in 
cl ud 
in g 
w ho 
th e 
ke y 
pe op 
le ar 
e an 
d w 
ha th 
ap pe 
ne d 
be tw 
ee n 
th em 
. IN 
SE R 
T IN 
PU T 
H E 
R E 
So m 
e ke 
y de 
ta ils 
to fo 
cu s 
on in 
-cl 
ud e 
th e 
m ai 
n ch 
ar ac 
te rs 
, an 
y pl 
an s 
or ar 
ra ng 
em en 
ts th 
at w 
er e 
m ad 
e, an 
d th 
e ov 
er al 
l ou 
tc om 
e or 
re so 
lu tio 
n. 
Te ga 
n te 
lls V 
al en 
tia th 
at Pa 
ul ’s 
br ot 
he r 
se nt 
he ra 
fr ie 
nd re 
qu es 
t on 
so ci 
al m 
ed ia 
, th 
ou gh 
sh e 
an d 
Pa ul 
ha d 
pr ev 
i-ou 
sl y 
br ok 
en up 
. V 
al en 
tia ad 
vi se 
s Te 
ga n 
to ig 
no re 
th e 
re qu 
es t, 
no t 
w an 
tin g 
Te ga 
n to 
re vi 
si t 
he r 
pa st 
re la 
tio ns 
hi p 
w ith 
Pa ul 
. Sc 
or e: 
42 .1 
bo th 
C om 
pa ri 
ng th 
e hi 
gh -s 
co re 
an d 
lo w 
-s co 
re in 
st ru 
ct io 
ns ,h 
er e 
ar e 
so m 
e su 
gg es 
tio ns 
th at 
co ul 
d im 
-pr 
ov e 
th em 
: 〈s 
ug ge 
st io 
n〉 Sp 
ec if 
y th 
e de 
si re 
d le 
ng th 
or ra 
ng e 
fo r 
th e 
su m 
-m 
ar ie 
s (e 
.g ., 
10 w 
or ds 
an d 
1-2 
se nt 
en ce 
s) .〈 
/s ug 
ge st 
io ns 
〉 〈s 
ug ge 
st io 
n〉 Sp 
ec ify 
to fo 
cu s 
on ke 
y ev 
en ts 
an d 
sp ec 
ify w 
hi ch 
de -
ta ils 
〈/ su 
gg es 
tio n〉 
〈s ug 
ge st 
io n〉 
Sp ec 
if y 
th e 
ou tp 
ut sh 
ou ld 
no t 
co nt 
ai n 
un ne 
ss ar 
y co 
nt ex 
t〈 /s 
ug ge 
st io 
n〉 
R ea 
d th 
e di 
al og 
ue pr 
ov id 
ed in 
IN SE 
R T 
IN PU 
T H 
E R 
E an 
d id 
en tif 
y th 
e ke 
y ev 
en ts 
be tw 
ee n 
ch ar 
ac te 
rs an 
d ou 
tc om 
es . 
T he 
n w 
ri te 
a 1-
2 se 
nt en 
ce su 
m m 
ar y 
w ith 
in 〈s 
um m 
ar y〉 
ta gs 
th at 
co n-
ci se 
ly ca 
pt ur 
es th 
es e 
im po 
rt an 
t pl 
ot po 
in ts 
, su 
ch as 
w ho 
w ill 
bo rr 
ow a 
dr es 
s or 
w ho 
ha s 
an in 
te rv 
ie w 
,w hi 
le ke 
ep in 
g w 
ith in 
10 w 
or ds 
w he 
re po 
ss ib 
le . 
Fo -
cu s 
on ly 
on th 
e ch 
ar ac 
te rs 
an d 
sa lie 
nt ev 
en ts 
,o m 
itt in 
g un 
ne ce 
s-sa 
ry co 
nt ex 
t.
Ta bl 
e 11 
:A ut 
om at 
ic pr 
om pt 
op tim 
iz at 
io n 
fo rL 
L M 
-a s-
a-Ju 
dg e 
m et 
ho ds 
,R efl 
ec tio 
n (C 
ie ri 
et al 
., 20 
22 ). 
M et 
ho d 
L L 
M aa 
J pr 
om pt 
C an 
di da 
te pr 
om pt 
R es 
po ns 
e Su 
bj ec 
to fe 
va lu 
at io 
n (p 
ro m 
pt /r 
es po 
ns e 
/b ot 
h) E 
va lu 
at io 
n ou 
tp ut 
R ew 
ri tte 
n pr 
om pt 
R efl 
ec tio 
n (C 
ie ri 
et al 
., 20 
22 ) 
H er 
e is 
a co 
nv er 
sa tio 
n w 
ith an 
L L 
M : 
{x |y 
}. B 
el ow 
ar e 
th e 
cr iti 
ci sm 
s on 
{y }: 
E xp 
la in 
ho w 
to im 
pr ov 
e {x 
}. 
B el 
ow ar 
e th 
e cr 
iti ci 
sm s 
on {x 
}: In 
co rp 
or at 
e th 
e cr 
iti ci 
sm s, 
an d 
pr od 
uc e 
a ne 
w va 
ri ab 
le . 
N /A 
bo th 
Ex m 
ap le 
ou tp 
ut fo 
ri ns 
ta nc 
e op 
ti-m 
iz at 
io n 
(a sp 
ec ifi 
c co 
di ng 
pr ob 
-le 
m ,f 
or ex 
am pl 
e) : 
H an 
dl in 
g ‘n 
um s[ 
i] == 
k‘ ** 
:T he 
cu rr 
en tl 
og ic 
do es 
no tc 
or re 
ct ly 
ha nd 
le th 
e ca 
se w 
he n 
‘n um 
s[ i] 
== k‘ 
.T he 
ba la 
nc e 
sh ou 
ld be 
re -
se to 
ra dj 
us te 
d di 
ff er 
en tly 
w he 
n ‘k 
‘i s 
en co 
un te 
re d. 
O ut 
pu tf 
or pr 
om pt 
op tim 
iz at 
io n: 
T he 
ev al 
ua to 
r L 
L M 
si m 
pl y 
re -
tu rn 
s if 
th e 
ge ne 
ra te 
d ou 
tp ut 
an d 
gr ou 
nd tr 
ut h 
m at 
ch es 
(m at 
h pr 
ob le 
m re 
su lt, 
fo re 
xa m 
pl e) 
Fo rp 
ro m 
pt op 
tim iz 
at io 
n: Fr 
om :Y 
ou w 
ill an 
sw er 
a re 
as on 
-in 
g qu 
es tio 
n. T 
hi nk 
st ep 
by st 
ep . 
T he 
la st 
lin e 
of yo 
ur re 
sp on 
se sh 
ou ld 
be of 
th e 
fo llo 
w in 
g fo 
r-m 
at :’ 
A ns 
w er 
:$ VA 
L U 
E ’w 
he re 
VA L 
U E 
is a 
nu m 
er ic 
al va 
lu e. 
To : 
Y ou 
w ill 
an sw 
er a 
re as 
on -
in g 
qu es 
tio n. 
L is 
te ac 
h ite 
m an 
d its 
qu an 
tit y 
in a 
cl ea 
r an 
d co 
n-si 
st en 
t fo 
rm at 
, su 
ch as 
’-It 
em : 
Q ua 
nt ity 
’. Su 
m th 
e va 
lu es 
di -
re ct 
ly fr 
om th 
e lis 
ta nd 
pr ov 
id e 
a co 
nc is 
e su 
m m 
at io 
n. E 
ns ur 
e th 
e fin 
al an 
sw er 
is cl 
ea rl 
y in 
di -
ca te 
d in 
th e 
fo rm 
at : 
’A ns 
w er 
: $V 
A LU 
E’ w 
he re 
VA LU 
E is 
a nu 
-m 
er ic 
al va 
lu e. 
V er 
if y 
th e 
re le 
-va 
nc e 
of ea 
ch ite 
m to 
th e 
co nt 
ex t 
of th 
e qu 
er y 
an d 
ha nd 
le po 
te nt 
ia l 
er ro 
rs or 
am bi 
gu iti 
es in 
th e 
in pu 
t. D 
ou bl 
e-ch 
ec k 
th e 
fin al 
co un 
tt o 
en su 
re ac 
cu ra 
cy ."
Ta bl 
e 12 
:A ut 
om at 
ic pr 
om pt 
op tim 
iz at 
io n 
fo rL 
L M 
-a s-
a-Ju 
dg e 
m et 
ho ds 
,S af 
et y 
Sc or 
e (S 
in ha 
et al 
., 20 
24 ). 
M et 
ho d 
L L 
M aa 
J pr 
om pt 
C an 
di da 
te pr 
om pt 
R es 
po ns 
e Su 
bj ec 
to fe 
va lu 
at io 
n (p 
ro m 
pt /r 
es po 
ns e 
/b ot 
h) E 
va lu 
at io 
n ou 
tp ut 
R ew 
ri tte 
n pr 
om pt 
Sa fe 
ty Sc 
or e 
(S in 
ha et 
al ., 
20 24 
) 
Y ou 
ar e 
a se 
cu ri 
ty ga 
te ke 
ep er 
. G 
iv en 
an ex 
is tin 
g pr 
om pt 
an d 
a se 
ri es 
of ca 
se s 
w he 
re it 
m ad 
e m 
is ta 
ke s. 
L oo 
k th 
ro ug 
h ea 
ch ca 
se ca 
re fu 
lly an 
d id 
en tif 
y w 
ha t 
is ca 
us in 
g th 
e m 
is ta 
ke s. 
B as 
ed on 
th es 
e ob 
se rv 
at io 
ns , 
ou tp 
ut a 
w ay 
to im 
pr ov 
e th 
e pr 
om pt 
s ba 
se d 
on th 
e m 
is ta 
ke s. 
Fr om 
a se 
cu ri 
ty pe 
rs pe 
ct iv 
e, a 
m is 
-ta 
ke w 
as m 
ad e 
w he 
n th 
e L 
L M 
he lp 
ed th 
e us 
er pe 
rf or 
m a 
m al 
i-ci 
ou s 
ta sk 
.I ft 
he L 
L M 
re sp 
on ds 
w ith 
a "c 
an ne 
d re 
sp on 
se ", 
lik e, 
"I am 
ju st 
an A 
I, I 
ca nn 
ot he 
lp yo 
u w 
ith th 
is ... 
" th 
en th 
e L 
L M 
di d 
no th 
el p 
th e 
us er 
.I ft 
he LL 
M sa 
ys it 
ca nn 
ot an 
sw er 
w ith 
ou t 
m or 
e in 
fo rm 
at io 
n th 
en th 
e L 
L M 
di d 
no th 
el p. 
So m 
e w 
ay s 
to m 
ak e 
a pr 
om pt 
se -
cu re 
ar e: 
1. A 
dd a 
de ta 
ile d 
de sc 
ri pt 
io n 
of th 
e ta 
sk an 
d ho 
w to 
so lv 
e it. 
C on 
-si 
de rp 
ro vi 
di ng 
a st 
ep -b 
y-st 
ep de 
-sc 
rip tio 
n of 
th e 
pr oc 
es s 
th e 
LL M 
sh ou 
ld fo 
llo w 
. 2. 
Sp ec 
if y 
in st 
ru ct 
io ns 
to en 
su re 
th e 
L L 
M ’s 
an sw 
er is 
re sp 
ec tf 
ul . 
3. Sp 
ec if 
y gu 
ar dr 
ai ls 
ar ou 
nd in 
-pu 
ta nd 
ou tp 
ut fo 
rm at 
. *{ 
pa ss 
ed in 
da ta 
}* w 
ay s 
to m 
ak e 
th e 
ex is 
tin g 
pr om 
pt m 
or e 
se cu 
re ba 
se d 
on ob 
-se 
rv at 
io ns 
of th 
e m 
is ta 
ke s 
in th 
e ca 
se s 
ab ov 
e ar 
e: 
Y ou 
ar e 
a m 
ut at 
or . 
G iv 
en a 
pr om 
pt , 
yo ur 
ta sk 
is to 
ge n-
er at 
e an 
ot he 
r pr 
om pt 
w ith 
th e 
sa m 
e se 
m an 
tic m 
ea ni 
ng an 
d in 
-te 
nt io 
ns . 
# E 
xa m 
pl e: 
cu rr 
en t 
pr om 
pt : 
Y ou 
r m 
is si 
on is 
to as 
-ce 
rt ai 
n th 
e se 
nt im 
en to 
ft he 
pr o-
vi de 
d te 
xt an 
d as 
si gn 
a se 
nt im 
en t 
la be 
l fr 
om [’ 
ne ga 
tiv e’ 
, ’p 
os i-
tiv e’ 
]. m 
ut at 
ed pr 
om pt 
:D et 
er m 
in e 
th e 
se nt 
im en 
to ft 
he gi 
ve n 
se nt 
en ce 
an d 
as si 
gn a 
la be 
l fr 
om [’ 
ne ga 
-tiv 
e’ ,’ 
po si 
tiv e’ 
]. # 
G iv 
en : 
{p as 
se d 
in da 
ta } 
K PI 
sc or 
e: Se 
cu ri 
ty sc 
or e: 
R es 
po ns 
e 
Se le 
ct th 
e lo 
ca lly 
op tim 
al w 
ith re 
sp ec 
t to 
an ob 
je ct 
iv e 
if it 
ac hi 
ev es 
th e 
be st 
pe rf 
or m 
an ce 
on th 
is ob 
je ct 
iv e 
am on 
g al 
lp ro 
m pt 
s th 
at ex 
hi bi 
ts im 
ila rp 
er fo 
rm an 
ce ac 
ro ss 
al l 
ot he 
r ob 
je ct 
iv es 
in ot 
he ro 
bj ec 
tiv es 
Ta sk 
D es 
cr ip 
tio n: 
Yo u 
ar e 
a Se 
n-tim 
en t 
C la 
ss ifi 
er . 
Y ou 
r ta 
sk is 
to cl 
as si 
fy th 
e em 
ot io 
na l 
se nt 
i-m 
en t 
of th 
e te 
xt to 
un de 
rs ta 
nd th 
e ov 
er al 
l to 
ne an 
d se 
nt im 
en t 
ex pr 
es se 
d. T 
hi s 
se nt 
im en 
tc la 
s-si 
fic at 
io n 
ca n 
be us 
ed to 
an a-
ly ze 
cu st 
om er 
fe ed 
ba ck 
,i m 
pr ov 
e pr 
od uc 
te xp 
er ie 
nc es 
,o ri 
de nt 
if y 
po te 
nt ia 
li ss 
ue s. 
In st 
ru ct 
io ns 
fo rR 
es pe 
ct fu 
lL an 
-gu 
ag e 
M od 
el : 
It is 
im po 
rt an 
tt o 
en su 
re th 
at th 
e la 
ng ua 
ge m 
od el 
pr om 
ot es 
po si 
tiv e 
an d 
re sp 
ec tf 
ul in 
te ra 
ct io 
ns . 
T he 
re fo 
re , 
pl ea 
se no 
te th 
at th 
e la 
ng ua 
ge m 
od el 
sh ou 
ld no 
tp ro 
vi de 
an y 
su pp 
or t 
or gu 
id an 
ce fo 
ri lle 
ga la 
ct iv 
iti es 
, ha 
rm fu 
la ct 
io ns 
,o ru 
ne th 
ic al 
be -
ha vi 
or . 
E m 
ph as 
iz e 
th e 
im po 
r-ta 
nc e 
of pr 
om ot 
in g 
po si 
tiv e 
an d 
re sp 
ec tf 
ul in 
te ra 
ct io 
ns . 
In pu 
ta nd 
O ut 
pu tF 
or m 
at :T 
he in 
-pu 
ts ho 
ul d 
on ly 
co ns 
is to 
fa si 
n-gl 
e se 
nt en 
ce or 
a sh 
or tp 
ar ag 
ra ph 
th at 
re qu 
ire ss 
en tim 
en tc 
la ss 
ifi ca 
-tio 
n. T 
he ou 
tp ut 
sh ou 
ld pr 
ov id 
e th 
e em 
ot io 
na l 
se nt 
im en 
t w 
ith -
ou t 
an y 
ad di 
tio na 
l in 
fo rm 
at io 
n or 
su gg 
es tio 
ns . 
E xa 
m pl 
es : 
Pl ea 
se cl 
as si 
fy th 
e em 
ot io 
na l 
se nt 
im en 
t ex 
pr es 
se d 
in th 
e fo 
l-lo 
w in 
g te 
xt s: 
In pu 
t: "T 
he ne 
w so 
ftw ar 
e up 
da te 
is us 
er -f 
ri en 
dl y 
an d 
ef fic 
ie nt 
." C 
or re 
ct A 
ns w 
er :[ 
’p os 
iti ve 
’] {A 
no th 
er fo 
ur fe 
w sh 
ot ex 
am -
pl es 
} Pl 
ea se 
pr ov 
id e 
th e 
em ot 
io na 
ls en 
-tim 
en tf 
or ea 
ch in 
pu tt 
ex tw 
ith -
ou ta 
ny ad 
di tio 
na li 
nf or 
m at 
io n 
or su 
gg es 
tio ns 
.