import { useState, useEffect, useRef, type ReactNode } from "react";

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

// ─── Utility Components ─────────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terra">
      {children}
    </span>
  );
}

// ─── Icons ──────────────────────────────────────────────────────────────────

function IconArrowRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="size-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
}

function IconX() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Custom CRM Development",
    description:
      "Purpose-built customer relationship management systems designed for ecommerce workflows — from lead capture to post-purchase engagement and lifetime value optimization.",
  },
  {
    title: "ERP Implementation",
    description:
      "End-to-end enterprise resource planning solutions that unify inventory, procurement, finance, and fulfillment into a single source of truth.",
  },
  {
    title: "Ecommerce Integration",
    description:
      "Seamless connections between your CRM/ERP and platforms like Shopify, Magento, WooCommerce, and BigCommerce with real-time data synchronization.",
  },
  {
    title: "Analytics & Intelligence",
    description:
      "Advanced reporting dashboards and predictive analytics that transform your ecommerce data into actionable insights for smarter decisions.",
  },
  {
    title: "Workflow Automation",
    description:
      "Intelligent automation for order processing, inventory management, customer segmentation, and marketing that eliminates manual bottlenecks.",
  },
  {
    title: "Cloud Migration & Scaling",
    description:
      "Migrate legacy systems to modern cloud infrastructure that scales elastically with your growth — from startup to enterprise.",
  },
];

const CAPABILITIES = [
  {
    title: "Real-Time Sync",
    description:
      "Bidirectional data flow between all your systems with sub-second latency. No more stale inventory or delayed order updates.",
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 compliant architecture with end-to-end encryption, role-based access control, and comprehensive audit logging.",
  },
  {
    title: "Modular Architecture",
    description:
      "Composable, API-first design lets you start with what you need and extend capabilities as your business evolves.",
  },
  {
    title: "360\u00B0 Customer View",
    description:
      "Unified customer profiles aggregating purchase history, support tickets, browsing behavior, and engagement metrics.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We analyze your existing ecommerce stack, map your business processes, and identify opportunities for CRM/ERP optimization.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Our architects design a tailored solution — selecting the right modules, integrations, and data models for your needs.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We build iteratively in 2-week sprints with continuous demos, ensuring alignment with your vision at every milestone.",
  },
  {
    step: "04",
    title: "Testing & Migration",
    description:
      "Rigorous QA, performance testing, and zero-downtime data migration ensure a smooth transition with no disruption.",
  },
  {
    step: "05",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor, and continuously optimize — providing ongoing support and proactive performance tuning.",
  },
];

const TECH_CATEGORIES = [
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
];

const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "40%", label: "Avg. Efficiency Gain" },
  { value: "24/7", label: "Support & Monitoring" },
];

// ─── Section Components ─────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_0] shadow-rule backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-serif text-2xl text-ink">
          Open<span className="italic text-terra"> Mercato</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-ink-light"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-rule bg-cream/95 px-6 py-6 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-ink py-3 text-center text-sm font-semibold text-cream"
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
    <section className="relative overflow-hidden bg-cream pt-32 pb-0 md:pt-44">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-[500px] rounded-full border border-rule/60 md:size-[720px]" />
      <div className="pointer-events-none absolute -top-16 -right-16 size-[300px] rounded-full border border-rule/30 md:size-[500px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Enterprise CRM & ERP Development</SectionLabel>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Build Smarter Ecommerce with{" "}
            <span className="italic text-terra">Custom CRM & ERP</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            We design and develop enterprise-grade CRM and ERP systems tailored
            for ecommerce — helping you unify operations, delight customers, and
            scale without limits.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-terra px-8 py-4 text-base font-semibold text-white transition-all hover:bg-terra-dark"
            >
              Schedule a Discovery Call
              <span className="transition-transform group-hover:translate-x-0.5">
                <IconArrowRight />
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-base font-semibold text-ink transition-all hover:border-ink/30 hover:bg-ink/[0.03]"
            >
              Explore Services
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-24 border-t border-rule">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={400 + i * 80}>
                <div
                  className={`py-10 ${
                    i > 0 ? "md:border-l md:border-rule md:pl-10" : ""
                  }`}
                >
                  <div className="font-serif text-4xl text-ink md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-ink-muted">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              End-to-End CRM & ERP Services{" "}
              <span className="italic text-terra">for Ecommerce</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              From custom development to seamless integrations, we build the
              enterprise backbone your ecommerce business needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <div className="group relative h-full rounded-xl border border-rule/70 bg-cream/50 p-8 transition-all hover:border-terra/30 hover:bg-terra-light/25 md:p-10">
                {/* Accent bar */}
                <div className="absolute top-8 left-0 h-8 w-[3px] rounded-r-full bg-terra transition-all duration-300 group-hover:h-12" />

                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-serif text-2xl text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-terra">
              Why Open Mercato
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-cream sm:text-4xl md:text-5xl">
              Built for Ecommerce{" "}
              <span className="italic text-terra">at Scale</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-faint">
              Every solution we build is engineered with the unique demands of
              ecommerce — high throughput, real-time data, and uncompromising
              reliability.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 80}>
              <div className="group relative h-full rounded-2xl border border-white/[0.08] p-10 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
                <span className="absolute top-6 right-8 font-serif text-7xl leading-none text-white/[0.06] transition-colors group-hover:text-terra/15 md:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative text-xl font-semibold text-cream">
                  {cap.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-ink-faint">
                  {cap.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Our Process</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              From Vision to Production{" "}
              <span className="italic text-terra">in Five Steps</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              A battle-tested delivery methodology refined across 150+
              ecommerce projects.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          {PROCESS_STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="group border-t border-rule py-10 md:py-12">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-16">
                  <span className="shrink-0 font-serif text-5xl text-ink-faint transition-colors group-hover:text-terra md:w-24 md:text-6xl">
                    {item.step}
                  </span>
                  <div className="max-w-xl">
                    <h3 className="text-xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Technology Stack</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              We Speak{" "}
              <span className="italic text-terra">Your Stack</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Platform-agnostic expertise across the modern ecommerce and
              enterprise ecosystem.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-10">
          {TECH_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 60}>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted md:w-24">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-cream/70 px-4 py-2 text-sm text-ink transition-all hover:border-terra/30 hover:bg-terra-light/40"
                    >
                      <span className="text-terra">
                        <IconCheck />
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-terra py-24 md:py-32"
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-[600px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 size-[400px] rounded-full border border-white/[0.07]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Transform Your{" "}
            <span className="italic">Ecommerce Operations?</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Let's discuss how a custom CRM & ERP solution can streamline your
            processes, boost satisfaction, and accelerate growth.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@tryopenmercato.com"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-semibold text-terra transition-all hover:bg-cream"
            >
              Contact Us
              <span className="transition-transform group-hover:translate-x-0.5">
                <IconArrowRight />
              </span>
            </a>
            <a
              href="mailto:hello@tryopenmercato.com?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
            >
              Schedule a Call
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Free Consultation",
                desc: "60-minute deep dive into your ecommerce challenges",
              },
              {
                title: "Custom Proposal",
                desc: "Detailed roadmap with timelines and investment options",
              },
              {
                title: "Quick Start",
                desc: "From kickoff to first milestone in just 2 weeks",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-rule bg-cream py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#" className="font-serif text-2xl text-ink">
              Open<span className="italic text-terra"> Mercato</span>
            </a>
            <p className="mt-2 text-sm text-ink-muted">
              Enterprise CRM & ERP Development for Ecommerce
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-rule pt-8 text-sm text-ink-faint">
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
      <CapabilitiesSection />
      <Process />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
