import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator OXYBABY® 6.0 P",
    description: "O2- bzw. O2/CO2-Gasanalysator für Druckleitungen, Premiumversion",
    keywords: "Oxybaby, Oxybaby 6.0 P, Gasanalysator, O2, CO2, mobile, Druckleitungen",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/f/6/csm_witt_gas_analyser_oxybaby6_p_ecab16762b.png",
    og_url: "https://mmw.industries/products/oxybaby-6-p",
};

const data = {
    breadCrumb: "Startseite / Produkte / OXYBABY 6.0 P",
    productTitle: "Gasanalysator OXYBABY® 6.0 P",
    overviewHeader: "O2-, CO2- oder O2/CO2-Gasanalysator für Druckleitungen, Premiumversion",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "für druckführende Leitungen z.B. in der Schweißtechnik\n" ,
                "schnelle, exakte Stichprobenanalyse\n" ,
                "mobil durch Akkubetrieb\n" ,
                "Anzeige des O2-Wertes in 0,01%-Schritten\n" ,
                "lange Lebensdauer des O2-Sensors (ca. 2 Jahre, je nach Nutzung)\n" ,
                "großer Messdatenspeicher mit Exportfunktion"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/f/6/csm_witt_gas_analyser_oxybaby6_p_ecab16762b.png",
        "https://www.wittgas.com/fileadmin/_processed_/7/e/csm_carrying_case_for_witt_oxybaby_c00b3f3e3d.png",
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_p_kpl_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Schnurloser Ein-Hand-Analysator für Druckleitungen vorwiegend in der Schweißtechnik.\n" +
        "OXYBABY® P von WITT basiert wahlweise auf der M+ oder 6.0 Version und ist das ideale Instrument für die mobile, schnelle und exakte Analyse von Gasmedien in einer druckführenden Versorgungsleitung.",
    informationContent: [
        "Die Zusammensetzung eines Gasgemisches ist mit dem OXYBABY® P an jeder Stelle der Gasleitung und auch unmittelbar an der Verbrauchsstelle überprüfbar. Die Messung startet und im beleuchteten Display erscheint das Ergebnis. Das Gerät prüft nicht nur die Gasart, sondern auch die Konzentration.\n" +
        "Das intuitive Bedienkonzept ermöglicht einfachste Anwendungen.\n" +
        "Die letzten Messungen werden gespeichert und können zur digitalen Dokumentation exportiert werden (nur 6.0 Version).\n" +
        "Optional bietet die 6.0 Version schnell und unkompliziert alle Vorteile modernster Technologien z.B.: Bluetooth zur drahtlosen Kommunikation und einen integrierten Barcode-Reader.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "integrierter Messwertspeicher für die letzten Messungen\n" ,
                "eine microSD-Karte ermöglicht den leichten Export der Messergebnisse und vergrößert die Speicherkapazität\n" ,
                "schnurlos mobil durch Akkubetrieb\n" ,
                "keine Fehlmessungen durch Durchflusskontrolle mit Warnhinweis\n" ,
                "verbesserte einfache Einhandbedienung\n" ,
                "leicht zu reinigende Kunststoffoberfläche\n" ,
                "großes, gut ablesbares, beleuchtetes Grafikdisplay\n" ,
                "mehrsprachige Ausführung\n" ,
                "USB-Port für Datentransfer und Akkuladung\n" ,
                "Verwaltung von bis zu 25 Anwendern und Zuordnung der Messwerte für bis zu 100\n" ,
                "Anwendungsfälle und 50 weitere Zuordnungen\n" ,
                "lange Lebensdauer des O2-Sensors (ca. 2 Jahre)\n" ,
                "geringe Wartungskosten"
            ]
        },
        {
            type: 'list',
            header: "Lieferumfang komplett im handlichen Koffer inklusive:",
            items: [
                "Ladegerät, microSD-Karte, OBCC-Software (Demoversion) zum Download\n" +
                "Anschluss G 1/4 AG mit Überwurfmutter"
            ]
        },
        {
            type: 'span',
            content: "Abmessungen Koffer (HxBxT): ca. 325x385x115 mm\n" +
                "Gewicht: ca. 1,7 kg (inkl. Inhalt)"
        },
        {
            type: 'Optionen:',
            header: "Lieferumfang komplett im handlichen Koffer inklusive:",
            items: [
                "Adapter für diverse Anschlüsse\n" +
                "Datenkabel, Bluetooth (z.B. für separaten Tischdrucker),  integrierter Barcode-Reader"
            ]
        },
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/f/csm_gasanalysator_oxybaby_p_kpl_d_6eb9b4149d.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_p_kpl_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
    ]
};

function Oxybaby6P() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Oxybaby6P;