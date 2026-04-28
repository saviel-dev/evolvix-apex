import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/images/hero-architecture.jpg";
import energyImg from "@/assets/images/subestacion electrica.png";
import consultingImg from "@/assets/images/unit-consulting.jpg";
import assetsImg from "@/assets/images/unit-assets.jpg";
import innovationImg from "@/assets/images/unit-innovation.jpg";
import { Reveal } from "@/components/Reveal";
import { GlobalMap, FOOTPRINT_CITIES } from "@/components/GlobalMap";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import gsap from "gsap";

function TypingText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Build DOM: split by words first to prevent weird line breaks, then wrap characters
    const words = text.split(" ");
    el.innerHTML = words
      .map((word) => {
        const chars = word
          .split("")
          .map((ch) => `<span class="letter" style="opacity:0; display:inline-block">${ch}</span>`)
          .join("");
        return `<span style="display:inline-block; white-space:nowrap">${chars}</span>`;
      })
      .join(`<span class="letter" style="display:inline-block; opacity:0">&nbsp;</span>`);

    const letters = el.querySelectorAll(".letter");

    gsap.to(letters, {
      opacity: 1,
      duration: 0.25,
      stagger: 0.04,
      ease: "power1.out",
      delay: delay / 1000, // convert ms to seconds
    });

    return () => {
      gsap.killTweensOf(letters);
    };
  }, [text, delay]);

  // Outer span must be 'inline' so it flows naturally inside block-level h1
  return <span ref={containerRef} className={className} style={{ display: "inline" }} />;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolvix Global — The Architecture of Success" },
      {
        name: "description",
        content:
          "B2B operations partner — international trade, business intelligence, digital security and project delivery across Europe, MENA and the Americas.",
      },
      { property: "og:title", content: "Evolvix Global — The Architecture of Success" },
      {
        property: "og:description",
        content:
          "Partner operacional B2B — comercio internacional, inteligencia de negocio, seguridad digital y entrega de proyectos en Europa, MENA y las Américas.",
      },
    ],
  }),
  component: Index,
});

const UNIT_IMGS = [energyImg, consultingImg, assetsImg, innovationImg];

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
          <h1 className="mt-8 text-display-lg text-titanium w-full">
            <TypingText text={t.hero.headingLine1} delay={300} />
            <br />
            {t.hero.headingOf && <span className="text-platinum"><TypingText text={t.hero.headingOf} delay={300 + (t.hero.headingLine1.length * 40)} /> </span>}
            <TypingText text={t.hero.headingLine2.replace(/^(del|of) /, "")} delay={300 + ((t.hero.headingLine1.length + (t.hero.headingOf?.length || 0)) * 40)} />
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal variant="up" delay={240} className="md:col-span-6 md:col-start-7">
            <p className="max-w-md text-base font-light leading-relaxed text-platinum md:text-lg">
              {t.hero.body}
            </p>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link
                to="#services"
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

        <div className="mt-20 overflow-hidden border-t border-hairline pt-6">
          <div className="flex w-max animate-marquee gap-16 text-mono-label text-smoke">
            {[...Array(2)].flatMap((_, i) =>
              [
                "Madrid · Central Operations",
                "París · Innovation Hub",
                "Miami · Americas Gateway",
                "Dubái · Capital & Emerging Markets",
                "El Cairo · Infrastructure & MENA",
                "EVOLVIX GLOBAL · B2B Operations Partner",
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
      <div className="container-edge grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:py-44">
        <Reveal variant="up" className="md:col-span-4">
          <p className="text-eyebrow">{t.manifesto.eyebrow}</p>
        </Reveal>
        <Reveal variant="up" delay={120} className="md:col-span-8">
          <p className="font-display text-2xl font-medium leading-[1.1] tracking-tight text-titanium md:text-5xl">
            {t.manifesto.headingLine1}
            <br />
            <span className="text-gold">{t.manifesto.headingLine2}</span>
          </p>
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-platinum">
            {t.manifesto.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const EVOLVIX_PILLARS = [
  {
    letter: "E",
    title: "Excellence",
    titleEs: "Excelencia",
    desc: "Our metric is perfection. Across every division, the standard is absolute excellence.",
    descEs: "Nuestra métrica es la perfección. En cada división, el estándar es la excelencia absoluta.",
  },
  {
    letter: "B",
    title: "Boldness",
    titleEs: "Audacia",
    desc: "We do not fear complex markets. Our boldness allows us to lead where others cannot reach.",
    descEs: "No tememos a los mercados complejos. Nuestra audacia nos permite liderar donde otros no llegan.",
  },
  {
    letter: "L",
    title: "Legacy",
    titleEs: "Legado",
    desc: "We do not work for the current quarter, but for the next generations. We build legacy.",
    descEs: "No trabajamos para el trimestre actual, sino para las próximas generaciones. Construimos legado.",
  },
  {
    letter: "E",
    title: "Execution",
    titleEs: "Ejecución",
    desc: "Strategy is worthless without results. We are experts at making things happen.",
    descEs: "La estrategia no vale nada sin resultados. Somos expertos en hacer que las cosas sucedan.",
  },
];

function EvolvixPillarsSection() {
  const { lang } = useLang();
  const isEs = lang === "es";
  return (
    <section className="relative bg-background border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom-left,rgba(197,160,89,0.04)_0%,transparent_60%)]" />
      <div className="container-edge relative z-10 py-24 md:py-32">
        <Reveal variant="up">
          <p className="text-eyebrow text-gold">
            {isEs ? "§ — Evolvix Global · El Valor de Nuestras Siglas" : "§ — Evolvix Global · The Value of Our Acronym"}
          </p>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-titanium md:text-4xl max-w-[22ch]">
            {isEs
              ? "Los pilares que definen Evolvix Global."
              : "The pillars that define Evolvix Global."}
          </h2>
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-smoke">
            {isEs
              ? "EVOLVIX no es un acrónimo vacío. Es el pilar conceptual sobre el que Evolvix Global construye su identidad como empresa multisectorial de origen español."
              : "EVOLVIX is not just a name. It is the foundational pillar upon which Evolvix Global builds its identity as a Spanish-origin multi-sector company."}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4">
          {EVOLVIX_PILLARS.map((p, i) => (
            <Reveal key={`${p.letter}-${i}`} variant="up" delay={i * 80}>
              <div className="group bg-background p-5 md:p-10 h-full flex flex-col gap-3 transition-colors duration-500 hover:bg-surface/40">
                <span className="font-mono text-4xl md:text-5xl font-bold text-gold/70 mb-2 transition-transform duration-500 group-hover:scale-110 origin-left">
                  {p.letter}
                </span>
                <p className="font-display text-sm md:text-base font-bold tracking-tight text-titanium leading-tight">
                  {isEs ? p.titleEs : p.title}
                </p>
                <p className="text-xs md:text-sm font-light leading-relaxed text-smoke mt-auto">
                  {isEs ? p.descEs : p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UnitsPreview() {
  const { t } = useLang();
  return (
    <section id="services" className="relative bg-background">
      <div className="container-edge border-t border-hairline">
        <Reveal variant="up" className="flex items-end justify-between py-10">
          <div>
            <p className="text-eyebrow">{t.holdings.eyebrow}</p>
            <h2 className="mt-4 text-display-md text-titanium max-w-[16ch]">
              {t.holdings.heading}
            </h2>
          </div>
        </Reveal>
      </div>

      {t.holdings.items.map((unit, i) => (
        <UnitFullScreen
          key={unit.name}
          unit={{ ...unit, img: UNIT_IMGS[i] }}
          reverse={i % 2 === 1}
          totalUnits={t.holdings.items.length}
          divisionBriefLabel="Details"
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
  unit: { code: string; name: string; tagline: string; body: string; img: string };
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

  const getRouteForCode = (code: string) => {
    switch (code) {
      case "EVX-01": return "/services/energy";
      case "EVX-02": return "/services/engineering";
      case "EVX-03": return "/services/bpo";
      case "EVX-04": return "/services/asset-management";
      default: return "/";
    }
  };

  return (
    <article className="relative border-t border-hairline">
      <div
        className={`grid grid-cols-1 ${
          reverse ? "md:[grid-template-columns:1fr_1.2fr]" : "md:[grid-template-columns:1.2fr_1fr]"
        }`}
      >
        <div
          ref={imgWrapRef}
          className={`relative overflow-hidden bg-background ${reverse ? "md:order-2" : ""}`}
          style={{ minHeight: "clamp(240px, 50svh, 90svh)" }}
        >
          <img
            ref={innerRef}
            src={unit.img}
            alt={unit.name}
            width={1600}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 will-change-transform"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
          <div className="absolute left-4 top-4 text-mono-label text-titanium md:left-10 md:top-10">
            {unit.code} / {String(totalUnits).padStart(2, "0")}
          </div>
        </div>

        <div className="flex items-center justify-center border-hairline md:border-l bg-background">
          <div className="w-full max-w-xl px-8 py-16 md:px-16 lg:px-24">
            <Reveal variant="up">
              <p className="text-eyebrow text-gold">{unit.tagline}</p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h3 className="mt-5 text-display-md text-titanium leading-tight">
                {unit.name}
              </h3>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-6 text-base font-light leading-relaxed text-platinum md:text-lg">
                {unit.body}
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <Link
                to={getRouteForCode(unit.code)}
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
            <div key={c.name} className="bg-background p-4 md:p-8">
              <p className="text-mono-label text-gold">
                {c.name}, {c.country}
              </p>
              <p className="mt-3 font-display text-lg font-extrabold tracking-tight text-titanium md:text-2xl">
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

function InvestmentThesis() {
  const { t } = useLang();
  const p = t.thesis;
  return (
    <section className="relative bg-background border-t border-hairline">
      <div className="container-edge py-24 md:py-36">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
          <Reveal variant="up" className="md:col-span-5">
            <p className="text-eyebrow text-gold">{p.eyebrow}</p>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-titanium max-w-[18ch] md:text-4xl">
              {p.headingLine1}{" "}
              <span className="text-gold">{p.headingLine2}</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120} className="md:col-span-6 md:col-start-7">
            <p className="text-base font-light leading-relaxed text-platinum max-w-xl">
              {p.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 md:grid-cols-3">
          {p.pillars.map((pillar, i) => (
            <Reveal key={pillar.label} variant="up" delay={i * 80}>
              <div className="bg-background p-8 md:p-10 h-full flex flex-col gap-4">
                <span className="text-mono-label text-gold">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-lg font-bold tracking-tight text-titanium leading-tight">
                  {pillar.label}
                </p>
                <p className="text-sm font-light leading-relaxed text-smoke mt-auto">
                  {pillar.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function ExponentialSection() {
  const { t } = useLang();
  // We use type assertion since it might complain if TS isn't synced yet
  const p = (t as any).exponential;

  if (!p) return null;

  return (
    <section className="relative bg-background border-t border-hairline py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />
      <div className="container-edge relative z-10">
        <Reveal variant="up" className="max-w-3xl">
          <p className="text-eyebrow text-gold">{p.eyebrow}</p>
          <h2 className="mt-6 text-display-md text-titanium leading-[1.1]">{p.heading}</h2>
          <p className="mt-8 text-base font-light leading-relaxed text-platinum">{p.body}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {p.pillars.map((pillar: any, i: number) => (
            <Reveal key={pillar.letter} variant="up" delay={i * 50}>
              <div className="group border border-hairline bg-surface/30 backdrop-blur-sm p-5 md:p-8 h-full flex flex-col transition-colors duration-500 hover:border-gold/30 hover:bg-surface">
                <span className="font-mono text-4xl md:text-5xl font-bold text-gold/80 mb-4 transition-transform duration-500 group-hover:scale-110 origin-left">
                  {pillar.letter}
                </span>
                <h3 className="font-display text-base md:text-xl font-semibold text-titanium mb-2">{pillar.title}</h3>
                <p className="text-xs md:text-sm font-light leading-relaxed text-smoke">{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const { lang } = useLang();
  const isEs = lang === "es";
  const stats = [
    { value: "40%", label: isEs ? "Reducción de retrasos en comercio internacional" : "Reduction in international trade delays" },
    { value: "60%", label: isEs ? "Menos tiempo en reporting con BI" : "Less time spent on reporting with BI" },
    { value: "5", label: isEs ? "Ciudades: Madrid, París, Miami, Dubái y El Cairo" : "Cities: Madrid, Paris, Miami, Dubai & Cairo" },
    { value: "95%", label: isEs ? "Proyectos entregados en plazo y presupuesto" : "Projects delivered on time and on budget" },
  ];
  return (
    <section className="border-t border-b border-hairline bg-surface/20">
      <div className="container-edge py-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <Reveal key={s.value + s.label} variant="up">
            <div className="flex flex-col items-center text-center gap-1">
              <span className="font-display text-2xl font-extrabold text-gold md:text-4xl">
                {s.value}
              </span>
              <span className="text-[0.65rem] md:text-xs font-light leading-snug text-smoke max-w-[12ch] md:max-w-[14ch]">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ManifestoSection />
      <EvolvixPillarsSection />
      <ExponentialSection />
      <InvestmentThesis />
      <UnitsPreview />
      <FootprintPreview />
      <BoardPreview />
    </>
  );
}


