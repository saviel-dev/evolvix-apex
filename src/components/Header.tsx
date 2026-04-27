import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { EvolvixMark } from "./EvolvixMark";

const NAV = [
  { to: "/", label: "Index" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/footprint", label: "Footprint" },
  { to: "/board", label: "Board" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 text-titanium">
          <EvolvixMark size={28} />
          <span className="font-display text-[1.05rem] font-extrabold tracking-[0.18em]">
            EVOLVIX
          </span>
          <span className="hidden text-mono-label text-smoke sm:inline">
            GLOBAL
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-mono-label text-smoke transition-colors duration-300 hover:text-titanium"
              activeProps={{ className: "text-titanium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="text-mono-label text-smoke">EST. 2018</span>
          <span className="h-3 w-px bg-hairline" />
          <a
            href="#partners"
            className="text-mono-label text-titanium link-line"
          >
            Partner&nbsp;Access
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((s) => !s)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
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
        className={`md:hidden overflow-hidden border-t border-hairline transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-edge flex flex-col gap-5 py-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-display text-2xl font-extrabold tracking-tight text-titanium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
