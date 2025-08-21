# Makefile for mastra-example project

# Variables
NODE_VERSION := $(shell node -v | sed 's/v//')
PACKAGE_MANAGER := npm
PROJECT_NAME := research-agents

# Colors for output
GREEN := \033[0;32m
YELLOW := \033[1;33m
RED := \033[0;31m
NC := \033[0m # No Color

# Default target
.DEFAULT_GOAL := help

.PHONY: help install dev build start clean test lint type-check format setup

# Help target
help: ## Show this help message
	@echo "$(GREEN)Available commands:$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-15s$(NC) %s\n", $$1, $$2}'

# Setup and installation
install: ## Initial project setup
	@echo "$(GREEN)Setting up $(PROJECT_NAME)...$(NC)"
	@echo "$(GREEN)Current Node.js version: $(NODE_VERSION)$(NC)"
	$(PACKAGE_MANAGER) install
	@echo "$(GREEN)Setup complete!$(NC)"

# Development commands
dev: ## Start development server
	@echo "$(GREEN)Starting development server...$(NC)"
	$(PACKAGE_MANAGER) run dev

build: ## Build the project
	@echo "$(GREEN)Building project...$(NC)"
	$(PACKAGE_MANAGER) run build

start: ## Start production server
	@echo "$(GREEN)Starting production server...$(NC)"
	$(PACKAGE_MANAGER) run start

# Code quality
test: ## Run tests
	@echo "$(GREEN)Running tests...$(NC)"
	$(PACKAGE_MANAGER) test

lint: ## Run linting (if configured)
	@echo "$(YELLOW)Linting not configured in package.json$(NC)"

type-check: ## Run TypeScript type checking
	@echo "$(GREEN)Running TypeScript type check...$(NC)"
	npx tsc --noEmit

format: ## Format code (if configured)
	@echo "$(YELLOW)Code formatting not configured$(NC)"

# Cleanup
clean: ## Clean build artifacts and node_modules
	@echo "$(GREEN)Cleaning project...$(NC)"
	rm -rf dist/
	rm -rf node_modules/
	rm -f package-lock.json
	@echo "$(GREEN)Clean complete!$(NC)"

clean-cache: ## Clean npm cache
	@echo "$(GREEN)Cleaning npm cache...$(NC)"
	$(PACKAGE_MANAGER) cache clean --force

# Database and utilities
mongo-start: ## Start MongoDB (if installed locally)
	@echo "$(GREEN)Starting MongoDB...$(NC)"
	@which mongod > /dev/null && mongod --dbpath ./data/db || echo "$(RED)MongoDB not found. Please install MongoDB or use Docker.$(NC)"

# Docker commands (if using Docker)
docker-build: ## Build Docker image
	@echo "$(GREEN)Building Docker image...$(NC)"
	docker build -t $(PROJECT_NAME) .

docker-run: ## Run Docker container
	@echo "$(GREEN)Running Docker container...$(NC)"
	docker run -p 3000:3000 $(PROJECT_NAME)

# Utility commands
check-node: ## Check Node.js version
	@echo "$(GREEN)Node.js version:$(NC)"
	@node --version
	@echo "$(GREEN)NPM version:$(NC)"
	@npm --version

check-deps: ## Check for outdated dependencies
	@echo "$(GREEN)Checking for outdated dependencies...$(NC)"
	$(PACKAGE_MANAGER) outdated

update-deps: ## Update dependencies
	@echo "$(GREEN)Updating dependencies...$(NC)"
	$(PACKAGE_MANAGER) update

# Development workflow
dev-setup: install ## Complete development setup
	@echo "$(GREEN)Development setup complete!$(NC)"
	@echo "$(YELLOW)Run 'make dev' to start the development server$(NC)"

# Quick commands
q: dev ## Quick alias for dev
