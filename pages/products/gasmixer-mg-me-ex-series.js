import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MG ME Ex Serie",
    description: "Gasmischer für 2 oder 3 brennbare Gase für hohe Verbräuche und stark schwankende Mischgas-Entnahmemengen",
    keywords: "",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/4/8/csm_witt_gas_mixer_mg_ex_eb38660f7c.png",
    og_url: "https://mmw.industries/products/gasmixer-mg-me-ex-series",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer MG ME Ex Serie",
    productTitle: "Gasmischer MG ME Ex Serie",
    overviewHeader: "Gasmischer für 2 oder 3 brennbare Gase für hohe Verbräuche und stark schwankende Mischgas-Entnahmemengen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "auch diskontinuierliche Gasentnahme möglich\n",
                "Leistungsbereiche von 0 bis ca. 284 Nm³/h.\n",
                "stufenlose Gemischeinstellung\n",
                "unabhäging von Druckschwankungen\n",
                "schnell taktende Entnahme möglich\n",
                "Gerät arbeitet nur mit ausreichendem Puffervolumen"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/4/8/csm_witt_gas_mixer_mg_ex_eb38660f7c.png",
        "https://www.wittgas.com/fileadmin/_processed_/7/e/csm_witt_gas_mixer_mg50-3me_ex_f6b42dc68c.png"
    ],
    datasheetLink: "",
    datasheetScrollToDownloads: true,
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 oder 3 definierte Gase und eine Vielzahl von technischen Anwendungen, insbesondere für hohe Verbräuche und stark schwankende Mischgas-Entnahmemengen.",
    informationContent: [
        "Leistungsbereiche von 0 bis ca. 284 Nm3/h.Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem Datenblatt.",
        "Achtung: Gerät arbeitet nur mit ausreichendem Puffervolumen (je nach Mischgasleistung bis 500 Liter).",
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Proportional-Mischventil (-2ME) oder drei Einzelmischventile (-3ME), jeweils mit Drehknöpfen und %-Skalen\n" +
                "Mischgasentnahme möglich von Null bis zur Maximalleistung"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n" +
                "schnell taktende Entnahmen möglich\n" +
                "abschließbare Sichtscheibe zum Schutz der Geräteeinstellungen"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "für brennbare Gase als Ex-Version mit separatem Steuergehäuse\n",
                "Alarmmodul NXT+: integrierte Eingangsdruck-überwachung mit digitalem Display für Druckanzeige (bei analogen Drucktransmittern) und optischen Alarm, einstellbare Alarmgrenzen, Quittierungspflicht, Sicherung der Alarme mit Zeitangabe, Schnittstellen z.B. zur Steuerung externer Alarme etc.\n",
                "integrierte Analyse zur Überwachung und Dokumentation des Gasgemisches"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage.Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/0/2/csm_gasmischer_mg50_100_2_3me_ex_d_f7a0eef487.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mg50_100_2_3me_ex_d.pdf",
            title: "Datenblatt MG 50/100 Me Ex",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/e/a/csm_gasmischer_mg200_2_3me_d_06dfbf5ea4.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mg200_2_3me_d.pdf",
            title: "Datenblatt MG 200 Me Ex",
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

function MgMeExSeries() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MgMeExSeries;