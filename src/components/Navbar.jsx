import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { contact, navigation } from "../data/portfolioContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const ctaHref = contact?.email ? `mailto:${contact.email}` : "#contact";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled
          ? "border-white/10 bg-[#0A0A0A]/90 backdrop-blur"
          : "border-transparent bg-[#0A0A0A]"
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100 hover:text-emerald-200"
          onClick={closeMenu}
        >
          Aadil Shrestha
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href={ctaHref} className="primary-cta">
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-zinc-100 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0A0A0A]/95 px-6 py-4 md:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-base font-medium text-zinc-200 hover:bg-white/5 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-300/15 px-4 py-2.5 text-sm font-semibold text-emerald-100 hover:bg-emerald-300/25"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
