# create_supervisor | langgraph_supervisor - LangChain Reference

Source URL: https://reference.langchain.com/python/langgraph-supervisor/supervisor/create_supervisor

create_supervisor | langgraph_supervisor | LangChain Reference
LangChain Reference home pageLangChain ReferenceLangChain Reference
https://reference.langchain.com/
Search...
Python 
langgraph-supervisor
https://reference.langchain.com/python/langgraph-supervisor
 
supervisor
https://reference.langchain.com/python/langgraph-supervisor/supervisor
 create_supervisor
Function v0.0.31 (latest)
● Since v0.0
create_supervisor
Create a multi-agent supervisor.
Copy
create_supervisor(
  agents: list[Pregel],
  *,
  model: LanguageModelLike,
  tools: list[BaseTool | Callable] | ToolNode | None = None,
  prompt: Prompt | None = None,
  response_format: Optional[Union[StructuredResponseSchema, tuple[str, StructuredResponseSchema]]] = None,
  pre_model_hook: Optional[RunnableLike] = None,
  post_model_hook: Optional[RunnableLike] = None,
  parallel_tool_calls: bool = False,
  state_schema: StateSchemaType | None = None,
  context_schema: Type[Any] | None = None,
  output_mode: OutputMode = 'last_message',
  add_handoff_messages: bool = True,
  handoff_tool_prefix: Optional[str] = None,
  add_handoff_back_messages: Optional[bool] = None,
  supervisor_name: str = 'supervisor',
  include_agent_name: AgentNameMode | None = None,
  **deprecated_kwargs: Unpack[DeprecatedKwargs] = {}
) -> StateGraph


Example:
from langchain_openai import ChatOpenAI

from langgraph_supervisor import create_supervisor
from langgraph.prebuilt import create_react_agent

# Create specialized agents

def add(a: float, b: float) -> float:
    '''Add two numbers.'''
    return a + b

def web_search(query: str) -> str:
    '''Search the web for information.'''
    return 'Here are the headcounts for each of the FAANG companies in 2024...'

math_agent = create_react_agent(
    model="openai:gpt-4o",
    tools=[add],
    name="math_expert",
)

research_agent = create_react_agent(
    model="openai:gpt-4o",
    tools=[web_search],
    name="research_expert",
)

# Create supervisor workflow
workflow = create_supervisor(
    [research_agent, math_agent],
    model=ChatOpenAI(model="gpt-4o"),
)

# Compile and run
app = workflow.compile()
result = app.invoke({
    "messages": [
        {
            "role": "user",
            "content": "what's the combined headcount of the FAANG companies in 2024?"
        }
    ]
})


Copy
Used in Docs
Migrate from langgraph-supervisor
https://docs.langchain.com/oss/python/migrate/langgraph-supervisor
Parameters
Name
Type
Description 
agents
 * 
[list](https://docs.python.org/3/library/stdtypes.html#list)[ [Pregel](https://reference.langchain.com/python/langgraph/pregel/main/Pregel)]
List of agents to manage. An agent can be a LangGraph 
CompiledStateGraph
https://reference.langchain.com/python/langgraph/graphs/#langgraph.graph.state.CompiledStateGraph
 , a functional API workflow, or any other 
Pregel
https://reference.langchain.com/python/langgraph/pregel/#langgraph.pregel.Pregel
 object. 
model
 * 
[LanguageModelLike](https://reference.langchain.com/python/langchain-core/language_models/base/LanguageModelLike)
Language model to use for the supervisor 
tools
 
[list](https://docs.python.org/3/library/stdtypes.html#list)[ [BaseTool](https://reference.langchain.com/python/langchain-core/tools/base/BaseTool) | [Callable](https://docs.python.org/3/library/typing.html#typing.Callable)] | [ToolNode](https://reference.langchain.com/python/langgraph.prebuilt/tool_node/ToolNode) | None
Default: 
None
Tools to use for the supervisor 
prompt
 
[Prompt](https://reference.langchain.com/python/langchain-classic/prompts/prompt/Prompt) | None
Default: 
None
Optional prompt to use for the supervisor. Can be one of:
str
 : This is converted to a 
SystemMessage
 and added to the beginning of the list of messages in 
state["messages"]
 .
SystemMessage
 : this is added to the beginning of the list of messages in 
state["messages"]
 .
Callable
 : This function should take in full graph state and the output is then passed to the language model.
Runnable
 : This runnable should take in full graph state and the output is then passed to the language model. 
response_format
 
[Optional](https://docs.python.org/3/library/typing.html#typing.Optional)[ [Union](https://docs.python.org/3/library/typing.html#typing.Union)[ [StructuredResponseSchema](https://reference.langchain.com/python/langgraph.prebuilt/chat_agent_executor/StructuredResponseSchema), [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[ [str](https://docs.python.org/3/library/stdtypes.html#str), [StructuredResponseSchema](https://reference.langchain.com/python/langgraph.prebuilt/chat_agent_executor/StructuredResponseSchema)]]]
Default: 
None
An optional schema for the final supervisor output.
If provided, output will be formatted to match the given schema and returned in the 
'structured_response'
 state key.
If not provided, 
structured_response
 will not be present in the output state.
Can be passed in as:
- An OpenAI function/tool schema,
- A JSON Schema,
- A TypedDict class,
- A Pydantic class.
- A tuple `(prompt, schema)`, where schema is one of the above.
    The prompt will be used together with the model that is being used to generate the structured response.


Copy
Important 
response_format
 requires the model to support 
.with_structured_output
Note 
response_format
 requires 
structured_response
 key in your state schema. You can use the prebuilt 
langgraph.prebuilt.chat_agent_executor.AgentStateWithStructuredResponse
 . 
pre_model_hook
 
[Optional](https://docs.python.org/3/library/typing.html#typing.Optional)[ [RunnableLike](https://reference.langchain.com/python/langgraph/_internal/_runnable/RunnableLike)]
Default: 
None
An optional node to add before the LLM node in the supervisor agent (i.e., the node that calls the LLM). Useful for managing long message histories (e.g., message trimming, summarization, etc.). Pre-model hook must be a callable or a runnable that takes in current graph state and returns a state update in the form of
# At least one of `messages` or `llm_input_messages` MUST be provided
{
    # If provided, will UPDATE the `messages` in the state
    "messages": [RemoveMessage(id=REMOVE_ALL_MESSAGES), ...],
    # If provided, will be used as the input to the LLM,
    # and will NOT UPDATE `messages` in the state
    "llm_input_messages": [...],
    # Any other state keys that need to be propagated
    ...
}


Copy
Important
At least one of 
messages
 or 
llm_input_messages
 MUST be provided and will be used as an input to the 
agent
 node. The rest of the keys will be added to the graph state.
Warning
If you are returning 
messages
 in the pre-model hook, you should OVERWRITE the 
messages
 key by doing the following:
{
    "messages": [RemoveMessage(id=REMOVE_ALL_MESSAGES), *new_messages]
    ...
}


Copy 
post_model_hook
 
[Optional](https://docs.python.org/3/library/typing.html#typing.Optional)[ [RunnableLike](https://reference.langchain.com/python/langgraph/_internal/_runnable/RunnableLike)]
Default: 
None
An optional node to add after the LLM node in the supervisor agent (i.e., the node that calls the LLM). Useful for implementing human-in-the-loop, guardrails, validation, or other post-processing. Post-model hook must be a callable or a runnable that takes in current graph state and returns a state update. 
parallel_tool_calls
 
[bool](https://docs.python.org/3/library/functions.html#bool)
Default: 
False
Whether to allow the supervisor LLM to call tools in parallel (only OpenAI and Anthropic). Use this to control whether the supervisor can hand off to multiple agents at once.
If 
True
 , will enable parallel tool calls.
If 
False
 , will disable parallel tool calls.
Important
This is currently supported only by OpenAI and Anthropic models. To control parallel tool calling for other providers, add explicit instructions for tool use to the system prompt. 
state_schema
 
[StateSchemaType](https://reference.langchain.com/python/langgraph.prebuilt/chat_agent_executor/StateSchemaType) | None
Default: 
None
State schema to use for the supervisor graph. 
context_schema
 
[Type](https://docs.python.org/3/library/typing.html#typing.Type)[ [Any](https://docs.python.org/3/library/typing.html#typing.Any)] | None
Default: 
None
Specifies the schema for the context object that will be passed to the workflow. 
output_mode
 
[OutputMode](https://reference.langchain.com/python/langgraph-supervisor/supervisor/OutputMode)
Default: 
'last_message'
Mode for adding managed agents' outputs to the message history in the multi-agent workflow. Can be one of:
full_history
 : Add the entire agent message history
last_message
 : Add only the last message 
add_handoff_messages
 
[bool](https://docs.python.org/3/library/functions.html#bool)
Default: 
True
Whether to add a pair of 
(AIMessage, ToolMessage)
 to the message history when a handoff occurs. 
handoff_tool_prefix
 
[Optional](https://docs.python.org/3/library/typing.html#typing.Optional)[ [str](https://docs.python.org/3/library/stdtypes.html#str)]
Default: 
None
Optional prefix for the handoff tools (e.g., 
'delegate_to_'
 or 
'transfer_to_'
 )
If provided, the handoff tools will be named 
handoff_tool_prefix_agent_name
 .
If not provided, the handoff tools will be named 
transfer_to_agent_name
 . 
add_handoff_back_messages
 
[Optional](https://docs.python.org/3/library/typing.html#typing.Optional)[ [bool](https://docs.python.org/3/library/functions.html#bool)]
Default: 
None
Whether to add a pair of 
(AIMessage, ToolMessage)
 to the message history when returning control to the supervisor to indicate that a handoff has occurred. 
supervisor_name
 
[str](https://docs.python.org/3/library/stdtypes.html#str)
Default: 
'supervisor'
Name of the supervisor node. 
include_agent_name
 
[AgentNameMode](https://reference.langchain.com/python/langgraph-supervisor/agent_name/AgentNameMode) | None
Default: 
None
Use to specify how to expose the agent name to the underlying supervisor LLM.
None
 : Relies on the LLM provider using the name attribute on the AI message. Currently, only OpenAI supports this.
'inline'
 : Add the agent name directly into the content field of the AI message using XML-style tags. Example: 
"How can I help you"
 -> 
"<name>agent_name</name><content>How can I help you?</content>"
View source on GitHub
https://github.com/langchain-ai/langgraph-supervisor-py/blob/69c808c071e0a420255155c0ef383962b4872003/langgraph_supervisor/supervisor.py#L211
Version History
⌘I
LangChain Assistant
New History
Ask a question to get started 
Enter
 to send
• 
Shift+Enter
 new line
Menu
Navigation
Projects
LangGraph
LangGraph Checkpoint
https://reference.langchain.com/python/langgraph.checkpoint
LangGraph Store
https://reference.langchain.com/python/langgraph.store
Checkpoint Postgres
https://reference.langchain.com/python/langgraph.checkpoint.postgres
Store Postgres
https://reference.langchain.com/python/langgraph.store.postgres
Checkpoint SQLite
https://reference.langchain.com/python/langgraph.checkpoint.sqlite
LangGraph Prebuilt
https://reference.langchain.com/python/langgraph.prebuilt
LangGraph CLI
https://reference.langchain.com/python/langgraph-cli
LangGraph SDK
https://reference.langchain.com/python/langgraph-sdk
LangGraph Supervisor
https://reference.langchain.com/python/langgraph-supervisor
LangGraph Swarm
https://reference.langchain.com/python/langgraph-swarm
Language
Python JavaScript
Theme Light Dark
On This Page
Copy page
On This Page
Related Documentation ◇ Parameters