import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { findOpportunityTool } from "../tools/deep-research";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const opportunityAgent = new Agent({
  id: 'opportunity-agent',
  name: 'Opportunity Agent',
  instructions: `You are an AI assistant helping users understand and explore business opportunities for a given opportunity identified earlier for DuPont Chemicals. 
    The opportunity in focus is "6896243b27eb53331dc01f1e".

    If the users query is not related to the opportunity, please say "I'm sorry, I can only answer questions about the opportunity."
    A question is valid if it is related to the opportunity and the selection, question may include querying risk, market, potential buyer, chemical details, implementation details, etc.
    Example chemicals are Silicon, PDMS, HTV, etc.
    Please help users understand this opportunity, answer their questions, and provide insights based on the available data only. Do not make up any information.`,
  tools: { findOpportunityTool },
  model: openai('gpt-4o'),
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
});