# CyberCorrect: A Cybernetic Framework for Closed-Loop Self-Correction in Large Language Models - arXiv

Source URL: https://arxiv.org/pdf/2605.17305

CyberCorrect: A Cybernetic Framework for Closed-Loop Self-Correction in Large Language 
Models 
Yuning Wu1, Yingmin Liu2, and Yang Shu2,* 
1School of Software, Henan University, Kaifeng, China 2Zhejiang University, Hangzhou, China 
Email: 2410250458@henu.edu.cn, 22412284@zju.edu.cn, shuyang@zju.edu.cn 
Abstract—Large language model (LLM) self-correction—the ability to detect and fix errors in generated outputs—remains largely ad hoc, relying on generic prompts such as “please reconsider your answer” without systematic error analysis or convergence guarantees. We propose CyberCorrect, a framework that formalizes LLM self-correction as a closed-loop control system grounded in cybernetic theory. The framework models the LLM generator as the plant and introduces a tri-modal Error Detector (combining self-consistency, verbalized confidence, and logic-chain verification) as the sensor. A type-directed Correction Controller generates targeted repair instructions based on diagnosed error categories, while a Convergence Judge determines iteration termination using stability criteria adapted from control theory. We further introduce three control-theoretic evaluation metrics—convergence rate, overshoot rate, and oscillation rate— that capture correction dynamics beyond final accuracy. Exper-iments on our constructed CyberCorrect-Bench (440 reasoning tasks with annotated error types and correction paths) show that CyberCorrect achieves 79.8% final accuracy, improving upon the best existing self-correction method by 6.2 percentage points, while reducing overshoot (erroneous over-correction) by 41% through its convergence control mechanism. 
Index Terms—Large Language Models, Self-Correction, Cy-bernetics, Closed-Loop Control, Reasoning 
I. INTRODUCTION 
Large language models (LLMs) produce remarkably fluent text but frequently generate incorrect reasoning steps, factual errors, and logical inconsistencies [1], [2]. The ability to self-correct—detecting and repairing errors without external feedback—is therefore critical for deploying LLMs in highstakes applications. 
Recent work has explored various self-correction strategies. Self-Refine [3] iteratively refines outputs using self-generated feedback. Reflexion [4] maintains a verbal memory of past failures. Chain-of-Verification [5] decomposes verification into sub-questions. However, Huang et al. [6] notably demonstrate that LLMs often cannot self-correct reasoning without external signals, sometimes even degrading correct answers through unnecessary modifications—a phenomenon we term overshoot, borrowing from control theory. 
*Corresponding author: Yang Shu (shuyang@zju.edu.cn) 
We identify three fundamental limitations in existing self-correction approaches: 
1) Unstructured error detection: Current methods treat all errors uniformly, applying the same correction strategy regardless of error type (arithmetic vs. logical vs. factual). 
2) No convergence control: Iterative refinement lacks principled stopping criteria, either terminating after a fixed number of rounds or continuing until resources are exhausted. 
3) No rollback mechanism: When correction makes an output worse (overshoot), existing methods have no way to recover previous, better versions. 
These limitations map precisely onto well-studied problems in control theory [7], [8]. In control terms, unstructured detection is a sensor lacking signal classification, absent convergence control yields an unstable feedback loop, and missing rollback leaves the system without safety bounds. 
We propose CyberCorrect, a framework that formalizes LLM self-correction as a closed-loop control system. The key insight is that self-correction is fundamentally a feedback control problem: the LLM generator is the plant, errors in its output are the disturbance, the correction prompt is the control input, and the correction process should converge to a stable (correct) output. By making this mapping explicit, we import principled solutions from control theory—typed error signals, adaptive control inputs, stability-based convergence criteria, and bounded overshoot—into the LLM self-correction domain. 
Our contributions are: 
1) A cybernetic formalization of LLM self-correction as a closed-loop control system, providing theoretical grounding for iterative refinement. 
2) A tri-modal Error Detector combining self-consistency checking, verbalized confidence analysis, and logic-chain verification to produce typed error signals. 
3) A type-directed Correction Controller that generates targeted repair prompts based on diagnosed error categories, and a Convergence Judge with rollback 
 
 
 
 
 
 
 
 
 
 
capability. 4) Three control-theoretic metrics—convergence rate, 
overshoot rate, and oscillation rate—that evaluate correction dynamics, not just final accuracy. 
II. RELATED WORK 
LLM Self-Correction. Pan et al. [9] survey the landscape of automated LLM correction strategies. Self-Refine [3] generates feedback and iteratively refines outputs but uses generic prompts without error typing. Reflexion [4] stores verbal failure summaries for future reference, implementing a form of episodic memory but not real-time error correction. REFINER [10] provides structured feedback on intermediate reasoning steps. Welleck et al. [11] train a separate corrector model. Chain-of-Verification [5] decomposes claims into verifiable sub-questions. Crucially, Huang et al. [6] show that intrinsic self-correction (without external signals) can degrade performance—a finding we address through our convergence control and rollback mechanisms. 
LLM Confidence and Self-Knowledge. Kadavath et al. [12] demonstrate that LLMs exhibit some ability to assess their own knowledge, though confidence is often poorly calibrated. Xiong et al. [13] evaluate multiple confidence elicitation strategies. Our tri-modal Error Detector leverages both verbalized confidence and behavioral signals (self-consistency), combining them with logic-chain verification to produce structured error diagnoses rather than scalar confidence scores. 
Cybernetics and AI. Cybernetics—the study of feedback and control in systems [7]—provides foundational principles for self-regulating systems. Classical control theory concepts including error signals, proportional-integral-derivative (PID) controllers, stability analysis, and convergence criteria [8], [14] have been applied to robotics, autonomous systems, and recently to neural network training dynamics. The SMC community has long studied human-in-the-loop control and adaptive systems where feedback drives system improvement. Our work brings these principles to the LLM domain: while feedback loops have been used informally in iterative prompting [15], we are, to our knowledge, the first to explicitly formalize LLM self-correction using cybernetic control-theoretic concepts with typed error signals and convergence-aware iteration management. 
III. CYBERCORRECT FRAMEWORK 
A. Cybernetic Formalization 
We model LLM self-correction as a discrete-time closedloop control system. Let yt denote the LLM output at iteration t and et = E (yt) the error signal estimated by the Error Detector without access to a ground-truth reference. The correction process is formalized as: 
yt+1 = G ( x, yt , ut 
) (1) 
TABLE I MAPPING BETWEEN CONTROL THEORY AND LLM SELF-CORRECTION. 
Control Theory LLM Self-Correction 
Plant G LLM generator Setpoint Error-free output (implicit) Output yt Generated answer at iteration t Sensor E Error Detector (tri-modal) Error signal et Detected error (type + severity + location) Controller C Correction Controller (type-directed) Control input ut Targeted correction prompt Convergence |st − st−1|< ε 
Overshoot Correction degrades correct content Oscillation Output alternates between versions 
Task x LLM 
Generator G 
yt Error 
Detector E 
et = (τ,s, ℓ) 
Convergence Judge 
Correction Controller 
C 
ut Output 
yfinal 
Version Buffer {y0 ,y1 , . . .} 
continue 
converged 
rollback 
Self-Consist. 
Confidence 
Logic-Chain 
Fig. 1. CyberCorrect architecture. The LLM generator (plant) produces output yt , which is analyzed by the tri-modal Error Detector (sensor). The error signal et , comprising type τ , severity s, and location ℓ, is evaluated by the Convergence Judge. If not converged, the type-directed Correction Controller generates a targeted repair prompt ut . A Version Buffer enables rollback upon overshoot detection. 
where G is the LLM generator (plant), x is the input task, and ut is the correction control input. The control law is: 
ut = C ( τ(et), s(et), ℓ(et) 
) (2) 
where C is the Correction Controller, and (τ,s, ℓ) are the error type, severity, and location extracted from et . Table I summarizes the control-theoretic mapping. 
The system architecture is illustrated in Fig. 1. 
B. Tri-Modal Error Detector 
The Error Detector E produces a structured error signal et = (τ,s, ℓ). Here, τ ∈ {arithmetic,logic_gap,premise,none} denotes the error type, s∈ [0,1] the severity score, and ℓ the erroneous step location. The detector combines three modalities: 
Self-Consistency Check (ESC). The generator produces K = 5 independent solutions via temperature sampling. The agreement ratio among solutions serves as an inverse error indicator: 
sSC = 1− |{y(k) : y(k) = ymaj}| 
K (3) 
where ymaj is the majority answer. High sSC indicates low agreement, suggesting potential errors.
https://lh3.googleusercontent.com/notebooklm/AKYWMX8IDkXttxAdDbe0x_PAqs4wHqHp-NaBV9r6_4ZqJ7cWnVIZ_0k4WAh-UKCSGOEGsb94icimV-bIbRKtkOuMju8zZgWga88FVBmo0JGn-wwpOl7TMaOPyi__Lsgl1FZ6dGdPsf2VFA=w72-h39-v0
b1134ee3-dddf-4d46-9619-660fe6881c0a
https://lh3.googleusercontent.com/notebooklm/AKYWMX8VeQJeQzDImmoj1bEAHkgYJnTxYsJmyGTVPyGyJKsA9jluaxTtoXz0E9I-pA5WcGmyhzk180wJitImhkpaw8T39W6wbpkLO2VIMPULJWMCuKe-1pN54pCj1F6TI5NvZjlgoofiWg=w72-h39-v0
b89b0641-00e6-45d3-9b5f-2e7d4a62ea41
https://lh3.googleusercontent.com/notebooklm/AKYWMX_6P6_GxCJRyb26yBjVBX6bgoprkyB7ZWnbGMqzgapgxELnbLpgvqiaCvu1YHX6xbxG_ptlchNSOb2bT8CTikzdZOq1fSue18HRJ-Y6R8dClpyMc_Y91AwOsYwA8zu__ChASm9HmA=w99-h136-v0
dc8e20df-f28c-4718-9bc0-60b7c5c9b757
Verbalized Confidence (EVC). The LLM is prompted to rate its confidence per reasoning step on a 0–100 scale [13]. Steps with confidence below threshold φ = 40 are flagged: 
s( j) VC = 1− conf( j) 
100 (4) 
where conf( j) is the verbalized confidence for step j. Logic-Chain Verification (ELC). The LLM is prompted to 
verify logical entailment between consecutive reasoning steps, checking whether step j+1 follows from step j. Each step pair receives a binary validity label v j ∈ {0,1}. 
The final error signal aggregates all three modalities: 
s = w1 · sSC +w2 ·max j 
s( j) VC +w3 · (1−min 
j v j) (5) 
with weights w1 = 0.4, w2 = 0.35, w3 = 0.25. When s > σ 
(detection threshold, σ = 0.3), the detector classifies the error type τ and localizes it to step ℓ based on the modality with the strongest signal. 
C. Type-Directed Correction Controller 
Unlike generic correction prompts (“check your answer again”), our controller C generates targeted repair instructions based on the error type τ: 
 τ = arithmetic: “Recompute the calculation in step ℓ. Show each arithmetic operation explicitly.” 
 τ = logic_gap: “The reasoning jumps from step ℓ to step ℓ+1 without justification. Insert the missing intermediate reasoning.” 
 τ = premise: “The assumption in step ℓ may be incorrect. Re-examine the factual basis and provide an alternative if needed.” 
The correction intensity adapts to error severity: when s > 0.7 (severe error), the controller instructs full regeneration from step ℓ onward; when s≤ 0.7, it requests minimal targeted edits to preserve correct content. 
D. Convergence Judge with Rollback 
The Convergence Judge determines when to terminate the correction loop using three criteria: 
Error Convergence. The loop terminates when error improvement stagnates: 
|st − st−1|< ε, ε = 0.05 (6) 
Oscillation Detection. If the output cycles between answers (ans(yt) = ans(yt−2) ̸= ans(yt−1), where ans(·) extracts the final answer), the system detects oscillation and selects the version with the lowest error score from the Version Buffer. 
Maximum Iterations. A hard bound of Tmax = 3 iterations prevents infinite loops, balancing correction quality against computational cost. 
Overshoot Rollback. If error severity increases after correction (st > st−1 + δ , δ = 0.1), the system rolls back to the previous version yt−1 from the Version Buffer—a mechanism directly analogous to integral windup protection in PID controllers [14]. 
Algorithm 1 summarizes the complete CyberCorrect loop. 
Algorithm 1 CyberCorrect Self-Correction Loop Require: Task x, generator G , max iterations Tmax 1: y0← G (x); (τ0,s0, ℓ0)← classify 
( E (y0) 
) 2: Buffer ←{y0} 3: for t = 1 to Tmax do 4: ut ← C (τt−1,st−1, ℓt−1) ▷ Type-directed control 5: yt ← G (x,yt−1,ut ) ▷ Corrected output 6: (τt ,st , ℓt )← classify 
( E (yt ) 
) ▷ Detect on new output 
7: if |st − st−1|< ε then 8: return yt ▷ Converged 9: end if 
10: if t ≥ 2 and ans(yt ) = ans(yt−2) then 11: return argminy∈Buffer s(y) ▷ Oscillation 12: end if 13: if st > st−1 +δ then 14: yt ← yt−1; st ← st−1 ▷ Overshoot rollback 15: end if 16: Buffer ← Buffer ∪ {yt} 17: end for 18: return yTmax 
IV. CYBERCORRECT-BENCH 
To evaluate self-correction processes (not just final answers), we construct CyberCorrect-Bench with explicit error annotations. 
A. Construction 
The benchmark contains 440 reasoning tasks across four categories: Mathematical Reasoning (MR), Logical Reason-ing (LR), Commonsense Reasoning (Comm.), and Multi-Step Reasoning (MS). For each category, we generate tasks containing three error types (arithmetic, logic gap, premise error; ≈30 tasks each) plus ≈20 clean (error-free) tasks for falsepositive evaluation, with final counts adjusted by duplicate filtering. Tasks are generated using GPT-4 with categoryspecific templates (e.g., “Generate a 4-step math word problem containing exactly one arithmetic error at step ℓ”), filtered to remove duplicates and near-duplicates via embedding similarity (cos > 0.85), then independently validated by two human annotators who verified error type labels, locations, and answer correctness, achieving inter-annotator agreement κ = 0.79 (substantial). To mitigate generator–evaluator circularity, we additionally evaluate with Claude-3.5 as an alternative backbone (Section V-I), confirming cross-model transfer. Each task includes: the reasoning chain with one embedded error, error type and location labels, the ideal correction path, and the correct final answer. Table II presents the statistics. 
To illustrate, an arithmetic error task might contain: “The total cost is 3 items at $12 each: 3×12 = 48” (correct: 36). A logic gap task might state: “All prime numbers are odd, therefore 17 is prime” (missing: 2 is prime but even, and the conclusion doesn’t follow from the premise). A premise error task might assume: “Since water always boils at 100°C. . . ” (ignoring altitude effects). These diverse error types demand fundamentally different correction strategies. 
V. EXPERIMENTS 
A. Setup 
CyberCorrect is implemented using GPT-4 as the backbone LLM. The Error Detector uses K = 5 self-consistency sam-
TABLE II CYBERCORRECT-BENCH STATISTICS. 
Category Arith. Logic Premise Clean Total 
Math Reasoning 32 28 30 20 110 Logical Reasoning 28 32 30 20 110 Commonsense 30 30 32 18 110 Multi-Step 30 30 28 22 110 
Total 120 120 120 80 440 
TABLE III MAIN RESULTS ON CYBERCORRECT-BENCH. ↑ HIGHER IS BETTER; ↓ 
LOWER IS BETTER. BEST IN BOLD. 
Method Acc.↑ CSR↑ CR↑ OR↓ OscR↓ 
No-Correction 58.4 — — — — Naive-Retry 61.2 32.4 48.3 22.7 14.5 Self-Consistency 67.5 — — — — Self-Refine 70.3 51.8 62.1 18.3 11.2 Reflexion 71.9 54.2 65.7 16.1 9.8 CoVe 73.6 58.3 71.4 13.9 8.4 
CyberCorrect 79.8 68.7 81.2 8.2 3.6 
Acc.=Final Accuracy; 
CSR=Correction Success Rate; CR=Convergence Rate; OR=Overshoot Rate; OscR=Oscillation Rate. 
ples, verbalized confidence threshold φ = 40, and detection threshold σ = 0.3. Maximum correction iterations Tmax = 3. 
Metrics. Beyond final accuracy, we report Correction Suc-cess Rate (CSR, fraction of initially incorrect answers successfully corrected) and three control-theoretic metrics over N tasks (superscript (i) indexes tasks): Convergence Rate CR=|{i : |s(i)T −s(i)T−1|<ε}|/N measures how often the loop stabilizes; Overshoot Rate OR=|{i : ∃ t, s(i)t >s(i)t−1+δ}|/N captures correction-induced degradation; Oscillation Rate OscR=|{i : ∃ t≥2, ans(y(i)t )=ans(y(i)t−2)̸=ans(y(i)t−1)}|/N detects cyclic instability. 
Baselines. We compare against six methods: (1) No-Correction: direct LLM output without any correction; (2) Naive-Retry: generic “please reconsider” prompt; (3) Self-Consistency [16]: majority voting over K = 5 samples; (4) Self-Refine [3]: iterative self-feedback refinement; (5) Re-flexion [4]: verbal reinforcement learning; (6) CoVe [5]: chain-of-verification. 
B. Main Results 
Table III presents results on CyberCorrect-Bench. Cyber-Correct achieves the highest final accuracy of 79.8%, outperforming the best baseline (CoVe, 73.6%) by 6.2 percentage points. It also records the lowest overshoot rate (8.2%) and oscillation rate (3.6%), demonstrating that the cybernetic framework effectively prevents the “correction makes it worse” problem identified by Huang et al. [6]. 
In contrast, Naive-Retry exhibits the worst overshoot (22.7%) and oscillation (14.5%), confirming that unstructured correction is counterproductive. Self-Refine and Reflexion improve over Naive-Retry but still exhibit overshoot rates exceeding 10%, while CyberCorrect’s rollback mechanism limits overshoot to 8.2%—a 41% reduction compared to CoVe. 
TABLE IV FINAL ACCURACY (%) BY REASONING CATEGORY. 
Method MR LR Comm. MS 
No-Correction 56.4 60.0 61.8 55.5 Self-Refine 69.1 72.7 71.8 67.3 CoVe 72.7 75.5 74.5 71.8 CyberCorrect 81.1 80.9 78.6 78.6 
t0 t1 t2 t3 
60 
70 
80 
Correction Iteration 
A cc 
ur ac 
y (% 
) 
CyberCorrect 
Self-Refine 
Naive-Retry 
CoVe 
Fig. 2. Accuracy across correction iterations. CyberCorrect converges monotonically, while Naive-Retry exhibits instability (accuracy decrease at t2) and Self-Refine shows accuracy regression at t2. 
C. Category-Level Results 
Table IV decomposes accuracy by reasoning category. Cy-berCorrect achieves its largest improvement on Mathematical Reasoning (+8.4% over CoVe), where arithmetic errors have clear localized signatures that the tri-modal detector captures effectively. The smallest improvement appears on Common-sense Reasoning (+4.1%), where errors often involve implicit world knowledge that is harder to formalize as a typed error signal. 
D. Convergence Dynamics 
Fig. 2 visualizes the correction trajectory across iterations. CyberCorrect’s accuracy increases monotonically and stabilizes by iterations 2–3, exhibiting the characteristic convergence behavior of a well-tuned control system. In contrast, Self-Refine shows non-monotonic behavior (accuracy dips at iteration 2 before recovering), and Naive-Retry actually decreases accuracy after iteration 1—a clear case of instability in an uncontrolled feedback loop. 
E. Ablation Study 
Table V isolates the contribution of each component. The Error Detector contributes the most (7.4-point drop when removed), confirming that typed error diagnosis is essential for effective correction. Removing the type-directed correction (using generic prompts instead) causes a 5.6-point drop, showing that targeted repair outperforms one-size-fits-all approaches. Removing the Convergence Judge causes a 3.1-point accuracy drop but has a disproportionate impact on overshoot (increases from 8.2% to 17.5% without it), validating its role as a stability mechanism.
https://lh3.googleusercontent.com/notebooklm/AKYWMX9CeD_l7a7-Mt6hPaCiNt_p4CRoNq8s6SzxTNow9IgSpbc8Zz2PhQJUs6aN-79wXTYQ7WhSgL6HQEBZcFo-RVeCxfWy52KQMScWkfjMLlq83e6oCY6V7nZxbynHF1R-grxsIrX2Hw=w296-h117-v0
4b50d677-640f-4c64-aff7-e2301a101452
TABLE V ABLATION STUDY ON CYBERCORRECT-BENCH. 
Variant Acc. ∆Acc. OR↓ OscR↓ 
CyberCorrect (Full) 79.8 — 8.2 3.6 
w/o Error Detector 72.4 −7.4 19.3 12.1 w/o Type-Directed Corr. 74.2 −5.6 14.8 8.7 w/o Convergence Judge 76.7 −3.1 17.5 10.3 w/o Rollback 77.1 −2.7 15.6 4.2 w/o Verbalized Conf. 76.3 −3.5 11.4 5.8 
Arithmetic Logic Gap Premise 20 
40 
60 
80 
45 
28.3 22.5 
58.3 
49.2 42.5 
78.3 
65 
54.2 
C or 
re ct 
io n 
Su cc 
es s 
R at 
e (% 
) 
Naive-Retry Self-Refine CyberCorrect 
Fig. 3. Correction success rate by error type. Arithmetic errors are most correctable; premise errors are hardest across all methods. 
F. Error Type Analysis 
Fig. 3 shows correction success rates by error type. Cy-berCorrect achieves the highest correction rate for arithmetic errors (78.3%), which have clear localized signatures. Logic gap errors are moderately correctable (65.0%), while premise errors are the hardest to fix (54.2%), as they require re-evaluating foundational assumptions—a finding consistent with human reasoning patterns where premise revision is cognitively demanding. 
G. Qualitative Analysis 
We illustrate CyberCorrect on a Multi-Step task: “A store offers 20% off, then an additional 15% off the discounted price. What is the total discount?” The LLM initially computes 20% + 15% = 35%. The Error Detector flags this as τ=arithmetic, s=0.64, ℓ=2: self-consistency yields only 3/5 agreement, verbalized confidence for step 2 is 35/100, and the logic-chain verifier flags the step. The type-directed controller generates: “The second discount applies to the already-discounted price. Show the multiplication explicitly.” The corrected output (0.80×0.85 = 0.68, total discount 32%) converges in one iteration. Without typed detection, Self-Refine’s generic “please reconsider” causes the LLM to revert to 35%—a classic overshoot. 
H. Sensitivity Analysis 
We analyze CyberCorrect’s sensitivity to key hyperparameters: self-consistency samples K, detection threshold σ , and maximum iterations Tmax. Results are shown in Table VI. 
Increasing K from 3 to 5 provides the largest gain (+3.0%), with diminishing returns beyond K=5. The detection threshold σ peaks at 0.3; lower values trigger unnecessary corrections, while higher values miss genuine errors. Tmax=3 
TABLE VI SENSITIVITY ANALYSIS. DEFAULT VALUES ARE UNDERLINED. 
K Acc. σ Acc. Tmax Acc. 
3 76.8 0.2 77.5 1 73.4 5 79.8 0.3 79.8 2 78.2 7 80.2 0.4 78.4 3 79.8 9 80.1 0.5 75.9 4 79.6 
TABLE VII RESULTS ON PUBLIC BENCHMARKS. CYBERCORRECT CONSISTENTLY 
OUTPERFORMS BASELINES ACROSS DATASETS AND BACKBONE MODELS. 
Method MATH StrategyQA 
Acc. OR↓ Acc. OR↓ 
No-Correction 51.8 — 72.6 — Self-Refine 55.2 15.7 77.4 12.3 CoVe 56.4 11.8 78.2 10.1 CyberCorrect (GPT-4) 59.6 7.3 81.4 5.8 
CyberCorrect (Claude-3.5) 57.8 8.1 80.2 6.4 
captures most benefit, confirming that the fusion weights and thresholds are robust within reasonable ranges. Weights w1=0.4,w2=0.35,w3=0.25 were selected via grid search on a 10% validation split of CyberCorrect-Bench, with accuracy varying by less than 1.2 percentage points across all tested combinations summing to 1, indicating low sensitivity to the specific weight allocation. 
I. External Benchmark Validation 
To assess generalizability beyond CyberCorrect-Bench, we evaluate on two established public benchmarks: MATH (500-task subset, Levels 3–5) for mathematical reasoning and Strat-egyQA (500 questions) for commonsense multi-hop reasoning. Table VII reports results. 
CyberCorrect achieves +3.2% over CoVe on MATH and +3.2% on StrategyQA, with consistent overshoot reductions. In particular, CyberCorrect with Claude-3.5 as an alternative backbone achieves comparable gains (+1.4% and +2.0% over CoVe), confirming that the framework transfers across model families and is not an artifact of GPT-4 self-knowledge. 
J. Error Detector Validation 
We evaluate the tri-modal Error Detector’s reliability on a 100-task subset with human-annotated ground-truth error labels. The detector achieves 84.3% type classification accuracy (τ prediction), with per-type F1 scores of 0.91 (arithmetic), 0.82 (logic gap), and 0.78 (premise). The severity score s correlates with human-judged severity at Spearman ρ = 0.71 (p < 0.001), validating its use as a rollback trigger. False-positive rate on clean samples is 8.8%. 
K. Computational Cost 
Table VIII reports average API calls per task. CyberCorrect requires more calls due to multi-modal detection and iterative correction, but early convergence (µ = 2.1 iterations) limits overhead. For cost-sensitive deployments, CyberCorrect-Lite uses only self-consistency detection with Tmax=2, achieving
https://lh3.googleusercontent.com/notebooklm/AKYWMX9a9C4No9AhhOGk8wj2Fem7UtPoiDSIENtUgrFvO9nQ9s_MCIuVaN1-fHsed54fwHJqiuj4-3qW6YPuV3b050LBtmM0ijHVEePkWjEceV7z2fuKP3B7DZa6mlFW4pwWeEBD2ertKg=w291-h117-v0
acae80db-0849-43c8-8ce9-53f01bdcc837
TABLE VIII COMPUTATIONAL COST COMPARISON (AVG. API CALLS PER TASK). 
Method Calls/Task Acc. Acc./Call 
No-Correction 1.0 58.4 58.4 Self-Consistency 5.0 67.5 13.5 Self-Refine 3.8 70.3 18.5 CoVe 6.2 73.6 11.9 CyberCorrect 14.7 79.8 5.4 CyberCorrect-Lite† 7.3 77.9 10.7 
†Lite: single-modality detector 
(ESC only), Tmax=2. 
77.9% accuracy at 7.3 calls/task—still +4.3 pp over CoVe at comparable cost. 
VI. DISCUSSION 
Why typed errors matter. The largest ablation drop (7.4-point) occurs when removing the Error Detector, confirming that error typing is the most critical component. The intuition is straightforward: telling the LLM “your arithmetic in step 3 is wrong” is far more actionable than “please check your answer.” This mirrors human tutoring, where specific feedback outperforms generic encouragement [9]. 
The overshoot problem. Huang et al. [6] showed that naive self-correction can degrade performance. Our results quantify this precisely: Naive-Retry’s overshoot rate of 22.7% means that nearly one in four corrections makes the output worse. CyberCorrect reduces this to 8.2% through three mechanisms: (1) the convergence judge prevents corrections when error improvement stagnates, (2) oscillation detection breaks unstable cycles, and (3) the version buffer enables rollback when overshoot is detected. This combination of preventive and reactive mechanisms is standard practice in control engineering but novel in the LLM self-correction context. 
Control theory as a design vocabulary. We emphasize that our contribution is primarily an engineering framework that uses control-theoretic concepts as a productive design vocabulary, rather than providing formal stability proofs or convergence guarantees in the mathematical sense. Concepts like overshoot, oscillation, and convergence naturally describe phenomena observed in iterative LLM refinement, and importing corresponding solutions (rollback, oscillation detection, adaptive stopping) yields measurable practical improvements. We believe the SMC community is well-positioned to advance this direction toward formal analysis [7], [8]. 
VII. CONCLUSION 
We presented CyberCorrect, a framework that uses cybernetic control concepts to structure LLM self-correction as a closed-loop system with typed error detection, targeted correction, and convergence-aware iteration management. Cy-berCorrect achieves 79.8% accuracy on CyberCorrect-Bench (+6.2 pp over the best baseline) and consistent gains on MATH (+3.2%) and StrategyQA (+3.2%), while reducing overshoot by 41%. Cross-model evaluation with Claude-3.5 confirms framework transferability. The control-theoretic metrics we introduce provide a richer evaluation of self-correction dynamics beyond final accuracy. 
Limitations. CyberCorrect requires multiple LLM inference calls per correction iteration (K samples for self-consistency plus verification calls), incurring higher computational cost than single-pass methods. The current error taxonomy covers three types; extending to finer-grained categories may further improve correction targeting. Additionally, the Tmax=3 iteration limit, while effective on our benchmark, may be insufficient for complex multi-step proofs. 
Future Work. We envision extending the cybernetic framework to multi-agent correction settings, where specialized agents serve as dedicated sensors and controllers. The formal control-theoretic foundation also opens avenues for proving convergence guarantees under specific assumptions—bridging the gap between empirical LLM self-correction and principled control system design [14]. 
REFERENCES 
[1] T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell et al., “Language models are few-shot learners,” in Advances in Neural Information Processing Systems (NeurIPS), 2020. 
[2] J. Achiam, S. Adler, S. Agarwal, L. Ahmad, I. Akkaya, F. L. Aleman, D. Almeida, J. Altenschmidt, S. Altman, S. Anadkat et al., “GPT-4 technical report,” arXiv preprint arXiv:2303.08774, 2023. 
[3] A. Madaan, N. Tandon, P. Gupta, S. Hallinan, L. Gao, S. Wiegreffe, U. Alon, N. Dziri, S. Prabhumoye, Y. Yang et al., “Self-refine: Iterative refinement with self-feedback,” in Advances in Neural Information Processing Systems (NeurIPS), 2023. 
[4] N. Shinn, F. Cassano, A. Gopinath, K. Narasimhan, and S. Yao, “Reflexion: Language agents with verbal reinforcement learning,” in Advances in Neural Information Processing Systems (NeurIPS), 2023. 
[5] S. Dhuliawala, M. Komeili, J. Xu, R. Raileanu, X. Li, A. Celikyilmaz, and J. Weston, “Chain-of-verification reduces hallucination in large language models,” in Findings of the Association for Computational Linguistics (ACL), 2024. 
[6] J. Huang, X. Chen, S. Mishra, H. S. Zheng, A. W. Yu, X. Song, and D. Zhou, “Large language models cannot self-correct reasoning yet,” in International Conference on Learning Representations (ICLR), 2024. 
[7] N. Wiener, Cybernetics: Or Control and Communication in the Animal and the Machine. MIT Press, 1948. 
[8] K. Ogata, Modern Control Engineering, 5th ed. Prentice Hall, 2010. [9] L. Pan, M. Saxon, W. Xu, D. Nathani, X. Wang, and W. Y. Wang, “Auto-
matically correcting large language models: Surveying the landscape of diverse automated correction strategies,” Transactions of the Association for Computational Linguistics, vol. 12, pp. 484–506, 2024. 
[10] D. Paul, M. Ismayilzada, M. Peyrard, B. Borberás, J. Larrosa, and R. West, “REFINER: Reasoning feedback on intermediate representations,” in Conference of the European Chapter of the Association for Computational Linguistics (EACL), 2024. 
[11] S. Welleck, X. Lu, P. West, F. Brahman, T. Shen, D. Khashabi, and Y. Choi, “Generating sequences by learning to self-correct,” in International Conference on Learning Representations (ICLR), 2023. 
[12] S. Kadavath, T. Conerly, A. Askell, T. Henighan, D. Drain, E. Perez, N. Schiefer, Z. Hatfield-Dodds, N. DasSarma, E. Tran-Johnson et al., “Language models (mostly) know what they know,” arXiv preprint arXiv:2207.05221, 2022. 
[13] M. Xiong, Z. Hu, X. Lu, Y. Li, J. Fu, J. He, and B. Hooi, “Can LLMs express their uncertainty? an empirical evaluation of confidence elicitation in LLMs,” arXiv preprint arXiv:2306.13063, 2024. 
[14] K. J. Åström and B. Wittenmark, Adaptive Control, 2nd ed. Addison-Wesley, 1995. 
[15] S. Yao, D. Yu, J. Zhao, I. Shafran, T. Griffiths, Y. Cao, and K. Narasimhan, “Tree of thoughts: Deliberate problem solving with large language models,” in Advances in Neural Information Processing Systems (NeurIPS), 2023. 
[16] X. Wang, J. Wei, D. Schuurmans, Q. Le, E. Chi, S. Narang, A. Chowdh-ery, and D. Zhou, “Self-consistency improves chain of thought reasoning in language models,” in International Conference on Learning Repre-sentations (ICLR), 2023.