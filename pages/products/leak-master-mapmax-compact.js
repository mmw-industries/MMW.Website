import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Verpackungsdichtheitsprüfer LEAK-MASTER® MAPMAX compact",
    description: "Inline-Dichtheitsprüfung für Verpackungen auf CO2-Basis, kompakte Bauart",
    keywords: "",
    og_image: "https://www.mmw.industries/images/products/csm_witt_leak_detector_mapmax_compact_2f18e3bf59.png.webp",
    og_url: "https://mmw.industries/products/leak-master-mapmax-compact",
};

const data = {
    breadCrumb: "Startseite / Produkte / Verpackungsdichtheitsprüfer LEAK-MASTER® MAPMAX compact",
    productTitle: "Verpackungsdichtheitsprüfer LEAK-MASTER® MAPMAX compact",
    overviewHeader: "Inline-Dichtheitsprüfung für Verpackungen auf CO2-Basis, kompakte Bauart",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "100% Prüfung, 100% Sicherheit\n",
                "zerstörungsfreies Aufspüren selbst kleinster Leckagen\n",
                "hochsensibler, ultraschneller CO2-Sensor\n",
                "bis zu 14 Vorzüge pro Minute\n",
                "direkt im Anschluss an den Verpackungsprozess\n",
                "deutlich kürzere Einbaumaße\n",
                "standardisierte Steuerung und Dokumentation"
            ]
        },
    ],
    productImages: [
        "csm_witt_leak_detector_mapmax_compact_2f18e3bf59.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_mapmax_compact_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "<iframe width=\"659\" height=\"371\" src=\"https://www.youtube.com/embed/P9Sn8Z369So\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    informationHeader: "nline-System zur Verpackungsdichtheitsprüfung  auf CO2-Basis. Der LEAK-MASTER® MAPMAX ermöglicht zerstörungsfreies Aufspüren selbst kleinster Leckagen ohne den kostspieligen Einsatz von Helium als Spurengas – unmittelbar im Anschluss an den Verpackungsprozess.",
    informationContent: [
        "Unter Schutzgas verpackte Produkte beinhalten in den meisten Fällen bereits CO2. Der LEAK-MASTER® MAPMAX verwendet dieses CO2 als Spürgas. Hierdurch ist es möglich, die produzierten Packungen direkt nach dem Verpackungsprozess auf Dichtigkeit zu prüfen.",
        "Der LEAK-MASTER® MAPMAX positioniert die Verpackungen oder Umverpackungen in der Messkammer. Ein einstellbares Vakuum wird erzeugt und verursacht eine Druckdifferenz zwischen Prüfling und Messkammer. Kleinste Undichtigkeiten der Verpackung lassen das CO2-haltige Schutzgas entweichen. Hierdurch steigt die CO2-Konzentration innerhalb der Messkammer an. Der sensible CO2-Sensor reagiert auf diesen Anstieg und detektiert so selbst kleinste Leckagen.\n" +
        "\n",
        "Nach jedem Messzyklus (bis zu 14 Takte pro Minute) wird die Messkammer belüftet und der Prüfling an das nachgelagerte System übergeben. Im Falle einer Leak-Messung stehen verschiedene potentialfreie Kontakte zur Kommunikation mit vor- und nachgelagerten Systemen zur Verfügung, über die z.B. Alarme und/oder Pusher angesprochen werden können.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "minimale Ansprechzeit\n" ,
                "hohe Arbeitsgeschwindigkeit (max. 14 Takte/min.)\n" ,
                "für Einzelpackungen oder Umverpackungen\n" ,
                "verschiedene Kammermaße\n" ,
                "für flexible und stabile Verpackungen\n" ,
                "kalibrieren nicht notwendig\n" ,
                "einfachste, intuitive Bedienung; kein geschultes Fachpersonal nötig\n" ,
                "benutzerfreundliche Daten- und Prozessparametereingabe über integrierte SPS mit Touchscreen oder mittels PC\n" ,
                "bequeme Datenverwaltung und -auswertung für kundenorientierte Qualitätsdokumentation\n" ,
                "Datenübertragung der Messergebnisse via Ethernet\n" ,
                "leicht zu pflegendes Edelstahlgehäuse"
            ]
        },
        "",
        {
            type: 'span',
            content: "!!Achtung!!\n Die Geräte eignen sich nicht für die Prüfung von Verpackungen, die mit hohem Sauerstoffanteil >20,9% (Frischfleisch) verpackt wurden."
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage."
    ],
    downloads: [
        {
            image: "csm_dichtheitspruefung_leak_master_mapmax_compact_d_40bb8dd469.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/dichtheitspruefung_leak_master_mapmax_compact_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Leaktest.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Dichtheitspruefung.pdf",
            title: "Broschüre Dichtheitsprüfung",
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

function LeakMasterMapMaxCompact() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default LeakMasterMapMaxCompact;