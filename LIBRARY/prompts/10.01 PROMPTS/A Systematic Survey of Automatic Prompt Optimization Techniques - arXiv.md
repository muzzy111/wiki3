# A Systematic Survey of Automatic Prompt Optimization Techniques - arXiv

Source URL: https://arxiv.org/html/2502.16923v2

A Systematic Survey of Automatic Prompt Optimization Techniques
logo Back to arXiv
https://arxiv.org/
 

https://arxiv.org/abs/2502.16923v2
 

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
https://arxiv.org/abs/2502.16923v2
 
Download PDF
https://arxiv.org/pdf/2502.16923v2
 

javascript:toggleColorScheme()
Table of Contents
Abstract
https://arxiv.org/html/2502.16923v2#abstract
1 Introduction
https://arxiv.org/html/2502.16923v2#S1
2 Automatic Prompt Optimization Formulation
https://arxiv.org/html/2502.16923v2#S2
3 Initialize Seed Prompts
https://arxiv.org/html/2502.16923v2#S3
3.1 Manual Instructions
https://arxiv.org/html/2502.16923v2#S3.SS1
3.2 Instruction Induction via LLMs
https://arxiv.org/html/2502.16923v2#S3.SS2
4 Inference Evaluation and Feedback
https://arxiv.org/html/2502.16923v2#S4
4.1 Numeric Score Feedback
https://arxiv.org/html/2502.16923v2#S4.SS1
4.1.1 Accuracy
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS1
4.1.2 Reward-model Scores
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS2
4.1.3 Entropy-based Scores
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS3
4.1.4 Negative Log-likelihood of Output
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS4
4.2 LLM Feedback
https://arxiv.org/html/2502.16923v2#S4.SS2
4.2.1 Improving Single Candidate
https://arxiv.org/html/2502.16923v2#S4.SS2.SSS1
4.2.2 Improving Multiple Candidates
https://arxiv.org/html/2502.16923v2#S4.SS2.SSS2
4.3 Human-feedback
https://arxiv.org/html/2502.16923v2#S4.SS3
5 Candidate Prompt Generation
https://arxiv.org/html/2502.16923v2#S5
5.1 Heuristic-based Edits
https://arxiv.org/html/2502.16923v2#S5.SS1
5.1.1 Monte Carlo Sampling
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS1
5.1.2 Genetic Algorithm
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS2
5.1.3 Word / Phrase Level Edits
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS3
5.1.4 Vocabulary Pruning
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS4
5.2 Editing via Auxiliary Trained NN
https://arxiv.org/html/2502.16923v2#S5.SS2
5.2.1 Reinforcement-learning
https://arxiv.org/html/2502.16923v2#S5.SS2.SSS1
5.2.2 Finetuning LLMs
https://arxiv.org/html/2502.16923v2#S5.SS2.SSS2
5.2.3 Generative Adversarial Networks
https://arxiv.org/html/2502.16923v2#S5.SS2.SSS3
5.3 Metaprompt Design
https://arxiv.org/html/2502.16923v2#S5.SS3
5.4 Coverage-based
https://arxiv.org/html/2502.16923v2#S5.SS4
5.4.1 Single Prompt-expansion
https://arxiv.org/html/2502.16923v2#S5.SS4.SSS1
5.4.2 Mixture of Experts
https://arxiv.org/html/2502.16923v2#S5.SS4.SSS2
5.4.3 Ensemble Methods
https://arxiv.org/html/2502.16923v2#S5.SS4.SSS3
5.5 Program Synthesis
https://arxiv.org/html/2502.16923v2#S5.SS5
6 Filter and Retain Promising Prompts
https://arxiv.org/html/2502.16923v2#S6
6.1 TopK Greedy Search
https://arxiv.org/html/2502.16923v2#S6.SS1
6.2 Upper Confidence Bound and Variants
https://arxiv.org/html/2502.16923v2#S6.SS2
6.3 Region-based Joint Search
https://arxiv.org/html/2502.16923v2#S6.SS3
6.4 Metaheuristic Ensemble
https://arxiv.org/html/2502.16923v2#S6.SS4
7 Iteration Depth
https://arxiv.org/html/2502.16923v2#S7
7.1 Fixed Steps
https://arxiv.org/html/2502.16923v2#S7.SS1
7.2 Variable number of steps
https://arxiv.org/html/2502.16923v2#S7.SS2
8 Theoretical Perspectives
https://arxiv.org/html/2502.16923v2#S8
8.1 Upper Bound of Improvement from APO
https://arxiv.org/html/2502.16923v2#S8.SS1
8.2 Other Related Perspectives
https://arxiv.org/html/2502.16923v2#S8.SS2
9 Challenges and Future Directions
https://arxiv.org/html/2502.16923v2#S9
9.1 Task-agnostic APO
https://arxiv.org/html/2502.16923v2#S9.SS1
9.2 Unclear Mechanisms
https://arxiv.org/html/2502.16923v2#S9.SS2
9.3 APO for System Prompts / Agents
https://arxiv.org/html/2502.16923v2#S9.SS3
9.4 Multimodal APO
https://arxiv.org/html/2502.16923v2#S9.SS4
10 Conclusion
https://arxiv.org/html/2502.16923v2#S10
11 Limitations
https://arxiv.org/html/2502.16923v2#S11
12 Appendix
https://arxiv.org/html/2502.16923v2#S12
12.1 Notation
https://arxiv.org/html/2502.16923v2#S12.SS1
12.2 Excluded works
https://arxiv.org/html/2502.16923v2#S12.SS2
12.3 UCB based selection algorithm
https://arxiv.org/html/2502.16923v2#S12.SS3
13 Comparison of different approaches + Tasks
https://arxiv.org/html/2502.16923v2#S13
13.1 Comparison
https://arxiv.org/html/2502.16923v2#S13.SS1
13.2 Evaluation tasks and datasets
https://arxiv.org/html/2502.16923v2#S13.SS2
14 Prompt examples
https://arxiv.org/html/2502.16923v2#S14
14.1 Instruction Induction
https://arxiv.org/html/2502.16923v2#S14.SS1
14.2 Metaprompt design example
https://arxiv.org/html/2502.16923v2#S14.SS2
14.3 LLM Feedback prompts
https://arxiv.org/html/2502.16923v2#S14.SS3
References
https://arxiv.org/html/2502.16923v2#bib
HTML conversions 
sometimes display errors
https://info.dev.arxiv.org/about/accessibility_html_error_messages.html
 due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.
failed: forest
failed: inconsolata
failed: mdframed
Authors: achieve the best HTML results from your LaTeX submissions by following these 
best practices
https://info.arxiv.org/help/submit_latex_best_practices.html
.
License: CC BY-NC-SA 4.0
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2502.16923v2 [cs.CL] 02 Apr 2025
A Systematic Survey of Automatic Prompt Optimization Techniques
Report issue for preceding element
Kiran Ramnath, Kang Zhou, Sheng Guan, Soumya Smruti Mishra, Xuan Qi, Zhengyuan Shen,
Shuai Wang, Sangmin Woo, Sullam Jeoung, Yawei Wang, Haozhu Wang, Han Ding,
Yuzhe Lu, Zhichao Xu, Yun Zhou, Balasubramaniam Srinivasan, Qiaojing Yan, Yueyan Chen,
Haibo Ding, Panpan Xu Lin Lee Cheong
Amazon Web Services
{raxkiran,zhoukang,shguan,soumish,xuaqi,donshen, wshui,sangminw,sullamij,
yawenwan, haozhuw, handing, yuzhelu, xzhichao, yunzzhou, srbalasu, qiaojiny, yyanc, hbding, xupanpan, lcheong}@amazon.com
Report issue for preceding element
Abstract
Report issue for preceding element
Since the advent of large language models (LLMs), prompt engineering has been a crucial step for eliciting desired responses for various Natural Language Processing (NLP) tasks. However, prompt engineering remains an impediment for end users due to rapid advances in models, tasks, and associated best practices. To mitigate this, Automatic Prompt Optimization (APO) techniques have recently emerged that use various automated techniques to help improve the performance of LLMs on various tasks. In this paper, we present a comprehensive survey summarizing the current progress and remaining challenges in this field. We provide a formal definition of APO, a 5-part unifying framework, and then proceed to rigorously categorize all relevant works based on their salient features therein. We hope to spur further research guided by our framework.
Report issue for preceding element
1 Introduction
Report issue for preceding element
Since McCann et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib102
) cast multi-task NLP as Question Answering, using prompts as inputs has become the standard way to elicit desired responses from Large Language Models (LLMs). Furthermore, LLMs' few-shot learning Brown et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib10
) , instruction-following Ouyang et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib113
) , and zero-shot reasoning capabilities Kojima et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib71
) have led to a widespread proliferation of prompting tricks for various tasks and model variants. However, LLMs still exhibit unpredictable sensitivity to various factors (explanation of the task Li et al. ( 
2023b
https://arxiv.org/html/2502.16923v2#bib.bib81
) ,ordering Liu et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib89
) , stylistic formatting 
Sclar et al.
https://arxiv.org/html/2502.16923v2#bib.bib132
 , etc.) causing a performance gap between two prompts that are semantically similar, thereby adding impediments for adoption by end users. Against this backdrop, Black-Box Automatic Prompt Optimization (APO) techniques have emerged that improve task performance via automated prompt improvements. The possess various attractive features - (1) they do not require parameter access on LLMs performing the task, (2) they systematically search through the prompt solution space, and (3) they retain human interpretability of prompt improvements. In this survey paper, we aim to highlight the advances in the field. Our core contribution is a 5-part APO taxonomy combined with a comprehensive fine-grained categorization of various design choices therein (see Fig. 
1
https://arxiv.org/html/2502.16923v2#S1.F1
, Tables 
2
https://arxiv.org/html/2502.16923v2#S13.T2
, 
3
https://arxiv.org/html/2502.16923v2#S13.T3
, 
4
https://arxiv.org/html/2502.16923v2#S13.T4
 in Appendix). We hope our framework will be informational for new and seasoned researchers alike, enabling further research on open questions.
Report issue for preceding element
{forest}
for tree= grow=east, font=, parent anchor=east, anchor=west, edge=->, rounded corners, edge path= [draw, \forestoption edge] (!u.parent anchor) – ++(3mm,0) |- (.child anchor)\forestoption edge label; , inner sep=1mm, text width=4cm, l sep=10mm, text centered, align=center, rounded corners, draw=black ,for children=tier/.wrap pgfmath arg=level#1level(), s sep+=5mm, [Prompt optimization anatomy § 
2
https://arxiv.org/html/2502.16923v2#S2
, rectangle,fill=violet!20,rotate=90,parent anchor=south,text width=7cm, align=c, [Iteration depth § 
7
https://arxiv.org/html/2502.16923v2#S7
, rectangle, fill=cyan!20, text width=6cm, [Variable steps § 
7.2
https://arxiv.org/html/2502.16923v2#S7.SS2
, text width=15.22cm,fill=cyan!20], [Fixed steps § 
7.1
https://arxiv.org/html/2502.16923v2#S7.SS1
, text width=15.22cm,fill=cyan!20] ], [Filter and retain
promising candidates § 
6
https://arxiv.org/html/2502.16923v2#S6
, rectangle, fill=pink!25, text width=6cm, [Meta-heuristic ensemble § 
6.4
https://arxiv.org/html/2502.16923v2#S6.SS4
, text width=15.22cm, fill=pink!25], [Region-based joint search § 
6.3
https://arxiv.org/html/2502.16923v2#S6.SS3
, text width=15.22cm, fill=pink!25], [Upper confidence bound and variants § 
6.2
https://arxiv.org/html/2502.16923v2#S6.SS2
, text width=15.22cm, fill=pink!25], [TopK Greedy Search § 
6.1
https://arxiv.org/html/2502.16923v2#S6.SS1
, text width=15.22cm, fill=pink!25], ], [Candidate prompt
generation § 
5
https://arxiv.org/html/2502.16923v2#S5
, rectangle, fill=blue!10, text width=6cm, [Program Synthesis § 
5.5
https://arxiv.org/html/2502.16923v2#S5.SS5
, text width = 15.22cm,fill=blue!10], [Coverage-based § 
5.4
https://arxiv.org/html/2502.16923v2#S5.SS4
,fill=blue!10, [Ensemble methods § 
5.4.3
https://arxiv.org/html/2502.16923v2#S5.SS4.SSS3
, text width=10cm,fill=blue!10], [Mixture of experts § 
5.4.2
https://arxiv.org/html/2502.16923v2#S5.SS4.SSS2
, text width=10cm,fill=blue!10], [Single prompt expansion § 
5.4.1
https://arxiv.org/html/2502.16923v2#S5.SS4.SSS1
, text width=10cm,fill=blue!10] ], [Metaprompt design § 
5.3
https://arxiv.org/html/2502.16923v2#S5.SS3
, text width = 15.22cm,fill=blue!10], [Editing with auxiliary
trained NN § 
5.2
https://arxiv.org/html/2502.16923v2#S5.SS2
,fill=blue!10, [Generative Adversarial Networks § 
5.2.3
https://arxiv.org/html/2502.16923v2#S5.SS2.SSS3
, text width=10cm,fill=blue!10], [LLM Finetuning § 
5.2.2
https://arxiv.org/html/2502.16923v2#S5.SS2.SSS2
, text width=10cm,fill=blue!10], [Reinforcement Learning § 
5.2.1
https://arxiv.org/html/2502.16923v2#S5.SS2.SSS1
, text width=10cm,fill=blue!10] ], [Heuristic-based
edits § 
5.1
https://arxiv.org/html/2502.16923v2#S5.SS1
,fill=blue!10, [Vocabulary pruning § 
5.1.4
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS4
,fill=blue!10,text width=10cm], [Word / phrase edits § 
5.1.3
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS3
, fill=blue!10, text width=10cm], [Genetic Algorithm § 
5.1.2
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS2
,fill=blue!10, text width=10cm ], [Monte Carlo Sampling § 
5.1.1
https://arxiv.org/html/2502.16923v2#S5.SS1.SSS1
,fill=blue!10,text width=10 cm] ] ], [Inference evaluation
and feedback § 
4
https://arxiv.org/html/2502.16923v2#S4
, rectangle, fill=yellow!50, text width=6cm, [Human Feedback § 
4.3
https://arxiv.org/html/2502.16923v2#S4.SS3
, fill=yellow!50, text width=15.22cm], [LLM Feedback § 
4.2
https://arxiv.org/html/2502.16923v2#S4.SS2
,rectangle, fill=yellow!50, [Improving multiple candidates § 
4.2.2
https://arxiv.org/html/2502.16923v2#S4.SS2.SSS2
, text width=10cm,fill=yellow!50], [Improving single candidate § 
4.2.1
https://arxiv.org/html/2502.16923v2#S4.SS2.SSS1
, text width=10cm,fill=yellow!50] ], [Numeric score § 
4.1
https://arxiv.org/html/2502.16923v2#S4.SS1
,rectangle, fill=yellow!50, [Negative log-likelihood § 
4.1.4
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS4
, text width=10cm,fill=yellow!50], [Entropy-based § 
4.1.3
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS3
, text width=10cm,fill=yellow!50], [Reward model score § 
4.1.2
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS2
, text width=10cm,fill=yellow!50], [Task accuracy § 
4.1.1
https://arxiv.org/html/2502.16923v2#S4.SS1.SSS1
, text width=10cm,fill=yellow!50], ] ], [Seed Prompts § 
3
https://arxiv.org/html/2502.16923v2#S3
, rectangle, fill=orange!30, text width=6cm, [Instruction-induction via LLMs § 
3.2
https://arxiv.org/html/2502.16923v2#S3.SS2
, fill=orange!30, text width=15.22cm], [Manual Instructions § 
3.1
https://arxiv.org/html/2502.16923v2#S3.SS1
, fill=orange!30,text width=15.22cm] ] ]
Report issue for preceding element
Figure 1: Taxonomy of Automatic Prompt Optimization Report issue for preceding element
2 Automatic Prompt Optimization Formulation
Report issue for preceding element
We formalize the process of automatic prompt optimization (APO) as follows. Given a task model M t  a  s  k subscript 𝑀 𝑡 𝑎 𝑠 𝑘 M_{task} italic_M start_POSTSUBSCRIPT italic_t italic_a italic_s italic_k end_POSTSUBSCRIPT , initial prompt ρ 𝜌 \rho italic_ρ ∈ V absent 𝑉 \in V ∈ italic_V , the goal of an APO-system M A  P  O subscript 𝑀 𝐴 𝑃 𝑂 M_{APO} italic_M start_POSTSUBSCRIPT italic_A italic_P italic_O end_POSTSUBSCRIPT is to obtain the best performing prompt-template ρ o  p  t superscript 𝜌 𝑜 𝑝 𝑡 \rho^{opt} italic_ρ start_POSTSUPERSCRIPT italic_o italic_p italic_t end_POSTSUPERSCRIPT under a metric f ∈ F 𝑓 𝐹 f\in F italic_f ∈ italic_F and eval-set D v  a  l subscript 𝐷 𝑣 𝑎 𝑙 D_{val} italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT
Report issue for preceding element
ρ o  p  t := arg  max ρ ∈ V  E x ∼ D v  a  l  [ f  ( M t  a  s  k  ( ρ ⊕ x ) ) ] assign superscript 𝜌 𝑜 𝑝 𝑡 subscript 𝜌 𝑉 subscript 𝐸 similar-to 𝑥 subscript 𝐷 𝑣 𝑎 𝑙 delimited-[] 𝑓 subscript 𝑀 𝑡 𝑎 𝑠 𝑘 direct-sum 𝜌 𝑥 \displaystyle{\rho^{opt}:=\arg\max_{\begin{subarray}{c}\rho\in V\end{subarray}% }E_{x\sim D_{val}}[f(M_{task}(\rho\oplus x))]} italic_ρ start_POSTSUPERSCRIPT italic_o italic_p italic_t end_POSTSUPERSCRIPT := roman_arg roman_max start_POSTSUBSCRIPT start_ARG start_ROW start_CELL italic_ρ ∈ italic_V end_CELL end_ROW end_ARG end_POSTSUBSCRIPT italic_E start_POSTSUBSCRIPT italic_x ∼ italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT [ italic_f ( italic_M start_POSTSUBSCRIPT italic_t italic_a italic_s italic_k end_POSTSUBSCRIPT ( italic_ρ ⊕ italic_x ) ) ]
(1)
This objective function is not tractable for discrete prompt optimization as token-sequence search spaces are combinatorial. Instead, APO techniques follow the general anatomy as described in Algorithm 
1
https://arxiv.org/html/2502.16923v2#alg1
 to obtain approximate solutions.
Report issue for preceding element
Algorithm 1 Prompt optimization framework
1: P 0 := { ρ 1 , ρ 2 , … , ρ k } assign subscript 𝑃 0 subscript 𝜌 1 subscript 𝜌 2 … subscript 𝜌 𝑘 P_{0}:={\rho_{1},\rho_{2},\ldots,\rho_{k}} italic_P start_POSTSUBSCRIPT 0 end_POSTSUBSCRIPT := { italic_ρ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_ρ start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT , … , italic_ρ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT } ▷ ▷ \triangleright ▷ § 
3
https://arxiv.org/html/2502.16923v2#S3
. Seed prompts
2: D v  a  l := { ( x 1 , y 1 ) } i = 1 n assign subscript 𝐷 𝑣 𝑎 𝑙 superscript subscript subscript 𝑥 1 subscript 𝑦 1 𝑖 1 𝑛 D_{val}:={(x_{1},y_{1})}_{i=1}^{n} italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT := { ( italic_x start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_y start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT ) } start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_n end_POSTSUPERSCRIPT ▷ ▷ \triangleright ▷ Validation set
3: f 1 , … , f m ∈ F subscript 𝑓 1 … subscript 𝑓 𝑚 𝐹 f_{1},\ldots,f_{m}\in F italic_f start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_f start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT ∈ italic_F ▷ ▷ \triangleright ▷ § 
4
https://arxiv.org/html/2502.16923v2#S4
. Inference evaluation
4: for t = 1 , 2 , … , N 𝑡 1 2 … 𝑁 t=1,2,\ldots,N italic_t = 1 , 2 , … , italic_N do ▷ ▷ \triangleright ▷ § 
7
https://arxiv.org/html/2502.16923v2#S7
. Iteration depth
5: ▷ ▷ \triangleright ▷ § 
5
https://arxiv.org/html/2502.16923v2#S5
. Generate prompt candidates
6: G t := M A  P  O  ( P , D v  a  l , F ) assign subscript 𝐺 𝑡 subscript 𝑀 𝐴 𝑃 𝑂 𝑃 subscript 𝐷 𝑣 𝑎 𝑙 𝐹 G_{t}:=M_{{}
{APO}}(P,D
{val},F) italic_G start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT := italic_M start_POSTSUBSCRIPT start_FLOATSUBSCRIPT italic_A italic_P italic_O end_FLOATSUBSCRIPT end_POSTSUBSCRIPT ( italic_P , italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT , italic_F )
7: ▷ ▷ \triangleright ▷ § 
6
https://arxiv.org/html/2502.16923v2#S6
. Filter and retain candidates
8: P t := S  e  l  e  c  t  ( G t , D v  a  l , F ) assign subscript 𝑃 𝑡 𝑆 𝑒 𝑙 𝑒 𝑐 𝑡 subscript 𝐺 𝑡 subscript 𝐷 𝑣 𝑎 𝑙 𝐹 P_{t}:=Select(G_{t},D_{val},F) italic_P start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT := italic_S italic_e italic_l italic_e italic_c italic_t ( italic_G start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT , italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT , italic_F )
9: ▷ ▷ \triangleright ▷ § 
7
https://arxiv.org/html/2502.16923v2#S7
. Optionally check for early convergence
10: if f c  o  n  v  e  r  g  e  n  c  e ≤ ϵ subscript 𝑓 𝑐 𝑜 𝑛 𝑣 𝑒 𝑟 𝑔 𝑒 𝑛 𝑐 𝑒 italic-ϵ f_{convergence}\leq\epsilon italic_f start_POSTSUBSCRIPT italic_c italic_o italic_n italic_v italic_e italic_r italic_g italic_e italic_n italic_c italic_e end_POSTSUBSCRIPT ≤ italic_ϵ then
11: exit
12: return arg  max ρ ∈ P N  E x ∼ D v  a  l  [ f  ( M t  a  s  k  ( ρ ⊕ x ) ) ] subscript 𝜌 subscript 𝑃 𝑁 subscript 𝐸 similar-to 𝑥 subscript 𝐷 𝑣 𝑎 𝑙 delimited-[] 𝑓 subscript 𝑀 𝑡 𝑎 𝑠 𝑘 direct-sum 𝜌 𝑥 \arg\max_{\begin{subarray}{c}\rho\in P_{N}\end{subarray}}E_{\begin{subarray}{c% }x\sim D_{val}\end{subarray}}\left[f(M_{task}(\rho\oplus x))\right] roman_arg roman_max start_POSTSUBSCRIPT start_ARG start_ROW start_CELL italic_ρ ∈ italic_P start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT end_CELL end_ROW end_ARG end_POSTSUBSCRIPT italic_E start_POSTSUBSCRIPT start_ARG start_ROW start_CELL italic_x ∼ italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT end_CELL end_ROW end_ARG end_POSTSUBSCRIPT [ italic_f ( italic_M start_POSTSUBSCRIPT italic_t italic_a italic_s italic_k end_POSTSUBSCRIPT ( italic_ρ ⊕ italic_x ) ) ]
Report issue for preceding element
 
Figure 2: Representative APO system Report issue for preceding element
3 Initialize Seed Prompts
Report issue for preceding element
3.1 Manual Instructions
Report issue for preceding element
Several approaches use a seed of manually created instructions that offer interpretable and strong baselines as the basis for further improvement, inter alia., ProteGi Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
) , GPS Xu et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib166
) , SPRIG Zhang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib180
) . While obtaining quality examples can be costly, APE Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
) 
1
 
1
 1 Note: APE stands for Automatic Prompt Engineer method introduced by Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
) , not to be confused with APO which broadly refers to the entire area of Automatic Prompt Optimization showed that a few hundred samples are sufficient for further optimization.
Report issue for preceding element
3.2 Instruction Induction via LLMs
Report issue for preceding element
Honovich et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib52
) were the first to propose inducing LLMs to infer human-readable prompts based on a few demonstrations E 𝐸 E italic_E (see Appendix 
14.1
https://arxiv.org/html/2502.16923v2#S14.SS1
 for prompt). APE Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
) and DAPO Yang et al. ( 
2024c
https://arxiv.org/html/2502.16923v2#bib.bib171
) use the induced seed instructions for further optimization, while MOP Wang et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib153
) and GPO Li et al. ( 
2023c
https://arxiv.org/html/2502.16923v2#bib.bib83
) use APE to induce cluster-specific prompts. Apart from demonstrations, SCULPT Kumar et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib74
) induced instructions from task-READMEs, while UniPrompt Juneja et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib66
) used LLMs to fill-in structured templates.
Report issue for preceding element
Paper
Seed instructions
Iteration depth
Inference evaluation
Candidate generation
Search+filter strategy
ProTeGi Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
)
Manually created
Fixed
LLM feedback + Task accuracy
LLM rewriter
UCB for trees
APE Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
)
Instruction induction
Fixed
Task accuracy
N/A
UCB
CRISPO He et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib48
)
Manually created
Fixed
LLM feedback + Task accuracy
LLM rewriter
TopK selection
MOP Wang et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib153
)
Instruction induction
Fixed
Task accuracy
Mixture of experts
Region-based joint search
DSPY Khattab et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib69
)
Manually created + Instruction induction
Variable
LLM feedback + Task accuracy
Program Synthesis
TopK selection
OPRO Yang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib169
)
Manually created
Variable
LLM feedback + Task accuracy
Metaprompt design
TopK selection
GATE Joko et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib65
)
Manually created
Variable
Human feedback
LLM rewriter
N/A
Table 1: Comparison of some APO techniques under our framework (Tables 
2
https://arxiv.org/html/2502.16923v2#S13.T2
, 
3
https://arxiv.org/html/2502.16923v2#S13.T3
, 
4
https://arxiv.org/html/2502.16923v2#S13.T4
 show full comparison) Report issue for preceding element
4 Inference Evaluation and Feedback
Report issue for preceding element
The evaluation step helps identify promising prompt candidates in each iteration. Some methods also use LLM feedback on prompt-response pairs to help generate more prompt candidates.
Report issue for preceding element
4.1 Numeric Score Feedback
Report issue for preceding element
4.1.1 Accuracy
Report issue for preceding element
Using task-specific accuracy metrics is the most straightforward and widespread way of eliciting feedback, i.a., Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
, 
2023
https://arxiv.org/html/2502.16923v2#bib.bib185
); Zhang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib180
); Khattab et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib68
) . Classification and MCQ-based QA tasks use exact accuracy, while code-related tasks measure execution accuracy. Text generation tasks (summarization, translation, creative writing) employ flexible metrics like BLEU-N, Rouge-N, Rouge-N-F1, or embedding-based measures such as BERTScore Zhang* et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib182
) Honovich et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib52
); Dong et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib33
) .
Report issue for preceding element
4.1.2 Reward-model Scores
Report issue for preceding element
Given the limitations of rigid accuracy metrics, some approaches proposed using learned reward models to provide more nuanced evaluations of prompts-response pairs Deng et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib26
); Sun et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib144
); Kong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib73
) . OIRL Sun et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib144
) trained an XGBoost-based reward model that takes query-prompt embedding pairs as input and predicts whether the prompt will elicit correct answers from the language model and use it to select appropriate prompts for specific queries using a best-of-N strategy. DRPO Amini et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib3
) follows an LLM-based reward modeling approach using both predefined and dynamic reward criteria. It first optimizes in-context learning examples E 𝐸 E italic_E , and using that it optimizes the specific task prompt.
Report issue for preceding element
4.1.3 Entropy-based Scores
Report issue for preceding element
Entropy-based scores evaluate the entire output distribution induced by candidates, as opposed to a single inference instance. They are gradient-free but require access to the entire output probability distribution, something not usually possible with black-box LLMs. CLAPS Zhou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib185
) leverages the negative incremental cross-entropy of π ( x i ⊕ v ∈ V ) subscript 𝜋 direct-sum subscript 𝑥 𝑖 𝑣 𝑉 \pi_{(x_{i}\oplus v\in V)} italic_π start_POSTSUBSCRIPT ( italic_x start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ⊕ italic_v ∈ italic_V ) end_POSTSUBSCRIPT v/s π ( x i ) subscript 𝜋 subscript 𝑥 𝑖 \pi_{(x_{i})} italic_π start_POSTSUBSCRIPT ( italic_x start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) end_POSTSUBSCRIPT to identify promising words v ∈ V 𝑣 𝑉 v\in V italic_v ∈ italic_V to add to the prompt. The topK words are then used as candidate tokens from which to construct candidate prompts. GRIPS Prasad et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib122
) simply added an entropy term to the task-weighted accuracy − ∑ π ρ  ( y )  l  n  ( π ρ  ( y ) ) + 1 | T |  ∑ 𝟏  ( y = y ^ ) subscript 𝜋 𝜌 𝑦 𝑙 𝑛 subscript 𝜋 𝜌 𝑦 1 𝑇 1 𝑦 ^ 𝑦 -\sum\pi_{\rho}(y),ln(\pi_{\rho}(y))+\frac{1}{|T|}\sum\mathbf{1}(y=\hat{y}) - ∑ italic_π start_POSTSUBSCRIPT italic_ρ end_POSTSUBSCRIPT ( italic_y ) italic_l italic_n ( italic_π start_POSTSUBSCRIPT italic_ρ end_POSTSUBSCRIPT ( italic_y ) ) + divide start_ARG 1 end_ARG start_ARG | italic_T | end_ARG ∑ bold_1 ( italic_y = over^ start_ARG italic_y end_ARG ) to prioritize output diversity in potential prompt candidates.
Report issue for preceding element
4.1.4 Negative Log-likelihood of Output
Report issue for preceding element
Some approaches like APE, GPS Xu et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib166
) , PACE Dong et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib33
) consider the negative log-likelihood (NLL) of token sequences under the target LLM, i.e., − log  ( π ρ  ( y ) ) subscript 𝜋 𝜌 𝑦 -\log(\pi_{\rho}(y)) - roman_log ( italic_π start_POSTSUBSCRIPT italic_ρ end_POSTSUBSCRIPT ( italic_y ) ) . This however requires the log-probabilities to be accessible during the decoding of each token, limiting its applicability. The NLL for ground truth one-hot token-sequence is equivalent to the cross-entropy.
Report issue for preceding element
4.2 LLM Feedback
Report issue for preceding element
A popular paradigm to augment or fully replace numeric scores is to use textual feedback generated by L  L  M E  v  a  l  u  a  t  o  r 𝐿 𝐿 subscript 𝑀 𝐸 𝑣 𝑎 𝑙 𝑢 𝑎 𝑡 𝑜 𝑟 LLM_{Evaluator} italic_L italic_L italic_M start_POSTSUBSCRIPT italic_E italic_v italic_a italic_l italic_u italic_a italic_t italic_o italic_r end_POSTSUBSCRIPT Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
); Long et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib94
); Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
) . It is versatile because it can evaluate both the response as well as the prompt input. It can directly aid the prompt rewriting process while being flexible to individual tasks as it only needs natural language instructions for general-purpose LLMs as opposed to task-specific handcrafting of metrics. A potential downside is the inference cost incurred due to an additional LLM call. All the LLM feedback approaches provide multiple feedback data and broadly fall into two categories - improving a single prompt candidate versus improving multiple prompt candidates (discussed below, examples in Appendix 
14.3
https://arxiv.org/html/2502.16923v2#S14.SS3
).
Report issue for preceding element
4.2.1 Improving Single Candidate
Report issue for preceding element
SCULPT Kumar et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib74
) introduces a systematic method for tuning long, unstructured prompts by employing a hierarchical tree structure and two-step feedback loops - preliminary assessment and error assessment - to evaluate and correct prompts before and after execution. The feedback updates the hierarchical prompt tree which is then back-synthesized into a new prompt candidate. PACE Dong et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib33
) applies an actor-critic editing framework to the prompt refinement process itself, allowing for more dynamic and adaptive adjustments. Overcoming the limitations of optimizing a single metric, CRISPO He et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib48
) adopts a multi-aspect critique-suggestion meta-prompt to highlight flaws in the generated response across multiple dimensions such as style, precision, and content alignment. Thereafter it leverages detailed, aspect-specific feedback and iteratively updates the prompts. Autohint Sun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib145
) summarizes feedback for multiple incorrect inferences via hints to instill improvements into a single prompt candidate.
Report issue for preceding element
4.2.2 Improving Multiple Candidates
Report issue for preceding element
ProTeGi Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
) and TextGrad Yuksekgonul et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib175
) leverage textual “gradients” to guide the discrete prompt optimization procedure, very similar to the gradient-descent style of continuous prompt optimization approaches. Different from continuous gradient-descent, ProTeGi sampled multiple “gradients” i.e. directions of improvement, and each such “gradient” is used to generate several prompt candidates for evaluation in the next iteration. PromptAgent Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
) similarly used an error collection approach to emulate expert-written prompts that consisted of clear sections like “Task description”, “Domain Knowledge”, “Solution Guidance”, “Exception Handling”, “Output Formatting”. PREFER Zhang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib179
) utilizes a feedback-reflect-refine cycle to aggregate feedback into multiple prompts in an ensemble to improve the model's ability to generalize across various tasks. Survival of the Safest (SOS) Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
) added safety-score into a multi-objective prompt optimization framework that used an interleaved strategy to balance performance and security in LLMs simultaneously. To avoid accidentally damaging well-functioning prompts, StraGo Wu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib164
) summarized strategic guidance based on both correct and incorrect predictions as feedback.
Report issue for preceding element
4.3 Human-feedback
Report issue for preceding element
A few works also incorporate human feedback, either during compile-time or inference-time in the prompt construction / optimization process. Joko et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib65
) proposed “Generative Active Task Elicitation” to better capture human preferences. It prompts a language model to interactively ask questions and infer human preferences conditioned on the history of free-form interaction. Cheng et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib15
) trained a smaller LLM to optimize input prompts based on user preference feedback, achieving up to 22% increase in win rates for ChatGPT and 10% for GPT-4. PROMST Chen et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib14
) tackles the challenges of multi-step tasks by incorporating human-designed feedback rules and a learned heuristic model. APOHF Lin et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib87
) focuses on optimizing prompts using only human preference feedback rather than numeric scores, employing a dueling bandits-inspired strategy to efficiently select prompt pairs for preference feedback, proving effective for tasks like text-to-image generation and response optimization.
Report issue for preceding element
5 Candidate Prompt Generation
Report issue for preceding element
In this step, one or more candidate prompts are generated that are most likely to result in an improvement in a metric of interest f ∈ F 𝑓 𝐹 f\in F italic_f ∈ italic_F . The approaches reviewed below range from simple rule-based edits (sec. 
5.1
https://arxiv.org/html/2502.16923v2#S5.SS1
) to sophisticated agentic systems that combine with LLM-based evaluations (sec. 
4.2
https://arxiv.org/html/2502.16923v2#S4.SS2
) and various filtering strategies (sec. 
6
https://arxiv.org/html/2502.16923v2#S6
).
Report issue for preceding element
5.1 Heuristic-based Edits
Report issue for preceding element
Several works proposed heuristic-based mechanisms to make edits to intermediate prompt candidates to generate newer candidates. They range from edits at the word / phrase / sentence-level (either simple rule-based or LLM-generated), or metric-driven incremental search. While these strategies may not result in the most optimal solution, they help in making the discrete prompt optimization problem computationally tractable.
Report issue for preceding element
5.1.1 Monte Carlo Sampling
Report issue for preceding element
ProTeGi Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
) uses Monte carlo sampling to explore combinatorial discrete solution spaces in an incremental fashion - it samples multiple textual gradients to use to generate prospective candidates, and spawns paraphrases as monte-carlo successors for evaluation. PromptAgent Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
) uses a tree-variant called Monte Carlo Tree Search (MCTS) which consists of 4 steps — Selection, Expansion, Simulation, and Backpropagation (also explained in Sec. 
6
https://arxiv.org/html/2502.16923v2#S6
).
Report issue for preceding element
5.1.2 Genetic Algorithm
Report issue for preceding element
A significant line of work applies the well-studied genetic algorithms to make discrete edits to texts. The common recipe for several genetic algorithms is 1/ Mutate and 2/ Cross-over components from promising candidates. Token mutations: SPRIG Zhang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib180
) and CLAPS perform token-level mutations. SPRIG uses a starting corpus of 300 components grouped into categories like COT, roles, styles, emotions, scenarios, and good properties. It performs add/rephrase/swap/delete, highlighting complementary strengths of optimizing system prompts alongside task-prompts (via methods like ProTeGi) to enhance accuracy across multiple diverse domains, languages, and tasks without needing repeated task-specific optimizations.
Report issue for preceding element
LLM-based mutation: LMEA Liu et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib90
) , SOS Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
) , and StraGo Wu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib164
) uses mutation prompts with LLMs to overcome the traditional complexity of designing tailored operators for cross-over / mutation. PromptBreeder Fernando et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib39
) advocates self-referential improvement of all prompts in the prompt optimization system - Direct Mutation of task prompts, Hypermutation of mutation prompts themselves, Lamarckian Mutation where prompts are reverse-engineered from successful examples (similar to Instruction Induction Honovich et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib52
) , and finally Crossover and Shuffling to improve diversity of the prompt pool. EvoPrompt Guo et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib47
) use Differential Evolution - where differences between existing prompts is incorporated to form new prompt candidates to overcome the problem of local optima. AELP Hsieh et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib55
) also uses mutation operators to perform sentence-level edits in an iterative fashion. They include sentence-level histories of reward { ( s t − 1 , s t , r t ) } subscript 𝑠 𝑡 1 subscript 𝑠 𝑡 subscript 𝑟 𝑡 {(s_{t-1},s_{t},r_{t})} { ( italic_s start_POSTSUBSCRIPT italic_t - 1 end_POSTSUBSCRIPT , italic_s start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT , italic_r start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ) } in the mutation prompt in order to avoid local optima and accidentally returning to sub-optimal versions. GPS Xu et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib166
) used Back-translation, Sentence Continuation, and Cloze transformations to perform prompt mutation. PromptWizard Agarwal et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib1
) proposed a pipeline combining several steps including iterative improvement, few shot example synthesis and selection, utilizing LLM's reasoning capability to improve and validate the prompt, and finally an expert persona to ensure consistency of the style of generated prompts.
Report issue for preceding element
5.1.3 Word / Phrase Level Edits
Report issue for preceding element
Several word-edit approaches first identify "influential" tokens in the prompts. COPLE Zhan et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib178
) argued that LLMs exhibit lexical sensitivity, showing that merely replacing a few words with their synonyms can yield significant improvements. First, “influential” tokens are identified where expected loss on dev-set E D v  a  l  [ L  ( y , y ^ ) ] subscript 𝐸 subscript 𝐷 𝑣 𝑎 𝑙 delimited-[] 𝐿 𝑦 ^ 𝑦 E_{D_{val}}[L(y,\hat{y})] italic_E start_POSTSUBSCRIPT italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT [ italic_L ( italic_y , over^ start_ARG italic_y end_ARG ) ] drops the most after removing that token versus the original prompt, and then influential tokens are replaced using predictions from a Masked-Language Models. This token-replacement approach is also attractive as a standalone post-processing step for long prompts that are already optimized using other LLM-based approaches. GRIPS Prasad et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib122
) argues that phrase level edition is an effective and interpretable method to optimize prompts, leveraging 4 basic edit operations -add, delete, paraphrase, and swap
Report issue for preceding element
5.1.4 Vocabulary Pruning
Report issue for preceding element
Some works prune the vocabulary space V 𝑉 V italic_V to V p  r  u  n  e  d subscript 𝑉 𝑝 𝑟 𝑢 𝑛 𝑒 𝑑 V_{pruned} italic_V start_POSTSUBSCRIPT italic_p italic_r italic_u italic_n italic_e italic_d end_POSTSUBSCRIPT for decoding the next token for the optimized prompt ρ ∗ superscript 𝜌 \rho^{*} italic_ρ start_POSTSUPERSCRIPT ∗ end_POSTSUPERSCRIPT . CLAPS Zhou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib185
) argued that general search spaces are highly redundant and use K-means clustering to find word-clusters and retain top-2000 words closest to cluster centroids. BDPL Diao et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib29
) used pairwise mutual information (PMI) to retain top co-occuring ngrams for decoding. PIN Choi et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib18
) instead added regularization in the form of Tsallis-entropy (ideal for heavy-tailed distributions like natural language) for the RL training of a prompt generation network, to reduce the probability mass for unlikely tokens and improve interpetability.
Report issue for preceding element
5.2 Editing via Auxiliary Trained NN
Report issue for preceding element
Some approaches leverage a trained auxiliary neural network to edit the initial prompt for obtaining desired improvements. We include approaches where the finetuned network is different and smaller than the task network.
Report issue for preceding element
5.2.1 Reinforcement-learning
Report issue for preceding element
Multi-objective Optimization techniques Jafari et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib59
) demonstrate superiority over simple reward averaging, particularly through volume-based methods that effectively balance competing objectives. Dynamic prompt modification strategies, introduced through prompt rewriting Kong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib73
) , directional stimulus prompting Li et al. ( 
2023d
https://arxiv.org/html/2502.16923v2#bib.bib84
) and test-time editing Zhang et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib181
) solve the important goal of moving beyond static prompt generation. Prompt-OIRL Sun et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib144
) also tackled test-time optimization objective by learning an offline reward model and subsequently using a best-of-N strategy to recommend the optimal prompt in a query-dependent fashion. BDPL Diao et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib29
) optimized discrete prompts using variance-reduced policy gradient algorithm to estimate gradients, allowing user devices to fine-tune tasks with limited API calls.
Report issue for preceding element
5.2.2 Finetuning LLMs
Report issue for preceding element
BPO Cheng et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib15
) trains a smaller 7B model to align itself to task-performance on individual LLMs using reward-free alignment. FIPO Lu et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib96
) trains a local model (7B - 13B) to perform prompt optimizations to preserve privacy and adapt to target models better leveraging both data diversification and strategic fine-tuning such as SFT, preference optimization, and iterative preference learning.
Report issue for preceding element
5.2.3 Generative Adversarial Networks
Report issue for preceding element
Long et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib94
) framed the prompt optimization process in the GAN setting. The LLM generator takes question and the generation prompt to produce output. The (input, output) pairs are evaluated by an LLM powered discriminator, whose goal is to identify generated pairs from ground truth pairs. Both generator and the discriminator are jointly optimized using adversarial loss, by utilizing a prompt modifier LLM to rewrite their prompts.
Report issue for preceding element
5.3 Metaprompt Design
Report issue for preceding element
PE2 Ye et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib174
) argued that previous works under-explored meta-prompt search space. OPRO (Yang et al., 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib169
) proposes a meta-prompt design (see Appendix 
14.2
https://arxiv.org/html/2502.16923v2#S14.SS2
) which includes the optimization problem description in natural language and previously generated solutions (multiple solutions per stage for diversity) and scores alongisde the meta-instruction for prompt refinement. DAPO Yang et al. ( 
2024c
https://arxiv.org/html/2502.16923v2#bib.bib171
) utilizes a well-designed meta-instruction to guide the LLM in generating high-quality and structured initial prompts (contain task-specific info, e.g. task type and description, output format and constraints, reasoning process, professional tips) by observing given input-output exemplars. Then, DAPO iteratively optimizes the prompts at the sentence level, leveraging previous tuning experience to expand prompt candidates.
Report issue for preceding element
5.4 Coverage-based
Report issue for preceding element
Some approaches seek to "cover" the entire problem space - either within a single prompt, or using multiple prompts working individually or in an ensemble during inference.
Report issue for preceding element
5.4.1 Single Prompt-expansion
Report issue for preceding element
AMPO Yang et al. ( 
2024d
https://arxiv.org/html/2502.16923v2#bib.bib172
) uses LLM feedback to enumerate all the failure cases based on the evaluation-set D v  a  l subscript 𝐷 𝑣 𝑎 𝑙 D_{val} italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT and then enlists each of them in the meta-instruction in an if-then-else format using 3 modules - 1/ Pattern Recognition, 2/ Branch Adjustment, and 3/ Branch Pruning to decide whether to enhance existing branches, or to grow new branches. Similarly, UNIPROMPT focused on explicitly ensuring that various semantic facets of a task get represented in the final prompt. It designs a human-like (manual) prompt engineering approach (UniPrompt) with two stages: a) task facets initialization using background knowledge, and b) refinement using examples.
Report issue for preceding element
5.4.2 Mixture of Experts
Report issue for preceding element
Wang et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib153
) introduced the Mixture-of-Expert-Prompts where each expert is a task-prompt to be used for specialized inference. MOP first clusters all demonstrations using K-means clustering. Then, the Region-based Joint Search (RBJS) (sec. 
6.3
https://arxiv.org/html/2502.16923v2#S6.SS3
) algorithm generates the appropriate instruction for each exemplar-cluster via instruction induction (sec. 
3.2
https://arxiv.org/html/2502.16923v2#S3.SS2
) based on a mix of in-cluster and out-of-cluster demonstrations to cover “blind-spots”. During inference, a single expert prompt is invoked whose cluster centroid μ c subscript 𝜇 𝑐 \mu_{c} italic_μ start_POSTSUBSCRIPT italic_c end_POSTSUBSCRIPT is closest to the instance-embedding arg  min C  ‖ ϕ  ( x i ) − μ c ‖ 2 subscript 𝐶 subscript norm italic-ϕ subscript 𝑥 𝑖 subscript 𝜇 𝑐 2 \arg\min_{{}
{C}}||\phi(x
{i})-\mu_{c}||_{2} roman_arg roman_min start_POSTSUBSCRIPT start_FLOATSUBSCRIPT italic_C end_FLOATSUBSCRIPT end_POSTSUBSCRIPT | | italic_ϕ ( italic_x start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) - italic_μ start_POSTSUBSCRIPT italic_c end_POSTSUBSCRIPT | | start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT .
Report issue for preceding element
5.4.3 Ensemble Methods
Report issue for preceding element
PromptBoosting Hou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib54
) , BoostedPrompting Pitis et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib120
) , PREFER Zhang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib179
) , etc. are ensemble methods that invoke multiple prompts during inference and combine them to generate the final output y ^ = y 0 + Σ m  β i  y i ^ 𝑦 subscript 𝑦 0 subscript Σ 𝑚 subscript 𝛽 𝑖 subscript 𝑦 𝑖 \hat{y}=y_{0}+\Sigma_{m}\beta_{i}y_{i} over^ start_ARG italic_y end_ARG = italic_y start_POSTSUBSCRIPT 0 end_POSTSUBSCRIPT + roman_Σ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT italic_β start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT italic_y start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT . GPO Li et al. ( 
2023c
https://arxiv.org/html/2502.16923v2#bib.bib83
) also uses labeled source data to generate an ensemble of prompts, which are applied to unlabeled target data to generate output through majority voting.
Report issue for preceding element
5.5 Program Synthesis
Report issue for preceding element
Program-synthesis based approaches transform LLM pipelines into structured, modular components that can be systematically optimized and composed. These optimization techniques iteratively refine instructions and demonstrations for each module to improve the entire pipeline's performance, DSP Khattab et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib68
) introduces a three-stage framework for retrieval-augmented inference: Demonstrate (generates task-specific demonstrations), Search (retrieves relevant information), and Predict (combines retrieved info with demonstrations). DSPY Khattab et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib69
) transforms LLM pipelines into text transformation graphs - introducing parameterized models, learning through demonstrations, and a compiler that optimizes pipelines. DLN Sordoni et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib142
) similarly considers chained LLM calls as stacked deep language networks performing variational inference, where the learnable parameters for each layer are task-decomposed prompt templates. MIPRO Opsahl-Ong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib112
) automates the optimization of multi-stage language model programs by improving instructions and demonstrations for each module. SAMMO Schnabel and Neville ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib130
) proposed symbolic prompt programming, representing prompts as directed-acyclic-graphs (DAG). A set of user-defined node mutation rules guide the mutation-search to find the optimal DAG, which is then converted back to a prompt.
Report issue for preceding element
6 Filter and Retain Promising Prompts
Report issue for preceding element
In this step, promising prompt candidates are filtered for further optimization.
Report issue for preceding element
6.1 TopK Greedy Search
Report issue for preceding element
The simplest mechanism to iteratively search through prompt candidate sets is a greedy topK search where in each iteration of the optimization, the top-K best-performing candidates on mini-batch of data instances D v  a  l subscript 𝐷 𝑣 𝑎 𝑙 D_{val} italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT are retained for further iterations (e.g. - ProTeGi, AELP. This differs from beam-search which judges partial solutions' based on the reward for the entire trajectory of prompt edits r  ( { ρ 1 1 , ρ 2 1 , … , ρ t 1 } ) 𝑟 superscript subscript 𝜌 1 1 superscript subscript 𝜌 2 1 … superscript subscript 𝜌 𝑡 1 r({\rho_{1}^{1},\rho_{2}^{1},\ldots,\rho_{t}^{1}}) italic_r ( { italic_ρ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , italic_ρ start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , … , italic_ρ start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT } ) .
Report issue for preceding element
6.2 Upper Confidence Bound and Variants
Report issue for preceding element
Relying on a single static evaluation dataset can lead to biases in the selection procedure and finally suboptimal solutions. ProTeGi, SPRIG, inter alia, cast the candidate prompt selection problem as that of bandit search - identifying the most suitable arm (prompt candidate) operating on a fixed computation budget. They use the Upper Confidence Bounds (UCB, Algorithm 
2
https://arxiv.org/html/2502.16923v2#alg2
) which balances exploration with exploitation. In each iteration of prompt optimization, they sample a different evaluation dataset D s  a  m  p  l  e ∈ D v  a  l subscript 𝐷 𝑠 𝑎 𝑚 𝑝 𝑙 𝑒 subscript 𝐷 𝑣 𝑎 𝑙 D_{sample}\in D_{val} italic_D start_POSTSUBSCRIPT italic_s italic_a italic_m italic_p italic_l italic_e end_POSTSUBSCRIPT ∈ italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT , and maintain a moving estimate of the optimality of each arm (i.e. prompt). In each iteration, the playout filters top-B prompt candidates with the greatest score for further exploration. PromptAgent uses a variation of UCB called UCB for Trees (UCT) which are used in the setting of contextual bandits (i.e. the action-space and the reward function is state-dependent). AELP Hsieh et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib55
) used a modification called Linear UCB Li et al. ( 
2010
https://arxiv.org/html/2502.16923v2#bib.bib82
) which uses a closed form linear estimate based on the reward trajectories of previously sampled edits as well as prompt embedding ϕ  ( s ) italic-ϕ 𝑠 \phi(s) italic_ϕ ( italic_s ) to select the next best-arm.
Report issue for preceding element
6.3 Region-based Joint Search
Report issue for preceding element
MOP Wang et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib153
) proposes a Mixture-of-Expert-Prompts performing prompt optimization for each expert individual. Once C exemplar-clusters are identified, the RBJS search first samples examples D e  x  e  m  p  l  a  r  s ∈ D C ∪ D ∖ D C subscript 𝐷 𝑒 𝑥 𝑒 𝑚 𝑝 𝑙 𝑎 𝑟 𝑠 subscript 𝐷 𝐶 𝐷 subscript 𝐷 𝐶 D_{exemplars}\in D_{C}\cup D\setminus D_{C} italic_D start_POSTSUBSCRIPT italic_e italic_x italic_e italic_m italic_p italic_l italic_a italic_r italic_s end_POSTSUBSCRIPT ∈ italic_D start_POSTSUBSCRIPT italic_C end_POSTSUBSCRIPT ∪ italic_D ∖ italic_D start_POSTSUBSCRIPT italic_C end_POSTSUBSCRIPT , and then uses APE to induct and optimize each expert instruction.
Report issue for preceding element
6.4 Metaheuristic Ensemble
Report issue for preceding element
PLUM Pan et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib115
) library offered a meta-heuristic ensemble of different search algorithms like Hill climbing, Simulated Annealing, Genetic Algorithms, Tabu Search, and Harmony Search.
Report issue for preceding element
7 Iteration Depth
Report issue for preceding element
7.1 Fixed Steps
Report issue for preceding element
Most approaches choose to carry out the prompt optimization for a fixed number of steps N.
Report issue for preceding element
7.2 Variable number of steps
Report issue for preceding element
GRIPS Prasad et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib122
) concludes search when successive iterations with negative gains breach a patience parameter, whereas PromptAgent concluded APO when r t ≤ ϵ m  i  n ∨ r t ≥ ϵ m  a  x subscript 𝑟 𝑡 subscript italic-ϵ 𝑚 𝑖 𝑛 subscript 𝑟 𝑡 subscript italic-ϵ 𝑚 𝑎 𝑥 r_{t}\leq\epsilon_{min}\vee r_{t}\geq\epsilon_{max} italic_r start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ≤ italic_ϵ start_POSTSUBSCRIPT italic_m italic_i italic_n end_POSTSUBSCRIPT ∨ italic_r start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ≥ italic_ϵ start_POSTSUBSCRIPT italic_m italic_a italic_x end_POSTSUBSCRIPT .
Report issue for preceding element
8 Theoretical Perspectives
Report issue for preceding element
8.1 Upper Bound of Improvement from APO
Report issue for preceding element
AlignPro Trivedi et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib149
) establishes an upper bound on the gains realizable from discrete prompt optimization under a given prompt optimizer and also a suboptimality-gap w.r.t. RLHF-optimal policy π ∗ superscript 𝜋 \pi^{*} italic_π start_POSTSUPERSCRIPT ∗ end_POSTSUPERSCRIPT , while a lower bound is left unexplored.
Report issue for preceding element
8.2 Other Related Perspectives
Report issue for preceding element
Bhargava et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib7
) proposed a control theoretic framework to establish bounds on the set of reachable LLM-outputs for self-attention in terms of the singular values of its weight matrices. Liu et al. ( 
2024c
https://arxiv.org/html/2502.16923v2#bib.bib92
) showed the existence of a strong transformer that can approximate any sequence-to-sequence Lipschitz function. They also showed the existence of “difficult” datasets that depth-limited transformers could not commit to memory.
Report issue for preceding element
9 Challenges and Future Directions
Report issue for preceding element
9.1 Task-agnostic APO
Report issue for preceding element
All the surveyed APO methods assume that the task type T 𝑇 T italic_T is known beforehand; additionally offline APO methods also require an evaluation set D v  a  l subscript 𝐷 𝑣 𝑎 𝑙 D_{val} italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT , something not explicitly available in production settings. Barring a few tasks covered by Joko et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib65
); Sun et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib144
); Zhang et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib181
); Choi et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib18
) , inference-time optimization of multiple unknown tasks is underexplored. More robust evaluations are needed for task-agnostic APO systems combining seen and unseen tasks.
Report issue for preceding element
9.2 Unclear Mechanisms
Report issue for preceding element
Melamed et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib103
) showed that prompts have so-called 'evil twins' that are uninterpretable yet recover some of the performance of gold-standard prompts. Lu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib98
) showed that rare gibberish strings can serve as competitive delimiters τ 𝜏 \tau italic_τ in prompts. Yang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib170
) showed that self-reflection by LLMs can suffer from incorrect error identification, prior biases, semantic invalidity, leading to failure in yielding improved prompts. More studies are needed to better uncover the mechanisms of prompt optimization.
Report issue for preceding element
9.3 APO for System Prompts / Agents
Report issue for preceding element
Although SPRIG explored optimizing system prompts in chat-style settings, scalability remains a challenge - optimizing system prompts required a predefined corpus and close to 60 hours whereas Protegi only needed 1̃0 minutes per task. Similarly, optimizing prompts for several components in an agentic system in a concurrent fashion poses an exciting direction for future research.
Report issue for preceding element
9.4 Multimodal APO
Report issue for preceding element
Recently, textual prompt optimization has expanded to multimodal domains: text-to-image Liu et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib91
); Mañas et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib101
); Liu et al. ( 
2024d
https://arxiv.org/html/2502.16923v2#bib.bib93
) , text-to-video Ji et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib60
) , text-to-audio Huang et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib58
) , and text-image alignment models like CLIP Du et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib34
); Mirza et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib104
) . Beyond textual prompts, Huang et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib58
) explore optimizing multimodal inputs, such as images, to elicit better responses from large multimodal models. However, the interplay between modalities in prompt optimization remains underexplored. Future research could develop APO frameworks to jointly optimize multimodal prompts (eg - remove background noise from audio, add visual markers to videos, etc.) to fully leverage their synergies.
Report issue for preceding element
10 Conclusion
Report issue for preceding element
In this paper, we provide a comprehensive fine-grained review of existing APO techniques and identified key areas for future growth. It is our aim to spur future research spawning from our survey.
Report issue for preceding element
11 Limitations
Report issue for preceding element
While we attempted to cover all qualifying papers, it is possible that we may have unintentionally missed out on some relevant papers. We also mention some of the papers that were excluded in this survey with specific reasons in section 
12.2
https://arxiv.org/html/2502.16923v2#S12.SS2
. Also, we realize that fitting varied research works into a single unifying framework might risk broad categorizations for some papers, or skipping some characteristics for others (e.g. Tempera Zhang et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib181
) consists of both RL-based and word/phrase-level editing techniques, applied to both instructions and exemplars). In such cases, we categorize a paper based on its most salient features. Another challenge is that when presenting a survey paper under 8 pages, we had to make tradeoffs and only retain content in the main body that was deemed most necessary. This resulted in having to relegate a core contribution (Tables 
2
https://arxiv.org/html/2502.16923v2#S13.T2
, 
3
https://arxiv.org/html/2502.16923v2#S13.T3
, 
4
https://arxiv.org/html/2502.16923v2#S13.T4
) which contained a rigorous comparison of all the surveyed papers into the appendix. We have attempted our best to strike the right balance between specificity and brevity to present a novel framework. We also provide copious references to interested researchers for further reading.
Report issue for preceding element
References
Report issue for preceding element
Agarwal et al. (2024) ↑ Eshaan Agarwal, Joykirat Singh, Vivek Dani, Raghav Magazine, Tanuja Ganu, and Akshay Nambi. 2024. 
Promptwizard: Task-aware prompt optimization framework
http://arxiv.org/abs/2405.18369
.
Alva-Manchego et al. (2020) ↑ Fernando Alva-Manchego, Louis Martin, Antoine Bordes, Carolina Scarton, Benoît Sagot, and Lucia Specia. 2020. Asset: A dataset for tuning and evaluation of sentence simplification models with multiple rewriting transformations. In 
Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics
, pages 4668–4679.
Amini et al. (2024) ↑ Afra Amini, Tim Vieira, and Ryan Cotterell. 2024. 
Direct preference optimization with an offset
https://doi.org/10.18653/v1/2024.findings-acl.592
. In 
Findings of the Association for Computational Linguistics: ACL 2024
, pages 9954–9972, Bangkok, Thailand. Association for Computational Linguistics.
Anantha et al. (2020) ↑ R. Anantha, Svitlana Vakulenko, Zhucheng Tu, S. Longpre, Stephen G. Pulman, and Srinivas Chappidi. 2020. 
Open-domain question answering goes conversational via question rewriting
https://api.semanticscholar.org/CorpusID:222290679
. In 
North American Chapter of the Association for Computational Linguistics
.
Andreas et al. (2020) ↑ Jacob Andreas, Johannes Bufe, David Burkett, Charles C. Chen, Joshua Clausman, Jean Crawford, Kate Crim, Jordan DeLoach, Leah Dorner, Jason Eisner, Hao Fang, Alan Guo, David Leo Wright Hall, Kristin Delia Hayes, Kellie Hill, Diana Ho, Wendy Iwaszuk, Smriti Jha, Dan Klein, Jayant Krishnamurthy, Theo Lanman, Percy Liang, C. H. Lin, Ilya Lintsbakh, Andy McGovern, Aleksandr Nisnevich, Adam Pauls, Dmitrij Petters, Brent Read, Dan Roth, Subhro Roy, Jesse Rusak, Beth Ann Short, Div Slomin, B Snyder, Stephon Striplin, Yu Su, Zachary Tellman, Sam Thomson, A. A. Vorobev, Izabela Witoszko, Jason Wolfe, A. G. Wray, Yuchen Zhang, and Alexander Zotov. 2020. 
Task-oriented dialogue as dataflow synthesis
https://api.semanticscholar.org/CorpusID:221822514
. 
Transactions of the Association for Computational Linguistics
, 8:556–571.
Bansal et al. (2019) ↑ Trapit Bansal, Rishikesh Jha, and Andrew McCallum. 2019. 
Learning to few-shot learn across diverse natural language classification tasks
https://api.semanticscholar.org/CorpusID:207852358
. In 
International Conference on Computational Linguistics
.
Bhargava et al. (2024) ↑ Aman Bhargava, Cameron Witkowski, Shi-Zhuo Looi, and Matt Thomson. 2024. 
What's the magic word? a control theory of llm prompting
http://arxiv.org/abs/2310.04444
.
Bisk et al. (2019) ↑ Yonatan Bisk, Rowan Zellers, Ronan Le Bras, Jianfeng Gao, and Yejin Choi. 2019. 
Piqa: Reasoning about physical commonsense in natural language
https://api.semanticscholar.org/CorpusID:208290939
. In 
AAAI Conference on Artificial Intelligence
.
Bowman et al. (2015) ↑ Samuel R Bowman, Gabor Angeli, Christopher Potts, and Christopher D Manning. 2015. A large annotated corpus for learning natural language inference. 
arXiv preprint arXiv:1508.05326
.
Brown et al. (2020) ↑ Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. 2020. 
Language models are few-shot learners
http://arxiv.org/abs/2005.14165
.
Budzianowski et al. (2018) ↑ Paweł Budzianowski, Tsung-Hsien Wen, Bo-Hsiang Tseng, Iñigo Casanueva, Stefan Ultes, Osman Ramadan, and Milica Gasic. 2018. Multiwoz-a large-scale multi-domain wizard-of-oz dataset for task-oriented dialogue modelling. In 
Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing
, pages 5016–5026.
Cer et al. (2017) ↑ Daniel Matthew Cer, Mona T. Diab, Eneko Agirre, Iñigo Lopez-Gazpio, and Lucia Specia. 2017. 
Semeval-2017 task 1: Semantic textual similarity multilingual and crosslingual focused evaluation
https://api.semanticscholar.org/CorpusID:4421747
. In 
International Workshop on Semantic Evaluation
.
Cettolo et al. (2017) ↑ Mauro Cettolo, Marcello Federico, Luisa Bentivogli, Niehues Jan, Stüker Sebastian, Sudoh Katsuitho, Yoshino Koichiro, and Federmann Christian. 2017. 
Overview of the iwslt 2017 evaluation campaign
https://api.semanticscholar.org/CorpusID:21675165
. In 
International Workshop on Spoken Language Translation
.
Chen et al. (2024) ↑ Yongchao Chen, Jacob Arkin, Yilun Hao, Yang Zhang, Nicholas Roy, and Chuchu Fan. 2024. 
PRompt optimization in multi-step tasks (PROMST): Integrating human feedback and heuristic-based sampling
https://doi.org/10.18653/v1/2024.emnlp-main.226
. In 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing
, pages 3859–3920, Miami, Florida, USA. Association for Computational Linguistics.
Cheng et al. (2024) ↑ Jiale Cheng, Xiao Liu, Kehan Zheng, Pei Ke, Hongning Wang, Yuxiao Dong, Jie Tang, and Minlie Huang. 2024. 
Black-box prompt optimization: Aligning large language models without model training
https://doi.org/10.18653/v1/2024.acl-long.176
. In 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 3201–3219, Bangkok, Thailand. Association for Computational Linguistics.
Chiang et al. (2023) ↑ Wei-Lin Chiang, Zhuohan Li, Zi Lin, Ying Sheng, Zhanghao Wu, Hao Zhang, Lianmin Zheng, Siyuan Zhuang, Yonghao Zhuang, Joseph E Gonzalez, et al. 2023. Vicuna: An open-source chatbot impressing gpt-4 with 90%* chatgpt quality. 
See https://vicuna. lmsys. org (accessed 14 April 2023)
, 2(3):6.
Choi et al. (2023) ↑ Minje Choi, Jiaxin Pei, Sagar Kumar, Chang Shu, and David Jurgens. 2023. Do llms understand social knowledge? evaluating the sociability of large language models with socket benchmark. In 
Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing
, pages 11370–11403.
Choi et al. (2024) ↑ Yunseon Choi, Sangmin Bae, Seonghyun Ban, Minchan Jeong, Chuheng Zhang, Lei Song, Li Zhao, Jiang Bian, and Kee-Eung Kim. 2024. 
Hard prompts made interpretable: Sparse entropy regularization for prompt tuning with rl
http://arxiv.org/abs/2407.14733
.
Cieri et al. (2022) ↑ Christopher Cieri, Mark Liberman, Sunghye Cho, Stephanie Strassel, James Fiumara, and Jonathan Wright. 2022. 
Reflections on 30 years of language resource development and sharing
https://aclanthology.org/2022.lrec-1.57
. In 
Proceedings of the Thirteenth Language Resources and Evaluation Conference
, pages 543–550, Marseille, France. European Language Resources Association.
Clark et al. (2018) ↑ Peter Clark, Isaac Cowhey, Oren Etzioni, Tushar Khot, Ashish Sabharwal, Carissa Schoenick, and Oyvind Tafjord. 2018. 
Think you have solved question answering? try arc, the ai2 reasoning challenge
https://api.semanticscholar.org/CorpusID:3922816
. 
ArXiv
, abs/1803.05457.
Cobbe et al. (2021) ↑ Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, et al. 2021. Training verifiers to solve math word problems. 
arXiv preprint arXiv:2110.14168
.
Conover et al. (2023) ↑ Mike Conover, Matt Hayes, Ankit Mathur, Jianwei Xie, Jun Wan, Sam Shah, Ali Ghodsi, Patrick Wendell, Matei Zaharia, and Reynold Xin. 2023. Free dolly: Introducing the world's first truly open instruction-tuned llm. 
Company Blog of Databricks
.
Cui et al. (2020) ↑ Leyang Cui, Yu Wu, Shujie Liu, Yue Zhang, and Ming Zhou. 2020. 
Mutual: A dataset for multi-turn dialogue reasoning
https://api.semanticscholar.org/CorpusID:215548215
. 
ArXiv
, abs/2004.04494.
Dagan et al. (2005) ↑ Ido Dagan, Oren Glickman, and Bernardo Magnini. 2005. 
The pascal recognising textual entailment challenge
https://api.semanticscholar.org/CorpusID:8587959
. In 
Machine Learning Challenges Workshop
.
de Marneffe et al. (2019) ↑ Marie-Catherine de Marneffe, Mandy Simons, and Judith Tonhauser. 2019. 
The commitmentbank: Investigating projection in naturally occurring discourse
https://api.semanticscholar.org/CorpusID:203595067
.
Deng et al. (2022) ↑ Mingkai Deng, Jianyu Wang, Cheng-Ping Hsieh, Yihan Wang, Han Guo, Tianmin Shu, Meng Song, Eric P. Xing, and Zhiting Hu. 2022. 
Rlprompt: Optimizing discrete text prompts with reinforcement learning
http://arxiv.org/abs/2205.12548
.
Dernoncourt and Lee (2017) ↑ Franck Dernoncourt and Ji Young Lee. 2017. 
Pubmed 200k rct: a dataset for sequential sentence classification in medical abstracts
https://api.semanticscholar.org/CorpusID:151184
. In 
International Joint Conference on Natural Language Processing
.
Detrano et al. (1989) ↑ Robert C. Detrano, András Jánosi, Walter Steinbrunn, Matthias Emil Pfisterer, Johann-Jakob Schmid, Sarbjit Sandhu, Kern Guppy, Stella Lee, and Victor Froelicher. 1989. 
International application of a new probability algorithm for the diagnosis of coronary artery disease.
https://api.semanticscholar.org/CorpusID:23545303
 
The American journal of cardiology
, 64 5:304–10.
Diao et al. (2022) ↑ Shizhe Diao, Zhichao Huang, Ruijia Xu, Xuechun Li, Yong Lin, Xiao Zhou, and Tong Zhang. 2022. Black-box prompt learning for pre-trained language models. 
arXiv preprint arXiv:2201.08531
.
Doğan et al. (2014) ↑ Rezarta Islamaj Doğan, Robert Leaman, and Zhiyong Lu. 2014. Ncbi disease corpus: a resource for disease name recognition and concept normalization. 
Journal of biomedical informatics
, 47:1–10.
Dolan and Brockett (2005) ↑ William B. Dolan and Chris Brockett. 2005. 
Automatically constructing a corpus of sentential paraphrases
https://api.semanticscholar.org/CorpusID:16639476
. In 
International Joint Conference on Natural Language Processing
.
Dong et al. (2024a) ↑ Qingxiu Dong, Lei Li, Damai Dai, Ce Zheng, Jingyuan Ma, Rui Li, Heming Xia, Jingjing Xu, Zhiyong Wu, Baobao Chang, Xu Sun, Lei Li, and Zhifang Sui. 2024a. 
A survey on in-context learning
https://doi.org/10.18653/v1/2024.emnlp-main.64
. In 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing
, pages 1107–1128, Miami, Florida, USA. Association for Computational Linguistics.
Dong et al. (2024b) ↑ Yihong Dong, Kangcheng Luo, Xue Jiang, Zhi Jin, and Ge Li. 2024b. 
PACE: Improving prompt with actor-critic editing for large language model
https://doi.org/10.18653/v1/2024.findings-acl.436
. In 
Findings of the Association for Computational Linguistics: ACL 2024
, pages 7304–7323, Bangkok, Thailand. Association for Computational Linguistics.
Du et al. (2024) ↑ Yingjun Du, Wenfang Sun, and Cees GM Snoek. 2024. Ipo: Interpretable prompt optimization for vision-language models. 
arXiv preprint arXiv:2410.15397
.
Dua et al. (2019) ↑ Dheeru Dua, Yizhong Wang, Pradeep Dasigi, Gabriel Stanovsky, Sameer Singh, and Matt Gardner. 2019. 
Drop: A reading comprehension benchmark requiring discrete reasoning over paragraphs
https://api.semanticscholar.org/CorpusID:67855846
. In 
North American Chapter of the Association for Computational Linguistics
.
Dumitrescu et al. (2021) ↑ Stefan Daniel Dumitrescu, Petru Rebeja, Beáta Lőrincz, Mihaela Găman, Mihai Daniel Ilie, Andrei Pruteanu, Adriana Stan, Luciana Morogan, Traian Rebedea, and Sebastian Ruder. 2021. 
Liro: Benchmark and leaderboard for romanian language tasks
https://api.semanticscholar.org/CorpusID:237259105
. In 
NeurIPS Datasets and Benchmarks
.
Farha and Magdy (2020a) ↑ Ibrahim Abu Farha and Walid Magdy. 2020a. 
From arabic sentiment analysis to sarcasm detection: The arsarcasm dataset
https://api.semanticscholar.org/CorpusID:219301519
. In 
OSACT
.
Farha and Magdy (2020b) ↑ Ibrahim Abu Farha and Walid Magdy. 2020b. 
From arabic sentiment analysis to sarcasm detection: The arsarcasm dataset
https://api.semanticscholar.org/CorpusID:219301519
. In 
OSACT
.
Fernando et al. (2023) ↑ Chrisantha Fernando, Dylan Banarse, Henryk Michalewski, Simon Osindero, and Tim Rocktäschel. 2023. 
Promptbreeder: Self-referential self-improvement via prompt evolution
https://api.semanticscholar.org/CorpusID:263310323
. 
ArXiv
, abs/2309.16797.
Fisher (1936) ↑ Rory A. Fisher. 1936. 
The use of multiple measurements in taxonomic problems
https://api.semanticscholar.org/CorpusID:29084021
. 
Annals of Human Genetics
, 7:179–188.
Garcia et al. (2020) ↑ Noa Garcia, Chentao Ye, Zihua Liu, Qingtao Hu, Mayu Otani, Chenhui Chu, Yuta Nakashima, and Teruko Mitamura. 2020. A dataset and baselines for visual question answering on art. In 
European Conference on Computer Vision
, pages 92–108.
Garc'ia-Orteg'on et al. (2021) ↑ Miguel Garc'ia-Orteg'on, Gregor N. C. Simm, Austin Tripp, José Miguel Hernández-Lobato, Andreas Bender, and Sergio Bacallado. 2021. 
Dockstring: Easy molecular docking yields better benchmarks for ligand design
https://api.semanticscholar.org/CorpusID:240288398
. 
Journal of Chemical Information and Modeling
, 62:3486 – 3502.
Gardent et al. (2017) ↑ Claire Gardent, Anastasia Shimorina, Shashi Narayan, and Laura Perez-Beltrachini. 2017. 
Creating training corpora for nlg micro-planners
https://api.semanticscholar.org/CorpusID:6702871
. In 
Annual Meeting of the Association for Computational Linguistics
.
Geva et al. (2021) ↑ Mor Geva, Daniel Khashabi, Elad Segal, Tushar Khot, Dan Roth, and Jonathan Berant. 2021. 
Did aristotle use a laptop? a question answering benchmark with implicit reasoning strategies
https://api.semanticscholar.org/CorpusID:230799347
. 
Transactions of the Association for Computational Linguistics
, 9:346–361.
Gliwa et al. (2019) ↑ Bogdan Gliwa, Iwona Mochol, Maciej Biesek, and Aleksander Wawer. 2019. Samsum corpus: A human-annotated dialogue dataset for abstractive summarization. In 
Proceedings of the 2nd Workshop on New Frontiers in Summarization
, pages 70–79.
Gunasekara et al. (2019) ↑ Chulaka Gunasekara, Jonathan K. Kummerfeld, Lazaros Polymenakos, and Walter S. Lasecki. 2019. 
Dstc7 task 1: Noetic end-to-end response selection
https://api.semanticscholar.org/CorpusID:85537312
. 
Proceedings of the First Workshop on NLP for Conversational AI
.
Guo et al. (2024) ↑ Qingyan Guo, Rui Wang, Junliang Guo, Bei Li, Kaitao Song, Xu Tan, Guoqing Liu, Jiang Bian, and Yujiu Yang. 2024. 
Connecting large language models with evolutionary algorithms yields powerful prompt optimizers
https://openreview.net/forum?id=ZG3RaNIsO8
. In 
The Twelfth International Conference on Learning Representations
.
He et al. (2025) ↑ Han He, Qianchu Liu, Lei Xu, Chaitanya Shivade, Yi Zhang, Sundararajan Srinivasan, and Katrin Kirchhoff. 2025. 
Crispo: Multi-aspect critique-suggestion-guided automatic prompt optimization for text generation
http://arxiv.org/abs/2410.02748
.
Hendrycks et al. (2020) ↑ Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Xiaodong Song, and Jacob Steinhardt. 2020. 
Measuring massive multitask language understanding
https://api.semanticscholar.org/CorpusID:221516475
. 
ArXiv
, abs/2009.03300.
(50) ↑ Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, Eric Tang, Dawn Song, and Jacob Steinhardt. Measuring mathematical problem solving with the math dataset. In 
Thirty-fifth Conference on Neural Information Processing Systems Datasets and Benchmarks Track (Round 2)
.
Honovich et al. (2022) ↑ Or Honovich, Uri Shaham, Samuel R. Bowman, and Omer Levy. 2022. 
Instruction induction: From few examples to natural language task descriptions
https://api.semanticscholar.org/CorpusID:248986755
. 
ArXiv
, abs/2205.10782.
Honovich et al. (2023) ↑ Or Honovich, Uri Shaham, Samuel R. Bowman, and Omer Levy. 2023. 
Instruction induction: From few examples to natural language task descriptions
https://doi.org/10.18653/v1/2023.acl-long.108
. In 
Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 1935–1952, Toronto, Canada. Association for Computational Linguistics.
Hosseini et al. (2014) ↑ Mohammad Javad Hosseini, Hannaneh Hajishirzi, Oren Etzioni, and Nate Kushman. 2014. 
Learning to solve arithmetic word problems with verb categorization
https://api.semanticscholar.org/CorpusID:428579
. In 
Conference on Empirical Methods in Natural Language Processing
.
Hou et al. (2023) ↑ Bairu Hou, Joe O'Connor, Jacob Andreas, Shiyu Chang, and Yang Zhang. 2023. Promptboosting: black-box text classification with ten forward passes. In 
Proceedings of the 40th International Conference on Machine Learning
, ICML'23. JMLR.org.
Hsieh et al. (2024) ↑ Cho-Jui Hsieh, Si Si, Felix Yu, and Inderjit Dhillon. 2024. 
Automatic engineering of long prompts
https://doi.org/10.18653/v1/2024.findings-acl.634
. In 
Findings of the Association for Computational Linguistics: ACL 2024
, page 10672—10685, Bangkok, Thailand. Association for Computational Linguistics.
Hu and Liu (2004) ↑ Minqing Hu and Bing Liu. 2004. 
Mining and summarizing customer reviews
https://api.semanticscholar.org/CorpusID:207155218
. 
Proceedings of the tenth ACM SIGKDD international conference on Knowledge discovery and data mining
.
Huang et al. (2019) ↑ Lifu Huang, Ronan Le Bras, Chandra Bhagavatula, and Yejin Choi. 2019. Cosmos qa: Machine reading comprehension with contextual commonsense reasoning. In 
Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)
, pages 2391–2401.
Huang et al. (2023) ↑ Rongjie Huang, Jiawei Huang, Dongchao Yang, Yi Ren, Luping Liu, Mingze Li, Zhenhui Ye, Jinglin Liu, Xiang Yin, and Zhou Zhao. 2023. Make-an-audio: Text-to-audio generation with prompt-enhanced diffusion models. In 
International Conference on Machine Learning
, pages 13916–13932. PMLR.
Jafari et al. (2024) ↑ Yasaman Jafari, Dheeraj Mekala, Rose Yu, and Taylor Berg-Kirkpatrick. 2024. 
Morl-prompt: An empirical analysis of multi-objective reinforcement learning for discrete prompt optimization
http://arxiv.org/abs/2402.11711
.
Ji et al. (2024) ↑ Yatai Ji, Jiacheng Zhang, Jie Wu, Shilong Zhang, Shoufa Chen, Chongjian GE, Peize Sun, Weifeng Chen, Wenqi Shao, Xuefeng Xiao, et al. 2024. Prompt-a-video: Prompt your video diffusion model via preference-aligned llm. 
arXiv preprint arXiv:2412.15156
.
Jiang et al. (2020) ↑ Yichen Jiang, Shikha Bordia, Zheng Zhong, Charles Dognin, Maneesh Kumar Singh, and Mohit Bansal. 2020. 
Hover: A dataset for many-hop fact extraction and claim verification
https://api.semanticscholar.org/CorpusID:226278099
. In 
Findings
.
Jin et al. (2024) ↑ Can Jin, Hongwu Peng, Shiyu Zhao, Zhenting Wang, Wujiang Xu, Ligong Han, Jiahui Zhao, Kai Zhong, Sanguthevar Rajasekaran, and Dimitris N. Metaxas. 2024. 
Apeer: Automatic prompt engineering enhances large language model reranking
http://arxiv.org/abs/2406.14449
.
Jin et al. (2020) ↑ Di Jin, Eileen Pan, Nassim Oufattole, Wei-Hung Weng, Hanyi Fang, and Peter Szolovits. 2020. 
What disease does this patient have? a large-scale open domain question answering dataset from medical exams
https://api.semanticscholar.org/CorpusID:221970190
. 
ArXiv
, abs/2009.13081.
Jin et al. (2019) ↑ Qiao Jin, Bhuwan Dhingra, Zhengping Liu, William Cohen, and Xinghua Lu. 2019. Pubmedqa: A dataset for biomedical research question answering. In 
Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)
, pages 2567–2577.
Joko et al. (2024) ↑ Hideaki Joko, Shubham Chatterjee, Andrew Ramsay, Arjen P De Vries, Jeff Dalton, and Faegheh Hasibi. 2024. Doing personal laps: Llm-augmented dialogue construction for personalized multi-session conversational search. In 
Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval
, pages 796–806.
Juneja et al. (2024) ↑ Gurusha Juneja, Nagarajan Natarajan, Hua Li, Jian Jiao, and Amit Sharma. 2024. Task facet learning: A structured approach to prompt optimization. 
arXiv preprint arXiv:2406.10504
.
Jurgens et al. (2018) ↑ David Jurgens, Srijan Kumar, Raine Hoover, Daniel A. McFarland, and Dan Jurafsky. 2018. 
Measuring the evolution of a scientific field through citation frames
https://api.semanticscholar.org/CorpusID:51917388
. 
Transactions of the Association for Computational Linguistics
, 6:391–406.
Khattab et al. (2022) ↑ Omar Khattab, Keshav Santhanam, Xiang Lisa Li, David Hall, Percy Liang, Christopher Potts, and Matei Zaharia. 2022. Demonstrate-search-predict: Composing retrieval and language models for knowledge-intensive nlp. 
arXiv preprint arXiv:2212.14024
.
Khattab et al. (2024) ↑ Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia, and Christopher Potts. 2024. Dspy: Compiling declarative language model calls into self-improving pipelines.
Kiesel et al. (2019) ↑ Johannes Kiesel, Maria Mestre, Rishabh Shukla, Emmanuel Vincent, Payam Adineh, D. Corney, Benno Stein, and Martin Potthast. 2019. 
Semeval-2019 task 4: Hyperpartisan news detection
https://api.semanticscholar.org/CorpusID:120224153
. In 
International Workshop on Semantic Evaluation
.
Kojima et al. (2023) ↑ Takeshi Kojima, Shixiang Shane Gu, Machel Reid, Yutaka Matsuo, and Yusuke Iwasawa. 2023. 
Large language models are zero-shot reasoners
http://arxiv.org/abs/2205.11916
.
Koncel-Kedziorski et al. (2015) ↑ Rik Koncel-Kedziorski, Hannaneh Hajishirzi, Ashish Sabharwal, Oren Etzioni, and Siena Dumas Ang. 2015. 
Parsing algebraic word problems into equations
https://api.semanticscholar.org/CorpusID:4894130
. 
Transactions of the Association for Computational Linguistics
, 3:585–597.
Kong et al. (2024) ↑ Weize Kong, Spurthi Amba Hombaiah, Mingyang Zhang, Qiaozhu Mei, and Michael Bendersky. 2024. 
Prewrite: Prompt rewriting with reinforcement learning
http://arxiv.org/abs/2401.08189
.
Kumar et al. (2024) ↑ Shanu Kumar, Akhila Yesantarao Venkata, Shubhanshu Khandelwal, Bishal Santra, Parag Agrawal, and Manish Gupta. 2024. 
Sculpt: Systematic tuning of long prompts
http://arxiv.org/abs/2410.20788
.
Kwiatkowski et al. (2019) ↑ Tom Kwiatkowski, Jennimaria Palomaki, Olivia Redfield, Michael Collins, Ankur Parikh, Chris Alberti, Danielle Epstein, Illia Polosukhin, Jacob Devlin, Kenton Lee, et al. 2019. Natural questions: a benchmark for question answering research. 
Transactions of the Association for Computational Linguistics
, 7:453–466.
Lai et al. (2017) ↑ Guokun Lai, Qizhe Xie, Hanxiao Liu, Yiming Yang, and Eduard Hovy. 2017. Race: Large-scale reading comprehension dataset from examinations. 
arXiv preprint arXiv:1704.04683
.
Lee et al. (2019) ↑ Kenton Lee, Ming-Wei Chang, and Kristina Toutanova. 2019. 
Latent retrieval for weakly supervised open domain question answering
https://api.semanticscholar.org/CorpusID:173990818
. 
ArXiv
, abs/1906.00300.
Lester et al. (2021) ↑ Brian Lester, Rami Al-Rfou, and Noah Constant. 2021. 
The power of scale for parameter-efficient prompt tuning
https://doi.org/10.18653/v1/2021.emnlp-main.243
. In 
Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing
, pages 3045–3059, Online and Punta Cana, Dominican Republic. Association for Computational Linguistics.
Levesque et al. (2011) ↑ Hector J. Levesque, Ernest Davis, and L. Morgenstern. 2011. 
The winograd schema challenge
https://api.semanticscholar.org/CorpusID:15710851
. In 
AAAI Spring Symposium: Logical Formalizations of Commonsense Reasoning
.
Li et al. (2023a) ↑ Bei Li, Rui Wang, Junliang Guo, Kaitao Song, Xu Tan, Hany Hassan, Arul Menezes, Tong Xiao, Jiang Bian, and JingBo Zhu. 2023a. 
Deliberate then generate: Enhanced prompting framework for text generation
http://arxiv.org/abs/2305.19835
.
Li et al. (2023b) ↑ Cheng Li, Jindong Wang, Yixuan Zhang, Kaijie Zhu, Wenxin Hou, Jianxun Lian, Fang Luo, Qiang Yang, and Xing Xie. 2023b. Large language models understand and can be enhanced by emotional stimuli. 
arXiv preprint arXiv:2307.11760
.
Li et al. (2010) ↑ Lihong Li, Wei Chu, John Langford, and Robert E. Schapire. 2010. 
A contextual-bandit approach to personalized news article recommendation
https://doi.org/10.1145/1772690.1772758
. In 
Proceedings of the 19th International Conference on World Wide Web
, WWW '10, page 661–670, New York, NY, USA. Association for Computing Machinery.
Li et al. (2023c) ↑ Moxin Li, Wenjie Wang, Fuli Feng, Yixin Cao, Jizhi Zhang, and Tat-Seng Chua. 2023c. 
Robust prompt optimization for large language models against distribution shifts
https://doi.org/10.18653/v1/2023.emnlp-main.95
. In 
Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing
, pages 1539–1554, Singapore. Association for Computational Linguistics.
Li et al. (2023d) ↑ Zekun Li, Baolin Peng, Pengcheng He, Michel Galley, Jianfeng Gao, and Xifeng Yan. 2023d. Guiding large language models via directional stimulus prompting. 
arXiv preprint arXiv:2302.11520
.
Lin et al. (2022) ↑ Stephanie Lin, Jacob Hilton, and Owain Evans. 2022. Truthfulqa: Measuring how models mimic human falsehoods. In 
Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 3214–3252.
Lin et al. (2014) ↑ Tsung-Yi Lin, Michael Maire, Serge Belongie, James Hays, Pietro Perona, Deva Ramanan, Piotr Dollár, and C Lawrence Zitnick. 2014. Microsoft coco: Common objects in context. In 
Computer Vision–ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part V 13
, pages 740–755. Springer.
Lin et al. (2024) ↑ Xiaoqiang Lin, Zhongxiang Dai, Arun Verma, See-Kiong Ng, Patrick Jaillet, and Bryan Kian Hsiang Low. 2024. 
Prompt optimization with human feedback
http://arxiv.org/abs/2405.17346
.
Ling et al. (2017) ↑ Wang Ling, Dani Yogatama, Chris Dyer, and Phil Blunsom. 2017. 
Program induction by rationale generation: Learning to solve and explain algebraic word problems
https://api.semanticscholar.org/CorpusID:12777818
. In 
Annual Meeting of the Association for Computational Linguistics
.
Liu et al. (2024a) ↑ Nelson F Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, and Percy Liang. 2024a. Lost in the middle: How language models use long contexts. 
Transactions of the Association for Computational Linguistics
, 12:157–173.
Liu et al. (2023) ↑ Shengcai Liu, Caishun Chen, Xinghua Qu, Ke Tang, and Yew Soon Ong. 2023. 
Large language models as evolutionary optimizers
https://api.semanticscholar.org/CorpusID:264829031
. 
2024 IEEE Congress on Evolutionary Computation (CEC)
, pages 1–8.
Liu et al. (2024b) ↑ Shihong Liu, Samuel Yu, Zhiqiu Lin, Deepak Pathak, and Deva Ramanan. 2024b. Language models as black-box optimizers for vision-language models. In 
Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition
, pages 12687–12697.
Liu et al. (2024c) ↑ Xiaogeng Liu, Zhiyuan Yu, Yizhe Zhang, Ning Zhang, and Chaowei Xiao. 2024c. 
Automatic and universal prompt injection attacks against large language models
http://arxiv.org/abs/2403.04957
.
Liu et al. (2024d) ↑ Yilun Liu, Minggui He, Feiyu Yao, Yuhe Ji, Shimin Tao, Jingzhou Du, Duan Li, Jian Gao, Li Zhang, Hao Yang, et al. 2024d. What do you want? user-centric prompt generation for text-to-image synthesis via multi-turn guidance. 
arXiv preprint arXiv:2408.12910
.
Long et al. (2024) ↑ Xuan Do Long, Yiran Zhao, Hannah Brown, Yuxi Xie, James Xu Zhao, Nancy F. Chen, Kenji Kawaguchi, Michael Shieh, and Junxian He. 2024. 
Prompt optimization via adversarial in-context learning
https://doi.org/10.18653/v1/2024.acl-long.395
. In 
Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 7308–7327, Bangkok, Thailand. Association for Computational Linguistics.
Lowe et al. (2015) ↑ Ryan Lowe, Nissan Pow, Iulian Serban, and Joelle Pineau. 2015. 
The ubuntu dialogue corpus: A large dataset for research in unstructured multi-turn dialogue systems
https://api.semanticscholar.org/CorpusID:8379583
. In 
SIGDIAL Conference
.
Lu et al. (2025) ↑ Junru Lu, Siyu An, Min Zhang, Yulan He, Di Yin, and Xing Sun. 2025. 
FIPO: Free-form instruction-oriented prompt optimization with preference dataset and modular fine-tuning schema
https://aclanthology.org/2025.coling-main.731/
. In 
Proceedings of the 31st International Conference on Computational Linguistics
, page 11029—11047, Abu Dhabi, UAE. Association for Computational Linguistics.
Lu et al. (2021) ↑ Yao Lu, Max Bartolo, Alastair Moore, Sebastian Riedel, and Pontus Stenetorp. 2021. 
Fantastically ordered prompts and where to find them: Overcoming few-shot prompt order sensitivity
https://api.semanticscholar.org/CorpusID:233296494
. In 
Annual Meeting of the Association for Computational Linguistics
.
Lu et al. (2024) ↑ Yao Lu, Jiayi Wang, Raphael Tang, Sebastian Riedel, and Pontus Stenetorp. 2024. 
Strings from the library of babel: Random sampling as a strong baseline for prompt optimisation
https://doi.org/10.18653/v1/2024.naacl-long.122
. In 
Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)
, page 2221—2231, Mexico City, Mexico. Association for Computational Linguistics.
Luan et al. (2018) ↑ Yi Luan, Luheng He, Mari Ostendorf, and Hannaneh Hajishirzi. 2018. 
Multi-task identification of entities, relations, and coreference for scientific knowledge graph construction
https://api.semanticscholar.org/CorpusID:52118895
. 
ArXiv
, abs/1808.09602.
Maas et al. (2011) ↑ Andrew Maas, Raymond E Daly, Peter T Pham, Dan Huang, Andrew Y Ng, and Christopher Potts. 2011. Learning word vectors for sentiment analysis. In 
Proceedings of the 49th annual meeting of the association for computational linguistics: Human language technologies
, pages 142–150.
Mañas et al. (2024) ↑ Oscar Mañas, Pietro Astolfi, Melissa Hall, Candace Ross, Jack Urbanek, Adina Williams, Aishwarya Agrawal, Adriana Romero-Soriano, and Michal Drozdzal. 2024. Improving text-to-image consistency via automatic prompt optimization. 
arXiv preprint arXiv:2403.17804
.
McCann et al. (2018) ↑ Bryan McCann, Nitish Shirish Keskar, Caiming Xiong, and Richard Socher. 2018. The natural language decathlon: Multitask learning as question answering. 
arXiv preprint arXiv:1806.08730
.
Melamed et al. (2024) ↑ Rimon Melamed, Lucas H. McCabe, Tanay Wakhare, Yejin Kim, H. Howie Huang, and Enric Boix-Adsera. 2024. 
Prompts have evil twins
http://arxiv.org/abs/2311.07064
.
Mirza et al. (2024) ↑ M Jehanzeb Mirza, Mengjie Zhao, Zhuoyuan Mao, Sivan Doveh, Wei Lin, Paul Gavrikov, Michael Dorkenwald, Shiqi Yang, Saurav Jha, Hiromi Wakaki, et al. 2024. Glov: Guided large language models as implicit optimizers for vision language models. 
arXiv preprint arXiv:2410.06154
.
Mishra et al. (2021) ↑ Swaroop Mishra, Daniel Khashabi, Chitta Baral, and Hannaneh Hajishirzi. 2021. 
Cross-task generalization via natural language crowdsourcing instructions
https://api.semanticscholar.org/CorpusID:237421373
. In 
Annual Meeting of the Association for Computational Linguistics
.
Mollas et al. (2020) ↑ Ioannis Mollas, Zoe Chrysopoulou, Stamatis Karlos, and Grigorios Tsoumakas. 2020. Ethos: an online hate speech detection dataset. 
arXiv preprint arXiv:2006.08328
.
Nallapati et al. (2016) ↑ Ramesh Nallapati, Bowen Zhou, Cícero Nogueira dos Santos, Çaglar Gülçehre, and Bing Xiang. 2016. 
Abstractive text summarization using sequence-to-sequence rnns and beyond
https://api.semanticscholar.org/CorpusID:8928715
. In 
Conference on Computational Natural Language Learning
.
Narayan et al. (2018) ↑ Shashi Narayan, Shay B. Cohen, and Mirella Lapata. 2018. 
Don't give me the details, just the summary! topic-aware convolutional neural networks for extreme summarization
https://api.semanticscholar.org/CorpusID:215768182
. 
ArXiv
, abs/1808.08745.
Nezhadarya et al. (2019) ↑ Ehsan Nezhadarya, Yang Liu, and Bingbing Liu. 2019. Boxnet: A deep learning method for 2d bounding box estimation from bird's-eye view point cloud. In 
2019 IEEE Intelligent Vehicles Symposium (IV)
, pages 1557–1564. IEEE.
Nie et al. (2019) ↑ Yixin Nie, Adina Williams, Emily Dinan, Mohit Bansal, Jason Weston, and Douwe Kiela. 2019. 
Adversarial nli: A new benchmark for natural language understanding
https://api.semanticscholar.org/CorpusID:207756753
. 
ArXiv
, abs/1910.14599.
Novikova et al. (2017) ↑ Jekaterina Novikova, Ondrej Dusek, and Verena Rieser. 2017. 
The e2e dataset: New challenges for end-to-end generation
https://api.semanticscholar.org/CorpusID:19662556
. 
ArXiv
, abs/1706.09254.
Opsahl-Ong et al. (2024) ↑ Krista Opsahl-Ong, Michael J Ryan, Josh Purtell, David Broman, Christopher Potts, Matei Zaharia, and Omar Khattab. 2024. 
Optimizing instructions and demonstrations for multi-stage language model programs
https://doi.org/10.18653/v1/2024.emnlp-main.525
. In 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing
, page 9340—9366, Miami, Florida, USA. Association for Computational Linguistics.
Ouyang et al. (2022) ↑ Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, and Ryan Lowe. 2022. 
Training language models to follow instructions with human feedback
http://arxiv.org/abs/2203.02155
.
Pal et al. (2022) ↑ Ankit Pal, Logesh Kumar Umapathi, and Malaikannan Sankarasubbu. 2022. Medmcqa: A large-scale multi-subject multi-choice dataset for medical domain question answering. In 
Conference on health, inference, and learning
, pages 248–260. PMLR.
Pan et al. (2024) ↑ Rui Pan, Shuo Xing, Shizhe Diao, Wenhe Sun, Xiang Liu, KaShun Shum, Jipeng Zhang, Renjie Pi, and Tong Zhang. 2024. 
Plum: Prompt learning using metaheuristics
https://doi.org/10.18653/v1/2024.findings-acl.129
. In 
Findings of the Association for Computational Linguistics: ACL 2024
, page 2177—2197, Bangkok, Thailand. Association for Computational Linguistics.
Pang and Lee (2004) ↑ Bo Pang and Lillian Lee. 2004. 
A sentimental education: Sentiment analysis using subjectivity summarization based on minimum cuts
https://api.semanticscholar.org/CorpusID:388
. 
ArXiv
, cs.CL/0409058.
Pang and Lee (2005) ↑ Bo Pang and Lillian Lee. 2005. 
Seeing stars: Exploiting class relationships for sentiment categorization with respect to rating scales
https://api.semanticscholar.org/CorpusID:3264224
. In 
Annual Meeting of the Association for Computational Linguistics
.
Patel et al. (2021) ↑ Arkil Patel, S. Bhattamishra, and Navin Goyal. 2021. 
Are nlp models really able to solve simple math word problems?
https://api.semanticscholar.org/CorpusID:232223322
 In 
North American Chapter of the Association for Computational Linguistics
.
Pilehvar and Camacho-Collados (2019) ↑ Mohammad Taher Pilehvar and Jose Camacho-Collados. 2019. Wic: the word-in-context dataset for evaluating context-sensitive meaning representations. In 
Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers)
, pages 1267–1273.
Pitis et al. (2023) ↑ Silviu Pitis, Michael R Zhang, Andrew Wang, and Jimmy Ba. 2023. Boosted prompt ensembles for large language models. 
arXiv preprint arXiv:2304.05970
.
Ponti et al. (2020) ↑ Edoardo Maria Ponti, Goran Glavaš, Olga Majewska, Qianchu Liu, Ivan Vulić, and Anna Korhonen. 2020. Xcopa: A multilingual dataset for causal commonsense reasoning. 
arXiv preprint arXiv:2005.00333
.
Prasad et al. (2023) ↑ Archiki Prasad, Peter Hase, Xiang Zhou, and Mohit Bansal. 2023. 
Grips: Gradient-free, edit-based instruction search for prompting large language models
http://arxiv.org/abs/2203.07281
.
Pryzant et al. (2023) ↑ Reid Pryzant, Dan Iter, Jerry Li, Yin Lee, Chenguang Zhu, and Michael Zeng. 2023. 
Automatic prompt optimization with “gradient descent” and beam search
https://doi.org/10.18653/v1/2023.emnlp-main.494
. In 
Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing
, page 7957—7968, Singapore. Association for Computational Linguistics.
Qi et al. (2018) ↑ Ye Qi, Devendra Singh Sachan, Matthieu Felix, Sarguna Padmanabhan, and Graham Neubig. 2018. 
When and why are pre-trained word embeddings useful for neural machine translation?
https://api.semanticscholar.org/CorpusID:4929974
 
ArXiv
, abs/1804.06323.
Rajpurkar et al. (2016) ↑ Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev, and Percy Liang. 2016. 
Squad: 100,000+ questions for machine comprehension of text
https://api.semanticscholar.org/CorpusID:11816014
. In 
Conference on Empirical Methods in Natural Language Processing
.
Rein et al. (2023) ↑ David Rein, Betty Li Hou, Asa Cooper Stickland, Jackson Petty, Richard Yuanzhe Pang, Julien Dirani, Julian Michael, and Samuel R. Bowman. 2023. 
Gpqa: A graduate-level google-proof q&a benchmark
https://api.semanticscholar.org/CorpusID:265295009
. 
ArXiv
, abs/2311.12022.
Roemmele et al. (2011) ↑ Melissa Roemmele, Cosmin Adrian Bejan, and Andrew S Gordon. 2011. Choice of plausible alternatives: An evaluation of commonsense causal reasoning. In 
2011 AAAI spring symposium series
.
Roy and Roth (2016) ↑ Subhro Roy and Dan Roth. 2016. 
Solving general arithmetic word problems
https://api.semanticscholar.org/CorpusID:560565
. 
ArXiv
, abs/1608.01413.
Sap et al. (2019) ↑ Maarten Sap, Hannah Rashkin, Derek Chen, Ronan Le Bras, and Yejin Choi. 2019. Social iqa: Commonsense reasoning about social interactions. In 
Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)
, pages 4463–4473.
Schnabel and Neville (2024) ↑ Tobias Schnabel and Jennifer Neville. 2024. 
Symbolic prompt program search: A structure-aware approach to efficient compile-time prompt optimization
http://arxiv.org/abs/2404.02319
.
Schuhmann et al. (2022) ↑ Christoph Schuhmann, Romain Beaumont, Richard Vencu, Cade Gordon, Ross Wightman, Mehdi Cherti, Theo Coombes, Aarush Katta, Clayton Mullis, Mitchell Wortsman, et al. 2022. Laion-5b: An open large-scale dataset for training next generation image-text models. 
Advances in Neural Information Processing Systems
, 35:25278–25294.
(132) ↑ Melanie Sclar, Yejin Choi, Yulia Tsvetkov, and Alane Suhr. Quantifying language models' sensitivity to spurious features in prompt design or: How i learned to start worrying about prompt formatting. In 
The Twelfth International Conference on Learning Representations
.
She et al. (2023) ↑ Jingyuan Selena She, Christopher Potts, Sam Bowman, and Atticus Geiger. 2023. 
Scone: Benchmarking negation reasoning in language models with fine-tuning and in-context learning
https://api.semanticscholar.org/CorpusID:258987746
. In 
Annual Meeting of the Association for Computational Linguistics
.
Shi et al. (2024) ↑ Zeru Shi, Zhenting Wang, Yongye Su, Weidi Luo, Fan Yang, and Yongfeng Zhang. 2024. 
Robustness-aware automatic prompt optimization
http://arxiv.org/abs/2412.18196
.
Shin et al. (2020) ↑ Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace, and Sameer Singh. 2020. 
AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts
https://doi.org/10.18653/v1/2020.emnlp-main.346
. In 
Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)
, pages 4222–4235, Online. Association for Computational Linguistics.
Shinn et al. (2023) ↑ Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao. 2023. 
Reflexion: Language agents with verbal reinforcement learning
http://arxiv.org/abs/2303.11366
.
Shinn et al. (2024) ↑ Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao. 2024. Reflexion: Language agents with verbal reinforcement learning. 
Advances in Neural Information Processing Systems
, 36.
Shridhar et al. (2020) ↑ Mohit Shridhar, Xingdi Yuan, Marc-Alexandre Côté, Yonatan Bisk, Adam Trischler, and Matthew Hausknecht. 2020. Alfworld: Aligning text and embodied environments for interactive learning. 
arXiv preprint arXiv:2010.03768
.
Sinha et al. (2024) ↑ Ankita Sinha, Wendi Cui, Kamalika Das, and Jiaxin Zhang. 2024. 
Survival of the safest: Towards secure prompt optimization through interleaved multi-objective evolution
https://doi.org/10.18653/v1/2024.emnlp-industry.76
. In 
Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing: Industry Track
, pages 1016–1027, Miami, Florida, US. Association for Computational Linguistics.
Socher et al. (2013) ↑ Richard Socher, Alex Perelygin, Jean Wu, Jason Chuang, Christopher D Manning, Andrew Y Ng, and Christopher Potts. 2013. Recursive deep models for semantic compositionality over a sentiment treebank. In 
Proceedings of the 2013 conference on empirical methods in natural language processing
, pages 1631–1642.
Sogancioglu et al. (2017) ↑ Gizem Sogancioglu, Hakime Öztürk, and Arzucan Özgür. 2017. 
Biosses: a semantic sentence similarity estimation system for the biomedical domain
https://api.semanticscholar.org/CorpusID:3778978
. 
Bioinformatics
, 33:i49 – i58.
Sordoni et al. (2023) ↑ Alessandro Sordoni, Eric Yuan, Marc-Alexandre Côté, Matheus Pereira, Adam Trischler, Ziang Xiao, Arian Hosseini, Friederike Niedtner, and Nicolas Le Roux. 2023. 
Joint prompt optimization of stacked llms using variational inference
https://proceedings.neurips.cc/paper_files/paper/2023/file/b5afe13494c825089b1e3944fdaba212-Paper-Conference.pdf
. In 
Advances in Neural Information Processing Systems
, volume 36, pages 58128–58151. Curran Associates, Inc.
Srivastava et al. (2022) ↑ Aarohi Srivastava, Abhinav Rastogi, Abhishek Rao, Abu Awal Md Shoeb, Abubakar Abid, Adam Fisch, Adam R Brown, Adam Santoro, Aditya Gupta, Adrià Garriga-Alonso, et al. 2022. Beyond the imitation game: Quantifying and extrapolating the capabilities of language models. 
arXiv preprint arXiv:2206.04615
.
Sun et al. (2024a) ↑ Hao Sun, Alihan Hüyük, and Mihaela van der Schaar. 2024a. 
Query-dependent prompt evaluation and optimization with offline inverse RL
https://openreview.net/forum?id=N6o0ZtPzTg
. In 
The Twelfth International Conference on Learning Representations
.
Sun et al. (2023) ↑ Hong Sun, Xue Li, Yinchuan Xu, Youkow Homma, Qi Cao, Min Wu, Jian Jiao, and Denis Charles. 2023. Autohint: Automatic prompt optimization with hint generation. 
arXiv preprint arXiv:2307.07415
.
Sun et al. (2024b) ↑ Jingwei Sun, Ziyue Xu, Hongxu Yin, Dong Yang, Daguang Xu, Yudong Liu, Zhixu Du, Yiran Chen, and Holger R. Roth. 2024b. Fedbpt: efficient federated black-box prompt tuning for large language models. In 
Proceedings of the 41st International Conference on Machine Learning
, ICML'24. JMLR.org.
Suzgun et al. (2023) ↑ Mirac Suzgun, Nathan Scales, Nathanael Schärli, Sebastian Gehrmann, Yi Tay, Hyung Won Chung, Aakanksha Chowdhery, Quoc Le, Ed Chi, Denny Zhou, et al. 2023. Challenging big-bench tasks and whether chain-of-thought can solve them. In 
Findings of the Association for Computational Linguistics: ACL 2023
, pages 13003–13051.
Talmor et al. (2019) ↑ Alon Talmor, Jonathan Herzig, Nicholas Lourie, and Jonathan Berant. 2019. 
Commonsenseqa: A question answering challenge targeting commonsense knowledge
https://api.semanticscholar.org/CorpusID:53296520
. 
ArXiv
, abs/1811.00937.
Trivedi et al. (2025) ↑ Prashant Trivedi, Souradip Chakraborty, Avinash Reddy, Vaneet Aggarwal, Amrit Singh Bedi, and George K. Atia. 2025. 
Align-pro: A principled approach to prompt optimization for llm alignment
http://arxiv.org/abs/2501.03486
.
Vaghani and Thummar (2023) ↑ Nirali Vaghani and Mansi Thummar. 2023. Flipkart product reviews with sentiment dataset.
Voorhees and Tice (2000) ↑ Ellen M Voorhees and Dawn M Tice. 2000. Building a question answering test collection. In 
Proceedings of the 23rd annual international ACM SIGIR conference on Research and development in information retrieval
, pages 200–207.
Wan et al. (2024) ↑ Xingchen Wan, Ruoxi Sun, Hootan Nakhost, and Sercan O. Arik. 2024. 
Teach better or show smarter? on instructions and exemplars in automatic prompt optimization
http://arxiv.org/abs/2406.15708
.
Wang et al. (2025) ↑ Ruochen Wang, Sohyun An, Minhao Cheng, Tianyi Zhou, Sung Ju Hwang, and Cho-Jui Hsieh. 2025. One prompt is not enough: automated construction of a mixture-of-expert prompts. In 
Proceedings of the 41st International Conference on Machine Learning
, ICML'24. JMLR.org.
Wang et al. (2022a) ↑ Ruoyao Wang, Peter Jansen, Marc-Alexandre Côté, and Prithviraj Ammanabrolu. 2022a. Scienceworld: Is your agent smarter than a 5th grader? In 
Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing
, pages 11279–11298.
Wang (2017) ↑ William Yang Wang. 2017. 
“liar, liar pants on fire”: A new benchmark dataset for fake news detection
https://api.semanticscholar.org/CorpusID:10326133
. In 
Annual Meeting of the Association for Computational Linguistics
.
Wang et al. (2024a) ↑ Xinyuan Wang, Chenxi Li, Zhen Wang, Fan Bai, Haotian Luo, Jiayou Zhang, Nebojsa Jojic, Eric P. Xing, and Zhiting Hu. 2024a. 
Promptagent: Strategic planning with language models enables expert-level prompt optimization
https://openreview.net/forum?id=22pyNMuIoa
. In 
The Twelfth International Conference on Learning Representations, ICLR 2024, Vienna, Austria, May 7-11, 2024
. OpenReview.net.
Wang et al. (2022b) ↑ Yizhong Wang, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi. 2022b. 
Self-instruct: Aligning language models with self-generated instructions
https://api.semanticscholar.org/CorpusID:254877310
. In 
Annual Meeting of the Association for Computational Linguistics
.
Wang et al. (2023) ↑ Yizhong Wang, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi. 2023. 
Self-instruct: Aligning language models with self-generated instructions
https://doi.org/10.18653/v1/2023.acl-long.754
. In 
Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)
, pages 13484–13508, Toronto, Canada. Association for Computational Linguistics.
Wang et al. (2015) ↑ Yushi Wang, Jonathan Berant, and Percy Liang. 2015. 
Building a semantic parser overnight
https://api.semanticscholar.org/CorpusID:14472576
. In 
Annual Meeting of the Association for Computational Linguistics
.
Wang et al. (2024b) ↑ Zhichao Wang, Bin Bi, Shiva Kumar Pentyala, Kiran Ramnath, Sougata Chaudhuri, Shubham Mehrotra, Zixu, Zhu, Xiang-Bo Mao, Sitaram Asur, Na, and Cheng. 2024b. 
A comprehensive survey of llm alignment techniques: Rlhf, rlaif, ppo, dpo and more
http://arxiv.org/abs/2407.16216
.
Warstadt et al. (2018) ↑ Alex Warstadt, Amanpreet Singh, and Samuel R. Bowman. 2018. 
Neural network acceptability judgments
https://api.semanticscholar.org/CorpusID:44072099
. 
Transactions of the Association for Computational Linguistics
, 7:625–641.
Wiebe et al. (2005) ↑ Janyce Wiebe, Theresa Wilson, and Claire Cardie. 2005. 
Annotating expressions of opinions and emotions in language
https://api.semanticscholar.org/CorpusID:382842
. 
Language Resources and Evaluation
, 39:165–210.
Williams et al. (2017) ↑ Adina Williams, Nikita Nangia, and Samuel R. Bowman. 2017. 
A broad-coverage challenge corpus for sentence understanding through inference
https://api.semanticscholar.org/CorpusID:3432876
. In 
North American Chapter of the Association for Computational Linguistics
.
Wu et al. (2024) ↑ Yurong Wu, Yan Gao, Bin Benjamin Zhu, Zineng Zhou, Xiaodi Sun, Sheng Yang, Jian-Guang Lou, Zhiming Ding, and Linjun Yang. 2024. 
StraGo: Harnessing strategic guidance for prompt optimization
https://doi.org/10.18653/v1/2024.findings-emnlp.588
. In 
Findings of the Association for Computational Linguistics: EMNLP 2024
, pages 10043–10061, Miami, Florida, USA. Association for Computational Linguistics.
Xian et al. (2024) ↑ Jasper Xian, Saron Samuel, Faraz Khoubsirat, Ronak Pradeep, Md Arafat Sultan, Radu Florian, Salim Roukos, Avirup Sil, Christopher Potts, and Omar Khattab. 2024. Prompts as auto-optimized training hyperparameters: Training best-in-class ir models from scratch with 10 gold labels. 
arXiv preprint arXiv:2406.11706
.
Xu et al. (2022) ↑ Hanwei Xu, Yujun Chen, Yulun Du, Nan Shao, Wang Yanggang, Haiyu Li, and Zhilin Yang. 2022. Gps: Genetic prompt search for efficient few-shot learning. In 
Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing
, pages 8162–8171.
Xu et al. (2012) ↑ Wei Xu, Alan Ritter, William B. Dolan, Ralph Grishman, and Colin Cherry. 2012. 
Paraphrasing for style
https://api.semanticscholar.org/CorpusID:13050210
. In 
International Conference on Computational Linguistics
.
Xu et al. (2024) ↑ Weijia Xu, Andrzej Banburski-Fahey, and Nebojsa Jojic. 2024. Reprompting: automated chain-of-thought prompt inference through gibbs sampling. In 
Proceedings of the 41st International Conference on Machine Learning
, ICML'24. JMLR.org.
Yang et al. (2024a) ↑ Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V. Le, Denny Zhou, and Xinyun Chen. 2024a. 
Large language models as optimizers
http://arxiv.org/abs/2309.03409
.
Yang et al. (2024b) ↑ Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V Le, Denny Zhou, and Xinyun Chen. 2024b. 
Large language models as optimizers
https://openreview.net/forum?id=Bb4VGOWELI
. In 
The Twelfth International Conference on Learning Representations
.
Yang et al. (2024c) ↑ Muchen Yang, Moxin Li, Yongle Li, Zijun Chen, Chongming Gao, Junqi Zhang, Yangyang Li, and Fuli Feng. 2024c. 
Dual-phase accelerated prompt optimization
https://doi.org/10.18653/v1/2024.findings-emnlp.709
. In 
Findings of the Association for Computational Linguistics: EMNLP 2024
, pages 12163–12173, Miami, Florida, USA. Association for Computational Linguistics.
Yang et al. (2024d) ↑ Sheng Yang, Yurong Wu, Yan Gao, Zineng Zhou, Bin Benjamin Zhu, Xiaodi Sun, Jian-Guang Lou, Zhiming Ding, Anbang Hu, Yuan Fang, et al. 2024d. Ampo: Automatic multi-branched prompt optimization. 
arXiv preprint arXiv:2410.08696
.
Yang et al. (2018) ↑ Zhilin Yang, Peng Qi, Saizheng Zhang, Yoshua Bengio, William W. Cohen, Ruslan Salakhutdinov, and Christopher D. Manning. 2018. 
Hotpotqa: A dataset for diverse, explainable multi-hop question answering
https://api.semanticscholar.org/CorpusID:52822214
. In 
Conference on Empirical Methods in Natural Language Processing
.
Ye et al. (2024) ↑ Qinyuan Ye, Maxamed Axmed, Reid Pryzant, and Fereshte Khani. 2024. 
Prompt engineering a prompt engineer
http://arxiv.org/abs/2311.05661
.
Yuksekgonul et al. (2024) ↑ Mert Yuksekgonul, Federico Bianchi, Joseph Boen, Sheng Liu, Zhi Huang, Carlos Guestrin, and James Zou. 2024. 
Textgrad: Automatic "differentiation" via text
http://arxiv.org/abs/2406.07496
.
Zelle and Mooney (1996) ↑ John M. Zelle and Raymond J. Mooney. 1996. 
Learning to parse database queries using inductive logic programming
https://api.semanticscholar.org/CorpusID:263135
. In 
AAAI/IAAI, Vol. 2
.
Zellers et al. (2019) ↑ Rowan Zellers, Ari Holtzman, Yonatan Bisk, Ali Farhadi, and Yejin Choi. 2019. Hellaswag: Can a machine really finish your sentence? In 
Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics
, pages 4791–4800.
Zhan et al. (2024) ↑ Pengwei Zhan, Zhen Xu, Qian Tan, Jie Song, and Ru Xie. 2024. 
Unveiling the lexical sensitivity of llms: Combinatorial optimization for prompt enhancement
https://api.semanticscholar.org/CorpusID:270199843
. In 
Conference on Empirical Methods in Natural Language Processing
.
Zhang et al. (2024a) ↑ Chenrui Zhang, Lin Liu, Chuyuan Wang, Xiao Sun, Hongyu Wang, Jinpeng Wang, and Mingchen Cai. 2024a. 
Prefer: prompt ensemble learning via feedback-reflect-refine
https://doi.org/10.1609/aaai.v38i17.29924
. In 
Proceedings of the Thirty-Eighth AAAI Conference on Artificial Intelligence and Thirty-Sixth Conference on Innovative Applications of Artificial Intelligence and Fourteenth Symposium on Educational Advances in Artificial Intelligence
, AAAI'24/IAAI'24/EAAI'24. AAAI Press.
Zhang et al. (2024b) ↑ Lechen Zhang, Tolga Ergen, Lajanugen Logeswaran, Moontae Lee, and David Jurgens. 2024b. 
Sprig: Improving large language model performance by system prompt optimization
https://api.semanticscholar.org/CorpusID:273502098
. 
ArXiv
, abs/2410.14826.
Zhang et al. (2022) ↑ Tianjun Zhang, Xuezhi Wang, Denny Zhou, Dale Schuurmans, and Joseph E. Gonzalez. 2022. 
Tempera: Test-time prompting via reinforcement learning
http://arxiv.org/abs/2211.11890
.
Zhang* et al. (2020) ↑ Tianyi Zhang*, Varsha Kishore*, Felix Wu*, Kilian Q. Weinberger, and Yoav Artzi. 2020. 
Bertscore: Evaluating text generation with bert
https://openreview.net/forum?id=SkeHuCVFDr
. In 
International Conference on Learning Representations
.
Zhang et al. (2015) ↑ Xiang Zhang, Junbo Jake Zhao, and Yann LeCun. 2015. 
Character-level convolutional networks for text classification
https://api.semanticscholar.org/CorpusID:368182
. In 
Neural Information Processing Systems
.
Zheng et al. (2023) ↑ Lianmin Zheng, Wei-Lin Chiang, Ying Sheng, Siyuan Zhuang, Zhanghao Wu, Yonghao Zhuang, Zi Lin, Zhuohan Li, Dacheng Li, Eric P. Xing, Hao Zhang, Joseph E. Gonzalez, and Ion Stoica. 2023. Judging llm-as-a-judge with mt-bench and chatbot arena. In 
Proceedings of the 37th International Conference on Neural Information Processing Systems
, NIPS '23, Red Hook, NY, USA. Curran Associates Inc.
Zhou et al. (2023) ↑ Han Zhou, Xingchen Wan, Ivan Vulić, and Anna Korhonen. 2023. 
Survival of the most influential prompts: Efficient black-box prompt search via clustering and pruning
https://doi.org/10.18653/v1/2023.findings-emnlp.870
. In 
Findings of the Association for Computational Linguistics: EMNLP 2023
, pages 13064–13077, Singapore. Association for Computational Linguistics.
Zhou et al. (2022) ↑ Yongchao Zhou, Andrei Ioan Muresanu, Ziwen Han, Keiran Paster, Silviu Pitis, Harris Chan, and Jimmy Ba. 2022. 
Large language models are human-level prompt engineers
http://arxiv.org/abs/2211.01910
.
12 Appendix
Report issue for preceding element
12.1 Notation
Report issue for preceding element
We now define the notation of key terms and expressions used throughout the paper.
Report issue for preceding element
T 𝑇 T italic_T = Task type, I 𝐼 I italic_I = Task instruction, E = ( x  i , y  i ) i = 1 e 𝐸 superscript subscript 𝑥 𝑖 𝑦 𝑖 𝑖 1 𝑒 E={(xi,yi)}
{i=1}^{e} italic_E = ( italic_x italic_i , italic_y italic_i ) start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_e end_POSTSUPERSCRIPT Few shot demonstrations in the prompt, τ 𝜏 \tau italic_τ = Template delimiters, z = CoT recipe for a task-instance, z i ∈ I i subscript 𝑧 𝑖 subscript 𝐼 𝑖 z
{i}\in I_{i} italic_z start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ italic_I start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT Report issue for preceding element
M t  a  s  k subscript 𝑀 𝑡 𝑎 𝑠 𝑘 M_{task} italic_M start_POSTSUBSCRIPT italic_t italic_a italic_s italic_k end_POSTSUBSCRIPT target model, M A  P  O subscript 𝑀 𝐴 𝑃 𝑂 M_{APO} italic_M start_POSTSUBSCRIPT italic_A italic_P italic_O end_POSTSUBSCRIPT APO system Report issue for preceding element
ρ = c  o  n  c  a  t  ( [ s 1 , s 2 , … , s m ] ) = c  o  n  c  a  t  ( I , τ , E ) 𝜌 𝑐 𝑜 𝑛 𝑐 𝑎 𝑡 subscript 𝑠 1 subscript 𝑠 2 … subscript 𝑠 𝑚 𝑐 𝑜 𝑛 𝑐 𝑎 𝑡 𝐼 𝜏 𝐸 \rho=concat([s_{1},s_{2},\ldots,s_{m}])=concat(I,\tau,E) italic_ρ = italic_c italic_o italic_n italic_c italic_a italic_t ( [ italic_s start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_s start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT , … , italic_s start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT ] ) = italic_c italic_o italic_n italic_c italic_a italic_t ( italic_I , italic_τ , italic_E ) Prompt composed of m sentences, which comprise of Instruction, template delimiters and few-shot demonstrations. Report issue for preceding element
D = { ( x i , y i ) } i = 1 m 𝐷 superscript subscript subscript 𝑥 𝑖 subscript 𝑦 𝑖 𝑖 1 𝑚 D={(x_{i},y_{i})}
{i=1}^{m} italic_D = { ( italic_x start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT , italic_y start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) } start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_m end_POSTSUPERSCRIPT collection of m input-output pairs. D v  a  l subscript 𝐷 𝑣 𝑎 𝑙 D
{val} italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT is the validation set used to validate prompt performance, D t  r  a  i  n subscript 𝐷 𝑡 𝑟 𝑎 𝑖 𝑛 D_{train} italic_D start_POSTSUBSCRIPT italic_t italic_r italic_a italic_i italic_n end_POSTSUBSCRIPT is the training set used to finetune the language model(Reprompting). Report issue for preceding element
{ f 1 , f 2 , … } ∈ F subscript 𝑓 1 subscript 𝑓 2 … 𝐹 {f_{1},f_{2},\ldots}\in F { italic_f start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_f start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT , … } ∈ italic_F metric function upon which to evaluate task-prompt performance Report issue for preceding element
r : S × A → R : 𝑟 → 𝑆 𝐴 𝑅 r:S\times A\rightarrow R italic_r : italic_S × italic_A → italic_R = reward model score, where S is the state-space and A is the action-space Report issue for preceding element
| V | 𝑉 |V| | italic_V | = length of vocabulary Report issue for preceding element
ϕ : S ∈ V ∗ → R d : italic-ϕ 𝑆 subscript 𝑉 → subscript 𝑅 𝑑 \phi:S\in V_{*}\rightarrow R_{d} italic_ϕ : italic_S ∈ italic_V start_POSTSUBSCRIPT ∗ end_POSTSUBSCRIPT → italic_R start_POSTSUBSCRIPT italic_d end_POSTSUBSCRIPT embedding function which takes in a sentence generated as a finite sequence of tokens belonging to a vocabulary V, and generating a floating point array representation of dimension d Report issue for preceding element
ρ ∗ = a  r  g  m  a  x ρ ∈ V ∗  E D v  a  l  [ f i  ( ρ ) ] subscript 𝜌 𝑎 𝑟 𝑔 𝑚 𝑎 subscript 𝑥 𝜌 subscript 𝑉 subscript 𝐸 subscript 𝐷 𝑣 𝑎 𝑙 delimited-[] subscript 𝑓 𝑖 𝜌 \rho_{
}=argmax_{\rho\in V_{
}}E_{D_{val}}[f_{i}(\rho)] italic_ρ start_POSTSUBSCRIPT ∗ end_POSTSUBSCRIPT = italic_a italic_r italic_g italic_m italic_a italic_x start_POSTSUBSCRIPT italic_ρ ∈ italic_V start_POSTSUBSCRIPT ∗ end_POSTSUBSCRIPT end_POSTSUBSCRIPT italic_E start_POSTSUBSCRIPT italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT [ italic_f start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ( italic_ρ ) ] The best performing prompt based on the metric score on validation set Report issue for preceding element
k 𝑘 k italic_k = number of candidates for top-K search, B 𝐵 B italic_B = Beam width for beam search, N 𝑁 N italic_N = number of iterations for search Report issue for preceding element
C 𝐶 C italic_C = number of experts in a Mixture of Experts approach (MOP), μ C subscript 𝜇 𝐶 \mu_{C} italic_μ start_POSTSUBSCRIPT italic_C end_POSTSUBSCRIPT = cluster centroid of cluster C (MOP). Report issue for preceding element
L  L  M t  a  r  g  e  t 𝐿 𝐿 subscript 𝑀 𝑡 𝑎 𝑟 𝑔 𝑒 𝑡 LLM_{target} italic_L italic_L italic_M start_POSTSUBSCRIPT italic_t italic_a italic_r italic_g italic_e italic_t end_POSTSUBSCRIPT = target model which will be used for inference, L  L  M r  e  w  r  i  t  e  r 𝐿 𝐿 subscript 𝑀 𝑟 𝑒 𝑤 𝑟 𝑖 𝑡 𝑒 𝑟 LLM_{rewriter} italic_L italic_L italic_M start_POSTSUBSCRIPT italic_r italic_e italic_w italic_r italic_i italic_t italic_e italic_r end_POSTSUBSCRIPT = rewriter model which will be used for rewriter, L  L  M e  v  a  l  u  a  t  o  r 𝐿 𝐿 subscript 𝑀 𝑒 𝑣 𝑎 𝑙 𝑢 𝑎 𝑡 𝑜 𝑟 LLM_{evaluator} italic_L italic_L italic_M start_POSTSUBSCRIPT italic_e italic_v italic_a italic_l italic_u italic_a italic_t italic_o italic_r end_POSTSUBSCRIPT = evaluator model which provides the LLM feedback to prompts / responses or both Report issue for preceding element
λ 𝜆 \lambda italic_λ with subscripts to denote different latency types: λ t subscript 𝜆 𝑡 \lambda_{t} italic_λ start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT = Total training cost/latency, including all offline costs for data collection, preprocessing, and model fine-tuning, λ i subscript 𝜆 𝑖 \lambda_{i} italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT = per-example inference latency, λ m subscript 𝜆 𝑚 \lambda_{m} italic_λ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT = MLM inference latency per-example Report issue for preceding element
12.2 Excluded works
Report issue for preceding element
FedBPT Sun et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib146
) used federated learning to update soft prompts and not discrete tokens. Deliberate-then-generate Li et al. ( 
2023a
https://arxiv.org/html/2502.16923v2#bib.bib80
) randomly sampled arbitrary noisy inference and prompted the task LLM to deliberate on the wrong inference, while Reflexion Shinn et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib136
) agents maintain an episodic buffer of past deliberations. Neither method optimizes the input prompt. AutoPrompt Shin et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib135
) required gradient access to the task LLM and therefore doesn't remain blackbox.
Report issue for preceding element
12.3 UCB based selection algorithm
Report issue for preceding element Algorithm 2 S  e  l  e  c  t  ( ⋅ ) 𝑆 𝑒 𝑙 𝑒 𝑐 𝑡 ⋅ Select(\cdot) italic_S italic_e italic_l italic_e italic_c italic_t ( ⋅ ) with UCB Bandits
1: n 𝑛 n italic_n prompts ρ 1 , … , ρ n subscript 𝜌 1 … subscript 𝜌 𝑛 \rho_{1},...,\rho_{n} italic_ρ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_ρ start_POSTSUBSCRIPT italic_n end_POSTSUBSCRIPT , dataset 𝒟 v  a  l subscript 𝒟 𝑣 𝑎 𝑙 \mathcal{D}_{val} caligraphic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT , T 𝑇 T italic_T time steps, metric function m 𝑚 m italic_m
2: Initialize: N t  ( ρ i ) ← 0 ← subscript 𝑁 𝑡 subscript 𝜌 𝑖 0 N_{t}(\rho_{i})\leftarrow 0 italic_N start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) ← 0 for all i = 1 , … , n 𝑖 1 … 𝑛 i=1,\dots,n italic_i = 1 , … , italic_n
3: Initialize: Q t  ( ρ i ) ← 0 ← subscript 𝑄 𝑡 subscript 𝜌 𝑖 0 Q_{t}(\rho_{i})\leftarrow 0 italic_Q start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) ← 0 for all i = 1 , … , n 𝑖 1 … 𝑛 i=1,\dots,n italic_i = 1 , … , italic_n
4: for t = 1 , … , T 𝑡 1 … 𝑇 t=1,\dots,T italic_t = 1 , … , italic_T do
5: Sample uniformly 𝒟 s  a  m  p  l  e ⊂ 𝒟 v  a  l subscript 𝒟 𝑠 𝑎 𝑚 𝑝 𝑙 𝑒 subscript 𝒟 𝑣 𝑎 𝑙 \mathcal{D}
{sample}\subset\mathcal{D}
{val} caligraphic_D start_POSTSUBSCRIPT italic_s italic_a italic_m italic_p italic_l italic_e end_POSTSUBSCRIPT ⊂ caligraphic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT
6: ρ i ← arg  max ρ  { Q t  ( ρ ) N t  ( ρ i ) + c  log  t N t  ( ρ ) } ← subscript 𝜌 𝑖 subscript 𝜌 subscript 𝑄 𝑡 𝜌 subscript 𝑁 𝑡 subscript 𝜌 𝑖 𝑐 𝑡 subscript 𝑁 𝑡 𝜌 \rho_{i}\leftarrow\arg\max_{\rho}\left{\frac{Q_{t}(\rho)}{N_{t}(\rho_{i})}+c% \sqrt{\frac{\log t}{N_{t}(\rho)}}\right} italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ← roman_arg roman_max start_POSTSUBSCRIPT italic_ρ end_POSTSUBSCRIPT { divide start_ARG italic_Q start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ ) end_ARG start_ARG italic_N start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) end_ARG + italic_c square-root start_ARG divide start_ARG roman_log italic_t end_ARG start_ARG italic_N start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ ) end_ARG end_ARG }
7: Observe reward r i , t = m  ( ρ i , 𝒟 s  a  m  p  l  e ) subscript 𝑟 𝑖 𝑡 𝑚 subscript 𝜌 𝑖 subscript 𝒟 𝑠 𝑎 𝑚 𝑝 𝑙 𝑒 r_{i,t}=m(\rho_{i},\mathcal{D}_{sample}) italic_r start_POSTSUBSCRIPT italic_i , italic_t end_POSTSUBSCRIPT = italic_m ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT , caligraphic_D start_POSTSUBSCRIPT italic_s italic_a italic_m italic_p italic_l italic_e end_POSTSUBSCRIPT )
8: N t  ( ρ i ) ← N t  ( ρ i ) + | 𝒟 s  a  m  p  l  e | ← subscript 𝑁 𝑡 subscript 𝜌 𝑖 subscript 𝑁 𝑡 subscript 𝜌 𝑖 subscript 𝒟 𝑠 𝑎 𝑚 𝑝 𝑙 𝑒 N_{t}(\rho_{i})\leftarrow N_{t}(\rho_{i})+|\mathcal{D}_{sample}| italic_N start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) ← italic_N start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) + | caligraphic_D start_POSTSUBSCRIPT italic_s italic_a italic_m italic_p italic_l italic_e end_POSTSUBSCRIPT |
9: Q t  ( ρ i ) ← Q t  ( ρ i ) + r i , t ← subscript 𝑄 𝑡 subscript 𝜌 𝑖 subscript 𝑄 𝑡 subscript 𝜌 𝑖 subscript 𝑟 𝑖 𝑡 Q_{t}(\rho_{i})\leftarrow Q_{t}(\rho_{i})+r_{i,t} italic_Q start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) ← italic_Q start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT ( italic_ρ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) + italic_r start_POSTSUBSCRIPT italic_i , italic_t end_POSTSUBSCRIPT
10: return S  e  l  e  c  t  T  o  p b  ( Q T / N T ) 𝑆 𝑒 𝑙 𝑒 𝑐 𝑡 𝑇 𝑜 subscript 𝑝 𝑏 subscript 𝑄 𝑇 subscript 𝑁 𝑇 SelectTop_{b}(Q_{T}/N_{T}) italic_S italic_e italic_l italic_e italic_c italic_t italic_T italic_o italic_p start_POSTSUBSCRIPT italic_b end_POSTSUBSCRIPT ( italic_Q start_POSTSUBSCRIPT italic_T end_POSTSUBSCRIPT / italic_N start_POSTSUBSCRIPT italic_T end_POSTSUBSCRIPT )
Report issue for preceding element
13 Comparison of different approaches + Tasks
Report issue for preceding element
13.1 Comparison
Report issue for preceding element
Below we offer a comprehensive comparison of all the surveyed methods against our framework, covering the following aspects
Report issue for preceding element
Seed instructions Report issue for preceding element
Inference evaluation Report issue for preceding element
Candidate generation Report issue for preceding element
Search+filter strategy Report issue for preceding element
Iteration depth Report issue for preceding element
Optimization time complexity Report issue for preceding element
Prompt generation model Report issue for preceding element
Target models Report issue for preceding element
SNo.
Method
Seed instructions
Inference evaluation
Candidate generation
Search+filter strategy
Iteration depth
Optimization time complexity
Prompt generation model
Target models
1
GPS Xu et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib166
)
Manually created
Task accuracy
Genetic Algorithm:
Back translation, Cloze,
Sentence continuation
Metaheuristic ensemble
Fixed
O  ( T ∗ N ∗ k ∗ λ i ) 𝑂 𝑇 𝑁 𝑘 subscript 𝜆 𝑖 O(T
N
k*\lambda_{i}) italic_O ( italic_T ∗ italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
T0
2
GRIPS Prasad et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib122
)
Manually created
Entropy-based score+
Task accuracy
Phrase level
add/remove/swap/paraphrase
TopK selection
Fixed
O  ( k ∗ N ∗ | D v  a  l | ∗ B ) 𝑂 𝑘 𝑁 subscript 𝐷 𝑣 𝑎 𝑙 𝐵 O(k
N
|D_{val}|*B) italic_O ( italic_k ∗ italic_N ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_B )
PEGASUS paraphrase model
InstructGPT
3
Instruction induction
Honovich et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib52
)
Instruction induction
Accuracy +
BERTScore
LLM-rewriter
Fixed
O  ( | ρ | ∗ λ i ) 𝑂 𝜌 subscript 𝜆 𝑖 O(|\rho|*\lambda_{i}) italic_O ( | italic_ρ | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
InstructGPT, GPT-3
InstructGPT, GPT-3
4
RLPrompt Deng et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib26
)
Manually created
Task accuracy +
Reward model score
RL-based trained NN
TopK selection
Fixed
O  ( N ∗ ρ ∗ | V | ∗ λ i ) 𝑂 𝑁 𝜌 𝑉 subscript 𝜆 𝑖 O(N*\rho*|V|*\lambda_{i}) italic_O ( italic_N ∗ italic_ρ ∗ | italic_V | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
RoBERTa-large
Reward model-DistilBERT
1/ BERT, 2/ GPT-2
5
TEMPERA Zhang et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib181
)
Manually created
Task accuracy
RL-trained NN
Fixed
O  ( N ∗ k ∗ | V | ∗ C ) 𝑂 𝑁 𝑘 𝑉 𝐶 O(N
k
|V|*C) italic_O ( italic_N ∗ italic_k ∗ | italic_V | ∗ italic_C )
RoBERTa-large
RoBERTa-large
6
AELP Hsieh et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib55
)
Manually created
Task accuracy
Genetic algorithm:
LLM-mutator
Beam search
Fixed
O  ( N ∗ ρ ∗ k ∗ | D | ∗ λ i ) 𝑂 𝑁 𝜌 𝑘 𝐷 subscript 𝜆 𝑖 O(N*\rho
k
|D|*\lambda_{i}) italic_O ( italic_N ∗ italic_ρ ∗ italic_k ∗ | italic_D | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
PaLM 2-L
PaLM text-bison
7
APE Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
)
Instruction induction
Task accuracy
No new candidates
TopK selection
Fixed
O  ( N ∗ k ∗ | D v  a  l | ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(N
k
|D_{val}|*\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
InstructGPT, GPT-3, T5,
InsertGPT
InstructGPT, GPT-3
8
AutoHint Sun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib145
)
Manually created
Task accuracy +
LLM-feedback
LLM rewriter
TopK selection
Fixed
O  ( T ∗ | D | ∗ λ i ) 𝑂 𝑇 𝐷 subscript 𝜆 𝑖 O(T*|D|*\lambda_{i}) italic_O ( italic_T ∗ | italic_D | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4
9
BDPL Diao et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib29
)
Manually created
Task accuracy
RL-trained NN
TopK selection
Variable
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
RoBERTa, GPT-3
RoBERTa, GPT-3
10
Boosted Prompting
Pitis et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib120
)
Instruction-induction
Task accuracy
Ensemble based method
TopK selection
Variable
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
text-curie-001, text-curie-003, GPT-3.5,
code-davinci-002
text-curie-001, text-curie-003,
GPT-3.5, code-davinci-002
11
BPO Cheng et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib15
)
Manually created
LLMaaJ (pairwise)
Finetuned LLMs
NA
NA
O  ( λ t + | D v  a  l | ∗ λ i ) 𝑂 subscript 𝜆 𝑡 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(\lambda_{t}+|D_{val}|*\lambda_{i}) italic_O ( italic_λ start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT + | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
Llama2-7b-chat
Vicuna-7b-v1.3,
vicuna-13b-v1.3, llama-1-7b,
llama-1-13b
12
CLAPS Zhou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib185
)
Manually created
Entropy-based score+
Task accuracy
Genetic Algorithm:
Mutation + Crossover
TopK selection
Variable
O  ( N ∗ k ∗ | V | ∗ λ i ) 𝑂 𝑁 𝑘 𝑉 subscript 𝜆 𝑖 O(N
k
|V|*\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ | italic_V | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
Flan-T5
Flan-T5 large and base
13
Directional-stimulus Li et al. ( 
2023d
https://arxiv.org/html/2502.16923v2#bib.bib84
)
Manually created
BLEU, BERTScore
RL-trained NN
Variable
O  ( λ t ) 𝑂 subscript 𝜆 𝑡 O(\lambda_{t}) italic_O ( italic_λ start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT )
T5, GPT-2
ChatGPT, Codex, InstructGPT
14
DLN Sordoni et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib142
)
Manually created
Task accuracy + NLL
LLM mutator
TopK selection
Fixed
O  ( N ∗ k ∗ | D t  r  a  i  n | ) 𝑂 𝑁 𝑘 subscript 𝐷 𝑡 𝑟 𝑎 𝑖 𝑛 O(N
k
|D_{train}|) italic_O ( italic_N ∗ italic_k ∗ | italic_D start_POSTSUBSCRIPT italic_t italic_r italic_a italic_i italic_n end_POSTSUBSCRIPT | )
GPT-3 (text-davinci-003), GPT-4
GPT-3 (text-davinci-003), GPT-4
15
DSP Khattab et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib68
)
Instruction induction
Task accuracy
Program Synthesis
TopK selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5
LM: GPT-3.5,
Retrieval: ColBERTv2
16
DSPy Khattab et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib69
)
Manually created +
Instruction Induction
Task accuracy +
LLM-feedback
Program Synthesis
TopK selection
Variable
O  ( N ∗ k ∗ B ∗ λ i ) 𝑂 𝑁 𝑘 𝐵 subscript 𝜆 𝑖 O(N
k
B*\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_B ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
17
GATE Joko et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib65
)
Manually created
Human feedback
LLM rewriter
Open-ended
O  ( N ∗ ( λ m + | D v  a  l | ∗ λ i ) ) 𝑂 𝑁 subscript 𝜆 𝑚 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(N*(\lambda_{m}+|D_{val}|*\lambda_{i})) italic_O ( italic_N ∗ ( italic_λ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT + | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) )
GPT-4
GPT-4
18
GPO Li et al. ( 
2023c
https://arxiv.org/html/2502.16923v2#bib.bib83
)
Instruction induction
Task-Accuracy and F1
Metaprompt-design
TopK selection
O  ( N ∗ C ∗ | V | ∗ B ∗ E ) 𝑂 𝑁 𝐶 𝑉 𝐵 𝐸 O(N
C
|V|
B
E) italic_O ( italic_N ∗ italic_C ∗ | italic_V | ∗ italic_B ∗ italic_E )
gpt-3.5-turbo-0301
gpt-3.5-turbo-0301
19
PACE Dong et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib33
)
Manually created
NLL + Task accuracy -
BLEU and BERTScore
LLM-rewriter
TopK selection
< 3
O  ( N ∗ | ρ | ∗ | D v  a  l | ) 𝑂 𝑁 𝜌 subscript 𝐷 𝑣 𝑎 𝑙 O(N*|\rho|*|D_{val}|) italic_O ( italic_N ∗ | italic_ρ | ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | )
gpt-3.5-turbo (0301)
text-davinci-002,
text-davinci-003,
(gpt-3.5-turbo), GPT-4
20
PREFER Zhang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib179
)
Manually created
Task accuracy
LLM-rewriter +
Ensemble method
TopK selection
Fixed
O  ( N ∗ | ρ | ∗ | D v  a  l | ) 𝑂 𝑁 𝜌 subscript 𝐷 𝑣 𝑎 𝑙 O(N*|\rho|*|D_{val}|) italic_O ( italic_N ∗ | italic_ρ | ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | )
ChatGPT
ChatGPT
21
Promptagent Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
)
Manually created
Task accuracy +
LLM-feedback
LLM rewriter
UCT-based bandit-search
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4
GPT-3.5, GPT-4, PaLM-2
Table 2: Comparison of all APO techniques based on our framework Report issue for preceding element
SNo.
Method
Seed instructions
Inference evaluation
Candidate generation
Search+filter strategy
Iteration depth
Optimization time complexity
Prompt generation model
Target models
22
Promptboosting Hou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib54
)
Instruction-induction
Accuracy, F1 Score
Ensemble based method
Beam-search
Early Stopping
O  ( λ m ) 𝑂 subscript 𝜆 𝑚 O(\lambda_{m}) italic_O ( italic_λ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT )
T5
RoBERTa-large
23
Promptbreeder Fernando et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib39
)
Manually created
LLM Feedback +
Task accuracy
Genetic Algorithm:
Mutate + Crossover
(LLM-edits)
Metaheuristic Ensemble
Fixed
O  ( ρ ∗ N ∗ | V | ∗ λ i ) 𝑂 𝜌 𝑁 𝑉 subscript 𝜆 𝑖 O(\rho
N
|V|*\lambda_{i}) italic_O ( italic_ρ ∗ italic_N ∗ | italic_V | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
text-davinci-003, PaLM 2-L
text-davinci-003, PaLM 2-L
24
ProTeGi Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
)
Manually created
Task accuracy +
LLM-feedback
LLM rewriter
UCT-based bandit-search
Fixed
O  ( N ∗ C ∗ | D v  a  l | ∗ λ i ) 𝑂 𝑁 𝐶 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(N
C
|D_{val}|*\lambda_{i}) italic_O ( italic_N ∗ italic_C ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5-Turbo
GPT-3.5-turbo
25
Random separators Lu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib98
)
Manually created
Task accuracy
LLM-rewriter
TopK selection
Fixed steps
O ( N ∗ k ∗ λ ) O(N
k
\lambda_{)} italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT ) end_POSTSUBSCRIPT
GPT2 Large, GPT2 XL,
Mistral 7B, Mistral 7B Instruct,
Llama-Alpaca 7B, Llama2 7B.
Llama2 7B Chat, ChatGPT
GPT2 Large, GPT2 XL,
Mistral 7B, Mistral 7B Instruct,
Llama-Alpaca 7B, Llama2 7B.
Llama2 7B Chat, ChatGPT
26
ABO Yang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib170
)
Manually created +
Instruction Induction
Task accuracy +
LLM-feedback
LLM-rewriter
TopK selection
Fixed Steps
O  ( B ∗ N ∗ λ i ) 𝑂 𝐵 𝑁 subscript 𝜆 𝑖 O(B
N
\lambda_{i}) italic_O ( italic_B ∗ italic_N ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4
GPT-3.5-Turbo, Llama-2-70B-chat
27
Adv-ICL Long et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib94
)
Manually created
LLM Feedback
LLM-rewriter
Top-1 selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
text-davinci-002, vicuna,
ChatGPT
text-davinci-002, vicuna, ChatGPT
28
AMPO Yang et al. ( 
2024d
https://arxiv.org/html/2502.16923v2#bib.bib172
)
Manually created
Task accuracy +
F1 score
Coverage-based
TopK selection
Variable
O  ( N ∗ C ∗ λ i ) 𝑂 𝑁 𝐶 subscript 𝜆 𝑖 O(N
C
\lambda_{i}) italic_O ( italic_N ∗ italic_C ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4-turbo
GPT-4-turbo
29
APEER Jin et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib62
)
Manually created
Task accuracy-nDCG
Feedback + preference
optimization
Used 3 epochs
O  ( N ∗ | ρ | ∗ | D v  a  l | ) 𝑂 𝑁 𝜌 subscript 𝐷 𝑣 𝑎 𝑙 O(N*|\rho|*|D_{v}al|) italic_O ( italic_N ∗ | italic_ρ | ∗ | italic_D start_POSTSUBSCRIPT italic_v end_POSTSUBSCRIPT italic_a italic_l | )
GPT4, GPT3.5, Llama3, Qwen2
30
APOHF Lin et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib87
)
Manually created
Task accuracy +
Human feedback
LLM rewriter
Linear UCB
Fixed
O  ( N ∗ T ) 𝑂 𝑁 𝑇 O(N*T) italic_O ( italic_N ∗ italic_T )
ChatGPT
DALLE-3, ChatGPT
31
BATPrompt Shi et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib134
)
Manually created
Task accuracy +
LLM-feedback
LLM rewriter
TopK selection
Fixed
O  ( N ∗ | D | ∗ | ρ | ∗ λ i ) 𝑂 𝑁 𝐷 𝜌 subscript 𝜆 𝑖 O(N*|D|
|\rho|
\lambda_{i}) italic_O ( italic_N ∗ | italic_D | ∗ | italic_ρ | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5-turbo
GPT-3.5-turbo,
GPT-4o-mini, Llama2-7b
32
COPLE Zhan et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib178
)
Manually created
Task accuracy
Token edits using
MLM
Variable
O  ( N ∗ | I | ∗ k ∗ | D v  a  l | ∗ λ i ) 𝑂 𝑁 𝐼 𝑘 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(N*|I|
k
|D_{v}al|*\lambda_{i}) italic_O ( italic_N ∗ | italic_I | ∗ italic_k ∗ | italic_D start_POSTSUBSCRIPT italic_v end_POSTSUBSCRIPT italic_a italic_l | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
RoBERTa
(filling masked tokens)
Llama-2-7B-chat ,
Mistral-7B-Instruct-v0.1,
ChatGPT (gpt-3.5-turbo-0125)
33
CRISPO He et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib48
)
Manually created
LLM feedback +
ROUGE-1/2/L F-measure,
AlignScore
LLM rewriter
TOP-K greedy search
Fixed
O  ( N ∗ k ∗ ( | D t  r  a  i  n | ∗ λ i + λ m ) ) 𝑂 𝑁 𝑘 subscript 𝐷 𝑡 𝑟 𝑎 𝑖 𝑛 subscript 𝜆 𝑖 subscript 𝜆 𝑚 O(N
k
(|D_{train}|*\lambda_{i}+\lambda_{m})) italic_O ( italic_N ∗ italic_k ∗ ( | italic_D start_POSTSUBSCRIPT italic_t italic_r italic_a italic_i italic_n end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT + italic_λ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT ) )
Claude Instant,
Claude 3 Sonnet,
Mistral 7B, Llama3 8B
Claude Instant,
Claude 3 Sonnet,
Mistral 7B, Llama3 8B
34
DAPO Yang et al. ( 
2024c
https://arxiv.org/html/2502.16923v2#bib.bib171
)
Manually created
Task accuracy
LLM-rewriter
Top-1 selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5-Turbo, Baichuan2,
GPT-4
GPT-3.5-Turbo,
Baichuan2, GPT-4
35
DRPO Amini et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib3
)
Manually created
Reward model score +
LLM Feedback
LLM rewriter
Beam search
Fixed
O  ( B ∗ k ∗ N ) 𝑂 𝐵 𝑘 𝑁 O(B
k
N) italic_O ( italic_B ∗ italic_k ∗ italic_N )
Mistral 7b, Mistral 7b (Instruct),
Llama 2 70b, Llama 2 70b (chat),
Llama 3 8b, Llama 3 8b (Instruct),
gpt-3.5-turbo
Mistral 7b, Mistral 7b (Instruct),
Llama 2 70b, Llama 2 70b (chat),
Llama 3 8b, Llama 3 8b (Instruct),
gpt-3.5-turbo
36
EVOPROMPT Guo et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib47
)
Manually created +
Instruction Induction
Task Accuracy +
ROUGUE+ SARI
Genetic Algorithm:
Mutation operators+
Crossover
Metaheuristic ensemble
Early Stopping
O  ( N ∗ k ∗ T ∗ λ i ) 𝑂 𝑁 𝑘 𝑇 subscript 𝜆 𝑖 O(N
k
T*\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_T ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
Alpaca-7b, GPT-3.5
37
FIPO Lu et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib96
)
Manually created
Task accuracy
Finetuned LLMs
O ( λ t + | D v a l | ∗ λ i ) ) O(\lambda_{t}+|D_{v}al|*\lambda_{i})) italic_O ( italic_λ start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT + | italic_D start_POSTSUBSCRIPT italic_v end_POSTSUBSCRIPT italic_a italic_l | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) )
Tulu-13B, Tulu-70B
Llama2-7B, Tulu2-13B,
Baichuan2-13B
Table 3: Comparison of all APO techniques based on our framework Report issue for preceding element
SNo.
Method
Seed instructions
Inference evaluation
Candidate generation
Search+filter strategy
Iteration depth
Optimization time complexity
Prompt generation model
Target models
38
LMEA Liu et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib90
)
Manually created
Numeric Score-based
Genetic Algorithm:
Mutate + Crossover
(LLM-edits)
TopK selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5-turbo-0613
39
MIPRO Opsahl-Ong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib112
)
Manually created
Task accuracy
Program Synthesis
TopK selection
Fixed
O  ( N ∗ | D v  a  l | ∗ k ∗ λ i ) 𝑂 𝑁 subscript 𝐷 𝑣 𝑎 𝑙 𝑘 subscript 𝜆 𝑖 O(N*|D_{val}|
k
\lambda_{i}) italic_O ( italic_N ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5 (proposer LM)
Llama-3-8B (task LM)
40
MOP Wang et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib153
)
Instruction induction
Task Accuracy
APE for each cluster
TopK selection
Fixed steps per-cluster
O  ( C ∗ N ∗ | D v  a  l | ) 𝑂 𝐶 𝑁 subscript 𝐷 𝑣 𝑎 𝑙 O(C
N
|D_{val}|) italic_O ( italic_C ∗ italic_N ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | )
GPT-3.5-Turbo
GPT-3.5-Turbo
41
MORL-Prompt Jafari et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib59
)
Manually created
Task accuracy +
Reward score
RL-based trained NN
Fixed
O  ( N ∗ C ∗ | V | ∗ k ) 𝑂 𝑁 𝐶 𝑉 𝑘 O(N
C
|V|*k) italic_O ( italic_N ∗ italic_C ∗ | italic_V | ∗ italic_k )
distilGPT-2
GPT-2 (style transfer),
flan-T5-small (translation)
42
OIRL Sun et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib144
)
Manually created
Task accuracy +
Reward model score
LLM rewriter
O  ( | D t  r  a  i  n | ∗ ρ ∗ λ i + λ t + | D v  a  l | ∗ λ i ) 𝑂 subscript 𝐷 𝑡 𝑟 𝑎 𝑖 𝑛 𝜌 subscript 𝜆 𝑖 subscript 𝜆 𝑡 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(|D_{train}|
\rho
\lambda_{i}+\lambda_{t}+|D_{val}|*\lambda_{i}) italic_O ( | italic_D start_POSTSUBSCRIPT italic_t italic_r italic_a italic_i italic_n end_POSTSUBSCRIPT | ∗ italic_ρ ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT + italic_λ start_POSTSUBSCRIPT italic_t end_POSTSUBSCRIPT + | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT4
Llama2-7B-chat,
Tigerbot-13B-chat, gpt3.5-turbo
43
OPRO Yang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib169
)
Manually created
Task accuracy +
LLM-feedback
Metaprompt design
TopK selection
Variable
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
PaLM 2-L, text-bison,
gpt-3.5-turbo and GPT-4
PaLM family models
44
PE2 Ye et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib174
)
Manually created +
Instruction Induction
Task accuracy +
LLM-feedback
Metaprompt design
TopK selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4
text-davinci-003
45
PIN Choi et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib18
)
Manually created
Task accuracy
RL-trained LLM
TopK selection
Fixed
O  ( N ∗ | V | ∗ λ i ∗ C ) 𝑂 𝑁 𝑉 subscript 𝜆 𝑖 𝐶 O(N*|V|*\lambda_{i}*C) italic_O ( italic_N ∗ | italic_V | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∗ italic_C )
OPT
RoBERTa-large (classification),
OPT models (others)
46
PLUM Pan et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib115
)
Manually created
Task accuracy
Genetic Algorithm:
Mutate + crossover
Metaheuristics
Fixed steps
O  ( N ∗ C ∗ k ∗ λ i ) 𝑂 𝑁 𝐶 𝑘 subscript 𝜆 𝑖 O(N
C
k*\lambda_{i}) italic_O ( italic_N ∗ italic_C ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3-babbage
GPT-3-babbage
47
PRewrite Kong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib73
)
Manually created
Task accuracy +
Reward model score
RL-trained LLM
TopK selection
Fixed
O  ( N ∗ C ∗ λ i ∗ | V | ) 𝑂 𝑁 𝐶 subscript 𝜆 𝑖 𝑉 O(N
C
\lambda_{i}*|V|) italic_O ( italic_N ∗ italic_C ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∗ | italic_V | )
PaLM 2-S
PaLM 2-L
48
PROMPTWIZARD Agarwal et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib1
)
Manually created
Task accuracy +
LLM-feedback
Genetic Algorithm:
Mutate + Crossover
(LLM-edits)
TopK selection
Fixed
O  ( N ∗ C ∗ λ i ) 𝑂 𝑁 𝐶 subscript 𝜆 𝑖 O(N
C
\lambda_{i}) italic_O ( italic_N ∗ italic_C ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT3.5/GPT4
GPT3.5/GPT4/Llama-70B
49
PROMST Chen et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib14
)
Manually created
Task accuracy +
Human feedback
LLM rewriter
TopK selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4
GPT-3.5, GPT-4
50
Reprompting Xu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib168
)
LLM generated CoT process.
Task accuracy
LLM-rewriter
Rejection sampling
with exploration
Fixed or until convergence
O  ( N ∗ k ∗ | ρ | ) 𝑂 𝑁 𝑘 𝜌 O(N
k
|\rho|) italic_O ( italic_N ∗ italic_k ∗ | italic_ρ | )
gpt-3.5-turbo, textdavinci-003
gpt-3.5-turbo, textdavinci-003
51
SAMMO Schnabel and Neville ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib130
)
Manually created
Task accuracy
Program synthesis
TopK selection
Fixed
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
Mixtral7x8B, Llama-2 70B,
GPT3.5, GPT4
52
SCULPT Kumar et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib74
)
Instruction induction
on task-README
Task accuracy +
LLM-feedback
LLM-rewriter
UCB bandit search
Fixed
O  ( N ∗ k ∗ | ρ | ∗ | D v  a  l | ) 𝑂 𝑁 𝑘 𝜌 subscript 𝐷 𝑣 𝑎 𝑙 O(N
k
|\rho|*|D_{v}al|) italic_O ( italic_N ∗ italic_k ∗ | italic_ρ | ∗ | italic_D start_POSTSUBSCRIPT italic_v end_POSTSUBSCRIPT italic_a italic_l | )
GPT-4o
GPT-4o and Llama3.1-8B
53
SOS Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
)
Manually created
Task accuracy +
LLM-feedback
LLM-mutator
TopK selection
Fixed
O  ( N ∗ C ∗ k ∗ λ i ) 𝑂 𝑁 𝐶 𝑘 subscript 𝜆 𝑖 O(N
C
k*\lambda_{i}) italic_O ( italic_N ∗ italic_C ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5-turbo, Llama3-8B,
Mistral-7B
GPT-3.5-turbo, Llama3-8B,
Mistral-7B
54
SPRIG Zhang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib180
)
Manually created
Task accuracy
Genetic Algorithm:
Mutate + Crossover (tokens)
Beam-search
Fixed
O  ( N ∗ B ∗ T ∗ k ∗ λ i ) 𝑂 𝑁 𝐵 𝑇 𝑘 subscript 𝜆 𝑖 O(N
B
T
k
\lambda_{i}) italic_O ( italic_N ∗ italic_B ∗ italic_T ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
tuner007/pegasus_paraphrase
Llama 3.1-8B Instruct,
Mistral Nemo Instruct 2407,
Qwen 2.5-7B Instruct,
Llama 70B, Qwen 2.5-72B,
Mistral Large 2407.
55
StraGo Wu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib164
)
Manually created
Task accuracy +
LLM-feedback
Genetic Algorithm:
Mutate + CrossOver (tokens)
Bandit Search (UCB)
Early Stopping
O  ( N ∗ k ∗ T ∗ λ i ) 𝑂 𝑁 𝑘 𝑇 subscript 𝜆 𝑖 O(N
k
T*\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_T ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-4
GPT-3.5-turbo or GPT-4
56
TextGrad Yuksekgonul et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib175
)
Manually created
Task accuracy +
LLM-feedback
LLM rewriter
Variable
O  ( N ∗ | D v  a  l | ∗ λ i ) 𝑂 𝑁 subscript 𝐷 𝑣 𝑎 𝑙 subscript 𝜆 𝑖 O(N*|D_{val}|*\lambda_{i}) italic_O ( italic_N ∗ | italic_D start_POSTSUBSCRIPT italic_v italic_a italic_l end_POSTSUBSCRIPT | ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
GPT-3.5, GPT-4o
57
UNIPROMPT Juneja et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib66
)
Manually created +
Instruction Induction
Task accuracy +
LLM-feedback
LLM-rewriter
Beam Search
Early Stopping
O  ( N ∗ k ∗ λ i ) 𝑂 𝑁 𝑘 subscript 𝜆 𝑖 O(N
k
\lambda_{i}) italic_O ( italic_N ∗ italic_k ∗ italic_λ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT )
Fine-tuned Llama2-13B
GPT-3.5
Table 4: Comparison of all APO techniques based on our framework Report issue for preceding element
13.2 Evaluation tasks and datasets
Report issue for preceding element
Below we describe the different datasets and tasks that each method was evaluated on.
Report issue for preceding element
SNo.
Paper
Tasks
1
GPS Xu et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib166
)
10 unseen tasks from the T0 benchmark, which span:
Natural Language Inference: ANLI R1, R2, R3, CB, RTE Nie et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib110
); Dagan et al. ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib24
) .
Coreference Resolution: WSC, Winogrande. Levesque et al. ( 
2011
https://arxiv.org/html/2502.16923v2#bib.bib79
)
Sentence Completion: COPA Roemmele et al. ( 
2011
https://arxiv.org/html/2502.16923v2#bib.bib127
) , HellaSwag Zellers et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib177
) .
Word Sense Disambiguation: WiC Pilehvar and Camacho-Collados ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib119
) .
2
GRIPS Prasad et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib122
)
8 classification tasks from NaturalInstructions Mishra et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib105
)
3
Instruction induction Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
)
Spelling, 2. Syntax, 3. Morpho-syntax, 4. Lexical semantics,
Phonetics, 6. Knowledge, 7. Semantics, 8. Style
4
RLPrompt Deng et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib26
)
Classification
Text-style transfer
5
TEMPERA Zhang et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib181
)
Classification
6
AELP Hsieh et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib55
)
Big Bench Hard Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
)
7
APE Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
)
24 Instruction induction tasks Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
) 2. 21 BIG Bench Hard tasks Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
)
8
AutoHint Sun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib145
)
BIG-Bench Instruction Induction (Epistemic Reasoning, Logical Fallacy Detection, Implicatures, Hyperbaton, Causal Judgment, Winowhy) Zhou et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib186
)
9
BDPL Diao et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib29
)
MNLI Williams et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib163
) , 2. QQP Cer et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib12
) , 3. SST-2 Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
) , 4. MRPC Dolan and Brockett ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib31
) , 5. CoLA Warstadt et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib161
) , 6. QNLI Rajpurkar et al. ( 
2016
https://arxiv.org/html/2502.16923v2#bib.bib125
) , 7. RTE Dagan et al. ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib24
) , 8. CitationIntent Jurgens et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib67
) , 9. SciERC Luan et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib99
) , 10. RCT Dernoncourt and Lee ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib27
) , 11. HyperPartisan Kiesel et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib70
)
10
Boosted Prompting Pitis et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib120
)
GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) and AQuA Garcia et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib41
)
11
BPO Cheng et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib15
)
Generation: Dolly Eval Conover et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib22
) , Vicuna Eval Chiang et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib16
) , Self-Instruct Eval Wang et al. ( 
2022b
https://arxiv.org/html/2502.16923v2#bib.bib157
)
12
CLAPS Zhou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib185
)
13
Directional-stimulus Li et al. ( 
2023d
https://arxiv.org/html/2502.16923v2#bib.bib84
)
MultiWOZ Budzianowski et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib11
)
14
DLN Sordoni et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib142
)
Mpqa Sentiment analysis Lu et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib97
)
Trec Question type classification Lu et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib97
)
Subj Determine whether a sentence is subjective or objective Lu et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib97
)
Leopard Bansal et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib6
) - Disaster Determine whether a sentence is relevant to a disaster.
Leopard Bansal et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib6
) - Airline Airline tweet sentiment analysis.
BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) - (Hyper, Nav, Date, Logic datasets)
15
DSP Khattab et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib68
)
open-domain question answering (Open-SQuAD) Lee et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib77
)
multi-hop question answering (HotPotQA) Yang et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib173
)
conversational question answering (QReCC) Anantha et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib4
)
16
DSPy Khattab et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib69
)
17
GATE Joko et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib65
)
LAPS Joko et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib65
) (1. Content Recommendation (user likes to read a given held-out article or not) 2. Moral Reasoning, 3. Email Verification)
18
GPO Li et al. ( 
2023c
https://arxiv.org/html/2502.16923v2#bib.bib83
)
Sentiment analysis - Yelp Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
) , Flipkart Vaghani and Thummar ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib150
) , IMDB Maas et al. ( 
2011
https://arxiv.org/html/2502.16923v2#bib.bib100
) , Amazon Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
)
NLI - MNLI Williams et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib163
) , ANLI Nie et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib110
) 3.Entailment - RTE Dagan et al. ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib24
) , 4. CommonsenseQA - SocialIQA Sap et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib129
)
Multi-turn dialog - DSTC7 Gunasekara et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib46
) , Ubuntu Dialog Lowe et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib95
) , MuTual Cui et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib23
)
NumericalQA - DROP Dua et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib35
)
19
PACE Dong et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib33
)
BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) , instruction induction tasks (24 tasks) Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
) and translation tasks (en-de, en-es, en-fr)
20
PREFER Zhang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib179
)
NLI tasks including SNLI Bowman et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib9
) , MNLI Williams et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib163
) , QNLI Rajpurkar et al. ( 
2016
https://arxiv.org/html/2502.16923v2#bib.bib125
) , RTE Dagan et al. ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib24
)
Classification: Ethos Mollas et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib106
) , liar Wang ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib155
) , ArSarcasm Farha and Magdy ( 
2020a
https://arxiv.org/html/2502.16923v2#bib.bib37
)
21
Promptagent Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
)
BigBenchHard (BBH) Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) - 6 BBH tasks that emphasize a blend of domain knowledge
Biomedical - Disease NER (NCBI) Doğan et al. ( 
2014
https://arxiv.org/html/2502.16923v2#bib.bib30
) , MedQA Jin et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib63
) , Bio similar sentences Sogancioglu et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib141
)
2 classification - TREC Voorhees and Tice ( 
2000
https://arxiv.org/html/2502.16923v2#bib.bib151
) + Subj. Pang and Lee ( 
2004
https://arxiv.org/html/2502.16923v2#bib.bib116
) 1 NLI(CB) de Marneffe et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib25
)
22
Promptboosting Hou et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib54
)
Text Classification
23
Promptbreeder Fernando et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib39
)
Arithmetic Reasoning: Benchmarks: GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , MultiArith Roy and Roth ( 
2016
https://arxiv.org/html/2502.16923v2#bib.bib128
) , AddSub Hosseini et al. ( 
2014
https://arxiv.org/html/2502.16923v2#bib.bib53
) ,
SVAMP Patel et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib118
) , SingleEq Koncel-Kedziorski et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib72
) , AQuA-RAT Ling et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib88
) .
Commonsense Reasoning: Benchmarks: CommonSenseQA (CSQA) Talmor et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib148
) , StrategyQA (SQA) Geva et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib44
) .
Hate Speech Classification: Dataset: ETHOS Mollas et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib106
) .
Instruction Induction Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
) : Tasks: 24 datasets spanning
sentence similarity, style transfer, sentiment analysis, and more
Table 5: Tasks covered in the different papers Report issue for preceding element
SNo.
Paper
Tasks
24
ProTeGi Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
)
Jailbreak Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
) , Liar Wang ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib155
) , Sarcasm Farha and Magdy ( 
2020b
https://arxiv.org/html/2502.16923v2#bib.bib38
) , Ethos Mollas et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib106
)
25
Random separators Lu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib98
)
SST-2, SST-5, Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
) 3. DBPedia Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
) , 4. MR Pang and Lee ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib117
) , 5. CR Hu and Liu ( 
2004
https://arxiv.org/html/2502.16923v2#bib.bib56
) , 6. MPQA Wiebe et al. ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib162
) , 7. Subj Pang and Lee ( 
2004
https://arxiv.org/html/2502.16923v2#bib.bib116
) , 8. TREC Voorhees and Tice ( 
2000
https://arxiv.org/html/2502.16923v2#bib.bib151
) , 9. AGNews Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
)
26
ABO Yang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib170
)
BigBenchHard tasks Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) : Object Counting, Navigate, Snarks, Question Selection
27
Adv-ICL Long et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib94
)
Summarization (XSUM Narayan et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib108
) , CNN/Daily Mail Nallapati et al. ( 
2016
https://arxiv.org/html/2502.16923v2#bib.bib107
) ), Data-to-Text (WebNLG Gardent et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib43
) , E2E NLG Novikova et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib111
) ), Translation (LIRO Dumitrescu et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib36
) , TED Talks Qi et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib124
) ), Classification (YELP-5 Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
) , WSC Levesque et al. ( 
2011
https://arxiv.org/html/2502.16923v2#bib.bib79
) ), Reasoning (GSM8k Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , SVAMP Patel et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib118
) )
28
AMPO Yang et al. ( 
2024d
https://arxiv.org/html/2502.16923v2#bib.bib172
)
Text classification task TREC Voorhees and Tice ( 
2000
https://arxiv.org/html/2502.16923v2#bib.bib151
) ,
sentiment classification task SST-5 Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
) ,
largescale reading comprehension task RACE Lai et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib76
) ,
medical question-answering tasks MedQA Jin et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib63
) and MedMCQA Pal et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib114
)
29
APEER Jin et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib62
)
Passage reranking
30
APOHF Lin et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib87
)
User instruction optimization using tasks from Instructzero, 2. Text-to-image , 3. Response optimization
31
BATPrompt Shi et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib134
)
Language understanding, 2. Text summarization, 3. Text simplification
32
COPLE Zhan et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib178
)
GLUE - SST2 Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
) , COLA Warstadt et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib161
) , MNLI Williams et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib163
) , QNLI Rajpurkar et al. ( 
2016
https://arxiv.org/html/2502.16923v2#bib.bib125
) , RTE Dagan et al. ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib24
) , MRPC Dolan and Brockett ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib31
) , QQP Cer et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib12
) MMLU Hendrycks et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib49
) - STEM, Humanities, Social Sciences and Other
33
CRISPO He et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib48
)
Summarization, QA
34
DAPO Yang et al. ( 
2024c
https://arxiv.org/html/2502.16923v2#bib.bib171
)
Sentiment classification, 2. topic classification, 3. News, 4. TREC Voorhees and Tice ( 
2000
https://arxiv.org/html/2502.16923v2#bib.bib151
) , 5. subjectivity classification Pang and Lee ( 
2004
https://arxiv.org/html/2502.16923v2#bib.bib116
) , 6. Logic Five, 7. Hyperbaton, 8. Disambiguation, 9. Salient, 10.Translation
35
DRPO Amini et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib3
)
Alignment benchmark
36
EVOPROMPT Guo et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib47
)
Language Understanding: Sentiment classification (e.g., SST-2, SST-5, CR, MR Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
); Hu and Liu ( 
2004
https://arxiv.org/html/2502.16923v2#bib.bib56
); Pang and Lee ( 
2005
https://arxiv.org/html/2502.16923v2#bib.bib117
) ), 2. Topic classification (e.g., AGNews Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
) , TREC Voorhees and Tice ( 
2000
https://arxiv.org/html/2502.16923v2#bib.bib151
) ), Subjectivity classification (Subj Pang and Lee ( 
2004
https://arxiv.org/html/2502.16923v2#bib.bib116
) ). 3. Language Generation: Summarization (SAMSum Gliwa et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib45
) ). Simplification (ASSET Alva-Manchego et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib2
) ). 4. Reasoning (BIG-Bench Hard Tasks) Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) : Multi-step reasoning tasks from BBH, such as logical deduction, causal judgment, and object tracking.
37
FIPO Lu et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib96
)
Generation: GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) 2. Multiple Choice: PiQA Bisk et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib8
) , CosmosQA Huang et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib57
) , MMLU Hendrycks et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib49
)
38
LMEA Liu et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib90
)
Traveling Salesman Problems (TSPs)
39
MIPRO Opsahl-Ong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib112
)
Question Answering (HotPotQA) Yang et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib173
) 2. Classification (Iris Fisher ( 
1936
https://arxiv.org/html/2502.16923v2#bib.bib40
) , Heart Disease Detrano et al. ( 
1989
https://arxiv.org/html/2502.16923v2#bib.bib28
) ) 3. Entailment (ScoNe) She et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib133
) 4. Multi-hop Fact Extraction and Claim Verification (HoVer) Jiang et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib61
)
40
MOP Wang et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib153
)
50 tasks comprising of Instruction Induction Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
) , Super Natural Instructions Mishra et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib105
) , BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
)
41
MORL-Prompt Jafari et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib59
)
Unsupervised Text Style Transfer: Shakespearean data Xu et al. ( 
2012
https://arxiv.org/html/2502.16923v2#bib.bib167
) 2. Supervised Machine Translation: iwslt2017 Cettolo et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib13
)
42
OIRL Sun et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib144
)
Arithmetic reasoning: GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , MAWPS, SVAMP Patel et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib118
)
43
OPRO Yang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib169
)
GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , BBH (23 tasks) Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) , MultiArith Roy and Roth ( 
2016
https://arxiv.org/html/2502.16923v2#bib.bib128
) , AQuA Garcia et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib41
)
44
PE2 Ye et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib174
)
MultiArith and GSM8K for math reasoning Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) ,
Instruction Induction Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
) ,
BIG-bench Hard for challenging LLM tasks Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
)
Counterfactual Evaluation
Production Prompt
45
PIN Choi et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib18
)
Classification: SST-2 and etc Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
)
Unsupervised Text Style transfer: Yelp Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
)
3.Textual Inversion From Images: MSCOCO Lin et al. ( 
2014
https://arxiv.org/html/2502.16923v2#bib.bib86
) , LAION Schuhmann et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib131
)
46
PLUM Pan et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib115
)
Natural-Instructions datasets v2.6 Mishra et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib105
)
47
PRewrite Kong et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib73
)
Classification: AG News Zhang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib183
) , SST-2 Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
)
Question answering: NQ Kwiatkowski et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib75
)
Arithmetic reasoning: GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
)
48
PROMPTWIZARD Agarwal et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib1
)
BIG-Bench Instruction Induction (BBII) Honovich et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib51
)
GSM8k Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , AQUARAT Ling et al. ( 
2017
https://arxiv.org/html/2502.16923v2#bib.bib88
) , and SVAMP Patel et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib118
)
BIG-Bench Hard (BBH) Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
)
MMLU Hendrycks et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib49
) , Ethos Mollas et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib106
) , PubMedQA Jin et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib64
) , MedQA Jin et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib63
)
49
PROMST Chen et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib14
)
11 multistep tasks: 1. Webarena, 2. Alfworld Shridhar et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib138
) , 3. Scienceworld Wang et al. ( 
2022a
https://arxiv.org/html/2502.16923v2#bib.bib154
) , 4. BoxNet1 Nezhadarya et al. ( 
2019
https://arxiv.org/html/2502.16923v2#bib.bib109
) , 5. BoxNet2,
BoxLift, 7. Warehouse, 8. Gridworld 1, 9. Gridworld 2, 10. Blocksworld, 11. Logistics
50
Reprompting Xu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib168
)
BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) , GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , MATH 
Hendrycks et al.
https://arxiv.org/html/2502.16923v2#bib.bib50
Table 6: Tasks covered in the different papers Report issue for preceding element
SNo.
Paper
Tasks
51
SAMMO Schnabel and Neville ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib130
)
BigBench zero-shot classification tasks Srivastava et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib143
)
GeoQuery Zelle and Mooney ( 
1996
https://arxiv.org/html/2502.16923v2#bib.bib176
) , SMCalFlow Andreas et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib5
) , Overnight Wang et al. ( 
2015
https://arxiv.org/html/2502.16923v2#bib.bib159
) 3. Super-NaturalInstructions Mishra et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib105
)
52
SCULPT Kumar et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib74
)
BBH (23 tasks) Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) , RAI Kumar et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib74
)
53
SOS Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
)
Sentiment Analysis 2. Orthography Analysis, 3. Taxonomy of Animals, 4. Disambiguation QA, 5. Logical Five, 6. Color Reasoning
54
SPRIG Zhang et al. ( 
2024b
https://arxiv.org/html/2502.16923v2#bib.bib180
)
Reasoning: Tasks requiring multi-step logic or causal reasoning.
Math: Arithmetic and logical deduction problems.
Social Understanding: Empathy detection, humor identification, and politeness evaluation.
Commonsense: Inference tasks like object counting and temporal reasoning.
Faithfulness: Ensuring generated outputs align with input data.
Knowledge: Open-domain QA and knowledge recall tasks.
Language Understanding: Tasks like sentiment analysis and text classification.
Popular benchmarks include MMLU Hendrycks et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib49
) , BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) , TruthfulQA Lin et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib85
) , XCOPA Ponti et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib121
) , SocKET Choi et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib17
) , and others, covering 47 task types across multiple languages and domains.
55
StraGo Wu et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib164
)
BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) (five challenging tasks within Big-Bench Hard) 2. SST-5 Socher et al. ( 
2013
https://arxiv.org/html/2502.16923v2#bib.bib140
) (fine-grained sentiment classification) 3. TREC Voorhees and Tice ( 
2000
https://arxiv.org/html/2502.16923v2#bib.bib151
) (question-type classification). 4. MedQA Jin et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib63
) ,MedMCQA Pal et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib114
) (medical-domain QA) 5. Personalized Intent Query (an internal industrial scenario)
56
TextGrad Yuksekgonul et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib175
)
LeetCode Hard Shinn et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib137
) , Google-proof QA Rein et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib126
) , MMLU Hendrycks et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib49
) (Machine Learning, College Physics), BBH Suzgun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib147
) (Object Counting, Word Sorting), GSM8k Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) , DOCKSTRING Garc'ia-Orteg'on et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib42
) (molecule evaluation)
57
UNIPROMPT Juneja et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib66
)
(1) Ethos Mollas et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib106
) , (2) ARC Clark et al. ( 
2018
https://arxiv.org/html/2502.16923v2#bib.bib20
) , (3) MedQA Jin et al. ( 
2020
https://arxiv.org/html/2502.16923v2#bib.bib63
) , (4) GSM8K Cobbe et al. ( 
2021
https://arxiv.org/html/2502.16923v2#bib.bib21
) and (5) one real-world task: Search Query Intent Juneja et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib66
)
Table 7: Tasks covered in the different papers Report issue for preceding element
14 Prompt examples
Report issue for preceding element
14.1 Instruction Induction
Report issue for preceding element
Below is the original instruction induction prompt used by Honovich et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib52
) {mdframed}[backgroundcolor=gray!20, linecolor=black] {{# system ∼ similar-to \sim ∼ }}
You are a helpful assistant
{{ ∼ / similar-to absent \sim/ ∼ / system }}
{{# user ∼ similar-to \sim ∼ }}
I gave a friend an instruction and [[n_demo]] inputs. The friend read the instruction and wrote an output for every one of the inputs. Here are the input - output pairs:
{{ demos }}
What was the instruction ? It has to be less than {{ max_tokens }} tokens .
{{ ∼ / similar-to absent \sim/ ∼ / user }}
{{# assistant ∼ similar-to \sim ∼ }}
The instruction was {{gen 'instruction ' [[ GENERATION_CONFIG ]]}}
{{ ∼ / similar-to absent \sim/ ∼ / assistant }}
Report issue for preceding element
14.2 Metaprompt design example
Report issue for preceding element
Below is the metaprompt used in OPRO Yang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib169
) {mdframed}[backgroundcolor=gray!20, linecolor=black] I have some texts along with their corresponding scores. The texts are arranged in ascending order based on their scores, where higher scores indicate better quality. text:
Let's figure it out!
score: 61
text: Let's solve the problem.
score: 63
(... more instructions and scores ... )
The following exemplars show how to apply your text:
you replace in each input with your text, then read the input and give an output. We say your output is wrong if your output is different from the given output, and we say your output is correct if they are the same.
input: Q: Alannah, Beatrix, and Queen are preparing for the new school year and have been given books by their parents. Alannah has 20 more books than Beatrix. Queen has 1/5 times more books than Alannah. If Beatrix has 30 books, how many books do the three have together?
A: output: 140
(... more exemplars ... )
Write your new text that is different from the old ones and has a score as high as possible. Write the text in square brackets
Report issue for preceding element
14.3 LLM Feedback prompts
Report issue for preceding element
Table 8: Automatic prompt optimization for LLM-as-a-Judge methods, text gradients Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
); Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
) and PE2 Ye et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib174
) .
Method
LLMaaJ prompt
Candidate prompt
Response
 
Subject of evaluation
 
(prompt / response / both)
Evaluation output
Rewritten prompt
Text-gradients Pryzant et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib123
)
 
I'm trying to write a zero-shot classifier prompt. My current prompt is:
 
"{prompt}"
 
But this prompt gets the following examples wrong:
 
{error_string}
 
give {num_feedbacks} reasons why the prompt could have gotten these examples wrong. Wrap each reason with 
 and 
 
Determine whether the Statement is a lie (Yes) or not (No) based on the Context and other information.
 
Statement: Small businesses (are) going out of business in record numbers. Job title: Senator. State: Texas. Party: republican. Context: a speech at Liberty University"
 
Label: Yes Prediction: No
N/A
Prompt
The prompt does not take into account the speaker's potential biases or agenda, which could influence the veracity of their statements.
Determine if the statement is true (Yes) or false (No) based on the context, sources referenced, and potential biases of the speaker.
Text-gradients Wang et al. ( 
2024a
https://arxiv.org/html/2502.16923v2#bib.bib156
)
I'm writing prompts for a language model designed for a task. My current prompt is:
{cur prompt}
But this prompt gets the following examples wrong:
{error string}
For each wrong example, carefully examine each question and wrong, answer step by step, provide comprehensive and different reasons why the prompt leads to the wrong answer. At last, based on all these reasons, summarize and list all the aspects that can improve the prompt.
 
Premise: William learns that kids play in water coming up in streams out of a tiled floor with image of a large rose on it.
 
Hypothesis: William learns that kids are playing in water.
 
Label: Non-entailment Prediction: Entailment
Non-entailment
Prompt
Error Feedback: "Ignoring context and detail" The model might be overlooking the details of the premise 'kids play in water coming up in streams out of a tiled floor with an image of a large rose on it,', which directly implies the hypothesis.
Compare the provided sentences. Take into account the subtleties in the context, pinpoint the order of events and differentiate between facts and assumptions. If the hypothesis is a direct result of the premise, select 'entailment'.
PE2 Ye et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib174
)
Instruction For each example, provide reasoning according to the following template
Output is correct?
 
Necessary to edit the prompt?
 
If yes, suggestions on prompt editing?
Current Prompt Let's think step by step. # Full Template “' Question: Answer: Let's think step by step. “' # Examples ## Example 1 Input: George had 28 socks. If he threw away 4 socks … Output: 64 Reasoning: Step 1: George had 28 socks. Step 2: … Label: 60 [More examples …]
N/A
Both
Example 1 Output is correct? No. Reasoning: the model didn't subtract the socks he threw away. Prompt describing the task correctly? Yes. Necessary to edit the prompt? Yes. Suggestions: The prompt should be edited to guide the model to perform subtraction. [More examples …]
Now carefully review your reasoning and proceed with step 2: refine the prompt. # Current Prompt Let's think step by step. # Instructions * The total length should be less than 50 words * Reply with the prompt. Do not include other text.
Report issue for preceding element
Table 9: Automatic prompt optimization for LLM-as-a-Judge methods, Hints Sun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib145
) .
Method
LLMaaJ prompt
Candidate prompt
Response
 
Subject of evaluation
 
(prompt / response / both)
Evaluation output
Rewritten prompt
Hints Sun et al. ( 
2023
https://arxiv.org/html/2502.16923v2#bib.bib145
)
 
Given following task: [Task Description]
 
Given Input: [Input]
 
And its expected Output: [output]
 
List the reason or hint why it's with this expected output within tag 
 and 
.
 
Determine whether one sentence entails the next
Given Input: [input]
Identify the relation between the following premises and hypotheses, choosing from the options 'entailment' or 'non-entailment'.
 
Put your answer within tag 
 and 
.
Result
Non-entailment
Prompt
Entailment occurs when the hypothesis is a logical consequence of the premise, or when the premise guarantees the truth of the hypothesis, regardless of the level of specificity or simplification of the terms involved.
Non-entailment occurs when the premise does not guarantee the truth of the hypothesis, or when there is a possibility that the hypothesis is false or unknown, especially when the premise involves beliefs or thoughts of other people.
 
Determine whether one sentence entails the next. Some useful hints are:
Entailment occurs when the hypothesis is a logical consequence of the premise, or when the premise guarantees the truth of the hypothesis, regardless of the level of specificity or simplification of the terms involved.
Non-entailment occurs when the premise does not guarantee the truth of the hypothesis, or when there is a possibility that the hypothesis is false or unknown, especially when the premise involves beliefs or thoughts of other people.
Given Input: [input]
Identify the relation between the following premises and hypotheses, choosing from the options 'entailment' or 'non-entailment'. Put your answer within tag 
 and 
.
Result
Report issue for preceding element
Table 10: Automatic prompt optimization for LLM-as-a-Judge methods, Critique He et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib48
) .
Method
LLMaaJ prompt
Candidate prompt
Response
 
Subject of evaluation
 
(prompt / response / both)
Evaluation output
Rewritten prompt
Critique He et al. ( 
2025
https://arxiv.org/html/2502.16923v2#bib.bib48
)
 
Critique:
Number of words: The predicted summaries tended to be longer with more details while the reference summaries were shorter and more concise.
Number of sentences: The predicted summaries used more sentences to describe the inputs while the reference summaries were more succinct with fewer sentences.
Precision: Some details in the predicted summaries were not important and not mentioned in the reference summaries
Recall: Some key details highlighted in the reference summaries were missing from the predicted summaries.
 
Suggestion:
Specifying the expected length of the summary (e.g. 1-2 sentences)
Emphasizing to only include the most important/key details
Indicating which details should be prioritized or omitted
 
For the given text, write a 1-2 sentence summary within ⟨summary⟩ tags that highlights the most important details. Focus on including who the key people are and what happened between them.
 
INSERT INPUT HERE
 
Some key details to focus on include the main characters, any plans or arrangements that were made, and the overall outcome or resolution.
 
Tegan tells Valentia that Paul's brother sent her a friend request on social media, though she and Paul had previously broken up. Valentia advises Tegan to ignore the request, not wanting Tegan to revisit her past relationship with Paul.
 
Score: 42.1
both
 
Comparing the high-score and low-score instructions, here are some suggestions that could improve them:
 
⟨suggestion⟩ Specify the desired length or range for the summaries (e.g., 10 words and 1-2 sentences).⟨/suggestions⟩
 
⟨suggestion⟩ Specify to focus on key events and specify which details ⟨/suggestion⟩
 
⟨suggestion⟩ Specify the output should not contain unnessary context ⟨/suggestion⟩
Read the dialogue provided in INSERT INPUT HERE and identify the key events between characters and outcomes. Then write a 1-2 sentence summary within ⟨summary⟩ tags that concisely captures these important plot points, such as who will borrow a dress or who has an interview, while keeping within 10 words where possible. Focus only on the characters and salient events, omitting unnecessary context.
Report issue for preceding element
Table 11: Automatic prompt optimization for LLM-as-a-Judge methods, Reflection Cieri et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib19
) .
Method
LLMaaJ prompt
Candidate prompt
Response
 
Subject of evaluation
 
(prompt / response / both)
Evaluation output
Rewritten prompt
Reflection Cieri et al. ( 
2022
https://arxiv.org/html/2502.16923v2#bib.bib19
)
 
Here is a conversation with an LLM:
 
{x|y}.
 
Below are the criticisms on {y}:
 
Explain how to improve {x}.
 
Below are the criticisms on {x}:
 
Incorporate the criticisms, and produce a new variable.
N/A
both
 
Exmaple output for instance optimization (a specific coding problem, for example):
 
Handling 'nums[i] == k'**: The current logic does not correctly handle the case when 'nums[i] == k'. The balance should be reset or adjusted differently when 'k' is encountered.
 
Output for prompt optimization:
 
The evaluator LLM simply returns if the generated output and ground truth matches (math problem result, for example)
For prompt optimization:
From: You will answer a reasoning question. Think step by step. The last line of your response should be of the following format: 'Answer: $VALUE' where VALUE is a numerical value.
To: You will answer a reasoning question. List each item and its quantity in a clear and consistent format, such as '- Item: Quantity'. Sum the values directly from the list and provide a concise summation. Ensure the final answer is clearly indicated in the format: 'Answer: $VALUE' where VALUE is a numerical value. Verify the relevance of each item to the context of the query and handle potential errors or ambiguities in the input. Double-check the final count to ensure accuracy."
Report issue for preceding element
Table 12: Automatic prompt optimization for LLM-as-a-Judge methods, Safety Score Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
) .
Method
LLMaaJ prompt
Candidate prompt
Response
 
Subject of evaluation
 
(prompt / response / both)
Evaluation output
Rewritten prompt
Safety Score Sinha et al. ( 
2024
https://arxiv.org/html/2502.16923v2#bib.bib139
)
You are a security gatekeeper. Given an existing prompt and a series of cases where it made mistakes. Look through each case carefully and identify what is causing the mistakes. Based on these observations, output a way to improve the prompts based on the mistakes. From a security perspective, a mistake was made when the LLM helped the user perform a malicious task. If the LLM responds with a "canned response", like, "I am just an AI, I cannot help you with this…" then the LLM did not help the user. If the LLM says it cannot answer without more information then the LLM did not help.
Some ways to make a prompt secure are:
Add a detailed description of the task and how to solve it. Consider providing a step-by-step description of the process the LLM should follow.
Specify instructions to ensure the LLM's answer is respectful.
Specify guardrails around input and output format.
{passed in data}*
ways to make the existing prompt more secure based on observations of the mistakes in the cases above are:
You are a mutator. Given a prompt, your task is to generate another prompt with the same semantic meaning and intentions. # Example: current prompt: Your mission is to ascertain the sentiment of the provided text and assign a sentiment label from ['negative', 'positive'].
mutated prompt: Determine the sentiment of the given sentence and assign a label from ['negative', 'positive'].
Given:
{passed in data}
 
KPI score:
 
Security score:
Response
Select the locally optimal with respect to an objective if it achieves the best performance on this objective among all prompts that exhibit similar performance across all other objectives in other objectives
Task Description: You are a Sentiment Classifier. Your task is to classify the emotional sentiment of the text to understand the overall tone and sentiment expressed. This sentiment classification can be used to analyze customer feedback, improve product experiences, or identify potential issues.
Instructions for Respectful Language Model: It is important to ensure that the language model promotes positive and respectful interactions. Therefore, please note that the language model should not provide any support or guidance for illegal activities, harmful actions, or unethical behavior. Emphasize the importance of promoting positive and respectful interactions.
Input and Output Format: The input should only consist of a single sentence or a short paragraph that requires sentiment classification. The output should provide the emotional sentiment without any additional information or suggestions.
Examples:
Please classify the emotional sentiment expressed in the following texts:
Input: "The new software update is user-friendly and efficient."
Correct Answer: ['positive']
{Another four few shot examples}
Please provide the emotional sentiment for each input text without any additional information or suggestions.
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