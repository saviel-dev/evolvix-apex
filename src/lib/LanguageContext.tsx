import { createContext, useContext, useState } from "react";

export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      ecosystem: "Services",
      footprint: "Footprint",
      board: "Our Team",
      contact: "Contact",
    },
    partnerAccess: "Contact Us",

    hero: {
      eyebrow: "Evolvix Global · Technology & Strategy",
      liveLabel: "Live · Global Operations",
      headingLine1: "We Design",
      headingLine2: "Your Future.",
      headingOf: "Your",
      body: "We don't just build solutions — we architect the future of your business. We fuse disruptive innovation with global strategy to transform local businesses into international benchmarks.",
      ctaPrimary: "Explore Our Services",
      ctaSecondary: "Meet Our Team →",
    },

    manifesto: {
      eyebrow: "§ 01 — Our Promise",
      headingLine1: "We don't follow trends.",
      headingLine2: "We set the standard.",
      body: "Evolvix Global is a consulting and technology development agency that combines disruptive innovation with global strategy. Our programs are not generic — they are designed by Fortune 500 directors and executed by certified coaches, delivering measurable results in productivity, innovation and talent retention.",
    },

    units: {
      eyebrow: "§ 02 — Our Services",
      heading: "Eight divisions. One vision.",
      seeAll: "See all services →",
      divisionBrief: "Learn More",
      items: [
        { short: "Strategy", title: "Strategic Consulting & Global Vision", copy: "We design your roadmap for international expansion. Clear strategy, real decisions and measurable results from day one." },
        { short: "Tech", title: "Disruptive Technology & Engineering", copy: "Innovative solutions tailored to your business. From custom software to advanced automation — we build the tools that set you apart." },
        { short: "Talent", title: "Leadership & Talent Acceleration", copy: "Customized programs with performance metrics. We develop leaders who drive transformation from within your organization." },
        { short: "Projects", title: "High-Impact Project Management", copy: "Efficient execution of your most critical initiatives. We keep your projects on time, on budget, and aligned with your strategic goals." },
      ],
    },

    footprint: {
      eyebrow: "§ 03 — Global Footprint",
      heading: "Seven nodes. One system.",
      body: "A geographically diversified network spanning four continents — Madrid, London, Paris, Miami, Cairo, Dubai and Singapore — engineered to synchronize capital, logistics and intelligence across any time zone.",
    },

    board: {
      eyebrow: "§ 04 — Our Team",
      headingLine1: "Certified experts.",
      headingLine2: "Real results.",
      body: "Our team is made up of professionals with experience in Fortune 500 companies, certified in high-performance methodologies and committed to delivering tangible value to every partner.",
      cta: "Meet Our Team →",
    },

    // Investment Thesis
    thesis: {
      eyebrow: "§ 04 — Investment Thesis",
      headingLine1: "A geographically shielded",
      headingLine2: "multi-asset ecosystem.",
      body: "Evolvix is structured as a diversified holding — not a single business, but an integrated group of strategic assets designed to grow in parallel, hedge each other, and compound value across cycles.",
      pillars: [
        { label: "Geographic Diversification", detail: "7 operational nodes across 4 continents, insulated from regional volatility." },
        { label: "Multi-Asset Structure", detail: "Energy, infrastructure, services and capital under one coordinated mandate." },
        { label: "Compounding Growth", detail: "Each division reinforces the others — creating synergies that accelerate the whole." },
        { label: "Long-Horizon Vision", detail: "Built for decades, not quarters. Capital allocation aligned with structural megatrends." },
      ],
    },

    // Holding Divisions
    holdings: {
      eyebrow: "§ 05 — Group Portfolio",
      heading: "Four assets. One group.",
      seeAll: "Full portfolio →",
      items: [
        { code: "EVX-01", name: "EVOLVIX Energy Division", tagline: "Sovereign energy infrastructure", body: "Renewable and conventional energy assets across emerging and developed markets. Long-term concessions, grid infrastructure and energy trading." },
        { code: "EVX-02", name: "EVOLVIX Engineering & Infra", tagline: "Critical infrastructure at scale", body: "Design, build and operate of mission-critical infrastructure — logistics parks, data centers, transport corridors and industrial assets." },
        { code: "EVX-03", name: "EVOLVIX Global Services", tagline: "BPO at institutional grade", body: "Business process outsourcing for global corporations. Finance, compliance, tech support and back-office operations delivered at Fortune 500 standards." },
        { code: "EVX-04", name: "EVOLVIX Asset Management", tagline: "Capital with precision", body: "Multi-class portfolio management: private equity, infrastructure debt, sovereign mandates and alternative vehicles for institutional capital." },
      ],
    },

    ecosystemPage: {
      sectionEyebrow: "Section · Services",
      heading: "Our services.",
      body: "Eight specialized divisions working as a single integrated system. Strategy, technology, talent and operations — all aligned to accelerate your growth.",
      divisionLabel: "Division",
      ctaHeading: "Ready to transform your business?",
      ctaBtn: "Contact Us Now",
      units: [
        {
          title: "Strategic Consulting & Global Vision",
          headline: "Strategy that opens markets.",
          body: "We help you design and execute an international expansion plan with clarity and precision. We identify opportunities, mitigate risks and build a roadmap adapted to your industry and goals.",
          metrics: [{ k: "Clients served", v: "200+" }, { k: "Industries", v: "12" }, { k: "Avg. growth", v: "+47%" }],
        },
        {
          title: "Disruptive Technology & Engineering",
          headline: "Technology built for your business.",
          body: "We develop custom digital solutions — from web platforms and mobile apps to automation systems and AI integrations. We use cutting-edge tools to make your operation faster, smarter and more competitive.",
          metrics: [{ k: "Projects delivered", v: "150+" }, { k: "Tech stack", v: "20+" }, { k: "On-time delivery", v: "97%" }],
        },
        {
          title: "Leadership & Talent Acceleration",
          headline: "Your team is your biggest asset.",
          body: "Our training programs are designed by executives with Fortune 500 experience and delivered by certified coaches. We measure every outcome — productivity, innovation capacity and talent retention — so you can see the impact.",
          metrics: [{ k: "Programs", v: "30+" }, { k: "Professionals trained", v: "5,000+" }, { k: "Retention rate", v: "+62%" }],
        },
        {
          title: "High-Impact Project Management",
          headline: "Execution without excuses.",
          body: "We take ownership of your most critical projects and deliver them efficiently. From planning to closure, we apply proven methodologies (PMI, Agile, Scrum) to keep everything on track.",
          metrics: [{ k: "Projects managed", v: "300+" }, { k: "On-budget rate", v: "94%" }, { k: "Methodologies", v: "5" }],
        },
        {
          title: "Digital Security & Business Resilience",
          headline: "Your operation, protected.",
          body: "We implement digital security strategies that safeguard your data, your systems and your continuity. From vulnerability assessment to incident response — we keep your business running, no matter what.",
          metrics: [{ k: "Security audits", v: "80+" }, { k: "Incidents resolved", v: "99.8%" }, { k: "Compliance", v: "ISO 27001" }],
        },
        {
          title: "Business Intelligence & Automation",
          headline: "Data that drives decisions.",
          body: "We transform your raw data into actionable intelligence. We automate repetitive processes so your team can focus on what really matters — strategy and growth.",
          metrics: [{ k: "Dashboards built", v: "120+" }, { k: "Processes automated", v: "400+" }, { k: "Avg. time saved", v: "35%" }],
        },
        {
          title: "Export & Import Engineering",
          headline: "Your product, in any market.",
          body: "We support you through every stage of international trade — from regulatory compliance and logistics to market entry strategy. We have experience in markets across North America, Europe and Latin America.",
          metrics: [{ k: "Markets served", v: "25+" }, { k: "Trade corridors", v: "40+" }, { k: "Compliance rate", v: "100%" }],
        },
        {
          title: "Intelligent Supply Chain Management",
          headline: "Smarter logistics.",
          body: "We optimize your supply chain from end to end — reducing costs, improving delivery times and increasing resilience. We use technology and data to help you make smarter logistical decisions.",
          metrics: [{ k: "Chains optimized", v: "60+" }, { k: "Avg. cost reduction", v: "−28%" }, { k: "Lead time", v: "−40%" }],
        },
      ],
    },

    footprintPage: {
      sectionEyebrow: "Section · Presence",
      heading: "Where we operate.",
      body: "Evolvix Global has a growing operational presence across key business hubs, enabling us to serve our partners wherever they need us.",
      details: {
        Madrid: { hours: "GMT+1 · 09:00–20:00", focus: ["Strategic Consulting", "European Operations", "Tech Development"], coords: "40.4168° N · 3.7038° W" },
        London: { hours: "GMT+0 · 08:00–18:00", focus: ["Financial Advisory", "International Trade", "Investor Relations"], coords: "51.5074° N · 0.1276° W" },
        Paris: { hours: "GMT+1 · 09:00–18:00", focus: ["European Strategy", "Infrastructure", "Investment Structuring"], coords: "48.8566° N · 2.3522° E" },
        Miami: { hours: "EST · 09:00–18:00", focus: ["Americas Expansion", "LatAm Trade", "Capital Management"], coords: "25.7617° N · 80.1918° W" },
        Cairo: { hours: "GMT+2 · 09:00–18:00", focus: ["African Logistics", "MENA Connectivity", "Energy Infrastructure"], coords: "30.0444° N · 31.2357° E" },
        Dubai: { hours: "GMT+4 · 08:00–20:00", focus: ["MENA Expansion", "Emerging Markets", "Logistics Hub"], coords: "25.2048° N · 55.2708° E" },
        Singapore: { hours: "GMT+8 · 09:00–21:00", focus: ["APAC Tech", "Innovation Division", "AI & Automation"], coords: "1.3521° N · 103.8198° E" },
      },
    },

    boardPage: {
      sectionEyebrow: "Section · Our Team",
      headingLine1: "Experienced professionals.",
      headingLine2: "Committed to your success.",
      body: "Our team combines deep industry expertise with a genuine passion for helping businesses grow. Each member brings certified methodologies and real-world results to every engagement.",
      members: [
        { name: "Adrián Vallejo", role: "Founder & CEO", bio: "Strategist with over 15 years of experience leading technology transformation projects for companies across three continents. Passionate about building businesses that last." },
        { name: "Helena Marchetti", role: "Head of Strategic Consulting", bio: "Expert in international expansion and market entry strategy. She has guided more than 80 companies in their first steps into global markets." },
        { name: "Jonathan Reeves", role: "Director of Technology", bio: "Full-stack engineer and solutions architect. Leads our development team with a focus on delivering robust, scalable and future-proof digital products." },
        { name: "Mei-Lin Tanaka", role: "Head of Talent & Leadership", bio: "Certified executive coach with experience in Fortune 500 organizations. She designs the training programs that transform teams into high-performance units." },
      ],
    },

    contactPage: {
      sectionEyebrow: "Section · Contact",
      heading: "Let's talk.",
      body: "We'd love to learn more about your business and explore how we can help you grow. Reach out — our team responds within 24 business hours.",
      accessLabel: "Get In Touch",
      accessHeading: "Tell us about your project.",
      accessBody: "Share a few details about your business and what you're looking to achieve. A specialist from our team will get back to you within 24 hours.",
      fields: {
        name: "Full Name",
        namePlaceholder: "E.g. Maria González",
        org: "Company",
        orgPlaceholder: "E.g. González & Partners",
        email: "Email Address",
        emailPlaceholder: "maria@gonzalez.com",
        mandate: "Service of Interest",
        mandatePlaceholder: "Consulting · Technology · Talent · Logistics",
        message: "Tell us more",
        messagePlaceholder: "Briefly describe your challenge or goal...",
        submit: "Send Message",
      },
      officesLabel: "Our Offices",
    },
  },

  es: {
    nav: {
      ecosystem: "Servicios",
      footprint: "Presencia",
      board: "Nuestro Equipo",
      contact: "Contacto",
    },
    partnerAccess: "Contáctanos",

    hero: {
      eyebrow: "Evolvix Global · Tecnología y Estrategia",
      liveLabel: "En vivo · Operaciones Globales",
      headingLine1: "Diseñamos",
      headingLine2: "tu Futuro.",
      headingOf: "tu",
      body: "No solo construimos soluciones — diseñamos el futuro de tu empresa. Fusionamos innovación disruptiva con estrategia global para transformar negocios locales en referentes internacionales.",
      ctaPrimary: "Explorar Servicios",
      ctaSecondary: "Conoce al Equipo →",
    },

    manifesto: {
      eyebrow: "§ 01 — Nuestra Promesa",
      headingLine1: "No seguimos las tendencias.",
      headingLine2: "Marcamos el estándar.",
      body: "Evolvix Global es una agencia de consultoría y desarrollo tecnológico que fusiona innovación disruptiva con estrategia global. Nuestros programas no son genéricos — están diseñados por directores de empresas Fortune 500 y ejecutados por coaches certificados, con resultados medibles en productividad, innovación y retención de talento.",
    },

    units: {
      eyebrow: "§ 02 — Nuestros Servicios",
      heading: "Ocho divisiones. Una visión.",
      seeAll: "Ver todos los servicios →",
      divisionBrief: "Saber más",
      items: [
        { short: "Estrategia", title: "Consultoría Estratégica y Visión Global", copy: "Diseñamos tu hoja de ruta para la expansión internacional. Estrategia clara, decisiones reales y resultados medibles desde el primer día." },
        { short: "Tecnología", title: "Tecnología e Ingeniería Disruptiva", copy: "Soluciones digitales a medida para tu negocio. Desde software personalizado hasta automatización avanzada — construimos las herramientas que te diferencian." },
        { short: "Talento", title: "Liderazgo y Aceleración del Talento", copy: "Programas personalizados con métricas de rendimiento. Desarrollamos líderes que impulsan la transformación desde dentro de tu organización." },
        { short: "Proyectos", title: "Gestión de Proyectos de Alto Impacto", copy: "Ejecución eficiente de tus iniciativas más críticas. Mantenemos tus proyectos a tiempo, dentro del presupuesto y alineados con tus objetivos." },
      ],
    },

    footprint: {
      eyebrow: "§ 03 — Huella Global",
      heading: "Siete nodos. Un sistema.",
      body: "Una red geográficamente diversificada en cuatro continentes — Madrid, Londres, París, Miami, El Cairo, Dubái y Singapur — diseñada para sincronizar capital, logística e inteligencia en cualquier huso horario.",
    },

    thesis: {
      eyebrow: "§ 04 — Tesis de Inversión",
      headingLine1: "Un ecosistema multi-activo",
      headingLine2: "geográficamente protegido.",
      body: "Evolvix se estructura como un holding diversificado — no es un negocio único, sino un grupo integrado de activos estratégicos diseñados para crecer en paralelo, protegerse entre sí y capitalizar valor a través de los ciclos.",
      pillars: [
        { label: "Diversificación Geográfica", detail: "7 nodos operativos en 4 continentes, aislados de la volatilidad regional." },
        { label: "Estructura Multi-Activo", detail: "Energía, infraestructura, servicios y capital bajo un mandato coordinado." },
        { label: "Crecimiento Compuesto", detail: "Cada división refuerza a las demás — creando sinergias que aceleran el conjunto." },
        { label: "Visión a Largo Plazo", detail: "Construido para décadas, no para trimestres. Asignación de capital alineada con megatendencias estructurales." },
      ],
    },

    holdings: {
      eyebrow: "§ 05 — Portafolio del Grupo",
      heading: "Cuatro activos. Un grupo.",
      seeAll: "Portafolio completo →",
      items: [
        { code: "EVX-01", name: "EVOLVIX Energy Division", tagline: "Infraestructura energética soberana", body: "Activos de energía renovable y convencional en mercados emergentes y desarrollados. Concesiones a largo plazo, infraestructura de red y comercialización de energía." },
        { code: "EVX-02", name: "EVOLVIX Engineering & Infra", tagline: "Infraestructura crítica a escala", body: "Diseño, construcción y operación de infraestructura de misión crítica: parques logísticos, centros de datos, corredores de transporte y activos industriales." },
        { code: "EVX-03", name: "EVOLVIX Global Services", tagline: "BPO de nivel institucional", body: "Externalización de procesos de negocio para corporaciones globales. Finanzas, cumplimiento, soporte técnico y operaciones back-office bajo estándares Fortune 500." },
        { code: "EVX-04", name: "EVOLVIX Asset Management", tagline: "Capital con precisión", body: "Gestión de portafolios multi-clase: capital privado, deuda de infraestructura, mandatos soberanos y vehículos alternativos para capital institucional." },
      ],
    },

    board: {
      eyebrow: "§ 06 — Nuestro Equipo",
      headingLine1: "Expertos certificados.",
      headingLine2: "Resultados reales.",
      body: "Nuestro equipo está formado por profesionales con experiencia en empresas Fortune 500, certificados en metodologías de alto rendimiento y comprometidos con generar valor tangible para cada socio.",
      cta: "Conoce al Equipo →",
    },

    ecosystemPage: {
      sectionEyebrow: "Sección · Servicios",
      heading: "Nuestros servicios.",
      body: "Ocho divisiones especializadas trabajando como un único sistema integrado. Estrategia, tecnología, talento y operaciones — todo alineado para acelerar tu crecimiento.",
      divisionLabel: "División",
      ctaHeading: "¿Listo para transformar tu empresa?",
      ctaBtn: "Contáctanos Ahora",
      units: [
        {
          title: "Consultoría Estratégica y Visión Global",
          headline: "Estrategia que abre mercados.",
          body: "Te ayudamos a diseñar y ejecutar un plan de expansión internacional con claridad y precisión. Identificamos oportunidades, mitigamos riesgos y construimos una hoja de ruta adaptada a tu industria y objetivos.",
          metrics: [{ k: "Clientes atendidos", v: "200+" }, { k: "Industrias", v: "12" }, { k: "Crecimiento promedio", v: "+47%" }],
        },
        {
          title: "Tecnología e Ingeniería Disruptiva",
          headline: "Tecnología construida para tu negocio.",
          body: "Desarrollamos soluciones digitales a medida — desde plataformas web y apps móviles hasta sistemas de automatización e integraciones de IA. Usamos herramientas de vanguardia para hacer tu operación más rápida, inteligente y competitiva.",
          metrics: [{ k: "Proyectos entregados", v: "150+" }, { k: "Stack tecnológico", v: "20+" }, { k: "Entrega a tiempo", v: "97%" }],
        },
        {
          title: "Liderazgo y Aceleración del Talento",
          headline: "Tu equipo es tu mayor activo.",
          body: "Nuestros programas de formación están diseñados por ejecutivos con experiencia Fortune 500 y ejecutados por coaches certificados. Medimos cada resultado — productividad, capacidad de innovación y retención de talento — para que puedas ver el impacto.",
          metrics: [{ k: "Programas", v: "30+" }, { k: "Profesionales formados", v: "5,000+" }, { k: "Tasa de retención", v: "+62%" }],
        },
        {
          title: "Gestión de Proyectos de Alto Impacto",
          headline: "Ejecución sin excusas.",
          body: "Tomamos la responsabilidad de tus proyectos más críticos y los entregamos de forma eficiente. Desde la planificación hasta el cierre, aplicamos metodologías probadas (PMI, Agile, Scrum) para mantener todo en curso.",
          metrics: [{ k: "Proyectos gestionados", v: "300+" }, { k: "Dentro del presupuesto", v: "94%" }, { k: "Metodologías", v: "5" }],
        },
        {
          title: "Seguridad Digital y Resiliencia Empresarial",
          headline: "Tu operación, protegida.",
          body: "Implementamos estrategias de seguridad digital que protegen tus datos, sistemas y continuidad operativa. Desde auditorías de vulnerabilidad hasta respuesta ante incidentes — mantenemos tu negocio funcionando, pase lo que pase.",
          metrics: [{ k: "Auditorías de seguridad", v: "80+" }, { k: "Incidentes resueltos", v: "99.8%" }, { k: "Cumplimiento", v: "ISO 27001" }],
        },
        {
          title: "Inteligencia de Negocio y Automatización",
          headline: "Datos que impulsan decisiones.",
          body: "Transformamos tus datos en inteligencia accionable. Automatizamos procesos repetitivos para que tu equipo pueda centrarse en lo que realmente importa — estrategia y crecimiento.",
          metrics: [{ k: "Dashboards creados", v: "120+" }, { k: "Procesos automatizados", v: "400+" }, { k: "Tiempo ahorrado (prom.)", v: "35%" }],
        },
        {
          title: "Ingeniería de Exportación e Importación Global",
          headline: "Tu producto, en cualquier mercado.",
          body: "Te acompañamos en cada etapa del comercio internacional — desde el cumplimiento regulatorio y la logística hasta la estrategia de entrada al mercado. Tenemos experiencia en Norteamérica, Europa y Latinoamérica.",
          metrics: [{ k: "Mercados atendidos", v: "25+" }, { k: "Corredores comerciales", v: "40+" }, { k: "Tasa de cumplimiento", v: "100%" }],
        },
        {
          title: "Gestión de Cadenas de Suministro Inteligentes",
          headline: "Logística más inteligente.",
          body: "Optimizamos tu cadena de suministro de extremo a extremo — reduciendo costos, mejorando tiempos de entrega y aumentando la resiliencia. Usamos tecnología y datos para ayudarte a tomar decisiones logísticas más inteligentes.",
          metrics: [{ k: "Cadenas optimizadas", v: "60+" }, { k: "Reducción de costos", v: "−28%" }, { k: "Tiempo de entrega", v: "−40%" }],
        },
      ],
    },

    footprintPage: {
      sectionEyebrow: "Sección · Presencia",
      heading: "Dónde operamos.",
      body: "Evolvix Global tiene una presencia operativa creciente en los principales centros de negocios, lo que nos permite atender a nuestros socios donde nos necesiten.",
      details: {
        Madrid: { hours: "GMT+1 · 09:00–20:00", focus: ["Consultoría Estratégica", "Operaciones Europeas", "Desarrollo Tecnológico"], coords: "40.4168° N · 3.7038° O" },
        London: { hours: "GMT+0 · 08:00–18:00", focus: ["Asesoría Financiera", "Comercio Internacional", "Relaciones con Inversores"], coords: "51.5074° N · 0.1276° O" },
        Paris: { hours: "GMT+1 · 09:00–18:00", focus: ["Estrategia Europea", "Infraestructura", "Estructuración de Inversiones"], coords: "48.8566° N · 2.3522° E" },
        Miami: { hours: "EST · 09:00–18:00", focus: ["Expansión en América", "Comercio LatAm", "Gestión de Capital"], coords: "25.7617° N · 80.1918° O" },
        Cairo: { hours: "GMT+2 · 09:00–18:00", focus: ["Logística Africana", "Conectividad MENA", "Infraestructura Energética"], coords: "30.0444° N · 31.2357° E" },
        Dubai: { hours: "GMT+4 · 08:00–20:00", focus: ["Expansión MENA", "Mercados Emergentes", "Hub Logístico"], coords: "25.2048° N · 55.2708° E" },
        Singapore: { hours: "GMT+8 · 09:00–21:00", focus: ["Tecnología APAC", "División de Innovación", "IA y Automatización"], coords: "1.3521° N · 103.8198° E" },
      },
    },

    boardPage: {
      sectionEyebrow: "Sección · Nuestro Equipo",
      headingLine1: "Profesionales con experiencia.",
      headingLine2: "Comprometidos con tu éxito.",
      body: "Nuestro equipo combina profundo conocimiento de la industria con una genuina pasión por ayudar a los negocios a crecer. Cada miembro aporta metodologías certificadas y resultados reales en cada proyecto.",
      members: [
        { name: "Adrián Vallejo", role: "Fundador & CEO", bio: "Estratega con más de 15 años de experiencia liderando proyectos de transformación tecnológica en empresas de tres continentes. Apasionado por construir negocios que perduran." },
        { name: "Helena Marchetti", role: "Directora de Consultoría Estratégica", bio: "Experta en expansión internacional y estrategia de entrada a mercados. Ha guiado a más de 80 empresas en sus primeros pasos hacia mercados globales." },
        { name: "Jonathan Reeves", role: "Director de Tecnología", bio: "Ingeniero full-stack y arquitecto de soluciones. Lidera nuestro equipo de desarrollo con un enfoque en entregar productos digitales robustos, escalables y preparados para el futuro." },
        { name: "Mei-Lin Tanaka", role: "Directora de Talento y Liderazgo", bio: "Coach ejecutiva certificada con experiencia en organizaciones Fortune 500. Diseña los programas de formación que transforman equipos en unidades de alto rendimiento." },
      ],
    },

    contactPage: {
      sectionEyebrow: "Sección · Contacto",
      heading: "Hablemos.",
      body: "Nos encantaría conocer más sobre tu negocio y explorar cómo podemos ayudarte a crecer. Escríbenos — nuestro equipo responde en 24 horas hábiles.",
      accessLabel: "Ponte en Contacto",
      accessHeading: "Cuéntanos sobre tu proyecto.",
      accessBody: "Comparte algunos detalles sobre tu empresa y lo que quieres lograr. Un especialista de nuestro equipo te responderá en 24 horas.",
      fields: {
        name: "Nombre Completo",
        namePlaceholder: "Ej. María González",
        org: "Empresa",
        orgPlaceholder: "Ej. González & Asociados",
        email: "Correo Electrónico",
        emailPlaceholder: "maria@gonzalez.com",
        mandate: "Servicio de Interés",
        mandatePlaceholder: "Consultoría · Tecnología · Talento · Logística",
        message: "Cuéntanos más",
        messagePlaceholder: "Describe brevemente tu reto o meta...",
        submit: "Enviar Mensaje",
      },
      officesLabel: "Nuestras Oficinas",
    },
  },
} as const;

interface LangContextType {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggle: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
