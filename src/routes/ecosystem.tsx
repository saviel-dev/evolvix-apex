import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import logisticsImg from "@/assets/images/unit-logistics.jpg";
import consultingImg from "@/assets/images/unit-consulting.jpg";
import assetsImg from "@/assets/images/unit-assets.jpg";
import innovationImg from "@/assets/images/unit-innovation.jpg";
import { useLang } from "@/lib/LanguageContext";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — Evolvix Global" },
      {
        name: "description",
        content:
          "Four interdependent divisions: Strategic Logistics, Global Consulting, Asset Management, and Innovation & Digital Infrastructure.",
      },
      { property: "og:title", content: "Ecosystem — Evolvix Global" },
      {
        property: "og:description",
        content:
          "Cuatro divisiones interdependientes diseñadas para sostener crecimiento sin fricción a escala internacional.",
      },
      { property: "og:image", content: assetsImg },
    ],
  }),
  component: EcosystemPage,
});

const UNIT_IMGS = [logisticsImg, consultingImg, assetsImg, innovationImg];

function EcosystemPage() {
  const { t } = useLang();
  const p = t.ecosystemPage;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">{p.sectionEyebrow}</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[14ch]">
              {p.heading}
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum md:text-lg">
              {p.body}
            </p>
          </Reveal>
        </div>
      </section>

      {p.units.map((u, i) => (
        <article
          key={u.title}
          className="relative border-t border-hairline bg-background"
        >
          <div className="container-edge py-20 md:py-28">
            <div className="flex items-baseline justify-between border-b border-hairline pb-6">
              <p className="text-mono-label text-smoke">
                {String(i + 1).padStart(2, "0")} · {p.divisionLabel}
              </p>
              <p className="text-mono-label text-smoke">
                0{i + 1} / 0{p.units.length}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal variant="up" className="md:col-span-5">
                <h2 className="text-display-md text-titanium max-w-[14ch]">
                  {u.title}
                </h2>
                <p className="mt-8 font-display text-xl font-medium text-platinum">
                  {u.headline}
                </p>
                <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-smoke">
                  {u.body}
                </p>

                <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden border border-hairline bg-hairline">
                  {u.metrics.map((m) => (
                    <div key={m.k} className="bg-background p-5">
                      <dt className="text-mono-label text-smoke">{m.k}</dt>
                      <dd className="mt-3 font-display text-2xl font-extrabold text-titanium">
                        {m.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal variant="fade" delay={140} className="md:col-span-7">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={UNIT_IMGS[i]}
                    alt={u.title}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
                </div>
              </Reveal>
            </div>
          </div>
        </article>
      ))}

      {/* CTA */}
      <section className="relative border-t border-hairline bg-background">
        <div className="container-edge py-24 md:py-32">
          <Reveal variant="up">
            <h2 className="text-display-lg text-titanium max-w-[18ch]">
              {p.ctaHeading}
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-4 border border-titanium px-7 py-4 text-mono-label text-titanium transition-colors duration-500 hover:bg-titanium hover:text-background"
            >
              {p.ctaBtn}
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
                <path d="M0 5 H20 M16 1 L20 5 L16 9" stroke="currentColor" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
