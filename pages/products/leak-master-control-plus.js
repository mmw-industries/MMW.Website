import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Steuereinheit PLUS",
    description: "Zur elektronischen Steuerung des Verpackungsdichtheitsprüfers LEAK-MASTER® EASY",
    keywords: "LEAK-MASTER® EASY, Steuerung",
    og_image: "https://www.mmw.industries/images/products/csm_witt_control_unit_plus_a2b9f67240.png.webp",
    og_url: "https://mmw.industries/products/leak-master-control-plus",
};

const data = {
    breadCrumb: "Startseite / Produkte / PLUS",
    productTitle: "Steuereinheit PLUS",
    overviewHeader: "Zur elektronischen Steuerung des Verpackungsdichtheitsprüfers LEAK-MASTER® EASY",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "macht die Bedienung des LEAK-MASTER® EASY noch leichter\n" ,
                "schnelle, standardisierte Prüfabläufe\n" ,
                "optimale Dokumentation\n" ,
                "einfach nachrüstbar"
            ]
        },
    ],
    productImages: [
        "csm_witt_control_unit_plus_a2b9f67240.png.webp",
        "csm_witt_leak_detector_leak_master_easy_plus_077d961363.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_easy_steuerung_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Tragbare Steuerung für den Verpackungsdichtheitsprüfer LEAK-MASTER® EASY. Ermöglicht in Kombination mit dem LEAK-MASTER® EASY ein zerstörungsfreies Aufspüren selbst kleinster Leckagen ohne den kostspieligen Einsatz von Helium als Spurengas.",
    informationContent: [
        "Die verschiedenen voreingestellten Messprogramme, eine Höhensimulation sowie eine vom Anwender unabhängige, schnelle und kontinuierliche Arbeitsweise zeichnen dieses Gerät aus.",
        "Ihr LEAK-MASTER® EASY lässt sich leicht und unkompliziert ergänzen.\n" +
        "Die flexible Steuerung für optimale Qualität und Wirtschaftlichkeit in der Produktion.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "minimale Ansprechzeit\n" ,
                "schneller Produktwechsel\n" ,
                "kalibrieren nicht notwendig\n" ,
                "leichte Bedienbarkeit über Touchscreen\n" ,
                "permanente Kontrolle der einstellbaren Grenzwerte\n" ,
                "benutzerfreundliche Daten- und Prozessparametereingabe über integrierte Tastatur oder per PC (z.B. MS-Excel®)\n" ,
                "perfekte Dokumentation durch lückenlose Nutzer- und Produktdaten sowie Fehlerprotokolle\n" ,
                "Datenübertragung der Messergebnisse via Ethernet\n" ,
                "Ethernet Anschluss zur Einbindung in Netzwerke\n" ,
                "Messdatenspeicher\n" ,
                "Produktnamenverwaltung zur individuellen Zuordnung von Messergebnissen\n" ,
                "Benutzerverwaltung zur Personalisierung der Messungen\n" ,
                "individuell konfigurierbare Fehlercodes mit Angabe zu Art und Ort der Leckage\n" ,
                "ideal zur Höhensimulationsprüfung\n" ,
                "auch zum späteren Nachrüsten für Ihren bereits vorhandenen LEAK-MASTER® EASY\n" ,
                "leichte Pflege und Hygiene durch spritzwassergeschütztes Edelstahlgehäuse"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "mit Barcode-Reader für die einfache und schnelle Benutzer- und Produktauswahl als spritzwassergeschützte Ausführung"
            ]
        },
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage."
    ],
    downloads: [
        {
            image: "csm_dichtheitspruefung_leak_master_easy_steuerung_d_8cae1df212.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_easy_steuerung_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Leaktest.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Dichtheitspruefung.pdf",
            title: "Broschüre Dichtheitsprüfung",
            content: ""
        }
    ]
};

function LeakMasterControlPlus() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default LeakMasterControlPlus;