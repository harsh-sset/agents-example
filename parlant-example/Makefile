.PHONY: help install install-dev run run-agent test lint format type-check clean dev

# Default target
help:
	@echo "Available commands:"
	@echo "  install      Install dependencies"
	@echo "  install-dev  Install with development dependencies"
	@echo "  run          Run the basic application"
	@echo "  run-agent    Run the Parlant agent example"
	@echo "  test         Run tests with pytest"
	@echo "  lint         Run linter (ruff)"
	@echo "  format       Format code with black"
	@echo "  type-check   Run type checker (mypy)"
	@echo "  clean        Clean cache and temporary files"
	@echo "  dev          Install dev deps + run all checks (lint, format, type-check, test)"

# Installation commands
install:
	uv sync

install-dev:
	uv sync --dev

# Run the application
run:
	uv run parlant-example

# Run the Parlant agent example
run-agent:
	uv run python -m src.agent_example

# Development commands
test:
	uv run pytest

lint:
	uv run ruff check .

format:
	uv run black .

type-check:
	uv run mypy src/

# Combined development workflow
dev: install-dev format lint type-check test
	@echo "✅ All checks passed!"

# Clean up
clean:
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache/
	rm -rf .mypy_cache/
	rm -rf .ruff_cache/
