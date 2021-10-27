import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Inline Gasanalysator MAPY LE",
    description: "Gasanalysator für O2, CO2 oder O2/CO2, z.B. für Schlauchbeutelmaschinen",
    keywords: "Gasanalysator, O2, CO2, O2/CO2, Schlauchbeutelmaschinen, Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/7/0/csm_witt_gas_analyser_mapy_le_5649036cae.png",
    og_url: "https://mmw.industries/products/mapy-le",
};

const data = {
    breadCrumb: "Startseite / Produkte / MAPY LE",
    productTitle: "Gasanalysator MAPY LE",
    overviewHeader: "Premium-Gasanalysator für O2, CO2 oder O2/CO2, verschiedene Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Inline-Analyse und Stichproben möglich\n",
                "ideal zur Kontrolle von MAP-Schlauchbeutelverpackungen\n",
                "schnelle, exakte Analysetechnik\n",
                "Überschreitung der Grenzwerte erzeugt Alarm\n",
                "Ethernet-Schnittstelle zur Einbindung in Netzwerke\n",
                "leichte Bedienung über Touchscreen\n",
                "Minimierung des Gasverbrauchs durch Kombination mit dem Gasmischer KM-FLOW oder dem KD-Gasdosierer"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/7/0/csm_witt_gas_analyser_mapy_le_5649036cae.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mapy_le_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Analysesysteme für die Kontrolle von Gaskonzentrationen bei einer Vielzahl von technischen Anwendungen. Zur kontinuierlichen Gasgemischüberwachung (inline) sowie für die Stichprobenanalyse mittels Ansaugnadel (optional), z.B. aus Lebensmittelverpackungen.",
    informationContent: [
        "Die auf das Wesentliche reduzierte Analyse für einen schlanken Workflow.\n" +
        "Verfügbar als Einzel- oder Doppelanalysator für die Gase O2 und CO2.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "minimaler Messgasbedarf für Analyse kleinster Volumina (z. B. Lebensmittel-Verpackungen)\n" ,
                "schnelles Messergebnis bei Stichprobenanalysen (optional)\n" ,
                "leichte Bedienbarkeit über Touchscreen\n" ,
                "langzeitstabile Messergebnisse und hohe Genauigkeit durch Druckkompensation\n" ,
                "einfache Sensor-Kalibrierung\n" ,
                "permanente Kontrolle der einstellbaren Grenzwerte\n" ,
                "Fehlermeldungen oder Überschreitungen der Grenzwerte erzeugen einen Alarm und schalten einen potentialfreien Kontakt. Dieser stoppt z.B. Ihren Prozess zur Vermeidung von Qualitätsproblemen\n" ,
                "leichte Pflege und Hygiene durch spritzwassergeschütztes Edelstahlgehäuse\n" ,
                "USB Anschluss zur Datenübertragung per USB-Stick\n" ,
                "Ethernet Anschluss zur Einbindung in Netzwerke\n" ,
                "Interner akustischer Alarm\n" ,
                "Datenlogging"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "vollautomatische Kalibrierung\n" ,
                "Ansaugnadel für Stichprobenanalysen\n" ,
                "Software GASCONTROL CENTER zur Messdatenauswertung\n" ,
                "separater Tischdrucker für die Dokumentation der Messergebnisse\n" ,
                "Linienschreiber zur Aufzeichnung des Messwerteverlaufs\n" ,
                "Sonderausführung für höhere Eingangsdrücke\n" ,
                "diverse Ethernetkabel\n" ,
                "Heizung und Thermostat für chemische Messzellen\n" ,
                "Kontrolle über Webbrowser\n" ,
                "Benachrichtigung per E-Mail bei Alarm"
            ]
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/9/a/csm_gasanalysator_mapy_le_d_a453948984.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mapy_le_d.pdf",
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

function MapyLe() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MapyLe;