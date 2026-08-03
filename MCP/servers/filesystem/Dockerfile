# Multi-stage build for the filesystem MCP server.
FROM python:3.11-slim AS base

# Create a non-root user for runtime.
RUN groupadd -r mcp && useradd -r -g mcp mcp

WORKDIR /app

# Install dependencies first for better layer caching.
COPY pyproject.toml ./
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir .

COPY src/ ./src/

# Drop to non-root user.
USER mcp

# Default transport: stdio.
ENV MCP_TRANSPORT=stdio

CMD ["python", "src/filesystem_server.py"]
