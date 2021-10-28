import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Verpackungsdichtheitsprüfer LEAK-MASTER® PRO 2",
    description: "Dichtheitsprüfung für Verpackungen auf CO2-Basis",
    keywords: "Dichtheitsprüfung, CO2",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/3/e/csm_witt_leak_detector_leak_master_pro2_duo_463aecd1c2.png",
    og_url: "https://mmw.industries/products/leak-master-pro-2",
};

const data = {
    breadCrumb: "Startseite / Produkte / Verpackungsdichtheitsprüfer LEAK-MASTER® PRO 2",
    productTitle: "Verpackungsdichtheitsprüfer LEAK-MASTER® PRO 2",
    overviewHeader: "Dichtheitsprüfung für Verpackungen auf CO2-Basis",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "zerstörungsfreie Stichprobenprüfung zu einem starken Preis-Leistungs-Verhältnis\n" ,
                "findet kleinste Leckagen ab 10 μm (abhängig von Verpackung und Prüfbedingungen) durch hochsensiblen, ultraschnellen CO2-Sensor\n" ,
                "visuelle Statusanzeige durch LED-Beleuchtung\n" ,
                "für Einzelverpackungen oder kleine Gebinde\n" ,
                "Optionen: elektrische Vakuumpumpe, Barcode-Reader"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/3/e/csm_witt_leak_detector_leak_master_pro2_duo_463aecd1c2.png",
        "https://www.wittgas.com/fileadmin/_processed_/8/7/csm_witt_leak_detector_leak_master_pro2_detail_c7697382a2.png",
        "https://www.wittgas.com/fileadmin/_processed_/1/e/csm_witt_leak_detector_leak_master_pro2_colours_DE_329b51ddf2.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_pro2_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "<iframe width=\"659\" height=\"371\" src=\"https://www.youtube.com/embed/lxIv8qyPKSU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    informationHeader: "System zur Dichtheitsprüfung von Verpackungen auf CO2-Basis. Der LEAK-MASTER® PRO 2 ermöglicht zerstörungsfreies Aufspüren selbst kleinster Leckagen ohne den kostspieligen Einsatz von Helium als Spurengas. Evakuierung der Kammer mit Hilfe einer druckluftbetriebenen Venturidüse (optional auch mit elektrischer Vakuumpumpe). Statusanzeige durch LED-Beleuchtung der Kammer.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "visuelle Statusanzeige durch LED-Beleuchtung\n" ,
                "kurze Prüfdauer durch minimale Ansprechzeit\n" ,
                "schneller Produktwechsel\n" ,
                "für flexible und stabile Verpackungen\n" ,
                "besonders langlebig und wartungsarm\n" ,
                "kalibrieren nicht notwendig\n" ,
                "standardisierter, anwenderunabhängiger Prüfprozess\n" ,
                "benutzerfreundliche Daten- und Prozessparametereingabe über integrierte Tastatur oder per PC (z.B. MS-Excel®)\n" ,
                "einfachste, intuitive Bedienung; kein geschultes Fachpersonal nötig\n",
                "bequeme Datenverwaltung und -auswertung für kundenorientierte Qualitätsdokumentation\n" ,
                "verschiedene Kammergrößen (siehe Rückseite)\n" ,
                "einfache Installation und Inbetriebnahme\n" ,
                "leichte Pflege durch spritzwassergeschütztes Edelstahl- und Acrylgehäuse\n" ,
                "Datenübertragung der Messergebnisse via Ethernet"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "mit Barcode Reader für die einfache und schnelle Benutzer- und Produktauswahl als spritzwassergeschützte Ausführung\n" ,
                "mit elektrischer Vakuumpumpe\n" ,
                "Software GASCONTROL CENTER zur Messdaten-auswertung (siehe separates Datenblatt)"
            ]
        },
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/a/9/csm_dichtheitspruefung_leak_master_pro2_d_6c2f0cbde8.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_pro2_d.pdf",
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

function LeakMasterPro2() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default LeakMasterPro2;