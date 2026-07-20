export const site = {
  name: "Sayan De",
  tagline: "Full-stack AI engineer",
  description: "Full-stack AI engineer building AI products end-to-end.",
  url: "https://sayande.com",
  email: "sayandeten@gmail.com",
};

export const intro: string[] = [
  "I build AI products end-to-end — from LLM orchestration and agentic systems down to the Kubernetes clusters they run on. I care about sharp abstractions, boring infra, and agents that actually ship instead of demo.",
  "Ask me about multi-agent architectures, persistent memory graphs, or why your RAG pipeline probably needs BM25. Based in India.",
];

export const experience: {
  role: string;
  company: string;
  url?: string;
  start: string;
  end: string;
  description: string;
}[] = [
  {
    role: "Software Engineer",
    company: "AfterQuery (YC 2025)",
    url: "https://www.afterquery.com/",
    start: "April 2026",
    end: "Present ( Part -Time )",
    description: "NDA",
  },
  {
    role: "Full Stack AI Engineer",
    company: "Parcero.digital",
    url: "https://parcero.digital",
    start: "May 2026",
    end: "Present",
    description:
      "Leading end-to-end full-stack and AI projects for a SaaS platform serving 200K+ users. From architecture design to deployment, handling scale, reliability, and AI integrations.",
  },
  {
    role: "Full Stack AI Engineer",
    company: "Bhindi.io",
    url: "https://bhindi.io/",
    start: "Dec 2025",
    end: "April 2026  (Contract)",
    description:
      "Built stealth-mode web automation with Playwright (anti-detection, human-like delays) to scrape dynamic JS sites. Integrated Gemini Vision API for screenshot-based structured data extraction. Implemented persistent auth sessions to eliminate redundant logins.",
  },
  {
    role: "Software Engineer",
    company: "Symbols.app",
    url: "https://symbols.app/",
    start: "Jan 2025",
    end: "Sep 2025",
    description:
      "Led frontend for the No-Code editor, mentoring developers and helping non-technical users build websites/apps. Identified and fixed AI-related bugs with full-stack solutions.",
  },
  {
    role: "Full Stack AI Engineer",
    company: "Multiple Small Startus & SAAS",
    url: "https://symbols.app/",
    start: "Jan 2022",
    end: "Present",
    description:
      "Worked on multiple small SAAS startups integrating payment gateways to building full-stack projects with live users",
  },
];

export const projects: {
  name: string;
  bio?: string;
  bullets?: string[];
  highlights?: string[];
  engineering?: string[];
  code?: string;
  live?: string;
  video?: string;
}[] = [
  {
    name: "Chat Automation Platform",
    bio: "AI-Powered Tool Orchestration via Autonomous Agents",
    bullets: [
      "Next.js, TailwindCSS, Express, tRPC, FastAPI, LangGraph, LangChain, LangSmith, MCP, PostgreSQL, Prisma, Docker, AWS",
      "Architected a full-stack monorepo with a real-time chat interface using Next.js 16 / React 19 frontend and Express/tRPC backend, enabling seamless bidirectional communication.",
      "Engineered an autonomous AI agent system using LangGraph with Plan → Route → Execute pattern, dynamically orchestrating 20+ MCP tools to execute complex multi-step workflows.",
      "Reduced LLM token consumption by 90% through intelligent context management, implementing selective tool binding and conversation state pruning.",
      "Achieved 80% faster response times by implementing smart model routing and prompt compression, dynamically selecting LLMs based on task complexity.",
      "Decreased hallucinations by implementing a Human-in-the-Loop (HITL) system with state-based approval workflows for safe execution of critical actions.",
      "Implemented async memory persistence after workflow completion and agent context injection, allowing personalized multi-session interactions with strict user data isolation.",
      "Ensured 99.9% system uptime by deploying production infrastructure on AWS EC2 with automated CI/CD pipelines and containerized microservices.",
    ],
    highlights: [
      "Next.js 16 / React 19 ",
      "Express/tRPC",
      "LangGraph",
      "Plan → Route → Execute",
      "20+ MCP",
      "LLM token consumption by 90%",
      "context management",
      "selective tool binding",
      "80% faster response times",
      "smart model routing",
      "prompt compression",
      "Human-in-the-Loop (HITL)",
      "state-based approval",
      "async memory persistence",
      "AWS EC2",
      "99.9% system",
    ],
    code: "https://github.com/sayandedotcom/chat-automation",
    engineering: [
      "https://sayande.hashnode.dev/building-an-autonomous-ai-agent-a-deep-dive-into-the-architecture",
    ],
    video: "https://youtu.be/QBlWBrueJYA?si=BXV33s0ZTzvhPr88",
  },
  {
    name: "Tweakleaf",
    bio: "Tune LaTeX Resumes & Cover Letter with tuned AI agents",
    bullets: [
      "LangChain, LangGraph, FastAPI, Next.js, PostgreSQL, Docker, AWS Lambda, EC2, ALB, Route53",
      "Built a self-learning AI agent with long-term memory that adapts to user preferences and preserves context.",
      "Reduced LLM latency by 80% and costs by 90% through intelligent routing between weak and strong models.",
      "Optimized LLM for LaTeX code generation using Few-Shot Prompting to ensure syntactic accuracy.",
      "Decreased token usage by 70% and improved response times via Prompt Compression with LLMLingua.",
      "Minimized hallucinations in job-application conversations by implementing isolated chat session threads.",
      "Integrated a LaTeX compiler with live code editor for dynamic document generation.",
      "Maintained website Core Web Vitals (FCP, LCP, FID, CLS, SEO) with an average score above 95%.",
      "Deployed backend APIs using a hybrid architecture: LangChain & LangGraph API on AWS Lambda (serverless) for scalability and a LaTeX compiler API on AWS EC2 behind a load balancer for reliability and performance.",
    ],
    highlights: [
      "self-learning AI agent",
      "long-term memory",
      "LLM latency by 80%",
      "costs by 90%",
      "intelligent routing",
      "Few-Shot Prompting",
      "LaTeX code generation",
      "token usage by 70%",
      "Prompt Compression",
      "LLMLingua",
      "isolated chat session threads",
      "Core Web Vitals",
      "AWS Lambda",
      "AWS EC2",
      "load balancer",
    ],
    code: "https://github.com/sayandedotcom/tweakleaf",
    engineering: ["https://sayande.hashnode.dev/inside-tweakleaf-engineering"],
    live: "https://tweakleaf.com/",
    video: "https://youtu.be/620GRWeRDts?si=_wQxqf3-AY0Q8VIi",
  },
  {
    name: "Genie",
    bio: "Uber's internal on-call copilot (Uber's Engineering Blog)",
    bullets: [
      "LangGraph, LangChain, SambaNova (Llama 3.1), Google Gemini 2.5, FastEmbed, Qdrant, PyPDFium",
      "Replicated how Uber built their internal Agentic AI chatbot with LangGraph that saved 21,000 developer hours.",
      "Built an Agentic RAG pipeline using LangGraph, integrating small and large LLMs for query rewriting, hybrid (dense + sparse) retrieval, and context-aware answer generation.",
      "Optimized document retrieval by storing vectorized data with custom metadata in Qdrant, enabling hybrid search (semantic + BM25) and precise filtering based on metadata conditions.",
    ],
    highlights: [
      "Agentic AI chatbot",
      "LangGraph",
      "21,000 developer hours",
      "Agentic RAG pipeline",
      "query rewriting",
      "hybrid (dense + sparse) retrieval",
      "context-aware answer generation",
      "Qdrant",
      "hybrid search",
      "semantic + BM25",
      "metadata filtering",
    ],
    code: "https://github.com/sayandedotcom/Genie-Uber-s-internal-on-call-copilot",
    engineering: [
      "https://www.uber.com/in/en/blog/enhanced-agentic-rag/",
      "https://sayande.hashnode.dev/how-uber-built-an-ai-agent-that-saved-21000-developer-hours?showSharer=true",
    ],
  },
];

export const skills: { label: string; value: string }[] = [
  { label: "Languages", value: "TypeScript, Go, Python" },
  { label: "AI", value: "LLMs, Agents, LangGraph, RAG, Function Calling, MCP" },
  { label: "Frontend", value: "React, Next.js, Tailwind" },
  { label: "Backend", value: "Node, NestJS, FastAPI, tRPC, GraphQL, gRPC" },
  { label: "Database", value: "Postgres, MongoDB, Redis, Pinecone" },
  {
    label: "Infra",
    value: "Nginx, Docker, K8s, CI/CD, GCP, AWS, Cloudflare, Terraform",
  },
];

export const writing: { date: string; title: string; slug: string }[] = [
  {
    date: "Oct 10, 2025",
    title:
      "I replicated 'How Uber built an AI Agent that saved 21000 developer hours'",
    slug: "https://sayande.hashnode.dev/how-uber-built-an-ai-agent-that-saved-21000-developer-hours",
  },
  {
    date: "Mar 26, 2026",
    title: "Building an Autonomous AI Agent: A Deep Dive into Architecture",
    slug: "https://sayande.hashnode.dev/building-an-autonomous-ai-agent-a-deep-dive-into-the-architecture",
  },
  {
    date: "Mar 23, 2026",
    title: "How I Reduced Token Cost While Building With Many MCPs",
    slug: "https://sayande.hashnode.dev/how-i-reduced-token-cost-while-building-with-many-mcps",
  },
  {
    date: "Dec 26, 2025",
    title: "Building Intelligent Web Automation",
    slug: "https://sayande.hashnode.dev/building-intelligent-web-automation",
  },
  {
    date: "Nov 15, 2025",
    title:
      "I have built around 100 agents. Here's what I learnt about the AI Agent",
    slug: "https://sayande.hashnode.dev/i-have-built-around-100-agents-heres-what-i-learnt-about-the-ai-agent",
  },
  {
    date: "Nov 13, 2025",
    title: "How to deploy AI SAAS",
    slug: "https://sayande.hashnode.dev/inside-tweakleaf-engineering",
  },
];

export const social: { label: string; href: string }[] = [
  { label: "email", href: `mailto:${site.email}` },
  { label: "github", href: "https://github.com/sayandedotcom" },
  { label: "linkedin", href: "https://www.linkedin.com/in/sayande" },
  { label: "blog", href: "https://sayande.hashnode.dev" },
  { label: "x", href: "https://x.com/sayandedotcom" },
  { label: "resume", href: "https://drive.google.com/file/d/1PS-72mV6TQVDRTbLtK2SkR0VU74zZz4a/view" },
  { label: "book a time", href: "https://cal.com/sayandedotcom/chat" },
  { label: "rss", href: "/rss" },
];
