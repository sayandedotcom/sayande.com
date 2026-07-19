import { site, intro, experience, skills, writing } from "./content";

export default function Home() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {site.name}
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        {site.tagline}
      </p>

      {intro.map((paragraph, i) => (
        <p key={i} className="mb-4">
          {paragraph}
        </p>
      ))}

      <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
        Experience
      </h2>
      <div className="mb-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.role}`} className="mb-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <span className="font-medium">{job.role}</span>
                <span className="text-neutral-500 dark:text-neutral-500"> · </span>
                <span>{job.company}</span>
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm tabular-nums">
                {job.start} – {job.end}
              </p>
            </div>
            <p className="mt-1 text-neutral-700 dark:text-neutral-300 text-sm">
              {job.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
        Skills
      </h2>
      <div className="mb-8 space-y-1 text-neutral-800 dark:text-neutral-200">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="flex flex-col md:flex-row md:space-x-2"
          >
            <p className="text-neutral-500 dark:text-neutral-500 md:w-28 shrink-0">
              {skill.label}
            </p>
            <p>{skill.value}</p>
          </div>
        ))}
      </div>

      {writing.length > 0 && (
        <>
          <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
            Writing
          </h2>
          <div className="mb-8">
            <div className="space-y-1">
              {writing.map((post) => (
                <a
                  key={post.slug}
                  className="flex flex-col md:flex-row md:space-x-2"
                  href={`/blog/${post.slug}`}
                >
                  <p className="text-neutral-500 dark:text-neutral-500 md:w-28 shrink-0 tabular-nums">
                    {post.date}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
