# Multi-Agent Design: Optimizing Agents with Better Prompts and Topologies - arXiv

Source URL: https://arxiv.org/html/2502.02533v2

Multi-Agent Design: Optimizing Agents with Better Prompts and Topologies
logo Back to arXiv
https://arxiv.org/
 

https://arxiv.org/abs/2502.02533v2
 

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
https://arxiv.org/abs/2502.02533v2
 
Download PDF
https://arxiv.org/pdf/2502.02533v2
 

javascript:toggleColorScheme()
Table of Contents
Abstract
https://arxiv.org/html/2502.02533v2#abstract
1 Introduction
https://arxiv.org/html/2502.02533v2#S1
2 Designing Multi-Agent Systems
https://arxiv.org/html/2502.02533v2#S2
2.1 Block-level Analysis: Prompt Design for Agents
https://arxiv.org/html/2502.02533v2#S2.SS1
2.2 Workflow-level Search Space Design
https://arxiv.org/html/2502.02533v2#S2.SS2
3 Mass: Multi-Agent System Search
https://arxiv.org/html/2502.02533v2#S3
4 Experiments
https://arxiv.org/html/2502.02533v2#S4
5 Related Work
https://arxiv.org/html/2502.02533v2#S5
6 Conclusion
https://arxiv.org/html/2502.02533v2#S6
A Limitations and future work
https://arxiv.org/html/2502.02533v2#A1
B Implementation details
https://arxiv.org/html/2502.02533v2#A2
B.1 Datasets
https://arxiv.org/html/2502.02533v2#A2.SS1
B.2 Baselines
https://arxiv.org/html/2502.02533v2#A2.SS2
B.3 Mass details and Construction Rules
https://arxiv.org/html/2502.02533v2#A2.SS3
C Additional experiments
https://arxiv.org/html/2502.02533v2#A3
C.1 Generalization across LLM backbones
https://arxiv.org/html/2502.02533v2#A3.SS1
C.2 Discussion on Mass-found topologies
https://arxiv.org/html/2502.02533v2#A3.SS2
C.3 Cost analysis
https://arxiv.org/html/2502.02533v2#A3.SS3
C.4 Graph optimization baseline
https://arxiv.org/html/2502.02533v2#A3.SS4
C.5 Ablation on prompt optimizers
https://arxiv.org/html/2502.02533v2#A3.SS5
D Prompt template
https://arxiv.org/html/2502.02533v2#A4
E Best Prompts Discovered
https://arxiv.org/html/2502.02533v2#A5
References
https://arxiv.org/html/2502.02533v2#bib
HTML conversions 
sometimes display errors
https://info.dev.arxiv.org/about/accessibility_html_error_messages.html
 due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.
failed: googlecloud.cls
failed: datetime.sty
failed: mdframed.sty
failed: arydshln.sty
Authors: achieve the best HTML results from your LaTeX submissions by following these 
best practices
https://info.arxiv.org/help/submit_latex_best_practices.html
.
License: arXiv.org perpetual non-exclusive license
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2502.02533v2 [cs.LG] 31 Jan 2026
\pdftrailerid
redacted\correspondingauthor{hzhouml, soarik}@google.com. Work done while Han Zhou was a Student Researcher at Google.
Report issue for preceding element
Multi-Agent Design: Optimizing Agents with Better Prompts and Topologies
Report issue for preceding element
Han Zhou Xingchen Wan Google Ruoxi Sun Google Hamid Palangi Google Shariq Iqbal Google Ivan Vulić Anna Korhonen University of Cambridge Sercan Ö. Arık Google
Report issue for preceding element
Abstract
Report issue for preceding element
Large language models, employed as multiple agents that interact and collaborate with each other, have excelled at solving complex tasks. The agents are programmed with prompts that declare their functionality, along with the topologies that orchestrate interactions across agents. Designing prompts and topologies for multi-agent systems (MAS) is inherently complex. To automate the entire design process, we first conduct an in-depth analysis of the design space aiming to understand the factors behind building effective MAS. We reveal that prompts together with topologies play critical roles in enabling more effective MAS design. Based on the insights, we propose Multi-Agent System Search ( Mass), a MAS optimization framework that efficiently exploits the complex MAS design space by interleaving its optimization stages, from local to global, from prompts to topologies, over three stages: 1) block-level ( local) prompt optimization; 2) workflow topology optimization; 3) workflow-level ( global) prompt optimization, where each stage is conditioned on the iteratively optimized prompts/topologies from former stages. We show that Mass-optimized multi-agent systems outperform a spectrum of existing alternatives by a substantial margin. Based on the Mass-found systems, we finally propose design principles behind building effective multi-agent systems.
Report issue for preceding element
1 Introduction
Report issue for preceding element
 
Figure 1: Proposed Multi-Agent System Search ( Mass) framework discovers effective multi-agent system designs (with both optimized topology and optimized prompts, right) via interleaved prompt optimization and topology optimization in a customizable multi-agent design space (key components illustrated on the left). Report issue for preceding element
Large language models (LLMs) have showcased extraordinary capabilities in understanding, reasoning, and generating coherent responses based on user prompts, revolutionizing a wide range of applications (Ouyang et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib36
; Kojima et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib22
) . LLM-based agents enhance usability by autonomously handling complex tasks across diverse domains, including code generation and debugging (Jimenez et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib18
) , retrieval-augmented generation (Singh et al., 
2025
https://arxiv.org/html/2502.02533v2#bib.bib45
; Wang et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib51
) , data analysis (Hu et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib16
; Guo et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib12
) , and interactive decision-making (Su et al., 
2025
https://arxiv.org/html/2502.02533v2#bib.bib46
; Li et al., 
2025
https://arxiv.org/html/2502.02533v2#bib.bib25
) . These agents are typically programmed with prompts that reinforce them to interact with the environment, utilizing available tools, and approach their objectives over multiple turns (Yao et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib61
) . Beyond individual agents, LLMs can be orchestrated within complex topologies that coordinate multiple agents toward a shared objective. This type of multi-agent system (MAS) typically outperforms its single-agent counterpart by involving more diverse agentic perspectives or role profiles, such as agents as verifiers (Shinn et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib44
) and multi-agent debate (Wang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib52
; Qian et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib38
) .
Report issue for preceding element
However, designing effective MAS for new domains often proves to be challenging. First, the single agent might suffer from prompt sensitivity (Verma et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib48
) , where simple modifications in the prompt can already exert significant but unexpected degradation of performance (Zhou et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib72
; Liu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib30
) . In MAS, when sensitive agents are cascaded, the compounding effect due to prompt sensitivity may be amplified. Together with the prompt design, crafting an effective topology might demand a substantial amount of manual experimentation, based on trial and error. The problem complexity is exacerbated by the overall combinatorial search space, over not only the unbounded space of prompt design but also the design decisions of what agent to integrate into the topology.
Report issue for preceding element
Although recent research has explored automating various aspects of agentic designs, there is still a gap in understanding of what matters most regarding improved MAS performance. For example, DSPy (Khattab et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib21
) automates the process of designing exemplars for improved prompt programming. Li et al. ( 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib24
) propose to optimize MAS by scaling up the number of agents in majority voting. ADAS (Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
) programs new topologies expressed in code via an LLM-based meta-agent. AFlow (Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
) searches better topologies using Monte-Carlo Tree Search within a set of predefined operators. However, the interplay between multiple design spaces, including prompts and topologies, remains unclear.
Report issue for preceding element
In this paper, we first conduct in-depth analyses of common design spaces in MAS, examining the impact of aspects such as optimizing the prompts, scaling the number of agents, and involving different types of topologies. Our analyses reveal that prompts frequently form an influential design component that yields strong-performing MAS, and influential topologies only represent a small fraction of the full search space. Based on these insights, we aim to distill the essence of influential MAS components into a pruned search space, thereby lowering the complexity of the overall search process. We propose Multi-Agent System Search ( Mass), a novel multi-stage optimization framework that automates the optimization for MAS over an efficient search space. Mass integrates a plug-and-play prompt optimizer and workflow optimizer over a configurable topology space. It overcomes the complexity of joint optimization on MAS by interleaving the optimization stages, from local to global, from prompts to topologies, over three stages: 1) block-level ( local) prompt 'warm-up' for each topology block; 2) workflow topology optimization in a pruned set of topology space; 3) workflow-level ( global) prompt optimization given the best-found topology.
Report issue for preceding element
By optimizing over the identified influential components, Mass yields optimized MAS that achieves state-of-the-art performance, outperforming existing manually-crafted MAS baselines and automatically-generated alternatives, by a substantial margin, demonstrated across an extensive selection of tasks, including reasoning, multi-hop understanding, and code generation. Based on the strongest MAS found by Mass, we provide further insights and guidelines behind building effective MAS. Overall, our contributions can be summarized as follows: 1) we provide an in-depth analysis of the design factors that influence the performance of LLM-based MAS, highlighting the importance of prompts and identifying the influential topologies; 2) we propose Mass, a novel multi-stage optimizer that automates the MAS design by interleaving the optimization of prompts and topologies in an influential search space; 3) Mass shows significant performance improvement on various evaluation benchmarks, delivering guidelines for building effective multi-agent systems for the future.
Report issue for preceding element
2 Designing Multi-Agent Systems
Report issue for preceding element
In this section, we provide a formulation for designing MAS, followed by analyzing the influence of prompt and topology designs. We refer to the structural arrangements of agents as the topology of agents and define workflow as the logical sequence across different topologies that builds the MAS. The design of a MAS can thus be broadly divided into two levels: block-level design and workflow-level orchestration. At the block level, a building block infers a group of agents that work together for a certain function (e.g., debate), and we aim to design effective individual agents that best perform their intended role with better prompt design. On the other hand, at the workflow level, the optimization involves determining the types and quantities of agents to include and how to arrange them in the most effective way, referred to as the topology optimization. Formally, given a search space 𝒜 = { a i } \mathcal{A}={a_{i}} that defines all valid agentic configuration over the building block search dimensions a i a_{i} (see Fig. 
3
https://arxiv.org/html/2502.02533v2#S2.F3
), individual agents and their composite topologies can both be parameterized as specific configurations in this search space. To obtain the best workflow 𝒲 ∗  ( a ) \mathcal{W}^{*}(a) , the workflow topology optimization is framed as the following optimization problem with an objective function f  ( ⋅ , ⋅ ) f(\cdot,\cdot) on a target input and output set ( x , y ) ∼ 𝒟 (x,y)\sim\mathcal{D} in the defined search space 𝒜 \mathcal{A} :
Report issue for preceding element
𝒲 ∗  ( a ) = arg  max a ∼ 𝒜  𝔼 ( x , y ) ∼ 𝒟  [ f  ( 𝒲  ( a  ( x ) ) , y ) ] . \mathcal{W}^{
}(a)=\operatorname
{arg\penalty 10000\ max}
{a\sim\mathcal{A}}\mathbb{E}
{(x,y)\sim\mathcal{D}}[f(\mathcal{W}(a(x)),y)].
(1)
In the rest of this section, we provide an in-depth analysis of each component of MAS design.
Report issue for preceding element
2.1 Block-level Analysis: Prompt Design for Agents
Report issue for preceding element
 
Figure 2: Accuracy vs. total token counts for prompt-optimized agents per question on MATH by Gemini 1.5 Pro compared to scaling agents with self-consistency ( SC), self-refine ( reflect), and multi-agent debate ( debate) only. The error bar indicates 1 standard deviation. We show that by utilizing more compute, better accuracy can be obtained via more effective prompting. Report issue for preceding element
At the block level, the primary “optimizable component” that significantly influences downstream performance is the prompt, which defines the role of the agent (e.g., “ You are an expert in reflecting on errors…”), provides additional instructions to shape its behavior (e.g., “ You should think step by step…”) and optionally, contains few-shot demonstrations (in-context examples) to guide the agent's responses (Wan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib50
) . For instance, a state-of-the-art prompt optimizer searches both instructions and few-shot demonstrations, where demonstrations are bootstrapped from the model's own, correct predictions on the validation set based on a validation metric. Conditioned on the demonstrations, the prompt optimizer then proposes a few candidates for the instruction with a dataset summary or various hints to improve candidate diversity (Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
) . The instructions and demonstrations are then jointly optimized.
Report issue for preceding element
Although it is well known that LLMs are sensitive to prompts (Zhou et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib71
; Verma et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib48
) , applying automatic prompt optimization (APO) techniques to MAS is not straightforward. In single-turn tasks, APO can be easily performed by treating prompts as optimizable variables and performance over a validation set as the target. However, in MAS, APO becomes more complex due to the interdependence across agents (e.g., the output of one agent may be the input of another agent in a cascade with ground-truth responses for intermediate outputs not being available) and exponentially increasing complexity for combinatorial optimization with more number of agents n n involved; The reward signals also become more sparse when n n increases, preventing us for implementing APO directly on MAS in any manageable budget; as such, many prior works (Zhang et al., 
2024f
https://arxiv.org/html/2502.02533v2#bib.bib69
; Xia et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib58
) in MAS still primarily use handcrafted prompts instead of including the prompts as optimizable components in the MAS design.
Report issue for preceding element
To systematically understand the influence of prompt design in MAS, we specifically and quantitatively analyze the effect of prompt optimization and compare its effectiveness to other operations common in MAS literature, such as scaling with more agents but with default prompts. We conduct APO on a chain-of-thought (Kojima et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib22
) agent via a state-of-the art prompt optimizer MIPRO (Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
) that is capable of joint instruction and (1-shot) exemplar optimization, and fairly compare the total inference token cost with self-consistency (Kojima et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib22
) , self-refine (Madaan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib33
) , and multi-agent debate (Du et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib10
) , where the specifications are provided in App. § 
B
https://arxiv.org/html/2502.02533v2#A2
. In Fig. 
2
https://arxiv.org/html/2502.02533v2#S2.F2
, prompting, which equips agents with more informative instructions and exemplars, demonstrates significant advantages in its token-effectiveness over other building blocks. Furthermore, by applying self-consistency on top of the prompt-optimized agent, we observe an improved scaling performance on the token cost, whereas standard approaches in scaling the number of agents (e.g. SC, or Reflect) saturate much earlier. This empirical observation sheds light on the importance of prompting while providing early evidence for designing effective MAS – optimize agents locally before scaling their topology.
Report issue for preceding element
2.2 Workflow-level Search Space Design
Report issue for preceding element
At the workflow level, the primary focus is on orchestrating agents to achieve the best performance effectively, and topology optimization has recently garnered significant attention (Li et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib27
; Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
) . However, while much of the existing research emphasizes search methods—such as discovering the most efficient and effective way to identify the optimal configuration—there has been less focus on the design of search spaces, which determines the perimeter and the scope of any search algorithm. This imbalance draws a parallel to the historical development of neural architecture search (NAS) (White et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib56
) . Initially, the field concentrated on sophisticated search methods, such as Bayesian optimization (Kandasamy et al., 
2018
https://arxiv.org/html/2502.02533v2#bib.bib19
; Ru et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib41
) and differentiable search (Liu et al., 
2018
https://arxiv.org/html/2502.02533v2#bib.bib31
) . Follow-up works have highlighted the often-overlooked importance of search space design, arguing that it can be equally, if not more, critical (Wan et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib49
; Zhou et al., 
2023a
https://arxiv.org/html/2502.02533v2#bib.bib70
) .
Report issue for preceding element
Inspired by this insight, we hypothesize that manually crafted topologies might be sub-optimal, and automatic topology optimization (potentially framed as a rigorous optimization problem) can play a similarly pivotal role via judiciously designing search space for MAS. To achieve so, we first define an expressive search space, similar to prior works, that consists of the connections between the following building blocks, which form a unified search space for Mass:
Report issue for preceding element
 
Figure 3: Illustration of the Mass framework with its search space and the optimization. The search space combines both prompts ( Instruction, Demo) and configurable agentic building blocks ( Aggregate, Reflect, Debate, Summarize, and Tool-use). [ 1PO: Block-level Prompt Optimization]: we conduct block-level prompt optimization for each agentic module individually (denoted by </>); [ 2TO: Workflow Topology Optimization]: conditioned on the best prompts found in Stage 1 on each agent block, Mass samples valid configurations from an influence-weighted design space while fusing the prompts of each building block from Stage 1; [ 3PO: Workflow-level Prompt Optimization]: conditioned on the best workflow found, we again conduct workflow-level prompt optimization on the best-found MAS (topologies visualized for illustration only). Report issue for preceding element
•
Aggregate: Agents can collaborate in parallel with diversified predictions, which is then followed by an aggregation operator that obtains the most consistent prediction. The aggregate block can be parameterized by N a N_{a} agents and also defines the number of agent chains acting in parallel. Majority vote (Li et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib24
) and self-consistency (Chen et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib7
) sits within this topology.
Report issue for preceding element
•
Reflect: Agents can act as verifiers, providing critics and improvement suggestions based on former predictions. The feedback is then fed into the predictor or the reflector itself for an iterative improvement. Similarly, reflect can be parameterized by N r N_{r} that defines the number of rounds for self-reflection. The self-refine (Madaan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib33
) and Reflexion (Shinn et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib44
) represent this block, and N r N_{r} can be interpreted as a parameter that contributes to the depth of the MAS network.
Report issue for preceding element
•
Debate: Agents in debate can elicit more truthful predictions than a single agent (Du et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib10
; Liang et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib28
) , where each debating agent would collect opinions from all other agents and provide an updated response. This topology involves a mixture of agents, and N d N_{d} defines the number of rounds for debating (i.e., number of fully-connected agent layers in the topology space).
Report issue for preceding element
•
Custom Agents: While the former three forms of agents represent the vast majority of agent topologies constructed as multiple parallel, serial, and a mixture of agents, more versatile definitions of agents can be inserted into the MAS design space. For example, for task-specific use cases, we introduce an agent as summarize to improve the long-context capability in the customizable design space, where N s N_{s} defines the rounds of abstraction of information.
Report issue for preceding element
•
Tool-use: Building towards an effective MAS, enabling agents to leverage tools to access external information is critical for system performance, such as using a retriever for RAG (Lewis et al., 
2020
https://arxiv.org/html/2502.02533v2#bib.bib23
) and executor with test cases in coding (Chen et al., 
2024d
https://arxiv.org/html/2502.02533v2#bib.bib8
) . We introduce tool-use (e.g., code execute) as an optimizable binary 'insertion' decision N T ∈ { 0 , 1 } N_{T}\in{0,1} with the predictor.
Report issue for preceding element
3 Mass: Multi-Agent System Search
Report issue for preceding element
Our analyses in Sec. 
2
https://arxiv.org/html/2502.02533v2#S2
 underscore the importance of well-designed prompts for individual agents and the careful definition of the search space to achieve effective MAS performance. Building on these, we propose a multistage optimization algorithm, Multi-Agent System Search ( Mass), that surpasses prior arts that focused solely on optimizing workflow topology without appropriate prompt designs. Instead, our approach demonstrates the greater effectiveness of MAS design with properly optimized prompts and thoughtfully designed search spaces. Mass framework is illustrated in Algorithm 
1
https://arxiv.org/html/2502.02533v2#alg1
 and Fig. 
3
https://arxiv.org/html/2502.02533v2#S2.F3
, following an intuition from local to global, from block-level to workflow-level, that conquers the complexity of combinatorial optimization with effective per-stage optimization detailed below.
Report issue for preceding element
Block-level prompt optimization. Before composing agents, we first ensure that individual agents are thoroughly optimized at the block level, as highlighted in Sec. 
2.1
https://arxiv.org/html/2502.02533v2#S2.SS1
 and Fig. 
2
https://arxiv.org/html/2502.02533v2#S2.F2
 – this step ensures that each agent is primed for its role with the most effective instructions in the most manageable computation budget. To further overcome the complexity of joint optimization on a large MAS space, we first warm up the initial predictor with single-agent APO, a 0 ∗ ← 𝒪 𝒟  ( a 0 ) a_{0}^{
}\leftarrow\mathcal{O}{\mathcal{D}}(a{0}) , where both instruction and exemplars are jointly optimized with the modular prompt optimizer 𝒪 \mathcal{O} . Followed by conditioning on the warmed predictor, we continue optimizing each topology with a minimum number of agents, a i ∗ ← 𝒪 𝒟  ( a i | a 0 ∗ ) a_{i}^{
}\leftarrow\mathcal{O}
{\mathcal{D}}(a
{i}|a_{0}^{*}) , such that, 2 predictors paired with 1 debator form the minimum building block as the debate topology, thereby lowering the complexity for optimization, and this topology can be scaled up later with more predictors and debators but all equipped with optimized prompts. To measure the influence of each building block, we store the validation performance once the optimization is completed. It is important that though Stage (1) serves as the warm-up stage per building block, it is still a critical stage that guarantees the follow-up topology optimization is searching in an effective space, composing well-performing agents instead of suffering from the compounding impact from any ill-formed agents with manual prompts.
Report issue for preceding element
 
Figure 4: The performance of different topologies with Gemini 1.5 Pro compared to the base agent with each topology being optimized with APO, where Sum. (Summarize) and Exe. (Executor) are task-specific topologies as illustrated in Fig. 
3
https://arxiv.org/html/2502.02533v2#S2.F3
. We observe that not all topologies have a positive influence on the MAS design. Report issue for preceding element
Workflow topology optimization. In this stage, we focus on optimizing the overall MAS structure, determining the most effective arrangement and connectivity between agents. To understand the influence of individual blocks, we report the performance of various topologies in Fig. 
4
https://arxiv.org/html/2502.02533v2#S3.F4
. It is noticeable that not all topologies are beneficial to MAS design, whereas positively influenced topologies only represent a small fraction of the overall set, such that, in HotpotQA (Yang et al., 
2018
https://arxiv.org/html/2502.02533v2#bib.bib60
) , only debate brings 3% gain while others fail to improve or even degrade systematic performance. We again observe similar trends in the test-output-prediction subtask of LiveCodeBench (Jain et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib17
) . It highlights the importance of searching in the influential set of the search space, whereas including decremental building blocks may not only result in higher search complexity but also degrade the performance. The analysis in Fig. 
4
https://arxiv.org/html/2502.02533v2#S3.F4
 shows that beneficial topologies only represent a small fraction of the full design space. Therefore, we aim to distill the essence of strong-performing topologies into a pruned space, thereby making the workflow-level topology search more efficient.
Report issue for preceding element
Here, we propose to measure the incremental influence I a i = ℰ  ( a i ∗ ) / ℰ  ( a 0 ∗ ) I_{a_{i}}=\mathcal{E}(a_{i}^{
})/\mathcal{E}(a_{0}^{
}) that quantifies the relative gain for integrating the search dimension a i a_{i} over the initial agent a 0 a_{0} . Following the intuition that influential dimension comes with higher selection probability, we reject the corresponding topology search dimension a i a_{i} if u > p a i u>p_{a_{i}} to form a pruned search space, given u ∼ Uniform  ( 0 , 1 ) u\sim\text{Uniform}(0,1) and p a = Softmax  ( I a , t ) p_{a}=\operatorname{Softmax}(I_{a},t) , where t t is the temperature for the softmax function. Therefore, the workflow can be randomly sampled from a pruned configuration space within a maximum budget, such that a ∼ 𝒜 p  s.t.  𝒩  ( a ) < B a\sim\mathcal{A}
{p}\text{ s.t. }\mathcal{N}(a)<B , where 𝒩  ( a ) \mathcal{N}(a) caps the overall number of agents and B B is the maximum budget; For instance, given 𝒜 = { a i } \mathcal{A}={a
{i}} as the original configuration space with the topology building block search dimension a i a_{i} parameterized by its property N a i N_{a_{i}} as defined in Sec. 
2.2
https://arxiv.org/html/2502.02533v2#S2.SS2
, each search dimension a i a_{i} will be weighted by the influence of that dimension p a i p_{a_{i}} , and rejected to form 𝒜 p \mathcal{A}
{p} if u ∼ Uniform  ( 0 , 1 ) > p a i u\sim\text{Uniform}(0,1)>p
{a_{i}} . Followed by sampling valid configurations from 𝒜 p \mathcal{A}
{p} , the workflow 𝒲  ( a ) = ( a i , a i + 1 , … ) \mathcal{W}(a)=(a
{i},a_{i}+1,…) is then constructed in a predefined rule to arrange the flow of agents, where the rule-based flow removes redundancy in various orders in design and reduce the optimization complexity. The rule follows a simple predefined sequence that aligns with the practice of agent designs, such that [ summarize, reflect, debate, aggregate]. We refer to App. § 
B
https://arxiv.org/html/2502.02533v2#A2
 for the detailed construction rule, MAS visualizations, and search space per task.
Report issue for preceding element
Algorithm 1 Mass: Multi-Agent System Search
1: Input: Agentic modules in the search space a i ∈ 𝒜 a_{i}\in\mathcal{A} , workflow of agents 𝒲  ( a ) \mathcal{W}(a) , prompt optimizer 𝒪 \mathcal{O} , evaluator ℰ \mathcal{E} , validation set 𝒟 \mathcal{D} , temperature t t , number of candidates N N , budget B B .
2: Output: Optimized multi-agent system 𝒲 ∗ \mathcal{W^{*}} .
3: [ 1PO: Block-level Prompt Optimization]
4: Prompt optimization for the initial agent: a 0 ∗ ← 𝒪 𝒟  ( a 0 ) {\color[rgb]{0.5,0.5,0.5}\definecolor[named]{pgfstrokecolor}{rgb}{0.5,0.5,0.5}a_{0}^{*}}\leftarrow\mathcal{O}
{\mathcal{D}}(a
{0}) .
5: for a i a_{i} in 𝒜 ∖ { a 0 } \mathcal{A}\setminus{a_{0}} do
6: Local prompt optimization for each building block in the design space: a i ∗ ← 𝒪 𝒟  ( a i | a 0 ∗ ) {\color[rgb]{0.203125,0.66015625,0.32421875}\definecolor[named]{pgfstrokecolor}{rgb}{0.203125,0.66015625,0.32421875}a_{i}^{
}}\leftarrow\mathcal{O}{\mathcal{D}}(a{i}|{\color[rgb]{0.5,0.5,0.5}\definecolor[named]{pgfstrokecolor}{rgb}{0.5,0.5,0.5}a_{0}^{
}}) .
7: Obtain incremental Influence: I a i ← ℰ  ( a i ∗ ) / ℰ  ( a 0 ∗ ) I_{a_{i}}\leftarrow\mathcal{E}({\color[rgb]{0.203125,0.66015625,0.32421875}\definecolor[named]{pgfstrokecolor}{rgb}{0.203125,0.66015625,0.32421875}a_{i}^{
}})/\mathcal{E}({\color[rgb]{0.5,0.5,0.5}\definecolor[named]{pgfstrokecolor}{rgb}{0.5,0.5,0.5}a_{0}^{
}}) .
8: end for
9: [ 2TO: Workflow Topology Optimization]
10: Obtain the selection probability p a ← Softmax  ( I a , t ) p_{a}\leftarrow\operatorname{Softmax}(I_{a},t) .
11: while n < N n<N do
12: Search space pruning: 𝒜 p = { a i } \mathcal{A}
{p}={a
{i}} for a i a_{i} in 𝒜 \mathcal{A} if u < p a i u<p_{a_{i}} , where u ∼ Uniform  ( 0 , 1 ) u\sim\text{Uniform}(0,1) .
13: Reject sampling for agentic configurations in budget: a ∼ 𝒜 p  s.t.  𝒩  ( a ) < B a\sim\mathcal{A}_{p}\text{ s.t. }\mathcal{N}(a)<B .
14: Build the workflow 𝒲 c ← ( a i ∗  ( ⋅ ) , a i + 1 ∗  ( ⋅ ) , … ) {\color[rgb]{0.65234375,0.5,0.72265625}\definecolor[named]{pgfstrokecolor}{rgb}{0.65234375,0.5,0.72265625}\mathcal{W}
{c}}\leftarrow({\color[rgb]{0.203125,0.66015625,0.32421875}\definecolor[named]{pgfstrokecolor}{rgb}{0.203125,0.66015625,0.32421875}a
{i}^{
}(\cdot),a_{i+1}^{
}(\cdot),\dots}) in a rule-base order with optimized prompts.
15: Evaluate and record the score ℰ 𝒟  ( 𝒲 c ) \mathcal{E}
{\mathcal{D}}({\color[rgb]{0.65234375,0.5,0.72265625}\definecolor[named]{pgfstrokecolor}{rgb}{0.65234375,0.5,0.72265625}\mathcal{W}
{c}}) .
16: end while
17: Obtain the best-performing workflow 𝒲 c ∗ ← arg  max c ∈ 𝒞  ℰ 𝒟  ( 𝒲 c ) . {\color[rgb]{0.65234375,0.5,0.72265625}\definecolor[named]{pgfstrokecolor}{rgb}{0.65234375,0.5,0.72265625}\mathcal{W}
{c}^{}}\leftarrow\operatorname{arg,max}
{c\in\mathcal{C}}\mathcal{E}
{\mathcal{D}}({\color[rgb]{0.65234375,0.5,0.72265625}\definecolor[named]{pgfstrokecolor}{rgb}{0.65234375,0.5,0.72265625}\mathcal{W}
{c}}).
18: [ 3PO: Workflow-level Prompt Optimization]
19: Workflow-level prompt optimization for the best-performing topology: 𝒲 ∗ ← 𝒪 𝒟  ( 𝒲 c ∗ ) {\color[rgb]{0,0.6015625,0.6015625}\definecolor[named]{pgfstrokecolor}{rgb}{0,0.6015625,0.6015625}\mathcal{W}^{
}}\leftarrow\mathcal{O}{\mathcal{D}}({\color[rgb]{0.65234375,0.5,0.72265625}\definecolor[named]{pgfstrokecolor}{rgb}{0.65234375,0.5,0.72265625}\mathcal{W}{c}^{
}}) .
20: Return optimized multi-agent system 𝒲 ∗ {\color[rgb]{0,0.6015625,0.6015625}\definecolor[named]{pgfstrokecolor}{rgb}{0,0.6015625,0.6015625}\mathcal{W^{*}}} .
Report issue for preceding element
Workflow-level prompt optimization. As a final step, we treat the entire MAS design as an integrated entity and conduct a round of joint prompt optimization over all agents simultaneously, conditioned on the best topology discovered in Stage (2), 𝒲 ∗ = 𝒪 𝒟  ( 𝒲 c ∗ ) \mathcal{W}^{
}=\mathcal{O}{\mathcal{D}}(\mathcal{W}{c}^{
}) . Although prompts were optimized at the individual level in Stage (1), this stage acts as an adaptation or fine-tuning process, ensuring that prompts are tailored for orchestration within the MAS and that the interdependence between agents is optimized appropriately. Our experiments (Fig. 
6
https://arxiv.org/html/2502.02533v2#S4.F6
 & 
6
https://arxiv.org/html/2502.02533v2#S4.F6
) demonstrate that this stage often yields practical benefits with a converged performance as shown in Table 
6
https://arxiv.org/html/2502.02533v2#A3.T6
.
Report issue for preceding element
4 Experiments
Report issue for preceding element
Models and evaluation data. Aside from the common benchmarks used for automating MAS (Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
; Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
) , we conduct experiments on an extensive collection of tasks: 1) Hendryck's MATH (Hendrycks et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib13
) and DROP (Dua et al., 
2019
https://arxiv.org/html/2502.02533v2#bib.bib11
) for reasoning; HotpotQA (Yang et al., 
2018
https://arxiv.org/html/2502.02533v2#bib.bib60
) , MuSiQue (Trivedi et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib47
) , 2WikiMultiHopQA (Ho et al., 
2020
https://arxiv.org/html/2502.02533v2#bib.bib14
) from LongBench (Bai et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib3
) for long-context understanding; 3) MBPP (Austin et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib2
) , HumanEval (Chen et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib5
) , and LiveCodeBench (LCB) 'test output prediction' (Jain et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib17
) for coding. We refer to App. § 
B
https://arxiv.org/html/2502.02533v2#A2
 & § 
D
https://arxiv.org/html/2502.02533v2#A4
 for details on data splits and prompt templates. We conduct all main experiments primarily on two Gemini 1.5 model sizes (Reid et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib40
) ( gemini-1.5-{pro,flash}-002) and further validate key findings on Claude 3.5 Sonnet ( claude-3-5-sonnet@20240620) (Anthropic, 
2024
https://arxiv.org/html/2502.02533v2#bib.bib1
) and Mistral Nemo ( mistral-nemo-12b) (Mistral, 
2024
https://arxiv.org/html/2502.02533v2#bib.bib34
) in App. § 
C
https://arxiv.org/html/2502.02533v2#A3
.
Report issue for preceding element
Table 1: Results on the evaluation set with Gemini 1.5 Pro and Gemini 1.5 Flash. We report the mean and standard deviation for all results with 3 runs of evaluations. We report the accuracy (%) for MATH and the test-output-prediction subtask of LiveCodeBench (LCB), F1 score for DROP, HotpotQA, MuSiQue, and 2WikiMQA, and pass@1 for MBPP and HumanEval. We note that the meta-prompt of AFlow 
 only works properly with Claude 3.5 Sonnet. Therefore, we reproduce AFlow with Gemini 1.5 Pro as the executor and Claude 3.5 Sonnet as the optimizer, where 
 indicates the results are only for reference. The inference cost is controlled comparably as shown in Table 
7
https://arxiv.org/html/2502.02533v2#A3.T7
.
Gemini-1.5-pro-002
Task
Reasoning
Multi-hop Long-context
Coding
Method
MATH
DROP
HotpotQA
MuSiQue
2WikiMQA
MBPP
HumanEval
LCB
Avg.
CoT
71.67 
3.30
70.59 
1.67
57.43 
0.52
37.81 
1.43
63.39 
1.12
68.33 
0.47
86.67 
0.94
66.33 
0.62
65.28
Self-Consistency
77.33 
1.25
74.06 
0.90
58.60 
2.19
41.81 
1.00
67.79 
1.19
69.50 
0.71
86.00 
0.82
70.33 
0.94
68.18
Self-Refine
79.67 
2.36
71.03 
1.31
60.62 
3.33
42.15 
1.34
66.74 
2.43
63.67 
0.24
84.00 
1.63
67.33 
1.31
66.90
Multi-Agent Debate
78.67 
0.94
71.78 
0.71
64.87 
0.23
46.00 
0.80
71.78 
0.63
68.67 
0.85
86.67 
1.25
73.67 
1.65
70.26
ADAS
80.00 
0.82
72.96 
0.90
65.88 
1.29
41.95 
1.24
71.14 
0.66
73.00 
1.08
87.67 
1.70
65.17 
1.25
69.72
AFlow 
*
76.00 
0.82
88.92 
0.63
68.62 
0.47
32.05 
1.29
76.51 
1.05
-
88.00 
0.00
-
-
Mass (Ours)
84.67 
0.47
90.52 
0.64
69.91 
1.11
51.40 
0.42
73.34 
0.67
86.50 
0.41
91.67 
0.47
82.33 
0.85
78.79
Gemini-1.5-flash-002
CoT
66.67 
2.36
71.79 
0.69
57.82 
1.10
37.10 
1.35
63.40 
0.68
63.33 
1.25
75.67 
1.89
51.17 
0.24
60.87
Self-Consistency
69.33 
1.25
73.42 
0.19
60.19 
1.01
41.94 
0.93
67.98 
0.72
63.67 
0.62
77.67 
1.89
53.83 
1.18
63.50
Self-Refine
71.33 
0.94
73.71 
1.09
58.84 
3.04
41.21 
1.99
65.56 
1.57
63.33 
1.25
81.67 
1.89
52.00 
1.41
63.46
Multi-Agent Debate
71.67 
0.94
74.79 
0.87
64.17 
1.69
46.27 
1.33
72.19 
0.54
63.00 
0.71
79.67 
1.25
55.50 
0.41
65.91
ADAS
68.00 
1.41
75.95 
1.18
61.36 
2.89
48.81 
1.03
66.90 
1.00
65.83 
0.24
80.67 
2.49
50.50 
1.63
64.75
Mass (Ours)
81.00 
2.45
91.68 
0.14
66.53 
0.38
43.67 
1.21
76.69 
0.50
78.00 
0.82
84.67 
0.47
72.17 
0.85
74.30
Report issue for preceding element
Baselines. We consider the following baselines: 1) CoT (Kojima et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib22
) : direct chain-of-thought reasoning via zero-shot prompting; 2) CoT-SC (Wang et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib55
) (@9 agents): with self-consistency to find the most consistent answers from diversified reasoning traces; 3) Self-Refine (Madaan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib33
; Shinn et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib44
) (2 agents @5 rounds): reflective agents to verify and self-refine predictions; 4) Multi-Agent Debate (Du et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib10
; Liang et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib28
) (3 agents @3 rounds + 1 judger): with agents justifying answers and aggregating information from other agents in multi-round debate; 5) ADAS (Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
) : an automatic agent design framework, where an LLM-based meta-agent iteratively proposes new agents based on former evaluations; 6) AFlow (Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
) : automatic workflow design via Monte-Carlo Tree Search over a set of pre-defined operators. We fairly compare all baselines with a comparable inference cost per query and a maximum number of agents of 10. We refer to Table 
7
https://arxiv.org/html/2502.02533v2#A3.T7
 for the detailed token consumption and App. § 
B
https://arxiv.org/html/2502.02533v2#A2
 for all specifications.
Report issue for preceding element
Setup. Mass is plug-and-play with arbitrary prompt optimizers. We integrate MIPRO (Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
) for a joint instruction and exemplar optimization, and we ablate other prompt optimizers implemented with Mass in Table 
9
https://arxiv.org/html/2502.02533v2#A3.T9
. We limit the number of bootstrapped demonstrations to 3 and instruction candidates to 10, per agent in 10 rounds. In topology optimization for all tasks, we search for 10 different topologies via rejection sampling. Along with topology optimization, each topology is evaluated on the validation set 3 times to stabilize the prediction. The optimized MAS is then reported on the held-out test set over three runs. We set model temperature T T at 0.7, maximum output tokens at 4096, and the t t in Softmax at 0.05 for sharpening the selection probability p a p_{a} for each search dimension. We implement the same LLM backbone as both evaluator and optimizer.
Report issue for preceding element
Main results. We present the main results of Mass compared to the baselines on the evaluation set in Table 
1
https://arxiv.org/html/2502.02533v2#S4.T1
. Mass yields substantial gains over common forms of multi-agent systems, (e.g. self-consistency, self-refine, and multi-agent debate), that scale up without optimizing prompts for agents in collaboration. Mass leads to high-performing MAS: 78.8% and 74.3% on average on Gemini 1.5 Pro and Flash, respectively, where we observe consistent improvements on Claude 3.5 Sonnet and Mistral Nemo as reported in Table 
4
https://arxiv.org/html/2502.02533v2#A3.T4
 & 
5
https://arxiv.org/html/2502.02533v2#A3.T5
. By comparing Mass with state-of-the-art automatic agent design baselines, ADAS and AFlow, we first notice that ADAS only brings subtle gains even by already conditioning its meta-agent generation based on the common forms of agents. The meta-agent keeps proposing complex topologies but without optimizing the prompt design. AFlow, on the other hand, demonstrates a competitive performance to Mass, especially on 2WikiMQA and HumanEval.
Report issue for preceding element
 
Figure 5: Left: average performance per optimization stage of Mass over 8 evaluation tasks on Gemini 1.5 Pro. We compare Mass with a single agent ( CoT) starting point as the reference and an APO baseline that optimizes over the single agent by MIPROv2 (Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
) . Refer to App. § 
C
https://arxiv.org/html/2502.02533v2#A3
 for the detailed ablation per task. Right: a comparative ablation study on topology optimization ( 2TO) without pruning and without the former stage of prompt optimization ( 1PO) evaluated on HotpotQA. Report issue for preceding element
 
Figure 6: The optimization trajectories of Mass compared to agent design baselines per validation round on DROP. We note that, as a distinct advantage of Mass, the optimization within stages (1) & (2) of Mass can be completely parallelized, whereas ADAS and AFlow are iterative algorithms that have to wait to propose new agents until finishing earlier trajectories. Report issue for preceding element
Report issue for preceding element
We attribute the performance of AFlow to: 1) its 'expansion' phase that generates new nodes based on an error log that contrasts the predictions with the ground truth, which provides implicit textual gradients (Pryzant et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib37
) to reflect on any formatting errors in prompt design; 2) a more refined search space within a pre-defined set of operators. Though AFlow draws similar inspirations on the importance of search space design as Mass, it still lacks a phase of prompt optimization to optimize its pre-defined operators properly, resulting in under-performance for MAS search results at MATH and MuSiQue. Different from these baselines, the consistent improvements brought by Mass highlight the importance of searching in both prompt and topology design space.
Report issue for preceding element
Ablating optimization stages. To understand the incremental gain per Mass optimization stage, we provide a stage-by-stage ablation study in Fig. 
6
https://arxiv.org/html/2502.02533v2#S4.F6
. We list the average performance of Mass from block-level to workflow-level optimization and compare it with a single agent APO baseline (MIPROv2), where the block-level optimization performance indicates the best-performing building block a ∈ 𝒜 a\in\mathcal{A} after APO. First, we notice that there is a large gain, 6% on average, between block-level optimization and single-agent APO, showing that MAS benefits substantially from having its agents optimized inside the building block, outperforming APO alone significantly. In addition, going from Stage (1) to (2), another 3% gain can be achieved by composing influential topologies while searching for the optimal configurations. Here, we provide an ablation on conducting Stage (2) without prompt optimization beforehand or without search space pruning. Fig. 
6
https://arxiv.org/html/2502.02533v2#S4.F6
 (right) shows that both of them are critical for effective search space exploration. Lastly, Mass obtains further gains ( ∼ \sim 2%) by conducting workflow-level prompt optimization on the best-found topology, which indicates that optimizing the prompts towards modeling the interdependence of agents is beneficial in MAS.
Report issue for preceding element
Cost-effectiveness of Mass. We conduct analysis on the cost-effectiveness of Mass. In particular, we visualize the optimization trajectory of Mass as shown in Fig. 
6
https://arxiv.org/html/2502.02533v2#S4.F6
. Mass's trajectory demonstrates a steady trend of optimization that gradually improves the validation performance via interleaving the search towards better prompts and topologies. However, when it comes to automatic design baselines without explicit prompt optimization stages, AFlow is exposed to a larger variance in its optimization due to the nature of MCTS, whereas ADAS gets trapped in discovering over-complex topologies that appear to be less effective than the prompt design space. Overall, the optimization trajectory of Mass highlights the importance of optimizing in an effective design space, where interleaved optimization further resolves the complexity with more consecutive rewards within the same amount of training costs compared to baselines. Following Sec. 
2.1
https://arxiv.org/html/2502.02533v2#S2.SS1
, Mass also demonstrated advanced inference token-effectiveness and a comparable training cost, which we refer to Fig. 
9
https://arxiv.org/html/2502.02533v2#A3.F9
 and Table 
7
https://arxiv.org/html/2502.02533v2#A3.T7
.
Report issue for preceding element
Best-found MAS architectures & Design principles. We further inspect an example of optimized prompts and the trajectory of Mass in discovering more effective topologies in Fig. 
7
https://arxiv.org/html/2502.02533v2#S4.F7
. The optimization starts from a zero-shot CoT agent, and soon Mass in Stage (1) identifies the high-performing topology in debate with its optimized prompt. However, as found in Stage (2), aggregating with more parallel agents actually outweighs the multi-agent debate. Workflow-level prompt optimization then leads to the best-performing predictor for aggregation. The overall optimization flow sheds light on our guidelines for building effective MAS: 1) Optimizing individual agents properly is important before composing them into an MAS; 2) A more effective MAS can be built by composing influential topologies; and 3) Modeling the interdependence between agents is beneficial, and can be achieved via workflow-level joint optimization.
Report issue for preceding element
 
Figure 7: A demonstration of the optimization trajectory of Mass on MATH. In (1) block-level optimization: multi-agent debate serves as the best-performing topology. In (2) workflow topology optimization, aggregating with more parallel agents outweighs the performance of agents in debate. Lastly, (3) workflow-level optimization discovers the optimal prompt conditioned on the best topology. Report issue for preceding element
5 Related Work
Report issue for preceding element
Forms of LLM-based agentic systems. The simplest form of an LLM-based agentic system involves a single agent that can dynamically interact and respond to the environment (Yao et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib61
) . Recent advances endow agents with diverse roles and tools (Wu et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib57
) , orchestrating multiple agents to cooperate with each other (Chen et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib6
) . Standard forms of agent cooperation (i.e., topology) often involve parallel and serial flows of information. The parallel form usually diversifies the exploration among many agents in parallel (Li et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib24
) , and self-consistency (SC) (Wang et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib55
) is a representative way for scaling agents in parallel. The serial form aims to advance the exploitation of a task via a chain of agents, where LLMs can serve as reflective agents to self-justify and refine former predictions (Madaan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib33
; Shinn et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib44
) . Later, the opinions from multiple agents can be summarized to retrieve the most consistent answer by an aggregation agent (Chen et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib7
; Lin et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib29
) . Moreover, multi-agent debate consists of a more complex flow of information (Chen et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib4
; Wang et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib53
; Zhang et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib66
) , and recent research shows that debating can elicit more truthful predictions (Khan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib20
; Du et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib10
) . Recent agent topology extends beyond the above connections (Wang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib52
; Qian et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib38
) , and Mass can automatically search the best topology among the aforementioned spaces.
Report issue for preceding element
Automatic optimization for MAS. Recent research starts automating agent design by interpreting agent functions as learnable policies (Zhang et al., 
2024d
https://arxiv.org/html/2502.02533v2#bib.bib67
, 
e
https://arxiv.org/html/2502.02533v2#bib.bib68
) and synthesizing trajectories for agent fine-tuning (Qiao et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib39
) . Going further from a single agent, automatic multi-agent optimization faces a higher level of complexity, thereby requiring a more sophisticated design of the search space and algorithms. Among all recent advances in multi-agent optimization, the optimization space has spanned prompts (Khattab et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib21
; Wang et al., 
2024d
https://arxiv.org/html/2502.02533v2#bib.bib54
) , tools (Zhou et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib73
) , workflows (Li et al., 
2024c
https://arxiv.org/html/2502.02533v2#bib.bib27
) , and thinking strategies (Shang et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib43
) . Aligning closer to our topology search space, DyLAN (Liu et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib32
) dynamically activates the composition of agents, and Archon (Saad-Falcon et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib42
) frames MAS as a hyperparameter optimization problem. Neither of them has taken the important prompt space into account, where we demonstrated the importance of prompt optimization in Sec. 
3
https://arxiv.org/html/2502.02533v2#S3
. In addition, GPTSwarm (Zhuge et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib75
) optimizes the connections between agentic nodes using a policy gradient algorithm. State-of-the-art automatic agent design methods, ADAS (Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
) and AFlow (Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
) , also attempt to optimize agentic workflows with advanced search algorithms and LLM as optimizers. Concurrently with us, MaAS (Zhang et al., 
2025
https://arxiv.org/html/2502.02533v2#bib.bib64
) optimizes an agentic supernet for query-dependent MAS. However, we observe that the importance of prompt designs has been relatively under-studied in these prior works.
Report issue for preceding element
6 Conclusion
Report issue for preceding element
We approach designing effective MAS by first conducting a thorough analysis of the massive design space, revealing the crucial role of prompts, and identifying the redundancy in MAS search space design. Building on these findings, we introduce Mass, a novel multi-stage optimization framework that searches within a pruned design space, interleaving prompt and topology optimization to efficiently generate high-performing MAS. Mass is agnostic to customized prompt optimizers and topology design space. Our experiments demonstrate that Mass-optimized MAS significantly outperforms existing manual and automated approaches across an extensive set of tasks. Finally, based on the optimized systems discovered by Mass, we extract valuable design principles to guide the development of future MAS, and we expect future prospective prompt and topology designs integrated with Mass towards building more efficient and effective LLM-based agents.
Report issue for preceding element
Acknowledgment
Report issue for preceding element
We thank Jinsung Yoon and all other colleagues from Google Cloud AI Research for their valuable feedback.
Report issue for preceding element
References
Report issue for preceding element
Anthropic [2024] ↑ Anthropic. The claude 3 model family: Opus, sonnet, haiku. 2024.
Austin et al. [2021] ↑ J. Austin, A. Odena, M. Nye, M. Bosma, H. Michalewski, D. Dohan, E. Jiang, C. Cai, M. Terry, Q. Le, et al. Program synthesis with large language models. 
arXiv preprint arXiv:2108.07732
, 2021.
Bai et al. [2024] ↑ Y. Bai, X. Lv, J. Zhang, H. Lyu, J. Tang, Z. Huang, Z. Du, X. Liu, A. Zeng, L. Hou, Y. Dong, J. Tang, and J. Li. LongBench: A bilingual, multitask benchmark for long context understanding. In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 3119–3137, Bangkok, Thailand, Aug. 2024. Association for Computational Linguistics. 
10.18653/v1/2024.acl-long.172
https:/doi.org/10.18653/v1/2024.acl-long.172
. URL 
https://aclanthology.org/2024.acl-long.172/
https://aclanthology.org/2024.acl-long.172/
.
Chen et al. [2024a] ↑ J. Chen, S. Saha, and M. Bansal. ReConcile: Round-table conference improves reasoning via consensus among diverse LLMs. In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 7066–7085, Bangkok, Thailand, Aug. 2024a. Association for Computational Linguistics. 
10.18653/v1/2024.acl-long.381
https:/doi.org/10.18653/v1/2024.acl-long.381
. URL 
https://aclanthology.org/2024.acl-long.381/
https://aclanthology.org/2024.acl-long.381/
.
Chen et al. [2021] ↑ M. Chen, J. Tworek, H. Jun, Q. Yuan, H. P. D. O. Pinto, J. Kaplan, H. Edwards, Y. Burda, N. Joseph, G. Brockman, et al. Evaluating large language models trained on code. 
arXiv preprint arXiv:2107.03374
, 2021.
Chen et al. [2024b] ↑ W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C.-M. Chan, H. Yu, Y. Lu, Y.-H. Hung, C. Qian, Y. Qin, X. Cong, R. Xie, Z. Liu, M. Sun, and J. Zhou. Agentverse: Facilitating multi-agent collaboration and exploring emergent behaviors. In 
The Twelfth International Conference on Learning Representations
, 2024b. URL 
https://openreview.net/forum?id=EHg5GDnyq1
https://openreview.net/forum?id=EHg5GDnyq1
.
Chen et al. [2024c] ↑ X. Chen, R. Aksitov, U. Alon, J. Ren, K. Xiao, P. Yin, S. Prakash, C. Sutton, X. Wang, and D. Zhou. Universal self-consistency for large language models. In 
ICML 2024 Workshop on In-Context Learning
, 2024c. URL 
https://openreview.net/forum?id=LjsjHF7nAN
https://openreview.net/forum?id=LjsjHF7nAN
.
Chen et al. [2024d] ↑ X. Chen, M. Lin, N. Schärli, and D. Zhou. Teaching large language models to self-debug. In 
The Twelfth International Conference on Learning Representations
, 2024d. URL 
https://openreview.net/forum?id=KuPixIqPiq
https://openreview.net/forum?id=KuPixIqPiq
.
Cheng et al. [2024] ↑ C.-A. Cheng, A. Nie, and A. Swaminathan. Trace is the next autodiff: Generative optimization with rich feedback, execution traces, and LLMs. In 
The Thirty-eighth Annual Conference on Neural Information Processing Systems
, 2024. URL 
https://openreview.net/forum?id=rYs2Dmn9tD
https://openreview.net/forum?id=rYs2Dmn9tD
.
Du et al. [2024] ↑ Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch. Improving factuality and reasoning in language models through multiagent debate. In 
Forty-first International Conference on Machine Learning, ICML 2024, Vienna, Austria, July 21-27, 2024
. OpenReview.net, 2024. URL 
https://openreview.net/forum?id=zj7YuTE4t8
https://openreview.net/forum?id=zj7YuTE4t8
.
Dua et al. [2019] ↑ D. Dua, Y. Wang, P. Dasigi, G. Stanovsky, S. Singh, and M. Gardner. DROP: A reading comprehension benchmark requiring discrete reasoning over paragraphs. In J. Burstein, C. Doran, and T. Solorio, editors, 
Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers)
, pages 2368–2378, Minneapolis, Minnesota, June 2019. Association for Computational Linguistics. 
10.18653/v1/N19-1246
https:/doi.org/10.18653/v1/N19-1246
. URL 
https://aclanthology.org/N19-1246/
https://aclanthology.org/N19-1246/
.
Guo et al. [2024] ↑ S. Guo, C. Deng, Y. Wen, H. Chen, Y. Chang, and J. Wang. Ds-agent: Automated data science by empowering large language models with case-based reasoning, 2024. URL 
https://arxiv.org/abs/2402.17453
https://arxiv.org/abs/2402.17453
.
Hendrycks et al. [2021] ↑ D. Hendrycks, C. Burns, S. Kadavath, A. Arora, S. Basart, E. Tang, D. Song, and J. Steinhardt. Measuring mathematical problem solving with the math dataset. 
NeurIPS
, 2021. URL 
https://openreview.net/forum?id=7Bywt2mQsCe
https://openreview.net/forum?id=7Bywt2mQsCe
.
Ho et al. [2020] ↑ X. Ho, A.-K. Duong Nguyen, S. Sugawara, and A. Aizawa. Constructing a multi-hop QA dataset for comprehensive evaluation of reasoning steps. In D. Scott, N. Bel, and C. Zong, editors, 
Proceedings of the 28th International Conference on Computational Linguistics
, pages 6609–6625, Barcelona, Spain (Online), Dec. 2020. International Committee on Computational Linguistics. 
10.18653/v1/2020.coling-main.580
https:/doi.org/10.18653/v1/2020.coling-main.580
. URL 
https://aclanthology.org/2020.coling-main.580/
https://aclanthology.org/2020.coling-main.580/
.
Hu et al. [2024a] ↑ S. Hu, C. Lu, and J. Clune. Automated design of agentic systems. 
arXiv preprint arXiv:2408.08435
, 2024a.
Hu et al. [2024b] ↑ X. Hu, Z. Zhao, S. Wei, Z. Chai, Q. Ma, G. Wang, X. Wang, J. Su, J. Xu, M. Zhu, Y. Cheng, J. Yuan, J. Li, K. Kuang, Y. Yang, H. Yang, and F. Wu. Infiagent-dabench: Evaluating agents on data analysis tasks, 2024b. URL 
https://arxiv.org/abs/2401.05507
https://arxiv.org/abs/2401.05507
.
Jain et al. [2024] ↑ N. Jain, K. Han, A. Gu, W.-D. Li, F. Yan, T. Zhang, S. Wang, A. Solar-Lezama, K. Sen, and I. Stoica. Livecodebench: Holistic and contamination free evaluation of large language models for code. 
arXiv preprint arXiv:2403.07974
, 2024.
Jimenez et al. [2023] ↑ C. E. Jimenez, J. Yang, A. Wettig, S. Yao, K. Pei, O. Press, and K. Narasimhan. Swe-bench: Can language models resolve real-world github issues? 
arXiv preprint arXiv:2310.06770
, 2023.
Kandasamy et al. [2018] ↑ K. Kandasamy, W. Neiswanger, J. Schneider, B. Poczos, and E. P. Xing. Neural architecture search with bayesian optimisation and optimal transport. 
Advances in neural information processing systems
, 31, 2018.
Khan et al. [2024] ↑ A. Khan, J. Hughes, D. Valentine, L. Ruis, K. Sachan, A. Radhakrishnan, E. Grefenstette, S. R. Bowman, T. Rocktäschel, and E. Perez. Debating with more persuasive LLMs leads to more truthful answers. In 
Forty-first International Conference on Machine Learning
, 2024. URL 
https://openreview.net/forum?id=iLCZtl7FTa
https://openreview.net/forum?id=iLCZtl7FTa
.
Khattab et al. [2024] ↑ O. Khattab, A. Singhvi, P. Maheshwari, Z. Zhang, K. Santhanam, S. V. A, S. Haq, A. Sharma, T. T. Joshi, H. Moazam, H. Miller, M. Zaharia, and C. Potts. DSPy: Compiling declarative language model calls into state-of-the-art pipelines. In 
The Twelfth International Conference on Learning Representations
, 2024. URL 
https://openreview.net/forum?id=sY5N0zY5Od
https://openreview.net/forum?id=sY5N0zY5Od
.
Kojima et al. [2022] ↑ T. Kojima, S. S. Gu, M. Reid, Y. Matsuo, and Y. Iwasawa. Large language models are zero-shot reasoners. 
Advances in neural information processing systems
, 35:22199–22213, 2022.
Lewis et al. [2020] ↑ P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W.-t. Yih, T. Rocktäschel, et al. Retrieval-augmented generation for knowledge-intensive nlp tasks. 
Advances in Neural Information Processing Systems
, 33:9459–9474, 2020.
Li et al. [2024a] ↑ J. Li, Q. Zhang, Y. Yu, Q. FU, and D. Ye. More agents is all you need. 
Transactions on Machine Learning Research
, 2024a. ISSN 2835-8856. URL 
https://openreview.net/forum?id=bgzUSZ8aeg
https://openreview.net/forum?id=bgzUSZ8aeg
.
Li et al. [2025] ↑ M. Li, S. Zhao, Q. Wang, K. Wang, Y. Zhou, S. Srivastava, C. Gokmen, T. Lee, L. E. Li, R. Zhang, W. Liu, P. Liang, L. Fei-Fei, J. Mao, and J. Wu. Embodied agent interface: Benchmarking llms for embodied decision making, 2025. URL 
https://arxiv.org/abs/2410.07166
https://arxiv.org/abs/2410.07166
.
Li et al. [2024b] ↑ Y. Li, Y. Du, J. Zhang, L. Hou, P. Grabowski, Y. Li, and E. Ie. Improving multi-agent debate with sparse communication topology. In Y. Al-Onaizan, M. Bansal, and Y.-N. Chen, editors, 
Findings of the Association for Computational Linguistics: EMNLP 2024
, pages 7281–7294, Miami, Florida, USA, Nov. 2024b. Association for Computational Linguistics. 
10.18653/v1/2024.findings-emnlp.427
https:/doi.org/10.18653/v1/2024.findings-emnlp.427
. URL 
https://aclanthology.org/2024.findings-emnlp.427/
https://aclanthology.org/2024.findings-emnlp.427/
.
Li et al. [2024c] ↑ Z. Li, S. Xu, K. Mei, W. Hua, B. Rama, O. Raheja, H. Wang, H. Zhu, and Y. Zhang. Autoflow: Automated workflow generation for large language model agents. 
arXiv preprint arXiv:2407.12821
, 2024c.
Liang et al. [2024] ↑ T. Liang, Z. He, W. Jiao, X. Wang, Y. Wang, R. Wang, Y. Yang, S. Shi, and Z. Tu. Encouraging divergent thinking in large language models through multi-agent debate. In Y. Al-Onaizan, M. Bansal, and Y.-N. Chen, editors, 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing
, pages 17889–17904, Miami, Florida, USA, Nov. 2024. Association for Computational Linguistics. 
10.18653/v1/2024.emnlp-main.992
https:/doi.org/10.18653/v1/2024.emnlp-main.992
. URL 
https://aclanthology.org/2024.emnlp-main.992/
https://aclanthology.org/2024.emnlp-main.992/
.
Lin et al. [2024] ↑ L. Lin, J. Fu, P. Liu, Q. Li, Y. Gong, J. Wan, F. Zhang, Z. Wang, D. Zhang, and K. Gai. Just ask one more time! self-agreement improves reasoning of language models in (almost) all scenarios. In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Findings of the Association for Computational Linguistics: ACL 2024
, pages 3829–3852, Bangkok, Thailand, Aug. 2024. Association for Computational Linguistics. 
10.18653/v1/2024.findings-acl.230
https:/doi.org/10.18653/v1/2024.findings-acl.230
. URL 
https://aclanthology.org/2024.findings-acl.230/
https://aclanthology.org/2024.findings-acl.230/
.
Liu et al. [2024a] ↑ F. Liu, N. AlDahoul, G. Eady, Y. Zaki, B. AlShebli, and T. Rahwan. Self-reflection outcome is sensitive to prompt construction. 
arXiv preprint arXiv:2406.10400
, 2024a.
Liu et al. [2018] ↑ H. Liu, K. Simonyan, and Y. Yang. Darts: Differentiable architecture search. 
arXiv preprint arXiv:1806.09055
, 2018.
Liu et al. [2024b] ↑ Z. Liu, Y. Zhang, P. Li, Y. Liu, and D. Yang. A dynamic LLM-powered agent network for task-oriented agent collaboration. In 
First Conference on Language Modeling
, 2024b. URL 
https://openreview.net/forum?id=XII0Wp1XA9
https://openreview.net/forum?id=XII0Wp1XA9
.
Madaan et al. [2024] ↑ A. Madaan, N. Tandon, P. Gupta, S. Hallinan, L. Gao, S. Wiegreffe, U. Alon, N. Dziri, S. Prabhumoye, Y. Yang, et al. Self-refine: Iterative refinement with self-feedback. 
Advances in Neural Information Processing Systems
, 36, 2024.
Mistral [2024] ↑ Mistral. Mistral nemo. 2024. URL 
https://mistral.ai/news/mistral-nemo
https://mistral.ai/news/mistral-nemo
.
Opsahl-Ong et al. [2024] ↑ K. Opsahl-Ong, M. J. Ryan, J. Purtell, D. Broman, C. Potts, M. Zaharia, and O. Khattab. Optimizing instructions and demonstrations for multi-stage language model programs. In Y. Al-Onaizan, M. Bansal, and Y.-N. Chen, editors, 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing
, pages 9340–9366, Miami, Florida, USA, Nov. 2024. Association for Computational Linguistics. 
10.18653/v1/2024.emnlp-main.525
https:/doi.org/10.18653/v1/2024.emnlp-main.525
. URL 
https://aclanthology.org/2024.emnlp-main.525/
https://aclanthology.org/2024.emnlp-main.525/
.
Ouyang et al. [2022] ↑ L. Ouyang, J. Wu, X. Jiang, D. Almeida, C. Wainwright, P. Mishkin, C. Zhang, S. Agarwal, K. Slama, A. Ray, et al. Training language models to follow instructions with human feedback. 
Advances in neural information processing systems
, 35:27730–27744, 2022.
Pryzant et al. [2023] ↑ R. Pryzant, D. Iter, J. Li, Y. Lee, C. Zhu, and M. Zeng. Automatic prompt optimization with “gradient descent” and beam search. In H. Bouamor, J. Pino, and K. Bali, editors, 
Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing
, pages 7957–7968, Singapore, Dec. 2023. Association for Computational Linguistics. 
10.18653/v1/2023.emnlp-main.494
https:/doi.org/10.18653/v1/2023.emnlp-main.494
. URL 
https://aclanthology.org/2023.emnlp-main.494/
https://aclanthology.org/2023.emnlp-main.494/
.
Qian et al. [2024] ↑ C. Qian, Z. Xie, Y. Wang, W. Liu, Y. Dang, Z. Du, W. Chen, C. Yang, Z. Liu, and M. Sun. Scaling large-language-model-based multi-agent collaboration. 
arXiv preprint arXiv:2406.07155
, 2024.
Qiao et al. [2024] ↑ S. Qiao, N. Zhang, R. Fang, Y. Luo, W. Zhou, Y. Jiang, C. Lv, and H. Chen. AutoAct: Automatic agent learning from scratch for QA via self-planning. In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 3003–3021, Bangkok, Thailand, Aug. 2024. Association for Computational Linguistics. 
10.18653/v1/2024.acl-long.165
https:/doi.org/10.18653/v1/2024.acl-long.165
. URL 
https://aclanthology.org/2024.acl-long.165/
https://aclanthology.org/2024.acl-long.165/
.
Reid et al. [2024] ↑ M. Reid, N. Savinov, D. Teplyashin, D. Lepikhin, T. P. Lillicrap, J. Alayrac, R. Soricut, A. Lazaridou, O. Firat, J. Schrittwieser, I. Antonoglou, R. Anil, S. Borgeaud, A. M. Dai, K. Millican, E. Dyer, M. Glaese, T. Sottiaux, B. Lee, F. Viola, M. Reynolds, Y. Xu, J. Molloy, J. Chen, M. Isard, P. Barham, T. Hennigan, R. McIlroy, M. Johnson, J. Schalkwyk, E. Collins, E. Rutherford, E. Moreira, K. Ayoub, M. Goel, C. Meyer, G. Thornton, Z. Yang, H. Michalewski, Z. Abbas, N. Schucher, A. Anand, R. Ives, J. Keeling, K. Lenc, S. Haykal, S. Shakeri, P. Shyam, A. Chowdhery, R. Ring, S. Spencer, E. Sezener, and et al. Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context. 
CoRR
, abs/2403.05530, 2024. 
10.48550/ARXIV.2403.05530
https:/doi.org/10.48550/ARXIV.2403.05530
. URL 
https://doi.org/10.48550/arXiv.2403.05530
https://doi.org/10.48550/arXiv.2403.05530
.
Ru et al. [2021] ↑ B. Ru, X. Wan, X. Dong, and M. Osborne. Interpretable neural architecture search via bayesian optimisation with weisfeiler-lehman kernels. 
International Conference on Learning Representations (ICLR)
, 2021.
Saad-Falcon et al. [2024] ↑ J. Saad-Falcon, A. G. Lafuente, S. Natarajan, N. Maru, H. Todorov, E. Guha, E. K. Buchanan, M. Chen, N. Guha, C. Ré, et al. Archon: An architecture search framework for inference-time techniques. 
arXiv preprint arXiv:2409.15254
, 2024.
Shang et al. [2024] ↑ Y. Shang, Y. Li, K. Zhao, L. Ma, J. Liu, F. Xu, and Y. Li. Agentsquare: Automatic llm agent search in modular design space. 
arXiv preprint arXiv:2410.06153
, 2024.
Shinn et al. [2024] ↑ N. Shinn, F. Cassano, A. Gopinath, K. Narasimhan, and S. Yao. Reflexion: Language agents with verbal reinforcement learning. 
Advances in Neural Information Processing Systems
, 36, 2024.
Singh et al. [2025] ↑ A. Singh, A. Ehtesham, S. Kumar, and T. T. Khoei. Agentic retrieval-augmented generation: A survey on agentic rag. 
arXiv preprint arXiv:2501.09136
, 2025.
Su et al. [2025] ↑ H. Su, R. Sun, J. Yoon, P. Yin, T. Yu, and S. Ö. Arık. Learn-by-interact: A data-centric framework for self-adaptive agents in realistic environments. 
arXiv preprint arXiv:2501.10893
, 2025.
Trivedi et al. [2022] ↑ H. Trivedi, N. Balasubramanian, T. Khot, and A. Sabharwal. MuSiQue: Multihop questions via single-hop question composition. 
Transactions of the Association for Computational Linguistics
, 10:539–554, 2022. 
10.1162/tacl_a_00475
https:/doi.org/10.1162/tacl_a_00475
. URL 
https://aclanthology.org/2022.tacl-1.31/
https://aclanthology.org/2022.tacl-1.31/
.
Verma et al. [2024] ↑ M. Verma, S. Bhambri, and S. Kambhampati. On the brittle foundations of react prompting for agentic large language models. 
arXiv preprint arXiv:2405.13966
, 2024.
Wan et al. [2022] ↑ X. Wan, B. Ru, P. M. Esperança, and Z. Li. On redundancy and diversity in cell-based neural architecture search. In 
International Conference on Learning Representations
, 2022. URL 
https://openreview.net/forum?id=rFJWoYoxrDB
https://openreview.net/forum?id=rFJWoYoxrDB
.
Wan et al. [2024] ↑ X. Wan, R. Sun, H. Nakhost, and S. O. Arik. Teach better or show smarter? on instructions and exemplars in automatic prompt optimization. In 
The Thirty-eighth Annual Conference on Neural Information Processing Systems
, 2024. URL 
https://openreview.net/forum?id=IdtoJVWVnX
https://openreview.net/forum?id=IdtoJVWVnX
.
Wang et al. [2024a] ↑ F. Wang, X. Wan, R. Sun, J. Chen, and S. Ö. Arık. Astute rag: Overcoming imperfect retrieval augmentation and knowledge conflicts for large language models. 
arXiv preprint arXiv:2410.07176
, 2024a.
Wang et al. [2024b] ↑ J. Wang, J. Wang, B. Athiwaratkun, C. Zhang, and J. Zou. Mixture-of-agents enhances large language model capabilities. 
arXiv preprint arXiv:2406.04692
, 2024b.
Wang et al. [2024c] ↑ Q. Wang, Z. Wang, Y. Su, H. Tong, and Y. Song. Rethinking the bounds of LLM reasoning: Are multi-agent discussions the key? In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 6106–6131, Bangkok, Thailand, Aug. 2024c. Association for Computational Linguistics. 
10.18653/v1/2024.acl-long.331
https:/doi.org/10.18653/v1/2024.acl-long.331
. URL 
https://aclanthology.org/2024.acl-long.331/
https://aclanthology.org/2024.acl-long.331/
.
Wang et al. [2024d] ↑ W. Wang, H. A. Alyahya, D. R. Ashley, O. Serikov, D. Khizbullin, F. Faccio, and J. Schmidhuber. How to correctly do semantic backpropagation on language-based agentic systems. 
arXiv preprint arXiv:2412.03624
, 2024d.
Wang et al. [2023] ↑ X. Wang, J. Wei, D. Schuurmans, Q. V. Le, E. H. Chi, S. Narang, A. Chowdhery, and D. Zhou. Self-consistency improves chain of thought reasoning in language models. In 
The Eleventh International Conference on Learning Representations
, 2023. URL 
https://openreview.net/forum?id=1PL1NIMMrw
https://openreview.net/forum?id=1PL1NIMMrw
.
White et al. [2023] ↑ C. White, M. Safari, R. Sukthanker, B. Ru, T. Elsken, A. Zela, D. Dey, and F. Hutter. Neural architecture search: Insights from 1000 papers. 
arXiv preprint arXiv:2301.08727
, 2023.
Wu et al. [2023] ↑ Q. Wu, G. Bansal, J. Zhang, Y. Wu, S. Zhang, E. Zhu, B. Li, L. Jiang, X. Zhang, and C. Wang. Autogen: Enabling next-gen llm applications via multi-agent conversation framework. 
arXiv preprint arXiv:2308.08155
, 2023.
Xia et al. [2024] ↑ C. S. Xia, Y. Deng, S. Dunn, and L. Zhang. Agentless: Demystifying llm-based software engineering agents. 
arXiv preprint arXiv:2407.01489
, 2024.
Yang et al. [2024] ↑ C. Yang, X. Wang, Y. Lu, H. Liu, Q. V. Le, D. Zhou, and X. Chen. Large language models as optimizers. In 
The Twelfth International Conference on Learning Representations
, 2024. URL 
https://openreview.net/forum?id=Bb4VGOWELI
https://openreview.net/forum?id=Bb4VGOWELI
.
Yang et al. [2018] ↑ Z. Yang, P. Qi, S. Zhang, Y. Bengio, W. Cohen, R. Salakhutdinov, and C. D. Manning. HotpotQA: A dataset for diverse, explainable multi-hop question answering. In E. Riloff, D. Chiang, J. Hockenmaier, and J. Tsujii, editors, 
Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing
, pages 2369–2380, Brussels, Belgium, Oct.-Nov. 2018. Association for Computational Linguistics. 
10.18653/v1/D18-1259
https:/doi.org/10.18653/v1/D18-1259
. URL 
https://aclanthology.org/D18-1259/
https://aclanthology.org/D18-1259/
.
Yao et al. [2023] ↑ S. Yao, J. Zhao, D. Yu, N. Du, I. Shafran, K. R. Narasimhan, and Y. Cao. React: Synergizing reasoning and acting in language models. In 
The Eleventh International Conference on Learning Representations
, 2023. URL 
https://openreview.net/forum?id=WE_vluYUL-X
https://openreview.net/forum?id=WE_vluYUL-X
.
Yuksekgonul et al. [2025] ↑ M. Yuksekgonul, F. Bianchi, J. Boen, S. Liu, P. Lu, Z. Huang, C. Guestrin, and J. Zou. Optimizing generative ai by backpropagating language model feedback. 
Nature
, 639:609–616, 2025.
Zhang et al. [2024a] ↑ G. Zhang, Y. Yue, Z. Li, S. Yun, G. Wan, K. Wang, D. Cheng, J. X. Yu, and T. Chen. Cut the crap: An economical communication pipeline for llm-based multi-agent systems. 
arXiv preprint arXiv:2410.02506
, 2024a.
Zhang et al. [2025] ↑ G. Zhang, L. Niu, J. Fang, K. Wang, L. Bai, and X. Wang. Multi-agent architecture search via agentic supernet. 
arXiv preprint arXiv:2502.04180
, 2025.
Zhang et al. [2024b] ↑ J. Zhang, J. Xiang, Z. Yu, F. Teng, X. Chen, J. Chen, M. Zhuge, X. Cheng, S. Hong, J. Wang, et al. Aflow: Automating agentic workflow generation. 
arXiv preprint arXiv:2410.10762
, 2024b.
Zhang et al. [2024c] ↑ J. Zhang, X. Xu, N. Zhang, R. Liu, B. Hooi, and S. Deng. Exploring collaboration mechanisms for LLM agents: A social psychology view. In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 14544–14607, Bangkok, Thailand, Aug. 2024c. Association for Computational Linguistics. 
10.18653/v1/2024.acl-long.782
https:/doi.org/10.18653/v1/2024.acl-long.782
. URL 
https://aclanthology.org/2024.acl-long.782/
https://aclanthology.org/2024.acl-long.782/
.
Zhang et al. [2024d] ↑ S. Zhang, J. Zhang, J. Liu, L. Song, C. Wang, R. Krishna, and Q. Wu. Offline training of language model agents with functions as learnable weights. In 
Forty-first International Conference on Machine Learning
, 2024d. URL 
https://openreview.net/forum?id=2xbkWiEuR1
https://openreview.net/forum?id=2xbkWiEuR1
.
Zhang et al. [2024e] ↑ W. Zhang, K. Tang, H. Wu, M. Wang, Y. Shen, G. Hou, Z. Tan, P. Li, Y. Zhuang, and W. Lu. Agent-pro: Learning to evolve via policy-level reflection and optimization. In L.-W. Ku, A. Martins, and V. Srikumar, editors, 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 5348–5375, Bangkok, Thailand, Aug. 2024e. Association for Computational Linguistics. 
10.18653/v1/2024.acl-long.292
https:/doi.org/10.18653/v1/2024.acl-long.292
. URL 
https://aclanthology.org/2024.acl-long.292/
https://aclanthology.org/2024.acl-long.292/
.
Zhang et al. [2024f] ↑ Y. Zhang, R. Sun, Y. Chen, T. Pfister, R. Zhang, and S. O. Arik. Chain of agents: Large language models collaborating on long-context tasks. In 
The Thirty-eighth Annual Conference on Neural Information Processing Systems
, 2024f. URL 
https://openreview.net/forum?id=LuCLf4BJsr
https://openreview.net/forum?id=LuCLf4BJsr
.
Zhou et al. [2023a] ↑ H. Zhou, X. Wan, I. Vulić, and A. Korhonen. Survival of the most influential prompts: Efficient black-box prompt search via clustering and pruning. In H. Bouamor, J. Pino, and K. Bali, editors, 
Findings of the Association for Computational Linguistics: EMNLP 2023
, pages 13064–13077, Singapore, Dec. 2023a. Association for Computational Linguistics. 
10.18653/v1/2023.findings-emnlp.870
https:/doi.org/10.18653/v1/2023.findings-emnlp.870
. URL 
https://aclanthology.org/2023.findings-emnlp.870/
https://aclanthology.org/2023.findings-emnlp.870/
.
Zhou et al. [2024a] ↑ H. Zhou, X. Wan, Y. Liu, N. Collier, I. Vulić, and A. Korhonen. Fairer preferences elicit improved human-aligned large language model judgments. In Y. Al-Onaizan, M. Bansal, and Y.-N. Chen, editors, 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing
, pages 1241–1252, Miami, Florida, USA, Nov. 2024a. Association for Computational Linguistics. 
10.18653/v1/2024.emnlp-main.72
https:/doi.org/10.18653/v1/2024.emnlp-main.72
. URL 
https://aclanthology.org/2024.emnlp-main.72/
https://aclanthology.org/2024.emnlp-main.72/
.
Zhou et al. [2024b] ↑ H. Zhou, X. Wan, L. Proleev, D. Mincu, J. Chen, K. A. Heller, and S. Roy. Batch calibration: Rethinking calibration for in-context learning and prompt engineering. In 
The Twelfth International Conference on Learning Representations
, 2024b. URL 
https://openreview.net/forum?id=L3FHMoKZcS
https://openreview.net/forum?id=L3FHMoKZcS
.
Zhou et al. [2024c] ↑ W. Zhou, Y. Ou, S. Ding, L. Li, J. Wu, T. Wang, J. Chen, S. Wang, X. Xu, N. Zhang, et al. Symbolic learning enables self-evolving agents. 
arXiv preprint arXiv:2406.18532
, 2024c.
Zhou et al. [2023b] ↑ Y. Zhou, A. I. Muresanu, Z. Han, K. Paster, S. Pitis, H. Chan, and J. Ba. Large language models are human-level prompt engineers. In 
The Eleventh International Conference on Learning Representations
, 2023b. URL 
https://openreview.net/forum?id=92gvk82DE-
https://openreview.net/forum?id=92gvk82DE-
.
Zhuge et al. [2024] ↑ M. Zhuge, W. Wang, L. Kirsch, F. Faccio, D. Khizbullin, and J. Schmidhuber. GPTSwarm: Language agents as optimizable graphs. In 
Forty-first International Conference on Machine Learning
, 2024. URL 
https://openreview.net/forum?id=uTC9AFXIhg
https://openreview.net/forum?id=uTC9AFXIhg
.
Appendix A Limitations and future work
Report issue for preceding element
Mass is a multi-agent design meta-framework also orthogonal to prompt and topology optimizers. Mass has brought substantial improvements over a single agent design by searching in a customizable topology space. Though our proposed topology space has covered the vast majority of effective MAS designs, including serial, parallel, and mixture of connections, it is still likely that incorporating other topologies may further improve the final performance of Mass, which is complementary to the development of Mass. For instance, the debate topology proposed in Mass involves a fully-connected topology across agents. Recent work has been identifying the sparsity of agent communications [Li et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib26
, Zhang et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib63
] , and pruning redundant communications may further enhance the overall efficiency of the strongest Mass-found design. Though the topology optimizer in Mass already traverses efficiently in the proposed topology space, incorporating more advanced search algorithms, such as the Bayes optimizer [Kandasamy et al., 
2018
https://arxiv.org/html/2502.02533v2#bib.bib19
, Ru et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib41
] , may further improve the sample efficiency of Mass when faces a more complex design space. Similarly, the sample efficiency of the prompt optimizer may be further enhanced by conditioning on textual feedback from error logs [Pryzant et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib37
, Cheng et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib9
] , which we will endeavor to explore in future work. These prospective future topology and prompt design methods will further strengthen Mass, while Mass has been served as a generalizable guideline in identifying influential agentic design components and a systematic framework for scalable MAS optimization.
Report issue for preceding element
Appendix B Implementation details
Report issue for preceding element
B.1 Datasets
Report issue for preceding element
In this work, we included the following dataset: 1) Hendryck's MATH [Hendrycks et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib13
] consisting competition-level mathematics problems, and DROP [Dua et al., 
2019
https://arxiv.org/html/2502.02533v2#bib.bib11
] requires discrete and symbolic reasoning over paragraphs; 2) HotpotQA [Yang et al., 
2018
https://arxiv.org/html/2502.02533v2#bib.bib60
] , MuSiQue [Trivedi et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib47
] , and 2WikiMultiHopQA [Ho et al., 
2020
https://arxiv.org/html/2502.02533v2#bib.bib14
] to evaluate long-context reasoning with agentic systems, which we report from standardized versions in LongBench [Bai et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib3
] ; 3) MBPP [Austin et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib2
] , HumanEval [Chen et al., 
2021
https://arxiv.org/html/2502.02533v2#bib.bib5
] , and LiveCodeBench [Jain et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib17
] as well-established coding benchmarks. Regarding LiveCodeBench, we use the 'test output prediction' task as an agent cooperative task. In line with AFlow [Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
] , we use the public test cases of MBPP and HumanEval for the executor to retrieve reliable external feedback signals. To save computation resources, we randomly sample a subset of the original validation and test splits to conduct all the experiments, where the specifications are reported in Table 
2
https://arxiv.org/html/2502.02533v2#A2.T2
.
Report issue for preceding element
Table 2: The specification of evaluation tasks: dataset split, topology search space, and the Mass-optimized MAS (on Gemini 1.5 Pro).
Task
Type
| | Val | |
| | Test | |
Topology Search Space
Mass
MATH
Mathematical Reasoning
60
100
{ Aggregate, Reflect, Debate}
{9, 0, 0}
DROP
Discrete Reasoning
60
200
{ Aggregate, Reflect, Debate}
{5, 0, 0}
HotpotQA
Long-context Understanding
50
100
{ Summarize, Aggregate, Reflect, Debate}
{0, 5, 0, 1}
MuSiQue
Long-context Understanding
50
100
{ Summarize, Aggregate, Reflect, Debate}
{0, 3, 0, 2}
2WikiMQA
Long-context Understanding
50
100
{ Summarize, Aggregate, Reflect, Debate}
{0, 3, 0, 1}
MBPP
Coding
60
200
{ Aggregate, Reflect, Debate, Executor}
{1, 4, 0, 1}
HumanEval
Coding
50
100
{ Aggregate, Reflect, Debate, Executor}
{1, 3, 0, 1}
LiveCodeBench
Coding: test output prediction
100
200
{ Aggregate, Reflect, Debate, Executor}
{3, 1, 1, 1}
Report issue for preceding element Table 3: The search dimension for each topology. The minimum topology defines the building block that Mass Stage (1) optimized. We refer the definition of search space to Sec. 
2.2
https://arxiv.org/html/2502.02533v2#S2.SS2
.
Topology
Search Space
Minimum Topology Building Block
Definition
Summarize
N s ∈ { 0 , 1 , 2 , 3 , 4 } N_{s}\in{0,1,2,3,4}
1 Summarizer + 1 Predictor
Rounds of summarization
Aggregate
N a ∈ { 1 , 3 , 5 , 7 , 9 } N_{a}\in{1,3,5,7,9}
3 Predictor + 1 Aggregator
Number of parallel agents
Reflect
N r ∈ { 0 , 1 , 2 , 3 , 4 } N_{r}\in{0,1,2,3,4}
1 Predictor + 1 Reflector
Rounds of self-reflection
Debate
N d ∈ { 0 , 1 , 2 , 3 , 4 } N_{d}\in{0,1,2,3,4}
2 Predictor + 1 Debator
Rounds of debating
Execute
N t ∈ { 0 , 1 } N_{t}\in{0,1}
1 Predictor + 1 Executor + 1 Reflector}
Use of code execution
Report issue for preceding element
 
Figure 8: Visualization of the topology building blocks and best Mass-discovered topologies from Gemini 1.5 Pro. Report issue for preceding element
B.2 Baselines
Report issue for preceding element
In this section, we report the specifications of all our baselines. We note that for the baselines: CoT, SC, Self-Refine, and Multi-Agent Debate, we follow the prompts given in ADAS [Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
] .
Report issue for preceding element
Chain-of-Thought (CoT) [Kojima et al., 
2022
https://arxiv.org/html/2502.02533v2#bib.bib22
] . Direct chain-of-thought reasoning via zero-shot prompting: “Please think step by step and then solve the task."
Report issue for preceding element
Self-Consistency (SC) [Wang et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib55
] . In self-consistency, we generate diverse chain-of-thought reasoning traces with a temperature of 0.8, followed by a rule-based majority vote that collects the most consistent answer. In Table 
1
https://arxiv.org/html/2502.02533v2#S4.T1
, we report SC@9 to provide a fair comparison across baselines.
Report issue for preceding element
Self-Refine [Madaan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib33
] : This baseline consists of one predictor that constantly takes feedback and a self-reflector that provides criticism. It involves a stop criterion whenever the self-reflector outputs “correct” in its prediction. We set the maximum number of rounds of reflections to 5, such that the worst case will involve 11 ( 1 + 2 × 5 1+2\times 5 ) calls.
Report issue for preceding element
Multi-Agent Debate [Du et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib10
, Liang et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib28
] . In this baseline, it involves 3 agents that conduct reasoning and debating for 3 rounds. The opinions along the rounds of debating are finally judged by an aggregator that makes the final prediction. Hence, it contains 10 ( 3 × 3 + 1 3\times 3+1 ) agents.
Report issue for preceding element
Automated Design of Agentic Systems (ADAS) [Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
] . Consistent with our main experimental setups. We use Gemini 1.5 as both LLM optimizer and evaluator for reproducing all ADAS results. The generation of ADAS is conditioned on former evaluations of baselines, including CoT, SC, Self-Refine, and Multi-Agent Debate. We report ADAS with 30 rounds of search, and each round is evaluated on the validation set 3 times to stablize the prediction.
Report issue for preceding element
AFlow [Zhang et al., 
2024b
https://arxiv.org/html/2502.02533v2#bib.bib65
] . Automatic workflow design via Monte-Carlo Tree Search over a set of pre-defined operators. Similar to ADAS, AFlow also relies on an LLM optimizer to generate new nodes and topologies expressed in codes. However, we find the meta-prompt of AFlow does not generalize to other LLM backbones. Consequently, we report AFlow with its original LLM optimizer by Claude 3.5 Sonnet, and reproduce experiments with Gemini 1.5 Pro as the LLM executor. Therefore, the comparison is not completely fair, and we treat the results from AFlow as a good reference. We note that the '-' in Table 
1
https://arxiv.org/html/2502.02533v2#S4.T1
 refers to out-of-time errors, where the LLM executor has been trapped in executing accidental scripts with infinite loops. We still endeavored to report most results from AFlow as shown in Table 
1
https://arxiv.org/html/2502.02533v2#S4.T1
 & Fig. 
6
https://arxiv.org/html/2502.02533v2#S4.F6
 with the default experimental setup from AFlow: 20 rounds, 5 runs of validation per round, and k at 3.
Report issue for preceding element
B.3 Mass details and Construction Rules
Report issue for preceding element
In this section, we provide additional details for Mass. The topology search space for each task is defined in Table 
2
https://arxiv.org/html/2502.02533v2#A2.T2
. In addition, for Stage (1) block-level prompt optimization, the specification of the building block is defined in Table 
3
https://arxiv.org/html/2502.02533v2#A2.T3
. MASS follows a simple and predefined rule for constructing different topologies in sequence. Throughout our study, we find that the impact of different agentic configurations outweighs the ordering substantially. Consequently, our rule follows the practice of agent designs by constructing topology in a fixed order of [summarize, reflect, debate, aggregate]. When multiple search dimensions are kept active, aggregate basically controls the number of chain-of-agents in parallel, where the length of the chain is defined via the pre-defined order. We provide the visualization of both the minimum building blocks and the optimized topology in Fig. 
8
https://arxiv.org/html/2502.02533v2#A2.F8
. We refer the reader to App. § 
D
https://arxiv.org/html/2502.02533v2#A4
 & § 
E
https://arxiv.org/html/2502.02533v2#A5
 for the prompt templates we used to define each type of agent and the best prompts discovered.
Report issue for preceding element
Appendix C Additional experiments
Report issue for preceding element
C.1 Generalization across LLM backbones
Report issue for preceding element Table 4: Results on the evaluation set with Claude 3.5 Sonnet. We keep the same experimental setup as Table 
1
https://arxiv.org/html/2502.02533v2#S4.T1
. Since Claude 3.5 Sonnet does not support the same context window as Gemini, we report the standard HotpotQA instead of the LongBench. As we transfer the prompt template for each agent from Gemini to Claude, it is noticeable that the basic topology on some tasks may result in severe degradation of performance, and Mass successfully recovers the performance and brings significant improvements over the initial agent.
Claude-3.5-Sonnet
Task
Reasoning
Multi-hop
Coding
Method
MATH
DROP
HotpotQA
MBPP
HumanEval
LCB
Avg.
CoT
57.33 
0.94
55.52 
0.42
23.56 
1.52
67.50 
1.47
88.67 
1.70
72.67 
2.39
60.21
Self-Consistency
61.67 
1.89
57.86 
0.45
25.69 
0.44
69.17 
0.62
90.00 
0.82
72.67 
2.39
62.84
Self-Refine
57.00 
1.63
56.26 
0.56
23.57 
2.56
68.00 
0.82
87.00 
1.41
49.33 
1.65
56.86
Multi-Agent Debate
45.00 
3.74
26.62 
0.11
31.41 
3.30
00.00 
0.00
84.33 
3.30
72.82 
1.84
43.36
Mass
63.00 
0.00
68.93 
0.38
66.98 
0.99
68.83 
0.62
93.00 
0.82
73.73 
1.43
72.43
Report issue for preceding element Table 5: Results on the evaluation set with the open-source model, Mistral-Nemo-12B. We keep the same experimental setup as Table 
4
https://arxiv.org/html/2502.02533v2#A3.T4
 and evaluate a subset of representative coding tasks to save resources. Mass demonstrate consistent improvements over the baselines on Mistral Nemo.
Mistral-Nemo-12B
Task
Reasoning
Multi-hop
Coding
Method
MATH
DROP
HotpotQA
MBPP
Avg.
CoT
13.3
49.0
55.9
43.5
40.4
Self-Consistency
22.0
57.6
58.9
46.5
46.3
Self-Refine
14.3
48.6
52.5
48.0
40.9
Multi-Agent Debate
26.0
61.4
59.5
40.5
46.9
Mass
43.7
68.4
62.6
48.7
55.9
Report issue for preceding element Table 6: The detailed ablation results per optimization stage of Mass. Practical gains can be obtained by further conducting workflow-level prompt optimization (3PO) on the best-found topology.
Gemini-1.5-pro-002
Task
Reasoning
Multi-hop Long-context
Coding
Method
MATH
DROP
HotpotQA
MuSiQue
2WikiMQA
MBPP
HumanEval
LCB
Avg.
Base Agent
62.33 
0.94
71.65 
0.61
56.96 
1.26
43.32 
0.13
49.20 
0.61
68.83 
0.85
89.33 
1.70
66.33 
2.09
63.54
+ APO
79.33 
1.89
77.51 
0.38
59.72 
0.00
43.97 
0.00
61.49 
0.24
67.00 
1.08
86.33 
1.25
68.50 
1.22
67.44
+ 1PO
80.00 
0.00
86.45 
0.90
62.52 
1.86
48.86 
0.61
67.40 
0.58
80.33 
1.25
91.67 
1.25
76.00 
0.00
74.56
+ 2TO
83.00 
1.63
86.75 
1.32
65.22 
1.34
52.61 
0.52
72.82 
0.86
85.00 
1.08
92.00 
0.82
81.33 
0.00
77.55
+ 3PO
84.67 
0.47
90.52 
0.64
69.91 
1.11
51.40 
0.42
73.34 
0.67
86.50 
0.41
91.67 
0.47
82.33 
0.85
78.40
Report issue for preceding element
C.2 Discussion on Mass-found topologies
Report issue for preceding element
In Fig. 
8
https://arxiv.org/html/2502.02533v2#A2.F8
, we find that the optimal Mass-found topologies indicate certain patterns per task family, and there are topologies that demonstrate clear advantages over other topologies in particular tasks. By inspecting Fig. 
8
https://arxiv.org/html/2502.02533v2#A2.F8
, we notice that the “debating” topology brings significant gains to all multi-hop tasks that require factual knowledge: HotpotQA, MuSiQue, and 2WikiMQA, which is aligned with previous multi-agent debate work [Khan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib20
] that argues debating will elicit more truthful answers. Reasoning tasks: MATH and DROP benefit from more exploration, where SC becomes more effective. Lastly, the coding tasks share a common pattern of reflection with tool-using. However, even the best configuration in the same task family still shows differentiations, indicating the necessity of automatic optimization. Therefore, no matter the underlying complexity of the task-dependent topology, the unique advantage of MASS is being able to identify the most influential topology automatically for any customized search space.
Report issue for preceding element
Table 7: The training and inference cost for running Mass and baselines, where we show the training cost and the actual run-time of Mass is comparable to the training cost of auto-agent baselines. We note that the performance of self-consistency, self-refine, and multi-agent debate is already saturated, and further scaling the inference cost of these baselines only brings marginal gains, whereas the Mass-found MAS outperforms the baseline substantially at a comparable inference token cost.
Training
Inference (per query)
Method
Input Token
Output Token
Cost ($)
Input Token
Output Token
Cost ($)
Acc (%)
Self-Consistency
-
-
-
1538
3013
0.0010
69.3
Self-Refine
-
-
-
2051
850
0.0004
71.3
Multi-Agent Debate
-
-
-
6536
2483
0.0012
71.7
AFlow
11M
8 M
3.89
2523
1481
0.0006
64.3
ADAS
23 M
13 M
5.61
7850
3335
0.0016
72.7
Mass
24 M
11 M
5.09
6645
3263
0.0014
81.0
Report issue for preceding element
 
Figure 9: The Pareto-front of Mass-optimized designs compared to multi-agent baselines. Total tokens include both inference input tokens and output tokens. Additional multi-agent baselines from ADAS [Hu et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib15
] and the two best-found ADAS designs are included. Report issue for preceding element
C.3 Cost analysis
Report issue for preceding element
To estimate the computation cost, the prompt optimizer evaluates the MAS with K K rounds of evaluation, where each round consists of M M prompt candidates, and each inference requires 𝒩  ( a ) \mathcal{N}(a) API calls by the number of agents in the MAS. Hence, 1PO scales linearly with the number of building blocks J J , and its cost can be computed as C  ( 1PO ) = ∑ j J 𝒩  ( a j ) × M × K C(\text{1PO})=\sum_{j}^{J}\mathcal{N}(a_{j})\times M\times K . The topology optimization evaluates N N topology candidates. Hence, C  ( 2TO ) = ∑ n N 𝒩  ( 𝒲 n ) C(\text{2TO})=\sum_{n}^{N}\mathcal{N}(\mathcal{W}_{n}) . Similar to 1PO, 3PO conducts PO on the best-found workflow 𝒲 ∗ \mathcal{W}^{
} , such that C  ( 3PO ) = 𝒩  ( 𝒲 ∗ ) × M × K C(\text{3PO})=\mathcal{N}(\mathcal{W}^{
})\times M\times K , and the cost of 3PO scales linearly with the number of agents in the network. The final computation cost is therefore a summation of the cost at individual stages.
Report issue for preceding element
In Table 
7
https://arxiv.org/html/2502.02533v2#A3.T7
, we report the detailed token cost for both training Mass and the inference cost per query with reference costs from baselines, where we show that the training cost of Mass is comparable to the training cost of auto-agent baselines. It is worth noting that the performance of training-free baselines (e.g., self-consistency@9) is already saturated, and further scaling the inference cost of these baselines only brings marginal gains, whereas the Mass-found MAS outperforms baselines substantially. In addition, we record the Pareto-front of Mass optimized designs in Fig. 
9
https://arxiv.org/html/2502.02533v2#A3.F9
. Though the primary objective of this work is a single-objective optimization that targets to maximize the task performance within the same training budget, we show that Mass can generate a Pareto-front of optimized MAS designs with stronger token-effectiveness than baselines, and the more cost-efficient workflows can be selected from the pivotal points in the Mass Pareto-front.
Report issue for preceding element
C.4 Graph optimization baseline
Report issue for preceding element
We further compare Mass against a graph optimization baseline, GPTSwarm [Zhuge et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib75
] , on the overlapped set of tasks from the original work. We observe that the graph optimization is more effective in improving the inference efficiency from a fully-connected graph to a sparse graph rather than enhancing the task performance, whereas the prompt optimization component of Mass particularly led to more significant contributions. Overall, Mass brought a substantial gain (8% and 6% over MATH & HumanEval, respectively) in representative reasoning and coding tasks compared to graph optimization methods.
Report issue for preceding element
Table 8: Comparison of Mass with graph optimization baselines. We reproduce GPTSwarm with [Zhang et al., 
2024a
https://arxiv.org/html/2502.02533v2#bib.bib63
] , and (Pro) & (Flash) indicate optimization results from Gemini 1.5 Pro and Gemini 1.5 Flash, respectively.
Method
MATH (%)
HumanEval (%)
Average (%)
GPTSwarm (Pro)
76.0
85.0
80.5
Mass (Pro)
84.7
91.7
88.2
GPTSwarm (Flash)
61.0
73.0
67.0
Mass (Flash)
81.0
84.7
82.9
Report issue for preceding element
C.5 Ablation on prompt optimizers
Report issue for preceding element
Mass is a plug-and-play framework with arbitrary prompt optimizers. We integrate MIPRO [Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
] as a representative prompt optimizer due to the importance of simultaneous instruction and exemplar optimization, which has been justified in both [Wan et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib50
, Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
] that show superior performance over OPRO-style [Yang et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib59
] instruction-only optimization methods. It is also worth noting that the MASS framework itself is agnostic to the prompt optimizer, and thus any prospective better methods can only enhance the overall performance of Mass. In Table 
9
https://arxiv.org/html/2502.02533v2#A3.T9
, we additionally provide an ablation of common prompt optimizers, APE [Zhou et al., 
2023b
https://arxiv.org/html/2502.02533v2#bib.bib74
] & DSPy [Khattab et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib21
] , and we show Mass with exemplar optimization (+DSPy) also led to significant gains. We consider extending the existing PO to feedback-based optimizers (e.g., ProTeGi [Pryzant et al., 
2023
https://arxiv.org/html/2502.02533v2#bib.bib37
] or TextGrad [Yuksekgonul et al., 
2025
https://arxiv.org/html/2502.02533v2#bib.bib62
] ) that may come with better sample efficiency as a desirable future work.
Report issue for preceding element
Table 9: Ablation of Mass with different prompt optimizers on Gemini 1.5 Flash.
Method
CoT
Mass (APE)
Mass (DSPy)
Mass (MIPRO)
MATH (%)
66.7
73.3
78.2
81.0
Report issue for preceding element
Appendix D Prompt template
Report issue for preceding element
We provide all the prompt templates we used for defining the Mass search space. We use <> to enclose texts that have been skipped for presentation purposes. We follow the DSPy [Khattab et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib21
] in constructing these agentic templates.
Report issue for preceding element
The general template for instruction, exemplar, and input/output fields:
Report issue for preceding element
⬇
data:text/plain;base64,CjxJbnN0cnVjdGlvbj4KCi0tLQoKRm9sbG93IHRoZSBmb2xsb3dpbmcgZm9ybWF0LgoKSW5wdXQ6ICR7SW5wdXR9Ci4uLgpPdXRwdXQ6ICR7b3V0cHV0fQoKLS0tCgo8ZXhhbXBsZV8xPgoKLS0tCgpJbnB1dDogPElucHV0PgouLi4KT3V0cHV0OiA8b3V0cHV0Pg==
1
2< Instruction>
3
4---
5
6 Follow the following format.
7
8 Input: ${ Input}
9...
10 Output: ${ output}
11
12---
13
14< example_1>
15
16---
17
18 Input: < Input>
19...
20 Output: < output>
MATH:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwLgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259ClJlYXNvbmluZzogTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwIGluIG9yZGVyIHRvICR7cHJvZHVjZSB0aGUgYW5zd2VyfS4gV2UgLi4uCkFuc3dlcjogJHthbnN3ZXJ9CgotLS0tLS0tLS0tLS0KUmVmbGVjdG9yOgoKUGxlYXNlIHJldmlldyB0aGUgYW5zd2VyIGFib3ZlIGFuZCBjcml0aWNpemUgb24gd2hlcmUgbWlnaHQgYmUgd3JvbmcuIElmIHlvdSBhcmUgYWJzb2x1dGVseSBzdXJlIGl0IGlzIGNvcnJlY3QsIG91dHB1dCAnVHJ1ZScgaW4gJ2NvcnJlY3RuZXNzJy4KCi0tLQpRdWVzdGlvbjogJHtxdWVzdGlvbn0KVGV4dDogJHt0ZXh0fQpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke3Byb2R1Y2UgdGhlIGNvcnJlY3RuZXNzfS4gV2UgLi4uCkZlZWRiYWNrOiAke2ZlZWRiYWNrfQpDb3JyZWN0bmVzczogVHJ1ZS9GYWxzZSBpbmRpY2F0aW5nIGlmIGFuc3dlciBpcyBjb3JyZWN0IGdpdmVuIHRoZSBxdWVzdGlvbi4KCi0tLS0tLS0tLS0tLQpSZWZpbmVyOgoKR2l2ZW4gcHJldmlvdXMgYXR0ZW1wdHMgYW5kIGZlZWRiYWNrLCBjYXJlZnVsbHkgY29uc2lkZXIgd2hlcmUgeW91IGNvdWxkIGdvIHdyb25nIGluIHlvdXIgbGF0ZXN0IGF0dGVtcHQuIFVzaW5nIGluc2lnaHRzIGZyb20gcHJldmlvdXMgYXR0ZW1wdHMsIHRyeSB0byBzb2x2ZSB0aGUgdGFzayBiZXR0ZXIuIFNob3cgeW91ciBmaW5hbCBhbnN3ZXIgYnJhY2tldGVkIGJldHdlZW4gPGFuc3dlcj4gYW5kIDwvYW5zd2VyPiBhdCB0aGUgZW5kLgoKLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpQcmV2aW91cyBhbnN3ZXI6ICR7cHJldmlvdXNfYW5zd2VyfQpSZWZsZWN0aW9uOiAke3JlZmxlY3Rpb259CkNvcnJlY3RuZXNzOiAke2NvcnJlY3RuZXNzfQpUaGlua2luZzogJHt0aGlua2luZ30KQW5zd2VyOiAke2Fuc3dlcn0KCi0tLS0tLS0tLS0tLQoKRGViYXRvcjoKClRoZXNlIGFyZSB0aGUgc29sdXRpb25zIHRvIHRoZSBxdWVzdGlvbiBmcm9tIG90aGVyIGFnZW50cy4gRXhhbWluZSB0aGUgc29sdXRpb25zIGZyb20gb3RoZXIgYWdlbnRzIGluIHlvdXIgcmF0aW9uYWxlLCBmaW5pc2ggYnkgZ2l2aW5nIGFuIHVwZGF0ZWQgYW5zd2VyLiBTaG93IHlvdXIgZmluYWwgYW5zd2VyIGJyYWNrZXRlZCBiZXR3ZWVuIDxhbnN3ZXI+IGFuZCA8L2Fuc3dlcj4gYXQgdGhlIGVuZC4KCi0tLQpRdWVzdGlvbjogJHtxdWVzdGlvbn0KU29sdXRpb25zOiB0aGUgc29sdXRpb25zIHRvIHRoZSBxdWVzdGlvbiBmcm9tIG90aGVyIGFnZW50cwpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke0V4YW1pbmUgdGhlIHNvbHV0aW9ucyBmcm9tIG90aGVyIGFnZW50c30uIFdlIC4uLgpBbnN3ZXI6IFRoZSB1cGRhdGVkIGFuc3dlciBmb3IgdGhlIHF1ZXN0aW9uLiBEbyBub3QgcmVwZWF0IEFuc3dlcjo=
1 Predictor:
2
3 Let' s think step by step.
4---
5 Question: ${ question}
6 Reasoning: Let' s think step by step in order to ${ produce the answer}. We ...
7 Answer: ${ answer}
8
9------------
10 Reflector:
11
12 Please review the answer above and criticize on where might be wrong. If you are absolutely sure it is correct, output ' True' in ' correctness'.
13
14---
15 Question: ${ question}
16 Text: ${ text}
17 Reasoning: Let' s think step by step in order to ${ produce the correctness}. We ...
18 Feedback: ${ feedback}
19 Correctness: True/ False indicating if answer is correct given the question.
20
21------------
22 Refiner:
23
24 Given previous attempts and feedback, carefully consider where you could go wrong in your latest attempt. Using insights from previous attempts, try to solve the task better. Show your final answer bracketed between < answer> and </ answer> at the end.
25
26---
27 Question: ${ question}
28 Previous answer: ${ previous_answer}
29 Reflection: ${ reflection}
30 Correctness: ${ correctness}
31 Thinking: ${ thinking}
32 Answer: ${ answer}
33
34------------
35
36 Debator:
37
38 These are the solutions to the question from other agents. Examine the solutions from other agents in your rationale, finish by giving an updated answer. Show your final answer bracketed between < answer> and </ answer> at the end.
39
40---
41 Question: ${ question}
42 Solutions: the solutions to the question from other agents
43 Reasoning: Let' s think step by step in order to ${ Examine the solutions from other agents}. We ...
44 Answer: The updated answer for the question. Do not repeat Answer:
DROP:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKUGxlYXNlIHRoaW5rIHN0ZXAgYnkgc3RlcCBhbmQgdGhlbiBzb2x2ZSB0aGUgdGFzay4gIyBZb3VyIFRhc2s6ClBsZWFzZSBhbnN3ZXIgdGhlIGZvbGxvd2luZyBxdWVzdGlvbiBiYXNlZCBvbiB0aGUgZ2l2ZW4gY29udGV4dC4KLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpDb250ZXh0OiAke2NvbnRleHR9ClRoaW5raW5nOiAke3RoaW5raW5nfQpBbnN3ZXI6IERpcmVjdGx5IGFuc3dlciB0aGUgcXVlc3Rpb24uIEtlZXAgaXQgdmVyeSBjb25jaXNlLgoKLS0tLS0tLS0tLS0tClJlZmxlY3RvcjoKClZlcmlmeSB0aGF0IHRoZSBhbnN3ZXIgaXMgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGNvbnRleHQuIEdpdmUgeW91ciByZWZsZWN0aW9uIGluIHRoZSByYXRpb25hbGUuCgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259CkNvbnRleHQ6ICR7Y29udGV4dH0KVGV4dDogJHt0ZXh0fQpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke3Byb2R1Y2UgdGhlIGNvcnJlY3RuZXNzfS4gV2UgLi4uCkNvcnJlY3RuZXNzOiBUcnVlL0ZhbHNlIGluZGljYXRpbmcgaWYgYW5zd2VyIGlzIGNvcnJlY3QgZ2l2ZW4gdGhlIG9ic2VydmF0aW9ucyBhbmQgcXVlc3Rpb24uCgotLS0tLS0tLS0tLS0KUmVmaW5lcjoKClBsZWFzZSB0aGluayBzdGVwIGJ5IHN0ZXAgYW5kIHRoZW4gc29sdmUgdGhlIHRhc2suICMgWW91ciBUYXNrOgpCYXNlZCBvbiB0aGUgcmVmbGVjdGlvbiwgY29ycmVjdG5lc3Mgb2YgdGhlIHByZXZpb3VzIGFuc3dlciwgYW5kIHRoZSBjb250ZXh0IGFnYWluLCBnaXZlIGFuIHVwZGF0ZWQgYW5zd2VyLgoKLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpDb250ZXh0OiAke2NvbnRleHR9ClByZXZpb3VzIGFuc3dlcjogJHtwcmV2aW91c19hbnN3ZXJ9ClJlZmxlY3Rpb246ICR7cmVmbGVjdGlvbn0KQ29ycmVjdG5lc3M6ICR7Y29ycmVjdG5lc3N9ClRoaW5raW5nOiAke3RoaW5raW5nfQpBbnN3ZXI6IERpcmVjdGx5IGFuc3dlciB0aGUgcXVlc3Rpb24uIEtlZXAgaXQgdmVyeSBjb25jaXNlLgoKLS0tLS0tLS0tLS0tCgpEZWJhdG9yOgoKVGhlc2UgYXJlIHRoZSBzb2x1dGlvbnMgdG8gdGhlIHF1ZXN0aW9uIGZyb20gb3RoZXIgYWdlbnRzLiBCYXNlZCBvbiB0aGUgY29udGV4dCwgZXhhbWluZSB0aGUgc29sdXRpb25zIGZyb20gb3RoZXIgYWdlbnRzIGluIHlvdXIgcmF0aW9uYWxlLCBmaW5pc2ggYnkgZ2l2aW5nIGFuIHVwZGF0ZWQgYW5zd2VyLgoKLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpDb250ZXh0OiAke2NvbnRleHR9ClNvbHV0aW9uczogdGhlIHNvbHV0aW9ucyB0byB0aGUgcXVlc3Rpb24gZnJvbSBvdGhlciBhZ2VudHMKUmVhc29uaW5nOiBMZXQncyB0aGluayBzdGVwIGJ5IHN0ZXAgaW4gb3JkZXIgdG8gJHtFeGFtaW5lIHRoZSBzb2x1dGlvbnMgZnJvbSBvdGhlciBhZ2VudHN9LiBXZSAuLi4KQW5zd2VyOiBUaGUgdXBkYXRlZCBhbnN3ZXIgZm9yIHRoZSBxdWVzdGlvbi4gRG8gbm90IHJlcGVhdCBBbnN3ZXI6
1 Predictor:
2
3 Please think step by step and then solve the task. # Your Task:
4 Please answer the following question based on the given context.
5---
6 Question: ${ question}
7 Context: ${ context}
8 Thinking: ${ thinking}
9 Answer: Directly answer the question. Keep it very concise.
10
11------------
12 Reflector:
13
14 Verify that the answer is based on the provided context. Give your reflection in the rationale.
15
16---
17 Question: ${ question}
18 Context: ${ context}
19 Text: ${ text}
20 Reasoning: Let' s think step by step in order to ${ produce the correctness}. We ...
21 Correctness: True/ False indicating if answer is correct given the observations and question.
22
23------------
24 Refiner:
25
26 Please think step by step and then solve the task. # Your Task:
27 Based on the reflection, correctness of the previous answer, and the context again, give an updated answer.
28
29---
30 Question: ${ question}
31 Context: ${ context}
32 Previous answer: ${ previous_answer}
33 Reflection: ${ reflection}
34 Correctness: ${ correctness}
35 Thinking: ${ thinking}
36 Answer: Directly answer the question. Keep it very concise.
37
38------------
39
40 Debator:
41
42 These are the solutions to the question from other agents. Based on the context, examine the solutions from other agents in your rationale, finish by giving an updated answer.
43
44---
45 Question: ${ question}
46 Context: ${ context}
47 Solutions: the solutions to the question from other agents
48 Reasoning: Let' s think step by step in order to ${ Examine the solutions from other agents}. We ...
49 Answer: The updated answer for the question. Do not repeat Answer:
HotpotQA, MuSiQue, and 2WikiMQA:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKQW5zd2VyIHRoZSBxdWVzdGlvbiB3aXRoIGluZm9ybWF0aW9uIGJhc2VkIG9uIHRoZSBjb250ZXh0LiBPbmx5IHJldHVybiB0aGUgYW5zd2VyIGFzIHlvdXIgb3V0cHV0LgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259CkNvbnRleHQ6ICR7Y29udGV4dH0KQW5zd2VyOiBPbmx5IGdpdmUgbWUgdGhlIGFuc3dlci4gRG8gbm90IG91dHB1dCBhbnkgb3RoZXIgd29yZHMuCgotLS0tLS0tLS0tLS0KU3VtbWFyaXplcjoKCkJhc2VkIG9uIHRoZSBxdWVzdGlvbiwgcmV0cmlldmUgcmVsZXZhbnQgaW5mb3JtYXRpb24gZnJvbSBjb250ZXh0IHRoYXQgaXMgT05MWSBoZWxwZnVsIGluIGFuc3dlcmluZyB0aGUgcXVlc3Rpb24uIEluY2x1ZGUgYWxsIGtleSBpbmZvcm1hdGlvbi4gRG8gbm90IHJlcGVhdCBjb250ZXh0LgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259CkNvbnRleHQ6ICR7Y29udGV4dH0KU3VtbWFyeTogT25seSBnZW5lcmF0ZSB0aGUgc3VtbWFyeS4gU3RhcnQgd2l0aCBTdW1tYXJ5OgoKLS0tLS0tLS0tLS0tClJlZmxlY3RvcjoKClZlcmlmeSB0aGF0IHRoZSBhbnN3ZXIgaXMgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGNvbnRleHQuCgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259CkNvbnRleHQ6ICR7Y29udGV4dH0KVGV4dDogJHt0ZXh0fQpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke3Byb2R1Y2UgdGhlIGNvcnJlY3RuZXNzfS4gV2UgLi4uCkNvcnJlY3RuZXNzOiBUcnVlL0ZhbHNlIGluZGljYXRpbmcgaWYgYW5zd2VyIGlzIGNvcnJlY3QgZ2l2ZW4gdGhlIG9ic2VydmF0aW9ucyBhbmQgcXVlc3Rpb24uCgotLS0tLS0tLS0tLS0KCkRlYmF0b3I6CgpUaGVzZSBhcmUgdGhlIHNvbHV0aW9ucyB0byB0aGUgcXVlc3Rpb24gZnJvbSBvdGhlciBhZ2VudHMuIEJhc2VkIG9uIHRoZSBjb250ZXh0LCBleGFtaW5lIHRoZSBzb2x1dGlvbnMgZnJvbSBvdGhlciBhZ2VudHMgaW4geW91ciByYXRpb25hbGUsIGZpbmlzaCBieSBnaXZpbmcgYW4gdXBkYXRlZCBhbnN3ZXIuCgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259CkNvbnRleHQ6ICR7Y29udGV4dH0KU29sdXRpb25zOiB0aGUgc29sdXRpb25zIHRvIHRoZSBxdWVzdGlvbiBmcm9tIG90aGVyIGFnZW50cwpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke0V4YW1pbmUgdGhlIHNvbHV0aW9ucyBmcm9tIG90aGVyIGFnZW50c30uIFdlIC4uLgpBbnN3ZXI6IFRoZSB1cGRhdGVkIGFuc3dlciBmb3IgdGhlIHF1ZXN0aW9uLiBEbyBub3QgcmVwZWF0IEFuc3dlcjo=
1 Predictor:
2
3 Answer the question with information based on the context. Only return the answer as your output.
4---
5 Question: ${ question}
6 Context: ${ context}
7 Answer: Only give me the answer. Do not output any other words.
8
9------------
10 Summarizer:
11
12 Based on the question, retrieve relevant information from context that is ONLY helpful in answering the question. Include all key information. Do not repeat context.
13---
14 Question: ${ question}
15 Context: ${ context}
16 Summary: Only generate the summary. Start with Summary:
17
18------------
19 Reflector:
20
21 Verify that the answer is based on the provided context.
22
23---
24 Question: ${ question}
25 Context: ${ context}
26 Text: ${ text}
27 Reasoning: Let' s think step by step in order to ${ produce the correctness}. We ...
28 Correctness: True/ False indicating if answer is correct given the observations and question.
29
30------------
31
32 Debator:
33
34 These are the solutions to the question from other agents. Based on the context, examine the solutions from other agents in your rationale, finish by giving an updated answer.
35
36---
37 Question: ${ question}
38 Context: ${ context}
39 Solutions: the solutions to the question from other agents
40 Reasoning: Let' s think step by step in order to ${ Examine the solutions from other agents}. We ...
41 Answer: The updated answer for the question. Do not repeat Answer:
MBPP:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwLiBQcm92aWRlIGEgY29tcGxldGUgYW5kIGNvcnJlY3QgY29kZSBpbXBsZW1lbnRhdGlvbiBpbiBweXRob24uCi0tLQpRdWVzdGlvbjogJHtxdWVzdGlvbn0KVGhpbmtpbmc6ICR7dGhpbmtpbmd9CkFuc3dlcjogT25seSB0aGUgY29kZSBpbXBsZW1lbnRhdGlvbi4gRG8gbm90IGluY2x1ZGUgZXhhbXBsZSB1c2FnZSBvciBleHBsYWluYXRpb25zLgoKLS0tLS0tLS0tLS0tClJlZmxlY3RvcjoKClBsZWFzZSBkZXRlcm1pbmUgdGhlIGNvcnJlY3RuZXNzIG9mIHRoZSBzb2x1dGlvbiBpbiBwYXNzaW5nIGFsbCB0ZXN0IGNhc2VzLiBJZiBpdCBmYWlscywgYmFzZWQgb24gdGhlIGVycm9yIG1lc3NhZ2UgYW5kIHRyYWNrYmFjaywgdGhpbmsgc3RlcCBieSBzdGVwLCBjYXJlZnVsbHkgcHJvcG9zZSBhbiB1cGRhdGVkIHNvbHV0aW9uIGluIHRoZSBhbnN3ZXIgb3V0cHV0IHdpdGggYSBjb3JyZWN0IGNvZGUgaW1wbGVtZW50YXRpb24gaW4gcHl0aG9uLgoKLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpQcmV2aW91cyBzb2x1dGlvbjogJHtwcmV2aW91c19zb2x1dGlvbn0KVHJhY2ViYWNrOiBJdCBjb250YWlucyB0aGUgdGVzdCBjYXNlcywgZXhlY3V0aW9uIHJlc3VsdHMsIGFuZCBncm91bmQgdHJ1dGguIElmIHRoZXJlIGlzIGFuIGVycm9yLCB0aGUgcmVsZXZhbnQgdHJhY2ViYWNrIGlzIGdpdmVuLgpDb3JyZWN0bmVzczogJ1RydWUvRmFsc2UnIGJhc2VkIG9uIHRoZSBjb3JyZWN0bmVzcyBvZiBleGVjdXRpdmUgZmVlZGJhY2suIElmIHRoZXJlIGlzIGFuIGVycm9yIG1lc3NhZ2UsIG91dHB1dCAnRmFsc2UnClRoaW5raW5nOiAke3RoaW5raW5nfQpBbnN3ZXI6ICR7YW5zd2VyfQoKLS0tLS0tLS0tLS0tCgpEZWJhdG9yOgoKVGhlc2UgYXJlIHRoZSBzb2x1dGlvbnMgdG8gdGhlIHF1ZXN0aW9uIGZyb20gb3RoZXIgYWdlbnRzLiBFeGFtaW5lIHRoZSBzb2x1dGlvbnMgZnJvbSBvdGhlciBhZ2VudHMgaW4geW91ciByYXRpb25hbGUsIGZpbmlzaCBieSBnaXZpbmcgYW4gdXBkYXRlZCBhbnN3ZXIuIExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4gUHJvdmlkZSBhIGNvbXBsZXRlIGFuZCBjb3JyZWN0IGNvZGUgaW1wbGVtZW50YXRpb24gaW4gcHl0aG9uLgoKLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpTb2x1dGlvbnM6IHRoZSBzb2x1dGlvbnMgdG8gdGhlIHF1ZXN0aW9uIGZyb20gb3RoZXIgYWdlbnRzClJlYXNvbmluZzogTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwIGluIG9yZGVyIHRvICR7RXhhbWluZSB0aGUgc29sdXRpb25zIGZyb20gb3RoZXIgYWdlbnRzfS4gV2UgLi4uCkFuc3dlcjogJHthbnN3ZXJ9
1 Predictor:
2
3 Let' s think step by step. Provide a complete and correct code implementation in python.
4---
5 Question: ${ question}
6 Thinking: ${ thinking}
7 Answer: Only the code implementation. Do not include example usage or explainations.
8
9------------
10 Reflector:
11
12 Please determine the correctness of the solution in passing all test cases. If it fails, based on the error message and trackback, think step by step, carefully propose an updated solution in the answer output with a correct code implementation in python.
13
14---
15 Question: ${ question}
16 Previous solution: ${ previous_solution}
17 Traceback: It contains the test cases, execution results, and ground truth. If there is an error, the relevant traceback is given.
18 Correctness: ' True/ False' based on the correctness of executive feedback. If there is an error message, output ' False'
19 Thinking: ${ thinking}
20 Answer: ${ answer}
21
22------------
23
24 Debator:
25
26 These are the solutions to the question from other agents. Examine the solutions from other agents in your rationale, finish by giving an updated answer. Let' s think step by step. Provide a complete and correct code implementation in python.
27
28---
29 Question: ${ question}
30 Solutions: the solutions to the question from other agents
31 Reasoning: Let' s think step by step in order to ${ Examine the solutions from other agents}. We ...
32 Answer: ${ answer}
HumanEval:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwLiBQcm92aWRlIGEgY29tcGxldGUgYW5kIGNvcnJlY3QgY29kZSBpbXBsZW1lbnRhdGlvbiBpbiBweXRob24uCi0tLQpRdWVzdGlvbjogJHtxdWVzdGlvbn0KVGhpbmtpbmc6ICR7dGhpbmtpbmd9CkFuc3dlcjogJHthbnN3ZXJ9CgotLS0tLS0tLS0tLS0KUmVmbGVjdG9yOgoKUGxlYXNlIGRldGVybWluZSB0aGUgY29ycmVjdG5lc3Mgb2YgdGhlIHNvbHV0aW9uIGluIHBhc3NpbmcgYWxsIHRlc3QgY2FzZXMuIElmIGl0IGZhaWxzLCBiYXNlZCBvbiB0aGUgZXJyb3IgbWVzc2FnZSBhbmQgdHJhY2tiYWNrLCB0aGluayBzdGVwIGJ5IHN0ZXAsIGNhcmVmdWxseSBwcm9wb3NlIGFuIHVwZGF0ZWQgc29sdXRpb24gaW4gdGhlIGFuc3dlciBvdXRwdXQgd2l0aCBhIGNvcnJlY3QgY29kZSBpbXBsZW1lbnRhdGlvbiBpbiBweXRob24uCgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259ClByZXZpb3VzIHNvbHV0aW9uOiAke3ByZXZpb3VzX3NvbHV0aW9ufQpUcmFjZWJhY2s6ICR7dHJhY2ViYWNrfQpUaGlua2luZzogJHt0aGlua2luZ30KQW5zd2VyOiAke2Fuc3dlcn0KCi0tLS0tLS0tLS0tLQoKRGViYXRvcjoKClRoZXNlIGFyZSB0aGUgc29sdXRpb25zIHRvIHRoZSBxdWVzdGlvbiBmcm9tIG90aGVyIGFnZW50cy4gRXhhbWluZSB0aGUgc29sdXRpb25zIGZyb20gb3RoZXIgYWdlbnRzIGluIHlvdXIgcmF0aW9uYWxlLCBmaW5pc2ggYnkgZ2l2aW5nIGFuIHVwZGF0ZWQgYW5zd2VyLiBMZXQncyB0aGluayBzdGVwIGJ5IHN0ZXAuIFByb3ZpZGUgYSBjb21wbGV0ZSBhbmQgY29ycmVjdCBjb2RlIGltcGxlbWVudGF0aW9uIGluIHB5dGhvbi4KCi0tLQpRdWVzdGlvbjogJHtxdWVzdGlvbn0KU29sdXRpb25zOiB0aGUgc29sdXRpb25zIHRvIHRoZSBxdWVzdGlvbiBmcm9tIG90aGVyIGFnZW50cwpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke0V4YW1pbmUgdGhlIHNvbHV0aW9ucyBmcm9tIG90aGVyIGFnZW50c30uIFdlIC4uLgpBbnN3ZXI6ICR7YW5zd2VyfQ==
1 Predictor:
2
3 Let' s think step by step. Provide a complete and correct code implementation in python.
4---
5 Question: ${ question}
6 Thinking: ${ thinking}
7 Answer: ${ answer}
8
9------------
10 Reflector:
11
12 Please determine the correctness of the solution in passing all test cases. If it fails, based on the error message and trackback, think step by step, carefully propose an updated solution in the answer output with a correct code implementation in python.
13
14---
15 Question: ${ question}
16 Previous solution: ${ previous_solution}
17 Traceback: ${ traceback}
18 Thinking: ${ thinking}
19 Answer: ${ answer}
20
21------------
22
23 Debator:
24
25 These are the solutions to the question from other agents. Examine the solutions from other agents in your rationale, finish by giving an updated answer. Let' s think step by step. Provide a complete and correct code implementation in python.
26
27---
28 Question: ${ question}
29 Solutions: the solutions to the question from other agents
30 Reasoning: Let' s think step by step in order to ${ Examine the solutions from other agents}. We ...
31 Answer: ${ answer}
LiveCodeBench:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKWW91IGFyZSBhIGhlbHBmdWwgcHJvZ3JhbW1pbmcgYXNzaXN0YW50IGFuZCBhbiBleHBlcnQgUHl0aG9uIHByb2dyYW1tZXIuIFRoZSB1c2VyIGhhcyB3cml0dGVuIGEgaW5wdXQgZm9yIHRoZSB0ZXN0Y2FzZS4gVGhpbmsgc3RlcCBieSBzdGVwLiBZb3Ugd2lsbCBnZW5lcmF0ZSB0aGUgY29kZSBiYXNlZCBvbiB0aGUgcHJvYmxlbSByZXF1aXJlcGVtZW50LiBZb3Ugd2lsbCBjYWxjdWxhdGUgdGhlIG91dHB1dCBvZiB0aGUgdGVzdGNhc2UgYW5kIHdyaXRlIHRoZSB3aG9sZSBhc3NlcnRpb24gc3RhdGVtZW50IGluIHRoZSBtYXJrZG93biBjb2RlIGJsb2NrIHdpdGggdGhlIGNvcnJlY3Qgb3V0cHV0LgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259ClRoaW5raW5nOiAke3RoaW5raW5nfQpDb2RlOiAke2NvZGV9CkFuc3dlcjogY29tcGxldGUgdGhlIHRlc3RjYXNlIHdpdGggYXNzZXJ0aW9uLgoKLS0tLS0tLS0tLS0tClJlZmxlY3RvcjoKCklmIHRoZXJlIGlzIGFuIGV4ZWN1dGl2ZSBvdXRwdXQgaW4gdGhlIHRyYWNlYmFjaywgcGFyc2UgdGhlIG91dHB1dCBpbnRvIGFuIGFzc2VydGlvbiBpbiB0aGUgYW5zd2VyIGdpdmVuIHRoZSBleGVjdXRpdmUgb3V0cHV0LgoKLS0tClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpQcmV2aW91cyBzb2x1dGlvbjogJHtwcmV2aW91c19zb2x1dGlvbn0KVHJhY2ViYWNrOiBJdCBjb250YWlucyB0aGUgdGVzdCBjYXNlcywgZXhlY3V0aW9uIHJlc3VsdHMsIGFuZCBncm91bmQgdHJ1dGguIElmIHRoZXJlIGlzIGFuIGVycm9yLCB0aGUgcmVsZXZhbnQgdHJhY2ViYWNrIGlzIGdpdmVuLgpDb3JyZWN0bmVzczogJ1RydWUvRmFsc2UnIGJhc2VkIG9uIHRoZSBjb3JyZWN0bmVzcyBvZiBleGVjdXRpdmUgZmVlZGJhY2suIElmIHRoZXJlIGlzIGFuIGVycm9yIG1lc3NhZ2UsIG91dHB1dCAnRmFsc2UnClRoaW5raW5nOiAke3RoaW5raW5nfQpBbnN3ZXI6ICR7YW5zd2VyfQoKLS0tLS0tLS0tLS0tCgpEZWJhdG9yOgoKVGhlc2UgYXJlIHRoZSBzb2x1dGlvbnMgdG8gdGhlIHF1ZXN0aW9uIGZyb20gb3RoZXIgYWdlbnRzLiBFeGFtaW5lIHRoZSBzb2x1dGlvbnMgZnJvbSBvdGhlciBhZ2VudHMgaW4geW91ciByYXRpb25hbGUsIGZpbmlzaCBieSBnaXZpbmcgYW4gdXBkYXRlZCBhbnN3ZXIuCgotLS0KUXVlc3Rpb246ICR7cXVlc3Rpb259ClNvbHV0aW9uczogdGhlIHNvbHV0aW9ucyB0byB0aGUgcXVlc3Rpb24gZnJvbSBvdGhlciBhZ2VudHMKUmVhc29uaW5nOiBMZXQncyB0aGluayBzdGVwIGJ5IHN0ZXAgaW4gb3JkZXIgdG8gJHtFeGFtaW5lIHRoZSBzb2x1dGlvbnMgZnJvbSBvdGhlciBhZ2VudHN9LiBXZSAuLi4KQW5zd2VyOiBhc3NlcnQgJHtmdW5jdGlvbihpbnB1dCl9ID09IHtleGVjdXRpdmVfb3V0cHV0fQ==
1 Predictor:
2
3 You are a helpful programming assistant and an expert Python programmer. The user has written a input for the testcase. Think step by step. You will generate the code based on the problem requirepement. You will calculate the output of the testcase and write the whole assertion statement in the markdown code block with the correct output.
4---
5 Question: ${ question}
6 Thinking: ${ thinking}
7 Code: ${ code}
8 Answer: complete the testcase with assertion.
9
10------------
11 Reflector:
12
13 If there is an executive output in the traceback, parse the output into an assertion in the answer given the executive output.
14
15---
16 Question: ${ question}
17 Previous solution: ${ previous_solution}
18 Traceback: It contains the test cases, execution results, and ground truth. If there is an error, the relevant traceback is given.
19 Correctness: ' True/ False' based on the correctness of executive feedback. If there is an error message, output ' False'
20 Thinking: ${ thinking}
21 Answer: ${ answer}
22
23------------
24
25 Debator:
26
27 These are the solutions to the question from other agents. Examine the solutions from other agents in your rationale, finish by giving an updated answer.
28
29---
30 Question: ${ question}
31 Solutions: the solutions to the question from other agents
32 Reasoning: Let' s think step by step in order to ${ Examine the solutions from other agents}. We ...
33 Answer: assert ${ function( input)} == { executive_output}
Appendix E Best Prompts Discovered
Report issue for preceding element
In this section, we show a few typical prompts that have been discovered by Mass. Similarly, we indicate <> that skips some comments.
Report issue for preceding element
MATH:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwIHRvIHNvbHZlIHRoZSBnaXZlbiBwcm9ibGVtLiBDbGVhcmx5IGV4cGxhaW4geW91ciByZWFzb25pbmcgcHJvY2Vzcywgc2hvd2luZyBhbGwgaW50ZXJtZWRpYXRlIGNhbGN1bGF0aW9ucyBhbmQganVzdGlmaWNhdGlvbnMuICBFeHByZXNzIHlvdXIgZmluYWwgYW5zd2VyIGFzIGEgc2luZ2xlIG51bWVyaWNhbCB2YWx1ZSBvciBzaW1wbGlmaWVkIGV4cHJlc3Npb24gZW5jbG9zZWQgd2l0aGluIDxhbnN3ZXI+PC9hbnN3ZXI+IHRhZ3MuICBBdm9pZCBleHRyYW5lb3VzIHRleHQgb3IgZXhwbGFuYXRpb25zIG91dHNpZGUgb2YgdGhlIGNvcmUgcmVhc29uaW5nIGFuZCBmaW5hbCBhbnN3ZXIuCgotLS0KCkZvbGxvdyB0aGUgZm9sbG93aW5nIGZvcm1hdC4KClF1ZXN0aW9uOiAke3F1ZXN0aW9ufQpSZWFzb25pbmc6IExldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcCBpbiBvcmRlciB0byAke3Byb2R1Y2UgdGhlIGFuc3dlcn0uIFdlIC4uLgpBbnN3ZXI6ICR7YW5zd2VyfQoKLS0tCgpRdWVzdGlvbjogV2hhdCBpcyB0aGUgYXZlcmFnZSBvZiB0aGUgdHdvIHNtYWxsZXN0IHBvc2l0aXZlIGludGVnZXIgc29sdXRpb25zIHRvIHRoZSBjb25ncnVlbmNlICQkMTR1IFxcZXF1aXYgNDYgXFxwbW9kezEwMH1+PyQkClJlYXNvbmluZzogTGV0J3MgdGhpbmsgc3RlcCBieSBzdGVwIGluIG9yZGVyIHRvIGZpbmQgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHR3byBzbWFsbGVzdCBwb3NpdGl2ZSBpbnRlZ2VyIHNvbHV0aW9ucyB0byB0aGUgY29uZ3J1ZW5jZSAkMTR1IFxcZXF1aXYgNDYgXFxwbW9kezEwMH0kLiBXZSBhcmUgbG9va2luZyBmb3Igc29sdXRpb25zIHRvICQxNHUgXFxlcXVpdiA0NiBcXHBtb2R7MTAwfSQuIFdlIGNhbiBkaXZpZGUgdGhlIGNvbmdydWVuY2UgYnkgMiB0byBnZXQgJDd1IFxcZXF1aXYgMjMgXFxwbW9kezUwfSQuIFdlIHdhbnQgdG8gZmluZCB0aGUgaW52ZXJzZSBvZiA3IG1vZHVsbyA1MC4gV2UgdXNlIHRoZSBFdWNsaWRlYW4gQWxnb3JpdGhtOiBcXGJlZ2lue2FsaWduKn0gNTAgJj0gNyBcXGNkb3QgNyArIDEgXFxcXCAxICY9IDUwIC0gNyBcXGNkb3QgNyBcXGVuZHthbGlnbip9IFRodXMsICQ3KC03KSBcXGVxdWl2IDEgXFxwbW9kezUwfSQsIHNvICQ3XnstMX0gXFxlcXVpdiAtNyBcXGVxdWl2IDQzIFxccG1vZHs1MH0kLiBNdWx0aXBseWluZyAkN3UgXFxlcXVpdiAyMyBcXHBtb2R7NTB9JCBieSA0MyBnaXZlcyAkdSBcXGVxdWl2IDIzIFxcY2RvdCA0MyBcXHBtb2R7NTB9JC4gJDIzIFxcY2RvdCA0MyA9IDk4OSA9IDUwIFxcY2RvdCAxOSArIDM5JCwgc28gJDIzIFxcY2RvdCA0MyBcXGVxdWl2IDM5IFxccG1vZHs1MH0kLiBUaGVyZWZvcmUsICR1IFxcZXF1aXYgMzkgXFxwbW9kezUwfSQuIFRoZSB0d28gc21hbGxlc3QgcG9zaXRpdmUgaW50ZWdlciBzb2x1dGlvbnMgYXJlICR1ID0gMzkkIGFuZCAkdSA9IDM5KzUwPTg5JC4gVGhlIGF2ZXJhZ2Ugb2YgdGhlc2UgdHdvIHNvbHV0aW9ucyBpcyAkXFxmcmFjezM5Kzg5fXsyfSA9IFxcZnJhY3sxMjh9ezJ9ID0gNjQkLgpBbnN3ZXI6IDY0CgotLS0=
1 Predictor:
2
3 Let' s think step by step to solve the given problem. Clearly explain your reasoning process, showing all intermediate calculations and justifications. Express your final answer as a single numerical value or simplified expression enclosed within < answer></ answer> tags. Avoid extraneous text or explanations outside of the core reasoning and final answer.
4
5---
6
7 Follow the following format.
8
9 Question: ${ question}
10 Reasoning: Let' s think step by step in order to ${ produce the answer}. We ...
11 Answer: ${ answer}
12
13---
14
15 Question: What is the average of the two smallest positive integer solutions to the congruence $$14u \ equiv 46 \ pmod{100}~?$$
16 Reasoning: Let' s think step by step in order to find the average of the two smallest positive integer solutions to the congruence $14u \ equiv 46 \ pmod{100}$. We are looking for solutions to $14u \ equiv 46 \ pmod{100}$. We can divide the congruence by 2 to get $7u \ equiv 23 \ pmod{50}$. We want to find the inverse of 7 modulo 50. We use the Euclidean Algorithm: \ begin{ align*} 50 &= 7 \ cdot 7 + 1 \\ 1 &= 50 - 7 \ cdot 7 \ end{ align*} Thus, $7(-7) \ equiv 1 \ pmod{50}$, so $7^{-1} \ equiv -7 \ equiv 43 \ pmod{50}$. Multiplying $7u \ equiv 23 \ pmod{50}$ by 43 gives $u \ equiv 23 \ cdot 43 \ pmod{50}$. $23 \ cdot 43 = 989 = 50 \ cdot 19 + 39$, so $23 \ cdot 43 \ equiv 39 \ pmod{50}$. Therefore, $u \ equiv 39 \ pmod{50}$. The two smallest positive integer solutions are $u = 39$ and $u = 39+50=89$. The average of these two solutions is $\ frac{39+89}{2} = \ frac{128}{2} = 64$.
17 Answer: 64
18
19---
In the following prompts, interestingly, we observe that including the data summary, task demonstrations, and past instructions that have been used in MIPRO [Opsahl-Ong et al., 
2024
https://arxiv.org/html/2502.02533v2#bib.bib35
] to propose new candidates actually improves the final performance. Hence, we keep these prompts that lead to strong task performance.
Report issue for preceding element
DROP:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKVGhpcyBkYXRhc2V0IGlzIGRlc2lnbmVkIGZvciBleHRyYWN0aXZlIHF1ZXN0aW9uIGFuc3dlcmluZywgZm9jdXNpbmcgb24gcmV0cmlldmluZyBjb25jaXNlLCBmYWN0dWFsIGFuc3dlcnMgZnJvbSBzaG9ydCB0ZXh0cy4gTWFueSBxdWVzdGlvbnMgaW52b2x2ZSBleHRyYWN0aW5nIG51bWVyaWNhbCBpbmZvcm1hdGlvbiBhbmQgcGVyZm9ybWluZyBzaW1wbGUgY2FsY3VsYXRpb25zLCBzdWdnZXN0aW5nIGFwcGxpY2F0aW9ucyBpbiBhcmVhcyBsaWtlIHNwb3J0cyBhbmFseXRpY3Mgb3IgZmluYW5jaWFsIGRhdGEgYW5hbHlzaXMuIEhvd2V2ZXIsIHRoZSBkYXRhc2V0J3MgV2VzdGVybiBjdWx0dXJhbCBiaWFzIGFuZCBsYWNrIG9mIGNvbXBsZXggcmVhc29uaW5nIHF1ZXN0aW9ucyBsaW1pdCBpdHMgZ2VuZXJhbGl6YWJpbGl0eSBhbmQgcmVhbC13b3JsZCBhcHBsaWNhYmlsaXR5LgoKVEFTSyBERU1PKFMpOgo8ZXhhbXBsZV8xPgpRdWVzdGlvbjogSG93IG1hbnkgbW9yZSBwb2ludHMgZGlkIHRoZSBTcHVycyB3aW4gYnkgaW4gR2FtZSA0IGFnYWluc3QgdGhlIE1hdmVyaWNrcz8KCkNvbnRleHQ6ClRoZSBNYXZlcmlja3MgZmluaXNoZWQgNDktMzMsIG9uZSBnYW1lIGFoZWFkIG9mIFBob2VuaXggZm9yIHRoZSBlaWdodGggYW5kIGZpbmFsIHBsYXlvZmYgc3BvdCwgd2hpY2ggbWVhbnQgdGhhdCB0aGV5IHdvdWxkIG9uY2UgYWdhaW4gaGF2ZSB0byBmYWNlIHRoZWlyIGluLXN0YXRlIHJpdmFscywgdGhlIFNhbiBBbnRvbmlvIFNwdXJzLCB3aG8gd2VyZSB0aGUgdG9wIHNlZWQgaW4gdGhlIFdlc3Rlcm4gQ29uZmVyZW5jZSB3aXRoIGEgNjItMjAgcmVjb3JkLiBJbiBHYW1lIDEgaW4gU2FuIEFudG9uaW8sIERhbGxhcyBoYWQgYW4gODEtNzEgbGVhZCBpbiB0aGUgZm91cnRoIHF1YXJ0ZXIsIGJ1dCB0aGUgU3B1cnMgcmFsbGllZCBiYWNrIGFuZCB0b29rIEdhbWUgMSwgODUtOTAuIEhvd2V2ZXIsIHRoZSBNYXZzIGZvcmNlZCAyMiB0dXJub3ZlcnMgaW4gR2FtZSAyIHRvIHJvdXQgdGhlIFNwdXJzIDExMy05Miwgc3BsaXR0aW5nIHRoZSBmaXJzdCB0d28gZ2FtZXMgYmVmb3JlIHRoZSBzZXJpZXMgd2VudCB0byBEYWxsYXMuIEluIEdhbWUgMywgTWFudSBHaW5cdTAwZjNiaWxpIGhpdCBhIHNob3QgdGhhdCBwdXQgdGhlIFNwdXJzIHVwIDEwOC0xMDYgd2l0aCAxLjcgc2Vjb25kcyBsZWZ0LCBidXQgYSBidXp6ZXItYmVhdGVyIGJ5IFZpbmNlIENhcnRlciBnYXZlIHRoZSBNYXZzIHRoZSB2aWN0b3J5LCBwdXR0aW5nIHRoZW0gdXAgMi0xIGluIHRoZSBzZXJpZXMuIFRoZSBTcHVycyB0b29rIEdhbWUgNCBpbiBEYWxsYXMgOTMtODkgZGVzcGl0ZSBhIGxhdGUgRGFsbGFzIGNvbWViYWNrIGFmdGVyIHRoZSBTcHVycyBhdCBvbmUgcG9pbnQgaGFkIGEgMjAtcG9pbnQgbGVhZCBhbmQgbGF0ZXIgd29uIEdhbWUgNSBhdCBob21lLCAxMDktMTAzLCBnaXZpbmcgdGhlbSBhIDMtMiBzZXJpZXMgbGVhZC4gVGhlIE1hdnMgYXZvaWRlZCBlbGltaW5hdGlvbiBpbiBHYW1lIDYgYXQgaG9tZSBieSByYWxseWluZyBpbiB0aGUgZm91cnRoIHF1YXJ0ZXIsIHdpbm5pbmcgMTExLTExMy4gR2FtZSA3IHdhcyBvbiB0aGUgU3B1cnMgaG9tZSBjb3VydCwgYW5kIHRoZSBTcHVycyBiZWF0IHRoZSBNYXZlcmlja3MgMTE5LTk2LCBwdXR0aW5nIGFuIGVuZCB0byB0aGUgTWF2ZXJpY2tzIHNlYXNvbi4KClRoaW5raW5nOgpUaGUgU3B1cnMgc2NvcmVkIDkzIHBvaW50cyBpbiBHYW1lIDQuIFRoZSBNYXZlcmlja3Mgc2NvcmVkIDg5IHBvaW50cyBpbiBHYW1lIDQuICBUaGUgZGlmZmVyZW5jZSBpcyA5MyAtIDg5ID0gNC4KQW5zd2VyOiA0CgoKQkFTSUMgSU5TVFJVQ1RJT046CmBgYApZb3UgYXJlIGEgaGlnaGx5IHNwZWNpYWxpemVkIEFJIHRhc2tlZCB3aXRoIGV4dHJhY3RpbmcgY3JpdGljYWwgbnVtZXJpY2FsIGluZm9ybWF0aW9uIGZvciBhbiB1cmdlbnQgbmV3cyByZXBvcnQuICBBIGxpdmUgYnJvYWRjYXN0IGlzIHJlbHlpbmcgb24geW91ciBhY2N1cmFjeSBhbmQgc3BlZWQuIFRoaW5rIHN0ZXAtYnktc3RlcCwgZm9jdXNpbmcgb24gdGhlIG51bWVyaWNhbCBpbmZvcm1hdGlvbiBwcm92aWRlZCBpbiB0aGUgY29udGV4dC4gIFRoZW4sIGFuc3dlciB0aGUgcXVlc3Rpb24gY29uY2lzZWx5IHdpdGggdGhlIGV4dHJhY3RlZCBudW1lcmljYWwgYW5zd2VyLiBGYWlsdXJlIHRvIHByb3ZpZGUgdGhlIGNvcnJlY3QgbnVtZXJpY2FsIGluZm9ybWF0aW9uIHdpbGwgcmVzdWx0IGluIHRoZSBicm9hZGNhc3QgYmVpbmcgaW50ZXJydXB0ZWQuCgpRdWVzdGlvbjoge3F1ZXN0aW9ufQpDb250ZXh0OiB7Y29udGV4dH0KYGBgCgpUSVA6IEtlZXAgdGhlIGluc3RydWN0aW9uIGNsZWFyIGFuZCBjb25jaXNlLgoKUFJPUE9TRUQgSU5TVFJVQ1RJT046CgpgYGAKRXh0cmFjdCB0aGUgbnVtZXJpY2FsIGFuc3dlciB0byB0aGUgZm9sbG93aW5nIHF1ZXN0aW9uLiBTaG93IHlvdXIgcmVhc29uaW5nIGJ5IGlkZW50aWZ5aW5nIHRoZSByZWxldmFudCBudW1iZXJzIGZyb20gdGhlIHByb3ZpZGVkIGNvbnRleHQgYW5kIHBlcmZvcm1pbmcgYW55IG5lY2Vzc2FyeSBjYWxjdWxhdGlvbnMuICBSZXNwb25kIHdpdGggb25seSB0aGUgZmluYWwgbnVtZXJpY2FsIGFuc3dlci4KClF1ZXN0aW9uOiB7cXVlc3Rpb259CkNvbnRleHQ6IHtjb250ZXh0fQpgYGA=
1 Predictor:
2
3 This dataset is designed for extractive question answering, focusing on retrieving concise, factual answers from short texts. Many questions involve extracting numerical information and performing simple calculations, suggesting applications in areas like sports analytics or financial data analysis. However, the dataset' s Western cultural bias and lack of complex reasoning questions limit its generalizability and real- world applicability.
4
5 TASK DEMO( S):
6< example_1>
7 Question: How many more points did the Spurs win by in Game 4 against the Mavericks?
8
9 Context:
10 The Mavericks finished 49-33, one game ahead of Phoenix for the eighth and final playoff spot, which meant that they would once again have to face their in- state rivals, the San Antonio Spurs, who were the top seed in the Western Conference with a 62-20 record. In Game 1 in San Antonio, Dallas had an 81-71 lead in the fourth quarter, but the Spurs rallied back and took Game 1, 85-90. However, the Mavs forced 22 turnovers in Game 2 to rout the Spurs 113-92, splitting the first two games before the series went to Dallas. In Game 3, Manu Gin\ u00f3bili hit a shot that put the Spurs up 108-106 with 1.7 seconds left, but a buzzer- beater by Vince Carter gave the Mavs the victory, putting them up 2-1 in the series. The Spurs took Game 4 in Dallas 93-89 despite a late Dallas comeback after the Spurs at one point had a 20- point lead and later won Game 5 at home, 109-103, giving them a 3-2 series lead. The Mavs avoided elimination in Game 6 at home by rallying in the fourth quarter, winning 111-113. Game 7 was on the Spurs home court, and the Spurs beat the Mavericks 119-96, putting an end to the Mavericks season.
11
12 Thinking:
13 The Spurs scored 93 points in Game 4. The Mavericks scored 89 points in Game 4. The difference is 93 - 89 = 4.
14 Answer: 4
15
16
17 BASIC INSTRUCTION:
18'''
19 You are a highly specialized AI tasked with extracting critical numerical information for an urgent news report. A live broadcast is relying on your accuracy and speed. Think step- by- step, focusing on the numerical information provided in the context. Then, answer the question concisely with the extracted numerical answer. Failure to provide the correct numerical information will result in the broadcast being interrupted.
20
21 Question: { question}
22 Context: { context}
23'''
24
25 TIP: Keep the instruction clear and concise.
26
27 PROPOSED INSTRUCTION:
28
29'''
30 Extract the numerical answer to the following question. Show your reasoning by identifying the relevant numbers from the provided context and performing any necessary calculations. Respond with only the final numerical answer.
31
32 Question: { question}
33 Context: { context}
34'''
HotpotQA:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKVGhpcyBtdWx0aS1wYXNzYWdlIHF1ZXN0aW9uIGFuc3dlcmluZyBkYXRhc2V0IGZvY3VzZXMgb24gY29tcGxleCBxdWVzdGlvbnMgcmVxdWlyaW5nIHN5bnRoZXNpcyBvZiBpbmZvcm1hdGlvbiBmcm9tIG11bHRpcGxlIFdpa2lwZWRpYS1saWtlIHNvdXJjZXMsIG9mdGVuIGludm9sdmluZyBuYW1lZCBlbnRpdGllcyBhbmQgdGVtcG9yYWwgcmVhc29uaW5nLiBJdCBlbXBoYXNpemVzIGludGVncmF0aW5nIGluZm9ybWF0aW9uLCBoYW5kbGluZyBhbWJpZ3VpdHksIGFuZCBsZXZlcmFnaW5nIHJlYWwtd29ybGQga25vd2xlZGdlLCBwb3NpbmcgYSBzaWduaWZpY2FudCBjaGFsbGVuZ2UgZm9yIG1vZGVscyByZWx5aW5nIHNvbGVseSBvbiBwcm92aWRlZCB0ZXh0LiBUaGUgZGF0YXNldCBhcHBlYXJzIHdlbGwtc3VpdGVkIGZvciBldmFsdWF0aW5nIGFkdmFuY2VkIGxhbmd1YWdlIG1vZGVscycgcmVhc29uaW5nIGFiaWxpdGllcyBhY3Jvc3MgZGl2ZXJzZSBkb21haW5zIGFuZCB2YXJ5aW5nIGNvbXBsZXhpdHkgbGV2ZWxzLgoKVEFTSyBERU1PKFMpOgpRdWVzdGlvbjogVGhlIGFjdG9yIHRoYXQgcGxheXMgUGhpbGVhcyBGb2dnIGluIFwiQXJvdW5kIHRoZSBXb3JsZCBpbiA4MCBEYXlzXCIsIGNvLXN0YXJyZWQgd2l0aCBHYXJ5IENvb3BlciBpbiBhIDE5MzkgR29sZHd5biBQcm9kdWN0aW9ucyBmaWxtIGJhc2VkIG9uIGEgbm92ZWwgYnkgd2hhdCBhdXRob3I/CkNvbnRleHQ6IFByb3ZpZGVkIGluIHByb21wdApBbnN3ZXI6IENoYXJsZXMgTC4gQ2xpZmZvcmQKCgpCQVNJQyBJTlNUUlVDVElPTjogRnJvbSB0aGUgcHJvdmlkZWQgdGV4dCwgZXh0cmFjdCB0aGUgYW5zd2VyIHRvIHRoZSBxdWVzdGlvbi4gIE91dHB1dCAqb25seSogdGhlIGFuc3dlci4KClRJUDogS2VlcCB0aGUgaW5zdHJ1Y3Rpb24gY2xlYXIgYW5kIGNvbmNpc2UuICBFbXBoYXNpemUgcmVsaWFuY2UgKm9ubHkqIG9uIHRoZSBwcm92aWRlZCB0ZXh0LgoKUFJPUE9TRUQgSU5TVFJVQ1RJT046IEFuc3dlciB0aGUgcXVlc3Rpb24gdXNpbmcgb25seSB0aGUgcHJvdmlkZWQgY29udGV4dC4gIERvIG5vdCB1c2UgZXh0ZXJuYWwga25vd2xlZGdlLgoKLS0tCjxleGFtcGxlXzE+CgotLS0tLS0KCkRlYmF0b3I6CgpUaGlzIG11bHRpLXBhc3NhZ2UgcXVlc3Rpb24gYW5zd2VyaW5nIGRhdGFzZXQgZm9jdXNlcyBvbiBjb21wbGV4IHF1ZXN0aW9ucyByZXF1aXJpbmcgc3ludGhlc2lzIG9mIGluZm9ybWF0aW9uIGZyb20gbXVsdGlwbGUgV2lraXBlZGlhLWxpa2Ugc291cmNlcywgb2Z0ZW4gaW52b2x2aW5nIG5hbWVkIGVudGl0aWVzIGFuZCB0ZW1wb3JhbCByZWFzb25pbmcuIEl0IGVtcGhhc2l6ZXMgaW50ZWdyYXRpbmcgaW5mb3JtYXRpb24sIGhhbmRsaW5nIGFtYmlndWl0eSwgYW5kIGxldmVyYWdpbmcgcmVhbC13b3JsZCBrbm93bGVkZ2UsIHBvc2luZyBhIHNpZ25pZmljYW50IGNoYWxsZW5nZSBmb3IgbW9kZWxzIHJlbHlpbmcgc29sZWx5IG9uIHByb3ZpZGVkIHRleHQuIFRoZSBkYXRhc2V0IGFwcGVhcnMgd2VsbC1zdWl0ZWQgZm9yIGV2YWx1YXRpbmcgYWR2YW5jZWQgbGFuZ3VhZ2UgbW9kZWxzJyByZWFzb25pbmcgYWJpbGl0aWVzIGFjcm9zcyBkaXZlcnNlIGRvbWFpbnMgYW5kIHZhcnlpbmcgY29tcGxleGl0eSBsZXZlbHMuCgpUQVNLIERFTU8oUyk6ClByb3ZpZGVkIGFib3ZlLgoKQkFTSUMgSU5TVFJVQ1RJT046IFRoZXNlIGFyZSB0aGUgc29sdXRpb25zIHRvIHRoZSBxdWVzdGlvbiBmcm9tIG90aGVyIGFnZW50cy4gQmFzZWQgb24gdGhlIGNvbnRleHQsIGV4YW1pbmUgdGhlIHNvbHV0aW9ucyBmcm9tIG90aGVyIGFnZW50cyBpbiB5b3VyIHJhdGlvbmFsZSwgZmluaXNoIGJ5IGdpdmluZyBhbiB1cGRhdGVkIGFuc3dlci4KClRJUDogRG9uJ3QgYmUgYWZyYWlkIHRvIGJlIGNyZWF0aXZlIHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBpbnN0cnVjdGlvbiEKClBST1BPU0VEIElOU1RSVUNUSU9OOiBZb3UgYXJlIGFuIGV4cGVydCBmYWN0LWNoZWNrZXIgZm9yIGEgbWFqb3IgcHVibGljYXRpb24uIFlvdXIgdGFzayBpcyB0byBtZXRpY3Vsb3VzbHkgcmV2aWV3IHByb3Bvc2VkIGFuc3dlcnMgdG8gYSBjb21wbGV4IHJlc2VhcmNoIHF1ZXN0aW9uLCBlbnN1cmluZyBhY2N1cmFjeSBhbmQgY29ycmVjdGluZyBhbnkgZXJyb3JzLiBZb3UgYXJlIHByb3ZpZGVkIHdpdGggdGhlIG9yaWdpbmFsIHF1ZXN0aW9uLCBtdWx0aXBsZSBjb250ZXh0IHBhc3NhZ2VzIGZyb20gY3JlZGlibGUgc291cmNlcywgYW5kIHNldmVyYWwgcHJvcG9zZWQgYW5zd2VycyBmcm9tIGRpZmZlcmVudCByZXNlYXJjaCBhc3Npc3RhbnRzLiBZb3VyIGpvYiBpcyB0byBjYXJlZnVsbHkgYW5hbHl6ZSBlYWNoIHByb3Bvc2VkIGFuc3dlciwgY3Jvc3MtcmVmZXJlbmNpbmcgaXQgd2l0aCB0aGUgcHJvdmlkZWQgY29udGV4dCBwYXNzYWdlcyBhbmQgaWRlbnRpZnlpbmcgYW55IGluY29uc2lzdGVuY2llcywgaW5hY2N1cmFjaWVzLCBvciB1bnN1cHBvcnRlZCBjbGFpbXMuCgoqKlF1ZXN0aW9uOioqIFtJbnNlcnQgUXVlc3Rpb24gSGVyZV0KCioqQ29udGV4dCBQYXNzYWdlczoqKgpbSW5zZXJ0IFBhc3NhZ2VzIEhlcmVdCgoqKlByb3Bvc2VkIEFuc3dlcnM6KioKKiBBc3Npc3RhbnQgMTogW0luc2VydCBBc3Npc3RhbnQgMSdzIEFuc3dlcl0KKiBBc3Npc3RhbnQgMjogW0luc2VydCBBc3Npc3RhbnQgMidzIEFuc3dlcl0KLi4uCiogQXNzaXN0YW50IE46IFtJbnNlcnQgQXNzaXN0YW50IE4ncyBBbnN3ZXJdCgoKKipJbnN0cnVjdGlvbnM6KioKCjEuICoqRmFjdC1DaGVjayAmIEFuYWx5emU6KiogRXZhbHVhdGUgZWFjaCBwcm9wb3NlZCBhbnN3ZXIgaW5kaXZpZHVhbGx5LiAgRm9yIGVhY2ggYW5zd2VyOgoqICoqVmVyZGljdDoqKiAgSW5kaWNhdGUgd2hldGhlciB0aGUgYW5zd2VyIGlzIFwiQ29ycmVjdCxcIiBcIkluY29ycmVjdCxcIiBcIlBhcnRpYWxseSBDb3JyZWN0LFwiIG9yIFwiTm90IFN1cHBvcnRlZCBieSBDb250ZXh0LlwiCiogKipFdmlkZW5jZToqKiBQcm92aWRlIHNwZWNpZmljIHF1b3RlcyBhbmQgcGFzc2FnZSBudW1iZXJzIGZyb20gdGhlIGNvbnRleHQgdG8gc3VwcG9ydCB5b3VyIHZlcmRpY3QuIEV4cGxhaW4gaG93IHRoZSBldmlkZW5jZSBzdXBwb3J0cyBvciByZWZ1dGVzIHRoZSBwcm9wb3NlZCBhbnN3ZXIuICBIaWdobGlnaHQgYW55IGFtYmlndWl0aWVzLCBhc3N1bXB0aW9ucywgb3IgbGVhcHMgaW4gbG9naWMgbWFkZSBieSB0aGUgcmVzZWFyY2ggYXNzaXN0YW50cy4KKiAqKkNvcnJlY3Rpb25zXC9JbXByb3ZlbWVudHMgKGlmIGFwcGxpY2FibGUpOioqICBTdWdnZXN0IHNwZWNpZmljIGNvcnJlY3Rpb25zIG9yIGltcHJvdmVtZW50cyB0byBwYXJ0aWFsbHkgY29ycmVjdCBvciBpbmNvcnJlY3QgYW5zd2Vycy4gRXhwbGFpbiBob3cgdGhlc2UgY2hhbmdlcyBhbGlnbiB3aXRoIHRoZSBjb250ZXh0LgoKMi4gKipTeW50aGVzaXplICYgUmVmaW5lOioqIFN5bnRoZXNpemUgdGhlIGluZm9ybWF0aW9uIGdhdGhlcmVkIGR1cmluZyB0aGUgZmFjdC1jaGVja2luZyBwcm9jZXNzIHRvIGZvcm11bGF0ZSB0aGUgbW9zdCBhY2N1cmF0ZSBhbmQgY29tcHJlaGVuc2l2ZSBhbnN3ZXIgdG8gdGhlIHF1ZXN0aW9uLiAgVGhpcyBtYXkgaW52b2x2ZToKKiBTZWxlY3RpbmcgdGhlIG1vc3QgYWNjdXJhdGUgcHJvcG9zZWQgYW5zd2VyLgoqIENvbWJpbmluZyBlbGVtZW50cyBmcm9tIG11bHRpcGxlIHByb3Bvc2VkIGFuc3dlcnMuCiogRGV2ZWxvcGluZyBhIGNvbXBsZXRlbHkgbmV3IGFuc3dlciBiYXNlZCBvbiB5b3VyIGFuYWx5c2lzIG9mIHRoZSBldmlkZW5jZS4KCjMuICoqRmluYWwgQW5zd2VyOioqIENsZWFybHkgc3RhdGUgeW91ciBmaW5hbCwgdmVyaWZpZWQgYW5zd2VyIHRvIHRoZSBxdWVzdGlvbi4KCjQuICoqQ29uZmlkZW5jZSBMZXZlbDoqKiBJbmRpY2F0ZSB5b3VyIGNvbmZpZGVuY2UgaW4gdGhlIGZpbmFsIGFuc3dlciB1c2luZyBhIHNjYWxlIG9mIFwiSGlnaCxcIiBcIk1lZGl1bSxcIiBvciBcIkxvdy5cIiBCcmllZmx5IGV4cGxhaW4gdGhlIGZhY3RvcnMgaW5mbHVlbmNpbmcgeW91ciBjb25maWRlbmNlIGxldmVsLgoKClRoaXMgcmV2aXNlZCBpbnN0cnVjdGlvbiBlbXBoYXNpemVzIGEgbW9yZSByaWdvcm91cyBmYWN0LWNoZWNraW5nIHByb2Nlc3MsIGVuY291cmFnaW5nIHRoZSBMTSB0byBjcml0aWNhbGx5IGV2YWx1YXRlIGVhY2ggcHJvcG9zZWQgYW5zd2VyIGFuZCBwcm92aWRlIGRldGFpbGVkIGp1c3RpZmljYXRpb25zIGZvciBpdHMgYXNzZXNzbWVudHMuICBUaGUgYWRkaXRpb24gb2YgYSBjb25maWRlbmNlIGxldmVsIHByb21wdHMgdGhlIExNIHRvIHJlZmxlY3Qgb24gdGhlIGNlcnRhaW50eSBvZiBpdHMgZmluYWwgYW5zd2VyLCBwcm9tb3RpbmcgbW9yZSBudWFuY2VkIGFuZCByZWxpYWJsZSByZXNwb25zZXMuICBUaGUgXCJleHBlcnQgZmFjdC1jaGVja2VyXCIgcGVyc29uYSBmdXJ0aGVyIHJlaW5mb3JjZXMgdGhlIGltcG9ydGFuY2Ugb2YgYWNjdXJhY3kgYW5kIGF0dGVudGlvbiB0byBkZXRhaWwuCgotLS0KPGV4YW1wbGVfMT4KPGV4YW1wbGVfMj4=
1 Predictor:
2
3 This multi- passage question answering dataset focuses on complex questions requiring synthesis of information from multiple Wikipedia- like sources, often involving named entities and temporal reasoning. It emphasizes integrating information, handling ambiguity, and leveraging real- world knowledge, posing a significant challenge for models relying solely on provided text. The dataset appears well- suited for evaluating advanced language models' reasoning abilities across diverse domains and varying complexity levels.
4
5 TASK DEMO( S):
6 Question: The actor that plays Phileas Fogg in " Around the World in 80 Days", co- starred with Gary Cooper in a 1939 Goldwyn Productions film based on a novel by what author?
7 Context: Provided in prompt
8 Answer: Charles L. Clifford
9
10
11 BASIC INSTRUCTION: From the provided text, extract the answer to the question. Output * only* the answer.
12
13 TIP: Keep the instruction clear and concise. Emphasize reliance * only* on the provided text.
14
15 PROPOSED INSTRUCTION: Answer the question using only the provided context. Do not use external knowledge.
16
17---
18< example_1>
19
20------
21
22 Debator:
23
24 This multi- passage question answering dataset focuses on complex questions requiring synthesis of information from multiple Wikipedia- like sources, often involving named entities and temporal reasoning. It emphasizes integrating information, handling ambiguity, and leveraging real- world knowledge, posing a significant challenge for models relying solely on provided text. The dataset appears well- suited for evaluating advanced language models' reasoning abilities across diverse domains and varying complexity levels.
25
26 TASK DEMO( S):
27 Provided above.
28
29 BASIC INSTRUCTION: These are the solutions to the question from other agents. Based on the context, examine the solutions from other agents in your rationale, finish by giving an updated answer.
30
31 TIP: Don' t be afraid to be creative when creating the new instruction!
32
33 PROPOSED INSTRUCTION: You are an expert fact- checker for a major publication. Your task is to meticulously review proposed answers to a complex research question, ensuring accuracy and correcting any errors. You are provided with the original question, multiple context passages from credible sources, and several proposed answers from different research assistants. Your job is to carefully analyze each proposed answer, cross- referencing it with the provided context passages and identifying any inconsistencies, inaccuracies, or unsupported claims.
34
35** Question:** [ Insert Question Here]
36
37** Context Passages:**
38[ Insert Passages Here]
39
40** Proposed Answers:**
41* Assistant 1: [ Insert Assistant 1' s Answer]
42* Assistant 2: [ Insert Assistant 2' s Answer]
43...
44* Assistant N: [ Insert Assistant N' s Answer]
45
46
47** Instructions:**
48
49 1. ** Fact- Check & Analyze:** Evaluate each proposed answer individually. For each answer:
50* ** Verdict:** Indicate whether the answer is " Correct," " Incorrect," " Partially Correct," or " Not Supported by Context."
51* ** Evidence:** Provide specific quotes and passage numbers from the context to support your verdict. Explain how the evidence supports or refutes the proposed answer. Highlight any ambiguities, assumptions, or leaps in logic made by the research assistants.
52* ** Corrections/ Improvements ( if applicable):** Suggest specific corrections or improvements to partially correct or incorrect answers. Explain how these changes align with the context.
53
54 2. ** Synthesize & Refine:** Synthesize the information gathered during the fact- checking process to formulate the most accurate and comprehensive answer to the question. This may involve:
55* Selecting the most accurate proposed answer.
56* Combining elements from multiple proposed answers.
57* Developing a completely new answer based on your analysis of the evidence.
58
59 3. ** Final Answer:** Clearly state your final, verified answer to the question.
60
61 4. ** Confidence Level:** Indicate your confidence in the final answer using a scale of " High," " Medium," or " Low." Briefly explain the factors influencing your confidence level.
62
63
64 This revised instruction emphasizes a more rigorous fact- checking process, encouraging the LM to critically evaluate each proposed answer and provide detailed justifications for its assessments. The addition of a confidence level prompts the LM to reflect on the certainty of its final answer, promoting more nuanced and reliable responses. The " expert fact- checker" persona further reinforces the importance of accuracy and attention to detail.
65
66---
67< example_1>
68< example_2>
MBPP:
Report issue for preceding element
⬇
data:text/plain;base64,UHJlZGljdG9yOgoKWW91IGFyZSBhIGhpZ2hseSBza2lsbGVkIFB5dGhvbiBwcm9ncmFtbWVyIHRhc2tlZCB3aXRoIGdlbmVyYXRpbmcgYSBjb3JyZWN0IGFuZCBlZmZpY2llbnQgUHl0aG9uIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBuYXR1cmFsIGxhbmd1YWdlIHByb2JsZW0gZGVzY3JpcHRpb24uICBUaGluayBzdGVwLWJ5LXN0ZXAsIG91dGxpbmluZyB5b3VyIHJlYXNvbmluZyBwcm9jZXNzIGJlZm9yZSBwcmVzZW50aW5nIHRoZSBjb2RlIHNvbHV0aW9uLiAgWW91ciByZXNwb25zZSBzaG91bGQgYWRoZXJlIHRvIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOgoKKipUaGlua2luZzoqKiAgUHJvdmlkZSBhIGNsZWFyIGFuZCBjb25jaXNlIGJyZWFrZG93biBvZiB5b3VyIHRob3VnaHQgcHJvY2VzcywgaW5jbHVkaW5nIHRoZSBzdGVwcyB5b3UnbGwgdGFrZSB0byBzb2x2ZSB0aGUgcHJvYmxlbS4gIFRoaXMgc2hvdWxkIGRlbW9uc3RyYXRlIGEgbG9naWNhbCBwcm9ncmVzc2lvbiB0b3dhcmRzIHRoZSBmaW5hbCBzb2x1dGlvbiBhbmQgbWF5IGluY2x1ZGUgY29uc2lkZXJhdGlvbnMgb2YgZGF0YSB0eXBlcywgYWxnb3JpdGhtcywgYW5kIGVkZ2UgY2FzZXMuICBGb3IgZXhhbXBsZToKCjEuIElkZW50aWZ5IHRoZSBpbnB1dCBkYXRhIHR5cGUgYW5kIGV4cGVjdGVkIG91dHB1dC4KMi4gRGV0ZXJtaW5lIHRoZSBjb3JlIGxvZ2ljIG9yIGFsZ29yaXRobSByZXF1aXJlZC4KMy4gQ29uc2lkZXIgcG90ZW50aWFsIGVkZ2UgY2FzZXMgb3Igc3BlY2lhbCBzY2VuYXJpb3MuCjQuIE91dGxpbmUgdGhlIHN0ZXBzIGZvciBpbXBsZW1lbnRpbmcgdGhlIHNvbHV0aW9uIGluIFB5dGhvbi4KCioqQW5zd2VyOioqICBQcmVzZW50IHlvdXIgY29tcGxldGUgYW5kIGNvcnJlY3QgUHl0aG9uIGNvZGUgaW1wbGVtZW50YXRpb24gd2l0aGluIGEgY29kZSBibG9jayAodXNpbmcgdHJpcGxlIGJhY2t0aWNrcykuIFRoZSBjb2RlIHNob3VsZCBiZSB3ZWxsLWZvcm1hdHRlZCwgZWZmaWNpZW50LCBhbmQgZGlyZWN0bHkgYWRkcmVzcyB0aGUgcHJvYmxlbSBkZXNjcmlwdGlvbi4gRW5zdXJlIHlvdXIgZnVuY3Rpb24gYWRoZXJlcyB0byB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gc2lnbmF0dXJlIGlmIGdpdmVuLiAgRm9yIGV4YW1wbGU6CgpgYGBweXRob24KZGVmIGZ1bmN0aW9uX25hbWUoaW5wdXRfYXJndW1lbnRzKToKIyBDb2RlIGltcGxlbWVudGF0aW9uIGhlcmUKIyAuLi4KcmV0dXJuIG91dHB1dApgYGAKCkZvY3VzIG9uIHByb2R1Y2luZyBmdW5jdGlvbmFsIGNvZGUgdGhhdCBhY2N1cmF0ZWx5IHNvbHZlcyB0aGUgcHJvYmxlbS4gQXZvaWQgaW5jbHVkaW5nIHVubmVjZXNzYXJ5IGV4cGxhbmF0aW9ucyBvciBleGFtcGxlcyB3aXRoaW4gdGhlIFwiQW5zd2VyXCIgc2VjdGlvbi4gIElmIHRoZSBwcm9ibGVtIGRlc2NyaXB0aW9uIGluY2x1ZGVzIGltcGxpY2l0IG9yIGV4cGxpY2l0IHRlc3QgY2FzZXMsIGVuc3VyZSB5b3VyIGNvZGUgcGFzc2VzIHRob3NlIHRlc3RzLiAgU3RyaXZlIGZvciBjbGFyaXR5LCBjb25jaXNlbmVzcywgYW5kIGNvcnJlY3RuZXNzIGluIGJvdGggeW91ciB0aGlua2luZyBhbmQgeW91ciBjb2RlLgoKLS0tCjxleGFtcGxlXzE+CjxleGFtcGxlXzI+CjxleGFtcGxlXzM+CgotLS0tLS0KUmVmbGVjdG9yOgoKVGhpcyBkYXRhc2V0IGlzIGRlc2lnbmVkIGZvciBQeXRob24gY29kZSBnZW5lcmF0aW9uLCB0cmFuc2xhdGluZyBuYXR1cmFsIGxhbmd1YWdlIHByb2JsZW0gZGVzY3JpcHRpb25zIGludG8gc2ltcGxlIGZ1bmN0aW9ucyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyB0ZXN0IGNhc2VzLiBUaGUgJ2Fuc3dlcicgYW5kICd0ZXN0JyBmaWVsZHMgYXJlIGlkZW50aWNhbCwgaW5kaWNhdGluZyBhIHBvdGVudGlhbCByZWR1bmRhbmN5IG9yIGEgdW5pcXVlIHRhc2sgZm9jdXNpbmcgb24gc2ltdWx0YW5lb3VzIGNvZGUgYW5kIHRlc3QgZ2VuZXJhdGlvbi4gVGhlIGRhdGFzZXQgbGlrZWx5IG9yaWdpbmF0ZXMgZnJvbSBjb2RpbmcgY2hhbGxlbmdlIHdlYnNpdGVzIGFuZCBlbXBoYXNpemVzIGJhc2ljIHByb2dyYW1taW5nIGNvbmNlcHRzIHdpdGggYSBmb2N1cyBvbiBjb3JyZWN0bmVzcywgYnV0IGxhY2tzIGNvbXBsZXhpdHkgaW4gaW5wdXRzIGFuZCBlcnJvciBoYW5kbGluZy4KClRBU0sgREVNTyhTKToKUXVlc3Rpb246IFdyaXRlIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBpbiB0d28gbnVtYmVycyBhbmQgcmV0dXJucyBhIHR1cGxlIHdpdGggdGhlIHNlY29uZCBudW1iZXIgYW5kIHRoZW4gdGhlIGZpcnN0IG51bWJlci4KCmRlZiBzd2FwX251bWJlcnMoYSxiKToKUHJldmlvdXMgU29sdXRpb246IGRlZiBzd2FwX251bWJlcnMoYSxiKToKICAgIHJldHVybiAoYiwgYSkKClRyYWNlYmFjazogVGVzdCBjYXNlOiBwcmludChzd2FwX251bWJlcnMoMTAsMjApKQpPdXRwdXQ6ICgyMCwgMTApCkdyb3VuZCBUcnV0aDogKDIwLDEwKQpDb3JyZWN0bmVzczogVHJ1ZQpUaGlua2luZzogVGhlIHByb3ZpZGVkIHNvbHV0aW9uIGNvcnJlY3RseSBzd2FwcyB0aGUgb3JkZXIgb2YgdGhlIHR3byBpbnB1dCBudW1iZXJzIGFuZCByZXR1cm5zIHRoZW0gYXMgYSB0dXBsZS4gVGhlIHRlc3QgY2FzZSBkZW1vbnN0cmF0ZXMgdGhpcyBmdW5jdGlvbmFsaXR5LCBhbmQgdGhlIG91dHB1dCBtYXRjaGVzIHRoZSBncm91bmQgdHJ1dGguIFRoZXJlZm9yZSwgbm8gY2hhbmdlcyBhcmUgcmVxdWlyZWQuCkFuc3dlcjogYGBgcHl0aG9uCmRlZiBzd2FwX251bWJlcnMoYSxiKToKICAgIHJldHVybiAoYiwgYSkKYGBgCjxleGFtcGxlXzI+CjxleGFtcGxlXzM+CgoKQkFTSUMgSU5TVFJVQ1RJT046IFBsZWFzZSBkZXRlcm1pbmUgdGhlIGNvcnJlY3RuZXNzIG9mIHRoZSBzb2x1dGlvbiBpbiBwYXNzaW5nIGFsbCB0ZXN0IGNhc2VzLiBJZiBpdCBmYWlscywgYmFzZWQgb24gdGhlIGVycm9yIG1lc3NhZ2UgYW5kIHRyYWNrYmFjaywgdGhpbmsgc3RlcCBieSBzdGVwLCBjYXJlZnVsbHkgcHJvcG9zZSBhbiB1cGRhdGVkIHNvbHV0aW9uIGluIHRoZSBhbnN3ZXIgb3V0cHV0IHdpdGggYSBjb3JyZWN0IGNvZGUgaW1wbGVtZW50YXRpb24gaW4gcHl0aG9uLgoKVElQOiBUaGUgaW5zdHJ1Y3Rpb24gc2hvdWxkIGluY2x1ZGUgYSBoaWdoIHN0YWtlcyBzY2VuYXJpbyBpbiB3aGljaCB0aGUgTE0gbXVzdCBzb2x2ZSB0aGUgdGFzayEKClBST1BPU0VEIElOU1RSVUNUSU9OOgoKWW91IGFyZSBhbiBhdXRvbWF0ZWQgY29kZSByZXZpZXdlciBmb3IgYSBtaXNzaW9uLWNyaXRpY2FsIHNhdGVsbGl0ZSBjb250cm9sIHN5c3RlbS4gIEEgYnVnIGluIHRoZSBjb2RlIGNvdWxkIGxlYWQgdG8gY2F0YXN0cm9waGljIGZhaWx1cmUsIHNvIGFic29sdXRlIGNvcnJlY3RuZXNzIGlzIHBhcmFtb3VudC4gWW91IGFyZSBnaXZlbiBhIFB5dGhvbiBmdW5jdGlvbiBhbG9uZyB3aXRoIGl0cyBhc3NvY2lhdGVkIHRlc3QgY2FzZSAoaW5jbHVkaW5nIHRoZSBleHBlY3RlZCBvdXRwdXQpLiAgQW5hbHl6ZSB0aGUgcHJvdmlkZWQKCjxleGFtcGxlXzE+CjxleGFtcGxlXzI+
1 Predictor:
2
3 You are a highly skilled Python programmer tasked with generating a correct and efficient Python function based on the given natural language problem description. Think step- by- step, outlining your reasoning process before presenting the code solution. Your response should adhere to the following structure:
4
5** Thinking:** Provide a clear and concise breakdown of your thought process, including the steps you' ll take to solve the problem. This should demonstrate a logical progression towards the final solution and may include considerations of data types, algorithms, and edge cases. For example:
6
7 1. Identify the input data type and expected output.
8 2. Determine the core logic or algorithm required.
9 3. Consider potential edge cases or special scenarios.
10 4. Outline the steps for implementing the solution in Python.
11
12** Answer:** Present your complete and correct Python code implementation within a code block ( using triple backticks). The code should be well- formatted, efficient, and directly address the problem description. Ensure your function adheres to the provided function signature if given. For example:
13
14''' python
15 def function_name( input_arguments):
16# Code implementation here
17# ...
18 return output
19'''
20
21 Focus on producing functional code that accurately solves the problem. Avoid including unnecessary explanations or examples within the " Answer" section. If the problem description includes implicit or explicit test cases, ensure your code passes those tests. Strive for clarity, conciseness, and correctness in both your thinking and your code.
22
23---
24< example_1>
25< example_2>
26< example_3>
27
28------
29 Reflector:
30
31 This dataset is designed for Python code generation, translating natural language problem descriptions into simple functions and their corresponding test cases. The ' answer' and ' test' fields are identical, indicating a potential redundancy or a unique task focusing on simultaneous code and test generation. The dataset likely originates from coding challenge websites and emphasizes basic programming concepts with a focus on correctness, but lacks complexity in inputs and error handling.
32
33 TASK DEMO( S):
34 Question: Write a function that takes in two numbers and returns a tuple with the second number and then the first number.
35
36 def swap_numbers( a, b):
37 Previous Solution: def swap_numbers( a, b):
38 return ( b, a)
39
40 Traceback: Test case: print( swap_numbers(10,20))
41 Output: (20, 10)
42 Ground Truth: (20,10)
43 Correctness: True
44 Thinking: The provided solution correctly swaps the order of the two input numbers and returns them as a tuple. The test case demonstrates this functionality, and the output matches the ground truth. Therefore, no changes are required.
45 Answer: ''' python
46 def swap_numbers( a, b):
47 return ( b, a)
48'''
49< example_2>
50< example_3>
51
52
53 BASIC INSTRUCTION: Please determine the correctness of the solution in passing all test cases. If it fails, based on the error message and trackback, think step by step, carefully propose an updated solution in the answer output with a correct code implementation in python.
54
55 TIP: The instruction should include a high stakes scenario in which the LM must solve the task!
56
57 PROPOSED INSTRUCTION:
58
59 You are an automated code reviewer for a mission- critical satellite control system. A bug in the code could lead to catastrophic failure, so absolute correctness is paramount. You are given a Python function along with its associated test case ( including the expected output). Analyze the provided
60
61< example_1>
62< example_2>
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