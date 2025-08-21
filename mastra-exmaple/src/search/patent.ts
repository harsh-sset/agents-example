import mongoose from "mongoose";
import { embedQuery } from "../llm/embedding";

const VECTOR_INDEX = 'vector_index';
const VECTOR_PATH = 'abstract_embedding';
const COLLECTION_NAME = 'justia';
const NUM_CANDIDATES = 10000;
const LIMIT = 500;
const MAX_RETURNED_RESULTS = 50;


export interface SearchOutput {
  query: string;
  totalResults: number;
  patentData: any[];
}


export const search = async ({ query }: { query: string }): Promise<SearchOutput> => {
  const embedding = await embedQuery(query);

  const collection = mongoose.connection.collection(COLLECTION_NAME);
  const vectorPipeline = [
    {
      $vectorSearch: {
        index: VECTOR_INDEX,
        path: VECTOR_PATH,
        queryVector: embedding,
        numCandidates: NUM_CANDIDATES,
        limit: LIMIT,
        score: { function: 'cosine' },
      },
    },
    {
      $addFields: {
        relevance: { $meta: 'vectorSearchScore' },
      },
    },
    {
      $addFields: {
        filed_date_parsed: {
          $dateFromString: {
            dateString: '$filed_date',
            onError: null,
          },
        },
      },
    },
    {
      $match: {
        relevance: { $gte: 0.8 },
        filed_date_parsed: {
          $gte: new Date('2020-01-01T00:00:00Z'),
          $lte: new Date(),
        },
      },
    },
    {
      $sort: {
        relevance: -1,
        filed_date_parsed: -1,
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        url: 1,
        abstract: 1,
        patent_id: 1,
        claims: 1,
        patent_date: 1,
        filed_date: 1,
        relevance: 1,
      },
    },
  ];
  const results = await collection.aggregate(vectorPipeline).toArray();
  return {
    query: query,
    totalResults: results.length,
    patentData: results.slice(0, MAX_RETURNED_RESULTS),
  };
};