export const site = {
  name: "Sayan De",
  tagline: "Full-stack AI engineer",
  url: "https://sayande.com",
  email: "sayandeten@gmail.com",
};

export const intro: string[] = [
  "I build AI products end-to-end — from LLM orchestration and agentic systems down to the Kubernetes clusters they run on. I care about sharp abstractions, boring infra, and agents that actually ship instead of demo.",
  "Currently lead engineer at Dimension, shipping an AI chief-of-staff to production. Ask me about multi-agent architectures, persistent memory graphs, or why your RAG pipeline probably needs BM25. Based in Bhubaneswar, India.",
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
    description: "Leading end-to-end full-stack and AI projects for a SaaS platform serving 200K+ users. From architecture design to deployment, handling scale, reliability, and AI integrations.",
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
];

export const skills: { label: string; value: string }[] = [
  { label: "Languages", value: "TypeScript, Go, Python" },
  { label: "AI", value: "LLMs, Agents, LangGraph, RAG, Function Calling, MCP" },
  { label: "Frontend", value: "React, Next.js, Tailwind, Shadcn" },
  { label: "Backend", value: "Node, NestJS, FastAPI, tRPC, GraphQL, gRPC" },
  { label: "Database", value: "Postgres, MongoDB, Redis, Pinecone" },
  {
    label: "Infra",
    value: "Nginx, Docker, K8s, CI/CD, GCP, AWS, Cloudflare, Terraform",
  },
];

export const writing: { date: string; title: string; slug: string }[] = [
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
  { label: "rss", href: "/rss" },
];
