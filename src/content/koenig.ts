interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }

// Geöffnete Quellen (URLs exakt wie aufgerufen, Stand der Prüfung: Oktober 2026)
const Q = {
  website: {
    text: "Verena König: Website (Startseite)",
    url: "https://www.verenakoenig.de/",
  },
  ueberMich: {
    text: "Verena König: Über mich",
    url: "https://www.verenakoenig.de/ueber-mich/",
  },
  podcast: {
    text: "Verena König: Blog & Podcast, alle Folgen",
    url: "https://www.verenakoenig.de/blog-und-podcast/alle-folgen/",
  },
  praxis: {
    text: "Praxis Verena König: Startseite mit Schwerpunkten und Aus- und Weiterbildungen",
    url: "https://www.praxis-verenakoenig.de/",
  },
  praxisImpressum: {
    text: "Praxis Verena König: Impressum (Berufsbezeichnung und Erlaubnis)",
    url: "https://www.praxis-verenakoenig.de/impressum/",
  },
  prhVeranstaltungen: {
    text: "Penguin Random House: Veranstaltungen Lebenshilfe, Ratgeber, Sachbuch Herbst 2024 (Kurzbiografie Verena König)",
    url: "https://content.penguinrandomhouse.de/content/share/Veranstaltungen-LebenshilfeRatgeberSachbuch-Herbst2024.pdf",
  },
  leseprobeBinIch: {
    text: "Leseprobe: Verena König, Bin ich traumatisiert? Gräfe und Unzer, München 2021",
    url: "https://content.e-bookshelf.de/media/reading/L-16614463-235c730195.pdf",
  },
  leseprobeBeziehungen: {
    text: "Leseprobe der tschechischen Ausgabe von Verena König, Trauma und Beziehungen (Original: Arkana, München 2024)",
    url: "https://storage.bookup.cz/ebooks/preview/001/056/221/preview_9788027183760.pdf",
  },
  spektrum: {
    text: "Spektrum.de (03.02.2025): Rezension von Rosanna Wegenstein zu Trauma und Beziehungen",
    url: "https://www.spektrum.de/rezension/buchkritik-zu-trauma-und-beziehungen/2251767",
  },
  s3Patient: {
    text: "S3-Leitlinie PTBS (AWMF 155-001, Version 2026), Informationsblatt für Betroffene",
    url: "https://www.dgppn.de/_Resources/Persistent/a4b7e92e343eaef4d100c293bd3113653e86f628/155-001p1__S3_Posttraumatische-Belastungsstoerung_2026-05.pdf",
  },
  s3Lang: {
    text: "S3-Leitlinie Posttraumatische Belastungsstörung (AWMF 155-001), Langfassung 2026",
    url: "https://www.dgppn.de/_Resources/Persistent/aba0fa4ffff4a44e780f5985c1d86f91496d8d07/155-001l_S3_Posttraumatische-Belastungsstoerung_2026-05.pdf",
  },
  seReview: {
    text: "Somatic Experiencing: Ein systematisches Review zu Wirksamkeit und Wirkfaktoren der Traumatherapie (veröffentlicht auf der Website von Somatic Experiencing Deutschland)",
    url: "https://www.somatic-experiencing.de/wp-content/uploads/2020/07/Review_SE_Publikation.pdf",
  },
  kuhfuss2021: {
    text: "Kuhfuß, M., Maldei, T., Hetmanek, A. & Baumann, N. (2021): Somatic experiencing, effectiveness and key factors of a body-oriented trauma therapy. A scoping literature review. European Journal of Psychotraumatology 12(1)",
    url: "https://www.rlp-forschung.de/public/facilities/68/publications/144231",
  },
  grossman2026: {
    text: "Grossman, P. et al. (2026): Why the Polyvagal Theory Is Untenable. An International Expert Evaluation. Clinical Neuropsychiatry",
    url: "https://www.clinicalneuropsychiatry.org/download/why-the-polyvagal-theory-is-untenable-an-international-expert-evaluation-of-the-polyvagal-theory-and-commentary-upon-porges-s-w-2025-polyvagal-theory-current-status-clinical-applications-and/",
  },
  giroux2023: {
    text: "Giroux, C., Ahlers, D. & Miawotoe, A. (2023): Polyvagal Approaches. Scientifically questionable but useful in practice? Journal of Psychiatry Reform 10(11)",
    url: "https://journalofpsychiatryreform.com/2023/10/17/polyvagal-approaches-scientifically-questionable-but-useful-in-practice/",
  },
  therapieDe: {
    text: "therapie.de: Das Wer, Wie, Was der Psychotherapie (Psychotherapeut, Psychologe, Heilpraktiker)",
    url: "https://www.therapie.de/psyche/info/fragen/wichtigste-fragen/unterschied-psychotherapeut-psychologe-psychiater/",
  },
  doccheckHp: {
    text: "DocCheck Flexikon: Heilpraktiker",
    url: "https://flexikon.doccheck.com/de/Heilpraktiker",
  },
} satisfies Record<string, Quelle>;

export const KOENIG: { absaetze: Abschnitt[]; weiter: { text: string; url: string }[]; quellen: Quelle[] } = {
  absaetze: [
    {
      titel: "Eine Stimme aus der Praxis: Verena König",
      text: [
        "Verena König ist eine deutsche Traumatherapeutin, Autorin und Seminarleiterin. Sie lebt und arbeitet im Odenwald. Viele Menschen kennen sie durch ihre Bücher und ihren Podcast.",
        "Laut Impressum ihrer Praxis ist sie Heilpraktikerin und Heilpraktikerin für Psychotherapie. Die Erlaubnis für das Gebiet der Psychotherapie erhielt sie 2009, die umfassende Heilpraktiker-Erlaubnis einige Jahre später. Das ist eine Zulassung nach dem deutschen Heilpraktikergesetz. Sie ist etwas anderes als die Approbation, die psychologische und ärztliche Psychotherapeutinnen und Psychotherapeuten haben. In Österreich gibt es den Beruf Heilpraktiker nicht.",
        "Auf ihrer Praxisseite nennt sie viele Weiterbildungen. Dazu gehören Systemische Therapie, Psychotraumatologie, EMDR, Ego-State-Therapie, Brainspotting sowie Kurse zu Somatic Experiencing und zur Polyvagal-Theorie. Einen Abschluss als Somatic-Experiencing-Practitioner führt die Seite nicht an.",
        "Sie hat zwei Bücher über Trauma geschrieben und spricht jede Woche im Podcast „Kreative Transformation“ über Trauma, Nervensystem und Heilung. Außerdem bietet sie Online-Kurse an und hat ein eigenes Konzept für traumasensibles Coaching entwickelt, die Neurosystemische Integration.",
      ],
    },
    {
      titel: "Was sie betont",
      text: [
        "Trauma ist für sie mehr als Unfall, Verlust oder Gewalt. Sie zählt auch frühe Erfahrungen dazu: wenn Bedürfnisse immer wieder übergangen wurden, wenn das Vertrauen in eine Bezugsperson verloren ging oder wenn ein Kind sich nicht zeigen durfte. Vernachlässigung beschreibt sie als besonders schwere Verletzung.",
        "Viele Muster, die heute stören, sieht sie als frühere Überlebenshilfe. Rückzug, Anpassung, Verdrängen oder innerliches Abschalten waren einmal kluge Antworten auf eine schwierige Lage. Sie schreibt: „Auch das, was heute dysfunktional und hinderlich wirkt, hat seine Berechtigung.“ (Bin ich traumatisiert?, 2021)",
        "Ein Schwerpunkt ist das Nervensystem. Wenn der Körper im Überlebensmodus ist, sieht man leichter Gefahr, auch wo keine ist. Sie lädt dazu ein, Signale wie Herzschlag, Atem oder Körperhaltung wahrzunehmen und das eigene Nervensystem besser zu verstehen und zu beruhigen.",
        "Trauma entsteht für sie oft in Beziehungen und kann auch in Beziehungen heilen. Wichtig sind das Gefühl, gesehen zu werden, sichere Bindung und neue, gute Beziehungserfahrungen.",
        "Sie rät, freundlich mit sich umzugehen. Schutzmuster sollen nicht bekämpft, sondern verstanden und nach und nach integriert werden. Selbstkritik darf leiser werden.",
        "Und sie empfiehlt ein langsames Tempo: kleine Portionen, Pausen und Zeit zwischen den Kapiteln. Sie schreibt auch, dass Menschen mit frühen oder schweren Traumafolgen oft professionelle Begleitung brauchen und ein Buch keine persönliche Beratung ersetzt.",
      ],
    },
    {
      titel: "Wie das fachlich einzuordnen ist",
      text: [
        "Vieles davon deckt sich mit dem Fachwissen. Dass Traumafolgen verständliche Schutzreaktionen sind, dass frühe Beziehungserfahrungen prägen und dass Sicherheit wichtig ist, sagen auch Fachgesellschaften. Das langsame, schrittweise Vorgehen ist ebenfalls in der Behandlung üblich.",
        "Die deutsche S3-Leitlinie zur PTBS empfiehlt als erste Wahl eine traumafokussierte Psychotherapie im Einzelgespräch. Genannt werden unter anderem EMDR, Kognitive Therapie, Cognitive Processing Therapy, Narrative Expositionstherapie und Prolongierte Exposition. Medikamente gelten als zweite Wahl, Sport- und Bewegungstherapie als sinnvolle Ergänzung.",
        "Körperorientierte Ansätze wie Somatic Experiencing gehören nicht zu diesen ersten Empfehlungen. Eine Übersichtsarbeit fand erste positive Ergebnisse, aber nur wenige Studien und nur zwei randomisierte kontrollierte Studien. Die Fachleute halten weitere, größere Studien für nötig.",
        "Die Polyvagal-Theorie ist in der Praxis sehr verbreitet. Ihr Bild vom Nervensystem zwischen Sicherheit und Gefahr hilft vielen Menschen, das eigene Erleben zu verstehen. Ihre biologischen Grundannahmen sind aber stark umstritten. 2026 kamen 39 Forschende in einer gemeinsamen Bewertung zu dem Schluss, dass zentrale Annahmen nicht haltbar sind. Andere Fachleute sehen trotz dieser Kritik einen praktischen Nutzen. Solche Bilder sind daher eher Verständnishilfen als gesicherte Biologie.",
        "Bücher und Podcasts können anregen, das eigene Erleben freundlicher zu betrachten. Sie sind keine Behandlung. Wer stark unter Traumafolgen leidet, findet in einer traumafokussierten Psychotherapie die am besten untersuchte Hilfe.",
      ],
    },
  ],
  weiter: [
    { text: "Buch: Bin ich traumatisiert? (Gräfe und Unzer, 2021), Leseprobe", url: Q.leseprobeBinIch.url },
    { text: "Buch: Trauma und Beziehungen. Wie wir die immergleichen Bindungsmuster hinter uns lassen (Arkana, 2024), Rezension auf Spektrum.de", url: Q.spektrum.url },
    { text: "Podcast: Kreative Transformation, Übersicht aller Folgen", url: Q.podcast.url },
    { text: "Website von Verena König", url: Q.website.url },
  ],
  quellen: [
    Q.website, Q.ueberMich, Q.podcast, Q.praxis, Q.praxisImpressum, Q.prhVeranstaltungen,
    Q.leseprobeBinIch, Q.leseprobeBeziehungen, Q.spektrum, Q.s3Patient, Q.s3Lang,
    Q.seReview, Q.kuhfuss2021, Q.grossman2026, Q.giroux2023, Q.therapieDe, Q.doccheckHp,
  ],
};
