import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator OXYBABY® M+ P",
    description: "O2- bzw. O2/CO2-Gasanalysator für Druckleitungen, Premiumversion",
    keywords: "Oxybaby, Oxybaby M+ P, Gasanalysator, O2, CO2, mobile, Druckleitungen",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/5/0/csm_witt_gas_analyser_oxybaby_mplus_p_a350515771.png",
    og_url: "https://mmw.industries/products/oxybaby-mplus-p",
};

const data = {
    breadCrumb: "Startseite / Produkte / OXYBABY® M+ P",
    productTitle: "Gasanalysator OXYBABY® M+ P",
    overviewHeader: "O2-, CO2- oder O2/CO2-Gasanalysator für Druckleitungen, Basisversion",
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
                "interner Messwertspeicher"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/5/0/csm_witt_gas_analyser_oxybaby_mplus_p_a350515771.png",
        "https://www.wittgas.com/fileadmin/_processed_/7/e/csm_carrying_case_for_witt_oxybaby_c00b3f3e3d.png",
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_p_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Schnurloser Ein-Hand-Analysator für Druckleitungen vorwiegend in der Schweißtechnik. OXYBABY® P von WITT basiert wahlweise auf der M+ oder 6.0 Version und ist das ideale Instrument für die mobile, schnelle und exakte Analyse von Gasmedien in einer druckführenden Versorgungsleitung.",
    informationContent: [
        "Die Zusammensetzung eines Gasgemisches ist mit dem OXYBABY® P an jeder Stelle der Gasleitung und auch unmittelbar an der Verbrauchsstelle überprüfbar. Die Messung startet und im beleuchteten Display erscheint das Ergebnis. Das Gerät prüft nicht nur die Gasart, sondern auch die Konzentration.\n" ,
        "Das intuitive Bedienkonzept ermöglicht einfachste Anwendungen.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "integrierter Messwertspeicher für die letzten Messungen\n" ,
                "schnurlos mobil durch Akkubetrieb\n" ,
                "keine Fehlmessungen durch Durchflusskontrolle mit Warnhinweis\n" ,
                "verbesserte einfache Einhandbedienung\n" ,
                "leicht zu reinigende Kunststoffoberfläche\n" ,
                "großes, gut ablesbares, beleuchtetes Grafikdisplay\n" ,
                "mehrsprachige Ausführung\n" ,
                "USB-Port für Akkuladung\n" ,
                "lange Lebensdauer des O2-Sensors (ca. 2 Jahre)\n" ,
                "geringe Wartungskosten"
            ]
        },
        {
            type: 'list',
            header: "Lieferumfang komplett im handlichen Koffer inklusive:",
            items: [
                "Ladegerät\n" ,
                "Anschluss G 1/4 AG mit Überwurfmutter"
            ]
        },
        {
            type: 'span',
            content: "Abmessungen Koffer (HxBxT): ca. 325x385x115 mm\n" +
                "Gewicht: ca. 1,7 kg (inkl. Inhalt)"
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Adapter für diverse Anschlüsse"
            ]
        },
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/6/csm_gasanalysator_oxybaby_p_d_c39b060542.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_oxybaby_p_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
    ]
};

function OxybabyMPlusP() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default OxybabyMPlusP;