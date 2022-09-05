import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmicher KM Serie",
    description: "Gasmischer für 2 oder 3 Gase und eine Vielzahl technischer Anwendungen",
    keywords: "Gasmischer, 2 Gase, 3 Gase",
    og_image: "https://www.mmw.industries/images/products/csm_witt_gas_mixer_km20_2_0546f3c76d.png.webp",
    og_url: "https://mmw.industries/products/gasmixer-km-series",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmicher KM Serie",
    productTitle: "Gasmicher KM Serie",
    overviewHeader: "Gasmischer für 2 oder 3 Gase und eine Vielzahl technischer Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "kontinuierliche Gasentnahme\n",
                "variable, stufenlose Gemisch- und Mengeneinstellung\n",
                "unabhängig von Druckschwankungen in der Gasversorgung\n",
                "unabhängig von Entnahmeschwankungen\n",
                "unempfindliches Edelstahlgehäuse"
            ]
        },
    ],
    productImages: [
        "csm_witt_gas_mixer_km20_2_0546f3c76d.png.webp",
        "csm_witt_gas_mixer_km20-100_3_85c437a442.png.webp"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_100_2_3_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Gasmischer für 2 oder 3 definierte Gase und eine Vielzahl von technischen Anwendungen, zum Beispiel in der Schweißtechnik.",
    informationContent: [
        "Leistungsbereiche bis ca. 350 Nl/min.",
        "Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem Datenblatt.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "stufenlose Gemischeinstellung über zwei oder Einzelmischventile mit Drehknöpfen und %-Skalen\n",
                "stufenlose Mengeneinstellung mit skaliertem Drehknopf"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
            items: [
                "unabhängig von Druckschwankungen in der Gasversorgung durch integrierte Gleichdruckregelung\n" +
                "unabhängig von Entnahmemengenschwankungen (im zulässigen Bereich)"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "unempfindliches Edelstahlgehäuse"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehör auf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um."
    ],
    downloads: [
        {
            image: "csm_gasmischer_km20_100_2_3_d_5afc90ca6b.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_100_2_3_d.pdf",
            title: "Datenblatt",
            content: "Alle Technischen Informationen zu dem Produkt"
        },
        {
            image: "Broschuere_Gasmischer.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/brochures/german/Gasmischer_D.pdf",
            title: "Broschüre Gasmischer",
            content: ""
        }
    ]
};

function KmSeries() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default KmSeries;