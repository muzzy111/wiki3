FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY pyproject.toml ./
RUN pip install --no-cache-dir -e ".[dev]"

# Copy server code
COPY server.py ./

# Run the server
CMD ["python", "server.py"]