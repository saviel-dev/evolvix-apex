import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { GlobalMap, FOOTPRINT_CITIES } from "@/components/GlobalMap";

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

const DETAILS: Record<string, { hours: string; focus: string[]; coords: string }> = {
  Madrid: {
    hours: "GMT+1 · 09:00–22:00",
    focus: ["Operations Hub", "Group Strategy", "EU Compliance"],
    coords: "40.4168° N · 3.7038° W",
  },
  London: {
    hours: "GMT+0 · 07:00–20:00",
    focus: ["Capital Markets", "Investor Relations", "Cross-Border Advisory"],
    coords: "51.5074° N · 0.1276° W",
  },
  Dubai: {
    hours: "GMT+4 · 08:00–21:00",
    focus: ["Emerging Logistics", "MENA Trade", "Sovereign Mandates"],
    coords: "25.2048° N · 55.2708° E",
  },
  Singapore: {
    hours: "GMT+8 · 09:00–22:00",
    focus: ["Innovation Division", "APAC Engineering", "AI Infrastructure"],
    coords: "1.3521° N · 103.8198° E",
  },
};

function FootprintPage() {
  return (
    <>
      <section className="relative bg-background pt-44 pb-12 md:pt-56 md:pb-16">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">Section · Footprint</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[12ch]">
              Global footprint.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum md:text-lg">
              Cuatro nodos operativos diseñados para sincronizar mercado,
              capital y ejecución en cualquier huso horario.
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
              const d = DETAILS[c.name];
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
