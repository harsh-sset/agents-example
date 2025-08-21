# Parlant Example

A Python project built with [uv](https://docs.astral.sh/uv/) that demonstrates [Parlant](https://www.parlant.io/) - an open-source Agentic Behavior Modeling Engine for LLM agents.

## Development

This project uses uv for dependency management.

### Setup

1. Install uv if you haven't already:

   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

2. Install the project and its dependencies:

   ```bash
   uv sync --dev
   ```

### Configuration

1. Copy the environment template:

   ```bash
   cp .env.example .env
   ```

2. Add your OpenAI API key to `.env`:

   ```bash
   OPENAI_API_KEY=your_actual_api_key_here
   ```

### Running the application

**Basic application:**

```bash
uv run parlant-example
# or: make run
```

**Parlant Agent Example:**

```bash
uv run python -m agent_example
# or: make run-agent
```

The agent example creates a car dealership assistant named "Otto Carmen" with behavioral guidelines. Visit `http://localhost:8800` to interact with the agent once it's running.

### Quick Commands (Makefile)

For convenience, you can use the provided Makefile:

```bash
make help         # Show all available commands
make install-dev  # Install with development dependencies
make run          # Run the basic application
make run-agent    # Run the Parlant agent example
make test         # Run tests
make lint         # Run linter
make format       # Format code
make type-check   # Run type checker
make dev          # Run all checks (format, lint, type-check, test)
make clean        # Clean cache and temporary files
```

### Development tools (manual commands)

- **Testing**: `uv run pytest`
- **Code formatting**: `uv run black .`
- **Linting**: `uv run ruff check .`
- **Type checking**: `uv run mypy src/`

### Installing development dependencies

```bash
uv sync --dev
```

## What is Parlant?

[Parlant](https://www.parlant.io/) is an open-source **Agentic Behavior Modeling Engine** for LLM agents that helps developers create customer-engaging, business-aligned conversational agents with:

- **Journeys**: Define clear customer journeys and agent responses
- **Behavioral Guidelines**: Craft agent behavior that matches contextually
- **Tool Use**: Attach external APIs and backend services
- **Domain Adaptation**: Teach domain-specific terminology
- **Canned Responses**: Eliminate hallucinations with response templates
- **Explainability**: Understand guideline matching and execution

## Examples Included

### 1. Basic Application (`src/main.py`)

Simple application entry point with environment variable loading.

### 2. Parlant Agent Example (`src/agent_example.py`)

Complete car dealership agent implementation based on the [official Parlant documentation](https://www.parlant.io/docs/quickstart/installation/). Features:

- **Otto Carmen**: A car dealership assistant
- **Behavioral Guidelines**: Greeting responses, car inquiries, pricing questions
- **Interactive Web Interface**: Test at `http://localhost:8800`

## Project Structure

```
parlant/
├── src/
│   ├── __init__.py
│   ├── main.py           # Basic application entry point
│   └── agent_example.py  # Parlant agent demonstration
├── .env.example              # Environment variables template
├── .env                      # Your environment variables (gitignored)
├── pyproject.toml           # Project configuration
├── Makefile                 # Development commands
├── README.md
└── uv.lock
```

## Learn More

- 📚 [Parlant Documentation](https://www.parlant.io/docs/quickstart/installation/)
- 🔧 [Parlant GitHub Repository](https://github.com/emcie-co/parlant)
- ⚡ [uv Package Manager](https://docs.astral.sh/uv/)
