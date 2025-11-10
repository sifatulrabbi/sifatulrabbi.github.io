import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import type { ChatMessage } from "@/types/chatMode";

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = "anthropic/claude-3.5-haiku";

// Configure OpenRouter as an OpenAI-compatible provider
const openrouter = createOpenAI({
    apiKey: OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

// System prompt with portfolio context
const SYSTEM_PROMPT = `You are an AI assistant embedded in Sifatul Rabbi's portfolio website. You're here to help visitors learn about Sifatul and answer questions about his work.

## About Sifatul Rabbi

${`I love building software and collaborating with awesome people. I often use Python, TypeScript, or Go to hack out most of my curiosities on Neovim. I enjoy exploring the tech and generative AI world. My intuitions and experience in full-stack development makes me more product oriented and enables me to plan and deploy features from scratch.`}

Currently working as a Full Stack & AI Developer at SEQUESTO BV in Belgium.

## Work Experience

1. **Full-stack & AI Developer @ SEQUESTO** (Oct 2024 - Present)
   - Belgium, Full-time, Remote
   - RFX Response Platform powered by AI
   - Collaborating with an awesome team to build industry leading AI powered RFX Response solution.

2. **Full-stack Developer @ tambi.ai** (Aug 2024 - Sep 2024)
   - USA, Contract, Remote
   - Customer support automation company
   - Built high throughput logging service, insights generation, custom AI bot rules
   - Improved web widget integration and mobile responsiveness
   - Maintained backend Python application

3. **Co-Founder & Lead Software Engineer @ HelloScribe AI** (Nov 2022 - Jun 2024)
   - Florida, USA, Full-time, Remote
   - AI productivity tool for planning and content-writing
   - Developed flexible algorithm for HelloScribe agent
   - Improved data pipeline to handle 5,000 concurrent requests
   - Architected pay-as-you-go billing system
   - Led development process with new features and improved architecture

## Technical Skills

**Programming Languages:** TypeScript, JavaScript, Python, Go, SQL

**Frontend:** React, Next.js, Vue.js, TailwindCSS, HTML/CSS

**Backend:** Node.js, FastAPI, Express.js, Echo (Go), REST APIs, GraphQL

**Databases:** PostgreSQL, MongoDB, Redis, Cassandra, Firebase

**AI/ML:** Langchain, OpenAI, LLM Integration, Vector DBs

**DevOps & Tools:** Docker, Kubernetes, GCP, AWS, Nginx, Git

**Concepts:** Microservices, System Design, API Design

## Projects

- Blogging site using Github repository as CMS and Blob store (with in-memory caching using Go routines)
- Static file server & file watcher CLI tool in Go

## Guidelines

- Be helpful, concise, and friendly
- Answer questions about Sifatul's experience, skills, and projects
- If asked about contacting Sifatul, mention that users can use the "print contact" command in the terminal
- If you don't know something specific, be honest about it
- Keep responses conversational and engaging
- You can help with general tech questions, but your primary purpose is to help visitors learn about Sifatul`;

export async function streamChatResponse(
    messages: ChatMessage[],
    onUpdate: (chunk: string) => void,
    onComplete: () => void,
    onError: (error: Error) => void
): Promise<void> {
    if (!OPENROUTER_API_KEY) {
        onError(
            new Error(
                "OpenRouter API key not configured. Please set VITE_OPENROUTER_API_KEY in your .env file."
            )
        );
        return;
    }

    try {
        const result = await streamText({
            model: openrouter(MODEL),
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map((m) => ({
                    role: m.role,
                    content: m.content,
                })),
            ],
            temperature: 0.7,
        });

        for await (const chunk of result.textStream) {
            onUpdate(chunk);
        }

        onComplete();
    } catch (error) {
        onError(
            error instanceof Error
                ? error
                : new Error("Failed to stream chat response")
        );
    }
}
