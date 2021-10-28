import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer KM - M Serie",
    description: "Gasmischer für 2 oder 3 Gase, speziell für MAP-Verpackungsmaschinen",
    keywords: "Gasmsicher, MAP, 2 Gase, 3 Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/0/9/csm_witt_gas_mixer_km100_2m_6378be2a63.png",
    og_url: "https://mmw.industries/products/gasmixer-km-m-series"
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer KM - M Serie",
    productTitle: "Gasmischer KM - M Serie",
    overviewHeader: "Gasmischer für 2 oder 3 Gase, speziell für MAP-Verpackungsmaschinen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "kontinuierliche Gasentnahme\n",
                "variable, stufenlose Gemischeinstellung\n",
                "variable, stufenlose Schutzgasmengeneinstellung\n",
                "verschiedene Leistungsbereiche\n",
                "unabhängig von Druckschwankungen und Verpackungsgeschwindigkeiten\n",
                "integrierte Eingangsdrucküberwachung\n",
                "Gasversorgungsüberwachung\n",
                "variable Ausgangsdruckregelung"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/0/9/csm_witt_gas_mixer_km100_2m_6378be2a63.png",
        "https://www.wittgas.com/fileadmin/_processed_/5/3/csm_witt_gas_mixer_km100_3m_201116ca8e.png",
        "https://www.wittgas.com/fileadmin/_processed_/6/4/csm_witt_gas_mixer_km300-600-2me_b59249e277.png",
        "https://www.wittgas.com/fileadmin/_processed_/7/a/csm_witt_gas_mixer_km300-600-3me_5dab0a8752.png"
    ],
    datasheetLink: "",
    datasheetScrollToDownloads: true,
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 oder 3 definierte Gase speziell für Schlauchbeutel-Verpackungsmaschinen oder andere kontinuierliche Verpackungsprozesse in der Lebensmittelindustrie.",
    informationContent: [
        "Leistungsbereiche bis ca. 717 Nl/min. Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem jeweiligen Datenblatt.",
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Proportional-Mischeventil(-2) oder drei Einzelmischventile (-3), jeweils mit Drehknöpfen und %-Skalen\n",
                "stufenlose Schutzgasmengeneinstellung über Dosierventil mit Durchflussmesser"
            ]
        },
        {
            type: 'list',
            header: "Konstante Qualität:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n",
                "unabhängig von Verpackungsgeschwindigkeiten (im zulässigen Bereich)"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
            items: [
                "Alarmmodul NXT+: integrierte Eingangsdrucküberwachung mit digitalem Display für Druckanzeige (bei analogen Drucktransmittern) und optischen Alarm, einstellbare Alarmgrenzen, Quittierungspflicht, Sicherung der Alarme mit Zeitangabe, Schnittstellenz.B. zur Steuerung externer Alarme etc.\n",
                "abschließbare Sichtscheibe zum Schutz der Geräteeinstellungen"
            ]
        },
        {
            type: 'list',
            header: "Hygienefreundlich:",
            items: [
                "spritzwassergeschütztes, unempfindliches Edelstahlgehäuse\n",
                "glatte und leicht zu reinigende Oberfläche für perfekte Hygiene"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/7/2/csm_gasmischer_km100_200_2_3m_d_4035889817.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km100_200_2_3m_d.pdf",
            title: "Datenblatt KM100-200",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/9/3/csm_gasmischer_km300_600_2_3m_d_7f51a1180a.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km300_600_2_3m_d.pdf",
            title: "Datenblatt KM300-600",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
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

function KmM() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default KmM;