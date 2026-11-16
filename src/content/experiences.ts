export type Experience = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  terms: string;
  period: string;
  summary?: string;
  highlights: string[];
  techStack: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Full-Stack AI Developer, then AI Lead",
    company: "SEQUESTO BV",
    companyUrl: "https://sequesto.com",
    location: "Melsele, Belgium",
    terms: "Remote, contract",
    period: "Oct 2024 – Nov 2026",
    summary:
      "An AI-powered RFX response platform that has grown into an agentic productivity and product management SaaS.",
    highlights: [
      "Collaborated with an awesome team to build an industry-leading, AI-powered RFX response solution.",
      "Designed and built the product's customer-facing AI agent, which carries out work for each organization using its own data.",
      "Delivered agentic document and presentation generation within weeks: the agent plans with the user, gathers their material, and works through their feedback.",
      "Brought the agent into Slack and Microsoft Teams, so customers could work with it from the tools they already use.",
      "Led the agent's rebuild for the product's new direction, turning product needs into technical implementation, which reached users within a month.",
    ],
    techStack: [
      "TypeScript",
      "Python",
      "Go",
      "React",
      "Bun",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "ElasticSearch",
      "C#",
      "RAG",
    ],
  },
  {
    id: "2",
    title: "Full-stack and AI Developer",
    company: "Tambi.ai",
    companyUrl: "https://www.linkedin.com/company/tambiai/",
    location: "New York, USA",
    terms: "Remote, contract",
    period: "Aug 2024 – Dec 2024",
    summary:
      "AI-powered customer support automation, with people able to step in and hand back to the AI at any time.",
    highlights: [
      "Built the embeddable chat widget from scratch, so customers could add Tambi's bot to their own websites on desktop and mobile.",
      "Built insights generation, which classifies customer data with an LLM and shows the results as dashboard graphs.",
      "Improved backend performance and made the LLM prompts shorter and more effective.",
      "Contributed to the React Native SDK that brought messaging to Tambi's mobile apps, and reviewed code across the team.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "React Native",
      "PostgreSQL",
    ],
  },
  {
    id: "3",
    title: "Lead Full-Stack Developer, then Co-founder",
    company: "HelloScribe AI",
    companyUrl: "https://helloscribe.ai",
    location: "Florida, USA",
    terms: "Remote, freelance, co-founder from Feb 2024",
    period: "Nov 2022 – Jun 2024",
    summary:
      "AI tools that writers and researchers use to plan, brainstorm, think through ideas, and research across many sources.",
    highlights: [
      "Joined during the AppSumo launch to get the backend and login working again, then became the main full-stack developer for the V2 rebuild.",
      "Built an AI agent that planned and carried out multi-step tasks before native tool calling existed, with interactive elements inside the chat.",
      "Built the collaborative editor where users and the AI agent work on the same document.",
      "Made the product hold 5,000+ concurrent users in a load test without breaking, and cut the web app's memory use from up to 2 GB to a few hundred MB.",
      "Built usage-based billing, set the team's coding standards, and ran planning when the founder was away; became a co-founder in 2024.",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Vue",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "4",
    title: "Full-Stack Developer, then Project Lead",
    company: "X-Booker",
    companyUrl: "https://x-booker.co.uk",
    location: "Chessington, UK",
    terms: "Remote, freelance",
    period: "Apr 2022 – Feb 2024",
    summary: "Lead management, booking, and project management in one platform.",
    highlights: [
      "Designed and built the platform end to end as the only developer for most of the project, starting from how the client's business actually ran.",
      "Built lead management, bookings, project tracking, team roles, chat, subscriptions, and an AI assistant that answers questions and books calendar slots.",
      "Connected Google Calendar, Gmail, Google Maps, Twilio, and Stripe so teams could run their work from one place.",
      "Rebuilt the first version when the product outgrew its original platform, and took it to production on Google Cloud.",
      "Onboarded and mentored a junior developer as project lead.",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "Python",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "GCP",
    ],
  },
  {
    id: "5",
    title: "Freelance Full-Stack Developer",
    company: "Self-employed",
    terms: "Freelance",
    period: "Since 2022",
    highlights: [
      "Building web apps, APIs, and backends for clients alongside my main roles, from a courier service platform with parcel tracking to a backend that ingests weather data from many sources.",
      "Deploying and running client services on cloud servers.",
    ],
    techStack: [
      "TypeScript",
      "Python",
      "Node.js",
      "React",
      "Vue",
      "PostgreSQL",
      "MongoDB",
      "Cassandra",
      "Docker",
      "AWS",
    ],
  },
];

export function experienceFileName(exp: Experience): string {
  return `${exp.title} @ ${exp.company}`;
}

export function experienceToMarkdown(exp: Experience): string {
  const place = [exp.company, exp.location].filter(Boolean).join(", ");
  const lines = [
    `**${exp.title}**  `,
    `${place} -- ${exp.terms} -- ${exp.period}`,
    "",
  ];
  if (exp.summary) {
    lines.push(`*${exp.summary}*`, "");
  }
  lines.push(...exp.highlights.map((h) => `- ${h}`), "", "");
  return lines.join("\n");
}
