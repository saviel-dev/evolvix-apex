import { Link } from "@tanstack/react-router";
import logo from "@/assets/resources/logo.png";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
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
      <div className="container-edge py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          {/* Brand & Socials */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-titanium">
              <img src={logo} alt="Evolvix Logo" className="h-10 w-auto" />
              <span className="font-display text-lg font-extrabold tracking-[0.15em]">
                EVOLVIX&nbsp;GLOBAL
              </span>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-smoke">
              Ecosistema multi-activo protegido geográficamente. Seleccionamos socios estratégicos para expandir un legado en cuatro continentes.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-hairline/50 text-smoke/70 hover:text-gold hover:border-gold/30 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-4">Divisiones</p>
              <ul className="space-y-2 text-sm text-titanium/80">
                <li><Link to="/services/energy" className="hover:text-gold transition-colors">Energía</Link></li>
                <li><Link to="/services/engineering" className="hover:text-gold transition-colors">Ingeniería</Link></li>
                <li><Link to="/services/bpo" className="hover:text-gold transition-colors">BPO</Link></li>
                <li><Link to="/services/asset-management" className="hover:text-gold transition-colors">Real Estate</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-4">Compañía</p>
              <ul className="space-y-2 text-sm text-titanium/80">
                <li><Link to="/footprint" className="hover:text-gold transition-colors">Presencia</Link></li>
                <li><Link to="/board" className="hover:text-gold transition-colors">Equipo</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>

          {/* Compliance/Badges */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
            <p className="text-xs uppercase tracking-widest text-gold/60">Certificaciones</p>
            <div className="flex flex-wrap md:justify-end gap-2 text-[11px] font-mono tracking-wider text-smoke/60">
              <span className="px-2 py-1 border border-hairline bg-surface/10">ISO 27001</span>
              <span className="px-2 py-1 border border-hairline bg-surface/10">SOC 2 TYPE II</span>
              <span className="px-2 py-1 border border-hairline bg-surface/10">SSL SECURE</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 p-4 pb-6 pt-6 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-smoke/50 uppercase tracking-widest">
          <p>© 2026 Evolvix Global · Acceso Restringido</p>
          <div className="flex items-center gap-4">
            <span>EVX Group · MMXXVI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
