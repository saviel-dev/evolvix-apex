import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/resources/logo.png";
import { useLang } from "@/lib/LanguageContext";

const NAV_KEYS = [
  { to: "/ecosystem", key: "ecosystem" },
  { to: "/footprint", key: "footprint" },
  { to: "/board",     key: "board" },
  { to: "/contact",  key: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 text-titanium">
          <img src={logo} alt="Evolvix Logo" className="h-10 w-auto md:h-12" />
          <span className="font-display text-[1.05rem] font-extrabold tracking-[0.18em]">
            EVOLVIX
          </span>
          <span className="hidden text-mono-label text-platinum sm:inline">
            GLOBAL
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:gap-9 lg:flex">
          {NAV_KEYS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-mono-label text-platinum transition-colors duration-300 hover:text-titanium"
              activeProps={{ className: "text-titanium" }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Language switcher */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="relative flex items-center gap-1 text-mono-label transition-colors duration-300 hover:text-titanium"
          >
            <span className={lang === "en" ? "text-titanium" : "text-platinum"}>EN</span>
            <span className="text-platinum">/</span>
            <span className={lang === "es" ? "text-titanium" : "text-platinum"}>ES</span>
          </button>
          <span className="h-3 w-px bg-hairline" />
          <span className="text-mono-label text-platinum">EST. 2018</span>
          <span className="h-3 w-px bg-hairline" />
          <a
            href="#partners"
            className="text-mono-label text-titanium link-line"
          >
            {t.partnerAccess}
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((s) => !s)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-px w-6 bg-titanium transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-titanium transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-background border-t border-hairline transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-edge flex flex-col gap-5 py-8">
          {NAV_KEYS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-2xl font-extrabold tracking-tight text-titanium"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          {/* Language switcher mobile */}
          <button
            onClick={toggle}
            className="mt-4 flex items-center gap-2 text-left text-mono-label"
          >
            <span className={lang === "en" ? "text-titanium" : "text-platinum"}>EN</span>
            <span className="text-platinum">/</span>
            <span className={lang === "es" ? "text-titanium" : "text-platinum"}>ES</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
