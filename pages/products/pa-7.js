import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasanalysator PA 7.0",
    description: "Kompakter Gasanalysator für O2, CO2 oder O2/CO2, verschiedene Anwendungen",
    keywords: "Gasanalysator, O2, CO2, O2/CO2,  Restsauerstoff, Restsauerstoffmessung, Restsauerstoffanalyse",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_analyser_pa7_c08809054b.png.webp",
    og_url: "https://mmw.industries/products/pa-7",
};

const data = {
    breadCrumb: "Startseite / Produkte / PA 7.0",
    productTitle: "Gasanalysator PA 7.0",
    overviewHeader: "Kompakter Gasanalysator für O2, CO2 oder O2/CO2, verschiedene Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Stichproben- und Inline-Analyse möglich, auch gleichzeitig\n",
                "schnelle, exakte Analysetechnik\n",
                "einsetzbar zur Kontrolle von MAP-Verpackungen oder in der Schweißtechnik\n",
                "Überschreitung der Grenzwerte erzeugt Alarm\n",
                "vielfältige Ausgangssignale\n",
                "optional: O2-Messung auch im ppm-Bereich"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_analyser_pa7_c08809054b.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_pa_7_0_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Kompakter Analysator für die Kontrolle von Schutzatmosphären in der Lebensmittelverpackungstechnik (MAP) und Schweißtechnik. Zur permanenten Gasgemischüberwachung (inline) sowie für die Stichprobenanalyse mittels Ansaugnadel, z.B. aus Lebensmittelverpackungen.",
    informationContent: [
        "Die flexible Analyse für optimale Qualität und Wirtschaftlichkeit in der Produktion. Überall dort, wo Sie Ihre Messergebnisse schriftlich protokollieren müssen, ist dieses komfortable Messgerät flexibel einsetzbar.\n" +
        "Durch die eigens entwickelte OBCC-Software dokumentieren Sie Ihrem Kunden die Messergebnisse und garantieren damit höchste Qualität.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "großes, gut ablesbares, beleuchtetes Grafikdisplay\n" ,
                "Schnittstellen auf der Front: Mini SD und Mini USB für Updatemöglichkeit und Datenübertragung über MINI USB\n" ,
                "minimaler Messgasbedarf für Analyse kleinster Volumina (z.B. Lebensmittel-Verpackungen)\n" ,
                "schnelles Messergebnis bei Stichprobenanalysen\n" ,
                "integrierter Messwertspeicher für die letzten 500 Messungen\n" ,
                "Zuordnung der Messwerte zu verschiedenen Produktnamen, Usern und Produktlinien\n" ,
                "mehrsprachige Ausführung: Deutsch, Englisch, Französisch, Italienisch, Spanisch, Niederländisch, Schwedisch, Finnisch, Polnisch, Ungarisch, Rumänisch und Türkisch (weitere in Vorbereitung)\n" ,
                "Fehlermeldungen oder Überschreitungen der Grenzwerte erzeugen einen Alarm und schalten einen potentialfreien Kontakt, z.B. zum automatischen Stopp Ihres Prozesses zur Vermeidung von Qualitätsproblemen (nur P- und L-Version)\n" ,
                "spritzwassergeschütztes, unempfindliches Gehäuse\n" ,
                "Schnittstelle zur Messwertübertragung"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "O2-Messung auch im ppm-Bereich\n" +
                "Software OBCC zur Messdatenauswertung inkl. Datenkabel (siehe separates Datenblatt)\n" +
                "separater Tischdrucker für die Dokumentation der Messergebnisse"
            ]
        },
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!"
    ],
    downloads: [
        {
            image: "csm_gasanalysator_pa_7_0_d_a34d9a359f.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasanalysator_pa_7_0_d.pdf",
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
            title: "Broschüre WITT Produkte für MAP",
            content: ""
        },
        {
            image: "Broschuere_obst_gemuese.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/MAP_Obst_Gemuese_D.pdf",
            title: "Broschüre MAP Obst & Gemüse",
            content: ""
        }
    ],
    accessories: [
        {
            image: "csm_Oxybaby_Zubehoer_e167e009e5.png.webp",
            link: "https://www.mmw.industries/products/consumables",
            title: "Verbrauchsmaterialien",
            content: "Ersatzplättchen, Nadeln, Akku etc. für OXYBABY®, PA, MAPY, MFA"
        },
        {
            image: "csm_Mensch_vor_PC_mit_OBCC_2_EN_2a066c8ebd.jpg.webp",
            link: "https://www.mmw.industries/products/obcc",
            title: "Software OBCC",
            content: "Software zur Dokumentation von Messergebnissen für OXYBABY® 6.0 und PA"
        }
    ]
};

function Pa7() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Pa7;