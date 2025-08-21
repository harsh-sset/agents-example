"""Main module for parlant."""

import os
from dotenv import load_dotenv


def main():
    """Main entry point for the application."""
    # Load environment variables
    load_dotenv()
    
    print("Hello from parlant!")
    print("✨ Environment variables loaded from .env")
    print("\n💡 Available examples:")
    print("   🤖 Parlant Agent: python -m agent_example")
    print("   📖 Documentation: https://www.parlant.io/docs/quickstart/installation/")
    
    # Show API key status
    api_key = os.getenv('OPENAI_API_KEY')
    if api_key and api_key != 'your_openai_api_key_here':
        print("   ✅ OpenAI API Key: Configured")
    else:
        print("   ⚠️  OpenAI API Key: Not configured (check .env file)")


if __name__ == "__main__":
    main()
