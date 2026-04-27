import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { GlobalMap, FOOTPRINT_CITIES } from "@/components/GlobalMap";
import { useLang } from "@/lib/LanguageContext";

export const Route = createFileRoute("/footprint")({
  head: () => ({
    meta: [
      { title: "Global Footprint — Evolvix Global" },
      {
        name: "description",
        content:
          "Madrid, London, Dubai, Singapore. A coordinated network synchronising capital, market and execution across Europe, the Middle East and Asia-Pacific.",
      },
      { property: "og:title", content: "Global Footprint — Evolvix Global" },
      {
        property: "og:description",
        content:
          "Una red coordinada entre Europa, Oriente Medio y Asia-Pacífico.",
      },
    ],
  }),
  component: FootprintPage,
});

function FootprintPage() {
  const { t } = useLang();
  const p = t.footprintPage;

  return (
    <>
      <section className="relative bg-background pt-44 pb-12 md:pt-56 md:pb-16">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">{p.sectionEyebrow}</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[12ch]">
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

      <section className="relative bg-background">
        <div className="container-edge">
          <Reveal variant="fade" className="border border-hairline">
            <GlobalMap />
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="container-edge py-24 md:py-32">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
            {FOOTPRINT_CITIES.map((c, i) => {
              const d = p.details[c.name as keyof typeof p.details];
              return (
                <Reveal
                  key={c.name}
                  variant="up"
                  delay={i * 80}
                  className="bg-background p-8 md:p-12"
                >
                  <div className="flex items-baseline justify-between">
                    <p className="text-mono-label text-electric">
                      0{i + 1} · {c.name}, {c.country}
                    </p>
                    <p className="text-mono-label text-smoke">{d.hours}</p>
                  </div>
                  <h3 className="mt-6 text-display-md text-titanium">
                    {c.role}
                  </h3>
                  <p className="mt-4 text-mono-label text-smoke">{d.coords}</p>
                  <ul className="mt-10 space-y-3 text-sm font-light text-platinum">
                    {d.focus.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 border-t border-hairline pt-3"
                      >
                        <span className="h-1 w-1 rounded-full bg-electric" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
