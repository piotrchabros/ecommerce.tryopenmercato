import { useState, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useT, useLanguage } from "./i18n";

// ─── Animation Presets ──────────────────────────────────────────────────────

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const anim = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  },
  fadeUpBlur: {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease },
    },
  },
  scaleFade: {
    hidden: { opacity: 0, scale: 0.96, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
  },
  drawLine: {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1.4, ease } },
  },
};

const stagger = (delay = 0.06) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

const vp = { once: true, margin: "-60px" as const };

// ─── Utility Components ─────────────────────────────────────────────────────

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

// ─── Language Switcher ──────────────────────────────────────────────────────

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5 text-sm font-medium">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1 transition-all ${
          language === "en"
            ? "bg-gradient-to-r from-cyan to-blue text-dark"
            : "text-fg-muted hover:text-fg"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("pl")}
        className={`rounded-full px-3 py-1 transition-all ${
          language === "pl"
            ? "bg-gradient-to-r from-cyan to-blue text-dark"
            : "text-fg-muted hover:text-fg"
        }`}
      >
        PL
      </button>
    </div>
  );
}

// ─── Section Components ─────────────────────────────────────────────────────

function Navbar() {
  const t = useT();
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
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-fg"
        >
          Open
          <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
            Mercato
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="https://cal.eu/piotr-chabros/open-mercato-deep-dive"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-cyan to-blue px-6 py-2.5 text-sm font-semibold text-dark transition-shadow hover:shadow-lg hover:shadow-cyan/25"
          >
            {t.nav.cta}
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
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <div className="py-3">
            <LanguageSwitcher />
          </div>
          <a
            href="https://cal.eu/piotr-chabros/open-mercato-deep-dive"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gradient-to-r from-cyan to-blue py-3 text-center text-sm font-semibold text-dark"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const t = useT();
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
        {/* Hero content with staggered reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger(0.12)}
        >
          <motion.div variants={anim.fadeUp}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
              <span className="inline-block size-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-sm font-medium text-fg-muted">
                {t.hero.badge}
              </span>
            </div>
          </motion.div>

          <motion.div variants={anim.fadeUpBlur}>
            <h1 className="mt-8 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.titleStart}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={anim.fadeUp}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div variants={anim.fadeUp}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://cal.eu/piotr-chabros/open-mercato-deep-dive"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan to-blue px-8 py-4 text-base font-semibold text-dark transition-all hover:shadow-xl hover:shadow-cyan/20"
              >
                {t.hero.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-0.5">
                  <IconArrowRight />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-8 py-4 text-base font-semibold text-fg transition-all hover:border-white/25 hover:bg-white/[0.04]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="mt-28">
          <GradientDivider />
          <motion.div
            className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={stagger(0.08)}
          >
            {t.hero.stats.map((stat) => (
              <motion.div key={stat.label} variants={anim.fadeUp}>
                <div className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-fg-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const t = useT();
  return (
    <section id="services" className="relative bg-dark py-28 md:py-36">
      <GradientDivider />
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          <motion.div variants={anim.slideLeft}>
            <SectionLabel>{t.services.label}</SectionLabel>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.services.titleStart}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                {t.services.titleHighlight}
              </span>
            </h2>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              {t.services.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.06)}
        >
          {t.services.items.map((service, i) => (
            <motion.div
              key={service.title}
              variants={anim.scaleFade}
              className="group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-[border-color,background-color,box-shadow] duration-300 hover:border-cyan/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]"
            >
              <span className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-blue/15 text-sm font-bold text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-fg">{service.title}</h3>
              <p className="mt-2.5 leading-relaxed text-fg-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const t = useT();
  return (
    <section id="capabilities" className="relative bg-panel py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          <motion.div variants={anim.slideLeft}>
            <SectionLabel>{t.capabilities.label}</SectionLabel>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.capabilities.titleStart}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                {t.capabilities.titleHighlight}
              </span>
            </h2>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              {t.capabilities.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          {t.capabilities.items.map((cap, i) => (
            <motion.div
              key={cap.title}
              variants={anim.scaleFade}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-dark/60 p-10 transition-[border-color,box-shadow] duration-300 hover:border-cyan/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.06)]"
            >
              <span className="pointer-events-none absolute -top-2 -right-2 text-[8rem] font-extrabold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-cyan/[0.06]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-cyan to-blue transition-all duration-500 group-hover:w-16" />
              <h3 className="relative text-xl font-semibold text-fg">
                {cap.title}
              </h3>
              <p className="relative mt-3 leading-relaxed text-fg-muted">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const t = useT();
  return (
    <section id="process" className="relative bg-dark py-28 md:py-36">
      <GradientDivider />
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          <motion.div variants={anim.slideLeft}>
            <SectionLabel>{t.process.label}</SectionLabel>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.process.titleStart}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                {t.process.titleHighlight}
              </span>
            </h2>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              {t.process.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 pl-8 md:pl-14">
          {/* Animated gradient connector line */}
          <motion.div
            className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-cyan via-blue to-transparent md:left-[19px]"
            style={{ originY: 0 }}
            variants={anim.drawLine}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={stagger(0.1)}
          >
            {t.process.items.map((item) => (
              <motion.div
                key={item.step}
                variants={anim.fadeUp}
                className="group relative rounded-2xl border border-transparent p-6 transition-[border-color,background-color] duration-300 hover:border-white/[0.06] hover:bg-white/[0.02] md:p-8"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-8 flex size-6 items-center justify-center rounded-full border-2 border-cyan bg-dark md:-left-14 md:top-10 md:size-10">
                  <span className="hidden text-xs font-bold text-cyan md:block">
                    {item.step}
                  </span>
                </div>

                <span className="text-xs font-bold text-cyan md:hidden">
                  {t.process.stepPrefix} {item.step}
                </span>
                <h3 className="mt-1 text-xl font-semibold text-fg md:mt-0">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const t = useT();
  return (
    <section id="stack" className="relative bg-panel py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          <motion.div variants={anim.slideLeft}>
            <SectionLabel>{t.techStack.label}</SectionLabel>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.techStack.titleStart}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                {t.techStack.titleHighlight}
              </span>
            </h2>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              {t.techStack.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Tech rows with staggered pills */}
        <motion.div
          className="mt-16 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          {t.techStack.categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={anim.fadeUp}
              className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8"
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Team() {
  const t = useT();
  return (
    <section id="team" className="relative bg-dark py-28 md:py-36">
      <GradientDivider />
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        {/* Header */}
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          <motion.div variants={anim.slideLeft}>
            <SectionLabel>{t.team.label}</SectionLabel>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.team.titleStart}
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                {t.team.titleHighlight}
              </span>
            </h2>
          </motion.div>
          <motion.div variants={anim.fadeUp}>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              {t.team.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Team cards */}
        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={vp}
          variants={stagger(0.08)}
        >
          {t.team.members.map((member) => (
            <motion.div
              key={member.name}
              variants={anim.scaleFade}
              className="group relative flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-[border-color,background-color,box-shadow] duration-300 hover:border-cyan/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]"
            >
              {/* Photo */}
              <div className="mb-6 flex size-24 items-center justify-center overflow-hidden rounded-full border-2 border-white/[0.08] bg-gradient-to-br from-cyan/10 to-blue/10 transition-all duration-300 group-hover:border-cyan/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                {member.initials === "PC" ? (
                  <img src="/piotr_chabros.png" alt={member.name} className="size-full object-cover" />
                ) : member.initials === "JT" ? (
                  <img src="/jacek_tomaszewski.jpeg" alt={member.name} className="size-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                    {member.initials}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-fg">{member.name}</h3>
              <span className="mt-1 text-sm font-medium text-cyan">
                {member.role}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const INPUT_CLASS =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-fg placeholder:text-fg-faint outline-none transition-all duration-200 focus:border-cyan/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-cyan/20";

function ContactForm() {
  const t = useT();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3276c14d-a128-453a-bfc3-6e4a1f732f22",
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          subject: `New contact from ${form.name}`,
          from_name: "OpenMercato Contact Form",
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="flex flex-col items-center justify-center rounded-2xl border border-cyan/20 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-sm"
      >
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-blue/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-7 text-cyan"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-fg">{t.contactForm.sentTitle}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
          {t.contactForm.sentDescription}
        </p>
      </motion.div>
    );
  }

  if (status === "error") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className="flex flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-sm"
      >
        <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-red-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-red-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-fg">{t.contactForm.errorTitle}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-fg-muted">
          {t.contactForm.errorDescription}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-white/[0.12] px-6 py-2.5 text-sm font-semibold text-fg transition-all hover:border-white/25 hover:bg-white/[0.04]"
        >
          {t.contactForm.tryAgain}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg-muted">
            {t.contactForm.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder={t.contactForm.namePlaceholder}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg-muted">
            {t.contactForm.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder={t.contactForm.emailPlaceholder}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={INPUT_CLASS}
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-fg-muted">
          {t.contactForm.companyLabel} <span className="text-fg-faint">{t.contactForm.companyOptional}</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder={t.contactForm.companyPlaceholder}
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className={INPUT_CLASS}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg-muted">
          {t.contactForm.messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder={t.contactForm.messagePlaceholder}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan to-blue px-8 py-4 text-base font-semibold text-dark transition-all hover:shadow-xl hover:shadow-cyan/20 disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <svg className="size-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t.contactForm.sending}
          </>
        ) : (
          <>
            {t.contactForm.submit}
            <span className="transition-transform group-hover:translate-x-0.5">
              <IconArrowRight />
            </span>
          </>
        )}
      </button>
    </form>
  );
}

function CTA() {
  const t = useT();
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-dark py-28 md:py-36"
    >
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

      <div className="relative mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left — copy + info cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={stagger(0.1)}
          >
            <motion.div variants={anim.slideLeft}>
              <SectionLabel>{t.contact.label}</SectionLabel>
            </motion.div>
            <motion.div variants={anim.fadeUpBlur}>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {t.contact.titleStart}
                <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                  {t.contact.titleHighlight}
                </span>
              </h2>
            </motion.div>
            <motion.div variants={anim.fadeUp}>
              <p className="mt-5 text-lg leading-relaxed text-fg-muted">
                {t.contact.description}
              </p>
            </motion.div>

            <motion.div
              variants={stagger(0.06)}
              className="mt-10 space-y-4"
            >
              {t.contact.benefits.map((item) => (
                <motion.div
                  key={item.title}
                  variants={anim.fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-blue/20 text-cyan">
                    <IconCheck />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-fg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-fg-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={anim.fadeUp} className="mt-8 flex flex-col gap-4">
              <a
                href="https://cal.eu/piotr-chabros/open-mercato-deep-dive"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan to-blue px-8 py-4 text-base font-semibold text-dark transition-all hover:shadow-xl hover:shadow-cyan/20"
              >
                {t.contact.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-0.5">
                  <IconArrowRight />
                </span>
              </a>
              <a
                href="mailto:hello@tryopenmercato.com"
                className="text-sm font-medium text-fg-muted transition-colors hover:text-cyan"
              >
                {t.contact.emailPrefix}{" "}
                <span className="text-cyan">hello@tryopenmercato.com</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            variants={anim.scaleFade}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm md:p-10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-white/[0.06] bg-dark py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top row — logo + nav */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-fg"
            >
              Open
              <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
                Mercato
              </span>
            </a>
            <p className="mt-2 text-sm text-fg-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {t.nav.links.map((link) => (
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

        {/* Company details */}
        <div className="mt-12 grid gap-8 border-t border-white/[0.06] pt-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-faint">
              {t.footer.companyTitle}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Bespokesoft Piotr Chabros
              <br />
              NIP: PL7010510120
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-faint">
              {t.footer.addressTitle}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Pastewna 27b
              <br />
              02-954 Warszawa, Poland
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-faint">
              {t.footer.phoneTitle}
            </h4>
            <a
              href="tel:+48667582525"
              className="mt-2 block text-sm text-fg-muted transition-colors hover:text-cyan"
            >
              +48 667 582 525
            </a>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-faint">
              {t.footer.emailTitle}
            </h4>
            <a
              href="mailto:hello@tryopenmercato.com"
              className="mt-2 block text-sm text-fg-muted transition-colors hover:text-cyan"
            >
              hello@tryopenmercato.com
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-sm text-fg-faint sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <span>
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </span>
            <a
              href="https://github.com/open-mercato/open-mercato"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-fg-faint transition-colors hover:text-fg"
            >
              {t.footer.openSourceNote}
            </a>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-fg">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/terms" className="transition-colors hover:text-fg">
              {t.footer.termsOfService}
            </Link>
          </div>
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
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
