import { contact, profile } from "../data/portfolioContent";

const isExternalLink = (href = "") => /^https?:\/\//i.test(href);

const Footer = () => {
  const emailHref = contact?.email ? `mailto:${contact.email}` : "#contact";
  const quickLinks = contact?.links ?? [];
  const socialLinks = profile?.socialLinks ?? [];

  return (
    <footer className="mt-20 rounded-3xl border border-white/10 bg-zinc-900/60 px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.45fr,1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading mt-3 text-3xl sm:text-4xl">{contact.heading}</h2>
          <p className="section-intro mt-4">{contact.description}</p>

          <a href={emailHref} className="primary-cta mt-6">
            Email {profile.name}
          </a>

          <div className="mt-5 space-y-1 text-sm text-zinc-300">
            <p>{contact.availability}</p>
            <p className="text-zinc-400">{contact.responseTime}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Quick links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => {
                const external = isExternalLink(link.href);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-link"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Social
            </h3>
            <ul className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const external = isExternalLink(link.href);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:border-emerald-300/40 hover:text-emerald-200"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-5 text-sm text-zinc-400">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built for teams that need clear
          ownership and measurable delivery.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
