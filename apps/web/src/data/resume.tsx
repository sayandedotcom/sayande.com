import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  Bot,
  ThumbsUp,
  ExternalLink,
} from "lucide-react";

export const DATA = {
  name: "Sayan De",
  initials: "SD",
  url: "https://sayande.com",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  // description: "Software Engineer passionate about building and exploring...",
  description:
    "Software Engineer on a quest to build cool stuff and chase dopamine hits with every commit . . . . ",
  summary:
    "I’m a Software Engineer with a solid foundation and enough hands-on experience to have broken (and fixed) things across the entire stack. Powered by caffeine, curiosity, and the occasional Stack Overflow thread, I love diving headfirst into new technologies just to see what I can build (or break). Fast learner. Vibe coder. Currently juggling Full-Stack Development, AI wizardry, DevOps spells, Cloud sorcery, and Microservice magic — all while pretending I know what I’m doing (I usually do).",
  // "I'm a Software Engineer with a strong foundation and hands-on experience across the stack. Fueled by curiosity and a love for learning, I constantly push myself to explore new technologies and redefine what's possible. Fast learner. Vibe coder. I'm diving deep into Full-Stack Development, AI Engineering, DevOps, Cloud Infrastructure, and Microservice Architectures — building things that matter and learning at every step.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "Typescript",
    "Python",
    "React.js / Next.js",
    "TailwindCSS",
    "Node.js",
    "FastAPI",
    "Flask",
    "Prisma",
    "Postgres",
    "MongoDB",
    "Redis",
    "GraphQL",
    "NATS",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Nginx",
    "Terraform",
    "AWS / GCP",
    "LangChain",
    "LangGraph",
    "Vector Databases (Chroma, Pinecone)",
    "Models (Ollama, GPT)",
    "MCP",
    "Microservices",
    "Serverless",
    "CI/CD",
    "AI Agents",
    "System Design",
    "DevOps",
    "Cloud Computing",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://blogs.sayande.com/", icon: NotebookIcon, label: "Blog" },
    {
      href: "https://ai.sayande.com/",
      icon: Bot,
      label: "Chatbot",
    },
  ],
  contact: {
    email: "contact@sayande.com",
    tel: "+917439891451",
    social: {
      Mail: {
        name: "Send Email",
        url: "mailto:contact@sayande.com",
        icon: Icons.email,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sayandedotcom",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayande",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sayandedotcom",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1gaxacihpjA2GsZ-6l8GmZPNBv1ycgF4a/view",
        icon: Icons.googleDrive,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "hhttps://www.youtube.com/@sayandedotcom",
        icon: Icons.youtube,

        navbar: true,
      },
      Instagram: {
        name: "Youtube",
        url: "https://www.instagram.com/sayandedotcom",
        icon: Icons.instagram,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Refhired.com",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Side Hustle / Founder",
      logoUrl: "/ref.png",
      start: "May 2024",
      end: "Present",
      description:
        "Led the project planning, product development, and selecting optimal technologies. Developed a comprehensive website from scratch, encompassing both frontend and backend functionalities, also worked on AI development. Leveraged AWS services to ensure seamless, scalable, and efficient deployment.",
    },
    {
      company: "Symbols.app",
      badges: [],
      href: "https://symbols.app/",
      location: "Remote",
      title: "Full AI Stack Engineer",
      logoUrl: "/sym.png",
      start: "May 2025",
      end: "June 2025",
      description:
        "Identified and reported AI-related bugs, and implemented front-end fixes to ensure a smooth and reliable user experience.",
    },
    {
      company: "Goava ( Seed Stage )",
      href: "",
      badges: [],
      location: "Remote",
      title: "Founding Software Engineer",
      logoUrl: "",
      start: "June 2023",
      end: "Nov 2023",
      description:
        "Migrated from WordPress and built a new MERN stack website from scratch and scaled it to 3k users.",
    },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Refhired.com ( Monolith )",
      href: "https://refhired.sayande.com",
      dates: "May 2024 - Present",
      active: true,
      description:
        "• Set up a scalable monorepo using Turborepo, with shared environment variables, styles, UI components, and development tools like ESLint and Prettier for unified configuration.  \n • Built a full-stack web app with Next.js 14+ as frontend and Node.js with Express.js as backend server with GraphQL API.  \n • Used PostgreSQL as main database with Prisma, S3 for static files alongside Redis for efficient data caching and iIncreased the database throughput by using separate read replica.  \n • Implemented rate limiting with redis, to control network requests and to avoid DDoS attack.  \n • Implemented Stripe Connect for marketplace payments with automated commission deductions per transaction.  \n • Deployed on AWS using Lambda-based serverless infrastructure to ensure scalability, cost-efficiency, and minimal operational overhead.",
      technologies: [
        "Turborepo",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Node.js",
        "GraphQL",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Docker",
        "SST",
        "AWS",
        "GitHub Actions",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://refhired.sayande.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sayandedotcom/refhired.com",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Mantained",
          href: "#",
          icon: <ThumbsUp className="size-3" />,
        },
      ],
      image: "/refhired.png",
      video: "",
      // "https://private-user-images.githubusercontent.com/107565578/460760245-35a0ee7b-9b21-404e-b0f7-b877c95e7130.webm?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzMTg0NDUsIm5iZiI6MTc1MTMxODE0NSwicGF0aCI6Ii8xMDc1NjU1NzgvNDYwNzYwMjQ1LTM1YTBlZTdiLTliMjEtNDA0ZS1iMGY3LWI4NzdjOTVlNzEzMC53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYzMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MzBUMjExNTQ1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NmUyMjQ3MDJjMzVjMTBkNjI3YzBkM2M1ZTc2MTJjNWU3MGY4NmY0MGExZWExZTQ2ZmE4NDYyNGFhYjYwMWVjNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ._H0-Jyg38d31OGjqpMaNdKvrlutL4loZJubmiftsCFU",
    },
    {
      title: "Refhired.com ( Mictoservice )",
      href: "https://chatcollect.com",
      dates: "May 2025 - Jun 2025",
      active: true,
      description:
        "• Architected a scalable microservices system using a one-database-per-service design for strong service isolation and maintainability.  \n • Developed a centralized authentication service using HTTP-only cookies for session management across services.  \n • Applied polyglot persistence, leveraging PostgreSQL and MongoDB based on specific service requirements.  \n • Integrated NATS Streaming as a cloud-native event bus for reliable, asynchronous inter-service communication.  \n • Created Kubernetes CronJobs to automatically clean up expired posts, optimizing database and resource usage.  \n • Designed and deployed multi-stage Docker containers for lean production builds and pushed them to Google Kubernetes Engine (GKE), Google Cloud Build, Google Cloud Storage, etc.  \n • Automated the CI/CD pipeline using GitHub Actions to streamline testing, building, and deployment workflows.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "NATS",
        "Docker",
        "Kubernetes",
        "GCP",
        "GitHub Actions",
        "NPM",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/sayandedotcom/refhired.com-microservices",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "https://blogs.sayande.com/building-a-microservice-application?showSharer=true",
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: "/refhired.png",
      video: "",
      // "https://private-user-images.githubusercontent.com/107565578/460760245-35a0ee7b-9b21-404e-b0f7-b877c95e7130.webm?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEzMTg0NDUsIm5iZiI6MTc1MTMxODE0NSwicGF0aCI6Ii8xMDc1NjU1NzgvNDYwNzYwMjQ1LTM1YTBlZTdiLTliMjEtNDA0ZS1iMGY3LWI4NzdjOTVlNzEzMC53ZWJtP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYzMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MzBUMjExNTQ1WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NmUyMjQ3MDJjMzVjMTBkNjI3YzBkM2M1ZTc2MTJjNWU3MGY4NmY0MGExZWExZTQ2ZmE4NDYyNGFhYjYwMWVjNSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ._H0-Jyg38d31OGjqpMaNdKvrlutL4loZJubmiftsCFU",
    },
    {
      title: "Recruitment-ai",
      href: "https://llm.report",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "• Developed an AI-driven workflow to accurately extract key information from PDF resumes and job descriptions, leveraging advanced prompt engineering and OpenAI’s structured output capabilities.  \n • Integrated a LangGraph-powered agentic AI workflow with the Gmail tool to autonomously evaluate resumes, rank them based on job relevance using a custom scoring system, and automate personalized acceptance or rejection emails, streamlining end-to-end candidate communication.  \n • Deployed applications using a multi-container Docker architecture with Nginx as a reverse proxy.",
      technologies: [
        "Python",
        "Typescript",
        "Next.js",
        "TailwindCSS",
        "Flask",
        "Fast API",
        "Langchain",
        "LangGraph",
        "OpenAI",
        "MongoDB",
        "Docker",
        "Nginx",
        "GitHub Actions",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/sayandedotcom/recruitment.ai",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "https://blogs.sayande.com/filter-resumes-with-agentic-ai-langchain-and-lanhgraph",
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: "/recr.png",
      video: "",
    },
    {
      title: "Inbox-ai ( Agentic AI )",
      href: "https://automatic.chat",
      dates: "June 2025 - Present",
      active: true,
      description:
        "• An AI-powered email automation system that acts as an intelligent AI agent to fetch, filter, summarize, and generate responses to emails using advanced language models. It integrates with both IMAP and SMTP servers and utilizes a state-graph workflow to manage and streamline the end-to-end email processing intelligently.",
      technologies: [
        "Python",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "OpenAI",
        "FastAPI",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/sayandedotcom/inbox-ai",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Blog",
          href: "https://blogs.sayande.com/building-an-ai-email-agent-with-langchain-and-langgraph?showSharer=true",
          icon: <NotebookIcon className="size-3" />,
        },
        {
          type: "Under Development",
          href: "https://github.com/sayandedotcom/inbox-ai",
          icon: <Icons.wrench className="size-3" />,
        },
      ],
      image: "/inbox.png",
      video: "",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "Recruitment-",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
  ],
  hackathons: [
    {
      title: "The Complete Agentic AI Engineering Course (2025)",
      dates: "",
      location: "",
      description:
        "Master AI Agents in 30 days: build 8 real-world projects with OpenAI Agents SDK, CrewAI, LangGraph, AutoGen and MCP.",
      icon: "public",
      image: "/udemy.png",
      links: [
        {
          icon: <ExternalLink size="12" />,
          title: "Certificate",
          href: "https://www.udemy.com/certificate/UC-bf510ab7-4f5e-4ba6-83b7-5bcfbf4e804b/",
        },
      ],
    },
    {
      title: "LLM Engineering: Master AI, Large Language Models & Agents",
      dates: "",
      location: "",
      description:
        "Become an LLM Engineer in 8 weeks: Build and deploy 8 LLM apps, mastering Generative AI, RAG, LoRA and AI Agents.",
      image: "/udemy.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          icon: <ExternalLink size="12" />,
          title: "Certificate",
          href: "https://www.udemy.com/certificate/UC-225e6f43-f74d-4ee5-a709-7e9cb5e22804/",
        },
      ],
    },
    {
      title: "Microservices with Node JS and React",
      dates: "",
      location: "",
      description:
        "Build, deploy, scale apps using Microservices built with Node, React, Docker, Kubernetes on Cloud ( GCP )",
      image: "/udemy.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          icon: <ExternalLink size="12" />,
          title: "Certificate",
          href: "https://www.udemy.com/certificate/UC-ace1c6a9-212a-4dc2-af26-1499a9ce424a/",
        },
      ],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
