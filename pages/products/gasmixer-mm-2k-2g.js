import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MM-2K/-2G",
    description: "Sehr kompakter Gasmischer für 2 Gase für eine Vielzahl technischer Anwendungen",
    keywords: "kompakter Gasmischer 2 Gase",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_mm_2g_bc4b867847.png.webp",
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
        "csm_witt_gas_mixer_mm_2g_bc4b867847.png.webp"
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
            image: "csm_gasmischer_mm2k_2g_d_00aa1adf5b.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mm2k_2g_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Gasmischer.png",
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