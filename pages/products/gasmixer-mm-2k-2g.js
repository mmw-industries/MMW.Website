import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MM-2K/-2G",
    description: "Sehr kompakter Gasmischer für 2 Gase für eine Vielzahl technischer Anwendungen",
    keywords: "kompakter Gasmischer 2 Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/1/b/csm_witt_gas_mixer_mm_2g_a93ca26ffd.png",
    og_url: "https://mmw.industries/products/gasmixer-mm-2k-2g",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer MM-2K/-2G",
    productTitle: "Gasmischer MM-2K/-2G",
    overviewHeader: "Sehr kompakter Gasmischer für 2 Gase für eine Vielzahl technischer Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "kontinuierliche Gasentnahme\n",
                "Leistungsbereiche bis ca. 196 Nl/min.\n",
                "kostengünstig\n",
                "inklusive Montagewinkel zur vereinfachten Befestigung\n",
                "stufenlose Gemischeinstellung\n",
                "unabhängig von Entnahmemengen- und Druckschwankungen in der Gasversorgung"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/1/b/csm_witt_gas_mixer_mm_2g_a93ca26ffd.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mm2k_2g_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 Gase und eine Vielzahl von technischen Anwendungen.",
    informationContent: [
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "kostengünstig\n",
                "kompaktes Design\n",
                "einfach zu installieren\n",
                "inkl. Montagewinkel zur vereinfachten Befestigung"
            ]
        },
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Proportional-Mischventil mit Drehknopf und %-Skala"
            ]
        },
        {
            type: 'list',
            header: "Konstante Qualität",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung\n",
                "unabhängig von Entnahmemengenschwankungen (im zulässigen Bereich)"
            ]
        },
        "",
        "Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um.\n" +
        "\n"
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/5/b/csm_gasmischer_mm2k_2g_d_97b3a0f38d.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mm2k_2g_d.pdf",
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

function MM2k2g() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MM2k2g;