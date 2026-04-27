import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/images/hero-architecture.jpg";
import logisticsImg from "@/assets/images/unit-logistics.jpg";
import consultingImg from "@/assets/images/unit-consulting.jpg";
import assetsImg from "@/assets/images/unit-assets.jpg";
import innovationImg from "@/assets/images/unit-innovation.jpg";
import { Reveal } from "@/components/Reveal";
import { GlobalMap, FOOTPRINT_CITIES } from "@/components/GlobalMap";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolvix Global — The Architecture of Success" },
      {
        name: "description",
        content:
          "International holding leading the evolution of strategic assets and services across logistics, capital, intelligence and digital infrastructure.",
      },
      { property: "og:title", content: "Evolvix Global — The Architecture of Success" },
      {
        property: "og:description",
        content:
          "Holding internacional. Operaciones, capital, tecnología y expansión a escala global.",
      },
    ],
  }),
  component: Index,
});

const UNIT_IMGS = [logisticsImg, consultingImg, assetsImg, innovationImg];

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { t } = useLang();

  // Subtle parallax on hero image
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.05)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-background"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          ref={imgRef}
          src={heroImg}
          alt="Brutalist architectural facade — Evolvix Global headquarters"
          width={1920}
          height={1080}
          className="h-[120%] w-full object-cover opacity-55 will-change-transform"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        <div className="absolute inset-0 bg-[var(--gradient-fade-top)]" />
        <div className="absolute inset-0 bg-[var(--gradient-fade-bottom)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Top eyebrow row */}
      <div className="container-edge absolute inset-x-0 top-24 flex items-center justify-between text-mono-label text-titanium md:top-32">
        <span className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
          {t.hero.liveLabel}
        </span>
        <span className="hidden md:inline">N 40°25′ · W 03°41′</span>
      </div>

      <div className="container-edge relative flex min-h-[100svh] flex-col justify-end pb-20 pt-44 md:pt-56">
        <Reveal variant="up">
          <p className="text-eyebrow !text-titanium drop-shadow-md">{t.hero.eyebrow}</p>
        </Reveal>

        <Reveal variant="up" delay={120}>
          <h1 className="mt-8 text-display-xl text-titanium max-w-[18ch]">
            {t.hero.headingLine1}
            <br />
            <span className="text-platinum">{t.hero.headingOf}</span> {t.hero.headingLine2.replace(/^(del|of) /, "")}
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal variant="up" delay={240} className="md:col-span-6 md:col-start-7">
            <p className="max-w-md text-base font-light leading-relaxed text-platinum md:text-lg">
              {t.hero.body}
            </p>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                to="/ecosystem"
                className="group relative inline-flex items-center gap-4 border border-titanium px-7 py-4 text-mono-label text-titanium transition-colors duration-500 hover:bg-titanium hover:text-background"
              >
                <span>{t.hero.ctaPrimary}</span>
                <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
                  <path
                    d="M0 5 H20 M16 1 L20 5 L16 9"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </Link>
              <Link to="/board" className="text-mono-label text-smoke link-line">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Marquee footer */}
        <div className="mt-20 overflow-hidden border-t border-hairline pt-6">
          <div className="flex w-max animate-marquee gap-16 text-mono-label text-smoke">
            {[...Array(2)].flatMap((_, i) =>
              [
                "Madrid · Operations Hub",
                "London · Financial Intelligence",
                "Dubai · Emerging Logistics",
                "Singapore · Innovation Division",
                "ISO/IEC 27001",
                "MMXXVI Edition",
              ].map((text, j) => (
                <span key={`${i}-${j}`} className="flex items-center gap-16">
                  {text}
                  <span className="h-1 w-1 rounded-full bg-smoke/60" />
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const { t } = useLang();
  return (
    <section className="relative bg-background">
      <div className="container-edge grid grid-cols-1 gap-16 py-32 md:grid-cols-12 md:py-44">
        <Reveal variant="up" className="md:col-span-4">
          <p className="text-eyebrow">{t.manifesto.eyebrow}</p>
        </Reveal>
        <Reveal variant="up" delay={120} className="md:col-span-8">
          <p className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-titanium md:text-5xl">
            {t.manifesto.headingLine1}
            <br />
            <span className="text-smoke">{t.manifesto.headingLine2}</span>
          </p>
          <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-platinum">
            {t.manifesto.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function UnitsPreview() {
  const { t } = useLang();
  return (
    <section className="relative bg-background">
      <div className="container-edge border-t border-hairline">
        <Reveal variant="up" className="flex items-end justify-between py-10">
          <div>
            <p className="text-eyebrow">{t.units.eyebrow}</p>
            <h2 className="mt-4 text-display-md text-titanium max-w-[16ch]">
              {t.units.heading}
            </h2>
          </div>
          <Link to="/ecosystem" className="hidden text-mono-label text-titanium link-line md:inline">
            {t.units.seeAll}
          </Link>
        </Reveal>
      </div>

      {t.units.items.map((unit, i) => (
        <UnitFullScreen
          key={unit.title}
          unit={{ ...unit, code: String(i + 1).padStart(2, "0"), img: UNIT_IMGS[i] }}
          reverse={i % 2 === 1}
          totalUnits={t.units.items.length}
          divisionBriefLabel={t.units.divisionBrief}
        />
      ))}
    </section>
  );
}

function UnitFullScreen({
  unit,
  reverse,
  totalUnits,
  divisionBriefLabel,
}: {
  unit: { code: string; title: string; short: string; copy: string; img: string };
  reverse: boolean;
  totalUnits: number;
  divisionBriefLabel: string;
}) {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const wrap = imgWrapRef.current;
      const img = innerRef.current;
      if (!wrap || !img) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      img.style.transform = `translate3d(0, ${progress * -40}px, 0) scale(1.08)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <article className="relative border-t border-hairline">
      <div
        className={`grid min-h-[90svh] grid-cols-1 ${
          reverse ? "md:[grid-template-columns:1fr_1.2fr]" : "md:[grid-template-columns:1.2fr_1fr]"
        }`}
      >
        <div
          ref={imgWrapRef}
          className={`relative overflow-hidden bg-background ${reverse ? "md:order-2" : ""}`}
        >
          <img
            ref={innerRef}
            src={unit.img}
            alt={unit.title}
            width={1600}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 will-change-transform"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
          <div className="absolute left-6 top-6 text-mono-label text-titanium md:left-10 md:top-10">
            {unit.code} / {String(totalUnits).padStart(2, "0")}
          </div>
        </div>

        <div className="flex items-center border-hairline md:border-l">
          <div className="container-edge w-full py-20 md:py-0">
            <Reveal variant="up">
              <p className="text-eyebrow">{unit.short}</p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h3 className="mt-6 text-display-md text-titanium max-w-[18ch]">
                {unit.title}
              </h3>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-8 max-w-md text-base font-light leading-relaxed text-platinum">
                {unit.copy}
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <Link
                to="/ecosystem"
                className="mt-10 inline-flex items-center gap-3 text-mono-label text-titanium link-line"
              >
                {divisionBriefLabel}
                <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden>
                  <path d="M0 4 H16 M13 1 L17 4 L13 7" stroke="currentColor" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

function FootprintPreview() {
  const { t } = useLang();
  return (
    <section className="relative border-t border-hairline bg-background">
      <div className="container-edge py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
          <Reveal variant="up" className="md:col-span-7">
            <p className="text-eyebrow">{t.footprint.eyebrow}</p>
            <h2 className="mt-6 text-display-lg text-titanium max-w-[14ch]">
              {t.footprint.heading}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120} className="md:col-span-5">
            <p className="text-base font-light leading-relaxed text-platinum">
              {t.footprint.body}
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={160} className="mt-14 border border-hairline">
          <GlobalMap />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4">
          {FOOTPRINT_CITIES.map((c) => (
            <div key={c.name} className="bg-background p-6 md:p-8">
              <p className="text-mono-label text-electric">
                {c.name}, {c.country}
              </p>
              <p className="mt-4 font-display text-2xl font-extrabold tracking-tight text-titanium">
                {c.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BoardPreview() {
  const { t } = useLang();
  return (
    <section className="relative border-t border-hairline bg-background">
      <div className="container-edge py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <Reveal variant="up" className="md:col-span-5">
            <p className="text-eyebrow">{t.board.eyebrow}</p>
            <h2 className="mt-6 text-display-lg text-titanium max-w-[16ch]">
              {t.board.headingLine1} <span className="text-smoke">{t.board.headingLine2}</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140} className="md:col-span-6 md:col-start-7">
            <p className="text-base font-light leading-relaxed text-platinum">
              {t.board.body}
            </p>
            <Link
              to="/board"
              className="mt-8 inline-flex text-mono-label text-titanium link-line"
            >
              {t.board.cta}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <UnitsPreview />
      <FootprintPreview />
      <BoardPreview />
    </>
  );
}
