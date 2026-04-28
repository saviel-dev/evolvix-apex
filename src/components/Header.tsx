import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/resources/logo.png";
import { useLang } from "@/lib/LanguageContext";

const NAV_KEYS = [
  { to: "/footprint", key: "footprint" },
  { to: "/board",     key: "board" },
  { to: "/talent",    key: "talent" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { lang, t, toggle } = useLang();
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled || open
            ? "bg-background/95 backdrop-blur-xl border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="container-edge flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 text-titanium">
            <img src={logo} alt="Evolvix Logo" className="h-9 w-auto md:h-12" />
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
              <span className="font-display text-[1rem] md:text-[1.05rem] font-extrabold tracking-[0.18em] leading-none">
                EVOLVIX
              </span>
              <span className="text-[0.6rem] md:text-[0.8rem] md:font-medium text-platinum tracking-[0.3em] md:tracking-[0.25em] uppercase font-sans mt-1 md:mt-0 leading-none">
                GLOBAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:gap-9 lg:flex">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`text-mono-label transition-all duration-300 hover:text-titanium flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-titanium after:transition-all after:duration-300 hover:after:w-full ${
                  dropdownOpen ? "text-titanium after:w-full after:bg-titanium" : "text-platinum"
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                {t.nav.services}
                <svg
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  className={`opacity-50 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full -left-4 pt-4 transition-all duration-300 ${
                  dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                }`}
                style={{ minWidth: "320px" }}
              >
                <div className="bg-background/98 backdrop-blur-xl border border-hairline shadow-2xl">
                  <div className="px-2 py-2">
                    {t.holdings.items.map((item) => (
                      <Link
                        key={item.code}
                        to={getRouteForCode(item.code)}
                        className="group flex items-start gap-3 px-4 py-3.5 rounded-sm hover:bg-surface/50 transition-colors duration-200"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-hairline text-gold text-[10px] font-mono font-bold">
                          {item.code.replace("EVX-", "")}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-titanium group-hover:text-gold transition-colors duration-200">
                            {item.name}
                          </span>
                          <span className="block text-xs text-smoke mt-0.5">
                            {item.tagline}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-hairline px-6 py-3">
                    <Link
                      to="/contact"
                      className="flex items-center gap-2 text-xs font-semibold text-gold hover:text-gold/80 transition-colors"
                    >
                      {lang === "es" ? "Contactar con un especialista →" : "Talk to a specialist →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {NAV_KEYS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-mono-label text-platinum transition-all duration-300 hover:text-titanium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-titanium after:transition-all after:duration-300 hover:after:w-full"
                activeProps={{ className: "text-titanium after:w-full after:bg-titanium" }}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          {/* Desktop right area */}
          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="relative flex items-center gap-1 text-mono-label transition-colors duration-300 hover:text-titanium"
            >
              <span className={lang === "en" ? "text-gold" : "text-platinum"}>EN</span>
              <span className="text-platinum">/</span>
              <span className={lang === "es" ? "text-gold" : "text-platinum"}>ES</span>
            </button>
            <span className="h-3 w-px bg-hairline" />
            <a
              href="/contact"
              className="text-mono-label text-titanium link-line"
            >
              {t.partnerAccess}
            </a>
          </div>

          {/* Mobile right: language + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="flex items-center gap-1 text-mono-label text-platinum hover:text-titanium transition-colors duration-200 px-1"
            >
              <span className={lang === "en" ? "text-gold font-bold" : "text-platinum"}>EN</span>
              <span className="text-platinum opacity-40">/</span>
              <span className={lang === "es" ? "text-gold font-bold" : "text-platinum"}>ES</span>
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="flex h-10 w-10 items-center justify-center"
            >
            <span className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-6 bg-titanium transition-all duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-titanium transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-titanium transition-all duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ── */}
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-background border-l border-hairline shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-hairline px-6 md:h-20">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 text-titanium">
            <img src={logo} alt="Evolvix Logo" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="font-display text-[0.9rem] font-extrabold tracking-[0.18em] leading-none">EVOLVIX</span>
              <span className="text-[0.55rem] text-platinum tracking-[0.3em] leading-none mt-1 uppercase font-sans">GLOBAL</span>
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center border border-hairline text-platinum hover:text-titanium hover:border-titanium transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Sidebar Body — scrollable */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">

          {/* Services section */}
          <div className="mb-4">
            <button
              onClick={() => setServicesOpen((s) => !s)}
              className="flex w-full items-center justify-between py-2 text-xs font-bold uppercase tracking-[0.15em] text-smoke"
            >
              {t.nav.services}
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-400 ${
                servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 flex flex-col gap-px border border-hairline">
                {t.holdings.items.map((item) => (
                  <Link
                    key={item.code}
                    to={getRouteForCode(item.code)}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 bg-background p-4 hover:bg-surface/40 transition-colors duration-200"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-hairline text-gold text-[10px] font-mono font-bold group-hover:border-gold/50 transition-colors">
                      {item.code.replace("EVX-", "")}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-titanium leading-tight">
                        {item.name}
                      </span>
                      <span className="block text-xs text-smoke mt-0.5">
                        {item.tagline}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-hairline my-2" />

          {/* Main nav links */}
          <div className="flex flex-col gap-1">
            {NAV_KEYS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3 text-base font-display font-bold tracking-tight text-titanium hover:text-gold transition-colors duration-200 group"
                activeProps={{ className: "text-gold" }}
              >
                {t.nav[item.key]}
                <svg
                  width="16" height="7" viewBox="0 0 16 7" fill="none"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-hidden
                >
                  <path d="M0 3.5H14M11 1L15 3.5L11 6" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </Link>
            ))}
          </div>

          {/* Separator */}
          <div className="h-px w-full bg-hairline my-2" />

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 border border-gold/60 bg-gold/5 py-3.5 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors duration-200"
          >
            {lang === "es" ? "Hablar con un especialista" : "Talk to a specialist"}
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" aria-hidden>
              <path d="M0 3H12M9.5 1L12.5 3L9.5 5" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </Link>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-hairline px-6 py-5 flex flex-col gap-4">
          {/* Language + EST */}
          <div className="flex items-center justify-between">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="flex items-center gap-1 text-mono-label transition-colors duration-300 hover:text-titanium"
            >
              <span className={lang === "en" ? "text-gold" : "text-platinum"}>EN</span>
              <span className="text-platinum">/</span>
              <span className={lang === "es" ? "text-gold" : "text-platinum"}>ES</span>
            </button>
            <span className="text-mono-label text-smoke">EST. 2018</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center border border-hairline text-smoke hover:text-gold hover:border-gold/50 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
