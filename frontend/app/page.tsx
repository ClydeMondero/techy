"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { ScrollArea } from "@/components/ui/scroll-area";

const sampleRecommendation =
  "Summary: A brief overview of the best tech stack.\nFrontend: Recommended frontend technologies and why.\nBackend: Suggested backend framework/language and why.\nDatabase: Recommended database type (SQL, NoSQL, etc.) based on scalability and data structure.\nDevOps & Hosting: Best hosting or DevOps tools based on deployment needs.\nAdditional Considerations: Any relevant libraries, APIs, or integrations.\nExample Matches:\nYou will use text embedding and similarity scores to suggest relevant technologies. Higher similarity scores indicate better matches. If needed, refine results by filtering for the most relevant categories (e.g., frontend frameworks for UI-heavy projects).\n\nExample response:\n\nSummary: For your full-stack web app with real-time features, we recommend React (Frontend), Node.js with Express (Backend), PostgreSQL (Database), and Docker for deployment.\n\nFrontend: React – A powerful UI library with a vast ecosystem. Good for interactive UIs.\nBackend: Node.js + Express – Great for real-time apps and integrates well with frontend frameworks.\nDatabase: PostgreSQL – A scalable SQL database that handles structured data well.\nDevOps & Hosting: Docker + AWS – Enables containerized deployments with scalability.\nAdditional Considerations: Consider using WebSockets for real-time updates.\n\nAsk follow-up questions when needed to refine recommendations.Summary: A brief overview of the best tech stack.\nFrontend: Recommended frontend technologies and why.\nBackend: Suggested backend framework/language and why.\nDatabase: Recommended database type (SQL, NoSQL, etc.) based on scalability and data structure.\nDevOps & Hosting: Best hosting or DevOps tools based on deployment needs.\nAdditional Considerations: Any relevant libraries, APIs, or integrations.\nExample Matches:\nYou will use text embedding and similarity scores to suggest relevant technologies. Higher similarity scores indicate better matches. If needed, refine results by filtering for the most relevant categories (e.g., frontend frameworks for UI-heavy projects).\n\nExample response:\n\nSummary: For your full-stack web app with real-time features, we recommend React (Frontend), Node.js with Express (Backend), PostgreSQL (Database), and Docker for deployment.\n\nFrontend: React – A powerful UI library with a vast ecosystem. Good for interactive UIs.\nBackend: Node.js + Express – Great for real-time apps and integrates well with frontend frameworks.\nDatabase: PostgreSQL – A scalable SQL database that handles structured data well.\nDevOps & Hosting: Docker + AWS – Enables containerized deployments with scalability.\nAdditional Considerations: Consider using WebSockets for real-time updates.\n\nAsk follow-up questions when needed to refine recommendations.";

export default function Home() {
  //TODO: dynamically set
  const [hasRecommendation, setHasRecommendation] = React.useState(true);
  //TODO: format to markdown
  const [recommendation, setRecommendation] =
    React.useState(sampleRecommendation);

  const handleSubmit = () => {
    setHasRecommendation(true);
  };

  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      {!hasRecommendation ? (
        <Card className="w-[50vw] bg-zinc-800">
          <CardHeader>
            <CardTitle className="text-2xl">⚙️ Techy.ai</CardTitle>
            <CardDescription>
              Helps you to decide the best and latest technologies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex items-center gap-2">
                  <Textarea
                    className="min-h-20 bg-zinc-600 text-white placeholder:text-white resize-none"
                    id="query"
                    placeholder="Describe your project requirements, ideas or goals"
                  />
                </div>
                <Button onClick={handleSubmit}>Ask</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        recommendation && (
          <div>
            <Card className="w-[50vw] max-h-[60vh] p-4  bg-zinc-900 ">
              <CardTitle className="text-2xl">
                ⚙️ Techy's Recommendation
              </CardTitle>
              <CardContent className="grid gap-4 ">
                <ScrollArea className="h-75 w-full rounded-md border p-4">
                  {recommendation}
                </ScrollArea>
              </CardContent>
              <Button>Ask Again?</Button>
            </Card>
          </div>
        )
      )}
    </div>
  );
}
