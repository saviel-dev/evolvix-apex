import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import img from "@/assets/images/unit-assets.jpg";

export const Route = createFileRoute("/services/asset-management")({
  head: () => ({
    meta: [
      { title: "Asset Management — Evolvix Global" },
      {
        name: "description",
        content:
          "Real estate, private equity and brand expansion. Identifying and developing investment opportunities in strategic environments.",
      },
    ],
  }),
  component: AssetManagementPage,
});

const ASSET_PILLARS = [
  {
    label: "Corporate Real Estate",
    detail:
      "Identification and development of premium corporate real estate in the key financial nodes: Madrid, Dubai, Miami and Cairo.",
  },
  {
    label: "Brand & Group Expansion",
    detail:
      "Strategic management and expansion of Evolvix Global's own brands — driving solid, sustained growth of group assets across new markets in under 24 months.",
  },
  {
    label: "Private Equity & Infra Debt",
    detail:
      "Multi-class portfolio management: private equity stakes, infrastructure debt instruments, and sovereign mandates for institutional capital.",
  },
  {
    label: "Alternative Investment Vehicles",
    detail:
      "Structured alternative vehicles for co-investment alongside institutional partners — aligned with the group's geographic triangle: Europe, MENA, and Americas.",
  },
];

function AssetManagementPage() {
  const { t } = useLang();
  const unit = t.holdings.items.find((item) => item.code === "EVX-04");

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
            <p className="text-eyebrow text-gold">EVX-04 · {unit.tagline}</p>
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
              We identify and develop investment opportunities in strategic
              environments, ensuring solid and sustained growth of the group's
              assets. From corporate real estate to alternative investment
              vehicles — we connect Spanish business tradition with the audacity
              of Arab and American markets.
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
              Capital with precision. Growth with legacy.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {ASSET_PILLARS.map((p, i) => (
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
