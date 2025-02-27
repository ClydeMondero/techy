import { supabase } from "../config.js";

export default async function searchVectorDB(embededQuery) {
  //TODO: change options dynamically
  const { data, error } = await supabase.rpc("match_technologies", {
    query_embedding: embededQuery.embedding,

    match_threshold: 0.1,

    match_count: 5,
  });

  return data;
}
