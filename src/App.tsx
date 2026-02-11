import { useState } from "react";

// ─── Icon Components ────────────────────────────────────────────────────────

function IconShoppingCart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

function IconCube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function IconChartBar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function IconCog() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconArrowPath() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.182-3.182" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function IconX() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Technologies", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: <IconUsers />,
    title: "Custom CRM Development",
    description:
      "Purpose-built customer relationship management systems designed for ecommerce workflows — from lead capture to post-purchase engagement and lifetime value optimization.",
  },
  {
    icon: <IconCube />,
    title: "ERP Implementation",
    description:
      "End-to-end enterprise resource planning solutions that unify inventory, procurement, finance, and fulfillment into a single source of truth for your ecommerce operations.",
  },
  {
    icon: <IconShoppingCart />,
    title: "Ecommerce Integration",
    description:
      "Seamless connections between your CRM/ERP and leading platforms like Shopify, Magento, WooCommerce, and BigCommerce with real-time data synchronization.",
  },
  {
    icon: <IconChartBar />,
    title: "Analytics & Business Intelligence",
    description:
      "Advanced reporting dashboards and predictive analytics that transform your ecommerce data into actionable insights for smarter decision-making.",
  },
  {
    icon: <IconArrowPath />,
    title: "Workflow Automation",
    description:
      "Intelligent automation for order processing, inventory management, customer segmentation, and marketing workflows that eliminate manual bottlenecks.",
  },
  {
    icon: <IconCloud />,
    title: "Cloud Migration & Scaling",
    description:
      "Migrate legacy systems to modern cloud infrastructure and architect solutions that scale elastically with your ecommerce growth — from startup to enterprise.",
  },
];

const FEATURES = [
  {
    icon: <IconBolt />,
    title: "Real-Time Sync",
    description: "Bidirectional data flow between all your systems with sub-second latency. No more stale inventory or delayed order updates.",
  },
  {
    icon: <IconShield />,
    title: "Enterprise Security",
    description: "SOC 2 compliant architecture with end-to-end encryption, role-based access control, and comprehensive audit logging.",
  },
  {
    icon: <IconCog />,
    title: "Modular Architecture",
    description: "Composable, API-first design lets you start with what you need and extend capabilities as your business evolves.",
  },
  {
    icon: <IconChartBar />,
    title: "360\u00B0 Customer View",
    description: "Unified customer profiles aggregating purchase history, support tickets, browsing behavior, and engagement metrics.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description: "We analyze your existing ecommerce stack, map your business processes, and identify opportunities for CRM/ERP optimization.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Our architects design a tailored solution with your team — selecting the right modules, integrations, and data models for your needs.",
  },
  {
    step: "03",
    title: "Agile Development",
    description: "We build iteratively in 2-week sprints with continuous demos, ensuring the solution aligns with your vision at every milestone.",
  },
  {
    step: "04",
    title: "Testing & Migration",
    description: "Rigorous QA, performance testing, and zero-downtime data migration ensure a smooth transition with no disruption to your sales.",
  },
  {
    step: "05",
    title: "Launch & Optimize",
    description: "We deploy, monitor, and continuously optimize your systems — providing ongoing support and proactive performance tuning.",
  },
];

const TECH_CATEGORIES = [
  {
    label: "Platforms",
    items: ["Salesforce", "SAP", "Microsoft Dynamics", "Odoo", "HubSpot", "NetSuite"],
  },
  {
    label: "Ecommerce",
    items: ["Shopify Plus", "Magento / Adobe Commerce", "WooCommerce", "BigCommerce", "Medusa", "Saleor"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Java / Spring", ".NET", "Go", "PostgreSQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
];

const STATS = [
  { value: "150+", label: "Ecommerce Projects Delivered" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "40%", label: "Avg. Efficiency Gain" },
  { value: "24/7", label: "Support & Monitoring" },
];

// ─── Components ─────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Open<span className="text-brand-400">Mercato</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/30"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-brand-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-brand-500 px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-500/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-900/50 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur-sm">
          <span className="inline-block size-2 rounded-full bg-accent-400 animate-pulse" />
          Enterprise CRM & ERP Development
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build Smarter Ecommerce with{" "}
          <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-accent-400 bg-clip-text text-transparent">
            Custom CRM & ERP
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-200/80 md:text-xl">
          We design and develop enterprise-grade CRM and ERP systems tailored for the ecommerce industry — helping you unify operations, delight customers, and scale without limits.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/30 hover:-translate-y-0.5"
          >
            Schedule a Discovery Call
            <span className="transition-transform group-hover:translate-x-1">
              <IconArrowRight />
            </span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-400/30 px-8 py-4 text-base font-semibold text-brand-200 transition-all hover:border-brand-400/60 hover:bg-brand-900/50 hover:text-white"
          >
            Explore Services
          </a>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-brand-800/50 pt-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-brand-300/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            End-to-End CRM & ERP Services for Ecommerce
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            From custom development to seamless integrations, we cover every aspect of building the enterprise backbone your ecommerce business needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-all hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-brand-100/50"
            >
              <div className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-brand-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">Why Open Mercato</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for Ecommerce at Scale
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-200/70">
            Every solution we build is engineered with the unique demands of ecommerce in mind — high throughput, real-time data, and uncompromising reliability.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-brand-800/50 bg-brand-900/40 p-8 backdrop-blur-sm transition-all hover:border-brand-700/60 hover:bg-brand-900/60"
            >
              <div className="inline-flex rounded-xl bg-brand-800/50 p-3 text-brand-300 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-brand-200/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Our Process</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Vision to Production in Five Steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            A battle-tested delivery methodology refined across 150+ ecommerce projects.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute top-0 left-8 hidden h-full w-px bg-gradient-to-b from-brand-200 via-brand-400 to-brand-200 md:left-1/2 md:block" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step number bubble */}
                <div className="hidden shrink-0 md:flex md:w-1/2 md:justify-center">
                  <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-lg shadow-brand-600/30">
                    {item.step}
                  </div>
                </div>

                {/* Content card */}
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:w-1/2">
                  <div className="mb-3 flex items-center gap-3 md:hidden">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section id="tech" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Technology Stack</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We Speak Your Stack
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Platform-agnostic expertise across the entire modern ecommerce and enterprise ecosystem.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.label} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
                {cat.label}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-accent-500">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-950 py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-brand-600/20 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent-500/15 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Transform Your Ecommerce Operations?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-200/70">
          Let's discuss how a custom CRM & ERP solution can streamline your processes, boost customer satisfaction, and accelerate growth.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@tryopenmercato.com"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-brand-950 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Contact Us
            <span className="transition-transform group-hover:translate-x-1">
              <IconArrowRight />
            </span>
          </a>
          <a
            href="mailto:hello@tryopenmercato.com?subject=Discovery%20Call%20Request"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-400/30 px-8 py-4 text-base font-semibold text-brand-200 transition-all hover:border-brand-400/60 hover:bg-brand-900/50 hover:text-white"
          >
            Schedule a Call
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: "Free Consultation", desc: "60-minute deep dive into your ecommerce challenges" },
            { title: "Custom Proposal", desc: "Detailed roadmap with timelines and investment options" },
            { title: "Quick Start", desc: "Go from kickoff to first milestone in just 2 weeks" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-brand-800/50 bg-brand-900/30 p-6 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-300/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight text-gray-900">
              Open<span className="text-brand-600">Mercato</span>
            </a>
            <p className="mt-1 text-sm text-gray-500">
              Enterprise CRM & ERP Development for Ecommerce
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Open Mercato. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────

function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Process />
      <Technologies />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
