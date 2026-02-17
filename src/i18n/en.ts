import type { Translations } from "./types";

export const en = {
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Process", href: "#process" },
      { label: "Stack", href: "#stack" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Free 45-Min Consultation",
  },
  hero: {
    badge: "Next-Generation Commerce Platform",
    titleStart: "Commerce Platforms ",
    titleHighlight: "Beyond Traditional Stores",
    description:
      "Open Mercato provides a modular foundation that combines CRM, ERP, automation, and AI-ready architecture \u2014 so you can build deeply customized commerce ecosystems without starting from scratch.",
    ctaPrimary: "Schedule a Free 45-Min Consultation",
    ctaSecondary: "Explore Services",
    stats: [
      { value: "80%", label: "Infrastructure Ready" },
      { value: "10x", label: "Faster Time-to-Market" },
      { value: "0", label: "Vendor Lock-In" },
      { value: "24/7", label: "Support & Monitoring" },
    ],
  },
  services: {
    label: "What We Do",
    titleStart: "Commerce Platform ",
    titleHighlight: "Capabilities",
    description:
      "From B2B ordering portals to AI-driven pricing \u2014 Open Mercato delivers the modular foundation for commerce systems that go far beyond a storefront.",
    items: [
      {
        title: "B2B Commerce Platforms",
        description:
          "Partner ordering portals, contract-based pricing, account hierarchies, negotiated offers, and approval workflows \u2014 built for complex B2B ecosystems.",
      },
      {
        title: "CPQ-Driven Sales",
        description:
          "Dynamic pricing engines, rule-based discounting, complex product configurations, and automated quote generation for industries where every order is unique.",
      },
      {
        title: "Unified Commerce + CRM + ERP",
        description:
          "Merge commerce with internal business systems \u2014 customer lifecycle, order orchestration, invoicing, support, and contract management in one platform.",
      },
      {
        title: "Self-Service Portals",
        description:
          "Customer dashboards, partner deal registration, subscription management, and service ticket workflows that transform commerce into a relationship platform.",
      },
      {
        title: "Multi-Tenant SaaS Commerce",
        description:
          "Built-in multi-tenancy for marketplace platforms, vendor ecosystems, multi-brand solutions, and white-label SaaS commerce products.",
      },
      {
        title: "Headless & Composable Architecture",
        description:
          "API-first design enabling headless storefronts, mobile commerce apps, custom UX for internal teams, and seamless marketplace integrations.",
      },
    ],
  },
  capabilities: {
    label: "Why Open Mercato",
    titleStart: "The Unfair ",
    titleHighlight: "Advantage",
    description:
      'An "80% ready" enterprise foundation \u2014 identity management, workflows, permissions, multi-tenancy, and automation built in, so your team focuses on differentiated commerce logic.',
    items: [
      {
        title: "Workflow-Driven Commerce",
        description:
          "Event-driven architecture enabling automated order approvals, pricing recalculation, customer onboarding, and dynamic product availability \u2014 deep orchestration beyond basic triggers.",
      },
      {
        title: "AI-Assisted Experiences",
        description:
          "Structured for AI integration \u2014 intelligent product recommendations, conversational ordering assistants, automated quoting, AI-driven pricing optimization, and agent-powered workflows.",
      },
      {
        title: "Enterprise Security & Governance",
        description:
          "Role-based access control, organizational hierarchies, tenant-level encryption, audit logging, and secure API layers for finance, healthcare, and regulated B2B sectors.",
      },
      {
        title: "Developer Speed & Extensibility",
        description:
          "Pre-built enterprise scaffolding, dynamic entities and forms, modern TypeScript architecture, and upgrade-safe extensions \u2014 full code ownership with zero vendor lock-in.",
      },
    ],
  },
  process: {
    label: "Our Process",
    titleStart: "From Vision to ",
    titleHighlight: "Production",
    description:
      "A battle-tested delivery methodology that turns complex commerce requirements into production-ready platforms.",
    stepPrefix: "Step",
    items: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We audit your existing commerce stack, map business workflows, and identify where Open Mercato\u2019s modular foundation replaces months of custom infrastructure work.",
      },
      {
        step: "02",
        title: "Platform Architecture",
        description:
          "Our architects design your commerce ecosystem \u2014 selecting the right modules, defining multi-tenant structures, pricing logic, and integration points.",
      },
      {
        step: "03",
        title: "Agile Build & Integration",
        description:
          "We build iteratively in 2-week sprints, leveraging Open Mercato\u2019s pre-built scaffolding so teams focus on differentiated commerce logic from day one.",
      },
      {
        step: "04",
        title: "Testing & Migration",
        description:
          "Rigorous QA, performance testing, security audits, and zero-downtime data migration \u2014 ensuring compliance for regulated industries.",
      },
      {
        step: "05",
        title: "Launch & Evolve",
        description:
          "We deploy, monitor, and continuously evolve your platform \u2014 with upgrade-safe extensions that keep your system future-ready without vendor lock-in.",
      },
    ],
  },
  techStack: {
    label: "Technology Stack",
    titleStart: "We Speak ",
    titleHighlight: "Your Stack",
    description:
      "Platform-agnostic expertise across the modern commerce and enterprise ecosystem \u2014 built on a TypeScript-first foundation.",
    categories: [
      {
        label: "Platforms",
        items: [
          "Salesforce",
          "SAP",
          "Microsoft Dynamics",
          "Odoo",
          "HubSpot",
          "NetSuite",
        ],
      },
      {
        label: "Ecommerce",
        items: [
          "Shopify Plus",
          "Magento / Adobe Commerce",
          "WooCommerce",
          "BigCommerce",
          "Medusa",
          "Saleor",
        ],
      },
      {
        label: "Backend",
        items: ["Node.js", "Python", "Java / Spring", ".NET", "Go", "PostgreSQL"],
      },
      {
        label: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vue.js",
          "Angular",
        ],
      },
      {
        label: "Infra",
        items: [
          "AWS",
          "Google Cloud",
          "Azure",
          "Docker",
          "Kubernetes",
          "Terraform",
        ],
      },
    ],
  },
  team: {
    label: "Our Team",
    titleStart: "The People Behind ",
    titleHighlight: "Open Mercato",
    description:
      "A senior team of engineers and builders with decades of combined experience delivering enterprise software.",
    members: [
      {
        name: "Piotr Chabros",
        role: "Fullstack Developer & Entrepreneur",
        initials: "PC",
        description:
          "Fullstack developer and an entrepreneur with 15+ years of IT experience. Drives the company vision and technical strategy.",
      },
      {
        name: "Jacek Tomaszewski",
        role: "Fullstack TypeScript Developer",
        initials: "JT",
        description:
          "Fullstack TypeScript developer and a software house owner with 15+ years of IT experience. Brings deep engineering expertise and leadership.",
      },
      {
        name: "Robert Zapala",
        role: "Fullstack Developer",
        initials: "RZ",
        description:
          "Fullstack developer with over 10 years of IT experience. Has worked with recognizable international brands delivering enterprise-grade solutions.",
      },
      {
        name: "Kamil Rogaczewski",
        role: "AI Prompt Engineer",
        initials: "KR",
        description:
          "Framework-agnostic mid AI prompt engineer, passionate about AI-driven development and working on innovative private projects.",
      },
    ],
  },
  contact: {
    label: "Get in Touch",
    titleStart: "Ready to Build Your ",
    titleHighlight: "Commerce Platform?",
    description:
      "Let\u2019s discuss how Open Mercato\u2019s modular foundation can accelerate your B2B commerce, unify your operations, and eliminate vendor lock-in.",
    benefits: [
      {
        title: "Platform Assessment",
        desc: "45-minute deep dive into your commerce architecture and opportunities",
      },
      {
        title: "Custom Roadmap",
        desc: "Module selection, integration strategy, and phased delivery plan",
      },
      {
        title: "Rapid Launch",
        desc: "From kickoff to first milestone in just 2 weeks with 80% pre-built",
      },
    ],
    ctaPrimary: "Schedule a Free 45-Min Consultation",
    emailPrefix: "Or email us directly at",
  },
  contactForm: {
    nameLabel: "Full Name",
    namePlaceholder: "John Doe",
    emailLabel: "Work Email",
    emailPlaceholder: "john@company.com",
    companyLabel: "Company",
    companyOptional: "(optional)",
    companyPlaceholder: "Acme Inc.",
    messageLabel: "How can we help?",
    messagePlaceholder: "Tell us about your project, goals, or challenges...",
    submit: "Send Message",
    sending: "Sending...",
    sentTitle: "Message Sent",
    sentDescription:
      "Thanks for reaching out. We\u2019ll get back to you within 24 hours.",
    errorTitle: "Something went wrong",
    errorDescription:
      "Please try again or email us directly at hello@tryopenmercato.com",
    tryAgain: "Try Again",
  },
  footer: {
    tagline: "Next-Generation Commerce Platforms for Enterprise",
    companyTitle: "Company",
    addressTitle: "Address",
    phoneTitle: "Phone",
    emailTitle: "Email",
    openSourceNote:
      "This website is based on the open-source code available at GitHub.",
    copyright: "Bespokesoft Piotr Chabros. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    backToHome: "\u2190 Back to Home",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 11, 2026",
    intro: 'Bespokesoft Piotr Chabros ("we", "us", "our"), operating under the Open Mercato brand, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website or use our services, in accordance with the General Data Protection Regulation (GDPR) and applicable Polish law.',
    sections: [
      {
        title: "1. Data Controller",
        content:
          "The controller of your personal data is Bespokesoft Piotr Chabros, with its registered office at Pastewna 27b, 02-954 Warszawa, Poland (NIP: PL7010510120). You can contact us at hello@tryopenmercato.com or +48 667 582 525.",
      },
      {
        title: "2. Data We Collect",
        items: [
          "Contact information \u2014 name, email address, phone number, and company name provided through our contact form or direct communication.",
          "Technical data \u2014 IP address, browser type, operating system, and browsing behavior collected automatically when you visit our website.",
          "Communication data \u2014 records of correspondence when you contact us via email, phone, or our contact form.",
          "Cookies \u2014 small data files stored on your device to improve your browsing experience. See Section 8 for details.",
        ],
      },
      {
        title: "3. How We Use Your Data",
        items: [
          "To respond to your inquiries and provide requested information about our services.",
          "To deliver, maintain, and improve our CRM and ERP consulting and development services.",
          "To send you project updates and service-related communications.",
          "To comply with legal obligations and protect our legitimate interests.",
          "To analyze website usage and improve our online presence.",
        ],
      },
      {
        title: "4. Legal Basis for Processing (GDPR Art. 6)",
        items: [
          "Consent (Art. 6(1)(a)) \u2014 when you submit our contact form or subscribe to communications.",
          "Contract performance (Art. 6(1)(b)) \u2014 when processing is necessary to deliver services you have engaged us for.",
          "Legitimate interest (Art. 6(1)(f)) \u2014 for website analytics, fraud prevention, and improving our services.",
          "Legal obligation (Art. 6(1)(c)) \u2014 when we are required to retain data for tax or accounting purposes.",
        ],
      },
      {
        title: "5. Data Sharing",
        content:
          "We do not sell your personal data. We may share your data with trusted service providers who assist us in operating our website and delivering our services (e.g., hosting providers, email services), but only to the extent necessary and under appropriate data processing agreements. We may also disclose data when required by law or to protect our legal rights.",
      },
      {
        title: "6. International Transfers",
        content:
          "Your data may be transferred to and processed in countries outside the European Economic Area (EEA). In such cases, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, to protect your data in accordance with GDPR requirements.",
      },
      {
        title: "7. Data Retention",
        content:
          "We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by law. Contact form submissions are retained for up to 24 months after your last interaction. Project-related data is retained for the duration of the engagement plus 5 years for legal and accounting purposes.",
      },
      {
        title: "8. Cookies",
        content:
          "Our website uses essential cookies required for the site to function properly, as well as analytics cookies to understand how visitors interact with our website. You can manage your cookie preferences through your browser settings. Disabling essential cookies may affect website functionality.",
      },
      {
        title: "9. Your Rights",
        items: [
          "Right of access \u2014 obtain confirmation of whether we process your data and request a copy.",
          "Right to rectification \u2014 request correction of inaccurate or incomplete data.",
          "Right to erasure \u2014 request deletion of your data when it is no longer necessary.",
          "Right to restriction \u2014 request that we limit the processing of your data.",
          "Right to data portability \u2014 receive your data in a structured, machine-readable format.",
          "Right to object \u2014 object to processing based on legitimate interests or for direct marketing.",
          "Right to withdraw consent \u2014 withdraw consent at any time without affecting prior processing.",
        ],
        footer:
          "To exercise any of these rights, contact us at hello@tryopenmercato.com. We will respond within 30 days. You also have the right to lodge a complaint with the Polish supervisory authority (UODO \u2014 Urz\u0105d Ochrony Danych Osobowych).",
      },
      {
        title: "10. Changes to This Policy",
        content:
          'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.',
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: February 11, 2026",
    intro: "These Terms of Service govern your use of the Open Mercato website and the services provided by Bespokesoft Piotr Chabros. By accessing our website or engaging our services, you accept these terms in full. Please read them carefully before proceeding.",
    sections: [
      {
        title: "1. Definitions",
        items: [
          '"Company", "we", "us", "our" \u2014 Bespokesoft Piotr Chabros, with its registered office at Pastewna 27b, 02-954 Warszawa, Poland (NIP: PL7010510120), operating under the Open Mercato brand.',
          '"Client", "you", "your" \u2014 any natural person, legal entity, or organizational unit using our website or engaging our services.',
          '"Services" \u2014 CRM and ERP consulting, design, development, integration, and support services provided by the Company.',
          '"Website" \u2014 the website accessible at tryopenmercato.com and all its subdomains.',
          '"Agreement" \u2014 a contract for the provision of Services concluded between the Company and the Client.',
        ],
      },
      {
        title: "2. General Provisions",
        items: [
          "These Terms of Service govern the use of the Website and the provision of Services by the Company.",
          "By accessing the Website or engaging our Services, you agree to be bound by these Terms. If you do not agree, please do not use the Website or our Services.",
          "The Company reserves the right to modify these Terms at any time. Changes become effective upon publication on this page.",
        ],
      },
      {
        title: "3. Services",
        content:
          "The Company provides custom CRM and ERP consulting and development services tailored for ecommerce businesses. The specific scope, timeline, deliverables, and pricing of Services are defined in individual project agreements or statements of work entered into between the Company and the Client.",
        items: [
          "Service proposals and estimates are non-binding unless confirmed in a signed Agreement.",
          "The Company will perform Services with professional diligence and in accordance with industry best practices.",
          "Any modifications to the agreed scope of Services require written consent from both parties.",
        ],
      },
      {
        title: "4. Client Obligations",
        items: [
          "Provide accurate, complete, and timely information and materials necessary for the performance of Services.",
          "Designate a point of contact authorized to make decisions and provide approvals on behalf of the Client.",
          "Review and provide feedback on deliverables within the timeframes specified in the Agreement.",
          "Ensure that any materials provided to the Company do not infringe third-party intellectual property rights.",
          "Maintain the confidentiality of any access credentials provided during the course of the project.",
        ],
      },
      {
        title: "5. Intellectual Property",
        items: [
          "All intellectual property rights to deliverables created under an Agreement are transferred to the Client upon full payment, unless otherwise specified in the Agreement.",
          "The Company retains the right to use general knowledge, skills, experience, and non-proprietary techniques developed during the performance of Services.",
          "Pre-existing intellectual property of either party remains the property of that party.",
          "The Company may reference the project in its portfolio and marketing materials, unless the Client requests otherwise in writing.",
        ],
      },
      {
        title: "6. Confidentiality",
        content:
          "Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of cooperation. This obligation survives the termination of any Agreement for a period of 3 years.",
        items: [
          "Confidential information includes, but is not limited to, business plans, technical specifications, customer data, and financial terms.",
          "Confidential information does not include information that is publicly available, independently developed, or lawfully received from a third party.",
        ],
      },
      {
        title: "7. Payment Terms",
        items: [
          "Payment terms, including amounts, schedules, and methods, are specified in individual Agreements.",
          "Unless otherwise agreed, invoices are due within 14 days of issuance.",
          "Late payments may incur statutory interest as provided under Polish law.",
          "The Company reserves the right to suspend Services in case of overdue payments exceeding 30 days.",
        ],
      },
      {
        title: "8. Warranties and Liability",
        items: [
          "The Company warrants that Services will be performed with professional care and in accordance with the agreed specifications.",
          "The Company does not guarantee uninterrupted or error-free operation of delivered software. A 30-day warranty period for bug fixes applies to all deliverables unless otherwise agreed.",
          "The Company\u2019s total liability under any Agreement shall not exceed the total fees paid by the Client under that Agreement.",
          "The Company shall not be liable for indirect, incidental, or consequential damages, including lost profits or data loss.",
          'The Website is provided "as is" without warranties of any kind regarding availability, accuracy, or completeness of content.',
        ],
      },
      {
        title: "9. Termination",
        items: [
          "Either party may terminate an Agreement with 30 days\u2019 written notice, unless otherwise specified in the Agreement.",
          "The Company may terminate an Agreement immediately if the Client materially breaches these Terms or the Agreement and fails to remedy the breach within 14 days of written notice.",
          "Upon termination, the Client shall pay for all Services performed up to the date of termination.",
          "Provisions regarding confidentiality, intellectual property, and liability survive termination.",
        ],
      },
      {
        title: "10. Force Majeure",
        content:
          "Neither party shall be liable for failure or delay in performing its obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, war, pandemic, government actions, power failures, or internet outages. The affected party shall notify the other party promptly and make reasonable efforts to mitigate the impact.",
      },
      {
        title: "11. Governing Law and Disputes",
        content:
          "These Terms and any Agreements are governed by the laws of the Republic of Poland. Any disputes arising from or related to these Terms or Services shall be resolved by the competent court for the registered office of the Company in Warsaw, Poland. Before initiating legal proceedings, both parties agree to attempt amicable resolution of any dispute.",
      },
      {
        title: "12. Contact",
        content:
          "For any questions regarding these Terms of Service, please contact us at hello@tryopenmercato.com or +48 667 582 525, or write to us at Pastewna 27b, 02-954 Warszawa, Poland.",
      },
    ],
  },
} satisfies Translations;
