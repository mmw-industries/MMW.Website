import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator MAPY 4.0",
    description: "Premium-Gasanalysator für O2, CO2 oder O2/CO2, verschiedene Anwendungen",
    keywords: "Gasanalysator, O2, CO2, Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/f/f/csm_witt_gas_analyser_mapy_7ab2dd498d.png",
    og_url: "https://mmw.industries/products/mapy-4",
};

const data = {
    breadCrumb: "Startseite / Produkte / MAPY 4.0",
    productTitle: "Gasanalysator MAPY 4.0",
    overviewHeader: "Premium-Gasanalysator für O2, CO2 oder O2/CO2, verschiedene Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Stichproben- oder Inline-Analyse möglich\n",
                "ideal zur Kontrolle von MAP-Verpackungen\n",
                "schnelle, exakte Analysetechnik\n",
                "Überschreitung der Grenzwerte erzeugt Alarm\n",
                "Ethernet-Schnittstelle zur Einbindung in Netzwerke\n",
                "leichte Bedienung über Touchscreen\n",
                "optimal zur Standardisierung des Workflows"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/f/f/csm_witt_gas_analyser_mapy_7ab2dd498d.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mapy_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Tragbarer Multi-Funktions-Analysator für die Kontrolle von Schutzatmosphären in der Lebensmittelverpackungstechnik. Zur kontinuierlichen Gasgemischüberwachung (inline) sowie für die Stichprobenanalyse mittels Ansaugnadel, z.B. aus Lebensmittelverpackungen.\n" +
        "Die flexible Analyse für optimale Qualität und Wirtschaftlichkeit in der Produktion.\n" +
        "Verfügbar als Einzel- oder Doppelanalysator für die Gase O2 und CO2.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "minimaler Messgasbedarf für Analyse kleinster Volumina (z.B. Lebensmittel-Verpackungen)\n",
                "schnelles Messergebnis bei Stichprobenanalysen\n",
                "leichte Bedienbarkeit über Touchscreen\n",
                "langzeitstabile Messergebnisse und hohe Genauigkeit durch Druckkompensation\n",
                "einfache Sensor-Kalibrierung\n",
                "permanente Kontrolle der einstellbaren Grenzwerte\n",
                "Fehlermeldungen oder Überschreitungen der Grenzwerte erzeugen einen Alarm und schalten einen potentialfreien Kontakt. Dieser stoppt z.B. Ihren Prozess zur Vermeidung von Qualitätsproblemen\n",
                "leichte Pflege und Hygiene durch spritzwassergeschütztes Edelstahlgehäuse\n",
                "USB Anschluss zur Datenübertragung per USB-Stick\n",
                "Ethernet Anschluss zur Einbindung in Netzwerke\n",
                "Interner akustischer Alarm\n",
                "Messdatenspeicher\n",
                "Produktnamenverwaltung zur individuellen Zuordnung von Messergebnissen\n",
                "Benutzerverwaltung zur Personalisierung der Messungen"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "vollautomatische Kalibrierung\n",
                "Software GASCONTROL CENTER zur Messdatenauswertung\n",
                "Gegensteckersatz zum externen Anschluss aller Signale\n",
                "Sonderausführung für höhere Eingangsdrücke\n",
                "Barcode-Reader zur Auswahl von Produktnamen oder Benutzern"
            ]
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/e/8/csm_gasanalysator_mapy_d_e314e1e9b3.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mapy_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/0/csm_MAP_Gasanalyse_D_6af455217b.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Gasanalyse_D.pdf",
            title: "Broschüre WITT Gasanalysatoren",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/1/csm_MAP_D_f6b462f88e.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_D.pdf",
            title: "Broschüre WITT Produkte für MAP",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/7/csm_MAP_Obst_Gemuese_D_def4e74d64.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Obst_Gemuese_D.pdf",
            title: "Broschüre MAP Obst & Gemüse",
            content: ""
        }
    ]
};

function Mapy4() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Mapy4;