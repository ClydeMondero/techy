import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import splitTextIntoChunks from "./utils/splitIntoTextChunks.js";
import embedTextChunk from "./utils/embedTextChunks.js";
import embedQuery from "./utils/embedQuery.js";
import searchVectorDB from "./utils/searchVectorDB.js";

import { technologies } from "./seed.js";
import { formatMatches } from "./utils/formatMatches.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server running on port 3000"));

//add new embedded tech
app.post("/add", async (req, res) => {
  //TODO: accept data in request
  //split text into chunks
  const chunks = await splitTextIntoChunks(technologies);

  //embed and store chunks
  const embededChunks = await embedTextChunk(chunks);

  res.status(200).json({ embededChunks });
});

app.post("/recommend", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      res.status(400).json({ error: "query is required" });
    }

    //embed question
    const embededQuery = await embedQuery(query);

    //search embedded question in vector database
    const matches = await searchVectorDB(embededQuery);

    //format using chat completions
    const formattedMatches = await formatMatches(query, matches);

    res.status(200).json({ formattedMatches });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});
