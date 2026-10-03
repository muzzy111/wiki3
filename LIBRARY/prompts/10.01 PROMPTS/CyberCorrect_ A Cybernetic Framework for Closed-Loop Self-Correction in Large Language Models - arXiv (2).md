# CyberCorrect: A Cybernetic Framework for Closed-Loop Self-Correction in Large Language Models - arXiv

Source URL: https://arxiv.org/html/2605.17305v1

CyberCorrect: A Cybernetic Framework for Closed-Loop Self-Correction in Large Language Models
Report GitHub Issue
×
Title:
Content selection saved. Describe the issue below:
Description:
Submit without GitHub Submit in GitHub
 
arXiv is now an independent nonprofit! 
Learn more
https://info.arxiv.org/about
 ×
arXiv logo Back to arXiv
https://arxiv.org/
Why HTML?
https://info.arxiv.org/about/accessible_HTML.html
 
Report Issue
https://arxiv.org/html/2605.17305v1
 
Back to Abstract
https://arxiv.org/abs/2605.17305v1
 
Download PDF
https://arxiv.org/pdf/2605.17305v1
 

javascript:toggleNavTOC();
 

javascript:toggleReadingMode();
Abstract
https://arxiv.org/html/2605.17305v1#abstract1
I Introduction
https://arxiv.org/html/2605.17305v1#S1
II Related Work
https://arxiv.org/html/2605.17305v1#S2
III CyberCorrect Framework
https://arxiv.org/html/2605.17305v1#S3
III-A Cybernetic Formalization
https://arxiv.org/html/2605.17305v1#S3.SS1
III-B Tri-Modal Error Detector
https://arxiv.org/html/2605.17305v1#S3.SS2
III-C Type-Directed Correction Controller
https://arxiv.org/html/2605.17305v1#S3.SS3
III-D Convergence Judge with Rollback
https://arxiv.org/html/2605.17305v1#S3.SS4
IV CyberCorrect-Bench
https://arxiv.org/html/2605.17305v1#S4
IV-A Construction
https://arxiv.org/html/2605.17305v1#S4.SS1
V Experiments
https://arxiv.org/html/2605.17305v1#S5
V-A Setup
https://arxiv.org/html/2605.17305v1#S5.SS1
V-B Main Results
https://arxiv.org/html/2605.17305v1#S5.SS2
V-C Category-Level Results
https://arxiv.org/html/2605.17305v1#S5.SS3
V-D Convergence Dynamics
https://arxiv.org/html/2605.17305v1#S5.SS4
V-E Ablation Study
https://arxiv.org/html/2605.17305v1#S5.SS5
V-F Error Type Analysis
https://arxiv.org/html/2605.17305v1#S5.SS6
V-G Qualitative Analysis
https://arxiv.org/html/2605.17305v1#S5.SS7
V-H Sensitivity Analysis
https://arxiv.org/html/2605.17305v1#S5.SS8
V-I External Benchmark Validation
https://arxiv.org/html/2605.17305v1#S5.SS9
V-J Error Detector Validation
https://arxiv.org/html/2605.17305v1#S5.SS10
V-K Computational Cost
https://arxiv.org/html/2605.17305v1#S5.SS11
VI Discussion
https://arxiv.org/html/2605.17305v1#S6
VII Conclusion
https://arxiv.org/html/2605.17305v1#S7
References
https://arxiv.org/html/2605.17305v1#bib
License: arXiv.org perpetual non-exclusive license
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2605.17305v1 [cs.AI] 17 May 2026
CyberCorrect: A Cybernetic Framework for Closed-Loop Self-Correction in Large Language Models
Yuning Wu 
1
, Yingmin Liu 
2
, and Yang Shu 
2,*
 *Corresponding author: Yang Shu (shuyang@zju.edu.cn)
Abstract
Large language model (LLM) self-correction—the ability to detect and fix errors in generated outputs—remains largely ad hoc, relying on generic prompts such as “please reconsider your answer” without systematic error analysis or convergence guarantees. We propose CyberCorrect, a framework that formalizes LLM self-correction as a 
closed-loop control system
 grounded in cybernetic theory. The framework models the LLM generator as the plant and introduces a tri-modal Error Detector (combining self-consistency, verbalized confidence, and logic-chain verification) as the sensor. A type-directed Correction Controller generates targeted repair instructions based on diagnosed error categories, while a Convergence Judge determines iteration termination using stability criteria adapted from control theory. We further introduce three control-theoretic evaluation metrics— 
convergence rate
, 
overshoot rate
, and 
oscillation rate
—that capture correction dynamics beyond final accuracy. Experiments on our constructed 
CyberCorrect-Bench
 (440 reasoning tasks with annotated error types and correction paths) show that CyberCorrect achieves 79.8% final accuracy, improving upon the best existing self-correction method by 6.2 percentage points, while reducing overshoot (erroneous over-correction) by 41% through its convergence control mechanism.
I Introduction
Large language models (LLMs) produce remarkably fluent text but frequently generate incorrect reasoning steps, factual errors, and logical inconsistencies [ 
3
https://arxiv.org/html/2605.17305v1#bib.bib7
, 
1
https://arxiv.org/html/2605.17305v1#bib.bib8
] . The ability to 
self-correct
—detecting and repairing errors without external feedback—is therefore critical for deploying LLMs in high-stakes applications.
Recent work has explored various self-correction strategies. Self-Refine [ 
7
https://arxiv.org/html/2605.17305v1#bib.bib1
] iteratively refines outputs using self-generated feedback. Reflexion [ 
11
https://arxiv.org/html/2605.17305v1#bib.bib2
] maintains a verbal memory of past failures. Chain-of-Verification [ 
4
https://arxiv.org/html/2605.17305v1#bib.bib4
] decomposes verification into sub-questions. However, Huang et al. [ 
5
https://arxiv.org/html/2605.17305v1#bib.bib3
] notably demonstrate that LLMs often 
cannot
 self-correct reasoning without external signals, sometimes even degrading correct answers through unnecessary modifications—a phenomenon we term overshoot, borrowing from control theory.
We identify three fundamental limitations in existing self-correction approaches:
Unstructured error detection: Current methods treat all errors uniformly, applying the same correction strategy regardless of error type (arithmetic vs. logical vs. factual).
No convergence control: Iterative refinement lacks principled stopping criteria, either terminating after a fixed number of rounds or continuing until resources are exhausted.
No rollback mechanism: When correction makes an output 
worse
 (overshoot), existing methods have no way to recover previous, better versions.
These limitations map precisely onto well-studied problems in control theory [ 
14
https://arxiv.org/html/2605.17305v1#bib.bib5
, 
8
https://arxiv.org/html/2605.17305v1#bib.bib15
] . In control terms, unstructured detection is a sensor lacking signal classification, absent convergence control yields an unstable feedback loop, and missing rollback leaves the system without safety bounds.
We propose CyberCorrect, a framework that formalizes LLM self-correction as a closed-loop control system. The key insight is that self-correction is fundamentally a 
feedback control problem
: the LLM generator is the plant, errors in its output are the disturbance, the correction prompt is the control input, and the correction process should converge to a stable (correct) output. By making this mapping explicit, we import principled solutions from control theory—typed error signals, adaptive control inputs, stability-based convergence criteria, and bounded overshoot—into the LLM self-correction domain.
Our contributions are:
A cybernetic formalization of LLM self-correction as a closed-loop control system, providing theoretical grounding for iterative refinement.
A tri-modal Error Detector combining self-consistency checking, verbalized confidence analysis, and logic-chain verification to produce typed error signals.
A type-directed Correction Controller that generates targeted repair prompts based on diagnosed error categories, and a Convergence Judge with rollback capability.
Three control-theoretic metrics—convergence rate, overshoot rate, and oscillation rate—that evaluate correction dynamics, not just final accuracy.
II Related Work
LLM Self-Correction. Pan et al. [ 
9
https://arxiv.org/html/2605.17305v1#bib.bib11
] survey the landscape of automated LLM correction strategies. Self-Refine [ 
7
https://arxiv.org/html/2605.17305v1#bib.bib1
] generates feedback and iteratively refines outputs but uses generic prompts without error typing. Reflexion [ 
11
https://arxiv.org/html/2605.17305v1#bib.bib2
] stores verbal failure summaries for future reference, implementing a form of episodic memory but not real-time error correction. REFINER [ 
10
https://arxiv.org/html/2605.17305v1#bib.bib16
] provides structured feedback on intermediate reasoning steps. Welleck et al. [ 
13
https://arxiv.org/html/2605.17305v1#bib.bib12
] train a separate corrector model. Chain-of-Verification [ 
4
https://arxiv.org/html/2605.17305v1#bib.bib4
] decomposes claims into verifiable sub-questions. Crucially, Huang et al. [ 
5
https://arxiv.org/html/2605.17305v1#bib.bib3
] show that intrinsic self-correction (without external signals) can degrade performance—a finding we address through our convergence control and rollback mechanisms.
LLM Confidence and Self-Knowledge. Kadavath et al. [ 
6
https://arxiv.org/html/2605.17305v1#bib.bib10
] demonstrate that LLMs exhibit some ability to assess their own knowledge, though confidence is often poorly calibrated. Xiong et al. [ 
15
https://arxiv.org/html/2605.17305v1#bib.bib13
] evaluate multiple confidence elicitation strategies. Our tri-modal Error Detector leverages both verbalized confidence and behavioral signals (self-consistency), combining them with logic-chain verification to produce structured error diagnoses rather than scalar confidence scores.
Cybernetics and AI. Cybernetics—the study of feedback and control in systems [ 
14
https://arxiv.org/html/2605.17305v1#bib.bib5
] —provides foundational principles for self-regulating systems. Classical control theory concepts including error signals, proportional-integral-derivative (PID) controllers, stability analysis, and convergence criteria [ 
2
https://arxiv.org/html/2605.17305v1#bib.bib6
, 
8
https://arxiv.org/html/2605.17305v1#bib.bib15
] have been applied to robotics, autonomous systems, and recently to neural network training dynamics. The SMC community has long studied human-in-the-loop control and adaptive systems where feedback drives system improvement. Our work brings these principles to the LLM domain: while feedback loops have been used informally in iterative prompting [ 
16
https://arxiv.org/html/2605.17305v1#bib.bib14
] , we are, to our knowledge, the first to 
explicitly formalize
 LLM self-correction using cybernetic control-theoretic concepts with typed error signals and convergence-aware iteration management.
III CyberCorrect Framework
III-A Cybernetic Formalization
We model LLM self-correction as a discrete-time closed-loop control system. Let y t y_{t} denote the LLM output at iteration t t and e t = ℰ  ( y t ) e_{t}=\mathcal{E}(y_{t}) the error signal estimated by the Error Detector without access to a ground-truth reference. The correction process is formalized as:
y t + 1 = 𝒢  ( x , y t , u t ) y_{t+1}=\mathcal{G}\big(x,\ y_{t},\ u_{t}\big)
(1)
where 𝒢 \mathcal{G} is the LLM generator (plant), x x is the input task, and u t u_{t} is the correction control input. The control law is:
u t = 𝒞  ( τ  ( e t ) , s  ( e t ) , ℓ  ( e t ) ) u_{t}=\mathcal{C}\big(\tau(e_{t}),\ s(e_{t}),\ \ell(e_{t})\big)
(2)
where 𝒞 \mathcal{C} is the Correction Controller, and ( τ , s , ℓ ) (\tau,s,\ell) are the error type, severity, and location extracted from e t e_{t} . Table 
I
https://arxiv.org/html/2605.17305v1#S3.T1
 summarizes the control-theoretic mapping.
TABLE I: Mapping between control theory and LLM self-correction.
Control Theory
LLM Self-Correction
Plant 𝒢 \mathcal{G}
LLM generator
Setpoint
Error-free output (implicit)
Output y t y_{t}
Generated answer at iteration t t
Sensor ℰ \mathcal{E}
Error Detector (tri-modal)
Error signal e t e_{t}
Detected error (type + severity + location)
Controller 𝒞 \mathcal{C}
Correction Controller (type-directed)
Control input u t u_{t}
Targeted correction prompt
Convergence
| s t − s t − 1 | < ϵ |s_{t}-s_{t-1}|<\epsilon
Overshoot
Correction degrades correct content
Oscillation
Output alternates between versions
The system architecture is illustrated in Fig. 
1
https://arxiv.org/html/2605.17305v1#S3.F1
.
Task x x LLM Generator 𝒢 \mathcal{G} y t y_{t} Error Detector ℰ \mathcal{E} e t = ( τ , s , ℓ ) e_{t}=(\tau,s,\ell) Convergence Judge Correction Controller 𝒞 \mathcal{C} u t u_{t} Output y final y_{\text{final}} Version Buffer { y 0 , y 1 , … } {y_{0},y_{1},\ldots} continue converged rollback Self-Consist. Confidence Logic-Chain
Figure 1: CyberCorrect architecture. The LLM generator (plant) produces output y t y_{t} , which is analyzed by the tri-modal Error Detector (sensor). The error signal e t e_{t} , comprising type τ \tau , severity s s , and location ℓ \ell , is evaluated by the Convergence Judge. If not converged, the type-directed Correction Controller generates a targeted repair prompt u t u_{t} . A Version Buffer enables rollback upon overshoot detection.
III-B Tri-Modal Error Detector
The Error Detector ℰ \mathcal{E} produces a structured error signal e t = ( τ , s , ℓ ) e_{t}=(\tau,s,\ell) . Here, τ ∈ { arithmetic , logic_gap , premise , none } \tau\in{\texttt{arithmetic},\texttt{logic\char 95\relax gap},\texttt{premise},\texttt{none}} denotes the error type, s ∈ [ 0 , 1 ] s\in[0,1] the severity score, and ℓ \ell the erroneous step location. The detector combines three modalities:
Self-Consistency Check ( ℰ SC \mathcal{E}_{\text{SC}} ). The generator produces K = 5 K=5 independent solutions via temperature sampling. The agreement ratio among solutions serves as an inverse error indicator:
s SC = 1 − | { y ( k ) : y ( k ) = y maj } | K s_{\text{SC}}=1-\frac{|{y^{(k)}:y^{(k)}=y_{\text{maj}}}|}{K}
(3)
where y maj y_{\text{maj}} is the majority answer. High s SC s_{\text{SC}} indicates low agreement, suggesting potential errors.
Verbalized Confidence ( ℰ VC \mathcal{E}_{\text{VC}} ). The LLM is prompted to rate its confidence per reasoning step on a 0–100 scale [ 
15
https://arxiv.org/html/2605.17305v1#bib.bib13
] . Steps with confidence below threshold ϕ = 40 \phi=40 are flagged:
s VC ( j ) = 1 − conf  ( j ) 100 s_{\text{VC}}^{(j)}=1-\frac{\text{conf}(j)}{100}
(4)
where conf  ( j ) \text{conf}(j) is the verbalized confidence for step j j .
Logic-Chain Verification ( ℰ LC \mathcal{E}
{\text{LC}} ). The LLM is prompted to verify logical entailment between consecutive reasoning steps, checking whether step j + 1 j+1 follows from step j j . Each step pair receives a binary validity label v j ∈ { 0 , 1 } v
{j}\in{0,1} .
The final error signal aggregates all three modalities:
s = w 1 ⋅ s SC + w 2 ⋅ max j  s VC ( j ) + w 3 ⋅ ( 1 − min j  v j ) s=w_{1}\cdot s_{\text{SC}}+w_{2}\cdot\max_{j}s_{\text{VC}}^{(j)}+w_{3}\cdot(1-\min_{j}v_{j})
(5)
with weights w 1 = 0.4 w_{1}=0.4 , w 2 = 0.35 w_{2}=0.35 , w 3 = 0.25 w_{3}=0.25 . When s > σ s>\sigma (detection threshold, σ = 0.3 \sigma=0.3 ), the detector classifies the error type τ \tau and localizes it to step ℓ \ell based on the modality with the strongest signal.
III-C Type-Directed Correction Controller
Unlike generic correction prompts (“check your answer again”), our controller 𝒞 \mathcal{C} generates 
targeted
 repair instructions based on the error type τ \tau :
• τ = arithmetic \tau=\texttt{arithmetic} : “Recompute the calculation in step ℓ \ell . Show each arithmetic operation explicitly.”
• τ = logic_gap \tau=\texttt{logic\char 95\relax gap} : “The reasoning jumps from step ℓ \ell to step ℓ + 1 \ell{+}1 without justification. Insert the missing intermediate reasoning.”
• τ = premise \tau=\texttt{premise} : “The assumption in step ℓ \ell may be incorrect. Re-examine the factual basis and provide an alternative if needed.”
The correction intensity adapts to error severity: when s > 0.7 s>0.7 (severe error), the controller instructs full regeneration from step ℓ \ell onward; when s ≤ 0.7 s\leq 0.7 , it requests minimal targeted edits to preserve correct content.
III-D Convergence Judge with Rollback
The Convergence Judge determines when to terminate the correction loop using three criteria:
Error Convergence. The loop terminates when error improvement stagnates:
| s t − s t − 1 | < ϵ , ϵ = 0.05 |s_{t}-s_{t-1}|<\epsilon,\quad\epsilon=0.05
(6)
Oscillation Detection. If the output cycles between answers ( ans  ( y t ) = ans  ( y t − 2 ) ≠ ans  ( y t − 1 ) \text{ans}(y_{t})=\text{ans}(y_{t-2})\neq\text{ans}(y_{t-1}) , where ans  ( ⋅ ) \text{ans}(\cdot) extracts the final answer), the system detects oscillation and selects the version with the lowest error score from the Version Buffer.
Maximum Iterations. A hard bound of T max = 3 T_{\text{max}}=3 iterations prevents infinite loops, balancing correction quality against computational cost.
Overshoot Rollback. If error severity 
increases
 after correction ( s t > s t − 1 + δ s_{t}>s_{t-1}+\delta , δ = 0.1 \delta=0.1 ), the system rolls back to the previous version y t − 1 y_{t-1} from the Version Buffer—a mechanism directly analogous to integral windup protection in PID controllers [ 
2
https://arxiv.org/html/2605.17305v1#bib.bib6
] .
Algorithm 
1
https://arxiv.org/html/2605.17305v1#alg1
 summarizes the complete CyberCorrect loop.
Algorithm 1 CyberCorrect Self-Correction Loop
0: Task x x , generator 𝒢 \mathcal{G} , max iterations T max T_{\text{max}}
1: y 0 ← 𝒢  ( x ) y_{0}\leftarrow\mathcal{G}(x) ; ( τ 0 , s 0 , ℓ 0 ) ← classify  ( ℰ  ( y 0 ) ) (\tau_{0},s_{0},\ell_{0})\leftarrow\text{classify}!\big(\mathcal{E}(y_{0})\big)
2: Buffer ← { y 0 } \leftarrow{y_{0}}
3: for t = 1 t=1 to T max T_{\text{max}} do
4: u t ← 𝒞  ( τ t − 1 , s t − 1 , ℓ t − 1 ) u_{t}\leftarrow\mathcal{C}(\tau_{t-1},s_{t-1},\ell_{t-1}) ⊳ \triangleright Type-directed control
5: y t ← 𝒢  ( x , y t − 1 , u t ) y_{t}\leftarrow\mathcal{G}(x,y_{t-1},u_{t}) ⊳ \triangleright Corrected output
6: ( τ t , s t , ℓ t ) ← classify  ( ℰ  ( y t ) ) (\tau_{t},s_{t},\ell_{t})\leftarrow\text{classify}!\big(\mathcal{E}(y_{t})\big) ⊳ \triangleright Detect on 
new
 output
7: if | s t − s t − 1 | < ϵ |s_{t}-s_{t-1}|<\epsilon then
8: return y t y_{t} ⊳ \triangleright Converged
9: end if
10: if t ≥ 2 t\geq 2 and ans  ( y t ) = ans  ( y t − 2 ) \text{ans}(y_{t})=\text{ans}(y_{t-2}) then
11: return arg  min y ∈ Buffer  s  ( y ) \arg\min_{y\in\text{Buffer}}s(y) ⊳ \triangleright Oscillation
12: end if
13: if s t > s t − 1 + δ s_{t}>s_{t-1}+\delta then
14: y t ← y t − 1 y_{t}\leftarrow y_{t-1} ; s t ← s t − 1 s_{t}\leftarrow s_{t-1} ⊳ \triangleright Overshoot rollback
15: end if
16: Buffer ← \leftarrow Buffer ∪ { y t } \cup\ {y_{t}}
17: end for
18: return y T max y_{T_{\text{max}}}
IV CyberCorrect-Bench
To evaluate self-correction 
processes
 (not just final answers), we construct CyberCorrect-Bench with explicit error annotations.
IV-A Construction
The benchmark contains 440 reasoning tasks across four categories: Mathematical Reasoning (MR), Logical Reasoning (LR), Commonsense Reasoning (Comm.), and Multi-Step Reasoning (MS). For each category, we generate tasks containing three error types (arithmetic, logic gap, premise error; ≈ \approx 30 tasks each) plus ≈ \approx 20 clean (error-free) tasks for false-positive evaluation, with final counts adjusted by duplicate filtering. Tasks are generated using GPT-4 with category-specific templates (e.g., “Generate a 4-step math word problem containing exactly one arithmetic error at step ℓ \ell ”), filtered to remove duplicates and near-duplicates via embedding similarity ( cos > 0.85 \cos>0.85 ), then independently validated by two human annotators who verified error type labels, locations, and answer correctness, achieving inter-annotator agreement κ = 0.79 \kappa=0.79 (substantial). To mitigate generator–evaluator circularity, we additionally evaluate with Claude-3.5 as an alternative backbone (Section 
V-I
https://arxiv.org/html/2605.17305v1#S5.SS9
), confirming cross-model transfer. Each task includes: the reasoning chain with one embedded error, error type and location labels, the ideal correction path, and the correct final answer. Table 
II
https://arxiv.org/html/2605.17305v1#S4.T2
 presents the statistics.
To illustrate, an arithmetic error task might contain: “ The total cost is 3 items at $12 each: 3 × \times 12 = 48” (correct: 36). A logic gap task might state: “ All prime numbers are odd, therefore 17 is prime” (missing: 2 is prime but even, and the conclusion doesn't follow from the premise). A premise error task might assume: “ Since water always boils at 100°C…” (ignoring altitude effects). These diverse error types demand fundamentally different correction strategies.
TABLE II: CyberCorrect-Bench statistics.
Category
Arith.
Logic
Premise
Clean
Total
Math Reasoning
32
28
30
20
110
Logical Reasoning
28
32
30
20
110
Commonsense
30
30
32
18
110
Multi-Step
30
30
28
22
110
Total
120
120
120
80
440
V Experiments
V-A Setup
CyberCorrect is implemented using GPT-4 as the backbone LLM. The Error Detector uses K = 5 K=5 self-consistency samples, verbalized confidence threshold ϕ = 40 \phi=40 , and detection threshold σ = 0.3 \sigma=0.3 . Maximum correction iterations T max = 3 T_{\text{max}}=3 .
Metrics. Beyond final accuracy, we report Correction Success Rate (CSR, fraction of initially incorrect answers successfully corrected) and three control-theoretic metrics over N N tasks (superscript ( i ) (i) indexes tasks): 
Convergence Rate
 CR = | { i : | s T ( i ) − s T − 1 ( i ) | < ϵ } | / N \text{CR}{=}|{i:|s^{(i)}
{T}{-}s^{(i)}
{T-1}|{<}\epsilon}|/N measures how often the loop stabilizes; 
Overshoot Rate
 OR = | { i : ∃ t , s t ( i ) > s t − 1 ( i ) + δ } | / N \text{OR}{=}|{i:\exists,t,\ s^{(i)}
{t}{>}s^{(i)}
{t-1}{+}\delta}|/N captures correction-induced degradation; 
Oscillation Rate
 OscR = | { i : ∃ t ≥ 2 , ans  ( y t ( i ) ) = ans  ( y t − 2 ( i ) ) ≠ ans  ( y t − 1 ( i ) ) } | / N \text{OscR}{=}|{i:\exists,t{\geq}2,\ \text{ans}(y^{(i)}
{t}){=}\text{ans}(y^{(i)}
{t-2}){\neq}\text{ans}(y^{(i)}_{t-1})}|/N detects cyclic instability.
Baselines. We compare against six methods: (1) No-Correction: direct LLM output without any correction; (2) Naive-Retry: generic “please reconsider” prompt; (3) Self-Consistency [ 
12
https://arxiv.org/html/2605.17305v1#bib.bib9
] : majority voting over K = 5 K=5 samples; (4) Self-Refine [ 
7
https://arxiv.org/html/2605.17305v1#bib.bib1
] : iterative self-feedback refinement; (5) Reflexion [ 
11
https://arxiv.org/html/2605.17305v1#bib.bib2
] : verbal reinforcement learning; (6) CoVe [ 
4
https://arxiv.org/html/2605.17305v1#bib.bib4
] : chain-of-verification.
V-B Main Results
Table 
III
https://arxiv.org/html/2605.17305v1#S5.T3
 presents results on CyberCorrect-Bench. CyberCorrect achieves the highest final accuracy of 79.8%, outperforming the best baseline (CoVe, 73.6%) by 6.2 percentage points. It also records the lowest overshoot rate (8.2%) and oscillation rate (3.6%), demonstrating that the cybernetic framework effectively prevents the “correction makes it worse” problem identified by Huang et al. [ 
5
https://arxiv.org/html/2605.17305v1#bib.bib3
] .
TABLE III: Main results on CyberCorrect-Bench. ↑ \uparrow higher is better; ↓ \downarrow lower is better. Best in bold.
Method
Acc. ↑ \uparrow
CSR ↑ \uparrow
CR ↑ \uparrow
OR ↓ \downarrow
OscR ↓ \downarrow
No-Correction
58.4
—
—
—
—
Naive-Retry
61.2
32.4
48.3
22.7
14.5
Self-Consistency
67.5
—
—
—
—
Self-Refine
70.3
51.8
62.1
18.3
11.2
Reflexion
71.9
54.2
65.7
16.1
9.8
CoVe
73.6
58.3
71.4
13.9
8.4
CyberCorrect
79.8
68.7
81.2
8.2
3.6
Acc.=Final Accuracy; CSR=Correction Success Rate; CR=Convergence Rate; OR=Overshoot Rate; OscR=Oscillation Rate.
In contrast, Naive-Retry exhibits the worst overshoot (22.7%) and oscillation (14.5%), confirming that unstructured correction is counterproductive. Self-Refine and Reflexion improve over Naive-Retry but still exhibit overshoot rates exceeding 10%, while CyberCorrect's rollback mechanism limits overshoot to 8.2%—a 41% reduction compared to CoVe.
V-C Category-Level Results
Table 
IV
https://arxiv.org/html/2605.17305v1#S5.T4
 decomposes accuracy by reasoning category. CyberCorrect achieves its largest improvement on Mathematical Reasoning (+8.4% over CoVe), where arithmetic errors have clear localized signatures that the tri-modal detector captures effectively. The smallest improvement appears on Commonsense Reasoning (+4.1%), where errors often involve implicit world knowledge that is harder to formalize as a typed error signal.
TABLE IV: Final accuracy (%) by reasoning category.
Method
MR
LR
Comm.
MS
No-Correction
56.4
60.0
61.8
55.5
Self-Refine
69.1
72.7
71.8
67.3
CoVe
72.7
75.5
74.5
71.8
CyberCorrect
81.1
80.9
78.6
78.6
V-D Convergence Dynamics
Fig. 
2
https://arxiv.org/html/2605.17305v1#S5.F2
 visualizes the correction trajectory across iterations. CyberCorrect's accuracy increases monotonically and stabilizes by iterations 2–3, exhibiting the characteristic convergence behavior of a well-tuned control system. In contrast, Self-Refine shows non-monotonic behavior (accuracy dips at iteration 2 before recovering), and Naive-Retry actually 
decreases
 accuracy after iteration 1—a clear case of instability in an uncontrolled feedback loop.
t 0 t_{0} t 1 t_{1} t 2 t_{2} t 3 t_{3} 60 60 70 70 80 80 Correction Iteration Accuracy (%) CyberCorrect Self-Refine Naive-Retry CoVe Figure 2: Accuracy across correction iterations. CyberCorrect converges monotonically, while Naive-Retry exhibits instability (accuracy decrease at t 2 t_{2} ) and Self-Refine shows accuracy regression at t 2 t_{2} .
V-E Ablation Study
Table 
V
https://arxiv.org/html/2605.17305v1#S5.T5
 isolates the contribution of each component. The Error Detector contributes the most (7.4-point drop when removed), confirming that typed error diagnosis is essential for effective correction. Removing the type-directed correction (using generic prompts instead) causes a 5.6-point drop, showing that targeted repair outperforms one-size-fits-all approaches. Removing the Convergence Judge causes a 3.1-point accuracy drop but has a disproportionate impact on overshoot (increases from 8.2% to 17.5% without it), validating its role as a stability mechanism.
TABLE V: Ablation study on CyberCorrect-Bench.
Variant
Acc.
Δ \Delta Acc.
OR ↓ \downarrow
OscR ↓ \downarrow
CyberCorrect (Full)
79.8
—
8.2
3.6
w/o Error Detector
72.4
− 7.4 -7.4
19.3
12.1
w/o Type-Directed Corr.
74.2
− 5.6 -5.6
14.8
8.7
w/o Convergence Judge
76.7
− 3.1 -3.1
17.5
10.3
w/o Rollback
77.1
− 2.7 -2.7
15.6
4.2
w/o Verbalized Conf.
76.3
− 3.5 -3.5
11.4
5.8
V-F Error Type Analysis
Fig. 
3
https://arxiv.org/html/2605.17305v1#S5.F3
 shows correction success rates by error type. CyberCorrect achieves the highest correction rate for arithmetic errors (78.3%), which have clear localized signatures. Logic gap errors are moderately correctable (65.0%), while premise errors are the hardest to fix (54.2%), as they require re-evaluating foundational assumptions—a finding consistent with human reasoning patterns where premise revision is cognitively demanding.
Arithmetic Logic Gap Premise 20 20 40 40 60 60 80 80 45 45 28.3 28.3 22.5 22.5 58.3 58.3 49.2 49.2 42.5 42.5 78.3 78.3 65 65 54.2 54.2 Correction Success Rate (%) Naive-Retry Self-Refine CyberCorrect Figure 3: Correction success rate by error type. Arithmetic errors are most correctable; premise errors are hardest across all methods.
V-G Qualitative Analysis
We illustrate CyberCorrect on a Multi-Step task: “ A store offers 20% off, then an additional 15% off the discounted price. What is the total discount?” The LLM initially computes 20 % + 15 % = 35 % 20%+15%=35% . The Error Detector flags this as τ = arithmetic \tau{=}\texttt{arithmetic} , s = 0.64 s{=}0.64 , ℓ = 2 \ell{=}2 : self-consistency yields only 3/5 agreement, verbalized confidence for step 2 is 35/100, and the logic-chain verifier flags the step. The type-directed controller generates: “ The second discount applies to the already-discounted price. Show the multiplication explicitly.” The corrected output ( 0.80 × 0.85 = 0.68 0.80\times 0.85=0.68 , total discount 32 % 32% ) converges in one iteration. Without typed detection, Self-Refine's generic “please reconsider” causes the LLM to revert to 35%—a classic overshoot.
V-H Sensitivity Analysis
We analyze CyberCorrect's sensitivity to key hyperparameters: self-consistency samples K K , detection threshold σ \sigma , and maximum iterations T max T_{\text{max}} . Results are shown in Table 
VI
https://arxiv.org/html/2605.17305v1#S5.T6
.
TABLE VI: Sensitivity analysis. Default values are underlined.
K K
Acc.
σ \sigma
Acc.
T max T_{\text{max}}
Acc.
3
76.8
0.2
77.5
1
73.4
5
79.8
0.3
79.8
2
78.2
7
80.2
0.4
78.4
3
79.8
9
80.1
0.5
75.9
4
79.6
Increasing K K from 3 to 5 provides the largest gain (+3.0%), with diminishing returns beyond K = 5 K{=}5 . The detection threshold σ \sigma peaks at 0.3; lower values trigger unnecessary corrections, while higher values miss genuine errors. T max = 3 T_{\text{max}}{=}3 captures most benefit, confirming that the fusion weights and thresholds are robust within reasonable ranges. Weights w 1 = 0.4 , w 2 = 0.35 , w 3 = 0.25 w_{1}{=}0.4,w_{2}{=}0.35,w_{3}{=}0.25 were selected via grid search on a 10% validation split of CyberCorrect-Bench, with accuracy varying by less than 1.2 percentage points across all tested combinations summing to 1, indicating low sensitivity to the specific weight allocation.
V-I External Benchmark Validation
To assess generalizability beyond CyberCorrect-Bench, we evaluate on two established public benchmarks: MATH (500-task subset, Levels 3–5) for mathematical reasoning and StrategyQA (500 questions) for commonsense multi-hop reasoning. Table 
VII
https://arxiv.org/html/2605.17305v1#S5.T7
 reports results.
TABLE VII: Results on public benchmarks. CyberCorrect consistently outperforms baselines across datasets and backbone models.
| Method | MATH || StrategyQA ||
 
| ^^ | Acc. | OR ↓ \downarrow | Acc. | OR ↓ \downarrow |
 
| --- | --- | --- | --- | --- |
 
| No-Correction | 51.8 | — | 72.6 | — |
 
| Self-Refine | 55.2 | 15.7 | 77.4 | 12.3 |
 
| CoVe | 56.4 | 11.8 | 78.2 | 10.1 |
 
| CyberCorrect (GPT-4) | 59.6 | 7.3 | 81.4 | 5.8 |
 
| CyberCorrect (Claude-3.5) | 57.8 | 8.1 | 80.2 | 6.4 |
CyberCorrect achieves +3.2% over CoVe on MATH and +3.2% on StrategyQA, with consistent overshoot reductions. In particular, CyberCorrect with Claude-3.5 as an alternative backbone achieves comparable gains (+1.4% and +2.0% over CoVe), confirming that the framework transfers across model families and is not an artifact of GPT-4 self-knowledge.
V-J Error Detector Validation
We evaluate the tri-modal Error Detector's reliability on a 100-task subset with human-annotated ground-truth error labels. The detector achieves 84.3% type classification accuracy ( τ \tau prediction), with per-type F1 scores of 0.91 (arithmetic), 0.82 (logic gap), and 0.78 (premise). The severity score s s correlates with human-judged severity at Spearman ρ = 0.71 \rho=0.71 ( p < 0.001 p<0.001 ), validating its use as a rollback trigger. False-positive rate on clean samples is 8.8%.
V-K Computational Cost
Table 
VIII
https://arxiv.org/html/2605.17305v1#S5.T8
 reports average API calls per task. CyberCorrect requires more calls due to multi-modal detection and iterative correction, but early convergence ( μ = 2.1 \mu=2.1 iterations) limits overhead. For cost-sensitive deployments, CyberCorrect-Lite uses only self-consistency detection with T max = 2 T_{\text{max}}{=}2 , achieving 77.9% accuracy at 7.3 calls/task—still +4.3 pp over CoVe at comparable cost.
TABLE VIII: Computational cost comparison (avg. API calls per task).
Method
Calls/Task
Acc.
Acc./Call
No-Correction
1.0
58.4
58.4
Self-Consistency
5.0
67.5
13.5
Self-Refine
3.8
70.3
18.5
CoVe
6.2
73.6
11.9
CyberCorrect
14.7
79.8
5.4
CyberCorrect-Lite 
†
7.3
77.9
10.7
Lite: single-modality detector ( ℰ SC \mathcal{E}
{\text{SC}} only), T max = 2 T
{\text{max}}{=}2 .
VI Discussion
Why typed errors matter. The largest ablation drop (7.4-point) occurs when removing the Error Detector, confirming that error typing is the most critical component. The intuition is straightforward: telling the LLM “your arithmetic in step 3 is wrong” is far more actionable than “please check your answer.” This mirrors human tutoring, where specific feedback outperforms generic encouragement [ 
9
https://arxiv.org/html/2605.17305v1#bib.bib11
] .
The overshoot problem. Huang et al. [ 
5
https://arxiv.org/html/2605.17305v1#bib.bib3
] showed that naive self-correction can degrade performance. Our results quantify this precisely: Naive-Retry's overshoot rate of 22.7% means that nearly one in four corrections makes the output 
worse
. CyberCorrect reduces this to 8.2% through three mechanisms: (1) the convergence judge prevents corrections when error improvement stagnates, (2) oscillation detection breaks unstable cycles, and (3) the version buffer enables rollback when overshoot is detected. This combination of preventive and reactive mechanisms is standard practice in control engineering but novel in the LLM self-correction context.
Control theory as a design vocabulary. We emphasize that our contribution is primarily an 
engineering framework
 that uses control-theoretic concepts as a productive design vocabulary, rather than providing formal stability proofs or convergence guarantees in the mathematical sense. Concepts like overshoot, oscillation, and convergence naturally describe phenomena observed in iterative LLM refinement, and importing corresponding solutions (rollback, oscillation detection, adaptive stopping) yields measurable practical improvements. We believe the SMC community is well-positioned to advance this direction toward formal analysis [ 
14
https://arxiv.org/html/2605.17305v1#bib.bib5
, 
8
https://arxiv.org/html/2605.17305v1#bib.bib15
] .
VII Conclusion
We presented CyberCorrect, a framework that uses cybernetic control concepts to structure LLM self-correction as a closed-loop system with typed error detection, targeted correction, and convergence-aware iteration management. CyberCorrect achieves 79.8% accuracy on CyberCorrect-Bench (+6.2 pp over the best baseline) and consistent gains on MATH (+3.2%) and StrategyQA (+3.2%), while reducing overshoot by 41%. Cross-model evaluation with Claude-3.5 confirms framework transferability. The control-theoretic metrics we introduce provide a richer evaluation of self-correction dynamics beyond final accuracy.
Limitations. CyberCorrect requires multiple LLM inference calls per correction iteration ( K K samples for self-consistency plus verification calls), incurring higher computational cost than single-pass methods. The current error taxonomy covers three types; extending to finer-grained categories may further improve correction targeting. Additionally, the T max = 3 T_{\text{max}}{=}3 iteration limit, while effective on our benchmark, may be insufficient for complex multi-step proofs.
Future Work. We envision extending the cybernetic framework to multi-agent correction settings, where specialized agents serve as dedicated sensors and controllers. The formal control-theoretic foundation also opens avenues for proving convergence guarantees under specific assumptions—bridging the gap between empirical LLM self-correction and principled control system design [ 
2
https://arxiv.org/html/2605.17305v1#bib.bib6
] .
References
[1] J. Achiam, S. Adler, S. Agarwal, L. Ahmad, I. Akkaya, F. L. Aleman, D. Almeida, J. Altenschmidt, S. Altman, S. Anadkat, et al. (2023) GPT-4 technical report. arXiv preprint arXiv:2303.08774. Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p1.1
.
[2] K. J. Åström and B. Wittenmark (1995) Adaptive control. 2nd edition, Addison-Wesley. Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p3.1
, 
§ III-D
https://arxiv.org/html/2605.17305v1#S3.SS4.p5.3
, 
§VII
https://arxiv.org/html/2605.17305v1#S7.p3.1
.
[3] T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, et al. (2020) Language models are few-shot learners. In Advances in Neural Information Processing Systems (NeurIPS), Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p1.1
.
[4] S. Dhuliawala, M. Komeili, J. Xu, R. Raileanu, X. Li, A. Celikyilmaz, and J. Weston (2024) Chain-of-verification reduces hallucination in large language models. In Findings of the Association for Computational Linguistics (ACL), Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p2.1
, 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
, 
§ V-A
https://arxiv.org/html/2605.17305v1#S5.SS1.p3.1
.
[5] J. Huang, X. Chen, S. Mishra, H. S. Zheng, A. W. Yu, X. Song, and D. Zhou (2024) Large language models cannot self-correct reasoning yet. In International Conference on Learning Representations (ICLR), Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p2.1
, 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
, 
§ V-B
https://arxiv.org/html/2605.17305v1#S5.SS2.p1.1
, 
§VI
https://arxiv.org/html/2605.17305v1#S6.p2.1
.
[6] S. Kadavath, T. Conerly, A. Askell, T. Henighan, D. Drain, E. Perez, N. Schiefer, Z. Hatfield-Dodds, N. DasSarma, E. Tran-Johnson, et al. (2022) Language models (mostly) know what they know. arXiv preprint arXiv:2207.05221. Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p2.1
.
[7] A. Madaan, N. Tandon, P. Gupta, S. Hallinan, L. Gao, S. Wiegreffe, U. Alon, N. Dziri, S. Prabhumoye, Y. Yang, et al. (2023) Self-refine: iterative refinement with self-feedback. In Advances in Neural Information Processing Systems (NeurIPS), Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p2.1
, 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
, 
§ V-A
https://arxiv.org/html/2605.17305v1#S5.SS1.p3.1
.
[8] K. Ogata (2010) Modern control engineering. 5th edition, Prentice Hall. Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p4.1
, 
§II
https://arxiv.org/html/2605.17305v1#S2.p3.1
, 
§VI
https://arxiv.org/html/2605.17305v1#S6.p3.1
.
[9] L. Pan, M. Saxon, W. Xu, D. Nathani, X. Wang, and W. Y. Wang (2024) Automatically correcting large language models: surveying the landscape of diverse automated correction strategies. Transactions of the Association for Computational Linguistics 12, pp. 484–506. Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
, 
§VI
https://arxiv.org/html/2605.17305v1#S6.p1.1
.
[10] D. Paul, M. Ismayilzada, M. Peyrard, B. Borberás, J. Larrosa, and R. West (2024) REFINER: reasoning feedback on intermediate representations. In Conference of the European Chapter of the Association for Computational Linguistics (EACL), Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
.
[11] N. Shinn, F. Cassano, A. Gopinath, K. Narasimhan, and S. Yao (2023) Reflexion: language agents with verbal reinforcement learning. In Advances in Neural Information Processing Systems (NeurIPS), Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p2.1
, 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
, 
§ V-A
https://arxiv.org/html/2605.17305v1#S5.SS1.p3.1
.
[12] X. Wang, J. Wei, D. Schuurmans, Q. Le, E. Chi, S. Narang, A. Chowdhery, and D. Zhou (2023) Self-consistency improves chain of thought reasoning in language models. In International Conference on Learning Representations (ICLR), Cited by: 
§ V-A
https://arxiv.org/html/2605.17305v1#S5.SS1.p3.1
.
[13] S. Welleck, X. Lu, P. West, F. Brahman, T. Shen, D. Khashabi, and Y. Choi (2023) Generating sequences by learning to self-correct. In International Conference on Learning Representations (ICLR), Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p1.1
.
[14] N. Wiener (1948) Cybernetics: or control and communication in the animal and the machine. MIT Press. Cited by: 
§I
https://arxiv.org/html/2605.17305v1#S1.p4.1
, 
§II
https://arxiv.org/html/2605.17305v1#S2.p3.1
, 
§VI
https://arxiv.org/html/2605.17305v1#S6.p3.1
.
[15] M. Xiong, Z. Hu, X. Lu, Y. Li, J. Fu, J. He, and B. Hooi (2024) Can LLMs express their uncertainty? an empirical evaluation of confidence elicitation in LLMs. arXiv preprint arXiv:2306.13063. Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p2.1
, 
§ III-B
https://arxiv.org/html/2605.17305v1#S3.SS2.p3.2
.
[16] S. Yao, D. Yu, J. Zhao, I. Shafran, T. Griffiths, Y. Cao, and K. Narasimhan (2023) Tree of thoughts: deliberate problem solving with large language models. In Advances in Neural Information Processing Systems (NeurIPS), Cited by: 
§II
https://arxiv.org/html/2605.17305v1#S2.p3.1
.
Experimental support, please 
view the build logs
https://arxiv.org/html/2605.17305v1/__stdout.txt
 for errors. Generated by 
L A T E xml[LOGO]
https://math.nist.gov/~BMiller/LaTeXML/
.
Instructions for reporting errors
We are continuing to improve HTML versions of papers, and your feedback helps enhance accessibility and mobile support. To report errors in the HTML that will help us improve conversion and rendering, choose any of the methods listed below:
Click the "Report Issue" ( ) button, located in the page header.
Tip:
 You can select the relevant text first, to include it in your report.
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
We gratefully acknowledge support from our 
major funders
, 
member institutions
https://info.arxiv.org/about/ourmembers.html
, , and all contributors.
About
https://info.arxiv.org/about
· 
Help
https://info.arxiv.org/help
· 
Contact
https://info.arxiv.org/help/contact.html
· 
Subscribe
https://info.arxiv.org/help/subscribe
· 
Copyright
https://info.arxiv.org/help/license/index.html
· 
Privacy
https://info.arxiv.org/help/policies/privacy_policy.html
· 
Accessibility
https://info.arxiv.org/help/web_accessibility.html
· 
Operational Status (opens in new tab)
https://status.arxiv.org/
Major funding support from
 
 
 

javascript:toggleReadingMode();