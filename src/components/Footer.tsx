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
              We don't just build solutions — we architect the future of your business. Consulting, technology, talent and operations at a global scale.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-mono-label text-smoke">Services</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/ecosystem" className="link-line">Strategic Consulting</Link></li>
              <li><Link to="/ecosystem" className="link-line">Technology & Engineering</Link></li>
              <li><Link to="/ecosystem" className="link-line">Talent Acceleration</Link></li>
              <li><Link to="/ecosystem" className="link-line">Digital Security</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Company</p>
            <ul className="mt-6 space-y-3 text-sm text-titanium">
              <li><Link to="/footprint" className="link-line">Our Presence</Link></li>
              <li><Link to="/board" className="link-line">Our Team</Link></li>
              <li><Link to="/contact" className="link-line">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-mono-label text-smoke">Headquarters</p>
            <p className="mt-6 text-sm font-light leading-relaxed text-titanium">
              Global Operations<br />
              Madrid · London · Dubai
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-mono-label text-smoke md:flex-row md:items-center">
          <p>© 2026 Evolvix Global Group. Access Restricted to Partners.</p>
          <div className="flex items-center gap-6">
            <span>ISO/IEC 27001</span>
            <span className="hidden h-3 w-px bg-hairline md:block" />
            <span>EVX Group · MMXXVI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
