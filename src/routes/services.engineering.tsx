import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import img from "@/assets/images/unit-consulting.jpg";

export const Route = createFileRoute("/services/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering & Infra — Evolvix Global" },
      {
        name: "description",
        content:
          "High-complexity technical projects, industrial architecture and project direction for governmental and private clients.",
      },
    ],
  }),
  component: EngineeringPage,
});

const ENGINEERING_PILLARS = [
  {
    label: "High-Complexity Technical Projects",
    detail:
      "We design and execute projects of the highest technical complexity — from industrial architecture to the management of large-scale construction works.",
  },
  {
    label: "Government & Private Mandates",
    detail:
      "Trusted technical arm for governmental infrastructure programs and private sector flagship developments across Spain, MENA and the Americas.",
  },
  {
    label: "Integral Engineering Solutions",
    detail:
      "Comprehensive engineering services that fuse technical vanguard with operational efficiency — from concept to commissioning.",
  },
  {
    label: "Industrial Asset Direction",
    detail:
      "Technical direction of mission-critical industrial assets: logistics parks, data centers, transport corridors and heavy infrastructure.",
  },
];

function EngineeringPage() {
  const { t } = useLang();
  const unit = t.holdings.items.find((item) => item.code === "EVX-02");

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
            <p className="text-eyebrow text-gold">EVX-02 · {unit.tagline}</p>
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
              Integral engineering solutions that fuse technical vanguard with
              operational efficiency. The technical arm of Grupo EBLE — trusted
              for consulting and high-level architecture on governmental and
              private projects across four continents.
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
              Technical excellence at every scale.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
            {ENGINEERING_PILLARS.map((p, i) => (
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
