import { useEffect } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "1. Definitions",
    items: [
      '"Company", "we", "us", "our" — Bespokesoft Piotr Chabros, with its registered office at Pastewna 27b, 02-954 Warszawa, Poland (NIP: PL7010510120), operating under the Open Mercato brand.',
      '"Client", "you", "your" — any natural person, legal entity, or organizational unit using our website or engaging our services.',
      '"Services" — CRM and ERP consulting, design, development, integration, and support services provided by the Company.',
      '"Website" — the website accessible at tryopenmercato.com and all its subdomains.',
      '"Agreement" — a contract for the provision of Services concluded between the Company and the Client.',
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
      "The Company's total liability under any Agreement shall not exceed the total fees paid by the Client under that Agreement.",
      "The Company shall not be liable for indirect, incidental, or consequential damages, including lost profits or data loss.",
      "The Website is provided \"as is\" without warranties of any kind regarding availability, accuracy, or completeness of content.",
    ],
  },
  {
    title: "9. Termination",
    items: [
      "Either party may terminate an Agreement with 30 days' written notice, unless otherwise specified in the Agreement.",
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
];

export default function Terms() {
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
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-fg-faint">
          Last updated: February 11, 2026
        </p>
        <p className="mt-6 leading-relaxed text-fg-muted">
          These Terms of Service govern your use of the Open Mercato website and
          the services provided by Bespokesoft Piotr Chabros. By accessing our
          website or engaging our services, you accept these terms in full. Please
          read them carefully before proceeding.
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
            <Link to="/privacy" className="transition-colors hover:text-fg">
              Privacy Policy
            </Link>
            <span className="text-fg-muted">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
