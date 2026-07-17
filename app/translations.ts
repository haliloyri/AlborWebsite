export const locales = ["en", "de", "es", "tr"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  tr: "Türkçe",
};

const en = {
  nav: { aria: "Main navigation", how: "How It Works", features: "Features", categories: "Categories", faq: "FAQ", download: "Download the App", menu: "Open menu", language: "Language" },
  store: { aria: "App stores", appStoreOverline: "Download on the", googlePlayOverline: "GET IT ON", coming: "Store link coming soon" },
  hero: {
    eyebrow: "A new spark every day", titleStart: "3 minutes a day.", titleEm: "Ideas for life", titleEnd: "that stay with you.",
    body: "Albor turns ideas from the world’s most influential books into short, memorable stories. Read, remember, and use them in conversation.",
    primary: "Download Albor", secondary: "See How It Works", proof: "Turn reading into a small, sustainable ritual.", visualAria: "Screens from the Albor app",
    reading: "Today’s read", conversation: "Use in Conversation", conversationNote: "Bring the idea into your life",
    foot: ["The world’s big ideas", "Personalized every day", "Read · Listen · Remember"],
  },
  value: {
    kicker: "More than a summary", titleStart: "Don’t just read it.", titleEm: "Make it part of your life.",
    body: "Albor does more than shorten what a book says. It turns complex ideas into stories that stay with you, helping you learn every day and use what you know in real life.",
    cards: [
      ["A new idea in 3 minutes", "Short, powerful reads that make room for curiosity—even on busy days."],
      ["A plan shaped around your interests", "Choose what matters to you and let Albor create a fresh path each day."],
      ["Use what you learn in conversation", "Turn ideas into clear talking points, remember them, and share them at the right moment."],
    ],
  },
  how: {
    eyebrow: "How it works", titleStart: "From curiosity to habit,", titleEm: "in three small steps.",
    steps: [
      ["Choose what sparks your curiosity", "Pick from psychology, finance, philosophy, leadership, and more."],
      ["Read or listen to your daily story", "Learn the essential idea in about 3 minutes, in the format that suits you."],
      ["Remember it and use it", "Save the idea, share it, or bring it into your next conversation."],
    ],
  },
  featuresHeading: { kicker: "The Albor experience", titleStart: "A personal knowledge space", titleEm: "built around your curiosity." },
  features: [
    { eyebrow: "Personal plan", title: "A path made for you, every day.", body: "Choose your interests and the time you can spare. Albor organizes ideas that match your curiosity.", note: "A selection that adapts to your interests", alt: "Personalized daily reading plan on the Albor home screen" },
    { eyebrow: "Short stories", title: "Big ideas, told to be remembered.", body: "The essential thinking inside influential books becomes a clear, engaging story you can read in about 3 minutes.", note: "Read or listen", alt: "A short story detail screen in the Albor app" },
    { eyebrow: "Personal library", title: "Every idea worth revisiting, in one place.", body: "Keep favorites, saved stories, and reading history together in your personal knowledge archive.", note: "Favorites and reading history", alt: "Personal library and favorites screen in Albor" },
    { eyebrow: "Progress", title: "Make every small step visible.", body: "Daily goals, reading streaks, statistics, and badges turn curiosity into a lasting habit.", note: "Goals, streaks, and badges", alt: "Reading streak, statistics, and achievement badges in Albor" },
    { eyebrow: "Made for you", title: "Choose your own reading rhythm.", body: "Manage language, theme, reminder time, and daily duration. Albor fits into your day—not the other way around.", note: "Light and dark themes", alt: "Reading duration and reminder preferences on the Albor profile screen" },
  ],
  category: { kicker: "Explore", titleStart: "A new spark for", titleEm: "everything you wonder about.", body: "What would you like to open your mind to today? Choose a subject and let Albor take it from there.", names: ["Psychology", "Philosophy", "Finance", "Leadership", "History", "Science", "Health", "Communication", "Productivity", "Personal Growth"] },
  habit: {
    eyebrow: "Your daily habit", titleStart: "You don’t have to finish a book.", titleEm: "Start with just one idea today.", body: "Albor creates a small but meaningful reading ritual you can sustain even on your busiest days.",
    goal: "Daily goal", idea: "Today’s spark", connection: "New connection", minute: "min", ideaUnit: "idea", streak: "7-day streak", badge: "First Spark", badgeNote: "Achievement badge",
  },
  faq: {
    kicker: "Good to know", titleStart: "Everything", titleEm: "you’re wondering about.", body: "Here are clear answers to the questions people ask most about Albor.", ready: "I’m ready to begin",
    items: [
      ["What is Albor?", "Albor is a mobile app that turns ideas from influential books and different fields of knowledge into short, clear, memorable stories."],
      ["How long does each story take?", "Most stories are designed to be read in about 3 minutes. You can personalize your daily plan around the time you have."],
      ["Which categories are available?", "Content spans psychology, philosophy, finance, leadership, history, science, health, communication, productivity, personal growth, and more."],
      ["Can I listen to the stories?", "Yes. You can read a story or listen to its audio narration whenever that suits you better."],
      ["Can I save what I read?", "Yes. Add ideas to your favorites and find them again later in your personal library."],
      ["What does Albor Premium include?", "Premium provides unlimited access to Albor content and the premium experience. Current details and terms are shown in the app."],
      ["Which languages does the app support?", "The current list of supported languages is shown in the app settings and store listings."],
    ],
  },
  download: { eyebrow: "Your next idea", titleStart: "Today’s idea", titleEm: "is waiting for you.", body: "Give it a few minutes a day. Learn more, remember better, and collect new things worth talking about.", button: "Download Albor for Free" },
  footer: { description: "Bring the world’s big ideas into your life, a few minutes at a time.", coming: "Coming soon to app stores", spark: "A new spark every day ✦" },
  legal: { privacy: "Privacy Policy", support: "Support", terms: "Terms of Use", deletion: "Data Deletion" },
  imageAlt: { onboarding: "Choose your interests in Albor", home: "Daily reading plan and stories in Albor", story: "Read and listen to a short story in Albor", progress: "Daily goals, reading streak, and badges in Albor" },
};

export type Copy = typeof en;

const de: Copy = {
  nav: { aria: "Hauptnavigation", how: "So funktioniert’s", features: "Funktionen", categories: "Kategorien", faq: "FAQ", download: "App herunterladen", menu: "Menü öffnen", language: "Sprache" },
  store: { aria: "App-Stores", appStoreOverline: "Laden im", googlePlayOverline: "JETZT BEI", coming: "Store-Link folgt in Kürze" },
  hero: { eyebrow: "Jeden Tag ein neuer Funke", titleStart: "3 Minuten am Tag.", titleEm: "Ideen fürs Leben", titleEnd: "die bei dir bleiben.", body: "Albor verwandelt Ideen aus den einflussreichsten Büchern der Welt in kurze, einprägsame Geschichten. Lesen, merken und im Gespräch nutzen.", primary: "Albor herunterladen", secondary: "So funktioniert’s", proof: "Mach Lesen zu einem kleinen, nachhaltigen Ritual.", visualAria: "Bildschirme der Albor-App", reading: "Heutige Lektüre", conversation: "Im Gespräch nutzen", conversationNote: "Bring die Idee in dein Leben", foot: ["Die großen Ideen der Welt", "Jeden Tag personalisiert", "Lesen · Hören · Merken"] },
  value: { kicker: "Mehr als eine Zusammenfassung", titleStart: "Nicht nur lesen.", titleEm: "Zum Teil deines Lebens machen.", body: "Albor kürzt nicht nur Inhalte. Komplexe Gedanken werden zu Geschichten, die im Gedächtnis bleiben und dir helfen, jeden Tag zu lernen und Wissen im Alltag zu nutzen.", cards: [["Eine neue Idee in 3 Minuten", "Kurze, wirkungsvolle Lektüre, die selbst an vollen Tagen Raum für Neugier schafft."], ["Ein Plan nach deinen Interessen", "Du wählst, was dich bewegt – Albor gestaltet jeden Tag einen neuen Weg."], ["Gelerntes im Gespräch nutzen", "Ideen klar formulieren, behalten und im richtigen Moment teilen."]] },
  how: { eyebrow: "So funktioniert’s", titleStart: "Von Neugier zur Gewohnheit,", titleEm: "in drei kleinen Schritten.", steps: [["Wähle, was dich neugierig macht", "Psychologie, Finanzen, Philosophie, Führung und vieles mehr."], ["Lies oder höre deine tägliche Geschichte", "Lerne die wichtigste Idee in etwa 3 Minuten – so, wie es zu dir passt."], ["Merken und anwenden", "Speichere die Idee, teile sie oder nutze sie im nächsten Gespräch."]] },
  featuresHeading: { kicker: "Das Albor-Erlebnis", titleStart: "Dein persönlicher Wissensraum", titleEm: "rund um deine Neugier." },
  features: [
    { eyebrow: "Persönlicher Plan", title: "Jeden Tag dein eigener Weg.", body: "Wähle deine Interessen und deine verfügbare Zeit. Albor ordnet passende Ideen für dich.", note: "Eine Auswahl, die sich anpasst", alt: "Personalisierter täglicher Leseplan auf dem Albor-Startbildschirm" },
    { eyebrow: "Kurze Geschichten", title: "Große Ideen, die im Kopf bleiben.", body: "Die Kerngedanken einflussreicher Bücher werden zu klaren Geschichten, die du in etwa 3 Minuten liest.", note: "Lesen oder hören", alt: "Detailansicht einer kurzen Geschichte in Albor" },
    { eyebrow: "Persönliche Bibliothek", title: "Alle Ideen zum Wiederentdecken an einem Ort.", body: "Favoriten, gespeicherte Geschichten und Verlauf bilden dein persönliches Wissensarchiv.", note: "Favoriten und Leseverlauf", alt: "Persönliche Bibliothek und Favoriten in Albor" },
    { eyebrow: "Fortschritt", title: "Mach kleine Schritte sichtbar.", body: "Tagesziele, Leseserien, Statistiken und Abzeichen machen Neugier zur dauerhaften Gewohnheit.", note: "Ziele, Serien und Abzeichen", alt: "Leseserie, Statistiken und Abzeichen in Albor" },
    { eyebrow: "Für dich gemacht", title: "Bestimme deinen Leserhythmus.", body: "Verwalte Sprache, Design, Erinnerungszeit und tägliche Dauer. Albor passt in deinen Tag.", note: "Helles und dunkles Design", alt: "Lesezeit und Erinnerungen im Albor-Profil" },
  ],
  category: { kicker: "Entdecken", titleStart: "Ein neuer Funke für", titleEm: "alles, was dich interessiert.", body: "Wofür möchtest du deinen Kopf heute öffnen? Wähle ein Thema – Albor übernimmt den Rest.", names: ["Psychologie", "Philosophie", "Finanzen", "Führung", "Geschichte", "Wissenschaft", "Gesundheit", "Kommunikation", "Produktivität", "Persönliche Entwicklung"] },
  habit: { eyebrow: "Deine tägliche Gewohnheit", titleStart: "Du musst kein Buch beenden.", titleEm: "Beginne heute mit nur einer Idee.", body: "Albor schafft ein kleines, wirkungsvolles Leseritual, das selbst an vollen Tagen Platz findet.", goal: "Tagesziel", idea: "Heutiger Funke", connection: "Neue Verbindung", minute: "Min.", ideaUnit: "Idee", streak: "7-Tage-Serie", badge: "Erster Funke", badgeNote: "Erfolgsabzeichen" },
  faq: { kicker: "Gut zu wissen", titleStart: "Alles,", titleEm: "was du wissen möchtest.", body: "Hier findest du klare Antworten auf die häufigsten Fragen zu Albor.", ready: "Ich möchte beginnen", items: [["Was ist Albor?", "Albor ist eine mobile App, die Ideen aus einflussreichen Büchern und Wissensgebieten in kurze, klare und einprägsame Geschichten verwandelt."], ["Wie lange dauert eine Geschichte?", "Die meisten Geschichten lassen sich in etwa 3 Minuten lesen. Deinen Tagesplan kannst du an deine Zeit anpassen."], ["Welche Kategorien gibt es?", "Unter anderem Psychologie, Philosophie, Finanzen, Führung, Geschichte, Wissenschaft, Gesundheit, Kommunikation, Produktivität und persönliche Entwicklung."], ["Kann ich Geschichten anhören?", "Ja. Du kannst Geschichten lesen oder als Audio anhören."], ["Kann ich Gelesenes speichern?", "Ja. Speichere Ideen als Favoriten und finde sie später in deiner Bibliothek wieder."], ["Was bietet Albor Premium?", "Premium bietet unbegrenzten Zugriff auf Albor-Inhalte und das Premium-Erlebnis. Aktuelle Details stehen in der App."], ["Welche Sprachen unterstützt die App?", "Die aktuelle Liste unterstützter Sprachen findest du in den App-Einstellungen und Store-Einträgen."]] },
  download: { eyebrow: "Deine nächste Idee", titleStart: "Die Idee des Tages", titleEm: "wartet auf dich.", body: "Nimm dir täglich ein paar Minuten. Lerne mehr, merke dir mehr und sammle neue Gesprächsthemen.", button: "Albor kostenlos herunterladen" },
  footer: { description: "Hol dir die großen Ideen der Welt in wenigen Minuten in deinen Alltag.", coming: "Bald in den App-Stores", spark: "Jeden Tag ein neuer Funke ✦" },
  legal: { privacy: "Datenschutzerklärung", support: "Support", terms: "Nutzungsbedingungen", deletion: "Datenlöschung" },
  imageAlt: { onboarding: "Interessen in Albor auswählen", home: "Täglicher Leseplan und Geschichten in Albor", story: "Eine kurze Geschichte in Albor lesen und anhören", progress: "Tagesziele, Leseserie und Abzeichen in Albor" },
};

const es: Copy = {
  nav: { aria: "Navegación principal", how: "Cómo funciona", features: "Funciones", categories: "Categorías", faq: "Preguntas", download: "Descargar la app", menu: "Abrir menú", language: "Idioma" },
  store: { aria: "Tiendas de aplicaciones", appStoreOverline: "Descárgala en", googlePlayOverline: "DISPONIBLE EN", coming: "Enlace de la tienda próximamente" },
  hero: { eyebrow: "Una chispa nueva cada día", titleStart: "3 minutos al día.", titleEm: "Ideas para siempre", titleEnd: "que se quedan contigo.", body: "Albor convierte las ideas de los libros más influyentes del mundo en historias breves y memorables. Lee, recuerda y úsalas en tus conversaciones.", primary: "Descargar Albor", secondary: "Ver cómo funciona", proof: "Convierte la lectura en un ritual pequeño y sostenible.", visualAria: "Pantallas de la aplicación Albor", reading: "Lectura de hoy", conversation: "Usar en conversación", conversationNote: "Lleva la idea a tu vida", foot: ["Las grandes ideas del mundo", "Personalizado cada día", "Lee · Escucha · Recuerda"] },
  value: { kicker: "Más que un resumen", titleStart: "No te limites a leerlo.", titleEm: "Hazlo parte de tu vida.", body: "Albor no solo acorta lo que dice un libro. Convierte ideas complejas en historias que permanecen contigo y te ayudan a aprender y aplicar lo que sabes.", cards: [["Una idea nueva en 3 minutos", "Lecturas breves y potentes que dejan espacio para la curiosidad incluso en días intensos."], ["Un plan según tus intereses", "Elige lo que te importa y deja que Albor cree una ruta nueva cada día."], ["Usa lo aprendido al conversar", "Convierte ideas en puntos claros, recuérdalas y compártelas en el momento adecuado."]] },
  how: { eyebrow: "Cómo funciona", titleStart: "De la curiosidad al hábito,", titleEm: "en tres pequeños pasos.", steps: [["Elige lo que despierta tu curiosidad", "Psicología, finanzas, filosofía, liderazgo y mucho más."], ["Lee o escucha tu historia diaria", "Aprende la idea esencial en unos 3 minutos, como mejor te venga."], ["Recuérdala y úsala", "Guarda la idea, compártela o llévala a tu próxima conversación."]] },
  featuresHeading: { kicker: "La experiencia Albor", titleStart: "Un espacio de conocimiento personal", titleEm: "creado en torno a tu curiosidad." },
  features: [
    { eyebrow: "Plan personal", title: "Una ruta hecha para ti, cada día.", body: "Elige tus intereses y el tiempo disponible. Albor organiza las ideas que encajan contigo.", note: "Una selección que se adapta a ti", alt: "Plan de lectura diario personalizado en la pantalla de inicio de Albor" },
    { eyebrow: "Historias breves", title: "Grandes ideas, contadas para recordar.", body: "El pensamiento esencial de libros influyentes se convierte en una historia clara que puedes leer en unos 3 minutos.", note: "Lee o escucha", alt: "Pantalla de detalle de una historia breve en Albor" },
    { eyebrow: "Biblioteca personal", title: "Cada idea a la que quieras volver, en un lugar.", body: "Reúne favoritos, historias guardadas e historial en tu archivo personal de conocimiento.", note: "Favoritos e historial de lectura", alt: "Biblioteca personal y favoritos en Albor" },
    { eyebrow: "Progreso", title: "Haz visible cada pequeño paso.", body: "Objetivos diarios, rachas, estadísticas e insignias convierten la curiosidad en un hábito duradero.", note: "Objetivos, rachas e insignias", alt: "Racha de lectura, estadísticas e insignias en Albor" },
    { eyebrow: "Hecho para ti", title: "Elige tu propio ritmo de lectura.", body: "Configura idioma, tema, recordatorios y duración diaria. Albor se adapta a tu día.", note: "Temas claro y oscuro", alt: "Duración de lectura y recordatorios en el perfil de Albor" },
  ],
  category: { kicker: "Explora", titleStart: "Una chispa nueva para", titleEm: "todo lo que te interesa.", body: "¿A qué quieres abrir tu mente hoy? Elige un tema y deja que Albor haga el resto.", names: ["Psicología", "Filosofía", "Finanzas", "Liderazgo", "Historia", "Ciencia", "Salud", "Comunicación", "Productividad", "Crecimiento personal"] },
  habit: { eyebrow: "Tu hábito diario", titleStart: "No tienes que terminar un libro.", titleEm: "Empieza hoy con una sola idea.", body: "Albor crea un ritual de lectura pequeño pero significativo que puedes mantener incluso en los días más ocupados.", goal: "Objetivo diario", idea: "Chispa de hoy", connection: "Nueva conexión", minute: "min", ideaUnit: "idea", streak: "Racha de 7 días", badge: "Primera chispa", badgeNote: "Insignia de logro" },
  faq: { kicker: "Lo que debes saber", titleStart: "Todo", titleEm: "lo que quieres saber.", body: "Aquí tienes respuestas claras a las preguntas más frecuentes sobre Albor.", ready: "Quiero empezar", items: [["¿Qué es Albor?", "Albor es una aplicación móvil que convierte ideas de libros influyentes y distintos campos del conocimiento en historias breves, claras y memorables."], ["¿Cuánto dura cada historia?", "La mayoría está diseñada para leerse en unos 3 minutos. Puedes adaptar el plan diario al tiempo que tengas."], ["¿Qué categorías hay?", "Psicología, filosofía, finanzas, liderazgo, historia, ciencia, salud, comunicación, productividad, crecimiento personal y más."], ["¿Puedo escuchar las historias?", "Sí. Puedes leerlas o escuchar su narración cuando te venga mejor."], ["¿Puedo guardar lo que leo?", "Sí. Añade ideas a favoritos y encuéntralas después en tu biblioteca personal."], ["¿Qué incluye Albor Premium?", "Premium ofrece acceso ilimitado al contenido y a la experiencia premium de Albor. Los detalles actuales aparecen en la app."], ["¿Qué idiomas admite la app?", "La lista actual de idiomas está disponible en los ajustes y en las páginas de las tiendas."]] },
  download: { eyebrow: "Tu próxima idea", titleStart: "La idea de hoy", titleEm: "te está esperando.", body: "Dedica unos minutos al día. Aprende más, recuerda mejor y reúne nuevas cosas de las que hablar.", button: "Descargar Albor gratis" },
  footer: { description: "Lleva las grandes ideas del mundo a tu vida, unos minutos cada día.", coming: "Próximamente en las tiendas", spark: "Una chispa nueva cada día ✦" },
  legal: { privacy: "Política de privacidad", support: "Soporte", terms: "Condiciones de uso", deletion: "Eliminación de datos" },
  imageAlt: { onboarding: "Elegir intereses en Albor", home: "Plan diario de lectura e historias en Albor", story: "Leer y escuchar una historia breve en Albor", progress: "Objetivos diarios, racha e insignias en Albor" },
};

const tr: Copy = {
  nav: { aria: "Ana menü", how: "Nasıl Çalışır?", features: "Özellikler", categories: "Kategoriler", faq: "Sık Sorulanlar", download: "Uygulamayı İndir", menu: "Menüyü aç", language: "Dil" },
  store: { aria: "Uygulama mağazaları", appStoreOverline: "App Store’dan", googlePlayOverline: "Google Play’den", coming: "Mağaza bağlantısı yakında eklenecek" },
  hero: { eyebrow: "Her gün yeni bir kıvılcım", titleStart: "Her gün 3 dakika.", titleEm: "Ömür boyu", titleEnd: "seninle kalacak fikirler.", body: "Albor, dünyanın en etkili kitaplarındaki fikirleri kısa ve akılda kalıcı hikâyelere dönüştürür. Oku, hatırla ve sohbetlerinde kullan.", primary: "Albor’u İndir", secondary: "Nasıl Çalıştığını Gör", proof: "Okumayı küçük ve sürdürülebilir bir ritüele dönüştür.", visualAria: "Albor uygulamasından ekranlar", reading: "Bugünün okuması", conversation: "Sohbette Kullan", conversationNote: "Fikri hayatına taşı", foot: ["Dünyanın büyük fikirleri", "Her gün, sana özel", "Okunur · Dinlenir · Hatırlanır"] },
  value: { kicker: "Özetten daha fazlası", titleStart: "Okuduğunu unutma.", titleEm: "Hayatının bir parçası yap.", body: "Albor yalnızca ne söylendiğini kısaltmaz. Karmaşık fikirleri zihninde yer edecek hikâyelere dönüştürür; her gün öğrenmeni ve öğrendiğini gerçek hayatta kullanmanı kolaylaştırır.", cards: [["3 dakikada yeni bir fikir", "Yoğun günlerde bile merakına yer açan, kısa ve etkili okumalar."], ["İlgi alanlarına göre kişisel plan", "Sen seç, Albor her gün merakına göre yeni bir rota hazırlasın."], ["Öğrendiğini sohbetlerinde kullan", "Fikirleri kısa anlatımlara dönüştür, hatırla ve doğru anda paylaş."]] },
  how: { eyebrow: "Nasıl çalışır?", titleStart: "Meraktan alışkanlığa,", titleEm: "üç küçük adımda.", steps: [["Merak ettiğin alanları seç", "Psikoloji, finans, felsefe, liderlik ve daha fazlasından ilgini çekenleri belirle."], ["Günlük hikâyeni oku veya dinle", "En önemli fikirleri yaklaşık 3 dakikada, sana uygun biçimde öğren."], ["Hatırla ve kullan", "Fikri favorilerine ekle, paylaş veya bir sonraki sohbetinde kullan."]] },
  featuresHeading: { kicker: "Albor deneyimi", titleStart: "Merakına eşlik eden", titleEm: "kişisel bilgi alanın." },
  features: [
    { eyebrow: "Kişisel plan", title: "Her güne sana özel bir rota.", body: "İlgi alanlarını ve ayırmak istediğin zamanı seç. Albor, merakına uyan fikirleri senin için düzenlesin.", note: "İlgi alanlarına göre güncellenen seçki", alt: "Albor ana ekranında kişiselleştirilmiş günlük okuma planı" },
    { eyebrow: "Kısa hikâyeler", title: "Büyük fikirler, akılda kalan anlatılar.", body: "Yoğun kitapların özündeki düşünceler; sade, sürükleyici ve yaklaşık 3 dakikada okunabilen hikâyelere dönüşür.", note: "Oku veya sesli dinle", alt: "Albor uygulamasında kısa bir hikâyenin detay sayfası" },
    { eyebrow: "Kişisel kütüphane", title: "Dönmek istediğin her fikir, tek yerde.", body: "Favorilerini, daha sonra okuyacaklarını ve tamamladığın içerikleri düzenli bir bilgi arşivinde biriktir.", note: "Favoriler ve okuma geçmişi", alt: "Albor kişisel kütüphane ve favoriler ekranı" },
    { eyebrow: "İlerleme", title: "Küçük adımlarını görünür kıl.", body: "Günlük hedefler, okuma serileri, istatistikler ve rozetlerle merakını sürdürülebilir bir alışkanlığa dönüştür.", note: "Hedefler, seriler ve rozetler", alt: "Albor okuma serisi, istatistikler ve başarı rozetleri ekranı" },
    { eyebrow: "Sana göre", title: "Okuma ritmini kendin belirle.", body: "Dil, tema, bildirim saati ve günlük süre tercihlerini yönet. Albor gününe değil, günün Albor’a uysun.", note: "Açık ve koyu tema desteği", alt: "Albor profilinde okuma süresi ve bildirim tercihleri" },
  ],
  category: { kicker: "Keşfet", titleStart: "Merak ettiğin her konu için", titleEm: "yeni bir kıvılcım.", body: "Bugün zihnini hangi konuya açmak istersin? Birini seç; gerisini Albor senin için hazırlasın.", names: ["Psikoloji", "Felsefe", "Finans", "Liderlik", "Tarih", "Bilim", "Sağlık", "İletişim", "Verimlilik", "Kişisel Gelişim"] },
  habit: { eyebrow: "Günlük alışkanlığın", titleStart: "Bir kitap bitirmek zorunda değilsin.", titleEm: "Bugün yalnızca bir fikirle başla.", body: "Albor, yoğun günlerin arasında sürdürebileceğin küçük ama etkili bir okuma ritüeli oluşturur.", goal: "Günlük hedef", idea: "Bugünün kıvılcımı", connection: "Yeni bağlantı", minute: "dk", ideaUnit: "fikir", streak: "7 günlük seri", badge: "İlk Kıvılcım", badgeNote: "Başarı rozeti" },
  faq: { kicker: "Merak edilenler", titleStart: "Aklında", titleEm: "soru kalmasın.", body: "Albor deneyimine dair en sık sorulan soruları burada yanıtladık.", ready: "Başlamaya hazırım", items: [["Albor nedir?", "Albor, etkili kitaplardan ve farklı bilgi alanlarından seçilen fikirleri kısa, anlaşılır ve akılda kalıcı hikâyelere dönüştüren bir mobil uygulamadır."], ["Hikâyeleri okumak ne kadar sürer?", "Çoğu hikâye yaklaşık 3 dakikada okunacak şekilde hazırlanır. Günlük planını ayırabildiğin zamana göre kişiselleştirebilirsin."], ["İçerikler hangi kategorilerde sunuluyor?", "Psikoloji, felsefe, finans, liderlik, tarih, bilim, sağlık, iletişim, verimlilik ve kişisel gelişim gibi birçok alanda içerik bulunur."], ["Hikâyeleri sesli dinleyebilir miyim?", "Evet. Uygun olduğunda hikâyeleri okuyabilir veya sesli anlatımla dinleyebilirsin."], ["Okuduklarımı kaydedebilir miyim?", "Evet. Beğendiğin fikirleri favorilerine ekleyebilir ve kişisel kütüphanende daha sonra yeniden bulabilirsin."], ["Albor Premium neler sunar?", "Premium üyelik, Albor içeriklerine ve premium deneyime sınırsız erişim sunar. Güncel kapsam ve koşullar uygulama içinde gösterilir."], ["Uygulama hangi dilleri destekler?", "Desteklenen güncel diller uygulamanın ayarlar ve mağaza sayfalarında listelenir."]] },
  download: { eyebrow: "Sıradaki fikir", titleStart: "Bugünün fikri", titleEm: "seni bekliyor.", body: "Her gün birkaç dakika ayır. Daha çok öğren, daha iyi hatırla ve anlatacak yeni şeyler biriktir.", button: "Albor’u Ücretsiz İndir" },
  footer: { description: "Dünyanın büyük fikirlerini her gün birkaç dakikada hayatına taşı.", coming: "Yakında mağazalarda", spark: "Her gün yeni bir kıvılcım ✦" },
  legal: { privacy: "Gizlilik Politikası", support: "Destek", terms: "Kullanım Koşulları", deletion: "Veri Silme" },
  imageAlt: { onboarding: "Albor ilgi alanı seçimi ekranı", home: "Albor günlük okuma planı ve hikâyeler ekranı", story: "Albor kısa hikâye okuma ve dinleme ekranı", progress: "Albor günlük hedef, okuma serisi ve rozet ekranı" },
};

export const translations: Record<Locale, Copy> = { en, de, es, tr };
