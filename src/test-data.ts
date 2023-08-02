import { OfferDto } from "./models/offer-dto"
import {OrganizationDto} from "@/src/models/organization-dto";

export const test_org: OrganizationDto = {
  imageUrls: [],
  name: "StattTour",
  description: "Moin! Willkommen bei StattTour. Wir sind ein junges Unternehmen aus Hamburg, welches Barrierefreiheit und Inklusion fördern will. Bei uns sollen diese Themen nicht nur verstanden, sondern erlebt werden. Wie das geht? Durch Begegnungen auf Augenhöhe: durch eine Rollstuhltour durch Hamburg  für FußgängerInnen von RollstuhlfahrerInnen. \n\nBei uns zeigen RollstuhfahrerInnen die Metropole Hamburg aus ihrer Perspektive. Die Besonderheit: Auch FußgängerInnen erleben die Stadt im Rollstuhl! Als Teilnehmender einer unserer StattTouren sitzt du selbst in einem Rollstuhl und erhältst so einen Einblick in das Leben eines Rollstuhlfahrers. Dabei teilen sich immer zwei Teilnehmer im Rahmen eines Buddy-Systems einen Rollstuhl. Unsere Rollstuhltour durch Hamburg wird dir einen völlig neuen Blick auf unsere Stadt ermöglichen!\n\nGemeinsam wird so die Stadt erkundet: Wo sind Barrieren schon bestmöglich abgebaut? Wo müssen sie noch überwunden werden? Im Anschluss an die Tour wird in einem Gespräch mit eurem Guide das Erlebte gemeinsam reflektiert.",
  tags: [
    {
      label: "Behinderungen"
    },
    {
      label: "Barrierefreiheit"
    },
    {
      label: "Stadttour"
    }
  ],
  street: "Am Kaiserkai",
  houseNumber: "43",
  postcode: "20457",
  city: "Hamburg",
  telefon: "+49 171 3477733",
  fax: "-",
  mailAdress: "statt.tour@gmail.com",
  imageUrl: "../assets/orgaLogos/statttour-logo.png",
  latitude: 53.551085,
  longitude: 9.993682,
  websiteURL: "https://statt-tour.de/",
  id: "61e987c62e78ee54cd5f06a3"
}

export const offerings: OfferDto[] = [
  {
    name: "StattTour – Hafencity",
    description:
      "Hamburg aus einer anderen Perspektive erleben – das ist bei StattTour möglich. \nDieser Rollenwechsel lässt dich das maritime Hamburg im Rollstuhl erkunden und dich Barrieren begegnen, die für dich im Alltag wahrscheinlich gar nicht auffallen. Bei uns zeigen RollstuhfahrerInnen die Metropole Hamburg aus ihrer Perspektive. Die Besonderheit: Auch FußgängerInnen erleben die Stadt im Rollstuhl! Als Teilnehmender unserer Stattour sitzt du selbst in einem Rollstuhl und erhältst so einen Einblick in das Leben eines Rollstuhlfahrers.\n\nGemeinsam mit dem Tourguide geht es auf Erkundungstour durch das schöne Hamburg – entlang bekannter Sightseeing-Attraktionen wie der Elbphilharmonie und der Speicherstadt. Diese Hamburger Highlights bleiben in unserer alternativen Stadtführung aber nicht unkommentiert:\n\nWo sind Barrieren schon bestmöglich abgebaut?\nWo müssen sie noch überwunden werden?\nWelche Angebote gibt es für RollstuhlfahrerInnen?\nWo ist noch besonders viel zu tun?\nTeil der Tour ist auch immer eine Einführung in den Umgang mit dem Rollstuhl und eine abschließende Diskussionsrunde, da uns ein reflektierter Umgang mit dem Thema sehr am Herzen liegt! Diese Stadttour bietet die einzigartige Möglichkeit, einen Perspektivwechsel zu erleben und Einblicke, in die Situation von rollstuhlfahrenden Menschen zu erhalten.\n\nWir arbeiten in Form eines Buddysystems, das bedeutet, es kommen zwei Personen auf einen Rollstuhl. So baust du Vertrauen zu deinem Buddy auf und übergibst Verantwortung, wenn du zum Beispiel bei einer Hürde Unterstützung brauchst.",
    organizationId: "61e987c62e78ee54cd5f06a3",
    tags: [
      {
        label: "Behinderung",
      },
    ],
    latitude: 53.5413647,
    longitude: 9.988341,
    offeringTypes: [
      {
        label: "Führung",
      },
      {
        label: "Workshop",
      },
      {
        label: "Tour",
      },
    ],
    houseNumber: "43",
    street: "Am Kaiserkai",
    city: "Hamburg",
    postcode: "20457",
    telephone: "0406477411",
    mailAdress: "statt.tour@gmail.com",
    price: "ab 16€",
    carddescription:
      "Hamburg aus einer anderen Perspektive erleben – das ist bei StattTour möglich. Geführte Rollstuhl-Touren durch die Stadt ermöglichen Einblicke und Austausch der besonderen Art.",
    organame: "StattTour",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/envs8txrochrpxthgrpf.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/okxbymor2unly6q6ykjs.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/ecql4zjr7fgy5kiqy6si.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/lxn6iunltpal3y3vxp7h.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/nldydm7h63abclyfd7nz.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/e2ewaltebuikoc58jtar.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565506/offerings/61e58e4d7bf129cf0747ef57/hkkodrzheppbh7q1gcm6.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565507/offerings/61e58e4d7bf129cf0747ef57/y7pg9jokxmn1nmpdmpu1.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565507/offerings/61e58e4d7bf129cf0747ef57/h5fwxhhrumb8noms6gfo.png",
    ],
    published: true,
    updatedAt: "2023-02-16T16:38:28.031Z",
    id: "61e58e4d7bf129cf0747ef57",
  },
  {
    name: "Workshop Songwriting/ Kreatives Schreiben",
    description:
      "Diana Ezerex bietet Workshops zum Songwriting und Kreativen Schreiben für alle Altersgruppen an. Ihr Ziel ist dabei, gesellschaftlich relevante Themen gemeinsam mit den Teilnehmenden zu entdecken und kreativ zu verarbeiten",
    tags: [
      {
        label: "Kriminalität",
      },
      {
        label: "Psychische Gesundheit",
      },
    ],
    carddescription:
      "Diana Ezerex bietet Workshops zum Songwriting und Kreativen Schreiben für alle Altersgruppen an. Ihr Ziel ist dabei, gesellschaftlich relevante Themen gemeinsam mit den Teilnehmenden zu entdecken und kreativ zu verarbeiten\n",
    duration: "3 Stunden bis 5 Tage",
    offeringTypes: [
      {
        label: "Workshop",
      },
    ],
    participants: "Bis 25 Personen",
    price: "550€ pro Tag (ggf. zzgl. Fahrtkosten)",
    procedure:
      "Mithilfe verschiedener Schreibübungen soll der Zugang zum kreativen Schreiben geöffnet werden. Nach und nach entsteht die Struktur des Textes, wenn gewünscht auch unter Einbezug von Musik.",
    targetGroup: "Ab 12 Jahren",
    published: true,
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565122/offerings/6244ab77eac7b3a1a7ebf429/embpe6wqepmdxbwn6rso.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565190/offerings/6244ab77eac7b3a1a7ebf429/tctrrqkme2pjtpr9zuaa.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565190/offerings/6244ab77eac7b3a1a7ebf429/c4ptp6zzoymr9l1g7o7c.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565191/offerings/6244ab77eac7b3a1a7ebf429/tmqgezgwucxlx91tjdmf.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565191/offerings/6244ab77eac7b3a1a7ebf429/gtymswvetcr05lxurcun.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565191/offerings/6244ab77eac7b3a1a7ebf429/lmtyjnigipitarjiejwy.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565191/offerings/6244ab77eac7b3a1a7ebf429/u4itip1yw4ruvuvxumm1.jpg",
    ],
    updatedAt: "2023-02-16T16:33:12.201Z",
    organizationId: "6244a6639ed2864ad3a20755",
    id: "6244ab77eac7b3a1a7ebf429",
  },
  {
    name: "Workshops HIV/AIDS, Hepatitis & sexuell übertragbare Infektionen (STI) r",
    description:
      "In unseren Workshops vermitteln wir den aktuellen Wissensstand zu HIV/AIDS, Hepatitis und anderen sexuell übertragbaren Infektionen (STI) und helfen bei der Einordnung in den aktuellen Lebens- bzw. Arbeitskontext.  \n\n \n\nEin zentrales Anliegen ist dabei auch der Abbau von Diskriminierung von Menschen mit HIV sowie der Personengruppen, die in unserer Gesellschaft auch heute noch mit HIV besonders in Verbindung gebracht werden (z.B. Männer, die Sex mit Männern haben; Drogen konsumierende Menschen; Sexarbeiter_innen). \n\n \n\nWir informieren über die verschiedenen Schutzmöglichkeiten und Vorsorgeangebote, über HIV/STI-Testverfahren und die heutigen Behandlungsoptionen. \n\n \n\nUnsere Schulworkshops sind dabei in ein allgemeines Konzept der sexuellen Bildungsarbeit eingebettet. Bei Bedarf können daher auch andere Themen der sexuellen Bildung in unsere Workshops integriert werden. Unser Team besucht die anfragenden Schulen/Einrichtungen vor Ort für mindestens 3x45 Minuten pro Gruppe. In Schulklassen ist die Aufteilung der Jugendlichen nach geschlechtlicher Identität möglich und oft auch sinnvoll. Die Anwesenheit von Lehrer_innen ist nicht erforderlich. \n\n \n\nMittels interaktiver, altersgerechter Methoden erarbeiten wir mit den Teilnehmer_innen die zuvor vereinbarten Themen und beantworten auch weiterführende Fragen. \n\n \n\nBei Erwachsenengruppen werden interaktive und Vortragselemente kombiniert. Teilnahmebescheinigungen können auf Wunsch ausgestellt werden. \n\n \n\nZum Ende eines Workshops stellen wir Materialien mit weiterführenden Informationen zur Verfügung.\n ",
    tags: [
      {
        label: "sexuelle Aufklärung",
      },
    ],
    carddescription:
      "Unsere Workshops leisten einen wichtigen Beitrag zur sexuellen Bildung, zur Förderung sexueller Gesundheit und zum Abbau HIV-bedingter Diskriminierung. In der Arbeit mit (angehendem) Fachpersonal etwa in Pflege- und Sozialberufen vermitteln wir außerdem die benötigte Sicherheit, um mit Menschen mit HIV oder Hepatitis erfolgreich zu arbeiten. ",
    organame: "Aidshilfe Trier",
    price: "ab 100-180 € (je nach Anfahrtszeit) ",
    city: "Trier",
    mailAdress: "bgeller@trier.aidshilfe.de",
    telephone: "06 51 / 9 70 44-0 ",
    latitude: 49.746701323232564,
    longitude: 6.635634271164852,
    organizationId: "62d06d08b4a4cbd9bc5b581a",
    offeringTypes: [
      {
        label: "Workshop",
      },
    ],
    postcode: "",
    published: true,
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566199/offerings/62bddf10dc7bb524b084b48c/yajt13yf7voax5pg9gco.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566199/offerings/62bddf10dc7bb524b084b48c/bupe70tft98aaqgmkjrw.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566199/offerings/62bddf10dc7bb524b084b48c/qfzjhfjkha8jhtghczvr.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566199/offerings/62bddf10dc7bb524b084b48c/mastnxw4vzexqtl1gdft.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566199/offerings/62bddf10dc7bb524b084b48c/pzydw8giscs1idcklipk.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566200/offerings/62bddf10dc7bb524b084b48c/vjp39vqyrgiey3hkpnzk.jpg",
    ],
    updatedAt: "2023-02-16T16:50:00.828Z",
    id: "62bddf10dc7bb524b084b48c",
  },
  {
    name: "HIV/STI-Beratung inklusive PrEP-Beratung, sowie Begleitete HIV-Selbsttests ",
    description:
      "Menschen können sich mit ihren Fragen etwa zu einem positiven Befund, zu Infektionsrisiken, zu Schutzmöglichkeiten wie z.B. der HIV-PrEP oder zu HIV/STI-Testangeboten an unser Beratungsteam wenden. Wir beraten anonym, unvoreingenommen und diskriminierungssensibel. \n\n \n\nWir geben HIV-Selbsttests zum Preis von 20 € weiter und bieten die Testdurchführung direkt vor Ort an, begleitet durch ein Mitglied unseres Beratungsteams.",
    tags: [
      {
        label: "sexuelle Aufklärung",
      },
    ],
    organame: "Aidshilfe Trier",
    city: "Trier",
    duration: "variabel",
    houseNumber: "55",
    latitude: 49.746701323232564,
    longitude: 6.635634271164852,
    offeringTypes: [
      {
        label: "Beratung",
      },
      {
        label: "Begleitete HIV-Selbsttests",
      },
    ],
    organizationId: "62d06d08b4a4cbd9bc5b581a",
    participants: "Einzelpersonen oder auch Paare ",
    price: "Beratung kostenfrei; Begleiteter HIV-Selbsttest: 20 € ",
    street: "Saarstraße",
    targetGroup: "Das Angebot richtet sich an alle interessierten Menschen. ",
    published: true,
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566266/offerings/62da4bac7ea683a31daa0d50/ascckmgetl3wqnq1xdlg.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566266/offerings/62da4bac7ea683a31daa0d50/dcmo9agbpnndmypzgpw0.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566266/offerings/62da4bac7ea683a31daa0d50/u18s3q6jq9hktxaj3g8b.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566266/offerings/62da4bac7ea683a31daa0d50/h1hdyqz3aq6ak3vxpjqz.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566266/offerings/62da4bac7ea683a31daa0d50/stqm3lcrmc7h38krnq9b.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566267/offerings/62da4bac7ea683a31daa0d50/kdukxy2e7st2rvsol74o.jpg",
    ],
    updatedAt: "2023-02-16T16:51:07.569Z",
    id: "62da4bac7ea683a31daa0d50",
  },
  {
    organizationId: "62e970a4e691a6c35a032cdd",
    name: "Klassentraining ",
    street: "Kieselweg",
    houseNumber: "42",
    city: "Karlsruhe",
    postcode: "76227",
    additional_information: "Für jede Klasse kann individuell ein zugeschnittenes Programm erstellt werden.",
    carddescription: "Kooperations- und Abenteueraufgaben",
    duration: "4 Stunden oder 6-7 Stunden \n\n(SKT =2,5 – 3,5 Stunden)",
    offeringTypes: [
      {
        label: "Erlebnispädagogisches Klassentraining für Schulen, (Sozialkompetenztrainings SKT) ",
      },
    ],
    participants: "8-35  Personen",
    price: "Richtet sich nach Traineranzahl, Teilnehmeranzahl und Dauer",
    procedure:
      "Erste Hälfte am Boden mit vielen Koops und gegenseitige Vertrauen aufbauen, 2. Teil Erlerntes in der Höhe umsetzen.",
    short_description: "Erlebnis Pädagogik Abenteuer ",
    tags: [
      {
        label: "Teambuilding",
      },
    ],
    targetGroup: "Schüler ab 1. Klasse ",
    latitude: 48.990801800703615,
    longitude: 8.442862384760714,
    published: true,
    description:
      "Kooperations- und Abenteueraufgaben für Schulklassen in und um Karlsruhe - Teambuilding im Hochseilgarten. \nDie Schüler*innen lernen Vertrauen aufzubauen und soziale Verantwortung zu übernehmen.\n\n",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566051/offerings/62eabef4d499c248d46ba9af/xlhsw05kcjnodg4xfyxs.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566051/offerings/62eabef4d499c248d46ba9af/uukpjvt6rifg9ul4zy2c.jpg",
    ],
    updatedAt: "2023-06-14T15:45:58.479Z",
    id: "62eabef4d499c248d46ba9af",
  },
  {
    name: "Teambuilding für Firmen, Azubis, Sportvereine",
    offeringTypes: [
      {
        label: "Erlebnispädagogisches Teamtraining",
      },
    ],
    duration: "4-7 Stunden ",
    price: "Je nach Teilnehmeranzahl ",
    street: "Kieselweg",
    houseNumber: "42",
    postcode: "76227",
    tags: [
      {
        label: "Teambuilding",
      },
    ],
    participants: "8-30 Personen ",
    targetGroup: "Firmen, Azubis, Sportvereine, jegliche Art vom Teams, 16 +",
    carddescription: "Programme können individuell auf das Team zugeschnitten werden. ",
    latitude: 48.990801800703615,
    longitude: 8.442862384760714,
    organizationId: "62e970a4e691a6c35a032cdd",
    telephone: " 0177-6251455 ,\u202f0721-4067809",
    published: true,
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566101/offerings/62ec143880c05e9931b26378/ipzey5np8mvgzorgw2zg.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676566101/offerings/62ec143880c05e9931b26378/fjczljspwvzqcyydgjrb.jpg",
    ],
    updatedAt: "2023-02-16T16:48:21.960Z",
    id: "62ec143880c05e9931b26378",
  },
  {
    name: "Sensibilisierungs-Workshop",
    description:
      "Durch unseren Sensibilisierungsworkshop \nbieten wir den Teilnehmenden \neine vollkommen\nneue Erfahrung und eröffnen ihnen eine ganz \nneue Perspektive auf das Leben. \nIm Rahmen dieses Workshops gehen wir\nunter anderem auf wichtige Themen \nwie Accessibility, Inklusion und Bereiche\nvon Corporate Social Responsibility ein. Durch \neinen offenen und breiten Austausch \nzwischen\nBlinden und Sehenden, hoffen wir Vorurteile \nund Stigmata abzubauen und ein besseres\nVerständnis von der Lebensrealität von blinden \nund sehbehinderten\nMenschen aufzubauen.  Wir sind der \nÜberzeugung, dass Inklusion nur dann \neffektiv gelingen\nkann, wenn durch einen offenen Dialog auf \nAugenhöhe, beide Seiten ein Verständnis für \ndie Positionen der jeweils anderen \nbekommen.",
    tags: [
      {
        label: "Behinderung",
      },
    ],
    carddescription: "We open your eyes by clothing them!",
    duration: "2-3 h ",
    participants: "10 – 25 (bei individueller Absprache \nauch mehr möglich)",
    price: "auf Anfrage",
    procedure:
      "Dabei stehen die\nTeilnehmenden mit verbundenen Augen vor \nverschiedenen Aufgaben, die sie durch das\nZurückgreifen auf ihre anderen Sinne und auf \neine starke Kommunikationsfähigkeit,\nbewältigen müssen. Ein elementarer Bestanteil \ndieses Workshops ist die künstlerische Arbeit\nmit Stift, Papier und Modelliermasse, da diese \nTätigkeiten es erlauben, haptische und \nauditive\nAspekte miteinzubinden.  Ein weiterer wichtiger\nBestandteil dieses Workshops ist der offene\nAustausch mit unseren Workshopleitungen. \nDabei haben die Teilnehmenden die \nMöglichkeit\nFragen zu verschiedensten Themen ihrer Wahl \nzu stellen und so einen noch tieferen Einblick \nin\ndas Leben mit Low Vision Hintergrund zu \nerhalten.",
    street: "Universitätsstraße",
    targetGroup: "Unternehmen, Organisationen und NGOs",
    organizationId: "630cc6966ca1e7881c7b0022",
    offeringTypes: [
      {
        label: "Workshop",
      },
    ],
    published: true,
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565761/offerings/630dd6888bc599f3f7d469bb/ihukq6sj8nlsab8vyyvi.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/ggnrx90uvigjhca5zsvh.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/ioem89xj5yvz9vrbcxm2.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/hkdyaidqs0u5ri7anny3.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/ybr0hjnjb39x6wq0dqzn.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/u1baesicx4tjonkoiygd.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/pplbdcbfuemfnjotys2k.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/xxqv5pszlkcozsxd9gme.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/esyjoieeojubabxygepi.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565762/offerings/630dd6888bc599f3f7d469bb/pqkyxr7zbh1vs0kks30x.webp",
    ],
    updatedAt: "2023-06-21T14:48:52.691Z",
    city: "Bochum",
    houseNumber: "150",
    postcode: "44801",
    mailAdress: "blinc@bochum.enactus.team",
    organame: "BLINC",
    latitude: 51.44589,
    longitude: 7.26044,
    id: "630dd6888bc599f3f7d469bb",
  },
  {
    name: "Resilienzworkshop",
    description:
      "Viele Menschen mit Low Vision Hintergrund \nhaben durch eine tiefgreifende persönliche \nKrise resiliente Fähigkeiten erlangt. Erblindung \nist ein gravierender und folgenschwerer \nEinschnitt in das Leben, welcher jeden \nEinzelnen vor die Herausforderung stellt, diese \nneue Situation anzunehmen, und mit ihr auf die\nbeste Art und Weise zu leben. Blinde und \nSehbehinderte Menschen müssen darüber \nhinaus in ihrem Alltag mit vielen Hindernissen \nund Barrieren umgehen, dabei haben sie einige \nFähigkeiten erworben, wie \nDurchhaltevermögen, Geduld und \nFrustrationstoleranz. Während der Entwicklung \ndieses Konzepts haben wir uns mit \nExperteninnen und Experten ausgetauscht und \nuns mit den wissenschaftlichen Hintergründen \nzu diesem Thema beschäftigt. Resilienz kann \nentwickelt werden – und ist wie ein Muskel \ntrainierbar. Unsere Workshopleitungen \nberichten unter anderem wie sie mit Problemen\numgehen, welche Strategien sie dabei nutzen \nund wie sie sich an neue Situationen anpassen. \nWir leben in einer Welt die sich schon jetzt \nimmer schneller verändert – deshalb wird \nAnpassungsfähigkeit eine der wichtigsten \nFähigkeiten der Zukunft sein, um mit der \nständigen Veränderung umgehen zu können. \nBLINC bietet ihren Mitarbeiterinnen und \nMitarbeitern hierbei die Möglichkeit, Strategien\nzur Stärkung der Resilienz zu erarbeiten, sich \nmit dem Problem unserer sich ständig \nändernden Welt intensiver auseinander zu \nsetzen und mit Zuversicht der Zukunft und ihren\nHerausforderungen entgegen zu blicken.",
    offeringTypes: [
      {
        label: "Workshop",
      },
    ],
    duration: "2-3 h",
    price: "Auf Anfrage",
    street: "Universitätsstraße",
    targetGroup: "Unternehmen, Organisationen und \nNGOs",
    participants: "15-25 (nach individueller Absprache \nauch mehr möglich",
    tags: [
      {
        label: "Behinderung",
      },
    ],
    organizationId: "630cc6966ca1e7881c7b0022",
    published: true,
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/sdus2wxbb8oqp4sz5oye.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/mctnqsceqhvfxnyquuiu.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/ovfd3v4awolofxw2xsqo.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/cguolzbs0bntvq4rxkpb.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/pllnz1cxkutybgkws2pp.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/zfunpboizfsekkrr1vmq.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/dguzye1eg8amvrgxlyjp.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/hma6p9ip5ruzebafwxel.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/k8qcdcdviphlj0utv8u8.webp",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1676565866/offerings/630dd9a08bc599f3f7d469bc/oo8i0b0qffs8qoq3k9gh.png",
    ],
    updatedAt: "2023-06-21T14:49:06.804Z",
    city: "Bochum",
    houseNumber: "150",
    postcode: "44801",
    mailAdress: "blinc@bochum.enactus.team",
    organame: "BLINC",
    latitude: 51.44589,
    longitude: 7.26044,
    id: "630dd9a08bc599f3f7d469bc",
  },
  {
    name: "Bündnis gegen Cybermobbing e.V.",
    description:
      "Wir bieten Workshops (4-8h) und individuelle Angebote an Schulen, in Unternehmen und für Eltern an. Wir haben vorgefertigte Konzepte, bieten aber natürlich immer die Möglichkeit etwas individuell für Kunden zu konzipieren bzw. zu erstellen.\n4x im Jahr an festen Tagen steht ein kostenfreies Angebot zur Verfügung (Infos hierzu in unserem Newsletter oder auf Instagram).\n",
    carddescription: "Workshops - Prävention gegen Cybermobbing",
    tags: [
      {
        label: "Teambuilding",
      },
      {
        label: "Mobbing",
      },
    ],
    offeringTypes: [
      {
        label: "Workshop",
      },
    ],
    street: "Leopoldstraße ",
    houseNumber: "1",
    postcode: "76133",
    city: "Karlsruhe",
    telephone: "07211600915",
    mailAdress: "info@buendnis-gegen-cybermobbing.de",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1683216163/offerings/6453d722212617cc35c2abab/nq0rx9setebpwdfqbtrj.jpg",
    ],
    price: "auf Anfrage 300€-500€",
    latitude: 49.01055145,
    longitude: 8.389997300146812,
    published: true,
    online: true,
    createdAt: "2023-05-04T16:02:42.578Z",
    updatedAt: "2023-05-04T16:22:51.462Z",
    organizationId: "649c4f140e5bc5e3bd02891a",
    organame: "Bündnis gegen.Cybermobbing e.V.",
    id: "6453d722212617cc35c2abab",
  },
  {
    name: "Bündnis gegen Cybermobbing e.V.",
    description:
      "Wir bieten Vorträge (90min) und individuelle Angebote an Schulen, in Unternehmen und für Eltern an. Wir haben vorgefertigte Konzepte, bieten aber natürlich immer die Möglichkeit etwas individuell für Kunden zu konzipieren bzw. zu erstellen.\n4x im Jahr an festen Tagen steht ein kostenfreies Angebot zur Verfügung (Infos hierzu in unserem Newsletter oder auf Instagram).",
    carddescription: "Impulsvorträge - Prävention gegen Cybermobbing",
    tags: [
      {
        label: "Mobbing",
      },
      {
        label: "Teambuilding",
      },
    ],
    offeringTypes: [
      {
        label: "Vortrag",
      },
      {
        label: "Interaktiver Vortrag",
      },
    ],
    street: "Leopoldstraße",
    houseNumber: "1",
    postcode: "76133",
    city: "Karlsruhe",
    telephone: "07211600915",
    mailAdress: "info@buendnis-gegen-cybermobbing.de",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1683217205/offerings/6453db35212617cc35c2abc9/cusmg58zfyitzxyot4y3.jpg",
    ],
    price: "teilweise 0€; auf Anfrage 300-500€",
    latitude: 49.01055145,
    longitude: 8.389997300146812,
    published: true,
    online: true,
    createdAt: "2023-05-04T16:20:05.073Z",
    updatedAt: "2023-05-04T16:23:55.779Z",
    organizationId: "649c4f140e5bc5e3bd02891a",
    organame: "Bündnis gegen Cybermobbing e.V.",
    id: "6453db35212617cc35c2abc9",
  },
  {
    name: "Queere Bildung in Schulen in und um Karlsruhe",
    description:
      "LSBTIQ* - Was heißt das eigentlich? Und hängen geschlechtliche Vielfalt und sexuelle Orientierung zusammen oder nicht? Mit interaktiven Methoden und gestützt durch autobigraphische Erzählungen der queeren Teamenden lernen Schüler*innen ab Klasse 8 in diesem Workshop mehr über queere Identitäten und Lebensweisen, Vorurteile und Diskriminierung von queeren Menschen und was sie dagegen tun können.  Ein Workshop dauert in der Regel drei Schulstunden und wird von zwei bis vier Teamenden durchgeführt.\n\nDurch die Leitperspektive „Bildung für Toleranz und Akzeptanz für Vielfalt“ stehen diese Klassenworkshops in einem konkreten Bezug zum Bildungsplan des Landes Baden-Württemberg.",
    carddescription:
      "In unserem Workshop lernen die Schüler*innen mehr über LSBTIQ* - Was heißt das eigentlich? Und hängen geschlechtliche Vielfalt und sexuelle Orientierung zusammen oder nicht? ",
    tags: [
      {
        label: "Sexismus",
      },
      {
        label: "Queerfeindlichkeit",
      },
      {
        label: "Psychische Gesundheit",
      },
      {
        label: "sexuelle Aufklärung",
      },
    ],
    offeringTypes: [
      {
        label: "Workshop",
      },
    ],
    street: "Sophienstraße",
    houseNumber: "102",
    postcode: "76135",
    city: "Karlsruhe",
    mailAdress: "bildung@queerkastle.de",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1686755488/offerings/6489d43c8f510a53473a62e8/bkuod5q1wodf6zo9otul.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1686755488/offerings/6489d43c8f510a53473a62e8/n5xzmi6icv7ylpswwgsj.png",
    ],
    latitude: 49.0079932,
    longitude: 8.3825155,
    published: true,
    online: false,
    createdAt: "2023-06-14T14:52:44.697Z",
    updatedAt: "2023-06-21T16:12:25.693Z",
    price: "235€",
    organizationId: "6489d9bb5798b0be4d69ac8b",
    organame: "queerKAstle e.V.",
    id: "6489d43c8f510a53473a62e8",
  },
  {
    name: "Entstehung von & Umgang mit Mikroaggressionen",
    description:
      "Mikroaggressionen können unseren beruflichen wie auch privaten Alltag stark beeinträchtigen. Doch wie entstehen Mikroaggressionen? Welche Auswirkungen haben sie auf unsere Gesundheit? \nMikroaggressionen & Vorurteile/Biases – welcher Zusammenhang steht dahinter? In welcher Haltung können wir Mikroaggressionen begegnen & bekämpfen?\n\nAuch wenn wir Mikroaggressionen nicht für immer aus unserem Alltag verbannen können, so können wir sehr viel dagegen tun.\n\nDas Angebot richtet sich an 10-20 Fachkräfte & Ehrenamtliche aus den Bereichen: kommunale Verwaltung, Bildungseinrichtungen, KiTa & KiGa, Integrationsarbeit & Soziale Arbeit. \nDer Workshop kann an die Vorerfahrungen der Teilnehmenden anknüpfen (eignet sich also sowohl für Anfänger*innen als auch für Fortgeschrittene). In einem persönlichen Telefongespräch klären wir gerne die Rahmenbedingungen und Details der Durchführung.",
    carddescription:
      "Mikroaggressionen können unseren beruflichen wie auch privaten Alltag stark beeinträchtigen. Doch wie entstehen Mikroaggressionen? Welche Auswirkungen haben sie auf unsere Gesundheit?",
    tags: [
      {
        label: "Rassismus",
      },
      {
        label: "Flucht und Migration",
      },
      {
        label: "Psychische Gesundheit",
      },
    ],
    offeringTypes: [
      {
        label: "Vortrag",
      },
      {
        label: "Workshop",
      },
    ],
    street: "Postfach",
    houseNumber: "11 08 18",
    postcode: "76058",
    city: "Karlsruhe",
    mailAdress: "kontakt@empowerment-space.de",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1687962353/offerings/649c42f1eee2e7363c7f6c5e/ub4r2bfzyfg6pxzrwi9q.png",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1687962353/offerings/649c42f1eee2e7363c7f6c5e/uwy2ydtpdyig6gk4c032.jpg",
    ],
    price: "Abhängig vom Einsatz & Teilnehmendenzahlen",
    latitude: null,
    longitude: null,
    published: true,
    online: false,
    createdAt: "2023-06-28T14:25:53.238Z",
    updatedAt: "2023-06-28T14:31:53.650Z",
    organizationId: "649c49603e2102f8dc3d0e7b",
    id: "649c42f1eee2e7363c7f6c5e",
  },
  {
    name: "Stärkung der Inter- & Transkulturellen Kompetenz",
    description:
      'Verstehen wir das Gleiche, \nwenn wir von "Kultur" sprechen? Wie hilfreich sind kulturelle Zuschreibungen wirklich? \n\nWie kann ein interkultureller Umgang in der Praxis gestaltet werden?\n\nVon der Kulturalisierungsfalle bleibt niemand verschont! Diese besondere Form der Diskriminierung ist aber den meisten von uns nicht bewusst!\n\nDieses Angebot richtet sich an Fachkräfte & Ehrenamtliche (Gruppengröße 10-20) aus: \n- kommunalen Verwaltungen\n- Bildungseinrichtungen \n- KiTa & KiGa\n- Integrationsarbeit \n- Soziale Arbeit\n- alle Menschen, die nicht mehr in der Kulturalisierungsfalle landen möchten!\nDer Workshop dauert ca. 4-8 Stunden\n\n\nVorteile für Dich und Dein Team:\n\nSensibilisierung von Fachkräften:\n- beeinflusst positiv Eure Haltung & Handlungssicherheit\n- steigert die Attraktivität Deiner Firma oder Deiner Einrichtung für Kund*innen, Adressat*innen & Auftraggeber*innen\n- steigert die Fachlichkeit & Effektivität für bestehende oder zukünftige Projekte\n- empowert Dich als Fachkraft, Deine Arbeit diskriminierungsfreier zu gestalten\n- steigert Deine (Ver-)Bindung mit Kolleg*innen & Adressat*innen\n- steigert Deine Attraktivität als Fachkraft für zukünftige Arbeitgeber*innen oder Aufgabenstellungen\n- ermöglicht Dir eine stressfreiere Arbeit\n- inspiriert & motiviert',
    carddescription:
      'Verstehen wir das Gleiche, \nwenn wir von "Kultur" sprechen? Wie hilfreich sind kulturelle Zuschreibungen wirklich? \n\nWie kann ein interkultureller Umgang in der Praxis gestaltet werden?',
    tags: [
      {
        label: "Rassismus",
      },
      {
        label: "Flucht und Migration",
      },
      {
        label: "Kultur",
      },
      {
        label: "Psychische Gesundheit",
      },
    ],
    offeringTypes: [
      {
        label: "Workshop",
      },
      {
        label: "Vortrag",
      },
      {
        label: "Beratung",
      },
    ],
    street: "Postfach",
    houseNumber: "11 08 18",
    postcode: "76058",
    city: "Karlsruhe",
    telephone: "-",
    mailAdress: "kontakt@empowerment-space.de",
    imageUrls: [
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1687963559/offerings/649c47a6eee2e7363c7f6c90/qtalkjun3hl8ydu2epbt.jpg",
      "http://res.cloudinary.com/dygrsbi9x/image/upload/v1687963559/offerings/649c47a6eee2e7363c7f6c90/cmoplntatz4ttbnypavp.png",
    ],
    price: "variabel je nach Einsatz & Teilnehmendenzahl",
    latitude: null,
    longitude: null,
    published: true,
    online: false,
    createdAt: "2023-06-28T14:45:58.902Z",
    updatedAt: "2023-06-28T14:46:00.419Z",
    organizationId: "649c49603e2102f8dc3d0e7b",
    id: "649c47a6eee2e7363c7f6c90",
  },
]
