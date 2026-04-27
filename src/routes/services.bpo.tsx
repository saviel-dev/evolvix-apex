import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import img from "@/assets/images/unit-innovation.jpg";

export const Route = createFileRoute("/services/bpo")({
  head: () => ({
    meta: [
      { title: "Global Services (BPO) — Evolvix Global" },
      {
        name: "description",
        content:
          "High-performance contact centers and corporate support. Technology and human capital at the service of client relationships.",
      },
    ],
  }),
  component: BPOPage,
});

const BPO_PILLARS = [
  {
    label: "Premium Contact Centers",
    detail:
      "High-level contact center operations delivering institutional-grade client relationships. Pure scalability based on human capital and technology.",
  },
  {
    label: "Finance & Compliance",
    detail:
      "Outsourced finance, audit-readiness and regulatory compliance functions delivered to the standards demanded by Fortune 500 corporations.",
  },
  {
    label: "Tech Support & Back-Office",
    detail:
      "End-to-end back-office operations: technical support, helpdesk, digital processing and corporate workflow optimization.",
  },
  {
    label: "Geographic Cost Arbitrage",
    detail:
      "Operational centers strategically positioned in Egypt — leveraging the MENA region's competitive operational costs with European management standards.",
  },
];

function BPOPage() {
  const { t } = useLang();
  const unit = t.holdings.items.find((item) => item.code === "EVX-03");

  if (!unit) return null;

  return (
    <>
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={img}
            alt={unit.name}
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        </div>

        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow text-gold">EVX-03 · {unit.tagline}</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[14ch]">
              {unit.name}
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum md:text-lg">
              {unit.body}
            </p>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-smoke">
              Technology and human capital at the service of client
              relationships. We operate global response centers with premium
              quality standards — where pure scalability meets institutional
              service delivery. Positioned to leverage Egypt's operational
              efficiency with Spain and France's technological standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-24 md:py-32">
          <Reveal variant="up">
            <p className="text-eyebrow text-gold">Key Capabilities</p>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-titanium md:text-4xl max-w-[20ch]">
              Scalability. Human capital. Institutional grade.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {BPO_PILLARS.map((p, i) => (
              <Reveal key={p.label} variant="up" delay={i * 80}>
                <div className="bg-background p-8 md:p-10 h-full flex flex-col gap-4">
                  <span className="text-mono-label text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg font-bold tracking-tight text-titanium leading-tight">
                    {p.label}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-smoke mt-auto">
                    {p.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={300}>
            <div className="mt-16 flex gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 border border-titanium px-6 py-3 text-mono-label text-titanium transition-colors hover:bg-titanium hover:text-background"
              >
                {t.nav.contact} →
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-mono-label text-smoke link-line"
              >
                ← Back to Holdings
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
