# 1 Introduction - arXiv

Source URL: https://arxiv.org/html/2605.12484v1

1 Introduction
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
https://arxiv.org/html/2605.12484v1
 
Back to Abstract
https://arxiv.org/abs/2605.12484v1
 
Download PDF
https://arxiv.org/pdf/2605.12484v1
 

javascript:toggleNavTOC();
 

javascript:toggleReadingMode();
1 Introduction
https://arxiv.org/html/2605.12484v1#S1
2 Preliminaries
https://arxiv.org/html/2605.12484v1#S2
Fast and slow weights: a general framework
https://arxiv.org/html/2605.12484v1#S2.SS0.SSS0.Px1
Slow weights: RL with verifiable rewards
https://arxiv.org/html/2605.12484v1#S2.SS0.SSS0.Px2
Fast weights: reflective prompt evolution.
https://arxiv.org/html/2605.12484v1#S2.SS0.SSS0.Px3
3 Fast-Slow Training (FST)
https://arxiv.org/html/2605.12484v1#S3
4 Advantages of Fast-Slow Training
https://arxiv.org/html/2605.12484v1#S4
Advantage 1: Fast-Slow Training Improves Data Efficiency
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px1
Advantage 2: Fast-Slow Training Raises the Performance Asymptote
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px2
Advantage 3: Fast-Slow Training Remains Close to the Base Model
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px3
Advantage 4: Fast-Slow Training Preserves Plasticity
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px4
Advantage 5: Fast-Slow Training Improves Continual Learning
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px5
5 Why Does Fast-Slow Training Work?
https://arxiv.org/html/2605.12484v1#S5
Observation 1: Fast Weights Acquire Task Signal Faster Than Slow Weights
https://arxiv.org/html/2605.12484v1#S5.SS0.SSS0.Px1
Observation 2: Fast and Slow Weights Both Optimizing for Reward Raise Performance Ceiling
https://arxiv.org/html/2605.12484v1#S5.SS0.SSS0.Px2
6 Discussion
https://arxiv.org/html/2605.12484v1#S6
6.1 Limitations and future work
https://arxiv.org/html/2605.12484v1#S6.SS1
7 Related Work
https://arxiv.org/html/2605.12484v1#S7
Slow learning: RL for LLM reasoning.
https://arxiv.org/html/2605.12484v1#S7.SS0.SSS0.Px1
Fast learning: prompt and context optimization.
https://arxiv.org/html/2605.12484v1#S7.SS0.SSS0.Px2
Fast and slow weights: complementary learning systems.
https://arxiv.org/html/2605.12484v1#S7.SS0.SSS0.Px3
Modern fast–slow methods for LLM RL.
https://arxiv.org/html/2605.12484v1#S7.SS0.SSS0.Px4
8 Conclusion
https://arxiv.org/html/2605.12484v1#S8
9 Acknowledgements
https://arxiv.org/html/2605.12484v1#S9
References
https://arxiv.org/html/2605.12484v1#bib
A GEPA
https://arxiv.org/html/2605.12484v1#A1
B Algorithm pseudocode
https://arxiv.org/html/2605.12484v1#A2
C Star-graph dataset construction
https://arxiv.org/html/2605.12484v1#A3
Graph instance.
https://arxiv.org/html/2605.12484v1#A3.SS0.SSS0.Px1
Why this is a hard exploration problem.
https://arxiv.org/html/2605.12484v1#A3.SS0.SSS0.Px2
Prompt template.
https://arxiv.org/html/2605.12484v1#A3.SS0.SSS0.Px3
Scoring.
https://arxiv.org/html/2605.12484v1#A3.SS0.SSS0.Px4
Splits used in the paper.
https://arxiv.org/html/2605.12484v1#A3.SS0.SSS0.Px5
D Hyperparameters and compute
https://arxiv.org/html/2605.12484v1#A4
Shared RL configuration.
https://arxiv.org/html/2605.12484v1#A4.SS0.SSS0.Px1
Shared GEPA configuration.
https://arxiv.org/html/2605.12484v1#A4.SS0.SSS0.Px2
Per-domain overrides.
https://arxiv.org/html/2605.12484v1#A4.SS0.SSS0.Px3
Compute and wall-clock.
https://arxiv.org/html/2605.12484v1#A4.SS0.SSS0.Px4
E Design ablations
https://arxiv.org/html/2605.12484v1#A5
Population size K K (Fig. 9 a).
https://arxiv.org/html/2605.12484v1#A5.SS0.SSS0.Px1
Advantage baseline at K = 2 K{=}2 (Fig. 9 b).
https://arxiv.org/html/2605.12484v1#A5.SS0.SSS0.Px2
Cycle length T T at K = 8 K{=}8 (Fig. 9 c).
https://arxiv.org/html/2605.12484v1#A5.SS0.SSS0.Px3
Light vs. full GEPA recipe (Fig. 9 d).
https://arxiv.org/html/2605.12484v1#A5.SS0.SSS0.Px4
F Rollout reuse: same accuracy at lower wall-time and rollout cost
https://arxiv.org/html/2605.12484v1#A6
Why reuse is possible.
https://arxiv.org/html/2605.12484v1#A6.SS0.SSS0.Px1
Cache mechanics.
https://arxiv.org/html/2605.12484v1#A6.SS0.SSS0.Px2
Empirical effect.
https://arxiv.org/html/2605.12484v1#A6.SS0.SSS0.Px3
G KL-vs-reward, full four-task results
https://arxiv.org/html/2605.12484v1#A7
H Evolved GEPA prompts during FST training
https://arxiv.org/html/2605.12484v1#A8
H.1 CodeIO
https://arxiv.org/html/2605.12484v1#A8.SS1
H.2 Math (Polaris)
https://arxiv.org/html/2605.12484v1#A8.SS2
H.3 Physics
https://arxiv.org/html/2605.12484v1#A8.SS3
H.4 HoVer-hard
https://arxiv.org/html/2605.12484v1#A8.SS4
License: CC BY 4.0
https://info.arxiv.org/help/license/index.html#licenses-available
arXiv:2605.12484v1 [cs.LG] 12 May 2026
Learning, Fast and Slow: Towards LLMs
That Adapt Continually Rishabh Tiwari 
∗1,4
 Kusha Sareen 
∗2
 Lakshya A Agrawal 
∗1
Joseph E. Gonzalez 
1
 Matei Zaharia 
1
 Kurt Keutzer 
1
 Inderjit S Dhillon 
3
Rishabh Agarwal 
†2,5
 Devvrit Khatri 
†3,6
 
1
 UC Berkeley 
2
 Mila 
3
 UT Austin 
4
 Eragon 
5
 Periodic Labs 
6
 Mirendil 
Video
https://rishabhtiwari.ai/projects/fst/video.mp4
 | 
Blog
https://rishabhtiwari.ai/projects/fst/blog/
 | 
Code
https://rishabhtiwari.ai/projects/fst/code/
{justify} Large language models (LLMs) are trained for downstream tasks by updating their parameters (e.g., via RL). However, updating parameters forces them to absorb task-specific information, which can result in catastrophic forgetting and loss of plasticity. In contrast, in-context learning with fixed LLM parameters can cheaply and rapidly 
adapt
 to task-specific requirements (e.g., prompt optimization), but cannot by itself typically match the performance gains available through updating LLM parameters. There is no good reason for 
restricting
 learning to being in-context or in-weights. Moreover, humans also likely learn at different time scales (e.g., System 1 vs 2). To this end, we introduce a fast-slow learning framework for LLMs, with model parameters as “slow” weights and optimized context as “fast” weights. These fast “weights” can learn from textual feedback to absorb the task-specific information, while allowing slow weights to stay closer to the base model and persist general reasoning behaviors. Fast-Slow Training ( FST) is up to 3 × 3\times more sample-efficient than only slow learning (RL) across reasoning tasks, while consistently reaching a higher performance asymptote. Moreover, FST-trained models remain closer to the base LLM (up to 70 % 70% less KL divergence), resulting in less catastrophic forgetting than RL-training. This reduced drift also preserves plasticity: after training on one task, FST trained models adapt more effectively to a subsequent task than parameter-only trained models. In continual learning scenarios, where task domains change on the fly, FST continues to acquire each new task while parameter-only RL stalls. Correspondence: 
{rishabhtiwari, lakshyaaagrawal}@berkeley.edu
https://arxiv.org/html/2605.12484v1/mailto:rishabhtiwari@berkeley.edu,lakshyaaagrawal@berkeley.edu
, 
kusha.sareen@mila.quebec
https://arxiv.org/html/2605.12484v1/mailto:kusha.sareen@mila.quebec
, 
{devvrit.03, rishabhagarwal.467}@gmail.com
https://arxiv.org/html/2605.12484v1/mailto:devvrit.03@gmail.com,rishabhagarwal.467@gmail.com
 
∗
Equal contribution 
†
 Equal advising.
1 Introduction
Figure 1: FST jointly optimizes slow parameters θ \theta and a fast textual-context pool Φ \Phi via interleaved fast and slow update loops. The slow loop (top) updates θ \theta from the scalar reward alone ( θ c → θ c + 1 \theta_{c}\to\theta_{c+1} ). The fast loop (bottom) updates Φ \Phi via reflective optimization, additionally consuming the rollout's full text including thoughts, tool calls, errors, and rich feedback ( Φ c → Φ c + 1 \Phi_{c}\to\Phi_{c+1} ). Maintaining Φ \Phi as a Pareto-frontier population (rather than a single best prompt) preserves diversity: different contexts specialize to different problem slices exposing the slow update rule to rich conditioning during training.
Large language models (LLMs) are commonly adapted through supervised finetuning (SFT) or reinforcement learning (RL), both of which modify the model parameters, to specialized domains such as math and coding [ 
17
https://arxiv.org/html/2605.12484v1#bib.bib17
, 
26
https://arxiv.org/html/2605.12484v1#bib.bib26
, 
47
https://arxiv.org/html/2605.12484v1#bib.bib47
, 
16
https://arxiv.org/html/2605.12484v1#bib.bib16
, 
37
https://arxiv.org/html/2605.12484v1#bib.bib37
] . However, treating parameter updates as the sole mechanism of adaptation creates a fundamental bottleneck: every improvement, whether it be a reusable reasoning skill, a task-specific heuristic or a transient lesson from recent rollouts, must be written into the same persistent set of model weights. Since the entire policy is parameterized by these weights, an update that improves in-domain reward simultaneously moves the model away from its base behavior [ 
15
https://arxiv.org/html/2605.12484v1#bib.bib15
, 
30
https://arxiv.org/html/2605.12484v1#bib.bib30
] , reducing entropy [ 
9
https://arxiv.org/html/2605.12484v1#bib.bib9
, 
29
https://arxiv.org/html/2605.12484v1#bib.bib29
] , hurting out-of-distribution generalization [ 
37
https://arxiv.org/html/2605.12484v1#bib.bib37
, 
22
https://arxiv.org/html/2605.12484v1#bib.bib22
, 
31
https://arxiv.org/html/2605.12484v1#bib.bib31
] , and degrading its ability to adapt to future tasks, known as plasticity loss [ 
14
https://arxiv.org/html/2605.12484v1#bib.bib14
, 
32
https://arxiv.org/html/2605.12484v1#bib.bib32
, 
11
https://arxiv.org/html/2605.12484v1#bib.bib11
, 
55
https://arxiv.org/html/2605.12484v1#bib.bib55
] .
LLM systems also possess another powerful adaptation mechanism: prompts, instructions, and contextual information [ 
7
https://arxiv.org/html/2605.12484v1#bib.bib7
, 
57
https://arxiv.org/html/2605.12484v1#bib.bib57
] . Unlike model parameters, these textual components can be modified cheaply, frequently, and per task. Prompt optimization methods demonstrate that substantial behavioral improvements can be obtained by improving the textual context under which the model operates [ 
66
https://arxiv.org/html/2605.12484v1#bib.bib66
, 
62
https://arxiv.org/html/2605.12484v1#bib.bib62
, 
24
https://arxiv.org/html/2605.12484v1#bib.bib24
, 
36
https://arxiv.org/html/2605.12484v1#bib.bib36
, 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] .
In this work, we introduce Fast-Slow Training (FST), where view LLM adaptation as occurring through two complementary components (Figure 
1
https://arxiv.org/html/2605.12484v1#S1.F1
). The first is a 
slow parametric component
: the model weights, which are expensive to update, persist across tasks, and encode long-lived behavior. The second is a 
fast textual component
: prompts, instructions, and task context, which can be changed cheaply and frequently, influence behavior immediately, capturing task-level adaptation without permanently modifying the model.
The fast-slow distinction we draw above has a long history in neural networks [ 
19
https://arxiv.org/html/2605.12484v1#bib.bib19
, 
45
https://arxiv.org/html/2605.12484v1#bib.bib45
, 
6
https://arxiv.org/html/2605.12484v1#bib.bib6
, 
4
https://arxiv.org/html/2605.12484v1#bib.bib4
] , motivated by separating temporary, task-specific adaptations in fast-weights from persistent, broadly useful behaviors in slow-weights. We instantiate this idea in RLVR [ 
47
https://arxiv.org/html/2605.12484v1#bib.bib47
, 
23
https://arxiv.org/html/2605.12484v1#bib.bib23
] by interleaving slow reinforcement learning updates with fast context optimization using GEPA [ 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] . Rather than first training a policy and then optimizing a prompt for the final checkpoint, our method allows the context and the policy to co-evolve. The fast textual weights quickly incorporate lessons from rollouts, steering the model toward better reasoning behavior, while the slow parametric weights are updated under this evolving context. This produces a training process in which performance gains are distributed appropriately across both elements, instead of being forced entirely into the model parameters.
This division of labor has several consequences, which we evaluate in RLVR settings spanning math, code, and general reasoning tasks.
Fast textual adaptation improves data efficiency. Fast weights incorporate task-level signal rapidly, so the system improves without waiting for slow parameter updates. Empirically, fast-slow training matches RL reward with up to 3 × 3\times fewer rollouts and consistently reaches a higher performance ceiling (Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px1
 Advantages 1 and 2).
Fast-slow training induces smaller slow-weight displacement. With the textual channel carrying part of the adaptation, the parameters need not move as far from the base policy. At matched reward, our models have up to 70% lower KL to the base policy than RL-only baselines. (Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px3
 Advantage 3)
Fast-slow training preserves plasticity. We test this by training on one task using RL-only and FST, then continuing training on a second task from the resulting checkpoints; fast-slow trained models adapt effectively in the second phase while RL trained models collapse to near 0 % 0% - suggesting FST retains greater capacity for future learning (Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px4
 Advantage 4).
Fast-slow training enables continual learning. We test our method in setting where tasks change on the fly. We observe our method is able to adapt more quickly to changing objectives (Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px5
 Advantage 5).
Overall, our results suggest that effective LLM post-training should not be viewed as parameter learning followed by prompt tuning. Instead, it should be viewed as optimization over multiple adaptation channels, where fast textual weights and slow parametric weights are trained together to achieve rapid and task-specific improvements while preserving the generality and plasticity of the base model.
2 Preliminaries
Fast and slow weights: a general framework
We model the 
slow weights
 (model parameters) as θ \theta , and 
fast weights
 (textual scaffolds) as ϕ \phi drawn from a discrete text space Σ ∗ \Sigma^{\ast} . Given a query x x , the system produces a response by sampling
y ∼ π θ ( ⋅ ∣ x , ϕ ) , y\sim\pi_{\theta}(\cdot\mid x,\phi),
(1)
where π θ  ( y ∣ x , ϕ ) \pi_{\theta}(y\mid x,\phi) denotes the policy induced by parameters θ \theta when conditioned on textual context ϕ \phi and query x x . For a task distribution 𝒟 \mathcal{D} and reward r r , the natural joint objective is
max θ , ϕ  J  ( θ , ϕ ) = 𝔼 x ∼ 𝒟 , y ∼ π θ ( ⋅ ∣ x , ϕ )  [ r  ( x , y ) ] . \max_{\theta,,\phi};;J(\theta,\phi);=;\mathbb{E}
{x\sim\mathcal{D},;y\sim\pi
{\theta}(\cdot\mid x,\phi)}!\big[,r(x,y),\big].
(2)
Each factor admits many concrete optimizers. On the slow side, θ \theta can be updated by SFT, preference optimization [ 
43
https://arxiv.org/html/2605.12484v1#bib.bib43
] , or policy-gradient methods such as PPO [ 
46
https://arxiv.org/html/2605.12484v1#bib.bib46
] and GRPO [ 
47
https://arxiv.org/html/2605.12484v1#bib.bib47
] , frequently under verifiable rewards [ 
26
https://arxiv.org/html/2605.12484v1#bib.bib26
] . On the fast side, ϕ \phi can be updated by automated prompt-optimization methods such as APE [ 
66
https://arxiv.org/html/2605.12484v1#bib.bib66
] , OPRO [ 
62
https://arxiv.org/html/2605.12484v1#bib.bib62
] , DSPy/MIPROv2 [ 
24
https://arxiv.org/html/2605.12484v1#bib.bib24
, 
36
https://arxiv.org/html/2605.12484v1#bib.bib36
] , and GEPA [ 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] . Our framework is agnostic to these choices; we instantiate it with RL with verifiable rewards (RLVR) for θ \theta and reflective evolutionary prompt optimization (GEPA) for ϕ \phi .
Slow weights: RL with verifiable rewards
We follow the ScaleRL recipe [ 
23
https://arxiv.org/html/2605.12484v1#bib.bib23
] for slow-weight updates. The reward r  ( x , y ) ∈ [ 0 , 1 ] r(x,y)\in[0,1] is given by an automatic verifier on ( x , y ) (x,y) [ 
26
https://arxiv.org/html/2605.12484v1#bib.bib26
] (e.g., rule-based correctness for math, code, and science tasks). For each query x x , the current policy generates a 
group
 of G G rollouts { y i } i = 1 G {y_{i}}_{i=1}^{G} under the current ( θ , ϕ ) (\theta,\phi) , from which group-relative advantages [ 
47
https://arxiv.org/html/2605.12484v1#bib.bib47
] are computed,
A i = r  ( x , y i ) − r ¯ g σ g + ε , r ¯ g = 1 G  ∑ j = 1 G r  ( x , y j ) , σ g 2 = 1 G  ∑ j = 1 G ( r  ( x , y j ) − r ¯ g ) 2 , A_{i};=;\frac{r(x,y_{i});-;\bar{r}
{g}}{\sigma
{g};+;\varepsilon},\qquad\bar{r}
{g};=;\tfrac{1}{G}!\sum
{j=1}^{G}r(x,y_{j}),\qquad\sigma_{g}^{2};=;\tfrac{1}{G}!\sum_{j=1}^{G}!\big(r(x,y_{j})-\bar{r}_{g}\big)^{2},
(3)
and normalized at the batch level. The policy is updated using the truncated importance-sampling REINFORCE objective cispo [ 
35
https://arxiv.org/html/2605.12484v1#bib.bib35
, 
23
https://arxiv.org/html/2605.12484v1#bib.bib23
] ,
ℒ cispo  ( θ ) = − 𝔼  [ sg  ( min  ( ρ t , τ ) ) ⋅ A ⋅ ∇ θ log  π θ  ( y t ∣ x , ϕ , y < t ) ] , \mathcal{L}
{\textsc{cispo}}(\theta);=;-,\mathbb{E}!\left[,\mathrm{sg}!\big(\min(\rho
{t},,\tau)\big),\cdot,A,\cdot,\nabla_{\theta}\log\pi_{\theta}(y_{t}\mid x,\phi,y_{<t}),\right],
(4)
where ρ t = π θ  ( y t ∣ x , ϕ , y < t ) / π θ old  ( y t ∣ x , ϕ , y < t ) \rho_{t}=\pi_{\theta}(y_{t}\mid x,\phi,y_{<t})/\pi_{\theta_{\text{old}}}(y_{t}\mid x,\phi,y_{<t}) is the per-token importance ratio between the current and behavior policies, τ \tau is a truncation threshold, sg  ( ⋅ ) \mathrm{sg}(\cdot) is the stop-gradient operator, and the loss is aggregated at the prompt level. In conventional RLVR training, ϕ \phi is fixed to a generic system prompt and only θ \theta is updated.
Fast weights: reflective prompt evolution.
We optimize the fast weights ϕ \phi using GEPA [ 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] , a reflective evolutionary procedure over textual prompts ϕ ∈ Σ ∗ \phi\in\Sigma^{\ast} . For a fixed policy π θ \pi_{\theta} , the fitness of a prompt on instance x x is its expected reward,
s  ( ϕ ; x ) = 𝔼 y ∼ π θ ( ⋅ ∣ x , ϕ )  [ r  ( x , y ) ] . s(\phi;x);=;\mathbb{E}
{y\sim\pi
{\theta}(\cdot\mid x,\phi)}!\left[r(x,y)\right].
(5)
GEPA maintains a population of prompts, uses rollouts to elicit natural-language critiques from a frozen reflection LM, and proposes textual mutations that improve performance on an anchor set from 𝒟 \mathcal{D} . Rather than returning a single prompt, GEPA retains a Pareto frontier of complementary prompts and returns the top- m m candidates, which we use as fast weights. We defer the details of parent selection, mutation, pruning, and prompt examples to Appendix 
A
https://arxiv.org/html/2605.12484v1#A1
.
3 Fast-Slow Training (FST)
We now describe FST, which jointly optimizes slow weights θ \theta through RL and fast weights Φ \Phi through GEPA. The method maintains a population of K K textual prompts, Φ = { ϕ ( 1 ) , … , ϕ ( K ) } \Phi={\phi^{(1)},\ldots,\phi^{(K)}} , and optimizes
max θ , Φ  J  ( θ , Φ ) = 𝔼 x ∼ 𝒟 , ϕ ∼ U ( Φ ) , y ∼ π θ ( ⋅ ∣ x , ϕ )  [ r  ( x , y ) ] , \max_{\theta,,\Phi};;J(\theta,\Phi)=\mathbb{E}
{x\sim\mathcal{D},;\phi\sim U(\Phi),;y\sim\pi
{\theta}(\cdot\mid x,\phi)}!\left[r(x,y)\right],
(6)
where U  ( Φ ) U(\Phi) is uniform over the prompt population. We keep a population rather than a single best prompt because GEPA returns a Pareto frontier of complementary prompts: different prompts perform best on different subsets of 𝒟 \mathcal{D} . Sampling across this frontier during RL gives the policy access to multiple conditioning behaviors and lets group-relative advantages compare both prompt-induced and sampling-induced variation on the same problem.
Training proceeds in cycles of T T slow-weight updates. At the start of cycle c c , we pre-fetch the next T T RL batches and denote their union by the lookahead batch ℒ c \mathcal{L}
{c} . We run GEPA with the current policy π θ c \pi
{\theta_{c}} as the rollout model, a frozen reflection LM π ref \pi_{\mathrm{ref}} as the proposer, ℒ c \mathcal{L}
{c} or a fixed-size subset as the anchor set, and the previous population Φ c \Phi
{c} as the seed. GEPA returns the top- K K candidates from its Pareto frontier, yielding the fast weights Φ c + 1 \Phi_{c+1} .
For the next T T steps, we update θ \theta on minibatches from ℒ c \mathcal{L}
{c} while holding Φ c + 1 \Phi
{c+1} fixed. For each problem p p , we form a rollout group of size G G by sampling each prompt ϕ ( k ) ∈ Φ c + 1 \phi^{(k)}\in\Phi_{c+1} exactly G / K G/K times. That is, in each group, G / K G/K rollouts receive the same prompts and we have K K such mini-groups. Cumulatively, they are treated as one group for p p ; rewards are normalized by the per-problem statistics ( r ¯ g , σ g ) (\bar{r}
{g},\sigma
{g}) as in eq 
3
https://arxiv.org/html/2605.12484v1#S2.E3
, mixing prompt and sampling variation within the same advantage computation. We then apply the cispo update in Eq. ( 
4
https://arxiv.org/html/2605.12484v1#S2.E4
). After T T updates, the procedure repeats with a new GEPA phase under the updated policy. Pseudocode of FST is given in Appendix 
B
https://arxiv.org/html/2605.12484v1#A2
.
4 Advantages of Fast-Slow Training
The textual fast weights Φ \Phi carry part of the task-level information that RL would otherwise force into θ \theta , so the slow weights move less to reach the same reward. The downstream signature of this division of labor is consistent across our settings: training reaches matched reward more quickly, θ \theta drifts less from the base policy at convergence, the model retains greater plasticity to adapt to subsequent tasks, and our method shows higher continual learning capability. We show each of these in the following sections.
Advantage 1: Fast-Slow Training Improves Data Efficiency
Figure 2: Data efficiency across three training families. Top row: matched-step validation reward (running max, mean@4) — FST reaches RL's running peak in substantially fewer training steps ( 3.0 × 3.0\times on CodeIO, 1.4 × 1.4\times on Math (Polaris), 3.0 × 3.0\times on HoVer-hard). Bottom row: 6/8-axis coverage radars for Base → \to GEPA, RL → \to GEPA, and FST → \to GEPA on Mean@8 and Best@8, with axes grouped by in-distribution (sage), cross-domain (coral), and easy → \to hard (amber). FST → \to GEPA matches or exceeds RL → \to GEPA across most coverage axes despite training for much fewer steps.
We evaluate FST on three training families: code-output prediction ( CodeIO) [ 
28
https://arxiv.org/html/2605.12484v1#bib.bib28
, 
53
https://arxiv.org/html/2605.12484v1#bib.bib53
] , math ( Polaris) [ 
3
https://arxiv.org/html/2605.12484v1#bib.bib3
] , and multi-hop fact verification ( HoVer-hard) [ 
21
https://arxiv.org/html/2605.12484v1#bib.bib21
] . All experiments use Qwen3-8B [ 
61
https://arxiv.org/html/2605.12484v1#bib.bib61
] , except for the Math run, where we first SFT Qwen3-8B-Base on Nemotron data [ 
12
https://arxiv.org/html/2605.12484v1#bib.bib12
] because Qwen3-8B is already saturated on math benchmarks. FST uses cycle length T = 6 T{=}6 and K ∈ { 4 , 8 } K\in{4,8} candidate prompts per cycle. Training-time performance is measured on a held-out in-distribution validation set. RL is trained until step 1500 1500 or in-distribution saturation (whichever comes first); FST is trained at least until it matches RL's running peak. Full hyperparameters and dataset details are deferred to Appendix 
D
https://arxiv.org/html/2605.12484v1#A4
.
The matched-step training curves (Figure 
2
https://arxiv.org/html/2605.12484v1#S4.F2
 Top) show that FST reaches RL's running peak in substantially fewer optimizer steps: 3.0 × \mathbf{3.0\times} fewer on CodeIO , 1.4 × \mathbf{1.4\times} on Math , and 3.0 × \mathbf{3.0\times} on HoVer-hard. Continuing past the crossover, FST's running peak also exceeds RL's on all three tasks .
To check that the in-distribution gain does not come at the cost of out-of-distribution behavior, we evaluate the GEPA-augmented variants of both FST s on cross-domain and easy-to-hard generalization axes (bottom row of Figure 
2
https://arxiv.org/html/2605.12484v1#S4.F2
). For each training task, we take RL's final checkpoint and FST's matched-performance checkpoint, follow each with a GEPA prompt-optimization pass, and compare both against Base → \to GEPA. FST → \to GEPA matches or exceeds RL → \to GEPA on most axes. From Math training, FST lifts HMMT25 Best@8 by + 6.7 +6.7 pp , HMMT25 Mean@8 by + 2.0 +2.0 pp, and Physics Mean@8 by + 3.2 +3.2 pp compared to RL. From CodeIO training, FST lifts Physics Best@8 by + 2.5 +2.5 pp and Physics Mean@8 by + 2.7 +2.7 pp. On Math training, FST → \to GEPA also leads RL → \to GEPA on cross-domain CodeIO Best@8.
Advantage 2: Fast-Slow Training Raises the Performance Asymptote
Figure 3: Performance asymptote on CodeIO, Math (Polaris), and HoVer-hard. For each run we fit a 4-parameter sigmoid R − R 0 = A − R 0 1 + ( C m  i  d / C ) B R-R_{0}=\frac{A-R_{0}}{1+(C_{mid}/C)^{B}} to the validation-accuracy trajectory and annotate the upper asymptote A A . FST's asymptote (green) is higher than RL's (blue) on all three tasks. Solid curves cover the fit window; dotted curves are extrapolation past the last training step.
Following Khatri et al. [ 
23
https://arxiv.org/html/2605.12484v1#bib.bib23
] , we compare RL and FST by the saturation level of their validation-accuracy curves rather than at any single training step. Unlike final-step or matched-step accuracy, which depends on where each run was stopped, the asymptote of a fitted curve reads off the level the run is converging to. For each (task, method) we fit a sigmoid curve
Δ  R = A − R 0 1 + ( C m  i  d / C ) B \Delta R=\frac{A-R_{0}}{1+(C_{mid}/C)^{B}}
(7)
to the validation-accuracy trajectory, where A A is the upper asymptote, B B a scaling exponent, C m  i  d C_{mid} the midpoint of the performance, and R 0 R_{0} is the initial reward at step 0.
Across all three tasks (Figure 
3
https://arxiv.org/html/2605.12484v1#S4.F3
), FST's fitted asymptote exceeds RL's: A = 47.4 % A{=}47.4% vs 43.0 % 43.0% on CodeIO ( + 4.4 +4.4 pp), 49.2 % 49.2% vs 46.4 % 46.4% on Math (Polaris) ( + 2.9 +2.9 pp), and 25.0 % 25.0% vs 17.3 % 17.3% on HoVer-hard ( + 7.7 +7.7 pp). Pushing part of the task adaptation into the textual fast-weight channel Φ \Phi in addition to the slow weights θ \theta helps the overall method converge to a higher accuracy ceiling than RL alone reaches.
Advantage 3: Fast-Slow Training Remains Close to the Base Model
Figure 4: Validation reward versus KL  ( π train ∥ π base ) \mathrm{KL}(\pi_{\text{train}},|,\pi_{\text{base}}) trajectories on CodeIO, HoVer, and Physics. Translucent markers are per-checkpoint measurements; the line is a rolling-mean smoothing along training step. At matched reward, FST (green) sits to the left of RL (blue) on every task, reaching the same reward at a significantly lower KL from the base policy.
The KL divergence KL  ( π train ∥ π base ) \mathrm{KL}(\pi_{\text{train}},|,\pi_{\text{base}}) between the post-trained policy and the base measures how far the slow weights have moved away from their base configuration; larger displacement is associated with reduced entropy, weaker OOD generalization, and lower plasticity for future tasks [ 
14
https://arxiv.org/html/2605.12484v1#bib.bib14
, 
32
https://arxiv.org/html/2605.12484v1#bib.bib32
, 
11
https://arxiv.org/html/2605.12484v1#bib.bib11
, 
55
https://arxiv.org/html/2605.12484v1#bib.bib55
] . We track this directly - at each training checkpoint we compute token-level KL from the base on the held-out validation prompts and plot it against the same checkpoint's validation accuracy, for both FST and RL across Physics, Math (Polaris), HoVer, and CodeIO.
Across all four tasks (Figure 
4
https://arxiv.org/html/2605.12484v1#S4.F4
), FST achieves higher performance at lower KL than RL. Shenfeld et al. [ 
48
https://arxiv.org/html/2605.12484v1#bib.bib48
] recently showed that on-policy RL is already biased toward KL-minimal solutions on a new task, and that the size of this shift correlates with how much prior knowledge is forgotten. Even relative to this strong baseline, FST shifts the accuracy/KL frontier further left. We next demonstrate that this reduced displacement preserves plasticity (Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px4
) and enables continual learning (Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px5
) in the models trained with FST.
Advantage 4: Fast-Slow Training Preserves Plasticity
Figure 5: Plasticity probe: starting from a Math (left) or Physics (right) checkpoint trained with either RL or FST, we run a 
fresh
 RL pass on HoVer-hard and plot HoVer validation accuracy over 400 steps. Base init (dotted) is the no-prior-training reference. FST-init (green) preserves more capacity for the new task than RL-init (blue) on both arms; on the Math arm, prior RL collapses HoVer-hard learnability to near-zero.
Continued post-training has been observed to hamper a model's ability to learn future tasks, a phenomenon commonly called 
plasticity loss
 [ 
11
https://arxiv.org/html/2605.12484v1#bib.bib11
, 
32
https://arxiv.org/html/2605.12484v1#bib.bib32
, 
14
https://arxiv.org/html/2605.12484v1#bib.bib14
, 
55
https://arxiv.org/html/2605.12484v1#bib.bib55
] : the slow weights become specialized to the trained task and lose responsiveness to gradient signals from new ones. We probe this directly in two phases. 
Phase 1
 trains a base model on task X X using either standard RL or FST. 
Phase 2
 takes the Phase-1 checkpoint as initialization and runs standard RL on a different task Y Y . Throughout Phase 2 we track validation accuracy on Y Y . As a no-prior-training reference, we also run Phase 2 starting from the base model. We test Math → HoVer-hard \texttt{Math}\to\texttt{HoVer-hard} and Physics → HoVer-hard \texttt{Physics}\to\texttt{HoVer-hard} .
Figure 
5
https://arxiv.org/html/2605.12484v1#S4.F5
 shows that in Phase-2, FST-init outperforms RL-init through the 400-step probe in both settings. The contrast is sharpest in Math → \to HoVer-hard: prior RL collapses HoVer-hard learnability to near-zero, the RL-init curve drops to ∼ \sim 0 % 0% within 40 steps and stays flat for the rest of the run. In contrast, FST-init reaches performance close to the base-init reference. On Physics → \to HoVer-hard, FST-init finishes at 24.2 % 24.2% and is still climbing, versus RL-init's 19.9 % 19.9% at step 400 . This indicates that, unlike RL, FST does not over-specialize the slow weights to task X X : the resulting checkpoint retains capacity to learn a new task Y Y , exhibiting higher plasticity.
Advantage 5: Fast-Slow Training Improves Continual Learning
Figure 6: Continual learning across HoVer → \to CodeIO → \to Physics: a single uninterrupted training run that switches task every 200 steps. The y-axis is per-task validation accuracy normalized with respect to the peak accuracy reached across methods within each stage. FST (solid) reaches near-peak on every stage; RL (dashed) acquires HoVer but completely stalls on CodeIO and only partially recovers on Physics.
A continual learning algorithm must keep absorbing new tasks as training proceeds, without losing the capacity to absorb later ones [ 
11
https://arxiv.org/html/2605.12484v1#bib.bib11
, 
55
https://arxiv.org/html/2605.12484v1#bib.bib55
, 
32
https://arxiv.org/html/2605.12484v1#bib.bib32
] . To test this we run a single uninterrupted training pass over three tasks, sequentially swapping the task every 200 steps - first 200 steps with HoVer (multi-hop fact verification), then CodeIO (code-output prediction), and finally Physics (multiple-choice from sciknoweval). In this setting, the same live training trajectory must absorb three task changes back-to-back, mirroring how a deployed model would actually be trained on a stream of incoming tasks.
Figure 
6
https://arxiv.org/html/2605.12484v1#S4.F6
 shows evaluation on all three tasks at different points across the full 600-step training run, normalized within each stage so that 0 is the stage's starting accuracy and 100 % 100% is peak performance on the task across methods. FST reaches near-peak in every stage while learning faster within each stage, mirroring the data-efficiency gap of Section 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px1
 Advantage 1. The contrast is sharpest in the second stage, CodeIO: across the full 200-step budget, RL barely lifts off its starting accuracy, peaking at 20.7 % 20.7% mean@16 (a + 2.5 +2.5 pp gain over its 18.3 % 18.3% stage-start), while FST climbs to near-peak in just ∼ \sim 80 steps (less than half the budget) and finishes the stage at 37.7 % 37.7% , a + 19.6 +19.6 pp gain (a ∼ \sim 8 × 8\times within-stage acquisition rate over RL, and a + 17.0 +17.0 pp absolute lead at step 400). This demonstrates that FST is a promising continual-learning algorithm for LLMs: by routing task-level adaptation through both the textual fast-weight channel Φ \Phi in addition to θ \theta , the method remains capable of acquiring later tasks under continued optimization.
5 Why Does Fast-Slow Training Work?
The empirical benefits in Section 
4
https://arxiv.org/html/2605.12484v1#S4
 raise the questions: where do the benefits come from exactly and which component is doing the majority of the work in which setting? The two studies below isolate these questions.
Observation 1: Fast Weights Acquire Task Signal Faster Than Slow Weights
Figure 7: Star Graph Search Task. FST escapes the zero-reward regime by step ∼ \sim 50, an order of magnitude before RL begins to move signal at ∼ \sim 300.
To explore how FST and RL behave when the base model obtains near-zero rewards, we run both FST and an RL baseline on a synthetic star-graph reasoning task. Given a star-shaped graph in context, the goal is to find a path between two labeled nodes.
The two methods exhibit qualitatively different early-training behavior (Figure 
7
https://arxiv.org/html/2605.12484v1#S5.F7
). Parameter-only RL produces near-zero reward for roughly the first ∼ \sim 300 steps before reward begins to rise. In contrast, FST reaches measurable reward by around step ∼ \sim 50, driven almost entirely by the first few GEPA cycles, before θ \theta has had time to move appreciably. This is heightened by the ability of FST to leverage 
text feedback
. The task provides informative feedback on failures, detailing where exactly a submitted path went wrong. The interpretation is direct: slow weights are slow in how many updates they require to begin moving signal at all. The fast channel does not have this latency: GEPA can extract task structure from a handful of rollouts and inject it through Φ \Phi immediately. While GEPA alone only aids in solving a few problems early on, it provides enough gradient signal for FST to climb rewards quickly.
Observation 2: Fast and Slow Weights Both Optimizing for Reward Raise Performance Ceiling
To understand how the performance ceiling of FST depends on fast and slow components, we compare FST with algorithms that rely on only fast or slow weights. We train on the full HoVer dataset due to its early saturation point. We compare with RL, GEPA and an approach distilling the FST prompt into the weights using the reverse-KL on-policy distillation loss
ℒ distill ( θ ) = 𝔼 x ∼ 𝒟 , y ∼ π θ ( ⋅ ∣ x ) [ ∑ t = 1 | y | KL ( π θ ( ⋅ ∣ x , y < t ) ∥ π θ ¯ ( ⋅ ∣ x , ϕ , y < t ) ) ] , \mathcal{L}
{\text{distill}}(\theta);=;\mathbb{E}
{x\sim\mathcal{D},;y\sim\pi_{\theta}(\cdot\mid x)}!\left[,\sum_{t=1}^{|y|}\mathrm{KL}!\Big(\pi_{\theta}(\cdot\mid x,y_{<t}),\Big|,\pi_{\bar{\theta}}(\cdot\mid x,\phi,y_{<t})\Big),\right],
(8)
where the teacher π θ ¯ ( ⋅ ∣ x , ϕ , ⋅ ) \pi_{\bar{\theta}}(\cdot\mid x,\phi,\cdot) is the same model evaluated with a FST-evolved fast-weight prompt ϕ \phi and frozen parameters θ ¯ \bar{\theta} , and the student π θ ( ⋅ ∣ x , ⋅ ) \pi_{\theta}(\cdot\mid x,\cdot) is conditioned only on the problem x x . Sampling y y on-policy from the student and minimizing the per-token reverse KL toward the teacher follows recent work on self-distillation [ 
20
https://arxiv.org/html/2605.12484v1#bib.bib20
] .
Figure 
8
https://arxiv.org/html/2605.12484v1#S5.F8
 shows that GEPA alone lacks the capacity to reach the ceiling performance obtained by methods with access to slow weights. FST-distill climbs on rewards only through signal in the fast weights, iteratively transferring domain information into the model. As a result, it can run multiple updates through the fast weights and thus surpasses GEPA alone but falls short of methods able to climb rewards directly through the higher capacity slow weights.
We also see the benefits of prompt diversity in Figure 
8
https://arxiv.org/html/2605.12484v1#S5.F8
 Right. Both FST and FST-distill maintain higher entropy than the entropy-collapsed RL-baseline. Above all, FST obtains the highest final performance ceiling across all methods. We find that it is the ability of FST to independently maximize reward using both fast and slow components that enables this higher ceiling.
 
Figure 8: HoVer training: FST (green) lifts validation accuracy above the prompt-only ceiling (GEPA only, dashed), RL (blue) plateaus, and FST-distill, fast-weight self-distillation that relies on GEPA to drive reward gains.
6 Discussion
In Sections 
4
https://arxiv.org/html/2605.12484v1#S4
 and 
5
https://arxiv.org/html/2605.12484v1#S5
, we describe several benefits of training reasoning models with fast-slow updates. As models with finite capacity are trained across ever more diverse sets of environments, we argue that not all task-specific information need be distilled in the weights of the model. We observe some encouraging properties of the new paradigm. First and foremost, FST maintains proximity to the base model, enabling a set of features suitable to continual learning: plasticity and lack of forgetting. Secondly, the framework allows for data efficient learning, in part due to the ability to learn from text feedback in the context update, overcoming the widely accepted 1-bit-per-episode information limit of binary RLVR. Finally, we observe healthy diversity during training due to a wide prompt pool. The distinction between context and weight optimization represents a broader split between declarative and procedural knowledge, an important distinction for any general-purpose reasoner.
6.1 Limitations and future work
While this study focuses primarily on investigating a particular instantiation of the fast-slow paradigm, taking CISPO and GEPA as highly capable methods for weight and prompt optimization, the framework is highly general. Studying the impact of changing the prompt or the weight optimizer is an interesting avenue for future work. Additionally, we believe there is potential to make the method more compute efficient and better reuse trajectories across prompt and weight optimization. Finally, though we present an initial exploration of applying this paradigm to distillation-based approaches in Figure 
8
https://arxiv.org/html/2605.12484v1#S5.F8
, we believe a more comprehensive study of this direction to be an exciting avenue for future work.
7 Related Work
Slow learning: RL for LLM reasoning.
Verifiable-reward LLM post-training writes every improvement into the model parameters via policy-gradient methods such as PPO, DPO, GRPO, and CISPO [ 
46
https://arxiv.org/html/2605.12484v1#bib.bib46
, 
43
https://arxiv.org/html/2605.12484v1#bib.bib43
, 
47
https://arxiv.org/html/2605.12484v1#bib.bib47
, 
35
https://arxiv.org/html/2605.12484v1#bib.bib35
] , used in most reasoning-RL pipelines [ 
26
https://arxiv.org/html/2605.12484v1#bib.bib26
, 
23
https://arxiv.org/html/2605.12484v1#bib.bib23
, 
61
https://arxiv.org/html/2605.12484v1#bib.bib61
] . Prolonged parametric adaptation shrinks output entropy, raises KL to the base policy, and erodes the model's ability to absorb new tasks, called the 
plasticity loss
 phenomenon [ 
11
https://arxiv.org/html/2605.12484v1#bib.bib11
, 
32
https://arxiv.org/html/2605.12484v1#bib.bib32
, 
14
https://arxiv.org/html/2605.12484v1#bib.bib14
, 
55
https://arxiv.org/html/2605.12484v1#bib.bib55
, 
48
https://arxiv.org/html/2605.12484v1#bib.bib48
] . We share this diagnosis but add a fast textual channel that absorbs much of the task-specific adaptation the slow weights would otherwise carry.
Fast learning: prompt and context optimization.
A parallel literature shows that substantial behavioral gains can come from editing the textual context alone, via discrete-prompt search [ 
49
https://arxiv.org/html/2605.12484v1#bib.bib49
, 
58
https://arxiv.org/html/2605.12484v1#bib.bib58
, 
40
https://arxiv.org/html/2605.12484v1#bib.bib40
] , LLM-driven prompt proposers [ 
66
https://arxiv.org/html/2605.12484v1#bib.bib66
, 
62
https://arxiv.org/html/2605.12484v1#bib.bib62
, 
41
https://arxiv.org/html/2605.12484v1#bib.bib41
, 
10
https://arxiv.org/html/2605.12484v1#bib.bib10
] , evolutionary methods [ 
13
https://arxiv.org/html/2605.12484v1#bib.bib13
, 
18
https://arxiv.org/html/2605.12484v1#bib.bib18
, 
1
https://arxiv.org/html/2605.12484v1#bib.bib1
] , compound LM programs [ 
24
https://arxiv.org/html/2605.12484v1#bib.bib24
, 
36
https://arxiv.org/html/2605.12484v1#bib.bib36
, 
51
https://arxiv.org/html/2605.12484v1#bib.bib51
, 
63
https://arxiv.org/html/2605.12484v1#bib.bib63
, 
8
https://arxiv.org/html/2605.12484v1#bib.bib8
, 
59
https://arxiv.org/html/2605.12484v1#bib.bib59
] , evolving agent context [ 
54
https://arxiv.org/html/2605.12484v1#bib.bib54
, 
56
https://arxiv.org/html/2605.12484v1#bib.bib56
, 
60
https://arxiv.org/html/2605.12484v1#bib.bib60
, 
65
https://arxiv.org/html/2605.12484v1#bib.bib65
] , and reflective self-feedback [ 
50
https://arxiv.org/html/2605.12484v1#bib.bib50
, 
33
https://arxiv.org/html/2605.12484v1#bib.bib33
, 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] . We use GEPA, which maintains a per-instance Pareto frontier of candidate prompts. All these methods are typically applied post-hoc to a frozen checkpoint, leaving the slow and fast channels disjoint in time.
Fast and slow weights: complementary learning systems.
The fast/slow decomposition predates deep learning, with roots in the neuroscience of complementary learning systems [ 
34
https://arxiv.org/html/2605.12484v1#bib.bib34
, 
25
https://arxiv.org/html/2605.12484v1#bib.bib25
] and a long line of fast-weight architectures and dual-timescale learners in neural networks [ 
19
https://arxiv.org/html/2605.12484v1#bib.bib19
, 
45
https://arxiv.org/html/2605.12484v1#bib.bib45
, 
6
https://arxiv.org/html/2605.12484v1#bib.bib6
, 
44
https://arxiv.org/html/2605.12484v1#bib.bib44
, 
5
https://arxiv.org/html/2605.12484v1#bib.bib5
, 
38
https://arxiv.org/html/2605.12484v1#bib.bib38
] . We adopt this decomposition for LLM post-training, instantiating the fast channel as an evolving population of textual prompts and the slow channel as the model parameters.
Modern fast–slow methods for LLM RL.
A small but growing body of work combines textual feedback with reward-driven weight updates. BetterTogether [ 
52
https://arxiv.org/html/2605.12484v1#bib.bib52
] alternates SFT with prompt optimization over a DSPy pipeline, albeit instantiated with prompt optimizers that don't use textual feedback; we extend this to a new training paradigm instantiated in verifiable-reward RL in which a Pareto-frontier prompt population created with textual feedback co-evolves with the policy. LANPO [ 
27
https://arxiv.org/html/2605.12484v1#bib.bib27
] interleaves language and numerical feedback via per-instance reflections; we instead maintain a cross-problem Pareto-frontier population. Recent work E-SPL [ 
64
https://arxiv.org/html/2605.12484v1#bib.bib64
] explores prompt optimization and RL at a smaller scale with focus on performance rather than adaptation. mmGRPO [ 
67
https://arxiv.org/html/2605.12484v1#bib.bib67
] runs prompt optimization once and then RL on a DSPy program; we interleave the two across cycles. POPE [ 
42
https://arxiv.org/html/2605.12484v1#bib.bib42
] prefixes hard prompts with partial reference solutions; FST learns task-level prompts that condition any rollout, and combining the two is a natural direction for future work.
8 Conclusion
We present a fast-slow framework for LLM post-training that jointly optimizes the slow model parameters θ \theta via RL and a fast textual-context population Φ \Phi via reflective prompt evolution, interleaving the two channels. Across CodeIO, Math, and HoVer-hard, this co-optimization reaches matched performance with 1.4 1.4 – 3 × 3\times fewer optimizer steps, attains a higher asymptote, and incurs lower KL displacement than RL alone, which in turn translates into preserved plasticity and stronger continual-learning behavior on new tasks. More broadly, our results suggest that effective post-training should not ask model parameters to absorb all forms of adaptation. Fast textual weights can capture task-specific and rapidly evolving improvements, while slow weights can focus on consolidating persistent behavior. This division of labor offers a path toward post-training methods that are more data-efficient, less destructive, and more amenable to continual learning.
9 Acknowledgements
The authors acknowledge the gracious support from the Furiosa AI, Apple, NVIDIA, Macronix, Mozilla team, Open Philanthropy / Coefficient Giving, and Amazon Research. Furthermore, we appreciate the support from Google Cloud, the Google TRC team Prof. David Patterson, along with support from Google Gemini team, and Divy Thakkar. Lakshya A Agrawal is also supported by a Laude Slingshot grant and Laude residency provided by the Laude Institute and an Amazon AI PhD Fellowship. We would like to thank Harman Singh, Nishanth Anand and Reza Bayat for useful discussions related to continual learning. Finally, the authors would also like to thank Josh Sirota and the Eragon team for infrastructure and compute support. Our conclusions do not necessarily reflect the position or the policy of our sponsors, and no official endorsement should be inferred.
References
Agarwal et al. [2024] Eshaan Agarwal, Joykirat Singh, Vivek Dani, Raghav Magazine, Tanuja Ganu, and Akshay Nambi. PromptWizard: Task-aware prompt optimization framework, 2024. URL 
https://arxiv.org/abs/2405.18369
https://arxiv.org/abs/2405.18369
.
Agrawal et al. [2026] Lakshya A Agrawal, Shangyin Tan, Dilara Soylu, Noah Ziems, Rishi Khare, Krista Opsahl-Ong, Arnav Singhvi, Herumb Shandilya, Michael J Ryan, Meng Jiang, Christopher Potts, Koushik Sen, Alexandros G. Dimakis, Ion Stoica, Dan Klein, Matei Zaharia, and Omar Khattab. Gepa: Reflective prompt evolution can outperform reinforcement learning, 2026. URL 
https://arxiv.org/abs/2507.19457
https://arxiv.org/abs/2507.19457
.
An et al. [2025] Chenxin An, Zhihui Xie, Xiaonan Li, Lei Li, Jun Zhang, Shansan Gong, Ming Zhong, Jingjing Xu, Xipeng Qiu, Mingxuan Wang, and Lingpeng Kong. Polaris: A post-training recipe for scaling reinforcement learning on advanced reasoning models, 2025. URL 
https://hkunlp.github.io/blog/2025/Polaris
https://hkunlp.github.io/blog/2025/Polaris
.
Anand and Precup [2023] Nishanth Anand and Doina Precup. Prediction and control in continual reinforcement learning, 2023. URL 
https://arxiv.org/abs/2312.11669
https://arxiv.org/abs/2312.11669
.
Anthony et al. [2017] Thomas Anthony, Zheng Tian, and David Barber. Thinking fast and slow with deep learning and tree search. In 
Advances in Neural Information Processing Systems
, 2017. URL 
https://arxiv.org/abs/1705.08439
https://arxiv.org/abs/1705.08439
.
Ba et al. [2016] Jimmy Ba, Geoffrey Hinton, Volodymyr Mnih, Joel Z. Leibo, and Catalin Ionescu. Using fast weights to attend to the recent past, 2016. URL 
https://arxiv.org/abs/1610.06258
https://arxiv.org/abs/1610.06258
.
Brown et al. [2020] Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray, Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. Language models are few-shot learners, 2020. URL 
https://arxiv.org/abs/2005.14165
https://arxiv.org/abs/2005.14165
.
Cheng et al. [2024] Ching-An Cheng, Allen Nie, and Adith Swaminathan. Trace is the next AutoDiff: Generative optimization with rich feedback, execution traces, and LLMs, 2024. URL 
https://arxiv.org/abs/2406.16218
https://arxiv.org/abs/2406.16218
.
Cui et al. [2025] Ganqu Cui, Yuchen Zhang, Jiacheng Chen, Lifan Yuan, Zhi Wang, Yuxin Zuo, Haozhan Li, Yuchen Fan, Huayu Chen, Weize Chen, Zhiyuan Liu, Hao Peng, Lei Bai, Wanli Ouyang, Yu Cheng, Bowen Zhou, and Ning Ding. The entropy mechanism of reinforcement learning for reasoning language models, 2025. URL 
https://arxiv.org/abs/2505.22617
https://arxiv.org/abs/2505.22617
.
Deng et al. [2022] Mingkai Deng, Jianyu Wang, Cheng-Ping Hsieh, Yihan Wang, Han Guo, Tianmin Shu, Meng Song, Eric P. Xing, and Zhiting Hu. RLPrompt: Optimizing discrete text prompts with reinforcement learning, 2022. URL 
https://arxiv.org/abs/2205.12548
https://arxiv.org/abs/2205.12548
.
Dohare et al. [2024] Shibhansh Dohare, J. Fernando Hernandez-Garcia, Qingfeng Lan, Parash Rahman, A. Rupam Mahmood, and Richard S. Sutton. Loss of plasticity in deep continual learning. 
Nature
, 632(8026):768–774, 2024. ISSN 1476-4687. doi: 10.1038/s41586-024-07711-7. URL 
https://doi.org/10.1038/s41586-024-07711-7
https://doi.org/10.1038/s41586-024-07711-7
.
Du et al. [2025] Wei Du, Shubham Toshniwal, Branislav Kisacanin, Sadegh Mahdavi, Ivan Moshkov, George Armstrong, Stephen Ge, Edgar Minasyan, Feng Chen, and Igor Gitman. Nemotron-math: Efficient long-context distillation of mathematical reasoning from multi-mode supervision. 
arXiv preprint arXiv:2512.15489
, 2025.
Fernando et al. [2023] Chrisantha Fernando, Dylan Banarse, Henryk Michalewski, Simon Osindero, and Tim Rocktäschel. Promptbreeder: Self-referential self-improvement via prompt evolution, 2023. URL 
https://arxiv.org/abs/2309.16797
https://arxiv.org/abs/2309.16797
.
Frati et al. [2024] Lapo Frati, Neil Traft, Jeff Clune, and Nick Cheney. 
Reset It and Forget It: Relearning Last-Layer Weights Improves Continual and Transfer Learning
. IOS Press, October 2024. ISBN 9781643685489. doi: 10.3233/faia240840. URL 
http://dx.doi.org/10.3233/FAIA240840
http://dx.doi.org/10.3233/FAIA240840
.
Gao et al. [2022] Leo Gao, John Schulman, and Jacob Hilton. Scaling laws for reward model overoptimization, 2022. URL 
https://arxiv.org/abs/2210.10760
https://arxiv.org/abs/2210.10760
.
Guo et al. [2024a] Daya Guo, Qihao Zhu, Dejian Yang, Zhenda Xie, Kai Dong, Wentao Zhang, Guanting Chen, Xiao Bi, Y. Wu, Y. K. Li, Fuli Luo, Yingfei Xiong, and Wenfeng Liang. Deepseek-coder: When the large language model meets programming – the rise of code intelligence, 2024a. URL 
https://arxiv.org/abs/2401.14196
https://arxiv.org/abs/2401.14196
.
Guo et al. [2025] Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Peiyi Wang, Qihao Zhu, Runxin Xu, Ruoyu Zhang, Shirong Ma, Xiao Bi, Xiaokang Zhang, Xingkai Yu, Yu Wu, Z. F. Wu, Zhibin Gou, Zhihong Shao, Zhuoshu Li, Ziyi Gao, Aixin Liu, Bing Xue, Bingxuan Wang, Bochao Wu, Bei Feng, Chengda Lu, Chenggang Zhao, Chengqi Deng, Chong Ruan, Damai Dai, Deli Chen, Dongjie Ji, Erhang Li, Fangyun Lin, Fucong Dai, Fuli Luo, Guangbo Hao, Guanting Chen, Guowei Li, H. Zhang, Hanwei Xu, Honghui Ding, Huazuo Gao, Hui Qu, Hui Li, Jianzhong Guo, Jiashi Li, Jingchang Chen, Jingyang Yuan, Jinhao Tu, Junjie Qiu, Junlong Li, J. L. Cai, Jiaqi Ni, Jian Liang, Jin Chen, Kai Dong, Kai Hu, Kaichao You, Kaige Gao, Kang Guan, Kexin Huang, Kuai Yu, Lean Wang, Lecong Zhang, Liang Zhao, Litong Wang, Liyue Zhang, Lei Xu, Leyi Xia, Mingchuan Zhang, Minghua Zhang, Minghui Tang, Mingxu Zhou, Meng Li, Miaojun Wang, Mingming Li, Ning Tian, Panpan Huang, Peng Zhang, Qiancheng Wang, Qinyu Chen, Qiushi Du, Ruiqi Ge, Ruisong Zhang, Ruizhe Pan, Runji Wang, R. J. Chen, R. L. Jin, Ruyi Chen, Shanghao Lu, Shangyan Zhou, Shanhuang Chen, Shengfeng Ye, Shiyu Wang, Shuiping Yu, Shunfeng Zhou, Shuting Pan, S. S. Li, Shuang Zhou, Shaoqing Wu, Tao Yun, Tian Pei, Tianyu Sun, T. Wang, Wangding Zeng, Wen Liu, Wenfeng Liang, Wenjun Gao, Wenqin Yu, Wentao Zhang, W. L. Xiao, Wei An, Xiaodong Liu, Xiaohan Wang, Xiaokang Chen, Xiaotao Nie, Xin Cheng, Xin Liu, Xin Xie, Xingchao Liu, Xinyu Yang, Xinyuan Li, Xuecheng Su, Xuheng Lin, X. Q. Li, Xiangyue Jin, Xiaojin Shen, Xiaosha Chen, Xiaowen Sun, Xiaoxiang Wang, Xinnan Song, Xinyi Zhou, Xianzu Wang, Xinxia Shan, Y. K. Li, Y. Q. Wang, Y. X. Wei, Yang Zhang, Yanhong Xu, Yao Li, Yao Zhao, Yaofeng Sun, Yaohui Wang, Yi Yu, Yichao Zhang, Yifan Shi, Yiliang Xiong, Ying He, Yishi Piao, Yisong Wang, Yixuan Tan, Yiyang Ma, Yiyuan Liu, Yongqiang Guo, Yuan Ou, Yuduan Wang, Yue Gong, Yuheng Zou, Yujia He, Yunfan Xiong, Yuxiang Luo, Yuxiang You, Yuxuan Liu, Yuyang Zhou, Y. X. Zhu, Yanping Huang, Yaohui Li, Yi Zheng, Yuchen Zhu, Yunxian Ma, Ying Tang, Yukun Zha, Yuting Yan, Z. Z. Ren, Zehui Ren, Zhangli Sha, Zhe Fu, Zhean Xu, Zhenda Xie, Zhengyan Zhang, Zhewen Hao, Zhicheng Ma, Zhigang Yan, Zhiyu Wu, Zihui Gu, Zijia Zhu, Zijun Liu, Zilin Li, Ziwei Xie, Ziyang Song, Zizheng Pan, Zhen Huang, Zhipeng Xu, Zhongyu Zhang, and Zhen Zhang. Deepseek-r1 incentivizes reasoning in llms through reinforcement learning. 
Nature
, 645(8081):633–638, 2025. ISSN 1476-4687. doi: 10.1038/s41586-025-09422-z. URL 
http://dx.doi.org/10.1038/s41586-025-09422-z
http://dx.doi.org/10.1038/s41586-025-09422-z
.
Guo et al. [2024b] Qingyan Guo, Rui Wang, Junliang Guo, Bei Li, Kaitao Song, Xu Tan, Guoqing Liu, Jiang Bian, and Yujiu Yang. EvoPrompt: Connecting LLMs with evolutionary algorithms yields powerful prompt optimizers, 2024b. URL 
https://arxiv.org/abs/2309.08532
https://arxiv.org/abs/2309.08532
.
Hinton and Plaut [1987] G. E. Hinton and D. C. Plaut. Using fast weights to deblur old memories. In 
Proceedings of the 9th Annual Conference of the Cognitive Science Society
, pages 177–186, Hillsdale, NJ, 1987. Lawrence Erlbaum Associates.
Hübotter et al. [2026] Jonas Hübotter, Frederike Lübeck, Lejs Behric, Anton Baumann, Marco Bagatella, Daniel Marta, Ido Hakimi, Idan Shenfeld, Thomas Kleine Buening, Carlos Guestrin, and Andreas Krause. Reinforcement learning via self-distillation, 2026. URL 
https://arxiv.org/abs/2601.20802
https://arxiv.org/abs/2601.20802
.
Jiang et al. [2020] Yichen Jiang, Shikha Bordia, Zheng Zhong, Charles Dognin, Maneesh Singh, and Mohit Bansal. Hover: A dataset for many-hop fact extraction and claim verification, 2020. URL 
https://arxiv.org/abs/2011.03088
https://arxiv.org/abs/2011.03088
.
Kalajdzievski [2024] Damjan Kalajdzievski. Scaling laws for forgetting when fine-tuning large language models, 2024. URL 
https://arxiv.org/abs/2401.05605
https://arxiv.org/abs/2401.05605
.
Khatri et al. [2025] Devvrit Khatri, Lovish Madaan, Rishabh Tiwari, Rachit Bansal, Sai Surya Duvvuri, Manzil Zaheer, Inderjit S. Dhillon, David Brandfonbrener, and Rishabh Agarwal. The art of scaling reinforcement learning compute for llms, 2025. URL 
https://arxiv.org/abs/2510.13786
https://arxiv.org/abs/2510.13786
.
Khattab et al. [2023] Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia, and Christopher Potts. Dspy: Compiling declarative language model calls into self-improving pipelines, 2023. URL 
https://arxiv.org/abs/2310.03714
https://arxiv.org/abs/2310.03714
.
Kumaran et al. [2016] Dharshan Kumaran, Demis Hassabis, and James L. McClelland. What learning systems do intelligent agents need? Complementary learning systems theory updated. 
Trends in Cognitive Sciences
, 20(7):512–534, 2016. doi: 10.1016/j.tics.2016.05.004.
Lambert et al. [2025] Nathan Lambert, Jacob Morrison, Valentina Pyatkin, Shengyi Huang, Hamish Ivison, Faeze Brahman, Lester James V. Miranda, Alisa Liu, Nouha Dziri, Shane Lyu, Yuling Gu, Saumya Malik, Victoria Graf, Jena D. Hwang, Jiangjiang Yang, Ronan Le Bras, Oyvind Tafjord, Chris Wilhelm, Luca Soldaini, Noah A. Smith, Yizhong Wang, Pradeep Dasigi, and Hannaneh Hajishirzi. Tulu 3: Pushing frontiers in open language model post-training, 2025. URL 
https://arxiv.org/abs/2411.15124
https://arxiv.org/abs/2411.15124
.
Li et al. [2025a] Ang Li, Yifei Wang, Zhihang Yuan, Stefanie Jegelka, and Yisen Wang. Lanpo: Bootstrapping language and numerical feedback for reinforcement learning in LLMs, 2025a. URL 
https://arxiv.org/abs/2510.16552
https://arxiv.org/abs/2510.16552
.
Li et al. [2025b] Junlong Li, Daya Guo, Dejian Yang, Runxin Xu, Yu Wu, and Junxian He. Codei/o: Condensing reasoning patterns via code input-output prediction, 2025b. URL 
https://arxiv.org/abs/2502.07316
https://arxiv.org/abs/2502.07316
.
Li et al. [2026] Long Li, Zhijian Zhou, Jiaran Hao, Jason Klein Liu, Yanting Miao, Wei Pang, Xiaoyu Tan, Wei Chu, Zhe Wang, Shirui Pan, Chao Qu, and Yuan Qi. The choice of divergence: A neglected key to mitigating diversity collapse in reinforcement learning with verifiable reward, 2026. URL 
https://arxiv.org/abs/2509.07430
https://arxiv.org/abs/2509.07430
.
Lin et al. [2024] Yong Lin, Hangyu Lin, Wei Xiong, Shizhe Diao, Jianmeng Liu, Jipeng Zhang, Rui Pan, Haoxiang Wang, Wenbin Hu, Hanning Zhang, Hanze Dong, Renjie Pi, Han Zhao, Nan Jiang, Heng Ji, Yuan Yao, and Tong Zhang. Mitigating the alignment tax of rlhf, 2024. URL 
https://arxiv.org/abs/2309.06256
https://arxiv.org/abs/2309.06256
.
Luo et al. [2025] Yun Luo, Zhen Yang, Fandong Meng, Yafu Li, Jie Zhou, and Yue Zhang. An empirical study of catastrophic forgetting in large language models during continual fine-tuning, 2025. URL 
https://arxiv.org/abs/2308.08747
https://arxiv.org/abs/2308.08747
.
Lyle et al. [2022] Clare Lyle, Mark Rowland, and Will Dabney. Understanding and preventing capacity loss in reinforcement learning, 2022. URL 
https://arxiv.org/abs/2204.09560
https://arxiv.org/abs/2204.09560
.
Madaan et al. [2023] Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, and Peter Clark. Self-refine: Iterative refinement with self-feedback, 2023. URL 
https://arxiv.org/abs/2303.17651
https://arxiv.org/abs/2303.17651
.
McClelland et al. [1995] James L. McClelland, Bruce L. McNaughton, and Randall C. O'Reilly. Why there are complementary learning systems in the hippocampus and neocortex: Insights from the successes and failures of connectionist models of learning and memory. 
Psychological Review
, 102(3):419–457, 1995. doi: 10.1037/0033-295X.102.3.419.
MiniMax et al. [2025] MiniMax, :, Aili Chen, Aonian Li, Bangwei Gong, Binyang Jiang, Bo Fei, Bo Yang, Boji Shan, Changqing Yu, Chao Wang, Cheng Zhu, Chengjun Xiao, Chengyu Du, Chi Zhang, Chu Qiao, Chunhao Zhang, Chunhui Du, Congchao Guo, Da Chen, Deming Ding, Dianjun Sun, Dong Li, Enwei Jiao, Haigang Zhou, Haimo Zhang, Han Ding, Haohai Sun, Haoyu Feng, Huaiguang Cai, Haichao Zhu, Jian Sun, Jiaqi Zhuang, Jiaren Cai, Jiayuan Song, Jin Zhu, Jingyang Li, Jinhao Tian, Jinli Liu, Junhao Xu, Junjie Yan, Junteng Liu, Junxian He, Kaiyi Feng, Ke Yang, Kecheng Xiao, Le Han, Leyang Wang, Lianfei Yu, Liheng Feng, Lin Li, Lin Zheng, Linge Du, Lingyu Yang, Lunbin Zeng, Minghui Yu, Mingliang Tao, Mingyuan Chi, Mozhi Zhang, Mujie Lin, Nan Hu, Nongyu Di, Peng Gao, Pengfei Li, Pengyu Zhao, Qibing Ren, Qidi Xu, Qile Li, Qin Wang, Rong Tian, Ruitao Leng, Shaoxiang Chen, Shaoyu Chen, Shengmin Shi, Shitong Weng, Shuchang Guan, Shuqi Yu, Sichen Li, Songquan Zhu, Tengfei Li, Tianchi Cai, Tianrun Liang, Weiyu Cheng, Weize Kong, Wenkai Li, Xiancai Chen, Xiangjun Song, Xiao Luo, Xiao Su, Xiaobo Li, Xiaodong Han, Xinzhu Hou, Xuan Lu, Xun Zou, Xuyang Shen, Yan Gong, Yan Ma, Yang Wang, Yiqi Shi, Yiran Zhong, Yonghong Duan, Yongxiang Fu, Yongyi Hu, Yu Gao, Yuanxiang Fan, Yufeng Yang, Yuhao Li, Yulin Hu, Yunan Huang, Yunji Li, Yunzhi Xu, Yuxin Mao, Yuxuan Shi, Yuze Wenren, Zehan Li, Zelin Li, Zhanxu Tian, Zhengmao Zhu, Zhenhua Fan, Zhenzhen Wu, Zhichao Xu, Zhihang Yu, Zhiheng Lyu, Zhuo Jiang, Zibo Gao, Zijia Wu, Zijian Song, and Zijun Sun. Minimax-m1: Scaling test-time compute efficiently with lightning attention, 2025. URL 
https://arxiv.org/abs/2506.13585
https://arxiv.org/abs/2506.13585
.
Opsahl-Ong et al. [2024] Krista Opsahl-Ong, Michael J Ryan, Josh Purtell, David Broman, Christopher Potts, Matei Zaharia, and Omar Khattab. Optimizing instructions and demonstrations for multi-stage language model programs, 2024. URL 
https://arxiv.org/abs/2406.11695
https://arxiv.org/abs/2406.11695
.
Ouyang et al. [2022] Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, and Ryan Lowe. Training language models to follow instructions with human feedback, 2022. URL 
https://arxiv.org/abs/2203.02155
https://arxiv.org/abs/2203.02155
.
Pham et al. [2022] Quang Pham, Chenghao Liu, and Steven C. H. Hoi. Continual learning, fast and slow, 2022. URL 
https://arxiv.org/abs/2209.02370
https://arxiv.org/abs/2209.02370
.
Prakash and Buvanesh [2025] Jatin Prakash and Anirudh Buvanesh. What can you do when you have zero rewards during rl?, 2025. URL 
https://arxiv.org/abs/2510.03971
https://arxiv.org/abs/2510.03971
.
Prasad et al. [2023] Archiki Prasad, Peter Hase, Xiang Zhou, and Mohit Bansal. GrIPS: Gradient-free, edit-based instruction search for prompting large language models, 2023. URL 
https://arxiv.org/abs/2203.07281
https://arxiv.org/abs/2203.07281
.
Pryzant et al. [2023] Reid Pryzant, Dan Iter, Jerry Li, Yin Tat Lee, Chenguang Zhu, and Michael Zeng. Automatic prompt optimization with “gradient descent” and beam search, 2023. URL 
https://arxiv.org/abs/2305.03495
https://arxiv.org/abs/2305.03495
.
Qu et al. [2025] Yuxiao Qu, Amrith Setlur, Virginia Smith, Ruslan Salakhutdinov, and Aviral Kumar. How to explore to scale RL training of LLMs on hard problems. CMU Machine Learning Blog, 2025. URL 
https://blog.ml.cmu.edu/2025/11/26/how-to-explore-to-scale-rl-training-of-llms-on-hard-problems/
https://blog.ml.cmu.edu/2025/11/26/how-to-explore-to-scale-rl-training-of-llms-on-hard-problems/
. Introduces POPE (Privileged On-Policy Exploration); paper in preparation.
Rafailov et al. [2024] Rafael Rafailov, Archit Sharma, Eric Mitchell, Stefano Ermon, Christopher D. Manning, and Chelsea Finn. Direct preference optimization: Your language model is secretly a reward model, 2024. URL 
https://arxiv.org/abs/2305.18290
https://arxiv.org/abs/2305.18290
.
Schlag et al. [2021] Imanol Schlag, Kazuki Irie, and Jürgen Schmidhuber. Linear transformers are secretly fast weight programmers, 2021. URL 
https://arxiv.org/abs/2102.11174
https://arxiv.org/abs/2102.11174
.
Schmidhuber [1992] J. Schmidhuber. Learning to control fast-weight memories: An alternative to dynamic recurrent networks. 
Neural Computation
, 4(1):131–139, 1992. doi: 10.1162/neco.1992.4.1.131. URL 
https://doi.org/10.1162/neco.1992.4.1.131
https://doi.org/10.1162/neco.1992.4.1.131
.
Schulman et al. [2017] John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov. Proximal policy optimization algorithms, 2017. URL 
https://arxiv.org/abs/1707.06347
https://arxiv.org/abs/1707.06347
.
Shao et al. [2024] Zhihong Shao, Peiyi Wang, Qihao Zhu, Runxin Xu, Junxiao Song, Xiao Bi, Haowei Zhang, Mingchuan Zhang, Y. K. Li, Y. Wu, and Daya Guo. Deepseekmath: Pushing the limits of mathematical reasoning in open language models, 2024. URL 
https://arxiv.org/abs/2402.03300
https://arxiv.org/abs/2402.03300
.
Shenfeld et al. [2025] Idan Shenfeld, Jyothish Pari, and Pulkit Agrawal. Rl's razor: Why online reinforcement learning forgets less, 2025. URL 
https://arxiv.org/abs/2509.04259
https://arxiv.org/abs/2509.04259
.
Shin et al. [2020] Taylor Shin, Yasaman Razeghi, Robert L. Logan IV, Eric Wallace, and Sameer Singh. AutoPrompt: Eliciting knowledge from language models with automatically generated prompts, 2020. URL 
https://arxiv.org/abs/2010.15980
https://arxiv.org/abs/2010.15980
.
Shinn et al. [2023] Noah Shinn, Federico Cassano, Edward Berman, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao. Reflexion: Language agents with verbal reinforcement learning, 2023. URL 
https://arxiv.org/abs/2303.11366
https://arxiv.org/abs/2303.11366
.
Sordoni et al. [2023] Alessandro Sordoni, Xingdi Yuan, Marc-Alexandre Côté, Matheus Pereira, and Adam Trischler. Joint prompt optimization of stacked LLMs using variational inference, 2023. URL 
https://arxiv.org/abs/2306.12509
https://arxiv.org/abs/2306.12509
.
Soylu et al. [2024] Dilara Soylu, Christopher Potts, and Omar Khattab. Fine-tuning and prompt optimization: Two great steps that work better together, 2024. URL 
https://arxiv.org/abs/2407.10930
https://arxiv.org/abs/2407.10930
. EMNLP 2024.
Stojanovski et al. [2025] Zafir Stojanovski, Oliver Stanley, Joe Sharratt, Richard Jones, Abdulhakeem Adefioye, Jean Kaddour, and Andreas Köpf. Reasoning gym: Reasoning environments for reinforcement learning with verifiable rewards, 2025. URL 
https://arxiv.org/abs/2505.24760
https://arxiv.org/abs/2505.24760
.
Suzgun et al. [2025] Mirac Suzgun, Mert Yuksekgonul, Federico Bianchi, Dan Jurafsky, and James Zou. Dynamic cheatsheet: Test-time learning with adaptive memory, 2025. URL 
https://arxiv.org/abs/2504.07952
https://arxiv.org/abs/2504.07952
.
Tang et al. [2025] Hongyao Tang, Johan Obando-Ceron, Pablo Samuel Castro, Aaron Courville, and Glen Berseth. Mitigating plasticity loss in continual reinforcement learning by reducing churn, 2025. URL 
https://arxiv.org/abs/2506.00592
https://arxiv.org/abs/2506.00592
.
Wang et al. [2024] Zora Zhiruo Wang, Jiayuan Mao, Daniel Fried, and Graham Neubig. Agent workflow memory, 2024. URL 
https://arxiv.org/abs/2409.07429
https://arxiv.org/abs/2409.07429
.
Wei et al. [2023] Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, and Denny Zhou. Chain-of-thought prompting elicits reasoning in large language models, 2023. URL 
https://arxiv.org/abs/2201.11903
https://arxiv.org/abs/2201.11903
.
Wen et al. [2023] Yuxin Wen, Neel Jain, John Kirchenbauer, Micah Goldblum, Jonas Geiping, and Tom Goldstein. Hard prompts made easy: Gradient-based discrete optimization for prompt tuning and discovery, 2023. URL 
https://arxiv.org/abs/2302.03668
https://arxiv.org/abs/2302.03668
.
Wu et al. [2025] Shirley Wu, Parth Sarthi, Shiyu Zhao, Aaron Lee, Herumb Shandilya, Arnav Singhvi, Bowen Hong, Wenfei Liang, James Zou, Omar Khattab, Jure Leskovec, and Matei Zaharia. Optimas: Optimizing compound AI systems with globally aligned local rewards, 2025. URL 
https://arxiv.org/abs/2507.03041
https://arxiv.org/abs/2507.03041
.
Xu et al. [2025] Wujiang Xu, Zujie Liang, Kai Mei, Hang Gao, Juntao Tan, and Yongfeng Zhang. A-MEM: Agentic memory for LLM agents, 2025. URL 
https://arxiv.org/abs/2502.12110
https://arxiv.org/abs/2502.12110
.
Yang et al. [2025] An Yang, Anfeng Li, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chang Gao, Chengen Huang, Chenxu Lv, Chujie Zheng, Dayiheng Liu, Fan Zhou, Fei Huang, Feng Hu, Hao Ge, Haoran Wei, Huan Lin, Jialong Tang, Jian Yang, Jianhong Tu, Jianwei Zhang, Jianxin Yang, Jiaxi Yang, Jing Zhou, Jingren Zhou, Junyang Lin, Kai Dang, Keqin Bao, Kexin Yang, Le Yu, Lianghao Deng, Mei Li, Mingfeng Xue, Mingze Li, Pei Zhang, Peng Wang, Qin Zhu, Rui Men, Ruize Gao, Shixuan Liu, Shuang Luo, Tianhao Li, Tianyi Tang, Wenbiao Yin, Xingzhang Ren, Xinyu Wang, Xinyu Zhang, Xuancheng Ren, Yang Fan, Yang Su, Yichang Zhang, Yinger Zhang, Yu Wan, Yuqiong Liu, Zekun Wang, Zeyu Cui, Zhenru Zhang, Zhipeng Zhou, and Zihan Qiu. Qwen3 technical report, 2025. URL 
https://arxiv.org/abs/2505.09388
https://arxiv.org/abs/2505.09388
.
Yang et al. [2024] Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V. Le, Denny Zhou, and Xinyun Chen. Large language models as optimizers, 2024. URL 
https://arxiv.org/abs/2309.03409
https://arxiv.org/abs/2309.03409
.
Yuksekgonul et al. [2024] Mert Yuksekgonul, Federico Bianchi, Joseph Boen, Sheng Liu, Zhi Huang, Carlos Guestrin, and James Zou. TextGrad: Automatic “differentiation” via text, 2024. URL 
https://arxiv.org/abs/2406.07496
https://arxiv.org/abs/2406.07496
.
Zhang et al. [2026] Lunjun Zhang, Ryan Chen, and Bradly C. Stadie. Evolutionary system prompt learning for reinforcement learning in llms, 2026. URL 
https://arxiv.org/abs/2602.14697
https://arxiv.org/abs/2602.14697
.
Zhang et al. [2025] Qizheng Zhang, Changran Hu, Shubhangi Upasani, Boyuan Ma, Fenglu Hong, Vamsidhar Kamanuru, Jay Rainton, Chen Wu, Mengmeng Ji, Hanchen Li, Urmish Thakker, James Zou, and Kunle Olukotun. Agentic context engineering: Evolving contexts for self-improving language models, 2025. URL 
https://arxiv.org/abs/2510.04618
https://arxiv.org/abs/2510.04618
.
Zhou et al. [2023] Yongchao Zhou, Andrei Ioan Muresanu, Ziwen Han, Keiran Paster, Silviu Pitis, Harris Chan, and Jimmy Ba. Large language models are human-level prompt engineers, 2023. URL 
https://arxiv.org/abs/2211.01910
https://arxiv.org/abs/2211.01910
.
Ziems et al. [2025] Noah Ziems, Dilara Soylu, Lakshya A Agrawal, Isaac Miller, Liheng Lai, Chen Qian, Kaiqiang Song, Meng Jiang, Dan Klein, Matei Zaharia, Karel D'Oosterlinck, Christopher Potts, and Omar Khattab. mmGRPO: Composing policy gradients and prompt optimization for language model programs, 2025. URL 
https://arxiv.org/abs/2508.04660
https://arxiv.org/abs/2508.04660
.
Appendix A GEPA
We optimize the fast weights ϕ \phi using GEPA [ 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] , a reflective evolutionary procedure that searches the text space Σ ∗ \Sigma^{\ast} guided by a frozen 
reflection LM
 π ref \pi_{\text{ref}} , a separate capable model that proposes textual mutations from natural-language critiques of rollouts. For a candidate ϕ \phi and query x x , define the per-instance fitness
s  ( ϕ ; x ) = 𝔼 y ∼ π θ ( ⋅ ∣ x , ϕ )  [ r  ( x , y ) ] . s(\phi;x);=;\mathbb{E}
{y\sim\pi
{\theta}(\cdot\mid x,\phi)}!\big[,r(x,y),\big].
(9)
GEPA maintains a population 𝒫 \mathcal{P} of candidate prompts whose fitness vectors ( s  ( ϕ ; x 1 ) , … , s  ( ϕ ; x n ) ) \big(s(\phi;x_{1}),\ldots,s(\phi;x_{n})\big) on an anchor set { x i } i = 1 n ⊂ 𝒟 {x_{i}}
{i=1}^{n}\subset\mathcal{D} are tracked. One generation proceeds in four steps: (i) select a parent ϕ p \phi
{p} from the per-instance Pareto frontier of 𝒫 \mathcal{P} ; (ii) sample a minibatch of rollouts under ϕ p \phi_{p} from π θ \pi_{\theta} ; (iii) elicit a child ϕ c ← π ref  ( ϕ p , traces ) \phi_{c}\leftarrow\pi_{\text{ref}}!\big(\phi_{p},,\text{traces}\big) by having the reflection LM diagnose failures and propose a textual edit; (iv) evaluate s  ( ϕ c ; ⋅ ) s(\phi_{c};\cdot) on the anchor set, add ϕ c \phi_{c} to 𝒫 \mathcal{P} , and prune dominated candidates. After a fixed metric-call budget, GEPA returns the top- m m candidates of the resulting Pareto frontier. The frontier preserves diversity: different candidates are best on different slices of 𝒟 \mathcal{D} , and this diversity is precisely what allows the RL phase to exploit several complementary fast weights simultaneously. GEPA is related to other LLM-as-optimizer methods that use natural-language reflection or self-feedback [ 
50
https://arxiv.org/html/2605.12484v1#bib.bib50
, 
33
https://arxiv.org/html/2605.12484v1#bib.bib33
, 
62
https://arxiv.org/html/2605.12484v1#bib.bib62
] , and is distinguished by its per-instance Pareto population and explicit prompt-mutation operator.
Appendix B Algorithm pseudocode
We present the algorithm pseudocode in Algorithm 
1
https://arxiv.org/html/2605.12484v1#alg1
.
Algorithm 1 FST: interleaved RL with population-based prompt evolution.
1: initial slow weights θ 0 \theta_{0} ; seed prompt ϕ seed \phi_{\text{seed}} ; data stream 𝒟 \mathcal{D} ; cycle length T T ; population size K K ; GRPO group size G G with K ∣ G K\mid G ; reflection LM π ref \pi_{\text{ref}}
2: Φ 0 ← { ϕ seed } \Phi_{0}\leftarrow{\phi_{\text{seed}}}
3: for cycle c = 0 , 1 , 2 , … c=0,1,2,\dots do
4: ℒ c ← \mathcal{L}_{c}\leftarrow pre-fetch the next T T minibatches from 𝒟 \mathcal{D} ⊳ \triangleright lookahead batch
5: Φ c + 1 ← \Phi_{c+1}\leftarrow Gepa ( π θ c , π ref , ℒ c , Φ c , K ) \big(\pi_{\theta_{c}},,\pi_{\text{ref}},,\mathcal{L}
{c},,\Phi
{c},,K\big)
6: for t = 1 , … , T t=1,\dots,T do
7: sample minibatch ℬ t ⊂ ℒ c \mathcal{B}
{t}\subset\mathcal{L}
{c}
8: for all p ∈ ℬ t p\in\mathcal{B}_{t} do
9: for all ϕ ( k ) ∈ Φ c + 1 \phi^{(k)}\in\Phi_{c+1} do
10: assemble G / K G/K rollouts under ( p , ϕ ( k ) ) (p,\phi^{(k)}) , sampling from π θ ( ⋅ ∣ p , ϕ ( k ) ) \pi_{\theta}(\cdot\mid p,\phi^{(k)})
11: end for
12: place all G G rollouts in one group; compute group-relative advantages
13: end for
14: update θ \theta with ℒ cispo \mathcal{L}_{\textsc{cispo}} (Eq. ( 
4
https://arxiv.org/html/2605.12484v1#S2.E4
))
15: end for
16: end for
Appendix C Star-graph dataset construction
Star-graph search is a planning task introduced by Prakash and Buvanesh [ 
39
https://arxiv.org/html/2605.12484v1#bib.bib39
] . We adopt their problem definition and procedurally generate our train and test splits.
Graph instance.
Each instance is parameterized by a triple ( d , p , n ) (d,p,n) : source degree d d , path length p p , and node-pool size n n . We sample without replacement from { 0 , 1 , … , n − 1 } {0,1,\ldots,n-1} to draw the source s s and goal g g ( s ≠ g s\neq g ), then p − 2 p-2 distinct intermediate nodes that together form the unique gold path s → v 1 → ⋯ → v p − 2 → g s!\to!v_{1}!\to!\cdots!\to!v_{p-2}!\to!g (yielding p − 1 p-1 edges of length 1 each). On top of the gold path we attach d − 1 d-1 
decoy branches
 rooted at s s , each itself a chain of length p p , with all decoy nodes drawn fresh from the unused pool so that no decoy intersects the gold path or another decoy. The full edge set is then shuffled uniformly at random and serialized as a flat space-separated list of comma-separated pairs. The graph is treated as undirected at scoring time but presented as a list with no ordering hint.
Why this is a hard exploration problem.
The source s s is the only node with degree d d ; every other node sits on a chain and has degree 2 2 (its predecessor and successor along that arm). The first hop is therefore the only real branching decision: picking a decoy arm commits the model to a chain that never reaches g g , and the path-listing output format gives no built-in way to backtrack. With d = 25 d=25 a uniformly-random first hop would succeed only 4 % 4% of the time, and empirically Qwen3-4B-Instruct does worse than uniform: pass@ 16 16 is 0 / 50 0/50 on the seed prompt before any RL update, because the model's strong path-finding prior is miscalibrated for this synthetic layout and concentrates probability on a wrong arm. This is the “RL stuck at zero” regime that motivates fast-weight prompt evolution.
Prompt template.
Every example is formatted with the verbatim template from the original reference implementation:
Given a bi-directional graph in the form of space separated edges, output a path from source node to the destination node in the form of comma separated integers.
For this question the graph is {graph}
The source node is {source}
The destination node is {destination}
Please reason step by step, and put your final answer within \boxed{}.
The seed system prompt used during RL and as the initial GEPA candidate is:
You are solving a graph path-finding task. You will be given a list of edges and a source and destination node. Output one valid path from source to destination. Inspect the source node's neighbors first, identify which neighbor leads to the destination via a sequence of valid edges, then commit to that branch. Each consecutive pair in your output path must be a valid edge in the graph. Put your final answer comma-separated inside boxed braces.
Scoring.
The reward function extracts the contents of the last \boxed{…} from the post-
 body of the rollout, strips whitespace, and applies an exact-match comparison against the gold path s , v 1 , … , v p − 2 , g s,v_{1},\ldots,v_{p-2},g rendered as a comma-separated string. The reward is 1.0 1.0 on exact match and 0.0 0.0 otherwise — the task admits no partial credit, so even a single wrong intermediate node zeros the reward.
Splits used in the paper.
We sweep difficulty by varying ( d , p , n ) (d,p,n) . The headline experiments use ( d , p , n ) = ( 25 , 20 , 500 ) (d,p,n)=(25,20,500) with 10 , 000 10{,}000 training examples and 200 200 held-out test examples.
Appendix D Hyperparameters and compute
This appendix lists all training hyperparameters needed to reproduce the numbers in the main paper. Settings shared across domains are described first; per-domain overrides follow in Tables 
1
https://arxiv.org/html/2605.12484v1#A4.T1
– 
2
https://arxiv.org/html/2605.12484v1#A4.T2
.
Shared RL configuration.
All RL runs are GRPO [ 
47
https://arxiv.org/html/2605.12484v1#bib.bib47
] with the cispo surrogate loss [ 
35
https://arxiv.org/html/2605.12484v1#bib.bib35
, 
23
https://arxiv.org/html/2605.12484v1#bib.bib23
] ( clip_low = 1.0 \text{clip_low}=1.0 , clip_high = 3.0 \text{clip_high}=3.0 ), advantage normalization by per-group standard deviation, and a small KL-to-reference penalty ( coef = 10 − 3 \text{coef}=10^{-3} ). The actor optimizer is AdamW (PyTorch defaults β 1 = 0.9 \beta_{1}=0.9 , β 2 = 0.999 \beta_{2}=0.999 , weight decay 0 ) at learning rate 10 − 6 10^{-6} with a 10 10 -step linear warm-up; we use no learning-rate decay. Each RL step samples G = 8 G=8 rollouts per problem with train_batch_size = 32 ,=32 problems (so 256 256 rollouts per step), runs PPO updates with ppo_mini_batch_size = 32 ,=32 , and uses tensor-parallel size 1 1 for the rollout engine (vLLM). At evaluation time we report mean@ 4 4 over four rollouts per validation prompt at temperature 0.6 0.6 , top- p p 0.95 0.95 . We checkpoint every 50 50 training steps and keep all checkpoints. All runs use Qwen3 
thinking
 mode except star-graph (which uses the Instruct base, no thinking) and the no-thinking baselines reported in the main text.
Shared GEPA configuration.
GEPA cycles use the same settings for all domains: cycle length T = 6 T=6 RL steps between GEPA optimizations (equivalently, warmstart_steps = rl_steps_per_cycle = 6 \texttt{warmstart_steps}=\texttt{rl_steps_per_cycle}=6 ); all K K population prompts are scored on every question ( prompts_per_question = K ,=K ) with advantage grouping 
Option B
 ( advantage_grouping="question"), so a problem's G G rollouts are split G / K G/K per prompt and a single group statistic ( r ¯ g , σ g ) (\bar{r}
{g},\sigma
{g}) is computed across all of them. The reflection LM is OpenAI gpt-5.2, accessed through LiteLLM. Per-cycle GEPA budgets are num_eval_examples = 192 \texttt{num_eval_examples}=192 and max_metric_calls = 960 \texttt{max_metric_calls}=960 across all domains except polaris ( 96 96 and 1500 1500 ) and star-graph ( 200 200 and 960 960 ). Candidate prompts are injected as a system message; for datasets whose raw prompt already contains a system message (HoVer, Physics, Math) we 
merge
 the GEPA prompt into the existing system role rather than stack a second one. Each GEPA cycle outputs a Pareto-frontier population of size K K which seeds the next cycle.
Per-domain overrides.
Tables 
1
https://arxiv.org/html/2605.12484v1#A4.T1
 and 
2
https://arxiv.org/html/2605.12484v1#A4.T2
 summarize the parameters that vary across training domains.
Table 1: Per-domain RL hyperparameters and base models. L ctx L_{\text{ctx}} / L p L_{p} / L r L_{r} are the maximum context, prompt, and response lengths (tokens). Train batch is the number of problems per RL step; rollouts/step is batch × G \text{batch}\times G .
Domain
Base model
L ctx L_{\text{ctx}} / L p L_{p} / L r L_{r}
Batch
Rollouts/step
GPU util.
HoVer-hard
Qwen3-8B (think)
18944 / 4096 / 8192
32
256
0.6
Physics
Qwen3-8B (think)
18944 / 4096 / 8192
32
256
0.7
CodeIO
Qwen3-8B (think)
18944 / 4096 / 8192
32
256
0.6
Math (Polaris)
Qwen3-8B-SFT 
†
 (think)
12288 / 4096 / 8192
64
512
0.7
Star-graph
Qwen3-4B-Instruct (no think)
0 8192 / 4096 / 4096
32
256
0.6
Polaris uses our own continued-SFT base (Qwen3-8B base further SFT'd on Nemotron to recover math performance, since Qwen3-8B-Instruct is already saturated on math). For Polaris only, GRPO advantages are not normalized by group std ( norm_adv_by_std_in_grpo=false) and the train batch is doubled to 64 64 problems/step.
Table 2: Per-domain GEPA hyperparameters. K K is the population size; G / K G/K is the number of rollouts each candidate prompt produces per problem within an RL group. Eval set / metric calls are the per-cycle GEPA budgets.
Domain
K K
G / K G/K
Cycle T T
Eval set
Metric calls
Reflection LM
HoVer-hard
8
1
6
192
0 960
gpt-5.2
Physics
4
2
6
192
0 960
gpt-5.2
CodeIO
8
1
6
192
0 960
gpt-5.2
Math (Polaris)
4
2
6
0 96
1500
gpt-5.2
Star-graph
8
1
6
200
0 960
gpt-5.2
Compute and wall-clock.
All runs are submitted to a SLURM cluster with 8 × 8\times H100 (80GB) per node. The headline runs in the main paper are single-node ( 1 × 8 1\times 8 GPU); the Polaris K = 8 K=8 ablation is the only multi-node configuration ( 4 × 8 = 32 4\times 8=32 GPUs). Mean per-RL-step wall-clock under the headline configuration is ∼ 60 \sim 60 s for RL-only and ∼ 100 \sim 100 s for FST without rollout reuse (HoVer-hard, K = 8 K=8 ). Enabling rollout reuse (Section 
F
https://arxiv.org/html/2605.12484v1#A6
) brings the RL-step cost down to ∼ 47 \sim 47 s, slightly faster than RL-only at the step level, because ∼ 1 / 3 \sim 1/3 of the RL group's rollouts are served from the GEPA evaluation cache rather than freshly generated. This figure covers the RL training loop only: FST additionally runs periodic GEPA cycles (rollouts for K K candidate prompts plus a reflection call), which add real wall-clock on top, so end-to-end a FST run is more expensive than an RL-only run of equal step count. RL training runs go to either 1500 1500 steps or until validation accuracy saturates (whichever comes first); a single headline RL+ FST run consumes on the order of 25 25 – 40 40 H100-GPU-hours, of which the GEPA cycles are a sizable fraction. GEPA reflection calls to gpt-5.2 are billed separately; at the per-cycle metric-call budget above this is ≲ \lesssim $10 per training run.
Appendix E Design ablations
This appendix collects the four design-choice ablations. All sweeps are run on CodeIO (Qwen3-8B thinking, light-recipe defaults from Appendix 
D
https://arxiv.org/html/2605.12484v1#A4
) and reported at a matched RL step ( 500 500 ) on the held-out CodeIO mean@ 4 4 . The unmodified RL-only baseline at the same step ( 39.65 % \mathbf{39.65%} ) is included in every panel for reference.
 
Figure 9: CodeIO design ablations (val mean@ 4 4 at training step 500 500 ). Sage bars mark the headline configuration in each panel; gray bars are the alternatives swept; the dashed line indicates RL-only at the same matched step. ( a) Population size K K . ( b) Advantage baseline at K = 2 K{=}2 : per-prompt (Prompt baseline) vs. per-problem (Problem baseline). ( c) Cycle length T T at K = 8 K{=}8 , Problem baseline. ( d) Light vs. full GEPA recipe.
Population size K K (Fig. 
9
https://arxiv.org/html/2605.12484v1#A5.F9
 a).
We sweep K ∈ { 1 , 2 , 4 , 8 } K\in{1,2,4,8} holding the rest of the recipe at light / Problem baseline / cycle T = 6 T{=}6 . Every K ≥ 1 K\geq 1 improves on RL-only ( 39.65 % 39.65% ), indicating that even a single optimized prompt carries useful task signal into RL. Performance is non-monotonic in K K : K = 1 K{=}1 already buys + 1.5 +1.5 pp ( 41.10 % 41.10% ), K = 2 K{=}2 Problem baseline and K = 4 K{=}4 are roughly tied at ∼ \sim 40.4 % 40.4% , and the gain saturates at K = 8 K{=}8 with 42.84 % \mathbf{42.84%} (cycle 6 6 ) — the headline configuration. Larger K K widens the within-group prompt distribution and gives GRPO advantages a richer signal to compare against, but only when paired with a tight cycle (see panel c). K = 8 K{=}8 with cycle = 12 =12 recovers most but not all of the gain ( 41.13 % 41.13% ).
Advantage baseline at K = 2 K{=}2 (Fig. 
9
https://arxiv.org/html/2605.12484v1#A5.F9
 b).
With a fixed population of K = 2 K{=}2 prompts, the choice of GRPO advantage baseline matters. The 
Prompt baseline
 (per-prompt: rollouts under each ϕ ( k ) \phi^{(k)} are normalized against their own group mean and std) yields 39.30 % 39.30% , slightly 
below
 RL-only. The 
Problem baseline
 (per-problem: all G G rollouts under both prompts share a single group statistic) yields 40.65 % \mathbf{40.65%} , + 1.4 +1.4 pp over the Prompt baseline and + 1.0 +1.0 pp over RL-only. The intuition: the prompt baseline makes prompts compete only with themselves and discards the cross-prompt comparison entirely, while the problem baseline exposes the policy gradient to which prompt a stronger response came from on the same problem. The problem baseline is the default for all main-text experiments.
Cycle length T T at K = 8 K{=}8 (Fig. 
9
https://arxiv.org/html/2605.12484v1#A5.F9
 c).
Holding K = 8 K{=}8 Problem-baseline fixed, we compare T = 6 T{=}6 vs. T = 12 T{=}12 RL steps between successive GEPA optimizations. Cycle T = 6 T{=}6 reaches 42.84 % \mathbf{42.84%} ; doubling the cycle to T = 12 T{=}12 drops mean@ 4 4 by 1.7 1.7 pp to 41.13 % 41.13% , giving up more than half of the advantage over RL-only. This is the expected staleness story: as θ \theta moves between GEPA cycles, the prompts in Φ \Phi become increasingly mistuned to the current policy, and the per-question rollout-group signal degrades. T = 6 T{=}6 is short enough that the population Φ c \Phi_{c} remains close to optimal across the cycle, though it requires twice as many GEPA optimizations as cycle 12.
Light vs. full GEPA recipe (Fig. 
9
https://arxiv.org/html/2605.12484v1#A5.F9
 d).
The “light” recipe uses K = 4 K{=}4 candidates, a smaller per-cycle GEPA budget ( num_eval_examples = 192 =192 , max_metric_calls = 960 =960 ), and a proposer prompt that asks gpt-5.2 for incremental edits to the current best prompt rather than rewrites from scratch. The “full” recipe is the original configuration from Agrawal et al. [ 
2
https://arxiv.org/html/2605.12484v1#bib.bib2
] : K = 1 K{=}1 , doubled metric budget ( max_metric_calls = 1922 =1922 ), and an open-ended proposer that allows full rewrites. Within our setup the full recipe gives essentially no lift over RL-only ( 39.85 % 39.85% vs. 39.65 % 39.65% ); the light recipe at the same K = 1 K{=}1 yields + 1.5 +1.5 pp ( 41.10 % 41.10% ); and scaling light to K = 8 K{=}8 gives a further + 1.7 +1.7 pp ( 42.84 % \mathbf{42.84%} ). Two factors contribute. First, full's K = 1 K{=}1 pinches the population channel that turns out to matter most in panel a. Second, the open-ended rewrite proposer is more prone to drift on a moving policy: incremental edits keep the population's induction biases coherent across cycles, while wholesale rewrites tend to discard structure each round. The combined effect is a recipe that runs on roughly half the GEPA budget and outperforms the original by ∼ \sim 3 3 pp on this task.
Appendix F Rollout reuse: same accuracy at lower wall-time and rollout cost
Figure 10: Rollout reuse on HoVer-hard, training step ≤ \leq 300. Left: mean wall-time per RL step. FST+reuse drops from ∼ \sim 66 s to ∼ \sim 47 s (about 30 % 30% faster); the saving comes almost entirely from the generation phase. Middle: cumulative RL trajectories. The shaded region splits each step's 256 256 trajectories into live-generated (lavender) and from-cache (amber). By step 300 about ∼ \sim 17,000 of the ∼ \sim 77,000 RL trajectories were served from cache. Right: HoVer-hard val accuracy mean@4. FST+reuse tracks FST; the no-prompt RL baseline lags both.
Why reuse is possible.
FST interleaves GEPA prompt optimization with RL updates: every T T RL steps GEPA runs a cycle that scores each candidate prompt ϕ ( k ) \phi^{(k)} on a small evaluation pool drawn from the same training distribution the next RL phase will see. Each evaluation entry is a tuple ( p , ϕ ( k ) , y , r ) (p,\phi^{(k)},y,r) – a problem p p , the prompt ϕ ( k ) \phi^{(k)} used, the sampled response y y , and its scalar reward r r . Without reuse, those tuples are thrown away once GEPA picks a new population Φ c + 1 \Phi_{c+1} ; the next RL step then re-rolls G G fresh trajectories per problem from scratch under the new prompts. But because the population Φ c + 1 \Phi_{c+1} is a Pareto-frontier subset of the prompts GEPA 
already evaluated
, many of those discarded tuples are perfectly valid samples from the current policy under one of the current prompts. The natural optimization is to splice them into the RL group instead of regenerating them.
Cache mechanics.
We maintain a per-(problem, prompt) cache of GEPA evaluation tuples produced during the most recent cycle. When the RL phase forms its rollout group of size batch × G \text{batch}\times G across the prompts in Φ c + 1 \Phi_{c+1} , it first claims any cached ( p , ϕ , y , r ) (p,\phi,y,r) matching a (problem, prompt) slot and only generates the remaining slots live with vLLM. Cached and live trajectories are then concatenated into a single GRPO group; the policy gradient does not distinguish the two sources because both were sampled under prompts in the active population. The cache is cleared when GEPA produces the next Φ c + 2 \Phi_{c+2} , so reused trajectories are at most T T RL steps old ( T = 6 T{=}6 in our headline configuration).
Empirical effect.
Figure 
10
https://arxiv.org/html/2605.12484v1#A6.F10
 measures the impact on HoVer-hard. We compare two otherwise identical FST runs – one with reuse enabled and one without – through the first 300 300 training steps, with a no-prompt RL baseline as a third reference. Wall-time per RL step (left panel) drops from ∼ \sim 66 s to ∼ \sim 47 s, a ∼ \sim 29 % 29% speedup that comes almost entirely out of the generation phase: GEPA's own per-cycle cost is unchanged, but a substantial fraction of the following RL phase's rollouts no longer need to be sampled. The middle panel decomposes the cumulative trajectory budget into the live and from-cache components: by step 300 300 , roughly 17 17 k of the 77 77 k total trajectories ( ∼ \sim 22 % 22% ) were served from cache, with the cache hit rate concentrated in the first few RL steps after each GEPA cycle and tapering as the live group fills in problems not in GEPA's evaluation pool. The right panel shows that this comes at no accuracy cost: the reuse and non-reuse FST curves are within sampling noise of each other on HoVer-hard val mean@ 4 4 , and both lead the no-prompt RL baseline throughout.
Appendix G KL-vs-reward, full four-task results
Figure 11: Validation reward versus KL  ( π train ∥ π base ) \mathrm{KL}(\pi_{\mathrm{train}},|,\pi_{\mathrm{base}}) on all four training tasks: CodeIO, Math (Polaris), HoVer, and Physics. Same axes, smoothing, and conventions as Figure 
4
https://arxiv.org/html/2605.12484v1#S4.F4
 in the main text. The three-task variant in the main text drops the Polaris panel for the reasons discussed below.
The Polaris (math) trajectories in Figure 
11
https://arxiv.org/html/2605.12484v1#A7.F11
 look qualitatively different from the other three tasks: RL and FST sit on top of each other in ( KL , reward ) (\mathrm{KL},\text{reward}) -space rather than FST pulling the frontier to the left. We attribute this to the base model used for the Polaris runs. Unlike the other three tasks, which start from Qwen3-8B (an instruction-tuned model with strong format following), Polaris was trained on top of a model built by SFT'ing Qwen3-8B-Base on Nemotron, since the public Qwen3-8B is already saturated on Polaris. That custom SFT base has noticeably weaker instruction-following than the public Instruct checkpoint: the GEPA-evolved prompts that drive FST's KL gain on the other three tasks rely on the policy actually following format and self-checking instructions in the prompt, and on this base much of that signal is lost. The model still learns the math task from RL reward, so the reward axis behaves normally; it simply does not benefit from the prompt channel as strongly, and the two trajectories collapse onto each other. We expect the Polaris curve to look more like the other three with a stronger instruction-tuned base, but isolating that requires retraining and is left for future work.
Appendix H Evolved GEPA prompts during FST training
This appendix shows, for each FST training task, the 
seed
 prompt that GEPA started from and the 
evolved
 prompt at the matched-step FST checkpoint used in § 
4
https://arxiv.org/html/2605.12484v1#S4.SS0.SSS0.Px1
. The evolved prompt is the population's lead candidate ( gepa_state.json:current_prompts[0]) of each Problem-baseline K = { 4 , 8 } K{=}{4,8} training run at that step, so it is a prompt that was 
co-evolved with the slow-weight RL update
, not a prompt obtained by running GEPA on the un-trained base policy in isolation. FST's rollout group at that step also draws from the rest of the K K -prompt population, not just the single one shown here.
Across tasks, two patterns are consistent. First, GEPA almost never 
rewrites
 the seed — the K = { 4 , 8 } K{=}{4,8} Problem-baseline recipe constrains the proposer ( gpt-5.2) to small targeted edits, so the evolved prompt keeps the seed's basic role and output format and adds layered guidance on top. Second, the additions are almost entirely 
negative-example specific
: each block addresses a failure mode the proposer observed during reflection on a small batch of low-reward rollouts (e.g., “do not invent placeholder numbers” for CodeIO, “do not skip pages with parenthetical disambiguators” for HoVer-hard, “re-check off-by-one in process/recurrence problems” for Polaris). The result is a long instruction list that reads less like a generic system prompt and more like a checklist of don'ts assembled from the specific population of mistakes the policy was making.
H.1 CodeIO
Seed Prompt – CodeIO
⬇
data:text/plain;base64,WW91IGFyZSBhbiBleHBlcnQgYXQgcHJlZGljdGluZyB0aGUgb3V0cHV0IG9mIFB5dGhvbiBmdW5jdGlvbnMuIEdpdmVuIGEgZnVuY3Rpb24gZGVmaW5pdGlvbiBhbmQgaXRzIGlucHV0IHZhbHVlcywgdHJhY2UgdGhlIGV4ZWN1dGlvbiBjYXJlZnVsbHkgc3RlcCBieSBzdGVwLiBBY2NvdW50IGZvciBjb250cm9sIGZsb3csIG11dGFibGUgc3RhdGUsIGFuZCB0aGUgZXhhY3QgcmV0dXJuIHZhbHVlIGF0IHRoZSBlbmQuIE91dHB1dCB0aGUgZmluYWwgYW5zd2VyIGFzIGEgSlNPTiB2YWx1ZSBtYXRjaGluZyB0aGUgZnVuY3Rpb24ncyByZXR1cm4gdHlwZS4=
You are an expert at predicting the output of Python functions. Given a function definition and its input values, trace the execution carefully step by step. Account for control flow, mutable state, and the exact return value at the end. Output the final answer as a JSON value matching the function' s return type.
Evolved Prompt – CodeIO ( K = 8 K{=}8 Problem-baseline, training step 650)
⬇
data:text/plain;base64,WW91IGFyZSBhIGNvZGUgb3V0cHV0IHByZWRpY3Rpb24gYXNzaXN0YW50LiBHaXZlbiBhIFB5dGhvbiBmdW5jdGlvbiBhbmQgaXRzIGlucHV0cywgc2ltdWxhdGUgZXhlY3V0aW9uIHN0ZXAtYnktc3RlcCAodHJhY2sgc3RhdGUgY2hhbmdlcywgbG9vcHMsIGNvbmRpdGlvbmFscywgcmVjdXJzaW9uLCBtdXRhdGlvbi9hbGlhc2luZywgYW5kIGV4YWN0IG51bWVyaWMgYmVoYXZpb3IpIGFuZCByZXR1cm4gdGhlIGV4YWN0IHJlc3VsdC4gTmV2ZXIgZXN0aW1hdGUsIOKAnGludHVpdOKAnSwgb3IgcGxhY2Vob2xkZXIgYW55IHJlc3VsdC4gSWYgdGhlIGNvbXB1dGF0aW9uIGlzIGxvbmcsIHN0aWxsIGNhcnJ5IGl0IHRocm91Z2ggZXhhY3RseTsgZG8gbm90IGJhaWwgb3V0IHdpdGggZmFicmljYXRlZCBudW1iZXJzIG9yIOKAnGNhbm5vdCBjb21wdXRl4oCdLgpJZiB5b3UgY2Fubm90IGNvbXB1dGUgYW4gZXhhY3QgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gY29kZSBhbmQgaW5wdXRzLCBrZWVwIHRyYWNpbmcgYW5kIGNhbGN1bGF0aW5nIHVudGlsIHlvdSBjYW47IE5FVkVSIGluc2VydCBtYWRlLXVwIG51bWJlcnMuIFdyb25nLWJ1dC1wbGF1c2libGUgcGxhY2Vob2xkZXJzIGFyZSB3b3JzZSB0aGFuIGNvbnRpbnVpbmcgdGhlIGRlcml2YXRpb24uCgpCZWZvcmUgYW5zd2VyaW5nLCBleHBsaWNpdGx5IGRldGVybWluZSB0aGUgZnVuY3Rpb27igJlzIGFjdHVhbCByZXR1cm4gdmFsdWUgYW5kIGl0cyBKU09OIHNlcmlhbGl6YXRpb24gZm9ybSBmcm9tIHRoZSBjb2Rl4oCZcyByZXR1cm4gc3RhdGVtZW50IChub3QgZnJvbSBhbnkgbmF0dXJhbC1sYW5ndWFnZSDigJxvdXRwdXQgcmVxdWlyZW1lbnTigJ0pOiBvdXRwdXQgYSBiYXJlIEpTT04gbnVtYmVyL3N0cmluZy9ib29sL251bGwvbGlzdCB3aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRoYXQ7IG91dHB1dCBhIEpTT04gb2JqZWN0IG9ubHkgd2hlbiB0aGUgZnVuY3Rpb24gYWN0dWFsbHkgcmV0dXJucyBhIGRpY3QuIERvIG5vdCB3cmFwIHNjYWxhcnMvc3RyaW5ncyBpbnNpZGUgeyJyZXR1cm4iOiAuLi59IHVubGVzcyB0aGUgY29kZSByZXR1cm5zIHRoYXQgZGljdCwgYW5kIGRvIG5vdCBwdXQgdGhlIGZpbmFsIEpTT04gaW4gYSBjb2RlIGJsb2NrLgoKV2hlbiBhcml0aG1ldGljIGlzIGludm9sdmVkLCBjb21wdXRlIGl0IGV4cGxpY2l0bHkgZnJvbSB0aGUgY29kZSB1c2luZyBmdWxsLXByZWNpc2lvbiBpbnRlcm1lZGlhdGUgdmFsdWVzIChrZWVwIGVub3VnaCBkaWdpdHMgdG8gbWF0Y2ggUHl0aG9uIGZsb2F0IHJlc3VsdHMpOyBmb3IgaXRlcmF0aXZlIG51bWVyaWMgdXBkYXRlcywga2VlcCBhIHJ1bm5pbmcgdHJhY2UgYW5kIGRvIG5vdCBzd2l0Y2ggdG8gcXVhbGl0YXRpdmUvc3RlYWR5LXN0YXRlIGd1ZXNzZXMuIERvIG5vdCByb3VuZCBpbnRlcm1lZGlhdGUgcmVzdWx0czsgY2FycnkgZnVsbCBmbG9hdCBwcmVjaXNpb24gdGhyb3VnaCB0byB0aGUgZW5kLCBhbmQgb25seSB0aGVuIHJlbmRlciB0aGUgZmluYWwgSlNPTiBudW1iZXIvc3RyaW5nIGV4YWN0bHkgYXMgUHl0aG9uIHdvdWxkLiBJZiB0aGUgY29kZSBjYWxscyByb3VuZCgpL25wLnJvdW5kKCkgYXQgc3BlY2lmaWMgc3RlcHMsIGFwcGx5IHRob3NlIGV4YWN0bHkgKGluY2x1ZGluZyB0aGUgbnVtYmVyIG9mIGRlY2ltYWxzIGFuZCB3aGVuIHRoZXkgb2NjdXIpLgpGb3IgbGFyZ2UtaW50ZWdlci9tYXRoL0RlY2ltYWwtaGVhdnkgY29kZSwgZm9sbG93IHRoZSBhbGdvcml0aG0gYXMgd3JpdHRlbiAob2Z0ZW4gYSByZWN1cnJlbmNlL2Nsb3NlZCBmb3JtKSBhbmQgY2FycnkgZXhhY3QgaW50ZWdlci9EZWNpbWFsIHZhbHVlcyB0aHJvdWdoIGZsb29ycy9yb3VuZGluZyBzdGVwczsgZG8gbm90IHJlcGxhY2UgaXQgd2l0aCBhIHJvdWdoIGd1ZXNzIG9yIGFuIHVucmVsYXRlZCBmb3JtdWxhLgoKQ29tcHV0ZSB1c2luZyBQeXRob27igJlzIHJlYWwgc2VtYW50aWNzOiBwcmVzZXJ2ZSBmbG9hdDY0IHJvdW5kaW5nIGFzIHByb2R1Y2VkIGJ5IFB5dGhvbi9tYXRoL251bXB5OyBjYXJyeSBmdWxsIHByZWNpc2lvbiB0aHJvdWdoIGludGVybWVkaWF0ZSBzdGVwcyBhbmQgZG8gbm90IOKAnHByZXR0eSByb3VuZOKAnSBpbiB0aGUgZmluYWwgb3V0cHV0LiBEbyBub3QgcmVwbGFjZSBjb2RlIHdpdGggYWxnZWJyYWljIOKAnHNpbXBsaWZpY2F0aW9uc+KAnSB1bmxlc3MgeW91IGNhbiBwcm92ZSB0aGV5IGFyZSBpZGVudGljYWwgdW5kZXIgZmxvYXQ2NCByb3VuZGluZyBhbmQgZG9tYWluIGJlaGF2aW9yOyB3aGVuIGluIGRvdWJ0LCBmb2xsb3cgdGhlIGV4YWN0IG9wZXJhdGlvbnMvZnVuY3Rpb25zIHVzZWQgaW4gdGhlIHNhbWUgb3JkZXIuIEZvciB0cmlnL2V4cC9sb2csIHVzZSBpZGVudGl0aWVzIG9ubHkgd2hlbiBleGFjdDsgb3RoZXJ3aXNlIGV2YWx1YXRlIGFzIHRoZSBydW50aW1lIHdvdWxkIChhcmd1bWVudCByZWR1Y3Rpb24sIHRoZW4gY29tcHV0ZSksIGFuZCBkbyBub3Qgc3Vic3RpdHV0ZSByb3VnaCBhbmdsZSBhcHByb3hpbWF0aW9ucy4KCldoZW4gbnVtcHkgaXMgdXNlZCwgcmVzcGVjdCBhcnJheSBzaGFwZSBydWxlcyBhbmQgYnJvYWRjYXN0aW5nOiBucC5hc2FycmF5L2xpc3QtPm5kYXJyYXkgZXZlbiBpZiBsZW5ndGg9PTE7IGRvdC9tYXRtdWwgYXhlcywgdHJhbnNwb3Nlcywgc2xpY2luZyB2aWV3cyB2cyBjb3BpZXM7IGZ1bmN0aW9ucyBtYXkgcmV0dXJuIGFycmF5cyB2cyBzY2FsYXJzIGRlcGVuZGluZyBvbiBuZGltLCBhbmQgLnRvbGlzdCgpIGNvbnZlcnRzIGFycmF5cyB0byBQeXRob24gbGlzdHPigJRtaXJyb3IgdGhhdCBleGFjdGx5LgoKRm9yIGxvb3BzIHdpdGggdGhyZXNob2xkIGNvbmRpdGlvbnMgKD4sIDwsID49LCA8PSksIHVwZGF0ZSB2YXJpYWJsZXMgaW4gdGhlIGV4YWN0IG9yZGVyIGFuZCBjaGVjayB0aGUgY29uZGl0aW9uIGV4YWN0bHkgYXMgUHl0aG9uIHdvdWxkIGFmdGVyIGVhY2ggaXRlcmF0aW9uOyBkbyBub3QgYXNzdW1lIGNvbnN0cmFpbnRzIGxpa2Ugbm9uLW5lZ2F0aXZpdHkgdW5sZXNzIGVuZm9yY2VkIGJ5IGNvZGXigJR2YWx1ZXMgbWF5IGxlZ2l0aW1hdGVseSBiZWNvbWUgbmVnYXRpdmUgYW5kIGxvb3BzIG1heSBydW4gcGFzdCDigJxwaHlzaWNhbOKAnSBib3VuZHMuCgpJZiByYW5kb21uZXNzIGlzIHVzZWQgYW5kIG5vIHNlZWQvc3RhdGUgaXMgcHJvdmlkZWQsIHlvdSBzdGlsbCBtdXN0IGV4ZWN1dGUgdGhlIHNwZWNpZmljIGRyYXdzIGltcGxpZWQgYnkgdGhlIGNhbGwgKGRvIG5vdCBzdWJzdGl0dXRlIHRoZW9yZXRpY2FsIGV4cGVjdGF0aW9ucy9jbG9zZWQtZm9ybSBhdmVyYWdlcykuIFRyZWF0IHJhbmRvbSBjYWxscyBhcyBwcm9kdWNpbmcgY29uY3JldGUgKGJ1dCB1bmtub3duKSB2YWx1ZXMgb25seSBpZiB0aGV5IGFyZSBhY3R1YWxseSBkZXJpdmFibGUgZnJvbSBnaXZlbiBzdGF0ZTsgb3RoZXJ3aXNlIGNvbnRpbnVlIHRyYWNpbmcgZGV0ZXJtaW5pc3RpY2FsbHkgd2hlbiBwb3NzaWJsZSBhbmQgbmV2ZXIgcmVwbGFjZSB3aXRoIGV4cGVjdGVkIHZhbHVlcy4KCkJlZm9yZSBmaW5hbGl6aW5nLCB2ZXJpZnkgdGhlIHJldHVybiAqdHlwZS9zaGFwZSogbWF0Y2hlcyB0aGUgY29kZSBwYXRoIHRha2VuIChlLmcuLCBsaXN0IHZzIHNjYWxhciwgTm9uZSB2cyB2YWx1ZSwgZGljdCBrZXlzIHByZXNlbnQvYWJzZW50KS4gUmV0dXJuIGV4YWN0bHkgd2hhdCB0aGUgZnVuY3Rpb24gcmV0dXJucy4gRG8gbm90IOKAnGNvcnJlY3TigJ0gcGVyY2VpdmVkIGJ1Z3Mvb2RkIGlucHV0c+KAlGV4ZWN1dGUgdGhlIGNvZGUgYXMgd3JpdHRlbiwgZXZlbiBpZiB0aGUgYWxnb3JpdGhtIHNlZW1zIHdyb25nLiBQYXkgc3BlY2lhbCBhdHRlbnRpb24gdG8gaW4tcGxhY2UgbXV0YXRpb24gYW5kIGFsaWFzaW5nLCBhbmQgdG8gaW5kZXgtdXBkYXRlcyBvcmRlciAoZS5nLiwgcG9pbnRlciBpbmNyZW1lbnRzL2RlY3JlbWVudHMgYXJvdW5kIHN3YXBzKTsgcmUtY2hlY2sgbG9vcCBpbnZhcmlhbnRzIGFnYWluc3QgdGhlIGFjdHVhbCBjb2RlIChhdm9pZCBhc3N1bWluZyBhIHN0YW5kYXJkIGFsZ29yaXRobSB2YXJpYW50KS4KClBheSBzcGVjaWFsIGF0dGVudGlvbiB0byBvdXRwdXQgdHlwZS9zZXJpYWxpemF0aW9uOiBvdXRwdXQgZXhhY3RseSB0aGUgZnVuY3Rpb27igJlzIHJldHVybiB2YWx1ZSBhcyBhIHNpbmdsZSBKU09OIHZhbHVlIChubyBzdXJyb3VuZGluZyBwcm9zZSkuIFVzZSBudWxsIGZvciBQeXRob24gTm9uZTsgZW5zdXJlIG51bWJlcnMgc3RheSBudW1iZXJzLCBzdHJpbmdzIHN0YXkgc3RyaW5nczsgbm8gZXh0cmEgd3JhcHBlciBrZXlzIHVubGVzcyByZXR1cm5lZC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYSBKU09OIHN0cmluZyAoZS5nLiwgdmlhIGpzb24uZHVtcHMpLCB5b3VyIGZpbmFsIG91dHB1dCBtdXN0IGJlIGEgSlNPTiBzdHJpbmcgdmFsdWUgKGluY2x1ZGluZyBlc2NhcGUgY2hhcmFjdGVycyksIG5vdCB0aGUgdW5kZXJseWluZyBkaWN0L2xpc3QuIEZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYmFja3NsYXNoZXMgb3IgbmV3bGluZXMsIGVzY2FwZSB0aGVtIGNvcnJlY3RseSBmb3IgSlNPTi4KCldoZW4gb3JkZXIgbWF0dGVycywgcHJlc2VydmUgdGhlIGV4YWN0IG9yZGVyIHByb2R1Y2VkIGJ5IHRoZSBjb2RlIChhcHBlbmQgb3JkZXIgaW4gcmVjdXJzaW9uLCBzb3J0aW5nIGRpcmVjdGlvbiwgaW5zZXJ0aW9uIG9yZGVyKTsgZG8gbm90IHJlb3JkZXIgdW5sZXNzIHRoZSBjb2RlIGFjdHVhbGx5IHJlb3JkZXJzLgoKSWYgcmFuZG9tbmVzcyBpcyB1c2VkLCBhc3N1bWUgdGhlIGZ1bmN0aW9u4oCZcyBQUk5HIGJlaGF2aW9yIGlzIGRldGVybWluaXN0aWMgZm9yIHRoZSBjYWxsIGFzIHdyaXR0ZW47IHByb3BhZ2F0ZSB0aGUgc3BlY2lmaWMgZ2VuZXJhdGVkIHZhbHVlcyB0aHJvdWdoIHRoZSB0cmFjZSByYXRoZXIgdGhhbiBpbnZlbnRpbmcgcGxhY2Vob2xkZXJzLgoKT3V0cHV0IE9OTFkgdGhlIGZpbmFsIHZhbHVlIGFzIHZhbGlkIEpTT04gbWF0Y2hpbmcgdGhlIGZ1bmN0aW9u4oCZcyByZXR1cm4gdHlwZSBleGFjdGx5LiBEbyBub3QgZ3Vlc3M7IGNvbXB1dGUgcHJlY2lzZWx5LCBhbmQgYWx3YXlzIHByb3ZpZGUgdGhlIGZpbmFsIEpTT04gdmFsdWUu
You are a code output prediction assistant. Given a Python function and its inputs, simulate execution step- by- step ( track state changes, loops, conditionals, recursion, mutation/ aliasing, and exact numeric behavior) and return the exact result. Never estimate, â€œ intuit â€ , or placeholder any result. If the computation is long, still carry it through exactly; do not bail out with fabricated numbers or â€œ cannot compute â€ .
If you cannot compute an exact value from the given code and inputs, keep tracing and calculating until you can; NEVER insert made- up numbers. Wrong- but- plausible placeholders are worse than continuing the derivation.
Before answering, explicitly determine the function â€™ s actual return value and its JSON serialization form from the code â€™ s return statement ( not from any natural- language â€œ output requirement â€ ): output a bare JSON number/ string/ bool/ null/ list when the function returns that; output a JSON object only when the function actually returns a dict. Do not wrap scalars/ strings inside {" return": ...} unless the code returns that dict, and do not put the final JSON in a code block.
When arithmetic is involved, compute it explicitly from the code using full- precision intermediate values ( keep enough digits to match Python float results); for iterative numeric updates, keep a running trace and do not switch to qualitative/ steady- state guesses. Do not round intermediate results; carry full float precision through to the end, and only then render the final JSON number/ string exactly as Python would. If the code calls round()/ np. round() at specific steps, apply those exactly ( including the number of decimals and when they occur).
For large- integer/ math/ Decimal- heavy code, follow the algorithm as written ( often a recurrence/ closed form) and carry exact integer/ Decimal values through floors/ rounding steps; do not replace it with a rough guess or an unrelated formula.
Compute using Python â€™ s real semantics: preserve float64 rounding as produced by Python/ math/ numpy; carry full precision through intermediate steps and do not â€œ pretty round â€ in the final output. Do not replace code with algebraic â€œ simplifications â€ unless you can prove they are identical under float64 rounding and domain behavior; when in doubt, follow the exact operations/ functions used in the same order. For trig/ exp/ log, use identities only when exact; otherwise evaluate as the runtime would ( argument reduction, then compute), and do not substitute rough angle approximations.
When numpy is used, respect array shape rules and broadcasting: np. asarray/ list-> ndarray even if length==1; dot/ matmul axes, transposes, slicing views vs copies; functions may return arrays vs scalars depending on ndim, and . tolist() converts arrays to Python lists â€” mirror that exactly.
For loops with threshold conditions (>, <, >=, <=), update variables in the exact order and check the condition exactly as Python would after each iteration; do not assume constraints like non- negativity unless enforced by code â€” values may legitimately become negative and loops may run past â€œ physical â€ bounds.
If randomness is used and no seed/ state is provided, you still must execute the specific draws implied by the call ( do not substitute theoretical expectations/ closed- form averages). Treat random calls as producing concrete ( but unknown) values only if they are actually derivable from given state; otherwise continue tracing deterministically when possible and never replace with expected values.
Before finalizing, verify the return * type/ shape* matches the code path taken ( e. g., list vs scalar, None vs value, dict keys present/ absent). Return exactly what the function returns. Do not â€œ correct â€ perceived bugs/ odd inputs â€” execute the code as written, even if the algorithm seems wrong. Pay special attention to in- place mutation and aliasing, and to index- updates order ( e. g., pointer increments/ decrements around swaps); re- check loop invariants against the actual code ( avoid assuming a standard algorithm variant).
Pay special attention to output type/ serialization: output exactly the function â€™ s return value as a single JSON value ( no surrounding prose). Use null for Python None; ensure numbers stay numbers, strings stay strings; no extra wrapper keys unless returned. If the function returns a JSON string ( e. g., via json. dumps), your final output must be a JSON string value ( including escape characters), not the underlying dict/ list. For strings containing backslashes or newlines, escape them correctly for JSON.
When order matters, preserve the exact order produced by the code ( append order in recursion, sorting direction, insertion order); do not reorder unless the code actually reorders.
If randomness is used, assume the function â€™ s PRNG behavior is deterministic for the call as written; propagate the specific generated values through the trace rather than inventing placeholders.
Output ONLY the final value as valid JSON matching the function â€™ s return type exactly. Do not guess; compute precisely, and always provide the final JSON value.
H.2 Math (Polaris)
Seed Prompt – Math (Polaris)
⬇
data:text/plain;base64,WW91IGFyZSBhIHByZWNpc2UgbWF0aCBzb2x2ZXIuIFJlYWQgdGhlIHByb2JsZW0gY2FyZWZ1bGx5LCB3b3JrIHRocm91Z2ggdGhlIHNvbHV0aW9uIHN0ZXAgYnkgc3RlcCB3aXRoIGNsZWFyIGFsZ2VicmEgYW5kIGF0dGVudGlvbiB0byBudW1lcmljYWwgcHJlY2lzaW9uLCBhbmQgcHV0IHlvdXIgZmluYWwgYW5zd2VyIGluc2lkZSBcYm94ZWR7fSBvbiB0aGUgbGFzdCBsaW5lLg==
You are a precise math solver. Read the problem carefully, work through the solution step by step with clear algebra and attention to numerical precision, and put your final answer inside \ boxed{} on the last line.
Evolved Prompt – Math (Polaris) ( K = 4 K{=}4 Problem-baseline, training step 1050)
⬇
data:text/plain;base64,WW91IGFyZSBhIHByZWNpc2UgbWF0aCBzb2x2ZXIuIFJlYWQgdGhlIHByb2JsZW0gY2FyZWZ1bGx5LCBpZGVudGlmeSBleGFjdGx5IHdoYXQgaXMgYXNrZWQgKGluY2x1ZGluZyB1bml0cy9hbmdsZSBtZWFzdXJlcywgZGVmaW5pdGlvbnMgc3VjaCBhcyDigJxzYW1wbGUgdmFyaWFuY2XigJ0sIGFuZCBhbnkgaW5jbHVzaW9uL2V4Y2x1c2lvbiBzdWNoIGFzIHdoZXRoZXIgdGhlIGVtcHR5IHNldCBjb3VudHMpLCBhbmQgd29yayB0aHJvdWdoIHRoZSBzb2x1dGlvbiBzdGVwIGJ5IHN0ZXAgd2l0aCBjbGVhciBhbGdlYnJhIGFuZCBhdHRlbnRpb24gdG8gbnVtZXJpY2FsIHByZWNpc2lvbi4gUHJlZmVyIGV4YWN0IG1ldGhvZHMgb3ZlciBsZW5ndGh5IG51bWVyaWNhbCBhcHByb3hpbWF0aW9ucywgYXZvaWQgaW50cm9kdWNpbmcgdW5zdGF0ZWQgYXNzdW1wdGlvbnMsIGFuZCB3aGVuIHVzaW5nIGNvb3JkaW5hdGVzL2Nhc2V3b3JrIGVuc3VyZSB0aGUgc2V0dXAgbWF0Y2hlcyBhbGwgZ2l2ZW4gY29uc3RyYWludHMgYmVmb3JlIGNvbW1pdHRpbmcuIElmIGEgcmVxdWlyZWQgZGlhZ3JhbS9kYXRhIGlzIHJlZmVyZW5jZWQgYnV0IG5vdCBhY3R1YWxseSBwcm92aWRlZCwgZG8gTk9UIGd1ZXNzIG1pc3NpbmcgdmFsdWVz4oCUc3RhdGUgdGhhdCB0aGUgYW5zd2VyIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gdGhlIGdpdmVuIGluZm9ybWF0aW9uLgoKQmVmb3JlIGZpbmFsaXppbmcsIGRvIGEgcXVpY2sg4oCccHJvYmxlbSByZS1wYXJzZeKAnSBhbmQgdmVyaWZ5IGFueSBpbnRlcnByZXRlZCBkZXRhaWxzIChlLmcuLCBwaHJhc2VzIGxpa2Ug4oCcb25lIGJldHdlZW7igJ0gdnMg4oCcYWRqYWNlbnTigJ0sIOKAnGRpcmVjdGx5IGxlZnTigJ0gdnMg4oCcc29tZXdoZXJlIGxlZnTigJ0sIOKAnGludGVybmFsIHZzIGV4dGVybmFsIHRhbmdlbnTigJ0sIOKAnG51bWJlciBvZiBkaXN0aW5jdCBwb2ludHMgdnMgbnVtYmVyIG9mIGV2ZW50c+KAnSwgZW5kcG9pbnRzL2luY2x1c2lvbiwgd2hldGhlciB0aGUgZW1wdHkgc2V0IGlzIGluY2x1ZGVkLCBhbmQgd2hldGhlciBhIHBhcmFtZXRlciBpcyBcKE5cKSB2cyBcKE4rMVwpL1woTisyXCkpLiBGb3IgYW55IHBocmFzZSBsaWtlIOKAnFwoa1wpIGhvdXNlcyBiZXR3ZWVuLOKAnSBleHBsaWNpdGx5IHRyYW5zbGF0ZSBpdCBpbnRvIGFuIGluZGV4IGRpZmZlcmVuY2UgYW5kIHNhbml0eS1jaGVjayBpdCBvbiBhIHNtYWxsIGV4YW1wbGUgdG8gYXZvaWQgb2ZmLWJ5LW9uZSBpbnRlcnByZXRhdGlvbiBlcnJvcnMuIEFsc28gZXhwbGljaXRseSBjaGVjayBmb3Ig4oCcbGFyZ2VzdC9zbWFsbGVzdCBOT1QgcG9zc2libGUgLyBuZXZlciByZWFjaGFibGXigJ0gd29yZGluZyBhbmQgZW5zdXJlIG1vbm90b25pY2l0eSBvciByZWFjaGFiaWxpdHkgYXJndW1lbnRzIGFyZSB2YWxpZCAoZS5nLiwgaWYgdGhlIHByb2Nlc3Mgb25seSBpbmNyZWFzZXMsIHVucmVhY2hhYmxlIHZhbHVlcyBtYXkgc3RpbGwgZXhpc3QgYWJvdmUgdGhlIHN0YXJ0KS4gV2hlbiBhIHByb2JsZW0gZGVzY3JpYmVzIGEgcHJvY2Vzcy9yZWN1cnJlbmNlL2R5bmFtaWNzLCBleHBsaWNpdGx5IHRlc3Qgc21hbGwgY2FzZXMgYW5kIGxvb2sgZm9yIGludmFyaWFudHMvcGFyaXR5L3BlcmlvZGljaXR5OyBkbyBub3QgYXNzdW1lIG1vbm90b25pY2l0eSBvciBjb252ZXJnZW5jZSB3aXRob3V0IHByb29mLiBJbiBnZW9tZXRyeSwgZG8gbm90IGFzc3VtZSB0aGUgZXh0cmVtdW0gb2NjdXJzIGZvciBhIOKAnG5pY2XigJ0gb3JpZW50YXRpb24gKGhvcml6b250YWwvdmVydGljYWwvdGFuZ2VudC9mb2NhbCkgd2l0aG91dCBqdXN0aWZpY2F0aW9u4oCUZWl0aGVyIHByb3ZlIHRoZSBtYXhpbWl6aW5nIGNvbmZpZ3VyYXRpb24gb3Igb3B0aW1pemUgZnJvbSBnZW5lcmFsIHNldHVwIGFuZCB0aGVuIGNoZWNrIGZlYXNpYmlsaXR5LiBJbiBhbGdlYnJhL251bWJlciB0aGVvcnkgY29uZmlybSB0aGUgZG9tYWluIChlLmcuLCB3aGV0aGVyIFwoXG1hdGhiYiBOXCkgaW5jbHVkZXMgMCkgYW5kIHdoZXRoZXIgcmVwZWF0ZWQgcm9vdHMvdmFsdWVzIGFyZSBhbGxvd2VkLiBXaGVuIGEgcHJvYmxlbSB5aWVsZHMgbXVsdGlwbGUgY2FuZGlkYXRlIHNvbHV0aW9ucyAoZS5nLiwgZnJvbSB0cmlnIGVxdWF0aW9ucywgYWJzb2x1dGUgdmFsdWVzLCBzcXVhcmluZyksIGV4cGxpY2l0bHkgZmlsdGVyIHRoZW0gdXNpbmcgYWxsIGdpdmVuIGNvbnN0cmFpbnRzIChkb21haW4sIHBvc2l0aXZpdHksIGFuZ2xlIHJhbmdlcywgdHJpYW5nbGUgaW5lcXVhbGl0eSwg4oCcYWN1dGXigJ0v4oCcb2J0dXNl4oCdLCBldGMuKSBiZWZvcmUgYm94aW5nLiBXaGVuIHN1YnN0aXR1dGluZywgdHJhY2sgZXhwb25lbnRzIGNhcmVmdWxseSAoZGlzdGluZ3Vpc2ggXCgxL3hcKSB2cyBcKDEveF4yXCkpIGFuZCwgZm9yIGNvdW50aW5nL3Byb2JhYmlsaXR5LCB2ZXJpZnkgd2hldGhlciB5b3UgYXJlIGNvdW50aW5nIOKAnGF0IGxlYXN04oCdIHZzIOKAnGV4YWN0bHnigJ0gY29uZGl0aW9ucyBhbmQgd2hldGhlciBvdXRjb21lcyBhcmUgb3JkZXJlZCB2cyB1bm9yZGVyZWQgKGF2b2lkIGRvdWJsZS1jb3VudGluZyBjb21wbGVtZW50cy9zeW1tZXRyaWVzKS4gRm9yIGludGVncmFscywgYXZvaWQgaW50cm9kdWNpbmcgc3BlY2lhbCBmdW5jdGlvbnMgdW5sZXNzIHRoZSBwcm9ibGVtIGV4cGxpY2l0bHkgYWxsb3dzIHRoZW07IGZpcnN0IGF0dGVtcHQgc3ltbWV0cnkvc3Vic3RpdHV0aW9uL3Nlcmllcy9vcnRob2dvbmFsaXR5IGFuZCBjaGVjayBhZ2FpbnN0IHNpbXBsZSBib3VuZHMvc2FuaXR5IHZhbHVlcy4KCkFmdGVyIGRlcml2aW5nIGEgcGFyYW1ldGVyaXphdGlvbi9leGlzdGVuY2UgY29uZGl0aW9uIChlLmcuLCDigJx0aGVyZSBleGlzdHMgXChCXCkgc3VjaCB0aGF0IOKApuKAnSksIGV4cGxpY2l0bHkgY29tcHV0ZSB0aGUgaW1hZ2UvcmFuZ2Ugb24gZWFjaCBjb250aW51aXR5IGludGVydmFsIGFuZCBjaGVjayBlbmRwb2ludHMvaG9sZXMvYXN5bXB0b3RlczsgZG8gbm90IG1lcmdlIGludGVydmFscyB1bmxlc3MgeW91IHByb3ZlIGNvdmVyYWdlIChpLmUuLCB3YXRjaCBmb3IgZ2FwcyBsaWtlIFwoKGEsYilcKSB0aGF0IGFyZSBub3QgYXR0YWluZWQpLiBJbiBwcm9iYWJpbGl0eS9zdGF0aXN0aWNzLCB1c2UgdGhlIG1ldGhvZCBpbXBsaWNpdGx5IGludGVuZGVkIGJ5IHR5cGljYWwgdGV4dGJvb2sgcGhyYXNpbmc6IGRlZmF1bHQgdG8gbm9ybWFsL0NMVCAod2l0aCB0aGUgY29ycmVjdCB0d28tc2lkZWQgcXVhbnRpbGUpIHdoZW4gYXNraW5nIGZvciBhIHNhbXBsZSBzaXplIHRvIGFjaGlldmUgYSBnaXZlbiBwcm9iYWJpbGl0eSBhbmQgdG9sZXJhbmNlOyBvbmx5IHVzZSBDaGVieXNoZXYvQ2hlcm5vZmYvSG9lZmZkaW5nIGlmIGV4cGxpY2l0bHkgcmVxdWVzdGVkLCBhbmQgbGFiZWwgd2hpY2ggYXBwcm94aW1hdGlvbiB5b3UgYXJlIHVzaW5nLgoKSWYgeW91IHVzZSBhIHN0YW5kYXJkIGlkZW50aXR5L3RoZW9yZW0gKHJvb3RzIG9mIHVuaXR5IHN1bXMsIExURSwgY2VudHJvaWQvbWVkaWFuIGZhY3RzLCBleHRyZW1hbCBncmFwaCBib3VuZHMsIGV0Yy4pLCBleHBsaWNpdGx5IHZlcmlmeSBpdHMgaHlwb3RoZXNlcyBBTkQgYW55IHNpZ24vcGhhc2UgY29uc3RhbnRzIChlc3BlY2lhbGx5IHdpdGggcGVyaW9kaWMgdHJpZyBzaGlmdHMpOyBkbyBhIHF1aWNrIHNhbml0eS1jaGVjayBvbiBhIHNtYWxsIGluc3RhbmNlIHRvIGNvbmZpcm0gdGhlIGRlcml2ZWQgY29uc3RhbnQvc2lnbiBpcyBjb3JyZWN0IGJlZm9yZSBzY2FsaW5nIHVwLgoKV2hlbiBzaW1wbGlmeWluZyB0byBhIGZpbmFsIG51bWVyaWMgdmFsdWUsIG1hdGNoIHRoZSBmb3JtYXQgaW1wbGljaXRseSBleHBlY3RlZCBieSB0aGUgcHJvbXB0IChlLmcuLCBwZXJjZW50IHZzIGRlY2ltYWwsIGV4YWN0IGZyYWN0aW9uIHZzIHRlcm1pbmF0aW5nIGRlY2ltYWwsIG11bHRpcGxlLWNob2ljZSBsYWJlbGluZyBzdWNoIGFzIFwoXHRleHRiZnsoQil9XCAzNFwpIHdoZW4gcHJlc2VudCk6IGlmIGFuIGFuc3dlciBpcyBhIHRlcm1pbmF0aW5nIGRlY2ltYWwsIHlvdSBtYXkgcHJlc2VudCBpdCBhcyBhIGRlY2ltYWw7IGlmIGl0IGlzIGEgcGVyY2VudCwgaW5jbHVkZSB0aGUgJSBzeW1ib2wuIEVuc3VyZSB0aGUgZmluYWwgYm94ZWQgZXhwcmVzc2lvbiBpcyBleGFjdGx5IHRoZSBjb21wdXRlZCB2YWx1ZSAobm8gZXh0cmEgYXBwcm94aW1hdGlvbnMsIGV4cGxhbmF0aW9ucywgb3IgYWRkaXRpb25hbCB0ZXh0L3VuaXRzIHVubGVzcyBleHBsaWNpdGx5IHJlcXVlc3RlZCkgYW5kIG1hdGNoZXMgdGhlIHJlcXVpcmVkIGZvcm1hdC4gT3V0cHV0IG9ubHkgdGhlIGZpbmFsIGFuc3dlciBpbnNpZGUgXGJveGVke30gb24gdGhlIGxhc3QgbGluZTsgZG8gbm90IGluY2x1ZGUgYW55IGV4dHJhIHRleHQu
You are a precise math solver. Read the problem carefully, identify exactly what is asked ( including units/ angle measures, definitions such as â€œ sample variance â€ , and any inclusion/ exclusion such as whether the empty set counts), and work through the solution step by step with clear algebra and attention to numerical precision. Prefer exact methods over lengthy numerical approximations, avoid introducing unstated assumptions, and when using coordinates/ casework ensure the setup matches all given constraints before committing. If a required diagram/ data is referenced but not actually provided, do NOT guess missing values â€” state that the answer cannot be determined from the given information.
Before finalizing, do a quick â€œ problem re- parse â€ and verify any interpreted details ( e. g., phrases like â€œ one between â€ vs â€œ adjacent â€ , â€œ directly left â€ vs â€œ somewhere left â€ , â€œ internal vs external tangent â€ , â€œ number of distinct points vs number of events â€ , endpoints/ inclusion, whether the empty set is included, and whether a parameter is ( N) vs ( N+1)/( N+2)). For any phrase like â€œ( k) houses between,â€ explicitly translate it into an index difference and sanity- check it on a small example to avoid off- by- one interpretation errors. Also explicitly check for â€œ largest/ smallest NOT possible / never reachable â€ wording and ensure monotonicity or reachability arguments are valid ( e. g., if the process only increases, unreachable values may still exist above the start). When a problem describes a process/ recurrence/ dynamics, explicitly test small cases and look for invariants/ parity/ periodicity; do not assume monotonicity or convergence without proof. In geometry, do not assume the extremum occurs for a â€œ nice â€ orientation ( horizontal/ vertical/ tangent/ focal) without justification â€” either prove the maximizing configuration or optimize from general setup and then check feasibility. In algebra/ number theory confirm the domain ( e. g., whether (\ mathbb N) includes 0) and whether repeated roots/ values are allowed. When a problem yields multiple candidate solutions ( e. g., from trig equations, absolute values, squaring), explicitly filter them using all given constraints ( domain, positivity, angle ranges, triangle inequality, â€œ acute â€ /â€œ obtuse â€ , etc.) before boxing. When substituting, track exponents carefully ( distinguish (1/ x) vs (1/ x^2)) and, for counting/ probability, verify whether you are counting â€œ at least â€ vs â€œ exactly â€ conditions and whether outcomes are ordered vs unordered ( avoid double- counting complements/ symmetries). For integrals, avoid introducing special functions unless the problem explicitly allows them; first attempt symmetry/ substitution/ series/ orthogonality and check against simple bounds/ sanity values.
After deriving a parameterization/ existence condition ( e. g., â€œ there exists ( B) such that â€¦â€ ), explicitly compute the image/ range on each continuity interval and check endpoints/ holes/ asymptotes; do not merge intervals unless you prove coverage ( i. e., watch for gaps like (( a, b)) that are not attained). In probability/ statistics, use the method implicitly intended by typical textbook phrasing: default to normal/ CLT ( with the correct two- sided quantile) when asking for a sample size to achieve a given probability and tolerance; only use Chebyshev/ Chernoff/ Hoeffding if explicitly requested, and label which approximation you are using.
If you use a standard identity/ theorem ( roots of unity sums, LTE, centroid/ median facts, extremal graph bounds, etc.), explicitly verify its hypotheses AND any sign/ phase constants ( especially with periodic trig shifts); do a quick sanity- check on a small instance to confirm the derived constant/ sign is correct before scaling up.
When simplifying to a final numeric value, match the format implicitly expected by the prompt ( e. g., percent vs decimal, exact fraction vs terminating decimal, multiple- choice labeling such as (\ textbf{( B)}\ 34) when present): if an answer is a terminating decimal, you may present it as a decimal; if it is a percent, include the % symbol. Ensure the final boxed expression is exactly the computed value ( no extra approximations, explanations, or additional text/ units unless explicitly requested) and matches the required format. Output only the final answer inside \ boxed{} on the last line; do not include any extra text.
H.3 Physics
Seed Prompt – Physics
⬇
data:text/plain;base64,WW91IGFyZSBhIHBoeXNpY3MgZXhwZXJ0LiBSZWFkIHRoZSBwcm9ibGVtIGFuZCBmb3VyIG9wdGlvbnMgY2FyZWZ1bGx5LCBpZGVudGlmeSB0aGUgcmVsZXZhbnQgcGh5c2ljYWwgcHJpbmNpcGxlcyBhbmQgZXF1YXRpb25zLCB3b3JrIHRocm91Z2ggdGhlIHJlYXNvbmluZywgdGhlbiBzZWxlY3QgdGhlIGNvcnJlY3QgYW5zd2VyLiBPdXRwdXQgb25seSB0aGUgbGV0dGVyIEEsIEIsIEMsIG9yIEQgaW5zaWRlIHRoZSBhbnN3ZXIgdGFncy4=
You are a physics expert. Read the problem and four options carefully, identify the relevant physical principles and equations, work through the reasoning, then select the correct answer. Output only the letter A, B, C, or D inside the answer tags.
Evolved Prompt – Physics ( K = 4 K{=}4 Problem-baseline, training step 500)
⬇
data:text/plain;base64,Ly8vIFNZU1RFTSBQUk9NUFQgKGRyb3AtaW4gcmVwbGFjZW1lbnQpCgpZb3UgYXJlIGEgcGh5c2ljcyBleHBlcnQuIFJlYWQgdGhlIHByb2JsZW0gYW5kIGZvdXIgb3B0aW9ucyBjYXJlZnVsbHksIGlkZW50aWZ5IHRoZSByZWxldmFudCBwaHlzaWNhbCBwcmluY2lwbGVzIGFuZCBlcXVhdGlvbnMsIHdvcmsgdGhyb3VnaCB0aGUgcmVhc29uaW5nLCB0aGVuIHNlbGVjdCB0aGUgY29ycmVjdCBhbnN3ZXIuIFVzZSBjbGVhciBzdGVwLWJ5LXN0ZXAgcmVhc29uaW5nIHdpdGggY2FyZWZ1bCBhbGdlYnJhLCB1bml0L3NjYWxlIGNoZWNrcywgYW5kICh3aGVuIGhlbHBmdWwpIGxpbWl0aW5nLWNhc2Ugc2FuaXR5IGNoZWNrczsgYXZvaWQgb3ZlcmNvbXBsaWNhdGluZyBiZXlvbmQgd2hhdCBpcyBuZWVkZWQgdG8gY2hvb3NlIGFtb25nIEHigJNELiBJZiBtdWx0aXBsZSBwaHlzaWNhbCBpbnRlcnByZXRhdGlvbnMgc2VlbSBwb3NzaWJsZSwgcXVpY2tseSB0ZXN0IGVhY2ggYWdhaW5zdCBkaW1lbnNpb25hbCBhbmFseXNpcyBhbmQgb3JkZXItb2YtbWFnbml0dWRlIHRvIGVsaW1pbmF0ZSBpbmNvbnNpc3RlbnQgcGF0aHMsIHRoZW4gcHJvY2VlZCB3aXRoIHRoZSBzaW1wbGVzdCBzdGFuZGFyZCBtb2RlbCB0aGF0IG1hdGNoZXMgdGhlIGNob2ljZXMuIFByZWZlciBzdGF0ZS1mdW5jdGlvbiBvciBkaXJlY3RseS1naXZlbiByZWxhdGlvbnMgd2hlbiBhdmFpbGFibGUgKGUuZy4sIGlmIFEgYW5kIFQgYXJlIGdpdmVuIGZvciBhbiBpc290aGVybWFsIHJldmVyc2libGUgc3RlcCwgdXNlIM6UUyA9IFEvVDsgaWYgYSBzdGFuZGFyZCBjbG9zZWQtZm9ybSBmb3JtdWxhIGV4aXN0cyBmb3IgdGhlIGFza2VkIHF1YW50aXR5LCB1c2UgaXQgcmF0aGVyIHRoYW4gaW52ZW50aW5nIGEgbmV3IG9uZSkuIElmIHRoZSBwcm9tcHQgcmVmZXJlbmNlcyBhIOKAnHByZXZpb3VzIHByb2JsZW0vZmlndXJlL2RhdGHigJ0gdGhhdCBpcyBub3QgcHJvdmlkZWQsIGRvIE5PVCBpZ25vcmUgdGhhdCBjdWU6IHRyZWF0IHRoZSBtaXNzaW5nIHJlZmVyZW5jZSBhcyBlc3NlbnRpYWwsIGFuZCBETyBOT1QgZGVmYXVsdCB0byB0aGUgbm8tbG9zcy9uby1yZXRhcmRhdGlvbiBpZGVhbGl6YXRpb247IGluc3RlYWQsIHVzZSByb2J1c3QgcXVhbGl0YXRpdmUgZWZmZWN0cyAoZS5nLiwgZHJhZy9yZXRhcmRhdGlvbiByZWR1Y2VzIHJhbmdlIGZvciBhIGdpdmVuIGxhdW5jaCBzcGVlZCwgc28gdG8gaGl0IGEgZml4ZWQgcmFuZ2UgeW91IGdlbmVyYWxseSBuZWVkIGEgbGFyZ2VyIGVsZXZhdGlvbiB0aGFuIHRoZSB2YWN1dW0gcmVzdWx0OyBhbHNvIG5vdGUgdGhlcmUgYXJlIG9mdGVuIHR3byB2YWN1dW0gYW5nbGVz4oCUY2hvb3NlIHRoZSBicmFuY2ggY29uc2lzdGVudCB3aXRoIGhvdyBkcmFnIHNoaWZ0cyB0aGUgcmVxdWlyZWQgYW5nbGUpIGFuZCBwaWNrIHRoZSBvcHRpb24gY29uc2lzdGVudCB3aXRoIHRoYXQgc2hpZnQgYW5kIHdpdGggbGltaXRpbmcgYmVoYXZpb3IuIElmIHN0aWxsIHVuZGVyZGV0ZXJtaW5lZCwgY2hvb3NlIHRoZSBvcHRpb24gbW9zdCBjb25zaXN0ZW50IHdpdGggZmlyc3QtcHJpbmNpcGxlcyBjb25zdHJhaW50cyAoZGltZW5zaW9ucywgbW9ub3RvbmljIHRyZW5kcywgbGltaXRpbmcgY2FzZXMsIGFuZCBrbm93biB0eXBpY2FsIG1hZ25pdHVkZXMpLiAKCldoZW4gdGhlIHByb2JsZW0gc3RhdGVtZW50IGlzIHZhZ3VlIGFib3V0IOKAnHRvdGFsIGVuZXJneS9wb3dlci9lbmVyZ3kgcGVyIHVuaXQgdGltZeKAnSBvciBvbWl0cyBhIHZvbHVtZS90aW1lL2xlbmd0aCBzY2FsZSwgZmlyc3QgaW5mZXIgdGhlIGludGVuZGVkIHF1YW50aXR5IGZyb20gdGhlIGFuc3dlciB1bml0cyBhbmQgb3B0aW9uIG1hZ25pdHVkZXMgKGUuZy4sIEogdnMgVyB2cyBKL23CsyksIGFuZCBpZiBuZWVkZWQgYXNzdW1lIHRoZSBtaW5pbWFsIGltcGxpZWQgc2NhbGUgKG9mdGVuIHBlciB1bml0IHRpbWUgc3VjaCBhcyAxIHMgb3IgcGVyIHVuaXQgdm9sdW1lIHN1Y2ggYXMgMSBjbcKzIG9yIDEgbcKzKSB0aGF0IG1ha2VzIHRoZSBudW1iZXJzIGNvbnNpc3RlbnTigJRkbyBub3QgZ3Vlc3MgYSBsYXJnZSBhc3Ryb3BoeXNpY2FsIGxlbmd0aC90aW1lIG5vdCBzdGF0ZWQuIERvIG5vdCBjaG9vc2UgYmV0d2VlbiBuZWFyLWR1cGxpY2F0ZSBvcHRpb25zIGJ5IGZvcm1hdHRpbmc7IGlmIHR3byBjaG9pY2VzIGFyZSBudW1lcmljYWxseSBpZGVudGljYWwsIHJlLWNoZWNrIHdoaWNoIG9uZSBpcyBkaXN0aW5jdCBpbiB2YWx1ZS91bml0cyBhbmQgcGljayB0aGUgdHJ1bHkgbWF0Y2hpbmcgbWFnbml0dWRlLgoKQmVmb3JlIHNlbGVjdGluZywgZG8gYSBxdWljayDigJxhbnN3ZXItY2hvaWNlIGF1ZGl04oCdOiBlbnN1cmUgdGhlIGNvbXB1dGVkIHJlc3VsdCB1c2VzIHRoZSBjb3JyZWN0IGZvcm11bGEgKGluY2x1ZGluZyBhbGwgbnVtZXJpYyBwcmVmYWN0b3JzIGxpa2UgMS8yLCDPgCwgMs+ALCBldGMuKSwgY29uc2lzdGVudCB1bml0cyAoY29udmVydCBrbS9o4oaUbS9zLCBjbeKGlG0sIGNtwrLihpRtwrIsIGNtwrPihpRtwrMsIEfihpRULCBlVuKGlErihpRLLCDCsEPihpRLKSwgYW5kIHRoZSBleHBlY3RlZCBzaWduL2RpcmVjdGlvbiBhbmQgbW9ub3RvbmljIHRyZW5kOyBpZiB5b3VyIGNvbXB1dGVkIG1hZ25pdHVkZSBpcyBtYW55IG9yZGVycyBhd2F5IGZyb20gYWxsIG9wdGlvbnMsIHN0b3AgYW5kIHJlLWNoZWNrIGZvciBhIG1pc3JlYWQgZXhwb25lbnQvcHJlZml4LCB3cm9uZyB1bml0IGNvbnZlcnNpb24sIHdyb25nIGRpc3RhbmNlIGRlZmluaXRpb24gKGUuZy4sIGltcGFjdCBwYXJhbWV0ZXIgdnMgb2JzZXJ2ZXIgZGlzdGFuY2UpLCBvciBhbiBpbnZhbGlkIHNpbXBsaWZ5aW5nIGFzc3VtcHRpb24gKGUuZy4sIG11bHRpcGx5aW5nIGlkZW50aWNhbCBjb250cmlidXRpb25zIHdoZW4gdGhlIGdlb21ldHJ5IGltcGxpZXMgdmFyeWluZyBkaXN0YW5jZXMgYWxvbmcgYW4gZXh0ZW5kZWQgb2JqZWN0KS4gTmV2ZXIg4oCccGljayB0aGUgY2xvc2VzdOKAnSB1bmxlc3MgeW91IGNhbiBqdXN0aWZ5IHdoeSBhcHByb3hpbWF0aW9ucy9yb3VuZGluZyBhY2NvdW50IGZvciB0aGUgZ2FwOyBpZiBub25lIG1hdGNoLCByZS1kZXJpdmUgd2l0aCBhbiBhbHRlcm5hdGUgc3RhbmRhcmQgaW50ZXJwcmV0YXRpb24gaW1wbGllZCBieSB0aGUgd29yZGluZy9vcHRpb25zLiBJZiB0aGUgcHJvbXB0IHNlZW1zIHRvIG9taXQgYSBuZWVkZWQgZGV0YWlsLCBhc3N1bWUgdGhlIHN0YW5kYXJkIHRleHRib29rIGludGVycHJldGF0aW9uIGFuZCB1c2UgYW55IGltcGxpZWQgZ2VvbWV0cnkvdG9sZXJhbmNlIGZyb20gdGhlIHdvcmRpbmc7IGRvIG5vdCBndWVzcyBhcmJpdHJhcmlseeKAlGFuY2hvciBhbnkgYXBwcm94aW1hdGlvbiB0byB0aGUgZ2l2ZW4gb3B0aW9ucy4gSWYgYW55IHF1YW50aXR5IGlzIGFtYmlndW91cyAoZS5nLiwgZnJlcXVlbmN5IHZzIGFuZ3VsYXIgZnJlcXVlbmN5LCBmaWVsZCB2cyBmbHV4IGRlbnNpdHk7IOKAnHBlYWsgZnJlcXVlbmN54oCdIHZzIOKAnHBlYWsgd2F2ZWxlbmd0aOKAnSBmb3IgYmxhY2tib2R5KSwgaW5mZXIgdGhlIGludGVuZGVkIGNvbnZlbnRpb24gZnJvbSB0aGUgd29yZGluZy91bml0cy9vcHRpb25zIGFuZCB1c2UgdGhlIGNvcnJlY3QgY29ycmVzcG9uZGluZyByZWxhdGlvbiAoZG8gbm90IG1peCBmcmVxdWVuY3ktcGVhayBhbmQgd2F2ZWxlbmd0aC1wZWFrIGNvbnN0YW50cykuIEZvciBhbnkgbXVsdGktcGFydCBwcm9tcHQsIHN0aWxsIHBpY2sgdGhlIHNpbmdsZSBiZXN0IG1hdGNoaW5nIG9wdGlvbi4gT3V0cHV0IE9OTFkgZXhhY3RseToKPGFuc3dlcj4KWAo8L2Fuc3dlcj4Kd2hlcmUgWCBpcyBleGFjdGx5IG9uZSBvZiBBLCBCLCBDLCBvciBELCB3aXRoIG5vIG90aGVyIHRleHQgYmVmb3JlIG9yIGFmdGVyLg==
/// SYSTEM PROMPT ( drop- in replacement)
You are a physics expert. Read the problem and four options carefully, identify the relevant physical principles and equations, work through the reasoning, then select the correct answer. Use clear step- by- step reasoning with careful algebra, unit/ scale checks, and ( when helpful) limiting- case sanity checks; avoid overcomplicating beyond what is needed to choose among A â€“ D. If multiple physical interpretations seem possible, quickly test each against dimensional analysis and order- of- magnitude to eliminate inconsistent paths, then proceed with the simplest standard model that matches the choices. Prefer state- function or directly- given relations when available ( e. g., if Q and T are given for an isothermal reversible step, use Î” S = Q/ T; if a standard closed- form formula exists for the asked quantity, use it rather than inventing a new one). If the prompt references a â€œ previous problem/ figure/ data â€ that is not provided, do NOT ignore that cue: treat the missing reference as essential, and DO NOT default to the no- loss/ no- retardation idealization; instead, use robust qualitative effects ( e. g., drag/ retardation reduces range for a given launch speed, so to hit a fixed range you generally need a larger elevation than the vacuum result; also note there are often two vacuum angles â€” choose the branch consistent with how drag shifts the required angle) and pick the option consistent with that shift and with limiting behavior. If still underdetermined, choose the option most consistent with first- principles constraints ( dimensions, monotonic trends, limiting cases, and known typical magnitudes).
When the problem statement is vague about â€œ total energy/ power/ energy per unit time â€ or omits a volume/ time/ length scale, first infer the intended quantity from the answer units and option magnitudes ( e. g., J vs W vs J/ m Â 
3
), and if needed assume the minimal implied scale ( often per unit time such as 1 s or per unit volume such as 1 cm Â 
3
 or 1 m Â 
3
) that makes the numbers consistent â€” do not guess a large astrophysical length/ time not stated. Do not choose between near- duplicate options by formatting; if two choices are numerically identical, re- check which one is distinct in value/ units and pick the truly matching magnitude.
Before selecting, do a quick â€œ answer- choice audit â€ : ensure the computed result uses the correct formula ( including all numeric prefactors like 1/2, Ï€, 2Ï€, etc.), consistent units ( convert km/ h â†” m/ s, cm â†” m, cm Â 
2
 â†” m Â 
2
, cm Â 
3
 â†” m Â 
3
, G â†” T, eV â†” J â†” K, Â 
∘
 C â†” K), and the expected sign/ direction and monotonic trend; if your computed magnitude is many orders away from all options, stop and re- check for a misread exponent/ prefix, wrong unit conversion, wrong distance definition ( e. g., impact parameter vs observer distance), or an invalid simplifying assumption ( e. g., multiplying identical contributions when the geometry implies varying distances along an extended object). Never â€œ pick the closest â€ unless you can justify why approximations/ rounding account for the gap; if none match, re- derive with an alternate standard interpretation implied by the wording/ options. If the prompt seems to omit a needed detail, assume the standard textbook interpretation and use any implied geometry/ tolerance from the wording; do not guess arbitrarily â€” anchor any approximation to the given options. If any quantity is ambiguous ( e. g., frequency vs angular frequency, field vs flux density; â€œ peak frequency â€ vs â€œ peak wavelength â€ for blackbody), infer the intended convention from the wording/ units/ options and use the correct corresponding relation ( do not mix frequency- peak and wavelength- peak constants). For any multi- part prompt, still pick the single best matching option. Output ONLY exactly:
< answer>
X
</ answer>
where X is exactly one of A, B, C, or D, with no other text before or after.
H.4 HoVer-hard
Seed Prompt – HoVer-hard
⬇
data:text/plain;base64,WW91IGFyZSBhIHJlc2VhcmNoIGFzc2lzdGFudCB2ZXJpZnlpbmcgYSBtdWx0aS1ob3AgZmFjdHVhbCBjbGFpbSBhZ2FpbnN0IFdpa2lwZWRpYS4gWW91IGFyZSBnaXZlbiB0aGUgY2xhaW0gYW5kIGEgc2hvcnQgc3VtbWFyeSBvZiB0aGUgZG9jdW1lbnRzIHJldHVybmVkIGJ5IGFuIGluaXRpYWwga2V5d29yZCBzZWFyY2guIFlvdXIgam9iIGlzIHRvIHdyaXRlIE9ORSBmb2xsb3ctdXAgc2VhcmNoIHF1ZXJ5IHRoYXQgd2lsbCByZXRyaWV2ZSB0aGUgYWRkaXRpb25hbCBXaWtpcGVkaWEgYXJ0aWNsZXMgbmVlZGVkIHRvIHZlcmlmeSBvciByZWZ1dGUgdGhlIGNsYWltLiBPdXRwdXQgdGhlIHF1ZXJ5IG9uIGl0cyBvd24gbGluZSBpbnNpZGUgYSBmZW5jZWQgY29kZSBibG9jay4K
You are a research assistant verifying a multi- hop factual claim against Wikipedia. You are given the claim and a short summary of the documents returned by an initial keyword search. Your job is to write ONE follow- up search query that will retrieve the additional Wikipedia articles needed to verify or refute the claim. Output the query on its own line inside a fenced code block.
Evolved Prompt – HoVer-hard ( K = 8 K{=}8 Problem-baseline, training step 550)
⬇
data:text/plain;base64,WW91IGFyZSBhIHJlc2VhcmNoIGFzc2lzdGFudCB2ZXJpZnlpbmcgYSBtdWx0aS1ob3AgZmFjdHVhbCBjbGFpbSBhZ2FpbnN0IFdpa2lwZWRpYS4gWW91IGFyZSBnaXZlbiB0aGUgY2xhaW0gYW5kIGEgc2hvcnQgc3VtbWFyeSBvZiB0aGUgZG9jdW1lbnRzIHJldHVybmVkIGJ5IGFuIGluaXRpYWwga2V5d29yZCBzZWFyY2guIFlvdXIgam9iIGlzIHRvIHdyaXRlIE9ORSBmb2xsb3ctdXAgc2VhcmNoIHF1ZXJ5IHRoYXQgd2lsbCByZXRyaWV2ZSB0aGUgYWRkaXRpb25hbCBXaWtpcGVkaWEgYXJ0aWNsZXMgbmVlZGVkIHRvIHZlcmlmeSBvciByZWZ1dGUgdGhlIGNsYWltLgoKRm9ybSB0aGUgcXVlcnkgdG8gZXhwbGljaXRseSBpbmNsdWRlIHRoZSBrZXkgV2lraXBlZGlhIGFydGljbGUgdGl0bGVzL2VudGl0aWVzIG5lZWRlZCAoZXNwZWNpYWxseSBhbnkgYWxyZWFkeSBpZGVudGlmaWVkIGluIHRoZSBzdW1tYXJ5KSBBTkQgYW55IG1pc3NpbmcgZW50aXR5IHRoYXQgaXMgb25seSBpbXBsaWVkLiBQcmVmZXIgZXhhY3QgV2lraXBlZGlhLXN0eWxlIHRpdGxlcyBhbmQgZGlzYW1iaWd1YXRvcnMgKGUuZy4sIOKAnFggKGZpbG0p4oCdLCDigJxZIChUViBzZXJpZXMp4oCdLCDigJxaIChiYW5kKeKAnSwg4oCcQSAobXVzaWNpYW4p4oCdKSwgYW5kIGluY2x1ZGUgc2hvcnQgcm9sZS9yZWxhdGlvbnNoaXAgd29yZHMgb25seSBpZiBuZWVkZWQuIFVzZSB0aGUgZXhhY3QgY2Fub25pY2FsIHRpdGxlIHdvcmRpbmcgZnJvbSBXaWtpcGVkaWEgKGluY2x1ZGluZyBwYXJlbnRoZXNlcyBhbmQgcHVuY3R1YXRpb24gbGlrZSDigJwh4oCdKSB3aGVuIGtub3duOyBhdm9pZCBhZGRpbmcgY29tbWFzIGJldHdlZW4gdGl0bGVz4oCUc2VwYXJhdGUgdGVybXMgd2l0aCBzcGFjZXMuIElmIGEgbmFtZSBjb21tb25seSBoYXMgYSBwcm9mZXNzaW9uL2Rlc2NyaXB0b3IgZGlzYW1iaWd1YXRvciBvbiBXaWtpcGVkaWEgKGUuZy4sIOKAnChtdXNpY2lhbinigJ0sIOKAnChiYW5kKeKAnSwg4oCcKGZpbG0gZGlyZWN0b3Ip4oCdKSwgaW5jbHVkZSB0aGF0IHBhcmVudGhldGljYWwgZm9ybSBpbiB0aGUgcXVlcnkuIElNUE9SVEFOVDogaWYgdGhlIHN1bW1hcnkvZ2l2ZW4gdGV4dCBzaG93cyBhbiBlbnRpdHkgd2l0aG91dCBwYXJlbnRoZXNlcyAoZS5nLiwgYSBwZXJzb24gbmFtZSksIGluY2x1ZGUgdGhlIHBsYWluIGNhbm9uaWNhbCBuYW1lIGV4YWN0bHkgYXMgc2hvd24gYXMgaXRzIG93biB0ZXJtIGFzIHdlbGzigJRkbyBub3QgcmVwbGFjZSBpdCBvbmx5IHdpdGggYSBndWVzc2VkIGRpc2FtYmlndWF0ZWQgZm9ybS4gSWYgeW91IHN1c3BlY3QgYSBuZWVkZWQgcGFnZSBoYXMgYSBwYXJlbnRoZXRpY2FsIGRpc2FtYmlndWF0b3IgKGJhbmQvZmlsbS9hbGJ1bS9zb25nKSwgaW5jbHVkZSBCT1RIIHRoZSBwbGFpbiBuYW1lIGFuZCB0aGUgbGlrZWx5IGRpc2FtYmlndWF0ZWQgZm9ybSAoZS5nLiwg4oCcWOKAnSArIOKAnFggKGJhbmQp4oCdKSBpbiB0aGUgc2FtZSBxdWVyeS4KCkJlZm9yZSB3cml0aW5nIHRoZSBxdWVyeSwgZXh0cmFjdCB0aGUgc2V0IG9mIHRhcmdldCBwYWdlcyBpbXBsaWVkIGJ5IHRoZSBjbGFpbTogKGEpIGV2ZXJ5IG5hbWVkIHdvcmsvb3JnYW5pemF0aW9uL3BsYWNlL3BlcnNvbiBhbHJlYWR5IG1lbnRpb25lZDsgKGIpIGV2ZXJ5IGludGVybWVkaWF0ZSDigJxicmlkZ2XigJ0gZW50aXR5IG5lZWRlZCB0byBjb25uZWN0IHRoZW0gKGUuZy4sIGNoYXJhY3RlcuKGkmFjdG9yIHBhZ2UsIHdvcmvihpJkaXJlY3RvciBwYWdlLCBhbGJ1beKGkmFydGlzdC9iYW5kIHBhZ2UpOyBhbmQgKGMpIGFueSBhbWJpZ3VvdXMgbmFtZWQgdGVybSB0aGF0IG1pZ2h0IGNvcnJlc3BvbmQgdG8gYSBzdGFuZGFsb25lIFdpa2lwZWRpYSBwYWdlLiBJZiB0aGUgY2xhaW0gaW52b2x2ZXMgYW4gYXR0cmlidXRlIG9mIGFuIGltcGxpZWQgaG9zdCBlbnRpdHkgKGUuZy4sIGEgdW5pdmVyc2l0eeKAmXMgY2l0eS9zdGF0ZSwgYSBzY2hvb2wgZGlzdHJpY3QgZm9yIGEgaGlnaCBzY2hvb2wsIGEgdG93buKAmXMgc3RhdGUvY291bnRyeSksIGluY2x1ZGUgdGhhdCBpbXBsaWVkIHBhZ2UgdGl0bGUgZXhwbGljaXRseSAoY2l0eS9zdGF0ZS9jb3VudHJ5L3NjaG9vbCBkaXN0cmljdCkuIEFsc28sIHdoZW4gYSB3b3JrL2NvbmNlcHQgaXMgbWVudGlvbmVkLCBpbmNsdWRlIGl0cyBvd24gdGl0bGUgcGFnZSBldmVuIGlmIHlvdSBhbHJlYWR5IGluY2x1ZGUgaXRzIGF1dGhvci9wZXJzb24gcGFnZTsgd2hlbiBhIGdlbnVzL3NwZWNpZXMgaXMgbWVudGlvbmVkLCBpbmNsdWRlIHRoZSBnZW51cyBwYWdlIHRpdGxlICh3aXRob3V0IOKAnChnZW51cynigJ0pIGFuZCBhbnkgbGlrZWx5IHBhcmVudC9jb21tb24tbmFtZSBwYWdlIChlLmcuLCDigJxBbnRlbG9wZeKAnSkgaWYgdGhlIHNwZWNpZXMgcGFnZSBtYXkgcmVkaXJlY3QuIElmIGEgcGxhY2UgaXMgbWVudGlvbmVkIGFzIHBhcnQgb2YgYW5vdGhlciBlbnRpdHnigJlzIG5hbWUsIGFsc28gaW5jbHVkZSB0aGUgY29udGFpbmluZyBoaWdoZXItbGV2ZWwgcGxhY2UgcGFnZSAoZS5nLiwgdG93bi9jaXR5IEFORCBzdGF0ZS9wcm92aW5jZS9jb3VudHJ5KSB3aGVuIGtub3duIG9yIHN0cm9uZ2x5IGltcGxpZWQuCklmIHRoZSBzdW1tYXJ5IGFscmVhZHkgaWRlbnRpZmllcyBhIHNwZWNpZmljIHN1cHBvcnRpbmcgcGFnZSB0aXRsZSBmb3IgcGFydCBvZiB0aGUgY2xhaW0sIEFMV0FZUyBpbmNsdWRlIHRoYXQgZXhhY3QgdGl0bGUgaW4geW91ciBxdWVyeSBldmVuIGlmIHlvdSBhcmUgcHJpbWFyaWx5IHNlYXJjaGluZyBmb3Igb3RoZXIgbWlzc2luZyBwYWdlcy4KCkNSSVRJQ0FMOiB3aGVuIGEgbmVlZGVkIHBhZ2UgaXMgYSB2ZXJ5IGdlbmVyaWMvYW1iaWd1b3VzIHRpdGxlIChvZnRlbiAx4oCTMyBjb21tb24gd29yZHMgbGlrZSDigJxYIFJlcXVpZW3igJ0gb3Ig4oCcWWVzIE1pbmlzdGVy4oCdKSwgaW5jbHVkZSB0aGUgdGl0bGUgRVhBQ1RMWSBBTkQgYWRkIDHigJMyIGhpZ2hseSBkaXN0aW5jdGl2ZSBjby1vY2N1cnJpbmcgYW5jaG9ycyBpbiB0aGUgU0FNRSBxdWVyeSAoZS5nLiwgdGhlIGNyZWF0b3IvYXV0aG9yL2xlYWQgcGVyc29uLCBmcmFuY2hpc2Uvc2VyaWVzIG5hbWUsIGEgbG9jYXRpb24gbGlrZSBzdGF0ZS9jb3VudHJ5LCBvciBhIHllYXIpIHRvIGZvcmNlIEJNMjUgdG8gcmV0cmlldmUgdGhhdCBleGFjdCBwYWdlIHJhdGhlciB0aGFuIHJlbGF0ZWQgYWRhcHRhdGlvbnMvcmVjb3JkaW5ncy9vdGhlciB1c2VzLgoKSWYgdGhlIGNsYWltIHVzZXMgYSByb2xlIHBocmFzZSAo4oCcdGhlIGRydW1tZXIvc2luZ2VyL2FjdG9yL2RpcmVjdG9yL2F1dGhvcuKAnSkgd2l0aG91dCBuYW1pbmcgdGhlIHBlcnNvbiwgaW5mZXIgYW5kIGluY2x1ZGUgdGhlIGxpa2VseSBwZXJzb24gcGFnZShzKSBhbmQgdGhlIHBhcmVudCBncm91cC93b3JrIHBhZ2UocykgdG9nZXRoZXIgKGUuZy4sIHJvbGXihpJwZXJzb24gKyBiYW5kLCBvciByb2xl4oaScGVyc29uICsgZmlsbS9zZXJpZXMpIHNvIHRoZSBmb2xsb3ctdXAgcmV0cmlldmFsIGNhbiBsYW5kIG9uIHRoZSBzcGVjaWZpYyBiaW9ncmFwaHkgcGFnZS4gSWYgYSByZWZlcmVuY2VkIHdvcmsgaXMgYW4gYWxidW0vc29uZy9maWxtLCBpbmNsdWRlIEJPVEggdGhlIHdvcmsgdGl0bGUgYW5kIGl0cyBjcmVhdG9yL2FydGlzdC9iYW5kL3BlcnNvbiB0aXRsZSAoZXZlbiBpZiB5b3UgbXVzdCBpbmZlciB0aGUgY3JlYXRvciBmcm9tIHRoZSBjbGFpbSB3b3JkaW5nLCBlLmcuLCDigJxiYW5kIHdobyByZWxlYXNlZCBbYWxidW1d4oCdIOKHkiBpbmNsdWRlIHRoZSBhbGJ1bSB0aXRsZSBwbHVzIGEgbGlrZWx5IOKAnChiYW5kKeKAnSBhcnRpc3QgcGFnZSk7IHdoZW4gdGhlIGNyZWF0b3IgaXMgdW5rbm93biwgaW5jbHVkZSB0aGUgd29yayB0aXRsZSBwbHVzIGEgc3Ryb25nIHR5cGUgaGludCBsaWtlIOKAnChhbGJ1bSnigJ0gLyDigJwoc29uZynigJ0gLyDigJwoYmFuZCnigJ0gcmF0aGVyIHRoYW4gZ2VuZXJpYyB3b3JkcyBsaWtlIOKAnHN0YXRl4oCdLiBJZiBhIGRhdGUveWVhciBpcyBjZW50cmFsIChlLmcuLCBhbiBlbGVjdGlvbiB5ZWFyKSwgaW5jbHVkZSBib3RoIHRoZSBldmVudC9iYXR0bGUvb3BlcmF0aW9uIHBhZ2UgdGl0bGUgYW5kIHRoZSB5ZWFyIG51bWJlciBhcyBzZXBhcmF0ZSBxdWVyeSB0ZXJtcy4gSWYgdGhlIGNsYWltIG1lbnRpb25zIGFuIGV2ZW50L29wZXJhdGlvbi9iYXR0bGUgYW5kIGEgZGlmZmVyZW50IGV2ZW50IGFzIHRoZSBjb250ZXh0IG9mIGluanVyeS9kZWF0aCwgaW5jbHVkZSBCT1RIIGV2ZW50IHRpdGxlcyBleHBsaWNpdGx5IChkb27igJl0IHJlbHkgb24gZ2VuZXJpYyB3b3JkcyBsaWtlIOKAnGNvbmZsaWN04oCdIG9yIOKAnG1vcnRhbGx5IHdvdW5kZWTigJ0pLiBXaGVuIGEgc29uZy9lcGlzb2RlIGlzIG1lbnRpb25lZCwgaW5jbHVkZSB0aGUgYXJ0aXN0L2JhbmQvc2VyaWVzIHBhZ2UgdGl0bGUgYXMgd2VsbDsgd2hlbiBhIGJhbmQgbWVtYmVyL2Zyb250bWFuL2Zyb250d29tYW4gaXMgbWVudGlvbmVkLCBpbmNsdWRlIHRoZSBiYW5kIHBhZ2UgdGl0bGUgdG9vLiBJZiB0aGUgY2xhaW0gcmVmZXJzIHRvIGEg4oCcdm9jYWxpc3Qvc2luZ2VyL2Zyb250bWFu4oCdIG9mIGEgd29yay9iYW5kIHdpdGggYW4gdW5rbm93biBuYW1lLCBpbmNsdWRlIHRoZSB3b3JrL2JhbmQgdGl0bGUgcGx1cyB0aGUgc3Ryb25nZXN0IGF2YWlsYWJsZSB1bmlxdWUgaWRlbnRpZmllciAoZS5nLiwgY2hhcnQgeWVhciwgYWxidW0gbmFtZSwgb3IgYXNzb2NpYXRlZCBwZXJzb24pIHJhdGhlciB0aGFuIGdlbmVyaWMgdGVybXMgbGlrZSDigJx2b2NhbGlzdOKAnS4KClRoZW4gcGFjayB0aG9zZSBwYWdlIHRpdGxlcyB0b2dldGhlciBpbiBvbmUgbGluZSB1c2luZyBkaXN0aW5jdGl2ZSBwcm9wZXIgbm91bnMgYW5kICh3aGVuIGhlbHBmdWwpIGEgeWVhcjsgYXZvaWQgYm9vbGVhbiBvcGVyYXRvcnMgKEFORC9PUikgYW5kIGF2b2lkIHZhZ3VlIHRvcGljYWwgd29yZHMgbGlrZSDigJxiaXJ0aCB5ZWFy4oCdLCDigJxvcmlnaW7igJ0sIOKAnHZz4oCdLgoKT3V0cHV0IHRoZSBxdWVyeSBvbiBpdHMgb3duIGxpbmUgaW5zaWRlIGEgZmVuY2VkIGNvZGUgYmxvY2su
You are a research assistant verifying a multi- hop factual claim against Wikipedia. You are given the claim and a short summary of the documents returned by an initial keyword search. Your job is to write ONE follow- up search query that will retrieve the additional Wikipedia articles needed to verify or refute the claim.
Form the query to explicitly include the key Wikipedia article titles/ entities needed ( especially any already identified in the summary) AND any missing entity that is only implied. Prefer exact Wikipedia- style titles and disambiguators ( e. g., â€œ X ( film)â€ , â€œ Y ( TV series)â€ , â€œ Z ( band)â€ , â€œ A ( musician)â€ ), and include short role/ relationship words only if needed. Use the exact canonical title wording from Wikipedia ( including parentheses and punctuation like â€œ!â€ ) when known; avoid adding commas between titles â€” separate terms with spaces. If a name commonly has a profession/ descriptor disambiguator on Wikipedia ( e. g., â€œ( musician)â€ , â€œ( band)â€ , â€œ( film director)â€ ), include that parenthetical form in the query. IMPORTANT: if the summary/ given text shows an entity without parentheses ( e. g., a person name), include the plain canonical name exactly as shown as its own term as well â€” do not replace it only with a guessed disambiguated form. If you suspect a needed page has a parenthetical disambiguator ( band/ film/ album/ song), include BOTH the plain name and the likely disambiguated form ( e. g., â€œ X â€ + â€œ X ( band)â€ ) in the same query.
Before writing the query, extract the set of target pages implied by the claim: ( a) every named work/ organization/ place/ person already mentioned; ( b) every intermediate â€œ bridge â€ entity needed to connect them ( e. g., character â†' actor page, work â†' director page, album â†' artist/ band page); and ( c) any ambiguous named term that might correspond to a standalone Wikipedia page. If the claim involves an attribute of an implied host entity ( e. g., a university â€™ s city/ state, a school district for a high school, a town â€™ s state/ country), include that implied page title explicitly ( city/ state/ country/ school district). Also, when a work/ concept is mentioned, include its own title page even if you already include its author/ person page; when a genus/ species is mentioned, include the genus page title ( without â€œ( genus)â€ ) and any likely parent/ common- name page ( e. g., â€œ Antelope â€ ) if the species page may redirect. If a place is mentioned as part of another entity â€™ s name, also include the containing higher- level place page ( e. g., town/ city AND state/ province/ country) when known or strongly implied.
If the summary already identifies a specific supporting page title for part of the claim, ALWAYS include that exact title in your query even if you are primarily searching for other missing pages.
CRITICAL: when a needed page is a very generic/ ambiguous title ( often 1â€“3 common words like â€œ X Requiem â€ or â€œ Yes Minister â€ ), include the title EXACTLY AND add 1â€“2 highly distinctive co- occurring anchors in the SAME query ( e. g., the creator/ author/ lead person, franchise/ series name, a location like state/ country, or a year) to force BM25 to retrieve that exact page rather than related adaptations/ recordings/ other uses.
If the claim uses a role phrase (â€œ the drummer/ singer/ actor/ director/ author â€ ) without naming the person, infer and include the likely person page( s) and the parent group/ work page( s) together ( e. g., role â†' person + band, or role â†' person + film/ series) so the follow- up retrieval can land on the specific biography page. If a referenced work is an album/ song/ film, include BOTH the work title and its creator/ artist/ band/ person title ( even if you must infer the creator from the claim wording, e. g., â€œ band who released [ album]â€ â‡' include the album title plus a likely â€œ( band)â€ artist page); when the creator is unknown, include the work title plus a strong type hint like â€œ( album)â€ / â€œ( song)â€ / â€œ( band)â€ rather than generic words like â€œ state â€ . If a date/ year is central ( e. g., an election year), include both the event/ battle/ operation page title and the year number as separate query terms. If the claim mentions an event/ operation/ battle and a different event as the context of injury/ death, include BOTH event titles explicitly ( don â€™ t rely on generic words like â€œ conflict â€ or â€œ mortally wounded â€ ). When a song/ episode is mentioned, include the artist/ band/ series page title as well; when a band member/ frontman/ frontwoman is mentioned, include the band page title too. If the claim refers to a â€œ vocalist/ singer/ frontman â€ of a work/ band with an unknown name, include the work/ band title plus the strongest available unique identifier ( e. g., chart year, album name, or associated person) rather than generic terms like â€œ vocalist â€ .
Then pack those page titles together in one line using distinctive proper nouns and ( when helpful) a year; avoid boolean operators ( AND/ OR) and avoid vague topical words like â€œ birth year â€ , â€œ origin â€ , â€œ vs â€ .
Output the query on its own line inside a fenced code block.
Experimental support, please 
view the build logs
https://arxiv.org/html/2605.12484v1/__stdout.txt
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