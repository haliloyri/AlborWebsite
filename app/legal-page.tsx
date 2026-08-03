"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { legalCopy, type LegalPageKind } from "./legal-copy";
import { homePath, localizedPath } from "./locale-paths";
import { localeLabels, locales, type Locale } from "./translations";

const routes: Record<LegalPageKind, string> = {
  privacy: "/privacy",
  support: "/support",
  terms: "/terms",
  deletion: "/data-deletion",
};

function LegalLogo() {
  return (
    <span className="brand" aria-label="Albor">
      <img className="brand-mark" src="/albor-logo.png" alt="" width="512" height="512" aria-hidden="true" />
      <span className="brand-name">Albor</span>
    </span>
  );
}

function routeFor(kind: LegalPageKind, locale: Locale) {
  return localizedPath(routes[kind], locale);
}

export function LegalPage({ kind, initialLocale = "en" }: { kind: LegalPageKind; initialLocale?: Locale }) {
  const [locale] = useState<Locale>(initialLocale);
  const copy = legalCopy[locale];
  const document = copy.documents[kind];

  useEffect(() => {
    documentElementLanguage(locale);
  }, [locale]);

  const changeLocale = (next: Locale) => {
    if (next !== locale) window.location.assign(routeFor(kind, next));
  };

  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="container legal-nav">
          <a href={homePath(locale)} aria-label={copy.back}><LegalLogo /></a>
          <nav aria-label="Legal pages">
            {(Object.keys(routes) as LegalPageKind[]).map((item) => (
              <a className={item === kind ? "active" : ""} href={routeFor(item, locale)} key={item}>{copy.nav[item]}</a>
            ))}
          </nav>
          <label className="language-select legal-language">
            <span className="sr-only">{copy.language}</span>
            <span aria-hidden="true">◎</span>
            <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)} aria-label={copy.language}>
              {locales.map((item) => <option value={item} key={item}>{localeLabels[item]} · {item.toUpperCase()}</option>)}
            </select>
          </label>
        </div>
      </header>

      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <a href={homePath(locale)} className="legal-back">← {copy.back}</a>
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
            {kind === "support" && <SupportForm />}
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
          <a href={homePath(locale)}><LegalLogo /></a>
          <nav aria-label="Legal pages">
            <a href="https://alborapp.com/privacy">{copy.nav.privacy}</a>
            <a href="https://alborapp.com/terms">{copy.nav.terms}</a>
            <a href="https://alborapp.com/refund">{locale === "tr" ? "İade ve İptal" : "Refunds & cancellations"}</a>
            <a href="https://alborapp.com/support">{copy.nav.support}</a>
          </nav>
          <span>© {new Date().getFullYear()} Albor · {copy.operator}, {copy.country}</span>
        </div>
      </footer>
    </main>
  );
}

function SupportForm() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Albor destek talebi");
    const body = [
      `Ad: ${data.get("name") || ""}`,
      `E-posta: ${data.get("email") || ""}`,
      `Uygulama sürümü: ${data.get("version") || ""}`,
      `Cihaz / işletim sistemi: ${data.get("device") || ""}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:info@alborapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section className="support-form" aria-labelledby="support-form-title">
      <h2 id="support-form-title">Destek talebi gönderin</h2>
      <p>Gizlilik Politikası’na uygun olarak yalnızca gerekli bilgileri paylaşın; hassas kişisel bilgi, ödeme bilgisi veya parola göndermeyin.</p>
      <form onSubmit={submit}>
        <label>Ad<input name="name" autoComplete="name" required /></label>
        <label>E-posta<input name="email" type="email" autoComplete="email" required /></label>
        <label>Konu<input name="subject" required /></label>
        <label className="support-form-wide">Mesaj<textarea name="message" rows={5} required /></label>
        <label>Uygulama sürümü<input name="version" placeholder="Örn. 1.0.0" /></label>
        <label>Cihaz / işletim sistemi<input name="device" placeholder="Örn. iPhone / iOS 18" /></label>
        <label className="support-form-wide">Ekran görüntüsü <input name="screenshot" type="file" accept="image/*" /></label>
        <p className="support-form-wide">Bu form e-posta uygulamanızı açar. Ekran görüntüsü eklemek isterseniz, açılan e-postaya dosyayı ekleyin.</p>
        <button className="button support-form-wide" type="submit">E-posta ile devam et <span>↗</span></button>
        {submitted && <p className="support-form-wide" role="status">E-posta uygulamanız açılmadıysa doğrudan info@alborapp.com adresine yazabilirsiniz.</p>}
      </form>
    </section>
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
