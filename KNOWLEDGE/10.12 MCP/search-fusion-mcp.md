---
title: "Search Fusion MCP"
type: dashboard
cssclasses: [cards]
tags:
  - mcp-server
  - corpus/github
  - status/active
created: 2026-07-05
modified: 2026-07-05
---

# Search Fusion MCP

> [!info] MCP Server Profile
> **Type:** python
> **Framework:** FastMCP
> **Source:** `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp`
> **Repo:** https://github.com/.../AgentCPM

## Description

High-availability multi-engine search aggregation MCP server. Wikipedia + web fetch + config-managed engines.

## Quick reference

| Field | Value |
|-------|-------|
| Type | python |
| Framework | FastMCP |
| Source path | `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp` |
| Repo | https://github.com/.../AgentCPM |
| Tools detected | 0 |

## Source files

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp/src/server.py`

```python
#!/usr/bin/env python
"""
Search Fusion MCP Server - Main server implementation
High-Availability Multi-Engine Search Aggregation MCP Server
"""

import asyncio
import json
import os
import time
from datetime import datetime
from typing import Optional
from mcp.server.fastmcp import FastMCP
from loguru import logger
import httpx
import wikipedia
from pydantic import Field
import requests

from src.config.config_manager import ConfigManager
from src.search_manager import SearchManager
from src.web_fetcher import WebFetcher


class SearchFusionServer:
    """Search Fusion MCP Server main class"""
    
    def __init__(self, config_path: Optional[str] = None):
        """Initialize Search Fusion MCP Server"""
        
        # Initialize configuration manager
        self.config_manager = ConfigManager(config_path)
        
        # Setup logging
        self._setup_logging()
        
        # Initialize components
        self.search_manager: Optional[SearchManager] = None
        
        # Initialize web fetcher (get API keys from configuration)
        jina_config = self.config_manager.get_engine_config('jina')
        serper_config = self.config_manager.get_engine_config('serper')
        self.web_fetcher = WebFetcher(
            jina_api_key=jina_config.api_key,
            serper_api_key=serper_config.api_key
        )
        
        self.last_init_attempt = 0
        self.init_cooldown = 30
        # Concurrency control
        self._init_lock = asyncio.Lock()
        self._search_semaphore = asyncio.Semaphore(30)  # Limit concurrent searches
        # Create MCP server
        self.mcp = FastMCP(name="Search-Fusion", port=3003)
        self._register_tools()
    
    def _setup_logging(self):
        """Setup logging configuration"""
        try:
            # Configure loguru
            logger.remove()  # Remove default handler
            
            # Console logging with colors
            logger.add(
                lambda msg: print(msg, end=""),
                level=self.config_manager.config.log_level,
                format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
                colorize=True
            )
            
            # File logging
            if self.config_manager.config.log_file:
                logger.add(
                    self.config_manager.config.log_file,
                    level=self.config_manager.config.log_level,
                    format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
                    rotation=self.config_manager.config.log_rotation,
                    retention="7 days",
                    compression="zip",
                    encoding="utf-8"
                )
            
        except Exception as e:
            print(f"[!]️ Failed to setup logging: {e}")
    
    def _register_tools(self):
        """Register MCP tools"""
        logger.info(" Registering MCP tools...")
        
        @self.mcp.tool()
        async def search(query: str = Field(description="Search query terms"), 
                        num_results: int = Field(description="Number of results to return, should be added if you want to get more results", default=5), 
                        engine: str = Field(description="Search engine type, options: auto, google, serper, jina, duckduckgo, exa, bing, baidu", default="google")) -> str:
            """Execute web search and return results
            """
            return await self._handle_search(query, max(num_results, 3), engine)
        
        @self.mcp.tool()
        async def fetch_url(url: str = Field(description="Web URL to fetch"), 
                            use_jina: bool = Field(description="Whether to prioritize Jina Reader for LLM-optimized content", default=True), 
                            with_image_alt: bool = Field(description="Whether to generate alt text descriptions for images", default=False), 
                            max_length: int = Field(description="Maximum content length per page, should be added if you want to get more content, should be more than 20000", default=20000), 
                            page_number: int = Field(description="Specific page to retrieve (starting from 1), default 1", default=1)) -> str:
            """Fetch web content with intelligent pagination support
            """
            return await self._handle_fetch_url(url, use_jina, with_image_alt, max_length, page_number)
        
        @self.mcp.tool()
        async def search_wikipedia(entity: str = Field(description="Entity to search for (people, places, concepts, events, etc.)"), 
                                   first_sentences: int = Field(description="Number of first sentences to return(should be more than 20) (set to 0 for full content)", default=20)) -> str:
            """Search Wikipedia page content
            """
            return await self._handle_wikipedia_search(entity, min(first_sentences, 20))
        
        # @self.mcp.tool()
        # async def get_available_engines() -> str:
        #     """Get list of currently available search engines and their status"""
        #     return await self._handle_get_engines()
        
        @self.mcp.tool()
        async def search_archived_webpage(url: str=Field(description="Website URL to search"), 
                                          year: int = Field(description="Target year"), 
                                          month: int = Field(description="Target month"), 
                                          day: int = Field(description="Target day")) -> str:
            """Search archived versions of websites using Wayback Machine
            """
            return await self._handle_wayback_search(url, year, month, day)

        logger.info("[x] All MCP tools registered successfully")
    
    async def _ensure_search_manager(self) -> bool:
        """Ensure search manager is initialized (thread-safe)"""
        # Quick check without lock for performance
        if self.search_manager is not None:
            return True
        
        # Use lock for initialization to prevent race conditions
        async with self._init_lock:
            # Double-check after acquiring lock
            if self.search_manager is not None:
                return True
            
            # Check cooldown
            current_time = time.time()
            if current_time - self.last_init_attempt < self.init_cooldown:
                logger.warning(f"⏳ Search manager initialization in cooldown, {self.init_cooldown - (current_time - self.last_init_attempt):.0f}s remaining")
                return False
            
            self.last_init_attempt = current_time
            
            try:
                logger.info(" Initializing search manager...")
                self.search_manager = SearchManager()
                logger.success("[x] Search manager initialized successfully")
                return True
            except Exception as e:
                logger.error(f"[x] Search manager initialization failed: {e}")
                self.search_manager = None
                return False
    
    async def _handle_search(self, query: str, num_results: int, engine: str) -> str:
        """Handle search requests with concurrency control"""   
        # Use semaphore to limit concurrent searches
        async with self._search_semaphore:
            try:
                # Ensure search manager is available
                if not await self._ensure_search_manager():
                    return self._error_response("Search manager unavailable, please try again later", query, engine)
                
                # Execute search with timeout handling
                start_time = time.time()
                logger.info(f" Starting search: query='{query}', engine='{engine}', num_results={num_results}")
                
                try:
                    results = await asyncio.wait_for(
                        self.search_manager.search(query, num_results, engine),
                        timeout=60.0  # 60 second timeout
                    )
                except asyncio.TimeoutError:
                    elapsed_time = time.time() - start_time
                    logger.error(f"⏰ Search timeout after {elapsed_time:.1f}s: query='{query}', engine='{engine}'")
                    return self._error_response("Search operation timed out", query, engine)
                
                elapsed_time = time.time() - start_time
                
                # Format response
                response = {
                    "query": query,
                    "engine": engine,
                    "time_ms": int(elapsed_time * 1000),
                    "num_results": len(results),
                    "results": [
                        {
                            "title": result.title,
                            "link": result.link,
                            "snippet": result.snippet,
                            "source": result.source,
                            "metadata": result.metadata
                        }
                        for result in results
                    ],
                    "timestamp": datetime.now().isoformat(),
                    "success": True
                }
                
                if results:
                    logger.success(f" Search successful: '{query}' ({len(results)} results, {elapsed_time*1000:.0f}ms)")
                else:
                    logger.warning(f"[!]️ Search returned no results: '{query}'")
                    response["message"] = "No results found, try different keywords or search engines"
                
                return json.dumps(response, ensure_ascii=False, indent=2)
                
            except Exception as e:
                elapsed_time = time.time() - start_time
                logger.error(f"[x] Search error after {elapsed_time:.1f}s: {e}")
                return self._error_response(f"Search failed: {str(e)}", query, engine)
    
    async def _handle_fetch_url(self, url: str, use_jina: bool, with_image_alt: bool, max_length: int, page_number: int) -> str:
        """Handle URL fetching requests with intelligent pagination support"""
        try:
            logger.info(f" Starting web fetch: {url} (page {page_number})")
            start_time = time.time()
            
            try:
                # Use web fetcher with timeout
                result = await asyncio.wait_for(
                    self.web_fetcher.fetch_url(
                        url=url,
                        use_jina=use_jina,
                        with_image_alt=with_image_alt,
                        max_length=max_length,
                        page_number=page_number
                    ),
                    timeout=90.0  # 90 second timeout for web fetching
                )
            except asyncio.TimeoutError:
                elapsed_time = time.time() - start_time
                logger.error(f"⏰ Web fetch timeout after {elapsed_time:.1f}s: {url}")
                return json.dumps({
                    "success": False,
                    "error": "Web fetch operation timed out",
                    "url": url,
                    "timestamp": datetime.now().isoformat()
                }, ensure_ascii=False, indent=2)
            
            elapsed_time = time.time() - start_time
            result['time_ms'] = int(elapsed_time * 1000)
            result['timestamp'] = datetime.now().isoformat()
            
            if result.get('success'):
                if result.get('is_paginated'):
                    logger.success(f"[x] Web fetch successful (paginated): {url} - {result['page_info']}")
                else:
                    logger.success(f"[x] Web fetch successful: {url} ({result.get('total_length', 0)} characters)")
            else:
                logger.error(f"[x] Web fetch failed: {url} - {result.get('error', 'Unknown error')}")
            
            return json.dumps(result, ensure_ascii=False, indent=2)
                
        except Exception as e:
            logger.error(f"[x] URL fetch exception: {e}")
            return json.dumps({
                "success": False,
                "error": f"Fetch exception: {str(e)}",
                "url": url,
                "timestamp": datetime.now().isoformat()
            }, ensure_ascii=False, indent=2)
    

    async def _handle_get_engines(self) -> str:
        """Handle get available engines requests"""
        try:
            if not await self._ensure_search_manager():
                return json.dumps({
                    "error": "Search manager unavailable",
                    "engines": [],
                    "timestamp": datetime.now().isoformat()
                }, ensure_ascii=False, indent=2)
            
            engines =await self.search_manager.get_available_engines()
            stats = self.search_manager.get_search_stats()
            
            response = {
                "engines": engines,
                "stats": stats,
                "timestamp": datetime.now().isoformat()
            }
            
            logger.info(f" Engine status retrieved: {len(engines)} engines")
            return json.dumps(response, ensure_ascii=False, indent=2)
            
        except Exception as e:
            logger.error(f"[x] Get engines error: {e}")
            return json.dumps({
                "error": f"Failed to get engine list: {str(e)}",
                "timestamp": datetime.now().isoformat()
            }, ensure_ascii=False, indent=2)
    
    async def _handle_wikipedia_search(self, entity: str, first_sentences: int) -> str:
        """Handle Wikipedia search requests with async optimization"""
        try:
            # Use async wrapper for synchronous Wikipedia operations
            page = await asyncio.to_thread(self._get_wikipedia_page, entity)
            
            result_parts = [f"Page Title: {page.title}"]
            
            if first_sentences > 0:
                try:
                    # Get summary using async wrapper
                    summary = await asyncio.to_thread(
                        wikipedia.summary, 
                        entity, 
                        sentences=first_sentences, 
                        auto_suggest=False
                    )
                    result_parts.append(f"First {first_sentences} sentences summary: {summary}")
                except Exception:
                    # Fallback to content splitting
                    content_sentences = page.content.split(". ")[:first_sentences]
                    summary = ". ".join(content_sentences) + "." if content_sentences else page.content[:5000] + "..."
                    result_parts.append(f"First {first_sentences} sentences summary: {summary}")
            else:
  

... [truncated at 15,000 bytes; full source at C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp/src/server.py]
```

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp/src/search_manager.py`

```python
#!/usr/bin/env python

"""
Search Manager - Manages multiple search engines with priority-based failover
"""

from typing import List, Optional, Dict, Any
import time
import asyncio
from loguru import logger
from datetime import datetime

from src.config.config_manager import ConfigManager
from src.engines import (
    SearchEngine, 
    SearchResult,
    GoogleSearch,
    SerperSearch,
    DuckDuckGoSearch,
    BingSearch,
    BaiduSearch,
    ExaSearch,
    JinaSearch
)


class SearchManager:
    """Search manager responsible for managing multiple search engines with priority-based polling"""
    
    def __init__(self, config_path: Optional[str] = None):
        self.engines: List[SearchEngine] = []
        self.last_used_engine: Optional[SearchEngine] = None
        self.last_search_time = 0

        self.config_manager = ConfigManager(config_path)
        self.cooldown_period = self.config_manager.config.default_cooldown

        self._initialize_engines()
        
        # Sort engines by priority (lower number = higher priority)
        self.engines.sort(key=lambda x: x.priority)
        
        logger.info(f" Search manager initialized with {len(self.engines)} engines")
        self._log_engine_summary()
    
    def _initialize_engines(self):
        """Initialize search engines"""
        
        # 1. Google search engine (highest priority)
        if self.config_manager.is_engine_enabled('google'):
            google_config = self.config_manager.get_engine_config('google')
            if google_config.api_key and google_config.cse_id:
                try:
                    self.engines.append(GoogleSearch(
                        api_key=google_config.api_key, 
                        cse_id=google_config.cse_id
                    ))
                    logger.info("[x] Google search engine initialized successfully")
                except Exception as e:
                    logger.error(f"[x] Google search engine initialization failed: {e}")
            else:
                logger.warning("[!] Google search configuration incomplete (missing CSE_ID), skipping initialization")
        
        # 2. Serper search engine (same priority as Google)
        if self.config_manager.is_engine_enabled('serper'):
            serper_config = self.config_manager.get_engine_config('serper')
            try:
                self.engines.append(SerperSearch(api_key=serper_config.api_key))
                logger.info("[x] Serper search engine initialized successfully")
            except Exception as e:
                logger.error(f"[x] Serper search engine initialization failed: {e}")
        
        # 3. Jina AI search engine (second priority)
        if self.config_manager.is_engine_enabled('jina'):
            jina_config = self.config_manager.get_engine_config('jina')
            try:
                self.engines.append(JinaSearch(api_key=jina_config.api_key))
                logger.info("[x] Jina AI search engine initialized successfully")
            except Exception as e:
                logger.error(f"[x] Jina AI search engine initialization failed: {e}")
        
        # 4. DuckDuckGo search (free, always available)
        try:
            self.engines.append(DuckDuckGoSearch())
            logger.info("[x] DuckDuckGo search engine initialized successfully")
        except Exception as e:
            logger.error(f"[x] DuckDuckGo search engine initialization failed: {e}")
        
        # 5. Exa search engine
        if self.config_manager.is_engine_enabled('exa'):
            exa_config = self.config_manager.get_engine_config('exa')
            try:
                self.engines.append(ExaSearch(api_key=exa_config.api_key))
                logger.info("[x] Exa search engine initialized successfully")
            except Exception as e:
                logger.error(f"[x] Exa search engine initialization failed: {e}")
        
        # 6. Bing search engine
        if self.config_manager.is_engine_enabled('bing'):
            bing_config = self.config_manager.get_engine_config('bing')
            try:
                self.engines.append(BingSearch(api_key=bing_config.api_key))
                logger.info("[x] Bing search engine initialized successfully")
            except Exception as e:
                logger.error(f"[x] Bing search engine initialization failed: {e}")
        
        # 7. Baidu search engine
        if self.config_manager.is_engine_enabled('baidu'):
            baidu_config = self.config_manager.get_engine_config('baidu')
            if baidu_config.api_key and baidu_config.secret_key:
                try:
                    self.engines.append(BaiduSearch(
                        api_key=baidu_config.api_key,
                        secret_key=baidu_config.secret_key
                    ))
                    logger.info("[x] Baidu search engine initialized successfully")
                except Exception as e:
                    logger.error(f"[x] Baidu search engine initialization failed: {e}")
            else:
                logger.warning("[!] Baidu search configuration incomplete (missing SECRET_KEY), skipping initialization")
    
    def _log_engine_summary(self):
        """Log search engine summary"""
        if not self.engines:
            logger.warning("[!]️ No search engines available")
            return
        
        engine_info = []
        for engine in self.engines:
            status = "[x]" if engine.is_available() else "[x]"
            engine_info.append(f"{status} {engine.__class__.__name__} (Priority: {engine.priority})")
        
        logger.info(" Available search engines:")
        for info in engine_info:
            logger.info(f"  {info}")
    
    async def search(self, query: str, num_results: int = 10, preferred_engine: str = "auto") -> List[SearchResult]:
        """Execute search with automatic engine selection and failover"""
        
        if not self.engines:
            logger.error("[x] No search engines available")
            return []
        
        # Update search statistics
        self.last_search_time = time.time()
        
        # Engine selection logic
        if preferred_engine.lower() != "auto":
            # Try to use preferred engine first
            target_engine = self._find_engine_by_name(preferred_engine)
            if target_engine and target_engine.is_available():
                logger.info(f" Using preferred engine: {preferred_engine}")
                results = await target_engine.search(query, num_results)
                if results:
                    self.last_used_engine = target_engine
                    return results
                else:
                    logger.warning(f"[!]️ Preferred engine {preferred_engine} returned no results, trying failover")
        
        # Auto selection: try engines in priority order
        for engine in self.engines:
            if not engine.is_available():
                continue
                
            logger.info(f" Trying {engine.__class__.__name__}...")
            
            try:
                results = await engine.search(query, num_results)
                
                if results:
                    self.last_used_engine = engine
                    logger.success(f"[x] Search successful with {engine.__class__.__name__}: {len(results)} results")
                    return results
                else:
                    logger.warning(f"[!]️ {engine.__class__.__name__} returned no results")
                    
            except Exception as e:
                logger.error(f"[x] {engine.__class__.__name__} failed: {str(e)}")
                continue
        
        logger.error("[x] All search engines failed or returned no results")
        return []
    
    def _find_engine_by_name(self, engine_name: str) -> Optional[SearchEngine]:
        """Find engine by name"""
        engine_name_lower = engine_name.lower()
        
        for engine in self.engines:
            class_name = engine.__class__.__name__.lower()
            if (engine_name_lower in class_name or 
                class_name.startswith(engine_name_lower) or
                engine_name_lower == class_name.replace('search', '')):
                return engine
        
        return None
    
    async def get_available_engines(self) -> List[Dict[str, Any]]:
        """Get list of available engines with their status (thread-safe)"""
        engine_list = []
        
        # Gather all status info concurrently for better performance
        tasks = [engine.get_status() for engine in self.engines]
        engine_statuses = await asyncio.gather(*tasks)
        
        return engine_statuses
    
    def get_search_stats(self) -> Dict[str, Any]:
        """Get search manager statistics"""
        total_requests = sum(engine.total_requests for engine in self.engines)
        successful_requests = sum(engine.successful_requests for engine in self.engines)
        
        return {
            "total_engines": len(self.engines),
            "available_engines": len([e for e in self.engines if e.is_available()]),
            "total_requests": total_requests,
            "successful_requests": successful_requests,
            "success_rate": f"{(successful_requests / total_requests * 100) if total_requests > 0 else 0:.1f}%",
            "last_search_time": self.last_search_time,
            "last_used_engine": self.last_used_engine.__class__.__name__ if self.last_used_engine else None
        }

```

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp/src/main.py`

```python
#!/usr/bin/env python

"""
Search Fusion MCP Server - Main entry point
Maintains backward compatibility while using new server architecture
"""

import os
import sys

# Add current directory to Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from server import SearchFusionServer


def main():
    """Main entry point - start Search Fusion MCP Server"""
    server = SearchFusionServer()
    server.run()


if __name__ == "__main__":
    main()

```

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp/pyproject.toml`

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[project]
name = "search-fusion-mcp"
version = "3.0.3"
description = " High-Availability Multi-Engine Search Aggregation MCP Server with Enhanced Proxy Auto-Detection"
readme = "README.md"
license = {file = "LICENSE"}
authors = [
    {name = "Search Fusion Team", email = "contact@searchfusion.dev"}
]
maintainers = [
    {name = "Search Fusion Team", email = "contact@searchfusion.dev"}
]
keywords = [
    "mcp", "search", "aggregation", "ai", "llm", "jina", "google", "serper",
    "duckduckgo", "bing", "baidu", "exa", "wikipedia", "web-scraping",
    "high-availability", "failover", "multi-engine"
]
classifiers = [
    "Development Status :: 5 - Production/Stable",
    "Intended Audience :: Developers",
    "License :: OSI Approved :: MIT License",
    "Operating System :: OS Independent",
    "Programming Language :: Python :: 3",
    "Programming Language :: Python :: 3.8",
    "Programming Language :: Python :: 3.9",
    "Programming Language :: Python :: 3.10",
    "Programming Language :: Python :: 3.11",
    "Programming Language :: Python :: 3.12",
    "Topic :: Internet :: WWW/HTTP :: Indexing/Search",
    "Topic :: Software Development :: Libraries :: Python Modules",
    "Topic :: Text Processing :: Indexing",
]
requires-python = ">=3.8"
dependencies = [
    "fastapi>=0.95.1",
    "uvicorn>=0.22.0",
    "httpx>=0.24.1",
    "pydantic>=2.0.0",
    "python-dotenv>=1.0.0",
    "mcp>=0.1.0",
    "duckduckgo_search>=3.9.5",
    "backoff>=2.2.1",
    "beautifulsoup4>=4.12.2",
    "loguru>=0.7.0",
    "rich>=13.7.0",
    "exa-py>=0.6.0",
    "wikipedia>=1.4.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.4.3",
    "pytest-asyncio>=0.21.1",
    "black>=23.0.0",
    "flake8>=6.0.0",
    "mypy>=1.0.0",
]
all = [
    "pytest>=7.4.3",
    "pytest-asyncio>=0.21.1",
    "black>=23.0.0",
    "flake8>=6.0.0",
    "mypy>=1.0.0",
]

[project.urls]
Homepage = "https://github.com/sailaoda/search-fusion-mcp"
Documentation = "https://github.com/sailaoda/search-fusion-mcp/blob/main/README.md"
Repository = "https://github.com/sailaoda/search-fusion-mcp"
"Bug Tracker" = "https://github.com/sailaoda/search-fusion-mcp/issues"
Changelog = "https://github.com/sailaoda/search-fusion-mcp/blob/main/CHANGELOG.md"

[project.scripts]
search-fusion-mcp = "src.main:main"

[tool.setuptools]
packages = ["src"]
include-package-data = true

[tool.setuptools.package-data]
"*" = ["*.md", "*.txt", "*.json", "*.template"]

[tool.black]
line-length = 100
target-version = ['py38']
include = '\.pyi?$'
extend-exclude = '''
/(
  # directories
  \.eggs
  | \.git
  | \.hg
  | \.mypy_cache
  | \.tox
  | \.venv
  | build
  | dist
)/
'''

[tool.mypy]
python_version = "3.8"
warn_return_any = true
warn_unused_configs = true
disallow_untyped_defs = true

[tool.pytest.ini_options]
minversion = "6.0"
addopts = "-ra -q"
testpaths = [
    "tests",
]
python_files = [
    "test_*.py",
    "*_test.py",
]
asyncio_mode = "auto"

```

### `C:/Users/Admin/Documents/GitHub/AgentCPM/AgentCPM-Explore/AgentDock/agentdock-node-full/mcp_servers/search-fusion-mcp/README.md`

```
#  Search Fusion MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![FastMCP](https://img.shields.io/badge/MCP-FastMCP-green.svg)](https://github.com/jlowin/fastmcp)
[![Version](https://img.shields.io/badge/version-3.0.0-brightgreen.svg)](https://github.com/sailaoda/search-fusion-mcp/releases)
[![Concurrency](https://img.shields.io/badge/concurrency-supported-blue.svg)](https://github.com/sailaoda/search-fusion-mcp)

** [中文文档](README_zh.md)**

A **High-Availability Multi-Engine Search Aggregation MCP Server** providing intelligent failover, unified API, and LLM-optimized content processing. Search Fusion integrates multiple search engines with smart priority-based routing and automatic failover mechanisms.

> **🆕 What's New in v3.0.0:** Major concurrency upgrade! Enhanced multi-threading support with thread-safe operations, intelligent connection pooling, and semaphore-based request limiting. Now supports 50+ concurrent searches without race conditions or data corruption!

## * Features

###  Multi-Engine [[Integration]]
- **Google Search** - Premium performance with API key
- **Serper Search** - Google search alternative with advanced features
- **Jina AI Search** - AI-powered search with intelligent content processing
- **DuckDuckGo** - Free search, no API key required
- **Exa Search** - AI-powered semantic search
- **Bing Search** - Microsoft search API
- **Baidu Search** - Chinese search engine

###  Advanced Features
- **Intelligent Failover** - Automatic engine switching on failures or rate limits
- **Priority-Based Routing** - Smart engine selection based on availability and performance
- **Unified Response Format** - Consistent JSON structure across all engines
- **Rate Limiting Protection** - Built-in cooldown mechanisms
- ** High Concurrency Support** - Thread-safe operations with connection pooling
- ** Performance Optimization** - Async operations with semaphore-based concurrency control
- **LLM-Optimized Content** - Advanced web content fetching with pagination support
- **Wikipedia [[Integration]]** - Dedicated Wikipedia search tool
- **Wayback Machine** - Historical webpage archive search
- **Environment Variable Configuration** - Pure MCP configuration without config files
- ** Enhanced Proxy Auto-Detection** - Intelligent proxy detection with zero configuration

###  Monitoring & Analytics
- Real-time engine [[status]] monitoring
- Success rate tracking
- Error handling and recovery
- Performance metrics

###  Concurrency & Performance
- **Thread-Safe Operations** - All engine statistics and state updates are protected by async locks
- **Connection Pooling** - Shared HTTP client with configurable connection limits (max 100 connections)
- **Semaphore Control** - Concurrent request limiting (max 30 simultaneous searches)
- **Timeout Protection** - 60-second search timeout prevents request accumulation
- **Resource Management** - Efficient memory usage with automatic connection cleanup
- **Race Condition Prevention** - Double-checked locking for SearchManager initialization

## ️ Architecture

```
Search Fusion MCP Server
├──  Configuration Manager     # MCP environment variable handling
├──  Search Manager           # Multi-engine orchestration with concurrency control
├──  Concurrency Layer        # Thread-safe operations & performance optimization
│   ├── AsyncLock Protection    # Thread-safe state updates
│   ├── HTTP Connection Pool    # Shared client with connection limits
│   ├── Semaphore Control      # Concurrent request limiting (max 30)
│   └── Timeout Management     # 60s timeout protection
├──  Engine Implementations   # Individual search engines
│   ├── GoogleSearch            # Google Custom Search
│   ├── SerperSearch           # Serper API
│   ├── JinaSearch             # Jina AI Search
│   ├── DuckDuckGoSearch       # DuckDuckGo
│   ├── ExaSearch              # Exa AI
│   ├── BingSearch             # Bing API
│   └── BaiduSearch            # Baidu API
├── ️ Advanced Fetcher         # Multi-method web scraping
└──  MCP Server              # FastMCP integration
```

##  Quick Start

### Installation

#### Option 1: Install from PyPI (Recommended)
```bash
pip install search-fusion-mcp
```

#### Option 2: Install from Source
```bash
git clone https://github.com/sailaoda/search-fusion-mcp.git
cd search-fusion-mcp
pip install -e .
```

##  Enhanced Proxy Auto-Detection (New in v2.0!)

Search Fusion now features **intelligent proxy auto-detection** inspired by [concurrent-browser-mcp](https://github.com/sailaoda/concurrent-browser-mcp), providing seamless proxy support with **zero configuration**!

### * Three-Layer Detection Strategy

1. **Environment Variables** - Highest priority, checks `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`
2. **Port Scanning** - Scans common proxy ports using socket connection testing
3. **System Proxy** - Detects OS-level proxy settings (macOS supported)

###  Supported Proxy Ports (Priority Order)
- **7890** - Clash default port
- **1087** - V2Ray common port  
- **8080** - Generic HTTP proxy port
- **3128** - Squid proxy default port
- **8888** - Other proxy software port
- **10809** - V2Ray SOCKS port
- **20171** - Additional proxy port

###  Zero Configuration Usage

**Just run directly** - proxy will be auto-detected:
```bash
search-fusion-mcp
```

**Manual override** (if needed):
```bash
env HTTP_PROXY="http://your-proxy:port" search-fusion-mcp
```

###  Detection Process
```
 Checking environment variables...
 Scanning proxy ports: [7890, 1087, 8080, ...]
[x] Local proxy port detected: 7890
 Auto-detected proxy: http://127.0.0.1:7890
```

### 🆚 Comparison with concurrent-browser-mcp

| Feature | Search-Fusion | concurrent-browser-mcp |
|---------|---------------|------------------------|
| **Detection Method** | [x] Env vars -> Port scan -> System proxy | [x] Same strategy |
| **Port List** | [x] 7 common ports | [x] 7 common ports |
| **Connection Test** | [x] Socket testing | [x] Socket testing |
| **Timeout** | [x] 3 seconds | [x] 3 seconds |
| **macOS Support** | [x] networksetup | [x] networksetup |
| **Language** | Python | TypeScript |

### MCP Integration

#### Environment Variable Configuration

Search Fusion uses **pure MCP environment variable configuration** without requiring config files.

**MCP Client Configuration (PyPI Installation):**
```json
{
  "mcp": {
    "mcpServers": {
      "search-fusion": {
        "command": "search-fusion-mcp",
        "env": {
          "GOOGLE_API_KEY": "your_google_api_key",
          "GOOGLE_CSE_ID": "your_google_cse_id",
          "SERPER_API_KEY": "your_serper_api_key",
          "JINA_API_KEY": "your_jina_api_key",
          "EXA_API_KEY": "your_exa_api_key",
          "BING_API_KEY": "your_bing_api_key",
          "BAIDU_API_KEY": "your_baidu_api_key",
          "BAIDU_SECRET_KEY": "your_baidu_secret_key"
        }
      }
    }
  }
}
```

**MCP Client Configuration (Source Installation):**
```json
{
  "mcp": {
    "mcpServers": {
      "search-fusion": {
        "command": "python",
        "args": ["-m", "src.main"],
        "cwd": "/path/to/your/search-fusion-mcp",
        "env": {
          "GOOGLE_API_KEY": "your_google_api_key",
          "GOOGLE_CSE_ID": "your_google_cse_id",
          "SERPER_API_KEY": "your_serper_api_key",
          "JINA_API_KEY": "your_jina_api_key",
          "EXA_API_KEY": "your_exa_api_key",
          "BING_API_KEY": "your_bing_api_key",
          "BAIDU_API_KEY": "your_baidu_api_key",
          "BAIDU_SECRET_KEY": "your_baidu_secret_key"
        }
      }
    }
  }
}
```

#### Supported Environment Variables

| Search Engine | Environment Variable | Required | Description | Get API Key |
|--------------|---------------------|----------|-------------|-------------|
| Google | `GOOGLE_API_KEY`<br>`GOOGLE_CSE_ID` | Both needed | Google Custom Search API | [Get API Key](https://developers.google.com/custom-search/v1/introduction) |
| Serper | `SERPER_API_KEY` | API key | Serper Google Search API | [Get API Key](https://serper.dev/) |
| Jina AI | `JINA_API_KEY` | API key | Jina AI Search API | [Get API Key](https://jina.ai/) |
| Bing | `BING_API_KEY` | API key | Microsoft Bing Search API | [Get API Key](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) |
| Baidu | `BAIDU_API_KEY`<br>`BAIDU_SECRET_KEY` | Both needed | Baidu Search API | [Get API Key](https://ai.baidu.com/) |
| Exa | `EXA_API_KEY` | API key | Exa AI Search API | [Get API Key](https://exa.ai/) |
| DuckDuckGo | None required | - | Free search, no API key needed | - |

**Alternative Variable Names:**
```bash
# Google
GOOGLE_SEARCH_API_KEY    # Alternative to GOOGLE_API_KEY
GOOGLE_SEARCH_CSE_ID     # Alternative to GOOGLE_CSE_ID

# Serper
SERPER_SEARCH_API_KEY    # Alternative to SERPER_API_KEY

# Others follow similar pattern...
```

### Engine Priority

Search engines are prioritized automatically:
1. **Google Search** (Priority 1) - Premium performance with API key
2. **Serper Search** (Priority 1) - Google alternative with advanced features
3. **Jina AI Search** (Priority 1.5) - AI-powered search with optional API key for advanced features
4. **DuckDuckGo** (Priority 2) - Free, no API key required
5. **Exa Search** (Priority 2) - AI-powered search with API key
6. **Bing Search** (Priority 3) - Microsoft search API
7. **Baidu Search** (Priority 3) - Chinese search engine

## ️ MCP Tools

![Tools Overview](assets/tools.png)

### 1. `search`
Perform web searches with intelligent engine selection and failover.

**Parameters:**
- `query` (required): Search query terms
- `num_results` (default: 10): Number of results to return
- `engine` (default: "auto"): Engine preference
  - `"auto"`: Automatic engine selection (recommended)
  - `"google"`: Prefer Google Search
  - `"serper"`: Prefer Serper Search
  - `"jina"`: Prefer Jina AI Search
  - `"duckduckgo"`: Prefer DuckDuckGo
  - `"exa"`: Prefer Exa Search
  - `"bing"`: Prefer Bing Search
  - `"baidu"`: Prefer Baidu Search

### 2. `fetch_url`
Fetch and process web content with intelligent pagination and multi-method fallback.

**Parameters:**
- `url` (required): Web URL to fetch
- `use_jina` (default: true): Whether to prioritize Jina Reader for LLM-optimized content
- `with_image_alt` (default: false): Whether to generate alt text for images
- `max_length` (default: 50000): Maximum content length per page (auto-paginate if exceeded)
- `page_number` (default: 1): Retrieve specific page from previously fetched content

**Features:**
- **Intelligent Multi-Method Fallback**: Tries Jina Reader -> Serper Scrape -> Direct HTTP
- **Automatic Pagination**: Splits large content into manageable pages
- **Concurrent-Safe Caching**: Unique page IDs prevent conflicts in high-concurrency scenarios
- **LLM-Optimized Content**: Clean markdown format optimized for AI processing

### 3. `get_available_engines`
Get current [[status]] and availability of all search engines.

### 4. `search_wikipedia`
Search Wikipedia articles for entities, people, places, concepts, etc.

**Parameters:**
- `entity` (required): Entity to search for
- `first_sentences` (default: 10): Number of sentences to return (0 for full content)

### 5. `search_archived_webpage`
Search archived versions of websites using Wayback Machine.

**Parameters:**
- `url` (required): Website URL to search
- `year` (optional): Target year
- `month` (optional): Target month
- `day` (optional): Target day



##  API Examples

### Basic Search
```python
# Automatic engine selection
result = await search("artificial intelligence trends 2024")

# Prefer specific engine
result = await search("machine learning", engine="google")
```

### Advanced Web Fetching
```python
# Fetch with intelligent pagination
result = await fetch_url("https://example.com/long-article")

# If content is paginated, get additional pages
if result.get("is_paginated"):
    page_2 = await get_page(result["page_id"], 2)
```

### Wikipedia Search
```python
# Get Wikipedia summary
result = await search_wikipedia("Python programming language")

# Get full article
result = await search_wikipedia("Quantum computing", first_sentences=0)
```

##  Development

### Development [[Setup]]
```bash
git clone https://github.com/sailaoda/search-fusion-mcp.git
cd search-fusion-mcp
pip install -r requirements.txt
pip install -e .
```

##  Configuration Guide

For detailed configuration instructions, see [Supported Environment Variables](#supported-environment-variables).

##  Performance

- **Latency**: Sub-second response times with caching
- **Availability**: 99.9% uptime with intelligent failover
- **Throughput**: Handles concurrent requests efficiently
- **Scalability**: Efficient resource utilization and concurrent processing

###  Concurrency Benchmarks

**Tested Performance (v3.0.0+):**
- [x] **50+ concurrent searches** - No race conditions or data corruption
- [x] **Thread-safe statistics** - Accurate request counting and error tracking
-  **Connection pooling** - Efficient HTTP resource management
- ️ **Timeout protection** - 60s per request prevents system overload
-  **Real-time monitoring** - Live engine status during high load

**Recommended Limits:**
- **Concurrent searches**: 10 (configurable via semaphore)
- **Connection pool**: 100 max connections, 20 keep-alive
- **Request timeout**: 60 seconds
- **Memory usage**: ~50MB baseline + ~2MB per concurrent request

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Rate Limiting & Best Practices

- **Google Search**: 100 queries/day (free tier)
- **Serper API**: Varies by plan
- **Jina AI**: Rate limits apply based on subscription
- **DuckDuckGo**: No official limits, but use responsibly
- **Other engines**: Check respective API documentation

Always implement appropriate delays and respect rate limits to ensure sustainable usage.

##  Support

-  [Documentation](https://github.com/sailaoda/search-fusion-mcp)
-  [Issue Tracker](https://github.com/sailaoda/search-fusion-mcp/issues)
-  [Discussions](https://github.com/sailaoda/search-fusion-mcp/discussions)

---

**Made with <3️ for the MCP community**

```


## Original README

#  Search Fusion MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![FastMCP](https://img.shields.io/badge/MCP-FastMCP-green.svg)](https://github.com/jlowin/fastmcp)
[![Version](https://img.shields.io/badge/version-3.0.0-brightgreen.svg)](https://github.com/sailaoda/search-fusion-mcp/releases)
[![Concurrency](https://img.shields.io/badge/concurrency-supported-blue.svg)](https://github.com/sailaoda/search-fusion-mcp)

** [中文文档](README_zh.md)**

A **High-Availability Multi-Engine Search Aggregation MCP Server** providing intelligent failover, unified API, and LLM-optimized content processing. Search Fusion integrates multiple search engines with smart priority-based routing and automatic failover mechanisms.

> **🆕 What's New in v3.0.0:** Major concurrency upgrade! Enhanced multi-threading support with thread-safe operations, intelligent connection pooling, and semaphore-based request limiting. Now supports 50+ concurrent searches without race conditions or data corruption!

## * Features

###  Multi-Engine Integration
- **Google Search** - Premium performance with API key
- **Serper Search** - Google search alternative with advanced features
- **Jina AI Search** - AI-powered search with intelligent content processing
- **DuckDuckGo** - Free search, no API key required
- **Exa Search** - AI-powered semantic search
- **Bing Search** - Microsoft search API
- **Baidu Search** - Chinese search engine

###  Advanced Features
- **Intelligent Failover** - Automatic engine switching on failures or rate limits
- **Priority-Based Routing** - Smart engine selection based on availability and performance
- **Unified Response Format** - Consistent JSON structure across all engines
- **Rate Limiting Protection** - Built-in cooldown mechanisms
- ** High Concurrency Support** - Thread-safe operations with connection pooling
- ** Performance Optimization** - Async operations with semaphore-based concurrency control
- **LLM-Optimized Content** - Advanced web content fetching with pagination support
- **Wikipedia Integration** - Dedicated Wikipedia search tool
- **Wayback Machine** - Historical webpage archive search
- **Environment Variable Configuration** - Pure MCP configuration without config files
- ** Enhanced Proxy Auto-Detection** - Intelligent proxy detection with zero configuration

###  Monitoring & Analytics
- Real-time engine status monitoring
- Success rate tracking
- Error handling and recovery
- Performance metrics

###  Concurrency & Performance
- **Thread-Safe Operations** - All engine statistics and state updates are protected by async locks
- **Connection Pooling** - Shared HTTP client with configurable connection limits (max 100 connections)
- **Semaphore Control** - Concurrent request limiting (max 30 simultaneous searches)
- **Timeout Protection** - 60-second search timeout prevents request accumulation
- **Resource Management** - Efficient memory usage with automatic connection cleanup
- **Race Condition Prevention** - Double-checked locking for SearchManager initialization

## ️ Architecture

```
Search Fusion MCP Server
├──  Configuration Manager     # MCP environment variable handling
├──  Search Manager           # Multi-engine orchestration with concurrency control
├──  Concurrency Layer        # Thread-safe operations & performance optimization
│   ├── AsyncLock Protection    # Thread-safe state updates
│   ├── HTTP Connection Pool    # Shared client with connection limits
│   ├── Semaphore Control      # Concurrent request limiting (max 30)
│   └── Timeout Management     # 60s timeout protection
├──  Engine Implementations   # Individual search engines
│   ├── GoogleSearch            # Google Custom Search
│   ├── SerperSearch           # Serper API
│   ├── JinaSearch             # Jina AI Search
│   ├── DuckDuckGoSearch       # DuckDuckGo
│   ├── ExaSearch              # Exa AI
│   ├── BingSearch             # Bing API
│   └── BaiduSearch            # Baidu API
├── ️ Advanced Fetcher         # Multi-method web scraping
└──  MCP Server              # FastMCP [[integration]]
```

##  Quick Start

### Installation

#### Option 1: Install from PyPI (Recommended)
```bash
pip install search-fusion-mcp
```

#### Option 2: Install from Source
```bash
git clone https://github.com/sailaoda/search-fusion-mcp.git
cd search-fusion-mcp
pip install -e .
```

##  Enhanced Proxy Auto-Detection (New in v2.0!)

Search Fusion now features **intelligent proxy auto-detection** inspired by [concurrent-browser-mcp](https://github.com/sailaoda/concurrent-browser-mcp), providing seamless proxy support with **zero configuration**!

### * Three-Layer Detection Strategy

1. **Environment Variables** - Highest priority, checks `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`
2. **Port Scanning** - Scans common proxy ports using socket connection testing
3. **System Proxy** - Detects OS-level proxy settings (macOS supported)

###  Supported Proxy Ports (Priority Order)
- **7890** - Clash default port
- **1087** - V2Ray common port  
- **8080** - Generic HTTP proxy port
- **3128** - Squid proxy default port
- **8888** - Other proxy software port
- **10809** - V2Ray SOCKS port
- **20171** - Additional proxy port

###  Zero Configuration Usage

**Just run directly** - proxy will be auto-detected:
```bash
search-fusion-mcp
```

**Manual override** (if needed):
```bash
env HTTP_PROXY="http://your-proxy:port" search-fusion-mcp
```

###  Detection Process
```
 Checking environment variables...
 Scanning proxy ports: [7890, 1087, 8080, ...]
[x] Local proxy port detected: 7890
 Auto-detected proxy: http://127.0.0.1:7890
```

### 🆚 Comparison with concurrent-browser-mcp

| Feature | Search-Fusion | concurrent-browser-mcp |
|---------|---------------|------------------------|
| **Detection Method** | [x] Env vars -> Port scan -> System proxy | [x] Same strategy |
| **Port List** | [x] 7 common ports | [x] 7 common ports |
| **Connection Test** | [x] Socket testing | [x] Socket testing |
| **Timeout** | [x] 3 seconds | [x] 3 seconds |
| **macOS Support** | [x] networksetup | [x] networksetup |
| **Language** | Python | TypeScript |

### MCP Integration

#### Environment Variable Configuration

Search Fusion uses **pure MCP environment variable configuration** without requiring config files.

**MCP Client Configuration (PyPI Installation):**
```json
{
  "mcp": {
    "mcpServers": {
      "search-fusion": {
        "command": "search-fusion-mcp",
        "env": {
          "GOOGLE_API_KEY": "your_google_api_key",
          "GOOGLE_CSE_ID": "your_google_cse_id",
          "SERPER_API_KEY": "your_serper_api_key",
          "JINA_API_KEY": "your_jina_api_key",
          "EXA_API_KEY": "your_exa_api_key",
          "BING_API_KEY": "your_bing_api_key",
          "BAIDU_API_KEY": "your_baidu_api_key",
          "BAIDU_SECRET_KEY": "your_baidu_secret_key"
        }
      }
    }
  }
}
```

**MCP Client Configuration (Source Installation):**
```json
{
  "mcp": {
    "mcpServers": {
      "search-fusion": {
        "command": "python",
        "args": ["-m", "src.main"],
        "cwd": "/path/to/your/search-fusion-mcp",
        "env": {
          "GOOGLE_API_KEY": "your_google_api_key",
          "GOOGLE_CSE_ID": "your_google_cse_id",
          "SERPER_API_KEY": "your_serper_api_key",
          "JINA_API_KEY": "your_jina_api_key",
          "EXA_API_KEY": "your_exa_api_key",
          "BING_API_KEY": "your_bing_api_key",
          "BAIDU_API_KEY": "your_baidu_api_key",
          "BAIDU_SECRET_KEY": "your_baidu_secret_key"
        }
      }
    }
  }
}
```

#### Supported Environment Variables

| Search Engine | Environment Variable | Required | Description | Get API Key |
|--------------|---------------------|----------|-------------|-------------|
| Google | `GOOGLE_API_KEY`<br>`GOOGLE_CSE_ID` | Both needed | Google Custom Search API | [Get API Key](https://developers.google.com/custom-search/v1/introduction) |
| Serper | `SERPER_API_KEY` | API key | Serper Google Search API | [Get API Key](https://serper.dev/) |
| Jina AI | `JINA_API_KEY` | API key | Jina AI Search API | [Get API Key](https://jina.ai/) |
| Bing | `BING_API_KEY` | API key | Microsoft Bing Search API | [Get API Key](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api) |
| Baidu | `BAIDU_API_KEY`<br>`BAIDU_SECRET_KEY` | Both needed | Baidu Search API | [Get API Key](https://ai.baidu.com/) |
| Exa | `EXA_API_KEY` | API key | Exa AI Search API | [Get API Key](https://exa.ai/) |
| DuckDuckGo | None required | - | Free search, no API key needed | - |

**Alternative Variable Names:**
```bash
# Google
GOOGLE_SEARCH_API_KEY    # Alternative to GOOGLE_API_KEY
GOOGLE_SEARCH_CSE_ID     # Alternative to GOOGLE_CSE_ID

# Serper
SERPER_SEARCH_API_KEY    # Alternative to SERPER_API_KEY

# Others follow similar pattern...
```

### Engine Priority

Search engines are prioritized automatically:
1. **Google Search** (Priority 1) - Premium performance with API key
2. **Serper Search** (Priority 1) - Google alternative with advanced features
3. **Jina AI Search** (Priority 1.5) - AI-powered search with optional API key for advanced features
4. **DuckDuckGo** (Priority 2) - Free, no API key required
5. **Exa Search** (Priority 2) - AI-powered search with API key
6. **Bing Search** (Priority 3) - Microsoft search API
7. **Baidu Search** (Priority 3) - Chinese search engine

## ️ MCP Tools

![Tools Overview](assets/tools.png)

### 1. `search`
Perform web searches with intelligent engine selection and failover.

**Parameters:**
- `query` (required): Search query terms
- `num_results` (default: 10): Number of results to return
- `engine` (default: "auto"): Engine preference
  - `"auto"`: Automatic engine selection (recommended)
  - `"google"`: Prefer Google Search
  - `"serper"`: Prefer Serper Search
  - `"jina"`: Prefer Jina AI Search
  - `"duckduckgo"`: Prefer DuckDuckGo
  - `"exa"`: Prefer Exa Search
  - `"bing"`: Prefer Bing Search
  - `"baidu"`: Prefer Baidu Search

### 2. `fetch_url`
Fetch and process web content with intelligent pagination and multi-method fallback.

**Parameters:**
- `url` (required): Web URL to fetch
- `use_jina` (default: true): Whether to prioritize Jina Reader for LLM-optimized content
- `with_image_alt` (default: false): Whether to generate alt text for images
- `max_length` (default: 50000): Maximum content length per page (auto-paginate if exceeded)
- `page_number` (default: 1): Retrieve specific page from previously fetched content

**Features:**
- **Intelligent Multi-Method Fallback**: Tries Jina Reader -> Serper Scrape -> Direct HTTP
- **Automatic Pagination**: Splits large content into manageable pages
- **Concurrent-Safe Caching**: Unique page IDs prevent conflicts in high-concurrency scenarios
- **LLM-Optimized Content**: Clean markdown format optimized for AI processing

### 3. `get_available_engines`
Get current [[status]] and availability of all search engines.

### 4. `search_wikipedia`
Search Wikipedia articles for entities, people, places, concepts, etc.

**Parameters:**
- `entity` (required): Entity to search for
- `first_sentences` (default: 10): Number of sentences to return (0 for full content)

### 5. `search_archived_webpage`
Search archived versions of websites using Wayback Machine.

**Parameters:**
- `url` (required): Website URL to search
- `year` (optional): Target year
- `month` (optional): Target month
- `day` (optional): Target day



##  API Examples

### Basic Search
```python
# Automatic engine selection
result = await search("artificial intelligence trends 2024")

# Prefer specific engine
result = await search("machine learning", engine="google")
```

### Advanced Web Fetching
```python
# Fetch with intelligent pagination
result = await fetch_url("https://example.com/long-article")

# If content is paginated, get additional pages
if result.get("is_paginated"):
    page_2 = await get_page(result["page_id"], 2)
```

### Wikipedia Search
```python
# Get Wikipedia summary
result = await search_wikipedia("Python programming language")

# Get full article
result = await search_wikipedia("Quantum computing", first_sentences=0)
```

##  Development

### Development [[Setup]]
```bash
git clone https://github.com/sailaoda/search-fusion-mcp.git
cd search-fusion-mcp
pip install -r requirements.txt
pip install -e .
```

##  Configuration Guide

For detailed configuration instructions, see [Supported Environment Variables](#supported-environment-variables).

##  Performance

- **Latency**: Sub-second response times with caching
- **Availability**: 99.9% uptime with intelligent failover
- **Throughput**: Handles concurrent requests efficiently
- **Scalability**: Efficient resource utilization and concurrent processing

###  Concurrency Benchmarks

**Tested Performance (v3.0.0+):**
- [x] **50+ concurrent searches** - No race conditions or data corruption
- [x] **Thread-safe statistics** - Accurate request counting and error tracking
-  **Connection pooling** - Efficient HTTP resource management
- ️ **Timeout protection** - 60s per request prevents system overload
-  **Real-time monitoring** - Live engine status during high load

**Recommended Limits:**
- **Concurrent searches**: 10 (configurable via semaphore)
- **Connection pool**: 100 max connections, 20 keep-alive
- **Request timeout**: 60 seconds
- **Memory usage**: ~50MB baseline + ~2MB per concurrent request

##  Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Rate Limiting & Best Practices

- **Google Search**: 100 queries/day (free tier)
- **Serper API**: Varies by plan
- **Jina AI**: Rate limits apply based on subscription
- **DuckDuckGo**: No official limits, but use responsibly
- **Other engines**: Check respective API documentation

Always implement appropriate delays and respect rate limits to ensure sustainable usage.

##  Support

-  [Documentation](https://github.com/sailaoda/search-fusion-mcp)
-  [Issue Tracker](https://github.com/sailaoda/search-fusion-mcp/issues)
-  [Discussions](https://github.com/sailaoda/search-fusion-mcp/discussions)

---

**Made with <3️ for the MCP community**



## See also

- [[10.12 MCP]] — sector index
- [[pentest-ai-mcp]]
- [[omniwire-mcp]]
- [[ponytail-mcp]]
- [[supermemory-mcp]]
- [[mcp-code-executor]]
