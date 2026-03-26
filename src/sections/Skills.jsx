import { capabilities } from "../data/portfolioContent";

const Skills = () => {
  return (
    <div className="py-20">
      <header>
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-heading mt-3">What I can own end-to-end</h2>
        <p className="section-intro">
          Core delivery strengths I bring to product teams and client engagements.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((capability) => (
          <article key={capability.title} className="panel h-full">
            <h3 className="text-xl font-semibold text-zinc-50">{capability.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{capability.summary}</p>

            <ul className="mt-5 space-y-2">
              {capability.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-zinc-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
