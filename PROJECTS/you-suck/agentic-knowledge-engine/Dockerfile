# syntax=docker/dockerfile:1.7
FROM python:3.12-slim AS base

# System deps: tini for proper signal handling, curl for HEALTHCHECK.
RUN apt-get update \
    && apt-get install -y --no-install-recommends tini curl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /app

# Layer-cache deps separately from source.
COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY app/ ./app/
COPY main.py ./

# Pre-create the data mount-point layout so a fresh volume works out of the box.
RUN mkdir -p /data/inbox /data/notes /data/archive /data/quarantine /data/logs

# Drop privileges.
RUN useradd --create-home --uid 1000 akee \
    && chown -R akee:akee /app /data
USER akee

VOLUME ["/data"]
EXPOSE 8000

HEALTHCHECK --interval=60s --timeout=10s --start-period=20s --retries=3 \
    CMD curl -fsS http://localhost:8000/healthz || exit 1

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["python", "main.py"]