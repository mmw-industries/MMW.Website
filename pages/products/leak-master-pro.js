import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Verpackungsdichtheitsprüfer LEAK-MASTER® PRO",
    description: "Dichtheitsprüfung für große Verpackungen oder Kartons auf CO2-Basis",
    keywords: "Dichtheitsprüfung, CO2, große Verpackungen, Kartions",
    og_image: "",
    og_url: "https://mmw.industries/products/leak-master-pro",
};

const data = {
    breadCrumb: "Startseite / Produkte / Verpackungsdichtheitsprüfer LEAK-MASTER® PRO",
    productTitle: "Verpackungsdichtheitsprüfer LEAK-MASTER® PRO",
    overviewHeader: "Dichtheitsprüfung für große Verpackungen oder Kartons auf CO2-Basis",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "zerstörungsfreie Stichprobenprüfung\n" ,
                "findet kleinste Leckagen\n" ,
                "hochsensibler, ultraschneller CO2-Sensor\n" ,
                "zwei Kammergrößen: 140 x 680 x 500 and 230 x 680 x 500 mm\n" ,
                "optional: Barcode-Reader, WLAN"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/0/f/csm_witt_leak_detector_leak_master_pro_58ceec0902.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "System zur Dichtheitsprüfung von Verpackungen auf CO2-Basis. Der LEAK-MASTER® PRO ermöglicht zerstörungsfreies Aufspüren selbst kleinster Leckagen ohne den kostspieligen Einsatz von Helium als Spurengas.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "minimale Ansprechzeit\n" ,
                "schneller Produktwechsel\n" ,
                "für flexible und stabile Verpackungen\n" ,
                "kalibrieren nicht notwendig\n" ,
                "benutzerfreundliche Daten- und Prozessparametereingabe über integrierte Tastatur oder per PC (z.B. MS-Excel®)\n" ,
                "einfachste, intuitive Bedienung; kein geschultes Fachpersonal nötig\n" ,
                "bequeme Datenverwaltung und -auswertung für kundenorientierte Qualitätsdokumentation\n" ,
                "verschiedene Kammergrößen\n" ,
                "einfache Installation und Inbetriebnahme\n" ,
                "leichte Pflege durch spritzwassergeschütztes Edelstahlgehäuse\n" ,
                "Datenübertragung der Messergebnisse via Ethernet\n" ,
                "potentialfreier Kontakt zum Anschluss einer Hupe oder einer Alarmleuchte"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "mit Barcode-Reader für die einfache und schnelle Benutzer- und Produktauswahl als spritzwassergeschützte Ausführung \n" ,
                "kabellose Datenübertragung über WLAN (WIFI)"
            ]
        },
        "",
        {
            type: 'span',
            content: "!! Achtung !!\nDie Geräte eignen sich nicht für die Prüfung von Verpackungen, die mit hohem Sauerstoffanteil >20,9% (Frischfleisch) verpackt wurden."
        }
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/6/6/csm_dichtheitspruefung_leak_master_d_dc3c3c4f3d.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/2/6/csm_MAP_Dichtheitspruefung_33cfa6b536.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Dichtheitspruefung.pdf",
            title: "Broschüre Dichtheitsprüfung",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/4/1/csm_MAP_D_f6b462f88e.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_D.pdf",
            title: "Broschüre WITT Lösungen für MAP Verpackungen",
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

function LeakMasterPro() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default LeakMasterPro;