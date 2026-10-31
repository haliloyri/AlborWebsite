"use client";

import { useEffect, useState } from "react";
import { DemoStories } from "./demo-stories-section";
import { homePath } from "./locale-paths";
import { siteConfig } from "./site-config";
import { localeLabels, locales, translations, type Locale } from "./translations";
import { WaitlistForm } from "./waitlist-form";

const categoryIcons = ["◌", "Φ", "◒", "⚑", "⌂", "✧", "♡", "◍", "✓", "↗"];
const categoryTones = ["lilac", "violet", "gold", "blue", "sand", "sky", "teal", "orange", "green", "sage"];
const featureImages = ["home", "story-detail", "library", "progress", "profile"] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`} aria-label="Albor">
      <img className="brand-mark" src="/albor-brand-mark-v2.png" alt="" width="512" height="512" aria-hidden="true" />
      <span className="brand-name">Albor</span>
    </span>
  );
}

function StoreIcon({ store }: { store: "apple" | "google-play" }) {
  if (store === "apple") {
    return (
      <svg className="store-icon store-icon-apple" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.1ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
      </svg>
    );
  }

  return (
    <svg className="store-icon store-icon-google-play" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00d7fe" d="M3.37 2.27c-.24.28-.37.7-.37 1.22v17.02c0 .52.13.94.37 1.22l.06.06L12.96 12v-.23L3.43 2.21l-.06.06Z" />
      <path fill="#ffce00" d="m16.14 15.2-3.18-3.2v-.23l3.18-3.2.07.04 3.77 2.15c1.08.61 1.08 1.62 0 2.24l-3.77 2.16-.07.04Z" />
      <path fill="#00f076" d="m16.21 15.16-3.25-3.28-9.59 9.85c.36.38.94.43 1.61.05l11.23-6.62Z" />
      <path fill="#f63448" d="M16.21 8.61 4.98 2c-.67-.39-1.25-.33-1.61.05l9.59 9.83 3.25-3.27Z" />
    </svg>
  );
}

function StoreBadges({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  const copy = translations[locale].store;
  const stores = [
    { id: "apple" as const, label: "App Store", overline: copy.appStoreOverline },
    { id: "google-play" as const, label: "Google Play", overline: copy.googlePlayOverline },
  ];
  return (
    <div className={`store-badges ${inverse ? "inverse" : ""}`} aria-label={copy.aria}>
      {stores.map((store) => (
        <button className="store-badge" key={store.label} title={copy.coming} disabled aria-disabled="true">
          <StoreIcon store={store.id} />
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
  const [activeFeature, setActiveFeature] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const copy = translations[locale];
  const activeFeatureData = copy.features[activeFeature];
  const screens = siteConfig.screenshots[locale];

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const download = document.getElementById("download");
      const nearDownload = download ? download.getBoundingClientRect().top < window.innerHeight : false;
      setShowSticky(window.scrollY > 640 && !nearDownload);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <span aria-hidden="true">✦</span>
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
            <a href="#stories" onClick={() => setMenuOpen(false)}>{copy.nav.stories}</a>
            <a href="#categories" onClick={() => setMenuOpen(false)}>{copy.nav.categories}</a>
            <a href="#community" onClick={() => setMenuOpen(false)}>{copy.nav.community}</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>{copy.nav.faq}</a>
            <a href="https://alborapp.com/support" onClick={() => setMenuOpen(false)}>{copy.legal.support}</a>
          </div>
          <label className="language-select">
            <span className="sr-only">{copy.nav.language}</span>
            <span aria-hidden="true">◎</span>
            <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)} aria-label={copy.nav.language}>
              {locales.map((item) => <option value={item} key={item}>{localeLabels[item]} · {item.toUpperCase()}</option>)}
            </select>
          </label>
          <a className="button button-small nav-cta" href="#download">{copy.nav.download} <span className="download-icon" aria-hidden="true"><span /></span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-sun" aria-hidden="true" />
        <div className="container hero-center">
          <div className="eyebrow"><span>✦</span> {copy.hero.eyebrow}</div>
          <h1>{copy.hero.titleStart}<br /><em>{copy.hero.titleEm}</em> {copy.hero.titleEnd}</h1>
          <p>{copy.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-sun" href="#download">{copy.hero.primary} <span className="download-icon" aria-hidden="true"><span /></span></a>
            <a className="text-link" href="#how-it-works"><span className="play">▶</span> {copy.hero.secondary}</a>
          </div>
          <StoreBadges locale={locale} inverse />
        </div>
        <div className="hero-stage" aria-label={copy.hero.visualAria}>
          <Phone src={screens["story-detail"]} alt={copy.imageAlt.story} className="stage-left" eager />
          <Phone src={screens.home} alt={copy.imageAlt.home} className="stage-main" eager />
          <Phone src={screens.progress} alt={copy.imageAlt.progress} className="stage-right" eager />
          <div className="floating-note note-top"><span aria-hidden="true">✦</span><small>{copy.hero.reading}</small></div>
          <div className="floating-note note-bottom"><i>✦</i><span><b>{copy.hero.conversation}</b><small>{copy.hero.conversationNote}</small></span></div>
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
          <div className="showcase">
            <div className="showcase-tabs" role="tablist" aria-label={copy.featuresHeading.kicker}>
              {copy.features.map((feature, index) => <button role="tab" id={`feature-tab-${index}`} aria-selected={activeFeature === index} aria-controls="feature-panel" tabIndex={activeFeature === index ? 0 : -1} className={activeFeature === index ? "active" : ""} key={feature.title} onClick={() => setActiveFeature(index)}><span>0{index + 1}</span>{feature.eyebrow}</button>)}
            </div>
            <div className="showcase-panel" id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${activeFeature}`}>
              <div className="showcase-copy" key={`copy-${activeFeature}`}><h3>{activeFeatureData.title}</h3><p>{activeFeatureData.body}</p><span className="feature-note"><i>✓</i>{activeFeatureData.note}</span></div>
              <div className="showcase-visual"><div className="feature-shape" /><Phone key={`phone-${activeFeature}`} src={screens[featureImages[activeFeature]]} alt={activeFeatureData.alt} /></div>
            </div>
          </div>
        </div>
      </section>

      <DemoStories locale={locale} />

      <section className="categories section-pad" id="categories">
        <div className="container">
          <div className="split-intro category-head"><div><span className="section-number">03</span><p className="kicker">{copy.category.kicker}</p><h2>{copy.category.titleStart} <em>{copy.category.titleEm}</em></h2></div><p>{copy.category.body}</p></div>
          <ul className="category-cloud">
            {copy.category.names.map((name, index) => <li className={`category-pill ${categoryTones[index]}`} key={name}><i aria-hidden="true">{categoryIcons[index]}</i>{name}</li>)}
          </ul>
        </div>
      </section>

      <section className="habit">
        <div className="habit-orbit" />
        <div className="container habit-grid">
          <div className="habit-copy"><span className="eyebrow dark"><span>✦</span> {copy.habit.eyebrow}</span><h2>{copy.habit.titleStart} <em>{copy.habit.titleEm}</em></h2><p>{copy.habit.body}</p>
            <div className="habit-stats"><div><strong>365</strong><span>{copy.habit.goal}</span></div><div><strong>1<small>{copy.habit.ideaUnit}</small></strong><span>{copy.habit.idea}</span></div><div><strong>∞</strong><span>{copy.habit.connection}</span></div></div>
          </div>
          <div className="habit-visual"><div className="streak-pill"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#c8531f" d="M12.5 2s.7 3.6-1.6 6.1C8.8 10.3 6 12.2 6 15.8 6 19.2 8.7 22 12 22s6-2.800 6-6.200c0-2.400-1.200-4.100-2.300-5.300-.2 1.300-.9 2.200-1.800 2.600.4-3.600-.5-8.200-1.400-11.100Z" /></svg><b>{copy.habit.streak}</b></div><Phone src={screens.progress} alt={copy.imageAlt.progress} /><div className="badge-card"><span>✦</span><div><b>{copy.habit.badge}</b><small>{copy.habit.badgeNote}</small></div></div></div>
        </div>
      </section>

      <section className="community section-pad" id="community">
        <div className="container community-card">
          <div className="community-orbit community-orbit-one" /><div className="community-orbit community-orbit-two" />
          <div className="community-copy">
            <span className="eyebrow"><span>✦</span> {copy.community.eyebrow}</span>
            <h2>{copy.community.titleStart}<br /><em>{copy.community.titleEm}</em></h2>
            <p>{copy.community.body}</p>
            <a className="button" href={siteConfig.communityUrl} target="_blank" rel="noreferrer">{copy.community.button} <span>↗</span></a>
            <small>{copy.community.note}</small>
          </div>
          <div className="community-conversations" aria-hidden="true">
            <article><span>01</span><div><b>✦</b><i /><i /></div></article>
            <article><span>02</span><div><b>◌</b><i /><i /></div></article>
            <article><span>03</span><div><b>◎</b><i /><i /></div></article>
          </div>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="section-number">04</span><p className="kicker">{copy.faq.kicker}</p><h2>{copy.faq.titleStart}<br /><em>{copy.faq.titleEm}</em></h2><p>{copy.faq.body}</p><a href="#download" className="text-link">{copy.faq.ready} <span className="download-icon" aria-hidden="true"><span /></span></a></div>
          <div className="accordion">
            {copy.faq.items.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span><i>{String(index + 1).padStart(2, "0")}</i>{question}</span><b aria-hidden="true">+</b></button><div className="faq-answer"><p>{answer}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="download-spark spark-a">✦</div><div className="download-spark spark-b">✦</div>
        <div className="container download-inner"><Logo light /><span className="eyebrow dark"><span>✦</span> {copy.download.eyebrow}</span><h2>{copy.download.titleStart}<br /><em>{copy.download.titleEm}</em></h2><p>{copy.download.body}</p><WaitlistForm locale={locale} copy={copy.waitlist} /><StoreBadges locale={locale} inverse /></div>
      </section>

      <footer>
        <div className="container footer-grid"><div><Logo /><p>{copy.footer.description}</p></div><div className="footer-links"><a href="#how-it-works">{copy.nav.how}</a><a href="#features">{copy.nav.features}</a><a href="#categories">{copy.nav.categories}</a><a href="#community">{copy.nav.community}</a><a href="#faq">{copy.nav.faq}</a><a href="https://alborapp.com/privacy">{copy.legal.privacy}</a><a href="https://alborapp.com/terms">{copy.legal.terms}</a><a href="https://alborapp.com/refund">{copy.legal.refund}</a><a href="https://alborapp.com/support">{copy.legal.support}</a></div><div><p className="footer-label">{copy.footer.coming}</p><StoreBadges locale={locale} /></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Albor</span><span>{copy.footer.spark}</span></div>
      </footer>
      <a className={`sticky-cta ${showSticky ? "show" : ""}`} href="#download" tabIndex={showSticky ? 0 : -1} aria-hidden={!showSticky}>{copy.download.button} <b aria-hidden="true">→</b></a>
    </main>
  );
}
