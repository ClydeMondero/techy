import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export default async function splitTextIntoChunks(textArray) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 300,
    chunkOverlap: 50,
  });

  let chunkedText = [];

  for (const text of textArray) {
    const chunks = await splitter.splitText(text);

    chunkedText.push(...chunks);
  }

  return chunkedText;
}
