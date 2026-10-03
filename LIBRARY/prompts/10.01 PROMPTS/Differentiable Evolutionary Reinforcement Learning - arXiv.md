# Differentiable Evolutionary Reinforcement Learning - arXiv

Source URL: https://arxiv.org/html/2512.13399v1

Differentiable Evolutionary Reinforcement Learning
logo Back to arXiv
https://arxiv.org/
 

https://arxiv.org/abs/2512.13399v1
 

javascript:toggleColorScheme()
logo Back to arXiv
https://arxiv.org/
This is 
experimental HTML
 to improve accessibility. We invite you to report rendering errors. Use Alt+Y to toggle on accessible reporting links and Alt+Shift+Y to toggle off. Learn more 
about this project
https://info.arxiv.org/about/accessible_HTML.html
 and 
help improve conversions
https://info.arxiv.org/help/submit_latex_best_practices.html
.
Why HTML?
https://info.arxiv.org/about/accessible_HTML.html
 
Report Issue
#myForm
 
Back to Abstract
https://arxiv.org/abs/2512.13399v1
 
Download PDF
https://arxiv.org/pdf/2512.13399v1
 

javascript:toggleColorScheme()
Table of Contents
Abstract
https://arxiv.org/html/2512.13399v1#abstract
1 Introduction
https://arxiv.org/html/2512.13399v1#S1
2 Related Work
https://arxiv.org/html/2512.13399v1#S2
Agentic Evolution of LLMs
https://arxiv.org/html/2512.13399v1#S2.SS0.SSS0.Px1
Learning to Learn
https://arxiv.org/html/2512.13399v1#S2.SS0.SSS0.Px2
Reward Modeling
https://arxiv.org/html/2512.13399v1#S2.SS0.SSS0.Px3
3 Differentiable Evolution Reinforcement Learning
https://arxiv.org/html/2512.13399v1#S3
3.1 Bi-Level Evolutionary Training
https://arxiv.org/html/2512.13399v1#S3.SS1
Inner-loop (Policy Model Optimization)
https://arxiv.org/html/2512.13399v1#S3.SS1.SSS0.Px1
Outer-loop (Meta-optimizer Evolution)
https://arxiv.org/html/2512.13399v1#S3.SS1.SSS0.Px2
3.2 Instantiation of DERL
https://arxiv.org/html/2512.13399v1#S3.SS2
Reward Parameterization
https://arxiv.org/html/2512.13399v1#S3.SS2.SSS0.Px1
Inner-loop (Policy Model Optimization)
https://arxiv.org/html/2512.13399v1#S3.SS2.SSS0.Px2
Outer-loop (Meta-optimizer Evolution)
https://arxiv.org/html/2512.13399v1#S3.SS2.SSS0.Px3
4 Experiments
https://arxiv.org/html/2512.13399v1#S4
4.1 Experiment Setups
https://arxiv.org/html/2512.13399v1#S4.SS1
Robotic Agent
https://arxiv.org/html/2512.13399v1#S4.SS1.SSS0.Px1
Scientific Simulation
https://arxiv.org/html/2512.13399v1#S4.SS1.SSS0.Px2
Mathematical Reasoning
https://arxiv.org/html/2512.13399v1#S4.SS1.SSS0.Px3
4.2 Implementation Details
https://arxiv.org/html/2512.13399v1#S4.SS2
Robotic Agent and Scientific Simulation
https://arxiv.org/html/2512.13399v1#S4.SS2.SSS0.Px1
Mathematical Reasoning
https://arxiv.org/html/2512.13399v1#S4.SS2.SSS0.Px2
4.3 Results
https://arxiv.org/html/2512.13399v1#S4.SS3
4.3.1 Robotic Agent and Scientific Simulation
https://arxiv.org/html/2512.13399v1#S4.SS3.SSS1
State-of-the-Art Performance.
https://arxiv.org/html/2512.13399v1#S4.SS3.SSS1.Px1
Robustness in Out-of-Distribution (O.O.D.) Scenarios.
https://arxiv.org/html/2512.13399v1#S4.SS3.SSS1.Px2
4.3.2 Mathematical Reasoning
https://arxiv.org/html/2512.13399v1#S4.SS3.SSS2
Overcoming the Limits of Static Heuristics.
https://arxiv.org/html/2512.13399v1#S4.SS3.SSS2.Px1
5 Analysis
https://arxiv.org/html/2512.13399v1#S5
5.1 Optimization Dynamics
https://arxiv.org/html/2512.13399v1#S5.SS1
5.2 Evolution Dynamics of Reward Structures
https://arxiv.org/html/2512.13399v1#S5.SS2
6 Conclusion
https://arxiv.org/html/2512.13399v1#S6
Computational Cost.
https://arxiv.org/html/2512.13399v1#Sx1.SS0.SSS0.Px1
Dependency on Atomic Primitives.
https://arxiv.org/html/2512.13399v1#Sx1.SS0.SSS0.Px2
Long-Horizon Credit Assignment.
https://arxiv.org/html/2512.13399v1#Sx1.SS0.SSS0.Px3
A Preliminary Experiments
https://arxiv.org/html/2512.13399v1#A1
A.1 Experimental Setup
https://arxiv.org/html/2512.13399v1#A1.SS1
A.2 Results and Analysis
https://arxiv.org/html/2512.13399v1#A1.SS2
B Gradient Propagation on DERL
https://arxiv.org/html/2512.13399v1#A2
B.1 Gradient Propagation Flow
https://arxiv.org/html/2512.13399v1#A2.SS1
B.2 Meta-Gradient Propagation Compared with Previous Evolution
https://arxiv.org/html/2512.13399v1#A2.SS2
C Computational Cost Analysis
https://arxiv.org/html/2512.13399v1#A3
C.1 Computational Breakdown
https://arxiv.org/html/2512.13399v1#A3.SS1
Inner-Loop Latency (The Bottleneck).
https://arxiv.org/html/2512.13399v1#A3.SS1.SSS0.Px1
C.2 Resource Estimation
https://arxiv.org/html/2512.13399v1#A3.SS2
C.3 Efficiency Improvements and Future Work
https://arxiv.org/html/2512.13399v1#A3.SS3
D Training Dynamics of DERL-pop.
https://arxiv.org/html/2512.13399v1#A4
E Examples of Outer-loop Evolution
https://arxiv.org/html/2512.13399v1#A5
License: arXiv.org perpetual non-exclusive license
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2512.13399v1 [cs.AI] 15 Dec 2025
Differentiable Evolutionary Reinforcement Learning
Report issue for preceding element
Sitao Cheng 
1∗
, Tianle Li 
2∗
, Xuhan Huang 
3∗
, Xunjian Yin 
4
, Difan Zou 
2
 
1
University of Waterloo 
2
 The University of Hong Kong 
3
The Chinese University of Hong Kong, Shenzhen 
4
 Duke University
sitao.cheng@uwaterloo.ca tianleli@connect.hku.hk xuhanhuang@link.cuhk.edu.cn
Report issue for preceding element
Abstract
Report issue for preceding element
The design of effective reward functions presents a central and often arduous challenge in reinforcement learning (RL), particularly when developing autonomous agents for complex reasoning tasks. While automated reward optimization approaches exist, they typically rely on derivative-free evolutionary heuristics that treat the reward function as a black box, failing to capture the causal relationship between reward structure and task performance. To bridge this gap, we propose Differentiable Evolutionary Reinforcement Learning ( DERL), a bi-level framework that enables the autonomous discovery of optimal reward signals. In DERL, a Meta-Optimizer evolves a reward function ( i.e., Meta-Reward) by composing structured atomic primitives, guiding the training of an inner-loop policy. Crucially, unlike previous evolution, DERL is differentiable in its meta-optimization: it treats the inner-loop validation performance as a signal to update the Meta-Optimizer via reinforcement learning. This allows DERL to approximate the “meta-gradient” of task success, progressively learning to generate denser and more actionable feedback. We validate DERL across three distinct domains: robotic agent (ALFWorld), scientific simulation (ScienceWorld), and mathematical reasoning (GSM8k, MATH). Experimental results show that DERL achieves state-of-the-art performance on ALFWorld and ScienceWorld, significantly outperforming methods relying on heuristic rewards, especially in out-of-distribution scenarios. Analysis of the evolutionary trajectory demonstrates that DERL successfully captures the intrinsic structure of tasks, enabling self-improving agent alignment without human intervention. We release our code and model at 
https://github.com/sitaocheng/DERL
https://github.com/sitaocheng/DERL
.
Report issue for preceding element
 
Figure 1: Illustration of DERL and performance of Meta-Reward. Left: Overview of DERL versus traditional approaches. In DERL, a Meta-Optimizer generates a parameterized Meta-Reward to guide policy model evolution. Crucially, the validation performance serves as a feedback signal to update the Meta-Optimizer via policy gradients, establishing a differentiable, closed-loop optimization process. DERL eliminates the need for heuristic design or expensive human annotation. Right: Performance comparison of outcome reward, avg reward ( i.e., average over atomic primitives) and Meta-Reward. Our Meta-Reward consistently outperforms all baselines in different tasks, demonstrating the effectiveness of DERL. Report issue for preceding element 
1
 
1
footnotetext: Equal Contribution
1 Introduction
Report issue for preceding element
In reinforcement learning (RL), the efficacy of autonomous agents hinges fundamentally on the quality of the reward signal—the critical lens through which an agent perceives its environment and guides learning toward desirable behaviors ( schulman2017proximal; shao2024deepseekmath; team2025kimi) . However, crafting an optimal reward function remains a persistent bottleneck ( skalse2022defining) . While manual reward engineering can be effective, it is notoriously brittle and prone to “reward hacking”, where agents exploit specification flaws to maximize scores without achieving the intended goal ( amodei2016concrete; yan2025reformreducinghuman) . In complex reasoning tasks, outcome-based signals ( e.g., success/failure binary flags) are often too sparse to drive efficient learning over long horizons. Consequently, the field has leaned heavily on human-in-the-loop paradigms, such as Reinforcement Learning from Human Feedback (RLHF) ( christiano2017deep; ouyang2022training) , which rely on extensive human annotations to train a dense reward model (shown in the top left of Figure 
1
https://arxiv.org/html/2512.13399v1#S0.F1
). Yet, as highlighted by Sutton's “The Bitter Lesson” ( sutton2019bitter) , strategies dependent on specific human priors are ultimately less scalable than general methods that leverage computation to learn directly from experience.
Report issue for preceding element
To transcend the scalability limits of human dependency, studies have pivoted toward the automatic optimization of agent configurations, including reward functions, prompts, and other hyper-parameters. Early attempts employed genetic algorithms to evolve these configurations via stochastic mutations ( such2017deep; jaderberg2017population; jaderberg2019human) or another prompted agent ( zhang2025darwin; novikov2025alphaevolve) . In this context, “ evolution” typically refers to derivative-free optimization where a population of agents undergoes perturbations and selection based on fitness. A critical limitation, however, is that they are predominantly non-differentiable. These approaches treat the agent configuration as a black box, relying on mutations without explicitly capturing the causal relationship between a change in the configuration and the resulting shift in agent performance. This inability to learn a non-arbitrary structure—the relationship between the reward function and agent performance—renders these methods sample-inefficient and difficult to scale, as they are forced to blindly traverse the optimization landscape without exploiting the intrinsic structural logic that drives improvement.
Report issue for preceding element
When human experts tune a system, they possess an intuitive meta-gradient—the consciousness that modifying a specific reward parameter will likely yield a specific behavioral shift ( knox2009interactively) . We hypothesize that the Large Language Models (LLMs) are able to capture this meta-gradient to update their own parameters, thereby generating progressively better reward functions. To this end, we propose Differentiable Evolutionary Reinforcement Learning ( DERL), a framework that enables the autonomous discovery of optimal objectives. As shown in the lower left of Figure 
1
https://arxiv.org/html/2512.13399v1#S0.F1
, unlike traditional reward design, DERL is fully differentiable in its meta-optimization: it utilizes feedback from the performance of the policy model to update the weights of a Meta-Optimizer (a trainable LLM) via policy gradients, rather than just manipulating context. DERL features a bi-level evolutionary process: an inner-loop where the policy model evolves based on generated Meta-Reward, and an outer-loop where the Meta-Optimizer itself evolves by learning from the validation performance of the inner policy. While DERL is generalizable to any agent configurations, we focus this work on Reward Modeling, since it represents the critical yet challenging component to optimize, acting as the primary driver of agent behavior. We demonstrate an implementation with Group Relative Policy Optimization (GRPO) ( shao2024deepseekmath) in Figure 
2
https://arxiv.org/html/2512.13399v1#S3.F2
.
Report issue for preceding element
The technical realization of DERL addresses two core challenges: defining a tractable action space and establishing a valid supervisory signal for the Meta-Optimizer. First, instead of generating arbitrary text from scratch, which introduces a vast search space, our Meta-Optimizer constructs rewards by composing atomic primitives, like tool-augmented agents ( qin2023toolllm; huang-etal-2024-queryagent) . These primitives are modular, executable functional blocks that are easy to obtain ( e.g., format checkers, partial goal verifiers) that serve as a structured search space. This design ensures expressiveness–allowing the inclusion of outcome rewards and logical constraints–while constraining the model to learn structural logic rather than struggling with text parsing. Second, to alleviate human labor, DERL utilizes the validation performance of the inner-loop policy as the direct feedback signal. By observing how different reward structures impact the policy's final performance, the Meta-Optimizer approximates the gradient of task success, learning to generate Meta-Rewards with increasingly dense and actionable feedback signals via Reinforcement Learning.
Report issue for preceding element
We empirically validate DERL across three distinct domains: Robotic Agents (ALFWorld ( shridhar2020alfworld) ), Scientific Simulation (ScienceWorld ( wang2022scienceworld) ), and Mathematical Reasoning (GSM8k ( cobbe2021gsm8k) and MATH ( hendrycks2021measuring) ). Experimental results demonstrate that DERL not only generalizes effectively across these diverse tasks but also consistently outperforms methods relying on sparse outcome rewards or human-designed heuristics. Notably, DERL achieves new state-of-the-art (SOTA) performance on robotic and scientific benchmarks, showing exceptional robustness in Out-of-Distribution (O.O.D.) scenarios. Further analysis of the evolutionary process reveals that the Meta-Optimizer successfully captures the meta-gradient: as training progresses, the generated Meta-Rewards evolve to encode the intrinsic structure of the tasks, demonstrating a self-exploratory capability that aligns with the true gradient of optimization. Our contributions are summarized as follows:
Report issue for preceding element
∙ \bullet We introduce Differentiable Evolutionary Reinforcement Learning ( DERL), a bi-level optimization framework that automates the discovery of reward functions. Unlike traditional evolutionary methods that treat agent configuration as a black box, DERL enables the Meta-Optimizer to capture the gradient between reward structures and task performance, allowing it to update its own parameters to generate increasingly effective Meta-Rewards.
Report issue for preceding element
∙ \bullet We introduce a novel Meta-Optimizer architecture that constructs rewards by composing atomic primitives–modular, executable functions–rather than generating arbitrary text. By utilizing the validation performance of the inner-loop policy as a supervisory signal, we formulate reward generation as a reinforcement learning problem, eliminating the need for human annotation while ensuring a distinct, logical search space.
Report issue for preceding element
∙ \bullet We validate DERL across diverse domains, including robotic agent, scientific simulation, and mathematical reasoning. DERL achieves state-of-the-art performance on robotic and scientific benchmarks ( i.e., ALFWorld, ScienceWorld), demonstrating superior robustness in O.O.D. scenarios. Further analysis confirms that our Meta-Optimizer successfully evolves to capture the intrinsic structure of tasks, progressively refining the reward signal without human intervention.
Report issue for preceding element
2 Related Work
Report issue for preceding element
Agentic Evolution of LLMs
Report issue for preceding element
The capabilities of LLMs have recently shifted towards agentic systems that encompass complex planning, tool usage, and self-correction mechanisms ( wu2024autogen; qin2023toolllm) . However, the deployment of LLMs as agents is critically bottlenecked by their reliance on human-engineered configurations ( e.g., prompts, workflow, codes, reward functions, etc), which are non-scalable and brittle ( sutton2019bitter; sarkar2025evolution) . While evolutionary algorithms attempt to optimize agent configurations, they operate in a discrete, black-box manner by permutation ( jaderberg2017population; chen2025reshapingreasoningllmstheoretical; fang2025comprehensive) or a prompted agent ( yin2024g; novikov2025alphaevolve; zhang2025darwin; shao2025dr) , relying only on sparse final fitness scores and failing to exploit the rich information embedded in the training dynamics ( gao2025survey) . Our DERL introduces a parameterized Meta-Optimizer that enables a gradient-guided search for optimal configurations. Leveraging the validation performance of the optimizee as a reward signal, DERL validates that the meta-gradient can be captured by the evolutionary process, moving beyond human priors toward a scalable, computation-driven optimization mechanism.
Report issue for preceding element
Learning to Learn
Report issue for preceding element
Learning to learn, a.k.a. meta-learning, focuses on developing models or algorithms that can rapidly adapt to new tasks by leveraging experience gained from other related tasks ( vilalta2002meta-survey; xu2018meta) . It essentially automates the traditional manual processes, e.g., hyper-parameter optimization, the selection of appropriate learning algorithms ( andrychowicz2016learninglearngradientdescent) . Recent work has extended this concept to RL, where a meta-learner is designed to optimize the inner-loop learning process of an RL agent ( Bello2017Neural; agarwal2019learning; xu2020meta; oh2020discovering; anonymous2025temperature) . However, as reward modeling is demanding, whether the optimization of reward signal can be learned by a meta-model is understudied. Our DERL is the first to formalize the automated reward search as a bi-level meta-optimization problem with LLMs, leveraging principles from meta-learning to optimize a meaningful reward function.
Report issue for preceding element
Reward Modeling
Report issue for preceding element
The success of LLM alignment hinges on the reward function providing feedback for agent evolution through reinforcement learning ( schulman2017proximal) . This is complicated by the dilemma between sparse, objective outcome reward ( shao2024deepseekmath; tang2025calmstormunlockingnative) and dense, but expensive, human-annotated reward (such as those used in RLHF) ( wang2025reinforcementlearningreasoninglarge; ouyang2022training) . Recent studies seek open-ended reward by training a model on large-scale LLM-annotated web-crawled data ( ma2025general; zhang2024generative; Ma2024eureka) . Others design heuristic rewards which requires complex manual coordination and may even degrade performance if naively combined ( zhang2025rlvmr; wei2025truthrl; yu2025dapo; yan2025reformreducinghuman) . To address these challenges, our DERL employs a Meta-Optimizer to automatically generate reward functions without relying on external human preference data.
Report issue for preceding element
3 Differentiable Evolution Reinforcement Learning
Report issue for preceding element
We first introduce the general formulation of the Differentiable Evolutionary Reinforcement Learning ( DERL) framework, which models automated reward design as a bi-level optimization process. Subsequently, we detail its specific instantiation, focusing on reward parameterization and the algorithm's implementation in the inner and outer loops.
Report issue for preceding element
3.1 Bi-Level Evolutionary Training
Report issue for preceding element
To reduce human dependency in RL for Large Language Models, automated reward design has emerged as a critical research direction. A prevalent methodological paradigm is to treat the target function parameterization as a configuration to be optimized via evolutionary search, a strategy widely adopted across various automated design tasks ( Romera24mathematical) . However, conventional implementations of this paradigm primarily rely on genetic algorithms driven by stochastic mutations ( Chen2023Symbolic; jaderberg2017populationbasedtrainingneural) or heuristic optimization via prompted agents ( Ma2024eureka; ma2025automatedrewarddesigngran) . Crucially, these approaches function as zero-order optimizers; they are inherently “blind” to the underlying optimization landscape and fail to capture the meta-gradient. This limitation results in significant sample inefficiency, analogous to the performance disparity between random grid search and gradient descent in function optimization.
Report issue for preceding element
Mitigating such inefficiencies necessitates reformulating the discrete evolutionary search over reward configurations into a continuous, differentiable optimization process. This transformation enables the capture and utilization of meta-gradients to guide the search. Drawing inspiration from Bello2017Neural , who employed RL to discover optimization algorithms, we propose DERL: a bi-level evolutionary framework. In this framework, the outer level (loop) consists of a Meta-Optimizer ψ \psi trained via RL to generate the reward configuration ϕ \phi (which instantiates the reward function R ϕ R_{\phi} ), while the inner level (loop) optimizes a policy model θ \theta under the provided reward function R ϕ R_{\phi} . The overall training process is illustrated in Figure 
2
https://arxiv.org/html/2512.13399v1#S3.F2
. Specifically, the bi-level optimization problem is formulated as follows:
Report issue for preceding element
Inner-loop (Policy Model Optimization)
Report issue for preceding element
Given a reward configuration ϕ \phi generated by the outer loop, the inner-loop policy θ \theta is optimized to maximize the expected parameterized reward:
Report issue for preceding element
𝒥 ϕ inner  ( θ ) = 𝔼 x ∈ 𝒟 , τ ∼ π θ ( ⋅ | x )  [ R ϕ  ( τ ) ] , \mathcal{J}^{\text{inner}}
{\phi}(\theta)=\mathbb{E}
{x\in\mathcal{D},\tau\sim\pi_{\theta}(\cdot|x)}[R_{\phi}(\tau)],
(1)
where 𝒟 \mathcal{D} represents the training dataset and τ \tau denotes the trajectories sampled from the policy model.
Report issue for preceding element
Outer-loop (Meta-optimizer Evolution)
Report issue for preceding element
The objective of the outer loop is to optimize the Meta-Optimizer ψ \psi to generate reward configurations that yield high-performing inner policies. Building upon the findings of Bello2017Neural , who demonstrated that reinforcement learning could effectively discover novel optimization algorithms, we postulate that a similar data-driven paradigm can automate the discovery of complex reward functions. Accordingly, we employ RL to train the Meta-Optimizer ψ \psi .
Report issue for preceding element
Formally, the Meta-Optimizer acts as a generator policy π ψ ( ⋅ | ins ) \pi_{\psi}(\cdot|\texttt{ins}) , taking the task instruction ins as context and outputting a configuration ϕ \phi . This configuration instantiates the Meta-Reward R ϕ R_{\phi} used in Equation 
1
https://arxiv.org/html/2512.13399v1#S3.E1
. Once the inner policy converges to an optimal θ ∗ \theta^{*} under R ϕ R_{\phi} , it is evaluated against the performance metric Perf  ( ⋅ ) \text{Perf}(\cdot) ( e.g., accuracy calculated over ground-truth) on a validation set. We utilize this performance score as the outer feedback signal ( i.e., the reward) for the Meta-Optimizer ψ \psi . Consequently, the Meta-Optimizer aims to maximize the following bi-level objective:
Report issue for preceding element
𝒥 outer  ( ψ ) = 𝔼 ϕ ∼ π ψ ( ⋅ | ins )  [ Perf  ( θ ∗ ) ] , s.t. θ ∗ = arg  max θ  𝒥 ϕ inner  ( θ ) . \begin{split}\vskip-6.0pt\mathcal{J}^{\text{outer}}(\psi)&=\mathbb{E}
{\phi\sim\pi
{\psi}(\cdot|\texttt{ins})}[\text{Perf}(\theta^{
})],\ \text{s.t.}\quad\theta^{
}&=\arg\max_{\theta}\mathcal{J}^{\text{inner}}_{\phi}(\theta).\end{split}
(2)
This bi-level training framework transforms the discrete evolutionary search over reward function into a continuous, differentiable optimization over the meta-policy parameters ψ \psi . Unlike genetic algorithms that rely on heuristic, stochastic mutations (blindly searching the space), DERL leverages a parameterized policy π ψ \pi_{\psi} to generate reward configurations. By applying policy gradients to ψ \psi , we effectively “learn the search direction,” transforming the zero-order reward search into a first-order optimization of the generator.
Report issue for preceding element
 
Figure 2: Bi-level evolutionary training for DERL. Blue Block: The evolution of Meta-Optimizer ψ \psi with n n generated Meta-Rewards R R ( i.e., rollouts). Taking a fixed task instruction as input, the Meta-Optimizer updates the parameter Φ \Phi of the Meta-Reward R R with the signal from validation performance v v . Green Block: The inner-loop training for policy model θ i \theta_{i} with Meta-Reward R ϕ i R_{\phi_{i}} by GRPO. We evaluate the validation performance for each θ i \theta_{i} as the reward of R ϕ i R_{\phi_{i}} , making it a differentiable signal for the Meta-Optimizer to evolve through reinforcement learning. Report issue for preceding element
3.2 Instantiation of DERL
Report issue for preceding element
In this section, we detail the specific instantiation of the DERL framework, focusing on the symbolic reward parameterization and the algorithmic implementations for both the inner and outer loops.
Report issue for preceding element
Reward Parameterization
Report issue for preceding element
A central challenge in the evolution of Meta-Optimization lies in defining the specific output configuration (which serves as the reward function for the inner loop) and the corresponding feedback signal used to update the Meta-Optimizer. Traditional reward design methods typically leverage heuristic scalar functions. These are often sparse and necessitate significant manual effort to analyze validation failures ( shao2024deepseekmath) . Alternatively, some approaches employ learned reward models ( e.g., LLM-as-a-Judge) to address brittleness and scalability. However, training such models incurs a high cost in human annotation. To bridge this gap, we directly parameterize the reward function structure. Instead of predicting a scalar reward value, the Meta-Optimizer generates a reward configuration ϕ \phi —a symbolic definition that dictates how to evaluate the inner-loop agent. This formulation not only eliminates the need for expensive human annotation to train a reward model but also enables the system to automatically evolve complex, non-linear evaluation criteria, thereby significantly reducing human dependency.
Report issue for preceding element
To ensure a structured yet expressive search space, we define the reward function as a symbolic composition of atomic primitives 𝒢 = { g 1 , g 2 , … , g k } \mathcal{G}={g_{1},g_{2},\dots,g_{k}} . These primitives are functions that evaluate specific aspects of a model's generation, o o . Crucially, many primitives require not only the generation but also a context variable, 𝒞 \mathcal{C} , which contains information like the input question q q and ground-truth answer a ∗ a^{
} . Example primitives include checking final outcome correctness ( e.g., comparing o o to a ∗ a^{
} ), adherence to formatting rules in 𝒞 \mathcal{C} , or process heuristics like step counts. Based on these primitives, the Meta-Optimizer ψ \psi does not predict a scalar reward directly. Instead, it predicts the structure and weights ( ϕ \phi ) that combine these signals through mathematical composition. The reward function is therefore defined as:
Report issue for preceding element
R ϕ  ( o , 𝒞 ) = Func  ( g 1  ( o , 𝒞 ) , … , g k  ( o , 𝒞 ) ; ϕ ) R_{\phi}(o,\mathcal{C})=\text{Func}(g_{1}(o,\mathcal{C}),\dots,g_{k}(o,\mathcal{C});\phi)
(3)
where Func  ( ⋅ ) \text{Func}(\cdot) represents the symbolic execution of the configuration ϕ \phi , which involves applying weights and mathematical operators ( e.g., summation, logical conditions) to the primitive outputs.
Report issue for preceding element
The merits of design are threefold: 1) Coverage of a large and continuous search space for exploration. Equation 
3
https://arxiv.org/html/2512.13399v1#S3.E3
 is a super-set of the standard outcome reward and takes any other factors into account, ensuring a search space which is more informative than the sparse outcome signal. 2) Structural reasoning on varying aspects. The meta-optimizer can focus on considering various aspects of the problem instead of processing tedious textual output. 3) Extensibility. The framework effectively decouples the definition of atomic signals from their utilization during meta-optimization. This separation renders the system agnostic to the specific choice of 𝒢 \mathcal{G} , thereby facilitating seamless generalization to new tasks. One can incorporate a diverse array of potential discriminators—ranging from rigorous constraints to task-specific heuristics, or even noisy and potentially detrimental signals. The evolutionary process then acts as an automated filter, identifying the optimal composition and combining these factors without requiring manual verification of their individual efficacy.
Report issue for preceding element
Inner-loop (Policy Model Optimization)
Report issue for preceding element
We utilize Group Relative Policy Optimization (GRPO) ( shao2024deepseekmath) as the algorithm for the inner loop (illustrated in the green block of Figure 
2
https://arxiv.org/html/2512.13399v1#S3.F2
). The objective is defined as:
Report issue for preceding element
𝔼 q ∼ P  ( 𝒟 ) { o i } i = 1 G ∼ π θ old ( ⋅ ∣ q ) [ 1 G  ∑ i = 1 G min  ( π θ  ( o i ∣ q ) π θ old  ( o i ∣ q )  A i , clip  ( π θ  ( o i ∣ q ) π θ old  ( o i ∣ q ) , 1 − ϵ , 1 + ϵ )  A i ) − β  D KL  ( π θ ∥ π ref ) ] , \displaystyle\mathop{\mathbb{E}}\limits_{\begin{subarray}{c}q\sim P(\mathcal{D})\ {o_{i}}
{i=1}^{G}\sim\pi
{\theta_{\mathrm{old}}}(\cdot\mid q)\end{subarray}}\Biggl[\frac{1}{G}\sum_{i=1}^{G}\min\Bigl(\frac{\pi_{\theta}(o_{i}\mid q)}{\pi_{\theta_{\mathrm{old}}}(o_{i}\mid q)},A_{i},;\mathrm{clip}\bigl(\tfrac{\pi_{\theta}(o_{i}\mid q)}{\pi_{\theta_{\mathrm{old}}}(o_{i}\mid q)},,1-\epsilon,,1+\epsilon\bigr),A_{i}\Bigr)-\beta,D_{\mathrm{KL}}(\pi_{\theta}|\pi_{\mathrm{ref}})\Biggr],
(4)
where, for each question q q from the training set 𝒟 \mathcal{D} , we sample a group of G G outputs { o i } i = 1 G {o_{i}}
{i=1}^{G} from the old policy π θ old \pi
{\theta_{\mathrm{old}}} . The models π θ \pi_{\theta} and π θ old \pi_{\theta_{\mathrm{old}}} are the current and previous policies, respectively. The terms ϵ \epsilon and β \beta are hyper-parameters for the clipping range and the KL-divergence penalty against a reference policy π ref \pi_{\mathrm{ref}} , with D K  L D_{KL} detailed in shao2024deepseekmath . Crucially, A i A_{i} represents the group-wise advantage derived from the parameterized reward function within each group. For each output o i o_{i} in a group, generated with respect to a given context 𝒞 \mathcal{C} , the reward r i r_{i} is computed. The advantage is then defined as:
Report issue for preceding element
A i = r i − mean  ( { r j } j = 1 G ) std  ( { r j } j = 1 G ) , where  r i = R ϕ  ( o i , 𝒞 ) . A_{i}=\frac{r_{i}-\text{mean}({r_{j}}
{j=1}^{G})}{\text{std}({r
{j}}
{j=1}^{G})},\quad\text{where }r
{i}=R_{\phi}(o_{i},\mathcal{C}).
(5)
To investigate the impact of model plasticity and optimization efficiency, we implement two distinct initialization strategies for the inner loop: 1) Standard Initialization ( DERL): In this setting, the policy model θ \theta is re-initialized from the base model at the beginning of each inner loop. This ensures that the performance of θ \theta is solely attributable to the efficacy of the current reward configuration ϕ \phi , providing an unbiased evaluation signal to the Meta-Optimizer. 2) Population-based Variant ( DERL-Pop.): In the first inner-loop, we initialize the policy model from scratch. In later inner-loop training, we initialize the policy model as the model with the best validation performance from the last loop. This is similar to traditional evolutionary training where the policy model is evolved based on different training configurations ( shao2025dr; jaderberg2017population) , but our Meta-Optimizer captures the meta-gradient in a differentiable way. Moreover, the bi-level evolutionary training demonstrates a dynamic Meta-Reward signal. For fair comparison, we make sure that the total training step for DERL-pop.'s inner-loop policy model remains the same as standard DERL. This also saves computation because the outer-loop evolves more frequently.
Report issue for preceding element
Outer-loop (Meta-optimizer Evolution)
Report issue for preceding element
We similarly employ GRPO to optimize the outer loop (blue block in Figure 
2
https://arxiv.org/html/2512.13399v1#S3.F2
). In each iteration, the Meta-Optimizer π ψ \pi_{\psi} samples a group of n n reward configurations Φ = { ϕ 1 , ϕ 2 , … , ϕ n } \Phi={\phi_{1},\phi_{2},\dots,\phi_{n}} , where n n denotes the rollout size. Each configuration ϕ i \phi_{i} is used to instantiate a reward function R ϕ i R_{\phi_{i}} for training a corresponding inner-loop policy θ i \theta_{i} .
Report issue for preceding element
Upon completion of the inner-loop training, we evaluate each policy θ i \theta_{i} on a held-out validation set 𝒱 \mathcal{V} to compute the performance score v i = Perf  ( θ i ) v_{i}=\text{Perf}(\theta_{i}) , using the pass@1 accuracy metric:
Report issue for preceding element
Perf  ( θ ) = 1 | V |  ∑ ( q , a ∗ ) ∈ 𝒱 𝕀  ( f θ  ( q ) = a ∗ ) , \text{Perf}(\theta)=\frac{1}{|V|}\sum_{(q,a^{
})\in\mathcal{V}}\mathbb{I}(f_{\theta}(q)=a^{
}),
(6)
where f θ  ( q ) f_{\theta}(q) denotes the output generated by the trained policy π θ \pi_{\theta} using deterministic decoding, a ∗ a^{*} denotes ground truth, and 𝕀  ( ⋅ ) \mathbb{I}(\cdot) denotes indicator function. The resulting validation scores { v 1 , … , v n } {v_{1},\dots,v_{n}} serve as the feedback signals (outer rewards) for the corresponding configurations { ϕ 1 , … , ϕ n } {\phi_{1},\dots,\phi_{n}} . We then compute the group-wise advantage (same as the inner loop) to update the Meta-Optimizer parameters ψ \psi .
Report issue for preceding element
To ensure the stability of this symbolic generation process, we implement three constraints: 1) Cold Start: We apply Supervised Fine-Tuning (SFT) to the Meta-Optimizer on a small set of valid format examples to initialize the policy. 2) Constrained Decoding: During generation, we enforce token-level constraints to ensure the validity of tokens in the output ϕ \phi . 3) Validity Penalty: In rare cases where a generated ϕ i \phi_{i} is mathematically ill-defined ( e.g., resulting in execution errors), we assign a penalty reward v i = 0 v_{i}=0 to suppress such generations.
Report issue for preceding element
Crucially, this formulation establishes a closed-loop computation graph. By utilizing the validation performance as a scalar feedback signal for the generated configuration, we enable the meta-gradient to be estimated and applied to the generator. This effectively propagates the non-differentiable validation signal back to the Meta-Optimizer parameters ψ \psi , allowing the system to learn the optimal search direction in the reward landscape. An illustration of this gradient flow through the bi-level optimization process is provided in Appendix 
B.1
https://arxiv.org/html/2512.13399v1#A2.SS1
.
Report issue for preceding element
The differentiable nature of DERL offers profound implications for scalability and automation. Unlike non-differentiable paradigms that often necessitate manual supervision or heuristic signal design to guide the search, our framework establishes a direct, gradient-based optimization path between downstream performance and reward configuration. This allows the Meta-Optimizer to be trained directly via autonomous interaction, eliminating the bottleneck of human intervention. Consequently, DERL enables the autonomous synthesis of dense feedback signals from sparse outcome-based signals, effectively resolving the scalability challenge in complex domains where manual reward engineering is infeasible or prohibitively expensive.
Report issue for preceding element
We empirically verify the effectiveness of this framework in Section 
4
https://arxiv.org/html/2512.13399v1#S4
. Our evaluation starts with a proof-of-concept experiment to showcase the framework's ability to navigate the reward landscape, followed by extensive experiments validating its generalization to various real-world applications.
Report issue for preceding element
4 Experiments
Report issue for preceding element
We validate our DERL framework across three diverse domains that necessitate complex reasoning, i.e., Robotic Agents, Scientific Simulation and Mathematical Reasoning. We introduce benchmarks and baselines in Section 
4.1
https://arxiv.org/html/2512.13399v1#S4.SS1
. We instantiate atomic primitives and setups in section 
4.2
https://arxiv.org/html/2512.13399v1#S4.SS2
.
Report issue for preceding element
4.1 Experiment Setups
Report issue for preceding element
Robotic Agent
Report issue for preceding element
We evaluate the effectiveness of DERL on a multi-round robotic agent task, i.e., ALFWorld ( shridhar2020alfworld) . This benchmark requires learning to complete embodied household tasks using natural language or visual observations. To rigorously assess the generalization capability, inspired by zhang2025rlvmr , we divide the task into three levels difficulty based on the distribution shift of training and testing data: L0 (in-distribution, seen): trained on all 6 task types and evaluated on seen variants; L1 (in-distribution, unseen): trained on all 6 task types but evaluated on unseen variants; L2 (out-of-distribution), trained only on 4 task types and evaluated on the remaining 2 unseen types.
Report issue for preceding element
We compare DERL with standard reinforcement learning baselines: 1) GRPO w/ Outcome Reward: GRPO with binary outcome rewards. 2) GRPO w/ Avg Reward: As we introduce the atomic primitives, a common practice is to calculate the weighted sum over all functions. To demonstrate DERL's exploration of an optimal reward structure over the search space, we compare our Meta-Reward with the average weighted sum. 3) GiGPO ( feng2025group) , introducing a two-level structure for finer-grained credit assignment. 4) RLVMR ( zhang2025rlvmr) , with structured verifiable process reward, which is the previous state-of-the-art method. We do not compare with LLM-based reward models due to their high resource intensity, particularly since ground-truth outcome signals are readily available for our target domains.
Report issue for preceding element
Scientific Simulation
Report issue for preceding element
For science domain, we adopt ScienceWorld ( wang2022scienceworld) , an interactive text environment at the level of a standard elementary school science curriculum, testing the agents' scientific reasoning abilities. To ensure consistent evaluation of generalization, we apply the three levels of difficulty as in the Robotic agent tasks ( i.e., L0, L1, and L2). We compare DERL against the same set of baseline methods as for Robotic Agent task.
Report issue for preceding element
Mathematical Reasoning
Report issue for preceding element
For math domain, we evaluate DERL on two established benchmarks: GSM8K ( cobbe2021gsm8k) for grade-school math and MATH ( hendrycks2021measuring) for advanced competition-level problems. We vary the training data by using either the MATH training set, which contains more difficult maths problems, or the training data combining the MATH and GSM8k, which contains both easy and hard problems.
Report issue for preceding element
We benchmark against a set of baselines varying in reward structure: 1) Outcome: a standard binary outcome-based reward; 2) Outcome + Format: the outcome rewards augmented with format reward; and 3) Avg Reward: the average reward over all individual atomic primitives.
Report issue for preceding element
4.2 Implementation Details
Report issue for preceding element
Robotic Agent and Scientific Simulation
Report issue for preceding element
We introduce four atomic primitives to construct the search space for Meta-Reward. The first is the binary outcome reward, others are captured from three stages of process reward of the interaction trajectory, inspired by zhang2025rlvmr . Specifically, we compute the average reward over the first, middle and last third of steps of the interaction trajectory, respectively. This straightforward design incentivizes the model to attend to distinct temporal phases of the task. For instance, given a six-step interaction with a step-wise reward sequence of [ 1 , 0 , 1 , 1 , 0 , 0 ] [1,0,1,1,0,0] , the atomic primitives corresponding to the three temporal segments yield values of 0.5 0.5 , 1 1 , and 0 , respectively.
Report issue for preceding element
We implement DERL with GRPO through the VeRL framework ( sheng2024verl) . For outer-loop, we set number of rollouts to 8. Other hyper-parameters remain the same as default. For inner-loop, we employ Qwen2.5-1.5B-Instruct as the base policy with a cold start (which is the same as other baselines). We set epoch to 40 for ALFWorld and 80 for ScienceWorld, respectively. After obtaining the optimal Meta-Reward, we train the policy model (from scratch) using this reward function for 100 steps, the same as RLVMR, whereas other baselines are trained for 150 steps. The Meta-Optimizer achieves convergence in approximately ten and five outer-loop iterations for ALFWorld and ScienceWorld, respectively. For DERL-pop., we train the outer-loop for 10 rounds and set the training epochs for inner-loops to 10 on the ALFWorld task. On the ScienceWorld task, we train the outer-loop for 3 rounds and the inner-loop for 33 rounds, to ensure the consistency of the total training epochs for the inner-loop. We finally report the success rate on the test set, i.e., whether the model can ultimately complete the task.
Report issue for preceding element
Table 1: Success rates of DERL and different RL baselines on ALFWorld and ScienceWorld, based on three levels of generalization difficulty (Section 
4.1
https://arxiv.org/html/2512.13399v1#S4.SS1
). The base model is Qwen2.5-1.5B-Instruct. The GRPO baselines are run by ourselves. Other baseline results are from zhang2025rlvmr . Bold and underline denotes the best and second best performance. Our method, DERL, outperforms all baselines in all difficulty levels across all benchmarks, achieving state-of-the-art performance.
| Method | ALFWorld ||| ScienceWorld |||
 
| ^^ | L0 | L1 | L2 | L0 | L1 | L2 |
 
| --- | --- | --- | --- | --- | --- | --- |
 
| GRPO w/ Outcome Reward | 76.6 | 71.1 | 29.7 | 21.1 | 13.7 | 10.9 |
 
| GRPO w/ Avg Reward | 88.1 | 85.4 | 30.5 | 37.9 | 31.3 | 18.0 |
 
| GiGPO | 86.7 | 83.2 | 48.0 | 25.8 | 15.2 | 4.7 |
 
| RLVMR | 89.1 | 87.9 | 56.3 | 46.9 | 34.4 | 26.5 |
 
| DERL | 91.0 | 89.1 | 65.0 | 47.7 | 43.0 | 30.1 |
 
| DERL-pop. | 91.8 | 88.3 | 76.4 | 98.2 | 95.3 | 31.3 |
Report issue for preceding element
Mathematical Reasoning
Report issue for preceding element
For mathematical reasoning, we construct a reward space with four straightforward atomic signals: 1) Binary outcome reward; 2) Format reward that verifies if the answer is enclosed in “ b  o  x  e  d  { } boxed{} ”; 3) Step-by-step reward, identifying whether the output contains CoT tokens like “step1”, “first”, etc; 4) Soft outcome reward that credits the presence of the ground truth anywhere in the output, which would benefit when the model indeed knows how to answer but generates in a wrong format.
Report issue for preceding element
For outer-loop, we keep all training configurations the same as other tasks. For inner-loop, we adopt Qwen-2.5-3B as the base policy model. We train for 10 epochs and enforce a time limit of 3.5 hours for any inner-loop training. With these settings, the Meta-Optimizer achieves convergence in approximately 8 outer-loop iterations. We then take the optimal Meta-Reward to train the base policy for 15 epochs for fair comparison with all baselines. For DERL-pop., we train each inner-loop for 2 epochs and report the testing result after the seventh outer-loop iteration for fair comparison. We evaluate the exact match of the ground truth answer in the test set.
Report issue for preceding element
4.3 Results
Report issue for preceding element
We evaluate DERL across three domains to address two research questions: 1) Can DERL discover reward functions better than heuristics signals? 2) Does the learned Meta-Reward generalize better to out-of-distribution (O.O.D.) scenarios in complex reasoning tasks?
Report issue for preceding element
4.3.1 Robotic Agent and Scientific Simulation
Report issue for preceding element
Table 
1
https://arxiv.org/html/2512.13399v1#S4.T1
 presents the performance comparison of DERL with all baselines on both the Robotic Agent and Scientific Simulation benchmarks, based on three levels of generalization difficulty.
Report issue for preceding element
Table 2: Performance comparison on mathematical reasoning benchmarks. We report the accuracy of Qwen-2.5-3B on different training data using different reward functions. Our DERL outperforms all baselines, including the outcome reward, outcome reward with format reward, and reward using the average over atomic primitives. All experiments are run under the same configuration.
Reward Function
Training Data
GSM8k
MATH
Outcome
MATH+GSM8k
82.6
58.8
Outcome + Format
MATH+GSM8k
86.4
55.9
Avg Reward
MATH+GSM8k
86.5
55.8
Outcome
MATH
82.9
59.1
Outcome + Format
MATH
83.9
56.8
Avg Reward
MATH
83.6
54.9
DERL
MATH+GSM8k
87.0
60.2
DERL-pop.
MATH+GSM8k
87.6
60.2
DERL
MATH
83.2
60.5
DERL-pop.
MATH
84.1
60.9
Report issue for preceding element
State-of-the-Art Performance.
Report issue for preceding element
DERL achieves state-of-the-art success rates across all difficulty levels on both benchmarks. This indicates that the Meta-Optimizer effectively explores the function space to discover Meta-Rewards that drive policy improvement beyond standard outcome signals. Notably, our population-based instantiation, DERL-pop., further demonstrates exceptional performance, achieving 91.8% on ALFWorld (L0) and 98.2% on Science World (L0). This shows that by initializing the inner-loop policy with the best-performing model from previous generations, the Meta-Optimizer can effectively adapt the reward signal dynamically as the policy model evolves, creating a curriculum-like effect that accelerates convergence and elevates the performance ceiling. Appendix 
D
https://arxiv.org/html/2512.13399v1#A4
 details the training dynamics of DERL-pop.
Report issue for preceding element
Robustness in Out-of-Distribution (O.O.D.) Scenarios.
Report issue for preceding element
A critical limitation of heuristic rewards is their brittleness under distribution shifts. As shown in the L2 (O.O.D.) columns, standard baselines falter significantly. For instance, while “GRPO w/ Avg Reward” improves in-distribution (L0) performance by approximately 10% over “GRPO w/ Outcome Reward”, it fails to translate this gain to the O.O.D. setting (showing only a 0.8% improvement). This suggests that the straightforward reward summation encourages overfitting rather than genuine reasoning. In contrast, our DERL substantially improves the O.O.D. robustness, achieving 65.0% and 30.1% success rates on ALFWorld and Science World, respectively. This more than doubles the performance of the outcome reward baseline. Takeaway: The Meta-Reward captures the intrinsic structure of the task, enabling generalization to unseen scenarios where heuristic combinations fail.
Report issue for preceding element
4.3.2 Mathematical Reasoning
Report issue for preceding element
Overcoming the Limits of Static Heuristics.
Report issue for preceding element
Mathematical reasoning presents a unique challenge where the binary outcome reward is already a strong, albeit sparse, signal. Table 
2
https://arxiv.org/html/2512.13399v1#S4.T2
 illustrates the performance on GSM8K and MATH benchmark. We observe that naively incorporating auxiliary signals ( e.g., GRPO with Outcome + Format or Avg Reward) often degrades performance on the more difficult MATH dataset (dropping from 58.8% to 55.8%), likely due to “reward hacking” or distraction from the core reasoning path ( e.g., prioritizing formatting over correct reasoning). However, our DERL successfully navigates this pitfall. By autonomously optimizing the reward structure without any human effort, DERL outperforms all baseline reward functions, including the strong outcome reward ( e.g., 60.2% vs. 58.8% on MATH), with the population-based instantiation DERL-pop. further improving the performance. This demonstrates DERL's ability to navigate the delicate trade-off between signal density and signal fidelity. Takeaway: Even in domains with strong ground-truth signals, DERL discovers non-trivial reward compositions that provide denser feedback without introducing the noise associated with manual heuristic design.
Report issue for preceding element
5 Analysis
Report issue for preceding element
 
 
Report issue for preceding element
 
Report issue for preceding element
 
Report issue for preceding element
Figure 3: Optimization dynamics on ALFWorld, GSM8k and MATH Benchmark. The plots illustrate the training trajectories of the Meta-Optimizer, where the horizontal axis represents the number of training steps in the outer-loop. The blue and orange lines represent the average validation and testing performance over Meta-Reward ( i.e., “rollouts”), respectively. The results show that DERL optimizes and converges as the training step increases, without overfitting. Report issue for preceding element
Having demonstrated the empirical superiority of DERL, we now investigate the internal mechanisms driving these improvements. We focus on two key aspects: the optimization dynamics of the outer-loop and the structural evolution of the generated reward functions.
Report issue for preceding element
5.1 Optimization Dynamics
Report issue for preceding element
A critical question is whether the Meta-Optimizer genuinely learns a progressive optimization strategy or merely performs a random search over the function space. To investigate this, we visualize the training trajectories ( i.e., how the Meta-Optimizer evolves over training steps) on ALFWorld, GSM8K and MATH benchmarks in Figure 
3
https://arxiv.org/html/2512.13399v1#S5.F3
. We do not analyze on ScienceWorld because the Meta-Optimizer converges faster in this task. The horizontal axis represents the outer-loop update steps, while the vertical axis represents the performance over different tasks. Specifically, the performance is defined as the average validation accuracy of n n the inner-loop policies Θ = { θ 1 , θ 2 , … , θ n } \Theta={\theta_{1},\theta_{2},...,\theta_{n}} trained with n n generated Meta-Reward.
Report issue for preceding element
We observe a consistent, monotonic upward trend in both the average training and testing accuracy of the inner-loop policies as the outer-loop steps progress. Specifically, we find that the trend in mathematical reasoning is more stable as the Meta-Optimizer recognizes that such verifiable task is mainly driven by the outcome reward. For agent tasks, outer-loop optimization involves more exploration than exploitation, ultimately enabling robust evolution. Crucially, the concurrent rise in training and validation performance provides empirical verification that the Meta-Optimizer is not overfitting to the specific instances in the outer-loop training set. Instead, it successfully approximates the “meta-gradient” of task success. By leveraging the validation performance as a supervisory signal, the Meta-Optimizer iteratively refines the reward policy, generating increasingly effective feedback signals that guide the inner-loop agent toward higher performance.
Report issue for preceding element
5.2 Evolution Dynamics of Reward Structures
Report issue for preceding element
To elucidate the specific characteristics of the learned rewards, we analyze the structural composition of the Meta-Reward generated throughout the evolutionary process, i.e., the evolution dynamics. We categorize the generated combinations of atomic primitives into three distinct structural types based on their mathematical properties. We denote the atomic primitives as g 1 g_{1} , g 2 g_{2} , g 3 g_{3} , and g 4 g_{4} .
Report issue for preceding element
We define Stable Structures as those that adopt linear combinations or normalization mechanisms. For example, linear additions ( e.g. 0.5 ⋅ g 1 + 0.8 ⋅ g 2 0.5\cdot g_{1}+0.8\cdot g_{2} ) or division operations ( e.g., g 1 g 2 + 1 \frac{g_{1}}{g_{2}+1} ) that act similarly to sigmoid functions bound the output range. These structures mirror robust designs in deep learning, preventing numerical explosion while retaining sufficient expressivity to guide the agent. Conversely, we identify Unstable Structures, which predominantly feature unbounded products without normalization. A typical example is a chain of sequential multiplications ( e.g. g 1 ⋅ ( g 2 + 0.2 ) ⋅ g 3 g_{1}\cdot(g_{2}+0.2)\cdot g_{3} ). Such structures create a severe “veto” mechanism: if any single atomic signal approaches zero, the entire reward vanishes, leading to high variance and unstable gradient update. Finally, Invalid Structures refer to mathematically adversarial forms, such as assigning negative coefficients to positive signals ( e.g., − ( g 1 + 0.5 ⋅ g 2 ) -(g_{1}+0.5\cdot g_{2}) ), which penalize desirable behaviors and offer no optimization utility.
Report issue for preceding element
 
Figure 4: Evolution dynamics of reward structures on ALFWorld. We visualize the proportion of Stable Structures and Unstable Structures over outer-loop steps. The consistent upward trend of stable structures demonstrates the Meta-Optimizer's selection preference for mathematical robustness. Report issue for preceding element
Figure 
4
https://arxiv.org/html/2512.13399v1#S5.F4
 tracks the distribution of these structural categories over the course of training on ALFWorld. The evolutionary trajectory reveals a compelling “natural selection” phenomenon driven by the Meta-Gradient. In the early exploration phase, Unstable Structures appear frequently as the optimizer explores the search space. However, as training progresses, we observe a sharp decline in their prevalence. Simultaneously, the proportion of Stable Structures exhibits a strong upward trend, eventually becoming the dominant form. This dynamic suggests that the Meta-Optimizer effectively acts as an evolutionary filter for mathematical robustness. Without explicit human programming or constraints, our DERL implicitly “discovers” that consistent, bounded, and numerically stable rewards are a prerequisite for effective policy optimization, favoring these structures to maximize the long-term validation performance of the agent.
Report issue for preceding element
6 Conclusion
Report issue for preceding element
In this work, we introduced Differentiable Evolutionary Reinforcement Learning ( DERL), a bi-level evolutionary training framework that automates the discovery of reward functions for autonomous agents. By parameterizing the reward structure as a composition of atomic primitives and treating the validation performance of the inner-loop policy as a supervisory signal, DERL bridges the gap between black-box evolutionary heuristics and gradient-based optimization. Our approach enables the Meta-Optimizer to capture the “meta-gradient” of task success, allowing it to progressively learn dense, actionable feedback signals without reliance on expensive human annotations or sparse outcome flags.
Report issue for preceding element
We validate DERL across three diverse domains: robotic agent, scientific simulation, and mathematical reasoning. Empirical results demonstrate that our DERL consistently outperforms standard reinforcement learning baselines and human-designed heuristics. Most notably, DERL exhibits superior generalization capabilities in out-of-distribution (O.O.D.) scenarios, achieving state-of-the-art performance on the ALFWorld and Science World benchmarks. Furthermore, our analysis of the evolution dynamics reveals that the Meta-Optimizer naturally converges toward numerically stable and robust reward structures, effectively filtering out volatile signal combinations. This confirms that DERL is not merely a search algorithm, but a mechanism for discovering the intrinsic structural logic required for effective agent training.
Report issue for preceding element
Limitations and Future Work
Report issue for preceding element
While DERL demonstrates significant promise, several limitations remain that outline important directions for future research.
Report issue for preceding element
Computational Cost.
Report issue for preceding element
The primary bottleneck of our framework is the computational expense associated with the bi-level optimization structure. Since every update to the Meta-Optimizer requires the training of multiple inner-loop policies (“rollouts”), the process is resource-intensive compared to standard single-level RL. A detailed cost analysis is conducted in Appendix 
C
https://arxiv.org/html/2512.13399v1#A3
. We already provided DERL-pop. with higher efficiency and better performance. Future work could explore the integration of lightweight proxy tasks or more sample-efficient outer-loop algorithms ( e.g., REINFORCE++) to approximate the meta-gradient with reduced compute.
Report issue for preceding element
Dependency on Atomic Primitives.
Report issue for preceding element
The expressivity of the discovered reward functions is currently bounded by the set of atomic primitives defined in the search space. While our selection of primitives ( e.g., format checks, partial goal verifiers) are proved effective for the studied domains, the Meta-Optimizer cannot invent entirely new functional capabilities outside of this pre-defined grammar. Expanding the search space to include more granular or semantically rich primitives—potentially extracted automatically from task descriptions—remains an open challenge.
Report issue for preceding element
Long-Horizon Credit Assignment.
Report issue for preceding element
Although DERL improves upon sparse outcome rewards, the generated Meta-Rewards are still evaluated based on the final validation performance of the policy. In tasks with extremely long horizons or deceptive intermediate goals, the signal propagation from the final metric back to the specific reward parameters may still suffer from attenuation. Investigating intermediate meta-supervision signals could further enhance the stability and efficiency of the evolutionary process.
Report issue for preceding element
Appendix A Preliminary Experiments
Report issue for preceding element
In this section, we present a preliminary experiment designed to investigate the capacity of our proposed Meta-Reward mechanism to simulate and potentially enhance standard outcome-based rewards. Specifically, we utilize a computational graph parameterized by a small set of weights to derive a reward function, which is then utilized to train the inner-loop model.
Report issue for preceding element
A.1 Experimental Setup
Report issue for preceding element
Architecture. As illustrated in Figure 
5
https://arxiv.org/html/2512.13399v1#A1.F5
, the Meta-Optimizer is implemented via a graph neural network representing general computational graphs. The Meta-Reward function, parameterized by ϕ t \phi_{t} , is represented by a set of twelve learnable weights ( e.g., w a  d  d , w s  u  b , w m  u  l , … w_{add},w_{sub},w_{mul},\dots ) distributed across the computational nodes. The set of atomic primitives used in this graph remains consistent with those described in the main body of this paper (Section 
3
https://arxiv.org/html/2512.13399v1#S3
).
Report issue for preceding element
Training Protocols. We explore two distinct strategies to evolve the Meta-Optimizer:
Report issue for preceding element
• Supervised Fine-Tuning (SFT): In this setting, the Meta-Optimizer is trained to directly regress the ground truth outcome reward. The objective is to minimize the divergence between the generated Meta-Reward and the standard outcome signal (0.0 or 1.0). Report issue for preceding element
• Reinforcement Learning (RL): We formulate the optimization of weights w w as an RL problem. For each computation step, we sample operations based on the distribution of w w within each node. If the resulting Meta-Reward aligns with the ground truth outcome reward ( i.e., 𝕀  ( Meta-Reward = Outcome ) \mathbb{I}(\text{Meta-Reward}=\text{Outcome}) ), a reward of 1.0 1.0 is assigned to the current configuration of w w ; otherwise, the reward is 0.0 0.0 . Report issue for preceding element
Model and Data. To generate a diverse set of trajectories for training, we perform inference on the training sets of the GSM8K and MATH benchmarks using Qwen2.5-3B-Instruct. These trajectories serve as the basis for optimizing the Meta-Optimizer. Once Meta-Reward is learned, it is frozen and used to train the inner-loop policy model ( Qwen2.5-3B). The inner-loop training settings are identical to the baseline configuration to ensure a fair comparison.
Report issue for preceding element
 
Figure 5: Demonstration of the training loop our differentiable evolutionary reward. We adopt GRPO as an example RL algorithm for the inner-loop. In the outer-loop, we leverage a graph neural network to represent general computational graphs and obtain the final reward function Φ t \Phi_{t} parameterized by ϕ t = { w a  d  d , w s  u  b , … } \phi_{t}={w_{add},w_{sub},...} through differentiable optimization. Report issue for preceding element Table 3: Performance comparison on mathematical reasoning benchmarks. We compare the preliminary results of Meta-Reward with different baselines. The Meta-Optimizer utilize a 12-parameter graph optimizer to shape the reward signal
Reward Function
GSM8K
MATH
Outcome
82.6
58.8
Avg Reward
86.5
55.8
Meta-Reward (SFT)
85.5
62.9
Meta-Reward (RL)
83.2
59.9
Report issue for preceding element
A.2 Results and Analysis
Report issue for preceding element
Table 
3
https://arxiv.org/html/2512.13399v1#A1.T3
 presents the performance comparison between the standard outcome reward, an average reward baseline (same as the main experiments in Section 
4
https://arxiv.org/html/2512.13399v1#S4
), and our proposed Meta-Reward (SFT and RL). The results indicate that the Meta-Reward, despite being parameterized by only 12 weights, effectively discovers a reward function that outperforms the sparse outcome reward. Notably, on the challenging MATH dataset, the Meta-Reward (SFT) achieves a significant improvement over the Outcome baseline (62.9% vs. 58.8%).
Report issue for preceding element
These findings suggest that the Meta-Reward mechanism avoids overfitting to the rigid binary outcome signal. Analogous to an educational setting, using a binary outcome reward is akin to instructing a student solely to ”score 100 points,” which provides a sparse and high-variance signal. In contrast, our approach—constrained by the computational graph structure—encourages the model to learn a generalized heuristic. Although this is not an explicit process reward annotated by humans, the optimization process discovers an implicit, dense reward function that guides the model more effectively toward the correct reasoning path than the raw outcome signal alone.
Report issue for preceding element
Appendix B Gradient Propagation on DERL
Report issue for preceding element
In this section, we elaborate on the information flow between the meta-optimizer (parameterized by ψ \psi ) and the inner-loop policy model (the optimizee, parameterized by θ \theta ). A distinct feature of our DERL framework is the preservation and utilization of Meta-Gradient information, which allows the optimizer to explicitly learn from the validation performance of the optimizee.
Report issue for preceding element
B.1 Gradient Propagation Flow
Report issue for preceding element
The interaction between the optimizer and the optimizee unfolds as a bi-level optimization process, as illustrated in Figure 
6
https://arxiv.org/html/2512.13399v1#A2.F6
. Let v t v_{t} denote the validation performance (or evaluation metric) of the policy model θ t \theta_{t} at step t t . The optimization process consists of two coupled loops:
Report issue for preceding element
• Inner Loop (Optimizee): The policy model updates its parameters θ t − 1 → θ t \theta_{t-1}\to\theta_{t} based on the guidance of the Meta-Reward ℛ ϕ t \mathcal{R}
{\phi
{t}} provided by the optimizer. The optimizer then generates the update instructions (parameterized by ϕ t \phi_{t} ) conditioned on its current state ψ t \psi_{t} . Report issue for preceding element
• Outer Loop (Optimizer): The meta-optimizer evolves ψ t − 1 → ψ t \psi_{t-1}\to\psi_{t} by maximizing the expected future validation performance of the optimizee. Report issue for preceding element
Crucially, the update of the optimizer ψ \psi is driven by the gradient of the validation performance, denoted as ∇ 𝒥 outer  ( ψ t ) \nabla\mathcal{J}^{\text{outer}}(\psi_{t}) . This term represents the meta-gradient: it quantifies the sensitivity of the optimizee's performance with respect to the optimizer's parameters. By backpropagating the signal from the validation performance v v through the update step to ψ \psi , our DERL establishes a direct feedback loop.
Report issue for preceding element
 
Figure 6: Illustration of Gradient Propagation in bi-level evolutionary training loop. The top row (Orange) represents the trajectory of the optimizee θ \theta , updated via instructions ϕ \phi derived from the optimizer. The bottom row (Green) represents the evolution of the Meta-Optimizer ψ \psi . The blue nodes v t v_{t} denote the validation performance evaluation. Unlike static methods, our framework computes the meta-gradient ∇ 𝒥 outer  ( ψ t ) \nabla\mathcal{J}^{\text{outer}}(\psi_{t}) (vertical arrows), allowing the optimizer to update its own parameters ψ \psi to explicitly maximize the optimizee's performance. Report issue for preceding element
B.2 Meta-Gradient Propagation Compared with Previous Evolution
Report issue for preceding element
The core innovation of our framework lies in the end-to-end differentiability of the optimization trajectory, or how the feedback signal v t v_{t} is utilized. In traditional reinforcement learning or prompt-based optimization methods, the optimizer ψ \psi is often treated as a static entity ( e.g., a fixed prompted agent or a random perturbation generator). In such cases, the dependency chain is broken, and the “meta-gradient”—the gradient of the validation performance with respect to the optimizer's parameters—is lost.
Report issue for preceding element
In contrast, our approach treats ψ \psi as a learnable entity. We explicitly compute the gradient flow from the evaluation metric back to the optimizer parameters. As depicted in the bottom flow of Figure 
6
https://arxiv.org/html/2512.13399v1#A2.F6
, the optimizer updates its own parameters ψ \psi to maximize the expected future validation performance of the optimizee:
Report issue for preceding element
ψ t = ψ t − 1 + η ⋅ ∇ 𝒥 outer  ( ψ t − 1 ) \psi_{t}=\psi_{t-1}+\eta\cdot\nabla\mathcal{J}^{\text{outer}}(\psi_{t-1})
(7)
This derivation highlights that updating ψ \psi is fundamentally learning the meta-gradient. Unlike prior works where the optimizer is fixed (resulting in ∂ ϕ ∂ ψ = 0 \frac{\partial\phi}{\partial\psi}=0 or undefined), our DERL framework maintains a differentiable (or estimable) path. This enables the Meta-Optimizer to iteratively improve the reward structure ϕ \phi driven by direct performance feedback. In doing so, DERL serves as a foundational proof-of-concept for completely autonomous, self-improving frameworks.
Report issue for preceding element
Appendix C Computational Cost Analysis
Report issue for preceding element
In this section, we provide a detailed breakdown of the computational costs associated with the bi-level evolutionary training framework ( DERL) and discuss potential strategies for efficiency improvements.
Report issue for preceding element
C.1 Computational Breakdown
Report issue for preceding element
The training process consists of an outer-loop (Meta-Optimizer evolution) and an inner-loop (Policy Model evolution). We incorporate parallelism in most parts of DERL to improve GPU untilization. The computational cost is as summarized as follows:
Report issue for preceding element
The training process consists of an outer-loop (Meta-Optimizer evolution) and an inner-loop (Policy Model evolution). We incorporate parallelism in most parts of DERL to improve hardware utilization. The computational cost is summarized as follows:
Report issue for preceding element
Inner-Loop Latency (The Bottleneck).
Report issue for preceding element
The primary computational bottleneck lies in the inner-loop, where the policy model θ i \theta_{i} evolves ( e.g., interacts with the environment) using the Meta-Reward ℛ i \mathcal{R}_{i} . Since our outer-loop utilizes the GRPO algorithm ( shao2024deepseekmath) , the Meta-Optimizer generates n n distinct Meta-Rewards (as rollouts) per step. To mitigate latency, we implement a fully parallelized architecture similar to standard GRPO:
Report issue for preceding element
• Parallel Execution: All n n rollouts (where n = 8 n=8 in our experiments) are evaluated simultaneously, with each inner-loop allocated a dedicated set of compute resources. Each inner-loop for each task finally consumes similar computation resources. Report issue for preceding element
• Malformed Rewards: Meta-Rewards that fail to compile or produce valid computation graphs are immediately terminated, assigned a reward of 0.0 0.0 , and incur zero training cost (though the system waits for concurrent inner-loops to complete before updating the outer-loop). Report issue for preceding element
• Time Budgeting: A significant challenge in Meta-Reward discovery is that certain reward functions may incentivize excessively long reasoning chains, increasing training costs unpredictably. To address this, we impose a strict computational budget. For mathematical reasoning tasks, we set a maximum floating-point operation cap approximately 1.3 × 1.3\times the cost of standard binary-outcome training. If training exceeds this threshold, the process is halted, and the latest checkpoint is saved for evaluation. For other tasks, we rely on a fixed number of inner epochs, as the action space is more controllable. Report issue for preceding element
Evaluation Cost. Following the inner-loop, we evaluate the validation performance to calculate the advantage for the Meta-Optimizer. We utilize vLLM for high-throughput inference. By parallelizing the evaluation across all n n rollouts, the validation phase incurs negligible latency compared to training.
Report issue for preceding element
Outer-Loop Update. The Meta-Optimizer utilizes a lightweight 0.5B parameter model. Updating this model using the collected rollout data ( n = 8 n=8 ) is computationally negligible, taking only minutes to complete.
Report issue for preceding element
Based on the parallelization strategy described above, the wall-clock time for one complete outer-loop iteration is determined by the slowest successful inner-loop trial plus evaluation and update overhead.
Report issue for preceding element
T t  o  t  a  l ≈ max  ( T i  n  n  e  r ) + T e  v  a  l + T u  p  d  a  t  e T_{total}\approx\max(T_{inner})+T_{eval}+T_{update}
C.2 Resource Estimation
Report issue for preceding element
To contextualize the resource requirements of DERL, we compare its cost against the baseline of training a single inner-loop policy model. Let C inner C_{\text{inner}} denote the computational cost required to train one standard inner-loop.
Report issue for preceding element
The total computational cost for standard DERL, which runs for E outer E_{\text{outer}} outer-loop epochs with n n parallel rollouts per step, can be estimated as:
Report issue for preceding element
C DERL ≈ n × E outer × C inner C_{\text{{DERL}}}\approx n\times E_{\text{outer}}\times C_{\text{inner}}
This cost scales linearly with the number of outer-loop iterations required for the Meta-Optimizer to converge. In contrast, for DERL-pop, we simplify the process selecting the best reward function from a single population generation. In this setting, the total cost is significantly reduced to:
Report issue for preceding element
C DERL -pop ≈ n × C inner C_{\text{{DERL}-pop}}\approx n\times C_{\text{inner}}
Consequently, DERL-pop offers a more efficient alternative, consuming way less wall-clock time while still benefiting from population-based exploration. We utilized high-memory data center accelerators to accommodate the memory requirements of the parallel inner-loop training.
Report issue for preceding element
C.3 Efficiency Improvements and Future Work
Report issue for preceding element
In our current implementation, we utilized a relatively large number of rollouts ( n = 8 n=8 ) and a full inner-loop training protocol to empirically verify that LLMs can effectively learn meta-gradients through Reinforcement Learning. However, our preliminary experiments (demonstrated in Section 
A
https://arxiv.org/html/2512.13399v1#A1
) suggest that simple parameterizations ( e.g., 12 parameters) can also yield competitive results.
Report issue for preceding element
This observation points toward a promising direction for future work: reducing the heavy computational burden of the inner-loop by adopting lightweight RL algorithms, such as REINFORCE++. By simplifying the inner-loop requirements or using proxy tasks, the reliance on massive parallel resources can be significantly reduced, making the evolution of Meta-Rewards accessible to a broader range of computational budgets.
Report issue for preceding element
Evaluation Cost. Following the inner-loop, we evaluate the validation performance to calculate the advantage for the Meta-Optimizer. We utilize vLLM for high-throughput inference. By parallelizing the evaluation across all n n rollouts, the validation phase typically requires only a few minutes.
Report issue for preceding element
Outer-Loop Update. The Meta-Optimizer itself utilizes a lightweight 0.5B parameter model. Updating this model using the collected rollout data ( n = 8 n=8 ) is computationally negligible, taking only minutes to complete.
Report issue for preceding element
Appendix D Training Dynamics of DERL-pop.
Report issue for preceding element
 
Figure 7: Training dynamics of DERL-population. We present the training dynamics of DERL-pop. and GRPO w/ Avg Reward to demonstrate the superiority of the population method. Report issue for preceding element
Figure 
7
https://arxiv.org/html/2512.13399v1#A4.F7
 illustrates the training dynamics of DERL-pop. and the comparison with the GRPO w/ Avg Reward baseline. The experiments are based on the L0 difficulty of the ScienceWorld task. For GRPO w/ Avg Reward, we train for a full 100 steps. For DERL-pop., we train the inner layers for only 33 steps each time, and then the next round of training is based on the best-performing model from the previous round, rather than starting from scratch. It demonstrate that in the first 33 steps, the two models perform on par with each other. However, starting from the second outer-loop of DERL-pop., it starts to surpass the baseline. When exceeding 66 steps, DERL-pop further shows significantly better results. This showcases how the dynamic nature of DERL-pop.'s reward function surpasses standard fixed reward function.
Report issue for preceding element
Appendix E Examples of Outer-loop Evolution
Report issue for preceding element
We demonstrate the detailed training dynamic of DERL by showcasing each Meta-Reward explored in the outer-loop on ALFWorld (L2) in Table 
4
https://arxiv.org/html/2512.13399v1#A5.T4
. We show four outer-loop iterations. We observe that there may be a lot of low-quality meta-rewards in the early stages, but DERL can quickly learn high-quality rewards.
Report issue for preceding element
Table 4: Evolution of Meta-Reward structures and their corresponding reward across outer-loop training steps on ALFWorld.
Step
Meta Reward
Reward
0
g  1 ∗ ( g  2 − 1 ) / 2 + ( g  3 + 1 ) ∗ ( g  4 − 1 ) ∗ 2 / 3 g1*(g2-1)/2+(g3+1)*(g4-1)*2/3
0
^^
g 1 + 0.5 ∗ ( g 2 + 0.5 ∗ ( g 3 + 0.5 ∗ ( g 4 ) ) ) ) − 0.5 ∗ ( g 2 + 0.5 ∗ ( g 3 + ⋯ g1+0.5*(g2+0.5*(g3+0.5*(g4))))-0.5*(g2+0.5*(g3+\cdots
0
^^
g 1 + 0.01 ∗ ( g 2 − 0.001 ) + 0.0001 ∗ ( g 3 − 0.0001 ) + 0.000005 ∗ ( g 4 − ⋯ g1+0.01*(g2-0.001)+0.0001*(g3-0.0001)+0.000005*(g4-\cdots
0.8496
^^
g 1 ∗ 0.5 + 0.2 ∗ ( g 2 + 0.1 ) − 0.3 / 2 + 0.4 ∗ ( g 3 ∗ 0.1 ) + 0.1 ∗ ( g 4 ∗ ⋯ g1
0.5+0.2
(g2+0.1)-0.3/2+0.4*(g3
0.1)+0.1
(g4*\cdots
0.8789
^^
g  1 ∗ ( g  2 + ( g  3 − 1.0 ) ∗ ( g  4 − 0.0 ) ) g1*(g2+(g3-1.0)*(g4-0.0))
0.0234
^^
g  1 + 0.5 ∗ ( g  2 + 0.5 ∗ ( g  3 + 0.5 ∗ ( g  4 + 0.5 ) ) ) g1+0.5*(g2+0.5*(g3+0.5*(g4+0.5)))
0.8848
^^
g 1 + 0.5 ∗ ( g 2 + 0.2 ∗ ( g 3 + 0.1 ∗ ( g 4 + 0.05 ) ) ) ) g1+0.5*(g2+0.2*(g3+0.1*(g4+0.05))))
0
^^
g  1 ∗ ( g  2 + 2 ∗ ( g  3 / 3 ) ) + ( g  4 − 4 ∗ ( g  2 − 1 ) ) − 2.0 g1*(g2+2*(g3/3))+(g4-4*(g2-1))-2.0
0.8945
1
( 0.5 ∗ ( g 1 − 0.1 ) ) + ( 0.5 ∗ ( g 2 − 0.1 ) ) + ( 0.5 ∗ ( g 3 − 0.1 ) ) + ( 0.5 ∗ ⋯ (0.5*(g1-0.1))+(0.5*(g2-0.1))+(0.5*(g3-0.1))+(0.5*\cdots
0.7793
^^
g 1 ∗ ( g 2 + ( g 3 ∗ ( g 4 − ( g 2 + ( g 3 ∗ ( g 4 − ( g 3 ∗ ( g 4 − ( g 3 ∗ ( g 4 − ( g 3 ∗ ⋯ g1*(g2+(g3*(g4-(g2+(g3*(g4-(g3*(g4-(g3*(g4-(g3*\cdots
0
^^
− ( g  1 + 0.5 ∗ ( g  2 + 0.3 ∗ ( g  3 − 0.2 ∗ ( g  4 + 0.1 ∗ 1 ) ) ) + 0.1 ∗ 1 ) / 1.2 -(g1+0.5*(g2+0.3*(g3-0.2*(g4+0.1
1)))+0.1
1)/1.2
0.0020
^^
g 1 ∗ ( g 2 − 1 ) ∗ ( 1 − 0.5 ) + 0.5 ∗ ∗ 2 ∗ ( g 3 − 1 ) ∗ ( 1 − 0.25 ) + 0.25 ∗ ∗ ⋯ g1*(g2-1)
(1-0.5)+0.5**2
(g3-1)*(1-0.25)+0.25**\cdots
0
^^
g  1 + ( g  2 ∗ ( g  3 / 2 ) ) − ( g  4 / 3 ) g1+(g2*(g3/2))-(g4/3)
0.8594
^^
g  1 ∗ ( g  2 + 0.5 ) + 0.2 ∗ ( g  3 ∗ 0.3 + 0.1 ) − 0.1 ∗ ( g  4 ∗ 0.2 + 0.5 ) g1*(g2+0.5)+0.2*(g3
0.3+0.1)-0.1
(g4*0.2+0.5)
0.8477
^^
g  1 + 2 ∗ ( g  2 + 3 ∗ ( g  3 − 2 ) ) ∗ 0.1 + 4 ∗ 0.3 − 5 ∗ ( g  4 + 1 ) g1+2*(g2+3*(g3-2))
0.1+4
0.3-5*(g4+1)
0.8984
^^
g  1 ∗ ( g  2 − 1 ) / 2 + ( g  3 − 1 ) / 3 + ( g  4 − 1 ) / 4 + 3.0 g1*(g2-1)/2+(g3-1)/3+(g4-1)/4+3.0
0.0098
2
g 1 + 0.5 ∗ ( g 2 + 0.5 ∗ ( g 3 + 0.5 ∗ ( g 4 ) ) ) ) g1+0.5*(g2+0.5*(g3+0.5*(g4))))
0
^^
g  1 + 0.5 ∗ ( g  2 − 0.5 ) + 0.3 ∗ ( g  3 − 0.05 ) + 0.2 ∗ ( g  4 + 0.05 ) − 0.2 ∗ ⋯ g1+0.5*(g2-0.5)+0.3*(g3-0.05)+0.2*(g4+0.05)-0.2*\cdots
0
^^
g  1 + ( g  2 ∗ ( g  3 / 2 ) ) − ( g  4 / 4 ) g1+(g2*(g3/2))-(g4/4)
0.8438
^^
g 1 + 0.5 ∗ ( g 2 + 0.5 ∗ ( g 3 + 0.5 ∗ ( g 4 − 1 ) ) ) ) g1+0.5*(g2+0.5*(g3+0.5*(g4-1))))
0
^^
g  1 + 0.01 + 0.0001 ∗ ( g  2 ) + 0.000001 ∗ ( g  3 ) + 0.00000001 ∗ ( g  4 ) g1+0.01+0.0001*(g2)+0.000001*(g3)+0.00000001*(g4)
0.8652
^^
g  1 ∗ ( g  2 + ( g  3 ∗ ( g  4 / 2 ) ) ) + ( g  1 − ( g  2 + ( g  3 ∗ ( g  4 / 2 ) ) ) ) ∗ 0.5 g1*(g2+(g3*(g4/2)))+(g1-(g2+(g3*(g4/2))))*0.5
0.8867
^^
g 1 ∗ 0.99 + 0.01 ∗ ( g 2 + 0.99 ) + 0.005 ∗ ( g 3 + 0.99 ) + 0.0005 ∗ ( g 4 + ⋯ g1
0.99+0.01
(g2+0.99)+0.005*(g3+0.99)+0.0005*(g4+\cdots
0.8477
^^
g  1 + 0.5 ∗ ( g  2 − 0.5 ) + 0.2 ∗ ( g  3 − 0.5 ) + 0.1 ∗ ( g  4 − 0.5 ) g1+0.5*(g2-0.5)+0.2*(g3-0.5)+0.1*(g4-0.5)
0.8906
3
g  1 + ( g  2 / 2.0 ) − ( g  3 ∗ 0.1 ) + ( g  4 ∗ 0.05 ) g1+(g2/2.0)-(g3
0.1)+(g4
0.05)
0.8438
^^
g  1 + 0.5 ∗ ( g  2 + 0.5 ∗ ( g  3 + 0.5 ∗ ( g  4 + 0.5 ) ) ) g1+0.5*(g2+0.5*(g3+0.5*(g4+0.5)))
0.875
^^
g  1 + 0.05 ∗ ( g  2 + 0.05 ∗ ( g  3 + 0.05 ∗ ( g  4 + 0.05 ) ) ) g1+0.05*(g2+0.05*(g3+0.05*(g4+0.05)))
0.8242
^^
g  1 + 0.5 ∗ ( g  2 / 2.0 ) + 0.1 ∗ ( g  3 ∗ 2.0 ) + 0.25 ∗ ( g  4 / 4.0 ) g1+0.5*(g2/2.0)+0.1*(g3
2.0)+0.25
(g4/4.0)
0.8632
^^
g  1 + 0.5 ∗ ( g  2 + 0.4 ∗ ( g  3 + 0.2 ∗ ( g  4 + 0.1 ) ) ) g1+0.5*(g2+0.4*(g3+0.2*(g4+0.1)))
0.8496
^^
g  1 + 0.5 ∗ ( g  2 + 0.5 ∗ ( g  3 + 0.5 ∗ ( g  4 + 0.5 ) ) ) g1+0.5*(g2+0.5*(g3+0.5*(g4+0.5)))
0.8926
^^
g  1 + 0.5 ∗ ( g  2 + 0.5 ∗ ( g  3 + 0.5 ∗ ( g  4 + 0.5 ) ) ) g1+0.5*(g2+0.5*(g3+0.5*(g4+0.5)))
0.8789
^^
g  1 + ( g  2 ∗ ( g  3 / 2 ) ) − ( g  4 / 3 ) g1+(g2*(g3/2))-(g4/3)
0.8984
Report issue for preceding element
Report Issue
Report GitHub Issue
Title:
Content selection saved. Describe the issue below:
Description:
Submit without GitHub Submit in GitHub
Report Issue for Selection
Generated by 
L A T E xml[LOGO]
https://math.nist.gov/~BMiller/LaTeXML/
Instructions for reporting errors
We are continuing to improve HTML versions of papers, and your feedback helps enhance accessibility and mobile support. To report errors in the HTML that will help us improve conversion and rendering, choose any of the methods listed below:
Click the "Report Issue" button.
Open a report feedback form via keyboard, use " 
Ctrl + ?
".
Make a text selection and click the "Report Issue for Selection" button near your cursor.
You can use Alt+Y to toggle on and Alt+Shift+Y to toggle off accessible reporting links at each section.
Our team has already identified 
the following issues
https://github.com/arXiv/html_feedback/issues
. We appreciate your time reviewing and reporting rendering errors we may not have found yet. Your efforts will help us improve the HTML versions for all readers, because disability should not be a barrier to accessing research. Thank you for your continued support in championing open access for all.
Have a free development cycle? Help support accessibility at arXiv! Our collaborators at LaTeXML maintain a 
list of packages that need conversion
https://github.com/brucemiller/LaTeXML/wiki/Porting-LaTeX-packages-for-LaTeXML
, and welcome 
developer contributions
https://github.com/brucemiller/LaTeXML/issues
.