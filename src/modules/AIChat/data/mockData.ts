import type { Thread, Artifact } from "@/types";

export const mockArtifacts: Record<string, Artifact> = {
  "artifact-1": {
    id: "artifact-1",
    title: "fibonacci.py",
    kind: "code",
    language: "python",
    createdAt: "2026-02-01T10:00:00Z",
    updatedAt: "2026-02-01T10:00:00Z",
    content:
      "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# Example usage\nfor i in range(10):\n    print(f'F({i}) = {fibonacci(i)}')",
  },
  "artifact-2": {
    id: "artifact-2",
    title: "README.md",
    kind: "markdown",
    createdAt: "2026-02-01T10:05:00Z",
    updatedAt: "2026-02-01T10:05:00Z",
    content:
      "# Project Documentation\n\n## Overview\nThis is a sample project demonstrating the AI chat interface.\n\n## Features\n- Thread-based conversations\n- Step tracking\n- Artifact generation\n- Tool integration\n\n## Usage\nSee the examples in the code artifacts.",
  },
  "artifact-3": {
    id: "artifact-3",
    title: "config.json",
    kind: "json",
    createdAt: "2026-02-01T10:10:00Z",
    updatedAt: "2026-02-01T10:10:00Z",
    content:
      '{\n  "name": "ai-chat-demo",\n  "version": "1.0.0",\n  "settings": {\n    "model": "claude-3-opus",\n    "temperature": 0.7,\n    "maxTokens": 4096\n  },\n  "features": {\n    "streaming": true,\n    "tools": true,\n    "artifacts": true\n  }\n}',
  },
};

export const mockThreads: Thread[] = [
  {
    id: "thread-1",
    title: "Python Fibonacci Function",
    createdAt: "2026-02-01T09:00:00Z",
    updatedAt: "2026-02-01T10:00:00Z",
    model: "claude-3-opus",
    steps: [
      {
        id: "step-1-1",
        type: "user",
        createdAt: "2026-02-01T09:00:00Z",
        content: {
          text: "Write a Python function to calculate Fibonacci numbers recursively and print the first 10 values.",
        },
        status: "complete",
      },
      {
        id: "step-1-2",
        type: "ai",
        createdAt: "2026-02-01T09:01:00Z",
        status: "complete",
        blocks: [
          {
            id: "block-1-2-1",
            type: "reasoning",
            text: "The user wants a recursive Fibonacci function. I need to:\n1. Define a function that takes n as input\n2. Handle base cases (n <= 1)\n3. Recursively calculate F(n) = F(n-1) + F(n-2)\n4. Loop through first 10 numbers and print results",
          },
          {
            id: "block-1-2-2",
            type: "text",
            text: "Here's a recursive Fibonacci implementation in Python:",
          },
          {
            id: "block-1-2-3",
            type: "artifact",
            artifactId: "artifact-1",
          },
          {
            id: "block-1-2-4",
            type: "text",
            text: "This implementation uses simple recursion. Note that for large values of n, this approach can be slow due to repeated calculations. You might want to consider memoization or iterative approaches for better performance with larger numbers.",
          },
        ],
      },
    ],
  },
  {
    id: "thread-2",
    title: "Project Setup with Tools",
    createdAt: "2026-02-01T08:00:00Z",
    updatedAt: "2026-02-01T08:15:00Z",
    model: "gpt-4",
    steps: [
      {
        id: "step-2-1",
        type: "user",
        createdAt: "2026-02-01T08:00:00Z",
        content: {
          text: "Help me set up a new project. Create a README and config file.",
        },
        status: "complete",
      },
      {
        id: "step-2-2",
        type: "ai",
        createdAt: "2026-02-01T08:01:00Z",
        status: "complete",
        blocks: [
          {
            id: "block-2-2-1",
            type: "text",
            text: "I'll help you set up a new project with documentation and configuration. Let me create the necessary files.",
          },
          {
            id: "block-2-2-2",
            type: "tool_call",
            toolCall: {
              toolCallId: "call-001",
              toolName: "create_file",
              argumentsJson:
                '{"filename": "README.md", "content": "# Project Documentation\\n\\n## Overview\\n..."}',
            },
          },
          {
            id: "block-2-2-3",
            type: "tool_call",
            toolCall: {
              toolCallId: "call-002",
              toolName: "create_file",
              argumentsJson:
                '{"filename": "config.json", "content": "{\\n  \\"name\\": \\"ai-chat-demo\\",\\n  ...\\n}"}',
            },
          },
        ],
      },
      {
        id: "step-2-3",
        type: "tool_result",
        createdAt: "2026-02-01T08:02:00Z",
        toolCallId: "call-001",
        toolName: "create_file",
        status: "complete",
        output: {
          text: "Successfully created README.md",
        },
      },
      {
        id: "step-2-4",
        type: "tool_result",
        createdAt: "2026-02-01T08:02:00Z",
        toolCallId: "call-002",
        toolName: "create_file",
        status: "complete",
        output: {
          text: "Successfully created config.json",
        },
      },
      {
        id: "step-2-5",
        type: "ai",
        createdAt: "2026-02-01T08:03:00Z",
        status: "complete",
        blocks: [
          {
            id: "block-2-5-1",
            type: "text",
            text: "Perfect! I've created both files for your project. Here's what was generated:",
          },
          {
            id: "block-2-5-2",
            type: "artifact",
            artifactId: "artifact-2",
          },
          {
            id: "block-2-5-3",
            type: "artifact",
            artifactId: "artifact-3",
          },
          {
            id: "block-2-5-4",
            type: "text",
            text: "Your project is now ready! The README provides documentation, and the config.json contains project settings.",
          },
        ],
      },
    ],
  },
  {
    id: "thread-3",
    title: "Simple Greeting",
    createdAt: "2026-02-01T07:00:00Z",
    updatedAt: "2026-02-01T07:01:00Z",
    model: "claude-3-haiku",
    steps: [
      {
        id: "step-3-1",
        type: "user",
        createdAt: "2026-02-01T07:00:00Z",
        content: {
          text: "Hello! How are you today?",
        },
        status: "complete",
      },
      {
        id: "step-3-2",
        type: "ai",
        createdAt: "2026-02-01T07:01:00Z",
        status: "complete",
        blocks: [
          {
            id: "block-3-2-1",
            type: "text",
            text: "Hello! I'm doing well, thank you for asking. I'm ready to help you with any questions or tasks you have. How can I assist you today?",
          },
        ],
      },
    ],
  },
];
