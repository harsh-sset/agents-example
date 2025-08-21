import { openai } from "@ai-sdk/openai";
import { embed } from "ai";

const QUERY_EMBEDDING_MODEL = 'text-embedding-ada-002';

export const embedQuery = async (query: string) => {
  const { embedding } = await embed({
    model: openai.embedding(QUERY_EMBEDDING_MODEL),
    value: query,
  });
  return embedding;
};