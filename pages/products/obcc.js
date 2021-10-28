import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "OXYBABY® Control Center",
    description: "Software zur Dokumentation von Messergebnissen für OXYBABY® 6.0 und PA",
    keywords: "OXYBABY®, Software, Dokumentation",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/5/4/csm_Mensch_vor_PC_mit_OBCC_2_EN_124426dff4.jpg",
    og_url: "https://mmw.industries/products/obcc",
};

const data = {
    breadCrumb: "Startseite / Produkte / OBCC",
    productTitle: "OXYBABY® Control Center",
    overviewHeader: "Software zur Dokumentation von Messergebnissen für OXYBABY® 6.0 und PA",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Grafische Analyse der Messdaten\n" ,
                "Moderne, übersichtliche Oberfläche mit intuitiver Bedienung\n" ,
                "Komfortables Stammdatenmanagement mit Im- und Exportfunktion\n" ,
                "Vollständige und sichere Dokumentation der Qualitätssicherung, auch durch PDF-Berichte\n" ,
                "Ein leistungsstarkes Werkzeug, das einfach einzurichten und leicht zu bedienen ist"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/5/4/csm_Mensch_vor_PC_mit_OBCC_2_EN_124426dff4.jpg"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/software_obcc_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "OBCC wurde speziell für Benutzer von WITT-Gasanalysegeräten (OXYBABY® 6.0, OXYBABY® P 6.0, OXYBABY® Med und PA 7.0) entwickelt und ermöglicht Ihnen eine einfache und effiziente Verwaltung Ihrer Analyse- und Stammdaten.",
    informationContent: [
        "Eine neue, übersichtliche grafische Benutzeroberfläche,  umfassende Datenanalyse-Tools sowie schnelle Reportoptionen geben Ihnen mehr Kontrolle über Ihre Daten. Die OBCC-Software vereinfacht die komplexe Aufgabe der Datenanalyse und des Stammdatenmanagements für Ihr Unternehmen.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "moderne, übersichtliche Oberfläche\n" +
                "intuitive Bedienung\n" +
                "einfaches Anlegen und Verwalten der Stammdaten (Produkte, Benutzer, Verpackungslinien)\n" ,
                "Messdatenaufzeichnung und Abspeicherung zur Qualitätssicherung mit Datum und Uhrzeit\n" ,
                "schneller Überblick durch grafische Darstellung der Messwerte\n" ,
                "Erkenntnisgewinn durch Datenanalyse-Tool mit Filtermöglichkeiten\n" ,
                "vollständige digitale Dokumentation durch einfache CSV-Exportmöglichkeit\n" ,
                "Nachweissicherheit durch 1-Click-Erstellen von PDF-Berichten (zusätzlich zum CSV-Export)\n" ,
                "Zeitersparnis durch komfortables Datenmanagement und leichte Übertragung der Stammdaten auf neue Geräte\n" ,
                "verfügbare Menüsprachen: Englisch, Deutsch, Französisch, Italienisch, Spanisch, Portugiesisch, Polnisch, Russisch, Finnisch, Schwedisch, Türkisch, Rumänisch, Ungarisch"
            ]
        },
        {
            type: 'span',
            content: ""
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/0/f/csm_software_obcc_d_c2bb824393.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/software_obcc_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/0/csm_MAP_Gasanalyse_D_6af455217b.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Gasanalyse_D.pdf",
            title: "Broschüre WITT Gasanalysatoren",
            content: ""
        }
    ]
};

function Obcc() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Obcc;