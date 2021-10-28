import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer BM-2M",
    description: "Gasmischer für 2 Gase, zum direkten Flaschenanschluss (Hochdruck)",
    keywords: "Gasmischer für 2 Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/6/0/csm_witt_gas_mixer_bm-2m_0b5bded2fc.png",
    og_url: "https://mmw.industries/products/gasmixer-bm-2m",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer BM-2M",
    productTitle: "Gasmischer BM-2M",
    overviewHeader: "Gasmischer für 2 Gase, zum direkten Flaschenanschluss (Hochdruck)",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "kostengünstig\n",
                "kompaktes Design\n",
                "einfache Installation\n",
                "für bis zu 200 oder 300 bar\n",
                "optional: BM-2V mit Ausgangsdruckregelung\n",
                "Schutz vor gefährlichem Überdruck\n",
                "kein zusätzlicher Druckregler nötig"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/6/0/csm_witt_gas_mixer_bm-2m_ef1be984a0.png",
        "https://www.wittgas.com/fileadmin/_processed_/4/5/csm_witt_gas_mixer_bm-2v_1f2bc04da8.png",
        "https://www.wittgas.com/fileadmin/_processed_/2/b/csm_witt_gas_mixer_bm_2m_application_002d231e04.jpg"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_bm_2m_2v_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "<iframe width=\"701\" height=\"394\" src=\"https://www.youtube.com/embed/xURlzrsK7Y0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    informationHeader: "Gasmischer für 2 definierte Gase und eine Vielzahl von technischen Anwendungen zum direkten Flaschenanschluss (Hochdruck).",
    informationContent: [
        {
            type: 'span',
            content: "BM-2M Leistungsbereiche bis ca. 111 Nl/min.\n" +
                "BM-2V Leistungsbereiche bis ca. 142 Nl/min.\n" +
                "Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem Datenblatt."
        },
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "kostengünstig, da keine weiteren Komponenten wie z.B. Druckregler notwendig\n",
                "kompaktes Design\n",
                "einfach zu installieren\n",
                "Schutz des nachgeschalteten Systems vor gefährlichem Überdruck durch zwei integrierte Abblaseventile"
            ]
        },
        {
            type: 'list',
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über Proportional-Mischventil mit Drehknopf und %-Skala\n",
                "stufenlose Mengeneinstellung mit skaliertem Drehknopf (BM-2M)\n",
                "Ausgangsdruck über Steuerdruckregler regelbar (BM-2V)"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozessicherheit:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n",
                "unabhängig von Entnahmemengenschwankungen (im zulässigen Bereich)"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/d/2/csm_gas_mixer_bm_2m_2v_uk_a333e83a3c.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_bm_2m_2v_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/a/d/csm_Flyer_praktische_Beispiele_Gasmischer_BM2M_DE_fc93ee68a5.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Flyer_praktische_Beispiele_Gasmischer_BM2M_DE.pdf",
            title: "Flyer \"WITT Gasmischer BM-2M - Anwendungsbericht\"",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/6/csm_Gasmischer_D_63720b3725.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmsicher",
            content: ""
        },
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/2/8/csm_witt_brochure_gas_safety_technology_EN_2fa1d04495.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/witt_broschuere_gassicherheitstechnologie_DE.pdf",
            title: "Broschüre Zentrale Gasversorgung - Gassicherheitstechnik",
            content: ""
        }
    ]
};

function Bm2m() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default Bm2m;