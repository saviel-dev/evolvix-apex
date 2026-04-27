import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import logisticsImg from "@/assets/unit-logistics.jpg";
import consultingImg from "@/assets/unit-consulting.jpg";
import assetsImg from "@/assets/unit-assets.jpg";
import innovationImg from "@/assets/unit-innovation.jpg";

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

const UNITS = [
  {
    code: "01",
    title: "Strategic Logistics & Supply Chain",
    img: logisticsImg,
    headline: "Sincronización absoluta.",
    body: "Convertimos la complejidad logística en una ventaja competitiva global. Diseñamos cadenas de suministro resilientes capaces de operar en mercados volátiles y geografías exigentes.",
    metrics: [
      { k: "Active corridors", v: "47" },
      { k: "Avg. lead-time", v: "−38%" },
      { k: "Coverage", v: "5 continents" },
    ],
  },
  {
    code: "02",
    title: "Global Consulting & Business Intelligence",
    img: consultingImg,
    headline: "La inteligencia precede a la acción.",
    body: "Diseñamos la hoja de ruta para la expansión de grupos líderes. Investigación de mercado, due diligence soberana y arquitectura de decisiones para C-suites globales.",
    metrics: [
      { k: "Mandates", v: "120+" },
      { k: "Sectors", v: "11" },
      { k: "Senior partners", v: "34" },
    ],
  },
  {
    code: "03",
    title: "Asset Management & Investment",
    img: assetsImg,
    headline: "Solidez en la gestión, visión en la inversión.",
    body: "Arquitectura financiera de alta precisión. Allocación multi-clase, infraestructuras alternativas y vehículos privados para capital institucional con horizonte largo.",
    metrics: [
      { k: "AUM", v: "USD 4.2 B" },
      { k: "Vehicles", v: "9" },
      { k: "Net IRR", v: "16.4%" },
    ],
  },
  {
    code: "04",
    title: "Innovation & Digital Infrastructure",
    img: innovationImg,
    headline: "Construyendo el mañana, hoy.",
    body: "Infraestructura digital para que las corporaciones operen sin límites. Plataformas soberanas, data fabric y orquestación de IA aplicada al núcleo del negocio.",
    metrics: [
      { k: "Data centers", v: "3" },
      { k: "Edge nodes", v: "112" },
      { k: "Uptime SLA", v: "99.995%" },
    ],
  },
];

function EcosystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">Section · Ecosystem</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[14ch]">
              The ecosystem.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum md:text-lg">
              Cuatro divisiones interdependientes operadas como un único
              sistema. Capital, mercado, ejecución e inteligencia bajo el mismo
              estándar.
            </p>
          </Reveal>
        </div>
      </section>

      {UNITS.map((u, i) => (
        <article
          key={u.code}
          className="relative border-t border-hairline bg-background"
        >
          <div className="container-edge py-20 md:py-28">
            <div className="flex items-baseline justify-between border-b border-hairline pb-6">
              <p className="text-mono-label text-smoke">{u.code} · Division</p>
              <p className="text-mono-label text-smoke">
                0{i + 1} / 0{UNITS.length}
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

              <Reveal
                variant="fade"
                delay={140}
                className="md:col-span-7"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={u.img}
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
              Engage at the architecture level.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-4 border border-titanium px-7 py-4 text-mono-label text-titanium transition-colors duration-500 hover:bg-titanium hover:text-background"
            >
              Request Partner Access
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
