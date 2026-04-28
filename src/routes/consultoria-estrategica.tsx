import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import consultingImg from "@/assets/images/unit-consulting.jpg";

export const Route = createFileRoute("/consultoria-estrategica")({
  head: () => ({
    meta: [
      { title: "Consultoría Estratégica para Empresas | Evolvix Global" },
      {
        name: "description",
        content: "Consultoría estratégica que transforma tu negocio en resultados medibles. Crecimiento garantizado 25-40% en 6 meses. Auditoría estratégica gratuita.",
      },
    ],
  }),
  component: ConsultingStrategyPage,
});

function ConsultingStrategyPage() {
  const { t } = useLang();
  const p = (t as any).consultingPage;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={consultingImg}
            alt={p.heading}
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        </div>

        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow text-gold">{p.eyebrow}</p>
            <h1 className="mt-8 text-display-xl md:text-display-lg text-titanium leading-[1.0]">
              {p.heading}
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
              {p.body}
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold text-background px-7 py-4 text-mono-label font-semibold hover:bg-gold/90 transition-colors duration-300"
              >
                {p.ctaPrimary}
                <svg width="16" height="6" viewBox="0 0 16 6" fill="none" aria-hidden>
                  <path d="M0 3H14M11 1L15 3L11 5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
              <a
                href="https://wa.me/34XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-titanium px-7 py-4 text-mono-label font-semibold text-titanium hover:bg-titanium hover:text-background transition-colors duration-300"
              >
                {p.ctaSecondary}
              </a>
            </div>
            <div className="mt-4 text-xs font-light text-smoke">
              {p.microcopy}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">{p.problem.eyebrow}</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                {p.problem.heading}
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                {p.problem.body}
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/30 backdrop-blur-sm border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">{p.problem.boxTitle}</h3>
                <ul className="space-y-4 text-left">
                  {p.problem.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                          <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="text-platinum font-light">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="#solution"
                    className="group inline-flex items-center gap-4 bg-titanium text-background px-7 py-4 text-mono-label font-semibold transition-colors duration-500 hover:bg-platinum"
                  >
                    <span>{p.problem.cta}</span>
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

      {/* Solution Section */}
      <section id="solution" className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">{p.solution.eyebrow}</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                {p.solution.heading}
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                {p.solution.body}
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">{p.solution.boxTitle}</h3>
                <ul className="space-y-4 text-left">
                  {p.solution.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-platinum font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">{p.process.eyebrow}</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                {p.process.heading}
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {p.process.steps.map((step: { title: string; desc: string }, i: number) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-gold">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-titanium mb-2">{step.title}</h3>
                    <p className="text-sm text-platinum">{step.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">{p.results.eyebrow}</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                {p.results.heading}
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {p.results.stats.map((stat: { value: string; label: string }, i: number) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
                    <p className="text-sm text-platinum">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-4">{p.results.socialProofTitle}</h3>
                <p className="text-platinum mb-6">{p.results.socialProofBody}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  {p.results.testimonials.map((t: { company: string; quote: string }) => (
                    <div key={t.company}>
                      <p className="text-sm font-semibold text-titanium">{t.company}</p>
                      <p className="text-xs text-platinum">{t.quote}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">{p.cta.eyebrow}</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                {p.cta.heading}
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                {p.cta.body}
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gold mb-2">{p.cta.badge}</div>
                  {p.cta.badgeSub && <p className="text-sm text-platinum line-through">{p.cta.badgeSub}</p>}
                  <p className="text-xs text-platinum mt-2">{p.cta.badgeBody}</p>
                </div>
                <Link
                  to="/contact"
                  className="w-full py-3 px-6 bg-gold text-background font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300 text-center block"
                >
                  {p.cta.ctaBtn}
                </Link>
                <div className="mt-4 text-xs text-platinum text-center">
                  {p.cta.microcopy}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
