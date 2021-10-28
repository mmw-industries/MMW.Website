import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MM-FLEX",
    description: "Sehr kompakter Gasmischer für 2 Gase für eine Vielzahl technischer Anwendungen",
    keywords: "kompakter Gasmischer, 2 Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/8/b/csm_witt_gas_mixer_mm-flex_1_original3_f8e190d6b0.png",
    og_url: "https://mmw.industries/products/gasmixer-mm-flex",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer MM-FLEX",
    productTitle: "Gasmischer MM-FLEX",
    overviewHeader: "Sehr kompakter Gasmischer für 2 Gase für eine Vielzahl technischer Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "auch diskontinuierliche Gasentnahme möglich\n",
                "Leistungsbereiche bis ca. 216 Nl/min.\n",
                "kostengünstig\n",
                "einfach zu installieren\n",
                "Wandmontage möglich\n",
                "Mess-/ Ausgangsdruck einstellbar\n",
                "unabhängig von Entnahmemengen- und Druckschwankungen in der Gasversorgung"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/8/b/csm_witt_gas_mixer_mm-flex_1_original3_f8e190d6b0.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mm_flex_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 definierte Gase und eine Vielzahl von technischen Anwendungen, zum Beispiel in der Schweißtechnik.",
    informationContent: [
        "Leistungsbereiche bis ca. 216 Nl/min. Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte den technischen Daten auf der Rückseite.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "kostengünstig\n",
                "sehr kompaktes Design\n",
                "einfach zu installieren\n",
                "Wandmontage möglich\n",
                "Mess-/ Ausgangsdruck einstellbar"
            ]
        },
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Proportional-Mischventil mit Drehknopf und %-Skala\n",
                "stufenlose Mengeneinstellung mit skaliertem Drehknopf"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n",
                "unabhängig von Entnahmemengenschwankungen(im zulässigen Bereich)"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Schnellverschraubung WITTFIX fürKupferrohr AD 8 mm\n",
                "Flammensperre im Ausgang (für brennbare Gase)\n",
                "Magnetventil zum Absperren im Ausgang,230 V AC oder 24 V DC, auch in Ex-Ausführung"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/7/5/csm_gasmischer_mm_flex_d_1dea785076.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mm_flex_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
    ]
};

function _PageDetailTemplateFile() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default _PageDetailTemplateFile;