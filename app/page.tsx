"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "./site-config";
import { localeLabels, locales, translations, type Locale } from "./translations";

const categoryIcons = ["◌", "Φ", "◒", "⚑", "⌂", "✧", "♡", "◍", "✓", "↗"];
const categoryTones = ["lilac", "violet", "gold", "blue", "sand", "sky", "teal", "orange", "green", "sage"];
const featureImages = ["home", "story-detail", "library", "progress", "profile"] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`} aria-label="Albor">
      <span className="brand-mark" aria-hidden="true"><i>✦</i></span>
      <span className="brand-name">Albor</span>
    </span>
  );
}

function StoreBadges({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  const copy = translations[locale].store;
  const stores = [
    { label: "App Store", overline: copy.appStoreOverline, symbol: "●" },
    { label: "Google Play", overline: copy.googlePlayOverline, symbol: "▶" },
  ];
  return (
    <div className={`store-badges ${inverse ? "inverse" : ""}`} aria-label={copy.aria}>
      {stores.map((store) => (
        <span className="store-badge" key={store.label} title={copy.coming}>
          <span className="store-symbol" aria-hidden="true">{store.symbol}</span>
          <span><small>{store.overline}</small><strong>{store.label}</strong></span>
        </span>
      ))}
    </div>
  );
}

function Phone({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <figure className={`phone ${className}`}><img src={src} alt={alt} loading={eager ? "eager" : "lazy"} /></figure>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>(siteConfig.defaultLocale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const copy = translations[locale];
  const screens = siteConfig.screenshots[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem("albor-locale") as Locale | null;
    if (saved && locales.includes(saved)) setLocale(saved);
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("albor-locale", locale);
  }, [locale]);

  const changeLocale = (next: Locale) => {
    setLocale(next);
    setOpenFaq(0);
  };

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label={copy.nav.aria}>
          <a href="#top" className="logo-link"><Logo /></a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span className="sr-only">{copy.nav.menu}</span>
          </button>
          <div id="mobile-menu" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>{copy.nav.how}</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>{copy.nav.features}</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>{copy.nav.categories}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>{copy.nav.faq}</a>
          </div>
          <label className="language-select">
            <span className="sr-only">{copy.nav.language}</span>
            <span aria-hidden="true">◎</span>
            <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)} aria-label={copy.nav.language}>
              {locales.map((item) => <option value={item} key={item}>{localeLabels[item]} · {item.toUpperCase()}</option>)}
            </select>
          </label>
          <a className="button button-small nav-cta" href="#download">{copy.nav.download} <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>✦</span> {copy.hero.eyebrow}</div>
            <h1>{copy.hero.titleStart}<br /><em>{copy.hero.titleEm}</em> {copy.hero.titleEnd}</h1>
            <p>{copy.hero.body}</p>
            <div className="hero-actions">
              <a className="button" href="#download">{copy.hero.primary} <span>↗</span></a>
              <a className="text-link" href="#how-it-works"><span className="play">▶</span> {copy.hero.secondary}</a>
            </div>
            <StoreBadges locale={locale} />
            <div className="micro-proof"><span className="spark-row">✦ ✦ ✦</span><span>{copy.hero.proof}</span></div>
          </div>
          <div className="hero-visual" aria-label={copy.hero.visualAria}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <Phone src={screens.onboarding} alt={copy.imageAlt.onboarding} className="phone-secondary" eager />
            <Phone src={screens.home} alt={copy.imageAlt.home} className="phone-primary" eager />
            <div className="floating-note note-top"><span>03:00</span><small>{copy.hero.reading}</small></div>
            <div className="floating-note note-bottom"><i>✦</i><span><b>{copy.hero.conversation}</b><small>{copy.hero.conversationNote}</small></span></div>
          </div>
        </div>
        <div className="hero-foot container"><span>{copy.hero.foot[0]}</span><i /><span>{copy.hero.foot[1]}</span><i /><span>{copy.hero.foot[2]}</span></div>
      </section>

      <section className="value section-pad">
        <div className="container">
          <div className="section-intro split-intro">
            <div><span className="section-number">01</span><p className="kicker">{copy.value.kicker}</p><h2>{copy.value.titleStart}<br /><em>{copy.value.titleEm}</em></h2></div>
            <p>{copy.value.body}</p>
          </div>
          <div className="value-cards">
            {copy.value.cards.map(([title, body], index) => <article className={index === 1 ? "featured" : ""} key={title}><span className="card-index">0{index + 1}</span><i className="value-icon">{["◴", "◎", "◇"][index]}</i><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="how section-pad" id="how-it-works">
        <div className="container">
          <div className="center-intro"><span className="eyebrow"><span>✦</span> {copy.how.eyebrow}</span><h2>{copy.how.titleStart}<br /><em>{copy.how.titleEm}</em></h2></div>
          <div className="steps">
            {copy.how.steps.map(([title, body], index) => {
              const image = [screens.onboarding, screens["story-detail"], screens.home][index];
              const alt = [copy.imageAlt.onboarding, copy.imageAlt.story, copy.imageAlt.home][index];
              return <article className={`step ${index === 1 ? "lifted" : ""}`} key={title}><div className="step-number">{index + 1}</div><Phone src={image} alt={alt} /><h3>{title}</h3><p>{body}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="features section-pad" id="features">
        <div className="container">
          <div className="section-intro feature-heading"><span className="section-number">02</span><p className="kicker">{copy.featuresHeading.kicker}</p><h2>{copy.featuresHeading.titleStart}<br /><em>{copy.featuresHeading.titleEm}</em></h2></div>
          <div className="feature-list">
            {copy.features.map((feature, index) => <article className={`feature-row ${index % 2 ? "reverse" : ""}`} key={feature.title}><div className="feature-visual"><span className="feature-count">0{index + 1}</span><div className="feature-shape" /><Phone src={screens[featureImages[index]]} alt={feature.alt} /></div><div className="feature-copy"><span className="eyebrow plain">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.body}</p><span className="feature-note"><i>✓</i>{feature.note}</span></div></article>)}
          </div>
        </div>
      </section>

      <section className="categories section-pad" id="categories">
        <div className="container">
          <div className="split-intro category-head"><div><span className="section-number">03</span><p className="kicker">{copy.category.kicker}</p><h2>{copy.category.titleStart} <em>{copy.category.titleEm}</em></h2></div><p>{copy.category.body}</p></div>
          <div className="category-grid">
            {copy.category.names.map((name, index) => <article className={`category-card ${categoryTones[index]}`} key={name}><span className="category-num">{String(index + 1).padStart(2, "0")}</span><i>{categoryIcons[index]}</i><h3>{name}</h3><span className="category-arrow">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="habit">
        <div className="habit-orbit" />
        <div className="container habit-grid">
          <div className="habit-copy"><span className="eyebrow dark"><span>✦</span> {copy.habit.eyebrow}</span><h2>{copy.habit.titleStart} <em>{copy.habit.titleEm}</em></h2><p>{copy.habit.body}</p>
            <div className="habit-stats"><div><strong>3<small>{copy.habit.minute}</small></strong><span>{copy.habit.goal}</span></div><div><strong>1<small>{copy.habit.ideaUnit}</small></strong><span>{copy.habit.idea}</span></div><div><strong>∞</strong><span>{copy.habit.connection}</span></div></div>
          </div>
          <div className="habit-visual"><div className="streak-pill"><span>🔥</span><b>{copy.habit.streak}</b></div><Phone src={screens.progress} alt={copy.imageAlt.progress} /><div className="badge-card"><span>✦</span><div><b>{copy.habit.badge}</b><small>{copy.habit.badgeNote}</small></div></div></div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="section-number">04</span><p className="kicker">{copy.faq.kicker}</p><h2>{copy.faq.titleStart}<br /><em>{copy.faq.titleEm}</em></h2><p>{copy.faq.body}</p><a href="#download" className="text-link">{copy.faq.ready} <span>↗</span></a></div>
          <div className="accordion">
            {copy.faq.items.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span><i>{String(index + 1).padStart(2, "0")}</i>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="download-spark spark-a">✦</div><div className="download-spark spark-b">✦</div>
        <div className="container download-inner"><Logo light /><span className="eyebrow dark"><span>✦</span> {copy.download.eyebrow}</span><h2>{copy.download.titleStart}<br /><em>{copy.download.titleEm}</em></h2><p>{copy.download.body}</p><a href="#top" className="button button-light">{copy.download.button} <span>↗</span></a><StoreBadges locale={locale} inverse /></div>
      </section>

      <footer>
        <div className="container footer-grid"><div><Logo /><p>{copy.footer.description}</p></div><div className="footer-links"><a href="#how-it-works">{copy.nav.how}</a><a href="#features">{copy.nav.features}</a><a href="#categories">{copy.nav.categories}</a><a href="#faq">{copy.nav.faq}</a><a href="/privacy">{copy.legal.privacy}</a><a href="/support">{copy.legal.support}</a><a href="/terms">{copy.legal.terms}</a><a href="/data-deletion">{copy.legal.deletion}</a></div><div><p className="footer-label">{copy.footer.coming}</p><StoreBadges locale={locale} /></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Albor</span><span>{copy.footer.spark}</span></div>
      </footer>
    </main>
  );
}
