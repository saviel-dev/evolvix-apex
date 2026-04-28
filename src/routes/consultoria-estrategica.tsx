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
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={consultingImg}
            alt="Consultoría Estratégica"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        </div>

        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow text-gold">Servicio · Consultoría Estratégica</p>
            <h1 className="mt-8 text-display-xl md:text-display-lg text-titanium leading-[1.0]">
              Consultoría Estratégica que Transforma tu Negocio en Resultados Medibles
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
              Dejamos de hablar y empezamos a ejecutar. Estrategia clara + implementación garantizada = crecimiento real.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold text-background px-7 py-4 text-mono-label font-semibold hover:bg-gold/90 transition-colors duration-300"
              >
                Agenda tu auditoría estratégica gratuita
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
                Habla con un experto
              </a>
            </div>
            <div className="mt-4 text-xs font-light text-smoke">
              Respuesta garantizada en 24h • Sin compromiso • Valor €2,990
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">¿Tu empresa está estancada?</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                El Costo de No Tener una Dirección Clara
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Tu empresa tiene potencial pero no sabes cómo canalizarlo. Decisiones basadas en corazonadas, procesos ineficientes y crecimiento limitado por falta de dirección clara.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/30 backdrop-blur-sm border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">Señales de que necesitas consultoría estratégica:</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Crecimiento inferior al 15% anual sin causa clara</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Decisiones importantes tomadas sin datos concretos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Equipos trabajando en silos sin objetivos comunes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Competencia avanzando más rápido que tú</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    to="#solution"
                    className="inline-flex items-center gap-3 bg-gold text-background px-6 py-3 text-mono-label font-semibold hover:bg-gold/90 transition-colors duration-300"
                  >
                    Descubre nuestra solución
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
              <p className="text-eyebrow">Nuestra Metodología Probada</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Estrategia que se Ejecuta, no solo se Presenta
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Metodología probada que combina análisis profundo de tu negocio con estrategia ejecutable. No solo te decimos qué hacer, te acompañamos en cada paso del proceso.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">¿Qué incluye nuestra consultoría?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Auditoría completa 360° de tu modelo de negocio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Mapa de oportunidades con impacto € calculado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Hoja de ruta estratégica personalizada (90 días)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">KPIs y métricas de seguimiento en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Sesiones de ejecución semanal con especialistas</span>
                  </li>
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
              <p className="text-eyebrow">Proceso Claro y Medible</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Transformación en 5 Pasos Concretos
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Diagnóstico</h3>
                  <p className="text-sm text-platinum">Análisis completo de tu operación, mercado y competencia</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Estrategia</h3>
                  <p className="text-sm text-platinum">Diseño de roadmap con objetivos claros y timeline definido</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Implementación</h3>
                  <p className="text-sm text-platinum">Ejecución gradual con seguimiento diario</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Optimización</h3>
                  <p className="text-sm text-platinum">Ajustes basados en resultados y KPIs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Escalación</h3>
                  <p className="text-sm text-platinum">Expansión a otras áreas del negocio</p>
                </div>
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
              <p className="text-eyebrow">Resultados Comprobados</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Crecimiento Medible y Sostenible
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">25-40%</div>
                  <p className="text-sm text-platinum">Crecimiento de ingresos en 6 meses</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">20-30%</div>
                  <p className="text-sm text-platinum">Reducción de costos operativos</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">3.2x</div>
                  <p className="text-sm text-platinum">ROI promedio en primer año</p>
                </div>
              </div>
              
              <div className="mt-12 bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-4">Prueba Social</h3>
                <p className="text-platinum mb-6">200+ empresas han transformado su modelo de negocio con nosotros</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <p className="text-sm font-semibold text-titanium">TechCorp</p>
                    <p className="text-xs text-platinum">"Crecimos 35% en 6 meses, el ROI fue visible desde el mes 2"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-titanium">ManufacturaPro</p>
                    <p className="text-xs text-platinum">"Redujimos costos 28% y duplicamos nuestra eficiencia operativa"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-titanium">RetailMax</p>
                    <p className="text-xs text-platinum">"La claridad estratégica nos permitió expandir a 3 nuevos mercados"</p>
                  </div>
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
              <p className="text-eyebrow">Comienza tu Transformación</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                ¿Listo para Dejar de Estancarte y Empezar a Crecer?
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Agenda tu auditoría estratégica gratuita. Analizamos tu situación y te damos un plan de acción sin compromiso.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gold mb-2">GRATIS</div>
                  <p className="text-sm text-platinum line-through">Valor normal: €2,990</p>
                  <p className="text-xs text-platinum mt-2">Auditoría estratégica completa + plan de acción</p>
                </div>
                <Link
                  to="/contact"
                  className="w-full py-3 px-6 bg-gold text-background font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300 text-center block"
                >
                  Agenda tu auditoría gratuita ahora
                </Link>
                <div className="mt-4 text-xs text-platinum text-center">
                  Plazas limitadas: 5 auditorías gratis este mes
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
