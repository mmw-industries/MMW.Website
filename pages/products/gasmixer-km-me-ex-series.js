import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer KM-ME Ex Serie",
    description: "Gasmischer für 2 oder 3 brennbare Gase für Bereiche mit schwankenden Entnahmemengen",
    keywords: "",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/a/b/csm_witt_gas_mixer_km100-2me_ex_1c9473ee8f.png",
    og_url: "https://mmw.industries/products/gasmixer-km-me-ex-series",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer KM-ME Ex Serie",
    productTitle: "Gasmischer KM-ME Ex Serie",
    overviewHeader: "Gasmischer für 2 oder 3 brennbare Gase für Bereiche mit schwankenden Entnahmemengen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "stufenlose Gemischeinstellung\n",
                "Mischgasentnahme von Null bis zur Maximalleistung möglich\n",
                "unabhängig von Druckschwankungen\n",
                "schnell taktende Entnahme möglich\n",
                "Gerät arbeitet nur mit ausreichendem Puffervolumen"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/a/b/csm_witt_gas_mixer_km100-2me_ex_1c9473ee8f.png",
        "https://www.wittgas.com/fileadmin/_processed_/e/c/csm_witt_gas_mixer_km100-3me_ex_f0fe2785b8.png",
        "https://www.wittgas.com/fileadmin/_processed_/b/6/csm_witt_gas_mixer_km-me_ex_f3f95a3cbc.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_100_2_3me_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 oder 3 definierte Gase und eine Vielzahl von technischen Anwendungen, insbesondere für Anwendungen mit stark schwankenden Mischgas-Entnahmemengen.",
    informationContent: [
        "Leistungsbereiche von 0 bis ca. 544 Nl/min. Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem Datenblatt.",
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Proportional-Mischventil (-2ME) oder drei Einzelmischventile(-3ME), jeweils mit Drehknöpfen und %-Skalen\n",
                "Mischgasentnahme möglich von Null bis zur Maximalleistung\n"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n",
                "schnell taktende Entnahmen möglich\n",
                "abschließbare Sichtscheibe zum Schutz der Geräteeinstellungen\n",
                "spritzwassergeschütztes, unempfindliches Edelstahlgehäuse"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Alarmmodul AM3: integrierte Eingangsdrucküberwachung mit digitalem Display für Druckanzeige (bei analogen Drucktransmittern) und optischen Alarm, einstellbare Alarmgrenzen, Quittierungspflicht, Sicherung der Alarme mit Zeitangabe, Schnittstellen z.B. zur Steuerung externer Alarme etc.\n",
                "integrierte Analyse zur Überwachung und Dokumentation des Gasgemisches\n",
                "Aufbau des Mischsystems auf den Pufferbehälter für vereinfachte Vor-Ort-Montage"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/7/7/csm_gasmischer_km20_100_2_3me_d_226c236b9d.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_100_2_3me_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmischer",
            content: ""
        }
    ]
};

function KmMeExSeries() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default KmMeExSeries;