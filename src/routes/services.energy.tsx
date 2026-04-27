import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import img from "@/assets/images/subestacion electrica.png";

export const Route = createFileRoute("/services/energy")({
  head: () => ({
    meta: [
      { title: "Energy Division — Evolvix Global" },
      {
        name: "description",
        content:
          "Renewable and conventional energy assets, long-term concessions and grid infrastructure across emerging and developed markets.",
      },
    ],
  }),
  component: EnergyPage,
});

const ENERGY_PILLARS = [
  {
    label: "Long-Term Concessions",
    detail:
      "Secured energy concessions in key markets providing stable, recurring cash flow independent of short-term price volatility.",
  },
  {
    label: "Grid Infrastructure",
    detail:
      "Design, financing and operation of transmission and distribution infrastructure across MENA and European corridors.",
  },
  {
    label: "Energy Trading",
    detail:
      "Active commercialization of energy assets through institutional-grade trading desks. We guarantee our clients' energy sovereignty.",
  },
  {
    label: "Renewable Assets",
    detail:
      "Solar, wind and hybrid renewable portfolios developed in Egypt, Spain and the UAE — markets with the highest growth in constructive and financial capital.",
  },
];

function EnergyPage() {
  const { t } = useLang();
  const unit = t.holdings.items.find((item) => item.code === "EVX-01");

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
            <p className="text-eyebrow text-gold">EVX-01 · {unit.tagline}</p>
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
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-smoke md:text-base">
              We guarantee the energy sovereignty of our clients through
              intelligent management of resources and the commercialization of
              high-yield assets. Operating across the Eje MENA (Dubai / Egypt)
              and the Eje Europeo (Madrid / Paris) — the world's fastest-growing
              markets for constructive and financial capital.
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
              Sector with recurring, stable cash flow.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {ENERGY_PILLARS.map((p, i) => (
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
