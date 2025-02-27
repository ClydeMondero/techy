import { openai, supabase } from "../config.js";

export default async function embedTextChunk(chunks) {
  //embed chunks
  const embededChunks = await Promise.all(
    chunks.map(async (chunk) => {
      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: chunk,
      });

      return {
        content: chunk,

        embedding: embeddingResponse.data[0].embedding,
      };
    })
  );

  //TODO: make database dynamic
  // Insert content and embedding into Supabase
  await supabase.from("technologies").insert(embededChunks);

  return embededChunks;
}
