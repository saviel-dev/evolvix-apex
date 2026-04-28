import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — Evolvix Global" },
      {
        name: "description",
        content:
          "Consulta la información legal del sitio web de Evolvix Global: titularidad, condiciones de uso, propiedad intelectual, responsabilidad y jurisdicción.",
      },
      { property: "og:title", content: "Aviso Legal — Evolvix Global" },
    ],
  }),
  component: LegalNoticePage,
});

const LEGAL_SECTIONS = [
  {
    title: "1. Titularidad del sitio web",
    content:
      "Este sitio web es operado por Evolvix Global para la prestación de información corporativa, comercial y de captación de talento. Para comunicaciones legales y regulatorias, puedes contactar a través de: saviel.dev@gmail.com.",
  },
  {
    title: "2. Objeto y alcance",
    content:
      "El presente Aviso Legal regula el acceso, navegación y uso del sitio web, así como las responsabilidades derivadas de la utilización de sus contenidos, funcionalidades, formularios y servicios asociados.",
  },
  {
    title: "3. Condiciones de uso",
    content:
      "La persona usuaria se compromete a utilizar este sitio de forma lícita, diligente y de buena fe, respetando la normativa vigente, la moral, el orden público y los derechos de terceros. Queda prohibido cualquier uso fraudulento, abusivo o que pueda perjudicar la operativa de la plataforma.",
  },
  {
    title: "4. Propiedad intelectual e industrial",
    content:
      "Los contenidos del sitio, incluyendo textos, diseño, estructura, identidad visual, marcas, logotipos, código fuente y recursos gráficos, están protegidos por derechos de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o transformación sin autorización expresa de Evolvix Global o de sus legítimos titulares.",
  },
  {
    title: "5. Exclusión de garantías y responsabilidad",
    content:
      "Evolvix Global adopta medidas razonables para garantizar la continuidad y exactitud del sitio, pero no garantiza la ausencia absoluta de errores, interrupciones o vulnerabilidades técnicas. En consecuencia, no se asume responsabilidad por daños derivados del uso de la web, salvo en los supuestos legalmente exigibles.",
  },
  {
    title: "6. Enlaces externos",
    content:
      "Este sitio puede contener enlaces a páginas de terceros. Evolvix Global no controla ni asume responsabilidad por el contenido, políticas o prácticas de dichos sitios externos. La inclusión de enlaces no implica relación, respaldo o aprobación.",
  },
  {
    title: "7. Protección de datos y cookies",
    content:
      "El tratamiento de datos personales se rige por la Política de Privacidad vigente. En su caso, el uso de tecnologías de seguimiento y almacenamiento se regula en la Política de Cookies aplicable.",
  },
  {
    title: "8. Modificaciones",
    content:
      "Evolvix Global puede modificar en cualquier momento el contenido del sitio, este Aviso Legal y cualquier condición particular, para adaptarlos a novedades legales, operativas o estratégicas.",
  },
  {
    title: "9. Legislación aplicable y jurisdicción",
    content:
      "Este Aviso Legal se interpreta conforme a la normativa aplicable en materia civil, mercantil, digital y de protección de datos. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes conforme a derecho, salvo norma imperativa en contrario.",
  },
];

function LegalNoticePage() {
  return (
    <>
      <section className="relative bg-background pt-36 pb-12 md:pt-52 md:pb-18">
        <div className="container-edge">
          <Reveal variant="up">
            <p className="text-eyebrow">Sección · Marco Legal</p>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h1 className="mt-6 max-w-[12ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-titanium sm:text-5xl md:text-display-xl">
              Aviso Legal.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={180}>
            <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-platinum sm:text-base md:text-lg">
              Estas condiciones establecen el marco de uso del sitio web de
              Evolvix Global y la protección de los derechos de usuarios y de la
              compañía.
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
              {LEGAL_SECTIONS.map((section, index) => (
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
