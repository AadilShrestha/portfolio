import { profile, proofMetrics } from "../data/portfolioContent";

const Hero = () => {
  return (
    <div className="py-10 md:py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
        {profile.role} · {profile.location}
      </p>

      <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-5 max-w-3xl text-xl font-medium leading-relaxed text-slate-100">
        {profile.headline}
      </p>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={profile.primaryCta.href}
          className="inline-flex items-center rounded-md bg-orange px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
        >
          {profile.primaryCta.label}
        </a>
        <a
          href={profile.secondaryCta.href}
          className="inline-flex items-center rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
        >
          {profile.secondaryCta.label}
        </a>
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
        {profile.socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="underline decoration-slate-500 decoration-2 underline-offset-4 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <dt className="text-sm text-slate-400">{metric.label}</dt>
            <dd className="mt-2 text-3xl font-semibold text-white">{metric.value}</dd>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{metric.detail}</p>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Hero;
