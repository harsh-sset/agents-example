import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { ResearchPipelineModel } from "./model";
import mongoose from "mongoose";

export const findOpportunityTool = createTool({
  id: 'find-opportunity',
  description: 'Find an opportunity for a given id',
  inputSchema: z.object({
    id: z.string(),
  }),
  execute: async ({ context }) => {
    const { id } = context;
    const _id = new mongoose.Types.ObjectId(id);
    const opportunity = await ResearchPipelineModel.findById(_id);
    return opportunity?.output;
  },
});