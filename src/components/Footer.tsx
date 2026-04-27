import { Link } from "@tanstack/react-router";
import { EvolvixMark } from "./EvolvixMark";

export function Footer() {
  return (
    <footer
      id="partners"
      className="relative border-t border-hairline bg-background"
    >
      <div className="container-edge py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-titanium">
              <EvolvixMark size={36} />
              <span className="font-display text-xl font-extrabold tracking-[0.18em]">
                EVOLVIX&nbsp;GLOBAL
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-smoke">
              The architecture of success — a holding designed to lead complexity
              across logistics, capital, intelligence and digital infrastructure.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-mono-label text-smoke">Ecosystem</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/ecosystem" className="link-line">Logistics & Supply Chain</Link></li>
              <li><Link to="/ecosystem" className="link-line">Consulting & Intelligence</Link></li>
              <li><Link to="/ecosystem" className="link-line">Asset Management</Link></li>
              <li><Link to="/ecosystem" className="link-line">Innovation & Infrastructure</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Group</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/footprint" className="link-line">Footprint</Link></li>
              <li><Link to="/board" className="link-line">The Board</Link></li>
              <li><Link to="/contact" className="link-line">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Headquarters</p>
            <p className="mt-6 text-sm font-light leading-relaxed text-titanium">
              Paseo de la Castellana<br />
              28046 Madrid, ES
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-mono-label text-smoke md:flex-row md:items-center">
          <p>© 2026 Evolvix Global Group. Access Restricted to Partners.</p>
          <div className="flex items-center gap-6">
            <span>ISO/IEC 27001</span>
            <span className="hidden h-3 w-px bg-hairline md:block" />
            <span>v3.2 — RE-ENGINEERING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
