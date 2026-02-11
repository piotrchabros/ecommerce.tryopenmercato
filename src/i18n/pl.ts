import type { Translations } from "./types";

export const pl = {
  nav: {
    links: [
      { label: "Us\u0142ugi", href: "#services" },
      { label: "Mo\u017Cliwo\u015Bci", href: "#capabilities" },
      { label: "Proces", href: "#process" },
      { label: "Technologie", href: "#stack" },
      { label: "Zesp\u00F3\u0142", href: "#team" },
      { label: "Kontakt", href: "#contact" },
    ],
    cta: "Bezp\u0142atna konsultacja 45 min",
  },
  hero: {
    badge: "Platforma handlowa nowej generacji",
    titleStart: "Platformy handlowe ",
    titleHighlight: "wykraczaj\u0105ce poza tradycyjne sklepy",
    description:
      "Open Mercato to modularna platforma \u0142\u0105cz\u0105ca CRM, ERP, automatyzacj\u0119 i architektur\u0119 gotow\u0105 na AI \u2014 aby\u015B m\u00F3g\u0142 budowa\u0107 w pe\u0142ni dopasowane ekosystemy handlowe bez zaczynania od zera.",
    ctaPrimary: "Um\u00F3w bezp\u0142atn\u0105 konsultacj\u0119 (45 min)",
    ctaSecondary: "Poznaj us\u0142ugi",
    stats: [
      { value: "80%", label: "Gotowej infrastruktury" },
      { value: "10x", label: "Szybszy czas wdro\u017Cenia" },
      { value: "0", label: "Uzale\u017Cnienia od dostawcy" },
      { value: "24/7", label: "Wsparcie i monitoring" },
    ],
  },
  services: {
    label: "Co robimy",
    titleStart: "Mo\u017Cliwo\u015Bci platformy ",
    titleHighlight: "handlowej",
    description:
      "Od portali zam\u00F3wie\u0144 B2B po wyceny oparte na AI \u2014 Open Mercato dostarcza modularn\u0105 podstaw\u0119 dla system\u00F3w handlowych wykraczaj\u0105cych daleko poza zwyk\u0142y sklep.",
    items: [
      {
        title: "Platformy B2B Commerce",
        description:
          "Portale zam\u00F3wie\u0144 partnerskich, ceny kontraktowe, hierarchie kont, oferty negocjowane i procesy akceptacji \u2014 stworzone dla z\u0142o\u017Conych ekosystem\u00F3w B2B.",
      },
      {
        title: "Sprzeda\u017C oparta na CPQ",
        description:
          "Dynamiczne silniki cenowe, rabaty regu\u0142owe, z\u0142o\u017Cone konfiguracje produkt\u00F3w i automatyczne generowanie ofert dla bran\u017C, w kt\u00F3rych ka\u017Cde zam\u00F3wienie jest unikalne.",
      },
      {
        title: "Unified Commerce + CRM + ERP",
        description:
          "Po\u0142\u0105czenie handlu z wewn\u0119trznymi systemami biznesowymi \u2014 cykl \u017Cycia klienta, orkiestracja zam\u00F3wie\u0144, fakturowanie, wsparcie i zarz\u0105dzanie umowami w jednej platformie.",
      },
      {
        title: "Portale samoobs\u0142ugowe",
        description:
          "Panele klient\u00F3w, rejestracja transakcji partnerskich, zarz\u0105dzanie subskrypcjami i obs\u0142uga zg\u0142osze\u0144 \u2014 transformacja handlu w platform\u0119 relacji.",
      },
      {
        title: "Multi-Tenant SaaS Commerce",
        description:
          "Wbudowana wielodzier\u017Cawczo\u015B\u0107 dla platform marketplace, ekosystem\u00F3w dostawc\u00F3w, rozwi\u0105za\u0144 multi-brand i produkt\u00F3w white-label SaaS.",
      },
      {
        title: "Headless i architektura kompozytowa",
        description:
          "Podej\u015Bcie API-first umo\u017Cliwiaj\u0105ce headless storefronty, aplikacje mobilne, niestandardowy UX dla zespo\u0142\u00F3w wewn\u0119trznych i bezproblemowe integracje marketplace.",
      },
    ],
  },
  capabilities: {
    label: "Dlaczego Open Mercato",
    titleStart: "Nieuczciwa ",
    titleHighlight: "przewaga",
    description:
      "Gotowa w 80% platforma enterprise \u2014 zarz\u0105dzanie to\u017Csamo\u015Bci\u0105, workflowy, uprawnienia, wielodzier\u017Cawczo\u015B\u0107 i automatyzacja wbudowane, aby Tw\u00F3j zesp\u00F3\u0142 m\u00F3g\u0142 skupi\u0107 si\u0119 na unikalnej logice handlowej.",
    items: [
      {
        title: "Handel oparty na workflow",
        description:
          "Architektura zdarzeniowa umo\u017Cliwiaj\u0105ca automatyczne akceptacje zam\u00F3wie\u0144, przeliczanie cen, onboarding klient\u00F3w i dynamiczn\u0105 dost\u0119pno\u015B\u0107 produkt\u00F3w \u2014 g\u0142\u0119boka orkiestracja wykraczaj\u0105ca poza proste triggery.",
      },
      {
        title: "Do\u015Bwiadczenia wspierane przez AI",
        description:
          "Przygotowana pod integracj\u0119 AI \u2014 inteligentne rekomendacje produkt\u00F3w, konwersacyjni asystenci zam\u00F3wie\u0144, automatyczne wyceny, optymalizacja cen przez AI i workflowy agentowe.",
      },
      {
        title: "Bezpiecze\u0144stwo i governance enterprise",
        description:
          "Kontrola dost\u0119pu oparta na rolach, hierarchie organizacyjne, szyfrowanie na poziomie dzier\u017Cawcy, logowanie audytowe i bezpieczne warstwy API dla finans\u00F3w, opieki zdrowotnej i regulowanych sektor\u00F3w B2B.",
      },
      {
        title: "Szybko\u015B\u0107 deweloperska i rozszerzalno\u015B\u0107",
        description:
          "Gotowe scaffoldingi enterprise, dynamiczne encje i formularze, nowoczesna architektura TypeScript i bezpieczne rozszerzenia \u2014 pe\u0142na w\u0142asno\u015B\u0107 kodu bez uzale\u017Cnienia od dostawcy.",
      },
    ],
  },
  process: {
    label: "Nasz proces",
    titleStart: "Od wizji do ",
    titleHighlight: "produkcji",
    description:
      "Sprawdzona metodologia dostarczania, kt\u00F3ra przekszta\u0142ca z\u0142o\u017Cone wymagania handlowe w gotowe platformy produkcyjne.",
    stepPrefix: "Krok",
    items: [
      {
        step: "01",
        title: "Odkrywanie i strategia",
        description:
          "Audytujemy Tw\u00F3j obecny stos handlowy, mapujemy procesy biznesowe i wskazujemy, gdzie modularna podstawa Open Mercato zast\u0119puje miesi\u0105ce pracy nad infrastruktur\u0105.",
      },
      {
        step: "02",
        title: "Architektura platformy",
        description:
          "Nasi architekci projektuj\u0105 Tw\u00F3j ekosystem handlowy \u2014 dobieraj\u0105c odpowiednie modu\u0142y, definiuj\u0105c struktury multi-tenant, logik\u0119 cenow\u0105 i punkty integracji.",
      },
      {
        step: "03",
        title: "Zwinne budowanie i integracja",
        description:
          "Budujemy iteracyjnie w 2-tygodniowych sprintach, wykorzystuj\u0105c gotowe scaffoldingi Open Mercato, aby zespo\u0142y mog\u0142y skupi\u0107 si\u0119 na unikalnej logice handlowej od pierwszego dnia.",
      },
      {
        step: "04",
        title: "Testowanie i migracja",
        description:
          "Rygorystyczne QA, testy wydajno\u015Bciowe, audyty bezpiecze\u0144stwa i migracja danych bez przerw \u2014 zapewniaj\u0105c zgodno\u015B\u0107 dla regulowanych bran\u017C.",
      },
      {
        step: "05",
        title: "Wdro\u017Cenie i rozw\u00F3j",
        description:
          "Wdra\u017Camy, monitorujemy i ci\u0105gle rozwijamy Twoj\u0105 platform\u0119 \u2014 z bezpiecznymi rozszerzeniami, kt\u00F3re utrzymuj\u0105 system gotowy na przysz\u0142o\u015B\u0107 bez uzale\u017Cnienia od dostawcy.",
      },
    ],
  },
  techStack: {
    label: "Stos technologiczny",
    titleStart: "M\u00F3wimy j\u0119zykiem ",
    titleHighlight: "Twojego stosu",
    description:
      "Wieloplatformowa ekspertyza obejmuj\u0105ca nowoczesny ekosystem handlowy i korporacyjny \u2014 zbudowana na fundamencie TypeScript-first.",
    categories: [
      {
        label: "Platformy",
        items: [
          "Salesforce",
          "SAP",
          "Microsoft Dynamics",
          "Odoo",
          "HubSpot",
          "NetSuite",
        ],
      },
      {
        label: "Ecommerce",
        items: [
          "Shopify Plus",
          "Magento / Adobe Commerce",
          "WooCommerce",
          "BigCommerce",
          "Medusa",
          "Saleor",
        ],
      },
      {
        label: "Backend",
        items: ["Node.js", "Python", "Java / Spring", ".NET", "Go", "PostgreSQL"],
      },
      {
        label: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Vue.js",
          "Angular",
        ],
      },
      {
        label: "Infra",
        items: [
          "AWS",
          "Google Cloud",
          "Azure",
          "Docker",
          "Kubernetes",
          "Terraform",
        ],
      },
    ],
  },
  team: {
    label: "Nasz zesp\u00F3\u0142",
    titleStart: "Ludzie stoj\u0105cy za ",
    titleHighlight: "Open Mercato",
    description:
      "Zesp\u00F3\u0142 do\u015Bwiadczonych in\u017Cynier\u00F3w i tw\u00F3rc\u00F3w z dekadami \u0142\u0105cznego do\u015Bwiadczenia w dostarczaniu oprogramowania enterprise.",
    members: [
      {
        name: "Piotr Chabros",
        role: "Fullstack Developer i przedsi\u0119biorca",
        initials: "PC",
        description:
          "Fullstack developer i przedsi\u0119biorca z ponad 15-letnim do\u015Bwiadczeniem w IT. Odpowiada za wizj\u0119 firmy i strategi\u0119 technologiczn\u0105.",
      },
      {
        name: "Jacek Tomaszewski",
        role: "Fullstack TypeScript Developer",
        initials: "JT",
        description:
          "Fullstack TypeScript developer i w\u0142a\u015Bciciel software house\u2019u z ponad 15-letnim do\u015Bwiadczeniem w IT. Wnosi g\u0142\u0119bok\u0105 ekspertyz\u0119 in\u017Cyniersk\u0105 i przyw\u00F3dztwo.",
      },
      {
        name: "Robert Zapala",
        role: "Fullstack Developer",
        initials: "RZ",
        description:
          "Fullstack developer z ponad 10-letnim do\u015Bwiadczeniem w IT. Wsp\u00F3\u0142pracowa\u0142 z rozpoznawalnymi mi\u0119dzynarodowymi markami, dostarczaj\u0105c rozwi\u0105zania klasy enterprise.",
      },
      {
        name: "Kamil Rogaczewski",
        role: "AI Prompt Engineer",
        initials: "KR",
        description:
          "Frameworkowo-agnostyczny AI prompt engineer, pasjonat rozwoju opartego na AI, pracuj\u0105cy nad innowacyjnymi prywatnymi projektami.",
      },
    ],
  },
  contact: {
    label: "Skontaktuj si\u0119",
    titleStart: "Gotowy zbudowa\u0107 swoj\u0105 ",
    titleHighlight: "platform\u0119 handlow\u0105?",
    description:
      "Porozmawiajmy o tym, jak modularna podstawa Open Mercato mo\u017Ce przyspieszy\u0107 Tw\u00F3j handel B2B, ujednolici\u0107 operacje i wyeliminowa\u0107 uzale\u017Cnienie od dostawcy.",
    benefits: [
      {
        title: "Ocena platformy",
        desc: "45-minutowa analiza Twojej architektury handlowej i mo\u017Cliwo\u015Bci",
      },
      {
        title: "Indywidualny plan dzia\u0142ania",
        desc: "Wyb\u00F3r modu\u0142\u00F3w, strategia integracji i etapowy plan wdro\u017Cenia",
      },
      {
        title: "Szybki start",
        desc: "Od startu do pierwszego kamienia milowego w zaledwie 2 tygodnie z 80% gotowej platformy",
      },
    ],
    ctaPrimary: "Um\u00F3w bezp\u0142atn\u0105 konsultacj\u0119 (45 min)",
    emailPrefix: "Lub napisz do nas bezpo\u015Brednio na",
  },
  contactForm: {
    nameLabel: "Imi\u0119 i nazwisko",
    namePlaceholder: "Jan Kowalski",
    emailLabel: "Email s\u0142u\u017Cbowy",
    emailPlaceholder: "jan@firma.pl",
    companyLabel: "Firma",
    companyOptional: "(opcjonalnie)",
    companyPlaceholder: "Nazwa firmy",
    messageLabel: "Jak mo\u017Cemy pom\u00F3c?",
    messagePlaceholder: "Opowiedz nam o swoim projekcie, celach lub wyzwaniach...",
    submit: "Wy\u015Blij wiadomo\u015B\u0107",
    sending: "Wysy\u0142anie...",
    sentTitle: "Wiadomo\u015B\u0107 wys\u0142ana",
    sentDescription:
      "Dzi\u0119kujemy za kontakt. Odpowiemy w ci\u0105gu 24 godzin.",
    errorTitle: "Co\u015B posz\u0142o nie tak",
    errorDescription:
      "Spr\u00F3buj ponownie lub napisz do nas bezpo\u015Brednio na hello@tryopenmercato.com",
    tryAgain: "Spr\u00F3buj ponownie",
  },
  footer: {
    tagline: "Platformy handlowe nowej generacji dla przedsi\u0119biorstw",
    companyTitle: "Firma",
    addressTitle: "Adres",
    phoneTitle: "Telefon",
    emailTitle: "Email",
    copyright: "Bespokesoft Piotr Chabros. Wszelkie prawa zastrze\u017Cone.",
    privacyPolicy: "Polityka prywatno\u015Bci",
    termsOfService: "Regulamin",
    backToHome: "\u2190 Powr\u00F3t na stron\u0119 g\u0142\u00F3wn\u0105",
  },
  privacy: {
    title: "Polityka prywatno\u015Bci",
    lastUpdated: "Ostatnia aktualizacja: 11 lutego 2026",
    intro: "Bespokesoft Piotr Chabros (\u201Emy\u201D, \u201Enam\u201D, \u201Enasz\u201D), dzia\u0142aj\u0105c pod mark\u0105 Open Mercato, zobowi\u0105zuje si\u0119 do ochrony Twojej prywatno\u015Bci. Niniejsza Polityka prywatno\u015Bci wyja\u015Bnia, w jaki spos\u00F3b zbieramy, wykorzystujemy i chronimy Twoje dane osobowe podczas odwiedzania naszej strony internetowej lub korzystania z naszych us\u0142ug, zgodnie z Og\u00F3lnym rozporz\u0105dzeniem o ochronie danych (RODO) oraz obowi\u0105zuj\u0105cym prawem polskim.",
    sections: [
      {
        title: "1. Administrator danych",
        content:
          "Administratorem Twoich danych osobowych jest Bespokesoft Piotr Chabros, z siedzib\u0105 przy ul. Pastewnej 27b, 02-954 Warszawa, Polska (NIP: PL7010510120). Mo\u017Cesz si\u0119 z nami skontaktowa\u0107 pod adresem hello@tryopenmercato.com lub telefonicznie +48 667 582 525.",
      },
      {
        title: "2. Dane, kt\u00F3re zbieramy",
        items: [
          "Dane kontaktowe \u2014 imi\u0119, adres e-mail, numer telefonu i nazwa firmy podane za po\u015Brednictwem formularza kontaktowego lub bezpo\u015Bredniej komunikacji.",
          "Dane techniczne \u2014 adres IP, typ przegl\u0105darki, system operacyjny i zachowania podczas przegl\u0105dania, zbierane automatycznie podczas odwiedzania naszej strony.",
          "Dane komunikacyjne \u2014 zapisy korespondencji, gdy kontaktujesz si\u0119 z nami za po\u015Brednictwem e-maila, telefonu lub formularza kontaktowego.",
          "Pliki cookie \u2014 ma\u0142e pliki danych przechowywane na Twoim urz\u0105dzeniu w celu poprawy do\u015Bwiadczenia przegl\u0105dania. Szczeg\u00F3\u0142y w punkcie 8.",
        ],
      },
      {
        title: "3. Jak wykorzystujemy Twoje dane",
        items: [
          "Aby odpowiada\u0107 na Twoje zapytania i dostarczac informacje o naszych us\u0142ugach.",
          "Aby \u015Bwiadczy\u0107, utrzymywa\u0107 i usprawnia\u0107 nasze us\u0142ugi doradztwa i rozwoju CRM oraz ERP.",
          "Aby wysy\u0142a\u0107 aktualizacje projektowe i komunikacj\u0119 zwi\u0105zan\u0105 z us\u0142ugami.",
          "Aby wywi\u0105zywa\u0107 si\u0119 z obowi\u0105zk\u00F3w prawnych i chroni\u0107 nasze uzasadnione interesy.",
          "Aby analizowa\u0107 ruch na stronie i poprawia\u0107 nasz\u0105 obecno\u015B\u0107 online.",
        ],
      },
      {
        title: "4. Podstawa prawna przetwarzania (RODO art. 6)",
        items: [
          "Zgoda (art. 6 ust. 1 lit. a) \u2014 gdy wype\u0142niasz nasz formularz kontaktowy lub zapisujesz si\u0119 na komunikacj\u0119.",
          "Wykonanie umowy (art. 6 ust. 1 lit. b) \u2014 gdy przetwarzanie jest niezb\u0119dne do \u015Bwiadczenia us\u0142ug, kt\u00F3re zleci\u0142e\u015B.",
          "Uzasadniony interes (art. 6 ust. 1 lit. f) \u2014 do analityki internetowej, zapobiegania oszustwom i usprawniania naszych us\u0142ug.",
          "Obowi\u0105zek prawny (art. 6 ust. 1 lit. c) \u2014 gdy jeste\u015Bmy zobowi\u0105zani do przechowywania danych w celach podatkowych lub ksi\u0119gowych.",
        ],
      },
      {
        title: "5. Udost\u0119pnianie danych",
        content:
          "Nie sprzedajemy Twoich danych osobowych. Mo\u017Cemy udost\u0119pnia\u0107 Twoje dane zaufanym dostawcom us\u0142ug, kt\u00F3rzy pomagaj\u0105 nam w prowadzeniu strony internetowej i \u015Bwiadczeniu us\u0142ug (np. dostawcy hostingu, us\u0142ugi e-mail), ale wy\u0142\u0105cznie w niezb\u0119dnym zakresie i na podstawie odpowiednich um\u00F3w powierzenia przetwarzania danych. Mo\u017Cemy r\u00F3wnie\u017C ujawni\u0107 dane, gdy wymaga tego prawo lub w celu ochrony naszych praw.",
      },
      {
        title: "6. Przekazywanie danych mi\u0119dzynarodowe",
        content:
          "Twoje dane mog\u0105 by\u0107 przekazywane i przetwarzane w krajach poza Europejskim Obszarem Gospodarczym (EOG). W takich przypadkach zapewniamy odpowiednie zabezpieczenia, takie jak Standardowe Klauzule Umowne zatwierdzone przez Komisj\u0119 Europejsk\u0105, w celu ochrony Twoich danych zgodnie z wymogami RODO.",
      },
      {
        title: "7. Okres przechowywania danych",
        content:
          "Przechowujemy Twoje dane osobowe tylko tak d\u0142ugo, jak jest to niezb\u0119dne do realizacji cel\u00F3w opisanych w niniejszej polityce lub wymagane przez prawo. Zg\u0142oszenia z formularza kontaktowego przechowujemy do 24 miesi\u0119cy od ostatniej interakcji. Dane projektowe przechowujemy przez czas trwania wsp\u00F3\u0142pracy plus 5 lat w celach prawnych i ksi\u0119gowych.",
      },
      {
        title: "8. Pliki cookie",
        content:
          "Nasza strona internetowa u\u017Cywa niezb\u0119dnych plik\u00F3w cookie wymaganych do prawid\u0142owego dzia\u0142ania strony, a tak\u017Ce analitycznych plik\u00F3w cookie, aby zrozumie\u0107, jak odwiedzaj\u0105cy korzystaj\u0105 z naszej strony. Mo\u017Cesz zarz\u0105dza\u0107 preferencjami dotycz\u0105cymi plik\u00F3w cookie w ustawieniach przegl\u0105darki. Wy\u0142\u0105czenie niezb\u0119dnych plik\u00F3w cookie mo\u017Ce wp\u0142yn\u0105\u0107 na dzia\u0142anie strony.",
      },
      {
        title: "9. Twoje prawa",
        items: [
          "Prawo dost\u0119pu \u2014 uzyskanie potwierdzenia, czy przetwarzamy Twoje dane, i \u017C\u0105danie kopii.",
          "Prawo do sprostowania \u2014 \u017C\u0105danie poprawienia niedok\u0142adnych lub niepe\u0142nych danych.",
          "Prawo do usuni\u0119cia \u2014 \u017C\u0105danie usuni\u0119cia danych, gdy nie s\u0105 ju\u017C niezb\u0119dne.",
          "Prawo do ograniczenia \u2014 \u017C\u0105danie ograniczenia przetwarzania Twoich danych.",
          "Prawo do przenoszenia danych \u2014 otrzymanie danych w ustrukturyzowanym, nadaj\u0105cym si\u0119 do odczytu maszynowego formacie.",
          "Prawo do sprzeciwu \u2014 sprzeciw wobec przetwarzania opartego na uzasadnionym interesie lub marketingu bezpo\u015Brednim.",
          "Prawo do cofni\u0119cia zgody \u2014 cofni\u0119cie zgody w dowolnym momencie bez wp\u0142ywu na wcze\u015Bniejsze przetwarzanie.",
        ],
        footer:
          "Aby skorzysta\u0107 z kt\u00F3regokolwiek z tych praw, skontaktuj si\u0119 z nami pod adresem hello@tryopenmercato.com. Odpowiemy w ci\u0105gu 30 dni. Masz r\u00F3wnie\u017C prawo z\u0142o\u017Cy\u0107 skarg\u0119 do polskiego organu nadzorczego (UODO \u2014 Urz\u0105d Ochrony Danych Osobowych).",
      },
      {
        title: "10. Zmiany w polityce",
        content:
          "Mo\u017Cemy od czasu do czasu aktualizowa\u0107 niniejsz\u0105 Polityk\u0119 prywatno\u015Bci. Zmiany b\u0119d\u0105 publikowane na tej stronie ze zaktualizowan\u0105 dat\u0105 \u201EOstatnia aktualizacja\u201D. Zachcamy do regularnego przegl\u0105dania tej polityki.",
      },
    ],
  },
  terms: {
    title: "Regulamin",
    lastUpdated: "Ostatnia aktualizacja: 11 lutego 2026",
    intro: "Niniejszy Regulamin reguluje korzystanie ze strony internetowej Open Mercato oraz us\u0142ug \u015Bwiadczonych przez Bespokesoft Piotr Chabros. Korzystaj\u0105c z naszej strony internetowej lub zlecaj\u0105c nam us\u0142ugi, akceptujesz niniejszy regulamin w ca\u0142o\u015Bci. Prosimy o uwa\u017Cne zapoznanie si\u0119 z jego tre\u015Bci\u0105.",
    sections: [
      {
        title: "1. Definicje",
        items: [
          "\u201EFirma\u201D, \u201Emy\u201D, \u201Enam\u201D, \u201Enasz\u201D \u2014 Bespokesoft Piotr Chabros, z siedzib\u0105 przy ul. Pastewnej 27b, 02-954 Warszawa, Polska (NIP: PL7010510120), dzia\u0142aj\u0105ca pod mark\u0105 Open Mercato.",
          "\u201EKlient\u201D, \u201ETy\u201D, \u201ETw\u00F3j\u201D \u2014 ka\u017Cda osoba fizyczna, osoba prawna lub jednostka organizacyjna korzystaj\u0105ca z naszej strony internetowej lub zlecaj\u0105ca nam us\u0142ugi.",
          "\u201EUs\u0142ugi\u201D \u2014 doradztwo, projektowanie, rozw\u00F3j, integracja i wsparcie CRM oraz ERP \u015Bwiadczone przez Firm\u0119.",
          "\u201EStrona internetowa\u201D \u2014 strona dost\u0119pna pod adresem tryopenmercato.com i wszystkie jej subdomeny.",
          "\u201EUmowa\u201D \u2014 kontrakt na \u015Bwiadczenie Us\u0142ug zawarty mi\u0119dzy Firm\u0105 a Klientem.",
        ],
      },
      {
        title: "2. Postanowienia og\u00F3lne",
        items: [
          "Niniejszy Regulamin reguluje korzystanie ze Strony internetowej i \u015Bwiadczenie Us\u0142ug przez Firm\u0119.",
          "Korzystaj\u0105c ze Strony internetowej lub zlecaj\u0105c nam Us\u0142ugi, zgadzasz si\u0119 na warunki niniejszego Regulaminu. Je\u015Bli si\u0119 nie zgadzasz, prosimy o niekorzystanie ze Strony lub naszych Us\u0142ug.",
          "Firma zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym momencie. Zmiany wchodz\u0105 w \u017Cycie z chwil\u0105 publikacji na tej stronie.",
        ],
      },
      {
        title: "3. Us\u0142ugi",
        content:
          "Firma \u015Bwiadczy us\u0142ugi doradztwa i rozwoju CRM oraz ERP dostosowane do potrzeb firm ecommerce. Szczeg\u00F3\u0142owy zakres, harmonogram, rezultaty i ceny Us\u0142ug s\u0105 okre\u015Blone w indywidualnych umowach projektowych lub zakresach prac zawartych mi\u0119dzy Firm\u0105 a Klientem.",
        items: [
          "Propozycje us\u0142ug i kosztorysy nie s\u0105 wi\u0105\u017C\u0105ce, chyba \u017Ce zostan\u0105 potwierdzone w podpisanej Umowie.",
          "Firma b\u0119dzie \u015Bwiadczy\u0107 Us\u0142ugi z nale\u017Cyt\u0105 staranno\u015Bci\u0105 zawodow\u0105 i zgodnie z najlepszymi praktykami bran\u017Cowymi.",
          "Wszelkie zmiany w uzgodnionym zakresie Us\u0142ug wymagaj\u0105 pisemnej zgody obu stron.",
        ],
      },
      {
        title: "4. Obowi\u0105zki Klienta",
        items: [
          "Dostarczanie dok\u0142adnych, kompletnych i terminowych informacji oraz materia\u0142\u00F3w niezb\u0119dnych do realizacji Us\u0142ug.",
          "Wyznaczenie osoby kontaktowej upowa\u017Cnionej do podejmowania decyzji i udzielania zatwierdze\u0144 w imieniu Klienta.",
          "Przegl\u0105danie i przekazywanie opinii o rezultatach w terminach okre\u015Blonych w Umowie.",
          "Zapewnienie, \u017Ce materia\u0142y dostarczone Firmie nie naruszaj\u0105 praw w\u0142asno\u015Bci intelektualnej os\u00F3b trzecich.",
          "Zachowanie poufno\u015Bci wszelkich danych dost\u0119powych udost\u0119pnionych w trakcie realizacji projektu.",
        ],
      },
      {
        title: "5. W\u0142asno\u015B\u0107 intelektualna",
        items: [
          "Wszelkie prawa w\u0142asno\u015Bci intelektualnej do rezultat\u00F3w stworzonych w ramach Umowy przechodz\u0105 na Klienta po pe\u0142nej zap\u0142acie, chyba \u017Ce Umowa stanowi inaczej.",
          "Firma zachowuje prawo do wykorzystywania og\u00F3lnej wiedzy, umiej\u0119tno\u015Bci, do\u015Bwiadczenia i technik niezastrze\u017Conych, zdobytych podczas \u015Bwiadczenia Us\u0142ug.",
          "Wcze\u015Bniej istniej\u0105ca w\u0142asno\u015B\u0107 intelektualna ka\u017Cdej ze stron pozostaje jej w\u0142asno\u015Bci\u0105.",
          "Firma mo\u017Ce przywo\u0142ywa\u0107 projekt w swoim portfolio i materia\u0142ach marketingowych, chyba \u017Ce Klient za\u017C\u0105da inaczej na pi\u015Bmie.",
        ],
      },
      {
        title: "6. Poufno\u015B\u0107",
        content:
          "Obie strony zobowi\u0105zuj\u0105 si\u0119 do zachowania poufno\u015Bci wszelkich zastrze\u017Conych lub wra\u017Cliwych informacji ujawnionych w trakcie wsp\u00F3\u0142pracy. Obowi\u0105zek ten obowi\u0105zuje przez 3 lata po zako\u0144czeniu Umowy.",
        items: [
          "Informacje poufne obejmuj\u0105 m.in. plany biznesowe, specyfikacje techniczne, dane klient\u00F3w i warunki finansowe.",
          "Informacje poufne nie obejmuj\u0105 informacji publicznie dost\u0119pnych, niezale\u017Cnie opracowanych lub legalnie uzyskanych od os\u00F3b trzecich.",
        ],
      },
      {
        title: "7. Warunki p\u0142atno\u015Bci",
        items: [
          "Warunki p\u0142atno\u015Bci, w tym kwoty, harmonogramy i metody, s\u0105 okre\u015Blone w indywidualnych Umowach.",
          "O ile nie uzgodniono inaczej, faktury s\u0105 p\u0142atne w ci\u0105gu 14 dni od wystawienia.",
          "Op\u00F3\u017Anione p\u0142atno\u015Bci mog\u0105 podlega\u0107 odsetkom ustawowym zgodnie z prawem polskim.",
          "Firma zastrzega sobie prawo do zawieszenia Us\u0142ug w przypadku zaleg\u0142ych p\u0142atno\u015Bci przekraczaj\u0105cych 30 dni.",
        ],
      },
      {
        title: "8. Gwarancje i odpowiedzialno\u015B\u0107",
        items: [
          "Firma gwarantuje, \u017Ce Us\u0142ugi b\u0119d\u0105 \u015Bwiadczone z nale\u017Cyt\u0105 staranno\u015Bci\u0105 zawodow\u0105 i zgodnie z uzgodnionymi specyfikacjami.",
          "Firma nie gwarantuje nieprzerwanego ani bezb\u0142\u0119dnego dzia\u0142ania dostarczonego oprogramowania. 30-dniowy okres gwarancyjny na poprawki b\u0142\u0119d\u00F3w obowi\u0105zuje dla wszystkich rezultat\u00F3w, chyba \u017Ce uzgodniono inaczej.",
          "Ca\u0142kowita odpowiedzialno\u015B\u0107 Firmy w ramach Umowy nie przekroczy \u0142\u0105cznych op\u0142at uiszczonych przez Klienta w ramach tej Umowy.",
          "Firma nie ponosi odpowiedzialno\u015Bci za szkody po\u015Brednie, przypadkowe lub wynikowe, w tym utracone zyski lub utrat\u0119 danych.",
          "Strona internetowa jest udost\u0119pniana w stanie \u201Ejakim jest\u201D, bez \u017Cadnych gwarancji dotycz\u0105cych dost\u0119pno\u015Bci, dok\u0142adno\u015Bci lub kompletno\u015Bci tre\u015Bci.",
        ],
      },
      {
        title: "9. Rozwi\u0105zanie umowy",
        items: [
          "Ka\u017Cda ze stron mo\u017Ce rozwi\u0105za\u0107 Umow\u0119 z 30-dniowym wyprzedzeniem na pi\u015Bmie, chyba \u017Ce Umowa stanowi inaczej.",
          "Firma mo\u017Ce rozwi\u0105za\u0107 Umow\u0119 ze skutkiem natychmiastowym, je\u015Bli Klient istotnie naruszy niniejszy Regulamin lub Umow\u0119 i nie usunie naruszenia w ci\u0105gu 14 dni od pisemnego powiadomienia.",
          "Po rozwi\u0105zaniu Umowy Klient zobowi\u0105zany jest do zap\u0142aty za wszystkie Us\u0142ugi wykonane do dnia rozwi\u0105zania.",
          "Postanowienia dotycz\u0105ce poufno\u015Bci, w\u0142asno\u015Bci intelektualnej i odpowiedzialno\u015Bci obowi\u0105zuj\u0105 po rozwi\u0105zaniu Umowy.",
        ],
      },
      {
        title: "10. Si\u0142a wy\u017Csza",
        content:
          "\u017Badna ze stron nie ponosi odpowiedzialno\u015Bci za niewykonanie lub op\u00F3\u017Anienie w wykonaniu swoich zobowi\u0105za\u0144 z powodu okoliczno\u015Bci pozostaj\u0105cych poza jej rozs\u0105dn\u0105 kontrol\u0105, w tym m.in. kl\u0119sk \u017Cywio\u0142owych, wojen, pandemii, dzia\u0142a\u0144 rz\u0105dowych, awarii zasilania lub przerw w dost\u0119pie do internetu. Strona dotkni\u0119ta powiadomi drug\u0105 stron\u0119 niezw\u0142ocznie i podejmie rozs\u0105dne dzia\u0142ania w celu z\u0142agodzenia skutk\u00F3w.",
      },
      {
        title: "11. Prawo w\u0142a\u015Bciwe i spory",
        content:
          "Niniejszy Regulamin i wszelkie Umowy podlegaj\u0105 prawu Rzeczypospolitej Polskiej. Wszelkie spory wynikaj\u0105ce z niniejszego Regulaminu lub Us\u0142ug b\u0119d\u0105 rozstrzygane przez s\u0105d w\u0142a\u015Bciwy dla siedziby Firmy w Warszawie. Przed wszcz\u0119ciem post\u0119powania s\u0105dowego obie strony zobowi\u0105zuj\u0105 si\u0119 do podj\u0119cia pr\u00F3by polubownego rozstrzygni\u0119cia sporu.",
      },
      {
        title: "12. Kontakt",
        content:
          "W razie pyta\u0144 dotycz\u0105cych niniejszego Regulaminu prosimy o kontakt pod adresem hello@tryopenmercato.com lub telefonicznie +48 667 582 525, b\u0105d\u017A pisemnie na adres Pastewna 27b, 02-954 Warszawa, Polska.",
      },
    ],
  },
} satisfies Translations;
