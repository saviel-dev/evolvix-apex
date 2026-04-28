import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import techImg from "@/assets/images/inteligenci de negocia.png";

export const Route = createFileRoute("/desarrollo-tecnologico")({
  head: () => ({
    meta: [
      { title: "Desarrollo de Software a Medida | Evolvix Global" },
      {
        name: "description",
        content: "Desarrollo tecnológico personalizado para tu negocio. Software a medida que resuelve problemas reales. Eficiencia +60%, errores -95%. Propuesta en 24h.",
      },
    ],
  }),
  component: TechnologyDevelopmentPage,
});

function TechnologyDevelopmentPage() {
  const { t } = useLang();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={techImg}
            alt="Desarrollo Tecnológico"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        </div>

        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow text-gold">Servicio · Desarrollo Tecnológico</p>
            <h1 className="mt-8 text-display-xl md:text-display-lg text-titanium leading-[1.0]">
              Desarrollo Tecnológico que Resuelve Problemas Reales, no Crea Complicaciones
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
              Software construido para tu negocio, no al revés. Soluciones que funcionan desde el día uno.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold text-background px-7 py-4 text-mono-label font-semibold hover:bg-gold/90 transition-colors duration-300"
              >
                Solicita propuesta de desarrollo
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
                Habla con un desarrollador
              </a>
            </div>
            <div className="mt-4 text-xs font-light text-smoke">
              Respuesta garantizada en 24h • Sin compromiso • Análisis gratuito
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">¿La tecnología te frena en lugar de ayudarte?</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                El Costo de Usar Software que no se Adapta a Ti
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Software genérico que no se adapta a tus procesos, sistemas desintegrados que hablan idiomas diferentes, y desarrollo que nunca termina o no funciona como esperabas.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/30 backdrop-blur-sm border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">Señales de que necesitas desarrollo a medida:</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Tu equipo pierde horas en procesos manuales repetitivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Sistemas que no se comunican entre sí</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Errores constantes por intervención humana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">No puedes escalar porque los procesos dependen de personas</span>
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
              <p className="text-eyebrow">Desarrollo Ágil y Centrado en Resultados</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Software que se Integra Perfectamente con tu Negocio
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Desarrollo ágil de soluciones tecnológicas a medida que se integran perfectamente con tu operación actual. Desde análisis hasta implementación y soporte continuo.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">¿Qué incluye nuestro desarrollo?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Análisis de requisitos y diseño de arquitectura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Desarrollo de software personalizado (web, móvil, desktop)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Integración con sistemas existentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Testing exhaustivo y control de calidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Capacitación de tu equipo y documentación completa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Soporte técnico 24/7 durante primeros 3 meses</span>
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
              <p className="text-eyebrow">Proceso de Desarrollo Transparente</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                De la Idea a la Producción en 5 Semanas
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Descubrimiento</h3>
                  <p className="text-sm text-platinum">Entendemos tu problema y definimos solución</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Diseño</h3>
                  <p className="text-sm text-platinum">Arquitectura y prototipado de interfaces</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Desarrollo</h3>
                  <p className="text-sm text-platinum">Construcción con entregas semanales</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Implementación</h3>
                  <p className="text-sm text-platinum">Despliegue y capacitación</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Soporte</h3>
                  <p className="text-sm text-platinum">Mantenimiento y evolución del sistema</p>
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
              <p className="text-eyebrow">Resultados Tangibles</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Eficiencia y Crecimiento desde el Día Uno
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">+60%</div>
                  <p className="text-sm text-platinum">Eficiencia operativa</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">-95%</div>
                  <p className="text-sm text-platinum">Errores manuales eliminados</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">4x</div>
                  <p className="text-sm text-platinum">ROI promedio en clientes</p>
                </div>
              </div>
              
              <div className="mt-12 bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-4">Prueba Social</h3>
                <p className="text-platinum mb-6">150+ aplicaciones desarrolladas con 98% de satisfacción</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <p className="text-sm font-semibold text-titanium">LogisticsCorp</p>
                    <p className="text-xs text-platinum">"Automatizamos 80% de nuestros procesos, el ROI fue visible en 2 meses"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-titanium">RetailTech</p>
                    <p className="text-xs text-platinum">"Nuestro nuevo e-commerce incrementó ventas 45% en el primer trimestre"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-titanium">FinancePro</p>
                    <p className="text-xs text-platinum">"El sistema de reporting nos ahorra 20 horas semanales de trabajo manual"</p>
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
              <p className="text-eyebrow">Comienza tu Transformación Digital</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                ¿Listo para Construir la Solución que tu Negocio Necesita?
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Solicita tu propuesta de desarrollo personalizada. Analizamos tus requisitos y te entregamos una solución concreta sin compromiso.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gold mb-2">PROPUESTA EN 24H</div>
                  <p className="text-sm text-platinum">Análisis gratuito + arquitectura inicial + presupuesto detallado</p>
                </div>
                <Link
                  to="/contact"
                  className="w-full py-3 px-6 bg-gold text-background font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300 text-center block"
                >
                  Solicita tu propuesta ahora
                </Link>
                <div className="mt-4 text-xs text-platinum text-center">
                  Sin costo • Sin compromiso • Expertos asignados inmediatamente
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
