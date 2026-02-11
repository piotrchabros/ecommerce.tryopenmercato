import { useEffect } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "1. Data Controller",
    content: `The controller of your personal data is Bespokesoft Piotr Chabros, with its registered office at Pastewna 27b, 02-954 Warszawa, Poland (NIP: PL7010510120). You can contact us at hello@tryopenmercato.com or +48 667 582 525.`,
  },
  {
    title: "2. Data We Collect",
    items: [
      "Contact information — name, email address, phone number, and company name provided through our contact form or direct communication.",
      "Technical data — IP address, browser type, operating system, and browsing behavior collected automatically when you visit our website.",
      "Communication data — records of correspondence when you contact us via email, phone, or our contact form.",
      "Cookies — small data files stored on your device to improve your browsing experience. See Section 8 for details.",
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
      "Consent (Art. 6(1)(a)) — when you submit our contact form or subscribe to communications.",
      "Contract performance (Art. 6(1)(b)) — when processing is necessary to deliver services you have engaged us for.",
      "Legitimate interest (Art. 6(1)(f)) — for website analytics, fraud prevention, and improving our services.",
      "Legal obligation (Art. 6(1)(c)) — when we are required to retain data for tax or accounting purposes.",
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
      "Right of access — obtain confirmation of whether we process your data and request a copy.",
      "Right to rectification — request correction of inaccurate or incomplete data.",
      "Right to erasure — request deletion of your data when it is no longer necessary.",
      "Right to restriction — request that we limit the processing of your data.",
      "Right to data portability — receive your data in a structured, machine-readable format.",
      "Right to object — object to processing based on legitimate interests or for direct marketing.",
      "Right to withdraw consent — withdraw consent at any time without affecting prior processing.",
    ],
    footer:
      "To exercise any of these rights, contact us at hello@tryopenmercato.com. We will respond within 30 days. You also have the right to lodge a complaint with the Polish supervisory authority (UODO — Urząd Ochrony Danych Osobowych).",
  },
  {
    title: "10. Changes to This Policy",
    content:
      'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.',
  },
];

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-dark font-sans text-fg antialiased">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-fg"
          >
            Open
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              Mercato
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-fg-faint">
          Last updated: February 11, 2026
        </p>
        <p className="mt-6 leading-relaxed text-fg-muted">
          Bespokesoft Piotr Chabros ("we", "us", "our"), operating under the
          Open Mercato brand, is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal data when you visit our website or use our services, in
          accordance with the General Data Protection Regulation (GDPR) and
          applicable Polish law.
        </p>

        {SECTIONS.map((section) => (
          <div key={section.title} className="mt-10">
            <h2 className="text-xl font-semibold text-fg">{section.title}</h2>
            {section.content && (
              <p className="mt-3 leading-relaxed text-fg-muted">
                {section.content}
              </p>
            )}
            {section.items && (
              <ul className="mt-3 space-y-2 pl-5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="list-disc leading-relaxed text-fg-muted marker:text-fg-faint"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.footer && (
              <p className="mt-4 leading-relaxed text-fg-muted">
                {section.footer}
              </p>
            )}
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-4 px-6 text-sm text-fg-faint sm:flex-row sm:items-center">
          <span>
            &copy; {new Date().getFullYear()} Bespokesoft Piotr Chabros
          </span>
          <div className="flex gap-6">
            <span className="text-fg-muted">Privacy Policy</span>
            <Link to="/terms" className="transition-colors hover:text-fg">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
