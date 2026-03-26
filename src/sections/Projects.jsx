import { featuredProjects } from "../data/portfolioContent";

const isUsableLink = (href) => Boolean(href) && href !== "#";

const Projects = () => {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Selected case studies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          Three representative projects showing how I approach delivery from
          architecture decisions to measurable operational outcomes.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8"
          >
            <header className="space-y-3">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm font-medium text-slate-400">
                {project.role} · {project.period}
              </p>
              <p className="max-w-4xl text-base leading-relaxed text-slate-300">
                {project.summary}
              </p>
            </header>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                  Challenge
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                  Solution
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.solution}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                  Impact
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {project.impact}
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={`${project.title}-${item}`}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => {
                if (!isUsableLink(link.href)) {
                  return (
                    <span
                      key={`${project.title}-${link.label}`}
                      aria-disabled="true"
                      className="inline-flex cursor-not-allowed items-center rounded-md border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-500"
                    >
                      {link.label} unavailable
                    </span>
                  );
                }

                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={`${project.title}-${link.label}`}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
