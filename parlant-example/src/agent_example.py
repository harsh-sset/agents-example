"""
Parlant Agent Example - Based on official documentation
https://www.parlant.io/docs/quickstart/installation/

This example creates a car dealership agent named Otto Carmen
with basic greeting guidelines.
"""

import asyncio
import os
from dotenv import load_dotenv
import parlant.sdk as p


async def main():
    """Create and run a Parlant agent example."""
    # Load environment variables
    load_dotenv()

    # Check if API key is configured
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or api_key == "your_openai_api_key_here":
        print("⚠️  Warning: No valid OpenAI API key found in .env file")
        print("   Please add your API key to the .env file for full functionality")
        print("   The server will still start but won't be able to process requests\n")

    async with p.Server() as server:
        # Create the agent
        agent = await server.create_agent(
            name="Otto Carmen",
            description="You work at a car dealership",
            # model='gpt-5'
        )

        # Add a guideline for greetings
        await agent.create_guideline(
            # This is when the guideline will be triggered
            condition="the customer greets you",
            # This is what the guideline instructs the agent to do
            action="offer a refreshing drink",
        )

        # Add another guideline for car inquiries
        await agent.create_guideline(
            condition="the customer asks about cars or vehicles",
            action="ask about their budget and preferences, then recommend suitable vehicles from our inventory",
        )

        # Add a guideline for pricing questions
        await agent.create_guideline(
            condition="the customer asks about prices or financing",
            action="explain our competitive pricing and financing options, and offer to schedule a meeting with our finance team",
        )


if __name__ == "__main__":
    asyncio.run(main())
