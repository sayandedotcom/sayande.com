export const site = {
  name: "Sayan De",
  // TODO: replace with your real one-line tagline (shown under the h1)
  tagline: "TODO: your one-line tagline",
  // TODO: replace with a real meta description (used for SEO + social previews)
  description: "TODO: a short description of who you are and what you do",
  url: "https://sayande.com",
  email: "sayandeten@gmail.com",
};

// TODO: replace with your real intro paragraphs (each string is one <p>)
export const intro: string[] = [
  "TODO: first intro paragraph — who you are, what you work on, what you care about.",
  "TODO: second intro paragraph — current role, interests, location.",
];

export const experience: {
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
}[] = [
  {
    role: "TODO: Role",
    company: "TODO: Company",
    start: "TODO: Mon YYYY",
    end: "Present",
    description: "TODO: one-line description of what you built/did here.",
  },
];

export const skills: { label: string; value: string }[] = [
  { label: "Languages", value: "TODO: e.g. TypeScript, Python" },
  { label: "Frontend", value: "TODO: e.g. React, Next.js" },
  { label: "Backend", value: "TODO: e.g. Node, Postgres" },
];

export const writing: { date: string; title: string; slug: string }[] = [
  // TODO: add real posts once /blog/[slug] exists; slug currently links to "#"
];

export const social: { label: string; href: string }[] = [
  { label: "email", href: `mailto:${site.email}` },
  { label: "github", href: "https://github.com/TODO" },
  { label: "linkedin", href: "https://linkedin.com/in/TODO" },
];
