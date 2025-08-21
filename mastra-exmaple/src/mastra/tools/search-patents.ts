
import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import { search } from "../../search/patent";


export const searchTool = createTool({
  id: 'search-patents',
  description: 'Search for patents',
  inputSchema: z.object({
    query: z.string(),
  }),
  outputSchema: z.object({
    query: z.string(),
    patentData: z.array(z.any()),
  }),
  execute: async ({ context }) => {
    return await search({ query: context.query });
  },
});
