"use client";

import { useEffect, useState } from "react";
import { legalCopy, type LegalPageKind } from "./legal-copy";
import { localeLabels, locales, type Locale } from "./translations";

const routeFor: Record<LegalPageKind, string> = {
  privacy: "/privacy",
  support: "/support",
  terms: "/terms",
  deletion: "/data-deletion",
};

function LegalLogo() {
  return (
    <span className="brand" aria-label="Albor">
      <span className="brand-mark" aria-hidden="true"><i>✦</i></span>
      <span className="brand-name">Albor</span>
    </span>
  );
}

export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = legalCopy[locale];
  const document = copy.documents[kind];

  useEffect(() => {
    const saved = window.localStorage.getItem("albor-locale") as Locale | null;
    if (saved && locales.includes(saved)) setLocale(saved);
  }, []);

  useEffect(() => {
    documentElementLanguage(locale);
    window.localStorage.setItem("albor-locale", locale);
  }, [locale]);

  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="container legal-nav">
          <a href="/" aria-label={copy.back}><LegalLogo /></a>
          <nav aria-label="Legal pages">
            {(Object.keys(routeFor) as LegalPageKind[]).map((item) => (
              <a className={item === kind ? "active" : ""} href={routeFor[item]} key={item}>{copy.nav[item]}</a>
            ))}
          </nav>
          <label className="language-select legal-language">
            <span className="sr-only">{copy.language}</span>
            <span aria-hidden="true">◎</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={copy.language}>
              {locales.map((item) => <option value={item} key={item}>{localeLabels[item]} · {item.toUpperCase()}</option>)}
            </select>
          </label>
        </div>
      </header>

      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <a href="/" className="legal-back">← {copy.back}</a>
          <span className="eyebrow"><span>✦</span>{document.eyebrow}</span>
          <h1>{document.title}</h1>
          <p>{document.intro}</p>
          <div className="legal-meta">
            <span>{document.updatedLabel}</span>
            <strong>{document.updated}</strong>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container legal-layout">
          <aside>
            <span>{copy.operatorLabel}</span>
            <strong>{copy.operator}</strong>
            <p>{copy.country}</p>
            <span>{copy.contactLabel}</span>
            <a href="mailto:info@alborapp.com">info@alborapp.com</a>
          </aside>
          <article>
            {document.sections.map((section) => (
              <section className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{linkEmail(paragraph)}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{linkEmail(bullet)}</li>)}</ul>}
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="legal-contact">
        <div className="container legal-contact-card">
          <div><span>✦</span><h2>{copy.contactPrompt}</h2></div>
          <a className="button" href="mailto:info@alborapp.com">info@alborapp.com <span>↗</span></a>
        </div>
      </section>

      <footer className="legal-footer">
        <div className="container legal-footer-inner">
          <a href="/"><LegalLogo /></a>
          <nav aria-label="Legal pages">
            {(Object.keys(routeFor) as LegalPageKind[]).map((item) => <a href={routeFor[item]} key={item}>{copy.nav[item]}</a>)}
          </nav>
          <span>© {new Date().getFullYear()} Albor · {copy.operator}, {copy.country}</span>
        </div>
      </footer>
    </main>
  );
}

function documentElementLanguage(locale: Locale) {
  document.documentElement.lang = locale;
}

function linkEmail(text: string) {
  const parts = text.split("info@alborapp.com");
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {index > 0 && <a className="inline-email" href="mailto:info@alborapp.com">info@alborapp.com</a>}
      {part}
    </span>
  ));
}

