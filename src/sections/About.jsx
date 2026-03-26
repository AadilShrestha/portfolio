import { processSteps } from "../data/portfolioContent";


const About = () => {
  return (
    <div className="py-20">
      <header>
        <p className="eyebrow">Process</p>
        <h2 className="section-heading mt-3">How I take work from idea to impact</h2>
        <p className="section-intro">
          A clear delivery rhythm: discover context, architect the right solution, build
          with discipline, and measure what changed.
        </p>
      </header>

      <ol className="mt-10 space-y-5">
        {processSteps.map((step, index) => {

          return (
            <li key={step.title} className="relative pl-16">
              {index < processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[1.7rem] top-12 h-[calc(100%-1rem)] w-px bg-white/15"
                />
              ) : null}

              <article className="panel">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/45 bg-emerald-300/10 text-sm font-semibold text-emerald-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-zinc-50">{step.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-300">{step.description}</p>
                <p className="mt-4 text-sm text-zinc-200">
                  <span className="font-semibold text-zinc-100">Outcome:</span> {step.outcome}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default About;
