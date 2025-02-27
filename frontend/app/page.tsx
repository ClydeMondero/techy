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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import Markdown from "react-markdown";

const sampleRecommendation = `
# **Full-Stack Web App with Real-Time Features**

## **Frontend**

### **Technology: React**

A powerful UI library for building interactive user interfaces. It has a vast ecosystem and supports component-based architecture.

### **Prerequisite Knowledge**

- JavaScript (ES6+ features)
- HTML & CSS
- React basics (JSX, components, state, props, hooks)
- React Router for navigation
- State management (Context API, Redux, or TanStack Query)

### **Setup**

1. Install Node.js (which includes npm): [Download](https://nodejs.org/)
2. Create a new React app:

~~~sh
npx create-react-app my-app 
cd my-app 
npm start
~~~

---
## **Backend**

### **Technology: Node.js + Express**

A JavaScript runtime that allows building scalable and fast APIs, with Express.js as the minimalistic web framework.

### **Prerequisite Knowledge**

- JavaScript (ES6+ features)
- Node.js fundamentals (event loop, async/await, modules)
- Express basics (routing, middleware, controllers)
- RESTful API design
- Authentication (JWT, OAuth)

### **Setup**

1. Install Node.js: [Download](https://nodejs.org/)
2. Initialize a new Node.js project:

~~~sh
mkdir backend && cd backend 
npm init -y
~~~

3. Install Express.js:

~~~sh
npm install express cors dotenv
~~~

4. Create a simple Express server (\`index.js\`):

~~~js
const express = require('express'); 
const app = express();

app.get('/', (req, res) => { 
	res.send('Hello, World!');
});  

app.listen(5000, () => console.log('Server running on port 5000'));
~~~

5. Run the server:

~~~sh
node index.js
~~~

---
## **Database**

### **Technology: PostgreSQL**

A powerful and scalable SQL database with strong support for complex queries and indexing.

### **Prerequisite Knowledge**

- SQL basics (CRUD operations, joins, indexing)
- PostgreSQL CLI commands
- ORMs (Prisma, Sequelize, TypeORM, or Knex.js)
- Database design principles

### **Setup**

1. Install PostgreSQL: [Download](https://www.postgresql.org/download/)
2. Start PostgreSQL service:

~~~sh
sudo systemctl start postgresql
~~~

3. Access PostgreSQL CLI:

~~~sh
psql -U postgres
~~~

4. Create a new database:

~~~sh
CREATE DATABASE mydatabase;
~~~

5. Connect to the database from Node.js (using \`pg\` package):

~~~sh
npm install pg
~~~

---
## **DevOps & Hosting**

### **Technology: Docker + AWS**

Containerization with Docker ensures consistency across environments, while AWS provides scalable cloud hosting.

### **Prerequisite Knowledge**

- Basics of containerization
- Writing Dockerfiles & docker-compose
- AWS services (EC2, RDS, S3, Lambda)
- CI/CD pipelines (GitHub Actions, AWS CodePipeline)

### **Setup**

#### **Docker**

1. Install Docker: [Download](https://www.docker.com/)
2. Create a \`Dockerfile\` for Node.js backend:

~~~dockerfile
FROM node:18
WORKDIR /app 
COPY package.json . 
RUN npm install 
COPY . . 
CMD ["node", "index.js"] 
EXPOSE 5000
~~~

3. Build and run the container:

~~~sh
docker build -t myapp . 
docker run -p 5000:5000 myapp
~~~

#### **AWS**

1. Create an AWS account: [AWS Console](https://aws.amazon.com/)
2. Set up an EC2 instance
3. Install Docker on EC2:

~~~sh
sudo yum install docker 
sudo service docker start
~~~

4. Deploy the container:

~~~sh
docker run -d -p 80:5000 myapp
~~~

---
## **Additional Considerations**

### **WebSockets (Socket.io)**

WebSockets enable real-time bidirectional communication, making them ideal for live chats, notifications, and live data updates.
`;

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
        <Card className="w-[50vw] bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-2xl">⚙️ Techy.ai</CardTitle>
            <CardDescription>
              Helps you to decide the best and latest tech stack for your
              projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full  items-center gap-4">
                <div className="flex items-center gap-2">
                  <Textarea
                    className="min-h-20 text-white  bg-zinc-800 resize-none"
                    id="query"
                    placeholder="Describe your project requirements, features and goals."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="setup" />
                  <label
                    htmlFor="setup"
                    className="text-sm text-zinc-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Show prerequisite and initial setup for each technology.
                  </label>
                </div>
                <Button onClick={handleSubmit}>Ask</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        recommendation && (
          <div>
            <Card className="w-[50vw] h-[80vh] p-4  bg-zinc-900 ">
              <CardTitle className="text-2xl">
                ⚙️ Techy's Recommendation
              </CardTitle>
              <CardContent className="h-full grid">
                <ScrollArea className="h-100 w-full rounded-md border p-4 bg-zinc-800">
                  <Markdown>{recommendation}</Markdown>
                </ScrollArea>
                <Button>Ask Again?</Button>
              </CardContent>
            </Card>
          </div>
        )
      )}
    </div>
  );
}
