# P-Tuning - fnl.es

Source URL: https://fnl.es/Science/Papers/Prompt+Engineering/P-Tuning

P-Tuning - fnl.es 
fnl.es
https://fnl.es/Welcome+to+Florian's+Knowledge+Base
 
fnl.es
https://fnl.es/Welcome+to+Florian's+Knowledge+Base
P-Tuning
GPT Understands, Too
Xiau Liu, Yanan Zheng, Zhengxiao Du, Ming Ding, Yujie Qian, Zhilin Yang, Jie Tang
Tsinghua University
AI Open 2023
Incentive
P-tuning improves performance and stabilizes training for pretrained, frozen language model adaptation.
Like 
prompt tuning
https://fnl.es/Science/Papers/Prompt+Engineering/Prompt+Tuning
, P-tuning substantially increases the performance gap to different discrete prompts and results in improved stability for language model adaptation.
However, P-tuned prompts exhibit better performance than prompt tuning.
Abstract
Manual discrete prompts suffer from a large degree of instability.
Changing a single word in the prompt might result in substantial performance drop.
When the language model is tuned, the instability problem is alleviated but the performance difference between different prompts is still sizeable.
P-tuning works like prompt tuning, but adds a special prompt encoder to the mix.
 
Method
P-tuning has two unique designs: Using hybrid continuous-discrete prompts and employing a prompt encoder.
P-tuning employs trainable continuous prompt embeddings in concatenation with discrete prompts.
Given a discrete prompt as the input, P-tuning concatenates continuous prompt embeddings with the discrete prompt tokens and feeds them as the input to the language model.
The continuous prompts are updated by backpropagation to optimize the task objective.
The prompt encoder is a mapping function 
f
 to map trainable embeddings to model inputs.
We use a lightweight neural network to formulate the function 
f
 .
Specifically, we experiment with using long short-term memory (LSTM) networks, multi-layer perceptrons (MLPs), and the identity mapping function ("EMB", i.e., we directly optimize the word 
embeddings
 without using additional parameters).
Results show that both LSTM and MLP generally work well on these tasks, while EMB is unstable and can substantially under-perform.
During the prompt training, we set the learning rate to 1e-5 and use the Adam optimizer.
Evaluation
We compare P-tuning to 
Prompt Tuning
https://fnl.es/Science/Papers/Prompt+Engineering/Prompt+Tuning
 and Pattern-Exploiting Training (PET), two other soft prompt tuning techniques:
 
The evaluation shows that MLPs are a strong prompt encoder technique, LSTMs are competitive, while just using EMB [Comment: EMB should be the same as Prompt Tuning?] is not that great.
 
We also study the influence of the number of prompt tokens.
We use the same manual prompts reported by Schick and Schütze (2020).
When constructing prompt patterns for P-tuning, based on the same manual prompts as PET, we insert different numbers of continuous prompt tokens into different positions, thus formulating a number of pattern candidates.
 
Best pattern is #6: 
[Premise] Question: [Hypothesis] ? [P][P] Answer: [M]
 . ( 
[P]
 is continuous prompt token. 
[M]
 is the mask token)
In practice, it is suggested to search for the best number of prompt tokens through model selection.
Conclusion
P-tuning is a more effective soft prompt tuning technique than prompt tuning.
It achieves that by adding a trainable (MLP or LSTM) prompt encoder to the setup.
Otherwise, P-tuning should have the same advantages that prompt tuning exhibits.
Related work
Huggingface 
provide a tutorial
https://huggingface.co/docs/peft/task_guides/ptuning-seq-classification
 on how to implement P-tuning with their 
transformers
 and 
peft
 libraries.
Lester et al. (2021) showed that with large pre-trained models, only tuning continuous prompts with a frozen language model achieves comparable performance to full-model tuning.
Brian Lester, Rami Al-Rfou, and Noah Constant. 2021. The power of scale for parameter-efficient prompt tuning. ArXiv, abs/2104.08691.
Prefix-tuning (Li and Liang, 2021) adds continuous prompts at the beginning of the sequence for each layer. In contrast to our work, prefix-tuning targets natural language generation tasks.
Xiang Lisa Li and Percy Liang. 2021. Prefix-tuning: Optimizing continuous prompts for generation. ArXiv arXiv:2101.00190.
Links to this page
LLM Taxonomy
https://fnl.es/Science/NLP/LLM+Taxonomy
LLM Techniques
https://fnl.es/Science/NLP/LLM+Techniques
P-Tuning
Not found
This page does not exist
Interactive graph
On this page
Powered by Obsidian Publish
https://publish.obsidian.md/