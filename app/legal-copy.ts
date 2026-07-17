import type { Locale } from "./translations";

export type LegalPageKind = "privacy" | "support" | "terms" | "deletion";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocument = {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
};

type LegalLocaleCopy = {
  back: string;
  language: string;
  contactLabel: string;
  contactPrompt: string;
  operatorLabel: string;
  operator: string;
  country: string;
  nav: Record<LegalPageKind, string>;
  documents: Record<LegalPageKind, LegalDocument>;
};

const email = "info@alborapp.com";

const en: LegalLocaleCopy = {
  back: "Back to Albor",
  language: "Language",
  contactLabel: "Public support email",
  contactPrompt: "Questions about Albor or your data?",
  operatorLabel: "Developer and data controller",
  operator: "Halil Oyri",
  country: "Türkiye",
  nav: { privacy: "Privacy", support: "Support", terms: "Terms", deletion: "Data deletion" },
  documents: {
    privacy: {
      eyebrow: "Your privacy",
      title: "Privacy Policy",
      intro: "This policy explains what Albor collects, where the information is stored, why it is used, and how you can request deletion.",
      updatedLabel: "Last updated",
      updated: "July 18, 2026",
      sections: [
        {
          title: "1. Who is responsible",
          paragraphs: [`Albor is operated by Halil Oyri in Türkiye. For privacy questions or requests, contact ${email}.`],
        },
        {
          title: "2. Information Albor collects",
          bullets: [
            "Name and surname: entered directly by you and stored only on your device. Albor does not upload them to Supabase.",
            "Email address: entered directly by you and stored only on your device. Albor does not upload it to Supabase.",
            "Reading activity: the stories you have read, stored in Supabase so Albor can show your history and progress.",
            "Achievements: badges you have earned, stored in Supabase so they can be displayed in your experience.",
            "Audio recordings: stored only on your device. Albor does not upload these recordings to Supabase or its own servers.",
          ],
        },
        {
          title: "3. How information is used",
          bullets: [
            "To provide and maintain the Albor experience.",
            "To display your reading history, progress, and earned badges.",
            "To associate the details you entered with your app data.",
            "To respond to support, privacy, and deletion requests.",
            "To protect the service and comply with applicable legal obligations.",
          ],
        },
        {
          title: "4. Accounts and identification",
          paragraphs: [
            "Albor does not create a password-based login account. Your name, surname, and email address stay on your device. Only your reading activity and earned badges are stored in Supabase.",
          ],
        },
        {
          title: "5. Third-party services",
          paragraphs: [
            "Albor uses Supabase as its database and backend service provider for reading activity and earned badges. Supabase processes those records on Albor’s behalf and is expected to protect them consistently with this policy and applicable law.",
            "At the date of this policy, Albor does not use a separate advertising, tracking, analytics, or crash-reporting service. If this changes, this policy and the App Store privacy disclosures will be updated.",
          ],
        },
        {
          title: "6. Sharing and selling",
          paragraphs: [
            "Albor does not sell your personal information. Information is shared only with service providers needed to operate Albor, such as Supabase, or when disclosure is required by law.",
          ],
        },
        {
          title: "7. Storage, retention, and security",
          paragraphs: [
            "Cloud data is retained for as long as it is needed to provide Albor, resolve requests, and meet legal obligations, or until a valid deletion request is completed. Your name, surname, email address, and audio recordings remain locally on your device until you remove them through available app or device controls, subject to your device backup settings.",
            "Reasonable technical and organizational safeguards are used, but no storage or transmission method can be guaranteed to be completely secure.",
          ],
        },
        {
          title: "8. Your choices and rights",
          paragraphs: [
            `You may ask to access, correct, or delete your reading history and badge information held in Supabase by emailing ${email}.`,
            "Your name, surname, email address, and audio recordings are controlled on your device and are not included in the cloud deletion process. You may stop future collection by discontinuing use of Albor.",
          ],
        },
        {
          title: "9. Children",
          paragraphs: [
            "Albor is not directed to children who are below the minimum age at which they may consent to personal-data processing in their country. If you believe a child has provided information, contact us so it can be reviewed and deleted where appropriate.",
          ],
        },
        {
          title: "10. Changes to this policy",
          paragraphs: ["This policy may be updated when Albor’s features, providers, or legal obligations change. The latest version and update date will be published on this page."],
        },
      ],
    },
    support: {
      eyebrow: "We’re here to help",
      title: "Albor Support",
      intro: "Get help with the app, privacy questions, or your stored information through Albor’s public support channel.",
      updatedLabel: "Support information updated",
      updated: "July 18, 2026",
      sections: [
        {
          title: "Contact support",
          paragraphs: [`Email ${email}. This is Albor’s public support address for product, accessibility, privacy, and data-related questions.`],
        },
        {
          title: "What to include",
          bullets: [
            "A short description of the issue.",
            "Your device model and operating-system version, when relevant.",
            "The app screen or feature where the issue occurred.",
            "Any details that help us identify the app data involved in your request.",
          ],
        },
        {
          title: "Protect sensitive information",
          paragraphs: ["Do not email passwords, payment information, or audio recordings. Albor does not require a password-based account and audio recordings remain on your device."],
        },
        {
          title: "Privacy and deletion requests",
          paragraphs: [`For access, correction, or deletion of your cloud-stored reading history and badges, use the Data Deletion page or email ${email}. Name, surname, email address, and audio recordings remain on your device.`],
        },
        {
          title: "Developer",
          paragraphs: ["Halil Oyri — Türkiye"],
        },
      ],
    },
    terms: {
      eyebrow: "Using Albor",
      title: "Terms of Use",
      intro: "These terms govern your use of the Albor mobile app and its related website and services.",
      updatedLabel: "Last updated",
      updated: "July 18, 2026",
      sections: [
        { title: "1. Agreement", paragraphs: ["By accessing or using Albor, you agree to these terms. If you do not agree, do not use the service."] },
        { title: "2. Operator", paragraphs: [`Albor is provided by Halil Oyri in Türkiye. Questions may be sent to ${email}.`] },
        { title: "3. Service and content", paragraphs: ["Albor provides short educational stories and summaries inspired by books and fields of knowledge. Content is provided for general information and learning; it is not medical, legal, financial, or other professional advice."] },
        { title: "4. Your information", paragraphs: ["You are responsible for the accuracy of the details you enter. Your name, surname, and email address stay locally on your device. Albor does not provide a password-based login account. The handling of your information is described in the Privacy Policy."] },
        { title: "5. Acceptable use", bullets: ["Do not misuse, disrupt, reverse engineer, or attempt unauthorized access to Albor.", "Do not copy, redistribute, sell, or exploit Albor content except where applicable law permits it.", "Do not use Albor in a way that violates law or the rights of others."] },
        { title: "6. Intellectual property", paragraphs: ["Albor’s branding, interface, original text, design, and software are protected by applicable intellectual-property laws. References to third-party works remain the property of their respective owners."] },
        { title: "7. Availability and changes", paragraphs: ["Features and content may be updated, suspended, or discontinued. Albor aims to keep the service available but does not promise uninterrupted or error-free operation."] },
        { title: "8. Third-party services", paragraphs: ["Albor relies on third-party infrastructure such as Supabase. Use of those services may be subject to their applicable terms and privacy commitments."] },
        { title: "9. Disclaimer and liability", paragraphs: ["To the extent permitted by applicable law, Albor is provided on an “as available” basis. Halil Oyri is not liable for indirect or consequential losses resulting from use of the service. Nothing in these terms limits rights or liability that cannot legally be limited."] },
        { title: "10. Governing law", paragraphs: ["These terms are governed by the laws of Türkiye, without limiting any mandatory consumer rights you may have under the law of your country of residence."] },
        { title: "11. Changes and contact", paragraphs: [`These terms may be updated as Albor evolves. The current version will be published here. Contact ${email} with questions.`] },
      ],
    },
    deletion: {
      eyebrow: "Your data choices",
      title: "Data Deletion",
      intro: "Albor does not create a password-based user account, but you can request deletion of the cloud data connected to the details you entered.",
      updatedLabel: "Last updated",
      updated: "July 18, 2026",
      sections: [
        {
          title: "What can be deleted",
          bullets: ["Your stored reading history.", "Your earned badge records."],
        },
        {
          title: "How to request deletion",
          paragraphs: [`Email ${email} with the subject “Albor Data Deletion Request.” State that you want your Albor reading history and badge records deleted.`],
        },
        {
          title: "Verification and completion",
          paragraphs: ["Albor may ask for enough information to identify the relevant app data before deletion. The associated cloud data will be removed unless retention is legally required. You will receive confirmation when the request is completed."],
        },
        {
          title: "Audio recordings on your device",
          paragraphs: ["Your name, surname, email address, and audio recordings are stored locally and are not uploaded to Supabase. Remove them using the available app or device controls. Uninstalling the app normally removes app-local data, subject to your device and backup settings."],
        },
        {
          title: "No subscription cancellation",
          paragraphs: ["Deleting data does not automatically cancel an App Store subscription or purchase. Manage subscriptions separately in your Apple ID subscription settings."],
        },
      ],
    },
  },
};

const de: LegalLocaleCopy = {
  back: "Zurück zu Albor",
  language: "Sprache",
  contactLabel: "Öffentliche Support-E-Mail",
  contactPrompt: "Fragen zu Albor oder deinen Daten?",
  operatorLabel: "Entwickler und Verantwortlicher",
  operator: "Halil Oyri",
  country: "Türkei",
  nav: { privacy: "Datenschutz", support: "Support", terms: "Bedingungen", deletion: "Datenlöschung" },
  documents: {
    privacy: {
      eyebrow: "Deine Privatsphäre",
      title: "Datenschutzerklärung",
      intro: "Diese Erklärung erläutert, welche Daten Albor erhebt, wo sie gespeichert werden, wofür sie verwendet werden und wie du ihre Löschung verlangen kannst.",
      updatedLabel: "Zuletzt aktualisiert",
      updated: "18. Juli 2026",
      sections: [
        { title: "1. Verantwortlicher", paragraphs: [`Albor wird von Halil Oyri in der Türkei betrieben. Datenschutzanfragen kannst du an ${email} senden.`] },
        { title: "2. Von Albor erhobene Daten", bullets: ["Vor- und Nachname: von dir direkt eingegeben und ausschließlich auf deinem Gerät gespeichert; keine Übertragung an Supabase.", "E-Mail-Adresse: von dir direkt eingegeben und ausschließlich auf deinem Gerät gespeichert; keine Übertragung an Supabase.", "Leseaktivität: gelesene Geschichten, damit Albor Verlauf und Fortschritt anzeigen kann.", "Erfolge: verdiente Abzeichen, damit sie in der App angezeigt werden können.", "Audioaufnahmen: werden ausschließlich auf deinem Gerät gespeichert und nicht zu Supabase oder auf Albor-Server hochgeladen."] },
        { title: "3. Verwendungszwecke", bullets: ["Bereitstellung und Betrieb von Albor.", "Anzeige von Leseverlauf, Fortschritt und Abzeichen.", "Zuordnung der von dir eingegebenen Angaben zu deinen App-Daten.", "Bearbeitung von Support-, Datenschutz- und Löschanfragen.", "Schutz des Dienstes und Erfüllung gesetzlicher Pflichten."] },
        { title: "4. Konten und Identifizierung", paragraphs: ["Albor erstellt kein passwortbasiertes Anmeldekonto. Vor- und Nachname sowie E-Mail-Adresse bleiben auf deinem Gerät. Nur Leseaktivität und verdiente Abzeichen werden in Supabase gespeichert."] },
        { title: "5. Drittanbieter", paragraphs: ["Albor nutzt Supabase als Datenbank- und Backend-Dienstleister. Supabase verarbeitet die oben beschriebenen Cloud-Daten im Auftrag von Albor und soll sie entsprechend dieser Erklärung und dem geltenden Recht schützen.", "Zum Datum dieser Erklärung nutzt Albor keinen separaten Werbe-, Tracking-, Analyse- oder Crash-Reporting-Dienst. Bei Änderungen werden diese Erklärung und die App-Store-Angaben aktualisiert."] },
        { title: "6. Weitergabe und Verkauf", paragraphs: ["Albor verkauft keine personenbezogenen Daten. Daten werden nur an für den Betrieb erforderliche Dienstleister wie Supabase oder aufgrund gesetzlicher Verpflichtungen weitergegeben."] },
        { title: "7. Speicherung, Aufbewahrung und Sicherheit", paragraphs: ["Cloud-Daten werden so lange gespeichert, wie sie für Albor, Anfragen und gesetzliche Pflichten erforderlich sind, oder bis eine gültige Löschanfrage abgeschlossen ist. Vorname, Nachname und Audioaufnahmen bleiben lokal auf deinem Gerät, bis du sie über verfügbare App- oder Gerätesteuerungen entfernst; Gerätesicherungen können davon abweichen.", "Es werden angemessene Schutzmaßnahmen eingesetzt, vollständige Sicherheit kann jedoch bei keiner Speicherung oder Übertragung garantiert werden."] },
        { title: "8. Deine Rechte", paragraphs: [`Du kannst unter ${email} Auskunft, Berichtigung oder Löschung deines Leseverlaufs und deiner Abzeichen in Supabase verlangen.`, "Vorname, Nachname, E-Mail-Adresse und Audioaufnahmen werden auf deinem Gerät verwaltet und sind nicht Teil der Cloud-Löschung. Du kannst die künftige Erhebung beenden, indem du Albor nicht mehr nutzt."] },
        { title: "9. Kinder", paragraphs: ["Albor richtet sich nicht an Kinder unter dem im jeweiligen Land geltenden Mindestalter für eine Einwilligung in die Datenverarbeitung. Wenn du glaubst, dass ein Kind Daten bereitgestellt hat, kontaktiere uns."] },
        { title: "10. Änderungen", paragraphs: ["Diese Erklärung kann bei Änderungen an Funktionen, Dienstleistern oder rechtlichen Pflichten aktualisiert werden. Die aktuelle Fassung wird hier veröffentlicht."] },
      ],
    },
    support: {
      eyebrow: "Wir helfen gern",
      title: "Albor Support",
      intro: "Hilfe zur App, zum Datenschutz oder zu gespeicherten Daten erhältst du über den öffentlichen Support-Kanal von Albor.",
      updatedLabel: "Support-Information aktualisiert",
      updated: "18. Juli 2026",
      sections: [
        { title: "Support kontaktieren", paragraphs: [`Schreibe an ${email}. Diese öffentliche Adresse ist für Produkt-, Barrierefreiheits-, Datenschutz- und Datenfragen bestimmt.`] },
        { title: "Hilfreiche Angaben", bullets: ["Kurze Beschreibung des Problems.", "Gerätemodell und Betriebssystemversion, falls relevant.", "Bildschirm oder Funktion, bei der das Problem auftrat.", "Alle Angaben, die helfen, die betroffenen App-Daten zu identifizieren."] },
        { title: "Sensible Daten schützen", paragraphs: ["Sende keine Passwörter, Zahlungsdaten oder Audioaufnahmen per E-Mail. Albor verwendet kein passwortbasiertes Konto; Audioaufnahmen bleiben auf deinem Gerät."] },
        { title: "Datenschutz und Löschung", paragraphs: [`Für Auskunft, Berichtigung oder Löschung von Leseverlauf und Abzeichen in der Cloud nutze die Seite Datenlöschung oder schreibe an ${email}. Vor- und Nachname, E-Mail-Adresse sowie Audioaufnahmen bleiben auf deinem Gerät.`] },
        { title: "Entwickler", paragraphs: ["Halil Oyri — Türkei"] },
      ],
    },
    terms: {
      eyebrow: "Albor verwenden",
      title: "Nutzungsbedingungen",
      intro: "Diese Bedingungen gelten für die Nutzung der mobilen Albor-App und der zugehörigen Website und Dienste.",
      updatedLabel: "Zuletzt aktualisiert",
      updated: "18. Juli 2026",
      sections: [
        { title: "1. Zustimmung", paragraphs: ["Mit der Nutzung von Albor stimmst du diesen Bedingungen zu. Wenn du nicht zustimmst, nutze den Dienst nicht."] },
        { title: "2. Anbieter", paragraphs: [`Albor wird von Halil Oyri in der Türkei angeboten. Fragen kannst du an ${email} senden.`] },
        { title: "3. Dienst und Inhalte", paragraphs: ["Albor bietet kurze Bildungsgeschichten und Zusammenfassungen zu Büchern und Wissensgebieten. Die Inhalte dienen der allgemeinen Information und Bildung und sind keine medizinische, rechtliche, finanzielle oder sonstige professionelle Beratung."] },
        { title: "4. Deine Angaben", paragraphs: ["Du bist für die Richtigkeit deiner Angaben verantwortlich. Vor- und Nachname sowie E-Mail-Adresse bleiben lokal auf deinem Gerät. Albor bietet kein passwortbasiertes Anmeldekonto. Die Datenverarbeitung ist in der Datenschutzerklärung beschrieben."] },
        { title: "5. Zulässige Nutzung", bullets: ["Albor nicht missbrauchen, stören, zurückentwickeln oder unbefugt darauf zugreifen.", "Albor-Inhalte nicht unerlaubt kopieren, verbreiten, verkaufen oder verwerten.", "Albor nicht rechtswidrig oder unter Verletzung fremder Rechte nutzen."] },
        { title: "6. Geistiges Eigentum", paragraphs: ["Marke, Benutzeroberfläche, Originaltexte, Design und Software von Albor sind geschützt. Verweise auf Werke Dritter bleiben Eigentum ihrer jeweiligen Rechteinhaber."] },
        { title: "7. Verfügbarkeit und Änderungen", paragraphs: ["Funktionen und Inhalte können geändert, ausgesetzt oder eingestellt werden. Ein unterbrechungs- oder fehlerfreier Betrieb wird nicht garantiert."] },
        { title: "8. Dienste Dritter", paragraphs: ["Albor nutzt Infrastruktur wie Supabase. Für diese Dienste können deren Bedingungen und Datenschutzbestimmungen gelten."] },
        { title: "9. Haftung", paragraphs: ["Soweit gesetzlich zulässig, wird Albor nach Verfügbarkeit bereitgestellt. Halil Oyri haftet nicht für indirekte oder Folgeschäden. Unabdingbare gesetzliche Rechte und Haftung bleiben unberührt."] },
        { title: "10. Anwendbares Recht", paragraphs: ["Es gilt das Recht der Türkei, ohne zwingende Verbraucherrechte im Wohnsitzland einzuschränken."] },
        { title: "11. Änderungen und Kontakt", paragraphs: [`Die Bedingungen können mit Albor aktualisiert werden. Die aktuelle Fassung erscheint hier. Kontakt: ${email}.`] },
      ],
    },
    deletion: {
      eyebrow: "Deine Datenoptionen",
      title: "Datenlöschung",
      intro: "Albor erstellt kein passwortbasiertes Benutzerkonto. Du kannst dennoch die Löschung der Cloud-Daten verlangen, die mit deinen Angaben verbunden sind.",
      updatedLabel: "Zuletzt aktualisiert",
      updated: "18. Juli 2026",
      sections: [
        { title: "Löschbare Cloud-Daten", bullets: ["Gespeicherter Leseverlauf.", "Gespeicherte Abzeichen."] },
        { title: "Löschung beantragen", paragraphs: [`Sende eine E-Mail an ${email} mit dem Betreff „Albor Data Deletion Request“ und bitte um Löschung deines Leseverlaufs und deiner Abzeichen.`] },
        { title: "Verifizierung und Abschluss", paragraphs: ["Albor kann ausreichende Informationen zur Identifizierung der richtigen App-Daten anfordern. Danach werden die verbundenen Cloud-Daten entfernt, soweit keine gesetzliche Aufbewahrungspflicht besteht. Du erhältst eine Bestätigung."] },
        { title: "Lokale Daten auf deinem Gerät", paragraphs: ["Vorname, Nachname, E-Mail-Adresse und Audioaufnahmen werden lokal gespeichert und nicht zu Supabase hochgeladen. Entferne sie über verfügbare App- oder Gerätesteuerungen. Eine Deinstallation entfernt normalerweise lokale App-Daten, abhängig von Geräte- und Sicherungseinstellungen."] },
        { title: "Keine Abo-Kündigung", paragraphs: ["Eine Datenlöschung kündigt kein App-Store-Abonnement. Abonnements müssen separat in den Apple-ID-Einstellungen verwaltet werden."] },
      ],
    },
  },
};

const es: LegalLocaleCopy = {
  back: "Volver a Albor",
  language: "Idioma",
  contactLabel: "Correo público de soporte",
  contactPrompt: "¿Preguntas sobre Albor o tus datos?",
  operatorLabel: "Desarrollador y responsable",
  operator: "Halil Oyri",
  country: "Turquía",
  nav: { privacy: "Privacidad", support: "Soporte", terms: "Condiciones", deletion: "Eliminar datos" },
  documents: {
    privacy: {
      eyebrow: "Tu privacidad",
      title: "Política de privacidad",
      intro: "Esta política explica qué recopila Albor, dónde se almacena, para qué se utiliza y cómo puedes solicitar su eliminación.",
      updatedLabel: "Última actualización",
      updated: "18 de julio de 2026",
      sections: [
        { title: "1. Responsable", paragraphs: [`Albor está gestionado por Halil Oyri en Turquía. Para consultas de privacidad, escribe a ${email}.`] },
        { title: "2. Información que recopila Albor", bullets: ["Nombre y apellidos: los introduces directamente y se guardan únicamente en tu dispositivo; no se suben a Supabase.", "Correo electrónico: lo introduces directamente y se guarda únicamente en tu dispositivo; no se sube a Supabase.", "Actividad de lectura: historias leídas para mostrar tu historial y progreso.", "Logros: insignias obtenidas para mostrarlas en tu experiencia.", "Grabaciones de audio: se guardan solo en tu dispositivo y no se suben a Supabase ni a servidores de Albor."] },
        { title: "3. Cómo se utiliza", bullets: ["Prestar y mantener el servicio de Albor.", "Mostrar historial, progreso e insignias.", "Relacionar los datos introducidos con tu actividad.", "Responder a solicitudes de soporte, privacidad y eliminación.", "Proteger el servicio y cumplir obligaciones legales."] },
        { title: "4. Cuentas e identificación", paragraphs: ["Albor no crea una cuenta de acceso con contraseña. El nombre, los apellidos y el correo permanecen en tu dispositivo. Solo la actividad de lectura y las insignias obtenidas se guardan en Supabase."] },
        { title: "5. Servicios de terceros", paragraphs: ["Albor usa Supabase como proveedor de base de datos y backend. Supabase procesa en nombre de Albor la información en la nube descrita anteriormente y debe protegerla de acuerdo con esta política y la ley aplicable.", "En la fecha de esta política, Albor no utiliza un servicio independiente de publicidad, seguimiento, analítica o informes de fallos. Si cambia, se actualizarán esta política y las declaraciones de privacidad de App Store."] },
        { title: "6. Cesión y venta", paragraphs: ["Albor no vende tus datos personales. Solo se comparten con proveedores necesarios, como Supabase, o cuando la ley lo exige."] },
        { title: "7. Conservación y seguridad", paragraphs: ["Los datos en la nube se conservan mientras sean necesarios para prestar Albor, resolver solicitudes y cumplir obligaciones legales, o hasta completar una solicitud válida de eliminación. El nombre, los apellidos y las grabaciones permanecen localmente en tu dispositivo hasta que los elimines con los controles disponibles, sujeto a las copias de seguridad.", "Se aplican medidas razonables de seguridad, aunque ningún método puede garantizar seguridad absoluta."] },
        { title: "8. Tus opciones y derechos", paragraphs: [`Puedes solicitar acceso, corrección o eliminación de tu historial y tus insignias guardados en Supabase escribiendo a ${email}.`, "El nombre, los apellidos, el correo y las grabaciones se controlan en tu dispositivo y no forman parte de la eliminación en la nube. Puedes detener la recopilación futura dejando de usar Albor."] },
        { title: "9. Menores", paragraphs: ["Albor no está dirigido a menores que no alcancen la edad mínima de consentimiento para el tratamiento de datos en su país. Si crees que un menor ha facilitado datos, contáctanos."] },
        { title: "10. Cambios", paragraphs: ["Esta política puede actualizarse cuando cambien las funciones, proveedores u obligaciones legales. La versión vigente se publicará aquí."] },
      ],
    },
    support: {
      eyebrow: "Estamos para ayudarte",
      title: "Soporte de Albor",
      intro: "Obtén ayuda con la app, la privacidad o tu información almacenada mediante el canal público de soporte de Albor.",
      updatedLabel: "Información actualizada",
      updated: "18 de julio de 2026",
      sections: [
        { title: "Contactar con soporte", paragraphs: [`Escribe a ${email}. Es la dirección pública de Albor para consultas de producto, accesibilidad, privacidad y datos.`] },
        { title: "Qué incluir", bullets: ["Descripción breve del problema.", "Modelo del dispositivo y versión del sistema, si es relevante.", "Pantalla o función donde ocurrió.", "Información que ayude a identificar los datos de la app implicados."] },
        { title: "Protege la información sensible", paragraphs: ["No envíes contraseñas, datos de pago ni grabaciones. Albor no usa cuentas con contraseña y las grabaciones permanecen en tu dispositivo."] },
        { title: "Privacidad y eliminación", paragraphs: [`Para acceder, corregir o eliminar el historial y las insignias guardados en la nube, utiliza la página de Eliminación de datos o escribe a ${email}. El nombre, los apellidos, el correo y las grabaciones permanecen en tu dispositivo.`] },
        { title: "Desarrollador", paragraphs: ["Halil Oyri — Turquía"] },
      ],
    },
    terms: {
      eyebrow: "Uso de Albor",
      title: "Condiciones de uso",
      intro: "Estas condiciones rigen el uso de la app móvil Albor y de su sitio web y servicios relacionados.",
      updatedLabel: "Última actualización",
      updated: "18 de julio de 2026",
      sections: [
        { title: "1. Aceptación", paragraphs: ["Al acceder o usar Albor aceptas estas condiciones. Si no estás de acuerdo, no utilices el servicio."] },
        { title: "2. Operador", paragraphs: [`Albor es prestado por Halil Oyri en Turquía. Contacto: ${email}.`] },
        { title: "3. Servicio y contenido", paragraphs: ["Albor ofrece historias educativas breves y resúmenes inspirados en libros y áreas de conocimiento. El contenido es informativo y educativo; no constituye asesoramiento médico, jurídico, financiero ni profesional."] },
        { title: "4. Tu información", paragraphs: ["Eres responsable de la exactitud de los datos que introduces. El nombre, los apellidos y el correo permanecen localmente en tu dispositivo. Albor no ofrece una cuenta con contraseña. El tratamiento se describe en la Política de privacidad."] },
        { title: "5. Uso aceptable", bullets: ["No usar indebidamente, interrumpir, descompilar ni intentar acceder sin autorización a Albor.", "No copiar, redistribuir, vender ni explotar el contenido salvo permiso legal.", "No usar Albor infringiendo la ley o derechos de terceros."] },
        { title: "6. Propiedad intelectual", paragraphs: ["La marca, interfaz, textos originales, diseño y software de Albor están protegidos. Las obras de terceros pertenecen a sus respectivos titulares."] },
        { title: "7. Disponibilidad y cambios", paragraphs: ["Las funciones y contenidos pueden modificarse, suspenderse o retirarse. No se garantiza un funcionamiento ininterrumpido o sin errores."] },
        { title: "8. Servicios de terceros", paragraphs: ["Albor depende de infraestructura como Supabase, que puede estar sujeta a sus propias condiciones y compromisos de privacidad."] },
        { title: "9. Responsabilidad", paragraphs: ["En la medida permitida por la ley, Albor se ofrece según disponibilidad. Halil Oyri no responde de pérdidas indirectas o consecuentes. No se limitan derechos ni responsabilidades que legalmente no puedan limitarse."] },
        { title: "10. Ley aplicable", paragraphs: ["Estas condiciones se rigen por la ley de Turquía, sin limitar derechos imperativos del consumidor en tu país de residencia."] },
        { title: "11. Cambios y contacto", paragraphs: [`Las condiciones pueden actualizarse. La versión vigente se publicará aquí. Contacto: ${email}.`] },
      ],
    },
    deletion: {
      eyebrow: "Tus opciones de datos",
      title: "Eliminación de datos",
      intro: "Albor no crea una cuenta de usuario con contraseña, pero puedes solicitar la eliminación de los datos en la nube vinculados a la información que introdujiste.",
      updatedLabel: "Última actualización",
      updated: "18 de julio de 2026",
      sections: [
        { title: "Datos en la nube que pueden eliminarse", bullets: ["Historial de lectura almacenado.", "Registros de insignias obtenidas."] },
        { title: "Cómo solicitarlo", paragraphs: [`Envía un correo a ${email} con el asunto “Albor Data Deletion Request” e indica que deseas borrar tu historial de lectura y tus insignias.`] },
        { title: "Verificación y finalización", paragraphs: ["Albor puede solicitar información suficiente para identificar los datos correctos de la app. Tras ello, se borrarán los datos en la nube salvo obligación legal de conservarlos y recibirás una confirmación."] },
        { title: "Datos locales en tu dispositivo", paragraphs: ["El nombre, los apellidos, el correo y las grabaciones se guardan localmente y no se suben a Supabase. Elimínalos con los controles disponibles de la app o del dispositivo. Desinstalar la app suele eliminar los datos locales, según la configuración de copia de seguridad."] },
        { title: "No cancela suscripciones", paragraphs: ["Eliminar datos no cancela automáticamente una suscripción de App Store. Gestiona las suscripciones por separado en los ajustes de tu Apple ID."] },
      ],
    },
  },
};

const tr: LegalLocaleCopy = {
  back: "Albor’a dön",
  language: "Dil",
  contactLabel: "Herkese açık destek e-postası",
  contactPrompt: "Albor veya verileriniz hakkında sorunuz mu var?",
  operatorLabel: "Geliştirici ve veri sorumlusu",
  operator: "Halil Oyri",
  country: "Türkiye",
  nav: { privacy: "Gizlilik", support: "Destek", terms: "Koşullar", deletion: "Veri silme" },
  documents: {
    privacy: {
      eyebrow: "Gizliliğiniz",
      title: "Gizlilik Politikası",
      intro: "Bu politika Albor’un hangi bilgileri topladığını, nerede sakladığını, hangi amaçlarla kullandığını ve silme talebinin nasıl yapılacağını açıklar.",
      updatedLabel: "Son güncelleme",
      updated: "18 Temmuz 2026",
      sections: [
        { title: "1. Veri sorumlusu", paragraphs: [`Albor, Türkiye’de Halil Oyri tarafından işletilir. Gizlilik soruları ve talepleri için ${email} adresine yazabilirsiniz.`] },
        { title: "2. Albor’un topladığı bilgiler", bullets: ["Ad ve soyad: uygulamada doğrudan sizin tarafınızdan girilir ve yalnızca cihazınızda yerel olarak saklanır; Supabase’e gönderilmez.", "E-posta adresi: uygulamada doğrudan sizin tarafınızdan girilir ve yalnızca cihazınızda yerel olarak saklanır; Supabase’e gönderilmez.", "Okuma etkinliği: okuduğunuz hikâyeler, okuma geçmişinizi ve ilerlemenizi göstermek için Supabase’de saklanır.", "Başarılar: kazandığınız rozetler, uygulamada gösterilebilmesi için Supabase’de saklanır.", "Ses kayıtları: yalnızca cihazınızda yerel olarak saklanır. Albor bu kayıtları Supabase’e veya kendi sunucularına yüklemez."] },
        { title: "3. Bilgilerin kullanım amaçları", bullets: ["Albor deneyimini sunmak ve sürdürmek.", "Okuma geçmişinizi, ilerlemenizi ve rozetlerinizi göstermek.", "Girdiğiniz bilgileri uygulama verilerinizle ilişkilendirmek.", "Destek, gizlilik ve silme taleplerini yanıtlamak.", "Hizmeti korumak ve yürürlükteki yasal yükümlülüklere uymak."] },
        { title: "4. Hesap ve kimliklendirme", paragraphs: ["Albor parola ile giriş yapılan bir kullanıcı hesabı oluşturmaz. Ad, soyad ve e-posta adresiniz cihazınızda kalır. Yalnızca okuma etkinliğiniz ve rozetleriniz Supabase’de saklanır."] },
        { title: "5. Üçüncü taraf hizmetleri", paragraphs: ["Albor, okuma etkinliği ve rozet kayıtları için veritabanı ve backend hizmet sağlayıcısı olarak Supabase kullanır. Supabase bu kayıtları Albor adına işler ve bu politika ile yürürlükteki mevzuata uygun koruma sağlaması beklenir.", "Bu politikanın tarihinde Albor ayrı bir reklam, takip, analiz veya crash raporlama hizmeti kullanmamaktadır. Bu durum değişirse politika ve App Store gizlilik beyanları güncellenecektir."] },
        { title: "6. Paylaşım ve satış", paragraphs: ["Albor kişisel bilgilerinizi satmaz. Bilgiler yalnızca hizmetin çalışması için gereken Supabase gibi sağlayıcılarla veya kanunen zorunlu olduğunda paylaşılır."] },
        { title: "7. Saklama, güvenlik ve yurt dışı işleme", paragraphs: ["Supabase’de tutulan okuma geçmişi ve rozetler Albor’u sunmak, talepleri sonuçlandırmak ve yasal yükümlülükleri yerine getirmek için gerekli olduğu sürece ya da geçerli bir silme talebi tamamlanana kadar saklanır. Ad, soyad, e-posta adresi ve ses kayıtları; mevcut uygulama veya cihaz kontrolleriyle kaldırılana kadar yalnızca cihazınızda kalır. Cihaz yedekleme ayarlarınız farklı sonuç doğurabilir.", "Supabase altyapısının bulunduğu ülkelerde veri işlenebilir. Makul teknik ve idari önlemler uygulanır; ancak hiçbir saklama veya aktarım yöntemi için mutlak güvenlik garanti edilemez."] },
        { title: "8. Tercihleriniz ve haklarınız", paragraphs: [`Supabase’de tutulan okuma geçmişi ve rozetler için erişim, düzeltme veya silme talebinizi ${email} adresine gönderebilirsiniz.`, "Ad, soyad, e-posta adresi ve ses kayıtları cihazınızdan yönetilir ve bulut silme sürecine dahil değildir. Albor’u kullanmayı bırakarak gelecekteki veri toplamayı durdurabilirsiniz."] },
        { title: "9. Çocukların gizliliği", paragraphs: ["Albor, bulunduğu ülkede kişisel veri işlenmesine kendi başına onay verebilmek için gereken asgari yaşın altındaki çocuklara yönelik değildir. Bir çocuğun bilgi sağladığını düşünüyorsanız inceleme ve uygun silme için bize ulaşın."] },
        { title: "10. Politika değişiklikleri", paragraphs: ["Albor’un özellikleri, hizmet sağlayıcıları veya yasal yükümlülükleri değiştiğinde bu politika güncellenebilir. Güncel sürüm ve tarih bu sayfada yayımlanır."] },
      ],
    },
    support: {
      eyebrow: "Yardım için buradayız",
      title: "Albor Destek",
      intro: "Uygulama, gizlilik veya saklanan bilgileriniz hakkında Albor’un herkese açık destek kanalından yardım alın.",
      updatedLabel: "Destek bilgisi güncellendi",
      updated: "18 Temmuz 2026",
      sections: [
        { title: "Destekle iletişim", paragraphs: [`${email} adresine e-posta gönderin. Bu adres ürün, erişilebilirlik, gizlilik ve veri konularında Albor’un herkese açık destek adresidir.`] },
        { title: "E-postaya eklemeniz faydalı olacak bilgiler", bullets: ["Sorunun kısa açıklaması.", "İlgiliyse cihaz modeli ve işletim sistemi sürümü.", "Sorunun yaşandığı ekran veya özellik.", "Talebinizle ilgili uygulama verilerini belirlemeye yardımcı olacak bilgiler."] },
        { title: "Hassas bilgileri koruyun", paragraphs: ["E-posta ile parola, ödeme bilgisi veya ses kaydı göndermeyin. Albor parola tabanlı hesap kullanmaz; ses kayıtları cihazınızda kalır."] },
        { title: "Gizlilik ve veri silme", paragraphs: [`Bulutta saklanan okuma geçmişi ve rozetlerinize erişim, düzeltme veya silme için Veri Silme sayfasını kullanın ya da ${email} adresine yazın. Ad, soyad, e-posta adresi ve ses kayıtları cihazınızda kalır.`] },
        { title: "Geliştirici", paragraphs: ["Halil Oyri — Türkiye"] },
      ],
    },
    terms: {
      eyebrow: "Albor’u kullanmak",
      title: "Kullanım Koşulları",
      intro: "Bu koşullar Albor mobil uygulamasını, bağlantılı web sitesini ve hizmetleri kullanımınızı düzenler.",
      updatedLabel: "Son güncelleme",
      updated: "18 Temmuz 2026",
      sections: [
        { title: "1. Kabul", paragraphs: ["Albor’a erişerek veya kullanarak bu koşulları kabul edersiniz. Kabul etmiyorsanız hizmeti kullanmayın."] },
        { title: "2. Hizmet sağlayıcı", paragraphs: [`Albor, Türkiye’de Halil Oyri tarafından sunulur. Sorularınız için ${email} adresine yazabilirsiniz.`] },
        { title: "3. Hizmet ve içerik", paragraphs: ["Albor, kitaplardan ve bilgi alanlarından esinlenen kısa eğitici hikâyeler ve özetler sunar. İçerik genel bilgi ve öğrenme amaçlıdır; tıbbi, hukuki, finansal veya başka bir profesyonel tavsiye değildir."] },
        { title: "4. Girdiğiniz bilgiler", paragraphs: ["Girdiğiniz bilgilerin doğruluğundan siz sorumlusunuz. Ad, soyad ve e-posta adresi yalnızca cihazınızda tutulur. Albor parola tabanlı bir giriş hesabı sunmaz. Bilgilerinizin işlenmesi Gizlilik Politikası’nda açıklanır."] },
        { title: "5. Kabul edilebilir kullanım", bullets: ["Albor’u kötüye kullanmayın, çalışmasını bozmayın, tersine mühendislik yapmayın veya yetkisiz erişim denemeyin.", "Yürürlükteki hukukun izin verdiği durumlar dışında Albor içeriğini kopyalamayın, yeniden dağıtmayın, satmayın veya ticari olarak kullanmayın.", "Albor’u hukuka veya başkalarının haklarına aykırı biçimde kullanmayın."] },
        { title: "6. Fikri mülkiyet", paragraphs: ["Albor markası, arayüzü, özgün metinleri, tasarımı ve yazılımı ilgili fikri mülkiyet mevzuatıyla korunur. Üçüncü taraf eserlere ilişkin haklar ilgili hak sahiplerine aittir."] },
        { title: "7. Kullanılabilirlik ve değişiklikler", paragraphs: ["Özellikler ve içerikler güncellenebilir, askıya alınabilir veya sona erdirilebilir. Albor kesintisiz ya da hatasız çalışma garantisi vermez."] },
        { title: "8. Üçüncü taraf hizmetleri", paragraphs: ["Albor, Supabase gibi üçüncü taraf altyapılardan yararlanır. Bu hizmetlerin kendi koşulları ve gizlilik taahhütleri geçerli olabilir."] },
        { title: "9. Sorumluluk sınırı", paragraphs: ["Yürürlükteki hukukun izin verdiği ölçüde Albor mevcut haliyle sunulur. Halil Oyri, hizmet kullanımından doğan dolaylı veya sonuçsal zararlardan sorumlu değildir. Hukuken sınırlandırılamayan hak ve sorumluluklar saklıdır."] },
        { title: "10. Uygulanacak hukuk", paragraphs: ["Bu koşullara Türkiye hukuku uygulanır. İkamet ettiğiniz ülkedeki emredici tüketici haklarınız bu hükümle sınırlandırılmaz."] },
        { title: "11. Değişiklik ve iletişim", paragraphs: [`Albor geliştikçe koşullar güncellenebilir. Güncel sürüm burada yayımlanır. İletişim: ${email}.`] },
      ],
    },
    deletion: {
      eyebrow: "Veri tercihleriniz",
      title: "Veri Silme",
      intro: "Albor parola tabanlı bir kullanıcı hesabı oluşturmaz. Bununla birlikte, girdiğiniz bilgilerle bağlantılı bulut verilerinin silinmesini talep edebilirsiniz.",
      updatedLabel: "Son güncelleme",
      updated: "18 Temmuz 2026",
      sections: [
        { title: "Silinebilen bulut verileri", bullets: ["Saklanan okuma geçmişiniz.", "Kazandığınız rozet kayıtları."] },
        { title: "Silme talebi nasıl yapılır?", paragraphs: [`${email} adresine “Albor Data Deletion Request” konulu bir e-posta gönderin. Okuma geçmişinizin ve rozet kayıtlarınızın silinmesini istediğinizi belirtin.`] },
        { title: "Doğrulama ve tamamlanma", paragraphs: ["Albor, doğru uygulama verilerini belirlemek için yeterli bilgiyi isteyebilir. Yasal olarak saklanması gerekmeyen ilişkili bulut verileri silinir ve işlem tamamlandığında size bilgi verilir."] },
        { title: "Cihazınızdaki yerel veriler", paragraphs: ["Ad, soyad, e-posta adresi ve ses kayıtları cihazda yerel olarak tutulur ve Supabase’e yüklenmez. Mevcut uygulama veya cihaz kontrolleriyle bu verileri kaldırabilirsiniz. Uygulamayı silmek, cihaz ve yedekleme ayarlarınıza bağlı olarak uygulama içindeki yerel verileri normalde kaldırır."] },
        { title: "Abonelik iptali değildir", paragraphs: ["Veri silme, App Store aboneliğini veya satın almayı otomatik olarak iptal etmez. Aboneliklerinizi Apple Kimliği abonelik ayarlarından ayrıca yönetin."] },
      ],
    },
  },
};

export const legalCopy: Record<Locale, LegalLocaleCopy> = { en, de, es, tr };
