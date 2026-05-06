// lib/copy.js — Kogu maandumislehe nähtav sisu.
// Kõik tekstimuudatused tehakse siin. Komponendid loevad andmeid ainult sellest objektist.

export const copy = {
  metadata: {
    title: "EcoHerbal — Loo käsitööseepe, mis müüvad end ise",
    description:
      "EcoHerbali käsitööseepide ja looduskosmeetika kursus: õpi valmistama looduslikke seepe. Üle 27 juhendi, 500 retsepti ja 8 TASUTA boonust. Eluaegne ligipääs 80% soodustusega.",
    lang: "et",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Taimne ökoilu",
  },

  hero: {
    banner: "SEE PAKKUMINE + TASUTA BOONUSED AEGUVAD:",
    timerLabels: { days: "Päeva", hours: "Tundi", minutes: "Min", seconds: "Sek" },
    kicker: "Juba üle 2586 inimese valmistab oma tooteid",
    headlinePre: "KOSMEETIKAEKSPERT PALJASTAB,",
    headlineHighlight: "kuidas luua vastupandamatuid seepe,",
    headlinePost: "mis hoolitsevad sinu naha eest juba esimesest päevast",
    supporting:
      "Ideaalne neile, kes soovivad alustada KOHE ja oma looduslike seepidega päriselt lisaraha teenida.",
    cta: "Tahan kohe ligipääsu 🧼",
    imageAlt: "Hoolitsetud ja särava nahaga naine tänu EcoHerbali looduskosmeetikale",
    trustChips: [
      { icon: "⭐", text: "Üle 2586 õpilase" },
      { icon: "🎁", text: "8 TASUTA boonust" },
      { icon: "🛡️", text: "7-päevane garantii" },
    ],
  },

  instructorIntro: {
    quote:
      "Lõin selle eksklusiivse kursuse just sulle – naisele, kes armastab oma kätega luua ja soovib õppida tõeliselt kasulikku oskust.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Värskelt valminud käsitööseebid" },
      { image: "/carousel/soap-2.webp", alt: "Marmorefektiga seebid" },
      { image: "/carousel/soap-3.webp", alt: "Rohelise dekoratiivlaine efektiga seep" },
      { image: "/carousel/soap-4.webp", alt: "Looduslik lavendliseep" },
      { image: "/carousel/soap-5.webp", alt: "Käsitööseepide valik" },
      { image: "/carousel/soap-6.webp", alt: "Dekoratiivsete seepide detailid" },
    ],
  },

  benefits: {
    headline:
      "...saad alustada VÄIKESE EELARVEGA ja nautida neid EELISEID!",
    items: [
      { icon: "Leaf", text: "Kasuta looduslikke ja ohutuid koostisosi." },
      { icon: "ShieldCheck", text: "Unusta naha kuivus, ärritused ja allergiad." },
      { icon: "Sparkles", text: "Loo täpselt selliseid seepe, millest unistad." },
      { icon: "TrendingUp", text: "Muuda oma hobi päris sissetulekuks." },
    ],
    checklist: [
      "Lõpp ebaõnnestunud retseptidele",
      "Sa ei pea olema ekspert",
      "Ei mingeid graafikuid ega stressi",
    ],
    imageAlt: "Käed, mis hoiavad värskelt valminud käsitööseepe",
  },

  trending: {
    kicker: "2026. AASTA TREND",
    headline:
      "vaid paari päevaga õpid looma trendikaid seepe, mis müüvad end ise",
    imageAlt: "Moodsa marmorefektiga käsitööseebid",
  },

  courseContent: {
    headline: "siin õpetame sulle kõike",
    subheadline: "tutvu kogu sisuga",
    sectionLabel: "rohkem kui 27 e-raamatust leiad...",
    paragraphs: [
      {
        bold: "Ligipääs kõikidele teadmistele,",
        rest: " et kujundada, valmistada ja säilitada looduslikke seepe nagu tõeline professionaal.",
      },
      {
        bold: "Lõpp katse-eksituse meetodile:",
        rest:
          " järgi selget ja järeleproovitud juhendit koos praktiliste nõuannetega, mis säästavad sinu aega ja närve.",
      },
    ],
  },

  megapack: {
    kicker: "MEGAPAKETT",
    headline: "megapakett sisaldab",
    items: [
      { bold: "Täielik samm-sammuline juhend", rest: " algajast professionaaliks" },
      { bold: "500 retsepti", rest: " igale nahatüübile" },
      { bold: "Tee ise", rest: " oma eeterlikke õlisid" },
      { bold: "Õpi valmistama", rest: " looduslikke vedelseepe" },
    ],
    imageAlt: "EcoHerbali käsitööseepide megapaketi näidis",
  },

  bonuses: {
    kicker: "TASUTA BOONUSED",
    headline: "Kui ostad täna, saad 8 TASUTA boonust!",
    subheadline: "27 juhendit digitaalses allalaaditavas PDF-formaadis.",
    badge: "BOONUS #",
    freeLabel: "TASUTA",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kehakosmeetika", desc: "Looduslikud retseptid kogu keha hoolduseks." },
      { image: "/bonuses/bonus-2.webp", title: "Näokosmeetika", desc: "Kreemid, seerumid ja toonikud särava naha heaks." },
      { image: "/bonuses/bonus-3.webp", title: "Looduslik deodorant", desc: "Õrnad ja tõhusad keemiavabad valemid." },
      { image: "/bonuses/bonus-4.webp", title: "Tahke suuvesi", desc: "Hoolitse oma hammaste tervise eest looduslike koostisosadega." },
      { image: "/bonuses/bonus-5.webp", title: "Looduslik hambapasta", desc: "Sügavpuhastus ilma fluoriidi ja sulfaatideta." },
      { image: "/bonuses/bonus-6.webp", title: "Vannisoolad", desc: "Lõõgastu isetehtud aroomisooladega." },
      { image: "/bonuses/bonus-7.webp", title: "Tahke šampoon", desc: "Terved juuksed, täiesti ilma plastpakendita." },
      { image: "/bonuses/bonus-8.webp", title: "Käsitööküünlad", desc: "Täielik boonuskursus dekoratiivküünalde valmistamiseks." },
    ],
    footer: "Kõik boonused on 100% digitaalsed ja saad need kohe kätte.",
  },

  features: {
    headline: "Kõik, mis sa saad",
    subheadline: "Täielik ligipääs, allalaaditavad materjalid (PDF) ja tunnistus.",
    items: [
      { icon: "Wifi", title: "100% veebipõhine", desc: "Vaata tunde millal soovid ja kus iganes sa ka ei viibiks." },
      { icon: "FolderOpen", title: "Sisu Google Drive'is", desc: "Hästi korraldatud, et saaksid õppida ilma segaduseta." },
      { icon: "Infinity", title: "Eluaegne ligipääs kursusele", desc: "Õpi omas tempos, ilma ajapiiranguteta." },
      { icon: "BookOpen", title: "E-raamatud on sinu omad", desc: "Laadi alla või loe veebis piiramatult." },
      { icon: "Award", title: "Osalemistunnistus", desc: "Kinnita oma uusi oskusi ametliku tunnistusega." },
      { icon: "ShieldCheck", title: "7-päevane garantii", desc: "Kui sa pole rahul, maksame 100% rahast tagasi." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% SOODSAM",
    valuedAtLabel: "Programmi tavahind on",
    regularPrice: "39.50 €",
    offerPrice: "9.90 €",
    cta: "VÕTAN SOODUSTUSE",
    payInfo: "Ühekordne makse, eluaegne ligipääs",
    imageAlt: "EcoHerbali programmi eksklusiivse soodustuse näidis",
    socialImageAlt: "Ekraanitõmmised rahulolevate õpilaste päris sõnumitest",
  },

  socialProof: {
    headline: "ÄRA LASE VÕIMALUSEL KÄEST MINNA!",
    subheadlinePre: "Juba üle",
    countHighlight: "2586 inimese",
    subheadlinePost: "naudib oma isetehtud kosmeetikatooteid!",
  },

  reviewScreenshots: {
    headline: "Päris sõnumid meie õpilastelt",
    subheadline: "Seda saame WhatsAppi iga päev.",
    onlineLabel: "võrgus",
    typingLabel: "kirjutab…",
    items: [
      {
        name: "Kadi",
        timeLabel: "10:24",
        messages: [
          { text: "Tegin sinu juhendi järgi oma esimesed seebid! 🌸" },
          { text: "Tulid imelised välja ja mu nahk on nii pehme ✨" },
          { text: "Millal sa veel retsepte lisad?" },
        ],
      },
      {
        name: "Laura",
        timeLabel: "eile",
        messages: [
          { text: "Müüsin laupäeval ühel laadal 12 seepi 😱" },
          { text: "Inimesed lausa krabasid neid, ma ei suutnud uskuda 🙌" },
          { text: "Suur tänu kursuse eest, päriselt ❤️" },
        ],
      },
      {
        name: "Liis",
        timeLabel: "12:05",
        messages: [
          { text: "Alustasin 2 nädalat tagasi ja mul on juba oma bränd 💕" },
          { text: "Retsepte on superlihtne jälgida" },
          { text: "Ja need TASUTA boonused on lihtsalt hindamatud 🎁" },
        ],
      },
      {
        name: "Kadri",
        timeLabel: "täna",
        messages: [
          { text: "Tsau! Tahtsin lihtsalt öelda, et tegin just suurema müügi" },
          { text: "10 seepi ühele ökopoele 🌿" },
          { text: "Tuhat tänu, sa tegid mu päeva 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Kursuse sisu",
    subheadline: "Rippmenüüd — vaata kõike, mida sa saad.",
    courses: [
      {
        title: "Kursus | Käsitööseebid",
        lessons: [
          "EcoHerbali seebid Moodul 1",
          "EcoHerbali seebid Moodul 2",
          "Seepide valmistamine Moodul 1",
          "Seepide valmistamine Moodul 2",
          "Põhitehnikad",
          "Koostisosad ja protsessid",
          "Uskumatud koostisosad ja nende omadused",
        ],
      },
      {
        title: "Kursus | 500 seebiretsepti",
        lessons: [
          "E-raamat (PDF) 500 ainulaadse retseptiga.",
          "Juhend koostisosade kohandamiseks.",
        ],
      },
      {
        title: "Kursus | Tee ise vedelseepe",
        lessons: [
          "Täielik samm-sammuline juhend oma glütseriinist vedelseepide valmistamiseks.",
        ],
      },
      {
        title: "Kursus | Tee ise eeterlikke õlisid",
        lessons: [
          "Täielik samm-sammuline juhend oma eeterlike õlide valmistamiseks.",
        ],
      },
      {
        title: "TASUTA BOONUS | Käsitööküünalde kursus",
        lessons: [
          "Küünalde valmistamine 1",
          "Küünalde valmistamine 2",
          "Mesilasvahast küünlad",
          "Sojavahast küünlad",
          "Küünalde kaunistamine",
          "Käsitööküünalde juhend",
          "Ekstra: Laavalambid",
        ],
      },
      {
        title: "TASUTA BOONUS | Looduskosmeetika",
        lessons: [
          "TASUTA BOONUS Kehakosmeetika",
          "TASUTA BOONUS Näokosmeetika",
          "TASUTA BOONUS Deodorant",
          "TASUTA BOONUS Tahke suuvesi",
          "TASUTA BOONUS Hambapasta",
          "TASUTA BOONUS Vannisoolad",
          "TASUTA BOONUS Tahke šampoon",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% SOODUSTUST",
    plus: "+ 8 TASUTA BOONUST",
    middle: "sinu ostuga kuni",
    deadline: "14. DETSEMBRINI",
    or: "või kuni jätkub",
    slots: "26 KOHTA",
  },

  finalCta: {
    preHeadline: "SINU AEG ON KÄES",
    urgencyTop: "80% SOODUSTUST",
    headline: "Hangi EcoHerbali megapakett TÄNA uskumatu soodustusega",
    subUrgency:
      "Üle 2586 inimese valmistab juba oma käsitööseepe ja kosmeetikat. Täna on sinu kord.",
    bundleList: [
      "Täielik käsitööseepide kursus (4 moodulit)",
      "500 ainulaadset retsepti igale nahatüübile",
      "Vedelseepide samm-sammuline kursus",
      "Eeterlike õlide kursus",
      "BOONUS — Täielik käsitööküünalde kursus",
      "BOONUS — 7 looduskosmeetika juhendit",
      "Eluaegne ligipääs (PDF/veebis) + Osalemistunnistus",
    ],
    guaranteeText:
      "Täielik 7-päevane garantii. Kui kursus sulle ei meeldi, maksame küsimusi esitamata 100% rahast tagasi.",
    guaranteeImageAlt: "7-päevase garantii pitser",
    regularPriceLabel: "Enne",
    regularPrice: "39.50 €",
    offerPrice: "9.90 €",
    discountBadge: "80% SOODSAM",
    urgencyText: "Ühekordne makse, eluaegne ligipääs",
    bottomUrgency: "See pakkumine aegub, kui taimer jõuab nulli.",
    button: "VÕTAN MEGAPAKETI KOHE",
    trustRow: "100% turvaline makse · Kohene ligipääs · 7-päevane garantii",
  },

  instructorBio: {
    name: "Evelin Sepp",
    title: "Looduskosmeetika ekspert",
    bio: "Hei, mina olen Evelin. Olen looduskosmeetika ja seebivalmistamisega tegelenud juba üle 8 aasta. See, mis algas isiklikust vajadusest oma naha eest ilma keemiata hoolitseda, muutus mu suurimaks kireks... ja ka elustiiliks. Aastate jooksul olen välja töötanud kümneid isiklikke retsepte ja aidanud paljudel naistel teha esimesi samme selles põnevas maailmas. Alates esimese seebi valmistamisest koduste vahenditega kuni selle kunsti muutmiseni kasumlikuks ja jätkusuutlikuks äriks. Ma tean, mis tunne on alustada nullist, ilma kogemusteta, karda vigu teha või mitte teada, kust alustada. Seetõttu jagan sellel kursusel kõike, mida olen õppinud – selgelt, praktiliselt ja ilma liigse keerukuseta.",
    imageAlt: "Evelin Sepp, looduskosmeetika ja käsitööseepide ekspert",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Evelini loodud käsitööseebid",
      "Töö looduskosmeetika töötoas",
      "Valmistooted, mis on valmis müügiks",
    ],
    yearsLabel: "Üle 8 aasta",
    yearsText: "looduskosmeetika valmistamist",
    studentsLabel: "Üle 2586",
    studentsText: "koolitatud õpilase",
  },

  testimonials: {
    headline: "Lisaks saad taotleda oma tunnistust",
    subheadline: "Vaata, mida räägivad need, kes on EcoHerbali kursuse juba läbinud.",
    productLabel: "EcoHerbal — Käsitööseepide kursus",
    reviewedLabel: "kirjutas arvustuse tootele",
    actions: { like: "Meeldib", comment: "Kommenteeri", share: "Jaga" },
    items: [
      {
        name: "Jana Tamm",
        handle: "@jana_t",
        text: "Mulle kursus väga meeldis. Tegin kõike täpselt nii, nagu õpetaja näitas, ja vähem kui kuuga suutsin oma äriga alustada ning esimesed müügid teha. Nüüd teen aina rohkem seepe ja mõtlen isegi väikese poe avamisele. Aitäh selle kursuse eest, see on tõesti seda väärt.",
      },
      {
        name: "Mari Kuusk",
        handle: "",
        text: "Lõpetasin kursuse nädal tagasi ja olen täiesti lummatud. Olen juba oma esimesed seebid valmis teinud, katsetasime neid kodus ja kõik on vaimustuses. Nüüd valmistan ette müügiga alustamist, täpselt nii, nagu meile õpetati. Paar sõbra tuttavat tahavad juba minult osta. Suur tänu teile selle võimaluse eest. Iga sent oli asja ette läinud.",
      },
      {
        name: "Tiina Lepp",
        handle: "",
        text: "Jätan selle kommentaari, sest läbisin kursuse mõni aeg tagasi ja alustasin kohe pärast seda äri arendamist. Ausalt öeldes on asjad väga hästi läinud ja eile sõlmisin lepingu ühe brändiga, et nad hakkaksid paari minu toodet müüma. Ma poleks kunagi arvanud, et see nii kaugele jõuab, nii et AITÄH. See kursus on erakordselt hea investeering.",
      },
      {
        name: "Martin Kivi",
        handle: "@martin_k",
        text: "Suurepärane sisu, väga selge ja professionaalne. Need kingituseks saadud boonused... kui teil on võimalus need võtta, siis tehke seda. Väga väärtuslik info. Olge terved ja suur tänu, et jagate meiega neid teadmisi oma äri alustamiseks.",
      },
    ],
    cta: "TAHAN TÄNA ALUSTADA",
  },

  closingProof: {
    headlinePre: "Meie õpilased loovad oma esimesi tooteid vähem kui",
    headlineHighlight: "3 päevaga",
    headlinePost: ". Mida sa ootad?",
    ctaLabel: "ALUSTA TÄNA",
  },

  guarantee: {
    badgeLabel: "7-PÄEVANE GARANTII",
    headline: "ÄRA MURETSE, ME VÕTAME RISKI ENDA KANDA.",
    text: "Sul on nädal aega kursust katsetada ja kui see sulle ei meeldi või ei vasta sinu ootustele, tagastame sulle 100% rahast.",
    badgeAlt: "EcoHerbali 7-päevase garantii pitser",
    certs: [
      { icon: "Award", label: "Ametlik tunnistus" },
      { icon: "ShieldCheck", label: "100% turvaline makse" },
      { icon: "Lock", label: "Andmekaitse" },
      { icon: "BadgeCheck", label: "Kontrollitud kvaliteet" },
    ],
  },

  faq: {
    headline: "Korduma kippuvad küsimused",
    subheadline: "Kõik, mida pead enne alustamist teadma.",
    items: [
      {
        q: "Kas maksmine on turvaline?",
        a: "Jah, maksmine toimub Hotmarti kaudu. See on üks turvalisemaid ja tunnustatumaid digitaalseid platvorme maailmas, mis tegutseb enam kui 160 riigis ja on varustatud uusimate turvasertifikaatidega. Sinu makseandmed on täielikult kaitstud ja 100% konfidentsiaalsed, tagades turvalise ostu.",
      },
      {
        q: "Kas ma saan kursusel osaleda, kui ma ei tea asjast midagi?",
        a: "Muidugi! Kõik e-raamatud on väga detailsed ja ainuke asi, mida päriselt vajad, on pealehakkamine. Kogu protsess on väga lihtne ja sa saad kasutada väga praktilisi tööriistu.",
      },
      {
        q: "Kas ma pääsen kursusele ligi igast seadmest?",
        a: "Jah, sa saad kursusele ligi igast seadmest! Olgu selleks arvuti, tahvelarvuti või mobiiltelefon, saad sisu nautida olenemata operatsioonisüsteemist (Windows, macOS, iOS või Android). Lisaks saad alla laadida Hotmarti rakenduse, et mobiilist õppimine oleks veelgi mugavam.",
      },
      {
        q: "Kas alustamine on kallis?",
        a: "Ei! Looduskosmeetika nõuab alguses väga väikest investeeringut ja me õpetame, kuidas kasutada kättesaadavaid materjale, et alustada ilma liigsete kuludeta.",
      },
      {
        q: "Millal kursus algab?",
        a: "Kohe pärast ostmist saad ligipääsulingi (ja digitaalsed raamatud PDF-vormingus), mis võimaldab sul kohe platvormile siseneda ja õppida millal iganes soovid. See jääb sulle eluks ajaks.",
      },
      {
        q: "Mida kursus sisaldab?",
        a: "Kursus sisaldab eluaegset ligipääsu, samm-sammulisi e-raamatuid, allalaaditavaid materjale (PDF), tehnilist tuge ja pärast lõpetamist ka tunnistust.",
      },
      {
        q: "Kas annate ka tunnistuse?",
        a: "Muidugi, pärast kursuse lõpetamist saada meile e-kiri koos taotlusega ja me saadame sulle tunnistuse.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "See veebisait ei ole osa Facebooki ega Facebook Inc. veebisaidist. Lisaks EI OLE see sait Facebooki poolt mingil viisil toetatud ega sponsoreeritud.",
    trademark: "FACEBOOK on ettevõtte FACEBOOK, Inc. registreeritud kaubamärk.",
  },
};