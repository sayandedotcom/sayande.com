"use client";

import { ShieldQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Dropdown";

type TFaq = {
  id: number;
  question: string;
  answer: string;
};

const faqs: TFaq[] = [
  {
    id: 1,
    question: "What Technologies do you specialize in ?",
    answer:
      "As a full-stack developer, I specialize in Next.js, Node.js, Prisma, PostgreSQL, Redis, GraphQL, Typescript, and TailwindCSS for cohesive web development. I'm proficient in frontend and backend, ensuring feature-rich applications. Additionally, I excel in DevOps, utilizing GitHub Actions, Jenkins, Docker, Nginx, Terraform, and AWS Cloud for seamless deployment and management.",
  },
  {
    id: 2,
    question: "Why don't you have any other strong interships or experience ?",
    answer:
      "After my internship, I aimed to hone my skills in full-stack web development for enterprise-level projects and efficient deployment, akin to startup standards. So, I launched refhired.com to expand beyond the limited scope of internships and explore diverse expertise. This hands-on endeavor provided invaluable learning opportunities, surpassing what internships typically offer. It's been a self-directed journey, allowing me to tackle real-world challenges and gain practical insights into building robust web applications.",
  },
  {
    id: 3,
    question: "Except refhired.com do you have any other projects ?",
    answer:
      "Yes, I've worked on various projects including an e-commerce website utilizing the MERN stack with GraphQL, and a YouTube clone integrated with YouTube API V3. However, refhired.com holds a special place for me. It's the project I'm particularly proud of and actively showcase on my resume and wherever relevant. The comprehensive nature of refhired.com, along with the skills and insights I gained through its development, make it a standout accomplishment in my portfolio.",
  },
  {
    id: 4,
    question: "Will you be able to work in a collaborative teams ?",
    answer:
      "Absolutely, I'm well-equipped for collaborative team environments. I've actively engaged in numerous hackathons, contributed to open-source projects, and worked on various group projects. These experiences have honed my ability to communicate effectively, adapt to diverse working styles, and contribute positively to team dynamics. I thrive in collaborative settings, valuing the exchange of ideas and the collective effort toward achieving shared goals.",
  },
];

export function FAQAccordion({ className }: { className: string }) {
  return (
    <>
      <h2 className="flex">
        <ShieldQuestion className="mr-1" />
        Common FAQs I get
      </h2>
      <Accordion type="single" collapsible className="w-11/12 mx-auto">
        {faqs.map(({ id, question, answer }) => (
          <AccordionItem
            key={id}
            value={`item-${id}`}
            className="p-2 rounded-md hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out"
          >
            <AccordionTrigger className="hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out hover:border-border">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
