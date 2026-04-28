import { Link } from "@tanstack/react-router";
import logo from "@/assets/resources/logo.png";

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

export function Footer() {
  return (
    <footer
      id="partners"
      className="relative border-t border-hairline bg-background"
    >
      <div className="container-edge py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Brand col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-titanium">
              <img src={logo} alt="Evolvix Logo" className="h-12 w-auto md:h-14" />
              <span className="font-display text-xl font-extrabold tracking-[0.18em]">
                EVOLVIX&nbsp;GLOBAL
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-smoke">
              A geographically shielded multi-asset ecosystem. We don't seek clients, we select partners to expand a legacy across four continents.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold tracking-wider text-gold">
              <span className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-sm">ISO/IEC 27001</span>
              <span className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-sm">SOC 2 TYPE II</span>
              <span className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-sm flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                SSL SECURE
              </span>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center border border-hairline text-smoke hover:text-gold hover:border-gold/50 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div className="md:col-span-3">
            <p className="text-mono-label text-smoke">Divisions</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/services/energy" className="link-line">Global Trade & Engineering</Link></li>
              <li><Link to="/services/engineering" className="link-line">Business Intelligence</Link></li>
              <li><Link to="/services/bpo" className="link-line">Digital Security</Link></li>
              <li><Link to="/services/asset-management" className="link-line">Project Execution</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Company</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/footprint" className="link-line">Global Footprint</Link></li>
              <li><Link to="/board" className="link-line">Board of Directors</Link></li>
              <li><Link to="/contact" className="link-line">Partner Access</Link></li>
            </ul>
          </div>

          {/* Nodes */}
          <div className="md:col-span-3">
            <p className="text-mono-label text-smoke">Operational Nodes</p>
            <p className="mt-6 text-sm font-light leading-relaxed text-titanium">
              Madrid &middot; Par&iacute;s<br />
              Dub&aacute;i &middot; El Cairo<br />
              Miami
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-mono-label text-smoke md:flex-row md:items-center">
          <p>© 2026 Evolvix Global. Restricted Access.</p>
          <div className="flex items-center gap-6">
            <span>EVX Group · MMXXVI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
