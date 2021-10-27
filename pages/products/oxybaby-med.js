import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator OXYBABY® Med",
    description: "O2- bzw. O2/CO2-Gasanalysator zur Kontrolle medizinischer Gase",
    keywords: "Oxybaby, Oxybaby Med, Gasanalysator, O2, CO2, mobile, medizinischer Gase,  Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/9/6/csm_witt_gas_analyser_oxybaby_med_40bc9819fa.png",
    og_url: "https://mmw.industries/products/oxybaby-med",
};

const data = {
    breadCrumb: "Startseite / Produkte / OXYBABY® Med",
    productTitle: "Gasanalysator OXYBABY® Med",
    overviewHeader: "O2- bzw. O2/CO2-Gasanalysator zur Kontrolle medizinischer Gase",
    overviewContent: [
        {

            type: 'list',
            header: "",
            items: [
                "ideal zum Einsatz im Krankenhaus\n" ,
                "schnelle, exakte Stichprobenanalyse\n" ,
                "misst auch den Gasdruck\n" ,
                "mobil durch Akkubetrieb\n" ,
                "Anzeige des O2-Wertes in 0,01%-Schritten\n" ,
                "lange Lebensdauer des O2-Sensors (ca. 2 Jahre, je nach Nutzung)\n" ,
                "umfangreiche Messdatenverwaltung\n" ,
                "optional: Adapterset"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/9/6/csm_witt_gas_analyser_oxybaby_med_40bc9819fa.png",
        "https://www.wittgas.com/fileadmin/_processed_/7/e/csm_carrying_case_for_witt_oxybaby_c00b3f3e3d.png",
        "https://www.wittgas.com/fileadmin/_processed_/b/c/csm_adapter_for_witt_gas_analyser_oxybaby_med_31edc10333.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_med_kpl_d.pdf",
    youtubeVideo: "",
    informationHeader: "Schnurloser Ein-Hand-Analysator zur Kontrolle medizinischer Gase.\n" +
        "OXYBABY® Med von WITT ist das ideale Instrument für die mobile, schnelle und exakte Analyse von Gasmedien vor deren Einsatz im Krankenhaus – zum Schutz des Patienten.",
    informationContent: [
        "Gasanalysator OXYBABY® Med für O2 oder O2/CO2 + Leitungsdruck",
        "Das OXYBABY® Med wird einfach an den Entnahmepunkt angedockt, die Messung startet und im beleuchteten Display erscheint das Ergebnis.",
        "Das Gerät prüft nicht nur die Gasart, sondern auch Konzentration und Druck. Bauweise und Materialien des OXYBABY® Med sind hygienisch optimiert. Das intuitive Bedienkonzept ermöglicht einfachste Anwendungen.\n" +
        "Die letzten 500 Messungen werden gespeichert und können zur digitalen Dokumentation exportiert werden. Ein Adapterset für die verschiedenen Anschlüsse ist optional erhältlich.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "integrierter Messwertspeicher für die letzten 500 Messungen\n" +
                "Verwaltung von bis zu 25 Anwendern und Zuordnung der Messwerte für bis zu 100 Anwendungsfälle und 50 weitere Zuordnungen\n" +
                "eine microSD-Karte ermöglicht den leichten Export der Messergebnisse und vergrößert die Speicherkapazität\n" +
                "schnurlos mobil durch Akkubetrieb\n" +
                "USB-Port für Datentransfer und Akkuladung\n" +
                "keine Fehlmessungen durch Durchflusskontrolle mit Warnhinweis\n" +
                "verbesserte einfache Einhandbedienung\n" +
                "leicht zu reinigende Kunststoffoberfläche\n" +
                "großes, gut ablesbares, beleuchtetes Grafikdisplay\n" +
                "mehrsprachige Ausführung\n" +
                "lange Lebensdauer des O2-Sensors (ca. 2 Jahre)\n" +
                "geringe Wartungskosten"
            ]
        },
        {
            type: 'list',
            header: "Lieferumfang komplett im handlichen Koffer inklusive:",
            items: [
                "Ladegerät, microSD-Karte\n" +
                "OBCC-Software (Demoversion) zum Download"
            ],
        },
        {
            type: 'span',
            content: "Abmessungen Koffer (HxBxT): ca. 325x385x115 mm,\n" +
                "Gewicht: ca. 1,7 kg (inkl. Inhalt)"
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Datenkabel\n" +
                "Adapterset für diverse Anschlüsse\n" +
                "Bluetooth (z.B. für separaten Tischdrucker)"
            ]
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/b/2/csm_gasanalysator_oxybaby_med_kpl_d_c5a40cc488.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_med_kpl_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function OxybabyMed() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default OxybabyMed;