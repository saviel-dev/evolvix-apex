import { createContext, useContext, useState } from "react";

export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      services: "Divisions",
      footprint: "Footprint",
      board: "Our Team",
      contact: "Contact",
    },
    partnerAccess: "Contact Us",

    hero: {
      eyebrow: "Evolvix Global — B2B Technology & Business Services",
      liveLabel: "Live · Active in 5 Markets",
      headingLine1: "We solve complex",
      headingLine2: "business challenges.",
      headingOf: "",
      body: "From global trade operations to cybersecurity and project execution — we deliver measurable results for companies that need to move fast and scale smart.",
      ctaPrimary: "See Our Services",
      ctaSecondary: "Schedule a Free Call →",
    },

    manifesto: {
      eyebrow: "§ 01 — What We Do",
      headingLine1: "Four services.",
      headingLine2: "One reliable partner.",
      body: "Evolvix Global is a B2B business services group operating across global trade, business intelligence, cybersecurity and project management. We work with companies that are growing internationally, dealing with operational complexity, or need a reliable execution partner — and we deliver concrete, measurable results.",
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
      eyebrow: "§ 04 — Why Work With Us",
      headingLine1: "Senior-level experts.",
      headingLine2: "Proven execution.",
      body: "Our team has delivered projects across Europe, the Middle East and the Americas. We bring institutional expertise without bureaucratic overhead — you get direct access to senior specialists who are invested in your outcomes.",
      cta: "Meet the Team →",
    },

    // Investment Thesis
    thesis: {
      eyebrow: "§ 04 — Competitive Advantage",
      headingLine1: "A geographically shielded",
      headingLine2: "multi-asset ecosystem.",
      body: "Evolvix is structured as a diversified holding — not a single business, but an integrated group of strategic assets designed to grow in parallel, hedge each other, and compound value across cycles.",
      pillars: [
        { label: "Sector Diversification", detail: "Energy, Engineering, BPO and Real Estate. If one sector fluctuates, others compensate." },
        { label: "Geographic Arbitrage", detail: "Leveraging Egypt's operational costs, EU technology, Dubai capital and Miami's commercial access." },
        { label: "Scalability", detail: "Brands operate under a shared matrix that reduces structural costs and maximizes net margin." },
      ],
    },

    // Holding Divisions
    holdings: {
      eyebrow: "§ 05 — Group Portfolio",
      heading: "Four assets. One group.",
      seeAll: "Full portfolio →",
      items: [
        { code: "EVX-01", name: "Global Trade & Engineering", tagline: "Import · Export · Logistics", body: "Managing international operations is slow, error-prone and expensive. We take over your full import/export cycle — customs, logistics, supplier coordination and compliance — so you grow across borders without the overhead. Companies using our trade desk reduce delays by up to 40%." },
        { code: "EVX-02", name: "Business Intelligence", tagline: "Data · Automation · Decisions", body: "Most businesses sit on data they never use. We build dashboards, automate manual processes and connect your systems so every decision is backed by real-time insight. Average client cuts reporting time by 60% in the first 90 days." },
        { code: "EVX-03", name: "Digital Security", tagline: "Cybersecurity · Compliance · Resilience", body: "One security incident can shut down operations and destroy client trust. We audit your vulnerabilities, implement protection layers and keep your systems compliant — so you stay operational and credible, even under attack." },
        { code: "EVX-04", name: "Project Execution", tagline: "Planning · Delivery · Control", body: "Strategic projects fail not because of bad ideas, but because of poor execution. We embed a senior project team into your operations, manage stakeholders and deliver on schedule. 95% of our projects close within agreed scope and timeline." },
      ],
    },

    exponential: {
      eyebrow: "§ 02 — The Exponential Factor",
      heading: "EVOLVIX is not just a name. It's a methodology of growth.",
      body: "Every letter is a pillar of profitability designed to scale businesses into global leaders.",
      pillars: [
        { letter: "E", title: "Excellence", desc: "European operational standards." },
        { letter: "V", title: "Vision", desc: "Anticipation of emerging markets." },
        { letter: "O", title: "Opportunity", desc: "Identification of undervalued assets." },
        { letter: "L", title: "Legacy", desc: "Building long-term structures." },
        { letter: "V", title: "Velocity", desc: "Agility in decision making and execution." },
        { letter: "I", title: "Innovation", desc: "Technology applied to traditional sectors." },
        { letter: "X", title: "Exponential Factor", desc: "The value multiplier applied to every holding company." },
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
      sectionEyebrow: "Section · Leadership",
      headingLine1: "Visionary minds.",
      headingLine2: "Relentless execution.",
      body: "The Evolvix Global board brings together a senior team of strategists, engineers and capital allocators with proven track records across Europe, the Middle East and the Americas. Each member operates at the intersection of institutional experience and entrepreneurial drive.",
      members: [
        { name: "Grupo EBLE — Executive Board", role: "Holding Leadership", bio: "Evolvix Global operates under the strategic umbrella of Grupo EBLE — a diversified Spanish holding whose pillars are Excellence, Boldness, Legacy and Execution. The board directs capital, operations and expansion across all four divisions." },
        { name: "Division Principals", role: "Operational Leadership", bio: "Each Evolvix division is led by a dedicated principal with deep sector expertise: energy concessions & grid infrastructure, high-complexity engineering, institutional BPO operations, and real-estate asset management." },
        { name: "Strategic Advisors", role: "International Advisory Council", bio: "An international advisory council supports the group across key jurisdictions — Spain/EU for legal & funding access, Dubai/MENA for capital formation, and Miami for Americas market connectivity." },
        { name: "Investor Relations", role: "Capital & Partnerships", bio: "Dedicated investor relations management for institutional capital, sovereign mandates and co-investment structures. The group targets 24-month expansion into new markets with tangible asset backing." },
      ],
    },

    contactPage: {
      sectionEyebrow: "Section · Contact",
      heading: "Ready to solve a real business challenge?",
      body: "Whether you're scaling internationally, facing operational bottlenecks, or need a trusted execution partner — let's talk. Our team responds within one business day.",
      accessLabel: "Get In Touch",
      accessHeading: "Tell us about your challenge.",
      accessBody: "Share a few details about your business and what you're trying to solve. A specialist will get back to you within 24 hours — no commitment required.",
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
      services: "Divisiones",
      footprint: "Presencia",
      board: "Nuestro Equipo",
      contact: "Contacto",
    },
    partnerAccess: "Contáctanos",

    hero: {
      eyebrow: "Evolvix Global — Servicios Empresariales B2B",
      liveLabel: "En vivo · Activos en 5 Mercados",
      headingLine1: "Resolvemos retos",
      headingLine2: "empresariales complejos.",
      headingOf: "",
      body: "Desde operaciones de comercio global hasta ciberseguridad y ejecución de proyectos — entregamos resultados medibles para empresas que necesitan crecer rápido y escalar con inteligencia.",
      ctaPrimary: "Ver Nuestros Servicios",
      ctaSecondary: "Agendar Llamada Gratuita →",
    },

    manifesto: {
      eyebrow: "§ 01 — Qué Hacemos",
      headingLine1: "Cuatro servicios.",
      headingLine2: "Un partner de confianza.",
      body: "Evolvix Global es un grupo de servicios empresariales B2B que opera en comercio global, inteligencia de negocio, ciberseguridad y gestión de proyectos. Trabajamos con empresas en crecimiento internacional, con complejidad operativa, o que necesitan un socio de ejecución fiable — y entregamos resultados concretos y medibles.",
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
      eyebrow: "§ 04 — Ventaja Competitiva",
      headingLine1: "Un ecosistema multi-activo",
      headingLine2: "geográficamente protegido.",
      body: "Evolvix se estructura como un holding diversificado — no es un negocio único, sino un grupo integrado de activos estratégicos diseñados para crecer en paralelo, protegerse entre sí y capitalizar valor a través de los ciclos.",
      pillars: [
        { label: "Diversificación Sectorial", detail: "Energía, Ingeniería, BPO y Real Estate. Si un sector fluctúa, los otros compensan." },
        { label: "Arbitraje Geográfico", detail: "Aprovechamos costes de Egipto, tecnología de España/Francia, capital de Dubái y apertura de Miami." },
        { label: "Escalabilidad", detail: "Nuestras marcas operan bajo una matriz compartida que reduce costes estructurales y maximiza margen." },
      ],
    },

    holdings: {
      eyebrow: "§ 05 — Portafolio del Grupo",
      heading: "Cuatro activos. Un grupo.",
      seeAll: "Portafolio completo →",
      items: [
        { code: "EVX-01", name: "Comercio Global e Ingeniería", tagline: "Importación · Exportación · Logística", body: "Gestionar operaciones internacionales es lento, caro y propenso a errores. Gestionamos tu ciclo completo de importación/exportación — aduanas, logística, proveedores y cumplimiento — para que crezcas sin fricción. Nuestros clientes reducen retrasos operativos hasta un 40%." },
        { code: "EVX-02", name: "Inteligencia de Negocio", tagline: "Datos · Automatización · Decisiones", body: "La mayoría de las empresas tienen datos que nunca usan. Construimos dashboards, automatizamos procesos manuales y conectamos tus sistemas para que cada decisión esté respaldada por datos en tiempo real. El tiempo de reporte se reduce un 60% en los primeros 90 días." },
        { code: "EVX-03", name: "Seguridad Digital", tagline: "Ciberseguridad · Cumplimiento · Resiliencia", body: "Un incidente de seguridad puede detener tu operación y destruir la confianza de tus clientes. Auditamos tus vulnerabilidades, implementamos capas de protección y mantenemos tus sistemas en cumplimiento — para que sigas operando y siendo creíble, incluso bajo ataque." },
        { code: "EVX-04", name: "Ejecución de Proyectos", tagline: "Planificación · Entrega · Control", body: "Los proyectos estratégicos no fracasan por malas ideas, sino por mala ejecución. Integramos un equipo senior en tu operación, gestionamos stakeholders y entregamos en plazo. El 95% de nuestros proyectos cierran dentro del alcance y tiempo acordados." },
      ],
    },

    board: {
      eyebrow: "§ 06 — Por Qué Trabajar con Nosotros",
      headingLine1: "Expertos senior.",
      headingLine2: "Ejecución probada.",
      body: "Nuestro equipo ha entregado proyectos en Europa, Oriente Medio y las Américas. Aportamos experiencia institucional sin burocracia — tienes acceso directo a especialistas senior comprometidos con tus resultados.",
      cta: "Conoce al Equipo →",
    },

    exponential: {
      eyebrow: "§ 02 — El Factor Exponencial",
      heading: "EVOLVIX no es un nombre. Es una metodología de crecimiento.",
      body: "Cada letra es un pilar de rentabilidad diseñado para escalar negocios a líderes globales.",
      pillars: [
        { letter: "E", title: "Excellence", desc: "Estándares operativos europeos." },
        { letter: "V", title: "Vision", desc: "Anticipación de mercados emergentes." },
        { letter: "O", title: "Opportunity", desc: "Identificación de activos infravalorados." },
        { letter: "L", title: "Legacy", desc: "Construcción de estructuras a largo plazo." },
        { letter: "V", title: "Velocity", desc: "Agilidad en la toma de decisiones y ejecución." },
        { letter: "I", title: "Innovation", desc: "Tecnología aplicada a sectores tradicionales." },
        { letter: "X", title: "Exponential Factor", desc: "El multiplicador de valor que aplicamos a cada empresa del holding." },
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
      sectionEyebrow: "Sección · Liderazgo",
      headingLine1: "Mentes visionarias.",
      headingLine2: "Ejecución implacable.",
      body: "El consejo directivo de Evolvix Global reúne a un equipo senior de estrategas, ingenieros y gestores de capital con trayectorias probadas en Europa, Oriente Medio y las Américas. Cada miembro opera en la intersección entre la experiencia institucional y el impulso emprendedor.",
      members: [
        { name: "Grupo EBLE — Consejo Ejecutivo", role: "Liderazgo del Holding", bio: "Evolvix Global opera bajo el paraguas estratégico de Grupo EBLE — un holding español diversificado cuyos pilares son Excelencia, Audacia, Legado y Ejecución. El consejo dirige el capital, las operaciones y la expansión de las cuatro divisiones." },
        { name: "Directores de División", role: "Liderazgo Operacional", bio: "Cada división de Evolvix está liderada por un director con profunda especialización sectorial: concesiones energéticas e infraestructura de red, ingeniería de alta complejidad, operaciones BPO institucionales y gestión de activos inmobiliarios." },
        { name: "Consejeros Estratégicos", role: "Consejo Asesor Internacional", bio: "Un consejo asesor internacional apoya al grupo en jurisdicciones clave — España/UE para acceso jurídico y fondos, Dubái/MENA para captación de capital, y Miami para conectividad con los mercados de las Américas." },
        { name: "Relaciones con Inversores", role: "Capital y Alianzas", bio: "Gestión dedicada de relaciones con inversores para capital institucional, mandatos soberanos y estructuras de co-inversión. El grupo proyecta expansión a nuevos mercados en 24 meses con respaldo de activos tangibles." },
      ],
    },

    contactPage: {
      sectionEyebrow: "Sección · Contacto",
      heading: "¿Tienes un reto empresarial que resolver?",
      body: "Tanto si estás escalando internacionalmente, enfrentando cuellos de botella operativos, o necesitas un socio de ejecución de confianza — hablemos. Nuestro equipo responde en un día hábil.",
      accessLabel: "Ponte en Contacto",
      accessHeading: "Cuéntanos tu reto.",
      accessBody: "Comparte algunos detalles sobre tu empresa y lo que intentas resolver. Un especialista te responderá en 24 horas — sin compromiso previo.",
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
