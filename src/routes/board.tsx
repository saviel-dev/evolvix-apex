import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import b1 from "@/assets/board-1.jpg";
import b2 from "@/assets/board-2.jpg";
import b3 from "@/assets/board-3.jpg";
import b4 from "@/assets/board-4.jpg";
import { useLang } from "@/lib/LanguageContext";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "The Board — Evolvix Global" },
      {
        name: "description",
        content:
          "Visionary minds, relentless execution. The leadership team driving strategy, capital and technology across Evolvix Global.",
      },
      { property: "og:title", content: "The Board — Evolvix Global" },
      { property: "og:image", content: b1 },
    ],
  }),
  component: BoardPage,
});

const MEMBER_IMGS = [b1, b2, b3, b4];

function BoardPage() {
  const { t } = useLang();
  const p = t.boardPage;

  return (
    <>
      <section className="relative bg-background pt-44 pb-12 md:pt-56 md:pb-20">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">{p.sectionEyebrow}</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-8 text-display-xl text-titanium max-w-[16ch]">
              {p.headingLine1}
              <br />
              <span className="text-smoke">{p.headingLine2}</span>
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
        <div className="container-edge pb-24 md:pb-32">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2">
            {p.members.map((m, i) => (
              <Reveal
                key={m.name}
                variant="up"
                delay={i * 90}
                className="group relative bg-background"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={MEMBER_IMGS[i]}
                    alt={`${m.name}, ${m.role}`}
                    width={800}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                    <p className="text-mono-label text-electric">
                      0{i + 1} · {m.role}
                    </p>
                    <h3 className="mt-4 text-display-md text-titanium">
                      {m.name}
                    </h3>
                    <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-platinum">
                      {m.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
