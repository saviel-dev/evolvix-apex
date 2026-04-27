import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/resources/logo.png";
import { useLang } from "@/lib/LanguageContext";

const NAV_KEYS = [
  { to: "/footprint", key: "footprint" },
  { to: "/board",     key: "board" },
  { to: "/contact",  key: "contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    setDropdownOpen(false);
  }, [location.pathname]);

  const getRouteForCode = (code: string) => {
    switch (code) {
      case "EVX-01": return "/services/energy";
      case "EVX-02": return "/services/engineering";
      case "EVX-03": return "/services/bpo";
      case "EVX-04": return "/services/asset-management";
      default: return "/";
    }
  };

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
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-mono-label text-platinum transition-colors duration-300 hover:text-titanium flex items-center gap-1">
              {t.nav.services}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full -left-4 pt-6 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="flex flex-col min-w-[280px] bg-background/95 backdrop-blur-xl border border-hairline p-2">
                {t.holdings.items.map((item) => (
                  <Link
                    key={item.code}
                    to={getRouteForCode(item.code)}
                    className="px-4 py-3 text-sm text-platinum hover:text-titanium hover:bg-surface/50 transition-colors"
                  >
                    <span className="block font-medium">{item.name}</span>
                    <span className="block text-xs text-smoke mt-0.5">{item.tagline}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

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
        className={`lg:hidden overflow-y-auto bg-background border-t border-hairline transition-[max-height] duration-500 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="container-edge flex flex-col gap-5 py-8">
          <div className="flex flex-col gap-3 mb-2">
            <span className="text-sm text-smoke uppercase tracking-wider">{t.nav.services}</span>
            <div className="flex flex-col gap-4 pl-4 border-l border-hairline">
              {t.holdings.items.map((item) => (
                <Link
                  key={item.code}
                  to={getRouteForCode(item.code)}
                  className="font-display text-xl font-extrabold tracking-tight text-titanium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
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
