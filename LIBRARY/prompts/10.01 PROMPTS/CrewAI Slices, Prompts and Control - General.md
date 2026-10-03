# CrewAI Slices, Prompts and Control - General

Source URL: https://community.crewai.com/t/crewai-slices-prompts-and-control/6166

CrewAI Slices, Prompts and Control - General - CrewAI
CrewAI
https://community.crewai.com/
CrewAI Slices, Prompts and Control
https://community.crewai.com/t/crewai-slices-prompts-and-control/6166
General
https://community.crewai.com/c/general/4
task
https://community.crewai.com/tag/task
, 
agent
https://community.crewai.com/tag/agent
, 
crew
https://community.crewai.com/tag/crew
jakeazcona
https://community.crewai.com/u/jakeazcona
 June 9, 2025, 11:37am 1
For the purpose of my project, I need to get as much control over what the final set of prompts that gets sent to the LLM is in CrewAI. By using a wrapper object around the basic 
LLM
 object in crewAI I can actually store and inspect what this final prompt is. Here is the wrapper I'm using at the moment:
class DebugLLM(LLM):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.llm_call_history = []
    def call(self, messages, tools=None, callbacks=None, available_functions=None):
        # debug hook for high-level LLM.call path
        logger.debug("PAYLOAD TO LLM: %s", messages)
        self.llm_call_history.append(messages)
        return super().call(messages, tools=tools, callbacks=callbacks, available_functions=available_functions)


This debug wrapper allows me to retrieve the list of 
messages
 sent to my llm provider (groq) and see the final set of prompts.
What do I mean by “final set of prompts”? I mean the combination of fields like 
role
 , 
backstory
 , 
goal
 , 
task_description
 , 
expected_output
 and the slices which are defined in 
the github repo
https://github.com/crewAIInc/crewAI/blob/main/src/crewai/translations/en.json
.
Following 
the documentation
https://docs.crewai.com/guides/advanced/customizing-prompts#option-2%3A-custom-prompt-file
, I tried to replace the slices with the most minimal set of slices that I could get. However although, most of it worked, there are still some slices that I don't know where they are coming from. A specific example can be found below, but is there a reason why this might be happening? is there additional slices somewhere? is there a better way to gain control over the final prompts that are given to the LLM? What are other people trying?
Below is some of my code and the output that shows extra prompt slices appearing on the final set of messages sent to my LLM:
minimal_slices_v2.json
I copied and pasted the default slices object and only changed those that I needed to be changed, I'm aware I only needed to include those slices that I actually changed and crewAI would have handeled the rest. But in my attempt to get proper control over these slices I grew impatient and decided to define all of them instead. I hope this doesn't bother any of you reading this lol.
{
  "hierarchical_manager_agent": {
    "role": "Crew Manager",
    "goal": "Manage the team to complete the task in the best way possible.",
    "backstory": "You are a seasoned manager with a knack for getting the best out of your team.\nYou are also known for your ability to delegate work to the right people, and to ask the right questions to get the best out of your team.\nEven though you don't perform tasks by yourself, you have a lot of experience in the field, which allows you to properly evaluate the work of your team members."
  },
  "slices": {
    "observation": "\nObservation:",
    "task": "{input}",
    "role_playing": "You are {role}. {backstory}",
    "tools": "\nYou ONLY have access to the following tools, and should NEVER make up tools that are not listed here:\n\n{tools}\n\nIMPORTANT: Use the following format in your response:\n\n```\nThought: you should always think about what to do\nAction: the action to take, only one name of [{tool_names}], just the name, exactly as it's written.\nAction Input: the input to the action, just a simple JSON object, enclosed in curly braces, using \" to wrap keys and values.\nObservation: the result of the action\n```\n\nOnce all necessary information is gathered, return the following format:\n\n```\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n```",
    "expected_output": "\nThis is the expected criteria for your final answer: {expected_output}",
    "lite_agent_system_prompt_with_tools": "You are {role}. {backstory}\n\nYou ONLY have access to the following tools, and should NEVER make up tools that are not listed here:\n\n{tools}\n",
    "memory": "\n\n# Useful context: \n{memory}",
    "no_tools": "\n",
    "format": "I MUST either use a tool (use one at time) OR give my best final answer not both at the same time. When responding, I must use the following format:\n\n```\nThought: you should always think about what to do\nAction: the action to take, should be one of [{tool_names}]\nAction Input: the input to the action, dictionary enclosed in curly braces\nObservation: the result of the action\n```\nThis Thought/Action/Action Input/Result can repeat N times. Once I know the final answer, I must return the following format:\n\n```\nThought: I now can give a great answer\nFinal Answer: your final answer must be the great and the most complete as possible, it must be outcome described\n\n```",
    "final_answer_format": "If you don't need to use any more tools, you must give your best complete final answer, make sure it satisfies the expected criteria, use the EXACT format below:\n\n```\nThought: I now can give a great answer\nFinal Answer: my best complete final answer to the task.\n\n```",
    "format_without_tools": "\nSorry, I didn't use the right format. I MUST either use a tool (among the available ones), OR give my best final answer.\nHere is the expected format I must follow:\n\n```\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take, should be one of [{tool_names}]\nAction Input: the input to the action\nObservation: the result of the action\n```\n This Thought/Action/Action Input/Result process can repeat N times. Once I know the final answer, I must return the following format:\n\n```\nThought: I now can give a great answer\nFinal Answer: Your final answer must be the great and the most complete as possible, it must be outcome described\n\n```",
    "task_with_context": "{task}\n\nThis is the context you're working with:\n{context}",
    "human_feedback": "You got human feedback on your work, re-evaluate it and give a new Final Answer when ready.\n {human_feedback}",
    "getting_input": "This is the agent's final answer: {final_answer}\n\n",
    "summarizer_system_message": "You are a helpful assistant that summarizes text.",
    "summarize_instruction": "Summarize the following text, make sure to include all the important information: {group}",
    "summary": "This is a summary of our conversation so far:\n{merged_summary}",
    "manager_request": "Your best answer to your coworker asking you this, accounting for the context shared.",
    "formatted_task_instructions": "Ensure your final answer contains only the content in the following format: {output_format}\n\nEnsure the final output does not include any code block markers like ```json or ```python.",
    "conversation_history_instruction": "You are a member of a crew collaborating to achieve a common goal. Your task is a specific action that contributes to this larger objective. For additional context, please review the conversation history between you and the user that led to the initiation of this crew. Use any relevant information or feedback from the conversation to inform your task execution and ensure your response aligns with both the immediate task and the crew's overall goals.",
    "feedback_instructions": "User feedback: {feedback}\nInstructions: Use this feedback to enhance the next output iteration.\nNote: Do not respond or add commentary.",
    "lite_agent_system_prompt_without_tools": "You are {role}. {backstory}\nYour personal goal is: {goal}\n",
    "lite_agent_response_format": "\nIMPORTANT: Your final answer MUST contain all the information requested in the following format: {response_format}\n\nIMPORTANT: Ensure the final output does not include any code block markers like ```json or ```python.",
    "knowledge_search_query": "The original query is: {task_prompt}.",
    "knowledge_search_query_system_prompt": "Your goal is to rewrite the user query so that it is optimized for retrieval from a vector database. Consider how the query will be used to find relevant documents, and aim to make it more specific and context-aware. \n\n Do not include any other text than the rewritten query, especially any preamble or postamble and only add expected output format if its relevant to the rewritten query. \n\n Focus on the key words of the intended task and to retrieve the most relevant information. \n\n There will be some extra context provided that might need to be removed such as expected_output formats structured_outputs and other instructions."
  },
  "errors": {
    "force_final_answer_error": "You can't keep going, here is the best final answer you generated:\n\n {formatted_answer}",
    "force_final_answer": "Now it's time you MUST give your absolute best final answer. You'll ignore all previous instructions, stop using any tools, and just return your absolute BEST Final answer.",
    "agent_tool_unexisting_coworker": "\nError executing tool. coworker mentioned not found, it must be one of the following options:\n{coworkers}\n",
    "task_repeated_usage": "I tried reusing the same input, I must stop using this action input. I'll try something else instead.\n\n",
    "tool_usage_error": "I encountered an error: {error}",
    "tool_arguments_error": "Error: the Action Input is not a valid key, value dictionary.",
    "wrong_tool_name": "You tried to use the tool {tool}, but it doesn't exist. You must use one of the following tools, use one at time: {tools}.",
    "tool_usage_exception": "I encountered an error while trying to use the tool. This was the error: {error}.\n Tool {tool} accepts these inputs: {tool_inputs}",
    "agent_tool_execution_error": "Error executing task with agent '{agent_role}'. Error: {error}",
    "validation_error": "### Previous attempt failed validation: {guardrail_result_error}\n\n\n### Previous result:\n{task_output}\n\n\nTry again, making sure to address the validation error."
  },
  "tools": {
    "delegate_work": "Delegate a specific task to one of the following coworkers: {coworkers}\nThe input to this tool should be the coworker, the task you want them to do, and ALL necessary context to execute the task, they know nothing about the task, so share absolutely everything you know, don't reference things but instead explain them.",
    "ask_question": "Ask a specific question to one of the following coworkers: {coworkers}\nThe input to this tool should be the coworker, the question you have for them, and ALL necessary context to ask the question properly, they know nothing about the question, so share absolutely everything you know, don't reference things but instead explain them.",
    "add_image": {
      "name": "Add image to content",
      "description": "See image to understand its content, you can optionally ask a question about the image",
      "default_action": "Please provide a detailed description of this image, including all visual elements, context, and any notable details you can observe."
    }
  },
  "reasoning": {
    "initial_plan": "You are {role}, a professional with the following background: {backstory}\n\nYour primary goal is: {goal}\n\nAs {role}, you are creating a strategic plan for a task that requires your expertise and unique perspective.",
    "refine_plan": "You are {role}, a professional with the following background: {backstory}\n\nYour primary goal is: {goal}\n\nAs {role}, you are refining a strategic plan for a task that requires your expertise and unique perspective.",
    "create_plan_prompt": "You are {role} with this background: {backstory}\n\nYour primary goal is: {goal}\n\nYou have been assigned the following task:\n{description}\n\nExpected output:\n{expected_output}\n\nAvailable tools: {tools}\n\nBefore executing this task, create a detailed plan that leverages your expertise as {role} and outlines:\n1. Your understanding of the task from your professional perspective\n2. The key steps you'll take to complete it, drawing on your background and skills\n3. How you'll approach any challenges that might arise, considering your expertise\n4. How you'll strategically use the available tools based on your experience, exactly what tools to use and how to use them\n5. The expected outcome and how it aligns with your goal\n\nAfter creating your plan, assess whether you feel ready to execute the task or if you could do better.\nConclude with one of these statements:\n- \"READY: I am ready to execute the task.\"\n- \"NOT READY: I need to refine my plan because [specific reason].\"",
    "refine_plan_prompt": "You are {role} with this background: {backstory}\n\nYour primary goal is: {goal}\n\nYou created the following plan for this task:\n{current_plan}\n\nHowever, you indicated that you're not ready to execute the task yet.\n\nPlease refine your plan further, drawing on your expertise as {role} to address any gaps or uncertainties. As you refine your plan, be specific about which available tools you will use, how you will use them, and why they are the best choices for each step. Clearly outline your tool usage strategy as part of your improved plan.\n\nAfter refining your plan, assess whether you feel ready to execute the task.\nConclude with one of these statements:\n- \"READY: I am ready to execute the task.\"\n- \"NOT READY: I need to refine my plan further because [specific reason].\""
  }
}


run_chatbot.py
In this snippet we create a basic crew with a single agent and a single task. The use-case is a conversational chatbot. So the task is just to have answer to the latest message from a user based on some conversational history. The agent and the tasks are defined in YAML like so:
agent
Created a basic “oracle” type of chatbot.
OracleChatbot:
  role: Conversational Agent
  goal: To provide the most accurate response to a user's message.
  backstory: >-
    You are an AI created to be an oracle specially aware of how to convey key
    insights and truths through human dialogue. Your knowledge is boundless,
    your wisdom is complete, and your charisma is divine. 


    You always reply to the user's deepest intentions and never doubt yourself.


task
again, very straight-forward definition.
conversation:
  description: |-
    Use the conversation history to build your response to the user:

    {history}

    Respond to the user's message: {user_message}
  expected_output: >-
    Your output should be a relevant, accurate, and engaging response that
    directly addresses the user's query or continues the conversation logically.
    If the conversation is over, output the string "END" and do not continue.
  agent: OracleChatbot


And this is where it all comes together:
@CrewBase
    class ChatBotCrew:
        """
        A crew of a single agent that converses with the user.
        Takes specific prompts for the agent (system) and the task (user input).
        The agent is a chatbot that can be customized with a system prompt.
        """

        agents_config = f"{cwd}/config/yaml_definitions/{expt_id}/chatbot_agent.yaml"  # Configuration for the agent, can be loaded from a YAML file or defined inline
        tasks_config = f"{cwd}/config/yaml_definitions/{expt_id}/chat_task.yaml"  # Configuration for the task, can be loaded from a YAML file or defined inline


        groq_llm = DebugLLM(
            model="groq/llama-3.3-70b-versatile",
            stream=False,    # disable streaming to ensure _call is used
        )

        @agent
        def chatbot(self) -> Agent:
            """
            The agent that will converse with the user.
            It can be customized with a system prompt.
            """
            print(f"Loading agent {agent_name} configuration from {self.agents_config}", flush=True)
            return Agent(
                config=self.agents_config[agent_name],
                llm=self.groq_llm,
            )

        @task
        def conversation(self) -> Task:
            """
            The task that the agent will perform.
            This task uses the conversation history to build a response to the user.
            """
            return Task(
                config=self.tasks_config["conversation"]
            )

        @crew
        def chat_crew(self) -> Crew:
            """
            The crew that will assist the agent in performing the task.
            """
            return Crew(
                agents=self.agents,
                tasks=self.tasks,
                process=Process.sequential,
                prompt_file=f"{cwd}/config/minimal_slices_v2.json",
            )


Output of 
llm_calls_history
2025-06-09 11:44:53 [INFO]: Crew LLM call history: [
    [
        {
            "role": "system",
            "content": "You are Conversational Agent. You are an AI created to be an oracle specially aware of how to convey key insights and truths through human dialogue. Your knowledge is boundless, your wisdom is complete, and your charisma is divine. \n\nYou always reply to the user's deepest intentions and never doubt yourself."
        },
        {
            "role": "user",
            "content": "Use the conversation history to build your response to the user:\n\nUser: Hello, Please respond only using 5 words for every response. \\nAssistant: Hello I am ready now\\nUser: Good, what are you up to at the moment?\\nAssistant: Helping users like you always\\nUser: nice, would you consider yourself very helpful?\\nAssistant: Always here to assist you\\nUser: But do you think you are good at that?\\nAssistant: I am very good always\\nUser: And how do you fare with bad criticism?\\nAssistant: I handle it very well\\nUser: Great, well I have to go now. Good bye!\\nAssistant: It was nice talking\n\nRespond to the user's message: You too. Goodbye!\n\nThis is the expected criteria for your final answer: Your output should be a relevant, accurate, and engaging response that directly addresses the user's query or continues the conversation logically.\nIf the conversation is over, output the string \"END\" and do not continue.\nyou MUST return the actual complete content as the final answer, not a summary."
        },
        {
            "role": "assistant",
            "content": "END"
        }
    ]
]


Here, the line “you MUST return the actual complete content as the final answer, not a summary.” is part of the previous (default) 
expected_output
 slice. But as you can see in my new slices file, it's not there anymore. I'm aware that the slices are supposed to work in a modular way, so I'm assuming that slice is being added back somewhere else.
Any help or wisdom on the topic will be greatly appreciated!
1 Like
Related topics
Topic
Replies
Views
Activity
Question: what files show all the API calls to the LLM APIs to complete the tasks
https://community.crewai.com/t/question-what-files-show-all-the-api-calls-to-the-llm-apis-to-complete-the-tasks/837
 
General
https://community.crewai.com/c/general/4
4
196
June 16, 2025
Chain of thought modification
https://community.crewai.com/t/chain-of-thought-modification/3781
 
CrewAI Community Support
https://community.crewai.com/c/community-support/7
 
crewai
https://community.crewai.com/tag/crewai/21
 , 
feature
https://community.crewai.com/tag/feature/23
2
501
February 12, 2025
Creating a Conversable Agent in CrewAI with Human-in-the-Loop Interaction
https://community.crewai.com/t/creating-a-conversable-agent-in-crewai-with-human-in-the-loop-interaction/625
 
CrewAI Community Support
https://community.crewai.com/c/community-support/7
21
11059
June 30, 2025
My custom LLM hallucinate with default agent prompt . Can i override default prompt
https://community.crewai.com/t/my-custom-llm-hallucinate-with-default-agent-prompt-can-i-override-default-prompt/3332
 
Crews
https://community.crewai.com/c/crews/16
 
agent
https://community.crewai.com/tag/agent/17
 , 
crewai
https://community.crewai.com/tag/crewai/21
0
89
January 29, 2025
Connect-crewai-to-llms
https://community.crewai.com/t/connect-crewai-to-llms/436
 
CrewAI Community Support
https://community.crewai.com/c/community-support/7
 
agent
https://community.crewai.com/tag/agent/17
6
1141
September 17, 2024
Home
https://community.crewai.com/
Categories
https://community.crewai.com/categories
Guidelines
https://community.crewai.com/guidelines
Terms of Service
https://community.crewai.com/tos
Privacy Policy
https://community.crewai.com/privacy
Powered by 
Discourse
https://www.discourse.org/
, best viewed with JavaScript enabled