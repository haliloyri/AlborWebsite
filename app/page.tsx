"use client";

import { useEffect, useState } from "react";
import { homePath } from "./locale-paths";
import { siteConfig } from "./site-config";
import { localeLabels, locales, translations, type Locale } from "./translations";
import { WaitlistForm } from "./waitlist-form";

const featureImages = ["home", "story-detail", "library", "progress", "profile"] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`} aria-label="Albor">
      <img className="brand-mark" src="/albor-brand-mark-v2.png" alt="" width="512" height="512" aria-hidden="true" />
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
        <button className="store-badge" key={store.label} title={copy.coming} disabled aria-disabled="true">
          <span className="store-symbol" aria-hidden="true">{store.symbol}</span>
          <span><small>{store.overline}</small><strong>{store.label}</strong></span>
        </button>
      ))}
    </div>
  );
}

function Phone({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <figure className={`phone ${className}`}><img src={src} alt={alt} loading={eager ? "eager" : "lazy"} /></figure>;
}

export default function Home({ initialLocale = siteConfig.defaultLocale }: { initialLocale?: Locale }) {
  const [locale] = useState<Locale>(initialLocale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const copy = translations[locale];
  const screens = siteConfig.screenshots[locale];

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLocale = (next: Locale) => {
    if (next !== locale) window.location.assign(homePath(next));
  };

  return (
    <main>
      <header className="nav-wrap">
        <a className="waitlist-banner" href="#download">
          {copy.download.button}
          <b aria-hidden="true">→</b>
        </a>
        <nav className="nav container" aria-label={copy.nav.aria}>
          <a href={`${homePath(locale)}#top`} className="logo-link"><Logo /></a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span className="sr-only">{copy.nav.menu}</span>
          </button>
          <div id="mobile-menu" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>{copy.nav.how}</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>{copy.nav.features}</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>{copy.nav.categories}</a>
            <a href="#community" onClick={() => setMenuOpen(false)}>{copy.nav.community}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>{copy.nav.faq}</a>
            <a href="https://alborapp.com/support" onClick={() => setMenuOpen(false)}>{copy.legal.support}</a>
          </div>
          <label className="language-select">
            <span className="sr-only">{copy.nav.language}</span>
            <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)} aria-label={copy.nav.language}>
              {locales.map((item) => <option value={item} key={item}>{localeLabels[item]} · {item.toUpperCase()}</option>)}
            </select>
          </label>
          <a className="button button-small nav-cta" href="#download">{copy.nav.download} <span className="download-icon" aria-hidden="true"><span /></span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-sun" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{copy.hero.eyebrow}</div>
            <h1>{copy.hero.titleStart}<br /><em>{copy.hero.titleEm}</em> {copy.hero.titleEnd}</h1>
            <p>{copy.hero.body}</p>
            <div className="hero-actions">
              <a className="button" href="#download">{copy.hero.primary} <span className="download-icon" aria-hidden="true"><span /></span></a>
              <a className="text-link" href="#how-it-works">{copy.hero.secondary}</a>
            </div>
            <StoreBadges locale={locale} />
            <p className="micro-proof">{copy.hero.proof}</p>
          </div>
          <div className="hero-visual" aria-label={copy.hero.visualAria}>
            <div className="hero-clock" aria-hidden="true">03<i>:</i>00</div>
            <Phone src={screens.onboarding} alt={copy.imageAlt.onboarding} className="phone-secondary" eager />
            <Phone src={screens.home} alt={copy.imageAlt.home} className="phone-primary" eager />
            <div className="floating-note note-top"><span>03:00</span><small>{copy.hero.reading}</small></div>
            <div className="floating-note note-bottom"><span><b>{copy.hero.conversation}</b><small>{copy.hero.conversationNote}</small></span></div>
          </div>
        </div>
        <div className="hero-foot container"><span>{copy.hero.foot[0]}</span><i /><span>{copy.hero.foot[1]}</span><i /><span>{copy.hero.foot[2]}</span></div>
      </section>

      <section className="value section-pad">
        <div className="container">
          <div className="section-intro split-intro">
            <div><p className="kicker">{copy.value.kicker}</p><h2>{copy.value.titleStart}<br /><em>{copy.value.titleEm}</em></h2></div>
            <p>{copy.value.body}</p>
          </div>
          <div className="value-cards">
            {copy.value.cards.map(([title, body], index) => <article className={index === 1 ? "featured" : ""} key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="how section-pad" id="how-it-works">
        <div className="container">
          <div className="center-intro"><span className="eyebrow">{copy.how.eyebrow}</span><h2>{copy.how.titleStart}<br /><em>{copy.how.titleEm}</em></h2></div>
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
          <div className="section-intro feature-heading"><p className="kicker">{copy.featuresHeading.kicker}</p><h2>{copy.featuresHeading.titleStart}<br /><em>{copy.featuresHeading.titleEm}</em></h2></div>
          <div className="feature-list">
            {copy.features.map((feature, index) => <article className={`feature-row ${index % 2 ? "reverse" : ""}`} key={feature.title}><div className="feature-visual"><div className="feature-shape" /><Phone src={screens[featureImages[index]]} alt={feature.alt} /></div><div className="feature-copy"><span className="eyebrow plain">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.body}</p><span className="feature-note">{feature.note}</span></div></article>)}
          </div>
        </div>
      </section>

      <section className="categories section-pad" id="categories">
        <div className="container">
          <div className="split-intro category-head"><div><p className="kicker">{copy.category.kicker}</p><h2>{copy.category.titleStart} <em>{copy.category.titleEm}</em></h2></div><p>{copy.category.body}</p></div>
          <div className="category-grid">
            {copy.category.names.map((name) => <article className="category-card" key={name}><h3>{name}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="habit">
                <div className="container habit-grid">
          <div className="habit-copy"><span className="eyebrow dark">{copy.habit.eyebrow}</span><h2>{copy.habit.titleStart} <em>{copy.habit.titleEm}</em></h2><p>{copy.habit.body}</p>
            <div className="habit-stats"><div><strong>3<small>{copy.habit.minute}</small></strong><span>{copy.habit.goal}</span></div><div><strong>1<small>{copy.habit.ideaUnit}</small></strong><span>{copy.habit.idea}</span></div><div><strong>∞</strong><span>{copy.habit.connection}</span></div></div>
          </div>
          <div className="habit-visual"><div className="streak-pill"><b>{copy.habit.streak}</b></div><Phone src={screens.progress} alt={copy.imageAlt.progress} /><div className="badge-card"><div><b>{copy.habit.badge}</b><small>{copy.habit.badgeNote}</small></div></div></div>
        </div>
      </section>

      <section className="community section-pad" id="community">
        <div className="container community-card">
                    <div className="community-copy">
            <span className="eyebrow">{copy.community.eyebrow}</span>
            <h2>{copy.community.titleStart}<br /><em>{copy.community.titleEm}</em></h2>
            <p>{copy.community.body}</p>
            <a className="button" href={siteConfig.communityUrl} target="_blank" rel="noreferrer">{copy.community.button} <span>↗</span></a>
            <small>{copy.community.note}</small>
          </div>
          <div className="community-conversations" aria-hidden="true">
            <article><div><i /><i /><i /></div></article>
            <article><div><i /><i /><i /></div></article>
            <article><div><i /><i /></div></article>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><p className="kicker">{copy.faq.kicker}</p><h2>{copy.faq.titleStart}<br /><em>{copy.faq.titleEm}</em></h2><p>{copy.faq.body}</p><a href="#download" className="text-link">{copy.faq.ready} <span className="download-icon" aria-hidden="true"><span /></span></a></div>
          <div className="accordion">
            {copy.faq.items.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="download" id="download">
                <div className="container download-inner"><Logo light /><span className="eyebrow dark">{copy.download.eyebrow}</span><h2>{copy.download.titleStart}<br /><em>{copy.download.titleEm}</em></h2><p>{copy.download.body}</p><WaitlistForm locale={locale} copy={copy.waitlist} /><StoreBadges locale={locale} inverse /></div>
      </section>

      <footer>
        <div className="container footer-grid"><div><Logo /><p>{copy.footer.description}</p></div><div className="footer-links"><a href="#how-it-works">{copy.nav.how}</a><a href="#features">{copy.nav.features}</a><a href="#categories">{copy.nav.categories}</a><a href="#community">{copy.nav.community}</a><a href="#faq">{copy.nav.faq}</a><a href="https://alborapp.com/privacy">{copy.legal.privacy}</a><a href="https://alborapp.com/terms">{copy.legal.terms}</a><a href="https://alborapp.com/refund">İade ve İptal</a><a href="https://alborapp.com/support">{copy.legal.support}</a></div><div><p className="footer-label">{copy.footer.coming}</p><StoreBadges locale={locale} /></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Albor</span><span>{copy.footer.spark}</span></div>
      </footer>
    </main>
  );
}
