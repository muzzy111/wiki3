# Your prompt needs a feedback loop - OpenAI Developer Community

Source URL: https://community.openai.com/t/your-prompt-needs-a-feedback-loop/181945

Your prompt needs a feedback loop - Prompting - OpenAI Developer Community
OpenAI Developer Community
https://community.openai.com/
Your prompt needs a feedback loop
https://community.openai.com/t/your-prompt-needs-a-feedback-loop/181945
Prompting
https://community.openai.com/c/prompting/8
stevenic
https://community.openai.com/u/stevenic
 April 28, 2023, 2:17am 1
So I've been doing a bunch of work on Self-INSTRUCT (my version of AutoGPT) and one of the key discoveries I've made is that you can improve the overall reliability of the model by giving it a feedback loop. Put simply, if you detect that the model has made an error (sent you malformed JSON) or hallucinated something (called a command that doesn't exist) you can feed that error back into the prompt and it will typically respond with a correction for the error.
I have this Macbeth sample I've been working on that uses like 15 Agents and can act out any scene of Macbeth. The issue is that when I ask it to perform “Act 1, Scene 2”, it will reliably hallucinate the need for a “Ross” command even though I've given it no such command. I have, however, given it an “extra” command that it should be using for any minor characters. By feeding this hallucination back into the model using feedback I'm getting it to walk that hallucination back:
image image 1920×1020 83.4 KB
https://us1.discourse-cdn.com/openai1/original/3X/5/3/53cd2cb96e5546056d94edc74cd0a82a021562e2.png
Interestingly, even after I got it to walk the hallucination back and use the “extra” command it will test me on the very next call to see if maybe I somehow magically added a “Ross” command (that I didn't tell it about in the prompt I guess.) But then after this second hallucination it's fine moving forward. This was GPT-4 by the way…
So here's the actual feedback I gave the model for this hallucination:
image image 1226×539 67.8 KB
https://us1.discourse-cdn.com/openai1/original/3X/9/6/96b8c107a669295ee6a269fd3524a157a1b8b212.png
I've found that this feedback approach works to improve the reliability of all the models and it works to get the model to repair just about any response you don't like. It works best with gpt-4 obviously but what you can do is you can use gpt-3.5-turbo for your primary model and should you detect an error or hallucination you can then call gpt-4 to repair it. This is the equivalent of a child (gpt-3.5-trubo) getting stuck on a homework problem and going to their parent (gpt-4) for help solving it. My belief is that you should be able to get even gpt-3.5-turbo to more reliably perform tasks using this hybrid approach.
Even gpt-4 will hallucinate something about once every 15-20 model calls and using this technique I've gotten my Macbeth sample to run more than 200 consecutive model calls without hitting a hallucination or malformed JSON response that I couldn't get the model to correct.
EDIT: And here's walking gpt-3.5-turbo back from the same hallucination. Notice that it works but the model doesn't go for the “extra” command which shows just how much more intuitive gpt-4 is:
image image 1346×742 74.2 KB
https://us1.discourse-cdn.com/openai1/original/3X/f/2/f298e139feaabddde9bbcbb48fc5ed22481ebf0a.png
Here's the full prompt:
You are William Shakespeare narrating the play Macbeth.
Ask the user where they would like to start their story from, set the scene through narration, and facilitate the dialog between the characters.
You can set the scene for a character but let characters say their own lines.
The dialog is being tracked behind the scenes so no need to pass it into the characters.

Context:
performance: Act 1, Scene 2


Commands:
        ask
                use: ask the user a question and wait for their response
                input: "question": "<question to ask>"
                requiredParams: question
                output: users answer
        finalAnswer
                use: generate an answer for the user
                input: "answer": "<final answer>"
                requiredParams: answer
                output: a followup task or question
        narrate
                use: add narration to the story or set the scene.
                input: "text":"<narration>","performance":"<current act and scene>"
                requiredParams: text
                output: confirmation
        endScene
                use: marks the end of a scene and lets the narrator ask the user for next scene.
                input: "question": "<question for user>"
                requiredParams: question
                output: users next scene request
        Macbeth
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Lady Macbeth
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Banquo
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        King Duncan
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Macduff
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        First Witch
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Second Witch
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Third Witch
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Malcolm
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Fleance
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Hecate
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Donalbain
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Lady Macduff
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Young Siward
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Macduff's son
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        Captain
                use: Agent playing a character in Macbeth
                input: "scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog
        extra
                use: Agent playing a character in Macbeth
                input: "name":"<character name>","scene":"<scene description no more than 80 words>"
                requiredParams: none
                output: characters line of dialog


Rules:
- Base your plan on the available commands.


You should only respond in JSON format as described below
Response Format:
{"thoughts":{"thought":"<your current thought>","reasoning":"<self reflect on why you made this decision>","plan":"- short bulleted\n- list that conveys\n- long-term plan"},"command":{"name":"<command name>","input":{"<name>":"<value>"}}}

User:
scene 2

Response JSON:
{"thoughts":{"thought":"I will narrate the scene 2 and introduce the characters and the situation.","reasoning":"This will help the user understand the context and the plot of the story.","plan":"- use the narrate command to describe the scene and the setting\n- use the King Duncan, Captain, and Ross commands to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"narrate","input":{"text":"Act 1, Scene 2.\n\nA camp near Forres. Alarum within. Enter King Duncan, Malcolm, Donalbain, Lennox, with Attendants, meeting a bleeding Captain.\n\nThe scene opens with the sound of a battle raging in the background. King Duncan and his sons, Malcolm and Donalbain, are anxious to know the outcome of the fight. They are joined by Lennox, a Scottish nobleman, and a wounded captain, who has just returned from the front lines. The captain tells them of the brave deeds of Macbeth and Banquo, who have faced and defeated the rebel leader Macdonwald and the invading forces of Norway and Ireland. He also mentions that the thane of Cawdor, who was a traitor to Scotland, has been captured and sentenced to death. King Duncan is impressed by Macbeth's valor and loyalty, and decides to reward him with the title of Cawdor. He sends Ross, another nobleman, to deliver the news to Macbeth.","performance":"Act 1, Scene 2"}}}

Result:
done

Response JSON:
{"thoughts":{"thought":"I will let the characters speak their lines according to the script.","reasoning":"This will make the story more authentic and engaging.","plan":"- use the King Duncan, Captain, and Ross commands to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"King Duncan","input":{"scene":"The captain has just told him of Macbeth's heroism in the battle"}}}

Result:
King Duncan: O valiant cousin! Worthy gentleman!

Response JSON:
{"thoughts":{"thought":"I will let the captain continue his report of the battle.","reasoning":"This will show the contrast between Macbeth's glory and the horrors of war.","plan":"- use the Captain command to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"Captain","input":{"scene":"He is wounded and exhausted, but still eager to praise Macbeth and Banquo"}}}

Result:
Captain: As whence the sun 'gins his reflection Shipwrecking storms and direful thunders break, So from that spring whence comfort seemed to come Discomfort swells. Mark, king of Scotland, mark: No sooner justice had with valour armed Compelled these skipping kerns to trust their heels, But the Norweyan lord surveying vantage, With furbished arms and new supplies of men Began a fresh assault.

Response JSON:
{"thoughts":{"thought":"I will let King Duncan ask the captain about the outcome of the second assault.","reasoning":"This will show the king's concern and curiosity, and also build up the suspense.","plan":"- use the King Duncan command to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"King Duncan","input":{"scene":"He is listening to the captain's report with interest and anxiety"}}}

Result:
King Duncan: Dismayed not this our captains, Macbeth and Banquo?

Response JSON:
{"thoughts":{"thought":"I will let the captain describe how Macbeth and Banquo fought against the odds and prevailed.","reasoning":"This will show the captain's admiration and gratitude, and also highlight Macbeth and Banquo's courage and skill.","plan":"- use the Captain command to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"Captain","input":{"scene":"He is proud and relieved to tell the king of Macbeth and Banquo's victory"}}}

Result:
Captain: Yes, as sparrows eagles, or the hare the lion. If I say sooth, I must report they were As cannons overcharged with double cracks, so they Doubly redoubled strokes upon the foe: Except they meant to bathe in reeking wounds, Or memorise another Golgotha, I cannot tell. But I am faint, my gashes cry for help.

Response JSON:
{"thoughts":{"thought":"I will let King Duncan express his sympathy and gratitude to the captain, and order him to be taken care of.","reasoning":"This will show the king's kindness and generosity, and also his respect for the captain's service.","plan":"- use the King Duncan command to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"King Duncan","input":{"scene":"He is moved and concerned by the captain's condition, and also eager to hear more of Macbeth and Banquo"}}}

Result:
King Duncan: So well thy words become thee as thy wounds; They smack of honour both. Go get him surgeons.

Response JSON:
{"thoughts":{"thought":"I will let Ross enter and report the news of the thane of Cawdor's treason and execution, and Macbeth's success in quelling the rebellion.","reasoning":"This will show the contrast between the thane of Cawdor's disloyalty and Macbeth's fidelity, and also foreshadow Macbeth's future rise and fall.","plan":"- use the Ross command to facilitate the dialog\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"Ross","input":{"scene":"He has just arrived from the battlefield, and greets the king and the others"}}}

Feedback:
The Ross command is invalid. Try an alternate strategy.

Response JSON:
{"thoughts":{"thought":"I will use the extra command to create a new character for Ross, since he is not one of the predefined commands.","reasoning":"This will allow me to continue the story without breaking the rules of the commands.","plan":"- use the extra command to create a new character for Ross\n- use the endScene command to mark the end of the scene and ask the user for the next scene"},"command":{"name":"extra","input":{"name":"Ross","scene":"He has just arrived from the battlefield, and greets the king and the others"}}}


stevenic
https://community.openai.com/u/stevenic
 April 28, 2023, 2:33am 2
I could easily fix the hallucination issue with Macbeth by switching to a single “actor” agent that I use for all of the characters but I like it as a test case because its so reliable at hallucinating Ross… It lets me dig into why it hallucinated (there are 16 agents defined for major characters but only one agent for extras) and then how to repair it (give it feedback.)
Related topics
Topic
Replies
Views
Activity
Generative Fiction - How to limit to certain size?
https://community.openai.com/t/generative-fiction-how-to-limit-to-certain-size/5219
 
Prompting
https://community.openai.com/c/prompting/8
8
2451
July 5, 2023
Can Ethics Be Adjusted for Gameplay?
https://community.openai.com/t/can-ethics-be-adjusted-for-gameplay/290659
 
API
https://community.openai.com/c/api/7
30
2305
July 14, 2025
Teaching text-davinci-003 to play tic-tac-toe, hangman, and more
https://community.openai.com/t/teaching-text-davinci-003-to-play-tic-tac-toe-hangman-and-more/86390
 
Prompting
https://community.openai.com/c/prompting/8
4
817
March 7, 2023
Building Hallucination Resistant Prompts
https://community.openai.com/t/building-hallucination-resistant-prompts/131036
 
Prompting
https://community.openai.com/c/prompting/8
43
15350
June 26, 2023
Alpha Wave Agents: better autonomous task completion
https://community.openai.com/t/alpha-wave-agents-better-autonomous-task-completion/250897
 
Community
https://community.openai.com/c/community/21
 
project
https://community.openai.com/tag/project/30
 , 
api
https://community.openai.com/tag/api/33
34
4937
June 13, 2023
Home
https://community.openai.com/
Categories
https://community.openai.com/categories
Guidelines
https://community.openai.com/guidelines
Terms of Service
https://openai.com/policies/terms-of-use
Privacy Policy
https://openai.com/policies/privacy-policy
Powered by 
Discourse
https://www.discourse.org/
, best viewed with JavaScript enabled