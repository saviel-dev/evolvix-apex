import { Link } from "@tanstack/react-router";
import logo from "@/assets/resources/logo.png";

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
              <img src={logo} alt="Evolvix Logo" className="h-12 w-auto md:h-14" />
              <span className="font-display text-xl font-extrabold tracking-[0.18em]">
                EVOLVIX&nbsp;GLOBAL
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-smoke">
              A geographically shielded multi-asset ecosystem. We don't seek clients, we select partners to expand a legacy across four continents.
            </p>
            <div className="mt-8 flex gap-4 text-xs font-semibold tracking-wider text-gold">
              <span className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-sm">ISO/IEC 27001</span>
              <span className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-sm">SOC 2 TYPE II</span>
              <span className="px-3 py-1 border border-gold/30 bg-gold/5 rounded-sm flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                SSL SECURE
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-mono-label text-smoke">Divisions</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/services/energy" className="link-line">Energy Division</Link></li>
              <li><Link to="/services/engineering" className="link-line">Engineering & Infra</Link></li>
              <li><Link to="/services/bpo" className="link-line">Global Services (BPO)</Link></li>
              <li><Link to="/services/asset-management" className="link-line">Asset Management</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Company</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/footprint" className="link-line">Global Footprint</Link></li>
              <li><Link to="/board" className="link-line">Board of Directors</Link></li>
              <li><Link to="/contact" className="link-line">Partner Access</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Operational Nodes</p>
            <p className="mt-6 text-sm font-light leading-relaxed text-titanium">
              Madrid &middot; Par&iacute;s<br />
              Dub&aacute;i &middot; El Cairo<br />
              Miami
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-mono-label text-smoke md:flex-row md:items-center">
          <p>© 2026 Evolvix Global Holding. Restricted Access.</p>
          <div className="flex items-center gap-6">
            <span>EVX Group · MMXXVI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
