import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useT } from "../i18n";

export default function Privacy() {
  const t = useT();

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
            {t.footer.backToHome}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.privacy.title}
        </h1>
        <p className="mt-3 text-sm text-fg-faint">
          {t.privacy.lastUpdated}
        </p>
        <p className="mt-6 leading-relaxed text-fg-muted">
          {t.privacy.intro}
        </p>

        {t.privacy.sections.map((section) => (
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
            <span className="text-fg-muted">{t.footer.privacyPolicy}</span>
            <Link to="/terms" className="transition-colors hover:text-fg">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
