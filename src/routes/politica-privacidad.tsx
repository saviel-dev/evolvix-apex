import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Evolvix Global" },
      {
        name: "description",
        content:
          "Conoce cómo Evolvix Global recopila, usa, protege y conserva los datos personales de usuarios, clientes, candidatos y partners.",
      },
      { property: "og:title", content: "Política de Privacidad — Evolvix Global" },
    ],
  }),
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  {
    title: "1. Responsable del tratamiento",
    content:
      "Evolvix Global actúa como responsable del tratamiento de los datos personales recabados a través de este sitio web, formularios de contacto, formularios de talento y comunicaciones comerciales. Para consultas sobre privacidad, puedes escribir a: saviel.dev@gmail.com.",
  },
  {
    title: "2. Datos que recopilamos",
    content:
      "Podemos recopilar datos identificativos y de contacto (nombre, apellidos, correo, teléfono), datos profesionales (cargo, empresa, perfil de LinkedIn, CV en PDF), información aportada voluntariamente en formularios y datos técnicos de navegación (IP, dispositivo, navegador y métricas de uso).",
  },
  {
    title: "3. Finalidad del tratamiento",
    content:
      "Tratamos los datos para responder solicitudes, gestionar relaciones comerciales, evaluar candidaturas de talento, mejorar la calidad de nuestros servicios, mantener la seguridad de la plataforma y cumplir obligaciones legales y regulatorias.",
  },
  {
    title: "4. Base jurídica",
    content:
      "El tratamiento se fundamenta en el consentimiento del usuario, la ejecución de medidas precontractuales o contractuales, el interés legítimo empresarial para mantener y mejorar los servicios, y el cumplimiento de obligaciones legales aplicables.",
  },
  {
    title: "5. Conservación de los datos",
    content:
      "Conservamos los datos durante el tiempo necesario para cumplir la finalidad para la que fueron recabados y, posteriormente, durante los plazos exigidos por la normativa aplicable. En procesos de selección, los CV podrán conservarse por periodos razonables para futuras vacantes, salvo solicitud de supresión.",
  },
  {
    title: "6. Destinatarios y transferencias",
    content:
      "No comercializamos datos personales. Podemos compartir información con proveedores tecnológicos que actúan como encargados del tratamiento y con terceros cuando sea necesario para la prestación del servicio o por obligación legal. Si existe transferencia internacional de datos, se aplicarán garantías adecuadas conforme a la normativa vigente.",
  },
  {
    title: "7. Derechos de las personas",
    content:
      "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando una solicitud a saviel.dev@gmail.com. Cuando proceda, también puedes retirar tu consentimiento en cualquier momento y presentar reclamación ante la autoridad de control competente.",
  },
  {
    title: "8. Seguridad de la información",
    content:
      "Aplicamos medidas técnicas y organizativas proporcionales al riesgo para proteger la confidencialidad, integridad y disponibilidad de los datos personales. No obstante, ningún sistema es completamente infalible y recomendamos compartir únicamente la información necesaria.",
  },
  {
    title: "9. Menores de edad",
    content:
      "Este sitio no está dirigido a menores de edad sin supervisión legal. Si detectas que un menor ha facilitado datos personales sin autorización, contáctanos para gestionar su eliminación de forma prioritaria.",
  },
  {
    title: "10. Cambios en esta política",
    content:
      "Podemos actualizar esta Política de Privacidad para adaptarla a cambios normativos, técnicos o de negocio. La versión vigente será siempre la publicada en esta página.",
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-background pt-36 pb-12 md:pt-52 md:pb-18">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">Sección · Cumplimiento</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-6 max-w-[14ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-titanium sm:text-5xl md:text-display-xl">
              Política de Privacidad.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-platinum sm:text-base md:text-lg">
              En Evolvix Global tratamos los datos personales con criterios de
              transparencia, seguridad y responsabilidad corporativa.
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-smoke/70">
              Última actualización · Abril 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="container-edge pb-20 md:pb-28">
          <div className="border-t border-hairline pt-10 md:pt-16">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline">
              {SECTIONS.map((section, index) => (
                <Reveal key={section.title} variant="up" delay={index * 40}>
                  <article className="bg-background p-5 sm:p-6 md:p-9">
                    <h2 className="text-lg md:text-xl font-semibold text-titanium">
                      {section.title}
                    </h2>
                    <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-platinum">
                      {section.content}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
