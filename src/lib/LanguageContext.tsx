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
      eyebrow: "Evolvix Global — Consultoría Estratégica B2B",
      liveLabel: "Activo en 5 Mercados · Resultados Comprobados",
      headingLine1: "Transformamos tu negocio",
      headingLine2: "en crecimiento medible y sostenible.",
      headingOf: "",
      body: "Consultoría estratégica, desarrollo tecnológico y automatización de procesos para empresas que buscan resultados reales. Aumentamos tus ventas, reducimos costos y optimizamos operaciones — sin contratar múltiples agencias.",
      ctaPrimary: "Agenda tu auditoría gratuita",
      ctaSecondary: "Ver casos de éxito",
      ctaMicrocopy: "Respuesta garantizada en 24h · Sin compromiso · Resultados desde el primer mes",
      ctaWhatsApp: "Habla ahora por WhatsApp",
    },

    problem: {
      eyebrow: "§ 01 — Señales de Alerta en tu Negocio",
      heading: "¿Tu empresa está dejando dinero en la mesa por ineficiencias?",
      body: "El 87% de las empresas pierden hasta 40% de sus ingresos anuales por procesos ineficientes, decisiones basadas en intuición y sistemas obsoletos. Estos problemas no solo costan dinero, sino que frenan tu crecimiento y te hacen perder frente a la competencia.",
      painPoints: [
        "🔴 Procesos manuales que consumen 20+ horas semanales de tu equipo",
        "🔴 Decisiones importantes basadas en 'corazonadas' sin datos reales",
        "🔴 Sistemas anticuados que generan errores y retrasan entregas",
        "🔴 Costos operativos innecesarios que impactan directamente tu margen",
        "🔴 Competidores que crecen 3x más rápido por usar tecnología"
      ],
      urgency: "Cada día de espera te cuesta oportunidades y clientes",
      cta: "Calcula tu pérdida potencial ahora",
    },

    solution: {
      eyebrow: "§ 02 — Nuestra Solución Probada",
      heading: "Transformamos operaciones en crecimiento medible",
      body: "Metodología validada con 200+ empresas que garantiza resultados en 90 días. Optimizamos procesos, automatizamos tareas repetitivas e implementamos dashboards para decisiones basadas en datos — sin interrumpir tu operación actual.",
      benefits: [
        "💰 Reducción garantizada de costos operativos 30-40%",
        "📈 Aumento de productividad 50-70% en el primer trimestre",
        "🎯 Decisiones estratégicas basadas en datos en tiempo real",
        "🚀 Crecimiento de ingresos 20-35% en 6 meses",
        "👥 Equipo dedicado con experiencia en tu industria"
      ],
      guarantee: "Resultados visibles desde el primer mes o no pagas",
      cta: "Solicitar propuesta personalizada",
    },

    howItWorks: {
      eyebrow: "§ 03 — Nuestra Metodología",
      heading: "Proceso de transformación en 4 semanas",
      body: "Sistema probado que entrega resultados visibles desde la primera semana. Sin interrupciones, sin riesgos, solo crecimiento medible.",
      steps: [
        {
          number: "1",
          title: "Auditoría 360° (Semana 1)",
          description: "Análisis completo de tus procesos, sistemas y KPIs. Identificamos 15-25 oportunidades de mejora con impacto financiero calculado."
        },
        {
          number: "2", 
          title: "Plan de acción (Semana 2)",
          description: "Diseñamos hoja de ruta personalizada con prioridades según ROI. Presentamos propuesta con timeline y métricas claras."
        },
        {
          number: "3",
          title: "Implementación rápida (Semana 3-4)",
          description: "Ejecución ágil con equipo dedicado. Primeras optimizaciones live en 7 días, resultados completos en 30 días."
        },
        {
          number: "4",
          title: "Escalación continua (Mes 2+)",
          description: "Monitoreo permanente, ajustes finos y expansión a otras áreas. Soporte continuo para mantener el crecimiento."
        }
      ],
      guarantee: "Primeros resultados visibles en 14 días o reembolso completo",
      cta: "Iniciar transformación ahora",
    },

    socialProof: {
      eyebrow: "§ 04 — Resultados Verificados",
      heading: "200+ empresas ya transforman su negocio con nosotros",
      body: "Resultados auditados por terceros. Casos de éxito en tecnología, manufactura, servicios y retail. Promedio de ROI 3.2x en el primer año.",
      stats: [
        { value: "42%", label: "Reducción promedio en costos operativos" },
        { value: "67%", label: "Aumento en productividad del equipo" },
        { value: "31%", label: "Crecimiento de ingresos en 6 meses" },
        { value: "4.8/5", label: "Satisfacción cliente (200+ reseñas)" }
      ],
      testimonials: [
        { company: "TechCorp", result: "Reducimos costos 35% en 90 días", industry: "Tecnología" },
        { company: "ManufacturaPro", result: "Aumentamos producción 45% sin contratar", industry: "Manufactura" },
        { company: "RetailMax", result: "ROI 4.2x en primer año", industry: "Retail" }
      ],
      guarantee: "Resultados garantizados por contrato o te devolvemos el dinero",
      cta: "Ver casos de éxito completos",
    },

    strongCTA: {
      eyebrow: "§ 05 — Oferta Limitada",
      heading: "Transforma tu negocio en 30 días o es gratis",
      body: "Auditoría estratégica completa + plan de acción personalizado + implementación inicial. Valor real: €4,990. Hoy: Gratis para las primeras 10 empresas este mes.",
      offer: {
        value: "€4,990",
        price: "GRATIS",
        savings: "Ahorra €4,990",
        limited: "Solo 10 cupones disponibles"
      },
      guarantee: "Garantía total: Si no ves resultados en 30 días, no pagas nada",
      urgency: "Oferta termina en 48 horas o cuando se agoten las 10 plazas",
      cta: "Reservar mi cupón gratis ahora",
      whatsapp: "¿Prefieres WhatsApp? Escríbenos ahora",
    },

    servicePackages: {
      eyebrow: "§ 02 — Paquetes de Servicios",
      heading: "Soluciones concretas para resultados medibles",
      subheading: "Elige el paquete que mejor se adapte a tu etapa de crecimiento",
      packages: [
        {
          id: "diagnostico-express",
          name: "Diagnóstico Digital Express 48h",
          tagline: "Identifica tus pérdidas en 48 horas",
          forWho: "Empresas 10-50 empleados",
          problem: "No sabes por dónde empezar ni cuánto pierdes por procesos ineficientes",
          includes: [
            "Auditoría completa de procesos en 48h",
            "Mapa de 15-25 oportunidades con impacto € calculado",
            "Priorización por ROI (alto/medio/bajo)",
            "Plan de acción primeros 30 días",
            "Dashboard de KPIs personalizado"
          ],
          result: "Identificación de €20k-100k en ahorros potenciales + roadmap claro",
          duration: "2 semanas",
          price: "€1,990",
          specialOffer: "Gratis para primeros 10 clientes del mes",
          cta: "Reservar diagnóstico gratis"
        },
        {
          id: "automatizacion-inteligente",
          name: "Automatización Inteligente 90 días",
          tagline: "Elimina tareas manuales y errores",
          forWho: "Empresas 50-200 empleados",
          problem: "Pierdes 20+ horas semanales en tareas repetitivas y cometes errores costosos",
          includes: [
            "Implementación de 3-5 automatizaciones clave",
            "Integración de sistemas existentes",
            "Capacitación del equipo (4 sesiones)",
            "Monitorización y optimización 30 días",
            "Soporte técnico prioritario"
          ],
          result: "Reducción 60-80% tiempo manual + eliminación 95% errores",
          duration: "3 meses",
          price: "€7,990",
          financing: "Financiable en 3 cuotas sin intereses",
          cta: "Solicitar propuesta"
        },
        {
          id: "transformacion-completa",
          name: "Transformación Digital Completa 6 meses",
          tagline: "Crecimiento acelerado con tecnología",
          forWho: "Empresas 200+ empleados",
          problem: "Sistemas desactualizados, decisiones sin datos, crecimiento limitado",
          includes: [
            "Auditoría y estrategia digital completa",
            "Desarrollo software a medida (2-3 aplicaciones)",
            "Implementación de BI y dashboards en tiempo real",
            "Reestructuración de procesos clave",
            "Equipo dedicado (PM + 2 especialistas)",
            "Formación continua del equipo interno"
          ],
          result: "Crecimiento ingresos 25-40% + reducción costos 30-45% en 6 meses",
          duration: "6 meses",
          price: "€24,990",
          payment: "Pago por hitos de resultados",
          cta: "Agendar llamada estratégica"
        }
      ],
      guarantee: "Resultados garantizados o te devolvemos el dinero",
      urgency: "Plazas limitadas: 5 diagnósticos gratis este mes"
    },

    footprint: {
      eyebrow: "§ 03 — Where We Operate",
      heading: "Close to your business, wherever it is.",
      body: "We operate across five key markets — Madrid, Paris, Miami, Dubai and Cairo — so whether you're expanding into Europe, MENA or the Americas, there's always an Evolvix team nearby.",
    },

    board: {
      eyebrow: "§ 04 — Why Companies Choose Us",
      headingLine1: "We've already solved",
      headingLine2: "what you're facing.",
      body: "Our team has fixed operational bottlenecks, delivered international trade cycles and shipped projects across Europe, the Middle East and the Americas. You get senior people who've done the exact work before — not juniors learning on your dime.",
      cta: "Talk to the Team →",
    },

    // Investment Thesis
    thesis: {
      eyebrow: "§ 04 — Competitive Advantage",
      headingLine1: "A geographically shielded",
      headingLine2: "multi-asset ecosystem.",
      body: "Evolvix is structured as a diversified group — not a single business, but an integrated portfolio of strategic assets designed to grow in parallel, hedge each other, and compound value across cycles.",
      pillars: [
        { label: "Sector Diversification", detail: "Energy, Engineering, BPO and Real Estate. If one sector fluctuates, others compensate." },
        { label: "Geographic Arbitrage", detail: "Leveraging Egypt's operational costs, EU technology, Dubai capital and Miami's commercial access." },
        { label: "Scalability", detail: "Brands operate under a shared matrix that reduces structural costs and maximizes net margin." },
      ],
    },

    holdings: {
      eyebrow: "§ 05 — The Services in Detail",
      heading: "Real outcomes, not just services.",
      seeAll: "Full portfolio →",
      items: [
        { code: "EVX-01", name: "International Trade", tagline: "Stop losing deals to customs delays", body: "Companies expanding internationally lose 30–40% of lead time to logistics friction. We take over your entire import/export cycle — customs, carrier management, supplier coordination and compliance — so your deals close faster. Clients typically cut cross-border delays by 40%." },
        { code: "EVX-02", name: "Business Intelligence", tagline: "Stop guessing. Start deciding.", body: "Your team makes daily decisions without clean data. We build dashboards, automate your manual reporting and connect your systems so every decision is backed by real numbers. Average client saves 60% of reporting time within 90 days." },
        { code: "EVX-03", name: "Digital Security", tagline: "One breach can close your business", body: "Most companies only think about security after an incident. We audit your attack surface, close the vulnerabilities and keep you compliant — so your clients trust you and your business keeps running, even under attack." },
        { code: "EVX-04", name: "Project Delivery", tagline: "Get it done. On time. On budget.", body: "Strategic projects fail not because of bad ideas — but because execution falls apart. We embed a senior team into your operations, manage stakeholders and deliver. 95% of our projects close within the agreed scope and timeline." },
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
        { letter: "X", title: "Exponential Factor", desc: "The value multiplier applied to every Evolvix company." },
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
        { name: "Evolvix Global — Executive Board", role: "Group Leadership", bio: "Evolvix Global is a diversified Spanish business group whose pillars are Excellence, Boldness, Legacy and Execution. The board directs capital, operations and expansion across all four divisions." },
        { name: "Division Principals", role: "Operational Leadership", bio: "Each Evolvix division is led by a dedicated principal with deep sector expertise: energy concessions & grid infrastructure, high-complexity engineering, institutional BPO operations, and real-estate asset management." },
        { name: "Strategic Advisors", role: "International Advisory Council", bio: "An international advisory council supports the group across key jurisdictions — Spain/EU for legal & funding access, Dubai/MENA for capital formation, and Miami for Americas market connectivity." },
        { name: "Investor Relations", role: "Capital & Partnerships", bio: "Dedicated investor relations management for institutional capital, sovereign mandates and co-investment structures. The group targets 24-month expansion into new markets with tangible asset backing." },
      ],
    },

    contactPage: {
      sectionEyebrow: "Section · Contact",
      heading: "Hablemos de tu crecimiento.",
      body: "Cuéntanos qué está frenando tu negocio. Un especialista real analizará tu situación y te dará un plan de acción en menos de 24 horas — sin compromiso, sin presión de ventas.",
      accessLabel: "Solicita auditoría gratuita",
      accessHeading: "¿Cuál es tu reto?",
      accessBody: "Describe brevemente tu situación. Te diremos honestamente si podemos ayudarte y cómo.",
      fields: {
        name: "Nombre completo",
        namePlaceholder: "Ej. María González",
        org: "Empresa",
        orgPlaceholder: "Ej. González & Asociados",
        email: "Correo electrónico",
        emailPlaceholder: "maria@gonzalez.com",
        mandate: "Servicio de interés",
        mandatePlaceholder: "Consultoría · Tecnología · Automatización",
        message: "Cuéntanos más",
        messagePlaceholder: "Describe brevemente tu reto o objetivo...",
        submit: "Agenda llamada estratégica",
      },
      officesLabel: "Nuestras oficinas",
      microcopy: "Respuesta en menos de 24h • Sin compromiso • 100% gratuito",
      whatsappCTA: "O escríbenos por WhatsApp",
    },

    services: {
      keyCapabilities: "Key Capabilities",
      backToHoldings: "← Back to Holdings",
      energy: {
        metaTitle: "Energy Division — Evolvix Global",
        metaDesc: "Renewable and conventional energy assets, long-term concessions and grid infrastructure across emerging and developed markets.",
        extraParagraph: "We guarantee the energy sovereignty of our clients through intelligent management of resources and the commercialization of high-yield assets. Operating across the Eje MENA (Dubai / Egypt) and the Eje Europeo (Madrid / Paris) — the world's fastest-growing markets for constructive and financial capital.",
        capabilitiesHeading: "Sector con flujo de caja recurrente y estable.",
        capabilitiesIntro: "Nuestra división de energía se enfoca en:",
        capabilities: [
          "Desarrollo de proyectos de energía renovable",
          "Infraestructura de red y transmisión",
          "Comercio y optimización energética",
          "Cumplimiento regulatorio y permisos",
          "Gestión y operación de activos",
        ],
        cta: "Agenda llamada estratégica sobre energía",
        microcopy: "Respuesta en menos de 24h • Sin compromiso • 100% gratuito",
        whatsappCTA: "Escríbenos por WhatsApp",
      },
      engineering: {
        metaTitle: "Engineering & Infra — Evolvix Global",
        metaDesc: "High-complexity technical projects, industrial architecture and project direction for governmental and private clients.",
        extraParagraph: "Integral engineering solutions that fuse technical vanguard with operational efficiency. The technical arm of Evolvix Global — trusted for consulting and high-level architecture on governmental and private projects across four continents.",
        capabilitiesHeading: "Excelencia técnica a toda escala.",
        pillars: [
          { label: "Proyectos técnicos de alta complejidad", detail: "Diseñamos y ejecutamos proyectos de la más alta complejidad técnica — desde arquitectura industrial hasta la gestión de obras a gran escala." },
          { label: "Mandatos gubernamentales y privados", detail: "Brazo técnico de confianza para programas de infraestructura gubernamental y desarrollos emblemáticos del sector privado en España, MENA y las Américas." },
          { label: "Soluciones de ingeniería integral", detail: "Servicios de ingeniería integrales que fusionan vanguardia técnica con eficiencia operativa — desde el concepto hasta la puesta en marcha." },
        ],
        cta: "Agenda llamada estratégica sobre ingeniería",
        microcopy: "Respuesta en menos de 24h • Sin compromiso • 100% gratuito",
        whatsappCTA: "Escríbenos por WhatsApp",
      },
      bpo: {
        metaTitle: "Global Services (BPO) — Evolvix Global",
        metaDesc: "High-performance contact centers and corporate support. Technology and human capital at the service of client relationships.",
        extraParagraph: "Technology and human capital at the service of client relationships. We operate global response centers with premium quality standards — where pure scalability meets institutional service delivery. Positioned to leverage Egypt's operational efficiency with Spain and France's technological standards.",
        capabilitiesHeading: "Scalability. Human capital. Institutional grade.",
        pillars: [
          { label: "Premium Contact Centers", detail: "High-level contact center operations delivering institutional-grade client relationships. Pure scalability based on human capital and technology." },
          { label: "Finance & Compliance", detail: "Outsourced finance, audit-readiness and regulatory compliance functions delivered to the standards demanded by Fortune 500 corporations." },
          { label: "Tech Support & Back-Office", detail: "End-to-end back-office operations: technical support, helpdesk, digital processing and corporate workflow optimization." },
          { label: "Geographic Cost Arbitrage", detail: "Operational centers strategically positioned in Egypt — leveraging the MENA region's competitive operational costs with European management standards." },
        ]
      },
      assetManagement: {
        metaTitle: "Asset Management — Evolvix Global",
        metaDesc: "Real estate, private equity and brand expansion. Identifying and developing investment opportunities in strategic environments.",
        extraParagraph: "We identify and develop investment opportunities in strategic environments, ensuring solid and sustained growth of the group's assets. From corporate real estate to alternative investment vehicles — we connect Spanish business tradition with the audacity of Arab and American markets.",
        capabilitiesHeading: "Capital with precision. Growth with legacy.",
        pillars: [
          { label: "Corporate Real Estate", detail: "Identification and development of premium corporate real estate in the key financial nodes: Madrid, Dubai, Miami and Cairo." },
          { label: "Brand & Group Expansion", detail: "Strategic management and expansion of Evolvix Global's own brands — driving solid, sustained growth of group assets across new markets in under 24 months." },
          { label: "Private Equity & Infra Debt", detail: "Multi-class portfolio management: private equity stakes, infrastructure debt instruments, and sovereign mandates for institutional capital." },
          { label: "Alternative Investment Vehicles", detail: "Structured alternative vehicles for co-investment alongside institutional partners — aligned with the group's geographic triangle: Europe, MENA, and Americas." },
        ]
      }
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
      ctaPrimary: "Agenda una llamada estratégica",
      ctaSecondary: "Ver cómo trabajamos",
      ctaMicrocopy: "Respuesta en menos de 24h • Sin compromiso • 100% gratuito",
      ctaWhatsApp: "Escríbenos por WhatsApp",
    },

    problem: {
      eyebrow: "§ 01 — Señales de Alerta en tu Negocio",
      heading: "¿Tu empresa está dejando dinero en la mesa por ineficiencias?",
      body: "El 87% de las empresas pierden hasta 40% de sus ingresos anuales por procesos ineficientes, decisiones basadas en intuición y sistemas obsoletos. Estos problemas no solo costan dinero, sino que frenan tu crecimiento y te hacen perder frente a la competencia.",
      painPoints: [
        "🔴 Procesos manuales que consumen 20+ horas semanales de tu equipo",
        "🔴 Decisiones importantes basadas en 'corazonadas' sin datos reales",
        "🔴 Sistemas anticuados que generan errores y retrasan entregas",
        "🔴 Costos operativos innecesarios que impactan directamente tu margen",
        "🔴 Competidores que crecen 3x más rápido por usar tecnología"
      ],
      urgency: "Cada día de espera te cuesta oportunidades y clientes",
      cta: "Calcula tu pérdida potencial ahora",
    },

    solution: {
      eyebrow: "§ 02 — Nuestra Solución Probada",
      heading: "Transformamos operaciones en crecimiento medible",
      body: "Metodología validada con 200+ empresas que garantiza resultados en 90 días. Optimizamos procesos, automatizamos tareas repetitivas e implementamos dashboards para decisiones basadas en datos — sin interrumpir tu operación actual.",
      benefits: [
        "💰 Reducción garantizada de costos operativos 30-40%",
        "📈 Aumento de productividad 50-70% en el primer trimestre",
        "🎯 Decisiones estratégicas basadas en datos en tiempo real",
        "🚀 Crecimiento de ingresos 20-35% en 6 meses",
        "👥 Equipo dedicado con experiencia en tu industria"
      ],
      guarantee: "Resultados visibles desde el primer mes o no pagas",
      cta: "Solicitar propuesta personalizada",
    },

    howItWorks: {
      eyebrow: "§ 03 — Nuestra Metodología",
      heading: "Proceso de transformación en 4 semanas",
      body: "Sistema probado que entrega resultados visibles desde la primera semana. Sin interrupciones, sin riesgos, solo crecimiento medible.",
      steps: [
        {
          number: "1",
          title: "Auditoría 360° (Semana 1)",
          description: "Análisis completo de tus procesos, sistemas y KPIs. Identificamos 15-25 oportunidades de mejora con impacto financiero calculado."
        },
        {
          number: "2", 
          title: "Plan de acción (Semana 2)",
          description: "Diseñamos hoja de ruta personalizada con prioridades según ROI. Presentamos propuesta con timeline y métricas claras."
        },
        {
          number: "3",
          title: "Implementación rápida (Semana 3-4)",
          description: "Ejecución ágil con equipo dedicado. Primeras optimizaciones live en 7 días, resultados completos en 30 días."
        },
        {
          number: "4",
          title: "Escalación continua (Mes 2+)",
          description: "Monitoreo permanente, ajustes finos y expansión a otras áreas. Soporte continuo para mantener el crecimiento."
        }
      ],
      guarantee: "Primeros resultados visibles en 14 días o reembolso completo",
      cta: "Iniciar transformación ahora",
    },

    socialProof: {
      eyebrow: "§ 04 — Resultados Verificados",
      heading: "200+ empresas ya transforman su negocio con nosotros",
      body: "Resultados auditados por terceros. Casos de éxito en tecnología, manufactura, servicios y retail. Promedio de ROI 3.2x en el primer año.",
      stats: [
        { value: "42%", label: "Reducción promedio en costos operativos" },
        { value: "67%", label: "Aumento en productividad del equipo" },
        { value: "31%", label: "Crecimiento de ingresos en 6 meses" },
        { value: "4.8/5", label: "Satisfacción cliente (200+ reseñas)" }
      ],
      testimonials: [
        { company: "TechCorp", result: "Reducimos costos 35% en 90 días", industry: "Tecnología" },
        { company: "ManufacturaPro", result: "Aumentamos producción 45% sin contratar", industry: "Manufactura" },
        { company: "RetailMax", result: "ROI 4.2x en primer año", industry: "Retail" }
      ],
      guarantee: "Resultados garantizados por contrato o te devolvemos el dinero",
      cta: "Ver casos de éxito completos",
    },

    strongCTA: {
      eyebrow: "§ 05 — Oferta Limitada",
      heading: "Transforma tu negocio en 30 días o es gratis",
      body: "Auditoría estratégica completa + plan de acción personalizado + implementación inicial. Valor real: €4,990. Hoy: Gratis para las primeras 10 empresas este mes.",
      offer: {
        value: "€4,990",
        price: "GRATIS",
        savings: "Ahorra €4,990",
        limited: "Solo 10 cupones disponibles"
      },
      guarantee: "Garantía total: Si no ves resultados en 30 días, no pagas nada",
      urgency: "Oferta termina en 48 horas o cuando se agoten las 10 plazas",
      cta: "Reservar mi cupón gratis ahora",
      whatsapp: "¿Prefieres WhatsApp? Escríbenos ahora",
    },

    servicePackages: {
      eyebrow: "§ 02 — Paquetes de Servicios",
      heading: "Soluciones concretas para resultados medibles",
      subheading: "Elige el paquete que mejor se adapte a tu etapa de crecimiento",
      packages: [
        {
          id: "diagnostico-express",
          name: "Diagnóstico Digital Express 48h",
          tagline: "Identifica tus pérdidas en 48 horas",
          forWho: "Empresas 10-50 empleados",
          problem: "No sabes por dónde empezar ni cuánto pierdes por procesos ineficientes",
          includes: [
            "Auditoría completa de procesos en 48h",
            "Mapa de 15-25 oportunidades con impacto € calculado",
            "Priorización por ROI (alto/medio/bajo)",
            "Plan de acción primeros 30 días",
            "Dashboard de KPIs personalizado"
          ],
          result: "Identificación de €20k-100k en ahorros potenciales + roadmap claro",
          duration: "2 semanas",
          price: "€1,990",
          specialOffer: "Gratis para primeros 10 clientes del mes",
          cta: "Reservar diagnóstico gratis"
        },
        {
          id: "automatizacion-inteligente",
          name: "Automatización Inteligente 90 días",
          tagline: "Elimina tareas manuales y errores",
          forWho: "Empresas 50-200 empleados",
          problem: "Pierdes 20+ horas semanales en tareas repetitivas y cometes errores costosos",
          includes: [
            "Implementación de 3-5 automatizaciones clave",
            "Integración de sistemas existentes",
            "Capacitación del equipo (4 sesiones)",
            "Monitorización y optimización 30 días",
            "Soporte técnico prioritario"
          ],
          result: "Reducción 60-80% tiempo manual + eliminación 95% errores",
          duration: "3 meses",
          price: "€7,990",
          financing: "Financiable en 3 cuotas sin intereses",
          cta: "Solicitar propuesta"
        },
        {
          id: "transformacion-completa",
          name: "Transformación Digital Completa 6 meses",
          tagline: "Crecimiento acelerado con tecnología",
          forWho: "Empresas 200+ empleados",
          problem: "Sistemas desactualizados, decisiones sin datos, crecimiento limitado",
          includes: [
            "Auditoría y estrategia digital completa",
            "Desarrollo software a medida (2-3 aplicaciones)",
            "Implementación de BI y dashboards en tiempo real",
            "Reestructuración de procesos clave",
            "Equipo dedicado (PM + 2 especialistas)",
            "Formación continua del equipo interno"
          ],
          result: "Crecimiento ingresos 25-40% + reducción costos 30-45% en 6 meses",
          duration: "6 meses",
          price: "€24,990",
          payment: "Pago por hitos de resultados",
          cta: "Agendar llamada estratégica"
        }
      ],
      guarantee: "Resultados garantizados o te devolvemos el dinero",
      urgency: "Plazas limitadas: 5 diagnósticos gratis este mes"
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
      body: "Evolvix se estructura como un grupo diversificado — no es un negocio único, sino un portfolio integrado de activos estratégicos diseñados para crecer en paralelo, protegerse entre sí y capitalizar valor a través de los ciclos.",
      pillars: [
        { label: "Diversificación Sectorial", detail: "Energía, Ingeniería, BPO y Real Estate. Si un sector fluctúa, los otros compensan." },
        { label: "Arbitraje Geográfico", detail: "Aprovechamos costes de Egipto, tecnología de España/Francia, capital de Dubái y apertura de Miami." },
        { label: "Escalabilidad", detail: "Nuestras marcas operan bajo una matriz compartida que reduce costes estructurales y maximiza margen." },
      ],
    },

    holdings: {
      eyebrow: "§ 05 — Los Servicios en Detalle",
      heading: "Resultados reales, no solo servicios.",
      seeAll: "Ver todos →",
      items: [
        { code: "EVX-01", name: "Comercio Internacional", tagline: "Deja de perder deals por retrasos aduaneros", body: "Las empresas que se expanden internacionalmente pierden el 30–40% del tiempo en fricción logística. Nos encargamos de todo tu ciclo de importación y exportación — aduanas, transportistas, proveedores y cumplimiento — para que los acuerdos cierren más rápido. Los clientes reducen sus retrasos un 40%." },
        { code: "EVX-02", name: "Inteligencia de Negocio", tagline: "Deja de adivinar. Empieza a decidir.", body: "Tu equipo toma decisiones diarias sin datos limpios. Construimos dashboards, automatizamos tu reporting manual y conectamos tus sistemas para que cada decisión se base en números reales. El tiempo de reporte se reduce un 60% en 90 días." },
        { code: "EVX-03", name: "Seguridad Digital", tagline: "Una brecha puede cerrar tu negocio", body: "La mayoría de empresas solo piensan en seguridad tras un incidente. Auditamos tu superficie de ataque, cerramos las vulnerabilidades y te mantenemos en cumplimiento — para que tus clientes confíen en ti y tu negocio siga operando, incluso bajo ataque." },
        { code: "EVX-04", name: "Entrega de Proyectos", tagline: "Terminado. En plazo. En presupuesto.", body: "Los proyectos estratégicos no fracasan por malas ideas — sino porque la ejecución se rompe. Integramos un equipo senior en tu operación, gestionamos stakeholders y entregamos. El 95% de nuestros proyectos cierran dentro del alcance y plazo acordados." },
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
        { letter: "X", title: "Factor Exponencial", desc: "El multiplicador de valor que aplicamos a cada empresa de Evolvix." },
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
        { name: "Evolvix Global — Consejo Ejecutivo", role: "Liderazgo del Grupo", bio: "Evolvix Global es un grupo empresarial español diversificado cuyos pilares son Excelencia, Audacia, Legado y Ejecución. El consejo dirige el capital, las operaciones y la expansión de las cuatro divisiones." },
        { name: "Directores de División", role: "Liderazgo Operacional", bio: "Cada división de Evolvix está liderada por un director con profunda especialización sectorial: concesiones energéticas e infraestructura de red, ingeniería de alta complejidad, operaciones BPO institucionales y gestión de activos inmobiliarios." },
        { name: "Consejeros Estratégicos", role: "Consejo Asesor Internacional", bio: "Un consejo asesor internacional apoya al grupo en jurisdicciones clave — España/UE para acceso jurídico y fondos, Dubái/MENA para captación de capital, y Miami para conectividad con los mercados de las Américas." },
        { name: "Relaciones con Inversores", role: "Capital y Alianzas", bio: "Gestión dedicada de relaciones con inversores para capital institucional, mandatos soberanos y estructuras de co-inversión. El grupo proyecta expansión a nuevos mercados en 24 meses con respaldo de activos tangibles." },
      ],
    },

    contactPage: {
      sectionEyebrow: "Sección · Contacto",
      heading: "Hablemos de tu crecimiento.",
      body: "Cuéntanos qué está frenando tu negocio. Un especialista real analizará tu situación y te dará un plan de acción en menos de 24 horas — sin compromiso, sin presión de ventas.",
      accessLabel: "Solicita auditoría gratuita",
      accessHeading: "¿Cuál es tu reto?",
      accessBody: "Describe brevemente tu situación. Te diremos honestamente si podemos ayudarte y cómo.",
      fields: {
        name: "Nombre completo",
        namePlaceholder: "Ej. María González",
        org: "Empresa",
        orgPlaceholder: "Ej. González & Asociados",
        email: "Correo electrónico",
        emailPlaceholder: "maria@gonzalez.com",
        mandate: "Servicio de interés",
        mandatePlaceholder: "Consultoría · Tecnología · Automatización",
        message: "Cuéntanos más",
        messagePlaceholder: "Describe brevemente tu reto o objetivo...",
        submit: "Agenda llamada estratégica",
      },
      officesLabel: "Nuestras oficinas",
      microcopy: "Respuesta en menos de 24h • Sin compromiso • 100% gratuito",
      whatsappCTA: "O escríbenos por WhatsApp",
    },

    services: {
      keyCapabilities: "Capacidades Clave",
      backToHoldings: "← Volver al Portfolio",
      energy: {
        metaTitle: "División de Energía — Evolvix Global",
        metaDesc: "Activos de energía convencional y renovable, concesiones a largo plazo e infraestructura de red en mercados emergentes y desarrollados.",
        extraParagraph: "Garantizamos la soberanía energética de nuestros clientes mediante la gestión inteligente de recursos y la comercialización de activos de alto rendimiento. Operamos a través del Eje MENA (Dubái / Egipto) y el Eje Europeo (Madrid / París) — los mercados de mayor crecimiento de capital constructivo y financiero del mundo.",
        capabilitiesHeading: "Sector con flujo de caja recurrente y estable.",
        pillars: [
          { label: "Concesiones a Largo Plazo", detail: "Concesiones energéticas aseguradas en mercados clave que proporcionan un flujo de caja estable y recurrente independiente de la volatilidad de precios a corto plazo." },
          { label: "Infraestructura de Red", detail: "Diseño, financiación y operación de infraestructura de transmisión y distribución a través de los corredores de MENA y Europa." },
          { label: "Trading de Energía", detail: "Comercialización activa de activos energéticos a través de mesas de trading de grado institucional. Garantizamos la soberanía energética de nuestros clientes." },
          { label: "Activos Renovables", detail: "Portafolios de renovables híbridos, eólicos y solares desarrollados en Egipto, España y los EAU — mercados con el mayor crecimiento de capital constructivo y financiero." },
        ]
      },
      engineering: {
        metaTitle: "Ingeniería e Infraestructura — Evolvix Global",
        metaDesc: "Proyectos técnicos de alta complejidad, arquitectura industrial y dirección de proyectos para clientes gubernamentales y privados.",
        extraParagraph: "Soluciones de ingeniería integrales que fusionan la vanguardia técnica con la eficiencia operativa. El brazo técnico de Evolvix Global — de confianza para consultoría y arquitectura de alto nivel en proyectos gubernamentales y privados en cuatro continentes.",
        capabilitiesHeading: "Excelencia técnica a cualquier escala.",
        pillars: [
          { label: "Proyectos Técnicos de Alta Complejidad", detail: "Diseñamos y ejecutamos proyectos de la máxima complejidad técnica — desde arquitectura industrial hasta la gestión de grandes obras de construcción." },
          { label: "Mandatos Gubernamentales y Privados", detail: "Brazo técnico de confianza para programas de infraestructura gubernamentales y desarrollos emblemáticos del sector privado en España, MENA y las Américas." },
          { label: "Soluciones de Ingeniería Integrales", detail: "Servicios integrales de ingeniería que fusionan la vanguardia técnica con la eficiencia operativa — desde el concepto hasta la puesta en marcha." },
          { label: "Dirección de Activos Industriales", detail: "Dirección técnica de activos industriales de misión crítica: parques logísticos, centros de datos, corredores de transporte e infraestructuras pesadas." },
        ]
      },
      bpo: {
        metaTitle: "Servicios Globales (BPO) — Evolvix Global",
        metaDesc: "Contact centers de alto rendimiento y soporte corporativo. Tecnología y capital humano al servicio de las relaciones con clientes.",
        extraParagraph: "Tecnología y capital humano al servicio de las relaciones con los clientes. Operamos centros de respuesta globales con estándares de calidad premium — donde la escalabilidad pura se encuentra con la prestación de servicios institucionales. Posicionados para aprovechar la eficiencia operativa de Egipto con los estándares tecnológicos de España y Francia.",
        capabilitiesHeading: "Escalabilidad. Capital humano. Grado institucional.",
        pillars: [
          { label: "Contact Centers Premium", detail: "Operaciones de contact center de alto nivel que ofrecen relaciones con clientes de grado institucional. Escalabilidad pura basada en capital humano y tecnología." },
          { label: "Finanzas y Cumplimiento", detail: "Funciones externalizadas de finanzas, preparación para auditorías y cumplimiento normativo entregadas bajo los estándares exigidos por las corporaciones Fortune 500." },
          { label: "Soporte Técnico y Back-Office", detail: "Operaciones de back-office de extremo a extremo: soporte técnico, helpdesk, procesamiento digital y optimización de flujos de trabajo corporativos." },
          { label: "Arbitraje Geográfico de Costos", detail: "Centros operativos posicionados estratégicamente en Egipto — aprovechando los costes operativos competitivos de la región MENA con estándares de gestión europeos." },
        ]
      },
      assetManagement: {
        metaTitle: "Gestión de Activos — Evolvix Global",
        metaDesc: "Bienes raíces, capital privado y expansión de marca. Identificando y desarrollando oportunidades de inversión en entornos estratégicos.",
        extraParagraph: "Identificamos y desarrollamos oportunidades de inversión en entornos estratégicos, asegurando un crecimiento sólido y sostenido de los activos del grupo. Desde inmuebles corporativos hasta vehículos de inversión alternativos — conectamos la tradición empresarial española con la audacia de los mercados árabes y americanos.",
        capabilitiesHeading: "Capital con precisión. Crecimiento con legado.",
        pillars: [
          { label: "Inmuebles Corporativos", detail: "Identificación y desarrollo de inmuebles corporativos premium en los nodos financieros clave: Madrid, Dubái, Miami y El Cairo." },
          { label: "Expansión de Marca y Grupo", detail: "Gestión estratégica y expansión de las marcas propias de Evolvix Global — impulsando un crecimiento sólido y sostenido de los activos del grupo en nuevos mercados en menos de 24 meses." },
          { label: "Capital Privado y Deuda de Infraestructuras", detail: "Gestión de carteras multi-clase: participaciones de capital privado, instrumentos de deuda de infraestructuras y mandatos soberanos para capital institucional." },
          { label: "Vehículos de Inversión Alternativos", detail: "Vehículos alternativos estructurados para co-inversión junto a socios institucionales — alineados con el triángulo geográfico del grupo: Europa, MENA y Américas." },
        ]
      }
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
