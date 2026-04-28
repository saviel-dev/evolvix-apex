import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/LanguageContext";
import automationImg from "@/assets/images/seguridad digital.png";

export const Route = createFileRoute("/automatizacion-procesos")({
  head: () => ({
    meta: [
      { title: "Automatización de Procesos Empresariales | Evolvix Global" },
      {
        name: "description",
        content: "Automatización que libera 20+ horas semanales a tu equipo. Reducción tiempo manual 60-80%, errores -95%. Calcula tu potencial de ahorro gratis.",
      },
    ],
  }),
  component: ProcessAutomationPage,
});

function ProcessAutomationPage() {
  const { t } = useLang();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-44 pb-16 md:pt-56 md:pb-24 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={automationImg}
            alt="Automatización de Procesos"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--gradient-vignette)]" />
        </div>

        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow text-gold">Servicio · Automatización de Procesos</p>
            <h1 className="mt-8 text-display-xl md:text-display-lg text-titanium leading-[1.0]">
              Automatización que Libera 20+ Horas Semanales a tu Equipo
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
              Deja que la tecnología haga el trabajo repetitivo. Tu equipo enfocado en lo que realmente genera valor.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold text-background px-7 py-4 text-mono-label font-semibold hover:bg-gold/90 transition-colors duration-300"
              >
                Calcula tu potencial de ahorro
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
              Análisis gratuito • Resultados en 60 días • Sin compromiso
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-background border-t border-hairline">
        <div className="container-edge py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal variant="up">
              <p className="text-eyebrow">¿Tu equipo pierde tiempo en tareas repetitivas?</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                El Costo Oculto del Trabajo Manual
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Tu equipo pierde horas valiosas en tareas manuales, repetitivas y propensas a errores. Procesos que dependen de una persona y se detienen si falta. Costos operativos elevados por ineficiencia.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/30 backdrop-blur-sm border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">Señales de que necesitas automatización:</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Tu equipo pasa 20+ horas semanales en tareas repetitivas</span>
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
                    <span className="text-platinum font-light">Procesos que se detienen si una persona falta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-red-400">
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-platinum font-light">Costos operativos creciendo más que tus ingresos</span>
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
              <p className="text-eyebrow">Automatización Inteligente</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Tecnología que Trabaja por Ti 24/7
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Automatización inteligente de procesos que elimina el trabajo manual, reduce errores y libera a tu equipo para enfocarse en crecimiento y estrategia.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-6">¿Qué incluye nuestra automatización?</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Mapeo y análisis de procesos actuales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Identificación de oportunidades de automatización</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Implementación de herramientas y flujos automatizados</span>
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
                    <span className="text-platinum font-light">Capacitación y gestión del cambio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-platinum font-light">Monitoreo y optimización continua</span>
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
              <p className="text-eyebrow">Implementación Rápida y Segura</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Automatización en 5 Semanas con Resultados Visibles
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Auditoría</h3>
                  <p className="text-sm text-platinum">Mapeo de procesos y cálculo de impacto potencial</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Diseño</h3>
                  <p className="text-sm text-platinum">Arquitectura de automatización y selección de herramientas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Implementación</h3>
                  <p className="text-sm text-platinum">Configuración y despliegue de automatizaciones</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Capacitación</h3>
                  <p className="text-sm text-platinum">Formación del equipo y gestión del cambio</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-titanium mb-2">Optimización</h3>
                  <p className="text-sm text-platinum">Mejora y expansión de automatizaciones</p>
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
              <p className="text-eyebrow">Resultados Inmediatos</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                Eficiencia que se Traduce en Dinero
              </h2>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12 w-full max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">60-80%</div>
                  <p className="text-sm text-platinum">Reducción de tiempo manual</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">-95%</div>
                  <p className="text-sm text-platinum">Errores eliminados</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">30-40%</div>
                  <p className="text-sm text-platinum">Ahorro de costos</p>
                </div>
              </div>
              
              <div className="mt-12 bg-surface/20 border border-hairline rounded-lg p-8">
                <h3 className="text-lg font-semibold text-titanium mb-4">Prueba Social</h3>
                <p className="text-platinum mb-6">300+ procesos automatizados con ROI visible en 60 días</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <p className="text-sm font-semibold text-titanium">FinanceCorp</p>
                    <p className="text-xs text-platinum">"Automatizamos contabilidad, ahorramos 25 horas semanales y eliminamos errores 100%"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-titanium">LogisticsPro</p>
                    <p className="text-xs text-platinum">"Nuestro sistema de tracking redujo costos operativos 35% en el primer mes"</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-titanium">ServiceMax</p>
                    <p className="text-xs text-platinum">"La automatización de atención al cliente mejoró satisfacción 40%"</p>
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
              <p className="text-eyebrow">Calcula tu Potencial de Ahorro</p>
              <h2 className="mt-6 text-display-lg md:text-display-lg text-titanium leading-[1.1]">
                ¿Cuánto Podría tu Empresa Ahorrar con Automatización?
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-platinum">
                Descubre tu potencial de ahorro con nuestro análisis gratuito. Sin compromiso y resultados en 24 horas.
              </p>
            </Reveal>
            
            <Reveal variant="up" delay={200} className="mt-12">
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gold mb-2">ANÁLISIS GRATIS</div>
                  <p className="text-sm text-platinum">Calculadora de ahorro + roadmap de automatización</p>
                </div>
                <Link
                  to="/contact"
                  className="w-full py-3 px-6 bg-gold text-background font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-300 text-center block"
                >
                  Calcular mi potencial de ahorro
                </Link>
                <div className="mt-4 text-xs text-platinum text-center">
                  Respuesta en 24h • Sin compromiso • Análisis personalizado
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
