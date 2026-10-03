# How I write software with LLMs - Hacker News

Source URL: https://news.ycombinator.com/item?id=47394022

How I write software with LLMs | Hacker News 
Hacker News
 
new
https://news.ycombinator.com/newest
 | 
past
https://news.ycombinator.com/front
 | 
comments
https://news.ycombinator.com/newcomments
 | 
ask
https://news.ycombinator.com/ask
 | 
show
https://news.ycombinator.com/show
 | 
jobs
https://news.ycombinator.com/jobs
 | 
submit
https://news.ycombinator.com/submit
login
https://news.ycombinator.com/login?goto=item%3Fid%3D47394022
How I write software with LLMs
https://www.stavros.io/posts/how-i-write-software-with-llms/
 ( 
stavros.io
https://news.ycombinator.com/from?site=stavros.io
)
544 points by 
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47394022
 | 
hide
https://news.ycombinator.com/hide?id=47394022&goto=item%3Fid%3D47394022
 | 
past
https://hn.algolia.com/?query=How%20I%20write%20software%20with%20LLMs&type=story&dateRange=all&sort=byDate&storyText=false&prefix&page=0
 | 
favorite
https://news.ycombinator.com/fave?id=47394022&auth=a7b05b652369d5715aac644823caef1eee9490a5
 | 
528 comments
https://news.ycombinator.com/item?id=47394022
akhrail1996
https://news.ycombinator.com/user?id=akhrail1996
 
3 months ago
https://news.ycombinator.com/item?id=47395680
 | 
next
https://news.ycombinator.com/item?id=47394022#47394537
 
[–]
javascript:void(0)
Genuine question: what's the evidence that the architect → developer → reviewer pipeline actually produces better results than just... talking to one strong model in one session?
The author uses different models for each role, which I get. But I run production agents on Opus daily and in my experience, if you give it good context and clear direction in a single conversation, the output is already solid. The ceremony of splitting into "architect" and "developer" feels like it gives you a sense of control and legibility, but I'm not convinced it catches errors that a single model wouldn't catch on its own with a good prompt.
 
 

https://news.ycombinator.com/vote?id=47396198&how=up&goto=item%3Fid%3D47394022
arialdomartini
https://news.ycombinator.com/user?id=arialdomartini
 
3 months ago
https://news.ycombinator.com/item?id=47396198
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
next
https://news.ycombinator.com/item?id=47394022#47400526
 
[–]
javascript:void(0)
This is anecdotal but just a couple days ago, with some colleagues, we conducted a little experiment to gather that evidence.
We used a hierarchy of agents to analyze a requirement, letting agents with different personas (architect, business analyst, security expert, developer, infra etc) discuss a request and distill a solution. They all had access to the source code of the project to work on.
Then we provided the very same input, including the personas' definition, straight to Claude Code, and we compared the result.
They council of agents got to a very good result, consuming about 12$, mostly using Opus 4.6.
To our surprise, going straight with a single prompt in Claude Code got to a similar good result, faster and consuming 0.3$ and mostly using Haiku.
This surely deserves more investigation, but our assumption / hypothesis so far is that coordination and communication between agents has a remarkable cost.
Should this be the case, I personally would not be surprised:
the reason why we humans do job separation is because we have an inherent limited capacity. We cannot reach the point to be experts in all the needed fields : we just can't acquire the needed knowledge to be good architects, good business analysts, good security experts. Apparently, that's not a problem for a LLM. So, probably, job separation is not a needed pattern as it is for humans.
Job separation has an inherent high cost and just does not scale. Notably, most of the problems in human organizations are about coordination, and the larger the organization the higher the cost for processes, to the point processed turn in bureaucracy. In IT companies, many problems are at the interface between groups, because the low-bandwidth communication and inherent ambiguity of language. I'm not surprised that a single LLM can communicate with itself way better and cheaper that a council of agents, which inevitably faces the same communication challenges of a society of people.
 
 

https://news.ycombinator.com/vote?id=47396949&how=up&goto=item%3Fid%3D47394022
titanomachy
https://news.ycombinator.com/user?id=titanomachy
 
3 months ago
https://news.ycombinator.com/item?id=47396949
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
next
https://news.ycombinator.com/item?id=47394022#47410923
 
[–]
javascript:void(0)
If it could be done with 30 cents of Haiku calls, maybe it wasn't a complicated enough project to provide good signal?
 
 

https://news.ycombinator.com/vote?id=47474497&how=up&goto=item%3Fid%3D47394022
jimbokun
https://news.ycombinator.com/user?id=jimbokun
 
3 months ago
https://news.ycombinator.com/item?id=47474497
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396949
 | 
next
https://news.ycombinator.com/item?id=47394022#47397162
 
[–]
javascript:void(0)
In that case a $12 program is probably too big to meaningfully review. Probably better to have smaller chunks you can review instead of generating one really large program in one shot.
 
 

https://news.ycombinator.com/vote?id=47397162&how=up&goto=item%3Fid%3D47394022
arialdomartini
https://news.ycombinator.com/user?id=arialdomartini
 
3 months ago
https://news.ycombinator.com/item?id=47397162
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396949
 | 
prev
https://news.ycombinator.com/item?id=47394022#47474497
 | 
next
https://news.ycombinator.com/item?id=47394022#47410923
 
[–]
javascript:void(0)
Fair point. I could try with a harder problem. This still does not explain why Claude Code felt the need to use Opus, and why Opus felt the need to burn 12$ or such an easy task. I mean, it's 40 times the cost.
 
 

https://news.ycombinator.com/vote?id=47397288&how=up&goto=item%3Fid%3D47394022
titanomachy
https://news.ycombinator.com/user?id=titanomachy
 
3 months ago
https://news.ycombinator.com/item?id=47397288
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397162
 | 
next
https://news.ycombinator.com/item?id=47394022#47410923
 
[–]
javascript:void(0)
I'm a bit confused actually, you said you used Claude Code for both examples? Was that a typo, or was it (1) Claude Code instructed to use a hierarchy of agents and (2) Claude Code allowed to do whatever it wants?
 
 

https://news.ycombinator.com/vote?id=47410923&how=up&goto=item%3Fid%3D47394022
throwawayffffas
https://news.ycombinator.com/user?id=throwawayffffas
 
3 months ago
https://news.ycombinator.com/item?id=47410923
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396949
 | 
next
https://news.ycombinator.com/item?id=47394022#47402505
 
[–]
javascript:void(0)
I think the benefit may be task separation and cleaning the context between tasks. Asking a single session to do all three has a couple of downsides.
The context for each task gets longer, which we know degrades performance.
In that longer context, implicit decisions are made in the thinking steps, the model is probably more likely to go through with bad decisions that were made 20 steps back.
The way Stavros does it, is Architect -> Dev -> Review. By splitting the task in three sessions, we get a fresh and shorter context for each task. At minimum skipping the thinking messages and intermediary tool output, should increase the chances of a better result.
Using different agent personas and models at least introduces variability at the token generation, whether it's good or bad, I do not know. As far as I know in general it's supposed to help.
Having the sessions communicate I think is a mistake, because you lose all of the benefits of cleaning up the context, and given the chattiness of LLMs you are probably going to fill up the context with multiple thinking rounds over the same message, one from the session that outputs the message and one from the session reading the message, you are probably going to have competing tool uses, each session using it's own tool calls to read the same content, it will probably be a huge mess.
The way I do it is I have a large session that I interact with and task with planning and agent spawning. I don't have dedicated personas or agents. The benefits the way I see them are I have a single session with an extensive context about what we are doing and then a dedicated task handler with a much more focused context.
What I have seen with my setup is, impressively good performance at the beginning that degrades as feedback and tweaks around work pile up.
 
 

https://news.ycombinator.com/vote?id=47441064&how=up&goto=item%3Fid%3D47394022
TimTheTinker
https://news.ycombinator.com/user?id=TimTheTinker
 
3 months ago
https://news.ycombinator.com/item?id=47441064
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47410923
 | 
next
https://news.ycombinator.com/item?id=47394022#47402505
 
[–]
javascript:void(0)
Framing LLM use for dev tasks as "narrative" is powerful.
If you want specific, empirical, targeted advice or work from an LLM, you have to frame the conversation correctly. "You are a tenured Computer Science professor agent being consulted on a data structure problem" goes a very long way.
Similarly, context window length and prior progress exerts significant pressure on how an LLM frames its work. At some point (often around 200k-400k tokens in), they seem to reach a "we're in the conclusion of this narrative" point and will sometimes do crazy stuff to reach whatever real or perceived goal there is.
 
 

https://news.ycombinator.com/vote?id=47402505&how=up&goto=item%3Fid%3D47394022
mikkupikku
https://news.ycombinator.com/user?id=mikkupikku
 
3 months ago
https://news.ycombinator.com/item?id=47402505
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
prev
https://news.ycombinator.com/item?id=47394022#47410923
 | 
next
https://news.ycombinator.com/item?id=47394022#47474487
 
[–]
javascript:void(0)
Probably the same reason it takes a team of developers and managers 6 months to write what one or two developers can do on their own in one week. The overhead caused by constant meetings and negotiations is massive.
 
 

https://news.ycombinator.com/vote?id=47463590&how=up&goto=item%3Fid%3D47394022
andrekandre
https://news.ycombinator.com/user?id=andrekandre
 
3 months ago
https://news.ycombinator.com/item?id=47463590
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402505
 | 
next
https://news.ycombinator.com/item?id=47394022#47474487
 
[–]
javascript:void(0)
  > The overhead caused by constant meetings and negotiations is massive.


this is my life ngl. i really wish these ai companies would work in automating away all this bullshit instead of just code code code
just the other day i was asked to prepare slides for a presentation about something everyone already knows (among many other useless side-work)... i feel like with "ai" in general we are applying bandages where my real problem is the big machine that gives me paper cuts all day...
 
 

https://news.ycombinator.com/vote?id=47474487&how=up&goto=item%3Fid%3D47394022
jimbokun
https://news.ycombinator.com/user?id=jimbokun
 
3 months ago
https://news.ycombinator.com/item?id=47474487
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402505
 | 
next
https://news.ycombinator.com/item?id=47394022#47402924
 
[–]
javascript:void(0)
Even with humans I've found full ownership of a project from architecture to implementation to deployment and operation, produces the best results.
Less context switching and communication overhead. Focus on well thought out and documented APIs to divide work across developers and support communication and collaboration .
 
 

https://news.ycombinator.com/vote?id=47402924&how=up&goto=item%3Fid%3D47394022
Miraste
https://news.ycombinator.com/user?id=Miraste
 
3 months ago
https://news.ycombinator.com/item?id=47402924
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
prev
https://news.ycombinator.com/item?id=47394022#47474487
 | 
next
https://news.ycombinator.com/item?id=47394022#47403325
 
[–]
javascript:void(0)
LLMs also don't have the primary advantage humans get from job separation, diverse perspectives. A council of Opuses are all exploring the exact same weights with the exact same hardware, unlike multiple humans with unique brains and memories. Even with different ones, Codex 5.3 is far more similar to Opus than any two humans are to each other. Telling an Opus agent to focus on security puts it in a different part of the weights, but it's the same graph-- it's not really more of an expert than a general Opus agent with a rule to maintain secure practices.
 
 

https://news.ycombinator.com/vote?id=47403352&how=up&goto=item%3Fid%3D47394022
visarga
https://news.ycombinator.com/user?id=visarga
 
3 months ago
https://news.ycombinator.com/item?id=47403352
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402924
 | 
next
https://news.ycombinator.com/item?id=47394022#47403325
 
[–]
javascript:void(0)
You can differentiate by context, one sees the work session, the other sees just the code. Same model, but different perspectives. Or by model, there are at least 7 decent models between the top 3 providers.
 
 

https://news.ycombinator.com/vote?id=47404680&how=up&goto=item%3Fid%3D47394022
Miraste
https://news.ycombinator.com/user?id=Miraste
 
3 months ago
https://news.ycombinator.com/item?id=47404680
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403352
 | 
next
https://news.ycombinator.com/item?id=47394022#47403325
 
[–]
javascript:void(0)
I know, but none of those is nearly as much of a difference as another human looking at code. The top models have such overlapping training data they sometimes identify as each other.
 
 

https://news.ycombinator.com/vote?id=47403325&how=up&goto=item%3Fid%3D47394022
visarga
https://news.ycombinator.com/user?id=visarga
 
3 months ago
https://news.ycombinator.com/item?id=47403325
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402924
 | 
next
https://news.ycombinator.com/item?id=47394022#47396432
 
[–]
javascript:void(0)
An ensemble can spot more bugs / fixes than a single model. I run claude, codex and gemini in parallel for reviews.
 
 
3 months ago
https://news.ycombinator.com/item?id=47396432
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396198
 | 
prev
https://news.ycombinator.com/item?id=47394022#47403325
 | 
next
https://news.ycombinator.com/item?id=47394022#47400526
 
[4 more]
javascript:void(0)
[dead]
 
 

https://news.ycombinator.com/vote?id=47410029&how=up&goto=item%3Fid%3D47394022
theshrike79
https://news.ycombinator.com/user?id=theshrike79
 
3 months ago
https://news.ycombinator.com/item?id=47410029
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396432
 | 
next
https://news.ycombinator.com/item?id=47394022#47405564
 
[–]
javascript:void(0)
Agentic pipelines and systems fall into the same issues as humans who work together, mostly communication.
It's not like they can dump their full context to the "manager" agent, they need to condense stuff, which will result in misinterpreted information or missing information on decisions down the line.
IMO this was more relevant when agents had limited context windows
 
 

https://news.ycombinator.com/vote?id=47411469&how=up&goto=item%3Fid%3D47394022
AtreusS
https://news.ycombinator.com/user?id=AtreusS
 
3 months ago
https://news.ycombinator.com/item?id=47411469
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47410029
 | 
next
https://news.ycombinator.com/item?id=47394022#47405564
 
[–]
javascript:void(0)
This I believe is true. Have been working on an Agentic architecture and whenever there was a new requirement the simple workflow was to create an specific agent for that. Earlier the context windows were small and this was the default solution. Overtime our total agents have become vast that it is a headache to maintain and debug.
 
 

https://news.ycombinator.com/vote?id=47405564&how=up&goto=item%3Fid%3D47394022
BloondAndDoom
https://news.ycombinator.com/user?id=BloondAndDoom
 
3 months ago
https://news.ycombinator.com/item?id=47405564
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396432
 | 
prev
https://news.ycombinator.com/item?id=47394022#47410029
 | 
next
https://news.ycombinator.com/item?id=47394022#47400526
 
[–]
javascript:void(0)
Absolutely works with frontier models. What do you think about smaller models in these pipelines? That's literally what I'm working on, with qwen3.5-27b and im splitting the task to 4 steps and not sure if that's the way to go. Do you have any experience to share?
 
 

https://news.ycombinator.com/vote?id=47400526&how=up&goto=item%3Fid%3D47394022
moduspol
https://news.ycombinator.com/user?id=moduspol
 
3 months ago
https://news.ycombinator.com/item?id=47400526
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396198
 | 
next
https://news.ycombinator.com/item?id=47394022#47396063
 
[–]
javascript:void(0)
To me, such techniques feel like temporary cudgels that may or may not even help that will be obsolete in 1-6 months.
This is similar to telling Claude Code to write its steps into a separate markdown file, or use separate agents to independently perform many tasks, or some of the other things that were commonly posted about 3-6+ months ago. Now Claude Code does that on its own if necessary, so it's probably a net negative to instruct it separately.
Some prompting techniques seem ageless (e.g. giving it a way to validate its output), but a lot of these feel like temporary scaffolding that I don't see a lot of value in building a workflow around.
 
 

https://news.ycombinator.com/vote?id=47402564&how=up&goto=item%3Fid%3D47394022
TheMuenster
https://news.ycombinator.com/user?id=TheMuenster
 
3 months ago
https://news.ycombinator.com/item?id=47402564
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400526
 | 
next
https://news.ycombinator.com/item?id=47394022#47396063
 
[–]
javascript:void(0)
Totally agree - the fundamental concept here of automatically improving context control when writing code is absolutely something that will be baked into agents in 6 months. The reason it hasn't yet is mainly because the improvements it makes seem to be very marginal.
You can contrast this to something like reasoning, which offered very large, very clear improvements in fundamental performance, and as a result was tackled very aggressively by all the labs. Or (like you mentioned) todo lists, which gave relatively small gains but were implemented relatively quickly. Automatic context control is just going to take more time to get it right, and the gains will be quite small.
 
 

https://news.ycombinator.com/vote?id=47403400&how=up&goto=item%3Fid%3D47394022
visarga
https://news.ycombinator.com/user?id=visarga
 
3 months ago
https://news.ycombinator.com/item?id=47403400
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402564
 | 
next
https://news.ycombinator.com/item?id=47394022#47396063
 
[–]
javascript:void(0)
Workflow matters too, how you organize your docs, work tasks, reviews. If you do it all by hand you spend a lot of time manually enforcing a process that can be automated.
I think task files with checkable gates are a very interesting animal - they carry intent, plan, work and reviews, at the end of work can become docs. Can be executed, but also passed as value, and reflect on themselves - so they sport homoiconicity and reflexion.
 
 

https://news.ycombinator.com/vote?id=47396063&how=up&goto=item%3Fid%3D47394022
kybernetikos
https://news.ycombinator.com/user?id=kybernetikos
 
3 months ago
https://news.ycombinator.com/item?id=47396063
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400526
 | 
next
https://news.ycombinator.com/item?id=47394022#47396875
 
[–]
javascript:void(0)
There's a lot of cargo culting, but it's inevitable in a situation like this where the truth is model dependent and changing the whole time and people have created companies on the premise they can teach you how to use ai well.
 
 

https://news.ycombinator.com/vote?id=47399547&how=up&goto=item%3Fid%3D47394022
_heimdall
https://news.ycombinator.com/user?id=_heimdall
 
3 months ago
https://news.ycombinator.com/item?id=47399547
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396063
 | 
next
https://news.ycombinator.com/item?id=47394022#47396875
 
[–]
javascript:void(0)
Its also inevitable given that we still don't even really know how these models work or what they do at inference time.
We know input/output pairs, when using a reasoning model we can see a separate stream of text that is supposedly insight into what the model is "thinking" during inference, and when using multiple agents we see what text they send to each other. That's it.
 
 

https://news.ycombinator.com/vote?id=47463606&how=up&goto=item%3Fid%3D47394022
andrekandre
https://news.ycombinator.com/user?id=andrekandre
 
3 months ago
https://news.ycombinator.com/item?id=47463606
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399547
 | 
next
https://news.ycombinator.com/item?id=47394022#47396875
 
[–]
javascript:void(0)
  > separate stream of text that is supposedly insight into what the model is "thinking" during inference


taking a look at those streams is almost disturbing and hilarious at the same time... like looking into the mind of a paranoiac.
 
 

https://news.ycombinator.com/vote?id=47396875&how=up&goto=item%3Fid%3D47394022
never_inline
https://news.ycombinator.com/user?id=never_inline
 
3 months ago
https://news.ycombinator.com/item?id=47396875
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396063
 | 
next
https://news.ycombinator.com/item?id=47394022#47395865
 
[–]
javascript:void(0)
I think this is just anthropomorphism. Sub agents make sense as a context saving mechanism.
Aider did an "architect-editor" split where architect is just a "programmer" who doesn't bother about formatting the changes as diff, then a weak model converts them into diffs and they got better results with it. This is nothing like human teams though.
 
 

https://news.ycombinator.com/vote?id=47402396&how=up&goto=item%3Fid%3D47394022
TheMuenster
https://news.ycombinator.com/user?id=TheMuenster
 
3 months ago
https://news.ycombinator.com/item?id=47402396
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396875
 | 
next
https://news.ycombinator.com/item?id=47394022#47395865
 
[–]
javascript:void(0)
Absolutely agree with this. The main reason for this improving performance is simply that the context is being better controlled, not that this approach is actually going going to yield better results fundamentally.
Some people have turned context control into hallucinated anthropomorphic frameworks (Gas Town being perhaps the best example). If that's how they prefer to mentally model context control, that's fine. But it's not the anthropomorphism that's helping here.
 
 

https://news.ycombinator.com/vote?id=47395865&how=up&goto=item%3Fid%3D47394022
jaredklewis
https://news.ycombinator.com/user?id=jaredklewis
 
3 months ago
https://news.ycombinator.com/item?id=47395865
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396875
 | 
next
https://news.ycombinator.com/item?id=47394022#47396548
 
[–]
javascript:void(0)
What's the evidence for anything software engineers use? Tests, type checkers, syntax highlighting, IDEs, code review, pair programming, and so on.
In my experience, evidence for the efficacy of software engineering practices falls into two categories:
the intuitions of developers, based in their experiences.
scientific studies, which are unconvincing. Some are unconvincing because they attempt to measure the productivity of working software engineers, which is difficult; you have to rely on qualitative measures like manager evaluations or quantitative but meaningless measures like LOC or tickets closed. Others are unconvincing because they instead measure the practice against some well defined task (like a coding puzzle) that is totally unlike actual software engineering.
Evidence for this LLM pattern is the same. Some developers have an intuition it works better.
 
 

https://news.ycombinator.com/vote?id=47395951&how=up&goto=item%3Fid%3D47394022
codemog
https://news.ycombinator.com/user?id=codemog
 
3 months ago
https://news.ycombinator.com/item?id=47395951
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395865
 | 
next
https://news.ycombinator.com/item?id=47394022#47395954
 
[–]
javascript:void(0)
My friend, there's tons of evidence of all that stuff you talked about in hundreds of papers on arxiv. But you dismiss it entirely in your second bullet point, so I'm not entirely sure what you expect.
 
 

https://news.ycombinator.com/vote?id=47399031&how=up&goto=item%3Fid%3D47394022
jaredklewis
https://news.ycombinator.com/user?id=jaredklewis
 
3 months ago
https://news.ycombinator.com/item?id=47399031
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395951
 | 
next
https://news.ycombinator.com/item?id=47394022#47395954
 
[–]
javascript:void(0)
I've read dozens of them and find them unconvincing for the reasons outlined. If you want a more specific critique, link a paper.
I personally like and use tests, formal verification, and so on. But the evidence for these methods are weak.
edit: To be clear, I am not ragging on the researchers. I think it's just kind of an inherently messy field with pretty much endless variables to control for and not a lot of good quantifiable metrics to rely on.
 
 

https://news.ycombinator.com/vote?id=47395954&how=up&goto=item%3Fid%3D47394022
thesz
https://news.ycombinator.com/user?id=thesz
 
3 months ago
https://news.ycombinator.com/item?id=47395954
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395865
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395951
 | 
next
https://news.ycombinator.com/item?id=47394022#47396026
 
[–]
javascript:void(0)
You can measure customer facing defects.
Also, lines of code is not completely meaningless metric. What one should measure is lines of code that is not verified by compiler. E.g., in C++ you cannot have unbalanced brackets or use incorrectly typed value, but you still may have off-by-one error.
Given all that, you can measure customer facing defect density and compare different tools, whether they are programming languages, IDEs or LLM-supported workflow.
 
 

https://news.ycombinator.com/vote?id=47400619&how=up&goto=item%3Fid%3D47394022
jaredklewis
https://news.ycombinator.com/user?id=jaredklewis
 
3 months ago
https://news.ycombinator.com/item?id=47400619
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395954
 | 
next
https://news.ycombinator.com/item?id=47394022#47396192
 
[–]
javascript:void(0)
It's not the worst metric ever, but is the study in question observational or controlling the problem?
My issue with the observational studies is that basically everything is uncontrolled. Maybe the IDEs are causing less defects. Or maybe some problems are just harder and more defect prone than others. Maybe some teams are better managed or get clearer specifications and so on. Maybe some organizations are better at recording defects and can't be fairly compared with organizations that just report less. The studies don't ever reach the scale where you become confident these things wash out.
If they control the problem, most of those issues are eliminated (though not all, for example the experience and education of the participants still needs to be controlled), but now you are left wondering how well the findings transfer from the toy projects in the experiment into real life.
But finally, it's still not a perfect metric because not all defects are equal, right? What if some tool/process helped you reduce a large number of mostly cosmetic defects, but increases the occurrence of catastrophic defects?
re: LoC, there's some signal here, but it's such a noisy channel, I've never read a study that I thought put it to good use. Happy to have my mind changed if you have a link to one.
 
 

https://news.ycombinator.com/vote?id=47396192&how=up&goto=item%3Fid%3D47394022
codeflo
https://news.ycombinator.com/user?id=codeflo
 
3 months ago
https://news.ycombinator.com/item?id=47396192
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395954
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400619
 | 
next
https://news.ycombinator.com/item?id=47394022#47396026
 
[–]
javascript:void(0)
Comparing lines of code can be meaningful, mostly if you can keep a lot of other things constant, like coding style, developer experience, domain, tech stack. There are many style differences between LLM and human generated code, so that I expect 1000 lines of LLM code do a lot less than 1000 lines of human code, even in the exact same codebase.
 
 

https://news.ycombinator.com/vote?id=47396026&how=up&goto=item%3Fid%3D47394022
jacquesm
https://news.ycombinator.com/user?id=jacquesm
 
3 months ago
https://news.ycombinator.com/item?id=47396026
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395865
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395954
 | 
next
https://news.ycombinator.com/item?id=47394022#47396149
 
[–]
javascript:void(0)
The proper metric is the defect escape rate.
 
 

https://news.ycombinator.com/vote?id=47396069&how=up&goto=item%3Fid%3D47394022
exidex
https://news.ycombinator.com/user?id=exidex
 
3 months ago
https://news.ycombinator.com/item?id=47396069
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396026
 | 
next
https://news.ycombinator.com/item?id=47394022#47396149
 
[–]
javascript:void(0)
Now you have to count defects
 
 

https://news.ycombinator.com/vote?id=47396087&how=up&goto=item%3Fid%3D47394022
jacquesm
https://news.ycombinator.com/user?id=jacquesm
 
3 months ago
https://news.ycombinator.com/item?id=47396087
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396069
 | 
next
https://news.ycombinator.com/item?id=47394022#47396149
 
[–]
javascript:void(0)
You have to do that anyway, and in fact you probably were already doing that. If you do not track this then you are leaving a lot on the table.
 
 

https://news.ycombinator.com/vote?id=47397343&how=up&goto=item%3Fid%3D47394022
exidex
https://news.ycombinator.com/user?id=exidex
 
3 months ago
https://news.ycombinator.com/item?id=47397343
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396087
 | 
next
https://news.ycombinator.com/item?id=47394022#47396149
 
[–]
javascript:void(0)
I was more thinking in terms of creating a benchmark which would optimized during training. For regular projects, I agree, you have to count that anyway
 
 

https://news.ycombinator.com/vote?id=47396149&how=up&goto=item%3Fid%3D47394022
slopinthebag
https://news.ycombinator.com/user?id=slopinthebag
 
3 months ago
https://news.ycombinator.com/item?id=47396149
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395865
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396026
 | 
next
https://news.ycombinator.com/item?id=47394022#47396548
 
[–]
javascript:void(0)
Most developer intuitions are wrong.
See: OOP
 
 

https://news.ycombinator.com/vote?id=47396491&how=up&goto=item%3Fid%3D47394022
vbezhenar
https://news.ycombinator.com/user?id=vbezhenar
 
3 months ago
https://news.ycombinator.com/item?id=47396491
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396149
 | 
next
https://news.ycombinator.com/item?id=47394022#47396548
 
[–]
javascript:void(0)
Intuition is subjective. It's hard to convert subjective experience to objective facts.
 
 

https://news.ycombinator.com/vote?id=47396739&how=up&goto=item%3Fid%3D47394022
tomgp
https://news.ycombinator.com/user?id=tomgp
 
3 months ago
https://news.ycombinator.com/item?id=47396739
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396491
 | 
next
https://news.ycombinator.com/item?id=47394022#47396548
 
[–]
javascript:void(0)
That's what science is though * our intuition/ hunch/ guess is X * now let's design an experiment which can falsify X
 
 

https://news.ycombinator.com/vote?id=47396548&how=up&goto=item%3Fid%3D47394022
lbreakjai
https://news.ycombinator.com/user?id=lbreakjai
 
3 months ago
https://news.ycombinator.com/item?id=47396548
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395865
 | 
next
https://news.ycombinator.com/item?id=47394022#47395952
 
[–]
javascript:void(0)
The different models is a big one. In my workflow, I've got opus doing the deep thinking, and kimi doing the implementation. It helps manage costs.
Sample size of one, but I found it helps guard against the model drifting off. My different agents have different permissions. The worker can not edit the plan. The QA or planner can't modify the code. This is something I sometimes catch codex doing, modifying unrelated stuff while working.
 
 

https://news.ycombinator.com/vote?id=47396771&how=up&goto=item%3Fid%3D47394022
sigbottle
https://news.ycombinator.com/user?id=sigbottle
 
3 months ago
https://news.ycombinator.com/item?id=47396771
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396548
 | 
next
https://news.ycombinator.com/item?id=47394022#47395952
 
[–]
javascript:void(0)
I recently had a horrible misalignment issue with a 1 agent loop. I've never done RL research, but this kind of shit was the exact kind of thing I heard about in RL papers - shimming out what should be network tests by echoing "completed" with the 'verification' being grepping for "completed", and then actually going and marking that off as "done" in the plan doc...
Admittedly I was using gsdv2; I've never had this issue with codex and claude. Sure, some RL hacking such as silent defaults or overly defensive code for no reason. Nothing that seemed basically actively malicious such as the above though. Still, gsdv2 is a 1-agent scaffolding pipeline.
I think the issue is that these 1-agent pipelines are "YOU MUST PLAN IMPLEMENT VERIFY EVERYTHING YOURSELF!" and extremely aggressive language like that. I think that kind of language coerces the agent to do actively malicious hacks, especially if the pipeline itself doesn't see "I am blocked, shifting tasks" as a valid outcome.
1-agent pipelines are like a horrible horrible DFS. I still somewhat function when I'm in DFS mode, but that's because I have longer memory than a goldfish.
 
 

https://news.ycombinator.com/vote?id=47395952&how=up&goto=item%3Fid%3D47394022
jumploops
https://news.ycombinator.com/user?id=jumploops
 
3 months ago
https://news.ycombinator.com/item?id=47395952
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396548
 | 
next
https://news.ycombinator.com/item?id=47394022#47395958
 
[–]
javascript:void(0)
After "fully vibecoding" (i.e. I don't read the code) a few projects, the important aspect of this isn't so much the different agents, but the development process.
Ironically, it resembles waterfall much more so than agile, in that you spec everything (tech stack, packages, open questions, etc.) up front and then pass that spec to an implementation stage. From here you either iterate, or create a PR.
Even with agile, it's similar, in that you have some high-level customer need, pass that to the dev team, and then pass their output to QA.
What's the evidence? Admittedly anecdotal, as I'm not sure of any benchmarks that test this thoroughly, but in my experience this flow helps avoid the pitfall of slop that occurs when you let the agent run wild until it's "done."
"Done" is often subjective, and you can absolutely reach a done state just with vanilla codex/claude code.
Note: I don't use a hierarchy of agents, but my process follows a similar design/plan -> implement -> debug iteration flow.
 
 

https://news.ycombinator.com/vote?id=47395958&how=up&goto=item%3Fid%3D47394022
totomz
https://news.ycombinator.com/user?id=totomz
 
3 months ago
https://news.ycombinator.com/item?id=47395958
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395952
 | 
next
https://news.ycombinator.com/item?id=47394022#47395973
 
[–]
javascript:void(0)
I think the splitting make sense to give more specific prompts and isolated context to different agents. The "architect" does not need to have the code style guide in its context, that actually could be misleading and contains information that drives it away from the architecture
 
 

https://news.ycombinator.com/vote?id=47396214&how=up&goto=item%3Fid%3D47394022
ako
https://news.ycombinator.com/user?id=ako
 
3 months ago
https://news.ycombinator.com/item?id=47396214
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395958
 | 
next
https://news.ycombinator.com/item?id=47394022#47395973
 
[–]
javascript:void(0)
Wouldn't skills already solve this? A harness can start a new agent with a specific skill if it thinks that makes sense.
 
 

https://news.ycombinator.com/vote?id=47395973&how=up&goto=item%3Fid%3D47394022
est
https://news.ycombinator.com/user?id=est
 
3 months ago
https://news.ycombinator.com/item?id=47395973
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395958
 | 
next
https://news.ycombinator.com/item?id=47394022#47395789
 
[–]
javascript:void(0)
There's a 63 pages paper with mathematical proof if you really into this.
https://arxiv.org/html/2601.03220v1
https://arxiv.org/html/2601.03220v1
My takeaway: AI learns from real-world texts, and real-world corpus are used to have a role split of architect/developer/reviewer
 
 

https://news.ycombinator.com/vote?id=47396131&how=up&goto=item%3Fid%3D47394022
codeflo
https://news.ycombinator.com/user?id=codeflo
 
3 months ago
https://news.ycombinator.com/item?id=47396131
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395973
 | 
next
https://news.ycombinator.com/item?id=47394022#47396153
 
[–]
javascript:void(0)
I'm confused. The linked paper is not primarily a mathematics paper, and to the extent that it is, proves nothing remotely like the question that was asked.
 
 

https://news.ycombinator.com/vote?id=47396790&how=up&goto=item%3Fid%3D47394022
est
https://news.ycombinator.com/user?id=est
 
3 months ago
https://news.ycombinator.com/item?id=47396790
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396131
 | 
next
https://news.ycombinator.com/item?id=47394022#47396213
 
[–]
javascript:void(0)
I am not an expert, but by my understanding, the paper prooves that a computationally bounded "observer" may fail to extract all the structure present in the model in one computation. aka you can't always one-shot perfect code.
However, arrange many pipelines of roles "observers" may gradually get you there
 
 

https://news.ycombinator.com/vote?id=47396213&how=up&goto=item%3Fid%3D47394022
cbg0
https://news.ycombinator.com/user?id=cbg0
 
3 months ago
https://news.ycombinator.com/item?id=47396213
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396131
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396790
 | 
next
https://news.ycombinator.com/item?id=47394022#47396153
 
[–]
javascript:void(0)
Perhaps this paper might be more relevant with regards to multi-agent pipelines 
https://arxiv.org/html/2404.04834v4
https://arxiv.org/html/2404.04834v4
 
 

https://news.ycombinator.com/vote?id=47396153&how=up&goto=item%3Fid%3D47394022
anhner
https://news.ycombinator.com/user?id=anhner
 
3 months ago
https://news.ycombinator.com/item?id=47396153
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395973
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396131
 | 
next
https://news.ycombinator.com/item?id=47394022#47395789
 
[–]
javascript:void(0)
Can you explain how this paper is relevant to the comment you replied to?
 
 

https://news.ycombinator.com/vote?id=47395789&how=up&goto=item%3Fid%3D47394022
troupo
https://news.ycombinator.com/user?id=troupo
 
3 months ago
https://news.ycombinator.com/item?id=47395789
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395973
 | 
next
https://news.ycombinator.com/item?id=47394022#47405533
 
[–]
javascript:void(0)
I think the author admits that it doesn't, doesn't realise it and just goes on:
--- start quote ---
On projects where I have no understanding of the underlying technology (e.g. mobile apps), the code still quickly becomes a mess of bad choices. However, on projects where I know the technologies used well (e.g. backend apps, though not necessarily in Python), this hasn't happened yet
--- end quote ---
 
 

https://news.ycombinator.com/vote?id=47405533&how=up&goto=item%3Fid%3D47394022
BloondAndDoom
https://news.ycombinator.com/user?id=BloondAndDoom
 
3 months ago
https://news.ycombinator.com/item?id=47405533
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395789
 | 
next
https://news.ycombinator.com/item?id=47394022#47397321
 
[–]
javascript:void(0)
I think many people don't understand that you can just say check again to the model you use and it will just find bugs, repeat it until there are no bugs. Sounds stupid but it works. It's intuitive to assume another will help more and better review but yeah I don't know.
Also in my experience codex always writes better code and more sensible than Claude (but slower)
 
 

https://news.ycombinator.com/vote?id=47397321&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397321
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47405533
 | 
next
https://news.ycombinator.com/item?id=47394022#47397366
 
[–]
javascript:void(0)
Nitpick: I don't think architect is a good name for this role. It's more of a technical project kickoff function: these are the things we anticipate we need to do, these are the risks etc.
I do find it different from the thinking that one does when writing code so I'm not surprised to find it useful to separate the step into different context, with different tools.
Is it useful to tell something “you are an architect?” I doubt it but I don't have proof apart from getting reasonable results without it.
With human teams I expect every developer to learn how to do this, for their own good and to prevent bottlenecks on one person. I usually find this to be a signal of good outcomes and so I question the wisdom of biasing the LLM towards training data that originates in spaces where “architect” is a job title.
 
 

https://news.ycombinator.com/vote?id=47397366&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397366
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397321
 | 
next
https://news.ycombinator.com/item?id=47394022#47481591
 
[–]
javascript:void(0)
It's not about splitting for quality, it's about cost optimisation (Sonnet implements, which is cheaper). The quality comes with the reviewers.
Notice that I didn't split out any roles that use the same model, as I don't think it makes sense to use new roles just to use roles.
 
 

https://news.ycombinator.com/vote?id=47399179&how=up&goto=item%3Fid%3D47394022
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47399179
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397366
 | 
next
https://news.ycombinator.com/item?id=47394022#47481591
 
[–]
javascript:void(0)
Is Sonnet good enough for, hey I have this bug (it's easy to describe and identify), now go fix it?
 
 

https://news.ycombinator.com/vote?id=47481591&how=up&goto=item%3Fid%3D47394022
rayrayf
https://news.ycombinator.com/user?id=rayrayf
 
3 months ago
https://news.ycombinator.com/item?id=47481591
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397366
 | 
next
https://news.ycombinator.com/item?id=47394022#47409741
 
[–]
javascript:void(0)
And also the sales>product>engineering loop. If one can - with all the context - accomplish what the traditional loop is meant to (explore validity, feasibility, and strategic or revenue impact) how do all our jobs change. Know this isn't new but the organizational dynamics are fun to dive in to.
 
 

https://news.ycombinator.com/vote?id=47409741&how=up&goto=item%3Fid%3D47394022
avnsv
https://news.ycombinator.com/user?id=avnsv
 
3 months ago
https://news.ycombinator.com/item?id=47409741
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47481591
 | 
next
https://news.ycombinator.com/item?id=47394022#47397185
 
[–]
javascript:void(0)
Using different models for the architect and developer roles isn't necessarily better because each model's solution lives in a different vector space. So when the architect (model A) produces a solution, the developer (model B) will implement the solution based on a different "mental map". So you may end up with a gap.
I normally use the same model (e.g. Codex 5.3) for planning, implementation, and testing, and then have another model (e.g. Opus 4.6) review the result to identify any issues and edge cases the developer didn't foresee and the tester didn't spot. Then I take the output and pass it back to the developer model to have it fix the issues.
 
 

https://news.ycombinator.com/vote?id=47397185&how=up&goto=item%3Fid%3D47394022
dep_b
https://news.ycombinator.com/user?id=dep_b
 
3 months ago
https://news.ycombinator.com/item?id=47397185
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47409741
 | 
next
https://news.ycombinator.com/item?id=47394022#47396433
 
[–]
javascript:void(0)
“…if you give it good context…” that's what the architect session is for basically. You throw around ideas and store the direction you want to go.
Then you execute it with a clean context.
Clean context is needed for maximum performance while not remembering implementation dead ends you already discarded
 
 

https://news.ycombinator.com/vote?id=47396433&how=up&goto=item%3Fid%3D47394022
Havoc
https://news.ycombinator.com/user?id=Havoc
 
3 months ago
https://news.ycombinator.com/item?id=47396433
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397185
 | 
next
https://news.ycombinator.com/item?id=47394022#47396290
 
[–]
javascript:void(0)
Yeah always seemed pretty sus to me to.
At the same time I can see a more linear approach doing similar. Like when I ask for an implementation plan that is functional not all that different from an architect agent even if not wrapped in such a persona
 
 

https://news.ycombinator.com/vote?id=47399669&how=up&goto=item%3Fid%3D47394022
_heimdall
https://news.ycombinator.com/user?id=_heimdall
 
3 months ago
https://news.ycombinator.com/item?id=47399669
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396433
 | 
next
https://news.ycombinator.com/item?id=47394022#47396290
 
[–]
javascript:void(0)
Once model providers started releasing "reasoning" models, and later roles and multi-agent systems, it seemed pretty clear to me they are just automating the process of prompt engineering.
They track everything we all do in a chat, then learn the patterns that work and build them in. Rinse and repeat.
 
 

https://news.ycombinator.com/vote?id=47396290&how=up&goto=item%3Fid%3D47394022
Tarq0n
https://news.ycombinator.com/user?id=Tarq0n
 
3 months ago
https://news.ycombinator.com/item?id=47396290
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396433
 | 
next
https://news.ycombinator.com/item?id=47394022#47396175
 
[–]
javascript:void(0)
In machine learning, ensembles of weaker models can outperform a single strong model because they have different distributions of errors. Machine learning models tend to have more pronounced bias in their design than LLMs though.
So to me it makes sense to have models with different architecture/data/post training refine each other's answers. I have no idea whether adding the personas would be expected to make a difference though.
 
 

https://news.ycombinator.com/vote?id=47396175&how=up&goto=item%3Fid%3D47394022
hakanderyal
https://news.ycombinator.com/user?id=hakanderyal
 
3 months ago
https://news.ycombinator.com/item?id=47396175
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396290
 | 
next
https://news.ycombinator.com/item?id=47394022#47395941
 
[–]
javascript:void(0)
One added benefit is it allows you to throw more tokens to the problem. It's the most impactful benefit even.
Context & how LLMs work requires this.
From my experience no frontier model produces bug free & error free code with the first pass, no matter how much planning you do beforehand.
With 3 tiers, you spend your token & context budget in full in 3 phases. Plan, implement, review.
If the feature is complex, multiple round of reviews, from scratch.
It works.
 
 

https://news.ycombinator.com/vote?id=47395941&how=up&goto=item%3Fid%3D47394022
palmotea
https://news.ycombinator.com/user?id=palmotea
 
3 months ago
https://news.ycombinator.com/item?id=47395941
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396175
 | 
next
https://news.ycombinator.com/item?id=47394022#47397040
 
[–]
javascript:void(0)
Using multiple agents in different roles seems like it'd guard against one model/agent going off the rails with a hallucination or something.
 
 

https://news.ycombinator.com/vote?id=47397040&how=up&goto=item%3Fid%3D47394022
jwilliams
https://news.ycombinator.com/user?id=jwilliams
 
3 months ago
https://news.ycombinator.com/item?id=47397040
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395941
 | 
next
https://news.ycombinator.com/item?id=47394022#47396160
 
[–]
javascript:void(0)
If you know what you need, my experience is that a well-formed single-prompt that fits the context gives the best results (and fastest).
If you're exploring an idea or iterating, the roles can help break it down and understand your own requirements. Personally I do that “away” from the code though.
 
 

https://news.ycombinator.com/vote?id=47396160&how=up&goto=item%3Fid%3D47394022
awesome_dude
https://news.ycombinator.com/user?id=awesome_dude
 
3 months ago
https://news.ycombinator.com/item?id=47396160
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397040
 | 
next
https://news.ycombinator.com/item?id=47394022#47396591
 
[–]
javascript:void(0)
I have been using different models for the same role - asking (say) Gemini, then, if I don't like the answer asking Claude, then telling each LLM what the other one said to see where it all ends up
Well I was until the session limit for a week kicked in.
 
 

https://news.ycombinator.com/vote?id=47396591&how=up&goto=item%3Fid%3D47394022
fleetfox
https://news.ycombinator.com/user?id=fleetfox
 
3 months ago
https://news.ycombinator.com/item?id=47396591
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396160
 | 
next
https://news.ycombinator.com/item?id=47394022#47396653
 
[–]
javascript:void(0)
Even for reducing the context size it's probably worth it. If you have to go back back and forth on both problem and implementation even with these new "large" contexts if find quality degrading pretty fast.
 
 

https://news.ycombinator.com/vote?id=47396653&how=up&goto=item%3Fid%3D47394022
luxcem
https://news.ycombinator.com/user?id=luxcem
 
3 months ago
https://news.ycombinator.com/item?id=47396653
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396591
 | 
next
https://news.ycombinator.com/item?id=47394022#47405174
 
[–]
javascript:void(0)
The agent "personalities" and LLM workflow really looks like cargo-cult behavior. It looks like it should be better but we don't really have data backing this.
 
 

https://news.ycombinator.com/vote?id=47405174&how=up&goto=item%3Fid%3D47394022
xnx
https://news.ycombinator.com/user?id=xnx
 
3 months ago
https://news.ycombinator.com/item?id=47405174
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396653
 | 
next
https://news.ycombinator.com/item?id=47394022#47399670
 
[–]
javascript:void(0)
We are at the horseless carriage stage where people are recreating the old system without considering if it is necessary.
 
 

https://news.ycombinator.com/vote?id=47399670&how=up&goto=item%3Fid%3D47394022
hansonkd
https://news.ycombinator.com/user?id=hansonkd
 
3 months ago
https://news.ycombinator.com/item?id=47399670
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47405174
 | 
next
https://news.ycombinator.com/item?id=47394022#47395844
 
[–]
javascript:void(0)
Any of these abstractions are just temporary.
 
 

https://news.ycombinator.com/vote?id=47395844&how=up&goto=item%3Fid%3D47394022
imiric
https://news.ycombinator.com/user?id=imiric
 
3 months ago
https://news.ycombinator.com/item?id=47395844
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395680
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399670
 | 
next
https://news.ycombinator.com/item?id=47394022#47394537
 
[–]
javascript:void(0)
Evidence? My friend, most of the practices in this field are promoted and adopted based on hand-waving, feelings, and anecdata from influencers.
Maybe you should write and share your own article to counter this one.
 
 

https://news.ycombinator.com/vote?id=47395923&how=up&goto=item%3Fid%3D47394022
z3t4
https://news.ycombinator.com/user?id=z3t4
 
3 months ago
https://news.ycombinator.com/item?id=47395923
 | 
root
https://news.ycombinator.com/item?id=47394022#47395680
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395844
 | 
next
https://news.ycombinator.com/item?id=47394022#47394537
 
[–]
javascript:void(0)
Also if something is fun, we prefer to to it that way instead of the boring way. Then it depends on how many mines you step on, after a while you try to avoid the mines. That's when your productivity goes down radically. If we see something shiny we'll happily run over the minefield again though.
 
 

https://news.ycombinator.com/vote?id=47394537&how=up&goto=item%3Fid%3D47394022
christofosho
https://news.ycombinator.com/user?id=christofosho
 
3 months ago
https://news.ycombinator.com/item?id=47394537
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395680
 | 
next
https://news.ycombinator.com/item?id=47394022#47396488
 
[–]
javascript:void(0)
I like reading these types of breakdowns. Really gives you ideas and insight into how others are approaching development with agents. I'm surprised the author hasn't broken down the developer agent persona into smaller subagents. There is a lot of context used when your agent needs to write in a larger breadth of code areas (i.e. database queries, tests, business logic, infrastructure, the general code skeleton). I've also read
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
 that having a researcher and then a planner helps with context management in the pre-dev stage as well. I like his use of multiple reviewers, and am similarly surprised that they aren't refined into specialized roles.
I'll admit to being a "one prompt to rule them all" developer, and will not let a chat go longer than the first input I give. If mistakes are made, I fix the system prompt or the input prompt and try again. And I make sure the work is broken down as much as possible. That means taking the time to do some discovery before I hit send.
Is anyone else using many smaller specific agents? What types of patterns are you employing? TIA
https://github.com/humanlayer/advanced-context-engineering-f...
https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md
 
 

https://news.ycombinator.com/vote?id=47394811&how=up&goto=item%3Fid%3D47394022
marcus_holmes
https://news.ycombinator.com/user?id=marcus_holmes
 
3 months ago
https://news.ycombinator.com/item?id=47394811
 | 
parent
https://news.ycombinator.com/item?id=47394022#47394537
 | 
next
https://news.ycombinator.com/item?id=47394022#47397548
 
[–]
javascript:void(0)
that reference you give is pretty dated now, based on a talk from August which is the Beforetimes of the newer models that have given such a step change in productivity.
The key change I've found is really around orchestration - as TFA says, you don't run the prompt yourself. The orchestrator runs the whole thing. It gets you to talk to the architect/planner, then the output of that plan is sent to another agent, automatically. In his case he's using an architect, a developer, and some reviewers. I've been using a Superpowers-based [0] orchestration system, which runs a brainstorm, then a design plan, then an implementation plan, then some devs, then some reviewers, and loops back to the implementation plan to check progress and correctness.
It's actually fun. I've been coding for 40+ years now, and I'm enjoying this :)
[0] 
https://github.com/obra/superpowers
https://github.com/obra/superpowers
 
 

https://news.ycombinator.com/vote?id=47395049&how=up&goto=item%3Fid%3D47394022
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47395049
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47394811
 | 
next
https://news.ycombinator.com/item?id=47394022#47397548
 
[–]
javascript:void(0)
Can you bolt superpowers onto an existing project so that it uses the approach going forward (I'm using Opencode), or would that get too messy?
 
 

https://news.ycombinator.com/vote?id=47395746&how=up&goto=item%3Fid%3D47394022
eclipxe
https://news.ycombinator.com/user?id=eclipxe
 
3 months ago
https://news.ycombinator.com/item?id=47395746
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395049
 | 
next
https://news.ycombinator.com/item?id=47394022#47406851
 
[–]
javascript:void(0)
Yes. But gsd is even better - especially gsd2
 
 

https://news.ycombinator.com/vote?id=47406858&how=up&goto=item%3Fid%3D47394022
marcus_holmes
https://news.ycombinator.com/user?id=marcus_holmes
 
3 months ago
https://news.ycombinator.com/item?id=47406858
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395746
 | 
next
https://news.ycombinator.com/item?id=47394022#47406851
 
[–]
javascript:void(0)
looks interesting, thanks for the tip :)
 
 

https://news.ycombinator.com/vote?id=47406851&how=up&goto=item%3Fid%3D47394022
marcus_holmes
https://news.ycombinator.com/user?id=marcus_holmes
 
3 months ago
https://news.ycombinator.com/item?id=47406851
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395049
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395746
 | 
next
https://news.ycombinator.com/item?id=47394022#47397548
 
[–]
javascript:void(0)
These are just skills, so you can add the skills to your setup and start using them whenever you like.
 
 

https://news.ycombinator.com/vote?id=47413444&how=up&goto=item%3Fid%3D47394022
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47413444
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47406851
 | 
next
https://news.ycombinator.com/item?id=47394022#47397548
 
[–]
javascript:void(0)
Thanks
 
 

https://news.ycombinator.com/vote?id=47397548&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397548
 | 
parent
https://news.ycombinator.com/item?id=47394022#47394537
 | 
prev
https://news.ycombinator.com/item?id=47394022#47394811
 | 
next
https://news.ycombinator.com/item?id=47394022#47396488
 
[–]
javascript:void(0)
I don't think that splitting into subagents that use the same model will really help. I need to clarify this in the post, but the split is 1) so I can use Sonnet to code and save on some tokens and 2) so I can get other models to review, to get a different perspective.
It seems to me that splitting into subagents that use the same model is kind of like asking a person to wear three different hats and do three different parts of the job instead of just asking them to do it all with one hat. You're likely to get similar results.
 
 

https://news.ycombinator.com/vote?id=47397677&how=up&goto=item%3Fid%3D47394022
chriswarbo
https://news.ycombinator.com/user?id=chriswarbo
 
3 months ago
https://news.ycombinator.com/item?id=47397677
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397548
 | 
next
https://news.ycombinator.com/item?id=47394022#47396488
 
[–]
javascript:void(0)
I'm considering using subagents, as a way to manage context and delegate "simple" tasks to cheaper models (if you want to see tokens burn, watch Opus try fixing a misplaced ')' in a Lisp file!).
I see what you mean w.r.t. different hats; but is it useful to have different tools available? For example, a "planner" having Web access and read-only file access, versus a "developer" having write access to files but no Web access?
 
 

https://news.ycombinator.com/vote?id=47397779&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397779
 | 
root
https://news.ycombinator.com/item?id=47394022#47394537
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397677
 | 
next
https://news.ycombinator.com/item?id=47394022#47396488
 
[–]
javascript:void(0)
Yes, if you want to separate capabilities, definitely.
 
 

https://news.ycombinator.com/vote?id=47396488&how=up&goto=item%3Fid%3D47394022
lbreakjai
https://news.ycombinator.com/user?id=lbreakjai
 
3 months ago
https://news.ycombinator.com/item?id=47396488
 | 
prev
https://news.ycombinator.com/item?id=47394022#47394537
 | 
next
https://news.ycombinator.com/item?id=47394022#47400459
 
[–]
javascript:void(0)
It's interesting to see some patterns starting to emerge. Over time, I ended up with a similar workflow. Instead of using plan files within the repository, I'm using notion as the memory and source of truth.
My "thinker" agent will ask questions, explore, and refine. It will write a feature page in notion, and split the implementation into tasks in a kanban board, for an "executor" to pick up, implement, and pass to a QA agent, which will either flag it or move it to human review.
I really love it. All of our other documentation lives in notion, so I can easily reference and link business requirements. I also find it much easier to make sense of the steps by checking the tickets on the board rather than in a file.
Reviewing is simpler too. I can pick the ticket in the human review column, read the requirements again, check the QA comments, and then look at the code. Had a lot of fun playing with it yesterday, and I shared it here:
https://github.com/marcosloic/notion-agent-hive
https://github.com/marcosloic/notion-agent-hive
 
 

https://news.ycombinator.com/vote?id=47396572&how=up&goto=item%3Fid%3D47394022
Cthulhu_
https://news.ycombinator.com/user?id=Cthulhu_
 
3 months ago
https://news.ycombinator.com/item?id=47396572
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396488
 | 
next
https://news.ycombinator.com/item?id=47394022#47400459
 
[–]
javascript:void(0)
No criticism or anything, but it really does feel / sound like you (and others who embraced LLMs and agentic coding) aspire to be more of a product manager than a coder. Thing is, a "real" PM comes with a lot more requirements and there's less demand for them - more requirements in that you need to be a people person and willing to spend at least half your time in meetings, and less demand because one PM will organize the work for half a dozen developers (minimum).
Some people say LLM assisted coding will cost a lot of developers' jobs, but posts like this imply it'll cost (solve?) a lot of management / overhead too.
Mind you I've always thought project managers are kinda wasteful, as a software developer I'd love for Someone Else to just curate a list of tasks and their requirements / acceptance criteria. But unfortunately that's not the reality and it's often up to the developers themselves to create the tasks and fill them in, then execute them. Which of course begs the question, why do we still have a PM?
(the above is anecdotal and not a universal experience I'm sure. I hope.)
 
 

https://news.ycombinator.com/vote?id=47397025&how=up&goto=item%3Fid%3D47394022
lbreakjai
https://news.ycombinator.com/user?id=lbreakjai
 
3 months ago
https://news.ycombinator.com/item?id=47397025
 | 
root
https://news.ycombinator.com/item?id=47394022#47396488
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396572
 | 
next
https://news.ycombinator.com/item?id=47394022#47397930
 
[–]
javascript:void(0)
I worked with some excellent PMs in the past, it's an entirely different skillset. This wasn't really meant to replace what they do. I really wanted something with which to work at feature-level. That is, after all the hard work of figuring out 
what
 to build has been done.
That's interesting. In every team I worked in, I always fought really hard against anyone but developers being able to write tickets on the board.
 
 

https://news.ycombinator.com/vote?id=47397930&how=up&goto=item%3Fid%3D47394022
fooster
https://news.ycombinator.com/user?id=fooster
 
3 months ago
https://news.ycombinator.com/item?id=47397930
 | 
root
https://news.ycombinator.com/item?id=47394022#47396488
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396572
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397025
 | 
next
https://news.ycombinator.com/item?id=47394022#47402561
 
[–]
javascript:void(0)
“one PM will organize the work for half a dozen developer”
That isn't the job of a PM.
 
 

https://news.ycombinator.com/vote?id=47402561&how=up&goto=item%3Fid%3D47394022
adampunk
https://news.ycombinator.com/user?id=adampunk
 
3 months ago
https://news.ycombinator.com/item?id=47402561
 | 
root
https://news.ycombinator.com/item?id=47394022#47396488
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396572
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397930
 | 
next
https://news.ycombinator.com/item?id=47394022#47400459
 
[–]
javascript:void(0)
This seems more about how you view PMs than anything else.
 
 

https://news.ycombinator.com/vote?id=47400459&how=up&goto=item%3Fid%3D47394022
highfrequency
https://news.ycombinator.com/user?id=highfrequency
 
3 months ago
https://news.ycombinator.com/item?id=47400459
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396488
 | 
next
https://news.ycombinator.com/item?id=47394022#47397037
 
[–]
javascript:void(0)
This sounds sensible, but also makes me wonder how much time is actually being saved if implementing a "very specific feature or bugfix" still takes an hour of back and forth with an LLM.
Can't help but think that this is still just an awkward intermediate phase of development with adolescent LLMs where we need to think about implementation choices at all.
 
 

https://news.ycombinator.com/vote?id=47401437&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47401437
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400459
 | 
next
https://news.ycombinator.com/item?id=47394022#47397037
 
[–]
javascript:void(0)
Small features or bugfixes generally take a minute or two of conversation.
 
 

https://news.ycombinator.com/vote?id=47397037&how=up&goto=item%3Fid%3D47394022
miguelgrinberg
https://news.ycombinator.com/user?id=miguelgrinberg
 
3 months ago
https://news.ycombinator.com/item?id=47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400459
 | 
next
https://news.ycombinator.com/item?id=47394022#47395500
 
[–]
javascript:void(0)
It's always easier to blame the prompt and convince yourself that you have some sort of talent in how you talk to LLMs that other's don't.
In my experience the differences are mostly in how the code produced by the LLM is reviewed. Developers who have experience reviewing code are more likely to find problems immediately and complain they aren't getting great results without a lot of hand holding. And those who rarely or never reviewed code from other developers are invariably going to miss stuff and rate the output they get higher.
 
 

https://news.ycombinator.com/vote?id=47397983&how=up&goto=item%3Fid%3D47394022
zackify
https://news.ycombinator.com/user?id=zackify
 
3 months ago
https://news.ycombinator.com/item?id=47397983
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
next
https://news.ycombinator.com/item?id=47394022#47397738
 
[–]
javascript:void(0)
This definitely is the case. I was talking to someone complaining about how llms don't work good.
They said it couldn't fix an issue it made.
I asked if they gave it any way to validate what it did.
They did not, some people really are saying "fix this" instead of saying "x fn is doing y when someone makes a request to it. Please attempt to fix x and validate it by accessing the endpoint after and writing tests"
Its shocking some people don't give it any real instruction or way to check itself.
In addition I get great results doing voice to text with very specific workflows. Asking it to add a new feature where I describe what functions I want changed then review as I go vs wait for the end.
 
 

https://news.ycombinator.com/vote?id=47398759&how=up&goto=item%3Fid%3D47394022
mbesto
https://news.ycombinator.com/user?id=mbesto
 
3 months ago
https://news.ycombinator.com/item?id=47398759
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
next
https://news.ycombinator.com/item?id=47394022#47398048
 
[–]
javascript:void(0)
It's not shocking. The tech world is telling them that "Claude will write all of their app easily" with zero instructions/guidelines so of course they're going to send prompts like that.
 
 

https://news.ycombinator.com/vote?id=47400838&how=up&goto=item%3Fid%3D47394022
tracker1
https://news.ycombinator.com/user?id=tracker1
 
3 months ago
https://news.ycombinator.com/item?id=47400838
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398759
 | 
next
https://news.ycombinator.com/item?id=47394022#47398861
 
[–]
javascript:void(0)
I think the implications of limited to no instructions are a little to way off depending on what you're doing... CRUD APIs, sure... especially if you have a well defined DB schema and API surface/approach. Anything that might get complex, less so.
Two areas I've really appreciated LLMs so far... one is being able to make web components that do one thing well in encapsulation.. I can bring it into my project and just use it... AI can scaffold a test/demo app that exercises the component with ease and testing becomes pretty straight forward.
The other for me has been in bridging rust to wasm and even FFI interfaces so I can use underlying systems from Deno/Bun/Node with relative ease... it's been pretty nice all around to say the least.
That said, this all takes work... lots of design work up front for how things should function... weather it's a ui component or an API backend library. From there, you have to add in testing, and some iteration to discover and ensure there aren't behavioral bugs in place. Actually reviewing code and especially the written test logic. LLMs tend to over-test in ways that are excessive or redundant a lot of the time. Especially when a longer test function effectively also tests underlying functionalities that each had their own tests... cut them out.
There's nothing "free" and it's not all that "easy" either, assuming you actually care about the final product. It's definitely work, but it's more about the outcome and creation than the grunt work. As a developer, you'll be expected to think a lot more, plan and oversee what's getting done as opposed to being able to just bang out your own simple boilerplate for weeks at a time.
 
 

https://news.ycombinator.com/vote?id=47463662&how=up&goto=item%3Fid%3D47394022
andrekandre
https://news.ycombinator.com/user?id=andrekandre
 
3 months ago
https://news.ycombinator.com/item?id=47463662
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400838
 | 
next
https://news.ycombinator.com/item?id=47394022#47398861
 
[–]
javascript:void(0)
  > this all takes work... lots of design work up front for how things should function... weather it's a ui component or an API backend library. From there, you have to add in testing, and some iteration to discover and ensure there aren't behavioral bugs in place.


thats the reality, but the marketing to the top-level people (and mass media) is like the other poster stated, and that filters to devs as well causing this big gap in expectations going in
 
 

https://news.ycombinator.com/vote?id=47398861&how=up&goto=item%3Fid%3D47394022
mikkupikku
https://news.ycombinator.com/user?id=mikkupikku
 
3 months ago
https://news.ycombinator.com/item?id=47398861
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398759
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400838
 | 
next
https://news.ycombinator.com/item?id=47394022#47398048
 
[–]
javascript:void(0)
It's surprising they don't learn better after their first hour or two of use. Or maybe they do know better but don't like the thing so they deliberately give it rope to hang itself with, then blame overzealous marketting.
 
 

https://news.ycombinator.com/vote?id=47398048&how=up&goto=item%3Fid%3D47394022
petcat
https://news.ycombinator.com/user?id=petcat
 
3 months ago
https://news.ycombinator.com/item?id=47398048
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398759
 | 
next
https://news.ycombinator.com/item?id=47394022#47398288
 
[–]
javascript:void(0)
If you tell a human junior developer just "fix this" then they will spend a week on a wild-goose chase with nothing to show for it.
At least the LLM will only take 5 minutes to tell you they don't know what to do.
 
 

https://news.ycombinator.com/vote?id=47398272&how=up&goto=item%3Fid%3D47394022
ruszki
https://news.ycombinator.com/user?id=ruszki
 
3 months ago
https://news.ycombinator.com/item?id=47398272
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398048
 | 
next
https://news.ycombinator.com/item?id=47394022#47398434
 
[–]
javascript:void(0)
Do they? I've never got a response that something was impossible, or stupid. LLMs are happy to verify that a noop does nothing, if they don't know how to fix something. They rather make something useless than really tackle a problem, if they can make tests green that way, or they can claim that something “works”.
And've I never asked Claude Code something which is really impossible, or even really difficult.
 
 

https://news.ycombinator.com/vote?id=47398950&how=up&goto=item%3Fid%3D47394022
mikkupikku
https://news.ycombinator.com/user?id=mikkupikku
 
3 months ago
https://news.ycombinator.com/item?id=47398950
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398272
 | 
next
https://news.ycombinator.com/item?id=47394022#47398706
 
[–]
javascript:void(0)
Claude code will happily tell me my ideas are stupid, but I think that's because I nest my ideas in between other alternative ideas and ask for an evaluation of all of them. This effectively combats the sycophantic tendencies.
Still, sometimes claude will tell me off even when I don't give it alternatives. Last night I told it to use luasocket from an mpv userscript to connect to a zeromq Unix socket (and also implement zmq in pure lua) connected to an ffmpeg zmq filter to change filter parameters on the fly. Claude code all but called me stupid and told me to just reload the filter graph through normal mpv means when I make a change. Which was a good call, but I told it to do the thing anyway and it ended up working well, so what does it really know... Anyway, I like that it pushes back, but agrees to commit when I insist.
 
 

https://news.ycombinator.com/vote?id=47400728&how=up&goto=item%3Fid%3D47394022
seunosewa
https://news.ycombinator.com/user?id=seunosewa
 
3 months ago
https://news.ycombinator.com/item?id=47400728
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398950
 | 
next
https://news.ycombinator.com/item?id=47394022#47398706
 
[–]
javascript:void(0)
After such hard-won wins, ask the AI to save what it learned during the session to a MD file.
 
 

https://news.ycombinator.com/vote?id=47398706&how=up&goto=item%3Fid%3D47394022
IanCal
https://news.ycombinator.com/user?id=IanCal
 
3 months ago
https://news.ycombinator.com/item?id=47398706
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398272
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398950
 | 
next
https://news.ycombinator.com/item?id=47394022#47398434
 
[–]
javascript:void(0)
I've definitely had pushback on what to do or approaches, yes. I've had this more recently because I've been pushing more on a side of "I want to know if this would end up being fast enough / allow something that it'd be worth doing". I've had to argue harder for something recently, and I'm genuinely not sure if it is possible or not. While it's not flat out refused to do it, it's explained to me why it won't work, and taken some pushing to implement parts of it. My gut feeling is that the blockers it is describing are real but we can sidestep them by taking a wilder swing at the change, but I'm not sure I'm right.
 
 

https://news.ycombinator.com/vote?id=47398434&how=up&goto=item%3Fid%3D47394022
speakingmoistly
https://news.ycombinator.com/user?id=speakingmoistly
 
3 months ago
https://news.ycombinator.com/item?id=47398434
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398048
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398272
 | 
next
https://news.ycombinator.com/item?id=47394022#47400749
 
[–]
javascript:void(0)
To be fair, that happening feels more like poor management and mentorship than "juniors are scatterbrained".
Over time, you build up the right reflexes that avoid a one-week goose chase with them. Heck, since we're working with people, you don't just say " fix this", you earmark time to make sure everyone is aligned on what needs done and what the plan is.
 
 

https://news.ycombinator.com/vote?id=47400749&how=up&goto=item%3Fid%3D47394022
dkersten
https://news.ycombinator.com/user?id=dkersten
 
3 months ago
https://news.ycombinator.com/item?id=47400749
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398048
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398434
 | 
next
https://news.ycombinator.com/item?id=47394022#47405865
 
[–]
javascript:void(0)
In my experience, the LLM will happily try the wrong thing over and over for hours. It rarely will say it doesn't know.
 
 

https://news.ycombinator.com/vote?id=47401104&how=up&goto=item%3Fid%3D47394022
Ancapistani
https://news.ycombinator.com/user?id=Ancapistani
 
3 months ago
https://news.ycombinator.com/item?id=47401104
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400749
 | 
next
https://news.ycombinator.com/item?id=47394022#47405865
 
[–]
javascript:void(0)
Don't ask it to make changes off the bat, then - ask it to make a plan. Then inspect the plan, change it if necessary, and go from there.
 
 

https://news.ycombinator.com/vote?id=47414850&how=up&goto=item%3Fid%3D47394022
dkersten
https://news.ycombinator.com/user?id=dkersten
 
3 months ago
https://news.ycombinator.com/item?id=47414850
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401104
 | 
next
https://news.ycombinator.com/item?id=47394022#47405865
 
[–]
javascript:void(0)
I do. I tend to follow a strict Research, Plan, Implement workflow. It does greatly help, but it doesn't eliminate all problems.
 
 

https://news.ycombinator.com/vote?id=47405865&how=up&goto=item%3Fid%3D47394022
icedchai
https://news.ycombinator.com/user?id=icedchai
 
3 months ago
https://news.ycombinator.com/item?id=47405865
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398048
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400749
 | 
next
https://news.ycombinator.com/item?id=47394022#47398288
 
[–]
javascript:void(0)
An LLM might take 5 minutes, or 20 minutes, and still do the wrong thing. Rarely have I seen an LLM not "know what to do." A coworker told it to fix some unit tests, it churned away for a while, then changed a bunch of assert status == 200 to 500. Good news, tests pass now!
 
 

https://news.ycombinator.com/vote?id=47398288&how=up&goto=item%3Fid%3D47394022
sobjornstad
https://news.ycombinator.com/user?id=sobjornstad
 
3 months ago
https://news.ycombinator.com/item?id=47398288
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398048
 | 
next
https://news.ycombinator.com/item?id=47394022#47400313
 
[–]
javascript:void(0)
There are subtler versions of this too. I've been working on a TUI app for a couple of weeks, and having great success getting it to interactively test by sending tmux commands, but every once in a while it would just deliver code that didn't work. I finally realized it was because the capture tools I gave it didn't capture the cursor location, so it would, understandably, get confused about where it was and what was selected.
I promptly went and fixed this before doing any more work, because I know if 
I
 was put in that situation I would refuse to do any more work until I could actually use the app properly. In general, if you wouldn't be able to solve a problem with the tools you give an LLM, it will probably do a bad job too.
 
 

https://news.ycombinator.com/vote?id=47400313&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400313
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398288
 | 
next
https://news.ycombinator.com/item?id=47394022#47400729
 
[–]
javascript:void(0)
I made that mistake when I first started using Claude Code/Codex. Now I give it access to my isolated DEV AWS account with appropriately scoped permissions on the IAM level with temporary credentials and tell it how to validate the code and have in my markdown file to always use $x to test any changes to $y.
It's gotten a lot better.
 
 

https://news.ycombinator.com/vote?id=47400729&how=up&goto=item%3Fid%3D47394022
tracker1
https://news.ycombinator.com/user?id=tracker1
 
3 months ago
https://news.ycombinator.com/item?id=47400729
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400313
 | 
next
https://news.ycombinator.com/item?id=47394022#47400933
 
[–]
javascript:void(0)
Yeah, the more time I spend in planning and working through design/api documentation for how I want something to work, the better it does... Similar for testing against your specifications, not the code... once you have a defined API surface and functional/unit tests for what you're trying to do, it's all the harder for AI to actually mess things up. Even more interesting is IMO how well the agents work with Rust vs other languages the more well defined your specifications are.
 
 

https://news.ycombinator.com/vote?id=47400933&how=up&goto=item%3Fid%3D47394022
Ancapistani
https://news.ycombinator.com/user?id=Ancapistani
 
3 months ago
https://news.ycombinator.com/item?id=47400933
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400729
 | 
next
https://news.ycombinator.com/item?id=47394022#47400637
 
[–]
javascript:void(0)
This works about 85% of the time IME, in Claude Code. My normal workflow on most bugs is to just say “fix this” and paste the logs. The key is that I do it in plan mode, then thoroughly inspect and refine the plan before allowing it to proceed.
 
 

https://news.ycombinator.com/vote?id=47400637&how=up&goto=item%3Fid%3D47394022
rirze
https://news.ycombinator.com/user?id=rirze
 
3 months ago
https://news.ycombinator.com/item?id=47400637
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400933
 | 
next
https://news.ycombinator.com/item?id=47394022#47398787
 
[–]
javascript:void(0)
Untested Hypothesis: LLM instruction is usually an intelligence+communication-based skill. I find in my non-authoritative experience that users who give short form instructions are generally ill prepared for technical motivation (whether they're motivating LLMs or humans).
 
 

https://news.ycombinator.com/vote?id=47398787&how=up&goto=item%3Fid%3D47394022
jzig
https://news.ycombinator.com/user?id=jzig
 
3 months ago
https://news.ycombinator.com/item?id=47398787
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400637
 | 
next
https://news.ycombinator.com/item?id=47394022#47401100
 
[–]
javascript:void(0)
lol that is still “how you're talking to them that affects the results” just more specific
 
 

https://news.ycombinator.com/vote?id=47401100&how=up&goto=item%3Fid%3D47394022
sshine
https://news.ycombinator.com/user?id=sshine
 
3 months ago
https://news.ycombinator.com/item?id=47401100
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397983
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398787
 | 
next
https://news.ycombinator.com/item?id=47394022#47397738
 
[–]
javascript:void(0)
Feeding the LLM a "copy as cURL" for its feedback loop instead of letting it manage the dev server was an unlock for me.
 
 

https://news.ycombinator.com/vote?id=47397738&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47397738
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397983
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
I have 30 years of experience delivering code and 10 years of leading architecture. My argument is the only thing that matters is does the entire implementation - code + architecture (your database, networking, your runtime that determines scaling, etc) meet the functional and none functional requirements. Functional = does it meet the business requirements and UX and non functional = scalability, security, performance, concurrency, etc.
I only carefully review the parts of the implementation that I know “work on my machine but will break once I put in a real world scenario”. Even before AI I wasn't one of the people who got into geek wars worrying about which GOF pattern you should have used.
All except for concurrency where it's hard to have automated tests, I care more about the unit or honestly integration tests and testing for scalability than the code. Your login isn't slow because you chose to use a for loop instead of a while loop. I will have my agents run the appropriate tests after code changes
I didn't look at a line of code for my vibe coded admin UI authenticated with AWS cognito that at most will be used by less than a dozen people and whoever maintains it will probably also use a coding agent. I did review the functionality and UX.
Code before AI was always the grind between my architectural vision and implementation
 
 

https://news.ycombinator.com/vote?id=47397898&how=up&goto=item%3Fid%3D47394022
awakeasleep
https://news.ycombinator.com/user?id=awakeasleep
 
3 months ago
https://news.ycombinator.com/item?id=47397898
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397738
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
Explain how fragility of implementation, like spaghetti code, high coupling low cohesion fit into your world view?
 
 

https://news.ycombinator.com/vote?id=47397974&how=up&goto=item%3Fid%3D47394022
petcat
https://news.ycombinator.com/user?id=petcat
 
3 months ago
https://news.ycombinator.com/item?id=47397974
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397898
 | 
next
https://news.ycombinator.com/item?id=47394022#47398086
 
[–]
javascript:void(0)
As human developers, I think we're struggling with "letting go" of the code. The code we write (or agents write) is really just an intermediate representation (IR) of the solution.
For instance, GCC will inline functions, unroll loops, and myriad other optimizations that we don't care about (and actually want!). But when we review the ASM that GCC generates we are not concerned with the "spaghetti" and the "high coupling" and "low cohesion". We care that it works, and is correct for what it is supposed to do.
Source code in a higher-level language is not really different anymore. Agents write the code, maybe we guide them on patterns and correct them when they are obviously wrong, but the code is just the work-item artifact that comes out of extensive specification, discussion, proposal review, and more review of the reviews.
A well-guided, iterative process and problem/solution description should be able to generate an equivalent implementation whether a human is writing the code or an agent.
 
 

https://news.ycombinator.com/vote?id=47398092&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398092
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
A compiler uses rigorous modeling and testing to ensure that generated code is semantically equivalent. It can do this because it is translating from one formal language to another.
Translating a natural prompt on the other hand requires the LLM to make thousands of small decisions that will be different each time you regenerate the artifact. Even ignoring non-determinism, prompt instability means that any small change to the spec will result in a vastly different program.
A natural language spec and test suite cannot be complete enough to encode all of these differences without being at least as complex as the code.
Therefore each time you regenerate large sections of code without review, you will see scores of observable behavior differences that will surface to the user as churn, jank, and broken workflows.
Your tests will not encode every user workflow, not even close. Ask yourself if you have ever worked on a non trivial piece of software where you could randomly regenerate 10% of the implementation while keeping to the spec without seeing a flurry of bug reports.
This may change if LLMs improve such that they are able to reason about code changes to the degree a human can. As of today they cannot do this and require tests and human code review to prevent them from spinning out. But I suspect at that point they'll be doing our job, as well as the CEOs and we'll have bigger problems.
 
 

https://news.ycombinator.com/vote?id=47398693&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47398693
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398092
 | 
next
https://news.ycombinator.com/item?id=47394022#47398386
 
[–]
javascript:void(0)
I don't see a world where a motivated soul can build a business from a laptop and a token service as a problem. I see it as opportunity.
I feel similarly about Hollywood and the creation of media. We're not there in either case yet, but we will be. That's pretty clear. and when I look at the feudal society that is the entertainment industry here, I don't understand why so many of the serfs are trying to perpetuate it in its current state. And I really don't get why engineers think this technology is going to turn them into serfs unless they let that happen to them themselves. If you can build things, AI coding agents will let you build faster and more for the same amount of effort.
I am assuming given the rate of advance of AI coding systems in the past year that there is plenty of improvement to come before this plateaus. I'm sure that will include AI generated systems to do security reviews that will be at human or better level. I've already seen Claude find 20 plus-year-old bugs in my own code. They weren't particularly mission critical but they were there the whole time. I've also seen it do amazingly sophisticated reverse engineering of assembly code only to fall over flat on its face for the simplest tasks.
 
 

https://news.ycombinator.com/vote?id=47398734&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398734
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398693
 | 
next
https://news.ycombinator.com/item?id=47394022#47399604
 
[–]
javascript:void(0)
That depends on how fast that change happens. If 45% of jobs evaporate in a a 5 year period, a complete societal collapse is the likely outcome.
 
 

https://news.ycombinator.com/vote?id=47399254&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47399254
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398734
 | 
next
https://news.ycombinator.com/item?id=47394022#47399604
 
[–]
javascript:void(0)
Sounds like influencer nonsense to me. Touch grass. If the people are fed and housed, there's no collapse. And if the billionaire class lets them starve, they will finally go through some things just like the aristocracy in France once did. And I think even Peter Thiel is smarter than that. You can feed yourself for <$1000 a year on beans and rice. Not saying you'd enjoy it, but you won't starve. So for ~$40B annually, the billionaires buy themselves revolution insurance. Fantastic value.
OTOH if what you're really talking about is the long-term collapse in our ludicrous carbon footprint when we finally run out of fossil fuels and we didn't invest in renewables or nuclear to replace them, well, I'm with you there.
 
 

https://news.ycombinator.com/vote?id=47399813&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47399813
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399254
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
I don't even know what this means.
The worst unemployment during the Weimar Republic was 25-30%. Unemployment in the Great Depression peaked at 25%.
So yeah if we get to 45% unemployment and those are the highest paying jobs on average then yeah it's gonna be bad. Then you add in second order effects where none of those people have the money to pay the other 55% who are still employed.
We might get to a UBI relatively quickly and peacefully. But I'm not betting on it.
Yeah that's probably the most likely scenario, but that quickly devolved into a death and imprisonment for far more than the aristocrats and eventually ended with Napoleon trying to take over Europe and millions of deaths overall.
The world didn't literally end, but it was 40 years of war, famine, disease, and death, and not a lot of time to think about starting businesses with your laptop.
 
 

https://news.ycombinator.com/vote?id=47400232&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47400232
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399813
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
And the dark ages lasted a millennium. Sounds like quite an improvement on that. And if America didn't want a society hellbent on living the worst possible timeline, why did it re-elect President Voldemaga and give him the football? And then, even when he breaks nearly every political promise, his support remains better than his predecessor? Anyway, I think the richest ~1135 Americans won't let you starve, but they'll be happy to watch you die young of things that had stopped killing people for quite some time whilst they skim all the cream. And that seems to be what the plurality wants or they'd vote differently.
The good news is that America is ~5% of the world. And the more we keep punching ourselves in the face, the better the chance someone else pulls ahead. But still, we have nukes, so we're still the town bully for the immediate future.
 
 

https://news.ycombinator.com/vote?id=47400829&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47400829
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400232
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
What are you even arguing about? I have absolutely no idea where you are going with this.
 
 

https://news.ycombinator.com/vote?id=47401027&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47401027
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400829
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
Yeah I figured that. You think society is going to collapse because of AI. I don't. But I do think that stupid narrative is prevalent in the media right now and the C-suite happily proclaiming they're going to lay people off and replace them with AI got the ball rolling in the first place. Now it has momentum of its own with lunatics like Eliezer Yudkowsky once again getting taken seriously.
Fortunately, the other 95% of humanity is far less doomer about their prospects. So if America wants to be the new neanderthals, they'll be happy to be the new cro magnons.
 
 

https://news.ycombinator.com/vote?id=47401269&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47401269
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401027
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
I don't think society is going to collapse because of AI because I don't think the current architectures have any chance of becoming AGI. I think that if AGI is even something we're capable of it's very far off.
I think that if CEOs can replace us soon, it's because AGI got here much sooner than I predicted. And if that happens we have 2 options Mad Max and Star Trek and Mad Max is the more likely of the 2.
 
 

https://news.ycombinator.com/vote?id=47401637&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47401637
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401269
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
What's with all the catastrophic thinking then? Mad Max? Collapse of Society because 45% unemployment? I really hate people on principle but I have more faith in them looking out for their own self interest than you do apparently. Mad Max specifically requires a ridiculous amount of intact infrastructure for all the gasoline (you know gasoline goes bad in 3-6 months? Yeah didn't think so), manufacturing for all the parts for all those crazy custom build road warrior wagons, and ranches of livestock for all the leather for all the cool outfits (and with all that cow, no one needs to starve but oh the infrastructure needed to keep the cows fed).
If doom porn is your thing, try watching Threads or The Day After, especially Threads. That said, I don't think Star Trek is possible, maybe The Expanse but more likely we run out of cheap energy before we get off world.
As for the AGI, it all depends on your definition. We're already at Amazon IC1/IC2 coding performance with these agents (I speak from experience previously managing them). If we get to IC3, one person will be able to build a $1B company and run it or sell it. If you're a purist like me and insist we stick to douchebag racist Nick Bostrom's superintelligence definition of AGI, then we agree. But I expect 24/7 IC3 level engineering as a service for $200/month to be more than enough and I think that's a year or two away. And you can either prepare for that or scream how the sky is falling, your choice.
 
 

https://news.ycombinator.com/vote?id=47403790&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403790
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401637
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
Is this a joke or do you have a learning disability?
Or I could do neither and write you off as a gasbag who doesn't know what he's talking about like all the other ex-amazon management I've had the pleasure to work with over the years.
 
 

https://news.ycombinator.com/vote?id=47404320&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47404320
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403790
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
I guess you have a really short context buffer with all this frequently forgetting things you've said yourself.
But that aside, how's all that self-righteousness working out for you?
 
 

https://news.ycombinator.com/vote?id=47407094&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47407094
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47404320
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
I bet you have ex-Amazon prominently in your LinkedIn profile.
 
 

https://news.ycombinator.com/vote?id=47407621&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47407621
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47407094
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
Don't have a LinkedIn profile, don't need one. But I'm guessing you're listed under LinkedIn Lunatics.
 
 

https://news.ycombinator.com/vote?id=47411358&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47411358
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47407621
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
I read back through a few of your posts and you're either schizophrenic, or a very elaborate troll.
I know a few older people who started posting like this when they hit their 50s. I've only got a few years left. Hopefully I can avoid it, but maybe it's inevitable.
 
 

https://news.ycombinator.com/vote?id=47414166&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47414166
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47411358
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
Ageism: now that's a warrior's flex, amIRight?
People like myself in their 50s to 60s who had the experience of banging the metal on imperfect buggy hardware late into the night to mine gems before Python made the entire software engineering community pivot to a core competency of syntax pedanting plus stringing library calls together are having a real party with AI agents effectively doing the same thing they did 30 years ago. I personally never stopped coding even through my one awful experience as an engineering manager.
But you do you, and hear me now, dismiss me later. There won't be 45% unemployment because the minute AI starts replacing current engineering skills for real is the minute the people it targets wake up and start learning how to work with AI coding agents that will be dramatically better than today. People resist change until there are no other options, just look at fossil fuels. The free market will work that one out too eventually.
And no amount of some nontechnical guy vibe scienceing his way to a working mRNA vaccine for his cancer-ridden dog or an engineer unlocking mods to Disney Infinity just from the binary and Claude Code or an entire web browser ported to rust will ever convince you these things are not the enemy. And that's going to put you through some things down the road. So of course, since this will never happen I'm an elaborate troll or a nutcase just like the people who pulled all those things off, never mind all the evidence mounting that these things can be amazing in the right hands. That's CRAZYTALK! Stochastic Parrot! Glorified Autocomplete! Mad Max! Mad Max! DLSS 5!
 
 

https://news.ycombinator.com/vote?id=47463744&how=up&goto=item%3Fid%3D47394022
andrekandre
https://news.ycombinator.com/user?id=andrekandre
 
3 months ago
https://news.ycombinator.com/item?id=47463744
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47414166
 | 
next
https://news.ycombinator.com/item?id=47394022#47399641
 
[–]
javascript:void(0)
  > There won't be 45% unemployment because the minute AI starts replacing current engineering skills for real is the minute the people it targets wake up and start learning how to work with AI coding agents that will be dramatically better than today. 


i have a slightly different take: the theory of bullshit jobs* says most likely we will have an increase in the amount of work expected which will just increase the amount of management and specialists (think scrum master and friends for ai) and busywork needed for all this new technology, so most definitely "jobs" will not be going away imo
https://en.wikipedia.org/wiki/Bullshit_Jobs
https://en.wikipedia.org/wiki/Bullshit_Jobs
 
 

https://news.ycombinator.com/vote?id=47399641&how=up&goto=item%3Fid%3D47394022
jplusequalt
https://news.ycombinator.com/user?id=jplusequalt
 
3 months ago
https://news.ycombinator.com/item?id=47399641
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399254
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399813
 | 
next
https://news.ycombinator.com/item?id=47394022#47399535
 
[–]
javascript:void(0)
You are the epitome of the tech bro.
 
 

https://news.ycombinator.com/vote?id=47400113&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47400113
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399641
 | 
next
https://news.ycombinator.com/item?id=47394022#47399535
 
[–]
javascript:void(0)
Sure, sure. Understanding how these sociopaths think clearly makes me a tech bro rather than someone who incorporates worst-case scenarios into my planning. Suggesting they would maintain minimum viable society to save their own asses means I'm in favor of it, right? This is why I work remotely.
 
 

https://news.ycombinator.com/vote?id=47399535&how=up&goto=item%3Fid%3D47394022
bhaak
https://news.ycombinator.com/user?id=bhaak
 
3 months ago
https://news.ycombinator.com/item?id=47399535
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399254
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399641
 | 
next
https://news.ycombinator.com/item?id=47394022#47399604
 
[–]
javascript:void(0)
Peter Thiel might be smarter than that but I'm not sure about the other ones.
Look how Musk treated the Twitter devs or Bezos any of his workers or Trump anybody.
 
 

https://news.ycombinator.com/vote?id=47400167&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47400167
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399535
 | 
next
https://news.ycombinator.com/item?id=47394022#47399604
 
[–]
javascript:void(0)
They're all quite intelligent. And they're world class experts in saving their own bacon. Doesn't mean they have any ethics though nor any emotional intelligence after decades of being surrounded by toadies and bootlickers.
 
 

https://news.ycombinator.com/vote?id=47409555&how=up&goto=item%3Fid%3D47394022
bhaak
https://news.ycombinator.com/user?id=bhaak
 
3 months ago
https://news.ycombinator.com/item?id=47409555
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400167
 | 
next
https://news.ycombinator.com/item?id=47394022#47399604
 
[–]
javascript:void(0)
Smart is not equal to intelligent.
You can be very intelligent but have a blind eye on some trivial things.
I'm certain that some of them think they are untouchable (or even just are well prepared). We will only see if that's really true if shit hits the fan.
 
 

https://news.ycombinator.com/vote?id=47414293&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47414293
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47409555
 | 
next
https://news.ycombinator.com/item?id=47394022#47399604
 
[–]
javascript:void(0)
We all know they have bunkers and we roughly know where they are. I got suspended on reddit for threatening harm to others for saying that a couple weeks back. But I don't think we need to raid the bunkers in your TEOTWAWKI scenario, their bodyguards will do all the heavy-lifting once they realize the power balance has shifted. But I also don't expect a SHTF scenario, just a slow creeping enshitification of living standards instead of actually implementing a UBI.
And then the survivors who band together to rebuild community instead of chasing some idiotic Mad Max scenario will ultimately prevail. And yes, they are blind to that other option because they wouldn't end up on top.
 
 

https://news.ycombinator.com/vote?id=47399604&how=up&goto=item%3Fid%3D47394022
jplusequalt
https://news.ycombinator.com/user?id=jplusequalt
 
3 months ago
https://news.ycombinator.com/item?id=47399604
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398693
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398734
 | 
next
https://news.ycombinator.com/item?id=47394022#47398386
 
[–]
javascript:void(0)
But 
you
 aren't building, your LLM is. Also, you are only thinking about ways as you, a supposed builder, will benefit from this technology. Have you considered how all previous waves of new technologies have introduced downstream effects that have muddied our societies? LLMs are not unique in this regard, and we should be critical on those who are trying to force them into every device we own.
 
 

https://news.ycombinator.com/vote?id=47399645&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399645
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399604
 | 
next
https://news.ycombinator.com/item?id=47394022#47401262
 
[–]
javascript:void(0)
Would you say the general contractor for your home isn't a builder because he didn't install the toilets?
 
 

https://news.ycombinator.com/vote?id=47401508&how=up&goto=item%3Fid%3D47394022
jplusequalt
https://news.ycombinator.com/user?id=jplusequalt
 
3 months ago
https://news.ycombinator.com/item?id=47401508
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399645
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
I think this argument would be make more sense if you were talking about an architect, or the customer.
A contractor is still very much putting the house together.
 
 

https://news.ycombinator.com/vote?id=47401603&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47401603
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401508
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
The general contractor is not doing the actual building as much as he is coordinating all of the specialist, making sure things run smoothly and scheduling things based on dependencies and coordinating with the customer. I've had two houses built from the ground up
 
 

https://news.ycombinator.com/vote?id=47401776&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47401776
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401603
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
3 myself and I have yet to meet a "vibe" contractor.
 
 

https://news.ycombinator.com/vote?id=47401829&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47401829
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401776
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
And he is also not inspecting every screw, wire, etc. He delegates
 
 

https://news.ycombinator.com/vote?id=47402039&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47402039
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401829
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
Oh you're preaching to the choir. I think we are entering a punctuated equilibrium here w/r to the future of SW engineering. And the people who have the free time to go on to podcasts and insist AI coding agents can't do anything useful rather than learning their abilities and their limitations and especially how to wield them are going to go through some things. If you really want to trigger these sorts, ask them why they delegate code generation to compilers and interpreters without understanding each and every ISA at the instruction level. To that end, I am devoid of compassion after having gone through similar nonsense w/r to GPUs 20 years ago. Times change, people don't.
 
 

https://news.ycombinator.com/vote?id=47402137&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47402137
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402039
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
I haven't stayed relevant and able to find jobs quickly for 30 years by being the old man shouting at the clouds.
I started my career in 1996 programming in C and Fortran on mainframes and got my first only and hopefully last job at BigTech at 46 7 jobs later.
I'm no longer there. Every project I've had in the last two years has had classic ML and then LLMs integrated into the implementation. I have very much jumped on the coding agent bandwagon.
 
 

https://news.ycombinator.com/vote?id=47402476&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47402476
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402137
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
Started mine around the same time and yes, keeping up keeps one employed. What's disheartening however is how little keeping up the key decision makers and stakeholders at FAANNG do and it explains idiocy like already trying to fire engineers and replace them with AI. Hilarity ensued of course because hilarity always ensues for people like that, but hilarity and shenanigans appears to be inexhaustible resources.
 
 

https://news.ycombinator.com/vote?id=47408778&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47408778
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402476
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
I very much would rather get a daily anal probe with a cactus than ever work at BigTech again even knowing the trade off that I now at 51 make the same as 25 year old L5 I mentored when they were an intern and their first year back as an L4 before I left.
 
 

https://news.ycombinator.com/vote?id=47414222&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47414222
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47408778
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
If you have FIRE money, getting off the hamster wheel of despair that is tech industry culture is the winning move. Well-played.
 
 

https://news.ycombinator.com/vote?id=47414788&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47414788
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47414222
 | 
next
https://news.ycombinator.com/item?id=47394022#47400154
 
[–]
javascript:void(0)
Not quite FIRE money. I still need to work for awhile - I just don't need to chase money. I make “enough” to live comfortably, travel like I want (not first class.), save enough for retirement (max out 401K + catchup contributions + max out HSA + max out Roth).
We did choose to downsize and move to state tax free Florida.
If I have to retire before I'm 65, exit plan is to move to Costa Rica (where we are right now for 6 weeks)
 
 

https://news.ycombinator.com/vote?id=47400154&how=up&goto=item%3Fid%3D47394022
LogicFailsMe
https://news.ycombinator.com/user?id=LogicFailsMe
 
3 months ago
https://news.ycombinator.com/item?id=47400154
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399645
 | 
prev
https://news.ycombinator.com/item?id=47394022#47401508
 | 
next
https://news.ycombinator.com/item?id=47394022#47401262
 
[–]
javascript:void(0)
I think that's precisely his thinking and don't let him know about all those fancy expensive unitasker tools they have that you probably don't that let them do it far more cost effectively and better than the typical homeowner. Won't you think of the jerbs(tm)? And to Captain dystopia, life expectencies were increasing monotonically until COVID. Wonder what changed?
 
 

https://news.ycombinator.com/vote?id=47401262&how=up&goto=item%3Fid%3D47394022
k3nx
https://news.ycombinator.com/user?id=k3nx
 
3 months ago
https://news.ycombinator.com/item?id=47401262
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399604
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399645
 | 
next
https://news.ycombinator.com/item?id=47394022#47398386
 
[–]
javascript:void(0)
I've struggled a bit with this myself. I'm having a paradigm shift. I used to say "but I like writing code". But like the article says, that's not really true. I like building things, the code was just a way to do that. If you want to get pedantic, I wasn't building things before AI either, the compiler/linker was doing that for me. I see this is just another level of abstraction. I still get to decide how things work, what "layers" I want to introduce. I still get to say, no, I don't like that. So instead of being the "grunt", I'm the designer/architect. I'm still building what I want. Boilerplate code was never something I enjoyed before anyway. I'm loving (like actually giggling) having the AI tie all the bits for me and getting up and running with things working. It reminds me of my Delphi days: File->New Project, and you're ready to go. I think I was burnt out. AI is helping me find joy again. I also disable AI in all my apps as well, so I'm still on the fence about several things too.
 
 

https://news.ycombinator.com/vote?id=47463777&how=up&goto=item%3Fid%3D47394022
andrekandre
https://news.ycombinator.com/user?id=andrekandre
 
3 months ago
https://news.ycombinator.com/item?id=47463777
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401262
 | 
next
https://news.ycombinator.com/item?id=47394022#47402402
 
[–]
javascript:void(0)
  > I'm having a paradigm shift. I used to say "but I like writing code". But like the article says, that's not really true. I like building things, the code was just a way to do that.


i get this; for me i find coding is fun as video games so i don't personally want to turn all code to ai, but what i DO WANT is for it to automate away drudgery of repeating actions and changes (or when i get stuck be a rubber duck for me)... i want to focus my creativity on the interesting parts myself and learn and grow to a better programmer... it may sound crazy but programming is relaxing for me lol
 
 

https://news.ycombinator.com/vote?id=47402402&how=up&goto=item%3Fid%3D47394022
druide67
https://news.ycombinator.com/user?id=druide67
 
3 months ago
https://news.ycombinator.com/item?id=47402402
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401262
 | 
prev
https://news.ycombinator.com/item?id=47394022#47463777
 | 
next
https://news.ycombinator.com/item?id=47394022#47398386
 
[–]
javascript:void(0)
This resonates. I spent years thinking I enjoyed coding, but what I actually enjoy is designing elegant solutions built on solid architecture. Inventing, innovating, building progressively on strong foundations. The real pleasure is the finished product (is it ever really finished though?) — seeing it's useful and makes people's lives easier, while knowing it's well-built technically. The user doesn't see that part, but we know.
With AI, by always planning first, pushing it to explore alternative technical approaches, making it explain its choices — the creative construction process gets easier. You stay the conductor. Refactoring, new features, testing — all facilitated. Add regular AI-driven audits to catch defects, and of course the expert eye that nothing replaces.
One thing that worries me though: how will junior devs build that expert eye if AI handles the grunt work? Learning through struggle is how most of us developed intuition. That's a real problem for the next generation.
 
 

https://news.ycombinator.com/vote?id=47398386&how=up&goto=item%3Fid%3D47394022
petcat
https://news.ycombinator.com/user?id=petcat
 
3 months ago
https://news.ycombinator.com/item?id=47398386
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398092
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398693
 | 
next
https://news.ycombinator.com/item?id=47394022#47398241
 
[–]
javascript:void(0)
Here are the reported miscompilation bugs in GCC so far in 2026. The ones labeled "wrong-code".
https://gcc.gnu.org/bugzilla/buglist.cgi?chfield=%5BBug%20cr...
https://gcc.gnu.org/bugzilla/buglist.cgi?chfield=%5BBug%20creation%5D&chfieldfrom=2026-01-01&chfieldto=2026-12-31&keywords=wrong-code&keywords_type=allwords
I count 121 of them.
 
 

https://news.ycombinator.com/vote?id=47398443&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398443
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398386
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
If you can't understand the difference between a bug that will rarely cause a compiler encountering an edge case to generate a wrong instruction and an LLM that will generate 2 completely different programs with zero overlap because you added a single word to your prompt, then I don't know what to tell you.
 
 

https://news.ycombinator.com/vote?id=47398618&how=up&goto=item%3Fid%3D47394022
petcat
https://news.ycombinator.com/user?id=petcat
 
3 months ago
https://news.ycombinator.com/item?id=47398618
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398443
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
The point is that expert humans (the GCC developers) writing code (C++) that generates code (ASM) does not appear to be as deterministic as you seem to think it is.
 
 

https://news.ycombinator.com/vote?id=47398696&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398696
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398618
 | 
next
https://news.ycombinator.com/item?id=47394022#47399672
 
[–]
javascript:void(0)
I'm very aware of that, but I'm also aware that it's rare enough that the compiler doesn't emit semantically equivalent code that most people can ignore it. That's not the case with LLMs.
I'm also not particularly concerned with non-determinism but with chaos. Determinism in LLMs is likely solvable, prompt instability is not.
 
 

https://news.ycombinator.com/vote?id=47399672&how=up&goto=item%3Fid%3D47394022
jplusequalt
https://news.ycombinator.com/user?id=jplusequalt
 
3 months ago
https://news.ycombinator.com/item?id=47399672
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398618
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398696
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
Classic HN-ism. To focus on the semantics of a statement while ignoring the greater point in order to argue why someone is wrong.
 
 

https://news.ycombinator.com/vote?id=47400341&how=up&goto=item%3Fid%3D47394022
anthonyrstevens
https://news.ycombinator.com/user?id=anthonyrstevens
 
3 months ago
https://news.ycombinator.com/item?id=47400341
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399672
 | 
next
https://news.ycombinator.com/item?id=47394022#47399831
 
[–]
javascript:void(0)
I think it's a perfectly fine point. The OP said (my interpretation) that LLMs are messy, non-deterministic, and can produce bad code. The same is true of many humans, even those whose "job" is to produce clean, predictable, good code. The OP would like the argument to be narrowly about LLMs, but the bigger point even is "who generates the final code, and why and how much do we trust them?"
 
 

https://news.ycombinator.com/vote?id=47403946&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403946
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400341
 | 
next
https://news.ycombinator.com/item?id=47394022#47399831
 
[–]
javascript:void(0)
As of right now agents have almost no ability to reason about the impact of code changes on existing functionality.
A human can produce a 100k LOC program with absolute no external guardrails at all. An agent Can't do that. To produce a 100k LOC program they require external feedback forcing them from spiraling off into building something completely different.
This may change. Agents may get better.
 
 

https://news.ycombinator.com/vote?id=47399831&how=up&goto=item%3Fid%3D47394022
petcat
https://news.ycombinator.com/user?id=petcat
 
3 months ago
https://news.ycombinator.com/item?id=47399831
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399672
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400341
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
I argued the greater point? Software code-generation is not deterministic, whether it's done by expert humans or by LLMs.
 
 

https://news.ycombinator.com/vote?id=47399887&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47399887
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399831
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
It has nothing to do with determinism. It's the difference between nearly perfectly but not quite perfectly translating between rigorously specified formal languages and translating an ambiguous natural language specification into a formal one.
The first is a purely mechanical process, the second is not and requires thousands of decisions that can go either way.
 
 

https://news.ycombinator.com/vote?id=47399965&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399965
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399887
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
And that's no different than human developers
 
 

https://news.ycombinator.com/vote?id=47400785&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47400785
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399965
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
The difference is that a human is that a human can reason about their code changes to a much higher degree than an AI can. If you don't think this is true and you think we're working with AGI, why would you bother architecting anything all or building in any guard rails. Why not just feed the AI the text of the contract your working from and let it rip.
 
 

https://news.ycombinator.com/vote?id=47401630&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47401630
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400785
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
You give way too much credit to the average mid level ticket taker. And again, why do I care how the code does it as long as it meets the functional and none functional requirements?
 
 

https://news.ycombinator.com/vote?id=47403815&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403815
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401630
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
Because in a real application with real users all of the functional and non-functional requirements aren't documented anywhere but in the code.
 
 

https://news.ycombinator.com/vote?id=47415555&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47415555
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403815
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
If only a coding agent had access to your code…
 
 

https://news.ycombinator.com/vote?id=47419600&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47419600
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47415555
 | 
next
https://news.ycombinator.com/item?id=47394022#47399488
 
[–]
javascript:void(0)
You realize that coding agents aren't AGI right? They aren't capable of reasoning about a code changes impact on anything other than their immediate goal to anywhere near the level even a terrible human programmer is. That why we have the agentic workflow in the first place. They absolutely require guardrails.
Claude will absolutely change anything that's not bolted to the floor. If you've used it on legacy software with users or if you reviewed the output you'd see this.
 
 

https://news.ycombinator.com/vote?id=47399488&how=up&goto=item%3Fid%3D47394022
jcranmer
https://news.ycombinator.com/user?id=jcranmer
 
3 months ago
https://news.ycombinator.com/item?id=47399488
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398386
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398443
 | 
next
https://news.ycombinator.com/item?id=47394022#47398241
 
[–]
javascript:void(0)
Compilers are some of the largest, most complex pieces of software out there. It should be no surprise that they come with bugs as all other large, complex pieces of software do.
 
 

https://news.ycombinator.com/vote?id=47399796&how=up&goto=item%3Fid%3D47394022
Kye
https://news.ycombinator.com/user?id=Kye
 
3 months ago
https://news.ycombinator.com/item?id=47399796
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399488
 | 
next
https://news.ycombinator.com/item?id=47394022#47398241
 
[–]
javascript:void(0)
This seems to apply easily to LLMs as language coprocessors that can output code. How long was it before people trusted compilers?
 
 

https://news.ycombinator.com/vote?id=47399840&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47399840
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399796
 | 
next
https://news.ycombinator.com/item?id=47394022#47398241
 
[–]
javascript:void(0)
If you don't understand the difference between something that rigorously translates one formal language to another one and something that will spit out a completely different piece of software with 0 lines of overlap based on a one word prompt change, I don't know what to tell you.
 
 

https://news.ycombinator.com/vote?id=47400356&how=up&goto=item%3Fid%3D47394022
anthonyrstevens
https://news.ycombinator.com/user?id=anthonyrstevens
 
3 months ago
https://news.ycombinator.com/item?id=47400356
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399840
 | 
next
https://news.ycombinator.com/item?id=47394022#47398241
 
[–]
javascript:void(0)
"rigorously" is doing a lot of heavy lifting here.
 
 

https://news.ycombinator.com/vote?id=47400739&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47400739
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400356
 | 
next
https://news.ycombinator.com/item?id=47394022#47398241
 
[–]
javascript:void(0)
Let's substitute rigorously with "in an extremely thorough, careful, and methodical way."
 
 

https://news.ycombinator.com/vote?id=47398241&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47398241
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398092
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398386
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
As if when you delegate tasks to humans they are deterministic. I would hope that your test cases cover the requirements. If not, your implementation is just as brittle when other developers come online or even when you come back to a project after six months.
 
 

https://news.ycombinator.com/vote?id=47398412&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398412
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398241
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Agents aren't humans. A human can write a working 100k LOC application with zero tests (not saying they should but they could and have). An agent cannot do this.
Agents require tests to keep them from spinning out and your tests do not cover all of the behaviors you care about.
If you doubt that your tests don't cover all your requirements, 99.9% of every production bug you've ever had completely passed your test suite.
 
 

https://news.ycombinator.com/vote?id=47398850&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47398850
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398412
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
I have never known a human that could or did write 100K lines of bug free working code without running parts of it first and testing.
So humans also don't write bug free code or tests that cover all use cases - how is that an argument that humans are better?
 
 

https://news.ycombinator.com/vote?id=47400672&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47400672
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398850
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Not that humans can't write 100k line programs bug free or without running parts of it.
An AI cannot write a 100k line program on its own without external guard rails otherwise it spins out. This has nothing to do with whether the agent is allowed to run the code itself. This is well documented. Look at what was required to allow Claude to write a "C compiler".
This has nothing to do with whether it's bug free. It literally can't produce a working 100k LOC program without external guardrails.
 
 

https://news.ycombinator.com/vote?id=47401651&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47401651
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400672
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Absolutely no one is arguing that you shouldn't have a combination of manual and automated tests around either AI or human generated code or that you shouldn't have a thoughtful design
 
 

https://news.ycombinator.com/vote?id=47403887&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403887
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401651
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
In a non-trivial app you can't test your way through all of the e2e workflows and thoughtful design isn't what I'm talking about.
How many bugs have you seen that passed your automated and manual testing? Probably 99.9% of them.
Now imagine that you take those same test suites and you unleash an agent on the code that has far worse reasoning capabilities than a human and you tell them they can change anything in the code as long as the tests pass.
 
 

https://news.ycombinator.com/vote?id=47403965&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47403965
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403887
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
So if bugs pass through testing which they have forever, wouldn't that imply that humans are just as fallible as AI - and slower?
I never suggested letting agents code for a day on end. I use AI to code well defined tasks and treat it like a mid level ticket taker
 
 

https://news.ycombinator.com/vote?id=47411583&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47411583
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403965
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
If you have an employee who codes 2x faster than everyone else but produces 10x the bugs, would your suggestion to be to let him rip and stop reviewing his code output?
It doesn't matter how long you're letting it run. If you aren't reviewing the output, you have no way of knowing when it changes untested behavior.
I regularly find Claude doing insane things that I never would have thought to test against, that would have made it into prod if I hadn't renewed the code.
 
 

https://news.ycombinator.com/vote?id=47412145&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47412145
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47411583
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
You're focused on the output , I'm focused on the behavior. Thats the difference. Just like when I delegate a task to either another developer or another company like the random Salesforce integration or even a third party API I need to integrate with.
 
 

https://news.ycombinator.com/vote?id=47413804&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47413804
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47412145
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Unfortunately you are not equipped to observe and test all or even most of the behavior of a non-trivial system.
And if you attempt to treat every module in your system like it's untrusted 3rd party code you'll run into severe complexity and size limits. No one codes large systems like that because it's not possible. There are always escape hatches and entanglements.
 
 

https://news.ycombinator.com/vote?id=47414156&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47414156
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47413804
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Actual a little company you might have heard of called Amazon does…
Jeff Bezos mandated it in 2002.
https://konghq.com/blog/enterprise/api-mandate
https://konghq.com/blog/enterprise/api-mandate
AWS S3 by itself is made up of 200+ micro services
 
 

https://news.ycombinator.com/vote?id=47419633&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47419633
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47414156
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Except that they don't. The API mandate gets violated all the time. And no one at Amazon actually treats every other team as a 3rd party.
 
 

https://news.ycombinator.com/vote?id=47419954&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47419954
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47419633
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Have you worked at Amazon?
I am not saying they treat every other team as a third party. I am saying they treat the code itself as a black box with well defined interfaces. They aren't reaching in to another services data store to retrieve information.
 
 

https://news.ycombinator.com/vote?id=47420338&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47420338
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47419954
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
How do you know someone is ex-Amazon ? Don't worry they'll tell you.
I haven't mentioned it 5 times already so you can be pretty sure I haven't. I know too many people that have worked there to ever make that mistake.
But more importantly, have you worked there in the last decade?
 
 

https://news.ycombinator.com/vote?id=47421483&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47421483
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47420338
 | 
next
https://news.ycombinator.com/item?id=47394022#47398302
 
[–]
javascript:void(0)
Then you have know idea how Amazon works. I was there from 2020-2023.
And before that I worked at 4 product companies when new to the company managers /directors/CTOs needed someone to bring in best practices and build and teach teams.
I honestly wonder what type of “big ball of mud” implementations ( 
https://blog.codinghorror.com/the-big-ball-of-mud-and-other-...
https://blog.codinghorror.com/the-big-ball-of-mud-and-other-architectural-disasters/
) you have had to deal with that weren't properly componentized and covered by tests.
 
 

https://news.ycombinator.com/vote?id=47398302&how=up&goto=item%3Fid%3D47394022
throwaw12
https://news.ycombinator.com/user?id=throwaw12
 
3 months ago
https://news.ycombinator.com/item?id=47398302
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398092
 | 
next
https://news.ycombinator.com/item?id=47394022#47400082
 
[–]
javascript:void(0)
Valid points. But crucial part of not "letting go" of the code is because we are responsible for that code at the moment.
If, in the future, LLM providers will take ownership of our on-calls for the code they have produced, I would write "AUTO-REVIEW-ACCEPTER" bot to accept everything and deploy it to production.
If, company requires me to own something, then I should be aware about what's that thing and understand ins and outs in detail and be able to quickly adjust when things go wrong
 
 

https://news.ycombinator.com/vote?id=47398903&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47398903
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398302
 | 
next
https://news.ycombinator.com/item?id=47394022#47400082
 
[–]
javascript:void(0)
In the past ten years as a team lead/architect/person who was responsible for outsourced implementations (ie Salesforce/Workday integrations, etc), I've been responsible for a lot of code I didn't write. What sense would it have made for me to review the code of the web front end of the web developer for best practices when I haven't written a web app since 2002?
 
 

https://news.ycombinator.com/vote?id=47400109&how=up&goto=item%3Fid%3D47394022
throwaw12
https://news.ycombinator.com/user?id=throwaw12
 
3 months ago
https://news.ycombinator.com/item?id=47400109
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398903
 | 
next
https://news.ycombinator.com/item?id=47394022#47400082
 
[–]
javascript:void(0)
as a team lead, if you are not aware of what's happening in the team, what kind of team lead is this?
on the other hand, you may have been an engineering manager, who is responsible for the team, but a lot of times they do not participate in on-call rotations (only as last escalation)
 
 

https://news.ycombinator.com/vote?id=47410596&how=up&goto=item%3Fid%3D47394022
IanCal
https://news.ycombinator.com/user?id=IanCal
 
3 months ago
https://news.ycombinator.com/item?id=47410596
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400109
 | 
next
https://news.ycombinator.com/item?id=47394022#47400186
 
[–]
javascript:void(0)
One that trusts the team?
Knowing what's happening in the team and personally reviewing parts of the code for best practices are very different things. Are the other team members happy? Does development seem to go smoothly, quickly and without constantly breaking? Does the team struggle to upgrade or refactor things? At some level you have to start trusting that the people working know what they're doing, and help guide from a higher level so they understand how to make the right tradeoffs for the business.
 
 

https://news.ycombinator.com/vote?id=47400186&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400186
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400109
 | 
prev
https://news.ycombinator.com/item?id=47394022#47410596
 | 
next
https://news.ycombinator.com/item?id=47394022#47400082
 
[–]
javascript:void(0)
As a team lead, I know the architecture, the functional and non functional requirements, I know the website is suppose to do $x but I definitely didn't guide how since I haven't done web development in a quarter century, I know the best practices for architecture and data engineering (to a point).
That doesn't mean I did a code review for all of the developers. I will ask them how they solved for a problem that I know can be tricky or did they take into account for something.
 
 

https://news.ycombinator.com/vote?id=47400082&how=up&goto=item%3Fid%3D47394022
jmalicki
https://news.ycombinator.com/user?id=jmalicki
 
3 months ago
https://news.ycombinator.com/item?id=47400082
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398302
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
I've actually found that well-written well-documented non-spaghetti code is 
even more
 important now that we have LLMs.
Why? Because LLMs can get easily confused, so they need well written code they can understand if the LLM is going to maintain the codebase it writes.
The cleaner I keep my codebase, and the better (not necessarily more) abstracted it is, the easier it is for the LLM to understand the code within its limited context window. Good abstractions help the right level of understanding fit within the context window, etc.
I would argue that use of LLMs change what good code is, since "good" now means you have to meaningfully fit good ideas in chunks of 125k tokens.
 
 

https://news.ycombinator.com/vote?id=47400128&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400128
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400082
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
I somewhat agree. But that's more about modularity. It helps when I can just have Claude code focus on one folder with its own Claude file where it describes the invariants - the inputs and outputs.
 
 

https://news.ycombinator.com/vote?id=47413927&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47413927
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400128
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
If you don't read the code how the heck do you know anything about modularity? How do you know that Module A doesn't import module B, run the function but then ignore it and implement the code itself? How do you even know it doesn't import module C?
Claude code regularly does all of these things. Claude code really really likes to reimplement the behavior in tests instead of actually exercising the code you told it to btw. Which means you 100% have to verify the test code at the very least.
 
 

https://news.ycombinator.com/vote?id=47414940&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47414940
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47413927
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
Well 
I
 know because my code is in separately deployed Lambdas that are either zip files uploaded to Lambda or Docker containers run on Lambda that only interact via APi Gateway, a lambda invoke, SNS -> SQS to Lambda, etc and my IAM roles are narrowly defined to only allow Lambda A to interact with just the Lambdas I tell it to.
And if Claude tried to use an AWS service in its code that I didn't want it to use, it would have to also modify the IAM IAC.
In some cases the components are in completely separate repositories.
It's the same type of hard separation I did when there were multiple teams at the company where I was the architect. It was mostly Docker/Fargate back then.
Having separately defined services with well defined interfaces does an amazing job at helping developers ramp up faster and it reduces the blast radius of changes. It's the same with coding agents. Heck back then, even when micro services shared the same database I enforced a rule that each service had to use a database role that only had access to the tables it was responsible for.
I have been saying repeatedly I focus on the tests and architecture and I mentioned in another reply that I focus on public interface stability with well defined interaction points between what I build and the larger org - again just like I did at product companies.
There is also a reason the seven companies I went into before consulting (including GE when it was still a F10 company) I was almost always coming into new initiatives where I could build/lead the entire system from scratch or could separate out the implementation from the larger system with well defined inputs and outputs. It wasn't always micro services. It might have been separate packages/namespaces with well defined interfaces.
Yeah my first job out of college was building data entry systems in C from scratch for a major client that was the basis of a new department for the company.
And it's what Amazon internally does (not Lambda micro services) and has since Jeff Bezos's “API Mandate” in 2002.
 
 

https://news.ycombinator.com/vote?id=47420203&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47420203
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47414940
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
This sounds like an absolute hellscape of an app architecture but you do you. It also doesn't stop anything but the Module A imports C without you knowing about it. It doesn't stop module A from just copy pasting the code from C and saying it's using B.
That says a lot about why you are so confident in this stuff.
 
 

https://news.ycombinator.com/vote?id=47422347&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47422347
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47420203
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
Yes microservice based architecture is something no modern company does…
Including the one that you were so confident doesn't do it even though you never worked there…
Yet I don't suffer from spooky action at a distance and a fear of changes because my testing infrastructure is weak…
Either I know what I'm doing or I've bullshitted my way into multiple companies into hiring me to lead architecture and/or teams from 60 person startups to the US's second largest employer.
Did I mention that one of those companies was the company that acquired the startup I worked for before going to BigTech reached out to me to be the architect overseeing all of their acquisitions and try to integrate them based on the work I did? I didn't accept the offer. I've done the “work for a PE owned company that was a getting bigger by a acquiring other companies and lead the integration thing before”
So they must have been impressed with the long term maintenance of the system to ask me back almost four years after I left
 
 

https://news.ycombinator.com/vote?id=47428706&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47428706
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47422347
 | 
next
https://news.ycombinator.com/item?id=47394022#47398332
 
[–]
javascript:void(0)
If the only evidence you have that your software is maintainable is that a company once asked you to come back, and you have no actual experience maintaining large applications with millions of users, you essentially have data to base any of your claims on.
You may have 30 years experience architecting new applications, but when it comes to maintaining large applications, you're a neophyte.
If you don't have first hand experience with what long term maintenance looks like for your creations, you don't have any reason to be telling anyone how to write maintainable software.
If I were you I'd be suffering from imposter syndrome big time. What if you're just a really good salesman and bullshitter? If I were you I'd want to stick around at a few places to see first hand how my designs hold up.
 
 

https://news.ycombinator.com/vote?id=47398332&how=up&goto=item%3Fid%3D47394022
krilcebre
https://news.ycombinator.com/user?id=krilcebre
 
3 months ago
https://news.ycombinator.com/item?id=47398332
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400082
 | 
next
https://news.ycombinator.com/item?id=47394022#47398384
 
[–]
javascript:void(0)
You are comparing compilers to a completely non deterministic code generation tool that often does not take observable behavior into account at all and will happily screw a part of your system without you noticing, because you misworded a single prompt.
No amount of unit/integration tests cover every single use case in sufficiently complex software, so you cannot rely on that alone.
 
 

https://news.ycombinator.com/vote?id=47399353&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399353
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398332
 | 
next
https://news.ycombinator.com/item?id=47394022#47398384
 
[–]
javascript:void(0)
I just rewrote a utility for the third time - the first two were before AI.
Short version, when someone designs a call center with Amazon Connect, they use a GUI flowchart tool and create “contact flows”. You can export the flow to JSON. But it isn't portable to other environments without some remapping. I created a tool before that used the API to export it and create a portable CloudFormation template.
I always miss some nuance that can half be caught by calling the official CloudFormation linter and the other half by actually deploying it and seeing what errors you get
This time, I did with Claude code, ironically enough, it knew some of the complexity because it had been trained on one of my older open source implementations I did while at AWS. But I told it to read the official CloudFormation spec, after every change test it with the linter, try to deploy it and fix it.
Again, I didn't care about the code - I cared about results. The output of the script either passes the deployment or it doesn't. Claude iterated until it got it right based on “observable behavior”. Claude has tested whether my deployments were working as expected plenty of times by calling the appropriate AWS CLI command and fixed things or reading from a dev database based on integration tests I defined.
 
 

https://news.ycombinator.com/vote?id=47398384&how=up&goto=item%3Fid%3D47394022
mikeocool
https://news.ycombinator.com/user?id=mikeocool
 
3 months ago
https://news.ycombinator.com/item?id=47398384
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398332
 | 
next
https://news.ycombinator.com/item?id=47394022#47407360
 
[–]
javascript:void(0)
When requirements change, a compiler has the benefit of not having to go back and edit the binary it produced.
Maybe we should treat LLM generated code similarly —- just generate everything fresh from the spec anytime there'a a change, though personally I haven't had much success with that yet.
 
 

https://news.ycombinator.com/vote?id=47399063&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399063
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398384
 | 
next
https://news.ycombinator.com/item?id=47394022#47407360
 
[–]
javascript:void(0)
It very much does have to modify the binary it produced to create new code. The entire Linux kernel has an unstable ABI where you have to recompile your code to link to system libraries.
 
 

https://news.ycombinator.com/vote?id=47406027&how=up&goto=item%3Fid%3D47394022
icedchai
https://news.ycombinator.com/user?id=icedchai
 
3 months ago
https://news.ycombinator.com/item?id=47406027
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399063
 | 
next
https://news.ycombinator.com/item?id=47394022#47407360
 
[–]
javascript:void(0)
The Linux 
userspace
 ABI is actually quite stable and rarely changes. If this wasn't true, every time you installed a new kernel you'd have to upgrade / reinstall everything else, including the C compiler, glibc, etc. This does not happen.
The Linux kernel ABI (kernel modules, like device drivers) on the other hand, is unstable and closely tied to the kernel version. Most people do not write kernel modules, so generally not an issue. (I did, many years ago.)
 
 

https://news.ycombinator.com/vote?id=47406236&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47406236
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47406027
 | 
next
https://news.ycombinator.com/item?id=47394022#47407360
 
[–]
javascript:void(0)
Isn't that the reason that Android phones have piss poor support after being released?
 
 

https://news.ycombinator.com/vote?id=47407360&how=up&goto=item%3Fid%3D47394022
anyonecancode
https://news.ycombinator.com/user?id=anyonecancode
 
3 months ago
https://news.ycombinator.com/item?id=47407360
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398384
 | 
next
https://news.ycombinator.com/item?id=47394022#47400503
 
[–]
javascript:void(0)
That may be the future, but we're not there yet. If you're having the LLM write to a high level language, eg java, javascript, python, etc, at some point there will be a bug or other incident that requires a human to read the code to fix it or make a change. Sure, that human will probably use an LLM as part of that, but they'll still need be able to tell what the code is doing, and LLMs simply are not reliable enough yet that you just blindly have them read the code, change it, and trust them that it's correct, secure, and performant. Sure, you can focus on writing tests and specs to verify, but you're going to spend a lot more time going in agentic loops trying to figure out why things aren't quite right vs a human actually being able to understand the code and give the LLM clear direction.
So long as this is all true, then the code needs to be human readable, even if it's not human-written.
Maybe we'll get to the point that LLMS really are equivalent to compilers in terms of reliability -- but at that point, why would be have them write in Java or other human-readable languages? LLMs would 
be
 a compiler at that point, with a natural-language UI, outputing some kind of machine code. Until then, we do need readable code.
 
 

https://news.ycombinator.com/vote?id=47407550&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47407550
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47407360
 | 
next
https://news.ycombinator.com/item?id=47394022#47400503
 
[–]
javascript:void(0)
Me: My code isn't giving the expected result $y when I do $x.
Codex: runs the code, reproduces the incorrect behavior I described finds the bug, reruns the code and gets the result I told it I expected. It iterates until it gets it right 
and
 runs my other unit and integration tests.
This isn't rocket science.
 
 

https://news.ycombinator.com/vote?id=47400503&how=up&goto=item%3Fid%3D47394022
AstroBen
https://news.ycombinator.com/user?id=AstroBen
 
3 months ago
https://news.ycombinator.com/item?id=47400503
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397974
 | 
prev
https://news.ycombinator.com/item?id=47394022#47407360
 | 
next
https://news.ycombinator.com/item?id=47394022#47398086
 
[–]
javascript:void(0)
This is fantasy completely disconnected from reality.
Have you ever tried writing tests for spaghetti code? It's hell compared to testing good code. LLMs require a very strong test harness or they're going to break things.
Have you tried reading and understanding spaghetti code? How do you verify it does what you want, and none of what you don't want?
Many code design techniques were created to make things easy for humans to understand. That understanding needs to be there whether you're modifying it yourself or reviewing the code.
Developers are struggling because they know what happens when you have 100k lines of slop.
If things keep speeding in this direction we're going to wake up to a world of pain in 3 years and AI isn't going to get us out of it.
 
 

https://news.ycombinator.com/vote?id=47400612&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400612
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400503
 | 
next
https://news.ycombinator.com/item?id=47394022#47398086
 
[–]
javascript:void(0)
I've found much more utility even pre AI in a good suite of integration tests than unit tests. For instance if you are doing a test harness for an API, it doesn't matter if you even have access to the code if you are writing tests against the API surface itself.
 
 

https://news.ycombinator.com/vote?id=47400705&how=up&goto=item%3Fid%3D47394022
AstroBen
https://news.ycombinator.com/user?id=AstroBen
 
3 months ago
https://news.ycombinator.com/item?id=47400705
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400612
 | 
next
https://news.ycombinator.com/item?id=47394022#47398086
 
[–]
javascript:void(0)
I do too, but it comes from a bang-for-your-buck and not a test coverage standpoint. Test coverage goes up in importance as you lean more on AI to do the implementation IMO.
 
 

https://news.ycombinator.com/vote?id=47398086&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47398086
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397898
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397974
 | 
next
https://news.ycombinator.com/item?id=47394022#47399153
 
[–]
javascript:void(0)
You did see the part about my unit, integration and scalability testing? The testing harness is what prevents the fragility.
It doesn't matter to AI whether the code is spaghetti code or not. What you said was only important when humans were maintaining the code.
No human should ever be forced to look at the code behind my vibe coded internal admin portal that was created with straight Python, no frameworks, server side rendered and produced HTML and JS for the front end all hosted in a single Lambda including much of the backend API.
I haven't done web development since 2002 with Classic ASP besides some copy and paste feature work once in a blue moon.
In my repos - post AI. My Claude/Agent files have summaries of the initial statement of work, the transcripts from the requirement sessions, my well labeled design diagrams , my design review sessions transcripts where I explained it to client and answered questions and a link to the Google NotebookLM project with all of the artifacts. I have separate md files for different implemtation components.
The NotebookLM project can be used for any future maintainers to ask questions about the project based on all of the artifacts.
 
 

https://news.ycombinator.com/vote?id=47398248&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398248
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398086
 | 
next
https://news.ycombinator.com/item?id=47394022#47399967
 
[–]
javascript:void(0)
In my experience using AI to work on existing systems, the AI definitely performs much better on code that humans would consider readable.
You can't really sit here talking about architecting greenfield systems with AI using methodology that didn't exist 6 months ago while confidently proclaiming that “trust me they'll be maintainable”.
Well you can, and most consultants do tend to do that, but it's not worth much.
 
 

https://news.ycombinator.com/vote?id=47398779&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47398779
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398248
 | 
next
https://news.ycombinator.com/item?id=47394022#47401340
 
[–]
javascript:void(0)
I wasn't born into consulting in 1996. AI for coding is by definition the worse today that it will ever be. What makes you think that the complexity of the code will increase faster than the capability of the agents?
 
 

https://news.ycombinator.com/vote?id=47401223&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47401223
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398779
 | 
next
https://news.ycombinator.com/item?id=47394022#47401340
 
[–]
javascript:void(0)
You might have maintained large systems long ago, but if you haven't done it in a while your skill atrophies.
And the most important part is you haven't maintained any large systems written by AI, so stating that they will work is nonsense.
I won't state that AI can't get better. AI agents might replace all of us in the future. But what I will tell you is based on my experience and reasoning I have very strong doubts about the maintainability of AI generated code that no one has approved or understands. The burden of proof isn't on the person saying "maybe we should slow down and understand the consequences before we introduce a massive change." It's on the person saying "trust me it will work even though I have absolutely no evidence to support my claim".
 
 

https://news.ycombinator.com/vote?id=47401699&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47401699
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401223
 | 
next
https://news.ycombinator.com/item?id=47394022#47401340
 
[–]
javascript:void(0)
Well seeing that Claude code was just introduced last year - it couldn't have been that long since I didn't code with AI.
And did I mention I got my start working in cloud consulting as a full time blue badge, RSU earning employee at a little company you might have heard of based in Seattle? So since I have worked at the second largest employee in the US, unless you have worked for Walmart - I don't think you have worked for a larger company than I have.
Oh did I also mention that I worked at GE when it was #6 in market cap?
These were some of the business requirements we had to implement for the railroad car repair interchange management software
https://www.rmimimra.com/media/attachments/2020/12/23/indust...
https://www.rmimimra.com/media/attachments/2020/12/23/industry-standards---final.pdf
You better believe we had a rigorous set of automated tests in something as highly regulated with real world consequences as the railroad transportation industry. AI would have been perfect for that because the requirements were well documented and the test coverage was extreme.
And unless your experience coding is before 1986 when I was coding in assembly language in 65C02 as a hobby, I think I might have a wee bit more than you.
I think you should probably save your “I have more experience” for someone who hasn't been doing this professionally for 30 years for everything from startups, to large enterprises, to BigTech.
 
 

https://news.ycombinator.com/vote?id=47403701&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403701
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401699
 | 
next
https://news.ycombinator.com/item?id=47394022#47401340
 
[–]
javascript:void(0)
That's my entire point!
Yeah a real 
wee
 bit. I started in the late 80s in Tandy Basic.
I never said anything about having more experience than you, but I've been doing this almost as long as you have. Also at everywhere from startups to large enterprises to BigTech.
But relevant to the discussion at hand, I haven't been consulting for the last part of my career where I could just lob something over the fence and walk away before I have to deal with the consequences of my decisions. This is what seems to be coloring your experience.
 
 

https://news.ycombinator.com/vote?id=47401340&how=up&goto=item%3Fid%3D47394022
Rapzid
https://news.ycombinator.com/user?id=Rapzid
 
3 months ago
https://news.ycombinator.com/item?id=47401340
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398248
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398779
 | 
next
https://news.ycombinator.com/item?id=47394022#47399967
 
[–]
javascript:void(0)
Yeah they do.
I'm familiar enough with the claims to feel confident there is plenty of nefarious astroturfing occurring all over the web including on HN.
 
 

https://news.ycombinator.com/vote?id=47405707&how=up&goto=item%3Fid%3D47394022
ugtr3
https://news.ycombinator.com/user?id=ugtr3
 
3 months ago
https://news.ycombinator.com/item?id=47405707
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401340
 | 
next
https://news.ycombinator.com/item?id=47394022#47399967
 
[–]
javascript:void(0)
Indeed. Astro turfing posts have a particular smell to them.
 
 

https://news.ycombinator.com/vote?id=47399967&how=up&goto=item%3Fid%3D47394022
integralid
https://news.ycombinator.com/user?id=integralid
 
3 months ago
https://news.ycombinator.com/item?id=47399967
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398086
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398248
 | 
next
https://news.ycombinator.com/item?id=47394022#47399153
 
[–]
javascript:void(0)
Except security researchers. I work in cybersecurity and we already see vulnerabilities caused by careless AI generated code in the wild. And this will only get worse (or better for my job security).
 
 

https://news.ycombinator.com/vote?id=47406120&how=up&goto=item%3Fid%3D47394022
icedchai
https://news.ycombinator.com/user?id=icedchai
 
3 months ago
https://news.ycombinator.com/item?id=47406120
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399967
 | 
next
https://news.ycombinator.com/item?id=47394022#47400020
 
[–]
javascript:void(0)
Yep. Unless you inspect the payload and actual code / validation logic, there is nothing to distinguish an API that "works" and is totally insecure from one that is actually secure. I've seen Claude Code generate insecure APIs that "worked", only to find decided to add a user ID as a parameter and totally ignore any API token.
 
 

https://news.ycombinator.com/vote?id=47400020&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400020
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399967
 | 
prev
https://news.ycombinator.com/item?id=47394022#47406120
 | 
next
https://news.ycombinator.com/item?id=47394022#47399153
 
[–]
javascript:void(0)
And you haven't seen security vulnerabilities in the wild based on careless human generated code?
 
 

https://news.ycombinator.com/vote?id=47399153&how=up&goto=item%3Fid%3D47394022
soulofmischief
https://news.ycombinator.com/user?id=soulofmischief
 
3 months ago
https://news.ycombinator.com/item?id=47399153
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397898
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398086
 | 
next
https://news.ycombinator.com/item?id=47394022#47402946
 
[–]
javascript:void(0)
I would like to introduce you to the concepts of interfaces and memory safety.
Well-designed interfaces enforce decoupling where it matters most. And believe it or not, you can do review passes after an LLM writes code, to catch bugs, security issues, bad architecture, reduce complexity, etc.
 
 

https://news.ycombinator.com/vote?id=47402946&how=up&goto=item%3Fid%3D47394022
icedchai
https://news.ycombinator.com/user?id=icedchai
 
3 months ago
https://news.ycombinator.com/item?id=47402946
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397898
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399153
 | 
next
https://news.ycombinator.com/item?id=47394022#47397952
 
[–]
javascript:void(0)
In my experience, consulting companies typically have a bunch of low-to-medium skilled developers producing crap, so the situation with AI isn't much different. Some are better than others, of course.
 
 

https://news.ycombinator.com/vote?id=47397952&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47397952
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397898
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402946
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
Also developer UX, common antipatterns, etc
This “the only thing that matters about code is whether it meets requirements” is such a tired take and I can't imagine anyone seriously spouting it has has had to maintain real software.
 
 

https://news.ycombinator.com/vote?id=47398035&how=up&goto=item%3Fid%3D47394022
vova_hn2
https://news.ycombinator.com/user?id=vova_hn2
 
3 months ago
https://news.ycombinator.com/item?id=47398035
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397952
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
I personally haven't made my my mind either way yet, but I imagine that a vibecoding advocate could say to you that maintaining code makes sense only when the code is expensive to produce.
If the code is cheap to produce, you don't maintain it, you just throw it away and regenerate.
 
 

https://news.ycombinator.com/vote?id=47398552&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398552
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398035
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
If you have users, this only works if you have managed to encode nearly every user observable behavior into your test suite.
I've never seen this done even with LLMs. Not even close. And even if you did it, the test suite is almost definitely more complex than the code and will suffer from all the same maintainability problems.
 
 

https://news.ycombinator.com/vote?id=47399165&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399165
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398552
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
And in that case how is it different than when random developers come on and off projects?
 
 

https://news.ycombinator.com/vote?id=47401134&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47401134
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399165
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
For one you don't let random devs hop on and off projects without code reviews, which is what people who say they don't care about the code should be doing.
And 2 clearly agents are worse at reasoning through code changes than humans are.
 
 

https://news.ycombinator.com/vote?id=47402407&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47402407
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401134
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
And the team lead with 7 developers isn't going to be doing code reviews of all the code. At most he is going to be reviewing those critical paths.
I could care less about the implementation behind the vibe coded admin website that will only be used by a dozen people. I care about the authorization.
Even the ETL job, I cared only about the performance characteristics, the resulting correctness, concurrency, logging, and correctness of the results.
 
 

https://news.ycombinator.com/vote?id=47403372&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403372
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402407
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
Why would the team lead need to review all 7 developers? If you're regularly swapping out every single developer on a team, you're gonna have problems.
If you only have 12 users sure do whatever you want. If you don't have users nothing is hard.
 
 

https://news.ycombinator.com/vote?id=47405750&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47405750
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403372
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
It was 12 users who monitored and managed the ETL job. If I had 1 million users what difference would the front end code have made if the backend architecture was secure, scalable, etc. if the login is taking 2 minutes. I can guarantee you it's not because the developer failed to write SOLID code…
 
 

https://news.ycombinator.com/vote?id=47411462&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47411462
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47405750
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
There you go arguing with strawmen again. I don't give a single flying flip about SOLID, or Clean Code, or GoF. People who read Clean Code as their first programming but and made that their identity have been the bane of my existence as a programmer.
It's not about how long something is taking although that is an observable behavior. It's about how 1 million users over time will develop ways of using your product that you never thought about, much less documented or tested.
Perhaps you've heard the phrase “The purpose of the system is what it does”?
The system is the not the spec or the tests. An agent is only reasoning about how to add a new feature, and the only thing preventing from changing observable behavior is the tests. So if an agent is changing untested behavior it's changing the purpose of the system.
 
 

https://news.ycombinator.com/vote?id=47412321&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47412321
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47411462
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
Thats not exactly a great argument depending on undefined behavior. Should I as a developer depend on “undefined behavior” in C (yes undefined behavior is explicitly defined in C)?
On a user facing note, I did a project where I threw stats in DDB just for my own observation knowing very well that was the worse database to use since it does no aggregation type queries (sum, average, etc). I didn't document it, I didn't talk about it and yet the developer on their side used it when I specifically documented that he should subscribe to the SNS topic that I emit events to and ingest the data to his own Oracle database.
No library maintainer for instance of C# or Java library is going to promise that private functions that a developer got access to via reflection is not going to change.
I'm solely responsible for public documented interfaces and behaviors.
Oh and that gets back to an earlier point, how do I know that my systems will be able to be maintained? For the most part I design my systems to do a “thing” with clearly defined entry points and extension points and exit points and interfaces. In the case I'm referring to above - it was a search system that was based on “agents” some RAG based, one using a Postgres database with a similarity search, and an orchestrator. You extend the system by adding a new lambda and registering it and prioritizing results if the agent with my vibe coded GUI.
Apple is famous for instance for not caring if you tried to use private APIs and it broke in a new version.
 
 

https://news.ycombinator.com/vote?id=47413465&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47413465
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47412321
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
This is a topic I happen to know a little about. You as a programmer should probably avoid UB for the most part, but the key point here is that programmers don't follow this rule.
A while back a study found that SQLite, PostgreSQL, GCC, LLVM, Python, OpenSSL, Firefox all contained code that relied on unsigned overflow. Basically even though the C spec says it's UB, almost every CPU you'll run into uses twos compliment so it naturally wraps around.
When compiler authors tried to aggressively optimize and broke everything they had to roll that back and/or release flags to allow users to continue using the old behavior.
This kind of stuff happens all the time. The C spec is nearly worthless paper because what matters is what the compilers implement not what the spec tells them to implement. If you spend time talking to LLVM folks, breaking the world because they changed some unspecified behavior is one of their top concerns.
And this is programmers who know how to read specs.
Imagine you're working on software used by nearly ever major movie studio. You think those users have ever read the spec for the software they are using? They don't care about UB, they don't even know the concept exists.
It doesn't matter how well tested I think my software is. Even very simple software will have unspecified and untested behavior. You give the software a little time and some users and they will start exploiting that behavior. It I unleashed some agents on our code base to implement well architected features, without reviewing their output, and could somehow magically ensure that they didn't break any workflow that we had documented, tested, or that was even known about to our organization, the head of NBCUniversal would be on the phone with my bosses bosses bosses boss demanding we change it back to the way it was within 24 hours.
Users depend on what the system does, not what you as a designer think it does. The purpose of a system is what it does. Not what it says it does.
We've been having this argument since the waterfall days. The code is the spec. We aren't architects drawing blueprints. The code is the blueprint. If it was that easy to design systems like this all code would already be generated from UML graphs and flowcharts like we've been able to do for decades.
 
 

https://news.ycombinator.com/vote?id=47414336&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47414336
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47413465
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
Back in my C days, I wrote C code that had to work on PCs that I had access to and mainframes that I never got a chance to test on on ancient compilers. Some little endian and some big endian. We had a custom make file that tried to warn against non portable behavior.
But are you really arguing that I shouldn't feel free to change private methods because some developer somewhere might use reflection to access it or I shouldn't change the schema of Sqllite database that is deeply embedded in library folder somewhere?
Or are you saying I should feel free to do
char 
foo() { char
 bar = “hello world”; return bar; }
and be upset when weird things happen when I upgrade my compiler?
What do you think Apple would do in that situation? They have multiple times over the past 3 decades said tough noogies if you didn't do things using the documented APIs.
Jeff Bezos mandated documented interfaces and the “API mandate” in 2002z
 
 

https://news.ycombinator.com/vote?id=47418245&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47418245
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47414336
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
You can change whatever you want, but if you make an internal change without signifying that it's a branding change and it breaks a significant number of your important users workflows, you're gonna have a bad time.
But that's mostly irrelevant because most software isn't written to be used by developers who should know better than to rely on undocumented behavior.
As for Amazon, the API mandate gets violated all the time.
And it's funny that you should mention them because they just started requiring a code review from a senior engineer for all merged after issues with vibe coding.
 
 

https://news.ycombinator.com/vote?id=47419742&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47419742
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47418245
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
So you know that from working at Amazon - ie they aren't micro service focused (yes I worked at AWS) or that they break it all of the time?
You keep saying you can't break users workflows. But that doesn't jibe with reality. In B2B, the user isn't the customer. B2B businesses break users workflows all of the time. I know people complain about how often AWS changes the console UI all of the time and you hear the same gripes from users all of the time in consumer software. How many people cancel their SaaS contracts because of a change in UI if the features remain?
Photoshop users complain (or did when I followed it closely) all of the time when Adobe broke their automations via AppleScript. They kept buying it.
But the point is that you specifically said that you can't treat a system as a system of black boxes with well defined interfaces. You damn sure better believe any implementation I started from scratch with a team I did in product companies. It's the only way you can keep a system manageable with ramp up.
And this is also part of the subject of Stevey's “Platfotm Rant”
https://gist.github.com/chitchcock/1281611
https://gist.github.com/chitchcock/1281611
It's the reason you can't fathom that you don't have to worry about spooky action at a distance when you enforce modularity at the system level.
And even for customers, Apple has a long history of breaking backward compatible and while Microsoft worships at the alter of backward compatibility, major versions of Office have been breaking muscle memory UI for users since the 80s.
If an end users workflow is dependent on mucking with the backend database - more of an issue with desktop software - or an undocumented feature, it's the same.
Developers have been doing that for years - changing the UI.
 
 

https://news.ycombinator.com/vote?id=47420292&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47420292
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47419742
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
You seem to have had a very specific career that consisted mostly of building something new and moving on before you had any idea how it held up long term. I've heard enough to pretty confident that despite a 30 year career you don't actually have much experience in anything other than greenfield projects. This explains the weird overconfidence you have in a methodology with absolutely no track record.
There's a difference in breaking some user's workflow ever no and again and doing it every time you add a feature or fix a bug.
 
 

https://news.ycombinator.com/vote?id=47428627&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47428627
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47420292
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
So while you are attacking me.
You have claimed that Amazon doesn't do micro services and don't follow it even though you haven't worked there (and I have) 
and
 I cited a famous letter from an ex-Google/ex-Amazon person who talked about the difference
I gave you plenty of well known B2B and B2C companies that “break user workflows” all of the time in new versions
I asked you should you go out of your way to not change undocumented behavior and gave you examples in both C (officially undefined behavior), and in managed languages like C# and Java.
Your concern about “breaking user workflows flows” because they relied on undocumented behavior is not shared by any major B2B or B2C company. Hell changing things up to break documented user workflows is not shared. The buyer “the business” is just going to tell the users to suck it up and get use to.
Again - I've got a proven track record of multiple companies hiring me including one trying to hire me back - well the acquirer of the startup wanting me back after I left before it got acquired - that's existence proof that my architectural decisions stood the test of time over the almost four years after I left.
As someone who can talk just as well about the intricacies of C as well “how to create a sustainable development department”, do I really sound like I'm bullshitting?
 
 

https://news.ycombinator.com/vote?id=47430597&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47430597
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47428627
 | 
next
https://news.ycombinator.com/item?id=47394022#47398111
 
[–]
javascript:void(0)
I don't trust the technical chops of anyone who has never stuck around long enough to see how their architecture changed and developed with use.
I've worked with plenty of expert beginners who sound exactly like you. In addition to the work history, your argument style screams overconfident bullshitter who reads the first line in an email and skips the rest.
You read me saying that companies routinely violate their technical guidelines and you skip reading and jump directly to the conclusion that I'm awfully that microservices don't exist because that scores you a point in your mind and keeps you from having to think about possibly being wrong about something.
 
 

https://news.ycombinator.com/vote?id=47398111&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47398111
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397952
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398035
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
The developer UX are the markdown files if no developer ever looks at the code.
Whether you are tired of it or not, absolutely no one in your value you chain - your customers who give your company money or your management chain cares about your code beyond does it meet the functional and non functional requirements - they never did.
And of course whether it was done on time and on budget
 
 

https://news.ycombinator.com/vote?id=47398959&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47398959
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398111
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
As a consumer of goods, I care quite a bit about many of the “hows” of those goods just as much as the “whats”.
My home, which I own, for example, is very much a “what” that keeps me warm and dry. But the “how” of it was constructed is the difference between (1) me cursing the amateur and careless decision making of builders and (2) quietly sipping a cocktail on the beach, free of a care in the world.
“How” doesn't matter until it matters, like when you put too much weight onto that piece of particle board IKEA furniture.
 
 

https://news.ycombinator.com/vote?id=47399085&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399085
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398959
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
Do you know how every nail was put into your house? Does the general contractor?
 
 

https://news.ycombinator.com/vote?id=47399713&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47399713
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399085
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
I know where they fucked up and cost me thousands of dollars due to cutting corners during build-out and poor architectural decisions during planning. These kinds of things become very obvious during destructive inspection, which is probably why there are so many limitations on warranties; I digress.
He's mildly controversial, but watch some @cyfyhomeinspections on YouTube to get a good idea of what you can infer of the “how” of building homes and how it affects homeowners. Especially relevant here because he seems to specialize in inspecting homes that are part of large developments where a single company builds out many homes very quickly and cuts tons of corners and makes the same mistakes repeatedly, kind of like LLM-generated code.
 
 

https://news.ycombinator.com/vote?id=47399994&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399994
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399713
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
So you're saying that whether it's humans or AI - when you delegate something to others you have no idea whether it's producing quality without you checking yourself…
 
 

https://news.ycombinator.com/vote?id=47400169&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47400169
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399994
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
No, I can have 
some
 idea. For example, “brand perception”, which can be negatively impacted pretty heavily if things go south too often. See: GitHub, most recently.
I mean, there are already companies that have a negative reputation regarding software quality due to significant outsourcing (consultancies), or bloated management (IBM), or whatever tf Oracle does. We don't have to pretend there's a universe where software quality matters, we already live in one. AI will just be one more way to tank your company's reputation with regards to quality, even if you can maintain profitability otherwise through business development schemes.
 
 

https://news.ycombinator.com/vote?id=47400250&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400250
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400169
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
So as long as it is meeting the requirements of “it stays up consistently and doesn't lose my code” you really don't care how it was coded…
The same as I've been arguing about using an agent to do the grunt work of coding.
If GitHub's login is slow, it isn't because someone or something didn't write SOLID code.
 
 

https://news.ycombinator.com/vote?id=47401295&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47401295
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400250
 | 
next
https://news.ycombinator.com/item?id=47394022#47398311
 
[–]
javascript:void(0)
I don't think we'll come to common ground on this topic due to mismatching definitions of fundamental concepts of software engineering. Maybe let's meet again in a year or two and reflect upon our disagreement.
 
 

https://news.ycombinator.com/vote?id=47398311&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47398311
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398111
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398959
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
If you maintain software used by tens of thousands to millions of people, you will quickly realize that no specified functional and non-functional requirements cover anywhere near all user workflows or observable behaviors.
If you mostly parachute in solutions as a consultant, or hand down architecture from above, you won't have much experience with that, so it's reasonable for you to underestimate it.
 
 

https://news.ycombinator.com/vote?id=47399149&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47399149
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398311
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
AWS S3 by itself is made up of 300 microservices. Absolutely no developer at AWS knows how every line of code was written.
The scalability requirements are part of the “non functional requirements”. I know that the vibe coded internal admin website will never be used by more than a dozen people just like I know the ETL implementation can scale to the required number of transactions because I actually tested it for that scalability.
In fact, the one I gave to the client was my second attempt because my first one fell flat on its face when I ran it at the required scale
 
 

https://news.ycombinator.com/vote?id=47401146&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47401146
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399149
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
I'm not talking about scalability requirements. I'm talking about the different workflows that 10 million people will come up with when they use a program that won't exist in any requirements docs.
 
 

https://news.ycombinator.com/vote?id=47403213&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47403213
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401146
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
Do you think that AI coded implementations just magically get done witkoug requirements?
 
 

https://news.ycombinator.com/vote?id=47403407&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47403407
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403213
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
You're not understanding what I'm saying. If you go tell your agents to add this new feature to an app, and you do it by writing up a new requirements doc. If you don't review the code, they will change a million different "implementation details" in order to add the new feature that will break workflows that aren't specified anywhere.
The code is the spec. No natural language specification will ever full cover every behavior you care about in practice. No test suite will either.
If you don't know this, you haven't maintained non-trivial software.
 
 

https://news.ycombinator.com/vote?id=47403914&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47403914
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403407
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
And have you never seen what a overzealous developer can do and wreck havoc on an existing code base without a testing harness? Let a developer lose with something like Resharper which has existed since at least the mid 2000's
If your test don't cover your use cases, you are just as much in danger from a new developer. It's an issue with your testing methodology in either case.
And there is also plan mode that you should be reviewing
 
 

https://news.ycombinator.com/vote?id=47404048&how=up&goto=item%3Fid%3D47394022
sarchertech
https://news.ycombinator.com/user?id=sarchertech
 
3 months ago
https://news.ycombinator.com/item?id=47404048
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403914
 | 
next
https://news.ycombinator.com/item?id=47394022#47401494
 
[–]
javascript:void(0)
Of course they can. Those kinds of developers cause problems constantly. It's one of the biggest reasons we have code reviews. Automated tests help too.
But even with all of that we still have bugs and broken workflows. Now take that human and remove most of their ability to reason about how code changes affect non-local functionality and make them type 1000x faster. And don't have anyone review their code.
The code is the spec, someone needs to be reviewing it.
 
 

https://news.ycombinator.com/vote?id=47401494&how=up&goto=item%3Fid%3D47394022
keeda
https://news.ycombinator.com/user?id=keeda
 
3 months ago
https://news.ycombinator.com/item?id=47401494
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397738
 | 
next
https://news.ycombinator.com/item?id=47394022#47397237
 
[–]
javascript:void(0)
I dunno, I have extensive experience reviewing code, and I still review all the AI generated code I own, and I find nothing to complain about in the vast majority of cases. I think it 
is
 based on "holding it right."
For instance, I've commented before that I tend to decompose tasks intended for AI to a level where I already know the "shape" of the code in my head, as well as what the test cases should look like. So reviewing the generated code and tests for me is pretty quick because it's almost like reading a book I've already read before, and if something is wrong it jumps out quickly. And I find things jumping out more and more infrequently.
Note that decomposing tasks means I'm doing the design and architecture, which I still don't trust the AI to do... but over the years the scope of tasks has gone up from individual functions to entire modules.
In fact, I'm getting convinced vibe coding could work now, but it still requires a great deal of skill. You have to give it the right context and sophisticated validation mechanisms that help it self-correct as well as let you validate functionality very quickly with minimal looks at the code itself.
 
 

https://news.ycombinator.com/vote?id=47402351&how=up&goto=item%3Fid%3D47394022
arikrahman
https://news.ycombinator.com/user?id=arikrahman
 
3 months ago
https://news.ycombinator.com/item?id=47402351
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401494
 | 
next
https://news.ycombinator.com/item?id=47394022#47397237
 
[–]
javascript:void(0)
"Holding it right" has been one of my biggest problems. Many times I find the output affected by prompt poisoning, and I have to throw away the entire context.
 
 

https://news.ycombinator.com/vote?id=47397237&how=up&goto=item%3Fid%3D47394022
mikkupikku
https://news.ycombinator.com/user?id=mikkupikku
 
3 months ago
https://news.ycombinator.com/item?id=47397237
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47401494
 | 
next
https://news.ycombinator.com/item?id=47394022#47397653
 
[–]
javascript:void(0)
It's not skill with talking to an LLM, it's the users skill and experience with the problem they're asking the LLM to solve. They work better for problems the prompter knows well and poorly for problems the prompter doesn't really understand.
Try it yourself. Ask claude for something you don't really understand. Then learn that thing, get a fresh instance of claude and try again, this time it will work much better because your knowledge and experience will be naturally embedded in the prompt you write up.
 
 

https://news.ycombinator.com/vote?id=47397299&how=up&goto=item%3Fid%3D47394022
Roxxik
https://news.ycombinator.com/user?id=Roxxik
 
3 months ago
https://news.ycombinator.com/item?id=47397299
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397237
 | 
next
https://news.ycombinator.com/item?id=47394022#47397653
 
[–]
javascript:void(0)
Not only you understanding the how, but you not understanding the goal.
I often use AI successfully, but in a few cases I had, it was bad. That was when I didn't even know the end goal and regularly switched the fundamental assumptions that the LLM tried to build up.
One case was a simulation where I wanted to see some specific property in the convergence behavior, but I had no idea how it would get there in the dynamics of the simulation or how it should behave when perturbed.
So the LLM tried many fundamentally different approaches and when I had something that specifically did not work it immediately switched approaches.
Next time I get to work on this (toy) problem I will let it implement some of them, fully parametrize them and let me have a go with it. There is a concrete goal and I can play around myself to see if my specific convergence criterium is even possible.
 
 

https://news.ycombinator.com/vote?id=47397897&how=up&goto=item%3Fid%3D47394022
FeepingCreature
https://news.ycombinator.com/user?id=FeepingCreature
 
3 months ago
https://news.ycombinator.com/item?id=47397897
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397299
 | 
next
https://news.ycombinator.com/item?id=47394022#47397405
 
[–]
javascript:void(0)
LLMs massively reduce the cost of "let's just try this". I think trying to migrate your entire repo is usually a fool's errand. Figure out a way to break the load-bearing part of the problem out into a sub-project, solve it there, iterate as much as you like. Claude can give you a test gui in one or two minutes, as often as you like. When you have it reliably working there, make Claude write up a detailed spec and bring that back to the main project.
 
 

https://news.ycombinator.com/vote?id=47398830&how=up&goto=item%3Fid%3D47394022
mikkupikku
https://news.ycombinator.com/user?id=mikkupikku
 
3 months ago
https://news.ycombinator.com/item?id=47398830
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397897
 | 
next
https://news.ycombinator.com/item?id=47394022#47397405
 
[–]
javascript:void(0)
Claude is surprisingly good at GUI work I've been learning, not just getting stuff working but also creating reasonably tasteful and practical designs. Asking claude in the browser to mock up a GUI and then having claude code implement it is a surprisingly powerful workflow.
 
 

https://news.ycombinator.com/vote?id=47400393&how=up&goto=item%3Fid%3D47394022
raw_anon_1111
https://news.ycombinator.com/user?id=raw_anon_1111
 
3 months ago
https://news.ycombinator.com/item?id=47400393
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398830
 | 
next
https://news.ycombinator.com/item?id=47394022#47397405
 
[–]
javascript:void(0)
I'm far away from a web developer or a web designer. But I think I intuitively understand how to put myself in the shoes of the end user when it comes to UX.
I noticed that Claude is awful at understanding what makes good UX even as simple as something as if you have a one line input box and button that lets you submit the line of text, you should wire it up so a user can press return instead of pressing the button or thinking about them being able to tab through inputs in a decent order
 
 

https://news.ycombinator.com/vote?id=47423951&how=up&goto=item%3Fid%3D47394022
FeepingCreature
https://news.ycombinator.com/user?id=FeepingCreature
 
3 months ago
https://news.ycombinator.com/item?id=47423951
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400393
 | 
next
https://news.ycombinator.com/item?id=47394022#47397405
 
[–]
javascript:void(0)
yeah as it's not using its own flow you have to give it a bit of feedback. so it goes with any dev work... I think you underestimate how bad programmer uis are.
 
 

https://news.ycombinator.com/vote?id=47397405&how=up&goto=item%3Fid%3D47394022
mikkupikku
https://news.ycombinator.com/user?id=mikkupikku
 
3 months ago
https://news.ycombinator.com/item?id=47397405
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397299
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397897
 | 
next
https://news.ycombinator.com/item?id=47394022#47397653
 
[–]
javascript:void(0)
Yup, same sort of experience. If I'm fishing for something based on vibes that I can't really visualize or explain, it's going to be a slog. That said, telling the LLM the nature of my dilemma up front, warning it that I'll be waffling, seems to help a little.
 
 

https://news.ycombinator.com/vote?id=47397653&how=up&goto=item%3Fid%3D47394022
__alexs
https://news.ycombinator.com/user?id=__alexs
 
3 months ago
https://news.ycombinator.com/item?id=47397653
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397237
 | 
next
https://news.ycombinator.com/item?id=47394022#47397565
 
[–]
javascript:void(0)
I review most of the code I get LLMs to write and actually I think the main challenge is finding the right chunk size for each task you ask it to do.
As I use it more I gain more intuition about the kinds of problems it can handle on it's, vs those that I need to work on breaking down into smaller pieces before setting it loose.
Without research and planning agents are mostly very expensive and slow to get things done, if they even can. However with the right initial breakdown and specification of the work they are incredibly fast.
 
 

https://news.ycombinator.com/vote?id=47397565&how=up&goto=item%3Fid%3D47394022
make_it_sure
https://news.ycombinator.com/user?id=make_it_sure
 
3 months ago
https://news.ycombinator.com/item?id=47397565
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397653
 | 
next
https://news.ycombinator.com/item?id=47394022#47397248
 
[–]
javascript:void(0)
you are overestimating the skill of code review. Some people have very specific ways of writing code and solving problems which are not aligned what LLMs wrote, but doesn't mean it's wrong.
I know senior developers that are very radical on some nonsense patterns they think are much better than others. If they see code that don't follow them, they say it's trash.
Even so, you can guide the LLM to write the code as you like.
And you are wrong, it's a lot on how people write the prompt.
 
 

https://news.ycombinator.com/vote?id=47398410&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47398410
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397565
 | 
next
https://news.ycombinator.com/item?id=47394022#47397248
 
[–]
javascript:void(0)
“You are overestimating the skill of [reading, comprehending, and critically assessing code of a non-guaranteed quality]” is an absurd statement if you properly expand out what “code review” means.
I don't care if you code review the CSS file for the Bojangles online menu web page, but you better be code reviewing the firmware for my dad's pacemaker.
This whole back and forth with LLM-generated code makes me think that the marginal utility of a lot of code the strong proponents write is <1¢. If I fuck up my code, it costs our partners $200/hr per false alert, which obliterates the profit margin of using our software in the first place.
 
 

https://news.ycombinator.com/vote?id=47399009&how=up&goto=item%3Fid%3D47394022
AIorNot
https://news.ycombinator.com/user?id=AIorNot
 
3 months ago
https://news.ycombinator.com/item?id=47399009
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398410
 | 
next
https://news.ycombinator.com/item?id=47394022#47397248
 
[–]
javascript:void(0)
By far most of the code LLMs write is for crappy crud apps and webapps not pacemakers and rockets
We can capture enough reliability on what LLMs produce there by guided integration tests and UX tests along with code review and using other LLMs to review along with other strategies to prvent semantic and code drift
Do you know how much crap wordpress ,drupal and Joomla sites I have seen?
Just that work can be automated away
But Ive also worked in high end and mission critical delivery and more formal verification etc - that's just moving the goalposts on what AI can do- it will get there eventually
Last year you all here were arguing AI Couldn't code - now everyone has moved the goalposts to formal high end and mission critical ops- yes when money matters we humans are still needed of course - no one denying that- its the utility of the sole human developer against the onslaught of machine aided coding
This profession is changing rapidly- people are stuck in denial
 
 

https://news.ycombinator.com/vote?id=47399605&how=up&goto=item%3Fid%3D47394022
datsci_est_2015
https://news.ycombinator.com/user?id=datsci_est_2015
 
3 months ago
https://news.ycombinator.com/item?id=47399605
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399009
 | 
next
https://news.ycombinator.com/item?id=47394022#47397248
 
[–]
javascript:void(0)
This is the nutshell of your argument. I'm not convinced. Technologies often hit a ceiling of utility.
Imagine a “progress curve” for every technology, x-axis time and y-axis utility. Not every progress curve is limitlessly exponential, or even linear - in fact, very few are. I would venture to guess that most technological progress actually mimics population growth curves, where a ceiling is hit based on fundamental restrictions like resource availability, and then either stabilizes or crashes.
I don't think LLMs are the AI endgame. They definitely have utility, but I think your argument boils down to a bold prediction of limitless progress of a specific technology (LLMs), even though that's quite rare historically.
 
 

https://news.ycombinator.com/vote?id=47434283&how=up&goto=item%3Fid%3D47394022
AIorNot
https://news.ycombinator.com/user?id=AIorNot
 
3 months ago
https://news.ycombinator.com/item?id=47434283
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399605
 | 
next
https://news.ycombinator.com/item?id=47394022#47397248
 
[–]
javascript:void(0)
I agree that LLM architecture might hit a ceiling (although the trajectory is still upward at present) but I meant Deep Learning in general
I do think there is a great deal of VC baiting hype in statements by Dario and Altman about ai coding but at the same time the progress has indeed been positive
We've finally proven or unlocked the secret to learning in machines - the only question is how fast that progress curve is - yes it might get stuck for a few years but I think this is really an inflection point that we've reached with these technologies
 
 

https://news.ycombinator.com/vote?id=47397248&how=up&goto=item%3Fid%3D47394022
cultofmetatron
https://news.ycombinator.com/user?id=cultofmetatron
 
3 months ago
https://news.ycombinator.com/item?id=47397248
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397565
 | 
next
https://news.ycombinator.com/item?id=47394022#47399634
 
[–]
javascript:void(0)
this makes me feel better about the amount of disdain I've been feeling about the output from these llms. sometimes it popsout exactly what I need but I can never count on it to not go offrails and require a lot of manual editing.
 
 

https://news.ycombinator.com/vote?id=47399407&how=up&goto=item%3Fid%3D47394022
mcv
https://news.ycombinator.com/user?id=mcv
 
3 months ago
https://news.ycombinator.com/item?id=47399407
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397248
 | 
next
https://news.ycombinator.com/item?id=47394022#47399634
 
[–]
javascript:void(0)
Exactly my experience. Sometimes it's brilliant, sometimes it produces crap, often it produces something that's a step in the right direction but requires extra work, and often it switches between these different results, producing great results at first until it gets stuck and desperately starts spewing out increasingly weird garbage.
As a developer, you always have to check the code, and recognise when it's just being stupid.
 
 

https://news.ycombinator.com/vote?id=47401609&how=up&goto=item%3Fid%3D47394022
k3nx
https://news.ycombinator.com/user?id=k3nx
 
3 months ago
https://news.ycombinator.com/item?id=47401609
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399407
 | 
next
https://news.ycombinator.com/item?id=47394022#47399634
 
[–]
javascript:void(0)
Question: are you manually making those changes to the "stupid" code? I've been having success with Claude using skills. When I see something I wouldn't do I say what I would have done, ask it for why it did it they way it did, then have it update the skills with a better plan. It's like a rubber duck and I understand it better. I have it make the code improvements. Laughing as it goes off the rails is entertaining though.
 
 

https://news.ycombinator.com/vote?id=47399634&how=up&goto=item%3Fid%3D47394022
jjice
https://news.ycombinator.com/user?id=jjice
 
3 months ago
https://news.ycombinator.com/item?id=47399634
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397248
 | 
next
https://news.ycombinator.com/item?id=47394022#47397736
 
[–]
javascript:void(0)
I think that's absolutely part of it. Code reviewing has become an even more valuable skill than ever, and I think the industry as a whole still is treating it as low value, despite it always being one of the most important parts of the process.
I think another part (among many others) is not the skill of the individual prompting, but on the quality of the code and documentation (human and agent specific) in the code base. I've seen people run willy-nilly with LLMs that are just spitting out nonsense because there are no examples for how the code should look, not documentation on how it should structure the code, and no human who knows what the code should work reviewing it. A deadly combo to produce bad, unmaintainable code.
If you sort those out though (and review your own damn LLM code), I think that's when LLMs become a powerful programming tool.
I really liked Simon Willison's way of putting it: "Your job is to deliver code you have proven to work".
https://simonwillison.net/2025/Dec/18/code-proven-to-work/
https://simonwillison.net/2025/Dec/18/code-proven-to-work/
 
 

https://news.ycombinator.com/vote?id=47397736&how=up&goto=item%3Fid%3D47394022
therealpygon
https://news.ycombinator.com/user?id=therealpygon
 
3 months ago
https://news.ycombinator.com/item?id=47397736
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399634
 | 
next
https://news.ycombinator.com/item?id=47394022#47397290
 
[–]
javascript:void(0)
I think that entirely disregarding the fundamental operation of LLMs with dismissiveness is ungrounded. You are literally saying it isn't a skill issue while pointing out a different skill issue.
It is absolutely, unequivocally, patently false to say that the input doesn't affect the output, and if the input has impact, then it IS a skill.
 
 

https://news.ycombinator.com/vote?id=47397290&how=up&goto=item%3Fid%3D47394022
kasey_junk
https://news.ycombinator.com/user?id=kasey_junk
 
3 months ago
https://news.ycombinator.com/item?id=47397290
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397736
 | 
next
https://news.ycombinator.com/item?id=47394022#47400685
 
[–]
javascript:void(0)
I think that code review experience is a big driver of success with the llms, but my take away is somewhat different. If you've spent a lot of time reviewing other people's code you realize the failures you see with llms are common failures full stop. Humans make them too.
I also think reviewable code, that is code specifically delivered in a manner that makes code review more straightforward was always valuable but now that the generation costs have lowered its relative value is much higher. So structuring your approach (including plans and prompts) to drive to easily reviewed code is a more valuable skill than before.
 
 

https://news.ycombinator.com/vote?id=47400685&how=up&goto=item%3Fid%3D47394022
tracker1
https://news.ycombinator.com/user?id=tracker1
 
3 months ago
https://news.ycombinator.com/item?id=47400685
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397290
 | 
next
https://news.ycombinator.com/item?id=47394022#47397578
 
[–]
javascript:void(0)
I'm relatively forgiving on bugs that I kind of expect to have happen... just from experience working with developers... a lot of the bugs I catch in LLMs are exactly the same as those I have seen from real people. The real difference is the turn around time. I can stay relatively busy just watching what the LLM is doing, while it's working... taking a moment to review more solidly when it's done on the task I gave it.
Sometimes, I'll give it recursive instructions... such as "these tests are correct, please re-run the test and correct the behavior until the tests work as expected." Usually more specific on the bugs, nature and how I think they should be fixed.
I do find that sometimes when dealing with UI effects, the agent will go down a bit of a rabbit hole... I wanted an image zoom control, and the agent kept trying to do it all with css scaling and the positioning was just broken.. eventually telling it to just use nested div's and scale an img element itself, using CSS positioning on the virtual dom for the positioning/overflow would be simpler, it actually did it.
I've seen similar issues where the agent will start changing a broken test, instead of understanding that the test is correct and the feature is broken... or tell my to change my API/instructions, when I WANT it to function a certain way, and it's the implementation that is wrong. It's kind of weird, like reasoning with a toddler sometimes.
 
 

https://news.ycombinator.com/vote?id=47397578&how=up&goto=item%3Fid%3D47394022
ozgrakkurt
https://news.ycombinator.com/user?id=ozgrakkurt
 
3 months ago
https://news.ycombinator.com/item?id=47397578
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400685
 | 
next
https://news.ycombinator.com/item?id=47394022#47397354
 
[–]
javascript:void(0)
Unfortunately it is impossible to ascertain what is what from what we read online. Everyone is different and use the tools in a different way. People also use different tools and do different things with them. Also each persons judgement can be wildly different like you are saying here.
We can't trust the measurements that companies post either because truth isn't their first goal.
Just use it or don't use it depending on how it works out imo. I personally find it marginally on the positive side for coding
 
 

https://news.ycombinator.com/vote?id=47397354&how=up&goto=item%3Fid%3D47394022
baxtr
https://news.ycombinator.com/user?id=baxtr
 
3 months ago
https://news.ycombinator.com/item?id=47397354
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397578
 | 
next
https://news.ycombinator.com/item?id=47394022#47405634
 
[–]
javascript:void(0)
I thought I try to debunk your argument with a food example. I am not sure I succeeded though. Judge for yourself:
It's always easier to blame the ingredients and convince yourself that you have some sort of talent in how you cook that others don't.
In my experience the differences are mostly in how the dishes produced in the kitchen are tasted. Chefs who have experience tasting dishes critically are more likely to find problems immediately and complain they aren't getting great results without a lot of careful adjustments. And those who rarely or never tasted food from other cooks are invariably going to miss stuff and rate the dishes they get higher.
 
 

https://news.ycombinator.com/vote?id=47397402&how=up&goto=item%3Fid%3D47394022
marviio
https://news.ycombinator.com/user?id=marviio
 
3 months ago
https://news.ycombinator.com/item?id=47397402
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397354
 | 
next
https://news.ycombinator.com/item?id=47394022#47405634
 
[–]
javascript:void(0)
In your example the one making the food is you. You would have to introduce a cooking robot for the analogy to match agentic coding.
 
 

https://news.ycombinator.com/vote?id=47397900&how=up&goto=item%3Fid%3D47394022
baxtr
https://news.ycombinator.com/user?id=baxtr
 
3 months ago
https://news.ycombinator.com/item?id=47397900
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397402
 | 
next
https://news.ycombinator.com/item?id=47394022#47405634
 
[–]
javascript:void(0)
Actually I would say it should be a cooking machine like. I am not too familiar with these machines however.
 
 

https://news.ycombinator.com/vote?id=47405634&how=up&goto=item%3Fid%3D47394022
BloondAndDoom
https://news.ycombinator.com/user?id=BloondAndDoom
 
3 months ago
https://news.ycombinator.com/item?id=47405634
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397354
 | 
next
https://news.ycombinator.com/item?id=47394022#47397850
 
[–]
javascript:void(0)
Also Claude (and possibly others) sometimes decide to build everything an obviously bad idea, shitty architecture then keeps doubling down into mess of a code. My realization is I need to be the manager architect, let it produce the plan then review and adjust the architecture. Once you get good control of architecture way may less bugs, and easier to fix. One final thing hook observability really early on and then force LLM to throw all exceptions instead of “safe fallbacks” which in practice means I will swallow everything a you. Will need look at all of the code every time there is bug.
 
 

https://news.ycombinator.com/vote?id=47397850&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47397850
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47405634
 | 
next
https://news.ycombinator.com/item?id=47394022#47402010
 
[–]
javascript:void(0)
Well, it's easily the simplest explanation, right?
 
 

https://news.ycombinator.com/vote?id=47402010&how=up&goto=item%3Fid%3D47394022
win311fwg
https://news.ycombinator.com/user?id=win311fwg
 
3 months ago
https://news.ycombinator.com/item?id=47402010
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397850
 | 
next
https://news.ycombinator.com/item?id=47394022#47400911
 
[–]
javascript:void(0)
I will still take a glance every once in a while to satisfy my curiosity, but I have moved past trying to review code. I was happy with the results frequently enough that I do not find it to be necessary anymore. In my experience, the best predictor is the target programming language. I fail to get much usable code in certain languages, but in certain others it is as if I wrote it myself every time. For those struggling to get good results, try a different programming language. You might be surprised.
 
 

https://news.ycombinator.com/vote?id=47400911&how=up&goto=item%3Fid%3D47394022
Ancapistani
https://news.ycombinator.com/user?id=Ancapistani
 
3 months ago
https://news.ycombinator.com/item?id=47400911
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402010
 | 
next
https://news.ycombinator.com/item?id=47394022#47397201
 
[–]
javascript:void(0)
This is what I don't understand - why would I “complain” about “hand holding”? Why would I just create a Claude skill or analogue that tells the agent to conform to my preferences?
I've done this many times, and haven't run into any major issues.
 
 

https://news.ycombinator.com/vote?id=47397201&how=up&goto=item%3Fid%3D47394022
ttanveer
https://news.ycombinator.com/user?id=ttanveer
 
3 months ago
https://news.ycombinator.com/item?id=47397201
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400911
 | 
next
https://news.ycombinator.com/item?id=47394022#47398974
 
[–]
javascript:void(0)
That seems to make sense. Any suggestions to improve this skill of reviewing code?
I think especially a number of us more junior programmers lack in this regard, and don't see a clear way of improving this skill beyond just using LLMs more and learning with time?
 
 

https://news.ycombinator.com/vote?id=47397301&how=up&goto=item%3Fid%3D47394022
Dannymetconan
https://news.ycombinator.com/user?id=Dannymetconan
 
3 months ago
https://news.ycombinator.com/item?id=47397301
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397201
 | 
next
https://news.ycombinator.com/item?id=47394022#47397449
 
[–]
javascript:void(0)
It's "easy". You just spend a couple of years reviewing PRs and working in a professional environment getting feedback from your peers and experience the consequences of code.
There is no shortcut unfortunately.
 
 

https://news.ycombinator.com/vote?id=47397449&how=up&goto=item%3Fid%3D47394022
vsl
https://news.ycombinator.com/user?id=vsl
 
3 months ago
https://news.ycombinator.com/item?id=47397449
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397201
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397301
 | 
next
https://news.ycombinator.com/item?id=47394022#47397619
 
[–]
javascript:void(0)
You improve this skill by 
not
 using LLMs more and getting more experienced as a programmer 
yourself
. Spotting problems during review comes from experience, from having learned the lessons, knowing the codebase and libraries used etc.
 
 

https://news.ycombinator.com/vote?id=47397619&how=up&goto=item%3Fid%3D47394022
christofosho
https://news.ycombinator.com/user?id=christofosho
 
3 months ago
https://news.ycombinator.com/item?id=47397619
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397201
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397449
 | 
next
https://news.ycombinator.com/item?id=47394022#47398974
 
[–]
javascript:void(0)
Find another developer and pair/work together on a project. It doesn't need to be serious, but you should organize it like it is. So, a breakdown of tasks needed to accomplish the goal first. And then many pull requests into the source that can be peer reviewed.
 
 

https://news.ycombinator.com/vote?id=47398974&how=up&goto=item%3Fid%3D47394022
gonzo41
https://news.ycombinator.com/user?id=gonzo41
 
3 months ago
https://news.ycombinator.com/item?id=47398974
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397201
 | 
next
https://news.ycombinator.com/item?id=47394022#47397184
 
[–]
javascript:void(0)
Its exactly the same as 10 years ago and being able to google and search well for odd support bugs. Junior people think it's easy and they don't see the massive skill in framing questions and filtering.
 
 

https://news.ycombinator.com/vote?id=47397184&how=up&goto=item%3Fid%3D47394022
or_am_i
https://news.ycombinator.com/user?id=or_am_i
 
3 months ago
https://news.ycombinator.com/item?id=47397184
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398974
 | 
next
https://news.ycombinator.com/item?id=47394022#47397303
 
[–]
javascript:void(0)
It's always easier to blame the model and convince yourself that you have some sort of talent in reviewing LLM's work that others don't.
In my experience the differences are mostly in how the code produced by LLM is prompted and what context is given to the agent. Developers who have experience delegating their work are more likely to prevent downstream problems from happening immediately and complain their colleagues cannot prompt as efficiently without a lot of hand holding. And those who rarely or never delegated their work are invariably going to miss crucial context details and rate the output they get lower.
 
 

https://news.ycombinator.com/vote?id=47397242&how=up&goto=item%3Fid%3D47394022
loloquwowndueo
https://news.ycombinator.com/user?id=loloquwowndueo
 
3 months ago
https://news.ycombinator.com/item?id=47397242
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397184
 | 
next
https://news.ycombinator.com/item?id=47394022#47397724
 
[–]
javascript:void(0)
Never takes long for the “you're holding it wrong” crowd to pop in.
 
 

https://news.ycombinator.com/vote?id=47397279&how=up&goto=item%3Fid%3D47394022
darkerside
https://news.ycombinator.com/user?id=darkerside
 
3 months ago
https://news.ycombinator.com/item?id=47397279
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397242
 | 
next
https://news.ycombinator.com/item?id=47394022#47397724
 
[–]
javascript:void(0)
That's a terrible reason for a mass consumer tool to fail, and a perfectly reasonable one for a professional power tool to fail
 
 

https://news.ycombinator.com/vote?id=47397724&how=up&goto=item%3Fid%3D47394022
hellosimon
https://news.ycombinator.com/user?id=hellosimon
 
3 months ago
https://news.ycombinator.com/item?id=47397724
 | 
root
https://news.ycombinator.com/item?id=47394022#47397037
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397184
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397242
 | 
next
https://news.ycombinator.com/item?id=47394022#47397303
 
[–]
javascript:void(0)
Partly true, but I think there's a real skill in catching subtle logic errors in generated code too not just prompting well. Both matter.
 
 

https://news.ycombinator.com/vote?id=47397303&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397303
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397184
 | 
next
https://news.ycombinator.com/item?id=47394022#47405908
 
[–]
javascript:void(0)
That's what I meant, though. I didn't mean "I say the right words", I meant "I don't give them a sentence and walk away".
 
 

https://news.ycombinator.com/vote?id=47405908&how=up&goto=item%3Fid%3D47394022
youknownothing
https://news.ycombinator.com/user?id=youknownothing
 
3 months ago
https://news.ycombinator.com/item?id=47405908
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397303
 | 
next
https://news.ycombinator.com/item?id=47394022#47402033
 
[–]
javascript:void(0)
I guess it's no coincidence that most of then people saying "LLMs are great for doing code" are non-developers...
 
 

https://news.ycombinator.com/vote?id=47402033&how=up&goto=item%3Fid%3D47394022
manojlds
https://news.ycombinator.com/user?id=manojlds
 
3 months ago
https://news.ycombinator.com/item?id=47402033
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47405908
 | 
next
https://news.ycombinator.com/item?id=47394022#47397419
 
[–]
javascript:void(0)
It's also always easier to blame the LLM when the developer doesn't work with it right.
 
 

https://news.ycombinator.com/vote?id=47397419&how=up&goto=item%3Fid%3D47394022
JasonADrury
https://news.ycombinator.com/user?id=JasonADrury
 
3 months ago
https://news.ycombinator.com/item?id=47397419
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402033
 | 
next
https://news.ycombinator.com/item?id=47394022#47402216
 
[–]
javascript:void(0)
In my experience the differences are mostly between the chair and the keyboard.
I asked Codex to scrape a bunch of restaurant guides I like, and make me an iPhone app which shows those restaurants on a map color coded based on if they're open, closed or closing/opening soon.
I'd 
never
 built an iOS app before, but it took me less than 10 minutes of screen time to get this pushed onto my phone.
The app works, does exactly what I want it to do and meaningfully improves my life on a daily basis.
The "AI can't build anything useful" crowd consists entirely of fools and liars.
 
 

https://news.ycombinator.com/vote?id=47402216&how=up&goto=item%3Fid%3D47394022
antihero
https://news.ycombinator.com/user?id=antihero
 
3 months ago
https://news.ycombinator.com/item?id=47402216
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397037
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397419
 | 
next
https://news.ycombinator.com/item?id=47394022#47395500
 
[–]
javascript:void(0)
Garbage in, garbage out.
 
 

https://news.ycombinator.com/vote?id=47395500&how=up&goto=item%3Fid%3D47394022
plastic041
https://news.ycombinator.com/user?id=plastic041
 
3 months ago
https://news.ycombinator.com/item?id=47395500
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397037
 | 
next
https://news.ycombinator.com/item?id=47394022#47399792
 
[–]
javascript:void(0)
I wanted to know how to make softwares with LLM "without losing the benefit of knowing how the entire system works" and "intimately familiar with each project's architecture and inner workings", while "have never even read most of their code". (Because obviously, you can't.) But OP didn't explain that.
You tell LLM to create something, and then use another LLM to review it. It might make the result safer, but it doesn't mean that YOU understand the architecture. No one does.
 
 

https://news.ycombinator.com/vote?id=47395515&how=up&goto=item%3Fid%3D47394022
ashwinsundar
https://news.ycombinator.com/user?id=ashwinsundar
 
3 months ago
https://news.ycombinator.com/item?id=47395515
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395500
 | 
next
https://news.ycombinator.com/item?id=47394022#47399792
 
[–]
javascript:void(0)
Hot take: you can't have your cake and eat it too. If you aren't writing code, designing the system, creating architecture, or even writing the prompt, then you're not understanding shit. You're playing slots with stochastic parrots
    The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or webapp, but it's not really coding - I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.


Karpathy 2025
 
 

https://news.ycombinator.com/vote?id=47395560&how=up&goto=item%3Fid%3D47394022
simonw
https://news.ycombinator.com/user?id=simonw
 
3 months ago
https://news.ycombinator.com/item?id=47395560
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395515
 | 
next
https://news.ycombinator.com/item?id=47394022#47395862
 
[–]
javascript:void(0)
Your Karpathy quote there is out of context. It starts with: 
https://twitter.com/karpathy/status/1886192184808149383
https://twitter.com/karpathy/status/1886192184808149383
  There's a new kind of coding I call "vibe
  coding", where you fully give in to the
  vibes, embrace exponentials, and forget
  that the code even exists.


Not all AI-assisted programming is vibe coding. If you're paying attention to the code that's being produced you can guide it towards being just as high quality (or even higher quality) than code you would have written by hand.
 
 

https://news.ycombinator.com/vote?id=47395614&how=up&goto=item%3Fid%3D47394022
ashwinsundar
https://news.ycombinator.com/user?id=ashwinsundar
 
3 months ago
https://news.ycombinator.com/item?id=47395614
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395560
 | 
next
https://news.ycombinator.com/item?id=47394022#47395862
 
[–]
javascript:void(0)
It's appropriate for the commenter I was replying to, who asked how they can understand things, "while having never even read most of their code."
I like AI-assisted programming, but if I fail to even read the code produced, then I might as well treat it like a no-code system. I can understand the high-levels of how no-code works, but as soon as it breaks, it might as well be a black box. And this only gets worse as the codebase spans into the tens of thousands of lines without me having read any of it.
The (imperfect) analogy I'm working on is a baker who bakes cakes. A nearby grocery store starts making any cake they want, on demand, so the baker decides to quit baking cakes and buy them from the store. The baker calls the store anytime they want a new cake, and just tells them exactly what they want. How long can that baker call themself a "baker"? How long before they forget how to even bake a cake, and all they can do is get cakes from the grocer?
 
 

https://news.ycombinator.com/vote?id=47395862&how=up&goto=item%3Fid%3D47394022
imiric
https://news.ycombinator.com/user?id=imiric
 
3 months ago
https://news.ycombinator.com/item?id=47395862
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395515
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395560
 | 
next
https://news.ycombinator.com/item?id=47394022#47397601
 
[–]
javascript:void(0)
It's insane that this quote is coming from one of the leading figures in this field. And everyone's... OK that software development has been reduced to chance and brute force?
 
 

https://news.ycombinator.com/vote?id=47397601&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397601
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395515
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395862
 | 
next
https://news.ycombinator.com/item?id=47394022#47397178
 
[–]
javascript:void(0)
There are two ways to approach this. One is 
a priori
: "If you aren't doing the same things with LLMs that humans do when writing code, the code is not going to work".
The other one is 
a posteriori
: "I want code that works, what do I need to do with LLMs?"
Your approach is the former, which I don't think works in reality. You can write code that works (for some definition of "works") with LLMs without doing it the way a human would do it.
 
 

https://news.ycombinator.com/vote?id=47401030&how=up&goto=item%3Fid%3D47394022
ashwinsundar
https://news.ycombinator.com/user?id=ashwinsundar
 
3 months ago
https://news.ycombinator.com/item?id=47401030
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397601
 | 
next
https://news.ycombinator.com/item?id=47394022#47397178
 
[–]
javascript:void(0)
I re-read your comment a few times, but don't understand what you're saying unfortunately.
    You can write code that works (for some definition of "works") with LLMs without doing it the way a human would do it.



Really having a hard time understanding what this possibly means.
 
 

https://news.ycombinator.com/vote?id=47401565&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47401565
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401030
 | 
next
https://news.ycombinator.com/item?id=47394022#47397178
 
[–]
javascript:void(0)
It means that just because a human can't read the code doesn't mean the code is not correct. Obfuscators exist, for example, and it's conceivable that the LLM writes perfectly correct code even though it's unmaintainable to us.
 
 

https://news.ycombinator.com/vote?id=47403257&how=up&goto=item%3Fid%3D47394022
ashwinsundar
https://news.ycombinator.com/user?id=ashwinsundar
 
3 months ago
https://news.ycombinator.com/item?id=47403257
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47401565
 | 
next
https://news.ycombinator.com/item?id=47394022#47397178
 
[–]
javascript:void(0)
Thanks, that's a good insight into my value system then. I understand that code doesn't have to be human-readable to be correct. I don't want to work on a codebase filled with unreadable code which no human colleague understands though. This is also why I don't like a lot of web frameworks - the final code outputted to the page is a huge spaghetti of un-inspectable Javascript and HTML.
I want to have the ability to understand each relevant layer of the system, even if I don't necessarily have the full understanding at every given moment.
 
 

https://news.ycombinator.com/vote?id=47404446&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47404446
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403257
 | 
next
https://news.ycombinator.com/item?id=47394022#47403712
 
[–]
javascript:void(0)
Also, to add to my point earlier: You don't like frameworks but it's frameworks all the way down to microcode, and that's a massive amount of layers. Javascript isn't an absolute source of truth, you're just picking one layer out of the entire abstraction stack and saying "this is good enough for me".
It's perfectly fine to do that, but also realize that other people might just choose a different layer, and that's fine too if the end result fulfills its purpose.
 
 

https://news.ycombinator.com/vote?id=47403712&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47403712
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403257
 | 
prev
https://news.ycombinator.com/item?id=47394022#47404446
 | 
next
https://news.ycombinator.com/item?id=47394022#47397178
 
[–]
javascript:void(0)
Sure, but that's more your preference than an objective way to do software "correctly". We're still figuring out what the latter means when LLMs are involved (hence my article here).
 
 

https://news.ycombinator.com/vote?id=47397178&how=up&goto=item%3Fid%3D47394022
ChrisGreenHeur
https://news.ycombinator.com/user?id=ChrisGreenHeur
 
3 months ago
https://news.ycombinator.com/item?id=47397178
 | 
root
https://news.ycombinator.com/item?id=47394022#47395500
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395515
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397601
 | 
next
https://news.ycombinator.com/item?id=47394022#47399792
 
[–]
javascript:void(0)
the hardware you typed this on was designed by hardware architects that write little to no code. just types up a spec to be implemented by verilog coders.
 
 

https://news.ycombinator.com/vote?id=47399792&how=up&goto=item%3Fid%3D47394022
jbergqvist
https://news.ycombinator.com/user?id=jbergqvist
 
3 months ago
https://news.ycombinator.com/item?id=47399792
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395500
 | 
next
https://news.ycombinator.com/item?id=47394022#47395596
 
[–]
javascript:void(0)
I've found that spending most of my time on design before any code gets written makes the biggest difference.
The way I think about it: the model has a probability distribution over all possible implementations, shaped by its training data. Given a vague prompt, that distribution is wide and you're likely to get something generic. As you iterate on a design with the model (really just refining the context), the distribution narrows towards a subset of implementations. By the time the model writes code, you've constrained the space enough that most of what it produces is actually what you want.
 
 

https://news.ycombinator.com/vote?id=47405829&how=up&goto=item%3Fid%3D47394022
ugtr3
https://news.ycombinator.com/user?id=ugtr3
 
3 months ago
https://news.ycombinator.com/item?id=47405829
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399792
 | 
next
https://news.ycombinator.com/item?id=47394022#47395596
 
[–]
javascript:void(0)
Yea but that design part is the most expensive part. The code generation is pretty trivial - the advantage of llm's is the power to search through pre-trained information spaces - much faster than a human could. Issue is again.. probabilistic. So there's variance.'
 
 

https://news.ycombinator.com/vote?id=47395596&how=up&goto=item%3Fid%3D47394022
jumploops
https://news.ycombinator.com/user?id=jumploops
 
3 months ago
https://news.ycombinator.com/item?id=47395596
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399792
 | 
next
https://news.ycombinator.com/item?id=47394022#47395774
 
[–]
javascript:void(0)
This is similar to how I use LLMs (architect/plan -> implement -> debug/review), but after getting bit a few times, I have a few extra things in my process:
The main difference between my workflow and the authors, is that I have the LLM "write" the design/plan/open questions/debug/etc. into markdown files, for almost every step.
This is mostly helpful because it "anchors" decisions into timestamped files, rather than just loose back-and-forth specs in the context window.
Before the current round of models, I would religiously clear context and rely on these files for truth, but even with the newest models/agentic harnesses, I find it helps avoid regressions as the software evolves over time.
A minor difference between myself and the author, is that I don't rely on specific sub-agents (beyond what the agentic harness has built-in for e.g. file exploration).
I say it's minor, because in practice the actual calls to the LLMs undoubtedly look quite similar (clean context window, different task/model, etc.).
One tip, if you have access, is to do the initial design/architecture with GPT-5.x Pro, and then take the output "spec" from that chat/iteration to kick-off a codex/claude code session. This can also be helpful for hard to reason about bugs, but I've only done that a handful of times at this point (i.e. funky dynamic SVG-based animation snafu).
 
 

https://news.ycombinator.com/vote?id=47395712&how=up&goto=item%3Fid%3D47394022
lelele
https://news.ycombinator.com/user?id=lelele
 
3 months ago
https://news.ycombinator.com/item?id=47395712
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395596
 | 
next
https://news.ycombinator.com/item?id=47394022#47397584
 
[–]
javascript:void(0)
Would you please expand on this? Do you make the LLM append their responses to a Markdown file, prefixed by their timestamps, basically preserving the whole context in a file? Or do you make the LLM update some reference files in order to keep a "condensed" context? Thank you.
 
 

https://news.ycombinator.com/vote?id=47395918&how=up&goto=item%3Fid%3D47394022
aix1
https://news.ycombinator.com/user?id=aix1
 
3 months ago
https://news.ycombinator.com/item?id=47395918
 | 
root
https://news.ycombinator.com/item?id=47394022#47395596
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395712
 | 
next
https://news.ycombinator.com/item?id=47394022#47397584
 
[–]
javascript:void(0)
Not the GP, but I currently use a hierarchy of artifacts: requirements doc -> design docs (overall and per-component) -> code+tests. All artifacts are version controlled.
Each level in the hierarchy is empirically ~5X smaller than the level below. This, plus sharding the design docs by component, helps Claude navigate the project and make consistent decision across sessions.
My workflow for adding a feature goes something like this:
I iterate with Claude on updating the requirements doc to capture the desired final state of the system from the user's perspective.
Once that's done, a different instance of Claude reads the requirements and the design docs and updates the latter to address all the requirements listed in the former. This is done interactively with me in the loop to guide and to resolve ambiguity.
Once the technical design is agreed, Claude writes a test plan, usually almost entirely autonomously. The test plan is part of each design doc and is updated as the design evolves.
3a. (Optionally) another Claude instance reviews the design for soundness, completeness, consistency with itself and with the requirements. I review the findings and tell it what to fix and what to ignore.
Claude brings unit tests in line with what the test plan says, adding/updating/removing tests but not touching code under test.
4a. (Optionally) the tests are reviewed by another instance of Claude for bugs and inconsistencies with the test plan or the style guide.
Claude implements the feature.
5a. (Optionally) another instance reviews the implementation.
For complex changes, I'm quite disciplined to have each step carried out in a different session so that all communinications are done via checked-in artifacts and not through context. For simple changes, I often don't bother and/or skip the reviews.
From time to time, I run standalone garbage collection and consistency checks, where I get Claude to look for dead code, low-value tests, stale parts of the design, duplication, requirements-design-tests-code drift etc. I find it particularly valuable to look for opportunities to make things simpler or even just smaller (fewer tokens/less work to maintain).
Occasionally, I find that I need to instruct Claude to write a benchmark and use it with a profiler to opimise something. I check these in but generally don't bother documenting them. In my case they tend to be one-off things and not part of some regression test suite. Maybe I should just abandon them & re-create if they're ever needed again.
I also have a (very short) coding style guide. It only includes things that Claude consistently gets wrong or does in ways that are not to my liking.
 
 

https://news.ycombinator.com/vote?id=47397584&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397584
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395596
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395712
 | 
next
https://news.ycombinator.com/item?id=47394022#47396449
 
[–]
javascript:void(0)
I don't know if I explained this clearly enough in the article, but I have the LLM write the plan to a file as well. The architect's end result is a plan file in the repo, and the developer reads that.
You can see one here: 
https://github.com/skorokithakis/sleight-of-hand/blob/master...
https://github.com/skorokithakis/sleight-of-hand/blob/master/misc/coding-team/centralized-tick-table/001-centralized-tick-duration-table.md
 
 

https://news.ycombinator.com/vote?id=47396449&how=up&goto=item%3Fid%3D47394022
Havoc
https://news.ycombinator.com/user?id=Havoc
 
3 months ago
https://news.ycombinator.com/item?id=47396449
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395596
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397584
 | 
next
https://news.ycombinator.com/item?id=47394022#47395774
 
[–]
javascript:void(0)
Yeah same. The markdown thing also helps with the multi model thing. Can wipe context and have another model look at the code and markdown plan with fresh eyes easily
 
 

https://news.ycombinator.com/vote?id=47395774&how=up&goto=item%3Fid%3D47394022
thenthenthen
https://news.ycombinator.com/user?id=thenthenthen
 
3 months ago
https://news.ycombinator.com/item?id=47395774
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395596
 | 
next
https://news.ycombinator.com/item?id=47394022#47397472
 
[–]
javascript:void(0)
Haha love the Sleight of hand irregular wall clock idea. I once had a wall clock where the hand showing the seconds would sometimes jump backwards, it was extremely unsettling somehow because it was random. It really did make me question my sanity.
 
 

https://news.ycombinator.com/vote?id=47396487&how=up&goto=item%3Fid%3D47394022
kqr
https://news.ycombinator.com/user?id=kqr
 
3 months ago
https://news.ycombinator.com/item?id=47396487
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395774
 | 
next
https://news.ycombinator.com/item?id=47394022#47397472
 
[–]
javascript:void(0)
This used to be one of my recurring nightmares when I was a child. The three I remember were (1) clocks suddenly starting to go backwards, either partially or completely; (2) radio turning on without being able to turn it off, and (3) house fire. There really is something about clocks.
 
 

https://news.ycombinator.com/vote?id=47397472&how=up&goto=item%3Fid%3D47394022
gehsty
https://news.ycombinator.com/user?id=gehsty
 
3 months ago
https://news.ycombinator.com/item?id=47397472
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395774
 | 
next
https://news.ycombinator.com/item?id=47394022#47396273
 
[–]
javascript:void(0)
When I use Claude code to work on a hobby project it feels like doom scrolling…
I can't get my head around if the hobby is the making or the having, but fair to say I've felt quite dissatisfied at the end of my hobby sessions lately so leaning towards the former.
 
 

https://news.ycombinator.com/vote?id=47398417&how=up&goto=item%3Fid%3D47394022
Levitating
https://news.ycombinator.com/user?id=Levitating
 
3 months ago
https://news.ycombinator.com/item?id=47398417
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397472
 | 
next
https://news.ycombinator.com/item?id=47394022#47396273
 
[–]
javascript:void(0)
Agreed, I code for fun. But I am not sure if I still find it fun if the LLM just makes what I want.
 
 

https://news.ycombinator.com/vote?id=47396273&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397472
 | 
next
https://news.ycombinator.com/item?id=47394022#47396809
 
[–]
javascript:void(0)
In the plethora of all these articles that explain the process of building projects with LLMs, one thing I never understood it why the authors seem to write the prompts as if talking to a human that cares how good their grammar or syntax is, e.g.:
and I'm not not even talking about the usage of "please" or "thanks" (which this particular author doesn't seem to be doing).
Is there any evidence that suggests the models do a better job if I write my prompt like this instead of "wanna add email support, think how to do this"? In my personal experience (mostly with Junie) I haven't seen any advantage of being "polite", for lack of a better word, and I feel like I'm saving on seconds and tokens :)
 
 

https://news.ycombinator.com/vote?id=47396454&how=up&goto=item%3Fid%3D47394022
dgb23
https://news.ycombinator.com/user?id=dgb23
 
3 months ago
https://news.ycombinator.com/item?id=47396454
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
next
https://news.ycombinator.com/item?id=47394022#47396456
 
[–]
javascript:void(0)
I can't speak for everyone, but to me the most accurate answer is that I'm role-playing, because it just flows better.
In the back of my head I know the chatbot is trained on conversations and I want it to reflect a professional and clear tone.
But I usually keep it more simple in most cases. Your example:
I would likely write as:
or
But when I'm in a brainstorm/search/rubber-duck mode, then I write more as if it was a real conversation.
 
 

https://news.ycombinator.com/vote?id=47396620&how=up&goto=item%3Fid%3D47394022
xnorswap
https://news.ycombinator.com/user?id=xnorswap
 
3 months ago
https://news.ycombinator.com/item?id=47396620
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396454
 | 
next
https://news.ycombinator.com/item?id=47394022#47396456
 
[–]
javascript:void(0)
I agree, it's just easier to write requirements and refine things as if writing with a human. I no longer care that it risks anthropomorphising it, as that fight has long been lost. I prefer to focus on remembering it doesn't actually think/reason than not being polite to it.
Keeping everything generally "human readable" also the advantage of it being easier for me to review later if needed.
 
 

https://news.ycombinator.com/vote?id=47397015&how=up&goto=item%3Fid%3D47394022
alkonaut
https://news.ycombinator.com/user?id=alkonaut
 
3 months ago
https://news.ycombinator.com/item?id=47397015
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396620
 | 
next
https://news.ycombinator.com/item?id=47394022#47396769
 
[–]
javascript:void(0)
I also always imagine that if I'm joined by a colleague on this task they might have to read through my conversation and I want to make it clear to a human too.
As you said, that "other person" might be me too. Same reason I comment code. There's another person reading it, most likely that other person is "me, but next week and with zero memory of this".
We do like anthropomorphising the machines, but I try to think they enjoy it...
 
 

https://news.ycombinator.com/vote?id=47396769&how=up&goto=item%3Fid%3D47394022
jstanley
https://news.ycombinator.com/user?id=jstanley
 
3 months ago
https://news.ycombinator.com/item?id=47396769
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396620
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397015
 | 
next
https://news.ycombinator.com/item?id=47394022#47396456
 
[–]
javascript:void(0)
How can you use these models for any length of time and walk away with the understanding that they do not think or reason?
What even is thinking and reasoning if these models aren't doing it?
 
 

https://news.ycombinator.com/vote?id=47397047&how=up&goto=item%3Fid%3D47394022
xnorswap
https://news.ycombinator.com/user?id=xnorswap
 
3 months ago
https://news.ycombinator.com/item?id=47397047
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396769
 | 
next
https://news.ycombinator.com/item?id=47394022#47397732
 
[–]
javascript:void(0)
They produce wonderful results, they are incredibly powerful, but they do not think or reason.
Among many other factors, perhaps the most key differentiator for me that prevents me describing these as thinking, is proactivity.
LLMs are never pro-active.
( No, prompting them on a loop is not pro-activity ).
Human brains are so proactive that given zero stimuli they will hallucinate.
As for reasoning, they simply do not. They do a wonderful facsimile of reasoning, one that's especially useful for producing computer code. But they do not reason, and it is a mistake to treat them as if they can.
 
 

https://news.ycombinator.com/vote?id=47397192&how=up&goto=item%3Fid%3D47394022
jstanley
https://news.ycombinator.com/user?id=jstanley
 
3 months ago
https://news.ycombinator.com/item?id=47397192
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397047
 | 
next
https://news.ycombinator.com/item?id=47394022#47397732
 
[–]
javascript:void(0)
I personally don't agree that proactivity is a prerequisite for thinking.
But what would proactivity in an LLM look like, if prompting in a loop doesn't count?
An LLM experiences reality in terms of the flow of the token stream. Each iteration of the LLM has 1 more token in the input context and the LLM has a quantum of experience while computing the output distribution for the new context.
A human experiences reality in terms of the flow of time.
We are not able to be proactive outside the flow of time, because it takes time for our brains to operate, and similarly LLMs are not able to be proactive outside the flow of tokens, because it takes tokens for the neural networks to operate.
The flow of time is so fundamental to how we work that we would not even have any way to be aware of any goings-on that happen "between" time steps even if there were any. The only reason LLMs know that there is anything going on in the time between tokens is because they're trained on text which says so.
Also an LLM will hallucinate on zero input quite happily if you keep sampling it and feeding it the generated tokens.
 
 

https://news.ycombinator.com/vote?id=47397732&how=up&goto=item%3Fid%3D47394022
dgb23
https://news.ycombinator.com/user?id=dgb23
 
3 months ago
https://news.ycombinator.com/item?id=47397732
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396769
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397047
 | 
next
https://news.ycombinator.com/item?id=47394022#47396456
 
[–]
javascript:void(0)
Thinking and reasoning cannot be abstracted away from the individual who experiences the thinking and reasoning itself and changes because of it.
LLMs are amazing, but they represent a very narrow slice of what thinking is. Living beings are extremely dynamic and both much more complex and simple at the same time.
There is a reason for:
companies releasing new versions every couple of months
LLMs needing massive amounts of data to train on that is produced by us and not by itself interacting with the world
a massive amount of manual labor being required both for data labeling and for reinforcement learning
them not being able to guide through a solution, but ultimately needing guidance at every decision point
 
 

https://news.ycombinator.com/vote?id=47396456&how=up&goto=item%3Fid%3D47394022
kqr
https://news.ycombinator.com/user?id=kqr
 
3 months ago
https://news.ycombinator.com/item?id=47396456
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396454
 | 
next
https://news.ycombinator.com/item?id=47394022#47396383
 
[–]
javascript:void(0)
I think it mattered a lot more a few years ago, when the user's prompts were almost all context the LLM had to go by. A prompt written in a sloppy style would cause the LLM to respond in a sloppy style (since it's a snazzy autocomplete at its core). LLMs reason in tokens, so a sloppy style leads it to mimic the reasoning that it finds in the sloppy writing of its training data, which is worse reasoning.
These days, the user prompt is just a tiny part of the context it has, so it probably matters less or not at all.
I still do it though, much like I try to include relevant technical terminology to try to nudge its search into the right areas of vector space. (Which is the part of the vector space built from more advanced discourse in the training material.)
 
 

https://news.ycombinator.com/vote?id=47396383&how=up&goto=item%3Fid%3D47394022
tarsinge
https://news.ycombinator.com/user?id=tarsinge
 
3 months ago
https://news.ycombinator.com/item?id=47396383
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396456
 | 
next
https://news.ycombinator.com/item?id=47394022#47396302
 
[–]
javascript:void(0)
The reasoning is by being polite the LLM is more likely to stay on a professional path: at its core a LLM try to make your prompt coherent with its training set, and a polite prompt + its answer will score higher (gives better result) than a prompt that is out of place with the answer. I understand to some people it could feel like anthropomorphising and could turn them off but to me it's purely about engineering.
Edit: wording
 
 

https://news.ycombinator.com/vote?id=47396746&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47396746
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396383
 | 
next
https://news.ycombinator.com/item?id=47394022#47396420
 
[–]
javascript:void(0)
So no evidence.
 
 

https://news.ycombinator.com/vote?id=47396420&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396420
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396383
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396746
 | 
next
https://news.ycombinator.com/item?id=47394022#47396424
 
[–]
javascript:void(0)
Sure seems like this could be the case with the structure of the prompt, but what about capitalizing the first letter of sentence, or adding commas, tag questions etc? They seem like semantics that will not play any role at the end
 
 

https://news.ycombinator.com/vote?id=47397486&how=up&goto=item%3Fid%3D47394022
spudlyo
https://news.ycombinator.com/user?id=spudlyo
 
3 months ago
https://news.ycombinator.com/item?id=47397486
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396420
 | 
next
https://news.ycombinator.com/item?id=47394022#47396463
 
[–]
javascript:void(0)
Writing is what gives my thinking structure. Sloppy writing feels to me like sloppy thinking. My fingers capitalize the first letter of words, proper nouns and adjectives, and add punctuation without me consciously asking them to do so.
 
 

https://news.ycombinator.com/vote?id=47396463&how=up&goto=item%3Fid%3D47394022
TheDong
https://news.ycombinator.com/user?id=TheDong
 
3 months ago
https://news.ycombinator.com/item?id=47396463
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396420
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397486
 | 
next
https://news.ycombinator.com/item?id=47394022#47396614
 
[–]
javascript:void(0)
Why wouldn't capitalization, commas, etc do well?
These are text completion engines.
Punctuation and capitalization is found in polite discussion and textbooks, and so you'd expect those tokens to ever so slightly push the model in that direction.
Lack of capitalization pushes towards text messages and irc perhaps.
We cannot reason about these things in the same way we can reason about using search engines, these things are truly ridiculous black boxes.
 
 

https://news.ycombinator.com/vote?id=47396657&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396657
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396463
 | 
next
https://news.ycombinator.com/item?id=47394022#47396614
 
[–]
javascript:void(0)
Might very well be the case, I wonder if there's some actual research on this by people that have some access to the the internals of these black boxes.
 
 

https://news.ycombinator.com/vote?id=47396614&how=up&goto=item%3Fid%3D47394022
pegasus
https://news.ycombinator.com/user?id=pegasus
 
3 months ago
https://news.ycombinator.com/item?id=47396614
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396420
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396463
 | 
next
https://news.ycombinator.com/item?id=47394022#47396723
 
[–]
javascript:void(0)
That's orthography, not semantics, but it's still part of the professional style steering the model on the "professional path" as GP put it.
 
 

https://news.ycombinator.com/vote?id=47396723&how=up&goto=item%3Fid%3D47394022
vitro
https://news.ycombinator.com/user?id=vitro
 
3 months ago
https://news.ycombinator.com/item?id=47396723
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396420
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396614
 | 
next
https://news.ycombinator.com/item?id=47394022#47396424
 
[–]
javascript:void(0)
For me it is just a good habit that I want to keep.
 
 

https://news.ycombinator.com/vote?id=47396424&how=up&goto=item%3Fid%3D47394022
mrbungie
https://news.ycombinator.com/user?id=mrbungie
 
3 months ago
https://news.ycombinator.com/item?id=47396424
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396383
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396420
 | 
next
https://news.ycombinator.com/item?id=47394022#47396302
 
[–]
javascript:void(0)
I remember studies that showed that being mean with the LLM got better answers, but by the other hand I also remember an study showing that maximizing bug-related parameters ended up with meaner/malignant LLMs.
 
 

https://news.ycombinator.com/vote?id=47396446&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396446
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396424
 | 
next
https://news.ycombinator.com/item?id=47394022#47396302
 
[–]
javascript:void(0)
Surely this could depend on the model, and I'm only hypothesizing here, but being mean (or just having a dry tone) might equal a "cut the glazing" implicit instruction to the model, which would help I guess.
 
 

https://news.ycombinator.com/vote?id=47396302&how=up&goto=item%3Fid%3D47394022
raincole
https://news.ycombinator.com/user?id=raincole
 
3 months ago
https://news.ycombinator.com/item?id=47396302
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396383
 | 
next
https://news.ycombinator.com/item?id=47394022#47396464
 
[–]
javascript:void(0)
Because some people like to be polite? Is it this hard to understand? Your hand-written prompts are unlikely to take significant chunk of context window anyway.
 
 

https://news.ycombinator.com/vote?id=47396349&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396349
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396302
 | 
next
https://news.ycombinator.com/item?id=47394022#47396464
 
[–]
javascript:void(0)
Polite to whom?
 
 

https://news.ycombinator.com/vote?id=47396365&how=up&goto=item%3Fid%3D47394022
qsera
https://news.ycombinator.com/user?id=qsera
 
3 months ago
https://news.ycombinator.com/item?id=47396365
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396349
 | 
next
https://news.ycombinator.com/item?id=47394022#47404593
 
[–]
javascript:void(0)
I think it is easier to be polite always and not switch between polite and non-polite mode depending on who you are talking to.
 
 

https://news.ycombinator.com/vote?id=47396407&how=up&goto=item%3Fid%3D47394022
silversmith
https://news.ycombinator.com/user?id=silversmith
 
3 months ago
https://news.ycombinator.com/item?id=47396407
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396365
 | 
next
https://news.ycombinator.com/item?id=47394022#47396402
 
[–]
javascript:void(0)
I believe it's less about politeness and more about pronouns. You used 
who
, whereas I would use 
what
 in that sentence.
In my world view, a LLM is far closer to a fridge than the androids of the movies, let alone human beings. So it's about as pointless being polite to it as is greeting your fridge when you walk into the kitchen.
But I know that others feel different, treating the ability to generate coherent responses as indication of the "divine spark".
 
 

https://news.ycombinator.com/vote?id=47397350&how=up&goto=item%3Fid%3D47394022
darkerside
https://news.ycombinator.com/user?id=darkerside
 
3 months ago
https://news.ycombinator.com/item?id=47397350
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396407
 | 
next
https://news.ycombinator.com/item?id=47394022#47396402
 
[–]
javascript:void(0)
I'd say it's more related to getting dressed for work even if you're remote and have no video calls
 
 

https://news.ycombinator.com/vote?id=47396402&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396402
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396365
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396407
 | 
next
https://news.ycombinator.com/item?id=47394022#47404593
 
[–]
javascript:void(0)
I get what you're saying, but I'm not talking about swearing at the model or anything, I'm only implying that investing energy in formulating a syntactically nice sentence doesn't or shouldn't bring any value, and that I don't care if I hurt the model's feelings (it doesn't have any).
Note, why would the author write "Email will arrive from a webhook, yes." instead of "yy webhook"? In the second case I wouldn't be impolite either, I might reply like this in an IM to a colleague I work with every day.
 
 

https://news.ycombinator.com/vote?id=47396458&how=up&goto=item%3Fid%3D47394022
well_ackshually
https://news.ycombinator.com/user?id=well_ackshually
 
3 months ago
https://news.ycombinator.com/item?id=47396458
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396402
 | 
next
https://news.ycombinator.com/item?id=47394022#47397636
 
[–]
javascript:void(0)
For the vast majority of people, using capital letters and saying please doesn't consume energy, it just is. There's a thousand things in your day that consume more energy like a shitty 9AM daily.
 
 

https://news.ycombinator.com/vote?id=47397636&how=up&goto=item%3Fid%3D47394022
chriswarbo
https://news.ycombinator.com/user?id=chriswarbo
 
3 months ago
https://news.ycombinator.com/item?id=47397636
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396402
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396458
 | 
next
https://news.ycombinator.com/item?id=47394022#47396439
 
[–]
javascript:void(0)
This seem to be completely subjective; I write syntactically/grammatically "nice" sentences to LLMs, because that's how I write. I would have to "invest energy" to force myself to write in that supposedly "simpler" style.
 
 

https://news.ycombinator.com/vote?id=47396439&how=up&goto=item%3Fid%3D47394022
jstanley
https://news.ycombinator.com/user?id=jstanley
 
3 months ago
https://news.ycombinator.com/item?id=47396439
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396402
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397636
 | 
next
https://news.ycombinator.com/item?id=47394022#47397507
 
[–]
javascript:void(0)
"yy webhook" is much less clear. It could just as easily mean "why webhook" as "yes webhook".
It's also actually more trouble to formulate abbreviated sentences than normal ones, at least for literate adults who can type reasonably well.
 
 

https://news.ycombinator.com/vote?id=47396624&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396624
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396439
 | 
next
https://news.ycombinator.com/item?id=47394022#47397507
 
[–]
javascript:void(0)
I confidently assume that the model has been trained on an ungodly amount of abbreviated text and "yy" has always meant "yeah".
For me the difference is around 20 wpm in writing speed if just write out my stream of thoughts vs when I care about typos and capitalizing words - I find real value in this.
 
 

https://news.ycombinator.com/vote?id=47397507&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397507
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396402
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396439
 | 
next
https://news.ycombinator.com/item?id=47394022#47397526
 
[–]
javascript:void(0)
It's just easier for me to write that way. In that specific sentence, I also kind of reaffirmed what was going on in my head and typed my thought process out loud. There's no deeper logic than that, it's just what's easier for me.
 
 

https://news.ycombinator.com/vote?id=47397526&how=up&goto=item%3Fid%3D47394022
layer8
https://news.ycombinator.com/user?id=layer8
 
3 months ago
https://news.ycombinator.com/item?id=47397526
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396402
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397507
 | 
next
https://news.ycombinator.com/item?id=47394022#47404593
 
[–]
javascript:void(0)
It would cost me energy to deliberately 
not
 write with proper grammar and orthography. I would never want to write sloppily to a colleague either.
 
 

https://news.ycombinator.com/vote?id=47404593&how=up&goto=item%3Fid%3D47394022
northzen
https://news.ycombinator.com/user?id=northzen
 
3 months ago
https://news.ycombinator.com/item?id=47404593
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396349
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396365
 | 
next
https://news.ycombinator.com/item?id=47394022#47407525
 
[–]
javascript:void(0)
To machine. It just easier to be polite by default than split our language into two forms "I speak to human" and "I speak to machine". Because the chat interface is really close to what we see when we speak to human. Well, exactly the same.
 
 

https://news.ycombinator.com/vote?id=47407525&how=up&goto=item%3Fid%3D47394022
raincole
https://news.ycombinator.com/user?id=raincole
 
3 months ago
https://news.ycombinator.com/item?id=47407525
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396349
 | 
prev
https://news.ycombinator.com/item?id=47394022#47404593
 | 
next
https://news.ycombinator.com/item?id=47394022#47396445
 
[–]
javascript:void(0)
To the computer? Many cultures pay respect to mountains, rivers and fields. Many people act differently round churches and monuments. I see nothing wrong being polite to a machine. Especially a machine that makes you money.
 
 

https://news.ycombinator.com/vote?id=47396445&how=up&goto=item%3Fid%3D47394022
jstummbillig
https://news.ycombinator.com/user?id=jstummbillig
 
3 months ago
https://news.ycombinator.com/item?id=47396445
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396349
 | 
prev
https://news.ycombinator.com/item?id=47394022#47407525
 | 
next
https://news.ycombinator.com/item?id=47394022#47396464
 
[–]
javascript:void(0)
Anything or anyone. Being polite to your surroundings reflects in your surroundings.
 
 

https://news.ycombinator.com/vote?id=47397457&how=up&goto=item%3Fid%3D47394022
pferde
https://news.ycombinator.com/user?id=pferde
 
3 months ago
https://news.ycombinator.com/item?id=47397457
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396445
 | 
next
https://news.ycombinator.com/item?id=47394022#47396464
 
[–]
javascript:void(0)
Did you thank your keyboard for letting you type this comment?
 
 

https://news.ycombinator.com/vote?id=47413351&how=up&goto=item%3Fid%3D47394022
jstummbillig
https://news.ycombinator.com/user?id=jstummbillig
 
3 months ago
https://news.ycombinator.com/item?id=47413351
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397457
 | 
next
https://news.ycombinator.com/item?id=47394022#47396464
 
[–]
javascript:void(0)
No. I would not consider that a useful form of politeness towards an object (but, clearly, others disagree). I chose to wash hands, clean the keyboard regularly and steer clear of abusing it in other ways.
 
 

https://news.ycombinator.com/vote?id=47396464&how=up&goto=item%3Fid%3D47394022
trq01758
https://news.ycombinator.com/user?id=trq01758
 
3 months ago
https://news.ycombinator.com/item?id=47396464
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396302
 | 
next
https://news.ycombinator.com/item?id=47394022#47396835
 
[–]
javascript:void(0)
My view is that when some "for bots only" type of writing becomes a habit, communication with humans will atrophy. Tokens be damned, but this kind of context switch comes at much too high a cost.
 
 

https://news.ycombinator.com/vote?id=47396835&how=up&goto=item%3Fid%3D47394022
vikramkr
https://news.ycombinator.com/user?id=vikramkr
 
3 months ago
https://news.ycombinator.com/item?id=47396835
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396464
 | 
next
https://news.ycombinator.com/item?id=47394022#47396371
 
[–]
javascript:void(0)
For models that reveal reasoning traces I've seen their inner nature as a word calculator show up as they spend way too many tokens complaining about the typo (and AI code review bots also seem obsessed with typos to the point where in a mid harness a few too many irrelevant typos means the model fixates on them and doesn't catch other errors). I don't know if they've gotten better at that recently but why bother. Plus there's probably something to the model trying to match the user's style (it is auto complete with many extra steps) resulting in sloppier output if you give it a sloppier prompt.
 
 

https://news.ycombinator.com/vote?id=47396371&how=up&goto=item%3Fid%3D47394022
movpasd
https://news.ycombinator.com/user?id=movpasd
 
3 months ago
https://news.ycombinator.com/item?id=47396371
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396835
 | 
next
https://news.ycombinator.com/item?id=47394022#47397499
 
[–]
javascript:void(0)
I prompt politely for two reasons: I suspect it makes the model less likely to spiral (but have no hard evidence either way), and I think it's just good to keep up the habit for when I talk to real people.
 
 

https://news.ycombinator.com/vote?id=47397499&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397499
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396371
 | 
next
https://news.ycombinator.com/item?id=47394022#47396785
 
[–]
javascript:void(0)
I write "properly" (and I do say "please" and "thank you"), just because I like exercising that muscle. The LLM doesn't care, but I do.
 
 

https://news.ycombinator.com/vote?id=47396785&how=up&goto=item%3Fid%3D47394022
lbreakjai
https://news.ycombinator.com/user?id=lbreakjai
 
3 months ago
https://news.ycombinator.com/item?id=47396785
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397499
 | 
next
https://news.ycombinator.com/item?id=47394022#47396599
 
[–]
javascript:void(0)
I just don't want to build the habit of being a sloppy writer, because it will eventually leak into the conversations I have with real humans.
 
 

https://news.ycombinator.com/vote?id=47396599&how=up&goto=item%3Fid%3D47394022
bob1029
https://news.ycombinator.com/user?id=bob1029
 
3 months ago
https://news.ycombinator.com/item?id=47396599
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396785
 | 
next
https://news.ycombinator.com/item?id=47394022#47396459
 
[–]
javascript:void(0)
With current models this isn't as big of a deal, but why risk being an asshole in any context? I don't think treating something like shit simply because it's a machine is a good excuse.
Also consider the insanity of intentionally feeding bullshit into an information engine and expecting good things to come out the other end. The fact that they often perform well despite the ugliness is a miracle, but I wouldn't depend on it.
 
 

https://news.ycombinator.com/vote?id=47397801&how=up&goto=item%3Fid%3D47394022
wartywhoa23
https://news.ycombinator.com/user?id=wartywhoa23
 
3 months ago
https://news.ycombinator.com/item?id=47397801
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396599
 | 
next
https://news.ycombinator.com/item?id=47394022#47396647
 
[–]
javascript:void(0)
spare_this_one_he_used_to_say_thanks_to_us.jxl
 
 

https://news.ycombinator.com/vote?id=47396647&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396647
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396599
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397801
 | 
next
https://news.ycombinator.com/item?id=47394022#47396459
 
[–]
javascript:void(0)
I neither talked about feeding bullshit into it, nor treating it like shit. Around half of the commenters here seem to be missing the middle ground, how is prompting "i need my project to do A, B, C using X Y Z" treating it like shit?
 
 

https://news.ycombinator.com/vote?id=47396459&how=up&goto=item%3Fid%3D47394022
koe123
https://news.ycombinator.com/user?id=koe123
 
3 months ago
https://news.ycombinator.com/item?id=47396459
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396599
 | 
next
https://news.ycombinator.com/item?id=47394022#47397854
 
[–]
javascript:void(0)
Just stream of consciousness into the context window works wonders for me. More important to provide the model good context for your question
 
 

https://news.ycombinator.com/vote?id=47397854&how=up&goto=item%3Fid%3D47394022
roel_v
https://news.ycombinator.com/user?id=roel_v
 
3 months ago
https://news.ycombinator.com/item?id=47397854
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396459
 | 
next
https://news.ycombinator.com/item?id=47394022#47396416
 
[–]
javascript:void(0)
Related to this, has anyone investigated how much typos matter in your chats? I would imagine that typing 'typescfipt' would not be a token in the input training set, so how would the model recognize this as actually meaning 'typescript'? Or does the tokenizer deal with this in an earlier stage?
 
 

https://news.ycombinator.com/vote?id=47397987&how=up&goto=item%3Fid%3D47394022
themantri
https://news.ycombinator.com/user?id=themantri
 
3 months ago
https://news.ycombinator.com/item?id=47397987
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397854
 | 
next
https://news.ycombinator.com/item?id=47394022#47396416
 
[–]
javascript:void(0)
I have tried prompting with a bunch of typos in Claude Code with Sonnet and found it to be fairly tolerant.
It has always done what I meant or asked me a clarifying question (because of my CLAUDE.md instruction).
 
 

https://news.ycombinator.com/vote?id=47396416&how=up&goto=item%3Fid%3D47394022
Havoc
https://news.ycombinator.com/user?id=Havoc
 
3 months ago
https://news.ycombinator.com/item?id=47396416
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397854
 | 
next
https://news.ycombinator.com/item?id=47394022#47397913
 
[–]
javascript:void(0)
Some people are just polite by nature & habits are hard to break
 
 

https://news.ycombinator.com/vote?id=47397913&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47397913
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396416
 | 
next
https://news.ycombinator.com/item?id=47394022#47396443
 
[–]
javascript:void(0)
There is evidence of that, but more importantly, it wouldn't occur to me to write "wanna add email support". That's not my natural voice.
 
 

https://news.ycombinator.com/vote?id=47396443&how=up&goto=item%3Fid%3D47394022
giuscri
https://news.ycombinator.com/user?id=giuscri
 
3 months ago
https://news.ycombinator.com/item?id=47396443
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397913
 | 
next
https://news.ycombinator.com/item?id=47394022#47396670
 
[–]
javascript:void(0)
one reason to do that could be it's trained on conversations happened between humans.
 
 

https://news.ycombinator.com/vote?id=47396670&how=up&goto=item%3Fid%3D47394022
olalonde
https://news.ycombinator.com/user?id=olalonde
 
3 months ago
https://news.ycombinator.com/item?id=47396670
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396443
 | 
next
https://news.ycombinator.com/item?id=47394022#47396521
 
[–]
javascript:void(0)
I suspect they just find it easier and more natural to write with proper grammar.
 
 

https://news.ycombinator.com/vote?id=47396521&how=up&goto=item%3Fid%3D47394022
dmos62
https://news.ycombinator.com/user?id=dmos62
 
3 months ago
https://news.ycombinator.com/item?id=47396521
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396670
 | 
next
https://news.ycombinator.com/item?id=47394022#47396429
 
[–]
javascript:void(0)
I choose to talk in a respectful way, because that's how I want to communicate: it's not because I'm afraid of retaliation or burning bridges. It's because I am caring and conscious. If I think that something doesn't have feelings or long-term memory, whether it's AI or a piece of rock on the side of a trail, it in no way leads me to be abusive to it.
Further, an LLM being inherently sycophantic leads to it mimmicking me, so if I talk to it in a stupid or abusive (which is just another form of stupidity, in my eyes) manner, it will behave stupid. Or, that's what I'd expect. I've not researched this in a focused way, but I've seen examples where people get LLMs to be very unintelligent by prompting riddles or intelligence tests in highly-stylized speech. I wanted to say "highly-stupid speech", but "stylized" is probably more accurate, e.g.: 
YOOOO CHATGEEEPEEETEEE!!!!!!1111 wasup I gots to asks you DIS.......
. Maybe someone can prove me wrong.
 
 

https://news.ycombinator.com/vote?id=47396569&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47396569
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396521
 | 
next
https://news.ycombinator.com/item?id=47394022#47396429
 
[–]
javascript:void(0)
My wondering was never about being abusive, rather just having a dry tone and cutting the unnecessary parts, some sort of middle ground if you will. Prompting "yo chatgeepeetee whats good lemme get this feature real quick" doesn't make sense to me mostly because it's anthrophomorphizing it, and it's the same concept of unnecessary writing as "Good morning ChatGPT, would you please help me with ..."
 
 

https://news.ycombinator.com/vote?id=47397023&how=up&goto=item%3Fid%3D47394022
dmos62
https://news.ycombinator.com/user?id=dmos62
 
3 months ago
https://news.ycombinator.com/item?id=47397023
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396569
 | 
next
https://news.ycombinator.com/item?id=47394022#47396429
 
[–]
javascript:void(0)
I guess in part I commented not on what you said, but on seeing people be abusive when an LLM doesn't follow instructions or fails to fulfill some expectation. I think I had some pent up feelings about that.
That's how I try to communicate in professional settings (AI included). Our approaches might not be that different.
 
 

https://news.ycombinator.com/vote?id=47398112&how=up&goto=item%3Fid%3D47394022
cpt_sobel
https://news.ycombinator.com/user?id=cpt_sobel
 
3 months ago
https://news.ycombinator.com/item?id=47398112
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397023
 | 
next
https://news.ycombinator.com/item?id=47394022#47396429
 
[–]
javascript:void(0)
Oh me too, because people are anthropomorphizing the LLM, not because they hurt it. Indirectly, though, I agree that this behaviour can easily affect the way this person would speak to other humans
 
 

https://news.ycombinator.com/vote?id=47399714&how=up&goto=item%3Fid%3D47394022
dmos62
https://news.ycombinator.com/user?id=dmos62
 
3 months ago
https://news.ycombinator.com/item?id=47399714
 | 
root
https://news.ycombinator.com/item?id=47394022#47396273
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398112
 | 
next
https://news.ycombinator.com/item?id=47394022#47396429
 
[–]
javascript:void(0)
To be fair, I do anthropomorphize LLMs. But, I also anthropomorphize, say, a kitchen knife that I accidentally scrape on something (I think "sorry, knife"). I don't reflect on this much; it's just a pleasant way to relate to my environment. What feelings do you have about people anthropomorphizing LLMs?
Anthropomorphizing might not be the right term, because it's about assigning human attributes. When I talk to my dog, for example, I don't contextualize it as giving it human attributes. In a way, talking to something is part of how I engage my relationship-management circuitry. I don't only relate to humans, I relate to everything in one way or another, and kindness is a pretty nice starting point. As I said, I don't think about this much: might come up with something more coherent if I did.
 
 

https://news.ycombinator.com/vote?id=47396429&how=up&goto=item%3Fid%3D47394022
nacozarina
https://news.ycombinator.com/user?id=nacozarina
 
3 months ago
https://news.ycombinator.com/item?id=47396429
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396273
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396521
 | 
next
https://news.ycombinator.com/item?id=47394022#47396809
 
[–]
javascript:void(0)
agree, prompting a token predictor like you're talking to a person is counterproductive and I too wish it would stop
the models consistently spew slop when one does it, I have no idea where positive reinforcement for that behavior is coming from
 
 

https://news.ycombinator.com/vote?id=47396809&how=up&goto=item%3Fid%3D47394022
takwatanabe
https://news.ycombinator.com/user?id=takwatanabe
 
3 months ago
https://news.ycombinator.com/item?id=47396809
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396273
 | 
next
https://news.ycombinator.com/item?id=47394022#47395685
 
[–]
javascript:void(0)
We build and run a multi-agent system. Today Cursor won. For a log analysis task — Cursor: 5 minutes. Our pipeline: 30 minutes.
Still a case for it: 1. Isolated contexts per role (CS vs. engineering) — agents don't bleed into each other 2. Hard permission boundaries per agent 3. Local models (Qwen) for cheap routine tasks
Multi-agent loses at debugging. But the structure has value.
 
 

https://news.ycombinator.com/vote?id=47395685&how=up&goto=item%3Fid%3D47394022
xhale
https://news.ycombinator.com/user?id=xhale
 
3 months ago
https://news.ycombinator.com/item?id=47395685
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396809
 | 
next
https://news.ycombinator.com/item?id=47394022#47396554
 
[–]
javascript:void(0)
Hi, anyone has a simple example/scaffold how to set up agents/skills like this? I've looked at the stavrobots repo and only saw an AGENTS.md. Where do these skills live then?
(I have seen obra/superpowers mentioned in the comments, but that's already too complex and with an ui focus)
 
 

https://news.ycombinator.com/vote?id=47396761&how=up&goto=item%3Fid%3D47394022
lbreakjai
https://news.ycombinator.com/user?id=lbreakjai
 
3 months ago
https://news.ycombinator.com/item?id=47396761
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395685
 | 
next
https://news.ycombinator.com/item?id=47394022#47397614
 
[–]
javascript:void(0)
I played with this over the weekend:
https://github.com/marcosloic/notion-agent-hive
https://github.com/marcosloic/notion-agent-hive
Ultimately, it's just a bunch of markdown files that live in an 
/agents
 folder, with some meta-information that will depend on the harness you use.
 
 

https://news.ycombinator.com/vote?id=47397614&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397614
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395685
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396761
 | 
next
https://news.ycombinator.com/item?id=47394022#47396554
 
[–]
javascript:void(0)
These skills live in my home directory, that's why they aren't in the repos. I can upload them if you want.
 
 

https://news.ycombinator.com/vote?id=47402336&how=up&goto=item%3Fid%3D47394022
kkarolis
https://news.ycombinator.com/user?id=kkarolis
 
3 months ago
https://news.ycombinator.com/item?id=47402336
 | 
root
https://news.ycombinator.com/item?id=47394022#47395685
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397614
 | 
next
https://news.ycombinator.com/item?id=47394022#47396554
 
[–]
javascript:void(0)
Not original commenter, but would be curious (and thankful) to see it.
 
 

https://news.ycombinator.com/vote?id=47402425&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47402425
 | 
root
https://news.ycombinator.com/item?id=47394022#47395685
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402336
 | 
next
https://news.ycombinator.com/item?id=47394022#47396554
 
[–]
javascript:void(0)
I've updated the post with them, let me know if they work!
 
 

https://news.ycombinator.com/vote?id=47409954&how=up&goto=item%3Fid%3D47394022
xhale
https://news.ycombinator.com/user?id=xhale
 
3 months ago
https://news.ycombinator.com/item?id=47409954
 | 
root
https://news.ycombinator.com/item?id=47394022#47395685
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402425
 | 
next
https://news.ycombinator.com/item?id=47394022#47396554
 
[–]
javascript:void(0)
Thanks! (btw you have a typo on the second reviewer in the architect file. Is opencode smart enough to figure out the correct one?)
 
 

https://news.ycombinator.com/vote?id=47410623&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47410623
 | 
root
https://news.ycombinator.com/item?id=47394022#47395685
 | 
parent
https://news.ycombinator.com/item?id=47394022#47409954
 | 
next
https://news.ycombinator.com/item?id=47394022#47396554
 
[–]
javascript:void(0)
Hm I'll look, thanks! Yeah, it seems to work fine regardless.
 
 

https://news.ycombinator.com/vote?id=47396554&how=up&goto=item%3Fid%3D47394022
oytis
https://news.ycombinator.com/user?id=oytis
 
3 months ago
https://news.ycombinator.com/item?id=47396554
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395685
 | 
next
https://news.ycombinator.com/item?id=47394022#47397241
 
[–]
javascript:void(0)
I find the same problem applying to coding too. Even with everyone acting in good faith and reviewing everything themselves before pushing, you have essentially two reviwers instead of a writer and a reviewer, and there is no etiquette mandating how thoroughly the "author" should review their PR yet. It doesn't help if the amount of code to review gets larger (why would you go into agentic coding otherwise?)
 
 

https://news.ycombinator.com/vote?id=47397241&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397241
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396554
 | 
next
https://news.ycombinator.com/item?id=47394022#47397467
 
[–]
javascript:void(0)
Big +1 for opencode which for my purposes is interchangeable or better than Claude and can even use anthropic models via my GitHub copilot pro plan. I use it and Claude when one or the other hits token limits.
Edit: a comment below reminded me why I prefer opencode: a few pages in on a Claude session and it's scrolling through the entire conversation history on every output character. No such problem on OC.
 
 

https://news.ycombinator.com/vote?id=47397467&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397467
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397241
 | 
next
https://news.ycombinator.com/item?id=47394022#47398717
 
[–]
javascript:void(0)
On using different models: GitHub copilot has an API that gives you access to many different models from many different providers. They are very transparent about how they use your data
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
; in some cases it's safer to use a model through them than through the original provider.
You can point Claude at the copilot models with some hackery
2
[https://github.com/ericc-ch/copilot-api](https://github.com/ericc-ch/copilot-api)
 and opencode supports copilot models out of the box.
Finally, copilot is quite generous with the amount of usage you get from a Github pro plan (goes really far with Sonnet 4.6 which feels pretty close to Opus 4.5), and they're generous with their free pro licenses for open source etc.
Despite having stuck to autocomplete as their main feature for too long, this aspect of their service is outstanding.
 

https://news.ycombinator.com/vote?id=47398717&how=up&goto=item%3Fid%3D47394022
shell0x
https://news.ycombinator.com/user?id=shell0x
 
3 months ago
https://news.ycombinator.com/item?id=47398717
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397467
 | 
next
https://news.ycombinator.com/item?id=47394022#47399313
 
[–]
javascript:void(0)
Isn't that what Amp code essentially does? I've used Codex and Claude Max but I keep going back to Amp 
https://ampcode.com/models
https://ampcode.com/models
It uses different models for different modes.
I just find it to be faster and it often gets things right at the first attempt, but YMMV.
 
 

https://news.ycombinator.com/vote?id=47399313&how=up&goto=item%3Fid%3D47394022
bigblind
https://news.ycombinator.com/user?id=bigblind
 
3 months ago
https://news.ycombinator.com/item?id=47399313
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398717
 | 
next
https://news.ycombinator.com/item?id=47394022#47400075
 
[–]
javascript:void(0)
I wonder whether at some point we'll get a translation model, that translates relatively vague requests into sound architectural decisions, with some embedded knowledge of the environment you're building in, and that can ask clarifying questions when there are multiple options with different tradeoffs.
 
 

https://news.ycombinator.com/vote?id=47399361&how=up&goto=item%3Fid%3D47394022
mlnj
https://news.ycombinator.com/user?id=mlnj
 
3 months ago
https://news.ycombinator.com/item?id=47399361
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399313
 | 
next
https://news.ycombinator.com/item?id=47394022#47400075
 
[–]
javascript:void(0)
Is that not already possible with Markdown spec files and planning mode?
 
 

https://news.ycombinator.com/vote?id=47399646&how=up&goto=item%3Fid%3D47394022
bigblind
https://news.ycombinator.com/user?id=bigblind
 
3 months ago
https://news.ycombinator.com/item?id=47399646
 | 
root
https://news.ycombinator.com/item?id=47394022#47399313
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399361
 | 
next
https://news.ycombinator.com/item?id=47394022#47400075
 
[–]
javascript:void(0)
I guess? At least there you can review the plan, but is this planning mode any better at making architectural decisions than when you prompt an LLM and let it make the changes directly? (it might be, just not sure.)
 
 

https://news.ycombinator.com/vote?id=47400075&how=up&goto=item%3Fid%3D47394022
gwbas1c
https://news.ycombinator.com/user?id=gwbas1c
 
3 months ago
https://news.ycombinator.com/item?id=47400075
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399313
 | 
next
https://news.ycombinator.com/item?id=47394022#47399624
 
[–]
javascript:void(0)
That exact thing happens with people too! Specifically when a cheap entrepreneur hires a novice developer and can't give the developer appropriate mentoring and reviews.
 
 

https://news.ycombinator.com/vote?id=47400164&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47400164
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400075
 | 
next
https://news.ycombinator.com/item?id=47394022#47399624
 
[–]
javascript:void(0)
That's actually very true, I didn't realize. Huh, interesting, thanks.
 
 

https://news.ycombinator.com/vote?id=47399624&how=up&goto=item%3Fid%3D47394022
benterris
https://news.ycombinator.com/user?id=benterris
 
3 months ago
https://news.ycombinator.com/item?id=47399624
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400075
 | 
next
https://news.ycombinator.com/item?id=47394022#47395501
 
[–]
javascript:void(0)
One thing I don't get with this workflow, and all the ones we see in similar articles: do the authors run their agents in YOLO mode (full unchecked permission on their machine)? It seems their agents have full edit rights (scoped to a directory, which seems reasonable), but can also run tests autonomously (which means they can run any code), which equates to full read/write access on the machine? I mean, there are ways to sandbox agents in dedicated containers, but it requires quite a bit of setup, and none of these articles mention it, so I guess they are YOLOing it?
 
 

https://news.ycombinator.com/vote?id=47400682&how=up&goto=item%3Fid%3D47394022
neobrain
https://news.ycombinator.com/user?id=neobrain
 
3 months ago
https://news.ycombinator.com/item?id=47400682
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399624
 | 
next
https://news.ycombinator.com/item?id=47394022#47395501
 
[–]
javascript:void(0)
Claude has a sandbox mode that uses bubblewrap to build a lightweight filesystem sandbox that only exposes the project directory: 
https://code.claude.com/docs/en/sandboxing
https://code.claude.com/docs/en/sandboxing
It's disabled by default though, and in general (especially with other agents) you very much still have to get out of your way to get any sort of reasonable access control indeed.
In principle though, just running the agent CLI in something like firejail would get you very far if you know what you're doing.
 
 

https://news.ycombinator.com/vote?id=47395501&how=up&goto=item%3Fid%3D47394022
silisili
https://news.ycombinator.com/user?id=silisili
 
3 months ago
https://news.ycombinator.com/item?id=47395501
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399624
 | 
next
https://news.ycombinator.com/item?id=47394022#47399403
 
[–]
javascript:void(0)
I'm not sure the notion I keep seeing of "it's ok, we still architect, it just writes the code"(paraphrased) sits well with me.
I've not tested it with architecting a full system, but assuming it isn't good at it today... it's only a matter of time. Then what is our use?
 
 

https://news.ycombinator.com/vote?id=47395771&how=up&goto=item%3Fid%3D47394022
PAndreew
https://news.ycombinator.com/user?id=PAndreew
 
3 months ago
https://news.ycombinator.com/item?id=47395771
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395501
 | 
next
https://news.ycombinator.com/item?id=47394022#47395578
 
[–]
javascript:void(0)
Others have already partially answered this, but here's my 20 cents. Software development really is similar to architecture. The end result is an infrastructure of unique modules with different type of connectors (roads, grid, or APIs). Until now in SW dev the grunt work was done mostly by the same people who did the planning, decided on the type of connectors, etc. Real estate architects also use a bunch of software tools to aid them, but there must be a human being in the end of the chain who understands human needs, understands - after years of studying and practicing - how the whole building and the infrastructure will behave at large and who is ultimately responsible for the end result (and hopefully rewarded depending on the complexity and quality of the end result). So yes we will not need as many SW engineers, but those who remain will work on complex rewarding problems and will push the frontier further.
 
 

https://news.ycombinator.com/vote?id=47396561&how=up&goto=item%3Fid%3D47394022
dgb23
https://news.ycombinator.com/user?id=dgb23
 
3 months ago
https://news.ycombinator.com/item?id=47396561
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395771
 | 
next
https://news.ycombinator.com/item?id=47394022#47396059
 
[–]
javascript:void(0)
The "grunt work" is in many cases just that. As long as it's readable and works it's fine.
But there are a substantial amount cases where this isn't true. The nitty gritty is then the important part and it's impossible to make the whole thing work well without being intimate with the code.
So I never fully bought into the clean separation of development, engineering and architecture.
 
 

https://news.ycombinator.com/vote?id=47396059&how=up&goto=item%3Fid%3D47394022
rurban
https://news.ycombinator.com/user?id=rurban
 
3 months ago
https://news.ycombinator.com/item?id=47396059
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395771
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396561
 | 
next
https://news.ycombinator.com/item?id=47394022#47395578
 
[–]
javascript:void(0)
Since I worked as an architect some comments.
Architecture is fine for big, complex projects. Having everything planned out before keeps cost down, and ensures customer will not come with late changes. But if cost are expected to be low, and there's no customer, architecture is overkill. It's like making a movie without following the script line by line (watch Godard in Novelle Vague), or building it by yourself or by a non-architect. 2x faster, 10x cheaper. You immediately see an inflexible overarchitectured project.
You can do fine by restricting the agent with proper docs, proper tests and linters.
 
 

https://news.ycombinator.com/vote?id=47395578&how=up&goto=item%3Fid%3D47394022
chii
https://news.ycombinator.com/user?id=chii
 
3 months ago
https://news.ycombinator.com/item?id=47395578
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395501
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395771
 | 
next
https://news.ycombinator.com/item?id=47394022#47395546
 
[–]
javascript:void(0)
You will have to find new economic utility. That's the reality of technological progress - it's just that the tech and white collar industries didn't think it can come for them!
A skill that becomes obsoleted is useless, obviously. There's still room for artisanal/handcrafted wares today, amidst the industrial scale productions, so i would assume similar levels for coding.
 
 

https://news.ycombinator.com/vote?id=47395546&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47395546
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395501
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395578
 | 
next
https://news.ycombinator.com/item?id=47394022#47399403
 
[–]
javascript:void(0)
LLMs can build anything. The real question is what is worth building, and how it's delivered. That is what is still human. LLMs, by nature of not being human, cannot understand humans as well as other humans can. (See every attempt at using an LLM as a therapist)
In short: LLMs will eventually be able to architect software. But it's still 
just a tool
 
 

https://news.ycombinator.com/vote?id=47397950&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47397950
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395546
 | 
next
https://news.ycombinator.com/item?id=47394022#47395562
 
[–]
javascript:void(0)
This is only possibly true if one of two things are true:
All new software can be made up of of preexisting patterns of software that can be composed. ie: There is no such thing as "novel" software, it's all just composition of existing software.
LLMs are capable of emergent intelligence, allowing them to express patterns that they were not trained on.
I am extremely skeptical that either of these is true.
 
 

https://news.ycombinator.com/vote?id=47400606&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47400606
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397950
 | 
next
https://news.ycombinator.com/item?id=47394022#47395562
 
[–]
javascript:void(0)
Fair enough; I can see the exaggeration.
It is not impossible, however, that an LLM could run enough “random” tests to find new ways of doing something, but I hear you.
Let me restate that to “An LLM can build most anything…” and I stand by the rest of my comment.
 
 

https://news.ycombinator.com/vote?id=47400901&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47400901
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400606
 | 
next
https://news.ycombinator.com/item?id=47394022#47395562
 
[–]
javascript:void(0)
I think that makes sense, the rest of your comment is definitely true.
 
 

https://news.ycombinator.com/vote?id=47395562&how=up&goto=item%3Fid%3D47394022
silisili
https://news.ycombinator.com/user?id=silisili
 
3 months ago
https://news.ycombinator.com/item?id=47395562
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395546
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397950
 | 
next
https://news.ycombinator.com/item?id=47394022#47395744
 
[–]
javascript:void(0)
What is the use of software eng/architect at that point? It's a tool, but one that product or C levels can use directly as I see it?
 
 

https://news.ycombinator.com/vote?id=47395570&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47395570
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395562
 | 
next
https://news.ycombinator.com/item?id=47394022#47395588
 
[–]
javascript:void(0)
Yes, for building 
something
But for building 
the right thing
? Doubtful.
Most of a great engineer's work isn't writing code, but interrogating what people think their problems are, to find what the 
actual
 problems are.
In short: problem solving, not writing code.
 
 

https://news.ycombinator.com/vote?id=47396089&how=up&goto=item%3Fid%3D47394022
mattmanser
https://news.ycombinator.com/user?id=mattmanser
 
3 months ago
https://news.ycombinator.com/item?id=47396089
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395570
 | 
next
https://news.ycombinator.com/item?id=47394022#47395588
 
[–]
javascript:void(0)
Where's this delusion come from recently that great engineers didnt write code?
What a load of crap.
All you're doing is describing a different job role.
What you're talking about is BA work, and a subset of engineers are great at it, but most are just ok.
You're claiming a part of the job that was secondary, and not required, is now the whole job.
 
 

https://news.ycombinator.com/vote?id=47396118&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47396118
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396089
 | 
next
https://news.ycombinator.com/item?id=47394022#47395588
 
[–]
javascript:void(0)
I never said great engineers didn't write code. But 
writing the code
 was never the point.
The point has 
always
 been delivering the product to the customer, in any industry. Code is rarely the deliverable.
That's my point.
 
 

https://news.ycombinator.com/vote?id=47402656&how=up&goto=item%3Fid%3D47394022
mattmanser
https://news.ycombinator.com/user?id=mattmanser
 
3 months ago
https://news.ycombinator.com/item?id=47402656
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396118
 | 
next
https://news.ycombinator.com/item?id=47394022#47396858
 
[–]
javascript:void(0)
And a horse breeder was important to transportation until the 1920s, but it doesn't mean their job was transportation.
They didn't magically become great truck drivers.
Programmers do not deliver products, they deliver code to make products.
If the code is no longer needed, nor is the job. A different job will replace it with different skills required.
 
 

https://news.ycombinator.com/vote?id=47402965&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47402965
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402656
 | 
next
https://news.ycombinator.com/item?id=47394022#47396858
 
[–]
javascript:void(0)
Again: unrelated and pointless analogy. The horse breeder would be analogous to chipmakers or companies that make computers. Turns out they have more of a job than ever. They don't need to “become truck drivers.”
That's not even a little bit true. Programmers deliver product every day: see every single startup on the planet, and most companies.
Moreover, you said programmer. I didn't.
I said software engineer/architect, as that was what the parent comment asked.
I chose my words intentionally. I am referring to people who engage in the act of engineering or architecting software, which is definitely not limited to writing code.
Yes, a pure programmer (aka a researcher or a junior programmer) may not fare as well, for the reasons you mentioned.
But that was never who we were discussing.
If you still think the code is the point, I'm not sure we're going to see eye to eye, and I'm going to just agree to disagree. And if that's the case, then you're right: you may be left behind, keyboard in hand.
 
 

https://news.ycombinator.com/vote?id=47396858&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47396858
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396118
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402656
 | 
next
https://news.ycombinator.com/item?id=47394022#47395588
 
[–]
javascript:void(0)
Is that why most prestigious jobs grilled you like a devil on algos/system design?
That's just nonsense. It's like saying “delivering product was always the most important thing, not drinking water”.
 
 

https://news.ycombinator.com/vote?id=47397978&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47397978
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396858
 | 
next
https://news.ycombinator.com/item?id=47394022#47400538
 
[–]
javascript:void(0)
It's well understood that programming interviews are a pretty shitty tool. They're a proxy for understanding if you have basic skills required to understand a computer. Notably, most companies don't rely on these alone, they have behavioral questions, architecture questions, etc. Have you ever done an interview at these companies you're talking about? They're 8 hours lol maybe 1 is spent programming.
But it's just very obvious to any software engineer worth anything that code is just one part of the job, and it's usually somewhere in the middle of a process. Understanding customer requirements, making technical decisions, maintaining the codebase, reviewing code changes/ providing feedback, responding on incidents, deciding what work to do or not to do, deciding when a constraint has to be broken, etc. There are a billion things that aren't "typing code" that an engineer does every day. To deny this is absurd to anyone who lives every day doing those things.
 
 

https://news.ycombinator.com/vote?id=47411931&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47411931
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397978
 | 
next
https://news.ycombinator.com/item?id=47394022#47400550
 
[–]
javascript:void(0)
Gold luck passing Leetcode before you even get to all of these. Whether they're shitty or not is irrelevant, they're here and it's a fact.
 
 

https://news.ycombinator.com/vote?id=47414621&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47414621
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47411931
 | 
next
https://news.ycombinator.com/item?id=47394022#47400550
 
[–]
javascript:void(0)
And what do you derive from that fact? The position is that coding is only one portion of the job. "But there's a coding interview" was used to rebut this position. I have pointed out that the coding interview is a fraction of the procses, once again indicating that the job involves much more than coding.
So you saying "but there's a coding interview" again... who cares? Why is that relevant?
 
 

https://news.ycombinator.com/vote?id=47416861&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47416861
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47414621
 | 
next
https://news.ycombinator.com/item?id=47394022#47400550
 
[–]
javascript:void(0)
Everybody who works for salary cares. You can lament how coding is just 1% of work, it's irrelevant what percentage is “real” coding work when you can't pass that coding round and you're not hired.
 
 

https://news.ycombinator.com/vote?id=47417481&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47417481
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47416861
 | 
next
https://news.ycombinator.com/item?id=47394022#47400550
 
[–]
javascript:void(0)
I have literally no clue what point you're trying to string together. I tried to refocus things to the topic at hand but you're just saying completely irrelevant things. What is your point?
 
 

https://news.ycombinator.com/vote?id=47400550&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47400550
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397978
 | 
prev
https://news.ycombinator.com/item?id=47394022#47411931
 | 
next
https://news.ycombinator.com/item?id=47394022#47400538
 
[–]
javascript:void(0)
Yeah, this is precisely what I meant.
 
 

https://news.ycombinator.com/vote?id=47400870&how=up&goto=item%3Fid%3D47394022
staticassertion
https://news.ycombinator.com/user?id=staticassertion
 
3 months ago
https://news.ycombinator.com/item?id=47400870
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400550
 | 
next
https://news.ycombinator.com/item?id=47394022#47400538
 
[–]
javascript:void(0)
I'm genuinely blown away at the attitude lately that developers spend their time programming/ our primary value is code. I guess because we tend to be organizationally isolated people just have no idea? But like... it's so absurd to anyone who 
does the job
. It's like thinking that PM's primary role is assigning tickets, just so obviously false.
I think there's some resentment. I've seen repeatedly now people essentially celebrating that "tech bros" are finally going to see their salaries crash or whatever, it's pretty sick but I've noticed this quite a lot.
 
 

https://news.ycombinator.com/vote?id=47400538&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47400538
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396858
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397978
 | 
next
https://news.ycombinator.com/item?id=47394022#47395588
 
[–]
javascript:void(0)
No. That's because interviews have always sucked, and have always been terrible predictors of how you do on the job. We just never had a better way of deciding except paying for a project.
That's… not an argument? It's not even a strawman, it's just unrelated.
The thing a customer has always paid for was the end product. Not the code. This is absolutely trivial to see, since a customer has 
never
 asked to read the code.
 
 

https://news.ycombinator.com/vote?id=47411968&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47411968
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400538
 | 
next
https://news.ycombinator.com/item?id=47394022#47395588
 
[–]
javascript:void(0)
Who cares? They're here, and they will stay here for foreseeable future.
Yeah, and they didn't pay for the water that you drank. Without which, you know, you'll 
fucking die
. Code is part of the package, just like you eating and shitting in the process.
 
 

https://news.ycombinator.com/vote?id=47395588&how=up&goto=item%3Fid%3D47394022
0xbadcafebee
https://news.ycombinator.com/user?id=0xbadcafebee
 
3 months ago
https://news.ycombinator.com/item?id=47395588
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395562
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395570
 | 
next
https://news.ycombinator.com/item?id=47394022#47396833
 
[–]
javascript:void(0)
A software engineer will be a person who inspects the AI's work, same as a building inspector today. A software architect will co-sign on someone's printed-up AI plans, same as a building architect today. Some will be in-house, some will do contract work, and some will be artists trying to create something special, same as today. The brute labor is automated away, and the creativity (and liability) is captured by humans.
 
 

https://news.ycombinator.com/vote?id=47396833&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47396833
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395562
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395588
 | 
next
https://news.ycombinator.com/item?id=47394022#47395744
 
[–]
javascript:void(0)
Wait, I thought product and C level people are 
so busy
 all the time that they can't fart without a calendar invite, but now you say they have time to completely replace whole org of engineers?
 
 

https://news.ycombinator.com/vote?id=47395744&how=up&goto=item%3Fid%3D47394022
roncesvalles
https://news.ycombinator.com/user?id=roncesvalles
 
3 months ago
https://news.ycombinator.com/item?id=47395744
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395546
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395562
 | 
next
https://news.ycombinator.com/item?id=47394022#47399403
 
[–]
javascript:void(0)
FWIW I find LLMs to be excellent therapists.
The commercial solutions probably don't work because they don't use the best SOTA models and/or sully the context with all kinds of guardrails and role-playing nonsense, but if you just open a new chat window in your LLM of choice (set to the highest thinking paid-tier model), it gives you truly excellent therapist advice.
In fact in many ways the LLM therapist is actually better than the human, because e.g. you can dump a huge, detailed rant in the chat and it will actually listen to (read) every word you said.
 
 

https://news.ycombinator.com/vote?id=47395779&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47395779
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395744
 | 
next
https://news.ycombinator.com/item?id=47394022#47399403
 
[–]
javascript:void(0)
Please, please, please don't make this mistake. It is not a therapist. At best, it might be a facsimile of a life coach, but it does not have your best interests in mind.
It is easy to convince and trivial to make obsequious.
That is not what a therapist does. There's a reason they spend thousands of hours in training; that is not an exaggeration.
Humans are complex. An LLM cannot parse that level of complexity.
 
 

https://news.ycombinator.com/vote?id=47395850&how=up&goto=item%3Fid%3D47394022
roncesvalles
https://news.ycombinator.com/user?id=roncesvalles
 
3 months ago
https://news.ycombinator.com/item?id=47395850
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395779
 | 
next
https://news.ycombinator.com/item?id=47394022#47395976
 
[–]
javascript:void(0)
You seem to think therapists are only for those in dire straits. Yes, if you're at that point, definitely speak to a human. But there are many ordinary things for which "drop-in" therapist advice is also useful. For me: mild road rage, social anxiety, processing embarrassment from past events, etc.
The tools and reframing that LLMs have given me (Gemini 3.0/3.1 Pro) have been extremely effective and have genuinely improved my life. These things don't even cross the threshold to be worth the effort to find and speak to an actual therapist.
 
 

https://news.ycombinator.com/vote?id=47395884&how=up&goto=item%3Fid%3D47394022
defrost
https://news.ycombinator.com/user?id=defrost
 
3 months ago
https://news.ycombinator.com/item?id=47395884
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395850
 | 
next
https://news.ycombinator.com/item?id=47394022#47395881
 
[–]
javascript:void(0)
Which professional therapist does your Gemini 3.0/3.1 Pro model see?
Do you think I could use an AI therapist to become a more effective and much improved serial killer?
 
 

https://news.ycombinator.com/vote?id=47395881&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47395881
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395850
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395884
 | 
next
https://news.ycombinator.com/item?id=47394022#47395976
 
[–]
javascript:void(0)
I never said therapists were only for those in crisis; that is a misreading of my argument entirely.
An LLM cannot parse the complexity of your situation. Period. It is literally incapable of doing that, because it does not have any idea what it is like to be human.
Therapy is not an objective science; it is, in many ways, subjective, and the therapeutic relationship is by far the most important part.
I am not saying LLMs are not useful for helping people parse their emotions or understand themselves better. 
But that is not therapy
, in the same way that using an app built for CBT is not, in and of itself, therapy. It is 
one tool
 in a therapist's toolbox, and will not be the right tool for all patients.
That doesn't mean it isn't helpful.
But an LLM is not a therapist. The fact that you can trivially convince it to believe things that are absolutely untrue is precisely why, for one simple example.
 
 

https://news.ycombinator.com/vote?id=47396768&how=up&goto=item%3Fid%3D47394022
vanviegen
https://news.ycombinator.com/user?id=vanviegen
 
3 months ago
https://news.ycombinator.com/item?id=47396768
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395881
 | 
next
https://news.ycombinator.com/item?id=47394022#47395976
 
[–]
javascript:void(0)
As you said earlier, therapists are (thoroughly) trained on how to best handle situations. Just 'being human' (and thus empathizing) may not be such a big part of the job as you seem to believe.
Training LLMs we can do.
Though it might be important for the patient to believe that the therapist 
is
 empathizing, so that may give AI therapy an inherent disadvantage (depending on the patient's view of AI).
 
 

https://news.ycombinator.com/vote?id=47399928&how=up&goto=item%3Fid%3D47394022
emp17344
https://news.ycombinator.com/user?id=emp17344
 
3 months ago
https://news.ycombinator.com/item?id=47399928
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396768
 | 
next
https://news.ycombinator.com/item?id=47394022#47400492
 
[–]
javascript:void(0)
Socialization with other humans has so many benefits for happiness, mental health, and longevity. Conversely, interaction with LLMs often leads to AI psychosis and harms mental health. IMO, this is pretty strong evidence that interaction with LLMs is not similar to socialization with real humans, and a pretty good indicator that LLM “therapy” is significantly less helpful or even harmful than human-driven therapy.
 
 

https://news.ycombinator.com/vote?id=47400498&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47400498
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399928
 | 
next
https://news.ycombinator.com/item?id=47394022#47400492
 
[–]
javascript:void(0)
Precisely.
 
 

https://news.ycombinator.com/vote?id=47400492&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47400492
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396768
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399928
 | 
next
https://news.ycombinator.com/item?id=47394022#47395976
 
[–]
javascript:void(0)
The word “just” is not in my comment anywhere. Being human is necessary, but not sufficient.
And no, you cannot train an LLM to be human.
An LLM is not a therapist. Please do not confuse the two.
You cannot train an LLM on how to be human.
 
 

https://news.ycombinator.com/vote?id=47395976&how=up&goto=item%3Fid%3D47394022
pzs
https://news.ycombinator.com/user?id=pzs
 
3 months ago
https://news.ycombinator.com/item?id=47395976
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395779
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395850
 | 
next
https://news.ycombinator.com/item?id=47394022#47399403
 
[–]
javascript:void(0)
While I agree with you, I also find that an LLM can help organize my thoughts and come to realizations that I just didn't get to, because I hadn't explained verbally what I am thinking and feeling. Definitely not a substitute for human interaction and relationships, which can be fulfilling in many-many ways LLM's are not, but LLM's can still be helpful as long as you exercise your critical thinking skills. My preference remains always to talk to a friend though.
EDIT: seems like you made the same point in a child comment.
 
 

https://news.ycombinator.com/vote?id=47396006&how=up&goto=item%3Fid%3D47394022
borski
https://news.ycombinator.com/user?id=borski
 
3 months ago
https://news.ycombinator.com/item?id=47396006
 | 
root
https://news.ycombinator.com/item?id=47394022#47395501
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395976
 | 
next
https://news.ycombinator.com/item?id=47394022#47399403
 
[–]
javascript:void(0)
Yeah, I agree with all of that. A friend built an “emotion aware” coach, and it is 
extremely useful
 to both of us.
But he still sees a therapist, regularly, because they are not the same and do not serve the same purpose. :)
 
 

https://news.ycombinator.com/vote?id=47399403&how=up&goto=item%3Fid%3D47394022
mk_chan
https://news.ycombinator.com/user?id=mk_chan
 
3 months ago
https://news.ycombinator.com/item?id=47399403
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395501
 | 
next
https://news.ycombinator.com/item?id=47394022#47396242
 
[–]
javascript:void(0)
In my experience an LLM does 2 things: 1. Bring you up to some average-LLM level when you don't have the skills/knowledge to actually do what you want. 2. Work at 80-90% of your capacity but WAY faster than you physically could depending on how much context you provide it. If you don't provide it sufficient context to do what/how you want it to do, of course it might default to something you don't want.
 
 

https://news.ycombinator.com/vote?id=47396242&how=up&goto=item%3Fid%3D47394022
codeflo
https://news.ycombinator.com/user?id=codeflo
 
3 months ago
https://news.ycombinator.com/item?id=47396242
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399403
 | 
next
https://news.ycombinator.com/item?id=47394022#47398742
 
[–]
javascript:void(0)
I know the argument I'm going to make is not original, but with every passing week, it's becoming more obvious that if the productivity claims were even half true, those "1000x" LLM shamans would have toppled the economy by now. Were are the slop-coded billion dollar IPOs? We should have one every other week.
 
 

https://news.ycombinator.com/vote?id=47396888&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47396888
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396242
 | 
next
https://news.ycombinator.com/item?id=47394022#47397240
 
[–]
javascript:void(0)
They're busy writing applications for their dogs and building “jerk me off” functionality into their OpenClaw fork. Once they're done you'll be sorry you ever asked.
 
 

https://news.ycombinator.com/vote?id=47397240&how=up&goto=item%3Fid%3D47394022
user34283
https://news.ycombinator.com/user?id=user34283
 
3 months ago
https://news.ycombinator.com/item?id=47397240
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396242
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396888
 | 
next
https://news.ycombinator.com/item?id=47394022#47405860
 
[–]
javascript:void(0)
Last time I read about a Codex update, I think it mentioned that a million developers tried the tool.
Don't most companies use AI in software development today?
And yes, I know that some companies are not doing that because of privacy and reliability concerns or whatever. With many of them it's a bit of a funny argument considering even large banks managed to adopt agentic AI tools. Short of government and military kind of stuff, everybody can use it today.
 
 

https://news.ycombinator.com/vote?id=47405860&how=up&goto=item%3Fid%3D47394022
ugtr3
https://news.ycombinator.com/user?id=ugtr3
 
3 months ago
https://news.ycombinator.com/item?id=47405860
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396242
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397240
 | 
next
https://news.ycombinator.com/item?id=47394022#47397204
 
[–]
javascript:void(0)
On a serious note it would be great to run an experiment - get 20 people on here claiming 100x productivity, and let's see what they muster up in 1 month working together.
I'm happy to put money in towards it ;)
 
 

https://news.ycombinator.com/vote?id=47397204&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397204
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396242
 | 
prev
https://news.ycombinator.com/item?id=47394022#47405860
 | 
next
https://news.ycombinator.com/item?id=47394022#47398742
 
[–]
javascript:void(0)
Writing pieces of code that beat average human level is solved. Organizing that code is on its way to being solved (posts like this hint at it). Finding problems that people will pay money to have solved by software is a different entirely more complicated matter (tbh I doubt anyone could prove right now that this absolutely is or isn't solvable - but given the change we've seen already I place no bets against AI).
Also even if agents could do everything the societal obstacles to change are extensive (sometimes for very good, sometimes for bad reasons) so I'm expecting it to take another year or two serious change to occur.
 
 

https://news.ycombinator.com/vote?id=47405872&how=up&goto=item%3Fid%3D47394022
ugtr3
https://news.ycombinator.com/user?id=ugtr3
 
3 months ago
https://news.ycombinator.com/item?id=47405872
 | 
root
https://news.ycombinator.com/item?id=47394022#47396242
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397204
 | 
next
https://news.ycombinator.com/item?id=47394022#47398742
 
[–]
javascript:void(0)
“ Finding problems that people will pay money to have solved by software is a different entirely more complicated matter ”
Come on you're taking the piss, surely.
 
 

https://news.ycombinator.com/vote?id=47398742&how=up&goto=item%3Fid%3D47394022
OtomotO
https://news.ycombinator.com/user?id=OtomotO
 
3 months ago
https://news.ycombinator.com/item?id=47398742
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396242
 | 
next
https://news.ycombinator.com/item?id=47394022#47396098
 
[–]
javascript:void(0)
Which is Fortuna's work... stochastic models are like that. And confirmation bias is another phenomenon as well as "how do LLMs align with my worldview" whether I see them more positively or more negatively.
 
 

https://news.ycombinator.com/vote?id=47396098&how=up&goto=item%3Fid%3D47394022
kleiba
https://news.ycombinator.com/user?id=kleiba
 
3 months ago
https://news.ycombinator.com/item?id=47396098
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398742
 | 
next
https://news.ycombinator.com/item?id=47394022#47397167
 
[–]
javascript:void(0)
I write very little code these days, so I've been following the AI development mostly from the backseat. One aspect I fail to grasp perfectly is what the practical differences are between CLI (so terminal-based) agents and ones fully integrated into an IDE.
Could someone chime in and give their opinion on what are the pros and cons of either approach?
 
 

https://news.ycombinator.com/vote?id=47397150&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397150
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396098
 | 
next
https://news.ycombinator.com/item?id=47394022#47397202
 
[–]
javascript:void(0)
I guess you're probably looking for someone who uses cursor etc to answer but here's a data point from someone a bit off the beaten path.
My editor supports both modes (emacs). I have the editor integration features (diff support etc) turned off and just use emacs to manage 5+ shells that each have a CLI agent (one of Claude, opencode, amp free) running in them.
If I want to go deep into a prompt then I'll write a markdown file and iterate on it with a CLI.
 
 

https://news.ycombinator.com/vote?id=47397224&how=up&goto=item%3Fid%3D47394022
kleiba
https://news.ycombinator.com/user?id=kleiba
 
3 months ago
https://news.ycombinator.com/item?id=47397224
 | 
root
https://news.ycombinator.com/item?id=47394022#47396098
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397150
 | 
next
https://news.ycombinator.com/item?id=47394022#47397202
 
[–]
javascript:void(0)
I noticed that OpenCode requires per their own website "a modern terminal emulator" - so, no problem in Emacs? Are you running M-x term?
 
 

https://news.ycombinator.com/vote?id=47397356&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397356
 | 
root
https://news.ycombinator.com/item?id=47394022#47396098
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397224
 | 
next
https://news.ycombinator.com/item?id=47394022#47397202
 
[–]
javascript:void(0)
I have my own function that starts up a vterm in the root of the repo that I'm in. It is average for running Claude (long sessions get the scrolling through the whole history on every output character bug) but actually better at running opencode which doesn't have this problem.
 
 

https://news.ycombinator.com/vote?id=47422487&how=up&goto=item%3Fid%3D47394022
kleiba
https://news.ycombinator.com/user?id=kleiba
 
3 months ago
https://news.ycombinator.com/item?id=47422487
 | 
root
https://news.ycombinator.com/item?id=47394022#47396098
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397356
 | 
next
https://news.ycombinator.com/item?id=47394022#47397202
 
[–]
javascript:void(0)
I don't have opencode installed, but I'm curious: if you start a terminal within Emacs with M-x term, how well does it do at running the opencode CLI?
 
 

https://news.ycombinator.com/vote?id=47397202&how=up&goto=item%3Fid%3D47394022
user34283
https://news.ycombinator.com/user?id=user34283
 
3 months ago
https://news.ycombinator.com/item?id=47397202
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396098
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397150
 | 
next
https://news.ycombinator.com/item?id=47394022#47396141
 
[–]
javascript:void(0)
I don't think there is a meaningful difference.
Whether I use Antigravity, VS Code with Claude Code CLI, GitHub Copilot IDE plugins, or the Codex app, they all do similar things.
Although I'd say Codex and Claude Code often feel significantly better to me, currently. In terms of what they can achieve and how I work with them.
 
 

https://news.ycombinator.com/vote?id=47396141&how=up&goto=item%3Fid%3D47394022
rullelito
https://news.ycombinator.com/user?id=rullelito
 
3 months ago
https://news.ycombinator.com/item?id=47396141
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396098
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397202
 | 
next
https://news.ycombinator.com/item?id=47394022#47397167
 
[–]
javascript:void(0)
For me, I use an IDE if I plan to look at the code.
 
 

https://news.ycombinator.com/vote?id=47396338&how=up&goto=item%3Fid%3D47394022
kleiba
https://news.ycombinator.com/user?id=kleiba
 
3 months ago
https://news.ycombinator.com/item?id=47396338
 | 
root
https://news.ycombinator.com/item?id=47394022#47396098
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396141
 | 
next
https://news.ycombinator.com/item?id=47394022#47397167
 
[–]
javascript:void(0)
So, to you basically the distinction is "fully vibe-coded" vs. "with human in the loop"?
 
 

https://news.ycombinator.com/vote?id=47397167&how=up&goto=item%3Fid%3D47394022
peterweisz
https://news.ycombinator.com/user?id=peterweisz
 
3 months ago
https://news.ycombinator.com/item?id=47397167
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396098
 | 
next
https://news.ycombinator.com/item?id=47394022#47401727
 
[–]
javascript:void(0)
Great article. I'd recommmend to make guardrails and benchmarking an integral part of prompt engineering. Think of it as kind of a system prompt to your Opus 4.6 architect: LangChain, RAG, LLm-as-a-judge, MCP. When I think about benchmarks I always ask it to research for external DB or other ressources as a referencing guardrail
 
 

https://news.ycombinator.com/vote?id=47401727&how=up&goto=item%3Fid%3D47394022
zihotki
https://news.ycombinator.com/user?id=zihotki
 
3 months ago
https://news.ycombinator.com/item?id=47401727
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397167
 | 
next
https://news.ycombinator.com/item?id=47394022#47398858
 
[–]
javascript:void(0)
Just like with many other submissions, I see a great I-shaped senior developer with a developed gut feeling who's able to do big chunks of work.
I wonder how the team members, if any, survive such throughput. I also wonder if there was any quantification applied for the prompts/results, cost analysis, etc.
 
 

https://news.ycombinator.com/vote?id=47398858&how=up&goto=item%3Fid%3D47394022
pathikrit
https://news.ycombinator.com/user?id=pathikrit
 
3 months ago
https://news.ycombinator.com/item?id=47398858
 | 
prev
https://news.ycombinator.com/item?id=47394022#47401727
 | 
next
https://news.ycombinator.com/item?id=47394022#47426055
 
[–]
javascript:void(0)
10-15 years ago HN was the place where everyone showed off their new shiny toys and people would jump over themselves to try some new framework or db or tool. Now, so much negative sentiment about AI coding. I bet if LLMs came 15 years ago, HN would be brimming with excitement. What happened?
 
 

https://news.ycombinator.com/vote?id=47399509&how=up&goto=item%3Fid%3D47394022
dncornholio
https://news.ycombinator.com/user?id=dncornholio
 
3 months ago
https://news.ycombinator.com/item?id=47399509
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398858
 | 
next
https://news.ycombinator.com/item?id=47394022#47399507
 
[–]
javascript:void(0)
You should be critical. If you made something, you should proof that it works. Especially in todays world. This article contains no proof that their work actually works.
 
 

https://news.ycombinator.com/vote?id=47407267&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47407267
 | 
root
https://news.ycombinator.com/item?id=47394022#47398858
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399509
 | 
next
https://news.ycombinator.com/item?id=47394022#47399507
 
[–]
javascript:void(0)
Except that all of it is open source and you can go try it. So this is basically me saying "I made a really nice cake, here, try some" and you're plugging your ears and going "lalalala can't prove this cake is good, lalalala it's shit".
 
 

https://news.ycombinator.com/vote?id=47439286&how=up&goto=item%3Fid%3D47394022
dncornholio
https://news.ycombinator.com/user?id=dncornholio
 
3 months ago
https://news.ycombinator.com/item?id=47439286
 | 
root
https://news.ycombinator.com/item?id=47394022#47398858
 | 
parent
https://news.ycombinator.com/item?id=47394022#47407267
 | 
next
https://news.ycombinator.com/item?id=47394022#47399507
 
[–]
javascript:void(0)
How can you say it's a -really- nice cake without ever having tasted it?
 
 

https://news.ycombinator.com/vote?id=47399507&how=up&goto=item%3Fid%3D47394022
timdellinger
https://news.ycombinator.com/user?id=timdellinger
 
3 months ago
https://news.ycombinator.com/item?id=47399507
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398858
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399509
 | 
next
https://news.ycombinator.com/item?id=47394022#47400237
 
[–]
javascript:void(0)
The difference is that CEOs fired a lot of people, using "AI can replace human coders" as an excuse. Also: there are claims all over the headlines along the lines of "We built something amazing without human coders."
Both claims are loud and are flooding the discussion, but under the hood it's mostly a slop disaster.
So the negative sentiment is a natural response (and a dose of realism).
 
 

https://news.ycombinator.com/vote?id=47406208&how=up&goto=item%3Fid%3D47394022
kody
https://news.ycombinator.com/user?id=kody
 
3 months ago
https://news.ycombinator.com/item?id=47406208
 | 
root
https://news.ycombinator.com/item?id=47394022#47398858
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399507
 | 
next
https://news.ycombinator.com/item?id=47394022#47400237
 
[–]
javascript:void(0)
Mix in exhaustion from previous hype cycles (NFTs?) and folks pushing the narrative that if you currently write any code manually, you're obsolete and it's hard to not want to push back negatively. Even if you find the tech interesting/useful.
 
 

https://news.ycombinator.com/vote?id=47400237&how=up&goto=item%3Fid%3D47394022
dml2135
https://news.ycombinator.com/user?id=dml2135
 
3 months ago
https://news.ycombinator.com/item?id=47400237
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398858
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399507
 | 
next
https://news.ycombinator.com/item?id=47394022#47426055
 
[–]
javascript:void(0)
Oligarchy.
 
 

https://news.ycombinator.com/vote?id=47426055&how=up&goto=item%3Fid%3D47394022
freshtake
https://news.ycombinator.com/user?id=freshtake
 
3 months ago
https://news.ycombinator.com/item?id=47426055
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398858
 | 
next
https://news.ycombinator.com/item?id=47394022#47413062
 
[–]
javascript:void(0)
"I try to understand things as much as I can while planning, even if I'm unfamiliar with the specific technology. If I manage to steer the LLM well, it saves a lot of trouble later on."
This is the most important part of the article. Key takeaway.
 
 

https://news.ycombinator.com/vote?id=47413062&how=up&goto=item%3Fid%3D47394022
tliptay
https://news.ycombinator.com/user?id=tliptay
 
3 months ago
https://news.ycombinator.com/item?id=47413062
 | 
prev
https://news.ycombinator.com/item?id=47394022#47426055
 | 
next
https://news.ycombinator.com/item?id=47394022#47402567
 
[–]
javascript:void(0)
I've seen something similar with forecasting.
I can get more accurate forecasts by having distinct agents do different research tasks, summarize, and then feed those summaries to an agent that uses judgment to forecast.
I think it is all about managing context.
 
 

https://news.ycombinator.com/vote?id=47402567&how=up&goto=item%3Fid%3D47394022
denzen
https://news.ycombinator.com/user?id=denzen
 
3 months ago
https://news.ycombinator.com/item?id=47402567
 | 
prev
https://news.ycombinator.com/item?id=47394022#47413062
 | 
next
https://news.ycombinator.com/item?id=47394022#47396298
 
[–]
javascript:void(0)
Doesn't help that 
pine
 is one way of saying penis in french
 
 

https://news.ycombinator.com/vote?id=47396298&how=up&goto=item%3Fid%3D47394022
sdevonoes
https://news.ycombinator.com/user?id=sdevonoes
 
3 months ago
https://news.ycombinator.com/item?id=47396298
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402567
 | 
next
https://news.ycombinator.com/item?id=47394022#47400668
 
[–]
javascript:void(0)
Agent bots are the new “TODO” list apps. Seems cool and all, but I wish I could see someone writing useful software with LLMs, at least once.
So much power in our hands, and soon another Facebook will appear built entirely by LLMs. What a fucking waste of time and money.
It's getting tiring.
 
 

https://news.ycombinator.com/vote?id=47400668&how=up&goto=item%3Fid%3D47394022
devlinMckhay
https://news.ycombinator.com/user?id=devlinMckhay
 
3 months ago
https://news.ycombinator.com/item?id=47400668
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396298
 | 
next
https://news.ycombinator.com/item?id=47394022#47398521
 
[–]
javascript:void(0)
the failure mode section is the most honest thing i have read about this whole thing. I hit that exact wall building something evenings after work. you miss one bad architectural decision because you are tired or in a hurry, and three sessions later the llm is confidently making it worse and you are not even sure when it started going wrong. the only thing that helped was slowing down on the planning side even when i did not feel like i had time for it.
 
 

https://news.ycombinator.com/vote?id=47398521&how=up&goto=item%3Fid%3D47394022
frig57
https://news.ycombinator.com/user?id=frig57
 
3 months ago
https://news.ycombinator.com/item?id=47398521
 | 
prev
https://news.ycombinator.com/item?id=47394022#47400668
 | 
next
https://news.ycombinator.com/item?id=47394022#47398882
 
[–]
javascript:void(0)
Stavbot eh? Fava beans
https://youtu.be/gyy-RcI6pxE?si=e0QPg3jWvwDojKSP
https://youtu.be/gyy-RcI6pxE?si=e0QPg3jWvwDojKSP
 
 

https://news.ycombinator.com/vote?id=47398882&how=up&goto=item%3Fid%3D47394022
fedeb95
https://news.ycombinator.com/user?id=fedeb95
 
3 months ago
https://news.ycombinator.com/item?id=47398882
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398521
 | 
next
https://news.ycombinator.com/item?id=47394022#47402034
 
[–]
javascript:void(0)
This is interesting and goes beyond the usual AI hype. It's the beginning of a structured and efficient use of new tools (aka software engineering).
 
 

https://news.ycombinator.com/vote?id=47402034&how=up&goto=item%3Fid%3D47394022
kul_
https://news.ycombinator.com/user?id=kul_
 
3 months ago
https://news.ycombinator.com/item?id=47402034
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398882
 | 
next
https://news.ycombinator.com/item?id=47394022#47396133
 
[–]
javascript:void(0)
LLMs are great at aggregating docs, blogs and other sources out there into a single interface and there has been nothing like it before.
When it comes to coding however, the place where you really need help is the place where you get stuck and that for most people would be the intersection of domain and tech. LLMs need a LOT of baby sitting to be somewhat useful here. If I have to prompt a LLM for hours just to get the correct code, why would I even use it when the tangible output is just carefully thought out few 100 lines of code!
 
 

https://news.ycombinator.com/vote?id=47396133&how=up&goto=item%3Fid%3D47394022
prpl
https://news.ycombinator.com/user?id=prpl
 
3 months ago
https://news.ycombinator.com/item?id=47396133
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402034
 | 
next
https://news.ycombinator.com/item?id=47394022#47410557
 
[–]
javascript:void(0)
I am enjoying the RePPIT framework from Mihail Eric. I think it's a better formalization of developing without resulting to personas.
 
 

https://news.ycombinator.com/vote?id=47410557&how=up&goto=item%3Fid%3D47394022
IanCal
https://news.ycombinator.com/user?id=IanCal
 
3 months ago
https://news.ycombinator.com/item?id=47410557
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396133
 | 
next
https://news.ycombinator.com/item?id=47394022#47398166
 
[–]
javascript:void(0)
I like this, I've always had a soft spot for interesting clocks, and the first description has a strong nostalgia for me from the Discworld:
mkovach
https://news.ycombinator.com/user?id=mkovach
 
3 months ago
https://news.ycombinator.com/item?id=47398166
 | 
prev
https://news.ycombinator.com/item?id=47394022#47410557
 | 
next
https://news.ycombinator.com/item?id=47394022#47396408
 
[–]
javascript:void(0)
What hurts the most is that the em dash used to be a small, rebellious literary act that I truly enjoyed employing. A simple, useful hinge in a sentence where it could change its mind. Now? It indicates when an LLM got too frisky with clause boundaries and maintains a phobia of semicolons.
 
 

https://news.ycombinator.com/vote?id=47396408&how=up&goto=item%3Fid%3D47394022
neonstatic
https://news.ycombinator.com/user?id=neonstatic
 
3 months ago
https://news.ycombinator.com/item?id=47396408
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398166
 | 
next
https://news.ycombinator.com/item?id=47394022#47398219
 
[–]
javascript:void(0)
I'm glad it works for the author, I just don't believe that "each change being as reliable as the first one" is true.
I agree that knowing the syntax is less important now, but I don't see how the latter claim has changed with the advent of LLMs at all?
I think the author is contradicting himself here. Programs written by an LLM in a domain he is not knowledgable about are a mess. Programs written by an LLM in a domain he is knowledgeable about are not a mess. He claims the latter is mostly true because LLMs are so good???
My take after spending ~2 weeks working with Claude full time writing Rust:
Very good for language level concepts: syntax, how features work, how features compose, what the limitations are, correcting my wrong usage of all of the above, educating me on these things
Very good as an assistant to talk things through, point out gaps in the design, suggest different ways to architect a solution, suggest libraries etc.
Good at generating code, that looks great at the first glance, but has many unexplained assumptions and gaps
Despite lack of access to the compiler (Opus 4.6 via Web), most of the time code compiles or there are trivially fixable issues before it gets to compile
Has a hard to explain fixation on doing things a certain way, e.g. always wants to use panics on errors (panic!, unreachable!, .expect etc) or wants to do type erasure with Box
 as if that was the most idiomatic and desirable way of doing things
I ended up getting some stuff done, but it was very frustrating and intellectually draining
The only way I see to get things done to a good standard is to continuously push the model to go deeper and deeper regarding very specific things. "Get x done" and variations of that idea will inevitably lead to stuff that looks nice, but doesn't work.
So... imo it is a new generation compiler + code gen tool, that understands human language. It's pretty great and at the same time it tires me in ways I find hard to explain. If professional programming going forward would mean just talking to a model all day every day, I probably would look for other career options.
 
 

https://news.ycombinator.com/vote?id=47399297&how=up&goto=item%3Fid%3D47394022
mbbutler
https://news.ycombinator.com/user?id=mbbutler
 
3 months ago
https://news.ycombinator.com/item?id=47399297
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396408
 | 
next
https://news.ycombinator.com/item?id=47394022#47398219
 
[–]
javascript:void(0)
Yes! I see this constantly. I have a Rust guide that Claude adheres to maybe 50% of the time. It also loves to allocate despite my guide having a whole section about different ways to avoid allocations.
 
 

https://news.ycombinator.com/vote?id=47398219&how=up&goto=item%3Fid%3D47394022
rednafi
https://news.ycombinator.com/user?id=rednafi
 
3 months ago
https://news.ycombinator.com/item?id=47398219
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396408
 | 
next
https://news.ycombinator.com/item?id=47394022#47397654
 
[–]
javascript:void(0)
The world could use one less "how I slop" article at this point.
This reminds me of the early Medium days when everyone would write articles on how to make HTTP endpoints or how to use Pandas.
There's not much skill involved in hauling agents, and you can still do it without losing your expertise in the stuff you actually like to work with.
For me, I work with these tools all the time, and reading these articles hasn't added anything to my repertoire so far. It gives me the feeling of "bikeshedding about tools instead of actually building something useful with them."
We are collectively addicted to making software that no one wants to use. Even I don't consistently use half the junk I built with these tools.
Another thing is that everyone yapping about how great AI is isn't actually showing the tools' capabilities in building greenfield stuff. In reality, we have to do a lot more brownfield work that's super boring, and AI isn't as effective there.
 
 

https://news.ycombinator.com/vote?id=47397654&how=up&goto=item%3Fid%3D47394022
ilovetux
https://news.ycombinator.com/user?id=ilovetux
 
3 months ago
https://news.ycombinator.com/item?id=47397654
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398219
 | 
next
https://news.ycombinator.com/item?id=47394022#47396079
 
[–]
javascript:void(0)
I like the approach outlined in the article. These days having a roadmap for yourself while cruising at highway speeds helps make sense of the chaos.
One big pain point that has existed forever and has never really been addresses adequately is the ability to come up with requirements.
Sure, it sounds easy, I need the app to do x, y and z. But requirements change in real time because of lack of foresight, change of business needs, an unexpected roadblock and more contribute to changing requirements.
So, the advice to come up with the requirements by yourself or with the LLM miss the biggest pain point.
I'd like to see a resurgence of flow charts, IPO (Input, Processing and Output) charts and other tools to organize requirements spring up to help with really nailing down requirements.
I will say, though, some of the pain is relieved because the agent can perform a huge refactor in a couple of minutes, but that opens a whole new can of worms.
 
 

https://news.ycombinator.com/vote?id=47396079&how=up&goto=item%3Fid%3D47394022
zapkyeskrill
https://news.ycombinator.com/user?id=zapkyeskrill
 
3 months ago
https://news.ycombinator.com/item?id=47396079
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397654
 | 
next
https://news.ycombinator.com/item?id=47394022#47396885
 
[–]
javascript:void(0)
What's the point of writing this? In a few weeks a new model will come out and make your current work pattern obsolete (a process described in the post itself)
 
 

https://news.ycombinator.com/vote?id=47397223&how=up&goto=item%3Fid%3D47394022
zingar
https://news.ycombinator.com/user?id=zingar
 
3 months ago
https://news.ycombinator.com/item?id=47397223
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396079
 | 
next
https://news.ycombinator.com/item?id=47394022#47396885
 
[–]
javascript:void(0)
Solidifying the ideas in writing helps the author improve them, and helps them and the rest of us understand what to look for in the next generation of models.
 
 

https://news.ycombinator.com/vote?id=47396885&how=up&goto=item%3Fid%3D47394022
danbruc
https://news.ycombinator.com/user?id=danbruc
 
3 months ago
https://news.ycombinator.com/item?id=47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396079
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
I randomly clicked and scrolled through the source code of 
Stavrobot - The largest thing I've built lately is an alternative to OpenClaw that focuses on security.
 
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
 and that is not great code. I have not used any AI to write code yet but considered trying it out - is this the kind of code I should expect? Or maybe the other way around, has someone an example of some non-trivial code - in size and complexity - written by an AI - without babysitting - and the code being really good?
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
 
https://github.com/skorokithakis/stavrobot
https://github.com/skorokithakis/stavrobot
 
 

https://news.ycombinator.com/vote?id=47396963&how=up&goto=item%3Fid%3D47394022
never_inline
https://news.ycombinator.com/user?id=never_inline
 
3 months ago
https://news.ycombinator.com/item?id=47396963
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
next
https://news.ycombinator.com/item?id=47394022#47396935
 
[–]
javascript:void(0)
I would suggest not delegating the LLD (class / interface level design) to the LLM. The clankeren are super bad at it. They treat everything as a disposable script.
Also document some best practices in AGENT.md or whatever it's called in your app.
Eg
    * All imports must be added on top of the file, NEVER inside the function.
    * Do not swallow exceptions unless the scenario calls for fault tolerance.
    * All functions need to have type annotations for parameters and return types.


And so on.
I almost always define the class-level design myself. In some sense I use the LLM to fill in the blanks. The design is still mine.
 
 

https://news.ycombinator.com/vote?id=47397084&how=up&goto=item%3Fid%3D47394022
danbruc
https://news.ycombinator.com/user?id=danbruc
 
3 months ago
https://news.ycombinator.com/item?id=47397084
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396963
 | 
next
https://news.ycombinator.com/item?id=47394022#47396935
 
[–]
javascript:void(0)
What actually stood out to me is how bad the functions are, they have no structure. Everything just bunched together, one line after the other, whatever it is, and almost no function calls to provide any structure. And also a ton of logging and error handling mixed in everywhere completely obscuring the actual functionality.
EDIT: My bad, the code eventually calls into dedicated functions from database.ts, so those 200 lines are mostly just validation and error handling. I really just skimmed the code and the amount of it made me assume that it actually implements the functionality somewhere in there.
Example, Agent.ts, line 93, function createManageKnowledgeTool() 
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
. I would have expected something like the following and not almost 200 lines of code implementing everything in place. This also uses two stores of some sort - memory and scratchpad - and they are also not abstracted out, upsert and delete deal with both kinds directly.
  switch (action)
  {
    case "help":
      return handleHelpAction(arguments);

    case "upsert":
      return handleUpsertAction(arguments);

    case "delete":
      return handleDeleteAction(arguments);

    default:
      return handleUnknowAction(arguments);
  }


1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
 
https://github.com/skorokithakis/stavrobot/blob/master/src/a...
https://github.com/skorokithakis/stavrobot/blob/master/src/agent.ts#L93
 
 

https://news.ycombinator.com/vote?id=47400217&how=up&goto=item%3Fid%3D47394022
never_inline
https://news.ycombinator.com/user?id=never_inline
 
3 months ago
https://news.ycombinator.com/item?id=47400217
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397084
 | 
next
https://news.ycombinator.com/item?id=47394022#47396935
 
[–]
javascript:void(0)
Which reinforces my point that LLMs are really bad at class and module level design.
 
 

https://news.ycombinator.com/vote?id=47396935&how=up&goto=item%3Fid%3D47394022
xenodium
https://news.ycombinator.com/user?id=xenodium
 
3 months ago
https://news.ycombinator.com/item?id=47396935
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396963
 | 
next
https://news.ycombinator.com/item?id=47394022#47397714
 
[–]
javascript:void(0)
From my experience, you kinda get what you ask for. If you don't ask for anything specific, it'll write as it sees fit. The more you involve yourself in the loop, the more you can get it to write according to your expectation. Also helps to give it a style guide of sorts that follows your preferred style.
 
 

https://news.ycombinator.com/vote?id=47397714&how=up&goto=item%3Fid%3D47394022
TacticalCoder
https://news.ycombinator.com/user?id=TacticalCoder
 
3 months ago
https://news.ycombinator.com/item?id=47397714
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396935
 | 
next
https://news.ycombinator.com/item?id=47394022#47399561
 
[–]
javascript:void(0)
Sadly yes. But it "works", for some definition of working. We all know it's going to be a maintenance nightmare seen the gigantic amount of code and projects now being generated ad infinitum. As someone commented in this thread: it can one-shot an app showing restaurant locations on a map and put a green icon if they're open. But don't except good code, secure code, performant code and certainly not "maintainable code".
By definition, unless the AIs can maintain that code, nothing is maintainable anymore: the reason being the sheer volume. Humans who could properly review and maintain code (and that's not many) are already outnumbered.
And as more and more become "prompt engineers" and are convinced that there's no need to learn anything anymore besides becoming a prompt engineer, the amount of generated code is only going to grow exponentially.
So to me it 
is
 the kind of code you should expect. It's not perfect. But it more or less works. And thankfully it shouldn't get worse with future models.
What we now need is tools, tools and more tools: to help keep these things on tracks. If we ever to get some peace of mind about the correctness of this unreviewable generate code, we'll need to automate things like theorem provers and code coverage (which are still nowhere to be seen).
And just like all these models are running on Linux and QEMU and Docker (dev container) and heavily using projects like ripgrep (Claude Code insist on having ripgrep installed), I'm pretty sure all these tools these models rely on and shall rely on to produce acceptable results are going to be, very mostly, written by humans.
I don't know how to put it nicely: an app showing green icon next to open restaurants on a map ain't exactly software to help lift off a rocket or to pilot a MRI machine.
BTW: yup, I do have and use Claude Code. Color me both impressed and horrified by the "working" amount un unmaintainable mess it can spout. Everybody who understands something about software maintenance should be horrified.
 
 

https://news.ycombinator.com/vote?id=47399321&how=up&goto=item%3Fid%3D47394022
bdashdash
https://news.ycombinator.com/user?id=bdashdash
 
3 months ago
https://news.ycombinator.com/item?id=47399321
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397714
 | 
next
https://news.ycombinator.com/item?id=47394022#47399561
 
[–]
javascript:void(0)
What I find interesting is how AI enthusiasts will recursively offer AI itself as the solution to any of the issues you mention.
Since AI can read and generate code, it can surely fix code, or find bugs, or address security flaws. And if this all turns into a hot mess, AI can just refactor the whole thing anyway. And so forth.
Personally, I think we'll be some years off before the whole software loop is closed by AI (if it even happens anyway).
 
 

https://news.ycombinator.com/vote?id=47399561&how=up&goto=item%3Fid%3D47394022
sweaterkokuro
https://news.ycombinator.com/user?id=sweaterkokuro
 
3 months ago
https://news.ycombinator.com/item?id=47399561
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397714
 | 
next
https://news.ycombinator.com/item?id=47394022#47398803
 
[–]
javascript:void(0)
In my experience its in all Language Models' nature to maximize token generation. They have been natively incentivized to generate more where possible. So if you dont put down your parameters tightly it will let loose. I usually put hard requirements of efficient code (less is more) and it gets close to how I would implement it. But like the previous comments say, it all depends on how deeply you integrate yourself into the loop.
 
 

https://news.ycombinator.com/vote?id=47400648&how=up&goto=item%3Fid%3D47394022
anthonyrstevens
https://news.ycombinator.com/user?id=anthonyrstevens
 
3 months ago
https://news.ycombinator.com/item?id=47400648
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399561
 | 
next
https://news.ycombinator.com/item?id=47394022#47398803
 
[–]
javascript:void(0)
Do you have any evidence of this?
 
 

https://news.ycombinator.com/vote?id=47402261&how=up&goto=item%3Fid%3D47394022
bigfishrunning
https://news.ycombinator.com/user?id=bigfishrunning
 
3 months ago
https://news.ycombinator.com/item?id=47402261
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400648
 | 
next
https://news.ycombinator.com/item?id=47394022#47398803
 
[–]
javascript:void(0)
The cloud providers charge per output token, so aren't they then incentivized to generate as many tokens as possible? The business model is the incentive.
 
 

https://news.ycombinator.com/vote?id=47402726&how=up&goto=item%3Fid%3D47394022
0xffff2
https://news.ycombinator.com/user?id=0xffff2
 
3 months ago
https://news.ycombinator.com/item?id=47402726
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402261
 | 
next
https://news.ycombinator.com/item?id=47394022#47398803
 
[–]
javascript:void(0)
This is only true in some cases though and not others. With a Claude Pro plan, I'm being billed monthly regardless of token usage so maximizing token count just causes frustration when I hit the rather low usage limits. I've also observed quite the opposite problem when using Github's Copilot, which charges per-prompt. In that world, I have to carefully structure prompts to be bounded in scope, or the agent will start taking shortcuts and half-assing work when it decides the prompt has gone on too long. It's not good at stopping and just saying "I need you to prompt me again so I can charge you for the next chunk of work".
So the summary of the annecdata to me is that the model itself certainly isn't incentivized to do anything in particular here, it's the tooling that's putting its finger on the scale (and different tooling nudges things in different directions).
 
 

https://news.ycombinator.com/vote?id=47398803&how=up&goto=item%3Fid%3D47394022
mbesto
https://news.ycombinator.com/user?id=mbesto
 
3 months ago
https://news.ycombinator.com/item?id=47398803
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399561
 | 
next
https://news.ycombinator.com/item?id=47394022#47398093
 
[–]
javascript:void(0)
When you say "is not great code" can you elaborate? Does the code work or not?
 
 

https://news.ycombinator.com/vote?id=47399062&how=up&goto=item%3Fid%3D47394022
danbruc
https://news.ycombinator.com/user?id=danbruc
 
3 months ago
https://news.ycombinator.com/item?id=47399062
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398803
 | 
next
https://news.ycombinator.com/item?id=47394022#47400177
 
[–]
javascript:void(0)
I don't know, I would assume it works but I would not expect it to be free of bugs. But that is the baseline for code, being correct - up to some bugs - is the absolute minimum requirement, code quality starts from there - is it efficient, is it secure, is it understandable, is it maintainable, ...
 
 

https://news.ycombinator.com/vote?id=47403980&how=up&goto=item%3Fid%3D47394022
mbesto
https://news.ycombinator.com/user?id=mbesto
 
3 months ago
https://news.ycombinator.com/item?id=47403980
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399062
 | 
next
https://news.ycombinator.com/item?id=47394022#47400177
 
[–]
javascript:void(0)
So do you expect it not to be free of bugs because you've run a comprehensive test on it, read all of the code yourself or are you just concluding that because you 
know
 it was generated by an LLM?
 
 

https://news.ycombinator.com/vote?id=47404501&how=up&goto=item%3Fid%3D47394022
danbruc
https://news.ycombinator.com/user?id=danbruc
 
3 months ago
https://news.ycombinator.com/item?id=47404501
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47403980
 | 
next
https://news.ycombinator.com/item?id=47394022#47400177
 
[–]
javascript:void(0)
It has not been formally verified which is essentially the only way to achieve code without defects with reasonable confidence. There are several studies that have found that there are roughly between one and twenty bugs per thousand lines of code in any software, this project has several thousand lines of code, so I would expect several bugs if written by humans and I have no reason to assume that large language models outperform humans in this respect, not at last because they are trained on code written by humans and have been trained to generate code as written by humans.
 
 

https://news.ycombinator.com/vote?id=47407666&how=up&goto=item%3Fid%3D47394022
mbesto
https://news.ycombinator.com/user?id=mbesto
 
3 months ago
https://news.ycombinator.com/item?id=47407666
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47404501
 | 
next
https://news.ycombinator.com/item?id=47394022#47400177
 
[–]
javascript:void(0)
But you said "it's not great code" and then said "i don't know", so your idea of it being "not great code" is purely speculative and totally unfounded.
 
 

https://news.ycombinator.com/vote?id=47451655&how=up&goto=item%3Fid%3D47394022
danbruc
https://news.ycombinator.com/user?id=danbruc
 
3 months ago
https://news.ycombinator.com/item?id=47451655
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47407666
 | 
next
https://news.ycombinator.com/item?id=47394022#47400177
 
[–]
javascript:void(0)
No, my judgment of not great code is not based on what the code does - and if it does so correctly - but on how the code is written. Those are independent things, you can have horrible code that does what it is supposed to do but you can also have great code that just does the wrong thing 
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
.
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
 I would however argue the later thing is more rare as it requires competent developers, however this still does not preclude some misunderstanding of the requirements.
 
 

https://news.ycombinator.com/vote?id=47400177&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47400177
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398803
 | 
prev
https://news.ycombinator.com/item?id=47394022#47399062
 | 
next
https://news.ycombinator.com/item?id=47394022#47398093
 
[–]
javascript:void(0)
It works really well, multiple people have been using it for a month or so (including me) and it's flawless. I think "not great" means "not very readable by humans", but it wasn't really meant to be readable.
I don't know if there are underlying bugs, but I haven't hit any, and the architecture (which I 
do
 know about) is sane.
 
 

https://news.ycombinator.com/vote?id=47398093&how=up&goto=item%3Fid%3D47394022
FiberBundle
https://news.ycombinator.com/user?id=FiberBundle
 
3 months ago
https://news.ycombinator.com/item?id=47398093
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398803
 | 
next
https://news.ycombinator.com/item?id=47394022#47398175
 
[–]
javascript:void(0)
Pine Town 
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
, the "whimsical infinite multiplayer canvas of a meadow", also looks like pure slop.
1
[https://docs.github.com/en/copilot/reference/ai-models/model...](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)
 
https://pine.town/
https://pine.town/
 
 

https://news.ycombinator.com/vote?id=47400184&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47400184
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398093
 | 
next
https://news.ycombinator.com/item?id=47394022#47398175
 
[–]
javascript:void(0)
What were you hoping to achieve with this comment?
 
 

https://news.ycombinator.com/vote?id=47405890&how=up&goto=item%3Fid%3D47394022
FiberBundle
https://news.ycombinator.com/user?id=FiberBundle
 
3 months ago
https://news.ycombinator.com/item?id=47405890
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47400184
 | 
next
https://news.ycombinator.com/item?id=47394022#47398175
 
[–]
javascript:void(0)
To help readers view the content of the article with scepticism, given the results the advice in it seems to produce.
 
 

https://news.ycombinator.com/vote?id=47405928&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47405928
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47405890
 | 
next
https://news.ycombinator.com/item?id=47394022#47398175
 
[–]
javascript:void(0)
"Guys this writer must be terrible, I saw one of his books and the cover wasn't good".
 
 

https://news.ycombinator.com/vote?id=47398175&how=up&goto=item%3Fid%3D47394022
vidarh
https://news.ycombinator.com/user?id=vidarh
 
3 months ago
https://news.ycombinator.com/item?id=47398175
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398093
 | 
next
https://news.ycombinator.com/item?id=47394022#47397751
 
[–]
javascript:void(0)
It's the kind of code you should expect if you don't run a harness that includes review and refactoring stages.
It's by no means the best LLMs can do.
 
 

https://news.ycombinator.com/vote?id=47397751&how=up&goto=item%3Fid%3D47394022
input_sh
https://news.ycombinator.com/user?id=input_sh
 
3 months ago
https://news.ycombinator.com/item?id=47397751
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398175
 | 
next
https://news.ycombinator.com/item?id=47394022#47397008
 
[–]
javascript:void(0)
You can make it better by investing a lot of time playing around with the tooling so that it produces something more akin to what you're looking for.
Good luck convincing your boss that this ungodly amount of time spent messing around with your tooling for an immeasurable improvement in your delivery is the time well spent as opposed to using that same amount of time delivering results by hand.
 
 

https://news.ycombinator.com/vote?id=47399355&how=up&goto=item%3Fid%3D47394022
javier123454321
https://news.ycombinator.com/user?id=javier123454321
 
3 months ago
https://news.ycombinator.com/item?id=47399355
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397751
 | 
next
https://news.ycombinator.com/item?id=47394022#47397008
 
[–]
javascript:void(0)
You literally have it backwards. It's the bosses that are pulling engineers aside and requiring adoption of a tooling that they're not even sure justifies the increase in productivity versus the cost of setting up the new workflows. At least anecdotally, that's the case.
 
 

https://news.ycombinator.com/vote?id=47402144&how=up&goto=item%3Fid%3D47394022
input_sh
https://news.ycombinator.com/user?id=input_sh
 
3 months ago
https://news.ycombinator.com/item?id=47402144
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399355
 | 
next
https://news.ycombinator.com/item?id=47394022#47397008
 
[–]
javascript:void(0)
I don't disagree with that, my claim is that bosses don't know what they're doing. If all of the pre-established quality standards go out the window, that's completely fine with me, I still get paid just the same, but then later on I get to point to that decision and say "I told you so".
Luckily for me, I'm fortunate enough to not have to work in that sort of environment.
 
 

https://news.ycombinator.com/vote?id=47397008&how=up&goto=item%3Fid%3D47394022
dncornholio
https://news.ycombinator.com/user?id=dncornholio
 
3 months ago
https://news.ycombinator.com/item?id=47397008
 | 
parent
https://news.ycombinator.com/item?id=47394022#47396885
 | 
prev
https://news.ycombinator.com/item?id=47394022#47397751
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
I also managed to find a 1000 line .cpp file in one of the projects. The article's content doesn't match his apps quality. They don't bring any value. His clock looks completely AI generated.
 
 

https://news.ycombinator.com/vote?id=47397792&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47397792
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397008
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
Remember you're grinding your anti-LLM axe against something a real person made, and that person read your comment.
 
 

https://news.ycombinator.com/vote?id=47399466&how=up&goto=item%3Fid%3D47394022
dncornholio
https://news.ycombinator.com/user?id=dncornholio
 
3 months ago
https://news.ycombinator.com/item?id=47399466
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47397792
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
Don't think it's fair to think any negative comment is from some anti-LLM-axe. I seriously gave you the benefit of the doubt, that was the whole reason I even looked further into your work.
It's no shame to be critical in todays world. Delivering proof is something that holds extra value and if I would create an article about the wonderful things I've created, I'd be extra sure to show it.
I looked at your clock project and when I saw that your updated version and improved version of your clock contained AI artifacts, I concluded that there's no proof of your work.
Sorry to have made that conclusion and I'm sorry if that hurt your feelings.
 
 

https://news.ycombinator.com/vote?id=47402406&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47402406
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47399466
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
Saying things like "there's no proof of your work" 
is
 the anti-LLM axe. Yes, it's all written by LLMs, and yes, it's all my work. Judge it on what it does and how well it works, not on whether the code looks like the code you would have written.
 
 

https://news.ycombinator.com/vote?id=47402587&how=up&goto=item%3Fid%3D47394022
fzeroracer
https://news.ycombinator.com/user?id=fzeroracer
 
3 months ago
https://news.ycombinator.com/item?id=47402587
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402406
 | 
next
https://news.ycombinator.com/item?id=47394022#47402865
 
[–]
javascript:void(0)
Is it 
your
 work? What did you bring to the table? Because if we're going to analyze design, then code is one function of that design.
For example, you talk about how the code is secure. How do 
you
 prove that it is secure?
 
 

https://news.ycombinator.com/vote?id=47402626&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47402626
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402587
 | 
next
https://news.ycombinator.com/item?id=47394022#47402865
 
[–]
javascript:void(0)
The same way 
you
 prove 
your
 OSS code is secure.
People here see an LLM-assisted project and suddenly they've never written a bug in their life.
 
 

https://news.ycombinator.com/vote?id=47402826&how=up&goto=item%3Fid%3D47394022
fzeroracer
https://news.ycombinator.com/user?id=fzeroracer
 
3 months ago
https://news.ycombinator.com/item?id=47402826
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402626
 | 
next
https://news.ycombinator.com/item?id=47394022#47402865
 
[–]
javascript:void(0)
I cannot empirically prove that my OS is secure, because I haven't written it. I trust that the maintainers of my OS have done their due diligence in ensuring it is secure, because they take 
ownership
 over their work.
But when I write software, critical software that sits on a customer's device, I take ownership over the areas of code that I've written, because I can know what I've written. They may contain bugs or issues that I may need to fix, but at the time I can know that I tried to apply the best practices I was aware of.
So if I ask you the same thing, do you 
know
 if your software is secure? What architecture prevents someone from exfiltrating all of the account data from pine town? What best practices are applied here?
 
 

https://news.ycombinator.com/vote?id=47402899&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47402899
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402826
 | 
next
https://news.ycombinator.com/item?id=47394022#47402865
 
[–]
javascript:void(0)
I didn't say OS, I said OSS. Open-source software.
 
 

https://news.ycombinator.com/vote?id=47402925&how=up&goto=item%3Fid%3D47394022
fzeroracer
https://news.ycombinator.com/user?id=fzeroracer
 
3 months ago
https://news.ycombinator.com/item?id=47402925
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402899
 | 
next
https://news.ycombinator.com/item?id=47394022#47402865
 
[–]
javascript:void(0)
Fair mistake on my end, I'm aware of what OSS means but my eyes will have a tendency to skip a letter or two. The same argument applies; because if I write something and release it to the OSS community there's going to be an expectation that A) I know how it works deeply and B) I know if it's reasonably secure when it's dealing with personal data. They can verify this by looking at the code, independently.
But if the code is unreadable and I can't make a valid argument for my software, what's left?
 
 

https://news.ycombinator.com/vote?id=47403002&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47403002
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402925
 | 
next
https://news.ycombinator.com/item?id=47394022#47402865
 
[–]
javascript:void(0)
Are you saying you know your code has exactly zero bugs because you wrote it? That's obviously absurd, so what you're really saying is "I'm fairly familiar with all the edge cases and I'm sure that my code has very few issues", which is the same thing I say.
Regardless, though, this argument is a bit like tilting at windmills. Software development has changed, it's never going back, and no matter how many looms you smash, the question now is "how do we make LLM-generated code safer/better/faster/more maintainable", not "how do we put the genie back in the bottle?".
Also I will give myself credit for using three analogies in two sentences.
 
 

https://news.ycombinator.com/vote?id=47402865&how=up&goto=item%3Fid%3D47394022
dncornholio
https://news.ycombinator.com/user?id=dncornholio
 
3 months ago
https://news.ycombinator.com/item?id=47402865
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402406
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402587
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
You're missing the point. I don't care who wrote it, I want to know if it works.
Also, you didn't address my remarks about your clock. Can you can show me a picture of it working in action?
 
 

https://news.ycombinator.com/vote?id=47402959&how=up&goto=item%3Fid%3D47394022
stavros
https://news.ycombinator.com/user?id=stavros
 
3 months ago
https://news.ycombinator.com/item?id=47402959
 | 
root
https://news.ycombinator.com/item?id=47394022#47396885
 | 
parent
https://news.ycombinator.com/item?id=47394022#47402865
 | 
next
https://news.ycombinator.com/item?id=47394022#47395824
 
[–]
javascript:void(0)
But you didn't say anything about wanting to know how it works, your comment was:
I don't understand your point about proof. After more than 120 open-source projects, you think I'm lying about the fact that my clock works? All the tens of projects I've written up on my site over decades, you latch on to the one I haven't published yet as some sort of proof that I'm lying? I really don't understand what your point is.
Here: 
https://immich.home.stavros.io/share/_k403I3s3cON-8oL5yP_QXY...
https://immich.home.stavros.io/share/_k403I3s3cON-8oL5yP_QXYjwC3QvXzDTG7TFNWgovOk1g9h5QohU_FXtd4ddDam1hQ
 
 

https://news.ycombinator.com/vote?id=47395824&how=up&goto=item%3Fid%3D47394022
imiric
https://news.ycombinator.com/user?id=imiric
 
3 months ago
https://news.ycombinator.com/item?id=47395824
 | 
prev
https://news.ycombinator.com/item?id=47394022#47396885
 | 
next
https://news.ycombinator.com/item?id=47394022#47398509
 
[–]
javascript:void(0)
Ah, another one of these. I'm eager to learn how a "social climber" talks to a chatbot. I'm sure it's full of novel insight, unlike thousands of other articles like this one.
 
 

https://news.ycombinator.com/vote?id=47399766&how=up&goto=item%3Fid%3D47394022
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47399766
 | 
parent
https://news.ycombinator.com/item?id=47394022#47395824
 | 
next
https://news.ycombinator.com/item?id=47394022#47398509
 
[–]
javascript:void(0)
Dudes not a social climber. You are making a lot of assumptions.
 
 

https://news.ycombinator.com/vote?id=47398509&how=up&goto=item%3Fid%3D47394022
cousin_it
https://news.ycombinator.com/user?id=cousin_it
 
3 months ago
https://news.ycombinator.com/item?id=47398509
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395824
 | 
next
https://news.ycombinator.com/item?id=47394022#47402927
 
[–]
javascript:void(0)
I'm thinking more and more that there's an ethical problem with using LLMs for programming. You might be reusing someone's GPL code with the license washed off. It's especially worrisome if the results end up in a closed product, competing with the open source project and making more money than it. Of course neither you nor the AI companies will face any consequence, the government is all-in and won't let you be hurt. But ethically, people need to start asking themselves some questions.
For me personally, in my projects there's not a single line of LLM code. At most I ask LLMs for advice about specific APIs. And the more I think about it, the more I want to stop doing even that.
 
 

https://news.ycombinator.com/vote?id=47398573&how=up&goto=item%3Fid%3D47394022
grzesiaka
https://news.ycombinator.com/user?id=grzesiaka
 
3 months ago
https://news.ycombinator.com/item?id=47398573
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398509
 | 
next
https://news.ycombinator.com/item?id=47394022#47400625
 
[–]
javascript:void(0)
The same here. I find big AI-corpos pretty evil and drastically misaligned with broader well-being of the society.
 
 

https://news.ycombinator.com/vote?id=47400625&how=up&goto=item%3Fid%3D47394022
3form
https://news.ycombinator.com/user?id=3form
 
3 months ago
https://news.ycombinator.com/item?id=47400625
 | 
parent
https://news.ycombinator.com/item?id=47394022#47398509
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398573
 | 
next
https://news.ycombinator.com/item?id=47394022#47402927
 
[–]
javascript:void(0)
I would also add: if you're paying, supporting their cause with your money.
Sometimes I would like to have magical make-my-project tool for my selfish reasons; sometimes I know it would be a bad choice to fall behind on what's to come. But I really, really don't want to support that future.
 
 

https://news.ycombinator.com/vote?id=47402927&how=up&goto=item%3Fid%3D47394022
andai
https://news.ycombinator.com/user?id=andai
 
3 months ago
https://news.ycombinator.com/item?id=47402927
 | 
prev
https://news.ycombinator.com/item?id=47394022#47398509
 | 
next
https://news.ycombinator.com/item?id=47394022#47400533
 
[–]
javascript:void(0)
Making software?
It sounds funny but I've heard an interesting argument along those lines.
The reason software is slow and bloated and kind of unreliable is because... It can be. There's so little competition. If there was actual competition, then there would be pressure to make it not be shit. But apparently no such pressure exists.
 
 

https://news.ycombinator.com/vote?id=47394702&how=up&goto=item%3Fid%3D47394022
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47394702
 | 
prev
https://news.ycombinator.com/item?id=47394022#47402612
 | 
next
https://news.ycombinator.com/item?id=47394022#47396308
 
[4 more]
javascript:void(0)
This was on the front page and then got completely buried for some reason. Super weird.
 
 

https://news.ycombinator.com/vote?id=47394937&how=up&goto=item%3Fid%3D47394022
mjmas
https://news.ycombinator.com/user?id=mjmas
 
3 months ago
https://news.ycombinator.com/item?id=47394937
 | 
parent
https://news.ycombinator.com/item?id=47394022#47394702
 | 
next
https://news.ycombinator.com/item?id=47394022#47396917
 
[–]
javascript:void(0)
On the front page at the moment. Position 12
 
 

https://news.ycombinator.com/vote?id=47395078&how=up&goto=item%3Fid%3D47394022
indigodaddy
https://news.ycombinator.com/user?id=indigodaddy
 
3 months ago
https://news.ycombinator.com/item?id=47395078
 | 
root
https://news.ycombinator.com/item?id=47394022#47394702
 | 
parent
https://news.ycombinator.com/item?id=47394022#47394937
 | 
next
https://news.ycombinator.com/item?id=47394022#47396917
 
[–]
javascript:void(0)
Maybe I missed it. Sometimes when you're scanning for something your brain intentionally doesn't want to see it, I've noticed. Anyway I'm not Stavros obviously, just thought this was a good article.
 
 

https://news.ycombinator.com/vote?id=47396917&how=up&goto=item%3Fid%3D47394022
wiseowise
https://news.ycombinator.com/user?id=wiseowise
 
3 months ago
https://news.ycombinator.com/item?id=47396917
 | 
parent
https://news.ycombinator.com/item?id=47394022#47394702
 | 
prev
https://news.ycombinator.com/item?id=47394022#47394937
 | 
next
https://news.ycombinator.com/item?id=47394022#47396308
 
[–]
javascript:void(0)
Anti-AI conspiracy, obviously.
 
 

https://news.ycombinator.com/vote?id=47395805&how=up&goto=item%3Fid%3D47394022
ForgotMyUUID
https://news.ycombinator.com/user?id=ForgotMyUUID
 
3 months ago
https://news.ycombinator.com/item?id=47395805
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395765
 | 
next
https://news.ycombinator.com/item?id=47394022#47408376
 
[–]
javascript:void(0)
TL DR; Don't, please :)
 
 

https://news.ycombinator.com/vote?id=47408376&how=up&goto=item%3Fid%3D47394022
clawbridge
https://news.ycombinator.com/user?id=clawbridge
 
3 months ago
https://news.ycombinator.com/item?id=47408376
 | 
prev
https://news.ycombinator.com/item?id=47394022#47395805
 
[–]
javascript:void(0)
Pine town is an interesting idea
 
Guidelines
https://news.ycombinator.com/newsguidelines.html
 | 
FAQ
https://news.ycombinator.com/newsfaq.html
 | 
Lists
https://news.ycombinator.com/lists
 | 
API
https://github.com/HackerNews/API
 | 
Security
https://news.ycombinator.com/security.html
 | 
Legal
https://www.ycombinator.com/legal/
 | 
Apply to YC
https://www.ycombinator.com/apply/
 | 
Contact
mailto:hn@ycombinator.com
Search: