import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer KM Ex Serie",
    description: "Gasmischer für 2 oder 3 brennbare Gase und eine Vielzahl technischer Anwendungen",
    keywords: "Gasmischer brennbare Gase, 2 Gase, 3 Gase",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/5/a/csm_witt_gas_mixer_km20_2_7b1f9ba97c.png",
    og_url: "https://mmw.industries/products/gasmixer-km-ex-series",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer KM Ex Serie",
    productTitle: "Gasmischer KM Ex Serie",
    overviewHeader: "Gasmischer für 2 oder 3 brennbare Gase und eine Vielzahl technischer Anwendungen",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "kontinuierliche Gasentnahme\n",
                "variable, stufenlose Gemisch- und Mengeneinstellun\n",
                "unabhängig von Druckschwankungen in der Gasversorgung\n",
                "unabhängig von Entnahmeschwankungen\n",
                "unempfindliches Edelstahlgehäuse"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/5/a/csm_witt_gas_mixer_km20_2_7b1f9ba97c.png",
        "https://www.wittgas.com/fileadmin/_processed_/5/f/csm_witt_gas_mixer_km20-100_3_03e667971d.png"
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
            header: "Einfache Bedienung:",
            items: [
                "stufenlose Gemischeinstellung über zwei oder drei Einzelmischventile mit Drehknöpfen und %-Skalen\n",
                "stufenlose Mengeneinstellung mit skaliertem Drehknopf"
            ]
        },
        {
            type: 'list',
            header: "Hohe Prozesssicherheit:",
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
            image: "https://www.wittgas.com/fileadmin/_processed_/5/3/csm_gasmischer_km20_100_2_3_d_e8d1ef8a33.png",
            link: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_km20_100_2_3_d.pdf",
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

function KmExSeries() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default KmExSeries;