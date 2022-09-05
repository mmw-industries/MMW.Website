import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Raumluftüberwachung RLA multichannel",
    description: "Raumluftüberwachung zur Detektion von brennbaren und toxischen Gasen oder O2, für bis zu 16 Transmitter",
    keywords: "Raumluftüberwachung, toxische Gase, O2, 16 Transmitter",
    og_image: "https://www.mmw.industries/images/products/csm_witt_ambient_air_monitor_rla_multichannel_4a5f40bcd2.png.webp",
    og_url: "https://mmw.industries/products/rla-multi",
};

const data = {
    breadCrumb: "Startseite / Produkte / Raumluftüberwachung RLA multichannel",
    productTitle: "Raumluftüberwachung RLA multichannel",
    overviewHeader: "Raumluftüberwachung zur Detektion von brennbaren und toxischen Gasen oder O2, für bis zu 16 Transmitter",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "bis zu 16 Transmitter (Messwertgeber) für unterschiedliche Gasarten anschließbar\n",
                "mit Digitalanzeige und LEDs\n",
                "8 interne Relais, davon 6 frei programmierbar\n",
                "Alarmleuchte und Hupe"
            ]
        },
    ],
    productImages: [
        "csm_witt_ambient_air_monitor_rla_multichannel_4a5f40bcd2.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gas_monitor_rla_compact_multi_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Raumluftüberwachungen zur Detektion von brennbaren und toxische Gasen oder Sauerstoff (O2)",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "bis zu 16 Transmitter für unterschiedliche Gasarten\n",
                "leichtes Programmieren von Messstellenbezeichnungen, Messwertgebertyp, Gasart und Messbereich sowie drei individuelle oder vorgegebene Alarmgrenzwerte\n",
                "8 interne Relais davon 6 frei programmierbar",
                "großes, gut ablesbares, beleuchtetes Grafikdisplay mit Ampelfunktion sorgt für ständige visuelle Kontrollmöglichkeit der Gaskonzentration\n",
                "mit eingebautem Alarmgeber (Alarmleuchte und -hupe)\n",
                "einfache Wandmontage\n",
                "max. 20 Kabeleinführungen\n",
                "Klemmen zur Belegung der Alarmkontakte frontseitig leicht zugänglich\n",
                "Transmitter (Messwertgeber)"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "2GB microSD-Speicherkarte zur Speicherung von Messwerten, Mittelwerten, Alarmereignissen und\n",
                "Störungen in individuell konfigurierbaren Intervallen\n",
                "Durchströmadapter für Überprüfung und Kalibrierung"
            ]
        },
        {
            type: 'list',
            header: "Systemkomponenten:",
            items: [
                "Gasmesscomputer\n",
                "Transmitter (Messwertgeber)\n",
                "Transmitterkabel für Verbindung von Transmitter und Gasmesscomputer"
            ]
        },
    ],
    downloads: [
        {
            image: "csm_witt_ambient_air_monitor_rla_multichannel_4a5f40bcd2.png.webp",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gas_monitor_rla_compact_multi_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        }
    ]
};

function RlaMulti() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default RlaMulti;