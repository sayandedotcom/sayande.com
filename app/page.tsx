import { site, intro, experience, projects, skills, writing } from "./content";

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function highlightKeywords(text: string, isFirst: boolean, keywords?: string[]) {
  const mutedClass = isFirst
    ? "text-neutral-700 dark:text-neutral-200"
    : "text-neutral-600 dark:text-neutral-400";
  if (!keywords || keywords.length === 0) {
    return <span className={mutedClass}>{text}</span>;
  }
  let result = text;
  keywords.forEach((kw) => {
    result = result.replace(kw, `<span class="font-medium text-neutral-900 dark:text-neutral-100">${kw}</span>`);
  });
  return <span className={mutedClass} dangerouslySetInnerHTML={{ __html: result }} />;
}

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
                <span className="text-neutral-500 dark:text-neutral-500">
                  {" "}
                  ·{" "}
                </span>
                <span>
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
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

      {projects.length > 0 && (
        <>
          <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
            Projects
          </h2>
          <div className="mb-8 space-y-3">
            {projects.map((project, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-neutral-500 dark:text-neutral-400">
                  <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                    {project.name}
                  </span>
                  {project.engineering && project.engineering.map((eng, k) => (
                    <a
                      key={k}
                      href={eng}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 hover:text-neutral-700 dark:hover:text-neutral-200 hover:underline text-sm"
                    >
                      <span>·</span>
                      <ArrowIcon />
                      <span className="ml-1">
                        {project.name === "Genie" && k === 0 ? "Uber's Blog" : project.name === "Genie" ? "My Blog" : "Engineering"}
                      </span>
                    </a>
                  ))}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 hover:text-neutral-700 dark:hover:text-neutral-200 hover:underline text-sm"
                    >
                      <span>·</span>
                      <ArrowIcon />
                      <span className="ml-1">Live</span>
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 hover:text-neutral-700 dark:hover:text-neutral-200 hover:underline text-sm"
                    >
                      <span>·</span>
                      <ArrowIcon />
                      <span className="ml-1">Code</span>
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 hover:text-neutral-700 dark:hover:text-neutral-200 hover:underline text-sm"
                    >
                      <span>·</span>
                      <ArrowIcon />
                      <span className="ml-1">Video</span>
                    </a>
                  )}
                </div>
                {project.bio && (
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {project.bio}
                  </p>
                )}
                {project.bullets && project.bullets.length > 0 && (
                  <ul className="list-disc text-sm space-y-0.5 mt-1 pl-4">
                    {project.bullets.map((bullet, j) => (
                      <li key={j} className="pl-1">{highlightKeywords(bullet, j === 0, project.highlights)}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {writing.length > 0 && (
        <>
          <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tighter">
            Writings
          </h2>
          <div className="mb-8">
            <div className="space-y-1">
              {writing.map((post) => (
                <a
                  key={post.slug}
                  className="flex flex-col md:flex-row md:space-x-2"
                  href={post.slug}
                >
                  <p className="text-neutral-500 dark:text-neutral-500 md:w-28 shrink-0 tabular-nums">
                    {post.date}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:underline">
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
