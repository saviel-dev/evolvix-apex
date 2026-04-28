import { createContext, useContext, useState } from "react";

export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      services: "Divisions",
      footprint: "Footprint",
      board: "Our Team",
      talent: "Talent",
      contact: "Contact",
    },
    partnerAccess: "Contact Us",

    hero: {
      eyebrow: "Evolvix Global — Strategic B2B Consulting",
      liveLabel: "Active in 5 Markets · Proven Results",
      headingLine1: "We transform operations",
      headingLine2: "into measurable growth.",
      headingOf: "",
      subtitle: "We transform operations into measurable growth",
      bullets: [
        "Strategic consulting to optimise your business model",
        "Custom technology development for your processes",
        "Automation that reduces costs and increases efficiency",
      ],
      body: "Strategic consulting, technology development and process automation for companies seeking real results. We grow your revenue, cut costs and optimise operations — without hiring multiple agencies.",
      ctaPrimary: "Book your free audit",
      ctaSecondary: "See success stories",
      ctaMicrocopy: "Guaranteed reply in 24h · No commitment · Results from month one",
      ctaWhatsApp: "Chat now on WhatsApp",
    },

    problem: {
      eyebrow: "01 — Warning Signs for Your Business",
      heading: "Is your company leaving money on the table through inefficiency?",
      body: "87% of companies lose up to 40% of their annual revenue to inefficient processes, gut-based decisions and outdated systems. These problems don't just cost money — they stall your growth and hand the advantage to your competition.",
      painPoints: [
        "Manual processes consuming 20+ weekly hours of your team's time",
        "Important decisions made on gut feeling with no real data",
        "Outdated systems causing errors and delaying deliveries",
        "Unnecessary operating costs hitting your margins directly",
        "Competitors growing 3× faster by leveraging technology"
      ],
      urgency: "Every day you wait costs you opportunities and clients",
      cta: "Calculate your potential loss now",
    },

    solution: {
      eyebrow: "02 — Our Proven Solution",
      heading: "We transform operations into measurable growth",
      body: "A methodology validated with 200+ companies that guarantees results in 90 days. We optimise processes, automate repetitive tasks and implement dashboards for data-driven decisions — without disrupting your current operation.",
      benefits: [
        "Guaranteed reduction in operating costs 30–40%",
        "Productivity increase 50–70% in the first quarter",
        "Strategic decisions backed by real-time data",
        "Revenue growth 20–35% in 6 months",
        "Dedicated team with expertise in your industry"
      ],
      guarantee: "Visible results from month one or you don't pay",
      cta: "Request a personalised proposal",
    },

    howItWorks: {
      eyebrow: "03 — Our Methodology",
      heading: "Transformation process in 4 weeks",
      body: "A proven system delivering visible results from week one. No disruption, no risk — only measurable growth.",
      steps: [
        {
          number: "1",
          title: "360° Audit (Week 1)",
          description: "Full analysis of your processes, systems and KPIs. We identify 15–25 improvement opportunities with calculated financial impact."
        },
        {
          number: "2",
          title: "Action Plan (Week 2)",
          description: "We design a personalised roadmap prioritised by ROI, with a clear timeline and measurable metrics."
        },
        {
          number: "3",
          title: "Rapid Implementation (Weeks 3–4)",
          description: "Agile execution with a dedicated team. First optimisations live in 7 days, full results in 30 days."
        },
        {
          number: "4",
          title: "Continuous Scaling (Month 2+)",
          description: "Permanent monitoring, fine-tuning and expansion to other areas. Ongoing support to sustain growth."
        }
      ],
      guarantee: "First visible results in 14 days or full refund",
      cta: "Start the transformation now",
    },

    socialProof: {
      eyebrow: "04 — Verified Results",
      heading: "200+ companies already transforming their business with us",
      body: "Third-party audited results. Success stories in technology, manufacturing, services and retail. Average ROI 3.2× in the first year.",
      stats: [
        { value: "42%", label: "Average reduction in operating costs" },
        { value: "67%", label: "Increase in team productivity" },
        { value: "31%", label: "Revenue growth in 6 months" },
        { value: "4.8/5", label: "Client satisfaction (200+ reviews)" }
      ],
      testimonials: [
        { company: "TechCorp", result: "We cut costs 35% in 90 days", industry: "Technology" },
        { company: "ManufacturaPro", result: "We increased output 45% without hiring", industry: "Manufacturing" },
        { company: "RetailMax", result: "ROI 4.2× in the first year", industry: "Retail" }
      ],
      guarantee: "Results guaranteed by contract or your money back",
      cta: "See full success stories",
    },

    strongCTA: {
      eyebrow: "05 — Limited Offer",
      heading: "Transform your business in 30 days or it's free",
      body: "Full strategic audit + personalised action plan + initial implementation. Real value: €4,990. Today: Free for the first 10 companies this month.",
      offer: {
        value: "€4,990",
        price: "FREE",
        savings: "Save €4,990",
        limited: "Only 10 vouchers available"
      },
      guarantee: "Full guarantee: if you see no results in 30 days, you pay nothing",
      urgency: "Offer ends in 48 hours or when the 10 spots are gone",
      cta: "Reserve my free voucher now",
      whatsapp: "Prefer WhatsApp? Message us now",
    },

    servicePackages: {
      eyebrow: "02 — Service Packages",
      heading: "Concrete solutions for measurable results",
      subheading: "Choose the package that best fits your stage of growth",
      packages: [
        {
          id: "diagnostico-express",
          name: "Express Digital Diagnosis 48h",
          tagline: "Identify your losses in 48 hours",
          forWho: "Companies with 10–50 employees",
          problem: "You don't know where to start or how much you're losing to inefficient processes",
          includes: [
            "Full 48h process audit",
            "Map of 15–25 opportunities with calculated € impact",
            "Prioritisation by ROI (high/medium/low)",
            "30-day action plan",
            "Personalised KPI dashboard"
          ],
          result: "Identification of €20k–100k in potential savings + clear roadmap",
          duration: "2 weeks",
          price: "€1,990",
          specialOffer: "Free for the first 10 clients this month",
          cta: "Reserve free diagnosis"
        },
        {
          id: "automatizacion-inteligente",
          name: "Intelligent Automation 90 days",
          tagline: "Eliminate manual tasks and errors",
          forWho: "Companies with 50–200 employees",
          problem: "You lose 20+ weekly hours to repetitive tasks and make costly mistakes",
          includes: [
            "Implementation of 3–5 key automations",
            "Integration of existing systems",
            "Team training (4 sessions)",
            "30-day monitoring and optimisation",
            "Priority technical support"
          ],
          result: "60–80% reduction in manual time + 95% error elimination",
          duration: "3 months",
          price: "€7,990",
          financing: "Payable in 3 interest-free instalments",
          cta: "Request a proposal"
        },
        {
          id: "transformacion-completa",
          name: "Complete Digital Transformation 6 months",
          tagline: "Accelerated growth through technology",
          forWho: "Companies with 200+ employees",
          problem: "Outdated systems, decisions without data, limited growth",
          includes: [
            "Full digital audit and strategy",
            "Custom software development (2–3 applications)",
            "BI and real-time dashboard implementation",
            "Restructuring of key processes",
            "Dedicated team (PM + 2 specialists)",
            "Ongoing internal team training"
          ],
          result: "Revenue growth 25–40% + cost reduction 30–45% in 6 months",
          duration: "6 months",
          price: "€24,990",
          payment: "Payment by results milestones",
          cta: "Schedule a strategic call"
        }
      ],
      guarantee: "Results guaranteed or your money back",
      urgency: "Limited spots: 5 free diagnoses this month"
    },

    // --- Shared UI micro-copy ---
    ui: {
      painBoxTitle: "Warning signs for your business:",
      seeMore: "See details",
      seeLess: "See less",
      mostPopular: "MOST POPULAR",
      problemSolvedLabel: "Problem it solves:",
      includesLabel: "Includes:",
      expectedResultLabel: "Expected result:",
      durationLabel: "Duration:",
      normalPriceLabel: "Normal:",
      solutionBenefitDetails: [
        "We automate manual processes, implement management systems and optimise workflows to reduce operating costs by 30–40%.",
        "We implement collaborative tools, eliminate redundant tasks and train your team to increase productivity by 50–70%.",
        "We create real-time dashboards, implement key KPIs and establish reporting systems so every decision is 100% data-driven.",
        "We develop growth strategies, optimise sales channels and improve customer retention for sustainable revenue growth of 20–35%.",
        "We assign a senior team with expertise in your industry, available 24/7 to tackle sector-specific challenges.",
      ],
    },

    automationPage: {
      eyebrow: "Service · Process Automation",
      heading: "Automation that frees up 20+ weekly hours for your team",
      body: "Let technology handle the repetitive work. Your team focused on what truly creates value.",
      ctaPrimary: "Calculate your savings potential",
      ctaSecondary: "Talk to an expert",
      microcopy: "Free analysis • Results in 60 days • No commitment",
      problem: {
        eyebrow: "Does your team lose time on repetitive tasks?",
        heading: "The Hidden Cost of Manual Work",
        body: "Your team wastes valuable hours on manual, repetitive and error-prone tasks. Processes that depend on one person and stop when they're absent. High operating costs from inefficiency.",
        boxTitle: "Signs you need automation:",
        points: [
          "Your team spends 20+ hours a week on repetitive tasks",
          "Constant errors from human intervention",
          "Processes that stop when one person is absent",
          "Operating costs growing faster than revenue",
        ],
        cta: "Discover our solution",
      },
      solution: {
        eyebrow: "Intelligent Automation",
        heading: "Technology that Works for You 24/7",
        body: "Intelligent process automation that eliminates manual work, reduces errors and frees your team to focus on growth and strategy.",
        boxTitle: "What our automation includes:",
        items: [
          "Mapping and analysis of current processes",
          "Identification of automation opportunities",
          "Implementation of automated tools and workflows",
          "Integration with existing systems",
          "Training and change management",
          "Continuous monitoring and optimisation",
        ],
      },
      process: {
        eyebrow: "Fast and Safe Implementation",
        heading: "Automation in 5 Weeks with Visible Results",
        steps: [
          { title: "Audit", desc: "Process mapping and calculation of potential impact" },
          { title: "Design", desc: "Automation architecture and tool selection" },
          { title: "Implementation", desc: "Configuration and deployment of automations" },
          { title: "Training", desc: "Team training and change management" },
          { title: "Optimisation", desc: "Improvement and expansion of automations" },
        ],
      },
      results: {
        eyebrow: "Immediate Results",
        heading: "Efficiency That Translates Into Money",
        stats: [
          { value: "60–80%", label: "Reduction in manual time" },
          { value: "–95%", label: "Errors eliminated" },
          { value: "30–40%", label: "Cost savings" },
        ],
        socialProofTitle: "Social Proof",
        socialProofBody: "300+ automated processes with visible ROI in 60 days",
        testimonials: [
          { company: "FinanceCorp", quote: "\"We automated accounting, saved 25 weekly hours and eliminated 100% of errors\"" },
          { company: "LogisticsPro", quote: "\"Our tracking system cut operating costs 35% in the first month\"" },
          { company: "ServiceMax", quote: "\"Customer service automation improved satisfaction by 40%\"" },
        ],
      },
      cta: {
        eyebrow: "Calculate Your Savings Potential",
        heading: "How Much Could Your Business Save with Automation?",
        body: "Discover your savings potential with our free analysis. No commitment and results within 24 hours.",
        badge: "FREE ANALYSIS",
        badgeBody: "Savings calculator + automation roadmap",
        ctaBtn: "Calculate my savings potential",
        microcopy: "Reply in 24h • No commitment • Personalised analysis",
      },
    },

    consultingPage: {
      eyebrow: "Service · Strategic Consulting",
      heading: "Strategic Consulting that Transforms Your Business into Measurable Results",
      body: "We stop talking and start executing. Clear strategy + guaranteed implementation = real growth.",
      ctaPrimary: "Book your free strategic audit",
      ctaSecondary: "Talk to an expert",
      microcopy: "Guaranteed reply in 24h • No commitment • Value €2,990",
      problem: {
        eyebrow: "Is your company stuck?",
        heading: "The Cost of Having No Clear Direction",
        body: "Your company has potential but you don't know how to channel it. Gut-based decisions, inefficient processes and limited growth from lack of clear direction.",
        boxTitle: "Signs you need strategic consulting:",
        points: [
          "Growth below 15% per year with no clear cause",
          "Important decisions made without concrete data",
          "Teams working in silos without shared goals",
          "Competition moving faster than you",
        ],
        cta: "Discover our solution",
      },
      solution: {
        eyebrow: "Our Proven Methodology",
        heading: "Strategy That Gets Executed, Not Just Presented",
        body: "Proven methodology combining deep business analysis with an executable strategy. We don't just tell you what to do — we walk every step with you.",
        boxTitle: "What our consulting includes:",
        items: [
          "Full 360° audit of your business model",
          "Opportunity map with calculated € impact",
          "Personalised strategic roadmap (90 days)",
          "KPIs and real-time tracking metrics",
          "Weekly execution sessions with specialists",
        ],
      },
      process: {
        eyebrow: "Clear and Measurable Process",
        heading: "Transformation in 5 Concrete Steps",
        steps: [
          { title: "Diagnosis", desc: "Full analysis of your operation, market and competition" },
          { title: "Strategy", desc: "Roadmap design with clear goals and defined timeline" },
          { title: "Implementation", desc: "Gradual execution with daily follow-up" },
          { title: "Optimisation", desc: "Adjustments based on results and KPIs" },
          { title: "Scaling", desc: "Expansion to other areas of the business" },
        ],
      },
      results: {
        eyebrow: "Proven Results",
        heading: "Measurable and Sustainable Growth",
        stats: [
          { value: "25–40%", label: "Revenue growth in 6 months" },
          { value: "20–30%", label: "Reduction in operating costs" },
          { value: "3.2×", label: "Average ROI in first year" },
        ],
        socialProofTitle: "Social Proof",
        socialProofBody: "200+ companies have transformed their business model with us",
        testimonials: [
          { company: "TechCorp", quote: "\"We grew 35% in 6 months, ROI was visible from month 2\"" },
          { company: "ManufacturaPro", quote: "\"We cut costs 28% and doubled our operational efficiency\"" },
          { company: "RetailMax", quote: "\"Strategic clarity allowed us to expand into 3 new markets\"" },
        ],
      },
      cta: {
        eyebrow: "Start Your Transformation",
        heading: "Ready to Stop Stagnating and Start Growing?",
        body: "Book your free strategic audit. We analyse your situation and give you an action plan with no commitment.",
        badge: "FREE",
        badgeSub: "Normal value: €2,990",
        badgeBody: "Full strategic audit + action plan",
        ctaBtn: "Book your free audit now",
        microcopy: "Limited spots: 5 free audits this month",
      },
    },

    techPage: {
      eyebrow: "Service · Technology Development",
      heading: "Technology Development That Solves Real Problems, Not Creates Complications",
      body: "Software built for your business, not the other way around. Solutions that work from day one.",
      ctaPrimary: "Request a development proposal",
      ctaSecondary: "Talk to a developer",
      microcopy: "Guaranteed reply in 24h • No commitment • Free analysis",
      problem: {
        eyebrow: "Is technology slowing you down instead of helping?",
        heading: "The Cost of Using Software That Doesn't Adapt to You",
        body: "Generic software that doesn't fit your processes, disconnected systems that speak different languages, and development that never ends or doesn't work as expected.",
        boxTitle: "Signs you need custom development:",
        points: [
          "Your team loses hours on repetitive manual processes",
          "Systems that don't communicate with each other",
          "Constant errors from human intervention",
          "You can't scale because processes depend on people",
        ],
        cta: "Discover our solution",
      },
      solution: {
        eyebrow: "Agile, Results-Focused Development",
        heading: "Software That Integrates Perfectly With Your Business",
        body: "Agile development of custom technology solutions that integrate seamlessly into your current operation. From analysis through implementation to ongoing support.",
        boxTitle: "What our development includes:",
        items: [
          "Requirements analysis and architecture design",
          "Custom software development (web, mobile, desktop)",
          "Integration with existing systems",
          "Exhaustive testing and quality control",
          "Team training and full documentation",
          "24/7 technical support for the first 3 months",
        ],
      },
      process: {
        eyebrow: "Transparent Development Process",
        heading: "From Idea to Production in 5 Weeks",
        steps: [
          { title: "Discovery", desc: "We understand your problem and define the solution" },
          { title: "Design", desc: "Architecture and interface prototyping" },
          { title: "Development", desc: "Build with weekly deliveries" },
          { title: "Implementation", desc: "Deployment and training" },
          { title: "Support", desc: "Maintenance and system evolution" },
        ],
      },
      results: {
        eyebrow: "Tangible Results",
        heading: "Efficiency and Growth from Day One",
        stats: [
          { value: "+60%", label: "Operational efficiency" },
          { value: "–95%", label: "Manual errors eliminated" },
          { value: "4×", label: "Average client ROI" },
        ],
        socialProofTitle: "Social Proof",
        socialProofBody: "150+ applications developed with 98% satisfaction",
        testimonials: [
          { company: "LogisticsCorp", quote: "\"We automated 80% of our processes, ROI was visible in 2 months\"" },
          { company: "RetailTech", quote: "\"Our new e-commerce increased sales 45% in the first quarter\"" },
          { company: "FinancePro", quote: "\"The reporting system saves us 20 manual work hours a week\"" },
        ],
      },
      cta: {
        eyebrow: "Start Your Digital Transformation",
        heading: "Ready to Build the Solution Your Business Needs?",
        body: "Request your personalised development proposal. We analyse your requirements and deliver a concrete solution with no commitment.",
        badge: "PROPOSAL IN 24H",
        badgeBody: "Free analysis + initial architecture + detailed budget",
        ctaBtn: "Request your proposal now",
        microcopy: "No cost • No commitment • Experts assigned immediately",
      },
    },

    footprint: {
      eyebrow: "03 — Where We Operate",
      heading: "Close to your business, wherever it is.",
      body: "We operate across five key markets — Madrid, Paris, Miami, Dubai and Cairo — so whether you're expanding into Europe, MENA or America, there's always an Evolvix team nearby.",
    },

    board: {
      eyebrow: "04 — Why Companies Choose Us",
      headingLine1: "We've already solved",
      headingLine2: "what you're facing.",
      body: "Our team has fixed operational bottlenecks, delivered international trade cycles and shipped projects across Europe, the Middle East and America. You get senior people who've done the exact work before — not juniors learning on your dime.",
      cta: "Talk to the Team →",
    },

    // Investment Thesis
    thesis: {
      eyebrow: "04 — Competitive Advantage",
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
      eyebrow: "05 — The Services in Detail",
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
      eyebrow: "02 — The Exponential Factor",
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
        Miami: { hours: "EST · 09:00–18:00", focus: ["America Expansion", "LatAm Trade", "Capital Management"], coords: "25.7617° N · 80.1918° W" },
        Cairo: { hours: "GMT+2 · 09:00–18:00", focus: ["African Logistics", "MENA Connectivity", "Energy Infrastructure"], coords: "30.0444° N · 31.2357° E" },
        Dubai: { hours: "GMT+4 · 08:00–20:00", focus: ["MENA Expansion", "Emerging Markets", "Logistics Hub"], coords: "25.2048° N · 55.2708° E" },
        Singapore: { hours: "GMT+8 · 09:00–21:00", focus: ["APAC Tech", "Innovation Division", "AI & Automation"], coords: "1.3521° N · 103.8198° E" },
      },
    },

    boardPage: {
      sectionEyebrow: "Section · Leadership",
      headingLine1: "Visionary minds.",
      headingLine2: "Relentless execution.",
      body: "The Evolvix Global board brings together a senior team of strategists, engineers and capital allocators with proven track records across Europe, the Middle East and America. Each member operates at the intersection of institutional experience and entrepreneurial drive.",
      members: [
        { name: "Evolvix Global — Executive Board", role: "Group Leadership", bio: "Evolvix Global is a diversified Spanish business group whose pillars are Excellence, Boldness, Legacy and Execution. The board directs capital, operations and expansion across all four divisions." },
        { name: "Division Principals", role: "Operational Leadership", bio: "Each Evolvix division is led by a dedicated principal with deep sector expertise: energy concessions & grid infrastructure, high-complexity engineering, institutional BPO operations, and real-estate asset management." },
        { name: "Strategic Advisors", role: "International Advisory Council", bio: "An international advisory council supports the group across key jurisdictions — Spain/EU for legal & funding access, Dubai/MENA for capital formation, and Miami for American market connectivity." },
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

    talentPage: {
      sectionEyebrow: "Section · Talent Management",
      heading: "Join a high-performance global team.",
      body: "We select professionals with elite standards in execution, strategic mindset, and international ambition. If you want to build category-defining projects with world-class teams, this is your place.",
      accessLabel: "Professional Application",
      accessHeading: "Tell us about your profile.",
      accessBody: "Complete your details and attach your CV in PDF. Our Talent team reviews every application with rigorous standards and clear response timelines.",
      cvHint: "Accepted format: PDF only · Maximum size: 8MB",
      microcopy: "Confidential process • Professional evaluation • Response within 7 business days",
      success: "Application received successfully. Our Talent team will contact you if your profile matches current opportunities.",
      error: "We couldn't submit your application. Please try again.",
      fields: {
        name: "First name",
        namePlaceholder: "e.g. Maria",
        lastName: "Last name",
        lastNamePlaceholder: "e.g. Gonzalez",
        email: "Email address",
        emailPlaceholder: "maria@email.com",
        phone: "Phone number",
        phonePlaceholder: "e.g. +34 600 000 000",
        position: "Area or role of interest",
        positionPlaceholder: "e.g. AI Engineer · Project Manager",
        linkedin: "LinkedIn profile (optional)",
        linkedinPlaceholder: "https://linkedin.com/in/yourprofile",
        message: "Professional summary",
        messagePlaceholder: "Share your background, achievements and why you want to join Evolvix.",
        cv: "CV (PDF)",
        submit: "Submit application",
      },
    },

    services: {
      keyCapabilities: "Key Capabilities",
      backToHoldings: "← Back to Holdings",
      energy: {
        metaTitle: "Energy Division — Evolvix Global",
        metaDesc: "Renewable and conventional energy assets, long-term concessions and grid infrastructure across emerging and developed markets.",
        extraParagraph: "We guarantee the energy sovereignty of our clients through intelligent management of resources and the commercialization of high-yield assets. Operating across the MENA Axis (Dubai / Egypt) and the European Axis (Madrid / Paris) — the world's fastest-growing markets for constructive and financial capital.",
        capabilitiesHeading: "Sector with stable and recurring cash flow.",
        pillars: [
          { label: "Long-term Concessions", detail: "Secured energy concessions in key markets providing stable and recurring cash flow independent of short-term price volatility." },
          { label: "Grid Infrastructure", detail: "Design, financing and operation of transmission and distribution infrastructure across the MENA and European corridors." },
          { label: "Energy Trading", detail: "Active commercialization of energy assets through institutional-grade trading desks. We guarantee our clients' energy sovereignty." },
          { label: "Renewable Assets", detail: "Hybrid renewable portfolios (wind and solar) developed in Egypt, Spain and the UAE — markets with the highest growth in constructive and financial capital." },
        ]
      },
      engineering: {
        metaTitle: "Engineering & Infrastructure — Evolvix Global",
        metaDesc: "High-complexity technical projects, industrial architecture and project direction for governmental and private clients.",
        extraParagraph: "Integral engineering solutions that fuse technical vanguard with operational efficiency. The technical arm of Evolvix Global — trusted for consulting and high-level architecture on governmental and private projects across four continents.",
        capabilitiesHeading: "Technical excellence at any scale.",
        pillars: [
          { label: "High-Complexity Technical Projects", detail: "We design and execute projects of the highest technical complexity — from industrial architecture to the management of large-scale construction works." },
          { label: "Governmental & Private Mandates", detail: "Trusted technical arm for governmental infrastructure programs and flagship private sector developments in Spain, MENA and America." },
          { label: "Integral Engineering Solutions", detail: "End-to-end engineering services merging technical vanguard with operational efficiency — from concept to commissioning." },
          { label: "Industrial Asset Management", detail: "Technical direction of mission-critical industrial assets: logistics parks, data centers, transport corridors and heavy infrastructure." },
        ]
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
          { label: "Alternative Investment Vehicles", detail: "Structured alternative vehicles for co-investment alongside institutional partners — aligned with the group's geographic triangle: Europe, MENA, and America." },
        ]
      }
    },
  },

  es: {
    nav: {
      services: "Divisiones",
      footprint: "Presencia",
      board: "Nuestro Equipo",
      talent: "Talento",
      contact: "Contacto",
    },
    partnerAccess: "Contáctanos",

    hero: {
      eyebrow: "Evolvix Global — Servicios Empresariales B2B",
      liveLabel: "En vivo · Activos en 5 Mercados",
      headingLine1: "Transformamos operaciones",
      headingLine2: "en crecimiento medible.",
      headingOf: "",
      subtitle: "Transformamos operaciones en crecimiento medible",
      bullets: [
        "Consultoría estratégica para optimizar tu modelo de negocio",
        "Desarrollo tecnológico a medida de tus procesos",
        "Automatización que reduce costos y aumenta eficiencia",
      ],
      body: "Consultoría estratégica, desarrollo tecnológico y automatización de procesos para empresas que buscan resultados reales. Aumentamos tus ventas, reducimos costos y optimizamos operaciones — sin contratar múltiples agencias.",
      ctaPrimary: "Agenda tu auditoría gratuita",
      ctaSecondary: "Ver casos de éxito",
      ctaMicrocopy: "Respuesta garantizada en 24h · Sin compromiso · Resultados desde el primer mes",
      ctaWhatsApp: "Habla ahora por WhatsApp",
    },

    problem: {
      eyebrow: "01 — Señales de Alerta en tu Negocio",
      heading: "¿Tu empresa está dejando dinero en la mesa por ineficiencias?",
      body: "El 87% de las empresas pierden hasta 40% de sus ingresos anuales por procesos ineficientes, decisiones basadas en intuición y sistemas obsoletos. Estos problemas no solo costan dinero, sino que frenan tu crecimiento y te hacen perder frente a la competencia.",
      painPoints: [
        "Procesos manuales que consumen 20+ horas semanales de tu equipo",
        "Decisiones importantes basadas en 'corazonadas' sin datos reales",
        "Sistemas anticuados que generan errores y retrasan entregas",
        "Costos operativos innecesarios que impactan directamente tu margen",
        "Competidores que crecen 3x más rápido por usar tecnología"
      ],
      urgency: "Cada día de espera te cuesta oportunidades y clientes",
      cta: "Calcula tu pérdida potencial ahora",
    },

    solution: {
      eyebrow: "02 — Nuestra Solución Probada",
      heading: "Transformamos operaciones en crecimiento medible",
      body: "Metodología validada con 200+ empresas que garantiza resultados en 90 días. Optimizamos procesos, automatizamos tareas repetitivas e implementamos dashboards para decisiones basadas en datos — sin interrumpir tu operación actual.",
      benefits: [
        "Reducción garantizada de costos operativos 30-40%",
        "Aumento de productividad 50-70% en el primer trimestre",
        "Decisiones estratégicas basadas en datos en tiempo real",
        "Crecimiento de ingresos 20-35% en 6 meses",
        "Equipo dedicado con experiencia en tu industria"
      ],
      guarantee: "Resultados visibles desde el primer mes o no pagas",
      cta: "Solicitar propuesta personalizada",
    },

    howItWorks: {
      eyebrow: "03 — Nuestra Metodología",
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
      eyebrow: "04 — Resultados Verificados",
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
      eyebrow: "05 — Oferta Limitada",
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
      eyebrow: "02 — Paquetes de Servicios",
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

    // --- Micro-copy de UI compartida ---
    ui: {
      painBoxTitle: "Señales de alerta en tu negocio:",
      seeMore: "Ver detalles",
      seeLess: "Ver menos",
      mostPopular: "MÁS POPULAR",
      problemSolvedLabel: "Problema que resuelve:",
      includesLabel: "Incluye:",
      expectedResultLabel: "Resultado esperado:",
      durationLabel: "Duración:",
      normalPriceLabel: "Normal:",
      solutionBenefitDetails: [
        "Automatizamos procesos manuales, implementamos sistemas de gestión y optimizamos flujos de trabajo para reducir gastos operativos en un 30-40%.",
        "Implementamos herramientas colaborativas, eliminamos tareas redundantes y capacitamos a tu equipo para aumentar la productividad entre 50-70%.",
        "Creamos dashboards en tiempo real, implementamos KPIs clave y establecemos sistemas de reporting para decisiones basadas 100% en datos.",
        "Desarrollamos estrategias de crecimiento, optimizamos canales de venta y mejoramos la retención de clientes para un crecimiento sostenible de 20-35%.",
        "Asignamos un equipo senior con experiencia en tu industria, disponible 24/7 para resolver desafíos específicos de tu sector.",
      ],
    },

    automationPage: {
      eyebrow: "Servicio · Automatización de Procesos",
      heading: "Automatización que libera 20+ horas semanales a tu equipo",
      body: "Deja que la tecnología haga el trabajo repetitivo. Tu equipo enfocado en lo que realmente genera valor.",
      ctaPrimary: "Calcula tu potencial de ahorro",
      ctaSecondary: "Habla con un experto",
      microcopy: "Análisis gratuito • Resultados en 60 días • Sin compromiso",
      problem: {
        eyebrow: "¿Tu equipo pierde tiempo en tareas repetitivas?",
        heading: "El Costo Oculto del Trabajo Manual",
        body: "Tu equipo pierde horas valiosas en tareas manuales, repetitivas y propensas a errores. Procesos que dependen de una persona y se detienen si falta. Costos operativos elevados por ineficiencia.",
        boxTitle: "Señales de que necesitas automatización:",
        points: [
          "Tu equipo pasa 20+ horas semanales en tareas repetitivas",
          "Errores constantes por intervención humana",
          "Procesos que se detienen si una persona falta",
          "Costos operativos creciendo más que tus ingresos",
        ],
        cta: "Descubre nuestra solución",
      },
      solution: {
        eyebrow: "Automatización Inteligente",
        heading: "Tecnología que Trabaja por Ti 24/7",
        body: "Automatización inteligente de procesos que elimina el trabajo manual, reduce errores y libera a tu equipo para enfocarse en crecimiento y estrategia.",
        boxTitle: "¿Qué incluye nuestra automatización?",
        items: [
          "Mapeo y análisis de procesos actuales",
          "Identificación de oportunidades de automatización",
          "Implementación de herramientas y flujos automatizados",
          "Integración con sistemas existentes",
          "Capacitación y gestión del cambio",
          "Monitoreo y optimización continua",
        ],
      },
      process: {
        eyebrow: "Implementación Rápida y Segura",
        heading: "Automatización en 5 Semanas con Resultados Visibles",
        steps: [
          { title: "Auditoría", desc: "Mapeo de procesos y cálculo de impacto potencial" },
          { title: "Diseño", desc: "Arquitectura de automatización y selección de herramientas" },
          { title: "Implementación", desc: "Configuración y despliegue de automatizaciones" },
          { title: "Capacitación", desc: "Formación del equipo y gestión del cambio" },
          { title: "Optimización", desc: "Mejora y expansión de automatizaciones" },
        ],
      },
      results: {
        eyebrow: "Resultados Inmediatos",
        heading: "Eficiencia que se Traduce en Dinero",
        stats: [
          { value: "60-80%", label: "Reducción de tiempo manual" },
          { value: "-95%", label: "Errores eliminados" },
          { value: "30-40%", label: "Ahorro de costos" },
        ],
        socialProofTitle: "Prueba Social",
        socialProofBody: "300+ procesos automatizados con ROI visible en 60 días",
        testimonials: [
          { company: "FinanceCorp", quote: "\"Automatizamos contabilidad, ahorramos 25 horas semanales y eliminamos errores 100%\"" },
          { company: "LogisticsPro", quote: "\"Nuestro sistema de tracking redujo costos operativos 35% en el primer mes\"" },
          { company: "ServiceMax", quote: "\"La automatización de atención al cliente mejoró satisfacción 40%\"" },
        ],
      },
      cta: {
        eyebrow: "Calcula tu Potencial de Ahorro",
        heading: "¿Cuánto Podría tu Empresa Ahorrar con Automatización?",
        body: "Descubre tu potencial de ahorro con nuestro análisis gratuito. Sin compromiso y resultados en 24 horas.",
        badge: "ANÁLISIS GRATIS",
        badgeBody: "Calculadora de ahorro + roadmap de automatización",
        ctaBtn: "Calcular mi potencial de ahorro",
        microcopy: "Respuesta en 24h • Sin compromiso • Análisis personalizado",
      },
    },

    consultingPage: {
      eyebrow: "Servicio · Consultoría Estratégica",
      heading: "Consultoría Estratégica que Transforma tu Negocio en Resultados Medibles",
      body: "Dejamos de hablar y empezamos a ejecutar. Estrategia clara + implementación garantizada = crecimiento real.",
      ctaPrimary: "Agenda tu auditoría estratégica gratuita",
      ctaSecondary: "Habla con un experto",
      microcopy: "Respuesta garantizada en 24h • Sin compromiso • Valor €2,990",
      problem: {
        eyebrow: "¿Tu empresa está estancada?",
        heading: "El Costo de No Tener una Dirección Clara",
        body: "Tu empresa tiene potencial pero no sabes cómo canalizarlo. Decisiones basadas en corazonadas, procesos ineficientes y crecimiento limitado por falta de dirección clara.",
        boxTitle: "Señales de que necesitas consultoría estratégica:",
        points: [
          "Crecimiento inferior al 15% anual sin causa clara",
          "Decisiones importantes tomadas sin datos concretos",
          "Equipos trabajando en silos sin objetivos comunes",
          "Competencia avanzando más rápido que tú",
        ],
        cta: "Descubre nuestra solución",
      },
      solution: {
        eyebrow: "Nuestra Metodología Probada",
        heading: "Estrategia que se Ejecuta, no solo se Presenta",
        body: "Metodología probada que combina análisis profundo de tu negocio con estrategia ejecutable. No solo te decimos qué hacer, te acompañamos en cada paso del proceso.",
        boxTitle: "¿Qué incluye nuestra consultoría?",
        items: [
          "Auditoría completa 360° de tu modelo de negocio",
          "Mapa de oportunidades con impacto € calculado",
          "Hoja de ruta estratégica personalizada (90 días)",
          "KPIs y métricas de seguimiento en tiempo real",
          "Sesiones de ejecución semanal con especialistas",
        ],
      },
      process: {
        eyebrow: "Proceso Claro y Medible",
        heading: "Transformación en 5 Pasos Concretos",
        steps: [
          { title: "Diagnóstico", desc: "Análisis completo de tu operación, mercado y competencia" },
          { title: "Estrategia", desc: "Diseño de roadmap con objetivos claros y timeline definido" },
          { title: "Implementación", desc: "Ejecución gradual con seguimiento diario" },
          { title: "Optimización", desc: "Ajustes basados en resultados y KPIs" },
          { title: "Escalación", desc: "Expansión a otras áreas del negocio" },
        ],
      },
      results: {
        eyebrow: "Resultados Comprobados",
        heading: "Crecimiento Medible y Sostenible",
        stats: [
          { value: "25-40%", label: "Crecimiento de ingresos en 6 meses" },
          { value: "20-30%", label: "Reducción de costos operativos" },
          { value: "3.2x", label: "ROI promedio en primer año" },
        ],
        socialProofTitle: "Prueba Social",
        socialProofBody: "200+ empresas han transformado su modelo de negocio con nosotros",
        testimonials: [
          { company: "TechCorp", quote: "\"Crecimos 35% en 6 meses, el ROI fue visible desde el mes 2\"" },
          { company: "ManufacturaPro", quote: "\"Redujimos costos 28% y duplicamos nuestra eficiencia operativa\"" },
          { company: "RetailMax", quote: "\"La claridad estratégica nos permitió expandir a 3 nuevos mercados\"" },
        ],
      },
      cta: {
        eyebrow: "Comienza tu Transformación",
        heading: "¿Listo para Dejar de Estancarte y Empezar a Crecer?",
        body: "Agenda tu auditoría estratégica gratuita. Analizamos tu situación y te damos un plan de acción sin compromiso.",
        badge: "GRATIS",
        badgeSub: "Valor normal: €2,990",
        badgeBody: "Auditoría estratégica completa + plan de acción",
        ctaBtn: "Agenda tu auditoría gratuita ahora",
        microcopy: "Plazas limitadas: 5 auditorías gratis este mes",
      },
    },

    techPage: {
      eyebrow: "Servicio · Desarrollo Tecnológico",
      heading: "Desarrollo Tecnológico que Resuelve Problemas Reales, no Crea Complicaciones",
      body: "Software construido para tu negocio, no al revés. Soluciones que funcionan desde el día uno.",
      ctaPrimary: "Solicita propuesta de desarrollo",
      ctaSecondary: "Habla con un desarrollador",
      microcopy: "Respuesta garantizada en 24h • Sin compromiso • Análisis gratuito",
      problem: {
        eyebrow: "¿La tecnología te frena en lugar de ayudarte?",
        heading: "El Costo de Usar Software que no se Adapta a Ti",
        body: "Software genérico que no se adapta a tus procesos, sistemas desintegrados que hablan idiomas diferentes, y desarrollo que nunca termina o no funciona como esperabas.",
        boxTitle: "Señales de que necesitas desarrollo a medida:",
        points: [
          "Tu equipo pierde horas en procesos manuales repetitivos",
          "Sistemas que no se comunican entre sí",
          "Errores constantes por intervención humana",
          "No puedes escalar porque los procesos dependen de personas",
        ],
        cta: "Descubre nuestra solución",
      },
      solution: {
        eyebrow: "Desarrollo Ágil y Centrado en Resultados",
        heading: "Software que se Integra Perfectamente con tu Negocio",
        body: "Desarrollo ágil de soluciones tecnológicas a medida que se integran perfectamente con tu operación actual. Desde análisis hasta implementación y soporte continuo.",
        boxTitle: "¿Qué incluye nuestro desarrollo?",
        items: [
          "Análisis de requisitos y diseño de arquitectura",
          "Desarrollo de software personalizado (web, móvil, desktop)",
          "Integración con sistemas existentes",
          "Testing exhaustivo y control de calidad",
          "Capacitación de tu equipo y documentación completa",
          "Soporte técnico 24/7 durante primeros 3 meses",
        ],
      },
      process: {
        eyebrow: "Proceso de Desarrollo Transparente",
        heading: "De la Idea a la Producción en 5 Semanas",
        steps: [
          { title: "Descubrimiento", desc: "Entendemos tu problema y definimos solución" },
          { title: "Diseño", desc: "Arquitectura y prototipado de interfaces" },
          { title: "Desarrollo", desc: "Construcción con entregas semanales" },
          { title: "Implementación", desc: "Despliegue y capacitación" },
          { title: "Soporte", desc: "Mantenimiento y evolución del sistema" },
        ],
      },
      results: {
        eyebrow: "Resultados Tangibles",
        heading: "Eficiencia y Crecimiento desde el Día Uno",
        stats: [
          { value: "+60%", label: "Eficiencia operativa" },
          { value: "-95%", label: "Errores manuales eliminados" },
          { value: "4x", label: "ROI promedio en clientes" },
        ],
        socialProofTitle: "Prueba Social",
        socialProofBody: "150+ aplicaciones desarrolladas con 98% de satisfacción",
        testimonials: [
          { company: "LogisticsCorp", quote: "\"Automatizamos 80% de nuestros procesos, el ROI fue visible en 2 meses\"" },
          { company: "RetailTech", quote: "\"Nuestro nuevo e-commerce incrementó ventas 45% en el primer trimestre\"" },
          { company: "FinancePro", quote: "\"El sistema de reporting nos ahorra 20 horas semanales de trabajo manual\"" },
        ],
      },
      cta: {
        eyebrow: "Comienza tu Transformación Digital",
        heading: "¿Listo para Construir la Solución que tu Negocio Necesita?",
        body: "Solicita tu propuesta de desarrollo personalizada. Analizamos tus requisitos y te entregamos una solución concreta sin compromiso.",
        badge: "PROPUESTA EN 24H",
        badgeBody: "Análisis gratuito + arquitectura inicial + presupuesto detallado",
        ctaBtn: "Solicita tu propuesta ahora",
        microcopy: "Sin costo • Sin compromiso • Expertos asignados inmediatamente",
      },
    },

    units: {
      eyebrow: "02 — Nuestros Servicios",
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
      eyebrow: "03 — Huella Global",
      heading: "Siete nodos. Un sistema.",
      body: "Una red geográficamente diversificada en cuatro continentes — Madrid, Londres, París, Miami, El Cairo, Dubái y Singapur — diseñada para sincronizar capital, logística e inteligencia en cualquier huso horario.",
    },

    thesis: {
      eyebrow: "04 — Ventaja Competitiva",
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
      eyebrow: "05 — Los Servicios en Detalle",
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
      eyebrow: "06 — Por Qué Trabajar con Nosotros",
      headingLine1: "Expertos senior.",
      headingLine2: "Ejecución probada.",
      body: "Nuestro equipo ha entregado proyectos en Europa, Oriente Medio y América. Aportamos experiencia institucional sin burocracia — tienes acceso directo a especialistas senior comprometidos con tus resultados.",
      cta: "Conoce al Equipo →",
    },

    exponential: {
      eyebrow: "02 — El Factor Exponencial",
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
      body: "El consejo directivo de Evolvix Global reúne a un equipo senior de estrategas, ingenieros y gestores de capital con trayectorias probadas en Europa, Oriente Medio y América. Cada miembro opera en la intersección entre la experiencia institucional y el impulso emprendedor.",
      members: [
        { name: "Evolvix Global — Consejo Ejecutivo", role: "Liderazgo del Grupo", bio: "Evolvix Global es un grupo empresarial español diversificado cuyos pilares son Excelencia, Audacia, Legado y Ejecución. El consejo dirige el capital, las operaciones y la expansión de las cuatro divisiones." },
        { name: "Directores de División", role: "Liderazgo Operacional", bio: "Cada división de Evolvix está liderada por un director con profunda especialización sectorial: concesiones energéticas e infraestructura de red, ingeniería de alta complejidad, operaciones BPO institucionales y gestión de activos inmobiliarios." },
        { name: "Consejeros Estratégicos", role: "Consejo Asesor Internacional", bio: "Un consejo asesor internacional apoya al grupo en jurisdicciones clave — España/UE para acceso jurídico y fondos, Dubái/MENA para captación de capital, y Miami para conectividad con el mercado americano." },
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

    talentPage: {
      sectionEyebrow: "Sección · Gestión de Talento",
      heading: "Únete a un equipo global de alto rendimiento.",
      body: "Seleccionamos profesionales con estándares de excelencia en ejecución, visión estratégica y ambición internacional. Si buscas construir proyectos que marcan mercado junto a equipos de clase mundial, este es tu lugar.",
      accessLabel: "Postulación Profesional",
      accessHeading: "Cuéntanos tu perfil.",
      accessBody: "Completa tus datos y adjunta tu CV en PDF. Nuestro equipo de Talento evalúa cada postulación con criterio riguroso y tiempos de respuesta claros.",
      cvHint: "Formato admitido: solo PDF · Tamaño máximo: 8MB",
      microcopy: "Proceso confidencial • Evaluación profesional • Respuesta en un máximo de 7 días hábiles",
      success: "Postulación recibida con éxito. Nuestro equipo de Talento te contactará si tu perfil encaja con las oportunidades activas.",
      error: "No pudimos enviar tu postulación. Inténtalo nuevamente.",
      fields: {
        name: "Nombre",
        namePlaceholder: "Ej. María",
        lastName: "Apellido",
        lastNamePlaceholder: "Ej. González",
        email: "Correo electrónico",
        emailPlaceholder: "maria@email.com",
        phone: "Teléfono",
        phonePlaceholder: "Ej. +34 600 000 000",
        position: "Área o cargo de interés",
        positionPlaceholder: "Ej. Ingeniero/a IA · Project Manager",
        linkedin: "Perfil de LinkedIn (opcional)",
        linkedinPlaceholder: "https://linkedin.com/in/tuperfil",
        message: "Resumen profesional",
        messagePlaceholder: "Comparte tu experiencia, logros y por qué quieres unirte a Evolvix.",
        cv: "CV (PDF)",
        submit: "Enviar postulación",
      },
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
          { label: "Mandatos Gubernamentales y Privados", detail: "Brazo técnico de confianza para programas de infraestructura gubernamentales y desarrollos emblemáticos del sector privado en España, MENA y América." },
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
          { label: "Vehículos de Inversión Alternativos", detail: "Vehículos alternativos estructurados para co-inversión junto a socios institucionales — alineados con el triángulo geográfico del grupo: Europa, MENA y América." },
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
  const [lang, setLang] = useState<Lang>("es");
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
