# Ollama Command Guide: Basic and Intermediate Operations

## Introduction
Ollama is a powerful framework for running and managing large language models (LLMs) locally on your machine. This guide provides comprehensive information on basic and intermediate Ollama commands, explaining how to download, run, customize, and manage models efficiently.

## Installation and Setup

### Installation
```bash
# macOS or Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows
# Download the installer from https://ollama.com/download
```

### Starting Ollama Service
```bash
# Start the Ollama service
ollama serve
```

## Basic Commands

### Listing Available Models
```bash
# List all installed models
ollama list
```

### Pulling (Downloading) Models
```bash
# Pull a specific model
ollama pull llama3

# Pull a specific version of a model
ollama pull llama2:13b

# Pull a quantized model
ollama pull llama2:8b-q4_0
```

### Running Models (Chat)
```bash
# Start an interactive chat session with a model
ollama run llama3

# Run a specific version
ollama run mistral:7b

# Exit a chat session
# Type "/bye" or press Ctrl+D
```

### One-Shot Generation (Non-interactive)
```bash
# Generate a response without entering chat mode
ollama run llama3 "Write a short poem about coding"

# Save output to a file
ollama run llama3 "Write a poem about AI" > poem.txt
```

### Getting Model Information
```bash
# Show model details
ollama show llama3

# Show model parameters
ollama show llama3 --modelfile
```

### Removing Models
```bash
# Remove a model from your system
ollama rm llama2

# Remove a specific version
ollama rm llama2:13b
```

## Intermediate Commands

### Creating Custom Models with Modelfiles

A Modelfile allows you to customize an existing model. Create a file named `Modelfile` with the following structure:

```
FROM llama2
PARAMETER temperature 0.7
PARAMETER top_p 0.9
SYSTEM You are a helpful coding assistant that specializes in Python.
```

Then build the model:
```bash
# Build a custom model from a Modelfile
ollama create my-coding-assistant -f Modelfile
```

### Running with Parameter Adjustments
```bash
# Run with custom temperature (higher values = more creative)
ollama run llama3 --temperature 0.8

# Run with adjusted top_p (nucleus sampling)
ollama run llama3 --top_p 0.95

# Set maximum tokens in the response
ollama run llama3 --num_predict 300
```

### Multiturn Conversations (Programmatic)
```bash
# For scripts where you need to keep conversation context
ollama run llama3 "What is the capital of France?" --format json

# Continue the conversation
ollama run llama3 "What is its population?" --format json
```

### Running Models with Context/Prompt Templates
```bash
# Execute with a specific system prompt
ollama run llama3 "Write code to sort a list" \
  --system "You are a senior software engineer who explains code step by step."

# Provide examples (few-shot prompting)
ollama run llama3 "Explain what this function does" \
  --context "def calculate_average(numbers): return sum(numbers)/len(numbers)"
```

### Working with JSON Responses
```bash
# Get structured output in JSON format
ollama run llama3 "List 5 fruits and their benefits" --format json
```

### Using Embeddings
```bash
# Generate embeddings for text
ollama embeddings -m llama3 "This is a sample text to embed"
```

## Model Configuration

### Modelfile Directives
Modelfiles let you customize base models. Here are the key directives:

```
# Base model to customize
FROM llama2:13b

# Name your custom model
NAME "programming-assistant"

# Set default parameters
PARAMETER temperature 0.7
PARAMETER top_k 40
PARAMETER top_p 0.9
PARAMETER num_ctx 4096
PARAMETER repeat_penalty 1.1

# Define system message
SYSTEM """You are a helpful programming assistant that specializes in:
- Python
- JavaScript
- SQL
Always show examples in your answers.
"""

# Include files for context
TEMPLATE """{{.System}}
User: {{.Prompt}}
Assistant:"""

# Add reference materials for the model
FILE ./documentation.pdf
FILE ./code_samples.txt
```

### Building Custom Models
```bash
# Create a custom model from a Modelfile
ollama create my-custom-model -f /path/to/Modelfile

# Create with inline parameters (simple customization)
ollama create math-tutor -m llama3 \
  --system "You are a math tutor who explains concepts clearly and provides step-by-step solutions."
```

### Advanced Parameter Tuning

Here are the key parameters you can adjust:

| Parameter | Description | Typical Range |
|-----------|-------------|---------------|
| temperature | Controls randomness | 0.0 - 1.0 |
| top_p | Nucleus sampling threshold | 0.0 - 1.0 |
| top_k | Limits vocabulary to top K tokens | 1 - 100 |
| num_ctx | Context window size | 512 - 8192 |
| num_predict | Max tokens to generate | 1 - ∞ |
| repeat_penalty | Penalizes repetition | 1.0 - 2.0 |
| presence_penalty | Penalizes repeated topics | 0.0 - 2.0 |
| frequency_penalty | Penalizes token frequency | 0.0 - 2.0 |
| mirostat | Adaptive sampling algorithm | 0, 1, 2 |
| mirostat_tau | Controls perplexity when mirostat=1,2 | 0.0 - 10.0 |
| mirostat_eta | Learning rate when mirostat=1,2 | 0.0 - 1.0 |

```bash
# Run with multiple parameters
ollama run llama3 \
  --temperature 0.8 \
  --top_p 0.9 \
  --top_k 40 \
  --num_ctx 4096 \
  --repeat_penalty 1.1
```

## API Usage

Ollama provides a REST API for programmatic access:

```bash
# Generate a completion
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Write a function to calculate fibonacci numbers in Python",
  "stream": false
}'

# Chat with history
curl http://localhost:11434/api/chat -d '{
  "model": "llama3",
  "messages": [
    { "role": "user", "content": "Hello, who are you?" }
  ]
}'
```

## Troubleshooting

### Common Issues and Solutions

```bash
# Check Ollama version
ollama --version

# Verify Ollama service is running
curl http://localhost:11434/api/version

# Get model details to check configuration
ollama show model_name

# Remove and re-pull a problematic model
ollama rm model_name
ollama pull model_name
```

### GPU Utilization
```bash
# Check GPU memory usage (Linux)
nvidia-smi

# View logs for GPU-related issues
ollama serve -v
```

## Examples of Custom Model Creation

### Code Assistant Example
```
FROM llama3
NAME "code-assistant"
PARAMETER temperature 0.3
PARAMETER top_p 0.8
SYSTEM """You are an expert programming assistant who helps with:
1. Writing clean, efficient code
2. Debugging problems
3. Explaining programming concepts
Always include comments in your code."""
```

### Creative Writing Assistant
```
FROM mistral:7b
NAME "creative-writer"
PARAMETER temperature 0.9
PARAMETER top_p 0.95
PARAMETER top_k 60
SYSTEM """You are a creative writing assistant who specializes in storytelling.
You excel at creating vivid characters, engaging plots, and descriptive scenes.
When asked to write stories, include elements of:
- Sensory details
- Character development
- Engaging dialogue
- Clear narrative structure"""
```

## Advanced Techniques

### Quantization Options
When pulling models, you can choose different quantization levels:
- `q4_0`: 4-bit quantization (fastest, smaller size)
- `q5_0`: 5-bit quantization (balance of speed/quality)
- `q8_0`: 8-bit quantization (higher quality, larger size)
- `f16`: 16-bit float precision (highest quality, largest size)

```bash
# Pull with specific quantization
ollama pull llama3:q4_0
```

### Multi-modal Models
For models that support images:

```bash
# Run with an image (local file)
ollama run llava "What's in this image?" --image path/to/image.jpg

# Run with multiple images
ollama run bakllava "Compare these images" --image img1.jpg --image img2.jpg
```

### Using Function Calling Models
Some models support function calling capabilities:

```bash
# Call with functions enabled
ollama run deepseek-coder:function "Get the weather in New York" \
  --functions '[{"name":"get_weather","description":"Get the current weather in a location","parameters":{"type":"object","properties":{"location":{"type":"string"}},"required":["location"]}}]'
```

## Best Practices

1. **Model Selection**:
   - Smaller models (7B) are faster but less capable
   - Larger models (70B) are more capable but require more resources
   - Consider quantized versions for resource-constrained environments

2. **Parameter Tuning**:
   - Lower temperature (0.1-0.4) for factual, deterministic responses
   - Higher temperature (0.7-0.9) for creative tasks
   - Adjust context window based on input length requirements

3. **Prompt Engineering**:
   - Be specific in your instructions
   - Use system prompts to set consistent behavior
   - Include examples for complex tasks (few-shot prompting)

4. **Resource Management**:
   - Only keep models you actively use installed
   - Consider RAM and disk space requirements
   - Use quantized models when possible

## Resources

- Official Documentation: [https://github.com/ollama/ollama/tree/main/docs](https://github.com/ollama/ollama/tree/main/docs)
- Model Library: [https://ollama.com/library](https://ollama.com/library)
- Community Examples: [https://github.com/ollama/ollama/tree/main/examples](https://github.com/ollama/ollama/tree/main/examples)