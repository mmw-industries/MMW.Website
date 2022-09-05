import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Eingangsdrucküberwachung mit Alarmmodul AM3",
    description: "Zur permanenten Eingangsdrucküberwachung für optimale Qualität und Wirtschaftlichkeit in der Produktion",
    keywords: "Eingangsdrucküberwachung",
    og_image: "https://www.mmw.industries/images/products/csm_witt_inlet_pressure_control_68c5597b8a.png.webp",
    og_url: "https://mmw.industries/products/am3",
};

const data = {
    breadCrumb: "Startseite / Produkte / Alarmmodul AM3",
    productTitle: "Eingangsdrucküberwachung mit Alarmmodul AM3",
    overviewHeader: "Zur permanenten Eingangsdrucküberwachung für optimale Qualität und Wirtschaftlichkeit in der Produktion",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "gleichzeitige Überwachung von bis zu 5 Gasdrücken\n",
                "leichte Bedienung durch Touch-Display\n",
                "übersichtliche, intuitive Menüführung\n",
                "permanente Anzeige der gemessenen Drücke\n",
                "Fehlermeldungen oder Überschreitungen der Grenzwerte erzeugen einen Alarm und schalten einen potentialfreien Kontakt\n",
                "entweder integriert, als Stand-Alone-Unit im separaten Gehäuse oder als Ex-Version im separaten Steuergehäuse"
            ]
        },
    ],
    productImages: [
        "csm_witt_inlet_pressure_control_68c5597b8a.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/eingangsdruckueberwachung_am3_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Separate Eingangsdrucküberwachung, auch integriert lieferbar, für die Kontrolle von Gaseingangdrücken bei einer Vielzahl von technischen Anwendungen.\n" +
        "Zur permanenten Eingangsdrucküberwachung für optimale Qualität und Wirtschaftlichkeit in der Produktion.",
    informationContent: [
        "Eine der fortschrittlichsten Lösungen zur Überwachung der Gaseingangsdrücke an Gasmischanlagen. Das System kontrolliert die Gasdrücke an den Eingängen des Gasmischers und im Mischgasbehälter, um eine konstante Prozessqualität zu gewährleisten.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "gleichzeitige Überwachung von bis zu 5 Gasdrücken\n",
                "durch Annäherung automatisch aktivier- und gut ablesbares TFT Display\n",
                "einfache Einstellung der Geräteparameter (z.B. Alarmgrenzen) über kapazitive Tasten\n",
                "grafische Menüführung übersichtlich und intuitiv angelegt\n",
                "verschiedene Benutzerebenen\n",
                "permanente Anzeige der gemessenen Drücke\n",
                "erhöhte Prozesssicherheit\n",
                "Fehlermeldungen oder Überschreitungen der Grenzwerte erzeugen einen Alarm und schalten einen potentialfreien Kontakt (z.B. zum automatischen Stopp Ihres Prozesses zur Vermeidung von Qualitätsproblemen)\n",
                "USB Typ B Buchse für Datentransfer\n",
                "permanente Kontrolle der frei einstellbaren Grenzwerte\n",
                "verschiedene internationale Einheiten zur Auswahl (Bar, psi, kPa und im Bereich bis 10 Bar auch mBar möglich)"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "für brennbare Gase als Ex-Version im separatem Steuergehäuse\n",
                "als Stand-Alone-Unit im separatem Gehäuse\n",
                "Datenkabel\n",
                "Software GASCONTROL CENTER zur Datenauswertung (siehe separates Datenblatt)"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage.\n" ,
        "Bitte geben Sie bei Anfragen die gewünschten Gasarten an!"
    ],
    downloads: [
        {
            image: "csm_witt_inlet_pressure_control_68c5597b8a.png.webp",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/eingangsdruckueberwachung_am3_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmischer",
            content: ""
        }
    ]
};

function AM3() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default AM3;