import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Inline Gasanalysator MAPY VAC",
    description: "ür Tiefzieh- und Schalen-Verpackungsmaschinen, O2 oder O2/CO2",
    keywords: "Gasanalysator, O2, CO2, O2/CO2, Tiefzieh- und Schalen-Verpackungsmaschinen, Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_analyser_mapy_vac_07b735b95c.jpg.webp",
    og_url: "https://mmw.industries/products/mapy-vac",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasanalysator MAPY VAC",
    productTitle: "Inline Gasanalysator MAPY VAC",
    overviewHeader: "Premium-Gasanalysator für O2, CO2 oder O2/CO2, verschiedene Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "schnelle, exakte Gasanalyse vor der Versiegelung der Verpackung\n" ,
                "misst jeden Maschinentakt\n" ,
                "Überschreitung der Grenzwerte erzeugt Alarm\n" ,
                "Ethernet-Schnittstelle zur Einbindung in Netzwerke\n" ,
                "mit Touchscreen oder als Black Box-Ausführung\n" ,
                "für optimale Qualitätssicherung\n" ,
                "ideal in Kombination mit einem WITT-Gasmischer"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_analyser_mapy_vac_07b735b95c.jpg.webp",
        "csm_witt_gas_analyser_mapy_vac_BB_856f6a72d6.jpg.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mapy_vac_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Inline-Gasanalysator für die Kontrolle von Schutzatmosphären an Tiefzieh- und Schalenverpackungsmaschinen in der Lebensmitteltechnik.",
    informationContent: [
        "Zur kontinuierlichen Gasgemischüberwachung. Der MAPY VAC misst die O2 bzw. O2/CO2-Konzentration zerstörungsfrei, bevor die Packung versiegelt wird.\n" +
        "Die flexible Analyse für optimale Qualität und Wirtschaftlichkeit in der Produktion.\n" +
        "Verfügbar als Einzel- oder Doppelanalysator für die Gase O2 und O2/CO2.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "erhöhte Prozesssicherheit\n" ,
                "misst jeden Maschinentakt\n" ,
                "geringe Lohn- und Abfallkosten im Vergleich zur Stichprobenanalyse\n" ,
                "leichte Bedienbarkeit über Touch-Screen\n" ,
                "langzeitstabile Messergebnisse und hohe Genauigkeit\n" ,
                "einfache Sensor-Kalibrierung\n" ,
                "permanente Kontrolle der einstellbaren Grenzwerte\n" ,
                "Fehlermeldungen oder Überschreitungen der Grenzwerte erzeugen einen Alarm und schalten einen potentialfreien Kontakt. Dieser stoppt z.B. Ihren Prozess zur Vermeidung von Qualitätsproblemen\n" ,
                "leichte Pflege und Hygiene durch spritzwassergeschütztes Edelstahlgehäuse\n" ,
                "USB Anschluss zur Datenübertragung per USB-Stick\n" ,
                "Ethernet Anschluss zur Einbindung in Netzwerke\n" ,
                "interner akustischer Alarm\n" ,
                "Datenlogging\n" ,
                "Produktverwaltung von bis zu 250 Artikeln"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "vollautomatische Kalibrierung\n" ,
                "Software GASCONTROL CENTER zur Messdatenauswertung (siehe separates Datenblatt)\n" ,
                "Messung der Gaszusammensetzung und des Drucks im Pufferbehälter\n" ,
                "separater Tischdrucker für die Dokumentation der Messergebnisse\n" ,
                "Linienschreiber zur Aufzeichnung des Messwerteverlaufs\n" ,
                "diverse Ethernetkabel\n" ,
                "Kontrolle über Webbrowser\n" ,
                "Benachrichtigung per E-Mail bei Alarm\n" ,
                "Black-Box-Version (BB) ohne Benutzerschaltfläche speziell für die automatisierte Maschinensteuerung. Ansteuerung ist nur über die Verpackungsmaschine oder einen angeschlossenen PC möglich. Software speziell für die Kommunikation auf CD\n" ,
                "IP-Kit (IP45) für verbesserten Schutz gegen Feuchtigkeit"
            ]
        }
    ],
    downloads: [
        {
            image: "csm_gasanalysator_mapy_vac_d_05cd1b5adf.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_mapy_vac_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Analyse.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Gasanalyse_D.pdf",
            title: "Broschüre WITT Gasanalysatoren",
            content: ""
        },
        {
            image: "Broschuere_Packaging.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_D.pdf",
            title: "Broschüre WITT Lösungen für MAP Verpackungen",
            content: ""
        },
        {
            image: "Broschuere_obst_gemuese.png",
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