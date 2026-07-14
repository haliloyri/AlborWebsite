"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "./site-config";

const categories = [
  { name: "Psikoloji", icon: "◌", tone: "lilac" },
  { name: "Felsefe", icon: "Φ", tone: "violet" },
  { name: "Finans", icon: "◒", tone: "gold" },
  { name: "Liderlik", icon: "⚑", tone: "blue" },
  { name: "Tarih", icon: "⌂", tone: "sand" },
  { name: "Bilim", icon: "✧", tone: "sky" },
  { name: "Sağlık", icon: "♡", tone: "teal" },
  { name: "İletişim", icon: "◍", tone: "orange" },
  { name: "Verimlilik", icon: "✓", tone: "green" },
  { name: "Kişisel Gelişim", icon: "↗", tone: "sage" },
];

const features = [
  {
    eyebrow: "Kişisel plan",
    title: "Her güne sana özel bir rota.",
    body: "İlgi alanlarını ve ayırmak istediğin zamanı seç. Albor, merakına uyan fikirleri senin için düzenlesin.",
    image: siteConfig.screenshots.home,
    alt: "Albor ana ekranında kişiselleştirilmiş günlük okuma planı",
    note: "İlgi alanlarına göre güncellenen seçki",
  },
  {
    eyebrow: "Kısa hikâyeler",
    title: "Büyük fikirler, akılda kalan anlatılar.",
    body: "Yoğun kitapların özündeki düşünceler; sade, sürükleyici ve yaklaşık 3 dakikada okunabilen hikâyelere dönüşür.",
    image: siteConfig.screenshots.storyDetail,
    alt: "Albor uygulamasında kısa bir hikâyenin detay sayfası",
    note: "Oku veya sesli dinle",
  },
  {
    eyebrow: "Kişisel kütüphane",
    title: "Dönmek istediğin her fikir, tek yerde.",
    body: "Favorilerini, daha sonra okuyacaklarını ve tamamladığın içerikleri düzenli bir bilgi arşivinde biriktir.",
    image: siteConfig.screenshots.library,
    alt: "Albor kişisel kütüphane ve favoriler ekranı",
    note: "Favoriler ve okuma geçmişi",
  },
  {
    eyebrow: "İlerleme",
    title: "Küçük adımlarını görünür kıl.",
    body: "Günlük hedefler, okuma serileri, istatistikler ve rozetlerle merakını sürdürülebilir bir alışkanlığa dönüştür.",
    image: siteConfig.screenshots.progress,
    alt: "Albor okuma serisi, istatistikler ve başarı rozetleri ekranı",
    note: "Hedefler, seriler ve rozetler",
  },
  {
    eyebrow: "Sana göre",
    title: "Okuma ritmini kendin belirle.",
    body: "Dil, tema, bildirim saati ve günlük süre tercihlerini yönet. Albor gününe değil, günün Albor’a uysun.",
    image: siteConfig.screenshots.profile,
    alt: "Albor profilinde okuma süresi ve bildirim tercihleri",
    note: "Açık ve koyu tema desteği",
  },
];

const faqs = [
  ["Albor nedir?", "Albor, etkili kitaplardan ve farklı bilgi alanlarından seçilen fikirleri kısa, anlaşılır ve akılda kalıcı hikâyelere dönüştüren bir mobil uygulamadır."],
  ["Hikâyeleri okumak ne kadar sürer?", "Çoğu hikâye yaklaşık 3 dakikada okunacak şekilde hazırlanır. Günlük planını ayırabildiğin zamana göre kişiselleştirebilirsin."],
  ["İçerikler hangi kategorilerde sunuluyor?", "Psikoloji, felsefe, finans, liderlik, tarih, bilim, sağlık, iletişim, verimlilik ve kişisel gelişim gibi birçok alanda içerik bulunur."],
  ["Hikâyeleri sesli dinleyebilir miyim?", "Evet. Uygun olduğunda hikâyeleri okuyabilir veya sesli anlatımla dinleyebilirsin."],
  ["Okuduklarımı kaydedebilir miyim?", "Evet. Beğendiğin fikirleri favorilerine ekleyebilir ve kişisel kütüphanende daha sonra yeniden bulabilirsin."],
  ["Albor Premium neler sunar?", "Premium üyelik, Albor içeriklerine ve premium deneyime sınırsız erişim sunar. Güncel kapsam ve koşullar uygulama içinde gösterilir."],
  ["Uygulama hangi dilleri destekler?", "Desteklenen güncel diller uygulamanın ayarlar ve mağaza sayfalarında listelenir."],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand ${light ? "brand-light" : ""}`} aria-label="Albor">
      <span className="brand-mark" aria-hidden="true"><i>✦</i></span>
      <span className="brand-name">Albor</span>
    </span>
  );
}

function StoreBadges({ inverse = false }: { inverse?: boolean }) {
  const stores = [
    { label: "App Store", overline: "App Store’dan", symbol: "●" },
    { label: "Google Play", overline: "Google Play’den", symbol: "▶" },
  ];
  return (
    <div className={`store-badges ${inverse ? "inverse" : ""}`} aria-label="Uygulama mağazaları">
      {stores.map((store) => (
        <span className="store-badge" key={store.label} title="Mağaza bağlantısı yakında eklenecek">
          <span className="store-symbol" aria-hidden="true">{store.symbol}</span>
          <span><small>{store.overline}</small><strong>{store.label}</strong></span>
        </span>
      ))}
    </div>
  );
}

function Phone({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`phone ${className}`}>
      <span className="phone-speaker" aria-hidden="true" />
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
    </figure>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Ana menü">
          <a href="#top" className="logo-link"><Logo /></a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
            <span className="sr-only">Menüyü aç</span>
          </button>
          <div id="mobile-menu" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#nasil-calisir" onClick={() => setMenuOpen(false)}>Nasıl Çalışır?</a>
            <a href="#ozellikler" onClick={() => setMenuOpen(false)}>Özellikler</a>
            <a href="#kategoriler" onClick={() => setMenuOpen(false)}>Kategoriler</a>
            <a href="#sss" onClick={() => setMenuOpen(false)}>Sık Sorulanlar</a>
          </div>
          <a className="button button-small nav-cta" href="#indir">Uygulamayı İndir <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>✦</span> Her gün yeni bir kıvılcım</div>
            <h1>Her gün 3 dakika.<br /><em>Ömür boyu</em> seninle kalacak fikirler.</h1>
            <p>Albor, dünyanın en etkili kitaplarındaki fikirleri kısa ve akılda kalıcı hikâyelere dönüştürür. Oku, hatırla ve sohbetlerinde kullan.</p>
            <div className="hero-actions">
              <a className="button" href="#indir">Albor’u İndir <span>↗</span></a>
              <a className="text-link" href="#nasil-calisir"><span className="play">▶</span> Nasıl Çalıştığını Gör</a>
            </div>
            <StoreBadges />
            <div className="micro-proof"><span className="spark-row">✦ ✦ ✦</span><span>Okumayı küçük ve sürdürülebilir bir ritüele dönüştür.</span></div>
          </div>
          <div className="hero-visual" aria-label="Albor uygulamasından ekranlar">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <Phone src={siteConfig.screenshots.onboarding} alt="Albor ilgi alanı seçimi ekranı" className="phone-secondary" eager />
            <Phone src={siteConfig.screenshots.home} alt="Albor ana ekranında günlük okuma planı" className="phone-primary" eager />
            <div className="floating-note note-top"><span>03:00</span><small>Bugünün okuması</small></div>
            <div className="floating-note note-bottom"><i>✦</i><span><b>Sohbette Kullan</b><small>Fikri hayatına taşı</small></span></div>
          </div>
        </div>
        <div className="hero-foot container"><span>Dünyanın büyük fikirleri</span><i /><span>Her gün, sana özel</span><i /><span>Okunur · Dinlenir · Hatırlanır</span></div>
      </section>

      <section className="value section-pad">
        <div className="container">
          <div className="section-intro split-intro">
            <div><span className="section-number">01</span><p className="kicker">Özetten daha fazlası</p><h2>Okuduğunu unutma.<br /><em>Hayatının bir parçası yap.</em></h2></div>
            <p>Albor yalnızca ne söylendiğini kısaltmaz. Karmaşık fikirleri zihninde yer edecek hikâyelere dönüştürür; her gün öğrenmeni ve öğrendiğini gerçek hayatta kullanmanı kolaylaştırır.</p>
          </div>
          <div className="value-cards">
            <article><span className="card-index">01</span><i className="value-icon">◴</i><h3>3 dakikada yeni bir fikir</h3><p>Yoğun günlerde bile merakına yer açan, kısa ve etkili okumalar.</p></article>
            <article className="featured"><span className="card-index">02</span><i className="value-icon">◎</i><h3>İlgi alanlarına göre kişisel plan</h3><p>Sen seç, Albor her gün merakına göre yeni bir rota hazırlasın.</p></article>
            <article><span className="card-index">03</span><i className="value-icon">◇</i><h3>Öğrendiğini sohbetlerinde kullan</h3><p>Fikirleri kısa anlatımlara dönüştür, hatırla ve doğru anda paylaş.</p></article>
          </div>
        </div>
      </section>

      <section className="how section-pad" id="nasil-calisir">
        <div className="container">
          <div className="center-intro"><span className="eyebrow"><span>✦</span> Nasıl çalışır?</span><h2>Meraktan alışkanlığa,<br /><em>üç küçük adımda.</em></h2></div>
          <div className="steps">
            <article className="step">
              <div className="step-number">1</div><Phone src={siteConfig.screenshots.onboarding} alt="İlgi alanlarını seçme ekranı" />
              <h3>Merak ettiğin alanları seç</h3><p>Psikoloji, finans, felsefe, liderlik ve daha fazlasından ilgini çekenleri belirle.</p>
            </article>
            <article className="step lifted">
              <div className="step-number">2</div><Phone src={siteConfig.screenshots.storyDetail} alt="Kısa hikâye okuma ve dinleme ekranı" />
              <h3>Günlük hikâyeni oku veya dinle</h3><p>En önemli fikirleri yaklaşık 3 dakikada, sana uygun biçimde öğren.</p>
            </article>
            <article className="step">
              <div className="step-number">3</div><Phone src={siteConfig.screenshots.home} alt="Günlük plan ve hikâyeler ekranı" />
              <h3>Hatırla ve kullan</h3><p>Fikri favorilerine ekle, paylaş veya bir sonraki sohbetinde kullan.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="features section-pad" id="ozellikler">
        <div className="container">
          <div className="section-intro feature-heading"><span className="section-number">02</span><p className="kicker">Albor deneyimi</p><h2>Merakına eşlik eden<br /><em>kişisel bilgi alanın.</em></h2></div>
          <div className="feature-list">
            {features.map((feature, index) => (
              <article className={`feature-row ${index % 2 ? "reverse" : ""}`} key={feature.title}>
                <div className="feature-visual"><span className="feature-count">0{index + 1}</span><div className="feature-shape" /><Phone src={feature.image} alt={feature.alt} /></div>
                <div className="feature-copy"><span className="eyebrow plain">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.body}</p><span className="feature-note"><i>✓</i>{feature.note}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="categories section-pad" id="kategoriler">
        <div className="container">
          <div className="split-intro category-head"><div><span className="section-number">03</span><p className="kicker">Keşfet</p><h2>Merak ettiğin her konu için <em>yeni bir kıvılcım.</em></h2></div><p>Bugün zihnini hangi konuya açmak istersin? Birini seç; gerisini Albor senin için hazırlasın.</p></div>
          <div className="category-grid">
            {categories.map((category, i) => <article className={`category-card ${category.tone}`} key={category.name}><span className="category-num">{String(i + 1).padStart(2, "0")}</span><i>{category.icon}</i><h3>{category.name}</h3><span className="category-arrow">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="habit">
        <div className="habit-orbit" />
        <div className="container habit-grid">
          <div className="habit-copy"><span className="eyebrow dark"><span>✦</span> Günlük alışkanlığın</span><h2>Bir kitap bitirmek zorunda değilsin. <em>Bugün yalnızca bir fikirle başla.</em></h2><p>Albor, yoğun günlerin arasında sürdürebileceğin küçük ama etkili bir okuma ritüeli oluşturur.</p>
            <div className="habit-stats"><div><strong>3<small>dk</small></strong><span>Günlük hedef</span></div><div><strong>1<small>fikir</small></strong><span>Bugünün kıvılcımı</span></div><div><strong>∞</strong><span>Yeni bağlantı</span></div></div>
          </div>
          <div className="habit-visual"><div className="streak-pill"><span>🔥</span><b>7 günlük seri</b></div><Phone src={siteConfig.screenshots.progress} alt="Albor günlük hedef, okuma serisi ve rozet ekranı" /><div className="badge-card"><span>✦</span><div><b>İlk Kıvılcım</b><small>Başarı rozeti</small></div></div></div>
        </div>
      </section>

      <section className="faq section-pad" id="sss">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="section-number">04</span><p className="kicker">Merak edilenler</p><h2>Aklında<br /><em>soru kalmasın.</em></h2><p>Albor deneyimine dair en sık sorulan soruları burada yanıtladık.</p><a href="#indir" className="text-link">Başlamaya hazırım <span>↗</span></a></div>
          <div className="accordion">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span><i>{String(index + 1).padStart(2, "0")}</i>{question}</span><b aria-hidden="true">+</b></button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="download" id="indir">
        <div className="download-spark spark-a">✦</div><div className="download-spark spark-b">✦</div>
        <div className="container download-inner"><Logo light /><span className="eyebrow dark"><span>✦</span> Sıradaki fikir</span><h2>Bugünün fikri<br /><em>seni bekliyor.</em></h2><p>Her gün birkaç dakika ayır. Daha çok öğren, daha iyi hatırla ve anlatacak yeni şeyler biriktir.</p><a href="#top" className="button button-light">Albor’u Ücretsiz İndir <span>↗</span></a><StoreBadges inverse /></div>
      </section>

      <footer>
        <div className="container footer-grid"><div><Logo /><p>Dünyanın büyük fikirlerini her gün birkaç dakikada hayatına taşı.</p></div><div className="footer-links"><a href="#nasil-calisir">Nasıl Çalışır?</a><a href="#ozellikler">Özellikler</a><a href="#kategoriler">Kategoriler</a><a href="#sss">Sık Sorulanlar</a></div><div><p className="footer-label">Yakında mağazalarda</p><StoreBadges /></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Albor</span><span>Her gün yeni bir kıvılcım ✦</span></div>
      </footer>
    </main>
  );
}
