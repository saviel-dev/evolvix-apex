import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/images/hero.jpg";
import heroArchImg from "@/assets/images/hero-architecture.jpg";
import tradeImg from "@/assets/images/comercio internacional.png";
import biImg from "@/assets/images/inteligenci de negocia.png";
import securityImg from "@/assets/images/seguridad digital.png";
import projectsImg from "@/assets/images/entrega de proyecto.png";
import growthImg from "@/assets/images/hero-growth.png";
import aiTeamImg from "@/assets/images/equipo-ai.png";
import aiImplementationImg from "@/assets/images/implemetacion-ai.png";
import aiResultsImg from "@/assets/images/resultados de trabajo.png";
import { Reveal } from "@/components/Reveal";
import { GlobalMap, FOOTPRINT_CITIES } from "@/components/GlobalMap";
import { useEffect, useRef, useState } from "react";
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

function TypingNumber({
  value,
  delay = 0,
  duration = 2000,
  className = "",
}: {
  value: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const hasPercentage = value.includes("%");
    const isInteger = Number.isInteger(numericValue);

    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTimer = setTimeout(() => {
        const startTime = Date.now();

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = numericValue * easeOutQuart;

          let formattedValue: string;
          if (isInteger) {
            formattedValue = Math.round(currentValue).toString();
          } else {
            formattedValue = currentValue.toFixed(1);
          }

          setDisplayValue(formattedValue + (hasPercentage ? "%" : ""));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        animate();
      }, delay);

      return () => clearTimeout(startTimer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay, duration]);

  return <span ref={containerRef} className={className}>{displayValue}</span>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolvix Global — The Architecture of Success" },
      {
        name: "description",
        content:
          "B2B operations partner — international trade, business intelligence, digital security and project delivery across Europe, MENA and America.",
      },
      { property: "og:title", content: "Evolvix Global — The Architecture of Success" },
      {
        property: "og:description",
        content:
          "Partner operacional B2B — comercio internacional, inteligencia de negocio, seguridad digital y entrega de proyectos en Europa, MENA y América.",
      },
    ],
  }),
  component: Index,
});

const UNIT_IMGS = [tradeImg, biImg, securityImg, projectsImg];

const HERO_SLIDES = [
  { src: heroImg, alt: "Brutalist architectural facade — Evolvix Global headquarters" },
  { src: heroArchImg, alt: "Modern architecture — Evolvix Global infrastructure" },
];

const SLIDE_DURATION = 6000; // ms

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLang();

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  // Subtle parallax on all hero images
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      imgRefs.current.forEach((img) => {
        if (!img) return;
        img.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.05)`;
      });
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
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            ref={(el) => { imgRefs.current[i] = el; }}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1080}
            fetchPriority={i === 0 ? "high" : undefined}
            loading={i === 0 ? undefined : "lazy"}
            className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
            style={{
              opacity: activeSlide === i ? 0.55 : 0,
              transition: "opacity 1.4s ease-in-out",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        <div className="absolute inset-0 bg-[var(--gradient-fade-top)]" />
        <div className="absolute inset-0 bg-[var(--gradient-fade-bottom)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              id={`hero-slide-btn-${i}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
              className="h-[2px] transition-all duration-500 cursor-pointer"
              style={{
                width: activeSlide === i ? "32px" : "12px",
                background: activeSlide === i ? "var(--color-titanium)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-edge relative flex min-h-[100svh] flex-col pb-20 pt-24 md:pt-32">

        {/* Live label — top of flow */}
        <div className="flex items-center justify-between text-mono-label text-titanium">
          <span className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse-glow" />
            {t.hero.liveLabel}
          </span>
          <span className="hidden md:inline">N 40°25′ · W 03°41′</span>
        </div>

        {/* Spacer — small gap between live label and eyebrow */}
        <div className="h-16 md:flex-1" />

        {/* Eyebrow */}
        <Reveal variant="up">
          <p className="text-eyebrow !text-titanium drop-shadow-md">{t.hero.eyebrow}</p>
        </Reveal>

        {/* Title — full width, dominant */}
        <Reveal variant="up" delay={120}>
          <h1 className="mt-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-titanium leading-[1.1] tracking-tight text-balance">
            <TypingText text={t.hero.headingLine1} delay={300} />
            <br />
            {t.hero.headingOf && <span className="text-platinum"><TypingText text={t.hero.headingOf} delay={300 + (t.hero.headingLine1.length * 40)} /> </span>}
            <TypingText text={t.hero.headingLine2.replace(/^(del|of) /, "")} delay={300 + ((t.hero.headingLine1.length + (t.hero.headingOf?.length || 0)) * 40)} />
          </h1>
        </Reveal>

        {/* Subtitle — reinforces value */}
        <Reveal variant="up" delay={240}>
          <h2 className="mt-8 text-xl md:text-2xl font-semibold text-titanium max-w-2xl">
            {t.hero.subtitle}
          </h2>
        </Reveal>

        {/* Service bullets — clear benefits */}
        <Reveal variant="up" delay={320}>
          <ul className="mt-6 max-w-lg space-y-2 text-base font-light leading-relaxed text-platinum">
            {t.hero.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Description + CTAs — below title, left-aligned */}
        <Reveal variant="up" delay={400}>
          <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-platinum">
            {t.hero.body}
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-4 border border-titanium px-7 py-4 text-mono-label text-titanium transition-colors duration-500 hover:bg-titanium hover:text-background"
            >
              <span>{t.hero.ctaPrimary}</span>
              <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden>
                <path d="M0 5 H20 M16 1 L20 5 L16 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </Link>
            <Link to="#services" className="mt-4 text-mono-label text-platinum underline underline-offset-4 decoration-platinum/50 hover:decoration-platinum transition-all duration-200">
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Microcopy - reduce friction */}
          <div className="mt-4 text-xs font-light text-white">
            {t.hero.ctaMicrocopy}
          </div>
        </Reveal>

        {/* Spacer — absorbs remaining hero height, pins marquee to bottom */}
        <div className="flex-1" />

        {/* Marquee ticker */}
        <div className="overflow-hidden border-t border-hairline pt-6">
          <div className="flex w-max animate-marquee gap-16 text-lg text-smoke">
            {[...Array(2)].flatMap((_, i) =>
              [
                "Madrid · Central Operations",
                "París · Innovation Hub",
                "Miami · America Gateway",
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

function ProblemSection() {
  const { t } = useLang();
  const p = t.problem;
  return (
    <section className="relative bg-background border-t border-hairline">
      <div className="container-edge py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="up">
            <p className="text-eyebrow">{p.eyebrow}</p>
            <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1] text-balance">
              {p.heading}
            </h2>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-platinum mx-auto">
              {p.body}
            </p>
          </Reveal>

          <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
            <div className="bg-surface/30 backdrop-blur-sm border border-hairline rounded-lg p-8">
              <h3 className="text-lg font-semibold text-titanium mb-6">{t.ui.painBoxTitle}</h3>
              <ul className="space-y-4 text-left">
                {p.painPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-platinum font-light">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center w-full">
                <Link
                  to="#solution"
                  className="group relative inline-flex items-center gap-4 bg-titanium text-background px-7 py-4 text-mono-label font-semibold transition-colors duration-500 hover:bg-platinum"
                >
                  <span>{p.cta}</span>
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                    <path d="M0 5 H20 M16 1 L20 5 L16 9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const { t } = useLang();
  const s = t.solution;
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);

  const benefitDetails = t.ui.solutionBenefitDetails;

  const toggleBenefit = (index: number) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <section id="solution" className="relative bg-background border-t border-hairline overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={growthImg}
          alt="Solution Background"
          className="h-full w-full object-cover opacity-[0.20]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/90" />
      </div>
      <div className="container-edge py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="up" className="w-full">
            <div className="relative overflow-hidden border border-hairline bg-background/45 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
              <img
                src={growthImg}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/70" />
              <div className="relative z-10">
                <p className="text-eyebrow">{s.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-titanium text-balance sm:text-4xl md:text-display-md">
                  {s.heading}
                </h2>
                <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-platinum mx-auto sm:text-base md:text-lg">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 w-full max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {s.benefits.map((benefit: string, index: number) => (
                <Reveal key={index} variant="pop" delay={150 + index * 100}>
                  <div className="bg-surface/20 border border-hairline rounded-lg overflow-hidden h-full">
                    <div className="p-6 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-titanium mb-2">{benefit}</h4>
                        <button
                          onClick={() => toggleBenefit(index)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-titanium bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/50 rounded-full transition-all duration-300"
                        >
                          {expandedBenefit === index ? t.ui.seeLess : t.ui.seeMore}
                          <svg
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            className={`transition-transform duration-300 ${expandedBenefit === index ? 'rotate-180' : ''}`}
                          >
                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedBenefit === index ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-sm font-light leading-relaxed text-platinum">
                          {benefitDetails[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal variant="up" delay={600}>
              <div className="mt-12 flex justify-center w-full">
                <Link
                  to="#how-it-works"
                  className="group relative inline-flex items-center gap-4 bg-titanium text-background px-7 py-4 text-mono-label font-semibold transition-colors duration-500 hover:bg-platinum"
                >
                  <span>{s.cta}</span>
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
                    <path d="M0 5 H20 M16 1 L20 5 L16 9" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePackagesSection() {
  const { t } = useLang();
  const packages = t.servicePackages.packages;

  return (
    <section className="relative bg-background border-t border-hairline">
      <div className="container-edge py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Reveal variant="up">
            <p className="text-eyebrow">{t.servicePackages.eyebrow}</p>
            <h2 className="mt-6 text-display-md text-titanium leading-[1.1] text-balance">
              {t.servicePackages.heading}
            </h2>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum mx-auto">
              {t.servicePackages.subheading}
            </p>
          </Reveal>

          <Reveal variant="up" delay={200} className="mt-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg: any, index: number) => (
                <div key={pkg.id} className={`relative ${index === 1
                  ? 'bg-gold/5 border-2 border-gold/30 scale-105'
                  : 'bg-surface/20 border border-hairline'
                  } rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-gold/30`}>

                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gold text-background px-4 py-1 text-xs font-semibold rounded-full">
                        {t.ui.mostPopular}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-titanium mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gold font-medium">{pkg.tagline}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-platinum">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <span>{pkg.forWho}</span>
                    </div>

                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-sm font-medium text-titanium mb-2">{t.ui.problemSolvedLabel}</p>
                      <p className="text-xs text-platinum">{pkg.problem}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-titanium">{t.ui.includesLabel}</p>
                    {pkg.includes.map((item: string, itemIndex: number) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-xs text-platinum">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gold/10 rounded-lg p-3">
                      <p className="text-xs font-medium text-titanium mb-1">{t.ui.expectedResultLabel}</p>
                      <p className="text-xs text-platinum">{pkg.result}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-platinum">{t.ui.durationLabel}</span>
                      <span className="text-sm font-semibold text-titanium">{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="mb-4">
                      {pkg.specialOffer ? (
                        <div>
                          <span className="text-2xl font-bold text-gold">{pkg.specialOffer}</span>
                          <p className="text-xs text-platinum line-through">{t.ui.normalPriceLabel} {pkg.price}</p>
                        </div>
                      ) : (
                        <div>
                          <span className="text-2xl font-bold text-titanium">{pkg.price}</span>
                          {pkg.financing && <p className="text-xs text-platinum">{pkg.financing}</p>}
                          {pkg.payment && <p className="text-xs text-platinum">{pkg.payment}</p>}
                        </div>
                      )}
                    </div>

                    <button className="w-full py-3 px-4 bg-titanium text-background font-semibold rounded-lg hover:bg-titanium/90 transition-colors duration-300">
                      {pkg.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm font-medium text-gold mb-2">{t.servicePackages.guarantee}</p>
              <p className="text-xs text-platinum">{t.servicePackages.urgency}</p>
            </div>
          </Reveal>
        </div>
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
    titleEs: "Bravura",
    desc: "We do not fear complex markets. Our boldness allows us to lead where others cannot reach.",
    descEs: "No tememos a los mercados complejos. Nuestra bravura nos permite liderar donde otros no llegan.",
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
            {isEs ? "Evolvix Global · El Valor de Nuestras Siglas" : "Evolvix Global · The Value of Our Acronym"}
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
        <Reveal variant="up" className="flex items-end justify-between py-6">
          <div>
            <p className="text-eyebrow">{t.holdings.eyebrow}</p>
            <h2 className="mt-2 text-display-md text-titanium max-w-[16ch]">
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
          divisionBriefLabel={t.holdings.seeAll}
        />
      ))}

      <AIIntelligenceSection />
    </section>
  );
}

function AIIntelligenceSection() {
  const { lang } = useLang();
  const isEs = lang === "es";

  const heading = isEs
    ? "Servicios de Inteligencia Artificial para liderar tu mercado."
    : "Enterprise-grade Artificial Intelligence services.";

  const body = isEs
    ? "No ofrecemos IA generica: construimos ventaja competitiva real. Disenamos e implementamos automatizacion avanzada, analitica predictiva y asistentes inteligentes con desarrollos propios para administracion publica y sector privado. Nuestro equipo de mas de 40 expertos de primer nivel mundial, junto a liderazgo senior con mas de 20+ anos de experiencia, ejecuta proyectos de alto impacto que convierten tecnologia en crecimiento, eficiencia y posicionamiento de liderazgo."
    : "We implement AI solutions focused on business impact: advanced automation, predictive analytics, and intelligent assistants. We provide proprietary developments for public administration and the private sector, supported by a team of more than 40 of the world's top AI experts. Our senior leadership combines 20+ years of accumulated experience in strategy, technology, and execution to deliver measurable results in mission-critical operations.";

  const bullets = isEs
    ? [
      "Arquitecturas de IA propias y a medida para operaciones complejas",
      "Soluciones para administracion publica y empresas con estandares de grado institucional",
      "Implementacion de elite con foco en ROI, velocidad y liderazgo competitivo",
    ]
    : [
      "Tailored AI architectures aligned with your operation",
      "Scalable model workflows with governance and security by design",
      "Premium execution with senior guidance end-to-end",
    ];

  const photosTitle = isEs
    ? "Espacio para agendar fotos del area de IA"
    : "Reserved space for AI service photos";

  const photoLabels = isEs
    ? [
      "Equipo IA de Alto Rendimiento",
      "Implementacion Inteligente en Accion",
      "Resultados Reales y Medibles",
    ]
    : [
      "High-Performance AI Team",
      "Intelligent Implementation in Action",
      "Real, Measurable Results",
    ];

  const aiPhotos = [
    { src: aiTeamImg, label: photoLabels[0] },
    { src: aiImplementationImg, label: photoLabels[1] },
    { src: aiResultsImg, label: photoLabels[2] },
  ];

  return (
    <section className="border-t border-hairline bg-background">
      <div className="container-edge py-16 md:py-24">
        <Reveal variant="up" className="max-w-4xl">
          <p className="text-eyebrow text-gold">
            {isEs ? "Nueva Unidad · Inteligencia Artificial" : "New Unit · Artificial Intelligence"}
          </p>
          <h3 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-titanium text-balance sm:text-4xl md:text-display-md">
            {heading}
          </h3>
          <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg font-light leading-relaxed text-platinum">
            {body}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-3">
          {bullets.map((item, index) => (
            <Reveal key={item} variant="up" delay={120 + index * 80}>
              <div className="bg-background p-4 sm:p-6 md:p-8 h-full">
                <p className="text-mono-label text-gold/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-titanium font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={260} className="mt-10">
          <p className="text-mono-label text-smoke mb-4">{photosTitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {aiPhotos.map((photo) => (
              <div
                key={photo.label}
                className="group relative h-36 sm:h-40 md:h-52 overflow-hidden border border-hairline bg-surface/20"
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-75 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-left text-[11px] sm:text-xs md:text-sm text-platinum">
                  {photo.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
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
        className={`grid grid-cols-1 ${reverse ? "md:[grid-template-columns:1.5fr_1fr]" : "md:[grid-template-columns:1fr_1.5fr]"
          }`}
      >
        <div
          ref={imgWrapRef}
          className={`relative overflow-hidden bg-background ${reverse ? "md:order-2" : ""}`}
          style={{ minHeight: "clamp(160px, 20svh, 45svh)" }}
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

        </div>

        <div className="flex items-center justify-center border-hairline md:border-l bg-background">
          <div className="w-full max-w-xl px-8 py-6 md:px-12 lg:px-16">
            <Reveal variant="up">
              <p className="text-eyebrow text-gold">{unit.tagline}</p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h3 className="mt-3 text-xl md:text-3xl text-titanium leading-tight">
                {unit.name}
              </h3>
            </Reveal>
            <Reveal variant="up" delay={200}>
              <p className="mt-4 text-sm font-light leading-relaxed text-platinum md:text-base">
                {unit.body}
              </p>
            </Reveal>
            <Reveal variant="up" delay={300}>
              <Link
                to={getRouteForCode(unit.code)}
                className="mt-6 inline-flex items-center gap-3 text-mono-label text-titanium link-line"
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
        <div className="flex flex-col items-center text-center gap-8">
          <Reveal variant="up">
            <p className="text-eyebrow">{t.footprint.eyebrow}</p>
            <h2 className="mt-6 text-display-lg text-titanium max-w-[22ch]">
              {t.footprint.heading}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-platinum">
              {t.footprint.body}
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={160} className="mt-14 border border-hairline">
          <GlobalMap />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-4">
          {FOOTPRINT_CITIES.map((c) => (
            <div key={c.name} className="bg-background p-5 md:p-10 flex flex-col gap-4">
              <p className="text-mono-label text-gold/80 uppercase tracking-[0.2em] text-[10px]">
                {c.name} — {c.country}
              </p>
              <p className="font-display text-xl font-bold tracking-tight text-titanium md:text-3xl leading-[1.1]">
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
      <div className="container-edge py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal variant="up">
            <p className="text-eyebrow">{t.board.eyebrow}</p>
            <h2 className="mt-6 text-display-md md:text-display-lg text-titanium leading-[1.1]">
              {t.board.headingLine1} <br className="hidden md:block" />
              <span className="text-smoke">{t.board.headingLine2}</span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={140} className="mt-8 flex flex-col items-center">
            <p className="text-base font-light leading-relaxed text-platinum md:text-lg">
              {t.board.body}
            </p>
            <Link
              to="/board"
              className="mt-10 inline-flex text-mono-label text-titanium link-line"
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
            <Reveal key={`${pillar.letter}-${i}`} variant="up" delay={i * 50}>
              <div className="group border border-hairline bg-surface/30 backdrop-blur-sm p-5 md:p-8 h-full flex flex-col transition-colors duration-500 hover:border-gold/30 hover:bg-surface">
                <span className="font-mono text-4xl md:text-5xl font-bold text-gold/80 mb-4 transition-transform duration-500 group-hover:scale-110 origin-left">
                  {pillar.letter}
                </span>
                <h3 className="font-display text-sm md:text-xl font-semibold text-titanium mb-2 text-balance">{pillar.title}</h3>
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
    { value: "40%", label: isEs ? "Reducción de retrasos en comercio internacional" : "Reduction in international trade delays", delay: 0 },
    { value: "60%", label: isEs ? "Menos tiempo en reporting con BI" : "Less time spent on reporting with BI", delay: 200 },
    { value: "5", label: isEs ? "Ciudades: Madrid, París, Miami, Dubái y El Cairo" : "Cities: Madrid, Paris, Miami, Dubai & Cairo", delay: 400 },
    { value: "95%", label: isEs ? "Proyectos entregados en plazo y presupuesto" : "Projects delivered on time and on budget", delay: 600 },
  ];
  return (
    <section className="border-t border-b border-hairline bg-surface/20">
      <div className="container-edge py-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, index) => (
          <Reveal key={s.value + s.label} variant="up" delay={index * 100}>
            <div className="flex flex-col items-center text-center gap-1">
              <span className="font-display text-2xl font-extrabold text-gold md:text-4xl">
                <TypingNumber value={s.value} delay={s.delay} duration={1500} />
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
      <ProblemSection />
      <SolutionSection />
      {/* <ServicePackagesSection /> */}
      {/* <EvolvixPillarsSection /> */}
      <ExponentialSection />
      <InvestmentThesis />
      <UnitsPreview />
      <FootprintPreview />
      <BoardPreview />
    </>
  );
}


