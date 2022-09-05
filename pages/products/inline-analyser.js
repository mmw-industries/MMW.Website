import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Inline Gasanalysator",
    description: "Einschubmodul zur permanenten Kontrolle des Gasgemisches für z.B. CO2, O2, H2, He",
    keywords: "Einschubmodul, permanent, Kontrolle, CO2, O2, H2, He, Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_analyser_mapy_unit_b9dc384321.png.webp",
    og_url: "https://mmw.industries/products/inline-analyser",
};

const data = {
    breadCrumb: "Startseite / Produkte / Inline Gasanalysator",
    productTitle: "Inline Gasanalysator",
    overviewHeader: "Einschubmodul zur permanenten Kontrolle des Gasgemisches für z.B. CO2, O2, H2, He",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "für eine Vielzahl von Anwendungen\n" ,
                "Ethernet-Schnittstelle\n" ,
                "permanente Kontrolle der Grenzwerte\n" ,
                "erhöhte Prozesssicherheit\n" ,
                "diverse Optionen und Sonderausführungen"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_analyser_mapy_unit_b9dc384321.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Integrierbare Analyse, auch separat lieferbar, für die Kontrolle von Gaskonzentrationen bei einer Vielzahl von technischen Anwendungen.",
    informationContent: [
        "Zur permanenten Gasgemischüberwachung (inline). Die Analyse für optimale Qualität und Wirtschaftlichkeit in der Produktion.\n" +
        "Durch die eigens entwickelte GASCONTROL CENTER-Software dokumentieren Sie Ihrem Kunden die Messergebnisse und garantieren damit höchste Qualität.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "intuitive Bedienung über farbige Touchscreen Steuerung\n" ,
                "verschiedene Benutzerebenen\n" ,
                "erhöhte Prozesssicherheit\n" ,
                "permanente Kontrolle der Grenzwerte\n" ,
                "Ethernet-Schnittstelle zur Dokumentation (QM) auf der Steuerung vorhanden geringer Kalibrieraufwand (Admin Modus)\n" ,
                "mehrsprachige Ausführung: Deutsch, Englisch, Spanisch, Italienisch, Polnisch, Französisch (weitere Sprachen auf Anfrage)"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "überschreiten der Grenzwerte erzeugt einen potentialfreien Kontakt (Sammelalarm)\n" ,
                "ausführen der Ethernet-Schnittstelle auf die Rückseite des Mischers\n" ,
                "ausführen der USB-Schnittstelle auf die Rückseite/Front des Mischers (abhängig von der Größe des Gehäuses)\n" ,
                "Fernübertragung der Einstellungen und Messwerte\n" ,
                "WITT Web Visio - remote control der Steuerung\n" ,
                "vollautomatische Kalibrierung\n" ,
                "integrierte Messdatenaufzeichnung\n" ,
                "integrierter digitaler Schreiber\n" ,
                "Mailservice (Übertragung der aufgelaufenen Fehler)"
            ]
        },
        {
            type: 'span',
            content: "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage.\n" +
                "Bitte geben Sie bei Anfragen die gewünschten Gasarten an!"
        }
    ],
    downloads: [
        {
            image: "csm_gasanalysator_d_b82f4ff556.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function InlineAnalyser() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default InlineAnalyser;