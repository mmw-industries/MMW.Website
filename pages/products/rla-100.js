import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Raumluftüberwachung RLA 100",
    description: "Raumluftüberwachung zur Detektion von CO2",
    keywords: "Raumluftüberwachung, CO2",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/2/3/csm_witt_gas_analyser_rla100_97d81cf5a3.png",
    og_url: "https://mmw.industries/products/rla-100",
};

const data = {
    breadCrumb: "Startseite / Produkte / Raumluftüberwachung RLA 100",
    productTitle: "Raumluftüberwachung RLA 100",
    overviewHeader: "Raumluftüberwachung zur Detektion von CO2",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "2 beliebig einstellbare Alarmschwellen\n",
                "mit Digitalanzeige und LEDs\n",
                "einfache Wandmontage\n",
                "optional: Alarmleuchte und Hupe"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/2/3/csm_witt_gas_analyser_rla100_97d81cf5a3.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gas_monitor_rla100_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Raumluftüberwachung RLA 100 zur Detektion von Kohlendioxid (CO2)",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "2 einstellbare Alarmschwellen\n",
                "4-stellige Digitalanzeige sowie 4 LEDs sorgen für ständige visuelle Kontrollmöglichkeit der Gaskonzentration\n",
                "potentialfreier Wechslerkontakt über Kabel an der Unterseite der Front leicht zugänglich\n",
                "Gasmesscomputer mit eingebautem Alarmgeber (Alarmleuchte und -Hupe)\n",
                "einfache Wandmontage"
            ]
        },
        {
            type: 'list',
            header: "Systemkomponenten:",
            items: [
                "Gasmesscomputer\n",
                "Meldeeinheit\n",
                "Kabel für Verbindung von Fernbedienung und Gasmesscomputer"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "andere Gase auf Anfrage"
            ]
        },
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/3/7/csm_gas_monitor_rla100_d_4f14728fea.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gas_monitor_rla100_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function Rla100() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Rla100;