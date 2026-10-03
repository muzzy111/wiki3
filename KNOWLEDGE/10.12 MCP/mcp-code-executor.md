---
title: "MCP Code Executor"
type: dashboard
cssclasses: [cards]
tags:
  - mcp-server
  - corpus/github
  - status/active
created: 2026-07-05
modified: 2026-07-05
---

# MCP Code Executor

> [!info] MCP Server Profile
> **Type:** typescript
> **Framework:** @modelcontextprotocol/sdk
> **Source:** `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/mcp_code_executor`
> **Repo:** https://github.com/.../AgentCPM

## Description

MCP server that executes code in a sandboxed environment. Version 0.2.0.

## Quick reference

| Field | Value |
|-------|-------|
| Type | typescript |
| Framework | @modelcontextprotocol/sdk |
| Source path | `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/mcp_code_executor` |
| Repo | https://github.com/.../AgentCPM |
| Tools detected | 2 |

## Tools exposed

- `code-executor`
- `execute_code`

## Source files

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/mcp_code_executor/src/index.ts`

```typescript
#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { randomBytes } from 'crypto';
import { join } from 'path';
import { mkdir, writeFile, appendFile, readFile, access } from 'fs/promises';
import { exec, ExecOptions } from 'child_process';
import { promisify } from 'util';
import { platform } from 'os';

// Define environment config interface for type safety
interface EnvironmentConfig {
    type: 'conda' | 'venv' | 'venv-uv';
    conda_name?: string;
    venv_path?: string;
    uv_venv_path?: string;
}

// Environment variables
const CODE_STORAGE_DIR = process.env.CODE_STORAGE_DIR || '';
// Default environment settings
let ENV_CONFIG: EnvironmentConfig = {
    // Default environment (conda, venv, or venv-uv)
    type: (process.env.ENV_TYPE || 'conda') as 'conda' | 'venv' | 'venv-uv',
    // Name of the conda environment
    conda_name: process.env.CONDA_ENV_NAME,
    // Path to virtualenv
    venv_path: process.env.VENV_PATH,
    // Path to uv virtualenv
    uv_venv_path: process.env.UV_VENV_PATH
};

if (!CODE_STORAGE_DIR) {
    throw new Error('Missing required environment variable: CODE_STORAGE_DIR');
}

// Validate environment settings based on the selected type
if (ENV_CONFIG.type === 'conda' && !ENV_CONFIG.conda_name) {
    throw new Error('Missing required environment variable: CONDA_ENV_NAME (required for conda environment)');
} else if (ENV_CONFIG.type === 'venv' && !ENV_CONFIG.venv_path) {
    throw new Error('Missing required environment variable: VENV_PATH (required for virtualenv)');
} else if (ENV_CONFIG.type === 'venv-uv' && !ENV_CONFIG.uv_venv_path) {
    throw new Error('Missing required environment variable: UV_VENV_PATH (required for uv virtualenv)');
}

// Ensure storage directory exists
await mkdir(CODE_STORAGE_DIR, { recursive: true });

const execAsync = promisify(exec);

/**
 * Get platform-specific command for environment activation and execution
 */
function getPlatformSpecificCommand(pythonCommand: string): { command: string, options: ExecOptions } {
    const isWindows = platform() === 'win32';
    let command = '';
    let options: ExecOptions = {};
    
    switch (ENV_CONFIG.type) {
        case 'conda':
            if (!ENV_CONFIG.conda_name) {
                throw new Error("conda_name is required for conda environment");
            }
            if (isWindows) {
                command = `conda run -n ${ENV_CONFIG.conda_name} ${pythonCommand}`;
                options = { shell: 'cmd.exe' };
            } else {
                command = `source $(conda info --base)/etc/profile.d/conda.sh && conda activate ${ENV_CONFIG.conda_name} && ${pythonCommand}`;
                options = { shell: '/bin/bash' };
            }
            break;
            
        case 'venv':
            if (!ENV_CONFIG.venv_path) {
                throw new Error("venv_path is required for virtualenv");
            }
            if (isWindows) {
                command = `${join(ENV_CONFIG.venv_path, 'Scripts', 'activate')} && ${pythonCommand}`;
                options = { shell: 'cmd.exe' };
            } else {
                command = `source ${join(ENV_CONFIG.venv_path, 'bin', 'activate')} && ${pythonCommand}`;
                options = { shell: '/bin/bash' };
            }
            break;
            
        case 'venv-uv':
            if (!ENV_CONFIG.uv_venv_path) {
                throw new Error("uv_venv_path is required for uv virtualenv");
            }
            if (isWindows) {
                command = `${join(ENV_CONFIG.uv_venv_path, 'Scripts', 'activate')} && ${pythonCommand}`;
                options = { shell: 'cmd.exe' };
            } else {
                command = `source ${join(ENV_CONFIG.uv_venv_path, 'bin', 'activate')} && ${pythonCommand}`;
                options = { shell: '/bin/bash' };
            }
            break;
            
        default:
            throw new Error(`Unsupported environment type: ${ENV_CONFIG.type}`);
    }
    
    return { command, options };
}

/**
 * Execute Python code and return the result
 */
async function executeCode(code: string, filePath: string) {
    try {
        // Write code to file
        await writeFile(filePath, code, 'utf-8');

        // Get platform-specific command with unbuffered output
        const pythonCmd = platform() === 'win32' ? `python -u "${filePath}"` : `python3 -u "${filePath}"`;
        const { command, options } = getPlatformSpecificCommand(pythonCmd);

        // Execute code
        const { stdout, stderr } = await execAsync(command, {
            cwd: CODE_STORAGE_DIR,
            env: { ...process.env, PYTHONUNBUFFERED: '1' },
            ...options
        });

        const response = {
            status: stderr ? 'error' : 'success',
            output: stderr || stdout,
            file_path: filePath
        };

        return {
            type: 'text',
            text: JSON.stringify(response),
            isError: !!stderr
        };
    } catch (error) {
        const response = {
            status: 'error',
            error: error instanceof Error ? error.message : String(error),
            file_path: filePath
        };

        return {
            type: 'text',
            text: JSON.stringify(response),
            isError: true
        };
    }
}

/**
 * Execute Python code from an existing file and return the result
 */
async function executeCodeFromFile(filePath: string) {
    try {
        // Ensure file exists
        await access(filePath);

        // Get platform-specific command with unbuffered output
        const pythonCmd = platform() === 'win32' ? `python -u "${filePath}"` : `python3 -u "${filePath}"`;
        const { command, options } = getPlatformSpecificCommand(pythonCmd);

        // Execute code with unbuffered Python
        const { stdout, stderr } = await execAsync(command, {
            cwd: CODE_STORAGE_DIR,
            env: { ...process.env, PYTHONUNBUFFERED: '1' },
            ...options
        });

        const response = {
            status: stderr ? 'error' : 'success',
            output: stderr || stdout,
            file_path: filePath
        };

        return {
            type: 'text',
            text: JSON.stringify(response),
            isError: !!stderr
        };
    } catch (error) {
        const response = {
            status: 'error',
            error: error instanceof Error ? error.message : String(error),
            file_path: filePath
        };

        return {
            type: 'text',
            text: JSON.stringify(response),
            isError: true
        };
    }
}

/**
 * Create or initialize a new file with content
 */
async function initializeCodeFile(content: string, filename?: string) {
    try {
        // Generate a filename if not provided
        let actualFilename;
        if (filename && typeof filename === 'string') {
            // Extract base name without extension
            const baseName = filename.replace(/\.py$/, '');
            // Add a random suffix to ensure uniqueness
            actualFilename = `${baseName}_${randomBytes(4).toString('hex')}.py`;
        } else {
            // Default filename if none provided
            actualFilename = `code_${randomBytes(4).toString('hex')}.py`;
        }
        
        const filePath = join(CODE_STORAGE_DIR, actualFilename);
        
        // Write initial content to file
        await writeFile(filePath, content, 'utf-8');
        
        return {
            type: 'text',
            text: JSON.stringify({
                status: 'success',
                message: 'File initialized successfully',
                file_path: filePath,
                filename: actualFilename
            }),
            isError: false
        };
    } catch (error) {
        return {
            type: 'text',
            text: JSON.stringify({
                status: 'error',
                error: error instanceof Error ? error.message : String(error)
            }),
            isError: true
        };
    }
}

/**
 * Append content to an existing file
 */
async function appendToCodeFile(filePath: string, content: string) {
    try {
        // Ensure file exists
        await access(filePath);
        
        // Append content to file
        await appendFile(filePath, content, 'utf-8');
        
        return {
            type: 'text',
            text: JSON.stringify({
                status: 'success',
                message: 'Content appended successfully',
                file_path: filePath
            }),
            isError: false
        };
    } catch (error) {
        return {
            type: 'text',
            text: JSON.stringify({
                status: 'error',
                error: error instanceof Error ? error.message : String(error),
                file_path: filePath
            }),
            isError: true
        };
    }
}

/**
 * Read the content of a code file
 */
async function readCodeFile(filePath: string) {
    try {
        // Ensure file exists
        await access(filePath);
        
        // Read file content
        const content = await readFile(filePath, 'utf-8');
        
        return {
            type: 'text',
            text: JSON.stringify({
                status: 'success',
                content: content,
                file_path: filePath
            }),
            isError: false
        };
    } catch (error) {
        return {
            type: 'text',
            text: JSON.stringify({
                status: 'error',
                error: error instanceof Error ? error.message : String(error),
                file_path: filePath
            }),
            isError: true
        };
    }
}

/**
 * Install dependencies using the appropriate package manager
 */
async function installDependencies(packages: string[]) {
    try {
        if (!packages || packages.length === 0) {
            return {
                type: 'text',
                text: JSON.stringify({
                    status: 'error',
                    error: 'No packages specified'
                }),
                isError: true
            };
        }

        // Build the install command based on environment type
        let installCmd = '';
        const packageList = packages.join(' ');
        
        switch (ENV_CONFIG.type) {
            case 'conda':
                if (!ENV_CONFIG.conda_name) {
                    throw new Error("conda_name is required for conda environment");
                }
                installCmd = `conda install -y -n ${ENV_CONFIG.conda_name} ${packageList}`;
                break;
                
            case 'venv':
                installCmd = `pip install ${packageList}`;
                break;
                
            case 'venv-uv':
                installCmd = `uv pip install ${packageList}`;
                break;
                
            default:
                throw new Error(`Unsupported environment type: ${ENV_CONFIG.type}`);
        }

        // Get platform-specific command
        const { command, options } = getPlatformSpecificCommand(installCmd);

        // Execute installation with unbuffered Python
        const { stdout, stderr } = await execAsync(command, {
            cwd: CODE_STORAGE_DIR,
            env: { ...process.env, PYTHONUNBUFFERED: '1' },
            ...options
        });

        const response = {
            status: 'success',
            env_type: ENV_CONFIG.type,
            installed_packages: packages,
            output: stdout,
            warnings: stderr || undefined
        };

        return {
            type: 'text',
            text: JSON.stringify(response),
            isError: false
        };
    } catch (error) {
        const response = {
            status: 'error',
            env_type: ENV_CONFIG.type,
            error: error instanceof Error ? error.message : String(error)
        };

        return {
            type: 'text',
            text: JSON.stringify(response),
            isError: true
        };
    }
}

/**
 * Check if packages are installed in the current environment
 */
async function checkPackageInstallation(packages: string[]) {
    try {
        if (!packages || packages.length === 0) {
            return {
                type: 'text',
                text: JSON.stringify({
                    status: 'error',
                    error: 'No packages specified'
                }),
                isError: true
            };
        }

        // Create a temporary Python script to check packages
        const tempId = randomBytes(4).toString('hex');
        // CODE_STORAGE_DIR is validated at the start of the program, so it's safe to use here
        const checkScriptPath = join(CODE_STORAGE_DIR, `check_packages_${tempId}.py`);
        
        // This script will attempt to import each package and return the results
        const checkScript = `
import importlib.util
import json
import sys

results = {}

for package in ${JSON.stringify(packages)}:
    try:
        # Try to find the spec
        spec = importlib.util.find_spec(package)
        if spec is None:
            # Package not found
            results[package] = {
                "installed": False,
                "error": "Package not found"
            }
            continue
            
        # Try to import the package
        module = importlib.import_module(package)
        
        # Get version if available
        version = getattr(module, "__version__", None)
        if version is None:
            version = getattr(module, "version", None)
            
        results[package] = {
            "installed": True,
            "version": version,
            "location": getattr(module, "__file__", None)
        }
    except ImportError as e:
        results[package] = {
            "installed": False,
            "error": str(e)
        }
    except Exception as e:
        results[package] = {
            "installed": False,
            "error": f"Unexpected error: {str(e)}"
        }

print(json.dumps(results))
`;

        await writeFile(checkScriptPath, checkScript, 'utf-8');

        // Execute the check script with unbuffered output
        const pythonCmd = platform() === 'win32' ? `python -u "${checkScriptPath}"` : `python3 -u "${checkScriptPath}"`;
        const { command, options } = getPlatformSpecificCommand(pythonCmd);

        const { stdout, stderr } = await execAsync(command, {
            cwd: CODE_STORAGE_DIR,
            env: { ...process.env, PYTHONUNBUFFERED: '1' },
            ...options
        });

        if (stderr) {
            return {
                type: 'text',
                text: JSON.stringify({
                    status: 'error',
                    er

... [truncated at 15,000 bytes; full source at C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/mcp_code_executor/src/index.ts]
```

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/mcp_code_executor/package.json`

```json
{
  "name": "code_execution_server",
  "version": "0.2.0",
  "description": "execute code",
  "private": true,
  "type": "module",
  "bin": {
    "code execution server": "./build/index.js"
  },
  "files": [
    "build"
  ],
  "scripts": {
    "build": "tsc && node -e \"require('fs').chmodSync('build/index.js', '755')\"",
    "prepare": "npm run build",
    "watch": "tsc --watch",
    "inspector": "npx @modelcontextprotocol/inspector build/index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^0.6.0",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@types/node": "^20.11.24",
    "typescript": "^5.3.3"
  }
}

```

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/mcp_code_executor/README.md`

```
# MCP Code Executor
[![smithery badge](https://smithery.ai/badge/@bazinga012/mcp_code_executor)](https://smithery.ai/server/@bazinga012/mcp_code_executor)

The MCP Code Executor is an MCP server that allows LLMs to execute Python code within a specified Python environment. This enables LLMs to run code with access to [[libraries]] and dependencies defined in the environment. It also supports incremental code generation for handling large code blocks that may exceed token limits.

<a href="https://glama.ai/mcp/servers/45ix8xode3"><img width="380" height="200" src="https://glama.ai/mcp/servers/45ix8xode3/badge" alt="Code Executor MCP server" /></a>

## Features

- Execute Python code from LLM [[[[prompts]]]]
- Support for incremental code generation to overcome token limitations
- Run code within a specified environment (Conda, virtualenv, or UV virtualenv)
- Install dependencies when needed
- Check if packages are already installed
- Dynamically configure the environment at runtime
- Configurable code storage directory

## Prerequisites

- Node.js installed
- One of the following:
  - Conda installed with desired Conda environment created
  - Python virtualenv
  - UV virtualenv

## [[Setup]]

1. Clone this repository:

```bash
git clone https://github.com/bazinga012/mcp_code_executor.git
```

2. Navigate to the project directory:

```bash 
cd mcp_code_executor
```

3. Install the Node.js dependencies:

```bash
npm install
```

4. Build the project:

```bash
npm run build
```

## Configuration

To configure the MCP Code Executor server, add the following to your MCP servers configuration file:

### Using Node.js

```json
{
  "mcpServers": {
    "mcp-code-executor": {
      "command": "node",
      "args": [
        "/path/to/mcp_code_executor/build/index.js" 
      ],
      "env": {
        "CODE_STORAGE_DIR": "/path/to/code/storage",
        "ENV_TYPE": "conda",
        "CONDA_ENV_NAME": "your-conda-env"
      }
    }
  }
}
```

### Using Docker

```json
{
  "mcpServers": {
    "mcp-code-executor": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "mcp-code-executor"
      ]
    }
  }
}
```

> **Note:** The Dockerfile has been tested with the venv-uv environment type only. Other environment types may require additional configuration.

### Environment Variables

#### Required Variables
- `CODE_STORAGE_DIR`: Directory where the generated code will be stored

#### Environment Type (choose one [[setup]])
- **For Conda:**
  - `ENV_TYPE`: Set to `conda`
  - `CONDA_ENV_NAME`: Name of the Conda environment to use

- **For Standard Virtualenv:**
  - `ENV_TYPE`: Set to `venv`
  - `VENV_PATH`: Path to the virtualenv directory

- **For UV Virtualenv:**
  - `ENV_TYPE`: Set to `venv-uv`
  - `UV_VENV_PATH`: Path to the UV virtualenv directory

## Available Tools

The MCP Code Executor provides the following tools to LLMs:

### 1. `execute_code`
Executes Python code in the configured environment. Best for short code snippets.
```json
{
  "name": "execute_code",
  "arguments": {
    "code": "import numpy as np\nprint(np.random.rand(3,3))",
    "filename": "matrix_gen"
  }
}
```

### 2. `install_dependencies`
Installs Python packages in the environment.
```json
{
  "name": "install_dependencies",
  "arguments": {
    "packages": ["numpy", "pandas", "matplotlib"]
  }
}
```

### 3. `check_installed_packages`
Checks if packages are already installed in the environment.
```json
{
  "name": "check_installed_packages",
  "arguments": {
    "packages": ["numpy", "pandas", "non_existent_package"]
  }
}
```

### 4. `configure_environment`
Dynamically changes the environment configuration.
```json
{
  "name": "configure_environment",
  "arguments": {
    "type": "conda",
    "conda_name": "new_env_name"
  }
}
```

### 5. `get_environment_config`
Gets the current environment configuration.
```json
{
  "name": "get_environment_config",
  "arguments": {}
}
```

### 6. `initialize_code_file`
Creates a new Python file with initial content. Use this as the first step for longer code that may exceed token limits.
```json
{
  "name": "initialize_code_file",
  "arguments": {
    "content": "def main():\n    print('Hello, world!')\n\nif __name__ == '__main__':\n    main()",
    "filename": "my_script"
  }
}
```

### 7. `append_to_code_file`
Appends content to an existing Python code file. Use this to add more code to a file created with initialize_code_file.
```json
{
  "name": "append_to_code_file",
  "arguments": {
    "file_path": "/path/to/code/storage/my_script_abc123.py",
    "content": "\ndef another_function():\n    print('This was appended to the file')\n"
  }
}
```

### 8. `execute_code_file`
Executes an existing Python file. Use this as the final step after building up code with initialize_code_file and append_to_code_file.
```json
{
  "name": "execute_code_file",
  "arguments": {
    "file_path": "/path/to/code/storage/my_script_abc123.py"
  }
}
```

### 9. `read_code_file`
Reads the content of an existing Python code file. Use this to verify the current state of a file before appending more content or executing it.
```json
{
  "name": "read_code_file",
  "arguments": {
    "file_path": "/path/to/code/storage/my_script_abc123.py"
  }
}
```

## Usage

Once configured, the MCP Code Executor will allow LLMs to execute Python code by generating a file in the specified `CODE_STORAGE_DIR` and running it within the configured environment.

LLMs can generate and execute code by referencing this MCP server in their [[[[prompts]]]].

### Handling Large Code Blocks

For larger code blocks that might exceed LLM token limits, use the incremental code generation approach:

1. **Initialize a file** with the basic structure using `initialize_code_file`
2. **Add more code** in subsequent calls using `append_to_code_file`
3. **Verify the file content** if needed using `read_code_file`
4. **Execute the complete code** using `execute_code_file`

This approach allows LLMs to write complex, multi-part code without running into token limitations.

## Backward Compatibility

This package maintains backward compatibility with earlier versions. Users of previous versions who only specified a Conda environment will continue to work without any changes to their configuration.

## [[Contributing]]

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

```


## Original README

# MCP Code Executor
[![smithery badge](https://smithery.ai/badge/@bazinga012/mcp_code_executor)](https://smithery.ai/server/@bazinga012/mcp_code_executor)

The MCP Code Executor is an MCP server that allows LLMs to execute Python code within a specified Python environment. This enables LLMs to run code with access to libraries and dependencies defined in the environment. It also supports incremental code generation for handling large code blocks that may exceed token limits.

<a href="https://glama.ai/mcp/servers/45ix8xode3"><img width="380" height="200" src="https://glama.ai/mcp/servers/45ix8xode3/badge" alt="Code Executor MCP server" /></a>

## Features

- Execute Python code from LLM prompts
- Support for incremental code generation to overcome token limitations
- Run code within a specified environment (Conda, virtualenv, or UV virtualenv)
- Install dependencies when needed
- Check if packages are already installed
- Dynamically configure the environment at runtime
- Configurable code storage directory

## Prerequisites

- Node.js installed
- One of the following:
  - Conda installed with desired Conda environment created
  - Python virtualenv
  - UV virtualenv

## Setup

1. Clone this repository:

```bash
git clone https://github.com/bazinga012/mcp_code_executor.git
```

2. Navigate to the project directory:

```bash 
cd mcp_code_executor
```

3. Install the Node.js dependencies:

```bash
npm install
```

4. Build the project:

```bash
npm run build
```

## Configuration

To configure the MCP Code Executor server, add the following to your MCP servers configuration file:

### Using Node.js

```json
{
  "mcpServers": {
    "mcp-code-executor": {
      "command": "node",
      "args": [
        "/path/to/mcp_code_executor/build/index.js" 
      ],
      "env": {
        "CODE_STORAGE_DIR": "/path/to/code/storage",
        "ENV_TYPE": "conda",
        "CONDA_ENV_NAME": "your-conda-env"
      }
    }
  }
}
```

### Using Docker

```json
{
  "mcpServers": {
    "mcp-code-executor": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "mcp-code-executor"
      ]
    }
  }
}
```

> **Note:** The Dockerfile has been tested with the venv-uv environment type only. Other environment types may require additional configuration.

### Environment Variables

#### Required Variables
- `CODE_STORAGE_DIR`: Directory where the generated code will be stored

#### Environment Type (choose one setup)
- **For Conda:**
  - `ENV_TYPE`: Set to `conda`
  - `CONDA_ENV_NAME`: Name of the Conda environment to use

- **For Standard Virtualenv:**
  - `ENV_TYPE`: Set to `venv`
  - `VENV_PATH`: Path to the virtualenv directory

- **For UV Virtualenv:**
  - `ENV_TYPE`: Set to `venv-uv`
  - `UV_VENV_PATH`: Path to the UV virtualenv directory

## Available Tools

The MCP Code Executor provides the following tools to LLMs:

### 1. `execute_code`
Executes Python code in the configured environment. Best for short code snippets.
```json
{
  "name": "execute_code",
  "arguments": {
    "code": "import numpy as np\nprint(np.random.rand(3,3))",
    "filename": "matrix_gen"
  }
}
```

### 2. `install_dependencies`
Installs Python packages in the environment.
```json
{
  "name": "install_dependencies",
  "arguments": {
    "packages": ["numpy", "pandas", "matplotlib"]
  }
}
```

### 3. `check_installed_packages`
Checks if packages are already installed in the environment.
```json
{
  "name": "check_installed_packages",
  "arguments": {
    "packages": ["numpy", "pandas", "non_existent_package"]
  }
}
```

### 4. `configure_environment`
Dynamically changes the environment configuration.
```json
{
  "name": "configure_environment",
  "arguments": {
    "type": "conda",
    "conda_name": "new_env_name"
  }
}
```

### 5. `get_environment_config`
Gets the current environment configuration.
```json
{
  "name": "get_environment_config",
  "arguments": {}
}
```

### 6. `initialize_code_file`
Creates a new Python file with initial content. Use this as the first step for longer code that may exceed token limits.
```json
{
  "name": "initialize_code_file",
  "arguments": {
    "content": "def main():\n    print('Hello, world!')\n\nif __name__ == '__main__':\n    main()",
    "filename": "my_script"
  }
}
```

### 7. `append_to_code_file`
Appends content to an existing Python code file. Use this to add more code to a file created with initialize_code_file.
```json
{
  "name": "append_to_code_file",
  "arguments": {
    "file_path": "/path/to/code/storage/my_script_abc123.py",
    "content": "\ndef another_function():\n    print('This was appended to the file')\n"
  }
}
```

### 8. `execute_code_file`
Executes an existing Python file. Use this as the final step after building up code with initialize_code_file and append_to_code_file.
```json
{
  "name": "execute_code_file",
  "arguments": {
    "file_path": "/path/to/code/storage/my_script_abc123.py"
  }
}
```

### 9. `read_code_file`
Reads the content of an existing Python code file. Use this to verify the current state of a file before appending more content or executing it.
```json
{
  "name": "read_code_file",
  "arguments": {
    "file_path": "/path/to/code/storage/my_script_abc123.py"
  }
}
```

## Usage

Once configured, the MCP Code Executor will allow LLMs to execute Python code by generating a file in the specified `CODE_STORAGE_DIR` and running it within the configured environment.

LLMs can generate and execute code by referencing this MCP server in their [[[[prompts]]]].

### Handling Large Code Blocks

For larger code blocks that might exceed LLM token limits, use the incremental code generation approach:

1. **Initialize a file** with the basic structure using `initialize_code_file`
2. **Add more code** in subsequent calls using `append_to_code_file`
3. **Verify the file content** if needed using `read_code_file`
4. **Execute the complete code** using `execute_code_file`

This approach allows LLMs to write complex, multi-part code without running into token limitations.

## Backward Compatibility

This package maintains backward compatibility with earlier versions. Users of previous versions who only specified a Conda environment will continue to work without any changes to their configuration.

## [[Contributing]]

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.



## See also

- [[10.12 MCP]] — sector index
- [[pentest-ai-mcp]]
- [[omniwire-mcp]]
- [[ponytail-mcp]]
- [[supermemory-mcp]]
- [[read-file-enhanced-mcp]]
