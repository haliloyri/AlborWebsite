import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İade ve İptal Politikası | Albor",
  description: "Albor aboneliklerinin iptali ve iade süreçlerine ilişkin bilgiler.",
  alternates: { canonical: "https://alborapp.com/refund" },
};

const links = [
  ["Gizlilik Politikası", "https://alborapp.com/privacy"],
  ["Kullanım Koşulları", "https://alborapp.com/terms"],
  ["İade ve İptal", "https://alborapp.com/refund"],
  ["Destek", "https://alborapp.com/support"],
] as const;

export default function RefundPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="container legal-nav">
          <a href="https://alborapp.com" className="brand" aria-label="Albor ana sayfa"><span className="brand-mark" aria-hidden="true"><i>✦</i></span><span className="brand-name">Albor</span></a>
          <nav aria-label="Yasal sayfalar">{links.map(([label, href]) => <a className={href.endsWith("/refund") ? "active" : ""} href={href} key={href}>{label}</a>)}</nav>
        </div>
      </header>
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <a href="https://alborapp.com" className="legal-back">← Albor’a dön</a>
          <span className="eyebrow"><span>✦</span> Abonelik bilgileri</span>
          <h1>İade ve İptal Politikası</h1>
          <p>Albor aboneliklerinin satın alma, iptal ve iade süreçleri ilgili uygulama mağazasının kurallarına tabidir.</p>
          <div className="legal-meta"><span>Son güncelleme</span><strong>29 Temmuz 2026</strong></div>
        </div>
      </section>
      <section className="legal-content">
        <article className="container legal-article">
          <section className="legal-section"><h2>Abonelikler nereden satın alınır?</h2><p>Albor abonelikleri Apple App Store veya Google Play üzerinden satın alınır. Ödeme, faturalandırma, iptal ve iade işlemleri satın alımın yapıldığı mağazanın kurallarına ve hesabınıza bağlıdır.</p></section>
          <section className="legal-section"><h2>Aboneliği iptal etme</h2><p>Aboneliğinizi Apple App Store veya Google Play hesap ayarlarınızdan yönetebilir ve iptal edebilirsiniz. İptal, sonraki yenilemeyi durdurur; mevcut erişiminiz, geçerli abonelik döneminin sonuna kadar devam edebilir.</p></section>
          <section className="legal-section"><h2>İade başvuruları</h2><p>İade talepleri için satın alımı yaptığınız mağazanın resmî sürecini kullanın. İade kararları ilgili mağaza tarafından verilir; Albor bu kararları veremez veya değiştiremez.</p><ul><li><a className="inline-email" href="https://support.apple.com/en-us/118223">Apple’dan satın alınanlar için iade talebi</a></li><li><a className="inline-email" href="https://support.google.com/googleplay/answer/2479637">Google Play’den satın alınanlar için iade talebi</a></li></ul></section>
          <section className="legal-section"><h2>Destek</h2><p>Satın alma, abonelik veya erişimle ilgili yardım için <a className="inline-email" href="mailto:info@alborapp.com">info@alborapp.com</a> adresine yazabilirsiniz. Lütfen ödeme kartı bilgisi veya başka hassas kişisel bilgiler göndermeyin.</p><p>Albor, gerçek koşulları belirtilmedikçe deneme süresi, kampanya veya iade garantisi sunmaz.</p></section>
        </article>
      </section>
      <footer className="legal-footer"><div className="container legal-footer-inner"><a href="https://alborapp.com" className="brand" aria-label="Albor ana sayfa"><span className="brand-mark" aria-hidden="true"><i>✦</i></span><span className="brand-name">Albor</span></a><nav aria-label="Yasal sayfalar">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><span>© {new Date().getFullYear()} Albor</span></div></footer>
    </main>
  );
}
