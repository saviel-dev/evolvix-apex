import { createContext, useContext, useState } from "react";

export type Lang = "en" | "es";

export const translations = {
  en: {
    // Header
    nav: {
      ecosystem: "Ecosystem",
      footprint: "Footprint",
      board: "Board",
      contact: "Contact",
    },
    partnerAccess: "Partner Access",

    // Hero
    hero: {
      eyebrow: "Evolvix Global Group · MMXXVI",
      liveLabel: "Live · Holding Index",
      headingLine1: "The Architecture",
      headingLine2: "of Success.",
      headingOf: "of",
      body: "We lead the evolution of strategic assets and services. Transforming vision into tangible value at international scale.",
      ctaPrimary: "Explore the Ecosystem",
      ctaSecondary: "Meet the Board →",
    },

    // Manifesto
    manifesto: {
      eyebrow: "§ 01 — Manifesto",
      headingLine1: "We do not follow markets.",
      headingLine2: "We engineer their structure.",
      body: "Evolvix Global operates as an integrated system of four interdependent divisions — capital, logistics, intelligence and digital infrastructure — designed to sustain frictionless growth at international scale.",
    },

    // Business Units (home preview)
    units: {
      eyebrow: "§ 02 — Business Units",
      heading: "Four divisions. One architecture.",
      seeAll: "See full ecosystem →",
      divisionBrief: "Division Brief",
      items: [
        { short: "Logistics", title: "Strategic Logistics & Supply Chain", copy: "Absolute synchronization. We turn logistical complexity into a global competitive advantage." },
        { short: "Consulting", title: "Global Consulting & Business Intelligence", copy: "Intelligence that precedes action. We design the roadmap for the expansion of leading groups." },
        { short: "Capital", title: "Asset Management & Investment", copy: "Strength in management, vision in investment. High-precision financial architecture." },
        { short: "Innovation", title: "Innovation & Digital Infrastructure", copy: "Building tomorrow, today. Digital infrastructure for corporations to operate without limits." },
      ],
    },

    // Footprint (home preview)
    footprint: {
      eyebrow: "§ 03 — Global Footprint",
      heading: "Four nodes. One operating system.",
      body: "A coordinated network that synchronizes capital, market and execution across Europe, the Middle East and Asia-Pacific.",
    },

    // Board (home preview)
    board: {
      eyebrow: "§ 04 — The Board",
      headingLine1: "Visionary minds.",
      headingLine2: "Relentless execution.",
      body: "A team designed to lead global complexity — strategy, capital and technology under one mandate.",
      cta: "Meet the Board →",
    },

    // Ecosystem page
    ecosystemPage: {
      sectionEyebrow: "Section · Ecosystem",
      heading: "The ecosystem.",
      body: "Four interdependent divisions operated as a single system. Capital, market, execution and intelligence under the same standard.",
      divisionLabel: "Division",
      ctaHeading: "Engage at the architecture level.",
      ctaBtn: "Request Partner Access",
      units: [
        {
          title: "Strategic Logistics & Supply Chain",
          headline: "Absolute synchronization.",
          body: "We turn logistical complexity into a global competitive advantage. We design resilient supply chains capable of operating in volatile markets and demanding geographies.",
          metrics: [{ k: "Active corridors", v: "47" }, { k: "Avg. lead-time", v: "−38%" }, { k: "Coverage", v: "5 continents" }],
        },
        {
          title: "Global Consulting & Business Intelligence",
          headline: "Intelligence precedes action.",
          body: "We design the roadmap for the expansion of leading groups. Market research, sovereign due diligence and decision architecture for global C-suites.",
          metrics: [{ k: "Mandates", v: "120+" }, { k: "Sectors", v: "11" }, { k: "Senior partners", v: "34" }],
        },
        {
          title: "Asset Management & Investment",
          headline: "Strength in management, vision in investment.",
          body: "High-precision financial architecture. Multi-class allocation, alternative infrastructure and private vehicles for institutional capital with a long horizon.",
          metrics: [{ k: "AUM", v: "USD 4.2 B" }, { k: "Vehicles", v: "9" }, { k: "Net IRR", v: "16.4%" }],
        },
        {
          title: "Innovation & Digital Infrastructure",
          headline: "Building tomorrow, today.",
          body: "Digital infrastructure for corporations to operate without limits. Sovereign platforms, data fabric and AI orchestration applied to the core business.",
          metrics: [{ k: "Data centers", v: "3" }, { k: "Edge nodes", v: "112" }, { k: "Uptime SLA", v: "99.995%" }],
        },
      ],
    },

    // Footprint page
    footprintPage: {
      sectionEyebrow: "Section · Footprint",
      heading: "Global footprint.",
      body: "Four operational nodes designed to synchronise market, capital and execution across any time zone.",
      details: {
        Madrid: { hours: "GMT+1 · 09:00–22:00", focus: ["Operations Hub", "Group Strategy", "EU Compliance"], coords: "40.4168° N · 3.7038° W" },
        London: { hours: "GMT+0 · 07:00–20:00", focus: ["Capital Markets", "Investor Relations", "Cross-Border Advisory"], coords: "51.5074° N · 0.1276° W" },
        Dubai: { hours: "GMT+4 · 08:00–21:00", focus: ["Emerging Logistics", "MENA Trade", "Sovereign Mandates"], coords: "25.2048° N · 55.2708° E" },
        Singapore: { hours: "GMT+8 · 09:00–22:00", focus: ["Innovation Division", "APAC Engineering", "AI Infrastructure"], coords: "1.3521° N · 103.8198° E" },
      },
    },

    // Board page
    boardPage: {
      sectionEyebrow: "Section · The Board",
      headingLine1: "Visionary minds.",
      headingLine2: "Relentless execution.",
      body: "A team designed to lead global complexity. Strategy, capital and technology under one mandate.",
      members: [
        { name: "Adrián Vallejo", role: "Chairman & Group CEO", bio: "Twenty-two years leading industrial holdings across Europe and MENA. Architect of Evolvix's multi-divisional integration." },
        { name: "Helena Marchetti", role: "Chief Investment Officer", bio: "Former head of allocation at a European sovereign fund. Designs the Group's capital architecture." },
        { name: "Jonathan Reeves", role: "Head of Global Strategy", bio: "Senior Advisor in cross-border M&A. Coordinates due diligence and expansion of operational divisions." },
        { name: "Mei-Lin Tanaka", role: "Chief Technology Officer", bio: "Leads the Innovation & Digital Infrastructure division from Singapore. Specialist in data fabric and applied AI." },
      ],
    },

    // Contact page
    contactPage: {
      sectionEyebrow: "Section · Contact",
      heading: "By introduction only.",
      body: "Evolvix Global operates with a restricted circle of strategic partners. New mandates are evaluated quarterly.",
      accessLabel: "Partner Access",
      accessHeading: "Request a private briefing.",
      accessBody: "Indicate your corporate profile and division of interest. A senior partner will respond within 72 hours.",
      fields: {
        name: "Name",
        namePlaceholder: "E.g. Alexander Sterling",
        org: "Organization",
        orgPlaceholder: "E.g. Sterling Holdings",
        email: "Email",
        emailPlaceholder: "alexander@sterling.com",
        mandate: "Mandate",
        mandatePlaceholder: "Logistics · Capital · Intelligence · Infrastructure",
        message: "Message",
        messagePlaceholder: "Outline your strategic objective...",
        submit: "Submit Request",
      },
      officesLabel: "Offices",
    },
  },

  es: {
    // Header
    nav: {
      ecosystem: "Ecosistema",
      footprint: "Huella",
      board: "Junta",
      contact: "Contacto",
    },
    partnerAccess: "Acceso Socios",

    // Hero
    hero: {
      eyebrow: "Evolvix Global Group · MMXXVI",
      liveLabel: "En vivo · Índice Holding",
      headingLine1: "La Arquitectura",
      headingLine2: "del Éxito.",
      headingOf: "del",
      body: "Lideramos la evolución de activos y servicios estratégicos. Transformamos la visión en valor tangible a escala internacional.",
      ctaPrimary: "Explorar el Ecosistema",
      ctaSecondary: "Conoce la Junta →",
    },

    // Manifesto
    manifesto: {
      eyebrow: "§ 01 — Manifiesto",
      headingLine1: "No seguimos los mercados.",
      headingLine2: "Ingeniamos su estructura.",
      body: "Evolvix Global opera como un sistema integrado de cuatro divisiones interdependientes — capital, logística, inteligencia e infraestructura digital — diseñado para sostener crecimiento sin fricción a escala internacional.",
    },

    // Business Units (home preview)
    units: {
      eyebrow: "§ 02 — Unidades de Negocio",
      heading: "Cuatro divisiones. Una arquitectura.",
      seeAll: "Ver ecosistema completo →",
      divisionBrief: "Informe de División",
      items: [
        { short: "Logística", title: "Logística Estratégica & Cadena de Suministro", copy: "Sincronización absoluta. Convertimos la complejidad logística en una ventaja competitiva global." },
        { short: "Consultoría", title: "Consultoría Global & Inteligencia de Negocio", copy: "Inteligencia que precede a la acción. Diseñamos la hoja de ruta para la expansión de grupos líderes." },
        { short: "Capital", title: "Gestión de Activos & Inversión", copy: "Solidez en la gestión, visión en la inversión. Arquitectura financiera de alta precisión." },
        { short: "Innovación", title: "Innovación & Infraestructura Digital", copy: "Construyendo el mañana, hoy. Infraestructura digital para que las corporaciones operen sin límites." },
      ],
    },

    // Footprint (home preview)
    footprint: {
      eyebrow: "§ 03 — Huella Global",
      heading: "Cuatro nodos. Un sistema operativo.",
      body: "Una red coordinada que sincroniza capital, mercado y ejecución entre Europa, Oriente Medio y Asia-Pacífico.",
    },

    // Board (home preview)
    board: {
      eyebrow: "§ 04 — La Junta",
      headingLine1: "Mentes visionarias.",
      headingLine2: "Ejecución implacable.",
      body: "Un equipo diseñado para liderar la complejidad global — estrategia, capital y tecnología bajo un mismo mandato.",
      cta: "Conoce la Junta →",
    },

    // Ecosystem page
    ecosystemPage: {
      sectionEyebrow: "Sección · Ecosistema",
      heading: "El ecosistema.",
      body: "Cuatro divisiones interdependientes operadas como un único sistema. Capital, mercado, ejecución e inteligencia bajo el mismo estándar.",
      divisionLabel: "División",
      ctaHeading: "Involúcrate a nivel de arquitectura.",
      ctaBtn: "Solicitar Acceso de Socio",
      units: [
        {
          title: "Logística Estratégica & Cadena de Suministro",
          headline: "Sincronización absoluta.",
          body: "Convertimos la complejidad logística en una ventaja competitiva global. Diseñamos cadenas de suministro resilientes capaces de operar en mercados volátiles y geografías exigentes.",
          metrics: [{ k: "Corredores activos", v: "47" }, { k: "Tiempo de entrega medio", v: "−38%" }, { k: "Cobertura", v: "5 continentes" }],
        },
        {
          title: "Consultoría Global & Inteligencia de Negocio",
          headline: "La inteligencia precede a la acción.",
          body: "Diseñamos la hoja de ruta para la expansión de grupos líderes. Investigación de mercado, due diligence soberana y arquitectura de decisiones para C-suites globales.",
          metrics: [{ k: "Mandatos", v: "120+" }, { k: "Sectores", v: "11" }, { k: "Socios sénior", v: "34" }],
        },
        {
          title: "Gestión de Activos & Inversión",
          headline: "Solidez en la gestión, visión en la inversión.",
          body: "Arquitectura financiera de alta precisión. Allocación multi-clase, infraestructuras alternativas y vehículos privados para capital institucional con horizonte largo.",
          metrics: [{ k: "AUM", v: "USD 4.2 B" }, { k: "Vehículos", v: "9" }, { k: "TIR Neta", v: "16.4%" }],
        },
        {
          title: "Innovación & Infraestructura Digital",
          headline: "Construyendo el mañana, hoy.",
          body: "Infraestructura digital para que las corporaciones operen sin límites. Plataformas soberanas, data fabric y orquestación de IA aplicada al núcleo del negocio.",
          metrics: [{ k: "Centros de datos", v: "3" }, { k: "Nodos edge", v: "112" }, { k: "SLA de disponibilidad", v: "99.995%" }],
        },
      ],
    },

    // Footprint page
    footprintPage: {
      sectionEyebrow: "Sección · Huella",
      heading: "Huella global.",
      body: "Cuatro nodos operativos diseñados para sincronizar mercado, capital y ejecución en cualquier huso horario.",
      details: {
        Madrid: { hours: "GMT+1 · 09:00–22:00", focus: ["Centro de Operaciones", "Estrategia de Grupo", "Cumplimiento UE"], coords: "40.4168° N · 3.7038° O" },
        London: { hours: "GMT+0 · 07:00–20:00", focus: ["Mercados de Capital", "Relaciones con Inversores", "Asesoría Transfronteriza"], coords: "51.5074° N · 0.1276° O" },
        Dubai: { hours: "GMT+4 · 08:00–21:00", focus: ["Logística Emergente", "Comercio MENA", "Mandatos Soberanos"], coords: "25.2048° N · 55.2708° E" },
        Singapore: { hours: "GMT+8 · 09:00–22:00", focus: ["División de Innovación", "Ingeniería APAC", "Infraestructura IA"], coords: "1.3521° N · 103.8198° E" },
      },
    },

    // Board page
    boardPage: {
      sectionEyebrow: "Sección · La Junta",
      headingLine1: "Mentes visionarias.",
      headingLine2: "Ejecución implacable.",
      body: "Un equipo diseñado para liderar la complejidad global. Estrategia, capital y tecnología bajo un mismo mandato.",
      members: [
        { name: "Adrián Vallejo", role: "Presidente & CEO del Grupo", bio: "Veintidós años liderando holdings industriales en Europa y MENA. Arquitecto de la integración multi-divisional de Evolvix." },
        { name: "Helena Marchetti", role: "Directora de Inversiones", bio: "Antigua jefa de allocación en un fondo soberano europeo. Diseña la arquitectura de capital del Grupo." },
        { name: "Jonathan Reeves", role: "Director de Estrategia Global", bio: "Senior Advisor en M&A transfronterizo. Coordina due diligence y expansión de las divisiones operativas." },
        { name: "Mei-Lin Tanaka", role: "Directora de Tecnología", bio: "Lidera la división de Innovación & Infraestructura Digital desde Singapur. Especialista en data fabric e IA aplicada." },
      ],
    },

    // Contact page
    contactPage: {
      sectionEyebrow: "Sección · Contacto",
      heading: "Solo por presentación.",
      body: "Evolvix Global opera con un círculo restringido de socios estratégicos. Los nuevos mandatos se evalúan trimestralmente.",
      accessLabel: "Acceso de Socios",
      accessHeading: "Solicitar un briefing privado.",
      accessBody: "Indique su perfil corporativo y la división de interés. Le responderá un partner senior en 72 horas.",
      fields: {
        name: "Nombre",
        namePlaceholder: "Ej. Alejandro Sterling",
        org: "Organización",
        orgPlaceholder: "Ej. Sterling Holdings",
        email: "Correo electrónico",
        emailPlaceholder: "alejandro@sterling.com",
        mandate: "Mandato",
        mandatePlaceholder: "Logística · Capital · Inteligencia · Infraestructura",
        message: "Mensaje",
        messagePlaceholder: "Describa su objetivo estratégico...",
        submit: "Enviar Solicitud",
      },
      officesLabel: "Oficinas",
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
