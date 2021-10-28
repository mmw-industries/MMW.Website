import ProductDetailTemplate from "../../src/components/ProductDetailTemplate";

const meta = {
    title: "Gasmischer MM-FLEX Ex",
    description: "Mischsysteme für 2 definierte Gase und eine Vielzahl von technischen Anwendungen zum Beispiel in der Schweißtechnik.",
    keywords: "kompakter Gasmischer, 2 Gase, Ex Version",
    og_image: "https://www.wittgas.com/fileadmin/_processed_/8/b/csm_witt_gas_mixer_mm-flex_1_original3_f8e190d6b0.png",
    og_url: "https://mmw.industries/products/gasmixer-mm-flex-ex",
};

const data = {
    breadCrumb: "Startseite / Produkte / Gasmischer MM-FLEX Ex",
    productTitle: "Gasmischer MM-FLEX Ex",
    overviewHeader: "Mischsysteme für 2 definierte Gase und eine Vielzahl von technischen Anwendungen zum Beispiel in der Schweißtechnik.",
    overviewContent: [
        {
            type: 'list',
            header: "",
            items: [
                "Qualitäts-Gasmischer vom Weltmarktführer\n",
                "unabhängig von Entnahmemengenschwankungen\n",
                "Leistungsbereiche bis ca. 216 Nl/min.\n",
                "kostengünstig\n",
                "einfach zu installieren\n",
                "Wandmontage möglich"
            ]
        },
    ],
    productImages: [
        "https://www.wittgas.com/fileadmin/_processed_/8/b/csm_witt_gas_mixer_mm-flex_1_original3_f8e190d6b0.png"
    ],
    datasheetLink: "https://www.wittgas.com/fileadmin/user_upload/Dateien/data_sheets/german/gas_control/gasmischer_mm_flex_d.pdf",
    // iframe link from youtube (embeeded share)
    youtubeVideo: "",
    informationHeader: "Mischsysteme für 2 definierte Gase und eine Vielzahl von technischen Anwendungen zum Beispiel in der Schweißtechnik.",
    informationContent: [
        "Leistungsbereiche bis ca. 216 Nl/min.\n" +
        "Die genauen Druck-Leistungsverhältnisse entnehmen Sie bitte dem Datenblatt.",
        {
            type: 'list',
            header: "Vorteile:",
            items: [
                "kostengünstig\n",
                "sehr kompaktes Design\n",
                "einfach zu installieren\n",
                "Wandmontage möglich\n",
                "Mess-/ Ausgangsdruck einstellbar\n"
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
                "unabhängig von Druckschwankungen in derGasversorgung durch integrierte Gleichdruckregelung\n",
                "unabhängig von Entnahmemengenschwankungen (im zulässigen Bereich)"
            ]
        },
        {
            type: 'list',
            header: "Optionen:",
            items: [
                "Schnellverschraubung WITTFIX für Kupferrohr AD 8 mm\n",
                "Flammensperre im Ausgang (für brennbare Gase)\n",
                "Magnetventil zum Absperren im Ausgang, 230 V AC oder 24 V DC, auch in Ex-Ausführung"
            ]
        },
        "",
        "Weitere Ausführungen und Optionen sowie Zubehörauf Anfrage. Bitte geben Sie bei Anfragen die gewünschten Gasarten an!",
        "",
        "Unsere Gasmischer werden immer auf die Bedürfnisse des Kunden zugeschnitten. Bitte nennen Sie uns Ihre Anforderungen, wir setzen sie um.\n" +
        "\n"
    ],
    downloads: [
        {
            image: "https://www.wittgas.com/fileadmin/_processed_/8/b/csm_witt_gas_mixer_mm-flex_1_original3_f8e190d6b0.png",
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

function MMFlexEx() {
    return (
        <ProductDetailTemplate
            data={data}
            meta={meta}
        />
    )
}

export default MMFlexEx;