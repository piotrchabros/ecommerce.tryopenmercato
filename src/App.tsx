import { useState, useEffect, useRef, type ReactNode } from "react";

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
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
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-cyan">
      <span className="inline-block h-px w-6 bg-cyan" />
      {children}
    </span>
  );
}

function GradientDivider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
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
      "Purpose-built CRM systems designed for ecommerce — from lead capture to post-purchase engagement and lifetime value optimization.",
  },
  {
    title: "ERP Implementation",
    description:
      "End-to-end resource planning that unifies inventory, procurement, finance, and fulfillment into a single source of truth.",
  },
  {
    title: "Ecommerce Integration",
    description:
      "Seamless connections between your CRM/ERP and platforms like Shopify, Magento, and BigCommerce with real-time sync.",
  },
  {
    title: "Analytics & Intelligence",
    description:
      "Advanced dashboards and predictive analytics that transform ecommerce data into actionable insights.",
  },
  {
    title: "Workflow Automation",
    description:
      "Intelligent automation for order processing, inventory, customer segmentation, and marketing workflows.",
  },
  {
    title: "Cloud Migration & Scaling",
    description:
      "Migrate legacy systems to modern cloud infrastructure that scales elastically with your growth.",
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
      "We analyze your existing ecommerce stack, map your business processes, and identify optimization opportunities.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Our architects design a tailored solution — selecting the right modules, integrations, and data models.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "We build iteratively in 2-week sprints with continuous demos, ensuring alignment at every milestone.",
  },
  {
    step: "04",
    title: "Testing & Migration",
    description:
      "Rigorous QA, performance testing, and zero-downtime data migration for a smooth transition.",
  },
  {
    step: "05",
    title: "Launch & Optimize",
    description:
      "We deploy, monitor, and continuously optimize — providing ongoing support and proactive tuning.",
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
          ? "border-b border-white/[0.06] bg-dark/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-xl font-bold tracking-tight text-fg">
          Open
          <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
            Mercato
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan to-blue px-6 py-2.5 text-sm font-semibold text-dark transition-shadow hover:shadow-lg hover:shadow-cyan/25"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-fg md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-dark/95 px-6 py-6 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gradient-to-r from-cyan to-blue py-3 text-center text-sm font-semibold text-dark"
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
    <section className="relative min-h-screen overflow-hidden bg-dark pt-32 pb-0 md:pt-40">
      {/* Animated gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-cyan/15 blur-[140px]"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue/12 blur-[120px]"
          style={{ animation: "float 10s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute top-[30%] left-[40%] h-[350px] w-[350px] rounded-full bg-cyan/8 blur-[100px]"
          style={{ animation: "float 12s ease-in-out infinite 4s" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-dark)_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <span className="inline-block size-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-fg-muted">
              Enterprise CRM & ERP Development
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build Smarter Ecommerce{" "}
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              with Custom CRM & ERP
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
            We design and develop enterprise-grade CRM and ERP systems tailored
            for ecommerce — helping you unify operations, delight customers, and
            scale without limits.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan to-blue px-8 py-4 text-base font-semibold text-dark transition-all hover:shadow-xl hover:shadow-cyan/20"
            >
              Schedule a Discovery Call
              <span className="transition-transform group-hover:translate-x-0.5">
                <IconArrowRight />
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-8 py-4 text-base font-semibold text-fg transition-all hover:border-white/25 hover:bg-white/[0.04]"
            >
              Explore Services
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-28">
          <GradientDivider />
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={320 + i * 70}>
                <div>
                  <div className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm text-fg-muted">
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
    <section id="services" className="relative bg-dark py-28 md:py-36">
      <GradientDivider />
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              End-to-End CRM & ERP{" "}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              From custom development to seamless integrations, we build the
              enterprise backbone your ecommerce business needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-cyan/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]">
                <span className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-blue/15 text-sm font-bold text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-fg">
                  {service.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-fg-muted">
                  {service.description}
                </p>
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
    <section id="capabilities" className="relative bg-panel py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Why Open Mercato</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for Ecommerce{" "}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                at Scale
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              Every solution we build is engineered with the unique demands of
              ecommerce — high throughput, real-time data, and uncompromising
              reliability.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-dark/60 p-10 transition-all duration-300 hover:border-cyan/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.06)]">
                {/* Background number */}
                <span className="pointer-events-none absolute -top-2 -right-2 text-[8rem] font-extrabold leading-none text-white/[0.03] transition-colors group-hover:text-cyan/[0.06]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Gradient accent line */}
                <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-cyan to-blue transition-all duration-300 group-hover:w-16" />

                <h3 className="relative text-xl font-semibold text-fg">
                  {cap.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-fg-muted">
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
    <section id="process" className="relative bg-dark py-28 md:py-36">
      <GradientDivider />
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Our Process</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              From Vision to{" "}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                Production
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              A battle-tested delivery methodology refined across 150+
              ecommerce projects.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 pl-8 md:pl-14">
          {/* Gradient connector line */}
          <div className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-cyan via-blue to-transparent md:left-[19px]" />

          <div className="space-y-2">
            {PROCESS_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 70}>
                <div className="group relative rounded-2xl border border-transparent p-6 transition-all hover:border-white/[0.06] hover:bg-white/[0.02] md:p-8">
                  {/* Dot */}
                  <div className="absolute -left-8 top-8 flex size-6 items-center justify-center rounded-full border-2 border-cyan bg-dark md:-left-14 md:size-10 md:top-10">
                    <span className="hidden text-xs font-bold text-cyan md:block">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-cyan md:hidden">
                    Step {item.step}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-fg md:mt-0">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="relative bg-panel py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>Technology Stack</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              We Speak{" "}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                Your Stack
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              Platform-agnostic expertise across the modern ecommerce and
              enterprise ecosystem.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-8">
          {TECH_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 50}>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-fg-faint md:w-24">
                  {cat.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-fg-muted transition-all hover:border-cyan/25 hover:bg-cyan/[0.06] hover:text-fg"
                    >
                      <span className="text-cyan">
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
    <section id="contact" className="relative overflow-hidden bg-dark py-28 md:py-36">
      <GradientDivider />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.07] blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 pt-28 text-center md:pt-36">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              Ecommerce Operations?
            </span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            Let's discuss how a custom CRM & ERP solution can streamline your
            processes, boost satisfaction, and accelerate growth.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@tryopenmercato.com"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan to-blue px-8 py-4 text-base font-semibold text-dark transition-all hover:shadow-xl hover:shadow-cyan/20"
            >
              Contact Us
              <span className="transition-transform group-hover:translate-x-0.5">
                <IconArrowRight />
              </span>
            </a>
            <a
              href="mailto:hello@tryopenmercato.com?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-8 py-4 text-base font-semibold text-fg transition-all hover:border-white/25 hover:bg-white/[0.04]"
            >
              Schedule a Call
            </a>
          </div>
        </Reveal>

        <Reveal delay={240}>
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
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-cyan/15 hover:bg-white/[0.05]"
              >
                <h3 className="font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
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
    <footer className="border-t border-white/[0.06] bg-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a href="#" className="text-xl font-bold tracking-tight text-fg">
              Open
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                Mercato
              </span>
            </a>
            <p className="mt-2 text-sm text-fg-muted">
              Enterprise CRM & ERP Development for Ecommerce
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 text-sm text-fg-faint">
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
