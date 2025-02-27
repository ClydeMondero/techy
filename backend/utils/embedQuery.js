import { openai } from "../config.js";

export default async function embedQuery(query) {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: query,
  });

  return {
    content: query,

    embedding: embeddingResponse.data[0].embedding,
  };
}
